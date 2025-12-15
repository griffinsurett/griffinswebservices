import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CDqnDASo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Getting Started with Astro and MDX",
  "description": "Learn how to use MDX components in your Astro blog",
  "publishDate": "2024-01-15T00:00:00.000Z",
  "order": 1,
  "author": "jane-doe",
  "tags": ["astro", "mdx", "web development"],
  "featuredImage": {
    "src": "@/assets/background.svg",
    "alt": "Decorative background pattern for blog post"
  },
  "seo": {
    "metaTitle": "Astro MDX Guide - Complete Tutorial for Beginners",
    "ogTitle": "Master Astro with MDX Components",
    "ogDescription": "Step-by-step guide to integrating MDX in your Astro project",
    "ogImage": "@/assets/background.svg",
    "twitterTitle": "🚀 Astro + MDX = Amazing Developer Experience",
    "twitterDescription": "Learn how MDX supercharges your Astro blog",
    "twitterImage": "@/assets/astro.svg",
    "keywords": ["astro tutorial", "mdx components", "static site generator"],
    "robots": "noindex, follow"
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

const url = "src/content/blog/first-post.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/blog/first-post.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/blog/first-post.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
