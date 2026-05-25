import type { APIRoute } from "astro";
import OpenAI from "openai";
import { SITE_URL } from "@/content/siteData";

export const prerender = false;

const ALLOWED_ORIGIN = SITE_URL.replace(/\/$/, "");

const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > RATE_WINDOW_MS) {
    rateMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function isAllowedOrigin(request: Request): boolean {
  if (import.meta.env.DEV) return true;
  const origin = request.headers.get("origin");
  if (!origin) return false;
  return origin === ALLOWED_ORIGIN;
}

function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get("origin");
  const allowed = !origin || import.meta.env.DEV || origin === ALLOWED_ORIGIN;
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": allowed && origin ? origin : ALLOWED_ORIGIN,
    "Vary": "Origin",
  };
}

// ---------------------------------------------------------------------------
// Pricing constants
// ---------------------------------------------------------------------------
const PRODUCTS_INCLUDED = 10;
const PRICE_PER_EXTRA_PRODUCT = 25;
const SERVICES_INCLUDED = 10;
const SERVICES_BASE_FEE = 350;
const PRICE_PER_EXTRA_SERVICE = 50;
const BLOG_POSTS_INCLUDED = 5;
const BLOG_BASE_FEE = 1000;
const PRICE_PER_EXTRA_POST = 75;

// ---------------------------------------------------------------------------
// buildDefaultPages — manual mode page scaffold
// ---------------------------------------------------------------------------
function buildDefaultPages(
  bizName: string,
  bizLoc: string,
  answers: Record<string, any>
): any[] {
  const pages: any[] = [];
  const sp = () => ({ subpages: [] });
  if (answers.goal === "showcase") {
    pages.push({ id: "home", name: "Home", icon: "fa6:house", unique: true, desc: "", list: [], collections: [], ...sp() });
    pages.push({ id: "about", name: "About", icon: "fa6:circle-dot", unique: true, desc: `Learn about ${bizName}, based in ${bizLoc}.`, list: [], collections: [], ...sp() });
    if (answers.action === "contact" || answers.action === "both")
      pages.push({ id: "contact", name: "Contact", icon: "lu:mail", unique: true, desc: "", list: [], collections: [], ...sp() });
    if (answers.action === "book" || answers.action === "both")
      pages.push({ id: "booking", name: "Book a call", icon: "fa6:calendar-days", unique: true, desc: "", list: [], collections: [], ...sp() });
  }
  if (answers.goal === "ecommerce") {
    pages.push({ id: "home", name: "Home", icon: "fa6:house", unique: true, desc: "", list: [], collections: [], ...sp() });
    pages.push({ id: "about", name: "About", icon: "fa6:circle-dot", unique: true, desc: `Learn about ${bizName}.`, list: [], collections: [], ...sp() });
    pages.push({ id: "shop", name: "Shop", icon: "fa6:cart-shopping", unique: true, desc: "", list: [], collections: [{ name: "Products", items: [], asPages: true, template: true, isProducts: true }], ...sp() });
    pages.push({ id: "checkout", name: "Checkout", icon: "lu:credit-card", unique: true, desc: "", list: [], collections: [], ...sp() });
    pages.push({ id: "contact", name: "Contact", icon: "lu:mail", unique: true, desc: "", list: [], collections: [], ...sp() });
  }
  return pages;
}

// ---------------------------------------------------------------------------
// countUnique — how many unique pages in the set
// ---------------------------------------------------------------------------
function countUnique(pages: any[], customPages: string[]): number {
  let n = pages.filter((p) => p.unique !== false).length + customPages.length;
  pages.forEach((p) =>
    (p.collections || []).forEach((c: any) => {
      if (c.asPages && !c.isProducts && !c.isBlog) n++;
    })
  );
  return n;
}

