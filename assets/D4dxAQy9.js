import{aG as b,L as g,aZ as w,i as _,N,A as n,aS as P,Z as S,t as m,z as e,O as o,B as V,v as C,P as O,x as A,T as z,U as E,S as R,V as W,W as Z,a_ as $,a$ as G,a7 as H,Y as L,$ as M}from"./Da8WVVY-.js";const U={key:0,class:"flex items-center"},Y=A("span",null,"Termin przydatności:",-1),F={__name:"index",setup(j){const c=P(),l=b(),{currentPantry:s}=g(l),{editPantry:d}=l,{formatDate:p}=w(),r=_(()=>s.value.items.find(t=>t.name===c.params.name)),i=_(()=>{if(r.value&&r.value.expiryDate){const t=new Date(r.value.expiryDate);return p(t)}return null}),f=t=>{const u=s.value.items.map(a=>(a.name===c.params.name&&(a.expiryDate=new Date(t.target.value).getTime()),a));d({...s.value,items:u})};return(t,u)=>{const a=z,v=E,x=R,I=W,y=Z,B=$,D=G,k=H,h=L,T=S;return m(),N(T,null,{default:n(()=>[e(y,{style:{background:"var(--ion-color-light)"}},{default:n(()=>[e(I,null,{default:n(()=>[e(v,{slot:"start"},{default:n(()=>[e(a,{text:"",icon:"ioniconsArrowBackOutline"in t?t.ioniconsArrowBackOutline:o(M)},null,8,["icon"])]),_:1}),e(x,null,{default:n(()=>[V("Spiżarnia")]),_:1})]),_:1})]),_:1}),e(h,null,{default:n(()=>[o(i)?(m(),C("div",U,[Y,e(B,{datetime:"expiryDate",value:o(i)},null,8,["value"])])):O("",!0),e(k,{"keep-contents-mounted":!0},{default:n(()=>[e(D,{id:"expiryDate",preferWheel:"false",presentation:"date",value:o(i),onIonChange:f,min:"2024-01-01",max:"2030-12-31"},null,8,["value"])]),_:1})]),_:1})]),_:1})}}};export{F as default};