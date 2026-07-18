import { chromium } from "playwright-core";
const BASE = process.env.BASE_URL || "http://localhost:9999";
const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
await page.waitForTimeout(500);
const info = await page.evaluate(() => {
  const root = document.querySelector("[data-gsap-curtain]");
  const front = root.querySelector('[data-gsap-curtain-section="1"]');
  return { rootTop: root.getBoundingClientRect().top + window.scrollY, frontHeight: front.offsetHeight };
});
const seamStart = info.rootTop + info.frontHeight - 900;
let y = seamStart - 400;
const end = seamStart + 1400;
let i = 0;
while (y < end) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(100);
  await page.screenshot({ path: `scratch/final-${String(i).padStart(3,"0")}.png` });
  y += 60;
  i++;
}
console.log("total frames:", i);
console.log("pageerrors (filtered):", errors.filter(e => !e.includes("useState") && !e.includes("useRef") && !e.includes("useSyncExternalStore")).length);

// Also verify scroll-back-up reversibility
await page.evaluate((yy) => window.scrollTo(0, yy), seamStart + 1400);
await page.waitForTimeout(300);
await page.evaluate((yy) => window.scrollTo(0, yy), seamStart - 400);
await page.waitForTimeout(300);
const backState = await page.evaluate(() => {
  const back = document.querySelector('[data-gsap-curtain-section="2"]');
  return { visibility: getComputedStyle(back).visibility, revealed: back.classList.contains("gsap-curtain-revealed") };
});
console.log("after scroll back up, back state:", backState);

await browser.close();
