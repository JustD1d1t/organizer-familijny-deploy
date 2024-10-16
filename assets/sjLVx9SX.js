import{ac as E,L as O,aD as z,i as w,t as e,v as g,x as f,z as t,A as n,B as x,y as S,O as o,N as m,b2 as F,P as L,l as C,al as U,a5 as T,X as W,a1 as D,ag as M,Y as V,b4 as P,R,Q,ao as q,u as H,Z as X,T as Y,U as Z,S as G,V as J,W as K,aq as tt,ar as nt,$ as st,a9 as ot}from"./BK8j0IDP.js";import{u as et}from"./DJrOm6Ol.js";const it={class:"flex flex-col py-2 pl-6 pr-2 my-1 bg-white rounded-2xl shadow-2xl"},lt={class:"flex items-center"},at={class:"flex flex-col grow"},ct={class:"mr-4"},pt={__name:"single-list-item",props:{shoppingList:{type:Object,default:()=>{}}},setup(s){const l=s,a=E(),{uid:p}=O(a),r=z(),{removeShoppingList:u,setCurrentShoppingList:y}=r,_=i=>{C(`/shopping-lists/${i.id}`),y(i)},c=()=>{y(l.shoppingList),C(`/shopping-lists/${l.shoppingList.id}/edit`)},k=w(()=>l.shoppingList.items.filter(i=>i.checked).length),d=w(()=>l.shoppingList.ownerId!==p.value),v=w(()=>{var i;return((i=l.shoppingList.members)==null?void 0:i.map(h=>h.nickname).join(", "))??""});return(i,h)=>{const b=U,$=T,B=W,I=D,j=M,A=V,N=P;return e(),g("div",it,[f("div",lt,[f("div",at,[t(b,{class:"flex-grow font-bold",onClick:h[0]||(h[0]=()=>_(s.shoppingList))},{default:n(()=>[x(S(s.shoppingList.name),1)]),_:1}),f("div",null,[f("span",ct,S(o(k))+" / "+S(s.shoppingList.items.length),1),f("span",null,S(o(v)),1)])]),o(d)?L("",!0):(e(),m(B,{key:0,id:"open-shopping-menu-"+s.shoppingList.id,class:"ml-auto",size:"small",type:"tertiary"},{default:n(()=>[t($,{size:"medium",icon:"ioniconsEllipsisVerticalOutline"in i?i.ioniconsEllipsisVerticalOutline:o(F)},null,8,["icon"])]),_:1},8,["id"])),o(d)?L("",!0):(e(),m(N,{key:1,trigger:"open-shopping-menu-"+s.shoppingList.id,"trigger-action":"click",side:"bottom",alignment:"center","dismiss-on-select":!0},{default:n(()=>[t(A,{class:"ion-padding mr-8"},{default:n(()=>[t(j,null,{default:n(()=>[t(I,{onClick:c},{default:n(()=>[t(b,null,{default:n(()=>[x("Edytuj")]),_:1})]),_:1}),t(I,{onClick:h[1]||(h[1]=bt=>o(u)(s.shoppingList.id))},{default:n(()=>[t(b,null,{default:n(()=>[x("Usuń")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"]))])])}}},rt={class:"flex flex-col"},ut={__name:"items",props:{shoppingLists:{type:Object,default:()=>{}}},setup(s){return(l,a)=>{const p=pt;return e(),g("div",rt,[(e(!0),g(R,null,Q(s.shoppingLists,r=>(e(),m(p,{key:r.name,shoppingList:r},null,8,["shoppingList"]))),128))])}}},_t={key:0,class:"w-full"},dt={key:0,class:"col-span-2 text-center"},ht={__name:"lists-container",props:{title:{type:String,default:()=>{}},shoppingLists:{type:Object,default:()=>{}}},setup(s){return(l,a)=>{const p=ut;return s.shoppingLists.length?(e(),g("div",_t,[s.title?(e(),g("h2",dt,S(s.title),1)):L("",!0),t(p,{shoppingLists:s.shoppingLists},null,8,["shoppingLists"])])):L("",!0)}}},gt={key:0,class:"w-full flex justify-center items-center h-full"},mt={key:1},ft={key:1,class:"w-full p-2 grid-cols-2 grid auto-rows-max overflow-auto"},Lt=f("h2",{class:"col-span-2 text-center"},"Nie posiadasz swoich list",-1),yt=[Lt],kt={__name:"lists",setup(s){const l=z(),{shoppingLists:a,isLoading:p,collaboratedShoppingLists:r}=O(l),u=w(()=>a.value.filter(_=>{var c;return(c=_.members)==null?void 0:c.length})),y=w(()=>a.value.filter(_=>{var c;return!((c=_.members)!=null&&c.length)}));return(_,c)=>{const k=q,d=ht;return o(p)?(e(),g("div",gt,[t(k,{name:"lines-sharp"})])):(e(),g("div",mt,[o(a).length?(e(),m(d,{key:0,title:"Twoje listy zakupowe",shoppingLists:o(y)},null,8,["shoppingLists"])):(e(),g("div",ft,yt)),o(a).length&&o(u).length?(e(),m(d,{key:2,title:"Współdzielone listy zakupowe",shoppingLists:o(u)},null,8,["shoppingLists"])):L("",!0),o(r).length?(e(),m(d,{key:3,title:"Listy do których zostałeś zaproszony",shoppingLists:o(r)},null,8,["shoppingLists"])):L("",!0)]))}}},It={__name:"index",setup(s){const l=H(),a=()=>{l.push("/shopping-lists/new")},p=z(),{getAllShoppingLists:r}=p;return et(async()=>{await r()},"$SFyjIVUp0Q"),(u,y)=>{const _=Y,c=Z,k=G,d=J,v=K,i=kt,h=T,b=tt,$=nt,B=V,I=X;return e(),m(I,null,{default:n(()=>[t(v,null,{default:n(()=>[t(d,null,{default:n(()=>[t(c,{slot:"start"},{default:n(()=>[t(_,{text:"",icon:"ioniconsArrowBackOutline"in u?u.ioniconsArrowBackOutline:o(st)},null,8,["icon"])]),_:1}),t(k,null,{default:n(()=>[x("Listy zakupowe")]),_:1})]),_:1})]),_:1}),t(B,{fullscreen:!0},{default:n(()=>[t(i),t($,{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:n(()=>[t(b,{onClick:a},{default:n(()=>[t(h,{icon:"ioniconsAdd"in u?u.ioniconsAdd:o(ot)},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{It as default};
