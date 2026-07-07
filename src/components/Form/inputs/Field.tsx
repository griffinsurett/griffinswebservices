// src/components/Form/inputs/Field.tsx
/**
 * Field — the accessible foundation every form control is built on.
 *
 * Owns the label ↔ control ↔ error/hint relationships so WCAG 2.2 AA holds for
 * free at every call site:
 *   - a real <label for={id}> (never a placeholder standing in as the label) —
 *     rendered as a FLOATING label so the compact "placeholder look" is kept:
 *     it sits over the field at rest and floats up on focus/fill.
 *   - required marked with aria-required AND a text-labelled "*" (not colour
 *     alone) — 1.4.1 / 3.3.2.
 *   - hint + error text linked to the control via aria-describedby, and
 *     aria-invalid toggled on error — 3.3.1 / 3.3.3 / 4.1.2.
 *
 * Controls (Input/Textarea/Select) call `useField()` to get the wired ids and
 * ARIA props, then render themselves inside <Field>.
 */
import { useId, type ReactNode } from "react";

export interface FieldA11y {
  /** id for the control (label's htmlFor points here). */
  id: string;
  /** Props to spread onto the <input>/<textarea>/<select>. */
  controlProps: {
    id: string;
    "aria-required"?: true;
    "aria-invalid"?: true;
    "aria-describedby"?: string;
  };
  hintId?: string;
  errorId?: string;
}

/**
 * Compute the ids + ARIA wiring for a control. Call from Input/Textarea/Select.
 */
export function useField(opts: {
  name: string;
  idProp?: string;
  required?: boolean;
  hint?: ReactNode;
  error?: ReactNode;
  describedBy?: string;
}): FieldA11y {
  const reactId = useId();
  const id = opts.idProp ?? `${opts.name}-${reactId}`;
  const hintId = opts.hint ? `${id}-hint` : undefined;
  const errorId = opts.error ? `${id}-error` : undefined;

  const describedBy =
    [opts.describedBy, hintId, errorId].filter(Boolean).join(" ") || undefined;

  return {
    id,
    hintId,
    errorId,
    controlProps: {
      id,
      ...(opts.required ? { "aria-required": true as const } : {}),
      ...(opts.error ? { "aria-invalid": true as const } : {}),
      ...(describedBy ? { "aria-describedby": describedBy } : {}),
    },
  };
}

interface FieldProps {
  a11y: FieldA11y;
  label?: ReactNode;
  required?: boolean;
  /** Persistent helper text (format hints etc.). */
  hint?: ReactNode;
  /** Error text; presence flips the control to the invalid state. */
  error?: ReactNode;
  containerClassName?: string;
  labelClassName?: string;
  /** Floating-label mode keeps the compact placeholder look. Default true. */
  floating?: boolean;
  /** Whether the field currently has a value / is focused (drives the float). */
  filled?: boolean;
  children: ReactNode;
}

export default function Field({
  a11y,
  label,
  required = false,
  hint,
  error,
  containerClassName = "space-y-2",
  labelClassName,
  floating = true,
  filled = false,
  children,
}: FieldProps) {
  const { id, hintId, errorId } = a11y;

  // Floating label: absolutely positioned over the control, animates up when the
  // field is focused-within or filled. Purely visual — it is always a real
  // <label for>, so screen readers get the name whatever the visual state.
  if (floating && label) {
    return (
      <div className={`relative ${containerClassName === "space-y-2" ? "" : containerClassName}`.trim()}>
        <div className="relative">
          {children}
          <label
            htmlFor={id}
            className={[
              "pointer-events-none absolute left-4 origin-[0] text-muted transition-all duration-200",
              "top-1/2 -translate-y-1/2 text-base",
              // Floated state — either the field has a value, or it's focused.
              filled ? "!top-2 !-translate-y-0 !text-xs !text-primary" : "",
              "peer-focus:!top-2 peer-focus:!-translate-y-0 peer-focus:!text-xs peer-focus:!text-primary",
              labelClassName ?? "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {label}
            {required && (
              <span className="text-primary">
                {" *"}
                <span className="sr-only"> (required)</span>
              </span>
            )}
          </label>
        </div>
        {hint && (
          <p id={hintId} className="mt-1 text-xs text-muted">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} className="mt-1 text-xs font-medium text-red-500">
            <span aria-hidden="true">⚠ </span>
            {error}
          </p>
        )}
      </div>
    );
  }

  // Stacked (non-floating) layout for controls that can't host a floating label.
  return (
    <div className={containerClassName}>
      {label && (
        <label
          htmlFor={id}
          className={labelClassName ?? "block text-sm text-text"}
        >
          {label}
          {required && (
            <span className="text-primary">
              {" *"}
              <span className="sr-only"> (required)</span>
            </span>
          )}
        </label>
      )}
      {children}
      {hint && (
        <p id={hintId} className="text-xs text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-xs font-medium text-red-500">
          <span aria-hidden="true">⚠ </span>
          {error}
        </p>
      )}
    </div>
  );
}
