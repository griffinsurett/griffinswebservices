import { a as createComponent, c as createAstro, m as maybeRenderHead, b as addAttribute, e as renderTemplate } from './astro/server_CDqnDASo.mjs';
import 'piccolore';
import 'clsx';
import { f as find, b as formatPhoneNumber } from './BaseLayout_51FwKbUu.mjs';
import { s as siteData } from './hvac_DDMnHj8t.mjs';

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$LegalContactSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LegalContactSection;
  const {
    sectionNumber,
    heading = "Contact Us",
    introText = "If you have questions, reach us at:",
    showContactPageLink = true
  } = Astro2.props;
  const emailEntry = await find("contact-us", "email");
  const phoneEntry = await find("contact-us", "phone");
  return renderTemplate`${maybeRenderHead()}<h2>${sectionNumber ? `${sectionNumber}. ` : ""}${heading}</h2> <p>${introText}</p> <ul> ${emailEntry && renderTemplate`<li> <strong>Email:</strong>${" "} <a${addAttribute(`${emailEntry.data.linkPrefix || "mailto:"}${emailEntry.data.title}`, "href")} class="text-primary underline hover:text-primary-700"> ${emailEntry.data.title} </a> </li>`} ${phoneEntry && renderTemplate`<li> <strong>Phone:</strong>${" "} <a${addAttribute(`${phoneEntry.data.linkPrefix || "tel:"}${phoneEntry.data.title}`, "href")} class="text-primary underline hover:text-primary-700"> ${formatPhoneNumber(phoneEntry.data.title)} </a> </li>`} ${renderTemplate`<li> <strong>Location:</strong> ${siteData.location} </li>`} ${showContactPageLink && renderTemplate`<li> <strong>Visit:</strong>${" "} <a href="/contact" class="text-primary underline hover:text-primary-700">
Contact Page
</a> </li>`} </ul>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/integrations/preferences/consent/components/PrivacyPolicy/LegalContactSection.astro", void 0);

export { $$LegalContactSection as $ };
