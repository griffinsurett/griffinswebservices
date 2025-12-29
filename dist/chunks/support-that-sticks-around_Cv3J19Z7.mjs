import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { a as Icon } from './ui-primitives_Bsx-jmXS.mjs';
import { E as useMotionPreference } from './BaseLayout_DpejhLLs.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function SupportChat({ className = "" }) {
  const prefersReducedMotion = useMotionPreference();
  const [step, setStep] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) {
      setStep(5);
      return;
    }
    setStep(0);
    const timings = [
      500,
      // Step 1: User message appears
      1500,
      // Step 2: GWS typing indicator
      2500,
      // Step 3: GWS response
      3500,
      // Step 4: Website frame appears
      4200
      // Step 5: Image appears on website
    ];
    const timers = [];
    timings.forEach((delay, index) => {
      timers.push(setTimeout(() => setStep(index + 1), delay));
    });
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 7e3);
    timers.push(resetTimer);
    return () => timers.forEach((t) => clearTimeout(t));
  }, [animationKey, prefersReducedMotion]);
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `flex gap-4 ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-text/10 rounded-lg overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-bg2 px-3 py-2 flex items-center gap-2 border-b border-text/10", children: [
        /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "/2dfavicons/favicon-32x32.png", alt: "GWS", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-text", children: "Griffin's Web Services" }),
        /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-green-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/70", children: "Online" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-3 space-y-2 h-[120px] bg-bg2/50", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `flex justify-end ${prefersReducedMotion ? "" : "transition-all duration-300"} ${step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`,
            children: /* @__PURE__ */ jsx("div", { className: "bg-primary/20 rounded-xl rounded-br-sm px-3 py-1.5 max-w-[85%]", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-text", children: "Can you add an image to the top of my site?" }) })
          }
        ),
        step === 2 && /* @__PURE__ */ jsxs("div", { className: "flex gap-1 px-3 py-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-text/40 animate-bounce", style: { animationDelay: "0ms" } }),
          /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-text/40 animate-bounce", style: { animationDelay: "150ms" } }),
          /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-text/40 animate-bounce", style: { animationDelay: "300ms" } })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `flex justify-start ${prefersReducedMotion ? "" : "transition-all duration-300"} ${step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`,
            children: /* @__PURE__ */ jsx("div", { className: "bg-bg2 rounded-xl rounded-bl-sm px-3 py-1.5 max-w-[85%] border border-text/10", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-text", children: "Sure! I'll have that done for you shortly." }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `w-[100px] ${prefersReducedMotion ? "" : "transition-all duration-500 ease-out"} ${step >= 4 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "bg-bg2 rounded-lg overflow-hidden border border-text/10", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-2 py-1 flex items-center gap-1 border-b border-text/10", children: [
            /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-red-500/60" }),
            /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-yellow-500/60" }),
            /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-green-500/60" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-2 space-y-1.5", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `h-10 rounded bg-primary/30 flex items-center justify-center ${prefersReducedMotion ? "" : "transition-all duration-500"} ${step >= 5 ? "opacity-100 scale-100" : "opacity-0 scale-90"}`,
                children: /* @__PURE__ */ jsx(Icon, { icon: "lu:image", size: "sm", className: "text-primary/60" })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "h-1.5 bg-text/20 rounded w-full" }),
            /* @__PURE__ */ jsx("div", { className: "h-1.5 bg-text/15 rounded w-3/4" }),
            /* @__PURE__ */ jsx("div", { className: "h-1.5 bg-text/10 rounded w-1/2" })
          ] })
        ] })
      }
    )
  ] });
}

const frontmatter = {
  "title": "Support That Sticks Around",
  "description": "We don't just build your website and disappear. Your site stays hosted, maintained, and supported without inflated fees or surprise charges. Updates and changes are handled simply and fairly, so your website continues working as your business grows.",
  "icon": "fa6-solid:handshake",
  "order": 6,
  "tags": ["featured"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(SupportChat, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/SupportChat",
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
const url = "src/content/benefits/support-that-sticks-around.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/support-that-sticks-around.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/support-that-sticks-around.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
