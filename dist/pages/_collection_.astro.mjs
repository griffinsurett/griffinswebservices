import { c as createAstro, a as createComponent, d as renderComponent, e as renderTemplate } from '../chunks/astro/server_BujBp8IR.mjs';
import 'piccolore';
import { g as getCollectionMeta, s as shouldCollectionHavePage } from '../chunks/BaseLayout_DpejhLLs.mjs';
import { g as getCollectionIndexLayoutPath, a as getLayoutComponent, b as buildCollectionSEOProps, c as getPageCollections } from '../chunks/layoutUtils_CkqXQEfZ.mjs';
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
    const mdxModule = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/about-us/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.N),"../content/about-us/our-difference.mdx": () => import('../chunks/our-difference_Ch-xqWnf.mjs'),"../content/about-us/our-focus.mdx": () => import('../chunks/our-focus_0m08PT53.mjs'),"../content/about-us/our-mission.mdx": () => import('../chunks/our-mission_B84Z6Dbv.mjs'),"../content/about-us/our-obsession.mdx": () => import('../chunks/our-obsession_Bav0ICLY.mjs'),"../content/about-us/our-philosophy.mdx": () => import('../chunks/our-philosophy_CSmXhgYd.mjs'),"../content/about-us/our-story.mdx": () => import('../chunks/our-story_CnbjPCix.mjs'),"../content/about-us/our-vision.mdx": () => import('../chunks/our-vision_BhRJ_JXp.mjs'),"../content/authors/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.O),"../content/benefits/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.P),"../content/benefits/designed-to-grow-with-you.mdx": () => import('../chunks/designed-to-grow-with-you_CjTRUmcD.mjs'),"../content/benefits/designed-to-stand-out-on-every-device.mdx": () => import('../chunks/designed-to-stand-out-on-every-device_X1ulrnA7.mjs'),"../content/benefits/future-ready-ai-prepared.mdx": () => import('../chunks/future-ready-ai-prepared_DDo0H3-u.mjs'),"../content/benefits/lightning-fast-websites.mdx": () => import('../chunks/lightning-fast-websites_DOp0LaWI.mjs'),"../content/benefits/security-minded-by-design.mdx": () => import('../chunks/security-minded-by-design_CtZD-cEn.mjs'),"../content/benefits/seo-from-the-foundations.mdx": () => import('../chunks/seo-from-the-foundations_DXEg1Xyb.mjs'),"../content/benefits/support-that-sticks-around.mdx": () => import('../chunks/support-that-sticks-around_Cv3J19Z7.mjs'),"../content/blog/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.Q),"../content/blog/first-post.mdx": () => import('../chunks/first-post_YJ-cfMLd.mjs'),"../content/capabilities/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.R),"../content/capabilities/accessibility-compliance.mdx": () => import('../chunks/accessibility-compliance_mk8G6WYd.mjs'),"../content/capabilities/analytics-conversion-optimization.mdx": () => import('../chunks/analytics-conversion-optimization_VeqUEGgx.mjs'),"../content/capabilities/back-end-development.mdx": () => import('../chunks/back-end-development_Bddl0yRQ.mjs'),"../content/capabilities/cookie-consent-privacy.mdx": () => import('../chunks/cookie-consent-privacy_Bf8cir1d.mjs'),"../content/capabilities/front-end-development.mdx": () => import('../chunks/front-end-development_DJCD4khQ.mjs'),"../content/capabilities/full-stack-development.mdx": () => import('../chunks/full-stack-development_CQc9cjnT.mjs'),"../content/capabilities/legal-policies.mdx": () => import('../chunks/legal-policies_Bj2zzMYO.mjs'),"../content/capabilities/managed-website-hosting.mdx": () => import('../chunks/managed-website-hosting_C3eQMTJn.mjs'),"../content/capabilities/off-page-seo.mdx": () => import('../chunks/off-page-seo_BPMAKbB7.mjs'),"../content/capabilities/on-page-seo.mdx": () => import('../chunks/on-page-seo_D8tzYZwZ.mjs'),"../content/capabilities/performance-optimization.mdx": () => import('../chunks/performance-optimization_h_q1GpSY.mjs'),"../content/capabilities/security-monitoring.mdx": () => import('../chunks/security-monitoring_D56tKXSG.mjs'),"../content/capabilities/seo.mdx": () => import('../chunks/seo_DhZf1GlJ.mjs'),"../content/capabilities/technical-seo.mdx": () => import('../chunks/technical-seo_CSz6w9kI.mjs'),"../content/capabilities/technical-support.mdx": () => import('../chunks/technical-support_VBKEbWGf.mjs'),"../content/capabilities/ui-design.mdx": () => import('../chunks/ui-design_CseIbANM.mjs'),"../content/capabilities/uptime-reliability-monitoring.mdx": () => import('../chunks/uptime-reliability-monitoring_JD52Wqk_.mjs'),"../content/capabilities/ux-design.mdx": () => import('../chunks/ux-design_Co--u3LN.mjs'),"../content/capabilities/wcag-ada-compliance.mdx": () => import('../chunks/wcag-ada-compliance_CE2WfBj3.mjs'),"../content/capabilities/web-design.mdx": () => import('../chunks/web-design_Yz11skSJ.mjs'),"../content/capabilities/web-development.mdx": () => import('../chunks/web-development_SGD2Bjyz.mjs'),"../content/capabilities/webmaster-services.mdx": () => import('../chunks/webmaster-services_DqpgFnKf.mjs'),"../content/capabilities/website-maintenance-support.mdx": () => import('../chunks/website-maintenance-support_Dcf2_dak.mjs'),"../content/contact-us/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.S),"../content/faq/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.U),"../content/faq/can-you-collaborate-with-our-team.mdx": () => import('../chunks/can-you-collaborate-with-our-team_C49XLYMF.mjs'),"../content/faq/can-you-connect-forms-bookings-or-a-crm.mdx": () => import('../chunks/can-you-connect-forms-bookings-or-a-crm_BGfaZ-KB.mjs'),"../content/faq/can-you-help-with-the-words-and-images.mdx": () => import('../chunks/can-you-help-with-the-words-and-images_DK7_vtK2.mjs'),"../content/faq/can-you-redesign-my-current-site.mdx": () => import('../chunks/can-you-redesign-my-current-site_DxihzR5H.mjs'),"../content/faq/do-you-build-online-stores.mdx": () => import('../chunks/do-you-build-online-stores_G9Wb-xkZ.mjs'),"../content/faq/do-you-do-seo.mdx": () => import('../chunks/do-you-do-seo_DtFaHYeX.mjs'),"../content/faq/do-you-handle-hosting-and-maintenance.mdx": () => import('../chunks/do-you-handle-hosting-and-maintenance_v0IXc89e.mjs'),"../content/faq/do-you-offer-payment-plans.mdx": () => import('../chunks/do-you-offer-payment-plans_QokSgZ_O.mjs'),"../content/faq/do-you-set-up-google-business-and-social-accounts.mdx": () => import('../chunks/do-you-set-up-google-business-and-social-accounts_pQRkUYAj.mjs'),"../content/faq/how-do-revisions-work.mdx": () => import('../chunks/how-do-revisions-work_D2QBpuEp.mjs'),"../content/faq/how-do-we-get-started.mdx": () => import('../chunks/how-do-we-get-started_CbS8sbH9.mjs'),"../content/faq/how-long-does-it-take-to-build-a-website.mdx": () => import('../chunks/how-long-does-it-take-to-build-a-website_C7d8I6lR.mjs'),"../content/faq/what-about-ai-seo-and-chatgpt-visibility.mdx": () => import('../chunks/what-about-ai-seo-and-chatgpt-visibility_3BWypO2u.mjs'),"../content/faq/what-do-you-need-from-me.mdx": () => import('../chunks/what-do-you-need-from-me_BMnKtDPy.mjs'),"../content/faq/what-is-included-in-your-ongoing-support.mdx": () => import('../chunks/what-is-included-in-your-ongoing-support_DSmJKmS7.mjs'),"../content/faq/will-my-site-be-secure.mdx": () => import('../chunks/will-my-site-be-secure_BbdVxjO_.mjs'),"../content/faq/will-my-website-be-mobile-friendly.mdx": () => import('../chunks/will-my-website-be-mobile-friendly_DbUebq7N.mjs'),"../content/industries/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.V),"../content/industries/authors.mdx": () => import('../chunks/authors_CMmMA3xE.mjs'),"../content/industries/contractors.mdx": () => import('../chunks/contractors_GkuOPwZD.mjs'),"../content/industries/e-commerce.mdx": () => import('../chunks/e-commerce_Bjj_XBGH.mjs'),"../content/industries/fitness.mdx": () => import('../chunks/fitness_BwyoC6aV.mjs'),"../content/industries/marketing-agencies.mdx": () => import('../chunks/marketing-agencies_UVW2m6s9.mjs'),"../content/industries/professional-services.mdx": () => import('../chunks/professional-services_Do9Fyzow.mjs'),"../content/industries/restaurants-food-service.mdx": () => import('../chunks/restaurants-food-service_DL-vAL-I.mjs'),"../content/legal/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.W),"../content/legal/cookie-policy.mdx": () => import('../chunks/cookie-policy_CFCIIYxw.mjs'),"../content/legal/privacy-policy.mdx": () => import('../chunks/privacy-policy_BnggghAl.mjs'),"../content/legal/terms-of-service.mdx": () => import('../chunks/terms-of-service_p4XzaiY9.mjs'),"../content/menu-items/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.X),"../content/menus/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.Y),"../content/projects/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.Z),"../content/projects/beyond-strength.mdx": () => import('../chunks/beyond-strength_Dt0Bt_tI.mjs'),"../content/projects/certified-bag-chasers-light.mdx": () => import('../chunks/certified-bag-chasers-light_BrVBEwdo.mjs'),"../content/projects/farias-demolition.mdx": () => import('../chunks/farias-demolition_LbOSv0sY.mjs'),"../content/projects/pablos-peak-roofing.mdx": () => import('../chunks/pablos-peak-roofing_CGb6kB3t.mjs'),"../content/projects/pronto-junk-removal.mdx": () => import('../chunks/pronto-junk-removal_CsURfcSx.mjs'),"../content/projects/roonys-marketing.mdx": () => import('../chunks/roonys-marketing_DqAfIff7.mjs'),"../content/projects/tok-secret-formula.mdx": () => import('../chunks/tok-secret-formula_B39ds9AO.mjs'),"../content/projects/universal-chillers.mdx": () => import('../chunks/universal-chillers_tPFa3rHH.mjs'),"../content/social-media/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.a0),"../content/solutions/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.a1),"../content/solutions/blogs.mdx": () => import('../chunks/blogs_BmPdETTl.mjs'),"../content/solutions/custom-full-stack-applications.mdx": () => import('../chunks/custom-full-stack-applications_DLc9k6_J.mjs'),"../content/solutions/e-commerce-websites.mdx": () => import('../chunks/e-commerce-websites_L8JeCHMC.mjs'),"../content/solutions/landing-pages.mdx": () => import('../chunks/landing-pages_BV4ALxvN.mjs'),"../content/solutions/portfolio-websites.mdx": () => import('../chunks/portfolio-websites_DEi16EIS.mjs'),"../content/solutions/restaurant-websites.mdx": () => import('../chunks/restaurant-websites_F3Ouptsv.mjs'),"../content/solutions/standard-websites.mdx": () => import('../chunks/standard-websites_Dc_Si3aX.mjs'),"../content/stats/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.a2),"../content/stats/industries-served.mdx": () => import('../chunks/industries-served_Cxk-nBif.mjs'),"../content/stats/projects-launched.mdx": () => import('../chunks/projects-launched_DV3g7qth.mjs'),"../content/stats/support-response.mdx": () => import('../chunks/support-response_BjOXWiKW.mjs'),"../content/stats/uptime.mdx": () => import('../chunks/uptime_yN5Bw-FL.mjs'),"../content/technologies/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.a3),"../content/technologies/astro.mdx": () => import('../chunks/astro_BVq00Bn3.mjs'),"../content/technologies/aws.mdx": () => import('../chunks/aws_DaKrJhX4.mjs'),"../content/technologies/cloudflare.mdx": () => import('../chunks/cloudflare_Db1u5l_J.mjs'),"../content/technologies/css.mdx": () => import('../chunks/css_BdbHXgvS.mjs'),"../content/technologies/elementor.mdx": () => import('../chunks/elementor_CJra0bK1.mjs'),"../content/technologies/figma.mdx": () => import('../chunks/figma_BVCI3XsH.mjs'),"../content/technologies/framer.mdx": () => import('../chunks/framer_Dr6SAo1x.mjs'),"../content/technologies/gatsby.mdx": () => import('../chunks/gatsby_CDi8xCjs.mjs'),"../content/technologies/github.mdx": () => import('../chunks/github_begDu7sJ.mjs'),"../content/technologies/html.mdx": () => import('../chunks/html_BrTRK_V_.mjs'),"../content/technologies/javascript.mdx": () => import('../chunks/javascript_BfsGEr3G.mjs'),"../content/technologies/nextjs.mdx": () => import('../chunks/nextjs_C_nG8qDC.mjs'),"../content/technologies/nodejs.mdx": () => import('../chunks/nodejs_DDjO0WhN.mjs'),"../content/technologies/php.mdx": () => import('../chunks/php_ch6Ci6ld.mjs'),"../content/technologies/python.mdx": () => import('../chunks/python_CIZMloPm.mjs'),"../content/technologies/react.mdx": () => import('../chunks/react_CEbbI-XN.mjs'),"../content/technologies/shopify.mdx": () => import('../chunks/shopify_CetmGVHl.mjs'),"../content/technologies/svelte.mdx": () => import('../chunks/svelte_DMnrrNVO.mjs'),"../content/technologies/vercel.mdx": () => import('../chunks/vercel_Ds9ASVzf.mjs'),"../content/technologies/webflow.mdx": () => import('../chunks/webflow_D9SjUxYd.mjs'),"../content/technologies/wordpress.mdx": () => import('../chunks/wordpress_Bgr9bXO-.mjs'),"../content/testimonials/_meta.mdx": () => import('../chunks/BaseLayout_DpejhLLs.mjs').then(n => n.a4),"../content/testimonials/anthony-gonzales.mdx": () => import('../chunks/anthony-gonzales_0UVJYB_h.mjs'),"../content/testimonials/arold-norelus.mdx": () => import('../chunks/arold-norelus_BM0xbiQ1.mjs'),"../content/testimonials/darius-clark.mdx": () => import('../chunks/darius-clark_CfeOt8KD.mjs'),"../content/testimonials/kenn-faria.mdx": () => import('../chunks/kenn-faria_DxT7Z-EY.mjs'),"../content/testimonials/richard-faria.mdx": () => import('../chunks/richard-faria_DtsQNCxl.mjs'),"../content/testimonials/tarun-kumar.mdx": () => import('../chunks/tarun-kumar_Bq_FDthH.mjs')})), `../content/${collectionName}/${fileName}.mdx`, 4);
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
