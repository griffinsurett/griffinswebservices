import { s as siteData } from '../chunks/siteData_DTT4mimC.mjs';
export { renderers } from '../renderers.mjs';

const GET = () => {
  const lines = [
    "User-agent: *",
    "Allow: /",
    // Uncomment when you have a sitemap
    // `Sitemap: ${siteUrl}/sitemap-0.xml`,
    `Host: ${siteData.url}`
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
