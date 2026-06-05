// src/components/Form/messages/SuccessMessage.tsx
/**
 * SuccessMessage Component
 * Internal component used by FormWrapper
 */

import type { ReactNode } from "react";
import FormMessage from "./FormMessage";

interface SuccessMessageProps {
  children: ReactNode;
  onDismiss?: () => void;
}

export default function SuccessMessage({ children, onDismiss }: SuccessMessageProps) {
  return (
    <FormMessage type="success" onDismiss={onDismiss}>
      <div>{children}</div>
      <a
        href="https://calendly.com/griffinswebservices/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-green-700 underline hover:text-green-900"
      >
        Want to talk it through? Book a free call →
      </a>
    </FormMessage>
  );
}
