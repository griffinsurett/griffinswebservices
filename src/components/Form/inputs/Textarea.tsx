// src/components/Form/inputs/Textarea.tsx
import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";
import Field, { useField } from "./Field";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
  hint?: ReactNode;
  error?: ReactNode;
  floating?: boolean;
  describedBy?: string;
}

export default function Textarea({
  name,
  label,
  required = false,
  containerClassName = "space-y-2",
  labelClassName,
  textareaClassName = "",
  hint,
  error,
  floating = true,
  describedBy,
  rows = 5,
  id: idProp,
  defaultValue,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  ...textareaProps
}: TextareaProps) {
  const a11y = useField({ name, idProp, required, hint, error, describedBy });

  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(
    Boolean(defaultValue ?? value ?? "")
  );
  const filled = focused || hasValue;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(e.target.value.length > 0);
    onChange?.(e);
  };
  const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    setFocused(true);
    onFocus?.(e);
  };
  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    setFocused(false);
    setHasValue(e.target.value.length > 0);
    onBlur?.(e);
  };

  // For a multi-line control the label floats to the TOP of the box, not the
  // vertical centre — pass a label override so <Field> anchors it near the top.
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
      labelClassName={
        // Anchor the resting label near the top for a tall control.
        floating ? "!top-4 !translate-y-0" : labelClassName
      }
    >
      <textarea
        {...a11y.controlProps}
        name={name}
        rows={rows}
        required={required}
        value={value}
        defaultValue={defaultValue}
        placeholder={floating && label ? undefined : placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`peer form-field resize-none ${error ? "form-field-error" : ""} ${textareaClassName}`.trim()}
        {...textareaProps}
      />
    </Field>
  );
}
