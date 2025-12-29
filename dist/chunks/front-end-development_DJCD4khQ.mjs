import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import 'clsx';

const frontmatter = {
  "title": "Front-End Development",
  "description": "Client-side development with modern frameworks—responsive interfaces, smooth animations, and optimized performance.",
  "icon": "fa6-solid:display",
  "parent": "web-development",
  "hasPage": false,
  "order": 1
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

const url = "src/content/capabilities/front-end-development.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/front-end-development.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/front-end-development.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
