import{_ as O,ay as V,M as $,aC as G,r as H,i as M,o as R,N as w,A as e,aD as U,a1 as q,t as u,z as o,P as h,B as _,aF as v,aG as k,x as d,v as F,S as P,R as W,aH as Y,a6 as Z,U as J,a5 as K,V as Q,W as X,ab as ee,ad as oe,a0 as te,y as ne,C as ae,D as se,ao as re,l as le,aI as ce,T as pe,Y as ie}from"./4SDWm5CT.js";import{a as ue}from"./CQt0DnLH.js";import{_ as _e,S as de}from"./CmhpIAtH.js";const me=a=>(ae("data-v-ae3d54ac"),a=a(),se(),a),fe={class:"w-full flex flex-col justify-center items-center h-full"},we=me(()=>d("span",null,"ładowanie gazetek",-1)),he={__name:"index",setup(a){const{backendUrl:I}=re(),S=V(),{shops:b}=$(S);_e.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.mjs";const m=U().params.shop,r=G(de.Newspapers,()=>[]),n=H(!1),x=M(()=>b.value[m]),B=async()=>{try{return n.value=!0,(await Y.get(`${I}/html`,{params:{url:x.value.url}})).data.data}catch(t){n.value=!1,console.error("Error fetching shops:",t)}},g=async()=>{r.value=[];const t=await B(),s=document.createElement("html");s.innerHTML=t;const l=s.querySelectorAll(".newspapper-footer p"),c=s.querySelectorAll(".newspapper-nav-item.newspapper-nav-download");l.forEach((p,i)=>{r.value.push({title:p.textContent,url:c[i].href})}),n.value=!1},y=t=>{le(`/newspaper/${m}/${t}`)};return R(()=>{g()}),(t,s)=>{const l=Z,c=J,p=K,i=Q,N=X,C=ee,T=ce,j=pe,A=ie,E=oe,L=te,z=q;return u(),w(z,null,{default:e(()=>[o(N,null,{default:e(()=>[o(i,null,{default:e(()=>[o(c,{slot:"start"},{default:e(()=>[o(l,{text:"",icon:"ioniconsArrowBackOutline"in t?t.ioniconsArrowBackOutline:h(ue)},null,8,["icon"])]),_:1}),o(p,null,{default:e(()=>[_("Gazetki")]),_:1})]),_:1})]),_:1}),o(L,null,{default:e(()=>[v(d("div",fe,[o(C,{name:"lines-sharp"}),we],512),[[k,n.value]]),v(d("div",null,[o(E,null,{default:e(()=>[(u(!0),F(W,null,P(h(r),(f,D)=>(u(),w(A,{key:f.title},{default:e(()=>[o(T,null,{default:e(()=>[_(ne(f.title),1)]),_:2},1024),o(j,{onClick:Ie=>y(D),fill:"clear"},{default:e(()=>[_(" Zobacz ")]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})],512),[[k,!n.value]])]),_:1})]),_:1})}}},Be=O(he,[["__scopeId","data-v-ae3d54ac"]]);export{Be as default};
