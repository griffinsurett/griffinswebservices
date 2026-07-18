import { chromium } from "playwright-core";
import { mkdirSync } from "fs";

const URL = "http://localhost:9999/";
const OUT = "/tmp/curtain-shots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});

async function run(w, h, label) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  const info = await page.evaluate(() => {
    const root = document.querySelector("[data-curtain]");
    const lift = root?.querySelector("[data-curtain-lift]");
    const bottom = root?.querySelector("[data-curtain-bottom]");
    return {
      hasRoot: !!root,
      // Absolute doc Y where the lift sentinel begins (its natural flow top).
      liftTopAbs: lift ? lift.getBoundingClientRect().top + window.scrollY : null,
      hasFilmstrip: !!bottom?.querySelector("[data-filmstrip]"),
      docH: document.documentElement.scrollHeight,
    };
  });
  console.log(`\n[${label}] ${w}x${h}`, JSON.stringify(info));
  if (!info.hasRoot) { await page.close(); return; }

  // The reveal plays out as the lift sentinel pins then releases. It pins when its
  // flow-top reaches the viewport top. Start a bit before that and wheel across ~2vh.
  const startY = Math.max(0, info.liftTopAbs - h * 0.5);
  await page.evaluate((y) => window.scrollTo(0, y), startY);
  await page.waitForTimeout(200);

  const steps = 28;
  const stepPx = Math.round((h * 2) / steps);
  const samples = [];
  for (let i = 0; i <= steps; i++) {
    await page.mouse.wheel(0, stepPx);
    await page.waitForTimeout(55);
    const s = await page.evaluate(() => {
      const root = document.querySelector("[data-curtain]");
      const top = root.querySelector("[data-curtain-top]");
      const bottom = root.querySelector("[data-curtain-bottom]");
      const lift = cssVar(root);
      function cssVar(el){return getComputedStyle(el).getPropertyValue("--curtain-lift").trim();}
      const mt = new DOMMatrixReadOnly(getComputedStyle(top).transform).m42;
      const fs = bottom.querySelector("[data-filmstrip]");
      // filmstrip track translateX (its own horizontal scrub) — should be ~0 during reveal
      const track = fs?.querySelector("[data-filmstrip-track]");
      const tx = track ? new DOMMatrixReadOnly(getComputedStyle(track).transform).m41 : null;
      const fsTop = fs ? Math.round(fs.getBoundingClientRect().top) : null;
      return {
        y: Math.round(window.scrollY),
        lift,
        topTY: Math.round(mt),
        fsTop,
        fsTrackX: tx == null ? null : Math.round(tx),
      };
    });
    samples.push(s);
  }
  console.table(samples);

  const pick = (target) => samples.reduce((b, s) =>
    Math.abs(parseFloat(s.lift) - target) < Math.abs(parseFloat(b.lift) - target) ? s : b);

  for (const [name, tgt] of [["start", 0.02], ["mid", 0.5], ["full", 0.99]]) {
    const s = pick(tgt);
    await page.evaluate((y) => window.scrollTo(0, y), s.y);
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${OUT}/${label}-${name}.png` });
  }

  await page.close();
}

await run(1440, 900, "desktop");
await run(390, 844, "mobile");

await browser.close();
console.log("\nDone. Shots in", OUT);
