import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { W as WebflowPortfolio } from './WebflowPortfolio_CuL0t2f-.mjs';
import 'clsx';

const frontmatter = {
  "title": "Stunning Without the Slowdown",
  "description": "Beautiful animations, smooth transitions, and polished visuals that load instantly. Your site feels premium and performs like it — no compromises between looking great and loading fast.",
  "icon": "fa6-solid:wand-magic-sparkles",
  "order": 2,
  "solutions": ["websites", "business-websites", "landing-pages", "portfolios"]
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
const url = "src/content/benefits/stunning-without-the-slowdown.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/stunning-without-the-slowdown.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/stunning-without-the-slowdown.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
