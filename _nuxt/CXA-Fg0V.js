import{_ as N,t,N as i,A as e,v as I,R as v,S as T,B as y,y as d,ae as C,at as V,M,r as O,o as F,z as n,P as o,x as p,Q as B,W as P,aR as D,aq as G,Y as q,aD as H,aS as U,G as W,i as E,aF as Q,a1 as Y,a7 as J,U as K,a6 as X,V as Z,a9 as ee,T as ne,$ as te,a0 as oe}from"./B4ggqkCG.js";import{_ as se}from"./Dl8-h6Oi.js";import{a as ae,j as ce}from"./CHVAF33P.js";const ie={__name:"ingredients-list",props:{ingredients:{type:Array,required:!0,default:()=>[]}},setup(m){return(x,w)=>{const a=se,f=C;return t(),i(f,{inset:!0,class:"p-2"},{default:e(()=>[(t(!0),I(v,null,T(m.ingredients,l=>(t(),i(a,{key:l.id},{start:e(()=>[y(d(l.name),1)]),_:2},1024))),128))]),_:1})}}},le=N(ie,[["__scopeId","data-v-c9c20df2"]]),re={key:0,class:"inner-content py-2"},pe={class:"line-through"},_e=p("span",null," dodane",-1),ue={class:"line-through"},de=p("span",null," dodane",-1),me={__name:"add-recipe-to-shopping-list-modal",props:{recipe:{type:Object,default:()=>{}},cancel:{type:Function,default:()=>{}},confirmModal:{type:Function,default:()=>{}}},setup(m){const x=V(),{updateShoppingList:w,getAllShoppingLists:a}=x,{shoppingLists:f,collaboratedShoppingLists:l}=M(x),h=m,z=O(!1),c=O(""),g=async _=>{const r=_.recipes;if(z.value=!0,r.find(u=>u.name===h.recipe.name)){const u=r.findIndex(L=>L.name===h.recipe.name);c.value=`Przepis "${h.recipe.name}" został usunięty z listy "${_.name}"`,r.splice(u,1)}else c.value=`Przepis "${h.recipe.name}" został dodany do listy "${_.name}"`,r.push(h.recipe);setTimeout(()=>{z.value=!1},2e3),await w({..._,recipes:r}),_.recipes=r};return F(async()=>{await a()}),(_,r)=>{const u=P,L=D,k=G,S=q,$=C,R=H;return m.recipe?(t(),I("div",re,[n(u,{class:"text-lg text-center"},{default:e(()=>[y("Wybierz listę do której chcesz dodać przepis")]),_:1}),n($,{inset:!0,lines:"inset"},{default:e(()=>[n(L,null,{default:e(()=>[y(" Twoje listy ")]),_:1}),(t(!0),I(v,null,T(o(f),s=>(t(),i(S,{onClick:()=>g(s),key:s.id},{default:e(()=>[s.recipes.find(b=>b.name===m.recipe.name)?(t(),i(k,{key:1},{default:e(()=>[p("span",pe,d(s.name),1),_e]),_:2},1024)):(t(),i(k,{key:0},{default:e(()=>[p("p",null,d(s.name),1)]),_:2},1024))]),_:2},1032,["onClick"]))),128))]),_:1}),o(l)&&o(l).length?(t(),i(u,{key:0,class:"text-lg"},{default:e(()=>[y("Listy do których zostałeś zaproszony")]),_:1})):B("",!0),n($,{inset:!0,lines:"inset"},{default:e(()=>[(t(!0),I(v,null,T(o(l),s=>(t(),i(S,{onClick:()=>g(s),key:s.id},{default:e(()=>[s.recipes.find(b=>b.name===m.recipe.name)?(t(),i(k,{key:1},{default:e(()=>[p("span",ue,d(s.name),1),de]),_:2},1024)):(t(),i(k,{key:0},{default:e(()=>[p("p",null,d(s.name),1)]),_:2},1024))]),_:2},1032,["onClick"]))),128))]),_:1}),n(R,{"is-open":o(z),message:o(c),duration:2e3},null,8,["is-open","message"])])):B("",!0)}}},fe=["href"],he=p("h3",null,"Składniki",-1),ge={key:0},ye={key:1},ze={__name:"index",setup(m){const x=Q(),w=U(),{currentRecipe:a}=M(w),f=O(),l=()=>f.value.$el.dismiss(null,"cancel"),h=()=>f.value.$el.dismiss(null,"confirm");W(x,async(c,g)=>{l()});const z=E(()=>{const c=/(https?:\/\/)?(www\.)?[\w\-]+\.(com|com\.pl|pl)/,g=a.value.url.match(c);return g?g[0]:null});return(c,g)=>{const _=J,r=K,u=X,L=Z,k=P,S=ee,$=le,R=ne,s=me,b=te,j=oe,A=Y;return t(),i(A,null,{default:e(()=>[n(k,{style:{background:"var(--ion-color-light)"}},{default:e(()=>[n(L,null,{default:e(()=>[n(r,{slot:"start"},{default:e(()=>[n(_,{text:"",icon:"ioniconsArrowBackOutline"in c?c.ioniconsArrowBackOutline:o(ae)},null,8,["icon"])]),_:1}),n(u,null,{default:e(()=>[y("Przepisy")]),_:1})]),_:1})]),_:1}),n(j,null,{default:e(()=>[p("h2",null,d(o(a).name),1),p("a",{href:o(a).url,class:"flex items-center"},[n(S,{size:"small",icon:"ioniconsGlobeOutline"in c?c.ioniconsGlobeOutline:o(ce),class:"mr-1"},null,8,["icon"]),y(" "+d(o(z)),1)],8,fe),he,n($,{ingredients:o(a).ingredients},null,8,["ingredients"]),o(a).steps?(t(),I("h3",ge,"Przepis")):B("",!0),o(a).steps?(t(),I("p",ye,d(o(a).steps),1)):B("",!0),n(R,{expand:"block",class:"mt-8",id:"open-recipe-to-shopping-list-modal"},{default:e(()=>[y(" Dodaj do listy zakupowej ")]),_:1}),n(b,{class:"auto-height",ref_key:"modal",ref:f,trigger:"open-recipe-to-shopping-list-modal"},{default:e(()=>[n(s,{cancel:l,"confirm-modal":h,recipe:o(a)},null,8,["recipe"])]),_:1},512)]),_:1})]),_:1})}}};export{ze as default};
