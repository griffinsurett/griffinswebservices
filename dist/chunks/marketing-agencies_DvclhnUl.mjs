import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement, w as $$DoubleCard, $ as $$ContentRenderer, x as roots, m as sortByOrder, t as children, r as related, v as $$CTASection } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$BottomContentSection } from './BottomContentSection_9qV-y6MM.mjs';
import 'clsx';

const frontmatter = {
  "title": "Marketing Agencies",
  "heading": {
    "before": "White-label development for",
    "text": "Marketing Agencies",
    "after": "that scales."
  },
  "description": "White-label development partnerships that let you say yes to bigger projects without the overhead",
  "hasPage": true,
  "order": 4,
  "icon": "fa6-solid:handshake"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Stop turning down web projects or outsourcing to unreliable freelancers. Partner with us for white-label development that ships on time, stays on brand, and makes your agency look great—while you keep the client relationship."
    }), "\n", createVNode($$DoubleCard, {}), "\n", createVNode($$ContentRenderer, {
      query: roots("capabilities").orderBy(sortByOrder()).limit(6),
      variant: "CardVariant",
      id: "website-services",
      title: "Website Services",
      heading: {
        before: "Expert web services for",
        text: "Marketing Agencies",
        after: "."
      },
      description: "Your clients deserve lightning-fast, secure, and scalable websites. Every site we build is built to dominate and stand the test of time—making your agency look great.",
      columns: 3,
      gap: "lg",
      showButtonSection: false,
      className: "pt-35 lg:pt-20"
    }), "\n", createVNode($$ContentRenderer, {
      query: children("solutions", "new-builds"),
      variant: "IconListVariant",
      heading: "Premium Websites for Agencies, Built for Your Growth.",
      title: "Web Solutions",
      description: "We design top-tier websites for agency clients — custom-built for their goals, lightning-fast, secure, and easy to manage. No templates, no bloat — just powerful online presences that look sharp, perform flawlessly, and grow with your clients.",
      autoAdvanceDelay: 2000
    }), "\n", createVNode($$BottomContentSection, {
      collection: "industries",
      slug: "marketing-agencies",
      pageTitle: "Agency Partnerships",
      faq: {
        customQuery: related("faq", "industries", "marketing-agencies").orderBy(sortByOrder()),
        heading: "Common Questions About Agency Partnerships"
      }
    }), "\n", createVNode($$CTASection, {
      title: "Partner With Us",
      heading: {
        before: "Ready to scale your agency with",
        text: "white-label development?"
      },
      description: "Stop turning down projects. Partner with Griffin's Web Services for reliable white-label development that ships on time and makes your agency look great.",
      primaryCTA: {
        text: "Start a Partnership",
        link: "#industry-quote-hero"
      }
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

const url = "src/content/industries/marketing-agencies.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/industries/marketing-agencies.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/industries/marketing-agencies.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
