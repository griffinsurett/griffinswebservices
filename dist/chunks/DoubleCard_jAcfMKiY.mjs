import { a as createComponent, c as createAstro, m as maybeRenderHead, b as addAttribute, e as renderTemplate, s as spreadAttributes, d as renderComponent } from './astro/server_BujBp8IR.mjs';
import { a as animationProps, H as Heading, B as Button, l as logoImg } from './accordion_B-QbiZo0.mjs';
import 'piccolore';
import 'clsx';
import { u as getImage, v as $$Counter } from './BaseLayout_DpejhLLs.mjs';
/* empty css                                                                  */

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$BackgroundMedia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BackgroundMedia;
  const { backgroundMedia } = Astro2.props;
  const aboveTheFold = backgroundMedia?.image?.aboveTheFold ?? false;
  const priority = backgroundMedia?.image?.priority ?? aboveTheFold;
  const loading = backgroundMedia?.image?.loading ?? (aboveTheFold ? "eager" : "lazy");
  const qualitySettings = aboveTheFold ? { mobile: 50, tablet: 55, desktop: 60 } : { mobile: 65, tablet: 70, desktop: 75 };
  const customQuality = backgroundMedia?.image?.quality;
  const maxWidth = backgroundMedia?.image?.maxWidth ?? 1920;
  const tabletWidth = Math.min(1024, maxWidth);
  const mobileWidth = Math.min(640, maxWidth);
  let responsiveImages = null;
  if (backgroundMedia?.image?.src) {
    const rawSrc = backgroundMedia.image.src;
    const isAstroImageMetadata = typeof rawSrc === "object" && rawSrc !== null && "width" in rawSrc && "height" in rawSrc && "format" in rawSrc;
    const isAlreadyProcessed = typeof rawSrc === "object" && rawSrc !== null && typeof rawSrc.src === "string" && !isAstroImageMetadata;
    if (isAstroImageMetadata || typeof rawSrc !== "string" && !isAlreadyProcessed) {
      try {
        const [mobile, tablet, desktop] = await Promise.all([
          getImage({
            src: rawSrc,
            format: "webp",
            quality: customQuality ?? qualitySettings.mobile,
            width: mobileWidth
          }),
          getImage({
            src: rawSrc,
            format: "webp",
            quality: customQuality ?? qualitySettings.tablet,
            width: tabletWidth
          }),
          getImage({
            src: rawSrc,
            format: "webp",
            quality: customQuality ?? qualitySettings.desktop,
            width: maxWidth
          })
        ]);
        responsiveImages = { mobile, tablet, desktop };
      } catch (error) {
        console.error("Failed to optimize background image:", error);
      }
    } else {
      const srcValue = isAlreadyProcessed ? rawSrc.src : rawSrc;
      responsiveImages = {
        mobile: { src: srcValue },
        tablet: { src: srcValue },
        desktop: { src: srcValue }
      };
    }
  }
  return renderTemplate`${backgroundMedia?.video?.src ? renderTemplate`${maybeRenderHead()}<video${addAttribute(`absolute inset-0 z-0 w-full h-full object-cover ${backgroundMedia.video.videoClass || ""}`, "class")}${addAttribute(backgroundMedia.video.autoPlay !== false, "autoplay")}${addAttribute(backgroundMedia.video.muted !== false, "muted")}${addAttribute(backgroundMedia.video.loop !== false, "loop")}${addAttribute(backgroundMedia.video.playsInline !== false, "playsinline")}${addAttribute(backgroundMedia.video.controls || false, "controls")}${addAttribute(backgroundMedia.video.preload || "metadata", "preload")}${addAttribute(responsiveImages?.mobile?.src || "", "poster")} aria-hidden="true"><source${addAttribute(backgroundMedia.video.src, "src")} type="video/mp4">
