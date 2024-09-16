import{L as se,M as ue,r,o as re,N as i,O as de,t as u,A as l,z as s,P as t,B as v,Q as m,v as p,R as P,S,x as E,T as ie,U as ce,V as me,W as pe,X as _e,Y as ve,Z as ye,$ as be,a0 as we,a1 as fe,a2 as ge,y as ke,a3 as Ie,a4 as he,a5 as Ve,a6 as xe}from"./BVzA7Ocv.js";import{_ as Pe}from"./rRqvudjr.js";import{u as Se}from"./KzVdk-Ao.js";const Ce={key:0,class:"inner-content"},Me={key:0,class:"flex justify-between mt-4"},De={class:"modal-content"},Te={__name:"index",setup(Ee){const{photos:y,photoFromCamera:N,selectPhotoFromData:B}=Se(),C=se(),{removeExpenseFromStore:z,editExpense:T,getExpensePhoto:U}=C,{currentExpense:e}=ue(C),{billCategories:$}=Ie(),{openAlert:F}=he(),M=de(),d=localStorage.getItem("uid");r("");const g=r(!1),k=r(null),I=r(null),j=r(!1),h=r(e.value.shop),V=r(e.value.name),x=r(e.value.value),b=r(e.value.timestamp),_=r(e.value.familyMembers),A=()=>{let a;e.value.timestamp.seconds?a=new Date(e.value.timestamp.seconds*1e3):a=new Date(e.value.timestamp);const o=a.getFullYear(),c=String(a.getMonth()+1).padStart(2,"0"),w=String(a.getDate()).padStart(2,"0");b.value=`${o}-${c}-${w}`},L=()=>{g.value=!1},R=async()=>{try{const{pb64:a,doc:o}=await N();I.value=a,k.value=o,j.value=!0}catch(a){console.error("Error adding photo",a)}},Z=async()=>{try{const{pb64:a,doc:o}=await B();I.value=a,k.value=o}catch(a){console.error("Error selecting photo",a)}},O=async()=>{const a={name:V.value,value:Number(x.value),timestamp:new Date(b.value).getTime(),shop:h.value,familyMembers:_.value,userId:e.value.userId,id:e.value.id,category:e.value.category};await T(a,k.value,I.value),M.back()},W=async()=>{await z(e.value.id),M.back()},Y=async()=>{const a=await U(e.value.id);a&&y.value.push({webviewPath:a,document:{title:"New Photo",description:"Photo taken with the app",timestamp:new Date}})},G=async()=>{g.value=!0};re(async()=>{await Y(),A()});const H=a=>{_.value.includes(a.id)?_.value=_.value.filter(o=>o!=a.id):_.value.push(a.id)};return(a,o)=>{const c=ie,w=ce,K=me,Q=pe,f=_e,X=Ve,q=ve,J=ye,ee=Pe,te=be,D=xe,oe=we,ae=fe,ne=ge;return u(),i(ne,null,{default:l(()=>[s(Q,{style:{background:"var(--ion-color-light)"}},{default:l(()=>[s(K,null,{default:l(()=>[t(e)&&t(e).userId===t(d)?(u(),i(w,{key:0,slot:"start"},{default:l(()=>[s(c,{type:"tertiary",strong:!0,color:"danger",onClick:o[0]||(o[0]=()=>t(F)("Usuwanie wydatku","Czy na pewno chcesz usunąć wydatek?","alert-button-confirm",W))},{default:l(()=>[v("Usuń")]),_:1})]),_:1})):m("",!0),t(e)&&t(e).userId===t(d)?(u(),i(w,{key:1,slot:"end"},{default:l(()=>[s(c,{type:"tertiary",strong:!0,color:"success",onClick:o[1]||(o[1]=n=>O())},{default:l(()=>[v("Zapisz")]),_:1})]),_:1})):m("",!0)]),_:1})]),_:1}),s(ae,{fullscreen:!0},{default:l(()=>[t(e)?(u(),p("div",Ce,[s(te,{lines:"none"},{default:l(()=>[s(f,{label:"Nazwa sklepu",type:"text",modelValue:h.value,"onUpdate:modelValue":o[2]||(o[2]=n=>h.value=n),disabled:t(e).userId!==t(d)},null,8,["modelValue","disabled"]),s(f,{label:"Nazwa wydatku",type:"text",modelValue:V.value,"onUpdate:modelValue":o[3]||(o[3]=n=>V.value=n),disabled:t(e).userId!==t(d)},null,8,["modelValue","disabled"]),s(f,{label:"Całkowita kwota",type:"number",modelValue:x.value,"onUpdate:modelValue":o[4]||(o[4]=n=>x.value=n),disabled:t(e).userId!==t(d)},null,8,["modelValue","disabled"]),s(f,{label:"Data",type:"date",modelValue:b.value,"onUpdate:modelValue":o[5]||(o[5]=n=>b.value=n),disabled:t(e).userId!==t(d)},null,8,["modelValue","disabled"]),s(J,null,{default:l(()=>[s(q,{label:"Kategoria","label-placement":"stacked",modelValue:t(e).category,"onUpdate:modelValue":o[6]||(o[6]=n=>t(e).category=n)},{default:l(()=>[(u(!0),p(P,null,S(t($),(n,le)=>(u(),i(X,{key:le,value:n},{default:l(()=>[v(ke(n),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(e).userId===t(d)?(u(),i(ee,{key:0,members:t(e).familyMembers,onToggleMember:H},null,8,["members"])):m("",!0)]),_:1}),t(e).userId===t(d)?(u(),p("div",Me,[s(c,{onClick:R,type:"secondary"},{default:l(()=>[v("Zrób zdjęcie")]),_:1}),s(c,{onClick:Z},{default:l(()=>[v("Wybierz zdjęcie")]),_:1})])):m("",!0),t(y).length?(u(),p("div",{key:1,onClick:G},[(u(!0),p(P,null,S(t(y),n=>(u(),i(D,{key:n.webviewPath,src:n.webviewPath},null,8,["src"]))),128))])):m("",!0),s(oe,{class:"auto-height modal-img","is-open":g.value,onDidDismiss:o[7]||(o[7]=n=>L())},{default:l(()=>[E("div",De,[E("div",null,[(u(!0),p(P,null,S(t(y),n=>(u(),i(D,{key:n.webviewPath,src:n.webviewPath},null,8,["src"]))),128))])])]),_:1},8,["is-open"])])):m("",!0)]),_:1})]),_:1})}}};export{Te as default};