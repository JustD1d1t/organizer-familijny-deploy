import{_ as be,L as ke,M as Q,N as ge,r as d,o as we,O as m,P as Ve,t as s,A as a,z as t,Q as o,B as r,R as V,v,S as b,T as k,x as X,U as Ie,V as Ce,W as xe,X as Ne,Y as Ue,Z as De,$ as Se,a0 as Me,a1 as Pe,a2 as Be,a3 as ze,a4 as Ee,a5 as $e,a6 as Te,y as L,a7 as Fe,a8 as Ae,a9 as Oe,aa as Re,ab as We}from"./CtmnvVoy.js";import{_ as Le}from"./BVKwL09d.js";import{_ as je}from"./Ufd8k24s.js";import{_ as Ke}from"./o7ityAlN.js";import{u as Ze}from"./NPkqJmz_.js";const Ye={key:0,class:"inner-content"},Ge={class:"modal-content"},He={__name:"index-full-read",setup(Qe){const{photos:I,photoFromCamera:Xe,selectPhotoFromData:qe}=Ze(),j=ke(),{removeExpenseFromStore:q,editExpense:J,getExpensePhoto:h}=j,{currentExpense:n}=Q(j),{billCategories:U}=Ae(),{openAlert:ee}=Oe(),le=ge(),{uid:_}=Q(le),K=Ve();d("");const D=d(!1),te=d(null),ae=d(null);d(!1);const f=d(null),i=d({name:"",price:"",category:""}),S=d(n.value.shop),M=d(n.value.name),P=d(n.value.value),C=d(n.value.timestamp),g=d(n.value.familyMembers),x=d([...n.value.items]),oe=()=>{let u;n.value.timestamp.seconds?u=new Date(n.value.timestamp.seconds*1e3):u=new Date(n.value.timestamp);const l=u.getFullYear(),w=String(u.getMonth()+1).padStart(2,"0"),y=String(u.getDate()).padStart(2,"0");C.value=`${l}-${w}-${y}`},ne=()=>{D.value=!1},Z=d(!1),Y=d(!1),ue=async()=>{const u={name:M.value,value:Number(P.value),timestamp:new Date(C.value).getTime(),shop:S.value,familyMembers:g.value,userId:n.value.userId,id:n.value.id,category:n.value.category,items:x.value};await J(u,te.value,ae.value),K.back()},se=async()=>{await q(n.value.id),K.back()},de=async()=>{const u=await h(n.value.id);u&&I.value.push({webviewPath:u,document:{title:"New Photo",description:"Photo taken with the app",timestamp:new Date}})},re=async()=>{D.value=!0};we(async()=>{await de(),oe()});const ie=u=>{g.value.includes(u.id)?g.value=g.value.filter(l=>l!=u.id):g.value.push(u.id)},N=u=>Z.value=u,B=u=>Y.value=u,me=u=>{f.value=u,N(!0)},pe=()=>{x.value.push({name:i.value.name,price:parseFloat(i.value.price),category:i.value.category}),B(!1),i.value={name:"",price:"",category:""}};return(u,l)=>{const w=Ie,y=Ce,z=xe,E=Ne,p=Ue,$=Re,T=De,F=Se,ce=Le,ve=Me,_e=je,A=Ke,fe=Pe,G=We,O=Be,H=ze,R=Ee,W=$e,ye=Te;return s(),m(ye,null,{default:a(()=>[t(E,{style:{background:"var(--ion-color-light)"}},{default:a(()=>[t(z,null,{default:a(()=>[o(n)&&o(n).userId===o(_)?(s(),m(y,{key:0,slot:"start"},{default:a(()=>[t(w,{type:"tertiary",strong:!0,color:"danger",onClick:l[0]||(l[0]=()=>o(ee)("Usuwanie wydatku","Czy na pewno chcesz usunąć wydatek?","alert-button-confirm",se))},{default:a(()=>[r("Usuń")]),_:1})]),_:1})):V("",!0),o(n)&&o(n).userId===o(_)?(s(),m(y,{key:1,slot:"end"},{default:a(()=>[t(w,{type:"tertiary",strong:!0,color:"success",onClick:l[1]||(l[1]=e=>ue())},{default:a(()=>[r("Zapisz")]),_:1})]),_:1})):V("",!0)]),_:1})]),_:1}),t(W,{fullscreen:!0},{default:a(()=>[o(n)?(s(),v("div",Ye,[t(ve,{lines:"none"},{default:a(()=>[t(p,{label:"Nazwa sklepu",type:"text",modelValue:S.value,"onUpdate:modelValue":l[2]||(l[2]=e=>S.value=e),disabled:o(n).userId!==o(_)},null,8,["modelValue","disabled"]),t(p,{label:"Nazwa wydatku",type:"text",modelValue:M.value,"onUpdate:modelValue":l[3]||(l[3]=e=>M.value=e),disabled:o(n).userId!==o(_)},null,8,["modelValue","disabled"]),t(p,{label:"Całkowita kwota",type:"number",modelValue:P.value,"onUpdate:modelValue":l[4]||(l[4]=e=>P.value=e),disabled:o(n).userId!==o(_)},null,8,["modelValue","disabled"]),t(p,{label:"Data",type:"date",modelValue:C.value,"onUpdate:modelValue":l[5]||(l[5]=e=>C.value=e),disabled:o(n).userId!==o(_)},null,8,["modelValue","disabled"]),t(F,null,{default:a(()=>[t(T,{label:"Kategoria","label-placement":"stacked",modelValue:o(n).category,"onUpdate:modelValue":l[6]||(l[6]=e=>o(n).category=e)},{default:a(()=>[(s(!0),v(b,null,k(o(U),(e,c)=>(s(),m($,{key:c,value:e},{default:a(()=>[r(L(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(n).userId===o(_)?(s(),m(ce,{key:0,members:o(n).familyMembers,onToggleMember:ie},null,8,["members"])):V("",!0)]),_:1}),t(A,null,{default:a(()=>[(s(!0),v(b,null,k(x.value,(e,c)=>(s(),m(_e,{key:c,name:e.name,price:e.price,category:e.category,onButtonClick:()=>me(e),onRemoveClick:()=>x.value.splice(c,1)},null,8,["name","price","category","onButtonClick","onRemoveClick"]))),128))]),_:1}),t(w,{type:"tertiary",class:"w-full",onClick:l[7]||(l[7]=e=>B(!0))},{default:a(()=>[t(fe,{slot:"icon-only",icon:"ioniconsAdd"in u?u.ioniconsAdd:o(Fe)},null,8,["icon"]),r(" Dodaj produkt ")]),_:1}),o(I).length?(s(),v("div",{key:0,onClick:re},[(s(!0),v(b,null,k(o(I),e=>(s(),m(G,{key:e.webviewPath,src:e.webviewPath},null,8,["src"]))),128))])):V("",!0),t(O,{class:"auto-height modal-img","is-open":D.value,onDidDismiss:l[8]||(l[8]=e=>ne())},{default:a(()=>[X("div",Ge,[X("div",null,[(s(!0),v(b,null,k(o(I),e=>(s(),m(G,{key:e.webviewPath,src:e.webviewPath},null,8,["src"]))),128))])])]),_:1},8,["is-open"])])):V("",!0),t(O,{"is-open":Z.value,onWillDismiss:l[13]||(l[13]=()=>N(!1))},{default:a(()=>[t(E,null,{default:a(()=>[t(z,null,{default:a(()=>[t(H,null,{default:a(()=>[r("Edytuj produkt")]),_:1}),t(y,{slot:"end"},{default:a(()=>[t(R,{onClick:l[9]||(l[9]=e=>N(!1))},{default:a(()=>[r("Close")]),_:1})]),_:1})]),_:1})]),_:1}),t(W,{class:"ion-padding"},{default:a(()=>[t(A,null,{default:a(()=>[t(p,{modelValue:f.value.name,"onUpdate:modelValue":l[10]||(l[10]=e=>f.value.name=e),label:"Nazwa produktu"},null,8,["modelValue"]),t(p,{modelValue:f.value.price,"onUpdate:modelValue":l[11]||(l[11]=e=>f.value.price=e),label:"Cena produktu",type:"number"},null,8,["modelValue"]),t(F,null,{default:a(()=>[t(T,{label:"Kategoria","label-placement":"stacked",placeholder:"--- Wybierz kategorię ---",modelValue:f.value.category,"onUpdate:modelValue":l[12]||(l[12]=e=>f.value.category=e)},{default:a(()=>[(s(!0),v(b,null,k(o(U),(e,c)=>(s(),m($,{key:c,value:e},{default:a(()=>[r(L(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["is-open"]),t(O,{"is-open":Y.value,onWillDismiss:l[18]||(l[18]=()=>B(!1))},{default:a(()=>[t(E,null,{default:a(()=>[t(z,null,{default:a(()=>[t(y,{slot:"start"},{default:a(()=>[t(R,{onClick:l[14]||(l[14]=e=>N(!1))},{default:a(()=>[r("anuluj")]),_:1})]),_:1}),t(H,null,{default:a(()=>[r("Nowy produkt")]),_:1}),t(y,{slot:"end"},{default:a(()=>[t(R,{onClick:pe},{default:a(()=>[r("Zapisz")]),_:1})]),_:1})]),_:1})]),_:1}),t(W,{class:"ion-padding"},{default:a(()=>[t(A,null,{default:a(()=>[t(p,{modelValue:i.value.name,"onUpdate:modelValue":l[15]||(l[15]=e=>i.value.name=e),label:"Nazwa produktu"},null,8,["modelValue"]),t(p,{modelValue:i.value.price,"onUpdate:modelValue":l[16]||(l[16]=e=>i.value.price=e),label:"Cena produktu",type:"number"},null,8,["modelValue"]),t(F,null,{default:a(()=>[t(T,{label:"Kategoria","label-placement":"stacked",placeholder:"--- Wybierz kategorię ---",modelValue:i.value.category,"onUpdate:modelValue":l[17]||(l[17]=e=>i.value.category=e)},{default:a(()=>[(s(!0),v(b,null,k(o(U),(e,c)=>(s(),m($,{key:c,value:e},{default:a(()=>[r(L(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["is-open"])]),_:1})]),_:1})}}},al=be(He,[["__scopeId","data-v-a9dd2c54"]]);export{al as default};
