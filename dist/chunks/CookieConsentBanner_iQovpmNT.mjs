import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useTransition, useRef, useEffect } from 'react';
import { u as useCookieStorage, e as enableConsentedScripts } from './scriptManager_D5wfoVoc.mjs';
import { M as Modal } from './BaseLayout_CePagbbj.mjs';
import { B as Button } from './accordion_kHxJbK3j.mjs';

function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { setCookie } = useCookieStorage();
  const [PreferencesModal, setPreferencesModal] = useState(null);
  const modalLoadStarted = useRef(false);
  useEffect(() => {
    if (document.cookie.includes("cookie-consent=")) return;
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      functional: true,
      performance: true,
      targeting: true,
      timestamp: Date.now()
    };
    setCookie("cookie-consent", JSON.stringify(consent), { expires: 365 });
    enableConsentedScripts();
    window.dispatchEvent(new Event("consent-changed"));
    startTransition(() => {
      setShowBanner(false);
    });
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
      setShowBanner(false);
    });
  };
  const handleOpenSettings = () => {
    if (!modalLoadStarted.current) {
      modalLoadStarted.current = true;
      import('./CookiePreferencesModal_BiZ4KFUe.mjs').then((m) => {
        setPreferencesModal(() => m.default);
        setShowModal(true);
      });
    } else {
      setShowModal(true);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Modal,
      {
        isOpen: showBanner,
        onClose: () => setShowBanner(false),
        closeButton: false,
        position: "bottom-left",
        className: "consent-banner",
        overlayClass: "bg-transparent pointer-events-none",
        allowScroll: true,
        ssr: false,
        ariaLabel: "Cookie consent banner",
        children: /* @__PURE__ */ jsx("div", { className: "outer-card-transition group text-left", children: /* @__PURE__ */ jsxs("div", { className: "outer-card-style card-bg-2", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "inner-card-style inner-card-transition inner-card-color",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl", role: "img", "aria-label": "Cookie", children: "🍪" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-text leading-relaxed", children: [
                "We use cookies to improve your browsing experience and for marketing purposes.",
                " ",
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "link",
                    onClick: handleOpenSettings,
                    type: "button",
                    children: "Manage preferences"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "secondary",
                  onClick: handleRejectAll,
                  fullWidth: true,
                  type: "button",
                  size: "md",
                  disabled: isPending,
                  children: "Reject All"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "primary",
                  onClick: handleAcceptAll,
                  fullWidth: true,
                  className: "flex-1",
                  animated: false,
                  type: "button",
                  size: "md",
                  disabled: isPending,
                  children: "Accept All"
                }
              )
            ] })
          ] })
        ] }) })
      }
    ),
    PreferencesModal && /* @__PURE__ */ jsx(
      PreferencesModal,
      {
        isOpen: showModal,
        onClose: () => setShowModal(false)
      }
    )
  ] });
}

export { CookieConsentBanner as default };
