import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { G as GrowthGraph } from './GrowthGraph_DtsQO69-.mjs';
import 'clsx';

const frontmatter = {
  "title": "Built to Handle Growth",
  "description": "New products, features, and integrations can be added without disrupting the shopping experience customers rely on.",
  "icon": "fa6-solid:arrows-up-down-left-right",
  "order": 16,
  "solutions": ["e-commerce-websites"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(GrowthGraph, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/GrowthGraph",
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
const url = "src/content/benefits/built-to-handle-growth.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/built-to-handle-growth.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/built-to-handle-growth.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
