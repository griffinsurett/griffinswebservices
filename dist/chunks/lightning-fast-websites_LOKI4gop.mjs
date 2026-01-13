import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { B as BarGraph, W as WebsiteLoadComparison } from './WebsiteLoadComparison_av3kp3AB.mjs';
import 'clsx';

const frontmatter = {
  "title": "Lightning-Fast Websites",
  "description": "Built to load instantly and feel effortless from the very first interaction. Visitors move smoothly from page to page without interruptions, delays, or loading screens — keeping attention high and drop-offs low.",
  "icon": "fa6-solid:bolt",
  "order": 1,
  "solutions": ["websites", "landing-pages", "business-websites", "portfolios"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode("div", {
      className: "flex flex-col gap-3 mt-2",
      children: [createVNode(BarGraph, {
        label: "GWS Average",
        value: 97.5,
        statValue: 2.5,
        statSuffix: " seconds",
        variant: "primary-reverse",
        "client:visible": true,
        "client:component-path": "@/components/AnimatedExamples/BarGraph",
        "client:component-export": "default",
        "client:component-hydration": true
      }), createVNode(BarGraph, {
        label: "Industry Average",
        value: 34,
        statValue: 7.1,
        statSuffix: " seconds",
        variant: "grey",
        delay: 200,
        "client:visible": true,
        "client:component-path": "@/components/AnimatedExamples/BarGraph",
        "client:component-export": "default",
        "client:component-hydration": true
      })]
    }), "\n", createVNode(WebsiteLoadComparison, {
      className: "mt-4",
      "client:visible": true,
      "client:component-path": "@/components/AnimatedExamples/WebsiteLoadComparison",
      "client:component-export": "default",
      "client:component-hydration": true
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

const url = "src/content/benefits/lightning-fast-websites.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/lightning-fast-websites.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/lightning-fast-websites.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
