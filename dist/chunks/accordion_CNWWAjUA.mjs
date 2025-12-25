import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect, isValidElement, forwardRef, useId, useMemo, useCallback } from 'react';
import { A as AnimatedBorder, I as IconListItem, a as Icon } from './ui-primitives_qUXBbRTf.mjs';
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderComponent, e as renderTemplate, u as unescapeHTML } from './astro/server_BujBp8IR.mjs';
import 'piccolore';
import { u as useVisibility } from './visibility-hooks_VGxr6noa.mjs';
import { u as useEngagementAutoplay } from './engagement-hooks_BUn1OkqQ.mjs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir } from 'node:fs/promises';
import fs from 'node:fs';
import path from 'node:path';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

const $$Astro$2 = createAstro("https://https://griffinswebservices.com");
const $$ContentBridge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContentBridge;
  const {
    items = [],
    bridgeId,
    className = ""
  } = Astro2.props;
  const normalizedBridgeId = (typeof bridgeId === "string" ? bridgeId.trim() : bridgeId != null ? String(bridgeId) : "") || "content-bridge";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`content-bridge ${className}`, "class")}${addAttribute(normalizedBridgeId, "data-bridge-id")}>  ${items.map((item, index) => renderTemplate`<div${addAttribute(`${normalizedBridgeId}-slot-${index}`, "id")} style="display: none;"${addAttribute(index, "data-bridge-slot")}>  ${item.Content ? renderTemplate`${renderComponent($$result, "item.Content", item.Content, {})}` : (
    /* Render raw HTML if provided */
    item.content ? renderTemplate`<div>${unescapeHTML(item.content)}</div>` : null
  )} </div>`)}  ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/ContentBridge/ContentBridge.astro", void 0);

function createIntersectionObserver(element, {
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  once = false,
  onEnter,
  onExit
} = {}) {
  let isVisible = false;
  let hasBeenSeen = false;
  let observer = null;
  if (!element || typeof IntersectionObserver === "undefined") {
    return {
      isVisible,
      hasBeenSeen,
      disconnect: () => void 0
    };
  }
  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry) return;
      const inView = entry.isIntersecting;
      isVisible = inView;
      if (inView) {
        if (!hasBeenSeen) hasBeenSeen = true;
        onEnter?.(entry);
        if (once) observer?.disconnect();
      } else {
        onExit?.(entry);
      }
    },
    { threshold, root, rootMargin }
  );
  observer.observe(element);
  return {
    get isVisible() {
      return isVisible;
    },
    get hasBeenSeen() {
      return hasBeenSeen;
    },
    disconnect: () => observer?.disconnect()
  };
}

