import{aF as b,L as g,aX as w,i as m,N,A as n,aR as O,Z as P,t as S,z as e,O as r,B as V,x as d,T as A,U as C,S as R,V as z,W,aY as Y,aZ as Z,a7 as E,Y as F,$ as H}from"./Dllh6qvR.js";const L={class:"flex items-center"},M=d("span",null,"Termin przydatności:",-1),$={__name:"index",setup(U){const i=O(),c=b(),{currentPantry:o}=g(c),{editPantry:p}=c,{formatDate:u}=w(),s=m(()=>o.value.items.find(t=>t.name===i.params.name)),l=m(()=>{if(s.value&&s.value.expiryDate){const t=new Date(s.value.expiryDate);return u(t)}return u(new Date)}),f=t=>{const _=o.value.items.map(a=>(a.name===i.params.name&&(a.expiryDate=new Date(t.target.value).getTime()),a));p({...o.value,items:_})};return(t,_)=>{const a=A,x=C,v=R,D=z,I=W,y=Y,B=Z,k=E,h=F,T=P;return S(),N(T,null,{default:n(()=>[e(I,{style:{background:"var(--ion-color-light)"}},{default:n(()=>[e(D,null,{default:n(()=>[e(x,{slot:"start"},{default:n(()=>[e(a,{text:"",icon:"ioniconsArrowBackOutline"in t?t.ioniconsArrowBackOutline:r(H)},null,8,["icon"])]),_:1}),e(v,null,{default:n(()=>[V("Spiżarnia")]),_:1})]),_:1})]),_:1}),e(h,null,{default:n(()=>[d("div",L,[M,e(y,{datetime:"expiryDate",value:r(l)},null,8,["value"])]),e(k,{"keep-contents-mounted":!0},{default:n(()=>[e(B,{id:"expiryDate",preferWheel:"false",presentation:"date",value:r(l),onIonChange:f,min:"2024-01-01",max:"2030-12-31"},null,8,["value"])]),_:1})]),_:1})]),_:1})}}};export{$ as default};
