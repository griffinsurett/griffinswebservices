import { jsxs, jsx } from 'react/jsx-runtime';
import { memo, useTransition, useMemo, useState } from 'react';
import { u as useCookieStorage, M as Modal, t as enableConsentedScripts } from './BaseLayout_BLCbETNX.mjs';
import { B as Button, A as Accordion } from './accordion_CNWWAjUA.mjs';
import { T as ToggleControl } from './ToggleControl_BAq_4IfG.mjs';
import { a as Icon } from './ui-primitives_qUXBbRTf.mjs';

const cookieCategories = [
  {
    id: "necessary",
    title: "Strictly Necessary Cookies",
    description: "These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.",
    required: true
  },
  {
    id: "functional",
    title: "Functional Cookies",
    description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers."
  },
  {
    id: "performance",
    title: "Performance Cookies",
    description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site."
  },
  {
    id: "targeting",
    title: "Targeting Cookies",
    description: "These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts."
  }
];
function CookiePreferencesModal({
  isOpen,
  onClose
}) {
  const { getCookie, setCookie } = useCookieStorage();
  const [isPending, startTransition] = useTransition();
  const initialPreferences = useMemo(() => {
    const existingConsent = getCookie("cookie-consent");
    if (existingConsent) {
      try {
        return JSON.parse(existingConsent);
      } catch (error) {
        console.error("Failed to parse cookie consent:", error);
      }
    }
    return {
      necessary: true,
      functional: false,
      performance: false,
      targeting: false,
      timestamp: Date.now()
    };
  }, [getCookie]);
  const [preferences, setPreferences] = useState(initialPreferences);
  const accordionItems = cookieCategories.map((category, idx) => ({
    slug: category.id,
    title: category.title,
    description: category.description,
    contentSlotId: `cookie-category-${idx}-content`
  }));
  const handleToggle = (categoryId, nextValue) => {
    if (categoryId === "necessary") return;
    setPreferences((prev) => ({
      ...prev,
      [categoryId]: typeof nextValue === "boolean" ? nextValue : !prev[categoryId]
    }));
  };
  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      functional: false,
      performance: false,
      targeting: false,
      timestamp: Date.now()
    };
    setCookie("cookie-consent", JSON.stringify(consent), { expires: 365 });
    enableConsentedScripts();
    window.dispatchEvent(new Event("consent-changed"));
    startTransition(() => {
      onClose();
    });
  };
  const handleConfirm = () => {
    const consent = {
      ...preferences,
      timestamp: Date.now()
    };
    setCookie("cookie-consent", JSON.stringify(consent), { expires: 365 });
    enableConsentedScripts();
    window.dispatchEvent(new Event("consent-changed"));
    startTransition(() => {
      onClose();
    });
  };
  return /* @__PURE__ */ jsxs(
    Modal,
    {
      isOpen,
      onClose,
      closeButton: true,
      className: "bg-bg rounded-2xl p-8 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl",
      overlayClass: "bg-black/60",
      ariaLabel: "Manage cookie consent preferences",
      ssr: false,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-heading mb-4", children: "Manage Consent Preferences" }),
          /* @__PURE__ */ jsxs("p", { className: "text-text text-xs lg:text-sm leading-relaxed mb-3", children: [
            "We use cookies and similar technologies to help personalize content and offer a better experience. You can click",
            " ",
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "link",
                href: "/cookie-policy",
                children: "here"
              }
            ),
            " ",
            "to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer."
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "link",
              href: "/cookie-policy",
              children: [
                "More information",
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-4 h-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 5l7 7-7 7"
                      }
                    )
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Accordion,
          {
            allowMultiple: true,
            className: "space-y-3",
            items: accordionItems,
            showIndicator: false,
            headerSlot: ({ item, id, expanded }) => {
              const category = cookieCategories.find((c) => c.id === item.slug);
              if (!category) return null;
              const toggleId = `${id}-toggle`;
              return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 w-full", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 text-lg font-semibold ${expanded ? "bg-primary text-bg" : "bg-primary/20 text-accent"}`,
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsx(
                      Icon,
                      {
                        icon: expanded ? "lucide:minus" : "lucide:plus",
                        size: "sm",
                        className: "w-4 h-4"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-heading text-base flex-1", children: category.title }),
                /* @__PURE__ */ jsxs("div", { className: "shrink-0 flex items-center gap-3", children: [
                  category.required && /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary", children: "Always Active" }),
                  /* @__PURE__ */ jsx(
                    ToggleControl,
                    {
                      label: category.title,
                      description: category.description,
                      checked: preferences[category.id],
                      onChange: (checked) => handleToggle(category.id, checked),
                      disabled: category.required,
                      id: toggleId,
                      bordered: false,
                      className: "py-0",
                      hideText: true,
                      size: "lg"
                    }
                  )
                ] })
              ] });
            }
          }
        ),
        accordionItems.map((item, idx) => /* @__PURE__ */ jsx(
          "div",
          {
            id: `cookie-category-${idx}-content`,
            style: { display: "none" },
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-text leading-relaxed", children: item.description })
          },
          item.slug
        )),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-8", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              onClick: handleRejectAll,
              className: "flex-1",
              type: "button",
              disabled: isPending,
              children: "Reject All"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "primary",
              onClick: handleConfirm,
              className: "flex-1",
              animated: false,
              type: "button",
              disabled: isPending,
              children: "Confirm My Choices"
            }
          )
        ] })
      ]
    }
  );
}
const CookiePreferencesModal_default = memo(CookiePreferencesModal);

export { CookiePreferencesModal_default as default };
