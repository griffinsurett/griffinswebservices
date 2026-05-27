import { useState, useCallback, useEffect, useRef } from "react";
import Icon from "@/components/Icon";
import Input from "@/components/Form/inputs/Input";
import FormWrapper from "@/components/Form/FormWrapper";
import ChatInputBar from "@/components/Form/ChatInputBar";
import { submitToFormspree } from "@/utils/formspree";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type PriceResult = {
  base: number;
  ep: number;
  addons: number;
  total: number;
  items: string[];
  u: number;
};

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type Patch = {
  goal?: string;
  action?: string;
  selling?: string[];
  extras?: string[];
  extrasDetail?: { id: string; price: number; rationale: string }[];
  scopedItems?: { label: string; price: number; rationale: string; needsScoping: boolean }[];
  pages?: any[];
};

// ---------------------------------------------------------------------------
// Icon renderer
// ---------------------------------------------------------------------------
const Ic = ({ name, size = 14 }: { name: string; size?: number }) => (
  <Icon icon={name as any} size={size <= 14 ? "sm" : size <= 18 ? "md" : "lg"} />
);

// ---------------------------------------------------------------------------
// Niche list
// ---------------------------------------------------------------------------
const STATIC_NICHES = [
  "Roofing","Solar","HVAC","Plumbing","Electrical","Landscaping & Lawn Care","Cleaning Services",
  "Pest Control","Pool & Spa","General Contracting","Demolition","Painting","Flooring","Fencing",
  "Deck & Patio","Waterproofing","Insulation","Windows & Doors","Kitchen & Bath Remodeling",
  "Healthcare","Dental","Mental Health & Therapy","Chiropractic","Physical Therapy",
  "Fitness & Personal Training","Yoga & Wellness","Spa & Massage",
  "Legal Services","Accounting & Finance","Insurance","Real Estate","Property Management",
  "Restaurant & Food Service","Catering","Food Truck","Bakery & Café",
  "Beauty & Salon","Barbershop","Tattoo & Piercing","Nail Studio","Med Spa",
  "Automotive Repair","Auto Detailing","Towing","Car Rental",
  "Photography","Videography","Creative Agency","Digital Marketing","SEO Agency","Web Design",
  "E-commerce & Retail","Boutique & Fashion","Jewelry","Supplements & Health",
  "Education & Tutoring","Childcare & Daycare","Music & Arts Lessons",
  "Pet Services & Grooming","Veterinary","Dog Training",
  "Events & Entertainment","Wedding Services","DJ & Photo Booth","Catering & Bar",
  "Moving & Storage","Security Services","Locksmith","Tech Support & IT",
  "Consulting & Coaching","Life Coaching","Business Coaching","Non-profit",
];

function buildNicheList(industryNames: string[]): string[] {
  const industrySet = new Set(industryNames.map((n) => n.toLowerCase()));
  const filtered = STATIC_NICHES.filter((n) => !industrySet.has(n.toLowerCase()));
  return [...industryNames, ...filtered];
}

// ---------------------------------------------------------------------------
// Shared label
// ---------------------------------------------------------------------------
const Lbl = ({ htmlFor, children, required }: { htmlFor?: string; children: React.ReactNode; required?: boolean }) => (
  <label htmlFor={htmlFor} className="block text-[11px] text-muted font-medium mb-[5px] tracking-[0.04em]">
    {children}
    {required && <span aria-hidden="true" className="text-amber-500 ml-[3px]">*</span>}
  </label>
);

const SEO_AEO_TIP =
  "SEO gets you found in traditional search results. AEO (Answer Engine Optimization) gets your business cited by AI-powered search — Google AI Overviews, ChatGPT search, Perplexity, and voice assistants.";

// ---------------------------------------------------------------------------
// Add-on catalog — single source of truth for labels, descriptions, defaults
// ---------------------------------------------------------------------------
const ADDON_CATALOG = [
  {
    id: "forms",
    label: "Forms",
    icon: "fa6:file-lines",
    desc: "Up to 5 simple forms — contact, quote request, subscribe, intake, feedback, and more.",
    defaultPrice: 150,
    tip: null,
  },
  {
    id: "seo",
    label: "SEO / AEO",
    icon: "fa6:magnifying-glass",
    desc: "Get found in search and cited by AI tools like ChatGPT and Google AI Overviews.",
    defaultPrice: 400,
    tip: SEO_AEO_TIP,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: "fa6:bolt",
    desc: "Track visitors, conversions, and what's actually working on your site.",
    defaultPrice: 175,
    tip: null,
  },
  {
    id: "ai_chat",
    label: "AI Chat",
    icon: "fa6:robot",
    desc: "Answer common questions automatically and capture leads 24/7.",
    defaultPrice: 1000,
    tip: null,
  },
  {
    id: "booking_int",
    label: "Booking",
    icon: "fa6:calendar-days",
    desc: "Embed a booking or scheduling widget so customers can book directly from your site.",
    defaultPrice: 150,
    tip: null,
  },
] as const;

// ---------------------------------------------------------------------------
// Dynamic prompt starters — context-aware based on answers + pages
// ---------------------------------------------------------------------------
type PromptItem = { icon: string; label: string; text: string };

function getPromptStarters(
  answers: Record<string, any>,
  pages: any[],
  niches: string[],
): PromptItem[] {
  const goal = answers.goal;
  const pageNames = pages.map((p: any) => p.name?.toLowerCase() ?? "");
  const hasGallery = pageNames.some((n) => n.includes("gallery") || n.includes("portfolio"));
  const hasBlog = pageNames.some((n) => n.includes("blog"));
  const hasServices = pageNames.some((n) => n.includes("service"));
  const hasLocation = pageNames.some((n) => n.includes("location") || n.includes("area") || n.includes("map"));
  const isVisual = niches.some((n) => /roofing|landscap|paint|photo|tattoo|interior|salon|wedding|food|remodel/i.test(n));
  const isLocal = answers.bizServes === "city" || answers.bizServes === "county";

  const items: PromptItem[] = [];

  // No pages yet — show the basics
  if (pages.length === 0) {
    items.push({ icon: "fa6:file-lines", label: "What pages do I need?", text: "What pages should my site have based on my business?" });
  }

  // E-commerce
  if (goal !== "ecommerce") {
    items.push({ icon: "fa6:cart-shopping", label: "Add e-commerce", text: "I want to sell products online — can we add an e-commerce section?" });
  }

  // Gallery — push if visual niche and no gallery yet
  if (isVisual && !hasGallery) {
    items.push({ icon: "fa6:images", label: "Add a gallery", text: "Add a before & after photo gallery page to my site." });
  }

  // Service area map — push if local and no map page
  if (isLocal && !hasLocation) {
    items.push({ icon: "fa6:location-dot", label: "Add a service area map", text: "I want a page showing my service area with a map." });
  }

  // Blog — only if they don't have one yet
  if (!hasBlog) {
    items.push({ icon: "fa6:newspaper", label: "Add a blog", text: "I'd like to add a blog to my site. What does that look like?" });
  }

  // Financing — relevant for high-ticket niches
  const isHighTicket = niches.some((n) => /roofing|solar|hvac|remodel|construct|flooring|windows/i.test(n));
  if (isHighTicket) {
    items.push({ icon: "fa6:hand-holding-dollar", label: "Add a financing page", text: "Add a financing options page to my site." });
  }

  // Cost reduction — always useful
  items.push({ icon: "fa6:tag", label: "Make it cheaper", text: "Is there a way to reduce the cost of this estimate?" });

  // Locations — relevant for multi-location
  items.push({ icon: "fa6:building", label: "I have multiple locations", text: "I actually have multiple locations — how should we structure that?" });

  return items.slice(0, 6);
}

// ---------------------------------------------------------------------------
// PlusMenu
// ---------------------------------------------------------------------------
type SubMenuKey = "addons" | "services" | "blog" | null;

