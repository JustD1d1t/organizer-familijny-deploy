import{_ as we,L as Ve,u as ye,r,N as P,A as l,a5 as be,t as v,z as a,B as m,x as F,P as s,ao as L,v as S,S as j,R as B,Q as he,a3 as ke,U as xe,V as Ne,W as Ie,X as Le,Y as Ce,Z as Ee,aj as Pe,$ as Se,a2 as De,a4 as Ue,a1 as Me,y as T,a7 as ze,a9 as Re}from"./BClyMcC6.js";import{_ as Fe}from"./CvZxeKqt.js";import{_ as je}from"./CrPWqROi.js";import{T as Be,u as Te}from"./D7uZvskA.js";import{u as Oe}from"./BeWdyBTf.js";const Ae={class:"inner-content"},Ke={key:0,class:"w-full mt-8 flex justify-center items-center h-full"},$e={__name:"index",setup(We){const{popularStores:Y}=Te();Oe();const q=Ve(),{addExpenseToStore:J}=q,ee=localStorage.getItem("uid"),{billCategories:D}=ze(),ae=ye(),C=r(""),E=r(""),g=r(""),w=r(""),f=r(""),k=r([]);r(null),r(null),r(!1);const O=r(!1),U=r(!1),c=r({newShopName:"",newExpenseName:"",newExpenseValue:"",newExpenseDate:""}),b=r(null),A=r(!1),K=r(!1),p=r({name:"",price:"",category:""}),$=r(null),W=r([]),V=r(null);let x=null,N=null,h=0;const le=async n=>{O.value=!1,U.value=!0,$.value=null,x=null,N=null,h=0,f.value="",g.value="",w.value="";const e=n.target.files[0];if(!e)return;const o=new Image,u=new FileReader;u.onload=i=>{o.src=i.target.result},o.onload=()=>te(o),u.readAsDataURL(e)},te=n=>{const e=V.value.getContext("2d");V.value.width=n.width,V.value.height=n.height,e.drawImage(n,0,0),ne(e),oe()},ne=n=>{const e=n.getImageData(0,0,V.value.width,V.value.height),o=e.data;for(let u=0;u<o.length;u+=4){const i=(o[u]+o[u+1]+o[u+2])/3;o[u]=o[u+1]=o[u+2]=i}n.putImageData(e,0,0)},oe=()=>{V.value.toBlob(n=>{Be.recognize(n,"pol").then(({data:{text:e}})=>{$.value=e,ue(e)}).catch(e=>console.error("OCR processing error:",e))})},se=n=>{for(let e of Y){const o=e.length*.5,u=e.toLowerCase(),i=n.toLowerCase();if(i.includes(u)&&u.split("").filter(d=>i.includes(d)).length>=o)return e}return null},ue=n=>{n.split(`
`).forEach(o=>{if(!f.value){const _=se(o);f.value=_}const u=o.match(/\d{1,4},\d{2}/),i=o.match(/SUMA\sPLN/),y=o.match(/RAZEM\sPLN/),d=o.match(/\d{4}\s*-\s*\d{2}\s*-\s*\d{2}/);if(i&&Z(i,"sumaPLN"),y&&Z(y,"razemPLN"),d&&(w.value=d[0].replaceAll(" ","")),u){const _=parseFloat(u[0].replace(",","."));_>h&&(h=_)}}),g.value=re(),O.value=!0,U.value=!1},Z=(n,e)=>{const o=n.input.match(/\d{1,4},\d{2}/);if(o){const u=parseFloat(o[0].replace(",","."));e==="sumaPLN"&&(x=u),e==="razemPLN"&&(N=u)}},re=()=>x&&x===h?x:N&&N===h?N:h,de=()=>{c.value.shopName="",c.value.newExpenseValue="",c.value.newExpenseDate="",c.value.selectedCategory="",f.value||(c.value.shopName="Nazwa sklepu jest wymagana"),g.value||(c.value.newExpenseValue="Kwota jest wymagana"),w.value||(c.value.newExpenseDate="Data jest wymagana")},ie=async()=>{if(de(),Object.values(c.value).some(e=>e))return;const n={name:E.value.toLowerCase(),value:parseFloat(g.value),timestamp:new Date(w.value).getTime(),shop:f.value.toLowerCase(),userId:ee,familyMembers:k.value,items:W.value,category:C.value};await J(n),ae.back()},ce=n=>{k.value.includes(n.id)?k.value=k.value.filter(e=>e!=n.id):k.value.push(n.id)},G=n=>A.value=n,pe=n=>K.value=n,me=()=>{W.value.push({name:p.value.name,price:parseFloat(p.value.price),category:p.value.category}),pe(!1),p.value={name:"",price:"",category:""}};return(n,e)=>{const o=ke,u=xe,i=Ne,y=Ie,d=Le,_=Re,M=Ce,z=Ee,fe=Fe,_e=Pe,ve=Se,H=De,Q=je,R=Ue,X=Me,ge=be;return v(),P(ge,null,{default:l(()=>[a(y,{style:{background:"var(--ion-color-light)"}},{default:l(()=>[a(i,null,{default:l(()=>[a(u,{slot:"end"},{default:l(()=>[a(o,{strong:!0,onClick:e[0]||(e[0]=t=>ie())},{default:l(()=>[m("Dodaj")]),_:1})]),_:1})]),_:1})]),_:1}),a(R,null,{default:l(()=>[F("div",Ae,[a(ve,{lines:"none"},{default:l(()=>[a(d,{type:"file",onChange:le}),a(d,{label:"Nazwa sklepu",modelValue:s(f),"onUpdate:modelValue":e[1]||(e[1]=t=>L(f)?f.value=t:null),error:s(c).shopName},null,8,["modelValue","error"]),a(d,{label:"Nawa wydatku",modelValue:s(E),"onUpdate:modelValue":e[2]||(e[2]=t=>L(E)?E.value=t:null)},null,8,["modelValue"]),a(d,{label:"Całkowita kwota",type:"number",error:s(c).newExpenseValue,modelValue:s(g),"onUpdate:modelValue":e[3]||(e[3]=t=>L(g)?g.value=t:null)},null,8,["error","modelValue"]),a(d,{label:"Data",type:"date",error:s(c).newExpenseDate,modelValue:s(w),"onUpdate:modelValue":e[4]||(e[4]=t=>L(w)?w.value=t:null)},null,8,["error","modelValue"]),a(z,null,{default:l(()=>[a(M,{label:"Kategoria","label-placement":"stacked",modelValue:s(C),"onUpdate:modelValue":e[5]||(e[5]=t=>L(C)?C.value=t:null)},{default:l(()=>[(v(!0),S(B,null,j(s(D),(t,I)=>(v(),P(_,{key:I,value:t},{default:l(()=>[m(T(t),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(fe,{onToggleMember:ce}),F("div",null,[F("canvas",{ref_key:"canvas",ref:V,style:{display:"none"}},null,512),s(U)?(v(),S("div",Ke,[a(_e,{name:"lines-sharp"})])):he("",!0)])]),_:1})]),a(X,{"is-open":s(A)},{default:l(()=>[a(y,null,{default:l(()=>[a(i,null,{default:l(()=>[a(H,null,{default:l(()=>[m("Edytuj produkt")]),_:1}),a(u,{slot:"end"},{default:l(()=>[a(o,{onClick:e[6]||(e[6]=t=>G(!1))},{default:l(()=>[m("Close")]),_:1})]),_:1})]),_:1})]),_:1}),a(R,{class:"ion-padding"},{default:l(()=>[a(Q,null,{default:l(()=>[a(d,{modelValue:s(b).name,"onUpdate:modelValue":e[7]||(e[7]=t=>s(b).name=t),label:"Nazwa produktu"},null,8,["modelValue"]),a(d,{modelValue:s(b).price,"onUpdate:modelValue":e[8]||(e[8]=t=>s(b).price=t),label:"Cena produktu"},null,8,["modelValue"]),a(z,null,{default:l(()=>[a(M,{label:"Kategoria","label-placement":"stacked",placeholder:"--- Wybierz kategorię ---",modelValue:s(b).category,"onUpdate:modelValue":e[9]||(e[9]=t=>s(b).category=t)},{default:l(()=>[(v(!0),S(B,null,j(s(D),(t,I)=>(v(),P(_,{key:I,value:t},{default:l(()=>[m(T(t),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["is-open"]),a(X,{"is-open":s(K)},{default:l(()=>[a(y,null,{default:l(()=>[a(i,null,{default:l(()=>[a(u,{slot:"start"},{default:l(()=>[a(o,{onClick:e[10]||(e[10]=t=>G(!1))},{default:l(()=>[m("anuluj")]),_:1})]),_:1}),a(H,null,{default:l(()=>[m("Nowy produkt")]),_:1}),a(u,{slot:"end"},{default:l(()=>[a(o,{onClick:me},{default:l(()=>[m("Zapisz")]),_:1})]),_:1})]),_:1})]),_:1}),a(R,{class:"ion-padding"},{default:l(()=>[a(Q,null,{default:l(()=>[a(d,{modelValue:s(p).name,"onUpdate:modelValue":e[11]||(e[11]=t=>s(p).name=t),label:"Nazwa produktu"},null,8,["modelValue"]),a(d,{modelValue:s(p).price,"onUpdate:modelValue":e[12]||(e[12]=t=>s(p).price=t),label:"Cena produktu"},null,8,["modelValue"]),a(z,null,{default:l(()=>[a(M,{label:"Kategoria","label-placement":"stacked",placeholder:"--- Wybierz kategorię ---",modelValue:s(p).category,"onUpdate:modelValue":e[13]||(e[13]=t=>s(p).category=t)},{default:l(()=>[(v(!0),S(B,null,j(s(D),(t,I)=>(v(),P(_,{key:I,value:t},{default:l(()=>[m(T(t),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["is-open"])]),_:1})]),_:1})}}},Ye=we($e,[["__scopeId","data-v-a1254d4e"]]);export{Ye as default};