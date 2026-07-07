import { chromium } from 'playwright-core';
const URL='http://localhost:9999';
const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const errs=[];
async function check(w, reduced, tag){
  const p = await b.newPage({ viewport:{width:w,height:900} });
  p.on('console',m=>{if(m.type()==='error')errs.push(tag+': '+m.text());});
  await p.goto(URL+'/', {waitUntil:'networkidle'}); await p.waitForTimeout(800);
  if(reduced){ await p.evaluate(()=>document.documentElement.setAttribute('data-a11y-motion','reduced')); await p.waitForTimeout(800); }
  const s = await p.evaluate(()=>{
    const sec=document.querySelector('[data-filmstrip]');
    const track=sec.querySelector('[data-filmstrip-track]');
    const intro=sec.querySelector('.fs-panel--intro');
    const proj=sec.querySelector('.fs-panel--project');
    const card=sec.querySelector('.fs-card-rise');
    const ts=getComputedStyle(track);
    return {
      hasStackClass: sec.classList.contains('fs-reduce-stack'),
      trackDisplay: ts.display, trackDir: ts.flexDirection,
      introSticky: getComputedStyle(intro).position,
      cardOpacity: getComputedStyle(card).opacity,
      hiddenFocusable: [...sec.querySelectorAll('.fs-card-rise')].filter(c=>parseFloat(getComputedStyle(c).opacity)<0.05 && c.querySelector('a,button')).length,
    };
  });
  console.log(tag, JSON.stringify(s));
  await p.close();
}
await check(1280,false,'desktop+motion ');
await check(1280,true, 'desktop+reduced');
await check(390, false,'mobile         ');
console.log('errors:', errs.slice(0,4));
await b.close();
