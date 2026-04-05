// src/siteData.ts - Compatible with both Astro and React
const siteDomain = import.meta.env.PUBLIC_SITE_DOMAIN;
import Logo from "@/assets/Logo.jpg"

export const siteData = {
  title: "Griffin's Web Services",
  legalName: "Griffin's Web Services LLC",
  description:
    "Every great business deserves a powerful online presence. We create websites that do more than just exist — they load instantly, showcase your brand, engage visitors, and grow alongside your business. We don’t just design your site — we make it lightning-fast, manage it, and protect it for the long term.",
  domain: siteDomain,
  url: `https://${siteDomain}`,
  location: "Freehold, New Jersey, United States",
  address: null,
  tagline: "Get a website your business can be proud of — fast, secure, and built to last.",
  ceoName: "Griffin Surett",
  ceoTitle: "Founder & CEO",
  ceoQuote:
    "My goal is to build websites that work for business owners, not against them, with fast loading, clear structure, and the kind of performance that makes it easy for people to trust what they see and take action without waiting.",
  logo: {
    src: Logo.src,
    alt: "Griffin's Web Services Logo",
  },
};

export const ctaData = {
  text: "Get Started Now!",
  link: "/pricing",
};

export const contactCtaData = {
  text: "Give Us a Call",
  link: "/contact-us",
};

export const pricingCtaData = {
  text: "View Pricing",
  link: "/pricing",
};
