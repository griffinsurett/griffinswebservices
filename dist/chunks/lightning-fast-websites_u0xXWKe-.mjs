import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { C as useMotionPreference } from './BaseLayout_BLCbETNX.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function AnimatedNumber({
  value,
  duration = 1e3,
  decimals = 0
}) {
  const [display, setDisplay] = useState(0);
  const startTimeRef = useRef(null);
  const animationRef = useRef(null);
  useEffect(() => {
    if (duration === 0) {
      setDisplay(value);
      return;
    }
    startTimeRef.current = performance.now();
    const animate = (timestamp) => {
      if (!startTimeRef.current) return;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(current);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration]);
  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();
  return /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: formatted });
}
function BarGraph({
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
  counterDuration = 1e3
}) {
  const prefersReducedMotion = useMotionPreference();
  const [animated, setAnimated] = useState(false);
  const barRef = useRef(null);
  useEffect(() => {
    if (prefersReducedMotion) {
      setAnimated(true);
      return;
    }
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
  }, [animated, delay, prefersReducedMotion]);
  const barClass = variant === "primary" ? "primary-gradient" : variant === "primary-reverse" ? "bg-linear-to-r from-accent-700 to-accent" : "bg-text/30";
  const valueClass = variant === "primary" || variant === "primary-reverse" ? "text-accent font-bold" : "text-text/60";
  const effectiveDuration = prefersReducedMotion ? 0 : counterDuration;
  const statDecimals = statValue !== void 0 ? statValue.toString().split(".")[1]?.length ?? 0 : 0;
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `w-full ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { ref: barRef, className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-text/80", children: label }),
      statValue !== void 0 ? /* @__PURE__ */ jsxs("span", { className: `text-lg ${valueClass}`, children: [
        /* @__PURE__ */ jsx(
          AnimatedNumber,
          {
            value: animated ? statValue : 0,
            duration: effectiveDuration,
            decimals: statDecimals
          }
        ),
        statSuffix
      ] }) : stat ? /* @__PURE__ */ jsx("span", { className: `text-lg ${valueClass}`, children: stat }) : null
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `w-full ${height} bg-text/10 rounded-sm overflow-hidden relative`, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `h-full rounded-sm ${prefersReducedMotion ? "" : "transition-all duration-1000 ease-out"} ${barClass}`,
          style: { width: animated ? `${value}%` : "0%" }
        }
      ),
      showValue && /* @__PURE__ */ jsxs("span", { className: "absolute inset-0 flex items-center pl-3 text-sm font-semibold text-white", children: [
        /* @__PURE__ */ jsx(
          AnimatedNumber,
          {
            value: animated ? value : 0,
            duration: effectiveDuration
          }
        ),
        "%"
      ] })
    ] })
  ] });
}

const frontmatter = {
  "title": "Lightning-Fast Websites",
  "description": "Built to load instantly and feel effortless from the very first interaction. Visitors move smoothly from page to page without interruptions, delays, or loading screens — keeping attention high and drop-offs low.",
  "icon": "fa6-solid:bolt",
  "order": 1
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode("div", {
    className: "flex flex-col gap-3 mt-2",
    children: [createVNode(BarGraph, {
      label: "GWS Average",
      value: 97.5,
      statValue: 2.5,
      statSuffix: " seconds",
      variant: "primary-reverse",
      "client:visible": true,
      "client:component-path": "@/components/AnimatedExamples/BarGraph",
      "client:component-export": "default",
      "client:component-hydration": true
    }), createVNode(BarGraph, {
      label: "Industry Average",
      value: 34,
      statValue: 7.1,
      statSuffix: " seconds",
      variant: "grey",
      delay: 200,
      "client:visible": true,
      "client:component-path": "@/components/AnimatedExamples/BarGraph",
      "client:component-export": "default",
      "client:component-hydration": true
    })]
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
const url = "src/content/benefits/lightning-fast-websites.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/lightning-fast-websites.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/lightning-fast-websites.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
