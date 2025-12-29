// src/utils/formspree.ts
type FormValues = Record<string, unknown>;

interface SubmitToFormspreeParams {
  formId?: string;
  endpoint?: string;
  values: FormValues;
  formName?: string;
  excludeKeys?: string[];
}

interface FormspreeResponse {
  errors?: { message: string }[];
}

const FORMSPREE_BASE_URL = "https://formspree.io/f/";

export async function submitToFormspree({
  formId,
  endpoint,
  values,
  formName,
  excludeKeys = [],
}: SubmitToFormspreeParams) {
  const targetUrl =
    endpoint ??
    (formId ? `${FORMSPREE_BASE_URL}${formId}` : undefined);

  if (!targetUrl) {
    throw new Error("Form configuration is missing a Formspree form ID.");
  }

  const sanitizedEntries = Object.entries(values).filter(
    ([key]) => !excludeKeys.includes(key)
  );

  const payload: FormValues = Object.fromEntries(sanitizedEntries);

  if (formName && !payload.formName) {
    payload.formName = formName;
  }

  if (typeof window !== "undefined" && window.location?.href) {
    payload.pageUrl = window.location.href;
  }

  const response = await fetch(targetUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let errorMessage = "Unable to submit the form. Please try again later.";

    try {
      const data = (await response.json()) as FormspreeResponse;
      errorMessage = data?.errors?.[0]?.message ?? errorMessage;
    } catch {
      // Ignore JSON parse errors and fall back to default message
    }

    throw new Error(errorMessage);
  }
}
