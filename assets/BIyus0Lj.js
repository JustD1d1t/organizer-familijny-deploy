import{u as $,aF as A,L as v,ac as U,r as c,i as j,N as r,A as e,aS as F,Z as P,t as i,z as o,O as n,B as _,a2 as Z,P as k,T as D,U as E,S as H,V as W,W as X,a4 as Y,ag as q,X as G,Y as J,$ as K}from"./C1Km0ovS.js";import{_ as Q}from"./BZ_2as7S.js";const ne={__name:"index",setup(ee){F();const w=$(),m=A(),{editShoppingList:g,leaveList:I}=m,{currentShoppingList:s}=v(m),y=U(),{uid:B}=v(y);c();const a=j(()=>B.value!==s.value.ownerId),p=c(a.value?[]:s.value.members),d=c(a.value?[]:s.value.membersIds),l=c(s.value.name),S=async()=>{await g(l.value,p.value,d.value),w.back()},L=(u,t)=>{p.value=t,d.value=u};return(u,t)=>{const x=D,V=E,z=H,N=W,T=X,C=Y,M=Q,O=q,f=G,h=J,R=P;return i(),r(R,null,{default:e(()=>[o(T,{style:{background:"var(--ion-color-light)"}},{default:e(()=>[o(N,null,{default:e(()=>[o(V,{slot:"start"},{default:e(()=>[o(x,{text:"",icon:"ioniconsArrowBackOutline"in u?u.ioniconsArrowBackOutline:n(K)},null,8,["icon"])]),_:1}),o(z,null,{default:e(()=>[_("Edytuj listę zakupową")]),_:1})]),_:1})]),_:1}),o(h,{fullscreen:!0},{default:e(()=>[o(O,{lines:"none",class:"mt-4"},{default:e(()=>[o(C,{label:"Nazwa listy zakupowej",type:"text",modelValue:n(l),"onUpdate:modelValue":t[0]||(t[0]=b=>Z(l)?l.value=b:null)},null,8,["modelValue"]),n(a)?k("",!0):(i(),r(M,{key:0,members:n(s).members,onToggleMember:L},null,8,["members"]))]),_:1}),n(a)?(i(),r(f,{key:0,onClick:t[1]||(t[1]=b=>n(I)()),class:"my-6 w-full"},{default:e(()=>[_(" Opuść listę ")]),_:1})):k("",!0),o(f,{onClick:S,class:"my-6 w-full"},{default:e(()=>[_(" Zapisz zmiany ")]),_:1})]),_:1})]),_:1})}}};export{ne as default};
