// src/components/Button/variants/MenuItemButton.tsx
/**
 * Link Button Variant
 * 
 * Styled as an underlined text link rather than a button.
 * Uses link-specific styling classes instead of button classes.
 * Can still render as either <a> or <button> based on href.
 */

import { ButtonBase, type ButtonProps } from '../Button';
import { renderButtonIcon } from '../utils';

export default function MenuItemButton({
  leftIcon,
  rightIcon,
  className = '',
  size = 'lg',
  children,
  ...props
}: ButtonProps) {
  // Map size to link-specific classes (no padding like buttons)
  const sizeClass = size === 'sm' ? 'link-sm' : size === 'lg' ? 'link-lg' : 'link-md';
  const baseClasses = `link-base ${sizeClass} ${className}`.trim();

  return (
    <ButtonBase
      {...props}
      className={`${baseClasses} footer-cta-hover-gradient w-full justify-start rounded-none px-0 py-4 font-normal text-2xl leading-[1.18] text-heading no-underline whitespace-normal text-balance transition-all duration-300 hover:no-underline focus-visible:no-underline data-[active=true]:bg-linear-to-r data-[active=true]:from-primary data-[active=true]:to-primary-700 data-[active=true]:text-bg data-[active-descendant=true]:text-primary lg:text-3xl lg:leading-[1.14]`}
      leftIcon={renderButtonIcon(leftIcon, size)}
      rightIcon={renderButtonIcon(rightIcon, size)}
      size={size}
      unstyled
    >
      {children}
    </ButtonBase>
  );
}
