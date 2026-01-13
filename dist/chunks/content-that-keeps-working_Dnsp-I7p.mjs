import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function BlogScrollDemo({ className = "" }) {
  const prefersReducedMotion = useMotionPreference();
  const [scrollY, setScrollY] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const maxScroll = 320;
  useEffect(() => {
    if (prefersReducedMotion) {
      setScrollY(maxScroll / 2);
      return;
    }
    setScrollY(0);
    let frame;
    let startTime = null;
    const duration = 6e3;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      setScrollY(easeProgress * maxScroll);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };
    frame = requestAnimationFrame(animate);
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 7500);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resetTimer);
    };
  }, [animationKey, prefersReducedMotion]);
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `bg-text/10 rounded-lg overflow-hidden select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 px-3 py-2 flex items-center gap-2 border-b border-text/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500/60" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 bg-bg3 rounded px-2 py-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/70", children: "yoursite.com/blog/why-content-keeps-working" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 relative h-[160px] overflow-hidden", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "absolute left-0 right-0 p-3 transition-transform duration-100",
          style: { transform: `translateY(-${scrollY}px)` },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsx("span", { className: "text-[8px] text-text/50", children: "Published 8 months ago" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-[11px] font-bold text-text mb-1.5 leading-tight", children: "Why Your Blog Posts Keep Working Long After You Write Them" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-[8px] text-text/70 leading-relaxed", children: [
              /* @__PURE__ */ jsx("p", { children: "Every piece of content you publish becomes an asset that continues to attract readers months and years down the road. Unlike social media posts that disappear within hours, a well-crafted blog post keeps showing up in search results, answering questions, and bringing new visitors to your site." }),
              /* @__PURE__ */ jsx("p", { children: "The beauty of this approach is that your library of content grows over time. Each new article adds to your collection, and older posts continue pulling their weight. A post you wrote six months ago might still be your top traffic driver today." }),
              /* @__PURE__ */ jsx("p", { children: "This compounds. Businesses with consistent blogs often find that their older content generates more traffic than their newer posts. The articles have had time to be discovered, shared, and linked to by others. Search engines reward content that has been around longer and has proven its value to readers." }),
              /* @__PURE__ */ jsx("p", { children: "When your site is built properly, these posts remain stable and functional as your site evolves. Links stay intact, formatting stays clean, and readers can always find what they came for. Nothing breaks when you update your design or add new features." }),
              /* @__PURE__ */ jsx("p", { children: "Think of each blog post as a small employee that works for you around the clock. It never calls in sick, never asks for a raise, and never stops bringing in new visitors. Over time, you build a team of these tireless workers, each one contributing to your bottom line." }),
              /* @__PURE__ */ jsx("p", { children: "The key is consistency. Businesses that publish regularly see their traffic grow month over month, even if individual posts perform modestly. The cumulative effect is what matters. Ten posts that each bring in twenty visitors per month means two hundred visitors, and that number only grows as you add more." }),
              /* @__PURE__ */ jsx("p", { children: "Consider this: a single blog post that ranks well can bring in visitors for years. We have seen posts written three years ago still driving hundreds of visits per month. That is the power of evergreen content built on a stable foundation." }),
              /* @__PURE__ */ jsx("p", { children: "Your competitors who only post on social media are starting from zero every single day. Meanwhile, your blog is quietly working in the background, building authority and attracting readers while you sleep." }),
              /* @__PURE__ */ jsx("p", { children: "The math is simple. If you publish one post per week for a year, you have fifty-two assets working for you. After two years, you have over one hundred. Each one compounds on the others, creating a network of content that reinforces itself." }),
              /* @__PURE__ */ jsx("p", { children: "This is the kind of sustainable growth that pays dividends over time. Your content keeps working so you can focus on what matters most: running your business and serving your customers." }),
              /* @__PURE__ */ jsx("p", { children: "Ready to start building your content library? The best time to start was yesterday. The second best time is today. Every post you publish is an investment in your future traffic." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-bg2 to-transparent" })
    ] })
  ] });
}

const frontmatter = {
  "title": "Content That Keeps Working",
  "description": "Blog posts continue attracting readers instead of becoming outdated or breaking as the site grows.",
  "icon": "fa6-solid:clock-rotate-left",
  "order": 26,
  "solutions": ["blogss"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(BlogScrollDemo, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/BlogScrollDemo",
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
const url = "src/content/benefits/content-that-keeps-working.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/content-that-keeps-working.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/content-that-keeps-working.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
