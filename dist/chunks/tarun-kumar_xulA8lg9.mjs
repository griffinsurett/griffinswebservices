import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CDqnDASo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Tarun Kumar",
  "description": "Griffin not only delivered fast but exceeded our expectations! Our new site is not only beautiful but even faster than the old one.",
  "publishDate": "2024-03-25T00:00:00.000Z",
  "order": 5,
  "author": "Tarun Kumar",
  "role": "Owner",
  "company": "Roony's Marketing",
  "rating": 5,
  "featured": false,
  "featuredImage": {
    "src": "../../assets/placeholder.jpg",
    "alt": "Tarun Kumar"
  }
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

const url = "src/content/testimonials/tarun-kumar.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/testimonials/tarun-kumar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/testimonials/tarun-kumar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