function AccordionItem({
  id,
  title,
  description,
  className = "",
  children,
  isExpanded,
  onToggle,
  headerClassName = "h5",
  headerSlot,
  showIndicator = true,
  indicatorIcons
}) {
  const expandedIcon = indicatorIcons?.expanded ?? "lucide:minus";
  const collapsedIcon = indicatorIcons?.collapsed ?? "lucide:plus";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `group relative ${className}`.trim(),
      "data-accordion-item": true,
      "data-active": isExpanded ? "true" : "false",
      children: /* @__PURE__ */ jsxs(
        AnimatedBorder,
        {
          variant: "progress-b-f",
          triggers: "controlled",
          active: isExpanded,
          borderRadius: "rounded-3xl",
          borderWidth: 2,
          duration: 800,
          className: "transition-all duration-200 overflow-hidden",
          innerClassName: "card-bg",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                id: `${id}-trigger`,
                "aria-expanded": isExpanded,
                "aria-controls": `${id}-content`,
                className: `w-full text-left flex items-center justify-between px-6 py-5 hover:bg-card/60 transition-colors duration-300 cursor-pointer relative z-20 ${headerClassName}`.trim(),
                onClick: onToggle,
                children: [
                  headerSlot ? /* @__PURE__ */ jsx("div", { className: "flex-1", children: headerSlot }) : /* @__PURE__ */ jsx(
                    IconListItem,
                    {
                      data: { title },
                      layout: "horizontal",
                      alignment: "left",
                      className: "gap-4 flex-1",
                      titleTag: "h3",
                      showDescription: false
                    }
                  ),
                  showIndicator && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 text-lg font-semibold ${isExpanded ? "bg-primary text-bg" : "bg-primary/20 text-accent"}`,
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsx(
                        Icon,
                        {
                          icon: isExpanded ? expandedIcon : collapsedIcon,
                          size: "sm",
                          className: "w-4 h-4"
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                id: `${id}-content`,
                role: "region",
                "aria-labelledby": `${id}-trigger`,
                className: `overflow-hidden transition-all duration-500 ease-in-out relative z-20 ${isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`,
                children: /* @__PURE__ */ jsxs("div", { className: "px-6 pb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-primary/15 mb-4" }),
                  description && /* @__PURE__ */ jsx("p", { className: "text-text/90 leading-relaxed mb-4", children: description }),
                  children
                ] })
              }
            )
          ]
        }
      )
    }
  );
}

function animationProps(animation, options = {}) {
  const { once = true, delay, duration, threshold, rootMargin, directional } = options;
  const attrs = {
    "data-animate": animation
  };
  if (once) {
    attrs["data-animate-once"] = "true";
  }
  if (threshold !== void 0) {
    attrs["data-animate-threshold"] = String(threshold);
  }
  if (rootMargin !== void 0) {
    attrs["data-animate-root-margin"] = rootMargin;
  }
  if (directional) {
    attrs["data-animate-directional"] = "true";
  }
  if (delay !== void 0 || duration !== void 0) {
    const style = {};
    if (delay !== void 0) {
      attrs["data-animate-delay"] = String(delay);
      style["--animation-delay"] = `${delay}ms`;
    }
    if (duration !== void 0) {
      style["--animation-duration"] = `${duration}ms`;
    }
    attrs.style = style;
  }
  return attrs;
}
function staggeredAnimationProps(animation, index, options = {}) {
  const { staggerDelay = 100, delay = 0, ...rest } = options;
  return animationProps(animation, {
    ...rest,
    delay: delay + index * staggerDelay
  });
}

function isLazyVideo(el) {
  if (!(el instanceof HTMLVideoElement)) return false;
  return Boolean(
    el.dataset.videoSrc || el.querySelector("source[data-video-src]")
  );
}
function hydrateVideoSources(video) {
  if (video.dataset.videoLoaded === "true") return true;
  let hasSource = false;
  const direct = video.dataset.videoSrc;
  if (direct && video.src !== direct) {
    video.src = direct;
    hasSource = true;
  }
  const sources = video.querySelectorAll("source[data-video-src]");
  sources.forEach((source) => {
    const src = source.dataset.videoSrc;
    if (src && source.src !== src) {
      source.src = src;
      hasSource = true;
    }
  });
  if (hasSource) {
    video.load();
    video.dataset.videoLoaded = "true";
  }
  return hasSource;
}
function playVideo(video) {
  const shouldAutoplay = video.dataset.videoAutoplay !== "false";
  if (!shouldAutoplay) return;
  const playResult = video.play();
  if (typeof playResult?.catch === "function") {
    playResult.catch(() => void 0);
  }
}
function pauseVideo(video) {
  const shouldPause = video.dataset.videoPause !== "false";
  if (!shouldPause) return;
  video.pause();
}
function handleVideoEnter(el) {
  if (!isLazyVideo(el)) return;
  const ready = hydrateVideoSources(el);
  if (ready) {
    playVideo(el);
  }
}
function handleVideoExit(el) {
  if (!isLazyVideo(el)) return;
  pauseVideo(el);
}
class ScrollAnimationObserver {
  observedElements = /* @__PURE__ */ new WeakSet();
  disconnectors = /* @__PURE__ */ new WeakMap();
  defaultThreshold;
  defaultRootMargin;
  lastScrollY = 0;
  scrollDirection = "down";
  constructor(options = {}) {
    this.defaultThreshold = options.defaultThreshold ?? 0.1;
    this.defaultRootMargin = options.defaultRootMargin ?? "0px 0px -50px 0px";
  }
  init() {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }
    this.lastScrollY = window.scrollY;
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.observeAll();
    this.setupMutationObserver();
  }
  handleScroll = () => {
    const currentScrollY = window.scrollY;
    this.scrollDirection = currentScrollY > this.lastScrollY ? "down" : "up";
    this.lastScrollY = currentScrollY;
  };
  observeAll() {
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => this.observe(el));
    const supportsScrollTimeline = CSS.supports("animation-timeline: view()");
    if (!supportsScrollTimeline) {
      const cssElements = document.querySelectorAll("[data-animate-css]");
      cssElements.forEach((el) => this.observeCSS(el));
    }
  }
  observe(el) {
    if (this.observedElements.has(el)) {
      return;
    }
    this.observedElements.add(el);
    const once = el.dataset.animateOnce === "true";
    const delay = parseInt(el.dataset.animateDelay || "0", 10);
    const threshold = el.dataset.animateThreshold ? parseFloat(el.dataset.animateThreshold) : this.defaultThreshold;
    const rootMargin = el.dataset.animateRootMargin || this.defaultRootMargin;
    const { disconnect } = createIntersectionObserver(el, {
      threshold,
      rootMargin,
      once,
      onEnter: () => {
        handleVideoEnter(el);
        if (delay > 0) {
          setTimeout(() => {
            el.dataset.visible = "true";
          }, delay);
        } else {
          el.dataset.visible = "true";
        }
      },
      onExit: () => {
        if (!once) {
          el.dataset.visible = "false";
          if (el.dataset.animateDirectional === "true") {
            el.dataset.exitDirection = this.scrollDirection;
          }
        }
        handleVideoExit(el);
      }
    });
    this.disconnectors.set(el, disconnect);
  }
  observeCSS(el) {
    if (this.observedElements.has(el)) {
      return;
    }
    this.observedElements.add(el);
    const animationType = el.dataset.animateCss;
    if (animationType) {
      el.dataset.animate = animationType;
    }
    const once = true;
    const { disconnect } = createIntersectionObserver(el, {
      threshold: this.defaultThreshold,
      rootMargin: this.defaultRootMargin,
      once,
      onEnter: () => {
        el.dataset.visible = "true";
      },
      onExit: () => {
      }
    });
    this.disconnectors.set(el, disconnect);
  }
  setupMutationObserver() {
    const supportsScrollTimeline = CSS.supports("animation-timeline: view()");
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.hasAttribute("data-animate")) {
              this.observe(node);
            }
            node.querySelectorAll?.("[data-animate]").forEach((el) => {
              this.observe(el);
            });
            if (!supportsScrollTimeline) {
              if (node.hasAttribute("data-animate-css")) {
                this.observeCSS(node);
              }
              node.querySelectorAll?.("[data-animate-css]").forEach((el) => {
                this.observeCSS(el);
              });
            }
          }
        });
      });
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}
let instance = null;
function initScrollAnimations(options) {
  if (instance) return instance;
  instance = new ScrollAnimationObserver(options);
  instance.init();
  return instance;
}
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initScrollAnimations());
  } else {
    initScrollAnimations();
  }
}

function Accordion({
  items,
  allowMultiple = false,
  className = "",
  headerSlot,
  headerClassName = "",
  showIndicator = true,
  indicatorIcons
}) {
  const [expandedItems, setExpandedItems] = useState(/* @__PURE__ */ new Set());
  const panelRefs = useRef(/* @__PURE__ */ new Map());
  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };
  useEffect(() => {
    expandedItems.forEach((itemId) => {
      const panel = panelRefs.current.get(itemId);
      const item = items.find((i, idx) => (i.slug || `item-${idx}`) === itemId);
      if (panel && item?.contentSlotId && panel.children.length === 0) {
        const hiddenContent = document.getElementById(item.contentSlotId);
        if (hiddenContent) {
          const clone = hiddenContent.cloneNode(true);
          clone.style.display = "";
          clone.removeAttribute("id");
          panel.appendChild(clone);
        }
      }
    });
  }, [expandedItems, items]);
  return /* @__PURE__ */ jsx("div", { className: `space-y-2 ${className}`, children: items.map((item, index) => {
    const itemId = item.slug || `item-${index}`;
    return /* @__PURE__ */ jsx(
      "div",
      {
        ...animationProps("fade-in-up", { once: true }),
        children: /* @__PURE__ */ jsx(
          AccordionItem,
          {
            id: itemId,
            title: item.title,
            description: item.description,
            isExpanded: expandedItems.has(itemId),
            onToggle: () => toggleItem(itemId),
            headerSlot: headerSlot ? headerSlot({ item, id: itemId, expanded: expandedItems.has(itemId) }) : void 0,
            headerClassName,
            showIndicator,
            indicatorIcons,
            children: /* @__PURE__ */ jsx(
              "div",
              {
                ref: (el) => {
                  if (el) panelRefs.current.set(itemId, el);
                }
              }
            )
          }
        )
      },
      itemId
    );
  }) });
}

function mapButtonSizeToIconSize(size) {
  return size ?? "md";
}
function renderButtonIcon(icon, size) {
  if (!icon) return null;
  const iconSize = mapButtonSizeToIconSize(size);
  if (isValidElement(icon)) return icon;
  if (typeof icon === "string") return /* @__PURE__ */ jsx(Icon, { icon, size: iconSize });
  return null;
}
const BUTTON_SIZE_CLASSES = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg"
};
function getButtonBaseClasses(size) {
  const normalizedSize = size ?? "md";
  return [
    "inline-flex items-center justify-center gap-2",
    "rounded-full font-semibold",
    "h4",
    "shadow-accent/30",
    "button-style",
    "button-transition",
    "button-hover-transition",
    "focus-visible:outline-none",
    "w-full lg:w-auto",
    "disabled:opacity-60 disabled:cursor-not-allowed",
    BUTTON_SIZE_CLASSES[normalizedSize]
  ].filter(Boolean).join(" ");
}

function PrimaryButton$1({
  leftIcon,
  rightIcon,
  className = "",
  animated = true,
  buttonWrapperClasses,
  fullWidth = false,
  ...props
}) {
  const baseShell = getButtonBaseClasses(props.size);
  const variantClasses = [
    baseShell,
    "primary-button-transition border-2 border-primary primary-gradient gradient-disappear-on-hover text-bg hover:text-heading"
  ].filter(Boolean).join(" ");
  const buttonContent = /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `${variantClasses} ${className}`.trim(),
      leftIcon: renderButtonIcon(leftIcon, props.size),
      rightIcon: renderButtonIcon(rightIcon, props.size)
    }
  );
  const wrapperClasses = [
    "inline-flex",
    fullWidth ? "w-full" : "w-auto",
    buttonWrapperClasses
  ].filter(Boolean).join(" ");
  if (!animated) {
    return /* @__PURE__ */ jsx("span", { className: wrapperClasses, children: buttonContent });
  }
  return /* @__PURE__ */ jsx(
    "span",
    {
      ...animationProps("zoom-in", { once: true }),
      className: wrapperClasses,
      children: buttonContent
    }
  );
}

const BORDER_RADIUS_CLASS = "rounded-full";
function SecondaryButton({
  leftIcon,
  rightIcon,
  className = "",
  buttonWrapperClasses,
  fullWidth = false,
  ...props
}) {
  const innerButtonClasses = [
    getButtonBaseClasses(props.size),
    "bg-transparent text-heading shadow-none",
    BORDER_RADIUS_CLASS,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: [
        fullWidth ? "inline-flex w-full" : "inline-flex w-full lg:w-auto",
        buttonWrapperClasses
      ].filter(Boolean).join(" "),
      ...animationProps("fade-in-up", { once: true }),
      children: /* @__PURE__ */ jsx(
        AnimatedBorder,
        {
          variant: "progress-b-f",
          triggers: "visible",
          color: "var(--color-accent)",
          borderWidth: 2,
          borderRadius: BORDER_RADIUS_CLASS,
          duration: 800,
          className: "justify-center items-center w-full transition-all duration-700 ease-out hover:-translate-y-1",
          innerClassName: "p-0 shadow-none border-transparent justify-center items-center bg-transparent w-full",
          children: /* @__PURE__ */ jsx(
            ButtonBase,
            {
              ...props,
              className: innerButtonClasses,
              leftIcon: renderButtonIcon(leftIcon, props.size),
              rightIcon: renderButtonIcon(rightIcon, props.size)
            }
          )
        }
      )
    }
  );
}

function GhostButton({
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) {
  const variantClasses = "bg-bg/25 text-bg border-0 hover:bg-primary focus:ring-primary";
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `${variantClasses} ${className}`,
      leftIcon: renderButtonIcon(leftIcon, props.size),
      rightIcon: renderButtonIcon(rightIcon, props.size)
    }
  );
}

function LinkButton({
  leftIcon,
  rightIcon,
  className = "p-0",
  size = "md",
  children,
  ...props
}) {
  const sizeClass = size === "sm" ? "link-sm" : size === "lg" ? "link-lg" : "link-md";
  const baseClasses = `link-base ${sizeClass} ${className}`.trim();
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: baseClasses,
      leftIcon: renderButtonIcon(leftIcon, size),
      rightIcon: renderButtonIcon(rightIcon, size),
      size,
      unstyled: true,
      children
    }
  );
}

function PrimaryButton({
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) {
  const variantClasses = "bg-accent text-bg hover:bg-accent-700 focus:ring-accent";
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `${variantClasses} ${className}`,
      leftIcon: renderButtonIcon(leftIcon, props.size),
      rightIcon: renderButtonIcon(rightIcon, props.size)
    }
  );
}

function ArrowLinkButton({
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `group flex items-center justify-between gap-4 text-left cursor-pointer ${className}`.trim(),
      unstyled: true,
      children: /* @__PURE__ */ jsx("span", { className: "flex justify-center items-center rounded-full h-10 w-10 bg-accent", children: /* @__PURE__ */ jsx(Icon, { icon: "lu:arrow-right", size: "lg", className: "text-bg p-0" }) })
    }
  );
}

function MenuItemButton({
  leftIcon,
  rightIcon,
  className = "p-0",
  size = "lg",
  children,
  ...props
}) {
  const sizeClass = size === "sm" ? "link-sm" : size === "lg" ? "link-lg" : "link-md";
  const baseClasses = `link-base ${sizeClass} ${className}`.trim();
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `${baseClasses} font-normal text-4xl transition-all`,
      leftIcon: renderButtonIcon(leftIcon, size),
      rightIcon: renderButtonIcon(rightIcon, size),
      size,
      unstyled: true,
      children
    }
  );
}

const logoImg = new Proxy({"src":"/assets/GWS-animated-Ba3njFjP.png","width":1454,"height":1426,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/GWS-animated.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/GWS-animated.png");
							return target[name];
						}
					});

function LogoLinkButton({
  className = "",
  size = "md",
  children,
  ...props
}) {
  const sizeClass = size === "sm" ? "link-sm" : size === "lg" ? "link-lg" : "link-md";
  const baseClasses = `logo-link-base ${sizeClass} ${className}`.trim();
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: baseClasses,
      leftIcon: /* @__PURE__ */ jsx("span", { className: "logo-link-icon", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: logoImg.src,
          alt: "",
          "aria-hidden": "true",
          className: "w-5 h-5"
        }
      ) }),
      size,
      unstyled: true,
      children: /* @__PURE__ */ jsx("span", { className: "logo-link-text", children })
    }
  );
}

const sizeClasses$1 = {
  sm: { padding: "px-3 py-2", text: "text-xs", gap: "gap-1.5" },
  md: { padding: "px-4 py-2.5", text: "text-sm", gap: "gap-2" },
  lg: { padding: "px-5 py-3", text: "text-base", gap: "gap-2.5" }
};
function FilterTabButton({
  leftIcon,
  active = false,
  label,
  count,
  showCount = false,
  size = "sm",
  className = "",
  ...props
}) {
  const currentSize = sizeClasses$1[size];
  const innerClasses = [
    currentSize.padding,
    "rounded-full font-medium main-duration transition-all",
    "flex items-center",
    currentSize.gap,
    currentSize.text,
    active ? "text-accent" : "text-heading hover:text-accent",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(
    AnimatedBorder,
    {
      variant: "progress-b-f",
      triggers: "controlled",
      active,
      duration: 400,
      borderRadius: "rounded-full",
      borderWidth: 2,
      color: "var(--color-accent)",
      innerClassName: "card-bg border-off-hover",
      children: /* @__PURE__ */ jsxs(
        ButtonBase,
        {
          ...props,
          unstyled: true,
          className: innerClasses,
          leftIcon: renderButtonIcon(leftIcon, size),
          children: [
            /* @__PURE__ */ jsx("span", { children: label }),
            showCount && count !== void 0 && /* @__PURE__ */ jsxs("span", { className: `${currentSize.text} opacity-60`, children: [
              "(",
              count,
              ")"
            ] })
          ]
        }
      )
    }
  );
}

const sizeClasses = {
  sm: { padding: "px-3 py-2", text: "text-sm md:text-xs", gap: "gap-1.5", iconSize: "md" },
  md: { padding: "px-4 py-2.5", text: "text-sm md:text-xs", gap: "gap-2", iconSize: "lg" },
  lg: { padding: "px-5 py-3", text: "text-base md:text-sm", gap: "gap-2.5", iconSize: "xl" }
};
function FilterIconButton({
  active = false,
  label,
  icon,
  count,
  showCount = false,
  size = "md",
  className = "",
  ...props
}) {
  const currentSize = sizeClasses[size];
  const buttonClasses = [
    currentSize.padding,
    "font-medium main-duration transition-all group",
    "text-text max-w-[100px] md:max-w-[110px]",
    className
  ].filter(Boolean).join(" ");
  const iconWrapperClasses = active ? "filter-icon-wrapper active" : "filter-icon-wrapper";
  return /* @__PURE__ */ jsxs(
    ButtonBase,
    {
      ...props,
      unstyled: true,
      className: buttonClasses,
      children: [
        icon ? /* @__PURE__ */ jsx(
          IconListItem,
          {
            data: { icon, title: label },
            layout: "vertical",
            alignment: "center",
            className: `${currentSize.gap} items-center`,
            iconClassName: iconWrapperClasses,
            iconSize: currentSize.iconSize,
            titleClassName: `${currentSize.text} font-medium text-center leading-tight`,
            titleTag: "span",
            showDescription: false
          }
        ) : /* @__PURE__ */ jsx("span", { className: currentSize.text, children: label }),
        showCount && count !== void 0 && /* @__PURE__ */ jsxs("span", { className: `${currentSize.text} opacity-60 block text-center`, children: [
          "(",
          count,
          ")"
        ] })
      ]
    }
  );
}

const ButtonBase = ({
  href,
  className = "",
  buttonWrapperClasses: _buttonWrapperClasses,
  fullWidth: _fullWidth,
  leftIcon,
  rightIcon,
  size = "lg",
  children,
  unstyled = false,
  animated: _animated,
  ...props
}) => {
  const normalizedSize = size ?? "lg";
  const sizeClass = normalizedSize === "sm" ? "btn-sm" : normalizedSize === "lg" ? "btn-lg" : "btn-md";
  const baseClasses = unstyled ? className.trim() : `btn-base ${sizeClass} ${className}`.trim();
  if (href) {
    const anchorProps = props;
    return /* @__PURE__ */ jsxs("a", { href, className: baseClasses, ...anchorProps, children: [
      leftIcon,
      children,
      rightIcon
    ] });
  }
  const buttonProps = props;
  return /* @__PURE__ */ jsxs("button", { type: buttonProps.type ?? "button", className: baseClasses, ...buttonProps, children: [
    leftIcon,
    children,
    rightIcon
  ] });
};
const VARIANT_MAP = {
  primary: PrimaryButton$1,
  secondary: SecondaryButton,
  ghost: GhostButton,
  link: LinkButton,
  menuItemButton: MenuItemButton,
  tertiary: PrimaryButton,
  arrowLink: ArrowLinkButton,
  logoLink: LogoLinkButton,
  filterTab: FilterTabButton,
  filterIcon: FilterIconButton
};
function Button({
  variant = "primary",
  ...props
}) {
  const VariantComponent = VARIANT_MAP[variant] || PrimaryButton$1;
  return /* @__PURE__ */ jsx(VariantComponent, { ...props });
}

function Heading({
  tagName: Tag = "h2",
  className = "",
  before,
  text,
  after,
  beforeClass = "",
  textClass = "",
  afterClass = "",
  beforeId,
  textId,
  afterId,
  beforeProps,
  textProps,
  afterProps,
  segmented,
  children,
  ...props
}) {
  const tagLevel = typeof Tag === "string" ? Tag.toLowerCase() : "h2";
  const isHeadingTag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tagLevel);
  const hasManualHeadingClass = /\bh[1-6]\b/.test(className);
  const finalClassName = hasManualHeadingClass || !isHeadingTag ? className : `${tagLevel} ${className}`.trim();
  const isPropBased = before !== void 0 || text !== void 0 || after !== void 0;
  const hasSegmented = segmented !== void 0 && segmented !== null;
  const mergeProps = (idFromProp, clsFromProp, bag) => {
    const bagSafe = bag ?? {};
    const mergedClass = [clsFromProp, bagSafe.className].filter(Boolean).join(" ");
    return {
      id: idFromProp ?? bagSafe.id,
      ...bagSafe,
      className: mergedClass || void 0
    };
  };
  const TagComponent = Tag;
  return /* @__PURE__ */ jsx(TagComponent, { className: `${finalClassName} capitalize`, ...props, children: hasSegmented ? /* @__PURE__ */ jsxs(Fragment, { children: [
    segmented?.before !== void 0 && /* @__PURE__ */ jsx("span", { ...mergeProps(beforeId, beforeClass, beforeProps), children: `${segmented.before} ` }),
    segmented?.text !== void 0 && /* @__PURE__ */ jsx("span", { ...mergeProps(textId, textClass, textProps), children: `${segmented.text} ` }),
    segmented?.after !== void 0 && /* @__PURE__ */ jsx("span", { ...mergeProps(afterId, afterClass, afterProps), children: segmented.after })
  ] }) : isPropBased ? /* @__PURE__ */ jsxs(Fragment, { children: [
    before !== void 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { ...mergeProps(beforeId, beforeClass, beforeProps), children: before }),
      " "
    ] }),
    text !== void 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { ...mergeProps(textId, textClass, textProps), children: text }),
      " "
    ] }),
    after !== void 0 && /* @__PURE__ */ jsx("span", { ...mergeProps(afterId, afterClass, afterProps), children: after })
  ] }) : children });
}

function BorderTitle({
  children,
  className = "",
  duration = 1200,
  hoverSweep = true,
  pillClassName = "text-sm px-5 py-2.5 tracking-wider",
  visibleRootMargin
}) {
  return /* @__PURE__ */ jsx("div", { className: "inline-block mb-3", children: /* @__PURE__ */ jsxs("div", { className: "relative inline-block", children: [
    /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "progress-b-f",
        triggers: "visible",
        duration,
        borderRadius: "rounded-full",
        borderWidth: 2,
        color: "var(--color-primary)",
        className: "inline-block",
        innerClassName: `bg-transparent border-transparent ${pillClassName}`,
        visibleRootMargin,
        children: /* @__PURE__ */ jsx(
          Heading,
          {
            tagName: "span",
            className: `uppercase tracking-wider font-semibold text-heading ${className}`,
            children: /* @__PURE__ */ jsx(
              "span",
              {
                "data-animate": "color-text-fade",
                "data-animate-once": "true",
                className: "color-text-fade",
                style: { "--animation-duration": `${duration}ms` },
                children
              }
            )
          }
        )
      }
    ),
    hoverSweep && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "progress-infinite",
        triggers: "hover",
        duration: 1200,
        borderRadius: "rounded-full",
        borderWidth: 2,
        color: "var(--color-accent)",
        className: "w-full h-full",
        innerClassName: "bg-transparent border-transparent px-0 py-0 pointer-events-none",
        children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Decorative border sweep" })
      }
    ) })
  ] }) });
}

const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const {
    title,
    titleClassName = "",
    titlePillClassName,
    titleVisibleRootMargin,
    heading,
    headingBefore,
    headingEmphasis,
    headingAfter,
    headingTag = "h2",
    headingClassName = "h2 mb-6",
    emphasisClassName = "emphasized-text",
    description,
    descriptionClassName = "large-text",
    className = "text-section",
    headerProps = {},
    animateHeading = false,
    animateDescription = false,
    animateOnce = true
  } = Astro2.props;
  const isHeadingContent = (value) => {
    if (!value || typeof value !== "object" || Array.isArray(value)) return false;
    const record = value;
    const hasKeys = "before" in record || "text" in record || "after" in record;
    const looksLikeReactElement = "props" in record && "type" in record;
    return hasKeys && !looksLikeReactElement;
  };
  const headingValue = heading;
  const headingContent = isHeadingContent(headingValue) ? headingValue : void 0;
  const hasSegmentedHeading = headingBefore !== void 0 || headingEmphasis !== void 0 || headingAfter !== void 0;
  const hasContentHeading = headingContent !== void 0;
  const hasPlainHeading = !hasContentHeading && headingValue !== void 0 && headingValue !== null;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> ${title && renderTemplate`${renderComponent($$result, "BorderTitle", BorderTitle, { "client:visible": true, "className": titleClassName, "pillClassName": titlePillClassName, "visibleRootMargin": titleVisibleRootMargin, "client:component-hydration": "visible", "client:component-path": "@/components/BorderTitle", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${title}` })}`} ${hasContentHeading ? renderTemplate`<div${addAttribute(animateHeading ? "fade-in" : void 0, "data-animate")}${addAttribute(animateHeading ? String(animateOnce) : void 0, "data-animate-once")}> ${renderComponent($$result, "Heading", Heading, { "tagName": headingTag, "className": headingClassName, "segmented": headingContent, "textClass": emphasisClassName, ...headerProps })} </div>` : hasSegmentedHeading ? renderTemplate`<div${addAttribute(animateHeading ? "fade-in" : void 0, "data-animate")}${addAttribute(animateHeading ? String(animateOnce) : void 0, "data-animate-once")}> ${renderComponent($$result, "Heading", Heading, { "tagName": headingTag, "className": headingClassName, "before": headingBefore, "text": headingEmphasis, "after": headingAfter, "textClass": emphasisClassName, ...headerProps })} </div>` : hasPlainHeading && renderTemplate`<div${addAttribute(animateHeading ? "fade-in" : void 0, "data-animate")}${addAttribute(animateHeading ? String(animateOnce) : void 0, "data-animate-once")}> ${renderComponent($$result, "Heading", Heading, { "tagName": headingTag, "className": headingClassName, ...headerProps }, { "default": ($$result2) => renderTemplate`${headingValue}` })} </div>`} ${description && renderTemplate`<p${addAttribute(descriptionClassName, "class")}${addAttribute(animateDescription ? "fade-in" : void 0, "data-animate")}${addAttribute(animateDescription ? String(animateOnce) : void 0, "data-animate-once")}> ${description} </p>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/SectionHeader.astro", void 0);

function shouldShowCollectionCTA(collectionUrl, itemCount) {
  return !!(collectionUrl && itemCount && itemCount > 0);
}

function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (value === null || value === void 0) {
    return [];
  }
  return [value];
}

const execFileAsync = promisify(execFile);
const PROJECT_ROOT = process.cwd();
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const THUMB_DIR = path.join(PUBLIC_DIR, "__video-thumbnails");
const THUMB_ROUTE = "/__video-thumbnails";
async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}
function resolveVideoPath(src) {
  if (src.startsWith("/")) {
    return path.join(PUBLIC_DIR, src.slice(1));
  }
  if (path.isAbsolute(src)) {
    return src;
  }
  return path.join(PROJECT_ROOT, src);
}
function getBaseName(videoPath) {
  return path.basename(videoPath, path.extname(videoPath));
}
async function generateVideoPoster(videoSrc, options = {}) {
  const { timecodeSeconds = 0, width = 1600 } = options;
  const videoPath = resolveVideoPath(videoSrc);
  if (!fs.existsSync(videoPath)) {
    throw new Error(`[videoThumbnails] Video not found: ${videoPath}`);
  }
  await ensureDir(THUMB_DIR);
  const baseName = getBaseName(videoPath);
  const rawFrame = path.join(THUMB_DIR, `${baseName}-raw.jpg`);
  const posterFile = path.join(THUMB_DIR, `${baseName}-poster.webp`);
  const placeholderFile = path.join(THUMB_DIR, `${baseName}-placeholder.webp`);
  if (!fs.existsSync(rawFrame)) {
    const args = ["-y"];
    if (timecodeSeconds > 0) {
      args.push("-ss", timecodeSeconds.toString());
    }
    args.push("-i", videoPath, "-frames:v", "1", "-q:v", "2", rawFrame);
    await execFileAsync(ffmpegInstaller.path, args);
  }
  const sharp = (await import('sharp')).default;
  const metadata = await sharp(rawFrame).metadata();
  if (!metadata.width || !metadata.height) {
    throw new Error(`[videoThumbnails] Could not read frame metadata`);
  }
  const aspectRatio = metadata.height / metadata.width;
  const posterHeight = Math.round(width * aspectRatio);
  if (!fs.existsSync(posterFile)) {
    await sharp(rawFrame).resize(width, posterHeight, { fit: "cover" }).webp({ quality: 80 }).toFile(posterFile);
  }
  if (!fs.existsSync(placeholderFile)) {
    await sharp(rawFrame).resize(32).webp({ quality: 30 }).blur().toFile(placeholderFile);
  }
  return {
    src: `${THUMB_ROUTE}/${baseName}-poster.webp`,
    placeholderSrc: `${THUMB_ROUTE}/${baseName}-placeholder.webp`,
    width,
    height: posterHeight
  };
}

function ClientImage({
  src,
  srcSet,
  sizes,
  alt = "",
  width,
  height,
  sources = [],
  className = "",
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto",
  draggable = false,
  style
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className,
        style: {
          ...style,
          backgroundColor: "transparent"
        }
      }
    );
  }
  if (sources.length > 0) {
    return /* @__PURE__ */ jsxs("picture", { children: [
      sources.map((source, idx) => /* @__PURE__ */ jsx(
        "source",
        {
          srcSet: source.srcSet,
          sizes: source.sizes ?? sizes,
          type: source.type
        },
        idx
      )),
      /* @__PURE__ */ jsx(
        "img",
        {
          src,
          srcSet,
          sizes,
          alt,
          width,
          height,
          loading,
          decoding,
          fetchPriority,
          draggable,
          className,
          style
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx(
    "img",
    {
      src,
      srcSet,
      sizes,
      alt,
      width,
      height,
      loading,
      decoding,
      fetchPriority,
      draggable,
      className,
      style
    }
  );
}

const Video = forwardRef(
  ({
    src,
    poster,
    className = "",
    autoPlay = true,
    muted = true,
    loop = true,
    controls = false,
    playsInline = true,
    lazy = true,
    sourceType,
    children,
    clientLoadPlaceholder = false,
    placeholderSrc,
    clientPosterSrc,
    clientPlaceholderSrc,
    wrapperClass = "",
    ...rest
  }, ref) => {
    const internalRef = useRef(null);
    const [resolvedPoster, setResolvedPoster] = useState(
      poster
    );
    const [resolvedPlaceholderSrc, setResolvedPlaceholderSrc] = useState(placeholderSrc);
    const assignRef = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };
    useEffect(() => {
      const video = internalRef.current;
      if (!video || !lazy) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const dataSrc = video.dataset.videoSrc;
              if (dataSrc && video.src !== dataSrc) {
                video.src = dataSrc;
                video.load();
                if (autoPlay) {
                  video.play().catch(() => {
                  });
                }
              }
              observer.disconnect();
            }
          });
        },
        { threshold: 0.35, rootMargin: "0px 0px 160px 0px" }
      );
      observer.observe(video);
      return () => observer.disconnect();
    }, [lazy, autoPlay]);
    useEffect(() => {
      if (clientLoadPlaceholder && clientPosterSrc) {
        setResolvedPoster(clientPosterSrc);
        return;
      }
      setResolvedPoster(poster);
    }, [clientLoadPlaceholder, clientPosterSrc, poster]);
    useEffect(() => {
      if (clientLoadPlaceholder && clientPlaceholderSrc) {
        setResolvedPlaceholderSrc(clientPlaceholderSrc);
        return;
      }
      setResolvedPlaceholderSrc(placeholderSrc);
    }, [clientLoadPlaceholder, clientPlaceholderSrc, placeholderSrc]);
    const wrapperClasses = `relative grid w-full h-full ${wrapperClass ?? ""}`.trim();
    const mediaClasses = `w-full h-full object-cover ${className ?? ""}`.trim();
    const stackClasses = "col-start-1 col-end-2 row-start-1 row-end-2";
    return /* @__PURE__ */ jsxs("div", { className: wrapperClasses, children: [
      resolvedPlaceholderSrc && /* @__PURE__ */ jsx(
        ClientImage,
        {
          src: resolvedPlaceholderSrc,
          alt: "Video placeholder",
          className: `${mediaClasses} ${stackClasses}`.trim(),
          loading: "eager",
          decoding: "async",
          style: { zIndex: 0 }
        }
      ),
      /* @__PURE__ */ jsxs(
        "video",
        {
          ref: assignRef,
          className: `${mediaClasses} ${stackClasses}`.trim(),
          poster: resolvedPoster,
          autoPlay: !lazy && autoPlay,
          muted,
          loop,
          controls,
          playsInline,
          preload: lazy ? "metadata" : "auto",
          "data-video-src": lazy ? src : void 0,
          src: !lazy ? src : void 0,
          style: { zIndex: 1 },
          ...rest,
          children: [
            src && /* @__PURE__ */ jsx(
              "source",
              {
                src: !lazy ? src : void 0,
                "data-video-src": lazy ? src : void 0,
                type: sourceType
              }
            ),
            children ?? "Your browser does not support the video tag."
          ]
        }
      )
    ] });
  }
);
Video.displayName = "Video";

function EnhancedAccordionItem({
  icon,
  title,
  description,
  isActive,
  progress = 0,
  onToggle,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `group relative ${className}`.trim(),
      "data-accordion-item": true,
      "data-active": isActive ? "true" : "false",
      children: /* @__PURE__ */ jsxs(
        AnimatedBorder,
        {
          variant: "progress",
          triggers: "controlled",
          active: isActive,
          controller: progress,
          duration: 100,
          borderRadius: "rounded-3xl",
          borderWidth: 2,
          className: "transition-all duration-200",
          innerClassName: "card-bg",
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "w-full text-left flex items-center justify-between p-5 hover:bg-card/50 transition-colors duration-300 cursor-pointer relative z-20",
                onClick: onToggle,
                onMouseDown: (event) => event.preventDefault(),
                role: "button",
                tabIndex: 0,
                "aria-expanded": isActive,
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onToggle();
                  }
                },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    icon && /* @__PURE__ */ jsx("span", { className: "icon-large card-icon-color shrink-0", children: icon.includes(":") ? /* @__PURE__ */ jsx(Icon, { icon, size: "lg", className: "w-6 h-6" }) : /* @__PURE__ */ jsx("span", { className: "text-2xl leading-none", children: icon }) }),
                    /* @__PURE__ */ jsx("div", { className: "text-left", children: /* @__PURE__ */ jsx("h3", { className: "h4", children: title }) })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      className: `
              w-8 h-8 rounded-full flex items-center justify-center
              transition-all duration-[600ms] text-xl font-semibold
              ${isActive ? "bg-primary text-bg" : "bg-primary/15 text-accent group-hover:bg-primary/25"}
            `,
                      "aria-label": isActive ? "Collapse" : "Expand",
                      onClick: (e) => {
                        e.stopPropagation();
                        onToggle();
                      },
                      children: /* @__PURE__ */ jsx("span", { children: isActive ? "−" : "+" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `overflow-hidden transition-all duration-500 ease-in-out relative z-20 ${isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`,
                children: /* @__PURE__ */ jsxs("div", { className: "px-6 pb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-primary/15 mb-4" }),
                  description && /* @__PURE__ */ jsx("p", { className: "text-text/80 leading-relaxed mb-4", children: description }),
                  children
                ] })
              }
            )
          ]
        }
      )
    }
  );
}

const VideoPlayer = forwardRef(function VideoPlayer2({
  desktop = false,
  className = "",
  wrapperClassName = "",
  overlay,
  lazy = true,
  autoPlay = true,
  muted = true,
  playsInline = true,
  controls,
  loop = false,
  src,
  poster,
  sourceType,
  children,
  ...rest
}, ref) {
  const baseClasses = desktop ? "w-full h-[24rem] object-cover rounded-2xl" : "w-full aspect-video object-cover rounded-2xl";
  const resolvedControls = controls ?? desktop;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative rounded-2xl overflow-hidden bg-card/40 ${wrapperClassName}`.trim(),
      children: [
        /* @__PURE__ */ jsx(
          Video,
          {
            ref,
            className: `${baseClasses} ${className}`.trim(),
            src: src ?? "",
            poster,
            autoPlay,
            muted,
            playsInline,
            controls: resolvedControls,
            loop,
            lazy,
            sourceType,
            ...rest,
            children: children ?? "Your browser does not support the video tag."
          }
        ),
        overlay
      ]
    }
  );
});

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SITE_DOMAIN": "https://griffinswebservices.com", "SITE": "https://https://griffinswebservices.com", "SSR": true};
const sanitizeId = (value) => value.replace(/[:]/g, "");
const getVideoType = (src) => {
  if (!src) return void 0;
  if (src.endsWith(".mov")) return "video/quicktime";
  if (src.endsWith(".webm")) return "video/webm";
  return "video/mp4";
};
function VideoAccordion({
  items,
  className = "",
  autoAdvanceDelay = 3e3
}) {
  const showDebug = typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__, { NODE: process.env.NODE, _: process.env._, NODE_ENV: process.env.NODE_ENV })?.DEV || process.env.NODE_ENV !== "production";
  const safeItems = Array.isArray(items) ? items.filter(
    (entry) => !!entry && typeof entry === "object" && !!entry.title
  ) : [];
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const rawId = useId();
  const instanceId = useMemo(() => sanitizeId(rawId), [rawId]);
  const wrapRef = useRef(null);
  const inView = useVisibility(wrapRef, {
    threshold: 0.3,
    rootMargin: "0px 0px -30% 0px"
  });
  const autoplayTime = useCallback(() => {
    const desktop = desktopVideoRef.current;
    const mobile = mobileVideoRef.current;
    let video = null;
    if (desktop && !desktop.paused && desktop.currentTime > 0) video = desktop;
    else if (mobile && !mobile.paused && mobile.currentTime > 0) video = mobile;
    else if (desktop && desktop.offsetParent !== null) video = desktop;
    else if (mobile && mobile.offsetParent !== null) video = mobile;
    else video = desktop || mobile;
    if (!video || !Number.isFinite(video.duration)) return autoAdvanceDelay;
    const remaining = Math.max(0, (video.duration - video.currentTime) * 1e3);
    return remaining + autoAdvanceDelay;
  }, [autoAdvanceDelay]);
  const {
    engageUser,
    beginGraceWindow,
    isAutoplayPaused,
    isResumeScheduled,
    userEngaged,
    schedule
  } = useEngagementAutoplay({
    totalItems: safeItems.length,
    currentIndex: activeIndex,
    setIndex: (next) => setActiveIndex(next),
    autoplayTime,
    resumeDelay: 5e3,
    containerSelector: `[data-video-accordion="${instanceId}"]`,
    itemSelector: `[data-video-accordion="${instanceId}"] [data-accordion-item]`,
    inView,
    engageOnlyOnActiveItem: true,
    activeItemAttr: "data-active"
  });
  const scheduleRef = useRef(null);
  useEffect(() => {
    scheduleRef.current = schedule;
  }, [schedule]);
  useEffect(() => {
    if (safeItems.length === 0) return;
    if (activeIndex >= safeItems.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, safeItems.length]);
  const handleSelect = useCallback(
    (index) => {
      setActiveIndex(index);
      setProgress(0);
      engageUser();
      scheduleRef.current?.();
    },
    [engageUser]
  );
  const getActiveVideo = useCallback(() => {
    const desktop = desktopVideoRef.current;
    const mobile = mobileVideoRef.current;
    if (desktop && !desktop.paused && desktop.currentTime > 0) return desktop;
    if (mobile && !mobile.paused && mobile.currentTime > 0) return mobile;
    if (desktop && desktop.offsetParent !== null) return desktop;
    if (mobile && mobile.offsetParent !== null) return mobile;
    return desktop || mobile;
  }, []);
  const rafRef = useRef(null);
  const updateProgressSmooth = useCallback(() => {
    const video = getActiveVideo();
    if (!video || !video.duration) {
      rafRef.current = null;
      return;
    }
    const newProgress = video.currentTime / video.duration * 100;
    setProgress(newProgress);
    if (!video.paused && !video.ended) {
      rafRef.current = requestAnimationFrame(updateProgressSmooth);
    } else {
      rafRef.current = null;
    }
  }, [getActiveVideo]);
  const handleTimeUpdate = useCallback(() => {
    const video = getActiveVideo();
    if (!video || !video.duration) return;
    if (rafRef.current === null && !video.paused && !video.ended) {
      rafRef.current = requestAnimationFrame(updateProgressSmooth);
    }
    scheduleRef.current?.();
  }, [getActiveVideo, updateProgressSmooth]);
  const handleLoadedData = useCallback(() => {
    setProgress(0);
    scheduleRef.current?.();
  }, []);
  const handlePlay = useCallback(() => {
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(updateProgressSmooth);
    }
  }, [updateProgressSmooth]);
  const handlePause = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);
  const handleEnded = useCallback(() => {
    setProgress(100);
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    beginGraceWindow();
  }, [beginGraceWindow]);
  const handleVideoClick = useCallback(() => {
    engageUser();
  }, [engageUser]);
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [activeIndex]);
  if (safeItems.length === 0) {
    return null;
  }
  const activeItem = safeItems[Math.min(activeIndex, safeItems.length - 1)];
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: wrapRef,
      ...animationProps("fade-in", { once: true }),
      className: `relative ${className}`.trim(),
      "data-video-accordion": instanceId,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start gap-12 max-2-primary", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "min-w-0 lg:w-1/2 lg:shrink-0 flex flex-col space-y-4",
            "data-accordion-container": true,
            children: safeItems.map((item, index) => {
              const key = item.key || item.title || `item-${index}`;
              return /* @__PURE__ */ jsx(
                "div",
                {
                  ...animationProps("fade-in-up", { once: true }),
                  children: /* @__PURE__ */ jsxs(
                    EnhancedAccordionItem,
                    {
                      icon: item.icon,
                      title: item.title,
                      description: item.description,
                      isActive: activeIndex === index,
                      progress,
                      onToggle: () => handleSelect(index),
                      children: [
                        activeIndex === index && /* @__PURE__ */ jsx("div", { className: "lg:hidden mt-4", children: /* @__PURE__ */ jsx(
                          VideoPlayer,
                          {
                            ref: (node) => {
                              mobileVideoRef.current = node;
                            },
                            src: item.videoSrc,
                            poster: item.videoPoster,
                            lazy: false,
                            sourceType: getVideoType(item.videoSrc),
                            onTimeUpdate: handleTimeUpdate,
                            onPlay: handlePlay,
                            onPause: handlePause,
                            onEnded: handleEnded,
                            onLoadedData: handleLoadedData,
                            onClick: handleVideoClick,
                            desktop: false
                          },
                          `mobile-${key}`
                        ) }),
                        item.hasPage && item.url && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "link",
                            href: item.url,
                            rightIcon: "lu:arrow-right",
                            children: [
                              "Explore ",
                              item.title
                            ]
                          }
                        ) })
                      ]
                    }
                  )
                },
                key
              );
            })
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "hidden lg:block lg:w-1/2 min-w-0 sticky-section",
            ...animationProps("fade-in", { once: true }),
            children: [
              /* @__PURE__ */ jsx(
                VideoPlayer,
                {
                  ref: desktopVideoRef,
                  src: activeItem?.videoSrc,
                  poster: activeItem?.videoPoster,
                  sourceType: getVideoType(activeItem?.videoSrc),
                  lazy: false,
                  onTimeUpdate: handleTimeUpdate,
                  onPlay: handlePlay,
                  onPause: handlePause,
                  onEnded: handleEnded,
                  onLoadedData: handleLoadedData,
                  onClick: handleVideoClick,
                  desktop: true,
                  wrapperClassName: "shadow-2xl shadow-accent/15 bg-card/40"
                },
                `desktop-${activeItem?.key ?? activeIndex}`
              ),
              showDebug && /* @__PURE__ */ jsxs("div", { className: "mt-4 text-xs text-white/80 bg-zinc-900/70 p-3 rounded-xl space-y-1", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  "⏸️ Autoplay Paused: ",
                  isAutoplayPaused ? "✅" : "❌"
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  "👤 Engaged: ",
                  userEngaged ? "✅" : "❌"
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  "⏲️ Resume Scheduled: ",
                  isResumeScheduled ? "✅" : "❌"
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  "🎪 Active Index: ",
                  activeIndex
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  "📊 Progress: ",
                  Math.round(progress),
                  "%"
                ] })
              ] })
            ]
          }
        )
      ] })
    }
  );
}

