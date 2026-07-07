import { chromium } from 'playwright-core';
const URL='http://localhost:10000';
const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const p = await b.newPage({ viewport:{width:1280,height:900} });
const errs=[]; p.on('pageerror',e=>errs.push(e.message.split(String.fromCharCode(10))[0]));
await p.goto(URL+'/', {waitUntil:'networkidle'}); await p.waitForTimeout(1200);

// Bring the pinned section fully into view (its rect.top → 0 while pinned)
await p.evaluate(()=>{const s=document.querySelector('[data-filmstrip]');window.scrollTo(0, window.scrollY + s.getBoundingClientRect().top);});
await p.waitForTimeout(400);
// mid-scrub: scroll a bit further so we're partway through the pin
await p.evaluate(()=>window.scrollBy(0, 1000)); await p.waitForTimeout(500);
const before=await p.evaluate(()=>{const r=document.querySelector('[data-filmstrip]').getBoundingClientRect();return {topVp:Math.round(r.top), onScreen:(r.top<window.innerHeight && r.bottom>0)};});
console.log('BEFORE (mid-pin):', JSON.stringify(before));

await p.evaluate(()=>document.documentElement.setAttribute('data-a11y-motion','reduced'));
await p.waitForTimeout(800);
const after=await p.evaluate(()=>{const s=document.querySelector('[data-filmstrip]');const r=s.getBoundingClientRect();return {topVp:Math.round(r.top), stacked:s.classList.contains('fs-reduce-stack'), grid:getComputedStyle(s.querySelector('[data-filmstrip-track]')).display};});
console.log('AFTER (settled):', JSON.stringify(after));
console.log('CLEAN LANDING (section top ~0)?', Math.abs(after.topVp) < 60);
console.log('errors:', errs.filter(e=>!/Hydration/.test(e)).slice(0,3));
await b.close();
