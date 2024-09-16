import{i as Z,t as r,N as I,A as t,aA as K,P as o,v,x as m,Q,z as n,y as C,aa as J,T as E,Z as P,B as g,R,S as j,aK as Y,$ as ee,_ as $e,au as De,M as X,at as xe,r as b,G as Me,aF as ze,a2 as Be,ai as Qe,l as O,a8 as Te,U as Ae,a7 as Ve,V as Oe,W as Re,X as je,a1 as Ee,ag as Pe,ah as We,a0 as qe,aQ as Fe}from"./WOMjux0z.js";import{_ as Ne,a as Ue}from"./Cx7uRzIm.js";import{_ as Ge}from"./DKbOpMc5.js";import{u as He}from"./9Fza2Wnk.js";import{r as Ke,d as Xe,a as Ze,h as Je,i as Ye}from"./CHVAF33P.js";const en={key:0},nn=["src"],tn={class:"flex"},on={class:"my-auto quantity w-5 text-center"},an={__name:"item-counter",props:["quantity","category"],emits:["increaseQuantity","decreaseQuantity"],setup(d,{emit:S}){const k=d,{shoppingItems:w}=He(),s=S,_=Z(()=>{const p=w.find(f=>f.category===k.category);return p?p.icon:""}),i=()=>{s("increaseQuantity")},L=()=>{s("decreaseQuantity")};return(p,f)=>{const D=J,a=E,x=P;return r(),I(x,{class:"flex items-center"},{default:t(()=>[K(p.$slots,"label"),o(_)?(r(),v("div",en,[m("img",{src:o(_),alt:"category image",class:"w-8 h-8 mr-2"},null,8,nn)])):Q("",!0),m("div",tn,[n(a,{onClick:f[0]||(f[0]=()=>L()),size:"small",class:"my-0",type:"tertiary"},{default:t(()=>[n(D,{icon:"ioniconsRemoveOutline"in p?p.ioniconsRemoveOutline:o(Ke)},null,8,["icon"])]),_:1}),m("span",on,C(d.quantity),1),n(a,{onClick:f[1]||(f[1]=()=>i()),size:"small",class:"my-0",type:"tertiary"},{default:t(()=>[n(D,{icon:"ioniconsAdd"in p?p.ioniconsAdd:o(Xe)},null,8,["icon"])]),_:1}),K(p.$slots,"actions")])]),_:3})}}},sn={class:"inner-content"},ln={class:"h2 font-bold"},cn={class:"w-full flex justify-between flex-wrap"},rn={__name:"add-shopping-list-modal",props:{name:{type:String,default:()=>""}},emits:["cancelShoppingModal","confirmShoppingModal"],setup(d,{emit:S}){const k=S;return(w,s)=>{const _=E;return r(),v("div",sn,[m("h2",null,[g(" Czy dodać "),m("span",ln,C(d.name),1),g(" do listy zakupowej? ")]),m("div",cn,[n(_,{onClick:s[0]||(s[0]=i=>k("cancelShoppingModal")),color:"alert","data-test":"cancel-button"},{default:t(()=>[g(" Nie ")]),_:1}),n(_,{onClick:s[1]||(s[1]=i=>k("confirmShoppingModal")),color:"success","data-test":"submit-button"},{default:t(()=>[g(" Tak ")]),_:1})])])}}},un={class:"inner-content"},dn=m("h2",null,"wybierz listę zakupową",-1),pn=m("h2",null,"Twoje listy zakupowe",-1),mn={key:0},_n={__name:"select-shopping-list-modal",props:{cancel:{type:Function,default:()=>{}},confirmModal:{type:Function,default:()=>{}},shoppingLists:{type:Array,default:()=>[]},collaboratedShoppingLists:{type:Array,default:()=>[]}},setup(d){return(S,k)=>{const w=Y,s=P,_=ee;return r(),v("div",un,[dn,n(_,{lines:"none"},{default:t(()=>[pn,(r(!0),v(R,null,j(d.shoppingLists,i=>(r(),I(s,{key:i.id,onClick:L=>d.confirmModal(i)},{default:t(()=>[n(w,null,{default:t(()=>[g(C(i.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),d.collaboratedShoppingLists.length?(r(),v("h2",mn," Listy do których Cię dodano ")):Q("",!0),(r(!0),v(R,null,j(d.collaboratedShoppingLists,i=>(r(),I(s,{key:i.id,onClick:L=>d.confirmModal(i)},{default:t(()=>[n(w,null,{default:t(()=>[g(C(i.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})])}}},fn={class:"h-full overflow-auto"},yn={class:"flex flex-col flex-grow"},gn={key:0,class:"text-sm"},hn={__name:"index",setup(d){const S=De(),{increaseQuantity:k,decreaseQuantity:w}=S,{currentPantry:s}=X(S),_=ze(),i=xe(),{getAllShoppingLists:L,updateShoppingList:p}=i,{shoppingLists:f,collaboratedShoppingLists:D}=X(i),a=b({name:"date",dir:"asc"}),x=Z(()=>{var u;const e=((u=s==null?void 0:s.value.items)==null?void 0:u.filter(h=>h.name.toLowerCase().includes(M.value.toLowerCase())))??[];if(e.length){const h=e.filter(l=>l.expiryDate),$=e.filter(l=>!l.expiryDate);if(a.value.name==="date"){if(a.value.dir==="asc")return h.sort((l,y)=>new Date(l.expiryDate)-new Date(y.expiryDate)),[...h,...$];if(a.value.dir==="desc")return h.sort((l,y)=>new Date(y.expiryDate)-new Date(l.expiryDate)),[...h,...$]}else if(a.value.name==="name"){if(a.value.dir==="asc")return e.sort((l,y)=>l.name.localeCompare(y.name));if(a.value.dir==="desc")return e.sort((l,y)=>y.name.localeCompare(l.name))}}return e}),T=b(""),M=b(""),z=b(!1),B=b(!1),ne=b(),te=b(),A=()=>z.value=!1,V=()=>B.value=!1;Me(_,async(e,u)=>{A(),V()});const oe=()=>A(),ae=()=>V(),se=e=>{T.value=e,z.value=!0},ie=async e=>{B.value=!1,await p({...e,items:[...e.items,T.value]}),e.items.push(newItem)},le=async()=>{f.value.length||await L(),z.value=!1,B.value=!0},ce=async e=>{await w(e),e.quantity===1&&se({category:e.category,name:e.name,checked:!1})},re=()=>{O(`/pantries/${s.value.id}/add-item`)},ue=e=>{O(`/pantries/${s.value.id}/${e}`)},de=e=>{O(`/pantries/${s.value.id}/${e.name}`)},pe=e=>e?new Date(e).toLocaleDateString():"",W=e=>{if(a.value!==void 0)if(e!==a.value.name)a.value={name:e,dir:"asc"};else{let u=a.value.dir==="asc"?"desc":"asc";a.value={name:e,dir:u}}else a.value={name:e,dir:"asc"}};return(e,u)=>{const h=Te,$=Ae,l=Ne,y=Ue,me=Ve,_e=Oe,fe=Re,ye=je,q=Ge,F=Y,N=J,ge=E,he=P,ve=ee,U=Ee,Se=Fe,ke=an,we=Pe,be=We,Ce=rn,G=qe,Ie=_n,Le=Be;return r(),I(Le,null,{default:t(()=>[n(fe,{style:{background:"var(--ion-color-light)"}},{default:t(()=>[n(_e,null,{default:t(()=>[n($,{slot:"start"},{default:t(()=>[n(h,{text:"",icon:"ioniconsArrowBackOutline"in e?e.ioniconsArrowBackOutline:o(Ze)},null,8,["icon"])]),_:1}),n($,{slot:"end"},{default:t(()=>[n(y,{sortId:"pantries-sort",width:"250px"},{default:t(()=>[n(l,{label:"Sortuj po nazwie",onClick:u[0]||(u[0]=c=>W("name")),type:"name",dir:o(a).dir,active:o(a).name==="name"},null,8,["dir","active"]),n(l,{label:"Sortuj po dacie",onClick:u[1]||(u[1]=c=>W("date")),type:"amount",dir:o(a).dir,active:o(a).name==="date"},null,8,["dir","active"])]),_:1})]),_:1}),n(me,null,{default:t(()=>[g("Spiżarnia")]),_:1})]),_:1})]),_:1}),n(U,null,{default:t(()=>[m("div",fn,[m("h2",null,C(o(s).name),1),o(x).length?(r(),I(q,{key:0},{default:t(()=>[n(ye,{label:"Wyszukaj produkt",type:"text",placeholder:"Szukaj...",modelValue:o(M),"onUpdate:modelValue":u[2]||(u[2]=c=>Qe(M)?M.value=c:null)},null,8,["modelValue"])]),_:1})):Q("",!0),n(q,{class:"overflow-auto max-h-[75%]",lines:!0},{default:t(()=>[(r(!0),v(R,null,j(o(x),(c,H)=>(r(),I(ke,{key:c.name,onIncreaseQuantity:()=>o(k)(c),onDecreaseQuantity:()=>ce(c),quantity:c.quantity,category:c.category},{label:t(()=>[m("div",yn,[n(F,{class:"grow my-0",onClick:()=>ue(c.name)},{default:t(()=>[g(C(c.name),1)]),_:2},1032,["onClick"]),c.expiryDate?(r(),v("span",gn,C(pe(c.expiryDate)),1)):Q("",!0)])]),actions:t(()=>[n(ge,{type:"tertiary",id:"open-pantry-menu-"+H,class:"ml-auto",size:"small"},{default:t(()=>[n(N,{size:"medium",icon:"ioniconsEllipsisVerticalOutline"in e?e.ioniconsEllipsisVerticalOutline:o(Je)},null,8,["icon"])]),_:2},1032,["id"]),n(Se,{trigger:"open-pantry-menu-"+H,"trigger-action":"click",side:"bottom",alignment:"center","dismiss-on-select":!0},{default:t(()=>[n(U,{class:"ion-padding mr-8"},{default:t(()=>[n(ve,null,{default:t(()=>[n(he,null,{default:t(()=>[n(F,{onClick:()=>de(c)},{default:t(()=>[g("Dodaj termin przydatności")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["trigger"])]),_:2},1032,["onIncreaseQuantity","onDecreaseQuantity","quantity","category"]))),128))]),_:1})]),n(be,{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:t(()=>[n(we,{onClick:re},{default:t(()=>[n(N,{icon:"ioniconsAddCircle"in e?e.ioniconsAddCircle:o(Ye),size:"large"},null,8,["icon"])]),_:1})]),_:1}),n(G,{class:"auto-height",ref_key:"shoppingModal",ref:ne,"is-open":o(z),onWillDismiss:oe},{default:t(()=>[n(Ce,{onCancelShoppingModal:A,onConfirmShoppingModal:le,name:o(T).name},null,8,["name"])]),_:1},8,["is-open"]),n(G,{class:"auto-height",ref_key:"selectShoppingListModal",ref:te,"is-open":o(B),onWillDismiss:ae},{default:t(()=>[n(Ie,{cancel:V,"confirm-modal":ie,shoppingLists:o(f),collaboratedShoppingLists:o(D)},null,8,["shoppingLists","collaboratedShoppingLists"])]),_:1},8,["is-open"])]),_:1})]),_:1})}}},Cn=$e(hn,[["__scopeId","data-v-2039a86c"]]);export{Cn as default};
