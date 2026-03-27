import { useEffect, useId, useRef, useState } from "react";
import DarkLightToggle from "./DarkLightToggle";
import AccentPicker from "./AccentPicker";
import LanguagePicker from "./LanguagePicker";
import Icon from "@/components/Icon";

interface ThemeControlsProps {
  className?: string;
}

export default function ThemeControls({ className = "" }: ThemeControlsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const iconGradientId = useId();
  const accentGradientId = useId();

  useEffect(() => {
    if (!mobileOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (ref.current?.contains(event.target as Node)) return;
      setMobileOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 640) setMobileOpen(false);
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

  return (
    <div
      ref={ref}
      className={[
        "relative flex h-10 shrink-0 items-center justify-center",
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
        className="faded-bg inline-flex h-10 w-10 items-center justify-center rounded-full text-primary transition-all main-duration sm:hidden"
        aria-label="Open preferences"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <Icon icon="lu:settings" size="md" className="text-current" />
      </button>

      <div className="hidden h-10 items-center gap-1.5 sm:flex">
        <LanguagePicker />
        <DarkLightToggle gradientId={iconGradientId} />
        <AccentPicker gradientId={accentGradientId} />
      </div>

      {mobileOpen && (
        <div className="card-bg absolute left-1/2 top-full z-10 mt-2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-primary/20 px-2 py-2 shadow-xl sm:hidden">
          <LanguagePicker />
          <DarkLightToggle gradientId={iconGradientId} />
          <AccentPicker gradientId={accentGradientId} />
        </div>
      )}
    </div>
  );
}
