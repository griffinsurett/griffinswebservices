// src/components/BorderTitle.tsx
import AnimatedBorder from "@/components/AnimatedBorder/AnimatedBorder";
import Heading from "@/components/Heading";
import { useAnimatedElement } from "@/hooks/animations/useViewAnimation";
import type { ReactNode } from "react";

export interface BorderTitleProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  hoverSweep?: boolean;
  pillClassName?: string;
}

export default function BorderTitle({
  children,
  className = "",
  duration = 1200,
  hoverSweep = true,
  pillClassName = "text-sm px-5 py-2.5 tracking-wider",
}: BorderTitleProps) {
  const anim = useAnimatedElement<HTMLSpanElement>({
    duration,
    delay: 0,
    threshold: 0,
    rootMargin: "0px 0px -15px 0px",
  });

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
        >
          <Heading
            tagName="span"
            className={`uppercase tracking-wider font-semibold text-heading ${className}`}
          >
            <span
              ref={anim.ref}
              className="animated-element color-text-fade"
              {...anim.props}
            >
              {children}
            </span>
          </Heading>
        </AnimatedBorder>

        {hoverSweep && (
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
