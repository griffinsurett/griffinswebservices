import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$CapabilitiesSection } from './CapabilitiesSection_DDRFyxyg.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hosting",
  "description": "Reliable, high-performance hosting with full management. We watch uptime, capacity, and security patches so your stack stays healthy around the clock.",
  "heading": {
    "before": "Managed",
    "text": "hosting",
    "after": "that keeps your site fast and secure."
  },
  "icon": "fa6-solid:server",
  "order": 1,
  "solutions": ["business-websites", "e-commerce-websites", "web-applications", "blogs"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Your hosting is managed by the same team that built your site—no third-party tickets, no finger-pointing."
    }), "\n", createVNode($$CapabilitiesSection, {
      capabilitiesHeading: "Hosting infrastructure handled for you.",
      highlights: [{
        title: "Performance-Tuned Servers",
        description: "CDN distribution, edge caching, and optimized configurations keep page loads fast for visitors worldwide."
      }, {
        title: "Automatic SSL & Renewals",
        description: "HTTPS certificates are provisioned and renewed automatically so your site stays secure without manual intervention."
      }, {
        title: "Daily Backups",
        description: "Automated backups with point-in-time recovery options mean you're never more than a day away from a clean restore."
      }, {
        title: "Scalable Infrastructure",
        description: "Traffic spikes from campaigns or press coverage are handled gracefully without manual server upgrades."
      }],
      highlightsTitle: "Managed Hosting",
      highlightsHeading: "Infrastructure you don't have to think about.",
      highlightsDescription: "We handle server configuration, SSL certificates, CDN setup, backups, and capacity planning so you can focus on running your business instead of managing infrastructure.",
      ctaTitle: "Ready for hosting that just works?",
      ctaHeading: {
        before: "Stop worrying about",
        text: "server management.",
        after: ""
      },
      ctaDescription: "Get reliable, fully-managed hosting from the team that knows your site inside and out."
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

const url = "src/content/capabilities/hosting.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/capabilities/hosting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/capabilities/hosting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