function PlusMenu({
  onPrompt,
  answers,
  extrasDetail,
  onToggleAddon,
  bizName,
  bizDesc,
  bizLoc,
  bizServes,
  niches,
  pages,
}: {
  onPrompt: (text: string) => void;
  answers: Record<string, any>;
  extrasDetail: any[];
  onToggleAddon: (id: string) => void;
  bizName: string;
  bizDesc: string;
  bizLoc: string;
  bizServes: string;
  niches: string[];
  pages: any[];
}) {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<SubMenuKey>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loadingSub, setLoadingSub] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) { setSub(null); setSuggestions([]); return; }
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false); setSub(null); setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);

  const openSub = async (key: "services" | "blog") => {
    if (sub === key) { setSub(null); setSuggestions([]); return; }
    setSub(key);
    setSuggestions([]);
    setLoadingSub(true);
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bizName, bizDesc, bizLoc, bizServes, niches,
          mode: "suggest",
          suggest: key,
        }),
      });
      const data = await res.json().catch(() => ({}));
      setSuggestions(data.suggestions || []);
    } catch { setSuggestions([]); }
    setLoadingSub(false);
  };

  const handlePrompt = (text: string) => {
    onPrompt(text);
    setOpen(false); setSub(null); setSuggestions([]);
  };

  const MENU_STYLE: React.CSSProperties = {
    background: "var(--color-bg2, #18181c)",
    boxShadow: "0 16px 48px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.5)",
    zIndex: 9999,
  };

  const SubMenuRow = ({ icon, label, subKey, badge }: { icon: string; label: string; subKey: SubMenuKey; badge?: React.ReactNode }) => (
    <button
      type="button"
      onMouseEnter={() => subKey === "addons" || subKey === "services" || subKey === "blog" ? (subKey !== "addons" ? openSub(subKey as "services" | "blog") : setSub("addons")) : undefined}
      onClick={() => subKey === "addons" ? setSub(sub === "addons" ? null : "addons") : openSub(subKey as "services" | "blog")}
      className={`w-full flex items-center gap-[10px] px-[14px] py-[9px] border-none bg-transparent text-left cursor-pointer transition-colors duration-100 group ${sub === subKey ? "bg-white/[0.06]" : "hover:bg-white/[0.06]"}`}
    >
      <span className="w-[18px] flex items-center justify-center shrink-0 text-text/40 group-hover:text-text/70 transition-colors">
        <Ic name={icon} size={13} />
      </span>
      <span className="text-[13px] text-text/80 group-hover:text-text flex-1 transition-colors">{label}</span>
      {badge}
      <span className="text-text/30 text-[11px]">›</span>
    </button>
  );

  const activeCount = (answers.extras || []).length;
  const promptStarters = getPromptStarters({ ...answers, bizServes }, pages, niches);

  return (
    <div ref={ref} className="relative shrink-0">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => { setOpen((v) => !v); setSub(null); setSuggestions([]); }}
        aria-label="Suggestions and add-ons"
        aria-expanded={open}
        className={`w-[30px] h-[30px] rounded-full border flex items-center justify-center cursor-pointer transition-[color,background,border-color] duration-150 text-[18px] font-light leading-none
          ${open ? "border-accent bg-accent/10 text-accent" : "border-border bg-transparent text-muted hover:border-accent/50 hover:text-accent hover:bg-accent/5"}`}
      >
        <span aria-hidden="true" style={{ lineHeight: 1, marginTop: "-1px" }}>+</span>
      </button>

      {/* Main menu */}
      {open && (
        <div
          className="absolute bottom-[calc(100%+8px)] left-0 w-[248px] rounded-xl border border-border overflow-hidden py-[6px]"
          style={MENU_STYLE}
        >
          {/* Page-building actions — services + blog at top */}
          <SubMenuRow icon="fa6:wrench" label="Add services" subKey="services" />
          <SubMenuRow icon="fa6:feather" label="Add blog posts" subKey="blog" />

          <div className="h-px mx-[10px] my-[5px]" style={{ background: "var(--color-border)" }} />

          {/* Context-aware prompt starters */}
          {promptStarters.map((p) => (
            <button
              key={p.text}
              type="button"
              onClick={() => handlePrompt(p.text)}
              className="w-full flex items-center gap-[10px] px-[14px] py-[9px] border-none bg-transparent text-left cursor-pointer hover:bg-white/[0.06] transition-colors duration-100 group"
            >
              <span className="w-[18px] flex items-center justify-center shrink-0 text-text/40 group-hover:text-text/70 transition-colors">
                <Ic name={p.icon} size={13} />
              </span>
              <span className="text-[13px] text-text/80 group-hover:text-text transition-colors">{p.label}</span>
            </button>
          ))}

          <div className="h-px mx-[10px] my-[5px]" style={{ background: "var(--color-border)" }} />

          {/* Add-ons — always at bottom */}
          <SubMenuRow
            icon="fa6:puzzle-piece"
            label="Add-ons"
            subKey="addons"
            badge={activeCount > 0 ? (
              <span className="text-[10px] font-bold text-accent bg-accent/10 rounded-full px-[6px] py-[1px] mr-1">{activeCount}</span>
            ) : undefined}
          />
        </div>
      )}

      {/* Submenu panel */}
      {open && sub && (
        <div
          className="absolute bottom-[calc(100%+8px)] left-[248px] w-[260px] rounded-xl border border-border overflow-hidden py-[6px]"
          style={MENU_STYLE}
        >
          {/* Add-ons submenu */}
          {sub === "addons" && ADDON_CATALOG.map((addon) => {
            const active = (answers.extras || []).includes(addon.id);
            const detail = extrasDetail.find((d: any) => d.id === addon.id);
            const priceVal = detail?.price ?? addon.defaultPrice;
            return (
              <button
                key={addon.id}
                type="button"
                onClick={() => onToggleAddon(addon.id)}
                className="w-full flex items-center gap-[10px] px-[14px] py-[9px] border-none bg-transparent text-left cursor-pointer hover:bg-white/[0.06] transition-colors duration-100 group"
              >
                <span
                  className="w-[16px] h-[16px] rounded-[4px] flex items-center justify-center shrink-0 border transition-[background,border-color] duration-100"
                  style={{ background: active ? "var(--color-accent)" : "transparent", borderColor: active ? "var(--color-accent)" : "var(--color-border)" }}
                >
                  {active && (
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
                      <path d="M1 3.5L3.5 6L8 1" stroke="var(--color-bg)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span className={`text-[13px] flex-1 transition-colors ${active ? "text-accent font-medium" : "text-text/80 group-hover:text-text"}`}>{addon.label}</span>
                <span className={`text-[11px] font-semibold shrink-0 ${active ? "text-accent" : "text-text/30"}`}>
                  {active ? `+$${priceVal.toLocaleString()}` : `$${priceVal.toLocaleString()}`}
                </span>
              </button>
            );
          })}

          {/* Services / Blog suggestion submenus */}
          {(sub === "services" || sub === "blog") && (
            <>
              <div className="px-[14px] pt-[4px] pb-[6px]">
                <div className="text-[10px] text-text/40 tracking-[0.08em] uppercase font-semibold mb-[2px]">
                  {sub === "services" ? "Suggested service pages" : "Suggested blog posts"}
                </div>
                <div className="text-[10px] text-text/30 leading-[1.4]">
                  {sub === "services" ? "Click to add as a chat message" : "Click to pitch a blog post idea"}
                </div>
              </div>
              {loadingSub ? (
                <div className="px-[14px] py-[10px] flex items-center gap-[8px]">
                  {[0,1,2].map((i) => (
                    <span key={i} className="w-[5px] h-[5px] rounded-full bg-accent/50 inline-block"
                      style={{ animation: `chatDot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                  ))}
                  <span className="text-[12px] text-text/40">Thinking…</span>
                </div>
              ) : suggestions.length === 0 ? (
                <div className="px-[14px] py-[8px] text-[12px] text-text/30">No suggestions available.</div>
              ) : (
                suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => handlePrompt(
                      sub === "services"
                        ? `Add a "${s}" service page to my site.`
                        : `Write a blog post titled "${s}" for my site.`
                    )}
                    className="w-full flex items-center gap-[10px] px-[14px] py-[8px] border-none bg-transparent text-left cursor-pointer hover:bg-white/[0.06] transition-colors duration-100 group"
                  >
                    <span className="w-[18px] flex items-center justify-center shrink-0 text-text/30 group-hover:text-accent transition-colors">
                      <Ic name={sub === "services" ? "fa6:wrench" : "fa6:feather"} size={12} />
                    </span>
                    <span className="text-[12px] text-text/80 group-hover:text-text transition-colors leading-[1.4]">{s}</span>
                  </button>
                ))
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}


function Tooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)} onBlur={() => setShow(false)}
        aria-label="What is SEO / AEO?"
        className="w-[14px] h-[14px] rounded-full border border-text/25 bg-transparent text-text/25 text-[9px] cursor-pointer inline-flex items-center justify-center p-0 leading-none shrink-0"
      >?</button>
      {show && (
        <span
          className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 w-[220px] border border-border rounded-lg p-[8px_10px] text-[11px] text-muted leading-[1.55] pointer-events-none"
          style={{ background: "var(--color-bg2, #18181c)", boxShadow: "0 8px 24px rgba(0,0,0,0.7)", zIndex: 9999 }}
        >
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-border" />
        </span>
      )}
    </span>
  );
}

// ---------------------------------------------------------------------------
// NicheSelector
// ---------------------------------------------------------------------------
function NicheSelector({ selected, onChange, niches }: { selected: string[]; onChange: (v: string[]) => void; niches: string[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const MAX = 5;

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = niches.filter((n) => n.toLowerCase().includes(query.toLowerCase()) && !selected.includes(n)).slice(0, 8);
  const add = (niche: string) => { if (selected.length >= MAX || selected.includes(niche)) return; onChange([...selected, niche]); setQuery(""); };
  const remove = (niche: string) => onChange(selected.filter((n) => n !== niche));
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) { const exact = niches.find((n) => n.toLowerCase() === query.toLowerCase()); add(exact || query.trim()); e.preventDefault(); }
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-[5px] mb-[7px]">
          {selected.map((n) => (
            <span key={n} className="inline-flex items-center gap-[5px] px-[9px] py-[3px] rounded-full bg-accent/[0.08] border border-accent/[0.27] text-[11px] font-medium text-accent">
              {n}
              <button onClick={() => remove(n)} aria-label={`Remove ${n}`} className="bg-transparent border-none text-accent cursor-pointer text-[13px] p-0 leading-none flex items-center">×</button>
            </span>
          ))}
        </div>
      )}
      <div className="relative">
        <input
          value={query} onChange={(e) => { setQuery(e.target.value); setOpen(true); }} onFocus={() => setOpen(true)} onKeyDown={handleKeyDown}
          placeholder={selected.length >= MAX ? `${MAX} max selected` : "Search or type a custom niche…"}
          disabled={selected.length >= MAX} aria-label="Search niches"
          className={`w-full input-bg border border-border rounded-lg px-[12px] py-[9px] text-[13px] text-text font-[inherit] outline-none box-border${selected.length >= MAX ? " opacity-50" : ""}`}
        />
        {selected.length < MAX && <span aria-hidden="true" className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[10px] text-text/25">{MAX - selected.length} left</span>}
      </div>
      {open && query.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 bg-bg2 border border-border rounded-lg mt-[3px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          {filtered.length > 0
            ? filtered.map((n) => <button key={n} type="button" onClick={() => { add(n); setOpen(false); }} className="w-full px-[12px] py-[9px] text-left bg-bg2 hover:bg-bg3 border-none border-b border-b-border text-text text-[13px] cursor-pointer block">{n}</button>)
            : <button type="button" onClick={() => { add(query.trim()); setOpen(false); }} className="w-full px-[12px] py-[9px] text-left bg-bg2 hover:bg-bg3 border-none text-accent text-[13px] cursor-pointer block">+ Add "{query.trim()}" as custom niche</button>
          }
        </div>
      )}
      <div className="text-[10px] text-text/25 mt-1">Up to {MAX} niches · Press Enter to add a custom one</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Site map tile sub-components (unchanged from original)
// ---------------------------------------------------------------------------
const SubPageTile = ({ name }: { name: string }) => (
  <div className="flex items-center gap-[7px] px-[10px] py-[6px] rounded-lg border border-accent/20 bg-accent/[0.024] mb-1 ml-6">
    <span aria-hidden="true" className="text-[10px] text-accent">└</span>
    <Ic name="fa6:file-pen" size={11} />
    <span className="text-[12px] font-medium text-text flex-1">{name}</span>
    <span className="text-[9px] text-accent font-medium uppercase tracking-[0.06em]">template</span>
  </div>
);

const ChildTile = ({ name }: { name: string }) => (
  <div className="flex items-center gap-[7px] px-[9px] py-[6px] rounded-lg border border-dashed border-border bg-transparent mb-[5px] ml-[18px]">
    <Ic name="fa6:file-lines" size={12} />
    <span className="text-[12px] font-medium text-text flex-1">{name}</span>
    <span className="text-[10px] text-text/25">template</span>
  </div>
);

const CustomTile = ({ name, isExtra, onRemove }: { name: string; isExtra: boolean; onRemove: () => void }) => (
  <div className={`flex items-center gap-[7px] px-[9px] py-[7px] rounded-lg border mb-[5px] ${isExtra ? "border-amber-500/40 bg-amber-500/[0.031]" : "border-border"}`} style={!isExtra ? { background: "var(--color-bg3, #1e1e24)" } : undefined}>
    <Ic name="fa6:file-pen" size={12} />
    <span className="text-[12px] font-medium text-text flex-1">{name}</span>
    {isExtra && <span className="text-[10px] text-amber-500">+$100</span>}
    <button onClick={onRemove} className="bg-transparent border-none text-text/25 cursor-pointer text-[12px]">×</button>
  </div>
);

const ProductsTile = ({ productCount, setProductCount }: { productCount: number; setProductCount: (n: number) => void }) => (
  <div className="mb-[5px] ml-[18px] border rounded-lg px-[10px] py-[7px] border-border" style={{ background: "var(--color-bg3, #1e1e24)" }}>
    <div className="flex items-center gap-2">
      <Ic name="fa6:store" size={12} />
      <span className="text-[12px] font-medium text-text flex-1">Product pages</span>
      <div className="flex items-center gap-1">
        <button onClick={() => setProductCount(Math.max(1, productCount - 1))} className="w-[22px] h-[22px] rounded-[5px] border border-border bg-transparent text-muted cursor-pointer text-[14px] leading-none flex items-center justify-center">−</button>
        <span className="text-[13px] font-semibold text-text min-w-[24px] text-center">{productCount}</span>
        <button onClick={() => setProductCount(productCount + 1)} className="w-[22px] h-[22px] rounded-[5px] border border-border bg-transparent text-muted cursor-pointer text-[14px] leading-none flex items-center justify-center">+</button>
      </div>
    </div>
    <div className="text-[10px] text-text/25 mt-1 pl-5">See itemized breakdown below for pricing</div>
  </div>
);

const BlogPostTile = ({ title }: { title: string }) => (
  <div className="flex items-center gap-[7px] px-[10px] py-[6px] rounded-lg border border-accent/20 bg-accent/[0.024] mb-1 ml-6">
    <span aria-hidden="true" className="text-[10px] text-accent">└</span>
    <Ic name="fa6:file-pen" size={11} />
    <span className="text-[12px] font-medium text-text flex-1">{title}</span>
    <span className="text-[9px] text-accent font-medium uppercase tracking-[0.06em]">post</span>
  </div>
);

// ---------------------------------------------------------------------------
// PageAccordion (unchanged from original)
// ---------------------------------------------------------------------------
function PageAccordion({ page, pageIndex, onUpdate, onRemove, isExtra }: {
  page: any; pageIndex: number; onUpdate: (i: number, p: any) => void; onRemove: (i: number) => void; isExtra: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [newItem, setNewItem] = useState("");

  const addListItem = () => { if (!newItem.trim()) return; onUpdate(pageIndex, { ...page, list: [...(page.list || []), newItem.trim()] }); setNewItem(""); };
  const removeListItem = (i: number) => { onUpdate(pageIndex, { ...page, list: page.list.filter((_: any, idx: number) => idx !== i) }); };
  const listCount = (page.list || []).length;

  return (
    <div
      className={`border rounded-xl mb-[6px] overflow-hidden transition-[border-color] duration-150 ${isExtra ? "border-amber-500/40 bg-amber-500/[0.031]" : open ? "border-border-strong" : "border-border"}`}
      style={!isExtra ? { background: "var(--color-bg3, #1e1e24)" } : undefined}
    >
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`page-body-${pageIndex}`}
        className={`flex items-center gap-2 px-[12px] py-[9px] cursor-pointer select-none w-full bg-transparent border-none text-left${open ? " border-b border-b-border" : ""}`}>
        <Ic name={page.icon || "fa6:file-pen"} size={13} />
        <span className="text-[13px] font-medium text-text flex-1">{page.name}</span>
        {listCount > 0 && !open && <span className="text-[10px] text-text/25">{listCount} item{listCount !== 1 ? "s" : ""}</span>}
        {isExtra && !open && <span className="text-[10px] text-amber-500">+$100</span>}
        <span
          onClick={(e) => { e.stopPropagation(); onRemove(pageIndex); }}
          role="button" tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.stopPropagation(), onRemove(pageIndex))}
          aria-label={`Remove ${page.name} page`}
          className="bg-transparent border-none text-text/30 hover:text-red-400 cursor-pointer text-[14px] px-[2px] leading-none transition-colors duration-100"
        >×</span>
        <span aria-hidden="true" className={`text-[11px] text-text/25 transition-transform duration-200 inline-block${open ? " rotate-180" : " rotate-0"}`}>▾</span>
      </button>
      {open && (
        <div id={`page-body-${pageIndex}`} className="px-[12px] py-[10px] flex flex-col gap-[10px]">
          <div>
            <label htmlFor={`page-desc-${pageIndex}`} className="block text-[10px] text-text/25 tracking-[0.08em] uppercase mb-[5px]">Description</label>
            <input id={`page-desc-${pageIndex}`} value={page.desc || ""} onChange={(e) => onUpdate(pageIndex, { ...page, desc: e.target.value })}
              placeholder="What is this page about?"
              className="w-full bg-bg3/40 border border-border rounded-[7px] px-[10px] py-[7px] text-[12px] text-text font-[inherit] outline-none box-border" />
          </div>
          <div>
            <div className="text-[10px] text-text/25 tracking-[0.08em] uppercase mb-[5px]">List items</div>
            {(page.list || []).map((item: string, i: number) => {
              const isBlogPage = (page.collections || []).some((c: any) => c.isBlog);
              const isSubpage = isBlogPage || (page.subpages || []).some((s: any) => s.name === item);
              const toggleSubpage = () => {
                if (isBlogPage) return;
                const current = page.subpages || [];
                const next = isSubpage
                  ? current.filter((s: any) => s.name !== item)
                  : [...current, { id: `sp_${Date.now()}_${i}`, name: item, icon: "fa6:file-pen", isTemplate: true }];
                onUpdate(pageIndex, { ...page, subpages: next });
              };
              return (
                <div key={i} className="flex items-center gap-[6px] mb-1">
                  <span aria-hidden="true" className="text-[10px] text-text/25">•</span>
                  <span className={`text-[12px] flex-1 ${isSubpage ? "text-accent font-medium" : "text-muted font-normal"}`}>{item}</span>
                  <button onClick={toggleSubpage} title={isBlogPage ? "Blog posts are always pages" : isSubpage ? "Remove dedicated page" : "Make into a dedicated page"}
                    disabled={isBlogPage}
                    className={`text-[10px] px-[6px] py-[1px] rounded border whitespace-nowrap ${isSubpage ? "border-accent bg-accent/[0.08] text-accent" : "border-border bg-transparent text-text/25"} ${isBlogPage ? "cursor-default opacity-60" : "cursor-pointer"}`}>
                    {isSubpage ? "⊞ page" : "+ page"}
                  </button>
                  <button onClick={() => removeListItem(i)} aria-label={`Remove ${item}`} className="bg-transparent border-none text-text/25 cursor-pointer text-[13px] px-[2px]">×</button>
                </div>
              );
            })}
            <div className="flex gap-[5px] mt-1">
              <input value={newItem} onChange={(e) => setNewItem(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addListItem()}
                placeholder="Add an item..." className="flex-1 bg-bg3/40 border border-border rounded-md px-[9px] py-[5px] text-[12px] text-text font-[inherit] outline-none" />
              <button onClick={addListItem} className="text-[11px] px-[10px] py-[5px] rounded-md border border-border bg-transparent text-muted cursor-pointer">+ Add</button>
            </div>
            {(page.subpages || []).length > 0 && (
              <div className="mt-[6px] px-2 py-[5px] rounded-md bg-accent/[0.031] border border-accent/[0.13]">
                <span className="text-[10px] text-accent">⊞ {page.subpages.length} dedicated page{page.subpages.length !== 1 ? "s" : ""} · service pages package</span>
              </div>
            )}
          </div>
          {(page.collections || []).length > 0 && (
            <div>
              <div className="text-[10px] text-text/25 tracking-[0.08em] uppercase mb-[5px]">Collections</div>
              {page.collections.map((c: any, ci: number) => (
                <span key={ci} className="inline-flex items-center gap-1 text-[11px] px-2 py-[2px] rounded-full border border-border text-muted mr-1">
                  {c.asPages ? "⊞" : "≡"} {c.name}{c.asPages && <span className="text-[10px] text-text/25"> → individual pages</span>}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// RightPanel (site map + price — unchanged logic, same props interface)
// ---------------------------------------------------------------------------
function RightPanel({
  phase, pages, setPages, customPages, setCustomPages, answers,
  bizName, bizLoc, price, scoped, hasNeedsScoping,
  productCount, setProductCount, extrasDetail, onToggleAddon,
}: {
  phase: string; pages: any[]; setPages: (p: any[]) => void;
  customPages: string[]; setCustomPages: (cp: string[]) => void;
  answers: Record<string, any>; bizName: string; bizLoc: string;
  price: PriceResult; scoped: any[]; hasNeedsScoping: boolean;
  productCount: number; setProductCount: (n: number) => void;
  extrasDetail: any[]; onToggleAddon: (id: string) => void;
}) {
  const [newPageOpen, setNewPageOpen] = useState(false);
  const [newPageVal, setNewPageVal] = useState("");
  const newPageRef = useCallback((el: HTMLInputElement | null) => { if (el) el.focus(); }, [newPageOpen]);

  const updatePage = (idx: number, updated: any) => { const next = [...pages]; next[idx] = updated; setPages(next); };
  const removePage = (idx: number) => setPages(pages.filter((_: any, i: number) => i !== idx));
  const addNewPage = () => {
    if (!newPageVal.trim()) return;
    setPages([...pages, { id: `custom_${Date.now()}`, name: newPageVal.trim(), icon: "fa6:file-pen", unique: true, desc: "", list: [], collections: [], isCustom: true }]);
    setNewPageVal(""); setNewPageOpen(false);
  };

  const u = price.u;
  let uSeen = 0, threshShown = false;
  const tiles: any[] = [];

  pages.forEach((p: any, pi: number) => {
    if (p.unique !== false) uSeen++;
    const showThresh = !threshShown && uSeen > 5;
    if (showThresh) threshShown = true;
    const isExtra = uSeen > 5;
    tiles.push({ type: "page", page: p, pi, showThresh, isExtra });
    (p.collections || []).forEach((c: any) => {
      if (c.asPages && c.isProducts) tiles.push({ type: "products" });
      else if (c.isBlog) tiles.push({ type: "blog", items: c.items || [] });
      else if (c.asPages) tiles.push({ type: "child", name: c.name });
    });
    (p.subpages || []).forEach((sp: any) => { tiles.push({ type: "subpage", name: sp.name }); });
  });

  customPages.forEach((cp: string, ci: number) => {
    uSeen++;
    const showThresh = !threshShown && uSeen > 5;
    if (showThresh) threshShown = true;
    tiles.push({ type: "custom", name: cp, ci, showThresh, isExtra: uSeen > 5 });
  });

  const totalSvc = pages.reduce((s: number, p: any) => s + (p.subpages || []).length, 0);

  return (
    <div className="flex flex-col h-full min-h-0">

      {/* Scrollable content — site map, add-ons, scoped items */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-[10px] py-[10px]">

        {/* Site map card */}
        <div className="border border-border rounded-xl p-[0.875rem_1rem]" style={{ background: "var(--color-bg2, #18181c)" }}>
          <div className="flex items-center justify-between mb-[10px]">
            <span className="text-[10px] text-text/25 tracking-[0.1em] uppercase">Your site</span>
            {u > 0 && <span className="text-[11px] text-muted">{u} page{u !== 1 ? "s" : ""}{u > 5 ? " · +$100 after 5" : ""}</span>}
          </div>
          {tiles.length === 0 ? (
            <div className="flex items-center justify-center min-h-[80px]">
              <p className="text-[12px] text-text/25 text-center leading-[1.7]">
                {phase === "gate" ? "Fill in your business details to begin" : "Your site map will appear here as we chat"}
              </p>
            </div>
          ) : (
            <div>
              {tiles.map((t: any, i: number) => {
                const thresh = t.showThresh ? (
                  <div key={`thresh-${i}`} className="flex items-center gap-[6px] my-1">
                    <div className="flex-1 h-px bg-amber-500/[0.27]" />
                    <span className="text-[10px] text-amber-500 whitespace-nowrap">+$100 per page beyond 5</span>
                    <div className="flex-1 h-px bg-amber-500/[0.27]" />
                  </div>
                ) : null;
                let tile = null;
                if (t.type === "page") tile = <PageAccordion key={t.pi} page={t.page} pageIndex={t.pi} onUpdate={updatePage} onRemove={removePage} isExtra={t.isExtra} />;
                else if (t.type === "subpage") tile = <SubPageTile key={`sp-${i}`} name={t.name} />;
                else if (t.type === "child") tile = <ChildTile key={i} name={t.name} />;
                else if (t.type === "products") tile = <ProductsTile key="products" productCount={productCount} setProductCount={setProductCount} />;
                else if (t.type === "blog") tile = <>{(t.items as string[]).map((title: string, bi: number) => <BlogPostTile key={`bp-${bi}`} title={title} />)}</>;
                else if (t.type === "custom") tile = <CustomTile key={i} name={t.name} isExtra={t.isExtra} onRemove={() => setCustomPages(customPages.filter((_: any, idx: number) => idx !== t.ci))} />;
                return thresh ? <>{thresh}{tile}</> : tile;
              })}
            </div>
          )}
          {phase === "chat" && totalSvc > 0 && (
            <div className="mt-[6px] px-[10px] py-[7px] rounded-lg border flex items-center gap-2 border-accent/20 bg-accent/[0.024]">
              <Ic name="fa6:file-lines" size={11} />
              <span className="text-[11px] flex-1 text-accent">{totalSvc} service page{totalSvc !== 1 ? "s" : ""} · see pricing breakdown below</span>
            </div>
          )}
          {phase === "chat" && (
            newPageOpen ? (
              <div className="flex gap-[5px] mt-2">
                <input ref={newPageRef} value={newPageVal} onChange={(e) => setNewPageVal(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") addNewPage(); if (e.key === "Escape") { setNewPageOpen(false); setNewPageVal(""); } }}
                  placeholder="Page name..."
                  className="flex-1 bg-bg3/40 border border-accent rounded-[7px] px-[10px] py-[6px] text-[12px] text-text font-[inherit] outline-none" />
                <button onClick={addNewPage} className="text-[11px] px-[12px] py-[6px] rounded-[7px] border-none bg-accent text-bg cursor-pointer font-bold">Add</button>
                <button onClick={() => { setNewPageOpen(false); setNewPageVal(""); }} className="text-[11px] px-[10px] py-[6px] rounded-[7px] border border-border bg-transparent text-muted cursor-pointer">Cancel</button>
              </div>
            ) : (
              <button onClick={() => setNewPageOpen(true)} className="w-full mt-2 py-2 rounded-lg border border-dashed border-border bg-transparent text-text/25 text-[12px] cursor-pointer flex items-center justify-center gap-[5px]">
                <span className="text-[14px]">+</span> Add a page
              </button>
            )
          )}
        </div>

        {/* Add-ons — always visible in chat phase */}
        {phase === "chat" && (
          <div className="border border-border rounded-xl p-[0.875rem_1rem]" style={{ background: "var(--color-bg2, #18181c)" }}>
            <div className="text-[10px] text-text/25 tracking-[0.1em] uppercase mb-[10px]">Add-ons</div>
            <div className="flex flex-col gap-[6px]">
              {ADDON_CATALOG.map((addon) => {
                const active = (answers.extras || []).includes(addon.id);
                const detail = extrasDetail.find((d: any) => d.id === addon.id);
                const price_val = detail?.price ?? addon.defaultPrice;
                const isEstimate = !detail?.price;
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => onToggleAddon(addon.id)}
                    className={`w-full text-left rounded-xl border px-[12px] py-[10px] cursor-pointer transition-[border-color,background] duration-150 ${
                      active ? "border-accent bg-accent/[0.063]" : "border-border bg-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-[8px]">
                      <div className={`w-[28px] h-[28px] rounded-lg flex items-center justify-center shrink-0 ${active ? "bg-accent/20" : "bg-bg3"}`}>
                        <Ic name={addon.icon} size={13} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-[5px]">
                          <span className={`text-[12px] font-semibold ${active ? "text-accent" : "text-text"}`}>{addon.label}</span>
                          {addon.tip && <Tooltip text={addon.tip} />}
                          {detail?.rationale && (
                            <span className="text-[9px] font-semibold text-accent bg-accent/[0.08] border border-accent/20 rounded px-[5px] py-[1px] uppercase tracking-[0.06em]">AI pick</span>
                          )}
                        </div>
                        <div className="text-[11px] text-muted leading-[1.4] mt-[1px]">{addon.desc}</div>
                        {active && detail?.rationale && (
                          <div className="text-[10px] text-accent/70 leading-[1.4] mt-[4px]">{detail.rationale}</div>
                        )}
                      </div>
                      <div className="shrink-0 text-right">
                        <div className={`text-[12px] font-semibold ${active ? "text-accent" : "text-text/40"}`}>
                          {active ? `+$${price_val.toLocaleString()}` : `$${price_val.toLocaleString()}`}
                        </div>
                        {isEstimate && <div className="text-[9px] text-text/25">est.</div>}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {hasNeedsScoping && (
          <div className="text-[11px] text-amber-500 px-[9px] py-[6px] rounded-md bg-amber-500/[0.039] border border-amber-500/20">
            ⚠ One or more items need a scoping call before pricing.
          </div>
        )}

        {scoped.length > 0 && (
          <div className="border border-border rounded-xl p-[0.875rem_1rem]" style={{ background: "var(--color-bg2, #18181c)" }}>
            <div className="text-[10px] text-text/25 tracking-[0.1em] uppercase mb-2">Scoped items</div>
            {scoped.map((s: any, i: number) => (
              <div key={i} className={`flex justify-between items-start mb-1 text-[12px] ${s.needsScoping ? "text-amber-500" : "text-muted"}`}>
                <span className="flex-1 pr-2">{s.label}</span>
                {s.needsScoping
                  ? <span className="text-[11px] text-amber-500 italic whitespace-nowrap">Scoped on call</span>
                  : <span className="text-text font-medium whitespace-nowrap">${s.price?.toLocaleString()}</span>
                }
              </div>
            ))}
          </div>
        )}

      </div>{/* end scrollable */}

      {/* Sticky price footer */}
      <div className="shrink-0 border-t border-t-border pt-[10px] pb-[4px]">
        {price.base > 0 && bizName && (
          <div className="text-[11px] text-muted leading-[1.5] mb-[8px] border-l-2 border-l-border pl-[10px]">
            {bizName} · {bizLoc} — {answers.goal === "ecommerce" ? "e-commerce" : u === 1 ? "1-page site" : `${u}-page site`}
          </div>
        )}
        {[["Base", price.base ? `$${price.base.toLocaleString()}` : "—"], ["Extra pages", price.ep ? `+$${price.ep.toLocaleString()}` : "—"], ["Add-ons", price.addons ? `+$${price.addons.toLocaleString()}` : "—"]].map(([lbl, val]) => (
          <div key={lbl} className="flex justify-between mb-1">
            <span className="text-[11px] text-muted">{lbl}</span>
            <span className="text-[11px] text-text font-medium">{val}</span>
          </div>
        ))}
        <div className="flex justify-between items-baseline border-t border-t-border pt-[10px] mt-[6px]">
          <span className="text-[13px] font-semibold text-text">Estimate</span>
          <span className="text-[26px] font-bold text-accent">${price.total.toLocaleString()}</span>
        </div>
        <div className="text-[10px] text-text/25 mt-[6px] leading-[1.5]">Final price confirmed after scoping call.</div>
      </div>

    </div>
  );
}

// ---------------------------------------------------------------------------
// Chat bubble — ChatGPT style: user = dark pill right, AI = plain text left
// ---------------------------------------------------------------------------
function ChatBubble({ msg }: { msg: ChatMessage }) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-[18px]`}>
      {isUser ? (
        <div
          className="max-w-[78%] px-[14px] py-[10px] rounded-[20px] text-[13.5px] leading-[1.65] text-bg font-medium"
          style={{ background: "var(--color-accent)" }}
        >
          {msg.content}
        </div>
      ) : (
        <div className="flex items-start gap-[10px] max-w-[92%]">
          <div className="w-[26px] h-[26px] rounded-full bg-accent/[0.15] border border-accent/25 flex items-center justify-center shrink-0 mt-[2px]">
            <span className="text-[11px] text-accent leading-none">✦</span>
          </div>
          <div className="text-[13.5px] leading-[1.7] text-text/90 pt-[3px]">
            {msg.content}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Typing indicator
// ---------------------------------------------------------------------------
function TypingIndicator() {
  return (
    <div className="flex items-start gap-[10px] mb-[18px]">
      <div className="w-[26px] h-[26px] rounded-full bg-accent/[0.15] border border-accent/25 flex items-center justify-center shrink-0 mt-[2px]">
        <span className="text-[11px] text-accent leading-none">✦</span>
      </div>
      <div className="flex items-center gap-[5px] pt-[9px]">
        {[0, 1, 2].map((i) => (
          <span key={i} className="w-[6px] h-[6px] rounded-full bg-text/30 inline-block"
            style={{ animation: `chatDot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Quote form (shown when done=true)
// ---------------------------------------------------------------------------
function QuoteForm({ bizName, bizLoc, bizDesc, bizServes, answers, price, pages, scoped, onReset }: {
  bizName: string; bizLoc: string; bizDesc: string; bizServes: string;
  answers: Record<string, any>; price: PriceResult; pages: any[]; scoped: any[];
  onReset: () => void;
}) {
  return (
    <div className="border border-border rounded-xl p-[0.875rem_1rem]" style={{ background: "var(--color-bg2, #18181c)" }}>
      <div className="text-[10px] text-text/25 tracking-[0.1em] uppercase mb-3">Send me this quote</div>
      <div className="border-[1.5px] border-accent/40 rounded-xl p-[0.875rem_1rem] mb-4">
        <div className="flex items-center justify-between mb-[2px]">
          <div className="text-[11px] text-muted">{price.u} pages · {answers.goal === "ecommerce" ? "E-commerce" : "Business"} site</div>
          <div className="text-[10px] font-semibold text-accent bg-accent/[0.082] border border-accent/[0.27] rounded px-[7px] py-[1px] tracking-[0.04em]">ESTIMATE</div>
        </div>
        <div className="text-[28px] font-bold text-accent my-1">${price.total.toLocaleString()}</div>
        {price.items.map((item: string, i: number) => (
          <div key={i} className="text-[12px] text-muted flex gap-2 items-start mb-[3px]">
            <span className="w-[3px] h-[3px] rounded-full bg-text/25 mt-[6px] shrink-0 inline-block" />{item}
          </div>
        ))}
        {scoped.map((s: any, i: number) => (
          <div key={`sc-${i}`} className="mb-[6px]">
            <div className={`text-[12px] flex gap-2 items-start ${s.needsScoping ? "text-amber-500" : "text-muted"}`}>
              <span className={`w-[3px] h-[3px] rounded-full mt-[6px] shrink-0 inline-block ${s.needsScoping ? "bg-amber-500" : "bg-text/25"}`} />
              <span className="flex-1">{s.label}</span>
              {s.needsScoping
                ? <span className="text-[11px] text-amber-500 italic whitespace-nowrap">Scoped on call</span>
                : <span className="text-text font-medium">${s.price.toLocaleString()}</span>
              }
            </div>
            {s.rationale && <div className="text-[10px] text-text/25 leading-[1.5] pl-[11px] mt-[2px]">{s.rationale}</div>}
          </div>
        ))}
        <div className="mt-3 pt-[10px] border-t border-t-border text-[11px] text-text/25 leading-[1.5]">
          ℹ This is a project estimate — not a final invoice. Your confirmed price will be provided after we review your submission and scope the project together.
        </div>
      </div>
      <FormWrapper
        onSubmit={async (values) => {
          await submitToFormspree({
            endpoint: "https://formspree.io/f/mdajdjlb",
            formName: "pricing-estimate",
            values: {
              ...values,
              business_name: bizName,
              business_location: bizLoc,
              business_description: bizDesc,
              service_area: bizServes,
              estimate_total: `$${price.total.toLocaleString()}`,
              estimate_goal: answers.goal,
              estimate_action: answers.action,
              estimate_extras: (answers.extras || []).join(", "),
              estimate_pages: pages.map((p) => p.name).join(", "),
              estimate_breakdown: price.items.join(" | "),
            },
          });
        }}
        includeTermsCheckbox
        termsCheckboxLabel={
          <span className="text-[12px] text-muted leading-[1.5]">
            I agree to the{" "}
            <a href="/legal/privacy-policy" className="text-accent underline">Privacy Policy</a>
            . Griffin Web Services may contact me to follow up on this estimate.
          </span>
        }
        privacyPolicyUrl="/legal/privacy-policy"
        successMessage="Got it — we'll be in touch soon to talk through your build."
        submitButton={{ text: "Let's talk about this build →", loadingText: "Sending…", variant: "form" }}
        resetOnSuccess
        className="flex flex-col gap-3"
      >
        <div className="flex gap-[10px]">
          <Input name="first_name" label="First name" placeholder="Jane" required containerClassName="flex-1 space-y-1" labelClassName="block text-xs text-zinc-400" />
          <Input name="last_name" label="Last name" placeholder="Smith" containerClassName="flex-1 space-y-1" labelClassName="block text-xs text-zinc-400" />
        </div>
        <Input name="email" type="email" label="Email address" placeholder="jane@yourbusiness.com" required containerClassName="space-y-1" labelClassName="block text-xs text-zinc-400" />
        <Input name="phone" type="tel" label="Phone (optional)" placeholder="(555) 000-0000" containerClassName="space-y-1" labelClassName="block text-xs text-zinc-400" />
      </FormWrapper>
      <button onClick={onReset} className="w-full mt-2 py-2 rounded-lg border border-border bg-transparent text-muted text-[12px] cursor-pointer">Start over</button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export interface PricingCalculatorProps {
  industryNames: string[];
}

export default function PricingCalculator({ industryNames }: PricingCalculatorProps) {
  const niches = buildNicheList(industryNames);

  // Gate form state
  const [phase, setPhase] = useState<"gate" | "chat">("gate");
  const [gateSlide, setGateSlide] = useState(0);
  const [bizName, setBizName] = useState("");
  const [bizLoc, setBizLoc] = useState("");
  const [bizDesc, setBizDesc] = useState("");
  const [bizServes, setBizServes] = useState("");
  const [implNotes, setImplNotes] = useState("");
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);

  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatError, setChatError] = useState("");
  const [isDone, setIsDone] = useState(false);

  // Site state (driven by AI patches)
  const [pages, setPages] = useState<any[]>([]);
  const [customPages, setCustomPages] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [extrasDetail, setExtrasDetail] = useState<any[]>([]);
  const [scoped, setScoped] = useState<any[]>([]);
  const [hasNeedsScoping, setHasNeedsScoping] = useState(false);
  const [productCount, setProductCount] = useState(10);
  const [price, setPrice] = useState<PriceResult>({ base: 0, ep: 0, addons: 0, total: 0, items: [], u: 0 });

  const chatEndRef = useRef<HTMLDivElement>(null);
  const repriceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const SERVES_LABELS: Record<string, string> = { city: "Local", county: "County-wide", state: "State / province", region: "Regional", country: "Nationwide", worldwide: "Worldwide" };
  const slide0Ready = bizName.trim() && bizDesc.trim() && bizLoc.trim();
  const gateReady = !!(slide0Ready && bizServes); // goal is optional — empty means let AI decide

  // Auto-scroll chat to bottom
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping]);

  // Apply a patch from the AI to state
  const applyPatch = useCallback((patch: Patch, priceResult: PriceResult | null) => {
    if (!patch) return;
    setAnswers((prev) => {
      const next = { ...prev };
      if (patch.goal) next.goal = patch.goal;
      if (patch.action) next.action = patch.action;
      if (patch.selling) next.selling = patch.selling;
      if (patch.extras) next.extras = patch.extras;
      return next;
    });
    if (patch.pages) setPages(patch.pages);
    if (patch.extrasDetail) setExtrasDetail(patch.extrasDetail);
    if (patch.scopedItems) {
      setScoped(patch.scopedItems);
      setHasNeedsScoping(patch.scopedItems.some((s) => s.needsScoping));
    }
    if (priceResult) setPrice(priceResult);
  }, []);

  // Reprice when user manually adjusts pages, products, or add-ons
  const debouncedReprice = useCallback((
    currentAnswers: Record<string, any>,
    currentPages: any[],
    currentCustomPages: string[],
    currentProductCount: number,
    currentExtrasDetail: any[],
    delay: number,
  ) => {
    if (repriceTimerRef.current) clearTimeout(repriceTimerRef.current);
    repriceTimerRef.current = setTimeout(async () => {
      if (!bizName.trim() || !bizLoc.trim() || !bizDesc.trim() || !bizServes) return;
      try {
        const res = await fetch("/api/estimate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bizName, bizLoc, bizServes, bizDesc, niches: selectedNiches,
            mode: "manual",
            answers: currentAnswers,
            pages: currentPages,
            customPages: currentCustomPages,
            productCount: currentProductCount,
            extrasDetail: currentExtrasDetail,
          }),
        });
        if (!res.ok) return;
        const data = await res.json();
        if (data.price) setPrice(data.price);
        if (data.scoped !== undefined) setScoped(data.scoped);
        if (data.hasNeedsScoping !== undefined) setHasNeedsScoping(data.hasNeedsScoping);
      } catch { /* silent */ }
    }, delay);
  }, [bizName, bizLoc, bizServes, bizDesc, selectedNiches]);

  const handleSetProductCount = (n: number) => { setProductCount(n); debouncedReprice(answers, pages, customPages, n, extrasDetail, 400); };
  const handleSetPages = (newPages: any[]) => { setPages(newPages); debouncedReprice(answers, newPages, customPages, productCount, extrasDetail, 600); };
  const handleSetCustomPages = (newCp: string[]) => { setCustomPages(newCp); debouncedReprice(answers, pages, newCp, productCount, extrasDetail, 400); };

  const handleToggleAddon = (id: string) => {
    const currentExtras: string[] = answers.extras || [];
    const nextExtras = currentExtras.includes(id)
      ? currentExtras.filter((e) => e !== id)
      : [...currentExtras, id];
    const nextAnswers = { ...answers, extras: nextExtras };
    setAnswers(nextAnswers);
    debouncedReprice(nextAnswers, pages, customPages, productCount, extrasDetail, 0);
  };

  // Send a message to the chat API
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isTyping) return;
    setChatError("");

    const userMsg: ChatMessage = { role: "user", content: content.trim() };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInputVal("");
    setIsTyping(true);

    // History for the API = all prior messages (not including the one we just added as `message`)
    const history = messages.map((m) => ({ role: m.role, content: m.content }));

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bizName, bizLoc, bizServes, bizDesc, implNotes,
          niches: selectedNiches,
          mode: "chat",
          message: content.trim(),
          history,
          pages,
          customPages,
          productCount,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error((err as any)?.error || `Error ${res.status}`);
      }

      const data = await res.json();
      const assistantMsg: ChatMessage = { role: "assistant", content: data.message || "Got it — let me update your estimate." };
      setMessages((prev) => [...prev, assistantMsg]);
      applyPatch(data.patch || {}, data.price || null);
      if (data.done) setIsDone(true);
    } catch (err: any) {
      setChatError(err.message || "Something went wrong. Please try again.");
    }
    setIsTyping(false);
  }, [messages, isTyping, bizName, bizLoc, bizServes, bizDesc, implNotes, selectedNiches, pages, customPages, productCount, applyPatch]);

  // Start chat: submit gate, send initial greeting trigger
  const startChat = useCallback(async () => {
    setPhase("chat");
    setIsTyping(true);
    setChatError("");
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bizName, bizLoc, bizServes, bizDesc, implNotes,
          niches: selectedNiches,
          mode: "chat",
          message: "__init__",
          history: [],
          pages: [],
          customPages: [],
          productCount,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((data as any)?.error || `Error ${res.status}`);
      const greeting: ChatMessage = { role: "assistant", content: data.message || "Hi! Let's build your estimate." };
      setMessages([greeting]);
      applyPatch(data.patch || {}, data.price || null);
    } catch (err: any) {
      setChatError(err.message || "Could not connect. Please try again.");
      setPhase("gate");
    }
    setIsTyping(false);
  }, [bizName, bizLoc, bizServes, bizDesc, implNotes, selectedNiches, productCount, applyPatch]);

  const resetAll = () => {
    setPhase("gate"); setGateSlide(0);
    setBizName(""); setBizLoc(""); setBizDesc(""); setBizServes(""); setImplNotes(""); setSelectedNiches([]);
    setMessages([]); setInputVal(""); setIsTyping(false); setChatError(""); setIsDone(false);
    setPages([]); setCustomPages([]); setAnswers({}); setExtrasDetail([]);
    setScoped([]); setHasNeedsScoping(false); setProductCount(10);
    setPrice({ base: 0, ep: 0, addons: 0, total: 0, items: [], u: 0 });
  };

  const pct = phase === "gate" ? (gateSlide === 0 ? 10 : 20) : isDone ? 100 : 60;
  const stepLbl = phase === "gate" ? (gateSlide === 0 ? "About your business" : "Your reach") : isDone ? "Ready to submit" : "Building your estimate";

  return (
    <div className="text-text font-['DM_Sans','Helvetica_Neue',sans-serif]">
      <style>{`
        @keyframes chatDot { 0%,80%,100%{opacity:0.3;transform:scale(0.8)} 40%{opacity:1;transform:scale(1)} }
        .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      `}</style>

      {/* Header bar */}
      <div className="border-b border-b-border px-6 pt-4 pb-[0.875rem]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-text/25 tracking-[0.1em] uppercase">Griffin Web Services — Pricing</span>
          <span className="text-[11px] text-muted">{stepLbl} · {pct}%</span>
        </div>
        <div className="h-[2px] bg-border rounded-[2px] overflow-hidden">
          <div className="h-full bg-accent rounded-[2px] transition-[width] duration-[0.4s] ease-[ease]" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-6 py-5 items-stretch" style={{ height: "calc(100vh - var(--site-header-height) - 56px)" }}>
        {/* Left panel */}
        <div className="flex flex-col gap-3 min-h-0 overflow-y-auto">

          {/* ── GATE phase ── */}
          {phase === "gate" && (
            <div className="flex flex-col h-full min-h-0">
              {gateSlide === 0 ? (
                <>
                  {/* Scrollable fields */}
                  <div className="flex-1 overflow-y-auto pb-3">
                    <div className="text-[20px] font-bold text-text mb-1">Build your estimate</div>
                    <div className="text-[13px] text-muted mb-5">Tell us about your business — we'll build a real roadmap together.</div>
                    <div className="mb-3">
                      <Input name="biz-name" label="Business name" required placeholder="e.g. Koi Roofing and Solar" value={bizName} onChange={(e) => setBizName(e.target.value)} labelClassName="block text-xs text-zinc-400" containerClassName="space-y-1" />
                    </div>
                    <div className="mb-3">
                      <Input name="biz-loc" label="Where are you located?" required placeholder="e.g. Freehold, NJ" value={bizLoc} onChange={(e) => setBizLoc(e.target.value)} labelClassName="block text-xs text-zinc-400" containerClassName="space-y-1" />
                    </div>
                    <div className="mb-3">
                      <Lbl htmlFor="biz-niche">Business niche <span className="text-text/25 font-normal">(up to 5)</span></Lbl>
                      <NicheSelector selected={selectedNiches} onChange={setSelectedNiches} niches={niches} />
                    </div>
                    <div className="mb-2">
                      <Lbl htmlFor="biz-desc" required>Describe your business</Lbl>
                      <textarea id="biz-desc" value={bizDesc} onChange={(e) => setBizDesc(e.target.value)} rows={5}
                        placeholder={"What do you do, who do you serve, and what are your main services?\n\ne.g. Family-owned roofing & solar company in NJ. Main services: full roof replacements and solar panel installs (often bundled). Secondary: gutters, skylights, storm damage. Clients are mostly homeowners but we take commercial jobs too. 20-30 jobs/month."}
                        className="w-full input-bg border border-border rounded-lg px-[12px] py-[9px] text-[13px] text-text font-[inherit] outline-none resize-none box-border" />
                      <p className="text-[10px] text-text/30 mt-[6px] leading-[1.5]">
                        Include your <span className="text-text/50">primary services</span> and any <span className="text-text/50">secondary or add-on services</span> — this shapes how your site gets structured.
                      </p>
                    </div>
                  </div>
                  {/* Sticky footer */}
                  <div className="shrink-0 border-t border-t-border pt-[10px] pb-[4px]">
                    <button onClick={slide0Ready ? () => setGateSlide(1) : undefined} disabled={!slide0Ready}
                      className={`w-full py-[11px] rounded-full border-none text-[13px] font-bold ${slide0Ready ? "bg-accent text-bg cursor-pointer" : "bg-border text-text/25 cursor-not-allowed"}`}>
                      Continue →
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Scrollable fields */}
                  <div className="flex-1 overflow-y-auto pb-3">
                    <button onClick={() => setGateSlide(0)} className="bg-transparent border-none text-muted text-[12px] cursor-pointer pb-4 flex items-center gap-1">← Back</button>
                    <div className="text-[20px] font-bold text-text mb-1">A couple quick questions</div>
                    <div className="text-[13px] text-muted mb-5">This helps our AI build the right starting structure for you.</div>

                    {/* Service area picker */}
                    <div className="mb-5">
                      <div className="text-[12px] font-semibold text-text mb-[10px]">Who do you serve?</div>
                      <fieldset className="border-none p-0 m-0">
                        <legend className="sr-only">Service area</legend>
                        {[
                          { id: "city", label: "My city / town", sub: "Strictly local customers" },
                          { id: "county", label: "My county / district", sub: "Local area and surroundings" },
                          { id: "state", label: "My state / province", sub: "Statewide or provincial reach" },
                          { id: "region", label: "My region", sub: "Multiple states or provinces" },
                          { id: "country", label: "My country", sub: "Nationwide customers" },
                          { id: "worldwide", label: "Online / worldwide", sub: "Location doesn't limit me" },
                        ].map((opt) => {
                          const on = bizServes === opt.id;
                          return (
                            <button type="button" key={opt.id} onClick={() => setBizServes(opt.id)} role="radio" aria-checked={on}
                              className={`w-full flex items-center gap-3 px-[14px] py-[10px] rounded-xl mb-2 cursor-pointer text-left ${on ? "border-[1.5px] border-accent bg-accent/[0.063]" : "border border-border bg-transparent"}`}>
                              <span aria-hidden="true" className={`w-4 h-4 rounded-full border-[1.5px] shrink-0 flex items-center justify-center ${on ? "border-accent bg-accent" : "border-border bg-transparent"}`}>
                                {on && <span className="w-[6px] h-[6px] rounded-full bg-bg block" />}
                              </span>
                              <span>
                                <span className="text-[13px] font-medium text-text block">{opt.label}</span>
                                <span className="text-[11px] text-muted mt-[1px] block">{opt.sub}</span>
                              </span>
                            </button>
                          );
                        })}
                      </fieldset>
                    </div>

                    {/* Implementation notes */}
                    <div className="mb-2">
                      <Lbl htmlFor="impl-notes">Anything specific you need? <span className="text-text/25 font-normal">(optional)</span></Lbl>
                      <textarea id="impl-notes" value={implNotes} onChange={(e) => setImplNotes(e.target.value)} rows={3}
                        placeholder={"e.g. We use ServiceTitan for scheduling. Need a financing page and before/after gallery. Have 3 locations."}
                        className="w-full input-bg border border-border rounded-lg px-[12px] py-[9px] text-[13px] text-text font-[inherit] outline-none resize-none box-border" />
                      <p className="text-[10px] text-text/30 mt-[6px] leading-[1.5]">
                        Specific features, integrations, or requirements — the AI will treat these as constraints, not suggestions.
                      </p>
                    </div>
                  </div>

                  {/* Sticky footer */}
                  <div className="shrink-0 border-t border-t-border pt-[10px] pb-[4px]">
                    {chatError && (
                      <div className="mb-3 text-[12px] text-red-400 px-[10px] py-[8px] rounded-lg bg-red-500/[0.08] border border-red-500/20 leading-[1.5]">
                        {chatError}
                      </div>
                    )}
                    <button onClick={gateReady ? startChat : undefined} disabled={!gateReady}
                      className={`w-full py-[11px] rounded-full border-none text-[13px] font-bold ${gateReady ? "bg-accent text-bg cursor-pointer" : "bg-border text-text/25 cursor-not-allowed"}`}>
                      ✦ Start building my estimate →
                    </button>
                    <p className="text-[10px] text-text/30 text-center leading-[1.55] mt-2">
                      By continuing you agree to our{" "}
                      <a href="/legal/privacy-policy" className="underline text-text/40 hover:text-accent transition-colors">Privacy Policy</a>.
                      {" "}We may use AI tools and publicly available information to research your business and prepare your estimate.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* ── CHAT phase ── */}
          {phase === "chat" && (
            <div className="flex flex-col flex-1 min-h-0">

              {/* Business context strip — compact, subtle */}
              <div className="flex items-center gap-[8px] px-[4px] pb-[10px] mb-[2px]">
                <div className="flex-1 flex items-center gap-[6px] flex-wrap">
                  <span className="text-[12px] font-semibold text-text/70">{bizName}</span>
                  <span className="text-text/25 text-[10px]">·</span>
                  <span className="text-[11px] text-text/40">📍 {bizLoc}</span>
                  {selectedNiches.slice(0, 2).map((n) => (
                    <span key={n} className="text-[10px] px-[7px] py-[1px] rounded-full bg-accent/[0.063] border border-accent/[0.2] text-accent/80">{n}</span>
                  ))}
                </div>
                <button onClick={resetAll} className="text-[11px] text-text/30 bg-transparent border-none cursor-pointer hover:text-text/60 transition-colors p-0 shrink-0">Start over</button>
              </div>

              {/* Message thread */}
              <div className="flex-1 overflow-y-auto min-h-0 pb-2">
                {messages.map((m, i) => <ChatBubble key={i} msg={m} />)}
                {isTyping && <TypingIndicator />}
                {chatError && (
                  <div className="text-[11px] text-amber-500 mb-4 px-[10px] py-[7px] rounded-lg bg-amber-500/[0.039] border border-amber-500/20">
                    {chatError}
                    <button onClick={() => setChatError("")} className="ml-2 underline bg-transparent border-none text-amber-500 cursor-pointer text-[11px]">Dismiss</button>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input area or quote form */}
              {isDone ? (
                <QuoteForm
                  bizName={bizName} bizLoc={bizLoc} bizDesc={bizDesc} bizServes={bizServes}
                  answers={answers} price={price} pages={pages} scoped={scoped} onReset={resetAll}
                />
              ) : (
                /* ChatGPT-style single-line pill */
                <div
                  className="shrink-0 rounded-full border border-border/70 px-[10px] py-[6px] flex items-center gap-[6px]"
                  style={{ background: "var(--color-bg2, #18181c)" }}
                >
                  <PlusMenu
                    onPrompt={(text) => { setInputVal(text); }}
                    answers={answers}
                    extrasDetail={extrasDetail}
                    onToggleAddon={handleToggleAddon}
                    bizName={bizName}
                    bizDesc={bizDesc}
                    bizLoc={bizLoc}
                    bizServes={bizServes}
                    niches={selectedNiches}
                    pages={pages}
                  />
                  <textarea
                    value={inputVal}
                    onChange={(e) => {
                      setInputVal(e.target.value);
                      e.target.style.height = "auto";
                      e.target.style.height = Math.min(e.target.scrollHeight, 96) + "px";
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); if (inputVal.trim() && !isTyping) sendMessage(inputVal); }
                    }}
                    placeholder="Ask anything…"
                    rows={1}
                    disabled={isTyping}
                    className="flex-1 bg-transparent border-none outline-none resize-none text-[13.5px] text-text placeholder:text-text/30 font-[inherit] leading-normal py-[2px] overflow-hidden scrollbar-hide disabled:opacity-40"
                    style={{ minHeight: "24px", maxHeight: "96px" }}
                  />
                  {/* Right-side action buttons */}
                  <div className="flex items-center gap-[4px] shrink-0">
                    {/* Mic */}
                    <button
                      type="button"
                      aria-label="Voice input"
                      className="w-[30px] h-[30px] rounded-full border-none bg-transparent text-text/40 hover:text-text/70 cursor-pointer flex items-center justify-center transition-colors duration-150"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="9" y="2" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M5 11a7 7 0 0014 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <line x1="9" y1="22" x2="15" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </button>
                    {/* Send */}
                    <button
                      type="button"
                      onClick={() => { if (inputVal.trim() && !isTyping) sendMessage(inputVal); }}
                      disabled={!inputVal.trim() || isTyping}
                      aria-label="Send"
                      className="w-[32px] h-[32px] rounded-full flex items-center justify-center cursor-pointer border-none transition-[background,opacity] duration-150 disabled:opacity-30 disabled:cursor-not-allowed"
                      style={{ background: inputVal.trim() && !isTyping ? "var(--color-accent)" : "var(--color-bg3, #232329)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                          stroke={inputVal.trim() && !isTyping ? "var(--color-bg)" : "var(--color-text-muted, #666)"}
                          strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right panel — sticky site map + price */}
        <div className="flex flex-col min-h-0">
          <RightPanel
            phase={phase}
            pages={pages} setPages={handleSetPages}
            customPages={customPages} setCustomPages={handleSetCustomPages}
            answers={answers} bizName={bizName} bizLoc={bizLoc}
            price={price} scoped={scoped} hasNeedsScoping={hasNeedsScoping}
            productCount={productCount} setProductCount={handleSetProductCount}
            extrasDetail={extrasDetail} onToggleAddon={handleToggleAddon}
          />
        </div>
      </div>
    </div>
  );
}
