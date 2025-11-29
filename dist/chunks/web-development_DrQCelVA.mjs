import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BgHD-4FP.mjs';
import 'clsx';

const frontmatter = {
  "title": "Web Development",
  "description": "Full-spectrum web development services",
  "order": 2,
  "parent": "website-services",
  "icon": "fa6-solid:code",
  "features": ["Front-End Development", "Back-End Development", "Full-Stack Web Development"]
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
    children: "Comprehensive web development expertise spanning front-end, back-end, and full-stack development using modern technologies and best practices."
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
const url = "src/content/capabilities/web-development.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/web-development.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/web-development.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
