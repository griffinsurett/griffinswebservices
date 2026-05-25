import { useState, useCallback, useEffect, useRef } from "react";
import Icon from "@/components/Icon";
import FormWrapper from "@/components/Form/FormWrapper";
import Input from "@/components/Form/inputs/Input";
import Textarea from "@/components/Form/inputs/Textarea";
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

// ---------------------------------------------------------------------------
// Icon renderer — uses the site's existing icon system
// ---------------------------------------------------------------------------
const Ic = ({ name, size = 14 }: { name: string; size?: number }) => (
  <Icon icon={name as any} size={size <= 14 ? "sm" : size <= 18 ? "md" : "lg"} />
);

// ---------------------------------------------------------------------------
// Static niches list — industries collection entries are injected via props
// and merged in at their natural sorted position (after the first group).
// Entries that match an industry title are replaced so there's no duplicate.
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
  // Remove static entries that exactly match an industry name (case-insensitive),
  // then prepend the industries at the top so they appear first in the dropdown.
  const industrySet = new Set(industryNames.map((n) => n.toLowerCase()));
  const filtered = STATIC_NICHES.filter((n) => !industrySet.has(n.toLowerCase()));
  return [...industryNames, ...filtered];
}

// ---------------------------------------------------------------------------
// Shared label component
// ---------------------------------------------------------------------------
const Lbl = ({
  htmlFor,
  children,
  required,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
}) => (
  <label
    htmlFor={htmlFor}
    className="block text-[11px] text-muted font-medium mb-[5px] tracking-[0.04em]"
  >
    {children}
    {required && <span aria-hidden="true" className="text-amber-500 ml-[3px]">*</span>}
  </label>
);

const SEO_AEO_TIP =
  "SEO gets you found in traditional search results. AEO (Answer Engine Optimization) gets your business cited by AI-powered search — Google AI Overviews, ChatGPT search, Perplexity, and voice assistants. As more searches are answered directly by AI without clicking a link, AEO ensures your business is the one being recommended. We handle both together.";

function Tooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        aria-label="What is SEO / AEO?"
        className="w-[14px] h-[14px] rounded-full border border-text/25 bg-transparent text-text/25 text-[9px] cursor-pointer inline-flex items-center justify-center p-0 leading-none shrink-0"
      >?</button>
      {show && (
        <span className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 w-[220px] card-bg border border-border rounded-lg p-[8px_10px] text-[11px] text-muted leading-[1.55] z-100 shadow-[0_8px_24px_rgba(0,0,0,0.5)] pointer-events-none">
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-border" />
        </span>
      )}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Steps definition — icon strings updated to site icon system
// ---------------------------------------------------------------------------
const STEPS = [
  {
    id: "goal", q: "What does your website need to do?", type: "single",
    opts: [
      { id: "showcase", icon: "fa6:file-lines", name: "Showcase & connect", desc: "Visitors learn what you do and reach out." },
      { id: "ecommerce", icon: "fa6:cart-shopping", name: "Sell on the site", desc: "Visitors browse, add to cart, and check out." },
    ],
  },
  {
    id: "action", q: "What do you want visitors to do?", type: "single",
    showIf: (a: Record<string, any>) => a.goal === "showcase",
    opts: [
      { id: "contact", icon: "lu:mail", name: "Get in touch", desc: "Form, phone, or email." },
      { id: "book", icon: "fa6:calendar-days", name: "Book an appointment", desc: "Schedule on your calendar." },
      { id: "both", icon: "lu:star", name: "Both", desc: "Contact form and booking." },
    ],
  },
  {
    id: "selling", q: "What are you selling?", type: "multi",
    showIf: (a: Record<string, any>) => a.goal === "ecommerce",
    opts: [
      { id: "physical", icon: "fa6:store", name: "Physical products" },
      { id: "digital", icon: "fa6:file-lines", name: "Digital downloads" },
      { id: "courses", icon: "fa6:file-pen", name: "Courses or programs" },
      { id: "coaching", icon: "fa6:users", name: "Coaching packages" },
    ],
  },
  {
    id: "extras", q: "Any other features?", type: "multi",
    opts: [
      { id: "seo", icon: "lu:star", name: "SEO / AEO", desc: "Search and answer engine optimization." },
      { id: "analytics", icon: "fa6:bolt", name: "Analytics & Tracking", desc: "GA4, Search Console, and event setup." },
      { id: "ai_chat", icon: "fa6:robot", name: "AI Chat Support", desc: "AI-powered chat trained on your business." },
      { id: "booking_int", icon: "fa6:calendar-days", name: "Booking integration", showIf: (a: Record<string, any>) => a.action === "book" || a.action === "both" },
    ],
  },
];

