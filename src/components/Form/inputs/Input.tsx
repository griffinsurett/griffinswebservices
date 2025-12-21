// src/components/Form/inputs/Input.tsx
/**
 * Hybrid Input Component with Animated Border styling from the legacy project.
 * Preserves the API we built for the new project while matching the old visuals.
 */

import {
  useCallback,
  useId,
  useState,
  type FocusEvent,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
} from "react";
import AnimatedBorder from "@/components/AnimatedBorder/AnimatedBorder";

interface AnimatedBorderConfig {
  enabled?: boolean;
  duration?: number;
  width?: number;
  radius?: string;
  color?: string;
}

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  name: string;
  label?: string;
  type?: HTMLInputTypeAttribute;

  // Styling
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;

  // Control visibility
  showLabel?: boolean;
  labelHidden?: boolean;

  // Accessibility helpers
  describedBy?: string;

  // Animated border configuration
  animatedBorder?: AnimatedBorderConfig;
}

export default function Input({
  name,
  label,
  required = false,
  containerClassName = "space-y-2",
  labelClassName = "block text-sm text-text/80",
  inputClassName = "",
  showLabel = true,
  labelHidden = false,
  describedBy,
  animatedBorder = {},
  id: idProp,
  onFocus,
  onBlur,
  ...inputProps
}: InputProps) {
  // Destructure animated border config with defaults
  const {
    enabled = true,
    duration = 900,
    width = 2,
    radius = "rounded-xl",
    color = "var(--color-accent)",
  } = animatedBorder;
  const [focused, setFocused] = useState(false);
  const reactId = useId();
  const id = idProp ?? `${name}-${reactId}`;

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );

  const labelClasses = [
    labelClassName,
    !showLabel || labelHidden ? "sr-only" : "",
  ]
    .filter(Boolean)
    .join(" ");

  // When animated border is enabled, remove the input's own border
  const borderClass = enabled ? "!border-transparent" : "";

  const inputElement = (
    <input
      id={id}
      name={name}
      required={required}
      aria-required={required || undefined}
      aria-describedby={describedBy}
      className={`form-field ${borderClass} ${inputClassName}`.trim()}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...inputProps}
    />
  );

  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}

      {enabled ? (
        <AnimatedBorder
          variant="progress-b-f"
          triggers="controlled"
          active={focused}
          duration={duration}
          borderWidth={width}
          borderRadius={radius}
          color={color}
          innerClassName={`!bg-transparent !border-transparent p-0 ${radius}`}
        >
          {inputElement}
        </AnimatedBorder>
      ) : (
        inputElement
      )}
    </div>
  );
}
