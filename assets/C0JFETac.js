import{u as g,r,as as h,N as M,A as n,a1 as z,t as B,z as e,B as _,P as c,ah as P,a6 as C,V as D,W as S,T as j,a0 as A,a3 as R}from"./idRAp1hA.js";import{_ as U}from"./BuW8TgiA.js";import{_ as E}from"./al0c26aQ.js";const G={__name:"index",setup(F){const i=g(),t=r(""),s=r([]),l=r([]),p=h(),{addPantry:d}=p,{openToast:m}=R(),u=r(""),f=async()=>{if(!t.value){u.value="Nazwa spiżarni jest wymagana";return}u.value="",await d(t.value,s.value,l.value),m("Dodano spiżarnię"),i.back()},v=a=>{s.value.includes(a.id)?(l.value=l.value.filter(o=>o!=a.id),s.value=s.value.filter(o=>o.id!=a.id)):(l.value.push(a.id),s.value.push(a))};return(a,o)=>{const y=C,I=D,w=S,x=U,b=E,N=j,k=A,T=z;return B(),M(T,null,{default:n(()=>[e(w,null,{default:n(()=>[e(I,null,{default:n(()=>[e(y,null,{default:n(()=>[_("Nowa lista zakupowa")]),_:1})]),_:1})]),_:1}),e(k,{fullscreen:!0},{default:n(()=>[e(x,{modelValue:c(t),"onUpdate:modelValue":o[0]||(o[0]=V=>P(t)?t.value=V:null),label:"Nazwa spiżarni",error:c(u)},null,8,["modelValue","error"]),e(b,{onToggleMember:v}),e(N,{expand:"block",onClick:f,class:"my-6"},{default:n(()=>[_("Dodaj listę")]),_:1})]),_:1})]),_:1})}}};export{G as default};
