// src/components/Form/inputs/Input.tsx
import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import Field, { useField } from "./Field";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  name: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  /** Persistent helper text, linked via aria-describedby. */
  hint?: ReactNode;
  /** Error text; presence sets aria-invalid + links via aria-describedby. */
  error?: ReactNode;
  /** Floating-label look (keeps the compact placeholder appearance). */
  floating?: boolean;
  describedBy?: string;
}

export default function Input({
  name,
  label,
  required = false,
  containerClassName = "space-y-2",
  labelClassName,
  inputClassName = "",
  hint,
  error,
  floating = true,
  describedBy,
  id: idProp,
  defaultValue,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  ...inputProps
}: InputProps) {
  const a11y = useField({ name, idProp, required, hint, error, describedBy });

  // Track whether the label should float (field has content or is focused).
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(
    Boolean(defaultValue ?? value ?? "")
  );
  const filled = focused || hasValue;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0);
    onChange?.(e);
  };
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    setHasValue(e.target.value.length > 0);
    onBlur?.(e);
  };

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
      <input
        {...a11y.controlProps}
        name={name}
        required={required}
        value={value}
        defaultValue={defaultValue}
        // In floating mode the visible label replaces the placeholder, so we
        // suppress the placeholder to avoid doubled text; callers can still pass
        // one explicitly for a non-floating field.
        placeholder={floating && label ? undefined : placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`peer form-field ${error ? "form-field-error" : ""} ${inputClassName}`.trim()}
        {...inputProps}
      />
    </Field>
  );
}
