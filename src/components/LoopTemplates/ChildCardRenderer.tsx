// src/components/LoopTemplates/ChildCardRenderer.tsx
/**
 * ChildCardRenderer - Renders a grid of ChildCards
 * Similar to CardRenderer but uses ChildCard which supports childItems.
 */
import ChildCard from "@/components/LoopComponents/ChildCard";
import type { ChildCardData, ChildCardProps } from "@/components/LoopComponents/ChildCard";

type ColumnCount = 1 | 2 | 3 | 4;

export interface ChildCardRendererProps {
  items?: ChildCardData[];
  columns?: ColumnCount;
  className?: string;
  getCardClassName?: (item: ChildCardData, index: number) => string;
  getRingDuration?: (item: ChildCardData, index: number) => number;
  childCardProps?: Partial<ChildCardProps>;
  disableStagger?: boolean;
  animation?: {
    type?: string | ((index: number) => string);
    once?: boolean;
    threshold?: number;
    rootMargin?: string;
  };
}

const columnClasses: Record<ColumnCount, string> = {
  1: "grid grid-cols-1 gap-8",
  2: "grid grid-cols-1 md:grid-cols-2 gap-8",
  3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
};

export default function ChildCardRenderer({
  items = [],
  columns = 3,
  className = "",
  getCardClassName,
  getRingDuration,
  childCardProps = {},
  disableStagger = false,
  animation,
}: ChildCardRendererProps) {
  const safeItems = Array.isArray(items) ? items : [];

  // Enable stagger when we have 3+ cards
  const shouldStagger = !disableStagger && safeItems.length >= 3;
  const staggerDelay = 100;

  const defaultAnimationType = "fade-in-up";
  const animationOnce = animation?.once ?? false;

  const getAnimationType = (index: number): string => {
    if (!animation?.type) return defaultAnimationType;
    if (typeof animation.type === "function") return animation.type(index);
    return animation.type;
  };

  const getStaggerDelay = (index: number): number => {
    if (!shouldStagger) return 0;
    const positionInRow = index % columns;
    return positionInRow * staggerDelay;
  };

  const resolveClassName = (item: ChildCardData, index: number): string => {
    if (typeof getCardClassName === "function") return getCardClassName(item, index);
    const record = item as Record<string, any>;
    return [record?.class, record?.className].filter(Boolean).join(" ");
  };

  const resolveRingDuration = (item: ChildCardData, index: number): number => {
    if (typeof getRingDuration === "function") return getRingDuration(item, index);
    const record = item as Record<string, any>;
    return typeof record?.ringDuration === "number" ? record.ringDuration : 800;
  };

  if (safeItems.length === 0) {
    return null;
  }

  return (
    <ul className={`${columnClasses[columns]} list-none ${className}`.trim()}>
      {safeItems.map((item, index) => {
        const delay = getStaggerDelay(index);
        const animationType = getAnimationType(index);

        return (
          <li
            key={index}
            className="h-full"
            data-animate={animationType}
            data-animate-once={animationOnce ? "true" : undefined}
            data-animate-delay={shouldStagger ? String(delay) : undefined}
            data-animate-threshold={animation?.threshold !== undefined ? String(animation.threshold) : undefined}
            data-animate-root-margin={animation?.rootMargin}
          >
            <ChildCard
              data={item}
              ringDuration={resolveRingDuration(item, index)}
              className={resolveClassName(item, index)}
              {...childCardProps}
            />
          </li>
        );
      })}
    </ul>
  );
}
