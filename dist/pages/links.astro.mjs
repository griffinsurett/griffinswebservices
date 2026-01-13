import { a as createComponent, d as renderComponent, e as renderTemplate } from '../chunks/astro/server_CJgvfkPK.mjs';
import 'piccolore';
import { A as $$BaseLayout, $ as $$ContentRenderer, r as related } from '../chunks/BaseLayout_BXen9sOm.mjs';
export { renderers } from '../renderers.mjs';

const $$Links = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Links", "description": "All my important links in one place" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": related("menu-items", "menu", "links-menu"), "variant": "LinkTreeVariant", "title": "Links", "description": "All my important links in one place" })} ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/pages/links.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/pages/links.astro";
const $$url = "/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Links,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
