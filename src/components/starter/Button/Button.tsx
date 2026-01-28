// src/components/starter/Button/Button.tsx
/**
 * Button Component System
 * 
 * Polymorphic button component that renders as either <button> or <a> based on props.
 * Supports multiple variants (primary, secondary, ghost, link) with consistent API.
 * Uses TypeScript discriminated unions for type safety between button and link modes.
 */

import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { Children } from 'react';
import PrimaryButton from './variants/PrimaryButton';
import SecondaryButton from './variants/SecondaryButton';
import LinkButton from './variants/LinkButton';
import TertiaryButton from './variants/TertiaryButton';
import ArrowLinkButton from './variants/ArrowLinkButton';
import MenuItemButton from './variants/MenuItemButton';
import LogoLinkButton from './variants/LogoLinkButton';
import FilterTabButton from './variants/FilterTabButton';
import FilterIconButton from './variants/FilterIconButton';

/**
 * Extracts text content from React children for aria-label generation
 */
function extractTextContent(node: ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (!node) return '';

  if (Array.isArray(node)) {
    return node.map(extractTextContent).filter(Boolean).join(' ');
  }

  if (typeof node === 'object' && 'props' in node) {
    // Skip SVG and icon elements - they're decorative
    if (node.type === 'svg' || node.type === 'img') return '';
    // Recursively extract from children
    return extractTextContent(node.props?.children);
  }

  return '';
}

/**
 * Generates a destination context from href for accessibility
 * Converts "/about" → "About", "/contact-us" → "Contact us", etc.
 */
function getDestinationContext(href: string): string {
  // External links - extract domain
  if (href.startsWith('http://') || href.startsWith('https://')) {
    try {
      const url = new URL(href);
      return `external link to ${url.hostname}`;
    } catch {
      return 'external link';
    }
  }

  // Email links
  if (href.startsWith('mailto:')) {
    return 'email link';
  }

  // Phone links
  if (href.startsWith('tel:')) {
    return 'phone link';
  }

  // Hash links (same page)
  if (href.startsWith('#')) {
    const section = href.slice(1).replace(/-/g, ' ');
    return section ? `jump to ${section}` : 'page section';
  }

  // Internal links - extract meaningful path
  const path = href.split('?')[0].split('#')[0]; // Remove query/hash
  const segments = path.split('/').filter(Boolean);

  if (segments.length === 0) return 'home';

  // Use last meaningful segment
  const lastSegment = segments[segments.length - 1];
  // Convert kebab-case to readable: "about-us" → "About us"
  const readable = lastSegment
    .replace(/-/g, ' ')
    .replace(/^\w/, c => c.toUpperCase());

  return readable;
}

/**
 * Generates an auto aria-label for links based on content and destination
 */
function generateAriaLabel(children: ReactNode, href: string | undefined): string | undefined {
  // Only generate for links
  if (!href) return undefined;

  const textContent = extractTextContent(children).trim();
  const destination = getDestinationContext(href);

  // If there's meaningful text content, combine with destination
  if (textContent && textContent.length > 0) {
    // Avoid redundancy if text already matches destination closely
    const normalizedText = textContent.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normalizedDest = destination.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (normalizedText === normalizedDest || normalizedDest.includes(normalizedText)) {
      return `${textContent} page`;
    }

    return `${textContent} - ${destination}`;
  }

  // Fallback to just destination if no text content
  return `Navigate to ${destination}`;
}

/**
 * Base props shared by all button variants
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface BaseButtonProps {
  leftIcon?: string | ReactNode;   // Icon before text
  rightIcon?: string | ReactNode;  // Icon after text
  size?: ButtonSize;       // Button size
  children: ReactNode;              // Button text/content
  className?: string;               // Additional CSS classes
  /** Optional classes for wrapper spans used by certain variants */
  buttonWrapperClasses?: string;
  /** Forces the variant wrapper to span full width when supported */
  fullWidth?: boolean;
  /**
   * Internal escape hatch that allows variant components to opt-out of the
   * default btn-base styling when they need full control over the shell.
   */
  unstyled?: boolean;
  /**
   * Allows variants to opt-out of their entrance animations (primary uses this).
   */
  animated?: boolean;
}

/**
 * Button rendered as <button> - href must not be present
 */
type ButtonAsButton = BaseButtonProps & 
  ButtonHTMLAttributes<HTMLButtonElement> & 
  { href?: never };

/**
 * Button rendered as <a> - href is required
 */
type ButtonAsLink = BaseButtonProps & 
  AnchorHTMLAttributes<HTMLAnchorElement> & 
  { href: string };

/**
 * Discriminated union ensures type safety based on presence of href
 */
export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Base component that handles rendering as button or anchor
 * Avoids React hooks so it can be SSR-only when needed.
 * Auto-generates aria-labels for links to ensure accessibility compliance.
 */
export const ButtonBase = ({
  href,
  className = '',
  buttonWrapperClasses: _buttonWrapperClasses,
  fullWidth: _fullWidth,
  leftIcon,
  rightIcon,
  size = 'lg',
  children,
  unstyled = false,
  animated: _animated,
  ...props
}: ButtonProps) => {
  const normalizedSize = size ?? 'lg';
  const sizeClass =
    normalizedSize === 'sm'
      ? 'btn-sm'
      : normalizedSize === 'lg'
      ? 'btn-lg'
      : 'btn-md';
  const baseClasses = unstyled
    ? className.trim()
    : `btn-base ${sizeClass} ${className}`.trim();

  if (href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    // Auto-generate aria-label if not explicitly provided
    const autoAriaLabel = anchorProps['aria-label']
      ? undefined // Don't override explicit aria-label
      : generateAriaLabel(children, href);

    return (
      <a
        href={href}
        className={baseClasses}
        aria-label={anchorProps['aria-label'] || autoAriaLabel}
        {...anchorProps}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonProps.type ?? 'button'} className={baseClasses} {...buttonProps}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

/**
 * Map of variant names to their component implementations
 */
const VARIANT_MAP = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  link: LinkButton,
  menuItemButton: MenuItemButton,
  tertiary: TertiaryButton,
  arrowLink: ArrowLinkButton,
  logoLink: LogoLinkButton,
  filterTab: FilterTabButton,
  filterIcon: FilterIconButton,
};

export type ButtonVariant = keyof typeof VARIANT_MAP;

/**
 * Props for the main Button component including variant selection.
 * Uses Record<string, unknown> to allow variant-specific props to pass through.
 */
export type ButtonComponentProps = {
  variant?: ButtonVariant;
  [key: string]: unknown;
};

/**
 * Main Button component - delegates to variant components
 *
 * @example
 * <Button variant="primary" onClick={handleClick}>Click me</Button>
 * <Button variant="secondary" href="/about">Learn more</Button>
 * <Button variant="filterTab" active={true} label="All" />
 */
export default function Button({
  variant = 'primary',
  ...props
}: ButtonComponentProps) {
  const VariantComponent = VARIANT_MAP[variant] || PrimaryButton;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <VariantComponent {...(props as any)} />;
}
