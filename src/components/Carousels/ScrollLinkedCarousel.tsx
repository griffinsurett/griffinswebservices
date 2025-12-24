// src/components/Carousels/ScrollLinkedCarousel.tsx
import {
  Children,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export interface ScrollLinkedCarouselHandle {
  container: HTMLDivElement | null;
  track: HTMLDivElement | null;
  getCurrentOffset: () => number;
  getProgress: () => number;
}

interface ScrollLinkedCarouselProps {
  items?: any[];
  renderItem?: (item: any, index: number) => ReactNode;
  children?: ReactNode;
  /** Gap between items in pixels */
  gap?: number;
  /** How much of the track to scroll through (0-1, where 1 = full track) */
  scrollRange?: number;
  /** Easing for the scroll transform */
  easing?: "linear" | "ease-out" | "ease-in-out";
  /** Transition duration in ms */
  transitionDuration?: number;
  /** Show gradient masks on edges */
  gradientMask?: boolean;
  gradientWidth?: { base: number; md: number };
  /** Lock page scroll until carousel is fully scrolled */
  lockScroll?: boolean;
  className?: string;
  trackClassName?: string;
  itemClassName?: string;
}

const ScrollLinkedCarousel = forwardRef<
  ScrollLinkedCarouselHandle,
  ScrollLinkedCarouselProps
>(function ScrollLinkedCarousel(
  {
    items = [],
    renderItem = () => null,
    children,
    gap = 32,
    scrollRange = 1,
    easing = "ease-out",
    transitionDuration = 150,
    gradientMask = false,
    gradientWidth = { base: 32, md: 48 },
    lockScroll = false,
    className = "",
    trackClassName = "",
    itemClassName = "",
  },
  ref,
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [progress, setProgress] = useState(0);

  useImperativeHandle(ref, () => ({
    container: containerRef.current,
    track: trackRef.current,
    getCurrentOffset: () => offset,
    getProgress: () => progress,
  }));

  const childrenArray = useMemo(
    () => Children.toArray(children).filter(Boolean),
    [children],
  );
  const usingChildren = childrenArray.length > 0;

  // Calculate max scroll distance (track width - container width)
  useEffect(() => {
    const updateMaxScroll = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const containerWidth = container.offsetWidth;
      const trackWidth = track.scrollWidth;
      setMaxScroll(Math.max(0, trackWidth - containerWidth));
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll, { passive: true });
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, [usingChildren ? childrenArray.length : items.length]);

  // Handle scroll-linked horizontal movement
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || maxScroll <= 0) return;

    const rect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Start scrolling when element is fully visible (rect.bottom <= viewportHeight means fully in view)
    // Progress starts at 0 when element bottom reaches viewport bottom
    // Progress reaches 1 when element top reaches viewport top

    // Element is fully visible when: rect.top >= 0 && rect.bottom <= viewportHeight
    // We want to start at 0 when rect.top = viewportHeight - elementHeight (fully visible at bottom)
    // And end at 1 when rect.top = 0 (element top at viewport top)

    const elementHeight = rect.height;
    const fullyVisibleTop = viewportHeight - elementHeight; // rect.top when element is fully visible at bottom

    // Distance traveled from "fully visible" position
    const distanceTraveled = fullyVisibleTop - rect.top;

    // Total travel distance is from fully visible to element top at viewport top
    const totalTravelDistance = fullyVisibleTop;

    // Progress: 0 when fully visible at bottom, 1 when top reaches viewport top
    const rawProgress = Math.max(0, Math.min(1, distanceTraveled / totalTravelDistance));
    setProgress(rawProgress);

    // Apply scroll range to limit how much of the track we scroll through
    const targetOffset = rawProgress * maxScroll * scrollRange;
    const clampedOffset = Math.max(0, Math.min(maxScroll, targetOffset));

    setOffset(-clampedOffset);
  }, [maxScroll, scrollRange]);

  useEffect(() => {
    handleScroll(); // Initial calculation
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock scroll: convert vertical scroll into horizontal carousel scroll
  const accumulatedDeltaRef = useRef(0);
  const isLockedRef = useRef(false);

  useEffect(() => {
    if (!lockScroll || maxScroll <= 0) return;

    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Check if carousel is in the "active zone" (fully visible)
      const isFullyVisible = rect.top >= 0 && rect.bottom <= viewportHeight;
      const isInActiveZone = rect.top <= viewportHeight - elementHeight && rect.bottom >= 0;

      if (!isInActiveZone) {
        isLockedRef.current = false;
        return;
      }

      // Calculate current horizontal scroll progress
      const currentHorizontalProgress = Math.abs(offset) / maxScroll;
      const isAtStart = currentHorizontalProgress <= 0.01;
      const isAtEnd = currentHorizontalProgress >= 0.99;

      // Scrolling down and not at end, or scrolling up and not at start
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      const shouldLock =
        (scrollingDown && !isAtEnd && isFullyVisible) ||
        (scrollingUp && !isAtStart && isFullyVisible);

      if (shouldLock) {
        e.preventDefault();
        isLockedRef.current = true;

        // Accumulate delta and convert to horizontal offset
        accumulatedDeltaRef.current += e.deltaY;

        // Sensitivity: how many pixels of vertical scroll = full horizontal scroll
        const sensitivity = viewportHeight * 0.8;
        const horizontalProgress = Math.max(
          0,
          Math.min(1, accumulatedDeltaRef.current / sensitivity)
        );

        const newOffset = -horizontalProgress * maxScroll * scrollRange;
        setOffset(Math.max(-maxScroll, Math.min(0, newOffset)));
        setProgress(horizontalProgress);
      } else {
        // Reset accumulated delta when unlocked
        if (isAtEnd && scrollingDown) {
          accumulatedDeltaRef.current = maxScroll * scrollRange / (viewportHeight * 0.8) * viewportHeight * 0.8;
        } else if (isAtStart && scrollingUp) {
          accumulatedDeltaRef.current = 0;
        }
        isLockedRef.current = false;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [lockScroll, maxScroll, offset, scrollRange]);

  // Gradient width responsive
  const [gradientPx, setGradientPx] = useState(() =>
    typeof window === "undefined"
      ? gradientWidth.base
      : window.innerWidth >= 768
        ? gradientWidth.md
        : gradientWidth.base,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const listener = () => {
      setGradientPx(
        window.innerWidth >= 768 ? gradientWidth.md : gradientWidth.base,
      );
    };
    window.addEventListener("resize", listener, { passive: true });
    return () => window.removeEventListener("resize", listener);
  }, [gradientWidth.base, gradientWidth.md]);

  const transitionStyle = `transform ${transitionDuration}ms ${easing}`;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`.trim()}
      data-scroll-linked-carousel
    >
      {gradientMask && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none bg-gradient-to-r from-bg to-transparent"
            style={{ width: `${gradientPx}px` }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none bg-gradient-to-l from-bg to-transparent"
            style={{ width: `${gradientPx}px` }}
          />
        </>
      )}

      <div
        ref={trackRef}
        className={`flex items-stretch ${trackClassName}`.trim()}
        style={{
          transform: `translateX(${offset}px)`,
          transition: transitionStyle,
          gap: `${gap}px`,
        }}
      >
        {usingChildren
          ? childrenArray.map((child, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${itemClassName}`.trim()}
                data-scroll-linked-item
              >
                {child}
              </div>
            ))
          : items.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${itemClassName}`.trim()}
                data-scroll-linked-item
              >
                {renderItem(item, index)}
              </div>
            ))}
      </div>
    </div>
  );
});

export default ScrollLinkedCarousel;
