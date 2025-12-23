import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CDqnDASo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Darius Clark",
  "description": "From branding to the e-commerce platform, everything was done with precision and creativity. Griffin has been able to 5x business and I’m beyond satisfied with the results.",
  "publishDate": "2024-03-05T00:00:00.000Z",
  "order": 3,
  "author": "Darius Clark",
  "role": "CEO",
  "company": "i-75 CPA Review",
  "rating": 5,
  "featured": false,
  "featuredImage": {
    "src": "../../assets/placeholder.jpg",
    "alt": "Darius Clark"
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

const url = "src/content/testimonials/darius-clark.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/testimonials/darius-clark.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/testimonials/darius-clark.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
