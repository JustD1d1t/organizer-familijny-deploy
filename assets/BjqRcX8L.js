import{u as V,ar as j,r as u,N as T,A as a,a1 as b,t as B,z as e,B as r,x as L,P as _,ah as M,a6 as S,V as D,W as C,T as U,a0 as A,a3 as P}from"./DQNEkdG3.js";import{_ as R}from"./BfWRnpH5.js";import{_ as $}from"./CZfVaBeJ.js";const E={class:"inner-content"},G={__name:"index",setup(F){const p=V(),{openToast:i}=P(),d=j(),{addList:m}=d,t=u(""),c=u(""),f=async()=>{if(!t.value){c.value="Nazwa listy zakupowej jest wymagana";return}c.value="",await m(t.value,l.value,s.value),i("Dodano nową listę zakupową"),p.back()},s=u([]),l=u([]),v=o=>{s.value.includes(o.id)?(s.value=s.value.filter(n=>n!=o.id),l.value=l.value.filter(n=>n.id!=o.id),i(`Usunięto ${o.nickname} z listy zakupowej`,"danger")):(s.value.push(o.id),l.value.push(o),i(`Dodano ${o.nickname} do listy zakupowej`))};return(o,n)=>{const w=S,k=D,g=C,h=R,y=$,z=U,x=A,I=b;return B(),T(I,null,{default:a(()=>[e(g,null,{default:a(()=>[e(k,null,{default:a(()=>[e(w,null,{default:a(()=>[r("Nowa lista zakupowa")]),_:1})]),_:1})]),_:1}),e(x,{fullscreen:!0},{default:a(()=>[L("div",E,[e(h,{modelValue:_(t),"onUpdate:modelValue":n[0]||(n[0]=N=>M(t)?t.value=N:null),label:"Nazwa listy zakupowej",error:_(c)},null,8,["modelValue","error"]),e(y,{onToggleMember:v}),e(z,{expand:"block",onClick:f,class:"my-6"},{default:a(()=>[r("Dodaj listę")]),_:1})])]),_:1})]),_:1})}}};export{G as default};
