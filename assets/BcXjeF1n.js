import{aB as $,M as j,r as k,i as A,o as D,N as I,A as n,a2 as O,t as r,z as e,P as a,B as u,aH as p,aI as d,x as w,ai as R,v as U,S as H,R as M,a8 as P,U as W,a7 as Z,V as E,W as F,ae as G,X as K,a1 as X,y as q,l as J,aK as Q,T as Y,Z as ee}from"./WOMjux0z.js";import{_ as ne}from"./DKbOpMc5.js";import{a as te}from"./CHVAF33P.js";const oe={class:"w-full flex flex-col justify-center items-center h-full"},ae=w("span",null,"ładowanie sklepów",-1),re={__name:"index",setup(se){const m=$(),{setShops:B}=m,{shops:t}=j(m),c=k(!1),l=k(""),v=A(()=>t==null?void 0:t.value.filter(o=>o.title.toLowerCase().includes(l.value.toLowerCase()))),x=o=>{const i=t.value.findIndex(_=>_.title===o);J(`/newspaper/${i}`)};return D(()=>{t!=null&&t.value.length||B()}),(o,i)=>{const _=P,g=W,b=Z,h=E,y=F,S=G,T=K,f=ne,V=Q,z=Y,C=ee,L=X,N=O;return r(),I(N,null,{default:n(()=>[e(y,{style:{background:"var(--ion-color-light)"}},{default:n(()=>[e(h,null,{default:n(()=>[e(g,{slot:"start"},{default:n(()=>[e(_,{text:"",icon:"ioniconsArrowBackOutline"in o?o.ioniconsArrowBackOutline:a(te)},null,8,["icon"])]),_:1}),e(b,null,{default:n(()=>[u("Gazetki")]),_:1})]),_:1})]),_:1}),e(L,null,{default:n(()=>[p(w("div",oe,[e(S,{name:"lines-sharp"}),ae],512),[[d,a(c)]]),p(e(f,null,{default:n(()=>[e(T,{label:"Wyszukaj gazetki",type:"text",placeholder:"Szukaj...",modelValue:a(l),"onUpdate:modelValue":i[0]||(i[0]=s=>R(l)?l.value=s:null)},null,8,["modelValue"])]),_:1},512),[[d,!a(c)]]),p(e(f,null,{default:n(()=>[(r(!0),U(M,null,H(a(v),s=>(r(),I(C,{key:s.title},{default:n(()=>[e(V,null,{default:n(()=>[u(q(s.title),1)]),_:2},1024),e(z,{type:"tertiary",onClick:le=>x(s.title),fill:"clear"},{default:n(()=>[u(" Zobacz ")]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1},512),[[d,!a(c)]])]),_:1})]),_:1})}}};export{re as default};
