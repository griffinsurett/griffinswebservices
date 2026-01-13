import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "Internal Tools",
  "description": "Custom admin panels, dashboards, and workflow tools that replace spreadsheets and streamline how your team actually works.",
  "heading": {
    "before": "Internal tools",
    "text": "built around your team,",
    "after": "not the other way around."
  },
  "order": 19,
  "icon": "fa6-solid:screwdriver-wrench",
  "parent": "web-applications"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We've replaced clunky spreadsheets, disconnected tools, and manual processes with systems teams actually enjoy using."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Admin dashboards",
        description: "Manage users, content, orders, or any data your business runs on."
      }, {
        title: "Workflow automation",
        description: "Replace manual handoffs with triggered actions and notifications."
      }, {
        title: "Reporting & analytics",
        description: "Real-time metrics and exportable reports tailored to your KPIs."
      }, {
        title: "Role-based access",
        description: "Control who sees what based on team, department, or seniority."
      }, {
        title: "System integrations",
        description: "Connect to your CRM, ERP, or other tools your team already uses."
      }],
      quickFacts: [{
        title: "Timeline",
        description: "6-12 weeks"
      }, {
        title: "Includes",
        description: "Discovery, design, build, training"
      }, {
        title: "After launch",
        description: "Hosting + support included"
      }],
      contentHeading: {
        title: "Stop fighting your tools",
        before: "Spreadsheets and workarounds",
        text: "don't scale.",
        after: "Custom tools do.",
        description: "When your team spends more time managing tools than doing their actual job, it's time for software built around your workflows—not generic solutions you have to work around."
      },
      sidebar: {
        title: "Tools your team will use",
        eyebrow: "Outcomes",
        description: "Faster operations, fewer errors, and happier employees who can focus on meaningful work instead of data entry.",
        footIcon: "⚡",
        footTitle: "Built for speed",
        footDescription: "Fast interfaces and smart defaults mean less clicking and more doing."
      },
      textContent: ["Your team has unique processes. Generic software forces you to adapt to its assumptions. Custom internal tools adapt to you.", "We build admin panels, dashboards, and workflow tools that match exactly how your team operates. No more copy-pasting between systems or maintaining fragile spreadsheets.", "Every tool we build comes with documentation and training so your team can hit the ground running—and support so you're never stuck when requirements change."],
      benefitsHeading: "Why Internal Tools Matter",
      ctaTitle: "Ready to streamline operations?",
      ctaHeading: {
        before: "Let's build your",
        text: "internal tools",
        after: "."
      },
      ctaDescription: "Replace spreadsheets and workarounds with software that actually fits how your team works."
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

const url = "src/content/solutions/internal-tools.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/internal-tools.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/internal-tools.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
