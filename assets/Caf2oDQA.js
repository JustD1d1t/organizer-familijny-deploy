import{aF as w,i as S,t as r,v as d,x,z as n,A as t,B as g,y as v,O as e,P as B,b1 as V,l as I,al as A,a5 as P,X as L,a1 as N,ag as j,Y as $,b3 as E,L as z,o as F,R as M,Q as R,N as C,ao as U,Z as q,T as D,U as H,S as Q,V as W,W as X,aq as Y,ar as Z,$ as G,a9 as J}from"./Dllh6qvR.js";const K={class:"flex flex-col py-2 pl-6 pr-2 my-1 bg-white rounded-2xl shadow-2xl"},nn={class:"flex items-center"},tn={class:"flex flex-col grow"},on={key:0},en={__name:"single-list-item",props:{pantry:{type:Object,default:()=>{}}},setup(s){const a=s,i=w(),{removePantry:_,setCurrentPantry:u}=i,p=o=>{I(`/pantries/${o.id}`),u(o)},f=()=>{u(a.pantry),I(`/pantries/${a.pantry.id}/edit`)},m=S(()=>a.pantry.members.map(o=>o.nickname).join(", "));return(o,c)=>{const l=A,b=P,k=L,y=N,h=j,T=$,O=E;return r(),d("div",K,[x("div",nn,[x("div",tn,[n(l,{class:"flex-grow font-bold",onClick:c[0]||(c[0]=()=>p(s.pantry))},{default:t(()=>[g(v(s.pantry.name),1)]),_:1}),e(m).length?(r(),d("div",on,v(e(m)),1)):B("",!0)]),n(k,{id:"open-pantry-menu-"+s.pantry.id,class:"ml-auto",type:"tertiary"},{default:t(()=>[n(b,{size:"medium",icon:"ioniconsEllipsisVerticalOutline"in o?o.ioniconsEllipsisVerticalOutline:e(V)},null,8,["icon"])]),_:1},8,["id"]),n(O,{trigger:"open-pantry-menu-"+s.pantry.id,"trigger-action":"click",side:"bottom",alignment:"center","dismiss-on-select":!0},{default:t(()=>[n(T,{class:"ion-padding mr-8"},{default:t(()=>[n(h,null,{default:t(()=>[n(y,{onClick:f},{default:t(()=>[n(l,null,{default:t(()=>[g("Edytuj")]),_:1})]),_:1}),n(y,{onClick:c[1]||(c[1]=_n=>e(_)(s.pantry.id))},{default:t(()=>[n(l,null,{default:t(()=>[g("Usuń")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])])])}}},sn={key:0,class:"w-full flex justify-center items-center h-full"},an={key:1,class:"flex flex-col"},cn=x("h2",{class:"text-center"},"Twoje spiżarnie",-1),ln={key:0,class:"col-span-2 text-center"},rn={__name:"lists",setup(s){const a=w(),{getAllPantries:i}=a,{pantries:_,collaboratedPantries:u,isLoading:p}=z(a);return F(async()=>{await i()}),(f,m)=>{const o=U,c=en;return e(p)?(r(),d("div",sn,[n(o,{name:"lines-sharp"})])):(r(),d("div",an,[cn,!e(_)||!e(_).length?(r(),d("h3",ln," Nie posiadasz swoich spiżarni ")):B("",!0),(r(!0),d(M,null,R(e(_),l=>(r(),C(c,{key:l.id,pantry:l},null,8,["pantry"]))),128))]))}}},un={__name:"index",setup(s){const a=()=>{I("/pantries/new")};return(i,_)=>{const u=D,p=H,f=Q,m=W,o=X,c=rn,l=P,b=Y,k=Z,y=$,h=q;return r(),C(h,null,{default:t(()=>[n(o,{style:{background:"var(--ion-color-light)"}},{default:t(()=>[n(m,null,{default:t(()=>[n(p,{slot:"start"},{default:t(()=>[n(u,{text:"",icon:"ioniconsArrowBackOutline"in i?i.ioniconsArrowBackOutline:e(G)},null,8,["icon"])]),_:1}),n(f,null,{default:t(()=>[g("Spiżarnia")]),_:1})]),_:1})]),_:1}),n(y,{fullscreen:!0},{default:t(()=>[n(c),n(k,{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:t(()=>[n(b,{onClick:a},{default:t(()=>[n(l,{icon:"ioniconsAdd"in i?i.ioniconsAdd:e(J)},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{un as default};
