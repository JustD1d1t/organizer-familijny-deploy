const __vite__fileDeps=["./Dk5HhREZ.js","./DRa_VBAG.js","./entry.Ba2XJ7x3.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{at as V,au as P,_ as E,aN as N,r as s,N as j,A as t,a5 as A,t as C,z as o,P as _,B as u,x as R,aq as O,ad as U,U as L,a2 as S,V as $,W as q,X as W,$ as Z,T as z,a4 as D,af as H,a8 as X}from"./DRa_VBAG.js";import{_ as F}from"./Df9zNCoB.js";V("Toast",{web:()=>P(()=>import("./Dk5HhREZ.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(c=>new c.ToastWeb)});const G={class:"flex justify-center items-center h-full w-full"},J={__name:"index",setup(c){const{displayToast:r}=X(),i=N(),{resetPassword:m}=i;s(""),s(!1);const n=s(""),a=s(""),d=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase()),p=async()=>{if(a.value="",n.value||(a.value="Email jest wymagany."),d(n.value)||(a.value="Nieprawidłowy format email."),!a.value)try{const e=await m(n.value);if(e.error){r(e.error.message);return}r(e.message)}catch(e){r(e)}};return(e,l)=>{const f=U,w=L,v=S,I=$,b=q,x=W,B=Z,g=z,h=F,k=D,y=A;return C(),j(y,null,{default:t(()=>[o(b,{style:{background:"var(--ion-color-light)"}},{default:t(()=>[o(I,null,{default:t(()=>[o(w,{slot:"start"},{default:t(()=>[o(f,{text:"",icon:"ioniconsArrowBackOutline"in e?e.ioniconsArrowBackOutline:_(H)},null,8,["icon"])]),_:1}),o(v,null,{default:t(()=>[u("Zresetuj hasło")]),_:1})]),_:1})]),_:1}),o(k,{fullscreen:!0},{default:t(()=>[R("div",G,[o(h,{class:"p-8 w-full"},{title:t(()=>[u("Zresetuj hasło")]),default:t(()=>[o(B,{lines:"none",class:"pb-4"},{default:t(()=>[o(x,{label:"Email",type:"email",modelValue:_(n),"onUpdate:modelValue":l[0]||(l[0]=T=>O(n)?n.value=T:null),error:_(a)},null,8,["modelValue","error"])]),_:1}),o(g,{class:"w-full mt-4",onClick:p},{default:t(()=>[u(" Resetuj hasło ")]),_:1})]),_:1})])]),_:1})]),_:1})}}},Q=E(J,[["__scopeId","data-v-abe6a199"]]);export{Q as default};
