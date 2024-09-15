import{_ as j,t as l,N as v,A as o,B as w,y as _,a9 as oe,T as R,v as $,R as U,S as q,L as Q,M as H,i as I,z as e,P as n,Q as O,aa as X,ab as se,d as le,x as d,Z as ae,r as ie,a2 as ce,l as L,ac as re,a7 as ue,a8 as de,U as _e,V as pe,W as me,ad as fe,ae as ve,$ as be,af as ye,ag as xe,a1 as he,C as ke,D as Ce}from"./B4jYTB7S.js";import{c as N,a as ge,b as we,f as $e,d as Ie}from"./CHVAF33P.js";import{u as Se}from"./0-YJ2wE6.js";const Oe={__name:"filter-tab",props:{filter:{type:Object,required:!0},active:{type:String,required:!0}},emits:["click"],setup(a,{emit:m}){const s=m;return(x,f)=>{const u=R;return l(),v(u,{onClick:f[0]||(f[0]=c=>s("click",a.filter)),class:oe(["text-xl",{active:a.active===a.filter.value}]),size:"small",fill:"clear"},{default:o(()=>[w(_(a.filter.label),1)]),_:1},8,["class"])}}},Ne=j(Oe,[["__scopeId","data-v-62c2c020"]]),Be={class:"flex justify-between w-full mb-4"},Ee={__name:"filter-tabs",props:{filters:{type:Array,default:()=>[]},active:{type:String,default:"Wszystkie"}},emits:["click"],setup(a,{emit:m}){const s=m;return(x,f)=>{const u=Ne;return l(),$("div",Be,[(l(!0),$(U,null,q(a.filters,c=>(l(),v(u,{key:c,filter:c,active:a.active,onClick:r=>s("click",c)},null,8,["filter","active","onClick"]))),128))])}}},ze={class:"flex overflow-auto gap-2 w-full"},Fe={__name:"filter-pills",props:{filters:{type:Array,default:()=>[]}},setup(a){const m=Q(),{selectedPeriod:s,startDate:x,endDate:f,shopName:u,expenseName:c,startPrice:r,endPrice:b,category:B}=H(m),{queryExpenses:P,updatePeriod:D,updateEndDate:T,updateStartDate:W,updateStartPrice:E,updateEndPrice:M,updateShopName:t,updateExpenseName:z,updateCategory:V}=m,A=I(()=>s.value.label?s.value.label:x.value&&f.value?`${x.value} - ${f.value}`:""),S=I(()=>r.value&&b.value?`${r.value} - ${b.value}`:r.value?`od ${r.value}`:b.value?`do ${b.value}`:""),y=async i=>{switch(i){case"shopName":t("");break;case"expenseName":z("");break;case"category":V("");break;case"priceRange":E(""),M("");break;case"selectedPeriod":D({value:"month",label:"Bieżący miesiąc"});break}await P()};return(i,p)=>{const k=X,C=R,h=se;return l(),$("div",ze,[e(h,null,{default:o(()=>[w(_(n(A))+" ",1),n(s).value!=="month"?(l(),v(C,{key:0,fill:"clear",size:"small",onClick:p[0]||(p[0]=g=>y("selectedPeriod"))},{default:o(()=>[e(k,{icon:"ioniconsCloseOutline"in i?i.ioniconsCloseOutline:n(N)},null,8,["icon"])]),_:1})):O("",!0)]),_:1}),n(u)?(l(),v(h,{key:0},{default:o(()=>[w(_(n(u))+" ",1),e(C,{fill:"clear",size:"small",onClick:p[1]||(p[1]=g=>y("shopName"))},{default:o(()=>[e(k,{icon:"ioniconsCloseOutline"in i?i.ioniconsCloseOutline:n(N)},null,8,["icon"])]),_:1})]),_:1})):O("",!0),n(B)?(l(),v(h,{key:1},{default:o(()=>[w(_(n(B))+" ",1),e(C,{fill:"clear",size:"small",onClick:p[2]||(p[2]=g=>y("category"))},{default:o(()=>[e(k,{icon:"ioniconsCloseOutline"in i?i.ioniconsCloseOutline:n(N)},null,8,["icon"])]),_:1})]),_:1})):O("",!0),n(c)?(l(),v(h,{key:2},{default:o(()=>[w(_(n(c))+" ",1),e(C,{fill:"clear",size:"small",onClick:p[3]||(p[3]=g=>y("expenseName"))},{default:o(()=>[e(k,{icon:"ioniconsCloseOutline"in i?i.ioniconsCloseOutline:n(N)},null,8,["icon"])]),_:1})]),_:1})):O("",!0),n(S)?(l(),v(h,{key:3},{default:o(()=>[w(_(n(S))+" ",1),e(C,{fill:"clear",size:"small",onClick:p[4]||(p[4]=g=>y("priceRange"))},{default:o(()=>[e(k,{icon:"ioniconsCloseOutline"in i?i.ioniconsCloseOutline:n(N)},null,8,["icon"])]),_:1})]),_:1})):O("",!0)])}}},Pe=j(Fe,[["__scopeId","data-v-f812e33d"]]),De={class:"flex h-full w-full justify-between items-start"},Te={class:"flex flex-col"},Me={class:"flex-flex-col"},Ve={class:"text-base expense-shop"},Ae={class:"text-lg font-bold expense-date"},Le={class:"flex items-end font-bold"},je={class:"flex items-start"},Re={class:"text-3xl price-big"},We={class:"text-sm price-small"},Ue=le({__name:"item",props:{expense:{}},emits:["openEditExpense","removeExpense"],setup(a,{emit:m}){const s=a,x=I(()=>parseInt(s.expense.value)),f=I(()=>(Number(s.expense.value)-Math.floor(Number(s.expense.value))).toFixed(2).toString().slice(2)),u=I(()=>s.expense.timestamp.seconds?new Date(s.expense.timestamp.seconds*1e3).toLocaleString("default",{day:"numeric",month:"numeric",year:"numeric"}):new Date(s.expense.timestamp).toLocaleString("default",{day:"numeric",month:"numeric",year:"numeric"}));return(c,r)=>{const b=ae;return l(),v(b,{class:"flex flex-col py-2 pl-6 pr-2 bg-white rounded-2xl shadow-lg"},{default:o(()=>[d("div",De,[d("div",Te,[d("div",Me,[d("p",Ve,_(c.expense.shop)+" - "+_(c.expense.name)+" - "+_(c.expense.category.toLowerCase()),1)]),d("p",Ae,_(n(u)),1)]),d("div",Le,[d("p",je,[d("span",Re,_(n(x)),1),d("span",We,_(n(f)),1)])])])]),_:1})}}}),Z=a=>(ke("data-v-22ea3108"),a=a(),Ce(),a),qe={key:0,class:"w-full flex justify-center items-center h-full"},Qe={key:1},He=Z(()=>d("h2",null,"Brak wydatków",-1)),Xe={key:2,class:"h-full overflow-auto"},Ze={class:"text-2xl my-4 flex justify-between font-bold"},Ge=Z(()=>d("span",null,"Razem ",-1)),Je={__name:"index",setup(a){const m=localStorage.getItem("uid"),s=Q(),{queryExpenses:x,setCurrentExpense:f}=s,{expenses:u,isLoading:c}=H(s),r=ie("all"),b=[{value:"all",label:"Wszystkie"},{value:"my",label:"Moje"},{value:"common",label:"Wspólne"}];Se(async()=>{await x()},"$biXQIOSgVL");const B=t=>{f(t),L(`/expenses/${t.id}`)},P=()=>{L("/expenses/new")},D=I(()=>parseFloat(T.value.reduce((t,z)=>Number(t)+Number(z.value),0)).toFixed(2)),T=I(()=>r.value==="all"?u.value:r.value==="my"?u.value.filter(t=>t.userId===m&&t.familyMembers.length===0):u.value.filter(t=>t.userId===m&&t.familyMembers.length>0||t.familyMembers.includes(m))),W=async()=>{await re.open("expense-filter")},E=t=>{t.label==="Wszystkie"?r.value="all":t.label==="Moje"?r.value="my":r.value="common"},M=()=>{L("/expenses/charts")};return(t,z)=>{const V=ue,A=de,S=_e,y=X,i=R,p=pe,k=me,C=fe,h=Ee,g=Pe,G=ve,J=Ue,K=be,Y=ye,ee=xe,ne=he,te=ce;return l(),v(te,null,{default:o(()=>[e(k,{style:{background:"var(--ion-color-light)"}},{default:o(()=>[e(p,null,{default:o(()=>[e(V,null,{default:o(()=>[w("Wydatki")]),_:1}),e(S,{slot:"start"},{default:o(()=>[e(A,{text:"",icon:"ioniconsArrowBackOutline"in t?t.ioniconsArrowBackOutline:n(ge)},null,8,["icon"])]),_:1}),e(S,{slot:"end"},{default:o(()=>[e(i,{fill:"clear",onClick:M},{default:o(()=>[e(y,{slot:"icon-only",icon:"ioniconsBarChartOutline"in t?t.ioniconsBarChartOutline:n(we)},null,8,["icon"])]),_:1}),e(i,{fill:"clear",onClick:W},{default:o(()=>[e(y,{slot:"icon-only",icon:"ioniconsFilter"in t?t.ioniconsFilter:n($e)},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(ne,{fullscreen:!0,class:"h-dvh overflow-hidden"},{default:o(()=>[n(c)?(l(),$("div",qe,[e(C,{name:"lines-sharp"})])):!n(c)&&!n(u).length?(l(),$("div",Qe,[e(h,{filters:b,active:n(r),onClick:E},null,8,["active"]),e(g),He])):(l(),$("div",Xe,[e(h,{filters:b,active:n(r),onClick:E},null,8,["active"]),e(g),d("div",Ze,[Ge,d("span",null,_(n(D))+" zł",1)]),e(G,{class:"mb-6"}),e(K,{lines:"none",class:"overflow-auto h-[70%]"},{default:o(()=>[(l(!0),$(U,null,q(n(T),F=>(l(),v(J,{key:`${F.name}-${F.id}`,expense:F,onClick:()=>B(F)},null,8,["expense","onClick"]))),128))]),_:1})])),e(ee,{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:o(()=>[e(Y,{onClick:P},{default:o(()=>[e(y,{icon:"ioniconsAdd"in t?t.ioniconsAdd:n(Ie)},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1})}}},nn=j(Je,[["__scopeId","data-v-22ea3108"]]);export{nn as default};
