// src/components/starter/Button/utils.tsx
import { isValidElement, type ReactNode } from 'react';
import Icon from '@/components/starter/Icon';
import type { IconSize } from '@/integrations/icons';
import type { ButtonSize } from './Button';

function mapButtonSizeToIconSize(size?: ButtonSize): IconSize {
  return size ?? 'md';
}

export function renderButtonIcon(
  icon: string | ReactNode | undefined,
  size?: ButtonSize
): ReactNode {
  if (!icon) return null;

  const iconSize = mapButtonSizeToIconSize(size);
  if (isValidElement(icon)) return icon;
  if (typeof icon === 'string') return <Icon icon={icon} size={iconSize} />;
  return null;
}

const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

export function getButtonBaseClasses(size?: ButtonSize): string {
  const normalizedSize = size ?? 'lg';

  return [
    'inline-flex items-center justify-center gap-2',
    'rounded-full font-semibold',
    'button-style',
    'button-transition',
    'button-hover-transition',
    'focus-visible:outline-none',
    'w-full lg:w-auto',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    BUTTON_SIZE_CLASSES[normalizedSize],
  ]
    .filter(Boolean)
    .join(' ');
}
