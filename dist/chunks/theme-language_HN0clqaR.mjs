import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useCallback } from 'react';

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

function hasFunctionalConsentFast() {
  if (typeof document === "undefined") return false;
  const match = document.cookie.match(/cookie-consent=([^;]*)/);
  if (!match) return false;
  try {
    const consent = JSON.parse(decodeURIComponent(match[1]));
    return consent?.functional === true;
  } catch {
    return false;
  }
}
function hasNativeTranslation() {
  if (typeof window === "undefined") return false;
  const config = window.getTranslationConfig?.();
  const enabledInConfig = config?.enableNative !== false;
  return enabledInConfig && "Translator" in window;
}
function isGoogleTranslateEnabled() {
  if (typeof window === "undefined") return true;
  const config = window.getTranslationConfig?.();
  return config?.enableGoogle !== false;
}
function getStoredLanguageCode() {
  if (typeof window === "undefined") return defaultLanguage.code;
  return localStorage.getItem("user-language") || defaultLanguage.code;
}
function useLanguageSwitcher() {
  const [languageCode, setLanguageCode] = useState(getStoredLanguageCode);
  const [hasFunctionalConsent, setHasFunctionalConsent] = useState(hasFunctionalConsentFast);
  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === "user-language") {
        setLanguageCode(event.newValue || defaultLanguage.code);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleConsentChange = () => setHasFunctionalConsent(hasFunctionalConsentFast());
    window.addEventListener("consent-changed", handleConsentChange);
    return () => window.removeEventListener("consent-changed", handleConsentChange);
  }, []);
  const currentLanguage = getLanguageByCode(languageCode) || defaultLanguage;
  const nativeAvailable = hasNativeTranslation();
  const googleEnabled = isGoogleTranslateEnabled();
  const requiresConsent = !nativeAvailable && googleEnabled && !hasFunctionalConsent;
  const changeLanguage = useCallback((code) => {
    const nativeAvailable2 = hasNativeTranslation();
    const googleEnabled2 = isGoogleTranslateEnabled();
    const hasConsent = hasFunctionalConsentFast();
    const needsConsent = !nativeAvailable2 && googleEnabled2 && !hasConsent;
    if (needsConsent && code !== "en") {
      return {
        success: false,
        error: "Please enable functional cookies to use the language switcher."
      };
    }
    if (!nativeAvailable2 && !googleEnabled2 && code !== "en") {
      return {
        success: false,
        error: "Translation is currently disabled."
      };
    }
    const nextLanguage = getLanguageByCode(code);
    if (!nextLanguage) {
      return {
        success: false,
        error: `Invalid language code: ${code}`
      };
    }
    setLanguageCode(code);
    if (typeof window !== "undefined" && window.changeLanguage) {
      window.changeLanguage(code);
    }
    return { success: true };
  }, []);
  const openConsentModal = useCallback(() => {
    requestCookiePreferencesModal();
  }, []);
  const resetLanguage = useCallback(() => {
    changeLanguage(defaultLanguage.code);
  }, [changeLanguage]);
  return {
    currentLanguage,
    languageCode,
    hasFunctionalConsent,
    hasNativeTranslation: nativeAvailable,
    isGoogleTranslateEnabled: googleEnabled,
    requiresConsent,
    supportedLanguages,
    changeLanguage,
    openConsentModal,
    resetLanguage
  };
}

function LanguageDropdown({ open, onClose, onLanguageChange }) {
  const {
    currentLanguage,
    requiresConsent,
    supportedLanguages,
    changeLanguage,
    openConsentModal
  } = useLanguageSwitcher();
  const handleOpenConsentModal = () => {
    openConsentModal();
    onClose();
  };
  const handleLanguageChange = (code) => {
    const result = changeLanguage(code);
    if (!result.success && result.error) {
      alert(result.error);
      return;
    }
    onLanguageChange(code);
    onClose();
  };
  if (!open) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "absolute top-full left-1/2 z-[60] mt-3 min-w-[220px] -translate-x-1/2 rounded-2xl border card-bg p-3 shadow-2xl backdrop-blur-xl",
      onWheel: (event) => event.stopPropagation(),
      onWheelCapture: (event) => event.stopPropagation(),
      children: [
        requiresConsent && /* @__PURE__ */ jsxs(
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
          const isDisabled = requiresConsent && language.code !== "en";
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
  );
}

export { LanguageDropdown as L, subscribeToCookiePreferencesRequests as s, useLanguageSwitcher as u };
