import{i as j,r as m,t as p,v as N,x as L,y as z,P as F,z as h,A as _,R as q,Q as H,N as B,_ as Q,Z as X,B as $,S as J,V as ee,W as te,Y as oe}from"./CGaVrOoi.js";import{_ as ne}from"./dyh3HdRN.js";import{_ as ae}from"./C34Zsy35.js";import{T as se,u as re}from"./D7uZvskA.js";import{u as ce}from"./oj6a8h26.js";const le=L("h1",null,"OCR - Odczyt paragonu",-1),ue={key:0},ie={key:0},pe={key:1},de=L("h2",null,"Rozpoznane produkty:",-1),fe={__name:"tesseract",setup(O){const{popularStores:M}=re(),{shoppingItemsCategories:b}=ce(),P=j(()=>{const n={};for(const[o,e]of Object.entries(b))e.forEach(t=>{n[t]=o});return n}),g=m(null),w=m([]),I=m(0),r=m(null),v=m(null),k=m(null);let C=null,y=null,d=0;const T=async n=>{g.value=null,C=null,y=null,d=0,v.value=null;const o=n.target.files[0];if(!o)return;const e=new Image,t=new FileReader;t.onload=a=>{e.src=a.target.result},e.onload=()=>A(e),t.readAsDataURL(o)},A=n=>{const o=r.value.getContext("2d");r.value.width=n.width,r.value.height=n.height,o.drawImage(n,0,0),D(o),E()},D=n=>{const o=n.getImageData(0,0,r.value.width,r.value.height),e=o.data;for(let t=0;t<e.length;t+=4){const a=(e[t]+e[t+1]+e[t+2])/3;e[t]=e[t+1]=e[t+2]=a}n.putImageData(o,0,0)},E=()=>{r.value.toBlob(n=>{se.recognize(n,"pol").then(({data:{text:o}})=>{g.value=o,W(o)}).catch(o=>console.error("OCR processing error:",o))})},U=n=>{for(let o of M){const e=o.length*.5,t=o.toLowerCase(),a=n.toLowerCase();if(a.includes(t)&&t.split("").filter(u=>a.includes(u)).length>=e)return o}return null},G={O:["0"],0:["O"],I:["1","l"],1:["I","l"],l:["I","1"],o:["0"],i:["1","l"],5:["S"],S:["5"],2:["Z"],Z:["2"],8:["B"],B:["8"],7:["T"],T:["7"],E:["F"],F:["E"],G:["6"],6:["G"],C:["G"],D:["O"],P:["R"],R:["P"],Q:["O"],Y:["V"],V:["Y"],X:["K"],K:["X"],W:["V"],V:["W"],N:["M"],M:["N"],U:["V"],V:["U"],a:["q","o"],q:["a","o"],s:["5"],z:["2"],b:["8"],g:["6"],h:["n"],n:["h"]},S=n=>G[n]||[],Z=(n,o)=>{if(n===o)return!0;const e=S(n),t=S(o);return e.includes(o)||t.includes(n)},K=n=>{const o=n.toLowerCase();let e;const t=a=>{for(let l in P.value){const u=l.toLowerCase();for(let c=0;c<=u.length-a;c++){const f=u.slice(c,c+a);let s=!1;if(o.includes(f))s=!0;else for(let i=0;i<f.length;i++){const R=f[i],x=o.slice(c,c+a);if(x[i]&&Z(R,x[i]))s=!0;else{s=!1;break}}if(s)return P.value[l]}}return""};return e=t(7),e||(e=t(6),e)||(e=t(5),e)||(e=t(4),e)?e:""},W=n=>{const o=n.split(`
`),e=[];o.forEach(t=>{if(t.match(/gotówka/i))return;if(!v.value){const s=U(t);v.value=s}const a=t.match(/-?\d{1,4},\d{2}[ABC]/),l=t.match(/\d{1,4},\d{2}/),u=t.match(/SUMA\sPLN/),c=t.match(/RAZEM\sPLN/),f=t.match(/\d{4}\s*-\s*\d{2}\s*-\s*\d{2}/);if(u&&V(u,"sumaPLN"),c&&V(c,"razemPLN"),f&&(k.value=f[0].replaceAll(" ","")),l){const s=parseFloat(l[0].replace(",","."));s>d&&(d=s)}if(a){const s=t.match(/^[^\d]+/),i=parseFloat(a[0].replace(/[ABC]/,"").replace(",","."));if(s){const R=K(s[0].trim());e.push({name:s[0].trim(),price:i,category:R})}}}),I.value=Y(),w.value=e},V=(n,o)=>{const e=n.input.match(/\d{1,4},\d{2}/);if(e){const t=parseFloat(e[0].replace(",","."));o==="sumaPLN"&&(C=t),o==="razemPLN"&&(y=t)}},Y=()=>C&&C===d?C:y&&y===d?y:d;return(n,o)=>{const e=ne,t=ae;return p(),N("div",null,[le,L("input",{type:"file",onChange:T},null,32),L("canvas",{ref_key:"canvas",ref:r,style:{display:"none"}},null,512),g.value?(p(),N("div",ue,[v.value?(p(),N("h2",ie,"Nazwa sklepu: "+z(v.value),1)):F("",!0),k.value?(p(),N("h3",pe,"Data zakupów: "+z(k.value),1)):F("",!0),de,h(t,null,{default:_(()=>[(p(!0),N(q,null,H(w.value,(a,l)=>(p(),B(e,{key:l,name:a.name,price:a.price,category:a.category},null,8,["name","price","category"]))),128))]),_:1}),L("h2",null,"Suma PLN: "+z(I.value),1)])):F("",!0)])}}},me={};function he(O,M){const b=J,P=ee,g=te,w=fe,I=oe,r=X;return p(),B(r,null,{default:_(()=>[h(g,{style:{background:"var(--ion-color-light)"}},{default:_(()=>[h(P,null,{default:_(()=>[h(b,null,{default:_(()=>[$("OCR")]),_:1})]),_:1})]),_:1}),h(I,{fullscreen:!0},{default:_(()=>[h(w)]),_:1})]),_:1})}const Ne=Q(me,[["render",he],["__scopeId","data-v-b088c292"]]);export{Ne as default};
