import { chromium } from "playwright-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto("http://localhost:9999/", { waitUntil: "networkidle" });
await page.waitForTimeout(900);

// front content really ends where? measure the AboutSection's last visible child bottom.
const info = await page.evaluate(() => {
  const front = document.querySelector('[data-curtain-section="1"]');
  const aboutRoot = front.querySelector('.about-root') || front.firstElementChild;
  // deepest last rendered content: walk marquee / expand region
  const marquee = front.querySelector('.about-expand-marquee');
  const b = (el) => el ? Math.round(el.getBoundingClientRect().bottom + scrollY) : null;
  return {
    frontBottom: b(front),
    aboutRootBottom: b(aboutRoot),
    marqueeBottom: b(marquee),
    backTop: Math.round(document.querySelector('[data-curtain-section="2"]').getBoundingClientRect().top + scrollY),
  };
});
console.log("mobile seam geometry:", info);
console.log("empty tail (frontBottom - marqueeBottom):", info.frontBottom - (info.marqueeBottom ?? info.frontBottom));

// screenshot across the seam
let i = 0;
for (const y of [info.marqueeBottom - 400, info.marqueeBottom + 200, (info.marqueeBottom + info.backTop)/2, info.backTop - 200, info.backTop + 300]) {
  await page.evaluate((yy) => window.scrollTo(0, yy), Math.max(0, Math.round(y)));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `scratch/seam-${i}.png` });
  i++;
}
console.log("wrote scratch/seam-0..4.png");
await browser.close();
