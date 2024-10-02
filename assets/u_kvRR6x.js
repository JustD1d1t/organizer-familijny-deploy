import{N as E,M as O,aC as z,i as S,t as e,v as h,x as m,z as t,A as n,B as x,y as k,Q as o,O as f,b0 as F,R as w,l as C,af as M,a1 as j,U,$ as W,a0 as R,a5 as T,b2 as D,S as P,T as Q,aj as H,u as X,a6 as q,ae as G,V as J,a3 as K,W as Y,X as Z,al as tt,am as nt,ag as st,a7 as ot}from"./CtmnvVoy.js";import{u as et}from"./CTE6AX_1.js";const it={class:"flex flex-col py-2 pl-6 pr-2 my-1 bg-white rounded-2xl shadow-2xl"},lt={class:"flex items-center"},at={class:"flex flex-col grow"},ct={class:"mr-4"},pt={__name:"single-list-item",props:{shoppingList:{type:Object,default:()=>{}}},setup(s){const l=s,a=E(),{uid:p}=O(a),r=z(),{removeShoppingList:u,setCurrentShoppingList:L}=r,_=i=>{C(`/shopping-lists/${i.id}`),L(i)},c=()=>{L(l.shoppingList),C(`/shopping-lists/${l.shoppingList.id}/edit`)},y=S(()=>l.shoppingList.items.filter(i=>i.checked).length),g=S(()=>l.shoppingList.ownerId!==p.value),v=S(()=>{var i;return((i=l.shoppingList.members)==null?void 0:i.map(d=>d.nickname).join(", "))??""});return(i,d)=>{const b=M,$=j,B=U,I=W,V=R,A=T,N=D;return e(),h("div",it,[m("div",lt,[m("div",at,[t(b,{class:"flex-grow font-bold",onClick:d[0]||(d[0]=()=>_(s.shoppingList))},{default:n(()=>[x(k(s.shoppingList.name),1)]),_:1}),m("div",null,[m("span",ct,k(o(y))+" / "+k(s.shoppingList.items.length),1),m("span",null,k(o(v)),1)])]),o(g)?w("",!0):(e(),f(B,{key:0,id:"open-shopping-menu-"+s.shoppingList.id,class:"ml-auto",size:"small",type:"tertiary"},{default:n(()=>[t($,{size:"medium",icon:"ioniconsEllipsisVerticalOutline"in i?i.ioniconsEllipsisVerticalOutline:o(F)},null,8,["icon"])]),_:1},8,["id"])),t(N,{trigger:"open-shopping-menu-"+s.shoppingList.id,"trigger-action":"click",side:"bottom",alignment:"center","dismiss-on-select":!0},{default:n(()=>[t(A,{class:"ion-padding mr-8"},{default:n(()=>[t(V,null,{default:n(()=>[t(I,{onClick:c},{default:n(()=>[t(b,null,{default:n(()=>[x("Edytuj")]),_:1})]),_:1}),t(I,{onClick:d[1]||(d[1]=kt=>o(u)(s.shoppingList.id))},{default:n(()=>[t(b,null,{default:n(()=>[x("Usuń")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])])])}}},rt={class:"flex flex-col"},ut={__name:"items",props:{shoppingLists:{type:Object,default:()=>{}}},setup(s){return(l,a)=>{const p=pt;return e(),h("div",rt,[(e(!0),h(P,null,Q(s.shoppingLists,r=>(e(),f(p,{key:r.name,shoppingList:r},null,8,["shoppingList"]))),128))])}}},_t={key:0,class:"w-full"},dt={key:0,class:"col-span-2 text-center"},ht={__name:"lists-container",props:{title:{type:String,default:()=>{}},shoppingLists:{type:Object,default:()=>{}}},setup(s){return(l,a)=>{const p=ut;return s.shoppingLists.length?(e(),h("div",_t,[s.title?(e(),h("h2",dt,k(s.title),1)):w("",!0),t(p,{shoppingLists:s.shoppingLists},null,8,["shoppingLists"])])):w("",!0)}}},gt={key:0,class:"w-full flex justify-center items-center h-full"},mt={key:1},ft={key:1,class:"w-full p-2 grid-cols-2 grid auto-rows-max overflow-auto"},Lt=m("h2",{class:"col-span-2 text-center"},"Nie posiadasz swoich list",-1),yt=[Lt],bt={__name:"lists",setup(s){const l=z(),{shoppingLists:a,isLoading:p,collaboratedShoppingLists:r}=O(l),u=S(()=>a.value.filter(_=>{var c;return(c=_.members)==null?void 0:c.length})),L=S(()=>a.value.filter(_=>{var c;return!((c=_.members)!=null&&c.length)}));return(_,c)=>{const y=H,g=ht;return o(p)?(e(),h("div",gt,[t(y,{name:"lines-sharp"})])):(e(),h("div",mt,[o(a).length?(e(),f(g,{key:0,title:"Twoje listy zakupowe",shoppingLists:o(L)},null,8,["shoppingLists"])):(e(),h("div",ft,yt)),o(a).length&&o(u).length?(e(),f(g,{key:2,title:"Współdzielone listy zakupowe",shoppingLists:o(u)},null,8,["shoppingLists"])):w("",!0),o(r).length?(e(),f(g,{key:3,title:"Listy do których zostałeś zaproszony",shoppingLists:o(r)},null,8,["shoppingLists"])):w("",!0)]))}}},It={__name:"index",setup(s){const l=X(),a=()=>{l.push("/shopping-lists/new")},p=z(),{getAllShoppingLists:r}=p;return et(async()=>{await r()},"$SFyjIVUp0Q"),(u,L)=>{const _=G,c=J,y=K,g=Y,v=Z,i=bt,d=j,b=tt,$=nt,B=T,I=q;return e(),f(I,null,{default:n(()=>[t(v,null,{default:n(()=>[t(g,null,{default:n(()=>[t(c,{slot:"start"},{default:n(()=>[t(_,{text:"",icon:"ioniconsArrowBackOutline"in u?u.ioniconsArrowBackOutline:o(st)},null,8,["icon"])]),_:1}),t(y,null,{default:n(()=>[x("Listy zakupowe")]),_:1})]),_:1})]),_:1}),t(B,{fullscreen:!0},{default:n(()=>[t(i),t($,{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:n(()=>[t(b,{onClick:a},{default:n(()=>[t(d,{icon:"ioniconsAdd"in u?u.ioniconsAdd:o(ot)},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{It as default};