Your browser does not support the video tag.
</video>` : responsiveImages ? renderTemplate`<picture class="absolute inset-0 z-0"><source media="(max-width: 640px)"${addAttribute(responsiveImages.mobile.src, "srcset")} type="image/webp"><source media="(min-width: 641px) and (max-width: 1024px)"${addAttribute(responsiveImages.tablet.src, "srcset")} type="image/webp"><source media="(min-width: 1025px)"${addAttribute(responsiveImages.desktop.src, "srcset")} type="image/webp"><img${addAttribute(responsiveImages.desktop.src, "src")} alt=""${addAttribute(`w-full h-full object-cover ${backgroundMedia?.image?.imageClass || ""}`, "class")}${addAttribute(loading, "loading")}${addAttribute(priority ? "high" : "auto", "fetchpriority")}${addAttribute(priority ? "sync" : "async", "decoding")} aria-hidden="true"></picture>` : null}${backgroundMedia?.overlayClass && renderTemplate`<div${addAttribute(`absolute inset-0 z-0 ${backgroundMedia.overlayClass}`, "class")} aria-hidden="true"></div>`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/BackgroundMedia.astro", void 0);

const meoncompImg = new Proxy({"src":"/assets/meoncomp-Clq1KPve.jpg","width":691,"height":518,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/meoncomp.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/meoncomp.jpg");
							return target[name];
						}
					});

const $$DoubleCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen w-full outer-section" data-astro-cid-bw24kgpy> <div class="inner-section flex flex-wrap gap-6" data-astro-cid-bw24kgpy> <div class="group flex w-full lg:flex-1 flex-col min-h-[400px] rounded-3xl overflow-hidden relative card-bg"${spreadAttributes(animationProps("fade-in-up", { once: false, threshold: 0.1, rootMargin: "-15% 0px -25% 0px" }))} data-astro-cid-bw24kgpy> <div class="flex flex-col p-6 space-y-2 relative z-10" data-astro-cid-bw24kgpy> <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold" data-astro-cid-bw24kgpy> ${renderComponent($$result, "Counter", $$Counter, { "end": 100, "suffix": "+", "data-astro-cid-bw24kgpy": true })} </h2> <p class="text-text large-text leading-tight" data-astro-cid-bw24kgpy>
Lightning Fast Websites powering up businesses like yours!
</p> </div> <div class="absolute bottom-0 w-full h-110 -mb-42 lg:-mb-52 overflow-hidden z-0" data-astro-cid-bw24kgpy> ${renderComponent($$result, "BackgroundMedia", $$BackgroundMedia, { "backgroundMedia": {
    image: {
      src: logoImg,
      imageClass: "object-contain light:invert",
      aboveTheFold: false,
      quality: 35,
      maxWidth: 450
    }
  }, "data-astro-cid-bw24kgpy": true })} </div> </div> <div class="group flex w-full md:flex-1 lg:flex-2 flex-col md:flex-row min-h-[400px] rounded-3xl overflow-hidden card-bg relative"${spreadAttributes(animationProps("fade-in-right", { once: false, threshold: 0.25, rootMargin: "-10% 0px -15% 0px", delay: 300 }))} data-astro-cid-bw24kgpy> <div class="relative flex-1 lg:rounded-br-[250px] overflow-hidden md:w-1/2 lg:mb-5 z-0 fade-image-shell" data-astro-cid-bw24kgpy> ${renderComponent($$result, "BackgroundMedia", $$BackgroundMedia, { "backgroundMedia": {
    image: {
      src: meoncompImg,
      imageClass: "object-cover border-image-fade fade-card-media",
      aboveTheFold: false,
      quality: 25,
      maxWidth: 600
    }
  }, "data-astro-cid-bw24kgpy": true })} </div> <div class="flex-1 flex flex-col gap-6 justify-center items-end p-6 lg:px-6 relative z-10" data-astro-cid-bw24kgpy> <!-- <div class="inner-section">will be something</div> --> ${renderComponent($$result, "Heading", Heading, { "tagName": "h3", "className": "text-3xl lg:text-4xl lg:text-right text-left", "before": "We're a New Jersey based Web Agency that creates ", "text": "fast, engaging websites.", "textClass": "m-0 p-0 emphasized-text", "data-astro-cid-bw24kgpy": true })} ${renderComponent($$result, "Button", Button, { "href": "/about-us", "variant": "secondary", "size": "lg", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default", "data-astro-cid-bw24kgpy": true }, { "default": ($$result2) => renderTemplate`
More About Us
` })} </div> </div> </div> </section> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/DoubleCard.astro", void 0);

export { $$DoubleCard as $ };
