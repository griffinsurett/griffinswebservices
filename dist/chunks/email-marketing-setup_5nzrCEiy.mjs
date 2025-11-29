import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BgHD-4FP.mjs';
import 'clsx';

const frontmatter = {
  "title": "Email Marketing Setup",
  "description": "Set up email marketing campaigns and automation",
  "parent": "marketing-growth-suite",
  "order": 15,
  "icon": "fa6-solid:paper-plane"
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
    children: "Configure email marketing platforms, build subscriber lists, and create automated email campaigns to nurture leads."
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
const url = "src/content/solutions/email-marketing-setup.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/email-marketing-setup.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/email-marketing-setup.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
