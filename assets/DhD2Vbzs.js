import{_ as U,aE as H,L as Q,r as h,i as Y,N as _,A as n,Z,t as e,z as t,O as s,B as b,a2 as $,v as c,Q as I,R as k,P as v,T as q,U as J,S as K,V as M,W as X,a4 as oo,ag as eo,aG as no,ao as to,Y as ao,$ as so,y as co,C as lo,D as ro,x as io,al as uo,a1 as _o,aF as po}from"./B0ZLNBRr.js";import{_ as mo}from"./DKioM2WT.js";import{u as go}from"./ZxR0iDOO.js";const yo=p=>(lo("data-v-9f930548"),p=p(),ro(),p),fo={key:0,class:"ion-padding",slot:"content"},ho={key:0,class:"w-full p-2 grid-cols-2 grid auto-rows-max overflow-auto"},Io={key:1,class:"w-full p-2 grid-cols-2 grid auto-rows-max overflow-auto"},ko={key:2,class:"background"},vo=yo(()=>io("span",null,"Aktualizacja listy",-1)),Co={__name:"index",setup(p){const{shoppingItems:C}=go(),w=H(),{handlePantryItem:B}=w,{currentPantry:d}=Q(w),l=h(""),m=h(""),g=h(!1),S=a=>a.toLowerCase().replace(/z/g,"[zżź]").replace(/s/g,"[sś]").replace(/c/g,"[cć]").replace(/l/g,"[lł]"),L=Y(()=>{const r=C.map(i=>i.items.map(f=>({name:f,category:i.category}))).flat(),y=S(l.value);return[{name:l.value.toLowerCase(),category:"bez kateogrii"},...r.filter(i=>i.name.toLowerCase().match(new RegExp(y)))]}),V=a=>{m.value=m.value===a?"":a},x=async(a,r)=>{g.value=!0,await B(a,r),g.value=!1};return(a,r)=>{const y=q,i=J,f=K,A=M,N=X,P=oo,T=eo,O=uo,R=_o,z=mo,W=po,E=no,j=to,D=ao,F=Z;return e(),_(F,null,{default:n(()=>[t(N,{style:{background:"var(--ion-color-light)"}},{default:n(()=>[t(A,null,{default:n(()=>[t(i,{slot:"start"},{default:n(()=>[t(y,{text:"",icon:"ioniconsArrowBackOutline"in a?a.ioniconsArrowBackOutline:s(so)},null,8,["icon"])]),_:1}),t(f,null,{default:n(()=>[b("Listy zakupowe")]),_:1})]),_:1})]),_:1}),t(D,{fullscreen:!0},{default:n(()=>[t(T,{lines:"none"},{default:n(()=>[t(P,{label:"Napisz czego szukasz",type:"text",modelValue:s(l),"onUpdate:modelValue":r[0]||(r[0]=o=>$(l)?l.value=o:null),placeholder:"Szukaj..."},null,8,["modelValue"])]),_:1}),s(l).length<3?(e(),_(E,{key:0,class:"shopping-accordion-group"},{default:n(()=>[(e(!0),c(k,null,I(s(C),o=>(e(),_(W,{key:o.category,value:o.category},{default:n(()=>[t(R,{slot:"header",color:"light",onClick:()=>V(o.category)},{default:n(()=>[t(O,null,{default:n(()=>[b(co(o.category),1)]),_:2},1024)]),_:2},1032,["onClick"]),s(d).items?(e(),c("div",fo,[o.category===s(m)?(e(),c("div",ho,[(e(!0),c(k,null,I(o.items,u=>(e(),_(z,{key:u,"shopping-item":u,active:s(d).items.some(G=>G.name===u),onClick:()=>x(u,o.category)},null,8,["shopping-item","active","onClick"]))),128))])):v("",!0)])):v("",!0)]),_:2},1032,["value"]))),128))]),_:1})):(e(),c("div",Io,[(e(!0),c(k,null,I(s(L),o=>(e(),_(z,{key:o,"shopping-item":o.name,active:s(d).items.some(u=>u.name===o.name),onClick:()=>x(o.name,o.category)},null,8,["shopping-item","active","onClick"]))),128))])),s(g)?(e(),c("div",ko,[t(j,{name:"lines-sharp"}),vo])):v("",!0)]),_:1})]),_:1})}}},bo=U(Co,[["__scopeId","data-v-9f930548"]]);export{bo as default};
