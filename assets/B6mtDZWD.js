import{i as j,r as m,t as p,v as N,x as L,y as z,R as F,z as h,A as _,S as q,T as H,O as B,_ as Y,a6 as $,B as Q,a3 as J,W as ee,X as te,a5 as oe}from"./CtmnvVoy.js";import{_ as ae}from"./Ufd8k24s.js";import{_ as ne}from"./o7ityAlN.js";import{T as se,u as re}from"./D7uZvskA.js";import{u as ce}from"./oj6a8h26.js";const le=L("h1",null,"OCR - Odczyt paragonu",-1),ue={key:0},ie={key:0},pe={key:1},de=L("h2",null,"Rozpoznane produkty:",-1),fe={__name:"tesseract",setup(V){const{popularStores:M}=re(),{shoppingItemsCategories:b}=ce(),w=j(()=>{const a={};for(const[o,e]of Object.entries(b))e.forEach(t=>{a[t]=o});return a}),g=m(null),P=m([]),I=m(0),r=m(null),v=m(null),k=m(null);let C=null,y=null,d=0;const T=async a=>{g.value=null,C=null,y=null,d=0,v.value=null;const o=a.target.files[0];if(!o)return;const e=new Image,t=new FileReader;t.onload=n=>{e.src=n.target.result},e.onload=()=>A(e),t.readAsDataURL(o)},A=a=>{const o=r.value.getContext("2d");r.value.width=a.width,r.value.height=a.height,o.drawImage(a,0,0),D(o),E()},D=a=>{const o=a.getImageData(0,0,r.value.width,r.value.height),e=o.data;for(let t=0;t<e.length;t+=4){const n=(e[t]+e[t+1]+e[t+2])/3;e[t]=e[t+1]=e[t+2]=n}a.putImageData(o,0,0)},E=()=>{r.value.toBlob(a=>{se.recognize(a,"pol").then(({data:{text:o}})=>{g.value=o,X(o)}).catch(o=>console.error("OCR processing error:",o))})},U=a=>{for(let o of M){const e=o.length*.5,t=o.toLowerCase(),n=a.toLowerCase();if(n.includes(t)&&t.split("").filter(u=>n.includes(u)).length>=e)return o}return null},G={O:["0"],0:["O"],I:["1","l"],1:["I","l"],l:["I","1"],o:["0"],i:["1","l"],5:["S"],S:["5"],2:["Z"],Z:["2"],8:["B"],B:["8"],7:["T"],T:["7"],E:["F"],F:["E"],G:["6"],6:["G"],C:["G"],D:["O"],P:["R"],R:["P"],Q:["O"],Y:["V"],V:["Y"],X:["K"],K:["X"],W:["V"],V:["W"],N:["M"],M:["N"],U:["V"],V:["U"],a:["q","o"],q:["a","o"],s:["5"],z:["2"],b:["8"],g:["6"],h:["n"],n:["h"]},O=a=>G[a]||[],K=(a,o)=>{if(a===o)return!0;const e=O(a),t=O(o);return e.includes(o)||t.includes(a)},W=a=>{const o=a.toLowerCase();let e;const t=n=>{for(let l in w.value){const u=l.toLowerCase();for(let c=0;c<=u.length-n;c++){const f=u.slice(c,c+n);let s=!1;if(o.includes(f))s=!0;else for(let i=0;i<f.length;i++){const R=f[i],x=o.slice(c,c+n);if(x[i]&&K(R,x[i]))s=!0;else{s=!1;break}}if(s)return w.value[l]}}return""};return e=t(7),e||(e=t(6),e)||(e=t(5),e)||(e=t(4),e)?e:""},X=a=>{const o=a.split(`
`),e=[];o.forEach(t=>{if(t.match(/gotówka/i))return;if(!v.value){const s=U(t);v.value=s}const n=t.match(/-?\d{1,4},\d{2}[ABC]/),l=t.match(/\d{1,4},\d{2}/),u=t.match(/SUMA\sPLN/),c=t.match(/RAZEM\sPLN/),f=t.match(/\d{4}\s*-\s*\d{2}\s*-\s*\d{2}/);if(u&&S(u,"sumaPLN"),c&&S(c,"razemPLN"),f&&(k.value=f[0].replaceAll(" ","")),l){const s=parseFloat(l[0].replace(",","."));s>d&&(d=s)}if(n){const s=t.match(/^[^\d]+/),i=parseFloat(n[0].replace(/[ABC]/,"").replace(",","."));if(s){const R=W(s[0].trim());e.push({name:s[0].trim(),price:i,category:R})}}}),I.value=Z(),P.value=e},S=(a,o)=>{const e=a.input.match(/\d{1,4},\d{2}/);if(e){const t=parseFloat(e[0].replace(",","."));o==="sumaPLN"&&(C=t),o==="razemPLN"&&(y=t)}},Z=()=>C&&C===d?C:y&&y===d?y:d;return(a,o)=>{const e=ae,t=ne;return p(),N("div",null,[le,L("input",{type:"file",onChange:T},null,32),L("canvas",{ref_key:"canvas",ref:r,style:{display:"none"}},null,512),g.value?(p(),N("div",ue,[v.value?(p(),N("h2",ie,"Nazwa sklepu: "+z(v.value),1)):F("",!0),k.value?(p(),N("h3",pe,"Data zakupów: "+z(k.value),1)):F("",!0),de,h(t,null,{default:_(()=>[(p(!0),N(q,null,H(P.value,(n,l)=>(p(),B(e,{key:l,name:n.name,price:n.price,category:n.category},null,8,["name","price","category"]))),128))]),_:1}),L("h2",null,"Suma PLN: "+z(I.value),1)])):F("",!0)])}}},me={};function he(V,M){const b=J,w=ee,g=te,P=fe,I=oe,r=$;return p(),B(r,null,{default:_(()=>[h(g,{style:{background:"var(--ion-color-light)"}},{default:_(()=>[h(w,null,{default:_(()=>[h(b,null,{default:_(()=>[Q("OCR")]),_:1})]),_:1})]),_:1}),h(I,{fullscreen:!0},{default:_(()=>[h(P)]),_:1})]),_:1})}const Ne=Y(me,[["render",he],["__scopeId","data-v-b088c292"]]);export{Ne as default};