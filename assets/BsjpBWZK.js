import{_ as re,M as ue,ac as ce,L as ie,u as me,r as o,o as de,N as D,A as c,Z as pe,t as L,z as l,O as i,B as P,x as I,a2 as y,v as M,Q as fe,R as _e,P as ve,T as ge,U as we,ah as he,V as xe,W as ye,a4 as be,a6 as Ne,a1 as Le,ao as Ve,ag as Ie,Y as Se,$ as ke,y as Ee,a3 as Ce,aa as De}from"./C1Km0ovS.js";import{_ as Pe}from"./BZ_2as7S.js";import{T as Me,u as Be}from"./D7uZvskA.js";import{u as Re}from"./D-JFHcxt.js";const Fe={class:"inner-content"},Te={key:0,class:"w-full mt-8 flex justify-center items-center h-full"},Ue={__name:"index",setup(ze){const{popularStores:B}=Be();Re();const R=ue(),{addExpenseToStore:F}=R,T=ce(),{uid:U}=ie(T),{billCategories:z}=Ce(),O=me(),b=o(""),N=o(""),f=o(""),d=o(),p=o(""),S=o([]);o(null),o(null),o(!1);const k=o(!1),V=o(!1),r=o({newShopName:"",newExpenseName:"",newExpenseValue:"",newExpenseDate:""});o(null),o(!1),o(!1),o({name:"",price:"",category:""});const E=o(null),A=o([]),_=o(null);let w=null,h=null,v=0;const j=async t=>{k.value=!1,V.value=!0,E.value=null,w=null,h=null,v=0,p.value="",f.value="",d.value="";const e=t.target.files[0];if(!e)return;const a=new Image,n=new FileReader;n.onload=u=>{a.src=u.target.result},a.onload=()=>$(a),n.readAsDataURL(e)},$=t=>{const e=_.value.getContext("2d");_.value.width=t.width,_.value.height=t.height,e.drawImage(t,0,0),G(e),H()},G=t=>{const e=t.getImageData(0,0,_.value.width,_.value.height),a=e.data;for(let n=0;n<a.length;n+=4){const u=(a[n]+a[n+1]+a[n+2])/3;a[n]=a[n+1]=a[n+2]=u}t.putImageData(e,0,0)},H=()=>{_.value.toBlob(t=>{Me.recognize(t,"pol").then(({data:{text:e}})=>{E.value=e,Y(e)}).catch(e=>console.error("OCR processing error:",e))})},K=t=>{for(let e of B){const a=e.length*.5,n=e.toLowerCase(),u=t.toLowerCase();if(u.includes(n)&&n.split("").filter(g=>u.includes(g)).length>=a)return e}return null},Y=t=>{t.split(`
`).forEach(a=>{if(!p.value){const m=K(a);p.value=m}const n=a.match(/\d{1,4},\d{2}/),u=a.match(/SUMA\sPLN/),x=a.match(/RAZEM\sPLN/),g=a.match(/\d{4}\s*-\s*\d{2}\s*-\s*\d{2}/);if(u&&C(u,"sumaPLN"),x&&C(x,"razemPLN"),g&&(d.value=g[0].replaceAll(" ","")),n){const m=parseFloat(n[0].replace(",","."));m>v&&(v=m)}}),f.value=Z(),k.value=!0,V.value=!1},C=(t,e)=>{const a=t.input.match(/\d{1,4},\d{2}/);if(a){const n=parseFloat(a[0].replace(",","."));e==="sumaPLN"&&(w=n),e==="razemPLN"&&(h=n)}},Z=()=>w&&w===v?w:h&&h===v?h:v,Q=()=>{r.value.shopName="",r.value.newExpenseValue="",r.value.newExpenseDate="",r.value.selectedCategory="",p.value||(r.value.shopName="Nazwa sklepu jest wymagana"),f.value||(r.value.newExpenseValue="Kwota jest wymagana"),d.value||(r.value.newExpenseDate="Data jest wymagana")},W=async()=>{if(Q(),Object.values(r.value).some(e=>e))return;const t={name:N.value.toLowerCase(),value:parseFloat(f.value),timestamp:new Date(d.value).getTime(),shop:p.value.toLowerCase(),userId:U.value,familyMembers:S.value,items:A.value,category:b.value};await F(t),O.back()},q=t=>{S.value=t};return de(()=>{const t=new Date,e=String(t.getDate()).padStart(2,"0"),a=String(t.getMonth()+1).padStart(2,"0"),n=t.getFullYear();d.value=`${n}-${a}-${e}`}),(t,e)=>{const a=ge,n=we,u=he,x=xe,g=ye,m=be,J=De,X=Ne,ee=Le,te=Pe,ae=Ve,ne=Ie,oe=Se,le=pe;return L(),D(le,null,{default:c(()=>[l(g,{style:{background:"var(--ion-color-light)"}},{default:c(()=>[l(x,null,{default:c(()=>[l(n,{slot:"start"},{default:c(()=>[l(a,{text:"",icon:"ioniconsArrowBackOutline"in t?t.ioniconsArrowBackOutline:i(ke)},null,8,["icon"])]),_:1}),l(n,{slot:"end"},{default:c(()=>[l(u,{strong:!0,onClick:e[0]||(e[0]=s=>W())},{default:c(()=>[P("Dodaj")]),_:1})]),_:1})]),_:1})]),_:1}),l(oe,null,{default:c(()=>[I("div",Fe,[l(ne,{lines:"none"},{default:c(()=>[l(m,{type:"file",onChange:j}),l(m,{label:"Nazwa sklepu",modelValue:i(p),"onUpdate:modelValue":e[1]||(e[1]=s=>y(p)?p.value=s:null),error:i(r).shopName},null,8,["modelValue","error"]),l(m,{label:"Nawa wydatku",modelValue:i(N),"onUpdate:modelValue":e[2]||(e[2]=s=>y(N)?N.value=s:null)},null,8,["modelValue"]),l(m,{label:"Całkowita kwota",type:"number",error:i(r).newExpenseValue,modelValue:i(f),"onUpdate:modelValue":e[3]||(e[3]=s=>y(f)?f.value=s:null)},null,8,["error","modelValue"]),l(m,{label:"Data",type:"date",error:i(r).newExpenseDate,modelValue:i(d),"onUpdate:modelValue":e[4]||(e[4]=s=>y(d)?d.value=s:null)},null,8,["error","modelValue"]),l(ee,null,{default:c(()=>[l(X,{label:"Kategoria","label-placement":"stacked",modelValue:i(b),"onUpdate:modelValue":e[5]||(e[5]=s=>y(b)?b.value=s:null)},{default:c(()=>[(L(!0),M(_e,null,fe(i(z),(s,se)=>(L(),D(J,{key:se,value:s},{default:c(()=>[P(Ee(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(te,{onToggleMember:q}),I("div",null,[I("canvas",{ref_key:"canvas",ref:_,style:{display:"none"}},null,512),i(V)?(L(),M("div",Te,[l(ae,{name:"lines-sharp"})])):ve("",!0)])]),_:1})])]),_:1})]),_:1})}}},Ge=re(Ue,[["__scopeId","data-v-affc1496"]]);export{Ge as default};
