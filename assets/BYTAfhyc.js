import{_ as x,at as w,M as B,N as s,A as o,a5 as C,t,z as e,B as _,P as r,v as d,S as T,R as v,a2 as S,V as L,W as P,$ as V,a4 as $,ag as z,y as A,l as D,ad as R,Z as E}from"./BClyMcC6.js";import{u as F}from"./iBkv5e-D.js";const H={key:1},J={__name:"index",setup(M){const c=w(),{updateNotification:u,getNotifications:p}=c,{notifications:i}=B(c),m=async a=>{if(!a.read){const l={...a,read:!0};await u(l)}D(`/notifications/${a.id}`)};return F(async()=>{await p()},"$QpUlNwkcJc"),(a,l)=>{const f=S,k=L,g=P,I=R,y=E,N=V,b=$,h=C;return t(),s(h,null,{default:o(()=>[e(g,{style:{background:"var(--ion-color-light)"}},{default:o(()=>[e(k,null,{default:o(()=>[e(f,null,{default:o(()=>[_("Powiadomienia")]),_:1})]),_:1})]),_:1}),e(b,null,{default:o(()=>[r(i).length?(t(),s(N,{key:0,lines:"none"},{default:o(()=>[(t(!0),d(v,null,T(r(i),n=>(t(),s(y,{key:n.id,onClick:()=>m(n)},{default:o(()=>[e(I,{class:z([n.read?"":"font-bold"])},{default:o(()=>[_(A(n.title),1)]),_:2},1032,["class"])]),_:2},1032,["onClick"]))),128))]),_:1})):(t(),d("h2",H,"Brak powiadomień"))]),_:1})]),_:1})}}},W=x(J,[["__scopeId","data-v-9deeb96a"]]);export{W as default};
