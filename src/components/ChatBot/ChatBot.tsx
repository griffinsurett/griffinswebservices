// src/components/ChatBot/ChatBot.tsx
import {
  useState, useRef, useEffect, useCallback, memo,
  type FormEvent, type KeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import EmojiPicker, { Theme, EmojiStyle } from "emoji-picker-react";
import type { EmojiClickData } from "emoji-picker-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  time: string;
  reaction?: "up" | "down" | null;
}

// ─── AI API call ──────────────────────────────────────────────────────────────
async function callChatAPI(
  messages: { role: "user" | "assistant"; content: string }[]
): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? `HTTP ${res.status}`);
  }

  const data = await res.json() as { reply: string };
  return data.reply;
}

function getTime(): string {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}


// ─── SVG Icons ────────────────────────────────────────────────────────────────
function ChatIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
        stroke="currentColor" strokeWidth="1.9"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

// ─── Typing animation ─────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <span className="gws-typing" aria-label="Typing">
      <span /><span /><span />
    </span>
  );
}

// ─── Bot Avatar ───────────────────────────────────────────────────────────────
function BotAvatar({ lg }: { lg?: boolean }) {
  return (
    <div className={`gws-avatar${lg ? " gws-avatar--lg" : ""}`} aria-hidden="true">
      <ChatIcon size={lg ? 20 : 15} />
    </div>
  );
}

// ─── Smart message renderer: line breaks + clickable links ──────────────────
const URL_RE = /(https?:\/\/[^\s]+)/g;

