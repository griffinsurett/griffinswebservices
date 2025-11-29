import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BgHD-4FP.mjs';
import 'clsx';

const frontmatter = {
  "title": "Restaurant Websites",
  "description": "Specialized websites for restaurants, cafes, and food service businesses",
  "parent": "website-solutions",
  "order": 4,
  "icon": "fa6-solid:utensils",
  "price": "Starting from $2,000",
  "features": ["Menu display system", "Online ordering integration", "Reservation system", "Photo galleries", "Location & hours", "Mobile optimized", "Social media integration"]
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
    children: "Purpose-built websites for the food service industry. Featuring menu displays, online ordering capabilities, reservation systems, and everything restaurants need to serve customers online."
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
const url = "src/content/solutions/restaurant-websites.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/restaurant-websites.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/restaurant-websites.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
