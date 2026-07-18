import { chromium } from "playwright-core";

const BASE = process.env.BASE_URL || "http://localhost:4321";

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(`${BASE}/`, { waitUntil: "networkidle" });

// Find curtain root
const info = await page.evaluate(() => {
  const root = document.querySelector("[data-curtain]");
  if (!root) return null;
  const front = root.querySelector('[data-curtain-section="1"]');
  const back = root.querySelector('[data-curtain-section="2"]');
  return {
    rootTop: root.getBoundingClientRect().top + window.scrollY,
    rootHeight: root.offsetHeight,
    frontHeight: front.offsetHeight,
    backHeight: back.offsetHeight,
  };
});
console.log("curtain info:", info);

// Scroll in steps through the curtain seam region and log front/back rects +
// filmstrip track transform + first card rise transform/opacity.
const results = [];
for (let i = 0; i < 40; i++) {
  await page.mouse.wheel(0, 150);
  await page.waitForTimeout(60);
  const data = await page.evaluate(() => {
    const root = document.querySelector("[data-curtain]");
    const front = root.querySelector('[data-curtain-section="1"]');
    const back = root.querySelector('[data-curtain-section="2"]');
    const track = document.querySelector("[data-filmstrip-track]");
    const firstCard = document.querySelector("[data-filmstrip-card] .fs-card-rise");
    const frontRect = front.getBoundingClientRect();
    const backRect = back.getBoundingClientRect();
    return {
      scrollY: window.scrollY,
      frontTop: Math.round(frontRect.top),
      frontBottom: Math.round(frontRect.bottom),
      backTop: Math.round(backRect.top),
      trackTransform: track ? getComputedStyle(track).transform : null,
      cardOpacity: firstCard ? getComputedStyle(firstCard).opacity : null,
    };
  });
  results.push(data);
}

for (const r of results) {
  console.log(
    `scrollY=${r.scrollY} frontTop=${r.frontTop} frontBottom=${r.frontBottom} backTop=${r.backTop} cardOpacity=${r.cardOpacity} trackTransform=${r.trackTransform}`
  );
}

await browser.close();
