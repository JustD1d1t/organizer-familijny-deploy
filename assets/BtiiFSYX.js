import{at as H,aL as U,au as Z,r as c,N as z,A as o,a5 as A,t as F,z as a,B as m,x as M,P as l,ao as g,l as p,a2 as P,V as R,W as h,X as D,$ as W,T as X,a4 as q,a8 as G}from"./BClyMcC6.js";import{_ as J}from"./BgaoTwxx.js";const K={class:"flex items-center h-full w-full"},ee={__name:"index",setup(O){const w=H(),{getNotifications:y}=w,{openToast:f}=G(),T=U(),{loginUser:V}=T,I=Z(),{getFamilyDetails:b}=I,n=c(""),s=c("");c("");const j=()=>{f("Zalogowano pomyślnie")},d=e=>{f(e,"danger")},k=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase()),r=c(""),i=c(""),C=async()=>{if(r.value="",i.value="",n.value||(r.value="Email jest wymagany."),k(n.value)||(r.value="Nieprawidłowy format email."),s.value||(i.value="Hasło jest wymagane."),s.value.length<6&&(i.value="Hasło musi mieć co najmniej 6 znaków."),!(r.value||i.value))try{const e=await V(n.value,s.value);e.error?d(e.error):(p("/"),await y(),await b(),j())}catch(e){d(e)}};return(e,t)=>{const L=P,N=R,S=h,v=D,x=W,_=X,B=J,E=q,$=A;return F(),z($,null,{default:o(()=>[a(S,{style:{background:"var(--ion-color-light)"}},{default:o(()=>[a(N,null,{default:o(()=>[a(L,null,{default:o(()=>[m("Logowanie")]),_:1})]),_:1})]),_:1}),a(E,{fullscreen:!0},{default:o(()=>[M("div",K,[a(B,{class:"p-8 w-full"},{title:o(()=>[m(" Logowanie ")]),default:o(()=>[a(x,{lines:"none",class:"pb-4"},{default:o(()=>[a(v,{label:"Email",type:"email",modelValue:l(n),"onUpdate:modelValue":t[0]||(t[0]=u=>g(n)?n.value=u:null),error:l(r)},null,8,["modelValue","error"]),a(v,{label:"Hasło",type:"password",modelValue:l(s),"onUpdate:modelValue":t[1]||(t[1]=u=>g(s)?s.value=u:null),error:l(i)},null,8,["modelValue","error"])]),_:1}),a(_,{class:"w-full mt-4",onClick:C},{default:o(()=>[m("Zaloguj")]),_:1}),a(_,{class:"w-full mt-4",fill:"outline",onClick:t[2]||(t[2]=u=>("navigateTo"in e?e.navigateTo:l(p))("/register")),type:"secondary"},{default:o(()=>[m("Rejestracja")]),_:1}),a(_,{class:"w-full mt-4",onClick:t[3]||(t[3]=u=>("navigateTo"in e?e.navigateTo:l(p))("/reset-password")),type:"tertiary"},{default:o(()=>[m("Zapomniałem hasła")]),_:1})]),_:1})])]),_:1})]),_:1})}}};export{ee as default};