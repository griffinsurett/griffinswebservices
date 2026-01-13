import { f as createVNode, F as Fragment$1, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function EcommerceIntegrationDemo({ className = "" }) {
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
    timers.push(setTimeout(() => setStep(1), 600));
    timers.push(setTimeout(() => setStep(2), 1200));
    timers.push(setTimeout(() => setStep(3), 1800));
    timers.push(setTimeout(() => setStep(4), 2300));
    timers.push(setTimeout(() => setStep(5), 2800));
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 6500);
    timers.push(resetTimer);
    return () => timers.forEach((t) => clearTimeout(t));
  }, [animationKey, prefersReducedMotion]);
  const shippingCalculated = step >= 1;
  const showCursor = step >= 2 && step < 5 && !prefersReducedMotion;
  const isHovering = step === 3;
  const isClicking = step === 4;
  const showIntegrations = step >= 5;
  const getCursorPosition = () => {
    if (step <= 2) return { left: "80%", top: "30%" };
    if (step >= 3) return { left: "50%", top: "85%" };
    return { left: "80%", top: "30%" };
  };
  const cursorPos = getCursorPosition();
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `bg-text/10 rounded-lg overflow-hidden select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 px-3 py-2 flex items-center gap-2 border-b border-text/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500/60" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 bg-bg3 rounded px-2 py-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/70", children: showIntegrations ? "Syncing to connected systems..." : "yourstore.com/checkout" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 p-3 relative min-h-[220px] overflow-hidden", children: [
      !showIntegrations && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-semibold text-text mb-2", children: "Checkout" }),
        /* @__PURE__ */ jsx("div", { className: "bg-bg3 rounded-lg p-2 mb-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded bg-text/10 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-sm", children: "👟" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[9px] font-medium text-text block", children: "Running Shoes" }),
            /* @__PURE__ */ jsx("span", { className: "text-[8px] text-text/50", children: "Size 10 · Black" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-[9px] font-semibold text-text", children: "$89.00" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-bg3 rounded-lg p-2 mb-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text/70", children: "Shipping to 90210" }),
            shippingCalculated ? /* @__PURE__ */ jsx("span", { className: "text-[9px] font-medium text-green-500", children: "$5.99" }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 border border-text/30 border-t-primary rounded-full animate-spin" }),
              /* @__PURE__ */ jsx("span", { className: "text-[8px] text-text/50", children: "Calculating..." })
            ] })
          ] }),
          shippingCalculated && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-[8px] text-text/50", children: /* @__PURE__ */ jsx("span", { children: "Est. delivery: 3-5 days" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "border-t border-text/10 pt-2 mb-3", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-text", children: "Total" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-text", children: shippingCalculated ? "$94.99" : "..." })
        ] }) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: `w-full py-2.5 rounded-lg font-semibold text-[11px] transition-all duration-200 ${!shippingCalculated ? "bg-text/20 text-text/40" : isHovering ? "bg-primary/90 text-white scale-[1.02]" : isClicking ? "bg-primary text-white scale-95" : "bg-primary text-white"}`,
            children: shippingCalculated ? "Place Order" : "Calculating..."
          }
        ),
        showCursor && /* @__PURE__ */ jsxs(
          "div",
          {
            className: "absolute pointer-events-none transition-all duration-400 ease-out z-10",
            style: {
              left: cursorPos.left,
              top: cursorPos.top,
              transform: `translate(-50%, -50%) ${isClicking ? "scale(0.8)" : "scale(1)"}`
            },
            children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: `w-5 h-5 drop-shadow-md transition-transform duration-100 ${isClicking ? "rotate-12" : ""}`,
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  children: /* @__PURE__ */ jsx("path", { d: "M4 4l16 8-7 2-2 7-7-17z", className: isHovering ? "text-primary" : "text-text/80" })
                }
              ),
              isClicking && /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-primary/40 animate-ping" }) })
            ]
          }
        )
      ] }),
      showIntegrations && /* @__PURE__ */ jsxs("div", { className: "animate-[fadeIn_0.3s_ease-out]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-text", children: "Order #1847 Syncing..." }),
          /* @__PURE__ */ jsx("span", { className: "text-[8px] text-green-500 font-medium animate-pulse", children: "● Live" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-1.5", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-bg3 rounded-lg p-1.5 animate-[slideUp_0.3s_ease-out]", style: { animationDelay: "0ms" }, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mb-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[9px]", children: "📦" }),
              /* @__PURE__ */ jsx("span", { className: "text-[7px] font-semibold text-text", children: "Inventory" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-yellow-500/10 rounded p-1 mb-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[7px] text-text block truncate", children: "Running Shoes" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mt-0.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[7px] text-text/40 line-through", children: "24" }),
                /* @__PURE__ */ jsx("span", { className: "text-[8px] text-green-500 font-bold", children: "→ 23" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[6px] text-green-500", children: "✓ Updated" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-bg3 rounded-lg p-1.5 animate-[slideUp_0.3s_ease-out]", style: { animationDelay: "150ms" }, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mb-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[9px]", children: "📊" }),
              /* @__PURE__ */ jsx("span", { className: "text-[7px] font-semibold text-text", children: "Sales Log" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-text/5 rounded overflow-hidden mb-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-px bg-text/10", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-bg3 px-1 py-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[6px] text-text/50", children: "#1846" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-bg3 px-1 py-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[6px] text-text/50", children: "$79" }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-px bg-green-500/30", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-green-500/10 px-1 py-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[6px] text-text font-bold", children: "#1847" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-green-500/10 px-1 py-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[6px] text-green-600 font-bold", children: "$94.99" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[6px] text-green-500", children: "✓ Row added" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-bg3 rounded-lg p-1.5 animate-[slideUp_0.3s_ease-out]", style: { animationDelay: "300ms" }, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mb-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[9px]", children: "💬" }),
              /* @__PURE__ */ jsx("span", { className: "text-[7px] font-semibold text-text", children: "Team Chat" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-green-500/10 border border-green-500/20 rounded p-1 mb-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-0.5 mb-0.5", children: [
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded bg-blue-500 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[5px]", children: "🤖" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-[6px] text-green-500", children: "now" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-[6px] text-text leading-tight", children: [
                "🚀 Ship #1847",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-text/60", children: "Shoes → 90210" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[6px] text-green-500", children: "✓ Notified" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-center", children: /* @__PURE__ */ jsx("span", { className: "text-[8px] text-green-500 font-medium", children: "✓ All systems synced automatically" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` })
  ] });
}

const frontmatter = {
  "title": "Connects With the Systems You Use",
  "description": "Payments, shipping, inventory, and marketing tools work together without manual workarounds.",
  "icon": "fa6-solid:link",
  "order": 32,
  "solutions": ["e-commerce-websites"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(EcommerceIntegrationDemo, {
    className: "mt-2",
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/EcommerceIntegrationDemo",
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
const url = "src/content/benefits/connects-with-the-systems-you-use.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/connects-with-the-systems-you-use.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment$1, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/connects-with-the-systems-you-use.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
