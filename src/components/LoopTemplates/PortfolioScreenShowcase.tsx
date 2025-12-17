import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useEngagementAutoScroll } from "@/hooks/autoscroll/useEngagementAutoScroll";
import { useClickToScroll } from "@/hooks/interactions/useClickToScroll";
import { getImageSrc } from "@/layouts/collections/helpers/layoutHelpers";
import ClientImage from "@/components/ClientImage";
import type { PortfolioItemData } from "@/components/LoopComponents/PortfolioItemComponent";

interface PortfolioMediaEntry {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  srcSet?: string;
  sizes?: string;
  sources?: { type?: string; srcSet: string; sizes?: string }[];
  loading?: "eager" | "lazy";
  decoding?: "sync" | "async";
  fetchPriority?: "high" | "low" | "auto";
}

interface PortfolioScreenShowcaseProps {
  items?: PortfolioItemData[];
  className?: string;
  mediaEntries?: (PortfolioMediaEntry | undefined)[];
}

interface ScreenProps {
  item: PortfolioItemData;
  mediaEntry?: PortfolioMediaEntry;
  totalSlides: number;
  onCycleComplete: () => void;
  isActive: boolean;
  isTransitioning?: boolean;
}

const AUTO_SCROLL_START_DELAY_MS = 700;
const AUTO_SCROLL_TARGET_DURATION_SEC = 14;
const AUTO_SCROLL_DEFAULT_CYCLE_MS = AUTO_SCROLL_TARGET_DURATION_SEC * 1000;
const AUTO_SCROLL_MIN_SPEED = 28;
const MIN_SCROLL_DELTA = 4;
const CONTENT_STABLE_WINDOW_MS = 220;
const CONTENT_STABLE_DELTA_PX = 16;
const CONTENT_READY_TIMEOUT_MS = 2200;
const BETWEEN_SLIDE_PAUSE_MS = 450;
const SLIDE_TRANSITION_DURATION_MS = 750;
const SHOWCASE_READY_EVENT = "portfolio-showcase:ready";
const SHOWCASE_READY_DELAY_MS = 800;

