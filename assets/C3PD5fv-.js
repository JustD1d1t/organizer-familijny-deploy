import{_ as G,aF as Q,L as Y,r as f,i as Z,N as d,A as n,Z as $,t as s,z as e,O as t,B as L,x as v,a2 as J,aU as K,aV as M,v as p,Q as y,R as k,P as I,T as X,U as oo,S as eo,V as no,W as to,a4 as ao,ag as so,aq as co,ao as lo,Y as io,$ as ro,y as po,C as uo,D as _o,al as go,a1 as mo,ap as ho,ai as fo}from"./C1Km0ovS.js";import{_ as yo}from"./5KdNJh-h.js";import{u as ko}from"./4c2pv963.js";const Io=u=>(uo("data-v-3882047c"),u=u(),_o(),u),vo={class:"ion-padding inner-content"},wo={class:"ion-padding",slot:"content"},Co={key:0,class:"w-full p-2 grid-cols-2 grid auto-rows-max overflow-auto"},So={key:0,class:"w-full p-2 grid-cols-2 grid auto-rows-max overflow-auto"},zo={key:1,class:"background"},xo=Io(()=>v("span",null,"Aktualizacja listy",-1)),Lo={__name:"index",setup(u){const{shoppingItems:w}=ko(),C=Q(),{handleItem:b}=C,{currentShoppingList:g,isLoading:B}=Y(C),m=f("");f(!1);const c=f(""),{openToast:S}=fo(),V=a=>a.toLowerCase().replace(/z/g,"[zżź]").replace(/s/g,"[sś]").replace(/c/g,"[cć]").replace(/l/g,"[lł]"),A=Z(()=>{const l=w.map(i=>i.items.map(h=>({name:h,category:i.category}))).flat(),_=V(c.value);return[...l.filter(i=>i.name.toLowerCase().match(new RegExp(_))),{name:c.value.toLowerCase(),category:"bez kateogrii"}]}),z=async(a,l)=>{await b(a,l)==="added"?S("Dodano produkt do listy"):S("Usunięto produkt z listy","danger")},T=a=>{m.value=m.value===a?"":a};return(a,l)=>{const _=X,i=oo,h=eo,N=no,D=to,O=ao,R=so,U=go,W=mo,x=yo,P=ho,j=co,E=lo,F=io,H=$;return s(),d(H,null,{default:n(()=>[e(D,{style:{background:"var(--ion-color-light)"}},{default:n(()=>[e(N,null,{default:n(()=>[e(i,{slot:"start"},{default:n(()=>[e(_,{text:"",icon:"ioniconsArrowBackOutline"in a?a.ioniconsArrowBackOutline:t(ro)},null,8,["icon"])]),_:1}),e(h,null,{default:n(()=>[L("Listy zakupowe")]),_:1})]),_:1})]),_:1}),e(F,{fullscreen:!0},{default:n(()=>[v("div",vo,[e(R,{lines:"none"},{default:n(()=>[e(O,{label:"Napisz czego szukasz",type:"text",modelValue:t(c),"onUpdate:modelValue":l[0]||(l[0]=o=>J(c)?c.value=o:null),placeholder:"Szukaj..."},null,8,["modelValue"])]),_:1}),K(e(j,{class:"shopping-accordion-group"},{default:n(()=>[(s(!0),p(k,null,y(t(w),o=>(s(),d(P,{key:o.category,value:o.category},{default:n(()=>[e(W,{slot:"header",color:"light",onClick:()=>T(o.category)},{default:n(()=>[e(U,null,{default:n(()=>[L(po(o.category),1)]),_:2},1024)]),_:2},1032,["onClick"]),v("div",wo,[t(g)&&o.category===t(m)?(s(),p("div",Co,[(s(!0),p(k,null,y(o.items,r=>(s(),d(x,{key:r,"shopping-item":r,active:t(g).items.some(q=>q.name===r),onClick:()=>z(r,o.category)},null,8,["shopping-item","active","onClick"]))),128))])):I("",!0)])]),_:2},1032,["value"]))),128))]),_:1},512),[[M,t(c).length===0]]),t(c).length?(s(),p("div",So,[(s(!0),p(k,null,y(t(A),o=>(s(),d(x,{key:o,"shopping-item":o.name,active:t(g).items.some(r=>r.name===o.name),onClick:()=>z(o.name,o.category)},null,8,["shopping-item","active","onClick"]))),128))])):I("",!0),t(B)?(s(),p("div",zo,[e(E,{name:"lines-sharp"}),xo])):I("",!0)])]),_:1})]),_:1})}}},Ao=G(Lo,[["__scopeId","data-v-3882047c"]]);export{Ao as default};
