import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import 'clsx';

const frontmatter = {
  "title": "Does this work with payment and shipping tools?",
  "description": "Yes. Common payment providers, shipping services, and inventory tools can be integrated.",
  "order": 62,
  "category": "E-Commerce",
  "solutions": ["e-commerce-websites"],
  "industries": ["e-commerce"]
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

const url = "src/content/faq/does-this-work-with-payment-and-shipping-tools.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/faq/does-this-work-with-payment-and-shipping-tools.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/faq/does-this-work-with-payment-and-shipping-tools.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
