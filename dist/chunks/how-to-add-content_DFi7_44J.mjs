import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BgHD-4FP.mjs';
import 'clsx';

const frontmatter = {
  "title": "How do I add new content?",
  "description": "Learn how to add new content to your Greastro site using content collections and MDX files.",
  "publishDate": "2024-01-02T00:00:00.000Z",
  "order": 2,
  "category": "Getting Started"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Adding content to Greastro is so simple:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Choose a collection"
        }), ": Navigate to ", createVNode(_components.code, {
          children: "src/content/[collection-name]"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Create an MDX file"
        }), ": Add a new ", createVNode(_components.code, {
          children: ".mdx"
        }), " file with frontmatter"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Add your content"
        }), ": Write your content in Markdown below the frontmatter"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "View your content"
        }), ": The page is automatically generated"]
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

const url = "src/content/faq/how-to-add-content.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/faq/how-to-add-content.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/faq/how-to-add-content.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
