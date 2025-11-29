import { useEffect, useRef, useState, lazy, Suspense } from "react";
import Icon from "@/components/Icon";
import { CircleCheckbox } from "./checkboxes/CircleCheckbox";
import {
  supportedLanguages,
  getLanguageByCode,
  defaultLanguage,
  type Language,
} from "@/utils/languageTranslation/languages";
import { useConsent } from "@/hooks/useConsent";

const CookiePreferencesModal = lazy(
  () => import("@/components/preferences/consent/CookiePreferencesModal"),
);

const CONSENT_MESSAGE =
  "Please enable functional cookies to use the language switcher. You can manage your preferences in the cookie settings.";

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return defaultLanguage;
  const code = localStorage.getItem("user-language") || defaultLanguage.code;
  return getLanguageByCode(code) || defaultLanguage;
}

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    getStoredLanguage,
  );
  const [showConsentModal, setShowConsentModal] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { hasConsentFor } = useConsent();
  const hasFunctionalConsent = hasConsentFor("functional");

  useEffect(() => {
    setCurrentLanguage(getStoredLanguage());
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleClick = (event: MouseEvent) => {
      if (containerRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== "user-language") return;
      setCurrentLanguage(
        getLanguageByCode(event.newValue || defaultLanguage.code) ||
          defaultLanguage,
      );
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleOpenConsentModal = () => {
    setShowConsentModal(true);
    setOpen(false);
  };

  const handleCloseConsentModal = () => {
    setShowConsentModal(false);
  };

  const handleLanguageChange = (code: string) => {
    if (!hasFunctionalConsent) {
      alert(CONSENT_MESSAGE);
      return;
    }

    const nextLanguage = getLanguageByCode(code);
    if (nextLanguage) {
      setCurrentLanguage(nextLanguage);
    }

    if (typeof window !== "undefined" && (window as any).changeLanguage) {
      (window as any).changeLanguage(code);
    }

    setOpen(false);
  };

  const buttonClasses = [
    "faded-bg",
    open ? "ring-2 ring-primary/60" : "",
    "text-primary",
  ]
    .filter(Boolean)
    .join(" ");

  const currentCode =
    currentLanguage.code?.split("-")[0]?.toUpperCase() || "EN";

  return (
    <div ref={containerRef} className="relative contents">
      <CircleCheckbox
        checked={open}
        onChange={() => setOpen((value) => !value)}
        aria-label="Choose display language"
        title={
          hasFunctionalConsent
            ? "Choose your site language"
            : "Enable functional cookies to change language"
        }
        className={buttonClasses}
      >
        <div className="flex items-center justify-center">
          <Icon icon="lucide:globe" size="sm" aria-label="Language picker" />
        </div>
      </CircleCheckbox>

      {open && (
        <div
          className="absolute top-full left-1/2 z-[60] mt-3 min-w-[220px] -translate-x-1/2 rounded-2xl border card-bg p-3 shadow-2xl backdrop-blur-xl"
          onWheel={(event) => {
            // Prevent wheel scroll from bubbling to window (which hides the logo text)
            event.stopPropagation();
          }}
          onWheelCapture={(event) => event.stopPropagation()}
        >
          {!hasFunctionalConsent && (
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
              return (
                <button
                  key={language.code}
                  type="button"
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-primary/20 text-primary font-semibold"
                      : "hover:bg-white/5 text-text"
                  } ${!hasFunctionalConsent ? "cursor-not-allowed opacity-60" : ""}`}
                  onClick={() => handleLanguageChange(language.code)}
                  disabled={!hasFunctionalConsent}
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
                    <span
                      className="text-primary"
                      aria-label="Currently selected language"
                    >
                      <Icon icon="lucide:check" size="sm" className="text-primary" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {showConsentModal && (
        <Suspense fallback={null}>
          <CookiePreferencesModal
            isOpen={showConsentModal}
            onClose={handleCloseConsentModal}
          />
        </Suspense>
      )}
    </div>
  );
}
