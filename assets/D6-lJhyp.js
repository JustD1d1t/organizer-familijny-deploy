import{_ as O,aB as V,M as D,aE as H,r as M,i as R,o as U,N as h,A as e,aF as q,a2 as F,t as u,z as o,P as w,B as _,aH as v,aI as k,x as d,v as G,S as P,R as W,aJ as Z,a8 as J,U as K,a7 as Q,V as X,W as Y,ad as ee,$ as oe,a1 as te,y as ne,C as ae,D as se,ar as re,l as le,aK as ce,T as pe,Z as ie}from"./CHh_xvd5.js";import{a as ue}from"./CHVAF33P.js";import{_ as _e,S as de}from"./DYt7ByDy.js";const me=a=>(ae("data-v-3e983aa5"),a=a(),se(),a),fe={class:"w-full flex flex-col justify-center items-center h-full"},he=me(()=>d("span",null,"ładowanie gazetek",-1)),we={__name:"index",setup(a){const{backendUrl:I}=re(),S=V(),{shops:b}=D(S);_e.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.mjs";const m=q().params.shop,r=H(de.Newspapers,()=>[]),n=M(!1),g=R(()=>b.value[m]),x=async()=>{try{return n.value=!0,(await Z.get(`${I}/html`,{params:{url:g.value.url}})).data.data}catch(t){n.value=!1,console.error("Error fetching shops:",t)}},B=async()=>{r.value=[];const t=await x(),s=document.createElement("html");s.innerHTML=t;const l=s.querySelectorAll(".newspapper-footer p"),c=s.querySelectorAll(".newspapper-nav-item.newspapper-nav-download");l.forEach((p,i)=>{r.value.push({title:p.textContent,url:c[i].href})}),n.value=!1},y=t=>{le(`/newspaper/${m}/${t}`)};return U(()=>{B()}),(t,s)=>{const l=J,c=K,p=Q,i=X,N=Y,T=ee,C=ce,E=pe,j=ie,A=oe,L=te,$=F;return u(),h($,null,{default:e(()=>[o(N,{style:{background:"var(--ion-color-light)"}},{default:e(()=>[o(i,null,{default:e(()=>[o(c,{slot:"start"},{default:e(()=>[o(l,{text:"",icon:"ioniconsArrowBackOutline"in t?t.ioniconsArrowBackOutline:w(ue)},null,8,["icon"])]),_:1}),o(p,null,{default:e(()=>[_("Gazetki")]),_:1})]),_:1})]),_:1}),o(L,null,{default:e(()=>[v(d("div",fe,[o(T,{name:"lines-sharp"}),he],512),[[k,n.value]]),v(d("div",null,[o(A,null,{default:e(()=>[(u(!0),G(W,null,P(w(r),(f,z)=>(u(),h(j,{key:f.title},{default:e(()=>[o(C,null,{default:e(()=>[_(ne(f.title),1)]),_:2},1024),o(E,{onClick:Ie=>y(z),fill:"clear"},{default:e(()=>[_(" Zobacz ")]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})],512),[[k,!n.value]])]),_:1})]),_:1})}}},xe=O(we,[["__scopeId","data-v-3e983aa5"]]);export{xe as default};