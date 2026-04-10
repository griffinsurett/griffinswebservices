import { useEffect, useId, useRef, useState } from "react";
import DarkLightToggle from "./DarkLightToggle";
import AccentPicker from "./AccentPicker";
import LanguagePicker from "./LanguagePicker";
import Icon from "@/components/Icon";
import { UseMode } from "@/hooks/theme/UseMode";
import { useAccentColor } from "@/hooks/useAccentColor";
import { useLanguageSwitcher } from "@/integrations/preferences/language/core/hooks/useLanguageSwitcher";
import { SquareCheckbox } from "./checkboxes/SquareCheckbox";

interface ThemeControlsProps {
  className?: string;
}

type MobilePanel = "root" | "language" | "accent";

function MobileActionButton({
  label,
  onClick,
  leading,
  trailing,
}: {
  label: string;
  onClick: () => void;
  leading: React.ReactNode;
  trailing: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left text-text transition-colors main-duration hover:bg-primary/8"
    >
      <span className="flex items-center gap-3">
        <span className="faded-bg inline-flex h-9 w-9 items-center justify-center rounded-full text-primary">
          {leading}
        </span>
        <span className="text-sm font-medium">{label}</span>
      </span>
      <span className="text-sm text-text/75">{trailing}</span>
    </button>
  );
}

