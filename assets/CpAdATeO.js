import{aC as H,aD as J,L as M,ac as Q,r as q,t as c,v as E,z as t,A as e,B as D,O as i,a2 as ie,x as s,ah as le,U as ce,V as X,W as Y,aE as ue,a1 as K,a4 as re,ad as Ne,ae as Be,aF as Ve,aG as Te,M as Ue,i as xe,N as r,Z as Pe,y as G,P as k,Q as je,R as Oe,l as Ze,S as Re,al as qe,ap as We,aq as Ge,a5 as He,ag as Je,a7 as Qe,as as Xe,at as Ye,aH as Ke,Y as en,a8 as ae,a9 as se,aI as nn,aJ as on,X as tn}from"./C1Km0ovS.js";import{_ as an}from"./YS5LXMaE.js";import{_ as sn}from"./C1i1fy5W.js";import{_ as de}from"./OC_iv7tp.js";const ln={class:"ion-padding inner-content"},cn=s("h3",null,"Dodaj członka rodziny",-1),un={__name:"edit-modal",emits:"cancel",setup(ee,{emit:N}){const B=H(),{sendNotification:V}=B,{backendUrl:f}=Ne(),{request:g}=Be(),I=J(),{updateMembers:T,createFamily:U}=I,{familyMembersDetails:p,familyName:z}=M(I),d=Q(),{uid:C,email:y}=M(d),w=N,_=q(""),S=async v=>{const l=[...p.value,{...v,status:"pending"}];return await T(l),l},b=async()=>{const l=(await g(`${f}/users/get-users?email=${_.value.toLowerCase()}`)).users;if(!l.length)return;const u=l[0];let m;p.value.length&&(m=await S(u)),await V({title:`Zaproszenie do rodziny "${z.value}"`,content:`Zostałeś zaproszony do rodziny "${z.value}" przez użytkownika "${y.value}"`,type:"invitation-to-family",ownerId:C.value},u.uid),w("confirmModal",m)},x=()=>{w("cancel")};return(v,l)=>{const u=le,m=ce,O=X,Z=Y,$=ue,W=K,R=re,h=de;return c(),E("div",ln,[t(Z,{style:{background:"var(--ion-color-light)"}},{default:e(()=>[t(O,null,{default:e(()=>[t(m,{slot:"start"},{default:e(()=>[t(u,{onClick:l[0]||(l[0]=F=>x())},{default:e(()=>[D("Anuluj")]),_:1})]),_:1}),t(m,{slot:"end"},{default:e(()=>[t(u,{strong:!0,onClick:l[1]||(l[1]=F=>b())},{default:e(()=>[D("Dodaj")]),_:1})]),_:1})]),_:1})]),_:1}),t(h,null,{default:e(()=>[t(W,null,{default:e(()=>[t($,null,{default:e(()=>[cn]),_:1})]),_:1}),t(R,{"data-test":"shop-input",label:"Mail",class:"shopInput",type:"text",modelValue:i(_),"onUpdate:modelValue":l[2]||(l[2]=F=>ie(_)?_.value=F:null)},null,8,["modelValue"])]),_:1})])}}},rn={class:"ion-padding inner-content"},dn=s("h3",null,"Stwórz rodzinę",-1),_n={__name:"create-modal",emits:"cancel",setup(ee,{emit:N}){H();const B=J(),{createFamily:V}=B,f=Q(),{uid:g,email:I,nickname:T}=M(f),U=N,p=q(""),z=async()=>{const C=[{email:I.value,id:g.value,uid:g.value,nickname:T.value,status:"accepted"}];await V(C,p.value),U("confirmModal")},d=()=>{U("cancel")};return(C,y)=>{const w=le,_=ce,S=X,b=Y,x=ue,v=K,l=re,u=de;return c(),E("div",rn,[t(b,{style:{background:"var(--ion-color-light)"}},{default:e(()=>[t(S,null,{default:e(()=>[t(_,{slot:"start"},{default:e(()=>[t(w,{onClick:y[0]||(y[0]=m=>d())},{default:e(()=>[D("Anuluj")]),_:1})]),_:1}),t(_,{slot:"end"},{default:e(()=>[t(w,{strong:!0,onClick:z},{default:e(()=>[D("Stwórz")]),_:1})]),_:1})]),_:1})]),_:1}),t(u,null,{default:e(()=>[t(v,null,{default:e(()=>[t(x,null,{default:e(()=>[dn]),_:1})]),_:1}),t(l,{"data-test":"shop-input",label:"Nazwa rodziny",class:"shopInput",type:"text",modelValue:i(p),"onUpdate:modelValue":y[1]||(y[1]=m=>ie(p)?p.value=m:null)},null,8,["modelValue"])]),_:1})])}}},mn={key:0},fn=s("br",null,null,-1),pn=s("p",null," Osoby z rodziny możesz dodawać do list zakupowych, spiżarni czy wydatków. ",-1),yn=s("br",null,null,-1),wn=s("p",null,"Dzięki temu:",-1),hn=s("br",null,null,-1),zn=s("ul",null,[s("li",null,"Możecie wspólnie planować zakupy"),s("li",null,"Możecie razem zarządzać zapasami w domu"),s("li",null,"Możecie kontrolować Wasze wspólne wydatki")],-1),bn=s("br",null,null,-1),vn=s("p",{class:"h3 font-bold"},"Załóż rodzinę już teraz",-1),kn=s("b",null,"Czy wiesz, że...",-1),Mn={class:"ion-padding",slot:"content"},gn=s("br",null,null,-1),In=s("p",null," Osoby z rodziny możesz dodawać do list zakupowych, spiżarni czy wydatków. ",-1),Cn=s("br",null,null,-1),Sn=s("p",null,"Dzięki temu:",-1),$n=s("br",null,null,-1),Fn=s("ul",null,[s("li",null,"Możecie wspólnie planować zakupy"),s("li",null," Możecie razem zarządzać zapasami w domu "),s("li",null," Możecie kontrolować Wasze wspólne wydatki ")],-1),Ln={key:2},An={key:0},Vn={__name:"index",setup(ee){const N=H(),{sendNotification:B}=N,V=Q(),{uid:f,email:g}=M(V),I=J(),{updateMembers:T,removeFamily:U,leaveFamily:p}=I,{familyMembers:z,familyMembersDetails:d,familyId:C,familyName:y}=M(I),w=q(),_=q(),S=Ve(),{shoppingLists:b}=M(S),{getAllShoppingLists:x,updateShoppingList:v}=S,l=Te(),{pantries:u}=M(l),{getAllPantries:m,editPantry:O}=l,Z=Ue(),{expenses:$}=M(Z),{getAllMyExpenses:W,editExpense:R}=Z,h=xe(()=>C.value===f.value),F=()=>w.value.$el.dismiss(null,"cancel"),_e=()=>w.value.$el.dismiss(null,"confirm"),me=()=>_.value.$el.dismiss(null,"confirm"),fe=n=>{_e(),d.value=n,h.value=!0},pe=()=>{me()},ye=async n=>{b.value.length?b.value.forEach(async o=>{o.membersIds.includes(n.id)&&(o.membersIds=o.membersIds.filter(a=>a!==n.id),o.members=o.members.filter(a=>a.id!==n.id),await v(o))}):(await x(),b.value.length&&b.value.forEach(async o=>{o.membersIds.includes(n.id)&&(o.membersIds=o.membersIds.filter(a=>a!==n.id),o.members=o.members.filter(a=>a.id!==n.id),await v(o))}))},we=async n=>{u.value.length?u.value.forEach(async o=>{o.membersIds.includes(n.id)&&(o.membersIds=o.membersIds.filter(a=>a!==n.id),o.members=o.members.filter(a=>a.id!==n.id),await O(o))}):(await m(),u.value.length&&u.value.forEach(async o=>{o.membersIds.includes(n.id)&&(o.membersIds=o.membersIds.filter(a=>a!==n.id),o.members=o.members.filter(a=>a.id!==n.id),await O(o))}))},he=async n=>{$.value.length?$.value.forEach(async o=>{o.familyMembers.includes(n.id)&&(o.familyMembers=o.familyMembers.filter(a=>a!==n.id),R(o))}):(await W(),$.value.length&&$.value.forEach(async o=>{o.familyMembers.includes(n.id)&&(o.familyMembers=o.familyMembers.filter(a=>a!==n.id),R(o))}))},ze=async n=>{const o=d.value.filter(P=>P.id!==n.id),a=z.value.filter(P=>P!==n.id);await T(o,a),await ye(n),await we(n),await he(n),await B({title:`Zostałeś usunięty z rodziny "${g.value}"`,content:`Zostałeś usunięty z rodziny przez użytkownika "${g.value}`},n.id)},be=async()=>{const n=d.value.filter(a=>a.id!==f.value),o=z.value.filter(a=>a!==f.value);await p(n,o),Ze("/")};return(n,o)=>{const a=Re,P=X,ve=Y,ne=an,ke=qe,Me=K,ge=We,Ie=Ge,L=He,Ce=tn,Se=sn,$e=Je,Fe=un,oe=Qe,Le=_n,j=Xe,te=Ye,Ae=Ke,Ee=en,De=Pe;return c(),r(De,null,{default:e(()=>[t(ve,{style:{background:"var(--ion-color-light)"}},{default:e(()=>[t(P,null,{default:e(()=>[t(a,null,{default:e(()=>[D("Rodzina "),i(y)?(c(),E("span",mn,'"'+G(i(y))+'"',1)):k("",!0)]),_:1})]),_:1})]),_:1}),t(Ee,{fullscreen:!0},{default:e(()=>[s("div",null,[i(d).length?(c(),r(Ie,{key:1},{default:e(()=>[t(ge,{value:"first"},{default:e(()=>[t(Me,{slot:"header",color:"light"},{default:e(()=>[t(ke,null,{default:e(()=>[kn]),_:1})]),_:1}),s("div",Mn,[t(ne,{subtitle:"Możesz utworzyć własną rodzinę a następnie dodawać do niej członków?",icon:"ioniconsBulb",class:"mb-4 mt-2"},{default:e(()=>[gn,In,Cn,Sn,$n,Fn]),_:1})])]),_:1})]),_:1})):(c(),r(ne,{key:0,title:"Czy wiesz, że...",subtitle:"Możesz utworzyć własną rodzinę a następnie dodawać do niej członków?",icon:"ioniconsBulb",class:"mt-8"},{default:e(()=>[fn,pn,yn,wn,hn,zn,bn,vn]),_:1})),i(d).length?(c(),E("h2",Ln,"Członkowie rodziny")):k("",!0),t($e,{lines:"none"},{default:e(()=>[(c(!0),E(Oe,null,je(i(d),A=>(c(),r(Se,{key:A.id,class:"flex items-center"},{start:e(()=>[s("span",null,[D(G(A.nickname)+" ("+G(A.email)+") ",1),A.status==="pending"?(c(),E("small",An,"(oczekiwanie)")):k("",!0)])]),end:e(()=>[i(h)&&A.id!==i(f)?(c(),r(Ce,{key:0,type:"tertiary",onClick:()=>ze(A),size:"small"},{default:e(()=>[t(L,{icon:"ioniconsTrash"in n?n.ioniconsTrash:i(ae)},null,8,["icon"])]),_:2},1032,["onClick"])):k("",!0)]),_:2},1024))),128))]),_:1})]),t(oe,{class:"auto-height",ref_key:"modal",ref:w,trigger:"open-modal"},{default:e(()=>[t(Fe,{onCancel:F,onConfirmModal:fe})]),_:1},512),t(oe,{class:"auto-height",ref_key:"createModal",ref:_,trigger:"open-create-modal"},{default:e(()=>[t(Le,{onCancel:F,onConfirmModal:pe})]),_:1},512),!i(h)&&!i(z).includes(i(f))?(c(),r(te,{key:0,slot:"fixed",vertical:"bottom",horizontal:"end"},{default:e(()=>[i(h)?k("",!0):(c(),r(j,{key:0,id:"open-create-modal"},{default:e(()=>[t(L,{icon:"ioniconsAdd"in n?n.ioniconsAdd:i(se)},null,8,["icon"])]),_:1}))]),_:1})):(c(),r(te,{key:1,slot:"fixed",vertical:"bottom",horizontal:"end"},{default:e(()=>[t(j,null,{default:e(()=>[t(L,{icon:"ioniconsArrowUpCircle"in n?n.ioniconsArrowUpCircle:i(nn)},null,8,["icon"])]),_:1}),t(Ae,{side:"top"},{default:e(()=>[i(h)?(c(),r(j,{key:0,id:"open-modal"},{default:e(()=>[t(L,{icon:"ioniconsAdd"in n?n.ioniconsAdd:i(se)},null,8,["icon"])]),_:1})):k("",!0),i(h)?k("",!0):(c(),r(j,{key:1,onClick:be},{default:e(()=>[t(L,{icon:"ioniconsPlayForwardCircleOutline"in n?n.ioniconsPlayForwardCircleOutline:i(on)},null,8,["icon"])]),_:1})),i(h)?(c(),r(j,{key:2,onClick:i(U)},{default:e(()=>[t(L,{icon:"ioniconsTrash"in n?n.ioniconsTrash:i(ae)},null,8,["icon"])]),_:1},8,["onClick"])):k("",!0)]),_:1})]),_:1}))]),_:1})]),_:1})}}};export{Vn as default};
