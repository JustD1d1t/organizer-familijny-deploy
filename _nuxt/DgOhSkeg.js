const __vite__fileDeps=["./DnOe5t-E.js","./B4ggqkCG.js","./entry.Ba8ku8eD.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{am as A,an as N,_ as O,aC as R,r as l,N as U,A as n,a1 as L,t as S,z as o,P as a,B as c,x as D,ah as M,ab as W,a7 as Z,U as q,a6 as z,a9 as H,T as $,V as F,W as G,ai as J,ae as K,aD as Q,a0 as X,a3 as Y}from"./B4ggqkCG.js";import{_ as oo}from"./CF2cZ6kp.js";import{a as eo,g as no}from"./CHVAF33P.js";A("Toast",{web:()=>N(()=>import("./DnOe5t-E.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(_=>new _.ToastWeb)});const to={class:"flex justify-center items-center h-full w-full"},ao={__name:"index",setup(_){const{displayToast:r}=Y(),p=R(),{resetPassword:d}=p,f=l(""),w=l(!1),t=l(""),s=l(""),I=async()=>{await W.open("person")},g=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase()),v=async()=>{if(s.value="",t.value||(s.value="Email jest wymagany."),g(t.value)||(s.value="Nieprawidłowy format email."),!s.value)try{const e=await d(t.value);if(e.error){r(e.error.message);return}r(e.message)}catch(e){r(e)}};return(e,i)=>{const b=Z,u=q,k=z,y=H,m=$,B=F,h=G,P=J,x=K,T=oo,C=Q,V=X,E=L;return S(),U(E,null,{default:n(()=>[o(h,{style:{background:"var(--ion-color-light)"}},{default:n(()=>[o(B,null,{default:n(()=>[o(u,{slot:"start"},{default:n(()=>[o(b,{text:"",icon:"ioniconsArrowBackOutline"in e?e.ioniconsArrowBackOutline:a(eo)},null,8,["icon"])]),_:1}),o(k,null,{default:n(()=>[c("Zresetuj hasło")]),_:1}),o(u,{slot:"end"},{default:n(()=>[o(m,{fill:"clear",onClick:I},{default:n(()=>[o(y,{slot:"icon-only",icon:"ioniconsPerson"in e?e.ioniconsPerson:a(no)},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1}),o(V,{fullscreen:!0},{default:n(()=>[D("div",to,[o(T,{class:"p-8 w-full"},{title:n(()=>[c("Zresetuj hasło")]),default:n(()=>[o(x,{lines:"none",class:"pb-4"},{default:n(()=>[o(P,{label:"Email",type:"email",modelValue:a(t),"onUpdate:modelValue":i[0]||(i[0]=j=>M(t)?t.value=j:null),error:a(s)},null,8,["modelValue","error"])]),_:1}),o(m,{class:"w-full mt-4",expand:"block",onClick:v},{default:n(()=>[c(" Resetuj hasło ")]),_:1})]),_:1})]),o(C,{"is-open":a(w),message:a(f),duration:2e3},null,8,["is-open","message"])]),_:1})]),_:1})}}},io=O(ao,[["__scopeId","data-v-3122ea7f"]]);export{io as default};