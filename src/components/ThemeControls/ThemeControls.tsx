import { useEffect, useId, useRef, useState } from "react";
import DarkLightToggle from "./DarkLightToggle";
import AccentPicker from "./AccentPicker";
import Icon from "@/components/Icon";
import { UseMode } from "@/hooks/theme/UseMode";
import { useAccentColor } from "@/hooks/useAccentColor";
import { SquareCheckbox } from "./checkboxes/SquareCheckbox";

interface ThemeControlsProps {
  className?: string;
}

type MobilePanel = "root" | "accent";

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

export default function ThemeControls({ className = "" }: ThemeControlsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>("root");
  const [isLight, setIsLight] = UseMode();
  const { accent, setAccent, accents } = useAccentColor();
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
    setAccent(color as Parameters<typeof setAccent>[0]);
    closeMobileMenu();
  };

  return (
    <div
      ref={ref}
      className={[
        "relative flex h-9 shrink-0 items-center justify-center sm:h-10 z-[999999]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Shared gradient defs — referenced by icon fill */}
      <svg aria-hidden="true" width="0" height="0" focusable="false" className="pointer-events-none absolute h-0 w-0 overflow-hidden">
        <defs>
          <linearGradient id={iconGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="currentColor" className="text-primary-100" />
            <stop offset="55%"  stopColor="currentColor" className="text-primary" />
            <stop offset="100%" stopColor="currentColor" className="text-primary-800" />
          </linearGradient>
          <linearGradient id={accentGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="currentColor" className="text-accent-100" />
            <stop offset="55%"  stopColor="currentColor" className="text-accent" />
            <stop offset="100%" stopColor="currentColor" className="text-accent-800" />
          </linearGradient>
        </defs>
      </svg>

      {/* Mobile: settings gear */}
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

      {/* Desktop: inline controls */}
      <div className="hidden h-10 items-center gap-1.5 sm:flex">
        <DarkLightToggle gradientId={iconGradientId} />
        <AccentPicker gradientId={accentGradientId} />
      </div>

      {/* Mobile flyout panel */}
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
                leading={
                  <Icon
                    icon={isLight ? "fa6:sun" : "fa6:moon"}
                    size="md"
                    color={`url(#${iconGradientId})`}
                  />
                }
                trailing={isLight ? "Light" : "Dark"}
              />
              <MobileActionButton
                label="Accent"
                onClick={() => setMobilePanel("accent")}
                leading={<Icon icon="fa6:droplet" size="md" color={`url(#${accentGradientId})`} />}
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
                {accents.map((color) => (
                  <div key={color} className="flex items-center justify-center">
                    <SquareCheckbox
                      color={color}
                      checked={accent === color}
                      onChange={() => handleAccentSelect(color)}
                      aria-label={`Select accent color ${color}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
