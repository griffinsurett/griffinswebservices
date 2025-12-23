import { c as createAstro, a as createComponent, d as renderComponent, e as renderTemplate } from '../chunks/astro/server_CDqnDASo.mjs';
import 'piccolore';
import { g as getCollectionMeta, w as shouldCollectionHavePage } from '../chunks/BaseLayout_BD8xUcJo.mjs';
import { d as getCollectionIndexLayoutPath, a as getLayoutComponent, e as buildCollectionSEOProps, c as getPageCollections } from '../chunks/layoutUtils_CvsjN2Jv.mjs';
import { readFileSync } from 'fs';
import { join } from 'path';
export { renderers } from '../renderers.mjs';

const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};

function getRawMDXContent(collectionName, fileName) {
  try {
    const filePath = join(process.cwd(), "src", "content", collectionName, `${fileName}.mdx`);
    return readFileSync(filePath, "utf-8");
  } catch (error) {
    return null;
  }
}
function hasContentAfterFrontmatter(rawContent) {
  const frontmatterEnd = rawContent.indexOf("---", 4);
  if (frontmatterEnd === -1) return false;
  const contentAfterFrontmatter = rawContent.substring(frontmatterEnd + 3).trim();
  return contentAfterFrontmatter.length > 0;
}
async function getMDXContentIfExists(collectionName, fileName = "_meta") {
  try {
    const rawContent = getRawMDXContent(collectionName, fileName);
    if (!rawContent) {
      return null;
    }
    const hasContent = hasContentAfterFrontmatter(rawContent);
    if (!hasContent) {
      return { Component: null, hasContent: false };
    }
    const mdxModule = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/about-us/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.G),"../content/about-us/our-difference.mdx": () => import('../chunks/our-difference_Di13w1SP.mjs'),"../content/about-us/our-focus.mdx": () => import('../chunks/our-focus_14Ox1m7V.mjs'),"../content/about-us/our-obsession.mdx": () => import('../chunks/our-obsession_J3duGi5U.mjs'),"../content/about-us/our-philosophy.mdx": () => import('../chunks/our-philosophy_CLjWI17z.mjs'),"../content/about-us/our-story.mdx": () => import('../chunks/our-story_B2Jjw6ca.mjs'),"../content/authors/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.H),"../content/benefits/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.J),"../content/benefits/designed-to-grow-with-you.mdx": () => import('../chunks/designed-to-grow-with-you_CXXdVzJH.mjs'),"../content/benefits/designed-to-stand-out-on-every-device.mdx": () => import('../chunks/designed-to-stand-out-on-every-device_R8PO_yA7.mjs'),"../content/benefits/future-ready-ai-prepared.mdx": () => import('../chunks/future-ready-ai-prepared_CUW78LDO.mjs'),"../content/benefits/lightning-fast-websites.mdx": () => import('../chunks/lightning-fast-websites_DyVFnspj.mjs'),"../content/benefits/security-minded-by-design.mdx": () => import('../chunks/security-minded-by-design_CY9wSWDZ.mjs'),"../content/benefits/seo-from-the-foundations.mdx": () => import('../chunks/seo-from-the-foundations_DgDOF_Ng.mjs'),"../content/benefits/support-that-sticks-around.mdx": () => import('../chunks/support-that-sticks-around_KoLAvoyY.mjs'),"../content/blog/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.K),"../content/blog/first-post.mdx": () => import('../chunks/first-post_BAR4DeZC.mjs'),"../content/capabilities/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.L),"../content/capabilities/accessibility-compliance.mdx": () => import('../chunks/accessibility-compliance_Bbmtkmpw.mjs'),"../content/capabilities/analytics-conversion-optimization.mdx": () => import('../chunks/analytics-conversion-optimization_DKYIU-AV.mjs'),"../content/capabilities/back-end-development.mdx": () => import('../chunks/back-end-development_DoKTMV8H.mjs'),"../content/capabilities/brand-identity-design.mdx": () => import('../chunks/brand-identity-design_B2dT1jwy.mjs'),"../content/capabilities/browser-extension-development.mdx": () => import('../chunks/browser-extension-development_BZ_cRLnF.mjs'),"../content/capabilities/design-systems.mdx": () => import('../chunks/design-systems_gQ5XQcXW.mjs'),"../content/capabilities/e-commerce-development.mdx": () => import('../chunks/e-commerce-development_CEfQLB1p.mjs'),"../content/capabilities/front-end-development.mdx": () => import('../chunks/front-end-development_8O-Hlzba.mjs'),"../content/capabilities/full-stack-web-development.mdx": () => import('../chunks/full-stack-web-development_DV_w1eEJ.mjs'),"../content/capabilities/managed-website-hosting.mdx": () => import('../chunks/managed-website-hosting_ok5kmizM.mjs'),"../content/capabilities/performance-optimization.mdx": () => import('../chunks/performance-optimization_neayMN_t.mjs'),"../content/capabilities/seo.mdx": () => import('../chunks/seo_D3-uvtK-.mjs'),"../content/capabilities/technical-support.mdx": () => import('../chunks/technical-support_CDXxVjzF.mjs'),"../content/capabilities/uptime-reliability-monitoring.mdx": () => import('../chunks/uptime-reliability-monitoring_CpDa0v0g.mjs'),"../content/capabilities/web-design.mdx": () => import('../chunks/web-design_Bv2IATw_.mjs'),"../content/capabilities/web-development.mdx": () => import('../chunks/web-development_DYsa2fCl.mjs'),"../content/capabilities/webmaster-services.mdx": () => import('../chunks/webmaster-services_Cp6slKK8.mjs'),"../content/capabilities/website-maintenance-support.mdx": () => import('../chunks/website-maintenance-support_Dmf5bVID.mjs'),"../content/capabilities/website-migration-services.mdx": () => import('../chunks/website-migration-services_Ha0csULX.mjs'),"../content/capabilities/website-redesign-modernization.mdx": () => import('../chunks/website-redesign-modernization_D0w3WIq1.mjs'),"../content/contact-us/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.N),"../content/faq/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.O),"../content/faq/can-you-collaborate-with-our-team.mdx": () => import('../chunks/can-you-collaborate-with-our-team_CrLcyItd.mjs'),"../content/faq/can-you-connect-forms-bookings-or-a-crm.mdx": () => import('../chunks/can-you-connect-forms-bookings-or-a-crm_DIzP919G.mjs'),"../content/faq/can-you-help-with-the-words-and-images.mdx": () => import('../chunks/can-you-help-with-the-words-and-images_C1atG-dO.mjs'),"../content/faq/can-you-redesign-my-current-site.mdx": () => import('../chunks/can-you-redesign-my-current-site_Ah4K3CLl.mjs'),"../content/faq/do-you-build-online-stores.mdx": () => import('../chunks/do-you-build-online-stores_CMNnXnGw.mjs'),"../content/faq/do-you-do-seo.mdx": () => import('../chunks/do-you-do-seo_0vZ26itD.mjs'),"../content/faq/do-you-handle-hosting-and-maintenance.mdx": () => import('../chunks/do-you-handle-hosting-and-maintenance_rhkRZqq-.mjs'),"../content/faq/do-you-offer-payment-plans.mdx": () => import('../chunks/do-you-offer-payment-plans_Bq3y2Cz0.mjs'),"../content/faq/do-you-set-up-google-business-and-social-accounts.mdx": () => import('../chunks/do-you-set-up-google-business-and-social-accounts_BpDoS2Tb.mjs'),"../content/faq/how-do-revisions-work.mdx": () => import('../chunks/how-do-revisions-work_BoXbv9z1.mjs'),"../content/faq/how-do-we-get-started.mdx": () => import('../chunks/how-do-we-get-started_D0Wo_Myu.mjs'),"../content/faq/how-long-does-it-take-to-build-a-website.mdx": () => import('../chunks/how-long-does-it-take-to-build-a-website_fZn9jEJ2.mjs'),"../content/faq/what-about-ai-seo-and-chatgpt-visibility.mdx": () => import('../chunks/what-about-ai-seo-and-chatgpt-visibility_DJMmnC9Q.mjs'),"../content/faq/what-do-you-need-from-me.mdx": () => import('../chunks/what-do-you-need-from-me_C_MukBFK.mjs'),"../content/faq/what-is-included-in-your-ongoing-support.mdx": () => import('../chunks/what-is-included-in-your-ongoing-support_D0s2lO8g.mjs'),"../content/faq/will-my-site-be-secure.mdx": () => import('../chunks/will-my-site-be-secure_BHgYufyw.mjs'),"../content/faq/will-my-website-be-mobile-friendly.mdx": () => import('../chunks/will-my-website-be-mobile-friendly_C6_pBCNd.mjs'),"../content/industries/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.P),"../content/industries/authors-personal-brands.mdx": () => import('../chunks/authors-personal-brands_DQACMAH7.mjs'),"../content/industries/contractors.mdx": () => import('../chunks/contractors_Dne_XA5Z.mjs'),"../content/industries/marketing-agencies.mdx": () => import('../chunks/marketing-agencies_DBqj7J-c.mjs'),"../content/industries/product-based-businesses.mdx": () => import('../chunks/product-based-businesses_Bf9qSYWg.mjs'),"../content/industries/professional-services.mdx": () => import('../chunks/professional-services_BV_lVl-W.mjs'),"../content/industries/restaurants-food-service.mdx": () => import('../chunks/restaurants-food-service_BLy8sc6P.mjs'),"../content/legal/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.Q),"../content/legal/cookie-policy.mdx": () => import('../chunks/cookie-policy_Bw-f-Sim.mjs'),"../content/legal/privacy-policy.mdx": () => import('../chunks/privacy-policy_COP8qg5I.mjs'),"../content/legal/terms-of-service.mdx": () => import('../chunks/terms-of-service_BuLrMIOi.mjs'),"../content/menu-items/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.R),"../content/menus/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.S),"../content/projects/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.U),"../content/projects/certified-bag-chasers-light.mdx": () => import('../chunks/certified-bag-chasers-light_PBnQHwjg.mjs'),"../content/projects/farias-demolition.mdx": () => import('../chunks/farias-demolition_D55_wIRp.mjs'),"../content/projects/pablos-peak-roofing.mdx": () => import('../chunks/pablos-peak-roofing_D1WZZyhZ.mjs'),"../content/projects/pronto-junk-removal.mdx": () => import('../chunks/pronto-junk-removal_1oZTVhYD.mjs'),"../content/projects/roonys-marketing.mdx": () => import('../chunks/roonys-marketing_BFfklR80.mjs'),"../content/projects/tok-secret-formula.mdx": () => import('../chunks/tok-secret-formula_C8t85t1B.mjs'),"../content/projects/universal-chillers.mdx": () => import('../chunks/universal-chillers_DAJd6i3L.mjs'),"../content/social-media/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.V),"../content/solutions/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.W),"../content/solutions/blog.mdx": () => import('../chunks/blog_BxzBJHo-.mjs'),"../content/solutions/custom-full-stack-applications.mdx": () => import('../chunks/custom-full-stack-applications_CyHlBi7S.mjs'),"../content/solutions/e-commerce-websites.mdx": () => import('../chunks/e-commerce-websites_C4xNHmUs.mjs'),"../content/solutions/landing-pages.mdx": () => import('../chunks/landing-pages_BJL6HPW4.mjs'),"../content/solutions/restaurant-websites.mdx": () => import('../chunks/restaurant-websites_CNLMk_YF.mjs'),"../content/solutions/standard-websites.mdx": () => import('../chunks/standard-websites_DzxeyrQI.mjs'),"../content/stats/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.X),"../content/stats/industries-served.mdx": () => import('../chunks/industries-served_BZmyY5kj.mjs'),"../content/stats/projects-launched.mdx": () => import('../chunks/projects-launched_BSPUfESk.mjs'),"../content/stats/support-response.mdx": () => import('../chunks/support-response_T4sRv6jG.mjs'),"../content/stats/uptime.mdx": () => import('../chunks/uptime_YaROUlhd.mjs'),"../content/technologies/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.Y),"../content/technologies/astro.mdx": () => import('../chunks/astro_CEAbcP2m.mjs'),"../content/technologies/aws.mdx": () => import('../chunks/aws_DGcrcjl1.mjs'),"../content/technologies/cloudflare.mdx": () => import('../chunks/cloudflare_Bz8DzyU_.mjs'),"../content/technologies/css.mdx": () => import('../chunks/css_06EVoBoF.mjs'),"../content/technologies/elementor.mdx": () => import('../chunks/elementor_BTIJUMqE.mjs'),"../content/technologies/figma.mdx": () => import('../chunks/figma_SBN4ZBnF.mjs'),"../content/technologies/framer.mdx": () => import('../chunks/framer_CzP9hW9U.mjs'),"../content/technologies/gatsby.mdx": () => import('../chunks/gatsby_BJD7KuXp.mjs'),"../content/technologies/github.mdx": () => import('../chunks/github_C1k_TI6I.mjs'),"../content/technologies/html.mdx": () => import('../chunks/html_DJNOTcmh.mjs'),"../content/technologies/javascript.mdx": () => import('../chunks/javascript_CG7yVgF7.mjs'),"../content/technologies/nextjs.mdx": () => import('../chunks/nextjs_EiZpXV3W.mjs'),"../content/technologies/nodejs.mdx": () => import('../chunks/nodejs_CSWlgkA4.mjs'),"../content/technologies/php.mdx": () => import('../chunks/php_CqIvo5um.mjs'),"../content/technologies/python.mdx": () => import('../chunks/python_CpdcXZuI.mjs'),"../content/technologies/react.mdx": () => import('../chunks/react_dS52NndW.mjs'),"../content/technologies/shopify.mdx": () => import('../chunks/shopify_DQSueb6e.mjs'),"../content/technologies/svelte.mdx": () => import('../chunks/svelte_DT-sgKF5.mjs'),"../content/technologies/vercel.mdx": () => import('../chunks/vercel_DhfmXe14.mjs'),"../content/technologies/webflow.mdx": () => import('../chunks/webflow_D0LIltIk.mjs'),"../content/technologies/wordpress.mdx": () => import('../chunks/wordpress_DB0nl9O_.mjs'),"../content/testimonials/_meta.mdx": () => import('../chunks/BaseLayout_BD8xUcJo.mjs').then(n => n.Z),"../content/testimonials/anthony-gonzales.mdx": () => import('../chunks/anthony-gonzales_CwRVNC4B.mjs'),"../content/testimonials/arold-norelus.mdx": () => import('../chunks/arold-norelus_C5wcN56m.mjs'),"../content/testimonials/darius-clark.mdx": () => import('../chunks/darius-clark__qOGhscq.mjs'),"../content/testimonials/kenn-faria.mdx": () => import('../chunks/kenn-faria_2QY_Bcaf.mjs'),"../content/testimonials/richard-faria.mdx": () => import('../chunks/richard-faria_DH6sZM2E.mjs'),"../content/testimonials/tarun-kumar.mdx": () => import('../chunks/tarun-kumar_xulA8lg9.mjs')})), `../content/${collectionName}/${fileName}.mdx`, 4);
    return {
      Component: mdxModule.default,
      hasContent: true
    };
  } catch (error) {
    console.warn(`Failed to load MDX: ${collectionName}/${fileName}.mdx`, error);
    return null;
  }
}
async function getCollectionMetaMDX(collectionName) {
  return getMDXContentIfExists(collectionName, "_meta");
}

