import { a as createComponent, c as createAstro, m as maybeRenderHead, e as renderTemplate, f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CDqnDASo.mjs';
import { s as siteData } from './speakers_ClnnXv1O.mjs';
import 'piccolore';
import 'clsx';
import { $ as $$LegalContactSection } from './LegalContactSection_JqV8VVLI.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SITE_DOMAIN": "https://griffinswebservices.com", "SITE": "https://https://griffinswebservices.com", "SSR": true};
const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$IntegrationsSnippet = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IntegrationsSnippet;
  const {
    number = "",
    title = ""
  } = Astro2.props;
  const extractProviderName = (url) => {
    try {
      const urlObj = new URL(url);
      const hostParts = urlObj.host.split(".");
      return hostParts[0] || null;
    } catch {
      return null;
    }
  };
  const env = Object.assign(__vite_import_meta_env__, { _: process.env._ });
  const providers = Array.from(
    new Set(
      Object.entries(env).filter((entry) => {
        const [key, value] = entry;
        return key.startsWith("PUBLIC_INTEGRATION_") && typeof value === "string";
      }).map(([, url]) => extractProviderName(url)).filter((name) => name !== null)
    )
  );
  const capitalizeProvider = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  return renderTemplate`${providers.length > 0 ? renderTemplate`${maybeRenderHead()}<div><h2 class="flex items-baseline">${number && renderTemplate`<span class="mr-2">${number}</span>`}${title && renderTemplate`<span>${title}</span>`}</h2><p>We integrate with the following companies for forms, CRM, analytics, etc.:</p><ul class="list-disc ml-6">${providers.map((name) => renderTemplate`<li>${capitalizeProvider(name)}</li>`)}</ul><p class="mt-2">
None of these providers store data on our servers; they forward
      submissions/events directly to us.
</p></div>` : null}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/integrations/preferences/consent/components/PrivacyPolicy/IntegrationsSnippet.astro", void 0);

const frontmatter = {
  "title": "Terms of Service",
  "description": "Terms and conditions for using our services",
  "publishDate": "2025-11-14T00:00:00.000Z",
  "effectiveDate": "2025-12-14T00:00:00.000Z",
  "order": 2,
  "seo": {
    "metaTitle": "Terms of Service",
    "metaDescription": "Terms and conditions for using our services"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "sectionnumber-agreement-to-terms",
    "text": "++sectionNumber. Agreement to Terms"
  }, {
    "depth": 2,
    "slug": "sectionnumber-description-of-service",
    "text": "++sectionNumber. Description of Service"
  }, {
    "depth": 2,
    "slug": "sectionnumber-user-accounts",
    "text": "++sectionNumber. User Accounts"
  }, {
    "depth": 3,
    "slug": "sectionnumber1-account-creation",
    "text": "sectionNumber.1 Account Creation"
  }, {
    "depth": 3,
    "slug": "sectionnumber2-account-security",
    "text": "sectionNumber.2 Account Security"
  }, {
    "depth": 2,
    "slug": "sectionnumber-acceptable-use",
    "text": "++sectionNumber. Acceptable Use"
  }, {
    "depth": 2,
    "slug": "sectionnumber-intellectual-property",
    "text": "++sectionNumber. Intellectual Property"
  }, {
    "depth": 3,
    "slug": "sectionnumber1-our-content",
    "text": "sectionNumber.1 Our Content"
  }, {
    "depth": 3,
    "slug": "sectionnumber2-user-content",
    "text": "sectionNumber.2 User Content"
  }, {
    "depth": 3,
    "slug": "sectionnumber3-trademarks",
    "text": "sectionNumber.3 Trademarks"
  }, {
    "depth": 2,
    "slug": "sectionnumber-payment-terms",
    "text": "++sectionNumber. Payment Terms"
  }, {
    "depth": 3,
    "slug": "sectionnumber1-pricing",
    "text": "sectionNumber.1 Pricing"
  }, {
    "depth": 3,
    "slug": "sectionnumber2-billing",
    "text": "sectionNumber.2 Billing"
  }, {
    "depth": 3,
    "slug": "sectionnumber3-refunds",
    "text": "sectionNumber.3 Refunds"
  }, {
    "depth": 3,
    "slug": "sectionnumber4-taxes",
    "text": "sectionNumber.4 Taxes"
  }, {
    "depth": 2,
    "slug": "sectionnumber-data-and-privacy",
    "text": "++sectionNumber. Data and Privacy"
  }, {
    "depth": 2,
    "slug": "sectionnumber-disclaimers-and-limitations-of-liability",
    "text": "++sectionNumber. Disclaimers and Limitations of Liability"
  }, {
    "depth": 3,
    "slug": "sectionnumber1-service-as-is",
    "text": "sectionNumber.1 Service “As Is”"
  }, {
    "depth": 3,
    "slug": "sectionnumber2-no-guarantee-of-availability",
    "text": "sectionNumber.2 No Guarantee of Availability"
  }, {
    "depth": 3,
    "slug": "sectionnumber3-limitation-of-liability",
    "text": "sectionNumber.3 Limitation of Liability"
  }, {
    "depth": 2,
    "slug": "sectionnumber-termination",
    "text": "++sectionNumber. Termination"
  }, {
    "depth": 3,
    "slug": "sectionnumber1-your-rights",
    "text": "sectionNumber.1 Your Rights"
  }, {
    "depth": 3,
    "slug": "sectionnumber2-our-rights",
    "text": "sectionNumber.2 Our Rights"
  }, {
    "depth": 3,
    "slug": "sectionnumber3-effect-of-termination",
    "text": "sectionNumber.3 Effect of Termination"
  }, {
    "depth": 2,
    "slug": "sectionnumber-dispute-resolution",
    "text": "++sectionNumber. Dispute Resolution"
  }, {
    "depth": 3,
    "slug": "sectionnumber1-informal-resolution",
    "text": "sectionNumber.1 Informal Resolution"
  }, {
    "depth": 3,
    "slug": "sectionnumber2-arbitration-agreement",
    "text": "sectionNumber.2 Arbitration Agreement"
  }, {
    "depth": 3,
    "slug": "sectionnumber3-class-action-waiver",
    "text": "sectionNumber.3 Class Action Waiver"
  }, {
    "depth": 3,
    "slug": "sectionnumber4-governing-law",
    "text": "sectionNumber.4 Governing Law"
  }, {
    "depth": 2,
    "slug": "sectionnumber-changes-to-terms",
    "text": "++sectionNumber. Changes to Terms"
  }, {
    "depth": 2,
    "slug": "sectionnumber-severability",
    "text": "++sectionNumber. Severability"
  }, {
    "depth": 2,
    "slug": "sectionnumber-entire-agreement",
    "text": "++sectionNumber. Entire Agreement"
  }, {
    "depth": 2,
    "slug": "sectionnumber-waiver",
    "text": "++sectionNumber. Waiver"
  }, {
    "depth": 2,
    "slug": "sectionnumber-assignment",
    "text": "++sectionNumber. Assignment"
  }];
}
let sectionNumber = 0;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Please read these Terms of Service carefully before using our services."
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-agreement-to-terms",
      children: [++sectionNumber, ". Agreement to Terms"]
    }), "\n", createVNode(_components.p, {
      children: ["By accessing or using ", createVNode(_components.strong, {
        children: siteData.title
      }), " (the “Service”), you\nagree to be bound by these Terms of Service (“Terms”). If you disagree with\nany part of these terms, you may not access the Service."]
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-description-of-service",
      children: [++sectionNumber, ". Description of Service"]
    }), "\n", createVNode(_components.p, {
      children: [siteData.title, " provides ", siteData.description, ". We reserve the right to\nmodify, suspend, or discontinue any aspect of the Service at any time\nwithout prior notice."]
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-user-accounts",
      children: [++sectionNumber, ". User Accounts"]
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber1-account-creation",
      children: [sectionNumber, ".1 Account Creation"]
    }), "\n", createVNode(_components.p, {
      children: "When you create an account with us, you must provide accurate, complete,\nand current information. Failure to do so constitutes a breach of these\nTerms, which may result in immediate termination of your account."
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber2-account-security",
      children: [sectionNumber, ".2 Account Security"]
    }), "\n", createVNode(_components.p, {
      children: "You are responsible for maintaining the confidentiality of your account\ncredentials and for all activities that occur under your account. You\nagree to:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Use a strong, unique password"
      }), "\n", createVNode(_components.li, {
        children: "Not share your account with others"
      }), "\n", createVNode(_components.li, {
        children: "Notify us immediately of any unauthorized access"
      }), "\n", createVNode(_components.li, {
        children: "Accept responsibility for all account activity"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-acceptable-use",
      children: [++sectionNumber, ". Acceptable Use"]
    }), "\n", createVNode(_components.p, {
      children: "You agree not to use the Service to:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Violate any applicable laws or regulations"
      }), "\n", createVNode(_components.li, {
        children: "Infringe on intellectual property rights"
      }), "\n", createVNode(_components.li, {
        children: "Transmit harmful code or viruses"
      }), "\n", createVNode(_components.li, {
        children: "Harass, abuse, or harm others"
      }), "\n", createVNode(_components.li, {
        children: "Attempt to gain unauthorized access"
      }), "\n", createVNode(_components.li, {
        children: "Impersonate any person or entity"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-intellectual-property",
      children: [++sectionNumber, ". Intellectual Property"]
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber1-our-content",
      children: [sectionNumber, ".1 Our Content"]
    }), "\n", createVNode(_components.p, {
      children: ["All content, features, and functionality of the Service are owned by ", siteData.legalName, "\nand are protected by international copyright, trademark, and other intellectual property laws."]
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber2-user-content",
      children: [sectionNumber, ".2 User Content"]
    }), "\n", createVNode(_components.p, {
      children: "You retain ownership of content you submit. By posting content, you grant us\na worldwide, non-exclusive, royalty-free license to use, reproduce, and display\nyour content in connection with the Service."
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber3-trademarks",
      children: [sectionNumber, ".3 Trademarks"]
    }), "\n", createVNode(_components.p, {
      children: [siteData.title, " and related logos are trademarks of ", siteData.legalName, ".\nYou may not use our trademarks without our prior written permission."]
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-payment-terms",
      children: [++sectionNumber, ". Payment Terms"]
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber1-pricing",
      children: [sectionNumber, ".1 Pricing"]
    }), "\n", createVNode(_components.p, {
      children: "Certain aspects of the Service may be provided for a fee. You agree to pay\nall applicable fees as described at the time of purchase. All fees are in\nU.S. Dollars unless otherwise stated."
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber2-billing",
      children: [sectionNumber, ".2 Billing"]
    }), "\n", createVNode(_components.p, {
      children: "For subscription services, you authorize us to charge your payment method\non a recurring basis. We will notify you of any price changes at least 30\ndays in advance."
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber3-refunds",
      children: [sectionNumber, ".3 Refunds"]
    }), "\n", createVNode(_components.p, {
      children: "Refund policies vary by service type. Please contact us for specific\nrefund information regarding your purchase."
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber4-taxes",
      children: [sectionNumber, ".4 Taxes"]
    }), "\n", createVNode(_components.p, {
      children: "You are responsible for any applicable taxes, duties, or government\ncharges associated with your use of the Service."
    }), "\n", createVNode($$IntegrationsSnippet, {
      number: `${++sectionNumber}.`,
      title: "Third-Party Services"
    }), "\n", createVNode(_components.p, {
      children: "We are not responsible for the practices or content of third-party\nservices. Your use of third-party services is at your own risk and subject\nto their respective terms and privacy policies."
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-data-and-privacy",
      children: [++sectionNumber, ". Data and Privacy"]
    }), "\n", createVNode(_components.p, {
      children: ["Your use of the Service is also governed by our ", createVNode(_components.a, {
        href: "/privacy-policy",
        children: "Privacy Policy"
      }), " and ", createVNode(_components.a, {
        href: "/cookie-policy",
        children: "Cookie Policy"
      }), ". Please\nreview these documents to understand how we collect, use, and protect your\ninformation."]
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-disclaimers-and-limitations-of-liability",
      children: [++sectionNumber, ". Disclaimers and Limitations of Liability"]
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber1-service-as-is",
      children: [sectionNumber, ".1 Service “As Is”"]
    }), "\n", createVNode(_components.p, {
      children: "THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT\nWARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT\nLIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR\nPURPOSE, OR NON-INFRINGEMENT."
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber2-no-guarantee-of-availability",
      children: [sectionNumber, ".2 No Guarantee of Availability"]
    }), "\n", createVNode(_components.p, {
      children: "We do not guarantee that the Service will be uninterrupted, timely,\nsecure, or error-free. We may experience hardware, software, or other\nproblems that could lead to data loss or service interruptions."
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber3-limitation-of-liability",
      children: [sectionNumber, ".3 Limitation of Liability"]
    }), "\n", createVNode(_components.p, {
      children: ["TO THE MAXIMUM EXTENT PERMITTED BY LAW, ", siteData.legalName.toUpperCase(), " SHALL NOT BE\nLIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE\nDAMAGES ARISING OUT OF YOUR USE OF THE SERVICE."]
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-termination",
      children: [++sectionNumber, ". Termination"]
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber1-your-rights",
      children: [sectionNumber, ".1 Your Rights"]
    }), "\n", createVNode(_components.p, {
      children: "You may terminate your account at any time by contacting us or using\naccount settings. Upon termination, your right to use the Service will\nimmediately cease."
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber2-our-rights",
      children: [sectionNumber, ".2 Our Rights"]
    }), "\n", createVNode(_components.p, {
      children: "We may terminate or suspend your account immediately, without prior notice,\nfor any reason, including if you breach these Terms. We reserve the right\nto refuse service to anyone for any reason."
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber3-effect-of-termination",
      children: [sectionNumber, ".3 Effect of Termination"]
    }), "\n", createVNode(_components.p, {
      children: "Upon termination, we may delete your account data, though some information\nmay be retained as required by law or for legitimate business purposes."
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-dispute-resolution",
      children: [++sectionNumber, ". Dispute Resolution"]
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber1-informal-resolution",
      children: [sectionNumber, ".1 Informal Resolution"]
    }), "\n", createVNode(_components.p, {
      children: "If you have a dispute, please contact us first to attempt an informal\nresolution. Most disputes can be resolved quickly and amicably through\ndirect communication."
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber2-arbitration-agreement",
      children: [sectionNumber, ".2 Arbitration Agreement"]
    }), "\n", createVNode(_components.p, {
      children: "Any dispute arising from these Terms or the Service will be resolved\nthrough binding arbitration rather than in court, except that you may\nassert claims in small claims court if your claims qualify."
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber3-class-action-waiver",
      children: [sectionNumber, ".3 Class Action Waiver"]
    }), "\n", createVNode(_components.p, {
      children: ["You and ", siteData.legalName, " agree that any proceedings will be conducted only\non an individual basis and not as a class, consolidated, or representative\naction."]
    }), "\n", createVNode(_components.h3, {
      id: "sectionnumber4-governing-law",
      children: [sectionNumber, ".4 Governing Law"]
    }), "\n", createVNode(_components.p, {
      children: "These Terms shall be governed by and construed in accordance with the laws\nof the United States, without regard to its conflict of law provisions."
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-changes-to-terms",
      children: [++sectionNumber, ". Changes to Terms"]
    }), "\n", createVNode(_components.p, {
      children: "We reserve the right to modify these Terms at any time. We will notify you\nof material changes by:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Posting the updated Terms with a new “Effective Date”"
      }), "\n", createVNode(_components.li, {
        children: "Sending an email to your registered email address"
      }), "\n", createVNode(_components.li, {
        children: "Displaying a prominent notice on the Service"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Your continued use of the Service after changes take effect constitutes\nyour acceptance of the revised Terms. If you do not agree to the new\nTerms, you must stop using the Service."
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-severability",
      children: [++sectionNumber, ". Severability"]
    }), "\n", createVNode(_components.p, {
      children: "If any provision of these Terms is found to be unenforceable or invalid,\nthat provision will be limited or eliminated to the minimum extent\nnecessary, and the remaining provisions will remain in full force and\neffect."
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-entire-agreement",
      children: [++sectionNumber, ". Entire Agreement"]
    }), "\n", createVNode(_components.p, {
      children: ["These Terms, together with our Privacy Policy and Cookie Policy,\nconstitute the entire agreement between you and ", siteData.legalName, " regarding\nthe Service and supersede all prior agreements and understandings."]
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-waiver",
      children: [++sectionNumber, ". Waiver"]
    }), "\n", createVNode(_components.p, {
      children: "No waiver of any term of these Terms shall be deemed a further or\ncontinuing waiver of such term or any other term. Our failure to assert\nany right or provision under these Terms shall not constitute a waiver of\nsuch right or provision."
    }), "\n", createVNode(_components.h2, {
      id: "sectionnumber-assignment",
      children: [++sectionNumber, ". Assignment"]
    }), "\n", createVNode(_components.p, {
      children: "You may not assign or transfer these Terms or your rights under them\nwithout our prior written consent. We may assign these Terms to any\naffiliate or successor."
    }), "\n", createVNode($$LegalContactSection, {
      sectionNumber: ++sectionNumber,
      introText: "If you have questions about these Terms of Service, please contact us:"
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

const url = "src/content/legal/terms-of-service.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/legal/terms-of-service.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/legal/terms-of-service.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, sectionNumber, url };
