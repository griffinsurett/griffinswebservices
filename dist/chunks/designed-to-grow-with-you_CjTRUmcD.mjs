import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useId, useEffect } from 'react';
import { E as useMotionPreference } from './BaseLayout_DpejhLLs.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

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
      className: `-mx-6 -mb-6 mt-4 overflow-hidden rounded-b-2xl bg-text/10 ${className}`,
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

const frontmatter = {
  "title": "Designed to Grow With You",
  "description": "Your website is built to support change and expansion over time. As your business evolves, adding new pages, services, or features won't require an expensive rebuild or starting from scratch.",
  "icon": "fa6-solid:arrows-up-down-left-right",
  "order": 2,
  "tags": ["featured"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(GrowthGraph, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/GrowthGraph",
    "client:component-export": "default",
    "client:component-hydration": true
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
const url = "src/content/benefits/designed-to-grow-with-you.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/designed-to-grow-with-you.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/designed-to-grow-with-you.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
