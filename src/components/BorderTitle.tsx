// src/components/BorderTitle.tsx
import AnimatedBorder, {
  type VisibleRootMargin,
} from "@/components/AnimatedBorder/AnimatedBorder";
import Heading from "@/components/Heading";
import type { ReactNode } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";

export interface BorderTitleProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  hoverSweep?: boolean;
  pillClassName?: string;
  visibleRootMargin?: VisibleRootMargin;
}

export default function BorderTitle({
  children,
  className = "",
  duration = 1200,
  hoverSweep = true,
  pillClassName = "text-xs lg:text-sm px-3 py-2 lg:px-4.5 lg:py-2 tracking-wider",
  visibleRootMargin = { top: -50, right: 0, bottom: -100, left: 0 },
}: BorderTitleProps) {
  const prefersReducedMotion = useMotionPreference();

  // Don't show decorative hover sweep when reduced motion is preferred
  const showHoverSweep = hoverSweep && !prefersReducedMotion;

  return (
    <div className="inline-block mb-3">
      <div className="relative inline-block">
        <AnimatedBorder
          variant="progress-b-f"
          triggers="visible"
          duration={duration}
          borderRadius="rounded-full"
          borderWidth={2}
          color="var(--color-primary)"
          className="inline-block"
          innerClassName={`bg-transparent border-transparent ${pillClassName}`}
          visibleRootMargin={visibleRootMargin}
        >
          <Heading
            tagName="span"
            className={`uppercase tracking-wider font-semibold text-heading ${className}`}
          >
            {prefersReducedMotion ? (
              <span className="text-primary">{children}</span>
            ) : (
              <span
                data-animate="color-text-fade"
                data-animate-once="false"
                className="color-text-fade"
                style={{ "--animation-duration": `${duration}ms` } as React.CSSProperties}
              >
                {children}
              </span>
            )}
          </Heading>
        </AnimatedBorder>

        {showHoverSweep && (
          <div className="absolute inset-0 pointer-events-none">
            <AnimatedBorder
              variant="progress-infinite"
              triggers="hover"
              duration={1200}
              borderRadius="rounded-full"
              borderWidth={2}
              color="var(--color-accent)"
              className="w-full h-full"
              innerClassName="bg-transparent border-transparent px-0 py-0 pointer-events-none"
            >
              <span className="sr-only">Decorative border sweep</span>
            </AnimatedBorder>
          </div>
        )}
      </div>
    </div>
  );
}
