import{_ as q,aC as E,M as F,r as f,i as G,N as u,A as t,a5 as H,t as e,z as n,B as S,P as a,aq as M,v as s,S as h,R as I,Q as k,a2 as Q,V as U,W as X,X as $,$ as J,aZ as K,ak as O,a4 as Y,y as oo,C as eo,D as to,x as no,ae as ao,Z as so,a_ as co}from"./DRa_VBAG.js";import{_ as lo}from"./NdafCNgs.js";import{u as ro}from"./YQiM4Bel.js";const io=p=>(eo("data-v-417236dd"),p=p(),to(),p),_o={key:0,class:"ion-padding",slot:"content"},uo={key:0,class:"w-full p-2 grid-cols-2 grid auto-rows-max overflow-auto"},po={key:1,class:"w-full p-2 grid-cols-2 grid auto-rows-max overflow-auto"},mo={key:2,class:"background"},go=io(()=>no("span",null,"Aktualizacja listy",-1)),yo={__name:"index",setup(p){const{shoppingItems:v}=ro(),C=E(),{handlePantryItem:b}=C,{currentPantry:d}=F(C),c=f(""),m=f(""),g=f(!1),z=G(()=>{const r=v.map(i=>i.items.map(y=>({name:y,category:i.category}))).flat();return[{name:c.value.toLowerCase(),category:"bez kateogrii"},...r.filter(i=>i.name.toLowerCase().includes(c.value.toLowerCase()))]}),L=l=>{m.value=m.value===l?"":l},w=async(l,r)=>{g.value=!0,await b(l,r),g.value=!1};return(l,r)=>{const i=Q,y=U,V=X,B=$,N=J,P=ao,A=so,x=lo,T=co,W=K,R=O,j=Y,D=H;return e(),u(D,null,{default:t(()=>[n(V,{style:{background:"var(--ion-color-light)"}},{default:t(()=>[n(y,null,{default:t(()=>[n(i,null,{default:t(()=>[S("Listy zakupowe")]),_:1})]),_:1})]),_:1}),n(j,{fullscreen:!0},{default:t(()=>[n(N,{lines:"none"},{default:t(()=>[n(B,{label:"Napisz czego szukasz",type:"text",modelValue:a(c),"onUpdate:modelValue":r[0]||(r[0]=o=>M(c)?c.value=o:null),placeholder:"Szukaj..."},null,8,["modelValue"])]),_:1}),a(c).length<3?(e(),u(W,{key:0,class:"shopping-accordion-group"},{default:t(()=>[(e(!0),s(I,null,h(a(v),o=>(e(),u(T,{key:o.category,value:o.category},{default:t(()=>[n(A,{slot:"header",color:"light",onClick:()=>L(o.category)},{default:t(()=>[n(P,null,{default:t(()=>[S(oo(o.category),1)]),_:2},1024)]),_:2},1032,["onClick"]),a(d).items?(e(),s("div",_o,[o.category===a(m)?(e(),s("div",uo,[(e(!0),s(I,null,h(o.items,_=>(e(),u(x,{key:_,"shopping-item":_,active:a(d).items.some(Z=>Z.name===_),onClick:()=>w(_,o.category)},null,8,["shopping-item","active","onClick"]))),128))])):k("",!0)])):k("",!0)]),_:2},1032,["value"]))),128))]),_:1})):(e(),s("div",po,[(e(!0),s(I,null,h(a(z),o=>(e(),u(x,{key:o,"shopping-item":o.name,active:a(d).items.some(_=>_.name===o.name),onClick:()=>w(o.name,o.category)},null,8,["shopping-item","active","onClick"]))),128))])),a(g)?(e(),s("div",mo,[n(R,{name:"lines-sharp"}),go])):k("",!0)]),_:1})]),_:1})}}},ko=q(yo,[["__scopeId","data-v-417236dd"]]);export{ko as default};
