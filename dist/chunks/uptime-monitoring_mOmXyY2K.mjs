import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$CapabilitiesSection } from './CapabilitiesSection_DDRFyxyg.mjs';
import 'clsx';

const frontmatter = {
  "title": "Uptime Monitoring",
  "description": "24/7 monitoring to ensure your website stays online. Alerting, diagnostics, and incident playbooks keep disruptions brief.",
  "heading": {
    "before": "24/7",
    "text": "uptime monitoring",
    "after": "so you know before your customers do."
  },
  "icon": "fa6-solid:heart-pulse",
  "order": 5,
  "solutions": ["business-websites", "e-commerce-websites", "web-applications"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We catch issues before they become outages—and fix them before you notice."
    }), "\n", createVNode($$CapabilitiesSection, {
      capabilitiesHeading: "Always-on monitoring for peace of mind.",
      highlights: [{
        title: "Real-Time Alerts",
        description: "Instant notifications when something goes wrong so we can respond before customers are affected."
      }, {
        title: "Global Endpoint Checks",
        description: "We monitor from multiple locations worldwide to catch regional issues and CDN problems."
      }, {
        title: "Performance Baselines",
        description: "Continuous tracking of response times, Core Web Vitals, and server health against established benchmarks."
      }, {
        title: "Incident Response",
        description: "Documented playbooks and escalation paths mean issues get resolved quickly, not stuck in ticket queues."
      }],
      highlightsTitle: "Uptime Monitoring",
      highlightsHeading: "Visibility into what matters most.",
      highlightsDescription: "Round-the-clock monitoring catches slowdowns, outages, and security anomalies before they impact your business. When something goes wrong, we're already on it.",
      ctaTitle: "Ready for proactive monitoring?",
      ctaHeading: {
        before: "Know your site is",
        text: "always online.",
        after: ""
      },
      ctaDescription: "Get 24/7 monitoring from the team that built your site and knows exactly how to fix it."
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

const url = "src/content/capabilities/uptime-monitoring.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/capabilities/uptime-monitoring.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/capabilities/uptime-monitoring.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
