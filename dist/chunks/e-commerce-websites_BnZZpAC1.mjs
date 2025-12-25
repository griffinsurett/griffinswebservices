import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { $ as $$ContentSection } from './ContentSection_DV1EH2m0.mjs';
import { a as $$ContentRenderer } from './BaseLayout_BLCbETNX.mjs';
import 'clsx';

/*<div slot="bottom-section">
<ContentRenderer
query={query("stats")}
variant="StatsVariant"
/>
</div>*/
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
  "price": "Starting from $3,000",
  "features": [{
    "title": "Seamless checkout experience",
    "description": "Friction-free purchasing that works on any device. Multiple payment options, guest checkout, and saved carts included."
  }, {
    "title": "Product management made easy",
    "description": "Add products, manage inventory, and update prices without touching code. Bulk imports supported."
  }, {
    "title": "Secure payment processing",
    "description": "PCI-compliant payment integration with Stripe, PayPal, or your preferred processor. Your customers' data stays safe."
  }, {
    "title": "Mobile-first shopping",
    "description": "Over 70% of online shopping happens on phones. Your store will look and work perfectly on every device."
  }, {
    "title": "Shipping and tax automation",
    "description": "Real-time shipping rates, automatic tax calculation, and integration with your fulfillment process."
  }, {
    "title": "Marketing integrations",
    "description": "Abandoned cart emails, discount codes, and customer segments to drive repeat purchases."
  }, {
    "title": "Analytics and reporting",
    "description": "Know your best-selling products, customer behavior, and revenue trends at a glance."
  }],
  "benefits": [{
    "title": "Sell around the clock",
    "description": "Your store never closes. Customers can browse and buy any time, from anywhere in the world.",
    "icon": "fa6-solid:clock"
  }, {
    "title": "Recover lost sales",
    "description": "Abandoned cart emails and streamlined checkout capture revenue you'd otherwise lose.",
    "icon": "fa6-solid:cart-arrow-down"
  }, {
    "title": "Scale without rebuilding",
    "description": "From your first sale to your ten-thousandth, your store grows with you—no platform migrations needed.",
    "icon": "fa6-solid:rocket"
  }, {
    "title": "Manage inventory easily",
    "description": "Add products, update prices, and track stock levels yourself without touching code.",
    "icon": "fa6-solid:boxes-stacked"
  }, {
    "title": "Accept payments securely",
    "description": "PCI-compliant checkout with Stripe, PayPal, and other processors keeps customer data safe.",
    "icon": "fa6-solid:shield-halved"
  }, {
    "title": "Understand your customers",
    "description": "Built-in analytics show you best sellers, customer behavior, and revenue trends at a glance.",
    "icon": "fa6-solid:chart-pie"
  }],
  "quickFacts": [{
    "title": "Timeline",
    "description": "4-8 weeks to launch"
  }, {
    "title": "What's included",
    "description": "Design, store setup, training"
  }, {
    "title": "Platform",
    "description": "Shopify or custom build"
  }],
  "cta": {
    "title": "Ready to start selling online?",
    "heading": {
      "before": "Let's launch your",
      "text": "online store",
      "after": "today."
    },
    "buttons": [{
      "text": "Get Your Free Quote",
      "link": "#services-quote-hero"
    }, {
      "text": "See our work",
      "link": "#services-projects"
    }]
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode($$ContentSection, {
    heading: {
      title: "Your products deserve a store that sells",
      before: "Stop losing sales to",
      text: "clunky checkout experiences.",
      after: "Start growing revenue.",
      description: "Every extra click, slow load, or confusing step costs you sales. We build stores that make buying effortless and keep customers coming back."
    },
    primaryCTA: {
      text: "Get Your Free Quote",
      href: "#services-quote-hero",
      rightIcon: "lu:arrow-right"
    },
    secondaryCTA: {
      text: "See our work",
      href: "#services-projects"
    },
    sidebar: {
      icon: frontmatter.icon,
      title: "Everything you need to sell online",
      eyebrow: "Why our stores convert",
      description: "Fast load times, intuitive navigation, and a checkout process so smooth customers forget they're buying online.",
      footIcon: "📈",
      footTitle: "Built to grow with you",
      footDescription: "From your first sale to your millionth, your store scales without rebuilding from scratch.",
      features: frontmatter.features
    },
    children: [createVNode("div", {
      slot: "text",
      class: "space-y-6 text-lg text-muted",
      children: [createVNode("p", {
        children: createVNode(_components.p, {
          children: "Most e-commerce sites fail because they focus on looking good instead of making sales. A beautiful store means nothing if customers abandon their carts because checkout is confusing, pages load slowly, or they can’t find what they’re looking for."
        })
      }), createVNode("p", {
        children: createVNode(_components.p, {
          children: "We build stores optimized for conversions. That means fast load times that don’t lose impatient shoppers, intuitive navigation that helps customers find products, and a checkout process so smooth they’ll actually complete their purchase."
        })
      }), createVNode("p", {
        children: createVNode(_components.p, {
          children: "Behind the scenes, you get the tools to actually run your business: easy product management, inventory tracking, shipping automation, and the analytics to understand what’s working. Whether you’re selling 10 products or 10,000, we build stores that grow with you."
        })
      })]
    }), createVNode($$ContentRenderer, {
      slot: "quick-facts",
      items: frontmatter.quickFacts,
      variant: "QuickFactsVariant",
      columns: 3
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
  }) : _createMdxContent(props);
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
