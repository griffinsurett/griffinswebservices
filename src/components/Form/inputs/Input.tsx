import { useId, type HTMLInputTypeAttribute, type InputHTMLAttributes } from "react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  name: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  showLabel?: boolean;
  labelHidden?: boolean;
  describedBy?: string;
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
  id: idProp,
  ...inputProps
}: InputProps) {
  const reactId = useId();
  const id = idProp ?? `${name}-${reactId}`;

  const labelClasses = [labelClassName, !showLabel || labelHidden ? "sr-only" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        required={required}
        aria-required={required || undefined}
        aria-describedby={describedBy}
        className={`form-field ${inputClassName}`.trim()}
        {...inputProps}
      />
    </div>
  );
}
