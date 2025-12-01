import {
  Children,
  isValidElement,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useEngagementAutoScroll } from "@/hooks/autoscroll/useEngagementAutoScroll";
import { getImageSrc } from "@/layouts/collections/helpers/layoutHelpers";
import type { PortfolioItemData } from "@/components/LoopComponents/PortfolioItemComponent";

interface PortfolioScreenShowcaseProps {
  items?: PortfolioItemData[];
  className?: string;
  children?: ReactNode;
}

interface ScreenProps {
  item: PortfolioItemData;
  mediaChild?: ReactNode;
  totalSlides: number;
  activeIndex: number;
  onCycleComplete: () => void;
}

const AUTO_SCROLL_START_DELAY_MS = 700;
const AUTO_SCROLL_TARGET_DURATION_SEC = 14;
const AUTO_SCROLL_DEFAULT_CYCLE_MS = AUTO_SCROLL_TARGET_DURATION_SEC * 1000;
const AUTO_SCROLL_MAX_DURATION_MS = AUTO_SCROLL_DEFAULT_CYCLE_MS * 3;
const AUTO_SCROLL_MIN_SPEED = 28;
const AUTO_SCROLL_MAX_SPEED = 80;
const MIN_SCROLL_DELTA = 4;
const CONTENT_STABLE_WINDOW_MS = 220;
const CONTENT_STABLE_DELTA_PX = 16;
const CONTENT_READY_TIMEOUT_MS = 2200;
const BETWEEN_SLIDE_PAUSE_MS = 900;

const resolveMediaChild = (node?: ReactNode) => {
  if (!node) return undefined;
  if (!isValidElement(node)) return node;
  const props = node.props as { [key: string]: unknown };
  if (props?.["data-portfolio-placeholder"]) return undefined;
  return node;
};

