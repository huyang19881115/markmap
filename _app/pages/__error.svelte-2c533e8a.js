import{S as P,i as w,s as z,k as h,e as E,t as b,l as k,I as A,d as o,n as v,c as q,a as S,g as j,b as C,f as u,D,h as H,E as I}from"../chunks/vendor-76a7eba6.js";function B(l){let t,i,a,_,r,n,f=l[1].message+"",c,m,d;return document.title=t=l[0],{c(){i=h(),a=E("h1"),_=b(l[0]),r=h(),n=E("p"),c=b(f),m=h(),d=k(),this.h()},l(e){A('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(o),i=v(e),a=q(e,"H1",{class:!0});var p=S(a);_=j(p,l[0]),p.forEach(o),r=v(e),n=q(e,"P",{class:!0});var y=S(n);c=j(y,f),y.forEach(o),m=v(e),d=k(),this.h()},h(){C(a,"class","svelte-8od9u6"),C(n,"class","svelte-8od9u6")},m(e,s){u(e,i,s),u(e,a,s),D(a,_),u(e,r,s),u(e,n,s),D(n,c),u(e,m,s),u(e,d,s)},p(e,[s]){s&1&&t!==(t=e[0])&&(document.title=t),s&1&&H(_,e[0]),s&2&&f!==(f=e[1].message+"")&&H(c,f)},i:I,o:I,d(e){e&&o(i),e&&o(a),e&&o(r),e&&o(n),e&&o(m),e&&o(d)}}}function J({error:l,status:t}){return{props:{error:l,status:t}}}function F(l,t,i){let{status:a}=t,{error:_}=t;return l.$$set=r=>{"status"in r&&i(0,a=r.status),"error"in r&&i(1,_=r.error)},[a,_]}class K extends P{constructor(t){super();w(this,t,F,B,z,{status:0,error:1})}}export{K as default,J as load};
