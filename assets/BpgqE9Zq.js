import{u as h,at as O,M as R,r as m,i as A,N as p,A as e,aF as $,a2 as j,t as d,z as o,P as a,B as f,ai as F,Q as k,a8 as P,U,a7 as D,V as E,W as H,X as Q,$ as W,T as X,a1 as Z}from"./WOMjux0z.js";import{_ as q}from"./Cmpae8HE.js";import{a as G}from"./CHVAF33P.js";const oe={__name:"index",setup(J){$();const w=h(),v=O(),{editShoppingList:I,leaveList:g}=v,{currentShoppingList:l}=R(v);m();const i=A(()=>localStorage.getItem("uid")!==l.value.ownerId),u=m(i.value?[]:l.value.members),r=m(i.value?[]:l.value.membersIds),c=m(l.value.name),y=async()=>{await I(c.value,u.value,r.value),w.back()},B=t=>{u.value.find(s=>s.id===t.id)?(u.value=u.value.filter(s=>s.id!==t.uid),r.value=r.value.filter(s=>s!==t.uid)):(u.value.push(t),r.value.push(t.uid))};return(t,n)=>{const s=P,M=U,x=D,L=E,S=H,V=Q,z=q,N=W,b=X,T=Z,C=j;return d(),p(C,null,{default:e(()=>[o(S,{style:{background:"var(--ion-color-light)"}},{default:e(()=>[o(L,null,{default:e(()=>[o(M,{slot:"start"},{default:e(()=>[o(s,{text:"",icon:"ioniconsArrowBackOutline"in t?t.ioniconsArrowBackOutline:a(G)},null,8,["icon"])]),_:1}),o(x,null,{default:e(()=>[f("Edytuj listę zakupową")]),_:1})]),_:1})]),_:1}),o(T,{fullscreen:!0},{default:e(()=>[o(N,{lines:"none",class:"mt-4"},{default:e(()=>[o(V,{label:"Nazwa listy zakupowej",type:"text",modelValue:a(c),"onUpdate:modelValue":n[0]||(n[0]=_=>F(c)?c.value=_:null)},null,8,["modelValue"]),a(i)?k("",!0):(d(),p(z,{key:0,members:a(l).members,onToggleMember:n[1]||(n[1]=_=>B(_))},null,8,["members"]))]),_:1}),a(i)?(d(),p(b,{key:0,onClick:n[2]||(n[2]=_=>a(g)()),class:"my-6 w-full"},{default:e(()=>[f(" Opuść listę ")]),_:1})):k("",!0),o(b,{onClick:y,class:"my-6 w-full"},{default:e(()=>[f(" Zapisz zmiany ")]),_:1})]),_:1})]),_:1})}}};export{oe as default};
