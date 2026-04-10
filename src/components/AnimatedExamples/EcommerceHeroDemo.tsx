import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import DecorativeWrapper from "@/integrations/preferences/accessibility/ui/DecorativeWrapper";

export interface EcommerceHeroDemoProps {
  className?: string;
}

const merchantSales = [
  { order: "#4821", customer: "M. Carter", amount: "$92" },
  { order: "#4822", customer: "J. Rivera", amount: "$126" },
  { order: "#4823", customer: "A. Patel", amount: "$148" },
];

export default function EcommerceHeroDemo({
  className = "",
}: EcommerceHeroDemoProps) {
  const prefersReducedMotion = useMotionPreference();
  const [step, setStep] = useState(prefersReducedMotion ? 11 : 0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setStep(11);
      return;
    }

    setStep(0);

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setStep(1), 450));
    timers.push(setTimeout(() => setStep(2), 1050));
    timers.push(setTimeout(() => setStep(3), 1700));
    timers.push(setTimeout(() => setStep(4), 2450));
    timers.push(setTimeout(() => setStep(5), 3050));
    timers.push(setTimeout(() => setStep(6), 3700));
    timers.push(setTimeout(() => setStep(7), 4400));
    timers.push(setTimeout(() => setStep(8), 5100));
    timers.push(setTimeout(() => setStep(9), 5850));
    timers.push(setTimeout(() => setStep(10), 6600));
    timers.push(setTimeout(() => setStep(11), 7600));
    timers.push(
      setTimeout(() => {
        setAnimationKey((current) => current + 1);
      }, 9800),
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [animationKey, prefersReducedMotion]);

  const productSlide = step < 3;
  const cartSlide = step >= 3 && step < 6;
  const checkoutSlide = step >= 6 && step < 10;
  const thankYouSlide = step >= 10 && step < 11;
  const accountSlide = step >= 11;

  const addHover = step === 1;
  const addPress = step === 2;
  const cartButtonHover = step === 4;
  const cartButtonPress = step === 5;
  const contactFilled = step >= 7;
  const shippingFilled = step >= 8;
  const paymentFilled = step >= 9;
  const orderPlaced = step >= 10;

  const showCursor = !prefersReducedMotion && step >= 1 && step < 10;
  const cursorPress = step === 2 || step === 5 || step === 9;
  const cursorPosition =
    step < 3
      ? { left: "50%", top: "84%" }
      : step < 6
        ? { left: "50%", top: "84%" }
        : { left: "50%", top: "91%" };

  const statusLabel = accountSlide
    ? "The sale shows up in your account"
    : thankYouSlide
      ? "The customer sees a clean confirmation"
      : checkoutSlide
        ? paymentFilled
          ? "Checkout finishes cleanly"
          : "Checkout details fill in fast"
        : cartSlide
          ? cartButtonHover
            ? "Cart pushes the buyer forward"
            : "The cart keeps the next step obvious"
          : addHover
            ? "Add to cart feels obvious"
            : "Browse to purchase";

  const totalRevenue = accountSlide ? "$4,430" : "$4,282";
  const ordersToday = accountSlide ? "13" : "12";

  return (
    <DecorativeWrapper
      className={`pointer-events-none w-full select-none ${className}`}
    >
      <div className="relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(99,122,255,0.16),transparent_45%),linear-gradient(180deg,#12172a,#0b1020)] shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:4.85rem_4.85rem]" />

        <div className="relative border-b border-white/8 bg-white/4 px-4 py-3">
          <div className="flex items-center justify-between text-[0.58rem] uppercase tracking-[0.16em] text-text/40">
            <span>Storefront Flow</span>
            <span className="flex items-center gap-1">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  accountSlide
                    ? "bg-emerald-400"
                    : thankYouSlide
                      ? "bg-emerald-400"
                      : cartSlide || checkoutSlide
                        ? "bg-primary"
                        : "bg-primary animate-pulse"
                }`}
              />
              {statusLabel}
            </span>
          </div>

          <p className="mt-2 max-w-[21rem] text-[0.72rem] leading-relaxed text-text/62">
            The buying flow moves from product to cart to checkout, then the completed order shows up on the business side.
          </p>
        </div>

        <div className="relative h-[20rem] overflow-hidden px-4 pb-4 pt-4">
          <div className="relative h-full overflow-hidden rounded-[1.15rem] border border-white/8 bg-[linear-gradient(180deg,rgba(24,31,54,0.96),rgba(11,16,32,0.98))] shadow-[0_16px_34px_rgba(0,0,0,0.28)]">
            <div
              className={`absolute inset-0 p-4 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
                productSlide
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-[12%] opacity-0"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-text/42">
                  Featured offer
                </p>
                <span className="rounded-full border border-emerald-400/18 bg-emerald-400/10 px-1.5 py-0.5 text-[0.48rem] uppercase tracking-[0.12em] text-emerald-300">
                  In stock
                </span>
              </div>

              <div className="mt-3 flex gap-4">
                <div className="flex h-[9rem] w-[8.4rem] shrink-0 items-center justify-center rounded-[1rem] bg-[linear-gradient(135deg,rgba(126,156,255,0.28),rgba(27,42,89,0.9))]">
                  <div className="relative h-[6.5rem] w-[5.1rem] rounded-[1rem] bg-[linear-gradient(180deg,#dce6ff,#8aa1ff)] shadow-[0_12px_24px_rgba(32,58,147,0.35)]">
                    <div className="absolute inset-x-[0.55rem] top-[0.6rem] h-[0.45rem] rounded-full bg-white/50" />
                    <div className="absolute inset-x-[0.85rem] top-[1.45rem] h-[2.45rem] rounded-[0.7rem] bg-[linear-gradient(180deg,rgba(8,14,34,0.18),rgba(8,14,34,0.06))]" />
                    <div className="absolute bottom-[0.7rem] left-1/2 h-[1.45rem] w-[2.7rem] -translate-x-1/2 rounded-full border border-white/40 bg-white/30" />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[1.12rem] leading-tight text-[#90a4ff]">
                    Signature Product Bundle
                  </h3>
                  <p className="mt-2 text-[0.7rem] leading-relaxed text-text/62">
                    Strong product framing, trust signals, and a clear next step make the offer easier to understand and buy.
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-[1.1rem] font-semibold text-white">$148</span>
                    <span className="text-[0.64rem] text-text/40 line-through">$186</span>
                    <span className="rounded-full border border-primary/18 bg-primary/10 px-1.5 py-0.5 text-[0.46rem] uppercase tracking-[0.12em] text-primary">
                      Best value
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["4.9 rating", "Fast shipping", "Secure checkout"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[0.54rem] uppercase tracking-[0.12em] text-text/52"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-[1rem] border border-primary/12 bg-primary/[0.03] p-2.5">
                <button
                  className={`flex w-full items-center justify-center gap-2 rounded-[0.95rem] py-2.5 text-[0.76rem] font-semibold transition-all duration-300 ${
                    step >= 3
                      ? "bg-emerald-500 text-white"
                      : addHover
                        ? "scale-[1.01] bg-primary/90 text-white"
                        : addPress
                          ? "scale-[0.98] bg-primary text-white"
                          : "bg-primary text-white"
                  }`}
                >
                  <Icon
                    icon={step >= 3 ? "lucide:check" : "lucide:shopping-cart"}
                    size="sm"
                    className="text-current"
                  />
                  {step >= 3 ? "Added to cart" : "Add to cart"}
                </button>
              </div>
            </div>

            <div
              className={`absolute inset-0 p-4 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
                cartSlide
                  ? "translate-x-0 opacity-100"
                  : productSlide
                    ? "translate-x-[12%] opacity-0"
                    : thankYouSlide || accountSlide
                      ? "-translate-x-[12%] opacity-0"
                      : "translate-x-[12%] opacity-0"
              }`}
            >
              <div className="flex h-full flex-col">
              <div className="flex items-center justify-between">
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-text/42">
                  Your cart
                </p>
                <span className="rounded-full border border-primary/18 bg-primary/10 px-1.5 py-0.5 text-[0.46rem] uppercase tracking-[0.12em] text-primary">
                  1 item
                </span>
              </div>

              <div className="mt-3 rounded-[1rem] border border-white/10 bg-white/[0.04] p-2.5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-[0.85rem] bg-[linear-gradient(135deg,rgba(126,156,255,0.24),rgba(27,42,89,0.9))]" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[0.78rem] font-medium text-white">
                      Signature Product Bundle
                    </p>
                    <p className="mt-0.5 text-[0.58rem] text-text/52">
                      Pro option selected
                    </p>
                  </div>
                  <span className="text-[0.78rem] font-semibold text-white">$148</span>
                </div>
              </div>

              <div className="mt-3 rounded-[1rem] border border-white/10 bg-white/[0.04] p-2.5">
                <div className="grid gap-1.5">
                  {[
                    ["Subtotal", "$148"],
                    ["Shipping", "Free"],
                    ["Tax", "Calculated at checkout"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between text-[0.6rem] text-text/60"
                    >
                      <span>{label}</span>
                      <span className="text-white/88">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-2.5 flex items-center justify-between border-t border-white/8 pt-2.5 text-[0.74rem] font-semibold text-white">
                  <span>Total</span>
                  <span>$148</span>
                </div>
              </div>

              <button
                className={`mt-auto flex w-full items-center justify-center gap-2 rounded-[0.95rem] px-3 py-2.5 text-[0.76rem] font-semibold transition-all duration-300 ${
                  step >= 6
                    ? "bg-emerald-500 text-white"
                    : cartButtonHover
                      ? "scale-[1.01] bg-white text-[#10162b]"
                      : cartButtonPress
                        ? "scale-[0.98] bg-white text-[#10162b]"
                        : "bg-white text-[#10162b]"
                }`}
              >
                <Icon
                  icon={step >= 6 ? "lucide:check" : "lucide:arrow-right"}
                  size="sm"
                  className="text-current"
                />
                {step >= 6 ? "Checkout started" : "Continue to checkout"}
              </button>
              </div>
            </div>

            <div
              className={`absolute inset-0 p-4 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
                checkoutSlide
                  ? "translate-x-0 opacity-100"
                  : cartSlide
                    ? "translate-x-[12%] opacity-0"
                    : accountSlide
                      ? "-translate-x-[12%] opacity-0"
                      : "translate-x-[12%] opacity-0"
              }`}
            >
              <div className="flex h-full flex-col">
              <div className="flex items-center justify-between">
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-text/42">
                  Checkout
                </p>
                <span className="rounded-full border border-primary/18 bg-primary/10 px-1.5 py-0.5 text-[0.46rem] uppercase tracking-[0.12em] text-primary">
                  Secure form
                </span>
              </div>

              <div className="mt-3 grid gap-1.5">
                {[
                  {
                    label: "Contact",
                    icon: "lucide:mail",
                    active: contactFilled,
                    value: "hello@yourcompany.com",
                  },
                  {
                    label: "Shipping",
                    icon: "lucide:map-pin",
                    active: shippingFilled,
                    value: "124 Market Street",
                  },
                  {
                    label: "Payment",
                    icon: "lucide:credit-card",
                    active: paymentFilled,
                    value: "Visa ending in 4408",
                  },
                ].map((field) => (
                  <div
                    key={field.label}
                    className={`rounded-[0.92rem] border px-2.5 py-2 transition-all duration-500 ${
                      field.active
                        ? "border-primary/20 bg-primary/8"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon
                        icon={field.icon}
                        size="sm"
                        className={field.active ? "text-primary" : "text-text/38"}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-[0.56rem] uppercase tracking-[0.12em] text-text/42">
                          {field.label}
                        </p>
                        <div className="mt-1 h-[0.5rem] overflow-hidden rounded-full bg-white/8">
                          <div
                            className={`h-full rounded-full bg-[linear-gradient(90deg,rgba(110,131,255,0.95),rgba(146,205,255,0.95))] transition-all duration-500 ${
                              field.active ? "w-full" : "w-[18%]"
                            }`}
                          />
                        </div>
                        <p
                          className={`mt-1 text-[0.58rem] transition-opacity duration-300 ${
                            field.active ? "opacity-100 text-text/70" : "opacity-0"
                          }`}
                        >
                          {field.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-[0.95rem] border border-white/10 bg-white/[0.04] px-2.5 py-2">
                <div className="flex items-center justify-between text-[0.6rem] text-text/58">
                  <span>Subtotal</span>
                  <span className="text-white/88">$148</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[0.6rem] text-text/58">
                  <span>Shipping</span>
                  <span className="text-white/88">Free</span>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-white/8 pt-2 text-[0.7rem] font-semibold text-white">
                  <span>Total</span>
                  <span>$148</span>
                </div>
              </div>

              <button
                className={`mt-auto flex w-full items-center justify-center gap-2 rounded-[0.95rem] px-3 py-2.5 text-[0.74rem] font-semibold transition-all duration-300 ${
                  orderPlaced ? "bg-emerald-500 text-white" : "bg-white text-[#10162b]"
                }`}
              >
                <Icon
                  icon={orderPlaced ? "lucide:check" : "lucide:arrow-right"}
                  size="sm"
                  className="text-current"
                />
                {orderPlaced ? "Order placed" : "Place order"}
              </button>
              </div>
            </div>

            <div
              className={`absolute inset-0 p-4 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
                thankYouSlide
                  ? "translate-x-0 opacity-100"
                  : accountSlide
                    ? "-translate-x-[12%] opacity-0"
                    : "translate-x-[12%] opacity-0"
              }`}
            >
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
                  <Icon
                    icon="lucide:check"
                    size="lg"
                    className="text-emerald-300"
                  />
                </div>

                <p className="mt-4 text-[0.72rem] uppercase tracking-[0.16em] text-text/42">
                  Thank you
                </p>
                <h3 className="mt-2 text-[1.18rem] font-semibold text-white">
                  Your order is confirmed
                </h3>
                <p className="mt-2 max-w-[17rem] text-[0.7rem] leading-relaxed text-text/62">
                  A receipt and next steps have been sent. The checkout flow ends with a clear confirmation instead of uncertainty.
                </p>

                <div className="mt-5 grid w-full max-w-[18rem] grid-cols-2 gap-2">
                  <div className="rounded-[0.95rem] border border-white/10 bg-white/[0.04] p-2.5 text-left">
                    <p className="text-[0.54rem] uppercase tracking-[0.12em] text-text/42">
                      Order
                    </p>
                    <p className="mt-1 text-[0.82rem] font-semibold text-white">
                      #4823
                    </p>
                  </div>
                  <div className="rounded-[0.95rem] border border-white/10 bg-white/[0.04] p-2.5 text-left">
                    <p className="text-[0.54rem] uppercase tracking-[0.12em] text-text/42">
                      Total
                    </p>
                    <p className="mt-1 text-[0.82rem] font-semibold text-white">
                      $148
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`absolute inset-0 p-4 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
                accountSlide
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[12%] opacity-0"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-text/42">
                  Sales account
                </p>
                <span className="rounded-full border border-emerald-400/18 bg-emerald-400/10 px-1.5 py-0.5 text-[0.46rem] uppercase tracking-[0.12em] text-emerald-300">
                  Live
                </span>
              </div>

              <div className="mt-3 rounded-[0.95rem] border border-emerald-400/14 bg-emerald-400/[0.08] p-2.5">
                <p className="text-[0.56rem] uppercase tracking-[0.12em] text-emerald-300/80">
                  New sale received
                </p>
                <div className="mt-1 flex items-end justify-between">
                  <div>
                    <p className="text-[0.9rem] font-semibold text-white">
                      Signature Product Bundle
                    </p>
                    <p className="mt-0.5 text-[0.58rem] text-text/62">
                      Order #{merchantSales[2].order.slice(1)} completed
                    </p>
                  </div>
                  <span className="text-[0.95rem] font-semibold text-emerald-300">
                    +$148
                  </span>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-[0.95rem] border border-white/10 bg-white/[0.04] p-2.5">
                  <p className="text-[0.54rem] uppercase tracking-[0.12em] text-text/42">
                    Orders today
                  </p>
                  <p className="mt-1 text-[1rem] font-semibold text-white">
                    {ordersToday}
                  </p>
                </div>
                <div className="rounded-[0.95rem] border border-white/10 bg-white/[0.04] p-2.5">
                  <p className="text-[0.54rem] uppercase tracking-[0.12em] text-text/42">
                    Revenue
                  </p>
                  <p className="mt-1 text-[1rem] font-semibold text-white">
                    {totalRevenue}
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-[0.95rem] border border-white/10 bg-white/[0.04] p-2.5">
                <div className="grid grid-cols-[3.2rem_minmax(0,1fr)_3rem] gap-2 border-b border-white/8 pb-2 text-[0.52rem] uppercase tracking-[0.12em] text-text/38">
                  <span>Order</span>
                  <span>Customer</span>
                  <span className="text-right">Total</span>
                </div>

                <div className="mt-2 space-y-1.5">
                  {merchantSales.map((sale, index) => {
                    const isNewSale = index === merchantSales.length - 1;
                    return (
                      <div
                        key={sale.order}
                        className={`grid grid-cols-[3.2rem_minmax(0,1fr)_3rem] gap-2 rounded-[0.75rem] px-2 py-1.5 text-[0.58rem] transition-all duration-500 ${
                          isNewSale
                            ? "bg-emerald-400/14 text-white shadow-[0_0_0_1px_rgba(74,222,128,0.18)]"
                            : "bg-white/[0.03] text-text/66"
                        }`}
                      >
                        <span>{sale.order}</span>
                        <span className="truncate">{sale.customer}</span>
                        <span className="text-right">{sale.amount}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {showCursor && (
            <div
              className="absolute z-20 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)]"
              style={{
                left: cursorPosition.left,
                top: cursorPosition.top,
                transform: `translate(-50%, -50%) scale(${cursorPress ? 0.84 : 1})`,
              }}
            >
              <svg
                className={`h-5 w-5 drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] ${
                  cursorPress ? "rotate-6" : ""
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M4 4l16 8-7 2-2 7L4 4z"
                  className={addHover ? "text-primary" : "text-white"}
                />
              </svg>

              {cursorPress && (
                <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 bg-primary/10 animate-ping" />
              )}
            </div>
          )}
        </div>
      </div>
    </DecorativeWrapper>
  );
}
