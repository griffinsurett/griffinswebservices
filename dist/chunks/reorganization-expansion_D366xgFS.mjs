import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "Reorganization & Expansion",
  "description": "Add new offers, locations, or service lines without creating a tangled mess. We refactor site architecture, navigation, and content models so everything scales cleanly.",
  "heading": {
    "before": "Scale your site",
    "text": "without chaos",
    "after": "or broken UX."
  },
  "order": 9,
  "icon": "fa6-solid:diagram-project",
  "parent": "one-time-jobs"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Whether you’re adding a new practice area or expanding into multiple markets, we reorganize the site so growth feels intentional, not bolted on."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Information architecture workshops",
        description: "We map users, journeys, and content relationships before touching a sitemap."
      }, {
        title: "Navigation & taxonomy rebuilds",
        description: "Clear menu structures, breadcrumbs, and taxonomies keep large sites intuitive."
      }, {
        title: "Content modeling",
        description: "Flexible CMS schemas make it simple to roll out new locations, services, or resources."
      }, {
        title: "Template + component additions",
        description: "We create or refine the sections you need to launch new campaigns quickly."
      }, {
        title: "Governance & documentation",
        description: "Editorial guardrails and design system updates ensure teams ship consistently."
      }],
      quickFacts: [{
        title: "Timeline",
        description: "3-6 weeks"
      }, {
        title: "Ideal for",
        description: "Multi-location, multi-service teams"
      }, {
        title: "Deliverables",
        description: "IA, CMS schemas, new modules"
      }],
      contentHeading: {
        title: "Expansion should feel seamless to visitors",
        before: "Growth exposes weak architecture.",
        text: "We reinforce it before it cracks.",
        after: "",
        description: "You’ll walk away with a reorganized structure plus the reusable blocks needed to keep launching confidently."
      },
      sidebar: {
        title: "Clarity for teams and users",
        eyebrow: "What changes",
        description: "We document the new structure, train your team, and update design systems so every future addition follows the same rules.",
        footIcon: "🧱",
        footTitle: "Build once, reuse often",
        footDescription: "Content and design tokens make new sections as simple as filling out structured fields."
      },
      textContent: ["As websites grow, navigation becomes bloated and publishing slows to a crawl. We untangle the mess and leave you with a scalable foundation.", "By auditing analytics, content inventories, and stakeholder workflows, we create a reorganization plan grounded in real usage—not guesses.", "The result is a site structure that supports future offers, location pages, or resources without reinventing the wheel every time."],
      benefitsHeading: "Outcomes You’ll See",
      ctaTitle: "Need to reorganize?",
      ctaHeading: {
        before: "Let’s expand your",
        text: "website responsibly",
        after: "."
      },
      ctaDescription: "Launch new content faster with a structure that keeps things intuitive for both visitors and your internal team."
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

const url = "src/content/solutions/reorganization-expansion.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/reorganization-expansion.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/reorganization-expansion.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
