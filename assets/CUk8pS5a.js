import{bg as i,bh as a,bi as c,bj as d,bk as l}from"./B4jYTB7S.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const h=()=>{const e=window;e.addEventListener("statusTap",()=>{i(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=a(n);t&&new Promise(r=>c(t,r)).then(()=>{d(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{h as startStatusTap};
