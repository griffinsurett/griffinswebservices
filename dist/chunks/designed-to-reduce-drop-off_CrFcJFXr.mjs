import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function EngagementDemo({ className = "" }) {
  const prefersReducedMotion = useMotionPreference();
  const [step, setStep] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) {
      setStep(6);
      return;
    }
    setStep(0);
    const timings = [
      400,
      // Step 1: Cursor appears, moves toward back
      1200,
      // Step 2: Cursor hesitates
      1800,
      // Step 3: Value message appears
      2600,
      // Step 4: Cursor moves to CTA
      3400,
      // Step 5: Click
      3800
      // Step 6: Success
    ];
    const timers = [];
    timings.forEach((delay, index) => {
      timers.push(setTimeout(() => setStep(index + 1), delay));
    });
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 5500);
    timers.push(resetTimer);
    return () => timers.forEach((t) => clearTimeout(t));
  }, [animationKey, prefersReducedMotion]);
  const getCursorPosition = () => {
    if (step === 0) return { left: "70%", top: "70%" };
    if (step === 1) return { left: "12%", top: "18%" };
    if (step === 2) return { left: "10%", top: "16%" };
    if (step === 3) return { left: "25%", top: "45%" };
    if (step >= 4) return { left: "50%", top: "78%" };
    return { left: "70%", top: "70%" };
  };
  const cursorPos = getCursorPosition();
  const isHoveringCTA = step >= 4 && step < 6;
  const isClicking = step === 5;
  const showSuccess = step === 6;
  const showValueMessage = step >= 3;
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `bg-text/10 rounded-lg p-4 overflow-hidden select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-bg2 rounded-t-lg px-2 py-1.5 flex items-center gap-2 border-b border-text/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `w-5 h-5 rounded flex items-center justify-center transition-colors duration-200 ${step === 1 || step === 2 ? "bg-text/20" : "bg-text/10"}`,
              children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-text/60", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M19 12H5M12 19l-7-7 7-7", strokeLinecap: "round", strokeLinejoin: "round" }) })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded bg-text/10 flex items-center justify-center opacity-40", children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-text/60", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 bg-bg3 rounded px-2 py-0.5 overflow-hidden", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/70 whitespace-nowrap", children: "yoursite.com/offer" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/60" }),
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500/60" }),
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500/60" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-bg2 rounded-b-lg p-3 h-[140px] overflow-hidden relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1 mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "h-3 bg-text/25 rounded w-3/4" }),
          /* @__PURE__ */ jsx("div", { className: "h-2 bg-text/15 rounded w-1/2" })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `bg-primary/15 border border-primary/30 rounded-lg p-2 mb-3 transition-all duration-300 ${showValueMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`,
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-4 h-4 rounded-full bg-primary/40 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "w-2.5 h-2.5 text-primary", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ jsx("path", { d: "M5 12l4 4L19 6", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text font-medium", children: "Free consultation included" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `px-4 py-1.5 rounded-full text-[10px] font-semibold transition-all duration-200 ${showSuccess ? "bg-green-500/80 text-white scale-105" : isHoveringCTA ? "bg-primary text-white scale-105 shadow-lg shadow-primary/30" : "bg-primary/80 text-white"} ${isClicking ? "scale-95" : ""}`,
            children: showSuccess ? "Thanks!" : "Get Started"
          }
        ) }),
        step > 0 && !prefersReducedMotion && /* @__PURE__ */ jsxs(
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
                      className: step >= 4 ? "text-primary" : "text-text/80"
                    }
                  )
                }
              ),
              isClicking && /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-primary/40 animate-ping" }) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: `w-1.5 h-1.5 rounded-full transition-colors duration-300 ${showSuccess ? "bg-green-500" : step >= 4 ? "bg-primary" : "bg-text/30"}` }),
      /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/60", children: showSuccess ? "Engaged!" : step >= 4 ? "Taking action..." : step >= 3 ? "Value captured attention" : "Browsing..." })
    ] })
  ] });
}

const frontmatter = {
  "title": "Designed to Reduce Drop-Off",
  "description": "Focused structure and messaging help visitors take action instead of leaving.",
  "icon": "fa6-solid:arrow-trend-up",
  "order": 24,
  "solutions": ["landing-pages"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(EngagementDemo, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/EngagementDemo",
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
const url = "src/content/benefits/designed-to-reduce-drop-off.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/designed-to-reduce-drop-off.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/designed-to-reduce-drop-off.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