async function generateCollectionIndexPaths() {
  const names = getPageCollections();
  const paths = [];
  for (const coll of names) {
    const meta = getCollectionMeta(coll);
    if (shouldCollectionHavePage(meta)) {
      paths.push({
        params: { collection: coll },
        props: { meta }
      });
    }
  }
  return paths;
}
async function prepareCollectionIndexData(params, props) {
  const { collection } = params;
  const { meta } = props;
  const layoutPath = getCollectionIndexLayoutPath(meta);
  const LayoutComponent = await getLayoutComponent(layoutPath);
  const mdxResult = await getCollectionMetaMDX(collection);
  const Content = mdxResult?.hasContent ? mdxResult.Component : null;
  const hasContent = !!mdxResult?.hasContent;
  const seoProps = buildCollectionSEOProps(meta, collection);
  return {
    LayoutComponent,
    Content,
    collectionName: collection,
    collectionMeta: meta,
    seoProps,
    hasContent
  };
}

const $$Astro = createAstro("https://https://griffinswebservices.com");
async function getStaticPaths() {
  return generateCollectionIndexPaths();
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    LayoutComponent,
    Content,
    collectionName,
    collectionMeta,
    seoProps,
    hasContent
  } = await prepareCollectionIndexData(Astro2.params, Astro2.props);
  return renderTemplate`${renderComponent($$result, "LayoutComponent", LayoutComponent, { "Content": Content, "collectionName": collectionName, "collectionMeta": collectionMeta, "seoProps": seoProps, "hasContent": hasContent, ...collectionMeta })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/[collection]/index.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/[collection]/index.astro";
const $$url = "/[collection]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