function ThemeGlyph({
  isLight,
  gradientId,
  className = "h-[18px] w-[18px]",
}: {
  isLight: boolean;
  gradientId: string;
  className?: string;
}) {
  const maskId = useId();
  const R = 18;
  const ratio = 0.69;
  const rIn = R * ratio;
  const dx = -R * 0.4;
  const dy = R * -0.2;

  if (isLight) {
    return (
      <svg
        viewBox="13 13 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="18" fill={`url(#${gradientId})`} />
        <g stroke={`url(#${gradientId})`} strokeWidth="4" strokeLinecap="round">
          <line x1="50" y1="15" x2="50" y2="25" />
          <line x1="50" y1="75" x2="50" y2="85" />
          <line x1="15" y1="50" x2="25" y2="50" />
          <line x1="75" y1="50" x2="85" y2="50" />
          <line x1="25.86" y1="25.86" x2="32.32" y2="32.32" />
          <line x1="67.68" y1="67.68" x2="74.14" y2="74.14" />
          <line x1="25.86" y1="74.14" x2="32.32" y2="67.68" />
          <line x1="67.68" y1="32.32" x2="74.14" y2="25.86" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="32 32 36 36"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <rect width="100%" height="100%" fill="#000" />
          <circle cx="50" cy="50" r={18} fill="#fff" />
          <circle cx={50 + dx} cy={50 + dy} r={rIn} fill="#000" />
        </mask>
      </defs>
      <circle
        cx="50"
        cy="50"
        r={18}
        mask={`url(#${maskId})`}
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}

export default function ThemeControls({ className = "" }: ThemeControlsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>("root");
  const [isLight, setIsLight] = UseMode();
  const { accent, setAccent, accents } = useAccentColor();
  const {
    currentLanguage,
    requiresConsent,
    supportedLanguages,
    changeLanguage,
    openConsentModal,
  } = useLanguageSwitcher();
  const iconGradientId = useId();
  const accentGradientId = useId();

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobilePanel("root");
  };

  const openMobileMenu = () => {
    setMobilePanel("root");
    setMobileOpen(true);
  };

  useEffect(() => {
    if (!mobileOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (ref.current?.contains(event.target as Node)) return;
      closeMobileMenu();
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    const handleResize = () => {
      if (window.innerWidth >= 640) closeMobileMenu();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

  const handleThemeToggle = () => {
    setIsLight(!isLight);
    closeMobileMenu();
  };

  const handleAccentSelect = (color: string) => {
    setAccent(color);
    closeMobileMenu();
  };

  const handleLanguageSelect = (code: string) => {
    const result = changeLanguage(code);

    if (!result.success) {
      if (requiresConsent && code !== "en") {
        openConsentModal();
        closeMobileMenu();
        return;
      }

      if (result.error) alert(result.error);
      return;
    }

    closeMobileMenu();
  };

  return (
    <div
      ref={ref}
      className={[
        "relative flex h-9 shrink-0 items-center justify-center sm:h-10",
        "transition-opacity duration-300 ease-in-out z-999999",
        hidden
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <svg
        aria-hidden="true"
        width="0"
        height="0"
        focusable="false"
        className="pointer-events-none absolute h-0 w-0 overflow-hidden"
      >
        <defs>
          <linearGradient id={iconGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" className="text-primary-100" />
            <stop offset="55%" stopColor="currentColor" className="text-primary" />
            <stop offset="100%" stopColor="currentColor" className="text-primary-800" />
          </linearGradient>
          <linearGradient id={accentGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" className="text-accent-100" />
            <stop offset="55%" stopColor="currentColor" className="text-accent" />
            <stop offset="100%" stopColor="currentColor" className="text-accent-800" />
          </linearGradient>
        </defs>
      </svg>

      <button
        type="button"
        className="faded-bg inline-flex h-8 w-8 items-center justify-center rounded-full text-primary transition-all main-duration sm:hidden"
        aria-label="Open preferences"
        aria-expanded={mobileOpen}
        aria-haspopup="menu"
        onClick={() => (mobileOpen ? closeMobileMenu() : openMobileMenu())}
      >
        <Icon icon="lu:settings" size="sm" className="h-4 w-4 text-current" />
      </button>

      <div className="hidden h-10 items-center gap-1.5 sm:flex">
        <LanguagePicker />
        <DarkLightToggle gradientId={iconGradientId} />
        <AccentPicker gradientId={accentGradientId} />
      </div>

      {mobileOpen && (
        <div
          className="absolute left-1/2 top-full z-10 mt-4 w-[min(18rem,calc(100vw-1.5rem))] -translate-x-1/2 rounded-2xl card-bg-2 p-3 shadow-2xl sm:hidden"
          onPointerDown={(event) => event.stopPropagation()}
          role="menu"
          aria-label="Preferences"
        >
          {mobilePanel === "root" && (
            <div className="flex flex-col gap-1">
              <MobileActionButton
                label="Theme"
                onClick={handleThemeToggle}
                leading={<ThemeGlyph isLight={isLight} gradientId={iconGradientId} />}
                trailing={isLight ? "Light" : "Dark"}
              />
              <MobileActionButton
                label="Language"
                onClick={() => setMobilePanel("language")}
                leading={
                  currentLanguage.flag ? (
                    <span className="text-[20px] leading-none" aria-hidden="true">
                      {currentLanguage.flag}
                    </span>
                  ) : (
                    <Icon icon="lu:globe" size="md" className="text-current" />
                  )
                }
                trailing={currentLanguage.flag || currentLanguage.code.toUpperCase()}
              />
              <MobileActionButton
                label="Accent"
                onClick={() => setMobilePanel("accent")}
                leading={<Icon icon="fa6:palette" size="md" className="text-current" />}
                trailing={
                  <span
                    className="inline-flex h-4 w-4 rounded-full border border-white/15"
                    style={{ backgroundColor: accent }}
                    aria-hidden="true"
                  />
                }
              />
            </div>
          )}

          {mobilePanel === "language" && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-2 py-1">
                <button
                  type="button"
                  onClick={() => setMobilePanel("root")}
                  className="text-sm font-medium text-primary transition-opacity hover:opacity-75"
                >
                  Back
                </button>
                <span className="text-sm font-medium text-heading">Language</span>
                <span className="w-9" aria-hidden="true"></span>
              </div>

              {requiresConsent && (
                <button
                  type="button"
                  onClick={() => {
                    openConsentModal();
                    closeMobileMenu();
                  }}
                  className="mx-1 rounded-2xl border border-yellow-400/35 bg-yellow-500/10 px-3 py-2 text-left text-xs text-text transition-colors hover:bg-yellow-500/15"
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
                  const isDisabled = requiresConsent && language.code !== "en";

                  return (
                    <button
                      key={language.code}
                      type="button"
                      className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition ${
                        isActive
                          ? "bg-primary/15 text-primary font-semibold"
                          : "text-text hover:bg-primary/8"
                      } ${isDisabled ? "cursor-not-allowed opacity-55" : ""}`}
                      onClick={() => handleLanguageSelect(language.code)}
                      disabled={isDisabled}
                    >
                      <span className="text-xl leading-none" aria-hidden="true">
                        {language.flag || "🌐"}
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm leading-tight">{language.nativeName}</span>
                        <span className="text-xs text-text/70">{language.name}</span>
                      </span>
                      {isActive && (
                        <span className="text-primary text-xs uppercase tracking-[0.16em]">
                          Active
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {mobilePanel === "accent" && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between px-2 py-1">
                <button
                  type="button"
                  onClick={() => setMobilePanel("root")}
                  className="text-sm font-medium text-primary transition-opacity hover:opacity-75"
                >
                  Back
                </button>
                <span className="text-sm font-medium text-heading">Accent</span>
                <span className="w-9" aria-hidden="true"></span>
              </div>

              <div className="grid grid-cols-4 gap-3 px-2 pt-1 pb-1">
                {accents.map((color) => {
                  return (
                    <div key={color} className="flex items-center justify-center">
                      <SquareCheckbox
                        color={color}
                        checked={accent === color}
                        onChange={() => handleAccentSelect(color)}
                        aria-label={`Select accent color ${color}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
