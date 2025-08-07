(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function s(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=s(c);fetch(c.href,d)}})();function jx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var zc={exports:{}},Ur={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function Rx(){if(x0)return Ur;x0=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function s(l,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var p in c)p!=="key"&&(d[p]=c[p])}else d=c;return c=d.ref,{$$typeof:n,type:l,key:f,ref:c!==void 0?c:null,props:d}}return Ur.Fragment=a,Ur.jsx=s,Ur.jsxs=s,Ur}var S0;function Ox(){return S0||(S0=1,zc.exports=Rx()),zc.exports}var b=Ox(),Vc={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function zx(){if(T0)return ut;T0=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function S(w){return w===null||typeof w!="object"?null:(w=x&&w[x]||w["@@iterator"],typeof w=="function"?w:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,H={};function P(w,U,Z){this.props=w,this.context=U,this.refs=H,this.updater=Z||j}P.prototype.isReactComponent={},P.prototype.setState=function(w,U){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,U,"setState")},P.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function Y(){}Y.prototype=P.prototype;function q(w,U,Z){this.props=w,this.context=U,this.refs=H,this.updater=Z||j}var L=q.prototype=new Y;L.constructor=q,z(L,P.prototype),L.isPureReactComponent=!0;var $=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},K=Object.prototype.hasOwnProperty;function X(w,U,Z,F,nt,ht){return Z=ht.ref,{$$typeof:n,type:w,key:U,ref:Z!==void 0?Z:null,props:ht}}function I(w,U){return X(w.type,U,void 0,void 0,void 0,w.props)}function gt(w){return typeof w=="object"&&w!==null&&w.$$typeof===n}function Rt(w){var U={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(Z){return U[Z]})}var qt=/\/+/g;function Lt(w,U){return typeof w=="object"&&w!==null&&w.key!=null?Rt(""+w.key):U.toString(36)}function Pe(){}function Re(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(Pe,Pe):(w.status="pending",w.then(function(U){w.status==="pending"&&(w.status="fulfilled",w.value=U)},function(U){w.status==="pending"&&(w.status="rejected",w.reason=U)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function kt(w,U,Z,F,nt){var ht=typeof w;(ht==="undefined"||ht==="boolean")&&(w=null);var at=!1;if(w===null)at=!0;else switch(ht){case"bigint":case"string":case"number":at=!0;break;case"object":switch(w.$$typeof){case n:case a:at=!0;break;case y:return at=w._init,kt(at(w._payload),U,Z,F,nt)}}if(at)return nt=nt(w),at=F===""?"."+Lt(w,0):F,$(nt)?(Z="",at!=null&&(Z=at.replace(qt,"$&/")+"/"),kt(nt,U,Z,"",function(se){return se})):nt!=null&&(gt(nt)&&(nt=I(nt,Z+(nt.key==null||w&&w.key===nt.key?"":(""+nt.key).replace(qt,"$&/")+"/")+at)),U.push(nt)),1;at=0;var Jt=F===""?".":F+":";if($(w))for(var xt=0;xt<w.length;xt++)F=w[xt],ht=Jt+Lt(F,xt),at+=kt(F,U,Z,ht,nt);else if(xt=S(w),typeof xt=="function")for(w=xt.call(w),xt=0;!(F=w.next()).done;)F=F.value,ht=Jt+Lt(F,xt++),at+=kt(F,U,Z,ht,nt);else if(ht==="object"){if(typeof w.then=="function")return kt(Re(w),U,Z,F,nt);throw U=String(w),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return at}function V(w,U,Z){if(w==null)return w;var F=[],nt=0;return kt(w,F,"","",function(ht){return U.call(Z,ht,nt++)}),F}function G(w){if(w._status===-1){var U=w._result;U=U(),U.then(function(Z){(w._status===0||w._status===-1)&&(w._status=1,w._result=Z)},function(Z){(w._status===0||w._status===-1)&&(w._status=2,w._result=Z)}),w._status===-1&&(w._status=0,w._result=U)}if(w._status===1)return w._result.default;throw w._result}var W=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function ot(){}return ut.Children={map:V,forEach:function(w,U,Z){V(w,function(){U.apply(this,arguments)},Z)},count:function(w){var U=0;return V(w,function(){U++}),U},toArray:function(w){return V(w,function(U){return U})||[]},only:function(w){if(!gt(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ut.Component=P,ut.Fragment=s,ut.Profiler=c,ut.PureComponent=q,ut.StrictMode=l,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,ut.__COMPILER_RUNTIME={__proto__:null,c:function(w){return k.H.useMemoCache(w)}},ut.cache=function(w){return function(){return w.apply(null,arguments)}},ut.cloneElement=function(w,U,Z){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var F=z({},w.props),nt=w.key,ht=void 0;if(U!=null)for(at in U.ref!==void 0&&(ht=void 0),U.key!==void 0&&(nt=""+U.key),U)!K.call(U,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&U.ref===void 0||(F[at]=U[at]);var at=arguments.length-2;if(at===1)F.children=Z;else if(1<at){for(var Jt=Array(at),xt=0;xt<at;xt++)Jt[xt]=arguments[xt+2];F.children=Jt}return X(w.type,nt,void 0,void 0,ht,F)},ut.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:d,_context:w},w},ut.createElement=function(w,U,Z){var F,nt={},ht=null;if(U!=null)for(F in U.key!==void 0&&(ht=""+U.key),U)K.call(U,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(nt[F]=U[F]);var at=arguments.length-2;if(at===1)nt.children=Z;else if(1<at){for(var Jt=Array(at),xt=0;xt<at;xt++)Jt[xt]=arguments[xt+2];nt.children=Jt}if(w&&w.defaultProps)for(F in at=w.defaultProps,at)nt[F]===void 0&&(nt[F]=at[F]);return X(w,ht,void 0,void 0,null,nt)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(w){return{$$typeof:p,render:w}},ut.isValidElement=gt,ut.lazy=function(w){return{$$typeof:y,_payload:{_status:-1,_result:w},_init:G}},ut.memo=function(w,U){return{$$typeof:g,type:w,compare:U===void 0?null:U}},ut.startTransition=function(w){var U=k.T,Z={};k.T=Z;try{var F=w(),nt=k.S;nt!==null&&nt(Z,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ot,W)}catch(ht){W(ht)}finally{k.T=U}},ut.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},ut.use=function(w){return k.H.use(w)},ut.useActionState=function(w,U,Z){return k.H.useActionState(w,U,Z)},ut.useCallback=function(w,U){return k.H.useCallback(w,U)},ut.useContext=function(w){return k.H.useContext(w)},ut.useDebugValue=function(){},ut.useDeferredValue=function(w,U){return k.H.useDeferredValue(w,U)},ut.useEffect=function(w,U,Z){var F=k.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(w,U)},ut.useId=function(){return k.H.useId()},ut.useImperativeHandle=function(w,U,Z){return k.H.useImperativeHandle(w,U,Z)},ut.useInsertionEffect=function(w,U){return k.H.useInsertionEffect(w,U)},ut.useLayoutEffect=function(w,U){return k.H.useLayoutEffect(w,U)},ut.useMemo=function(w,U){return k.H.useMemo(w,U)},ut.useOptimistic=function(w,U){return k.H.useOptimistic(w,U)},ut.useReducer=function(w,U,Z){return k.H.useReducer(w,U,Z)},ut.useRef=function(w){return k.H.useRef(w)},ut.useState=function(w){return k.H.useState(w)},ut.useSyncExternalStore=function(w,U,Z){return k.H.useSyncExternalStore(w,U,Z)},ut.useTransition=function(){return k.H.useTransition()},ut.version="19.1.1",ut}var w0;function Yf(){return w0||(w0=1,Vc.exports=zx()),Vc.exports}var J=Yf();const En=jx(J);var Nc={exports:{}},Lr={},_c={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function Vx(){return A0||(A0=1,function(n){function a(V,G){var W=V.length;V.push(G);t:for(;0<W;){var ot=W-1>>>1,w=V[ot];if(0<c(w,G))V[ot]=G,V[W]=w,W=ot;else break t}}function s(V){return V.length===0?null:V[0]}function l(V){if(V.length===0)return null;var G=V[0],W=V.pop();if(W!==G){V[0]=W;t:for(var ot=0,w=V.length,U=w>>>1;ot<U;){var Z=2*(ot+1)-1,F=V[Z],nt=Z+1,ht=V[nt];if(0>c(F,W))nt<w&&0>c(ht,F)?(V[ot]=ht,V[nt]=W,ot=nt):(V[ot]=F,V[Z]=W,ot=Z);else if(nt<w&&0>c(ht,W))V[ot]=ht,V[nt]=W,ot=nt;else break t}}return G}function c(V,G){var W=V.sortIndex-G.sortIndex;return W!==0?W:V.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var m=[],g=[],y=1,x=null,S=3,j=!1,z=!1,H=!1,P=!1,Y=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function $(V){for(var G=s(g);G!==null;){if(G.callback===null)l(g);else if(G.startTime<=V)l(g),G.sortIndex=G.expirationTime,a(m,G);else break;G=s(g)}}function k(V){if(H=!1,$(V),!z)if(s(m)!==null)z=!0,K||(K=!0,Lt());else{var G=s(g);G!==null&&kt(k,G.startTime-V)}}var K=!1,X=-1,I=5,gt=-1;function Rt(){return P?!0:!(n.unstable_now()-gt<I)}function qt(){if(P=!1,K){var V=n.unstable_now();gt=V;var G=!0;try{t:{z=!1,H&&(H=!1,q(X),X=-1),j=!0;var W=S;try{e:{for($(V),x=s(m);x!==null&&!(x.expirationTime>V&&Rt());){var ot=x.callback;if(typeof ot=="function"){x.callback=null,S=x.priorityLevel;var w=ot(x.expirationTime<=V);if(V=n.unstable_now(),typeof w=="function"){x.callback=w,$(V),G=!0;break e}x===s(m)&&l(m),$(V)}else l(m);x=s(m)}if(x!==null)G=!0;else{var U=s(g);U!==null&&kt(k,U.startTime-V),G=!1}}break t}finally{x=null,S=W,j=!1}G=void 0}}finally{G?Lt():K=!1}}}var Lt;if(typeof L=="function")Lt=function(){L(qt)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Re=Pe.port2;Pe.port1.onmessage=qt,Lt=function(){Re.postMessage(null)}}else Lt=function(){Y(qt,0)};function kt(V,G){X=Y(function(){V(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(V){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var W=S;S=G;try{return V()}finally{S=W}},n.unstable_requestPaint=function(){P=!0},n.unstable_runWithPriority=function(V,G){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var W=S;S=V;try{return G()}finally{S=W}},n.unstable_scheduleCallback=function(V,G,W){var ot=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ot+W:ot):W=ot,V){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=W+w,V={id:y++,callback:G,priorityLevel:V,startTime:W,expirationTime:w,sortIndex:-1},W>ot?(V.sortIndex=W,a(g,V),s(m)===null&&V===s(g)&&(H?(q(X),X=-1):H=!0,kt(k,W-ot))):(V.sortIndex=w,a(m,V),z||j||(z=!0,K||(K=!0,Lt()))),V},n.unstable_shouldYield=Rt,n.unstable_wrapCallback=function(V){var G=S;return function(){var W=S;S=G;try{return V.apply(this,arguments)}finally{S=W}}}}(Bc)),Bc}var E0;function Nx(){return E0||(E0=1,_c.exports=Vx()),_c.exports}var Uc={exports:{}},ue={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function _x(){if(D0)return ue;D0=1;var n=Yf();function a(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var l={d:{f:s,r:function(){throw Error(a(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(m,g,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:m,containerInfo:g,implementation:y}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ue.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return d(m,g,null,y)},ue.flushSync=function(m){var g=f.T,y=l.p;try{if(f.T=null,l.p=2,m)return m()}finally{f.T=g,l.p=y,l.d.f()}},ue.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(m,g))},ue.prefetchDNS=function(m){typeof m=="string"&&l.d.D(m)},ue.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,x=p(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,j=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?l.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:j}):y==="script"&&l.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:j,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ue.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=p(g.as,g.crossOrigin);l.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(m)},ue.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,x=p(y,g.crossOrigin);l.d.L(m,y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ue.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=p(g.as,g.crossOrigin);l.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(m)},ue.requestFormReset=function(m){l.d.r(m)},ue.unstable_batchedUpdates=function(m,g){return m(g)},ue.useFormState=function(m,g,y){return f.H.useFormState(m,g,y)},ue.useFormStatus=function(){return f.H.useHostTransitionStatus()},ue.version="19.1.1",ue}var M0;function Bx(){if(M0)return Uc.exports;M0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Uc.exports=_x(),Uc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function Ux(){if(C0)return Lr;C0=1;var n=Nx(),a=Yf(),s=Bx();function l(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(d(t)!==t)throw Error(l(188))}function m(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(l(188));return e!==t?null:t}for(var i=t,r=e;;){var o=i.return;if(o===null)break;var u=o.alternate;if(u===null){if(r=o.return,r!==null){i=r;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===i)return p(o),t;if(u===r)return p(o),e;u=u.sibling}throw Error(l(188))}if(i.return!==r.return)i=o,r=u;else{for(var h=!1,v=o.child;v;){if(v===i){h=!0,i=o,r=u;break}if(v===r){h=!0,r=o,i=u;break}v=v.sibling}if(!h){for(v=u.child;v;){if(v===i){h=!0,i=u,r=o;break}if(v===r){h=!0,r=u,i=o;break}v=v.sibling}if(!h)throw Error(l(189))}}if(i.alternate!==r)throw Error(l(190))}if(i.tag!==3)throw Error(l(188));return i.stateNode.current===i?t:e}function g(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=g(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),L=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),gt=Symbol.for("react.activity"),Rt=Symbol.for("react.memo_cache_sentinel"),qt=Symbol.iterator;function Lt(t){return t===null||typeof t!="object"?null:(t=qt&&t[qt]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Symbol.for("react.client.reference");function Re(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case P:return"Profiler";case H:return"StrictMode";case k:return"Suspense";case K:return"SuspenseList";case gt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case j:return"Portal";case L:return(t.displayName||"Context")+".Provider";case q:return(t._context.displayName||"Context")+".Consumer";case $:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return e=t.displayName||null,e!==null?e:Re(t.type)||"Memo";case I:e=t._payload,t=t._init;try{return Re(t(e))}catch{}}return null}var kt=Array.isArray,V=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ot=[],w=-1;function U(t){return{current:t}}function Z(t){0>w||(t.current=ot[w],ot[w]=null,w--)}function F(t,e){w++,ot[w]=t.current,t.current=e}var nt=U(null),ht=U(null),at=U(null),Jt=U(null);function xt(t,e){switch(F(at,e),F(ht,t),F(nt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Zp(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Zp(e),t=Fp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(nt),F(nt,t)}function se(){Z(nt),Z(ht),Z(at)}function ai(t){t.memoizedState!==null&&F(Jt,t);var e=nt.current,i=Fp(e,t.type);e!==i&&(F(ht,t),F(nt,i))}function on(t){ht.current===t&&(Z(nt),Z(ht)),Jt.current===t&&(Z(Jt),zr._currentValue=W)}var Oe=Object.prototype.hasOwnProperty,bo=n.unstable_scheduleCallback,xo=n.unstable_cancelCallback,l1=n.unstable_shouldYield,o1=n.unstable_requestPaint,$e=n.unstable_now,u1=n.unstable_getCurrentPriorityLevel,Cd=n.unstable_ImmediatePriority,jd=n.unstable_UserBlockingPriority,os=n.unstable_NormalPriority,c1=n.unstable_LowPriority,Rd=n.unstable_IdlePriority,f1=n.log,d1=n.unstable_setDisableYieldValue,Ha=null,xe=null;function Cn(t){if(typeof f1=="function"&&d1(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(Ha,t)}catch{}}var Se=Math.clz32?Math.clz32:p1,h1=Math.log,m1=Math.LN2;function p1(t){return t>>>=0,t===0?32:31-(h1(t)/m1|0)|0}var us=256,cs=4194304;function ri(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function fs(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var o=0,u=t.suspendedLanes,h=t.pingedLanes;t=t.warmLanes;var v=r&134217727;return v!==0?(r=v&~u,r!==0?o=ri(r):(h&=v,h!==0?o=ri(h):i||(i=v&~t,i!==0&&(o=ri(i))))):(v=r&~u,v!==0?o=ri(v):h!==0?o=ri(h):i||(i=r&~t,i!==0&&(o=ri(i)))),o===0?0:e!==0&&e!==o&&(e&u)===0&&(u=o&-o,i=e&-e,u>=i||u===32&&(i&4194048)!==0)?e:o}function Ya(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function g1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(){var t=us;return us<<=1,(us&4194048)===0&&(us=256),t}function zd(){var t=cs;return cs<<=1,(cs&62914560)===0&&(cs=4194304),t}function So(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function Ga(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function y1(t,e,i,r,o,u){var h=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var v=t.entanglements,T=t.expirationTimes,C=t.hiddenUpdates;for(i=h&~i;0<i;){var N=31-Se(i),B=1<<N;v[N]=0,T[N]=-1;var R=C[N];if(R!==null)for(C[N]=null,N=0;N<R.length;N++){var O=R[N];O!==null&&(O.lane&=-536870913)}i&=~B}r!==0&&Vd(t,r,0),u!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=u&~(h&~e))}function Vd(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Se(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&4194090}function Nd(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-Se(i),o=1<<r;o&e|t[r]&e&&(t[r]|=e),i&=~o}}function To(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function wo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function _d(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:m0(t.type))}function v1(t,e){var i=G.p;try{return G.p=t,e()}finally{G.p=i}}var jn=Math.random().toString(36).slice(2),le="__reactFiber$"+jn,me="__reactProps$"+jn,Oi="__reactContainer$"+jn,Ao="__reactEvents$"+jn,b1="__reactListeners$"+jn,x1="__reactHandles$"+jn,Bd="__reactResources$"+jn,qa="__reactMarker$"+jn;function Eo(t){delete t[le],delete t[me],delete t[Ao],delete t[b1],delete t[x1]}function zi(t){var e=t[le];if(e)return e;for(var i=t.parentNode;i;){if(e=i[Oi]||i[le]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=Ip(t);t!==null;){if(i=t[le])return i;t=Ip(t)}return e}t=i,i=t.parentNode}return null}function Vi(t){if(t=t[le]||t[Oi]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Xa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(l(33))}function Ni(t){var e=t[Bd];return e||(e=t[Bd]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function $t(t){t[qa]=!0}var Ud=new Set,Ld={};function si(t,e){_i(t,e),_i(t+"Capture",e)}function _i(t,e){for(Ld[t]=e,t=0;t<e.length;t++)Ud.add(e[t])}var S1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kd={},Hd={};function T1(t){return Oe.call(Hd,t)?!0:Oe.call(kd,t)?!1:S1.test(t)?Hd[t]=!0:(kd[t]=!0,!1)}function ds(t,e,i){if(T1(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+i)}}function hs(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+i)}}function un(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,""+r)}}var Do,Yd;function Bi(t){if(Do===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Do=e&&e[1]||"",Yd=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Do+t+Yd}var Mo=!1;function Co(t,e){if(!t||Mo)return"";Mo=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(O){var R=O}Reflect.construct(t,[],B)}else{try{B.call()}catch(O){R=O}t.call(B.prototype)}}else{try{throw Error()}catch(O){R=O}(B=t())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(O){if(O&&R&&typeof O.stack=="string")return[O.stack,R.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),h=u[0],v=u[1];if(h&&v){var T=h.split(`
`),C=v.split(`
`);for(o=r=0;r<T.length&&!T[r].includes("DetermineComponentFrameRoot");)r++;for(;o<C.length&&!C[o].includes("DetermineComponentFrameRoot");)o++;if(r===T.length||o===C.length)for(r=T.length-1,o=C.length-1;1<=r&&0<=o&&T[r]!==C[o];)o--;for(;1<=r&&0<=o;r--,o--)if(T[r]!==C[o]){if(r!==1||o!==1)do if(r--,o--,0>o||T[r]!==C[o]){var N=`
`+T[r].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=r&&0<=o);break}}}finally{Mo=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Bi(i):""}function w1(t){switch(t.tag){case 26:case 27:case 5:return Bi(t.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 15:return Co(t.type,!1);case 11:return Co(t.type.render,!1);case 1:return Co(t.type,!0);case 31:return Bi("Activity");default:return""}}function Gd(t){try{var e="";do e+=w1(t),t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function A1(t){var e=qd(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,u=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(h){r=""+h,u.call(this,h)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return r},setValue:function(h){r=""+h},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ms(t){t._valueTracker||(t._valueTracker=A1(t))}function Xd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=qd(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}function ps(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var E1=/[\n"\\]/g;function Ve(t){return t.replace(E1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function jo(t,e,i,r,o,u,h,v){t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ze(e)):t.value!==""+ze(e)&&(t.value=""+ze(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?Ro(t,h,ze(e)):i!=null?Ro(t,h,ze(i)):r!=null&&t.removeAttribute("value"),o==null&&u!=null&&(t.defaultChecked=!!u),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+ze(v):t.removeAttribute("name")}function Pd(t,e,i,r,o,u,h,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;i=i!=null?""+ze(i):"",e=e!=null?""+ze(e):i,v||e===t.value||(t.value=e),t.defaultValue=e}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=v?t.checked:!!r,t.defaultChecked=!!r,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h)}function Ro(t,e,i){e==="number"&&ps(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Ui(t,e,i,r){if(t=t.options,e){e={};for(var o=0;o<i.length;o++)e["$"+i[o]]=!0;for(i=0;i<t.length;i++)o=e.hasOwnProperty("$"+t[i].value),t[i].selected!==o&&(t[i].selected=o),o&&r&&(t[i].defaultSelected=!0)}else{for(i=""+ze(i),e=null,o=0;o<t.length;o++){if(t[o].value===i){t[o].selected=!0,r&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function Kd(t,e,i){if(e!=null&&(e=""+ze(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+ze(i):""}function Qd(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(l(92));if(kt(r)){if(1<r.length)throw Error(l(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=ze(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r)}function Li(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var D1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zd(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||D1.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function Fd(t,e,i){if(e!=null&&typeof e!="object")throw Error(l(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var o in e)r=e[o],e.hasOwnProperty(o)&&i[o]!==r&&Zd(t,o,r)}else for(var u in e)e.hasOwnProperty(u)&&Zd(t,u,e[u])}function Oo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),C1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gs(t){return C1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var zo=null;function Vo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ki=null,Hi=null;function Jd(t){var e=Vi(t);if(e&&(t=e.stateNode)){var i=t[me]||null;t:switch(t=e.stateNode,e.type){case"input":if(jo(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Ve(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var o=r[me]||null;if(!o)throw Error(l(90));jo(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&Xd(r)}break t;case"textarea":Kd(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&Ui(t,!!i.multiple,e,!1)}}}var No=!1;function $d(t,e,i){if(No)return t(e,i);No=!0;try{var r=t(e);return r}finally{if(No=!1,(ki!==null||Hi!==null)&&(el(),ki&&(e=ki,t=Hi,Hi=ki=null,Jd(e),t)))for(e=0;e<t.length;e++)Jd(t[e])}}function Pa(t,e){var i=t.stateNode;if(i===null)return null;var r=i[me]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(l(231,e,typeof i));return i}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_o=!1;if(cn)try{var Ka={};Object.defineProperty(Ka,"passive",{get:function(){_o=!0}}),window.addEventListener("test",Ka,Ka),window.removeEventListener("test",Ka,Ka)}catch{_o=!1}var Rn=null,Bo=null,ys=null;function Wd(){if(ys)return ys;var t,e=Bo,i=e.length,r,o="value"in Rn?Rn.value:Rn.textContent,u=o.length;for(t=0;t<i&&e[t]===o[t];t++);var h=i-t;for(r=1;r<=h&&e[i-r]===o[u-r];r++);return ys=o.slice(t,1<r?1-r:void 0)}function vs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bs(){return!0}function Id(){return!1}function pe(t){function e(i,r,o,u,h){this._reactName=i,this._targetInst=o,this.type=r,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(i=t[v],this[v]=i?i(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?bs:Id,this.isPropagationStopped=Id,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),e}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=pe(li),Qa=y({},li,{view:0,detail:0}),j1=pe(Qa),Uo,Lo,Za,Ss=y({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ho,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Za&&(Za&&t.type==="mousemove"?(Uo=t.screenX-Za.screenX,Lo=t.screenY-Za.screenY):Lo=Uo=0,Za=t),Uo)},movementY:function(t){return"movementY"in t?t.movementY:Lo}}),th=pe(Ss),R1=y({},Ss,{dataTransfer:0}),O1=pe(R1),z1=y({},Qa,{relatedTarget:0}),ko=pe(z1),V1=y({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),N1=pe(V1),_1=y({},li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),B1=pe(_1),U1=y({},li,{data:0}),eh=pe(U1),L1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=H1[t])?!!e[t]:!1}function Ho(){return Y1}var G1=y({},Qa,{key:function(t){if(t.key){var e=L1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ho,charCode:function(t){return t.type==="keypress"?vs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),q1=pe(G1),X1=y({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=pe(X1),P1=y({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ho}),K1=pe(P1),Q1=y({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z1=pe(Q1),F1=y({},Ss,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J1=pe(F1),$1=y({},li,{newState:0,oldState:0}),W1=pe($1),I1=[9,13,27,32],Yo=cn&&"CompositionEvent"in window,Fa=null;cn&&"documentMode"in document&&(Fa=document.documentMode);var tb=cn&&"TextEvent"in window&&!Fa,ih=cn&&(!Yo||Fa&&8<Fa&&11>=Fa),ah=" ",rh=!1;function sh(t,e){switch(t){case"keyup":return I1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yi=!1;function eb(t,e){switch(t){case"compositionend":return lh(e);case"keypress":return e.which!==32?null:(rh=!0,ah);case"textInput":return t=e.data,t===ah&&rh?null:t;default:return null}}function nb(t,e){if(Yi)return t==="compositionend"||!Yo&&sh(t,e)?(t=Wd(),ys=Bo=Rn=null,Yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ih&&e.locale!=="ko"?null:e.data;default:return null}}var ib={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ib[t.type]:e==="textarea"}function uh(t,e,i,r){ki?Hi?Hi.push(r):Hi=[r]:ki=r,e=ll(e,"onChange"),0<e.length&&(i=new xs("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var Ja=null,$a=null;function ab(t){qp(t,0)}function Ts(t){var e=Xa(t);if(Xd(e))return t}function ch(t,e){if(t==="change")return e}var fh=!1;if(cn){var Go;if(cn){var qo="oninput"in document;if(!qo){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),qo=typeof dh.oninput=="function"}Go=qo}else Go=!1;fh=Go&&(!document.documentMode||9<document.documentMode)}function hh(){Ja&&(Ja.detachEvent("onpropertychange",mh),$a=Ja=null)}function mh(t){if(t.propertyName==="value"&&Ts($a)){var e=[];uh(e,$a,t,Vo(t)),$d(ab,e)}}function rb(t,e,i){t==="focusin"?(hh(),Ja=e,$a=i,Ja.attachEvent("onpropertychange",mh)):t==="focusout"&&hh()}function sb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ts($a)}function lb(t,e){if(t==="click")return Ts(e)}function ob(t,e){if(t==="input"||t==="change")return Ts(e)}function ub(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Te=typeof Object.is=="function"?Object.is:ub;function Wa(t,e){if(Te(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var o=i[r];if(!Oe.call(e,o)||!Te(t[o],e[o]))return!1}return!0}function ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gh(t,e){var i=ph(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=ph(i)}}function yh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ps(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=ps(t.document)}return e}function Xo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var cb=cn&&"documentMode"in document&&11>=document.documentMode,Gi=null,Po=null,Ia=null,Ko=!1;function bh(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ko||Gi==null||Gi!==ps(r)||(r=Gi,"selectionStart"in r&&Xo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ia&&Wa(Ia,r)||(Ia=r,r=ll(Po,"onSelect"),0<r.length&&(e=new xs("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=Gi)))}function oi(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var qi={animationend:oi("Animation","AnimationEnd"),animationiteration:oi("Animation","AnimationIteration"),animationstart:oi("Animation","AnimationStart"),transitionrun:oi("Transition","TransitionRun"),transitionstart:oi("Transition","TransitionStart"),transitioncancel:oi("Transition","TransitionCancel"),transitionend:oi("Transition","TransitionEnd")},Qo={},xh={};cn&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function ui(t){if(Qo[t])return Qo[t];if(!qi[t])return t;var e=qi[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in xh)return Qo[t]=e[i];return t}var Sh=ui("animationend"),Th=ui("animationiteration"),wh=ui("animationstart"),fb=ui("transitionrun"),db=ui("transitionstart"),hb=ui("transitioncancel"),Ah=ui("transitionend"),Eh=new Map,Zo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zo.push("scrollEnd");function Ke(t,e){Eh.set(t,e),si(e,[t])}var Dh=new WeakMap;function Ne(t,e){if(typeof t=="object"&&t!==null){var i=Dh.get(t);return i!==void 0?i:(e={value:t,source:e,stack:Gd(e)},Dh.set(t,e),e)}return{value:t,source:e,stack:Gd(e)}}var _e=[],Xi=0,Fo=0;function ws(){for(var t=Xi,e=Fo=Xi=0;e<t;){var i=_e[e];_e[e++]=null;var r=_e[e];_e[e++]=null;var o=_e[e];_e[e++]=null;var u=_e[e];if(_e[e++]=null,r!==null&&o!==null){var h=r.pending;h===null?o.next=o:(o.next=h.next,h.next=o),r.pending=o}u!==0&&Mh(i,o,u)}}function As(t,e,i,r){_e[Xi++]=t,_e[Xi++]=e,_e[Xi++]=i,_e[Xi++]=r,Fo|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Jo(t,e,i,r){return As(t,e,i,r),Es(t)}function Pi(t,e){return As(t,null,null,e),Es(t)}function Mh(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var o=!1,u=t.return;u!==null;)u.childLanes|=i,r=u.alternate,r!==null&&(r.childLanes|=i),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(o=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,o&&e!==null&&(o=31-Se(i),t=u.hiddenUpdates,r=t[o],r===null?t[o]=[e]:r.push(e),e.lane=i|536870912),u):null}function Es(t){if(50<Ar)throw Ar=0,nc=null,Error(l(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ki={};function mb(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(t,e,i,r){return new mb(t,e,i,r)}function $o(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fn(t,e){var i=t.alternate;return i===null?(i=we(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Ch(t,e){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ds(t,e,i,r,o,u){var h=0;if(r=t,typeof t=="function")$o(t)&&(h=1);else if(typeof t=="string")h=gx(t,i,nt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case gt:return t=we(31,i,e,o),t.elementType=gt,t.lanes=u,t;case z:return ci(i.children,o,u,e);case H:h=8,o|=24;break;case P:return t=we(12,i,e,o|2),t.elementType=P,t.lanes=u,t;case k:return t=we(13,i,e,o),t.elementType=k,t.lanes=u,t;case K:return t=we(19,i,e,o),t.elementType=K,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:case L:h=10;break t;case q:h=9;break t;case $:h=11;break t;case X:h=14;break t;case I:h=16,r=null;break t}h=29,i=Error(l(130,t===null?"null":typeof t,"")),r=null}return e=we(h,i,e,o),e.elementType=t,e.type=r,e.lanes=u,e}function ci(t,e,i,r){return t=we(7,t,r,e),t.lanes=i,t}function Wo(t,e,i){return t=we(6,t,null,e),t.lanes=i,t}function Io(t,e,i){return e=we(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Qi=[],Zi=0,Ms=null,Cs=0,Be=[],Ue=0,fi=null,dn=1,hn="";function di(t,e){Qi[Zi++]=Cs,Qi[Zi++]=Ms,Ms=t,Cs=e}function jh(t,e,i){Be[Ue++]=dn,Be[Ue++]=hn,Be[Ue++]=fi,fi=t;var r=dn;t=hn;var o=32-Se(r)-1;r&=~(1<<o),i+=1;var u=32-Se(e)+o;if(30<u){var h=o-o%5;u=(r&(1<<h)-1).toString(32),r>>=h,o-=h,dn=1<<32-Se(e)+o|i<<o|r,hn=u+t}else dn=1<<u|i<<o|r,hn=t}function tu(t){t.return!==null&&(di(t,1),jh(t,1,0))}function eu(t){for(;t===Ms;)Ms=Qi[--Zi],Qi[Zi]=null,Cs=Qi[--Zi],Qi[Zi]=null;for(;t===fi;)fi=Be[--Ue],Be[Ue]=null,hn=Be[--Ue],Be[Ue]=null,dn=Be[--Ue],Be[Ue]=null}var de=null,_t=null,bt=!1,hi=null,We=!1,nu=Error(l(519));function mi(t){var e=Error(l(418,""));throw nr(Ne(e,t)),nu}function Rh(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[le]=t,e[me]=r,i){case"dialog":pt("cancel",e),pt("close",e);break;case"iframe":case"object":case"embed":pt("load",e);break;case"video":case"audio":for(i=0;i<Dr.length;i++)pt(Dr[i],e);break;case"source":pt("error",e);break;case"img":case"image":case"link":pt("error",e),pt("load",e);break;case"details":pt("toggle",e);break;case"input":pt("invalid",e),Pd(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),ms(e);break;case"select":pt("invalid",e);break;case"textarea":pt("invalid",e),Qd(e,r.value,r.defaultValue,r.children),ms(e)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||Qp(e.textContent,i)?(r.popover!=null&&(pt("beforetoggle",e),pt("toggle",e)),r.onScroll!=null&&pt("scroll",e),r.onScrollEnd!=null&&pt("scrollend",e),r.onClick!=null&&(e.onclick=ol),e=!0):e=!1,e||mi(t)}function Oh(t){for(de=t.return;de;)switch(de.tag){case 5:case 13:We=!1;return;case 27:case 3:We=!0;return;default:de=de.return}}function tr(t){if(t!==de)return!1;if(!bt)return Oh(t),bt=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||vc(t.type,t.memoizedProps)),i=!i),i&&_t&&mi(t),Oh(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(i=t.data,i==="/$"){if(e===0){_t=Ze(t.nextSibling);break t}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++;t=t.nextSibling}_t=null}}else e===27?(e=_t,Kn(t.type)?(t=Tc,Tc=null,_t=t):_t=e):_t=de?Ze(t.stateNode.nextSibling):null;return!0}function er(){_t=de=null,bt=!1}function zh(){var t=hi;return t!==null&&(ve===null?ve=t:ve.push.apply(ve,t),hi=null),t}function nr(t){hi===null?hi=[t]:hi.push(t)}var iu=U(null),pi=null,mn=null;function On(t,e,i){F(iu,e._currentValue),e._currentValue=i}function pn(t){t._currentValue=iu.current,Z(iu)}function au(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function ru(t,e,i,r){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){var h=o.child;u=u.firstContext;t:for(;u!==null;){var v=u;u=o;for(var T=0;T<e.length;T++)if(v.context===e[T]){u.lanes|=i,v=u.alternate,v!==null&&(v.lanes|=i),au(u.return,i,t),r||(h=null);break t}u=v.next}}else if(o.tag===18){if(h=o.return,h===null)throw Error(l(341));h.lanes|=i,u=h.alternate,u!==null&&(u.lanes|=i),au(h,i,t),h=null}else h=o.child;if(h!==null)h.return=o;else for(h=o;h!==null;){if(h===t){h=null;break}if(o=h.sibling,o!==null){o.return=h.return,h=o;break}h=h.return}o=h}}function ir(t,e,i,r){t=null;for(var o=e,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var h=o.alternate;if(h===null)throw Error(l(387));if(h=h.memoizedProps,h!==null){var v=o.type;Te(o.pendingProps.value,h.value)||(t!==null?t.push(v):t=[v])}}else if(o===Jt.current){if(h=o.alternate,h===null)throw Error(l(387));h.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(zr):t=[zr])}o=o.return}t!==null&&ru(e,t,i,r),e.flags|=262144}function js(t){for(t=t.firstContext;t!==null;){if(!Te(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gi(t){pi=t,mn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function oe(t){return Vh(pi,t)}function Rs(t,e){return pi===null&&gi(t),Vh(t,e)}function Vh(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},mn===null){if(t===null)throw Error(l(308));mn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else mn=mn.next=e;return i}var pb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},gb=n.unstable_scheduleCallback,yb=n.unstable_NormalPriority,Zt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function su(){return{controller:new pb,data:new Map,refCount:0}}function ar(t){t.refCount--,t.refCount===0&&gb(yb,function(){t.controller.abort()})}var rr=null,lu=0,Fi=0,Ji=null;function vb(t,e){if(rr===null){var i=rr=[];lu=0,Fi=uc(),Ji={status:"pending",value:void 0,then:function(r){i.push(r)}}}return lu++,e.then(Nh,Nh),e}function Nh(){if(--lu===0&&rr!==null){Ji!==null&&(Ji.status="fulfilled");var t=rr;rr=null,Fi=0,Ji=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function bb(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(o){i.push(o)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var o=0;o<i.length;o++)(0,i[o])(e)},function(o){for(r.status="rejected",r.reason=o,o=0;o<i.length;o++)(0,i[o])(void 0)}),r}var _h=V.S;V.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&vb(t,e),_h!==null&&_h(t,e)};var yi=U(null);function ou(){var t=yi.current;return t!==null?t:Ct.pooledCache}function Os(t,e){e===null?F(yi,yi.current):F(yi,e.pool)}function Bh(){var t=ou();return t===null?null:{parent:Zt._currentValue,pool:t}}var sr=Error(l(460)),Uh=Error(l(474)),zs=Error(l(542)),uu={then:function(){}};function Lh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Vs(){}function kh(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(Vs,Vs),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Yh(t),t;default:if(typeof e.status=="string")e.then(Vs,Vs);else{if(t=Ct,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=r}},function(r){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Yh(t),t}throw lr=e,sr}}var lr=null;function Hh(){if(lr===null)throw Error(l(459));var t=lr;return lr=null,t}function Yh(t){if(t===sr||t===zs)throw Error(l(483))}var zn=!1;function cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Vn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Tt&2)!==0){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,e=Es(t),Mh(t,null,i),e}return As(t,r,e,i),Es(t)}function or(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Nd(t,i)}}function du(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var o=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var h={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?o=u=h:u=u.next=h,i=i.next}while(i!==null);u===null?o=u=e:u=u.next=e}else o=u=e;i={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var hu=!1;function ur(){if(hu){var t=Ji;if(t!==null)throw t}}function cr(t,e,i,r){hu=!1;var o=t.updateQueue;zn=!1;var u=o.firstBaseUpdate,h=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var T=v,C=T.next;T.next=null,h===null?u=C:h.next=C,h=T;var N=t.alternate;N!==null&&(N=N.updateQueue,v=N.lastBaseUpdate,v!==h&&(v===null?N.firstBaseUpdate=C:v.next=C,N.lastBaseUpdate=T))}if(u!==null){var B=o.baseState;h=0,N=C=T=null,v=u;do{var R=v.lane&-536870913,O=R!==v.lane;if(O?(yt&R)===R:(r&R)===R){R!==0&&R===Fi&&(hu=!0),N!==null&&(N=N.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var st=t,it=v;R=e;var Dt=i;switch(it.tag){case 1:if(st=it.payload,typeof st=="function"){B=st.call(Dt,B,R);break t}B=st;break t;case 3:st.flags=st.flags&-65537|128;case 0:if(st=it.payload,R=typeof st=="function"?st.call(Dt,B,R):st,R==null)break t;B=y({},B,R);break t;case 2:zn=!0}}R=v.callback,R!==null&&(t.flags|=64,O&&(t.flags|=8192),O=o.callbacks,O===null?o.callbacks=[R]:O.push(R))}else O={lane:R,tag:v.tag,payload:v.payload,callback:v.callback,next:null},N===null?(C=N=O,T=B):N=N.next=O,h|=R;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;O=v,v=O.next,O.next=null,o.lastBaseUpdate=O,o.shared.pending=null}}while(!0);N===null&&(T=B),o.baseState=T,o.firstBaseUpdate=C,o.lastBaseUpdate=N,u===null&&(o.shared.lanes=0),Gn|=h,t.lanes=h,t.memoizedState=B}}function Gh(t,e){if(typeof t!="function")throw Error(l(191,t));t.call(e)}function qh(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Gh(i[t],e)}var $i=U(null),Ns=U(0);function Xh(t,e){t=Tn,F(Ns,t),F($i,e),Tn=t|e.baseLanes}function mu(){F(Ns,Tn),F($i,$i.current)}function pu(){Tn=Ns.current,Z($i),Z(Ns)}var _n=0,ft=null,At=null,Xt=null,_s=!1,Wi=!1,vi=!1,Bs=0,fr=0,Ii=null,xb=0;function Ht(){throw Error(l(321))}function gu(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Te(t[i],e[i]))return!1;return!0}function yu(t,e,i,r,o,u){return _n=u,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,V.H=t===null||t.memoizedState===null?Mm:Cm,vi=!1,u=i(r,o),vi=!1,Wi&&(u=Kh(e,i,r,o)),Ph(t),u}function Ph(t){V.H=Gs;var e=At!==null&&At.next!==null;if(_n=0,Xt=At=ft=null,_s=!1,fr=0,Ii=null,e)throw Error(l(300));t===null||Wt||(t=t.dependencies,t!==null&&js(t)&&(Wt=!0))}function Kh(t,e,i,r){ft=t;var o=0;do{if(Wi&&(Ii=null),fr=0,Wi=!1,25<=o)throw Error(l(301));if(o+=1,Xt=At=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}V.H=Mb,u=e(i,r)}while(Wi);return u}function Sb(){var t=V.H,e=t.useState()[0];return e=typeof e.then=="function"?dr(e):e,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(ft.flags|=1024),e}function vu(){var t=Bs!==0;return Bs=0,t}function bu(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function xu(t){if(_s){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}_s=!1}_n=0,Xt=At=ft=null,Wi=!1,fr=Bs=0,Ii=null}function ge(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?ft.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Pt(){if(At===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Xt===null?ft.memoizedState:Xt.next;if(e!==null)Xt=e,At=t;else{if(t===null)throw ft.alternate===null?Error(l(467)):Error(l(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Xt===null?ft.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dr(t){var e=fr;return fr+=1,Ii===null&&(Ii=[]),t=kh(Ii,t,e),e=ft,(Xt===null?e.memoizedState:Xt.next)===null&&(e=e.alternate,V.H=e===null||e.memoizedState===null?Mm:Cm),t}function Us(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return dr(t);if(t.$$typeof===L)return oe(t)}throw Error(l(438,String(t)))}function Tu(t){var e=null,i=ft.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=ft.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=Su(),ft.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=Rt;return e.index++,i}function gn(t,e){return typeof e=="function"?e(t):e}function Ls(t){var e=Pt();return wu(e,At,t)}function wu(t,e,i){var r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=i;var o=t.baseQueue,u=r.pending;if(u!==null){if(o!==null){var h=o.next;o.next=u.next,u.next=h}e.baseQueue=o=u,r.pending=null}if(u=t.baseState,o===null)t.memoizedState=u;else{e=o.next;var v=h=null,T=null,C=e,N=!1;do{var B=C.lane&-536870913;if(B!==C.lane?(yt&B)===B:(_n&B)===B){var R=C.revertLane;if(R===0)T!==null&&(T=T.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),B===Fi&&(N=!0);else if((_n&R)===R){C=C.next,R===Fi&&(N=!0);continue}else B={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},T===null?(v=T=B,h=u):T=T.next=B,ft.lanes|=R,Gn|=R;B=C.action,vi&&i(u,B),u=C.hasEagerState?C.eagerState:i(u,B)}else R={lane:B,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},T===null?(v=T=R,h=u):T=T.next=R,ft.lanes|=B,Gn|=B;C=C.next}while(C!==null&&C!==e);if(T===null?h=u:T.next=v,!Te(u,t.memoizedState)&&(Wt=!0,N&&(i=Ji,i!==null)))throw i;t.memoizedState=u,t.baseState=h,t.baseQueue=T,r.lastRenderedState=u}return o===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Au(t){var e=Pt(),i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=t;var r=i.dispatch,o=i.pending,u=e.memoizedState;if(o!==null){i.pending=null;var h=o=o.next;do u=t(u,h.action),h=h.next;while(h!==o);Te(u,e.memoizedState)||(Wt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),i.lastRenderedState=u}return[u,r]}function Qh(t,e,i){var r=ft,o=Pt(),u=bt;if(u){if(i===void 0)throw Error(l(407));i=i()}else i=e();var h=!Te((At||o).memoizedState,i);h&&(o.memoizedState=i,Wt=!0),o=o.queue;var v=Jh.bind(null,r,o,t);if(hr(2048,8,v,[t]),o.getSnapshot!==e||h||Xt!==null&&Xt.memoizedState.tag&1){if(r.flags|=2048,ta(9,ks(),Fh.bind(null,r,o,i,e),null),Ct===null)throw Error(l(349));u||(_n&124)!==0||Zh(r,e,i)}return i}function Zh(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=ft.updateQueue,e===null?(e=Su(),ft.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Fh(t,e,i,r){e.value=i,e.getSnapshot=r,$h(e)&&Wh(t)}function Jh(t,e,i){return i(function(){$h(e)&&Wh(t)})}function $h(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Te(t,i)}catch{return!0}}function Wh(t){var e=Pi(t,2);e!==null&&Ce(e,t,2)}function Eu(t){var e=ge();if(typeof t=="function"){var i=t;if(t=i(),vi){Cn(!0);try{i()}finally{Cn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:t},e}function Ih(t,e,i,r){return t.baseState=i,wu(t,At,typeof r=="function"?r:gn)}function Tb(t,e,i,r,o){if(Ys(t))throw Error(l(485));if(t=e.action,t!==null){var u={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};V.T!==null?i(!0):u.isTransition=!1,r(u),i=e.pending,i===null?(u.next=e.pending=u,tm(e,u)):(u.next=i.next,e.pending=i.next=u)}}function tm(t,e){var i=e.action,r=e.payload,o=t.state;if(e.isTransition){var u=V.T,h={};V.T=h;try{var v=i(o,r),T=V.S;T!==null&&T(h,v),em(t,e,v)}catch(C){Du(t,e,C)}finally{V.T=u}}else try{u=i(o,r),em(t,e,u)}catch(C){Du(t,e,C)}}function em(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){nm(t,e,r)},function(r){return Du(t,e,r)}):nm(t,e,i)}function nm(t,e,i){e.status="fulfilled",e.value=i,im(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,tm(t,i)))}function Du(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,im(e),e=e.next;while(e!==r)}t.action=null}function im(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function am(t,e){return e}function rm(t,e){if(bt){var i=Ct.formState;if(i!==null){t:{var r=ft;if(bt){if(_t){e:{for(var o=_t,u=We;o.nodeType!==8;){if(!u){o=null;break e}if(o=Ze(o.nextSibling),o===null){o=null;break e}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){_t=Ze(o.nextSibling),r=o.data==="F!";break t}}mi(r)}r=!1}r&&(e=i[0])}}return i=ge(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:e},i.queue=r,i=Am.bind(null,ft,r),r.dispatch=i,r=Eu(!1),u=Ou.bind(null,ft,!1,r.queue),r=ge(),o={state:e,dispatch:null,action:t,pending:null},r.queue=o,i=Tb.bind(null,ft,o,u,i),o.dispatch=i,r.memoizedState=t,[e,i,!1]}function sm(t){var e=Pt();return lm(e,At,t)}function lm(t,e,i){if(e=wu(t,e,am)[0],t=Ls(gn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=dr(e)}catch(h){throw h===sr?zs:h}else r=e;e=Pt();var o=e.queue,u=o.dispatch;return i!==e.memoizedState&&(ft.flags|=2048,ta(9,ks(),wb.bind(null,o,i),null)),[r,u,t]}function wb(t,e){t.action=e}function om(t){var e=Pt(),i=At;if(i!==null)return lm(e,i,t);Pt(),e=e.memoizedState,i=Pt();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function ta(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=ft.updateQueue,e===null&&(e=Su(),ft.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function ks(){return{destroy:void 0,resource:void 0}}function um(){return Pt().memoizedState}function Hs(t,e,i,r){var o=ge();r=r===void 0?null:r,ft.flags|=t,o.memoizedState=ta(1|e,ks(),i,r)}function hr(t,e,i,r){var o=Pt();r=r===void 0?null:r;var u=o.memoizedState.inst;At!==null&&r!==null&&gu(r,At.memoizedState.deps)?o.memoizedState=ta(e,u,i,r):(ft.flags|=t,o.memoizedState=ta(1|e,u,i,r))}function cm(t,e){Hs(8390656,8,t,e)}function fm(t,e){hr(2048,8,t,e)}function dm(t,e){return hr(4,2,t,e)}function hm(t,e){return hr(4,4,t,e)}function mm(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pm(t,e,i){i=i!=null?i.concat([t]):null,hr(4,4,mm.bind(null,e,t),i)}function Mu(){}function gm(t,e){var i=Pt();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&gu(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function ym(t,e){var i=Pt();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&gu(e,r[1]))return r[0];if(r=t(),vi){Cn(!0);try{t()}finally{Cn(!1)}}return i.memoizedState=[r,e],r}function Cu(t,e,i){return i===void 0||(_n&1073741824)!==0?t.memoizedState=e:(t.memoizedState=i,t=xp(),ft.lanes|=t,Gn|=t,i)}function vm(t,e,i,r){return Te(i,e)?i:$i.current!==null?(t=Cu(t,i,r),Te(t,e)||(Wt=!0),t):(_n&42)===0?(Wt=!0,t.memoizedState=i):(t=xp(),ft.lanes|=t,Gn|=t,e)}function bm(t,e,i,r,o){var u=G.p;G.p=u!==0&&8>u?u:8;var h=V.T,v={};V.T=v,Ou(t,!1,e,i);try{var T=o(),C=V.S;if(C!==null&&C(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var N=bb(T,r);mr(t,e,N,Me(t))}else mr(t,e,r,Me(t))}catch(B){mr(t,e,{then:function(){},status:"rejected",reason:B},Me())}finally{G.p=u,V.T=h}}function Ab(){}function ju(t,e,i,r){if(t.tag!==5)throw Error(l(476));var o=xm(t).queue;bm(t,o,e,W,i===null?Ab:function(){return Sm(t),i(r)})}function xm(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:W},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Sm(t){var e=xm(t).next.queue;mr(t,e,{},Me())}function Ru(){return oe(zr)}function Tm(){return Pt().memoizedState}function wm(){return Pt().memoizedState}function Eb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=Me();t=Vn(i);var r=Nn(e,t,i);r!==null&&(Ce(r,e,i),or(r,e,i)),e={cache:su()},t.payload=e;return}e=e.return}}function Db(t,e,i){var r=Me();i={lane:r,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},Ys(t)?Em(e,i):(i=Jo(t,e,i,r),i!==null&&(Ce(i,t,r),Dm(i,e,r)))}function Am(t,e,i){var r=Me();mr(t,e,i,r)}function mr(t,e,i,r){var o={lane:r,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(Ys(t))Em(e,o);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var h=e.lastRenderedState,v=u(h,i);if(o.hasEagerState=!0,o.eagerState=v,Te(v,h))return As(t,e,o,0),Ct===null&&ws(),!1}catch{}finally{}if(i=Jo(t,e,o,r),i!==null)return Ce(i,t,r),Dm(i,e,r),!0}return!1}function Ou(t,e,i,r){if(r={lane:2,revertLane:uc(),action:r,hasEagerState:!1,eagerState:null,next:null},Ys(t)){if(e)throw Error(l(479))}else e=Jo(t,i,r,2),e!==null&&Ce(e,t,2)}function Ys(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Em(t,e){Wi=_s=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Dm(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Nd(t,i)}}var Gs={readContext:oe,use:Us,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useLayoutEffect:Ht,useInsertionEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useSyncExternalStore:Ht,useId:Ht,useHostTransitionStatus:Ht,useFormState:Ht,useActionState:Ht,useOptimistic:Ht,useMemoCache:Ht,useCacheRefresh:Ht},Mm={readContext:oe,use:Us,useCallback:function(t,e){return ge().memoizedState=[t,e===void 0?null:e],t},useContext:oe,useEffect:cm,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,Hs(4194308,4,mm.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Hs(4194308,4,t,e)},useInsertionEffect:function(t,e){Hs(4,2,t,e)},useMemo:function(t,e){var i=ge();e=e===void 0?null:e;var r=t();if(vi){Cn(!0);try{t()}finally{Cn(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=ge();if(i!==void 0){var o=i(e);if(vi){Cn(!0);try{i(e)}finally{Cn(!1)}}}else o=e;return r.memoizedState=r.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},r.queue=t,t=t.dispatch=Db.bind(null,ft,t),[r.memoizedState,t]},useRef:function(t){var e=ge();return t={current:t},e.memoizedState=t},useState:function(t){t=Eu(t);var e=t.queue,i=Am.bind(null,ft,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:Mu,useDeferredValue:function(t,e){var i=ge();return Cu(i,t,e)},useTransition:function(){var t=Eu(!1);return t=bm.bind(null,ft,t.queue,!0,!1),ge().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=ft,o=ge();if(bt){if(i===void 0)throw Error(l(407));i=i()}else{if(i=e(),Ct===null)throw Error(l(349));(yt&124)!==0||Zh(r,e,i)}o.memoizedState=i;var u={value:i,getSnapshot:e};return o.queue=u,cm(Jh.bind(null,r,u,t),[t]),r.flags|=2048,ta(9,ks(),Fh.bind(null,r,u,i,e),null),i},useId:function(){var t=ge(),e=Ct.identifierPrefix;if(bt){var i=hn,r=dn;i=(r&~(1<<32-Se(r)-1)).toString(32)+i,e="«"+e+"R"+i,i=Bs++,0<i&&(e+="H"+i.toString(32)),e+="»"}else i=xb++,e="«"+e+"r"+i.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Ru,useFormState:rm,useActionState:rm,useOptimistic:function(t){var e=ge();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Ou.bind(null,ft,!0,i),i.dispatch=e,[t,e]},useMemoCache:Tu,useCacheRefresh:function(){return ge().memoizedState=Eb.bind(null,ft)}},Cm={readContext:oe,use:Us,useCallback:gm,useContext:oe,useEffect:fm,useImperativeHandle:pm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:ym,useReducer:Ls,useRef:um,useState:function(){return Ls(gn)},useDebugValue:Mu,useDeferredValue:function(t,e){var i=Pt();return vm(i,At.memoizedState,t,e)},useTransition:function(){var t=Ls(gn)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:dr(t),e]},useSyncExternalStore:Qh,useId:Tm,useHostTransitionStatus:Ru,useFormState:sm,useActionState:sm,useOptimistic:function(t,e){var i=Pt();return Ih(i,At,t,e)},useMemoCache:Tu,useCacheRefresh:wm},Mb={readContext:oe,use:Us,useCallback:gm,useContext:oe,useEffect:fm,useImperativeHandle:pm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:ym,useReducer:Au,useRef:um,useState:function(){return Au(gn)},useDebugValue:Mu,useDeferredValue:function(t,e){var i=Pt();return At===null?Cu(i,t,e):vm(i,At.memoizedState,t,e)},useTransition:function(){var t=Au(gn)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:dr(t),e]},useSyncExternalStore:Qh,useId:Tm,useHostTransitionStatus:Ru,useFormState:om,useActionState:om,useOptimistic:function(t,e){var i=Pt();return At!==null?Ih(i,At,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:wm},ea=null,pr=0;function qs(t){var e=pr;return pr+=1,ea===null&&(ea=[]),kh(ea,t,e)}function gr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Xs(t,e){throw e.$$typeof===x?Error(l(525)):(t=Object.prototype.toString.call(e),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function jm(t){var e=t._init;return e(t._payload)}function Rm(t){function e(D,A){if(t){var M=D.deletions;M===null?(D.deletions=[A],D.flags|=16):M.push(A)}}function i(D,A){if(!t)return null;for(;A!==null;)e(D,A),A=A.sibling;return null}function r(D){for(var A=new Map;D!==null;)D.key!==null?A.set(D.key,D):A.set(D.index,D),D=D.sibling;return A}function o(D,A){return D=fn(D,A),D.index=0,D.sibling=null,D}function u(D,A,M){return D.index=M,t?(M=D.alternate,M!==null?(M=M.index,M<A?(D.flags|=67108866,A):M):(D.flags|=67108866,A)):(D.flags|=1048576,A)}function h(D){return t&&D.alternate===null&&(D.flags|=67108866),D}function v(D,A,M,_){return A===null||A.tag!==6?(A=Wo(M,D.mode,_),A.return=D,A):(A=o(A,M),A.return=D,A)}function T(D,A,M,_){var tt=M.type;return tt===z?N(D,A,M.props.children,_,M.key):A!==null&&(A.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===I&&jm(tt)===A.type)?(A=o(A,M.props),gr(A,M),A.return=D,A):(A=Ds(M.type,M.key,M.props,null,D.mode,_),gr(A,M),A.return=D,A)}function C(D,A,M,_){return A===null||A.tag!==4||A.stateNode.containerInfo!==M.containerInfo||A.stateNode.implementation!==M.implementation?(A=Io(M,D.mode,_),A.return=D,A):(A=o(A,M.children||[]),A.return=D,A)}function N(D,A,M,_,tt){return A===null||A.tag!==7?(A=ci(M,D.mode,_,tt),A.return=D,A):(A=o(A,M),A.return=D,A)}function B(D,A,M){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Wo(""+A,D.mode,M),A.return=D,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case S:return M=Ds(A.type,A.key,A.props,null,D.mode,M),gr(M,A),M.return=D,M;case j:return A=Io(A,D.mode,M),A.return=D,A;case I:var _=A._init;return A=_(A._payload),B(D,A,M)}if(kt(A)||Lt(A))return A=ci(A,D.mode,M,null),A.return=D,A;if(typeof A.then=="function")return B(D,qs(A),M);if(A.$$typeof===L)return B(D,Rs(D,A),M);Xs(D,A)}return null}function R(D,A,M,_){var tt=A!==null?A.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return tt!==null?null:v(D,A,""+M,_);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return M.key===tt?T(D,A,M,_):null;case j:return M.key===tt?C(D,A,M,_):null;case I:return tt=M._init,M=tt(M._payload),R(D,A,M,_)}if(kt(M)||Lt(M))return tt!==null?null:N(D,A,M,_,null);if(typeof M.then=="function")return R(D,A,qs(M),_);if(M.$$typeof===L)return R(D,A,Rs(D,M),_);Xs(D,M)}return null}function O(D,A,M,_,tt){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return D=D.get(M)||null,v(A,D,""+_,tt);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case S:return D=D.get(_.key===null?M:_.key)||null,T(A,D,_,tt);case j:return D=D.get(_.key===null?M:_.key)||null,C(A,D,_,tt);case I:var dt=_._init;return _=dt(_._payload),O(D,A,M,_,tt)}if(kt(_)||Lt(_))return D=D.get(M)||null,N(A,D,_,tt,null);if(typeof _.then=="function")return O(D,A,M,qs(_),tt);if(_.$$typeof===L)return O(D,A,M,Rs(A,_),tt);Xs(A,_)}return null}function st(D,A,M,_){for(var tt=null,dt=null,et=A,rt=A=0,te=null;et!==null&&rt<M.length;rt++){et.index>rt?(te=et,et=null):te=et.sibling;var vt=R(D,et,M[rt],_);if(vt===null){et===null&&(et=te);break}t&&et&&vt.alternate===null&&e(D,et),A=u(vt,A,rt),dt===null?tt=vt:dt.sibling=vt,dt=vt,et=te}if(rt===M.length)return i(D,et),bt&&di(D,rt),tt;if(et===null){for(;rt<M.length;rt++)et=B(D,M[rt],_),et!==null&&(A=u(et,A,rt),dt===null?tt=et:dt.sibling=et,dt=et);return bt&&di(D,rt),tt}for(et=r(et);rt<M.length;rt++)te=O(et,D,rt,M[rt],_),te!==null&&(t&&te.alternate!==null&&et.delete(te.key===null?rt:te.key),A=u(te,A,rt),dt===null?tt=te:dt.sibling=te,dt=te);return t&&et.forEach(function($n){return e(D,$n)}),bt&&di(D,rt),tt}function it(D,A,M,_){if(M==null)throw Error(l(151));for(var tt=null,dt=null,et=A,rt=A=0,te=null,vt=M.next();et!==null&&!vt.done;rt++,vt=M.next()){et.index>rt?(te=et,et=null):te=et.sibling;var $n=R(D,et,vt.value,_);if($n===null){et===null&&(et=te);break}t&&et&&$n.alternate===null&&e(D,et),A=u($n,A,rt),dt===null?tt=$n:dt.sibling=$n,dt=$n,et=te}if(vt.done)return i(D,et),bt&&di(D,rt),tt;if(et===null){for(;!vt.done;rt++,vt=M.next())vt=B(D,vt.value,_),vt!==null&&(A=u(vt,A,rt),dt===null?tt=vt:dt.sibling=vt,dt=vt);return bt&&di(D,rt),tt}for(et=r(et);!vt.done;rt++,vt=M.next())vt=O(et,D,rt,vt.value,_),vt!==null&&(t&&vt.alternate!==null&&et.delete(vt.key===null?rt:vt.key),A=u(vt,A,rt),dt===null?tt=vt:dt.sibling=vt,dt=vt);return t&&et.forEach(function(Cx){return e(D,Cx)}),bt&&di(D,rt),tt}function Dt(D,A,M,_){if(typeof M=="object"&&M!==null&&M.type===z&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case S:t:{for(var tt=M.key;A!==null;){if(A.key===tt){if(tt=M.type,tt===z){if(A.tag===7){i(D,A.sibling),_=o(A,M.props.children),_.return=D,D=_;break t}}else if(A.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===I&&jm(tt)===A.type){i(D,A.sibling),_=o(A,M.props),gr(_,M),_.return=D,D=_;break t}i(D,A);break}else e(D,A);A=A.sibling}M.type===z?(_=ci(M.props.children,D.mode,_,M.key),_.return=D,D=_):(_=Ds(M.type,M.key,M.props,null,D.mode,_),gr(_,M),_.return=D,D=_)}return h(D);case j:t:{for(tt=M.key;A!==null;){if(A.key===tt)if(A.tag===4&&A.stateNode.containerInfo===M.containerInfo&&A.stateNode.implementation===M.implementation){i(D,A.sibling),_=o(A,M.children||[]),_.return=D,D=_;break t}else{i(D,A);break}else e(D,A);A=A.sibling}_=Io(M,D.mode,_),_.return=D,D=_}return h(D);case I:return tt=M._init,M=tt(M._payload),Dt(D,A,M,_)}if(kt(M))return st(D,A,M,_);if(Lt(M)){if(tt=Lt(M),typeof tt!="function")throw Error(l(150));return M=tt.call(M),it(D,A,M,_)}if(typeof M.then=="function")return Dt(D,A,qs(M),_);if(M.$$typeof===L)return Dt(D,A,Rs(D,M),_);Xs(D,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,A!==null&&A.tag===6?(i(D,A.sibling),_=o(A,M),_.return=D,D=_):(i(D,A),_=Wo(M,D.mode,_),_.return=D,D=_),h(D)):i(D,A)}return function(D,A,M,_){try{pr=0;var tt=Dt(D,A,M,_);return ea=null,tt}catch(et){if(et===sr||et===zs)throw et;var dt=we(29,et,null,D.mode);return dt.lanes=_,dt.return=D,dt}finally{}}}var na=Rm(!0),Om=Rm(!1),Le=U(null),Ie=null;function Bn(t){var e=t.alternate;F(Ft,Ft.current&1),F(Le,t),Ie===null&&(e===null||$i.current!==null||e.memoizedState!==null)&&(Ie=t)}function zm(t){if(t.tag===22){if(F(Ft,Ft.current),F(Le,t),Ie===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ie=t)}}else Un()}function Un(){F(Ft,Ft.current),F(Le,Le.current)}function yn(t){Z(Le),Ie===t&&(Ie=null),Z(Ft)}var Ft=U(0);function Ps(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||Sc(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function zu(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:y({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Vu={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=Me(),o=Vn(r);o.payload=e,i!=null&&(o.callback=i),e=Nn(t,o,r),e!==null&&(Ce(e,t,r),or(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=Me(),o=Vn(r);o.tag=1,o.payload=e,i!=null&&(o.callback=i),e=Nn(t,o,r),e!==null&&(Ce(e,t,r),or(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=Me(),r=Vn(i);r.tag=2,e!=null&&(r.callback=e),e=Nn(t,r,i),e!==null&&(Ce(e,t,i),or(e,t,i))}};function Vm(t,e,i,r,o,u,h){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,h):e.prototype&&e.prototype.isPureReactComponent?!Wa(i,r)||!Wa(o,u):!0}function Nm(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&Vu.enqueueReplaceState(e,e.state,null)}function bi(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=y({},i));for(var o in t)i[o]===void 0&&(i[o]=t[o])}return i}var Ks=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _m(t){Ks(t)}function Bm(t){console.error(t)}function Um(t){Ks(t)}function Qs(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Lm(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Nu(t,e,i){return i=Vn(i),i.tag=3,i.payload={element:null},i.callback=function(){Qs(t,e)},i}function km(t){return t=Vn(t),t.tag=3,t}function Hm(t,e,i,r){var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var u=r.value;t.payload=function(){return o(u)},t.callback=function(){Lm(e,i,r)}}var h=i.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){Lm(e,i,r),typeof o!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})})}function Cb(t,e,i,r,o){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&ir(e,i,o,!0),i=Le.current,i!==null){switch(i.tag){case 13:return Ie===null?ac():i.alternate===null&&Bt===0&&(Bt=3),i.flags&=-257,i.flags|=65536,i.lanes=o,r===uu?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),sc(t,r,o)),!1;case 22:return i.flags|=65536,r===uu?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),sc(t,r,o)),!1}throw Error(l(435,i.tag))}return sc(t,r,o),ac(),!1}if(bt)return e=Le.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=o,r!==nu&&(t=Error(l(422),{cause:r}),nr(Ne(t,i)))):(r!==nu&&(e=Error(l(423),{cause:r}),nr(Ne(e,i))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,r=Ne(r,i),o=Nu(t.stateNode,r,o),du(t,o),Bt!==4&&(Bt=2)),!1;var u=Error(l(520),{cause:r});if(u=Ne(u,i),wr===null?wr=[u]:wr.push(u),Bt!==4&&(Bt=2),e===null)return!0;r=Ne(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=o&-o,i.lanes|=t,t=Nu(i.stateNode,r,t),du(i,t),!1;case 1:if(e=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(qn===null||!qn.has(u))))return i.flags|=65536,o&=-o,i.lanes|=o,o=km(o),Hm(o,t,i,r),du(i,o),!1}i=i.return}while(i!==null);return!1}var Ym=Error(l(461)),Wt=!1;function ne(t,e,i,r){e.child=t===null?Om(e,null,i,r):na(e,t.child,i,r)}function Gm(t,e,i,r,o){i=i.render;var u=e.ref;if("ref"in r){var h={};for(var v in r)v!=="ref"&&(h[v]=r[v])}else h=r;return gi(e),r=yu(t,e,i,h,u,o),v=vu(),t!==null&&!Wt?(bu(t,e,o),vn(t,e,o)):(bt&&v&&tu(e),e.flags|=1,ne(t,e,r,o),e.child)}function qm(t,e,i,r,o){if(t===null){var u=i.type;return typeof u=="function"&&!$o(u)&&u.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=u,Xm(t,e,u,r,o)):(t=Ds(i.type,null,r,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Gu(t,o)){var h=u.memoizedProps;if(i=i.compare,i=i!==null?i:Wa,i(h,r)&&t.ref===e.ref)return vn(t,e,o)}return e.flags|=1,t=fn(u,r),t.ref=e.ref,t.return=e,e.child=t}function Xm(t,e,i,r,o){if(t!==null){var u=t.memoizedProps;if(Wa(u,r)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=r=u,Gu(t,o))(t.flags&131072)!==0&&(Wt=!0);else return e.lanes=t.lanes,vn(t,e,o)}return _u(t,e,i,r,o)}function Pm(t,e,i){var r=e.pendingProps,o=r.children,u=t!==null?t.memoizedState:null;if(r.mode==="hidden"){if((e.flags&128)!==0){if(r=u!==null?u.baseLanes|i:i,t!==null){for(o=e.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;e.childLanes=u&~r}else e.childLanes=0,e.child=null;return Km(t,e,r,i)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Os(e,u!==null?u.cachePool:null),u!==null?Xh(e,u):mu(),zm(e);else return e.lanes=e.childLanes=536870912,Km(t,e,u!==null?u.baseLanes|i:i,i)}else u!==null?(Os(e,u.cachePool),Xh(e,u),Un(),e.memoizedState=null):(t!==null&&Os(e,null),mu(),Un());return ne(t,e,o,i),e.child}function Km(t,e,i,r){var o=ou();return o=o===null?null:{parent:Zt._currentValue,pool:o},e.memoizedState={baseLanes:i,cachePool:o},t!==null&&Os(e,null),mu(),zm(e),t!==null&&ir(t,e,r,!0),null}function Zs(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(l(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function _u(t,e,i,r,o){return gi(e),i=yu(t,e,i,r,void 0,o),r=vu(),t!==null&&!Wt?(bu(t,e,o),vn(t,e,o)):(bt&&r&&tu(e),e.flags|=1,ne(t,e,i,o),e.child)}function Qm(t,e,i,r,o,u){return gi(e),e.updateQueue=null,i=Kh(e,r,i,o),Ph(t),r=vu(),t!==null&&!Wt?(bu(t,e,u),vn(t,e,u)):(bt&&r&&tu(e),e.flags|=1,ne(t,e,i,u),e.child)}function Zm(t,e,i,r,o){if(gi(e),e.stateNode===null){var u=Ki,h=i.contextType;typeof h=="object"&&h!==null&&(u=oe(h)),u=new i(r,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Vu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=r,u.state=e.memoizedState,u.refs={},cu(e),h=i.contextType,u.context=typeof h=="object"&&h!==null?oe(h):Ki,u.state=e.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(zu(e,i,h,r),u.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&Vu.enqueueReplaceState(u,u.state,null),cr(e,r,u,o),ur(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){u=e.stateNode;var v=e.memoizedProps,T=bi(i,v);u.props=T;var C=u.context,N=i.contextType;h=Ki,typeof N=="object"&&N!==null&&(h=oe(N));var B=i.getDerivedStateFromProps;N=typeof B=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||C!==h)&&Nm(e,u,r,h),zn=!1;var R=e.memoizedState;u.state=R,cr(e,r,u,o),ur(),C=e.memoizedState,v||R!==C||zn?(typeof B=="function"&&(zu(e,i,B,r),C=e.memoizedState),(T=zn||Vm(e,i,T,r,R,C,h))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=C),u.props=r,u.state=C,u.context=h,r=T):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,fu(t,e),h=e.memoizedProps,N=bi(i,h),u.props=N,B=e.pendingProps,R=u.context,C=i.contextType,T=Ki,typeof C=="object"&&C!==null&&(T=oe(C)),v=i.getDerivedStateFromProps,(C=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==B||R!==T)&&Nm(e,u,r,T),zn=!1,R=e.memoizedState,u.state=R,cr(e,r,u,o),ur();var O=e.memoizedState;h!==B||R!==O||zn||t!==null&&t.dependencies!==null&&js(t.dependencies)?(typeof v=="function"&&(zu(e,i,v,r),O=e.memoizedState),(N=zn||Vm(e,i,N,r,R,O,T)||t!==null&&t.dependencies!==null&&js(t.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,O,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,O,T)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=O),u.props=r,u.state=O,u.context=T,r=N):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),r=!1)}return u=r,Zs(t,e),r=(e.flags&128)!==0,u||r?(u=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&r?(e.child=na(e,t.child,null,o),e.child=na(e,null,i,o)):ne(t,e,i,o),e.memoizedState=u.state,t=e.child):t=vn(t,e,o),t}function Fm(t,e,i,r){return er(),e.flags|=256,ne(t,e,i,r),e.child}var Bu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uu(t){return{baseLanes:t,cachePool:Bh()}}function Lu(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=ke),t}function Jm(t,e,i){var r=e.pendingProps,o=!1,u=(e.flags&128)!==0,h;if((h=u)||(h=t!==null&&t.memoizedState===null?!1:(Ft.current&2)!==0),h&&(o=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){if(bt){if(o?Bn(e):Un(),bt){var v=_t,T;if(T=v){t:{for(T=v,v=We;T.nodeType!==8;){if(!v){v=null;break t}if(T=Ze(T.nextSibling),T===null){v=null;break t}}v=T}v!==null?(e.memoizedState={dehydrated:v,treeContext:fi!==null?{id:dn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},T=we(18,null,null,0),T.stateNode=v,T.return=e,e.child=T,de=e,_t=null,T=!0):T=!1}T||mi(e)}if(v=e.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return Sc(v)?e.lanes=32:e.lanes=536870912,null;yn(e)}return v=r.children,r=r.fallback,o?(Un(),o=e.mode,v=Fs({mode:"hidden",children:v},o),r=ci(r,o,i,null),v.return=e,r.return=e,v.sibling=r,e.child=v,o=e.child,o.memoizedState=Uu(i),o.childLanes=Lu(t,h,i),e.memoizedState=Bu,r):(Bn(e),ku(e,v))}if(T=t.memoizedState,T!==null&&(v=T.dehydrated,v!==null)){if(u)e.flags&256?(Bn(e),e.flags&=-257,e=Hu(t,e,i)):e.memoizedState!==null?(Un(),e.child=t.child,e.flags|=128,e=null):(Un(),o=r.fallback,v=e.mode,r=Fs({mode:"visible",children:r.children},v),o=ci(o,v,i,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,na(e,t.child,null,i),r=e.child,r.memoizedState=Uu(i),r.childLanes=Lu(t,h,i),e.memoizedState=Bu,e=o);else if(Bn(e),Sc(v)){if(h=v.nextSibling&&v.nextSibling.dataset,h)var C=h.dgst;h=C,r=Error(l(419)),r.stack="",r.digest=h,nr({value:r,source:null,stack:null}),e=Hu(t,e,i)}else if(Wt||ir(t,e,i,!1),h=(i&t.childLanes)!==0,Wt||h){if(h=Ct,h!==null&&(r=i&-i,r=(r&42)!==0?1:To(r),r=(r&(h.suspendedLanes|i))!==0?0:r,r!==0&&r!==T.retryLane))throw T.retryLane=r,Pi(t,r),Ce(h,t,r),Ym;v.data==="$?"||ac(),e=Hu(t,e,i)}else v.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=T.treeContext,_t=Ze(v.nextSibling),de=e,bt=!0,hi=null,We=!1,t!==null&&(Be[Ue++]=dn,Be[Ue++]=hn,Be[Ue++]=fi,dn=t.id,hn=t.overflow,fi=e),e=ku(e,r.children),e.flags|=4096);return e}return o?(Un(),o=r.fallback,v=e.mode,T=t.child,C=T.sibling,r=fn(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&65011712,C!==null?o=fn(C,o):(o=ci(o,v,i,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,v=t.child.memoizedState,v===null?v=Uu(i):(T=v.cachePool,T!==null?(C=Zt._currentValue,T=T.parent!==C?{parent:C,pool:C}:T):T=Bh(),v={baseLanes:v.baseLanes|i,cachePool:T}),o.memoizedState=v,o.childLanes=Lu(t,h,i),e.memoizedState=Bu,r):(Bn(e),i=t.child,t=i.sibling,i=fn(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=i,e.memoizedState=null,i)}function ku(t,e){return e=Fs({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Fs(t,e){return t=we(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Hu(t,e,i){return na(e,t.child,null,i),t=ku(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $m(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),au(t.return,e,i)}function Yu(t,e,i,r,o){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:o}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=i,u.tailMode=o)}function Wm(t,e,i){var r=e.pendingProps,o=r.revealOrder,u=r.tail;if(ne(t,e,r.children,i),r=Ft.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$m(t,i,e);else if(t.tag===19)$m(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(F(Ft,r),o){case"forwards":for(i=e.child,o=null;i!==null;)t=i.alternate,t!==null&&Ps(t)===null&&(o=i),i=i.sibling;i=o,i===null?(o=e.child,e.child=null):(o=i.sibling,i.sibling=null),Yu(e,!1,o,i,u);break;case"backwards":for(i=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&Ps(t)===null){e.child=o;break}t=o.sibling,o.sibling=i,i=o,o=t}Yu(e,!0,i,null,u);break;case"together":Yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vn(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Gn|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(ir(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(l(153));if(e.child!==null){for(t=e.child,i=fn(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=fn(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function Gu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&js(t)))}function jb(t,e,i){switch(e.tag){case 3:xt(e,e.stateNode.containerInfo),On(e,Zt,t.memoizedState.cache),er();break;case 27:case 5:ai(e);break;case 4:xt(e,e.stateNode.containerInfo);break;case 10:On(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(Bn(e),e.flags|=128,null):(i&e.child.childLanes)!==0?Jm(t,e,i):(Bn(e),t=vn(t,e,i),t!==null?t.sibling:null);Bn(e);break;case 19:var o=(t.flags&128)!==0;if(r=(i&e.childLanes)!==0,r||(ir(t,e,i,!1),r=(i&e.childLanes)!==0),o){if(r)return Wm(t,e,i);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),F(Ft,Ft.current),r)break;return null;case 22:case 23:return e.lanes=0,Pm(t,e,i);case 24:On(e,Zt,t.memoizedState.cache)}return vn(t,e,i)}function Im(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)Wt=!0;else{if(!Gu(t,i)&&(e.flags&128)===0)return Wt=!1,jb(t,e,i);Wt=(t.flags&131072)!==0}else Wt=!1,bt&&(e.flags&1048576)!==0&&jh(e,Cs,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,o=r._init;if(r=o(r._payload),e.type=r,typeof r=="function")$o(r)?(t=bi(r,t),e.tag=1,e=Zm(null,e,r,t,i)):(e.tag=0,e=_u(null,e,r,t,i));else{if(r!=null){if(o=r.$$typeof,o===$){e.tag=11,e=Gm(null,e,r,t,i);break t}else if(o===X){e.tag=14,e=qm(null,e,r,t,i);break t}}throw e=Re(r)||r,Error(l(306,e,""))}}return e;case 0:return _u(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,o=bi(r,e.pendingProps),Zm(t,e,r,o,i);case 3:t:{if(xt(e,e.stateNode.containerInfo),t===null)throw Error(l(387));r=e.pendingProps;var u=e.memoizedState;o=u.element,fu(t,e),cr(e,r,null,i);var h=e.memoizedState;if(r=h.cache,On(e,Zt,r),r!==u.cache&&ru(e,[Zt],i,!0),ur(),r=h.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Fm(t,e,r,i);break t}else if(r!==o){o=Ne(Error(l(424)),e),nr(o),e=Fm(t,e,r,i);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(_t=Ze(t.firstChild),de=e,bt=!0,hi=null,We=!0,i=Om(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(er(),r===o){e=vn(t,e,i);break t}ne(t,e,r,i)}e=e.child}return e;case 26:return Zs(t,e),t===null?(i=i0(e.type,null,e.pendingProps,null))?e.memoizedState=i:bt||(i=e.type,t=e.pendingProps,r=ul(at.current).createElement(i),r[le]=e,r[me]=t,ae(r,i,t),$t(r),e.stateNode=r):e.memoizedState=i0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ai(e),t===null&&bt&&(r=e.stateNode=t0(e.type,e.pendingProps,at.current),de=e,We=!0,o=_t,Kn(e.type)?(Tc=o,_t=Ze(r.firstChild)):_t=o),ne(t,e,e.pendingProps.children,i),Zs(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&bt&&((o=r=_t)&&(r=ix(r,e.type,e.pendingProps,We),r!==null?(e.stateNode=r,de=e,_t=Ze(r.firstChild),We=!1,o=!0):o=!1),o||mi(e)),ai(e),o=e.type,u=e.pendingProps,h=t!==null?t.memoizedProps:null,r=u.children,vc(o,u)?r=null:h!==null&&vc(o,h)&&(e.flags|=32),e.memoizedState!==null&&(o=yu(t,e,Sb,null,null,i),zr._currentValue=o),Zs(t,e),ne(t,e,r,i),e.child;case 6:return t===null&&bt&&((t=i=_t)&&(i=ax(i,e.pendingProps,We),i!==null?(e.stateNode=i,de=e,_t=null,t=!0):t=!1),t||mi(e)),null;case 13:return Jm(t,e,i);case 4:return xt(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=na(e,null,r,i):ne(t,e,r,i),e.child;case 11:return Gm(t,e,e.type,e.pendingProps,i);case 7:return ne(t,e,e.pendingProps,i),e.child;case 8:return ne(t,e,e.pendingProps.children,i),e.child;case 12:return ne(t,e,e.pendingProps.children,i),e.child;case 10:return r=e.pendingProps,On(e,e.type,r.value),ne(t,e,r.children,i),e.child;case 9:return o=e.type._context,r=e.pendingProps.children,gi(e),o=oe(o),r=r(o),e.flags|=1,ne(t,e,r,i),e.child;case 14:return qm(t,e,e.type,e.pendingProps,i);case 15:return Xm(t,e,e.type,e.pendingProps,i);case 19:return Wm(t,e,i);case 31:return r=e.pendingProps,i=e.mode,r={mode:r.mode,children:r.children},t===null?(i=Fs(r,i),i.ref=e.ref,e.child=i,i.return=e,e=i):(i=fn(t.child,r),i.ref=e.ref,e.child=i,i.return=e,e=i),e;case 22:return Pm(t,e,i);case 24:return gi(e),r=oe(Zt),t===null?(o=ou(),o===null&&(o=Ct,u=su(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=i),o=u),e.memoizedState={parent:r,cache:o},cu(e),On(e,Zt,o)):((t.lanes&i)!==0&&(fu(t,e),cr(e,null,null,i),ur()),o=t.memoizedState,u=e.memoizedState,o.parent!==r?(o={parent:r,cache:r},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),On(e,Zt,r)):(r=u.cache,On(e,Zt,r),r!==o.cache&&ru(e,[Zt],i,!0))),ne(t,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}function bn(t){t.flags|=4}function tp(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!o0(e)){if(e=Le.current,e!==null&&((yt&4194048)===yt?Ie!==null:(yt&62914560)!==yt&&(yt&536870912)===0||e!==Ie))throw lr=uu,Uh;t.flags|=8192}}function Js(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?zd():536870912,t.lanes|=e,sa|=e)}function yr(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var o=t.child;o!==null;)i|=o.lanes|o.childLanes,r|=o.subtreeFlags&65011712,r|=o.flags&65011712,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)i|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function Rb(t,e,i){var r=e.pendingProps;switch(eu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return Vt(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),pn(Zt),se(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(tr(e)?bn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,zh())),Vt(e),null;case 26:return i=e.memoizedState,t===null?(bn(e),i!==null?(Vt(e),tp(e,i)):(Vt(e),e.flags&=-16777217)):i?i!==t.memoizedState?(bn(e),Vt(e),tp(e,i)):(Vt(e),e.flags&=-16777217):(t.memoizedProps!==r&&bn(e),Vt(e),e.flags&=-16777217),null;case 27:on(e),i=at.current;var o=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&bn(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return Vt(e),null}t=nt.current,tr(e)?Rh(e):(t=t0(o,r,i),e.stateNode=t,bn(e))}return Vt(e),null;case 5:if(on(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&bn(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return Vt(e),null}if(t=nt.current,tr(e))Rh(e);else{switch(o=ul(at.current),t){case 1:t=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:t=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":t=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":t=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?o.createElement(i,{is:r.is}):o.createElement(i)}}t[le]=e,t[me]=r;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=t;t:switch(ae(t,i,r),i){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&bn(e)}}return Vt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&bn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(l(166));if(t=at.current,tr(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,o=de,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}t[le]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||Qp(t.nodeValue,i)),t||mi(e)}else t=ul(t).createTextNode(r),t[le]=e,e.stateNode=t}return Vt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=tr(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(l(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[le]=e}else er(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Vt(e),o=!1}else o=zh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),o=!0;if(!o)return e.flags&256?(yn(e),e):(yn(e),null)}if(yn(e),(e.flags&128)!==0)return e.lanes=i,e;if(i=r!==null,t=t!==null&&t.memoizedState!==null,i){r=e.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool);var u=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048)}return i!==t&&i&&(e.child.flags|=8192),Js(e,e.updateQueue),Vt(e),null;case 4:return se(),t===null&&hc(e.stateNode.containerInfo),Vt(e),null;case 10:return pn(e.type),Vt(e),null;case 19:if(Z(Ft),o=e.memoizedState,o===null)return Vt(e),null;if(r=(e.flags&128)!==0,u=o.rendering,u===null)if(r)yr(o,!1);else{if(Bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Ps(t),u!==null){for(e.flags|=128,yr(o,!1),t=u.updateQueue,e.updateQueue=t,Js(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)Ch(i,t),i=i.sibling;return F(Ft,Ft.current&1|2),e.child}t=t.sibling}o.tail!==null&&$e()>Is&&(e.flags|=128,r=!0,yr(o,!1),e.lanes=4194304)}else{if(!r)if(t=Ps(u),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Js(e,t),yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!bt)return Vt(e),null}else 2*$e()-o.renderingStartTime>Is&&i!==536870912&&(e.flags|=128,r=!0,yr(o,!1),e.lanes=4194304);o.isBackwards?(u.sibling=e.child,e.child=u):(t=o.last,t!==null?t.sibling=u:e.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=$e(),e.sibling=null,t=Ft.current,F(Ft,r?t&1|2:t&1),e):(Vt(e),null);case 22:case 23:return yn(e),pu(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),i=e.updateQueue,i!==null&&Js(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&Z(yi),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),pn(Zt),Vt(e),null;case 25:return null;case 30:return null}throw Error(l(156,e.tag))}function Ob(t,e){switch(eu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pn(Zt),se(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return on(e),null;case 13:if(yn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(l(340));er()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(Ft),null;case 4:return se(),null;case 10:return pn(e.type),null;case 22:case 23:return yn(e),pu(),t!==null&&Z(yi),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return pn(Zt),null;case 25:return null;default:return null}}function ep(t,e){switch(eu(e),e.tag){case 3:pn(Zt),se();break;case 26:case 27:case 5:on(e);break;case 4:se();break;case 13:yn(e);break;case 19:Z(Ft);break;case 10:pn(e.type);break;case 22:case 23:yn(e),pu(),t!==null&&Z(yi);break;case 24:pn(Zt)}}function vr(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var o=r.next;i=o;do{if((i.tag&t)===t){r=void 0;var u=i.create,h=i.inst;r=u(),h.destroy=r}i=i.next}while(i!==o)}}catch(v){Mt(e,e.return,v)}}function Ln(t,e,i){try{var r=e.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){var h=r.inst,v=h.destroy;if(v!==void 0){h.destroy=void 0,o=e;var T=i,C=v;try{C()}catch(N){Mt(o,T,N)}}}r=r.next}while(r!==u)}}catch(N){Mt(e,e.return,N)}}function np(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{qh(e,i)}catch(r){Mt(t,t.return,r)}}}function ip(t,e,i){i.props=bi(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Mt(t,e,r)}}function br(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(o){Mt(t,e,o)}}function tn(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(o){Mt(t,e,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(o){Mt(t,e,o)}else i.current=null}function ap(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(o){Mt(t,t.return,o)}}function qu(t,e,i){try{var r=t.stateNode;Wb(r,t.type,i,e),r[me]=e}catch(o){Mt(t,t.return,o)}}function rp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Kn(t.type)||t.tag===4}function Xu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||rp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Kn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pu(t,e,i){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(t),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=ol));else if(r!==4&&(r===27&&Kn(t.type)&&(i=t.stateNode,e=null),t=t.child,t!==null))for(Pu(t,e,i),t=t.sibling;t!==null;)Pu(t,e,i),t=t.sibling}function $s(t,e,i){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(r!==4&&(r===27&&Kn(t.type)&&(i=t.stateNode),t=t.child,t!==null))for($s(t,e,i),t=t.sibling;t!==null;)$s(t,e,i),t=t.sibling}function sp(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,o=e.attributes;o.length;)e.removeAttributeNode(o[0]);ae(e,r,i),e[le]=t,e[me]=i}catch(u){Mt(t,t.return,u)}}var xn=!1,Yt=!1,Ku=!1,lp=typeof WeakSet=="function"?WeakSet:Set,It=null;function zb(t,e){if(t=t.containerInfo,gc=pl,t=vh(t),Xo(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var o=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break t}var h=0,v=-1,T=-1,C=0,N=0,B=t,R=null;e:for(;;){for(var O;B!==i||o!==0&&B.nodeType!==3||(v=h+o),B!==u||r!==0&&B.nodeType!==3||(T=h+r),B.nodeType===3&&(h+=B.nodeValue.length),(O=B.firstChild)!==null;)R=B,B=O;for(;;){if(B===t)break e;if(R===i&&++C===o&&(v=h),R===u&&++N===r&&(T=h),(O=B.nextSibling)!==null)break;B=R,R=B.parentNode}B=O}i=v===-1||T===-1?null:{start:v,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(yc={focusedElem:t,selectionRange:i},pl=!1,It=e;It!==null;)if(e=It,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,It=t;else for(;It!==null;){switch(e=It,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,i=e,o=u.memoizedProps,u=u.memoizedState,r=i.stateNode;try{var st=bi(i.type,o,i.elementType===i.type);t=r.getSnapshotBeforeUpdate(st,u),r.__reactInternalSnapshotBeforeUpdate=t}catch(it){Mt(i,i.return,it)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,i=t.nodeType,i===9)xc(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=e.sibling,t!==null){t.return=e.return,It=t;break}It=e.return}}function op(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:kn(t,i),r&4&&vr(5,i);break;case 1:if(kn(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(h){Mt(i,i.return,h)}else{var o=bi(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(o,e,t.__reactInternalSnapshotBeforeUpdate)}catch(h){Mt(i,i.return,h)}}r&64&&np(i),r&512&&br(i,i.return);break;case 3:if(kn(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{qh(t,e)}catch(h){Mt(i,i.return,h)}}break;case 27:e===null&&r&4&&sp(i);case 26:case 5:kn(t,i),e===null&&r&4&&ap(i),r&512&&br(i,i.return);break;case 12:kn(t,i);break;case 13:kn(t,i),r&4&&fp(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=Yb.bind(null,i),rx(t,i))));break;case 22:if(r=i.memoizedState!==null||xn,!r){e=e!==null&&e.memoizedState!==null||Yt,o=xn;var u=Yt;xn=r,(Yt=e)&&!u?Hn(t,i,(i.subtreeFlags&8772)!==0):kn(t,i),xn=o,Yt=u}break;case 30:break;default:kn(t,i)}}function up(t){var e=t.alternate;e!==null&&(t.alternate=null,up(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Eo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ot=null,ye=!1;function Sn(t,e,i){for(i=i.child;i!==null;)cp(t,e,i),i=i.sibling}function cp(t,e,i){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(Ha,i)}catch{}switch(i.tag){case 26:Yt||tn(i,e),Sn(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Yt||tn(i,e);var r=Ot,o=ye;Kn(i.type)&&(Ot=i.stateNode,ye=!1),Sn(t,e,i),Cr(i.stateNode),Ot=r,ye=o;break;case 5:Yt||tn(i,e);case 6:if(r=Ot,o=ye,Ot=null,Sn(t,e,i),Ot=r,ye=o,Ot!==null)if(ye)try{(Ot.nodeType===9?Ot.body:Ot.nodeName==="HTML"?Ot.ownerDocument.body:Ot).removeChild(i.stateNode)}catch(u){Mt(i,e,u)}else try{Ot.removeChild(i.stateNode)}catch(u){Mt(i,e,u)}break;case 18:Ot!==null&&(ye?(t=Ot,Wp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Br(t)):Wp(Ot,i.stateNode));break;case 4:r=Ot,o=ye,Ot=i.stateNode.containerInfo,ye=!0,Sn(t,e,i),Ot=r,ye=o;break;case 0:case 11:case 14:case 15:Yt||Ln(2,i,e),Yt||Ln(4,i,e),Sn(t,e,i);break;case 1:Yt||(tn(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&ip(i,e,r)),Sn(t,e,i);break;case 21:Sn(t,e,i);break;case 22:Yt=(r=Yt)||i.memoizedState!==null,Sn(t,e,i),Yt=r;break;default:Sn(t,e,i)}}function fp(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Br(t)}catch(i){Mt(e,e.return,i)}}function Vb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new lp),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new lp),e;default:throw Error(l(435,t.tag))}}function Qu(t,e){var i=Vb(t);e.forEach(function(r){var o=Gb.bind(null,t,r);i.has(r)||(i.add(r),r.then(o,o))})}function Ae(t,e){var i=e.deletions;if(i!==null)for(var r=0;r<i.length;r++){var o=i[r],u=t,h=e,v=h;t:for(;v!==null;){switch(v.tag){case 27:if(Kn(v.type)){Ot=v.stateNode,ye=!1;break t}break;case 5:Ot=v.stateNode,ye=!1;break t;case 3:case 4:Ot=v.stateNode.containerInfo,ye=!0;break t}v=v.return}if(Ot===null)throw Error(l(160));cp(u,h,o),Ot=null,ye=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)dp(e,t),e=e.sibling}var Qe=null;function dp(t,e){var i=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ae(e,t),Ee(t),r&4&&(Ln(3,t,t.return),vr(3,t),Ln(5,t,t.return));break;case 1:Ae(e,t),Ee(t),r&512&&(Yt||i===null||tn(i,i.return)),r&64&&xn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?r:i.concat(r))));break;case 26:var o=Qe;if(Ae(e,t),Ee(t),r&512&&(Yt||i===null||tn(i,i.return)),r&4){var u=i!==null?i.memoizedState:null;if(r=t.memoizedState,i===null)if(r===null)if(t.stateNode===null){t:{r=t.type,i=t.memoizedProps,o=o.ownerDocument||o;e:switch(r){case"title":u=o.getElementsByTagName("title")[0],(!u||u[qa]||u[le]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(r),o.head.insertBefore(u,o.querySelector("head > title"))),ae(u,r,i),u[le]=t,$t(u),r=u;break t;case"link":var h=s0("link","href",o).get(r+(i.href||""));if(h){for(var v=0;v<h.length;v++)if(u=h[v],u.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&u.getAttribute("rel")===(i.rel==null?null:i.rel)&&u.getAttribute("title")===(i.title==null?null:i.title)&&u.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){h.splice(v,1);break e}}u=o.createElement(r),ae(u,r,i),o.head.appendChild(u);break;case"meta":if(h=s0("meta","content",o).get(r+(i.content||""))){for(v=0;v<h.length;v++)if(u=h[v],u.getAttribute("content")===(i.content==null?null:""+i.content)&&u.getAttribute("name")===(i.name==null?null:i.name)&&u.getAttribute("property")===(i.property==null?null:i.property)&&u.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&u.getAttribute("charset")===(i.charSet==null?null:i.charSet)){h.splice(v,1);break e}}u=o.createElement(r),ae(u,r,i),o.head.appendChild(u);break;default:throw Error(l(468,r))}u[le]=t,$t(u),r=u}t.stateNode=r}else l0(o,t.type,t.stateNode);else t.stateNode=r0(o,r,t.memoizedProps);else u!==r?(u===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):u.count--,r===null?l0(o,t.type,t.stateNode):r0(o,r,t.memoizedProps)):r===null&&t.stateNode!==null&&qu(t,t.memoizedProps,i.memoizedProps)}break;case 27:Ae(e,t),Ee(t),r&512&&(Yt||i===null||tn(i,i.return)),i!==null&&r&4&&qu(t,t.memoizedProps,i.memoizedProps);break;case 5:if(Ae(e,t),Ee(t),r&512&&(Yt||i===null||tn(i,i.return)),t.flags&32){o=t.stateNode;try{Li(o,"")}catch(O){Mt(t,t.return,O)}}r&4&&t.stateNode!=null&&(o=t.memoizedProps,qu(t,o,i!==null?i.memoizedProps:o)),r&1024&&(Ku=!0);break;case 6:if(Ae(e,t),Ee(t),r&4){if(t.stateNode===null)throw Error(l(162));r=t.memoizedProps,i=t.stateNode;try{i.nodeValue=r}catch(O){Mt(t,t.return,O)}}break;case 3:if(dl=null,o=Qe,Qe=cl(e.containerInfo),Ae(e,t),Qe=o,Ee(t),r&4&&i!==null&&i.memoizedState.isDehydrated)try{Br(e.containerInfo)}catch(O){Mt(t,t.return,O)}Ku&&(Ku=!1,hp(t));break;case 4:r=Qe,Qe=cl(t.stateNode.containerInfo),Ae(e,t),Ee(t),Qe=r;break;case 12:Ae(e,t),Ee(t);break;case 13:Ae(e,t),Ee(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Iu=$e()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Qu(t,r)));break;case 22:o=t.memoizedState!==null;var T=i!==null&&i.memoizedState!==null,C=xn,N=Yt;if(xn=C||o,Yt=N||T,Ae(e,t),Yt=N,xn=C,Ee(t),r&8192)t:for(e=t.stateNode,e._visibility=o?e._visibility&-2:e._visibility|1,o&&(i===null||T||xn||Yt||xi(t)),i=null,e=t;;){if(e.tag===5||e.tag===26){if(i===null){T=i=e;try{if(u=T.stateNode,o)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{v=T.stateNode;var B=T.memoizedProps.style,R=B!=null&&B.hasOwnProperty("display")?B.display:null;v.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(O){Mt(T,T.return,O)}}}else if(e.tag===6){if(i===null){T=e;try{T.stateNode.nodeValue=o?"":T.memoizedProps}catch(O){Mt(T,T.return,O)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(i=r.retryQueue,i!==null&&(r.retryQueue=null,Qu(t,i))));break;case 19:Ae(e,t),Ee(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Qu(t,r)));break;case 30:break;case 21:break;default:Ae(e,t),Ee(t)}}function Ee(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(rp(r)){i=r;break}r=r.return}if(i==null)throw Error(l(160));switch(i.tag){case 27:var o=i.stateNode,u=Xu(t);$s(t,u,o);break;case 5:var h=i.stateNode;i.flags&32&&(Li(h,""),i.flags&=-33);var v=Xu(t);$s(t,v,h);break;case 3:case 4:var T=i.stateNode.containerInfo,C=Xu(t);Pu(t,C,T);break;default:throw Error(l(161))}}catch(N){Mt(t,t.return,N)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;hp(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function kn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)op(t,e.alternate,e),e=e.sibling}function xi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ln(4,e,e.return),xi(e);break;case 1:tn(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&ip(e,e.return,i),xi(e);break;case 27:Cr(e.stateNode);case 26:case 5:tn(e,e.return),xi(e);break;case 22:e.memoizedState===null&&xi(e);break;case 30:xi(e);break;default:xi(e)}t=t.sibling}}function Hn(t,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,o=t,u=e,h=u.flags;switch(u.tag){case 0:case 11:case 15:Hn(o,u,i),vr(4,u);break;case 1:if(Hn(o,u,i),r=u,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(C){Mt(r,r.return,C)}if(r=u,o=r.updateQueue,o!==null){var v=r.stateNode;try{var T=o.shared.hiddenCallbacks;if(T!==null)for(o.shared.hiddenCallbacks=null,o=0;o<T.length;o++)Gh(T[o],v)}catch(C){Mt(r,r.return,C)}}i&&h&64&&np(u),br(u,u.return);break;case 27:sp(u);case 26:case 5:Hn(o,u,i),i&&r===null&&h&4&&ap(u),br(u,u.return);break;case 12:Hn(o,u,i);break;case 13:Hn(o,u,i),i&&h&4&&fp(o,u);break;case 22:u.memoizedState===null&&Hn(o,u,i),br(u,u.return);break;case 30:break;default:Hn(o,u,i)}e=e.sibling}}function Zu(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&ar(i))}function Fu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ar(t))}function en(t,e,i,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mp(t,e,i,r),e=e.sibling}function mp(t,e,i,r){var o=e.flags;switch(e.tag){case 0:case 11:case 15:en(t,e,i,r),o&2048&&vr(9,e);break;case 1:en(t,e,i,r);break;case 3:en(t,e,i,r),o&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ar(t)));break;case 12:if(o&2048){en(t,e,i,r),t=e.stateNode;try{var u=e.memoizedProps,h=u.id,v=u.onPostCommit;typeof v=="function"&&v(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(T){Mt(e,e.return,T)}}else en(t,e,i,r);break;case 13:en(t,e,i,r);break;case 23:break;case 22:u=e.stateNode,h=e.alternate,e.memoizedState!==null?u._visibility&2?en(t,e,i,r):xr(t,e):u._visibility&2?en(t,e,i,r):(u._visibility|=2,ia(t,e,i,r,(e.subtreeFlags&10256)!==0)),o&2048&&Zu(h,e);break;case 24:en(t,e,i,r),o&2048&&Fu(e.alternate,e);break;default:en(t,e,i,r)}}function ia(t,e,i,r,o){for(o=o&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,h=e,v=i,T=r,C=h.flags;switch(h.tag){case 0:case 11:case 15:ia(u,h,v,T,o),vr(8,h);break;case 23:break;case 22:var N=h.stateNode;h.memoizedState!==null?N._visibility&2?ia(u,h,v,T,o):xr(u,h):(N._visibility|=2,ia(u,h,v,T,o)),o&&C&2048&&Zu(h.alternate,h);break;case 24:ia(u,h,v,T,o),o&&C&2048&&Fu(h.alternate,h);break;default:ia(u,h,v,T,o)}e=e.sibling}}function xr(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,o=r.flags;switch(r.tag){case 22:xr(i,r),o&2048&&Zu(r.alternate,r);break;case 24:xr(i,r),o&2048&&Fu(r.alternate,r);break;default:xr(i,r)}e=e.sibling}}var Sr=8192;function aa(t){if(t.subtreeFlags&Sr)for(t=t.child;t!==null;)pp(t),t=t.sibling}function pp(t){switch(t.tag){case 26:aa(t),t.flags&Sr&&t.memoizedState!==null&&vx(Qe,t.memoizedState,t.memoizedProps);break;case 5:aa(t);break;case 3:case 4:var e=Qe;Qe=cl(t.stateNode.containerInfo),aa(t),Qe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Sr,Sr=16777216,aa(t),Sr=e):aa(t));break;default:aa(t)}}function gp(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Tr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];It=r,vp(r,t)}gp(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yp(t),t=t.sibling}function yp(t){switch(t.tag){case 0:case 11:case 15:Tr(t),t.flags&2048&&Ln(9,t,t.return);break;case 3:Tr(t);break;case 12:Tr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ws(t)):Tr(t);break;default:Tr(t)}}function Ws(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];It=r,vp(r,t)}gp(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ln(8,e,e.return),Ws(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,Ws(e));break;default:Ws(e)}t=t.sibling}}function vp(t,e){for(;It!==null;){var i=It;switch(i.tag){case 0:case 11:case 15:Ln(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ar(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,It=r;else t:for(i=t;It!==null;){r=It;var o=r.sibling,u=r.return;if(up(r),r===i){It=null;break t}if(o!==null){o.return=u,It=o;break t}It=u}}}var Nb={getCacheForType:function(t){var e=oe(Zt),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i}},_b=typeof WeakMap=="function"?WeakMap:Map,Tt=0,Ct=null,mt=null,yt=0,wt=0,De=null,Yn=!1,ra=!1,Ju=!1,Tn=0,Bt=0,Gn=0,Si=0,$u=0,ke=0,sa=0,wr=null,ve=null,Wu=!1,Iu=0,Is=1/0,tl=null,qn=null,ie=0,Xn=null,la=null,oa=0,tc=0,ec=null,bp=null,Ar=0,nc=null;function Me(){if((Tt&2)!==0&&yt!==0)return yt&-yt;if(V.T!==null){var t=Fi;return t!==0?t:uc()}return _d()}function xp(){ke===0&&(ke=(yt&536870912)===0||bt?Od():536870912);var t=Le.current;return t!==null&&(t.flags|=32),ke}function Ce(t,e,i){(t===Ct&&(wt===2||wt===9)||t.cancelPendingCommit!==null)&&(ua(t,0),Pn(t,yt,ke,!1)),Ga(t,i),((Tt&2)===0||t!==Ct)&&(t===Ct&&((Tt&2)===0&&(Si|=i),Bt===4&&Pn(t,yt,ke,!1)),nn(t))}function Sp(t,e,i){if((Tt&6)!==0)throw Error(l(327));var r=!i&&(e&124)===0&&(e&t.expiredLanes)===0||Ya(t,e),o=r?Lb(t,e):rc(t,e,!0),u=r;do{if(o===0){ra&&!r&&Pn(t,e,0,!1);break}else{if(i=t.current.alternate,u&&!Bb(i)){o=rc(t,e,!1),u=!1;continue}if(o===2){if(u=e,t.errorRecoveryDisabledLanes&u)var h=0;else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;t:{var v=t;o=wr;var T=v.current.memoizedState.isDehydrated;if(T&&(ua(v,h).flags|=256),h=rc(v,h,!1),h!==2){if(Ju&&!T){v.errorRecoveryDisabledLanes|=u,Si|=u,o=4;break t}u=ve,ve=o,u!==null&&(ve===null?ve=u:ve.push.apply(ve,u))}o=h}if(u=!1,o!==2)continue}}if(o===1){ua(t,0),Pn(t,e,0,!0);break}t:{switch(r=t,u=o,u){case 0:case 1:throw Error(l(345));case 4:if((e&4194048)!==e)break;case 6:Pn(r,e,ke,!Yn);break t;case 2:ve=null;break;case 3:case 5:break;default:throw Error(l(329))}if((e&62914560)===e&&(o=Iu+300-$e(),10<o)){if(Pn(r,e,ke,!Yn),fs(r,0,!0)!==0)break t;r.timeoutHandle=Jp(Tp.bind(null,r,i,ve,tl,Wu,e,ke,Si,sa,Yn,u,2,-0,0),o);break t}Tp(r,i,ve,tl,Wu,e,ke,Si,sa,Yn,u,0,-0,0)}}break}while(!0);nn(t)}function Tp(t,e,i,r,o,u,h,v,T,C,N,B,R,O){if(t.timeoutHandle=-1,B=e.subtreeFlags,(B&8192||(B&16785408)===16785408)&&(Or={stylesheets:null,count:0,unsuspend:yx},pp(e),B=bx(),B!==null)){t.cancelPendingCommit=B(jp.bind(null,t,e,u,i,r,o,h,v,T,N,1,R,O)),Pn(t,u,h,!C);return}jp(t,e,u,i,r,o,h,v,T)}function Bb(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var o=i[r],u=o.getSnapshot;o=o.value;try{if(!Te(u(),o))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pn(t,e,i,r){e&=~$u,e&=~Si,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var o=e;0<o;){var u=31-Se(o),h=1<<u;r[u]=-1,o&=~h}i!==0&&Vd(t,i,e)}function el(){return(Tt&6)===0?(Er(0),!1):!0}function ic(){if(mt!==null){if(wt===0)var t=mt.return;else t=mt,mn=pi=null,xu(t),ea=null,pr=0,t=mt;for(;t!==null;)ep(t.alternate,t),t=t.return;mt=null}}function ua(t,e){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,tx(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),ic(),Ct=t,mt=i=fn(t.current,null),yt=e,wt=0,De=null,Yn=!1,ra=Ya(t,e),Ju=!1,sa=ke=$u=Si=Gn=Bt=0,ve=wr=null,Wu=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var o=31-Se(r),u=1<<o;e|=t[o],r&=~u}return Tn=e,ws(),i}function wp(t,e){ft=null,V.H=Gs,e===sr||e===zs?(e=Hh(),wt=3):e===Uh?(e=Hh(),wt=4):wt=e===Ym?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,De=e,mt===null&&(Bt=1,Qs(t,Ne(e,t.current)))}function Ap(){var t=V.H;return V.H=Gs,t===null?Gs:t}function Ep(){var t=V.A;return V.A=Nb,t}function ac(){Bt=4,Yn||(yt&4194048)!==yt&&Le.current!==null||(ra=!0),(Gn&134217727)===0&&(Si&134217727)===0||Ct===null||Pn(Ct,yt,ke,!1)}function rc(t,e,i){var r=Tt;Tt|=2;var o=Ap(),u=Ep();(Ct!==t||yt!==e)&&(tl=null,ua(t,e)),e=!1;var h=Bt;t:do try{if(wt!==0&&mt!==null){var v=mt,T=De;switch(wt){case 8:ic(),h=6;break t;case 3:case 2:case 9:case 6:Le.current===null&&(e=!0);var C=wt;if(wt=0,De=null,ca(t,v,T,C),i&&ra){h=0;break t}break;default:C=wt,wt=0,De=null,ca(t,v,T,C)}}Ub(),h=Bt;break}catch(N){wp(t,N)}while(!0);return e&&t.shellSuspendCounter++,mn=pi=null,Tt=r,V.H=o,V.A=u,mt===null&&(Ct=null,yt=0,ws()),h}function Ub(){for(;mt!==null;)Dp(mt)}function Lb(t,e){var i=Tt;Tt|=2;var r=Ap(),o=Ep();Ct!==t||yt!==e?(tl=null,Is=$e()+500,ua(t,e)):ra=Ya(t,e);t:do try{if(wt!==0&&mt!==null){e=mt;var u=De;e:switch(wt){case 1:wt=0,De=null,ca(t,e,u,1);break;case 2:case 9:if(Lh(u)){wt=0,De=null,Mp(e);break}e=function(){wt!==2&&wt!==9||Ct!==t||(wt=7),nn(t)},u.then(e,e);break t;case 3:wt=7;break t;case 4:wt=5;break t;case 7:Lh(u)?(wt=0,De=null,Mp(e)):(wt=0,De=null,ca(t,e,u,7));break;case 5:var h=null;switch(mt.tag){case 26:h=mt.memoizedState;case 5:case 27:var v=mt;if(!h||o0(h)){wt=0,De=null;var T=v.sibling;if(T!==null)mt=T;else{var C=v.return;C!==null?(mt=C,nl(C)):mt=null}break e}}wt=0,De=null,ca(t,e,u,5);break;case 6:wt=0,De=null,ca(t,e,u,6);break;case 8:ic(),Bt=6;break t;default:throw Error(l(462))}}kb();break}catch(N){wp(t,N)}while(!0);return mn=pi=null,V.H=r,V.A=o,Tt=i,mt!==null?0:(Ct=null,yt=0,ws(),Bt)}function kb(){for(;mt!==null&&!l1();)Dp(mt)}function Dp(t){var e=Im(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?nl(t):mt=e}function Mp(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Qm(i,e,e.pendingProps,e.type,void 0,yt);break;case 11:e=Qm(i,e,e.pendingProps,e.type.render,e.ref,yt);break;case 5:xu(e);default:ep(i,e),e=mt=Ch(e,Tn),e=Im(i,e,Tn)}t.memoizedProps=t.pendingProps,e===null?nl(t):mt=e}function ca(t,e,i,r){mn=pi=null,xu(e),ea=null,pr=0;var o=e.return;try{if(Cb(t,o,e,i,yt)){Bt=1,Qs(t,Ne(i,t.current)),mt=null;return}}catch(u){if(o!==null)throw mt=o,u;Bt=1,Qs(t,Ne(i,t.current)),mt=null;return}e.flags&32768?(bt||r===1?t=!0:ra||(yt&536870912)!==0?t=!1:(Yn=t=!0,(r===2||r===9||r===3||r===6)&&(r=Le.current,r!==null&&r.tag===13&&(r.flags|=16384))),Cp(e,t)):nl(e)}function nl(t){var e=t;do{if((e.flags&32768)!==0){Cp(e,Yn);return}t=e.return;var i=Rb(e.alternate,e,Tn);if(i!==null){mt=i;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);Bt===0&&(Bt=5)}function Cp(t,e){do{var i=Ob(t.alternate,t);if(i!==null){i.flags&=32767,mt=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){mt=t;return}mt=t=i}while(t!==null);Bt=6,mt=null}function jp(t,e,i,r,o,u,h,v,T){t.cancelPendingCommit=null;do il();while(ie!==0);if((Tt&6)!==0)throw Error(l(327));if(e!==null){if(e===t.current)throw Error(l(177));if(u=e.lanes|e.childLanes,u|=Fo,y1(t,i,u,h,v,T),t===Ct&&(mt=Ct=null,yt=0),la=e,Xn=t,oa=i,tc=u,ec=o,bp=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,qb(os,function(){return Np(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=V.T,V.T=null,o=G.p,G.p=2,h=Tt,Tt|=4;try{zb(t,e,i)}finally{Tt=h,G.p=o,V.T=r}}ie=1,Rp(),Op(),zp()}}function Rp(){if(ie===1){ie=0;var t=Xn,e=la,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=V.T,V.T=null;var r=G.p;G.p=2;var o=Tt;Tt|=4;try{dp(e,t);var u=yc,h=vh(t.containerInfo),v=u.focusedElem,T=u.selectionRange;if(h!==v&&v&&v.ownerDocument&&yh(v.ownerDocument.documentElement,v)){if(T!==null&&Xo(v)){var C=T.start,N=T.end;if(N===void 0&&(N=C),"selectionStart"in v)v.selectionStart=C,v.selectionEnd=Math.min(N,v.value.length);else{var B=v.ownerDocument||document,R=B&&B.defaultView||window;if(R.getSelection){var O=R.getSelection(),st=v.textContent.length,it=Math.min(T.start,st),Dt=T.end===void 0?it:Math.min(T.end,st);!O.extend&&it>Dt&&(h=Dt,Dt=it,it=h);var D=gh(v,it),A=gh(v,Dt);if(D&&A&&(O.rangeCount!==1||O.anchorNode!==D.node||O.anchorOffset!==D.offset||O.focusNode!==A.node||O.focusOffset!==A.offset)){var M=B.createRange();M.setStart(D.node,D.offset),O.removeAllRanges(),it>Dt?(O.addRange(M),O.extend(A.node,A.offset)):(M.setEnd(A.node,A.offset),O.addRange(M))}}}}for(B=[],O=v;O=O.parentNode;)O.nodeType===1&&B.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<B.length;v++){var _=B[v];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}pl=!!gc,yc=gc=null}finally{Tt=o,G.p=r,V.T=i}}t.current=e,ie=2}}function Op(){if(ie===2){ie=0;var t=Xn,e=la,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=V.T,V.T=null;var r=G.p;G.p=2;var o=Tt;Tt|=4;try{op(t,e.alternate,e)}finally{Tt=o,G.p=r,V.T=i}}ie=3}}function zp(){if(ie===4||ie===3){ie=0,o1();var t=Xn,e=la,i=oa,r=bp;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ie=5:(ie=0,la=Xn=null,Vp(t,t.pendingLanes));var o=t.pendingLanes;if(o===0&&(qn=null),wo(i),e=e.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(Ha,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=V.T,o=G.p,G.p=2,V.T=null;try{for(var u=t.onRecoverableError,h=0;h<r.length;h++){var v=r[h];u(v.value,{componentStack:v.stack})}}finally{V.T=e,G.p=o}}(oa&3)!==0&&il(),nn(t),o=t.pendingLanes,(i&4194090)!==0&&(o&42)!==0?t===nc?Ar++:(Ar=0,nc=t):Ar=0,Er(0)}}function Vp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ar(e)))}function il(t){return Rp(),Op(),zp(),Np()}function Np(){if(ie!==5)return!1;var t=Xn,e=tc;tc=0;var i=wo(oa),r=V.T,o=G.p;try{G.p=32>i?32:i,V.T=null,i=ec,ec=null;var u=Xn,h=oa;if(ie=0,la=Xn=null,oa=0,(Tt&6)!==0)throw Error(l(331));var v=Tt;if(Tt|=4,yp(u.current),mp(u,u.current,h,i),Tt=v,Er(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(Ha,u)}catch{}return!0}finally{G.p=o,V.T=r,Vp(t,e)}}function _p(t,e,i){e=Ne(i,e),e=Nu(t.stateNode,e,2),t=Nn(t,e,2),t!==null&&(Ga(t,2),nn(t))}function Mt(t,e,i){if(t.tag===3)_p(t,t,i);else for(;e!==null;){if(e.tag===3){_p(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){t=Ne(i,t),i=km(2),r=Nn(e,i,2),r!==null&&(Hm(i,r,e,t),Ga(r,2),nn(r));break}}e=e.return}}function sc(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new _b;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(i)||(Ju=!0,o.add(i),t=Hb.bind(null,t,e,i),e.then(t,t))}function Hb(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ct===t&&(yt&i)===i&&(Bt===4||Bt===3&&(yt&62914560)===yt&&300>$e()-Iu?(Tt&2)===0&&ua(t,0):$u|=i,sa===yt&&(sa=0)),nn(t)}function Bp(t,e){e===0&&(e=zd()),t=Pi(t,e),t!==null&&(Ga(t,e),nn(t))}function Yb(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),Bp(t,i)}function Gb(t,e){var i=0;switch(t.tag){case 13:var r=t.stateNode,o=t.memoizedState;o!==null&&(i=o.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(e),Bp(t,i)}function qb(t,e){return bo(t,e)}var al=null,fa=null,lc=!1,rl=!1,oc=!1,Ti=0;function nn(t){t!==fa&&t.next===null&&(fa===null?al=fa=t:fa=fa.next=t),rl=!0,lc||(lc=!0,Pb())}function Er(t,e){if(!oc&&rl){oc=!0;do for(var i=!1,r=al;r!==null;){if(t!==0){var o=r.pendingLanes;if(o===0)var u=0;else{var h=r.suspendedLanes,v=r.pingedLanes;u=(1<<31-Se(42|t)+1)-1,u&=o&~(h&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,Hp(r,u))}else u=yt,u=fs(r,r===Ct?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ya(r,u)||(i=!0,Hp(r,u));r=r.next}while(i);oc=!1}}function Xb(){Up()}function Up(){rl=lc=!1;var t=0;Ti!==0&&(Ib()&&(t=Ti),Ti=0);for(var e=$e(),i=null,r=al;r!==null;){var o=r.next,u=Lp(r,e);u===0?(r.next=null,i===null?al=o:i.next=o,o===null&&(fa=i)):(i=r,(t!==0||(u&3)!==0)&&(rl=!0)),r=o}Er(t)}function Lp(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var h=31-Se(u),v=1<<h,T=o[h];T===-1?((v&i)===0||(v&r)!==0)&&(o[h]=g1(v,e)):T<=e&&(t.expiredLanes|=v),u&=~v}if(e=Ct,i=yt,i=fs(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&(wt===2||wt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&xo(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ya(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&xo(r),wo(i)){case 2:case 8:i=jd;break;case 32:i=os;break;case 268435456:i=Rd;break;default:i=os}return r=kp.bind(null,t),i=bo(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&xo(r),t.callbackPriority=2,t.callbackNode=null,2}function kp(t,e){if(ie!==0&&ie!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(il()&&t.callbackNode!==i)return null;var r=yt;return r=fs(t,t===Ct?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Sp(t,r,e),Lp(t,$e()),t.callbackNode!=null&&t.callbackNode===i?kp.bind(null,t):null)}function Hp(t,e){if(il())return null;Sp(t,e,!0)}function Pb(){ex(function(){(Tt&6)!==0?bo(Cd,Xb):Up()})}function uc(){return Ti===0&&(Ti=Od()),Ti}function Yp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gs(""+t)}function Gp(t,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,t.id&&i.setAttribute("form",t.id),e.parentNode.insertBefore(i,e),t=new FormData(t),i.parentNode.removeChild(i),t}function Kb(t,e,i,r,o){if(e==="submit"&&i&&i.stateNode===o){var u=Yp((o[me]||null).action),h=r.submitter;h&&(e=(e=h[me]||null)?Yp(e.formAction):h.getAttribute("formAction"),e!==null&&(u=e,h=null));var v=new xs("action","action",null,r,o);t.push({event:v,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ti!==0){var T=h?Gp(o,h):new FormData(o);ju(i,{pending:!0,data:T,method:o.method,action:u},null,T)}}else typeof u=="function"&&(v.preventDefault(),T=h?Gp(o,h):new FormData(o),ju(i,{pending:!0,data:T,method:o.method,action:u},u,T))},currentTarget:o}]})}}for(var cc=0;cc<Zo.length;cc++){var fc=Zo[cc],Qb=fc.toLowerCase(),Zb=fc[0].toUpperCase()+fc.slice(1);Ke(Qb,"on"+Zb)}Ke(Sh,"onAnimationEnd"),Ke(Th,"onAnimationIteration"),Ke(wh,"onAnimationStart"),Ke("dblclick","onDoubleClick"),Ke("focusin","onFocus"),Ke("focusout","onBlur"),Ke(fb,"onTransitionRun"),Ke(db,"onTransitionStart"),Ke(hb,"onTransitionCancel"),Ke(Ah,"onTransitionEnd"),_i("onMouseEnter",["mouseout","mouseover"]),_i("onMouseLeave",["mouseout","mouseover"]),_i("onPointerEnter",["pointerout","pointerover"]),_i("onPointerLeave",["pointerout","pointerover"]),si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),si("onBeforeInput",["compositionend","keypress","textInput","paste"]),si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dr));function qp(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],o=r.event;r=r.listeners;t:{var u=void 0;if(e)for(var h=r.length-1;0<=h;h--){var v=r[h],T=v.instance,C=v.currentTarget;if(v=v.listener,T!==u&&o.isPropagationStopped())break t;u=v,o.currentTarget=C;try{u(o)}catch(N){Ks(N)}o.currentTarget=null,u=T}else for(h=0;h<r.length;h++){if(v=r[h],T=v.instance,C=v.currentTarget,v=v.listener,T!==u&&o.isPropagationStopped())break t;u=v,o.currentTarget=C;try{u(o)}catch(N){Ks(N)}o.currentTarget=null,u=T}}}}function pt(t,e){var i=e[Ao];i===void 0&&(i=e[Ao]=new Set);var r=t+"__bubble";i.has(r)||(Xp(e,t,2,!1),i.add(r))}function dc(t,e,i){var r=0;e&&(r|=4),Xp(i,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function hc(t){if(!t[sl]){t[sl]=!0,Ud.forEach(function(i){i!=="selectionchange"&&(Fb.has(i)||dc(i,!1,t),dc(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,dc("selectionchange",!1,e))}}function Xp(t,e,i,r){switch(m0(e)){case 2:var o=Tx;break;case 8:o=wx;break;default:o=Mc}i=o.bind(null,e,i,t),o=void 0,!_o||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?t.addEventListener(e,i,{capture:!0,passive:o}):t.addEventListener(e,i,!0):o!==void 0?t.addEventListener(e,i,{passive:o}):t.addEventListener(e,i,!1)}function mc(t,e,i,r,o){var u=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var h=r.tag;if(h===3||h===4){var v=r.stateNode.containerInfo;if(v===o)break;if(h===4)for(h=r.return;h!==null;){var T=h.tag;if((T===3||T===4)&&h.stateNode.containerInfo===o)return;h=h.return}for(;v!==null;){if(h=zi(v),h===null)return;if(T=h.tag,T===5||T===6||T===26||T===27){r=u=h;continue t}v=v.parentNode}}r=r.return}$d(function(){var C=u,N=Vo(i),B=[];t:{var R=Eh.get(t);if(R!==void 0){var O=xs,st=t;switch(t){case"keypress":if(vs(i)===0)break t;case"keydown":case"keyup":O=q1;break;case"focusin":st="focus",O=ko;break;case"focusout":st="blur",O=ko;break;case"beforeblur":case"afterblur":O=ko;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=O1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=K1;break;case Sh:case Th:case wh:O=N1;break;case Ah:O=Z1;break;case"scroll":case"scrollend":O=j1;break;case"wheel":O=J1;break;case"copy":case"cut":case"paste":O=B1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=nh;break;case"toggle":case"beforetoggle":O=W1}var it=(e&4)!==0,Dt=!it&&(t==="scroll"||t==="scrollend"),D=it?R!==null?R+"Capture":null:R;it=[];for(var A=C,M;A!==null;){var _=A;if(M=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||M===null||D===null||(_=Pa(A,D),_!=null&&it.push(Mr(A,_,M))),Dt)break;A=A.return}0<it.length&&(R=new O(R,st,null,i,N),B.push({event:R,listeners:it}))}}if((e&7)===0){t:{if(R=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",R&&i!==zo&&(st=i.relatedTarget||i.fromElement)&&(zi(st)||st[Oi]))break t;if((O||R)&&(R=N.window===N?N:(R=N.ownerDocument)?R.defaultView||R.parentWindow:window,O?(st=i.relatedTarget||i.toElement,O=C,st=st?zi(st):null,st!==null&&(Dt=d(st),it=st.tag,st!==Dt||it!==5&&it!==27&&it!==6)&&(st=null)):(O=null,st=C),O!==st)){if(it=th,_="onMouseLeave",D="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(it=nh,_="onPointerLeave",D="onPointerEnter",A="pointer"),Dt=O==null?R:Xa(O),M=st==null?R:Xa(st),R=new it(_,A+"leave",O,i,N),R.target=Dt,R.relatedTarget=M,_=null,zi(N)===C&&(it=new it(D,A+"enter",st,i,N),it.target=M,it.relatedTarget=Dt,_=it),Dt=_,O&&st)e:{for(it=O,D=st,A=0,M=it;M;M=da(M))A++;for(M=0,_=D;_;_=da(_))M++;for(;0<A-M;)it=da(it),A--;for(;0<M-A;)D=da(D),M--;for(;A--;){if(it===D||D!==null&&it===D.alternate)break e;it=da(it),D=da(D)}it=null}else it=null;O!==null&&Pp(B,R,O,it,!1),st!==null&&Dt!==null&&Pp(B,Dt,st,it,!0)}}t:{if(R=C?Xa(C):window,O=R.nodeName&&R.nodeName.toLowerCase(),O==="select"||O==="input"&&R.type==="file")var tt=ch;else if(oh(R))if(fh)tt=ob;else{tt=sb;var dt=rb}else O=R.nodeName,!O||O.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?C&&Oo(C.elementType)&&(tt=ch):tt=lb;if(tt&&(tt=tt(t,C))){uh(B,tt,i,N);break t}dt&&dt(t,R,C),t==="focusout"&&C&&R.type==="number"&&C.memoizedProps.value!=null&&Ro(R,"number",R.value)}switch(dt=C?Xa(C):window,t){case"focusin":(oh(dt)||dt.contentEditable==="true")&&(Gi=dt,Po=C,Ia=null);break;case"focusout":Ia=Po=Gi=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,bh(B,i,N);break;case"selectionchange":if(cb)break;case"keydown":case"keyup":bh(B,i,N)}var et;if(Yo)t:{switch(t){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else Yi?sh(t,i)&&(rt="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(rt="onCompositionStart");rt&&(ih&&i.locale!=="ko"&&(Yi||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Yi&&(et=Wd()):(Rn=N,Bo="value"in Rn?Rn.value:Rn.textContent,Yi=!0)),dt=ll(C,rt),0<dt.length&&(rt=new eh(rt,t,null,i,N),B.push({event:rt,listeners:dt}),et?rt.data=et:(et=lh(i),et!==null&&(rt.data=et)))),(et=tb?eb(t,i):nb(t,i))&&(rt=ll(C,"onBeforeInput"),0<rt.length&&(dt=new eh("onBeforeInput","beforeinput",null,i,N),B.push({event:dt,listeners:rt}),dt.data=et)),Kb(B,t,C,i,N)}qp(B,e)})}function Mr(t,e,i){return{instance:t,listener:e,currentTarget:i}}function ll(t,e){for(var i=e+"Capture",r=[];t!==null;){var o=t,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=Pa(t,i),o!=null&&r.unshift(Mr(t,o,u)),o=Pa(t,e),o!=null&&r.push(Mr(t,o,u))),t.tag===3)return r;t=t.return}return[]}function da(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pp(t,e,i,r,o){for(var u=e._reactName,h=[];i!==null&&i!==r;){var v=i,T=v.alternate,C=v.stateNode;if(v=v.tag,T!==null&&T===r)break;v!==5&&v!==26&&v!==27||C===null||(T=C,o?(C=Pa(i,u),C!=null&&h.unshift(Mr(i,C,T))):o||(C=Pa(i,u),C!=null&&h.push(Mr(i,C,T)))),i=i.return}h.length!==0&&t.push({event:e,listeners:h})}var Jb=/\r\n?/g,$b=/\u0000|\uFFFD/g;function Kp(t){return(typeof t=="string"?t:""+t).replace(Jb,`
`).replace($b,"")}function Qp(t,e){return e=Kp(e),Kp(t)===e}function ol(){}function Et(t,e,i,r,o,u){switch(i){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Li(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Li(t,""+r);break;case"className":hs(t,"class",r);break;case"tabIndex":hs(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":hs(t,i,r);break;case"style":Fd(t,r,u);break;case"data":if(e!=="object"){hs(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=gs(""+r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(e!=="input"&&Et(t,e,"name",o.name,o,null),Et(t,e,"formEncType",o.formEncType,o,null),Et(t,e,"formMethod",o.formMethod,o,null),Et(t,e,"formTarget",o.formTarget,o,null)):(Et(t,e,"encType",o.encType,o,null),Et(t,e,"method",o.method,o,null),Et(t,e,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=gs(""+r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=ol);break;case"onScroll":r!=null&&pt("scroll",t);break;case"onScrollEnd":r!=null&&pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(i=r.__html,i!=null){if(o.children!=null)throw Error(l(60));t.innerHTML=i}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=gs(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""+r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":pt("beforetoggle",t),pt("toggle",t),ds(t,"popover",r);break;case"xlinkActuate":un(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":un(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":un(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":un(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":un(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":un(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":un(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":un(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":un(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ds(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=M1.get(i)||i,ds(t,i,r))}}function pc(t,e,i,r,o,u){switch(i){case"style":Fd(t,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(i=r.__html,i!=null){if(o.children!=null)throw Error(l(60));t.innerHTML=i}}break;case"children":typeof r=="string"?Li(t,r):(typeof r=="number"||typeof r=="bigint")&&Li(t,""+r);break;case"onScroll":r!=null&&pt("scroll",t);break;case"onScrollEnd":r!=null&&pt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ol);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ld.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(o=i.endsWith("Capture"),e=i.slice(2,o?i.length-7:void 0),u=t[me]||null,u=u!=null?u[i]:null,typeof u=="function"&&t.removeEventListener(e,u,o),typeof r=="function")){typeof u!="function"&&u!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(e,r,o);break t}i in t?t[i]=r:r===!0?t.setAttribute(i,""):ds(t,i,r)}}}function ae(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",t),pt("load",t);var r=!1,o=!1,u;for(u in i)if(i.hasOwnProperty(u)){var h=i[u];if(h!=null)switch(u){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Et(t,e,u,h,i,null)}}o&&Et(t,e,"srcSet",i.srcSet,i,null),r&&Et(t,e,"src",i.src,i,null);return;case"input":pt("invalid",t);var v=u=h=o=null,T=null,C=null;for(r in i)if(i.hasOwnProperty(r)){var N=i[r];if(N!=null)switch(r){case"name":o=N;break;case"type":h=N;break;case"checked":T=N;break;case"defaultChecked":C=N;break;case"value":u=N;break;case"defaultValue":v=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(l(137,e));break;default:Et(t,e,r,N,i,null)}}Pd(t,u,v,T,C,h,o,!1),ms(t);return;case"select":pt("invalid",t),r=h=u=null;for(o in i)if(i.hasOwnProperty(o)&&(v=i[o],v!=null))switch(o){case"value":u=v;break;case"defaultValue":h=v;break;case"multiple":r=v;default:Et(t,e,o,v,i,null)}e=u,i=h,t.multiple=!!r,e!=null?Ui(t,!!r,e,!1):i!=null&&Ui(t,!!r,i,!0);return;case"textarea":pt("invalid",t),u=o=r=null;for(h in i)if(i.hasOwnProperty(h)&&(v=i[h],v!=null))switch(h){case"value":r=v;break;case"defaultValue":o=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(l(91));break;default:Et(t,e,h,v,i,null)}Qd(t,r,o,u),ms(t);return;case"option":for(T in i)if(i.hasOwnProperty(T)&&(r=i[T],r!=null))switch(T){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Et(t,e,T,r,i,null)}return;case"dialog":pt("beforetoggle",t),pt("toggle",t),pt("cancel",t),pt("close",t);break;case"iframe":case"object":pt("load",t);break;case"video":case"audio":for(r=0;r<Dr.length;r++)pt(Dr[r],t);break;case"image":pt("error",t),pt("load",t);break;case"details":pt("toggle",t);break;case"embed":case"source":case"link":pt("error",t),pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in i)if(i.hasOwnProperty(C)&&(r=i[C],r!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Et(t,e,C,r,i,null)}return;default:if(Oo(e)){for(N in i)i.hasOwnProperty(N)&&(r=i[N],r!==void 0&&pc(t,e,N,r,i,void 0));return}}for(v in i)i.hasOwnProperty(v)&&(r=i[v],r!=null&&Et(t,e,v,r,i,null))}function Wb(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,h=null,v=null,T=null,C=null,N=null;for(O in i){var B=i[O];if(i.hasOwnProperty(O)&&B!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":T=B;default:r.hasOwnProperty(O)||Et(t,e,O,null,r,B)}}for(var R in r){var O=r[R];if(B=i[R],r.hasOwnProperty(R)&&(O!=null||B!=null))switch(R){case"type":u=O;break;case"name":o=O;break;case"checked":C=O;break;case"defaultChecked":N=O;break;case"value":h=O;break;case"defaultValue":v=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(137,e));break;default:O!==B&&Et(t,e,R,O,r,B)}}jo(t,h,v,T,C,N,u,o);return;case"select":O=h=v=R=null;for(u in i)if(T=i[u],i.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":O=T;default:r.hasOwnProperty(u)||Et(t,e,u,null,r,T)}for(o in r)if(u=r[o],T=i[o],r.hasOwnProperty(o)&&(u!=null||T!=null))switch(o){case"value":R=u;break;case"defaultValue":v=u;break;case"multiple":h=u;default:u!==T&&Et(t,e,o,u,r,T)}e=v,i=h,r=O,R!=null?Ui(t,!!i,R,!1):!!r!=!!i&&(e!=null?Ui(t,!!i,e,!0):Ui(t,!!i,i?[]:"",!1));return;case"textarea":O=R=null;for(v in i)if(o=i[v],i.hasOwnProperty(v)&&o!=null&&!r.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Et(t,e,v,null,r,o)}for(h in r)if(o=r[h],u=i[h],r.hasOwnProperty(h)&&(o!=null||u!=null))switch(h){case"value":R=o;break;case"defaultValue":O=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(l(91));break;default:o!==u&&Et(t,e,h,o,r,u)}Kd(t,R,O);return;case"option":for(var st in i)if(R=i[st],i.hasOwnProperty(st)&&R!=null&&!r.hasOwnProperty(st))switch(st){case"selected":t.selected=!1;break;default:Et(t,e,st,null,r,R)}for(T in r)if(R=r[T],O=i[T],r.hasOwnProperty(T)&&R!==O&&(R!=null||O!=null))switch(T){case"selected":t.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Et(t,e,T,R,r,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in i)R=i[it],i.hasOwnProperty(it)&&R!=null&&!r.hasOwnProperty(it)&&Et(t,e,it,null,r,R);for(C in r)if(R=r[C],O=i[C],r.hasOwnProperty(C)&&R!==O&&(R!=null||O!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(l(137,e));break;default:Et(t,e,C,R,r,O)}return;default:if(Oo(e)){for(var Dt in i)R=i[Dt],i.hasOwnProperty(Dt)&&R!==void 0&&!r.hasOwnProperty(Dt)&&pc(t,e,Dt,void 0,r,R);for(N in r)R=r[N],O=i[N],!r.hasOwnProperty(N)||R===O||R===void 0&&O===void 0||pc(t,e,N,R,r,O);return}}for(var D in i)R=i[D],i.hasOwnProperty(D)&&R!=null&&!r.hasOwnProperty(D)&&Et(t,e,D,null,r,R);for(B in r)R=r[B],O=i[B],!r.hasOwnProperty(B)||R===O||R==null&&O==null||Et(t,e,B,R,r,O)}var gc=null,yc=null;function ul(t){return t.nodeType===9?t:t.ownerDocument}function Zp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function vc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bc=null;function Ib(){var t=window.event;return t&&t.type==="popstate"?t===bc?!1:(bc=t,!0):(bc=null,!1)}var Jp=typeof setTimeout=="function"?setTimeout:void 0,tx=typeof clearTimeout=="function"?clearTimeout:void 0,$p=typeof Promise=="function"?Promise:void 0,ex=typeof queueMicrotask=="function"?queueMicrotask:typeof $p<"u"?function(t){return $p.resolve(null).then(t).catch(nx)}:Jp;function nx(t){setTimeout(function(){throw t})}function Kn(t){return t==="head"}function Wp(t,e){var i=e,r=0,o=0;do{var u=i.nextSibling;if(t.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(0<r&&8>r){i=r;var h=t.ownerDocument;if(i&1&&Cr(h.documentElement),i&2&&Cr(h.body),i&4)for(i=h.head,Cr(i),h=i.firstChild;h;){var v=h.nextSibling,T=h.nodeName;h[qa]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&h.rel.toLowerCase()==="stylesheet"||i.removeChild(h),h=v}}if(o===0){t.removeChild(u),Br(e);return}o--}else i==="$"||i==="$?"||i==="$!"?o++:r=i.charCodeAt(0)-48;else r=0;i=u}while(i);Br(e)}function xc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":xc(i),Eo(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function ix(t,e,i,r){for(;t.nodeType===1;){var o=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[qa])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==o.rel||t.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ze(t.nextSibling),t===null)break}return null}function ax(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ze(t.nextSibling),t===null))return null;return t}function Sc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function rx(t,e){var i=t.ownerDocument;if(t.data!=="$?"||i.readyState==="complete")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ze(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Tc=null;function Ip(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return t;e--}else i==="/$"&&e++}t=t.previousSibling}return null}function t0(t,e,i){switch(e=ul(i),t){case"html":if(t=e.documentElement,!t)throw Error(l(452));return t;case"head":if(t=e.head,!t)throw Error(l(453));return t;case"body":if(t=e.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}function Cr(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Eo(t)}var He=new Map,e0=new Set;function cl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wn=G.d;G.d={f:sx,r:lx,D:ox,C:ux,L:cx,m:fx,X:hx,S:dx,M:mx};function sx(){var t=wn.f(),e=el();return t||e}function lx(t){var e=Vi(t);e!==null&&e.tag===5&&e.type==="form"?Sm(e):wn.r(t)}var ha=typeof document>"u"?null:document;function n0(t,e,i){var r=ha;if(r&&typeof e=="string"&&e){var o=Ve(e);o='link[rel="'+t+'"][href="'+o+'"]',typeof i=="string"&&(o+='[crossorigin="'+i+'"]'),e0.has(o)||(e0.add(o),t={rel:t,crossOrigin:i,href:e},r.querySelector(o)===null&&(e=r.createElement("link"),ae(e,"link",t),$t(e),r.head.appendChild(e)))}}function ox(t){wn.D(t),n0("dns-prefetch",t,null)}function ux(t,e){wn.C(t,e),n0("preconnect",t,e)}function cx(t,e,i){wn.L(t,e,i);var r=ha;if(r&&t&&e){var o='link[rel="preload"][as="'+Ve(e)+'"]';e==="image"&&i&&i.imageSrcSet?(o+='[imagesrcset="'+Ve(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(o+='[imagesizes="'+Ve(i.imageSizes)+'"]')):o+='[href="'+Ve(t)+'"]';var u=o;switch(e){case"style":u=ma(t);break;case"script":u=pa(t)}He.has(u)||(t=y({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),He.set(u,t),r.querySelector(o)!==null||e==="style"&&r.querySelector(jr(u))||e==="script"&&r.querySelector(Rr(u))||(e=r.createElement("link"),ae(e,"link",t),$t(e),r.head.appendChild(e)))}}function fx(t,e){wn.m(t,e);var i=ha;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+Ve(r)+'"][href="'+Ve(t)+'"]',u=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=pa(t)}if(!He.has(u)&&(t=y({rel:"modulepreload",href:t},e),He.set(u,t),i.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Rr(u)))return}r=i.createElement("link"),ae(r,"link",t),$t(r),i.head.appendChild(r)}}}function dx(t,e,i){wn.S(t,e,i);var r=ha;if(r&&t){var o=Ni(r).hoistableStyles,u=ma(t);e=e||"default";var h=o.get(u);if(!h){var v={loading:0,preload:null};if(h=r.querySelector(jr(u)))v.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},i),(i=He.get(u))&&wc(t,i);var T=h=r.createElement("link");$t(T),ae(T,"link",t),T._p=new Promise(function(C,N){T.onload=C,T.onerror=N}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,fl(h,e,r)}h={type:"stylesheet",instance:h,count:1,state:v},o.set(u,h)}}}function hx(t,e){wn.X(t,e);var i=ha;if(i&&t){var r=Ni(i).hoistableScripts,o=pa(t),u=r.get(o);u||(u=i.querySelector(Rr(o)),u||(t=y({src:t,async:!0},e),(e=He.get(o))&&Ac(t,e),u=i.createElement("script"),$t(u),ae(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(o,u))}}function mx(t,e){wn.M(t,e);var i=ha;if(i&&t){var r=Ni(i).hoistableScripts,o=pa(t),u=r.get(o);u||(u=i.querySelector(Rr(o)),u||(t=y({src:t,async:!0,type:"module"},e),(e=He.get(o))&&Ac(t,e),u=i.createElement("script"),$t(u),ae(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(o,u))}}function i0(t,e,i,r){var o=(o=at.current)?cl(o):null;if(!o)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=ma(i.href),i=Ni(o).hoistableStyles,r=i.get(e),r||(r={type:"style",instance:null,count:0,state:null},i.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=ma(i.href);var u=Ni(o).hoistableStyles,h=u.get(t);if(h||(o=o.ownerDocument||o,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,h),(u=o.querySelector(jr(t)))&&!u._p&&(h.instance=u,h.state.loading=5),He.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},He.set(t,i),u||px(o,t,i,h.state))),e&&r===null)throw Error(l(528,""));return h}if(e&&r!==null)throw Error(l(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=pa(i),i=Ni(o).hoistableScripts,r=i.get(e),r||(r={type:"script",instance:null,count:0,state:null},i.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function ma(t){return'href="'+Ve(t)+'"'}function jr(t){return'link[rel="stylesheet"]['+t+"]"}function a0(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function px(t,e,i,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),ae(e,"link",i),$t(e),t.head.appendChild(e))}function pa(t){return'[src="'+Ve(t)+'"]'}function Rr(t){return"script[async]"+t}function r0(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Ve(i.href)+'"]');if(r)return e.instance=r,$t(r),r;var o=y({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),$t(r),ae(r,"style",o),fl(r,i.precedence,t),e.instance=r;case"stylesheet":o=ma(i.href);var u=t.querySelector(jr(o));if(u)return e.state.loading|=4,e.instance=u,$t(u),u;r=a0(i),(o=He.get(o))&&wc(r,o),u=(t.ownerDocument||t).createElement("link"),$t(u);var h=u;return h._p=new Promise(function(v,T){h.onload=v,h.onerror=T}),ae(u,"link",r),e.state.loading|=4,fl(u,i.precedence,t),e.instance=u;case"script":return u=pa(i.src),(o=t.querySelector(Rr(u)))?(e.instance=o,$t(o),o):(r=i,(o=He.get(u))&&(r=y({},i),Ac(r,o)),t=t.ownerDocument||t,o=t.createElement("script"),$t(o),ae(o,"link",r),t.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,fl(r,i.precedence,t));return e.instance}function fl(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,u=o,h=0;h<r.length;h++){var v=r[h];if(v.dataset.precedence===e)u=v;else if(u!==o)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function wc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ac(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var dl=null;function s0(t,e,i){if(dl===null){var r=new Map,o=dl=new Map;o.set(i,r)}else o=dl,r=o.get(i),r||(r=new Map,o.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),o=0;o<i.length;o++){var u=i[o];if(!(u[qa]||u[le]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(e)||"";h=t+h;var v=r.get(h);v?v.push(u):r.set(h,[u])}}return r}function l0(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function gx(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function o0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Or=null;function yx(){}function vx(t,e,i){if(Or===null)throw Error(l(475));var r=Or;if(e.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var o=ma(i.href),u=t.querySelector(jr(o));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=hl.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=u,$t(u);return}u=t.ownerDocument||t,i=a0(i),(o=He.get(o))&&wc(i,o),u=u.createElement("link"),$t(u);var h=u;h._p=new Promise(function(v,T){h.onload=v,h.onerror=T}),ae(u,"link",i),e.instance=u}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=hl.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function bx(){if(Or===null)throw Error(l(475));var t=Or;return t.stylesheets&&t.count===0&&Ec(t,t.stylesheets),0<t.count?function(e){var i=setTimeout(function(){if(t.stylesheets&&Ec(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(i)}}:null}function hl(){if(this.count--,this.count===0){if(this.stylesheets)Ec(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ml=null;function Ec(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ml=new Map,e.forEach(xx,t),ml=null,hl.call(t))}function xx(t,e){if(!(e.state.loading&4)){var i=ml.get(t);if(i)var r=i.get(null);else{i=new Map,ml.set(t,i);for(var o=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var h=o[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(i.set(h.dataset.precedence,h),r=h)}r&&i.set(null,r)}o=e.instance,h=o.getAttribute("data-precedence"),u=i.get(h)||r,u===r&&i.set(null,o),i.set(h,o),this.count++,r=hl.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),u?u.parentNode.insertBefore(o,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),e.state.loading|=4}}var zr={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Sx(t,e,i,r,o,u,h,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=So(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.hiddenUpdates=So(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function u0(t,e,i,r,o,u,h,v,T,C,N,B){return t=new Sx(t,e,i,h,v,T,C,B),e=1,u===!0&&(e|=24),u=we(3,null,null,e),t.current=u,u.stateNode=t,e=su(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:r,isDehydrated:i,cache:e},cu(u),t}function c0(t){return t?(t=Ki,t):Ki}function f0(t,e,i,r,o,u){o=c0(o),r.context===null?r.context=o:r.pendingContext=o,r=Vn(e),r.payload={element:i},u=u===void 0?null:u,u!==null&&(r.callback=u),i=Nn(t,r,e),i!==null&&(Ce(i,t,e),or(i,t,e))}function d0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Dc(t,e){d0(t,e),(t=t.alternate)&&d0(t,e)}function h0(t){if(t.tag===13){var e=Pi(t,67108864);e!==null&&Ce(e,t,67108864),Dc(t,67108864)}}var pl=!0;function Tx(t,e,i,r){var o=V.T;V.T=null;var u=G.p;try{G.p=2,Mc(t,e,i,r)}finally{G.p=u,V.T=o}}function wx(t,e,i,r){var o=V.T;V.T=null;var u=G.p;try{G.p=8,Mc(t,e,i,r)}finally{G.p=u,V.T=o}}function Mc(t,e,i,r){if(pl){var o=Cc(r);if(o===null)mc(t,e,r,gl,i),p0(t,r);else if(Ex(o,t,e,i,r))r.stopPropagation();else if(p0(t,r),e&4&&-1<Ax.indexOf(t)){for(;o!==null;){var u=Vi(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=ri(u.pendingLanes);if(h!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;h;){var T=1<<31-Se(h);v.entanglements[1]|=T,h&=~T}nn(u),(Tt&6)===0&&(Is=$e()+500,Er(0))}}break;case 13:v=Pi(u,2),v!==null&&Ce(v,u,2),el(),Dc(u,2)}if(u=Cc(r),u===null&&mc(t,e,r,gl,i),u===o)break;o=u}o!==null&&r.stopPropagation()}else mc(t,e,r,null,i)}}function Cc(t){return t=Vo(t),jc(t)}var gl=null;function jc(t){if(gl=null,t=zi(t),t!==null){var e=d(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=f(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return gl=t,null}function m0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(u1()){case Cd:return 2;case jd:return 8;case os:case c1:return 32;case Rd:return 268435456;default:return 32}default:return 32}}var Rc=!1,Qn=null,Zn=null,Fn=null,Vr=new Map,Nr=new Map,Jn=[],Ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p0(t,e){switch(t){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Vr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(e.pointerId)}}function _r(t,e,i,r,o,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:u,targetContainers:[o]},e!==null&&(e=Vi(e),e!==null&&h0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function Ex(t,e,i,r,o){switch(e){case"focusin":return Qn=_r(Qn,t,e,i,r,o),!0;case"dragenter":return Zn=_r(Zn,t,e,i,r,o),!0;case"mouseover":return Fn=_r(Fn,t,e,i,r,o),!0;case"pointerover":var u=o.pointerId;return Vr.set(u,_r(Vr.get(u)||null,t,e,i,r,o)),!0;case"gotpointercapture":return u=o.pointerId,Nr.set(u,_r(Nr.get(u)||null,t,e,i,r,o)),!0}return!1}function g0(t){var e=zi(t.target);if(e!==null){var i=d(e);if(i!==null){if(e=i.tag,e===13){if(e=f(i),e!==null){t.blockedOn=e,v1(t.priority,function(){if(i.tag===13){var r=Me();r=To(r);var o=Pi(i,r);o!==null&&Ce(o,i,r),Dc(i,r)}});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Cc(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);zo=r,i.target.dispatchEvent(r),zo=null}else return e=Vi(i),e!==null&&h0(e),t.blockedOn=i,!1;e.shift()}return!0}function y0(t,e,i){yl(t)&&i.delete(e)}function Dx(){Rc=!1,Qn!==null&&yl(Qn)&&(Qn=null),Zn!==null&&yl(Zn)&&(Zn=null),Fn!==null&&yl(Fn)&&(Fn=null),Vr.forEach(y0),Nr.forEach(y0)}function vl(t,e){t.blockedOn===e&&(t.blockedOn=null,Rc||(Rc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Dx)))}var bl=null;function v0(t){bl!==t&&(bl=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){bl===t&&(bl=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],o=t[e+2];if(typeof r!="function"){if(jc(r||i)===null)continue;break}var u=Vi(i);u!==null&&(t.splice(e,3),e-=3,ju(u,{pending:!0,data:o,method:i.method,action:r},r,o))}}))}function Br(t){function e(T){return vl(T,t)}Qn!==null&&vl(Qn,t),Zn!==null&&vl(Zn,t),Fn!==null&&vl(Fn,t),Vr.forEach(e),Nr.forEach(e);for(var i=0;i<Jn.length;i++){var r=Jn[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Jn.length&&(i=Jn[0],i.blockedOn===null);)g0(i),i.blockedOn===null&&Jn.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],h=o[me]||null;if(typeof u=="function")h||v0(i);else if(h){var v=null;if(u&&u.hasAttribute("formAction")){if(o=u,h=u[me]||null)v=h.formAction;else if(jc(o)!==null)continue}else v=h.action;typeof v=="function"?i[r+1]=v:(i.splice(r,3),r-=3),v0(i)}}}function Oc(t){this._internalRoot=t}xl.prototype.render=Oc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(l(409));var i=e.current,r=Me();f0(i,r,t,e,null,null)},xl.prototype.unmount=Oc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;f0(t.current,2,null,t,null,null),el(),e[Oi]=null}};function xl(t){this._internalRoot=t}xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=_d();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Jn.length&&e!==0&&e<Jn[i].priority;i++);Jn.splice(i,0,t),i===0&&g0(t)}};var b0=a.version;if(b0!=="19.1.1")throw Error(l(527,b0,"19.1.1"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=m(e),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Mx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{Ha=Sl.inject(Mx),xe=Sl}catch{}}return Lr.createRoot=function(t,e){if(!c(t))throw Error(l(299));var i=!1,r="",o=_m,u=Bm,h=Um,v=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(v=e.unstable_transitionCallbacks)),e=u0(t,1,!1,null,null,i,r,o,u,h,v,null),t[Oi]=e.current,hc(t),new Oc(e)},Lr.hydrateRoot=function(t,e,i){if(!c(t))throw Error(l(299));var r=!1,o="",u=_m,h=Bm,v=Um,T=null,C=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks),i.formState!==void 0&&(C=i.formState)),e=u0(t,1,!0,e,i??null,r,o,u,h,v,T,C),e.context=c0(null),i=e.current,r=Me(),r=To(r),o=Vn(r),o.callback=null,Nn(i,o,r),i=r,e.current.lanes=i,Ga(e,i),nn(e),t[Oi]=e.current,hc(t),new xl(e)},Lr.version="19.1.1",Lr}var j0;function Lx(){if(j0)return Nc.exports;j0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Nc.exports=Ux(),Nc.exports}var kx=Lx(),ce=function(){return ce=Object.assign||function(a){for(var s,l=1,c=arguments.length;l<c;l++){s=arguments[l];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(a[d]=s[d])}return a},ce.apply(this,arguments)};function Fr(n,a,s){if(s||arguments.length===2)for(var l=0,c=a.length,d;l<c;l++)(d||!(l in a))&&(d||(d=Array.prototype.slice.call(a,0,l)),d[l]=a[l]);return n.concat(d||Array.prototype.slice.call(a))}var jt="-ms-",qr="-moz-",St="-webkit-",iy="comm",lo="rule",Gf="decl",Hx="@import",ay="@keyframes",Yx="@layer",ry=Math.abs,qf=String.fromCharCode,uf=Object.assign;function Gx(n,a){return ee(n,0)^45?(((a<<2^ee(n,0))<<2^ee(n,1))<<2^ee(n,2))<<2^ee(n,3):0}function sy(n){return n.trim()}function An(n,a){return(n=a.exec(n))?n[0]:n}function ct(n,a,s){return n.replace(a,s)}function ql(n,a,s){return n.indexOf(a,s)}function ee(n,a){return n.charCodeAt(a)|0}function ja(n,a,s){return n.slice(a,s)}function an(n){return n.length}function ly(n){return n.length}function Yr(n,a){return a.push(n),n}function qx(n,a){return n.map(a).join("")}function R0(n,a){return n.filter(function(s){return!An(s,a)})}var oo=1,Ra=1,oy=0,Xe=0,Qt=0,Ba="";function uo(n,a,s,l,c,d,f,p){return{value:n,root:a,parent:s,type:l,props:c,children:d,line:oo,column:Ra,length:f,return:"",siblings:p}}function Wn(n,a){return uf(uo("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},a)}function ga(n){for(;n.root;)n=Wn(n.root,{children:[n]});Yr(n,n.siblings)}function Xx(){return Qt}function Px(){return Qt=Xe>0?ee(Ba,--Xe):0,Ra--,Qt===10&&(Ra=1,oo--),Qt}function Je(){return Qt=Xe<oy?ee(Ba,Xe++):0,Ra++,Qt===10&&(Ra=1,oo++),Qt}function Ci(){return ee(Ba,Xe)}function Xl(){return Xe}function co(n,a){return ja(Ba,n,a)}function cf(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kx(n){return oo=Ra=1,oy=an(Ba=n),Xe=0,[]}function Qx(n){return Ba="",n}function Lc(n){return sy(co(Xe-1,ff(n===91?n+2:n===40?n+1:n)))}function Zx(n){for(;(Qt=Ci())&&Qt<33;)Je();return cf(n)>2||cf(Qt)>3?"":" "}function Fx(n,a){for(;--a&&Je()&&!(Qt<48||Qt>102||Qt>57&&Qt<65||Qt>70&&Qt<97););return co(n,Xl()+(a<6&&Ci()==32&&Je()==32))}function ff(n){for(;Je();)switch(Qt){case n:return Xe;case 34:case 39:n!==34&&n!==39&&ff(Qt);break;case 40:n===41&&ff(n);break;case 92:Je();break}return Xe}function Jx(n,a){for(;Je()&&n+Qt!==57;)if(n+Qt===84&&Ci()===47)break;return"/*"+co(a,Xe-1)+"*"+qf(n===47?n:Je())}function $x(n){for(;!cf(Ci());)Je();return co(n,Xe)}function Wx(n){return Qx(Pl("",null,null,null,[""],n=Kx(n),0,[0],n))}function Pl(n,a,s,l,c,d,f,p,m){for(var g=0,y=0,x=f,S=0,j=0,z=0,H=1,P=1,Y=1,q=0,L="",$=c,k=d,K=l,X=L;P;)switch(z=q,q=Je()){case 40:if(z!=108&&ee(X,x-1)==58){ql(X+=ct(Lc(q),"&","&\f"),"&\f",ry(g?p[g-1]:0))!=-1&&(Y=-1);break}case 34:case 39:case 91:X+=Lc(q);break;case 9:case 10:case 13:case 32:X+=Zx(z);break;case 92:X+=Fx(Xl()-1,7);continue;case 47:switch(Ci()){case 42:case 47:Yr(Ix(Jx(Je(),Xl()),a,s,m),m);break;default:X+="/"}break;case 123*H:p[g++]=an(X)*Y;case 125*H:case 59:case 0:switch(q){case 0:case 125:P=0;case 59+y:Y==-1&&(X=ct(X,/\f/g,"")),j>0&&an(X)-x&&Yr(j>32?z0(X+";",l,s,x-1,m):z0(ct(X," ","")+";",l,s,x-2,m),m);break;case 59:X+=";";default:if(Yr(K=O0(X,a,s,g,y,c,p,L,$=[],k=[],x,d),d),q===123)if(y===0)Pl(X,a,K,K,$,d,x,p,k);else switch(S===99&&ee(X,3)===110?100:S){case 100:case 108:case 109:case 115:Pl(n,K,K,l&&Yr(O0(n,K,K,0,0,c,p,L,c,$=[],x,k),k),c,k,x,p,l?$:k);break;default:Pl(X,K,K,K,[""],k,0,p,k)}}g=y=j=0,H=Y=1,L=X="",x=f;break;case 58:x=1+an(X),j=z;default:if(H<1){if(q==123)--H;else if(q==125&&H++==0&&Px()==125)continue}switch(X+=qf(q),q*H){case 38:Y=y>0?1:(X+="\f",-1);break;case 44:p[g++]=(an(X)-1)*Y,Y=1;break;case 64:Ci()===45&&(X+=Lc(Je())),S=Ci(),y=x=an(L=X+=$x(Xl())),q++;break;case 45:z===45&&an(X)==2&&(H=0)}}return d}function O0(n,a,s,l,c,d,f,p,m,g,y,x){for(var S=c-1,j=c===0?d:[""],z=ly(j),H=0,P=0,Y=0;H<l;++H)for(var q=0,L=ja(n,S+1,S=ry(P=f[H])),$=n;q<z;++q)($=sy(P>0?j[q]+" "+L:ct(L,/&\f/g,j[q])))&&(m[Y++]=$);return uo(n,a,s,c===0?lo:p,m,g,y,x)}function Ix(n,a,s,l){return uo(n,a,s,iy,qf(Xx()),ja(n,2,-2),0,l)}function z0(n,a,s,l,c){return uo(n,a,s,Gf,ja(n,0,l),ja(n,l+1,-1),l,c)}function uy(n,a,s){switch(Gx(n,a)){case 5103:return St+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return St+n+n;case 4789:return qr+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return St+n+qr+n+jt+n+n;case 5936:switch(ee(n,a+11)){case 114:return St+n+jt+ct(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return St+n+jt+ct(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return St+n+jt+ct(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return St+n+jt+n+n;case 6165:return St+n+jt+"flex-"+n+n;case 5187:return St+n+ct(n,/(\w+).+(:[^]+)/,St+"box-$1$2"+jt+"flex-$1$2")+n;case 5443:return St+n+jt+"flex-item-"+ct(n,/flex-|-self/g,"")+(An(n,/flex-|baseline/)?"":jt+"grid-row-"+ct(n,/flex-|-self/g,""))+n;case 4675:return St+n+jt+"flex-line-pack"+ct(n,/align-content|flex-|-self/g,"")+n;case 5548:return St+n+jt+ct(n,"shrink","negative")+n;case 5292:return St+n+jt+ct(n,"basis","preferred-size")+n;case 6060:return St+"box-"+ct(n,"-grow","")+St+n+jt+ct(n,"grow","positive")+n;case 4554:return St+ct(n,/([^-])(transform)/g,"$1"+St+"$2")+n;case 6187:return ct(ct(ct(n,/(zoom-|grab)/,St+"$1"),/(image-set)/,St+"$1"),n,"")+n;case 5495:case 3959:return ct(n,/(image-set\([^]*)/,St+"$1$`$1");case 4968:return ct(ct(n,/(.+:)(flex-)?(.*)/,St+"box-pack:$3"+jt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+St+n+n;case 4200:if(!An(n,/flex-|baseline/))return jt+"grid-column-align"+ja(n,a)+n;break;case 2592:case 3360:return jt+ct(n,"template-","")+n;case 4384:case 3616:return s&&s.some(function(l,c){return a=c,An(l.props,/grid-\w+-end/)})?~ql(n+(s=s[a].value),"span",0)?n:jt+ct(n,"-start","")+n+jt+"grid-row-span:"+(~ql(s,"span",0)?An(s,/\d+/):+An(s,/\d+/)-+An(n,/\d+/))+";":jt+ct(n,"-start","")+n;case 4896:case 4128:return s&&s.some(function(l){return An(l.props,/grid-\w+-start/)})?n:jt+ct(ct(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ct(n,/(.+)-inline(.+)/,St+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(an(n)-1-a>6)switch(ee(n,a+1)){case 109:if(ee(n,a+4)!==45)break;case 102:return ct(n,/(.+:)(.+)-([^]+)/,"$1"+St+"$2-$3$1"+qr+(ee(n,a+3)==108?"$3":"$2-$3"))+n;case 115:return~ql(n,"stretch",0)?uy(ct(n,"stretch","fill-available"),a,s)+n:n}break;case 5152:case 5920:return ct(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,d,f,p,m,g){return jt+c+":"+d+g+(f?jt+c+"-span:"+(p?m:+m-+d)+g:"")+n});case 4949:if(ee(n,a+6)===121)return ct(n,":",":"+St)+n;break;case 6444:switch(ee(n,ee(n,14)===45?18:11)){case 120:return ct(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+St+(ee(n,14)===45?"inline-":"")+"box$3$1"+St+"$2$3$1"+jt+"$2box$3")+n;case 100:return ct(n,":",":"+jt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ct(n,"scroll-","scroll-snap-")+n}return n}function Wl(n,a){for(var s="",l=0;l<n.length;l++)s+=a(n[l],l,n,a)||"";return s}function t5(n,a,s,l){switch(n.type){case Yx:if(n.children.length)break;case Hx:case Gf:return n.return=n.return||n.value;case iy:return"";case ay:return n.return=n.value+"{"+Wl(n.children,l)+"}";case lo:if(!an(n.value=n.props.join(",")))return""}return an(s=Wl(n.children,l))?n.return=n.value+"{"+s+"}":""}function e5(n){var a=ly(n);return function(s,l,c,d){for(var f="",p=0;p<a;p++)f+=n[p](s,l,c,d)||"";return f}}function n5(n){return function(a){a.root||(a=a.return)&&n(a)}}function i5(n,a,s,l){if(n.length>-1&&!n.return)switch(n.type){case Gf:n.return=uy(n.value,n.length,s);return;case ay:return Wl([Wn(n,{value:ct(n.value,"@","@"+St)})],l);case lo:if(n.length)return qx(s=n.props,function(c){switch(An(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ga(Wn(n,{props:[ct(c,/:(read-\w+)/,":"+qr+"$1")]})),ga(Wn(n,{props:[c]})),uf(n,{props:R0(s,l)});break;case"::placeholder":ga(Wn(n,{props:[ct(c,/:(plac\w+)/,":"+St+"input-$1")]})),ga(Wn(n,{props:[ct(c,/:(plac\w+)/,":"+qr+"$1")]})),ga(Wn(n,{props:[ct(c,/:(plac\w+)/,jt+"input-$1")]})),ga(Wn(n,{props:[c]})),uf(n,{props:R0(s,l)});break}return""})}}var a5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},je={},Oa=typeof process<"u"&&je!==void 0&&(je.REACT_APP_SC_ATTR||je.SC_ATTR)||"data-styled",cy="active",fy="data-styled-version",fo="6.1.19",Xf=`/*!sc*/
`,Il=typeof window<"u"&&typeof document<"u",r5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==""?je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.SC_DISABLE_SPEEDY!==void 0&&je.SC_DISABLE_SPEEDY!==""&&je.SC_DISABLE_SPEEDY!=="false"&&je.SC_DISABLE_SPEEDY),s5={},ho=Object.freeze([]),za=Object.freeze({});function dy(n,a,s){return s===void 0&&(s=za),n.theme!==s.theme&&n.theme||a||s.theme}var hy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),l5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,o5=/(^-|-$)/g;function V0(n){return n.replace(l5,"-").replace(o5,"")}var u5=/(a)(d)/gi,Tl=52,N0=function(n){return String.fromCharCode(n+(n>25?39:97))};function df(n){var a,s="";for(a=Math.abs(n);a>Tl;a=a/Tl|0)s=N0(a%Tl)+s;return(N0(a%Tl)+s).replace(u5,"$1-$2")}var kc,my=5381,Ta=function(n,a){for(var s=a.length;s;)n=33*n^a.charCodeAt(--s);return n},py=function(n){return Ta(my,n)};function gy(n){return df(py(n)>>>0)}function c5(n){return n.displayName||n.name||"Component"}function Hc(n){return typeof n=="string"&&!0}var yy=typeof Symbol=="function"&&Symbol.for,vy=yy?Symbol.for("react.memo"):60115,f5=yy?Symbol.for("react.forward_ref"):60112,d5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},h5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},by={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},m5=((kc={})[f5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kc[vy]=by,kc);function _0(n){return("type"in(a=n)&&a.type.$$typeof)===vy?by:"$$typeof"in n?m5[n.$$typeof]:d5;var a}var p5=Object.defineProperty,g5=Object.getOwnPropertyNames,B0=Object.getOwnPropertySymbols,y5=Object.getOwnPropertyDescriptor,v5=Object.getPrototypeOf,U0=Object.prototype;function xy(n,a,s){if(typeof a!="string"){if(U0){var l=v5(a);l&&l!==U0&&xy(n,l,s)}var c=g5(a);B0&&(c=c.concat(B0(a)));for(var d=_0(n),f=_0(a),p=0;p<c.length;++p){var m=c[p];if(!(m in h5||s&&s[m]||f&&m in f||d&&m in d)){var g=y5(a,m);try{p5(n,m,g)}catch{}}}}return n}function Va(n){return typeof n=="function"}function Pf(n){return typeof n=="object"&&"styledComponentId"in n}function Ei(n,a){return n&&a?"".concat(n," ").concat(a):n||a||""}function hf(n,a){if(n.length===0)return"";for(var s=n[0],l=1;l<n.length;l++)s+=n[l];return s}function Jr(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function mf(n,a,s){if(s===void 0&&(s=!1),!s&&!Jr(n)&&!Array.isArray(n))return a;if(Array.isArray(a))for(var l=0;l<a.length;l++)n[l]=mf(n[l],a[l]);else if(Jr(a))for(var l in a)n[l]=mf(n[l],a[l]);return n}function Kf(n,a){Object.defineProperty(n,"toString",{value:a})}function is(n){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var b5=function(){function n(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return n.prototype.indexOfGroup=function(a){for(var s=0,l=0;l<a;l++)s+=this.groupSizes[l];return s},n.prototype.insertRules=function(a,s){if(a>=this.groupSizes.length){for(var l=this.groupSizes,c=l.length,d=c;a>=d;)if((d<<=1)<0)throw is(16,"".concat(a));this.groupSizes=new Uint32Array(d),this.groupSizes.set(l),this.length=d;for(var f=c;f<d;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(a+1),m=(f=0,s.length);f<m;f++)this.tag.insertRule(p,s[f])&&(this.groupSizes[a]++,p++)},n.prototype.clearGroup=function(a){if(a<this.length){var s=this.groupSizes[a],l=this.indexOfGroup(a),c=l+s;this.groupSizes[a]=0;for(var d=l;d<c;d++)this.tag.deleteRule(l)}},n.prototype.getGroup=function(a){var s="";if(a>=this.length||this.groupSizes[a]===0)return s;for(var l=this.groupSizes[a],c=this.indexOfGroup(a),d=c+l,f=c;f<d;f++)s+="".concat(this.tag.getRule(f)).concat(Xf);return s},n}(),Kl=new Map,to=new Map,Ql=1,wl=function(n){if(Kl.has(n))return Kl.get(n);for(;to.has(Ql);)Ql++;var a=Ql++;return Kl.set(n,a),to.set(a,n),a},x5=function(n,a){Ql=a+1,Kl.set(n,a),to.set(a,n)},S5="style[".concat(Oa,"][").concat(fy,'="').concat(fo,'"]'),T5=new RegExp("^".concat(Oa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),w5=function(n,a,s){for(var l,c=s.split(","),d=0,f=c.length;d<f;d++)(l=c[d])&&n.registerName(a,l)},A5=function(n,a){for(var s,l=((s=a.textContent)!==null&&s!==void 0?s:"").split(Xf),c=[],d=0,f=l.length;d<f;d++){var p=l[d].trim();if(p){var m=p.match(T5);if(m){var g=0|parseInt(m[1],10),y=m[2];g!==0&&(x5(y,g),w5(n,y,m[3]),n.getTag().insertRules(g,c)),c.length=0}else c.push(p)}}},L0=function(n){for(var a=document.querySelectorAll(S5),s=0,l=a.length;s<l;s++){var c=a[s];c&&c.getAttribute(Oa)!==cy&&(A5(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function E5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sy=function(n){var a=document.head,s=n||a,l=document.createElement("style"),c=function(p){var m=Array.from(p.querySelectorAll("style[".concat(Oa,"]")));return m[m.length-1]}(s),d=c!==void 0?c.nextSibling:null;l.setAttribute(Oa,cy),l.setAttribute(fy,fo);var f=E5();return f&&l.setAttribute("nonce",f),s.insertBefore(l,d),l},D5=function(){function n(a){this.element=Sy(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var l=document.styleSheets,c=0,d=l.length;c<d;c++){var f=l[c];if(f.ownerNode===s)return f}throw is(17)}(this.element),this.length=0}return n.prototype.insertRule=function(a,s){try{return this.sheet.insertRule(s,a),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},n.prototype.getRule=function(a){var s=this.sheet.cssRules[a];return s&&s.cssText?s.cssText:""},n}(),M5=function(){function n(a){this.element=Sy(a),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(a,s){if(a<=this.length&&a>=0){var l=document.createTextNode(s);return this.element.insertBefore(l,this.nodes[a]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},n.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},n}(),C5=function(){function n(a){this.rules=[],this.length=0}return n.prototype.insertRule=function(a,s){return a<=this.length&&(this.rules.splice(a,0,s),this.length++,!0)},n.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},n.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},n}(),k0=Il,j5={isServer:!Il,useCSSOMInjection:!r5},eo=function(){function n(a,s,l){a===void 0&&(a=za),s===void 0&&(s={});var c=this;this.options=ce(ce({},j5),a),this.gs=s,this.names=new Map(l),this.server=!!a.isServer,!this.server&&Il&&k0&&(k0=!1,L0(this)),Kf(this,function(){return function(d){for(var f=d.getTag(),p=f.length,m="",g=function(x){var S=function(Y){return to.get(Y)}(x);if(S===void 0)return"continue";var j=d.names.get(S),z=f.getGroup(x);if(j===void 0||!j.size||z.length===0)return"continue";var H="".concat(Oa,".g").concat(x,'[id="').concat(S,'"]'),P="";j!==void 0&&j.forEach(function(Y){Y.length>0&&(P+="".concat(Y,","))}),m+="".concat(z).concat(H,'{content:"').concat(P,'"}').concat(Xf)},y=0;y<p;y++)g(y);return m}(c)})}return n.registerId=function(a){return wl(a)},n.prototype.rehydrate=function(){!this.server&&Il&&L0(this)},n.prototype.reconstructWithOptions=function(a,s){return s===void 0&&(s=!0),new n(ce(ce({},this.options),a),this.gs,s&&this.names||void 0)},n.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(a=function(s){var l=s.useCSSOMInjection,c=s.target;return s.isServer?new C5(c):l?new D5(c):new M5(c)}(this.options),new b5(a)));var a},n.prototype.hasNameForId=function(a,s){return this.names.has(a)&&this.names.get(a).has(s)},n.prototype.registerName=function(a,s){if(wl(a),this.names.has(a))this.names.get(a).add(s);else{var l=new Set;l.add(s),this.names.set(a,l)}},n.prototype.insertRules=function(a,s,l){this.registerName(a,s),this.getTag().insertRules(wl(a),l)},n.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},n.prototype.clearRules=function(a){this.getTag().clearGroup(wl(a)),this.clearNames(a)},n.prototype.clearTag=function(){this.tag=void 0},n}(),R5=/&/g,O5=/^\s*\/\/.*$/gm;function Ty(n,a){return n.map(function(s){return s.type==="rule"&&(s.value="".concat(a," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(a," ")),s.props=s.props.map(function(l){return"".concat(a," ").concat(l)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=Ty(s.children,a)),s})}function z5(n){var a,s,l,c=za,d=c.options,f=d===void 0?za:d,p=c.plugins,m=p===void 0?ho:p,g=function(S,j,z){return z.startsWith(s)&&z.endsWith(s)&&z.replaceAll(s,"").length>0?".".concat(a):S},y=m.slice();y.push(function(S){S.type===lo&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(R5,s).replace(l,g))}),f.prefix&&y.push(i5),y.push(t5);var x=function(S,j,z,H){j===void 0&&(j=""),z===void 0&&(z=""),H===void 0&&(H="&"),a=H,s=j,l=new RegExp("\\".concat(s,"\\b"),"g");var P=S.replace(O5,""),Y=Wx(z||j?"".concat(z," ").concat(j," { ").concat(P," }"):P);f.namespace&&(Y=Ty(Y,f.namespace));var q=[];return Wl(Y,e5(y.concat(n5(function(L){return q.push(L)})))),q};return x.hash=m.length?m.reduce(function(S,j){return j.name||is(15),Ta(S,j.name)},my).toString():"",x}var V5=new eo,pf=z5(),wy=En.createContext({shouldForwardProp:void 0,styleSheet:V5,stylis:pf});wy.Consumer;En.createContext(void 0);function gf(){return J.useContext(wy)}var N5=function(){function n(a,s){var l=this;this.inject=function(c,d){d===void 0&&(d=pf);var f=l.name+d.hash;c.hasNameForId(l.id,f)||c.insertRules(l.id,f,d(l.rules,f,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=s,Kf(this,function(){throw is(12,String(l.name))})}return n.prototype.getName=function(a){return a===void 0&&(a=pf),this.name+a.hash},n}(),_5=function(n){return n>="A"&&n<="Z"};function H0(n){for(var a="",s=0;s<n.length;s++){var l=n[s];if(s===1&&l==="-"&&n[0]==="-")return n;_5(l)?a+="-"+l.toLowerCase():a+=l}return a.startsWith("ms-")?"-"+a:a}var Ay=function(n){return n==null||n===!1||n===""},Ey=function(n){var a,s,l=[];for(var c in n){var d=n[c];n.hasOwnProperty(c)&&!Ay(d)&&(Array.isArray(d)&&d.isCss||Va(d)?l.push("".concat(H0(c),":"),d,";"):Jr(d)?l.push.apply(l,Fr(Fr(["".concat(c," {")],Ey(d),!1),["}"],!1)):l.push("".concat(H0(c),": ").concat((a=c,(s=d)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||a in a5||a.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return l};function ti(n,a,s,l){if(Ay(n))return[];if(Pf(n))return[".".concat(n.styledComponentId)];if(Va(n)){if(!Va(d=n)||d.prototype&&d.prototype.isReactComponent||!a)return[n];var c=n(a);return ti(c,a,s,l)}var d;return n instanceof N5?s?(n.inject(s,l),[n.getName(l)]):[n]:Jr(n)?Ey(n):Array.isArray(n)?Array.prototype.concat.apply(ho,n.map(function(f){return ti(f,a,s,l)})):[n.toString()]}function Dy(n){for(var a=0;a<n.length;a+=1){var s=n[a];if(Va(s)&&!Pf(s))return!1}return!0}var B5=py(fo),U5=function(){function n(a,s,l){this.rules=a,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&Dy(a),this.componentId=s,this.baseHash=Ta(B5,s),this.baseStyle=l,eo.registerId(s)}return n.prototype.generateAndInjectStyles=function(a,s,l){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,s,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))c=Ei(c,this.staticRulesId);else{var d=hf(ti(this.rules,a,s,l)),f=df(Ta(this.baseHash,d)>>>0);if(!s.hasNameForId(this.componentId,f)){var p=l(d,".".concat(f),void 0,this.componentId);s.insertRules(this.componentId,f,p)}c=Ei(c,f),this.staticRulesId=f}else{for(var m=Ta(this.baseHash,l.hash),g="",y=0;y<this.rules.length;y++){var x=this.rules[y];if(typeof x=="string")g+=x;else if(x){var S=hf(ti(x,a,s,l));m=Ta(m,S+y),g+=S}}if(g){var j=df(m>>>0);s.hasNameForId(this.componentId,j)||s.insertRules(this.componentId,j,l(g,".".concat(j),void 0,this.componentId)),c=Ei(c,j)}}return c},n}(),Qf=En.createContext(void 0);Qf.Consumer;var Yc={};function L5(n,a,s){var l=Pf(n),c=n,d=!Hc(n),f=a.attrs,p=f===void 0?ho:f,m=a.componentId,g=m===void 0?function($,k){var K=typeof $!="string"?"sc":V0($);Yc[K]=(Yc[K]||0)+1;var X="".concat(K,"-").concat(gy(fo+K+Yc[K]));return k?"".concat(k,"-").concat(X):X}(a.displayName,a.parentComponentId):m,y=a.displayName,x=y===void 0?function($){return Hc($)?"styled.".concat($):"Styled(".concat(c5($),")")}(n):y,S=a.displayName&&a.componentId?"".concat(V0(a.displayName),"-").concat(a.componentId):a.componentId||g,j=l&&c.attrs?c.attrs.concat(p).filter(Boolean):p,z=a.shouldForwardProp;if(l&&c.shouldForwardProp){var H=c.shouldForwardProp;if(a.shouldForwardProp){var P=a.shouldForwardProp;z=function($,k){return H($,k)&&P($,k)}}else z=H}var Y=new U5(s,S,l?c.componentStyle:void 0);function q($,k){return function(K,X,I){var gt=K.attrs,Rt=K.componentStyle,qt=K.defaultProps,Lt=K.foldedComponentIds,Pe=K.styledComponentId,Re=K.target,kt=En.useContext(Qf),V=gf(),G=K.shouldForwardProp||V.shouldForwardProp,W=dy(X,kt,qt)||za,ot=function(ht,at,Jt){for(var xt,se=ce(ce({},at),{className:void 0,theme:Jt}),ai=0;ai<ht.length;ai+=1){var on=Va(xt=ht[ai])?xt(se):xt;for(var Oe in on)se[Oe]=Oe==="className"?Ei(se[Oe],on[Oe]):Oe==="style"?ce(ce({},se[Oe]),on[Oe]):on[Oe]}return at.className&&(se.className=Ei(se.className,at.className)),se}(gt,X,W),w=ot.as||Re,U={};for(var Z in ot)ot[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&ot.theme===W||(Z==="forwardedAs"?U.as=ot.forwardedAs:G&&!G(Z,w)||(U[Z]=ot[Z]));var F=function(ht,at){var Jt=gf(),xt=ht.generateAndInjectStyles(at,Jt.styleSheet,Jt.stylis);return xt}(Rt,ot),nt=Ei(Lt,Pe);return F&&(nt+=" "+F),ot.className&&(nt+=" "+ot.className),U[Hc(w)&&!hy.has(w)?"class":"className"]=nt,I&&(U.ref=I),J.createElement(w,U)}(L,$,k)}q.displayName=x;var L=En.forwardRef(q);return L.attrs=j,L.componentStyle=Y,L.displayName=x,L.shouldForwardProp=z,L.foldedComponentIds=l?Ei(c.foldedComponentIds,c.styledComponentId):"",L.styledComponentId=S,L.target=l?c.target:n,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=l?function(k){for(var K=[],X=1;X<arguments.length;X++)K[X-1]=arguments[X];for(var I=0,gt=K;I<gt.length;I++)mf(k,gt[I],!0);return k}({},c.defaultProps,$):$}}),Kf(L,function(){return".".concat(L.styledComponentId)}),d&&xy(L,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function Y0(n,a){for(var s=[n[0]],l=0,c=a.length;l<c;l+=1)s.push(a[l],n[l+1]);return s}var G0=function(n){return Object.assign(n,{isCss:!0})};function My(n){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];if(Va(n)||Jr(n))return G0(ti(Y0(ho,Fr([n],a,!0))));var l=n;return a.length===0&&l.length===1&&typeof l[0]=="string"?ti(l):G0(ti(Y0(l,a)))}function yf(n,a,s){if(s===void 0&&(s=za),!a)throw is(1,a);var l=function(c){for(var d=[],f=1;f<arguments.length;f++)d[f-1]=arguments[f];return n(a,s,My.apply(void 0,Fr([c],d,!1)))};return l.attrs=function(c){return yf(n,a,ce(ce({},s),{attrs:Array.prototype.concat(s.attrs,c).filter(Boolean)}))},l.withConfig=function(c){return yf(n,a,ce(ce({},s),c))},l}var Cy=function(n){return yf(L5,n)},E=Cy;hy.forEach(function(n){E[n]=Cy(n)});var k5=function(){function n(a,s){this.rules=a,this.componentId=s,this.isStatic=Dy(a),eo.registerId(this.componentId+1)}return n.prototype.createStyles=function(a,s,l,c){var d=c(hf(ti(this.rules,s,l,c)),""),f=this.componentId+a;l.insertRules(f,f,d)},n.prototype.removeStyles=function(a,s){s.clearRules(this.componentId+a)},n.prototype.renderStyles=function(a,s,l,c){a>2&&eo.registerId(this.componentId+a),this.removeStyles(a,l),this.createStyles(a,s,l,c)},n}();function H5(n){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];var l=My.apply(void 0,Fr([n],a,!1)),c="sc-global-".concat(gy(JSON.stringify(l))),d=new k5(l,c),f=function(m){var g=gf(),y=En.useContext(Qf),x=En.useRef(g.styleSheet.allocateGSInstance(c)).current;return g.styleSheet.server&&p(x,m,g.styleSheet,y,g.stylis),En.useLayoutEffect(function(){if(!g.styleSheet.server)return p(x,m,g.styleSheet,y,g.stylis),function(){return d.removeStyles(x,g.styleSheet)}},[x,m,g.styleSheet,y,g.stylis]),null};function p(m,g,y,x,S){if(d.isStatic)d.renderStyles(m,s5,y,S);else{var j=ce(ce({},g),{theme:dy(g,x,f.defaultProps)});d.renderStyles(m,j,y,S)}}return En.memo(f)}const Zf=J.createContext({});function Ff(n){const a=J.useRef(null);return a.current===null&&(a.current=n()),a.current}const Jf=typeof window<"u",jy=Jf?J.useLayoutEffect:J.useEffect,mo=J.createContext(null);function $f(n,a){n.indexOf(a)===-1&&n.push(a)}function Wf(n,a){const s=n.indexOf(a);s>-1&&n.splice(s,1)}const Dn=(n,a,s)=>s>a?a:s<n?n:s;let If=()=>{};const Mn={},Ry=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Oy(n){return typeof n=="object"&&n!==null}const zy=n=>/^0[^.\s]+$/u.test(n);function td(n){let a;return()=>(a===void 0&&(a=n()),a)}const qe=n=>n,Y5=(n,a)=>s=>a(n(s)),as=(...n)=>n.reduce(Y5),$r=(n,a,s)=>{const l=a-n;return l===0?1:(s-n)/l};class ed{constructor(){this.subscriptions=[]}add(a){return $f(this.subscriptions,a),()=>Wf(this.subscriptions,a)}notify(a,s,l){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](a,s,l);else for(let d=0;d<c;d++){const f=this.subscriptions[d];f&&f(a,s,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const rn=n=>n*1e3,sn=n=>n/1e3;function Vy(n,a){return a?n*(1e3/a):0}const Ny=(n,a,s)=>(((1-3*s+3*a)*n+(3*s-6*a))*n+3*a)*n,G5=1e-7,q5=12;function X5(n,a,s,l,c){let d,f,p=0;do f=a+(s-a)/2,d=Ny(f,l,c)-n,d>0?s=f:a=f;while(Math.abs(d)>G5&&++p<q5);return f}function rs(n,a,s,l){if(n===a&&s===l)return qe;const c=d=>X5(d,0,1,n,s);return d=>d===0||d===1?d:Ny(c(d),a,l)}const _y=n=>a=>a<=.5?n(2*a)/2:(2-n(2*(1-a)))/2,By=n=>a=>1-n(1-a),Uy=rs(.33,1.53,.69,.99),nd=By(Uy),Ly=_y(nd),ky=n=>(n*=2)<1?.5*nd(n):.5*(2-Math.pow(2,-10*(n-1))),id=n=>1-Math.sin(Math.acos(n)),Hy=By(id),Yy=_y(id),P5=rs(.42,0,1,1),K5=rs(0,0,.58,1),Gy=rs(.42,0,.58,1),Q5=n=>Array.isArray(n)&&typeof n[0]!="number",qy=n=>Array.isArray(n)&&typeof n[0]=="number",Z5={linear:qe,easeIn:P5,easeInOut:Gy,easeOut:K5,circIn:id,circInOut:Yy,circOut:Hy,backIn:nd,backInOut:Ly,backOut:Uy,anticipate:ky},F5=n=>typeof n=="string",q0=n=>{if(qy(n)){If(n.length===4);const[a,s,l,c]=n;return rs(a,s,l,c)}else if(F5(n))return Z5[n];return n},Al=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function J5(n,a){let s=new Set,l=new Set,c=!1,d=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function m(y){f.has(y)&&(g.schedule(y),n()),y(p)}const g={schedule:(y,x=!1,S=!1)=>{const z=S&&c?s:l;return x&&f.add(y),z.has(y)||z.add(y),y},cancel:y=>{l.delete(y),f.delete(y)},process:y=>{if(p=y,c){d=!0;return}c=!0,[s,l]=[l,s],s.forEach(m),s.clear(),c=!1,d&&(d=!1,g.process(y))}};return g}const $5=40;function Xy(n,a){let s=!1,l=!0;const c={delta:0,timestamp:0,isProcessing:!1},d=()=>s=!0,f=Al.reduce((L,$)=>(L[$]=J5(d),L),{}),{setup:p,read:m,resolveKeyframes:g,preUpdate:y,update:x,preRender:S,render:j,postRender:z}=f,H=()=>{const L=Mn.useManualTiming?c.timestamp:performance.now();s=!1,Mn.useManualTiming||(c.delta=l?1e3/60:Math.max(Math.min(L-c.timestamp,$5),1)),c.timestamp=L,c.isProcessing=!0,p.process(c),m.process(c),g.process(c),y.process(c),x.process(c),S.process(c),j.process(c),z.process(c),c.isProcessing=!1,s&&a&&(l=!1,n(H))},P=()=>{s=!0,l=!0,c.isProcessing||n(H)};return{schedule:Al.reduce((L,$)=>{const k=f[$];return L[$]=(K,X=!1,I=!1)=>(s||P(),k.schedule(K,X,I)),L},{}),cancel:L=>{for(let $=0;$<Al.length;$++)f[Al[$]].cancel(L)},state:c,steps:f}}const{schedule:zt,cancel:ei,state:re,steps:Gc}=Xy(typeof requestAnimationFrame<"u"?requestAnimationFrame:qe,!0);let Zl;function W5(){Zl=void 0}const be={now:()=>(Zl===void 0&&be.set(re.isProcessing||Mn.useManualTiming?re.timestamp:performance.now()),Zl),set:n=>{Zl=n,queueMicrotask(W5)}},Py=n=>a=>typeof a=="string"&&a.startsWith(n),ad=Py("--"),I5=Py("var(--"),rd=n=>I5(n)?tS.test(n.split("/*")[0].trim()):!1,tS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ua={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Wr={...Ua,transform:n=>Dn(0,1,n)},El={...Ua,default:1},Xr=n=>Math.round(n*1e5)/1e5,sd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function eS(n){return n==null}const nS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ld=(n,a)=>s=>!!(typeof s=="string"&&nS.test(s)&&s.startsWith(n)||a&&!eS(s)&&Object.prototype.hasOwnProperty.call(s,a)),Ky=(n,a,s)=>l=>{if(typeof l!="string")return l;const[c,d,f,p]=l.match(sd);return{[n]:parseFloat(c),[a]:parseFloat(d),[s]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},iS=n=>Dn(0,255,n),qc={...Ua,transform:n=>Math.round(iS(n))},Di={test:ld("rgb","red"),parse:Ky("red","green","blue"),transform:({red:n,green:a,blue:s,alpha:l=1})=>"rgba("+qc.transform(n)+", "+qc.transform(a)+", "+qc.transform(s)+", "+Xr(Wr.transform(l))+")"};function aS(n){let a="",s="",l="",c="";return n.length>5?(a=n.substring(1,3),s=n.substring(3,5),l=n.substring(5,7),c=n.substring(7,9)):(a=n.substring(1,2),s=n.substring(2,3),l=n.substring(3,4),c=n.substring(4,5),a+=a,s+=s,l+=l,c+=c),{red:parseInt(a,16),green:parseInt(s,16),blue:parseInt(l,16),alpha:c?parseInt(c,16)/255:1}}const vf={test:ld("#"),parse:aS,transform:Di.transform},ss=n=>({test:a=>typeof a=="string"&&a.endsWith(n)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${n}`}),In=ss("deg"),ln=ss("%"),lt=ss("px"),rS=ss("vh"),sS=ss("vw"),X0={...ln,parse:n=>ln.parse(n)/100,transform:n=>ln.transform(n*100)},wa={test:ld("hsl","hue"),parse:Ky("hue","saturation","lightness"),transform:({hue:n,saturation:a,lightness:s,alpha:l=1})=>"hsla("+Math.round(n)+", "+ln.transform(Xr(a))+", "+ln.transform(Xr(s))+", "+Xr(Wr.transform(l))+")"},Kt={test:n=>Di.test(n)||vf.test(n)||wa.test(n),parse:n=>Di.test(n)?Di.parse(n):wa.test(n)?wa.parse(n):vf.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Di.transform(n):wa.transform(n),getAnimatableNone:n=>{const a=Kt.parse(n);return a.alpha=0,Kt.transform(a)}},lS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function oS(n){return isNaN(n)&&typeof n=="string"&&(n.match(sd)?.length||0)+(n.match(lS)?.length||0)>0}const Qy="number",Zy="color",uS="var",cS="var(",P0="${}",fS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ir(n){const a=n.toString(),s=[],l={color:[],number:[],var:[]},c=[];let d=0;const p=a.replace(fS,m=>(Kt.test(m)?(l.color.push(d),c.push(Zy),s.push(Kt.parse(m))):m.startsWith(cS)?(l.var.push(d),c.push(uS),s.push(m)):(l.number.push(d),c.push(Qy),s.push(parseFloat(m))),++d,P0)).split(P0);return{values:s,split:p,indexes:l,types:c}}function Fy(n){return Ir(n).values}function Jy(n){const{split:a,types:s}=Ir(n),l=a.length;return c=>{let d="";for(let f=0;f<l;f++)if(d+=a[f],c[f]!==void 0){const p=s[f];p===Qy?d+=Xr(c[f]):p===Zy?d+=Kt.transform(c[f]):d+=c[f]}return d}}const dS=n=>typeof n=="number"?0:Kt.test(n)?Kt.getAnimatableNone(n):n;function hS(n){const a=Fy(n);return Jy(n)(a.map(dS))}const ni={test:oS,parse:Fy,createTransformer:Jy,getAnimatableNone:hS};function Xc(n,a,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(a-n)*6*s:s<1/2?a:s<2/3?n+(a-n)*(2/3-s)*6:n}function mS({hue:n,saturation:a,lightness:s,alpha:l}){n/=360,a/=100,s/=100;let c=0,d=0,f=0;if(!a)c=d=f=s;else{const p=s<.5?s*(1+a):s+a-s*a,m=2*s-p;c=Xc(m,p,n+1/3),d=Xc(m,p,n),f=Xc(m,p,n-1/3)}return{red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:l}}function no(n,a){return s=>s>0?a:n}const Nt=(n,a,s)=>n+(a-n)*s,Pc=(n,a,s)=>{const l=n*n,c=s*(a*a-l)+l;return c<0?0:Math.sqrt(c)},pS=[vf,Di,wa],gS=n=>pS.find(a=>a.test(n));function K0(n){const a=gS(n);if(!a)return!1;let s=a.parse(n);return a===wa&&(s=mS(s)),s}const Q0=(n,a)=>{const s=K0(n),l=K0(a);if(!s||!l)return no(n,a);const c={...s};return d=>(c.red=Pc(s.red,l.red,d),c.green=Pc(s.green,l.green,d),c.blue=Pc(s.blue,l.blue,d),c.alpha=Nt(s.alpha,l.alpha,d),Di.transform(c))},bf=new Set(["none","hidden"]);function yS(n,a){return bf.has(n)?s=>s<=0?n:a:s=>s>=1?a:n}function vS(n,a){return s=>Nt(n,a,s)}function od(n){return typeof n=="number"?vS:typeof n=="string"?rd(n)?no:Kt.test(n)?Q0:SS:Array.isArray(n)?$y:typeof n=="object"?Kt.test(n)?Q0:bS:no}function $y(n,a){const s=[...n],l=s.length,c=n.map((d,f)=>od(d)(d,a[f]));return d=>{for(let f=0;f<l;f++)s[f]=c[f](d);return s}}function bS(n,a){const s={...n,...a},l={};for(const c in s)n[c]!==void 0&&a[c]!==void 0&&(l[c]=od(n[c])(n[c],a[c]));return c=>{for(const d in l)s[d]=l[d](c);return s}}function xS(n,a){const s=[],l={color:0,var:0,number:0};for(let c=0;c<a.values.length;c++){const d=a.types[c],f=n.indexes[d][l[d]],p=n.values[f]??0;s[c]=p,l[d]++}return s}const SS=(n,a)=>{const s=ni.createTransformer(a),l=Ir(n),c=Ir(a);return l.indexes.var.length===c.indexes.var.length&&l.indexes.color.length===c.indexes.color.length&&l.indexes.number.length>=c.indexes.number.length?bf.has(n)&&!c.values.length||bf.has(a)&&!l.values.length?yS(n,a):as($y(xS(l,c),c.values),s):no(n,a)};function Wy(n,a,s){return typeof n=="number"&&typeof a=="number"&&typeof s=="number"?Nt(n,a,s):od(n)(n,a)}const TS=n=>{const a=({timestamp:s})=>n(s);return{start:(s=!0)=>zt.update(a,s),stop:()=>ei(a),now:()=>re.isProcessing?re.timestamp:be.now()}},Iy=(n,a,s=10)=>{let l="";const c=Math.max(Math.round(a/s),2);for(let d=0;d<c;d++)l+=Math.round(n(d/(c-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},io=2e4;function ud(n){let a=0;const s=50;let l=n.next(a);for(;!l.done&&a<io;)a+=s,l=n.next(a);return a>=io?1/0:a}function wS(n,a=100,s){const l=s({...n,keyframes:[0,a]}),c=Math.min(ud(l),io);return{type:"keyframes",ease:d=>l.next(c*d).value/a,duration:sn(c)}}const AS=5;function tv(n,a,s){const l=Math.max(a-AS,0);return Vy(s-n(l),a-l)}const Ut={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Kc=.001;function ES({duration:n=Ut.duration,bounce:a=Ut.bounce,velocity:s=Ut.velocity,mass:l=Ut.mass}){let c,d,f=1-a;f=Dn(Ut.minDamping,Ut.maxDamping,f),n=Dn(Ut.minDuration,Ut.maxDuration,sn(n)),f<1?(c=g=>{const y=g*f,x=y*n,S=y-s,j=xf(g,f),z=Math.exp(-x);return Kc-S/j*z},d=g=>{const x=g*f*n,S=x*s+s,j=Math.pow(f,2)*Math.pow(g,2)*n,z=Math.exp(-x),H=xf(Math.pow(g,2),f);return(-c(g)+Kc>0?-1:1)*((S-j)*z)/H}):(c=g=>{const y=Math.exp(-g*n),x=(g-s)*n+1;return-Kc+y*x},d=g=>{const y=Math.exp(-g*n),x=(s-g)*(n*n);return y*x});const p=5/n,m=MS(c,d,p);if(n=rn(n),isNaN(m))return{stiffness:Ut.stiffness,damping:Ut.damping,duration:n};{const g=Math.pow(m,2)*l;return{stiffness:g,damping:f*2*Math.sqrt(l*g),duration:n}}}const DS=12;function MS(n,a,s){let l=s;for(let c=1;c<DS;c++)l=l-n(l)/a(l);return l}function xf(n,a){return n*Math.sqrt(1-a*a)}const CS=["duration","bounce"],jS=["stiffness","damping","mass"];function Z0(n,a){return a.some(s=>n[s]!==void 0)}function RS(n){let a={velocity:Ut.velocity,stiffness:Ut.stiffness,damping:Ut.damping,mass:Ut.mass,isResolvedFromDuration:!1,...n};if(!Z0(n,jS)&&Z0(n,CS))if(n.visualDuration){const s=n.visualDuration,l=2*Math.PI/(s*1.2),c=l*l,d=2*Dn(.05,1,1-(n.bounce||0))*Math.sqrt(c);a={...a,mass:Ut.mass,stiffness:c,damping:d}}else{const s=ES(n);a={...a,...s,mass:Ut.mass},a.isResolvedFromDuration=!0}return a}function ao(n=Ut.visualDuration,a=Ut.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:a}:n;let{restSpeed:l,restDelta:c}=s;const d=s.keyframes[0],f=s.keyframes[s.keyframes.length-1],p={done:!1,value:d},{stiffness:m,damping:g,mass:y,duration:x,velocity:S,isResolvedFromDuration:j}=RS({...s,velocity:-sn(s.velocity||0)}),z=S||0,H=g/(2*Math.sqrt(m*y)),P=f-d,Y=sn(Math.sqrt(m/y)),q=Math.abs(P)<5;l||(l=q?Ut.restSpeed.granular:Ut.restSpeed.default),c||(c=q?Ut.restDelta.granular:Ut.restDelta.default);let L;if(H<1){const k=xf(Y,H);L=K=>{const X=Math.exp(-H*Y*K);return f-X*((z+H*Y*P)/k*Math.sin(k*K)+P*Math.cos(k*K))}}else if(H===1)L=k=>f-Math.exp(-Y*k)*(P+(z+Y*P)*k);else{const k=Y*Math.sqrt(H*H-1);L=K=>{const X=Math.exp(-H*Y*K),I=Math.min(k*K,300);return f-X*((z+H*Y*P)*Math.sinh(I)+k*P*Math.cosh(I))/k}}const $={calculatedDuration:j&&x||null,next:k=>{const K=L(k);if(j)p.done=k>=x;else{let X=k===0?z:0;H<1&&(X=k===0?rn(z):tv(L,k,K));const I=Math.abs(X)<=l,gt=Math.abs(f-K)<=c;p.done=I&&gt}return p.value=p.done?f:K,p},toString:()=>{const k=Math.min(ud($),io),K=Iy(X=>$.next(k*X).value,k,30);return k+"ms "+K},toTransition:()=>{}};return $}ao.applyToOptions=n=>{const a=wS(n,100,ao);return n.ease=a.ease,n.duration=rn(a.duration),n.type="keyframes",n};function Sf({keyframes:n,velocity:a=0,power:s=.8,timeConstant:l=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:f,min:p,max:m,restDelta:g=.5,restSpeed:y}){const x=n[0],S={done:!1,value:x},j=I=>p!==void 0&&I<p||m!==void 0&&I>m,z=I=>p===void 0?m:m===void 0||Math.abs(p-I)<Math.abs(m-I)?p:m;let H=s*a;const P=x+H,Y=f===void 0?P:f(P);Y!==P&&(H=Y-x);const q=I=>-H*Math.exp(-I/l),L=I=>Y+q(I),$=I=>{const gt=q(I),Rt=L(I);S.done=Math.abs(gt)<=g,S.value=S.done?Y:Rt};let k,K;const X=I=>{j(S.value)&&(k=I,K=ao({keyframes:[S.value,z(S.value)],velocity:tv(L,I,S.value),damping:c,stiffness:d,restDelta:g,restSpeed:y}))};return X(0),{calculatedDuration:null,next:I=>{let gt=!1;return!K&&k===void 0&&(gt=!0,$(I),X(I)),k!==void 0&&I>=k?K.next(I-k):(!gt&&$(I),S)}}}function OS(n,a,s){const l=[],c=s||Mn.mix||Wy,d=n.length-1;for(let f=0;f<d;f++){let p=c(n[f],n[f+1]);if(a){const m=Array.isArray(a)?a[f]||qe:a;p=as(m,p)}l.push(p)}return l}function zS(n,a,{clamp:s=!0,ease:l,mixer:c}={}){const d=n.length;if(If(d===a.length),d===1)return()=>a[0];if(d===2&&a[0]===a[1])return()=>a[1];const f=n[0]===n[1];n[0]>n[d-1]&&(n=[...n].reverse(),a=[...a].reverse());const p=OS(a,l,c),m=p.length,g=y=>{if(f&&y<n[0])return a[0];let x=0;if(m>1)for(;x<n.length-2&&!(y<n[x+1]);x++);const S=$r(n[x],n[x+1],y);return p[x](S)};return s?y=>g(Dn(n[0],n[d-1],y)):g}function VS(n,a){const s=n[n.length-1];for(let l=1;l<=a;l++){const c=$r(0,a,l);n.push(Nt(s,1,c))}}function NS(n){const a=[0];return VS(a,n.length-1),a}function _S(n,a){return n.map(s=>s*a)}function BS(n,a){return n.map(()=>a||Gy).splice(0,n.length-1)}function Pr({duration:n=300,keyframes:a,times:s,ease:l="easeInOut"}){const c=Q5(l)?l.map(q0):q0(l),d={done:!1,value:a[0]},f=_S(s&&s.length===a.length?s:NS(a),n),p=zS(f,a,{ease:Array.isArray(c)?c:BS(a,c)});return{calculatedDuration:n,next:m=>(d.value=p(m),d.done=m>=n,d)}}const US=n=>n!==null;function cd(n,{repeat:a,repeatType:s="loop"},l,c=1){const d=n.filter(US),p=c<0||a&&s!=="loop"&&a%2===1?0:d.length-1;return!p||l===void 0?d[p]:l}const LS={decay:Sf,inertia:Sf,tween:Pr,keyframes:Pr,spring:ao};function ev(n){typeof n.type=="string"&&(n.type=LS[n.type])}class fd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,s){return this.finished.then(a,s)}}const kS=n=>n/100;class dd extends fd{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:s}=this.options;s&&s.updatedAt!==be.now()&&this.tick(be.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;ev(a);const{type:s=Pr,repeat:l=0,repeatDelay:c=0,repeatType:d,velocity:f=0}=a;let{keyframes:p}=a;const m=s||Pr;m!==Pr&&typeof p[0]!="number"&&(this.mixKeyframes=as(kS,Wy(p[0],p[1])),p=[0,100]);const g=m({...a,keyframes:p});d==="mirror"&&(this.mirroredGenerator=m({...a,keyframes:[...p].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=ud(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(l+1)-c,this.generator=g}updateTime(a){const s=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(a,s=!1){const{generator:l,totalDuration:c,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:m}=this;if(this.startTime===null)return l.next(0);const{delay:g=0,keyframes:y,repeat:x,repeatType:S,repeatDelay:j,type:z,onUpdate:H,finalKeyframe:P}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-c/this.speed,this.startTime)),s?this.currentTime=a:this.updateTime(a);const Y=this.currentTime-g*(this.playbackSpeed>=0?1:-1),q=this.playbackSpeed>=0?Y<0:Y>c;this.currentTime=Math.max(Y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,$=l;if(x){const I=Math.min(this.currentTime,c)/p;let gt=Math.floor(I),Rt=I%1;!Rt&&I>=1&&(Rt=1),Rt===1&&gt--,gt=Math.min(gt,x+1),!!(gt%2)&&(S==="reverse"?(Rt=1-Rt,j&&(Rt-=j/p)):S==="mirror"&&($=f)),L=Dn(0,1,Rt)*p}const k=q?{done:!1,value:y[0]}:$.next(L);d&&(k.value=d(k.value));let{done:K}=k;!q&&m!==null&&(K=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const X=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&K);return X&&z!==Sf&&(k.value=cd(y,this.options,P,this.speed)),H&&H(k.value),X&&this.finish(),k}then(a,s){return this.finished.then(a,s)}get duration(){return sn(this.calculatedDuration)}get time(){return sn(this.currentTime)}set time(a){a=rn(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(a){this.updateTime(be.now());const s=this.playbackSpeed!==a;this.playbackSpeed=a,s&&(this.time=sn(this.currentTime))}play(){if(this.isStopped)return;const{driver:a=TS,startTime:s}=this.options;this.driver||(this.driver=a(c=>this.tick(c))),this.options.onPlay?.();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=s??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(be.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),a.observe(this)}}function HS(n){for(let a=1;a<n.length;a++)n[a]??(n[a]=n[a-1])}const Mi=n=>n*180/Math.PI,Tf=n=>{const a=Mi(Math.atan2(n[1],n[0]));return wf(a)},YS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Tf,rotateZ:Tf,skewX:n=>Mi(Math.atan(n[1])),skewY:n=>Mi(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},wf=n=>(n=n%360,n<0&&(n+=360),n),F0=Tf,J0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),$0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),GS={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:J0,scaleY:$0,scale:n=>(J0(n)+$0(n))/2,rotateX:n=>wf(Mi(Math.atan2(n[6],n[5]))),rotateY:n=>wf(Mi(Math.atan2(-n[2],n[0]))),rotateZ:F0,rotate:F0,skewX:n=>Mi(Math.atan(n[4])),skewY:n=>Mi(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Af(n){return n.includes("scale")?1:0}function Ef(n,a){if(!n||n==="none")return Af(a);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,c;if(s)l=GS,c=s;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=YS,c=p}if(!c)return Af(a);const d=l[a],f=c[1].split(",").map(XS);return typeof d=="function"?d(f):f[d]}const qS=(n,a)=>{const{transform:s="none"}=getComputedStyle(n);return Ef(s,a)};function XS(n){return parseFloat(n.trim())}const La=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ka=new Set(La),W0=n=>n===Ua||n===lt,PS=new Set(["x","y","z"]),KS=La.filter(n=>!PS.has(n));function QS(n){const a=[];return KS.forEach(s=>{const l=n.getValue(s);l!==void 0&&(a.push([s,l.get()]),l.set(s.startsWith("scale")?1:0))}),a}const ji={width:({x:n},{paddingLeft:a="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(a)-parseFloat(s),height:({y:n},{paddingTop:a="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(a)-parseFloat(s),top:(n,{top:a})=>parseFloat(a),left:(n,{left:a})=>parseFloat(a),bottom:({y:n},{top:a})=>parseFloat(a)+(n.max-n.min),right:({x:n},{left:a})=>parseFloat(a)+(n.max-n.min),x:(n,{transform:a})=>Ef(a,"x"),y:(n,{transform:a})=>Ef(a,"y")};ji.translateX=ji.x;ji.translateY=ji.y;const Ri=new Set;let Df=!1,Mf=!1,Cf=!1;function nv(){if(Mf){const n=Array.from(Ri).filter(l=>l.needsMeasurement),a=new Set(n.map(l=>l.element)),s=new Map;a.forEach(l=>{const c=QS(l);c.length&&(s.set(l,c),l.render())}),n.forEach(l=>l.measureInitialState()),a.forEach(l=>{l.render();const c=s.get(l);c&&c.forEach(([d,f])=>{l.getValue(d)?.set(f)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Mf=!1,Df=!1,Ri.forEach(n=>n.complete(Cf)),Ri.clear()}function iv(){Ri.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Mf=!0)})}function ZS(){Cf=!0,iv(),nv(),Cf=!1}class hd{constructor(a,s,l,c,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=s,this.name=l,this.motionValue=c,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Ri.add(this),Df||(Df=!0,zt.read(iv),zt.resolveKeyframes(nv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:s,element:l,motionValue:c}=this;if(a[0]===null){const d=c?.get(),f=a[a.length-1];if(d!==void 0)a[0]=d;else if(l&&s){const p=l.readValue(s,f);p!=null&&(a[0]=p)}a[0]===void 0&&(a[0]=f),c&&d===void 0&&c.set(a[0])}HS(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),Ri.delete(this)}cancel(){this.state==="scheduled"&&(Ri.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const FS=n=>n.startsWith("--");function JS(n,a,s){FS(a)?n.style.setProperty(a,s):n.style[a]=s}const $S=td(()=>window.ScrollTimeline!==void 0),WS={};function IS(n,a){const s=td(n);return()=>WS[a]??s()}const av=IS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Gr=([n,a,s,l])=>`cubic-bezier(${n}, ${a}, ${s}, ${l})`,I0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Gr([0,.65,.55,1]),circOut:Gr([.55,0,1,.45]),backIn:Gr([.31,.01,.66,-.59]),backOut:Gr([.33,1.53,.69,.99])};function rv(n,a){if(n)return typeof n=="function"?av()?Iy(n,a):"ease-out":qy(n)?Gr(n):Array.isArray(n)?n.map(s=>rv(s,a)||I0.easeOut):I0[n]}function t2(n,a,s,{delay:l=0,duration:c=300,repeat:d=0,repeatType:f="loop",ease:p="easeOut",times:m}={},g=void 0){const y={[a]:s};m&&(y.offset=m);const x=rv(p,c);Array.isArray(x)&&(y.easing=x);const S={delay:l,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),n.animate(y,S)}function sv(n){return typeof n=="function"&&"applyToOptions"in n}function e2({type:n,...a}){return sv(n)&&av()?n.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class n2 extends fd{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,!a)return;const{element:s,name:l,keyframes:c,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:p,onComplete:m}=a;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=a,If(typeof a.type!="string");const g=e2(a);this.animation=t2(s,l,c,g,d),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=cd(c,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):JS(s,l,y),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const a=this.animation.effect?.getComputedTiming?.().duration||0;return sn(Number(a))}get time(){return sn(Number(this.animation.currentTime)||0)}set time(a){this.finishedTime=null,this.animation.currentTime=rn(a)}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(a){this.animation.startTime=a}attachTimeline({timeline:a,observe:s}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,a&&$S()?(this.animation.timeline=a,qe):s(this)}}const lv={anticipate:ky,backInOut:Ly,circInOut:Yy};function i2(n){return n in lv}function a2(n){typeof n.ease=="string"&&i2(n.ease)&&(n.ease=lv[n.ease])}const tg=10;class r2 extends n2{constructor(a){a2(a),ev(a),super(a),a.startTime&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:s,onUpdate:l,onComplete:c,element:d,...f}=this.options;if(!s)return;if(a!==void 0){s.set(a);return}const p=new dd({...f,autoplay:!1}),m=rn(this.finishedTime??this.time);s.setWithVelocity(p.sample(m-tg).value,p.sample(m).value,tg),p.stop()}}const eg=(n,a)=>a==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ni.test(n)||n==="0")&&!n.startsWith("url("));function s2(n){const a=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==a)return!0}function l2(n,a,s,l){const c=n[0];if(c===null)return!1;if(a==="display"||a==="visibility")return!0;const d=n[n.length-1],f=eg(c,a),p=eg(d,a);return!f||!p?!1:s2(n)||(s==="spring"||sv(s))&&l}function jf(n){n.duration=0,n.type}const o2=new Set(["opacity","clipPath","filter","transform"]),u2=td(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function c2(n){const{motionValue:a,name:s,repeatDelay:l,repeatType:c,damping:d,type:f}=n;if(!(a?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:g}=a.owner.getProps();return u2()&&s&&o2.has(s)&&(s!=="transform"||!g)&&!m&&!l&&c!=="mirror"&&d!==0&&f!=="inertia"}const f2=40;class d2 extends fd{constructor({autoplay:a=!0,delay:s=0,type:l="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:f="loop",keyframes:p,name:m,motionValue:g,element:y,...x}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=be.now();const S={autoplay:a,delay:s,type:l,repeat:c,repeatDelay:d,repeatType:f,name:m,motionValue:g,element:y,...x},j=y?.KeyframeResolver||hd;this.keyframeResolver=new j(p,(z,H,P)=>this.onKeyframesResolved(z,H,S,!P),m,g,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(a,s,l,c){this.keyframeResolver=void 0;const{name:d,type:f,velocity:p,delay:m,isHandoff:g,onUpdate:y}=l;this.resolvedAt=be.now(),l2(a,d,f,p)||((Mn.instantAnimations||!m)&&y?.(cd(a,l,s)),a[0]=a[a.length-1],jf(l),l.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>f2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...l,keyframes:a},j=!g&&c2(S)?new r2({...S,element:S.motionValue.owner.current}):new dd(S);j.finished.then(()=>this.notifyFinished()).catch(qe),this.pendingTimeline&&(this.stopTimeline=j.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=j}get finished(){return this._animation?this.animation.finished:this._finished}then(a,s){return this.finished.finally(a).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ZS()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const h2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function m2(n){const a=h2.exec(n);if(!a)return[,];const[,s,l,c]=a;return[`--${s??l}`,c]}function ov(n,a,s=1){const[l,c]=m2(n);if(!l)return;const d=window.getComputedStyle(a).getPropertyValue(l);if(d){const f=d.trim();return Ry(f)?parseFloat(f):f}return rd(c)?ov(c,a,s+1):c}function md(n,a){return n?.[a]??n?.default??n}const uv=new Set(["width","height","top","left","right","bottom",...La]),p2={test:n=>n==="auto",parse:n=>n},cv=n=>a=>a.test(n),fv=[Ua,lt,ln,In,sS,rS,p2],ng=n=>fv.find(cv(n));function g2(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||zy(n):!0}const y2=new Set(["brightness","contrast","saturate","opacity"]);function v2(n){const[a,s]=n.slice(0,-1).split("(");if(a==="drop-shadow")return n;const[l]=s.match(sd)||[];if(!l)return n;const c=s.replace(l,"");let d=y2.has(a)?1:0;return l!==s&&(d*=100),a+"("+d+c+")"}const b2=/\b([a-z-]*)\(.*?\)/gu,Rf={...ni,getAnimatableNone:n=>{const a=n.match(b2);return a?a.map(v2).join(" "):n}},ig={...Ua,transform:Math.round},x2={rotate:In,rotateX:In,rotateY:In,rotateZ:In,scale:El,scaleX:El,scaleY:El,scaleZ:El,skew:In,skewX:In,skewY:In,distance:lt,translateX:lt,translateY:lt,translateZ:lt,x:lt,y:lt,z:lt,perspective:lt,transformPerspective:lt,opacity:Wr,originX:X0,originY:X0,originZ:lt},pd={borderWidth:lt,borderTopWidth:lt,borderRightWidth:lt,borderBottomWidth:lt,borderLeftWidth:lt,borderRadius:lt,radius:lt,borderTopLeftRadius:lt,borderTopRightRadius:lt,borderBottomRightRadius:lt,borderBottomLeftRadius:lt,width:lt,maxWidth:lt,height:lt,maxHeight:lt,top:lt,right:lt,bottom:lt,left:lt,padding:lt,paddingTop:lt,paddingRight:lt,paddingBottom:lt,paddingLeft:lt,margin:lt,marginTop:lt,marginRight:lt,marginBottom:lt,marginLeft:lt,backgroundPositionX:lt,backgroundPositionY:lt,...x2,zIndex:ig,fillOpacity:Wr,strokeOpacity:Wr,numOctaves:ig},S2={...pd,color:Kt,backgroundColor:Kt,outlineColor:Kt,fill:Kt,stroke:Kt,borderColor:Kt,borderTopColor:Kt,borderRightColor:Kt,borderBottomColor:Kt,borderLeftColor:Kt,filter:Rf,WebkitFilter:Rf},dv=n=>S2[n];function hv(n,a){let s=dv(n);return s!==Rf&&(s=ni),s.getAnimatableNone?s.getAnimatableNone(a):void 0}const T2=new Set(["auto","none","0"]);function w2(n,a,s){let l=0,c;for(;l<n.length&&!c;){const d=n[l];typeof d=="string"&&!T2.has(d)&&Ir(d).values.length&&(c=n[l]),l++}if(c&&s)for(const d of a)n[d]=hv(s,c)}class A2 extends hd{constructor(a,s,l,c,d){super(a,s,l,c,d,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:s,name:l}=this;if(!s||!s.current)return;super.readKeyframes();for(let m=0;m<a.length;m++){let g=a[m];if(typeof g=="string"&&(g=g.trim(),rd(g))){const y=ov(g,s.current);y!==void 0&&(a[m]=y),m===a.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!uv.has(l)||a.length!==2)return;const[c,d]=a,f=ng(c),p=ng(d);if(f!==p)if(W0(f)&&W0(p))for(let m=0;m<a.length;m++){const g=a[m];typeof g=="string"&&(a[m]=parseFloat(g))}else ji[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:s}=this,l=[];for(let c=0;c<a.length;c++)(a[c]===null||g2(a[c]))&&l.push(c);l.length&&w2(a,l,s)}measureInitialState(){const{element:a,unresolvedKeyframes:s,name:l}=this;if(!a||!a.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ji[l](a.measureViewportBox(),window.getComputedStyle(a.current)),s[0]=this.measuredOrigin;const c=s[s.length-1];c!==void 0&&a.getValue(l,c).jump(c,!1)}measureEndState(){const{element:a,name:s,unresolvedKeyframes:l}=this;if(!a||!a.current)return;const c=a.getValue(s);c&&c.jump(this.measuredOrigin,!1);const d=l.length-1,f=l[d];l[d]=ji[s](a.measureViewportBox(),window.getComputedStyle(a.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,m])=>{a.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function E2(n,a,s){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let l=document;const c=s?.[n]??l.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n)}const mv=(n,a)=>a&&typeof n=="number"?a.transform(n):n;function pv(n){return Oy(n)&&"offsetHeight"in n}const ag=30,D2=n=>!isNaN(parseFloat(n));class M2{constructor(a,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{const c=be.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(a),this.owner=s.owner}setCurrent(a){this.current=a,this.updatedAt=be.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=D2(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,s){this.events[a]||(this.events[a]=new ed);const l=this.events[a].add(s);return a==="change"?()=>{l(),zt.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,s){this.passiveEffect=a,this.stopPassiveEffect=s}set(a){this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a)}setWithVelocity(a,s,l){this.set(s),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-l}jump(a,s=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const a=be.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>ag)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,ag);return Vy(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(a){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=a(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Na(n,a){return new M2(n,a)}const{schedule:gd}=Xy(queueMicrotask,!1),Fe={x:!1,y:!1};function gv(){return Fe.x||Fe.y}function C2(n){return n==="x"||n==="y"?Fe[n]?null:(Fe[n]=!0,()=>{Fe[n]=!1}):Fe.x||Fe.y?null:(Fe.x=Fe.y=!0,()=>{Fe.x=Fe.y=!1})}function yv(n,a){const s=E2(n),l=new AbortController,c={passive:!0,...a,signal:l.signal};return[s,c,()=>l.abort()]}function rg(n){return!(n.pointerType==="touch"||gv())}function j2(n,a,s={}){const[l,c,d]=yv(n,s),f=p=>{if(!rg(p))return;const{target:m}=p,g=a(m,p);if(typeof g!="function"||!m)return;const y=x=>{rg(x)&&(g(x),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,c)};return l.forEach(p=>{p.addEventListener("pointerenter",f,c)}),d}const vv=(n,a)=>a?n===a?!0:vv(n,a.parentElement):!1,yd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,R2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function O2(n){return R2.has(n.tagName)||n.tabIndex!==-1}const Fl=new WeakSet;function sg(n){return a=>{a.key==="Enter"&&n(a)}}function Qc(n,a){n.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const z2=(n,a)=>{const s=n.currentTarget;if(!s)return;const l=sg(()=>{if(Fl.has(s))return;Qc(s,"down");const c=sg(()=>{Qc(s,"up")}),d=()=>Qc(s,"cancel");s.addEventListener("keyup",c,a),s.addEventListener("blur",d,a)});s.addEventListener("keydown",l,a),s.addEventListener("blur",()=>s.removeEventListener("keydown",l),a)};function lg(n){return yd(n)&&!gv()}function V2(n,a,s={}){const[l,c,d]=yv(n,s),f=p=>{const m=p.currentTarget;if(!lg(p))return;Fl.add(m);const g=a(m,p),y=(j,z)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",S),Fl.has(m)&&Fl.delete(m),lg(j)&&typeof g=="function"&&g(j,{success:z})},x=j=>{y(j,m===window||m===document||s.useGlobalTarget||vv(m,j.target))},S=j=>{y(j,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",S,c)};return l.forEach(p=>{(s.useGlobalTarget?window:p).addEventListener("pointerdown",f,c),pv(p)&&(p.addEventListener("focus",g=>z2(g,c)),!O2(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),d}function bv(n){return Oy(n)&&"ownerSVGElement"in n}function N2(n){return bv(n)&&n.tagName==="svg"}const fe=n=>!!(n&&n.getVelocity),_2=[...fv,Kt,ni],B2=n=>_2.find(cv(n)),vd=J.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class U2 extends J.Component{getSnapshotBeforeUpdate(a){const s=this.props.childRef.current;if(s&&a.isPresent&&!this.props.isPresent){const l=s.offsetParent,c=pv(l)&&l.offsetWidth||0,d=this.props.sizeRef.current;d.height=s.offsetHeight||0,d.width=s.offsetWidth||0,d.top=s.offsetTop,d.left=s.offsetLeft,d.right=c-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function L2({children:n,isPresent:a,anchorX:s,root:l}){const c=J.useId(),d=J.useRef(null),f=J.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=J.useContext(vd);return J.useInsertionEffect(()=>{const{width:m,height:g,top:y,left:x,right:S}=f.current;if(a||!d.current||!m||!g)return;const j=s==="left"?`left: ${x}`:`right: ${S}`;d.current.dataset.motionPopId=c;const z=document.createElement("style");p&&(z.nonce=p);const H=l??document.head;return H.appendChild(z),z.sheet&&z.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${g}px !important;
            ${j}px !important;
            top: ${y}px !important;
          }
        `),()=>{H.contains(z)&&H.removeChild(z)}},[a]),b.jsx(U2,{isPresent:a,childRef:d,sizeRef:f,children:J.cloneElement(n,{ref:d})})}const k2=({children:n,initial:a,isPresent:s,onExitComplete:l,custom:c,presenceAffectsLayout:d,mode:f,anchorX:p,root:m})=>{const g=Ff(H2),y=J.useId();let x=!0,S=J.useMemo(()=>(x=!1,{id:y,initial:a,isPresent:s,custom:c,onExitComplete:j=>{g.set(j,!0);for(const z of g.values())if(!z)return;l&&l()},register:j=>(g.set(j,!1),()=>g.delete(j))}),[s,g,l]);return d&&x&&(S={...S}),J.useMemo(()=>{g.forEach((j,z)=>g.set(z,!1))},[s]),J.useEffect(()=>{!s&&!g.size&&l&&l()},[s]),f==="popLayout"&&(n=b.jsx(L2,{isPresent:s,anchorX:p,root:m,children:n})),b.jsx(mo.Provider,{value:S,children:n})};function H2(){return new Map}function xv(n=!0){const a=J.useContext(mo);if(a===null)return[!0,null];const{isPresent:s,onExitComplete:l,register:c}=a,d=J.useId();J.useEffect(()=>{if(n)return c(d)},[n]);const f=J.useCallback(()=>n&&l&&l(d),[d,l,n]);return!s&&l?[!1,f]:[!0]}const Dl=n=>n.key||"";function og(n){const a=[];return J.Children.forEach(n,s=>{J.isValidElement(s)&&a.push(s)}),a}const po=({children:n,custom:a,initial:s=!0,onExitComplete:l,presenceAffectsLayout:c=!0,mode:d="sync",propagate:f=!1,anchorX:p="left",root:m})=>{const[g,y]=xv(f),x=J.useMemo(()=>og(n),[n]),S=f&&!g?[]:x.map(Dl),j=J.useRef(!0),z=J.useRef(x),H=Ff(()=>new Map),[P,Y]=J.useState(x),[q,L]=J.useState(x);jy(()=>{j.current=!1,z.current=x;for(let K=0;K<q.length;K++){const X=Dl(q[K]);S.includes(X)?H.delete(X):H.get(X)!==!0&&H.set(X,!1)}},[q,S.length,S.join("-")]);const $=[];if(x!==P){let K=[...x];for(let X=0;X<q.length;X++){const I=q[X],gt=Dl(I);S.includes(gt)||(K.splice(X,0,I),$.push(I))}return d==="wait"&&$.length&&(K=$),L(og(K)),Y(x),null}const{forceRender:k}=J.useContext(Zf);return b.jsx(b.Fragment,{children:q.map(K=>{const X=Dl(K),I=f&&!g?!1:x===q||S.includes(X),gt=()=>{if(H.has(X))H.set(X,!0);else return;let Rt=!0;H.forEach(qt=>{qt||(Rt=!1)}),Rt&&(k?.(),L(z.current),f&&y?.(),l&&l())};return b.jsx(k2,{isPresent:I,initial:!j.current||s?void 0:!1,custom:a,presenceAffectsLayout:c,mode:d,root:m,onExitComplete:I?void 0:gt,anchorX:p,children:K},X)})})},Sv=J.createContext({strict:!1}),ug={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},_a={};for(const n in ug)_a[n]={isEnabled:a=>ug[n].some(s=>!!a[s])};function Y2(n){for(const a in n)_a[a]={..._a[a],...n[a]}}const G2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ro(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||G2.has(n)}let Tv=n=>!ro(n);function q2(n){typeof n=="function"&&(Tv=a=>a.startsWith("on")?!ro(a):n(a))}try{q2(require("@emotion/is-prop-valid").default)}catch{}function X2(n,a,s){const l={};for(const c in n)c==="values"&&typeof n.values=="object"||(Tv(c)||s===!0&&ro(c)||!a&&!ro(c)||n.draggable&&c.startsWith("onDrag"))&&(l[c]=n[c]);return l}const go=J.createContext({});function yo(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ts(n){return typeof n=="string"||Array.isArray(n)}const bd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],xd=["initial",...bd];function vo(n){return yo(n.animate)||xd.some(a=>ts(n[a]))}function wv(n){return!!(vo(n)||n.variants)}function P2(n,a){if(vo(n)){const{initial:s,animate:l}=n;return{initial:s===!1||ts(s)?s:void 0,animate:ts(l)?l:void 0}}return n.inherit!==!1?a:{}}function K2(n){const{initial:a,animate:s}=P2(n,J.useContext(go));return J.useMemo(()=>({initial:a,animate:s}),[cg(a),cg(s)])}function cg(n){return Array.isArray(n)?n.join(" "):n}const es={};function Q2(n){for(const a in n)es[a]=n[a],ad(a)&&(es[a].isCSSVariable=!0)}function Av(n,{layout:a,layoutId:s}){return ka.has(n)||n.startsWith("origin")||(a||s!==void 0)&&(!!es[n]||n==="opacity")}const Z2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},F2=La.length;function J2(n,a,s){let l="",c=!0;for(let d=0;d<F2;d++){const f=La[d],p=n[f];if(p===void 0)continue;let m=!0;if(typeof p=="number"?m=p===(f.startsWith("scale")?1:0):m=parseFloat(p)===0,!m||s){const g=mv(p,pd[f]);if(!m){c=!1;const y=Z2[f]||f;l+=`${y}(${g}) `}s&&(a[f]=g)}}return l=l.trim(),s?l=s(a,c?"":l):c&&(l="none"),l}function Sd(n,a,s){const{style:l,vars:c,transformOrigin:d}=n;let f=!1,p=!1;for(const m in a){const g=a[m];if(ka.has(m)){f=!0;continue}else if(ad(m)){c[m]=g;continue}else{const y=mv(g,pd[m]);m.startsWith("origin")?(p=!0,d[m]=y):l[m]=y}}if(a.transform||(f||s?l.transform=J2(a,n.transform,s):l.transform&&(l.transform="none")),p){const{originX:m="50%",originY:g="50%",originZ:y=0}=d;l.transformOrigin=`${m} ${g} ${y}`}}const Td=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ev(n,a,s){for(const l in a)!fe(a[l])&&!Av(l,s)&&(n[l]=a[l])}function $2({transformTemplate:n},a){return J.useMemo(()=>{const s=Td();return Sd(s,a,n),Object.assign({},s.vars,s.style)},[a])}function W2(n,a){const s=n.style||{},l={};return Ev(l,s,n),Object.assign(l,$2(n,a)),l}function I2(n,a){const s={},l=W2(n,a);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=l,s}const tT={offset:"stroke-dashoffset",array:"stroke-dasharray"},eT={offset:"strokeDashoffset",array:"strokeDasharray"};function nT(n,a,s=1,l=0,c=!0){n.pathLength=1;const d=c?tT:eT;n[d.offset]=lt.transform(-l);const f=lt.transform(a),p=lt.transform(s);n[d.array]=`${f} ${p}`}function Dv(n,{attrX:a,attrY:s,attrScale:l,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...p},m,g,y){if(Sd(n,p,g),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:S}=n;x.transform&&(S.transform=x.transform,delete x.transform),(S.transform||x.transformOrigin)&&(S.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),S.transform&&(S.transformBox=y?.transformBox??"fill-box",delete x.transformBox),a!==void 0&&(x.x=a),s!==void 0&&(x.y=s),l!==void 0&&(x.scale=l),c!==void 0&&nT(x,c,d,f,!1)}const Mv=()=>({...Td(),attrs:{}}),Cv=n=>typeof n=="string"&&n.toLowerCase()==="svg";function iT(n,a,s,l){const c=J.useMemo(()=>{const d=Mv();return Dv(d,a,Cv(l),n.transformTemplate,n.style),{...d.attrs,style:{...d.style}}},[a]);if(n.style){const d={};Ev(d,n.style,n),c.style={...d,...c.style}}return c}const aT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function wd(n){return typeof n!="string"||n.includes("-")?!1:!!(aT.indexOf(n)>-1||/[A-Z]/u.test(n))}function rT(n,a,s,{latestValues:l},c,d=!1){const p=(wd(n)?iT:I2)(a,l,c,n),m=X2(a,typeof n=="string",d),g=n!==J.Fragment?{...m,...p,ref:s}:{},{children:y}=a,x=J.useMemo(()=>fe(y)?y.get():y,[y]);return J.createElement(n,{...g,children:x})}function fg(n){const a=[{},{}];return n?.values.forEach((s,l)=>{a[0][l]=s.get(),a[1][l]=s.getVelocity()}),a}function Ad(n,a,s,l){if(typeof a=="function"){const[c,d]=fg(l);a=a(s!==void 0?s:n.custom,c,d)}if(typeof a=="string"&&(a=n.variants&&n.variants[a]),typeof a=="function"){const[c,d]=fg(l);a=a(s!==void 0?s:n.custom,c,d)}return a}function Jl(n){return fe(n)?n.get():n}function sT({scrapeMotionValuesFromProps:n,createRenderState:a},s,l,c){return{latestValues:lT(s,l,c,n),renderState:a()}}function lT(n,a,s,l){const c={},d=l(n,{});for(const S in d)c[S]=Jl(d[S]);let{initial:f,animate:p}=n;const m=vo(n),g=wv(n);a&&g&&!m&&n.inherit!==!1&&(f===void 0&&(f=a.initial),p===void 0&&(p=a.animate));let y=s?s.initial===!1:!1;y=y||f===!1;const x=y?p:f;if(x&&typeof x!="boolean"&&!yo(x)){const S=Array.isArray(x)?x:[x];for(let j=0;j<S.length;j++){const z=Ad(n,S[j]);if(z){const{transitionEnd:H,transition:P,...Y}=z;for(const q in Y){let L=Y[q];if(Array.isArray(L)){const $=y?L.length-1:0;L=L[$]}L!==null&&(c[q]=L)}for(const q in H)c[q]=H[q]}}}return c}const jv=n=>(a,s)=>{const l=J.useContext(go),c=J.useContext(mo),d=()=>sT(n,a,l,c);return s?d():Ff(d)};function Ed(n,a,s){const{style:l}=n,c={};for(const d in l)(fe(l[d])||a.style&&fe(a.style[d])||Av(d,n)||s?.getValue(d)?.liveStyle!==void 0)&&(c[d]=l[d]);return c}const oT=jv({scrapeMotionValuesFromProps:Ed,createRenderState:Td});function Rv(n,a,s){const l=Ed(n,a,s);for(const c in n)if(fe(n[c])||fe(a[c])){const d=La.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;l[d]=n[c]}return l}const uT=jv({scrapeMotionValuesFromProps:Rv,createRenderState:Mv}),cT=Symbol.for("motionComponentSymbol");function Aa(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function fT(n,a,s){return J.useCallback(l=>{l&&n.onMount&&n.onMount(l),a&&(l?a.mount(l):a.unmount()),s&&(typeof s=="function"?s(l):Aa(s)&&(s.current=l))},[a])}const Dd=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),dT="framerAppearId",Ov="data-"+Dd(dT),zv=J.createContext({});function hT(n,a,s,l,c){const{visualElement:d}=J.useContext(go),f=J.useContext(Sv),p=J.useContext(mo),m=J.useContext(vd).reducedMotion,g=J.useRef(null);l=l||f.renderer,!g.current&&l&&(g.current=l(n,{visualState:a,parent:d,props:s,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:m}));const y=g.current,x=J.useContext(zv);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&mT(g.current,s,c,x);const S=J.useRef(!1);J.useInsertionEffect(()=>{y&&S.current&&y.update(s,p)});const j=s[Ov],z=J.useRef(!!j&&!window.MotionHandoffIsComplete?.(j)&&window.MotionHasOptimisedAnimation?.(j));return jy(()=>{y&&(S.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),z.current&&y.animationState&&y.animationState.animateChanges())}),J.useEffect(()=>{y&&(!z.current&&y.animationState&&y.animationState.animateChanges(),z.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(j)}),z.current=!1),y.enteringChildren=void 0)}),y}function mT(n,a,s,l){const{layoutId:c,layout:d,drag:f,dragConstraints:p,layoutScroll:m,layoutRoot:g,layoutCrossfade:y}=a;n.projection=new s(n.latestValues,a["data-framer-portal-id"]?void 0:Vv(n.parent)),n.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!f||p&&Aa(p),visualElement:n,animationType:typeof d=="string"?d:"both",initialPromotionConfig:l,crossfade:y,layoutScroll:m,layoutRoot:g})}function Vv(n){if(n)return n.options.allowProjection!==!1?n.projection:Vv(n.parent)}function Zc(n,{forwardMotionProps:a=!1}={},s,l){s&&Y2(s);const c=wd(n)?uT:oT;function d(p,m){let g;const y={...J.useContext(vd),...p,layoutId:pT(p)},{isStatic:x}=y,S=K2(p),j=c(p,x);if(!x&&Jf){gT();const z=yT(y);g=z.MeasureLayout,S.visualElement=hT(n,j,y,l,z.ProjectionNode)}return b.jsxs(go.Provider,{value:S,children:[g&&S.visualElement?b.jsx(g,{visualElement:S.visualElement,...y}):null,rT(n,p,fT(j,S.visualElement,m),j,x,a)]})}d.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const f=J.forwardRef(d);return f[cT]=n,f}function pT({layoutId:n}){const a=J.useContext(Zf).id;return a&&n!==void 0?a+"-"+n:n}function gT(n,a){J.useContext(Sv).strict}function yT(n){const{drag:a,layout:s}=_a;if(!a&&!s)return{};const l={...a,...s};return{MeasureLayout:a?.isEnabled(n)||s?.isEnabled(n)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}function vT(n,a){if(typeof Proxy>"u")return Zc;const s=new Map,l=(d,f)=>Zc(d,f,n,a),c=(d,f)=>l(d,f);return new Proxy(c,{get:(d,f)=>f==="create"?l:(s.has(f)||s.set(f,Zc(f,void 0,n,a)),s.get(f))})}function Nv({top:n,left:a,right:s,bottom:l}){return{x:{min:a,max:s},y:{min:n,max:l}}}function bT({x:n,y:a}){return{top:a.min,right:n.max,bottom:a.max,left:n.min}}function xT(n,a){if(!a)return n;const s=a({x:n.left,y:n.top}),l=a({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:l.y,right:l.x}}function Fc(n){return n===void 0||n===1}function Of({scale:n,scaleX:a,scaleY:s}){return!Fc(n)||!Fc(a)||!Fc(s)}function Ai(n){return Of(n)||_v(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function _v(n){return dg(n.x)||dg(n.y)}function dg(n){return n&&n!=="0%"}function so(n,a,s){const l=n-s,c=a*l;return s+c}function hg(n,a,s,l,c){return c!==void 0&&(n=so(n,c,l)),so(n,s,l)+a}function zf(n,a=0,s=1,l,c){n.min=hg(n.min,a,s,l,c),n.max=hg(n.max,a,s,l,c)}function Bv(n,{x:a,y:s}){zf(n.x,a.translate,a.scale,a.originPoint),zf(n.y,s.translate,s.scale,s.originPoint)}const mg=.999999999999,pg=1.0000000000001;function ST(n,a,s,l=!1){const c=s.length;if(!c)return;a.x=a.y=1;let d,f;for(let p=0;p<c;p++){d=s[p],f=d.projectionDelta;const{visualElement:m}=d.options;m&&m.props.style&&m.props.style.display==="contents"||(l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Da(n,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(a.x*=f.x.scale,a.y*=f.y.scale,Bv(n,f)),l&&Ai(d.latestValues)&&Da(n,d.latestValues))}a.x<pg&&a.x>mg&&(a.x=1),a.y<pg&&a.y>mg&&(a.y=1)}function Ea(n,a){n.min=n.min+a,n.max=n.max+a}function gg(n,a,s,l,c=.5){const d=Nt(n.min,n.max,c);zf(n,a,s,d,l)}function Da(n,a){gg(n.x,a.x,a.scaleX,a.scale,a.originX),gg(n.y,a.y,a.scaleY,a.scale,a.originY)}function Uv(n,a){return Nv(xT(n.getBoundingClientRect(),a))}function TT(n,a,s){const l=Uv(n,s),{scroll:c}=a;return c&&(Ea(l.x,c.offset.x),Ea(l.y,c.offset.y)),l}const yg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ma=()=>({x:yg(),y:yg()}),vg=()=>({min:0,max:0}),Gt=()=>({x:vg(),y:vg()}),Vf={current:null},Lv={current:!1};function wT(){if(Lv.current=!0,!!Jf)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),a=()=>Vf.current=n.matches;n.addEventListener("change",a),a()}else Vf.current=!1}const AT=new WeakMap;function ET(n,a,s){for(const l in a){const c=a[l],d=s[l];if(fe(c))n.addValue(l,c);else if(fe(d))n.addValue(l,Na(c,{owner:n}));else if(d!==c)if(n.hasValue(l)){const f=n.getValue(l);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=n.getStaticValue(l);n.addValue(l,Na(f!==void 0?f:c,{owner:n}))}}for(const l in s)a[l]===void 0&&n.removeValue(l);return a}const bg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class DT{scrapeMotionValuesFromProps(a,s,l){return{}}constructor({parent:a,props:s,presenceContext:l,reducedMotionConfig:c,blockInitialAnimation:d,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=hd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=be.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,zt.render(this.render,!1,!0))};const{latestValues:m,renderState:g}=f;this.latestValues=m,this.baseTarget={...m},this.initialValues=s.initial?{...m}:{},this.renderState=g,this.parent=a,this.props=s,this.presenceContext=l,this.depth=a?a.depth+1:0,this.reducedMotionConfig=c,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=vo(s),this.isVariantNode=wv(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(s,{},this);for(const S in x){const j=x[S];m[S]!==void 0&&fe(j)&&j.set(m[S])}}mount(a){this.current=a,AT.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,l)=>this.bindToMotionValue(l,s)),Lv.current||wT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Vf.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ei(this.notifyUpdate),ei(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const s=this.features[a];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(a){this.children.add(a),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(a)}removeChild(a){this.children.delete(a),this.enteringChildren&&this.enteringChildren.delete(a)}bindToMotionValue(a,s){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const l=ka.has(a);l&&this.onBindTransform&&this.onBindTransform();const c=s.on("change",f=>{this.latestValues[a]=f,this.props.onUpdate&&zt.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,a,s)),this.valueSubscriptions.set(a,()=>{c(),d&&d(),s.owner&&s.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in _a){const s=_a[a];if(!s)continue;const{isEnabled:l,Feature:c}=s;if(!this.features[a]&&c&&l(this.props)&&(this.features[a]=new c(this)),this.features[a]){const d=this.features[a];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Gt()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,s){this.latestValues[a]=s}update(a,s){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let l=0;l<bg.length;l++){const c=bg[l];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const d="on"+c,f=a[d];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=ET(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(a),()=>s.variantChildren.delete(a)}addValue(a,s){const l=this.values.get(a);s!==l&&(l&&this.removeValue(a),this.bindToMotionValue(a,s),this.values.set(a,s),this.latestValues[a]=s.get())}removeValue(a){this.values.delete(a);const s=this.valueSubscriptions.get(a);s&&(s(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,s){if(this.props.values&&this.props.values[a])return this.props.values[a];let l=this.values.get(a);return l===void 0&&s!==void 0&&(l=Na(s===null?void 0:s,{owner:this}),this.addValue(a,l)),l}readValue(a,s){let l=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return l!=null&&(typeof l=="string"&&(Ry(l)||zy(l))?l=parseFloat(l):!B2(l)&&ni.test(s)&&(l=hv(a,s)),this.setBaseTarget(a,fe(l)?l.get():l)),fe(l)?l.get():l}setBaseTarget(a,s){this.baseTarget[a]=s}getBaseTarget(a){const{initial:s}=this.props;let l;if(typeof s=="string"||typeof s=="object"){const d=Ad(this.props,s,this.presenceContext?.custom);d&&(l=d[a])}if(s&&l!==void 0)return l;const c=this.getBaseTargetFromProps(this.props,a);return c!==void 0&&!fe(c)?c:this.initialValues[a]!==void 0&&l===void 0?void 0:this.baseTarget[a]}on(a,s){return this.events[a]||(this.events[a]=new ed),this.events[a].add(s)}notify(a,...s){this.events[a]&&this.events[a].notify(...s)}scheduleRenderMicrotask(){gd.render(this.render)}}class kv extends DT{constructor(){super(...arguments),this.KeyframeResolver=A2}sortInstanceNodePosition(a,s){return a.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(a,s){return a.style?a.style[s]:void 0}removeValueFromRenderState(a,{vars:s,style:l}){delete s[a],delete l[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;fe(a)&&(this.childSubscription=a.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function Hv(n,{style:a,vars:s},l,c){const d=n.style;let f;for(f in a)d[f]=a[f];c?.applyProjectionStyles(d,l);for(f in s)d.setProperty(f,s[f])}function MT(n){return window.getComputedStyle(n)}class CT extends kv{constructor(){super(...arguments),this.type="html",this.renderInstance=Hv}readValueFromInstance(a,s){if(ka.has(s))return this.projection?.isProjecting?Af(s):qS(a,s);{const l=MT(a),c=(ad(s)?l.getPropertyValue(s):l[s])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(a,{transformPagePoint:s}){return Uv(a,s)}build(a,s,l){Sd(a,s,l.transformTemplate)}scrapeMotionValuesFromProps(a,s,l){return Ed(a,s,l)}}const Yv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function jT(n,a,s,l){Hv(n,a,void 0,l);for(const c in a.attrs)n.setAttribute(Yv.has(c)?c:Dd(c),a.attrs[c])}class RT extends kv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Gt}getBaseTargetFromProps(a,s){return a[s]}readValueFromInstance(a,s){if(ka.has(s)){const l=dv(s);return l&&l.default||0}return s=Yv.has(s)?s:Dd(s),a.getAttribute(s)}scrapeMotionValuesFromProps(a,s,l){return Rv(a,s,l)}build(a,s,l){Dv(a,s,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(a,s,l,c){jT(a,s,l,c)}mount(a){this.isSVGTag=Cv(a.tagName),super.mount(a)}}const OT=(n,a)=>wd(n)?new RT(a):new CT(a,{allowProjection:n!==J.Fragment});function Ca(n,a,s){const l=n.getProps();return Ad(l,a,s!==void 0?s:l.custom,n)}const Nf=n=>Array.isArray(n);function zT(n,a,s){n.hasValue(a)?n.getValue(a).set(s):n.addValue(a,Na(s))}function VT(n){return Nf(n)?n[n.length-1]||0:n}function NT(n,a){const s=Ca(n,a);let{transitionEnd:l={},transition:c={},...d}=s||{};d={...d,...l};for(const f in d){const p=VT(d[f]);zT(n,f,p)}}function _T(n){return!!(fe(n)&&n.add)}function _f(n,a){const s=n.getValue("willChange");if(_T(s))return s.add(a);if(!s&&Mn.WillChange){const l=new Mn.WillChange("auto");n.addValue("willChange",l),l.add(a)}}function Gv(n){return n.props[Ov]}const BT=n=>n!==null;function UT(n,{repeat:a,repeatType:s="loop"},l){const c=n.filter(BT),d=a&&s!=="loop"&&a%2===1?0:c.length-1;return c[d]}const LT={type:"spring",stiffness:500,damping:25,restSpeed:10},kT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),HT={type:"keyframes",duration:.8},YT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},GT=(n,{keyframes:a})=>a.length>2?HT:ka.has(n)?n.startsWith("scale")?kT(a[1]):LT:YT;function qT({when:n,delay:a,delayChildren:s,staggerChildren:l,staggerDirection:c,repeat:d,repeatType:f,repeatDelay:p,from:m,elapsed:g,...y}){return!!Object.keys(y).length}const Md=(n,a,s,l={},c,d)=>f=>{const p=md(l,n)||{},m=p.delay||l.delay||0;let{elapsed:g=0}=l;g=g-rn(m);const y={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:a.getVelocity(),...p,delay:-g,onUpdate:S=>{a.set(S),p.onUpdate&&p.onUpdate(S)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:n,motionValue:a,element:d?void 0:c};qT(p)||Object.assign(y,GT(n,y)),y.duration&&(y.duration=rn(y.duration)),y.repeatDelay&&(y.repeatDelay=rn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let x=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(jf(y),y.delay===0&&(x=!0)),(Mn.instantAnimations||Mn.skipAnimations)&&(x=!0,jf(y),y.delay=0),y.allowFlatten=!p.type&&!p.ease,x&&!d&&a.get()!==void 0){const S=UT(y.keyframes,p);if(S!==void 0){zt.update(()=>{y.onUpdate(S),y.onComplete()});return}}return p.isSync?new dd(y):new d2(y)};function XT({protectedKeys:n,needsAnimating:a},s){const l=n.hasOwnProperty(s)&&a[s]!==!0;return a[s]=!1,l}function qv(n,a,{delay:s=0,transitionOverride:l,type:c}={}){let{transition:d=n.getDefaultTransition(),transitionEnd:f,...p}=a;l&&(d=l);const m=[],g=c&&n.animationState&&n.animationState.getState()[c];for(const y in p){const x=n.getValue(y,n.latestValues[y]??null),S=p[y];if(S===void 0||g&&XT(g,y))continue;const j={delay:s,...md(d||{},y)},z=x.get();if(z!==void 0&&!x.isAnimating&&!Array.isArray(S)&&S===z&&!j.velocity)continue;let H=!1;if(window.MotionHandoffAnimation){const Y=Gv(n);if(Y){const q=window.MotionHandoffAnimation(Y,y,zt);q!==null&&(j.startTime=q,H=!0)}}_f(n,y),x.start(Md(y,x,S,n.shouldReduceMotion&&uv.has(y)?{type:!1}:j,n,H));const P=x.animation;P&&m.push(P)}return f&&Promise.all(m).then(()=>{zt.update(()=>{f&&NT(n,f)})}),m}function Xv(n,a,s,l=0,c=1){const d=Array.from(n).sort((g,y)=>g.sortNodePosition(y)).indexOf(a),f=n.size,p=(f-1)*l;return typeof s=="function"?s(d,f):c===1?d*l:p-d*l}function Bf(n,a,s={}){const l=Ca(n,a,s.type==="exit"?n.presenceContext?.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=l||{};s.transitionOverride&&(c=s.transitionOverride);const d=l?()=>Promise.all(qv(n,l,s)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=c;return PT(n,a,m,g,y,x,s)}:()=>Promise.resolve(),{when:p}=c;if(p){const[m,g]=p==="beforeChildren"?[d,f]:[f,d];return m().then(()=>g())}else return Promise.all([d(),f(s.delay)])}function PT(n,a,s=0,l=0,c=0,d=1,f){const p=[];for(const m of n.variantChildren)m.notify("AnimationStart",a),p.push(Bf(m,a,{...f,delay:s+(typeof l=="function"?0:l)+Xv(n.variantChildren,m,l,c,d)}).then(()=>m.notify("AnimationComplete",a)));return Promise.all(p)}function KT(n,a,s={}){n.notify("AnimationStart",a);let l;if(Array.isArray(a)){const c=a.map(d=>Bf(n,d,s));l=Promise.all(c)}else if(typeof a=="string")l=Bf(n,a,s);else{const c=typeof a=="function"?Ca(n,a,s.custom):a;l=Promise.all(qv(n,c,s))}return l.then(()=>{n.notify("AnimationComplete",a)})}function Pv(n,a){if(!Array.isArray(a))return!1;const s=a.length;if(s!==n.length)return!1;for(let l=0;l<s;l++)if(a[l]!==n[l])return!1;return!0}const QT=xd.length;function Kv(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?Kv(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const a={};for(let s=0;s<QT;s++){const l=xd[s],c=n.props[l];(ts(c)||c===!1)&&(a[l]=c)}return a}const ZT=[...bd].reverse(),FT=bd.length;function JT(n){return a=>Promise.all(a.map(({animation:s,options:l})=>KT(n,s,l)))}function $T(n){let a=JT(n),s=xg(),l=!0;const c=m=>(g,y)=>{const x=Ca(n,y,m==="exit"?n.presenceContext?.custom:void 0);if(x){const{transition:S,transitionEnd:j,...z}=x;g={...g,...z,...j}}return g};function d(m){a=m(n)}function f(m){const{props:g}=n,y=Kv(n.parent)||{},x=[],S=new Set;let j={},z=1/0;for(let P=0;P<FT;P++){const Y=ZT[P],q=s[Y],L=g[Y]!==void 0?g[Y]:y[Y],$=ts(L),k=Y===m?q.isActive:null;k===!1&&(z=P);let K=L===y[Y]&&L!==g[Y]&&$;if(K&&l&&n.manuallyAnimateOnMount&&(K=!1),q.protectedKeys={...j},!q.isActive&&k===null||!L&&!q.prevProp||yo(L)||typeof L=="boolean")continue;const X=WT(q.prevProp,L);let I=X||Y===m&&q.isActive&&!K&&$||P>z&&$,gt=!1;const Rt=Array.isArray(L)?L:[L];let qt=Rt.reduce(c(Y),{});k===!1&&(qt={});const{prevResolvedValues:Lt={}}=q,Pe={...Lt,...qt},Re=G=>{I=!0,S.has(G)&&(gt=!0,S.delete(G)),q.needsAnimating[G]=!0;const W=n.getValue(G);W&&(W.liveStyle=!1)};for(const G in Pe){const W=qt[G],ot=Lt[G];if(j.hasOwnProperty(G))continue;let w=!1;Nf(W)&&Nf(ot)?w=!Pv(W,ot):w=W!==ot,w?W!=null?Re(G):S.add(G):W!==void 0&&S.has(G)?Re(G):q.protectedKeys[G]=!0}q.prevProp=L,q.prevResolvedValues=qt,q.isActive&&(j={...j,...qt}),l&&n.blockInitialAnimation&&(I=!1);const kt=K&&X;I&&(!kt||gt)&&x.push(...Rt.map(G=>{const W={type:Y};if(typeof G=="string"&&l&&!kt&&n.manuallyAnimateOnMount&&n.parent){const{parent:ot}=n,w=Ca(ot,G);if(ot.enteringChildren&&w){const{delayChildren:U}=w.transition||{};W.delay=Xv(ot.enteringChildren,n,U)}}return{animation:G,options:W}}))}if(S.size){const P={};if(typeof g.initial!="boolean"){const Y=Ca(n,Array.isArray(g.initial)?g.initial[0]:g.initial);Y&&Y.transition&&(P.transition=Y.transition)}S.forEach(Y=>{const q=n.getBaseTarget(Y),L=n.getValue(Y);L&&(L.liveStyle=!0),P[Y]=q??null}),x.push({animation:P})}let H=!!x.length;return l&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(H=!1),l=!1,H?a(x):Promise.resolve()}function p(m,g){if(s[m].isActive===g)return Promise.resolve();n.variantChildren?.forEach(x=>x.animationState?.setActive(m,g)),s[m].isActive=g;const y=f(m);for(const x in s)s[x].protectedKeys={};return y}return{animateChanges:f,setActive:p,setAnimateFunction:d,getState:()=>s,reset:()=>{s=xg(),l=!0}}}function WT(n,a){return typeof a=="string"?a!==n:Array.isArray(a)?!Pv(a,n):!1}function wi(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function xg(){return{animate:wi(!0),whileInView:wi(),whileHover:wi(),whileTap:wi(),whileDrag:wi(),whileFocus:wi(),exit:wi()}}class ii{constructor(a){this.isMounted=!1,this.node=a}update(){}}class IT extends ii{constructor(a){super(a),a.animationState||(a.animationState=$T(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();yo(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:s}=this.node.prevProps||{};a!==s&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let t8=0;class e8 extends ii{constructor(){super(...arguments),this.id=t8++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:s}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===l)return;const c=this.node.animationState.setActive("exit",!a);s&&!a&&c.then(()=>{s(this.id)})}mount(){const{register:a,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const n8={animation:{Feature:IT},exit:{Feature:e8}};function ns(n,a,s,l={passive:!0}){return n.addEventListener(a,s,l),()=>n.removeEventListener(a,s)}function ls(n){return{point:{x:n.pageX,y:n.pageY}}}const i8=n=>a=>yd(a)&&n(a,ls(a));function Kr(n,a,s,l){return ns(n,a,i8(s),l)}const Qv=1e-4,a8=1-Qv,r8=1+Qv,Zv=.01,s8=0-Zv,l8=0+Zv;function he(n){return n.max-n.min}function o8(n,a,s){return Math.abs(n-a)<=s}function Sg(n,a,s,l=.5){n.origin=l,n.originPoint=Nt(a.min,a.max,n.origin),n.scale=he(s)/he(a),n.translate=Nt(s.min,s.max,n.origin)-n.originPoint,(n.scale>=a8&&n.scale<=r8||isNaN(n.scale))&&(n.scale=1),(n.translate>=s8&&n.translate<=l8||isNaN(n.translate))&&(n.translate=0)}function Qr(n,a,s,l){Sg(n.x,a.x,s.x,l?l.originX:void 0),Sg(n.y,a.y,s.y,l?l.originY:void 0)}function Tg(n,a,s){n.min=s.min+a.min,n.max=n.min+he(a)}function u8(n,a,s){Tg(n.x,a.x,s.x),Tg(n.y,a.y,s.y)}function wg(n,a,s){n.min=a.min-s.min,n.max=n.min+he(a)}function Zr(n,a,s){wg(n.x,a.x,s.x),wg(n.y,a.y,s.y)}function Ge(n){return[n("x"),n("y")]}const Fv=({current:n})=>n?n.ownerDocument.defaultView:null,Ag=(n,a)=>Math.abs(n-a);function c8(n,a){const s=Ag(n.x,a.x),l=Ag(n.y,a.y);return Math.sqrt(s**2+l**2)}class Jv{constructor(a,s,{transformPagePoint:l,contextWindow:c=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=$c(this.lastMoveEventInfo,this.history),j=this.startEvent!==null,z=c8(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!j&&!z)return;const{point:H}=S,{timestamp:P}=re;this.history.push({...H,timestamp:P});const{onStart:Y,onMove:q}=this.handlers;j||(Y&&Y(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),q&&q(this.lastMoveEvent,S)},this.handlePointerMove=(S,j)=>{this.lastMoveEvent=S,this.lastMoveEventInfo=Jc(j,this.transformPagePoint),zt.update(this.updatePoint,!0)},this.handlePointerUp=(S,j)=>{this.end();const{onEnd:z,onSessionEnd:H,resumeAnimation:P}=this.handlers;if(this.dragSnapToOrigin&&P&&P(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const Y=$c(S.type==="pointercancel"?this.lastMoveEventInfo:Jc(j,this.transformPagePoint),this.history);this.startEvent&&z&&z(S,Y),H&&H(S,Y)},!yd(a))return;this.dragSnapToOrigin=d,this.handlers=s,this.transformPagePoint=l,this.distanceThreshold=f,this.contextWindow=c||window;const p=ls(a),m=Jc(p,this.transformPagePoint),{point:g}=m,{timestamp:y}=re;this.history=[{...g,timestamp:y}];const{onSessionStart:x}=s;x&&x(a,$c(m,this.history)),this.removeListeners=as(Kr(this.contextWindow,"pointermove",this.handlePointerMove),Kr(this.contextWindow,"pointerup",this.handlePointerUp),Kr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),ei(this.updatePoint)}}function Jc(n,a){return a?{point:a(n.point)}:n}function Eg(n,a){return{x:n.x-a.x,y:n.y-a.y}}function $c({point:n},a){return{point:n,delta:Eg(n,$v(a)),offset:Eg(n,f8(a)),velocity:d8(a,.1)}}function f8(n){return n[0]}function $v(n){return n[n.length-1]}function d8(n,a){if(n.length<2)return{x:0,y:0};let s=n.length-1,l=null;const c=$v(n);for(;s>=0&&(l=n[s],!(c.timestamp-l.timestamp>rn(a)));)s--;if(!l)return{x:0,y:0};const d=sn(c.timestamp-l.timestamp);if(d===0)return{x:0,y:0};const f={x:(c.x-l.x)/d,y:(c.y-l.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function h8(n,{min:a,max:s},l){return a!==void 0&&n<a?n=l?Nt(a,n,l.min):Math.max(n,a):s!==void 0&&n>s&&(n=l?Nt(s,n,l.max):Math.min(n,s)),n}function Dg(n,a,s){return{min:a!==void 0?n.min+a:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function m8(n,{top:a,left:s,bottom:l,right:c}){return{x:Dg(n.x,s,c),y:Dg(n.y,a,l)}}function Mg(n,a){let s=a.min-n.min,l=a.max-n.max;return a.max-a.min<n.max-n.min&&([s,l]=[l,s]),{min:s,max:l}}function p8(n,a){return{x:Mg(n.x,a.x),y:Mg(n.y,a.y)}}function g8(n,a){let s=.5;const l=he(n),c=he(a);return c>l?s=$r(a.min,a.max-l,n.min):l>c&&(s=$r(n.min,n.max-c,a.min)),Dn(0,1,s)}function y8(n,a){const s={};return a.min!==void 0&&(s.min=a.min-n.min),a.max!==void 0&&(s.max=a.max-n.min),s}const Uf=.35;function v8(n=Uf){return n===!1?n=0:n===!0&&(n=Uf),{x:Cg(n,"left","right"),y:Cg(n,"top","bottom")}}function Cg(n,a,s){return{min:jg(n,a),max:jg(n,s)}}function jg(n,a){return typeof n=="number"?n:n[a]||0}const b8=new WeakMap;class x8{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Gt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=a}start(a,{snapToCursor:s=!1,distanceThreshold:l}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const d=x=>{const{dragSnapToOrigin:S}=this.getProps();S?this.pauseAnimation():this.stopAnimation(),s&&this.snapToCursor(ls(x).point)},f=(x,S)=>{const{drag:j,dragPropagation:z,onDragStart:H}=this.getProps();if(j&&!z&&(this.openDragLock&&this.openDragLock(),this.openDragLock=C2(j),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ge(Y=>{let q=this.getAxisMotionValue(Y).get()||0;if(ln.test(q)){const{projection:L}=this.visualElement;if(L&&L.layout){const $=L.layout.layoutBox[Y];$&&(q=he($)*(parseFloat(q)/100))}}this.originPoint[Y]=q}),H&&zt.postRender(()=>H(x,S)),_f(this.visualElement,"transform");const{animationState:P}=this.visualElement;P&&P.setActive("whileDrag",!0)},p=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S;const{dragPropagation:j,dragDirectionLock:z,onDirectionLock:H,onDrag:P}=this.getProps();if(!j&&!this.openDragLock)return;const{offset:Y}=S;if(z&&this.currentDirection===null){this.currentDirection=S8(Y),this.currentDirection!==null&&H&&H(this.currentDirection);return}this.updateAxis("x",S.point,Y),this.updateAxis("y",S.point,Y),this.visualElement.render(),P&&P(x,S)},m=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S,this.stop(x,S),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>Ge(x=>this.getAnimationState(x)==="paused"&&this.getAxisMotionValue(x).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new Jv(a,{onSessionStart:d,onStart:f,onMove:p,onSessionEnd:m,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:l,contextWindow:Fv(this.visualElement)})}stop(a,s){const l=a||this.latestPointerEvent,c=s||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!c||!l)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:p}=this.getProps();p&&zt.postRender(()=>p(l,c))}cancel(){this.isDragging=!1;const{projection:a,animationState:s}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}updateAxis(a,s,l){const{drag:c}=this.getProps();if(!l||!Ml(a,c,this.currentDirection))return;const d=this.getAxisMotionValue(a);let f=this.originPoint[a]+l[a];this.constraints&&this.constraints[a]&&(f=h8(f,this.constraints[a],this.elastic[a])),d.set(f)}resolveConstraints(){const{dragConstraints:a,dragElastic:s}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;a&&Aa(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&l?this.constraints=m8(l.layoutBox,a):this.constraints=!1,this.elastic=v8(s),c!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&Ge(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=y8(l.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:s}=this.getProps();if(!a||!Aa(a))return!1;const l=a.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const d=TT(l,c.root,this.visualElement.getTransformPagePoint());let f=p8(c.layout.layoutBox,d);if(s){const p=s(bT(f));this.hasMutatedConstraints=!!p,p&&(f=Nv(p))}return f}startAnimation(a){const{drag:s,dragMomentum:l,dragElastic:c,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),m=this.constraints||{},g=Ge(y=>{if(!Ml(y,s,this.currentDirection))return;let x=m&&m[y]||{};f&&(x={min:0,max:0});const S=c?200:1e6,j=c?40:1e7,z={type:"inertia",velocity:l?a[y]:0,bounceStiffness:S,bounceDamping:j,timeConstant:750,restDelta:1,restSpeed:10,...d,...x};return this.startAxisValueAnimation(y,z)});return Promise.all(g).then(p)}startAxisValueAnimation(a,s){const l=this.getAxisMotionValue(a);return _f(this.visualElement,a),l.start(Md(a,l,0,s,this.visualElement,!1))}stopAnimation(){Ge(a=>this.getAxisMotionValue(a).stop())}pauseAnimation(){Ge(a=>this.getAxisMotionValue(a).animation?.pause())}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const s=`_drag${a.toUpperCase()}`,l=this.visualElement.getProps(),c=l[s];return c||this.visualElement.getValue(a,(l.initial?l.initial[a]:void 0)||0)}snapToCursor(a){Ge(s=>{const{drag:l}=this.getProps();if(!Ml(s,l,this.currentDirection))return;const{projection:c}=this.visualElement,d=this.getAxisMotionValue(s);if(c&&c.layout){const{min:f,max:p}=c.layout.layoutBox[s];d.set(a[s]-Nt(f,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:s}=this.getProps(),{projection:l}=this.visualElement;if(!Aa(s)||!l||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Ge(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const m=p.get();c[f]=g8({min:m,max:m},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),Ge(f=>{if(!Ml(f,a,null))return;const p=this.getAxisMotionValue(f),{min:m,max:g}=this.constraints[f];p.set(Nt(m,g,c[f]))})}addListeners(){if(!this.visualElement.current)return;b8.set(this.visualElement,this);const a=this.visualElement.current,s=Kr(a,"pointerdown",m=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(m)}),l=()=>{const{dragConstraints:m}=this.getProps();Aa(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,d=c.addEventListener("measure",l);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),zt.read(l);const f=ns(window,"resize",()=>this.scalePositionWithinConstraints()),p=c.addEventListener("didUpdate",({delta:m,hasLayoutChanged:g})=>{this.isDragging&&g&&(Ge(y=>{const x=this.getAxisMotionValue(y);x&&(this.originPoint[y]+=m[y].translate,x.set(x.get()+m[y].translate))}),this.visualElement.render())});return()=>{f(),s(),d(),p&&p()}}getProps(){const a=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:l=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:f=Uf,dragMomentum:p=!0}=a;return{...a,drag:s,dragDirectionLock:l,dragPropagation:c,dragConstraints:d,dragElastic:f,dragMomentum:p}}}function Ml(n,a,s){return(a===!0||a===n)&&(s===null||s===n)}function S8(n,a=10){let s=null;return Math.abs(n.y)>a?s="y":Math.abs(n.x)>a&&(s="x"),s}class T8 extends ii{constructor(a){super(a),this.removeGroupControls=qe,this.removeListeners=qe,this.controls=new x8(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qe}unmount(){this.removeGroupControls(),this.removeListeners()}}const Rg=n=>(a,s)=>{n&&zt.postRender(()=>n(a,s))};class w8 extends ii{constructor(){super(...arguments),this.removePointerDownListener=qe}onPointerDown(a){this.session=new Jv(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Fv(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:s,onPan:l,onPanEnd:c}=this.node.getProps();return{onSessionStart:Rg(a),onStart:Rg(s),onMove:l,onEnd:(d,f)=>{delete this.session,c&&zt.postRender(()=>c(d,f))}}}mount(){this.removePointerDownListener=Kr(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const $l={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Og(n,a){return a.max===a.min?0:n/(a.max-a.min)*100}const kr={correct:(n,a)=>{if(!a.target)return n;if(typeof n=="string")if(lt.test(n))n=parseFloat(n);else return n;const s=Og(n,a.target.x),l=Og(n,a.target.y);return`${s}% ${l}%`}},A8={correct:(n,{treeScale:a,projectionDelta:s})=>{const l=n,c=ni.parse(n);if(c.length>5)return l;const d=ni.createTransformer(n),f=typeof c[0]!="number"?1:0,p=s.x.scale*a.x,m=s.y.scale*a.y;c[0+f]/=p,c[1+f]/=m;const g=Nt(p,m,.5);return typeof c[2+f]=="number"&&(c[2+f]/=g),typeof c[3+f]=="number"&&(c[3+f]/=g),d(c)}};let Wc=!1;class E8 extends J.Component{componentDidMount(){const{visualElement:a,layoutGroup:s,switchLayoutGroup:l,layoutId:c}=this.props,{projection:d}=a;Q2(D8),d&&(s.group&&s.group.add(d),l&&l.register&&c&&l.register(d),Wc&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),$l.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:s,visualElement:l,drag:c,isPresent:d}=this.props,{projection:f}=l;return f&&(f.isPresent=d,Wc=!0,c||a.layoutDependency!==s||s===void 0||a.isPresent!==d?f.willUpdate():this.safeToRemove(),a.isPresent!==d&&(d?f.promote():f.relegate()||zt.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),gd.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:s,switchLayoutGroup:l}=this.props,{projection:c}=a;Wc=!0,c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),l&&l.deregister&&l.deregister(c))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function Wv(n){const[a,s]=xv(),l=J.useContext(Zf);return b.jsx(E8,{...n,layoutGroup:l,switchLayoutGroup:J.useContext(zv),isPresent:a,safeToRemove:s})}const D8={borderRadius:{...kr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:kr,borderTopRightRadius:kr,borderBottomLeftRadius:kr,borderBottomRightRadius:kr,boxShadow:A8};function M8(n,a,s){const l=fe(n)?n:Na(n);return l.start(Md("",l,a,s)),l.animation}const C8=(n,a)=>n.depth-a.depth;class j8{constructor(){this.children=[],this.isDirty=!1}add(a){$f(this.children,a),this.isDirty=!0}remove(a){Wf(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(C8),this.isDirty=!1,this.children.forEach(a)}}function R8(n,a){const s=be.now(),l=({timestamp:c})=>{const d=c-s;d>=a&&(ei(l),n(d-a))};return zt.setup(l,!0),()=>ei(l)}const Iv=["TopLeft","TopRight","BottomLeft","BottomRight"],O8=Iv.length,zg=n=>typeof n=="string"?parseFloat(n):n,Vg=n=>typeof n=="number"||lt.test(n);function z8(n,a,s,l,c,d){c?(n.opacity=Nt(0,s.opacity??1,V8(l)),n.opacityExit=Nt(a.opacity??1,0,N8(l))):d&&(n.opacity=Nt(a.opacity??1,s.opacity??1,l));for(let f=0;f<O8;f++){const p=`border${Iv[f]}Radius`;let m=Ng(a,p),g=Ng(s,p);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||Vg(m)===Vg(g)?(n[p]=Math.max(Nt(zg(m),zg(g),l),0),(ln.test(g)||ln.test(m))&&(n[p]+="%")):n[p]=g}(a.rotate||s.rotate)&&(n.rotate=Nt(a.rotate||0,s.rotate||0,l))}function Ng(n,a){return n[a]!==void 0?n[a]:n.borderRadius}const V8=t1(0,.5,Hy),N8=t1(.5,.95,qe);function t1(n,a,s){return l=>l<n?0:l>a?1:s($r(n,a,l))}function _g(n,a){n.min=a.min,n.max=a.max}function Ye(n,a){_g(n.x,a.x),_g(n.y,a.y)}function Bg(n,a){n.translate=a.translate,n.scale=a.scale,n.originPoint=a.originPoint,n.origin=a.origin}function Ug(n,a,s,l,c){return n-=a,n=so(n,1/s,l),c!==void 0&&(n=so(n,1/c,l)),n}function _8(n,a=0,s=1,l=.5,c,d=n,f=n){if(ln.test(a)&&(a=parseFloat(a),a=Nt(f.min,f.max,a/100)-f.min),typeof a!="number")return;let p=Nt(d.min,d.max,l);n===d&&(p-=a),n.min=Ug(n.min,a,s,p,c),n.max=Ug(n.max,a,s,p,c)}function Lg(n,a,[s,l,c],d,f){_8(n,a[s],a[l],a[c],a.scale,d,f)}const B8=["x","scaleX","originX"],U8=["y","scaleY","originY"];function kg(n,a,s,l){Lg(n.x,a,B8,s?s.x:void 0,l?l.x:void 0),Lg(n.y,a,U8,s?s.y:void 0,l?l.y:void 0)}function Hg(n){return n.translate===0&&n.scale===1}function e1(n){return Hg(n.x)&&Hg(n.y)}function Yg(n,a){return n.min===a.min&&n.max===a.max}function L8(n,a){return Yg(n.x,a.x)&&Yg(n.y,a.y)}function Gg(n,a){return Math.round(n.min)===Math.round(a.min)&&Math.round(n.max)===Math.round(a.max)}function n1(n,a){return Gg(n.x,a.x)&&Gg(n.y,a.y)}function qg(n){return he(n.x)/he(n.y)}function Xg(n,a){return n.translate===a.translate&&n.scale===a.scale&&n.originPoint===a.originPoint}class k8{constructor(){this.members=[]}add(a){$f(this.members,a),a.scheduleRender()}remove(a){if(Wf(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(a){const s=this.members.findIndex(c=>a===c);if(s===0)return!1;let l;for(let c=s;c>=0;c--){const d=this.members[c];if(d.isPresent!==!1){l=d;break}}return l?(this.promote(l),!0):!1}promote(a,s){const l=this.lead;if(a!==l&&(this.prevLead=l,this.lead=a,a.show(),l)){l.instance&&l.scheduleRender(),a.scheduleRender(),a.resumeFrom=l,s&&(a.resumeFrom.preserveOpacity=!0),l.snapshot&&(a.snapshot=l.snapshot,a.snapshot.latestValues=l.animationValues||l.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:c}=a.options;c===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(a=>{const{options:s,resumingFrom:l}=a;s.onExitComplete&&s.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(a=>{a.instance&&a.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function H8(n,a,s){let l="";const c=n.x.translate/a.x,d=n.y.translate/a.y,f=s?.z||0;if((c||d||f)&&(l=`translate3d(${c}px, ${d}px, ${f}px) `),(a.x!==1||a.y!==1)&&(l+=`scale(${1/a.x}, ${1/a.y}) `),s){const{transformPerspective:g,rotate:y,rotateX:x,rotateY:S,skewX:j,skewY:z}=s;g&&(l=`perspective(${g}px) ${l}`),y&&(l+=`rotate(${y}deg) `),x&&(l+=`rotateX(${x}deg) `),S&&(l+=`rotateY(${S}deg) `),j&&(l+=`skewX(${j}deg) `),z&&(l+=`skewY(${z}deg) `)}const p=n.x.scale*a.x,m=n.y.scale*a.y;return(p!==1||m!==1)&&(l+=`scale(${p}, ${m})`),l||"none"}const Ic=["","X","Y","Z"],Y8=1e3;let G8=0;function tf(n,a,s,l){const{latestValues:c}=a;c[n]&&(s[n]=c[n],a.setStaticValue(n,0),l&&(l[n]=0))}function i1(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:a}=n.options;if(!a)return;const s=Gv(a);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:c,layoutId:d}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",zt,!(c||d))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&i1(l)}function a1({attachResizeListener:n,defaultParent:a,measureScroll:s,checkIsScrollRoot:l,resetTransform:c}){return class{constructor(f={},p=a?.()){this.id=G8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(P8),this.nodes.forEach(F8),this.nodes.forEach(J8),this.nodes.forEach(K8)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new j8)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new ed),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const m=this.eventHandlers.get(f);m&&m.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=bv(f)&&!N2(f),this.instance=f;const{layoutId:p,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||p)&&(this.isLayoutDirty=!0),n){let y,x=0;const S=()=>this.root.updateBlockedByResize=!1;zt.read(()=>{x=window.innerWidth}),n(f,()=>{const j=window.innerWidth;j!==x&&(x=j,this.root.updateBlockedByResize=!0,y&&y(),y=R8(S,250),$l.hasAnimatedSinceResize&&($l.hasAnimatedSinceResize=!1,this.nodes.forEach(Qg)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeLayoutChanged:S,layout:j})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const z=this.options.transition||g.getDefaultTransition()||ew,{onLayoutAnimationStart:H,onLayoutAnimationComplete:P}=g.getProps(),Y=!this.targetLayout||!n1(this.targetLayout,j),q=!x&&S;if(this.options.layoutRoot||this.resumeFrom||q||x&&(Y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...md(z,"layout"),onPlay:H,onComplete:P};(g.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(y,q)}else x||Qg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=j})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ei(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach($8),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&i1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const x=this.path[y];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:p,layout:m}=this.options;if(p===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Pg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Kg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Z8),this.nodes.forEach(q8),this.nodes.forEach(X8)):this.nodes.forEach(Kg),this.clearAllSnapshots();const p=be.now();re.delta=Dn(0,1e3/60,p-re.timestamp),re.timestamp=p,re.isProcessing=!0,Gc.update.process(re),Gc.preRender.process(re),Gc.render.process(re),re.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,gd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Q8),this.sharedNodes.forEach(W8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,zt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){zt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!he(this.snapshot.measuredBox.x)&&!he(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Gt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p&&this.instance){const m=l(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:m,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!e1(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;f&&this.instance&&(p||Ai(this.latestValues)||y)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let m=this.removeElementScroll(p);return f&&(m=this.removeTransform(m)),nw(m),{animationId:this.root.animationId,measuredBox:p,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Gt();const p=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(iw))){const{scroll:g}=this.root;g&&(Ea(p.x,g.offset.x),Ea(p.y,g.offset.y))}return p}removeElementScroll(f){const p=Gt();if(Ye(p,f),this.scroll?.wasRoot)return p;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&Ye(p,f),Ea(p.x,y.offset.x),Ea(p.y,y.offset.y))}return p}applyTransform(f,p=!1){const m=Gt();Ye(m,f);for(let g=0;g<this.path.length;g++){const y=this.path[g];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Da(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Ai(y.latestValues)&&Da(m,y.latestValues)}return Ai(this.latestValues)&&Da(m,this.latestValues),m}removeTransform(f){const p=Gt();Ye(p,f);for(let m=0;m<this.path.length;m++){const g=this.path[m];if(!g.instance||!Ai(g.latestValues))continue;Of(g.latestValues)&&g.updateSnapshot();const y=Gt(),x=g.measurePageBox();Ye(y,x),kg(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return Ai(this.latestValues)&&kg(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==re.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==p;if(!(f||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:x}=this.options;if(!(!this.layout||!(y||x))){if(this.resolvedRelativeTargetAt=re.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Gt(),this.relativeTargetOrigin=Gt(),Zr(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),Ye(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Gt(),this.targetWithTransforms=Gt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),u8(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ye(this.target,this.layout.layoutBox),Bv(this.target,this.targetDelta)):Ye(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Gt(),this.relativeTargetOrigin=Gt(),Zr(this.relativeTargetOrigin,this.target,S.target),Ye(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Of(this.parent.latestValues)||_v(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),p=!!this.resumingFrom||this!==f;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===re.timestamp&&(m=!1),m)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Ye(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,S=this.treeScale.y;ST(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Gt());const{target:j}=f;if(!j){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Bg(this.prevProjectionDelta.x,this.projectionDelta.x),Bg(this.prevProjectionDelta.y,this.projectionDelta.y)),Qr(this.projectionDelta,this.layoutCorrected,j,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==S||!Xg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Xg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",j))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ma(),this.projectionDelta=Ma(),this.projectionDeltaWithTransform=Ma()}setAnimationOrigin(f,p=!1){const m=this.snapshot,g=m?m.latestValues:{},y={...this.latestValues},x=Ma();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const S=Gt(),j=m?m.source:void 0,z=this.layout?this.layout.source:void 0,H=j!==z,P=this.getStack(),Y=!P||P.members.length<=1,q=!!(H&&!Y&&this.options.crossfade===!0&&!this.path.some(tw));this.animationProgress=0;let L;this.mixTargetDelta=$=>{const k=$/1e3;Zg(x.x,f.x,k),Zg(x.y,f.y,k),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Zr(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),I8(this.relativeTarget,this.relativeTargetOrigin,S,k),L&&L8(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=Gt()),Ye(L,this.relativeTarget)),H&&(this.animationValues=y,z8(y,g,this.latestValues,k,q,Y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ei(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=zt.update(()=>{$l.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Na(0)),this.currentAnimation=M8(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),f.onUpdate&&f.onUpdate(p)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Y8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:m,layout:g,latestValues:y}=f;if(!(!p||!m||!g)){if(this!==f&&this.layout&&g&&r1(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||Gt();const x=he(this.layout.layoutBox.x);m.x.min=f.target.x.min,m.x.max=m.x.min+x;const S=he(this.layout.layoutBox.y);m.y.min=f.target.y.min,m.y.max=m.y.min+S}Ye(p,m),Da(p,y),Qr(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new k8),this.sharedNodes.get(f).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:m}=f;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(p=!0),!p)return;const g={};m.z&&tf("z",f,g,this.animationValues);for(let y=0;y<Ic.length;y++)tf(`rotate${Ic[y]}`,f,g,this.animationValues),tf(`skew${Ic[y]}`,f,g,this.animationValues);f.render();for(const y in g)f.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);f.scheduleRender()}applyProjectionStyles(f,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=Jl(p?.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=Jl(p?.pointerEvents)||""),this.hasProjected&&!Ai(this.latestValues)&&(f.transform=m?m({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=H8(this.projectionDeltaWithTransform,this.treeScale,y);m&&(x=m(y,x)),f.transform=x;const{x:S,y:j}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${j.origin*100}% 0`,g.animationValues?f.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const z in es){if(y[z]===void 0)continue;const{correct:H,applyTo:P,isCSSVariable:Y}=es[z],q=x==="none"?y[z]:H(y[z],g);if(P){const L=P.length;for(let $=0;$<L;$++)f[P[$]]=q}else Y?this.options.visualElement.renderState.vars[z]=q:f[z]=q}this.options.layoutId&&(f.pointerEvents=g===this?Jl(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Pg),this.root.sharedNodes.clear()}}}function q8(n){n.updateLayout()}function X8(n){const a=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&a&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:l}=n.layout,{animationType:c}=n.options,d=a.source!==n.layout.source;c==="size"?Ge(y=>{const x=d?a.measuredBox[y]:a.layoutBox[y],S=he(x);x.min=s[y].min,x.max=x.min+S}):r1(c,a.layoutBox,s)&&Ge(y=>{const x=d?a.measuredBox[y]:a.layoutBox[y],S=he(s[y]);x.max=x.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+S)});const f=Ma();Qr(f,s,a.layoutBox);const p=Ma();d?Qr(p,n.applyTransform(l,!0),a.measuredBox):Qr(p,s,a.layoutBox);const m=!e1(f);let g=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:S}=y;if(x&&S){const j=Gt();Zr(j,a.layoutBox,x.layoutBox);const z=Gt();Zr(z,s,S.layoutBox),n1(j,z)||(g=!0),y.options.layoutRoot&&(n.relativeTarget=z,n.relativeTargetOrigin=j,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:a,delta:p,layoutDelta:f,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function P8(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function K8(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Q8(n){n.clearSnapshot()}function Pg(n){n.clearMeasurements()}function Kg(n){n.isLayoutDirty=!1}function Z8(n){const{visualElement:a}=n.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),n.resetTransform()}function Qg(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function F8(n){n.resolveTargetDelta()}function J8(n){n.calcProjection()}function $8(n){n.resetSkewAndRotation()}function W8(n){n.removeLeadSnapshot()}function Zg(n,a,s){n.translate=Nt(a.translate,0,s),n.scale=Nt(a.scale,1,s),n.origin=a.origin,n.originPoint=a.originPoint}function Fg(n,a,s,l){n.min=Nt(a.min,s.min,l),n.max=Nt(a.max,s.max,l)}function I8(n,a,s,l){Fg(n.x,a.x,s.x,l),Fg(n.y,a.y,s.y,l)}function tw(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const ew={duration:.45,ease:[.4,0,.1,1]},Jg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),$g=Jg("applewebkit/")&&!Jg("chrome/")?Math.round:qe;function Wg(n){n.min=$g(n.min),n.max=$g(n.max)}function nw(n){Wg(n.x),Wg(n.y)}function r1(n,a,s){return n==="position"||n==="preserve-aspect"&&!o8(qg(a),qg(s),.2)}function iw(n){return n!==n.root&&n.scroll?.wasRoot}const aw=a1({attachResizeListener:(n,a)=>ns(n,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ef={current:void 0},s1=a1({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ef.current){const n=new aw({});n.mount(window),n.setOptions({layoutScroll:!0}),ef.current=n}return ef.current},resetTransform:(n,a)=>{n.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),rw={pan:{Feature:w8},drag:{Feature:T8,ProjectionNode:s1,MeasureLayout:Wv}};function Ig(n,a,s){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",s==="Start");const c="onHover"+s,d=l[c];d&&zt.postRender(()=>d(a,ls(a)))}class sw extends ii{mount(){const{current:a}=this.node;a&&(this.unmount=j2(a,(s,l)=>(Ig(this.node,l,"Start"),c=>Ig(this.node,c,"End"))))}unmount(){}}class lw extends ii{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=as(ns(this.node.current,"focus",()=>this.onFocus()),ns(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ty(n,a,s){const{props:l}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",s==="Start");const c="onTap"+(s==="End"?"":s),d=l[c];d&&zt.postRender(()=>d(a,ls(a)))}class ow extends ii{mount(){const{current:a}=this.node;a&&(this.unmount=V2(a,(s,l)=>(ty(this.node,l,"Start"),(c,{success:d})=>ty(this.node,c,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Lf=new WeakMap,nf=new WeakMap,uw=n=>{const a=Lf.get(n.target);a&&a(n)},cw=n=>{n.forEach(uw)};function fw({root:n,...a}){const s=n||document;nf.has(s)||nf.set(s,{});const l=nf.get(s),c=JSON.stringify(a);return l[c]||(l[c]=new IntersectionObserver(cw,{root:n,...a})),l[c]}function dw(n,a,s){const l=fw(a);return Lf.set(n,s),l.observe(n),()=>{Lf.delete(n),l.unobserve(n)}}const hw={some:0,all:1};class mw extends ii{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:s,margin:l,amount:c="some",once:d}=a,f={root:s?s.current:void 0,rootMargin:l,threshold:typeof c=="number"?c:hw[c]},p=m=>{const{isIntersecting:g}=m;if(this.isInView===g||(this.isInView=g,d&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:x}=this.node.getProps(),S=g?y:x;S&&S(m)};return dw(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:s}=this.node;["amount","margin","root"].some(pw(a,s))&&this.startObserver()}unmount(){}}function pw({viewport:n={}},{viewport:a={}}={}){return s=>n[s]!==a[s]}const gw={inView:{Feature:mw},tap:{Feature:ow},focus:{Feature:lw},hover:{Feature:sw}},yw={layout:{ProjectionNode:s1,MeasureLayout:Wv}},vw={...n8,...gw,...rw,...yw},Q=vT(vw,OT),bw=E(Q.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 255, 136, 0.2);
  z-index: 1000;
  padding: 1rem 0;
  
  @media (max-width: 768px) {
    padding: 0.8rem 0;
  }
`,xw=E.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Sw=E(Q.div)`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 900;
  color: #00ff88;
  text-shadow: 0 0 10px #00ff88;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,Tw=E.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`,ww=E(Q.a)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  
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
`,Aw=E.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`,Ew=E(Q.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 15, 15, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  z-index: 1000;
`,Dw=E(Q.a)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00ff88;
    text-shadow: 0 0 15px #00ff88;
  }
`,Mw=()=>{const[n,a]=J.useState(!1),[s,l]=J.useState(!1),c=[{href:"#home",label:"Home"},{href:"#about",label:"About"},{href:"#education",label:"Education"},{href:"#toolbox",label:"Toolbox"},{href:"#projects",label:"Projects"},{href:"#experience",label:"Experience"},{href:"#publications",label:"Publications"},{href:"#bucket-list",label:"Bucket List"},{href:"#contact",label:"Contact"}];J.useEffect(()=>{const p=()=>{a(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const d=()=>{l(!s)},f=p=>{l(!1);const m=document.querySelector(p);m&&m.scrollIntoView({behavior:"smooth"})};return b.jsxs(b.Fragment,{children:[b.jsx(bw,{initial:{y:-100},animate:{y:0},transition:{duration:.8,ease:"easeOut"},style:{boxShadow:n?"0 10px 30px rgba(0, 255, 136, 0.1)":"none"},children:b.jsxs(xw,{children:[b.jsx(Sw,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Unmesh Achar"}),b.jsx(Tw,{children:c.map((p,m)=>b.jsx("li",{children:b.jsx(ww,{href:p.href,onClick:g=>{g.preventDefault(),f(p.href)},whileHover:{scale:1.1},whileTap:{scale:.95},initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:m*.1},children:p.label})},p.href))}),b.jsx(Aw,{onClick:d,children:s?"✕":"☰"})]})}),b.jsx(po,{children:s&&b.jsx(Ew,{initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{type:"tween",duration:.3},children:c.map((p,m)=>b.jsx(Dw,{href:p.href,onClick:g=>{g.preventDefault(),f(p.href)},initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:m*.1},whileHover:{scale:1.1},whileTap:{scale:.9},children:p.label},p.href))})})]})},Cw=E.section`
  id: home;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  overflow: hidden;
`,jw=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 100vh;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
    padding: 8rem 2rem 4rem;
    min-height: auto;
  }
  
  @media (max-width: 768px) {
    padding: 6rem 1rem 3rem;
    gap: 2rem;
  }
`,Rw=E.div`
  z-index: 2;
  
  @media (max-width: 968px) {
    order: 2;
  }
`,Ow=E(Q.h1)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,zw=E(Q.h2)`
  font-family: 'Space Mono', monospace;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-weight: 400;
`,Vw=E(Q.p)`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 500px;
  
  @media (max-width: 968px) {
    max-width: 100%;
    margin: 0 auto 2.5rem;
  }
`,Nw=E(Q.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,_w=E(Q.a)`
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    width: 200px;
    justify-content: center;
  }
`,Bw=E(Q.a)`
  background: transparent;
  border: 2px solid #00ff88;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  color: #00ff88;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    background: #00ff88;
    color: #0f0f0f;
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    width: 200px;
    justify-content: center;
  }
`,Uw=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 968px) {
    order: 1;
  }
`,Lw=E(Q.img)`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 50%;
  border: 4px solid #00ff88;
  box-shadow: 0 0 50px rgba(0, 255, 136, 0.3);
  
  @media (max-width: 768px) {
    max-width: 300px;
  }
  
  @media (max-width: 480px) {
    max-width: 250px;
  }
`,kw=E.div`
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
`,Hw=()=>{const n=()=>{const c=document.querySelector("#contact");c&&c.scrollIntoView({behavior:"smooth"})},a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},s={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},l={animate:{y:[0,-20,0],rotate:[0,180,360],transition:{duration:6,repeat:1/0,ease:"easeInOut"}}};return b.jsxs(Cw,{id:"home",children:[b.jsxs(kw,{children:[b.jsx(af,{className:"cube-1",variants:l,animate:"animate"}),b.jsx(af,{className:"cube-2",variants:l,animate:"animate",transition:{delay:1}}),b.jsx(af,{className:"cube-3",variants:l,animate:"animate",transition:{delay:2}}),b.jsx(ey,{className:"sphere-1",variants:l,animate:"animate",transition:{delay:.5}}),b.jsx(ey,{className:"sphere-2",variants:l,animate:"animate",transition:{delay:1.5}})]}),b.jsxs(jw,{children:[b.jsx(Q.div,{variants:a,initial:"hidden",animate:"visible",children:b.jsxs(Rw,{children:[b.jsx(Ow,{variants:s,children:"Unmesh Achar"}),b.jsx(zw,{variants:s,children:"Computer Engineering Graduate"}),b.jsx(Vw,{variants:s,children:"Passionate about cybersecurity, full-stack development, and creating innovative solutions that bridge the gap between security and user experience."}),b.jsxs(Nw,{variants:s,children:[b.jsx(_w,{href:"#projects",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:c=>{c.preventDefault(),document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"})},children:"View My Work"}),b.jsx(Bw,{href:"#contact",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:c=>{c.preventDefault(),n()},children:"Get In Touch"})]})]})}),b.jsx(Uw,{children:b.jsx(Lw,{src:"/profile-photo.jpg",alt:"Unmesh Achar",initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:100,damping:10,delay:.5},whileHover:{scale:1.05,boxShadow:"0 0 80px rgba(0, 255, 136, 0.5)"}})})]})]})},Yw=E.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`,Gw=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`,qw=E.div`
  z-index: 2;
`,Xw=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 2rem;
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
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,rf=E(Q.p)`
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,sf=E.span`
  color: #00ff88;
  font-weight: 600;
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
`,Pw=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`,Kw=E(Q.div)`
  width: 100%;
  max-width: 400px;
  height: 400px;
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

  @media (max-width: 768px) {
    max-width: 320px;
    height: 320px;
  }
`,Qw=E.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #ffffff;
`,Zw=E.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,Fw=E(Q.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,Cl=E(Q.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,jl=E.div`
  font-family: 'Orbitron', monospace;
  font-size: 2rem;
  font-weight: 900;
  color: #00ff88;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Rl=E.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,Jw=E.div`
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
`,$w=()=>{const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},a={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},s={animate:{y:[0,-30,0],rotate:[0,180,360],scale:[1,1.1,1],transition:{duration:8,repeat:1/0,ease:"easeInOut"}}},l={hidden:{scale:0,opacity:0},visible:{scale:1,opacity:1,transition:{type:"spring",stiffness:100,damping:10}}};return b.jsxs(Yw,{id:"about",children:[b.jsxs(Jw,{children:[b.jsx(lf,{className:"shape-1",variants:s,animate:"animate"}),b.jsx(lf,{className:"shape-2",variants:s,animate:"animate",transition:{delay:1}}),b.jsx(lf,{className:"shape-3",variants:s,animate:"animate",transition:{delay:2}})]}),b.jsxs(Gw,{children:[b.jsx(Q.div,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:b.jsxs(qw,{children:[b.jsx(Xw,{variants:a,children:"About Me"}),b.jsxs(rf,{variants:a,children:["I'm a ",b.jsx(sf,{children:"Computer Engineering graduate"})," with a passion for creating innovative solutions at the intersection of cybersecurity and user experience. My journey in technology began with curiosity about how systems work and evolved into a deep commitment to building secure, efficient applications."]}),b.jsxs(rf,{variants:a,children:["With expertise in ",b.jsx(sf,{children:"full-stack development"})," and",b.jsx(sf,{children:"cybersecurity practices"}),", I enjoy tackling complex challenges that require both technical depth and creative problem-solving. I believe in writing clean, maintainable code and designing solutions that prioritize both security and usability."]}),b.jsx(rf,{variants:a,children:"When I'm not coding, you'll find me exploring the latest security research, contributing to open-source projects, or planning my next adventure. I'm always eager to learn new technologies and collaborate on projects that make a meaningful impact."})]})}),b.jsx(Pw,{children:b.jsx(Kw,{initial:{scale:0,rotate:-180},whileInView:{scale:1,rotate:0},viewport:{once:!0},transition:{type:"spring",stiffness:100,damping:15,delay:.3},whileHover:{scale:1.05,boxShadow:"0 25px 50px rgba(0, 255, 136, 0.3)"},children:b.jsxs(Qw,{children:[b.jsx(Zw,{children:"🚀"}),b.jsx("div",{style:{fontSize:"1.2rem",fontWeight:"600",background:"linear-gradient(45deg, #00ff88, #ff0088)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Innovation"})]})})})]}),b.jsx(Q.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},style:{maxWidth:"1200px",margin:"0 auto",padding:"0 2rem"},children:b.jsxs(Fw,{children:[b.jsxs(Cl,{variants:l,whileHover:{y:-10},children:[b.jsx(jl,{children:"3+"}),b.jsx(Rl,{children:"Years Experience"})]}),b.jsxs(Cl,{variants:l,whileHover:{y:-10},children:[b.jsx(jl,{children:"15+"}),b.jsx(Rl,{children:"Projects Completed"})]}),b.jsxs(Cl,{variants:l,whileHover:{y:-10},children:[b.jsx(jl,{children:"10+"}),b.jsx(Rl,{children:"Technologies Mastered"})]}),b.jsxs(Cl,{variants:l,whileHover:{y:-10},children:[b.jsx(jl,{children:"24/7"}),b.jsx(Rl,{children:"Problem Solver"})]})]})})]})},Ww=E.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`,Iw=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,tA=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

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
`,eA=E.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #00ff88, #ff0088);
    transform: translateX(-50%);
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`,kf=E(Q.div)`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    justify-content: flex-end;
    
    @media (max-width: 768px) {
      justify-content: flex-start;
      padding-left: 60px;
    }
  }

  &:nth-child(even) {
    justify-content: flex-start;
    
    @media (max-width: 768px) {
      justify-content: flex-start;
      padding-left: 60px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`,nA=E(Q.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #0f0f0f;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    left: 20px;
    transform: translate(-50%, -50%);
  }
`,iA=E(Q.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 15px;
  padding: 2rem;
  width: calc(50% - 50px);
  max-width: 350px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
  }

  ${kf}:nth-child(odd) & {
    margin-right: 50px;
    
    @media (max-width: 768px) {
      margin-right: 0;
    }
  }

  ${kf}:nth-child(even) & {
    margin-left: 50px;
    
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`,aA=E.div`
  position: absolute;
  top: -15px;
  right: 20px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  color: #0f0f0f;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    right: 10px;
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
  }
`,rA=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,sA=E.h4`
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,lA=E.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;

  &:last-child {
    margin-bottom: 0;
  }
`,oA=E.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
`,uA=E.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #ff0088;
    font-size: 0.8rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`,cA=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,Ol=E(Q.div)`
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
`,fA=()=>{const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.4,delayChildren:.2}}},a={hidden:{y:100,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},s={animate:{y:[0,-20,0],rotate:[0,10,-10,0],scale:[1,1.2,1],transition:{duration:6,repeat:1/0,ease:"easeInOut"}}},l={hidden:{scale:0,opacity:0},visible:{scale:1,opacity:1,transition:{type:"spring",stiffness:200,damping:15}}},c=[{year:"2020-2024",institution:"University of Technology",degree:"Bachelor of Computer Engineering",description:"Comprehensive study of computer systems, software engineering, and cybersecurity with a focus on practical applications and industry-relevant projects.",achievements:["Graduated with First Class Honors (GPA: 3.8/4.0)","Dean's List for Academic Excellence (6 semesters)","Winner of Annual Cybersecurity Competition","Lead developer for Senior Capstone Project"]},{year:"2024",institution:"Cybersecurity Institute",degree:"Advanced Cybersecurity Certification",description:"Specialized training in ethical hacking, penetration testing, and security analysis with hands-on experience in real-world scenarios.",achievements:["Certified Ethical Hacker (CEH) credential","Network Security Specialist certification","Top 5% of class performance","Published research on mobile app security"]},{year:"2023",institution:"Web Development Academy",degree:"Full-Stack Development Bootcamp",description:"Intensive program covering modern web technologies, database design, and cloud deployment with emphasis on responsive design and security.",achievements:["Built 5 production-ready web applications","Mentored junior developers in the program","Awarded 'Most Innovative Project' recognition","Achieved 100% job placement rate"]}];return b.jsxs(Ww,{id:"education",children:[b.jsxs(cA,{children:[b.jsx(Ol,{className:"icon-1",variants:s,animate:"animate",children:"🎓"}),b.jsx(Ol,{className:"icon-2",variants:s,animate:"animate",transition:{delay:1},children:"📚"}),b.jsx(Ol,{className:"icon-3",variants:s,animate:"animate",transition:{delay:2},children:"🏆"}),b.jsx(Ol,{className:"icon-4",variants:s,animate:"animate",transition:{delay:.5},children:"💻"})]}),b.jsxs(Iw,{children:[b.jsx(tA,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:"Education"}),b.jsx(eA,{children:b.jsx(Q.div,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:c.map((d,f)=>b.jsxs(kf,{children:[b.jsx(nA,{variants:l,whileHover:{scale:1.3,boxShadow:"0 0 30px rgba(0, 255, 136, 0.8)"}}),b.jsxs(iA,{variants:a,whileHover:{scale:1.02},children:[b.jsx(aA,{children:d.year}),b.jsx(rA,{children:d.institution}),b.jsx(sA,{children:d.degree}),b.jsx(lA,{children:d.description}),b.jsx(oA,{children:d.achievements.map((p,m)=>b.jsx(uA,{children:p},m))})]})]},f))})})]})]})},dA=E.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`,hA=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,mA=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,pA=E(Q.p)`
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    font-size: 1rem;
  }
`,gA=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,yA=E(Q.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
  }
`,vA=E.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,bA=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.4rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,xA=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 0.8rem;
  }
`,SA=E(Q.div)`
  background: rgba(255, 0, 136, 0.1);
  border: 1px solid rgba(255, 0, 136, 0.3);
  border-radius: 12px;
  padding: 1rem 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(255, 0, 136, 0.2);
    border-color: rgba(255, 0, 136, 0.5);
    transform: translateY(-5px) scale(1.05);
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

  &:hover::before {
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
`,TA=E.div`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,wA=E.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 1;
  relative;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`,AA=E.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-top: 1rem;
  overflow: hidden;
`,EA=E(Q.div)`
  height: 100%;
  background: linear-gradient(90deg, #00ff88, #ff0088);
  border-radius: 2px;
  width: ${n=>n.level}%;
`,DA=E.div`
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
`,MA=()=>{const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},a={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},s={hidden:{scale:0,opacity:0},visible:{scale:1,opacity:1,transition:{type:"spring",stiffness:200,damping:15}}},l={animate:{y:[0,-15,0],rotate:[0,5,-5,0],scale:[1,1.1,1],transition:{duration:4,repeat:1/0,ease:"easeInOut"}}},c=[{icon:"💻",title:"Frontend Development",skills:[{name:"React",icon:"⚛️",level:95},{name:"JavaScript",icon:"🟨",level:90},{name:"TypeScript",icon:"🔷",level:85},{name:"HTML5",icon:"🟠",level:95},{name:"CSS3",icon:"🔵",level:90},{name:"Tailwind",icon:"💨",level:85}]},{icon:"⚙️",title:"Backend Development",skills:[{name:"Node.js",icon:"🟢",level:88},{name:"Python",icon:"🐍",level:85},{name:"Express",icon:"🚂",level:82},{name:"MongoDB",icon:"🍃",level:80},{name:"PostgreSQL",icon:"🐘",level:78},{name:"GraphQL",icon:"🔺",level:75}]},{icon:"🛡️",title:"Cybersecurity",skills:[{name:"Pentesting",icon:"🔍",level:88},{name:"OWASP",icon:"🛡️",level:85},{name:"Kali Linux",icon:"🐉",level:82},{name:"Wireshark",icon:"🦈",level:80},{name:"Metasploit",icon:"💥",level:78},{name:"Burp Suite",icon:"🔒",level:85}]},{icon:"☁️",title:"DevOps & Cloud",skills:[{name:"Docker",icon:"🐳",level:85},{name:"AWS",icon:"☁️",level:80},{name:"Git",icon:"📝",level:90},{name:"CI/CD",icon:"🔄",level:78},{name:"Kubernetes",icon:"⚓",level:75},{name:"Linux",icon:"🐧",level:88}]}];return b.jsxs(dA,{id:"toolbox",children:[b.jsxs(DA,{children:[b.jsx(ya,{className:"tech-1",variants:l,animate:"animate",children:"⚛️"}),b.jsx(ya,{className:"tech-2",variants:l,animate:"animate",transition:{delay:.5},children:"🐍"}),b.jsx(ya,{className:"tech-3",variants:l,animate:"animate",transition:{delay:1},children:"🛡️"}),b.jsx(ya,{className:"tech-4",variants:l,animate:"animate",transition:{delay:1.5},children:"☁️"}),b.jsx(ya,{className:"tech-5",variants:l,animate:"animate",transition:{delay:2},children:"🐳"}),b.jsx(ya,{className:"tech-6",variants:l,animate:"animate",transition:{delay:.8},children:"🔒"})]}),b.jsxs(hA,{children:[b.jsx(mA,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:"My Toolbox"}),b.jsx(pA,{initial:{y:-30,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut",delay:.2},children:"A comprehensive arsenal of modern technologies and tools that I use to build secure, scalable, and innovative solutions."}),b.jsx(Q.div,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:b.jsx(gA,{children:c.map((d,f)=>b.jsxs(yA,{variants:a,whileHover:{scale:1.02},children:[b.jsx(vA,{children:d.icon}),b.jsx(bA,{children:d.title}),b.jsx(xA,{children:d.skills.map((p,m)=>b.jsxs(SA,{variants:s,whileHover:{scale:1.1,rotateY:15},whileTap:{scale:.95},children:[b.jsx(TA,{children:p.icon}),b.jsx(wA,{children:p.name}),b.jsx(AA,{children:b.jsx(EA,{level:p.level,initial:{width:0},whileInView:{width:`${p.level}%`},viewport:{once:!0},transition:{duration:1.5,ease:"easeOut",delay:m*.1}})})]},m))})]},f))})})]})]})},CA=E.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`,jA=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,RA=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,OA=E(Q.p)`
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`,zA=E(Q.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 3rem;
  }
`,VA=E(Q.button)`
  background: ${n=>n.active?"linear-gradient(45deg, #00ff88, #ff0088)":"transparent"};
  border: 2px solid ${n=>n.active?"transparent":"#00ff88"};
  color: ${n=>n.active?"#0f0f0f":"#00ff88"};
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${n=>n.active?"linear-gradient(45deg, #00ff88, #ff0088)":"#00ff88"};
    color: #0f0f0f;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
`,NA=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,_A=E(Q.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
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
`,BA=E.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`,UA=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.4rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,LA=E.span`
  background: ${n=>n.status==="completed"?"linear-gradient(45deg, #00ff88, #00cc66)":n.status==="in-progress"?"linear-gradient(45deg, #ff0088, #cc0066)":"linear-gradient(45deg, #ffaa00, #cc8800)"};
  color: #0f0f0f;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-shrink: 0;
`,kA=E.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`,HA=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,YA=E.span`
  background: rgba(255, 0, 136, 0.2);
  color: #ff0088;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(255, 0, 136, 0.3);
`,GA=E.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`,ny=E(Q.a)`
  background: ${n=>n.primary?"linear-gradient(45deg, #00ff88, #ff0088)":"transparent"};
  border: 2px solid ${n=>n.primary?"transparent":"#00ff88"};
  color: ${n=>n.primary?"#0f0f0f":"#00ff88"};
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${n=>n.primary?"linear-gradient(45deg, #00ff88, #ff0088)":"#00ff88"};
    color: #0f0f0f;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.4);
  }
`,qA=E.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`,XA=E.li`
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
`,PA=E.div`
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
`,KA=()=>{const[n,a]=J.useState("all"),s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},l={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},c={animate:{y:[0,-10,0],rotate:[0,5,-5,0],opacity:[.1,.2,.1],transition:{duration:6,repeat:1/0,ease:"easeInOut"}}},d=[{id:"all",label:"All Projects"},{id:"web",label:"Web Development"},{id:"security",label:"Cybersecurity"},{id:"mobile",label:"Mobile Apps"}],f=[{id:1,title:"SecureAuth Dashboard",category:"security",status:"completed",description:"A comprehensive cybersecurity dashboard for monitoring authentication attempts, analyzing security threats, and managing user access controls with real-time alerts.",features:["Real-time threat monitoring","Multi-factor authentication integration","Advanced analytics and reporting","Automated incident response"],techStack:["React","Node.js","MongoDB","WebSockets","JWT"],github:"https://github.com/unmesh/secureauth-dashboard",demo:"https://secureauth-demo.com"},{id:2,title:"E-Commerce Platform",category:"web",status:"completed",description:"A full-stack e-commerce solution with secure payment processing, inventory management, and modern responsive design optimized for performance.",features:["Secure payment gateway integration","Advanced product search & filtering","Real-time inventory management","Admin dashboard with analytics"],techStack:["React","TypeScript","Express","PostgreSQL","Stripe"],github:"https://github.com/unmesh/ecommerce-platform",demo:"https://ecommerce-demo.com"},{id:3,title:"Mobile Security Scanner",category:"mobile",status:"in-progress",description:"React Native application that scans mobile devices for security vulnerabilities, malware detection, and provides security recommendations.",features:["Vulnerability assessment scanning","Malware detection algorithms","Security recommendations engine","Encrypted data storage"],techStack:["React Native","Python","TensorFlow","Firebase"],github:"https://github.com/unmesh/mobile-security-scanner",demo:null},{id:4,title:"Portfolio Website",category:"web",status:"completed",description:"A responsive portfolio website built with modern React, featuring smooth animations, cyberpunk design, and optimized performance.",features:["Responsive cyberpunk design","Smooth framer-motion animations","Performance optimized","SEO friendly architecture"],techStack:["React","Styled Components","Framer Motion","Vite"],github:"https://github.com/unmesh/responsive-portfolio",demo:"https://unmesh-portfolio.com"},{id:5,title:"Penetration Testing Toolkit",category:"security",status:"in-progress",description:"A comprehensive toolkit for ethical hackers and security professionals with automated vulnerability scanning and reporting capabilities.",features:["Automated vulnerability scanning","Custom payload generation","Detailed security reports","Integration with popular security tools"],techStack:["Python","Kali Linux","Docker","PostgreSQL"],github:"https://github.com/unmesh/pentest-toolkit",demo:null},{id:6,title:"Task Management App",category:"mobile",status:"completed",description:"Cross-platform task management application with team collaboration features, real-time synchronization, and intuitive user interface.",features:["Real-time task synchronization","Team collaboration tools","Advanced filtering and sorting","Offline mode support"],techStack:["React Native","Redux","Firebase","TypeScript"],github:"https://github.com/unmesh/task-management-app",demo:"https://taskmanager-demo.com"}],p=n==="all"?f:f.filter(m=>m.category===n);return b.jsxs(CA,{id:"projects",children:[b.jsxs(PA,{children:[b.jsx(va,{className:"code-1",variants:c,animate:"animate",children:"{ code }"}),b.jsx(va,{className:"code-2",variants:c,animate:"animate",transition:{delay:.5},children:"< />"}),b.jsx(va,{className:"code-3",variants:c,animate:"animate",transition:{delay:1},children:"function()"}),b.jsx(va,{className:"code-4",variants:c,animate:"animate",transition:{delay:1.5},children:"const app"}),b.jsx(va,{className:"code-5",variants:c,animate:"animate",transition:{delay:2},children:"=> {}"}),b.jsx(va,{className:"code-6",variants:c,animate:"animate",transition:{delay:.8},children:"import *"})]}),b.jsxs(jA,{children:[b.jsx(RA,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:"My Projects"}),b.jsx(OA,{initial:{y:-30,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut",delay:.2},children:"A showcase of innovative projects spanning web development, cybersecurity, and mobile applications, each built with cutting-edge technologies."}),b.jsx(zA,{initial:{y:-20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut",delay:.4},children:d.map(m=>b.jsx(VA,{active:n===m.id,onClick:()=>a(m.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:m.label},m.id))}),b.jsx(po,{mode:"wait",children:b.jsx(Q.div,{variants:s,initial:"hidden",animate:"visible",exit:"hidden",children:b.jsx(NA,{children:p.map(m=>b.jsxs(_A,{variants:l,whileHover:{scale:1.02},layout:!0,children:[b.jsx(BA,{children:b.jsxs("div",{children:[b.jsx(UA,{children:m.title}),b.jsx(LA,{status:m.status,children:m.status.replace("-"," ")})]})}),b.jsx(kA,{children:m.description}),b.jsx(qA,{children:m.features.map((g,y)=>b.jsx(XA,{children:g},y))}),b.jsx(HA,{children:m.techStack.map((g,y)=>b.jsx(YA,{children:g},y))}),b.jsxs(GA,{children:[b.jsx(ny,{href:m.github,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:"📂 Code"}),m.demo&&b.jsx(ny,{href:m.demo,target:"_blank",rel:"noopener noreferrer",primary:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"🚀 Live Demo"})]})]},m.id))})},n)})]})]})},QA=E.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`,ZA=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,FA=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

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
`,JA=E.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #00ff88, #ff0088, #00ff88);
    transform: translateX(-50%);
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

    @media (max-width: 968px) {
      left: 30px;
    }
  }
`,Hf=E(Q.div)`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    justify-content: flex-end;
    
    @media (max-width: 968px) {
      justify-content: flex-start;
      padding-left: 80px;
    }
  }

  &:nth-child(even) {
    justify-content: flex-start;
    
    @media (max-width: 968px) {
      justify-content: flex-start;
      padding-left: 80px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`,$A=E(Q.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 25px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 25px rgba(0, 255, 136, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background: #0f0f0f;
    border-radius: 50%;
  }

  @media (max-width: 968px) {
    left: 30px;
    transform: translate(-50%, -50%);
  }
`,WA=E(Q.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  width: calc(50% - 60px);
  max-width: 420px;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 30px 60px rgba(0, 255, 136, 0.25);
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

  @media (max-width: 968px) {
    width: 100%;
    max-width: none;
  }

  ${Hf}:nth-child(odd) & {
    margin-right: 60px;
    
    @media (max-width: 968px) {
      margin-right: 0;
    }
  }

  ${Hf}:nth-child(even) & {
    margin-left: 60px;
    
    @media (max-width: 968px) {
      margin-left: 0;
    }
  }
`,IA=E.div`
  position: absolute;
  top: -15px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #0f0f0f;
  box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    right: 15px;
  }
`,t3=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.4rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,e3=E.h4`
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,n3=E.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
  color: rgba(255, 0, 136, 0.8);
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`,i3=E.p`
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`,a3=E.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`,r3=E.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '⚡';
    position: absolute;
    left: 0;
    color: #ff0088;
    font-size: 0.8rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`,s3=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`,l3=E.span`
  background: rgba(255, 0, 136, 0.2);
  color: #ff0088;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(255, 0, 136, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,o3=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,zl=E(Q.div)`
  position: absolute;
  font-size: 2rem;
  opacity: 0.1;
  color: #00ff88;

  &.briefcase-1 { top: 15%; left: 10%; }
  &.briefcase-2 { top: 30%; right: 15%; }
  &.briefcase-3 { bottom: 25%; left: 20%; }
  &.briefcase-4 { bottom: 40%; right: 10%; }
`,u3=()=>{const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.4,delayChildren:.2}}},a={hidden:{y:100,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},s={hidden:{scale:0,opacity:0},visible:{scale:1,opacity:1,transition:{type:"spring",stiffness:300,damping:20}}},l={animate:{y:[0,-20,0],rotate:[0,15,-15,0],scale:[1,1.1,1],transition:{duration:8,repeat:1/0,ease:"easeInOut"}}},c=[{title:"Senior Full Stack Developer",company:"TechSecure Solutions",logo:"TS",duration:"2023 - Present",description:"Leading development of secure web applications and cybersecurity tools for enterprise clients. Responsible for architecture design, code review, and mentoring junior developers.",achievements:["Architected and deployed 3 major enterprise security platforms","Reduced application vulnerabilities by 85% through security audits","Led a team of 5 developers using Agile methodologies","Implemented CI/CD pipelines reducing deployment time by 60%"],skills:["React","Node.js","Docker","AWS","PostgreSQL","Security Auditing"]},{title:"Cybersecurity Analyst",company:"SecureNet Corp",logo:"SN",duration:"2022 - 2023",description:"Conducted security assessments, penetration testing, and vulnerability analysis for client systems. Developed automated security scanning tools and incident response procedures.",achievements:["Performed 50+ successful penetration tests for clients","Developed custom security scanning tools using Python","Reduced average incident response time from 4 hours to 45 minutes","Trained 20+ employees on cybersecurity best practices"],skills:["Penetration Testing","Python","Kali Linux","OWASP","Risk Assessment"]},{title:"Frontend Developer",company:"WebCraft Studios",logo:"WC",duration:"2021 - 2022",description:"Developed responsive web applications and user interfaces for various clients. Focused on creating intuitive user experiences while maintaining high performance standards.",achievements:["Built 15+ responsive websites with 99%+ performance scores","Implemented modern React patterns improving code maintainability","Collaborated with designers to create pixel-perfect UI components","Optimized applications resulting in 40% faster load times"],skills:["React","TypeScript","CSS3","JavaScript","Figma","Performance Optimization"]},{title:"Junior Software Developer",company:"StartupTech",logo:"ST",duration:"2020 - 2021",description:"Entry-level position focused on learning modern web development practices while contributing to various client projects and internal tools development.",achievements:["Successfully completed 10+ client projects on time","Learned and implemented React, Node.js, and database management","Contributed to open-source projects gaining 500+ GitHub stars","Received 'Employee of the Month' award twice for exceptional performance"],skills:["HTML5","CSS3","JavaScript","Git","MongoDB","Express.js"]}];return b.jsxs(QA,{id:"experience",children:[b.jsxs(o3,{children:[b.jsx(zl,{className:"briefcase-1",variants:l,animate:"animate",children:"💼"}),b.jsx(zl,{className:"briefcase-2",variants:l,animate:"animate",transition:{delay:1},children:"🏢"}),b.jsx(zl,{className:"briefcase-3",variants:l,animate:"animate",transition:{delay:2},children:"🚀"}),b.jsx(zl,{className:"briefcase-4",variants:l,animate:"animate",transition:{delay:.5},children:"⭐"})]}),b.jsxs(ZA,{children:[b.jsx(FA,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:"Work Experience"}),b.jsx(JA,{children:b.jsx(Q.div,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:c.map((d,f)=>b.jsxs(Hf,{children:[b.jsx($A,{variants:s,whileHover:{scale:1.4,boxShadow:"0 0 40px rgba(0, 255, 136, 0.8)"}}),b.jsxs(WA,{variants:a,whileHover:{scale:1.02},children:[b.jsx(IA,{children:d.logo}),b.jsx(t3,{children:d.title}),b.jsx(e3,{children:d.company}),b.jsx(n3,{children:d.duration}),b.jsx(i3,{children:d.description}),b.jsx(a3,{children:d.achievements.map((p,m)=>b.jsx(r3,{children:p},m))}),b.jsx(s3,{children:d.skills.map((p,m)=>b.jsx(l3,{children:p},m))})]})]},f))})})]})]})},c3=E.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`,f3=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,d3=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,h3=E(Q.p)`
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`,m3=E(Q.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 3rem;
  }
`,p3=E(Q.button)`
  background: ${n=>n.active?"linear-gradient(45deg, #00ff88, #ff0088)":"transparent"};
  border: 2px solid ${n=>n.active?"transparent":"#00ff88"};
  color: ${n=>n.active?"#0f0f0f":"#00ff88"};
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${n=>n.active?"linear-gradient(45deg, #00ff88, #ff0088)":"#00ff88"};
    color: #0f0f0f;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
`,g3=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,y3=E(Q.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
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
`,v3=E.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`,b3=E.span`
  background: ${n=>n.type==="research"?"linear-gradient(45deg, #00ff88, #00cc66)":n.type==="article"?"linear-gradient(45deg, #ff0088, #cc0066)":n.type==="conference"?"linear-gradient(45deg, #ffaa00, #cc8800)":"linear-gradient(45deg, #aa00ff, #8800cc)"};
  color: #0f0f0f;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-shrink: 0;
`,x3=E.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  color: rgba(255, 0, 136, 0.8);
  font-weight: 600;
  margin-top: 0.3rem;
`,S3=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,T3=E.h4`
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,w3=E.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`,A3=E.div`
  margin-bottom: 1rem;
`,E3=E.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 0.5rem;
`,D3=E.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-style: italic;
`,M3=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,C3=E.span`
  background: rgba(255, 0, 136, 0.2);
  color: #ff0088;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(255, 0, 136, 0.3);
`,j3=E.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,R3=E(Q.a)`
  background: ${n=>n.primary?"linear-gradient(45deg, #00ff88, #ff0088)":"transparent"};
  border: 2px solid ${n=>n.primary?"transparent":"#00ff88"};
  color: ${n=>n.primary?"#0f0f0f":"#00ff88"};
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${n=>n.primary?"linear-gradient(45deg, #00ff88, #ff0088)":"#00ff88"};
    color: #0f0f0f;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.4);
  }
`,O3=E.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,z3=E.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
`,V3=E.div`
  background: linear-gradient(45deg, #ffaa00, #ff8800);
  color: #0f0f0f;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`,N3=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,ba=E(Q.div)`
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.1;
  color: #00ff88;

  &.icon-1 { top: 15%; left: 5%; }
  &.icon-2 { top: 25%; right: 8%; }
  &.icon-3 { bottom: 35%; left: 10%; }
  &.icon-4 { bottom: 20%; right: 12%; }
  &.icon-5 { top: 60%; left: 15%; }
  &.icon-6 { top: 45%; right: 20%; }
`,_3=()=>{const[n,a]=J.useState("all"),s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},l={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},c={animate:{y:[0,-15,0],rotate:[0,10,-10,0],opacity:[.1,.2,.1],transition:{duration:6,repeat:1/0,ease:"easeInOut"}}},d=[{id:"all",label:"All Publications"},{id:"research",label:"Research Papers"},{id:"article",label:"Technical Articles"},{id:"conference",label:"Conference Papers"}],f=[{id:1,type:"research",title:"Advanced Cybersecurity Frameworks for Modern Web Applications",venue:"Journal of Cybersecurity Research",date:"December 2024",authors:"Unmesh Achar, Dr. Sarah Johnson, Prof. Michael Chen",abstract:"This paper presents a comprehensive framework for implementing advanced cybersecurity measures in modern web applications. We propose a multi-layered approach that combines traditional security practices with machine learning-based threat detection.",keywords:["Cybersecurity","Web Security","Machine Learning","Threat Detection","Framework"],citations:15,impact:"High Impact",links:[{type:"paper",url:"https://example.com/paper1.pdf",label:"📄 Full Paper"},{type:"code",url:"https://github.com/unmesh/security-framework",label:"💻 Source Code"}]},{id:2,type:"conference",title:"Real-time Vulnerability Assessment in Cloud Infrastructure",venue:"International Conference on Cloud Security (ICCS 2024)",date:"October 2024",authors:"Unmesh Achar, Dr. Emily Rodriguez",abstract:"We present a novel approach for real-time vulnerability assessment in cloud infrastructure using automated scanning techniques and AI-powered risk analysis. Our system can detect and categorize vulnerabilities with 94% accuracy.",keywords:["Cloud Security","Vulnerability Assessment","Real-time Monitoring","AI","Risk Analysis"],citations:8,impact:"Peer Reviewed",links:[{type:"paper",url:"https://example.com/paper2.pdf",label:"📄 Conference Paper"},{type:"presentation",url:"https://example.com/presentation2.pdf",label:"📊 Presentation"}]},{id:3,type:"article",title:"Building Secure React Applications: A Developer's Guide",venue:"TechSecure Magazine",date:"September 2024",authors:"Unmesh Achar",abstract:"A comprehensive guide for developers on implementing security best practices in React applications. Covers common vulnerabilities, secure coding practices, and modern security tools for frontend development.",keywords:["React","Frontend Security","Secure Coding","Web Development","Best Practices"],citations:25,impact:"Industry Guide",links:[{type:"article",url:"https://example.com/article1",label:"📰 Read Article"},{type:"code",url:"https://github.com/unmesh/secure-react-guide",label:"💻 Code Examples"}]},{id:4,type:"research",title:"Machine Learning Approaches for Intrusion Detection Systems",venue:"IEEE Transactions on Network Security",date:"August 2024",authors:"Unmesh Achar, Dr. Alex Thompson, Dr. Maria Santos",abstract:"This study evaluates various machine learning algorithms for network intrusion detection, proposing a hybrid approach that combines supervised and unsupervised learning techniques for improved accuracy and reduced false positives.",keywords:["Machine Learning","Intrusion Detection","Network Security","Hybrid Algorithms","Anomaly Detection"],citations:32,impact:"High Impact",links:[{type:"paper",url:"https://example.com/paper3.pdf",label:"📄 IEEE Paper"},{type:"dataset",url:"https://example.com/dataset",label:"📊 Dataset"}]},{id:5,type:"conference",title:"Blockchain-based Identity Management for IoT Devices",venue:"International IoT Security Summit 2024",date:"July 2024",authors:"Unmesh Achar, Dr. Jennifer Wu",abstract:"We propose a decentralized identity management system for IoT devices using blockchain technology. Our approach ensures secure device authentication while maintaining scalability and performance in large IoT networks.",keywords:["Blockchain","IoT Security","Identity Management","Decentralization","Authentication"],citations:12,impact:"Best Paper Award",links:[{type:"paper",url:"https://example.com/paper4.pdf",label:"📄 Award Paper"},{type:"demo",url:"https://example.com/demo",label:"🎮 Live Demo"}]},{id:6,type:"article",title:"The Future of Cybersecurity: Emerging Threats and Solutions",venue:"CyberDefense Quarterly",date:"June 2024",authors:"Unmesh Achar",abstract:"An analysis of emerging cybersecurity threats in 2024 and beyond, including AI-powered attacks, quantum computing implications, and next-generation defense strategies. Provides actionable insights for security professionals.",keywords:["Emerging Threats","AI Security","Quantum Computing","Future Trends","Defense Strategies"],citations:18,impact:"Industry Analysis",links:[{type:"article",url:"https://example.com/article2",label:"📰 Full Article"},{type:"podcast",url:"https://example.com/podcast",label:"🎧 Podcast Discussion"}]}],p=n==="all"?f:f.filter(m=>m.type===n);return b.jsxs(c3,{id:"publications",children:[b.jsxs(N3,{children:[b.jsx(ba,{className:"icon-1",variants:c,animate:"animate",children:"📚"}),b.jsx(ba,{className:"icon-2",variants:c,animate:"animate",transition:{delay:.5},children:"🔬"}),b.jsx(ba,{className:"icon-3",variants:c,animate:"animate",transition:{delay:1},children:"📄"}),b.jsx(ba,{className:"icon-4",variants:c,animate:"animate",transition:{delay:1.5},children:"🏆"}),b.jsx(ba,{className:"icon-5",variants:c,animate:"animate",transition:{delay:2},children:"💡"}),b.jsx(ba,{className:"icon-6",variants:c,animate:"animate",transition:{delay:.8},children:"📊"})]}),b.jsxs(f3,{children:[b.jsx(d3,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:"Publications & Research"}),b.jsx(h3,{initial:{y:-30,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut",delay:.2},children:"Academic publications, research papers, and technical articles contributing to the cybersecurity and software development communities."}),b.jsx(m3,{initial:{y:-20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut",delay:.4},children:d.map(m=>b.jsx(p3,{active:n===m.id,onClick:()=>a(m.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:m.label},m.id))}),b.jsx(po,{mode:"wait",children:b.jsx(Q.div,{variants:s,initial:"hidden",animate:"visible",exit:"hidden",children:b.jsx(g3,{children:p.map(m=>b.jsxs(y3,{variants:l,whileHover:{scale:1.02},layout:!0,children:[b.jsx(v3,{children:b.jsxs("div",{children:[b.jsx(b3,{type:m.type,children:m.type}),b.jsx(x3,{children:m.date})]})}),b.jsx(S3,{children:m.title}),b.jsx(T3,{children:m.venue}),b.jsxs(A3,{children:[b.jsx(E3,{children:"Authors:"}),b.jsx(D3,{children:m.authors})]}),b.jsx(w3,{children:m.abstract}),b.jsx(M3,{children:m.keywords.map((g,y)=>b.jsx(C3,{children:g},y))}),b.jsx(j3,{children:m.links.map((g,y)=>b.jsx(R3,{href:g.url,target:"_blank",rel:"noopener noreferrer",primary:y===0,whileHover:{scale:1.05},whileTap:{scale:.95},children:g.label},y))}),b.jsxs(O3,{children:[b.jsxs(z3,{children:["📈 ",m.citations," Citations"]}),b.jsx(V3,{children:m.impact})]})]},m.id))})},n)})]})]})},B3=E.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`,U3=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,L3=E(Q.h2)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,k3=E(Q.p)`
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`,H3=E(Q.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 3rem;
  }
`,Y3=E(Q.button)`
  background: ${n=>n.active?"linear-gradient(45deg, #00ff88, #ff0088)":"transparent"};
  border: 2px solid ${n=>n.active?"transparent":"#00ff88"};
  color: ${n=>n.active?"#0f0f0f":"#00ff88"};
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${n=>n.active?"linear-gradient(45deg, #00ff88, #ff0088)":"#00ff88"};
    color: #0f0f0f;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
`,G3=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,q3=E(Q.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
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
      top: 15px;
      right: 15px;
      width: 30px;
      height: 30px;
      background: linear-gradient(45deg, #00ff88, #00cc66);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0f0f0f;
      font-weight: bold;
      font-size: 1.2rem;
    }
  `}
`,X3=E.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`,P3=E.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  ${n=>n.completed&&`
    filter: saturate(1.5) brightness(1.2);
  `}
`,K3=E.span`
  background: ${n=>n.category==="travel"?"linear-gradient(45deg, #00ff88, #00cc66)":n.category==="career"?"linear-gradient(45deg, #ff0088, #cc0066)":n.category==="learning"?"linear-gradient(45deg, #ffaa00, #cc8800)":n.category==="personal"?"linear-gradient(45deg, #aa00ff, #8800cc)":"linear-gradient(45deg, #00ffff, #0088cc)"};
  color: #0f0f0f;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-shrink: 0;
`,Q3=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${n=>n.completed?"#00ff88":"#ffffff"};
  margin-bottom: 0.5rem;
  text-shadow: ${n=>n.completed?"0 0 15px rgba(0, 255, 136, 0.5)":"none"};
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  ${n=>n.completed&&`
    text-decoration: line-through;
    text-decoration-color: #00ff88;
    text-decoration-thickness: 2px;
  `}
`,Z3=E.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`,F3=E.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin-bottom: 1rem;
  overflow: hidden;
`,J3=E(Q.div)`
  height: 100%;
  background: linear-gradient(90deg, #00ff88, #ff0088);
  border-radius: 3px;
  width: ${n=>n.progress}%;
`,$3=E.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  text-align: right;
`,W3=E.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`,I3=E.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem;

  &::before {
    content: ${n=>n.completed?'"✅"':'"⭕"'};
    position: absolute;
    left: 0;
    font-size: 0.8rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${n=>n.completed&&`
    text-decoration: line-through;
    opacity: 0.7;
  `}
`,t6=E.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  color: rgba(255, 0, 136, 0.8);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
`,e6=E(Q.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  padding: 2rem;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
`,Vl=E.div`
  text-align: center;
`,Nl=E.div`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  font-weight: 900;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 15px rgba(0, 255, 136, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,_l=E.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`,n6=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,xa=E(Q.div)`
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.1;
  color: #00ff88;

  &.dream-1 { top: 10%; left: 5%; }
  &.dream-2 { top: 25%; right: 8%; }
  &.dream-3 { bottom: 35%; left: 10%; }
  &.dream-4 { bottom: 20%; right: 12%; }
  &.dream-5 { top: 60%; left: 15%; }
  &.dream-6 { top: 45%; right: 20%; }
`,i6=()=>{const[n,a]=J.useState("all"),s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},l={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},c={animate:{y:[0,-20,0],rotate:[0,15,-15,0],scale:[1,1.1,1],transition:{duration:8,repeat:1/0,ease:"easeInOut"}}},d=[{id:"all",label:"All Goals"},{id:"travel",label:"Travel & Adventure"},{id:"career",label:"Career & Professional"},{id:"learning",label:"Learning & Skills"},{id:"personal",label:"Personal Growth"}],f=[{id:1,category:"travel",title:"Visit all 7 continents",description:"Experience the diverse cultures, landscapes, and adventures that each continent has to offer.",icon:"🌍",progress:42,completed:!1,timeline:"By 2030",steps:[{text:"Visit Asia (India, Japan, Thailand)",completed:!0},{text:"Explore Europe (10+ countries)",completed:!0},{text:"Adventure in North America",completed:!0},{text:"Discover South America",completed:!1},{text:"Safari in Africa",completed:!1},{text:"Explore Australia & Oceania",completed:!1},{text:"Research expedition to Antarctica",completed:!1}]},{id:2,category:"career",title:"Start my own cybersecurity company",description:"Build a leading cybersecurity consultancy helping organizations protect their digital assets.",icon:"🚀",progress:65,completed:!1,timeline:"By 2026",steps:[{text:"Gain 5+ years industry experience",completed:!0},{text:"Build professional network",completed:!0},{text:"Develop business plan",completed:!0},{text:"Secure initial funding",completed:!1},{text:"Hire first team members",completed:!1},{text:"Land first major client",completed:!1}]},{id:3,category:"learning",title:"Master 5 programming languages",description:"Become proficient in diverse programming paradigms and technologies.",icon:"💻",progress:80,completed:!1,timeline:"By 2025",steps:[{text:"JavaScript & TypeScript",completed:!0},{text:"Python for security & AI",completed:!0},{text:"Go for system programming",completed:!0},{text:"Rust for performance",completed:!0},{text:"C++ for low-level programming",completed:!1}]},{id:4,category:"personal",title:"Run a marathon",description:"Complete a full 26.2-mile marathon race, testing physical and mental endurance.",icon:"🏃‍♂️",progress:30,completed:!1,timeline:"By 2025",steps:[{text:"Start regular running routine",completed:!0},{text:"Complete 5K races",completed:!0},{text:"Complete 10K race",completed:!1},{text:"Complete half marathon",completed:!1},{text:"Train for full marathon",completed:!1},{text:"Complete full marathon",completed:!1}]},{id:5,category:"career",title:"Speak at major tech conference",description:"Share knowledge and expertise with the global tech community at a prestigious conference.",icon:"🎤",progress:50,completed:!1,timeline:"By 2025",steps:[{text:"Develop expertise in specialized area",completed:!0},{text:"Start speaking at local meetups",completed:!0},{text:"Present at regional conferences",completed:!1},{text:"Submit proposal to major conference",completed:!1},{text:"Deliver keynote presentation",completed:!1}]},{id:6,category:"learning",title:"Get PhD in Computer Science",description:"Pursue advanced research in cybersecurity and contribute original knowledge to the field.",icon:"🎓",progress:15,completed:!1,timeline:"By 2029",steps:[{text:"Research potential programs",completed:!0},{text:"Prepare for entrance exams",completed:!1},{text:"Apply to top universities",completed:!1},{text:"Complete coursework",completed:!1},{text:"Conduct original research",completed:!1},{text:"Write and defend dissertation",completed:!1}]},{id:7,category:"personal",title:"Learn to fly a plane",description:"Earn a private pilot license and experience the freedom of flight.",icon:"✈️",progress:20,completed:!1,timeline:"By 2027",steps:[{text:"Take introductory flight lesson",completed:!0},{text:"Complete ground school",completed:!1},{text:"Log required flight hours",completed:!1},{text:"Pass written exam",completed:!1},{text:"Pass practical exam",completed:!1},{text:"Receive pilot license",completed:!1}]},{id:8,category:"travel",title:"Hike the Everest Base Camp",description:"Trek to the base camp of the world's highest mountain in the Himalayas.",icon:"🏔️",progress:10,completed:!1,timeline:"By 2026",steps:[{text:"Build physical fitness",completed:!1},{text:"Practice on smaller mountain treks",completed:!1},{text:"Plan expedition logistics",completed:!1},{text:"Complete high-altitude training",completed:!1},{text:"Trek to Everest Base Camp",completed:!1}]},{id:9,category:"career",title:"Publish a technical book",description:"Write and publish a comprehensive book on cybersecurity best practices.",icon:"📚",progress:35,completed:!1,timeline:"By 2026",steps:[{text:"Outline book structure",completed:!0},{text:"Research and write chapters",completed:!0},{text:"Find publisher or self-publish",completed:!1},{text:"Complete editing process",completed:!1},{text:"Launch book marketing campaign",completed:!1}]},{id:10,category:"learning",title:"Learn to scuba dive",description:"Explore the underwater world and earn advanced diving certifications.",icon:"🤿",progress:100,completed:!0,timeline:"Completed 2024",steps:[{text:"Complete Open Water certification",completed:!0},{text:"Get Advanced Open Water",completed:!0},{text:"Complete Rescue Diver course",completed:!0},{text:"Dive in 3 different countries",completed:!0},{text:"Become Divemaster",completed:!0}]}],p=n==="all"?f:f.filter(S=>S.category===n),m=f.length,g=f.filter(S=>S.completed).length,y=f.filter(S=>S.progress>0&&!S.completed).length,x=Math.round(f.reduce((S,j)=>S+j.progress,0)/m);return b.jsxs(B3,{id:"bucket-list",children:[b.jsxs(n6,{children:[b.jsx(xa,{className:"dream-1",variants:c,animate:"animate",children:"⭐"}),b.jsx(xa,{className:"dream-2",variants:c,animate:"animate",transition:{delay:.5},children:"🌟"}),b.jsx(xa,{className:"dream-3",variants:c,animate:"animate",transition:{delay:1},children:"💫"}),b.jsx(xa,{className:"dream-4",variants:c,animate:"animate",transition:{delay:1.5},children:"✨"}),b.jsx(xa,{className:"dream-5",variants:c,animate:"animate",transition:{delay:2},children:"🎯"}),b.jsx(xa,{className:"dream-6",variants:c,animate:"animate",transition:{delay:.8},children:"🚀"})]}),b.jsxs(U3,{children:[b.jsx(L3,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:"My Bucket List"}),b.jsx(k3,{initial:{y:-30,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut",delay:.2},children:"Personal goals, dreams, and aspirations that drive me forward. Life is an adventure, and these are the milestones I'm working towards."}),b.jsxs(e6,{initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut",delay:.4},children:[b.jsxs(Vl,{children:[b.jsx(Nl,{children:m}),b.jsx(_l,{children:"Total Goals"})]}),b.jsxs(Vl,{children:[b.jsx(Nl,{children:g}),b.jsx(_l,{children:"Completed"})]}),b.jsxs(Vl,{children:[b.jsx(Nl,{children:y}),b.jsx(_l,{children:"In Progress"})]}),b.jsxs(Vl,{children:[b.jsxs(Nl,{children:[x,"%"]}),b.jsx(_l,{children:"Avg Progress"})]})]}),b.jsx(H3,{initial:{y:-20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut",delay:.6},children:d.map(S=>b.jsx(Y3,{active:n===S.id,onClick:()=>a(S.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:S.label},S.id))}),b.jsx(po,{mode:"wait",children:b.jsx(Q.div,{variants:s,initial:"hidden",animate:"visible",exit:"hidden",children:b.jsx(G3,{children:p.map(S=>b.jsxs(q3,{variants:l,whileHover:{scale:1.02},completed:S.completed,layout:!0,children:[b.jsx(X3,{children:b.jsx(K3,{category:S.category,children:S.category})}),b.jsx(P3,{completed:S.completed,children:S.icon}),b.jsx(Q3,{completed:S.completed,children:S.title}),b.jsx(Z3,{children:S.description}),b.jsx(F3,{children:b.jsx(J3,{progress:S.progress,initial:{width:0},whileInView:{width:`${S.progress}%`},viewport:{once:!0},transition:{duration:1.5,ease:"easeOut",delay:.2}})}),b.jsxs($3,{children:[S.progress,"% Complete"]}),b.jsx(W3,{children:S.steps.map((j,z)=>b.jsx(I3,{completed:j.completed,children:j.text},z))}),b.jsx(t6,{children:S.timeline})]},S.id))})},n)})]})]})},a6=E.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`,r6=E.div`
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
`,s6=E.div`
  @media (max-width: 968px) {
    order: 2;
  }
`,l6=E.div`
  @media (max-width: 968px) {
    order: 1;
  }
`,o6=E(Q.h2)`
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
`,u6=E(Q.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    text-align: center;
  }
`,c6=E.div`
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
`,Ll=E.div``,kl=E.div`
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
`,f6=E(Q.div)`
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
`,d6=E(Q.form)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,h6=E.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,m6=E.div`
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
`,p6=E.textarea`
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
`,g6=E(Q.button)`
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
`,y6=E(Q.div)`
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
`,v6=E.div`
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
`,b6=()=>{const[n,a]=J.useState({name:"",email:"",subject:"",message:""}),[s,l]=J.useState(!1),[c,d]=J.useState({type:"",message:""}),f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},p={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},m={animate:{y:[0,-15,0],rotate:[0,10,-10,0],scale:[1,1.1,1],transition:{duration:6,repeat:1/0,ease:"easeInOut"}}},g=x=>{a({...n,[x.target.name]:x.target.value})},y=async x=>{x.preventDefault(),l(!0),d({type:"",message:""});try{if(await new Promise(S=>setTimeout(S,2e3)),n.name&&n.email&&n.message)d({type:"success",message:"Thank you for your message! I'll get back to you soon."}),a({name:"",email:"",subject:"",message:""});else throw new Error("Please fill in all required fields")}catch{d({type:"error",message:"Failed to send message. Please try again later."})}finally{l(!1)}};return b.jsxs(a6,{id:"contact",children:[b.jsxs(v6,{children:[b.jsx(Sa,{className:"contact-1",variants:m,animate:"animate",children:"📧"}),b.jsx(Sa,{className:"contact-2",variants:m,animate:"animate",transition:{delay:.5},children:"📱"}),b.jsx(Sa,{className:"contact-3",variants:m,animate:"animate",transition:{delay:1},children:"💬"}),b.jsx(Sa,{className:"contact-4",variants:m,animate:"animate",transition:{delay:1.5},children:"🌐"}),b.jsx(Sa,{className:"contact-5",variants:m,animate:"animate",transition:{delay:2},children:"📍"}),b.jsx(Sa,{className:"contact-6",variants:m,animate:"animate",transition:{delay:.8},children:"💼"})]}),b.jsx(r6,{children:b.jsxs(Q.div,{variants:f,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[b.jsxs(s6,{children:[b.jsx(o6,{variants:p,children:"Get In Touch"}),b.jsx(u6,{variants:p,children:"Ready to collaborate on your next project or discuss cybersecurity solutions? I'm always excited to connect with fellow developers, security professionals, and innovative thinkers."}),b.jsxs(c6,{children:[b.jsxs(Bl,{variants:p,whileHover:{scale:1.02},children:[b.jsx(Ul,{children:"📧"}),b.jsxs(Ll,{children:[b.jsx(kl,{children:"Email"}),b.jsx(Hl,{children:"unmesh.achar@email.com"})]})]}),b.jsxs(Bl,{variants:p,whileHover:{scale:1.02},children:[b.jsx(Ul,{children:"📱"}),b.jsxs(Ll,{children:[b.jsx(kl,{children:"Phone"}),b.jsx(Hl,{children:"+1 (555) 123-4567"})]})]}),b.jsxs(Bl,{variants:p,whileHover:{scale:1.02},children:[b.jsx(Ul,{children:"📍"}),b.jsxs(Ll,{children:[b.jsx(kl,{children:"Location"}),b.jsx(Hl,{children:"San Francisco, CA"})]})]}),b.jsxs(Bl,{variants:p,whileHover:{scale:1.02},children:[b.jsx(Ul,{children:"💼"}),b.jsxs(Ll,{children:[b.jsx(kl,{children:"Available For"}),b.jsx(Hl,{children:"Freelance & Full-time"})]})]})]}),b.jsxs(f6,{variants:p,children:[b.jsx(Hr,{href:"https://github.com/unmesh",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},children:"🐙"}),b.jsx(Hr,{href:"https://linkedin.com/in/unmesh-achar",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:-5},whileTap:{scale:.9},children:"💼"}),b.jsx(Hr,{href:"https://twitter.com/unmesh_achar",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},children:"🐦"}),b.jsx(Hr,{href:"mailto:unmesh.achar@email.com",whileHover:{scale:1.1,rotate:-5},whileTap:{scale:.9},children:"✉️"}),b.jsx(Hr,{href:"/resume-unmesh-achar.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},children:"📄"})]})]}),b.jsx(l6,{children:b.jsxs(d6,{variants:p,onSubmit:y,whileHover:{scale:1.01},children:[b.jsx(h6,{children:"Send Me a Message"}),b.jsxs(m6,{children:[b.jsxs(Yl,{children:[b.jsx(Gl,{htmlFor:"name",children:"Name *"}),b.jsx(of,{type:"text",id:"name",name:"name",placeholder:"Your Name",value:n.name,onChange:g,required:!0})]}),b.jsxs(Yl,{children:[b.jsx(Gl,{htmlFor:"email",children:"Email *"}),b.jsx(of,{type:"email",id:"email",name:"email",placeholder:"your.email@example.com",value:n.email,onChange:g,required:!0})]})]}),b.jsxs(Yl,{children:[b.jsx(Gl,{htmlFor:"subject",children:"Subject"}),b.jsx(of,{type:"text",id:"subject",name:"subject",placeholder:"Project Collaboration / Job Opportunity / General Inquiry",value:n.subject,onChange:g})]}),b.jsxs(Yl,{children:[b.jsx(Gl,{htmlFor:"message",children:"Message *"}),b.jsx(p6,{id:"message",name:"message",placeholder:"Tell me about your project, question, or how we can work together...",value:n.message,onChange:g,required:!0})]}),b.jsx(g6,{type:"submit",disabled:s,whileHover:{scale:1.02},whileTap:{scale:.98},children:s?"Sending Message...":"Send Message 🚀"}),c.message&&b.jsx(y6,{success:c.type==="success",error:c.type==="error",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:c.message})]})})]})})]})},x6=H5`
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
`,S6=E.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  color: #fff;
  overflow-x: hidden;
`,T6=()=>b.jsxs(S6,{children:[b.jsx(x6,{}),b.jsx(Mw,{}),b.jsxs(Q.main,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[b.jsx(Hw,{}),b.jsx($w,{}),b.jsx(fA,{}),b.jsx(MA,{}),b.jsx(KA,{}),b.jsx(u3,{}),b.jsx(_3,{}),b.jsx(i6,{}),b.jsx(b6,{})]})]});kx.createRoot(document.getElementById("root")).render(b.jsx(J.StrictMode,{children:b.jsx(T6,{})}));
