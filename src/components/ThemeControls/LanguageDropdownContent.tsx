import { useEffect, useState } from "react";
import {
  supportedLanguages,
  getLanguageByCode,
  defaultLanguage,
} from "@/utils/languageTranslation/languages";
import { requestCookiePreferencesModal } from "@/utils/consent/events";

interface Props {
  open: boolean;
  onClose: () => void;
  onLanguageChange: (code: string) => void;
}

// Quick sync check via cookie
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

const CONSENT_MESSAGE =
  "Please enable functional cookies to use the language switcher. You can manage your preferences in the cookie settings.";

const hasNativeTranslation = () => {
  if (typeof window === "undefined") return false;
  const config = (window as any).getTranslationConfig?.();
  const enabledInConfig = config?.enableNative !== false;
  return enabledInConfig && "Translator" in window;
};

const isGoogleTranslateEnabled = () => {
  if (typeof window === "undefined") return true;
  const config = (window as any).getTranslationConfig?.();
  return config?.enableGoogle !== false;
};

export default function LanguageDropdownContent({ open, onClose, onLanguageChange }: Props) {
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

  const handleLanguageChange = (code: string) => {
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

    if (typeof window !== "undefined" && (window as any).changeLanguage) {
      (window as any).changeLanguage(code);
    }

    onClose();
  };

  if (!open) return null;

  return (
    <>
      {open && (
        <div
          className="absolute top-full left-1/2 z-[60] mt-3 min-w-[220px] -translate-x-1/2 rounded-2xl border card-bg p-3 shadow-2xl backdrop-blur-xl"
          onWheel={(event) => event.stopPropagation()}
          onWheelCapture={(event) => event.stopPropagation()}
        >
          {!hasNativeTranslation() && isGoogleTranslateEnabled() && !hasFunctionalConsent && (
            <button
              type="button"
              onClick={handleOpenConsentModal}
              className="mb-2 rounded-xl border border-yellow-400/40 bg-yellow-500/15 px-3 py-2 text-xs text-text text-left transition hover:border-yellow-400 hover:bg-yellow-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Enable functional cookies to switch languages.
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wide text-primary">
                Manage consent preferences
              </span>
            </button>
          )}

          <div className="flex max-h-64 flex-col overflow-y-auto">
            {supportedLanguages.map((language) => {
              const isActive = language.code === currentLanguage.code;
              const isDisabled = !hasNativeTranslation() && isGoogleTranslateEnabled() && !hasFunctionalConsent;
              return (
                <button
                  key={language.code}
                  type="button"
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-primary/20 text-primary font-semibold"
                      : "hover:bg-white/5 text-text"
                  } ${isDisabled ? "cursor-not-allowed opacity-60" : ""}`}
                  onClick={() => handleLanguageChange(language.code)}
                  disabled={isDisabled}
                >
                  {language.flag && (
                    <span className="text-lg" aria-hidden="true">
                      {language.flag}
                    </span>
                  )}
                  <span className="flex-1 text-left">
                    <span className="block text-base leading-tight">
                      {language.nativeName}
                    </span>
                    <span className="text-xs text-text/70">
                      {language.name}
                    </span>
                  </span>
                  {isActive && (
                    <span className="text-primary" aria-label="Currently selected language">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
