import{N as E,r,O,A as o,a6 as A,t as S,z as e,Q as l,B as d,x as z,ac as f,l as H,af as L,V as R,a3 as $,W as P,X as Z,Y as J,a0 as Q,U as W,a5 as X,ah as Y,aA as q,a9 as D}from"./BeL7Np4Z.js";import{_ as F}from"./i0ifHx2F.js";const G={class:"flex items-center h-full w-full"},oe={__name:"index",setup(K){const{backendUrl:g}=q(),y=E(),{registerUser:k}=y,{openToast:w}=D(),t=r(""),s=r(""),u=r(""),i=r(""),c=r(""),m=r(""),j=a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(a).toLowerCase()),I=async()=>{if(i.value="",c.value="",m.value="",t.value||(i.value="Email jest wymagany."),j(t.value)||(i.value="Nieprawidłowy format email."),s.value||(c.value="Hasło jest wymagane."),s.value.length<6&&(c.value="Hasło musi mieć co najmniej 6 znaków."),u.value||(m.value="Nazwa jest wymagana."),!(i.value||c.value||m.value))try{const a=await k(t.value,s.value,u.value);if(a.error){w(a.error,"danger");return}const n=a.localId;await fetch(`${g}/users/add-user`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{uid:n,email:t.value.toLowerCase()}})}),w("Zarejestrowano pomyślnie"),H("/login")}catch(a){console.log(a)}};return(a,n)=>{const V=L,b=R,B=$,x=P,C=Z,p=J,N=Q,v=W,T=F,U=X,h=A;return S(),O(h,null,{default:o(()=>[e(C,{style:{background:"var(--ion-color-light)"}},{default:o(()=>[e(x,null,{default:o(()=>[e(b,{slot:"start"},{default:o(()=>[e(V,{text:"",icon:"ioniconsArrowBackOutline"in a?a.ioniconsArrowBackOutline:l(Y)},null,8,["icon"])]),_:1}),e(B,null,{default:o(()=>[d("Rejestracja")]),_:1})]),_:1})]),_:1}),e(U,{fullscreen:!0},{default:o(()=>[z("div",G,[e(T,{class:"p-8 w-full"},{title:o(()=>[d(" Rejestracja ")]),default:o(()=>[e(N,{class:"pb-4"},{default:o(()=>[e(p,{class:"w-full",label:"Email",type:"email",modelValue:l(t),"onUpdate:modelValue":n[0]||(n[0]=_=>f(t)?t.value=_:null),error:l(i)},null,8,["modelValue","error"]),e(p,{class:"w-full",label:"Hasło",type:"password",modelValue:l(s),"onUpdate:modelValue":n[1]||(n[1]=_=>f(s)?s.value=_:null),error:l(c)},null,8,["modelValue","error"]),e(p,{class:"w-full",label:"Nazwa",modelValue:l(u),"onUpdate:modelValue":n[2]||(n[2]=_=>f(u)?u.value=_:null),error:l(m)},null,8,["modelValue","error"])]),_:1}),e(v,{class:"w-full mt-4",onClick:I},{default:o(()=>[d("Zarejestruj")]),_:1}),e(v,{class:"w-full mt-4",fill:"outline","router-link":"/login",type:"secondary"},{default:o(()=>[d("Logowanie")]),_:1})]),_:1})])]),_:1})]),_:1})}}};export{oe as default};