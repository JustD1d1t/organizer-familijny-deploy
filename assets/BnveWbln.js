const __vite__fileDeps=["./C-5BRr6N.js","./C1Km0ovS.js","./entry.C8XLQmWT.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{aA as V,aB as A,_ as E,ac as P,r as s,N as j,A as t,Z as C,t as N,z as o,O as _,B as c,x as O,a2 as R,T as S,U,S as L,V as Z,W as $,a4 as W,ag as q,X as z,Y as D,$ as H,ai as X}from"./C1Km0ovS.js";import{_ as Y}from"./DYAgSpxb.js";V("Toast",{web:()=>A(()=>import("./C-5BRr6N.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(u=>new u.ToastWeb)});const F={class:"flex justify-center items-center h-full w-full"},G={__name:"index",setup(u){const{displayToast:r}=X(),i=P(),{resetPassword:m}=i;s(""),s(!1);const n=s(""),a=s(""),d=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase()),p=async()=>{if(a.value="",n.value||(a.value="Email jest wymagany."),d(n.value)||(a.value="Nieprawidłowy format email."),!a.value)try{const e=await m(n.value);if(e.error){r(e.error.message);return}r(e.message)}catch(e){r(e)}};return(e,l)=>{const f=S,w=U,v=L,B=Z,I=$,b=W,g=q,x=z,h=Y,k=D,y=C;return N(),j(y,null,{default:t(()=>[o(I,{style:{background:"var(--ion-color-light)"}},{default:t(()=>[o(B,null,{default:t(()=>[o(w,{slot:"start"},{default:t(()=>[o(f,{text:"",icon:"ioniconsArrowBackOutline"in e?e.ioniconsArrowBackOutline:_(H)},null,8,["icon"])]),_:1}),o(v,null,{default:t(()=>[c("Zresetuj hasło")]),_:1})]),_:1})]),_:1}),o(k,{fullscreen:!0},{default:t(()=>[O("div",F,[o(h,{class:"p-8 w-full"},{title:t(()=>[c("Zresetuj hasło")]),default:t(()=>[o(g,{lines:"none",class:"pb-4"},{default:t(()=>[o(b,{label:"Email",type:"email",modelValue:_(n),"onUpdate:modelValue":l[0]||(l[0]=T=>R(n)?n.value=T:null),error:_(a)},null,8,["modelValue","error"])]),_:1}),o(x,{class:"w-full mt-4",onClick:p},{default:t(()=>[c(" Resetuj hasło ")]),_:1})]),_:1})])]),_:1})]),_:1})}}},M=E(G,[["__scopeId","data-v-abe6a199"]]);export{M as default};
