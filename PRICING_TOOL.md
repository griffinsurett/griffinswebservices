# Pricing Calculator — Architecture Reference

A conversational AI-powered pricing tool for a web design agency. The user describes their business, the AI recommends a site structure, and the tool computes a live estimate throughout the conversation. The final estimate can be submitted as a lead.

---

## High-Level Flow

1. **Gate** — collect basic business info across two slides before any AI call
2. **Chat** — AI-driven conversation that builds a site map and computes price in real time
3. **Done** — estimate summary + lead capture form submitted to a third-party form service

---

## Gate Phase (Pre-Chat)

Two slides collected before the AI is invoked.

**Slide 1 — Business basics**
- Business name
- Location (city/region)
- Business niche (multi-select, searchable, supports custom entries, capped at a max)
- Business description (free-text, used verbatim in the AI prompt)

**Slide 2 — Context**
- Service area scope (radio: city / county / state / region / country / worldwide)
- Implementation notes (optional free-text: integrations, special requirements, constraints)

The Continue button on slide 1 and the Start button on slide 2 are both disabled until their required fields are filled. Both slides use a sticky-footer button pattern so the CTA is always visible regardless of scroll position.

---

## Chat Phase

Once the gate is submitted, a `__init__` message is sent to the API. The AI responds with a greeting and its first site structure recommendation. The conversation continues until the AI signals it is done, at which point the quote form appears.

### Layout

Two-column grid:

- **Left panel** — chat thread + input bar
- **Right panel** — live site map (scrollable) + sticky price breakdown footer

The grid stretches to fill the viewport height. Both panels are flex columns so the sticky elements stay pinned at the bottom at all times.

### Chat Thread

- AI messages render as plain text with a small avatar icon
- User messages render as a solid accent-colored pill aligned right
- A typing indicator (animated dots + avatar) shows while the API is in flight
- The thread is `flex-1 overflow-y-auto` — no fixed height cap

### Input Bar

Single-line pill input containing:
- `+` button (left) — opens the context menu
- Auto-growing textarea — sends on Enter, Shift+Enter for newline
- Mic button (right)
- Send button (right) — accent-colored when active, muted when empty

---

## The `+` Context Menu

A floating dropdown anchored above the input bar. Three sections separated by dividers:

**Section 1 — Page builders (submenu rows)**
- Add services → fetches AI-generated service page suggestions for this business
- Add blog posts → fetches AI-generated blog post title suggestions for this business

Both trigger a lightweight API call (`mode: suggest`) using the business context. Results render as clickable rows that insert a pre-filled chat message. The submenu shows a loading indicator while the fetch is in flight.

**Section 2 — Context-aware prompt starters**
Generated dynamically at open time based on current state:
- What site goal is set (e-commerce vs. showcase)
- Which pages already exist (avoids suggesting duplicates)
- Business niche (visual niches get gallery prompt, local businesses get service area map prompt, high-ticket niches get financing page prompt)
- Whether a blog exists yet

Up to 6 prompts are shown. Clicking one inserts the full text into the input field.

**Section 3 — Add-ons submenu**
Toggle any add-on on/off. A badge on the row shows how many are currently active. Toggling immediately triggers a debounced reprice call.

---

## Right Panel

### Site Map

Displays the AI-recommended pages as interactive accordion tiles. Each page can be:
- Expanded to edit its description and list items
- List items can be promoted to dedicated sub-pages
- Pages can be removed with the × button (all pages, not just custom ones)
- Custom pages can be added manually via an inline input

Special tile types: sub-page tiles, child tiles, product count stepper, blog post tiles.

A threshold indicator appears in the list when the page count crosses the base-price boundary.

### Add-ons Card

Five add-ons rendered as toggle buttons. Each shows:
- Icon, label, description
- Price (AI-assigned or default)
- An "AI pick" badge if the AI recommended it with a rationale
- The rationale text when active

Toggling fires an immediate debounced reprice. Add-ons are also togglable from the `+` menu submenu — both stay in sync because they read from the same `answers.extras` array.

### Scoped Items Card

Items the AI flagged as needing a scoping call before a price can be confirmed. Each shows a label and either a fixed price or "Scoped on call" in amber.

### Sticky Price Footer

Always visible at the bottom of the right panel regardless of how far the site map is scrolled. Shows:
- Base price row
- Extra pages row
- Add-ons row
- Total (large, accent-colored)
- Disclaimer that the price is an estimate, not a final invoice

---

## API — `/api/estimate`

Single endpoint, server-rendered (not static), handles four modes via `body.mode`.

