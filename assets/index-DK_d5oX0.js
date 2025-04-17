(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function r(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=r(l);fetch(l.href,i)}})();const he=!1;var Kt=Array.isArray,dr=Array.prototype.indexOf,Zt=Array.from,hr=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,Ne=Object.getOwnPropertyDescriptors,pr=Object.prototype,gr=Array.prototype,Xt=Object.getPrototypeOf,pe=Object.isExtensible;function wr(t){return typeof t=="function"}const ht=()=>{};function yr(t){return t()}function Vt(t){for(var e=0;e<t.length;e++)t[e]()}const U=2,Ie=4,Lt=8,Jt=16,Z=32,vt=64,Rt=128,L=256,Ct=512,D=1024,Y=2048,rt=4096,K=8192,Ft=16384,mr=32768,Qt=65536,xr=1<<17,Er=1<<19,De=1<<20,Wt=1<<21,ct=Symbol("$state"),br=Symbol("legacy props"),kr=Symbol("");function Me(t){return t===this.v}function Tr(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function qe(t){return!Tr(t,this.v)}function Ar(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Sr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Rr(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Cr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Or(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Nr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ir(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Dr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let mt=!1,Mr=!1;function qr(){mt=!0}const te=1,ee=2,Pe=4,Pr=8,Lr=16,Fr=2,$r=2,q=Symbol(),Br="http://www.w3.org/1999/xhtml";let A=null;function ge(t){A=t}function re(t,e=!1,r){var n=A={p:A,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};mt&&!e&&(A.l={s:null,u:null,r1:[],r2:wt(!1)}),je(()=>{n.d=!0})}function ne(t){const e=A;if(e!==null){const f=e.e;if(f!==null){var r=x,n=y;e.e=null;try{for(var l=0;l<f.length;l++){var i=f[l];et(i.effect),j(i.reaction),ze(i.fn)}}finally{et(r),j(n)}}A=e.p,e.m=!0}return{}}function $t(){return!mt||A!==null&&A.l===null}function ft(t){if(typeof t!="object"||t===null||ct in t)return t;const e=Xt(t);if(e!==pr&&e!==gr)return t;var r=new Map,n=Kt(t),l=X(0),i=y,f=u=>{var a=y;j(i);var s=u();return j(a),s};return n&&r.set("length",X(t.length)),new Proxy(t,{defineProperty(u,a,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&Nr();var v=r.get(a);return v===void 0?(v=f(()=>X(s.value)),r.set(a,v)):R(v,f(()=>ft(s.value))),!0},deleteProperty(u,a){var s=r.get(a);if(s===void 0)a in u&&r.set(a,f(()=>X(q)));else{if(n&&typeof a=="string"){var v=r.get("length"),c=Number(a);Number.isInteger(c)&&c<v.v&&R(v,c)}R(s,q),we(l)}return!0},get(u,a,s){var _;if(a===ct)return t;var v=r.get(a),c=a in u;if(v===void 0&&(!c||(_=ut(u,a))!=null&&_.writable)&&(v=f(()=>X(ft(c?u[a]:q))),r.set(a,v)),v!==void 0){var o=g(v);return o===q?void 0:o}return Reflect.get(u,a,s)},getOwnPropertyDescriptor(u,a){var s=Reflect.getOwnPropertyDescriptor(u,a);if(s&&"value"in s){var v=r.get(a);v&&(s.value=g(v))}else if(s===void 0){var c=r.get(a),o=c==null?void 0:c.v;if(c!==void 0&&o!==q)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return s},has(u,a){var o;if(a===ct)return!0;var s=r.get(a),v=s!==void 0&&s.v!==q||Reflect.has(u,a);if(s!==void 0||x!==null&&(!v||(o=ut(u,a))!=null&&o.writable)){s===void 0&&(s=f(()=>X(v?ft(u[a]):q)),r.set(a,s));var c=g(s);if(c===q)return!1}return v},set(u,a,s,v){var k;var c=r.get(a),o=a in u;if(n&&a==="length")for(var _=s;_<c.v;_+=1){var d=r.get(_+"");d!==void 0?R(d,q):_ in u&&(d=f(()=>X(q)),r.set(_+"",d))}c===void 0?(!o||(k=ut(u,a))!=null&&k.writable)&&(c=f(()=>X(void 0)),R(c,f(()=>ft(s))),r.set(a,c)):(o=c.v!==q,R(c,f(()=>ft(s))));var h=Reflect.getOwnPropertyDescriptor(u,a);if(h!=null&&h.set&&h.set.call(v,s),!o){if(n&&typeof a=="string"){var b=r.get("length"),E=Number(a);Number.isInteger(E)&&E>=b.v&&R(b,E+1)}we(l)}return!0},ownKeys(u){g(l);var a=Reflect.ownKeys(u).filter(c=>{var o=r.get(c);return o===void 0||o.v!==q});for(var[s,v]of r)v.v!==q&&!(s in u)&&a.push(s);return a},setPrototypeOf(){Ir()}})}function we(t,e=1){R(t,t.v+e)}function ie(t){var e=U|Y,r=y!==null&&(y.f&U)!==0?y:null;return x===null||r!==null&&(r.f&L)!==0?e|=L:x.f|=De,{ctx:A,deps:null,effects:null,equals:Me,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??x}}function Le(t){const e=ie(t);return e.equals=qe,e}function Fe(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)tt(e[r])}}function Hr(t){for(var e=t.parent;e!==null;){if((e.f&U)===0)return e;e=e.parent}return null}function $e(t){var e,r=x;et(Hr(t));try{Fe(t),e=ir(t)}finally{et(r)}return e}function Be(t){var e=$e(t),r=(Q||(t.f&L)!==0)&&t.deps!==null?rt:D;$(t,r),t.equals(e)||(t.v=e,t.wv=rr())}const gt=new Map;function wt(t,e){var r={f:0,v:t,reactions:null,equals:Me,rv:0,wv:0};return r}function X(t,e){const r=wt(t);return Zr(r),r}function nt(t,e=!1){var n;const r=wt(t);return e||(r.equals=qe),mt&&A!==null&&A.l!==null&&((n=A.l).s??(n.s=[])).push(r),r}function R(t,e,r=!1){y!==null&&!W&&$t()&&(y.f&(U|Jt))!==0&&!(I!=null&&I.includes(t))&&Dr();let n=r?ft(e):e;return Yt(t,n)}function Yt(t,e){if(!t.equals(e)){var r=t.v;xt?gt.set(t,e):gt.set(t,r),t.v=e,(t.f&U)!==0&&((t.f&Y)!==0&&$e(t),$(t,(t.f&L)===0?D:rt)),t.wv=rr(),He(t,Y),$t()&&x!==null&&(x.f&D)!==0&&(x.f&(Z|vt))===0&&(F===null?Xr([t]):F.push(t))}return e}function He(t,e){var r=t.reactions;if(r!==null)for(var n=$t(),l=r.length,i=0;i<l;i++){var f=r[i],u=f.f;(u&Y)===0&&(!n&&f===x||($(f,e),(u&(D|L))!==0&&((u&U)!==0?He(f,rt):Ut(f))))}}let Ur=!1;var ye,Ue,Ve,We;function Vr(){if(ye===void 0){ye=window,Ue=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Ve=ut(e,"firstChild").get,We=ut(e,"nextSibling").get,pe(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),pe(r)&&(r.__t=void 0)}}function le(t=""){return document.createTextNode(t)}function Ot(t){return Ve.call(t)}function ae(t){return We.call(t)}function z(t,e){return Ot(t)}function st(t,e=1,r=!1){let n=t;for(;e--;)n=ae(n);return n}function Wr(t){t.textContent=""}function Ye(t){x===null&&y===null&&Rr(),y!==null&&(y.f&L)!==0&&x===null&&Sr(),xt&&Ar()}function Yr(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function _t(t,e,r,n=!0){var l=x,i={ctx:A,deps:null,nodes_start:null,nodes_end:null,f:t|Y,first:null,fn:e,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{Ht(i),i.f|=mr}catch(a){throw tt(i),a}else e!==null&&Ut(i);var f=r&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(De|Rt))===0;if(!f&&n&&(l!==null&&Yr(i,l),y!==null&&(y.f&U)!==0)){var u=y;(u.effects??(u.effects=[])).push(i)}return i}function je(t){const e=_t(Lt,null,!1);return $(e,D),e.teardown=t,e}function me(t){Ye();var e=x!==null&&(x.f&Z)!==0&&A!==null&&!A.m;if(e){var r=A;(r.e??(r.e=[])).push({fn:t,effect:x,reaction:y})}else{var n=ze(t);return n}}function jr(t){return Ye(),fe(t)}function zr(t){const e=_t(vt,t,!0);return(r={})=>new Promise(n=>{r.outro?Nt(e,()=>{tt(e),n(void 0)}):(tt(e),n(void 0))})}function ze(t){return _t(Ie,t,!1)}function Ge(t,e){var r=A,n={effect:null,ran:!1};r.l.r1.push(n),n.effect=fe(()=>{t(),!n.ran&&(n.ran=!0,R(r.l.r2,!0),lr(e))})}function Ke(){var t=A;fe(()=>{if(g(t.l.r2)){for(var e of t.l.r1){var r=e.effect;(r.f&D)!==0&&$(r,rt),dt(r)&&Ht(r),e.ran=!1}t.l.r2.v=!1}})}function fe(t){return _t(Lt,t,!0)}function kt(t,e=[],r=ie){const n=e.map(r);return se(()=>t(...n.map(g)))}function se(t,e=0){return _t(Lt|Jt|e,t,!0)}function yt(t,e=!0){return _t(Lt|Z,t,!0,e)}function Ze(t){var e=t.teardown;if(e!==null){const r=xt,n=y;xe(!0),j(null);try{e.call(null)}finally{xe(r),j(n)}}}function Xe(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;(r.f&vt)!==0?r.parent=null:tt(r,e),r=n}}function Gr(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Z)===0&&tt(e),e=r}}function tt(t,e=!0){var r=!1;if((e||(t.f&Er)!==0)&&t.nodes_start!==null){for(var n=t.nodes_start,l=t.nodes_end;n!==null;){var i=n===l?null:ae(n);n.remove(),n=i}r=!0}Xe(t,e&&!r),Pt(t,0),$(t,Ft);var f=t.transitions;if(f!==null)for(const a of f)a.stop();Ze(t);var u=t.parent;u!==null&&u.first!==null&&Je(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Je(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function Nt(t,e){var r=[];oe(t,r,!0),Qe(r,()=>{tt(t),e&&e()})}function Qe(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var l of t)l.out(n)}else e()}function oe(t,e,r){if((t.f&K)===0){if(t.f^=K,t.transitions!==null)for(const f of t.transitions)(f.is_global||r)&&e.push(f);for(var n=t.first;n!==null;){var l=n.next,i=(n.f&Qt)!==0||(n.f&Z)!==0;oe(n,e,i?r:!1),n=l}}}function It(t){tr(t,!0)}function tr(t,e){if((t.f&K)!==0){t.f^=K,(t.f&D)===0&&(t.f^=D),dt(t)&&($(t,Y),Ut(t));for(var r=t.first;r!==null;){var n=r.next,l=(r.f&Qt)!==0||(r.f&Z)!==0;tr(r,l?e:!1),r=n}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let Dt=[];function Kr(){var t=Dt;Dt=[],Vt(t)}function ue(t){Dt.length===0&&queueMicrotask(Kr),Dt.push(t)}let Tt=!1,jt=!1,Mt=null,it=!1,xt=!1;function xe(t){xt=t}let At=[];let y=null,W=!1;function j(t){y=t}let x=null;function et(t){x=t}let I=null;function Zr(t){y!==null&&y.f&Wt&&(I===null?I=[t]:I.push(t))}let N=null,P=0,F=null;function Xr(t){F=t}let er=1,qt=0,Q=!1;function rr(){return++er}function dt(t){var c;var e=t.f;if((e&Y)!==0)return!0;if((e&rt)!==0){var r=t.deps,n=(e&L)!==0;if(r!==null){var l,i,f=(e&Ct)!==0,u=n&&x!==null&&!Q,a=r.length;if(f||u){var s=t,v=s.parent;for(l=0;l<a;l++)i=r[l],(f||!((c=i==null?void 0:i.reactions)!=null&&c.includes(s)))&&(i.reactions??(i.reactions=[])).push(s);f&&(s.f^=Ct),u&&v!==null&&(v.f&L)===0&&(s.f^=L)}for(l=0;l<a;l++)if(i=r[l],dt(i)&&Be(i),i.wv>t.wv)return!0}(!n||x!==null&&!Q)&&$(t,D)}return!1}function Jr(t,e){for(var r=e;r!==null;){if((r.f&Rt)!==0)try{r.fn(t);return}catch{r.f^=Rt}r=r.parent}throw Tt=!1,t}function Qr(t){return(t.f&Ft)===0&&(t.parent===null||(t.parent.f&Rt)===0)}function Bt(t,e,r,n){if(Tt){if(r===null&&(Tt=!1),Qr(e))throw t;return}r!==null&&(Tt=!0);{Jr(t,e);return}}function nr(t,e,r=!0){var n=t.reactions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l];I!=null&&I.includes(t)||((i.f&U)!==0?nr(i,e,!1):e===i&&(r?$(i,Y):(i.f&D)!==0&&$(i,rt),Ut(i)))}}function ir(t){var _;var e=N,r=P,n=F,l=y,i=Q,f=I,u=A,a=W,s=t.f;N=null,P=0,F=null,Q=(s&L)!==0&&(W||!it||y===null),y=(s&(Z|vt))===0?t:null,I=null,ge(t.ctx),W=!1,qt++,t.f|=Wt;try{var v=(0,t.fn)(),c=t.deps;if(N!==null){var o;if(Pt(t,P),c!==null&&P>0)for(c.length=P+N.length,o=0;o<N.length;o++)c[P+o]=N[o];else t.deps=c=N;if(!Q)for(o=P;o<c.length;o++)((_=c[o]).reactions??(_.reactions=[])).push(t)}else c!==null&&P<c.length&&(Pt(t,P),c.length=P);if($t()&&F!==null&&!W&&c!==null&&(t.f&(U|rt|Y))===0)for(o=0;o<F.length;o++)nr(F[o],t);return l!==t&&(qt++,F!==null&&(n===null?n=F:n.push(...F))),v}finally{N=e,P=r,F=n,y=l,Q=i,I=f,ge(u),W=a,t.f^=Wt}}function tn(t,e){let r=e.reactions;if(r!==null){var n=dr.call(r,t);if(n!==-1){var l=r.length-1;l===0?r=e.reactions=null:(r[n]=r[l],r.pop())}}r===null&&(e.f&U)!==0&&(N===null||!N.includes(e))&&($(e,rt),(e.f&(L|Ct))===0&&(e.f^=Ct),Fe(e),Pt(e,0))}function Pt(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)tn(t,r[n])}function Ht(t){var e=t.f;if((e&Ft)===0){$(t,D);var r=x,n=A,l=it;x=t,it=!0;try{(e&Jt)!==0?Gr(t):Xe(t),Ze(t);var i=ir(t);t.teardown=typeof i=="function"?i:null,t.wv=er;var f=t.deps,u;he&&Mr&&t.f&Y}catch(a){Bt(a,t,r,n||t.ctx)}finally{it=l,x=r}}}function en(){try{Cr()}catch(t){if(Mt!==null)Bt(t,Mt,null);else throw t}}function rn(){var t=it;try{var e=0;for(it=!0;At.length>0;){e++>1e3&&en();var r=At,n=r.length;At=[];for(var l=0;l<n;l++){var i=ln(r[l]);nn(i)}gt.clear()}}finally{jt=!1,it=t,Mt=null}}function nn(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if((n.f&(Ft|K))===0)try{dt(n)&&(Ht(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Je(n):n.fn=null))}catch(l){Bt(l,n,null,n.ctx)}}}function Ut(t){jt||(jt=!0,queueMicrotask(rn));for(var e=Mt=t;e.parent!==null;){e=e.parent;var r=e.f;if((r&(vt|Z))!==0){if((r&D)===0)return;e.f^=D}}At.push(e)}function ln(t){for(var e=[],r=t;r!==null;){var n=r.f,l=(n&(Z|vt))!==0,i=l&&(n&D)!==0;if(!i&&(n&K)===0){if((n&Ie)!==0)e.push(r);else if(l)r.f^=D;else{var f=y;try{y=r,dt(r)&&Ht(r)}catch(s){Bt(s,r,null,r.ctx)}finally{y=f}}var u=r.first;if(u!==null){r=u;continue}}var a=r.parent;for(r=r.next;r===null&&a!==null;)r=a.next,a=a.parent}return e}function g(t){var e=t.f,r=(e&U)!==0;if(y!==null&&!W){if(!(I!=null&&I.includes(t))){var n=y.deps;t.rv<qt&&(t.rv=qt,N===null&&n!==null&&n[P]===t?P++:N===null?N=[t]:(!Q||!N.includes(t))&&N.push(t))}}else if(r&&t.deps===null&&t.effects===null){var l=t,i=l.parent;i!==null&&(i.f&L)===0&&(l.f^=L)}return r&&(l=t,dt(l)&&Be(l)),xt&&gt.has(t)?gt.get(t):t.v}function lr(t){var e=W;try{return W=!0,t()}finally{W=e}}const an=-7169;function $(t,e){t.f=t.f&an|e}function ar(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)zt(t);else if(!Array.isArray(t))for(let e in t){const r=t[e];typeof r=="object"&&r&&ct in r&&zt(r)}}}function zt(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{zt(t[n],e)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Ne(r);for(let l in n){const i=n[l].get;if(i)try{i.call(t)}catch{}}}}}const fn=["touchstart","touchmove"];function sn(t){return fn.includes(t)}function on(t){var e=y,r=x;j(null),et(null);try{return t()}finally{j(e),et(r)}}const un=new Set,Ee=new Set;function cn(t,e,r,n={}){function l(i){if(n.capture||pt.call(e,i),!i.cancelBubble)return on(()=>r==null?void 0:r.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?ue(()=>{e.addEventListener(t,l,n)}):e.addEventListener(t,l,n),l}function vn(t,e,r,n,l){var i={capture:n,passive:l},f=cn(t,e,r,i);(e===document.body||e===window||e===document)&&je(()=>{e.removeEventListener(t,f,i)})}function pt(t){var k;var e=this,r=e.ownerDocument,n=t.type,l=((k=t.composedPath)==null?void 0:k.call(t))||[],i=l[0]||t.target,f=0,u=t.__root;if(u){var a=l.indexOf(u);if(a!==-1&&(e===document||e===window)){t.__root=e;return}var s=l.indexOf(e);if(s===-1)return;a<=s&&(f=a)}if(i=l[f]||t.target,i!==e){hr(t,"currentTarget",{configurable:!0,get(){return i||r}});var v=y,c=x;j(null),et(null);try{for(var o,_=[];i!==null;){var d=i.assignedSlot||i.parentNode||i.host||null;try{var h=i["__"+n];if(h!=null&&(!i.disabled||t.target===i))if(Kt(h)){var[b,...E]=h;b.apply(i,[t,...E])}else h.call(i,t)}catch(S){o?_.push(S):o=S}if(t.cancelBubble||d===e||d===null)break;i=d}if(o){for(let S of _)queueMicrotask(()=>{throw S});throw o}}finally{t.__root=e,delete t.currentTarget,j(v),et(c)}}}function fr(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function ce(t,e){var r=x;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function sr(t,e){var r=(e&$r)!==0,n,l=!t.startsWith("<!>");return()=>{n===void 0&&(n=fr(l?t:"<!>"+t),n=Ot(n));var i=r||Ue?document.importNode(n,!0):n.cloneNode(!0);return ce(i,i),i}}function or(t,e,r="svg"){var n=!t.startsWith("<!>"),l=`<${r}>${n?t:"<!>"+t}</${r}>`,i;return()=>{if(!i){var f=fr(l),u=Ot(f);i=Ot(u)}var a=i.cloneNode(!0);return ce(a,a),a}}function be(t=""){{var e=le(t+"");return ce(e,e),e}}function ot(t,e){t!==null&&t.before(e)}function ke(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function _n(t,e){return dn(t,e)}const at=new Map;function dn(t,{target:e,anchor:r,props:n={},events:l,context:i,intro:f=!0}){Vr();var u=new Set,a=c=>{for(var o=0;o<c.length;o++){var _=c[o];if(!u.has(_)){u.add(_);var d=sn(_);e.addEventListener(_,pt,{passive:d});var h=at.get(_);h===void 0?(document.addEventListener(_,pt,{passive:d}),at.set(_,1)):at.set(_,h+1)}}};a(Zt(un)),Ee.add(a);var s=void 0,v=zr(()=>{var c=r??e.appendChild(le());return yt(()=>{if(i){re({});var o=A;o.c=i}l&&(n.$$events=l),s=t(c,n)||{},i&&ne()}),()=>{var d;for(var o of u){e.removeEventListener(o,pt);var _=at.get(o);--_===0?(document.removeEventListener(o,pt),at.delete(o)):at.set(o,_)}Ee.delete(a),c!==r&&((d=c.parentNode)==null||d.removeChild(c))}});return hn.set(s,v),s}let hn=new WeakMap;function pn(t,e,[r,n]=[0,0]){var l=t,i=null,f=null,u=q,a=r>0?Qt:0,s=!1;const v=(o,_=!0)=>{s=!0,c(_,o)},c=(o,_)=>{u!==(u=o)&&(u?(i?It(i):_&&(i=yt(()=>_(l))),f&&Nt(f,()=>{f=null})):(f?It(f):_&&(f=yt(()=>_(l,[r+1,n]))),i&&Nt(i,()=>{i=null})))};se(()=>{s=!1,e(v),s||c(null,null)},a)}let St=null;function gn(t,e){return e}function wn(t,e,r,n){for(var l=[],i=e.length,f=0;f<i;f++)oe(e[f].e,l,!0);var u=i>0&&l.length===0&&r!==null;if(u){var a=r.parentNode;Wr(a),a.append(r),n.clear(),J(t,e[0].prev,e[i-1].next)}Qe(l,()=>{for(var s=0;s<i;s++){var v=e[s];u||(n.delete(v.k),J(t,v.prev,v.next)),tt(v.e,!u)}})}function ur(t,e,r,n,l,i=null){var f=t,u={flags:e,items:new Map,first:null},a=(e&Pe)!==0;if(a){var s=t;f=s.appendChild(le())}var v=null,c=!1,o=Le(()=>{var _=r();return Kt(_)?_:_==null?[]:Zt(_)});se(()=>{var _=g(o),d=_.length;c&&d===0||(c=d===0,yn(_,u,f,l,e,n,r),i!==null&&(d===0?v?It(v):v=yt(()=>i(f)):v!==null&&Nt(v,()=>{v=null})),g(o))})}function yn(t,e,r,n,l,i,f){var V,Et,ve,_e;var u=(l&Pr)!==0,a=(l&(te|ee))!==0,s=t.length,v=e.items,c=e.first,o=c,_,d=null,h,b=[],E=[],k,S,p,m;if(u)for(m=0;m<s;m+=1)k=t[m],S=i(k,m),p=v.get(S),p!==void 0&&((V=p.a)==null||V.measure(),(h??(h=new Set)).add(p));for(m=0;m<s;m+=1){if(k=t[m],S=i(k,m),p=v.get(S),p===void 0){var B=o?o.e.nodes_start:r;d=xn(B,e,d,d===null?e.first:d.next,k,S,m,n,l,f),v.set(S,d),b=[],E=[],o=d.next;continue}if(a&&mn(p,k,m,l),(p.e.f&K)!==0&&(It(p.e),u&&((Et=p.a)==null||Et.unfix(),(h??(h=new Set)).delete(p))),p!==o){if(_!==void 0&&_.has(p)){if(b.length<E.length){var M=E[0],O;d=M.prev;var lt=b[0],T=b[b.length-1];for(O=0;O<b.length;O+=1)Te(b[O],M,r);for(O=0;O<E.length;O+=1)_.delete(E[O]);J(e,lt.prev,T.next),J(e,d,lt),J(e,T,M),o=M,d=T,m-=1,b=[],E=[]}else _.delete(p),Te(p,o,r),J(e,p.prev,p.next),J(e,p,d===null?e.first:d.next),J(e,d,p),d=p;continue}for(b=[],E=[];o!==null&&o.k!==S;)(o.e.f&K)===0&&(_??(_=new Set)).add(o),E.push(o),o=o.next;if(o===null)continue;p=o}b.push(p),d=p,o=p.next}if(o!==null||_!==void 0){for(var w=_===void 0?[]:Zt(_);o!==null;)(o.e.f&K)===0&&w.push(o),o=o.next;var C=w.length;if(C>0){var H=(l&Pe)!==0&&s===0?r:null;if(u){for(m=0;m<C;m+=1)(ve=w[m].a)==null||ve.measure();for(m=0;m<C;m+=1)(_e=w[m].a)==null||_e.fix()}wn(e,w,H,v)}}u&&ue(()=>{var de;if(h!==void 0)for(p of h)(de=p.a)==null||de.apply()}),x.first=e.first&&e.first.e,x.last=d&&d.e}function mn(t,e,r,n){(n&te)!==0&&Yt(t.v,e),(n&ee)!==0?Yt(t.i,r):t.i=r}function xn(t,e,r,n,l,i,f,u,a,s){var v=St,c=(a&te)!==0,o=(a&Lr)===0,_=c?o?nt(l):wt(l):l,d=(a&ee)===0?f:wt(f),h={i:d,v:_,k:i,a:null,e:null,prev:r,next:n};St=h;try{return h.e=yt(()=>u(t,_,d,s),Ur),h.e.prev=r&&r.e,h.e.next=n&&n.e,r===null?e.first=h:(r.next=h,r.e.next=h.e),n!==null&&(n.prev=h,n.e.prev=h.e),h}finally{St=v}}function Te(t,e,r){for(var n=t.next?t.next.e.nodes_start:r,l=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==n;){var f=ae(i);l.before(i),i=f}}function J(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function En(t,e){return t==null?null:String(t)}function Ae(t,e,r,n){var l=t.__style;if(l!==e){var i=En(e);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}return n}const bn=Symbol("is custom element"),kn=Symbol("is html");function Gt(t,e,r,n){var l=Tn(t);l[e]!==(l[e]=r)&&(e==="loading"&&(t[kr]=r),r==null?t.removeAttribute(e):typeof r!="string"&&An(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Tn(t){return t.__attributes??(t.__attributes={[bn]:t.nodeName.includes("-"),[kn]:t.namespaceURI===Br})}var Se=new Map;function An(t){var e=Se.get(t.nodeName);if(e)return e;Se.set(t.nodeName,e=[]);for(var r,n=t,l=Element.prototype;l!==n;){r=Ne(n);for(var i in r)r[i].set&&e.push(i);n=Xt(n)}return e}const Sn=()=>performance.now(),G={tick:t=>requestAnimationFrame(t),now:()=>Sn(),tasks:new Set};function cr(){const t=G.now();G.tasks.forEach(e=>{e.c(t)||(G.tasks.delete(e),e.f())}),G.tasks.size!==0&&G.tick(cr)}function Rn(t){let e;return G.tasks.size===0&&G.tick(cr),{promise:new Promise(r=>{G.tasks.add(e={c:t,f:r})}),abort(){G.tasks.delete(e)}}}function Cn(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Re(t){const e={},r=t.split(";");for(const n of r){const[l,i]=n.split(":");if(!l||i===void 0)break;const f=Cn(l.trim());e[f]=i.trim()}return e}const On=t=>t;function Nn(t,e,r){var n=St,l,i,f,u=null;n.a??(n.a={element:t,measure(){l=this.element.getBoundingClientRect()},apply(){if(f==null||f.abort(),i=this.element.getBoundingClientRect(),l.left!==i.left||l.right!==i.right||l.top!==i.top||l.bottom!==i.bottom){const a=e()(this.element,{from:l,to:i},r==null?void 0:r());f=vr(this.element,a,void 0,1,()=>{f==null||f.abort(),f=void 0})}},fix(){if(!t.getAnimations().length){var{position:a,width:s,height:v}=getComputedStyle(t);if(a!=="absolute"&&a!=="fixed"){var c=t.style;u={position:c.position,width:c.width,height:c.height,transform:c.transform},c.position="absolute",c.width=s,c.height=v;var o=t.getBoundingClientRect();if(l.left!==o.left||l.top!==o.top){var _=`translate(${l.left-o.left}px, ${l.top-o.top}px)`;c.transform=c.transform?`${c.transform} ${_}`:_}}}},unfix(){if(u){var a=t.style;a.position=u.position,a.width=u.width,a.height=u.height,a.transform=u.transform}}}),n.a.element=t}function vr(t,e,r,n,l){if(wr(e)){var i,f=!1;return ue(()=>{if(!f){var h=e({direction:"in"});i=vr(t,h,r,n,l)}}),{abort:()=>{f=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(!(e!=null&&e.duration))return l(),{abort:ht,deactivate:ht,reset:ht,t:()=>n};const{delay:u=0,css:a,tick:s,easing:v=On}=e;var c=[];if(s&&s(0,1),a){var o=Re(a(0,1));c.push(o,o)}var _=()=>1-n,d=t.animate(c,{duration:u});return d.onfinish=()=>{var h=1-n,b=n-h,E=e.duration*Math.abs(b),k=[];if(E>0){var S=!1;if(a)for(var p=Math.ceil(E/16.666666666666668),m=0;m<=p;m+=1){var B=h+b*v(m/p),M=Re(a(B,1-B));k.push(M),S||(S=M.overflow==="hidden")}S&&(t.style.overflow="hidden"),_=()=>{var O=d.currentTime;return h+b*v(O/E)},s&&Rn(()=>{if(d.playState!=="running")return!1;var O=_();return s(O,1-O),!0})}d=t.animate(k,{duration:E,fill:"forwards"}),d.onfinish=()=>{_=()=>n,s==null||s(n,1-n),l()}},{abort:()=>{d&&(d.cancel(),d.effect=null,d.onfinish=ht)},deactivate:()=>{l=ht},reset:()=>{},t:()=>_()}}function In(t=!1){const e=A,r=e.l.u;if(!r)return;let n=()=>ar(e.s);if(t){let l=0,i={};const f=ie(()=>{let u=!1;const a=e.s;for(const s in a)a[s]!==i[s]&&(i[s]=a[s],u=!0);return u&&l++,l});n=()=>g(f)}r.b.length&&jr(()=>{Ce(e,n),Vt(r.b)}),me(()=>{const l=lr(()=>r.m.map(yr));return()=>{for(const i of l)typeof i=="function"&&i()}}),r.a.length&&me(()=>{Ce(e,n),Vt(r.a)})}function Ce(t,e){if(t.l.s)for(const r of t.l.s)g(r);e()}let bt=!1;function Dn(t){var e=bt;try{return bt=!1,[t(),bt]}finally{bt=e}}function Mn(t,e,r,n){var d;var l=!mt||(r&Fr)!==0,i=!1,f;[f,i]=Dn(()=>t[e]);var u=ct in t||br in t,a=(((d=ut(t,e))==null?void 0:d.set)??(u&&e in t&&(h=>t[e]=h)))||void 0,s=n,v=!0,c=()=>(v&&(v=!1,s=n),s);f===void 0&&n!==void 0&&(a&&l&&Or(),f=c(),a&&a(f));var o;if(l)o=()=>{var h=t[e];return h===void 0?c():(v=!0,h)};else{var _=Le(()=>t[e]);_.f|=xr,o=()=>{var h=g(_);return h!==void 0&&(s=void 0),h===void 0?s:h}}return o}const qn="5";var Oe;typeof window<"u"&&((Oe=window.__svelte??(window.__svelte={})).v??(Oe.v=new Set)).add(qn);qr();function _r(t){const e=t-1;return e*e*e+1}function Pn(t,{from:e,to:r},n={}){var{delay:l=0,duration:i=B=>Math.sqrt(B)*120,easing:f=_r}=n,u=getComputedStyle(t),a=u.transform==="none"?"":u.transform,[s,v]=u.transformOrigin.split(" ").map(parseFloat);s/=t.clientWidth,v/=t.clientHeight;var c=Ln(t),o=t.clientWidth/r.width/c,_=t.clientHeight/r.height/c,d=e.left+e.width*s,h=e.top+e.height*v,b=r.left+r.width*s,E=r.top+r.height*v,k=(d-b)*o,S=(h-E)*_,p=e.width/r.width,m=e.height/r.height;return{delay:l,duration:typeof i=="function"?i(Math.sqrt(k*k+S*S)):i,easing:f,css:(B,M)=>{var O=M*k,lt=M*S,T=B+M*p,w=B+M*m;return`transform: ${a} translate(${O}px, ${lt}px) scale(${T}, ${w});`}}}function Ln(t){if("currentCSSZoom"in t)return t.currentCSSZoom;for(var e=t,r=1;e!==null;)r*=+getComputedStyle(e).zoom,e=e.parentElement;return r}var Fn=or('<circle r="8" fill="black"></circle>'),$n=or('<svg viewBox="0 0 100 100" class="die svelte-1wx4s1o"><rect width="90" height="90" x="5" y="5" rx="10" ry="10" fill="white" stroke="black" stroke-width="2"></rect><!></svg>');function Bn(t,e){re(e,!1);const r=nt();let n=Mn(e,"value",8,1);const l={1:[{cx:50,cy:50}],2:[{cx:25,cy:25},{cx:75,cy:75}],3:[{cx:25,cy:25},{cx:50,cy:50},{cx:75,cy:75}],4:[{cx:25,cy:25},{cx:75,cy:25},{cx:25,cy:75},{cx:75,cy:75}],5:[{cx:25,cy:25},{cx:75,cy:25},{cx:50,cy:50},{cx:25,cy:75},{cx:75,cy:75}],6:[{cx:25,cy:25},{cx:75,cy:25},{cx:25,cy:50},{cx:75,cy:50},{cx:25,cy:75},{cx:75,cy:75}]};Ge(()=>ar(n()),()=>{R(r,l[n()]||[])}),Ke();var i=$n(),f=st(z(i));ur(f,1,()=>g(r),gn,(u,a)=>{var s=Fn();kt(()=>{Gt(s,"cx",g(a).cx),Gt(s,"cy",g(a).cy)}),ot(u,s)}),ot(t,i),ne()}const Hn="/petals/assets/rose-Yh363hCx.png";var Un=sr('<div class="die-wrapper-outer svelte-q54n4k"><div class="die-wrapper-inner svelte-q54n4k"><!></div></div>'),Vn=sr('<main class="svelte-q54n4k"><h1 class="svelte-q54n4k">Petals Around the Roses</h1> <section class="rules svelte-q54n4k"><img alt="Rose" class="rules-image-absolute svelte-q54n4k"> <h2 class="svelte-q54n4k">The Rules</h2> <ul class="svelte-q54n4k"><li class="svelte-q54n4k">Rule 1: The name of the game is "<b>Petals Around the Roses</b>."</li> <li class="svelte-q54n4k">Rule 2: The name <i>is</i> significant.</li> <li class="svelte-q54n4k">Rule 3: The answer is always even (or zero).</li></ul></section> <div class="controls svelte-q54n4k"><button class="svelte-q54n4k"> </button> <div class="answer svelte-q54n4k">There are <span class="answer-box svelte-q54n4k"><!></span> petals around the roses.</div></div> <section class="dice-area svelte-q54n4k"></section></main>');function Wn(t,e){re(e,!1);const r=nt();let n=nt([]),l=nt(!1),i=nt("random"),f=nt(null);const u=7,a=2,s=400;function v(){R(n,[]),R(f,null),R(i,"random"),R(l,!1);let T=[];for(let w=1;w<=a;w++)for(let C=1;C<=u;C++)T.push({col:C,row:w});for(let w=0;w<5;w++){const C=Math.floor(Math.random()*T.length),H=T.splice(C,1)[0],V=Math.floor(Math.random()*6)+1,Et=Math.random()*90-45;R(n,[...g(n),{id:w,value:V,col:H.col,row:H.row,rotation:Et}])}}function c(T){let w=0;for(const C of T)C.value===3?w+=2:C.value===5&&(w+=4);return w}function o(){const C=[...g(n)].sort((H,V)=>H.col-V.col);R(n,C.map((H,V)=>({...H,col:2+V,row:1,rotation:0}))),R(i,"row")}function _(){g(i)==="random"?o():g(l)?v():(R(f,c(g(n))),R(l,!0))}v(),Ge(()=>(g(i),g(l)),()=>{R(r,g(i)==="random"?`Align
Dice`:g(l)?`Roll
Again`:`Show
Answer`)}),Ke(),In();var d=Vn(),h=st(z(d),2),b=z(h);Gt(b,"src",Hn);var E=st(h,2),k=z(E),S=z(k),p=st(k,2),m=st(z(p)),B=z(m);{var M=T=>{var w=be();kt(()=>ke(w,g(f))),ot(T,w)},O=T=>{var w=be(" ");ot(T,w)};pn(B,T=>{g(l)?T(M):T(O,!1)})}var lt=st(E,2);ur(lt,13,()=>g(n),T=>T.id,(T,w)=>{var C=Un(),H=z(C),V=z(H);Bn(V,{get value(){return g(w).value}}),kt(()=>{Ae(C,`grid-column-start: ${g(w).col??""}; grid-row-start: ${g(w).row??""};`),Ae(H,`transform: rotate(${g(w).rotation??""}deg);`)}),Nn(C,()=>Pn,()=>({duration:s,easing:_r})),ot(T,C)}),kt(()=>ke(S,g(r))),vn("click",k,_),ot(t,d),ne()}_n(Wn,{target:document.getElementById("app")});
