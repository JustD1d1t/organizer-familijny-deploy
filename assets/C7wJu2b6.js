import{u as z,aR as b,r as _,N as A,A as a,a2 as I,t as R,z as s,B as p,P as V,ah as T,x as o,l as B,a7 as N,V as j,W as E,X as L,T as M,a1 as F,aI as H,ar as P}from"./BVzA7Ocv.js";import{_ as U}from"./CXi93bau.js";import{_ as $}from"./D6bnyKlD.js";import"./CHVAF33P.js";const D=o("p",null,"Możesz dodawać przepisy ze stron:",-1),O=o("ul",{class:"my-2"},[o("li",null,"www.przepisy.pl"),o("li",null,"www.aniagotuje.pl"),o("li",null,"www.kwestiasmaku.com"),o("li",null,"www.kucnialidla.pl"),o("li",null,"www.poprostupycha.com.pl"),o("li",null,"www.aniastarmach.pl"),o("li",null,"www.doradcasmaku.pl")],-1),W=o("span",{class:"text-center block"},"lub",-1),Q={__name:"index",props:{cancel:{type:Function,default:()=>{}},confirmModal:{type:Function,default:()=>{}}},setup(X){const m=z(),{backendUrl:y}=P(),w=localStorage.getItem("uid"),f=b(),{addRecipe:h}=f;_();const t=_(""),k=async r=>{try{return(await H.get(`${y}/html`,{params:{url:r}})).data.data}catch(e){console.error("Error fetching content:",e)}},g=async()=>{const r=await k(t.value),e=document.createElement("html");e.innerHTML=r;let n,l,c=[];t.value.includes("przepisy.pl")?(n=e.querySelector(".title").textContent,l=e.querySelectorAll(".ingredients-list-content-item")):t.value.includes("aniagotuje.pl")?(n=e.querySelector(".article-content h1").textContent,l=e.querySelectorAll(".recipe-ing-list li")):t.value.includes("kwestiasmaku.com")?(n=e.querySelector("h1.przepis").textContent,l=e.querySelectorAll(".field-name-field-skladniki ul li")):t.value.includes("kuchnialidla.pl")?(n=e.querySelector(".lead h1").textContent,l=e.querySelectorAll(".skladniki ul li")):t.value.includes("poprostupycha.com.pl")?(n=e.querySelector("h1.entry-title").textContent,l=e.querySelectorAll(".ingredient")):t.value.includes("aniastarmach.pl")?(n=e.querySelector("h1.recipe-name").textContent,l=e.querySelectorAll(".recipe-what-to-buy ul li")):t.value.includes("doradcasmaku.pl")&&(n=e.querySelector("h1.grid-in-title").textContent,l=e.querySelectorAll(".grid-in-ingredients tbody tr")),l.forEach(u=>{c.push({name:u.textContent})});const i={name:n,ingredients:c,userId:w,url:t.value};await h(i),m.back()},x=()=>{B("/recipes/new/own")};return(r,e)=>{const n=N,l=j,c=E,i=L,u=U,S=$,d=M,C=F,q=I;return R(),A(q,null,{default:a(()=>[s(c,{style:{background:"var(--ion-color-light)"}},{default:a(()=>[s(l,null,{default:a(()=>[s(n,null,{default:a(()=>[p("Nowa lista zakupowa")]),_:1})]),_:1})]),_:1}),s(C,{fullscreen:!0},{default:a(()=>[s(u,null,{default:a(()=>[s(i,{label:"Adres strony",type:"text",modelValue:V(t),"onUpdate:modelValue":e[0]||(e[0]=v=>T(t)?t.value=v:null)},null,8,["modelValue"])]),_:1}),s(S,{class:"mt-8"},{default:a(()=>[D,O]),_:1}),s(d,{onClick:g,class:"my-6"},{default:a(()=>[p(" Dodaj przepis ze strony ")]),_:1}),W,s(d,{type:"secondary",onClick:x,class:"my-6"},{default:a(()=>[p(" Zapisz swój własny przepis ")]),_:1})]),_:1})]),_:1})}}};export{Q as default};