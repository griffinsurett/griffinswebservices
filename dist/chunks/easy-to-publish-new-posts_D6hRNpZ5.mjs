import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

const existingPosts = [
  { title: "Getting Started Guide", date: "Dec 15", reads: "234" },
  { title: "Tips for Better Results", date: "Dec 8", reads: "189" }
];
const newPost = { title: "Your Latest Post", date: "Today", reads: "New" };
function BlogPublishDemo({ className = "" }) {
  const prefersReducedMotion = useMotionPreference();
  const [step, setStep] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) {
      setStep(7);
      return;
    }
    setStep(0);
    const timings = [
      600,
      // Step 1: New post starts expanding
      1200,
      // Step 2: New post fully visible
      1800,
      // Step 3: Cursor appears
      2400,
      // Step 4: Cursor moves to post
      3e3,
      // Step 5: Hover
      3600,
      // Step 6: Click
      4e3
      // Step 7: Success
    ];
    const timers = [];
    timings.forEach((delay, index) => {
      timers.push(setTimeout(() => setStep(index + 1), delay));
    });
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 6e3);
    timers.push(resetTimer);
    return () => timers.forEach((t) => clearTimeout(t));
  }, [animationKey, prefersReducedMotion]);
  const isExpanding = step === 1;
  const showNewPost = step >= 2;
  const showCursor = step >= 3 && step < 7;
  const isHovering = step >= 5 && step < 7;
  const isClicking = step === 6;
  const showSuccess = step === 7;
  const getCursorPosition = () => {
    if (step <= 3) return { left: "80%", top: "75%" };
    if (step >= 4) return { left: "50%", top: "32%" };
    return { left: "80%", top: "75%" };
  };
  const cursorPos = getCursorPosition();
  const getNewPostStyle = () => {
    if (prefersReducedMotion || step >= 2) {
      return { height: "auto", opacity: 1, marginBottom: "6px" };
    }
    if (step === 1) {
      return { height: "48px", opacity: 0.7, marginBottom: "6px" };
    }
    return { height: "0px", opacity: 0, marginBottom: "0px", overflow: "hidden" };
  };
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `bg-text/10 rounded-lg overflow-hidden select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 px-3 py-2 flex items-center gap-2 border-b border-text/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500/60" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 bg-bg3 rounded px-2 py-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/70", children: "yoursite.com/blog" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 p-3 relative h-[150px] overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xs font-semibold text-text", children: "Blog Posts" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("div", { className: `w-1.5 h-1.5 rounded-full ${step >= 1 ? "bg-green-500 animate-pulse" : "bg-text/30"}` }),
          /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text/60", children: step >= 1 ? "Publishing..." : "Ready" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `transition-all duration-500 ease-out overflow-hidden ${isHovering && !showSuccess ? "ring-2 ring-primary/50 rounded-lg" : ""} ${isClicking ? "scale-[0.98]" : ""} ${showSuccess ? "ring-2 ring-primary rounded-lg" : ""}`,
            style: getNewPostStyle(),
            children: /* @__PURE__ */ jsxs("div", { className: `bg-bg3/80 rounded-lg p-2 flex items-center gap-2 transition-all duration-300 ${isHovering ? "bg-primary/15" : ""} ${showSuccess ? "bg-primary/20" : ""}`, children: [
              /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded bg-primary/30 flex items-center justify-center shrink-0 ${(isExpanding || showNewPost && step < 4) && !prefersReducedMotion ? "animate-pulse" : ""}`, children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-primary", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M12 5v14M5 12h14", strokeLinecap: "round" }) }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium text-text truncate", children: newPost.title }),
                  /* @__PURE__ */ jsx("span", { className: "text-[8px] px-1 py-0.5 bg-green-500/20 text-green-400 rounded-full font-medium shrink-0", children: newPost.reads })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text/50", children: newPost.date })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "space-y-1.5 transition-all duration-500", children: existingPosts.map((post, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `bg-bg3/50 rounded-lg p-2 flex items-center gap-2 transition-all duration-500 ${step >= 1 ? "opacity-60" : "opacity-100"}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded bg-text/10 shrink-0" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium text-text/70 truncate", children: post.title }),
                  /* @__PURE__ */ jsx("span", { className: "text-[8px] px-1 py-0.5 bg-text/10 text-text/50 rounded-full shrink-0", children: post.reads })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text/40", children: post.date })
              ] })
            ]
          },
          index
        )) })
      ] }),
      showCursor && !prefersReducedMotion && /* @__PURE__ */ jsxs(
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
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2/50 px-3 py-1.5 flex items-center justify-between border-t border-text/10", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text/50", children: showSuccess ? "Opening post..." : step >= 2 ? "New post published!" : step >= 1 ? "Publishing new post..." : "2 posts" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxs("span", { className: "text-[9px] text-text/40", children: [
        step >= 1 ? "3" : "2",
        " posts"
      ] }) })
    ] })
  ] });
}

const frontmatter = {
  "title": "Easy to Publish New Posts",
  "description": "Adding content stays simple without creating clutter or technical issues over time.",
  "icon": "fa6-solid:pen-to-square",
  "order": 25,
  "solutions": ["blogss"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(BlogPublishDemo, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/BlogPublishDemo",
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
const url = "src/content/benefits/easy-to-publish-new-posts.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/easy-to-publish-new-posts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/easy-to-publish-new-posts.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
