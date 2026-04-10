import { useEffect, useState } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import DecorativeWrapper from "@/integrations/preferences/accessibility/ui/DecorativeWrapper";

export interface ProductCatalogAddDemoProps {
  className?: string;
}

const existingProducts = [
  {
    title: "Trail Runner Pro",
    category: "Footwear",
    price: "$148",
    accent: "from-sky-500 to-indigo-700",
  },
  {
    title: "Weekend Carry Pack",
    category: "Accessories",
    price: "$92",
    accent: "from-amber-500 to-orange-700",
  },
];

const newProduct = {
  title: "Everyday Performance Jacket",
  category: "Outerwear",
  price: "$124",
  status: "New",
  accent: "from-emerald-500 to-teal-700",
};

export default function ProductCatalogAddDemo({
  className = "",
}: ProductCatalogAddDemoProps) {
  const prefersReducedMotion = useMotionPreference();
  const [step, setStep] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setStep(4);
      return;
    }

    setStep(0);

    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setStep(1), 700));
    timers.push(setTimeout(() => setStep(2), 1500));
    timers.push(setTimeout(() => setStep(3), 2600));
    timers.push(setTimeout(() => setStep(4), 3400));
    timers.push(
      setTimeout(() => {
        setAnimationKey((current) => current + 1);
      }, 5600)
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [animationKey, prefersReducedMotion]);

  const showSlot = step >= 1;
  const isLoading = step === 2;
  const showProduct = step >= 3;
  const showSuccess = step >= 4;

  return (
    <DecorativeWrapper
      className={`bg-text/10 rounded-lg overflow-hidden select-none pointer-events-none ${className}`}
    >
      <div className="bg-bg2 px-3 py-2 flex items-center gap-2 border-b border-text/10">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-bg3 rounded px-2 py-0.5">
          <span className="text-[10px] text-text/70">yoursite.com/products</span>
        </div>
      </div>

      <div className="bg-bg2 p-3 relative h-[180px] overflow-hidden">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-[11px] text-text">Products</h3>
            <p className="text-[8px] text-text/50">Catalog content and merchandising</p>
          </div>
          <div
            className={`flex items-center gap-1 rounded-full px-2 py-1 transition-all duration-300 ${
              step >= 1 && step < 4 ? "bg-primary/15" : "bg-bg3"
            }`}
          >
            {step >= 1 && step < 4 && !prefersReducedMotion && (
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            )}
            <span className="text-[8px] text-text/70">
              {step >= 1 && step < 4 ? "Updating catalog..." : `${showSuccess ? 3 : 2} products`}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div
            className={`transition-all duration-500 ease-out overflow-hidden ${
              showSlot ? "h-[54px] opacity-100 mb-2" : "h-0 opacity-0 mb-0"
            }`}
          >
            <div
              className={`rounded-lg border p-2 transition-all duration-500 ${
                showProduct
                  ? "border-soft-strong bg-bg3/80"
                  : isLoading
                    ? "border-soft bg-bg3/60"
                    : "border-dashed border-white/25 bg-transparent"
              } ${showSuccess ? "ring-2 ring-green-500/45" : ""}`}
            >
              {!showProduct ? (
                <div className="flex h-full items-center justify-center">
                  {isLoading && !prefersReducedMotion ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-primary/25 border-t-primary animate-spin" />
                      <span className="text-[9px] text-text/60">Adding product content...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="h-4 w-4 text-white/40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                      <span className="text-[9px] text-white/40">New product</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div
                    className={`h-9 w-9 shrink-0 rounded bg-gradient-to-br ${newProduct.accent} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.18))]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="truncate text-[10px] font-medium text-text">
                        {newProduct.title}
                      </span>
                      <span className="rounded-full bg-green-500/20 px-1 py-0.5 text-[7px] font-medium text-green-400 shrink-0">
                        {newProduct.status}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-[8px] text-text/50">
                      <span>{newProduct.category}</span>
                      <span>SKU 2048</span>
                      <span>{newProduct.price}</span>
                    </div>
                  </div>

                  {showSuccess && (
                    <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[7px] font-medium text-primary">
                      Live
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {existingProducts.map((product, index) => (
            <div
              key={product.title}
              className={`rounded-lg bg-bg3/55 p-2 transition-all duration-500 ${
                showSlot ? "opacity-70" : "opacity-100"
              }`}
              style={{ transform: showSlot ? `translateY(${index === 0 ? "2px" : "0"})` : "none" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`h-9 w-9 shrink-0 rounded bg-gradient-to-br ${product.accent}`}
                />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[10px] font-medium text-text/80">
                    {product.title}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-[8px] text-text/45">
                    <span>{product.category}</span>
                    <span>{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-bg2/50 px-3 py-1.5 flex items-center justify-between border-t border-text/10">
        <span className="text-[9px] text-text/50">
          {showSuccess
            ? "Product published to catalog"
            : showProduct
              ? "Saving product details..."
              : isLoading
                ? "Creating product entry..."
                : showSlot
                  ? "Preparing product card..."
                  : "Catalog ready"}
        </span>
        <span className="text-[9px] text-text/40">{showSuccess ? "3 products" : "2 products"}</span>
      </div>
    </DecorativeWrapper>
  );
}
