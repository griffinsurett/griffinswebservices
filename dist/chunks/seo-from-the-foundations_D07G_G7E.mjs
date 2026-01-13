import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { a as Icon } from './ui-primitives_Bpudp7Rf.mjs';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function GoogleListing({
  title = "Your Website",
  url = "yourwebsite.com",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  date = "Dec 21, 2025",
  favicon = "lu:globe",
  className = ""
}) {
  const prefersReducedMotion = useMotionPreference();
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `relative bg-bg2 rounded-lg p-4 text-left border border-text/10 overflow-hidden select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-full bg-bg3 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { icon: favicon, size: "sm", className: "text-primary" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col leading-tight", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm text-text", children: title }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-text/70", children: url })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "h3",
      {
        className: `text-lg text-primary mb-1 inline-block ${prefersReducedMotion ? "underline" : "animate-[titleHighlight_3s_ease-in-out_infinite]"}`,
        children: [
          title,
          " — Home"
        ]
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-text/60 leading-relaxed", children: [
      /* @__PURE__ */ jsx("span", { className: "text-text/70", children: date }),
      /* @__PURE__ */ jsx("span", { className: "text-text/40 mx-1", children: "—" }),
      description,
      /* @__PURE__ */ jsx("span", { className: "text-primary ml-1", children: "Read more" })
    ] }),
    !prefersReducedMotion && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute pointer-events-none animate-[cursorMove_3s_ease-in-out_infinite]",
        style: {
          top: "50px",
          left: "-20px"
        },
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            className: "drop-shadow-lg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z",
                fill: "white",
                stroke: "black",
                strokeWidth: "1"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes cursorMove {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          40%, 70% {
            transform: translate(80px, 10px);
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          95% {
            transform: translate(80px, 10px);
            opacity: 0;
          }
        }
        @keyframes titleHighlight {
          0%, 35% {
            text-decoration: none;
          }
          40%, 75% {
            text-decoration: underline;
          }
          80%, 100% {
            text-decoration: none;
          }
        }
      ` })
  ] });
}

const frontmatter = {
  "title": "SEO From the Foundations",
  "description": "Search visibility starts with the website itself. Clean structure and search-friendly foundations are part of every build, giving search engines what they need to understand and rank your site as it grows.",
  "icon": "fa6-solid:magnifying-glass-chart",
  "order": 2,
  "solutions": ["websites", "business-websites", "blogs"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(GoogleListing, {
    description: "Your customers are searching for exactly what you offer. Built-in SEO foundations help them find you first — not your competitors...",
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/GoogleListing",
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
const url = "src/content/benefits/seo-from-the-foundations.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/seo-from-the-foundations.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/seo-from-the-foundations.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
