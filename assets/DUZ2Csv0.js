import{au as w,i as V,t as r,v as d,x as I,z as n,A as t,B as g,y as v,P as e,Q as B,l as x,aK as A,aa as P,T as O,Z as N,$ as j,a1 as $,aQ as z,M as E,o as L,R as F,S as M,N as C,ad as Q,a2 as R,a8 as U,U as D,a7 as H,V as K,W,af as Z,ag as q}from"./B4jYTB7S.js";import{h as G,a as J,d as X}from"./CHVAF33P.js";const Y={class:"flex flex-col py-2 pl-6 pr-2 my-1 bg-white rounded-2xl shadow-2xl"},nn={class:"flex items-center"},tn={class:"flex flex-col grow"},on={key:0},en={__name:"single-list-item",props:{pantry:{type:Object,default:()=>{}}},setup(s){const a=s,i=w(),{removePantry:_,setCurrentPantry:u}=i,p=o=>{x(`/pantries/${o.id}`),u(o)},f=()=>{u(a.pantry),x(`/pantries/${a.pantry.id}/edit`)},m=V(()=>a.pantry.members.map(o=>o.nickname).join(", "));return(o,l)=>{const c=A,b=P,h=O,y=N,k=j,T=$,S=z;return r(),d("div",Y,[I("div",nn,[I("div",tn,[n(c,{class:"flex-grow font-bold",onClick:l[0]||(l[0]=()=>p(s.pantry))},{default:t(()=>[g(v(s.pantry.name),1)]),_:1}),e(m).length?(r(),d("div",on,v(e(m)),1)):B("",!0)]),n(h,{fill:"clear",id:"open-pantry-menu-"+s.pantry.id,class:"ml-auto",size:"small"},{default:t(()=>[n(b,{size:"medium",icon:"ioniconsEllipsisVerticalOutline"in o?o.ioniconsEllipsisVerticalOutline:e(G)},null,8,["icon"])]),_:1},8,["id"]),n(S,{trigger:"open-pantry-menu-"+s.pantry.id,"trigger-action":"click",side:"bottom",alignment:"center","dismiss-on-select":!0},{default:t(()=>[n(T,{class:"ion-padding mr-8"},{default:t(()=>[n(k,null,{default:t(()=>[n(y,{onClick:f},{default:t(()=>[n(c,null,{default:t(()=>[g("Edytuj")]),_:1})]),_:1}),n(y,{onClick:l[1]||(l[1]=_n=>e(_)(s.pantry.id))},{default:t(()=>[n(c,null,{default:t(()=>[g("Usuń")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])])])}}},sn={key:0,class:"w-full flex justify-center items-center h-full"},an={key:1,class:"flex flex-col"},ln=I("h2",{class:"text-center"},"Twoje spiżarnie",-1),cn={key:0,class:"col-span-2 text-center"},rn={__name:"lists",setup(s){const a=w(),{getAllPantries:i}=a,{pantries:_,collaboratedPantries:u,isLoading:p}=E(a);return L(async()=>{await i()}),(f,m)=>{const o=Q,l=en;return e(p)?(r(),d("div",sn,[n(o,{name:"lines-sharp"})])):(r(),d("div",an,[ln,!e(_)||!e(_).length?(r(),d("h3",cn," Nie posiadasz swoich spiżarni ")):B("",!0),(r(!0),d(F,null,M(e(_),c=>(r(),C(l,{key:c.id,pantry:c},null,8,["pantry"]))),128))]))}}},pn={__name:"index",setup(s){const a=()=>{x("/pantries/new")};return(i,_)=>{const u=U,p=D,f=H,m=K,o=W,l=rn,c=P,b=Z,h=q,y=$,k=R;return r(),C(k,null,{default:t(()=>[n(o,{style:{background:"var(--ion-color-light)"}},{default:t(()=>[n(m,null,{default:t(()=>[n(p,{slot:"start"},{default:t(()=>[n(u,{text:"",icon:"ioniconsArrowBackOutline"in i?i.ioniconsArrowBackOutline:e(J)},null,8,["icon"])]),_:1}),n(f,null,{default:t(()=>[g("Spiżarnia")]),_:1})]),_:1})]),_:1}),n(y,{fullscreen:!0},{default:t(()=>[n(l),n(h,{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:t(()=>[n(b,{onClick:a},{default:t(()=>[n(c,{icon:"ioniconsAdd"in i?i.ioniconsAdd:e(X)},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{pn as default};
