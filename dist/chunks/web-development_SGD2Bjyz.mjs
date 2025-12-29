import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { G as $$TrustStatement } from './BaseLayout_DpejhLLs.mjs';
import { $ as $$CapabilitiesSection } from './CapabilitiesSection_CBoLWOfM.mjs';
import 'clsx';

const frontmatter = {
  "title": "Web Development",
  "description": "We design and develop custom websites and web applications that look great, load fast, and scale with your business. We handle the entire build—so everything works together seamlessly.",
  "heading": {
    "text": "Web development",
    "after": "across the stack."
  },
  "order": 2,
  "icon": "fa6-solid:code",
  "solutions": ["blog", "standard-websites", "e-commerce-websites", "restaurant-websites", "custom-full-stack-applications"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Built by developers who understand both the code and the business goals behind it."
    }), "\n", createVNode($$CapabilitiesSection, {
      capabilitiesHeading: "Development layers we build across.",
      highlights: [{
        title: "Clean, Maintainable Code",
        description: "Organized, well-documented code that's easy to update, extend, and hand off when needed."
      }, {
        title: "Design-to-Development",
        description: "Pixel-perfect implementation of your vision—we translate designs into functional, responsive websites and web apps."
      }, {
        title: "End-to-End Architecture",
        description: "From design systems to database schemas, we plan the full stack so every layer works together."
      }, {
        title: "Integration-Ready APIs",
        description: "Custom APIs, third-party integrations, and middleware keep data flowing between the tools you rely on."
      }],
      highlightsTitle: "Web Engineering Practice",
      highlightsHeading: "Full-stack development tailored to your roadmap.",
      highlightsDescription: "We architect, build, and ship maintainable codebases spanning front-end, back-end, and full-stack needs—covering API design, integrations, and clean implementation so your website works exactly as designed.",
      ctaTitle: "Need a development team that delivers?",
      ctaHeading: {
        before: "Code that",
        text: "actually works.",
        after: ""
      },
      ctaDescription: "No spaghetti code, no mystery bugs, no excuses. Get a clean, maintainable codebase built by developers who take ownership from first commit to final deploy."
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

const url = "src/content/capabilities/web-development.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/web-development.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/web-development.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
