import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "Forms & Lead Management",
  "description": "High-converting forms, conditional logic, and CRM automations that capture, qualify, and route every lead without manual work.",
  "heading": {
    "before": "Forms engineered",
    "text": "for serious pipelines",
    "after": "."
  },
  "order": 15,
  "icon": "fa6-solid:inbox",
  "solutions": ["business-websites", "landing-pages", "e-commerce-websites", "web-applications"],
  "redirectFrom": ["/solutions/forms-lead-management"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Your website can qualify leads, score opportunities, and trigger workflows automatically—we wire it all together."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Custom form experiences",
        description: "Multi-step flows, conditional paths, and branded UI that increase completion rates."
      }, {
        title: "Integrations",
        description: "Native or API connections into HubSpot, Salesforce, Airtable, ClickUp, Slack, and more."
      }, {
        title: "Validation & spam protection",
        description: "Server-side validation, Honeypot, hCaptcha, and bot filtering keep junk out."
      }, {
        title: "Automated follow-up",
        description: "Trigger nurture emails, assign reps, or spin up tasks as soon as a lead submits."
      }, {
        title: "Data enrichment",
        description: "Append UTM data, product interests, or firmographic info so sales reps have context."
      }],
      quickFacts: [{
        title: "Format",
        description: "Add-on"
      }, {
        title: "Timeline",
        description: "1-2 weeks"
      }, {
        title: "Integrations",
        description: "HubSpot, Salesforce, Airtable"
      }],
      contentHeading: {
        title: "Forms should feel effortless for users and ops",
        before: "Stop losing leads to boring forms.",
        text: "Make it easy to share info and route it automatically.",
        after: "",
        description: "We handle UX, validation, integrations, and automations so no inquiry slips through the cracks."
      },
      sidebar: {
        title: "Qualify before the first call",
        eyebrow: "What changes",
        description: "Better questions, smarter logic, and immediate routing turn every submission into a fast follow-up.",
        footIcon: "📬",
        footTitle: "Operations-ready",
        footDescription: "We document mappings and provide training so your team can tweak forms later without breaking anything."
      },
      textContent: ["Generic form plugins leave leads in inboxes and force your team to copy/paste everything into the right systems. We replace them with forms that feel great to fill out and push data exactly where it belongs.", "Our team builds single or multi-step flows, handles validation, and integrates directly with your CRM or automation tools so every response is actionable.", "Need to score or triage? We enrich submissions with UTM parameters, page context, and product selections so sales knows what conversation to start."],
      benefitsHeading: "Why Our Forms Perform",
      ctaTitle: "Level up your lead flow",
      ctaHeading: {
        before: "Let’s build",
        text: "smarter forms",
        after: "today."
      },
      ctaDescription: "Capture more leads, qualify them automatically, and keep follow-ups instant."
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

const url = "src/content/features/forms-lead-management.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/features/forms-lead-management.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/features/forms-lead-management.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
