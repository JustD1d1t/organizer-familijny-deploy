import{_ as j,t as n,N as i,A as e,v as I,R,Q as v,B as y,y as d,aE as N,L as O,r as T,o as V,z as t,O as o,x as _,P as B,W as C,b4 as F,aC as G,a1 as D,ag as E,b5 as H,G as U,i as W,aR as q,Z as Q,T as X,U as Y,S as Z,V as J,a5 as K,X as ee,a7 as ne,Y as te,$ as oe,b6 as se}from"./CGaVrOoi.js";import{_ as ae}from"./-AXv1fJs.js";import{_ as ce}from"./C34Zsy35.js";const ie={__name:"ingredients-list",props:{ingredients:{type:Array,required:!0,default:()=>[]}},setup(m){return(x,z)=>{const a=ae,f=ce;return n(),i(f,{inset:!0,lines:!0,class:"p-2","bg-white":!0},{default:e(()=>[(n(!0),I(R,null,v(m.ingredients,l=>(n(),i(a,{key:l.id},{start:e(()=>[y(d(l.name),1)]),_:2},1024))),128))]),_:1})}}},le=j(ie,[["__scopeId","data-v-73e57f11"]]),re={key:0,class:"inner-content py-2"},_e={class:"line-through"},ue=_("span",null," dodane",-1),pe={class:"line-through"},de=_("span",null," dodane",-1),me={__name:"add-recipe-to-shopping-list-modal",props:{recipe:{type:Object,default:()=>{}},cancel:{type:Function,default:()=>{}},confirmModal:{type:Function,default:()=>{}}},setup(m){const x=N(),{updateShoppingList:z,getAllShoppingLists:a}=x,{shoppingLists:f,collaboratedShoppingLists:l}=O(x),h=m,w=T(!1),c=T(""),g=async u=>{const r=u.recipes;if(w.value=!0,r.find(p=>p.name===h.recipe.name)){const p=r.findIndex(L=>L.name===h.recipe.name);c.value=`Przepis "${h.recipe.name}" został usunięty z listy "${u.name}"`,r.splice(p,1)}else c.value=`Przepis "${h.recipe.name}" został dodany do listy "${u.name}"`,r.push(h.recipe);setTimeout(()=>{w.value=!1},2e3),await z({...u,recipes:r}),u.recipes=r};return V(async()=>{await a()}),(u,r)=>{const p=C,L=F,k=G,$=D,S=E;return m.recipe?(n(),I("div",re,[t(p,{class:"text-lg text-center"},{default:e(()=>[y("Wybierz listę do której chcesz dodać przepis")]),_:1}),t(S,{inset:!0,lines:"inset"},{default:e(()=>[t(L,null,{default:e(()=>[y(" Twoje listy ")]),_:1}),(n(!0),I(R,null,v(o(f),s=>(n(),i($,{onClick:()=>g(s),key:s.id},{default:e(()=>[s.recipes.find(b=>b.name===m.recipe.name)?(n(),i(k,{key:1},{default:e(()=>[_("span",_e,d(s.name),1),ue]),_:2},1024)):(n(),i(k,{key:0},{default:e(()=>[_("p",null,d(s.name),1)]),_:2},1024))]),_:2},1032,["onClick"]))),128))]),_:1}),o(l)&&o(l).length?(n(),i(p,{key:0,class:"text-lg"},{default:e(()=>[y("Listy do których zostałeś zaproszony")]),_:1})):B("",!0),t(S,{inset:!0,lines:"inset"},{default:e(()=>[(n(!0),I(R,null,v(o(l),s=>(n(),i($,{onClick:()=>g(s),key:s.id},{default:e(()=>[s.recipes.find(b=>b.name===m.recipe.name)?(n(),i(k,{key:1},{default:e(()=>[_("span",pe,d(s.name),1),de]),_:2},1024)):(n(),i(k,{key:0},{default:e(()=>[_("p",null,d(s.name),1)]),_:2},1024))]),_:2},1032,["onClick"]))),128))]),_:1})])):B("",!0)}}},fe=["href"],he=_("h3",null,"Składniki",-1),ge={key:0},ye={key:1},Le={__name:"index",setup(m){const x=q(),z=H(),{currentRecipe:a}=O(z),f=T(),l=()=>f.value.$el.dismiss(null,"cancel"),h=()=>f.value.$el.dismiss(null,"confirm");U(x,async(c,g)=>{l()});const w=W(()=>{const c=/(https?:\/\/)?(www\.)?[\w\-]+\.(com|com\.pl|pl)/,g=a.value.url.match(c);return g?g[0]:null});return(c,g)=>{const u=X,r=Y,p=Z,L=J,k=C,$=K,S=le,s=ee,b=me,P=ne,A=te,M=Q;return n(),i(M,null,{default:e(()=>[t(k,{style:{background:"var(--ion-color-light)"}},{default:e(()=>[t(L,null,{default:e(()=>[t(r,{slot:"start"},{default:e(()=>[t(u,{text:"",icon:"ioniconsArrowBackOutline"in c?c.ioniconsArrowBackOutline:o(oe)},null,8,["icon"])]),_:1}),t(p,null,{default:e(()=>[y("Przepisy")]),_:1})]),_:1})]),_:1}),t(A,null,{default:e(()=>[_("h2",null,d(o(a).name),1),_("a",{href:o(a).url,class:"flex items-center"},[t($,{size:"small",icon:"ioniconsGlobeOutline"in c?c.ioniconsGlobeOutline:o(se),class:"mr-1"},null,8,["icon"]),y(" "+d(o(w)),1)],8,fe),he,t(S,{ingredients:o(a).ingredients},null,8,["ingredients"]),o(a).steps?(n(),I("h3",ge,"Przepis")):B("",!0),o(a).steps?(n(),I("p",ye,d(o(a).steps),1)):B("",!0),t(s,{class:"mt-8",id:"open-recipe-to-shopping-list-modal"},{default:e(()=>[y(" Dodaj do listy zakupowej ")]),_:1}),t(P,{class:"auto-height",ref_key:"modal",ref:f,trigger:"open-recipe-to-shopping-list-modal"},{default:e(()=>[t(b,{cancel:l,"confirm-modal":h,recipe:o(a)},null,8,["recipe"])]),_:1},512)]),_:1})]),_:1})}}};export{Le as default};
