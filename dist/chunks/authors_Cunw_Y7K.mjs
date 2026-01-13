import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement, w as $$DoubleCard, $ as $$ContentRenderer, x as roots, m as sortByOrder, t as children, r as related, v as $$CTASection } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$BottomContentSection } from './BottomContentSection_9qV-y6MM.mjs';
import 'clsx';

const frontmatter = {
  "title": "Authors",
  "heading": {
    "before": "Websites for",
    "text": "Authors & Thought Leaders",
    "after": "that convert."
  },
  "description": "Websites that amplify your voice, grow your audience, and turn followers into paying customers",
  "hasPage": true,
  "order": 6,
  "icon": "fa6-solid:feather"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Your ideas deserve a platform that matches your ambition. We create sleek, conversion-focused sites for coaches, course creators, speakers, and thought leaders—built to capture emails, sell products, and establish you as the authority in your space."
    }), "\n", createVNode($$DoubleCard, {}), "\n", createVNode($$ContentRenderer, {
      query: roots("capabilities").orderBy(sortByOrder()).limit(6),
      variant: "CardVariant",
      id: "website-services",
      title: "Website Services",
      heading: {
        before: "Expert web services for",
        text: "Authors & Thought Leaders",
        after: "."
      },
      description: "You deserve a lightning-fast, secure, and scalable website that turns followers into paying customers. Every site we build is built to dominate and stand the test of time.",
      columns: 3,
      gap: "lg",
      showButtonSection: false,
      className: "pt-35 lg:pt-20"
    }), "\n", createVNode($$ContentRenderer, {
      query: children("solutions", "new-builds"),
      variant: "IconListVariant",
      heading: "Premium Websites for Authors, Built for Your Growth.",
      title: "Web Solutions",
      description: "We design top-tier websites for authors and thought leaders — custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat — just a powerful online presence that looks sharp, performs flawlessly, and grows with you.",
      autoAdvanceDelay: 2000
    }), "\n", createVNode($$BottomContentSection, {
      collection: "industries",
      slug: "authors",
      pageTitle: "Author Websites",
      faq: {
        customQuery: related("faq", "industries", "authors").orderBy(sortByOrder()),
        heading: "Common Questions About Author Websites"
      }
    }), "\n", createVNode($$CTASection, {
      title: "Get Started",
      heading: {
        before: "Ready to build a platform that",
        text: "grows your audience?"
      },
      description: "Join other authors and thought leaders who trust Griffin's Web Services. We build conversion-focused sites that capture emails, sell products, and establish you as the authority.",
      primaryCTA: {
        text: "Get Your Free Quote",
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

const url = "src/content/industries/authors.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/industries/authors.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/industries/authors.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
