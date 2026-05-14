// src/integrations/chatbot/ChatBot.tsx
import {
  useState, useRef, useEffect, useCallback, memo,
  type FormEvent, type KeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import EmojiPicker, { Theme, EmojiStyle } from "emoji-picker-react";
import type { EmojiClickData } from "emoji-picker-react";
import AnimatedBorder from "@/components/AnimatedBorder/AnimatedBorder";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  time: string;
  reaction?: "up" | "down" | null;
}

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

function ChatIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
        stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
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

function MicIcon({ recording }: { recording: boolean }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="2" width="6" height="11" rx="3"
        fill={recording ? "currentColor" : "none"}
        stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 11a7 7 0 0014 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="9" y1="22" x2="15" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1.5 h-4" aria-label="Typing">
      <span className="w-1.5 h-1.5 rounded-full bg-muted animate-chatbot-dot [animation-delay:0s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-muted animate-chatbot-dot [animation-delay:.18s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-muted animate-chatbot-dot [animation-delay:.36s]" />
    </span>
  );
}

function BotAvatar({ lg }: { lg?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`shrink-0 rounded-full card-icon-color text-bg flex items-center justify-center
        ${lg ? "w-10 h-10" : "w-7 h-7"}`}
    >
      <ChatIcon size={lg ? 20 : 14} />
    </div>
  );
}

const URL_RE = /(https?:\/\/[^\s]+)/g;

function cleanUrl(raw: string): string {
  return raw.replace(/[.,!?;:)"']+$/, "");
}

const OWN_DOMAIN = "griffinswebservices.com";

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
        <a key={key} href={path}
          className="inline-flex items-center gap-1 text-accent bg-accent/10 border border-accent/25 px-2.5 py-0.5 rounded-full text-xs font-medium mx-0.5 hover:bg-accent/20 hover:-translate-y-px transition-all duration-200">
          {label} →
        </a>
      );
    }
    return (
      <a key={key} href={href} target="_blank" rel="noopener noreferrer"
        className="text-accent underline underline-offset-2 hover:opacity-75 transition-opacity">
        {label}
      </a>
    );
  } catch {
    return <span key={key}>{url}</span>;
  }
}

function MessageText({ text }: { text: string }) {
  return (
    <span className="block whitespace-pre-line wrap-break-word text-[.845rem] leading-[1.55]">
      {text.split("\n").map((line, li) => {
        const parts = line.split(URL_RE);
        return (
          <span key={li}>
            {li > 0 && <br />}
            {parts.map((part, pi) => URL_RE.test(part) ? renderLink(part, pi) : part)}
          </span>
        );
      })}
    </span>
  );
}

const BotMessage = memo(({ msg, onReact }: {
  msg: Message;
  onReact: (id: string, r: "up" | "down") => void;
}) => (
  <div className="flex flex-col items-start mb-2 animate-chatbot-in">
    <div className="relative max-w-[83%] group">
      <div className="bg-bg3 border border-border text-text px-3.5 py-2.5 rounded-[.25rem_1rem_1rem_1rem]">
        <MessageText text={msg.text} />
      </div>
      <div
        role="group" aria-label="Rate this response"
        className="flex gap-1 mt-1.5 opacity-0 pointer-events-none translate-y-0.5 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 has-[.chatbot-react-on]:opacity-100 has-[.chatbot-react-on]:pointer-events-auto has-[.chatbot-react-on]:translate-y-0 transition-all duration-200"
      >
        <button type="button" onClick={() => onReact(msg.id, "up")} aria-label="Helpful" aria-pressed={msg.reaction === "up"}
          className={`border-0 bg-transparent p-0 cursor-pointer text-[.85rem] leading-none w-[1.55rem] h-[1.55rem] rounded-[.45rem] flex items-center justify-center transition-[transform,filter,background] duration-200 [filter:grayscale(50%)_opacity(.55)] hover:scale-125 hover:[filter:grayscale(0%)_opacity(1)] hover:bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)] active:scale-105 ${msg.reaction === "up" ? "[filter:grayscale(0%)_opacity(1)] scale-110 bg-[color-mix(in_srgb,var(--color-accent)_15%,transparent)]" : ""}`}>👍</button>
        <button type="button" onClick={() => onReact(msg.id, "down")} aria-label="Not helpful" aria-pressed={msg.reaction === "down"}
          className={`border-0 bg-transparent p-0 cursor-pointer text-[.85rem] leading-none w-[1.55rem] h-[1.55rem] rounded-[.45rem] flex items-center justify-center transition-[transform,filter,background] duration-200 [filter:grayscale(50%)_opacity(.55)] hover:scale-125 hover:[filter:grayscale(0%)_opacity(1)] hover:bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)] active:scale-105 ${msg.reaction === "down" ? "[filter:grayscale(0%)_opacity(1)] scale-110 bg-[color-mix(in_srgb,var(--color-accent)_15%,transparent)]" : ""}`}>👎</button>
      </div>
    </div>
    <div className="flex items-center gap-1.5 mt-1">
      <BotAvatar />
      <time className="text-[.63rem] text-muted whitespace-nowrap">{msg.time}</time>
    </div>
  </div>
));

