import{_ as h,ac as B,L as m,aB as N,i as u,O as n,t as r,N as d,A as l,z,v as V,R as w,Q as C,B as T,y as p,x as W,P as A,aa as D,a6 as F,a1 as L}from"./CGaVrOoi.js";const O={__name:"dropdown-select-member",props:{members:{type:Array,default:()=>[]}},emits:["toggleMember"],setup(_,{emit:b}){const y=_,f=b,v=B(),{uid:g}=m(v),k=N(),{familyMembersDetails:c,familyMembers:M}=m(k),i=u(()=>c.value.filter(e=>e.status==="accepted"&&M.value.includes(e.id)&&e.id!==g.value)),S=e=>{const s=e.target.value,a=c.value.filter(o=>s.includes(o.id));f("toggleMember",s,a)},x=u(()=>y.members.map(e=>e.id??e));return(e,s)=>{const a=D,o=F,I=L;return n(i).length?(r(),d(I,{key:0},{default:l(()=>[z(o,{label:"Wybierz osoby które mają dostęp",placholder:"Wybierz osoby","label-placement":"stacked",placeholder:"--- Wybierz osoby ---",multiple:!0,onIonChange:s[0]||(s[0]=t=>S(t)),value:n(x)},{default:l(()=>[(r(!0),V(w,null,C(n(i),t=>(r(),d(a,{key:t.id,value:t.id},{default:l(()=>[T(p(t.nickname)+"  ",1),W("small",null," ("+p(t.email)+")",1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})):A("",!0)}}},j=h(O,[["__scopeId","data-v-1ad37693"]]);export{j as _};
