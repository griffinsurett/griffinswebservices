// src/components/Button/variants/PrimaryButton.tsx
/**
 * Primary Button Variant
 *
 * Solid blue button - the default and most prominent button style.
 * Used for primary actions like form submissions, main CTAs.
 */

import { useAnimatedElement } from "@/hooks/animations/useViewAnimation";
import { ButtonBase, type ButtonProps } from "../Button";
import { getButtonBaseClasses, renderButtonIcon } from "../utils";

/**
 * Primary button with blue background and white text
 */
export default function PrimaryButton({
  leftIcon,
  rightIcon,
  className = "",
  animated = true,
  buttonWrapperClasses = "w-full lg:w-auto",
  ...props
}: ButtonProps) {
  const anim = useAnimatedElement<HTMLSpanElement>({
    duration: 100,
    delay: 0,
    threshold: 0,
    rootMargin: "0px 0px -15% 0px",
  });

  const baseShell = getButtonBaseClasses(props.size);
  const variantClasses = [
    baseShell,
    "primary-button-transition border-2 border-primary primary-gradient gradient-disappear-on-hover text-bg hover:text-heading",
  ]
    .filter(Boolean)
    .join(" ");

  const buttonContent = (
    <ButtonBase
      {...props}
      className={`${variantClasses} ${className}`.trim()}
      leftIcon={renderButtonIcon(leftIcon, props.size)}
      rightIcon={renderButtonIcon(rightIcon, props.size)}
      unstyled
    />
  );


  if (!animated) {
    return <span className={`${buttonWrapperClasses} inline-flex`}>{buttonContent}</span>;
  }

  return (
    <span
      ref={anim.ref}
      className={`${buttonWrapperClasses} animated-element zoom-in`.trim()}
      {...anim.props}
    >
      {buttonContent}
    </span>
  );
}
