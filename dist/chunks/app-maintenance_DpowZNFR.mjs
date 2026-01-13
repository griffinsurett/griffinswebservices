import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "App Maintenance",
  "description": "Ongoing support for web applications—monitoring, updates, and incremental improvements handled by the engineers who know your stack.",
  "heading": {
    "before": "Keep your",
    "text": "web app online",
    "after": "while it keeps scaling."
  },
  "order": 6,
  "icon": "fa6-solid:layer-group",
  "parent": "ongoing-solutions"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We maintain the applications we build—monitoring releases, handling bugs, and planning improvements so your team can focus on customers."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Release management",
        description: "Structured deployment pipelines, staging environments, and regression testing keep every release predictable."
      }, {
        title: "Issue triage & bug fixes",
        description: "Prioritized response SLAs with the engineers who know your stack and architecture."
      }, {
        title: "Performance monitoring",
        description: "Log aggregation, APM tooling, and alerting ensure we catch slowdowns or errors before users do."
      }, {
        title: "Security & compliance",
        description: "Dependency patching, access reviews, and incident response drills protect user data."
      }, {
        title: "Feature backlog",
        description: "We plan upgrades in sprints so your roadmap keeps moving instead of stalling after launch."
      }, {
        title: "Infrastructure care",
        description: "Cloud resources, queues, and databases are tuned and right-sized as adoption grows."
      }],
      quickFacts: [{
        title: "Engagement",
        description: "Monthly retainer"
      }, {
        title: "Team",
        description: "Dedicated lead + engineers"
      }, {
        title: "Tooling",
        description: "Logging, alerting, runbooks"
      }],
      contentHeading: {
        title: "Product teams need a steady partner",
        before: "Launch is milestone one—",
        text: "maintenance keeps the product alive.",
        after: "",
        description: "We stay embedded after delivery so uptime, performance, and roadmap experiments continue without hunting down new agencies every quarter."
      },
      sidebar: {
        title: "Engineers on standby",
        eyebrow: "What you get",
        description: "Direct access to the same full-stack team that architected the build, plus docs, runbooks, and status updates.",
        footIcon: "⚙️",
        footTitle: "SLAs that matter",
        footDescription: "Response commitments for incidents, hotfixes, and enhancements protect your operations."
      },
      textContent: ["Custom software is only valuable when it keeps working. Internal dev teams change, knowledge fades, and suddenly minor bugs take weeks to resolve.", "We maintain the apps we build (and the ones we inherit) with structured release cycles, automated testing, and observability baked in. Because we already understand the architecture, fixes and improvements ship faster.", "Whether you need a small retainers for occasional updates or a dedicated squad to keep shipping features, we right-size the plan around your product roadmap."],
      benefitsHeading: "Why App Maintenance Matters",
      ctaTitle: "Keep your app healthy",
      ctaHeading: {
        before: "Let’s run",
        text: "maintenance together",
        after: "so your users stay happy."
      },
      ctaDescription: "Stability, security, and speed handled by the builders who know your system best."
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

const url = "src/content/solutions/app-maintenance.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/app-maintenance.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/app-maintenance.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