function ComputerScreen({
  item,
  mediaEntry,
  totalSlides,
  onCycleComplete,
  isActive,
  isTransitioning = false,
}: ScreenProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  // Prevent images from rendering during SSR - only show after hydration
  const [isHydrated, setIsHydrated] = useState(false);
  const [mediaReady, setMediaReady] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [scrollDurationMs, setScrollDurationMs] = useState(AUTO_SCROLL_DEFAULT_CYCLE_MS);

  // Mark as hydrated after mount (client-side only)
  useEffect(() => {
    setIsHydrated(true);
  }, []);

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
    resumeDelay: 600,
    resumeOnUserInput: true,
    threshold: 0.05,
    resetOnInactive: false,
  });


  // Click-to-scroll: manual scroll only enabled after click, resets when resume timer fires
  const { enabled: manualScrollEnabled, enableScroll } = useClickToScroll({
    ref: viewportRef,
    active: isActive,
    resumeScheduled: autoScroll.resumeScheduled,
  });

  // Reset scroll position when becoming active
  useEffect(() => {
    if (!isActive) return;
    autoScroll.resetPosition(0);
    viewportRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [isActive, autoScroll.resetPosition]);

  // Check when image is ready (must re-run after hydration when images actually render)
  useEffect(() => {
    if (!isHydrated) return;

    const host = viewportRef.current;
    if (!host) return;

    let cleanup: (() => void) | null = null;

    const checkForImage = () => {
      const imageEl =
        (host.querySelector("picture img") as HTMLImageElement | null) ??
        (host.querySelector("img") as HTMLImageElement | null);

      if (!imageEl) return false;

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
  }, [item, mediaEntry, isHydrated]);

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

  // Trigger slide advance after scroll completes
  useEffect(() => {
    if (!contentReady || !isActive || totalSlides <= 1) return;
    // Don't start new cycle if autoscroll is paused by user interaction
    if (autoScroll.paused) return;

    const totalDuration =
      AUTO_SCROLL_START_DELAY_MS + scrollDurationMs + BETWEEN_SLIDE_PAUSE_MS;
    const timer = window.setTimeout(() => {
      // Double-check we're still active before completing cycle
      if (!autoScroll.paused) {
        onCycleComplete();
      }
    }, totalDuration);
    return () => window.clearTimeout(timer);
  }, [isActive, contentReady, onCycleComplete, scrollDurationMs, totalSlides, autoScroll.paused]);

  const fallbackSrc =
    getImageSrc(item.featuredImage) ||
    getImageSrc(item.bannerImage) ||
    getImageSrc(item.image) ||
    "";

  const renderMedia = () => {
    // Show placeholder during SSR/before hydration
    if (!isHydrated) {
      return (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-bg2 via-bg to-bg/80" />
      );
    }

    // No media available
    if (!mediaEntry?.src && !fallbackSrc) {
      return (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-bg2 via-bg to-bg/80 text-white/30">
          Preview coming soon
        </div>
      );
    }

    // Use ClientImage for all image rendering (only renders on client)
    return (
      <ClientImage
        src={mediaEntry?.src || fallbackSrc}
        srcSet={mediaEntry?.srcSet}
        sizes={mediaEntry?.sizes}
        sources={mediaEntry?.sources}
        alt={mediaEntry?.alt || item.alt || item.title || "Project preview"}
        width={mediaEntry?.width}
        height={mediaEntry?.height}
        loading="lazy"
        decoding="async"
        fetchPriority="auto"
        draggable={false}
        className="block h-auto min-h-full w-full select-none object-cover object-top"
      />
    );
  };

  return (
    <figure
      ref={viewportRef}
      onClick={enableScroll}
      className={`relative h-full overflow-y-scroll bg-black/40 ${
        manualScrollEnabled ? "overscroll-contain touch-pan-y" : "touch-none"
      }`}
      style={{
        WebkitOverflowScrolling: manualScrollEnabled ? "touch" : "auto",
        overscrollBehaviorY: manualScrollEnabled ? "contain" : "none",
      }}
    >
      {renderMedia()}
    </figure>
  );
}

export default function PortfolioScreenShowcase({
  items = [],
  className = "",
  mediaEntries: mediaEntriesProp = [],
}: PortfolioScreenShowcaseProps) {
  const slides = useMemo(() => (Array.isArray(items) ? items : []), [items]);
  const mediaEntries = useMemo(
    () => (Array.isArray(mediaEntriesProp) ? mediaEntriesProp : []),
    [mediaEntriesProp],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [transitionStage, setTransitionStage] = useState<"idle" | "pre" | "animating">("idle");
  const transitionTimerRef = useRef<number | null>(null);
  const transitionFrameRef = useRef<number | null>(null);
  const readyEventSentRef = useRef(false);

  useEffect(() => {
    if (!slides.length || readyEventSentRef.current) return;
    readyEventSentRef.current = true;
    const timer = window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent(SHOWCASE_READY_EVENT));
    }, SHOWCASE_READY_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [slides.length]);

  useEffect(() => {
    if (!slides.length) {
      setActiveIndex(0);
      setPrevIndex(null);
      setTransitionStage("idle");
      return;
    }
    setActiveIndex((prev) => (prev >= slides.length ? 0 : prev));
  }, [slides.length]);

  useEffect(
    () => () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
        transitionTimerRef.current = null;
      }
      if (transitionFrameRef.current) {
        cancelAnimationFrame(transitionFrameRef.current);
        transitionFrameRef.current = null;
      }
    },
    [],
  );

  const startSlideTransition = useCallback(
    (targetIndex: number) => {
      if (typeof window === "undefined") return;
      setPrevIndex(activeIndex);
      setActiveIndex(targetIndex);
      setTransitionStage("pre");

      if (transitionFrameRef.current) {
        cancelAnimationFrame(transitionFrameRef.current);
        transitionFrameRef.current = null;
      }

      transitionFrameRef.current = requestAnimationFrame(() => {
        transitionFrameRef.current = requestAnimationFrame(() => {
          setTransitionStage("animating");
        });
      });

      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
        transitionTimerRef.current = null;
      }

      transitionTimerRef.current = window.setTimeout(() => {
        setTransitionStage("idle");
        setPrevIndex(null);
      }, SLIDE_TRANSITION_DURATION_MS);
    },
    [activeIndex],
  );

  const handleCycleComplete = useCallback(() => {
    if (!slides.length || slides.length <= 1) return;
    if (transitionStage !== "idle") return;
    const nextIndex = (activeIndex + 1) % slides.length;
    startSlideTransition(nextIndex);
  }, [activeIndex, slides.length, startSlideTransition, transitionStage]);

  if (!slides.length) return null;

  const baseTransitionClass =
    "absolute inset-0 transition-transform transition-opacity duration-[750ms] ease-[cubic-bezier(0.4,0,0.2,1)]";

  return (
    <div className={`relative h-full ${className}`.trim()}>
      <div className="relative h-full w-full overflow-hidden">
        {slides.map((item, slideIndex) => {
          const isActive = slideIndex === activeIndex;
          const isPrev = slideIndex === prevIndex;
          const isVisible = isActive || (isPrev && transitionStage !== "idle");

          const shouldMount = isActive || (isPrev && transitionStage !== "idle");
          if (!shouldMount) return null;

          let translateClass = "translate-x-full";
          if (isPrev && transitionStage !== "idle") {
            translateClass = "-translate-x-full";
          } else if (isActive) {
            if (transitionStage === "idle" || prevIndex === null) {
              translateClass = "translate-x-0";
            } else if (transitionStage === "pre") {
              translateClass = "translate-x-full";
            } else {
              translateClass = "translate-x-0";
            }
          }

          return (
            <div
              key={item.slug ?? item.id ?? slideIndex}
              className={`${baseTransitionClass} shadow-2xl ${translateClass} ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={isActive ? "false" : "true"}
            >
              <ComputerScreen
                item={item}
                mediaEntry={mediaEntries[slideIndex]}
                totalSlides={slides.length || 1}
                onCycleComplete={handleCycleComplete}
                isActive={isActive}
                isTransitioning={transitionStage !== "idle"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
