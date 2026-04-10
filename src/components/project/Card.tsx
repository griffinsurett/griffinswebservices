// src/components/project/Card.tsx
import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  wrapContent?: boolean;
}

/**
 * Reusable Card component with consistent styling
 * Provides the common card structure used across FeatureCard, TestimonialCard, and DoubleCard
 */
export default function Card({
  children,
  className = "",
  wrapContent = false,
}: CardProps) {
  const baseClasses = "group rounded-3xl overflow-hidden relative card-bg";
  const finalClassName = `${baseClasses} ${className}`.trim();

  return (
    <div className={finalClassName}>
      <div className="inner-card-style inner-card-transition inner-card-color" />
      {wrapContent ? (
        <div className="relative z-10">
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
