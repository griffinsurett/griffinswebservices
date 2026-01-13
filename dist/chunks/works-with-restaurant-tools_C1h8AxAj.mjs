import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function RestaurantMapOrder({ className = "" }) {
  const prefersReducedMotion = useMotionPreference();
  const [step, setStep] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) {
      setStep(7);
      return;
    }
    setStep(0);
    const timers = [];
    timers.push(setTimeout(() => setStep(1), 300));
    timers.push(setTimeout(() => setStep(2), 800));
    timers.push(setTimeout(() => setStep(3), 1400));
    timers.push(setTimeout(() => setStep(4), 2200));
    timers.push(setTimeout(() => setStep(5), 2800));
    timers.push(setTimeout(() => setStep(6), 3300));
    timers.push(setTimeout(() => setStep(7), 3700));
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 6e3);
    timers.push(resetTimer);
    return () => timers.forEach((t) => clearTimeout(t));
  }, [animationKey, prefersReducedMotion]);
  const showCursor = step >= 1 && step < 7 && !prefersReducedMotion;
  const showInfoCard = step >= 3;
  const isHoveringOrder = step === 5;
  const isClickingOrder = step === 6;
  const showOrderPlatform = step >= 7;
  const getCursorPosition = () => {
    if (step <= 1) return { left: "80%", top: "75%" };
    if (step === 2) return { left: "50%", top: "38%" };
    if (step === 3) return { left: "50%", top: "38%" };
    if (step >= 4) return { left: "50%", top: "88%" };
    return { left: "80%", top: "75%" };
  };
  const cursorPos = getCursorPosition();
  const isPinClicking = step === 3;
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `bg-text/10 rounded-lg overflow-hidden select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 px-3 py-2 flex items-center gap-2 border-b border-text/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500/60" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 bg-bg3 rounded px-2 py-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/70", children: "google.com/maps" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#e8e4df] relative h-[200px] overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-[30%] left-0 right-0 h-3 bg-white/80" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[60%] left-0 right-0 h-2 bg-white/60" }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-[25%] top-0 bottom-0 w-2 bg-white/60" }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-[70%] top-0 bottom-0 w-3 bg-white/80" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[8%] left-[8%] w-12 h-8 bg-[#d4cfc7] rounded-sm" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[10%] left-[45%] w-16 h-6 bg-[#d4cfc7] rounded-sm" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[40%] left-[10%] w-10 h-10 bg-[#d4cfc7] rounded-sm" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[70%] left-[35%] w-20 h-8 bg-[#d4cfc7] rounded-sm" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[75%] left-[75%] w-14 h-10 bg-[#d4cfc7] rounded-sm" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-[42%] left-[78%] w-12 h-12 bg-[#c5d6a3] rounded-sm" })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute left-1/2 top-[35%] -translate-x-1/2 transition-transform duration-200 ${isPinClicking ? "scale-110" : ""}`,
          children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-1/2 -translate-x-1/2 w-3 h-1 bg-black/20 rounded-full blur-sm" }),
            /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-red-500 drop-shadow-md", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" }) }),
            step < 3 && !prefersReducedMotion && /* @__PURE__ */ jsx("div", { className: "absolute top-1 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500/30 animate-ping" })
          ] })
        }
      ),
      showInfoCard && !showOrderPlatform && /* @__PURE__ */ jsxs("div", { className: "absolute left-1/2 top-[52%] -translate-x-1/2 bg-white rounded-lg shadow-lg p-2.5 w-[85%] max-w-[220px] animate-[fadeIn_0.3s_ease-out]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded bg-orange-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "🌮" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-semibold text-gray-900 truncate", children: "Taco Fiesta" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[9px] text-yellow-500", children: "★★★★★" }),
              /* @__PURE__ */ jsx("span", { className: "text-[8px] text-gray-500", children: "(324)" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[8px] text-gray-500", children: "Mexican Restaurant · $$" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsx("button", { className: "flex-1 bg-gray-100 rounded px-2 py-1.5 text-[8px] text-gray-700 font-medium", children: "Directions" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `flex-1 rounded px-2 py-1.5 text-[8px] font-medium transition-all duration-200 ${isHoveringOrder ? "bg-blue-600 text-white scale-105" : isClickingOrder ? "bg-blue-700 text-white scale-95" : "bg-blue-500 text-white"}`,
              children: "Order Online"
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "flex-1 bg-gray-100 rounded px-2 py-1.5 text-[8px] text-gray-700 font-medium", children: "Call" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-transparent border-b-white" })
      ] }),
      showOrderPlatform && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-white animate-[fadeIn_0.3s_ease-out]", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-orange-500 px-3 py-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-white text-[10px] font-bold", children: "🍽️ OrderNow" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/80 text-[8px]", children: "· Taco Fiesta" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-2 space-y-1.5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-gray-50 rounded p-1.5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-sm", children: "🌮" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-[9px] font-medium text-gray-900 block", children: "Street Tacos (3)" }),
                /* @__PURE__ */ jsx("span", { className: "text-[8px] text-gray-500", children: "Carne asada, cilantro, onion" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[9px] font-semibold text-gray-900", children: "$9.99" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-gray-50 rounded p-1.5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-sm", children: "🌯" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-[9px] font-medium text-gray-900 block", children: "Burrito Supreme" }),
                /* @__PURE__ */ jsx("span", { className: "text-[8px] text-gray-500", children: "Rice, beans, cheese, sour cream" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[9px] font-semibold text-gray-900", children: "$12.99" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-gray-50 rounded p-1.5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-sm", children: "🥤" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-[9px] font-medium text-gray-900 block", children: "Horchata" }),
                /* @__PURE__ */ jsx("span", { className: "text-[8px] text-gray-500", children: "Traditional rice drink" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[9px] font-semibold text-gray-900", children: "$3.50" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 left-2 right-2", children: /* @__PURE__ */ jsxs("div", { className: "bg-orange-500 rounded-lg px-3 py-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-white text-[9px] font-medium", children: "View Cart" }),
          /* @__PURE__ */ jsx("span", { className: "text-white text-[9px] font-bold", children: "$26.48" })
        ] }) })
      ] }),
      showCursor && /* @__PURE__ */ jsxs(
        "div",
        {
          className: "absolute pointer-events-none transition-all duration-500 ease-out z-20",
          style: {
            left: cursorPos.left,
            top: cursorPos.top,
            transform: `translate(-50%, -50%) ${isClickingOrder || isPinClicking ? "scale(0.8)" : "scale(1)"}`
          },
          children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: `w-5 h-5 drop-shadow-md transition-transform duration-100 ${isClickingOrder || isPinClicking ? "rotate-12" : ""}`,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M4 4l16 8-7 2-2 7-7-17z",
                    className: isHoveringOrder ? "text-blue-500" : "text-gray-800"
                  }
                )
              }
            ),
            (isClickingOrder || isPinClicking) && /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsx("div", { className: `w-6 h-6 rounded-full animate-ping ${isPinClicking ? "bg-red-500/40" : "bg-blue-500/40"}` }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` })
  ] });
}

const frontmatter = {
  "title": "Works With Restaurant Tools",
  "description": "Ordering platforms, reservations, delivery services, and maps work smoothly together.",
  "icon": "fa6-solid:plug",
  "order": 29,
  "solutions": [],
  "industries": ["restaurants-food-service"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(RestaurantMapOrder, {
    className: "mt-2",
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/RestaurantMapOrder",
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
const url = "src/content/benefits/works-with-restaurant-tools.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/works-with-restaurant-tools.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/works-with-restaurant-tools.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
