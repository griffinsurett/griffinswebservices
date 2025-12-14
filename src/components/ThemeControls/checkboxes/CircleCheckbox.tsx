import type { InputHTMLAttributes, ReactNode } from "react";
import { useEffect, useRef } from "react";

interface CircleCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  className?: string;
  children?: ReactNode;
}

export function CircleCheckbox({
  checked,
  className = "circle-box",
  children,
  ...props
}: CircleCheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Suppress hydration warnings for browser extension attributes
  useEffect(() => {
    if (inputRef.current) {
      // Remove any data attributes added by browser extensions after hydration
      const attrs = Array.from(inputRef.current.attributes);
      attrs.forEach(attr => {
        if (attr.name.startsWith('data-') &&
            !attr.name.startsWith('data-astro') &&
            attr.name !== 'data-testid') {
          inputRef.current?.removeAttribute(attr.name);
        }
      });
    }
  }, []);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        ref={inputRef}
        type="checkbox"
        checked={checked}
        className="sr-only peer"
        {...props}
      />

      <span
        className={`${className} w-9 h-9 rounded-full transition-all flex items-center justify-center relative`}
      >
        {children}
      </span>
    </label>
  );
}
