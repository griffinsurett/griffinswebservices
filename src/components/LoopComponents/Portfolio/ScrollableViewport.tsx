// src/components/LoopComponents/ScrollableViewport.tsx
// Shared scrollable viewport with auto-scroll and click-to-scroll behavior
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import { useEngagementAutoScroll } from "@/hooks/autoscroll/useEngagementAutoScroll";
import { useClickToScroll } from "@/hooks/interactions/useClickToScroll";

const AUTO_SCROLL_START_DELAY_MS = 200;
const AUTO_SCROLL_RESUME_DELAY_MS = 300;
const AUTO_SCROLL_TARGET_DURATION_SEC = 14;
const AUTO_SCROLL_DEFAULT_CYCLE_MS = AUTO_SCROLL_TARGET_DURATION_SEC * 1000;
const AUTO_SCROLL_MIN_SPEED = 15;
const MIN_SCROLL_DELTA = 4;
const CONTENT_STABLE_WINDOW_MS = 220;
const CONTENT_STABLE_DELTA_PX = 16;
const CONTENT_READY_TIMEOUT_MS = 2200;

export interface ScrollableViewportProps {
  children: ReactNode;
  isActive: boolean;
  isTransitioning?: boolean;
  onScrollComplete?: () => void;
  scrollDurationMs?: number;
  className?: string;
  style?: CSSProperties;
  resetOnActivate?: boolean;
  showDevOverlay?: boolean;
}

export interface ScrollableViewportRef {
  viewportRef: React.RefObject<HTMLDivElement | null>;
  contentReady: boolean;
  scrollDurationMs: number;
  autoScroll: ReturnType<typeof useEngagementAutoScroll>;
  manualScrollEnabled: boolean;
}

