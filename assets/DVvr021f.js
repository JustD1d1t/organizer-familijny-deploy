import{am as U,M as d,an as h,aA as j,i as N,N as m,A as t,aD as E,a1 as P,t as c,z as r,P as n,B as f,y as S,Q as p,x as R,v as Z,a6 as $,V as H,W as O,T as Q,a0 as W}from"./idRAp1hA.js";const q={key:0,class:"w-full flex justify-between flex-wrap"},L={__name:"index",setup(G){const w=U(),{updateNotification:x,sendNotification:y}=w,{notifications:B}=d(w),v=h(),{updateMembers:k,getFamilyDetails:D}=v,{familyMembersDetails:s,familyMembers:C}=d(v),T=j(),{email:z}=d(T),V=E().params,u=localStorage.getItem("uid"),e=N(()=>B.value.find(o=>o.id===V.id)),I=N(()=>z.value!==""?z.value:localStorage.getItem("email")),b=async o=>{const a={...e.value,accepted:o};await D(e.value.ownerId),await x(a);const l=[...s.value].find(i=>i.id===u);e.value.accepted=o,o?(l&&(l.status="accepted"),await k(s.value,[...C.value,u],e.value.ownerId),await y({title:`Użytkownik "${I.value}" zaakceptował zaproszenie do rodziny`,content:"Zaproszenie do listy nie zostało zaakceptowane"},e.value.ownerId)):(await y({title:`Użytkownik "${I.value}" nie zaakceptował zaproszenie do rodziny`,content:"Zaproszenie do listy zostało nie zaakceptowane"},e.value.ownerId),s=s.filter(i=>i.id!==u),await k(s,_,e.value.ownerId))};return(o,a)=>{const g=$,l=H,i=O,M=Q,A=W,F=P;return c(),m(F,null,{default:t(()=>[r(i,null,{default:t(()=>[r(l,null,{default:t(()=>[n(e)?(c(),m(g,{key:0},{default:t(()=>[f(S(n(e).title),1)]),_:1})):p("",!0)]),_:1})]),_:1}),n(e)?(c(),m(A,{key:0},{default:t(()=>[R("div",null,S(n(e).content),1),n(e).type==="invitation-to-family"&&n(e).accepted===void 0?(c(),Z("div",q,[r(M,{onClick:a[0]||(a[0]=()=>b(!1)),color:"danger"},{default:t(()=>[f("Odrzuć")]),_:1}),r(M,{onClick:a[1]||(a[1]=()=>b(!0)),color:"success"},{default:t(()=>[f("Akceptuj")]),_:1})])):p("",!0)]),_:1})):p("",!0)]),_:1})}}};export{L as default};
