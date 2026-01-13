import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "Spreadsheets",
  "description": "Lightweight Airtable, Notion, or Google Sheets systems that track inventory, content calendars, and operational workflows in sync with your website.",
  "heading": {
    "before": "Operational spreadsheets",
    "text": "connected to your site",
    "after": "."
  },
  "order": 18,
  "icon": "fa6-solid:table-list",
  "solutions": ["business-websites", "e-commerce-websites", "web-applications"],
  "redirectFrom": ["/solutions/spreadsheets"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Spreadsheets are still the fastest way to collect and manage data—when they’re structured and synced to your live experiences."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Structured bases",
        description: "Custom Airtable/Sheets schemas for directories, menu updates, resource libraries, or editorial calendars."
      }, {
        title: "Two-way sync",
        description: "Automations push fresh data to your site and pull leads or orders back into the sheet."
      }, {
        title: "Collaboration & permissions",
        description: "Role-based access, audit trails, and cleanup scripts keep data trustworthy."
      }, {
        title: "Dashboards & reporting",
        description: "Views, interfaces, and charts that make it easy to prioritize next actions."
      }, {
        title: "Hand-off documentation",
        description: "We outline update rituals so your team keeps the sheet healthy."
      }],
      quickFacts: [{
        title: "Platforms",
        description: "Airtable, Google Sheets, Notion"
      }, {
        title: "Timeline",
        description: "1-2 weeks"
      }, {
        title: "Includes",
        description: "Schema, automations, training"
      }],
      contentHeading: {
        title: "Organized spreadsheets = organized business",
        before: "When publishing depends on spreadsheets,",
        text: "we make them reliable.",
        after: "",
        description: "Stop version-control chaos and manual exports—get a clear system that talks to your website or app automatically."
      },
      sidebar: {
        title: "Give teams tools they’ll use",
        eyebrow: "What changes",
        description: "Simple interfaces, instructions, and automations mean marketing and ops can work without asking engineering for help.",
        footIcon: "🗂",
        footTitle: "Always up-to-date",
        footDescription: "Data flows both ways so your site reflects reality and your team trusts the sheet."
      },
      textContent: ["Spreadsheets power menus, service directories, case studies, and reporting. But when everyone edits their own version, sites fall out of sync.", "We design structured sheets or Airtable bases, connect them to your CMS, and automate the boring work so updates hit the web instantly.", "Need advanced workflows? We layer in approvals, reminders, or integrations so your team never forgets to publish."],
      benefitsHeading: "Why Teams Love Our Spreadsheets",
      ctaTitle: "Need a better sheet?",
      ctaHeading: {
        before: "Let’s organize",
        text: "your data",
        after: "so publishing stays easy."
      },
      ctaDescription: "We bring order to the spreadsheets that power your marketing, operations, and reporting."
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

const url = "src/content/features/spreadsheets.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/features/spreadsheets.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/features/spreadsheets.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
