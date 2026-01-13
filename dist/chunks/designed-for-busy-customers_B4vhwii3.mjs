import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function MobileOrderDemo({ className = "" }) {
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
    timers.push(setTimeout(() => setStep(1), 300));
    timers.push(setTimeout(() => setStep(2), 900));
    timers.push(setTimeout(() => setStep(3), 1500));
    timers.push(setTimeout(() => setStep(4), 2e3));
    timers.push(setTimeout(() => setStep(5), 2400));
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 4500);
    timers.push(resetTimer);
    return () => timers.forEach((t) => clearTimeout(t));
  }, [animationKey, prefersReducedMotion]);
  const showCursor = step >= 1 && step < 5 && !prefersReducedMotion;
  const isHovering = step === 3;
  const isClicking = step === 4;
  const showSuccess = step >= 5;
  const getCursorPosition = () => {
    if (step <= 1) return { left: "80%", top: "30%" };
    if (step >= 2) return { left: "50%", top: "72%" };
    return { left: "80%", top: "30%" };
  };
  const cursorPos = getCursorPosition();
  return /* @__PURE__ */ jsx(DecorativeWrapper, { className: `bg-text/10 rounded-lg overflow-hidden select-none pointer-events-none ${className}`, children: /* @__PURE__ */ jsxs("div", { className: "bg-bg2 rounded-xl overflow-hidden border border-text/10 max-w-[200px] mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-bg3 px-3 py-1 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[8px] text-text/50", children: "9:41" }),
      /* @__PURE__ */ jsx("div", { className: "w-12 h-1.5 bg-text/20 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsx("div", { className: "w-3 h-2 border border-text/30 rounded-sm", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-1 bg-text/30 ml-auto mt-0.5 mr-0.5 rounded-sm" }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-3 relative min-h-[180px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 mx-auto mb-1 rounded-full bg-orange-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "🌮" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold text-text", children: "Taco Fiesta" }),
        /* @__PURE__ */ jsx("p", { className: "text-[9px] text-text/50", children: "Open Now · Closes 10 PM" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-3 mb-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold text-text", children: "4.8 ★" }),
          /* @__PURE__ */ jsx("div", { className: "text-[8px] text-text/50", children: "324 reviews" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-px bg-text/10" }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold text-text", children: "15-25 min" }),
          /* @__PURE__ */ jsx("div", { className: "text-[8px] text-text/50", children: "delivery" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${showSuccess ? "bg-green-500 text-white" : isHovering ? "bg-orange-600 text-white scale-105" : isClicking ? "bg-orange-700 text-white scale-95" : "bg-orange-500 text-white"}`,
          children: showSuccess ? "✓ Order Started!" : "Order Here"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mt-2", children: [
        /* @__PURE__ */ jsx("button", { className: "flex-1 py-1.5 rounded bg-bg3 text-[9px] text-text/70 font-medium", children: "View Menu" }),
        /* @__PURE__ */ jsx("button", { className: "flex-1 py-1.5 rounded bg-bg3 text-[9px] text-text/70 font-medium", children: "Call" })
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
                    className: isHovering ? "text-orange-500" : "text-text/80"
                  }
                )
              }
            ),
            isClicking && /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-orange-500/40 animate-ping" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "py-1.5 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-20 h-1 bg-text/20 rounded-full" }) })
  ] }) });
}

const frontmatter = {
  "title": "Designed for Busy Customers",
  "description": "Built for quick browsing, mobile use, and fast decisions.",
  "icon": "fa6-solid:person-running",
  "order": 28,
  "solutions": [],
  "industries": ["restaurants-food-service"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(MobileOrderDemo, {
    className: "mt-2",
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/MobileOrderDemo",
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
const url = "src/content/benefits/designed-for-busy-customers.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/designed-for-busy-customers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/designed-for-busy-customers.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
