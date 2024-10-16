import{t as n,N as h,A as s,z as t,B as w,y as R,O as e,bo as ge,P,al as O,a5 as F,a1 as N,aE as M,i as I,x as A,v as y,aR as H,a8 as ye,l as V,bp as he,X as fe,_ as E,aN as ve,L as j,R as C,Q as B,ag as U,b0 as ke,a$ as Ie,aF as K,r as D,Z as Se,T as Ce,U as be,S as $e,V as Le,W as Be,a7 as Ae,aq as xe,ar as we,Y as Re,$ as ze,b3 as De}from"./kuZdBiAE.js";import{_ as Pe,a as Te}from"./BY0KMCuw.js";import{_ as Me}from"./SVsIAaeH.js";import{u as Oe}from"./79ZhOy-0.js";import{_ as Ne}from"./Bb74MX_F.js";const Fe={__name:"PopoverItem",props:{label:{type:String,default:""},active:{type:Boolean,default:!1}},setup(c){return(f,l)=>{const p=O,o=F,r=N;return n(),h(r,null,{default:s(()=>[t(p,null,{default:s(()=>[w(R(c.label),1)]),_:1}),c.active?(n(),h(o,{key:0,slot:"end",icon:"ioniconsCheckmarkOutline"in f?f.ioniconsCheckmarkOutline:e(ge)},null,8,["icon"])):P("",!0)]),_:1})}}},je={__name:"sort-and-filter",props:{layout:{type:String,required:!0},dir:{type:String,required:!0},nameDir:{type:String,required:!0},lastSort:{type:String,required:!0}},emits:["changeLayout","sortByCategory","sortByName","openPantryModal","removeAllItems","removeSelectedItems","selectAllItems","deselectAllItems"],setup(c,{emit:f}){const l=f;return(p,o)=>{const r=Fe,g=Pe,m=Te;return n(),h(m,{sortId:"shopping-list-sort"},{default:s(()=>[t(r,{onClick:o[0]||(o[0]=a=>l("changeLayout","category")),label:"Widok kategorii",active:c.layout==="category"},null,8,["active"]),t(r,{onClick:o[1]||(o[1]=a=>l("changeLayout","products")),label:"Widok produktów",active:c.layout==="products"},null,8,["active"]),t(g,{label:"Sortuj po kategorii",onClick:o[2]||(o[2]=a=>l("sortByCategory")),type:"amount",dir:c.dir,active:c.lastSort==="category"},null,8,["dir","active"]),t(g,{label:"Sortuj po nazwie",onClick:o[3]||(o[3]=a=>l("sortByName")),type:"amount",dir:c.nameDir,active:c.lastSort==="name"},null,8,["dir","active"]),t(r,{onClick:o[4]||(o[4]=a=>l("openPantryModal")),label:"Dodaj zaznaczone produkty do spiżarni"}),t(r,{onClick:o[5]||(o[5]=a=>l("removeAllItems")),label:`Usuń wszystkie\r
        produkty`}),t(r,{onClick:o[6]||(o[6]=a=>l("removeSelectedItems")),label:"Usuń zakupione produkty"}),t(r,{onClick:o[7]||(o[7]=a=>l("selectAllItems")),label:"Zaznacz wszystkie produkty"}),t(r,{onClick:o[8]||(o[8]=a=>l("deselectAllItems")),label:"Odznacz wszystkie produkty"})]),_:1})}}},Ue={class:"flex flex-col grow ml-4"},We={class:"text-base"},qe={class:"text-xs"},He={key:0},Ve=["src"],Z={__name:"item",props:{item:{type:Object,default:()=>{}}},setup(c){const{shoppingItems:f}=Oe(),l=c,p=M(),{removeItem:o,handleItemChange:r}=p,g=I(()=>{const m=f.find(a=>a.category===l.item.category);return m?m.icon:""});return(m,a)=>{const u=Me;return n(),h(u,{item:l.item,"handle-item-change":()=>e(r)(l.item),removeItem:()=>e(o)(c.item)},{label:s(()=>[A("div",Ue,[A("span",We,R(c.item.name),1),A("span",qe,R(c.item.category),1)]),e(g)?(n(),y("div",He,[A("img",{src:e(g),alt:"category image",class:"w-8 h-8 mr-2"},null,8,Ve)])):P("",!0)]),_:1},8,["item","handle-item-change","removeItem"])}}},G={__name:"recipe",props:{recipe:{type:Object,default:()=>{}},recipes:{type:Array,default:()=>[]}},setup(c){const f=M(),{setCurrentRecipe:l,removeRecipe:p,handleRecipeChange:o}=f,r=H(),g=c,m=I(()=>g.recipe.ingredients.every(u=>u.checked)),a=u=>{V(`/shopping-lists/${r.params.id}/recipe/${u}`),l(g.recipe)};return(u,i)=>{const d=he,_=O,v=F,b=fe,L=N;return n(),h(L,{class:"border-0"},{default:s(()=>[t(d,{slot:"start",class:"mr-0","aria-label":"Toggle task completion",onIonChange:i[0]||(i[0]=z=>e(o)(z.detail.checked,g.recipe)),checked:e(m)},null,8,["checked"]),t(_,{class:"border-0 grow ml-4",onClick:i[1]||(i[1]=()=>a(c.recipe.id))},{default:s(()=>[w(R(c.recipe.name),1)]),_:1}),t(b,{slot:"end",onClick:i[2]||(i[2]=()=>e(p)(g.recipe.id)),size:"small",type:"tertiary"},{default:s(()=>[t(v,{icon:"ioniconsTrash"in u?u.ioniconsTrash:e(ye)},null,8,["icon"])]),_:1})]),_:1})}}},Ee={};function Ke(c,f){return n(),y("span",null,[ve(c.$slots,"default",{},void 0,!0)])}const Q=E(Ee,[["render",Ke],["__scopeId","data-v-a302f0dd"]]),Ze={key:1},Ge={__name:"products",props:{nameDir:{type:String,default:""},dir:{type:String,default:""},lastSort:{type:String,default:""}},setup(c){const f=M(),l=c,{currentShoppingList:p}=j(f),o=I(()=>p?p.value.items:[]),r=I(()=>p.value?p.value.recipes:[]),g=I(()=>{if(o.value){let d=[...o.value];return l.lastSort==="category"?d=d.sort((_,v)=>l.dir==="asc"?_.category.localeCompare(v.category):v.category.localeCompare(_.category)):l.lastSort==="name"&&(d=d.sort((_,v)=>l.nameDir==="asc"?_.name.localeCompare(v.name):v.name.localeCompare(_.name))),d}return[]}),m=I(()=>g.value.filter(d=>!d.checked)),a=I(()=>g.value.filter(d=>d.checked)),u=I(()=>r.value.filter(d=>d.ingredients.every(_=>!_.checked))),i=I(()=>r.value.filter(d=>d.ingredients.every(_=>_.checked)));return(d,_)=>{const v=Z,b=G,L=Ne,z=Q,S=U;return n(),y(C,null,[e(m).length||e(u).length?(n(),h(L,{key:0,lines:!0},{default:s(()=>[(n(!0),y(C,null,B(e(m),k=>(n(),h(v,{key:k,item:k},null,8,["item"]))),128)),(n(!0),y(C,null,B(e(u),k=>(n(),h(b,{key:k.id,recipe:k,recipes:e(r)},null,8,["recipe","recipes"]))),128))]),_:1})):P("",!0),e(a).length||e(i).length?(n(),y("div",Ze,[t(z,null,{default:s(()=>[w("Kupione")]),_:1}),t(S,{inset:!0,class:"overflow-auto py-2"},{default:s(()=>[(n(!0),y(C,null,B(e(a),k=>(n(),h(v,{key:k,item:k},null,8,["item"]))),128)),(n(!0),y(C,null,B(e(i),k=>(n(),h(b,{key:k.id,recipe:k,recipes:e(r)},null,8,["recipe","recipes"]))),128))]),_:1})])):P("",!0)],64)}}},Qe=E(Ge,[["__scopeId","data-v-841534f2"]]),Xe={class:"ion-padding",slot:"content"},Ye={key:0},Je={__name:"sorted-by-category",setup(c){const f=M(),{handleItemChange:l,removeItem:p}=f,{currentShoppingList:o}=j(f);I(()=>o.value?o.value.items:[]);const r=I(()=>o.value?o.value.recipes:[]),g=I(()=>{const m={};return o.value.items.forEach(a=>{m[a.category]||(m[a.category]={checked:[],unchecked:[]}),a.checked?m[a.category].checked.push(a):m[a.category].unchecked.push(a)}),m});return(m,a)=>{const u=O,i=N,d=Z,_=U,v=Q,b=ke,L=Ie,z=G;return n(),y(C,null,[t(L,null,{default:s(()=>[(n(!0),y(C,null,B(e(g),(S,k)=>(n(),h(b,{key:k,value:S},{default:s(()=>[t(i,{slot:"header",color:"light"},{default:s(()=>[t(u,null,{default:s(()=>[w(R(k),1)]),_:2},1024)]),_:2},1024),A("div",Xe,[t(_,{inset:!0,class:"overflow-auto"},{default:s(()=>[(n(!0),y(C,null,B(S.unchecked,$=>(n(),h(d,{key:$,item:$,onRemoveItem:()=>e(p)($),onHandleItemChange:()=>e(l)($)},null,8,["item","onRemoveItem","onHandleItemChange"]))),128))]),_:2},1024),S.checked.length?(n(),y("div",Ye,[t(v,null,{default:s(()=>[w("Kupione")]),_:1}),t(_,{inset:!0,class:"overflow-auto"},{default:s(()=>[(n(!0),y(C,null,B(S.checked,$=>(n(),h(d,{key:$,item:$,onRemoveItem:()=>e(p)($),onHandleItemChange:()=>e(l)($)},null,8,["item","onRemoveItem","onHandleItemChange"]))),128))]),_:2},1024)])):P("",!0)])]),_:2},1032,["value"]))),128))]),_:1}),t(_,{inset:!0,class:"overflow-auto"},{default:s(()=>[(n(!0),y(C,null,B(e(r),S=>(n(),h(z,{key:S.id,recipe:S,recipes:e(r)},null,8,["recipe","recipes"]))),128))]),_:1})],64)}}},et={class:"inner-content"},tt=A("h2",null,"wybierz spiżarnię",-1),nt=A("h2",null,"Twoje spiżarnie",-1),ot={key:0},st={__name:"select-pantry-modal",props:{cancel:{type:Function,default:()=>{}},confirmModal:{type:Function,default:()=>{}}},setup(c){const f=K(),{pantries:l,collaboratedPantries:p}=f;return(o,r)=>{const g=O,m=N,a=U;return n(),y("div",et,[tt,t(a,{lines:"none"},{default:s(()=>[nt,(n(!0),y(C,null,B(e(l),u=>(n(),h(m,{key:u.id,onClick:i=>c.confirmModal(u)},{default:s(()=>[t(g,null,{default:s(()=>[w(R(u.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),e(p)&&e(p).length?(n(),y("h2",ot," Spiżarnie do których Cię dodano ")):P("",!0),(n(!0),y(C,null,B(e(p),u=>(n(),h(m,{key:u.id,onClick:i=>c.confirmModal(u)},{default:s(()=>[t(g,null,{default:s(()=>[w(R(u.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})])}}},at={class:"h-[90%]"},lt={key:0},ct={key:1},_t={__name:"index",setup(c){const f=H(),l=K(),{handlePantryItemsFromShoppingList:p}=l,o=M(),{updateShoppingList:r,removeAllItems:g,selectAllItems:m,deselectAllItems:a,removeSelectedItems:u}=o,{currentShoppingList:i}=j(o),d=D("products"),_=D("asc"),v=D("asc"),b=D(""),L=D(!1),z=D(),S=()=>L.value=!1,k=async x=>{const W=i.value.items.filter(T=>T.checked);i.value.items=i.value.items.filter(T=>!T.checked),await p(W,x),await r({...i.value,items:i.value.items}),L.value=!1},$=I(()=>i!=null&&i.value?i.value.name:""),X=()=>{_.value=_.value==="asc"?"desc":"asc",b.value="category"},Y=()=>{v.value=v.value==="asc"?"desc":"asc",b.value="name"},J=x=>{d.value=x},ee=()=>{V(`/shopping-lists/${f.params.id}/add-item`)},te=()=>{L.value=!0};return(x,W)=>{const T=Ce,q=be,ne=$e,oe=je,se=Le,ae=Be,le=Qe,ce=Je,ie=st,re=Ae,ue=F,de=xe,me=we,_e=Re,pe=Se;return n(),h(pe,null,{default:s(()=>[t(ae,{style:{background:"var(--ion-color-light)"}},{default:s(()=>[t(se,null,{default:s(()=>[t(q,{slot:"start"},{default:s(()=>[t(T,{text:"",icon:"ioniconsArrowBackOutline"in x?x.ioniconsArrowBackOutline:e(ze)},null,8,["icon"])]),_:1}),t(ne,null,{default:s(()=>[w("Listy zakupowe")]),_:1}),t(q,{slot:"end"},{default:s(()=>[t(oe,{layout:e(d),dir:e(_),nameDir:e(v),lastSort:e(b),onChangeLayout:J,onSortByCategory:X,onSortByName:Y,onOpenPantryModal:te,onRemoveAllItems:e(g),onRemoveSelectedItems:e(u),onSelectAllItems:e(m),onDeselectAllItems:e(a)},null,8,["layout","dir","nameDir","lastSort","onRemoveAllItems","onRemoveSelectedItems","onSelectAllItems","onDeselectAllItems"])]),_:1})]),_:1})]),_:1}),t(_e,null,{default:s(()=>[A("div",at,[A("h2",null,R(e($)),1),e(i).items.length||e(i).recipes.length?(n(),y("div",lt,[e(d)=="products"?(n(),h(le,{key:0,dir:e(_),nameDir:e(v),lastSort:e(b)},null,8,["dir","nameDir","lastSort"])):(n(),h(ce,{key:1}))])):(n(),y("h3",ct,"Brak produktów na liście")),t(re,{class:"auto-height",ref_key:"modal",ref:z,"is-open":e(L),onWillDismiss:S},{default:s(()=>[t(ie,{cancel:S,confirmModal:k})]),_:1},8,["is-open"]),t(me,{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:s(()=>[t(de,{onClick:ee},{default:s(()=>[t(ue,{icon:"ioniconsAddCircle"in x?x.ioniconsAddCircle:e(De),size:"large"},null,8,["icon"])]),_:1})]),_:1})])]),_:1})]),_:1})}}};export{_t as default};