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
  /** Numeric value for the stat (will animate from 0) */
  statValue?: number;
  /** Suffix for the stat (e.g., " seconds") */
  statSuffix?: string;
  /** Animation delay in ms */
  delay?: number;
  /** Bar height */
  height?: string;
  /** Additional className */
  className?: string;
  /** Duration of counter animation in ms */
  counterDuration?: number;
}

// Helper to get decimal places from a number
const getDecimalPlaces = (value: number) => {
  const str = value.toString();
  const decimalIndex = str.indexOf(".");
  return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1;
};

export default function BarGraph({
  label,
  value,
  variant = "primary",
  showValue = true,
  stat,
  statValue,
  statSuffix = "",
  delay = 0,
  height = "h-10",
  className = "",
  counterDuration = 1000,
}: BarGraphProps) {
  const [animated, setAnimated] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);
  const [displayStatValue, setDisplayStatValue] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const valueDecimals = getDecimalPlaces(value);
  const statDecimals = statValue !== undefined ? getDecimalPlaces(statValue) : 0;

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

  // Counter animation effect
  useEffect(() => {
    if (!animated) return;

    const startTime = performance.now();

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / counterDuration, 1);
      // Ease-out cubic curve (matches Counter.astro)
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(value * eased);
      if (statValue !== undefined) {
        setDisplayStatValue(statValue * eased);
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
        if (statValue !== undefined) {
          setDisplayStatValue(statValue);
        }
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animated, value, statValue, counterDuration]);

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

  // Format display values with proper decimals
  const formattedValue = valueDecimals > 0
    ? displayValue.toFixed(valueDecimals)
    : Math.round(displayValue).toString();

  const formattedStatValue = statDecimals > 0
    ? displayStatValue.toFixed(statDecimals)
    : Math.round(displayStatValue).toString();

  return (
    <div ref={barRef} className={`w-full ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-sm text-text/80">{label}</span>
        {statValue !== undefined ? (
          <span className={`text-lg tabular-nums ${valueClass}`}>
            {formattedStatValue}{statSuffix}
          </span>
        ) : stat ? (
          <span className={`text-lg ${valueClass}`}>
            {stat}
          </span>
        ) : null}
      </div>
      <div className={`w-full ${height} bg-text/10 rounded-sm overflow-hidden relative`}>
        <div
          className={`h-full rounded-sm transition-all duration-1000 ease-out ${barClass}`}
          style={{ width: animated ? `${value}%` : "0%" }}
        />
        {showValue && (
          <span className="absolute inset-0 flex items-center pl-3 text-sm font-semibold text-white tabular-nums">
            {formattedValue}%
          </span>
        )}
      </div>
    </div>
  );
}
