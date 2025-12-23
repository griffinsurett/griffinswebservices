import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CDqnDASo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Authors & Personal Brands",
  "description": "Websites that amplify your voice, grow your audience, and turn followers into paying customers",
  "hasPage": true,
  "order": 6,
  "icon": "fa6-solid:feather"
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
    children: "Your ideas deserve a platform that matches your ambition. We create sleek, conversion-focused sites for coaches, course creators, speakers, and thought leaders—built to capture emails, sell products, and establish you as the authority in your space."
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
const url = "src/content/industries/authors-personal-brands.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/authors-personal-brands.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/authors-personal-brands.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
