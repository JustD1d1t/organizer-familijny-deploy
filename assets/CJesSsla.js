import{aQ as k,t as s,v as c,x as h,z as e,A as n,B as I,y as $,P as i,l as g,aI as j,a9 as w,T as P,M as V,o as F,N as b,a1 as L,R as M,S as D,a7 as E,U as H,a6 as Q,V as U,W,ac as q,af as G,ag as J,a0 as K}from"./idRAp1hA.js";import{j as X,a as Y,d as Z}from"./CQt0DnLH.js";const ee={class:"flex flex-col py-2 pl-6 pr-2 my-1 bg-white rounded-2xl shadow-2xl"},ne={class:"flex items-center"},oe={class:"flex flex-col grow"},te={__name:"item",props:{recipe:{type:Object,default:()=>{}}},setup(l){const r=k(),{deleteRecipe:_,setCurrentRecipe:d}=r,p=o=>{g(`/recipes/${o.id}`),d(o)};return(o,a)=>{const u=j,t=w,m=P;return s(),c("div",ee,[h("div",ne,[h("div",oe,[e(u,{class:"flex-grow font-bold",onClick:a[0]||(a[0]=()=>p(l.recipe))},{default:n(()=>[I($(l.recipe.name),1)]),_:1})]),e(m,{fill:"clear",id:"open-shopping-menu",class:"ml-auto",size:"small",onClick:a[1]||(a[1]=()=>i(_)(l.recipe.id))},{default:n(()=>[e(t,{size:"medium",icon:"ioniconsTrashOutline"in o?o.ioniconsTrashOutline:i(X)},null,8,["icon"])]),_:1})])])}}},se={key:0,class:"w-full flex justify-center items-center h-full"},ie={key:1},ae={key:2,class:"w-full"},re={__name:"index",setup(l){const r=k(),{getRecipes:_,deleteRecipe:d,setCurrentRecipe:p}=r,{recipes:o,isLoading:a}=V(r);F(async()=>{await _()});const u=t=>{g("/recipes/new")};return(t,m)=>{const B=E,x=H,y=Q,R=U,z=W,T=q,v=te,C=w,O=G,A=J,S=K,N=L;return s(),b(N,null,{default:n(()=>[e(z,null,{default:n(()=>[e(R,null,{default:n(()=>[e(x,{slot:"start"},{default:n(()=>[e(B,{text:"",icon:"ioniconsArrowBackOutline"in t?t.ioniconsArrowBackOutline:i(Y)},null,8,["icon"])]),_:1}),e(y,null,{default:n(()=>[I("Przepisy")]),_:1})]),_:1})]),_:1}),e(S,{fullscreen:!0},{default:n(()=>[i(a)?(s(),c("div",se,[e(T,{name:"lines-sharp"})])):i(o).length?(s(),c("div",ae,[(s(!0),c(M,null,D(i(o),f=>(s(),b(v,{key:f.id,recipe:f},null,8,["recipe"]))),128))])):(s(),c("h2",ie,"Nie masz jeszcze przepisów")),e(A,{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:n(()=>[e(O,{onClick:u},{default:n(()=>[e(C,{icon:"ioniconsAdd"in t?t.ioniconsAdd:i(Z)},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{re as default};
