import{_ as P,t as n,v as h,R as v,S as w,N as i,A as e,B as k,y as f,aq as j,M as C,r as A,o as N,z as t,P as s,x as p,Q as T,W as M,aP as O,an as V,Y as D,ad as F,aA as q,aQ as H,G as Q,aD as U,a1 as W,a6 as E,U as G,a5 as Y,V as J,T as K,$ as X,a0 as Z}from"./4SDWm5CT.js";import{_ as ee}from"./SrvUaFhG.js";import{a as ne}from"./CQt0DnLH.js";const te={class:"flex flex-col"},oe={__name:"ingredients-list",props:{ingredients:{type:Array,required:!0,default:()=>[]}},setup(u){return(I,$)=>{const a=ee;return n(),h("div",te,[(n(!0),h(v,null,w(u.ingredients,l=>(n(),i(a,{key:l.id},{start:e(()=>[k(f(l.name),1)]),_:2},1024))),128))])}}},se=P(oe,[["__scopeId","data-v-4de70c28"]]),ae={key:0,class:"inner-content py-2"},ce={class:"line-through"},ie=p("span",null," dodane",-1),le={class:"line-through"},re=p("span",null," dodane",-1),_e={__name:"add-recipe-to-shopping-list-modal",props:{recipe:{type:Object,default:()=>{}},cancel:{type:Function,default:()=>{}},confirmModal:{type:Function,default:()=>{}}},setup(u){const I=j(),{updateShoppingList:$,getAllShoppingLists:a}=I,{shoppingLists:l,collaboratedShoppingLists:y}=C(I),d=u,m=A(!1),x=A(""),S=async r=>{const c=r.recipes;if(m.value=!0,c.find(_=>_.name===d.recipe.name)){const _=c.findIndex(z=>z.name===d.recipe.name);x.value=`Przepis "${d.recipe.name}" został usunięty z listy "${r.name}"`,c.splice(_,1)}else x.value=`Przepis "${d.recipe.name}" został dodany do listy "${r.name}"`,c.push(d.recipe);setTimeout(()=>{m.value=!1},2e3),await $({...r,recipes:c}),r.recipes=c};return N(async()=>{await a()}),(r,c)=>{const _=M,z=O,g=V,B=D,R=F,b=q;return u.recipe?(n(),h("div",ae,[t(_,{class:"text-lg text-center"},{default:e(()=>[k("Wybierz listę do której chcesz dodać przepis")]),_:1}),t(R,{inset:!0,lines:"inset"},{default:e(()=>[t(z,null,{default:e(()=>[k(" Twoje listy ")]),_:1}),(n(!0),h(v,null,w(s(l),o=>(n(),i(B,{onClick:()=>S(o),key:o.id},{default:e(()=>[o.recipes.find(L=>L.name===u.recipe.name)?(n(),i(g,{key:1},{default:e(()=>[p("span",ce,f(o.name),1),ie]),_:2},1024)):(n(),i(g,{key:0},{default:e(()=>[p("p",null,f(o.name),1)]),_:2},1024))]),_:2},1032,["onClick"]))),128))]),_:1}),s(y)&&s(y).length?(n(),i(_,{key:0,class:"text-lg"},{default:e(()=>[k("Listy do których zostałeś zaproszony")]),_:1})):T("",!0),t(R,{inset:!0,lines:"inset"},{default:e(()=>[(n(!0),h(v,null,w(s(y),o=>(n(),i(B,{onClick:()=>S(o),key:o.id},{default:e(()=>[o.recipes.find(L=>L.name===u.recipe.name)?(n(),i(g,{key:1},{default:e(()=>[p("span",le,f(o.name),1),re]),_:2},1024)):(n(),i(g,{key:0},{default:e(()=>[p("p",null,f(o.name),1)]),_:2},1024))]),_:2},1032,["onClick"]))),128))]),_:1}),t(b,{"is-open":s(m),message:s(x),duration:2e3},null,8,["is-open","message"])])):T("",!0)}}},pe=p("h3",null,"Składniki",-1),ue={key:0},de={key:1},ye={__name:"index",setup(u){const I=U(),$=H(),{currentRecipe:a}=C($),l=A(),y=()=>l.value.$el.dismiss(null,"cancel"),d=()=>l.value.$el.dismiss(null,"confirm");return Q(I,async(m,x)=>{y()}),(m,x)=>{const S=E,r=G,c=Y,_=J,z=M,g=se,B=K,R=_e,b=X,o=Z,L=W;return n(),i(L,null,{default:e(()=>[t(z,null,{default:e(()=>[t(_,null,{default:e(()=>[t(r,{slot:"start"},{default:e(()=>[t(S,{text:"",icon:"ioniconsArrowBackOutline"in m?m.ioniconsArrowBackOutline:s(ne)},null,8,["icon"])]),_:1}),t(c,null,{default:e(()=>[k("Przepisy")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[p("h2",null,f(s(a).name),1),pe,t(g,{ingredients:s(a).ingredients},null,8,["ingredients"]),s(a).steps?(n(),h("h3",ue,"Przepis")):T("",!0),s(a).steps?(n(),h("p",de,f(s(a).steps),1)):T("",!0),t(B,{expand:"block",class:"mt-8",id:"open-recipe-to-shopping-list-modal"},{default:e(()=>[k(" Dodaj do listy zakupowej ")]),_:1}),t(b,{class:"auto-height",ref_key:"modal",ref:l,trigger:"open-recipe-to-shopping-list-modal"},{default:e(()=>[t(R,{cancel:y,"confirm-modal":d,recipe:s(a)},null,8,["recipe"])]),_:1},512)]),_:1})]),_:1})}}};export{ye as default};
