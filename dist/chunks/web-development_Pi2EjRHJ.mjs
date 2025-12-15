import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CDqnDASo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Web Development",
  "description": "Full-spectrum web development that keeps your stack performant, secure, and easy to evolve. We plan architecture, write reliable code, and own DevOps so releases stay predictable.",
  "heading": {
    "before": "Senior",
    "text": "web development",
    "after": "across the stack."
  },
  "order": 2,
  "icon": "fa6-solid:code",
  "features": ["Front-End Development", "Back-End Development", "Full-Stack Web Development"],
  "solutions": ["blog", "standard-websites", "e-commerce-websites", "restaurant-websites", "custom-full-stack-applications"]
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
    children: "We architect, build, and ship maintainable codebases spanning front-end, back-end, and full-stack needs—covering API design, integrations, hosting, testing, and DevOps so launches are smooth and future iterations stay predictable."
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
const url = "src/content/capabilities/web-development.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/web-development.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/web-development.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
