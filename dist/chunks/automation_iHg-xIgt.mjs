import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$CapabilitiesSection } from './CapabilitiesSection_DDRFyxyg.mjs';
import 'clsx';

const frontmatter = {
  "title": "Automation",
  "description": "Workflow automation and custom scripts that move data between tools, trigger actions on schedule, and keep systems synchronized.",
  "heading": {
    "before": "Automation",
    "text": "that removes busywork",
    "after": "."
  },
  "order": 7,
  "icon": "fa6-solid:robot",
  "solutions": ["business-websites", "e-commerce-websites", "web-applications"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We connect your website to the rest of your stack so leads, orders, and internal workflows move automatically."
    }), "\n", createVNode($$CapabilitiesSection, {
      capabilitiesHeading: "Automation disciplines we bring to every project.",
      highlights: [{
        title: "Workflow Mapping",
        description: "We document every handoff so automation mirrors how your business actually works."
      }, {
        title: "Custom Scripts & Integrations",
        description: "From Airtable + Notion automations to serverless workers, we ship the glue that keeps teams in sync."
      }, {
        title: "Scheduled Jobs",
        description: "Reports, syncs, and maintenance tasks that run reliably without manual intervention."
      }, {
        title: "Monitoring & Alerting",
        description: "Error logging, retries, and status reporting so you know when something breaks."
      }],
      highlightsTitle: "Automation Ops",
      highlightsHeading: "Systems that talk to each other.",
      highlightsDescription: "We architect lightweight services or low-code automations that trigger actions, sync databases, and keep your team out of spreadsheets.",
      ctaTitle: "Ready to automate the busywork?",
      ctaHeading: {
        before: "Let your systems",
        text: "do the heavy lifting.",
        after: ""
      },
      ctaDescription: "Free up your team with automations that move data, trigger actions, and keep everything in sync."
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

const url = "src/content/capabilities/automation.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/capabilities/automation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/capabilities/automation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
