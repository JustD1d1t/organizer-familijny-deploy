import{_ as G,aC as O,r as s,i as H,G as L,o as $,N as M,A as n,aD as W,aE as Y,a1 as q,t as J,z as e,P as K,B as g,aF as C,aG as b,x as c,y as P,aH as Q,a7 as X,U as Z,a6 as ee,V as ae,W as te,ac as ne,Y as oe,T as se,ae as le,a0 as ce,C as re,D as ie,ap as ue}from"./idRAp1hA.js";import{a as _e}from"./CQt0DnLH.js";import{_ as pe,S as de,a as fe}from"./DLWorOho.js";const ve=u=>(re("data-v-2fe9af18"),u=u(),ie(),u),me={class:"w-full flex flex-col justify-center items-center h-full"},we=ve(()=>c("span",null,"ładowanie gazetki",-1)),he={class:"text-base"},ge={class:"w-[100%] flex justify-between items-center"},ke={__name:"index",setup(u){const{backendUrl:S}=ue();pe.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.mjs";const k=W(),B=k.params.id,D=O(de.Newspapers,()=>[]),F=s(1),l=s(1),p=s(0),x=s(""),d=s(null),_=s(null),i=s(!1),f=s(!1),y=H(()=>D.value[B]),T=async a=>{try{return f.value=!0,i.value=!0,(await Q.get(`${S}/html/pdf`,{params:{url:a},responseType:"arraybuffer"})).data}catch(t){throw i.value=!1,console.error("Error fetching content:",t),t}},j=async()=>{try{const a=await T(y.value.url),t=new Uint8Array(a);fe({data:t}).promise.then(o=>{_.value=o,p.value=_.value.numPages,v(l.value)}).catch(o=>{alert("Failed to load PDF: "+o.message)})}catch(a){alert("Failed to load PDF: "+a.message)}},N=()=>{l.value>1&&(l.value--,v(l.value))},z=()=>{l.value<p.value&&(l.value++,v(l.value))},v=async a=>{if(!(!_.value||!f.value))try{const t=await Y(_.value).getPage(a),r=t.getViewport({scale:F.value}),o=document.createElement("canvas"),m=o.getContext("2d");o.width=r.width,o.height=r.height;const w={canvasContext:m,viewport:r};await t.render(w).promise,o.style.width="100%",d.value.innerHTML="",d.value.appendChild(o),i.value=!1,x.value=`Strona ${a} z ${p.value}`}catch(t){alert("Failed to render page: "+t.message)}};return L(k,async(a,t)=>{f.value=!1}),$(()=>{j()}),(a,t)=>{const r=X,o=Z,m=ee,w=ae,A=te,R=ne,h=oe,I=se,U=le,V=ce,E=q;return J(),M(E,null,{default:n(()=>[e(A,null,{default:n(()=>[e(w,null,{default:n(()=>[e(o,{slot:"start"},{default:n(()=>[e(r,{text:"",icon:"ioniconsArrowBackOutline"in a?a.ioniconsArrowBackOutline:K(_e)},null,8,["icon"])]),_:1}),e(m,null,{default:n(()=>[g("Gazetki")]),_:1})]),_:1})]),_:1}),e(V,null,{default:n(()=>[C(c("div",me,[e(R,{name:"lines-sharp"}),we],512),[[b,i.value]]),C(c("div",null,[e(U,{lines:"none"},{default:n(()=>[e(h,null,{default:n(()=>[c("h1",he,P(y.value.title),1)]),_:1}),e(h,{class:"canvas"},{default:n(()=>[c("div",{ref_key:"pagesContainer",ref:d,class:"w-[100%]"},null,512)]),_:1}),e(h,null,{default:n(()=>[c("div",ge,[e(I,{onClick:N,fill:"clear"},{default:n(()=>[g(" Poprzednia ")]),_:1}),c("span",null,P(x.value),1),e(I,{onClick:z,fill:"clear"},{default:n(()=>[g("Następna")]),_:1})])]),_:1})]),_:1})],512),[[b,!i.value]])]),_:1})]),_:1})}}},be=G(ke,[["__scopeId","data-v-2fe9af18"]]);export{be as default};
