import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { G as $$TrustStatement } from './BaseLayout_DpejhLLs.mjs';
import { $ as $$CapabilitiesSection } from './CapabilitiesSection_CBoLWOfM.mjs';
import 'clsx';

const frontmatter = {
  "title": "Webmaster Services",
  "description": "Proactive management, hosting, and support to keep your site fast and dependable. We monitor, patch, and roadmap improvements so you stay focused on growth.",
  "heading": {
    "before": "Hands-off",
    "text": "webmaster services",
    "after": "with accountability."
  },
  "order": 3,
  "icon": "fa6-solid:life-ring",
  "solutions": ["blog", "e-commerce-websites", "restaurant-websites", "custom-full-stack-applications"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "One team handles everything—no vendors to juggle, no excuses to chase."
    }), "\n", createVNode($$CapabilitiesSection, {
      capabilitiesHeading: "Managed services that keep your site running.",
      highlights: [{
        title: "One Accountable Partner",
        description: "Strategy, design, dev, and ops sit on the same team so there's no finger-pointing when you need help."
      }, {
        title: "Prioritized Improvement Roadmaps",
        description: "We plan quarterly initiatives that blend quick wins with foundational upgrades."
      }, {
        title: "Clear Reporting & Check-Ins",
        description: "Status recaps, KPI dashboards, and working sessions keep everyone aligned on progress."
      }, {
        title: "Security & Compliance Oversight",
        description: "Patching, access reviews, and policy documentation protect your brand and customer data."
      }],
      highlightsTitle: "Managed Web Operations",
      highlightsHeading: "One accountable partner for hosting, improvements, and support.",
      highlightsDescription: "Stay confident after launch with managed hosting, monitoring, support retainers, and continuous performance tuning handled by one accountable team.",
      ctaTitle: "Ready to stop worrying about your website?",
      ctaHeading: {
        before: "Let us handle",
        text: "the technical details.",
        after: ""
      },
      ctaDescription: "Focus on running your business while we handle hosting, updates, security, and support. One team, one relationship, zero headaches."
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

const url = "src/content/capabilities/webmaster-services.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/webmaster-services.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/webmaster-services.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