// ---------------------------------------------------------------------------
// NicheSelector
// ---------------------------------------------------------------------------
function NicheSelector({
  selected,
  onChange,
  niches,
}: {
  selected: string[];
  onChange: (v: string[]) => void;
  niches: string[];
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const MAX = 5;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = niches
    .filter((n) => n.toLowerCase().includes(query.toLowerCase()) && !selected.includes(n))
    .slice(0, 8);

  const add = (niche: string) => {
    if (selected.length >= MAX || selected.includes(niche)) return;
    onChange([...selected, niche]);
    setQuery("");
  };

  const remove = (niche: string) => onChange(selected.filter((n) => n !== niche));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      const exact = niches.find((n) => n.toLowerCase() === query.toLowerCase());
      add(exact || query.trim());
      e.preventDefault();
    }
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
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={selected.length >= MAX ? `${MAX} max selected` : "Search or type a custom niche…"}
          disabled={selected.length >= MAX}
          aria-label="Search niches"
          className={`w-full input-bg border border-border rounded-lg px-[12px] py-[9px] text-[13px] text-text font-[inherit] outline-none box-border${selected.length >= MAX ? " opacity-50" : ""}`}
        />
        {selected.length < MAX && (
          <span aria-hidden="true" className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[10px] text-text/25">{MAX - selected.length} left</span>
        )}
      </div>
      {open && query.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 input-bg border border-border rounded-lg mt-[3px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          {filtered.length > 0
            ? filtered.map((n) => (
                <button key={n} type="button" onClick={() => { add(n); setOpen(false); }}
                  className="w-full px-[12px] py-[9px] text-left bg-transparent border-none border-b border-b-border text-text text-[13px] cursor-pointer block">
                  {n}
                </button>
              ))
            : (
              <button type="button" onClick={() => { add(query.trim()); setOpen(false); }}
                className="w-full px-[12px] py-[9px] text-left bg-transparent border-none text-accent text-[13px] cursor-pointer block">
                + Add "{query.trim()}" as custom niche
              </button>
            )}
        </div>
      )}
      <div className="text-[10px] text-text/25 mt-1">Up to {MAX} niches · Press Enter to add a custom one</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-component tiles
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
  <div className={`flex items-center gap-[7px] px-[9px] py-[7px] rounded-lg border mb-[5px] ${isExtra ? "border-amber-500/40 bg-amber-500/[0.031]" : "border-border card-bg"}`}>
    <Ic name="fa6:file-pen" size={12} />
    <span className="text-[12px] font-medium text-text flex-1">{name}</span>
    {isExtra && <span className="text-[10px] text-amber-500">+$100</span>}
    <button onClick={onRemove} className="bg-transparent border-none text-text/25 cursor-pointer text-[12px]">×</button>
  </div>
);