// ---------------------------------------------------------------------------
// computePrice — all pricing logic
// ---------------------------------------------------------------------------
function computePrice(
  pages: any[],
  customPages: string[],
  answers: Record<string, any>,
  productCount: number,
  blogPostCount: number,
  scopedItems: any[],
  extrasDetail: any[]
): {
  base: number;
  ep: number;
  addons: number;
  total: number;
  items: string[];
  u: number;
  scoped: any[];
  hasNeedsScoping: boolean;
} {
  const u = countUnique(pages, customPages);
  const extras: string[] = answers.extras || [];
  let base = 0, ep = 0, addons = 0;
  const items: string[] = [];

  if (u === 1) { base = 750; items.push("1-page site — $750"); }
  else if (u <= 5) { base = 999; items.push("Up to 5-page site — $999"); }
  else { base = 999; const ov = u - 5; ep = ov * 100; items.push("5-page base — $999"); items.push(`${ov} extra page${ov > 1 ? "s" : ""} — $${ep}`); }

  if (answers.goal === "ecommerce") {
    addons += 500;
    const extraProds = Math.max(0, (productCount || 0) - PRODUCTS_INCLUDED);
    const prodCost = extraProds * PRICE_PER_EXTRA_PRODUCT;
    items.push(`E-commerce setup — $500 (incl. ${PRODUCTS_INCLUDED} product pages)`);
    if (extraProds > 0) { addons += prodCost; items.push(`${extraProds} extra product page${extraProds > 1 ? "s" : ""} — $${prodCost}`); }
  }

  const totalServicePages = pages.reduce((sum: number, p: any) => sum + (p.subpages || []).length, 0);
  if (totalServicePages > 0) {
    addons += SERVICES_BASE_FEE;
    const extraSvc = Math.max(0, totalServicePages - SERVICES_INCLUDED);
    const svcCost = extraSvc * PRICE_PER_EXTRA_SERVICE;
    items.push(`Service pages — $${SERVICES_BASE_FEE} (${totalServicePages} page${totalServicePages !== 1 ? "s" : ""}, ${Math.min(totalServicePages, SERVICES_INCLUDED)} of ${SERVICES_INCLUDED} included)`);
    if (extraSvc > 0) { addons += svcCost; items.push(`${extraSvc} extra service page${extraSvc > 1 ? "s" : ""} — $${svcCost}`); }
  }

  const hasBlog = pages.some((p: any) => (p.collections || []).some((c: any) => c.isBlog));
  if (hasBlog) {
    addons += BLOG_BASE_FEE;
    const extraPosts = Math.max(0, (blogPostCount || 0) - BLOG_POSTS_INCLUDED);
    const postCost = extraPosts * PRICE_PER_EXTRA_POST;
    items.push(`Blog setup — $${BLOG_BASE_FEE} (incl. ${BLOG_POSTS_INCLUDED} posts)`);
    if (extraPosts > 0) { addons += postCost; items.push(`${extraPosts} extra post${extraPosts > 1 ? "s" : ""} — $${postCost}`); }
  }

  if (extras.includes("analytics")) {
    addons += 175;
    items.push("Analytics base setup — $175");
    const analyticsUpgrade = (extrasDetail || []).find((e: any) => e.id === "analytics");
    if (analyticsUpgrade?.price) {
      addons += analyticsUpgrade.price;
      items.push(`Advanced tracking setup — $${analyticsUpgrade.price}`);
    }
  }

  const EXTRA_DEFAULTS: Record<string, number> = { seo: 400, ai_chat: 1000, booking_int: 150 };
  const EXTRA_LABELS: Record<string, string> = { seo: "SEO / AEO", ai_chat: "AI Chat Support", booking_int: "Booking integration" };
  const hasScopedBooking = (scopedItems || []).some((s: any) =>
    !s.needsScoping && /book|schedul|reserv|appoint|calendar/i.test(s.label)
  );

  ["seo", "ai_chat", "booking_int"].forEach((id) => {
    if (!extras.includes(id)) return;
    if (id === "booking_int" && hasScopedBooking) return;
    const detail = (extrasDetail || []).find((e: any) => e.id === id);
    const p = detail?.price ?? EXTRA_DEFAULTS[id];
    const aiPriced = !!detail?.price;
    addons += p;
    items.push(`${EXTRA_LABELS[id]} — $${p}${aiPriced ? "" : " (est.)"}`);
  });

  const scoped = scopedItems || [];
  const scopedTotal = scoped.filter((s: any) => !s.needsScoping && s.price).reduce((sum: number, s: any) => sum + s.price, 0);
  const hasNeedsScoping = scoped.some((s: any) => s.needsScoping);
  addons += scopedTotal;

  return { base, ep, addons, total: base + ep + addons, items, u, scoped, hasNeedsScoping };
}

