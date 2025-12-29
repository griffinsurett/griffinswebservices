import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { E as useMotionPreference } from './BaseLayout_DpejhLLs.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function ResponsiveShowcase({
  className = ""
}) {
  const prefersReducedMotion = useMotionPreference();
  const [widthPercent, setWidthPercent] = useState(100);
  const [direction, setDirection] = useState("shrinking");
  useEffect(() => {
    if (prefersReducedMotion) {
      setWidthPercent(40);
      return;
    }
    const interval = setInterval(() => {
      setWidthPercent((prev) => {
        if (direction === "shrinking") {
          if (prev <= 40) {
            setDirection("growing");
            return prev + 1;
          }
          return prev - 1;
        } else {
          if (prev >= 100) {
            setDirection("shrinking");
            return prev - 1;
          }
          return prev + 1;
        }
      });
    }, 40);
    return () => clearInterval(interval);
  }, [direction, prefersReducedMotion]);
  const isMobile = widthPercent < 50;
  const isTablet = widthPercent >= 50 && widthPercent < 75;
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `bg-text/10 rounded-lg p-4 overflow-hidden ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3 px-1", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs text-text/40", children: isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop" }),
      /* @__PURE__ */ jsxs("span", { className: "text-xs text-primary font-mono", children: [
        widthPercent,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "transition-none relative",
        style: { width: `${widthPercent}%`, minWidth: "120px" },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -left-1 top-0 bottom-0 w-1 flex items-center justify-center opacity-50", children: /* @__PURE__ */ jsx("div", { className: "w-0.5 h-8 bg-primary/50 rounded-full" }) }),
          /* @__PURE__ */ jsxs("div", { className: "bg-bg2 rounded-t-lg px-2 py-1.5 flex items-center gap-2 border-b border-text/10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/60" }),
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500/60" }),
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500/60" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex-1 bg-bg3 rounded px-2 py-0.5 overflow-hidden", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/70 whitespace-nowrap", children: "yoursite.com" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-bg2 rounded-b-lg p-3 h-[120px] overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-3 bg-primary/30 rounded shrink-0" }),
              !isMobile ? /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5 overflow-hidden", children: [
                /* @__PURE__ */ jsx("div", { className: "w-8 h-2 bg-text/20 rounded shrink-0" }),
                /* @__PURE__ */ jsx("div", { className: "w-8 h-2 bg-text/20 rounded shrink-0" }),
                !isTablet && /* @__PURE__ */ jsx("div", { className: "w-8 h-2 bg-text/20 rounded shrink-0" })
              ] }) : /* @__PURE__ */ jsxs("div", { className: "w-4 h-3 flex flex-col gap-0.5 justify-center shrink-0", children: [
                /* @__PURE__ */ jsx("div", { className: "w-full h-0.5 bg-text/40 rounded" }),
                /* @__PURE__ */ jsx("div", { className: "w-full h-0.5 bg-text/40 rounded" }),
                /* @__PURE__ */ jsx("div", { className: "w-full h-0.5 bg-text/40 rounded" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "h-[26px]", children: [
              /* @__PURE__ */ jsx("div", { className: "h-4 bg-text/25 rounded mb-1.5 w-full" }),
              /* @__PURE__ */ jsx("div", { className: "h-2 bg-text/15 rounded w-3/4" })
            ] }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: `grid gap-1.5 h-[50px] ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3"}`,
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-8 bg-primary/20 rounded" }),
                  /* @__PURE__ */ jsx("div", { className: `h-8 bg-primary/20 rounded ${isMobile ? "hidden" : ""}` }),
                  /* @__PURE__ */ jsx("div", { className: `h-8 bg-primary/20 rounded ${isMobile || isTablet ? "hidden" : ""}` })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute -right-1 top-0 bottom-0 w-1 flex items-center justify-center opacity-50", children: /* @__PURE__ */ jsx("div", { className: "w-0.5 h-8 bg-primary/50 rounded-full" }) })
        ]
      }
    ) })
  ] });
}

const frontmatter = {
  "title": "Designed to Stand Out on Every Device",
  "description": "Your website looks great and feels easy to use on phones, tablets, laptops, and desktops. No pinching, zooming, or awkward layouts — just a smooth experience that makes it easy for visitors to stay engaged and take action.",
  "icon": "fa6-solid:mobile-screen-button",
  "order": 4,
  "tags": ["featured"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(ResponsiveShowcase, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/ResponsiveShowcase",
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
const url = "src/content/benefits/designed-to-stand-out-on-every-device.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/designed-to-stand-out-on-every-device.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/designed-to-stand-out-on-every-device.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
