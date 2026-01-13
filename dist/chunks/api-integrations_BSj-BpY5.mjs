import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "API Integrations",
  "description": "Connect your website or app to the systems you already rely on—CRMs, ERPs, marketing tools, booking platforms, and more.",
  "heading": {
    "before": "Integrations",
    "text": "that actually work",
    "after": "from day one."
  },
  "order": 16,
  "icon": "fa6-solid:puzzle-piece",
  "solutions": ["business-websites", "e-commerce-websites", "web-applications"],
  "redirectFrom": ["/solutions/api-integrations"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We’ve integrated with CRMs, operations tools, booking software, logistics platforms, and payment providers—always with documented flows and fallbacks."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Architecture planning",
        description: "We map data flow, triggers, and error handling before writing code."
      }, {
        title: "Custom middleware",
        description: "Serverless functions, queues, or lightweight services that keep APIs reliable."
      }, {
        title: "Authentication + security",
        description: "OAuth, API keys, and secrets managed securely."
      }, {
        title: "Monitoring",
        description: "Alerting, retries, and logging so you know when upstream providers fail."
      }, {
        title: "Documentation",
        description: "Sequence diagrams and handoffs so your team can own the integration going forward."
      }],
      quickFacts: [{
        title: "Format",
        description: "Add-on or standalone"
      }, {
        title: "Timeline",
        description: "Varies by provider"
      }, {
        title: "Examples",
        description: "HubSpot, Monday, Airtable, Stripe, Twilio"
      }],
      contentHeading: {
        title: "Connect the stack you already use",
        before: "Manual work slows teams down.",
        text: "Integrations remove the busywork.",
        after: "",
        description: "Automate data entry, sync inventory, trigger workflows, or centralize reporting with integrations built by full-stack engineers."
      },
      sidebar: {
        title: "Future-proof connectivity",
        eyebrow: "Why it matters",
        description: "Reliable integrations keep teams aligned, reduce errors, and make launching new offers dramatically faster.",
        footIcon: "🔌",
        footTitle: "Own your data",
        footDescription: "We ensure data mapping is clear so nothing goes missing between systems."
      },
      textContent: ["Most agencies avoid integrations because they require backend skills. We embrace them—tying your marketing site directly into the tools that run your business.", "From CRMs and booking tools to inventory systems and Zapier replacements, we plan, document, and monitor every connection.", "Need to replace brittle automations? We can rebuild them with modern tooling so you stop worrying about single points of failure."],
      benefitsHeading: "Where Integrations Help",
      ctaTitle: "Need systems to talk?",
      ctaHeading: {
        before: "Let’s wire up",
        text: "your stack",
        after: "."
      },
      ctaDescription: "Spend less time copying data and more time serving customers with integrations you can trust."
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

const url = "src/content/features/api-integrations.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/features/api-integrations.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/features/api-integrations.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
