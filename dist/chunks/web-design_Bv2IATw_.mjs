import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CDqnDASo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Web Design",
  "description": "Custom marketing websites designed to look elite, stay consistent, tell your story, and convert reliably. We pair research-backed layouts with modular components so future launches stay on-brand.",
  "heading": {
    "before": "High-clarity",
    "text": "web design",
    "after": "for marketing sites."
  },
  "order": 1,
  "icon": "fa6-solid:wand-magic-sparkles",
  "solutions": ["blog", "standard-websites", "landing-pages", "e-commerce-websites", "restaurant-websites"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "We design modern, conversion-focused websites that pair editorial polish with research-backed UX flows, motion systems, and content choreography so prospects know exactly what you do, why it matters, and how to take the next step."
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
const url = "src/content/capabilities/web-design.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/web-design.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/web-design.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