function ComputerScreen({
  item,
  mediaChild,
  totalSlides,
  activeIndex,
  onCycleComplete,
}: ScreenProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [mediaReady, setMediaReady] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [scrollDurationMs, setScrollDurationMs] = useState(
    AUTO_SCROLL_DEFAULT_CYCLE_MS,
  );

  const resolveAutoScrollSpeed = useCallback((host: HTMLElement) => {
    const maxScrollable = Math.max(0, host.scrollHeight - host.clientHeight);
    if (maxScrollable <= 0) return 0;
    const baseline = maxScrollable / AUTO_SCROLL_TARGET_DURATION_SEC;
    if (!Number.isFinite(baseline) || baseline <= 0) {
      return AUTO_SCROLL_MIN_SPEED;
    }
    return Math.min(
      AUTO_SCROLL_MAX_SPEED,
      Math.max(AUTO_SCROLL_MIN_SPEED, baseline),
    );
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
      return Math.min(
        AUTO_SCROLL_MAX_DURATION_MS,
        Math.max(AUTO_SCROLL_DEFAULT_CYCLE_MS, rawDurationMs),
      );
    },
    [resolveAutoScrollSpeed],
  );

  useEngagementAutoScroll({
    ref: viewportRef,
    active: contentReady,
    speed: resolveAutoScrollSpeed,
    loop: false,
    startDelay: AUTO_SCROLL_START_DELAY_MS,
    resumeDelay: 1200,
    resumeOnUserInput: false,
    threshold: 0.05,
    resetOnInactive: true,
  });

  useEffect(() => {
    const host = viewportRef.current;
    if (!host) return;

    const imageEl =
      (host.querySelector("picture img") as HTMLImageElement | null) ??
      (host.querySelector("img") as HTMLImageElement | null);

    if (!imageEl) {
      setMediaReady(true);
      return;
    }

    if (imageEl.complete && imageEl.naturalHeight > 0) {
      setMediaReady(true);
      return;
    }

    setMediaReady(false);
    const handleReady = () => setMediaReady(true);
    imageEl.addEventListener("load", handleReady, { once: true });
    imageEl.addEventListener("error", handleReady, { once: true });

    return () => {
      imageEl.removeEventListener("load", handleReady);
      imageEl.removeEventListener("error", handleReady);
    };
  }, [mediaChild]);

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

    const timeoutId = window.setTimeout(() => {
      markReady();
    }, CONTENT_READY_TIMEOUT_MS);

    return () => {
      stabilityCleanup?.();
      window.clearTimeout(timeoutId);
    };
  }, [mediaReady]);

  useEffect(() => {
    if (!contentReady) {
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
  }, [contentReady, measureScrollDuration]);

  useEffect(() => {
    if (!contentReady) return;
    const totalDuration =
      AUTO_SCROLL_START_DELAY_MS + scrollDurationMs + BETWEEN_SLIDE_PAUSE_MS;
    const timer = window.setTimeout(() => onCycleComplete(), totalDuration);
    return () => window.clearTimeout(timer);
  }, [contentReady, onCycleComplete, scrollDurationMs]);

  const providedMedia = useMemo(() => resolveMediaChild(mediaChild), [mediaChild]);

  const fallbackSrc =
    getImageSrc(item.featuredImage) ||
    getImageSrc(item.bannerImage) ||
    getImageSrc(item.image) ||
    "";

  const renderMedia = () => {
    if (providedMedia) return providedMedia;
    if (!fallbackSrc) {
      return (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-bg2 via-bg to-bg/80 text-white/30">
          Preview coming soon
        </div>
      );
    }

    return (
      <img
        src={fallbackSrc}
        alt={item.alt || item.title || "Project preview"}
        loading="eager"
        draggable={false}
        className="block h-auto min-h-full w-full select-none object-cover object-top"
        decoding="async"
      />
    );
  };

  const clientLabel = item.client || item.title || "Project";
  const slideCounter = `${String(activeIndex + 1).padStart(2, "0")}/${String(
    totalSlides,
  ).padStart(2, "0")}`;

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="relative bg-bg3">
        <div className="flex flex-col gap-3 border-b border-white/10 px-4 py-3 text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-gray-800" />
              <span className="h-3 w-3 rounded-full bg-gray-800" />
              <span className="h-3 w-3 rounded-full bg-gray-800" />
            </span>
          </div>
        </div>
        <figure
          ref={viewportRef}
          className="relative h-[420px] overflow-y-auto overscroll-contain bg-black/40 sm:h-[500px]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {renderMedia()}
        </figure>
      </div>
    </div>
  );
}

export default function PortfolioScreenShowcase({
  items = [],
  className = "",
  children,
}: PortfolioScreenShowcaseProps) {
  const slides = useMemo(() => (Array.isArray(items) ? items : []), [items]);
  const mediaChildren = useMemo(() => Children.toArray(children ?? []), [children]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    if (!slides.length) {
      setActiveIndex(0);
      setCycleCount(0);
      return;
    }
    setActiveIndex((prev) => (prev >= slides.length ? 0 : prev));
  }, [slides.length]);

  const handleCycleComplete = useCallback(() => {
    if (!slides.length) return;
    setActiveIndex((prev) => (slides.length > 1 ? (prev + 1) % slides.length : 0));
    setCycleCount((count) => count + 1);
  }, [slides.length]);

  if (!slides.length) return null;

  const activeItem = slides[activeIndex];
  const mediaChild = mediaChildren[activeIndex];
  const renderKey = `${activeItem.slug ?? activeItem.id ?? `portfolio-${activeIndex}`}-${cycleCount}`;
  return (
    <div className={`relative ${className}`.trim()}>
      <ComputerScreen
        key={renderKey}
        item={activeItem}
        mediaChild={mediaChild}
        totalSlides={slides.length || 1}
        activeIndex={activeIndex}
        onCycleComplete={handleCycleComplete}
      />
    </div>
  );
}
