import{_ as y,ac as k,N as I,A as e,Z as V,t as v,z as t,B as n,x as a,O as C,l as S,S as g,V as j,W as B,X as N,Y as E,C as T,D as b}from"./Dllh6qvR.js";import{_ as z}from"./qd24NO7H.js";const i=o=>(T("data-v-0355120c"),o=o(),b(),o),W={class:"flex justify-center items-center h-full w-full"},Z=i(()=>a("div",{class:"text-center"},"Zweryfikuj emaila",-1)),A=i(()=>a("div",{class:"text-center"},"Nie otrzymałeś/aś maila?",-1)),D={__name:"index",setup(o){const _=k(),{resendVerificationEmail:l,checkEmailVerification:r,setEmailVerified:d}=_,u=async()=>{const{emailVerified:c}=await r();c&&(d(!0),S("/"))};return(c,H)=>{const f=g,p=j,m=B,s=N,x=z,h=E,w=V;return v(),I(w,null,{default:e(()=>[t(m,{style:{background:"var(--ion-color-light)"}},{default:e(()=>[t(p,null,{default:e(()=>[t(f,null,{default:e(()=>[n("Email niezweryfikowany")]),_:1})]),_:1})]),_:1}),t(h,{fullscreen:!0},{default:e(()=>[a("div",W,[t(x,{class:"parent flex justify-center items-center"},{default:e(()=>[Z,A,t(s,{onClick:C(l),class:"w-full mt-4",type:"secondary"},{default:e(()=>[n("Wyślij ponownie")]),_:1},8,["onClick"]),t(s,{onClick:u,class:"w-full mt-4"},{default:e(()=>[n("Sprawdź weryfikację")]),_:1})]),_:1})])]),_:1})]),_:1})}}},U=y(D,[["__scopeId","data-v-0355120c"]]);export{U as default};
