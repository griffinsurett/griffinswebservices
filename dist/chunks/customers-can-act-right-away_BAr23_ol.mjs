import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function RestaurantQuickActions({ className = "" }) {
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
    timers.push(setTimeout(() => setStep(1), 400));
    timers.push(setTimeout(() => setStep(2), 1e3));
    timers.push(setTimeout(() => setStep(3), 1600));
    timers.push(setTimeout(() => setStep(4), 2200));
    timers.push(setTimeout(() => setStep(5), 2600));
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 5500);
    timers.push(resetTimer);
    return () => timers.forEach((t) => clearTimeout(t));
  }, [animationKey, prefersReducedMotion]);
  const showCursor = step >= 1 && step < 5 && !prefersReducedMotion;
  const isHovering = step === 3;
  const isClicking = step === 4;
  const showMenu = step >= 5;
  const getCursorPosition = () => {
    if (step <= 1) return { left: "75%", top: "80%" };
    if (step >= 2) return { left: "28%", top: "48%" };
    return { left: "75%", top: "80%" };
  };
  const cursorPos = getCursorPosition();
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `bg-text/10 rounded-lg overflow-hidden select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 px-3 py-2 flex items-center gap-2 border-b border-text/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500/60" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 bg-bg3 rounded px-2 py-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/70", children: "tacofiesta.com" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 p-4 relative min-h-[180px] overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-base font-bold text-text mb-1", children: "Hungry?" }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] text-text/60", children: "Authentic tacos & fresh margaritas" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 ${isHovering ? "bg-primary/20 scale-105" : "bg-bg3"} ${isClicking ? "scale-95" : ""} ${showMenu ? "ring-2 ring-primary bg-primary/15" : ""}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center ${isHovering || showMenu ? "bg-primary" : "bg-primary/80"}`, children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M4 6h16M4 12h16M4 18h16", strokeLinecap: "round" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text font-medium", children: "Menu" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 p-2 rounded-lg bg-bg3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-green-500/80 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" }) }) }),
          /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text font-medium", children: "Call" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 p-2 rounded-lg bg-bg3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-blue-500/80 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" }) }) }),
          /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text font-medium", children: "Directions" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-bg3 rounded-lg overflow-hidden transition-all duration-500 ease-out ${showMenu ? "max-h-[120px] opacity-100 p-3" : "max-h-0 opacity-0 p-0"}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-text", children: "Our Menu" }),
              /* @__PURE__ */ jsx("span", { className: "text-[8px] text-primary", children: "View Full Menu →" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-bg2 rounded p-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[9px] font-medium text-text block", children: "Street Tacos" }),
                /* @__PURE__ */ jsx("span", { className: "text-[8px] text-text/50", children: "from $3.50" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-bg2 rounded p-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[9px] font-medium text-text block", children: "Burritos" }),
                /* @__PURE__ */ jsx("span", { className: "text-[8px] text-text/50", children: "from $9.99" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-bg2 rounded p-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[9px] font-medium text-text block", children: "Quesadillas" }),
                /* @__PURE__ */ jsx("span", { className: "text-[8px] text-text/50", children: "from $7.99" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-bg2 rounded p-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[9px] font-medium text-text block", children: "Margaritas" }),
                /* @__PURE__ */ jsx("span", { className: "text-[8px] text-text/50", children: "from $8.00" })
              ] })
            ] })
          ]
        }
      ),
      showCursor && /* @__PURE__ */ jsxs(
        "div",
        {
          className: "absolute pointer-events-none transition-all duration-500 ease-out z-10",
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
    ] })
  ] });
}

const frontmatter = {
  "title": "Customers Can Act Right Away",
  "description": "Menus, hours, directions, and calling are easy to find when people are ready to decide.",
  "icon": "fa6-solid:hand-pointer",
  "order": 27,
  "solutions": [],
  "industries": ["restaurants-food-service"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(RestaurantQuickActions, {
    className: "mt-2",
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/RestaurantQuickActions",
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
const url = "src/content/benefits/customers-can-act-right-away.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/customers-can-act-right-away.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/customers-can-act-right-away.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
