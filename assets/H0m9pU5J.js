import{_ as K,M as Q,L as B,ac as W,r as u,o as X,N as y,A as l,af as q,Z as J,t as d,z as a,O as t,v as w,R as ee,Q as te,P as g,B as k,T as oe,U as ae,V as ne,W as se,a4 as le,a6 as ue,a1 as re,ag as de,X as ie,Y as me,$ as ce,y as pe,a3 as _e,ai as ve,aa as be}from"./C1Km0ovS.js";import{_ as fe}from"./BZ_2as7S.js";import{u as ye}from"./D-JFHcxt.js";const we={key:0,class:"inner-content"},ge={key:0,class:"flex justify-between mt-4"},ke={__name:"index",setup(Ie){ye();const I=Q(),{removeExpenseFromStore:C,editExpense:M,getExpensePhoto:Ve}=I,{currentExpense:e}=B(I),{billCategories:N}=_e(),{openAlert:T}=ve(),U=W(),{uid:r}=B(U),V=q(),c=u(e.value.category),D=u(null),E=u(null);u(!1);const p=u(e.value.shop),_=u(e.value.name),v=u(e.value.value),i=u(e.value.timestamp),x=u(e.value.familyMembers),$=()=>{let s;e.value.timestamp.seconds?s=new Date(e.value.timestamp.seconds*1e3):s=new Date(e.value.timestamp);const o=s.getFullYear(),b=String(s.getMonth()+1).padStart(2,"0"),f=String(s.getDate()).padStart(2,"0");i.value=`${o}-${b}-${f}`},z=async()=>{const s={name:_.value,value:Number(v.value),timestamp:new Date(i.value).getTime(),shop:p.value,familyMembers:x.value,userId:e.value.userId,id:e.value.id,category:c.value};await M(s,D.value,E.value),V.back()},A=async()=>{await C(e.value.id),V.back()};X(async()=>{$()});const O=s=>{x.value=s};return(s,o)=>{const b=oe,f=ae,F=ne,P=se,m=le,L=be,R=ue,h=re,Y=fe,Z=de,S=ie,j=me,G=J;return d(),y(G,null,{default:l(()=>[a(P,{style:{background:"var(--ion-color-light)"}},{default:l(()=>[a(F,null,{default:l(()=>[a(f,{slot:"start"},{default:l(()=>[a(b,{text:"",icon:"ioniconsArrowBackOutline"in s?s.ioniconsArrowBackOutline:t(ce)},null,8,["icon"])]),_:1})]),_:1})]),_:1}),a(j,{fullscreen:!0},{default:l(()=>[t(e)?(d(),w("div",we,[a(Z,{lines:"none"},{default:l(()=>[a(m,{label:"Nazwa sklepu",type:"text",modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=n=>p.value=n),disabled:t(e).userId!==t(r)},null,8,["modelValue","disabled"]),a(m,{label:"Nazwa wydatku",type:"text",modelValue:_.value,"onUpdate:modelValue":o[1]||(o[1]=n=>_.value=n),disabled:t(e).userId!==t(r)},null,8,["modelValue","disabled"]),a(m,{label:"Całkowita kwota",type:"number",modelValue:v.value,"onUpdate:modelValue":o[2]||(o[2]=n=>v.value=n),disabled:t(e).userId!==t(r)},null,8,["modelValue","disabled"]),a(m,{label:"Data",type:"date",modelValue:i.value,"onUpdate:modelValue":o[3]||(o[3]=n=>i.value=n),disabled:t(e).userId!==t(r)},null,8,["modelValue","disabled"]),a(h,null,{default:l(()=>[a(R,{label:"Kategoria","label-placement":"stacked",modelValue:c.value,"onUpdate:modelValue":o[4]||(o[4]=n=>c.value=n)},{default:l(()=>[(d(!0),w(ee,null,te(t(N),(n,H)=>(d(),y(L,{key:H,value:n},{default:l(()=>[k(pe(n),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(e).userId===t(r)?(d(),y(Y,{key:0,members:t(e).familyMembers,onToggleMember:O},null,8,["members"])):g("",!0)]),_:1}),t(e).userId===t(r)?(d(),w("div",ge,[a(S,{type:"tertiary",strong:!0,color:"danger",onClick:o[5]||(o[5]=()=>t(T)("Usuwanie wydatku","Czy na pewno chcesz usunąć wydatek?","alert-button-confirm",A))},{default:l(()=>[k("Usuń")]),_:1}),a(S,{type:"tertiary",strong:!0,color:"success",onClick:o[6]||(o[6]=n=>z())},{default:l(()=>[k("Zapisz")]),_:1})])):g("",!0)])):g("",!0)]),_:1})]),_:1})}}},Ce=K(ke,[["__scopeId","data-v-8a5293f7"]]);export{Ce as default};