const UserMessage = memo(({ msg }: { msg: Message }) => (
  <div className="flex flex-col items-end mb-2.5 animate-chatbot-in">
    <div className="max-w-[83%] accent-primary-gradient text-white px-3.5 py-2.5 rounded-[1rem_1rem_.25rem_1rem] text-[.845rem] leading-[1.55] wrap-break-word">
      {msg.text}
    </div>
    <time className="text-[.63rem] text-muted mt-1 pr-0.5 whitespace-nowrap">{msg.time} · Seen</time>
  </div>
));

function Fab({ open, unread, onClick }: { open: boolean; unread: number; onClick: () => void }) {
  return (
    <button
      id="gws-chatbot-trigger"
      onClick={onClick}
      type="button"
      aria-label={open ? "Close chat" : "Chat with Griffin's Assistant"}
      aria-expanded={open}
      className={`fixed bottom-[clamp(1.25rem,4vw,1.75rem)] right-[clamp(1.25rem,4vw,1.75rem)] z-[100003]
        w-14 h-14 rounded-full cursor-pointer
        card-icon-color text-bg
        shadow-[0_4px_20px_color-mix(in_srgb,var(--color-accent)_50%,transparent),0_2px_8px_rgba(0,0,0,.35)]
        flex items-center justify-center transition-transform duration-700 ease-out
        hover:scale-110 active:scale-95 ${open ? "scale-105" : ""}`}
    >
      <span className={`flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] ${open ? "rotate-90" : ""}`}>
        {open ? <CloseIcon size={18} /> : <ChatIcon size={24} />}
      </span>
      {!open && unread > 0 && (
        <span aria-label={`${unread} new`}
          className="absolute -top-1 -right-1 bg-red-500 text-white text-[.6rem] font-bold min-w-[1.15rem] h-[1.15rem] rounded-full flex items-center justify-center border-2 border-bg animate-chatbot-badge">
          {unread}
        </span>
      )}
    </button>
  );
}

