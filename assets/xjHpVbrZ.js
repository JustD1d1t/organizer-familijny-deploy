import{_ as X,az as E,M as F,r as y,i as G,N as u,A as t,a5 as M,t as n,z as a,B as b,x as v,P as e,ao as Y,aQ as Z,aR as $,v as r,S as f,R as I,Q as d,a2 as q,V as J,W as K,X as O,$ as oo,aX as eo,aj as to,a4 as no,y as ao,C as so,D as co,ad as lo,Z as io,aY as ro,a8 as po}from"./BClyMcC6.js";import{_ as _o}from"./svLJWjc_.js";import{u as uo}from"./CFnaPcOy.js";const mo=_=>(so("data-v-101be0ea"),_=_(),co(),_),go={class:"ion-padding inner-content"},ho={class:"ion-padding",slot:"content"},yo={key:0,class:"w-full p-2 grid-cols-2 grid auto-rows-max overflow-auto"},fo={key:0,class:"w-full p-2 grid-cols-2 grid auto-rows-max overflow-auto"},Io={key:1,class:"background"},vo=mo(()=>v("span",null,"Aktualizacja listy",-1)),ko={__name:"index",setup(_){const{shoppingItems:k}=uo(),C=E(),{handleItem:z}=C,{currentShoppingList:m,isLoading:V}=F(C),g=y("");y(!1);const s=y(""),{openToast:w}=po(),S=G(()=>[...k.map(c=>c.items.map(h=>({name:h,category:c.category}))).flat().filter(c=>c.name.toLowerCase().includes(s.value.toLowerCase())),{name:s.value.toLowerCase(),category:"bez kateogrii"}]),x=async(l,p)=>{await z(l,p)==="added"?w("Dodano produkt do listy"):w("Usunięto produkt z listy","danger")},A=l=>{g.value=g.value===l?"":l};return(l,p)=>{const c=q,h=J,B=K,N=O,T=oo,W=lo,D=io,L=_o,R=ro,j=eo,P=to,H=no,Q=M;return n(),u(Q,null,{default:t(()=>[a(B,{style:{background:"var(--ion-color-light)"}},{default:t(()=>[a(h,null,{default:t(()=>[a(c,null,{default:t(()=>[b("Listy zakupowe")]),_:1})]),_:1})]),_:1}),a(H,{fullscreen:!0},{default:t(()=>[v("div",go,[a(T,{lines:"none"},{default:t(()=>[a(N,{label:"Napisz czego szukasz",type:"text",modelValue:e(s),"onUpdate:modelValue":p[0]||(p[0]=o=>Y(s)?s.value=o:null),placeholder:"Szukaj..."},null,8,["modelValue"])]),_:1}),Z(a(j,{class:"shopping-accordion-group"},{default:t(()=>[(n(!0),r(I,null,f(e(k),o=>(n(),u(R,{key:o.category,value:o.category},{default:t(()=>[a(D,{slot:"header",color:"light",onClick:()=>A(o.category)},{default:t(()=>[a(W,null,{default:t(()=>[b(ao(o.category),1)]),_:2},1024)]),_:2},1032,["onClick"]),v("div",ho,[e(m)&&o.category===e(g)?(n(),r("div",yo,[(n(!0),r(I,null,f(o.items,i=>(n(),u(L,{key:i,"shopping-item":i,active:e(m).items.some(U=>U.name===i),onClick:()=>x(i,o.category)},null,8,["shopping-item","active","onClick"]))),128))])):d("",!0)])]),_:2},1032,["value"]))),128))]),_:1},512),[[$,e(s).length===0]]),e(s).length?(n(),r("div",fo,[e(S).length?(n(!0),r(I,{key:0},f(e(S),o=>(n(),u(L,{key:o,"shopping-item":o.name,active:e(m).items.some(i=>i.name===o.name),onClick:()=>x(o.name,o.category)},null,8,["shopping-item","active","onClick"]))),128)):d("",!0)])):d("",!0),e(V)?(n(),r("div",Io,[a(P,{name:"lines-sharp"}),vo])):d("",!0)])]),_:1})]),_:1})}}},xo=X(ko,[["__scopeId","data-v-101be0ea"]]);export{xo as default};