export default function ScrollableViewport({
  children,
  isActive,
  isTransitioning = false,
  onScrollComplete,
  className = "",
  style,
  resetOnActivate = true,
  showDevOverlay = false,
}: ScrollableViewportProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [mediaReady, setMediaReady] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [scrollDurationMs, setScrollDurationMs] = useState(AUTO_SCROLL_DEFAULT_CYCLE_MS);
  const [progressPct, setProgressPct] = useState(0);

  const resolveAutoScrollSpeed = useCallback((host: HTMLElement) => {
    const maxScrollable = Math.max(0, host.scrollHeight - host.clientHeight);
    if (maxScrollable <= 0) return 0;
    const baseline = maxScrollable / AUTO_SCROLL_TARGET_DURATION_SEC;
    if (!Number.isFinite(baseline) || baseline <= 0) {
      return AUTO_SCROLL_MIN_SPEED;
    }
    return Math.max(AUTO_SCROLL_MIN_SPEED, baseline);
  }, []);

  const measureScrollDuration = useCallback(
    (host: HTMLElement) => {
      const maxScrollable = Math.max(0, host.scrollHeight - host.clientHeight);
      if (maxScrollable <= 0) return AUTO_SCROLL_DEFAULT_CYCLE_MS;
      const pxPerSecond = resolveAutoScrollSpeed(host);
      if (pxPerSecond <= 0) return AUTO_SCROLL_DEFAULT_CYCLE_MS;
      const rawDurationMs = Math.round((maxScrollable / pxPerSecond) * 1000);
      if (!Number.isFinite(rawDurationMs) || rawDurationMs <= 0) {
        return AUTO_SCROLL_DEFAULT_CYCLE_MS;
      }
      return Math.max(AUTO_SCROLL_DEFAULT_CYCLE_MS, rawDurationMs);
    },
    [resolveAutoScrollSpeed],
  );

  const autoScrollActive = isActive && contentReady && !isTransitioning;

  const autoScroll = useEngagementAutoScroll({
    ref: viewportRef,
    active: autoScrollActive,
    speed: resolveAutoScrollSpeed,
    loop: false,
    startDelay: AUTO_SCROLL_START_DELAY_MS,
    resumeDelay: AUTO_SCROLL_RESUME_DELAY_MS,
    resumeOnUserInput: true,
    threshold: 0.05,
    resetOnInactive: false,
  });

  // Click-to-scroll: manual scroll only enabled after explicit click, disables after 3s inactivity
  const { enabled: manualScrollEnabled, enableScroll } = useClickToScroll({
    ref: viewportRef,
    active: isActive,
  });

  // Reset scroll position and content ready state when becoming active
  useEffect(() => {
    if (!isActive) return;
    // Reset content ready to force re-measurement when slide becomes active
    setContentReady(false);
    setMediaReady(false);
    if (resetOnActivate) {
      autoScroll.resetPosition(0);
      viewportRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [isActive, resetOnActivate, autoScroll.resetPosition]);

  // Track scroll progress
  useEffect(() => {
    if (!isActive) return;
    let raf: number | null = null;
    const tick = () => {
      const el = viewportRef.current;
      if (el) {
        const max = Math.max(0, el.scrollHeight - el.clientHeight);
        const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
        setProgressPct(Math.round(pct));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isActive]);

  // Check when image is ready
  useEffect(() => {
    const host = viewportRef.current;
    if (!host) return;

    let cleanup: (() => void) | null = null;

    const checkForImage = () => {
      const imageEl =
        (host.querySelector("picture img") as HTMLImageElement | null) ??
        (host.querySelector("img") as HTMLImageElement | null);

      if (!imageEl) {
        // No image found - consider media ready (might be placeholder or no-image state)
        setMediaReady(true);
        return true;
      }

      if (imageEl.complete && imageEl.naturalHeight > 0) {
        setMediaReady(true);
        return true;
      }

      setMediaReady(false);
      const handleReady = () => setMediaReady(true);
      imageEl.addEventListener("load", handleReady, { once: true });
      imageEl.addEventListener("error", handleReady, { once: true });

      cleanup = () => {
        imageEl.removeEventListener("load", handleReady);
        imageEl.removeEventListener("error", handleReady);
      };

      return true;
    };

    // Try immediately
    if (checkForImage()) {
      return () => cleanup?.();
    }

    // If image not found, use MutationObserver to watch for it
    const observer = new MutationObserver(() => {
      if (checkForImage()) {
        observer.disconnect();
      }
    });

    observer.observe(host, {
      childList: true,
      subtree: true,
    });

    // Also try again after a short delay as fallback
    const fallbackTimer = setTimeout(() => {
      checkForImage();
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
      cleanup?.();
    };
  }, [children]);

  // Wait for content to stabilize before auto-scrolling
  useEffect(() => {
    if (!mediaReady) {
      setContentReady(false);
      return;
    }

    const host = viewportRef.current;
    if (!host) return;

    let resolved = false;
    let stabilityCleanup: (() => void) | null = null;

    const hasScrollableContent = () => {
      const max = Math.max(0, host.scrollHeight - host.clientHeight);
      return max > MIN_SCROLL_DELTA;
    };

    const markReady = () => {
      if (resolved) return;
      resolved = true;
      stabilityCleanup?.();
      stabilityCleanup = null;
      setContentReady(true);
    };

    const waitForStableContent = () => {
      if (typeof ResizeObserver === "undefined") {
        markReady();
        return;
      }

      let stabilityTimer: number | null = null;
      let lastHeight = host.scrollHeight;

      const scheduleReady = () => {
        if (stabilityTimer) return;
        stabilityTimer = window.setTimeout(() => {
          stabilityTimer = null;
          markReady();
        }, CONTENT_STABLE_WINDOW_MS);
      };

      const resetReady = () => {
        if (stabilityTimer) {
          window.clearTimeout(stabilityTimer);
          stabilityTimer = null;
        }
      };

      const observer = new ResizeObserver(() => {
        const nextHeight = host.scrollHeight;
        if (Math.abs(nextHeight - lastHeight) > CONTENT_STABLE_DELTA_PX) {
          lastHeight = nextHeight;
          resetReady();
        }
        scheduleReady();
      });

      observer.observe(host);
      scheduleReady();

      stabilityCleanup = () => {
        observer.disconnect();
        if (stabilityTimer) {
          window.clearTimeout(stabilityTimer);
          stabilityTimer = null;
        }
      };
    };

    if (hasScrollableContent()) {
      waitForStableContent();
    } else if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(() => {
        if (hasScrollableContent()) {
          observer.disconnect();
          waitForStableContent();
        }
      });
      observer.observe(host);
      stabilityCleanup = () => observer.disconnect();
    } else {
      markReady();
    }

    const timeoutId = window.setTimeout(markReady, CONTENT_READY_TIMEOUT_MS);

    return () => {
      stabilityCleanup?.();
      window.clearTimeout(timeoutId);
    };
  }, [mediaReady]);

  // Measure scroll duration when content is ready
  useEffect(() => {
    if (!contentReady || !isActive) {
      setScrollDurationMs(AUTO_SCROLL_DEFAULT_CYCLE_MS);
      return;
    }

    const host = viewportRef.current;
    if (!host) return;

    const updateDuration = () => setScrollDurationMs(measureScrollDuration(host));
    updateDuration();

    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => updateDuration())
        : null;

    observer?.observe(host);

    return () => observer?.disconnect();
  }, [contentReady, isActive, measureScrollDuration]);

  // Trigger callback after scroll completes
  // Use a ref to track the current duration to avoid restarting timer on every measurement
  const scrollDurationRef = useRef(scrollDurationMs);
  scrollDurationRef.current = scrollDurationMs;

  useEffect(() => {
    if (!contentReady || !isActive || !onScrollComplete) return;
    // Don't start new cycle if autoscroll is paused by user interaction
    if (autoScroll.paused) return;

    const BETWEEN_SLIDE_PAUSE_MS = 450;
    // Use a minimum duration to prevent rapid cycling
    const effectiveDuration = Math.max(scrollDurationRef.current, AUTO_SCROLL_DEFAULT_CYCLE_MS);
    const totalDuration =
      AUTO_SCROLL_START_DELAY_MS + effectiveDuration + BETWEEN_SLIDE_PAUSE_MS;
    const timer = window.setTimeout(() => {
      // Double-check we're still active before completing cycle
      if (!autoScroll.paused) {
        onScrollComplete();
      }
    }, totalDuration);
    return () => window.clearTimeout(timer);
  }, [isActive, contentReady, onScrollComplete, autoScroll.paused]);

  // When manual scroll is disabled, we use pointer-events:none on the scrollable
  // figure so wheel/touch events pass through to the page. But we need an outer
  // wrapper to capture clicks to enable manual scroll.
  return (
    <div
      className={`relative h-full ${className}`.trim()}
      style={style}
      onClick={enableScroll}
    >
      <figure
        ref={viewportRef}
        className={`absolute inset-0 overflow-y-scroll bg-black/40 ${
          manualScrollEnabled
            ? "overscroll-contain touch-pan-y"
            : "pointer-events-none touch-none"
        }`}
        style={{
          WebkitOverflowScrolling: manualScrollEnabled ? "touch" : "auto",
          overscrollBehaviorY: manualScrollEnabled ? "contain" : "none",
        }}
      >
        {children}
      </figure>

      {import.meta.env.DEV && showDevOverlay && isActive && (
        <div className="absolute right-3 top-3 text-xs opacity-75 bg-zinc-800/95 p-3 rounded-lg shadow-lg border border-white/10 z-50 space-y-1 pointer-events-none">
          <div>👁️ In View: {autoScroll.inView ? "✅" : "❌"}</div>
          <div>⏸️ Paused: {autoScroll.paused ? "✅" : "❌"}</div>
          <div>👤 Engaged: {autoScroll.engaged ? "✅" : "❌"}</div>
          <div>⏲️ Resume Scheduled: {autoScroll.resumeScheduled ? "✅" : "❌"}</div>
          <div>🖱️ Manual Scroll: {manualScrollEnabled ? "✅" : "❌"}</div>
          <div>📊 Progress: {progressPct}%</div>
          <div>📏 Duration: {(scrollDurationMs / 1000).toFixed(1)}s</div>
        </div>
      )}
    </div>
  );
}
