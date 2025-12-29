import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import 'clsx';

const frontmatter = {
  "title": "Our Vision",
  "description": "Beautiful websites that load in a blink. In a fast-moving world, your site should keep pace—lightning performance without sacrificing design, built for the speed of modern business.",
  "icon": "fa6-solid:eye",
  "order": 10
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

const url = "src/content/about-us/our-vision.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/about-us/our-vision.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/about-us/our-vision.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
