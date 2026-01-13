import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function UpsellFunnelDemo({ className = "" }) {
  const prefersReducedMotion = useMotionPreference();
  const [step, setStep] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) {
      setStep(5);
      return;
    }
    setStep(0);
    const timers = [];
    timers.push(setTimeout(() => setStep(1), 500));
    timers.push(setTimeout(() => setStep(2), 1200));
    timers.push(setTimeout(() => setStep(3), 1800));
    timers.push(setTimeout(() => setStep(4), 2300));
    timers.push(setTimeout(() => setStep(5), 2800));
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 5500);
    timers.push(resetTimer);
    return () => timers.forEach((t) => clearTimeout(t));
  }, [animationKey, prefersReducedMotion]);
  const showCursor = step >= 1 && step < 5 && !prefersReducedMotion;
  const isHoveringUpsell = step === 3;
  const isClickingUpsell = step === 4;
  const upsellAdded = step >= 5;
  const getCursorPosition = () => {
    if (step <= 1) return { left: "80%", top: "25%" };
    if (step >= 2) return { left: "78%", top: "42%" };
    return { left: "80%", top: "25%" };
  };
  const cursorPos = getCursorPosition();
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `bg-text/10 rounded-lg overflow-hidden select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 px-3 py-2 flex items-center gap-2 border-b border-text/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500/60" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 bg-bg3 rounded px-2 py-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/70", children: "yourstore.com/cart" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-text/60", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6", strokeLinecap: "round", strokeLinejoin: "round" }) }),
        /* @__PURE__ */ jsx("div", { className: `absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full flex items-center justify-center ${step === 5 && !prefersReducedMotion ? "animate-bounce" : ""}`, children: /* @__PURE__ */ jsx("span", { className: "text-[7px] text-white font-bold", children: upsellAdded ? "2" : "1" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 p-3 relative h-[200px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-bg3 rounded-lg p-1.5 flex gap-2 mb-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded bg-text/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-sm", children: "📷" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[8px] font-medium text-text block", children: "Pro Digital Camera" }),
          /* @__PURE__ */ jsx("span", { className: "text-[7px] text-text/50", children: "Qty: 1" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-[9px] font-semibold text-text", children: "$599" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `border rounded-lg p-1.5 mb-2 transition-colors duration-300 ${upsellAdded ? "border-green-500/30 bg-green-500/5" : "border-primary/30 bg-primary/5"}`, children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 mb-1", children: /* @__PURE__ */ jsx("span", { className: `text-[7px] font-semibold transition-colors duration-300 ${upsellAdded ? "text-green-500" : "text-primary"}`, children: upsellAdded ? "✓ Added!" : "💡 You might like this too" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded bg-bg3 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-xs", children: "🎒" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[7px] font-medium text-text block", children: "Camera Bag Pro" }),
            /* @__PURE__ */ jsx("span", { className: "text-[7px] text-text/50", children: "Perfect fit" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[8px] font-semibold text-text block", children: "$49" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: `mt-0.5 px-1.5 py-0.5 rounded text-[6px] font-medium transition-all duration-200 ${upsellAdded ? "opacity-0 scale-75" : isHoveringUpsell ? "bg-primary/90 text-white scale-105 opacity-100" : isClickingUpsell ? "bg-primary text-white scale-95 opacity-100" : "bg-primary text-white opacity-100"}`,
                children: "+ Add"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-text/10 pt-2 mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text/60", children: "Subtotal" }),
          /* @__PURE__ */ jsx("span", { className: `text-sm font-bold tabular-nums transition-all duration-300 ${upsellAdded ? "text-green-500 scale-110" : "text-text"}`, children: upsellAdded ? "$648" : "$599" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `flex justify-between items-center mt-0.5 h-[14px] transition-opacity duration-300 ${upsellAdded ? "opacity-100" : "opacity-0"}`, children: [
          /* @__PURE__ */ jsx("span", { className: "text-[7px] text-green-500", children: "Bundle savings" }),
          /* @__PURE__ */ jsx("span", { className: "text-[7px] text-green-500 font-medium", children: "-$10" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { className: `w-full py-2 rounded-lg font-semibold text-[10px] transition-all duration-300 ${upsellAdded ? "bg-green-500 text-white" : "bg-primary text-white"}`, children: /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: upsellAdded ? "✓ Checkout — $638" : "Checkout — $599" }) }),
      showCursor && /* @__PURE__ */ jsxs(
        "div",
        {
          className: "absolute pointer-events-none transition-all duration-400 ease-out z-10",
          style: {
            left: cursorPos.left,
            top: cursorPos.top,
            transform: `translate(-50%, -50%) ${isClickingUpsell ? "scale(0.8)" : "scale(1)"}`
          },
          children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: `w-5 h-5 drop-shadow-md transition-transform duration-100 ${isClickingUpsell ? "rotate-12" : ""}`,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M4 4l16 8-7 2-2 7-7-17z",
                    className: isHoveringUpsell ? "text-primary" : "text-text/80"
                  }
                )
              }
            ),
            isClickingUpsell && /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-primary/40 animate-ping" }) })
          ]
        }
      )
    ] })
  ] });
}

const frontmatter = {
  "title": "Built to Increase Order Value",
  "description": "Smart product recommendations and upsells help customers discover more of what they need.",
  "icon": "fa6-solid:arrow-trend-up",
  "order": 33,
  "solutions": ["e-commerce-websites"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(UpsellFunnelDemo, {
    className: "mt-2",
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/UpsellFunnelDemo",
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
const url = "src/content/benefits/built-to-increase-order-value.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/built-to-increase-order-value.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/built-to-increase-order-value.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
