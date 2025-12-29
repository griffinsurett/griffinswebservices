import { a as createComponent, c as createAstro, m as maybeRenderHead, d as renderComponent, b as addAttribute, e as renderTemplate, g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { s as siteData } from './siteData_DTT4mimC.mjs';
import 'piccolore';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { L as optOutOfSale, j as find, w as formatPhoneNumber } from './BaseLayout_DpejhLLs.mjs';
import { $ as $$LegalContactSection } from './LegalContactSection_ZCHw2_Sd.mjs';
import 'clsx';

function OptOutButton() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleOptOut = () => {
    optOutOfSale();
    setShowConfirmation(true);
    setTimeout(() => window.location.reload(), 1500);
  };
  if (showConfirmation) {
    return /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border-2 border-green-600 rounded-lg p-6", children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold text-green-900 text-lg", children: "✅ Success!" }),
      /* @__PURE__ */ jsx("p", { className: "text-green-800 text-sm mt-2", children: "You've opted out. Non-essential cookies disabled. Reloading..." })
    ] });
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleOptOut,
      className: "bg-primary text-bg px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors",
      type: "button",
      children: "🚫 Opt Out of Data Sharing"
    }
  );
}

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$CCPARights = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CCPARights;
  const { sectionNumber } = Astro2.props;
  const emailEntry = await find("contact-us", "email");
  const phoneEntry = await find("contact-us", "phone");
  return renderTemplate`${maybeRenderHead()}<div id="ccpa-rights" class="border-4 border-primary rounded-xl p-8 my-16 bg-primary/10"> <h2 class="text-3xl font-bold text-primary mt-0"> ${sectionNumber ? `${sectionNumber}. ` : ""}California Privacy Rights (CCPA)
</h2> <p class="text-xl font-semibold text-primary">
Do Not Sell or Share My Personal Information
</p> <h3>What Does "Sale" or "Sharing" Mean?</h3> <p>
Under California law (CCPA/CPRA), "sale" or "sharing" means making your
    personal information available to third parties in exchange for anything of
    value, including for advertising or analytics purposes.
</p> <h3>What We Share</h3> <p>When you enable certain features, we may share data with:</p> <ul> <li> <strong>Google Translate</strong> — Translation services (functional cookies)
</li> <li> <strong>Google Analytics</strong> — Site analytics (performance cookies)
</li> <li> <strong>Advertising Networks</strong> — Facebook, Google Ads (targeting cookies)
</li> </ul> <div class="bg-bg border-2 border-primary rounded-lg p-6 my-6"> <h3 class="mt-0">Opt Out Now</h3> <p class="mb-4">
Click below to instantly disable all non-essential cookies and stop data
      sharing:
</p> ${renderComponent($$result, "OptOutButton", OptOutButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/integrations/preferences/consent/components/OptOutButton", "client:component-export": "default" })} </div> <div class="bg-text/5 border-2 border-surface rounded-lg p-6 my-6"> <h3 class="mt-0">Other Ways to Opt Out</h3> <div class="mb-4"> <p class="font-semibold mb-2">Manage Individual Cookie Categories</p> <button id="open-cookie-preferences" class="bg-bg border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/10 transition-colors" type="button">
🍪 Cookie Settings
</button> <p class="text-sm text-text mt-2">
Choose which types of cookies to enable or disable individually.
</p> </div> <div> <p class="font-semibold mb-2">Use "Do Not Track" in Your Browser</p> <p class="text-sm mb-2">
Enable "Do Not Track" in your browser settings. We automatically honor
        this signal.
</p> <details class="text-sm"> <summary class="cursor-pointer text-primary hover:text-primary-700 font-semibold">
How to enable Do Not Track →
</summary> <ul class="mt-2 space-y-1 ml-4 text-text"> <li> <strong>Chrome:</strong> Settings → Privacy and security → "Do Not Track"
</li> <li> <strong>Firefox:</strong> Settings → Privacy & Security → "Do Not Track"
</li> <li> <strong>Safari:</strong> Preferences → Privacy → "Ask websites not to
            track me"
</li> <li><strong>Edge:</strong> Settings → Privacy → "Do Not Track"</li> </ul> </details> </div> </div> <h3>Your California Privacy Rights</h3> <p>If you're a California resident, you have these rights:</p> <ul> <li> <strong>Right to Know:</strong> Request disclosure of what personal information
      we've collected about you in the past 12 months.
</li> <li> <strong>Right to Delete:</strong> Request deletion of your personal information,
      subject to certain exceptions.
</li> <li> <strong>Right to Opt-Out:</strong> Stop the sale or sharing of your personal
      information (use the button above).
</li> <li> <strong>Right to Correct:</strong> Request correction of inaccurate personal
      information.
</li> <li> <strong>Right to Non-Discrimination:</strong> We won't discriminate against
      you for exercising your rights. Same service, same pricing.
</li> </ul> <h3>Categories of Personal Information We Collect</h3> <ul> <li><strong>Identifiers:</strong> Name, email address, IP address</li> <li> <strong>Internet Activity:</strong> Pages visited, clicks, browsing behavior
</li> <li> <strong>Geolocation:</strong> Approximate location derived from IP address
</li> <li> <strong>Sensitive Information:</strong> We do NOT collect SSN, financial data,
      or health information
</li> </ul> <h3>How to Exercise Your Rights</h3> <p>
To request access to your data, request deletion, or ask questions about
    your privacy:
</p> <div class="bg-bg border-2 border-surface rounded-lg p-6 mt-4"> <p class="font-semibold mb-3">Contact Us</p> <ul class="space-y-2 mb-4"> ${emailEntry && renderTemplate`<li> <strong>Email:</strong>${" "} <a${addAttribute(`${emailEntry.data.linkPrefix || "mailto:"}${emailEntry.data.title}`, "href")} class="text-primary underline hover:text-primary-700"> ${emailEntry.data.title} </a> </li>`} ${phoneEntry && renderTemplate`<li> <strong>Phone:</strong>${" "} <a${addAttribute(`${phoneEntry.data.linkPrefix || "tel:"}${phoneEntry.data.title}`, "href")} class="text-primary underline hover:text-primary-700"> ${formatPhoneNumber(phoneEntry.data.title)} </a> </li>`} <li> <strong>Subject Line:</strong> "CCPA Request - [Right to Know/Delete/Correct]"
</li> <li> <strong>Include:</strong> Your name, email, and description of your request
</li> <li><strong>Response Time:</strong> We'll respond within 45 days</li> </ul> <a href="/contact" class="inline-block bg-primary text-bg px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors">
Contact Us About Privacy →
</a> </div> <div class="bg-yellow-50 border-2 border-yellow-600 rounded-lg p-4 mt-4"> <p class="text-sm text-yellow-900 mb-2"> <strong>⚠️ Verification Required</strong> </p> <p class="text-sm text-yellow-900 mb-0">
To protect your privacy, we must verify your identity before processing
      requests. We may ask you to confirm recent interactions with our site or
      provide additional identifying information. Authorized agents must provide
      proof of authorization.
</p> </div> </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/integrations/preferences/consent/components/PrivacyPolicy/CCPARights.astro", void 0);

const frontmatter = {
  "title": "Privacy Policy",
  "description": "How we collect and use your information",
  "publishDate": "2025-11-14T00:00:00.000Z",
  "effectiveDate": "2025-12-14T00:00:00.000Z",
  "order": 0,
  "seo": {
    "metaTitle": "Privacy Policy",
    "metaDescription": "How we collect and use your information"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "sectionnumber-introduction",
    "text": "++sectionNumber. Introduction"
  }, {
    "depth": 2,
    "slug": "sectionnumber-information-we-collect",
    "text": "++sectionNumber. Information We Collect"
  }, {
    "depth": 2,
    "slug": "sectionnumber-how-we-use-your-information",
    "text": "++sectionNumber. How We Use Your Information"
  }, {
    "depth": 2,
    "slug": "sectionnumber-third-party-services",
    "text": "++sectionNumber. Third-Party Services"
  }, {
    "depth": 2,
    "slug": "sectionnumber-cookies--tracking",
    "text": "++sectionNumber. Cookies & Tracking"
  }, {
    "depth": 2,
    "slug": "sectionnumber-data-security",
    "text": "++sectionNumber. Data Security"
  }, {
    "depth": 2,
    "slug": "sectionnumber-changes-to-this-policy",
    "text": "++sectionNumber. Changes to This Policy"
  }];
}
let sectionNumber = 0;
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
    children: [createVNode(_components.h2, {
      id: "sectionnumber-introduction",
      children: [++sectionNumber, ". Introduction"]
    }), "\n", createVNode(_components.p, {
      children: ["Welcome to ", siteData.title, ". We respect your privacy and are committed to\nprotecting your personal information. This Privacy Policy explains how we\ncollect, use, disclose, and safeguard your information when you visit our website."]
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-information-we-collect",
      children: [++sectionNumber, ". Information We Collect"]
    }), "\n", createVNode(_components.p, {
      children: ["When you interact with ", siteData.title, ", we may collect:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Contact Information:"
        }), " Name, email address, and phone number when you submit forms or contact us."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Technical Data:"
        }), " IP address, browser type, device information, and pages visited (via cookies when you consent)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Usage Data:"
        }), " How you interact with our site, pages viewed, time spent, and referral sources (via cookies when you consent)."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-how-we-use-your-information",
      children: [++sectionNumber, ". How We Use Your Information"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "To provide and maintain our services"
      }), "\n", createVNode(_components.li, {
        children: "To respond to your inquiries and requests"
      }), "\n", createVNode(_components.li, {
        children: "To improve our website and user experience"
      }), "\n", createVNode(_components.li, {
        children: "To analyze site performance and usage (with consent)"
      }), "\n", createVNode(_components.li, {
        children: "To send marketing communications (with consent)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-third-party-services",
      children: [++sectionNumber, ". Third-Party Services"]
    }), "\n", createVNode(_components.p, {
      children: "With your consent, we may share information with:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Google Translate:"
        }), " For website translation (functional cookies)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Google Analytics:"
        }), " For site analytics (performance cookies, if enabled)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Advertising Networks:"
        }), " Facebook, Google Ads (targeting cookies, if enabled)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "We use Vercel for hosting and Vercel Analytics for basic traffic metrics.\nThese services are privacy-first and do not use cookies or track personal information."
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-cookies--tracking",
      children: [++sectionNumber, ". Cookies & Tracking"]
    }), "\n", createVNode(_components.p, {
      children: ["We use cookies and similar technologies to enhance your experience. You can\nmanage your cookie preferences at any time. For full details, see our\n", createVNode(_components.a, {
        href: "/cookie-policy",
        children: "Cookie Policy"
      }), "."]
    }), "\n", createVNode($$CCPARights, {
      sectionNumber: ++sectionNumber
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-data-security",
      children: [++sectionNumber, ". Data Security"]
    }), "\n", createVNode(_components.p, {
      children: "We implement reasonable technical and organizational measures to protect\nyour data against unauthorized access, disclosure, alteration, or destruction.\nHowever, no method of transmission over the Internet is 100% secure."
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-changes-to-this-policy",
      children: [++sectionNumber, ". Changes to This Policy"]
    }), "\n", createVNode(_components.p, {
      children: "We may update this Privacy Policy from time to time. Changes will be posted\non this page with a revised “Effective date.” We encourage you to review\nthis policy periodically. Your continued use of our services after any changes\nindicates your acceptance of the updated policy."
    }), "\n", createVNode($$LegalContactSection, {
      sectionNumber: ++sectionNumber,
      introText: "If you have questions about this Privacy Policy or wish to exercise your rights, contact us:"
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

const url = "src/content/legal/privacy-policy.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/legal/privacy-policy.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/legal/privacy-policy.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, sectionNumber, url };
