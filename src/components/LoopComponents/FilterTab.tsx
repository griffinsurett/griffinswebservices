// src/components/LoopComponents/FilterTab.tsx
import AnimatedBorder from "@/components/AnimatedBorder/AnimatedBorder";
import IconListItem from "./IconListItem";
import type { FilterOption } from "@/hooks/useFilter";

// Re-export FilterOption from the hook for backwards compatibility
export type { FilterOption } from "@/hooks/useFilter";

export interface FilterTabProps {
  id: string;
  name: string;
  option: FilterOption;
  checked: boolean;
  onChange: (value: string) => void;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: {
    padding: "px-3 py-2",
    text: "text-sm",
    gap: "gap-1.5",
    iconSize: "text-base",
  },
  md: {
    padding: "px-4 py-2.5",
    text: "text-base",
    gap: "gap-2",
    iconSize: "text-lg",
  },
  lg: {
    padding: "px-5 py-3",
    text: "text-lg",
    gap: "gap-2.5",
    iconSize: "text-xl",
  },
} as const;

export default function FilterTab({
  id,
  name,
  option,
  checked,
  onChange,
  size = "sm",
  showCount = false,
  className = "",
}: FilterTabProps) {
  const currentSize = sizeClasses[size];

  const handleChange = () => {
    onChange(option.key);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={option.key}
        checked={checked}
        onChange={handleChange}
        className="absolute -left-[9999px]"
        aria-hidden="true"
      />
      <AnimatedBorder
        variant="progress-b-f"
        triggers="controlled"
        active={checked}
        duration={400}
        borderRadius="rounded-full"
        borderWidth={2}
        color="var(--color-accent)"
        innerClassName="card-bg border-off-hover"
      >
        <label
          htmlFor={id}
          className={`
            ${currentSize.padding} rounded-full font-medium main-duration transition-all
            flex items-center ${currentSize.gap} cursor-pointer ${currentSize.text}
            ${checked ? "text-accent" : "text-heading hover:text-accent"}
          `}
        >
          {option.icon ? (
            <IconListItem
              data={{ icon: option.icon, title: option.label }}
              layout="horizontal"
              alignment="center"
              className={currentSize.gap}
              iconClassName={`${currentSize.iconSize} ${checked ? "text-accent" : ""}`}
              titleClassName={`${currentSize.text} font-medium`}
              titleTag="span"
              showDescription={false}
            />
          ) : (
            <span>{option.label}</span>
          )}
          {showCount && option.count !== undefined && (
            <span className={`${currentSize.text} opacity-60`}>
              ({option.count})
            </span>
          )}
        </label>
      </AnimatedBorder>
    </div>
  );
}
