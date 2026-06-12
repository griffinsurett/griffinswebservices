// src/components/Button/variants/UnderlineButton.tsx
import { ButtonBase, type ButtonProps } from '../Button';

export default function UnderlineButton({
  className = '',
  size = 'md',
  children,
  rightIcon,
  leftIcon,
  ...props
}: ButtonProps) {
  return (
    <ButtonBase
      {...props}
      size={size}
      className={[
        'group inline-flex items-center justify-between gap-8',
        'text-[11px] font-medium tracking-[0.18em] uppercase text-text',
        'border-b border-text pb-[6px]',
        'hover:text-primary hover:border-primary',
        'transition-colors duration-500',
        'p-0 rounded-none focus:ring-0 focus:ring-offset-0',
        className,
      ].join(' ')}
      leftIcon={leftIcon}
      rightIcon={
        rightIcon ?? (
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        )
      }
    >
      {children}
    </ButtonBase>
  );
}
