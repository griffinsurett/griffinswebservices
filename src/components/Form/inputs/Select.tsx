// src/components/Form/inputs/Select.tsx
/**
 * Hybrid Select with AnimatedBorder styling, built on the accessible Field
 * foundation (real <label for>, aria-required/invalid/describedby).
 */
import {
  useCallback,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";
import AnimatedBorder from "@/components/AnimatedBorder/AnimatedBorder";
import Field, { useField } from "./Field";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
  hint?: ReactNode;
  error?: ReactNode;
  floating?: boolean;
  describedBy?: string;
  borderDuration?: number;
  borderWidth?: number;
  borderRadius?: string;
}

export default function Select({
  name,
  label,
  required = false,
  options,
  placeholder = "Select an option",
  containerClassName = "space-y-2",
  labelClassName,
  selectClassName = "",
  hint,
  error,
  floating = true,
  describedBy,
  borderDuration = 900,
  borderWidth = 2,
  borderRadius = "rounded-xl",
  id: idProp,
  defaultValue,
  value,
  onFocus,
  onBlur,
  onChange,
  ...selectProps
}: SelectProps) {
  const a11y = useField({ name, idProp, required, hint, error, describedBy });

  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(
    Boolean((defaultValue ?? value ?? "") !== "" && (defaultValue ?? value))
  );
  const filled = focused || hasValue;

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLSelectElement>) => {
      setFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );
  const handleBlur = useCallback(
    (event: FocusEvent<HTMLSelectElement>) => {
      setFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setHasValue(event.target.value !== "");
      onChange?.(event);
    },
    [onChange]
  );

  return (
    <Field
      a11y={a11y}
      label={label}
      required={required}
      hint={hint}
      error={error}
      floating={floating}
      filled={filled}
      containerClassName={containerClassName}
      labelClassName={labelClassName}
    >
      <AnimatedBorder
        variant="solid"
        triggers="controlled"
        active={focused}
        duration={borderDuration}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        color="var(--color-accent)"
        innerClassName={`!bg-transparent !border-transparent p-0 ${borderRadius}`}
      >
        <div className="relative">
          <select
            {...a11y.controlProps}
            name={name}
            required={required}
            value={value}
            defaultValue={defaultValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`peer form-field appearance-none pr-10 ${error ? "form-field-error" : ""} ${selectClassName}`.trim()}
            {...selectProps}
          >
            {/* Empty placeholder option — the visible floating label is the
                accessible name, so this stays empty (no text shown once floated). */}
            <option value="" disabled hidden className="form-option">
              {floating && label ? "" : placeholder}
            </option>
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="form-option"
              >
                {option.label}
              </option>
            ))}
          </select>

          <svg
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </div>
      </AnimatedBorder>
    </Field>
  );
}
