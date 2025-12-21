import { c as createAstro, a as createComponent, d as renderComponent, e as renderTemplate } from '../chunks/astro/server_CDqnDASo.mjs';
import 'piccolore';
import { g as getCollectionMeta, v as shouldCollectionHavePage } from '../chunks/BaseLayout_BE8p8IeC.mjs';
import { d as getCollectionIndexLayoutPath, a as getLayoutComponent, e as buildCollectionSEOProps, c as getPageCollections } from '../chunks/layoutUtils_DYX6__FD.mjs';
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
    const mdxModule = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/about-us/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.E),"../content/about-us/our-difference.mdx": () => import('../chunks/our-difference_Di13w1SP.mjs'),"../content/about-us/our-focus.mdx": () => import('../chunks/our-focus_14Ox1m7V.mjs'),"../content/about-us/our-obsession.mdx": () => import('../chunks/our-obsession_J3duGi5U.mjs'),"../content/about-us/our-philosophy.mdx": () => import('../chunks/our-philosophy_CLjWI17z.mjs'),"../content/about-us/our-story.mdx": () => import('../chunks/our-story_B2Jjw6ca.mjs'),"../content/authors/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.G),"../content/benefits/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.H),"../content/benefits/beautiful-conversion-focused-design.mdx": () => import('../chunks/beautiful-conversion-focused-design_DdrXtcy4.mjs'),"../content/benefits/code-level-technical-seo.mdx": () => import('../chunks/code-level-technical-seo_BQ5iZgFO.mjs'),"../content/benefits/complete-security-uptime.mdx": () => import('../chunks/complete-security-uptime_BG9hnpWf.mjs'),"../content/benefits/flawless-mobile-responsiveness.mdx": () => import('../chunks/flawless-mobile-responsiveness_BB4M7iC7.mjs'),"../content/benefits/guaranteed-lightning-speed.mdx": () => import('../chunks/guaranteed-lightning-speed_HII-N2TX.mjs'),"../content/benefits/truly-scalable-architecture.mdx": () => import('../chunks/truly-scalable-architecture_5u2wa4EG.mjs'),"../content/benefits/us-based-expert-development.mdx": () => import('../chunks/us-based-expert-development_CWmoikMj.mjs'),"../content/blog/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.J),"../content/blog/first-post.mdx": () => import('../chunks/first-post_BAR4DeZC.mjs'),"../content/capabilities/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.K),"../content/capabilities/accessibility-compliance.mdx": () => import('../chunks/accessibility-compliance_Bbmtkmpw.mjs'),"../content/capabilities/analytics-conversion-optimization.mdx": () => import('../chunks/analytics-conversion-optimization_DKYIU-AV.mjs'),"../content/capabilities/back-end-development.mdx": () => import('../chunks/back-end-development_DoKTMV8H.mjs'),"../content/capabilities/brand-identity-design.mdx": () => import('../chunks/brand-identity-design_B2dT1jwy.mjs'),"../content/capabilities/browser-extension-development.mdx": () => import('../chunks/browser-extension-development_BZ_cRLnF.mjs'),"../content/capabilities/design-systems.mdx": () => import('../chunks/design-systems_gQ5XQcXW.mjs'),"../content/capabilities/e-commerce-development.mdx": () => import('../chunks/e-commerce-development_CEfQLB1p.mjs'),"../content/capabilities/front-end-development.mdx": () => import('../chunks/front-end-development_8O-Hlzba.mjs'),"../content/capabilities/full-stack-web-development.mdx": () => import('../chunks/full-stack-web-development_DV_w1eEJ.mjs'),"../content/capabilities/managed-website-hosting.mdx": () => import('../chunks/managed-website-hosting_ok5kmizM.mjs'),"../content/capabilities/performance-optimization.mdx": () => import('../chunks/performance-optimization_neayMN_t.mjs'),"../content/capabilities/seo.mdx": () => import('../chunks/seo_D3-uvtK-.mjs'),"../content/capabilities/technical-support.mdx": () => import('../chunks/technical-support_CDXxVjzF.mjs'),"../content/capabilities/uptime-reliability-monitoring.mdx": () => import('../chunks/uptime-reliability-monitoring_CpDa0v0g.mjs'),"../content/capabilities/web-design.mdx": () => import('../chunks/web-design_Bv2IATw_.mjs'),"../content/capabilities/web-development.mdx": () => import('../chunks/web-development_DYsa2fCl.mjs'),"../content/capabilities/webmaster-services.mdx": () => import('../chunks/webmaster-services_Cp6slKK8.mjs'),"../content/capabilities/website-maintenance-support.mdx": () => import('../chunks/website-maintenance-support_Dmf5bVID.mjs'),"../content/capabilities/website-migration-services.mdx": () => import('../chunks/website-migration-services_Ha0csULX.mjs'),"../content/capabilities/website-redesign-modernization.mdx": () => import('../chunks/website-redesign-modernization_D0w3WIq1.mjs'),"../content/contact-us/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.L),"../content/faq/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.N),"../content/faq/can-you-collaborate-with-our-team.mdx": () => import('../chunks/can-you-collaborate-with-our-team_CrLcyItd.mjs'),"../content/faq/can-you-connect-forms-bookings-or-a-crm.mdx": () => import('../chunks/can-you-connect-forms-bookings-or-a-crm_DIzP919G.mjs'),"../content/faq/can-you-help-with-the-words-and-images.mdx": () => import('../chunks/can-you-help-with-the-words-and-images_C1atG-dO.mjs'),"../content/faq/can-you-redesign-my-current-site.mdx": () => import('../chunks/can-you-redesign-my-current-site_Ah4K3CLl.mjs'),"../content/faq/do-you-build-online-stores.mdx": () => import('../chunks/do-you-build-online-stores_CMNnXnGw.mjs'),"../content/faq/do-you-do-seo.mdx": () => import('../chunks/do-you-do-seo_0vZ26itD.mjs'),"../content/faq/do-you-handle-hosting-and-maintenance.mdx": () => import('../chunks/do-you-handle-hosting-and-maintenance_rhkRZqq-.mjs'),"../content/faq/do-you-offer-payment-plans.mdx": () => import('../chunks/do-you-offer-payment-plans_Bq3y2Cz0.mjs'),"../content/faq/do-you-set-up-google-business-and-social-accounts.mdx": () => import('../chunks/do-you-set-up-google-business-and-social-accounts_BpDoS2Tb.mjs'),"../content/faq/how-do-revisions-work.mdx": () => import('../chunks/how-do-revisions-work_BoXbv9z1.mjs'),"../content/faq/how-do-we-get-started.mdx": () => import('../chunks/how-do-we-get-started_D0Wo_Myu.mjs'),"../content/faq/how-long-does-it-take-to-build-a-website.mdx": () => import('../chunks/how-long-does-it-take-to-build-a-website_fZn9jEJ2.mjs'),"../content/faq/what-about-ai-seo-and-chatgpt-visibility.mdx": () => import('../chunks/what-about-ai-seo-and-chatgpt-visibility_DJMmnC9Q.mjs'),"../content/faq/what-do-you-need-from-me.mdx": () => import('../chunks/what-do-you-need-from-me_C_MukBFK.mjs'),"../content/faq/what-is-included-in-your-ongoing-support.mdx": () => import('../chunks/what-is-included-in-your-ongoing-support_D0s2lO8g.mjs'),"../content/faq/will-my-site-be-secure.mdx": () => import('../chunks/will-my-site-be-secure_BHgYufyw.mjs'),"../content/faq/will-my-website-be-mobile-friendly.mdx": () => import('../chunks/will-my-website-be-mobile-friendly_C6_pBCNd.mjs'),"../content/industries/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.O),"../content/industries/authors-personal-brands.mdx": () => import('../chunks/authors-personal-brands_cJ3954Lg.mjs'),"../content/industries/b2b-services.mdx": () => import('../chunks/b2b-services_DUPcsez6.mjs'),"../content/industries/bakeries.mdx": () => import('../chunks/bakeries_D38HSaBp.mjs'),"../content/industries/bars-lounges.mdx": () => import('../chunks/bars-lounges_CkQ9UapZ.mjs'),"../content/industries/book-authors.mdx": () => import('../chunks/book-authors_ewwviNkN.mjs'),"../content/industries/boutique-brands.mdx": () => import('../chunks/boutique-brands_BAmSBNYo.mjs'),"../content/industries/branding-agency-partnerships.mdx": () => import('../chunks/branding-agency-partnerships_DhTxnxO7.mjs'),"../content/industries/cafes-coffee-shops.mdx": () => import('../chunks/cafes-coffee-shops_DovlF2QE.mjs'),"../content/industries/catering-companies.mdx": () => import('../chunks/catering-companies_DhrVNylD.mjs'),"../content/industries/cleaning-services.mdx": () => import('../chunks/cleaning-services_oSSeue0D.mjs'),"../content/industries/clothing-apparel.mdx": () => import('../chunks/clothing-apparel_CT0aGibc.mjs'),"../content/industries/coaches.mdx": () => import('../chunks/coaches_hhST1cs5.mjs'),"../content/industries/consultants.mdx": () => import('../chunks/consultants_D-HFsdnz.mjs'),"../content/industries/course-creators.mdx": () => import('../chunks/course-creators_C2LLBWso.mjs'),"../content/industries/cpas-accountants.mdx": () => import('../chunks/cpas-accountants_CLL4TWVB.mjs'),"../content/industries/creative-studio-development-support.mdx": () => import('../chunks/creative-studio-development-support_DnZJiQ0F.mjs'),"../content/industries/demolition.mdx": () => import('../chunks/demolition_DVdNIuTF.mjs'),"../content/industries/dropshipping-brands.mdx": () => import('../chunks/dropshipping-brands_Di5smGIn.mjs'),"../content/industries/electrical.mdx": () => import('../chunks/electrical_DZH6doWe.mjs'),"../content/industries/fast-casual.mdx": () => import('../chunks/fast-casual_B7hIXpGr.mjs'),"../content/industries/fencing-contractors.mdx": () => import('../chunks/fencing-contractors_CzjY52MS.mjs'),"../content/industries/financial-advisors.mdx": () => import('../chunks/financial-advisors_CbrfGlIc.mjs'),"../content/industries/fitness-trainers.mdx": () => import('../chunks/fitness-trainers_D6z3dxdu.mjs'),"../content/industries/flooring-installers.mdx": () => import('../chunks/flooring-installers_B1GaA29N.mjs'),"../content/industries/food-trucks.mdx": () => import('../chunks/food-trucks_B-4yJS5e.mjs'),"../content/industries/garage-door-repair.mdx": () => import('../chunks/garage-door-repair_DZXLI0y4.mjs'),"../content/industries/handmade-products.mdx": () => import('../chunks/handmade-products_Cq4oXxxa.mjs'),"../content/industries/handyman-services.mdx": () => import('../chunks/handyman-services_uVKRB-Em.mjs'),"../content/industries/health-beauty-products.mdx": () => import('../chunks/health-beauty-products_D_rk-cL7.mjs'),"../content/industries/health-wellness-studios.mdx": () => import('../chunks/health-wellness-studios_BkSn5adP.mjs'),"../content/industries/home-goods.mdx": () => import('../chunks/home-goods_Dbd3cuT0.mjs'),"../content/industries/home-services.mdx": () => import('../chunks/home-services_cbtAe_JN.mjs'),"../content/industries/hvac.mdx": () => import('../chunks/hvac_DS2kzkJT.mjs'),"../content/industries/influencers.mdx": () => import('../chunks/influencers_wYsxDS4h.mjs'),"../content/industries/insurance-agents.mdx": () => import('../chunks/insurance-agents_Der6szzy.mjs'),"../content/industries/it-service-providers.mdx": () => import('../chunks/it-service-providers_534UlGyt.mjs'),"../content/industries/juice-smoothie-shops.mdx": () => import('../chunks/juice-smoothie-shops_DAWoQTKl.mjs'),"../content/industries/junk-removal.mdx": () => import('../chunks/junk-removal_Dt49zlBj.mjs'),"../content/industries/landscaping.mdx": () => import('../chunks/landscaping_CjgzTr6-.mjs'),"../content/industries/lawyers-attorneys.mdx": () => import('../chunks/lawyers-attorneys_B9TT30g-.mjs'),"../content/industries/local-community-organizations.mdx": () => import('../chunks/local-community-organizations_C1vsWVjH.mjs'),"../content/industries/marketing-agencies.mdx": () => import('../chunks/marketing-agencies_CoTjXjrx.mjs'),"../content/industries/marketing-professionals.mdx": () => import('../chunks/marketing-professionals_D80TBKPz.mjs'),"../content/industries/meal-prep-services.mdx": () => import('../chunks/meal-prep-services_Dpd0qjQS.mjs'),"../content/industries/medical-practices.mdx": () => import('../chunks/medical-practices_D5WLGey1.mjs'),"../content/industries/more-industries.mdx": () => import('../chunks/more-industries_D4hs1HQw.mjs'),"../content/industries/multi-crew-contractors.mdx": () => import('../chunks/multi-crew-contractors_DV8VmI2d.mjs'),"../content/industries/nonprofits.mdx": () => import('../chunks/nonprofits_Dn5U7xnh.mjs'),"../content/industries/online-retail.mdx": () => import('../chunks/online-retail_D8PIrnP5.mjs'),"../content/industries/overflow-development-support.mdx": () => import('../chunks/overflow-development-support_CtlPRTVD.mjs'),"../content/industries/painting-contractors.mdx": () => import('../chunks/painting-contractors_CO-YtlF5.mjs'),"../content/industries/personal-portfolios.mdx": () => import('../chunks/personal-portfolios_CsUcfU2e.mjs'),"../content/industries/pest-control.mdx": () => import('../chunks/pest-control_DL4xuqtK.mjs'),"../content/industries/plumbing.mdx": () => import('../chunks/plumbing_DgClsNid.mjs'),"../content/industries/pressure-washing.mdx": () => import('../chunks/pressure-washing_CfeioKtn.mjs'),"../content/industries/product-based-businesses.mdx": () => import('../chunks/product-based-businesses_BTrWh6Wl.mjs'),"../content/industries/professional-services.mdx": () => import('../chunks/professional-services_g5eEqc8f.mjs'),"../content/industries/real-estate-professionals.mdx": () => import('../chunks/real-estate-professionals_HgXnIQ0Y.mjs'),"../content/industries/restaurants-food-service.mdx": () => import('../chunks/restaurants-food-service_9CbMJ7mc.mjs'),"../content/industries/roofing.mdx": () => import('../chunks/roofing_C1zQ61y5.mjs'),"../content/industries/salons-barbers.mdx": () => import('../chunks/salons-barbers_BVLrMiQ1.mjs'),"../content/industries/seo-agency-partnerships.mdx": () => import('../chunks/seo-agency-partnerships_NTZm4GU2.mjs'),"../content/industries/sit-down-restaurants.mdx": () => import('../chunks/sit-down-restaurants_CIb4EQMK.mjs'),"../content/industries/social-media-agency-partnerships.mdx": () => import('../chunks/social-media-agency-partnerships_BqDVqrMe.mjs'),"../content/industries/solar.mdx": () => import('../chunks/solar_B9PC_GSo.mjs'),"../content/industries/speakers.mdx": () => import('../chunks/speakers_CGLPM6Lq.mjs'),"../content/industries/subscription-box-companies.mdx": () => import('../chunks/subscription-box-companies_DqezUL-a.mjs'),"../content/industries/supplements-wellness.mdx": () => import('../chunks/supplements-wellness_Btk-5Z2Q.mjs'),"../content/industries/therapists-counselors.mdx": () => import('../chunks/therapists-counselors_C7TP-Ngr.mjs'),"../content/industries/web-production-support.mdx": () => import('../chunks/web-production-support_xxZ46XJW.mjs'),"../content/industries/white-label-development.mdx": () => import('../chunks/white-label-development_DdtDvxum.mjs'),"../content/industries/window-door-installation.mdx": () => import('../chunks/window-door-installation_gyahpeFQ.mjs'),"../content/legal/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.P),"../content/legal/cookie-policy.mdx": () => import('../chunks/cookie-policy_DFEWQCHv.mjs'),"../content/legal/privacy-policy.mdx": () => import('../chunks/privacy-policy_DdpLGTae.mjs'),"../content/legal/terms-of-service.mdx": () => import('../chunks/terms-of-service_u_AsoXwq.mjs'),"../content/menu-items/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.Q),"../content/menus/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.R),"../content/projects/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.S),"../content/projects/certified-bag-chasers-light.mdx": () => import('../chunks/certified-bag-chasers-light_DzLGbzV-.mjs'),"../content/projects/farias-demolition.mdx": () => import('../chunks/farias-demolition_DNGpeQU2.mjs'),"../content/projects/pablos-peak-roofing.mdx": () => import('../chunks/pablos-peak-roofing_C4N5peMT.mjs'),"../content/projects/pronto-junk-removal.mdx": () => import('../chunks/pronto-junk-removal_DSNglwQW.mjs'),"../content/projects/roonys-marketing.mdx": () => import('../chunks/roonys-marketing_DKK-Y8Ac.mjs'),"../content/projects/tok-secret-formula.mdx": () => import('../chunks/tok-secret-formula_Cs_V9DXw.mjs'),"../content/projects/universal-chillers.mdx": () => import('../chunks/universal-chillers_CL_6zo3F.mjs'),"../content/social-media/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.U),"../content/solutions/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.V),"../content/solutions/blog.mdx": () => import('../chunks/blog_Co3xCnXB.mjs'),"../content/solutions/custom-full-stack-applications.mdx": () => import('../chunks/custom-full-stack-applications_C7pLyzHY.mjs'),"../content/solutions/e-commerce-websites.mdx": () => import('../chunks/e-commerce-websites_WvU-SrfU.mjs'),"../content/solutions/landing-pages.mdx": () => import('../chunks/landing-pages_CSFDodk9.mjs'),"../content/solutions/restaurant-websites.mdx": () => import('../chunks/restaurant-websites_CNg2cFrE.mjs'),"../content/solutions/standard-websites.mdx": () => import('../chunks/standard-websites_CnrbDcOc.mjs'),"../content/stats/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.W),"../content/stats/industries-served.mdx": () => import('../chunks/industries-served_BZmyY5kj.mjs'),"../content/stats/projects-launched.mdx": () => import('../chunks/projects-launched_BSPUfESk.mjs'),"../content/stats/support-response.mdx": () => import('../chunks/support-response_T4sRv6jG.mjs'),"../content/stats/uptime.mdx": () => import('../chunks/uptime_YaROUlhd.mjs'),"../content/technologies/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.X),"../content/technologies/astro.mdx": () => import('../chunks/astro_CEAbcP2m.mjs'),"../content/technologies/aws.mdx": () => import('../chunks/aws_DGcrcjl1.mjs'),"../content/technologies/cloudflare.mdx": () => import('../chunks/cloudflare_Bz8DzyU_.mjs'),"../content/technologies/css.mdx": () => import('../chunks/css_06EVoBoF.mjs'),"../content/technologies/elementor.mdx": () => import('../chunks/elementor_BTIJUMqE.mjs'),"../content/technologies/figma.mdx": () => import('../chunks/figma_SBN4ZBnF.mjs'),"../content/technologies/framer.mdx": () => import('../chunks/framer_CzP9hW9U.mjs'),"../content/technologies/gatsby.mdx": () => import('../chunks/gatsby_BJD7KuXp.mjs'),"../content/technologies/github.mdx": () => import('../chunks/github_C1k_TI6I.mjs'),"../content/technologies/html.mdx": () => import('../chunks/html_DJNOTcmh.mjs'),"../content/technologies/javascript.mdx": () => import('../chunks/javascript_CG7yVgF7.mjs'),"../content/technologies/nextjs.mdx": () => import('../chunks/nextjs_EiZpXV3W.mjs'),"../content/technologies/nodejs.mdx": () => import('../chunks/nodejs_CSWlgkA4.mjs'),"../content/technologies/php.mdx": () => import('../chunks/php_CqIvo5um.mjs'),"../content/technologies/python.mdx": () => import('../chunks/python_CpdcXZuI.mjs'),"../content/technologies/react.mdx": () => import('../chunks/react_dS52NndW.mjs'),"../content/technologies/shopify.mdx": () => import('../chunks/shopify_DQSueb6e.mjs'),"../content/technologies/svelte.mdx": () => import('../chunks/svelte_DT-sgKF5.mjs'),"../content/technologies/vercel.mdx": () => import('../chunks/vercel_DhfmXe14.mjs'),"../content/technologies/webflow.mdx": () => import('../chunks/webflow_D0LIltIk.mjs'),"../content/technologies/wordpress.mdx": () => import('../chunks/wordpress_DB0nl9O_.mjs'),"../content/testimonials/_meta.mdx": () => import('../chunks/BaseLayout_BE8p8IeC.mjs').then(n => n.Y),"../content/testimonials/anthony-gonzales.mdx": () => import('../chunks/anthony-gonzales_CwRVNC4B.mjs'),"../content/testimonials/arold-norelus.mdx": () => import('../chunks/arold-norelus_C5wcN56m.mjs'),"../content/testimonials/darius-clark.mdx": () => import('../chunks/darius-clark__qOGhscq.mjs'),"../content/testimonials/kenn-faria.mdx": () => import('../chunks/kenn-faria_2QY_Bcaf.mjs'),"../content/testimonials/richard-faria.mdx": () => import('../chunks/richard-faria_DH6sZM2E.mjs'),"../content/testimonials/tarun-kumar.mdx": () => import('../chunks/tarun-kumar_xulA8lg9.mjs')})), `../content/${collectionName}/${fileName}.mdx`, 4);
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
