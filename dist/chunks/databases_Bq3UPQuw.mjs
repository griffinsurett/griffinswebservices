import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "Databases",
  "description": "Structured data storage that powers web applications, keeps records accurate, and unlocks dynamic UI. Available only inside a Web Applications build or enhancement.",
  "heading": {
    "before": "Data models",
    "text": "built for growth",
    "after": "and automation."
  },
  "order": 17,
  "icon": "fa6-solid:database",
  "parent": "web-applications"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Clean data structures power everything—dynamic pages, automation, reporting, and internal tooling."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Schema design",
        description: "We map entities, relationships, and indexing strategies for performance and clarity."
      }, {
        title: "Data migrations",
        description: "Move spreadsheets or legacy DBs into modern platforms without losing integrity."
      }, {
        title: "Admin tooling",
        description: "Lightweight dashboards or CMS interfaces so teams can manage records safely."
      }, {
        title: "Backups & access controls",
        description: "Role-based permissions and automated backups keep data safe."
      }, {
        title: "API + automation ready",
        description: "Expose secure APIs or webhooks so other systems can tap into the data."
      }],
      quickFacts: [{
        title: "Platforms",
        description: "Postgres, Supabase, Airtable"
      }, {
        title: "Timeline",
        description: "2-4 weeks"
      }, {
        title: "Includes",
        description: "Schema, migrations, docs"
      }],
      contentHeading: {
        title: "Data you can trust",
        before: "Duct-taped spreadsheets don’t scale.",
        text: "We design databases that do.",
        after: "",
        description: "Give your business a structured data layer that powers dynamic websites, applications, and reporting."
      },
      sidebar: {
        title: "Systems built on strong foundations",
        eyebrow: "Outcomes",
        description: "Better organization, easier integrations, and teams confident enough to automate workflows.",
        footIcon: "📚",
        footTitle: "Clear ownership",
        footDescription: "Documentation spells out how data should be added, edited, and consumed."
      },
      textContent: ["Your website and internal tools are only as good as the data backing them. We design schemas and choose platforms that match your scale and skill set.", "Need something simple? We’ll orchestrate Airtable or Notion databases that play nicely with marketing websites. Need power? We’ll build on managed Postgres or Supabase.", "Either way, we document everything and make sure automations, APIs, and stakeholders have reliable access to the data they need."],
      benefitsHeading: "Why Structured Data Matters",
      ctaTitle: "Need a better data layer?",
      ctaHeading: {
        before: "Let’s design",
        text: "your database",
        after: "."
      },
      ctaDescription: "Upgrade from messy spreadsheets to managed databases that fuel your entire digital ecosystem."
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

const url = "src/content/solutions/databases.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/databases.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/databases.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
