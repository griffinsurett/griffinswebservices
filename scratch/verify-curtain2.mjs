import { chromium } from "playwright-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL = "http://localhost:9999/";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });

async function inspect(label, w, h) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);

  const g = await page.evaluate(() => {
    const front = document.querySelector('[data-curtain-section="1"]');
    const back = document.querySelector('[data-curtain-section="2"]');
    const cs = (el) => getComputedStyle(el);
    const box = (el) => { const r = el.getBoundingClientRect(); return { top: Math.round(r.top + scrollY), bottom: Math.round(r.bottom + scrollY), h: Math.round(r.height) }; };
    return {
      frontPos: cs(front).position, frontBottom: cs(front).bottom,
      backPos: cs(back).position, backMt: cs(back).marginTop,
      front: box(front), back: box(back),
    };
  });
  // Overlap = front.bottom - back.top. On mobile (stack) this should be ~0 (back starts where front ends).
  // On desktop (curtain) back.top is pulled up ~100svh into the front → large negative gap is EXPECTED (that's the reveal window).
  const overlap = g.front.bottom - g.back.top;
  console.log(`\n=== ${label} (${w}x${h}) ===`);
  console.log(`front: ${g.frontPos} bottom=${g.frontBottom} box=${JSON.stringify(g.front)}`);
  console.log(`back:  ${g.backPos} margin-top=${g.backMt} box=${JSON.stringify(g.back)}`);
  console.log(`front.bottom - back.top = ${overlap}px  (${overlap <= 2 ? "stack: back starts at/after front end" : "reveal window: back pulled up under front"})`);

  await ctx.close();
  return g;
}

// Mobile MUST be a plain stack: front static, back margin-top:0, back.top ≈ front.bottom.
const m = await inspect("MOBILE", 390, 844);
const okMobile = m.frontPos === "static" && m.backMt === "0px" && (m.front.bottom - m.back.top) <= 2;
console.log(okMobile ? "✅ MOBILE is a clean stack (no overlap, nothing sits on top)" : "❌ MOBILE overlap/positioning wrong");

// Desktop MUST curtain: front sticky-bottom, back margin-top:-100svh (back pulled up under front).
const d = await inspect("DESKTOP", 1440, 900);
const okDesktop = d.frontPos === "sticky" && d.backMt !== "0px" && (d.front.bottom - d.back.top) > 100;
console.log(okDesktop ? "✅ DESKTOP curtains (sticky-bottom front, back pulled up)" : "❌ DESKTOP curtain not applied");

await browser.close();
process.exit(okMobile && okDesktop ? 0 : 1);
