import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CDqnDASo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Accessibility & Compliance",
  "description": "Design and ship experiences that meet ADA, WCAG, legal standards, and multilingual accessibility. We audit, remediate, and train teams so inclusivity stays maintained long-term.",
  "heading": {
    "before": "Inclusive",
    "text": "accessibility work",
    "after": "that meets standards."
  },
  "order": 6,
  "icon": "fa6-solid:universal-access",
  "solutions": ["blog", "e-commerce-websites", "restaurant-websites"]
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
    children: "We audit, remediate, and monitor your site so it stays inclusive and compliant—covering semantic structure, keyboard navigation, color contrast, assistive tech support, required policies, and multilingual/language-access features."
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
const url = "src/content/capabilities/accessibility-compliance.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/accessibility-compliance.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/accessibility-compliance.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