function ChatBot() {
  const [open, setOpen]       = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [msgs, setMsgs]     = useState<Message[]>([{
    id: "w0", role: "assistant",
    text: "Hi! 👋 How can I help you today?",
    time: getTime(),
  }]);
  const [input, setInput]   = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const [emoji, setEmoji]   = useState(false);
  const [emojiClosing, setEmojiClosing] = useState(false);
  const [dark, setDark]     = useState(true);
  const [mounted, setMounted] = useState(false);
  const [recording, setRecording] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef<any>(null);

  const closeEmoji = useCallback(() => {
    setEmojiClosing(true);
    setTimeout(() => { setEmoji(false); setEmojiClosing(false); }, 200);
  }, []);

  const bottomRef   = useRef<HTMLDivElement>(null);
  const inputRef    = useRef<HTMLTextAreaElement>(null);
  const emojiRef    = useRef<HTMLDivElement>(null);
  const emojiBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const check = () => setDark(document.documentElement.getAttribute("data-theme") !== "light");
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    setSpeechSupported(!!(window.SpeechRecognition || (window as any).webkitSpeechRecognition));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing, open]);

  useEffect(() => {
    if (open) { setUnread(0); }
    else { if (emoji) closeEmoji(); else setEmoji(false); }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const h = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") { if (emoji) closeEmoji(); else setOpen(false); }
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, emoji]);

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
    setMsgs(prev => prev.map(m => m.id === id ? { ...m, reaction: m.reaction === r ? null : r } : m));
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
    const history = [...msgs, userMsg].slice(-10).map(m => ({ role: m.role as "user" | "assistant", content: m.text }));
    try {
      const reply = await callChatAPI(history);
      setMsgs(prev => [...prev, { id: `b${Date.now()}`, role: "assistant", text: reply, time: getTime() }]);
    } catch {
      setMsgs(prev => [...prev, {
        id: `b${Date.now()}`, role: "assistant",
        text: "Sorry, I'm having trouble connecting right now. Please try again or reach us at /contact-us.",
        time: getTime(),
      }]);
    } finally {
      setTyping(false);
      if (!open) setUnread(n => n + 1);
    }
  }, [input, msgs, open]);

  const toggleRecording = useCallback(() => {
    if (recording) {
      recognitionRef.current?.stop();
      return;
    }
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const rec = new SR();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.onresult = (e: any) => {
      const transcript = e.results[0]?.[0]?.transcript ?? "";
      if (transcript) setInput(p => (p ? p + " " + transcript : transcript));
    };
    rec.onend = () => setRecording(false);
    rec.onerror = () => setRecording(false);
    recognitionRef.current = rec;
    rec.start();
    setRecording(true);
  }, [recording]);

  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Panel */}
      <div
        role="dialog" aria-modal="true" aria-label="Chat with Griffin's Web Services"
        className={`fixed z-[100002]
          bottom-[calc(clamp(1.25rem,4vw,1.75rem)+3.5rem+.875rem)]
          right-[clamp(1.25rem,4vw,1.75rem)]
          w-[min(24rem,calc(100vw-clamp(2.5rem,8vw,3.5rem)))]
          max-h-[calc(100dvh-5.5rem-1rem-clamp(1.25rem,4vw,1.75rem)-3.5rem-.875rem)]
          min-h-[min(22rem,calc(100dvh-14rem))]
          flex flex-col overflow-hidden
          bg-bg border border-border rounded-[1.25rem]
          shadow-[0_24px_64px_rgba(0,0,0,.6),0_8px_24px_rgba(0,0,0,.3),inset_0_1px_0_rgba(255,255,255,.06)]
          transition-[opacity,transform] duration-250 ease-[cubic-bezier(.34,1.56,.64,1)]
          max-sm:inset-0 max-sm:w-auto max-sm:max-h-none max-sm:min-h-0 max-sm:bottom-0 max-sm:rounded-none
          ${open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-3 scale-[.97] pointer-events-none"
          }`}
      >
        {/* Header */}
        <header className="flex items-center gap-3 px-4 py-3.5 shrink-0 card-bg">
          <BotAvatar lg />
          <div className="flex-1 min-w-0">
            <p className="text-[.9rem] font-bold text-heading m-0 leading-tight truncate">Griffin's Assistant</p>
            <p className="text-[.7rem] text-muted m-0 flex items-center gap-1.5 mt-0.5">
              <span className="w-[.42rem] h-[.42rem] rounded-full bg-green-400 shadow-[0_0_5px_#4ade80] animate-chatbot-pulse shrink-0" />
              24×7 Support
            </p>
          </div>
          <button onClick={() => setOpen(false)} type="button" aria-label="Close"
            className="shrink-0 w-[1.9rem] h-[1.9rem] rounded-full faded-bg border-0 text-heading flex items-center justify-center transition-colors">
            <CloseIcon />
          </button>
        </header>

        {/* Messages */}
        <div role="log" aria-live="polite"
          className="flex-1 overflow-y-auto px-3.5 pt-4 pb-2.5 flex flex-col scrollbar-hide overscroll-contain">
          {msgs.map(m => m.role === "user"
            ? <UserMessage key={m.id} msg={m} />
            : <BotMessage  key={m.id} msg={m} onReact={react} />
          )}
          {typing && (
            <div className="flex flex-col items-start mb-2 animate-chatbot-in">
              <div className="bg-bg3 border border-border px-3.5 py-2.5 rounded-[.25rem_1rem_1rem_1rem]">
                <TypingDots />
              </div>
              <div className="mt-1"><BotAvatar /></div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Emoji picker */}
        {(emoji || emojiClosing) && (
          <div ref={emojiRef}
            className={`shrink-0 overflow-hidden origin-bottom-left ${emojiClosing ? "animate-chatbot-emoji-close" : "animate-chatbot-emoji-open"}`}>
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

        {/* Input bar */}
        <form className="flex items-end gap-1.5 px-3.5 py-2.5 border-t border-border bg-bg shrink-0"
          onSubmit={(e: FormEvent) => { e.preventDefault(); send(); }}>
          <AnimatedBorder
            variant="progress-b-f"
            triggers="controlled"
            active={inputFocused}
            duration={900}
            borderWidth={2}
            borderRadius="rounded-xl"
            color="var(--color-accent)"
            innerClassName="!bg-transparent !border-transparent p-0 rounded-xl flex-1"
            className="flex-1"
          >
            <div className="relative flex items-end">
              <textarea
                ref={inputRef}
                value={input}
                onChange={e => {
                  setInput(e.target.value);
                  e.target.style.height = "auto";
                  e.target.style.height = Math.min(e.target.scrollHeight, 96) + "px";
                }}
                onKeyDown={onKey}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="Ask anything…"
                rows={1}
                tabIndex={open ? 0 : -1}
                aria-label="Message"
                className={`w-full resize-none form-field text-[.845rem] font-[inherit] leading-normal max-h-24 min-h-[2.4rem] overflow-y-auto scrollbar-hide block ${speechSupported ? "sm:pr-8" : ""}`}
              />
              {speechSupported && (
                <button type="button" aria-label={recording ? "Stop recording" : "Speak your message"}
                  onClick={toggleRecording}
                  className={`hidden sm:flex absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-0 bg-transparent cursor-pointer items-center justify-center transition-[color] duration-200
                    ${recording ? "text-red-500 animate-chatbot-pulse" : "text-muted hover:text-accent"}`}>
                  <MicIcon recording={recording} />
                </button>
              )}
            </div>
          </AnimatedBorder>
          <button ref={emojiBtnRef} type="button" aria-label="Emoji"
            onClick={() => emoji ? closeEmoji() : setEmoji(true)}
            className={`hidden sm:flex w-9 h-9 rounded-full border-0 bg-transparent cursor-pointer items-center justify-center shrink-0 transition-[color,background] duration-200
              ${emoji ? "text-accent bg-accent/10" : "text-muted hover:text-accent hover:bg-accent/10"}`}>
            <SmileIcon />
          </button>
          <button type="submit" aria-label="Send" disabled={!input.trim()}
            className="w-9 h-9 rounded-full border-0 cursor-pointer shrink-0 flex items-center justify-center card-icon-color text-bg transition-[transform,opacity] duration-200 hover:enabled:scale-110 active:enabled:scale-[.92] disabled:opacity-30 disabled:cursor-not-allowed">
            <SendIcon />
          </button>
        </form>
      </div>

      <Fab open={open} unread={unread} onClick={() => setOpen(o => !o)} />
    </>,
    document.body
  );
}

export default memo(ChatBot);
