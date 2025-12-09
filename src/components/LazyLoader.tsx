/**
 * LazyLoader - Component wrapper around useLazyLoad hook
 *
 * For simple cases where you just need to render a lazy-loaded component.
 * For more control, use the useLazyLoad hook directly.
 *
 * @see useLazyLoad for the underlying hook
 */

import { Suspense, type ComponentType } from "react";
import { useLazyLoad, type UseLazyLoadOptions } from "@/hooks/useLazyLoad";

// Re-export utilities from hook
export { isSyntheticTest } from "@/hooks/useLazyLoad";

/** Props that LazyLoader injects for toggle mode */
export interface ToggleInjectedProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LazyLoaderProps<P extends object> extends UseLazyLoadOptions<P> {
  /** Props to pass to the lazy-loaded component (for toggle: isOpen/onClose auto-injected) */
  props?: P extends ToggleInjectedProps ? Omit<P, keyof ToggleInjectedProps> : P;
  /** Fallback while loading */
  fallback?: React.ReactNode;
}

export default function LazyLoader<P extends object>({
  component,
  trigger = "delay",
  delay,
  triggerId,
  skipIf,
  props,
  fallback = null,
}: LazyLoaderProps<P>) {
  const { Component, isLoaded, isOpen, close } = useLazyLoad<P>({
    component,
    trigger,
    delay,
    triggerId,
    skipIf,
  } as UseLazyLoadOptions<P>);

  if (!isLoaded || !Component) {
    return null;
  }

  // For toggle mode, inject isOpen and onClose props
  const finalProps =
    trigger === "toggle"
      ? ({ ...props, isOpen, onClose: close } as P)
      : ((props ?? {}) as P);

  return (
    <Suspense fallback={fallback}>
      <Component {...finalProps} />
    </Suspense>
  );
}
