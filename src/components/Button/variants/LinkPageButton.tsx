import { ButtonBase, type ButtonProps, type ButtonSize } from "../Button";
import { renderButtonIcon } from "../utils";

const SIZE_STYLES: Record<
  ButtonSize,
  {
    shell: string;
    body: string;
    icon: string;
    iconInner: string;
    text: string;
  }
> = {
  sm: {
    shell: "min-h-[3.45rem]",
    body: "inset-y-[0.2rem] left-[1.55rem] right-0 rounded-[1.35rem]",
    icon: "h-[3.58rem] w-[3.58rem]",
    iconInner: "[&_svg]:h-[1.52rem] [&_svg]:w-[1.52rem]",
    text: "pl-[4.15rem] pr-[1.35rem] text-[1rem] tracking-[0.19em]",
  },
  md: {
    shell: "min-h-[3.7rem]",
    body: "inset-y-[0.22rem] left-[1.7rem] right-0 rounded-[1.45rem]",
    icon: "h-[3.8rem] w-[3.8rem]",
    iconInner: "[&_svg]:h-[1.68rem] [&_svg]:w-[1.68rem]",
    text: "pl-[4.4rem] pr-[1.5rem] text-[1.06rem] tracking-[0.21em]",
  },
  lg: {
    shell: "min-h-[4rem]",
    body: "inset-y-[0.24rem] left-[1.85rem] right-0 rounded-[1.55rem]",
    icon: "h-[4rem] w-[4rem]",
    iconInner: "[&_svg]:h-[1.82rem] [&_svg]:w-[1.82rem]",
    text: "pl-[4.7rem] pr-[1.65rem] text-[1.12rem] tracking-[0.22em]",
  },
};

export default function LinkPageButton({
  leftIcon,
  className = "",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const normalizedSize = size ?? "md";
  const styles = SIZE_STYLES[normalizedSize];
  const iconRenderSize = normalizedSize === "sm" ? "md" : normalizedSize;
  const iconNode = renderButtonIcon(leftIcon, iconRenderSize);
  const hasLeadingIcon = Boolean(iconNode);

  const buttonClasses = [
    "group relative inline-flex w-full items-center overflow-visible bg-transparent text-heading no-underline",
    "button-style button-transition main-duration hover:-translate-y-1",
    styles.shell,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ButtonBase {...props} className={buttonClasses} unstyled>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute card-bg ${styles.body}`}
      />
      {hasLeadingIcon && (
        <span
          className={`pointer-events-none absolute left-0 top-1/2 inline-flex -translate-y-1/2 shrink-0 items-center justify-center rounded-full card-icon-color-2 ${styles.icon} ${styles.iconInner}`}
          aria-hidden="true"
        >
          {iconNode}
        </span>
      )}
      <span
        className={`relative z-10 block w-full min-w-0 text-center font-semibold uppercase text-heading ${styles.text}`}
      >
        {children}
      </span>
    </ButtonBase>
  );
}
