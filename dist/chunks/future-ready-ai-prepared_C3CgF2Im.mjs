import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { A as AIChatSimulation } from './AIChatSimulation_C6Ngqngl.mjs';
import 'clsx';

const frontmatter = {
  "title": "Future-Ready & AI-Prepared",
  "description": "Your website is ready to support modern tools, automation, and AI-driven experiences when they make sense for your business — without disrupting what already works.",
  "icon": "fa6-solid:robot",
  "order": 3,
  "solutions": ["websites", "business-websites", "landing-pages", "e-commerce-websites", "web-applications", "blogs", "portfolios"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(AIChatSimulation, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/AIChatSimulation",
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
const url = "src/content/benefits/future-ready-ai-prepared.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/future-ready-ai-prepared.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/future-ready-ai-prepared.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
