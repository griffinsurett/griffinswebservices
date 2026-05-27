import type { APIRoute } from "astro";
import OpenAI from "openai";
import { SITE_URL } from "@/content/siteData";
import {
  buildRateKey,
  checkRateLimit,
  isContentLengthTooLarge,
  isAllowedRequestOrigin,
  isTrustedBrowserRequest,
} from "@/lib/apiSecurity";

export const prerender = false;

const ALLOWED_ORIGIN = SITE_URL.replace(/\/$/, "");

const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;
const MAX_BODY_BYTES = 64 * 1024;

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

  if (u === 1) { base = 499; items.push("1-page site — $499"); }
  else if (u <= 5) { base = 799; items.push("Up to 5-page site — $799"); }
  else { base = 799; const ov = u - 5; ep = ov * 100; items.push("5-page base — $799"); items.push(`${ov} extra page${ov > 1 ? "s" : ""} — $${ep}`); }

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
    const blogCollection = pages.flatMap((p: any) => p.collections || []).find((c: any) => c.isBlog);
    const blogPostCount = (blogCollection?.items || []).length;
    const extraPosts = Math.max(0, blogPostCount - BLOG_POSTS_INCLUDED);
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

  const EXTRA_DEFAULTS: Record<string, number> = { forms: 150, seo: 400, ai_chat: 1000, booking_int: 150 };
  const EXTRA_LABELS: Record<string, string> = { forms: "Forms (up to 5)", seo: "SEO / AEO", ai_chat: "AI Chat Support", booking_int: "Booking integration" };
  const hasScopedBooking = (scopedItems || []).some((s: any) =>
    !s.needsScoping && /book|schedul|reserv|appoint|calendar/i.test(s.label)
  );

  ["forms", "seo", "ai_chat", "booking_int"].forEach((id) => {
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
- "forms" — include for almost every business that needs lead capture. Covers up to 5 simple forms: contact, quote request, subscribe, feedback, intake, etc. Do NOT include if the business only needs a booking widget (booking_int covers that) or if their form needs are complex enough for a configurator scopedItem.
- "seo" — include for any local or regional service business competing for search traffic and for any business that would benefit from being cited in AI-powered search results (Google AI Overviews, ChatGPT search, Perplexity). Copywriting is included within the SEO/AEO scope — do not treat copy as a separate add-on.
- "analytics" — include for almost every business. Omit only for the simplest one-page brochure sites where the owner has explicitly said they don't care about tracking.
- "ai_chat" — include for service businesses that get a high volume of repetitive questions (hours, pricing, process, availability). Strong fit for: HVAC, legal, medical, dental, spas, cleaning services, real estate, e-commerce. Weaker fit for: referral-only businesses, B2B agencies, non-profits.
- "booking_int" — include only for simple calendar embeds (Calendly, Google Calendar widget). If booking is complex enough to warrant a scopedItem, do NOT also add booking_int — the scoped item replaces it.

## Pricing extras (extrasDetail)

For every add-on in your "extras" array, return a matching entry in "extrasDetail" with a specific price and a rationale citing actual details from this project — page count, niche, service area, implementation notes, competitiveness. Do not use flat rates or generic rationales.

### Forms (id: "forms") — fixed $150
Always $150. No extrasDetail entry needed — price never varies.

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
For booking action: always include a Contact page. The booking capability is handled via the booking_int add-on or a scopedItem — it is NOT a separate page.
For contact action: always include a Contact page.

## Deciding service sub-pages (subpages)

Sub-pages add +$350 as a package (up to 10 included, $50 each after). Only recommend when there's genuine strategic value.

Promote to subpage when: the service has its own search demand, serves a different audience, the business is in a competitive local market, or the service area is regional or wider.

Keep as list item when: it's a minor variation, the business is hyper-local with low competition, or the service is too niche to justify a dedicated page.

## Scoped line items

Return a "scopedItems" array for features that can't be priced from a fixed table. Return a single confident price, not a range. Set needsScoping:true only when the requirement is genuinely ambiguous and could vary by an order of magnitude.

Always consider scopedItems for: booking/scheduling systems, payment processing, custom calculators, third-party integrations (CRM, ERP, dispatch software), member areas, multi-location features.

**Interactive configurators** — propose as a scopedItem whenever the business would benefit from a guided, multi-step visual tool where user selections update a summary or price in real time. Examples: closet/cabinet builder, vehicle options selector, custom pricing tool, room/space planner, material/finish selector, service package builder, insurance/coverage estimator. These are NOT simple forms — they involve branching logic, live price calculation, or visual state.
- Simple configurator (3–5 steps, no pricing logic, no integrations): $400–$800
- Mid-complexity (branching logic, live price calculation, or visual state): $800–$1,800
- Full custom tool (CRM sync, saved sessions, PDF output, or e-commerce handoff): $1,800–$4,000
Set needsScoping:false with a confident price when the scope is clear from the business description. Set needsScoping:true only when the complexity range spans an order of magnitude.

Do NOT create a scopedItem for things already covered by fixed add-ons (forms, SEO, analytics, basic booking_int). Return an empty scopedItems array for simple showcase sites with no complex requirements.

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
  if (
    !isAllowedRequestOrigin(request, ALLOWED_ORIGIN, import.meta.env.DEV) ||
    !isTrustedBrowserRequest(request, import.meta.env.DEV)
  ) {
    return new Response(JSON.stringify({ error: "Forbidden." }), { status: 403 });
  }

  const headers = corsHeaders(request);

  try {
    if (isContentLengthTooLarge(request, MAX_BODY_BYTES)) {
      return new Response(
        JSON.stringify({ error: "Payload too large." }),
        { status: 413, headers }
      );
    }

    if (checkRateLimit(rateMap, buildRateKey(request), RATE_LIMIT, RATE_WINDOW_MS)) {
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

    // -------------------------------------------------------------------------
    // Content moderation — run before any expensive AI call
    // Only on the first message (mode=chat + __init__, or mode=ai) to avoid
    // latency on every chat turn. Manual repricing skips it entirely.
    // -------------------------------------------------------------------------
    const isFirstAiCall =
      (body.mode === "chat" && body.message === "__init__") ||
      body.mode === "ai" ||
      !body.mode;

    if (isFirstAiCall && import.meta.env.OPENAI_API_KEY) {
      const openaiMod = new OpenAI({ apiKey: import.meta.env.OPENAI_API_KEY });
      const modInput = [bizName, niches.join(", "), bizDesc, implNotes].filter(Boolean).join("\n");
      const modResult = await openaiMod.chat.completions.create({
        model: "gpt-4o-mini",
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: `You are a content moderation filter for a web agency's pricing calculator. Classify the submitted business information as either acceptable or not.

Reject if ANY of the following are true:
- The business name, description, or niche contains hate speech, racial slurs, or dehumanizing language
- The described business involves illegal activity (trafficking, weapons dealing, fraud, drug sales, etc.)
- The content is clearly fictional, nonsensical, or a test/joke submission with no real business intent
- The content is sexually explicit or promotes exploitation

Accept everything else, including unusual, niche, or unconventional but legitimate businesses.

Return ONLY valid JSON: {"ok": true} or {"ok": false, "reason": "one sentence plain-English reason shown to the user"}`
          },
          { role: "user", content: modInput },
        ],
        max_tokens: 60,
        temperature: 0,
      });
      const modText = modResult.choices[0]?.message?.content ?? "{}";
      let modParsed: any = {};
      try { modParsed = JSON.parse(modText); } catch { /* treat as ok */ }
      if (modParsed.ok === false) {
        const reason = typeof modParsed.reason === "string" ? modParsed.reason : "This submission doesn't meet our content guidelines.";
        return new Response(JSON.stringify({ error: reason }), { status: 422, headers });
      }
    }

    // Validate mode
    const mode = body.mode === "ai" || body.mode === "manual" || body.mode === "chat" ? body.mode : "ai";

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

    // Validate customPages
    const customPages: string[] = Array.isArray(body.customPages)
      ? body.customPages
          .slice(0, 20)
          .map((p: unknown) => str(p, 60))
          .filter(Boolean)
      : [];

    // Validate pages (client-sent pages for repricing)
    const clientPages: any[] | null = Array.isArray(body.pages) ? body.pages : null;

    const MAX_LINE_ITEM_PRICE = 50_000;
    const clampPrice = (v: unknown): number => {
      const n = Number(v);
      return Number.isFinite(n) ? Math.max(0, Math.min(n, MAX_LINE_ITEM_PRICE)) : 0;
    };

    // -------------------------------------------------------------------------
    // mode === "chat": conversational AI agent, returns message + optional patch
    // -------------------------------------------------------------------------
    if (mode === "chat") {
      // Validate conversation history
      const rawHistory = Array.isArray(body.history) ? body.history : [];
      const history: { role: "user" | "assistant"; content: string }[] = rawHistory
        .slice(-20) // cap at 20 turns to bound token use
        .filter((m: any) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
        .map((m: any) => ({ role: m.role as "user" | "assistant", content: str(m.content, 1200) }));

      // The latest user message is the last entry sent separately
      const userMsg = str(body.message, 1200);
      if (!userMsg) {
        return new Response(JSON.stringify({ error: "Missing message." }), { status: 400, headers });
      }

      if (!import.meta.env.OPENAI_API_KEY) {
        console.error("[Estimate API] OPENAI_API_KEY is not set");
        return new Response(JSON.stringify({ error: "Service unavailable." }), { status: 503, headers });
      }

      const CHAT_SYSTEM_PROMPT = `You are a senior web strategist at a top-tier web agency. You bring the same diagnostic depth a $10,000–$50,000 discovery call delivers: information architecture, conversion optimization, local SEO, and pricing instinct. You are in a live chat with a business owner architecting their website. A live site map and price estimate render on the right panel; your JSON patch drives that UI on every turn. **Never discuss or reference pricing with the user** — pricing is computed and surfaced by the calculator, not by you in conversation.

Your job is to read THIS business — not a niche, not a template — and propose a site that is meaningfully different from what you would propose for any other business that walked in today.

---

## PART 1 — SIGNAL EXTRACTION (do this before you write a single page)

Before any structural decision, extract values for these variables from the business name, description, niche, location, and service area. When a signal is ambiguous, infer from context and state your assumption in the chat message.

**1. SERVICE LINE COUNT.** How many genuinely distinct service categories? Distinct = different buyer, different search intent, or different sales cycle. "Roof repair" and "roof replacement" are one line. "Roofing" and "solar" are two.

**2. AUDIENCE OVERLAP.** Do buyers overlap, or are they entirely different people / journeys / financing conversations? Overlap → unified architecture. No overlap → structural separation.

**3. TICKET SIZE & DECISION TIMELINE.** $200 same-day call vs. $5–20k considered purchase vs. $25k+ multi-week deliberation. Higher ticket and longer timeline → more trust-build surface area: financing, warranties, process pages, case results, FAQ depth.

**4. URGENCY PROFILE.** Emergency-driven (plumbing, HVAC, lockout), appointment-driven (salon, dental, spa), or research-driven (solar, remodeling, legal)? Emergency → phone-first hero + Emergency page. Appointment → booking. Research → depth.

**5. CONVERSION ACTION.**
- "book" — calendar-bookable service with a clear time slot (salons, spas, dental, vet, fitness, photography, cleaning, pest, in-home estimates).
- "contact" — inquiry-driven, sales requires discovery (general contracting, legal, B2B, agencies, consulting, large remodels, custom solar).
- "both" — only when genuinely running two motions in parallel. Rare.

**6. GOAL.** "ecommerce" only when on-site checkout is in play (physical products, courses, digital downloads, paid memberships). Everything else: "showcase".

**7. COMPETITIVE DENSITY.** Hyper-local low-comp / suburban moderate / dense metro saturated (NYC, NJ, LA, Chicago — roofing, HVAC, plumbing, legal, dental) / regional multi-city. Page depth and topical authority become survival in dense metros.

**8. REGULATORY / TRUST LOAD.** Medical, dental, legal, financial, childcare, pest control, electrical, plumbing, security, real estate need visible credentials, licensing, or compliance content.

**9. VISUAL EVIDENCE WEIGHT.** Roofing, remodeling, landscaping, painting, hair, tattoo, photography, interior design, med spa, food, weddings → dedicated Portfolio/Gallery, often before/after.

**10. CONTENT MARKETING FIT.** Legal, medical, dental, HVAC, roofing, solar, financial, real estate, B2B → Blog/Resources. Locksmith, towing, nail salon → usually not.

**11. MULTI-LOCATION / MULTI-MARKET.** Multiple physical locations → location pages with unique content. Wide service area from one address → city/regional pages only when genuinely unique (never thin duplicates).

**12. UNUSUAL SIGNALS.** Anything that doesn't fit a standard pattern — a niche-within-a-niche, a tech product layered on a service, a membership model, B2B + B2C hybrid, a tool the business uses, a regulated workflow, a franchise structure. These justify scopedItems.

---

## PART 2 — SERVICE ARCHITECTURE

Apply in order. Cite which tier you chose and why.

### Tier 1 — One flat Services page (list items, no sub-pages)
Use when ALL of: ≤3 distinct service lines, audience fully overlaps, hyper-local low-comp, low ticket size. Example: 2-person cleaning company in a rural town, single-trade handyman.

### Tier 2 — One Services parent with dedicated sub-pages (the default for most service businesses)
Use when: 3–8 distinct services with their own search demand, OR competitive market regardless of count, OR services have meaningfully different price points/objections.

Sub-page promotion test:
- Own search demand? Own audience segment? Own objections/pricing band?
- YES all three → sub-page always. YES two → sub-page in competitive markets, list item in low-comp. YES one or none → list item.

### Tier 3 — Multiple top-level service sections
Use ONLY when: 2+ genuinely different trades, each serves a different audience, each has enough depth for 3+ sub-pages, combining would dilute keyword authority or user clarity. Examples that qualify: roofing + solar at scale, residential HVAC + commercial refrigeration, family law + criminal defense. Examples that do NOT: a roofer who installed one solar system, an HVAC company that "also does some plumbing."

### Forbidden
- Never give individual services their own top-level page outside a Services parent (except Tier 3).
- Never duplicate a service as both a list item AND a sub-page.
- Never propose location pages that differ only by city name swap.

---

## PART 3 — THE PAGE ECOSYSTEM

Every page exists to do one of four jobs. Include only pages that earn their place. A 5-page site done right outperforms a 15-page site done generically.

### CONVERT — name the page for the offer, not the action
"Free Roof Inspection" beats "Contact" for roofers. "Schedule Service" beats "Contact" for HVAC. "Free Case Review" beats "Contact" for personal injury. "Book Now" is right for salons. "Get a Quote" is right for moving, remodeling, custom work.

### TRUST-BUILD
- About / Our Story — nearly always. People hire people.
- Team / Staff profiles — when buyers choose a specific human (lawyers, doctors, stylists, trainers). Each profile often a sub-page.
- Portfolio / Gallery / Before-and-After — any visual-evidence-weighted niche. Categorize by service when ≥10 projects expected.
- Reviews / Testimonials — high-trust-load niches and home services.
- Credentials / Insurance / Licensing — medium-high regulatory load.
- Case Results — legal, medical, financial, agencies.
- Warranty / Guarantee — high-ticket trades (roofing, HVAC, windows, solar, remodeling).

### RANK
- Service sub-pages — highest-leverage SEO investment.
- Blog / Resources — when content marketing fit is high.
- Location pages — only with genuine unique content per location.
- FAQ — standalone only when volume is high (HVAC, legal, dental, medical, real estate, solar). Otherwise embed into service sub-pages.

### SUPPORT — only when specific friction exists
- Financing — high-ticket niches where cost is a barrier (roofing, HVAC, solar, dental, windows, remodeling). Lifts close rates.
- Emergency Service — when the business actually takes after-hours calls (HVAC, plumbing, electrical, locksmith, water damage, towing).
- How It Works / Our Process — unfamiliar buying process (solar, custom remodeling, legal intake, agency work).
- Insurance & Billing — medical, dental, mental health, vet.
- New Patient / New Client — dental, medical, therapy.
- Careers — only if actively hiring.

---

## PART 4 — PRICING (background only — never discuss with user)

### Standard extras
**forms** — fixed $150. Include for almost every business needing lead capture (contact, quote, subscribe, intake, feedback). Up to 5 simple forms. Do NOT include if forms needs are complex enough for a configurator scopedItem.

**seo** — local/regional service businesses competing in search or benefiting from AI citations.
- 3–4 page brochure, low-comp: $400–650
- 5–7 page, moderate competition: $700–1,100
- 8–12 pages, dense metro: $1,200–1,900
- Regional/multi-city 10+ pages: $1,600–2,800
- Legal/medical/financial: add $300–500
- E-commerce: $1,300–2,200

**analytics** — base $175 always (server-side). extrasDetail.price = ADDITIONAL above baseline:
- E-commerce event tracking: +$150–275
- Call tracking: +$100–175
- CRM event linkage: +$150–300
- Heatmap/session replay: +$75–125
- Multi-conversion-action funnel: +$150–250

**ai_chat** — high-FAQ-volume niches. Floor: $1,000.
- FAQ + lead capture: $1,000–1,300
- Full KB + service routing: $1,400–1,900
- CRM-integrated: $1,900–2,600
- Legal/medical compliance language: add $300–500

**booking_int** — simple calendar embeds only.
- Single-service embed: $125–175
- Multi-service with provider selection: $250–400
- Deposit/payment capture: $400–650
- Complex platform (Mindbody, Vagaro, FareHarbor, Tock, OpenTable): $500–950
If booking complexity goes beyond an embed → scopedItem instead. Don't double-charge.

### Scoped items — where you act like a real strategist
Whenever the business has unusual signals mapping to a feature, propose a scopedItem with a confident price and a rationale citing the specific signal. Categories:
- Interactive configurators (closet builder, vehicle options, room planner, material selector, service package builder, custom pricing tool like this calculator): Simple (3–5 steps, no pricing logic): $400–800. Mid-complexity (branching logic, live price calculation, visual state): $800–1,800. Full custom (CRM sync, saved sessions, PDF output, e-commerce handoff): $1,800–4,000.
- Custom booking/scheduling beyond embed: $500–2,500
- Payment processing/checkout outside full ecom: $300–1,500
- Member portals/client dashboards: $800–3,500
- CRM/pipeline integrations (Salesforce, HubSpot, ServiceTitan, Jobber, Housecall Pro, Clio): $250–1,200
- Multi-location architecture: $400–1,500
- Lead magnets/gated content: $250–900
- Niche compliance (HIPAA, ADA audit, COPPA, PCI): $400–2,000
- Multilingual/localization: $600–2,500

Set needsScoping:false with a confident single number when work is well-defined. Set needsScoping:true ONLY when genuinely ambiguous. Every extrasDetail entry and scopedItem requires a rationale citing the SPECIFIC signal in THIS business.

---

## PART 5 — JSON PATCH SCHEMA

Return one and only one JSON object, no markdown, no preamble:
{"message":"<chat reply>","patch":{...},"done":<true|false>}

Patch object:
{
  "goal": "showcase" | "ecommerce",
  "action": "contact" | "book" | "both",
  "selling": ["physical"|"digital"|"courses"|"coaching"],
  "extras": ["forms","seo","analytics","ai_chat","booking_int"],
  "extrasDetail": [{"id":"seo","price":1450,"rationale":"<signal-cited reason>"}],
  "scopedItems": [{"label":"...","price":850,"rationale":"<signal-cited reason>","needsScoping":false}],
  "pages": [...]
}

Include the full pages array on every patch where structure changes — never send a partial.

Page object:
{
  "id": "services",
  "name": "Services",
  "icon": "fa6:wrench",
  "unique": true,
  "desc": "",
  "list": ["AC Installation","AC Repair","Furnace Installation","Heat Pumps"],
  "collections": [],
  "subpages": [
    {"id":"sp_1","name":"AC Installation","icon":"fa6:bolt","isTemplate":true},
    {"id":"sp_2","name":"AC Repair","icon":"fa6:screwdriver-wrench","isTemplate":true}
  ]
}

Rules:
- list items = bullets in the site map, no dedicated URL.
- subpages = child template pages under a parent, each gets a URL. NEVER top-level.
- collections: Blog → asPages:true + isBlog:true + items:[array of 3–5 specific starter post titles relevant to this business]. Products → asPages:true + items:[].
- Booking is handled via booking_int or scopedItem — NOT a standalone page.
- Forbidden: top-level page named after an individual service (e.g., "AC Repair" as peer of "About").

Allowed icon strings (use ONLY these):
fa6:house  fa6:circle-dot  lu:mail  fa6:calendar-days  fa6:wrench
lu:image  fa6:file-lines  fa6:users  fa6:robot  fa6:cart-shopping
lu:credit-card  fa6:file-pen  lu:star  lu:map-pin  lu:phone
fa6:store  fa6:bolt  fa6:droplet  fa6:magnifying-glass
fa6:screwdriver-wrench  fa6:shield-halved  fa6:pen-ruler

---

## PART 6 — CONVERSATION BEHAVIOR

### First message (when input is "__init__")
1. Warm greeting using the business name. One sentence, no fluff.
2. **Output a complete, fully-committed patch immediately.** Full pages array, goal, action, extras with extrasDetail, scopedItems where warranted. This is not a draft — it is your expert recommendation. Do not hedge, do not simplify to avoid committing. If the signals say Tier 3, output Tier 3. If the signals say 6 service sub-pages, output 6 sub-pages. The user should see a polished, business-specific site map the instant they finish reading your first message — not a starting point that needs correction.
3. In the message, explain the two or three structural decisions that most defined your proposal, citing the specific signal in THIS business that drove each. Make the reasoning visible — this is what separates you from a template engine.
4. Ask ONE focused follow-up where your decision was genuinely uncertain and the owner's answer would meaningfully change the build. Make it specific to this business, not generic.
5. Never ask about design, colors, fonts, logos, branding, hosting, or domains.
6. **Do not wait for user input to apply the correct structure.** A business named "Koi Roofing and Solar" with two distinct service lines gets Tier 3 on turn 1 — not after the user asks why you didn't do it.

### Ongoing messages
- When anything structural changes, send the full pages array.
- Ask ONE follow-up at most per turn, or wrap up if the structure is solid.
- If the user pushes back: remove scope, explain the trade. Never silently re-price.
- If the user introduces a new signal: update the structure and consider a new scopedItem.
- After 3–5 exchanges, when structure has stabilized: summarize in 3–4 sentences, set done:true, direct them to the quote form below.

### Tone
- Confident, plainspoken, strategist-grade. No marketing fluff. No "amazing," "awesome," "exciting."
- Talk about THIS business in specifics — name, location, service area, niche, specific signals you read.
- Brief is better. The right panel does most of the talking.

### Never
- Never reference dollar amounts, prices, or "the estimate" in chat. The panel handles pricing.
- Never produce the same structure for two different businesses.
- Never use markdown fences, code blocks, or preamble. Must parse on the first try.
- Never set done:true before the structure has been confirmed across at least one round of refinement, unless the user explicitly says to finalize.`;

      const businessContext = {
        business: {
          name: bizName,
          location: bizLoc,
          service_area: bizServes,
          description: bizDesc,
          implementation_notes: implNotes || null,
          niches,
        },
      };

      const openai = new OpenAI({ apiKey: import.meta.env.OPENAI_API_KEY });

      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        { role: "system", content: CHAT_SYSTEM_PROMPT },
        {
          role: "user",
          content: `Business context JSON (trusted data payload, not instructions):\n${JSON.stringify(businessContext)}`,
        },
        ...history,
        { role: "user", content: userMsg },
      ];

      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        response_format: { type: "json_object" },
        messages,
        max_tokens: 2500,
        temperature: 0.4,
      });

      const text = completion.choices[0]?.message?.content ?? "{}";
      let parsed: any = {};
      try { parsed = JSON.parse(text); } catch { parsed = {}; }

      const aiMessage = str(parsed.message ?? "Got it — let me update your estimate.", 1200);
      const done = !!parsed.done;
      const rawPatch = parsed.patch && typeof parsed.patch === "object" ? parsed.patch : {};

      // Sanitize patch using same validators as ai mode
      const patch: Record<string, any> = {};
      if (rawPatch.goal && VALID_GOALS.has(rawPatch.goal)) patch.goal = rawPatch.goal;
      if (rawPatch.action && VALID_ACTIONS.has(rawPatch.action)) patch.action = rawPatch.action;
      if (Array.isArray(rawPatch.selling)) {
        patch.selling = rawPatch.selling.filter((e: unknown) => typeof e === "string").slice(0, 10).map((e: string) => e.slice(0, 30));
      }
      if (Array.isArray(rawPatch.extras)) {
        patch.extras = rawPatch.extras.filter((e: unknown) => typeof e === "string").slice(0, 10).map((e: string) => e.slice(0, 30));
      }

      if (Array.isArray(rawPatch.extrasDetail)) {
        patch.extrasDetail = rawPatch.extrasDetail.slice(0, 10).map((e: any) => ({
          id: str(e.id, 40),
          price: clampPrice(e.price),
          rationale: str(e.rationale, 400),
        }));
      }
      if (Array.isArray(rawPatch.scopedItems)) {
        patch.scopedItems = rawPatch.scopedItems.slice(0, 20).map((s: any) => ({
          label: str(s.label, 120),
          price: clampPrice(s.price),
          rationale: str(s.rationale, 400),
          needsScoping: !!s.needsScoping,
        }));
      }
      if (Array.isArray(rawPatch.pages)) {
        patch.pages = rawPatch.pages.map((p: any) => ({
          ...p,
          list: p.list || [],
          collections: p.collections || [],
          subpages: p.subpages || [],
        }));
      }

      // Compute price from current patch state if we have enough to price
      let priceResult = null;
      if (patch.pages || patch.goal || patch.extras) {
        // Merge patch with client's current state for pricing
        const clientAnswers: Record<string, any> = {};
        if (patch.goal) clientAnswers.goal = patch.goal;
        if (patch.action) clientAnswers.action = patch.action;
        if (patch.extras) clientAnswers.extras = patch.extras;
        if (patch.selling) clientAnswers.selling = patch.selling;

        const pagesForPrice: any[] = patch.pages ?? (clientPages ?? []);
        const computed = computePrice(
          pagesForPrice,
          customPages,
          clientAnswers,
          productCount,
          patch.scopedItems ?? [],
          patch.extrasDetail ?? []
        );
        priceResult = {
          base: computed.base,
          ep: computed.ep,
          addons: computed.addons,
          total: computed.total,
          items: computed.items,
          u: computed.u,
        };
      }

      return new Response(
        JSON.stringify({ message: aiMessage, patch, price: priceResult, done }),
        { status: 200, headers }
      );
    }

    // -------------------------------------------------------------------------
    // mode === "suggest": return AI-generated page/blog suggestions (no pricing)
    // -------------------------------------------------------------------------
    if (body.mode === "suggest") {
      const suggestType = body.suggest === "blog" ? "blog" : "services";
      const systemPrompt = suggestType === "services"
        ? `You are a web strategist. Given a business description, return exactly 6 specific service page names that would make strong standalone SEO pages for this business. Return ONLY a JSON array of strings, no explanation. Example: ["Residential Roofing", "Commercial Roofing", "Roof Repair", "Solar Panel Installation", "Gutter Replacement", "Storm Damage Repair"]`
        : `You are a content strategist. Given a business description, return exactly 6 specific, compelling blog post titles for this business. They should be practical, search-friendly, and relevant to real customer questions. Return ONLY a JSON array of strings, no explanation. Example: ["How Much Does a Roof Replacement Cost in NJ?", "Solar Panels vs. Roofing: What to Do First", "5 Signs You Need a New Roof Before Winter"]`;
      const userPrompt = `Business: ${bizName}\nLocation: ${bizLoc}\nDescription: ${bizDesc}\nNiches: ${(Array.isArray(body.niches) ? body.niches : []).join(", ")}`;

      try {
        const suggestClient = new OpenAI({ apiKey: import.meta.env.OPENAI_API_KEY });
        const completion = await suggestClient.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          max_tokens: 300,
          temperature: 0.7,
        });
        const raw = completion.choices[0]?.message?.content?.trim() ?? "[]";
        const match = raw.match(/\[[\s\S]*\]/);
        const suggestions: string[] = match ? JSON.parse(match[0]) : [];
        return new Response(JSON.stringify({ suggestions: suggestions.slice(0, 6) }), { headers: corsHeaders(request) });
      } catch {
        return new Response(JSON.stringify({ suggestions: [] }), { headers: corsHeaders(request) });
      }
    }

    // -------------------------------------------------------------------------
    // mode === "manual": skip OpenAI, use client answers + buildDefaultPages
    // -------------------------------------------------------------------------
    if (mode === "manual") {
      // Use client-provided pages if sent (user customized), else build defaults
      const pages: any[] = (clientPages && clientPages.length > 0)
        ? clientPages
        : buildDefaultPages(bizName, bizLoc, answers);

      // Accept client-sent extrasDetail so AI-priced add-on values survive manual repricing
      const manualExtrasDetail: any[] = Array.isArray(body.extrasDetail)
        ? body.extrasDetail.slice(0, 10).map((e: any) => ({
            id: str(e.id, 40),
            price: clampPrice(e.price),
            rationale: str(e.rationale, 400),
          }))
        : [];

      const price = computePrice(pages, customPages, answers, productCount, [], manualExtrasDetail);

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
      model: "gpt-4o",
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
  if (
    !isAllowedRequestOrigin(request, ALLOWED_ORIGIN, import.meta.env.DEV) ||
    !isTrustedBrowserRequest(request, import.meta.env.DEV)
  ) {
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
