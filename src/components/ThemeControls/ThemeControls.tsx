import { useRef, useState } from "react";
import DarkLightToggle from "./DarkLightToggle";
import AccentPicker from "./AccentPicker";
import { useLazyLoad } from "@/hooks/useLazyLoad";

interface ThemeControlsProps {
  className?: string;
}

export default function ThemeControls({ className = "" }: ThemeControlsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hidden] = useState(false);

  // Lazy load LanguageDropdown - not needed immediately
  const { Component: LanguageDropdown } = useLazyLoad(
    () => import("./LanguageDropdown"),
    { delay: 2000 }
  );

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
      {LanguageDropdown && <LanguageDropdown />}
      <DarkLightToggle />
      <AccentPicker />
    </div>
  );
}
