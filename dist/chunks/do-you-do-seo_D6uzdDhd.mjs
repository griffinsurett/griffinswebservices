import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import 'clsx';

const frontmatter = {
  "title": "Do you guarantee rankings on Google?",
  "description": "No — no agency can guarantee rankings. What we do is build your site so it's structured and discoverable, creating the best possible environment for visibility. Long-term growth requires ongoing content and promotion strategies.",
  "order": 11,
  "category": "SEO",
  "tags": ["featured"],
  "solutions": ["blogs", "business-websites", "e-commerce-websites"],
  "capabilities": ["seo"],
  "industries": ["contractors", "restaurants-food-service", "e-commerce", "professional-services", "fitness", "authors"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
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

const url = "src/content/faq/do-you-do-seo.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/faq/do-you-do-seo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/faq/do-you-do-seo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
