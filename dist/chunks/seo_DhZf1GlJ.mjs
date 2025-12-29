import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { G as $$TrustStatement } from './BaseLayout_DpejhLLs.mjs';
import { $ as $$CapabilitiesSection } from './CapabilitiesSection_CBoLWOfM.mjs';
import 'clsx';

const frontmatter = {
  "title": "Search Engine Optimization",
  "description": "Improve your visibility and rank higher in search results with ongoing SEO strategies. Strategy, implementation, and reporting stay aligned so search keeps fueling leads.",
  "heading": {
    "before": "Ongoing",
    "text": "SEO programs",
    "after": "focused on revenue."
  },
  "order": 4,
  "icon": "fa6-solid:magnifying-glass-chart",
  "solutions": ["blog", "e-commerce-websites", "restaurant-websites"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We focus on rankings that drive revenue—not vanity metrics that don't convert."
    }), "\n", createVNode($$CapabilitiesSection, {
      capabilitiesHeading: "SEO disciplines we execute across.",
      highlights: [{
        title: "Technical SEO Foundation",
        description: "We fix crawl traps, schema, and site architecture so search engines understand every page."
      }, {
        title: "Revenue-Focused Content Strategy",
        description: "Editorial calendars map keywords to funnels so new content attracts buyers—not just visits."
      }, {
        title: "Authority & Link Building",
        description: "Digital PR, partnerships, and resource outreach grow trustworthy backlinks that compound rankings."
      }, {
        title: "Transparent Reporting",
        description: "Monthly scorecards connect rankings, traffic, and pipeline so stakeholders see SEO's impact."
      }],
      highlightsTitle: "Search Engine Program",
      highlightsHeading: "Revenue-focused SEO campaigns that compound visibility.",
      highlightsDescription: "Continuous SEO audits, keyword optimization, and technical improvements to help your site climb search rankings and attract more qualified traffic.",
      ctaTitle: "Ready to rank where it matters?",
      ctaHeading: {
        before: "Get found by",
        text: "customers searching for you.",
        after: ""
      },
      ctaDescription: "Stop losing leads to competitors who show up first. Get an SEO strategy that drives rankings, traffic, and revenue."
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

const url = "src/content/capabilities/seo.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/seo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/seo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
