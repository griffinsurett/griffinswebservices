import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import 'clsx';

const frontmatter = {
  "title": "Beyond Strength Fitness",
  "description": "A high-energy fitness website designed to attract clients and showcase transformation results.",
  "order": 8,
  "client": "Beyond Strength Fitness",
  "technologies": ["Astro", "Tailwind CSS"],
  "industry": "fitness",
  "featuredImage": {
    "src": "@/assets/projects/beyond-strength.jpg",
    "alt": "Beyond Strength Fitness website homepage featuring training programs and client transformations"
  }
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
    children: "A powerful, mobile-first website built for a fitness professional ready to grow their client base. Clean design, fast load times, and clear calls-to-action make booking sessions effortless."
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
const url = "src/content/projects/beyond-strength-fitness.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/projects/beyond-strength-fitness.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/projects/beyond-strength-fitness.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
