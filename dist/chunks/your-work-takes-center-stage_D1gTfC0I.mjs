import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { W as WebflowPortfolio } from './WebflowPortfolio_CuL0t2f-.mjs';
import 'clsx';

const frontmatter = {
  "title": "Your Work Takes Center Stage",
  "description": "Clean layouts keep attention on projects and results.",
  "icon": "fa6-solid:images",
  "order": 35,
  "solutions": []
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(WebflowPortfolio, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/WebflowPortfolio",
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
const url = "src/content/benefits/your-work-takes-center-stage.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/your-work-takes-center-stage.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/your-work-takes-center-stage.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
