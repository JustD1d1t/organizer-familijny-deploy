import{u as L,ac as R,L as f,aG as U,r as b,i as $,N as l,A as e,Z as j,t as c,z as n,O as a,B as r,a2 as D,P as k,T as F,U as G,S as H,V as W,W as X,b0 as Y,a1 as Z,ag as q,X as E,Y as J,$ as K}from"./C1Km0ovS.js";import{_ as Q}from"./BZ_2as7S.js";const oe={__name:"index",setup(ee){const u=L(),y=R(),{uid:w}=f(y),i=U(),{editPantry:I}=i,{currentPantry:o}=f(i),s=b(o.value.name),_=b(o.value.members),v=async()=>{const t={...o.value,name:s.value,members:_.value};await I(t),u.back()},B=t=>{_.value=t},m=$(()=>o.value.ownerId!==w.value),P=async()=>{await leaveList(),u.back()};return(t,p)=>{const g=F,S=G,V=H,x=W,N=X,T=Y,C=Z,O=Q,A=q,d=E,M=J,h=j;return c(),l(h,null,{default:e(()=>[n(N,{style:{background:"var(--ion-color-light)"}},{default:e(()=>[n(x,null,{default:e(()=>[n(S,{slot:"start"},{default:e(()=>[n(g,{text:"",icon:"ioniconsArrowBackOutline"in t?t.ioniconsArrowBackOutline:a(K)},null,8,["icon"])]),_:1}),n(V,null,{default:e(()=>[r("Spiżarnia")]),_:1})]),_:1})]),_:1}),n(M,{fullscreen:!0},{default:e(()=>[n(A,{lines:"none",class:"mt-4"},{default:e(()=>[n(C,null,{default:e(()=>[n(T,{label:"Nazwa spiżarni","label-placement":"floating",ref:"input",type:"text",modelValue:a(s),"onUpdate:modelValue":p[0]||(p[0]=z=>D(s)?s.value=z:null)},null,8,["modelValue"])]),_:1}),a(m)?k("",!0):(c(),l(O,{key:0,members:a(o).members,onToggleMember:B},null,8,["members"]))]),_:1}),a(m)?(c(),l(d,{key:0,class:"my-6 w-full",onClick:P},{default:e(()=>[r(" Opuść spiżarnię ")]),_:1})):k("",!0),n(d,{onClick:v,class:"my-6 w-full"},{default:e(()=>[r("Aktualizuj spiżarnię")]),_:1})]),_:1})]),_:1})}}};export{oe as default};
