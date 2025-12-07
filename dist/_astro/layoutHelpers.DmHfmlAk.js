function t(r){return r?typeof r=="string"?r.startsWith("@/")?r.replace("@/","/src/"):r:r.src?typeof r.src=="string"?r.src:r.src.src?r.src.src:r.src:"":""}export{t as g};
