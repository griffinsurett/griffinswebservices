import { chromium } from "playwright-core";
const b = await chromium.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" });

// Refined mobile fix: pin ONLY the intro panel as the curtain reveal target, keep the
// rest of the panels stacked & scrolling normally (visible, not clipped).
// The intro is inside .fs-track (flex column). For it to be the held first screen, it
// must be sticky within a container that has runway = the rest of the track.
const PATCH = `
@media (max-width: 767px) {
  .fs-section { height: auto; }
  .fs-sticky  { position: static; height: auto; overflow: visible; }
  .fs-track   { flex-direction: column; width: 100%; transform: none !important; }
  .fs-panel   { width: 100%; height: auto; }
  .fs-panel-inner, .fs-panel-inner--project { padding: 3rem 1.5rem; height: auto; }
  .fs-panel--outro { min-height: 60vh; }
  .fs-rule { display: none; }
  .fs-card-rise { transform: none !important; opacity: 1 !important; }
  /* KEY: intro panel is the held first screen — sticky at top, 100svh, the rest of the
     track scrolls under/after it. z-index below the project panels so they cover it as
     they scroll up (natural stack) OR above so it holds then releases. Test top:0 sticky. */
  .fs-panel--intro { position: sticky; top: 0; min-height: 100svh; z-index: 0; }
  .fs-panel--project { position: relative; z-index: 1; }
}
`;
async function run(label, patch){
  const w=390,h=844;
  const ctx = await b.newContext({ viewport:{width:w,height:h}, deviceScaleFactor:2 });
  const p = await ctx.newPage();
  await p.goto("http://localhost:10000/", { waitUntil:"networkidle" });
  await p.waitForTimeout(900);
  if(patch){ await p.addStyleTag({content:PATCH}); await p.waitForTimeout(250);}
  const backTop = await p.evaluate(()=>Math.round(document.querySelector('[data-curtain-section="2"]').getBoundingClientRect().top+scrollY));
  await p.evaluate((y)=>window.scrollTo(0,Math.max(0,y)), backTop-h*2.2);
  await p.waitForTimeout(300);
  let introHeld=0, revealHeld=0, sawProject=false, blank=0;
  for(let i=0;i<120;i++){
    await p.mouse.wheel(0,95); await p.waitForTimeout(20);
    const s=await p.evaluate(()=>{
      const intro=document.querySelector('.fs-panel--intro')?.getBoundingClientRect();
      const mid=document.elementFromPoint(innerWidth/2,innerHeight/2);
      const txt=(mid?.textContent||'').trim();
      return { introTop:intro?Math.round(intro.top):null, inBack:!!mid?.closest('[data-curtain-section="2"]'),
               onProject:!!mid?.closest('.fs-panel--project'), blank:!!mid?.closest('[data-curtain-section="1"]')&&txt.length<4 };
    });
    if(s.introTop!==null && Math.abs(s.introTop)<=8) introHeld++;
    if(s.introTop!==null && Math.abs(s.introTop)<=8 && s.inBack) revealHeld++;
    if(s.onProject) sawProject=true;
    if(s.blank) blank++;
  }
  console.log(`${label} | introHeld=${introHeld} revealWhileHeld=${revealHeld} ${revealHeld>2?"✅":"❌"} projectsReachable=${sawProject?"✅":"❌"} blank=${blank} ${blank<3?"✅":"❌"}`);
  await ctx.close();
}
await run("AFTER(refined)", true);
await b.close();
