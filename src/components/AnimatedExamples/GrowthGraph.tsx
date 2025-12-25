// src/components/AnimatedExamples/GrowthGraph.tsx
import { useState, useEffect, useId } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import DecorativeWrapper from "@/integrations/preferences/accessibility/components/DecorativeWrapper";

export interface GrowthGraphProps {
  className?: string;
}

export default function GrowthGraph({ className = "" }: GrowthGraphProps) {
  const prefersReducedMotion = useMotionPreference();
  const [progress, setProgress] = useState(prefersReducedMotion ? 100 : 0);
  const uniqueId = useId();
  const [fillOpacity, setFillOpacity] = useState(prefersReducedMotion ? 1 : 0);

  useEffect(() => {
    // If user prefers reduced motion, show final state immediately
    if (prefersReducedMotion) {
      setProgress(100);
      setFillOpacity(1);
      return;
    }

    // Animate the line drawing
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = 100 / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setProgress(100);
        clearInterval(interval);
        // Fade in the fill after line completes
        setTimeout(() => {
          setFillOpacity(1);
        }, 200);
        // Reset after a pause
        setTimeout(() => {
          setFillOpacity(0);
          setTimeout(() => {
            setProgress(0);
            // Restart animation
            setTimeout(() => {
              current = 0;
              const restartInterval = setInterval(() => {
                current += increment;
                if (current >= 100) {
                  setProgress(100);
                  clearInterval(restartInterval);
                  setTimeout(() => setFillOpacity(1), 200);
                } else {
                  setProgress(current);
                }
              }, duration / steps);
            }, 500);
          }, 300);
        }, 3500);
      } else {
        setProgress(current);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Growth curve - natural aspect ratio
  const width = 400;
  const height = 120;

  // Create a smooth growth curve
  const points = [
    { x: 0, y: height - 10 },
    { x: 0.1, y: height - 15 },
    { x: 0.2, y: height - 25 },
    { x: 0.35, y: height - 45 },
    { x: 0.5, y: height - 65 },
    { x: 0.65, y: height - 82 },
    { x: 0.8, y: height - 95 },
    { x: 0.9, y: height - 105 },
    { x: 1, y: height - 112 },
  ];

  // Create SVG path for line (edge to edge)
  const pathData = points
    .map((p, i) => {
      const x = p.x * width;
      const y = p.y;
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    })
    .join(" ");

  // Create closed path for fill (adds bottom corners)
  const fillPathData = pathData + ` L ${width} ${height} L 0 ${height} Z`;

  // Calculate total path length for animation
  const pathLength = 500;

  return (
    <DecorativeWrapper
      className={`-mx-6 -mb-6 mt-4 overflow-hidden rounded-b-2xl bg-text/10 ${className}`}
    >
      {/* Labels above the graph */}
      <div className="flex justify-between px-4 pt-3 pb-2 text-xs text-text/60">
        <span>Today</span>
        <span>Future</span>
      </div>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="block"
      >
        {/* Growth line with gradient stroke */}
        <defs>
          <linearGradient
            id={`growthLineGradient-${uniqueId}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-accent-700)" />
          </linearGradient>
          <linearGradient
            id={`growthFillGradient-${uniqueId}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--color-accent)"
              stopOpacity="0.25"
            />
            <stop
              offset="100%"
              stopColor="var(--color-accent)"
              stopOpacity="0.05"
            />
          </linearGradient>
          {/* Glow filter */}
          <filter
            id={`growthGlow-${uniqueId}`}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Filled area under the curve - fades in after line completes */}
        <path
          d={fillPathData}
          fill={`url(#growthFillGradient-${uniqueId})`}
          style={{
            opacity: fillOpacity,
            transition: "opacity 0.5s ease-out",
          }}
        />

        {/* Animated growth line */}
        <path
          d={pathData}
          fill="none"
          stroke={`url(#growthLineGradient-${uniqueId})`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#growthGlow-${uniqueId})`}
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength - (pathLength * progress) / 100,
            transition: "stroke-dashoffset 0.05s linear",
          }}
        />

        {/* Dot at the end of the line */}
        {progress > 5 && (
          <circle
            cx={(progress / 100) * width}
            cy={height - 10 - (progress / 100) * 102}
            r="5"
            className="fill-accent"
            style={{
              filter: `url(#growthGlow-${uniqueId})`,
              opacity: progress < 100 ? 1 : 0.8,
            }}
          />
        )}
      </svg>
    </DecorativeWrapper>
  );
}
