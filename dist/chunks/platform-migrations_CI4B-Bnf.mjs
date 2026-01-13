import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "Platform Migrations",
  "description": "Move an existing site or app to a new platform or framework while preserving content, integrations, and stability.",
  "heading": {
    "before": "Migrate platforms",
    "text": "without losing",
    "after": "rankings or revenue."
  },
  "order": 10,
  "icon": "fa6-solid:arrows-rotate",
  "parent": "one-time-jobs"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We’ve moved sites from WordPress, Webflow, Shopify, Squarespace, and custom stacks onto modern frameworks with zero data loss."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Technical audits",
        description: "We map every integration, plugin, and data flow to plan a safe migration path."
      }, {
        title: "Content & asset migration",
        description: "Structured exports and scripts move thousands of pages, images, and posts without manual copy/paste."
      }, {
        title: "URL + SEO parity",
        description: "Redirect mapping, schema replication, and metadata checks protect rankings."
      }, {
        title: "Data + customer migration",
        description: "Orders, forms, accounts, and CRM data are preserved and validated."
      }, {
        title: "Cutover support",
        description: "We coordinate with hosting, DNS, and internal teams so launch day is uneventful."
      }],
      quickFacts: [{
        title: "Timeline",
        description: "4-10 weeks"
      }, {
        title: "Source examples",
        description: "WordPress, Shopify, HubSpot"
      }, {
        title: "Deliverables",
        description: "New build + migration scripts"
      }],
      contentHeading: {
        title: "Migrations don’t have to be scary",
        before: "Whether you’re outgrowing a DIY platform or consolidating tech,",
        text: "we move everything with care.",
        after: "",
        description: "We rebuild on the right stack, replicate functionality, and validate every page before flipping the switch."
      },
      sidebar: {
        title: "Plan, test, launch",
        eyebrow: "How we de-risk",
        description: "Sandbox environments, QA scripts, and automated checks confirm nothing is missed before the final cutover.",
        footIcon: "🧪",
        footTitle: "Confidence at launch",
        footDescription: "Real-time monitoring and rollback plans stay ready if something misbehaves."
      },
      textContent: ["The wrong migration wipes out organic traffic, loses customer data, or introduces weeks of downtime. We treat migrations like a software release—not a rushed weekend project.", "Discovery uncovers hidden dependencies, we recreate necessary integrations, and we script the move so it’s repeatable in staging before production.", "Once live, we monitor analytics, search consoles, and reporting tools to confirm everything behaves exactly as expected."],
      benefitsHeading: "Why Teams Migrate With Us",
      ctaTitle: "Ready to switch platforms?",
      ctaHeading: {
        before: "Let’s move your",
        text: "site the right way",
        after: "."
      },
      ctaDescription: "Modern stack, faster performance, and zero surprises when you leave your old platform behind."
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

const url = "src/content/solutions/platform-migrations.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/platform-migrations.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/platform-migrations.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
