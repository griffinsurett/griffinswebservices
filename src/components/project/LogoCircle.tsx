import type { HTMLAttributes } from "react";

const BASE_CLASS = "portfolio-showcase-section__arc";

type LogoCircleProps = HTMLAttributes<HTMLDivElement>;

const LogoCircle = ({ className, ...rest }: LogoCircleProps) => {
  const resolvedClassName = className
    ? `${BASE_CLASS} ${className}`.trim()
    : BASE_CLASS;

  return <div {...rest} className={resolvedClassName} />;
};

export default LogoCircle;
