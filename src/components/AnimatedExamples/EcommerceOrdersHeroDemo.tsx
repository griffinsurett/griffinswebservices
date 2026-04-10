import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import DecorativeWrapper from "@/integrations/preferences/accessibility/ui/DecorativeWrapper";

export interface EcommerceOrdersHeroDemoProps {
  className?: string;
}

const orders = [
  { id: "#4823", customer: "A. Patel", label: "New sale received", amount: 148 },
  { id: "#4824", customer: "L. Nguyen", label: "New sale received", amount: 96 },
  { id: "#4825", customer: "S. Brooks", label: "New sale received", amount: 64 },
  { id: "#4826", customer: "J. Rivera", label: "New sale received", amount: 148 },
  { id: "#4827", customer: "M. Carter", label: "New sale received", amount: 212 },
];

const baseRevenue = 4282;
const baseOrders = 12;

export default function EcommerceOrdersHeroDemo({
  className = "",
}: EcommerceOrdersHeroDemoProps) {
  const prefersReducedMotion = useMotionPreference();
  const [visibleCount, setVisibleCount] = useState(prefersReducedMotion ? orders.length : 0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleCount(orders.length);
      return;
    }

    setVisibleCount(0);

    const timers: ReturnType<typeof setTimeout>[] = [];
    orders.forEach((_, index) => {
      timers.push(setTimeout(() => setVisibleCount(index + 1), 500 + index * 520));
    });

    timers.push(
      setTimeout(() => {
        setAnimationKey((current) => current + 1);
      }, 4300),
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [animationKey, prefersReducedMotion]);

  const visibleOrders = orders.slice(0, visibleCount);
  const revenue = baseRevenue + visibleOrders.reduce((sum, order) => sum + order.amount, 0);
  const totalOrders = baseOrders + visibleOrders.length;
  const latestOrder = visibleOrders[visibleOrders.length - 1];

  return (
    <DecorativeWrapper
      className={`pointer-events-none w-full select-none ${className}`}
    >
      <div className="relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(99,122,255,0.16),transparent_45%),linear-gradient(180deg,#12172a,#0b1020)] shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:4.85rem_4.85rem]" />

        <div className="relative border-b border-white/8 bg-white/4 px-4 py-3">
          <div className="flex flex-col items-start gap-1 text-[0.58rem] uppercase tracking-[0.16em] text-text/40 sm:flex-row sm:items-center sm:justify-between">
            <span>Live Orders</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Sale notifications keep landing
            </span>
          </div>

          <p className="mt-2 max-w-[24rem] text-[0.72rem] leading-relaxed text-text/62">
            The point is not the product name. It is the repeated feeling of seeing new sales come in and knowing the store is working.
          </p>
        </div>

        <div className="relative p-4">
          <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1rem] border border-white/8 bg-white/[0.04] p-3">
                <p className="text-[0.56rem] uppercase tracking-[0.12em] text-text/42">
                  Revenue today
                </p>
                <p className="mt-1 text-[1.2rem] font-semibold text-white">
                  ${revenue.toLocaleString()}
                </p>
                <p className="mt-1 text-[0.58rem] text-emerald-300">
                  +${visibleOrders.reduce((sum, order) => sum + order.amount, 0)} from new orders
                </p>
              </div>

              <div className="rounded-[1rem] border border-white/8 bg-white/[0.04] p-3">
                <p className="text-[0.56rem] uppercase tracking-[0.12em] text-text/42">
                  Orders today
                </p>
                <p className="mt-1 text-[1.2rem] font-semibold text-white">
                  {totalOrders}
                </p>
                <p className="mt-1 text-[0.58rem] text-text/56">
                  More sales are showing up
                </p>
              </div>

              <div className="rounded-[1rem] border border-emerald-400/14 bg-emerald-400/[0.08] p-3 sm:col-span-2 lg:col-span-1">
                <p className="text-[0.56rem] uppercase tracking-[0.12em] text-emerald-300/80">
                  Latest sale
                </p>
                <p className="mt-1 text-[0.76rem] font-medium text-white">
                  {latestOrder ? "Sale received" : "Waiting for activity"}
                </p>
                <p className="mt-1 text-[0.58rem] text-text/60">
                  {latestOrder ? `${latestOrder.id} • $${latestOrder.amount}` : "New sales appear here"}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.1rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(13,19,36,0.98))] p-3 shadow-[0_16px_34px_rgba(0,0,0,0.22)]">
              <div className="flex items-center justify-between">
                <p className="text-[0.66rem] uppercase tracking-[0.14em] text-text/42">
                  Sales Feed
                </p>
                <span className="rounded-full border border-primary/18 bg-primary/10 px-1.5 py-0.5 text-[0.46rem] uppercase tracking-[0.12em] text-primary">
                  Live sync
                </span>
              </div>

              <div className="relative mt-4 h-[14rem] sm:h-[15rem] lg:h-[16rem]">
                {orders.map((order, index) => {
                  const visible = index < visibleCount;
                  const stackIndex = visibleCount - index - 1;
                  const top = 0.85 + Math.max(stackIndex, 0) * 2.45;
                  const scale = 1 - Math.max(stackIndex, 0) * 0.035;
                  const opacity = visible ? 1 - Math.max(stackIndex, 0) * 0.12 : 0;

                  return (
                    <div
                      key={order.id}
                      className={`absolute inset-x-0 rounded-[0.95rem] border px-3 py-2.5 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
                        visible
                          ? index === visibleCount - 1
                            ? "border-emerald-400/24 bg-[linear-gradient(180deg,rgba(25,38,67,0.98),rgba(16,24,45,0.98))] shadow-[0_0_0_1px_rgba(74,222,128,0.12),0_18px_34px_rgba(0,0,0,0.2)]"
                            : "border-white/8 bg-[linear-gradient(180deg,rgba(24,31,54,0.95),rgba(13,19,36,0.98))]"
                          : "translate-y-[-1.25rem] scale-[0.96] opacity-0"
                      }`}
                      style={{
                        top: `${top}rem`,
                        transform: visible ? `scale(${scale})` : undefined,
                        opacity,
                        zIndex: visible ? 20 - stackIndex : 0,
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex min-w-0 items-start gap-2.5">
                          <div
                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.8rem] ${
                              index === visibleCount - 1
                                ? "bg-emerald-400/14 text-emerald-300"
                                : "bg-primary/12 text-primary"
                            }`}
                          >
                            <Icon icon="lucide:shopping-bag" size="sm" className="text-current" />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-[0.68rem] font-medium text-white sm:text-[0.72rem]">
                              {order.label}
                            </p>
                            <p className="mt-0.5 text-[0.54rem] text-text/56 sm:text-[0.58rem]">
                              {order.customer} completed {order.id}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-[0.72rem] font-semibold text-white sm:text-[0.76rem]">
                            ${order.amount}
                          </p>
                          <p className="mt-0.5 text-[0.5rem] uppercase tracking-[0.12em] text-emerald-300">
                            Paid
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DecorativeWrapper>
  );
}
