import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import 'clsx';

const frontmatter = {
  "title": "Long-Term Thinking",
  "description": "Decisions are made with the future in mind — not just launch day.",
  "icon": "fa6-solid:road",
  "tags": ["featured"],
  "order": 6
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
    children: "Decisions are made with the future in mind — not just launch day."
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
const url = "src/content/philosophy/long-term-thinking.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/philosophy/long-term-thinking.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/philosophy/long-term-thinking.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
