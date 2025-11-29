import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BgHD-4FP.mjs';
import { G as $$Header } from './BaseLayout_BNcvlav2.mjs';
import 'clsx';

const frontmatter = {
  "title": "What is Greastro?",
  "description": "Greastro is a type-safe static site generator built with Astro and content collections, offering dynamic flexibility with static performance.",
  "publishDate": "2024-01-01T00:00:00.000Z",
  "order": 1,
  "category": "General"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Header, {}), "\n", createVNode(_components.p, {
      children: "Greastro is a modern static site generator that combines the power of Astro with type-safe content collections. It provides:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type Safety"
        }), ": Full TypeScript support throughout"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Content Collections"
        }), ": Organized, validated content management"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Dynamic Variants"
        }), ": Flexible section variants for different layouts"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Performance"
        }), ": Static site speed with dynamic capabilities"]
      }), "\n"]
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
  }) : _createMdxContent(props);
}

const url = "src/content/faq/what-is-greastro.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/faq/what-is-greastro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/faq/what-is-greastro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
