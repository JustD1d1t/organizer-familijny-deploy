import{_ as G,ac as H,L as M,aQ as W,r as c,i as Q,G as X,o as Y,N as Z,A as n,aR as q,aS as J,Z as K,t as ee,z as a,O as te,B as g,aT as I,aU as P,x as i,y as T,aV as ae,T as ne,U as oe,S as se,V as re,W as ce,ao as le,a1 as ie,X as ue,Y as de,$ as _e,C as pe,D as fe,ad as ve}from"./kuZdBiAE.js";import{_ as me}from"./Bb74MX_F.js";import{_ as we,S as he,a as ge}from"./ChXT3_QO.js";const ke=d=>(pe("data-v-87f2b768"),d=d(),fe(),d),ye={class:"w-full flex flex-col justify-center items-center h-full"},xe=ke(()=>i("span",null,"ładowanie gazetki",-1)),be={class:"h2 w-full mt-0 mb-0"},Se={class:"w-[100%] flex justify-between items-center"},Ce={__name:"index",setup(d){const{backendUrl:B}=ve(),F=H(),{idToken:j}=M(F);we.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.mjs";const k=q(),D=k.params.id,R=W(he.Newspapers,()=>[]),U=c(1),l=c(1),p=c(0),y=c(""),f=c(null),_=c(null),u=c(!1),v=c(!1),x=c(!1),b=Q(()=>R.value[D]),z=async(o,e)=>{try{const t={imgs:o};e&&(t.pages=e),v.value=!0,u.value=!0;const s=j.value,r=await ae.post(`${B}/html/pdfFromLinks`,t,{responseType:"arraybuffer",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"}});return e===void 0&&(x.value=!0),r.data}catch(t){throw u.value=!1,console.error("Error fetching content:",t),t}},S=async o=>{try{const e=await z(b.value.imgs,o),t=new Uint8Array(e);ge({data:t}).promise.then(r=>{_.value=r,p.value=_.value.numPages,m(l.value)}).catch(r=>{alert("Failed to load PDF: "+r.message)})}catch(e){alert("Failed to load PDF: "+e.message)}},A=()=>{l.value>1&&(l.value--,m(l.value))},N=()=>{l.value<p.value&&(l.value++,m(l.value))},m=async o=>{if(!(!_.value||!v.value))try{const e=await J(_.value).getPage(o),t=e.getViewport({scale:U.value}),s=document.createElement("canvas"),r=s.getContext("2d");s.width=t.width,s.height=t.height;const w={canvasContext:r,viewport:t};await e.render(w).promise,s.style.width="100%",f.value.innerHTML="",f.value.appendChild(s),u.value=!1,y.value=`Strona ${o} z ${x.value?p.value:"..."}`}catch(e){alert("Failed to render page: "+e.message)}};return X(k,async(o,e)=>{v.value=!1}),Y(async()=>{await S(10),await S()}),(o,e)=>{const t=ne,s=oe,r=se,w=re,V=ce,L=le,h=ie,C=ue,O=me,$=de,E=K;return ee(),Z(E,null,{default:n(()=>[a(V,{style:{background:"var(--ion-color-light)"}},{default:n(()=>[a(w,null,{default:n(()=>[a(s,{slot:"start"},{default:n(()=>[a(t,{text:"",icon:"ioniconsArrowBackOutline"in o?o.ioniconsArrowBackOutline:te(_e)},null,8,["icon"])]),_:1}),a(r,null,{default:n(()=>[g("Gazetki")]),_:1})]),_:1})]),_:1}),a($,null,{default:n(()=>[I(i("div",ye,[a(L,{name:"lines-sharp"}),xe],512),[[P,u.value]]),I(i("div",null,[a(O,null,{default:n(()=>[a(h,{class:"text-center"},{default:n(()=>[i("h1",be,T(b.value.title),1)]),_:1}),a(h,{class:"canvas"},{default:n(()=>[i("div",{ref_key:"pagesContainer",ref:f,class:"w-[100%]"},null,512)]),_:1}),a(h,null,{default:n(()=>[i("div",Se,[a(C,{type:"tertiary",onClick:A},{default:n(()=>[g(" Poprzednia ")]),_:1}),i("span",null,T(y.value),1),a(C,{type:"tertiary",onClick:N},{default:n(()=>[g("Następna")]),_:1})])]),_:1})]),_:1})],512),[[P,!u.value]])]),_:1})]),_:1})}}},Fe=G(Ce,[["__scopeId","data-v-87f2b768"]]);export{Fe as default};