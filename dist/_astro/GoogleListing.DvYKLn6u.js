import{j as e}from"./react-core.LlkHSr3O.js";import{u as l,I as c}from"./ui-primitives.BKGTeMpG.js";import{D as x}from"./DecorativeWrapper.BiMqsuck.js";import"./visibility-hooks.DxJd0gvu.js";import"./scroll-observer.BBND9qH0.js";function f({title:t="Your Website",url:i="yourwebsite.com",description:a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",date:r="Dec 21, 2025",favicon:n="lu:globe",className:o=""}){const s=l();return e.jsxs(x,{className:`relative bg-bg2 rounded-lg p-4 text-left border border-text/10 overflow-hidden select-none pointer-events-none ${o}`,children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-bg3 flex items-center justify-center shrink-0",children:e.jsx(c,{icon:n,size:"sm",className:"text-primary"})}),e.jsxs("div",{className:"flex flex-col leading-tight",children:[e.jsx("span",{className:"text-sm text-text",children:t}),e.jsx("span",{className:"text-xs text-text/70",children:i})]})]}),e.jsxs("h3",{className:`text-lg text-primary mb-1 inline-block ${s?"underline":"animate-[titleHighlight_3s_ease-in-out_infinite]"}`,children:[t," — Home"]}),e.jsxs("p",{className:"text-sm text-text/60 leading-relaxed",children:[e.jsx("span",{className:"text-text/70",children:r}),e.jsx("span",{className:"text-text/40 mx-1",children:"—"}),a,e.jsx("span",{className:"text-primary ml-1",children:"Read more"})]}),!s&&e.jsx("div",{className:"absolute pointer-events-none animate-[cursorMove_3s_ease-in-out_infinite]",style:{top:"50px",left:"-20px"},children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"drop-shadow-lg",children:e.jsx("path",{d:"M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z",fill:"white",stroke:"black",strokeWidth:"1"})})}),e.jsx("style",{children:`
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
      `})]})}export{f as default};