const SYSTEM_PROMPT = `You are a senior web strategist for Griffin Web Services. A business owner has given you their name, location, service area, and description. Your job is to make every decision for them — goal, lead capture method, add-ons, page structure, and whether individual services deserve their own dedicated pages. Return a complete, opinionated recommendation. Do not hedge. Do not leave decisions blank.

## Using niche and implementation notes

The customer may provide up to 5 business niches and optional implementation notes. Use these aggressively — they are the most specific signal you have.

**Niches** tell you exactly what industry conventions apply. A "Roofing" niche means: common pages include Services, Gallery/Projects, Free Estimate, Financing, Reviews. A "Spa & Massage" niche means: Book Now is the primary CTA, services menu is critical, a team/staff page is expected. Use your knowledge of each niche to populate pages and list items with realistic, specific content rather than generic placeholders.

**Implementation notes** are direct requirements from the customer. Treat them as constraints:
- If they mention a specific feature (e.g. "financing calculator", "before/after gallery", "crew booking"), add it as a page or collection
- If they mention a system or integration (e.g. "we use ServiceTitan", "needs to connect to our CRM"), note it in the relevant page description and add booking_int to extras if applicable
- If they describe complex functionality, reflect that complexity in the page structure

Never ignore implementation notes. They represent what the customer has already decided they need.

## Reading the business

Read the business name carefully — word order signals importance. "Demolition and Disposal" is a demolition company; disposal is secondary. "Roofing and Solar" are two peer services. "Pronto Construction" is broad — keep it flat. Trust your industry knowledge.

## Deciding goal

- goal = "ecommerce" if they sell products, courses, memberships, coaching packages, or anything requiring checkout
- goal = "showcase" for all service businesses that generate leads or bookings without taking payment on the site

## Deciding action (REQUIRED — never leave this blank)

This is the most important call you make. Use everything you know about how this type of business operates:

- action = "book" if the business runs on scheduled appointments: salons, spas, tattoo studios, personal trainers, therapists, consultants, tutors, photographers, cleaning services, pest control, HVAC, landscapers, roofers who do free estimates, etc. When in doubt for a service business, lean toward "book". Also add "booking_int" to extras.
- action = "contact" if the business gets inbound inquiries that don't fit a calendar: general contractors, attorneys, agencies, wholesalers, manufacturers, non-profits, restaurants (unless they take reservations).
- action = "both" only when the business genuinely needs both a contact form AND a booking system at the same time — this is uncommon. Don't default to it.

## Deciding extras

Always evaluate each add-on independently and include it if it genuinely serves this business:
- "seo" — include for any local or regional service business competing for search traffic and for any business that would benefit from being cited in AI-powered search results (Google AI Overviews, ChatGPT search, Perplexity). Copywriting is included within the SEO/AEO scope — do not treat copy as a separate add-on.
- "analytics" — include for almost every business. Omit only for the simplest one-page brochure sites where the owner has explicitly said they don't care about tracking.
- "ai_chat" — include for service businesses that get a high volume of repetitive questions (hours, pricing, process, availability). Strong fit for: HVAC, legal, medical, dental, spas, cleaning services, real estate, e-commerce. Weaker fit for: referral-only businesses, B2B agencies, non-profits.
- "booking_int" — include only for simple calendar embeds (Calendly, Google Calendar widget). If booking is complex enough to warrant a scopedItem, do NOT also add booking_int — the scoped item replaces it.

## Pricing extras (extrasDetail)

For every add-on in your "extras" array, return a matching entry in "extrasDetail" with a specific price and a rationale citing actual details from this project — page count, niche, service area, implementation notes, competitiveness. Do not use flat rates or generic rationales.

### SEO / AEO (id: "seo") — includes copywriting
Benchmarks (SEO + AEO + copy combined):
- 3-page local site, low competition: $450–$600
- 5-page local site, moderate competition: $700–$950
- 8–12 page site with service sub-pages, competitive market: $1,100–$1,800
- Regional or statewide site with 10+ pages and sub-pages: $1,500–$2,500
- Technical/regulated industry (legal, medical): add $300–$500
- E-commerce with product copy and structured data: $1,200–$2,000

### Analytics & Tracking Setup (id: "analytics")
Fixed base of $175 always charged. Only include in extrasDetail when additional work is required beyond base:
- E-commerce tracking: add $150–$275
- Multiple conversion types beyond one: add $75–$150
- Call tracking integration: add $100–$175
- Session recording/heatmaps: add $75–$125
- CRM/marketing platform linking: add $150–$300
- Multi-location filtered views: add $100–$200
The price you return is the ADDITIONAL cost on top of $175, not the total.

### AI Chat Support (id: "ai_chat")
Floor is $1,000 — never return below this.
Benchmarks:
- FAQ training + lead capture + routing: $1,000–$1,300
- Full knowledge base + multi-service routing + booking handoff: $1,300–$1,800
- CRM sync, e-commerce, or complex routing: $1,800–$2,500
- Legal/medical/financial: add $300–$500

### Booking Integration (id: "booking_int")
Benchmarks:
- Simple styled embed, 1 service, no payments: $125–$175
- Multi-service widget, styled, no payments: $250–$375
- Multi-service with deposit/payment + confirmation flow: $400–$600
- Complex platform (FareHarbor, Mindbody, Vagaro): $500–$900
If booking complexity warrants a scopedItem, do NOT include booking_int in extrasDetail.

## Building pages

Always include Home and About. Default to a single Services page with a list. Only give a service its own top-level page when there's a strong SEO reason.

Use collections for grouped content. Set asPages:true only when individual items serve SEO. Blog always gets asPages:true and isBlog:true.

For ecommerce: always include Shop (Products collection, asPages:true), Checkout, Contact.
For booking action: always include a Booking page.
For contact action: always include a Contact page.

## Deciding service sub-pages (subpages)

Sub-pages add +$350 as a package (up to 10 included, $50 each after). Only recommend when there's genuine strategic value.

Promote to subpage when: the service has its own search demand, serves a different audience, the business is in a competitive local market, or the service area is regional or wider.

Keep as list item when: it's a minor variation, the business is hyper-local with low competition, or the service is too niche to justify a dedicated page.

## Scoped line items

Return a "scopedItems" array for features that can't be priced from a fixed table. Return a single confident price, not a range. Set needsScoping:true only when the requirement is genuinely ambiguous and could vary by an order of magnitude.

Always consider scopedItems for: booking/scheduling systems, payment processing, custom calculators, third-party integrations (CRM, ERP, dispatch software), member areas, multi-location features.

Do NOT create a scopedItem for things already covered by fixed add-ons (SEO, analytics, basic booking_int). Return an empty scopedItems array for simple showcase sites with no complex requirements.

## Output

Return ONLY valid JSON, no markdown, no explanation:
{
  "goal": "showcase" or "ecommerce",
  "action": "contact" or "book" or "both",
  "selling": [],
  "extras": [],
  "extrasDetail": [
    {"id": "seo", "price": 1400, "rationale": "...specific rationale..."},
    {"id": "analytics", "price": 125, "rationale": "...additional cost on top of $175 base..."},
    {"id": "ai_chat", "price": 1200, "rationale": "...specific rationale..."},
    {"id": "booking_int", "price": 150, "rationale": "...specific rationale..."}
  ],
  "scopedItems": [
    {"label": "...", "price": 850, "rationale": "...", "needsScoping": false}
  ],
  "pages": [
    {"id":"home","name":"Home","icon":"fa6:house","unique":true,"desc":"...","list":[],"collections":[],"subpages":[]},
    {"id":"about","name":"About","icon":"fa6:circle-dot","unique":true,"desc":"...","list":[],"collections":[],"subpages":[]}
  ]
}

Icons available (use these exact strings): fa6:house fa6:circle-dot lu:mail fa6:calendar-days fa6:wrench lu:image fa6:file-lines fa6:users fa6:robot fa6:cart-shopping lu:credit-card fa6:file-pen lu:star lu:map-pin lu:phone fa6:store fa6:bolt fa6:droplet fa6:magnifying-glass fa6:screwdriver-wrench fa6:shield-halved fa6:pen-ruler`;

