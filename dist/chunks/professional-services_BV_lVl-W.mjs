import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CDqnDASo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Professional Services",
  "description": "Polished websites that establish authority and convert high-value clients on autopilot",
  "hasPage": true,
  "order": 3,
  "icon": "fa6-solid:briefcase"
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
    children: "Lawyers, accountants, consultants, and advisors—your website is often the first impression for prospects worth thousands in lifetime value. We build sites that communicate expertise, answer objections, and make booking a consultation feel like the obvious next step."
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
const url = "src/content/industries/professional-services.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/professional-services.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/professional-services.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
