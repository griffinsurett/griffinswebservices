import { chromium } from "playwright-core";
const b = await chromium.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" });
// The WORKING version. Check that after the pin releases, project panels are reachable.
const PATCH = `@media (max-width:767px){
  .fs-section{height:300svh!important}
  .fs-sticky{position:sticky!important;top:0!important;height:100svh!important;overflow:hidden!important}
  .fs-track{flex-direction:column!important;width:100%!important}
  .fs-panel{width:100%!important}
  .fs-panel--intro{min-height:100svh!important}
}`;
const w=390,h=844;
const ctx = await b.newContext({ viewport:{width:w,height:h}, deviceScaleFactor:2 });
const p = await ctx.newPage();
await p.goto("http://localhost:10000/", { waitUntil:"networkidle" });
await p.waitForTimeout(900);
await p.addStyleTag({content:PATCH}); await p.waitForTimeout(250);
// scroll ALL the way through slot 2; log every distinct project title seen at center
const backTop = await p.evaluate(()=>Math.round(document.querySelector('[data-curtain-section="2"]').getBoundingClientRect().top+scrollY));
const backH = await p.evaluate(()=>Math.round(document.querySelector('[data-curtain-section="2"]').getBoundingClientRect().height));
await p.evaluate((y)=>window.scrollTo(0,Math.max(0,y)), backTop-h);
const seen=new Set();
for(let i=0;i<200;i++){
  await p.mouse.wheel(0,120); await p.waitForTimeout(12);
  const t=await p.evaluate(()=>{
    const mid=document.elementFromPoint(innerWidth/2,innerHeight/2);
    const panel=mid?.closest('.fs-panel--project');
    if(!panel) return null;
    const title=panel.querySelector('h3,.fs-card-title,[class*=title]')?.textContent?.trim();
    return title||panel.getAttribute('data-slide-index');
  });
  if(t) seen.add(t);
  if(await p.evaluate(()=>window.scrollY) > backTop+backH) break;
}
console.log("slot2 height:", backH, "(",(backH/h).toFixed(1),"vh )");
console.log("project panels reachable at center:", [...seen]);
console.log(seen.size>=3 ? "✅ projects reachable" : "❌ projects clipped/unreachable");
await b.close();
