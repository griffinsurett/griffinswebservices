import { useEffect, useRef, useCallback, useState, type RefObject } from "react";

interface UseClickToScrollOptions {
  /** Ref to the scrollable element */
  ref: RefObject<HTMLElement | null>;
  /** Whether the element is currently active/visible */
  active?: boolean;
  /** Whether auto-scroll resume is scheduled (from useEngagementAutoScroll) */
  resumeScheduled?: boolean;
}

interface UseClickToScrollReturn {
  /** Whether manual scrolling is currently enabled */
  enabled: boolean;
  /** Call this when user clicks to enable scrolling */
  enableScroll: () => void;
}

/**
 * Hook that prevents an element from capturing scroll events until clicked.
 * After clicking, manual scrolling is enabled. When the auto-scroll resume
 * timer fires (resumeScheduled goes from true to false), scrolling is disabled.
 *
 * Before enabled: wheel/touch events pass through to the page (page scrolls normally).
 * After click: the element captures scroll events (element scrolls).
 * After resume timer: reverts back to passing through events.
 */
export function useClickToScroll({
  ref,
  active = true,
  resumeScheduled = false,
}: UseClickToScrollOptions): UseClickToScrollReturn {
  const [enabled, setEnabled] = useState(false);
  const wasResumeScheduledRef = useRef(false);

  const enableScroll = useCallback(() => {
    setEnabled(true);
  }, []);

  // Reset when element becomes inactive
  useEffect(() => {
    if (!active) {
      setEnabled(false);
    }
  }, [active]);

  // Disable when resumeScheduled transitions from true to false (resume timer fired)
  useEffect(() => {
    if (wasResumeScheduledRef.current && !resumeScheduled) {
      // Resume timer just fired - disable manual scroll
      setEnabled(false);
    }
    wasResumeScheduledRef.current = resumeScheduled;
  }, [resumeScheduled]);

  // Apply pointer-events style when not enabled
  useEffect(() => {
    if (enabled || !active) return;

    const el = ref.current;
    if (!el) return;

    // Disable pointer events so wheel/touch events pass through to the page
    el.style.pointerEvents = "none";

    return () => {
      el.style.pointerEvents = "";
    };
  }, [ref, enabled, active]);

  return { enabled, enableScroll };
}

export default useClickToScroll;
