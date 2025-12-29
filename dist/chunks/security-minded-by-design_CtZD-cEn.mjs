import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { a as Icon } from './ui-primitives_Bsx-jmXS.mjs';
import { E as useMotionPreference } from './BaseLayout_DpejhLLs.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

function SecureBrowserBar({
  url = "yoursite.com",
  className = ""
}) {
  const prefersReducedMotion = useMotionPreference();
  const [showBadge, setShowBadge] = useState(false);
  useEffect(() => {
    if (prefersReducedMotion) {
      setShowBadge(true);
      return;
    }
    setShowBadge(false);
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);
  return /* @__PURE__ */ jsx(DecorativeWrapper, { className: `bg-text/10 rounded-lg p-3 ${className}`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5 mr-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-red-500/60" }),
      /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-yellow-500/60" }),
      /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-green-500/60" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex items-center gap-2 bg-bg2 rounded-md px-3 py-1.5", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex items-center gap-1.5 accent-primary-gradient rounded px-2 py-0.5 ${prefersReducedMotion ? "" : "transition-all duration-500 ease-out"} ${showBadge ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-4 scale-75"}`,
          children: [
            /* @__PURE__ */ jsx(Icon, { icon: "lu:lock", size: "sm", className: "text-white" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-white", children: "Secure" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-text", children: url })
    ] })
  ] }) });
}

const frontmatter = {
  "title": "Security-Minded by Design",
  "description": "Security is considered from the start of every build. We follow proven website security principles to reduce risk and help keep your site reliable and trustworthy for visitors.",
  "icon": "fa6-solid:shield-halved",
  "order": 5,
  "tags": ["featured"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(SecureBrowserBar, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/SecureBrowserBar",
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
const url = "src/content/benefits/security-minded-by-design.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/security-minded-by-design.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/security-minded-by-design.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
