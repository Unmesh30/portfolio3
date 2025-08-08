(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function s(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=s(u);fetch(u.href,d)}})();function Cb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ou={exports:{}},Ur={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function jb(){if(b0)return Ur;b0=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function s(l,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var p in u)p!=="key"&&(d[p]=u[p])}else d=u;return u=d.ref,{$$typeof:n,type:l,key:f,ref:u!==void 0?u:null,props:d}}return Ur.Fragment=a,Ur.jsx=s,Ur.jsxs=s,Ur}var S0;function Rb(){return S0||(S0=1,Ou.exports=jb()),Ou.exports}var x=Rb(),Vu={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function Ob(){if(w0)return ct;w0=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function S(T){return T===null||typeof T!="object"?null:(T=b&&T[b]||T["@@iterator"],typeof T=="function"?T:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,H={};function P(T,U,Z){this.props=T,this.context=U,this.refs=H,this.updater=Z||C}P.prototype.isReactComponent={},P.prototype.setState=function(T,U){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,U,"setState")},P.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function Y(){}Y.prototype=P.prototype;function q(T,U,Z){this.props=T,this.context=U,this.refs=H,this.updater=Z||C}var k=q.prototype=new Y;k.constructor=q,O(k,P.prototype),k.isPureReactComponent=!0;var $=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},K=Object.prototype.hasOwnProperty;function X(T,U,Z,F,nt,mt){return Z=mt.ref,{$$typeof:n,type:T,key:U,ref:Z!==void 0?Z:null,props:mt}}function I(T,U){return X(T.type,U,void 0,void 0,void 0,T.props)}function gt(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function jt(T){var U={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(Z){return U[Z]})}var qt=/\/+/g;function kt(T,U){return typeof T=="object"&&T!==null&&T.key!=null?jt(""+T.key):U.toString(36)}function Pe(){}function je(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(Pe,Pe):(T.status="pending",T.then(function(U){T.status==="pending"&&(T.status="fulfilled",T.value=U)},function(U){T.status==="pending"&&(T.status="rejected",T.reason=U)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function Lt(T,U,Z,F,nt){var mt=typeof T;(mt==="undefined"||mt==="boolean")&&(T=null);var at=!1;if(T===null)at=!0;else switch(mt){case"bigint":case"string":case"number":at=!0;break;case"object":switch(T.$$typeof){case n:case a:at=!0;break;case y:return at=T._init,Lt(at(T._payload),U,Z,F,nt)}}if(at)return nt=nt(T),at=F===""?"."+kt(T,0):F,$(nt)?(Z="",at!=null&&(Z=at.replace(qt,"$&/")+"/"),Lt(nt,U,Z,"",function(se){return se})):nt!=null&&(gt(nt)&&(nt=I(nt,Z+(nt.key==null||T&&T.key===nt.key?"":(""+nt.key).replace(qt,"$&/")+"/")+at)),U.push(nt)),1;at=0;var Jt=F===""?".":F+":";if($(T))for(var bt=0;bt<T.length;bt++)F=T[bt],mt=Jt+kt(F,bt),at+=Lt(F,U,Z,mt,nt);else if(bt=S(T),typeof bt=="function")for(T=bt.call(T),bt=0;!(F=T.next()).done;)F=F.value,mt=Jt+kt(F,bt++),at+=Lt(F,U,Z,mt,nt);else if(mt==="object"){if(typeof T.then=="function")return Lt(je(T),U,Z,F,nt);throw U=String(T),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return at}function V(T,U,Z){if(T==null)return T;var F=[],nt=0;return Lt(T,F,"","",function(mt){return U.call(Z,mt,nt++)}),F}function G(T){if(T._status===-1){var U=T._result;U=U(),U.then(function(Z){(T._status===0||T._status===-1)&&(T._status=1,T._result=Z)},function(Z){(T._status===0||T._status===-1)&&(T._status=2,T._result=Z)}),T._status===-1&&(T._status=0,T._result=U)}if(T._status===1)return T._result.default;throw T._result}var W=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function ot(){}return ct.Children={map:V,forEach:function(T,U,Z){V(T,function(){U.apply(this,arguments)},Z)},count:function(T){var U=0;return V(T,function(){U++}),U},toArray:function(T){return V(T,function(U){return U})||[]},only:function(T){if(!gt(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},ct.Component=P,ct.Fragment=s,ct.Profiler=u,ct.PureComponent=q,ct.StrictMode=l,ct.Suspense=h,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ct.__COMPILER_RUNTIME={__proto__:null,c:function(T){return L.H.useMemoCache(T)}},ct.cache=function(T){return function(){return T.apply(null,arguments)}},ct.cloneElement=function(T,U,Z){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var F=O({},T.props),nt=T.key,mt=void 0;if(U!=null)for(at in U.ref!==void 0&&(mt=void 0),U.key!==void 0&&(nt=""+U.key),U)!K.call(U,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&U.ref===void 0||(F[at]=U[at]);var at=arguments.length-2;if(at===1)F.children=Z;else if(1<at){for(var Jt=Array(at),bt=0;bt<at;bt++)Jt[bt]=arguments[bt+2];F.children=Jt}return X(T.type,nt,void 0,void 0,mt,F)},ct.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},ct.createElement=function(T,U,Z){var F,nt={},mt=null;if(U!=null)for(F in U.key!==void 0&&(mt=""+U.key),U)K.call(U,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(nt[F]=U[F]);var at=arguments.length-2;if(at===1)nt.children=Z;else if(1<at){for(var Jt=Array(at),bt=0;bt<at;bt++)Jt[bt]=arguments[bt+2];nt.children=Jt}if(T&&T.defaultProps)for(F in at=T.defaultProps,at)nt[F]===void 0&&(nt[F]=at[F]);return X(T,mt,void 0,void 0,null,nt)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(T){return{$$typeof:p,render:T}},ct.isValidElement=gt,ct.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:G}},ct.memo=function(T,U){return{$$typeof:g,type:T,compare:U===void 0?null:U}},ct.startTransition=function(T){var U=L.T,Z={};L.T=Z;try{var F=T(),nt=L.S;nt!==null&&nt(Z,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ot,W)}catch(mt){W(mt)}finally{L.T=U}},ct.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ct.use=function(T){return L.H.use(T)},ct.useActionState=function(T,U,Z){return L.H.useActionState(T,U,Z)},ct.useCallback=function(T,U){return L.H.useCallback(T,U)},ct.useContext=function(T){return L.H.useContext(T)},ct.useDebugValue=function(){},ct.useDeferredValue=function(T,U){return L.H.useDeferredValue(T,U)},ct.useEffect=function(T,U,Z){var F=L.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(T,U)},ct.useId=function(){return L.H.useId()},ct.useImperativeHandle=function(T,U,Z){return L.H.useImperativeHandle(T,U,Z)},ct.useInsertionEffect=function(T,U){return L.H.useInsertionEffect(T,U)},ct.useLayoutEffect=function(T,U){return L.H.useLayoutEffect(T,U)},ct.useMemo=function(T,U){return L.H.useMemo(T,U)},ct.useOptimistic=function(T,U){return L.H.useOptimistic(T,U)},ct.useReducer=function(T,U,Z){return L.H.useReducer(T,U,Z)},ct.useRef=function(T){return L.H.useRef(T)},ct.useState=function(T){return L.H.useState(T)},ct.useSyncExternalStore=function(T,U,Z){return L.H.useSyncExternalStore(T,U,Z)},ct.useTransition=function(){return L.H.useTransition()},ct.version="19.1.1",ct}var T0;function Yf(){return T0||(T0=1,Vu.exports=Ob()),Vu.exports}var J=Yf();const En=Cb(J);var Nu={exports:{}},kr={},_u={exports:{}},Bu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function Vb(){return A0||(A0=1,function(n){function a(V,G){var W=V.length;V.push(G);t:for(;0<W;){var ot=W-1>>>1,T=V[ot];if(0<u(T,G))V[ot]=G,V[W]=T,W=ot;else break t}}function s(V){return V.length===0?null:V[0]}function l(V){if(V.length===0)return null;var G=V[0],W=V.pop();if(W!==G){V[0]=W;t:for(var ot=0,T=V.length,U=T>>>1;ot<U;){var Z=2*(ot+1)-1,F=V[Z],nt=Z+1,mt=V[nt];if(0>u(F,W))nt<T&&0>u(mt,F)?(V[ot]=mt,V[nt]=W,ot=nt):(V[ot]=F,V[Z]=W,ot=Z);else if(nt<T&&0>u(mt,W))V[ot]=mt,V[nt]=W,ot=nt;else break t}}return G}function u(V,G){var W=V.sortIndex-G.sortIndex;return W!==0?W:V.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var h=[],g=[],y=1,b=null,S=3,C=!1,O=!1,H=!1,P=!1,Y=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function $(V){for(var G=s(g);G!==null;){if(G.callback===null)l(g);else if(G.startTime<=V)l(g),G.sortIndex=G.expirationTime,a(h,G);else break;G=s(g)}}function L(V){if(H=!1,$(V),!O)if(s(h)!==null)O=!0,K||(K=!0,kt());else{var G=s(g);G!==null&&Lt(L,G.startTime-V)}}var K=!1,X=-1,I=5,gt=-1;function jt(){return P?!0:!(n.unstable_now()-gt<I)}function qt(){if(P=!1,K){var V=n.unstable_now();gt=V;var G=!0;try{t:{O=!1,H&&(H=!1,q(X),X=-1),C=!0;var W=S;try{e:{for($(V),b=s(h);b!==null&&!(b.expirationTime>V&&jt());){var ot=b.callback;if(typeof ot=="function"){b.callback=null,S=b.priorityLevel;var T=ot(b.expirationTime<=V);if(V=n.unstable_now(),typeof T=="function"){b.callback=T,$(V),G=!0;break e}b===s(h)&&l(h),$(V)}else l(h);b=s(h)}if(b!==null)G=!0;else{var U=s(g);U!==null&&Lt(L,U.startTime-V),G=!1}}break t}finally{b=null,S=W,C=!1}G=void 0}}finally{G?kt():K=!1}}}var kt;if(typeof k=="function")kt=function(){k(qt)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,je=Pe.port2;Pe.port1.onmessage=qt,kt=function(){je.postMessage(null)}}else kt=function(){Y(qt,0)};function Lt(V,G){X=Y(function(){V(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(V){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var W=S;S=G;try{return V()}finally{S=W}},n.unstable_requestPaint=function(){P=!0},n.unstable_runWithPriority=function(V,G){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var W=S;S=V;try{return G()}finally{S=W}},n.unstable_scheduleCallback=function(V,G,W){var ot=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ot+W:ot):W=ot,V){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=W+T,V={id:y++,callback:G,priorityLevel:V,startTime:W,expirationTime:T,sortIndex:-1},W>ot?(V.sortIndex=W,a(g,V),s(h)===null&&V===s(g)&&(H?(q(X),X=-1):H=!0,Lt(L,W-ot))):(V.sortIndex=T,a(h,V),O||C||(O=!0,K||(K=!0,kt()))),V},n.unstable_shouldYield=jt,n.unstable_wrapCallback=function(V){var G=S;return function(){var W=S;S=G;try{return V.apply(this,arguments)}finally{S=W}}}}(Bu)),Bu}var E0;function Nb(){return E0||(E0=1,_u.exports=Vb()),_u.exports}var Uu={exports:{}},ce={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function _b(){if(M0)return ce;M0=1;var n=Yf();function a(h){var g="https://react.dev/errors/"+h;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var l={d:{f:s,r:function(){throw Error(a(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(h,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:h,containerInfo:g,implementation:y}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,g){if(h==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ce.createPortal=function(h,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return d(h,g,null,y)},ce.flushSync=function(h){var g=f.T,y=l.p;try{if(f.T=null,l.p=2,h)return h()}finally{f.T=g,l.p=y,l.d.f()}},ce.preconnect=function(h,g){typeof h=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(h,g))},ce.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},ce.preinit=function(h,g){if(typeof h=="string"&&g&&typeof g.as=="string"){var y=g.as,b=p(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?l.d.S(h,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:C}):y==="script"&&l.d.X(h,{crossOrigin:b,integrity:S,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ce.preinitModule=function(h,g){if(typeof h=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=p(g.as,g.crossOrigin);l.d.M(h,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(h)},ce.preload=function(h,g){if(typeof h=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=p(y,g.crossOrigin);l.d.L(h,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ce.preloadModule=function(h,g){if(typeof h=="string")if(g){var y=p(g.as,g.crossOrigin);l.d.m(h,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(h)},ce.requestFormReset=function(h){l.d.r(h)},ce.unstable_batchedUpdates=function(h,g){return h(g)},ce.useFormState=function(h,g,y){return f.H.useFormState(h,g,y)},ce.useFormStatus=function(){return f.H.useHostTransitionStatus()},ce.version="19.1.1",ce}var z0;function Bb(){if(z0)return Uu.exports;z0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Uu.exports=_b(),Uu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function Ub(){if(D0)return kr;D0=1;var n=Nb(),a=Yf(),s=Bb();function l(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(d(t)!==t)throw Error(l(188))}function h(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(l(188));return e!==t?null:t}for(var i=t,r=e;;){var o=i.return;if(o===null)break;var c=o.alternate;if(c===null){if(r=o.return,r!==null){i=r;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===i)return p(o),t;if(c===r)return p(o),e;c=c.sibling}throw Error(l(188))}if(i.return!==r.return)i=o,r=c;else{for(var m=!1,v=o.child;v;){if(v===i){m=!0,i=o,r=c;break}if(v===r){m=!0,r=o,i=c;break}v=v.sibling}if(!m){for(v=c.child;v;){if(v===i){m=!0,i=c,r=o;break}if(v===r){m=!0,r=c,i=o;break}v=v.sibling}if(!m)throw Error(l(189))}}if(i.alternate!==r)throw Error(l(190))}if(i.tag!==3)throw Error(l(188));return i.stateNode.current===i?t:e}function g(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=g(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),k=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),gt=Symbol.for("react.activity"),jt=Symbol.for("react.memo_cache_sentinel"),qt=Symbol.iterator;function kt(t){return t===null||typeof t!="object"?null:(t=qt&&t[qt]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Symbol.for("react.client.reference");function je(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case P:return"Profiler";case H:return"StrictMode";case L:return"Suspense";case K:return"SuspenseList";case gt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case k:return(t.displayName||"Context")+".Provider";case q:return(t._context.displayName||"Context")+".Consumer";case $:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return e=t.displayName||null,e!==null?e:je(t.type)||"Memo";case I:e=t._payload,t=t._init;try{return je(t(e))}catch{}}return null}var Lt=Array.isArray,V=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ot=[],T=-1;function U(t){return{current:t}}function Z(t){0>T||(t.current=ot[T],ot[T]=null,T--)}function F(t,e){T++,ot[T]=t.current,t.current=e}var nt=U(null),mt=U(null),at=U(null),Jt=U(null);function bt(t,e){switch(F(at,e),F(mt,t),F(nt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Zp(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Zp(e),t=Fp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(nt),F(nt,t)}function se(){Z(nt),Z(mt),Z(at)}function ai(t){t.memoizedState!==null&&F(Jt,t);var e=nt.current,i=Fp(e,t.type);e!==i&&(F(mt,t),F(nt,i))}function on(t){mt.current===t&&(Z(nt),Z(mt)),Jt.current===t&&(Z(Jt),Or._currentValue=W)}var Re=Object.prototype.hasOwnProperty,xo=n.unstable_scheduleCallback,bo=n.unstable_cancelCallback,lv=n.unstable_shouldYield,ov=n.unstable_requestPaint,$e=n.unstable_now,cv=n.unstable_getCurrentPriorityLevel,Dd=n.unstable_ImmediatePriority,Cd=n.unstable_UserBlockingPriority,os=n.unstable_NormalPriority,uv=n.unstable_LowPriority,jd=n.unstable_IdlePriority,fv=n.log,dv=n.unstable_setDisableYieldValue,Ha=null,be=null;function Dn(t){if(typeof fv=="function"&&dv(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Ha,t)}catch{}}var Se=Math.clz32?Math.clz32:pv,mv=Math.log,hv=Math.LN2;function pv(t){return t>>>=0,t===0?32:31-(mv(t)/hv|0)|0}var cs=256,us=4194304;function ri(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function fs(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var o=0,c=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var v=r&134217727;return v!==0?(r=v&~c,r!==0?o=ri(r):(m&=v,m!==0?o=ri(m):i||(i=v&~t,i!==0&&(o=ri(i))))):(v=r&~c,v!==0?o=ri(v):m!==0?o=ri(m):i||(i=r&~t,i!==0&&(o=ri(i)))),o===0?0:e!==0&&e!==o&&(e&c)===0&&(c=o&-o,i=e&-e,c>=i||c===32&&(i&4194048)!==0)?e:o}function Ya(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function gv(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(){var t=cs;return cs<<=1,(cs&4194048)===0&&(cs=256),t}function Od(){var t=us;return us<<=1,(us&62914560)===0&&(us=4194304),t}function So(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function Ga(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function yv(t,e,i,r,o,c){var m=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var v=t.entanglements,w=t.expirationTimes,D=t.hiddenUpdates;for(i=m&~i;0<i;){var N=31-Se(i),B=1<<N;v[N]=0,w[N]=-1;var j=D[N];if(j!==null)for(D[N]=null,N=0;N<j.length;N++){var R=j[N];R!==null&&(R.lane&=-536870913)}i&=~B}r!==0&&Vd(t,r,0),c!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=c&~(m&~e))}function Vd(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Se(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&4194090}function Nd(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-Se(i),o=1<<r;o&e|t[r]&e&&(t[r]|=e),i&=~o}}function wo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function To(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function _d(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:h0(t.type))}function vv(t,e){var i=G.p;try{return G.p=t,e()}finally{G.p=i}}var Cn=Math.random().toString(36).slice(2),le="__reactFiber$"+Cn,he="__reactProps$"+Cn,Ri="__reactContainer$"+Cn,Ao="__reactEvents$"+Cn,xv="__reactListeners$"+Cn,bv="__reactHandles$"+Cn,Bd="__reactResources$"+Cn,qa="__reactMarker$"+Cn;function Eo(t){delete t[le],delete t[he],delete t[Ao],delete t[xv],delete t[bv]}function Oi(t){var e=t[le];if(e)return e;for(var i=t.parentNode;i;){if(e=i[Ri]||i[le]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=Ip(t);t!==null;){if(i=t[le])return i;t=Ip(t)}return e}t=i,i=t.parentNode}return null}function Vi(t){if(t=t[le]||t[Ri]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Xa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(l(33))}function Ni(t){var e=t[Bd];return e||(e=t[Bd]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function $t(t){t[qa]=!0}var Ud=new Set,kd={};function si(t,e){_i(t,e),_i(t+"Capture",e)}function _i(t,e){for(kd[t]=e,t=0;t<e.length;t++)Ud.add(e[t])}var Sv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ld={},Hd={};function wv(t){return Re.call(Hd,t)?!0:Re.call(Ld,t)?!1:Sv.test(t)?Hd[t]=!0:(Ld[t]=!0,!1)}function ds(t,e,i){if(wv(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+i)}}function ms(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+i)}}function cn(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,""+r)}}var Mo,Yd;function Bi(t){if(Mo===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Mo=e&&e[1]||"",Yd=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mo+t+Yd}var zo=!1;function Do(t,e){if(!t||zo)return"";zo=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(R){var j=R}Reflect.construct(t,[],B)}else{try{B.call()}catch(R){j=R}t.call(B.prototype)}}else{try{throw Error()}catch(R){j=R}(B=t())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(R){if(R&&j&&typeof R.stack=="string")return[R.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),m=c[0],v=c[1];if(m&&v){var w=m.split(`
`),D=v.split(`
`);for(o=r=0;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;for(;o<D.length&&!D[o].includes("DetermineComponentFrameRoot");)o++;if(r===w.length||o===D.length)for(r=w.length-1,o=D.length-1;1<=r&&0<=o&&w[r]!==D[o];)o--;for(;1<=r&&0<=o;r--,o--)if(w[r]!==D[o]){if(r!==1||o!==1)do if(r--,o--,0>o||w[r]!==D[o]){var N=`
`+w[r].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=r&&0<=o);break}}}finally{zo=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Bi(i):""}function Tv(t){switch(t.tag){case 26:case 27:case 5:return Bi(t.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 15:return Do(t.type,!1);case 11:return Do(t.type.render,!1);case 1:return Do(t.type,!0);case 31:return Bi("Activity");default:return""}}function Gd(t){try{var e="";do e+=Tv(t),t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function Oe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Av(t){var e=qd(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,c=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(m){r=""+m,c.call(this,m)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return r},setValue:function(m){r=""+m},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hs(t){t._valueTracker||(t._valueTracker=Av(t))}function Xd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=qd(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}function ps(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ev=/[\n"\\]/g;function Ve(t){return t.replace(Ev,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Co(t,e,i,r,o,c,m,v){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),e!=null?m==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Oe(e)):t.value!==""+Oe(e)&&(t.value=""+Oe(e)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),e!=null?jo(t,m,Oe(e)):i!=null?jo(t,m,Oe(i)):r!=null&&t.removeAttribute("value"),o==null&&c!=null&&(t.defaultChecked=!!c),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+Oe(v):t.removeAttribute("name")}function Pd(t,e,i,r,o,c,m,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;i=i!=null?""+Oe(i):"",e=e!=null?""+Oe(e):i,v||e===t.value||(t.value=e),t.defaultValue=e}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=v?t.checked:!!r,t.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m)}function jo(t,e,i){e==="number"&&ps(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Ui(t,e,i,r){if(t=t.options,e){e={};for(var o=0;o<i.length;o++)e["$"+i[o]]=!0;for(i=0;i<t.length;i++)o=e.hasOwnProperty("$"+t[i].value),t[i].selected!==o&&(t[i].selected=o),o&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Oe(i),e=null,o=0;o<t.length;o++){if(t[o].value===i){t[o].selected=!0,r&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function Kd(t,e,i){if(e!=null&&(e=""+Oe(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Oe(i):""}function Qd(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(l(92));if(Lt(r)){if(1<r.length)throw Error(l(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=Oe(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r)}function ki(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var Mv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zd(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||Mv.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function Fd(t,e,i){if(e!=null&&typeof e!="object")throw Error(l(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var o in e)r=e[o],e.hasOwnProperty(o)&&i[o]!==r&&Zd(t,o,r)}else for(var c in e)e.hasOwnProperty(c)&&Zd(t,c,e[c])}function Ro(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gs(t){return Dv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Oo=null;function Vo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Li=null,Hi=null;function Jd(t){var e=Vi(t);if(e&&(t=e.stateNode)){var i=t[he]||null;t:switch(t=e.stateNode,e.type){case"input":if(Co(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Ve(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var o=r[he]||null;if(!o)throw Error(l(90));Co(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&Xd(r)}break t;case"textarea":Kd(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&Ui(t,!!i.multiple,e,!1)}}}var No=!1;function $d(t,e,i){if(No)return t(e,i);No=!0;try{var r=t(e);return r}finally{if(No=!1,(Li!==null||Hi!==null)&&(el(),Li&&(e=Li,t=Hi,Hi=Li=null,Jd(e),t)))for(e=0;e<t.length;e++)Jd(t[e])}}function Pa(t,e){var i=t.stateNode;if(i===null)return null;var r=i[he]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(l(231,e,typeof i));return i}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_o=!1;if(un)try{var Ka={};Object.defineProperty(Ka,"passive",{get:function(){_o=!0}}),window.addEventListener("test",Ka,Ka),window.removeEventListener("test",Ka,Ka)}catch{_o=!1}var jn=null,Bo=null,ys=null;function Wd(){if(ys)return ys;var t,e=Bo,i=e.length,r,o="value"in jn?jn.value:jn.textContent,c=o.length;for(t=0;t<i&&e[t]===o[t];t++);var m=i-t;for(r=1;r<=m&&e[i-r]===o[c-r];r++);return ys=o.slice(t,1<r?1-r:void 0)}function vs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xs(){return!0}function Id(){return!1}function pe(t){function e(i,r,o,c,m){this._reactName=i,this._targetInst=o,this.type=r,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(i=t[v],this[v]=i?i(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?xs:Id,this.isPropagationStopped=Id,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=xs)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=xs)},persist:function(){},isPersistent:xs}),e}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=pe(li),Qa=y({},li,{view:0,detail:0}),Cv=pe(Qa),Uo,ko,Za,Ss=y({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ho,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Za&&(Za&&t.type==="mousemove"?(Uo=t.screenX-Za.screenX,ko=t.screenY-Za.screenY):ko=Uo=0,Za=t),Uo)},movementY:function(t){return"movementY"in t?t.movementY:ko}}),tm=pe(Ss),jv=y({},Ss,{dataTransfer:0}),Rv=pe(jv),Ov=y({},Qa,{relatedTarget:0}),Lo=pe(Ov),Vv=y({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=pe(Vv),_v=y({},li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bv=pe(_v),Uv=y({},li,{data:0}),em=pe(Uv),kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Hv[t])?!!e[t]:!1}function Ho(){return Yv}var Gv=y({},Qa,{key:function(t){if(t.key){var e=kv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ho,charCode:function(t){return t.type==="keypress"?vs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qv=pe(Gv),Xv=y({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nm=pe(Xv),Pv=y({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ho}),Kv=pe(Pv),Qv=y({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=pe(Qv),Fv=y({},Ss,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=pe(Fv),$v=y({},li,{newState:0,oldState:0}),Wv=pe($v),Iv=[9,13,27,32],Yo=un&&"CompositionEvent"in window,Fa=null;un&&"documentMode"in document&&(Fa=document.documentMode);var tx=un&&"TextEvent"in window&&!Fa,im=un&&(!Yo||Fa&&8<Fa&&11>=Fa),am=" ",rm=!1;function sm(t,e){switch(t){case"keyup":return Iv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yi=!1;function ex(t,e){switch(t){case"compositionend":return lm(e);case"keypress":return e.which!==32?null:(rm=!0,am);case"textInput":return t=e.data,t===am&&rm?null:t;default:return null}}function nx(t,e){if(Yi)return t==="compositionend"||!Yo&&sm(t,e)?(t=Wd(),ys=Bo=jn=null,Yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return im&&e.locale!=="ko"?null:e.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ix[t.type]:e==="textarea"}function cm(t,e,i,r){Li?Hi?Hi.push(r):Hi=[r]:Li=r,e=ll(e,"onChange"),0<e.length&&(i=new bs("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var Ja=null,$a=null;function ax(t){qp(t,0)}function ws(t){var e=Xa(t);if(Xd(e))return t}function um(t,e){if(t==="change")return e}var fm=!1;if(un){var Go;if(un){var qo="oninput"in document;if(!qo){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),qo=typeof dm.oninput=="function"}Go=qo}else Go=!1;fm=Go&&(!document.documentMode||9<document.documentMode)}function mm(){Ja&&(Ja.detachEvent("onpropertychange",hm),$a=Ja=null)}function hm(t){if(t.propertyName==="value"&&ws($a)){var e=[];cm(e,$a,t,Vo(t)),$d(ax,e)}}function rx(t,e,i){t==="focusin"?(mm(),Ja=e,$a=i,Ja.attachEvent("onpropertychange",hm)):t==="focusout"&&mm()}function sx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ws($a)}function lx(t,e){if(t==="click")return ws(e)}function ox(t,e){if(t==="input"||t==="change")return ws(e)}function cx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var we=typeof Object.is=="function"?Object.is:cx;function Wa(t,e){if(we(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var o=i[r];if(!Re.call(e,o)||!we(t[o],e[o]))return!1}return!0}function pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gm(t,e){var i=pm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=pm(i)}}function ym(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ym(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ps(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=ps(t.document)}return e}function Xo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var ux=un&&"documentMode"in document&&11>=document.documentMode,Gi=null,Po=null,Ia=null,Ko=!1;function xm(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ko||Gi==null||Gi!==ps(r)||(r=Gi,"selectionStart"in r&&Xo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ia&&Wa(Ia,r)||(Ia=r,r=ll(Po,"onSelect"),0<r.length&&(e=new bs("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=Gi)))}function oi(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var qi={animationend:oi("Animation","AnimationEnd"),animationiteration:oi("Animation","AnimationIteration"),animationstart:oi("Animation","AnimationStart"),transitionrun:oi("Transition","TransitionRun"),transitionstart:oi("Transition","TransitionStart"),transitioncancel:oi("Transition","TransitionCancel"),transitionend:oi("Transition","TransitionEnd")},Qo={},bm={};un&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function ci(t){if(Qo[t])return Qo[t];if(!qi[t])return t;var e=qi[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in bm)return Qo[t]=e[i];return t}var Sm=ci("animationend"),wm=ci("animationiteration"),Tm=ci("animationstart"),fx=ci("transitionrun"),dx=ci("transitionstart"),mx=ci("transitioncancel"),Am=ci("transitionend"),Em=new Map,Zo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zo.push("scrollEnd");function Ke(t,e){Em.set(t,e),si(e,[t])}var Mm=new WeakMap;function Ne(t,e){if(typeof t=="object"&&t!==null){var i=Mm.get(t);return i!==void 0?i:(e={value:t,source:e,stack:Gd(e)},Mm.set(t,e),e)}return{value:t,source:e,stack:Gd(e)}}var _e=[],Xi=0,Fo=0;function Ts(){for(var t=Xi,e=Fo=Xi=0;e<t;){var i=_e[e];_e[e++]=null;var r=_e[e];_e[e++]=null;var o=_e[e];_e[e++]=null;var c=_e[e];if(_e[e++]=null,r!==null&&o!==null){var m=r.pending;m===null?o.next=o:(o.next=m.next,m.next=o),r.pending=o}c!==0&&zm(i,o,c)}}function As(t,e,i,r){_e[Xi++]=t,_e[Xi++]=e,_e[Xi++]=i,_e[Xi++]=r,Fo|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Jo(t,e,i,r){return As(t,e,i,r),Es(t)}function Pi(t,e){return As(t,null,null,e),Es(t)}function zm(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var o=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(o=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,o&&e!==null&&(o=31-Se(i),t=c.hiddenUpdates,r=t[o],r===null?t[o]=[e]:r.push(e),e.lane=i|536870912),c):null}function Es(t){if(50<Ar)throw Ar=0,nu=null,Error(l(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ki={};function hx(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(t,e,i,r){return new hx(t,e,i,r)}function $o(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fn(t,e){var i=t.alternate;return i===null?(i=Te(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Dm(t,e){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ms(t,e,i,r,o,c){var m=0;if(r=t,typeof t=="function")$o(t)&&(m=1);else if(typeof t=="string")m=gb(t,i,nt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case gt:return t=Te(31,i,e,o),t.elementType=gt,t.lanes=c,t;case O:return ui(i.children,o,c,e);case H:m=8,o|=24;break;case P:return t=Te(12,i,e,o|2),t.elementType=P,t.lanes=c,t;case L:return t=Te(13,i,e,o),t.elementType=L,t.lanes=c,t;case K:return t=Te(19,i,e,o),t.elementType=K,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:case k:m=10;break t;case q:m=9;break t;case $:m=11;break t;case X:m=14;break t;case I:m=16,r=null;break t}m=29,i=Error(l(130,t===null?"null":typeof t,"")),r=null}return e=Te(m,i,e,o),e.elementType=t,e.type=r,e.lanes=c,e}function ui(t,e,i,r){return t=Te(7,t,r,e),t.lanes=i,t}function Wo(t,e,i){return t=Te(6,t,null,e),t.lanes=i,t}function Io(t,e,i){return e=Te(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Qi=[],Zi=0,zs=null,Ds=0,Be=[],Ue=0,fi=null,dn=1,mn="";function di(t,e){Qi[Zi++]=Ds,Qi[Zi++]=zs,zs=t,Ds=e}function Cm(t,e,i){Be[Ue++]=dn,Be[Ue++]=mn,Be[Ue++]=fi,fi=t;var r=dn;t=mn;var o=32-Se(r)-1;r&=~(1<<o),i+=1;var c=32-Se(e)+o;if(30<c){var m=o-o%5;c=(r&(1<<m)-1).toString(32),r>>=m,o-=m,dn=1<<32-Se(e)+o|i<<o|r,mn=c+t}else dn=1<<c|i<<o|r,mn=t}function tc(t){t.return!==null&&(di(t,1),Cm(t,1,0))}function ec(t){for(;t===zs;)zs=Qi[--Zi],Qi[Zi]=null,Ds=Qi[--Zi],Qi[Zi]=null;for(;t===fi;)fi=Be[--Ue],Be[Ue]=null,mn=Be[--Ue],Be[Ue]=null,dn=Be[--Ue],Be[Ue]=null}var de=null,_t=null,xt=!1,mi=null,We=!1,nc=Error(l(519));function hi(t){var e=Error(l(418,""));throw nr(Ne(e,t)),nc}function jm(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[le]=t,e[he]=r,i){case"dialog":pt("cancel",e),pt("close",e);break;case"iframe":case"object":case"embed":pt("load",e);break;case"video":case"audio":for(i=0;i<Mr.length;i++)pt(Mr[i],e);break;case"source":pt("error",e);break;case"img":case"image":case"link":pt("error",e),pt("load",e);break;case"details":pt("toggle",e);break;case"input":pt("invalid",e),Pd(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),hs(e);break;case"select":pt("invalid",e);break;case"textarea":pt("invalid",e),Qd(e,r.value,r.defaultValue,r.children),hs(e)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||Qp(e.textContent,i)?(r.popover!=null&&(pt("beforetoggle",e),pt("toggle",e)),r.onScroll!=null&&pt("scroll",e),r.onScrollEnd!=null&&pt("scrollend",e),r.onClick!=null&&(e.onclick=ol),e=!0):e=!1,e||hi(t)}function Rm(t){for(de=t.return;de;)switch(de.tag){case 5:case 13:We=!1;return;case 27:case 3:We=!0;return;default:de=de.return}}function tr(t){if(t!==de)return!1;if(!xt)return Rm(t),xt=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||vu(t.type,t.memoizedProps)),i=!i),i&&_t&&hi(t),Rm(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(i=t.data,i==="/$"){if(e===0){_t=Ze(t.nextSibling);break t}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++;t=t.nextSibling}_t=null}}else e===27?(e=_t,Kn(t.type)?(t=wu,wu=null,_t=t):_t=e):_t=de?Ze(t.stateNode.nextSibling):null;return!0}function er(){_t=de=null,xt=!1}function Om(){var t=mi;return t!==null&&(ve===null?ve=t:ve.push.apply(ve,t),mi=null),t}function nr(t){mi===null?mi=[t]:mi.push(t)}var ic=U(null),pi=null,hn=null;function Rn(t,e,i){F(ic,e._currentValue),e._currentValue=i}function pn(t){t._currentValue=ic.current,Z(ic)}function ac(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function rc(t,e,i,r){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){var m=o.child;c=c.firstContext;t:for(;c!==null;){var v=c;c=o;for(var w=0;w<e.length;w++)if(v.context===e[w]){c.lanes|=i,v=c.alternate,v!==null&&(v.lanes|=i),ac(c.return,i,t),r||(m=null);break t}c=v.next}}else if(o.tag===18){if(m=o.return,m===null)throw Error(l(341));m.lanes|=i,c=m.alternate,c!==null&&(c.lanes|=i),ac(m,i,t),m=null}else m=o.child;if(m!==null)m.return=o;else for(m=o;m!==null;){if(m===t){m=null;break}if(o=m.sibling,o!==null){o.return=m.return,m=o;break}m=m.return}o=m}}function ir(t,e,i,r){t=null;for(var o=e,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var m=o.alternate;if(m===null)throw Error(l(387));if(m=m.memoizedProps,m!==null){var v=o.type;we(o.pendingProps.value,m.value)||(t!==null?t.push(v):t=[v])}}else if(o===Jt.current){if(m=o.alternate,m===null)throw Error(l(387));m.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(Or):t=[Or])}o=o.return}t!==null&&rc(e,t,i,r),e.flags|=262144}function Cs(t){for(t=t.firstContext;t!==null;){if(!we(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gi(t){pi=t,hn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function oe(t){return Vm(pi,t)}function js(t,e){return pi===null&&gi(t),Vm(t,e)}function Vm(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},hn===null){if(t===null)throw Error(l(308));hn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else hn=hn.next=e;return i}var px=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},gx=n.unstable_scheduleCallback,yx=n.unstable_NormalPriority,Zt={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sc(){return{controller:new px,data:new Map,refCount:0}}function ar(t){t.refCount--,t.refCount===0&&gx(yx,function(){t.controller.abort()})}var rr=null,lc=0,Fi=0,Ji=null;function vx(t,e){if(rr===null){var i=rr=[];lc=0,Fi=cu(),Ji={status:"pending",value:void 0,then:function(r){i.push(r)}}}return lc++,e.then(Nm,Nm),e}function Nm(){if(--lc===0&&rr!==null){Ji!==null&&(Ji.status="fulfilled");var t=rr;rr=null,Fi=0,Ji=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function xx(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(o){i.push(o)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var o=0;o<i.length;o++)(0,i[o])(e)},function(o){for(r.status="rejected",r.reason=o,o=0;o<i.length;o++)(0,i[o])(void 0)}),r}var _m=V.S;V.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&vx(t,e),_m!==null&&_m(t,e)};var yi=U(null);function oc(){var t=yi.current;return t!==null?t:Dt.pooledCache}function Rs(t,e){e===null?F(yi,yi.current):F(yi,e.pool)}function Bm(){var t=oc();return t===null?null:{parent:Zt._currentValue,pool:t}}var sr=Error(l(460)),Um=Error(l(474)),Os=Error(l(542)),cc={then:function(){}};function km(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Vs(){}function Lm(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(Vs,Vs),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ym(t),t;default:if(typeof e.status=="string")e.then(Vs,Vs);else{if(t=Dt,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=r}},function(r){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ym(t),t}throw lr=e,sr}}var lr=null;function Hm(){if(lr===null)throw Error(l(459));var t=lr;return lr=null,t}function Ym(t){if(t===sr||t===Os)throw Error(l(483))}var On=!1;function uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Vn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(wt&2)!==0){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,e=Es(t),zm(t,null,i),e}return As(t,r,e,i),Es(t)}function or(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Nd(t,i)}}function dc(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var o=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var m={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?o=c=m:c=c.next=m,i=i.next}while(i!==null);c===null?o=c=e:c=c.next=e}else o=c=e;i={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var mc=!1;function cr(){if(mc){var t=Ji;if(t!==null)throw t}}function ur(t,e,i,r){mc=!1;var o=t.updateQueue;On=!1;var c=o.firstBaseUpdate,m=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var w=v,D=w.next;w.next=null,m===null?c=D:m.next=D,m=w;var N=t.alternate;N!==null&&(N=N.updateQueue,v=N.lastBaseUpdate,v!==m&&(v===null?N.firstBaseUpdate=D:v.next=D,N.lastBaseUpdate=w))}if(c!==null){var B=o.baseState;m=0,N=D=w=null,v=c;do{var j=v.lane&-536870913,R=j!==v.lane;if(R?(yt&j)===j:(r&j)===j){j!==0&&j===Fi&&(mc=!0),N!==null&&(N=N.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var st=t,it=v;j=e;var Mt=i;switch(it.tag){case 1:if(st=it.payload,typeof st=="function"){B=st.call(Mt,B,j);break t}B=st;break t;case 3:st.flags=st.flags&-65537|128;case 0:if(st=it.payload,j=typeof st=="function"?st.call(Mt,B,j):st,j==null)break t;B=y({},B,j);break t;case 2:On=!0}}j=v.callback,j!==null&&(t.flags|=64,R&&(t.flags|=8192),R=o.callbacks,R===null?o.callbacks=[j]:R.push(j))}else R={lane:j,tag:v.tag,payload:v.payload,callback:v.callback,next:null},N===null?(D=N=R,w=B):N=N.next=R,m|=j;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;R=v,v=R.next,R.next=null,o.lastBaseUpdate=R,o.shared.pending=null}}while(!0);N===null&&(w=B),o.baseState=w,o.firstBaseUpdate=D,o.lastBaseUpdate=N,c===null&&(o.shared.lanes=0),Gn|=m,t.lanes=m,t.memoizedState=B}}function Gm(t,e){if(typeof t!="function")throw Error(l(191,t));t.call(e)}function qm(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Gm(i[t],e)}var $i=U(null),Ns=U(0);function Xm(t,e){t=wn,F(Ns,t),F($i,e),wn=t|e.baseLanes}function hc(){F(Ns,wn),F($i,$i.current)}function pc(){wn=Ns.current,Z($i),Z(Ns)}var _n=0,ft=null,At=null,Xt=null,_s=!1,Wi=!1,vi=!1,Bs=0,fr=0,Ii=null,bx=0;function Ht(){throw Error(l(321))}function gc(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!we(t[i],e[i]))return!1;return!0}function yc(t,e,i,r,o,c){return _n=c,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,V.H=t===null||t.memoizedState===null?zh:Dh,vi=!1,c=i(r,o),vi=!1,Wi&&(c=Km(e,i,r,o)),Pm(t),c}function Pm(t){V.H=Gs;var e=At!==null&&At.next!==null;if(_n=0,Xt=At=ft=null,_s=!1,fr=0,Ii=null,e)throw Error(l(300));t===null||Wt||(t=t.dependencies,t!==null&&Cs(t)&&(Wt=!0))}function Km(t,e,i,r){ft=t;var o=0;do{if(Wi&&(Ii=null),fr=0,Wi=!1,25<=o)throw Error(l(301));if(o+=1,Xt=At=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}V.H=zx,c=e(i,r)}while(Wi);return c}function Sx(){var t=V.H,e=t.useState()[0];return e=typeof e.then=="function"?dr(e):e,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(ft.flags|=1024),e}function vc(){var t=Bs!==0;return Bs=0,t}function xc(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function bc(t){if(_s){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}_s=!1}_n=0,Xt=At=ft=null,Wi=!1,fr=Bs=0,Ii=null}function ge(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?ft.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Pt(){if(At===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Xt===null?ft.memoizedState:Xt.next;if(e!==null)Xt=e,At=t;else{if(t===null)throw ft.alternate===null?Error(l(467)):Error(l(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Xt===null?ft.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function Sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dr(t){var e=fr;return fr+=1,Ii===null&&(Ii=[]),t=Lm(Ii,t,e),e=ft,(Xt===null?e.memoizedState:Xt.next)===null&&(e=e.alternate,V.H=e===null||e.memoizedState===null?zh:Dh),t}function Us(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return dr(t);if(t.$$typeof===k)return oe(t)}throw Error(l(438,String(t)))}function wc(t){var e=null,i=ft.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=ft.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=Sc(),ft.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=jt;return e.index++,i}function gn(t,e){return typeof e=="function"?e(t):e}function ks(t){var e=Pt();return Tc(e,At,t)}function Tc(t,e,i){var r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=i;var o=t.baseQueue,c=r.pending;if(c!==null){if(o!==null){var m=o.next;o.next=c.next,c.next=m}e.baseQueue=o=c,r.pending=null}if(c=t.baseState,o===null)t.memoizedState=c;else{e=o.next;var v=m=null,w=null,D=e,N=!1;do{var B=D.lane&-536870913;if(B!==D.lane?(yt&B)===B:(_n&B)===B){var j=D.revertLane;if(j===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),B===Fi&&(N=!0);else if((_n&j)===j){D=D.next,j===Fi&&(N=!0);continue}else B={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},w===null?(v=w=B,m=c):w=w.next=B,ft.lanes|=j,Gn|=j;B=D.action,vi&&i(c,B),c=D.hasEagerState?D.eagerState:i(c,B)}else j={lane:B,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},w===null?(v=w=j,m=c):w=w.next=j,ft.lanes|=B,Gn|=B;D=D.next}while(D!==null&&D!==e);if(w===null?m=c:w.next=v,!we(c,t.memoizedState)&&(Wt=!0,N&&(i=Ji,i!==null)))throw i;t.memoizedState=c,t.baseState=m,t.baseQueue=w,r.lastRenderedState=c}return o===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Ac(t){var e=Pt(),i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=t;var r=i.dispatch,o=i.pending,c=e.memoizedState;if(o!==null){i.pending=null;var m=o=o.next;do c=t(c,m.action),m=m.next;while(m!==o);we(c,e.memoizedState)||(Wt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),i.lastRenderedState=c}return[c,r]}function Qm(t,e,i){var r=ft,o=Pt(),c=xt;if(c){if(i===void 0)throw Error(l(407));i=i()}else i=e();var m=!we((At||o).memoizedState,i);m&&(o.memoizedState=i,Wt=!0),o=o.queue;var v=Jm.bind(null,r,o,t);if(mr(2048,8,v,[t]),o.getSnapshot!==e||m||Xt!==null&&Xt.memoizedState.tag&1){if(r.flags|=2048,ta(9,Ls(),Fm.bind(null,r,o,i,e),null),Dt===null)throw Error(l(349));c||(_n&124)!==0||Zm(r,e,i)}return i}function Zm(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=ft.updateQueue,e===null?(e=Sc(),ft.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Fm(t,e,i,r){e.value=i,e.getSnapshot=r,$m(e)&&Wm(t)}function Jm(t,e,i){return i(function(){$m(e)&&Wm(t)})}function $m(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!we(t,i)}catch{return!0}}function Wm(t){var e=Pi(t,2);e!==null&&De(e,t,2)}function Ec(t){var e=ge();if(typeof t=="function"){var i=t;if(t=i(),vi){Dn(!0);try{i()}finally{Dn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:t},e}function Im(t,e,i,r){return t.baseState=i,Tc(t,At,typeof r=="function"?r:gn)}function wx(t,e,i,r,o){if(Ys(t))throw Error(l(485));if(t=e.action,t!==null){var c={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};V.T!==null?i(!0):c.isTransition=!1,r(c),i=e.pending,i===null?(c.next=e.pending=c,th(e,c)):(c.next=i.next,e.pending=i.next=c)}}function th(t,e){var i=e.action,r=e.payload,o=t.state;if(e.isTransition){var c=V.T,m={};V.T=m;try{var v=i(o,r),w=V.S;w!==null&&w(m,v),eh(t,e,v)}catch(D){Mc(t,e,D)}finally{V.T=c}}else try{c=i(o,r),eh(t,e,c)}catch(D){Mc(t,e,D)}}function eh(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){nh(t,e,r)},function(r){return Mc(t,e,r)}):nh(t,e,i)}function nh(t,e,i){e.status="fulfilled",e.value=i,ih(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,th(t,i)))}function Mc(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,ih(e),e=e.next;while(e!==r)}t.action=null}function ih(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ah(t,e){return e}function rh(t,e){if(xt){var i=Dt.formState;if(i!==null){t:{var r=ft;if(xt){if(_t){e:{for(var o=_t,c=We;o.nodeType!==8;){if(!c){o=null;break e}if(o=Ze(o.nextSibling),o===null){o=null;break e}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){_t=Ze(o.nextSibling),r=o.data==="F!";break t}}hi(r)}r=!1}r&&(e=i[0])}}return i=ge(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ah,lastRenderedState:e},i.queue=r,i=Ah.bind(null,ft,r),r.dispatch=i,r=Ec(!1),c=Rc.bind(null,ft,!1,r.queue),r=ge(),o={state:e,dispatch:null,action:t,pending:null},r.queue=o,i=wx.bind(null,ft,o,c,i),o.dispatch=i,r.memoizedState=t,[e,i,!1]}function sh(t){var e=Pt();return lh(e,At,t)}function lh(t,e,i){if(e=Tc(t,e,ah)[0],t=ks(gn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=dr(e)}catch(m){throw m===sr?Os:m}else r=e;e=Pt();var o=e.queue,c=o.dispatch;return i!==e.memoizedState&&(ft.flags|=2048,ta(9,Ls(),Tx.bind(null,o,i),null)),[r,c,t]}function Tx(t,e){t.action=e}function oh(t){var e=Pt(),i=At;if(i!==null)return lh(e,i,t);Pt(),e=e.memoizedState,i=Pt();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function ta(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=ft.updateQueue,e===null&&(e=Sc(),ft.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function Ls(){return{destroy:void 0,resource:void 0}}function ch(){return Pt().memoizedState}function Hs(t,e,i,r){var o=ge();r=r===void 0?null:r,ft.flags|=t,o.memoizedState=ta(1|e,Ls(),i,r)}function mr(t,e,i,r){var o=Pt();r=r===void 0?null:r;var c=o.memoizedState.inst;At!==null&&r!==null&&gc(r,At.memoizedState.deps)?o.memoizedState=ta(e,c,i,r):(ft.flags|=t,o.memoizedState=ta(1|e,c,i,r))}function uh(t,e){Hs(8390656,8,t,e)}function fh(t,e){mr(2048,8,t,e)}function dh(t,e){return mr(4,2,t,e)}function mh(t,e){return mr(4,4,t,e)}function hh(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ph(t,e,i){i=i!=null?i.concat([t]):null,mr(4,4,hh.bind(null,e,t),i)}function zc(){}function gh(t,e){var i=Pt();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&gc(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function yh(t,e){var i=Pt();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&gc(e,r[1]))return r[0];if(r=t(),vi){Dn(!0);try{t()}finally{Dn(!1)}}return i.memoizedState=[r,e],r}function Dc(t,e,i){return i===void 0||(_n&1073741824)!==0?t.memoizedState=e:(t.memoizedState=i,t=bp(),ft.lanes|=t,Gn|=t,i)}function vh(t,e,i,r){return we(i,e)?i:$i.current!==null?(t=Dc(t,i,r),we(t,e)||(Wt=!0),t):(_n&42)===0?(Wt=!0,t.memoizedState=i):(t=bp(),ft.lanes|=t,Gn|=t,e)}function xh(t,e,i,r,o){var c=G.p;G.p=c!==0&&8>c?c:8;var m=V.T,v={};V.T=v,Rc(t,!1,e,i);try{var w=o(),D=V.S;if(D!==null&&D(v,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var N=xx(w,r);hr(t,e,N,ze(t))}else hr(t,e,r,ze(t))}catch(B){hr(t,e,{then:function(){},status:"rejected",reason:B},ze())}finally{G.p=c,V.T=m}}function Ax(){}function Cc(t,e,i,r){if(t.tag!==5)throw Error(l(476));var o=bh(t).queue;xh(t,o,e,W,i===null?Ax:function(){return Sh(t),i(r)})}function bh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:W},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Sh(t){var e=bh(t).next.queue;hr(t,e,{},ze())}function jc(){return oe(Or)}function wh(){return Pt().memoizedState}function Th(){return Pt().memoizedState}function Ex(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=ze();t=Vn(i);var r=Nn(e,t,i);r!==null&&(De(r,e,i),or(r,e,i)),e={cache:sc()},t.payload=e;return}e=e.return}}function Mx(t,e,i){var r=ze();i={lane:r,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},Ys(t)?Eh(e,i):(i=Jo(t,e,i,r),i!==null&&(De(i,t,r),Mh(i,e,r)))}function Ah(t,e,i){var r=ze();hr(t,e,i,r)}function hr(t,e,i,r){var o={lane:r,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(Ys(t))Eh(e,o);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var m=e.lastRenderedState,v=c(m,i);if(o.hasEagerState=!0,o.eagerState=v,we(v,m))return As(t,e,o,0),Dt===null&&Ts(),!1}catch{}finally{}if(i=Jo(t,e,o,r),i!==null)return De(i,t,r),Mh(i,e,r),!0}return!1}function Rc(t,e,i,r){if(r={lane:2,revertLane:cu(),action:r,hasEagerState:!1,eagerState:null,next:null},Ys(t)){if(e)throw Error(l(479))}else e=Jo(t,i,r,2),e!==null&&De(e,t,2)}function Ys(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Eh(t,e){Wi=_s=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Mh(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Nd(t,i)}}var Gs={readContext:oe,use:Us,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useLayoutEffect:Ht,useInsertionEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useSyncExternalStore:Ht,useId:Ht,useHostTransitionStatus:Ht,useFormState:Ht,useActionState:Ht,useOptimistic:Ht,useMemoCache:Ht,useCacheRefresh:Ht},zh={readContext:oe,use:Us,useCallback:function(t,e){return ge().memoizedState=[t,e===void 0?null:e],t},useContext:oe,useEffect:uh,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,Hs(4194308,4,hh.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Hs(4194308,4,t,e)},useInsertionEffect:function(t,e){Hs(4,2,t,e)},useMemo:function(t,e){var i=ge();e=e===void 0?null:e;var r=t();if(vi){Dn(!0);try{t()}finally{Dn(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=ge();if(i!==void 0){var o=i(e);if(vi){Dn(!0);try{i(e)}finally{Dn(!1)}}}else o=e;return r.memoizedState=r.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},r.queue=t,t=t.dispatch=Mx.bind(null,ft,t),[r.memoizedState,t]},useRef:function(t){var e=ge();return t={current:t},e.memoizedState=t},useState:function(t){t=Ec(t);var e=t.queue,i=Ah.bind(null,ft,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:zc,useDeferredValue:function(t,e){var i=ge();return Dc(i,t,e)},useTransition:function(){var t=Ec(!1);return t=xh.bind(null,ft,t.queue,!0,!1),ge().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=ft,o=ge();if(xt){if(i===void 0)throw Error(l(407));i=i()}else{if(i=e(),Dt===null)throw Error(l(349));(yt&124)!==0||Zm(r,e,i)}o.memoizedState=i;var c={value:i,getSnapshot:e};return o.queue=c,uh(Jm.bind(null,r,c,t),[t]),r.flags|=2048,ta(9,Ls(),Fm.bind(null,r,c,i,e),null),i},useId:function(){var t=ge(),e=Dt.identifierPrefix;if(xt){var i=mn,r=dn;i=(r&~(1<<32-Se(r)-1)).toString(32)+i,e="«"+e+"R"+i,i=Bs++,0<i&&(e+="H"+i.toString(32)),e+="»"}else i=bx++,e="«"+e+"r"+i.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:jc,useFormState:rh,useActionState:rh,useOptimistic:function(t){var e=ge();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Rc.bind(null,ft,!0,i),i.dispatch=e,[t,e]},useMemoCache:wc,useCacheRefresh:function(){return ge().memoizedState=Ex.bind(null,ft)}},Dh={readContext:oe,use:Us,useCallback:gh,useContext:oe,useEffect:fh,useImperativeHandle:ph,useInsertionEffect:dh,useLayoutEffect:mh,useMemo:yh,useReducer:ks,useRef:ch,useState:function(){return ks(gn)},useDebugValue:zc,useDeferredValue:function(t,e){var i=Pt();return vh(i,At.memoizedState,t,e)},useTransition:function(){var t=ks(gn)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:dr(t),e]},useSyncExternalStore:Qm,useId:wh,useHostTransitionStatus:jc,useFormState:sh,useActionState:sh,useOptimistic:function(t,e){var i=Pt();return Im(i,At,t,e)},useMemoCache:wc,useCacheRefresh:Th},zx={readContext:oe,use:Us,useCallback:gh,useContext:oe,useEffect:fh,useImperativeHandle:ph,useInsertionEffect:dh,useLayoutEffect:mh,useMemo:yh,useReducer:Ac,useRef:ch,useState:function(){return Ac(gn)},useDebugValue:zc,useDeferredValue:function(t,e){var i=Pt();return At===null?Dc(i,t,e):vh(i,At.memoizedState,t,e)},useTransition:function(){var t=Ac(gn)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:dr(t),e]},useSyncExternalStore:Qm,useId:wh,useHostTransitionStatus:jc,useFormState:oh,useActionState:oh,useOptimistic:function(t,e){var i=Pt();return At!==null?Im(i,At,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:wc,useCacheRefresh:Th},ea=null,pr=0;function qs(t){var e=pr;return pr+=1,ea===null&&(ea=[]),Lm(ea,t,e)}function gr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Xs(t,e){throw e.$$typeof===b?Error(l(525)):(t=Object.prototype.toString.call(e),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ch(t){var e=t._init;return e(t._payload)}function jh(t){function e(M,A){if(t){var z=M.deletions;z===null?(M.deletions=[A],M.flags|=16):z.push(A)}}function i(M,A){if(!t)return null;for(;A!==null;)e(M,A),A=A.sibling;return null}function r(M){for(var A=new Map;M!==null;)M.key!==null?A.set(M.key,M):A.set(M.index,M),M=M.sibling;return A}function o(M,A){return M=fn(M,A),M.index=0,M.sibling=null,M}function c(M,A,z){return M.index=z,t?(z=M.alternate,z!==null?(z=z.index,z<A?(M.flags|=67108866,A):z):(M.flags|=67108866,A)):(M.flags|=1048576,A)}function m(M){return t&&M.alternate===null&&(M.flags|=67108866),M}function v(M,A,z,_){return A===null||A.tag!==6?(A=Wo(z,M.mode,_),A.return=M,A):(A=o(A,z),A.return=M,A)}function w(M,A,z,_){var tt=z.type;return tt===O?N(M,A,z.props.children,_,z.key):A!==null&&(A.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===I&&Ch(tt)===A.type)?(A=o(A,z.props),gr(A,z),A.return=M,A):(A=Ms(z.type,z.key,z.props,null,M.mode,_),gr(A,z),A.return=M,A)}function D(M,A,z,_){return A===null||A.tag!==4||A.stateNode.containerInfo!==z.containerInfo||A.stateNode.implementation!==z.implementation?(A=Io(z,M.mode,_),A.return=M,A):(A=o(A,z.children||[]),A.return=M,A)}function N(M,A,z,_,tt){return A===null||A.tag!==7?(A=ui(z,M.mode,_,tt),A.return=M,A):(A=o(A,z),A.return=M,A)}function B(M,A,z){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Wo(""+A,M.mode,z),A.return=M,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case S:return z=Ms(A.type,A.key,A.props,null,M.mode,z),gr(z,A),z.return=M,z;case C:return A=Io(A,M.mode,z),A.return=M,A;case I:var _=A._init;return A=_(A._payload),B(M,A,z)}if(Lt(A)||kt(A))return A=ui(A,M.mode,z,null),A.return=M,A;if(typeof A.then=="function")return B(M,qs(A),z);if(A.$$typeof===k)return B(M,js(M,A),z);Xs(M,A)}return null}function j(M,A,z,_){var tt=A!==null?A.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return tt!==null?null:v(M,A,""+z,_);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===tt?w(M,A,z,_):null;case C:return z.key===tt?D(M,A,z,_):null;case I:return tt=z._init,z=tt(z._payload),j(M,A,z,_)}if(Lt(z)||kt(z))return tt!==null?null:N(M,A,z,_,null);if(typeof z.then=="function")return j(M,A,qs(z),_);if(z.$$typeof===k)return j(M,A,js(M,z),_);Xs(M,z)}return null}function R(M,A,z,_,tt){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return M=M.get(z)||null,v(A,M,""+_,tt);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case S:return M=M.get(_.key===null?z:_.key)||null,w(A,M,_,tt);case C:return M=M.get(_.key===null?z:_.key)||null,D(A,M,_,tt);case I:var dt=_._init;return _=dt(_._payload),R(M,A,z,_,tt)}if(Lt(_)||kt(_))return M=M.get(z)||null,N(A,M,_,tt,null);if(typeof _.then=="function")return R(M,A,z,qs(_),tt);if(_.$$typeof===k)return R(M,A,z,js(A,_),tt);Xs(A,_)}return null}function st(M,A,z,_){for(var tt=null,dt=null,et=A,rt=A=0,te=null;et!==null&&rt<z.length;rt++){et.index>rt?(te=et,et=null):te=et.sibling;var vt=j(M,et,z[rt],_);if(vt===null){et===null&&(et=te);break}t&&et&&vt.alternate===null&&e(M,et),A=c(vt,A,rt),dt===null?tt=vt:dt.sibling=vt,dt=vt,et=te}if(rt===z.length)return i(M,et),xt&&di(M,rt),tt;if(et===null){for(;rt<z.length;rt++)et=B(M,z[rt],_),et!==null&&(A=c(et,A,rt),dt===null?tt=et:dt.sibling=et,dt=et);return xt&&di(M,rt),tt}for(et=r(et);rt<z.length;rt++)te=R(et,M,rt,z[rt],_),te!==null&&(t&&te.alternate!==null&&et.delete(te.key===null?rt:te.key),A=c(te,A,rt),dt===null?tt=te:dt.sibling=te,dt=te);return t&&et.forEach(function($n){return e(M,$n)}),xt&&di(M,rt),tt}function it(M,A,z,_){if(z==null)throw Error(l(151));for(var tt=null,dt=null,et=A,rt=A=0,te=null,vt=z.next();et!==null&&!vt.done;rt++,vt=z.next()){et.index>rt?(te=et,et=null):te=et.sibling;var $n=j(M,et,vt.value,_);if($n===null){et===null&&(et=te);break}t&&et&&$n.alternate===null&&e(M,et),A=c($n,A,rt),dt===null?tt=$n:dt.sibling=$n,dt=$n,et=te}if(vt.done)return i(M,et),xt&&di(M,rt),tt;if(et===null){for(;!vt.done;rt++,vt=z.next())vt=B(M,vt.value,_),vt!==null&&(A=c(vt,A,rt),dt===null?tt=vt:dt.sibling=vt,dt=vt);return xt&&di(M,rt),tt}for(et=r(et);!vt.done;rt++,vt=z.next())vt=R(et,M,rt,vt.value,_),vt!==null&&(t&&vt.alternate!==null&&et.delete(vt.key===null?rt:vt.key),A=c(vt,A,rt),dt===null?tt=vt:dt.sibling=vt,dt=vt);return t&&et.forEach(function(Db){return e(M,Db)}),xt&&di(M,rt),tt}function Mt(M,A,z,_){if(typeof z=="object"&&z!==null&&z.type===O&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:t:{for(var tt=z.key;A!==null;){if(A.key===tt){if(tt=z.type,tt===O){if(A.tag===7){i(M,A.sibling),_=o(A,z.props.children),_.return=M,M=_;break t}}else if(A.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===I&&Ch(tt)===A.type){i(M,A.sibling),_=o(A,z.props),gr(_,z),_.return=M,M=_;break t}i(M,A);break}else e(M,A);A=A.sibling}z.type===O?(_=ui(z.props.children,M.mode,_,z.key),_.return=M,M=_):(_=Ms(z.type,z.key,z.props,null,M.mode,_),gr(_,z),_.return=M,M=_)}return m(M);case C:t:{for(tt=z.key;A!==null;){if(A.key===tt)if(A.tag===4&&A.stateNode.containerInfo===z.containerInfo&&A.stateNode.implementation===z.implementation){i(M,A.sibling),_=o(A,z.children||[]),_.return=M,M=_;break t}else{i(M,A);break}else e(M,A);A=A.sibling}_=Io(z,M.mode,_),_.return=M,M=_}return m(M);case I:return tt=z._init,z=tt(z._payload),Mt(M,A,z,_)}if(Lt(z))return st(M,A,z,_);if(kt(z)){if(tt=kt(z),typeof tt!="function")throw Error(l(150));return z=tt.call(z),it(M,A,z,_)}if(typeof z.then=="function")return Mt(M,A,qs(z),_);if(z.$$typeof===k)return Mt(M,A,js(M,z),_);Xs(M,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,A!==null&&A.tag===6?(i(M,A.sibling),_=o(A,z),_.return=M,M=_):(i(M,A),_=Wo(z,M.mode,_),_.return=M,M=_),m(M)):i(M,A)}return function(M,A,z,_){try{pr=0;var tt=Mt(M,A,z,_);return ea=null,tt}catch(et){if(et===sr||et===Os)throw et;var dt=Te(29,et,null,M.mode);return dt.lanes=_,dt.return=M,dt}finally{}}}var na=jh(!0),Rh=jh(!1),ke=U(null),Ie=null;function Bn(t){var e=t.alternate;F(Ft,Ft.current&1),F(ke,t),Ie===null&&(e===null||$i.current!==null||e.memoizedState!==null)&&(Ie=t)}function Oh(t){if(t.tag===22){if(F(Ft,Ft.current),F(ke,t),Ie===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ie=t)}}else Un()}function Un(){F(Ft,Ft.current),F(ke,ke.current)}function yn(t){Z(ke),Ie===t&&(Ie=null),Z(Ft)}var Ft=U(0);function Ps(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||Su(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Oc(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:y({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Vc={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=ze(),o=Vn(r);o.payload=e,i!=null&&(o.callback=i),e=Nn(t,o,r),e!==null&&(De(e,t,r),or(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=ze(),o=Vn(r);o.tag=1,o.payload=e,i!=null&&(o.callback=i),e=Nn(t,o,r),e!==null&&(De(e,t,r),or(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ze(),r=Vn(i);r.tag=2,e!=null&&(r.callback=e),e=Nn(t,r,i),e!==null&&(De(e,t,i),or(e,t,i))}};function Vh(t,e,i,r,o,c,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,m):e.prototype&&e.prototype.isPureReactComponent?!Wa(i,r)||!Wa(o,c):!0}function Nh(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&Vc.enqueueReplaceState(e,e.state,null)}function xi(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=y({},i));for(var o in t)i[o]===void 0&&(i[o]=t[o])}return i}var Ks=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _h(t){Ks(t)}function Bh(t){console.error(t)}function Uh(t){Ks(t)}function Qs(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function kh(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Nc(t,e,i){return i=Vn(i),i.tag=3,i.payload={element:null},i.callback=function(){Qs(t,e)},i}function Lh(t){return t=Vn(t),t.tag=3,t}function Hh(t,e,i,r){var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var c=r.value;t.payload=function(){return o(c)},t.callback=function(){kh(e,i,r)}}var m=i.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){kh(e,i,r),typeof o!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})})}function Dx(t,e,i,r,o){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&ir(e,i,o,!0),i=ke.current,i!==null){switch(i.tag){case 13:return Ie===null?au():i.alternate===null&&Bt===0&&(Bt=3),i.flags&=-257,i.flags|=65536,i.lanes=o,r===cc?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),su(t,r,o)),!1;case 22:return i.flags|=65536,r===cc?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),su(t,r,o)),!1}throw Error(l(435,i.tag))}return su(t,r,o),au(),!1}if(xt)return e=ke.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=o,r!==nc&&(t=Error(l(422),{cause:r}),nr(Ne(t,i)))):(r!==nc&&(e=Error(l(423),{cause:r}),nr(Ne(e,i))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,r=Ne(r,i),o=Nc(t.stateNode,r,o),dc(t,o),Bt!==4&&(Bt=2)),!1;var c=Error(l(520),{cause:r});if(c=Ne(c,i),Tr===null?Tr=[c]:Tr.push(c),Bt!==4&&(Bt=2),e===null)return!0;r=Ne(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=o&-o,i.lanes|=t,t=Nc(i.stateNode,r,t),dc(i,t),!1;case 1:if(e=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(qn===null||!qn.has(c))))return i.flags|=65536,o&=-o,i.lanes|=o,o=Lh(o),Hh(o,t,i,r),dc(i,o),!1}i=i.return}while(i!==null);return!1}var Yh=Error(l(461)),Wt=!1;function ne(t,e,i,r){e.child=t===null?Rh(e,null,i,r):na(e,t.child,i,r)}function Gh(t,e,i,r,o){i=i.render;var c=e.ref;if("ref"in r){var m={};for(var v in r)v!=="ref"&&(m[v]=r[v])}else m=r;return gi(e),r=yc(t,e,i,m,c,o),v=vc(),t!==null&&!Wt?(xc(t,e,o),vn(t,e,o)):(xt&&v&&tc(e),e.flags|=1,ne(t,e,r,o),e.child)}function qh(t,e,i,r,o){if(t===null){var c=i.type;return typeof c=="function"&&!$o(c)&&c.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=c,Xh(t,e,c,r,o)):(t=Ms(i.type,null,r,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Gc(t,o)){var m=c.memoizedProps;if(i=i.compare,i=i!==null?i:Wa,i(m,r)&&t.ref===e.ref)return vn(t,e,o)}return e.flags|=1,t=fn(c,r),t.ref=e.ref,t.return=e,e.child=t}function Xh(t,e,i,r,o){if(t!==null){var c=t.memoizedProps;if(Wa(c,r)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=r=c,Gc(t,o))(t.flags&131072)!==0&&(Wt=!0);else return e.lanes=t.lanes,vn(t,e,o)}return _c(t,e,i,r,o)}function Ph(t,e,i){var r=e.pendingProps,o=r.children,c=t!==null?t.memoizedState:null;if(r.mode==="hidden"){if((e.flags&128)!==0){if(r=c!==null?c.baseLanes|i:i,t!==null){for(o=e.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;e.childLanes=c&~r}else e.childLanes=0,e.child=null;return Kh(t,e,r,i)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rs(e,c!==null?c.cachePool:null),c!==null?Xm(e,c):hc(),Oh(e);else return e.lanes=e.childLanes=536870912,Kh(t,e,c!==null?c.baseLanes|i:i,i)}else c!==null?(Rs(e,c.cachePool),Xm(e,c),Un(),e.memoizedState=null):(t!==null&&Rs(e,null),hc(),Un());return ne(t,e,o,i),e.child}function Kh(t,e,i,r){var o=oc();return o=o===null?null:{parent:Zt._currentValue,pool:o},e.memoizedState={baseLanes:i,cachePool:o},t!==null&&Rs(e,null),hc(),Oh(e),t!==null&&ir(t,e,r,!0),null}function Zs(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(l(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function _c(t,e,i,r,o){return gi(e),i=yc(t,e,i,r,void 0,o),r=vc(),t!==null&&!Wt?(xc(t,e,o),vn(t,e,o)):(xt&&r&&tc(e),e.flags|=1,ne(t,e,i,o),e.child)}function Qh(t,e,i,r,o,c){return gi(e),e.updateQueue=null,i=Km(e,r,i,o),Pm(t),r=vc(),t!==null&&!Wt?(xc(t,e,c),vn(t,e,c)):(xt&&r&&tc(e),e.flags|=1,ne(t,e,i,c),e.child)}function Zh(t,e,i,r,o){if(gi(e),e.stateNode===null){var c=Ki,m=i.contextType;typeof m=="object"&&m!==null&&(c=oe(m)),c=new i(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Vc,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},uc(e),m=i.contextType,c.context=typeof m=="object"&&m!==null?oe(m):Ki,c.state=e.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Oc(e,i,m,r),c.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Vc.enqueueReplaceState(c,c.state,null),ur(e,r,c,o),cr(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var v=e.memoizedProps,w=xi(i,v);c.props=w;var D=c.context,N=i.contextType;m=Ki,typeof N=="object"&&N!==null&&(m=oe(N));var B=i.getDerivedStateFromProps;N=typeof B=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,N||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||D!==m)&&Nh(e,c,r,m),On=!1;var j=e.memoizedState;c.state=j,ur(e,r,c,o),cr(),D=e.memoizedState,v||j!==D||On?(typeof B=="function"&&(Oc(e,i,B,r),D=e.memoizedState),(w=On||Vh(e,i,w,r,j,D,m))?(N||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=D),c.props=r,c.state=D,c.context=m,r=w):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,fc(t,e),m=e.memoizedProps,N=xi(i,m),c.props=N,B=e.pendingProps,j=c.context,D=i.contextType,w=Ki,typeof D=="object"&&D!==null&&(w=oe(D)),v=i.getDerivedStateFromProps,(D=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==B||j!==w)&&Nh(e,c,r,w),On=!1,j=e.memoizedState,c.state=j,ur(e,r,c,o),cr();var R=e.memoizedState;m!==B||j!==R||On||t!==null&&t.dependencies!==null&&Cs(t.dependencies)?(typeof v=="function"&&(Oc(e,i,v,r),R=e.memoizedState),(N=On||Vh(e,i,N,r,j,R,w)||t!==null&&t.dependencies!==null&&Cs(t.dependencies))?(D||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,R,w),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,R,w)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&j===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&j===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),c.props=r,c.state=R,c.context=w,r=N):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&j===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&j===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,Zs(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=na(e,t.child,null,o),e.child=na(e,null,i,o)):ne(t,e,i,o),e.memoizedState=c.state,t=e.child):t=vn(t,e,o),t}function Fh(t,e,i,r){return er(),e.flags|=256,ne(t,e,i,r),e.child}var Bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uc(t){return{baseLanes:t,cachePool:Bm()}}function kc(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=Le),t}function Jh(t,e,i){var r=e.pendingProps,o=!1,c=(e.flags&128)!==0,m;if((m=c)||(m=t!==null&&t.memoizedState===null?!1:(Ft.current&2)!==0),m&&(o=!0,e.flags&=-129),m=(e.flags&32)!==0,e.flags&=-33,t===null){if(xt){if(o?Bn(e):Un(),xt){var v=_t,w;if(w=v){t:{for(w=v,v=We;w.nodeType!==8;){if(!v){v=null;break t}if(w=Ze(w.nextSibling),w===null){v=null;break t}}v=w}v!==null?(e.memoizedState={dehydrated:v,treeContext:fi!==null?{id:dn,overflow:mn}:null,retryLane:536870912,hydrationErrors:null},w=Te(18,null,null,0),w.stateNode=v,w.return=e,e.child=w,de=e,_t=null,w=!0):w=!1}w||hi(e)}if(v=e.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return Su(v)?e.lanes=32:e.lanes=536870912,null;yn(e)}return v=r.children,r=r.fallback,o?(Un(),o=e.mode,v=Fs({mode:"hidden",children:v},o),r=ui(r,o,i,null),v.return=e,r.return=e,v.sibling=r,e.child=v,o=e.child,o.memoizedState=Uc(i),o.childLanes=kc(t,m,i),e.memoizedState=Bc,r):(Bn(e),Lc(e,v))}if(w=t.memoizedState,w!==null&&(v=w.dehydrated,v!==null)){if(c)e.flags&256?(Bn(e),e.flags&=-257,e=Hc(t,e,i)):e.memoizedState!==null?(Un(),e.child=t.child,e.flags|=128,e=null):(Un(),o=r.fallback,v=e.mode,r=Fs({mode:"visible",children:r.children},v),o=ui(o,v,i,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,na(e,t.child,null,i),r=e.child,r.memoizedState=Uc(i),r.childLanes=kc(t,m,i),e.memoizedState=Bc,e=o);else if(Bn(e),Su(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var D=m.dgst;m=D,r=Error(l(419)),r.stack="",r.digest=m,nr({value:r,source:null,stack:null}),e=Hc(t,e,i)}else if(Wt||ir(t,e,i,!1),m=(i&t.childLanes)!==0,Wt||m){if(m=Dt,m!==null&&(r=i&-i,r=(r&42)!==0?1:wo(r),r=(r&(m.suspendedLanes|i))!==0?0:r,r!==0&&r!==w.retryLane))throw w.retryLane=r,Pi(t,r),De(m,t,r),Yh;v.data==="$?"||au(),e=Hc(t,e,i)}else v.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=w.treeContext,_t=Ze(v.nextSibling),de=e,xt=!0,mi=null,We=!1,t!==null&&(Be[Ue++]=dn,Be[Ue++]=mn,Be[Ue++]=fi,dn=t.id,mn=t.overflow,fi=e),e=Lc(e,r.children),e.flags|=4096);return e}return o?(Un(),o=r.fallback,v=e.mode,w=t.child,D=w.sibling,r=fn(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&65011712,D!==null?o=fn(D,o):(o=ui(o,v,i,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,v=t.child.memoizedState,v===null?v=Uc(i):(w=v.cachePool,w!==null?(D=Zt._currentValue,w=w.parent!==D?{parent:D,pool:D}:w):w=Bm(),v={baseLanes:v.baseLanes|i,cachePool:w}),o.memoizedState=v,o.childLanes=kc(t,m,i),e.memoizedState=Bc,r):(Bn(e),i=t.child,t=i.sibling,i=fn(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(m=e.deletions,m===null?(e.deletions=[t],e.flags|=16):m.push(t)),e.child=i,e.memoizedState=null,i)}function Lc(t,e){return e=Fs({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Fs(t,e){return t=Te(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Hc(t,e,i){return na(e,t.child,null,i),t=Lc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $h(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ac(t.return,e,i)}function Yc(t,e,i,r,o){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:o}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=i,c.tailMode=o)}function Wh(t,e,i){var r=e.pendingProps,o=r.revealOrder,c=r.tail;if(ne(t,e,r.children,i),r=Ft.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$h(t,i,e);else if(t.tag===19)$h(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(F(Ft,r),o){case"forwards":for(i=e.child,o=null;i!==null;)t=i.alternate,t!==null&&Ps(t)===null&&(o=i),i=i.sibling;i=o,i===null?(o=e.child,e.child=null):(o=i.sibling,i.sibling=null),Yc(e,!1,o,i,c);break;case"backwards":for(i=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&Ps(t)===null){e.child=o;break}t=o.sibling,o.sibling=i,i=o,o=t}Yc(e,!0,i,null,c);break;case"together":Yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vn(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Gn|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(ir(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(l(153));if(e.child!==null){for(t=e.child,i=fn(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=fn(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function Gc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Cs(t)))}function Cx(t,e,i){switch(e.tag){case 3:bt(e,e.stateNode.containerInfo),Rn(e,Zt,t.memoizedState.cache),er();break;case 27:case 5:ai(e);break;case 4:bt(e,e.stateNode.containerInfo);break;case 10:Rn(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(Bn(e),e.flags|=128,null):(i&e.child.childLanes)!==0?Jh(t,e,i):(Bn(e),t=vn(t,e,i),t!==null?t.sibling:null);Bn(e);break;case 19:var o=(t.flags&128)!==0;if(r=(i&e.childLanes)!==0,r||(ir(t,e,i,!1),r=(i&e.childLanes)!==0),o){if(r)return Wh(t,e,i);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),F(Ft,Ft.current),r)break;return null;case 22:case 23:return e.lanes=0,Ph(t,e,i);case 24:Rn(e,Zt,t.memoizedState.cache)}return vn(t,e,i)}function Ih(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)Wt=!0;else{if(!Gc(t,i)&&(e.flags&128)===0)return Wt=!1,Cx(t,e,i);Wt=(t.flags&131072)!==0}else Wt=!1,xt&&(e.flags&1048576)!==0&&Cm(e,Ds,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,o=r._init;if(r=o(r._payload),e.type=r,typeof r=="function")$o(r)?(t=xi(r,t),e.tag=1,e=Zh(null,e,r,t,i)):(e.tag=0,e=_c(null,e,r,t,i));else{if(r!=null){if(o=r.$$typeof,o===$){e.tag=11,e=Gh(null,e,r,t,i);break t}else if(o===X){e.tag=14,e=qh(null,e,r,t,i);break t}}throw e=je(r)||r,Error(l(306,e,""))}}return e;case 0:return _c(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,o=xi(r,e.pendingProps),Zh(t,e,r,o,i);case 3:t:{if(bt(e,e.stateNode.containerInfo),t===null)throw Error(l(387));r=e.pendingProps;var c=e.memoizedState;o=c.element,fc(t,e),ur(e,r,null,i);var m=e.memoizedState;if(r=m.cache,Rn(e,Zt,r),r!==c.cache&&rc(e,[Zt],i,!0),cr(),r=m.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:m.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Fh(t,e,r,i);break t}else if(r!==o){o=Ne(Error(l(424)),e),nr(o),e=Fh(t,e,r,i);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(_t=Ze(t.firstChild),de=e,xt=!0,mi=null,We=!0,i=Rh(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(er(),r===o){e=vn(t,e,i);break t}ne(t,e,r,i)}e=e.child}return e;case 26:return Zs(t,e),t===null?(i=i0(e.type,null,e.pendingProps,null))?e.memoizedState=i:xt||(i=e.type,t=e.pendingProps,r=cl(at.current).createElement(i),r[le]=e,r[he]=t,ae(r,i,t),$t(r),e.stateNode=r):e.memoizedState=i0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ai(e),t===null&&xt&&(r=e.stateNode=t0(e.type,e.pendingProps,at.current),de=e,We=!0,o=_t,Kn(e.type)?(wu=o,_t=Ze(r.firstChild)):_t=o),ne(t,e,e.pendingProps.children,i),Zs(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&xt&&((o=r=_t)&&(r=ib(r,e.type,e.pendingProps,We),r!==null?(e.stateNode=r,de=e,_t=Ze(r.firstChild),We=!1,o=!0):o=!1),o||hi(e)),ai(e),o=e.type,c=e.pendingProps,m=t!==null?t.memoizedProps:null,r=c.children,vu(o,c)?r=null:m!==null&&vu(o,m)&&(e.flags|=32),e.memoizedState!==null&&(o=yc(t,e,Sx,null,null,i),Or._currentValue=o),Zs(t,e),ne(t,e,r,i),e.child;case 6:return t===null&&xt&&((t=i=_t)&&(i=ab(i,e.pendingProps,We),i!==null?(e.stateNode=i,de=e,_t=null,t=!0):t=!1),t||hi(e)),null;case 13:return Jh(t,e,i);case 4:return bt(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=na(e,null,r,i):ne(t,e,r,i),e.child;case 11:return Gh(t,e,e.type,e.pendingProps,i);case 7:return ne(t,e,e.pendingProps,i),e.child;case 8:return ne(t,e,e.pendingProps.children,i),e.child;case 12:return ne(t,e,e.pendingProps.children,i),e.child;case 10:return r=e.pendingProps,Rn(e,e.type,r.value),ne(t,e,r.children,i),e.child;case 9:return o=e.type._context,r=e.pendingProps.children,gi(e),o=oe(o),r=r(o),e.flags|=1,ne(t,e,r,i),e.child;case 14:return qh(t,e,e.type,e.pendingProps,i);case 15:return Xh(t,e,e.type,e.pendingProps,i);case 19:return Wh(t,e,i);case 31:return r=e.pendingProps,i=e.mode,r={mode:r.mode,children:r.children},t===null?(i=Fs(r,i),i.ref=e.ref,e.child=i,i.return=e,e=i):(i=fn(t.child,r),i.ref=e.ref,e.child=i,i.return=e,e=i),e;case 22:return Ph(t,e,i);case 24:return gi(e),r=oe(Zt),t===null?(o=oc(),o===null&&(o=Dt,c=sc(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=i),o=c),e.memoizedState={parent:r,cache:o},uc(e),Rn(e,Zt,o)):((t.lanes&i)!==0&&(fc(t,e),ur(e,null,null,i),cr()),o=t.memoizedState,c=e.memoizedState,o.parent!==r?(o={parent:r,cache:r},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),Rn(e,Zt,r)):(r=c.cache,Rn(e,Zt,r),r!==o.cache&&rc(e,[Zt],i,!0))),ne(t,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}function xn(t){t.flags|=4}function tp(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!o0(e)){if(e=ke.current,e!==null&&((yt&4194048)===yt?Ie!==null:(yt&62914560)!==yt&&(yt&536870912)===0||e!==Ie))throw lr=cc,Um;t.flags|=8192}}function Js(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Od():536870912,t.lanes|=e,sa|=e)}function yr(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var o=t.child;o!==null;)i|=o.lanes|o.childLanes,r|=o.subtreeFlags&65011712,r|=o.flags&65011712,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)i|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function jx(t,e,i){var r=e.pendingProps;switch(ec(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return Vt(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),pn(Zt),se(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(tr(e)?xn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Om())),Vt(e),null;case 26:return i=e.memoizedState,t===null?(xn(e),i!==null?(Vt(e),tp(e,i)):(Vt(e),e.flags&=-16777217)):i?i!==t.memoizedState?(xn(e),Vt(e),tp(e,i)):(Vt(e),e.flags&=-16777217):(t.memoizedProps!==r&&xn(e),Vt(e),e.flags&=-16777217),null;case 27:on(e),i=at.current;var o=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&xn(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return Vt(e),null}t=nt.current,tr(e)?jm(e):(t=t0(o,r,i),e.stateNode=t,xn(e))}return Vt(e),null;case 5:if(on(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&xn(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return Vt(e),null}if(t=nt.current,tr(e))jm(e);else{switch(o=cl(at.current),t){case 1:t=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:t=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":t=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":t=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?o.createElement(i,{is:r.is}):o.createElement(i)}}t[le]=e,t[he]=r;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=t;t:switch(ae(t,i,r),i){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&xn(e)}}return Vt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&xn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(l(166));if(t=at.current,tr(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,o=de,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}t[le]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||Qp(t.nodeValue,i)),t||hi(e)}else t=cl(t).createTextNode(r),t[le]=e,e.stateNode=t}return Vt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=tr(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(l(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[le]=e}else er(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Vt(e),o=!1}else o=Om(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),o=!0;if(!o)return e.flags&256?(yn(e),e):(yn(e),null)}if(yn(e),(e.flags&128)!==0)return e.lanes=i,e;if(i=r!==null,t=t!==null&&t.memoizedState!==null,i){r=e.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool);var c=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048)}return i!==t&&i&&(e.child.flags|=8192),Js(e,e.updateQueue),Vt(e),null;case 4:return se(),t===null&&mu(e.stateNode.containerInfo),Vt(e),null;case 10:return pn(e.type),Vt(e),null;case 19:if(Z(Ft),o=e.memoizedState,o===null)return Vt(e),null;if(r=(e.flags&128)!==0,c=o.rendering,c===null)if(r)yr(o,!1);else{if(Bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=Ps(t),c!==null){for(e.flags|=128,yr(o,!1),t=c.updateQueue,e.updateQueue=t,Js(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)Dm(i,t),i=i.sibling;return F(Ft,Ft.current&1|2),e.child}t=t.sibling}o.tail!==null&&$e()>Is&&(e.flags|=128,r=!0,yr(o,!1),e.lanes=4194304)}else{if(!r)if(t=Ps(c),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Js(e,t),yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!xt)return Vt(e),null}else 2*$e()-o.renderingStartTime>Is&&i!==536870912&&(e.flags|=128,r=!0,yr(o,!1),e.lanes=4194304);o.isBackwards?(c.sibling=e.child,e.child=c):(t=o.last,t!==null?t.sibling=c:e.child=c,o.last=c)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=$e(),e.sibling=null,t=Ft.current,F(Ft,r?t&1|2:t&1),e):(Vt(e),null);case 22:case 23:return yn(e),pc(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),i=e.updateQueue,i!==null&&Js(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&Z(yi),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),pn(Zt),Vt(e),null;case 25:return null;case 30:return null}throw Error(l(156,e.tag))}function Rx(t,e){switch(ec(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pn(Zt),se(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return on(e),null;case 13:if(yn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(l(340));er()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(Ft),null;case 4:return se(),null;case 10:return pn(e.type),null;case 22:case 23:return yn(e),pc(),t!==null&&Z(yi),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return pn(Zt),null;case 25:return null;default:return null}}function ep(t,e){switch(ec(e),e.tag){case 3:pn(Zt),se();break;case 26:case 27:case 5:on(e);break;case 4:se();break;case 13:yn(e);break;case 19:Z(Ft);break;case 10:pn(e.type);break;case 22:case 23:yn(e),pc(),t!==null&&Z(yi);break;case 24:pn(Zt)}}function vr(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var o=r.next;i=o;do{if((i.tag&t)===t){r=void 0;var c=i.create,m=i.inst;r=c(),m.destroy=r}i=i.next}while(i!==o)}}catch(v){zt(e,e.return,v)}}function kn(t,e,i){try{var r=e.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&t)===t){var m=r.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,o=e;var w=i,D=v;try{D()}catch(N){zt(o,w,N)}}}r=r.next}while(r!==c)}}catch(N){zt(e,e.return,N)}}function np(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{qm(e,i)}catch(r){zt(t,t.return,r)}}}function ip(t,e,i){i.props=xi(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){zt(t,e,r)}}function xr(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(o){zt(t,e,o)}}function tn(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(o){zt(t,e,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(o){zt(t,e,o)}else i.current=null}function ap(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(o){zt(t,t.return,o)}}function qc(t,e,i){try{var r=t.stateNode;Wx(r,t.type,i,e),r[he]=e}catch(o){zt(t,t.return,o)}}function rp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Kn(t.type)||t.tag===4}function Xc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||rp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Kn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pc(t,e,i){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(t),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=ol));else if(r!==4&&(r===27&&Kn(t.type)&&(i=t.stateNode,e=null),t=t.child,t!==null))for(Pc(t,e,i),t=t.sibling;t!==null;)Pc(t,e,i),t=t.sibling}function $s(t,e,i){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(r!==4&&(r===27&&Kn(t.type)&&(i=t.stateNode),t=t.child,t!==null))for($s(t,e,i),t=t.sibling;t!==null;)$s(t,e,i),t=t.sibling}function sp(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,o=e.attributes;o.length;)e.removeAttributeNode(o[0]);ae(e,r,i),e[le]=t,e[he]=i}catch(c){zt(t,t.return,c)}}var bn=!1,Yt=!1,Kc=!1,lp=typeof WeakSet=="function"?WeakSet:Set,It=null;function Ox(t,e){if(t=t.containerInfo,gu=pl,t=vm(t),Xo(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var o=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break t}var m=0,v=-1,w=-1,D=0,N=0,B=t,j=null;e:for(;;){for(var R;B!==i||o!==0&&B.nodeType!==3||(v=m+o),B!==c||r!==0&&B.nodeType!==3||(w=m+r),B.nodeType===3&&(m+=B.nodeValue.length),(R=B.firstChild)!==null;)j=B,B=R;for(;;){if(B===t)break e;if(j===i&&++D===o&&(v=m),j===c&&++N===r&&(w=m),(R=B.nextSibling)!==null)break;B=j,j=B.parentNode}B=R}i=v===-1||w===-1?null:{start:v,end:w}}else i=null}i=i||{start:0,end:0}}else i=null;for(yu={focusedElem:t,selectionRange:i},pl=!1,It=e;It!==null;)if(e=It,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,It=t;else for(;It!==null;){switch(e=It,c=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,i=e,o=c.memoizedProps,c=c.memoizedState,r=i.stateNode;try{var st=xi(i.type,o,i.elementType===i.type);t=r.getSnapshotBeforeUpdate(st,c),r.__reactInternalSnapshotBeforeUpdate=t}catch(it){zt(i,i.return,it)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,i=t.nodeType,i===9)bu(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=e.sibling,t!==null){t.return=e.return,It=t;break}It=e.return}}function op(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Ln(t,i),r&4&&vr(5,i);break;case 1:if(Ln(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(m){zt(i,i.return,m)}else{var o=xi(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(o,e,t.__reactInternalSnapshotBeforeUpdate)}catch(m){zt(i,i.return,m)}}r&64&&np(i),r&512&&xr(i,i.return);break;case 3:if(Ln(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{qm(t,e)}catch(m){zt(i,i.return,m)}}break;case 27:e===null&&r&4&&sp(i);case 26:case 5:Ln(t,i),e===null&&r&4&&ap(i),r&512&&xr(i,i.return);break;case 12:Ln(t,i);break;case 13:Ln(t,i),r&4&&fp(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=Yx.bind(null,i),rb(t,i))));break;case 22:if(r=i.memoizedState!==null||bn,!r){e=e!==null&&e.memoizedState!==null||Yt,o=bn;var c=Yt;bn=r,(Yt=e)&&!c?Hn(t,i,(i.subtreeFlags&8772)!==0):Ln(t,i),bn=o,Yt=c}break;case 30:break;default:Ln(t,i)}}function cp(t){var e=t.alternate;e!==null&&(t.alternate=null,cp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Eo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Rt=null,ye=!1;function Sn(t,e,i){for(i=i.child;i!==null;)up(t,e,i),i=i.sibling}function up(t,e,i){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Ha,i)}catch{}switch(i.tag){case 26:Yt||tn(i,e),Sn(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Yt||tn(i,e);var r=Rt,o=ye;Kn(i.type)&&(Rt=i.stateNode,ye=!1),Sn(t,e,i),Dr(i.stateNode),Rt=r,ye=o;break;case 5:Yt||tn(i,e);case 6:if(r=Rt,o=ye,Rt=null,Sn(t,e,i),Rt=r,ye=o,Rt!==null)if(ye)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(i.stateNode)}catch(c){zt(i,e,c)}else try{Rt.removeChild(i.stateNode)}catch(c){zt(i,e,c)}break;case 18:Rt!==null&&(ye?(t=Rt,Wp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Br(t)):Wp(Rt,i.stateNode));break;case 4:r=Rt,o=ye,Rt=i.stateNode.containerInfo,ye=!0,Sn(t,e,i),Rt=r,ye=o;break;case 0:case 11:case 14:case 15:Yt||kn(2,i,e),Yt||kn(4,i,e),Sn(t,e,i);break;case 1:Yt||(tn(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&ip(i,e,r)),Sn(t,e,i);break;case 21:Sn(t,e,i);break;case 22:Yt=(r=Yt)||i.memoizedState!==null,Sn(t,e,i),Yt=r;break;default:Sn(t,e,i)}}function fp(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Br(t)}catch(i){zt(e,e.return,i)}}function Vx(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new lp),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new lp),e;default:throw Error(l(435,t.tag))}}function Qc(t,e){var i=Vx(t);e.forEach(function(r){var o=Gx.bind(null,t,r);i.has(r)||(i.add(r),r.then(o,o))})}function Ae(t,e){var i=e.deletions;if(i!==null)for(var r=0;r<i.length;r++){var o=i[r],c=t,m=e,v=m;t:for(;v!==null;){switch(v.tag){case 27:if(Kn(v.type)){Rt=v.stateNode,ye=!1;break t}break;case 5:Rt=v.stateNode,ye=!1;break t;case 3:case 4:Rt=v.stateNode.containerInfo,ye=!0;break t}v=v.return}if(Rt===null)throw Error(l(160));up(c,m,o),Rt=null,ye=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)dp(e,t),e=e.sibling}var Qe=null;function dp(t,e){var i=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ae(e,t),Ee(t),r&4&&(kn(3,t,t.return),vr(3,t),kn(5,t,t.return));break;case 1:Ae(e,t),Ee(t),r&512&&(Yt||i===null||tn(i,i.return)),r&64&&bn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?r:i.concat(r))));break;case 26:var o=Qe;if(Ae(e,t),Ee(t),r&512&&(Yt||i===null||tn(i,i.return)),r&4){var c=i!==null?i.memoizedState:null;if(r=t.memoizedState,i===null)if(r===null)if(t.stateNode===null){t:{r=t.type,i=t.memoizedProps,o=o.ownerDocument||o;e:switch(r){case"title":c=o.getElementsByTagName("title")[0],(!c||c[qa]||c[le]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(r),o.head.insertBefore(c,o.querySelector("head > title"))),ae(c,r,i),c[le]=t,$t(c),r=c;break t;case"link":var m=s0("link","href",o).get(r+(i.href||""));if(m){for(var v=0;v<m.length;v++)if(c=m[v],c.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&c.getAttribute("rel")===(i.rel==null?null:i.rel)&&c.getAttribute("title")===(i.title==null?null:i.title)&&c.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){m.splice(v,1);break e}}c=o.createElement(r),ae(c,r,i),o.head.appendChild(c);break;case"meta":if(m=s0("meta","content",o).get(r+(i.content||""))){for(v=0;v<m.length;v++)if(c=m[v],c.getAttribute("content")===(i.content==null?null:""+i.content)&&c.getAttribute("name")===(i.name==null?null:i.name)&&c.getAttribute("property")===(i.property==null?null:i.property)&&c.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&c.getAttribute("charset")===(i.charSet==null?null:i.charSet)){m.splice(v,1);break e}}c=o.createElement(r),ae(c,r,i),o.head.appendChild(c);break;default:throw Error(l(468,r))}c[le]=t,$t(c),r=c}t.stateNode=r}else l0(o,t.type,t.stateNode);else t.stateNode=r0(o,r,t.memoizedProps);else c!==r?(c===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):c.count--,r===null?l0(o,t.type,t.stateNode):r0(o,r,t.memoizedProps)):r===null&&t.stateNode!==null&&qc(t,t.memoizedProps,i.memoizedProps)}break;case 27:Ae(e,t),Ee(t),r&512&&(Yt||i===null||tn(i,i.return)),i!==null&&r&4&&qc(t,t.memoizedProps,i.memoizedProps);break;case 5:if(Ae(e,t),Ee(t),r&512&&(Yt||i===null||tn(i,i.return)),t.flags&32){o=t.stateNode;try{ki(o,"")}catch(R){zt(t,t.return,R)}}r&4&&t.stateNode!=null&&(o=t.memoizedProps,qc(t,o,i!==null?i.memoizedProps:o)),r&1024&&(Kc=!0);break;case 6:if(Ae(e,t),Ee(t),r&4){if(t.stateNode===null)throw Error(l(162));r=t.memoizedProps,i=t.stateNode;try{i.nodeValue=r}catch(R){zt(t,t.return,R)}}break;case 3:if(dl=null,o=Qe,Qe=ul(e.containerInfo),Ae(e,t),Qe=o,Ee(t),r&4&&i!==null&&i.memoizedState.isDehydrated)try{Br(e.containerInfo)}catch(R){zt(t,t.return,R)}Kc&&(Kc=!1,mp(t));break;case 4:r=Qe,Qe=ul(t.stateNode.containerInfo),Ae(e,t),Ee(t),Qe=r;break;case 12:Ae(e,t),Ee(t);break;case 13:Ae(e,t),Ee(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Ic=$e()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Qc(t,r)));break;case 22:o=t.memoizedState!==null;var w=i!==null&&i.memoizedState!==null,D=bn,N=Yt;if(bn=D||o,Yt=N||w,Ae(e,t),Yt=N,bn=D,Ee(t),r&8192)t:for(e=t.stateNode,e._visibility=o?e._visibility&-2:e._visibility|1,o&&(i===null||w||bn||Yt||bi(t)),i=null,e=t;;){if(e.tag===5||e.tag===26){if(i===null){w=i=e;try{if(c=w.stateNode,o)m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=w.stateNode;var B=w.memoizedProps.style,j=B!=null&&B.hasOwnProperty("display")?B.display:null;v.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(R){zt(w,w.return,R)}}}else if(e.tag===6){if(i===null){w=e;try{w.stateNode.nodeValue=o?"":w.memoizedProps}catch(R){zt(w,w.return,R)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(i=r.retryQueue,i!==null&&(r.retryQueue=null,Qc(t,i))));break;case 19:Ae(e,t),Ee(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Qc(t,r)));break;case 30:break;case 21:break;default:Ae(e,t),Ee(t)}}function Ee(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(rp(r)){i=r;break}r=r.return}if(i==null)throw Error(l(160));switch(i.tag){case 27:var o=i.stateNode,c=Xc(t);$s(t,c,o);break;case 5:var m=i.stateNode;i.flags&32&&(ki(m,""),i.flags&=-33);var v=Xc(t);$s(t,v,m);break;case 3:case 4:var w=i.stateNode.containerInfo,D=Xc(t);Pc(t,D,w);break;default:throw Error(l(161))}}catch(N){zt(t,t.return,N)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;mp(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ln(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)op(t,e.alternate,e),e=e.sibling}function bi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:kn(4,e,e.return),bi(e);break;case 1:tn(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&ip(e,e.return,i),bi(e);break;case 27:Dr(e.stateNode);case 26:case 5:tn(e,e.return),bi(e);break;case 22:e.memoizedState===null&&bi(e);break;case 30:bi(e);break;default:bi(e)}t=t.sibling}}function Hn(t,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,o=t,c=e,m=c.flags;switch(c.tag){case 0:case 11:case 15:Hn(o,c,i),vr(4,c);break;case 1:if(Hn(o,c,i),r=c,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(D){zt(r,r.return,D)}if(r=c,o=r.updateQueue,o!==null){var v=r.stateNode;try{var w=o.shared.hiddenCallbacks;if(w!==null)for(o.shared.hiddenCallbacks=null,o=0;o<w.length;o++)Gm(w[o],v)}catch(D){zt(r,r.return,D)}}i&&m&64&&np(c),xr(c,c.return);break;case 27:sp(c);case 26:case 5:Hn(o,c,i),i&&r===null&&m&4&&ap(c),xr(c,c.return);break;case 12:Hn(o,c,i);break;case 13:Hn(o,c,i),i&&m&4&&fp(o,c);break;case 22:c.memoizedState===null&&Hn(o,c,i),xr(c,c.return);break;case 30:break;default:Hn(o,c,i)}e=e.sibling}}function Zc(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&ar(i))}function Fc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ar(t))}function en(t,e,i,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hp(t,e,i,r),e=e.sibling}function hp(t,e,i,r){var o=e.flags;switch(e.tag){case 0:case 11:case 15:en(t,e,i,r),o&2048&&vr(9,e);break;case 1:en(t,e,i,r);break;case 3:en(t,e,i,r),o&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ar(t)));break;case 12:if(o&2048){en(t,e,i,r),t=e.stateNode;try{var c=e.memoizedProps,m=c.id,v=c.onPostCommit;typeof v=="function"&&v(m,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){zt(e,e.return,w)}}else en(t,e,i,r);break;case 13:en(t,e,i,r);break;case 23:break;case 22:c=e.stateNode,m=e.alternate,e.memoizedState!==null?c._visibility&2?en(t,e,i,r):br(t,e):c._visibility&2?en(t,e,i,r):(c._visibility|=2,ia(t,e,i,r,(e.subtreeFlags&10256)!==0)),o&2048&&Zc(m,e);break;case 24:en(t,e,i,r),o&2048&&Fc(e.alternate,e);break;default:en(t,e,i,r)}}function ia(t,e,i,r,o){for(o=o&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=t,m=e,v=i,w=r,D=m.flags;switch(m.tag){case 0:case 11:case 15:ia(c,m,v,w,o),vr(8,m);break;case 23:break;case 22:var N=m.stateNode;m.memoizedState!==null?N._visibility&2?ia(c,m,v,w,o):br(c,m):(N._visibility|=2,ia(c,m,v,w,o)),o&&D&2048&&Zc(m.alternate,m);break;case 24:ia(c,m,v,w,o),o&&D&2048&&Fc(m.alternate,m);break;default:ia(c,m,v,w,o)}e=e.sibling}}function br(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,o=r.flags;switch(r.tag){case 22:br(i,r),o&2048&&Zc(r.alternate,r);break;case 24:br(i,r),o&2048&&Fc(r.alternate,r);break;default:br(i,r)}e=e.sibling}}var Sr=8192;function aa(t){if(t.subtreeFlags&Sr)for(t=t.child;t!==null;)pp(t),t=t.sibling}function pp(t){switch(t.tag){case 26:aa(t),t.flags&Sr&&t.memoizedState!==null&&vb(Qe,t.memoizedState,t.memoizedProps);break;case 5:aa(t);break;case 3:case 4:var e=Qe;Qe=ul(t.stateNode.containerInfo),aa(t),Qe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Sr,Sr=16777216,aa(t),Sr=e):aa(t));break;default:aa(t)}}function gp(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function wr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];It=r,vp(r,t)}gp(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yp(t),t=t.sibling}function yp(t){switch(t.tag){case 0:case 11:case 15:wr(t),t.flags&2048&&kn(9,t,t.return);break;case 3:wr(t);break;case 12:wr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ws(t)):wr(t);break;default:wr(t)}}function Ws(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];It=r,vp(r,t)}gp(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:kn(8,e,e.return),Ws(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,Ws(e));break;default:Ws(e)}t=t.sibling}}function vp(t,e){for(;It!==null;){var i=It;switch(i.tag){case 0:case 11:case 15:kn(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ar(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,It=r;else t:for(i=t;It!==null;){r=It;var o=r.sibling,c=r.return;if(cp(r),r===i){It=null;break t}if(o!==null){o.return=c,It=o;break t}It=c}}}var Nx={getCacheForType:function(t){var e=oe(Zt),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i}},_x=typeof WeakMap=="function"?WeakMap:Map,wt=0,Dt=null,ht=null,yt=0,Tt=0,Me=null,Yn=!1,ra=!1,Jc=!1,wn=0,Bt=0,Gn=0,Si=0,$c=0,Le=0,sa=0,Tr=null,ve=null,Wc=!1,Ic=0,Is=1/0,tl=null,qn=null,ie=0,Xn=null,la=null,oa=0,tu=0,eu=null,xp=null,Ar=0,nu=null;function ze(){if((wt&2)!==0&&yt!==0)return yt&-yt;if(V.T!==null){var t=Fi;return t!==0?t:cu()}return _d()}function bp(){Le===0&&(Le=(yt&536870912)===0||xt?Rd():536870912);var t=ke.current;return t!==null&&(t.flags|=32),Le}function De(t,e,i){(t===Dt&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)&&(ca(t,0),Pn(t,yt,Le,!1)),Ga(t,i),((wt&2)===0||t!==Dt)&&(t===Dt&&((wt&2)===0&&(Si|=i),Bt===4&&Pn(t,yt,Le,!1)),nn(t))}function Sp(t,e,i){if((wt&6)!==0)throw Error(l(327));var r=!i&&(e&124)===0&&(e&t.expiredLanes)===0||Ya(t,e),o=r?kx(t,e):ru(t,e,!0),c=r;do{if(o===0){ra&&!r&&Pn(t,e,0,!1);break}else{if(i=t.current.alternate,c&&!Bx(i)){o=ru(t,e,!1),c=!1;continue}if(o===2){if(c=e,t.errorRecoveryDisabledLanes&c)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){e=m;t:{var v=t;o=Tr;var w=v.current.memoizedState.isDehydrated;if(w&&(ca(v,m).flags|=256),m=ru(v,m,!1),m!==2){if(Jc&&!w){v.errorRecoveryDisabledLanes|=c,Si|=c,o=4;break t}c=ve,ve=o,c!==null&&(ve===null?ve=c:ve.push.apply(ve,c))}o=m}if(c=!1,o!==2)continue}}if(o===1){ca(t,0),Pn(t,e,0,!0);break}t:{switch(r=t,c=o,c){case 0:case 1:throw Error(l(345));case 4:if((e&4194048)!==e)break;case 6:Pn(r,e,Le,!Yn);break t;case 2:ve=null;break;case 3:case 5:break;default:throw Error(l(329))}if((e&62914560)===e&&(o=Ic+300-$e(),10<o)){if(Pn(r,e,Le,!Yn),fs(r,0,!0)!==0)break t;r.timeoutHandle=Jp(wp.bind(null,r,i,ve,tl,Wc,e,Le,Si,sa,Yn,c,2,-0,0),o);break t}wp(r,i,ve,tl,Wc,e,Le,Si,sa,Yn,c,0,-0,0)}}break}while(!0);nn(t)}function wp(t,e,i,r,o,c,m,v,w,D,N,B,j,R){if(t.timeoutHandle=-1,B=e.subtreeFlags,(B&8192||(B&16785408)===16785408)&&(Rr={stylesheets:null,count:0,unsuspend:yb},pp(e),B=xb(),B!==null)){t.cancelPendingCommit=B(Cp.bind(null,t,e,c,i,r,o,m,v,w,N,1,j,R)),Pn(t,c,m,!D);return}Cp(t,e,c,i,r,o,m,v,w)}function Bx(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var o=i[r],c=o.getSnapshot;o=o.value;try{if(!we(c(),o))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pn(t,e,i,r){e&=~$c,e&=~Si,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var o=e;0<o;){var c=31-Se(o),m=1<<c;r[c]=-1,o&=~m}i!==0&&Vd(t,i,e)}function el(){return(wt&6)===0?(Er(0),!1):!0}function iu(){if(ht!==null){if(Tt===0)var t=ht.return;else t=ht,hn=pi=null,bc(t),ea=null,pr=0,t=ht;for(;t!==null;)ep(t.alternate,t),t=t.return;ht=null}}function ca(t,e){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,tb(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),iu(),Dt=t,ht=i=fn(t.current,null),yt=e,Tt=0,Me=null,Yn=!1,ra=Ya(t,e),Jc=!1,sa=Le=$c=Si=Gn=Bt=0,ve=Tr=null,Wc=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var o=31-Se(r),c=1<<o;e|=t[o],r&=~c}return wn=e,Ts(),i}function Tp(t,e){ft=null,V.H=Gs,e===sr||e===Os?(e=Hm(),Tt=3):e===Um?(e=Hm(),Tt=4):Tt=e===Yh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Me=e,ht===null&&(Bt=1,Qs(t,Ne(e,t.current)))}function Ap(){var t=V.H;return V.H=Gs,t===null?Gs:t}function Ep(){var t=V.A;return V.A=Nx,t}function au(){Bt=4,Yn||(yt&4194048)!==yt&&ke.current!==null||(ra=!0),(Gn&134217727)===0&&(Si&134217727)===0||Dt===null||Pn(Dt,yt,Le,!1)}function ru(t,e,i){var r=wt;wt|=2;var o=Ap(),c=Ep();(Dt!==t||yt!==e)&&(tl=null,ca(t,e)),e=!1;var m=Bt;t:do try{if(Tt!==0&&ht!==null){var v=ht,w=Me;switch(Tt){case 8:iu(),m=6;break t;case 3:case 2:case 9:case 6:ke.current===null&&(e=!0);var D=Tt;if(Tt=0,Me=null,ua(t,v,w,D),i&&ra){m=0;break t}break;default:D=Tt,Tt=0,Me=null,ua(t,v,w,D)}}Ux(),m=Bt;break}catch(N){Tp(t,N)}while(!0);return e&&t.shellSuspendCounter++,hn=pi=null,wt=r,V.H=o,V.A=c,ht===null&&(Dt=null,yt=0,Ts()),m}function Ux(){for(;ht!==null;)Mp(ht)}function kx(t,e){var i=wt;wt|=2;var r=Ap(),o=Ep();Dt!==t||yt!==e?(tl=null,Is=$e()+500,ca(t,e)):ra=Ya(t,e);t:do try{if(Tt!==0&&ht!==null){e=ht;var c=Me;e:switch(Tt){case 1:Tt=0,Me=null,ua(t,e,c,1);break;case 2:case 9:if(km(c)){Tt=0,Me=null,zp(e);break}e=function(){Tt!==2&&Tt!==9||Dt!==t||(Tt=7),nn(t)},c.then(e,e);break t;case 3:Tt=7;break t;case 4:Tt=5;break t;case 7:km(c)?(Tt=0,Me=null,zp(e)):(Tt=0,Me=null,ua(t,e,c,7));break;case 5:var m=null;switch(ht.tag){case 26:m=ht.memoizedState;case 5:case 27:var v=ht;if(!m||o0(m)){Tt=0,Me=null;var w=v.sibling;if(w!==null)ht=w;else{var D=v.return;D!==null?(ht=D,nl(D)):ht=null}break e}}Tt=0,Me=null,ua(t,e,c,5);break;case 6:Tt=0,Me=null,ua(t,e,c,6);break;case 8:iu(),Bt=6;break t;default:throw Error(l(462))}}Lx();break}catch(N){Tp(t,N)}while(!0);return hn=pi=null,V.H=r,V.A=o,wt=i,ht!==null?0:(Dt=null,yt=0,Ts(),Bt)}function Lx(){for(;ht!==null&&!lv();)Mp(ht)}function Mp(t){var e=Ih(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?nl(t):ht=e}function zp(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Qh(i,e,e.pendingProps,e.type,void 0,yt);break;case 11:e=Qh(i,e,e.pendingProps,e.type.render,e.ref,yt);break;case 5:bc(e);default:ep(i,e),e=ht=Dm(e,wn),e=Ih(i,e,wn)}t.memoizedProps=t.pendingProps,e===null?nl(t):ht=e}function ua(t,e,i,r){hn=pi=null,bc(e),ea=null,pr=0;var o=e.return;try{if(Dx(t,o,e,i,yt)){Bt=1,Qs(t,Ne(i,t.current)),ht=null;return}}catch(c){if(o!==null)throw ht=o,c;Bt=1,Qs(t,Ne(i,t.current)),ht=null;return}e.flags&32768?(xt||r===1?t=!0:ra||(yt&536870912)!==0?t=!1:(Yn=t=!0,(r===2||r===9||r===3||r===6)&&(r=ke.current,r!==null&&r.tag===13&&(r.flags|=16384))),Dp(e,t)):nl(e)}function nl(t){var e=t;do{if((e.flags&32768)!==0){Dp(e,Yn);return}t=e.return;var i=jx(e.alternate,e,wn);if(i!==null){ht=i;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);Bt===0&&(Bt=5)}function Dp(t,e){do{var i=Rx(t.alternate,t);if(i!==null){i.flags&=32767,ht=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){ht=t;return}ht=t=i}while(t!==null);Bt=6,ht=null}function Cp(t,e,i,r,o,c,m,v,w){t.cancelPendingCommit=null;do il();while(ie!==0);if((wt&6)!==0)throw Error(l(327));if(e!==null){if(e===t.current)throw Error(l(177));if(c=e.lanes|e.childLanes,c|=Fo,yv(t,i,c,m,v,w),t===Dt&&(ht=Dt=null,yt=0),la=e,Xn=t,oa=i,tu=c,eu=o,xp=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,qx(os,function(){return Np(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=V.T,V.T=null,o=G.p,G.p=2,m=wt,wt|=4;try{Ox(t,e,i)}finally{wt=m,G.p=o,V.T=r}}ie=1,jp(),Rp(),Op()}}function jp(){if(ie===1){ie=0;var t=Xn,e=la,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=V.T,V.T=null;var r=G.p;G.p=2;var o=wt;wt|=4;try{dp(e,t);var c=yu,m=vm(t.containerInfo),v=c.focusedElem,w=c.selectionRange;if(m!==v&&v&&v.ownerDocument&&ym(v.ownerDocument.documentElement,v)){if(w!==null&&Xo(v)){var D=w.start,N=w.end;if(N===void 0&&(N=D),"selectionStart"in v)v.selectionStart=D,v.selectionEnd=Math.min(N,v.value.length);else{var B=v.ownerDocument||document,j=B&&B.defaultView||window;if(j.getSelection){var R=j.getSelection(),st=v.textContent.length,it=Math.min(w.start,st),Mt=w.end===void 0?it:Math.min(w.end,st);!R.extend&&it>Mt&&(m=Mt,Mt=it,it=m);var M=gm(v,it),A=gm(v,Mt);if(M&&A&&(R.rangeCount!==1||R.anchorNode!==M.node||R.anchorOffset!==M.offset||R.focusNode!==A.node||R.focusOffset!==A.offset)){var z=B.createRange();z.setStart(M.node,M.offset),R.removeAllRanges(),it>Mt?(R.addRange(z),R.extend(A.node,A.offset)):(z.setEnd(A.node,A.offset),R.addRange(z))}}}}for(B=[],R=v;R=R.parentNode;)R.nodeType===1&&B.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<B.length;v++){var _=B[v];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}pl=!!gu,yu=gu=null}finally{wt=o,G.p=r,V.T=i}}t.current=e,ie=2}}function Rp(){if(ie===2){ie=0;var t=Xn,e=la,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=V.T,V.T=null;var r=G.p;G.p=2;var o=wt;wt|=4;try{op(t,e.alternate,e)}finally{wt=o,G.p=r,V.T=i}}ie=3}}function Op(){if(ie===4||ie===3){ie=0,ov();var t=Xn,e=la,i=oa,r=xp;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ie=5:(ie=0,la=Xn=null,Vp(t,t.pendingLanes));var o=t.pendingLanes;if(o===0&&(qn=null),To(i),e=e.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Ha,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=V.T,o=G.p,G.p=2,V.T=null;try{for(var c=t.onRecoverableError,m=0;m<r.length;m++){var v=r[m];c(v.value,{componentStack:v.stack})}}finally{V.T=e,G.p=o}}(oa&3)!==0&&il(),nn(t),o=t.pendingLanes,(i&4194090)!==0&&(o&42)!==0?t===nu?Ar++:(Ar=0,nu=t):Ar=0,Er(0)}}function Vp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ar(e)))}function il(t){return jp(),Rp(),Op(),Np()}function Np(){if(ie!==5)return!1;var t=Xn,e=tu;tu=0;var i=To(oa),r=V.T,o=G.p;try{G.p=32>i?32:i,V.T=null,i=eu,eu=null;var c=Xn,m=oa;if(ie=0,la=Xn=null,oa=0,(wt&6)!==0)throw Error(l(331));var v=wt;if(wt|=4,yp(c.current),hp(c,c.current,m,i),wt=v,Er(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Ha,c)}catch{}return!0}finally{G.p=o,V.T=r,Vp(t,e)}}function _p(t,e,i){e=Ne(i,e),e=Nc(t.stateNode,e,2),t=Nn(t,e,2),t!==null&&(Ga(t,2),nn(t))}function zt(t,e,i){if(t.tag===3)_p(t,t,i);else for(;e!==null;){if(e.tag===3){_p(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){t=Ne(i,t),i=Lh(2),r=Nn(e,i,2),r!==null&&(Hh(i,r,e,t),Ga(r,2),nn(r));break}}e=e.return}}function su(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new _x;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(i)||(Jc=!0,o.add(i),t=Hx.bind(null,t,e,i),e.then(t,t))}function Hx(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Dt===t&&(yt&i)===i&&(Bt===4||Bt===3&&(yt&62914560)===yt&&300>$e()-Ic?(wt&2)===0&&ca(t,0):$c|=i,sa===yt&&(sa=0)),nn(t)}function Bp(t,e){e===0&&(e=Od()),t=Pi(t,e),t!==null&&(Ga(t,e),nn(t))}function Yx(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),Bp(t,i)}function Gx(t,e){var i=0;switch(t.tag){case 13:var r=t.stateNode,o=t.memoizedState;o!==null&&(i=o.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(e),Bp(t,i)}function qx(t,e){return xo(t,e)}var al=null,fa=null,lu=!1,rl=!1,ou=!1,wi=0;function nn(t){t!==fa&&t.next===null&&(fa===null?al=fa=t:fa=fa.next=t),rl=!0,lu||(lu=!0,Px())}function Er(t,e){if(!ou&&rl){ou=!0;do for(var i=!1,r=al;r!==null;){if(t!==0){var o=r.pendingLanes;if(o===0)var c=0;else{var m=r.suspendedLanes,v=r.pingedLanes;c=(1<<31-Se(42|t)+1)-1,c&=o&~(m&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,Hp(r,c))}else c=yt,c=fs(r,r===Dt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ya(r,c)||(i=!0,Hp(r,c));r=r.next}while(i);ou=!1}}function Xx(){Up()}function Up(){rl=lu=!1;var t=0;wi!==0&&(Ix()&&(t=wi),wi=0);for(var e=$e(),i=null,r=al;r!==null;){var o=r.next,c=kp(r,e);c===0?(r.next=null,i===null?al=o:i.next=o,o===null&&(fa=i)):(i=r,(t!==0||(c&3)!==0)&&(rl=!0)),r=o}Er(t)}function kp(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var m=31-Se(c),v=1<<m,w=o[m];w===-1?((v&i)===0||(v&r)!==0)&&(o[m]=gv(v,e)):w<=e&&(t.expiredLanes|=v),c&=~v}if(e=Dt,i=yt,i=fs(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&bo(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ya(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&bo(r),To(i)){case 2:case 8:i=Cd;break;case 32:i=os;break;case 268435456:i=jd;break;default:i=os}return r=Lp.bind(null,t),i=xo(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&bo(r),t.callbackPriority=2,t.callbackNode=null,2}function Lp(t,e){if(ie!==0&&ie!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(il()&&t.callbackNode!==i)return null;var r=yt;return r=fs(t,t===Dt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Sp(t,r,e),kp(t,$e()),t.callbackNode!=null&&t.callbackNode===i?Lp.bind(null,t):null)}function Hp(t,e){if(il())return null;Sp(t,e,!0)}function Px(){eb(function(){(wt&6)!==0?xo(Dd,Xx):Up()})}function cu(){return wi===0&&(wi=Rd()),wi}function Yp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gs(""+t)}function Gp(t,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,t.id&&i.setAttribute("form",t.id),e.parentNode.insertBefore(i,e),t=new FormData(t),i.parentNode.removeChild(i),t}function Kx(t,e,i,r,o){if(e==="submit"&&i&&i.stateNode===o){var c=Yp((o[he]||null).action),m=r.submitter;m&&(e=(e=m[he]||null)?Yp(e.formAction):m.getAttribute("formAction"),e!==null&&(c=e,m=null));var v=new bs("action","action",null,r,o);t.push({event:v,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wi!==0){var w=m?Gp(o,m):new FormData(o);Cc(i,{pending:!0,data:w,method:o.method,action:c},null,w)}}else typeof c=="function"&&(v.preventDefault(),w=m?Gp(o,m):new FormData(o),Cc(i,{pending:!0,data:w,method:o.method,action:c},c,w))},currentTarget:o}]})}}for(var uu=0;uu<Zo.length;uu++){var fu=Zo[uu],Qx=fu.toLowerCase(),Zx=fu[0].toUpperCase()+fu.slice(1);Ke(Qx,"on"+Zx)}Ke(Sm,"onAnimationEnd"),Ke(wm,"onAnimationIteration"),Ke(Tm,"onAnimationStart"),Ke("dblclick","onDoubleClick"),Ke("focusin","onFocus"),Ke("focusout","onBlur"),Ke(fx,"onTransitionRun"),Ke(dx,"onTransitionStart"),Ke(mx,"onTransitionCancel"),Ke(Am,"onTransitionEnd"),_i("onMouseEnter",["mouseout","mouseover"]),_i("onMouseLeave",["mouseout","mouseover"]),_i("onPointerEnter",["pointerout","pointerover"]),_i("onPointerLeave",["pointerout","pointerover"]),si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),si("onBeforeInput",["compositionend","keypress","textInput","paste"]),si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mr));function qp(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],o=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var m=r.length-1;0<=m;m--){var v=r[m],w=v.instance,D=v.currentTarget;if(v=v.listener,w!==c&&o.isPropagationStopped())break t;c=v,o.currentTarget=D;try{c(o)}catch(N){Ks(N)}o.currentTarget=null,c=w}else for(m=0;m<r.length;m++){if(v=r[m],w=v.instance,D=v.currentTarget,v=v.listener,w!==c&&o.isPropagationStopped())break t;c=v,o.currentTarget=D;try{c(o)}catch(N){Ks(N)}o.currentTarget=null,c=w}}}}function pt(t,e){var i=e[Ao];i===void 0&&(i=e[Ao]=new Set);var r=t+"__bubble";i.has(r)||(Xp(e,t,2,!1),i.add(r))}function du(t,e,i){var r=0;e&&(r|=4),Xp(i,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function mu(t){if(!t[sl]){t[sl]=!0,Ud.forEach(function(i){i!=="selectionchange"&&(Fx.has(i)||du(i,!1,t),du(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,du("selectionchange",!1,e))}}function Xp(t,e,i,r){switch(h0(e)){case 2:var o=wb;break;case 8:o=Tb;break;default:o=zu}i=o.bind(null,e,i,t),o=void 0,!_o||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?t.addEventListener(e,i,{capture:!0,passive:o}):t.addEventListener(e,i,!0):o!==void 0?t.addEventListener(e,i,{passive:o}):t.addEventListener(e,i,!1)}function hu(t,e,i,r,o){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var v=r.stateNode.containerInfo;if(v===o)break;if(m===4)for(m=r.return;m!==null;){var w=m.tag;if((w===3||w===4)&&m.stateNode.containerInfo===o)return;m=m.return}for(;v!==null;){if(m=Oi(v),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){r=c=m;continue t}v=v.parentNode}}r=r.return}$d(function(){var D=c,N=Vo(i),B=[];t:{var j=Em.get(t);if(j!==void 0){var R=bs,st=t;switch(t){case"keypress":if(vs(i)===0)break t;case"keydown":case"keyup":R=qv;break;case"focusin":st="focus",R=Lo;break;case"focusout":st="blur",R=Lo;break;case"beforeblur":case"afterblur":R=Lo;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Kv;break;case Sm:case wm:case Tm:R=Nv;break;case Am:R=Zv;break;case"scroll":case"scrollend":R=Cv;break;case"wheel":R=Jv;break;case"copy":case"cut":case"paste":R=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=nm;break;case"toggle":case"beforetoggle":R=Wv}var it=(e&4)!==0,Mt=!it&&(t==="scroll"||t==="scrollend"),M=it?j!==null?j+"Capture":null:j;it=[];for(var A=D,z;A!==null;){var _=A;if(z=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||z===null||M===null||(_=Pa(A,M),_!=null&&it.push(zr(A,_,z))),Mt)break;A=A.return}0<it.length&&(j=new R(j,st,null,i,N),B.push({event:j,listeners:it}))}}if((e&7)===0){t:{if(j=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",j&&i!==Oo&&(st=i.relatedTarget||i.fromElement)&&(Oi(st)||st[Ri]))break t;if((R||j)&&(j=N.window===N?N:(j=N.ownerDocument)?j.defaultView||j.parentWindow:window,R?(st=i.relatedTarget||i.toElement,R=D,st=st?Oi(st):null,st!==null&&(Mt=d(st),it=st.tag,st!==Mt||it!==5&&it!==27&&it!==6)&&(st=null)):(R=null,st=D),R!==st)){if(it=tm,_="onMouseLeave",M="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(it=nm,_="onPointerLeave",M="onPointerEnter",A="pointer"),Mt=R==null?j:Xa(R),z=st==null?j:Xa(st),j=new it(_,A+"leave",R,i,N),j.target=Mt,j.relatedTarget=z,_=null,Oi(N)===D&&(it=new it(M,A+"enter",st,i,N),it.target=z,it.relatedTarget=Mt,_=it),Mt=_,R&&st)e:{for(it=R,M=st,A=0,z=it;z;z=da(z))A++;for(z=0,_=M;_;_=da(_))z++;for(;0<A-z;)it=da(it),A--;for(;0<z-A;)M=da(M),z--;for(;A--;){if(it===M||M!==null&&it===M.alternate)break e;it=da(it),M=da(M)}it=null}else it=null;R!==null&&Pp(B,j,R,it,!1),st!==null&&Mt!==null&&Pp(B,Mt,st,it,!0)}}t:{if(j=D?Xa(D):window,R=j.nodeName&&j.nodeName.toLowerCase(),R==="select"||R==="input"&&j.type==="file")var tt=um;else if(om(j))if(fm)tt=ox;else{tt=sx;var dt=rx}else R=j.nodeName,!R||R.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?D&&Ro(D.elementType)&&(tt=um):tt=lx;if(tt&&(tt=tt(t,D))){cm(B,tt,i,N);break t}dt&&dt(t,j,D),t==="focusout"&&D&&j.type==="number"&&D.memoizedProps.value!=null&&jo(j,"number",j.value)}switch(dt=D?Xa(D):window,t){case"focusin":(om(dt)||dt.contentEditable==="true")&&(Gi=dt,Po=D,Ia=null);break;case"focusout":Ia=Po=Gi=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,xm(B,i,N);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":xm(B,i,N)}var et;if(Yo)t:{switch(t){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else Yi?sm(t,i)&&(rt="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(rt="onCompositionStart");rt&&(im&&i.locale!=="ko"&&(Yi||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Yi&&(et=Wd()):(jn=N,Bo="value"in jn?jn.value:jn.textContent,Yi=!0)),dt=ll(D,rt),0<dt.length&&(rt=new em(rt,t,null,i,N),B.push({event:rt,listeners:dt}),et?rt.data=et:(et=lm(i),et!==null&&(rt.data=et)))),(et=tx?ex(t,i):nx(t,i))&&(rt=ll(D,"onBeforeInput"),0<rt.length&&(dt=new em("onBeforeInput","beforeinput",null,i,N),B.push({event:dt,listeners:rt}),dt.data=et)),Kx(B,t,D,i,N)}qp(B,e)})}function zr(t,e,i){return{instance:t,listener:e,currentTarget:i}}function ll(t,e){for(var i=e+"Capture",r=[];t!==null;){var o=t,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Pa(t,i),o!=null&&r.unshift(zr(t,o,c)),o=Pa(t,e),o!=null&&r.push(zr(t,o,c))),t.tag===3)return r;t=t.return}return[]}function da(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pp(t,e,i,r,o){for(var c=e._reactName,m=[];i!==null&&i!==r;){var v=i,w=v.alternate,D=v.stateNode;if(v=v.tag,w!==null&&w===r)break;v!==5&&v!==26&&v!==27||D===null||(w=D,o?(D=Pa(i,c),D!=null&&m.unshift(zr(i,D,w))):o||(D=Pa(i,c),D!=null&&m.push(zr(i,D,w)))),i=i.return}m.length!==0&&t.push({event:e,listeners:m})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function Kp(t){return(typeof t=="string"?t:""+t).replace(Jx,`
`).replace($x,"")}function Qp(t,e){return e=Kp(e),Kp(t)===e}function ol(){}function Et(t,e,i,r,o,c){switch(i){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||ki(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&ki(t,""+r);break;case"className":ms(t,"class",r);break;case"tabIndex":ms(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ms(t,i,r);break;case"style":Fd(t,r,c);break;case"data":if(e!=="object"){ms(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=gs(""+r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(e!=="input"&&Et(t,e,"name",o.name,o,null),Et(t,e,"formEncType",o.formEncType,o,null),Et(t,e,"formMethod",o.formMethod,o,null),Et(t,e,"formTarget",o.formTarget,o,null)):(Et(t,e,"encType",o.encType,o,null),Et(t,e,"method",o.method,o,null),Et(t,e,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=gs(""+r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=ol);break;case"onScroll":r!=null&&pt("scroll",t);break;case"onScrollEnd":r!=null&&pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(i=r.__html,i!=null){if(o.children!=null)throw Error(l(60));t.innerHTML=i}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=gs(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""+r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":pt("beforetoggle",t),pt("toggle",t),ds(t,"popover",r);break;case"xlinkActuate":cn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":cn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":cn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":cn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":cn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":cn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":cn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":cn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":cn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ds(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=zv.get(i)||i,ds(t,i,r))}}function pu(t,e,i,r,o,c){switch(i){case"style":Fd(t,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(i=r.__html,i!=null){if(o.children!=null)throw Error(l(60));t.innerHTML=i}}break;case"children":typeof r=="string"?ki(t,r):(typeof r=="number"||typeof r=="bigint")&&ki(t,""+r);break;case"onScroll":r!=null&&pt("scroll",t);break;case"onScrollEnd":r!=null&&pt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ol);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kd.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(o=i.endsWith("Capture"),e=i.slice(2,o?i.length-7:void 0),c=t[he]||null,c=c!=null?c[i]:null,typeof c=="function"&&t.removeEventListener(e,c,o),typeof r=="function")){typeof c!="function"&&c!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(e,r,o);break t}i in t?t[i]=r:r===!0?t.setAttribute(i,""):ds(t,i,r)}}}function ae(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",t),pt("load",t);var r=!1,o=!1,c;for(c in i)if(i.hasOwnProperty(c)){var m=i[c];if(m!=null)switch(c){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Et(t,e,c,m,i,null)}}o&&Et(t,e,"srcSet",i.srcSet,i,null),r&&Et(t,e,"src",i.src,i,null);return;case"input":pt("invalid",t);var v=c=m=o=null,w=null,D=null;for(r in i)if(i.hasOwnProperty(r)){var N=i[r];if(N!=null)switch(r){case"name":o=N;break;case"type":m=N;break;case"checked":w=N;break;case"defaultChecked":D=N;break;case"value":c=N;break;case"defaultValue":v=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(l(137,e));break;default:Et(t,e,r,N,i,null)}}Pd(t,c,v,w,D,m,o,!1),hs(t);return;case"select":pt("invalid",t),r=m=c=null;for(o in i)if(i.hasOwnProperty(o)&&(v=i[o],v!=null))switch(o){case"value":c=v;break;case"defaultValue":m=v;break;case"multiple":r=v;default:Et(t,e,o,v,i,null)}e=c,i=m,t.multiple=!!r,e!=null?Ui(t,!!r,e,!1):i!=null&&Ui(t,!!r,i,!0);return;case"textarea":pt("invalid",t),c=o=r=null;for(m in i)if(i.hasOwnProperty(m)&&(v=i[m],v!=null))switch(m){case"value":r=v;break;case"defaultValue":o=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(l(91));break;default:Et(t,e,m,v,i,null)}Qd(t,r,o,c),hs(t);return;case"option":for(w in i)if(i.hasOwnProperty(w)&&(r=i[w],r!=null))switch(w){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Et(t,e,w,r,i,null)}return;case"dialog":pt("beforetoggle",t),pt("toggle",t),pt("cancel",t),pt("close",t);break;case"iframe":case"object":pt("load",t);break;case"video":case"audio":for(r=0;r<Mr.length;r++)pt(Mr[r],t);break;case"image":pt("error",t),pt("load",t);break;case"details":pt("toggle",t);break;case"embed":case"source":case"link":pt("error",t),pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in i)if(i.hasOwnProperty(D)&&(r=i[D],r!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Et(t,e,D,r,i,null)}return;default:if(Ro(e)){for(N in i)i.hasOwnProperty(N)&&(r=i[N],r!==void 0&&pu(t,e,N,r,i,void 0));return}}for(v in i)i.hasOwnProperty(v)&&(r=i[v],r!=null&&Et(t,e,v,r,i,null))}function Wx(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,m=null,v=null,w=null,D=null,N=null;for(R in i){var B=i[R];if(i.hasOwnProperty(R)&&B!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":w=B;default:r.hasOwnProperty(R)||Et(t,e,R,null,r,B)}}for(var j in r){var R=r[j];if(B=i[j],r.hasOwnProperty(j)&&(R!=null||B!=null))switch(j){case"type":c=R;break;case"name":o=R;break;case"checked":D=R;break;case"defaultChecked":N=R;break;case"value":m=R;break;case"defaultValue":v=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(l(137,e));break;default:R!==B&&Et(t,e,j,R,r,B)}}Co(t,m,v,w,D,N,c,o);return;case"select":R=m=v=j=null;for(c in i)if(w=i[c],i.hasOwnProperty(c)&&w!=null)switch(c){case"value":break;case"multiple":R=w;default:r.hasOwnProperty(c)||Et(t,e,c,null,r,w)}for(o in r)if(c=r[o],w=i[o],r.hasOwnProperty(o)&&(c!=null||w!=null))switch(o){case"value":j=c;break;case"defaultValue":v=c;break;case"multiple":m=c;default:c!==w&&Et(t,e,o,c,r,w)}e=v,i=m,r=R,j!=null?Ui(t,!!i,j,!1):!!r!=!!i&&(e!=null?Ui(t,!!i,e,!0):Ui(t,!!i,i?[]:"",!1));return;case"textarea":R=j=null;for(v in i)if(o=i[v],i.hasOwnProperty(v)&&o!=null&&!r.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Et(t,e,v,null,r,o)}for(m in r)if(o=r[m],c=i[m],r.hasOwnProperty(m)&&(o!=null||c!=null))switch(m){case"value":j=o;break;case"defaultValue":R=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(l(91));break;default:o!==c&&Et(t,e,m,o,r,c)}Kd(t,j,R);return;case"option":for(var st in i)if(j=i[st],i.hasOwnProperty(st)&&j!=null&&!r.hasOwnProperty(st))switch(st){case"selected":t.selected=!1;break;default:Et(t,e,st,null,r,j)}for(w in r)if(j=r[w],R=i[w],r.hasOwnProperty(w)&&j!==R&&(j!=null||R!=null))switch(w){case"selected":t.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Et(t,e,w,j,r,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in i)j=i[it],i.hasOwnProperty(it)&&j!=null&&!r.hasOwnProperty(it)&&Et(t,e,it,null,r,j);for(D in r)if(j=r[D],R=i[D],r.hasOwnProperty(D)&&j!==R&&(j!=null||R!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(l(137,e));break;default:Et(t,e,D,j,r,R)}return;default:if(Ro(e)){for(var Mt in i)j=i[Mt],i.hasOwnProperty(Mt)&&j!==void 0&&!r.hasOwnProperty(Mt)&&pu(t,e,Mt,void 0,r,j);for(N in r)j=r[N],R=i[N],!r.hasOwnProperty(N)||j===R||j===void 0&&R===void 0||pu(t,e,N,j,r,R);return}}for(var M in i)j=i[M],i.hasOwnProperty(M)&&j!=null&&!r.hasOwnProperty(M)&&Et(t,e,M,null,r,j);for(B in r)j=r[B],R=i[B],!r.hasOwnProperty(B)||j===R||j==null&&R==null||Et(t,e,B,j,r,R)}var gu=null,yu=null;function cl(t){return t.nodeType===9?t:t.ownerDocument}function Zp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function vu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xu=null;function Ix(){var t=window.event;return t&&t.type==="popstate"?t===xu?!1:(xu=t,!0):(xu=null,!1)}var Jp=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,$p=typeof Promise=="function"?Promise:void 0,eb=typeof queueMicrotask=="function"?queueMicrotask:typeof $p<"u"?function(t){return $p.resolve(null).then(t).catch(nb)}:Jp;function nb(t){setTimeout(function(){throw t})}function Kn(t){return t==="head"}function Wp(t,e){var i=e,r=0,o=0;do{var c=i.nextSibling;if(t.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(0<r&&8>r){i=r;var m=t.ownerDocument;if(i&1&&Dr(m.documentElement),i&2&&Dr(m.body),i&4)for(i=m.head,Dr(i),m=i.firstChild;m;){var v=m.nextSibling,w=m.nodeName;m[qa]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||i.removeChild(m),m=v}}if(o===0){t.removeChild(c),Br(e);return}o--}else i==="$"||i==="$?"||i==="$!"?o++:r=i.charCodeAt(0)-48;else r=0;i=c}while(i);Br(e)}function bu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":bu(i),Eo(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function ib(t,e,i,r){for(;t.nodeType===1;){var o=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[qa])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==o.rel||t.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ze(t.nextSibling),t===null)break}return null}function ab(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ze(t.nextSibling),t===null))return null;return t}function Su(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function rb(t,e){var i=t.ownerDocument;if(t.data!=="$?"||i.readyState==="complete")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ze(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var wu=null;function Ip(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return t;e--}else i==="/$"&&e++}t=t.previousSibling}return null}function t0(t,e,i){switch(e=cl(i),t){case"html":if(t=e.documentElement,!t)throw Error(l(452));return t;case"head":if(t=e.head,!t)throw Error(l(453));return t;case"body":if(t=e.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}function Dr(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Eo(t)}var He=new Map,e0=new Set;function ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Tn=G.d;G.d={f:sb,r:lb,D:ob,C:cb,L:ub,m:fb,X:mb,S:db,M:hb};function sb(){var t=Tn.f(),e=el();return t||e}function lb(t){var e=Vi(t);e!==null&&e.tag===5&&e.type==="form"?Sh(e):Tn.r(t)}var ma=typeof document>"u"?null:document;function n0(t,e,i){var r=ma;if(r&&typeof e=="string"&&e){var o=Ve(e);o='link[rel="'+t+'"][href="'+o+'"]',typeof i=="string"&&(o+='[crossorigin="'+i+'"]'),e0.has(o)||(e0.add(o),t={rel:t,crossOrigin:i,href:e},r.querySelector(o)===null&&(e=r.createElement("link"),ae(e,"link",t),$t(e),r.head.appendChild(e)))}}function ob(t){Tn.D(t),n0("dns-prefetch",t,null)}function cb(t,e){Tn.C(t,e),n0("preconnect",t,e)}function ub(t,e,i){Tn.L(t,e,i);var r=ma;if(r&&t&&e){var o='link[rel="preload"][as="'+Ve(e)+'"]';e==="image"&&i&&i.imageSrcSet?(o+='[imagesrcset="'+Ve(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(o+='[imagesizes="'+Ve(i.imageSizes)+'"]')):o+='[href="'+Ve(t)+'"]';var c=o;switch(e){case"style":c=ha(t);break;case"script":c=pa(t)}He.has(c)||(t=y({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),He.set(c,t),r.querySelector(o)!==null||e==="style"&&r.querySelector(Cr(c))||e==="script"&&r.querySelector(jr(c))||(e=r.createElement("link"),ae(e,"link",t),$t(e),r.head.appendChild(e)))}}function fb(t,e){Tn.m(t,e);var i=ma;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+Ve(r)+'"][href="'+Ve(t)+'"]',c=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=pa(t)}if(!He.has(c)&&(t=y({rel:"modulepreload",href:t},e),He.set(c,t),i.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(jr(c)))return}r=i.createElement("link"),ae(r,"link",t),$t(r),i.head.appendChild(r)}}}function db(t,e,i){Tn.S(t,e,i);var r=ma;if(r&&t){var o=Ni(r).hoistableStyles,c=ha(t);e=e||"default";var m=o.get(c);if(!m){var v={loading:0,preload:null};if(m=r.querySelector(Cr(c)))v.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},i),(i=He.get(c))&&Tu(t,i);var w=m=r.createElement("link");$t(w),ae(w,"link",t),w._p=new Promise(function(D,N){w.onload=D,w.onerror=N}),w.addEventListener("load",function(){v.loading|=1}),w.addEventListener("error",function(){v.loading|=2}),v.loading|=4,fl(m,e,r)}m={type:"stylesheet",instance:m,count:1,state:v},o.set(c,m)}}}function mb(t,e){Tn.X(t,e);var i=ma;if(i&&t){var r=Ni(i).hoistableScripts,o=pa(t),c=r.get(o);c||(c=i.querySelector(jr(o)),c||(t=y({src:t,async:!0},e),(e=He.get(o))&&Au(t,e),c=i.createElement("script"),$t(c),ae(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function hb(t,e){Tn.M(t,e);var i=ma;if(i&&t){var r=Ni(i).hoistableScripts,o=pa(t),c=r.get(o);c||(c=i.querySelector(jr(o)),c||(t=y({src:t,async:!0,type:"module"},e),(e=He.get(o))&&Au(t,e),c=i.createElement("script"),$t(c),ae(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function i0(t,e,i,r){var o=(o=at.current)?ul(o):null;if(!o)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=ha(i.href),i=Ni(o).hoistableStyles,r=i.get(e),r||(r={type:"style",instance:null,count:0,state:null},i.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=ha(i.href);var c=Ni(o).hoistableStyles,m=c.get(t);if(m||(o=o.ownerDocument||o,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,m),(c=o.querySelector(Cr(t)))&&!c._p&&(m.instance=c,m.state.loading=5),He.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},He.set(t,i),c||pb(o,t,i,m.state))),e&&r===null)throw Error(l(528,""));return m}if(e&&r!==null)throw Error(l(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=pa(i),i=Ni(o).hoistableScripts,r=i.get(e),r||(r={type:"script",instance:null,count:0,state:null},i.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function ha(t){return'href="'+Ve(t)+'"'}function Cr(t){return'link[rel="stylesheet"]['+t+"]"}function a0(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function pb(t,e,i,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),ae(e,"link",i),$t(e),t.head.appendChild(e))}function pa(t){return'[src="'+Ve(t)+'"]'}function jr(t){return"script[async]"+t}function r0(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Ve(i.href)+'"]');if(r)return e.instance=r,$t(r),r;var o=y({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),$t(r),ae(r,"style",o),fl(r,i.precedence,t),e.instance=r;case"stylesheet":o=ha(i.href);var c=t.querySelector(Cr(o));if(c)return e.state.loading|=4,e.instance=c,$t(c),c;r=a0(i),(o=He.get(o))&&Tu(r,o),c=(t.ownerDocument||t).createElement("link"),$t(c);var m=c;return m._p=new Promise(function(v,w){m.onload=v,m.onerror=w}),ae(c,"link",r),e.state.loading|=4,fl(c,i.precedence,t),e.instance=c;case"script":return c=pa(i.src),(o=t.querySelector(jr(c)))?(e.instance=o,$t(o),o):(r=i,(o=He.get(c))&&(r=y({},i),Au(r,o)),t=t.ownerDocument||t,o=t.createElement("script"),$t(o),ae(o,"link",r),t.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,fl(r,i.precedence,t));return e.instance}function fl(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,c=o,m=0;m<r.length;m++){var v=r[m];if(v.dataset.precedence===e)c=v;else if(c!==o)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function Tu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Au(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var dl=null;function s0(t,e,i){if(dl===null){var r=new Map,o=dl=new Map;o.set(i,r)}else o=dl,r=o.get(i),r||(r=new Map,o.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),o=0;o<i.length;o++){var c=i[o];if(!(c[qa]||c[le]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(e)||"";m=t+m;var v=r.get(m);v?v.push(c):r.set(m,[c])}}return r}function l0(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function gb(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function o0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Rr=null;function yb(){}function vb(t,e,i){if(Rr===null)throw Error(l(475));var r=Rr;if(e.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var o=ha(i.href),c=t.querySelector(Cr(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=ml.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=c,$t(c);return}c=t.ownerDocument||t,i=a0(i),(o=He.get(o))&&Tu(i,o),c=c.createElement("link"),$t(c);var m=c;m._p=new Promise(function(v,w){m.onload=v,m.onerror=w}),ae(c,"link",i),e.instance=c}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=ml.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function xb(){if(Rr===null)throw Error(l(475));var t=Rr;return t.stylesheets&&t.count===0&&Eu(t,t.stylesheets),0<t.count?function(e){var i=setTimeout(function(){if(t.stylesheets&&Eu(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(i)}}:null}function ml(){if(this.count--,this.count===0){if(this.stylesheets)Eu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hl=null;function Eu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hl=new Map,e.forEach(bb,t),hl=null,ml.call(t))}function bb(t,e){if(!(e.state.loading&4)){var i=hl.get(t);if(i)var r=i.get(null);else{i=new Map,hl.set(t,i);for(var o=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var m=o[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(i.set(m.dataset.precedence,m),r=m)}r&&i.set(null,r)}o=e.instance,m=o.getAttribute("data-precedence"),c=i.get(m)||r,c===r&&i.set(null,o),i.set(m,o),this.count++,r=ml.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),c?c.parentNode.insertBefore(o,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),e.state.loading|=4}}var Or={$$typeof:k,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Sb(t,e,i,r,o,c,m,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=So(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.hiddenUpdates=So(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function c0(t,e,i,r,o,c,m,v,w,D,N,B){return t=new Sb(t,e,i,m,v,w,D,B),e=1,c===!0&&(e|=24),c=Te(3,null,null,e),t.current=c,c.stateNode=t,e=sc(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:e},uc(c),t}function u0(t){return t?(t=Ki,t):Ki}function f0(t,e,i,r,o,c){o=u0(o),r.context===null?r.context=o:r.pendingContext=o,r=Vn(e),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Nn(t,r,e),i!==null&&(De(i,t,e),or(i,t,e))}function d0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Mu(t,e){d0(t,e),(t=t.alternate)&&d0(t,e)}function m0(t){if(t.tag===13){var e=Pi(t,67108864);e!==null&&De(e,t,67108864),Mu(t,67108864)}}var pl=!0;function wb(t,e,i,r){var o=V.T;V.T=null;var c=G.p;try{G.p=2,zu(t,e,i,r)}finally{G.p=c,V.T=o}}function Tb(t,e,i,r){var o=V.T;V.T=null;var c=G.p;try{G.p=8,zu(t,e,i,r)}finally{G.p=c,V.T=o}}function zu(t,e,i,r){if(pl){var o=Du(r);if(o===null)hu(t,e,r,gl,i),p0(t,r);else if(Eb(o,t,e,i,r))r.stopPropagation();else if(p0(t,r),e&4&&-1<Ab.indexOf(t)){for(;o!==null;){var c=Vi(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=ri(c.pendingLanes);if(m!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var w=1<<31-Se(m);v.entanglements[1]|=w,m&=~w}nn(c),(wt&6)===0&&(Is=$e()+500,Er(0))}}break;case 13:v=Pi(c,2),v!==null&&De(v,c,2),el(),Mu(c,2)}if(c=Du(r),c===null&&hu(t,e,r,gl,i),c===o)break;o=c}o!==null&&r.stopPropagation()}else hu(t,e,r,null,i)}}function Du(t){return t=Vo(t),Cu(t)}var gl=null;function Cu(t){if(gl=null,t=Oi(t),t!==null){var e=d(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=f(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return gl=t,null}function h0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cv()){case Dd:return 2;case Cd:return 8;case os:case uv:return 32;case jd:return 268435456;default:return 32}default:return 32}}var ju=!1,Qn=null,Zn=null,Fn=null,Vr=new Map,Nr=new Map,Jn=[],Ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p0(t,e){switch(t){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Vr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(e.pointerId)}}function _r(t,e,i,r,o,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[o]},e!==null&&(e=Vi(e),e!==null&&m0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function Eb(t,e,i,r,o){switch(e){case"focusin":return Qn=_r(Qn,t,e,i,r,o),!0;case"dragenter":return Zn=_r(Zn,t,e,i,r,o),!0;case"mouseover":return Fn=_r(Fn,t,e,i,r,o),!0;case"pointerover":var c=o.pointerId;return Vr.set(c,_r(Vr.get(c)||null,t,e,i,r,o)),!0;case"gotpointercapture":return c=o.pointerId,Nr.set(c,_r(Nr.get(c)||null,t,e,i,r,o)),!0}return!1}function g0(t){var e=Oi(t.target);if(e!==null){var i=d(e);if(i!==null){if(e=i.tag,e===13){if(e=f(i),e!==null){t.blockedOn=e,vv(t.priority,function(){if(i.tag===13){var r=ze();r=wo(r);var o=Pi(i,r);o!==null&&De(o,i,r),Mu(i,r)}});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Du(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Oo=r,i.target.dispatchEvent(r),Oo=null}else return e=Vi(i),e!==null&&m0(e),t.blockedOn=i,!1;e.shift()}return!0}function y0(t,e,i){yl(t)&&i.delete(e)}function Mb(){ju=!1,Qn!==null&&yl(Qn)&&(Qn=null),Zn!==null&&yl(Zn)&&(Zn=null),Fn!==null&&yl(Fn)&&(Fn=null),Vr.forEach(y0),Nr.forEach(y0)}function vl(t,e){t.blockedOn===e&&(t.blockedOn=null,ju||(ju=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Mb)))}var xl=null;function v0(t){xl!==t&&(xl=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){xl===t&&(xl=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],o=t[e+2];if(typeof r!="function"){if(Cu(r||i)===null)continue;break}var c=Vi(i);c!==null&&(t.splice(e,3),e-=3,Cc(c,{pending:!0,data:o,method:i.method,action:r},r,o))}}))}function Br(t){function e(w){return vl(w,t)}Qn!==null&&vl(Qn,t),Zn!==null&&vl(Zn,t),Fn!==null&&vl(Fn,t),Vr.forEach(e),Nr.forEach(e);for(var i=0;i<Jn.length;i++){var r=Jn[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Jn.length&&(i=Jn[0],i.blockedOn===null);)g0(i),i.blockedOn===null&&Jn.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var o=i[r],c=i[r+1],m=o[he]||null;if(typeof c=="function")m||v0(i);else if(m){var v=null;if(c&&c.hasAttribute("formAction")){if(o=c,m=c[he]||null)v=m.formAction;else if(Cu(o)!==null)continue}else v=m.action;typeof v=="function"?i[r+1]=v:(i.splice(r,3),r-=3),v0(i)}}}function Ru(t){this._internalRoot=t}bl.prototype.render=Ru.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(l(409));var i=e.current,r=ze();f0(i,r,t,e,null,null)},bl.prototype.unmount=Ru.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;f0(t.current,2,null,t,null,null),el(),e[Ri]=null}};function bl(t){this._internalRoot=t}bl.prototype.unstable_scheduleHydration=function(t){if(t){var e=_d();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Jn.length&&e!==0&&e<Jn[i].priority;i++);Jn.splice(i,0,t),i===0&&g0(t)}};var x0=a.version;if(x0!=="19.1.1")throw Error(l(527,x0,"19.1.1"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=h(e),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var zb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{Ha=Sl.inject(zb),be=Sl}catch{}}return kr.createRoot=function(t,e){if(!u(t))throw Error(l(299));var i=!1,r="",o=_h,c=Bh,m=Uh,v=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(m=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(v=e.unstable_transitionCallbacks)),e=c0(t,1,!1,null,null,i,r,o,c,m,v,null),t[Ri]=e.current,mu(t),new Ru(e)},kr.hydrateRoot=function(t,e,i){if(!u(t))throw Error(l(299));var r=!1,o="",c=_h,m=Bh,v=Uh,w=null,D=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks),i.formState!==void 0&&(D=i.formState)),e=c0(t,1,!0,e,i??null,r,o,c,m,v,w,D),e.context=u0(null),i=e.current,r=ze(),r=wo(r),o=Vn(r),o.callback=null,Nn(i,o,r),i=r,e.current.lanes=i,Ga(e,i),nn(e),t[Ri]=e.current,mu(t),new bl(e)},kr.version="19.1.1",kr}var C0;function kb(){if(C0)return Nu.exports;C0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Nu.exports=Ub(),Nu.exports}var Lb=kb(),ue=function(){return ue=Object.assign||function(a){for(var s,l=1,u=arguments.length;l<u;l++){s=arguments[l];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(a[d]=s[d])}return a},ue.apply(this,arguments)};function Fr(n,a,s){if(s||arguments.length===2)for(var l=0,u=a.length,d;l<u;l++)(d||!(l in a))&&(d||(d=Array.prototype.slice.call(a,0,l)),d[l]=a[l]);return n.concat(d||Array.prototype.slice.call(a))}var Ct="-ms-",qr="-moz-",St="-webkit-",iy="comm",lo="rule",Gf="decl",Hb="@import",ay="@keyframes",Yb="@layer",ry=Math.abs,qf=String.fromCharCode,cf=Object.assign;function Gb(n,a){return ee(n,0)^45?(((a<<2^ee(n,0))<<2^ee(n,1))<<2^ee(n,2))<<2^ee(n,3):0}function sy(n){return n.trim()}function An(n,a){return(n=a.exec(n))?n[0]:n}function ut(n,a,s){return n.replace(a,s)}function ql(n,a,s){return n.indexOf(a,s)}function ee(n,a){return n.charCodeAt(a)|0}function Ca(n,a,s){return n.slice(a,s)}function an(n){return n.length}function ly(n){return n.length}function Yr(n,a){return a.push(n),n}function qb(n,a){return n.map(a).join("")}function j0(n,a){return n.filter(function(s){return!An(s,a)})}var oo=1,ja=1,oy=0,Xe=0,Qt=0,Ba="";function co(n,a,s,l,u,d,f,p){return{value:n,root:a,parent:s,type:l,props:u,children:d,line:oo,column:ja,length:f,return:"",siblings:p}}function Wn(n,a){return cf(co("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},a)}function ga(n){for(;n.root;)n=Wn(n.root,{children:[n]});Yr(n,n.siblings)}function Xb(){return Qt}function Pb(){return Qt=Xe>0?ee(Ba,--Xe):0,ja--,Qt===10&&(ja=1,oo--),Qt}function Je(){return Qt=Xe<oy?ee(Ba,Xe++):0,ja++,Qt===10&&(ja=1,oo++),Qt}function Di(){return ee(Ba,Xe)}function Xl(){return Xe}function uo(n,a){return Ca(Ba,n,a)}function uf(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kb(n){return oo=ja=1,oy=an(Ba=n),Xe=0,[]}function Qb(n){return Ba="",n}function ku(n){return sy(uo(Xe-1,ff(n===91?n+2:n===40?n+1:n)))}function Zb(n){for(;(Qt=Di())&&Qt<33;)Je();return uf(n)>2||uf(Qt)>3?"":" "}function Fb(n,a){for(;--a&&Je()&&!(Qt<48||Qt>102||Qt>57&&Qt<65||Qt>70&&Qt<97););return uo(n,Xl()+(a<6&&Di()==32&&Je()==32))}function ff(n){for(;Je();)switch(Qt){case n:return Xe;case 34:case 39:n!==34&&n!==39&&ff(Qt);break;case 40:n===41&&ff(n);break;case 92:Je();break}return Xe}function Jb(n,a){for(;Je()&&n+Qt!==57;)if(n+Qt===84&&Di()===47)break;return"/*"+uo(a,Xe-1)+"*"+qf(n===47?n:Je())}function $b(n){for(;!uf(Di());)Je();return uo(n,Xe)}function Wb(n){return Qb(Pl("",null,null,null,[""],n=Kb(n),0,[0],n))}function Pl(n,a,s,l,u,d,f,p,h){for(var g=0,y=0,b=f,S=0,C=0,O=0,H=1,P=1,Y=1,q=0,k="",$=u,L=d,K=l,X=k;P;)switch(O=q,q=Je()){case 40:if(O!=108&&ee(X,b-1)==58){ql(X+=ut(ku(q),"&","&\f"),"&\f",ry(g?p[g-1]:0))!=-1&&(Y=-1);break}case 34:case 39:case 91:X+=ku(q);break;case 9:case 10:case 13:case 32:X+=Zb(O);break;case 92:X+=Fb(Xl()-1,7);continue;case 47:switch(Di()){case 42:case 47:Yr(Ib(Jb(Je(),Xl()),a,s,h),h);break;default:X+="/"}break;case 123*H:p[g++]=an(X)*Y;case 125*H:case 59:case 0:switch(q){case 0:case 125:P=0;case 59+y:Y==-1&&(X=ut(X,/\f/g,"")),C>0&&an(X)-b&&Yr(C>32?O0(X+";",l,s,b-1,h):O0(ut(X," ","")+";",l,s,b-2,h),h);break;case 59:X+=";";default:if(Yr(K=R0(X,a,s,g,y,u,p,k,$=[],L=[],b,d),d),q===123)if(y===0)Pl(X,a,K,K,$,d,b,p,L);else switch(S===99&&ee(X,3)===110?100:S){case 100:case 108:case 109:case 115:Pl(n,K,K,l&&Yr(R0(n,K,K,0,0,u,p,k,u,$=[],b,L),L),u,L,b,p,l?$:L);break;default:Pl(X,K,K,K,[""],L,0,p,L)}}g=y=C=0,H=Y=1,k=X="",b=f;break;case 58:b=1+an(X),C=O;default:if(H<1){if(q==123)--H;else if(q==125&&H++==0&&Pb()==125)continue}switch(X+=qf(q),q*H){case 38:Y=y>0?1:(X+="\f",-1);break;case 44:p[g++]=(an(X)-1)*Y,Y=1;break;case 64:Di()===45&&(X+=ku(Je())),S=Di(),y=b=an(k=X+=$b(Xl())),q++;break;case 45:O===45&&an(X)==2&&(H=0)}}return d}function R0(n,a,s,l,u,d,f,p,h,g,y,b){for(var S=u-1,C=u===0?d:[""],O=ly(C),H=0,P=0,Y=0;H<l;++H)for(var q=0,k=Ca(n,S+1,S=ry(P=f[H])),$=n;q<O;++q)($=sy(P>0?C[q]+" "+k:ut(k,/&\f/g,C[q])))&&(h[Y++]=$);return co(n,a,s,u===0?lo:p,h,g,y,b)}function Ib(n,a,s,l){return co(n,a,s,iy,qf(Xb()),Ca(n,2,-2),0,l)}function O0(n,a,s,l,u){return co(n,a,s,Gf,Ca(n,0,l),Ca(n,l+1,-1),l,u)}function cy(n,a,s){switch(Gb(n,a)){case 5103:return St+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return St+n+n;case 4789:return qr+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return St+n+qr+n+Ct+n+n;case 5936:switch(ee(n,a+11)){case 114:return St+n+Ct+ut(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return St+n+Ct+ut(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return St+n+Ct+ut(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return St+n+Ct+n+n;case 6165:return St+n+Ct+"flex-"+n+n;case 5187:return St+n+ut(n,/(\w+).+(:[^]+)/,St+"box-$1$2"+Ct+"flex-$1$2")+n;case 5443:return St+n+Ct+"flex-item-"+ut(n,/flex-|-self/g,"")+(An(n,/flex-|baseline/)?"":Ct+"grid-row-"+ut(n,/flex-|-self/g,""))+n;case 4675:return St+n+Ct+"flex-line-pack"+ut(n,/align-content|flex-|-self/g,"")+n;case 5548:return St+n+Ct+ut(n,"shrink","negative")+n;case 5292:return St+n+Ct+ut(n,"basis","preferred-size")+n;case 6060:return St+"box-"+ut(n,"-grow","")+St+n+Ct+ut(n,"grow","positive")+n;case 4554:return St+ut(n,/([^-])(transform)/g,"$1"+St+"$2")+n;case 6187:return ut(ut(ut(n,/(zoom-|grab)/,St+"$1"),/(image-set)/,St+"$1"),n,"")+n;case 5495:case 3959:return ut(n,/(image-set\([^]*)/,St+"$1$`$1");case 4968:return ut(ut(n,/(.+:)(flex-)?(.*)/,St+"box-pack:$3"+Ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+St+n+n;case 4200:if(!An(n,/flex-|baseline/))return Ct+"grid-column-align"+Ca(n,a)+n;break;case 2592:case 3360:return Ct+ut(n,"template-","")+n;case 4384:case 3616:return s&&s.some(function(l,u){return a=u,An(l.props,/grid-\w+-end/)})?~ql(n+(s=s[a].value),"span",0)?n:Ct+ut(n,"-start","")+n+Ct+"grid-row-span:"+(~ql(s,"span",0)?An(s,/\d+/):+An(s,/\d+/)-+An(n,/\d+/))+";":Ct+ut(n,"-start","")+n;case 4896:case 4128:return s&&s.some(function(l){return An(l.props,/grid-\w+-start/)})?n:Ct+ut(ut(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ut(n,/(.+)-inline(.+)/,St+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(an(n)-1-a>6)switch(ee(n,a+1)){case 109:if(ee(n,a+4)!==45)break;case 102:return ut(n,/(.+:)(.+)-([^]+)/,"$1"+St+"$2-$3$1"+qr+(ee(n,a+3)==108?"$3":"$2-$3"))+n;case 115:return~ql(n,"stretch",0)?cy(ut(n,"stretch","fill-available"),a,s)+n:n}break;case 5152:case 5920:return ut(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,u,d,f,p,h,g){return Ct+u+":"+d+g+(f?Ct+u+"-span:"+(p?h:+h-+d)+g:"")+n});case 4949:if(ee(n,a+6)===121)return ut(n,":",":"+St)+n;break;case 6444:switch(ee(n,ee(n,14)===45?18:11)){case 120:return ut(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+St+(ee(n,14)===45?"inline-":"")+"box$3$1"+St+"$2$3$1"+Ct+"$2box$3")+n;case 100:return ut(n,":",":"+Ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ut(n,"scroll-","scroll-snap-")+n}return n}function Wl(n,a){for(var s="",l=0;l<n.length;l++)s+=a(n[l],l,n,a)||"";return s}function t5(n,a,s,l){switch(n.type){case Yb:if(n.children.length)break;case Hb:case Gf:return n.return=n.return||n.value;case iy:return"";case ay:return n.return=n.value+"{"+Wl(n.children,l)+"}";case lo:if(!an(n.value=n.props.join(",")))return""}return an(s=Wl(n.children,l))?n.return=n.value+"{"+s+"}":""}function e5(n){var a=ly(n);return function(s,l,u,d){for(var f="",p=0;p<a;p++)f+=n[p](s,l,u,d)||"";return f}}function n5(n){return function(a){a.root||(a=a.return)&&n(a)}}function i5(n,a,s,l){if(n.length>-1&&!n.return)switch(n.type){case Gf:n.return=cy(n.value,n.length,s);return;case ay:return Wl([Wn(n,{value:ut(n.value,"@","@"+St)})],l);case lo:if(n.length)return qb(s=n.props,function(u){switch(An(u,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ga(Wn(n,{props:[ut(u,/:(read-\w+)/,":"+qr+"$1")]})),ga(Wn(n,{props:[u]})),cf(n,{props:j0(s,l)});break;case"::placeholder":ga(Wn(n,{props:[ut(u,/:(plac\w+)/,":"+St+"input-$1")]})),ga(Wn(n,{props:[ut(u,/:(plac\w+)/,":"+qr+"$1")]})),ga(Wn(n,{props:[ut(u,/:(plac\w+)/,Ct+"input-$1")]})),ga(Wn(n,{props:[u]})),cf(n,{props:j0(s,l)});break}return""})}}var a5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},Ra=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",uy="active",fy="data-styled-version",fo="6.1.19",Xf=`/*!sc*/
`,Il=typeof window<"u"&&typeof document<"u",r5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),s5={},mo=Object.freeze([]),Oa=Object.freeze({});function dy(n,a,s){return s===void 0&&(s=Oa),n.theme!==s.theme&&n.theme||a||s.theme}var my=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),l5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,o5=/(^-|-$)/g;function V0(n){return n.replace(l5,"-").replace(o5,"")}var c5=/(a)(d)/gi,wl=52,N0=function(n){return String.fromCharCode(n+(n>25?39:97))};function df(n){var a,s="";for(a=Math.abs(n);a>wl;a=a/wl|0)s=N0(a%wl)+s;return(N0(a%wl)+s).replace(c5,"$1-$2")}var Lu,hy=5381,wa=function(n,a){for(var s=a.length;s;)n=33*n^a.charCodeAt(--s);return n},py=function(n){return wa(hy,n)};function gy(n){return df(py(n)>>>0)}function u5(n){return n.displayName||n.name||"Component"}function Hu(n){return typeof n=="string"&&!0}var yy=typeof Symbol=="function"&&Symbol.for,vy=yy?Symbol.for("react.memo"):60115,f5=yy?Symbol.for("react.forward_ref"):60112,d5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},m5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h5=((Lu={})[f5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lu[vy]=xy,Lu);function _0(n){return("type"in(a=n)&&a.type.$$typeof)===vy?xy:"$$typeof"in n?h5[n.$$typeof]:d5;var a}var p5=Object.defineProperty,g5=Object.getOwnPropertyNames,B0=Object.getOwnPropertySymbols,y5=Object.getOwnPropertyDescriptor,v5=Object.getPrototypeOf,U0=Object.prototype;function by(n,a,s){if(typeof a!="string"){if(U0){var l=v5(a);l&&l!==U0&&by(n,l,s)}var u=g5(a);B0&&(u=u.concat(B0(a)));for(var d=_0(n),f=_0(a),p=0;p<u.length;++p){var h=u[p];if(!(h in m5||s&&s[h]||f&&h in f||d&&h in d)){var g=y5(a,h);try{p5(n,h,g)}catch{}}}}return n}function Va(n){return typeof n=="function"}function Pf(n){return typeof n=="object"&&"styledComponentId"in n}function Ei(n,a){return n&&a?"".concat(n," ").concat(a):n||a||""}function mf(n,a){if(n.length===0)return"";for(var s=n[0],l=1;l<n.length;l++)s+=n[l];return s}function Jr(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function hf(n,a,s){if(s===void 0&&(s=!1),!s&&!Jr(n)&&!Array.isArray(n))return a;if(Array.isArray(a))for(var l=0;l<a.length;l++)n[l]=hf(n[l],a[l]);else if(Jr(a))for(var l in a)n[l]=hf(n[l],a[l]);return n}function Kf(n,a){Object.defineProperty(n,"toString",{value:a})}function is(n){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var x5=function(){function n(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return n.prototype.indexOfGroup=function(a){for(var s=0,l=0;l<a;l++)s+=this.groupSizes[l];return s},n.prototype.insertRules=function(a,s){if(a>=this.groupSizes.length){for(var l=this.groupSizes,u=l.length,d=u;a>=d;)if((d<<=1)<0)throw is(16,"".concat(a));this.groupSizes=new Uint32Array(d),this.groupSizes.set(l),this.length=d;for(var f=u;f<d;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(a+1),h=(f=0,s.length);f<h;f++)this.tag.insertRule(p,s[f])&&(this.groupSizes[a]++,p++)},n.prototype.clearGroup=function(a){if(a<this.length){var s=this.groupSizes[a],l=this.indexOfGroup(a),u=l+s;this.groupSizes[a]=0;for(var d=l;d<u;d++)this.tag.deleteRule(l)}},n.prototype.getGroup=function(a){var s="";if(a>=this.length||this.groupSizes[a]===0)return s;for(var l=this.groupSizes[a],u=this.indexOfGroup(a),d=u+l,f=u;f<d;f++)s+="".concat(this.tag.getRule(f)).concat(Xf);return s},n}(),Kl=new Map,to=new Map,Ql=1,Tl=function(n){if(Kl.has(n))return Kl.get(n);for(;to.has(Ql);)Ql++;var a=Ql++;return Kl.set(n,a),to.set(a,n),a},b5=function(n,a){Ql=a+1,Kl.set(n,a),to.set(a,n)},S5="style[".concat(Ra,"][").concat(fy,'="').concat(fo,'"]'),w5=new RegExp("^".concat(Ra,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),T5=function(n,a,s){for(var l,u=s.split(","),d=0,f=u.length;d<f;d++)(l=u[d])&&n.registerName(a,l)},A5=function(n,a){for(var s,l=((s=a.textContent)!==null&&s!==void 0?s:"").split(Xf),u=[],d=0,f=l.length;d<f;d++){var p=l[d].trim();if(p){var h=p.match(w5);if(h){var g=0|parseInt(h[1],10),y=h[2];g!==0&&(b5(y,g),T5(n,y,h[3]),n.getTag().insertRules(g,u)),u.length=0}else u.push(p)}}},k0=function(n){for(var a=document.querySelectorAll(S5),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Ra)!==uy&&(A5(n,u),u.parentNode&&u.parentNode.removeChild(u))}};function E5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sy=function(n){var a=document.head,s=n||a,l=document.createElement("style"),u=function(p){var h=Array.from(p.querySelectorAll("style[".concat(Ra,"]")));return h[h.length-1]}(s),d=u!==void 0?u.nextSibling:null;l.setAttribute(Ra,uy),l.setAttribute(fy,fo);var f=E5();return f&&l.setAttribute("nonce",f),s.insertBefore(l,d),l},M5=function(){function n(a){this.element=Sy(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var l=document.styleSheets,u=0,d=l.length;u<d;u++){var f=l[u];if(f.ownerNode===s)return f}throw is(17)}(this.element),this.length=0}return n.prototype.insertRule=function(a,s){try{return this.sheet.insertRule(s,a),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},n.prototype.getRule=function(a){var s=this.sheet.cssRules[a];return s&&s.cssText?s.cssText:""},n}(),z5=function(){function n(a){this.element=Sy(a),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(a,s){if(a<=this.length&&a>=0){var l=document.createTextNode(s);return this.element.insertBefore(l,this.nodes[a]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},n.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},n}(),D5=function(){function n(a){this.rules=[],this.length=0}return n.prototype.insertRule=function(a,s){return a<=this.length&&(this.rules.splice(a,0,s),this.length++,!0)},n.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},n.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},n}(),L0=Il,C5={isServer:!Il,useCSSOMInjection:!r5},eo=function(){function n(a,s,l){a===void 0&&(a=Oa),s===void 0&&(s={});var u=this;this.options=ue(ue({},C5),a),this.gs=s,this.names=new Map(l),this.server=!!a.isServer,!this.server&&Il&&L0&&(L0=!1,k0(this)),Kf(this,function(){return function(d){for(var f=d.getTag(),p=f.length,h="",g=function(b){var S=function(Y){return to.get(Y)}(b);if(S===void 0)return"continue";var C=d.names.get(S),O=f.getGroup(b);if(C===void 0||!C.size||O.length===0)return"continue";var H="".concat(Ra,".g").concat(b,'[id="').concat(S,'"]'),P="";C!==void 0&&C.forEach(function(Y){Y.length>0&&(P+="".concat(Y,","))}),h+="".concat(O).concat(H,'{content:"').concat(P,'"}').concat(Xf)},y=0;y<p;y++)g(y);return h}(u)})}return n.registerId=function(a){return Tl(a)},n.prototype.rehydrate=function(){!this.server&&Il&&k0(this)},n.prototype.reconstructWithOptions=function(a,s){return s===void 0&&(s=!0),new n(ue(ue({},this.options),a),this.gs,s&&this.names||void 0)},n.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(a=function(s){var l=s.useCSSOMInjection,u=s.target;return s.isServer?new D5(u):l?new M5(u):new z5(u)}(this.options),new x5(a)));var a},n.prototype.hasNameForId=function(a,s){return this.names.has(a)&&this.names.get(a).has(s)},n.prototype.registerName=function(a,s){if(Tl(a),this.names.has(a))this.names.get(a).add(s);else{var l=new Set;l.add(s),this.names.set(a,l)}},n.prototype.insertRules=function(a,s,l){this.registerName(a,s),this.getTag().insertRules(Tl(a),l)},n.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},n.prototype.clearRules=function(a){this.getTag().clearGroup(Tl(a)),this.clearNames(a)},n.prototype.clearTag=function(){this.tag=void 0},n}(),j5=/&/g,R5=/^\s*\/\/.*$/gm;function wy(n,a){return n.map(function(s){return s.type==="rule"&&(s.value="".concat(a," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(a," ")),s.props=s.props.map(function(l){return"".concat(a," ").concat(l)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=wy(s.children,a)),s})}function O5(n){var a,s,l,u=Oa,d=u.options,f=d===void 0?Oa:d,p=u.plugins,h=p===void 0?mo:p,g=function(S,C,O){return O.startsWith(s)&&O.endsWith(s)&&O.replaceAll(s,"").length>0?".".concat(a):S},y=h.slice();y.push(function(S){S.type===lo&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(j5,s).replace(l,g))}),f.prefix&&y.push(i5),y.push(t5);var b=function(S,C,O,H){C===void 0&&(C=""),O===void 0&&(O=""),H===void 0&&(H="&"),a=H,s=C,l=new RegExp("\\".concat(s,"\\b"),"g");var P=S.replace(R5,""),Y=Wb(O||C?"".concat(O," ").concat(C," { ").concat(P," }"):P);f.namespace&&(Y=wy(Y,f.namespace));var q=[];return Wl(Y,e5(y.concat(n5(function(k){return q.push(k)})))),q};return b.hash=h.length?h.reduce(function(S,C){return C.name||is(15),wa(S,C.name)},hy).toString():"",b}var V5=new eo,pf=O5(),Ty=En.createContext({shouldForwardProp:void 0,styleSheet:V5,stylis:pf});Ty.Consumer;En.createContext(void 0);function gf(){return J.useContext(Ty)}var N5=function(){function n(a,s){var l=this;this.inject=function(u,d){d===void 0&&(d=pf);var f=l.name+d.hash;u.hasNameForId(l.id,f)||u.insertRules(l.id,f,d(l.rules,f,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=s,Kf(this,function(){throw is(12,String(l.name))})}return n.prototype.getName=function(a){return a===void 0&&(a=pf),this.name+a.hash},n}(),_5=function(n){return n>="A"&&n<="Z"};function H0(n){for(var a="",s=0;s<n.length;s++){var l=n[s];if(s===1&&l==="-"&&n[0]==="-")return n;_5(l)?a+="-"+l.toLowerCase():a+=l}return a.startsWith("ms-")?"-"+a:a}var Ay=function(n){return n==null||n===!1||n===""},Ey=function(n){var a,s,l=[];for(var u in n){var d=n[u];n.hasOwnProperty(u)&&!Ay(d)&&(Array.isArray(d)&&d.isCss||Va(d)?l.push("".concat(H0(u),":"),d,";"):Jr(d)?l.push.apply(l,Fr(Fr(["".concat(u," {")],Ey(d),!1),["}"],!1)):l.push("".concat(H0(u),": ").concat((a=u,(s=d)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||a in a5||a.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return l};function ti(n,a,s,l){if(Ay(n))return[];if(Pf(n))return[".".concat(n.styledComponentId)];if(Va(n)){if(!Va(d=n)||d.prototype&&d.prototype.isReactComponent||!a)return[n];var u=n(a);return ti(u,a,s,l)}var d;return n instanceof N5?s?(n.inject(s,l),[n.getName(l)]):[n]:Jr(n)?Ey(n):Array.isArray(n)?Array.prototype.concat.apply(mo,n.map(function(f){return ti(f,a,s,l)})):[n.toString()]}function My(n){for(var a=0;a<n.length;a+=1){var s=n[a];if(Va(s)&&!Pf(s))return!1}return!0}var B5=py(fo),U5=function(){function n(a,s,l){this.rules=a,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&My(a),this.componentId=s,this.baseHash=wa(B5,s),this.baseStyle=l,eo.registerId(s)}return n.prototype.generateAndInjectStyles=function(a,s,l){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,s,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))u=Ei(u,this.staticRulesId);else{var d=mf(ti(this.rules,a,s,l)),f=df(wa(this.baseHash,d)>>>0);if(!s.hasNameForId(this.componentId,f)){var p=l(d,".".concat(f),void 0,this.componentId);s.insertRules(this.componentId,f,p)}u=Ei(u,f),this.staticRulesId=f}else{for(var h=wa(this.baseHash,l.hash),g="",y=0;y<this.rules.length;y++){var b=this.rules[y];if(typeof b=="string")g+=b;else if(b){var S=mf(ti(b,a,s,l));h=wa(h,S+y),g+=S}}if(g){var C=df(h>>>0);s.hasNameForId(this.componentId,C)||s.insertRules(this.componentId,C,l(g,".".concat(C),void 0,this.componentId)),u=Ei(u,C)}}return u},n}(),Qf=En.createContext(void 0);Qf.Consumer;var Yu={};function k5(n,a,s){var l=Pf(n),u=n,d=!Hu(n),f=a.attrs,p=f===void 0?mo:f,h=a.componentId,g=h===void 0?function($,L){var K=typeof $!="string"?"sc":V0($);Yu[K]=(Yu[K]||0)+1;var X="".concat(K,"-").concat(gy(fo+K+Yu[K]));return L?"".concat(L,"-").concat(X):X}(a.displayName,a.parentComponentId):h,y=a.displayName,b=y===void 0?function($){return Hu($)?"styled.".concat($):"Styled(".concat(u5($),")")}(n):y,S=a.displayName&&a.componentId?"".concat(V0(a.displayName),"-").concat(a.componentId):a.componentId||g,C=l&&u.attrs?u.attrs.concat(p).filter(Boolean):p,O=a.shouldForwardProp;if(l&&u.shouldForwardProp){var H=u.shouldForwardProp;if(a.shouldForwardProp){var P=a.shouldForwardProp;O=function($,L){return H($,L)&&P($,L)}}else O=H}var Y=new U5(s,S,l?u.componentStyle:void 0);function q($,L){return function(K,X,I){var gt=K.attrs,jt=K.componentStyle,qt=K.defaultProps,kt=K.foldedComponentIds,Pe=K.styledComponentId,je=K.target,Lt=En.useContext(Qf),V=gf(),G=K.shouldForwardProp||V.shouldForwardProp,W=dy(X,Lt,qt)||Oa,ot=function(mt,at,Jt){for(var bt,se=ue(ue({},at),{className:void 0,theme:Jt}),ai=0;ai<mt.length;ai+=1){var on=Va(bt=mt[ai])?bt(se):bt;for(var Re in on)se[Re]=Re==="className"?Ei(se[Re],on[Re]):Re==="style"?ue(ue({},se[Re]),on[Re]):on[Re]}return at.className&&(se.className=Ei(se.className,at.className)),se}(gt,X,W),T=ot.as||je,U={};for(var Z in ot)ot[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&ot.theme===W||(Z==="forwardedAs"?U.as=ot.forwardedAs:G&&!G(Z,T)||(U[Z]=ot[Z]));var F=function(mt,at){var Jt=gf(),bt=mt.generateAndInjectStyles(at,Jt.styleSheet,Jt.stylis);return bt}(jt,ot),nt=Ei(kt,Pe);return F&&(nt+=" "+F),ot.className&&(nt+=" "+ot.className),U[Hu(T)&&!my.has(T)?"class":"className"]=nt,I&&(U.ref=I),J.createElement(T,U)}(k,$,L)}q.displayName=b;var k=En.forwardRef(q);return k.attrs=C,k.componentStyle=Y,k.displayName=b,k.shouldForwardProp=O,k.foldedComponentIds=l?Ei(u.foldedComponentIds,u.styledComponentId):"",k.styledComponentId=S,k.target=l?u.target:n,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=l?function(L){for(var K=[],X=1;X<arguments.length;X++)K[X-1]=arguments[X];for(var I=0,gt=K;I<gt.length;I++)hf(L,gt[I],!0);return L}({},u.defaultProps,$):$}}),Kf(k,function(){return".".concat(k.styledComponentId)}),d&&by(k,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function Y0(n,a){for(var s=[n[0]],l=0,u=a.length;l<u;l+=1)s.push(a[l],n[l+1]);return s}var G0=function(n){return Object.assign(n,{isCss:!0})};function zy(n){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];if(Va(n)||Jr(n))return G0(ti(Y0(mo,Fr([n],a,!0))));var l=n;return a.length===0&&l.length===1&&typeof l[0]=="string"?ti(l):G0(ti(Y0(l,a)))}function yf(n,a,s){if(s===void 0&&(s=Oa),!a)throw is(1,a);var l=function(u){for(var d=[],f=1;f<arguments.length;f++)d[f-1]=arguments[f];return n(a,s,zy.apply(void 0,Fr([u],d,!1)))};return l.attrs=function(u){return yf(n,a,ue(ue({},s),{attrs:Array.prototype.concat(s.attrs,u).filter(Boolean)}))},l.withConfig=function(u){return yf(n,a,ue(ue({},s),u))},l}var Dy=function(n){return yf(k5,n)},E=Dy;my.forEach(function(n){E[n]=Dy(n)});var L5=function(){function n(a,s){this.rules=a,this.componentId=s,this.isStatic=My(a),eo.registerId(this.componentId+1)}return n.prototype.createStyles=function(a,s,l,u){var d=u(mf(ti(this.rules,s,l,u)),""),f=this.componentId+a;l.insertRules(f,f,d)},n.prototype.removeStyles=function(a,s){s.clearRules(this.componentId+a)},n.prototype.renderStyles=function(a,s,l,u){a>2&&eo.registerId(this.componentId+a),this.removeStyles(a,l),this.createStyles(a,s,l,u)},n}();function H5(n){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];var l=zy.apply(void 0,Fr([n],a,!1)),u="sc-global-".concat(gy(JSON.stringify(l))),d=new L5(l,u),f=function(h){var g=gf(),y=En.useContext(Qf),b=En.useRef(g.styleSheet.allocateGSInstance(u)).current;return g.styleSheet.server&&p(b,h,g.styleSheet,y,g.stylis),En.useLayoutEffect(function(){if(!g.styleSheet.server)return p(b,h,g.styleSheet,y,g.stylis),function(){return d.removeStyles(b,g.styleSheet)}},[b,h,g.styleSheet,y,g.stylis]),null};function p(h,g,y,b,S){if(d.isStatic)d.renderStyles(h,s5,y,S);else{var C=ue(ue({},g),{theme:dy(g,b,f.defaultProps)});d.renderStyles(h,C,y,S)}}return En.memo(f)}const Zf=J.createContext({});function Ff(n){const a=J.useRef(null);return a.current===null&&(a.current=n()),a.current}const Jf=typeof window<"u",Cy=Jf?J.useLayoutEffect:J.useEffect,ho=J.createContext(null);function $f(n,a){n.indexOf(a)===-1&&n.push(a)}function Wf(n,a){const s=n.indexOf(a);s>-1&&n.splice(s,1)}const Mn=(n,a,s)=>s>a?a:s<n?n:s;let If=()=>{};const zn={},jy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Ry(n){return typeof n=="object"&&n!==null}const Oy=n=>/^0[^.\s]+$/u.test(n);function td(n){let a;return()=>(a===void 0&&(a=n()),a)}const qe=n=>n,Y5=(n,a)=>s=>a(n(s)),as=(...n)=>n.reduce(Y5),$r=(n,a,s)=>{const l=a-n;return l===0?1:(s-n)/l};class ed{constructor(){this.subscriptions=[]}add(a){return $f(this.subscriptions,a),()=>Wf(this.subscriptions,a)}notify(a,s,l){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](a,s,l);else for(let d=0;d<u;d++){const f=this.subscriptions[d];f&&f(a,s,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const rn=n=>n*1e3,sn=n=>n/1e3;function Vy(n,a){return a?n*(1e3/a):0}const Ny=(n,a,s)=>(((1-3*s+3*a)*n+(3*s-6*a))*n+3*a)*n,G5=1e-7,q5=12;function X5(n,a,s,l,u){let d,f,p=0;do f=a+(s-a)/2,d=Ny(f,l,u)-n,d>0?s=f:a=f;while(Math.abs(d)>G5&&++p<q5);return f}function rs(n,a,s,l){if(n===a&&s===l)return qe;const u=d=>X5(d,0,1,n,s);return d=>d===0||d===1?d:Ny(u(d),a,l)}const _y=n=>a=>a<=.5?n(2*a)/2:(2-n(2*(1-a)))/2,By=n=>a=>1-n(1-a),Uy=rs(.33,1.53,.69,.99),nd=By(Uy),ky=_y(nd),Ly=n=>(n*=2)<1?.5*nd(n):.5*(2-Math.pow(2,-10*(n-1))),id=n=>1-Math.sin(Math.acos(n)),Hy=By(id),Yy=_y(id),P5=rs(.42,0,1,1),K5=rs(0,0,.58,1),Gy=rs(.42,0,.58,1),Q5=n=>Array.isArray(n)&&typeof n[0]!="number",qy=n=>Array.isArray(n)&&typeof n[0]=="number",Z5={linear:qe,easeIn:P5,easeInOut:Gy,easeOut:K5,circIn:id,circInOut:Yy,circOut:Hy,backIn:nd,backInOut:ky,backOut:Uy,anticipate:Ly},F5=n=>typeof n=="string",q0=n=>{if(qy(n)){If(n.length===4);const[a,s,l,u]=n;return rs(a,s,l,u)}else if(F5(n))return Z5[n];return n},Al=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function J5(n,a){let s=new Set,l=new Set,u=!1,d=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(y){f.has(y)&&(g.schedule(y),n()),y(p)}const g={schedule:(y,b=!1,S=!1)=>{const O=S&&u?s:l;return b&&f.add(y),O.has(y)||O.add(y),y},cancel:y=>{l.delete(y),f.delete(y)},process:y=>{if(p=y,u){d=!0;return}u=!0,[s,l]=[l,s],s.forEach(h),s.clear(),u=!1,d&&(d=!1,g.process(y))}};return g}const $5=40;function Xy(n,a){let s=!1,l=!0;const u={delta:0,timestamp:0,isProcessing:!1},d=()=>s=!0,f=Al.reduce((k,$)=>(k[$]=J5(d),k),{}),{setup:p,read:h,resolveKeyframes:g,preUpdate:y,update:b,preRender:S,render:C,postRender:O}=f,H=()=>{const k=zn.useManualTiming?u.timestamp:performance.now();s=!1,zn.useManualTiming||(u.delta=l?1e3/60:Math.max(Math.min(k-u.timestamp,$5),1)),u.timestamp=k,u.isProcessing=!0,p.process(u),h.process(u),g.process(u),y.process(u),b.process(u),S.process(u),C.process(u),O.process(u),u.isProcessing=!1,s&&a&&(l=!1,n(H))},P=()=>{s=!0,l=!0,u.isProcessing||n(H)};return{schedule:Al.reduce((k,$)=>{const L=f[$];return k[$]=(K,X=!1,I=!1)=>(s||P(),L.schedule(K,X,I)),k},{}),cancel:k=>{for(let $=0;$<Al.length;$++)f[Al[$]].cancel(k)},state:u,steps:f}}const{schedule:Ot,cancel:ei,state:re,steps:Gu}=Xy(typeof requestAnimationFrame<"u"?requestAnimationFrame:qe,!0);let Zl;function W5(){Zl=void 0}const xe={now:()=>(Zl===void 0&&xe.set(re.isProcessing||zn.useManualTiming?re.timestamp:performance.now()),Zl),set:n=>{Zl=n,queueMicrotask(W5)}},Py=n=>a=>typeof a=="string"&&a.startsWith(n),ad=Py("--"),I5=Py("var(--"),rd=n=>I5(n)?t2.test(n.split("/*")[0].trim()):!1,t2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ua={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Wr={...Ua,transform:n=>Mn(0,1,n)},El={...Ua,default:1},Xr=n=>Math.round(n*1e5)/1e5,sd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function e2(n){return n==null}const n2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ld=(n,a)=>s=>!!(typeof s=="string"&&n2.test(s)&&s.startsWith(n)||a&&!e2(s)&&Object.prototype.hasOwnProperty.call(s,a)),Ky=(n,a,s)=>l=>{if(typeof l!="string")return l;const[u,d,f,p]=l.match(sd);return{[n]:parseFloat(u),[a]:parseFloat(d),[s]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},i2=n=>Mn(0,255,n),qu={...Ua,transform:n=>Math.round(i2(n))},Mi={test:ld("rgb","red"),parse:Ky("red","green","blue"),transform:({red:n,green:a,blue:s,alpha:l=1})=>"rgba("+qu.transform(n)+", "+qu.transform(a)+", "+qu.transform(s)+", "+Xr(Wr.transform(l))+")"};function a2(n){let a="",s="",l="",u="";return n.length>5?(a=n.substring(1,3),s=n.substring(3,5),l=n.substring(5,7),u=n.substring(7,9)):(a=n.substring(1,2),s=n.substring(2,3),l=n.substring(3,4),u=n.substring(4,5),a+=a,s+=s,l+=l,u+=u),{red:parseInt(a,16),green:parseInt(s,16),blue:parseInt(l,16),alpha:u?parseInt(u,16)/255:1}}const vf={test:ld("#"),parse:a2,transform:Mi.transform},ss=n=>({test:a=>typeof a=="string"&&a.endsWith(n)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${n}`}),In=ss("deg"),ln=ss("%"),lt=ss("px"),r2=ss("vh"),s2=ss("vw"),X0={...ln,parse:n=>ln.parse(n)/100,transform:n=>ln.transform(n*100)},Ta={test:ld("hsl","hue"),parse:Ky("hue","saturation","lightness"),transform:({hue:n,saturation:a,lightness:s,alpha:l=1})=>"hsla("+Math.round(n)+", "+ln.transform(Xr(a))+", "+ln.transform(Xr(s))+", "+Xr(Wr.transform(l))+")"},Kt={test:n=>Mi.test(n)||vf.test(n)||Ta.test(n),parse:n=>Mi.test(n)?Mi.parse(n):Ta.test(n)?Ta.parse(n):vf.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Mi.transform(n):Ta.transform(n),getAnimatableNone:n=>{const a=Kt.parse(n);return a.alpha=0,Kt.transform(a)}},l2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function o2(n){return isNaN(n)&&typeof n=="string"&&(n.match(sd)?.length||0)+(n.match(l2)?.length||0)>0}const Qy="number",Zy="color",c2="var",u2="var(",P0="${}",f2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ir(n){const a=n.toString(),s=[],l={color:[],number:[],var:[]},u=[];let d=0;const p=a.replace(f2,h=>(Kt.test(h)?(l.color.push(d),u.push(Zy),s.push(Kt.parse(h))):h.startsWith(u2)?(l.var.push(d),u.push(c2),s.push(h)):(l.number.push(d),u.push(Qy),s.push(parseFloat(h))),++d,P0)).split(P0);return{values:s,split:p,indexes:l,types:u}}function Fy(n){return Ir(n).values}function Jy(n){const{split:a,types:s}=Ir(n),l=a.length;return u=>{let d="";for(let f=0;f<l;f++)if(d+=a[f],u[f]!==void 0){const p=s[f];p===Qy?d+=Xr(u[f]):p===Zy?d+=Kt.transform(u[f]):d+=u[f]}return d}}const d2=n=>typeof n=="number"?0:Kt.test(n)?Kt.getAnimatableNone(n):n;function m2(n){const a=Fy(n);return Jy(n)(a.map(d2))}const ni={test:o2,parse:Fy,createTransformer:Jy,getAnimatableNone:m2};function Xu(n,a,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(a-n)*6*s:s<1/2?a:s<2/3?n+(a-n)*(2/3-s)*6:n}function h2({hue:n,saturation:a,lightness:s,alpha:l}){n/=360,a/=100,s/=100;let u=0,d=0,f=0;if(!a)u=d=f=s;else{const p=s<.5?s*(1+a):s+a-s*a,h=2*s-p;u=Xu(h,p,n+1/3),d=Xu(h,p,n),f=Xu(h,p,n-1/3)}return{red:Math.round(u*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:l}}function no(n,a){return s=>s>0?a:n}const Nt=(n,a,s)=>n+(a-n)*s,Pu=(n,a,s)=>{const l=n*n,u=s*(a*a-l)+l;return u<0?0:Math.sqrt(u)},p2=[vf,Mi,Ta],g2=n=>p2.find(a=>a.test(n));function K0(n){const a=g2(n);if(!a)return!1;let s=a.parse(n);return a===Ta&&(s=h2(s)),s}const Q0=(n,a)=>{const s=K0(n),l=K0(a);if(!s||!l)return no(n,a);const u={...s};return d=>(u.red=Pu(s.red,l.red,d),u.green=Pu(s.green,l.green,d),u.blue=Pu(s.blue,l.blue,d),u.alpha=Nt(s.alpha,l.alpha,d),Mi.transform(u))},xf=new Set(["none","hidden"]);function y2(n,a){return xf.has(n)?s=>s<=0?n:a:s=>s>=1?a:n}function v2(n,a){return s=>Nt(n,a,s)}function od(n){return typeof n=="number"?v2:typeof n=="string"?rd(n)?no:Kt.test(n)?Q0:S2:Array.isArray(n)?$y:typeof n=="object"?Kt.test(n)?Q0:x2:no}function $y(n,a){const s=[...n],l=s.length,u=n.map((d,f)=>od(d)(d,a[f]));return d=>{for(let f=0;f<l;f++)s[f]=u[f](d);return s}}function x2(n,a){const s={...n,...a},l={};for(const u in s)n[u]!==void 0&&a[u]!==void 0&&(l[u]=od(n[u])(n[u],a[u]));return u=>{for(const d in l)s[d]=l[d](u);return s}}function b2(n,a){const s=[],l={color:0,var:0,number:0};for(let u=0;u<a.values.length;u++){const d=a.types[u],f=n.indexes[d][l[d]],p=n.values[f]??0;s[u]=p,l[d]++}return s}const S2=(n,a)=>{const s=ni.createTransformer(a),l=Ir(n),u=Ir(a);return l.indexes.var.length===u.indexes.var.length&&l.indexes.color.length===u.indexes.color.length&&l.indexes.number.length>=u.indexes.number.length?xf.has(n)&&!u.values.length||xf.has(a)&&!l.values.length?y2(n,a):as($y(b2(l,u),u.values),s):no(n,a)};function Wy(n,a,s){return typeof n=="number"&&typeof a=="number"&&typeof s=="number"?Nt(n,a,s):od(n)(n,a)}const w2=n=>{const a=({timestamp:s})=>n(s);return{start:(s=!0)=>Ot.update(a,s),stop:()=>ei(a),now:()=>re.isProcessing?re.timestamp:xe.now()}},Iy=(n,a,s=10)=>{let l="";const u=Math.max(Math.round(a/s),2);for(let d=0;d<u;d++)l+=Math.round(n(d/(u-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},io=2e4;function cd(n){let a=0;const s=50;let l=n.next(a);for(;!l.done&&a<io;)a+=s,l=n.next(a);return a>=io?1/0:a}function T2(n,a=100,s){const l=s({...n,keyframes:[0,a]}),u=Math.min(cd(l),io);return{type:"keyframes",ease:d=>l.next(u*d).value/a,duration:sn(u)}}const A2=5;function t1(n,a,s){const l=Math.max(a-A2,0);return Vy(s-n(l),a-l)}const Ut={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ku=.001;function E2({duration:n=Ut.duration,bounce:a=Ut.bounce,velocity:s=Ut.velocity,mass:l=Ut.mass}){let u,d,f=1-a;f=Mn(Ut.minDamping,Ut.maxDamping,f),n=Mn(Ut.minDuration,Ut.maxDuration,sn(n)),f<1?(u=g=>{const y=g*f,b=y*n,S=y-s,C=bf(g,f),O=Math.exp(-b);return Ku-S/C*O},d=g=>{const b=g*f*n,S=b*s+s,C=Math.pow(f,2)*Math.pow(g,2)*n,O=Math.exp(-b),H=bf(Math.pow(g,2),f);return(-u(g)+Ku>0?-1:1)*((S-C)*O)/H}):(u=g=>{const y=Math.exp(-g*n),b=(g-s)*n+1;return-Ku+y*b},d=g=>{const y=Math.exp(-g*n),b=(s-g)*(n*n);return y*b});const p=5/n,h=z2(u,d,p);if(n=rn(n),isNaN(h))return{stiffness:Ut.stiffness,damping:Ut.damping,duration:n};{const g=Math.pow(h,2)*l;return{stiffness:g,damping:f*2*Math.sqrt(l*g),duration:n}}}const M2=12;function z2(n,a,s){let l=s;for(let u=1;u<M2;u++)l=l-n(l)/a(l);return l}function bf(n,a){return n*Math.sqrt(1-a*a)}const D2=["duration","bounce"],C2=["stiffness","damping","mass"];function Z0(n,a){return a.some(s=>n[s]!==void 0)}function j2(n){let a={velocity:Ut.velocity,stiffness:Ut.stiffness,damping:Ut.damping,mass:Ut.mass,isResolvedFromDuration:!1,...n};if(!Z0(n,C2)&&Z0(n,D2))if(n.visualDuration){const s=n.visualDuration,l=2*Math.PI/(s*1.2),u=l*l,d=2*Mn(.05,1,1-(n.bounce||0))*Math.sqrt(u);a={...a,mass:Ut.mass,stiffness:u,damping:d}}else{const s=E2(n);a={...a,...s,mass:Ut.mass},a.isResolvedFromDuration=!0}return a}function ao(n=Ut.visualDuration,a=Ut.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:a}:n;let{restSpeed:l,restDelta:u}=s;const d=s.keyframes[0],f=s.keyframes[s.keyframes.length-1],p={done:!1,value:d},{stiffness:h,damping:g,mass:y,duration:b,velocity:S,isResolvedFromDuration:C}=j2({...s,velocity:-sn(s.velocity||0)}),O=S||0,H=g/(2*Math.sqrt(h*y)),P=f-d,Y=sn(Math.sqrt(h/y)),q=Math.abs(P)<5;l||(l=q?Ut.restSpeed.granular:Ut.restSpeed.default),u||(u=q?Ut.restDelta.granular:Ut.restDelta.default);let k;if(H<1){const L=bf(Y,H);k=K=>{const X=Math.exp(-H*Y*K);return f-X*((O+H*Y*P)/L*Math.sin(L*K)+P*Math.cos(L*K))}}else if(H===1)k=L=>f-Math.exp(-Y*L)*(P+(O+Y*P)*L);else{const L=Y*Math.sqrt(H*H-1);k=K=>{const X=Math.exp(-H*Y*K),I=Math.min(L*K,300);return f-X*((O+H*Y*P)*Math.sinh(I)+L*P*Math.cosh(I))/L}}const $={calculatedDuration:C&&b||null,next:L=>{const K=k(L);if(C)p.done=L>=b;else{let X=L===0?O:0;H<1&&(X=L===0?rn(O):t1(k,L,K));const I=Math.abs(X)<=l,gt=Math.abs(f-K)<=u;p.done=I&&gt}return p.value=p.done?f:K,p},toString:()=>{const L=Math.min(cd($),io),K=Iy(X=>$.next(L*X).value,L,30);return L+"ms "+K},toTransition:()=>{}};return $}ao.applyToOptions=n=>{const a=T2(n,100,ao);return n.ease=a.ease,n.duration=rn(a.duration),n.type="keyframes",n};function Sf({keyframes:n,velocity:a=0,power:s=.8,timeConstant:l=325,bounceDamping:u=10,bounceStiffness:d=500,modifyTarget:f,min:p,max:h,restDelta:g=.5,restSpeed:y}){const b=n[0],S={done:!1,value:b},C=I=>p!==void 0&&I<p||h!==void 0&&I>h,O=I=>p===void 0?h:h===void 0||Math.abs(p-I)<Math.abs(h-I)?p:h;let H=s*a;const P=b+H,Y=f===void 0?P:f(P);Y!==P&&(H=Y-b);const q=I=>-H*Math.exp(-I/l),k=I=>Y+q(I),$=I=>{const gt=q(I),jt=k(I);S.done=Math.abs(gt)<=g,S.value=S.done?Y:jt};let L,K;const X=I=>{C(S.value)&&(L=I,K=ao({keyframes:[S.value,O(S.value)],velocity:t1(k,I,S.value),damping:u,stiffness:d,restDelta:g,restSpeed:y}))};return X(0),{calculatedDuration:null,next:I=>{let gt=!1;return!K&&L===void 0&&(gt=!0,$(I),X(I)),L!==void 0&&I>=L?K.next(I-L):(!gt&&$(I),S)}}}function R2(n,a,s){const l=[],u=s||zn.mix||Wy,d=n.length-1;for(let f=0;f<d;f++){let p=u(n[f],n[f+1]);if(a){const h=Array.isArray(a)?a[f]||qe:a;p=as(h,p)}l.push(p)}return l}function O2(n,a,{clamp:s=!0,ease:l,mixer:u}={}){const d=n.length;if(If(d===a.length),d===1)return()=>a[0];if(d===2&&a[0]===a[1])return()=>a[1];const f=n[0]===n[1];n[0]>n[d-1]&&(n=[...n].reverse(),a=[...a].reverse());const p=R2(a,l,u),h=p.length,g=y=>{if(f&&y<n[0])return a[0];let b=0;if(h>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const S=$r(n[b],n[b+1],y);return p[b](S)};return s?y=>g(Mn(n[0],n[d-1],y)):g}function V2(n,a){const s=n[n.length-1];for(let l=1;l<=a;l++){const u=$r(0,a,l);n.push(Nt(s,1,u))}}function N2(n){const a=[0];return V2(a,n.length-1),a}function _2(n,a){return n.map(s=>s*a)}function B2(n,a){return n.map(()=>a||Gy).splice(0,n.length-1)}function Pr({duration:n=300,keyframes:a,times:s,ease:l="easeInOut"}){const u=Q5(l)?l.map(q0):q0(l),d={done:!1,value:a[0]},f=_2(s&&s.length===a.length?s:N2(a),n),p=O2(f,a,{ease:Array.isArray(u)?u:B2(a,u)});return{calculatedDuration:n,next:h=>(d.value=p(h),d.done=h>=n,d)}}const U2=n=>n!==null;function ud(n,{repeat:a,repeatType:s="loop"},l,u=1){const d=n.filter(U2),p=u<0||a&&s!=="loop"&&a%2===1?0:d.length-1;return!p||l===void 0?d[p]:l}const k2={decay:Sf,inertia:Sf,tween:Pr,keyframes:Pr,spring:ao};function e1(n){typeof n.type=="string"&&(n.type=k2[n.type])}class fd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,s){return this.finished.then(a,s)}}const L2=n=>n/100;class dd extends fd{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:s}=this.options;s&&s.updatedAt!==xe.now()&&this.tick(xe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;e1(a);const{type:s=Pr,repeat:l=0,repeatDelay:u=0,repeatType:d,velocity:f=0}=a;let{keyframes:p}=a;const h=s||Pr;h!==Pr&&typeof p[0]!="number"&&(this.mixKeyframes=as(L2,Wy(p[0],p[1])),p=[0,100]);const g=h({...a,keyframes:p});d==="mirror"&&(this.mirroredGenerator=h({...a,keyframes:[...p].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=cd(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+u,this.totalDuration=this.resolvedDuration*(l+1)-u,this.generator=g}updateTime(a){const s=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(a,s=!1){const{generator:l,totalDuration:u,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return l.next(0);const{delay:g=0,keyframes:y,repeat:b,repeatType:S,repeatDelay:C,type:O,onUpdate:H,finalKeyframe:P}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-u/this.speed,this.startTime)),s?this.currentTime=a:this.updateTime(a);const Y=this.currentTime-g*(this.playbackSpeed>=0?1:-1),q=this.playbackSpeed>=0?Y<0:Y>u;this.currentTime=Math.max(Y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let k=this.currentTime,$=l;if(b){const I=Math.min(this.currentTime,u)/p;let gt=Math.floor(I),jt=I%1;!jt&&I>=1&&(jt=1),jt===1&&gt--,gt=Math.min(gt,b+1),!!(gt%2)&&(S==="reverse"?(jt=1-jt,C&&(jt-=C/p)):S==="mirror"&&($=f)),k=Mn(0,1,jt)*p}const L=q?{done:!1,value:y[0]}:$.next(k);d&&(L.value=d(L.value));let{done:K}=L;!q&&h!==null&&(K=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const X=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&K);return X&&O!==Sf&&(L.value=ud(y,this.options,P,this.speed)),H&&H(L.value),X&&this.finish(),L}then(a,s){return this.finished.then(a,s)}get duration(){return sn(this.calculatedDuration)}get time(){return sn(this.currentTime)}set time(a){a=rn(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(a){this.updateTime(xe.now());const s=this.playbackSpeed!==a;this.playbackSpeed=a,s&&(this.time=sn(this.currentTime))}play(){if(this.isStopped)return;const{driver:a=w2,startTime:s}=this.options;this.driver||(this.driver=a(u=>this.tick(u))),this.options.onPlay?.();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=s??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(xe.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),a.observe(this)}}function H2(n){for(let a=1;a<n.length;a++)n[a]??(n[a]=n[a-1])}const zi=n=>n*180/Math.PI,wf=n=>{const a=zi(Math.atan2(n[1],n[0]));return Tf(a)},Y2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:wf,rotateZ:wf,skewX:n=>zi(Math.atan(n[1])),skewY:n=>zi(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Tf=n=>(n=n%360,n<0&&(n+=360),n),F0=wf,J0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),$0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),G2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:J0,scaleY:$0,scale:n=>(J0(n)+$0(n))/2,rotateX:n=>Tf(zi(Math.atan2(n[6],n[5]))),rotateY:n=>Tf(zi(Math.atan2(-n[2],n[0]))),rotateZ:F0,rotate:F0,skewX:n=>zi(Math.atan(n[4])),skewY:n=>zi(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Af(n){return n.includes("scale")?1:0}function Ef(n,a){if(!n||n==="none")return Af(a);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,u;if(s)l=G2,u=s;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=Y2,u=p}if(!u)return Af(a);const d=l[a],f=u[1].split(",").map(X2);return typeof d=="function"?d(f):f[d]}const q2=(n,a)=>{const{transform:s="none"}=getComputedStyle(n);return Ef(s,a)};function X2(n){return parseFloat(n.trim())}const ka=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],La=new Set(ka),W0=n=>n===Ua||n===lt,P2=new Set(["x","y","z"]),K2=ka.filter(n=>!P2.has(n));function Q2(n){const a=[];return K2.forEach(s=>{const l=n.getValue(s);l!==void 0&&(a.push([s,l.get()]),l.set(s.startsWith("scale")?1:0))}),a}const Ci={width:({x:n},{paddingLeft:a="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(a)-parseFloat(s),height:({y:n},{paddingTop:a="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(a)-parseFloat(s),top:(n,{top:a})=>parseFloat(a),left:(n,{left:a})=>parseFloat(a),bottom:({y:n},{top:a})=>parseFloat(a)+(n.max-n.min),right:({x:n},{left:a})=>parseFloat(a)+(n.max-n.min),x:(n,{transform:a})=>Ef(a,"x"),y:(n,{transform:a})=>Ef(a,"y")};Ci.translateX=Ci.x;Ci.translateY=Ci.y;const ji=new Set;let Mf=!1,zf=!1,Df=!1;function n1(){if(zf){const n=Array.from(ji).filter(l=>l.needsMeasurement),a=new Set(n.map(l=>l.element)),s=new Map;a.forEach(l=>{const u=Q2(l);u.length&&(s.set(l,u),l.render())}),n.forEach(l=>l.measureInitialState()),a.forEach(l=>{l.render();const u=s.get(l);u&&u.forEach(([d,f])=>{l.getValue(d)?.set(f)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}zf=!1,Mf=!1,ji.forEach(n=>n.complete(Df)),ji.clear()}function i1(){ji.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(zf=!0)})}function Z2(){Df=!0,i1(),n1(),Df=!1}class md{constructor(a,s,l,u,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=s,this.name=l,this.motionValue=u,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(ji.add(this),Mf||(Mf=!0,Ot.read(i1),Ot.resolveKeyframes(n1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:s,element:l,motionValue:u}=this;if(a[0]===null){const d=u?.get(),f=a[a.length-1];if(d!==void 0)a[0]=d;else if(l&&s){const p=l.readValue(s,f);p!=null&&(a[0]=p)}a[0]===void 0&&(a[0]=f),u&&d===void 0&&u.set(a[0])}H2(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),ji.delete(this)}cancel(){this.state==="scheduled"&&(ji.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const F2=n=>n.startsWith("--");function J2(n,a,s){F2(a)?n.style.setProperty(a,s):n.style[a]=s}const $2=td(()=>window.ScrollTimeline!==void 0),W2={};function I2(n,a){const s=td(n);return()=>W2[a]??s()}const a1=I2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Gr=([n,a,s,l])=>`cubic-bezier(${n}, ${a}, ${s}, ${l})`,I0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Gr([0,.65,.55,1]),circOut:Gr([.55,0,1,.45]),backIn:Gr([.31,.01,.66,-.59]),backOut:Gr([.33,1.53,.69,.99])};function r1(n,a){if(n)return typeof n=="function"?a1()?Iy(n,a):"ease-out":qy(n)?Gr(n):Array.isArray(n)?n.map(s=>r1(s,a)||I0.easeOut):I0[n]}function tS(n,a,s,{delay:l=0,duration:u=300,repeat:d=0,repeatType:f="loop",ease:p="easeOut",times:h}={},g=void 0){const y={[a]:s};h&&(y.offset=h);const b=r1(p,u);Array.isArray(b)&&(y.easing=b);const S={delay:l,duration:u,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),n.animate(y,S)}function s1(n){return typeof n=="function"&&"applyToOptions"in n}function eS({type:n,...a}){return s1(n)&&a1()?n.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class nS extends fd{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,!a)return;const{element:s,name:l,keyframes:u,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:p,onComplete:h}=a;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=a,If(typeof a.type!="string");const g=eS(a);this.animation=tS(s,l,u,g,d),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=ud(u,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):J2(s,l,y),this.animation.cancel()}h?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const a=this.animation.effect?.getComputedTiming?.().duration||0;return sn(Number(a))}get time(){return sn(Number(this.animation.currentTime)||0)}set time(a){this.finishedTime=null,this.animation.currentTime=rn(a)}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(a){this.animation.startTime=a}attachTimeline({timeline:a,observe:s}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,a&&$2()?(this.animation.timeline=a,qe):s(this)}}const l1={anticipate:Ly,backInOut:ky,circInOut:Yy};function iS(n){return n in l1}function aS(n){typeof n.ease=="string"&&iS(n.ease)&&(n.ease=l1[n.ease])}const tg=10;class rS extends nS{constructor(a){aS(a),e1(a),super(a),a.startTime&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:s,onUpdate:l,onComplete:u,element:d,...f}=this.options;if(!s)return;if(a!==void 0){s.set(a);return}const p=new dd({...f,autoplay:!1}),h=rn(this.finishedTime??this.time);s.setWithVelocity(p.sample(h-tg).value,p.sample(h).value,tg),p.stop()}}const eg=(n,a)=>a==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ni.test(n)||n==="0")&&!n.startsWith("url("));function sS(n){const a=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==a)return!0}function lS(n,a,s,l){const u=n[0];if(u===null)return!1;if(a==="display"||a==="visibility")return!0;const d=n[n.length-1],f=eg(u,a),p=eg(d,a);return!f||!p?!1:sS(n)||(s==="spring"||s1(s))&&l}function Cf(n){n.duration=0,n.type}const oS=new Set(["opacity","clipPath","filter","transform"]),cS=td(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function uS(n){const{motionValue:a,name:s,repeatDelay:l,repeatType:u,damping:d,type:f}=n;if(!(a?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:g}=a.owner.getProps();return cS()&&s&&oS.has(s)&&(s!=="transform"||!g)&&!h&&!l&&u!=="mirror"&&d!==0&&f!=="inertia"}const fS=40;class dS extends fd{constructor({autoplay:a=!0,delay:s=0,type:l="keyframes",repeat:u=0,repeatDelay:d=0,repeatType:f="loop",keyframes:p,name:h,motionValue:g,element:y,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=xe.now();const S={autoplay:a,delay:s,type:l,repeat:u,repeatDelay:d,repeatType:f,name:h,motionValue:g,element:y,...b},C=y?.KeyframeResolver||md;this.keyframeResolver=new C(p,(O,H,P)=>this.onKeyframesResolved(O,H,S,!P),h,g,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(a,s,l,u){this.keyframeResolver=void 0;const{name:d,type:f,velocity:p,delay:h,isHandoff:g,onUpdate:y}=l;this.resolvedAt=xe.now(),lS(a,d,f,p)||((zn.instantAnimations||!h)&&y?.(ud(a,l,s)),a[0]=a[a.length-1],Cf(l),l.repeat=0);const S={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>fS?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...l,keyframes:a},C=!g&&uS(S)?new rS({...S,element:S.motionValue.owner.current}):new dd(S);C.finished.then(()=>this.notifyFinished()).catch(qe),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(a,s){return this.finished.finally(a).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Z2()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const mS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function hS(n){const a=mS.exec(n);if(!a)return[,];const[,s,l,u]=a;return[`--${s??l}`,u]}function o1(n,a,s=1){const[l,u]=hS(n);if(!l)return;const d=window.getComputedStyle(a).getPropertyValue(l);if(d){const f=d.trim();return jy(f)?parseFloat(f):f}return rd(u)?o1(u,a,s+1):u}function hd(n,a){return n?.[a]??n?.default??n}const c1=new Set(["width","height","top","left","right","bottom",...ka]),pS={test:n=>n==="auto",parse:n=>n},u1=n=>a=>a.test(n),f1=[Ua,lt,ln,In,s2,r2,pS],ng=n=>f1.find(u1(n));function gS(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Oy(n):!0}const yS=new Set(["brightness","contrast","saturate","opacity"]);function vS(n){const[a,s]=n.slice(0,-1).split("(");if(a==="drop-shadow")return n;const[l]=s.match(sd)||[];if(!l)return n;const u=s.replace(l,"");let d=yS.has(a)?1:0;return l!==s&&(d*=100),a+"("+d+u+")"}const xS=/\b([a-z-]*)\(.*?\)/gu,jf={...ni,getAnimatableNone:n=>{const a=n.match(xS);return a?a.map(vS).join(" "):n}},ig={...Ua,transform:Math.round},bS={rotate:In,rotateX:In,rotateY:In,rotateZ:In,scale:El,scaleX:El,scaleY:El,scaleZ:El,skew:In,skewX:In,skewY:In,distance:lt,translateX:lt,translateY:lt,translateZ:lt,x:lt,y:lt,z:lt,perspective:lt,transformPerspective:lt,opacity:Wr,originX:X0,originY:X0,originZ:lt},pd={borderWidth:lt,borderTopWidth:lt,borderRightWidth:lt,borderBottomWidth:lt,borderLeftWidth:lt,borderRadius:lt,radius:lt,borderTopLeftRadius:lt,borderTopRightRadius:lt,borderBottomRightRadius:lt,borderBottomLeftRadius:lt,width:lt,maxWidth:lt,height:lt,maxHeight:lt,top:lt,right:lt,bottom:lt,left:lt,padding:lt,paddingTop:lt,paddingRight:lt,paddingBottom:lt,paddingLeft:lt,margin:lt,marginTop:lt,marginRight:lt,marginBottom:lt,marginLeft:lt,backgroundPositionX:lt,backgroundPositionY:lt,...bS,zIndex:ig,fillOpacity:Wr,strokeOpacity:Wr,numOctaves:ig},SS={...pd,color:Kt,backgroundColor:Kt,outlineColor:Kt,fill:Kt,stroke:Kt,borderColor:Kt,borderTopColor:Kt,borderRightColor:Kt,borderBottomColor:Kt,borderLeftColor:Kt,filter:jf,WebkitFilter:jf},d1=n=>SS[n];function m1(n,a){let s=d1(n);return s!==jf&&(s=ni),s.getAnimatableNone?s.getAnimatableNone(a):void 0}const wS=new Set(["auto","none","0"]);function TS(n,a,s){let l=0,u;for(;l<n.length&&!u;){const d=n[l];typeof d=="string"&&!wS.has(d)&&Ir(d).values.length&&(u=n[l]),l++}if(u&&s)for(const d of a)n[d]=m1(s,u)}class AS extends md{constructor(a,s,l,u,d){super(a,s,l,u,d,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:s,name:l}=this;if(!s||!s.current)return;super.readKeyframes();for(let h=0;h<a.length;h++){let g=a[h];if(typeof g=="string"&&(g=g.trim(),rd(g))){const y=o1(g,s.current);y!==void 0&&(a[h]=y),h===a.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!c1.has(l)||a.length!==2)return;const[u,d]=a,f=ng(u),p=ng(d);if(f!==p)if(W0(f)&&W0(p))for(let h=0;h<a.length;h++){const g=a[h];typeof g=="string"&&(a[h]=parseFloat(g))}else Ci[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:s}=this,l=[];for(let u=0;u<a.length;u++)(a[u]===null||gS(a[u]))&&l.push(u);l.length&&TS(a,l,s)}measureInitialState(){const{element:a,unresolvedKeyframes:s,name:l}=this;if(!a||!a.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ci[l](a.measureViewportBox(),window.getComputedStyle(a.current)),s[0]=this.measuredOrigin;const u=s[s.length-1];u!==void 0&&a.getValue(l,u).jump(u,!1)}measureEndState(){const{element:a,name:s,unresolvedKeyframes:l}=this;if(!a||!a.current)return;const u=a.getValue(s);u&&u.jump(this.measuredOrigin,!1);const d=l.length-1,f=l[d];l[d]=Ci[s](a.measureViewportBox(),window.getComputedStyle(a.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,h])=>{a.getValue(p).set(h)}),this.resolveNoneKeyframes()}}function ES(n,a,s){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let l=document;const u=s?.[n]??l.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n)}const h1=(n,a)=>a&&typeof n=="number"?a.transform(n):n;function p1(n){return Ry(n)&&"offsetHeight"in n}const ag=30,MS=n=>!isNaN(parseFloat(n));class zS{constructor(a,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{const u=xe.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(a),this.owner=s.owner}setCurrent(a){this.current=a,this.updatedAt=xe.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=MS(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,s){this.events[a]||(this.events[a]=new ed);const l=this.events[a].add(s);return a==="change"?()=>{l(),Ot.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,s){this.passiveEffect=a,this.stopPassiveEffect=s}set(a){this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a)}setWithVelocity(a,s,l){this.set(s),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-l}jump(a,s=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const a=xe.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>ag)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,ag);return Vy(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(a){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=a(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Na(n,a){return new zS(n,a)}const{schedule:gd}=Xy(queueMicrotask,!1),Fe={x:!1,y:!1};function g1(){return Fe.x||Fe.y}function DS(n){return n==="x"||n==="y"?Fe[n]?null:(Fe[n]=!0,()=>{Fe[n]=!1}):Fe.x||Fe.y?null:(Fe.x=Fe.y=!0,()=>{Fe.x=Fe.y=!1})}function y1(n,a){const s=ES(n),l=new AbortController,u={passive:!0,...a,signal:l.signal};return[s,u,()=>l.abort()]}function rg(n){return!(n.pointerType==="touch"||g1())}function CS(n,a,s={}){const[l,u,d]=y1(n,s),f=p=>{if(!rg(p))return;const{target:h}=p,g=a(h,p);if(typeof g!="function"||!h)return;const y=b=>{rg(b)&&(g(b),h.removeEventListener("pointerleave",y))};h.addEventListener("pointerleave",y,u)};return l.forEach(p=>{p.addEventListener("pointerenter",f,u)}),d}const v1=(n,a)=>a?n===a?!0:v1(n,a.parentElement):!1,yd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,jS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function RS(n){return jS.has(n.tagName)||n.tabIndex!==-1}const Fl=new WeakSet;function sg(n){return a=>{a.key==="Enter"&&n(a)}}function Qu(n,a){n.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const OS=(n,a)=>{const s=n.currentTarget;if(!s)return;const l=sg(()=>{if(Fl.has(s))return;Qu(s,"down");const u=sg(()=>{Qu(s,"up")}),d=()=>Qu(s,"cancel");s.addEventListener("keyup",u,a),s.addEventListener("blur",d,a)});s.addEventListener("keydown",l,a),s.addEventListener("blur",()=>s.removeEventListener("keydown",l),a)};function lg(n){return yd(n)&&!g1()}function VS(n,a,s={}){const[l,u,d]=y1(n,s),f=p=>{const h=p.currentTarget;if(!lg(p))return;Fl.add(h);const g=a(h,p),y=(C,O)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),Fl.has(h)&&Fl.delete(h),lg(C)&&typeof g=="function"&&g(C,{success:O})},b=C=>{y(C,h===window||h===document||s.useGlobalTarget||v1(h,C.target))},S=C=>{y(C,!1)};window.addEventListener("pointerup",b,u),window.addEventListener("pointercancel",S,u)};return l.forEach(p=>{(s.useGlobalTarget?window:p).addEventListener("pointerdown",f,u),p1(p)&&(p.addEventListener("focus",g=>OS(g,u)),!RS(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),d}function x1(n){return Ry(n)&&"ownerSVGElement"in n}function NS(n){return x1(n)&&n.tagName==="svg"}const fe=n=>!!(n&&n.getVelocity),_S=[...f1,Kt,ni],BS=n=>_S.find(u1(n)),vd=J.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class US extends J.Component{getSnapshotBeforeUpdate(a){const s=this.props.childRef.current;if(s&&a.isPresent&&!this.props.isPresent){const l=s.offsetParent,u=p1(l)&&l.offsetWidth||0,d=this.props.sizeRef.current;d.height=s.offsetHeight||0,d.width=s.offsetWidth||0,d.top=s.offsetTop,d.left=s.offsetLeft,d.right=u-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function kS({children:n,isPresent:a,anchorX:s,root:l}){const u=J.useId(),d=J.useRef(null),f=J.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=J.useContext(vd);return J.useInsertionEffect(()=>{const{width:h,height:g,top:y,left:b,right:S}=f.current;if(a||!d.current||!h||!g)return;const C=s==="left"?`left: ${b}`:`right: ${S}`;d.current.dataset.motionPopId=u;const O=document.createElement("style");p&&(O.nonce=p);const H=l??document.head;return H.appendChild(O),O.sheet&&O.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${g}px !important;
            ${C}px !important;
            top: ${y}px !important;
          }
        `),()=>{H.contains(O)&&H.removeChild(O)}},[a]),x.jsx(US,{isPresent:a,childRef:d,sizeRef:f,children:J.cloneElement(n,{ref:d})})}const LS=({children:n,initial:a,isPresent:s,onExitComplete:l,custom:u,presenceAffectsLayout:d,mode:f,anchorX:p,root:h})=>{const g=Ff(HS),y=J.useId();let b=!0,S=J.useMemo(()=>(b=!1,{id:y,initial:a,isPresent:s,custom:u,onExitComplete:C=>{g.set(C,!0);for(const O of g.values())if(!O)return;l&&l()},register:C=>(g.set(C,!1),()=>g.delete(C))}),[s,g,l]);return d&&b&&(S={...S}),J.useMemo(()=>{g.forEach((C,O)=>g.set(O,!1))},[s]),J.useEffect(()=>{!s&&!g.size&&l&&l()},[s]),f==="popLayout"&&(n=x.jsx(kS,{isPresent:s,anchorX:p,root:h,children:n})),x.jsx(ho.Provider,{value:S,children:n})};function HS(){return new Map}function b1(n=!0){const a=J.useContext(ho);if(a===null)return[!0,null];const{isPresent:s,onExitComplete:l,register:u}=a,d=J.useId();J.useEffect(()=>{if(n)return u(d)},[n]);const f=J.useCallback(()=>n&&l&&l(d),[d,l,n]);return!s&&l?[!1,f]:[!0]}const Ml=n=>n.key||"";function og(n){const a=[];return J.Children.forEach(n,s=>{J.isValidElement(s)&&a.push(s)}),a}const po=({children:n,custom:a,initial:s=!0,onExitComplete:l,presenceAffectsLayout:u=!0,mode:d="sync",propagate:f=!1,anchorX:p="left",root:h})=>{const[g,y]=b1(f),b=J.useMemo(()=>og(n),[n]),S=f&&!g?[]:b.map(Ml),C=J.useRef(!0),O=J.useRef(b),H=Ff(()=>new Map),[P,Y]=J.useState(b),[q,k]=J.useState(b);Cy(()=>{C.current=!1,O.current=b;for(let K=0;K<q.length;K++){const X=Ml(q[K]);S.includes(X)?H.delete(X):H.get(X)!==!0&&H.set(X,!1)}},[q,S.length,S.join("-")]);const $=[];if(b!==P){let K=[...b];for(let X=0;X<q.length;X++){const I=q[X],gt=Ml(I);S.includes(gt)||(K.splice(X,0,I),$.push(I))}return d==="wait"&&$.length&&(K=$),k(og(K)),Y(b),null}const{forceRender:L}=J.useContext(Zf);return x.jsx(x.Fragment,{children:q.map(K=>{const X=Ml(K),I=f&&!g?!1:b===q||S.includes(X),gt=()=>{if(H.has(X))H.set(X,!0);else return;let jt=!0;H.forEach(qt=>{qt||(jt=!1)}),jt&&(L?.(),k(O.current),f&&y?.(),l&&l())};return x.jsx(LS,{isPresent:I,initial:!C.current||s?void 0:!1,custom:a,presenceAffectsLayout:u,mode:d,root:h,onExitComplete:I?void 0:gt,anchorX:p,children:K},X)})})},S1=J.createContext({strict:!1}),cg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},_a={};for(const n in cg)_a[n]={isEnabled:a=>cg[n].some(s=>!!a[s])};function YS(n){for(const a in n)_a[a]={..._a[a],...n[a]}}const GS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ro(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||GS.has(n)}let w1=n=>!ro(n);function qS(n){typeof n=="function"&&(w1=a=>a.startsWith("on")?!ro(a):n(a))}try{qS(require("@emotion/is-prop-valid").default)}catch{}function XS(n,a,s){const l={};for(const u in n)u==="values"&&typeof n.values=="object"||(w1(u)||s===!0&&ro(u)||!a&&!ro(u)||n.draggable&&u.startsWith("onDrag"))&&(l[u]=n[u]);return l}const go=J.createContext({});function yo(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ts(n){return typeof n=="string"||Array.isArray(n)}const xd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bd=["initial",...xd];function vo(n){return yo(n.animate)||bd.some(a=>ts(n[a]))}function T1(n){return!!(vo(n)||n.variants)}function PS(n,a){if(vo(n)){const{initial:s,animate:l}=n;return{initial:s===!1||ts(s)?s:void 0,animate:ts(l)?l:void 0}}return n.inherit!==!1?a:{}}function KS(n){const{initial:a,animate:s}=PS(n,J.useContext(go));return J.useMemo(()=>({initial:a,animate:s}),[ug(a),ug(s)])}function ug(n){return Array.isArray(n)?n.join(" "):n}const es={};function QS(n){for(const a in n)es[a]=n[a],ad(a)&&(es[a].isCSSVariable=!0)}function A1(n,{layout:a,layoutId:s}){return La.has(n)||n.startsWith("origin")||(a||s!==void 0)&&(!!es[n]||n==="opacity")}const ZS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},FS=ka.length;function JS(n,a,s){let l="",u=!0;for(let d=0;d<FS;d++){const f=ka[d],p=n[f];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(f.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||s){const g=h1(p,pd[f]);if(!h){u=!1;const y=ZS[f]||f;l+=`${y}(${g}) `}s&&(a[f]=g)}}return l=l.trim(),s?l=s(a,u?"":l):u&&(l="none"),l}function Sd(n,a,s){const{style:l,vars:u,transformOrigin:d}=n;let f=!1,p=!1;for(const h in a){const g=a[h];if(La.has(h)){f=!0;continue}else if(ad(h)){u[h]=g;continue}else{const y=h1(g,pd[h]);h.startsWith("origin")?(p=!0,d[h]=y):l[h]=y}}if(a.transform||(f||s?l.transform=JS(a,n.transform,s):l.transform&&(l.transform="none")),p){const{originX:h="50%",originY:g="50%",originZ:y=0}=d;l.transformOrigin=`${h} ${g} ${y}`}}const wd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function E1(n,a,s){for(const l in a)!fe(a[l])&&!A1(l,s)&&(n[l]=a[l])}function $S({transformTemplate:n},a){return J.useMemo(()=>{const s=wd();return Sd(s,a,n),Object.assign({},s.vars,s.style)},[a])}function WS(n,a){const s=n.style||{},l={};return E1(l,s,n),Object.assign(l,$S(n,a)),l}function IS(n,a){const s={},l=WS(n,a);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=l,s}const tw={offset:"stroke-dashoffset",array:"stroke-dasharray"},ew={offset:"strokeDashoffset",array:"strokeDasharray"};function nw(n,a,s=1,l=0,u=!0){n.pathLength=1;const d=u?tw:ew;n[d.offset]=lt.transform(-l);const f=lt.transform(a),p=lt.transform(s);n[d.array]=`${f} ${p}`}function M1(n,{attrX:a,attrY:s,attrScale:l,pathLength:u,pathSpacing:d=1,pathOffset:f=0,...p},h,g,y){if(Sd(n,p,g),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:b,style:S}=n;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=y?.transformBox??"fill-box",delete b.transformBox),a!==void 0&&(b.x=a),s!==void 0&&(b.y=s),l!==void 0&&(b.scale=l),u!==void 0&&nw(b,u,d,f,!1)}const z1=()=>({...wd(),attrs:{}}),D1=n=>typeof n=="string"&&n.toLowerCase()==="svg";function iw(n,a,s,l){const u=J.useMemo(()=>{const d=z1();return M1(d,a,D1(l),n.transformTemplate,n.style),{...d.attrs,style:{...d.style}}},[a]);if(n.style){const d={};E1(d,n.style,n),u.style={...d,...u.style}}return u}const aw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Td(n){return typeof n!="string"||n.includes("-")?!1:!!(aw.indexOf(n)>-1||/[A-Z]/u.test(n))}function rw(n,a,s,{latestValues:l},u,d=!1){const p=(Td(n)?iw:IS)(a,l,u,n),h=XS(a,typeof n=="string",d),g=n!==J.Fragment?{...h,...p,ref:s}:{},{children:y}=a,b=J.useMemo(()=>fe(y)?y.get():y,[y]);return J.createElement(n,{...g,children:b})}function fg(n){const a=[{},{}];return n?.values.forEach((s,l)=>{a[0][l]=s.get(),a[1][l]=s.getVelocity()}),a}function Ad(n,a,s,l){if(typeof a=="function"){const[u,d]=fg(l);a=a(s!==void 0?s:n.custom,u,d)}if(typeof a=="string"&&(a=n.variants&&n.variants[a]),typeof a=="function"){const[u,d]=fg(l);a=a(s!==void 0?s:n.custom,u,d)}return a}function Jl(n){return fe(n)?n.get():n}function sw({scrapeMotionValuesFromProps:n,createRenderState:a},s,l,u){return{latestValues:lw(s,l,u,n),renderState:a()}}function lw(n,a,s,l){const u={},d=l(n,{});for(const S in d)u[S]=Jl(d[S]);let{initial:f,animate:p}=n;const h=vo(n),g=T1(n);a&&g&&!h&&n.inherit!==!1&&(f===void 0&&(f=a.initial),p===void 0&&(p=a.animate));let y=s?s.initial===!1:!1;y=y||f===!1;const b=y?p:f;if(b&&typeof b!="boolean"&&!yo(b)){const S=Array.isArray(b)?b:[b];for(let C=0;C<S.length;C++){const O=Ad(n,S[C]);if(O){const{transitionEnd:H,transition:P,...Y}=O;for(const q in Y){let k=Y[q];if(Array.isArray(k)){const $=y?k.length-1:0;k=k[$]}k!==null&&(u[q]=k)}for(const q in H)u[q]=H[q]}}}return u}const C1=n=>(a,s)=>{const l=J.useContext(go),u=J.useContext(ho),d=()=>sw(n,a,l,u);return s?d():Ff(d)};function Ed(n,a,s){const{style:l}=n,u={};for(const d in l)(fe(l[d])||a.style&&fe(a.style[d])||A1(d,n)||s?.getValue(d)?.liveStyle!==void 0)&&(u[d]=l[d]);return u}const ow=C1({scrapeMotionValuesFromProps:Ed,createRenderState:wd});function j1(n,a,s){const l=Ed(n,a,s);for(const u in n)if(fe(n[u])||fe(a[u])){const d=ka.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;l[d]=n[u]}return l}const cw=C1({scrapeMotionValuesFromProps:j1,createRenderState:z1}),uw=Symbol.for("motionComponentSymbol");function Aa(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function fw(n,a,s){return J.useCallback(l=>{l&&n.onMount&&n.onMount(l),a&&(l?a.mount(l):a.unmount()),s&&(typeof s=="function"?s(l):Aa(s)&&(s.current=l))},[a])}const Md=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),dw="framerAppearId",R1="data-"+Md(dw),O1=J.createContext({});function mw(n,a,s,l,u){const{visualElement:d}=J.useContext(go),f=J.useContext(S1),p=J.useContext(ho),h=J.useContext(vd).reducedMotion,g=J.useRef(null);l=l||f.renderer,!g.current&&l&&(g.current=l(n,{visualState:a,parent:d,props:s,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:h}));const y=g.current,b=J.useContext(O1);y&&!y.projection&&u&&(y.type==="html"||y.type==="svg")&&hw(g.current,s,u,b);const S=J.useRef(!1);J.useInsertionEffect(()=>{y&&S.current&&y.update(s,p)});const C=s[R1],O=J.useRef(!!C&&!window.MotionHandoffIsComplete?.(C)&&window.MotionHasOptimisedAnimation?.(C));return Cy(()=>{y&&(S.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),O.current&&y.animationState&&y.animationState.animateChanges())}),J.useEffect(()=>{y&&(!O.current&&y.animationState&&y.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(C)}),O.current=!1),y.enteringChildren=void 0)}),y}function hw(n,a,s,l){const{layoutId:u,layout:d,drag:f,dragConstraints:p,layoutScroll:h,layoutRoot:g,layoutCrossfade:y}=a;n.projection=new s(n.latestValues,a["data-framer-portal-id"]?void 0:V1(n.parent)),n.projection.setOptions({layoutId:u,layout:d,alwaysMeasureLayout:!!f||p&&Aa(p),visualElement:n,animationType:typeof d=="string"?d:"both",initialPromotionConfig:l,crossfade:y,layoutScroll:h,layoutRoot:g})}function V1(n){if(n)return n.options.allowProjection!==!1?n.projection:V1(n.parent)}function Zu(n,{forwardMotionProps:a=!1}={},s,l){s&&YS(s);const u=Td(n)?cw:ow;function d(p,h){let g;const y={...J.useContext(vd),...p,layoutId:pw(p)},{isStatic:b}=y,S=KS(p),C=u(p,b);if(!b&&Jf){gw();const O=yw(y);g=O.MeasureLayout,S.visualElement=mw(n,C,y,l,O.ProjectionNode)}return x.jsxs(go.Provider,{value:S,children:[g&&S.visualElement?x.jsx(g,{visualElement:S.visualElement,...y}):null,rw(n,p,fw(C,S.visualElement,h),C,b,a)]})}d.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const f=J.forwardRef(d);return f[uw]=n,f}function pw({layoutId:n}){const a=J.useContext(Zf).id;return a&&n!==void 0?a+"-"+n:n}function gw(n,a){J.useContext(S1).strict}function yw(n){const{drag:a,layout:s}=_a;if(!a&&!s)return{};const l={...a,...s};return{MeasureLayout:a?.isEnabled(n)||s?.isEnabled(n)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}function vw(n,a){if(typeof Proxy>"u")return Zu;const s=new Map,l=(d,f)=>Zu(d,f,n,a),u=(d,f)=>l(d,f);return new Proxy(u,{get:(d,f)=>f==="create"?l:(s.has(f)||s.set(f,Zu(f,void 0,n,a)),s.get(f))})}function N1({top:n,left:a,right:s,bottom:l}){return{x:{min:a,max:s},y:{min:n,max:l}}}function xw({x:n,y:a}){return{top:a.min,right:n.max,bottom:a.max,left:n.min}}function bw(n,a){if(!a)return n;const s=a({x:n.left,y:n.top}),l=a({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:l.y,right:l.x}}function Fu(n){return n===void 0||n===1}function Rf({scale:n,scaleX:a,scaleY:s}){return!Fu(n)||!Fu(a)||!Fu(s)}function Ai(n){return Rf(n)||_1(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function _1(n){return dg(n.x)||dg(n.y)}function dg(n){return n&&n!=="0%"}function so(n,a,s){const l=n-s,u=a*l;return s+u}function mg(n,a,s,l,u){return u!==void 0&&(n=so(n,u,l)),so(n,s,l)+a}function Of(n,a=0,s=1,l,u){n.min=mg(n.min,a,s,l,u),n.max=mg(n.max,a,s,l,u)}function B1(n,{x:a,y:s}){Of(n.x,a.translate,a.scale,a.originPoint),Of(n.y,s.translate,s.scale,s.originPoint)}const hg=.999999999999,pg=1.0000000000001;function Sw(n,a,s,l=!1){const u=s.length;if(!u)return;a.x=a.y=1;let d,f;for(let p=0;p<u;p++){d=s[p],f=d.projectionDelta;const{visualElement:h}=d.options;h&&h.props.style&&h.props.style.display==="contents"||(l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Ma(n,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(a.x*=f.x.scale,a.y*=f.y.scale,B1(n,f)),l&&Ai(d.latestValues)&&Ma(n,d.latestValues))}a.x<pg&&a.x>hg&&(a.x=1),a.y<pg&&a.y>hg&&(a.y=1)}function Ea(n,a){n.min=n.min+a,n.max=n.max+a}function gg(n,a,s,l,u=.5){const d=Nt(n.min,n.max,u);Of(n,a,s,d,l)}function Ma(n,a){gg(n.x,a.x,a.scaleX,a.scale,a.originX),gg(n.y,a.y,a.scaleY,a.scale,a.originY)}function U1(n,a){return N1(bw(n.getBoundingClientRect(),a))}function ww(n,a,s){const l=U1(n,s),{scroll:u}=a;return u&&(Ea(l.x,u.offset.x),Ea(l.y,u.offset.y)),l}const yg=()=>({translate:0,scale:1,origin:0,originPoint:0}),za=()=>({x:yg(),y:yg()}),vg=()=>({min:0,max:0}),Gt=()=>({x:vg(),y:vg()}),Vf={current:null},k1={current:!1};function Tw(){if(k1.current=!0,!!Jf)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),a=()=>Vf.current=n.matches;n.addEventListener("change",a),a()}else Vf.current=!1}const Aw=new WeakMap;function Ew(n,a,s){for(const l in a){const u=a[l],d=s[l];if(fe(u))n.addValue(l,u);else if(fe(d))n.addValue(l,Na(u,{owner:n}));else if(d!==u)if(n.hasValue(l)){const f=n.getValue(l);f.liveStyle===!0?f.jump(u):f.hasAnimated||f.set(u)}else{const f=n.getStaticValue(l);n.addValue(l,Na(f!==void 0?f:u,{owner:n}))}}for(const l in s)a[l]===void 0&&n.removeValue(l);return a}const xg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Mw{scrapeMotionValuesFromProps(a,s,l){return{}}constructor({parent:a,props:s,presenceContext:l,reducedMotionConfig:u,blockInitialAnimation:d,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=md,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=xe.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Ot.render(this.render,!1,!0))};const{latestValues:h,renderState:g}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=s.initial?{...h}:{},this.renderState=g,this.parent=a,this.props=s,this.presenceContext=l,this.depth=a?a.depth+1:0,this.reducedMotionConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=vo(s),this.isVariantNode=T1(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(s,{},this);for(const S in b){const C=b[S];h[S]!==void 0&&fe(C)&&C.set(h[S])}}mount(a){this.current=a,Aw.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,l)=>this.bindToMotionValue(l,s)),k1.current||Tw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Vf.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ei(this.notifyUpdate),ei(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const s=this.features[a];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(a){this.children.add(a),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(a)}removeChild(a){this.children.delete(a),this.enteringChildren&&this.enteringChildren.delete(a)}bindToMotionValue(a,s){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const l=La.has(a);l&&this.onBindTransform&&this.onBindTransform();const u=s.on("change",f=>{this.latestValues[a]=f,this.props.onUpdate&&Ot.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,a,s)),this.valueSubscriptions.set(a,()=>{u(),d&&d(),s.owner&&s.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in _a){const s=_a[a];if(!s)continue;const{isEnabled:l,Feature:u}=s;if(!this.features[a]&&u&&l(this.props)&&(this.features[a]=new u(this)),this.features[a]){const d=this.features[a];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Gt()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,s){this.latestValues[a]=s}update(a,s){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let l=0;l<xg.length;l++){const u=xg[l];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const d="on"+u,f=a[d];f&&(this.propEventSubscriptions[u]=this.on(u,f))}this.prevMotionValues=Ew(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(a),()=>s.variantChildren.delete(a)}addValue(a,s){const l=this.values.get(a);s!==l&&(l&&this.removeValue(a),this.bindToMotionValue(a,s),this.values.set(a,s),this.latestValues[a]=s.get())}removeValue(a){this.values.delete(a);const s=this.valueSubscriptions.get(a);s&&(s(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,s){if(this.props.values&&this.props.values[a])return this.props.values[a];let l=this.values.get(a);return l===void 0&&s!==void 0&&(l=Na(s===null?void 0:s,{owner:this}),this.addValue(a,l)),l}readValue(a,s){let l=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return l!=null&&(typeof l=="string"&&(jy(l)||Oy(l))?l=parseFloat(l):!BS(l)&&ni.test(s)&&(l=m1(a,s)),this.setBaseTarget(a,fe(l)?l.get():l)),fe(l)?l.get():l}setBaseTarget(a,s){this.baseTarget[a]=s}getBaseTarget(a){const{initial:s}=this.props;let l;if(typeof s=="string"||typeof s=="object"){const d=Ad(this.props,s,this.presenceContext?.custom);d&&(l=d[a])}if(s&&l!==void 0)return l;const u=this.getBaseTargetFromProps(this.props,a);return u!==void 0&&!fe(u)?u:this.initialValues[a]!==void 0&&l===void 0?void 0:this.baseTarget[a]}on(a,s){return this.events[a]||(this.events[a]=new ed),this.events[a].add(s)}notify(a,...s){this.events[a]&&this.events[a].notify(...s)}scheduleRenderMicrotask(){gd.render(this.render)}}class L1 extends Mw{constructor(){super(...arguments),this.KeyframeResolver=AS}sortInstanceNodePosition(a,s){return a.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(a,s){return a.style?a.style[s]:void 0}removeValueFromRenderState(a,{vars:s,style:l}){delete s[a],delete l[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;fe(a)&&(this.childSubscription=a.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function H1(n,{style:a,vars:s},l,u){const d=n.style;let f;for(f in a)d[f]=a[f];u?.applyProjectionStyles(d,l);for(f in s)d.setProperty(f,s[f])}function zw(n){return window.getComputedStyle(n)}class Dw extends L1{constructor(){super(...arguments),this.type="html",this.renderInstance=H1}readValueFromInstance(a,s){if(La.has(s))return this.projection?.isProjecting?Af(s):q2(a,s);{const l=zw(a),u=(ad(s)?l.getPropertyValue(s):l[s])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(a,{transformPagePoint:s}){return U1(a,s)}build(a,s,l){Sd(a,s,l.transformTemplate)}scrapeMotionValuesFromProps(a,s,l){return Ed(a,s,l)}}const Y1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Cw(n,a,s,l){H1(n,a,void 0,l);for(const u in a.attrs)n.setAttribute(Y1.has(u)?u:Md(u),a.attrs[u])}class jw extends L1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Gt}getBaseTargetFromProps(a,s){return a[s]}readValueFromInstance(a,s){if(La.has(s)){const l=d1(s);return l&&l.default||0}return s=Y1.has(s)?s:Md(s),a.getAttribute(s)}scrapeMotionValuesFromProps(a,s,l){return j1(a,s,l)}build(a,s,l){M1(a,s,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(a,s,l,u){Cw(a,s,l,u)}mount(a){this.isSVGTag=D1(a.tagName),super.mount(a)}}const Rw=(n,a)=>Td(n)?new jw(a):new Dw(a,{allowProjection:n!==J.Fragment});function Da(n,a,s){const l=n.getProps();return Ad(l,a,s!==void 0?s:l.custom,n)}const Nf=n=>Array.isArray(n);function Ow(n,a,s){n.hasValue(a)?n.getValue(a).set(s):n.addValue(a,Na(s))}function Vw(n){return Nf(n)?n[n.length-1]||0:n}function Nw(n,a){const s=Da(n,a);let{transitionEnd:l={},transition:u={},...d}=s||{};d={...d,...l};for(const f in d){const p=Vw(d[f]);Ow(n,f,p)}}function _w(n){return!!(fe(n)&&n.add)}function _f(n,a){const s=n.getValue("willChange");if(_w(s))return s.add(a);if(!s&&zn.WillChange){const l=new zn.WillChange("auto");n.addValue("willChange",l),l.add(a)}}function G1(n){return n.props[R1]}const Bw=n=>n!==null;function Uw(n,{repeat:a,repeatType:s="loop"},l){const u=n.filter(Bw),d=a&&s!=="loop"&&a%2===1?0:u.length-1;return u[d]}const kw={type:"spring",stiffness:500,damping:25,restSpeed:10},Lw=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Hw={type:"keyframes",duration:.8},Yw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Gw=(n,{keyframes:a})=>a.length>2?Hw:La.has(n)?n.startsWith("scale")?Lw(a[1]):kw:Yw;function qw({when:n,delay:a,delayChildren:s,staggerChildren:l,staggerDirection:u,repeat:d,repeatType:f,repeatDelay:p,from:h,elapsed:g,...y}){return!!Object.keys(y).length}const zd=(n,a,s,l={},u,d)=>f=>{const p=hd(l,n)||{},h=p.delay||l.delay||0;let{elapsed:g=0}=l;g=g-rn(h);const y={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:a.getVelocity(),...p,delay:-g,onUpdate:S=>{a.set(S),p.onUpdate&&p.onUpdate(S)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:n,motionValue:a,element:d?void 0:u};qw(p)||Object.assign(y,Gw(n,y)),y.duration&&(y.duration=rn(y.duration)),y.repeatDelay&&(y.repeatDelay=rn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Cf(y),y.delay===0&&(b=!0)),(zn.instantAnimations||zn.skipAnimations)&&(b=!0,Cf(y),y.delay=0),y.allowFlatten=!p.type&&!p.ease,b&&!d&&a.get()!==void 0){const S=Uw(y.keyframes,p);if(S!==void 0){Ot.update(()=>{y.onUpdate(S),y.onComplete()});return}}return p.isSync?new dd(y):new dS(y)};function Xw({protectedKeys:n,needsAnimating:a},s){const l=n.hasOwnProperty(s)&&a[s]!==!0;return a[s]=!1,l}function q1(n,a,{delay:s=0,transitionOverride:l,type:u}={}){let{transition:d=n.getDefaultTransition(),transitionEnd:f,...p}=a;l&&(d=l);const h=[],g=u&&n.animationState&&n.animationState.getState()[u];for(const y in p){const b=n.getValue(y,n.latestValues[y]??null),S=p[y];if(S===void 0||g&&Xw(g,y))continue;const C={delay:s,...hd(d||{},y)},O=b.get();if(O!==void 0&&!b.isAnimating&&!Array.isArray(S)&&S===O&&!C.velocity)continue;let H=!1;if(window.MotionHandoffAnimation){const Y=G1(n);if(Y){const q=window.MotionHandoffAnimation(Y,y,Ot);q!==null&&(C.startTime=q,H=!0)}}_f(n,y),b.start(zd(y,b,S,n.shouldReduceMotion&&c1.has(y)?{type:!1}:C,n,H));const P=b.animation;P&&h.push(P)}return f&&Promise.all(h).then(()=>{Ot.update(()=>{f&&Nw(n,f)})}),h}function X1(n,a,s,l=0,u=1){const d=Array.from(n).sort((g,y)=>g.sortNodePosition(y)).indexOf(a),f=n.size,p=(f-1)*l;return typeof s=="function"?s(d,f):u===1?d*l:p-d*l}function Bf(n,a,s={}){const l=Da(n,a,s.type==="exit"?n.presenceContext?.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=l||{};s.transitionOverride&&(u=s.transitionOverride);const d=l?()=>Promise.all(q1(n,l,s)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:b}=u;return Pw(n,a,h,g,y,b,s)}:()=>Promise.resolve(),{when:p}=u;if(p){const[h,g]=p==="beforeChildren"?[d,f]:[f,d];return h().then(()=>g())}else return Promise.all([d(),f(s.delay)])}function Pw(n,a,s=0,l=0,u=0,d=1,f){const p=[];for(const h of n.variantChildren)h.notify("AnimationStart",a),p.push(Bf(h,a,{...f,delay:s+(typeof l=="function"?0:l)+X1(n.variantChildren,h,l,u,d)}).then(()=>h.notify("AnimationComplete",a)));return Promise.all(p)}function Kw(n,a,s={}){n.notify("AnimationStart",a);let l;if(Array.isArray(a)){const u=a.map(d=>Bf(n,d,s));l=Promise.all(u)}else if(typeof a=="string")l=Bf(n,a,s);else{const u=typeof a=="function"?Da(n,a,s.custom):a;l=Promise.all(q1(n,u,s))}return l.then(()=>{n.notify("AnimationComplete",a)})}function P1(n,a){if(!Array.isArray(a))return!1;const s=a.length;if(s!==n.length)return!1;for(let l=0;l<s;l++)if(a[l]!==n[l])return!1;return!0}const Qw=bd.length;function K1(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?K1(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const a={};for(let s=0;s<Qw;s++){const l=bd[s],u=n.props[l];(ts(u)||u===!1)&&(a[l]=u)}return a}const Zw=[...xd].reverse(),Fw=xd.length;function Jw(n){return a=>Promise.all(a.map(({animation:s,options:l})=>Kw(n,s,l)))}function $w(n){let a=Jw(n),s=bg(),l=!0;const u=h=>(g,y)=>{const b=Da(n,y,h==="exit"?n.presenceContext?.custom:void 0);if(b){const{transition:S,transitionEnd:C,...O}=b;g={...g,...O,...C}}return g};function d(h){a=h(n)}function f(h){const{props:g}=n,y=K1(n.parent)||{},b=[],S=new Set;let C={},O=1/0;for(let P=0;P<Fw;P++){const Y=Zw[P],q=s[Y],k=g[Y]!==void 0?g[Y]:y[Y],$=ts(k),L=Y===h?q.isActive:null;L===!1&&(O=P);let K=k===y[Y]&&k!==g[Y]&&$;if(K&&l&&n.manuallyAnimateOnMount&&(K=!1),q.protectedKeys={...C},!q.isActive&&L===null||!k&&!q.prevProp||yo(k)||typeof k=="boolean")continue;const X=Ww(q.prevProp,k);let I=X||Y===h&&q.isActive&&!K&&$||P>O&&$,gt=!1;const jt=Array.isArray(k)?k:[k];let qt=jt.reduce(u(Y),{});L===!1&&(qt={});const{prevResolvedValues:kt={}}=q,Pe={...kt,...qt},je=G=>{I=!0,S.has(G)&&(gt=!0,S.delete(G)),q.needsAnimating[G]=!0;const W=n.getValue(G);W&&(W.liveStyle=!1)};for(const G in Pe){const W=qt[G],ot=kt[G];if(C.hasOwnProperty(G))continue;let T=!1;Nf(W)&&Nf(ot)?T=!P1(W,ot):T=W!==ot,T?W!=null?je(G):S.add(G):W!==void 0&&S.has(G)?je(G):q.protectedKeys[G]=!0}q.prevProp=k,q.prevResolvedValues=qt,q.isActive&&(C={...C,...qt}),l&&n.blockInitialAnimation&&(I=!1);const Lt=K&&X;I&&(!Lt||gt)&&b.push(...jt.map(G=>{const W={type:Y};if(typeof G=="string"&&l&&!Lt&&n.manuallyAnimateOnMount&&n.parent){const{parent:ot}=n,T=Da(ot,G);if(ot.enteringChildren&&T){const{delayChildren:U}=T.transition||{};W.delay=X1(ot.enteringChildren,n,U)}}return{animation:G,options:W}}))}if(S.size){const P={};if(typeof g.initial!="boolean"){const Y=Da(n,Array.isArray(g.initial)?g.initial[0]:g.initial);Y&&Y.transition&&(P.transition=Y.transition)}S.forEach(Y=>{const q=n.getBaseTarget(Y),k=n.getValue(Y);k&&(k.liveStyle=!0),P[Y]=q??null}),b.push({animation:P})}let H=!!b.length;return l&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(H=!1),l=!1,H?a(b):Promise.resolve()}function p(h,g){if(s[h].isActive===g)return Promise.resolve();n.variantChildren?.forEach(b=>b.animationState?.setActive(h,g)),s[h].isActive=g;const y=f(h);for(const b in s)s[b].protectedKeys={};return y}return{animateChanges:f,setActive:p,setAnimateFunction:d,getState:()=>s,reset:()=>{s=bg(),l=!0}}}function Ww(n,a){return typeof a=="string"?a!==n:Array.isArray(a)?!P1(a,n):!1}function Ti(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function bg(){return{animate:Ti(!0),whileInView:Ti(),whileHover:Ti(),whileTap:Ti(),whileDrag:Ti(),whileFocus:Ti(),exit:Ti()}}class ii{constructor(a){this.isMounted=!1,this.node=a}update(){}}class Iw extends ii{constructor(a){super(a),a.animationState||(a.animationState=$w(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();yo(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:s}=this.node.prevProps||{};a!==s&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let t8=0;class e8 extends ii{constructor(){super(...arguments),this.id=t8++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:s}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===l)return;const u=this.node.animationState.setActive("exit",!a);s&&!a&&u.then(()=>{s(this.id)})}mount(){const{register:a,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const n8={animation:{Feature:Iw},exit:{Feature:e8}};function ns(n,a,s,l={passive:!0}){return n.addEventListener(a,s,l),()=>n.removeEventListener(a,s)}function ls(n){return{point:{x:n.pageX,y:n.pageY}}}const i8=n=>a=>yd(a)&&n(a,ls(a));function Kr(n,a,s,l){return ns(n,a,i8(s),l)}const Q1=1e-4,a8=1-Q1,r8=1+Q1,Z1=.01,s8=0-Z1,l8=0+Z1;function me(n){return n.max-n.min}function o8(n,a,s){return Math.abs(n-a)<=s}function Sg(n,a,s,l=.5){n.origin=l,n.originPoint=Nt(a.min,a.max,n.origin),n.scale=me(s)/me(a),n.translate=Nt(s.min,s.max,n.origin)-n.originPoint,(n.scale>=a8&&n.scale<=r8||isNaN(n.scale))&&(n.scale=1),(n.translate>=s8&&n.translate<=l8||isNaN(n.translate))&&(n.translate=0)}function Qr(n,a,s,l){Sg(n.x,a.x,s.x,l?l.originX:void 0),Sg(n.y,a.y,s.y,l?l.originY:void 0)}function wg(n,a,s){n.min=s.min+a.min,n.max=n.min+me(a)}function c8(n,a,s){wg(n.x,a.x,s.x),wg(n.y,a.y,s.y)}function Tg(n,a,s){n.min=a.min-s.min,n.max=n.min+me(a)}function Zr(n,a,s){Tg(n.x,a.x,s.x),Tg(n.y,a.y,s.y)}function Ge(n){return[n("x"),n("y")]}const F1=({current:n})=>n?n.ownerDocument.defaultView:null,Ag=(n,a)=>Math.abs(n-a);function u8(n,a){const s=Ag(n.x,a.x),l=Ag(n.y,a.y);return Math.sqrt(s**2+l**2)}class J1{constructor(a,s,{transformPagePoint:l,contextWindow:u=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=$u(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,O=u8(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!O)return;const{point:H}=S,{timestamp:P}=re;this.history.push({...H,timestamp:P});const{onStart:Y,onMove:q}=this.handlers;C||(Y&&Y(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),q&&q(this.lastMoveEvent,S)},this.handlePointerMove=(S,C)=>{this.lastMoveEvent=S,this.lastMoveEventInfo=Ju(C,this.transformPagePoint),Ot.update(this.updatePoint,!0)},this.handlePointerUp=(S,C)=>{this.end();const{onEnd:O,onSessionEnd:H,resumeAnimation:P}=this.handlers;if(this.dragSnapToOrigin&&P&&P(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const Y=$u(S.type==="pointercancel"?this.lastMoveEventInfo:Ju(C,this.transformPagePoint),this.history);this.startEvent&&O&&O(S,Y),H&&H(S,Y)},!yd(a))return;this.dragSnapToOrigin=d,this.handlers=s,this.transformPagePoint=l,this.distanceThreshold=f,this.contextWindow=u||window;const p=ls(a),h=Ju(p,this.transformPagePoint),{point:g}=h,{timestamp:y}=re;this.history=[{...g,timestamp:y}];const{onSessionStart:b}=s;b&&b(a,$u(h,this.history)),this.removeListeners=as(Kr(this.contextWindow,"pointermove",this.handlePointerMove),Kr(this.contextWindow,"pointerup",this.handlePointerUp),Kr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),ei(this.updatePoint)}}function Ju(n,a){return a?{point:a(n.point)}:n}function Eg(n,a){return{x:n.x-a.x,y:n.y-a.y}}function $u({point:n},a){return{point:n,delta:Eg(n,$1(a)),offset:Eg(n,f8(a)),velocity:d8(a,.1)}}function f8(n){return n[0]}function $1(n){return n[n.length-1]}function d8(n,a){if(n.length<2)return{x:0,y:0};let s=n.length-1,l=null;const u=$1(n);for(;s>=0&&(l=n[s],!(u.timestamp-l.timestamp>rn(a)));)s--;if(!l)return{x:0,y:0};const d=sn(u.timestamp-l.timestamp);if(d===0)return{x:0,y:0};const f={x:(u.x-l.x)/d,y:(u.y-l.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function m8(n,{min:a,max:s},l){return a!==void 0&&n<a?n=l?Nt(a,n,l.min):Math.max(n,a):s!==void 0&&n>s&&(n=l?Nt(s,n,l.max):Math.min(n,s)),n}function Mg(n,a,s){return{min:a!==void 0?n.min+a:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function h8(n,{top:a,left:s,bottom:l,right:u}){return{x:Mg(n.x,s,u),y:Mg(n.y,a,l)}}function zg(n,a){let s=a.min-n.min,l=a.max-n.max;return a.max-a.min<n.max-n.min&&([s,l]=[l,s]),{min:s,max:l}}function p8(n,a){return{x:zg(n.x,a.x),y:zg(n.y,a.y)}}function g8(n,a){let s=.5;const l=me(n),u=me(a);return u>l?s=$r(a.min,a.max-l,n.min):l>u&&(s=$r(n.min,n.max-u,a.min)),Mn(0,1,s)}function y8(n,a){const s={};return a.min!==void 0&&(s.min=a.min-n.min),a.max!==void 0&&(s.max=a.max-n.min),s}const Uf=.35;function v8(n=Uf){return n===!1?n=0:n===!0&&(n=Uf),{x:Dg(n,"left","right"),y:Dg(n,"top","bottom")}}function Dg(n,a,s){return{min:Cg(n,a),max:Cg(n,s)}}function Cg(n,a){return typeof n=="number"?n:n[a]||0}const x8=new WeakMap;class b8{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Gt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=a}start(a,{snapToCursor:s=!1,distanceThreshold:l}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const d=b=>{const{dragSnapToOrigin:S}=this.getProps();S?this.pauseAnimation():this.stopAnimation(),s&&this.snapToCursor(ls(b).point)},f=(b,S)=>{const{drag:C,dragPropagation:O,onDragStart:H}=this.getProps();if(C&&!O&&(this.openDragLock&&this.openDragLock(),this.openDragLock=DS(C),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ge(Y=>{let q=this.getAxisMotionValue(Y).get()||0;if(ln.test(q)){const{projection:k}=this.visualElement;if(k&&k.layout){const $=k.layout.layoutBox[Y];$&&(q=me($)*(parseFloat(q)/100))}}this.originPoint[Y]=q}),H&&Ot.postRender(()=>H(b,S)),_f(this.visualElement,"transform");const{animationState:P}=this.visualElement;P&&P.setActive("whileDrag",!0)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:C,dragDirectionLock:O,onDirectionLock:H,onDrag:P}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:Y}=S;if(O&&this.currentDirection===null){this.currentDirection=S8(Y),this.currentDirection!==null&&H&&H(this.currentDirection);return}this.updateAxis("x",S.point,Y),this.updateAxis("y",S.point,Y),this.visualElement.render(),P&&P(b,S)},h=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>Ge(b=>this.getAnimationState(b)==="paused"&&this.getAxisMotionValue(b).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new J1(a,{onSessionStart:d,onStart:f,onMove:p,onSessionEnd:h,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:l,contextWindow:F1(this.visualElement)})}stop(a,s){const l=a||this.latestPointerEvent,u=s||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!u||!l)return;const{velocity:f}=u;this.startAnimation(f);const{onDragEnd:p}=this.getProps();p&&Ot.postRender(()=>p(l,u))}cancel(){this.isDragging=!1;const{projection:a,animationState:s}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}updateAxis(a,s,l){const{drag:u}=this.getProps();if(!l||!zl(a,u,this.currentDirection))return;const d=this.getAxisMotionValue(a);let f=this.originPoint[a]+l[a];this.constraints&&this.constraints[a]&&(f=m8(f,this.constraints[a],this.elastic[a])),d.set(f)}resolveConstraints(){const{dragConstraints:a,dragElastic:s}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;a&&Aa(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&l?this.constraints=h8(l.layoutBox,a):this.constraints=!1,this.elastic=v8(s),u!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&Ge(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=y8(l.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:s}=this.getProps();if(!a||!Aa(a))return!1;const l=a.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const d=ww(l,u.root,this.visualElement.getTransformPagePoint());let f=p8(u.layout.layoutBox,d);if(s){const p=s(xw(f));this.hasMutatedConstraints=!!p,p&&(f=N1(p))}return f}startAnimation(a){const{drag:s,dragMomentum:l,dragElastic:u,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},g=Ge(y=>{if(!zl(y,s,this.currentDirection))return;let b=h&&h[y]||{};f&&(b={min:0,max:0});const S=u?200:1e6,C=u?40:1e7,O={type:"inertia",velocity:l?a[y]:0,bounceStiffness:S,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...d,...b};return this.startAxisValueAnimation(y,O)});return Promise.all(g).then(p)}startAxisValueAnimation(a,s){const l=this.getAxisMotionValue(a);return _f(this.visualElement,a),l.start(zd(a,l,0,s,this.visualElement,!1))}stopAnimation(){Ge(a=>this.getAxisMotionValue(a).stop())}pauseAnimation(){Ge(a=>this.getAxisMotionValue(a).animation?.pause())}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const s=`_drag${a.toUpperCase()}`,l=this.visualElement.getProps(),u=l[s];return u||this.visualElement.getValue(a,(l.initial?l.initial[a]:void 0)||0)}snapToCursor(a){Ge(s=>{const{drag:l}=this.getProps();if(!zl(s,l,this.currentDirection))return;const{projection:u}=this.visualElement,d=this.getAxisMotionValue(s);if(u&&u.layout){const{min:f,max:p}=u.layout.layoutBox[s];d.set(a[s]-Nt(f,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:s}=this.getProps(),{projection:l}=this.visualElement;if(!Aa(s)||!l||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Ge(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const h=p.get();u[f]=g8({min:h,max:h},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),Ge(f=>{if(!zl(f,a,null))return;const p=this.getAxisMotionValue(f),{min:h,max:g}=this.constraints[f];p.set(Nt(h,g,u[f]))})}addListeners(){if(!this.visualElement.current)return;x8.set(this.visualElement,this);const a=this.visualElement.current,s=Kr(a,"pointerdown",h=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(h)}),l=()=>{const{dragConstraints:h}=this.getProps();Aa(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,d=u.addEventListener("measure",l);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Ot.read(l);const f=ns(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",({delta:h,hasLayoutChanged:g})=>{this.isDragging&&g&&(Ge(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=h[y].translate,b.set(b.get()+h[y].translate))}),this.visualElement.render())});return()=>{f(),s(),d(),p&&p()}}getProps(){const a=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:l=!1,dragPropagation:u=!1,dragConstraints:d=!1,dragElastic:f=Uf,dragMomentum:p=!0}=a;return{...a,drag:s,dragDirectionLock:l,dragPropagation:u,dragConstraints:d,dragElastic:f,dragMomentum:p}}}function zl(n,a,s){return(a===!0||a===n)&&(s===null||s===n)}function S8(n,a=10){let s=null;return Math.abs(n.y)>a?s="y":Math.abs(n.x)>a&&(s="x"),s}class w8 extends ii{constructor(a){super(a),this.removeGroupControls=qe,this.removeListeners=qe,this.controls=new b8(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qe}unmount(){this.removeGroupControls(),this.removeListeners()}}const jg=n=>(a,s)=>{n&&Ot.postRender(()=>n(a,s))};class T8 extends ii{constructor(){super(...arguments),this.removePointerDownListener=qe}onPointerDown(a){this.session=new J1(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:F1(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:s,onPan:l,onPanEnd:u}=this.node.getProps();return{onSessionStart:jg(a),onStart:jg(s),onMove:l,onEnd:(d,f)=>{delete this.session,u&&Ot.postRender(()=>u(d,f))}}}mount(){this.removePointerDownListener=Kr(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const $l={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Rg(n,a){return a.max===a.min?0:n/(a.max-a.min)*100}const Lr={correct:(n,a)=>{if(!a.target)return n;if(typeof n=="string")if(lt.test(n))n=parseFloat(n);else return n;const s=Rg(n,a.target.x),l=Rg(n,a.target.y);return`${s}% ${l}%`}},A8={correct:(n,{treeScale:a,projectionDelta:s})=>{const l=n,u=ni.parse(n);if(u.length>5)return l;const d=ni.createTransformer(n),f=typeof u[0]!="number"?1:0,p=s.x.scale*a.x,h=s.y.scale*a.y;u[0+f]/=p,u[1+f]/=h;const g=Nt(p,h,.5);return typeof u[2+f]=="number"&&(u[2+f]/=g),typeof u[3+f]=="number"&&(u[3+f]/=g),d(u)}};let Wu=!1;class E8 extends J.Component{componentDidMount(){const{visualElement:a,layoutGroup:s,switchLayoutGroup:l,layoutId:u}=this.props,{projection:d}=a;QS(M8),d&&(s.group&&s.group.add(d),l&&l.register&&u&&l.register(d),Wu&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),$l.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:s,visualElement:l,drag:u,isPresent:d}=this.props,{projection:f}=l;return f&&(f.isPresent=d,Wu=!0,u||a.layoutDependency!==s||s===void 0||a.isPresent!==d?f.willUpdate():this.safeToRemove(),a.isPresent!==d&&(d?f.promote():f.relegate()||Ot.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),gd.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:s,switchLayoutGroup:l}=this.props,{projection:u}=a;Wu=!0,u&&(u.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(u),l&&l.deregister&&l.deregister(u))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function W1(n){const[a,s]=b1(),l=J.useContext(Zf);return x.jsx(E8,{...n,layoutGroup:l,switchLayoutGroup:J.useContext(O1),isPresent:a,safeToRemove:s})}const M8={borderRadius:{...Lr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Lr,borderTopRightRadius:Lr,borderBottomLeftRadius:Lr,borderBottomRightRadius:Lr,boxShadow:A8};function z8(n,a,s){const l=fe(n)?n:Na(n);return l.start(zd("",l,a,s)),l.animation}const D8=(n,a)=>n.depth-a.depth;class C8{constructor(){this.children=[],this.isDirty=!1}add(a){$f(this.children,a),this.isDirty=!0}remove(a){Wf(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(D8),this.isDirty=!1,this.children.forEach(a)}}function j8(n,a){const s=xe.now(),l=({timestamp:u})=>{const d=u-s;d>=a&&(ei(l),n(d-a))};return Ot.setup(l,!0),()=>ei(l)}const I1=["TopLeft","TopRight","BottomLeft","BottomRight"],R8=I1.length,Og=n=>typeof n=="string"?parseFloat(n):n,Vg=n=>typeof n=="number"||lt.test(n);function O8(n,a,s,l,u,d){u?(n.opacity=Nt(0,s.opacity??1,V8(l)),n.opacityExit=Nt(a.opacity??1,0,N8(l))):d&&(n.opacity=Nt(a.opacity??1,s.opacity??1,l));for(let f=0;f<R8;f++){const p=`border${I1[f]}Radius`;let h=Ng(a,p),g=Ng(s,p);if(h===void 0&&g===void 0)continue;h||(h=0),g||(g=0),h===0||g===0||Vg(h)===Vg(g)?(n[p]=Math.max(Nt(Og(h),Og(g),l),0),(ln.test(g)||ln.test(h))&&(n[p]+="%")):n[p]=g}(a.rotate||s.rotate)&&(n.rotate=Nt(a.rotate||0,s.rotate||0,l))}function Ng(n,a){return n[a]!==void 0?n[a]:n.borderRadius}const V8=tv(0,.5,Hy),N8=tv(.5,.95,qe);function tv(n,a,s){return l=>l<n?0:l>a?1:s($r(n,a,l))}function _g(n,a){n.min=a.min,n.max=a.max}function Ye(n,a){_g(n.x,a.x),_g(n.y,a.y)}function Bg(n,a){n.translate=a.translate,n.scale=a.scale,n.originPoint=a.originPoint,n.origin=a.origin}function Ug(n,a,s,l,u){return n-=a,n=so(n,1/s,l),u!==void 0&&(n=so(n,1/u,l)),n}function _8(n,a=0,s=1,l=.5,u,d=n,f=n){if(ln.test(a)&&(a=parseFloat(a),a=Nt(f.min,f.max,a/100)-f.min),typeof a!="number")return;let p=Nt(d.min,d.max,l);n===d&&(p-=a),n.min=Ug(n.min,a,s,p,u),n.max=Ug(n.max,a,s,p,u)}function kg(n,a,[s,l,u],d,f){_8(n,a[s],a[l],a[u],a.scale,d,f)}const B8=["x","scaleX","originX"],U8=["y","scaleY","originY"];function Lg(n,a,s,l){kg(n.x,a,B8,s?s.x:void 0,l?l.x:void 0),kg(n.y,a,U8,s?s.y:void 0,l?l.y:void 0)}function Hg(n){return n.translate===0&&n.scale===1}function ev(n){return Hg(n.x)&&Hg(n.y)}function Yg(n,a){return n.min===a.min&&n.max===a.max}function k8(n,a){return Yg(n.x,a.x)&&Yg(n.y,a.y)}function Gg(n,a){return Math.round(n.min)===Math.round(a.min)&&Math.round(n.max)===Math.round(a.max)}function nv(n,a){return Gg(n.x,a.x)&&Gg(n.y,a.y)}function qg(n){return me(n.x)/me(n.y)}function Xg(n,a){return n.translate===a.translate&&n.scale===a.scale&&n.originPoint===a.originPoint}class L8{constructor(){this.members=[]}add(a){$f(this.members,a),a.scheduleRender()}remove(a){if(Wf(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(a){const s=this.members.findIndex(u=>a===u);if(s===0)return!1;let l;for(let u=s;u>=0;u--){const d=this.members[u];if(d.isPresent!==!1){l=d;break}}return l?(this.promote(l),!0):!1}promote(a,s){const l=this.lead;if(a!==l&&(this.prevLead=l,this.lead=a,a.show(),l)){l.instance&&l.scheduleRender(),a.scheduleRender(),a.resumeFrom=l,s&&(a.resumeFrom.preserveOpacity=!0),l.snapshot&&(a.snapshot=l.snapshot,a.snapshot.latestValues=l.animationValues||l.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:u}=a.options;u===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(a=>{const{options:s,resumingFrom:l}=a;s.onExitComplete&&s.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(a=>{a.instance&&a.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function H8(n,a,s){let l="";const u=n.x.translate/a.x,d=n.y.translate/a.y,f=s?.z||0;if((u||d||f)&&(l=`translate3d(${u}px, ${d}px, ${f}px) `),(a.x!==1||a.y!==1)&&(l+=`scale(${1/a.x}, ${1/a.y}) `),s){const{transformPerspective:g,rotate:y,rotateX:b,rotateY:S,skewX:C,skewY:O}=s;g&&(l=`perspective(${g}px) ${l}`),y&&(l+=`rotate(${y}deg) `),b&&(l+=`rotateX(${b}deg) `),S&&(l+=`rotateY(${S}deg) `),C&&(l+=`skewX(${C}deg) `),O&&(l+=`skewY(${O}deg) `)}const p=n.x.scale*a.x,h=n.y.scale*a.y;return(p!==1||h!==1)&&(l+=`scale(${p}, ${h})`),l||"none"}const Iu=["","X","Y","Z"],Y8=1e3;let G8=0;function tf(n,a,s,l){const{latestValues:u}=a;u[n]&&(s[n]=u[n],a.setStaticValue(n,0),l&&(l[n]=0))}function iv(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:a}=n.options;if(!a)return;const s=G1(a);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:u,layoutId:d}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",Ot,!(u||d))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&iv(l)}function av({attachResizeListener:n,defaultParent:a,measureScroll:s,checkIsScrollRoot:l,resetTransform:u}){return class{constructor(f={},p=a?.()){this.id=G8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(P8),this.nodes.forEach(F8),this.nodes.forEach(J8),this.nodes.forEach(K8)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new C8)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new ed),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const h=this.eventHandlers.get(f);h&&h.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=x1(f)&&!NS(f),this.instance=f;const{layoutId:p,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),n){let y,b=0;const S=()=>this.root.updateBlockedByResize=!1;Ot.read(()=>{b=window.innerWidth}),n(f,()=>{const C=window.innerWidth;C!==b&&(b=C,this.root.updateBlockedByResize=!0,y&&y(),y=j8(S,250),$l.hasAnimatedSinceResize&&($l.hasAnimatedSinceResize=!1,this.nodes.forEach(Qg)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||h)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const O=this.options.transition||g.getDefaultTransition()||eT,{onLayoutAnimationStart:H,onLayoutAnimationComplete:P}=g.getProps(),Y=!this.targetLayout||!nv(this.targetLayout,C),q=!b&&S;if(this.options.layoutRoot||this.resumeFrom||q||b&&(Y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const k={...hd(O,"layout"),onPlay:H,onComplete:P};(g.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k),this.setAnimationOrigin(y,q)}else b||Qg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ei(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach($8),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&iv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Pg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Kg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Z8),this.nodes.forEach(q8),this.nodes.forEach(X8)):this.nodes.forEach(Kg),this.clearAllSnapshots();const p=xe.now();re.delta=Mn(0,1e3/60,p-re.timestamp),re.timestamp=p,re.isProcessing=!0,Gu.update.process(re),Gu.preRender.process(re),Gu.render.process(re),re.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,gd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Q8),this.sharedNodes.forEach(W8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ot.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ot.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!me(this.snapshot.measuredBox.x)&&!me(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Gt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p&&this.instance){const h=l(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:h,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!u)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!ev(this.projectionDelta),h=this.getTransformTemplate(),g=h?h(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;f&&this.instance&&(p||Ai(this.latestValues)||y)&&(u(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return f&&(h=this.removeTransform(h)),nT(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Gt();const p=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(iT))){const{scroll:g}=this.root;g&&(Ea(p.x,g.offset.x),Ea(p.y,g.offset.y))}return p}removeElementScroll(f){const p=Gt();if(Ye(p,f),this.scroll?.wasRoot)return p;for(let h=0;h<this.path.length;h++){const g=this.path[h],{scroll:y,options:b}=g;g!==this.root&&y&&b.layoutScroll&&(y.wasRoot&&Ye(p,f),Ea(p.x,y.offset.x),Ea(p.y,y.offset.y))}return p}applyTransform(f,p=!1){const h=Gt();Ye(h,f);for(let g=0;g<this.path.length;g++){const y=this.path[g];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ma(h,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Ai(y.latestValues)&&Ma(h,y.latestValues)}return Ai(this.latestValues)&&Ma(h,this.latestValues),h}removeTransform(f){const p=Gt();Ye(p,f);for(let h=0;h<this.path.length;h++){const g=this.path[h];if(!g.instance||!Ai(g.latestValues))continue;Rf(g.latestValues)&&g.updateSnapshot();const y=Gt(),b=g.measurePageBox();Ye(y,b),Lg(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return Ai(this.latestValues)&&Lg(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==re.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(f||h&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!(!this.layout||!(y||b))){if(this.resolvedRelativeTargetAt=re.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Gt(),this.relativeTargetOrigin=Gt(),Zr(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),Ye(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Gt(),this.targetWithTransforms=Gt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),c8(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ye(this.target,this.layout.layoutBox),B1(this.target,this.targetDelta)):Ye(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Gt(),this.relativeTargetOrigin=Gt(),Zr(this.relativeTargetOrigin,this.target,S.target),Ye(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Rf(this.parent.latestValues)||_1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),p=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===re.timestamp&&(h=!1),h)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Ye(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;Sw(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Gt());const{target:C}=f;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Bg(this.prevProjectionDelta.x,this.projectionDelta.x),Bg(this.prevProjectionDelta.y,this.projectionDelta.y)),Qr(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!Xg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Xg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=za(),this.projectionDelta=za(),this.projectionDeltaWithTransform=za()}setAnimationOrigin(f,p=!1){const h=this.snapshot,g=h?h.latestValues:{},y={...this.latestValues},b=za();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const S=Gt(),C=h?h.source:void 0,O=this.layout?this.layout.source:void 0,H=C!==O,P=this.getStack(),Y=!P||P.members.length<=1,q=!!(H&&!Y&&this.options.crossfade===!0&&!this.path.some(tT));this.animationProgress=0;let k;this.mixTargetDelta=$=>{const L=$/1e3;Zg(b.x,f.x,L),Zg(b.y,f.y,L),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Zr(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),I8(this.relativeTarget,this.relativeTargetOrigin,S,L),k&&k8(this.relativeTarget,k)&&(this.isProjectionDirty=!1),k||(k=Gt()),Ye(k,this.relativeTarget)),H&&(this.animationValues=y,O8(y,g,this.latestValues,L,q,Y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ei(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ot.update(()=>{$l.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Na(0)),this.currentAnimation=z8(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),f.onUpdate&&f.onUpdate(p)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Y8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:h,layout:g,latestValues:y}=f;if(!(!p||!h||!g)){if(this!==f&&this.layout&&g&&rv(this.options.animationType,this.layout.layoutBox,g.layoutBox)){h=this.target||Gt();const b=me(this.layout.layoutBox.x);h.x.min=f.target.x.min,h.x.max=h.x.min+b;const S=me(this.layout.layoutBox.y);h.y.min=f.target.y.min,h.y.max=h.y.min+S}Ye(p,h),Ma(p,y),Qr(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new L8),this.sharedNodes.get(f).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:h}={}){const g=this.getStack();g&&g.promote(this,h),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:h}=f;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const g={};h.z&&tf("z",f,g,this.animationValues);for(let y=0;y<Iu.length;y++)tf(`rotate${Iu[y]}`,f,g,this.animationValues),tf(`skew${Iu[y]}`,f,g,this.animationValues);f.render();for(const y in g)f.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);f.scheduleRender()}applyProjectionStyles(f,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=Jl(p?.pointerEvents)||"",f.transform=h?h(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=Jl(p?.pointerEvents)||""),this.hasProjected&&!Ai(this.latestValues)&&(f.transform=h?h({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=H8(this.projectionDeltaWithTransform,this.treeScale,y);h&&(b=h(y,b)),f.transform=b;const{x:S,y:C}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${C.origin*100}% 0`,g.animationValues?f.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const O in es){if(y[O]===void 0)continue;const{correct:H,applyTo:P,isCSSVariable:Y}=es[O],q=b==="none"?y[O]:H(y[O],g);if(P){const k=P.length;for(let $=0;$<k;$++)f[P[$]]=q}else Y?this.options.visualElement.renderState.vars[O]=q:f[O]=q}this.options.layoutId&&(f.pointerEvents=g===this?Jl(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Pg),this.root.sharedNodes.clear()}}}function q8(n){n.updateLayout()}function X8(n){const a=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&a&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:l}=n.layout,{animationType:u}=n.options,d=a.source!==n.layout.source;u==="size"?Ge(y=>{const b=d?a.measuredBox[y]:a.layoutBox[y],S=me(b);b.min=s[y].min,b.max=b.min+S}):rv(u,a.layoutBox,s)&&Ge(y=>{const b=d?a.measuredBox[y]:a.layoutBox[y],S=me(s[y]);b.max=b.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+S)});const f=za();Qr(f,s,a.layoutBox);const p=za();d?Qr(p,n.applyTransform(l,!0),a.measuredBox):Qr(p,s,a.layoutBox);const h=!ev(f);let g=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:b,layout:S}=y;if(b&&S){const C=Gt();Zr(C,a.layoutBox,b.layoutBox);const O=Gt();Zr(O,s,S.layoutBox),nv(C,O)||(g=!0),y.options.layoutRoot&&(n.relativeTarget=O,n.relativeTargetOrigin=C,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:a,delta:p,layoutDelta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function P8(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function K8(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Q8(n){n.clearSnapshot()}function Pg(n){n.clearMeasurements()}function Kg(n){n.isLayoutDirty=!1}function Z8(n){const{visualElement:a}=n.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),n.resetTransform()}function Qg(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function F8(n){n.resolveTargetDelta()}function J8(n){n.calcProjection()}function $8(n){n.resetSkewAndRotation()}function W8(n){n.removeLeadSnapshot()}function Zg(n,a,s){n.translate=Nt(a.translate,0,s),n.scale=Nt(a.scale,1,s),n.origin=a.origin,n.originPoint=a.originPoint}function Fg(n,a,s,l){n.min=Nt(a.min,s.min,l),n.max=Nt(a.max,s.max,l)}function I8(n,a,s,l){Fg(n.x,a.x,s.x,l),Fg(n.y,a.y,s.y,l)}function tT(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const eT={duration:.45,ease:[.4,0,.1,1]},Jg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),$g=Jg("applewebkit/")&&!Jg("chrome/")?Math.round:qe;function Wg(n){n.min=$g(n.min),n.max=$g(n.max)}function nT(n){Wg(n.x),Wg(n.y)}function rv(n,a,s){return n==="position"||n==="preserve-aspect"&&!o8(qg(a),qg(s),.2)}function iT(n){return n!==n.root&&n.scroll?.wasRoot}const aT=av({attachResizeListener:(n,a)=>ns(n,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ef={current:void 0},sv=av({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ef.current){const n=new aT({});n.mount(window),n.setOptions({layoutScroll:!0}),ef.current=n}return ef.current},resetTransform:(n,a)=>{n.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),rT={pan:{Feature:T8},drag:{Feature:w8,ProjectionNode:sv,MeasureLayout:W1}};function Ig(n,a,s){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",s==="Start");const u="onHover"+s,d=l[u];d&&Ot.postRender(()=>d(a,ls(a)))}class sT extends ii{mount(){const{current:a}=this.node;a&&(this.unmount=CS(a,(s,l)=>(Ig(this.node,l,"Start"),u=>Ig(this.node,u,"End"))))}unmount(){}}class lT extends ii{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=as(ns(this.node.current,"focus",()=>this.onFocus()),ns(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ty(n,a,s){const{props:l}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",s==="Start");const u="onTap"+(s==="End"?"":s),d=l[u];d&&Ot.postRender(()=>d(a,ls(a)))}class oT extends ii{mount(){const{current:a}=this.node;a&&(this.unmount=VS(a,(s,l)=>(ty(this.node,l,"Start"),(u,{success:d})=>ty(this.node,u,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const kf=new WeakMap,nf=new WeakMap,cT=n=>{const a=kf.get(n.target);a&&a(n)},uT=n=>{n.forEach(cT)};function fT({root:n,...a}){const s=n||document;nf.has(s)||nf.set(s,{});const l=nf.get(s),u=JSON.stringify(a);return l[u]||(l[u]=new IntersectionObserver(uT,{root:n,...a})),l[u]}function dT(n,a,s){const l=fT(a);return kf.set(n,s),l.observe(n),()=>{kf.delete(n),l.unobserve(n)}}const mT={some:0,all:1};class hT extends ii{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:s,margin:l,amount:u="some",once:d}=a,f={root:s?s.current:void 0,rootMargin:l,threshold:typeof u=="number"?u:mT[u]},p=h=>{const{isIntersecting:g}=h;if(this.isInView===g||(this.isInView=g,d&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),S=g?y:b;S&&S(h)};return dT(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:s}=this.node;["amount","margin","root"].some(pT(a,s))&&this.startObserver()}unmount(){}}function pT({viewport:n={}},{viewport:a={}}={}){return s=>n[s]!==a[s]}const gT={inView:{Feature:hT},tap:{Feature:oT},focus:{Feature:lT},hover:{Feature:sT}},yT={layout:{ProjectionNode:sv,MeasureLayout:W1}},vT={...n8,...gT,...rT,...yT},Q=vw(vT,Rw),xT=E(Q.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 255, 136, 0.2);
  z-index: 1000;
  padding: 1rem 0;
  min-height: 70px; /* Ensure minimum touch target height */
  
  /* Mobile-first: Start with mobile styles */
  @media (min-width: 769px) {
    padding: 1.2rem 0;
    min-height: 80px;
  }
`,bT=E.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile-first: smaller padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* Enhanced for larger screens */
  @media (min-width: 769px) {
    padding: 0 2rem;
  }
`,ST=E(Q.div)`
  font-family: 'Orbitron', monospace;
  font-size: 1.25rem; /* Mobile-first: smaller size */
  font-weight: 900;
  color: #00ff88;
  text-shadow: 0 0 10px #00ff88;
  line-height: 1.2;
  cursor: pointer;
  
  /* Enhanced for tablets and desktop */
  @media (min-width: 480px) {
    font-size: 1.4rem;
  }
  
  @media (min-width: 769px) {
    font-size: 1.6rem;
  }
`,wT=E.ul`
  display: none; /* Mobile-first: hidden by default */
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  
  /* Show on larger screens */
  @media (min-width: 969px) {
    display: flex;
    gap: 2rem;
  }
`,TT=E(Q.a)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0; /* Better touch target */
  
  &:hover {
    color: #00ff88;
    text-shadow: 0 0 8px #00ff88;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #00ff88;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`,AT=E.button`
  display: flex; /* Mobile-first: shown by default */
  align-items: center;
  justify-content: center;
  background: none;
  border: 2px solid rgba(0, 255, 136, 0.3);
  color: #ffffff;
  width: 48px; /* Minimum 44px touch target */
  height: 48px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    border-color: rgba(0, 255, 136, 0.6);
    background: rgba(0, 255, 136, 0.1);
    color: #00ff88;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  /* Hide on desktop */
  @media (min-width: 969px) {
    display: none;
  }
`,ET=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  span {
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    border-radius: 1px;
    transition: all 0.3s ease;
    transform-origin: center;
    
    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
  
  /* Transform to X when menu is open */
  ${n=>n.isOpen&&`
    span:first-child {
      transform: translateY(6px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
      transform: scale(0);
    }
    span:last-child {
      transform: translateY(-6px) rotate(-45deg);
    }
  `}
`,MT=E(Q.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 15, 15, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
  
  /* Enhanced spacing for larger mobile screens */
  @media (min-width: 480px) {
    gap: 2.5rem;
  }
  
  @media (min-width: 769px) {
    gap: 3rem;
  }
`,zT=E(Q.a)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.25rem; /* Mobile-first: readable size */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-align: center;
  min-width: 200px;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  
  &:hover, &:focus {
    color: #00ff88;
    text-shadow: 0 0 15px #00ff88;
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  /* Enhanced for larger mobile screens */
  @media (min-width: 480px) {
    font-size: 1.4rem;
    padding: 1.2rem 2.5rem;
    min-width: 240px;
  }
  
  @media (min-width: 769px) {
    font-size: 1.6rem;
    padding: 1.5rem 3rem;
    min-width: 280px;
  }
`,DT=()=>{const[n,a]=J.useState(!1),[s,l]=J.useState(!1),u=[{href:"#home",label:"Home"},{href:"#about",label:"About"},{href:"#education",label:"Education"},{href:"#toolbox",label:"Toolbox"},{href:"#projects",label:"Projects"},{href:"#experience",label:"Experience"},{href:"#publications",label:"Publications"},{href:"#bucket-list",label:"Bucket List"},{href:"#contact",label:"Contact"}];J.useEffect(()=>{const p=()=>{a(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const d=()=>{l(!s),document.body.style.overflow=s?"unset":"hidden"},f=p=>{l(!1),document.body.style.overflow="unset";const h=document.querySelector(p);h&&h.scrollIntoView({behavior:"smooth"})};return J.useEffect(()=>()=>{document.body.style.overflow="unset"},[]),x.jsxs(x.Fragment,{children:[x.jsx(xT,{initial:{y:-100},animate:{y:0},transition:{duration:.8,ease:"easeOut"},style:{boxShadow:n?"0 10px 30px rgba(0, 255, 136, 0.1)":"none"},children:x.jsxs(bT,{children:[x.jsx(ST,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>f("#home"),children:"Unmesh Achar"}),x.jsx(wT,{children:u.map((p,h)=>x.jsx("li",{children:x.jsx(TT,{href:p.href,onClick:g=>{g.preventDefault(),f(p.href)},whileHover:{scale:1.1},whileTap:{scale:.95},initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:h*.1},children:p.label})},p.href))}),x.jsx(AT,{onClick:d,"aria-label":s?"Close menu":"Open menu","aria-expanded":s,children:x.jsxs(ET,{isOpen:s,children:[x.jsx("span",{}),x.jsx("span",{}),x.jsx("span",{})]})})]})}),x.jsx(po,{children:s&&x.jsx(MT,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{type:"tween",duration:.3},children:u.map((p,h)=>x.jsx(zT,{href:p.href,onClick:g=>{g.preventDefault(),f(p.href)},initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:h*.1,duration:.5},whileHover:{scale:1.05},whileTap:{scale:.95},children:p.label},p.href))})})]})},CT=E.section`
  id: home;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  overflow: hidden;
`,jT=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 1rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 80px);
  gap: 2rem;
  
  @media (min-width: 769px) {
    flex-direction: row;
    padding: 0 2rem;
    text-align: left;
    gap: 4rem;
    min-height: 100vh;
  }
`,RT=E.div`
  z-index: 2;
  
  @media (max-width: 968px) {
    order: 2;
  }
`,OT=E(Q.h1)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.2;
  }
`,VT=E(Q.h2)`
  font-family: 'Space Mono', monospace;
  font-size: clamp(1rem, 4vw, 1.8rem);
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-weight: 400;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,NT=E(Q.p)`
  font-size: clamp(0.9rem, 3vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 100%;
  
  @media (min-width: 769px) {
    max-width: 500px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
`,_T=E(Q.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
  
  @media (min-width: 769px) {
    flex-direction: row;
    max-width: none;
    gap: 1.5rem;
  }
`,BT=E(Q.a)`
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 255, 136, 0.4);
  }
  
  @media (min-width: 769px) {
    width: auto;
    padding: 1rem 2.5rem;
    font-size: 1rem;
  }
`,UT=E(Q.a)`
  background: transparent;
  border: 2px solid #00ff88;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  color: #00ff88;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  width: 100%;
  
  &:hover {
    background: #00ff88;
    color: #0f0f0f;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 255, 136, 0.3);
  }
  
  @media (min-width: 769px) {
    width: auto;
    padding: 1rem 2.5rem;
    font-size: 1rem;
  }
`,kT=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  
  @media (min-width: 769px) {
    margin-bottom: 0;
    flex: 1;
  }
`,LT=E(Q.img)`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #00ff88;
  box-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
  
  @media (min-width: 769px) {
    width: 350px;
    height: 350px;
    border: 4px solid #00ff88;
    box-shadow: 0 0 50px rgba(0, 255, 136, 0.3);
  }
  
  @media (min-width: 1200px) {
    width: 400px;
    height: 400px;
  }
`,HT=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,af=E(Q.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 4px;
  opacity: 0.6;
  
  &.cube-1 {
    top: 20%;
    left: 10%;
  }
  
  &.cube-2 {
    top: 60%;
    right: 15%;
  }
  
  &.cube-3 {
    bottom: 30%;
    left: 20%;
  }
`,ey=E(Q.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  background: radial-gradient(circle, #ff0088, #00ff88);
  border-radius: 50%;
  opacity: 0.4;
  
  &.sphere-1 {
    top: 40%;
    right: 25%;
  }
  
  &.sphere-2 {
    bottom: 20%;
    right: 40%;
  }
`,YT=()=>{const n=()=>{const u=document.querySelector("#contact");u&&u.scrollIntoView({behavior:"smooth"})},a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},s={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},l={animate:{y:[0,-20,0],rotate:[0,180,360],transition:{duration:6,repeat:1/0,ease:"easeInOut"}}};return x.jsxs(CT,{id:"home",children:[x.jsxs(HT,{children:[x.jsx(af,{className:"cube-1",variants:l,animate:"animate"}),x.jsx(af,{className:"cube-2",variants:l,animate:"animate",transition:{delay:1}}),x.jsx(af,{className:"cube-3",variants:l,animate:"animate",transition:{delay:2}}),x.jsx(ey,{className:"sphere-1",variants:l,animate:"animate",transition:{delay:.5}}),x.jsx(ey,{className:"sphere-2",variants:l,animate:"animate",transition:{delay:1.5}})]}),x.jsxs(jT,{children:[x.jsx(kT,{children:x.jsx(LT,{src:"/profile-photo.jpg",alt:"Unmesh Achar",initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:100,damping:10,delay:.5},whileHover:{scale:1.05,boxShadow:"0 0 80px rgba(0, 255, 136, 0.5)"}})}),x.jsx(Q.div,{variants:a,initial:"hidden",animate:"visible",style:{flex:1},children:x.jsxs(RT,{children:[x.jsx(OT,{variants:s,children:"Unmesh Achar"}),x.jsx(VT,{variants:s,children:"Computer Engineering Graduate"}),x.jsx(NT,{variants:s,children:"Passionate about cybersecurity, full-stack development, and creating innovative solutions that bridge the gap between security and user experience."}),x.jsxs(_T,{variants:s,children:[x.jsx(BT,{href:"#projects",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:u=>{u.preventDefault(),document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"})},children:"View My Work"}),x.jsx(UT,{href:"#contact",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:u=>{u.preventDefault(),n()},children:"Get In Touch"})]})]})})]})]})},GT=E.section`
  min-height: 100vh;
  padding: 6rem 0 3rem; /* Mobile-first: smaller padding */
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;

  /* Enhanced for larger screens */
  @media (min-width: 769px) {
    padding: 8rem 0 4rem;
  }
`,qT=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile-first: smaller padding */
  display: flex;
  flex-direction: column; /* Mobile-first: stack vertically */
  gap: 2rem;
  align-items: center;
  text-align: center;

  /* Enhanced for tablets */
  @media (min-width: 769px) {
    padding: 0 2rem;
    gap: 3rem;
  }

  /* Desktop layout */
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
    text-align: left;
    align-items: flex-start;
  }
`,XT=E.div`
  z-index: 2;
  width: 100%;
  max-width: 600px; /* Prevent text from being too wide on larger screens */
  
  /* Desktop: flex to take available space */
  @media (min-width: 1024px) {
    flex: 1;
    max-width: none;
  }
`,PT=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem; /* Mobile-first: fixed readable size */
  font-weight: 900;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  line-height: 1.2;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%; /* Mobile-first: centered */
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(45deg, #00ff88, #ff0088);
    border-radius: 2px;
  }

  /* Enhanced for larger mobile screens */
  @media (min-width: 480px) {
    font-size: 2.8rem;
    margin-bottom: 2rem;
  }

  /* Tablet and larger */
  @media (min-width: 769px) {
    font-size: 3.2rem;
  }

  /* Desktop: left align */
  @media (min-width: 1024px) {
    text-align: left;
    
    &::after {
      left: 0;
      transform: none;
    }
  }
`,rf=E(Q.p)`
  font-size: 1rem; /* Mobile-first: minimum readable size */
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 100%;
  
  &:last-child {
    margin-bottom: 0;
  }

  /* Enhanced readability for larger screens */
  @media (min-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  @media (min-width: 769px) {
    font-size: 1.15rem;
  }

  /* Desktop: left align */
  @media (min-width: 1024px) {
    text-align: left;
  }
`,sf=E.span`
  color: #00ff88;
  font-weight: 600;
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
`,KT=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  order: -1; /* Mobile-first: image at top */
  
  /* Desktop: normal order */
  @media (min-width: 1024px) {
    order: 0;
    flex-shrink: 0;
  }
`,QT=E(Q.div)`
  width: 100%;
  max-width: 280px; /* Mobile-first: smaller size */
  height: 280px;
  background: linear-gradient(135deg, #00ff88 0%, #ff0088 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: #1a1a1a;
    border-radius: 18px;
    z-index: 1;
  }

  /* Enhanced for larger mobile screens */
  @media (min-width: 480px) {
    max-width: 320px;
    height: 320px;
  }

  /* Tablet size */
  @media (min-width: 769px) {
    max-width: 360px;
    height: 360px;
  }

  /* Desktop size */
  @media (min-width: 1024px) {
    max-width: 400px;
    height: 400px;
  }
`,ZT=E.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #ffffff;
`,FT=E.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,JT=E(Q.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Mobile-first: 2 columns */
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;

  /* Enhanced for larger mobile screens */
  @media (min-width: 480px) {
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  /* Tablet and larger: 4 columns */
  @media (min-width: 769px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 3rem;
  }

  /* Desktop: full width */
  @media (min-width: 1024px) {
    margin-left: -4rem; /* Extend beyond content width */
    margin-right: -4rem;
    padding: 0 4rem;
  }
`,Dl=E(Q.div)`
  text-align: center;
  padding: 1rem; /* Mobile-first: smaller padding */
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer; /* Mobile-friendly interaction */

  &:hover, &:active {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-3px);
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    padding: 1.2rem;
  }

  @media (min-width: 769px) {
    padding: 1.5rem;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`,Cl=E.div`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem; /* Mobile-first: readable size */
  font-weight: 900;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 1.8rem;
  }

  @media (min-width: 769px) {
    font-size: 2rem;
  }
`,jl=E.div`
  font-size: 0.8rem; /* Mobile-first: readable size */
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 1.3;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 0.85rem;
  }

  @media (min-width: 769px) {
    font-size: 0.9rem;
  }
`,$T=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,lf=E(Q.div)`
  position: absolute;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  opacity: 0.1;

  &.shape-1 {
    width: 100px;
    height: 100px;
    top: 15%;
    right: 10%;
  }

  &.shape-2 {
    width: 60px;
    height: 60px;
    bottom: 25%;
    left: 15%;
  }

  &.shape-3 {
    width: 80px;
    height: 80px;
    top: 60%;
    right: 25%;
  }
`,WT=()=>{const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},a={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},s={animate:{y:[0,-30,0],rotate:[0,180,360],scale:[1,1.1,1],transition:{duration:8,repeat:1/0,ease:"easeInOut"}}},l={hidden:{scale:0,opacity:0},visible:{scale:1,opacity:1,transition:{type:"spring",stiffness:100,damping:10}}};return x.jsxs(GT,{id:"about",children:[x.jsxs($T,{children:[x.jsx(lf,{className:"shape-1",variants:s,animate:"animate"}),x.jsx(lf,{className:"shape-2",variants:s,animate:"animate",transition:{delay:1}}),x.jsx(lf,{className:"shape-3",variants:s,animate:"animate",transition:{delay:2}})]}),x.jsxs(qT,{children:[x.jsxs(Q.div,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem"},children:[x.jsx(KT,{children:x.jsx(QT,{initial:{scale:0,rotate:-180},whileInView:{scale:1,rotate:0},viewport:{once:!0},transition:{type:"spring",stiffness:120,damping:15,delay:.2},whileHover:{scale:1.05,boxShadow:"0 25px 50px rgba(0, 255, 136, 0.3)"},whileTap:{scale:.98},children:x.jsxs(ZT,{children:[x.jsx(FT,{children:"🚀"}),x.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"600",background:"linear-gradient(45deg, #00ff88, #ff0088)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text","@media (min-width: 480px)":{fontSize:"1.2rem"}},children:"Innovation"})]})})}),x.jsxs(XT,{children:[x.jsx(PT,{variants:a,children:"About Me"}),x.jsxs(rf,{variants:a,children:["I'm a ",x.jsx(sf,{children:"Computer Engineering graduate"})," with a passion for creating innovative solutions at the intersection of cybersecurity and user experience. My journey in technology began with curiosity about how systems work and evolved into a deep commitment to building secure, efficient applications."]}),x.jsxs(rf,{variants:a,children:["With expertise in ",x.jsx(sf,{children:"full-stack development"})," and",x.jsx(sf,{children:"cybersecurity practices"}),", I enjoy tackling complex challenges that require both technical depth and creative problem-solving. I believe in writing clean, maintainable code and designing solutions that prioritize both security and usability."]}),x.jsx(rf,{variants:a,children:"When I'm not coding, you'll find me exploring the latest security research, contributing to open-source projects, or planning my next adventure. I'm always eager to learn new technologies and collaborate on projects that make a meaningful impact."})]})]}),x.jsxs(JT,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{staggerChildren:.1,delayChildren:.5}}},children:[x.jsxs(Dl,{variants:l,whileHover:{y:-5,scale:1.02},whileTap:{scale:.98},children:[x.jsx(Cl,{children:"3+"}),x.jsx(jl,{children:"Years Experience"})]}),x.jsxs(Dl,{variants:l,whileHover:{y:-5,scale:1.02},whileTap:{scale:.98},children:[x.jsx(Cl,{children:"15+"}),x.jsx(jl,{children:"Projects Completed"})]}),x.jsxs(Dl,{variants:l,whileHover:{y:-5,scale:1.02},whileTap:{scale:.98},children:[x.jsx(Cl,{children:"10+"}),x.jsx(jl,{children:"Technologies Mastered"})]}),x.jsxs(Dl,{variants:l,whileHover:{y:-5,scale:1.02},whileTap:{scale:.98},children:[x.jsx(Cl,{children:"24/7"}),x.jsx(jl,{children:"Problem Solver"})]})]})]})]})},IT=E.section`
  min-height: 100vh;
  padding: 6rem 0 3rem; /* Mobile-first: smaller padding */
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  /* Enhanced for larger screens */
  @media (min-width: 769px) {
    padding: 8rem 0 4rem;
  }
`,t3=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile-first: smaller padding */

  /* Enhanced for larger screens */
  @media (min-width: 769px) {
    padding: 0 2rem;
  }
`,e3=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem; /* Mobile-first: fixed size */
  font-weight: 900;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  line-height: 1.2;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(45deg, #00ff88, #ff0088);
    border-radius: 2px;
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 769px) {
    font-size: 3.2rem;
    margin-bottom: 3rem;
  }
`,n3=E.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  /* Mobile-first: simple left-aligned line */
  &::before {
    content: '';
    position: absolute;
    left: 20px; /* Mobile-first: left-aligned */
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #00ff88, #ff0088);
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  }

  /* Desktop: center the timeline */
  @media (min-width: 1024px) {
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,Lf=E(Q.div)`
  position: relative;
  margin-bottom: 3rem; /* Mobile-first: smaller spacing */
  padding-left: 60px; /* Mobile-first: space for timeline */
  display: block; /* Mobile-first: simple block layout */

  &:last-child {
    margin-bottom: 0;
  }

  /* Enhanced spacing for larger screens */
  @media (min-width: 480px) {
    margin-bottom: 3.5rem;
    padding-left: 70px;
  }

  @media (min-width: 769px) {
    margin-bottom: 4rem;
    padding-left: 80px;
  }

  /* Desktop: alternating layout */
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    padding-left: 0;
    
    &:nth-child(odd) {
      justify-content: flex-end;
    }

    &:nth-child(even) {
      justify-content: flex-start;
    }
  }
`,i3=E(Q.div)`
  position: absolute;
  left: 20px; /* Mobile-first: left-aligned */
  top: 2rem; /* Mobile-first: fixed position */
  transform: translate(-50%, 0);
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #0f0f0f;
    border-radius: 50%;
  }

  /* Enhanced for larger mobile screens */
  @media (min-width: 480px) {
    width: 24px;
    height: 24px;
    
    &::before {
      width: 10px;
      height: 10px;
    }
  }

  /* Tablet and larger */
  @media (min-width: 769px) {
    width: 26px;
    height: 26px;
    
    &::before {
      width: 12px;
      height: 12px;
    }
  }

  /* Desktop: centered on timeline */
  @media (min-width: 1024px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`,a3=E(Q.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 15px;
  padding: 1.5rem; /* Mobile-first: smaller padding */
  width: 100%; /* Mobile-first: full width */
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer; /* Mobile-friendly interaction */

  &:hover, &:active {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.2);
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    padding: 1.8rem;
  }

  @media (min-width: 769px) {
    padding: 2rem;
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
    }
  }

  /* Desktop: constrained width with margins */
  @media (min-width: 1024px) {
    width: calc(50% - 60px);
    max-width: 380px;
    
    &:hover {
      transform: translateY(-10px);
    }
  }
  
  /* Desktop: alternating margins */
  @media (min-width: 1024px) {
    ${Lf}:nth-child(odd) & {
      margin-right: 60px;
    }

    ${Lf}:nth-child(even) & {
      margin-left: 60px;
    }
  }
`,r3=E.div`
  position: absolute;
  top: -12px; /* Mobile-first: better positioning */
  right: 15px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  color: #0f0f0f;
  padding: 0.4rem 0.8rem; /* Mobile-first: smaller padding */
  border-radius: 20px;
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  font-size: 0.7rem; /* Mobile-first: readable size */
  letter-spacing: 1px;
  text-align: center;
  min-width: 60px; /* Ensure consistent width */

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    top: -15px;
    right: 20px;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    min-width: 70px;
  }

  @media (min-width: 769px) {
    font-size: 0.85rem;
    min-width: 80px;
  }
`,s3=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem; /* Mobile-first: readable size */
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  line-height: 1.3;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 1.2rem;
  }

  @media (min-width: 769px) {
    font-size: 1.3rem;
  }
`,l3=E.h4`
  font-size: 1rem; /* Mobile-first: readable size */
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.4;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 1.05rem;
  }

  @media (min-width: 769px) {
    font-size: 1.1rem;
  }
`,o3=E.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.9rem; /* Mobile-first: readable size */

  &:last-child {
    margin-bottom: 0;
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 0.92rem;
    line-height: 1.65;
  }

  @media (min-width: 769px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`,c3=E.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
`,u3=E.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem; /* Mobile-first: readable size */
  line-height: 1.5;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem; /* Mobile-first: smaller indent */

  &::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #ff0088;
    font-size: 0.7rem; /* Mobile-first: smaller icon */
    line-height: inherit;
  }

  &:last-child {
    margin-bottom: 0;
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 0.87rem;
    padding-left: 1.3rem;
    
    &::before {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 769px) {
    font-size: 0.9rem;
    padding-left: 1.5rem;
    
    &::before {
      font-size: 0.8rem;
    }
  }
`,f3=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,Rl=E(Q.div)`
  position: absolute;
  font-size: 2rem;
  opacity: 0.1;
  color: #00ff88;

  &.icon-1 {
    top: 10%;
    left: 10%;
  }

  &.icon-2 {
    top: 25%;
    right: 15%;
  }

  &.icon-3 {
    bottom: 30%;
    left: 20%;
  }

  &.icon-4 {
    bottom: 15%;
    right: 10%;
  }
`,d3=()=>{const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.4,delayChildren:.2}}},a={hidden:{y:100,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},s={animate:{y:[0,-20,0],rotate:[0,10,-10,0],scale:[1,1.2,1],transition:{duration:6,repeat:1/0,ease:"easeInOut"}}},l={hidden:{scale:0,opacity:0},visible:{scale:1,opacity:1,transition:{type:"spring",stiffness:200,damping:15}}},u=[{year:"2020-2024",institution:"University of Technology",degree:"Bachelor of Computer Engineering",description:"Comprehensive study of computer systems, software engineering, and cybersecurity with a focus on practical applications and industry-relevant projects.",achievements:["Graduated with First Class Honors (GPA: 3.8/4.0)","Dean's List for Academic Excellence (6 semesters)","Winner of Annual Cybersecurity Competition","Lead developer for Senior Capstone Project"]},{year:"2024",institution:"Cybersecurity Institute",degree:"Advanced Cybersecurity Certification",description:"Specialized training in ethical hacking, penetration testing, and security analysis with hands-on experience in real-world scenarios.",achievements:["Certified Ethical Hacker (CEH) credential","Network Security Specialist certification","Top 5% of class performance","Published research on mobile app security"]},{year:"2023",institution:"Web Development Academy",degree:"Full-Stack Development Bootcamp",description:"Intensive program covering modern web technologies, database design, and cloud deployment with emphasis on responsive design and security.",achievements:["Built 5 production-ready web applications","Mentored junior developers in the program","Awarded 'Most Innovative Project' recognition","Achieved 100% job placement rate"]}];return x.jsxs(IT,{id:"education",children:[x.jsxs(f3,{children:[x.jsx(Rl,{className:"icon-1",variants:s,animate:"animate",children:"🎓"}),x.jsx(Rl,{className:"icon-2",variants:s,animate:"animate",transition:{delay:1},children:"📚"}),x.jsx(Rl,{className:"icon-3",variants:s,animate:"animate",transition:{delay:2},children:"🏆"}),x.jsx(Rl,{className:"icon-4",variants:s,animate:"animate",transition:{delay:.5},children:"💻"})]}),x.jsxs(t3,{children:[x.jsx(e3,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:"Education"}),x.jsx(n3,{children:x.jsx(Q.div,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:u.map((d,f)=>x.jsxs(Lf,{children:[x.jsx(i3,{variants:l,whileHover:{scale:1.3,boxShadow:"0 0 30px rgba(0, 255, 136, 0.8)"}}),x.jsxs(a3,{variants:a,whileHover:{scale:1.02},children:[x.jsx(r3,{children:d.year}),x.jsx(s3,{children:d.institution}),x.jsx(l3,{children:d.degree}),x.jsx(o3,{children:d.description}),x.jsx(c3,{children:d.achievements.map((p,h)=>x.jsx(u3,{children:p},h))})]})]},f))})})]})]})},m3=E.section`
  min-height: 100vh;
  padding: 6rem 0 3rem; /* Mobile-first: smaller padding */
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;

  /* Enhanced for larger screens */
  @media (min-width: 769px) {
    padding: 8rem 0 4rem;
  }
`,h3=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile-first: smaller padding */

  /* Enhanced for larger screens */
  @media (min-width: 769px) {
    padding: 0 2rem;
  }
`,p3=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem; /* Mobile-first: fixed size */
  font-weight: 900;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 2.8rem;
  }

  @media (min-width: 769px) {
    font-size: 3.2rem;
  }
`,g3=E(Q.p)`
  text-align: center;
  font-size: 1rem; /* Mobile-first: readable size */
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  padding: 0 1rem;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 1.05rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 769px) {
    font-size: 1.1rem;
    margin-bottom: 4rem;
    padding: 0;
  }
`,y3=E.div`
  display: grid;
  grid-template-columns: 1fr; /* Mobile-first: single column */
  gap: 2rem;
  margin-bottom: 3rem;

  /* Enhanced for larger mobile screens */
  @media (min-width: 600px) {
    gap: 2.5rem;
  }

  /* Tablet: 2 columns */
  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin-bottom: 4rem;
  }

  /* Desktop: auto-fit with proper minimum */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`,v3=E(Q.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 1.5rem; /* Mobile-first: smaller padding */
  text-align: center;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer; /* Mobile-friendly interaction */

  &:hover, &:active {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    padding: 1.8rem;
  }

  @media (min-width: 769px) {
    padding: 2rem;
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
    }
  }

  @media (min-width: 1024px) {
    &:hover {
      transform: translateY(-10px);
    }
  }
`,x3=E.div`
  font-size: 2.5rem; /* Mobile-first: readable size */
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 2.8rem;
  }

  @media (min-width: 769px) {
    font-size: 3rem;
  }
`,b3=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.2rem; /* Mobile-first: readable size */
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  line-height: 1.3;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 1.3rem;
  }

  @media (min-width: 769px) {
    font-size: 1.4rem;
  }
`,S3=E.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Mobile-first: 3 columns maximum */
  gap: 0.8rem;
  justify-items: center;

  /* Enhanced for larger mobile screens */
  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr); /* 4 columns on larger mobile */
    gap: 1rem;
  }

  /* Tablet and larger */
  @media (min-width: 769px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 1.2rem;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1.5rem;
  }
`,w3=E(Q.div)`
  background: rgba(255, 0, 136, 0.1);
  border: 1px solid rgba(255, 0, 136, 0.3);
  border-radius: 12px;
  padding: 1rem 0.5rem; /* Mobile-first: adequate padding */
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 80px; /* Ensure minimum touch target size */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:hover, &:active {
    background: rgba(255, 0, 136, 0.2);
    border-color: rgba(255, 0, 136, 0.5);
    transform: translateY(-3px) scale(1.02);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 0, 136, 0.1), transparent);
    transform: rotate(45deg);
    transition: all 0.3s ease;
    opacity: 0;
  }

  &:hover::before, &:active::before {
    opacity: 1;
    animation: shine 1.5s ease-in-out;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    min-height: 85px;
    padding: 1.1rem 0.6rem;
  }

  @media (min-width: 769px) {
    min-height: 90px;
    padding: 1.2rem 0.8rem;
    
    &:hover {
      transform: translateY(-5px) scale(1.05);
    }
  }
`,T3=E.div`
  font-size: 1.4rem; /* Mobile-first: readable size */
  margin-bottom: 0.4rem;
  line-height: 1;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 769px) {
    font-size: 1.8rem;
  }
`,A3=E.div`
  font-size: 0.65rem; /* Mobile-first: readable size */
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 1;
  relative;
  line-height: 1.2;
  text-align: center;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 0.7rem;
  }

  @media (min-width: 769px) {
    font-size: 0.75rem;
  }
`,E3=E.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-top: 1rem;
  overflow: hidden;
`,M3=E(Q.div)`
  height: 100%;
  background: linear-gradient(90deg, #00ff88, #ff0088);
  border-radius: 2px;
  width: ${n=>n.level}%;
`,z3=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,ya=E(Q.div)`
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.1;
  color: #00ff88;

  &.tech-1 { top: 10%; left: 5%; }
  &.tech-2 { top: 20%; right: 10%; }
  &.tech-3 { bottom: 30%; left: 15%; }
  &.tech-4 { bottom: 20%; right: 5%; }
  &.tech-5 { top: 50%; left: 8%; }
  &.tech-6 { top: 70%; right: 12%; }
`,D3=()=>{const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},a={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},s={hidden:{scale:0,opacity:0},visible:{scale:1,opacity:1,transition:{type:"spring",stiffness:200,damping:15}}},l={animate:{y:[0,-15,0],rotate:[0,5,-5,0],scale:[1,1.1,1],transition:{duration:4,repeat:1/0,ease:"easeInOut"}}},u=[{icon:"💻",title:"Frontend Development",skills:[{name:"React",icon:"⚛️",level:95},{name:"JavaScript",icon:"🟨",level:90},{name:"TypeScript",icon:"🔷",level:85},{name:"HTML5",icon:"🟠",level:95},{name:"CSS3",icon:"🔵",level:90},{name:"Tailwind",icon:"💨",level:85}]},{icon:"⚙️",title:"Backend Development",skills:[{name:"Node.js",icon:"🟢",level:88},{name:"Python",icon:"🐍",level:85},{name:"Express",icon:"🚂",level:82},{name:"MongoDB",icon:"🍃",level:80},{name:"PostgreSQL",icon:"🐘",level:78},{name:"GraphQL",icon:"🔺",level:75}]},{icon:"🛡️",title:"Cybersecurity",skills:[{name:"Pentesting",icon:"🔍",level:88},{name:"OWASP",icon:"🛡️",level:85},{name:"Kali Linux",icon:"🐉",level:82},{name:"Wireshark",icon:"🦈",level:80},{name:"Metasploit",icon:"💥",level:78},{name:"Burp Suite",icon:"🔒",level:85}]},{icon:"☁️",title:"DevOps & Cloud",skills:[{name:"Docker",icon:"🐳",level:85},{name:"AWS",icon:"☁️",level:80},{name:"Git",icon:"📝",level:90},{name:"CI/CD",icon:"🔄",level:78},{name:"Kubernetes",icon:"⚓",level:75},{name:"Linux",icon:"🐧",level:88}]}];return x.jsxs(m3,{id:"toolbox",children:[x.jsxs(z3,{children:[x.jsx(ya,{className:"tech-1",variants:l,animate:"animate",children:"⚛️"}),x.jsx(ya,{className:"tech-2",variants:l,animate:"animate",transition:{delay:.5},children:"🐍"}),x.jsx(ya,{className:"tech-3",variants:l,animate:"animate",transition:{delay:1},children:"🛡️"}),x.jsx(ya,{className:"tech-4",variants:l,animate:"animate",transition:{delay:1.5},children:"☁️"}),x.jsx(ya,{className:"tech-5",variants:l,animate:"animate",transition:{delay:2},children:"🐳"}),x.jsx(ya,{className:"tech-6",variants:l,animate:"animate",transition:{delay:.8},children:"🔒"})]}),x.jsxs(h3,{children:[x.jsx(p3,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:"My Toolbox"}),x.jsx(g3,{initial:{y:-30,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut",delay:.2},children:"A comprehensive arsenal of modern technologies and tools that I use to build secure, scalable, and innovative solutions."}),x.jsx(Q.div,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:x.jsx(y3,{children:u.map((d,f)=>x.jsxs(v3,{variants:a,whileHover:{scale:1.02},children:[x.jsx(x3,{children:d.icon}),x.jsx(b3,{children:d.title}),x.jsx(S3,{children:d.skills.map((p,h)=>x.jsxs(w3,{variants:s,whileHover:{scale:1.1,rotateY:15},whileTap:{scale:.95},children:[x.jsx(T3,{children:p.icon}),x.jsx(A3,{children:p.name}),x.jsx(E3,{children:x.jsx(M3,{level:p.level,initial:{width:0},whileInView:{width:`${p.level}%`},viewport:{once:!0},transition:{duration:1.5,ease:"easeOut",delay:h*.1}})})]},h))})]},f))})})]})]})},C3=E.section`
  min-height: 100vh;
  padding: 6rem 0 3rem; /* Mobile-first: smaller padding */
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  /* Enhanced for larger screens */
  @media (min-width: 769px) {
    padding: 8rem 0 4rem;
  }
`,j3=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile-first: smaller padding */

  /* Enhanced for larger screens */
  @media (min-width: 769px) {
    padding: 0 2rem;
  }
`,R3=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem; /* Mobile-first: fixed size */
  font-weight: 900;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 2.8rem;
  }

  @media (min-width: 769px) {
    font-size: 3.2rem;
  }
`,O3=E(Q.p)`
  text-align: center;
  font-size: 1rem; /* Mobile-first: readable size */
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  padding: 0 1rem;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 1.05rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 769px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
    padding: 0;
  }
`,V3=E(Q.div)`
  display: flex;
  justify-content: center;
  gap: 0.5rem; /* Mobile-first: smaller gaps */
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  padding: 0 0.5rem; /* Prevent edge overflow */

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    gap: 0.8rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 769px) {
    gap: 1rem;
    margin-bottom: 4rem;
    padding: 0;
  }
`,N3=E(Q.button)`
  background: ${n=>n.active?"linear-gradient(45deg, #00ff88, #ff0088)":"transparent"};
  border: 2px solid ${n=>n.active?"transparent":"#00ff88"};
  color: ${n=>n.active?"#0f0f0f":"#00ff88"};
  padding: 0.7rem 1rem; /* Mobile-first: adequate touch target */
  border-radius: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.75rem; /* Mobile-first: readable size */
  min-height: 44px; /* Minimum touch target */
  white-space: nowrap; /* Prevent text wrapping */

  &:hover, &:active {
    background: ${n=>n.active?"linear-gradient(45deg, #00ff88, #ff0088)":"#00ff88"};
    color: #0f0f0f;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.8rem;
  }

  @media (min-width: 769px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`,_3=E.div`
  display: grid;
  grid-template-columns: 1fr; /* Mobile-first: single column */
  gap: 1.5rem;

  /* Enhanced for larger mobile screens */
  @media (min-width: 600px) {
    gap: 2rem;
  }

  /* Tablet: 2 columns if space allows */
  @media (min-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
  }

  /* Desktop: optimal card sizing */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
  }
`,B3=E(Q.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 1.5rem; /* Mobile-first: smaller padding */
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  width: 100%;

  &:hover, &:active {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before, &:active::before {
    left: 100%;
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    padding: 1.8rem;
  }

  @media (min-width: 769px) {
    padding: 2rem;
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
    }
  }

  @media (min-width: 1024px) {
    &:hover {
      transform: translateY(-10px);
    }
  }
`,U3=E.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`,k3=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.4rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,L3=E.span`
  background: ${n=>n.status==="completed"?"linear-gradient(45deg, #00ff88, #00cc66)":n.status==="in-progress"?"linear-gradient(45deg, #ff0088, #cc0066)":"linear-gradient(45deg, #ffaa00, #cc8800)"};
  color: #0f0f0f;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-shrink: 0;
`,H3=E.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`,Y3=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,G3=E.span`
  background: rgba(255, 0, 136, 0.2);
  color: #ff0088;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(255, 0, 136, 0.3);
`,q3=E.div`
  display: flex;
  gap: 0.8rem; /* Mobile-first: smaller gap */
  flex-wrap: wrap;
  justify-content: center; /* Mobile-first: center align */
  align-items: center;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    gap: 1rem;
    justify-content: flex-start;
  }
`,ny=E(Q.a)`
  background: ${n=>n.primary?"linear-gradient(45deg, #00ff88, #ff0088)":"transparent"};
  border: 2px solid ${n=>n.primary?"transparent":"#00ff88"};
  color: ${n=>n.primary?"#0f0f0f":"#00ff88"};
  padding: 0.7rem 1rem; /* Mobile-first: adequate touch target */
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  font-size: 0.75rem; /* Mobile-first: readable size */
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 44px; /* Minimum touch target */
  white-space: nowrap;

  &:hover, &:active {
    background: ${n=>n.primary?"linear-gradient(45deg, #00ff88, #ff0088)":"#00ff88"};
    color: #0f0f0f;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.4);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.8rem;
  }
`,X3=E.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`,P3=E.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem;

  &::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #ff0088;
    font-size: 0.7rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`,K3=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,va=E(Q.div)`
  position: absolute;
  font-size: 1.2rem;
  opacity: 0.1;
  color: #00ff88;
  font-family: 'Space Mono', monospace;

  &.code-1 { top: 15%; left: 5%; }
  &.code-2 { top: 25%; right: 8%; }
  &.code-3 { bottom: 35%; left: 10%; }
  &.code-4 { bottom: 20%; right: 12%; }
  &.code-5 { top: 60%; left: 15%; }
  &.code-6 { top: 45%; right: 20%; }
`,Q3=()=>{const[n,a]=J.useState("all"),s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},l={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},u={animate:{y:[0,-10,0],rotate:[0,5,-5,0],opacity:[.1,.2,.1],transition:{duration:6,repeat:1/0,ease:"easeInOut"}}},d=[{id:"all",label:"All Projects"},{id:"web",label:"Web Development"},{id:"security",label:"Cybersecurity"},{id:"mobile",label:"Mobile Apps"}],f=[{id:1,title:"SecureAuth Dashboard",category:"security",status:"completed",description:"A comprehensive cybersecurity dashboard for monitoring authentication attempts, analyzing security threats, and managing user access controls with real-time alerts.",features:["Real-time threat monitoring","Multi-factor authentication integration","Advanced analytics and reporting","Automated incident response"],techStack:["React","Node.js","MongoDB","WebSockets","JWT"],github:"https://github.com/unmesh/secureauth-dashboard",demo:"https://secureauth-demo.com"},{id:2,title:"E-Commerce Platform",category:"web",status:"completed",description:"A full-stack e-commerce solution with secure payment processing, inventory management, and modern responsive design optimized for performance.",features:["Secure payment gateway integration","Advanced product search & filtering","Real-time inventory management","Admin dashboard with analytics"],techStack:["React","TypeScript","Express","PostgreSQL","Stripe"],github:"https://github.com/unmesh/ecommerce-platform",demo:"https://ecommerce-demo.com"},{id:3,title:"Mobile Security Scanner",category:"mobile",status:"in-progress",description:"React Native application that scans mobile devices for security vulnerabilities, malware detection, and provides security recommendations.",features:["Vulnerability assessment scanning","Malware detection algorithms","Security recommendations engine","Encrypted data storage"],techStack:["React Native","Python","TensorFlow","Firebase"],github:"https://github.com/unmesh/mobile-security-scanner",demo:null},{id:4,title:"Portfolio Website",category:"web",status:"completed",description:"A responsive portfolio website built with modern React, featuring smooth animations, cyberpunk design, and optimized performance.",features:["Responsive cyberpunk design","Smooth framer-motion animations","Performance optimized","SEO friendly architecture"],techStack:["React","Styled Components","Framer Motion","Vite"],github:"https://github.com/unmesh/responsive-portfolio",demo:"https://unmesh-portfolio.com"},{id:5,title:"Penetration Testing Toolkit",category:"security",status:"in-progress",description:"A comprehensive toolkit for ethical hackers and security professionals with automated vulnerability scanning and reporting capabilities.",features:["Automated vulnerability scanning","Custom payload generation","Detailed security reports","Integration with popular security tools"],techStack:["Python","Kali Linux","Docker","PostgreSQL"],github:"https://github.com/unmesh/pentest-toolkit",demo:null},{id:6,title:"Task Management App",category:"mobile",status:"completed",description:"Cross-platform task management application with team collaboration features, real-time synchronization, and intuitive user interface.",features:["Real-time task synchronization","Team collaboration tools","Advanced filtering and sorting","Offline mode support"],techStack:["React Native","Redux","Firebase","TypeScript"],github:"https://github.com/unmesh/task-management-app",demo:"https://taskmanager-demo.com"}],p=n==="all"?f:f.filter(h=>h.category===n);return x.jsxs(C3,{id:"projects",children:[x.jsxs(K3,{children:[x.jsx(va,{className:"code-1",variants:u,animate:"animate",children:"{ code }"}),x.jsx(va,{className:"code-2",variants:u,animate:"animate",transition:{delay:.5},children:"< />"}),x.jsx(va,{className:"code-3",variants:u,animate:"animate",transition:{delay:1},children:"function()"}),x.jsx(va,{className:"code-4",variants:u,animate:"animate",transition:{delay:1.5},children:"const app"}),x.jsx(va,{className:"code-5",variants:u,animate:"animate",transition:{delay:2},children:"=> {}"}),x.jsx(va,{className:"code-6",variants:u,animate:"animate",transition:{delay:.8},children:"import *"})]}),x.jsxs(j3,{children:[x.jsx(R3,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:"My Projects"}),x.jsx(O3,{initial:{y:-30,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut",delay:.2},children:"A showcase of innovative projects spanning web development, cybersecurity, and mobile applications, each built with cutting-edge technologies."}),x.jsx(V3,{initial:{y:-20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut",delay:.4},children:d.map(h=>x.jsx(N3,{active:n===h.id,onClick:()=>a(h.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:h.label},h.id))}),x.jsx(po,{mode:"wait",children:x.jsx(Q.div,{variants:s,initial:"hidden",animate:"visible",exit:"hidden",children:x.jsx(_3,{children:p.map(h=>x.jsxs(B3,{variants:l,whileHover:{scale:1.02},layout:!0,children:[x.jsx(U3,{children:x.jsxs("div",{children:[x.jsx(k3,{children:h.title}),x.jsx(L3,{status:h.status,children:h.status.replace("-"," ")})]})}),x.jsx(H3,{children:h.description}),x.jsx(X3,{children:h.features.map((g,y)=>x.jsx(P3,{children:g},y))}),x.jsx(Y3,{children:h.techStack.map((g,y)=>x.jsx(G3,{children:g},y))}),x.jsxs(q3,{children:[x.jsx(ny,{href:h.github,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:"📂 Code"}),h.demo&&x.jsx(ny,{href:h.demo,target:"_blank",rel:"noopener noreferrer",primary:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"🚀 Live Demo"})]})]},h.id))})},n)})]})]})},Z3=E.section`
  min-height: 100vh;
  padding: 4rem 0 3rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 0 4rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 0 4rem;
  }
`,F3=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,J3=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: 1.75rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(45deg, #00ff88, #ff0088);
    border-radius: 2px;

    @media (min-width: 768px) {
      bottom: -15px;
      width: 80px;
    }
  }
`,$3=E.div`
  position: relative;
  max-width: 100%;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #00ff88, #ff0088, #00ff88);
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

    @media (min-width: 768px) {
      left: 30px;
    }

    @media (min-width: 1200px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (min-width: 768px) {
    max-width: 900px;
    margin: 0 auto;
  }
`,Hf=E(Q.div)`
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 60px;

  @media (min-width: 480px) {
    padding-left: 70px;
  }

  @media (min-width: 768px) {
    padding-left: 80px;
    margin-bottom: 3rem;
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    padding-left: 0;

    &:nth-child(odd) {
      justify-content: flex-end;
    }

    &:nth-child(even) {
      justify-content: flex-start;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`,W3=E(Q.div)`
  position: absolute;
  left: 20px;
  top: 1rem;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #0f0f0f;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    left: 30px;
    width: 25px;
    height: 25px;
    top: 1.5rem;

    &::before {
      width: 10px;
      height: 10px;
    }
  }

  @media (min-width: 1200px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`,I3=E(Q.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  width: 100%;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  @media (min-width: 480px) {
    padding: 2rem;
    border-radius: 20px;
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
  }

  @media (min-width: 1200px) {
    width: calc(50% - 60px);
    max-width: 420px;

    ${Hf}:nth-child(odd) & {
      margin-right: 60px;
    }

    ${Hf}:nth-child(even) & {
      margin-left: 60px;
    }
  }

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.15);

    @media (min-width: 768px) {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
    }

    @media (min-width: 1200px) {
      transform: translateY(-15px) scale(1.02);
      box-shadow: 0 30px 60px rgba(0, 255, 136, 0.25);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`,t6=E.div`
  position: absolute;
  top: -10px;
  right: 15px;
  width: 36px;
  height: 36px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: #0f0f0f;
  box-shadow: 0 3px 10px rgba(0, 255, 136, 0.3);

  @media (min-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    top: -15px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
  }

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`,e6=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  line-height: 1.3;
  padding-right: 50px; /* Make room for logo on mobile */

  @media (min-width: 480px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`,n6=E.h4`
  font-size: 0.95rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (min-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.05rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`,i6=E.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  color: rgba(255, 0, 136, 0.8);
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`,a6=E.p`
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.9rem;

  @media (min-width: 480px) {
    font-size: 0.92rem;
    line-height: 1.65;
  }

  @media (min-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`,r6=E.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: 1.25rem 0;
  }

  @media (min-width: 1024px) {
    margin: 1.5rem 0;
  }
`,s6=E.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 0.6rem;
  position: relative;
  padding-left: 1.2rem;
  min-height: 1.2rem; /* Ensure readability */

  &::before {
    content: '⚡';
    position: absolute;
    left: 0;
    color: #ff0088;
    font-size: 0.75rem;
  }

  @media (min-width: 480px) {
    font-size: 0.87rem;
    line-height: 1.55;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 0.7rem;
    padding-left: 1.4rem;

    &::before {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`,l6=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;

  @media (min-width: 480px) {
    gap: 0.45rem;
  }

  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`,o6=E.span`
  background: rgba(255, 0, 136, 0.2);
  color: #ff0088;
  padding: 0.35rem 0.7rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid rgba(255, 0, 136, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-height: 28px;
  display: inline-flex;
  align-items: center;

  @media (min-width: 480px) {
    padding: 0.3rem 0.75rem;
    font-size: 0.72rem;
    border-radius: 13px;
  }

  @media (min-width: 768px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.75rem;
    border-radius: 15px;
  }
`,c6=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,Ol=E(Q.div)`
  position: absolute;
  font-size: 1.2rem;
  opacity: 0.08;
  color: #00ff88;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    opacity: 0.1;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }

  &.briefcase-1 { 
    top: 12%; 
    left: 5%;
    
    @media (min-width: 768px) {
      top: 15%;
      left: 8%;
    }

    @media (min-width: 1024px) {
      left: 10%;
    }
  }

  &.briefcase-2 { 
    top: 25%; 
    right: 8%; 

    @media (min-width: 768px) {
      top: 30%;
      right: 12%;
    }

    @media (min-width: 1024px) {
      right: 15%;
    }
  }

  &.briefcase-3 { 
    bottom: 30%; 
    left: 8%; 

    @media (min-width: 768px) {
      bottom: 25%;
      left: 15%;
    }

    @media (min-width: 1024px) {
      left: 20%;
    }
  }

  &.briefcase-4 { 
    bottom: 45%; 
    right: 5%; 

    @media (min-width: 768px) {
      bottom: 40%;
      right: 8%;
    }

    @media (min-width: 1024px) {
      right: 10%;
    }
  }
`,u6=()=>{const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.4,delayChildren:.2}}},a={hidden:{y:100,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},s={hidden:{scale:0,opacity:0},visible:{scale:1,opacity:1,transition:{type:"spring",stiffness:300,damping:20}}},l={animate:{y:[0,-20,0],rotate:[0,15,-15,0],scale:[1,1.1,1],transition:{duration:8,repeat:1/0,ease:"easeInOut"}}},u=[{title:"Senior Full Stack Developer",company:"TechSecure Solutions",logo:"TS",duration:"2023 - Present",description:"Leading development of secure web applications and cybersecurity tools for enterprise clients. Responsible for architecture design, code review, and mentoring junior developers.",achievements:["Architected and deployed 3 major enterprise security platforms","Reduced application vulnerabilities by 85% through security audits","Led a team of 5 developers using Agile methodologies","Implemented CI/CD pipelines reducing deployment time by 60%"],skills:["React","Node.js","Docker","AWS","PostgreSQL","Security Auditing"]},{title:"Cybersecurity Analyst",company:"SecureNet Corp",logo:"SN",duration:"2022 - 2023",description:"Conducted security assessments, penetration testing, and vulnerability analysis for client systems. Developed automated security scanning tools and incident response procedures.",achievements:["Performed 50+ successful penetration tests for clients","Developed custom security scanning tools using Python","Reduced average incident response time from 4 hours to 45 minutes","Trained 20+ employees on cybersecurity best practices"],skills:["Penetration Testing","Python","Kali Linux","OWASP","Risk Assessment"]},{title:"Frontend Developer",company:"WebCraft Studios",logo:"WC",duration:"2021 - 2022",description:"Developed responsive web applications and user interfaces for various clients. Focused on creating intuitive user experiences while maintaining high performance standards.",achievements:["Built 15+ responsive websites with 99%+ performance scores","Implemented modern React patterns improving code maintainability","Collaborated with designers to create pixel-perfect UI components","Optimized applications resulting in 40% faster load times"],skills:["React","TypeScript","CSS3","JavaScript","Figma","Performance Optimization"]},{title:"Junior Software Developer",company:"StartupTech",logo:"ST",duration:"2020 - 2021",description:"Entry-level position focused on learning modern web development practices while contributing to various client projects and internal tools development.",achievements:["Successfully completed 10+ client projects on time","Learned and implemented React, Node.js, and database management","Contributed to open-source projects gaining 500+ GitHub stars","Received 'Employee of the Month' award twice for exceptional performance"],skills:["HTML5","CSS3","JavaScript","Git","MongoDB","Express.js"]}];return x.jsxs(Z3,{id:"experience",children:[x.jsxs(c6,{children:[x.jsx(Ol,{className:"briefcase-1",variants:l,animate:"animate",children:"💼"}),x.jsx(Ol,{className:"briefcase-2",variants:l,animate:"animate",transition:{delay:1},children:"🏢"}),x.jsx(Ol,{className:"briefcase-3",variants:l,animate:"animate",transition:{delay:2},children:"🚀"}),x.jsx(Ol,{className:"briefcase-4",variants:l,animate:"animate",transition:{delay:.5},children:"⭐"})]}),x.jsxs(F3,{children:[x.jsx(J3,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:"Work Experience"}),x.jsx($3,{children:x.jsx(Q.div,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:u.map((d,f)=>x.jsxs(Hf,{children:[x.jsx(W3,{variants:s,whileHover:{scale:1.4,boxShadow:"0 0 40px rgba(0, 255, 136, 0.8)"}}),x.jsxs(I3,{variants:a,whileHover:{scale:1.02},children:[x.jsx(t6,{children:d.logo}),x.jsx(e6,{children:d.title}),x.jsx(n6,{children:d.company}),x.jsx(i6,{children:d.duration}),x.jsx(a6,{children:d.description}),x.jsx(r6,{children:d.achievements.map((p,h)=>x.jsx(s6,{children:p},h))}),x.jsx(l6,{children:d.skills.map((p,h)=>x.jsx(o6,{children:p},h))})]})]},f))})})]})]})},f6=E.section`
  min-height: 100vh;
  padding: 4rem 0 3rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 0 4rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 0 4rem;
  }
`,d6=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,m6=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: 1.75rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`,h6=E(Q.p)`
  text-align: center;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  padding: 0 0.5rem;

  @media (min-width: 480px) {
    font-size: 1rem;
    max-width: 500px;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 3rem;
  }
`,p6=E(Q.div)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  align-items: center;

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
  }

  @media (min-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    gap: 1rem;
    margin-bottom: 4rem;
  }
`,g6=E(Q.button)`
  background: ${n=>n.active?"linear-gradient(45deg, #00ff88, #ff0088)":"transparent"};
  border: 2px solid ${n=>n.active?"transparent":"#00ff88"};
  color: ${n=>n.active?"#0f0f0f":"#00ff88"};
  padding: 0.75rem 1.2rem;
  border-radius: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.75rem;
  min-height: 44px;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 480px) {
    width: auto;
    min-width: 120px;
    font-size: 0.8rem;
    padding: 0.7rem 1.1rem;
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
    padding: 0.75rem 1.3rem;
    border-radius: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
  }

  &:hover {
    background: ${n=>n.active?"linear-gradient(45deg, #00ff88, #ff0088)":"#00ff88"};
    color: #0f0f0f;
    transform: translateY(-2px);
  }
`,y6=E.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2rem;
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  }
`,v6=E(Q.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  width: 100%;

  @media (min-width: 480px) {
    padding: 1.75rem;
    border-radius: 18px;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    border-radius: 20px;
  }

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.15);

    @media (min-width: 768px) {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 255, 136, 0.18);
    }

    @media (min-width: 1024px) {
      transform: translateY(-10px);
      box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`,x6=E.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 1.25rem;
  }
`,b6=E.span`
  background: ${n=>n.type==="research"?"linear-gradient(45deg, #00ff88, #00cc66)":n.type==="article"?"linear-gradient(45deg, #ff0088, #cc0066)":n.type==="conference"?"linear-gradient(45deg, #ffaa00, #cc8800)":"linear-gradient(45deg, #aa00ff, #8800cc)"};
  color: #0f0f0f;
  padding: 0.4rem 0.9rem;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-shrink: 0;
  align-self: flex-start;
  min-height: 24px;
  display: inline-flex;
  align-items: center;

  @media (min-width: 480px) {
    font-size: 0.68rem;
    padding: 0.35rem 0.85rem;
    border-radius: 13px;
  }

  @media (min-width: 768px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
  }
`,S6=E.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  color: rgba(255, 0, 136, 0.8);
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }
`,w6=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  line-height: 1.25;

  @media (min-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`,T6=E.h4`
  font-size: 0.9rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
  font-style: italic;
  line-height: 1.4;

  @media (min-width: 480px) {
    font-size: 0.95rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,A6=E.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.87rem;

  @media (min-width: 480px) {
    line-height: 1.55;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    line-height: 1.6;
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`,E6=E.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 1.25rem;
  }
`,M6=E.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 0.5rem;
  display: inline-block;
  margin-bottom: 0.25rem;

  @media (min-width: 480px) {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
  }
`,z6=E.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.85rem;
  font-style: italic;
  line-height: 1.4;

  @media (min-width: 480px) {
    font-size: 0.87rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`,D6=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;

  @media (min-width: 480px) {
    gap: 0.45rem;
  }

  @media (min-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`,C6=E.span`
  background: rgba(255, 0, 136, 0.2);
  color: #ff0088;
  padding: 0.3rem 0.6rem;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid rgba(255, 0, 136, 0.3);
  min-height: 26px;
  display: inline-flex;
  align-items: center;

  @media (min-width: 480px) {
    padding: 0.28rem 0.65rem;
    font-size: 0.72rem;
    border-radius: 11px;
  }

  @media (min-width: 768px) {
    padding: 0.25rem 0.6rem;
    font-size: 0.75rem;
    border-radius: 12px;
  }
`,j6=E.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  @media (min-width: 768px) {
    gap: 1rem;
  }
`,R6=E(Q.a)`
  background: ${n=>n.primary?"linear-gradient(45deg, #00ff88, #ff0088)":"transparent"};
  border: 2px solid ${n=>n.primary?"transparent":"#00ff88"};
  color: ${n=>n.primary?"#0f0f0f":"#00ff88"};
  padding: 0.75rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 44px;
  text-align: center;

  @media (min-width: 480px) {
    width: auto;
    padding: 0.65rem 1.1rem;
    font-size: 0.77rem;
    border-radius: 7px;
  }

  @media (min-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
    border-radius: 8px;
  }

  &:hover {
    background: ${n=>n.primary?"linear-gradient(45deg, #00ff88, #ff0088)":"#00ff88"};
    color: #0f0f0f;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.4);
  }
`,O6=E.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`,V6=E.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 0.85rem;
    gap: 0.5rem;
  }
`,N6=E.div`
  background: linear-gradient(45deg, #ffaa00, #ff8800);
  color: #0f0f0f;
  padding: 0.35rem 0.75rem;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  align-self: flex-start;

  @media (min-width: 480px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.68rem;
    border-radius: 13px;
  }

  @media (min-width: 768px) {
    font-size: 0.7rem;
    border-radius: 15px;
  }
`,_6=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,xa=E(Q.div)`
  position: absolute;
  font-size: 1rem;
  opacity: 0.06;
  color: #00ff88;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    opacity: 0.08;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    opacity: 0.1;
  }

  &.icon-1 { 
    top: 12%; 
    left: 3%; 

    @media (min-width: 768px) {
      top: 15%;
      left: 5%;
    }
  }

  &.icon-2 { 
    top: 20%; 
    right: 5%; 

    @media (min-width: 768px) {
      top: 25%;
      right: 8%;
    }
  }

  &.icon-3 { 
    bottom: 40%; 
    left: 6%; 

    @media (min-width: 768px) {
      bottom: 35%;
      left: 10%;
    }
  }

  &.icon-4 { 
    bottom: 25%; 
    right: 8%; 

    @media (min-width: 768px) {
      bottom: 20%;
      right: 12%;
    }
  }

  &.icon-5 { 
    top: 65%; 
    left: 10%; 

    @media (min-width: 768px) {
      top: 60%;
      left: 15%;
    }
  }

  &.icon-6 { 
    top: 50%; 
    right: 15%; 

    @media (min-width: 768px) {
      top: 45%;
      right: 20%;
    }
  }
`,B6=()=>{const[n,a]=J.useState("all"),s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},l={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},u={animate:{y:[0,-15,0],rotate:[0,10,-10,0],opacity:[.1,.2,.1],transition:{duration:6,repeat:1/0,ease:"easeInOut"}}},d=[{id:"all",label:"All Publications"},{id:"research",label:"Research Papers"},{id:"article",label:"Technical Articles"},{id:"conference",label:"Conference Papers"}],f=[{id:1,type:"research",title:"Advanced Cybersecurity Frameworks for Modern Web Applications",venue:"Journal of Cybersecurity Research",date:"December 2024",authors:"Unmesh Achar, Dr. Sarah Johnson, Prof. Michael Chen",abstract:"This paper presents a comprehensive framework for implementing advanced cybersecurity measures in modern web applications. We propose a multi-layered approach that combines traditional security practices with machine learning-based threat detection.",keywords:["Cybersecurity","Web Security","Machine Learning","Threat Detection","Framework"],citations:15,impact:"High Impact",links:[{type:"paper",url:"https://example.com/paper1.pdf",label:"📄 Full Paper"},{type:"code",url:"https://github.com/unmesh/security-framework",label:"💻 Source Code"}]},{id:2,type:"conference",title:"Real-time Vulnerability Assessment in Cloud Infrastructure",venue:"International Conference on Cloud Security (ICCS 2024)",date:"October 2024",authors:"Unmesh Achar, Dr. Emily Rodriguez",abstract:"We present a novel approach for real-time vulnerability assessment in cloud infrastructure using automated scanning techniques and AI-powered risk analysis. Our system can detect and categorize vulnerabilities with 94% accuracy.",keywords:["Cloud Security","Vulnerability Assessment","Real-time Monitoring","AI","Risk Analysis"],citations:8,impact:"Peer Reviewed",links:[{type:"paper",url:"https://example.com/paper2.pdf",label:"📄 Conference Paper"},{type:"presentation",url:"https://example.com/presentation2.pdf",label:"📊 Presentation"}]},{id:3,type:"article",title:"Building Secure React Applications: A Developer's Guide",venue:"TechSecure Magazine",date:"September 2024",authors:"Unmesh Achar",abstract:"A comprehensive guide for developers on implementing security best practices in React applications. Covers common vulnerabilities, secure coding practices, and modern security tools for frontend development.",keywords:["React","Frontend Security","Secure Coding","Web Development","Best Practices"],citations:25,impact:"Industry Guide",links:[{type:"article",url:"https://example.com/article1",label:"📰 Read Article"},{type:"code",url:"https://github.com/unmesh/secure-react-guide",label:"💻 Code Examples"}]},{id:4,type:"research",title:"Machine Learning Approaches for Intrusion Detection Systems",venue:"IEEE Transactions on Network Security",date:"August 2024",authors:"Unmesh Achar, Dr. Alex Thompson, Dr. Maria Santos",abstract:"This study evaluates various machine learning algorithms for network intrusion detection, proposing a hybrid approach that combines supervised and unsupervised learning techniques for improved accuracy and reduced false positives.",keywords:["Machine Learning","Intrusion Detection","Network Security","Hybrid Algorithms","Anomaly Detection"],citations:32,impact:"High Impact",links:[{type:"paper",url:"https://example.com/paper3.pdf",label:"📄 IEEE Paper"},{type:"dataset",url:"https://example.com/dataset",label:"📊 Dataset"}]},{id:5,type:"conference",title:"Blockchain-based Identity Management for IoT Devices",venue:"International IoT Security Summit 2024",date:"July 2024",authors:"Unmesh Achar, Dr. Jennifer Wu",abstract:"We propose a decentralized identity management system for IoT devices using blockchain technology. Our approach ensures secure device authentication while maintaining scalability and performance in large IoT networks.",keywords:["Blockchain","IoT Security","Identity Management","Decentralization","Authentication"],citations:12,impact:"Best Paper Award",links:[{type:"paper",url:"https://example.com/paper4.pdf",label:"📄 Award Paper"},{type:"demo",url:"https://example.com/demo",label:"🎮 Live Demo"}]},{id:6,type:"article",title:"The Future of Cybersecurity: Emerging Threats and Solutions",venue:"CyberDefense Quarterly",date:"June 2024",authors:"Unmesh Achar",abstract:"An analysis of emerging cybersecurity threats in 2024 and beyond, including AI-powered attacks, quantum computing implications, and next-generation defense strategies. Provides actionable insights for security professionals.",keywords:["Emerging Threats","AI Security","Quantum Computing","Future Trends","Defense Strategies"],citations:18,impact:"Industry Analysis",links:[{type:"article",url:"https://example.com/article2",label:"📰 Full Article"},{type:"podcast",url:"https://example.com/podcast",label:"🎧 Podcast Discussion"}]}],p=n==="all"?f:f.filter(h=>h.type===n);return x.jsxs(f6,{id:"publications",children:[x.jsxs(_6,{children:[x.jsx(xa,{className:"icon-1",variants:u,animate:"animate",children:"📚"}),x.jsx(xa,{className:"icon-2",variants:u,animate:"animate",transition:{delay:.5},children:"🔬"}),x.jsx(xa,{className:"icon-3",variants:u,animate:"animate",transition:{delay:1},children:"📄"}),x.jsx(xa,{className:"icon-4",variants:u,animate:"animate",transition:{delay:1.5},children:"🏆"}),x.jsx(xa,{className:"icon-5",variants:u,animate:"animate",transition:{delay:2},children:"💡"}),x.jsx(xa,{className:"icon-6",variants:u,animate:"animate",transition:{delay:.8},children:"📊"})]}),x.jsxs(d6,{children:[x.jsx(m6,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:"Publications & Research"}),x.jsx(h6,{initial:{y:-30,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut",delay:.2},children:"Academic publications, research papers, and technical articles contributing to the cybersecurity and software development communities."}),x.jsx(p6,{initial:{y:-20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut",delay:.4},children:d.map(h=>x.jsx(g6,{active:n===h.id,onClick:()=>a(h.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:h.label},h.id))}),x.jsx(po,{mode:"wait",children:x.jsx(Q.div,{variants:s,initial:"hidden",animate:"visible",exit:"hidden",children:x.jsx(y6,{children:p.map(h=>x.jsxs(v6,{variants:l,whileHover:{scale:1.02},layout:!0,children:[x.jsx(x6,{children:x.jsxs("div",{children:[x.jsx(b6,{type:h.type,children:h.type}),x.jsx(S6,{children:h.date})]})}),x.jsx(w6,{children:h.title}),x.jsx(T6,{children:h.venue}),x.jsxs(E6,{children:[x.jsx(M6,{children:"Authors:"}),x.jsx(z6,{children:h.authors})]}),x.jsx(A6,{children:h.abstract}),x.jsx(D6,{children:h.keywords.map((g,y)=>x.jsx(C6,{children:g},y))}),x.jsx(j6,{children:h.links.map((g,y)=>x.jsx(R6,{href:g.url,target:"_blank",rel:"noopener noreferrer",primary:y===0,whileHover:{scale:1.05},whileTap:{scale:.95},children:g.label},y))}),x.jsxs(O6,{children:[x.jsxs(V6,{children:["📈 ",h.citations," Citations"]}),x.jsx(N6,{children:h.impact})]})]},h.id))})},n)})]})]})},U6=E.section`
  min-height: 100vh;
  padding: 4rem 0 3rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 0 4rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 0 4rem;
  }
`,k6=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,L6=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: 1.75rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`,H6=E(Q.p)`
  text-align: center;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  padding: 0 0.5rem;

  @media (min-width: 480px) {
    font-size: 1rem;
    max-width: 500px;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 3rem;
  }
`,Y6=E(Q.div)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
  align-items: center;

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
  }

  @media (min-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    gap: 1rem;
    margin-bottom: 3rem; /* Show stats first, then categories */
  }
`,G6=E(Q.button)`
  background: ${n=>n.active?"linear-gradient(45deg, #00ff88, #ff0088)":"transparent"};
  border: 2px solid ${n=>n.active?"transparent":"#00ff88"};
  color: ${n=>n.active?"#0f0f0f":"#00ff88"};
  padding: 0.75rem 1.2rem;
  border-radius: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.75rem;
  min-height: 44px;
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 480px) {
    width: auto;
    min-width: 140px;
    font-size: 0.8rem;
    padding: 0.7rem 1.1rem;
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
    padding: 0.75rem 1.3rem;
    border-radius: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
  }

  &:hover {
    background: ${n=>n.active?"linear-gradient(45deg, #00ff88, #ff0088)":"#00ff88"};
    color: #0f0f0f;
    transform: translateY(-2px);
  }
`,q6=E.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 2rem;
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`,X6=E(Q.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  width: 100%;

  @media (min-width: 480px) {
    padding: 1.75rem;
    border-radius: 18px;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    border-radius: 20px;
  }

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.15);

    @media (min-width: 768px) {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 255, 136, 0.18);
    }

    @media (min-width: 1024px) {
      transform: translateY(-10px);
      box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  ${n=>n.completed&&`
    border-color: rgba(0, 255, 136, 0.6);
    background: rgba(0, 255, 136, 0.1);
    
    &::after {
      content: '✓';
      position: absolute;
      top: 12px;
      right: 12px;
      width: 26px;
      height: 26px;
      background: linear-gradient(45deg, #00ff88, #00cc66);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0f0f0f;
      font-weight: bold;
      font-size: 1rem;

      @media (min-width: 768px) {
        top: 15px;
        right: 15px;
        width: 30px;
        height: 30px;
        font-size: 1.2rem;
      }
    }
  `}
`,P6=E.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 1.25rem;
  }
`,K6=E.div`
  font-size: 2rem;
  margin-bottom: 0.75rem;
  align-self: center;

  @media (min-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    align-self: flex-start;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  
  ${n=>n.completed&&`
    filter: saturate(1.5) brightness(1.2);
  `}
`,Q6=E.span`
  background: ${n=>n.category==="travel"?"linear-gradient(45deg, #00ff88, #00cc66)":n.category==="career"?"linear-gradient(45deg, #ff0088, #cc0066)":n.category==="learning"?"linear-gradient(45deg, #ffaa00, #cc8800)":n.category==="personal"?"linear-gradient(45deg, #aa00ff, #8800cc)":"linear-gradient(45deg, #00ffff, #0088cc)"};
  color: #0f0f0f;
  padding: 0.4rem 0.9rem;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-shrink: 0;
  align-self: flex-start;
  min-height: 24px;
  display: inline-flex;
  align-items: center;

  @media (min-width: 480px) {
    font-size: 0.68rem;
    padding: 0.35rem 0.85rem;
    border-radius: 13px;
  }

  @media (min-width: 768px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
  }
`,Z6=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1rem;
  font-weight: 700;
  color: ${n=>n.completed?"#00ff88":"#ffffff"};
  margin-bottom: 0.5rem;
  text-shadow: ${n=>n.completed?"0 0 12px rgba(0, 255, 136, 0.4)":"none"};
  line-height: 1.25;
  padding-right: ${n=>n.completed?"35px":"0"}; /* Make room for checkmark */

  @media (min-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    text-shadow: ${n=>n.completed?"0 0 15px rgba(0, 255, 136, 0.5)":"none"};
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }

  ${n=>n.completed&&`
    text-decoration: line-through;
    text-decoration-color: #00ff88;
    text-decoration-thickness: 2px;
  `}
`,F6=E.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.87rem;

  @media (min-width: 480px) {
    line-height: 1.55;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    line-height: 1.6;
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`,J6=E.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-bottom: 0.75rem;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 6px;
    border-radius: 3px;
    margin-bottom: 1rem;
  }
`,$6=E(Q.div)`
  height: 100%;
  background: linear-gradient(90deg, #00ff88, #ff0088);
  border-radius: 4px;
  width: ${n=>n.progress}%;

  @media (min-width: 768px) {
    border-radius: 3px;
  }
`,W6=E.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
  text-align: right;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
`,I6=E.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0;

  @media (min-width: 768px) {
    margin: 1rem 0;
  }
`,tA=E.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  line-height: 1.4;
  margin-bottom: 0.4rem;
  position: relative;
  padding-left: 1.1rem;
  min-height: 1.1rem;

  @media (min-width: 480px) {
    font-size: 0.82rem;
    line-height: 1.45;
    margin-bottom: 0.45rem;
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    padding-left: 1.2rem;
  }

  &::before {
    content: ${n=>n.completed?'"✅"':'"⭕"'};
    position: absolute;
    left: 0;
    font-size: 0.75rem;

    @media (min-width: 768px) {
      font-size: 0.8rem;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${n=>n.completed&&`
    text-decoration: line-through;
    opacity: 0.7;
  `}
`,eA=E.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  color: rgba(255, 0, 136, 0.8);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 0.75rem;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    margin-top: 1rem;
  }
`,nA=E(Q.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);

  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
    padding: 2rem;
    border-radius: 18px;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
    border-radius: 20px;
    margin-bottom: 3rem; /* Move stats above filters for better UX */
  }
`,Vl=E.div`
  text-align: center;
`,Nl=E.div`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 900;
  color: #00ff88;
  margin-bottom: 0.3rem;
  text-shadow: 0 0 12px rgba(0, 255, 136, 0.4);

  @media (min-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 15px rgba(0, 255, 136, 0.5);
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`,_l=E.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`,iA=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,ba=E(Q.div)`
  position: absolute;
  font-size: 1rem;
  opacity: 0.06;
  color: #00ff88;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    opacity: 0.08;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    opacity: 0.1;
  }

  &.dream-1 { 
    top: 8%; 
    left: 3%; 

    @media (min-width: 768px) {
      top: 10%;
      left: 5%;
    }
  }

  &.dream-2 { 
    top: 20%; 
    right: 5%; 

    @media (min-width: 768px) {
      top: 25%;
      right: 8%;
    }
  }

  &.dream-3 { 
    bottom: 40%; 
    left: 6%; 

    @media (min-width: 768px) {
      bottom: 35%;
      left: 10%;
    }
  }

  &.dream-4 { 
    bottom: 25%; 
    right: 8%; 

    @media (min-width: 768px) {
      bottom: 20%;
      right: 12%;
    }
  }

  &.dream-5 { 
    top: 65%; 
    left: 10%; 

    @media (min-width: 768px) {
      top: 60%;
      left: 15%;
    }
  }

  &.dream-6 { 
    top: 50%; 
    right: 15%; 

    @media (min-width: 768px) {
      top: 45%;
      right: 20%;
    }
  }
`,aA=()=>{const[n,a]=J.useState("all"),s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},l={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},u={animate:{y:[0,-20,0],rotate:[0,15,-15,0],scale:[1,1.1,1],transition:{duration:8,repeat:1/0,ease:"easeInOut"}}},d=[{id:"all",label:"All Goals"},{id:"travel",label:"Travel & Adventure"},{id:"career",label:"Career & Professional"},{id:"learning",label:"Learning & Skills"},{id:"personal",label:"Personal Growth"}],f=[{id:1,category:"travel",title:"Visit all 7 continents",description:"Experience the diverse cultures, landscapes, and adventures that each continent has to offer.",icon:"🌍",progress:42,completed:!1,timeline:"By 2030",steps:[{text:"Visit Asia (India, Japan, Thailand)",completed:!0},{text:"Explore Europe (10+ countries)",completed:!0},{text:"Adventure in North America",completed:!0},{text:"Discover South America",completed:!1},{text:"Safari in Africa",completed:!1},{text:"Explore Australia & Oceania",completed:!1},{text:"Research expedition to Antarctica",completed:!1}]},{id:2,category:"career",title:"Start my own cybersecurity company",description:"Build a leading cybersecurity consultancy helping organizations protect their digital assets.",icon:"🚀",progress:65,completed:!1,timeline:"By 2026",steps:[{text:"Gain 5+ years industry experience",completed:!0},{text:"Build professional network",completed:!0},{text:"Develop business plan",completed:!0},{text:"Secure initial funding",completed:!1},{text:"Hire first team members",completed:!1},{text:"Land first major client",completed:!1}]},{id:3,category:"learning",title:"Master 5 programming languages",description:"Become proficient in diverse programming paradigms and technologies.",icon:"💻",progress:80,completed:!1,timeline:"By 2025",steps:[{text:"JavaScript & TypeScript",completed:!0},{text:"Python for security & AI",completed:!0},{text:"Go for system programming",completed:!0},{text:"Rust for performance",completed:!0},{text:"C++ for low-level programming",completed:!1}]},{id:4,category:"personal",title:"Run a marathon",description:"Complete a full 26.2-mile marathon race, testing physical and mental endurance.",icon:"🏃‍♂️",progress:30,completed:!1,timeline:"By 2025",steps:[{text:"Start regular running routine",completed:!0},{text:"Complete 5K races",completed:!0},{text:"Complete 10K race",completed:!1},{text:"Complete half marathon",completed:!1},{text:"Train for full marathon",completed:!1},{text:"Complete full marathon",completed:!1}]},{id:5,category:"career",title:"Speak at major tech conference",description:"Share knowledge and expertise with the global tech community at a prestigious conference.",icon:"🎤",progress:50,completed:!1,timeline:"By 2025",steps:[{text:"Develop expertise in specialized area",completed:!0},{text:"Start speaking at local meetups",completed:!0},{text:"Present at regional conferences",completed:!1},{text:"Submit proposal to major conference",completed:!1},{text:"Deliver keynote presentation",completed:!1}]},{id:6,category:"learning",title:"Get PhD in Computer Science",description:"Pursue advanced research in cybersecurity and contribute original knowledge to the field.",icon:"🎓",progress:15,completed:!1,timeline:"By 2029",steps:[{text:"Research potential programs",completed:!0},{text:"Prepare for entrance exams",completed:!1},{text:"Apply to top universities",completed:!1},{text:"Complete coursework",completed:!1},{text:"Conduct original research",completed:!1},{text:"Write and defend dissertation",completed:!1}]},{id:7,category:"personal",title:"Learn to fly a plane",description:"Earn a private pilot license and experience the freedom of flight.",icon:"✈️",progress:20,completed:!1,timeline:"By 2027",steps:[{text:"Take introductory flight lesson",completed:!0},{text:"Complete ground school",completed:!1},{text:"Log required flight hours",completed:!1},{text:"Pass written exam",completed:!1},{text:"Pass practical exam",completed:!1},{text:"Receive pilot license",completed:!1}]},{id:8,category:"travel",title:"Hike the Everest Base Camp",description:"Trek to the base camp of the world's highest mountain in the Himalayas.",icon:"🏔️",progress:10,completed:!1,timeline:"By 2026",steps:[{text:"Build physical fitness",completed:!1},{text:"Practice on smaller mountain treks",completed:!1},{text:"Plan expedition logistics",completed:!1},{text:"Complete high-altitude training",completed:!1},{text:"Trek to Everest Base Camp",completed:!1}]},{id:9,category:"career",title:"Publish a technical book",description:"Write and publish a comprehensive book on cybersecurity best practices.",icon:"📚",progress:35,completed:!1,timeline:"By 2026",steps:[{text:"Outline book structure",completed:!0},{text:"Research and write chapters",completed:!0},{text:"Find publisher or self-publish",completed:!1},{text:"Complete editing process",completed:!1},{text:"Launch book marketing campaign",completed:!1}]},{id:10,category:"learning",title:"Learn to scuba dive",description:"Explore the underwater world and earn advanced diving certifications.",icon:"🤿",progress:100,completed:!0,timeline:"Completed 2024",steps:[{text:"Complete Open Water certification",completed:!0},{text:"Get Advanced Open Water",completed:!0},{text:"Complete Rescue Diver course",completed:!0},{text:"Dive in 3 different countries",completed:!0},{text:"Become Divemaster",completed:!0}]}],p=n==="all"?f:f.filter(S=>S.category===n),h=f.length,g=f.filter(S=>S.completed).length,y=f.filter(S=>S.progress>0&&!S.completed).length,b=Math.round(f.reduce((S,C)=>S+C.progress,0)/h);return x.jsxs(U6,{id:"bucket-list",children:[x.jsxs(iA,{children:[x.jsx(ba,{className:"dream-1",variants:u,animate:"animate",children:"⭐"}),x.jsx(ba,{className:"dream-2",variants:u,animate:"animate",transition:{delay:.5},children:"🌟"}),x.jsx(ba,{className:"dream-3",variants:u,animate:"animate",transition:{delay:1},children:"💫"}),x.jsx(ba,{className:"dream-4",variants:u,animate:"animate",transition:{delay:1.5},children:"✨"}),x.jsx(ba,{className:"dream-5",variants:u,animate:"animate",transition:{delay:2},children:"🎯"}),x.jsx(ba,{className:"dream-6",variants:u,animate:"animate",transition:{delay:.8},children:"🚀"})]}),x.jsxs(k6,{children:[x.jsx(L6,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:"My Bucket List"}),x.jsx(H6,{initial:{y:-30,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut",delay:.2},children:"Personal goals, dreams, and aspirations that drive me forward. Life is an adventure, and these are the milestones I'm working towards."}),x.jsxs(nA,{initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut",delay:.4},children:[x.jsxs(Vl,{children:[x.jsx(Nl,{children:h}),x.jsx(_l,{children:"Total Goals"})]}),x.jsxs(Vl,{children:[x.jsx(Nl,{children:g}),x.jsx(_l,{children:"Completed"})]}),x.jsxs(Vl,{children:[x.jsx(Nl,{children:y}),x.jsx(_l,{children:"In Progress"})]}),x.jsxs(Vl,{children:[x.jsxs(Nl,{children:[b,"%"]}),x.jsx(_l,{children:"Avg Progress"})]})]}),x.jsx(Y6,{initial:{y:-20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut",delay:.6},children:d.map(S=>x.jsx(G6,{active:n===S.id,onClick:()=>a(S.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:S.label},S.id))}),x.jsx(po,{mode:"wait",children:x.jsx(Q.div,{variants:s,initial:"hidden",animate:"visible",exit:"hidden",children:x.jsx(q6,{children:p.map(S=>x.jsxs(X6,{variants:l,whileHover:{scale:1.02},completed:S.completed,layout:!0,children:[x.jsx(P6,{children:x.jsx(Q6,{category:S.category,children:S.category})}),x.jsx(K6,{completed:S.completed,children:S.icon}),x.jsx(Z6,{completed:S.completed,children:S.title}),x.jsx(F6,{children:S.description}),x.jsx(J6,{children:x.jsx($6,{progress:S.progress,initial:{width:0},whileInView:{width:`${S.progress}%`},viewport:{once:!0},transition:{duration:1.5,ease:"easeOut",delay:.2}})}),x.jsxs(W6,{children:[S.progress,"% Complete"]}),x.jsx(I6,{children:S.steps.map((C,O)=>x.jsx(tA,{completed:C.completed,children:C.text},O))}),x.jsx(eA,{children:S.timeline})]},S.id))})},n)})]})]})},rA=E.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`,sA=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`,lA=E.div`
  @media (max-width: 968px) {
    order: 2;
  }
`,oA=E.div`
  @media (max-width: 968px) {
    order: 1;
  }
`,cA=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(45deg, #00ff88, #ff0088);
    border-radius: 2px;
  }

  @media (max-width: 968px) {
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,uA=E(Q.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    text-align: center;
  }
`,fA=E.div`
  margin-bottom: 3rem;
`,Bl=E(Q.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 968px) {
    justify-content: center;
  }
`,Ul=E.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`,kl=E.div``,Ll=E.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.2rem;
`,Hl=E.div`
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,dA=E(Q.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`,Hr=E(Q.a)`
  width: 50px;
  height: 50px;
  background: rgba(0, 255, 136, 0.1);
  border: 2px solid rgba(0, 255, 136, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #00ff88;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #00ff88, #ff0088);
    border-color: transparent;
    color: #0f0f0f;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(0, 255, 136, 0.4);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
`,mA=E(Q.form)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,hA=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,pA=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Yl=E.div`
  margin-bottom: 1.5rem;
`,Gl=E.label`
  display: block;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`,of=E.input`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 255, 136, 0.2);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    border-color: #00ff88;
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }
`,gA=E.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 255, 136, 0.2);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    border-color: #00ff88;
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }
`,yA=E(Q.button)`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border: none;
  border-radius: 8px;
  color: #0f0f0f;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,vA=E(Q.div)`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  
  ${n=>n.success&&`
    background: rgba(0, 255, 136, 0.1);
    color: #00ff88;
    border: 1px solid rgba(0, 255, 136, 0.3);
  `}
  
  ${n=>n.error&&`
    background: rgba(255, 0, 136, 0.1);
    color: #ff0088;
    border: 1px solid rgba(255, 0, 136, 0.3);
  `}
`,xA=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,Sa=E(Q.div)`
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.1;
  color: #00ff88;

  &.contact-1 { top: 15%; left: 5%; }
  &.contact-2 { top: 25%; right: 8%; }
  &.contact-3 { bottom: 35%; left: 10%; }
  &.contact-4 { bottom: 20%; right: 12%; }
  &.contact-5 { top: 60%; left: 15%; }
  &.contact-6 { top: 45%; right: 20%; }
`,bA=()=>{const[n,a]=J.useState({name:"",email:"",subject:"",message:""}),[s,l]=J.useState(!1),[u,d]=J.useState({type:"",message:""}),f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},p={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},h={animate:{y:[0,-15,0],rotate:[0,10,-10,0],scale:[1,1.1,1],transition:{duration:6,repeat:1/0,ease:"easeInOut"}}},g=b=>{a({...n,[b.target.name]:b.target.value})},y=async b=>{b.preventDefault(),l(!0),d({type:"",message:""});try{if(await new Promise(S=>setTimeout(S,2e3)),n.name&&n.email&&n.message)d({type:"success",message:"Thank you for your message! I'll get back to you soon."}),a({name:"",email:"",subject:"",message:""});else throw new Error("Please fill in all required fields")}catch{d({type:"error",message:"Failed to send message. Please try again later."})}finally{l(!1)}};return x.jsxs(rA,{id:"contact",children:[x.jsxs(xA,{children:[x.jsx(Sa,{className:"contact-1",variants:h,animate:"animate",children:"📧"}),x.jsx(Sa,{className:"contact-2",variants:h,animate:"animate",transition:{delay:.5},children:"📱"}),x.jsx(Sa,{className:"contact-3",variants:h,animate:"animate",transition:{delay:1},children:"💬"}),x.jsx(Sa,{className:"contact-4",variants:h,animate:"animate",transition:{delay:1.5},children:"🌐"}),x.jsx(Sa,{className:"contact-5",variants:h,animate:"animate",transition:{delay:2},children:"📍"}),x.jsx(Sa,{className:"contact-6",variants:h,animate:"animate",transition:{delay:.8},children:"💼"})]}),x.jsx(sA,{children:x.jsxs(Q.div,{variants:f,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[x.jsxs(lA,{children:[x.jsx(cA,{variants:p,children:"Get In Touch"}),x.jsx(uA,{variants:p,children:"Ready to collaborate on your next project or discuss cybersecurity solutions? I'm always excited to connect with fellow developers, security professionals, and innovative thinkers."}),x.jsxs(fA,{children:[x.jsxs(Bl,{variants:p,whileHover:{scale:1.02},children:[x.jsx(Ul,{children:"📧"}),x.jsxs(kl,{children:[x.jsx(Ll,{children:"Email"}),x.jsx(Hl,{children:"unmesh.achar@email.com"})]})]}),x.jsxs(Bl,{variants:p,whileHover:{scale:1.02},children:[x.jsx(Ul,{children:"📱"}),x.jsxs(kl,{children:[x.jsx(Ll,{children:"Phone"}),x.jsx(Hl,{children:"+1 (555) 123-4567"})]})]}),x.jsxs(Bl,{variants:p,whileHover:{scale:1.02},children:[x.jsx(Ul,{children:"📍"}),x.jsxs(kl,{children:[x.jsx(Ll,{children:"Location"}),x.jsx(Hl,{children:"San Francisco, CA"})]})]}),x.jsxs(Bl,{variants:p,whileHover:{scale:1.02},children:[x.jsx(Ul,{children:"💼"}),x.jsxs(kl,{children:[x.jsx(Ll,{children:"Available For"}),x.jsx(Hl,{children:"Freelance & Full-time"})]})]})]}),x.jsxs(dA,{variants:p,children:[x.jsx(Hr,{href:"https://github.com/unmesh",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},children:"🐙"}),x.jsx(Hr,{href:"https://linkedin.com/in/unmesh-achar",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:-5},whileTap:{scale:.9},children:"💼"}),x.jsx(Hr,{href:"https://twitter.com/unmesh_achar",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},children:"🐦"}),x.jsx(Hr,{href:"mailto:unmesh.achar@email.com",whileHover:{scale:1.1,rotate:-5},whileTap:{scale:.9},children:"✉️"}),x.jsx(Hr,{href:"/resume-unmesh-achar.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},children:"📄"})]})]}),x.jsx(oA,{children:x.jsxs(mA,{variants:p,onSubmit:y,whileHover:{scale:1.01},children:[x.jsx(hA,{children:"Send Me a Message"}),x.jsxs(pA,{children:[x.jsxs(Yl,{children:[x.jsx(Gl,{htmlFor:"name",children:"Name *"}),x.jsx(of,{type:"text",id:"name",name:"name",placeholder:"Your Name",value:n.name,onChange:g,required:!0})]}),x.jsxs(Yl,{children:[x.jsx(Gl,{htmlFor:"email",children:"Email *"}),x.jsx(of,{type:"email",id:"email",name:"email",placeholder:"your.email@example.com",value:n.email,onChange:g,required:!0})]})]}),x.jsxs(Yl,{children:[x.jsx(Gl,{htmlFor:"subject",children:"Subject"}),x.jsx(of,{type:"text",id:"subject",name:"subject",placeholder:"Project Collaboration / Job Opportunity / General Inquiry",value:n.subject,onChange:g})]}),x.jsxs(Yl,{children:[x.jsx(Gl,{htmlFor:"message",children:"Message *"}),x.jsx(gA,{id:"message",name:"message",placeholder:"Tell me about your project, question, or how we can work together...",value:n.message,onChange:g,required:!0})]}),x.jsx(yA,{type:"submit",disabled:s,whileHover:{scale:1.02},whileTap:{scale:.98},children:s?"Sending Message...":"Send Message 🚀"}),u.message&&x.jsx(vA,{success:u.type==="success",error:u.type==="error",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:u.message})]})})]})})]})},SA=H5`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #ffffff;
    background: #0f0f0f;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Orbitron', monospace;
    font-weight: 700;
    line-height: 1.2;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .section {
    padding: 6rem 0;
    
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
    
    @media (max-width: 480px) {
      padding: 3rem 0;
    }
  }

  .cyberpunk-border {
    border: 2px solid #00ff88;
    border-radius: 8px;
    background: linear-gradient(45deg, rgba(0, 255, 136, 0.1), rgba(255, 0, 136, 0.1));
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }

  .neon-text {
    text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
  }

  .btn-primary {
    background: linear-gradient(45deg, #00ff88, #ff0088);
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 255, 136, 0.3);
    }
    
    @media (max-width: 480px) {
      padding: 0.6rem 1.5rem;
      font-size: 0.9rem;
    }
  }

  .responsive-grid {
    display: grid;
    gap: 2rem;
    
    &.grid-2 {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    
    &.grid-3 {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    
    &.grid-4 {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    
    @media (max-width: 768px) {
      gap: 1.5rem;
      
      &.grid-2,
      &.grid-3,
      &.grid-4 {
        grid-template-columns: 1fr;
      }
    }
  }

  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeIn 0.6s ease forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .floating-animation {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  .pulse {
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`,wA=E.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  color: #fff;
  overflow-x: hidden;
`,TA=()=>x.jsxs(wA,{children:[x.jsx(SA,{}),x.jsx(DT,{}),x.jsxs(Q.main,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[x.jsx(YT,{}),x.jsx(WT,{}),x.jsx(d3,{}),x.jsx(D3,{}),x.jsx(Q3,{}),x.jsx(u6,{}),x.jsx(B6,{}),x.jsx(aA,{}),x.jsx(bA,{})]})]});Lb.createRoot(document.getElementById("root")).render(x.jsx(J.StrictMode,{children:x.jsx(TA,{})}));
