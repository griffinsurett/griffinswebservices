import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import 'clsx';

const frontmatter = {
  "title": "Do I have to pay for hosting?",
  "description": "Yes — hosting is required, and it's part of what keeps your website working properly over time.",
  "order": 6,
  "category": "Support",
  "solutions": ["business-websites", "landing-pages", "e-commerce-websites", "business-websites", "web-applications", "blogss", "portfolios"],
  "capabilities": ["managed-website-hosting", "website-maintenance-support", "uptime-reliability-monitoring"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Hosting isn’t just “server space.” It’s what allows your website to stay fast, secure, reliable, and available to visitors. Our hosting includes the infrastructure, monitoring, updates, and ongoing technical oversight needed to keep your site running smoothly as your business grows."
    }), "\n", createVNode(_components.p, {
      children: "We don’t treat websites as one-time builds that get handed off and forgotten. Ongoing hosting and maintenance help ensure performance stays consistent, security risks are reduced, and issues are handled before they become problems."
    }), "\n", createVNode(_components.p, {
      children: "Even though your site is built to minimize upkeep, it still needs a stable environment and professional oversight to remain dependable long-term. Hosting covers that foundation — so your website continues doing its job without surprises."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/faq/do-i-have-to-pay-for-hosting.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/faq/do-i-have-to-pay-for-hosting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/faq/do-i-have-to-pay-for-hosting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
