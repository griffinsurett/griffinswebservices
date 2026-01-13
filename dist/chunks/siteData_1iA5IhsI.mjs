const Logo = new Proxy({"src":"/assets/Logo-2i0YfY9D.jpg","width":1578,"height":1063,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/assets/Logo.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/assets/Logo.jpg");
							return target[name];
						}
					});

const siteDomain = "griffinswebservices.com";
const siteData = {
  title: "Griffin's Web Services",
  legalName: "Griffin's Web Services LLC",
  description: "Every great business deserves a powerful online presence. We create websites that do more than just exist — they load instantly, showcase your brand, engage visitors, and grow alongside your business. We don’t just design your site — we make it lightning-fast, manage it, and protect it for the long term.",
  url: `https://${siteDomain}`,
  location: "Freehold, New Jersey, United States",
  tagline: "Get a website your business can be proud of — fast, secure, and built to last.",
  logo: {
    src: Logo.src}
};

export { siteData as s };