const ProductsTile = ({ productCount, setProductCount }: { productCount: number; setProductCount: (n: number) => void }) => (
  <div className="mb-[5px] ml-[18px] border rounded-lg px-[10px] py-[7px] border-border card-bg">
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

const BlogPostsTile = ({ blogPostCount, setBlogPostCount }: { blogPostCount: number; setBlogPostCount: (n: number) => void }) => (
  <div className="mb-[5px] ml-[18px] border rounded-lg px-[10px] py-[7px] border-border card-bg">
    <div className="flex items-center gap-2">
      <Ic name="fa6:file-lines" size={12} />
      <span className="text-[12px] font-medium text-text flex-1">Blog posts</span>
      <div className="flex items-center gap-1">
        <button onClick={() => setBlogPostCount(Math.max(1, blogPostCount - 1))} aria-label="Fewer blog posts" className="w-[22px] h-[22px] rounded-[5px] border border-border bg-transparent text-muted cursor-pointer text-[14px] flex items-center justify-center">−</button>
        <span className="text-[13px] font-semibold text-text min-w-[24px] text-center">{blogPostCount}</span>
        <button onClick={() => setBlogPostCount(blogPostCount + 1)} aria-label="More blog posts" className="w-[22px] h-[22px] rounded-[5px] border border-border bg-transparent text-muted cursor-pointer text-[14px] flex items-center justify-center">+</button>
      </div>
    </div>
    <div className="text-[10px] text-text/25 mt-1 pl-5">See itemized breakdown below for pricing</div>
  </div>
);

// ---------------------------------------------------------------------------
// PageAccordion
// ---------------------------------------------------------------------------
function PageAccordion({
  page, pageIndex, onUpdate, onRemove, isExtra,
}: {
  page: any; pageIndex: number; onUpdate: (i: number, p: any) => void; onRemove: (i: number) => void; isExtra: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [newItem, setNewItem] = useState("");

  const addListItem = () => {
    if (!newItem.trim()) return;
    onUpdate(pageIndex, { ...page, list: [...(page.list || []), newItem.trim()] });
    setNewItem("");
  };

  const removeListItem = (i: number) => {
    onUpdate(pageIndex, { ...page, list: page.list.filter((_: any, idx: number) => idx !== i) });
  };

  const listCount = (page.list || []).length;

  return (
    <div className={`border rounded-xl mb-[6px] overflow-hidden transition-[border-color] duration-150 ${isExtra ? "border-amber-500/40 bg-amber-500/[0.031]" : open ? "border-border-strong card-bg" : "border-border card-bg"}`}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`page-body-${pageIndex}`}
        className={`flex items-center gap-2 px-[12px] py-[9px] cursor-pointer select-none w-full bg-transparent border-none text-left${open ? " border-b border-b-border" : ""}`}
      >
        <Ic name={page.icon || "fa6:file-pen"} size={13} />
        <span className="text-[13px] font-medium text-text flex-1">{page.name}</span>
        {listCount > 0 && !open && <span className="text-[10px] text-text/25">{listCount} item{listCount !== 1 ? "s" : ""}</span>}
        {isExtra && !open && <span className="text-[10px] text-amber-500">+$100</span>}
        {page.isCustom && (
          <span
            onClick={(e) => { e.stopPropagation(); onRemove(pageIndex); }}
            role="button" tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.stopPropagation(), onRemove(pageIndex))}
            aria-label={`Remove ${page.name} page`}
            className="bg-transparent border-none text-text/25 cursor-pointer text-[14px] px-[2px] leading-none"
          >×</span>
        )}
        <span aria-hidden="true" className={`text-[11px] text-text/25 transition-transform duration-200 inline-block${open ? " rotate-180" : " rotate-0"}`}>▾</span>
      </button>

      {open && (
        <div id={`page-body-${pageIndex}`} className="px-[12px] py-[10px] flex flex-col gap-[10px]">
          <div>
            <label htmlFor={`page-desc-${pageIndex}`} className="block text-[10px] text-text/25 tracking-[0.08em] uppercase mb-[5px]">Description</label>
            <input
              id={`page-desc-${pageIndex}`}
              value={page.desc || ""}
              onChange={(e) => onUpdate(pageIndex, { ...page, desc: e.target.value })}
              placeholder="What is this page about?"
              className="w-full bg-bg3/40 border border-border rounded-[7px] px-[10px] py-[7px] text-[12px] text-text font-[inherit] outline-none box-border"
            />
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
              <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addListItem()}
                placeholder="Add an item..."
                className="flex-1 bg-bg3/40 border border-border rounded-md px-[9px] py-[5px] text-[12px] text-text font-[inherit] outline-none"
              />
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
                  {c.asPages ? "⊞" : "≡"} {c.name}
                  {c.asPages && <span className="text-[10px] text-text/25"> → individual pages</span>}
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
// RightPanel
// ---------------------------------------------------------------------------
function RightPanel({
  phase, pages, setPages, customPages, setCustomPages, answers,
  bizName, bizLoc, price, scoped, hasNeedsScoping,
  productCount, setProductCount, blogPostCount, setBlogPostCount,
}: {
  phase: string;
  pages: any[];
  setPages: (p: any[]) => void;
  customPages: string[];
  setCustomPages: (cp: string[]) => void;
  answers: Record<string, any>;
  bizName: string;
  bizLoc: string;
  price: PriceResult;
  scoped: any[];
  hasNeedsScoping: boolean;
  productCount: number;
  setProductCount: (n: number) => void;
  blogPostCount: number;
  setBlogPostCount: (n: number) => void;
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
      else if (c.isBlog) tiles.push({ type: "blog" });
      else if (c.asPages) tiles.push({ type: "child", name: c.name });
    });
    (p.subpages || []).forEach((sp: any) => {
      tiles.push({ type: "subpage", name: sp.name, parentName: p.name });
    });
  });

  customPages.forEach((cp: string, ci: number) => {
    uSeen++;
    const showThresh = !threshShown && uSeen > 5;
    if (showThresh) threshShown = true;
    const isExtra = uSeen > 5;
    tiles.push({ type: "custom", name: cp, ci, showThresh, isExtra });
  });

  const totalSvc = pages.reduce((s: number, p: any) => s + (p.subpages || []).length, 0);

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="card-bg border-border rounded-xl p-[0.875rem_1rem]">
        <div className="flex items-center justify-between mb-[10px]">
          <span className="text-[10px] text-text/25 tracking-[0.1em] uppercase">Your site</span>
          {u > 0 && <span className="text-[11px] text-muted">{u} page{u !== 1 ? "s" : ""}{u > 5 ? " · +$100 after 5" : ""}</span>}
        </div>

        {tiles.length === 0 ? (
          <div className="flex items-center justify-center min-h-[80px]">
            <p className="text-[12px] text-text/25 text-center leading-[1.7]">
              {phase === "gate" ? "Fill in your business details to begin" : "Pages appear as you build"}
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
              else if (t.type === "blog") tile = <BlogPostsTile key="blog" blogPostCount={blogPostCount} setBlogPostCount={setBlogPostCount} />;
              else if (t.type === "custom") tile = <CustomTile key={i} name={t.name} isExtra={t.isExtra} onRemove={() => setCustomPages(customPages.filter((_: any, idx: number) => idx !== t.ci))} />;

              return thresh ? <>{thresh}{tile}</> : tile;
            })}
          </div>
        )}

        {phase !== "gate" && totalSvc > 0 && (
          <div className="mt-[6px] px-[10px] py-[7px] rounded-lg border flex items-center gap-2 border-accent/20 bg-accent/[0.024]">
            <Ic name="fa6:file-lines" size={11} />
            <span className="text-[11px] flex-1 text-accent">
              {totalSvc} service page{totalSvc !== 1 ? "s" : ""} · see pricing breakdown below
            </span>
          </div>
        )}

        {phase !== "gate" && (
          newPageOpen ? (
            <div className="flex gap-[5px] mt-2">
              <input
                ref={newPageRef}
                value={newPageVal}
                onChange={(e) => setNewPageVal(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") addNewPage(); if (e.key === "Escape") { setNewPageOpen(false); setNewPageVal(""); } }}
                placeholder="Page name..."
                className="flex-1 bg-bg3/40 border border-accent rounded-[7px] px-[10px] py-[6px] text-[12px] text-text font-[inherit] outline-none"
              />
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

      <div className="card-bg border-border rounded-xl p-[0.875rem_1rem]">
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

      {price.base > 0 && (
        <div className="text-[11px] text-muted leading-[1.6] border-l-2 border-l-border pl-[10px]">
          {bizName} · {bizLoc} — {answers.goal === "ecommerce" ? "e-commerce store" : u === 1 ? "single-page site" : "multi-page site"}, {u} page{u !== 1 ? "s" : ""}. Estimate: ${price.total.toLocaleString()}.
        </div>
      )}

      {hasNeedsScoping && (
        <div className="text-[11px] text-amber-500 px-[9px] py-[6px] rounded-md bg-amber-500/[0.039] border border-amber-500/20">
          ⚠ One or more items need a scoping call before pricing.
        </div>
      )}

      {scoped.length > 0 && (
        <div className="card-bg border-border rounded-xl p-[0.875rem_1rem]">
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
    </div>
  );
}

// ---------------------------------------------------------------------------
// AI loading stages
// ---------------------------------------------------------------------------
const AI_STAGES = [
  { label: "Reading your business", est: "~3s" },
  { label: "Choosing site structure", est: "~5s" },
  { label: "Drafting your pages", est: "almost there" },
];

// ---------------------------------------------------------------------------
// Main App
// ---------------------------------------------------------------------------
export interface PricingCalculatorProps {
  /** Industry names from the industries collection, injected at build time */
  industryNames: string[];
}

export default function PricingCalculator({ industryNames }: PricingCalculatorProps) {
  const niches = buildNicheList(industryNames);

  const [phase, setPhase] = useState("gate");
  const [gateSlide, setGateSlide] = useState(0);
  const [bizName, setBizName] = useState("");
  const [bizLoc, setBizLoc] = useState("");
  const [bizDesc, setBizDesc] = useState("");
  const [bizServes, setBizServes] = useState("");
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);
  const [implNotes, setImplNotes] = useState("");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [pages, setPages] = useState<any[]>([]);
  const [customPages, setCustomPages] = useState<string[]>([]);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(false);
  const [aiErrorMsg, setAiErrorMsg] = useState("");
  const [aiStage, setAiStage] = useState(0);
  const [scopedItems, setScopedItems] = useState<any[]>([]);
  const [extrasDetail, setExtrasDetail] = useState<any[]>([]);
  const [productCount, setProductCount] = useState(10);
  const [blogPostCount, setBlogPostCount] = useState(5);

  // Server-fetched price state
  const [price, setPrice] = useState<PriceResult>({ base: 0, ep: 0, addons: 0, total: 0, items: [], u: 0 });
  const [scoped, setScoped] = useState<any[]>([]);
  const [hasNeedsScoping, setHasNeedsScoping] = useState(false);

  // Debounce refs
  const repriceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!aiLoading) { setAiStage(0); return; }
    const timers = [setTimeout(() => setAiStage(1), 3500), setTimeout(() => setAiStage(2), 8000)];
    return () => timers.forEach(clearTimeout);
  }, [aiLoading]);

  const slide0Ready = bizName.trim() && bizDesc.trim() && bizLoc.trim();
  const gateReady = !!(slide0Ready && bizServes);

  const visSteps = useCallback(
    () => STEPS.filter((s) => !s.showIf || s.showIf(answers)),
    [answers]
  );
  const curStep = useCallback(() => visSteps()[step], [visSteps, step]);

  const SERVES_LABELS: Record<string, string> = { city: "Local", county: "County-wide", state: "State / province", region: "Regional", country: "Nationwide", worldwide: "Worldwide" };
  const SEO_NUDGE_AREAS = ["city", "county", "state", "region"];

  // ---------------------------------------------------------------------------
  // repriceFromServer — fire-and-forget, manual mode only
  // ---------------------------------------------------------------------------
  const repriceFromServer = useCallback(async (
    currentAnswers: Record<string, any>,
    currentPages: any[],
    currentCustomPages: string[],
    currentProductCount: number,
    currentBlogPostCount: number,
  ) => {
    if (!bizName.trim() || !bizLoc.trim() || !bizDesc.trim() || !bizServes) return;
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bizName,
          bizLoc,
          bizServes,
          bizDesc,
          niches: selectedNiches,
          implNotes,
          mode: "manual",
          answers: currentAnswers,
          pages: currentPages,
          customPages: currentCustomPages,
          productCount: currentProductCount,
          blogPostCount: currentBlogPostCount,
        }),
      });
      if (!res.ok) return;
      const data = await res.json();
      if (data.price) setPrice(data.price);
      if (data.pages && currentPages.length === 0) setPages(data.pages);
      if (data.scoped !== undefined) setScoped(data.scoped);
      if (data.hasNeedsScoping !== undefined) setHasNeedsScoping(data.hasNeedsScoping);
    } catch {
      // silent — price just stays stale
    }
  }, [bizName, bizLoc, bizServes, bizDesc, selectedNiches, implNotes]);

  // Debounced reprice helper
  const debouncedReprice = useCallback((
    currentAnswers: Record<string, any>,
    currentPages: any[],
    currentCustomPages: string[],
    currentProductCount: number,
    currentBlogPostCount: number,
    delay: number,
  ) => {
    if (repriceTimerRef.current) clearTimeout(repriceTimerRef.current);
    repriceTimerRef.current = setTimeout(() => {
      repriceFromServer(currentAnswers, currentPages, currentCustomPages, currentProductCount, currentBlogPostCount);
    }, delay);
  }, [repriceFromServer]);

  const startCalc = () => {
    const defaultAnswers: Record<string, any> = {};
    if (SEO_NUDGE_AREAS.includes(bizServes)) defaultAnswers.extras = ["seo"];
    setAnswers(defaultAnswers);
    setPages([]);
    setPhase("calc");
  };

  const editBiz = () => {
    setPhase("gate"); setGateSlide(0); setStep(0); setAnswers({}); setPages([]); setCustomPages([]);
    setProductCount(10); setBlogPostCount(5);
    setBizName(""); setBizLoc(""); setBizDesc(""); setBizServes(""); setSelectedNiches([]); setImplNotes("");
    setScopedItems([]); setExtrasDetail([]);
    setPrice({ base: 0, ep: 0, addons: 0, total: 0, items: [], u: 0 });
    setScoped([]); setHasNeedsScoping(false);
  };

  const goNext = (currentAnswers?: Record<string, any>) => {
    const ans = currentAnswers ?? answers;
    const steps = visSteps();
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // About to go to result — get an initial price if we don't have one
      if (price.total === 0) {
        repriceFromServer(ans, pages, customPages, productCount, blogPostCount);
      }
      setPhase("result");
    }
  };
  const goBack = () => { if (step > 0) setStep(step - 1); };

  const pick = (sid: string, oid: string, isMulti: boolean) => {
    if (isMulti) {
      const arr = answers[sid] || [];
      const next = { ...answers, [sid]: arr.includes(oid) ? arr.filter((x: string) => x !== oid) : [...arr, oid] };
      setAnswers(next);
      // Multi-selects don't auto-advance; reprice on change
      debouncedReprice(next, pages, customPages, productCount, blogPostCount, 400);
    } else {
      const next = { ...answers, [sid]: oid };
      setAnswers(next);
      // Reprice after single-select; then advance
      repriceFromServer(next, pages, customPages, productCount, blogPostCount);
      setTimeout(() => goNext(next), 150);
    }
  };

  // Wrapped setters that trigger repricing
  const handleSetProductCount = (n: number) => {
    setProductCount(n);
    debouncedReprice(answers, pages, customPages, n, blogPostCount, 400);
  };

  const handleSetBlogPostCount = (n: number) => {
    setBlogPostCount(n);
    debouncedReprice(answers, pages, customPages, productCount, n, 400);
  };

  const handleSetPages = (newPages: any[]) => {
    setPages(newPages);
    debouncedReprice(answers, newPages, customPages, productCount, blogPostCount, 600);
  };

  const handleSetCustomPages = (newCustomPages: string[]) => {
    setCustomPages(newCustomPages);
    debouncedReprice(answers, pages, newCustomPages, productCount, blogPostCount, 400);
  };

  const pct = phase === "result" ? 100 : phase === "gate" ? 0 : Math.round((step / visSteps().length) * 100);
  const stepLbl = phase === "gate" ? "Getting started" : phase === "result" ? "Done" : `Step ${step + 1} of ${visSteps().length}`;

  const runAI = async () => {
    setAiLoading(true); setAiError(false); setAiErrorMsg("");
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bizName,
          bizLoc,
          bizServes,
          bizDesc,
          niches: selectedNiches,
          implNotes,
          mode: "ai",
          productCount,
          blogPostCount,
          customPages,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error((errData as any)?.error || `API error ${res.status}`);
      }

      const parsed = await res.json();
      const newAnswers: Record<string, any> = {};
      if (parsed.goal) newAnswers.goal = parsed.goal;
      if (parsed.action) newAnswers.action = parsed.action;
      if (parsed.selling) newAnswers.selling = parsed.selling;
      if (parsed.extras) newAnswers.extras = parsed.extras;
      setAnswers(newAnswers);
      if (parsed.pages?.length) setPages(parsed.pages);
      setScopedItems(parsed.scopedItems || []);
      setExtrasDetail(parsed.extrasDetail || []);
      if (parsed.price) setPrice(parsed.price);
      if (parsed.scoped !== undefined) setScoped(parsed.scoped);
      if (parsed.hasNeedsScoping !== undefined) setHasNeedsScoping(parsed.hasNeedsScoping);
      setPhase("result");
    } catch (err: any) {
      console.error("Griffin AI error:", err);
      setAiErrorMsg(err.message || "Unknown error");
      setAiError(true);
    }
    setAiLoading(false);
  };

  const renderQuestion = () => {
    const st = curStep(); if (!st) return null;
    const isMulti = st.type === "multi";
    const sel = answers[st.id] || (isMulti ? [] : null);
    const opts = (st.opts || []).filter((o: any) => !o.showIf || o.showIf(answers));
    const canNext = isMulti || !!sel;
    return (
      <fieldset className="border-none p-0 m-0">
        <legend className="text-[15px] font-semibold text-text leading-[1.4] mb-3 p-0">{st.q}</legend>
        {opts.map((o: any) => {
          const on = isMulti ? sel.includes(o.id) : sel === o.id;
          return (
            <button key={o.id} type="button" onClick={() => pick(st.id, o.id, isMulti)}
              aria-pressed={isMulti ? on : undefined}
              aria-checked={!isMulti ? on : undefined}
              role={isMulti ? "checkbox" : "radio"}
              className={`w-full rounded-xl px-[12px] py-[10px] cursor-pointer flex items-center gap-[10px] mb-[6px] text-left transition-colors ${on ? "border-[1.5px] border-accent bg-accent/[0.063]" : "border border-border bg-transparent"}`}>
              <Ic name={o.icon} size={16} />
              <span className="flex-1">
                <span className="text-[13px] font-medium text-text block">{o.name}</span>
                {o.desc && <span className="text-[11px] text-muted mt-[1px] block">{o.desc}</span>}
              </span>
              {isMulti && <span aria-hidden="true" className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${on ? "border-accent bg-accent" : "border-border bg-transparent"}`}>{on && <span className="text-[10px] text-bg font-bold">✓</span>}</span>}
            </button>
          );
        })}
        <div className="flex gap-2 mt-[10px]">
          {step > 0 && <button type="button" onClick={goBack} className="px-4 py-2 rounded-lg border border-border bg-transparent text-muted text-[12px] cursor-pointer">Back</button>}
          <button type="button" onClick={canNext ? () => goNext() : undefined} disabled={!canNext}
            className={`flex-1 py-2 rounded-full border-none text-[12px] font-bold ${canNext ? "bg-accent text-bg cursor-pointer" : "bg-border text-text/25 cursor-not-allowed"}`}>Continue</button>
        </div>
        <button type="button" className="text-[11px] text-text/25 bg-transparent border-none cursor-pointer underline py-[6px] block">Not sure? Contact us →</button>
      </fieldset>
    );
  };

  return (
    <div className="text-text font-[\'DM_Sans\',\'Helvetica_Neue\',sans-serif]">
      <style>{`.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`}</style>
      <div className="border-b border-b-border px-6 pt-4 pb-[0.875rem]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-text/25 tracking-[0.1em] uppercase">Griffin Web Services — Pricing</span>
          <span className="text-[11px] text-muted">{stepLbl} · {pct}%</span>
        </div>
        <div className="h-[2px] bg-border rounded-[2px] overflow-hidden">
          <div className="h-full bg-accent rounded-[2px] transition-[width] duration-[0.4s] ease-[ease]" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-6 py-5 items-start">
        <div className="flex flex-col gap-3">
          {phase === "gate" ? (
            <div>
              {gateSlide === 0 ? (
                <div>
                  <div className="text-[20px] font-bold text-text mb-1">Build your estimate</div>
                  <div className="text-[13px] text-muted mb-5">Tell us about your business — everything unlocks from here.</div>
                  <div className="mb-3">
                    <Input name="biz-name" label="Business name" required placeholder="e.g. Koi Roofing and Solar" value={bizName} onChange={(e) => setBizName(e.target.value)} labelClassName="block text-xs text-zinc-400" containerClassName="space-y-1" />
                  </div>
                  <div className="mb-3">
                    <Textarea name="biz-desc" label="What does your business do?" required placeholder="e.g. We install roofs and solar panels for residential and commercial clients in New Jersey." value={bizDesc} onChange={(e) => setBizDesc(e.target.value)} rows={3} labelClassName="block text-xs text-zinc-400" containerClassName="space-y-1" />
                  </div>
                  <div className="mb-3">
                    <Input name="biz-loc" label="Where are you located?" required placeholder="e.g. Freehold, NJ" value={bizLoc} onChange={(e) => setBizLoc(e.target.value)} labelClassName="block text-xs text-zinc-400" containerClassName="space-y-1" />
                  </div>
                  <div className="mb-5">
                    <Lbl htmlFor="biz-niche">Business niche <span className="text-text/25 font-normal">(up to 5)</span></Lbl>
                    <NicheSelector selected={selectedNiches} onChange={setSelectedNiches} niches={niches} />
                  </div>
                  <button onClick={slide0Ready ? () => setGateSlide(1) : undefined} disabled={!slide0Ready}
                    className={`w-full py-[11px] rounded-full border-none text-[13px] font-bold ${slide0Ready ? "bg-accent text-bg cursor-pointer" : "bg-border text-text/25 cursor-not-allowed"}`}>
                    Continue →
                  </button>
                </div>
              ) : (
                <div>
                  <button onClick={() => setGateSlide(0)} className="bg-transparent border-none text-muted text-[12px] cursor-pointer pb-4 flex items-center gap-1">← Back</button>
                  <div className="text-[20px] font-bold text-text mb-1">Who do you serve?</div>
                  <div className="text-[13px] text-muted mb-5">This helps us build the right site structure for your reach.</div>
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
                        <button type="button" key={opt.id} onClick={() => setBizServes(opt.id)}
                          role="radio" aria-checked={on}
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
                  <button onClick={gateReady ? startCalc : undefined} disabled={!gateReady}
                    className={`w-full mt-2 py-[11px] rounded-full border-none text-[13px] font-bold ${gateReady ? "bg-accent text-bg cursor-pointer" : "bg-border text-text/25 cursor-not-allowed"}`}>
                    Build my estimate →
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-start gap-[10px] px-[12px] py-[10px] card-bg border-border rounded-xl">
                <div className="flex-1">
                  <div className="text-[13px] font-semibold text-text">{bizName}</div>
                  <div className="text-[11px] text-muted mt-[2px]">📍 {bizLoc}{bizServes ? " · " + SERVES_LABELS[bizServes] : ""}</div>
                  {phase === "result" && bizServes && (
                    <div className="mt-[5px] flex items-center gap-[5px]">
                      <span className="text-[10px] text-text/25">Serving:</span>
                      <span className={`text-[10px] font-medium rounded-[5px] px-[7px] py-[1px] border ${SEO_NUDGE_AREAS.includes(bizServes) ? "text-accent bg-accent/[0.063] border-accent/[0.27]" : "text-muted bg-transparent border-border"}`}>
                        {{ city: "Your city", county: "Your county", state: "Your state", region: "Your region", country: "Nationwide", worldwide: "Worldwide" }[bizServes]}
                      </span>
                      {SEO_NUDGE_AREAS.includes(bizServes) && <span className="text-[10px] text-text/25">— local SEO recommended</span>}
                    </div>
                  )}
                </div>
                <button onClick={editBiz} className="text-[11px] text-muted bg-transparent border-none cursor-pointer underline p-0 shrink-0">Edit</button>
              </div>

              {phase === "result" ? (
                <div>
                  <div className="card-bg border-border rounded-xl p-[0.875rem_1rem] mb-[10px]">
                    <div className="text-[10px] text-text/25 tracking-[0.1em] uppercase mb-3">Review & adjust</div>
                    <div className="flex flex-col gap-3">
                      <div>
                        <div className="text-[11px] text-muted mb-[6px]">Site type</div>
                        <div className="flex gap-[6px]">
                          {[{ id: "showcase", label: "Showcase" }, { id: "ecommerce", label: "E-commerce" }].map((opt) => {
                            const on = answers.goal === opt.id;
                            return <button key={opt.id} onClick={() => {
                              const next = { ...answers, goal: opt.id };
                              setAnswers(next);
                              debouncedReprice(next, pages, customPages, productCount, blogPostCount, 300);
                            }}
                              className={`flex-1 px-[10px] py-[7px] rounded-lg text-[12px] cursor-pointer ${on ? "border-[1.5px] border-accent bg-accent/[0.063] text-accent font-semibold" : "border border-border bg-transparent text-muted font-normal"}`}>
                              {opt.label}
                            </button>;
                          })}
                        </div>
                      </div>

                      {answers.goal !== "ecommerce" && (
                        <div>
                          <div className="text-[11px] text-muted mb-[6px]">Lead capture</div>
                          <div className="flex gap-[6px] flex-wrap">
                            {[{ id: "contact", label: "Contact form" }, { id: "book", label: "Booking" }, { id: "both", label: "Both" }].map((opt) => {
                              const on = answers.action === opt.id;
                              return <button key={opt.id} onClick={() => {
                                const next: Record<string, any> = { ...answers, action: opt.id };
                                const extrasBase = answers.extras || [];
                                if (opt.id === "book" || opt.id === "both") { if (!extrasBase.includes("booking_int")) next.extras = [...extrasBase, "booking_int"]; }
                                else { next.extras = extrasBase.filter((e: string) => e !== "booking_int"); }
                                setAnswers(next);
                                debouncedReprice(next, pages, customPages, productCount, blogPostCount, 300);
                              }} className={`flex-1 px-[10px] py-[7px] rounded-lg text-[12px] cursor-pointer whitespace-nowrap ${on ? "border-[1.5px] border-accent bg-accent/[0.063] text-accent font-semibold" : "border border-border bg-transparent text-muted font-normal"}`}>
                                {opt.label}
                              </button>;
                            })}
                          </div>
                        </div>
                      )}

                      {answers.goal === "ecommerce" && (
                        <div>
                          <div className="text-[11px] text-muted mb-[6px]">Selling</div>
                          <div className="flex gap-[6px] flex-wrap">
                            {[{ id: "physical", label: "Physical" }, { id: "digital", label: "Digital" }, { id: "courses", label: "Courses" }, { id: "coaching", label: "Coaching" }].map((opt) => {
                              const cur = answers.selling || [];
                              const on = cur.includes(opt.id);
                              return <button key={opt.id} onClick={() => {
                                const next = { ...answers, selling: on ? cur.filter((x: string) => x !== opt.id) : [...cur, opt.id] };
                                setAnswers(next);
                                debouncedReprice(next, pages, customPages, productCount, blogPostCount, 300);
                              }}
                                className={`px-[10px] py-[5px] rounded-lg text-[12px] cursor-pointer whitespace-nowrap ${on ? "border-[1.5px] border-accent bg-accent/[0.063] text-accent font-semibold" : "border border-border bg-transparent text-muted font-normal"}`}>
                                {opt.label}
                              </button>;
                            })}
                          </div>
                        </div>
                      )}

                      <div>
                        <div className="text-[11px] text-muted mb-[6px]">Add-ons</div>
                        <div className="flex flex-col gap-[6px]">
                          {[
                            { id: "seo", label: "SEO / AEO", tooltip: true },
                            { id: "analytics", label: "Analytics & Tracking" },
                            { id: "ai_chat", label: "AI Chat Support" },
                            ...(answers.action === "book" || answers.action === "both" || answers.goal === "ecommerce"
                              ? [{ id: "booking_int", label: "Booking integration" }] : []),
                          ].map((opt) => {
                            const cur = answers.extras || [];
                            const on = cur.includes(opt.id);
                            const detail = (extrasDetail || []).find((e: any) => e.id === opt.id);
                            const EXTRA_DEFAULTS: Record<string, number> = { seo: 200, ai_chat: 400, booking_int: 150 };
                            const isAnalytics = opt.id === "analytics";
                            const displayPrice = isAnalytics ? 175 + (detail?.price || 0) : (detail?.price ?? EXTRA_DEFAULTS[opt.id]);
                            const aiPriced = isAnalytics ? true : !!detail?.price;
                            const analyticsSuffix = isAnalytics && detail?.price ? ` ($175 base + $${detail.price} advanced)` : isAnalytics ? " (base)" : "";
                            return (
                              <div key={opt.id}>
                                <button onClick={() => {
                                  const next = { ...answers, extras: on ? cur.filter((x: string) => x !== opt.id) : [...cur, opt.id] };
                                  setAnswers(next);
                                  debouncedReprice(next, pages, customPages, productCount, blogPostCount, 300);
                                }}
                                  className={`w-full px-[10px] py-[7px] rounded-lg cursor-pointer flex items-center gap-2 text-left transition-all duration-200 ${on ? "border-[1.5px] border-accent bg-accent/[0.063]" : "border border-border bg-transparent"}`}>
                                  <span className={`text-[12px] flex-1 flex items-center gap-[5px] ${on ? "text-accent font-semibold" : "text-muted font-normal"}`}>
                                    {opt.label}
                                    {(opt as any).tooltip && <Tooltip text={SEO_AEO_TIP} />}
                                  </span>
                                  <span className={`text-[11px] font-semibold text-right ${on ? "text-accent" : "text-text/25"}`}>
                                    {displayPrice !== undefined ? `$${displayPrice.toLocaleString()}` : ""}
                                    {!aiPriced && <span className="text-[9px] font-normal opacity-70"> est.</span>}
                                    {analyticsSuffix && <span className="text-[9px] font-normal opacity-60 block leading-[1.3]">{analyticsSuffix}</span>}
                                  </span>
                                  <span aria-hidden="true" className={`w-[14px] h-[14px] rounded-[3px] border flex items-center justify-center shrink-0 ${on ? "border-accent bg-accent" : "border-border bg-transparent"}`}>
                                    {on && <span className="text-[9px] text-bg font-bold">✓</span>}
                                  </span>
                                </button>
                                {on && detail?.rationale && (
                                  <div className="text-[10px] text-text/25 leading-[1.5] px-[10px] pt-1 pb-[2px] mt-[1px]">{detail.rationale}</div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-[1.5px] border-accent rounded-xl p-[1rem_1.25rem] mb-3">
                    <div className="flex items-center justify-between mb-[2px]">
                      <div className="text-[11px] text-muted">{price.u} pages · {answers.goal === "ecommerce" ? "E-commerce" : "Business"} site</div>
                      <div className="text-[10px] font-semibold text-accent bg-accent/[0.082] border border-accent/[0.27] rounded px-[7px] py-[1px] tracking-[0.04em]">ESTIMATE</div>
                    </div>
                    <div className="text-[32px] font-bold text-accent my-1 mb-3">${price.total.toLocaleString()}</div>
                    {price.items.map((item: string, i: number) => (
                      <div key={i} className="text-[12px] text-muted flex gap-2 items-start mb-[3px]">
                        <span className="w-[3px] h-[3px] rounded-full bg-text/25 mt-[6px] shrink-0 inline-block" />
                        {item}
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
                    {hasNeedsScoping && (
                      <div className="text-[11px] text-amber-500 mt-[6px] px-[9px] py-[6px] rounded-md bg-amber-500/[0.039] border border-amber-500/20">
                        ⚠ One or more items need a scoping call before pricing. We'll cover these when you reach out.
                      </div>
                    )}
                    <div className="mt-3 pt-[10px] border-t border-t-border text-[11px] text-text/25 leading-[1.5]">
                      ℹ This is a project estimate — not a final invoice. Your confirmed price will be provided after we review your submission and scope the project together.
                    </div>
                  </div>

                  <div className="card-bg border-border rounded-xl p-[0.875rem_1rem] mb-[10px]">
                    <div className="text-[10px] text-text/25 tracking-[0.1em] uppercase mb-3">Send me this quote</div>
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
                    <button onClick={editBiz} className="w-full mt-2 py-2 rounded-lg border border-border bg-transparent text-muted text-[12px] cursor-pointer">Start over</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className={`card-bg rounded-xl p-[0.875rem_1rem] transition-[border-color] duration-300 ${aiLoading ? "border-accent" : "border-border"}`}>
                    <div className="mb-[10px]">
                      <label htmlFor="help-us" className="text-[11px] font-semibold text-text block mb-[3px]">Help us get it right</label>
                      <div className="text-[11px] text-muted mb-[7px] leading-[1.5]">
                        The more you share, the better your estimate — features, tools you use, how customers find you, competitors you admire, or anything about how your business runs.
                      </div>
                      <textarea id="help-us" value={implNotes} onChange={(e) => setImplNotes(e.target.value)}
                        placeholder="e.g. We need online quote requests with photo uploads, a financing page, before/after galleries per project, and we currently use ServiceTitan. Competitors like ABC Roofing have a strong reviews section we'd want to match."
                        className={`w-full bg-bg3/40 border rounded-lg px-[12px] py-[9px] text-[12px] text-text font-[inherit] outline-none resize-none h-[88px] leading-[1.6] box-border transition-[border-color] duration-200 ${implNotes.trim() ? "border-accent/[0.33]" : "border-border"}`} />
                      {!implNotes.trim()
                        ? <div className="text-[10px] text-amber-500 mt-[5px] flex items-center gap-1">⚠ More detail here = a more accurate estimate and a better first call</div>
                        : <div className="text-[10px] text-green-400 mt-[5px] flex items-center gap-1">✓ Great — this will be used to shape your estimate</div>
                      }
                    </div>

                    <div className="border-t border-t-border pt-[10px]">
                      <div className="text-[10px] text-text/25 tracking-[0.1em] uppercase mb-[7px]">AI assistant</div>
                      {aiLoading ? (
                        <div>
                          <div className="flex flex-col gap-[6px] mb-3">
                            {AI_STAGES.map((s, i) => {
                              const done = i < aiStage;
                              const active = i === aiStage;
                              return (
                                <div key={i} className={`flex items-center gap-2 transition-opacity duration-[0.4s] ${i > aiStage ? "opacity-30" : "opacity-100"}`}>
                                  <div className={`w-4 h-4 rounded-full shrink-0 flex items-center justify-center border-[1.5px] ${done ? "border-green-400 bg-green-400/[0.133]" : active ? "border-accent bg-accent/[0.082]" : "border-border bg-transparent"}`}>
                                    {done ? <span className="text-[9px] text-green-400 font-bold">✓</span>
                                      : active ? <span className="w-[6px] h-[6px] rounded-full bg-accent block" style={{ animation: "pulse 1s ease-in-out infinite" }} />
                                      : null}
                                  </div>
                                  <span className={`text-[12px] flex-1 ${done ? "text-green-400" : active ? "text-accent font-medium" : "text-text/25"}`}>{s.label}</span>
                                  {active && <span className="text-[10px] text-text/25">{s.est}</span>}
                                </div>
                              );
                            })}
                          </div>
                          <div className="h-[2px] bg-border rounded-[2px] overflow-hidden">
                            <div className="h-full bg-accent rounded-[2px] transition-[width] duration-[0.8s] ease-[ease]" style={{ width: `${[15, 55, 85][aiStage]}%` }} />
                          </div>
                          <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(0.7)}}`}</style>
                        </div>
                      ) : (
                        <div>
                          <button onClick={runAI}
                            className={`w-full px-[12px] py-[9px] rounded-lg border text-[12px] cursor-pointer flex items-center justify-center gap-[6px] transition-all duration-200 ${implNotes.trim() ? "border-accent bg-accent/[0.063] text-accent font-semibold" : "border-border bg-transparent text-muted font-normal"}`}>
                            ✦ Build my site structure from everything above
                          </button>
                          {!implNotes.trim() && <div className="text-[10px] text-text/25 text-center mt-[5px]">Add details above for a more accurate result</div>}
                        </div>
                      )}
                      {aiError && (
                        <div className="text-[11px] text-amber-500 mt-[6px]">
                          Could not generate — <button onClick={runAI} className="bg-transparent border-none text-amber-500 cursor-pointer underline text-[11px] p-0">try again</button>
                          {aiErrorMsg && <div className="text-[10px] text-text/25 mt-[3px] font-mono">{aiErrorMsg}</div>}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-border" /><span className="text-[11px] text-text/25">or answer step by step</span><div className="flex-1 h-px bg-border" />
                  </div>
                  {renderQuestion()}
                </>
              )}
            </div>
          )}
        </div>

        <div className="sticky overflow-y-auto" style={{ top: "var(--site-header-height)", maxHeight: "calc(100vh - var(--site-header-height))" }}>
          <RightPanel
            phase={phase} pages={pages} setPages={handleSetPages} customPages={customPages} setCustomPages={handleSetCustomPages}
            answers={answers} bizName={bizName} bizLoc={bizLoc} price={price}
            scoped={scoped} hasNeedsScoping={hasNeedsScoping}
            productCount={productCount} setProductCount={handleSetProductCount}
            blogPostCount={blogPostCount} setBlogPostCount={handleSetBlogPostCount}
          />
        </div>
      </div>
    </div>
  );
}
