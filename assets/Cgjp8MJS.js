import{au as g,M as w,aK as T,i as m,N as P,A as n,aE as N,a2 as V,t as A,z as e,P as r,B as C,x as p,a8 as M,U as O,a7 as S,V as z,W as E,aL as R,aM as W,a0 as H,a1 as K}from"./BVzA7Ocv.js";import{a as L}from"./CHVAF33P.js";const U={class:"flex items-center"},j=p("span",null,"Termin przydatności:",-1),J={__name:"index",setup(q){const i=N(),c=g(),{currentPantry:o}=w(c),{editPantry:d}=c,{formatDate:u}=T(),s=m(()=>o.value.items.find(t=>t.name===i.params.name)),l=m(()=>{if(s.value&&s.value.expiryDate){const t=new Date(s.value.expiryDate);return u(t)}return u(new Date)}),f=t=>{const _=o.value.items.map(a=>(a.name===i.params.name&&(a.expiryDate=new Date(t.target.value).getTime()),a));d({...o.value,items:_})};return(t,_)=>{const a=M,x=O,v=S,D=z,I=E,y=R,B=W,k=H,h=K,b=V;return A(),P(b,null,{default:n(()=>[e(I,{style:{background:"var(--ion-color-light)"}},{default:n(()=>[e(D,null,{default:n(()=>[e(x,{slot:"start"},{default:n(()=>[e(a,{text:"",icon:"ioniconsArrowBackOutline"in t?t.ioniconsArrowBackOutline:r(L)},null,8,["icon"])]),_:1}),e(v,null,{default:n(()=>[C("Spiżarnia")]),_:1})]),_:1})]),_:1}),e(h,null,{default:n(()=>[p("div",U,[j,e(y,{datetime:"expiryDate",value:r(l)},null,8,["value"])]),e(k,{"keep-contents-mounted":!0},{default:n(()=>[e(B,{id:"expiryDate",preferWheel:"false",presentation:"date",value:r(l),onIonChange:f,min:"2024-01-01",max:"2030-12-31"},null,8,["value"])]),_:1})]),_:1})]),_:1})}}};export{J as default};