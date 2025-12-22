import{r as h,j as e}from"./react-core.GeBYww9P.js";import{I as j}from"./ui-primitives.RydGoYDb.js";import"./accordion.CRn1YWsw.js";import"./visibility-hooks.BvpRwPEO.js";import"./engagement-hooks.DJKyoiTM.js";const f=t=>{if(typeof t!="number"||!Number.isFinite(t))return 0;const[,s]=t.toString().split(".");return s?s.length:0},g=(t,s)=>s>0?t.toFixed(s):Math.round(t).toString();function q({start:t=0,end:s,duration:a=2e3,className:r="",style:n,decimals:i,onComplete:o}){const[N,c]=h.useState(t),m=typeof i=="number"&&!Number.isNaN(i)?Math.max(0,i):Math.max(f(t),f(s));h.useEffect(()=>{let l;const x=s-t;if(x===0){c(s);return}const k=performance.now(),d=a<=0?0:a,u=M=>{const S=M-k,p=d===0?1:Math.min(S/d,1),_=t+x*p;c(_),p<1?l=requestAnimationFrame(u):o?.()};return l=requestAnimationFrame(u),()=>cancelAnimationFrame(l)},[t,s,a,o]);const b=g(s,m),y=Math.max(1,b.length),v=["counter-value","tabular-nums",r].filter(Boolean).join(" "),w={display:"inline-block",minWidth:`calc(${y}ch)`,...n};return e.jsx("span",{className:v,style:w,children:g(N,m)})}function A({url:t="yoursite.com",className:s=""}){return e.jsx("div",{className:`bg-text/10 rounded-lg p-3 ${s}`,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex gap-1.5 mr-2",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500/60"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500/60"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-500/60"})]}),e.jsxs("div",{className:"flex-1 flex items-center gap-2 bg-bg2 rounded-md px-3 py-1.5",children:[e.jsxs("div",{className:"flex items-center gap-1.5 primary-gradient rounded px-2 py-0.5",children:[e.jsx(j,{icon:"lu:lock",size:"sm",className:"text-white"}),e.jsx("span",{className:"text-xs font-medium text-white",children:"Secure"})]}),e.jsx("span",{className:"text-sm text-text/70",children:t})]})]})})}function E({title:t="Your Website",url:s="yourwebsite.com",description:a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",date:r="Dec 21, 2025",favicon:n="lu:globe",className:i=""}){return e.jsxs("div",{className:`relative bg-bg2 rounded-lg p-4 text-left border border-text/10 overflow-hidden ${i}`,children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-bg3 flex items-center justify-center shrink-0",children:e.jsx(j,{icon:n,size:"sm",className:"text-primary"})}),e.jsxs("div",{className:"flex flex-col leading-tight",children:[e.jsx("span",{className:"text-sm text-text",children:t}),e.jsx("span",{className:"text-xs text-text/50",children:s})]})]}),e.jsxs("h3",{className:"text-lg text-primary mb-1 inline-block animate-[titleHighlight_3s_ease-in-out_infinite]",children:[t," — Home"]}),e.jsxs("p",{className:"text-sm text-text/60 leading-relaxed",children:[e.jsx("span",{className:"text-text/50",children:r}),e.jsx("span",{className:"text-text/40 mx-1",children:"—"}),a,e.jsx("span",{className:"text-primary/80 ml-1 cursor-pointer hover:underline",children:"Read more"})]}),e.jsx("div",{className:"absolute pointer-events-none animate-[cursorMove_3s_ease-in-out_infinite]",style:{top:"50px",left:"-20px"},children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"drop-shadow-lg",children:e.jsx("path",{d:"M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z",fill:"white",stroke:"black",strokeWidth:"1"})})}),e.jsx("style",{children:`
        @keyframes cursorMove {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          40%, 70% {
            transform: translate(80px, 10px);
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          95% {
            transform: translate(80px, 10px);
            opacity: 0;
          }
        }
        @keyframes titleHighlight {
          0%, 35% {
            text-decoration: none;
          }
          40%, 75% {
            text-decoration: underline;
          }
          80%, 100% {
            text-decoration: none;
          }
        }
      `})]})}export{E as G,A as S,q as default};