const fallbackVideo = "/assets/Black-Microwave-Earrape-C7I0pu6M.mp4";

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$VideoAccordionVariant = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VideoAccordionVariant;
  const {
    items = [],
    title,
    heading,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    autoAdvanceDelay = 3e3,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const solutionEntries = safeItems.filter(
    (item) => item?.parent === "website-solutions"
  );
  const contentItems = solutionEntries.length > 0 ? solutionEntries : safeItems;
  const sectionTitle = title ?? collectionTitle;
  const showHeader = Boolean(sectionTitle || heading || description);
  async function resolveVideoPoster(src, slug) {
    if (!src || src.startsWith("http")) {
      return null;
    }
    try {
      return await generateVideoPoster(src);
    } catch (error) {
      console.warn(`[VideoAccordionVariant] Failed to generate poster for ${slug ?? src}`, error);
      return null;
    }
  }
  const accordionItems = await Promise.all(
    contentItems.map(async (item, index) => {
      const slug = item?.slug ?? `solution-${index}`;
      const hasPage = item?.hasPage !== false && Boolean(item?.url);
      const videoSrc = item?.videoSrc ?? fallbackVideo;
      const hasManualPoster = typeof item?.videoPoster === "string";
      const poster = hasManualPoster ? {
        src: item.videoPoster,
        placeholderSrc: item.videoPlaceholder,
        width: item.posterWidth,
        height: item.posterHeight
      } : await resolveVideoPoster(videoSrc, slug);
      return {
        key: slug,
        icon: item?.icon,
        title: item?.title,
        description: item?.description ?? item?.summary ?? item?.excerpt,
        slug,
        contentSlotId: `${id}-slot-${index}`,
        videoSrc,
        videoPoster: poster?.src,
        videoPlaceholder: poster?.placeholderSrc,
        posterWidth: poster?.width,
        posterHeight: poster?.height,
        hasPage,
        url: hasPage ? item?.url : void 0
      };
    })
  );
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section relative ${className}`.trim(), "class")}> <div class="inner-section"> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": sectionTitle, "heading": heading, "description": description, "className": "text-center max-w-5xl mx-auto", "titleClassName": "tracking-[0.25em]", "descriptionClassName": "large-text text-text/80" })}`} ${accordionItems.length > 0 && renderTemplate`${renderComponent($$result, "ContentBridge", $$ContentBridge, { "items": contentItems, "bridgeId": id }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "VideoAccordion", VideoAccordion, { "items": accordionItems, "autoAdvanceDelay": autoAdvanceDelay, "className": showHeader ? "mt-12" : "", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/VideoAccordion", "client:component-export": "default" })} ` })}`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, contentItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": async ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/VideoAccordionVariant.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/VideoAccordionVariant.astro";
const $$url = undefined;

const __vite_glob_0_29 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VideoAccordionVariant,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SectionHeader as $, Accordion as A, Button as B, ClientImage as C, Heading as H, Video as V, __vite_glob_0_29 as _, animationProps as a, shouldShowCollectionCTA as b, createIntersectionObserver as c, $$ContentBridge as d, generateVideoPoster as g, logoImg as l, staggeredAnimationProps as s, toArray as t };
