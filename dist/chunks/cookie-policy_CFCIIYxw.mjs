import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { s as siteData } from './siteData_DTT4mimC.mjs';
import { $ as $$LegalContactSection } from './LegalContactSection_ZCHw2_Sd.mjs';
import 'clsx';

const frontmatter = {
  "title": "Cookie Policy",
  "description": "How we use cookies",
  "publishDate": "2025-11-14T00:00:00.000Z",
  "effectiveDate": "2025-12-14T00:00:00.000Z",
  "order": 1,
  "seo": {
    "metaTitle": "Cookie Policy",
    "metaDescription": "How we use cookies and tracking technologies"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-are-cookies",
    "text": "What Are Cookies?"
  }, {
    "depth": 2,
    "slug": "how-we-use-cookies",
    "text": "How We Use Cookies"
  }, {
    "depth": 2,
    "slug": "types-of-cookies",
    "text": "Types of Cookies"
  }, {
    "depth": 2,
    "slug": "managing-cookies",
    "text": "Managing Cookies"
  }, {
    "depth": 2,
    "slug": "detected-cookies",
    "text": "Detected Cookies"
  }, {
    "depth": 2,
    "slug": "your-rights--consent",
    "text": "Your Rights & Consent"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["For details on how we collect and use all personal data, see our ", createVNode(_components.a, {
        href: "/privacy-policy",
        children: "Privacy Policy"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "what-are-cookies",
      children: "What Are Cookies?"
    }), "\n", createVNode(_components.p, {
      children: "Cookies are small text files placed by your browser when you visit a\nwebsite. They store data such as session identifiers, preferences, and\nanalytics."
    }), "\n", createVNode(_components.h2, {
      id: "how-we-use-cookies",
      children: "How We Use Cookies"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Ensure core site functionality (e.g., form submissions)."
      }), "\n", createVNode(_components.li, {
        children: "Remember your preferences (language, theme)."
      }), "\n", createVNode(_components.li, {
        children: "Measure and analyze site traffic."
      }), "\n", createVNode(_components.li, {
        children: "Deliver personalized advertising (with consent)."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "types-of-cookies",
      children: "Types of Cookies"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Necessary:"
        }), " Essential for site operation."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Preferences:"
        }), " Store your choices."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Statistics:"
        }), " Collect anonymous usage data."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Marketing:"
        }), " Track for relevant ads."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "managing-cookies",
      children: "Managing Cookies"
    }), "\n", createVNode(_components.p, {
      children: "You can disable cookies via your browser settings. Please note that some\nfeatures may not work correctly if cookies are disabled."
    }), "\n", createVNode(_components.h2, {
      id: "detected-cookies",
      children: "Detected Cookies"
    }), "\n", createVNode(_components.p, {
      children: ["This table lists every cookie set by your browser for ", siteData.title, ".\nIt’s generated dynamically—any new cookies will appear automatically."]
    }), "\n", createVNode("div", {
      id: "cookie-table-container",
      children: createVNode("p", {
        children: "Loading cookies…"
      })
    }), "\n", createVNode(_components.h2, {
      id: "your-rights--consent",
      children: "Your Rights & Consent"
    }), "\n", createVNode(_components.p, {
      children: "Under GDPR, you must consent before non‑essential cookies are set. Under\nCCPA, you can opt out of the sale of your personal data."
    }), "\n", createVNode($$LegalContactSection, {
      showContactPageLink: false
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

const url = "src/content/legal/cookie-policy.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/legal/cookie-policy.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/legal/cookie-policy.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
