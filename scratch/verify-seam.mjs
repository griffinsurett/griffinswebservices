import { chromium } from "playwright-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL = "http://localhost:9999/";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });

async function run(label, w, h) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);

  // The back (Filmstrip) top in page coords. The reveal happens as we scroll from
  // (backTop - h) toward (backTop): the front's last screen is held & lifts, and the
  // back's first screen appears behind it.
  const backTop = await page.evaluate(() =>
    Math.round(document.querySelector('[data-curtain-section="2"]').getBoundingClientRect().top + scrollY));

  console.log(`\n=== ${label} (${w}x${h}) backTop=${backTop} ===`);
  // Sample through the reveal window using real wheel scrolling (sticky is native, ok).
  const samples = [backTop - h, backTop - h*0.66, backTop - h*0.33, backTop, backTop + h*0.4];
  let i = 0;
  for (const y of samples) {
    await page.evaluate((yy) => window.scrollTo(0, Math.max(0, Math.round(yy))), y);
    await page.waitForTimeout(300);
    const s = await page.evaluate(() => {
      // Sample 5 vertical points down the viewport center: which section paints there?
      const x = innerWidth/2;
      const pts = [0.15,0.35,0.55,0.75,0.9].map(f => {
        const el = document.elementFromPoint(x, innerHeight*f);
        return el?.closest('[data-curtain-section="1"]') ? "F"
             : el?.closest('[data-curtain-section="2"]') ? "B" : ".";
      });
      return pts.join("");
    });
    await page.screenshot({ path: `scratch/${label}-${i}.png` });
    console.log(`scrollY=${Math.round(Math.max(0,y))}  top→bottom paint: [${s}]  (F=front/About, B=back/Filmstrip)`);
    i++;
  }
  await ctx.close();
}

await run("mobile", 390, 844);
await run("desktop", 1440, 900);
await browser.close();
console.log("\nscreenshots: scratch/mobile-0..4.png, scratch/desktop-0..4.png");
