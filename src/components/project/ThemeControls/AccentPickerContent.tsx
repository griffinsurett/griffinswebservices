import { useAccentColor } from "@/hooks/useAccentColor";
import { SquareCheckbox } from "./checkboxes/SquareCheckbox";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AccentPickerContent({ open, onClose }: Props) {
  const { accent, setAccent, accents } = useAccentColor();

  if (!open) return null;

  return (
    <div className="absolute top-full mt-1 lg:mt-2 right-0 sm:left-0 sm:right-auto faded-bg rounded-xl p-2 lg:p-3 flex space-x-2 lg:space-x-3 overflow-x-auto hide-scrollbar shadow-lg z-50 w-max max-w-[calc(100vw-2.5rem)] sm:max-w-none">
      {accents.map((color) => (
        <SquareCheckbox
          key={color}
          color={color}
          checked={accent === color}
          onChange={() => {
            setAccent(color);
            onClose();
          }}
          aria-label={`Select accent color ${color}`}
        />
      ))}
    </div>
  );
}
