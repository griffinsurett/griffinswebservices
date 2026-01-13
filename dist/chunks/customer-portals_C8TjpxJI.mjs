import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "Customer Portals",
  "description": "Secure, self-service portals where your customers can view orders, manage accounts, and access documents without calling your team.",
  "heading": {
    "before": "Customer portals",
    "text": "that reduce support load",
    "after": "and improve satisfaction."
  },
  "order": 18,
  "icon": "fa6-solid:users",
  "parent": "web-applications"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We build portals your customers actually want to use—fast, intuitive, and available 24/7."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Secure authentication",
        description: "Login systems with password reset, SSO options, and session management."
      }, {
        title: "Account management",
        description: "Customers update their info, preferences, and payment methods themselves."
      }, {
        title: "Order & history views",
        description: "Real-time status updates, invoices, and downloadable records."
      }, {
        title: "Document access",
        description: "Secure file sharing for contracts, reports, or deliverables."
      }, {
        title: "Support integration",
        description: "Ticket submission, live chat, or FAQ access built in."
      }],
      quickFacts: [{
        title: "Timeline",
        description: "6-10 weeks"
      }, {
        title: "Includes",
        description: "Auth, dashboard, integrations"
      }, {
        title: "After launch",
        description: "Hosting + support included"
      }],
      contentHeading: {
        title: "Let customers help themselves",
        before: "Your team shouldn't answer",
        text: "the same questions",
        after: "over and over.",
        description: "A customer portal gives clients 24/7 access to their accounts, orders, and documents—freeing your team to focus on work that actually requires human attention."
      },
      sidebar: {
        title: "Self-service that works",
        eyebrow: "Outcomes",
        description: "Fewer support tickets, faster resolutions, and happier customers who can get what they need anytime.",
        footIcon: "🔐",
        footTitle: "Secure by default",
        footDescription: "Role-based access, encryption, and audit logs keep sensitive data protected."
      },
      textContent: ["Customers expect instant access to their information. When they have to email or call for every status update, invoice, or document, everyone loses time.", "We build customer portals that put the right information in the right hands. Secure login, intuitive dashboards, and integrations with your existing systems so data stays in sync.", "Whether you need a simple account center or a full-featured client hub, we design around your workflows and your customers' expectations."],
      benefitsHeading: "Why Customer Portals Pay Off",
      ctaTitle: "Ready to launch your portal?",
      ctaHeading: {
        before: "Let's build your",
        text: "customer portal",
        after: "."
      },
      ctaDescription: "Give your customers 24/7 access and give your team their time back."
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

const url = "src/content/solutions/customer-portals.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/customer-portals.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/customer-portals.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
