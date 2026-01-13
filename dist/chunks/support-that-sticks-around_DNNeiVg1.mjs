import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { S as SupportChat } from './SupportChat_Q3AmhTfO.mjs';
import 'clsx';

const frontmatter = {
  "title": "Support That Sticks Around",
  "description": "We don't just build your website and disappear. Your site stays hosted, maintained, and supported without inflated fees or surprise charges. Updates and changes are handled simply and fairly, so your website continues working as your business grows.",
  "icon": "fa6-solid:handshake",
  "order": 6,
  "solutions": ["websites", "business-websites"]
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
const url = "src/content/benefits/support-that-sticks-around.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/support-that-sticks-around.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/support-that-sticks-around.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
