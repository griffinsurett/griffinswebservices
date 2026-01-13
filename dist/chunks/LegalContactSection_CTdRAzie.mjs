import { a as createComponent, c as createAstro, m as maybeRenderHead, b as addAttribute, e as renderTemplate } from './astro/server_CJgvfkPK.mjs';
import 'piccolore';
import 'clsx';
import { y as find, h as formatPhoneNumber } from './BaseLayout_BXen9sOm.mjs';
import { s as siteData } from './siteData_1iA5IhsI.mjs';

const $$Astro = createAstro("https://griffinswebservices.com");
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
}, "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/integrations/preferences/consent/ui/PrivacyPolicy/LegalContactSection.astro", void 0);

export { $$LegalContactSection as $ };
