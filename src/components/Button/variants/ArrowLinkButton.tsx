import { ButtonBase, type ButtonProps } from "../Button";

export default function ArrowLinkButton({
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonBase
      {...props}
      className={`group flex items-center justify-between gap-4 text-left cursor-pointer ${className}`.trim()}
      unstyled
    >
      <div className="transition-opacity duration-300 group-hover:opacity-90">
        {children}
      </div>

      <span
        aria-hidden="true"
        className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/15 text-accent text-lg font-semibold border border-primary/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-primary group-hover:text-bg"
      >
        ↗
      </span>
    </ButtonBase>
  );
}
