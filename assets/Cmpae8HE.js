import{_ as k,ao as x,M as h,i,t as l,N as m,A as r,z as B,P as u,v as z,R as N,S as w,B as T,y as d,x as V,a5 as W,Y as A,Z as C}from"./WOMjux0z.js";const D={__name:"dropdown-select-member",props:{members:{type:Array,default:()=>[]}},emits:["toggleMember"],setup(p,{emit:_}){const b=p,f=_,y=localStorage.getItem("uid"),g=x(),{familyMembersDetails:c,familyMembers:v}=h(g),I=i(()=>c.value.filter(e=>e.status==="accepted"&&v.value.includes(e.id)&&e.id!==y)),M=e=>{e.target.value.forEach(s=>{const a=c.value.find(n=>n.id===s);f("toggleMember",a)})},S=i(()=>b.members.map(e=>e.id??e));return(e,o)=>{const s=W,a=A,n=C;return l(),m(n,null,{default:r(()=>[B(a,{label:"Wybierz osoby które mają dostęp",placholder:"Wybierz osoby","label-placement":"stacked",placeholder:"--- Wybierz osoby ---",multiple:!0,onIonChange:o[0]||(o[0]=t=>M(t)),value:u(S)},{default:r(()=>[(l(!0),z(N,null,w(u(I),t=>(l(),m(s,{key:t.id,value:t.id},{default:r(()=>[T(d(t.nickname)+"  ",1),V("small",null," ("+d(t.email)+")",1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})}}},F=k(D,[["__scopeId","data-v-2bca71f3"]]);export{F as _};
