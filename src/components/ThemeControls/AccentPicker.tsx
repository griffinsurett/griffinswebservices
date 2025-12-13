import { useEffect, useRef, useState } from "react";
import { CircleCheckbox } from "./checkboxes/CircleCheckbox";
import AccentPickerContent from "./AccentPickerContent";

export default function AccentPicker() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent) => {
      if (containerRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleToggle = () => {
    if (!hasOpened) setHasOpened(true);
    setOpen((v) => !v);
  };

  return (
    <div ref={containerRef} className="relative inline-flex">
      <CircleCheckbox
        checked={open}
        onChange={handleToggle}
        aria-label="Pick accent color"
        className="faded-bg"
      >
        <svg className="w-[22px] h-[22px] lg:w-[22px] lg:h-[22px]" viewBox="0 0 100 100">
          <path
            d="M50 10C50 10 25 35 25 55C25 70.464 37.536 83 50 83C62.464 83 75 70.464 75 55C75 35 50 10 50 10Z"
            fill="var(--color-accent)"
          />
        </svg>
      </CircleCheckbox>

      {hasOpened && <AccentPickerContent open={open} onClose={() => setOpen(false)} />}
    </div>
  );
}
