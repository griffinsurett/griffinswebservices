import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { C as CircleCheckbox } from './theme-shared_iv3JfkjP.mjs';

const supportedLanguages = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "iw", name: "Hebrew", nativeName: "עברית", flag: "🇮🇱" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", flag: "🇺🇦" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
  { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文", flag: "🇨🇳" },
  { code: "zh-TW", name: "Chinese (Traditional)", nativeName: "繁體中文", flag: "🇹🇼" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" }
];
const defaultLanguage = supportedLanguages[0];
function getLanguageByCode(code) {
  return supportedLanguages.find((lang) => lang.code === code);
}

const OPEN_EVENT = "open-cookie-preferences";
function requestCookiePreferencesModal() {
  if (typeof window === "undefined") return false;
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
  return true;
}
function subscribeToCookiePreferencesRequests(handler) {
  if (typeof window === "undefined") {
    return () => {
    };
  }
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}

const hasFunctionalConsentFast = () => {
  if (typeof document === "undefined") return false;
  const match = document.cookie.match(/cookie-consent=([^;]*)/);
  if (!match) return false;
  try {
    const consent = JSON.parse(decodeURIComponent(match[1]));
    return consent?.functional === true;
  } catch {
    return false;
  }
};
const CONSENT_MESSAGE = "Please enable functional cookies to use the language switcher. You can manage your preferences in the cookie settings.";
const hasNativeTranslation = () => {
  if (typeof window === "undefined") return false;
  const config = window.getTranslationConfig?.();
  const enabledInConfig = config?.enableNative !== false;
  return enabledInConfig && "Translator" in window;
};
const isGoogleTranslateEnabled = () => {
  if (typeof window === "undefined") return true;
  const config = window.getTranslationConfig?.();
  return config?.enableGoogle !== false;
};
function LanguageDropdownContent({ open, onClose, onLanguageChange }) {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window === "undefined") return defaultLanguage;
    const code = localStorage.getItem("user-language") || defaultLanguage.code;
    return getLanguageByCode(code) || defaultLanguage;
  });
  const [hasFunctionalConsent, setHasFunctionalConsent] = useState(() => hasFunctionalConsentFast());
  useEffect(() => {
    if (open) {
      setHasFunctionalConsent(hasFunctionalConsentFast());
    }
  }, [open]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleConsentChange = () => setHasFunctionalConsent(hasFunctionalConsentFast());
    window.addEventListener("consent-changed", handleConsentChange);
    return () => window.removeEventListener("consent-changed", handleConsentChange);
  }, []);
  const handleOpenConsentModal = () => {
    requestCookiePreferencesModal();
    onClose();
  };
  const handleLanguageChange = (code) => {
    const googleEnabled = isGoogleTranslateEnabled();
    const nativeAvailable = hasNativeTranslation();
    const needsConsent = !nativeAvailable && googleEnabled && !hasFunctionalConsent;
    if (needsConsent && code !== "en") {
      alert(CONSENT_MESSAGE);
      return;
    }
    if (!nativeAvailable && !googleEnabled && code !== "en") {
      alert("Translation is currently disabled.");
      return;
    }
    const nextLanguage = getLanguageByCode(code);
    if (nextLanguage) {
      setCurrentLanguage(nextLanguage);
      onLanguageChange(code);
    }
    if (typeof window !== "undefined" && window.changeLanguage) {
      window.changeLanguage(code);
    }
    onClose();
  };
  if (!open) return null;
  return /* @__PURE__ */ jsx(Fragment, { children: open && /* @__PURE__ */ jsxs(
    "div",
    {
      className: "absolute top-full left-1/2 z-[60] mt-3 min-w-[220px] -translate-x-1/2 rounded-2xl border card-bg p-3 shadow-2xl backdrop-blur-xl",
      onWheel: (event) => event.stopPropagation(),
      onWheelCapture: (event) => event.stopPropagation(),
      children: [
        !hasNativeTranslation() && isGoogleTranslateEnabled() && !hasFunctionalConsent && /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: handleOpenConsentModal,
            className: "mb-2 rounded-xl border border-yellow-400/40 bg-yellow-500/15 px-3 py-2 text-xs text-text text-left transition hover:border-yellow-400 hover:bg-yellow-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400",
            children: [
              "Enable functional cookies to switch languages.",
              /* @__PURE__ */ jsx("span", { className: "mt-1 block text-[11px] font-semibold uppercase tracking-wide text-primary", children: "Manage consent preferences" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex max-h-64 flex-col overflow-y-auto", children: supportedLanguages.map((language) => {
          const isActive = language.code === currentLanguage.code;
          const isDisabled = !hasNativeTranslation() && isGoogleTranslateEnabled() && !hasFunctionalConsent;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: `flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${isActive ? "bg-primary/20 text-primary font-semibold" : "hover:bg-white/5 text-text"} ${isDisabled ? "cursor-not-allowed opacity-60" : ""}`,
              onClick: () => handleLanguageChange(language.code),
              disabled: isDisabled,
              children: [
                language.flag && /* @__PURE__ */ jsx("span", { className: "text-lg", "aria-hidden": "true", children: language.flag }),
                /* @__PURE__ */ jsxs("span", { className: "flex-1 text-left", children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-base leading-tight", children: language.nativeName }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-text/70", children: language.name })
                ] }),
                isActive && /* @__PURE__ */ jsx("span", { className: "text-primary", "aria-label": "Currently selected language", children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    className: "w-4 h-4",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsx("path", { d: "M5 12l4 4L19 7" })
                  }
                ) })
              ]
            },
            language.code
          );
        }) })
      ]
    }
  ) });
}

