import { f as createVNode, F as Fragment$1, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

const existingPhotos = [
  { title: "Golden Hour Portrait", color: "from-amber-600 to-orange-800" },
  { title: "Urban Architecture", color: "from-slate-500 to-zinc-700" },
  { title: "Ocean Sunset", color: "from-sky-400 to-indigo-600" }
];
const newPhoto = { title: "Mountain Landscape", color: "from-emerald-500 to-teal-700" };
function PortfolioAddDemo({ className = "" }) {
  const prefersReducedMotion = useMotionPreference();
  const [step, setStep] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) {
      setStep(4);
      return;
    }
    setStep(0);
    const step1 = setTimeout(() => setStep(1), 800);
    const step2 = setTimeout(() => setStep(2), 1600);
    const step3 = setTimeout(() => setStep(3), 2800);
    const step4 = setTimeout(() => setStep(4), 3400);
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 5500);
    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(step4);
      clearTimeout(resetTimer);
    };
  }, [animationKey, prefersReducedMotion]);
  const showSlot = step >= 1;
  const isLoading = step === 2;
  const showPhoto = step >= 3;
  const showSuccess = step >= 4;
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `bg-text/10 rounded-lg overflow-hidden select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 px-3 py-2 flex items-center gap-2 border-b border-text/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500/60" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 bg-bg3 rounded px-2 py-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/70", children: "emilycarter.com/portfolio" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 p-3 relative h-[200px] overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-semibold text-white", children: "Photography Portfolio" }),
          /* @__PURE__ */ jsx("p", { className: "text-[8px] text-white/50", children: "Recent work" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-300 ${step >= 1 && step < 4 ? "bg-green-500/20" : "bg-white/10"}`, children: [
          step >= 1 && step < 4 && !prefersReducedMotion && /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" }),
          /* @__PURE__ */ jsx("span", { className: "text-[8px] text-white/70", children: step >= 1 && step < 4 ? "Adding photo..." : `${showSuccess ? 4 : 3} photos` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `transition-all duration-500 ease-out overflow-hidden ${showSlot ? "h-[52px] opacity-100 mb-2" : "h-0 opacity-0 mb-0"}`,
            children: /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: `w-[60%] h-[52px] rounded-lg relative overflow-hidden transition-all duration-500 ${showPhoto ? `bg-gradient-to-br ${newPhoto.color}` : isLoading ? "bg-white/5" : "bg-transparent border-2 border-dashed border-white/30"} ${showSuccess ? "ring-2 ring-green-400/60" : ""}`,
                children: [
                  showSlot && !isLoading && !showPhoto && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white/40", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M12 5v14M5 12h14", strokeLinecap: "round" }) }),
                    /* @__PURE__ */ jsx("span", { className: "text-[9px] text-white/40", children: "New photo" })
                  ] }) }),
                  isLoading && !prefersReducedMotion && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-white/30 border-t-white/80 rounded-full animate-spin" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[9px] text-white/60", children: "Uploading..." })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-white/10", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-green-500/70 animate-progress" }) })
                  ] }),
                  showPhoto && /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
                    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-1.5 left-2 right-2 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-[9px] text-white font-medium", children: newPhoto.title }),
                      showSuccess && /* @__PURE__ */ jsx("span", { className: "text-[7px] px-1.5 py-0.5 bg-green-500/40 text-green-200 rounded-full font-medium", children: "✓ Added" })
                    ] })
                  ] })
                ]
              }
            ) })
          }
        ),
        existingPhotos.map((photo, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: `flex ${index % 2 === 0 ? "justify-end" : "justify-start"} transition-all duration-500`,
            style: {
              opacity: showSlot ? 0.7 : 1
            },
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: `w-[60%] h-[44px] rounded-lg bg-gradient-to-br ${photo.color} relative overflow-hidden`,
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute bottom-1.5 left-2", children: /* @__PURE__ */ jsx("span", { className: "text-[8px] text-white/90 font-medium", children: photo.title }) })
                ]
              }
            )
          },
          index
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2/50 px-3 py-1.5 flex items-center justify-between border-t border-text/10", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text/50", children: showSuccess ? "Photo published!" : showPhoto ? "Processing..." : isLoading ? "Uploading mountain-landscape.jpg..." : showSlot ? "Preparing upload..." : "Portfolio ready" }),
      /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text/40", children: showSuccess ? "4 photos" : "3 photos" })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 1.2s ease-out forwards;
        }
      ` })
  ] });
}

const frontmatter = {
  "title": "Easy to Keep Up to Date",
  "description": "New work can be added without redesigning the site every year.",
  "icon": "fa6-solid:rotate",
  "order": 36,
  "solutions": ["portfolios"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(PortfolioAddDemo, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/PortfolioAddDemo",
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
const url = "src/content/benefits/easy-to-keep-up-to-date.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/easy-to-keep-up-to-date.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment$1, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/easy-to-keep-up-to-date.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
