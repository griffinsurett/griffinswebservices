import{j as e}from"./react-core.D5E039p9.js";import{I as l}from"./ui-primitives.gCzb8rn1.js";import{u as c}from"./useMotionPreference.hUfwzWUI.js";import{D as x}from"./DecorativeWrapper.CH3Y6c_j.js";import"./visibility-hooks.Dmmo3rK9.js";import"./accordion.BDlZIC5Q.js";import"./engagement-hooks.Di3lS_CL.js";function j({title:s="Your Website",url:i="yourwebsite.com",description:r="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",date:a="Dec 21, 2025",favicon:o="lu:globe",className:n=""}){const t=c();return e.jsxs(x,{className:`relative bg-bg2 rounded-lg p-4 text-left border border-text/10 overflow-hidden ${n}`,children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-bg3 flex items-center justify-center shrink-0",children:e.jsx(l,{icon:o,size:"sm",className:"text-primary"})}),e.jsxs("div",{className:"flex flex-col leading-tight",children:[e.jsx("span",{className:"text-sm text-text",children:s}),e.jsx("span",{className:"text-xs text-text/70",children:i})]})]}),e.jsxs("h3",{className:`text-lg text-primary mb-1 inline-block ${t?"underline":"animate-[titleHighlight_3s_ease-in-out_infinite]"}`,children:[s," — Home"]}),e.jsxs("p",{className:"text-sm text-text/60 leading-relaxed",children:[e.jsx("span",{className:"text-text/70",children:a}),e.jsx("span",{className:"text-text/40 mx-1",children:"—"}),r,e.jsx("span",{className:"text-primary ml-1 cursor-pointer hover:underline",children:"Read more"})]}),e.jsx("div",{className:`absolute pointer-events-none ${t?"":"animate-[cursorMove_3s_ease-in-out_infinite]"}`,style:{top:"50px",left:"-20px",transform:t?"translate(80px, 10px)":void 0},children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"drop-shadow-lg",children:e.jsx("path",{d:"M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z",fill:"white",stroke:"black",strokeWidth:"1"})})}),e.jsx("style",{children:`
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
      `})]})}export{j as default};
