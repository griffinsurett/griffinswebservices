import { useId, type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
  showLabel?: boolean;
  labelHidden?: boolean;
  describedBy?: string;
}

export default function Textarea({
  name,
  label,
  required = false,
  containerClassName = "space-y-2",
  labelClassName = "block text-sm text-text/80",
  textareaClassName = "",
  showLabel = true,
  labelHidden = false,
  describedBy,
  rows = 5,
  id: idProp,
  ...textareaProps
}: TextareaProps) {
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
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        aria-required={required || undefined}
        aria-describedby={describedBy}
        className={`form-field resize-none ${textareaClassName}`.trim()}
        {...textareaProps}
      />
    </div>
  );
}
