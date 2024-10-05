import{bu as A,bC as k,bD as P,bE as B,bz as F,by as H,bF as p,bG as b,bH as G,bI as U,bJ as Y}from"./Dllh6qvR.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const D=new WeakMap,I=(e,s,t,o=0,i=!1)=>{D.has(e)!==t&&(t?q(e,s,o,i):z(e,s))},$=e=>e===e.getRootNode().activeElement,q=(e,s,t,o=!1)=>{const i=s.parentNode,r=s.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),i.appendChild(r),D.set(e,r);const a=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",s.style.transform=`translate3d(${a}px,${t}px,0) scale(0)`},z=(e,s)=>{const t=D.get(e);t&&(D.delete(e),t.remove()),e.style.pointerEvents="",s.style.transform=""},O=50,W=(e,s,t)=>{if(!t||!s)return()=>{};const o=a=>{$(s)&&I(e,s,a)},i=()=>I(e,s,!1),r=()=>o(!0),c=()=>o(!1);return P(t,"ionScrollStart",r),P(t,"ionScrollEnd",c),s.addEventListener("blur",i),()=>{B(t,"ionScrollStart",r),B(t,"ionScrollEnd",c),s.removeEventListener("blur",i)}},T="input, textarea, [no-blur], [contenteditable]",j=()=>{let e=!0,s=!1;const t=document,o=()=>{s=!0},i=()=>{e=!0},r=c=>{if(s){s=!1;return}const a=t.activeElement;if(!a||a.matches(T))return;const f=c.target;f!==a&&(f.matches(T)||f.closest(T)||(e=!1,setTimeout(()=>{e||a.blur()},50)))};return P(t,"ionScrollStart",o),t.addEventListener("focusin",i,!0),t.addEventListener("touchend",r,!1),()=>{B(t,"ionScrollStart",o,!0),t.removeEventListener("focusin",i,!0),t.removeEventListener("touchend",r,!1)}},J=.3,Q=(e,s,t,o)=>{var i;const r=(i=e.closest("ion-item,[ion-item]"))!==null&&i!==void 0?i:e;return V(r.getBoundingClientRect(),s.getBoundingClientRect(),t,o)},V=(e,s,t,o)=>{const i=e.top,r=e.bottom,c=s.top,a=Math.min(s.bottom,o-t),f=c+15,l=a-O-r,d=f-i,S=Math.round(l<0?-l:d>0?-d:0),v=Math.min(S,i-c),n=Math.abs(v)/J,y=Math.min(400,Math.max(150,n));return{scrollAmount:v,scrollDuration:y,scrollPadding:t,inputSafeY:-(i-f)+4}},R="$ionPaddingTimer",M=(e,s,t)=>{const o=e[R];o&&clearTimeout(o),s>0?e.style.setProperty("--keyboard-offset",`${s}px`):e[R]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},_=(e,s,t)=>{const o=()=>{s&&M(s,0,t)};e.addEventListener("focusout",o,{once:!0})};let g=0;const K="data-ionic-skip-scroll-assist",X=(e,s,t,o,i,r,c,a=!1)=>{const f=r&&(c===void 0||c.mode===p.None);let u=!1;const l=b!==void 0?b.innerHeight:0,d=h=>{if(u===!1){u=!0;return}N(e,s,t,o,h.detail.keyboardHeight,f,a,l,!1)},S=()=>{u=!1,b===null||b===void 0||b.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",S)},v=async()=>{if(s.hasAttribute(K)){s.removeAttribute(K);return}N(e,s,t,o,i,f,a,l),b===null||b===void 0||b.addEventListener("ionKeyboardDidShow",d),e.addEventListener("focusout",S)};return e.addEventListener("focusin",v),()=>{e.removeEventListener("focusin",v),b===null||b===void 0||b.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",S)}},C=e=>{document.activeElement!==e&&(e.setAttribute(K,"true"),e.focus())},N=async(e,s,t,o,i,r,c=!1,a=0,f=!0)=>{if(!t&&!o)return;const u=Q(e,t||o,i,a);if(t&&Math.abs(u.scrollAmount)<4){C(s),r&&t!==null&&(M(t,g),_(s,t,()=>g=0));return}if(I(e,s,!0,u.inputSafeY,c),C(s),G(()=>e.click()),r&&t&&(g=u.scrollPadding,M(t,g)),typeof window<"u"){let l;const d=async()=>{l!==void 0&&clearTimeout(l),window.removeEventListener("ionKeyboardDidShow",S),window.removeEventListener("ionKeyboardDidShow",d),t&&await Y(t,0,u.scrollAmount,u.scrollDuration),I(e,s,!1,u.inputSafeY),C(s),r&&_(s,t,()=>g=0)},S=()=>{window.removeEventListener("ionKeyboardDidShow",S),window.addEventListener("ionKeyboardDidShow",d)};if(t){const v=await U(t),h=v.scrollHeight-v.clientHeight;if(f&&u.scrollAmount>h-v.scrollTop){s.type==="password"?(u.scrollAmount+=O,window.addEventListener("ionKeyboardDidShow",S)):window.addEventListener("ionKeyboardDidShow",d),l=setTimeout(d,1e3);return}}d()}},Z=!0,te=async(e,s)=>{if(A===void 0)return;const t=s==="ios",o=s==="android",i=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",t),a=e.getBoolean("inputBlurring",t),f=e.getBoolean("scrollPadding",!0),u=Array.from(A.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,d=new WeakMap,S=await k.getResizeMode(),v=async n=>{await new Promise(m=>F(n,m));const y=n.shadowRoot||n,w=y.querySelector("input")||y.querySelector("textarea"),L=H(n),x=L?null:n.closest("ion-footer");if(!w)return;if(L&&c&&!l.has(n)){const m=W(n,w,L);l.set(n,m)}if(!(w.type==="date"||w.type==="datetime-local")&&(L||x)&&r&&!d.has(n)){const m=X(n,w,L,x,i,f,S,o);d.set(n,m)}},h=n=>{if(c){const y=l.get(n);y&&y(),l.delete(n)}if(r){const y=d.get(n);y&&y(),d.delete(n)}};a&&Z&&j();for(const n of u)v(n);A.addEventListener("ionInputDidLoad",n=>{v(n.detail)}),A.addEventListener("ionInputDidUnload",n=>{h(n.detail)})};export{te as startInputShims};
