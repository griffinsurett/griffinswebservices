const siteDomain = "https://griffinswebservices.com";
const siteData = {
  title: "Griffin's Web Services",
  legalName: "Griffin's Web Services LLC",
  description: "Every great business deserves a powerful online presence. We create websites that do more than just exist — they load instantly, showcase your brand, engage visitors, and grow alongside your business. We don’t just design your site — we make it lightning-fast, manage it, and protect it for the long term.",
  url: `https://${siteDomain}`,
  location: "Freehold, New Jersey, United States",
  tagline: "Get a website your business can be proud of — fast, secure, and built to last."};
const ctaData = {
  text: "Schedule a Consultation",
  link: "/contact-us"
};

function getCookie(name) {
  if (typeof document === "undefined") return null;
  try {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      const cookieValue = parts.pop()?.split(";").shift();
      return cookieValue ? decodeURIComponent(cookieValue) : null;
    }
    return null;
  } catch (error) {
    console.error(`Error reading cookie ${name}:`, error);
    return null;
  }
}
function setCookie(name, value, options = {}) {
  if (typeof document === "undefined") return;
  try {
    const {
      expires = 365,
      path = "/",
      sameSite = "Strict",
      secure = true,
      domain
    } = options;
    const expiryDate = /* @__PURE__ */ new Date();
    expiryDate.setTime(expiryDate.getTime() + expires * 24 * 60 * 60 * 1e3);
    const cookieParts = [
      `${name}=${encodeURIComponent(value)}`,
      `expires=${expiryDate.toUTCString()}`,
      `path=${path}`,
      `SameSite=${sameSite}`
    ];
    if (secure) {
      cookieParts.push("Secure");
    }
    if (domain) {
      cookieParts.push(`domain=${domain}`);
    }
    document.cookie = cookieParts.join("; ");
  } catch (error) {
    console.error(`Error setting cookie ${name}:`, error);
  }
}
function clearCookie(name, options = {}) {
  if (typeof document === "undefined") return;
  try {
    const { path = "/", domain } = options;
    const cookieParts = [
      `${name}=`,
      "expires=Thu, 01 Jan 1970 00:00:00 UTC",
      `path=${path}`
    ];
    if (domain) {
      cookieParts.push(`domain=${domain}`);
    }
    document.cookie = cookieParts.join("; ");
    if (!domain && typeof window !== "undefined") {
      document.cookie = cookieParts.join("; ") + `; domain=${window.location.hostname}`;
    }
  } catch (error) {
    console.error(`Error deleting cookie ${name}:`, error);
  }
}

function getConsent() {
  if (typeof document === "undefined") return null;
  try {
    const consentCookie = getCookie("cookie-consent");
    if (!consentCookie) return null;
    return JSON.parse(consentCookie);
  } catch (error) {
    console.error("Error parsing consent cookie:", error);
    return null;
  }
}
function hasConsentFor(category) {
  if (typeof document === "undefined") return false;
  if (category === "necessary") return true;
  const consent = getConsent();
  if (!consent) return false;
  return consent[category] === true;
}
function hasDoNotTrack() {
  if (typeof navigator === "undefined") return false;
  const dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
  return dnt === "1" || dnt === "yes";
}
function isTrackingAllowed(category) {
  if (hasDoNotTrack()) {
    console.log("🚫 Do Not Track enabled - tracking disabled");
    return false;
  }
  return hasConsentFor(category);
}
function optOutOfSale() {
  if (typeof document === "undefined") return;
  const consent = {
    necessary: true,
    functional: false,
    performance: false,
    targeting: false,
    timestamp: Date.now()
  };
  setCookie("cookie-consent", JSON.stringify(consent), { expires: 365 });
  window.dispatchEvent(new Event("consent-changed"));
  console.log("🚫 CCPA Opt-Out: All non-essential cookies disabled");
}

async function getMod$1() {
						return import('./uptime_YaROUlhd.mjs');
					}
					const collectedLinks$1 = [];
					const collectedStyles$1 = [];
					const defaultMod$1 = { __astroPropagation: true, getMod: getMod$1, collectedLinks: collectedLinks$1, collectedStyles: collectedStyles$1, collectedScripts: [] };

const uptime = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: defaultMod$1
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod() {
						return import('./hvac_DS2kzkJT.mjs');
					}
					const collectedLinks = "@@ASTRO-LINKS@@";
					const collectedStyles = "@@ASTRO-STYLES@@";
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

const hvac = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: defaultMod
}, Symbol.toStringTag, { value: 'Module' }));

export { setCookie as a, getConsent as b, clearCookie as c, ctaData as d, hvac as e, getCookie as g, hasConsentFor as h, isTrackingAllowed as i, optOutOfSale as o, siteData as s, uptime as u };
