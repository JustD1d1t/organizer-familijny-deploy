import{b5 as I,i as M,t as i,v as c,x as n,z as o,A as e,B as w,y as k,O as l,b6 as Z,b8 as q,l as B,al as x,a5 as v,X as D,L as E,o as H,N as g,Z as Q,R as U,Q as W,T as X,U as Y,S as J,V as K,W as nn,ao as on,a1 as en,a$ as tn,a_ as sn,aq as ln,ar as an,Y as cn,$ as rn,a9 as un}from"./CGaVrOoi.js";import{_ as _n}from"./B6NyEy0m.js";const pn={class:"flex flex-col py-2 pl-6 pr-2 my-1 bg-white rounded-2xl shadow-2xl"},dn={class:"flex items-center"},mn={class:"flex flex-col grow"},wn=["href"],fn={__name:"item",props:{recipe:{type:Object,default:()=>{}}},setup(a){const r=a,p=I(),{deleteRecipe:f,setCurrentRecipe:h}=p,u=s=>{B(`/recipes/${s.id}`),h(s)},d=M(()=>{const s=/(https?:\/\/)?(www\.)?[\w\-]+\.(com|com\.pl|pl)/,t=r.recipe.url.match(s);return t?t[0]:null});return(s,t)=>{const b=x,_=v,m=D;return i(),c("div",pn,[n("div",dn,[n("div",mn,[o(b,{class:"flex-grow font-bold",onClick:t[0]||(t[0]=()=>u(a.recipe))},{default:e(()=>[w(k(a.recipe.name),1)]),_:1}),n("a",{href:a.recipe.url,class:"flex items-center"},[o(_,{size:"small",icon:"ioniconsGlobeOutline"in s?s.ioniconsGlobeOutline:l(Z),class:"mr-1"},null,8,["icon"]),w(" "+k(l(d)),1)],8,wn)]),o(m,{id:"open-shopping-menu",class:"ml-auto",onClick:t[1]||(t[1]=()=>l(f)(a.recipe.id)),type:"tertiary"},{default:e(()=>[o(_,{size:"medium",icon:"ioniconsTrashOutline"in s?s.ioniconsTrashOutline:l(q)},null,8,["icon"])]),_:1})])])}}},hn={key:0,class:"w-full flex justify-center items-center h-full"},bn={key:1},zn=n("h4",null,"Nie masz jeszcze zapisanych przepisów.",-1),yn=n("ul",{class:"my-2"},[n("li",null,"www.przepisy.pl"),n("li",null,"www.aniagotuje.pl"),n("li",null,"www.kwestiasmaku.com"),n("li",null,"www.kucnialidla.pl"),n("li",null,"www.poprostupycha.com.pl"),n("li",null,"www.aniastarmach.pl"),n("li",null,"www.doradcasmaku.pl")],-1),kn=n("p",null,"Zawsze możesz zapisać również swój własny przepis",-1),gn={key:2,class:"w-full"},In=n("b",null,"Czy wiesz, że...",-1),Bn={class:"ion-padding",slot:"content"},xn=n("ul",{class:"my-2"},[n("li",null,"www.przepisy.pl"),n("li",null,"www.aniagotuje.pl"),n("li",null,"www.kwestiasmaku.com"),n("li",null,"www.kucnialidla.pl"),n("li",null,"www.poprostupycha.com.pl"),n("li",null,"www.aniastarmach.pl"),n("li",null,"www.doradcasmaku.pl")],-1),vn=n("p",null," Zawsze możesz zapisać również swój własny przepis ",-1),Rn={__name:"index",setup(a){const r=I(),{getRecipes:p,deleteRecipe:f,setCurrentRecipe:h}=r,{recipes:u,isLoading:d}=E(r);H(async()=>{await p()});const s=t=>{B("/recipes/new")};return(t,b)=>{const _=X,m=Y,C=J,O=K,R=nn,T=on,z=_n,A=x,$=en,j=tn,S=sn,L=fn,N=v,P=ln,V=an,F=cn,G=Q;return i(),g(G,null,{default:e(()=>[o(R,{style:{background:"var(--ion-color-light)"}},{default:e(()=>[o(O,null,{default:e(()=>[o(m,{slot:"start"},{default:e(()=>[o(_,{text:"",icon:"ioniconsArrowBackOutline"in t?t.ioniconsArrowBackOutline:l(rn)},null,8,["icon"])]),_:1}),o(C,null,{default:e(()=>[w("Przepisy")]),_:1})]),_:1})]),_:1}),o(F,{fullscreen:!0},{default:e(()=>[l(d)?(i(),c("div",hn,[o(T,{name:"lines-sharp"})])):l(u).length?(i(),c("div",gn,[o(S,null,{default:e(()=>[o(j,{value:"first"},{default:e(()=>[o($,{slot:"header",color:"light"},{default:e(()=>[o(A,null,{default:e(()=>[In]),_:1})]),_:1}),n("div",Bn,[o(z,{subtitle:"Możesz dodawać przepisy ze stron:",icon:"ioniconsBulb",class:"mb-4 mt-2"},{default:e(()=>[xn,vn]),_:1})])]),_:1})]),_:1}),(i(!0),c(U,null,W(l(u),y=>(i(),g(L,{key:y.id,recipe:y},null,8,["recipe"]))),128))])):(i(),c("div",bn,[zn,o(z,{title:"Czy wiesz, że...",subtitle:"Możesz dodawać przepisy ze stron:",icon:"ioniconsBulb",class:"mt-8"},{default:e(()=>[yn,kn]),_:1})])),o(V,{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:e(()=>[o(P,{onClick:s},{default:e(()=>[o(N,{icon:"ioniconsAdd"in t?t.ioniconsAdd:l(un)},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{Rn as default};
