import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BgHD-4FP.mjs';
import 'clsx';

const frontmatter = {
  "title": "Our Vision"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode("div", {
    class: "prose prose-lg mx-auto py-8",
    children: [createVNode("p", {
      children: "Our vision is to be a leading company in our industry, recognized for innovation, quality, and customer satisfaction. We aim to create a positive impact on the communities we serve and contribute to a sustainable future."
    }), createVNode("p", {
      children: "We envision a future where our solutions empower businesses to reach new heights, foster collaboration, and drive progress. Our commitment to excellence and continuous improvement guides us in achieving this vision."
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
const url = "src/content/about-us/vision.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/about-us/vision.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/about-us/vision.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
