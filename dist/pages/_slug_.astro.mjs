import { c as createAstro, a as createComponent, d as renderComponent, e as renderTemplate } from '../chunks/astro/server_CDqnDASo.mjs';
import 'piccolore';
import { p as prepareItemPageData, g as generateItemPaths, b as buildRootLevelParams, r as rootLevelFilter } from '../chunks/itemPageHelpers_BuDc6o8X.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://https://griffinswebservices.com");
async function getStaticPaths() {
  return generateItemPaths(rootLevelFilter, buildRootLevelParams);
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const {
    LayoutComponent,
    Content,
    entry,
    collectionName,
    collectionMeta,
    seoProps
  } = await prepareItemPageData(Astro2.props);
  return renderTemplate`${renderComponent($$result, "LayoutComponent", LayoutComponent, { "entry": entry, "collection": collectionName, "collectionMeta": collectionMeta, "seoProps": seoProps, "Content": Content, ...collectionMeta })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/[slug].astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