// Strip trailing punctuation that might follow a URL (e.g. "visit url." or "url)")
function cleanUrl(raw: string): string {
  return raw.replace(/[.,!?;:)"']+$/, "");
}
const OWN_DOMAIN = "griffinswebservices.com";

// Maps known paths to friendly readable labels
const PAGE_LABELS: Record<string, string> = {
  "/pricing":    "View Pricing",
  "/projects":   "View Portfolio",
  "/blog":       "Read Our Blog",
  "/faq":        "View FAQs",
  "/contact-us": "Contact Us",
  "/services":   "Our Services",
  "/links":      "Link Page",
};

function renderLink(url: string, key: number) {
  const href = cleanUrl(url);
  try {
    const parsed = new URL(href);
    const isInternal = parsed.hostname === OWN_DOMAIN;
    const path = parsed.pathname.replace(/\/$/, "") || "/";
    const label = PAGE_LABELS[path] ?? parsed.hostname + path;

    if (isInternal) {
      return (
        <a key={key} href={path} className="gws-link gws-link--internal">
          {label} →
        </a>
      );
    }
    return (
      <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="gws-link">
        {label}
      </a>
    );
  } catch {
    return <span key={key}>{url}</span>;
  }
}

function MessageText({ text }: { text: string }) {
  return (
    <span className="gws-msg-text">
      {text.split("\n").map((line, li) => {
        const parts = line.split(URL_RE);
        return (
          <span key={li}>
            {li > 0 && <br />}
            {parts.map((part, pi) =>
              URL_RE.test(part) ? renderLink(part, pi) : part
            )}
          </span>
        );
      })}
    </span>
  );
}

// ─── Bot message ──────────────────────────────────────────────────────────────
const BotMessage = memo(({
  msg, onReact,
}: {
  msg: Message;
  onReact: (id: string, r: "up" | "down") => void;
}) => (
  <div className="gws-row gws-row--bot">
    {/* Bubble + hover reactions */}
    <div className="gws-bubble-group">
      <div className="gws-bubble gws-bubble--bot"><MessageText text={msg.text} /></div>
      {/* Reactions — visible only on hover via CSS */}
      <div className="gws-react-row" role="group" aria-label="Rate this response">
        <button
          className={`gws-react${msg.reaction === "up" ? " gws-react--on" : ""}`}
          onClick={() => onReact(msg.id, "up")}
          aria-label="Helpful"
          aria-pressed={msg.reaction === "up"}
          type="button"
        >👍</button>
        <button
          className={`gws-react${msg.reaction === "down" ? " gws-react--on" : ""}`}
          onClick={() => onReact(msg.id, "down")}
          aria-label="Not helpful"
          aria-pressed={msg.reaction === "down"}
          type="button"
        >👎</button>
      </div>
    </div>
    {/* Avatar + time */}
    <div className="gws-row-footer">
      <BotAvatar />
      <time className="gws-ts">{msg.time}</time>
    </div>
  </div>
));

// ─── User message ─────────────────────────────────────────────────────────────
const UserMessage = memo(({ msg }: { msg: Message }) => (
  <div className="gws-row gws-row--user">
    <div className="gws-bubble gws-bubble--user">{msg.text}</div>
    <time className="gws-ts gws-ts--user">{msg.time} · Seen</time>
  </div>
));

// ─── FAB ─────────────────────────────────────────────────────────────────────
function Fab({ open, unread, onClick }: { open: boolean; unread: number; onClick: () => void }) {
  return (
    <button
      id="gws-chatbot-trigger"
      onClick={onClick}
      className={`gws-fab${open ? " gws-fab--open" : ""}`}
      aria-label={open ? "Close chat" : "Chat with Griffin's Assistant"}
      aria-expanded={open}
      type="button"
    >
      <span className={`gws-fab-icon${open ? " gws-fab-icon--x" : ""}`}>
        {open ? <CloseIcon size={18} /> : <ChatIcon size={22} />}
      </span>
      {!open && unread > 0 && (
        <span className="gws-fab-dot" aria-label={`${unread} new`}>{unread}</span>
      )}
    </button>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
function ChatBot() {
  const [open, setOpen]       = useState(false);
  const [msgs, setMsgs]       = useState<Message[]>([{
    id: "w0", role: "assistant",
    text: "Hi! 👋 How can I help you today?",
    time: getTime(),
  }]);
  const [input, setInput]       = useState("");
  const [typing, setTyping]     = useState(false);
  const [unread, setUnread]     = useState(0);
  const [emoji, setEmoji]       = useState(false);
  const [emojiClosing, setEmojiClosing] = useState(false);
  const [dark, setDark]         = useState(true);
  const [mounted, setMounted]   = useState(false);

  // Closes the emoji picker with a smooth exit animation before unmounting
  const closeEmoji = useCallback(() => {
    setEmojiClosing(true);
    setTimeout(() => {
      setEmoji(false);
      setEmojiClosing(false);
    }, 200); // matches gwsEmojiClose duration
  }, []);

  const bottomRef  = useRef<HTMLDivElement>(null);
  const inputRef   = useRef<HTMLTextAreaElement>(null);
  const emojiRef   = useRef<HTMLDivElement>(null);
  const emojiBtnRef = useRef<HTMLButtonElement>(null);

  // Mount + theme watch
  useEffect(() => {
    setMounted(true);
    const check = () => setDark(document.documentElement.getAttribute("data-theme") !== "light");
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  // Scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  // Focus on open
  useEffect(() => {
    if (open) { setUnread(0); setTimeout(() => inputRef.current?.focus(), 120); }
    else { if (emoji) closeEmoji(); else setEmoji(false); }
  }, [open]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const h = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") { if (emoji) { closeEmoji(); } else { setOpen(false); } }
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, emoji]);

  // Click outside emoji picker
  useEffect(() => {
    if (!emoji) return;
    const h = (e: MouseEvent) => {
      if (
        emojiRef.current && !emojiRef.current.contains(e.target as Node) &&
        emojiBtnRef.current && !emojiBtnRef.current.contains(e.target as Node)
      ) closeEmoji();
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [emoji]);

  const react = useCallback((id: string, r: "up" | "down") => {
    setMsgs(prev => prev.map(m =>
      m.id === id ? { ...m, reaction: m.reaction === r ? null : r } : m
    ));
  }, []);

  const onEmoji = useCallback((data: EmojiClickData) => {
    setInput(p => p + data.emoji);
    closeEmoji();
    inputRef.current?.focus();
  }, [closeEmoji]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: `u${Date.now()}`, role: "user", text, time: getTime() };
    setMsgs(prev => [...prev, userMsg]);
    setInput("");
    if (inputRef.current) inputRef.current.style.height = "auto";
    setTyping(true);

    // Build conversation history to send (last 10 messages for context)
    const history = [...msgs, userMsg]
      .slice(-10)
      .map(m => ({ role: m.role as "user" | "assistant", content: m.text }));

    try {
      const reply = await callChatAPI(history);
      setMsgs(prev => [...prev, {
        id: `b${Date.now()}`,
        role: "assistant",
        text: reply,
        time: getTime(),
      }]);
    } catch {
      setMsgs(prev => [...prev, {
        id: `b${Date.now()}`,
        role: "assistant",
        text: "Sorry, I'm having trouble connecting right now. Please try again or reach us at /contact-us.",
        time: getTime(),
      }]);
    } finally {
      setTyping(false);
      if (!open) setUnread(n => n + 1);
    }
  }, [input, msgs, open]);

  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Panel */}
      <div
        className={`gws-panel${open ? " gws-panel--open" : ""}`}
        role="dialog" aria-modal="true" aria-label="Chat with Griffin's Web Services"
      >
        {/* Header */}
        <header className="gws-head">
          <BotAvatar lg />
          <div className="gws-head-text">
            <p className="gws-head-name">Griffin's Assistant</p>
            <p className="gws-head-sub"><span className="gws-dot" />24×7 Support</p>
          </div>
          <button onClick={() => setOpen(false)} className="gws-head-x" aria-label="Close" type="button">
            <CloseIcon />
          </button>
        </header>

        {/* Messages */}
        <div className="gws-msgs" role="log" aria-live="polite">
          {msgs.map(m => m.role === "user"
            ? <UserMessage key={m.id} msg={m} />
            : <BotMessage  key={m.id} msg={m} onReact={react} />
          )}

          {typing && (
            <div className="gws-row gws-row--bot">
              <div className="gws-bubble gws-bubble--bot gws-bubble--typing">
                <TypingDots />
              </div>
              <div className="gws-row-footer">
                <BotAvatar />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Emoji picker — stays mounted during close animation */}
        {(emoji || emojiClosing) && (
          <div
            ref={emojiRef}
            className={`gws-emoji-wrap${emojiClosing ? " gws-emoji-wrap--closing" : ""}`}
          >
            <EmojiPicker
              onEmojiClick={onEmoji}
              theme={dark ? Theme.DARK : Theme.LIGHT}
              emojiStyle={EmojiStyle.NATIVE}
              width="100%" height={300}
              previewConfig={{ showPreview: false }}
              searchPlaceholder="Search…"
              lazyLoadEmojis
            />
          </div>
        )}

        {/* Input */}
        <form className="gws-bar" onSubmit={(e: FormEvent) => { e.preventDefault(); send(); }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => {
              setInput(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = Math.min(e.target.scrollHeight, 96) + "px";
            }}
            onKeyDown={onKey}
            placeholder="Ask anything…"
            rows={1}
            className="gws-input"
            aria-label="Message"
          />
          <button
            ref={emojiBtnRef}
            type="button"
            className={`gws-icon-btn${emoji ? " gws-icon-btn--on" : ""}`}
            aria-label="Emoji"
            onClick={() => emoji ? closeEmoji() : setEmoji(true)}
          >
            <SmileIcon />
          </button>
          <button
            type="submit"
            className="gws-send"
            aria-label="Send"
            disabled={!input.trim()}
          >
            <SendIcon />
          </button>
        </form>
      </div>

      {/* FAB */}
      <Fab open={open} unread={unread} onClick={() => setOpen(o => !o)} />
    </>,
    document.body
  );
}

export default memo(ChatBot);