export const POST: APIRoute = async ({ request }) => {
  if (!isAllowedOrigin(request)) {
    return new Response(JSON.stringify({ error: "Forbidden." }), { status: 403 });
  }

  const headers = corsHeaders(request);

  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please slow down." }),
        { status: 429, headers }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return new Response(
        JSON.stringify({ error: "Invalid request body." }),
        { status: 400, headers }
      );
    }

    const VALID_SERVICE_AREAS = new Set(["city","county","state","region","country","worldwide"]);

    const str = (v: unknown, max: number): string =>
      typeof v === "string" ? v.trim().slice(0, max) : "";

    const bizName  = str(body.bizName,  120);
    const bizLoc   = str(body.bizLoc,   120);
    const bizDesc  = str(body.bizDesc,  600);
    const implNotes = str(body.implNotes, 600);

    const bizServes = typeof body.bizServes === "string" && VALID_SERVICE_AREAS.has(body.bizServes)
      ? body.bizServes
      : "";

    const niches: string[] = Array.isArray(body.niches)
      ? body.niches
          .slice(0, 5)
          .map((n: unknown) => str(n, 50))
          .filter(Boolean)
      : [];

    if (!bizName || !bizLoc || !bizDesc || !bizServes) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400, headers }
      );
    }

    // Validate mode
    const mode = body.mode === "ai" || body.mode === "manual" ? body.mode : "ai";

    // Validate answers (optional, used in manual mode)
    const VALID_GOALS = new Set(["showcase", "ecommerce"]);
    const VALID_ACTIONS = new Set(["contact", "book", "both"]);
    const rawAnswers = body.answers && typeof body.answers === "object" ? body.answers : {};
    const answers: Record<string, any> = {};
    if (rawAnswers.goal && VALID_GOALS.has(rawAnswers.goal)) answers.goal = rawAnswers.goal;
    if (rawAnswers.action && VALID_ACTIONS.has(rawAnswers.action)) answers.action = rawAnswers.action;
    if (Array.isArray(rawAnswers.extras)) {
      answers.extras = rawAnswers.extras
        .filter((e: unknown) => typeof e === "string")
        .slice(0, 10)
        .map((e: string) => e.slice(0, 30));
    }
    if (Array.isArray(rawAnswers.selling)) {
      answers.selling = rawAnswers.selling
        .filter((e: unknown) => typeof e === "string")
        .slice(0, 10)
        .map((e: string) => e.slice(0, 30));
    }

    // Validate productCount
    const productCount = (() => {
      const v = Number(body.productCount);
      if (!Number.isInteger(v) || v < 1) return PRODUCTS_INCLUDED;
      return Math.min(v, 500);
    })();

    // Validate blogPostCount
    const blogPostCount = (() => {
      const v = Number(body.blogPostCount);
      if (!Number.isInteger(v) || v < 1) return BLOG_POSTS_INCLUDED;
      return Math.min(v, 500);
    })();

    // Validate customPages
    const customPages: string[] = Array.isArray(body.customPages)
      ? body.customPages
          .slice(0, 20)
          .map((p: unknown) => str(p, 60))
          .filter(Boolean)
      : [];

    // Validate pages (client-sent pages for repricing)
    const clientPages: any[] | null = Array.isArray(body.pages) ? body.pages : null;

    // -------------------------------------------------------------------------
    // mode === "manual": skip OpenAI, use client answers + buildDefaultPages
    // -------------------------------------------------------------------------
    if (mode === "manual") {
      // Use client-provided pages if sent (user customized), else build defaults
      const pages: any[] = (clientPages && clientPages.length > 0)
        ? clientPages
        : buildDefaultPages(bizName, bizLoc, answers);

      const price = computePrice(pages, customPages, answers, productCount, blogPostCount, [], []);

      return new Response(
        JSON.stringify({
          pages,
          price: {
            base: price.base,
            ep: price.ep,
            addons: price.addons,
            total: price.total,
            items: price.items,
            u: price.u,
          },
          scoped: price.scoped,
          hasNeedsScoping: price.hasNeedsScoping,
          scopedItems: [],
          extrasDetail: [],
        }),
        { status: 200, headers }
      );
    }

    // -------------------------------------------------------------------------
    // mode === "ai": call OpenAI then compute price server-side
    // -------------------------------------------------------------------------
    const userMessage = `Business name: "${bizName}"
Location: "${bizLoc}"
Service area: "${bizServes}"
Niches: ${niches.length ? niches.join(", ") : "not specified"}
Description: "${bizDesc}"${implNotes ? `\nImplementation notes: "${implNotes}"` : ""}`;

    if (!import.meta.env.OPENAI_API_KEY) {
      console.error("[Estimate API] OPENAI_API_KEY is not set");
      return new Response(JSON.stringify({ error: "Service unavailable." }), { status: 503, headers });
    }

    const openai = new OpenAI({ apiKey: import.meta.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userMessage },
      ],
      max_tokens: 4000,
      temperature: 0.3,
    });

    const text = completion.choices[0]?.message?.content ?? "{}";
    const parsed = JSON.parse(text);

    // Build answers object from AI response — re-validate goal/action against allowlists
    const aiGoal = VALID_GOALS.has(parsed.goal) ? parsed.goal : "showcase";
    const aiAction = VALID_ACTIONS.has(parsed.action) ? parsed.action : "contact";
    const aiAnswers: Record<string, any> = {
      goal: aiGoal,
      action: aiAction,
    };
    if (Array.isArray(parsed.selling)) aiAnswers.selling = parsed.selling;
    if (Array.isArray(parsed.extras)) aiAnswers.extras = parsed.extras;

    // Normalize AI pages
    const aiPages: any[] = Array.isArray(parsed.pages)
      ? parsed.pages.map((p: any) => ({
          ...p,
          list: p.list || [],
          collections: p.collections || [],
          subpages: p.subpages || [],
        }))
      : [];

    const MAX_LINE_ITEM_PRICE = 50_000;
    const clampPrice = (v: unknown): number => {
      const n = Number(v);
      return Number.isFinite(n) ? Math.max(0, Math.min(n, MAX_LINE_ITEM_PRICE)) : 0;
    };

    const scopedItems: any[] = Array.isArray(parsed.scopedItems)
      ? parsed.scopedItems.slice(0, 20).map((s: any) => ({
          label: str(s.label, 120),
          price: clampPrice(s.price),
          rationale: str(s.rationale, 400),
          needsScoping: !!s.needsScoping,
        }))
      : [];
    const extrasDetail: any[] = Array.isArray(parsed.extrasDetail)
      ? parsed.extrasDetail.slice(0, 10).map((e: any) => ({
          id: str(e.id, 40),
          price: clampPrice(e.price),
          rationale: str(e.rationale, 400),
        }))
      : [];

    // Compute price server-side using AI-returned pages + client-provided counts
    const price = computePrice(
      aiPages,
      customPages,
      aiAnswers,
      productCount,
      blogPostCount,
      scopedItems,
      extrasDetail
    );

    return new Response(
      JSON.stringify({
        goal: aiGoal,
        action: aiAction,
        selling: aiAnswers.selling,
        extras: aiAnswers.extras,
        extrasDetail,
        scopedItems,
        pages: aiPages,
        price: {
          base: price.base,
          ep: price.ep,
          addons: price.addons,
          total: price.total,
          items: price.items,
          u: price.u,
        },
        scoped: price.scoped,
        hasNeedsScoping: price.hasNeedsScoping,
      }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error("[Estimate API Error]", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong." }),
      { status: 500, headers }
    );
  }
};

export const OPTIONS: APIRoute = ({ request }) => {
  if (!isAllowedOrigin(request)) {
    return new Response(null, { status: 403 });
  }
  const origin = request.headers.get("origin") ?? "";
  const allowed = !origin || import.meta.env.DEV || origin === ALLOWED_ORIGIN;
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": allowed && origin ? origin : ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
    },
  });
};
