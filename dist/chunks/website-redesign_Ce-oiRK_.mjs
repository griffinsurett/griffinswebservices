import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "Website Redesign",
  "description": "A visual and structural refresh of an existing site to improve clarity, usability, and appearance.",
  "heading": {
    "before": "Redesigns",
    "text": "with strategy",
    "after": "not just fresh paint."
  },
  "order": 8,
  "icon": "fa6-solid:pen-ruler",
  "parent": "one-time-jobs"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We keep the momentum you already have—traffic, rankings, and integrations stay intact while the UX finally catches up."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "UX & analytics audits",
        description: "We study data, funnels, and recordings to understand what’s working before touching the layout."
      }, {
        title: "Messaging & structure refresh",
        description: "Update positioning, navigation, and hierarchy so visitors know where to go next."
      }, {
        title: "Component-driven rebuilds",
        description: "Design systems, tokens, and reusable sections make future updates consistent."
      }, {
        title: "SEO-safe launches",
        description: "Url mapping, schema, and content parity preserve rankings through the transition."
      }, {
        title: "Performance & accessibility upgrades",
        description: "Ship lighter code, better assets, and WCAG-compliant interactions along the way."
      }],
      quickFacts: [{
        title: "Timeline",
        description: "4-8 weeks"
      }, {
        title: "Includes",
        description: "Strategy, design, development"
      }, {
        title: "Ideal for",
        description: "Sites 2+ years old"
      }],
      contentHeading: {
        title: "Redesigns should fix business problems",
        before: "Tired of redesigns that only change colors?",
        text: "We fix the system, not just the surface.",
        after: "",
        description: "You get a research-backed plan, modular design, and a rebuild that respects the investments you’ve already made."
      },
      sidebar: {
        title: "Modernize without losing momentum",
        eyebrow: "How we work",
        description: "Discovery uncovers gaps, design systems create consistency, and development keeps things fast and maintainable.",
        footIcon: "🧭",
        footTitle: "Guided rollout",
        footDescription: "Preview environments, stakeholder demos, and training so launch day feels calm."
      },
      textContent: ["Websites age quickly when messaging shifts, offers expand, or the initial build cut corners. We treat redesigns as a chance to fix the structural issues—not just swap fonts.", "Our team runs audits, interviews stakeholders, and maps what the site needs to support today. Then we rebuild using modular components so future campaigns don’t require another ground-up project.", "Because engineering, design, and SEO sit in the same room, we keep performance up and traffic flowing while the new experience comes online."],
      benefitsHeading: "Why Our Redesigns Work",
      ctaTitle: "Ready for a strategic redesign?",
      ctaHeading: {
        before: "Let’s rebuild your",
        text: "website the right way",
        after: "."
      },
      ctaDescription: "Modern design, faster performance, and clearer messaging—without sacrificing the results you already rely on."
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

const url = "src/content/solutions/website-redesign.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/website-redesign.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/website-redesign.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
