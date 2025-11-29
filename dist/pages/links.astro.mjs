import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BgHD-4FP.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$ContentRenderer, q as query, s as sortBy } from '../chunks/BaseLayout_BNcvlav2.mjs';
export { renderers } from '../renderers.mjs';

const $$Links = createComponent(($$result, $$props, $$slots) => {
  const filterByLinksMenu = (entry) => {
    const menus = entry.data.menu;
    if (Array.isArray(menus)) {
      return menus.some((m) => m.id === "links-menu");
    }
    return menus?.id === "links-menu";
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Links", "description": "All my important links in one place" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("menu-items").where(filterByLinksMenu).orderBy(sortBy("order", "desc")), "variant": "LinkTreeVariant", "title": "Links", "description": "All my important links in one place" })} ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/links.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/links.astro";
const $$url = "/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Links,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
