import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { G as $$TrustStatement, a as $$ContentRenderer } from './BaseLayout_DpejhLLs.mjs';
import 'clsx';

const frontmatter = {
  "title": "Analytics & Tracking",
  "description": "Collect only the metrics that matter and transform them into action. We instrument funnels, QA data, and publish dashboards so every team trusts the numbers.",
  "heading": {
    "before": "Insightful",
    "text": "analytics setups",
    "after": "that inform action."
  },
  "order": 5,
  "icon": "fa6-solid:chart-line",
  "solutions": ["blog", "landing-pages", "e-commerce-websites"],
  "highlights": [{
    "title": "Clean Tracking Implementation",
    "description": "We deploy GTM, server-side tagging, and consent-aware scripts so every event fires reliably."
  }, {
    "title": "Unified Reporting Dashboards",
    "description": "Marketing, sales, and leadership see the same KPIs with tailored dashboards tied to revenue."
  }, {
    "title": "Experiment-Ready Funnels",
    "description": "Conversion goals, cohorts, and attribution paths are mapped so tests show exactly what moved the needle."
  }, {
    "title": "Privacy & Compliance Guardrails",
    "description": "Data retention, consent capture, and governance workflows keep your analytics stack compliant."
  }]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We set up tracking that actually works—clean data, no guesswork."
    }), "\n", createVNode($$ContentRenderer, {
      items: frontmatter.highlights,
      variant: "SplitHighlightsVariant",
      title: "Analytics & Attribution",
      heading: "Know exactly which campaigns drive revenue.",
      description: "We install reliable analytics pipelines, unify dashboards, and instrument funnels so you can tie every visitor, campaign, and experiment back to real outcomes."
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

const url = "src/content/capabilities/analytics-conversion-optimization.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/analytics-conversion-optimization.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/analytics-conversion-optimization.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
