import{_ as x,an as w,M as B,N as s,A as o,a2 as C,t,z as e,B as _,P as r,v as d,S as T,R as v,a7 as S,V as L,W as P,$ as V,a1 as $,a9 as z,y as A,l as D,aK as R,Z as E}from"./B4jYTB7S.js";import{u as F}from"./0-YJ2wE6.js";const H={key:1},J={__name:"index",setup(K){const c=w(),{updateNotification:u,getNotifications:p}=c,{notifications:i}=B(c),m=async n=>{if(!n.read){const l={...n,read:!0};await u(l)}D(`/notifications/${n.id}`)};return F(async()=>{await p()},"$QpUlNwkcJc"),(n,l)=>{const f=S,k=L,I=P,g=R,y=E,N=V,b=$,h=C;return t(),s(h,null,{default:o(()=>[e(I,{style:{background:"var(--ion-color-light)"}},{default:o(()=>[e(k,null,{default:o(()=>[e(f,null,{default:o(()=>[_("Powiadomienia")]),_:1})]),_:1})]),_:1}),e(b,null,{default:o(()=>[r(i).length?(t(),s(N,{key:0,lines:"none"},{default:o(()=>[(t(!0),d(v,null,T(r(i),a=>(t(),s(y,{key:a.id,onClick:()=>m(a)},{default:o(()=>[e(g,{class:z([a.read?"":"font-bold"])},{default:o(()=>[_(A(a.title),1)]),_:2},1032,["class"])]),_:2},1032,["onClick"]))),128))]),_:1})):(t(),d("h2",H,"Brak powiadomień"))]),_:1})]),_:1})}}},U=x(J,[["__scopeId","data-v-9deeb96a"]]);export{U as default};
