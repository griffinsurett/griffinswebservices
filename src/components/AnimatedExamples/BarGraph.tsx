// src/components/BarGraph.tsx
import { useEffect, useRef, useState } from "react";

export interface BarGraphProps {
  /** Label displayed above or beside the bar */
  label: string;
  /** Percentage value (0-100) */
  value: number;
  /** Use primary gradient styling */
  variant?: "primary" | "primary-reverse" | "grey";
  /** Show percentage text */
  showValue?: boolean;
  /** Custom stat text (e.g., "2.5 seconds") shown where percentage was */
  stat?: string;
  /** Animation delay in ms */
  delay?: number;
  /** Bar height */
  height?: string;
  /** Additional className */
  className?: string;
}

export default function BarGraph({
  label,
  value,
  variant = "primary",
  showValue = true,
  stat,
  delay = 0,
  height = "h-10",
  className = "",
}: BarGraphProps) {
  const [animated, setAnimated] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setTimeout(() => setAnimated(true), delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [animated, delay]);

  const barClass =
    variant === "primary"
      ? "primary-gradient"
      : variant === "primary-reverse"
        ? "bg-linear-to-r from-accent-700 to-accent"
        : "bg-text/30";

  const valueClass =
    variant === "primary" || variant === "primary-reverse"
      ? "text-accent font-bold"
      : "text-text/60";

  return (
    <div ref={barRef} className={`w-full ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-sm text-text/80">{label}</span>
        {stat && (
          <span className={`text-lg ${valueClass}`}>
            {stat}
          </span>
        )}
      </div>
      <div className={`w-full ${height} bg-text/10 rounded-sm overflow-hidden relative`}>
        <div
          className={`h-full rounded-sm transition-all duration-1000 ease-out ${barClass}`}
          style={{ width: animated ? `${value}%` : "0%" }}
        />
        {showValue && (
          <span className="absolute inset-0 flex items-center pl-3 text-sm font-semibold text-white">
            {value}%
          </span>
        )}
      </div>
    </div>
  );
}
