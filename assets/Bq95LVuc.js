import{as as w,i as S,t as r,v as d,x as I,z as n,A as t,B as g,y as v,P as e,Q as B,l as x,aI as V,a9 as P,T as A,Y as N,ae as j,a0 as C,aO as z,M as E,o as L,R as F,S as M,N as T,ac as R,a1 as U,a7 as D,U as H,a6 as Q,V as W,W as Y,af as q,ag as G}from"./idRAp1hA.js";import{h as J,a as K,d as X}from"./CQt0DnLH.js";const Z={class:"flex flex-col py-2 pl-6 pr-2 my-1 bg-white rounded-2xl shadow-2xl"},nn={class:"flex items-center"},tn={class:"flex flex-col grow"},on={key:0},en={__name:"single-list-item",props:{pantry:{type:Object,default:()=>{}}},setup(s){const a=s,i=w(),{removePantry:_,setCurrentPantry:u}=i,p=o=>{x(`/pantries/${o.id}`),u(o)},f=()=>{u(a.pantry),x(`/pantries/${a.pantry.id}/edit`)},m=S(()=>a.pantry.members.map(o=>o.nickname).join(", "));return(o,l)=>{const c=V,b=P,h=A,y=N,k=j,$=C,O=z;return r(),d("div",Z,[I("div",nn,[I("div",tn,[n(c,{class:"flex-grow font-bold",onClick:l[0]||(l[0]=()=>p(s.pantry))},{default:t(()=>[g(v(s.pantry.name),1)]),_:1}),e(m).length?(r(),d("div",on,v(e(m)),1)):B("",!0)]),n(h,{fill:"clear",id:"open-pantry-menu-"+s.pantry.id,class:"ml-auto",size:"small"},{default:t(()=>[n(b,{size:"medium",icon:"ioniconsEllipsisVerticalOutline"in o?o.ioniconsEllipsisVerticalOutline:e(J)},null,8,["icon"])]),_:1},8,["id"]),n(O,{trigger:"open-pantry-menu-"+s.pantry.id,"trigger-action":"click",side:"bottom",alignment:"center","dismiss-on-select":!0},{default:t(()=>[n($,{class:"ion-padding mr-8"},{default:t(()=>[n(k,null,{default:t(()=>[n(y,{onClick:f},{default:t(()=>[n(c,null,{default:t(()=>[g("Edytuj")]),_:1})]),_:1}),n(y,{onClick:l[1]||(l[1]=_n=>e(_)(s.pantry.id))},{default:t(()=>[n(c,null,{default:t(()=>[g("Usuń")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])])])}}},sn={key:0,class:"w-full flex justify-center items-center h-full"},an={key:1,class:"flex flex-col"},ln=I("h2",{class:"text-center"},"Twoje spiżarnie",-1),cn={key:0,class:"col-span-2 text-center"},rn={__name:"lists",setup(s){const a=w(),{getAllPantries:i}=a,{pantries:_,collaboratedPantries:u,isLoading:p}=E(a);return L(async()=>{await i()}),(f,m)=>{const o=R,l=en;return e(p)?(r(),d("div",sn,[n(o,{name:"lines-sharp"})])):(r(),d("div",an,[ln,!e(_)||!e(_).length?(r(),d("h3",cn," Nie posiadasz swoich spiżarni ")):B("",!0),(r(!0),d(F,null,M(e(_),c=>(r(),T(l,{key:c.id,pantry:c},null,8,["pantry"]))),128))]))}}},pn={__name:"index",setup(s){const a=()=>{x("/pantries/new")};return(i,_)=>{const u=D,p=H,f=Q,m=W,o=Y,l=rn,c=P,b=q,h=G,y=C,k=U;return r(),T(k,null,{default:t(()=>[n(o,null,{default:t(()=>[n(m,{translucent:!0},{default:t(()=>[n(p,{slot:"start"},{default:t(()=>[n(u,{text:"",icon:"ioniconsArrowBackOutline"in i?i.ioniconsArrowBackOutline:e(K)},null,8,["icon"])]),_:1}),n(f,null,{default:t(()=>[g("Spiżarnia")]),_:1})]),_:1})]),_:1}),n(y,{fullscreen:!0},{default:t(()=>[n(l),n(h,{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:t(()=>[n(b,{onClick:a},{default:t(()=>[n(c,{icon:"ioniconsAdd"in i?i.ioniconsAdd:e(X)},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{pn as default};
