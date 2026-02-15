import { useId, useRef, useState } from "react";
import DarkLightToggle from "./DarkLightToggle";
import AccentPicker from "./AccentPicker";
import LanguagePicker from "./LanguagePicker";

interface ThemeControlsProps {
  className?: string;
}

export default function ThemeControls({ className = "" }: ThemeControlsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hidden] = useState(false);
  const iconGradientId = useId();

  return (
    <div
      ref={ref}
      className={[
        "relative flex items-center gap-1.5",
        "sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
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
        </defs>
      </svg>
      <LanguagePicker />
      <DarkLightToggle gradientId={iconGradientId} />
      <AccentPicker gradientId={iconGradientId} />
    </div>
  );
}
