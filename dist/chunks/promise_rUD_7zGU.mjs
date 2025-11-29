import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BgHD-4FP.mjs';
import 'clsx';

const frontmatter = {
  "title": "Our Promise"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode("div", {
    class: "prose prose-lg mx-auto py-8",
    children: [createVNode("p", {
      children: "We promise to uphold the highest standards of integrity, quality, and customer service. Our commitment is to deliver exceptional value and build lasting relationships with our clients based on trust and transparency."
    }), createVNode("p", {
      children: "Our team is dedicated to continuous improvement and innovation, ensuring that we meet and exceed the expectations of those we serve. We stand by our promise to be reliable partners in your success."
    })]
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
const url = "src/content/about-us/promise.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/about-us/promise.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/about-us/promise.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
