// src/components/starter/Button/variants/SecondaryButton.tsx
import AnimatedBorder from "@/components/project/AnimatedBorder/AnimatedBorder";
import { ButtonBase, type ButtonProps } from "../Button";
import { getButtonBaseClasses, renderButtonIcon } from "../utils";
import { animationProps } from "@/integrations/scroll-animations";

const BORDER_RADIUS_CLASS = "rounded-full";

export default function SecondaryButton({
  leftIcon,
  rightIcon,
  className = "",
  buttonWrapperClasses,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const innerButtonClasses = [
    getButtonBaseClasses(props.size),
    "bg-transparent text-heading shadow-none",
    BORDER_RADIUS_CLASS,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={[
        fullWidth ? "inline-flex w-full" : "inline-flex w-full lg:w-auto",
        buttonWrapperClasses,
      ]
        .filter(Boolean)
        .join(" ")}
      {...animationProps("fade-in-up", { once: true })}
    >
      <AnimatedBorder
        variant="progress-b-f"
        triggers="visible"
        color="var(--color-accent)"
        borderWidth={2}
        borderRadius={BORDER_RADIUS_CLASS}
        duration={800}
        className="justify-center items-center w-full transition-all duration-700 ease-out hover:-translate-y-1"
        innerClassName="p-0 shadow-none border-transparent justify-center items-center bg-transparent w-full"
      >
        <ButtonBase
          {...props}
          className={innerButtonClasses}
          leftIcon={renderButtonIcon(leftIcon, props.size)}
          rightIcon={renderButtonIcon(rightIcon, props.size)}
        />
      </AnimatedBorder>
    </span>
  );
}
