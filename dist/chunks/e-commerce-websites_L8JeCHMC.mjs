import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { G as $$TrustStatement } from './BaseLayout_DpejhLLs.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_lFItHi1t.mjs';
import 'clsx';

const frontmatter = {
  "title": "E-Commerce Websites",
  "description": "Online stores built to sell. We create fast, secure e-commerce websites with seamless checkout, inventory management, and the tools you need to grow revenue.",
  "heading": {
    "before": "Online stores",
    "text": "built to sell",
    "after": "and scale."
  },
  "order": 5,
  "icon": "fa6-solid:cart-shopping",
  "price": "Starting from $3,000"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Every store is built to convert browsers into buyers with seamless checkout and smart merchandising."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Seamless checkout experience",
        description: "Friction-free purchasing that works on any device. Multiple payment options, guest checkout, and saved carts included."
      }, {
        title: "Product management made easy",
        description: "Add products, manage inventory, and update prices without touching code. Bulk imports supported."
      }, {
        title: "Secure payment processing",
        description: "PCI-compliant payment integration with Stripe, PayPal, or your preferred processor. Your customers' data stays safe."
      }, {
        title: "Mobile-first shopping",
        description: "Over 70% of online shopping happens on phones. Your store will look and work perfectly on every device."
      }, {
        title: "Shipping and tax automation",
        description: "Real-time shipping rates, automatic tax calculation, and integration with your fulfillment process."
      }, {
        title: "Marketing integrations",
        description: "Abandoned cart emails, discount codes, and customer segments to drive repeat purchases."
      }, {
        title: "Analytics and reporting",
        description: "Know your best-selling products, customer behavior, and revenue trends at a glance."
      }],
      quickFacts: [{
        title: "Timeline",
        description: "4-8 weeks to launch"
      }, {
        title: "What's included",
        description: "Design, store setup, training"
      }, {
        title: "Platform",
        description: "Shopify or custom build"
      }],
      contentHeading: {
        title: "Your products deserve a store that sells",
        before: "Stop losing sales to",
        text: "clunky checkout experiences.",
        after: "Start growing revenue.",
        description: "Every extra click, slow load, or confusing step costs you sales. We build stores that make buying effortless and keep customers coming back."
      },
      sidebar: {
        title: "Everything you need to sell online",
        eyebrow: "Why our stores convert",
        description: "Fast load times, intuitive navigation, and a checkout process so smooth customers forget they're buying online.",
        footIcon: "📈",
        footTitle: "Built to grow with you",
        footDescription: "From your first sale to your millionth, your store scales without rebuilding from scratch."
      },
      textContent: ["Most e-commerce sites fail because they focus on looking good instead of making sales. A beautiful store means nothing if customers abandon their carts because checkout is confusing, pages load slowly, or they can't find what they're looking for.", "We build stores optimized for conversions. That means fast load times that don't lose impatient shoppers, intuitive navigation that helps customers find products, and a checkout process so smooth they'll actually complete their purchase.", "Behind the scenes, you get the tools to actually run your business: easy product management, inventory tracking, shipping automation, and the analytics to understand what's working. Whether you're selling 10 products or 10,000, we build stores that grow with you."],
      benefitsHeading: "What Makes Our E-Commerce Sites Different",
      ctaTitle: "Ready to start selling online?",
      ctaHeading: {
        before: "Let's launch your",
        text: "online store",
        after: "today."
      },
      ctaDescription: "Stop losing sales to clunky checkout experiences. Get an e-commerce site that converts visitors into customers."
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

const url = "src/content/solutions/e-commerce-websites.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/e-commerce-websites.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/e-commerce-websites.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
