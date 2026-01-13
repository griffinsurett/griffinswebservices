import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "Website Maintenance",
  "description": "Ongoing care for existing websites to keep them stable, updated, and reliable for the teams who depend on them.",
  "heading": {
    "before": "Ongoing care for",
    "text": "your website",
    "after": "without the fire drills."
  },
  "order": 5,
  "icon": "fa6-solid:screwdriver-wrench",
  "parent": "ongoing-solutions"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "One accountable partner keeps your site patched, monitored, and improving so you never have to chase vendors or wonder who is responsible."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Managed hosting & monitoring",
        description: "24/7 uptime checks, SSL renewals, and infrastructure updates handled by the same team who built your site."
      }, {
        title: "Proactive updates & patching",
        description: "Dependency, CMS, and plugin updates are scheduled, tested, and rolled out so surprises never hit production."
      }, {
        title: "Content & offer updates",
        description: "Send new copy, photos, or promos and we stage, QA, and publish them without breaking the layout."
      }, {
        title: "Security oversight",
        description: "Access reviews, automated backups, and incident response plans keep the site resilient."
      }, {
        title: "Improvement roadmaps",
        description: "Quarterly check-ins highlight performance wins, SEO tasks, and feature requests worth prioritizing."
      }, {
        title: "Dedicated support channel",
        description: "Direct access to the builders who know your stack so questions get answered fast."
      }],
      quickFacts: [{
        title: "Engagement",
        description: "Monthly retainer"
      }, {
        title: "Includes",
        description: "Hosting, monitoring, updates"
      }, {
        title: "Reporting",
        description: "Monthly status + dashboards"
      }],
      contentHeading: {
        title: "Launch was just the start",
        before: "Websites need ongoing attention",
        text: "to stay fast and trustworthy.",
        after: "Let us handle it.",
        description: "Because we design, build, and maintain the same system, you get faster fixes, proactive improvements, and clear accountability for anything that touches your site."
      },
      sidebar: {
        title: "One partner, zero handoffs",
        eyebrow: "Why it works",
        description: "Strategy, design, development, and operations sit on the same team so hosting, updates, and support move quickly.",
        footIcon: "📊",
        footTitle: "Quarterly reviews",
        footDescription: "We recap wins, open risks, and upcoming work so you're never in the dark."
      },
      textContent: ["Keeping a high-performing website online is a full-time job. Without a maintenance plan, updates pile up, plugins conflict, and performance slips until customers notice.", "Our maintenance retainers pair managed hosting with proactive monitoring, patching, and request queues. Because we built the site, we know the architecture, patterns, and guardrails needed to ship fixes without breaking things.", "You get a single point of contact for updates, emergency fixes, and roadmap suggestions—no third-party tickets or finger-pointing between vendors."],
      benefitsHeading: "What Makes Our Maintenance Different",
      ctaTitle: "Ready for worry-free maintenance?",
      ctaHeading: {
        before: "Hand off the",
        text: "technical chores",
        after: "and stay focused on growth."
      },
      ctaDescription: "Stay confident after launch with proactive support, reporting, and a team that treats your site like a mission-critical asset."
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

const url = "src/content/solutions/website-maintenance.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/website-maintenance.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/website-maintenance.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
