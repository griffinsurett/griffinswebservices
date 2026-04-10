import { useAccentColor } from "@/hooks/useAccentColor";
import { SquareCheckbox } from "./checkboxes/SquareCheckbox";

interface Props {
  open: boolean;
  onClose: () => void;
  onApplied?: () => void;
}

export default function AccentPickerContent({ open, onClose, onApplied }: Props) {
  const { accent, setAccent, accents } = useAccentColor();

  if (!open) return null;

  return (
    <div className="absolute top-full left-1/2 z-50 mt-1 flex w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center justify-center gap-2 overflow-x-auto rounded-2xl border card-bg p-2 shadow-2xl backdrop-blur-xl hide-scrollbar sm:left-0 sm:max-w-none sm:translate-x-0 sm:justify-start lg:mt-2 lg:gap-3 lg:p-3">
      {accents.map((color) => (
        <SquareCheckbox
          key={color}
          color={color}
          checked={accent === color}
          onChange={() => {
            setAccent(color);
            onClose();
            onApplied?.();
          }}
          aria-label={`Select accent color ${color}`}
        />
      ))}
    </div>
  );
}
