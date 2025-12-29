import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { G as $$TrustStatement } from './BaseLayout_DpejhLLs.mjs';
import { $ as $$CapabilitiesSection } from './CapabilitiesSection_CBoLWOfM.mjs';
import 'clsx';

const frontmatter = {
  "title": "Accessibility & Compliance",
  "description": "Design and ship experiences that meet ADA, WCAG, legal standards, and multilingual accessibility. We audit, remediate, and train teams so inclusivity stays maintained long-term.",
  "heading": {
    "before": "Inclusive",
    "text": "accessibility work",
    "after": "that meets standards."
  },
  "order": 6,
  "icon": "fa6-solid:universal-access",
  "solutions": ["blog", "e-commerce-websites", "restaurant-websites"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We're developers, not lawyers—but we've done the research most agencies skip to help you meet compliance standards."
    }), "\n", createVNode($$CapabilitiesSection, {
      capabilitiesHeading: "Compliance areas we cover.",
      highlights: [{
        title: "WCAG & ADA Audits",
        description: "Manual and automated testing surfaces violations with prioritized remediation plans."
      }, {
        title: "Inclusive Design Remediation",
        description: "We fix semantic structure, focus states, color contrast, and content patterns across your site."
      }, {
        title: "Assistive Tech QA & Training",
        description: "Screen reader, keyboard, and voice control testing ensures real users can complete key tasks."
      }, {
        title: "Compliance Documentation",
        description: "Accessibility statements, VPATs, and internal guides prove your commitment and keep teams aligned."
      }],
      highlightsTitle: "Accessibility Program",
      highlightsHeading: "Inclusive experiences that satisfy WCAG, ADA, and legal standards.",
      highlightsDescription: "We audit, remediate, and monitor your site so it stays inclusive and compliant—covering semantic structure, keyboard navigation, color contrast, assistive tech support, required policies, and multilingual/language-access features.",
      ctaTitle: "Ready to make your site accessible to everyone?",
      ctaHeading: {
        before: "Build experiences",
        text: "everyone can use.",
        after: ""
      },
      ctaDescription: "Avoid legal risk and reach more customers with a site that meets accessibility standards and privacy regulations."
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

const url = "src/content/capabilities/accessibility-compliance.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/accessibility-compliance.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/accessibility-compliance.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
