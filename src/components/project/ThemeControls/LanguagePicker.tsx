// src/components/project/ThemeControls/LanguagePicker.tsx
/**
 * Language Picker (ThemeControls Design)
 *
 * Custom styled language selector button for ThemeControls.
 * Uses the useLanguageSwitcher hook from integrations for all functionality.
 */

import { useEffect, useRef, useState } from "react";
import { CircleCheckbox } from "./checkboxes/CircleCheckbox";
import LanguageDropdown from "@/integrations/preferences/language/ui/LanguageDropdown";
import { useLanguageSwitcher } from "@/integrations/preferences/language/core/hooks/useLanguageSwitcher";

export default function LanguagePicker() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { currentLanguage } = useLanguageSwitcher();

  // Close on outside click
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

  const handleToggle = () => {
    setOpen((v) => !v);
  };

  return (
    <div ref={containerRef} className="relative contents">
      <CircleCheckbox
        checked={open}
        onChange={handleToggle}
        aria-label="Choose display language"
        title="Choose your site language"
        className={`faded-bg text-primary ${open ? "ring-2 ring-primary/60" : ""}`}
      >
        <div className="flex items-center justify-center">
          <span className="text-sm sm:text-xl leading-none" aria-hidden="true">
            {currentLanguage.flag || "🌐"}
          </span>
        </div>
      </CircleCheckbox>

      {open && (
        <LanguageDropdown
          open={open}
          onClose={() => setOpen(false)}
          onLanguageChange={() => {}}
          className="left-1/2 -translate-x-1/2"
        />
      )}
    </div>
  );
}
