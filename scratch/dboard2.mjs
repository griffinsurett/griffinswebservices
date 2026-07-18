import { chromium } from "playwright-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath: CHROME });

// KEY CONSTRAINT learned: position:sticky pins ONLY while its element is SHORTER than
// its scroll-container and there's runway. A section that is the last thing in its
// container has no runway -> no pin. So the curtain must OWN a taller wrapper whose
// child (100svh) pins.
//
// SPEC: hold BOTTOM, top slides up off it. Structure that gives the bottom a REAL pin:
//   .curtain-root
//     .curtain-top     z2 opaque, normal flow (any height) -> scrolls up & off
//     .curtain-bottom  z1, has a 100svh sticky pin at its START + the rest as runway
//        .cb-pin  position:sticky; top:0; height:100svh   <- HELD first screen
//        (bottom's own remaining content = runway that keeps cb-pin stuck)
//   .curtain-bottom margin-top:-100svh  (so pin sits under top's last screen)
//
// For the reveal to last exactly 1 viewport, the top must scroll off over 1 viewport
// while cb-pin is held. cb-pin holds for (bottomHeight - 100svh) of scroll. As long as
// bottom >= 100svh there's a hold. If bottom < 100svh we add runway.

function html(topVH, botVH, withRunwayPad) {
  // If bottom would be < ~2 screens, pad runway so the pin has hold time.
  const pad = withRunwayPad ? `<div style="height:100svh"></div>` : "";
  return `<!doctype html><html><head><style>
    *{margin:0;box-sizing:border-box}body{background:#0a0b12;font:700 26px sans-serif;color:#fff}
    .spacer{height:70vh;display:flex;align-items:center;justify-content:center;color:#555}
    .curtain-root{position:relative;isolation:isolate}
    .curtain-top{position:relative;z-index:2}
    .t{height:${topVH}svh;background:linear-gradient(#7d241a,#c0392b);display:flex;flex-direction:column;justify-content:space-between;padding:24px}
    .curtain-bottom{position:relative;z-index:1;margin-top:-100svh}
    .cb-pin{position:sticky;top:0;height:100svh;overflow:hidden}
    .b{height:${botVH}svh;background:linear-gradient(#1c5a86,#2980b9);display:flex;align-items:flex-start;justify-content:center;padding:24px}
  </style></head><body>
    <div class="spacer">↓</div>
    <div class="curtain-root">
      <div class="curtain-top" data-s="1"><div class="t"><div>TOP first</div><div style="align-self:center">TOP last ▼ lifts off</div></div></div>
      <div class="curtain-bottom" data-s="2"><div class="cb-pin"><div class="b">BOTTOM first ▲ HELD</div></div>${pad}</div>
    </div>
    <div class="spacer">end</div></body></html>`;
}

async function scan(label, topVH, botVH, w, h, pad=false) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.setContent(html(topVH, botVH, pad), { waitUntil: "load" });
  await page.waitForTimeout(120);
  const total = await page.evaluate(()=>document.body.scrollHeight);
  let pinPlateau=0, covered=false, uncovered=false;
  const N=90, step=Math.max(12, Math.floor((total-h)/N));
  for (let y=0; y<=total-h; y+=step){
    await page.evaluate((yy)=>window.scrollTo(0,yy), y);
    const s = await page.evaluate(()=>{
      const pin=document.querySelector('.cb-pin').getBoundingClientRect();
      const mid=document.elementFromPoint(innerWidth/2, innerHeight/2);
      return { pinTop:Math.round(pin.top), inTop:!!mid?.closest('[data-s="1"]'), inBot:!!mid?.closest('[data-s="2"]') };
    });
    if (Math.abs(s.pinTop) <= 4) pinPlateau++;
    if (Math.abs(s.pinTop) <= 4 && s.inTop) covered = true;
    if (Math.abs(s.pinTop) <= 4 && s.inBot) uncovered = true;
  }
  const ok = pinPlateau>4 && covered && uncovered;
  console.log(`${label.padEnd(22)} top=${String(topVH).padStart(4)} bot=${String(botVH).padStart(4)}${pad?"+pad":"    "} ${w}x${h} | pinPlateau=${String(pinPlateau).padStart(2)} ${pinPlateau>4?"✅":"❌"} cover→uncover=${covered&&uncovered?"✅":"❌"} ${ok?"PASS":"FAIL"}`);
  await ctx.close();
  return ok;
}

let all=true;
for (const [w,h] of [[390,844],[1440,900]]) {
  all &= await scan("normal", 150, 300, w, h);
  all &= await scan("short top", 40, 300, w, h);
  all &= await scan("tall top", 500, 300, w, h);
  all &= await scan("huge bottom", 150, 2000, w, h);
  all &= await scan("short bottom+pad", 150, 60, w, h, true);
}
await browser.close();
console.log(all ? "\nALL PASS" : "\nSOME FAILED");
