const contentModules = new Map([
["src/content/legal/privacy-policy.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.p)],
["src/content/legal/cookie-policy.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.c)],
["src/content/legal/terms-of-service.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.t)],
["src/content/about-us/our-difference.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.o)],
["src/content/about-us/our-focus.mdx", () => Promise.resolve().then(() => ourFocus)],
["src/content/about-us/our-obsession.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.a)],
["src/content/about-us/our-story.mdx", () => Promise.resolve().then(() => ourStory)],
["src/content/about-us/our-philosophy.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.a)],
["src/content/blog/first-post.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.f)],
["src/content/testimonials/anthony-gonzales.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.a)],
["src/content/testimonials/darius-clark.mdx", () => Promise.resolve().then(() => dariusClark)],
["src/content/testimonials/arold-norelus.mdx", () => Promise.resolve().then(() => aroldNorelus)],
["src/content/testimonials/kenn-faria.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.k)],
["src/content/testimonials/richard-faria.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.r)],
["src/content/testimonials/tarun-kumar.mdx", () => Promise.resolve().then(() => tarunKumar)],
["src/content/projects/pablos-peak-roofing.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.p)],
["src/content/projects/farias-demolition.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.f)],
["src/content/projects/certified-bag-chasers-light.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.c)],
["src/content/projects/pronto-junk-removal.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.b)],
["src/content/projects/roonys-marketing.mdx", () => Promise.resolve().then(() => roonysMarketing)],
["src/content/projects/universal-chillers.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.u)],
["src/content/projects/tok-secret-formula.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.t)],
["src/content/faq/can-you-collaborate-with-our-team.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.a)],
["src/content/faq/can-you-connect-forms-bookings-or-a-crm.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.b)],
["src/content/faq/can-you-help-with-the-words-and-images.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.b)],
["src/content/faq/can-you-redesign-my-current-site.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.d)],
["src/content/faq/do-you-build-online-stores.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.d)],
["src/content/faq/do-you-do-seo.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.d)],
["src/content/faq/do-you-handle-hosting-and-maintenance.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.e)],
["src/content/faq/do-you-offer-payment-plans.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.d)],
["src/content/faq/how-do-revisions-work.mdx", () => Promise.resolve().then(() => howDoRevisionsWork)],
["src/content/faq/do-you-set-up-google-business-and-social-accounts.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.d)],
["src/content/solutions/blog.mdx", () => Promise.resolve().then(() => blog)],
["src/content/solutions/custom-full-stack-applications.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.f)],
["src/content/solutions/e-commerce-websites.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.e)],
["src/content/solutions/restaurant-websites.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.c)],
["src/content/solutions/landing-pages.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.l)],
["src/content/capabilities/accessibility-compliance.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.g)],
["src/content/solutions/standard-websites.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.s)],
["src/content/capabilities/back-end-development.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.b)],
["src/content/capabilities/brand-identity-design.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.a)],
["src/content/capabilities/analytics-conversion-optimization.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.e)],
["src/content/capabilities/browser-extension-development.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.h)],
["src/content/capabilities/design-systems.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.g)],
["src/content/capabilities/e-commerce-development.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.e)],
["src/content/capabilities/front-end-development.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.f)],
["src/content/capabilities/full-stack-web-development.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.i)],
["src/content/capabilities/managed-website-hosting.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.m)],
["src/content/industries/authors-personal-brands.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.c)],
["src/content/industries/contractors.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.g)],
["src/content/industries/marketing-agencies.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.m)],
["src/content/industries/product-based-businesses.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.p)],
["src/content/industries/professional-services.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.g)],
["src/content/industries/restaurants-food-service.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.r)],
["src/content/technologies/astro.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.h)],
["src/content/technologies/aws.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.b)],
["src/content/technologies/cloudflare.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.c)],
["src/content/technologies/elementor.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.i)],
["src/content/technologies/css.mdx", () => Promise.resolve().then(() => css)],
["src/content/technologies/figma.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.j)],
["src/content/technologies/framer.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.f)],
["src/content/technologies/gatsby.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.g)],
["src/content/technologies/github.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.e)],
["src/content/technologies/html.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.h)],
["src/content/stats/industries-served.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.i)],
["src/content/stats/projects-launched.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.p)],
["src/content/stats/support-response.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.k)],
["src/content/stats/uptime.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.u)],
["src/content/benefits/designed-to-grow-with-you.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.h)],
["src/content/benefits/future-ready-ai-prepared.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.i)],
["src/content/benefits/designed-to-stand-out-on-every-device.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.l)],
["src/content/benefits/lightning-fast-websites.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.l)],
["src/content/benefits/security-minded-by-design.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.s)],
["src/content/benefits/support-that-sticks-around.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.s)],
["src/content/benefits/seo-from-the-foundations.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.j)],
["src/content/faq/how-do-we-get-started.mdx", () => Promise.resolve().then(() => howDoWeGetStarted)],
["src/content/faq/how-long-does-it-take-to-build-a-website.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.m)],
["src/content/faq/what-about-ai-seo-and-chatgpt-visibility.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.w)],
["src/content/faq/what-do-you-need-from-me.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.w)],
["src/content/faq/what-is-included-in-your-ongoing-support.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.n)],
["src/content/faq/will-my-site-be-secure.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.h)],
["src/content/faq/will-my-website-be-mobile-friendly.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.w)],
["src/content/capabilities/performance-optimization.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.p)],
["src/content/capabilities/seo.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.q)],
["src/content/capabilities/technical-support.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.t)],
["src/content/capabilities/uptime-reliability-monitoring.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.u)],
["src/content/capabilities/web-design.mdx", () => Promise.resolve().then(() => webDesign)],
["src/content/capabilities/web-development.mdx", () => import('./web-development_CgTrunXY.mjs').then(n => n.i)],
["src/content/capabilities/webmaster-services.mdx", () => import('./webmaster-services_DYmYIrKJ.mjs').then(n => n.w)],
["src/content/capabilities/website-maintenance-support.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.j)],
["src/content/capabilities/website-migration-services.mdx", () => import('./website-migration-services_Cjh_GgH0.mjs').then(n => n.k)],
["src/content/technologies/javascript.mdx", () => Promise.resolve().then(() => javascript)],
["src/content/capabilities/website-redesign-modernization.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.r)],
["src/content/technologies/nextjs.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.n)],
["src/content/technologies/nodejs.mdx", () => Promise.resolve().then(() => nodejs)],
["src/content/technologies/php.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.u)],
["src/content/technologies/python.mdx", () => Promise.resolve().then(() => python)],
["src/content/technologies/react.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.v)],
["src/content/technologies/shopify.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.x)],
["src/content/technologies/svelte.mdx", () => Promise.resolve().then(() => svelte)],
["src/content/technologies/vercel.mdx", () => Promise.resolve().then(() => vercel)],
["src/content/technologies/webflow.mdx", () => import('./webflow_09kSCvt8.mjs').then(n => n.y)],
["src/content/technologies/wordpress.mdx", () => import('./wordpress_CB8A8Itm.mjs').then(n => n.w)]]);

async function getMod$f() {
						return import('./our-focus_14Ox1m7V.mjs');
					}
					const collectedLinks$f = "@@ASTRO-LINKS@@";
					const collectedStyles$f = "@@ASTRO-STYLES@@";
					const defaultMod$f = { __astroPropagation: true, getMod: getMod$f, collectedLinks: collectedLinks$f, collectedStyles: collectedStyles$f, collectedScripts: [] };

const ourFocus = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$f
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$e() {
						return import('./our-story_B2Jjw6ca.mjs');
					}
					const collectedLinks$e = "@@ASTRO-LINKS@@";
					const collectedStyles$e = "@@ASTRO-STYLES@@";
					const defaultMod$e = { __astroPropagation: true, getMod: getMod$e, collectedLinks: collectedLinks$e, collectedStyles: collectedStyles$e, collectedScripts: [] };

const ourStory = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$e
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$d() {
						return import('./darius-clark__qOGhscq.mjs');
					}
					const collectedLinks$d = "@@ASTRO-LINKS@@";
					const collectedStyles$d = "@@ASTRO-STYLES@@";
					const defaultMod$d = { __astroPropagation: true, getMod: getMod$d, collectedLinks: collectedLinks$d, collectedStyles: collectedStyles$d, collectedScripts: [] };

const dariusClark = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$d
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$c() {
						return import('./arold-norelus_C5wcN56m.mjs');
					}
					const collectedLinks$c = "@@ASTRO-LINKS@@";
					const collectedStyles$c = "@@ASTRO-STYLES@@";
					const defaultMod$c = { __astroPropagation: true, getMod: getMod$c, collectedLinks: collectedLinks$c, collectedStyles: collectedStyles$c, collectedScripts: [] };

const aroldNorelus = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$c
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$b() {
						return import('./tarun-kumar_xulA8lg9.mjs');
					}
					const collectedLinks$b = "@@ASTRO-LINKS@@";
					const collectedStyles$b = "@@ASTRO-STYLES@@";
					const defaultMod$b = { __astroPropagation: true, getMod: getMod$b, collectedLinks: collectedLinks$b, collectedStyles: collectedStyles$b, collectedScripts: [] };

const tarunKumar = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$b
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$a() {
						return import('./roonys-marketing_BFfklR80.mjs');
					}
					const collectedLinks$a = "@@ASTRO-LINKS@@";
					const collectedStyles$a = "@@ASTRO-STYLES@@";
					const defaultMod$a = { __astroPropagation: true, getMod: getMod$a, collectedLinks: collectedLinks$a, collectedStyles: collectedStyles$a, collectedScripts: [] };

const roonysMarketing = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$a
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$9() {
						return import('./how-do-revisions-work_BoXbv9z1.mjs');
					}
					const collectedLinks$9 = "@@ASTRO-LINKS@@";
					const collectedStyles$9 = "@@ASTRO-STYLES@@";
					const defaultMod$9 = { __astroPropagation: true, getMod: getMod$9, collectedLinks: collectedLinks$9, collectedStyles: collectedStyles$9, collectedScripts: [] };

const howDoRevisionsWork = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$9
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$8() {
						return import('./blog_BxzBJHo-.mjs');
					}
					const collectedLinks$8 = "@@ASTRO-LINKS@@";
					const collectedStyles$8 = "@@ASTRO-STYLES@@";
					const defaultMod$8 = { __astroPropagation: true, getMod: getMod$8, collectedLinks: collectedLinks$8, collectedStyles: collectedStyles$8, collectedScripts: [] };

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$8
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$7() {
						return import('./css_06EVoBoF.mjs');
					}
					const collectedLinks$7 = "@@ASTRO-LINKS@@";
					const collectedStyles$7 = "@@ASTRO-STYLES@@";
					const defaultMod$7 = { __astroPropagation: true, getMod: getMod$7, collectedLinks: collectedLinks$7, collectedStyles: collectedStyles$7, collectedScripts: [] };

const css = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$7
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$6() {
						return import('./how-do-we-get-started_D0Wo_Myu.mjs');
					}
					const collectedLinks$6 = "@@ASTRO-LINKS@@";
					const collectedStyles$6 = "@@ASTRO-STYLES@@";
					const defaultMod$6 = { __astroPropagation: true, getMod: getMod$6, collectedLinks: collectedLinks$6, collectedStyles: collectedStyles$6, collectedScripts: [] };

const howDoWeGetStarted = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$6
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$5() {
						return import('./web-design_Bv2IATw_.mjs');
					}
					const collectedLinks$5 = "@@ASTRO-LINKS@@";
					const collectedStyles$5 = "@@ASTRO-STYLES@@";
					const defaultMod$5 = { __astroPropagation: true, getMod: getMod$5, collectedLinks: collectedLinks$5, collectedStyles: collectedStyles$5, collectedScripts: [] };

const webDesign = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$5
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$4() {
						return import('./javascript_CG7yVgF7.mjs');
					}
					const collectedLinks$4 = "@@ASTRO-LINKS@@";
					const collectedStyles$4 = "@@ASTRO-STYLES@@";
					const defaultMod$4 = { __astroPropagation: true, getMod: getMod$4, collectedLinks: collectedLinks$4, collectedStyles: collectedStyles$4, collectedScripts: [] };

const javascript = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$4
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$3() {
						return import('./nodejs_CSWlgkA4.mjs');
					}
					const collectedLinks$3 = "@@ASTRO-LINKS@@";
					const collectedStyles$3 = "@@ASTRO-STYLES@@";
					const defaultMod$3 = { __astroPropagation: true, getMod: getMod$3, collectedLinks: collectedLinks$3, collectedStyles: collectedStyles$3, collectedScripts: [] };

const nodejs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$3
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$2() {
						return import('./python_CpdcXZuI.mjs');
					}
					const collectedLinks$2 = "@@ASTRO-LINKS@@";
					const collectedStyles$2 = "@@ASTRO-STYLES@@";
					const defaultMod$2 = { __astroPropagation: true, getMod: getMod$2, collectedLinks: collectedLinks$2, collectedStyles: collectedStyles$2, collectedScripts: [] };

const python = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$2
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$1() {
						return import('./svelte_DT-sgKF5.mjs');
					}
					const collectedLinks$1 = "@@ASTRO-LINKS@@";
					const collectedStyles$1 = "@@ASTRO-STYLES@@";
					const defaultMod$1 = { __astroPropagation: true, getMod: getMod$1, collectedLinks: collectedLinks$1, collectedStyles: collectedStyles$1, collectedScripts: [] };

const svelte = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$1
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod() {
						return import('./vercel_DhfmXe14.mjs');
					}
					const collectedLinks = "@@ASTRO-LINKS@@";
					const collectedStyles = "@@ASTRO-STYLES@@";
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

const vercel = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod
}, Symbol.toStringTag, { value: 'Module' }));

export { contentModules as default };
