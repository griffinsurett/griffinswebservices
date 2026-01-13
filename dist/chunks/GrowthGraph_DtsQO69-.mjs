import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useId, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';

function GrowthGraph({ className = "" }) {
  const prefersReducedMotion = useMotionPreference();
  const [progress, setProgress] = useState(prefersReducedMotion ? 100 : 0);
  const uniqueId = useId();
  const [fillOpacity, setFillOpacity] = useState(prefersReducedMotion ? 1 : 0);
  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(100);
      setFillOpacity(1);
      return;
    }
    const duration = 2e3;
    const steps = 60;
    const increment = 100 / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setFillOpacity(1);
        }, 200);
        setTimeout(() => {
          setFillOpacity(0);
          setTimeout(() => {
            setProgress(0);
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
  const width = 400;
  const height = 120;
  const points = [
    { x: 0, y: height - 10 },
    { x: 0.1, y: height - 15 },
    { x: 0.2, y: height - 25 },
    { x: 0.35, y: height - 45 },
    { x: 0.5, y: height - 65 },
    { x: 0.65, y: height - 82 },
    { x: 0.8, y: height - 95 },
    { x: 0.9, y: height - 105 },
    { x: 1, y: height - 112 }
  ];
  const pathData = points.map((p, i) => {
    const x = p.x * width;
    const y = p.y;
    return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(" ");
  const fillPathData = pathData + ` L ${width} ${height} L 0 ${height} Z`;
  const pathLength = 500;
  return /* @__PURE__ */ jsxs(
    DecorativeWrapper,
    {
      className: `-mx-6 -mb-6 mt-4 overflow-hidden rounded-b-2xl bg-text/10 select-none pointer-events-none ${className}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between px-4 pt-3 pb-2 text-xs text-text/60", children: [
          /* @__PURE__ */ jsx("span", { children: "Today" }),
          /* @__PURE__ */ jsx("span", { children: "Future" })
        ] }),
        /* @__PURE__ */ jsxs(
          "svg",
          {
            width: "100%",
            height,
            viewBox: `0 0 ${width} ${height}`,
            preserveAspectRatio: "none",
            className: "block",
            children: [
              /* @__PURE__ */ jsxs("defs", { children: [
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: `growthLineGradient-${uniqueId}`,
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "0%",
                    children: [
                      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "var(--color-accent)" }),
                      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "var(--color-accent-700)" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: `growthFillGradient-${uniqueId}`,
                    x1: "0%",
                    y1: "0%",
                    x2: "0%",
                    y2: "100%",
                    children: [
                      /* @__PURE__ */ jsx(
                        "stop",
                        {
                          offset: "0%",
                          stopColor: "var(--color-accent)",
                          stopOpacity: "0.25"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "stop",
                        {
                          offset: "100%",
                          stopColor: "var(--color-accent)",
                          stopOpacity: "0.05"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "filter",
                  {
                    id: `growthGlow-${uniqueId}`,
                    x: "-50%",
                    y: "-50%",
                    width: "200%",
                    height: "200%",
                    children: [
                      /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "2", result: "coloredBlur" }),
                      /* @__PURE__ */ jsxs("feMerge", { children: [
                        /* @__PURE__ */ jsx("feMergeNode", { in: "coloredBlur" }),
                        /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: fillPathData,
                  fill: `url(#growthFillGradient-${uniqueId})`,
                  style: {
                    opacity: fillOpacity,
                    transition: "opacity 0.5s ease-out"
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: pathData,
                  fill: "none",
                  stroke: `url(#growthLineGradient-${uniqueId})`,
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  filter: `url(#growthGlow-${uniqueId})`,
                  style: {
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength - pathLength * progress / 100,
                    transition: "stroke-dashoffset 0.05s linear"
                  }
                }
              ),
              progress > 5 && /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: progress / 100 * width,
                  cy: height - 10 - progress / 100 * 102,
                  r: "5",
                  className: "fill-accent",
                  style: {
                    filter: `url(#growthGlow-${uniqueId})`,
                    opacity: progress < 100 ? 1 : 0.8
                  }
                }
              )
            ]
          }
        )
      ]
    }
  );
}

export { GrowthGraph as G };