### Security layer (runs on every request)
- CORS locked to the site's own origin in production
- Origin + browser header checks
- In-memory rate limiter per IP (sliding window)
- Body size cap
- Content moderation via a fast AI model on the first user-facing call only — rejects hate speech, nonsensical/fictional businesses, illegal content, and other offensive inputs with a 422 and a human-readable reason

### `mode: suggest`
Called by the `+` menu submenus. Accepts business context and a `suggest` field (`"services"` or `"blog"`). Returns a JSON array of suggested strings. Uses a fast/cheap AI model. No pricing logic runs.

### `mode: chat`
The main conversational mode. Accepts:
- Business context fields
- A `message` string (or `"__init__"` for the first call)
- Full conversation history
- Current pages and custom pages

The AI responds with a natural language `message` and a structured `patch` object. The patch can update any combination of: `goal`, `action`, `selling`, `extras`, `extrasDetail`, `scopedItems`, `pages`. When a `done: true` flag is returned the client transitions to the quote form.

After the AI responds, the server always runs `computePrice()` and returns a fresh `price` object. The client never computes prices independently.

A `__init__` call also runs content moderation before the AI prompt.

### `mode: manual`
Called by the client whenever the user manually adjusts something (toggles an add-on, changes page count, adds/removes a page, adjusts product count). No AI call — just runs `computePrice()` on the current state and returns a fresh price. Accepts `extrasDetail` from the client so AI-assigned add-on prices survive manual interactions.

### `mode: ai` (legacy one-shot)
Single non-conversational call. Sends all business context at once and gets a full site structure + price back in one response. Not used by default in the current UI.

---

## Pricing Logic — `computePrice()`

Server-side only. Never exposed to the client. Takes pages, custom pages, product count, and extras. Returns `{ base, ep, addons, total, items[], u }`.

**Base price** is determined by unique page count:
- 1 page → lower tier
- 2–5 pages → standard tier
- E-commerce → separate tier

**Extra pages** (`ep`) — a fixed fee per page beyond the base tier's included count.

**Collections pricing** — pages that contain collections (services list, blog, products) add fees based on item count, with a base fee for the collection plus a per-item fee beyond a free-tier threshold.

**Add-ons** (`addons`) — each active add-on contributes its price (AI-assigned if available, otherwise the catalog default).

**Scoped items** — items where `needsScoping: true` do not contribute to the total; they are surfaced separately in the UI.

---

## Add-on Catalog

A static catalog defined on the client. Each entry has an ID, label, icon, description, default price, and optional tooltip text. The catalog is the single source of truth for rendering both the right-panel add-on cards and the `+` menu submenu.

The AI can override default prices by returning `extrasDetail` entries with a custom price and a rationale. If the AI has not priced an add-on, the default is used. Add-ons not in `answers.extras` are displayed as inactive but visible so the user can toggle them.

---

## State Management

All state lives in the main component. No external store.

Key state groups:
- **Gate inputs** — name, location, niche selections, description, service area, implementation notes
- **Phase** — `"gate"` or `"chat"`, plus `gateSlide` (0 or 1) and `isDone`
- **Chat** — message array, input value, typing flag, error string
- **Site state** — pages array, custom pages array, answers object, extrasDetail array, scoped items array, product count
- **Price** — the last `PriceResult` returned by the server

### Debounced Reprice

A `debouncedReprice` function with a configurable delay fires a `manual` mode API call whenever the user changes something that affects price (add-on toggle, page add/remove, product count change). Add-on toggles use a 0ms delay (immediate), page changes use a longer delay.

`extrasDetail` is always passed back to the server during manual repricing so AI-priced values are not lost.

---

## Quote Form (Done State)

Shown when the AI returns `done: true`. Displays the estimate summary (pages, price breakdown, line items, scoped items, disclaimer) then a short contact form (name, email, phone). On submit, all business context, estimate details, and contact info are posted to a third-party form handling service. A success message is shown on completion. A "Start over" button resets all state.

---

## Content Moderation

Runs once per conversation start (on `__init__`) using a fast/cheap AI model. The prompt instructs the model to flag:
- Hate speech, racial slurs, dehumanizing content
- Clearly fictional or nonsensical business concepts
- Illegal activity
- Sexually explicit content
- Obvious test/junk submissions

A flagged submission returns HTTP 422 with a human-readable reason displayed to the user in the gate's sticky footer error area. This prevents wasted AI usage on bad-faith inputs.

---

## Knowledge Base Integration

The chatbot widget (separate from the pricing tool) is fed a knowledge base generated at build time from content collections. The pricing tool is intentionally excluded from that knowledge base — no static prices are published. The chatbot is instructed to redirect all pricing questions to the pricing calculator page.
