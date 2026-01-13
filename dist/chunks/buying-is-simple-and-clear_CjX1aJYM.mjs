import { f as createVNode, F as Fragment$1, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function AddToCartDemo({ className = "" }) {
  const prefersReducedMotion = useMotionPreference();
  const [step, setStep] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) {
      setStep(6);
      return;
    }
    setStep(0);
    const timers = [];
    timers.push(setTimeout(() => setStep(1), 300));
    timers.push(setTimeout(() => setStep(2), 900));
    timers.push(setTimeout(() => setStep(3), 1500));
    timers.push(setTimeout(() => setStep(4), 2e3));
    timers.push(setTimeout(() => setStep(5), 2400));
    timers.push(setTimeout(() => setStep(6), 3e3));
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 5500);
    timers.push(resetTimer);
    return () => timers.forEach((t) => clearTimeout(t));
  }, [animationKey, prefersReducedMotion]);
  const showCursor = step >= 1 && step < 5 && !prefersReducedMotion;
  const isHovering = step === 3;
  const isClicking = step === 4;
  const showAdded = step >= 5;
  const showCart = step >= 6;
  const getCursorPosition = () => {
    if (step <= 1) return { left: "80%", top: "25%" };
    if (step >= 2) return { left: "50%", top: "78%" };
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
      /* @__PURE__ */ jsx("div", { className: "flex-1 bg-bg3 rounded px-2 py-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/70", children: "yourstore.com/products/premium-headphones" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-text/60", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6", strokeLinecap: "round", strokeLinejoin: "round" }) }),
        showAdded && /* @__PURE__ */ jsx("div", { className: `absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full flex items-center justify-center ${!prefersReducedMotion && step === 5 ? "animate-bounce" : ""}`, children: /* @__PURE__ */ jsx("span", { className: "text-[7px] text-white font-bold", children: "1" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 p-3 relative min-h-[200px] overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-lg bg-bg3 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxs("svg", { className: "w-12 h-12 text-text/30", viewBox: "0 0 24 24", fill: "currentColor", children: [
          /* @__PURE__ */ jsx("path", { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }),
          /* @__PURE__ */ jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
          /* @__PURE__ */ jsx("line", { x1: "12", y1: "19", x2: "12", y2: "23" }),
          /* @__PURE__ */ jsx("line", { x1: "8", y1: "23", x2: "16", y2: "23" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold text-text mb-0.5", children: "Premium Wireless Headphones" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mb-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[9px] text-yellow-500", children: "★★★★★" }),
            /* @__PURE__ */ jsx("span", { className: "text-[8px] text-text/50", children: "(128 reviews)" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[9px] text-text/60 mb-2 line-clamp-2", children: "Crystal-clear audio with 30-hour battery life. Active noise cancellation." }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-text", children: "$199" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/40 line-through", children: "$249" }),
            /* @__PURE__ */ jsx("span", { className: "text-[8px] text-green-500 font-medium", children: "20% OFF" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `w-full mt-3 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${showAdded ? "bg-green-500 text-white" : isHovering ? "bg-primary/90 text-white scale-[1.02]" : isClicking ? "bg-primary text-white scale-95" : "bg-primary text-white"}`,
          children: showAdded ? "✓ Added to Cart!" : "Add to Cart"
        }
      ),
      showCart && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute right-0 top-0 bottom-0 w-[70%] bg-bg2 border-l border-text/10 p-2.5 animate-[slideIn_0.3s_ease-out]", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-text", children: "Your Cart (1)" }),
            /* @__PURE__ */ jsx("div", { className: "w-4 h-4 rounded-full bg-text/10 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[8px] text-text/50", children: "✕" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-bg3 rounded p-1.5 flex gap-2 mb-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded bg-text/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-text/30", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[8px] font-medium text-text block truncate", children: "Premium Headphones" }),
              /* @__PURE__ */ jsx("span", { className: "text-[8px] text-text/50", children: "Qty: 1" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[9px] font-semibold text-text", children: "$199" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "border-t border-text/10 pt-2 mb-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[9px]", children: [
            /* @__PURE__ */ jsx("span", { className: "text-text/60", children: "Subtotal" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-text", children: "$199.00" })
          ] }) }),
          /* @__PURE__ */ jsx("button", { className: "w-full py-2 rounded-lg bg-primary text-white text-[10px] font-semibold", children: "Checkout" })
        ] })
      ] }),
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
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M4 4l16 8-7 2-2 7-7-17z",
                    className: isHovering ? "text-primary" : "text-text/80"
                  }
                )
              }
            ),
            isClicking && /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-primary/40 animate-ping" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      ` })
  ] });
}

const frontmatter = {
  "title": "Buying Is Simple and Clear",
  "description": "Clean layouts and straightforward checkout reduce confusion and abandoned carts.",
  "icon": "fa6-solid:cart-shopping",
  "order": 30,
  "solutions": ["e-commerce-websites"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(AddToCartDemo, {
    className: "mt-2",
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/AddToCartDemo",
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
const url = "src/content/benefits/buying-is-simple-and-clear.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/buying-is-simple-and-clear.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment$1, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/buying-is-simple-and-clear.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
