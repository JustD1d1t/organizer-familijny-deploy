import{_ as g,ap as M,M as S,i as v,t as s,N as l,A as n,z as x,v as I,R as k,S as h,P as B,B as N,y as r,x as w,a4 as z,Z as T,Y as V}from"./B4ggqkCG.js";const A={__name:"dropdown-select-member",props:{members:{type:Array,default:()=>[]}},emits:["toggleMember"],setup(C,{emit:c}){const i=c,m=localStorage.getItem("uid"),_=M(),{familyMembersDetails:u,familyMembers:p}=S(_),d=v(()=>u.value.filter(e=>e.status==="accepted"&&p.value.includes(e.id)&&e.id!==m)),f=e=>{e.target.value.forEach(a=>{i("toggleMember",a)})};return(e,o)=>{const a=z,b=T,y=V;return s(),l(y,null,{default:n(()=>[x(b,{label:"Wybierz osoby które mają dostęp",placholder:"Wybierz osoby","label-placement":"floating",multiple:!0,onIonChange:o[0]||(o[0]=t=>f(t))},{default:n(()=>[(s(!0),I(k,null,h(B(d),t=>(s(),l(a,{key:t.id,value:t},{default:n(()=>[N(r(t.nickname)+"  ",1),w("small",null," ("+r(t.email)+")",1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})}}},E=g(A,[["__scopeId","data-v-c6fa59af"]]);export{E as _};
