import { a as createComponent, d as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BujBp8IR.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BLCbETNX.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page Not Found", "description": "The page you requested does not exist.", "robots": "noindex, nofollow" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="p-[var(--spacing-md)] text-[var(--color-text)]">
You've found the wrong place.
</p> <a href="/">Go back home</a> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/404.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
