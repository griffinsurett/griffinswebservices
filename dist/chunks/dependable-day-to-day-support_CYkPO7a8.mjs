import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { S as SupportChat } from './SupportChat_Q3AmhTfO.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dependable Day-to-Day Support",
  "description": "Your website stays online, accurate, and supported while your business is open, reducing downtime and last-minute issues.",
  "icon": "fa6-solid:handshake",
  "order": 14,
  "solutions": []
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(SupportChat, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/SupportChat",
    "client:component-export": "default",
    "client:component-hydration": true
  });
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
const url = "src/content/benefits/dependable-day-to-day-support.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/dependable-day-to-day-support.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/dependable-day-to-day-support.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
