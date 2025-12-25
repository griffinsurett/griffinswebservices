import { c as createAstro, a as createComponent, d as renderComponent, e as renderTemplate } from '../chunks/astro/server_BujBp8IR.mjs';
import 'piccolore';
import { g as getCollectionMeta, s as shouldCollectionHavePage } from '../chunks/BaseLayout_BLCbETNX.mjs';
import { g as getCollectionIndexLayoutPath, a as getLayoutComponent, b as buildCollectionSEOProps, c as getPageCollections } from '../chunks/layoutUtils_LIukHY0q.mjs';
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
    const mdxModule = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/about-us/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.G),"../content/about-us/our-difference.mdx": () => import('../chunks/our-difference_Ch-xqWnf.mjs'),"../content/about-us/our-focus.mdx": () => import('../chunks/our-focus_0m08PT53.mjs'),"../content/about-us/our-obsession.mdx": () => import('../chunks/our-obsession_Bav0ICLY.mjs'),"../content/about-us/our-philosophy.mdx": () => import('../chunks/our-philosophy_CSmXhgYd.mjs'),"../content/about-us/our-story.mdx": () => import('../chunks/our-story_CnbjPCix.mjs'),"../content/authors/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.H),"../content/benefits/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.J),"../content/benefits/designed-to-grow-with-you.mdx": () => import('../chunks/designed-to-grow-with-you_CLuGx1n3.mjs'),"../content/benefits/designed-to-stand-out-on-every-device.mdx": () => import('../chunks/designed-to-stand-out-on-every-device_BA6THt9N.mjs'),"../content/benefits/future-ready-ai-prepared.mdx": () => import('../chunks/future-ready-ai-prepared_2CQU9_GU.mjs'),"../content/benefits/lightning-fast-websites.mdx": () => import('../chunks/lightning-fast-websites_u0xXWKe-.mjs'),"../content/benefits/security-minded-by-design.mdx": () => import('../chunks/security-minded-by-design_Dlf058bq.mjs'),"../content/benefits/seo-from-the-foundations.mdx": () => import('../chunks/seo-from-the-foundations_Cks2F-p3.mjs'),"../content/benefits/support-that-sticks-around.mdx": () => import('../chunks/support-that-sticks-around_EBN8MFK8.mjs'),"../content/blog/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.K),"../content/blog/first-post.mdx": () => import('../chunks/first-post_BnJZhuac.mjs'),"../content/capabilities/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.L),"../content/capabilities/accessibility-compliance.mdx": () => import('../chunks/accessibility-compliance_BvpS0RvE.mjs'),"../content/capabilities/analytics-conversion-optimization.mdx": () => import('../chunks/analytics-conversion-optimization_5lU17CW3.mjs'),"../content/capabilities/managed-website-hosting.mdx": () => import('../chunks/managed-website-hosting_DEXnVxe5.mjs'),"../content/capabilities/performance-optimization.mdx": () => import('../chunks/performance-optimization_sLAehZMQ.mjs'),"../content/capabilities/seo.mdx": () => import('../chunks/seo_CBzgDi_E.mjs'),"../content/capabilities/technical-support.mdx": () => import('../chunks/technical-support_B8BmnBi4.mjs'),"../content/capabilities/uptime-reliability-monitoring.mdx": () => import('../chunks/uptime-reliability-monitoring_Bgo0Kc9s.mjs'),"../content/capabilities/web-design.mdx": () => import('../chunks/web-design_B-5aNml0.mjs'),"../content/capabilities/web-development.mdx": () => import('../chunks/web-development_DJINLW5g.mjs'),"../content/capabilities/webmaster-services.mdx": () => import('../chunks/webmaster-services_DQrYaemX.mjs'),"../content/capabilities/website-maintenance-support.mdx": () => import('../chunks/website-maintenance-support_BpkqMZlt.mjs'),"../content/capabilities/website-migration-services.mdx": () => import('../chunks/website-migration-services_D6AGtLdt.mjs'),"../content/contact-us/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.N),"../content/faq/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.O),"../content/faq/can-you-collaborate-with-our-team.mdx": () => import('../chunks/can-you-collaborate-with-our-team_BSIhevnp.mjs'),"../content/faq/can-you-connect-forms-bookings-or-a-crm.mdx": () => import('../chunks/can-you-connect-forms-bookings-or-a-crm_DwLE-ULq.mjs'),"../content/faq/can-you-help-with-the-words-and-images.mdx": () => import('../chunks/can-you-help-with-the-words-and-images_DzP6BtRc.mjs'),"../content/faq/can-you-redesign-my-current-site.mdx": () => import('../chunks/can-you-redesign-my-current-site__z8UEiv2.mjs'),"../content/faq/do-you-build-online-stores.mdx": () => import('../chunks/do-you-build-online-stores_CAyDVa1e.mjs'),"../content/faq/do-you-do-seo.mdx": () => import('../chunks/do-you-do-seo_D-hgzYUj.mjs'),"../content/faq/do-you-handle-hosting-and-maintenance.mdx": () => import('../chunks/do-you-handle-hosting-and-maintenance_C47SiONT.mjs'),"../content/faq/do-you-offer-payment-plans.mdx": () => import('../chunks/do-you-offer-payment-plans_QokSgZ_O.mjs'),"../content/faq/do-you-set-up-google-business-and-social-accounts.mdx": () => import('../chunks/do-you-set-up-google-business-and-social-accounts_X4kcc8Jn.mjs'),"../content/faq/how-do-revisions-work.mdx": () => import('../chunks/how-do-revisions-work_D2QBpuEp.mjs'),"../content/faq/how-do-we-get-started.mdx": () => import('../chunks/how-do-we-get-started_CbS8sbH9.mjs'),"../content/faq/how-long-does-it-take-to-build-a-website.mdx": () => import('../chunks/how-long-does-it-take-to-build-a-website_CiAv78zx.mjs'),"../content/faq/what-about-ai-seo-and-chatgpt-visibility.mdx": () => import('../chunks/what-about-ai-seo-and-chatgpt-visibility_C-xv7YRZ.mjs'),"../content/faq/what-do-you-need-from-me.mdx": () => import('../chunks/what-do-you-need-from-me_BMnKtDPy.mjs'),"../content/faq/what-is-included-in-your-ongoing-support.mdx": () => import('../chunks/what-is-included-in-your-ongoing-support_Br4muyBa.mjs'),"../content/faq/will-my-site-be-secure.mdx": () => import('../chunks/will-my-site-be-secure_C44l-ADv.mjs'),"../content/faq/will-my-website-be-mobile-friendly.mdx": () => import('../chunks/will-my-website-be-mobile-friendly_Cmo8gdDR.mjs'),"../content/industries/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.P),"../content/industries/authors.mdx": () => import('../chunks/authors_Clgpksah.mjs'),"../content/industries/contractors.mdx": () => import('../chunks/contractors_CP06kPvY.mjs'),"../content/industries/e-commerce.mdx": () => import('../chunks/e-commerce_DusgiTbR.mjs'),"../content/industries/fitness.mdx": () => import('../chunks/fitness_DGW5lxrx.mjs'),"../content/industries/marketing-agencies.mdx": () => import('../chunks/marketing-agencies_D0vgeZ-o.mjs'),"../content/industries/professional-services.mdx": () => import('../chunks/professional-services_DhYBXF2j.mjs'),"../content/industries/restaurants-food-service.mdx": () => import('../chunks/restaurants-food-service_B34OdypU.mjs'),"../content/legal/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.Q),"../content/legal/cookie-policy.mdx": () => import('../chunks/cookie-policy_DuAZdPe-.mjs'),"../content/legal/privacy-policy.mdx": () => import('../chunks/privacy-policy_BIkYNkLg.mjs'),"../content/legal/terms-of-service.mdx": () => import('../chunks/terms-of-service_D4Yi1O5o.mjs'),"../content/menu-items/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.R),"../content/menus/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.S),"../content/projects/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.U),"../content/projects/beyond-strength.mdx": () => import('../chunks/beyond-strength_Dt0Bt_tI.mjs'),"../content/projects/certified-bag-chasers-light.mdx": () => import('../chunks/certified-bag-chasers-light_BrVBEwdo.mjs'),"../content/projects/farias-demolition.mdx": () => import('../chunks/farias-demolition_LbOSv0sY.mjs'),"../content/projects/pablos-peak-roofing.mdx": () => import('../chunks/pablos-peak-roofing_CGb6kB3t.mjs'),"../content/projects/pronto-junk-removal.mdx": () => import('../chunks/pronto-junk-removal_CsURfcSx.mjs'),"../content/projects/roonys-marketing.mdx": () => import('../chunks/roonys-marketing_DqAfIff7.mjs'),"../content/projects/tok-secret-formula.mdx": () => import('../chunks/tok-secret-formula_B39ds9AO.mjs'),"../content/projects/universal-chillers.mdx": () => import('../chunks/universal-chillers_tPFa3rHH.mjs'),"../content/social-media/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.V),"../content/solutions/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.W),"../content/solutions/blog.mdx": () => import('../chunks/blog_BHwUOeGV.mjs'),"../content/solutions/custom-full-stack-applications.mdx": () => import('../chunks/custom-full-stack-applications_B_buR6ds.mjs'),"../content/solutions/e-commerce-websites.mdx": () => import('../chunks/e-commerce-websites_BnZZpAC1.mjs'),"../content/solutions/landing-pages.mdx": () => import('../chunks/landing-pages_D3AjgvG_.mjs'),"../content/solutions/portfolio-websites.mdx": () => import('../chunks/portfolio-websites_BmKNEuQF.mjs'),"../content/solutions/restaurant-websites.mdx": () => import('../chunks/restaurant-websites_DHP1CkJW.mjs'),"../content/solutions/standard-websites.mdx": () => import('../chunks/standard-websites_C67dEOQG.mjs'),"../content/stats/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.X),"../content/stats/industries-served.mdx": () => import('../chunks/industries-served_Cxk-nBif.mjs'),"../content/stats/projects-launched.mdx": () => import('../chunks/projects-launched_DV3g7qth.mjs'),"../content/stats/support-response.mdx": () => import('../chunks/support-response_BjOXWiKW.mjs'),"../content/stats/uptime.mdx": () => import('../chunks/uptime_yN5Bw-FL.mjs'),"../content/technologies/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.Y),"../content/technologies/astro.mdx": () => import('../chunks/astro_cKD7C3JT.mjs'),"../content/technologies/aws.mdx": () => import('../chunks/aws_cnAQvtUl.mjs'),"../content/technologies/cloudflare.mdx": () => import('../chunks/cloudflare_rhTCrBan.mjs'),"../content/technologies/css.mdx": () => import('../chunks/css_Df2zXqP1.mjs'),"../content/technologies/elementor.mdx": () => import('../chunks/elementor_CMhU9WyG.mjs'),"../content/technologies/figma.mdx": () => import('../chunks/figma_D75o2tyQ.mjs'),"../content/technologies/framer.mdx": () => import('../chunks/framer_DJjgYZ3-.mjs'),"../content/technologies/gatsby.mdx": () => import('../chunks/gatsby_B-kYvN91.mjs'),"../content/technologies/github.mdx": () => import('../chunks/github_CEeGY9Dt.mjs'),"../content/technologies/html.mdx": () => import('../chunks/html_CKNpZ3ix.mjs'),"../content/technologies/javascript.mdx": () => import('../chunks/javascript_CThEBARM.mjs'),"../content/technologies/nextjs.mdx": () => import('../chunks/nextjs_DA_W8PZB.mjs'),"../content/technologies/nodejs.mdx": () => import('../chunks/nodejs_DZKZei4o.mjs'),"../content/technologies/php.mdx": () => import('../chunks/php_1_fvrmGJ.mjs'),"../content/technologies/python.mdx": () => import('../chunks/python_BJsmE61D.mjs'),"../content/technologies/react.mdx": () => import('../chunks/react_Bm9mx3Xb.mjs'),"../content/technologies/shopify.mdx": () => import('../chunks/shopify_Ba27XT6Q.mjs'),"../content/technologies/svelte.mdx": () => import('../chunks/svelte_B-deADhf.mjs'),"../content/technologies/vercel.mdx": () => import('../chunks/vercel_BWg0vQBV.mjs'),"../content/technologies/webflow.mdx": () => import('../chunks/webflow_D9SjUxYd.mjs'),"../content/technologies/wordpress.mdx": () => import('../chunks/wordpress_nd7Bn_p7.mjs'),"../content/testimonials/_meta.mdx": () => import('../chunks/BaseLayout_BLCbETNX.mjs').then(n => n.Z),"../content/testimonials/anthony-gonzales.mdx": () => import('../chunks/anthony-gonzales_0UVJYB_h.mjs'),"../content/testimonials/arold-norelus.mdx": () => import('../chunks/arold-norelus_BM0xbiQ1.mjs'),"../content/testimonials/darius-clark.mdx": () => import('../chunks/darius-clark_CfeOt8KD.mjs'),"../content/testimonials/kenn-faria.mdx": () => import('../chunks/kenn-faria_DxT7Z-EY.mjs'),"../content/testimonials/richard-faria.mdx": () => import('../chunks/richard-faria_DtsQNCxl.mjs'),"../content/testimonials/tarun-kumar.mdx": () => import('../chunks/tarun-kumar_Bq_FDthH.mjs')})), `../content/${collectionName}/${fileName}.mdx`, 4);
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
