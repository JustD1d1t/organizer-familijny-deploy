import{u as T,at as O,M as R,r as m,i as A,N as p,A as e,aF as j,a2 as F,t as d,z as o,P as l,B as f,ah as P,Q as k,a8 as U,U as $,a7 as D,V as E,W as H,X as Q,$ as W,ai as X,a1 as Z}from"./CHh_xvd5.js";import{_ as q}from"./DeJgUTon.js";import{a as G}from"./CHVAF33P.js";const oe={__name:"index",setup(J){j();const w=T(),v=O(),{editShoppingList:I,leaveList:g}=v,{currentShoppingList:u}=R(v);m();const i=A(()=>localStorage.getItem("uid")!==u.value.ownerId),s=m(i.value?[]:u.value.members),r=m(i.value?[]:u.value.membersIds),c=m(u.value.name),y=async()=>{await I(c.value,s.value,r.value),w.back()},B=t=>{s.value.find(a=>a.id===t.id)?(s.value=s.value.filter(a=>a.id!==t.uid),r.value=r.value.filter(a=>a!==t.uid)):(s.value.push(t),r.value.push(t.uid))};return(t,n)=>{const a=U,M=$,x=D,L=E,S=H,V=Q,z=q,N=W,b=X,h=Z,C=F;return d(),p(C,null,{default:e(()=>[o(S,{style:{background:"var(--ion-color-light)"}},{default:e(()=>[o(L,null,{default:e(()=>[o(M,{slot:"start"},{default:e(()=>[o(a,{text:"",icon:"ioniconsArrowBackOutline"in t?t.ioniconsArrowBackOutline:l(G)},null,8,["icon"])]),_:1}),o(x,null,{default:e(()=>[f("Edytuj listę zakupową")]),_:1})]),_:1})]),_:1}),o(h,{fullscreen:!0},{default:e(()=>[o(N,{lines:"none",class:"mt-4"},{default:e(()=>[o(V,{label:"Nazwa listy zakupowej",type:"text",modelValue:l(c),"onUpdate:modelValue":n[0]||(n[0]=_=>P(c)?c.value=_:null)},null,8,["modelValue"]),l(i)?k("",!0):(d(),p(z,{key:0,members:l(s),onToggleMember:n[1]||(n[1]=_=>B(_))},null,8,["members"]))]),_:1}),l(i)?(d(),p(b,{key:0,onClick:n[2]||(n[2]=_=>l(g)()),class:"my-6 w-full"},{default:e(()=>[f(" Opuść listę ")]),_:1})):k("",!0),o(b,{onClick:y,class:"my-6 w-full"},{default:e(()=>[f(" Zapisz zmiany ")]),_:1})]),_:1})]),_:1})}}};export{oe as default};