function getStoredLanguageCode() {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem("user-language") || "en";
}
const FLAG_MAP = {
  en: "🇺🇸",
  es: "🇪🇸",
  hi: "🇮🇳",
  iw: "🇮🇱",
  de: "🇩🇪",
  ru: "🇷🇺",
  uk: "🇺🇦",
  it: "🇮🇹",
  fr: "🇫🇷",
  pt: "🇵🇹",
  "zh-cn": "🇨🇳",
  zh: "🇨🇳",
  "zh-tw": "🇹🇼",
  ja: "🇯🇵",
  ko: "🇰🇷",
  ar: "🇸🇦"
};
function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("en");
  const containerRef = useRef(null);
  useEffect(() => {
    setCurrentCode(getStoredLanguageCode());
  }, []);
  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === "user-language") {
        setCurrentCode(event.newValue || "en");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  useEffect(() => {
    if (!open) return;
    const handleClick = (event) => {
      if (containerRef.current?.contains(event.target)) return;
      setOpen(false);
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);
  const handleToggle = () => {
    setOpen((v) => !v);
  };
  const normalizedCode = currentCode.toLowerCase();
  const currentFlag = FLAG_MAP[normalizedCode] || FLAG_MAP[normalizedCode.split("-")[0]] || FLAG_MAP.en;
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: "relative contents", children: [
    /* @__PURE__ */ jsx(
      CircleCheckbox,
      {
        checked: open,
        onChange: handleToggle,
        "aria-label": "Choose display language",
        title: "Choose your site language",
        className: `faded-bg text-primary ${open ? "ring-2 ring-primary/60" : ""}`,
        children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-xl leading-none", "aria-hidden": "true", children: currentFlag }) })
      }
    ),
    open && /* @__PURE__ */ jsx(
      LanguageDropdownContent,
      {
        open,
        onClose: () => setOpen(false),
        onLanguageChange: (code) => setCurrentCode(code)
      }
    )
  ] });
}

export { LanguageDropdown as L, subscribeToCookiePreferencesRequests as a, getLanguageByCode as g, supportedLanguages as s };
