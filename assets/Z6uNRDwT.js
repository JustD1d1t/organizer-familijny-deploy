import{_ as F,au as G,M as H,r as f,i as K,N as _,A as t,a2 as M,t as e,z as n,B as S,P as a,ai as O,v as s,S as h,R as I,Q as v,a7 as Q,V as U,W as X,X as Z,$,aO as q,ae as J,a1 as Y,y as oo,C as eo,D as to,x as no,aK as ao,Z as so,aP as co}from"./WOMjux0z.js";import{_ as lo}from"./B-kIUlQW.js";import{u as ro}from"./9Fza2Wnk.js";const io=p=>(eo("data-v-417236dd"),p=p(),to(),p),uo={key:0,class:"ion-padding",slot:"content"},_o={key:0,class:"w-full p-2 grid-cols-2 grid auto-rows-max overflow-auto"},po={key:1,class:"w-full p-2 grid-cols-2 grid auto-rows-max overflow-auto"},mo={key:2,class:"background"},go=io(()=>no("span",null,"Aktualizacja listy",-1)),yo={__name:"index",setup(p){const{shoppingItems:k}=ro(),C=G(),{handlePantryItem:b}=C,{currentPantry:d}=H(C),c=f(""),m=f(""),g=f(!1),z=K(()=>{const r=k.map(i=>i.items.map(y=>({name:y,category:i.category}))).flat();return[{name:c.value.toLowerCase(),category:"bez kateogrii"},...r.filter(i=>i.name.toLowerCase().includes(c.value.toLowerCase()))]}),L=l=>{m.value=m.value===l?"":l},w=async(l,r)=>{g.value=!0,await b(l,r),g.value=!1};return(l,r)=>{const i=Q,y=U,V=X,P=Z,B=$,N=ao,A=so,x=lo,T=co,W=q,R=J,j=Y,D=M;return e(),_(D,null,{default:t(()=>[n(V,{style:{background:"var(--ion-color-light)"}},{default:t(()=>[n(y,null,{default:t(()=>[n(i,null,{default:t(()=>[S("Listy zakupowe")]),_:1})]),_:1})]),_:1}),n(j,{fullscreen:!0},{default:t(()=>[n(B,{lines:"none"},{default:t(()=>[n(P,{label:"Napisz czego szukasz",type:"text",modelValue:a(c),"onUpdate:modelValue":r[0]||(r[0]=o=>O(c)?c.value=o:null),placeholder:"Szukaj..."},null,8,["modelValue"])]),_:1}),a(c).length<3?(e(),_(W,{key:0,class:"shopping-accordion-group"},{default:t(()=>[(e(!0),s(I,null,h(a(k),o=>(e(),_(T,{key:o.category,value:o.category},{default:t(()=>[n(A,{slot:"header",color:"light",onClick:()=>L(o.category)},{default:t(()=>[n(N,null,{default:t(()=>[S(oo(o.category),1)]),_:2},1024)]),_:2},1032,["onClick"]),a(d).items?(e(),s("div",uo,[o.category===a(m)?(e(),s("div",_o,[(e(!0),s(I,null,h(o.items,u=>(e(),_(x,{key:u,"shopping-item":u,active:a(d).items.some(E=>E.name===u),onClick:()=>w(u,o.category)},null,8,["shopping-item","active","onClick"]))),128))])):v("",!0)])):v("",!0)]),_:2},1032,["value"]))),128))]),_:1})):(e(),s("div",po,[(e(!0),s(I,null,h(a(z),o=>(e(),_(x,{key:o,"shopping-item":o.name,active:a(d).items.some(u=>u.name===o.name),onClick:()=>w(o.name,o.category)},null,8,["shopping-item","active","onClick"]))),128))])),a(g)?(e(),s("div",mo,[n(R,{name:"lines-sharp"}),go])):v("",!0)]),_:1})]),_:1})}}},vo=F(yo,[["__scopeId","data-v-417236dd"]]);export{vo as default};
