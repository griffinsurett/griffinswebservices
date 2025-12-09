import { useLazyLoad } from "@/hooks/useLazyLoad";

interface Props {
  items: any[];
  mediaEntries?: any[];
  className?: string;
  staticContainerId?: string;
}

export default function LazyPortfolioShowcase(props: Props) {
  const { Component } = useLazyLoad<Props>(
    () => import("./PortfolioScreenShowcase"),
    { delay: 3000 }
  );

  return Component ? <Component {...props} /> : null;
}
