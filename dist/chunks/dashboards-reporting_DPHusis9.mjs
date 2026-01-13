import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dashboards & Reporting",
  "description": "Real-time dashboards and automated reports that surface the metrics your team needs to make decisions faster.",
  "heading": {
    "before": "Dashboards",
    "text": "that drive decisions,",
    "after": "not confusion."
  },
  "order": 21,
  "icon": "fa6-solid:chart-line",
  "parent": "web-applications"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We build dashboards that answer questions at a glance—no digging through spreadsheets or waiting for reports."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Real-time data",
        description: "Live metrics from your databases, APIs, and third-party tools."
      }, {
        title: "Custom visualizations",
        description: "Charts, graphs, and KPI cards designed for your specific metrics."
      }, {
        title: "Automated reports",
        description: "Scheduled exports delivered to email or Slack automatically."
      }, {
        title: "Role-based views",
        description: "Different teams see different data based on what they need."
      }, {
        title: "Drill-down capability",
        description: "Click into any metric to explore the underlying data."
      }],
      quickFacts: [{
        title: "Timeline",
        description: "4-8 weeks"
      }, {
        title: "Includes",
        description: "Data integration, dashboard design, exports"
      }, {
        title: "Data sources",
        description: "Databases, APIs, spreadsheets"
      }],
      contentHeading: {
        title: "Stop hunting for answers",
        before: "Decisions delayed by",
        text: "scattered data",
        after: "cost you money.",
        description: "When your metrics live in five different tools, nobody has the full picture. A unified dashboard puts the truth in one place."
      },
      sidebar: {
        title: "Data you can act on",
        eyebrow: "Outcomes",
        description: "Faster decisions, better alignment, and teams that know exactly where they stand.",
        footIcon: "📊",
        footTitle: "Always current",
        footDescription: "Real-time sync means you're never looking at stale data."
      },
      textContent: ["Your business generates data everywhere—sales, operations, marketing, support. But if it takes hours to compile a report, the insights come too late to matter.", "We build dashboards that pull from all your sources and display the metrics that drive your business. Real-time updates, custom visualizations, and automated reports delivered on schedule.", "Whether you need an executive overview or department-specific deep dives, we design around the questions your team actually asks."],
      benefitsHeading: "Why Custom Dashboards Win",
      ctaTitle: "Ready to see your data clearly?",
      ctaHeading: {
        before: "Let's build your",
        text: "dashboard",
        after: "."
      },
      ctaDescription: "Surface the metrics that matter with a dashboard designed for how your team works."
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

const url = "src/content/solutions/dashboards-reporting.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/dashboards-reporting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/dashboards-reporting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
