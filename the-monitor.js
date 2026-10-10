(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html,body,#root{height:100%;margin:0}#root{padding:0;font-family:system-ui,-apple-system,sans-serif;cursor:default}#root::-webkit-scrollbar{width:0px;background:transparent}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var j1=Object.defineProperty;var P1=(e,t,n)=>t in e?j1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ft=(e,t,n)=>P1(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function I1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xf={exports:{}},Ho={},_f={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),z1=Symbol.for("react.portal"),M1=Symbol.for("react.fragment"),L1=Symbol.for("react.strict_mode"),T1=Symbol.for("react.profiler"),R1=Symbol.for("react.provider"),D1=Symbol.for("react.context"),O1=Symbol.for("react.forward_ref"),F1=Symbol.for("react.suspense"),B1=Symbol.for("react.memo"),Q1=Symbol.for("react.lazy"),vd=Symbol.iterator;function W1(e){return e===null||typeof e!="object"?null:(e=vd&&e[vd]||e["@@iterator"],typeof e=="function"?e:null)}var $f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ep=Object.assign,tp={};function Gr(e,t,n){this.props=e,this.context=t,this.refs=tp,this.updater=n||$f}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function np(){}np.prototype=Gr.prototype;function Tc(e,t,n){this.props=e,this.context=t,this.refs=tp,this.updater=n||$f}var Rc=Tc.prototype=new np;Rc.constructor=Tc;ep(Rc,Gr.prototype);Rc.isPureReactComponent=!0;var bd=Array.isArray,rp=Object.prototype.hasOwnProperty,Dc={current:null},ip={key:!0,ref:!0,__self:!0,__source:!0};function ap(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)rp.call(t,r)&&!ip.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ea,type:e,key:a,ref:o,props:i,_owner:Dc.current}}function U1(e,t){return{$$typeof:ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ea}function H1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wd=/\/+/g;function ks(e,t){return typeof e=="object"&&e!==null&&e.key!=null?H1(""+e.key):t.toString(36)}function Qa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ea:case z1:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ks(o,0):r,bd(i)?(n="",e!=null&&(n=e.replace(wd,"$&/")+"/"),Qa(i,t,n,"",function(u){return u})):i!=null&&(Oc(i)&&(i=U1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",bd(e))for(var l=0;l<e.length;l++){a=e[l];var c=r+ks(a,l);o+=Qa(a,t,n,c,i)}else if(c=W1(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=r+ks(a,l++),o+=Qa(a,t,n,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ma(e,t,n){if(e==null)return e;var r=[],i=0;return Qa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function V1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},Wa={transition:null},q1={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:Dc};function op(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:ma,forEach:function(e,t,n){ma(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ma(e,function(){t++}),t},toArray:function(e){return ma(e,function(t){return t})||[]},only:function(e){if(!Oc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Gr;X.Fragment=M1;X.Profiler=T1;X.PureComponent=Tc;X.StrictMode=L1;X.Suspense=F1;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1;X.act=op;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ep({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Dc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)rp.call(t,c)&&!ip.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ea,type:e.type,key:i,ref:a,props:r,_owner:o}};X.createContext=function(e){return e={$$typeof:D1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:R1,_context:e},e.Consumer=e};X.createElement=ap;X.createFactory=function(e){var t=ap.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:O1,render:e}};X.isValidElement=Oc;X.lazy=function(e){return{$$typeof:Q1,_payload:{_status:-1,_result:e},_init:V1}};X.memo=function(e,t){return{$$typeof:B1,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Wa.transition;Wa.transition={};try{e()}finally{Wa.transition=t}};X.unstable_act=op;X.useCallback=function(e,t){return Je.current.useCallback(e,t)};X.useContext=function(e){return Je.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};X.useEffect=function(e,t){return Je.current.useEffect(e,t)};X.useId=function(){return Je.current.useId()};X.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Je.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};X.useRef=function(e){return Je.current.useRef(e)};X.useState=function(e){return Je.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Je.current.useTransition()};X.version="18.3.1";_f.exports=X;var b=_f.exports;const Fc=I1(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K1=b,Y1=Symbol.for("react.element"),J1=Symbol.for("react.fragment"),Z1=Object.prototype.hasOwnProperty,G1=K1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X1={key:!0,ref:!0,__self:!0,__source:!0};function sp(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Z1.call(t,r)&&!X1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Y1,type:e,key:a,ref:o,props:i,_owner:G1.current}}Ho.Fragment=J1;Ho.jsx=sp;Ho.jsxs=sp;Xf.exports=Ho;var s=Xf.exports,no={},lp={exports:{}},ut={},cp={exports:{}},up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,z){var T=D.length;D.push(z);e:for(;0<T;){var A=T-1>>>1,S=D[A];if(0<i(S,z))D[A]=z,D[T]=S,T=A;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],T=D.pop();if(T!==z){D[0]=T;e:for(var A=0,S=D.length,I=S>>>1;A<I;){var R=2*(A+1)-1,Q=D[R],J=R+1,K=D[J];if(0>i(Q,T))J<S&&0>i(K,Q)?(D[A]=K,D[J]=T,A=J):(D[A]=Q,D[R]=T,A=R);else if(J<S&&0>i(K,T))D[A]=K,D[J]=T,A=J;else break e}}return z}function i(D,z){var T=D.sortIndex-z.sortIndex;return T!==0?T:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,m=null,f=3,g=!1,v=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(D){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=D)r(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(u)}}function k(D){if(w=!1,h(D),!v)if(n(c)!==null)v=!0,be(C);else{var z=n(u);z!==null&&W(k,z.startTime-D)}}function C(D,z){v=!1,w&&(w=!1,y(N),N=-1),g=!0;var T=f;try{for(h(z),m=n(c);m!==null&&(!(m.expirationTime>z)||D&&!F());){var A=m.callback;if(typeof A=="function"){m.callback=null,f=m.priorityLevel;var S=A(m.expirationTime<=z);z=e.unstable_now(),typeof S=="function"?m.callback=S:m===n(c)&&r(c),h(z)}else r(c);m=n(c)}if(m!==null)var I=!0;else{var R=n(u);R!==null&&W(k,R.startTime-z),I=!1}return I}finally{m=null,f=T,g=!1}}var j=!1,E=null,N=-1,M=5,P=-1;function F(){return!(e.unstable_now()-P<M)}function H(){if(E!==null){var D=e.unstable_now();P=D;var z=!0;try{z=E(!0,D)}finally{z?G():(j=!1,E=null)}}else j=!1}var G;if(typeof p=="function")G=function(){p(H)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,le=_.port2;_.port1.onmessage=H,G=function(){le.postMessage(null)}}else G=function(){x(H,0)};function be(D){E=D,j||(j=!0,G())}function W(D,z){N=x(function(){D(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,be(C))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var T=f;f=z;try{return D()}finally{f=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var T=f;f=D;try{return z()}finally{f=T}},e.unstable_scheduleCallback=function(D,z,T){var A=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?A+T:A):T=A,D){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=T+S,D={id:d++,callback:z,priorityLevel:D,startTime:T,expirationTime:S,sortIndex:-1},T>A?(D.sortIndex=T,t(u,D),n(c)===null&&D===n(u)&&(w?(y(N),N=-1):w=!0,W(k,T-A))):(D.sortIndex=S,t(c,D),v||g||(v=!0,be(C))),D},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(D){var z=f;return function(){var T=f;f=z;try{return D.apply(this,arguments)}finally{f=T}}}})(up);cp.exports=up;var _1=cp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $1=b,lt=_1;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dp=new Set,Li={};function rr(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(Li[e]=t,e=0;e<t.length;e++)dp.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=Object.prototype.hasOwnProperty,ey=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xd={},kd={};function ty(e){return fl.call(kd,e)?!0:fl.call(xd,e)?!1:ey.test(e)?kd[e]=!0:(xd[e]=!0,!1)}function ny(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ry(e,t,n,r){if(t===null||typeof t>"u"||ny(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bc=/[\-:]([a-z])/g;function Qc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bc,Qc);Re[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bc,Qc);Re[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bc,Qc);Re[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wc(e,t,n,r){var i=Re.hasOwnProperty(t)?Re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ry(t,n,i,r)&&(n=null),r||i===null?ty(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),pr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),Uc=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),fp=Symbol.for("react.context"),Hc=Symbol.for("react.forward_ref"),hl=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),Vc=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),pp=Symbol.for("react.offscreen"),Ad=Symbol.iterator;function ri(e){return e===null||typeof e!="object"?null:(e=Ad&&e[Ad]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,As;function hi(e){if(As===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);As=t&&t[1]||""}return`
`+As+e}var Ss=!1;function Cs(e,t){if(!e||Ss)return"";Ss=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ss=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hi(e):""}function iy(e){switch(e.tag){case 5:return hi(e.type);case 16:return hi("Lazy");case 13:return hi("Suspense");case 19:return hi("SuspenseList");case 0:case 2:case 15:return e=Cs(e.type,!1),e;case 11:return e=Cs(e.type.render,!1),e;case 1:return e=Cs(e.type,!0),e;default:return""}}function yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hr:return"Fragment";case pr:return"Portal";case pl:return"Profiler";case Uc:return"StrictMode";case hl:return"Suspense";case gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fp:return(e.displayName||"Context")+".Consumer";case mp:return(e._context.displayName||"Context")+".Provider";case Hc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vc:return t=e.displayName||null,t!==null?t:yl(e.type)||"Memo";case cn:t=e._payload,e=e._init;try{return yl(e(t))}catch{}}return null}function ay(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yl(t);case 8:return t===Uc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oy(e){var t=hp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pa(e){e._valueTracker||(e._valueTracker=oy(e))}function gp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yp(e,t){t=t.checked,t!=null&&Wc(e,"checked",t,!1)}function bl(e,t){yp(e,t);var n=Nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&wl(e,t.type,Nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wl(e,t,n){(t!=="number"||ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gi=Array.isArray;function Nr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ed(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(gi(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nn(n)}}function vp(e,t){var n=Nn(t.value),r=Nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ha,wp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ti(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sy=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(e){sy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ai[t]=Ai[e]})});function xp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ai.hasOwnProperty(e)&&Ai[e]?(""+t).trim():t+"px"}function kp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ly=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(ly[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var El=null,jr=null,Pr=null;function jd(e){if(e=ra(e)){if(typeof El!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Jo(t),El(e.stateNode,e.type,t))}}function Ap(e){jr?Pr?Pr.push(e):Pr=[e]:jr=e}function Sp(){if(jr){var e=jr,t=Pr;if(Pr=jr=null,jd(e),t)for(e=0;e<t.length;e++)jd(t[e])}}function Cp(e,t){return e(t)}function Ep(){}var Es=!1;function Np(e,t,n){if(Es)return e(t,n);Es=!0;try{return Cp(e,t,n)}finally{Es=!1,(jr!==null||Pr!==null)&&(Ep(),Sp())}}function Ri(e,t){var n=e.stateNode;if(n===null)return null;var r=Jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Nl=!1;if(_t)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{Nl=!1}function cy(e,t,n,r,i,a,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Si=!1,io=null,ao=!1,jl=null,uy={onError:function(e){Si=!0,io=e}};function dy(e,t,n,r,i,a,o,l,c){Si=!1,io=null,cy.apply(uy,arguments)}function my(e,t,n,r,i,a,o,l,c){if(dy.apply(this,arguments),Si){if(Si){var u=io;Si=!1,io=null}else throw Error(L(198));ao||(ao=!0,jl=u)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pd(e){if(ir(e)!==e)throw Error(L(188))}function fy(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Pd(i),e;if(a===r)return Pd(i),t;a=a.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Pp(e){return e=fy(e),e!==null?Ip(e):null}function Ip(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ip(e);if(t!==null)return t;e=e.sibling}return null}var zp=lt.unstable_scheduleCallback,Id=lt.unstable_cancelCallback,py=lt.unstable_shouldYield,hy=lt.unstable_requestPaint,ve=lt.unstable_now,gy=lt.unstable_getCurrentPriorityLevel,Kc=lt.unstable_ImmediatePriority,Mp=lt.unstable_UserBlockingPriority,oo=lt.unstable_NormalPriority,yy=lt.unstable_LowPriority,Lp=lt.unstable_IdlePriority,Vo=null,Bt=null;function vy(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Vo,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:xy,by=Math.log,wy=Math.LN2;function xy(e){return e>>>=0,e===0?32:31-(by(e)/wy|0)|0}var ga=64,ya=4194304;function yi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function so(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=yi(l):(a&=o,a!==0&&(r=yi(a)))}else o=n&~i,o!==0?r=yi(o):a!==0&&(r=yi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function ky(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ay(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Nt(a),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=ky(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function Pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tp(){var e=ga;return ga<<=1,!(ga&4194240)&&(ga=64),e}function Ns(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function Sy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Yc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function Rp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dp,Jc,Op,Fp,Bp,Il=!1,va=[],vn=null,bn=null,wn=null,Di=new Map,Oi=new Map,mn=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(t.pointerId)}}function ai(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ra(t),t!==null&&Jc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ey(e,t,n,r,i){switch(t){case"focusin":return vn=ai(vn,e,t,n,r,i),!0;case"dragenter":return bn=ai(bn,e,t,n,r,i),!0;case"mouseover":return wn=ai(wn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Di.set(a,ai(Di.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Oi.set(a,ai(Oi.get(a)||null,e,t,n,r,i)),!0}return!1}function Qp(e){var t=Vn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=jp(n),t!==null){e.blockedOn=t,Bp(e.priority,function(){Op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ua(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cl=r,n.target.dispatchEvent(r),Cl=null}else return t=ra(n),t!==null&&Jc(t),e.blockedOn=n,!1;t.shift()}return!0}function Md(e,t,n){Ua(e)&&n.delete(t)}function Ny(){Il=!1,vn!==null&&Ua(vn)&&(vn=null),bn!==null&&Ua(bn)&&(bn=null),wn!==null&&Ua(wn)&&(wn=null),Di.forEach(Md),Oi.forEach(Md)}function oi(e,t){e.blockedOn===t&&(e.blockedOn=null,Il||(Il=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,Ny)))}function Fi(e){function t(i){return oi(i,e)}if(0<va.length){oi(va[0],e);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&oi(vn,e),bn!==null&&oi(bn,e),wn!==null&&oi(wn,e),Di.forEach(t),Oi.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)Qp(n),n.blockedOn===null&&mn.shift()}var Ir=rn.ReactCurrentBatchConfig,lo=!0;function jy(e,t,n,r){var i=oe,a=Ir.transition;Ir.transition=null;try{oe=1,Zc(e,t,n,r)}finally{oe=i,Ir.transition=a}}function Py(e,t,n,r){var i=oe,a=Ir.transition;Ir.transition=null;try{oe=4,Zc(e,t,n,r)}finally{oe=i,Ir.transition=a}}function Zc(e,t,n,r){if(lo){var i=zl(e,t,n,r);if(i===null)Os(e,t,r,co,n),zd(e,r);else if(Ey(i,e,t,n,r))r.stopPropagation();else if(zd(e,r),t&4&&-1<Cy.indexOf(e)){for(;i!==null;){var a=ra(i);if(a!==null&&Dp(a),a=zl(e,t,n,r),a===null&&Os(e,t,r,co,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Os(e,t,r,null,n)}}var co=null;function zl(e,t,n,r){if(co=null,e=qc(r),e=Vn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return co=e,null}function Wp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gy()){case Kc:return 1;case Mp:return 4;case oo:case yy:return 16;case Lp:return 536870912;default:return 16}default:return 16}}var hn=null,Gc=null,Ha=null;function Up(){if(Ha)return Ha;var e,t=Gc,n=t.length,r,i="value"in hn?hn.value:hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ha=i.slice(e,1<r?1-r:void 0)}function Va(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ba(){return!0}function Ld(){return!1}function dt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ba:Ld,this.isPropagationStopped=Ld,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),t}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xc=dt(Xr),na=pe({},Xr,{view:0,detail:0}),Iy=dt(na),js,Ps,si,qo=pe({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(js=e.screenX-si.screenX,Ps=e.screenY-si.screenY):Ps=js=0,si=e),js)},movementY:function(e){return"movementY"in e?e.movementY:Ps}}),Td=dt(qo),zy=pe({},qo,{dataTransfer:0}),My=dt(zy),Ly=pe({},na,{relatedTarget:0}),Is=dt(Ly),Ty=pe({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ry=dt(Ty),Dy=pe({},Xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oy=dt(Dy),Fy=pe({},Xr,{data:0}),Rd=dt(Fy),By={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wy[e])?!!t[e]:!1}function _c(){return Uy}var Hy=pe({},na,{key:function(e){if(e.key){var t=By[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(e){return e.type==="keypress"?Va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vy=dt(Hy),qy=pe({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=dt(qy),Ky=pe({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),Yy=dt(Ky),Jy=pe({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zy=dt(Jy),Gy=pe({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xy=dt(Gy),_y=[9,13,27,32],$c=_t&&"CompositionEvent"in window,Ci=null;_t&&"documentMode"in document&&(Ci=document.documentMode);var $y=_t&&"TextEvent"in window&&!Ci,Hp=_t&&(!$c||Ci&&8<Ci&&11>=Ci),Od=" ",Fd=!1;function Vp(e,t){switch(e){case"keyup":return _y.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function ev(e,t){switch(e){case"compositionend":return qp(t);case"keypress":return t.which!==32?null:(Fd=!0,Od);case"textInput":return e=t.data,e===Od&&Fd?null:e;default:return null}}function tv(e,t){if(gr)return e==="compositionend"||!$c&&Vp(e,t)?(e=Up(),Ha=Gc=hn=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hp&&t.locale!=="ko"?null:t.data;default:return null}}var nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nv[e.type]:t==="textarea"}function Kp(e,t,n,r){Ap(r),t=uo(t,"onChange"),0<t.length&&(n=new Xc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ei=null,Bi=null;function rv(e){rh(e,0)}function Ko(e){var t=br(e);if(gp(t))return e}function iv(e,t){if(e==="change")return t}var Yp=!1;if(_t){var zs;if(_t){var Ms="oninput"in document;if(!Ms){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),Ms=typeof Qd.oninput=="function"}zs=Ms}else zs=!1;Yp=zs&&(!document.documentMode||9<document.documentMode)}function Wd(){Ei&&(Ei.detachEvent("onpropertychange",Jp),Bi=Ei=null)}function Jp(e){if(e.propertyName==="value"&&Ko(Bi)){var t=[];Kp(t,Bi,e,qc(e)),Np(rv,t)}}function av(e,t,n){e==="focusin"?(Wd(),Ei=t,Bi=n,Ei.attachEvent("onpropertychange",Jp)):e==="focusout"&&Wd()}function ov(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(Bi)}function sv(e,t){if(e==="click")return Ko(t)}function lv(e,t){if(e==="input"||e==="change")return Ko(t)}function cv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:cv;function Qi(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fl.call(t,i)||!Pt(e[i],t[i]))return!1}return!0}function Ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hd(e,t){var n=Ud(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ud(n)}}function Zp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gp(){for(var e=window,t=ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ro(e.document)}return t}function eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uv(e){var t=Gp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zp(n.ownerDocument.documentElement,n)){if(r!==null&&eu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Hd(n,a);var o=Hd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dv=_t&&"documentMode"in document&&11>=document.documentMode,yr=null,Ml=null,Ni=null,Ll=!1;function Vd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ll||yr==null||yr!==ro(r)||(r=yr,"selectionStart"in r&&eu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ni&&Qi(Ni,r)||(Ni=r,r=uo(Ml,"onSelect"),0<r.length&&(t=new Xc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vr={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},Ls={},Xp={};_t&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function Yo(e){if(Ls[e])return Ls[e];if(!vr[e])return e;var t=vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xp)return Ls[e]=t[n];return e}var _p=Yo("animationend"),$p=Yo("animationiteration"),eh=Yo("animationstart"),th=Yo("transitionend"),nh=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){nh.set(e,t),rr(t,[e])}for(var Ts=0;Ts<qd.length;Ts++){var Rs=qd[Ts],mv=Rs.toLowerCase(),fv=Rs[0].toUpperCase()+Rs.slice(1);zn(mv,"on"+fv)}zn(_p,"onAnimationEnd");zn($p,"onAnimationIteration");zn(eh,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(th,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pv=new Set("cancel close invalid load scroll toggle".split(" ").concat(vi));function Kd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,my(r,t,void 0,e),e.currentTarget=null}function rh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==a&&i.isPropagationStopped())break e;Kd(i,l,u),a=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==a&&i.isPropagationStopped())break e;Kd(i,l,u),a=c}}}if(ao)throw e=jl,ao=!1,jl=null,e}function ce(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(ih(t,e,2,!1),n.add(r))}function Ds(e,t,n){var r=0;t&&(r|=4),ih(n,e,r,t)}var xa="_reactListening"+Math.random().toString(36).slice(2);function Wi(e){if(!e[xa]){e[xa]=!0,dp.forEach(function(n){n!=="selectionchange"&&(pv.has(n)||Ds(n,!1,e),Ds(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xa]||(t[xa]=!0,Ds("selectionchange",!1,t))}}function ih(e,t,n,r){switch(Wp(t)){case 1:var i=jy;break;case 4:i=Py;break;default:i=Zc}n=i.bind(null,t,n,e),i=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Os(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vn(l),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Np(function(){var u=a,d=qc(n),m=[];e:{var f=nh.get(e);if(f!==void 0){var g=Xc,v=e;switch(e){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":g=Vy;break;case"focusin":v="focus",g=Is;break;case"focusout":v="blur",g=Is;break;case"beforeblur":case"afterblur":g=Is;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=My;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Yy;break;case _p:case $p:case eh:g=Ry;break;case th:g=Zy;break;case"scroll":g=Iy;break;case"wheel":g=Xy;break;case"copy":case"cut":case"paste":g=Oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Dd}var w=(t&4)!==0,x=!w&&e==="scroll",y=w?f!==null?f+"Capture":null:f;w=[];for(var p=u,h;p!==null;){h=p;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,y!==null&&(k=Ri(p,y),k!=null&&w.push(Ui(p,k,h)))),x)break;p=p.return}0<w.length&&(f=new g(f,v,null,n,d),m.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==Cl&&(v=n.relatedTarget||n.fromElement)&&(Vn(v)||v[$t]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Vn(v):null,v!==null&&(x=ir(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=Td,k="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Dd,k="onPointerLeave",y="onPointerEnter",p="pointer"),x=g==null?f:br(g),h=v==null?f:br(v),f=new w(k,p+"leave",g,n,d),f.target=x,f.relatedTarget=h,k=null,Vn(d)===u&&(w=new w(y,p+"enter",v,n,d),w.target=h,w.relatedTarget=x,k=w),x=k,g&&v)t:{for(w=g,y=v,p=0,h=w;h;h=lr(h))p++;for(h=0,k=y;k;k=lr(k))h++;for(;0<p-h;)w=lr(w),p--;for(;0<h-p;)y=lr(y),h--;for(;p--;){if(w===y||y!==null&&w===y.alternate)break t;w=lr(w),y=lr(y)}w=null}else w=null;g!==null&&Yd(m,f,g,w,!1),v!==null&&x!==null&&Yd(m,x,v,w,!0)}}e:{if(f=u?br(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=iv;else if(Bd(f))if(Yp)C=lv;else{C=ov;var j=av}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=sv);if(C&&(C=C(e,u))){Kp(m,C,n,d);break e}j&&j(e,f,u),e==="focusout"&&(j=f._wrapperState)&&j.controlled&&f.type==="number"&&wl(f,"number",f.value)}switch(j=u?br(u):window,e){case"focusin":(Bd(j)||j.contentEditable==="true")&&(yr=j,Ml=u,Ni=null);break;case"focusout":Ni=Ml=yr=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,Vd(m,n,d);break;case"selectionchange":if(dv)break;case"keydown":case"keyup":Vd(m,n,d)}var E;if($c)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else gr?Vp(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Hp&&n.locale!=="ko"&&(gr||N!=="onCompositionStart"?N==="onCompositionEnd"&&gr&&(E=Up()):(hn=d,Gc="value"in hn?hn.value:hn.textContent,gr=!0)),j=uo(u,N),0<j.length&&(N=new Rd(N,e,null,n,d),m.push({event:N,listeners:j}),E?N.data=E:(E=qp(n),E!==null&&(N.data=E)))),(E=$y?ev(e,n):tv(e,n))&&(u=uo(u,"onBeforeInput"),0<u.length&&(d=new Rd("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=E))}rh(m,t)})}function Ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ri(e,n),a!=null&&r.unshift(Ui(e,a,i)),a=Ri(e,t),a!=null&&r.push(Ui(e,a,i))),e=e.return}return r}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Ri(n,a),c!=null&&o.unshift(Ui(n,c,l))):i||(c=Ri(n,a),c!=null&&o.push(Ui(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var hv=/\r\n?/g,gv=/\u0000|\uFFFD/g;function Jd(e){return(typeof e=="string"?e:""+e).replace(hv,`
`).replace(gv,"")}function ka(e,t,n){if(t=Jd(t),Jd(e)!==t&&n)throw Error(L(425))}function mo(){}var Tl=null,Rl=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,yv=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,vv=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(e){return Zd.resolve(null).then(e).catch(bv)}:Ol;function bv(e){setTimeout(function(){throw e})}function Fs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fi(t)}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Rt="__reactFiber$"+_r,Hi="__reactProps$"+_r,$t="__reactContainer$"+_r,Fl="__reactEvents$"+_r,wv="__reactListeners$"+_r,xv="__reactHandles$"+_r;function Vn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gd(e);e!==null;){if(n=e[Rt])return n;e=Gd(e)}return t}e=n,n=e.parentNode}return null}function ra(e){return e=e[Rt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Jo(e){return e[Hi]||null}var Bl=[],wr=-1;function Mn(e){return{current:e}}function ue(e){0>wr||(e.current=Bl[wr],Bl[wr]=null,wr--)}function se(e,t){wr++,Bl[wr]=e.current,e.current=t}var jn={},Qe=Mn(jn),$e=Mn(!1),Zn=jn;function Br(e,t){var n=e.type.contextTypes;if(!n)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function et(e){return e=e.childContextTypes,e!=null}function fo(){ue($e),ue(Qe)}function Xd(e,t,n){if(Qe.current!==jn)throw Error(L(168));se(Qe,t),se($e,n)}function ah(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,ay(e)||"Unknown",i));return pe({},n,r)}function po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,Zn=Qe.current,se(Qe,e),se($e,$e.current),!0}function _d(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=ah(e,t,Zn),r.__reactInternalMemoizedMergedChildContext=e,ue($e),ue(Qe),se(Qe,e)):ue($e),se($e,n)}var Kt=null,Zo=!1,Bs=!1;function oh(e){Kt===null?Kt=[e]:Kt.push(e)}function kv(e){Zo=!0,oh(e)}function Ln(){if(!Bs&&Kt!==null){Bs=!0;var e=0,t=oe;try{var n=Kt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,Zo=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(e+1)),zp(Kc,Ln),i}finally{oe=t,Bs=!1}}return null}var xr=[],kr=0,ho=null,go=0,pt=[],ht=0,Gn=null,Yt=1,Jt="";function Qn(e,t){xr[kr++]=go,xr[kr++]=ho,ho=e,go=t}function sh(e,t,n){pt[ht++]=Yt,pt[ht++]=Jt,pt[ht++]=Gn,Gn=e;var r=Yt;e=Jt;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var a=32-Nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Nt(t)+i|n<<i|r,Jt=a+e}else Yt=1<<a|n<<i|r,Jt=e}function tu(e){e.return!==null&&(Qn(e,1),sh(e,1,0))}function nu(e){for(;e===ho;)ho=xr[--kr],xr[kr]=null,go=xr[--kr],xr[kr]=null;for(;e===Gn;)Gn=pt[--ht],pt[ht]=null,Jt=pt[--ht],pt[ht]=null,Yt=pt[--ht],pt[ht]=null}var ot=null,at=null,de=!1,Et=null;function lh(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $d(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,at=xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gn!==null?{id:Yt,overflow:Jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,at=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(de){var t=at;if(t){var n=t;if(!$d(e,t)){if(Ql(e))throw Error(L(418));t=xn(n.nextSibling);var r=ot;t&&$d(e,t)?lh(r,n):(e.flags=e.flags&-4097|2,de=!1,ot=e)}}else{if(Ql(e))throw Error(L(418));e.flags=e.flags&-4097|2,de=!1,ot=e}}}function em(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function Aa(e){if(e!==ot)return!1;if(!de)return em(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=at)){if(Ql(e))throw ch(),Error(L(418));for(;t;)lh(e,t),t=xn(t.nextSibling)}if(em(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=ot?xn(e.stateNode.nextSibling):null;return!0}function ch(){for(var e=at;e;)e=xn(e.nextSibling)}function Qr(){at=ot=null,de=!1}function ru(e){Et===null?Et=[e]:Et.push(e)}var Av=rn.ReactCurrentBatchConfig;function li(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Sa(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tm(e){var t=e._init;return t(e._payload)}function uh(e){function t(y,p){if(e){var h=y.deletions;h===null?(y.deletions=[p],y.flags|=16):h.push(p)}}function n(y,p){if(!e)return null;for(;p!==null;)t(y,p),p=p.sibling;return null}function r(y,p){for(y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function i(y,p){return y=Cn(y,p),y.index=0,y.sibling=null,y}function a(y,p,h){return y.index=h,e?(h=y.alternate,h!==null?(h=h.index,h<p?(y.flags|=2,p):h):(y.flags|=2,p)):(y.flags|=1048576,p)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,p,h,k){return p===null||p.tag!==6?(p=Ks(h,y.mode,k),p.return=y,p):(p=i(p,h),p.return=y,p)}function c(y,p,h,k){var C=h.type;return C===hr?d(y,p,h.props.children,k,h.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===cn&&tm(C)===p.type)?(k=i(p,h.props),k.ref=li(y,p,h),k.return=y,k):(k=Xa(h.type,h.key,h.props,null,y.mode,k),k.ref=li(y,p,h),k.return=y,k)}function u(y,p,h,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Ys(h,y.mode,k),p.return=y,p):(p=i(p,h.children||[]),p.return=y,p)}function d(y,p,h,k,C){return p===null||p.tag!==7?(p=Jn(h,y.mode,k,C),p.return=y,p):(p=i(p,h),p.return=y,p)}function m(y,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ks(""+p,y.mode,h),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fa:return h=Xa(p.type,p.key,p.props,null,y.mode,h),h.ref=li(y,null,p),h.return=y,h;case pr:return p=Ys(p,y.mode,h),p.return=y,p;case cn:var k=p._init;return m(y,k(p._payload),h)}if(gi(p)||ri(p))return p=Jn(p,y.mode,h,null),p.return=y,p;Sa(y,p)}return null}function f(y,p,h,k){var C=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:l(y,p,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fa:return h.key===C?c(y,p,h,k):null;case pr:return h.key===C?u(y,p,h,k):null;case cn:return C=h._init,f(y,p,C(h._payload),k)}if(gi(h)||ri(h))return C!==null?null:d(y,p,h,k,null);Sa(y,h)}return null}function g(y,p,h,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(h)||null,l(p,y,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case fa:return y=y.get(k.key===null?h:k.key)||null,c(p,y,k,C);case pr:return y=y.get(k.key===null?h:k.key)||null,u(p,y,k,C);case cn:var j=k._init;return g(y,p,h,j(k._payload),C)}if(gi(k)||ri(k))return y=y.get(h)||null,d(p,y,k,C,null);Sa(p,k)}return null}function v(y,p,h,k){for(var C=null,j=null,E=p,N=p=0,M=null;E!==null&&N<h.length;N++){E.index>N?(M=E,E=null):M=E.sibling;var P=f(y,E,h[N],k);if(P===null){E===null&&(E=M);break}e&&E&&P.alternate===null&&t(y,E),p=a(P,p,N),j===null?C=P:j.sibling=P,j=P,E=M}if(N===h.length)return n(y,E),de&&Qn(y,N),C;if(E===null){for(;N<h.length;N++)E=m(y,h[N],k),E!==null&&(p=a(E,p,N),j===null?C=E:j.sibling=E,j=E);return de&&Qn(y,N),C}for(E=r(y,E);N<h.length;N++)M=g(E,y,N,h[N],k),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?N:M.key),p=a(M,p,N),j===null?C=M:j.sibling=M,j=M);return e&&E.forEach(function(F){return t(y,F)}),de&&Qn(y,N),C}function w(y,p,h,k){var C=ri(h);if(typeof C!="function")throw Error(L(150));if(h=C.call(h),h==null)throw Error(L(151));for(var j=C=null,E=p,N=p=0,M=null,P=h.next();E!==null&&!P.done;N++,P=h.next()){E.index>N?(M=E,E=null):M=E.sibling;var F=f(y,E,P.value,k);if(F===null){E===null&&(E=M);break}e&&E&&F.alternate===null&&t(y,E),p=a(F,p,N),j===null?C=F:j.sibling=F,j=F,E=M}if(P.done)return n(y,E),de&&Qn(y,N),C;if(E===null){for(;!P.done;N++,P=h.next())P=m(y,P.value,k),P!==null&&(p=a(P,p,N),j===null?C=P:j.sibling=P,j=P);return de&&Qn(y,N),C}for(E=r(y,E);!P.done;N++,P=h.next())P=g(E,y,N,P.value,k),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?N:P.key),p=a(P,p,N),j===null?C=P:j.sibling=P,j=P);return e&&E.forEach(function(H){return t(y,H)}),de&&Qn(y,N),C}function x(y,p,h,k){if(typeof h=="object"&&h!==null&&h.type===hr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case fa:e:{for(var C=h.key,j=p;j!==null;){if(j.key===C){if(C=h.type,C===hr){if(j.tag===7){n(y,j.sibling),p=i(j,h.props.children),p.return=y,y=p;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===cn&&tm(C)===j.type){n(y,j.sibling),p=i(j,h.props),p.ref=li(y,j,h),p.return=y,y=p;break e}n(y,j);break}else t(y,j);j=j.sibling}h.type===hr?(p=Jn(h.props.children,y.mode,k,h.key),p.return=y,y=p):(k=Xa(h.type,h.key,h.props,null,y.mode,k),k.ref=li(y,p,h),k.return=y,y=k)}return o(y);case pr:e:{for(j=h.key;p!==null;){if(p.key===j)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(y,p.sibling),p=i(p,h.children||[]),p.return=y,y=p;break e}else{n(y,p);break}else t(y,p);p=p.sibling}p=Ys(h,y.mode,k),p.return=y,y=p}return o(y);case cn:return j=h._init,x(y,p,j(h._payload),k)}if(gi(h))return v(y,p,h,k);if(ri(h))return w(y,p,h,k);Sa(y,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(y,p.sibling),p=i(p,h),p.return=y,y=p):(n(y,p),p=Ks(h,y.mode,k),p.return=y,y=p),o(y)):n(y,p)}return x}var Wr=uh(!0),dh=uh(!1),yo=Mn(null),vo=null,Ar=null,iu=null;function au(){iu=Ar=vo=null}function ou(e){var t=yo.current;ue(yo),e._currentValue=t}function Ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){vo=e,iu=Ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(iu!==e)if(e={context:e,memoizedValue:t,next:null},Ar===null){if(vo===null)throw Error(L(308));Ar=e,vo.dependencies={lanes:0,firstContext:e}}else Ar=Ar.next=e;return t}var qn=null;function su(e){qn===null?qn=[e]:qn.push(e)}function mh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,su(t)):(n.next=i.next,i.next=n),t.interleaved=n,en(e,r)}function en(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var un=!1;function lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,en(e,n)}return i=r.interleaved,i===null?(t.next=t,su(r)):(t.next=i.next,i.next=t),r.interleaved=t,en(e,n)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yc(e,n)}}function nm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var i=e.updateQueue;un=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?a=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(a!==null){var m=i.baseState;o=0,d=u=c=null,l=a;do{var f=l.lane,g=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(f=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(g,m,f);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(g,m,f):v,f==null)break e;m=pe({},m,f);break e;case 2:un=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,c=m):d=d.next=g,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);_n|=o,e.lanes=o,e.memoizedState=m}}function rm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var ia={},Qt=Mn(ia),Vi=Mn(ia),qi=Mn(ia);function Kn(e){if(e===ia)throw Error(L(174));return e}function cu(e,t){switch(se(qi,t),se(Vi,e),se(Qt,ia),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kl(t,e)}ue(Qt),se(Qt,t)}function Ur(){ue(Qt),ue(Vi),ue(qi)}function ph(e){Kn(qi.current);var t=Kn(Qt.current),n=kl(t,e.type);t!==n&&(se(Vi,e),se(Qt,n))}function uu(e){Vi.current===e&&(ue(Qt),ue(Vi))}var me=Mn(0);function wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qs=[];function du(){for(var e=0;e<Qs.length;e++)Qs[e]._workInProgressVersionPrimary=null;Qs.length=0}var Ka=rn.ReactCurrentDispatcher,Ws=rn.ReactCurrentBatchConfig,Xn=0,fe=null,Ae=null,Ee=null,xo=!1,ji=!1,Ki=0,Sv=0;function De(){throw Error(L(321))}function mu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pt(e[n],t[n]))return!1;return!0}function fu(e,t,n,r,i,a){if(Xn=a,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ka.current=e===null||e.memoizedState===null?jv:Pv,e=n(r,i),ji){a=0;do{if(ji=!1,Ki=0,25<=a)throw Error(L(301));a+=1,Ee=Ae=null,t.updateQueue=null,Ka.current=Iv,e=n(r,i)}while(ji)}if(Ka.current=ko,t=Ae!==null&&Ae.next!==null,Xn=0,Ee=Ae=fe=null,xo=!1,t)throw Error(L(300));return e}function pu(){var e=Ki!==0;return Ki=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?fe.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function xt(){if(Ae===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ee===null?fe.memoizedState:Ee.next;if(t!==null)Ee=t,Ae=e;else{if(e===null)throw Error(L(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ee===null?fe.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Yi(e,t){return typeof t=="function"?t(e):t}function Us(e){var t=xt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,c=null,u=a;do{var d=u.lane;if((Xn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,fe.lanes|=d,_n|=d}u=u.next}while(u!==null&&u!==a);c===null?o=r:c.next=l,Pt(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,fe.lanes|=a,_n|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hs(e){var t=xt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Pt(a,t.memoizedState)||(_e=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function hh(){}function gh(e,t){var n=fe,r=xt(),i=t(),a=!Pt(r.memoizedState,i);if(a&&(r.memoizedState=i,_e=!0),r=r.queue,hu(bh.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Ji(9,vh.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error(L(349));Xn&30||yh(n,t,i)}return i}function yh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vh(e,t,n,r){t.value=n,t.getSnapshot=r,wh(t)&&xh(e)}function bh(e,t,n){return n(function(){wh(t)&&xh(e)})}function wh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pt(e,n)}catch{return!0}}function xh(e){var t=en(e,1);t!==null&&jt(t,e,1,-1)}function im(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},t.queue=e,e=e.dispatch=Nv.bind(null,fe,e),[t.memoizedState,e]}function Ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kh(){return xt().memoizedState}function Ya(e,t,n,r){var i=Tt();fe.flags|=e,i.memoizedState=Ji(1|t,n,void 0,r===void 0?null:r)}function Go(e,t,n,r){var i=xt();r=r===void 0?null:r;var a=void 0;if(Ae!==null){var o=Ae.memoizedState;if(a=o.destroy,r!==null&&mu(r,o.deps)){i.memoizedState=Ji(t,n,a,r);return}}fe.flags|=e,i.memoizedState=Ji(1|t,n,a,r)}function am(e,t){return Ya(8390656,8,e,t)}function hu(e,t){return Go(2048,8,e,t)}function Ah(e,t){return Go(4,2,e,t)}function Sh(e,t){return Go(4,4,e,t)}function Ch(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eh(e,t,n){return n=n!=null?n.concat([e]):null,Go(4,4,Ch.bind(null,t,e),n)}function gu(){}function Nh(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jh(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ph(e,t,n){return Xn&21?(Pt(n,t)||(n=Tp(),fe.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function Cv(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Ws.transition;Ws.transition={};try{e(!1),t()}finally{oe=n,Ws.transition=r}}function Ih(){return xt().memoizedState}function Ev(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zh(e))Mh(t,n);else if(n=mh(e,t,n,r),n!==null){var i=Ke();jt(n,e,r,i),Lh(n,t,r)}}function Nv(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zh(e))Mh(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,Pt(l,o)){var c=t.interleaved;c===null?(i.next=i,su(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=mh(e,t,i,r),n!==null&&(i=Ke(),jt(n,e,r,i),Lh(n,t,r))}}function zh(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Mh(e,t){ji=xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yc(e,n)}}var ko={readContext:wt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},jv={readContext:wt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:am,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ya(4194308,4,Ch.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ya(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ev.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:im,useDebugValue:gu,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=im(!1),t=e[0];return e=Cv.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=Tt();if(de){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Pe===null)throw Error(L(349));Xn&30||yh(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,am(bh.bind(null,r,a,e),[e]),r.flags|=2048,Ji(9,vh.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Pe.identifierPrefix;if(de){var n=Jt,r=Yt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ki++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pv={readContext:wt,useCallback:Nh,useContext:wt,useEffect:hu,useImperativeHandle:Eh,useInsertionEffect:Ah,useLayoutEffect:Sh,useMemo:jh,useReducer:Us,useRef:kh,useState:function(){return Us(Yi)},useDebugValue:gu,useDeferredValue:function(e){var t=xt();return Ph(t,Ae.memoizedState,e)},useTransition:function(){var e=Us(Yi)[0],t=xt().memoizedState;return[e,t]},useMutableSource:hh,useSyncExternalStore:gh,useId:Ih,unstable_isNewReconciler:!1},Iv={readContext:wt,useCallback:Nh,useContext:wt,useEffect:hu,useImperativeHandle:Eh,useInsertionEffect:Ah,useLayoutEffect:Sh,useMemo:jh,useReducer:Hs,useRef:kh,useState:function(){return Hs(Yi)},useDebugValue:gu,useDeferredValue:function(e){var t=xt();return Ae===null?t.memoizedState=e:Ph(t,Ae.memoizedState,e)},useTransition:function(){var e=Hs(Yi)[0],t=xt().memoizedState;return[e,t]},useMutableSource:hh,useSyncExternalStore:gh,useId:Ih,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xo={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Sn(e),a=Gt(r,i);a.payload=t,n!=null&&(a.callback=n),t=kn(e,a,i),t!==null&&(jt(t,e,i,r),qa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Sn(e),a=Gt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=kn(e,a,i),t!==null&&(jt(t,e,i,r),qa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=Sn(e),i=Gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=kn(e,i,r),t!==null&&(jt(t,e,r,n),qa(t,e,r))}};function om(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Qi(n,r)||!Qi(i,a):!0}function Th(e,t,n){var r=!1,i=jn,a=t.contextType;return typeof a=="object"&&a!==null?a=wt(a):(i=et(t)?Zn:Qe.current,r=t.contextTypes,a=(r=r!=null)?Br(e,i):jn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function sm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},lu(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=wt(a):(a=et(t)?Zn:Qe.current,i.context=Br(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Hl(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xo.enqueueReplaceState(i,i.state,null),bo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,t){try{var n="",r=t;do n+=iy(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Vs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zv=typeof WeakMap=="function"?WeakMap:Map;function Rh(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){So||(So=!0,tc=r),ql(e,t)},n}function Dh(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ql(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ql(e,t),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function lm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=qv.bind(null,e,t,n),t.then(e,e))}function cm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function um(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e)}var Mv=rn.ReactCurrentOwner,_e=!1;function He(e,t,n,r){t.child=e===null?dh(t,null,n,r):Wr(t,e.child,n,r)}function dm(e,t,n,r,i){n=n.render;var a=t.ref;return zr(t,i),r=fu(e,t,n,r,a,i),n=pu(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tn(e,t,i)):(de&&n&&tu(t),t.flags|=1,He(e,t,r,i),t.child)}function mm(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Su(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Oh(e,t,a,r,i)):(e=Xa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(o,r)&&e.ref===t.ref)return tn(e,t,i)}return t.flags|=1,e=Cn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Oh(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Qi(a,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,tn(e,t,i)}return Kl(e,t,n,r,i)}function Fh(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Cr,it),it|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Cr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,se(Cr,it),it|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,se(Cr,it),it|=r;return He(e,t,i,n),t.child}function Bh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Kl(e,t,n,r,i){var a=et(n)?Zn:Qe.current;return a=Br(t,a),zr(t,i),n=fu(e,t,n,r,a,i),r=pu(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tn(e,t,i)):(de&&r&&tu(t),t.flags|=1,He(e,t,n,i),t.child)}function fm(e,t,n,r,i){if(et(n)){var a=!0;po(t)}else a=!1;if(zr(t,i),t.stateNode===null)Ja(e,t),Th(t,n,r),Vl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=et(n)?Zn:Qe.current,u=Br(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&sm(t,o,r,u),un=!1;var f=t.memoizedState;o.state=f,bo(t,r,o,i),c=t.memoizedState,l!==r||f!==c||$e.current||un?(typeof d=="function"&&(Hl(t,n,d,r),c=t.memoizedState),(l=un||om(t,n,l,r,f,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:St(t.type,l),o.props=u,m=t.pendingProps,f=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=wt(c):(c=et(n)?Zn:Qe.current,c=Br(t,c));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||f!==c)&&sm(t,o,r,c),un=!1,f=t.memoizedState,o.state=f,bo(t,r,o,i);var v=t.memoizedState;l!==m||f!==v||$e.current||un?(typeof g=="function"&&(Hl(t,n,g,r),v=t.memoizedState),(u=un||om(t,n,u,r,f,v,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,a,i)}function Yl(e,t,n,r,i,a){Bh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&_d(t,n,!1),tn(e,t,a);r=t.stateNode,Mv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Wr(t,e.child,null,a),t.child=Wr(t,null,l,a)):He(e,t,l,a),t.memoizedState=r.state,i&&_d(t,n,!0),t.child}function Qh(e){var t=e.stateNode;t.pendingContext?Xd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xd(e,t.context,!1),cu(e,t.containerInfo)}function pm(e,t,n,r,i){return Qr(),ru(i),t.flags|=256,He(e,t,n,r),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wh(e,t,n){var r=t.pendingProps,i=me.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),se(me,i&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=es(o,r,0,null),e=Jn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Zl(n),t.memoizedState=Jl,e):yu(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Lv(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Cn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Cn(l,a):(a=Jn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Zl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Jl,r}return a=e.child,e=a.sibling,r=Cn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yu(e,t){return t=es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ca(e,t,n,r){return r!==null&&ru(r),Wr(t,e.child,null,n),e=yu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lv(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Vs(Error(L(422))),Ca(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=es({mode:"visible",children:r.children},i,0,null),a=Jn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Wr(t,e.child,null,o),t.child.memoizedState=Zl(o),t.memoizedState=Jl,a);if(!(t.mode&1))return Ca(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(L(419)),r=Vs(a,r,void 0),Ca(e,t,o,r)}if(l=(o&e.childLanes)!==0,_e||l){if(r=Pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,en(e,i),jt(r,e,i,-1))}return Au(),r=Vs(Error(L(421))),Ca(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kv.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,at=xn(i.nextSibling),ot=t,de=!0,Et=null,e!==null&&(pt[ht++]=Yt,pt[ht++]=Jt,pt[ht++]=Gn,Yt=e.id,Jt=e.overflow,Gn=t),t=yu(t,r.children),t.flags|=4096,t)}function hm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ul(e.return,t,n)}function qs(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Uh(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(He(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hm(e,n,t);else if(e.tag===19)hm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qs(t,!0,n,null,a);break;case"together":qs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ja(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tv(e,t,n){switch(t.tag){case 3:Qh(t),Qr();break;case 5:ph(t);break;case 1:et(t.type)&&po(t);break;case 4:cu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;se(yo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?Wh(e,t,n):(se(me,me.current&1),e=tn(e,t,n),e!==null?e.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Uh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,Fh(e,t,n)}return tn(e,t,n)}var Hh,Gl,Vh,qh;Hh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};Vh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kn(Qt.current);var a=null;switch(n){case"input":i=vl(e,i),r=vl(e,r),a=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),a=[];break;case"textarea":i=xl(e,i),r=xl(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mo)}Al(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Li.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Li.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ce("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};qh=function(e,t,n,r){n!==r&&(t.flags|=4)};function ci(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rv(e,t,n){var r=t.pendingProps;switch(nu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return et(t.type)&&fo(),Oe(t),null;case 3:return r=t.stateNode,Ur(),ue($e),ue(Qe),du(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Aa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(ic(Et),Et=null))),Gl(e,t),Oe(t),null;case 5:uu(t);var i=Kn(qi.current);if(n=t.type,e!==null&&t.stateNode!=null)Vh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Oe(t),null}if(e=Kn(Qt.current),Aa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Rt]=t,r[Hi]=a,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<vi.length;i++)ce(vi[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Sd(r,a),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ce("invalid",r);break;case"textarea":Ed(r,a),ce("invalid",r)}Al(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ka(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ka(r.textContent,l,e),i=["children",""+l]):Li.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":pa(r),Cd(r,a,!0);break;case"textarea":pa(r),Nd(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=mo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Rt]=t,e[Hi]=r,Hh(e,t,!1,!1),t.stateNode=e;e:{switch(o=Sl(n,r),n){case"dialog":ce("cancel",e),ce("close",e),i=r;break;case"iframe":case"object":case"embed":ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<vi.length;i++)ce(vi[i],e);i=r;break;case"source":ce("error",e),i=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),i=r;break;case"details":ce("toggle",e),i=r;break;case"input":Sd(e,r),i=vl(e,r),ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ce("invalid",e);break;case"textarea":Ed(e,r),i=xl(e,r),ce("invalid",e);break;default:i=r}Al(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?kp(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&wp(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ti(e,c):typeof c=="number"&&Ti(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Li.hasOwnProperty(a)?c!=null&&a==="onScroll"&&ce("scroll",e):c!=null&&Wc(e,a,c,o))}switch(n){case"input":pa(e),Cd(e,r,!1);break;case"textarea":pa(e),Nd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Nr(e,!!r.multiple,a,!1):r.defaultValue!=null&&Nr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)qh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Kn(qi.current),Kn(Qt.current),Aa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(a=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:ka(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return Oe(t),null;case 13:if(ue(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&at!==null&&t.mode&1&&!(t.flags&128))ch(),Qr(),t.flags|=98560,a=!1;else if(a=Aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(L(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(L(317));a[Rt]=t}else Qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),a=!1}else Et!==null&&(ic(Et),Et=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Se===0&&(Se=3):Au())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Ur(),Gl(e,t),e===null&&Wi(t.stateNode.containerInfo),Oe(t),null;case 10:return ou(t.type._context),Oe(t),null;case 17:return et(t.type)&&fo(),Oe(t),null;case 19:if(ue(me),a=t.memoizedState,a===null)return Oe(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ci(a,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=wo(e),o!==null){for(t.flags|=128,ci(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(me,me.current&1|2),t.child}e=e.sibling}a.tail!==null&&ve()>Vr&&(t.flags|=128,r=!0,ci(a,!1),t.lanes=4194304)}else{if(!r)if(e=wo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ci(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!de)return Oe(t),null}else 2*ve()-a.renderingStartTime>Vr&&n!==1073741824&&(t.flags|=128,r=!0,ci(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ve(),t.sibling=null,n=me.current,se(me,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return ku(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function Dv(e,t){switch(nu(t),t.tag){case 1:return et(t.type)&&fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ur(),ue($e),ue(Qe),du(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return uu(t),null;case 13:if(ue(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(me),null;case 4:return Ur(),null;case 10:return ou(t.type._context),null;case 22:case 23:return ku(),null;case 24:return null;default:return null}}var Ea=!1,Fe=!1,Ov=typeof WeakSet=="function"?WeakSet:Set,B=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Xl(e,t,n){try{n()}catch(r){ge(e,t,r)}}var gm=!1;function Fv(e,t){if(Tl=lo,e=Gp(),eu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,d=0,m=e,f=null;t:for(;;){for(var g;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==a||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(g=m.firstChild)!==null;)f=m,m=g;for(;;){if(m===e)break t;if(f===n&&++u===i&&(l=o),f===a&&++d===r&&(c=o),(g=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=g}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},lo=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,x=v.memoizedState,y=t.stateNode,p=y.getSnapshotBeforeUpdate(t.elementType===t.type?w:St(t.type,w),x);y.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(k){ge(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return v=gm,gm=!1,v}function Pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Xl(t,n,a)}i=i.next}while(i!==r)}}function _o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _l(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kh(e){var t=e.alternate;t!==null&&(e.alternate=null,Kh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Hi],delete t[Fl],delete t[wv],delete t[xv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yh(e){return e.tag===5||e.tag===3||e.tag===4}function ym(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mo));else if(r!==4&&(e=e.child,e!==null))for($l(e,t,n),e=e.sibling;e!==null;)$l(e,t,n),e=e.sibling}function ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ec(e,t,n),e=e.sibling;e!==null;)ec(e,t,n),e=e.sibling}var ze=null,Ct=!1;function on(e,t,n){for(n=n.child;n!==null;)Jh(e,t,n),n=n.sibling}function Jh(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 5:Fe||Sr(n,t);case 6:var r=ze,i=Ct;ze=null,on(e,t,n),ze=r,Ct=i,ze!==null&&(Ct?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Ct?(e=ze,n=n.stateNode,e.nodeType===8?Fs(e.parentNode,n):e.nodeType===1&&Fs(e,n),Fi(e)):Fs(ze,n.stateNode));break;case 4:r=ze,i=Ct,ze=n.stateNode.containerInfo,Ct=!0,on(e,t,n),ze=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Xl(n,t,o),i=i.next}while(i!==r)}on(e,t,n);break;case 1:if(!Fe&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ge(n,t,l)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,on(e,t,n),Fe=r):on(e,t,n);break;default:on(e,t,n)}}function vm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ov),t.forEach(function(r){var i=Yv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Ct=!1;break e;case 3:ze=l.stateNode.containerInfo,Ct=!0;break e;case 4:ze=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(ze===null)throw Error(L(160));Jh(a,o,i),ze=null,Ct=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zh(t,e),t=t.sibling}function Zh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Lt(e),r&4){try{Pi(3,e,e.return),_o(3,e)}catch(w){ge(e,e.return,w)}try{Pi(5,e,e.return)}catch(w){ge(e,e.return,w)}}break;case 1:At(t,e),Lt(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(At(t,e),Lt(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var i=e.stateNode;try{Ti(i,"")}catch(w){ge(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&yp(i,a),Sl(l,o);var u=Sl(l,a);for(o=0;o<c.length;o+=2){var d=c[o],m=c[o+1];d==="style"?kp(i,m):d==="dangerouslySetInnerHTML"?wp(i,m):d==="children"?Ti(i,m):Wc(i,d,m,u)}switch(l){case"input":bl(i,a);break;case"textarea":vp(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Nr(i,!!a.multiple,g,!1):f!==!!a.multiple&&(a.defaultValue!=null?Nr(i,!!a.multiple,a.defaultValue,!0):Nr(i,!!a.multiple,a.multiple?[]:"",!1))}i[Hi]=a}catch(w){ge(e,e.return,w)}}break;case 6:if(At(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){ge(e,e.return,w)}}break;case 3:if(At(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fi(t.containerInfo)}catch(w){ge(e,e.return,w)}break;case 4:At(t,e),Lt(e);break;case 13:At(t,e),Lt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(wu=ve())),r&4&&vm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||d,At(t,e),Fe=u):At(t,e),Lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(B=e,d=e.child;d!==null;){for(m=B=d;B!==null;){switch(f=B,g=f.child,f.tag){case 0:case 11:case 14:case 15:Pi(4,f,f.return);break;case 1:Sr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ge(r,n,w)}}break;case 5:Sr(f,f.return);break;case 22:if(f.memoizedState!==null){wm(m);continue}}g!==null?(g.return=f,B=g):wm(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=xp("display",o))}catch(w){ge(e,e.return,w)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){ge(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:At(t,e),Lt(e),r&4&&vm(e);break;case 21:break;default:At(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yh(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ti(i,""),r.flags&=-33);var a=ym(e);ec(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ym(e);$l(e,l,o);break;default:throw Error(L(161))}}catch(c){ge(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bv(e,t,n){B=e,Gh(e)}function Gh(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ea;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Fe;l=Ea;var u=Fe;if(Ea=o,(Fe=c)&&!u)for(B=i;B!==null;)o=B,c=o.child,o.tag===22&&o.memoizedState!==null?xm(i):c!==null?(c.return=o,B=c):xm(i);for(;a!==null;)B=a,Gh(a),a=a.sibling;B=i,Ea=l,Fe=u}bm(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,B=a):bm(e)}}function bm(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Fe||_o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&rm(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rm(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Fi(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Fe||t.flags&512&&_l(t)}catch(f){ge(t,t.return,f)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function wm(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function xm(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_o(4,t)}catch(c){ge(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ge(t,i,c)}}var a=t.return;try{_l(t)}catch(c){ge(t,a,c)}break;case 5:var o=t.return;try{_l(t)}catch(c){ge(t,o,c)}}}catch(c){ge(t,t.return,c)}if(t===e){B=null;break}var l=t.sibling;if(l!==null){l.return=t.return,B=l;break}B=t.return}}var Qv=Math.ceil,Ao=rn.ReactCurrentDispatcher,vu=rn.ReactCurrentOwner,bt=rn.ReactCurrentBatchConfig,ee=0,Pe=null,xe=null,Te=0,it=0,Cr=Mn(0),Se=0,Zi=null,_n=0,$o=0,bu=0,Ii=null,Ge=null,wu=0,Vr=1/0,qt=null,So=!1,tc=null,An=null,Na=!1,gn=null,Co=0,zi=0,nc=null,Za=-1,Ga=0;function Ke(){return ee&6?ve():Za!==-1?Za:Za=ve()}function Sn(e){return e.mode&1?ee&2&&Te!==0?Te&-Te:Av.transition!==null?(Ga===0&&(Ga=Tp()),Ga):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Wp(e.type)),e):1}function jt(e,t,n,r){if(50<zi)throw zi=0,nc=null,Error(L(185));ta(e,n,r),(!(ee&2)||e!==Pe)&&(e===Pe&&(!(ee&2)&&($o|=n),Se===4&&fn(e,Te)),tt(e,r),n===1&&ee===0&&!(t.mode&1)&&(Vr=ve()+500,Zo&&Ln()))}function tt(e,t){var n=e.callbackNode;Ay(e,t);var r=so(e,e===Pe?Te:0);if(r===0)n!==null&&Id(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Id(n),t===1)e.tag===0?kv(km.bind(null,e)):oh(km.bind(null,e)),vv(function(){!(ee&6)&&Ln()}),n=null;else{switch(Rp(r)){case 1:n=Kc;break;case 4:n=Mp;break;case 16:n=oo;break;case 536870912:n=Lp;break;default:n=oo}n=ig(n,Xh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xh(e,t){if(Za=-1,Ga=0,ee&6)throw Error(L(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=so(e,e===Pe?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Eo(e,r);else{t=r;var i=ee;ee|=2;var a=$h();(Pe!==e||Te!==t)&&(qt=null,Vr=ve()+500,Yn(e,t));do try{Hv();break}catch(l){_h(e,l)}while(!0);au(),Ao.current=a,ee=i,xe!==null?t=0:(Pe=null,Te=0,t=Se)}if(t!==0){if(t===2&&(i=Pl(e),i!==0&&(r=i,t=rc(e,i))),t===1)throw n=Zi,Yn(e,0),fn(e,r),tt(e,ve()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Wv(i)&&(t=Eo(e,r),t===2&&(a=Pl(e),a!==0&&(r=a,t=rc(e,a))),t===1))throw n=Zi,Yn(e,0),fn(e,r),tt(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:Wn(e,Ge,qt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=wu+500-ve(),10<t)){if(so(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ol(Wn.bind(null,e,Ge,qt),t);break}Wn(e,Ge,qt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Nt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qv(r/1960))-r,10<r){e.timeoutHandle=Ol(Wn.bind(null,e,Ge,qt),r);break}Wn(e,Ge,qt);break;case 5:Wn(e,Ge,qt);break;default:throw Error(L(329))}}}return tt(e,ve()),e.callbackNode===n?Xh.bind(null,e):null}function rc(e,t){var n=Ii;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=Eo(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&ic(t)),e}function ic(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function Wv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Pt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~bu,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function km(e){if(ee&6)throw Error(L(327));Mr();var t=so(e,0);if(!(t&1))return tt(e,ve()),null;var n=Eo(e,t);if(e.tag!==0&&n===2){var r=Pl(e);r!==0&&(t=r,n=rc(e,r))}if(n===1)throw n=Zi,Yn(e,0),fn(e,t),tt(e,ve()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wn(e,Ge,qt),tt(e,ve()),null}function xu(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(Vr=ve()+500,Zo&&Ln())}}function $n(e){gn!==null&&gn.tag===0&&!(ee&6)&&Mr();var t=ee;ee|=1;var n=bt.transition,r=oe;try{if(bt.transition=null,oe=1,e)return e()}finally{oe=r,bt.transition=n,ee=t,!(ee&6)&&Ln()}}function ku(){it=Cr.current,ue(Cr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yv(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(nu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fo();break;case 3:Ur(),ue($e),ue(Qe),du();break;case 5:uu(r);break;case 4:Ur();break;case 13:ue(me);break;case 19:ue(me);break;case 10:ou(r.type._context);break;case 22:case 23:ku()}n=n.return}if(Pe=e,xe=e=Cn(e.current,null),Te=it=t,Se=0,Zi=null,bu=$o=_n=0,Ge=Ii=null,qn!==null){for(t=0;t<qn.length;t++)if(n=qn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}qn=null}return e}function _h(e,t){do{var n=xe;try{if(au(),Ka.current=ko,xo){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xo=!1}if(Xn=0,Ee=Ae=fe=null,ji=!1,Ki=0,vu.current=null,n===null||n.return===null){Se=1,Zi=t,xe=null;break}e:{var a=e,o=n.return,l=n,c=t;if(t=Te,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=cm(o);if(g!==null){g.flags&=-257,um(g,o,l,a,t),g.mode&1&&lm(a,u,t),t=g,c=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(c),t.updateQueue=w}else v.add(c);break e}else{if(!(t&1)){lm(a,u,t),Au();break e}c=Error(L(426))}}else if(de&&l.mode&1){var x=cm(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),um(x,o,l,a,t),ru(Hr(c,l));break e}}a=c=Hr(c,l),Se!==4&&(Se=2),Ii===null?Ii=[a]:Ii.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=Rh(a,c,t);nm(a,y);break e;case 1:l=c;var p=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(An===null||!An.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=Dh(a,l,t);nm(a,k);break e}}a=a.return}while(a!==null)}tg(n)}catch(C){t=C,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function $h(){var e=Ao.current;return Ao.current=ko,e===null?ko:e}function Au(){(Se===0||Se===3||Se===2)&&(Se=4),Pe===null||!(_n&268435455)&&!($o&268435455)||fn(Pe,Te)}function Eo(e,t){var n=ee;ee|=2;var r=$h();(Pe!==e||Te!==t)&&(qt=null,Yn(e,t));do try{Uv();break}catch(i){_h(e,i)}while(!0);if(au(),ee=n,Ao.current=r,xe!==null)throw Error(L(261));return Pe=null,Te=0,Se}function Uv(){for(;xe!==null;)eg(xe)}function Hv(){for(;xe!==null&&!py();)eg(xe)}function eg(e){var t=rg(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?tg(e):xe=t,vu.current=null}function tg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dv(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,xe=null;return}}else if(n=Rv(n,t,it),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Se===0&&(Se=5)}function Wn(e,t,n){var r=oe,i=bt.transition;try{bt.transition=null,oe=1,Vv(e,t,n,r)}finally{bt.transition=i,oe=r}return null}function Vv(e,t,n,r){do Mr();while(gn!==null);if(ee&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Sy(e,a),e===Pe&&(xe=Pe=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,ig(oo,function(){return Mr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=bt.transition,bt.transition=null;var o=oe;oe=1;var l=ee;ee|=4,vu.current=null,Fv(e,n),Zh(n,e),uv(Rl),lo=!!Tl,Rl=Tl=null,e.current=n,Bv(n),hy(),ee=l,oe=o,bt.transition=a}else e.current=n;if(Na&&(Na=!1,gn=e,Co=i),a=e.pendingLanes,a===0&&(An=null),vy(n.stateNode),tt(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(So)throw So=!1,e=tc,tc=null,e;return Co&1&&e.tag!==0&&Mr(),a=e.pendingLanes,a&1?e===nc?zi++:(zi=0,nc=e):zi=0,Ln(),null}function Mr(){if(gn!==null){var e=Rp(Co),t=bt.transition,n=oe;try{if(bt.transition=null,oe=16>e?16:e,gn===null)var r=!1;else{if(e=gn,gn=null,Co=0,ee&6)throw Error(L(331));var i=ee;for(ee|=4,B=e.current;B!==null;){var a=B,o=a.child;if(B.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(B=u;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:Pi(8,d,a)}var m=d.child;if(m!==null)m.return=d,B=m;else for(;B!==null;){d=B;var f=d.sibling,g=d.return;if(Kh(d),d===u){B=null;break}if(f!==null){f.return=g,B=f;break}B=g}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}B=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,B=o;else e:for(;B!==null;){if(a=B,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Pi(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,B=y;break e}B=a.return}}var p=e.current;for(B=p;B!==null;){o=B;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,B=h;else e:for(o=p;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_o(9,l)}}catch(C){ge(l,l.return,C)}if(l===o){B=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,B=k;break e}B=l.return}}if(ee=i,Ln(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Vo,e)}catch{}r=!0}return r}finally{oe=n,bt.transition=t}}return!1}function Am(e,t,n){t=Hr(n,t),t=Rh(e,t,1),e=kn(e,t,1),t=Ke(),e!==null&&(ta(e,1,t),tt(e,t))}function ge(e,t,n){if(e.tag===3)Am(e,e,n);else for(;t!==null;){if(t.tag===3){Am(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){e=Hr(n,e),e=Dh(t,e,1),t=kn(t,e,1),e=Ke(),t!==null&&(ta(t,1,e),tt(t,e));break}}t=t.return}}function qv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Te&n)===n&&(Se===4||Se===3&&(Te&130023424)===Te&&500>ve()-wu?Yn(e,0):bu|=n),tt(e,t)}function ng(e,t){t===0&&(e.mode&1?(t=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):t=1);var n=Ke();e=en(e,t),e!==null&&(ta(e,t,n),tt(e,n))}function Kv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ng(e,n)}function Yv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),ng(e,n)}var rg;rg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Tv(e,t,n);_e=!!(e.flags&131072)}else _e=!1,de&&t.flags&1048576&&sh(t,go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ja(e,t),e=t.pendingProps;var i=Br(t,Qe.current);zr(t,n),i=fu(null,t,r,e,i,n);var a=pu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(a=!0,po(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lu(t),i.updater=Xo,t.stateNode=i,i._reactInternals=t,Vl(t,r,e,n),t=Yl(null,t,r,!0,a,n)):(t.tag=0,de&&a&&tu(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ja(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Zv(r),e=St(r,e),i){case 0:t=Kl(null,t,r,e,n);break e;case 1:t=fm(null,t,r,e,n);break e;case 11:t=dm(null,t,r,e,n);break e;case 14:t=mm(null,t,r,St(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Kl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),fm(e,t,r,i,n);case 3:e:{if(Qh(t),e===null)throw Error(L(387));r=t.pendingProps,a=t.memoizedState,i=a.element,fh(e,t),bo(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Hr(Error(L(423)),t),t=pm(e,t,r,n,i);break e}else if(r!==i){i=Hr(Error(L(424)),t),t=pm(e,t,r,n,i);break e}else for(at=xn(t.stateNode.containerInfo.firstChild),ot=t,de=!0,Et=null,n=dh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===i){t=tn(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return ph(t),e===null&&Wl(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Dl(r,i)?o=null:a!==null&&Dl(r,a)&&(t.flags|=32),Bh(e,t),He(e,t,o,n),t.child;case 6:return e===null&&Wl(t),null;case 13:return Wh(e,t,n);case 4:return cu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wr(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),dm(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,se(yo,r._currentValue),r._currentValue=o,a!==null)if(Pt(a.value,o)){if(a.children===i.children&&!$e.current){t=tn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Gt(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ul(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ul(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zr(t,n),i=wt(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),mm(e,t,r,i,n);case 15:return Oh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Ja(e,t),t.tag=1,et(r)?(e=!0,po(t)):e=!1,zr(t,n),Th(t,r,i),Vl(t,r,i,n),Yl(null,t,r,!0,e,n);case 19:return Uh(e,t,n);case 22:return Fh(e,t,n)}throw Error(L(156,t.tag))};function ig(e,t){return zp(e,t)}function Jv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new Jv(e,t,n,r)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zv(e){if(typeof e=="function")return Su(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hc)return 11;if(e===Vc)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xa(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Su(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case hr:return Jn(n.children,i,a,t);case Uc:o=8,i|=8;break;case pl:return e=yt(12,n,t,i|2),e.elementType=pl,e.lanes=a,e;case hl:return e=yt(13,n,t,i),e.elementType=hl,e.lanes=a,e;case gl:return e=yt(19,n,t,i),e.elementType=gl,e.lanes=a,e;case pp:return es(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mp:o=10;break e;case fp:o=9;break e;case Hc:o=11;break e;case Vc:o=14;break e;case cn:o=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=yt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Jn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function es(e,t,n,r){return e=yt(22,e,r,t),e.elementType=pp,e.lanes=n,e.stateNode={isHidden:!1},e}function Ks(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Ys(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ns(0),this.expirationTimes=Ns(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ns(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cu(e,t,n,r,i,a,o,l,c){return e=new Gv(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=yt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lu(a),e}function Xv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ag(e){if(!e)return jn;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(et(n))return ah(e,n,t)}return t}function og(e,t,n,r,i,a,o,l,c){return e=Cu(n,r,!0,e,i,a,o,l,c),e.context=ag(null),n=e.current,r=Ke(),i=Sn(n),a=Gt(r,i),a.callback=t??null,kn(n,a,i),e.current.lanes=i,ta(e,i,r),tt(e,r),e}function ts(e,t,n,r){var i=t.current,a=Ke(),o=Sn(i);return n=ag(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(i,t,o),e!==null&&(jt(e,i,o,a),qa(e,i,o)),o}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eu(e,t){Sm(e,t),(e=e.alternate)&&Sm(e,t)}function _v(){return null}var sg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nu(e){this._internalRoot=e}ns.prototype.render=Nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));ts(e,t,null,null)};ns.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){ts(null,e,null,null)}),t[$t]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&Qp(e)}};function ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cm(){}function $v(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=No(o);a.call(u)}}var o=og(t,r,e,0,null,!1,!1,"",Cm);return e._reactRootContainer=o,e[$t]=o.current,Wi(e.nodeType===8?e.parentNode:e),$n(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=No(c);l.call(u)}}var c=Cu(e,0,!1,null,null,!1,!1,"",Cm);return e._reactRootContainer=c,e[$t]=c.current,Wi(e.nodeType===8?e.parentNode:e),$n(function(){ts(t,c,n,r)}),c}function is(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var c=No(o);l.call(c)}}ts(t,o,e,i)}else o=$v(n,t,e,i,r);return No(o)}Dp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yi(t.pendingLanes);n!==0&&(Yc(t,n|1),tt(t,ve()),!(ee&6)&&(Vr=ve()+500,Ln()))}break;case 13:$n(function(){var r=en(e,1);if(r!==null){var i=Ke();jt(r,e,1,i)}}),Eu(e,1)}};Jc=function(e){if(e.tag===13){var t=en(e,134217728);if(t!==null){var n=Ke();jt(t,e,134217728,n)}Eu(e,134217728)}};Op=function(e){if(e.tag===13){var t=Sn(e),n=en(e,t);if(n!==null){var r=Ke();jt(n,e,t,r)}Eu(e,t)}};Fp=function(){return oe};Bp=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};El=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Jo(r);if(!i)throw Error(L(90));gp(r),bl(r,i)}}}break;case"textarea":vp(e,n);break;case"select":t=n.value,t!=null&&Nr(e,!!n.multiple,t,!1)}};Cp=xu;Ep=$n;var eb={usingClientEntryPoint:!1,Events:[ra,br,Jo,Ap,Sp,xu]},ui={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tb={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pp(e),e===null?null:e.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance||_v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{Vo=ja.inject(tb),Bt=ja}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eb;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ju(t))throw Error(L(200));return Xv(e,t,null,n)};ut.createRoot=function(e,t){if(!ju(e))throw Error(L(299));var n=!1,r="",i=sg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cu(e,1,!1,null,null,n,!1,r,i),e[$t]=t.current,Wi(e.nodeType===8?e.parentNode:e),new Nu(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Pp(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return $n(e)};ut.hydrate=function(e,t,n){if(!rs(t))throw Error(L(200));return is(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!ju(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=sg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=og(t,null,e,1,n??null,i,!1,a,o),e[$t]=t.current,Wi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ns(t)};ut.render=function(e,t,n){if(!rs(t))throw Error(L(200));return is(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!rs(e))throw Error(L(40));return e._reactRootContainer?($n(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};ut.unstable_batchedUpdates=xu;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rs(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return is(e,t,n,!1,r)};ut.version="18.3.1-next-f1338f8080-20240426";function lg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lg)}catch(e){console.error(e)}}lg(),lp.exports=ut;var Tn=lp.exports,Em=Tn;no.createRoot=Em.createRoot,no.hydrateRoot=Em.hydrateRoot;function mt(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function nn(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function nb(e,t){const n=+mt(e);return nn(e,n+t)}const cg=6048e5,rb=864e5,ug=6e4,Pu=36e5;function dg(e,t){return nb(e,t*Pu)}let ib={};function as(){return ib}function Gi(e,t){var l,c,u,d;const n=as(),r=(t==null?void 0:t.weekStartsOn)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,i=mt(e),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function jo(e){return Gi(e,{weekStartsOn:1})}function mg(e){const t=mt(e),n=t.getFullYear(),r=nn(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=jo(r),a=nn(e,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const o=jo(a);return t.getTime()>=i.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function Po(e){const t=mt(e);return t.setHours(0,0,0,0),t}function Nm(e){const t=mt(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function ab(e,t){const n=Po(e),r=Po(t),i=+n-Nm(n),a=+r-Nm(r);return Math.round((i-a)/rb)}function ob(e){const t=mg(e),n=nn(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),jo(n)}function sb(e){return nn(e,Date.now())}function aa(e,t){const n=Po(e),r=Po(t);return+n==+r}function lb(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function cb(e){if(!lb(e)&&typeof e!="number")return!1;const t=mt(e);return!isNaN(Number(t))}function ub(e){const t=mt(e),n=nn(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const db={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},mb=(e,t,n)=>{let r;const i=db[e];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Lr(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const fb={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},pb={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},hb={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},gb={date:Lr({formats:fb,defaultWidth:"full"}),time:Lr({formats:pb,defaultWidth:"full"}),dateTime:Lr({formats:hb,defaultWidth:"full"})},yb={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},vb=(e,t,n,r)=>yb[e];function Dt(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):o;i=e.formattingValues[l]||e.formattingValues[o]}else{const o=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;i=e.values[l]||e.values[o]}const a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}const bb={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},wb={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},xb={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},kb={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ab={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Sb={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Cb=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Eb={ordinalNumber:Cb,era:Dt({values:bb,defaultWidth:"wide"}),quarter:Dt({values:wb,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Dt({values:xb,defaultWidth:"wide"}),day:Dt({values:kb,defaultWidth:"wide"}),dayPeriod:Dt({values:Ab,defaultWidth:"wide",formattingValues:Sb,defaultFormattingWidth:"wide"})};function Ot(e){return(t,n={})=>{const r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;const o=a[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(l)?jb(l,m=>m.test(o)):Nb(l,m=>m.test(o));let u;u=e.valueCallback?e.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;const d=t.slice(o.length);return{value:u,rest:d}}}function Nb(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function jb(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function fg(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;const l=t.slice(i.length);return{value:o,rest:l}}}const Pb=/^(\d+)(th|st|nd|rd)?/i,Ib=/\d+/i,zb={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Mb={any:[/^b/i,/^(a|c)/i]},Lb={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Tb={any:[/1/i,/2/i,/3/i,/4/i]},Rb={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Db={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ob={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Fb={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Bb={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Qb={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Wb={ordinalNumber:fg({matchPattern:Pb,parsePattern:Ib,valueCallback:e=>parseInt(e,10)}),era:Ot({matchPatterns:zb,defaultMatchWidth:"wide",parsePatterns:Mb,defaultParseWidth:"any"}),quarter:Ot({matchPatterns:Lb,defaultMatchWidth:"wide",parsePatterns:Tb,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ot({matchPatterns:Rb,defaultMatchWidth:"wide",parsePatterns:Db,defaultParseWidth:"any"}),day:Ot({matchPatterns:Ob,defaultMatchWidth:"wide",parsePatterns:Fb,defaultParseWidth:"any"}),dayPeriod:Ot({matchPatterns:Bb,defaultMatchWidth:"any",parsePatterns:Qb,defaultParseWidth:"any"})},Ub={code:"en-US",formatDistance:mb,formatLong:gb,formatRelative:vb,localize:Eb,match:Wb,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Hb(e){const t=mt(e);return ab(t,ub(t))+1}function Vb(e){const t=mt(e),n=+jo(t)-+ob(t);return Math.round(n/cg)+1}function pg(e,t){var d,m,f,g;const n=mt(e),r=n.getFullYear(),i=as(),a=(t==null?void 0:t.firstWeekContainsDate)??((m=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??i.firstWeekContainsDate??((g=(f=i.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??1,o=nn(e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);const l=Gi(o,t),c=nn(e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);const u=Gi(c,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function qb(e,t){var l,c,u,d;const n=as(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,i=pg(e,t),a=nn(e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),Gi(a,t)}function Kb(e,t){const n=mt(e),r=+Gi(n,t)-+qb(n,t);return Math.round(r/cg)+1}function ae(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const sn={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return ae(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):ae(n+1,2)},d(e,t){return ae(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return ae(e.getHours()%12||12,t.length)},H(e,t){return ae(e.getHours(),t.length)},m(e,t){return ae(e.getMinutes(),t.length)},s(e,t){return ae(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return ae(i,t.length)}},cr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},jm={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return sn.y(e,t)},Y:function(e,t,n,r){const i=pg(e,r),a=i>0?i:1-i;if(t==="YY"){const o=a%100;return ae(o,2)}return t==="Yo"?n.ordinalNumber(a,{unit:"year"}):ae(a,t.length)},R:function(e,t){const n=mg(e);return ae(n,t.length)},u:function(e,t){const n=e.getFullYear();return ae(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return ae(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return ae(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return sn.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return ae(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const i=Kb(e,r);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):ae(i,t.length)},I:function(e,t,n){const r=Vb(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):ae(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):sn.d(e,t)},D:function(e,t,n){const r=Hb(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):ae(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return ae(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return ae(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),i=r===0?7:r;switch(t){case"i":return String(i);case"ii":return ae(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let i;switch(r===12?i=cr.noon:r===0?i=cr.midnight:i=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let i;switch(r>=17?i=cr.evening:r>=12?i=cr.afternoon:r>=4?i=cr.morning:i=cr.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return sn.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):sn.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):ae(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):ae(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):sn.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):sn.s(e,t)},S:function(e,t){return sn.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return Im(r);case"XXXX":case"XX":return Un(r);case"XXXXX":case"XXX":default:return Un(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return Im(r);case"xxxx":case"xx":return Un(r);case"xxxxx":case"xxx":default:return Un(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Pm(r,":");case"OOOO":default:return"GMT"+Un(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Pm(r,":");case"zzzz":default:return"GMT"+Un(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return ae(r,t.length)},T:function(e,t,n){const r=e.getTime();return ae(r,t.length)}};function Pm(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+ae(a,2)}function Im(e,t){return e%60===0?(e>0?"-":"+")+ae(Math.abs(e)/60,2):Un(e,t)}function Un(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=ae(Math.trunc(r/60),2),a=ae(r%60,2);return n+i+t+a}const zm=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},hg=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Yb=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return zm(e,t);let a;switch(r){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",zm(r,t)).replace("{{time}}",hg(i,t))},Jb={p:hg,P:Yb},Zb=/^D+$/,Gb=/^Y+$/,Xb=["D","DD","YY","YYYY"];function _b(e){return Zb.test(e)}function $b(e){return Gb.test(e)}function ew(e,t,n){const r=tw(e,t,n);if(console.warn(r),Xb.includes(e))throw new RangeError(r)}function tw(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const nw=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,rw=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,iw=/^'([^]*?)'?$/,aw=/''/g,ow=/[a-zA-Z]/;function st(e,t,n){var d,m,f,g,v,w,x,y;const r=as(),i=(n==null?void 0:n.locale)??r.locale??Ub,a=(n==null?void 0:n.firstWeekContainsDate)??((m=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??r.firstWeekContainsDate??((g=(f=r.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??1,o=(n==null?void 0:n.weekStartsOn)??((w=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:w.weekStartsOn)??r.weekStartsOn??((y=(x=r.locale)==null?void 0:x.options)==null?void 0:y.weekStartsOn)??0,l=mt(e);if(!cb(l))throw new RangeError("Invalid time value");let c=t.match(rw).map(p=>{const h=p[0];if(h==="p"||h==="P"){const k=Jb[h];return k(p,i.formatLong)}return p}).join("").match(nw).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const h=p[0];if(h==="'")return{isToken:!1,value:sw(p)};if(jm[h])return{isToken:!0,value:p};if(h.match(ow))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:p}});i.localize.preprocessor&&(c=i.localize.preprocessor(l,c));const u={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(p=>{if(!p.isToken)return p.value;const h=p.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&$b(h)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&_b(h))&&ew(h,t,String(e));const k=jm[h[0]];return k(l,h,i.localize,u)}).join("")}function sw(e){const t=e.match(iw);return t?t[1].replace(aw,"'"):e}function gg(e){const t=mt(e);return t.setMinutes(0,0,0),t}function lw(e){return aa(e,sb(e))}function Pn(e,t){const r=mw(e);let i;if(r.date){const c=fw(r.date,2);i=pw(c.restDateString,c.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);const a=i.getTime();let o=0,l;if(r.time&&(o=hw(r.time),isNaN(o)))return new Date(NaN);if(r.timezone){if(l=gw(r.timezone),isNaN(l))return new Date(NaN)}else{const c=new Date(a+o),u=new Date(0);return u.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),u.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),u}return new Date(a+o+l)}const Pa={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},cw=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,uw=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,dw=/^([+-])(\d{2})(?::?(\d{2}))?$/;function mw(e){const t={},n=e.split(Pa.dateTimeDelimiter);let r;if(n.length>2)return t;if(/:/.test(n[0])?r=n[0]:(t.date=n[0],r=n[1],Pa.timeZoneDelimiter.test(t.date)&&(t.date=e.split(Pa.timeZoneDelimiter)[0],r=e.substr(t.date.length,e.length))),r){const i=Pa.timezone.exec(r);i?(t.time=r.replace(i[1],""),t.timezone=i[1]):t.time=r}return t}function fw(e,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};const i=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:a===null?i:a*100,restDateString:e.slice((r[1]||r[2]).length)}}function pw(e,t){if(t===null)return new Date(NaN);const n=e.match(cw);if(!n)return new Date(NaN);const r=!!n[4],i=di(n[1]),a=di(n[2])-1,o=di(n[3]),l=di(n[4]),c=di(n[5])-1;if(r)return xw(t,l,c)?yw(t,l,c):new Date(NaN);{const u=new Date(0);return!bw(t,a,o)||!ww(t,i)?new Date(NaN):(u.setUTCFullYear(t,a,Math.max(i,o)),u)}}function di(e){return e?parseInt(e):1}function hw(e){const t=e.match(uw);if(!t)return NaN;const n=Js(t[1]),r=Js(t[2]),i=Js(t[3]);return kw(n,r,i)?n*Pu+r*ug+i*1e3:NaN}function Js(e){return e&&parseFloat(e.replace(",","."))||0}function gw(e){if(e==="Z")return 0;const t=e.match(dw);if(!t)return 0;const n=t[1]==="+"?-1:1,r=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return Aw(r,i)?n*(r*Pu+i*ug):NaN}function yw(e,t,n){const r=new Date(0);r.setUTCFullYear(e,0,4);const i=r.getUTCDay()||7,a=(t-1)*7+n+1-i;return r.setUTCDate(r.getUTCDate()+a),r}const vw=[31,null,31,30,31,30,31,31,30,31,30,31];function yg(e){return e%400===0||e%4===0&&e%100!==0}function bw(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(vw[t]||(yg(e)?29:28))}function ww(e,t){return t>=1&&t<=(yg(e)?366:365)}function xw(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}function kw(e,t,n){return e===24?t===0&&n===0:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}function Aw(e,t){return t>=0&&t<=59}const Mm={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Sw=(e,t,n)=>{let r;const i=n!=null&&n.addSuffix?Mm[e].withPreposition:Mm[e].standalone;return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:"vor "+r:r},Cw={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Ew={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Nw={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},jw={date:Lr({formats:Cw,defaultWidth:"full"}),time:Lr({formats:Ew,defaultWidth:"full"}),dateTime:Lr({formats:Nw,defaultWidth:"full"})},Pw={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Iw=(e,t,n,r)=>Pw[e],zw={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},Mw={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},ac={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Lw={narrow:ac.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:ac.wide},Tw={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},Rw={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Dw={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},Ow=e=>Number(e)+".",Fw={ordinalNumber:Ow,era:Dt({values:zw,defaultWidth:"wide"}),quarter:Dt({values:Mw,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Dt({values:ac,formattingValues:Lw,defaultWidth:"wide"}),day:Dt({values:Tw,defaultWidth:"wide"}),dayPeriod:Dt({values:Rw,defaultWidth:"wide",formattingValues:Dw,defaultFormattingWidth:"wide"})},Bw=/^(\d+)(\.)?/i,Qw=/\d+/i,Ww={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Uw={any:[/^v/i,/^n/i]},Hw={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Vw={any:[/1/i,/2/i,/3/i,/4/i]},qw={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Kw={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Yw={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Jw={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},Zw={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Gw={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},Xw={ordinalNumber:fg({matchPattern:Bw,parsePattern:Qw,valueCallback:e=>parseInt(e)}),era:Ot({matchPatterns:Ww,defaultMatchWidth:"wide",parsePatterns:Uw,defaultParseWidth:"any"}),quarter:Ot({matchPatterns:Hw,defaultMatchWidth:"wide",parsePatterns:Vw,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ot({matchPatterns:qw,defaultMatchWidth:"wide",parsePatterns:Kw,defaultParseWidth:"any"}),day:Ot({matchPatterns:Yw,defaultMatchWidth:"wide",parsePatterns:Jw,defaultParseWidth:"any"}),dayPeriod:Ot({matchPatterns:Zw,defaultMatchWidth:"wide",parsePatterns:Gw,defaultParseWidth:"any"})},En={code:"de",formatDistance:Sw,formatLong:jw,formatRelative:Iw,localize:Fw,match:Xw,options:{weekStartsOn:1,firstWeekContainsDate:4}};function ye(e){return e?e.split(".")[0]:""}function Ve(e,t){var r,i;return(r=e==null?void 0:e.states)!=null&&r[t]?((i=e.states[t].attributes)==null?void 0:i.friendly_name)||t:t||""}function It(e,t){var r,i;if(!t||!((r=e==null?void 0:e.states)!=null&&r[t]))return{id:t||"",name:t||"",state:"unavailable",attributes:{},domain:ye(t),lastChanged:null};const n=e.states[t];return{id:t,name:((i=n.attributes)==null?void 0:i.friendly_name)||t,state:n.state,attributes:n.attributes||{},domain:ye(t),lastChanged:n.last_changed?new Date(n.last_changed).getTime():null}}function _w(e,t){var i,a,o,l,c;const n=(i=e==null?void 0:e.entities)==null?void 0:i[t],r=(n==null?void 0:n.area_id)||((o=(a=e==null?void 0:e.devices)==null?void 0:a[n==null?void 0:n.device_id])==null?void 0:o.area_id);return r&&((c=(l=e==null?void 0:e.areas)==null?void 0:l[r])==null?void 0:c.name)||""}function $w(e,{domains:t=null,search:n=""}={}){if(!(e!=null&&e.states))return[];const r=n.toLowerCase().trim();return Object.keys(e.states).filter(i=>{const a=ye(i);return t!=null&&t.length&&!t.includes(a)?!1:r?It(e,i).name.toLowerCase().includes(r)||i.toLowerCase().includes(r):!0}).map(i=>It(e,i)).sort((i,a)=>i.name.localeCompare(a.name,"de"))}function os(e,t){return e==="on"||e==="open"||e==="unlocked"||e==="home"?!0:t==="climate"?e!=="off"&&e!=="unavailable":t==="media_player"?e==="playing":t==="alarm_control_panel"?e!=="disarmed"&&e!=="unavailable":!1}const ex=new Set(["cleaning","paused","returning","on","active","busy","mopping","spot_cleaning"]),tx=new Set(["docked","idle","off","unavailable","unknown","error","standby","charging"]);function nx(e,t={}){if(tx.has(e))return!1;if(ex.has(e))return!0;const n=String((t==null?void 0:t.status)||(t==null?void 0:t.vacuum_status)||"").toLowerCase();return!!(/clean|rein|mop|wisch|sweep|saug|scrub/i.test(n)||/return|zurück|dock|basis|home/i.test(n)&&e!=="docked"||/paus/i.test(n))}function rx(e){return e!=null&&e.states&&Object.keys(e.states).find(t=>t.startsWith("vacuum."))||""}function ix(e,t,n=!1,r=""){var a;if(t&&((a=e==null?void 0:e.states)!=null&&a[t]))return t;const i=rx(e);return i||(n&&r?r:r||"")}function ax(e){const{state:t,attributes:n}=e;return n!=null&&n.status?n.status:t==="cleaning"?"Reinigt …":t==="paused"?"Pausiert":t==="returning"?"Fährt zur Basis …":t==="docked"||t==="charging"?"In der Ladestation":t==="idle"||t==="off"?"Bereit":t==="unavailable"||!e.id?"Reinigt Wohnzimmer …":e.name||"Sauger"}function ox(e,t=0){var i;const n=(i=e.attributes)==null?void 0:i.battery_level;if(typeof n=="number"&&n>0)return Math.min(100,Math.max(5,100-n+20));const r=45*60;return Math.min(95,Math.round(t/r*100))}function sx(e){const t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function lx(e){const{state:t,domain:n}=e;return n==="cover"?["open","opening","closing"].includes(t):n==="binary_sensor"?t==="on":!1}function cx(e){const{state:t,domain:n}=e;return n==="cover"?t==="open":n==="binary_sensor"?t==="on":!1}function vg(e){const{state:t,domain:n}=e;return n==="cover"?{open:"Offen",closed:"Geschlossen",opening:"Öffnet sich …",closing:"Schließt sich …"}[t]||t:n==="binary_sensor"?t==="on"?"Offen":"Geschlossen":t}function ux(e,t=[]){return Array.isArray(t)?t.filter(n=>n==null?void 0:n.entity_id).map(n=>{const r=It(e,n.entity_id);return{...r,label:n.label||r.name}}):[]}function dx(e,t=[]){return ux(e,t).filter(lx)}function mx(e=[]){if(!e.length)return"";const t=e.filter(n=>["opening","closing"].includes(n.state));if(t.length===1){const n=t[0].state==="opening"?"öffnet sich":"schließt sich";return`${t[0].label} ${n} …`}return t.length>1?`${t.length} Fenster bewegen sich`:e.length===1?`${e[0].label} offen`:`${e.length} Fenster offen`}function Iu(e,t){const n=It(e,t),{state:r,attributes:i,domain:a}=n;return a==="climate"&&i.current_temperature!=null?`${i.current_temperature}°C`:a==="sensor"&&i.unit_of_measurement?`${r}${i.unit_of_measurement}`:a==="cover"?typeof i.current_position=="number"?`${Math.round(i.current_position)}%`:{open:"Offen",closed:"Geschlossen",opening:"Öffnet …",closing:"Schließt …"}[r]||r:a==="lock"?r==="locked"?"Gesperrt":r==="unlocked"?"Offen":r:a==="person"?r==="home"?"Zuhause":"Abwesend":a==="alarm_control_panel"?{disarmed:"Unscharf",armed_home:"Scharf (Zuhause)",armed_away:"Scharf (Abwesend)",armed_night:"Scharf (Nacht)",pending:"Auslösend",triggered:"Alarm!"}[r]||r:r==="on"?"An":r==="off"?"Aus":r}function ar(e){return!!(e!=null&&e.__mock)}function Io(e){return!!(e!=null&&e.callService&&(e!=null&&e.states)&&!ar(e))}function fx(e){if(e==null||e==="")return"";if(typeof e=="string")return e.replace(/\/$/,"");if(typeof e=="object"&&typeof e.href=="string")return e.href.replace(/\/$/,"");const t=String(e);return t.startsWith("http")?t.replace(/\/$/,""):""}function oa(e){var r,i,a,o;if(typeof window<"u"&&((r=window.location)!=null&&r.origin)&&Io(e))return window.location.origin;const t=(e==null?void 0:e.hassUrl)??((a=(i=e==null?void 0:e.auth)==null?void 0:i.data)==null?void 0:a.hassUrl),n=fx(t);return n||(typeof window<"u"&&((o=window.location)!=null&&o.origin)?window.location.origin:"")}function bg(e){var t,n,r;return((n=(t=e==null?void 0:e.auth)==null?void 0:t.data)==null?void 0:n.accessToken)||((r=e==null?void 0:e.auth)==null?void 0:r.accessToken)||(e==null?void 0:e.accessToken)||null}function $r(e,t){return t?t.startsWith("http://")||t.startsWith("https://")?t:`${oa(e)}${t.startsWith("/")?t:`/${t}`}`:null}async function Z(e,t,n,r={},i=!1){return e!=null&&e.callService?e.callService(t,n,r,void 0,i):(console.warn("HA not connected, service call skipped:",t,n,r),null)}async function wg(e,t){var r;const n=ye(t);if(!(!n||!((r=e==null?void 0:e.states)!=null&&r[t])))return n==="light"?Z(e,"light","turn_on",{entity_id:t}):n==="cover"?Z(e,"cover","open_cover",{entity_id:t}):n==="lock"?Z(e,"lock","lock",{entity_id:t}):n==="input_button"||n==="button"?Z(e,n,"press",{entity_id:t}):n==="scene"||n==="script"?kg(e,t):Z(e,n,"turn_on",{entity_id:t})}async function xg(e,t){var r;const n=ye(t);if(!(!n||!((r=e==null?void 0:e.states)!=null&&r[t]))){if(n==="cover")return Z(e,"cover","close_cover",{entity_id:t});if(n==="lock")return Z(e,"lock","unlock",{entity_id:t});if(!(n==="input_button"||n==="button"))return n==="light"?Z(e,"light","turn_off",{entity_id:t}):Z(e,n,"turn_off",{entity_id:t})}}async function zu(e,t){var r,i,a,o;const n=ye(t);if(!(!n||!((r=e==null?void 0:e.states)!=null&&r[t]))){if(["light","switch","fan","input_boolean","automation"].includes(n))return Z(e,n,"toggle",{entity_id:t});if(n==="input_button"||n==="button")return Z(e,n,"press",{entity_id:t});if(n==="cover"){const c=((i=e.states[t])==null?void 0:i.state)==="open"?"close_cover":"open_cover";return Z(e,n,c,{entity_id:t})}if(n==="lock"){const c=((a=e.states[t])==null?void 0:a.state)==="locked"?"unlock":"lock";return Z(e,n,c,{entity_id:t})}if(n==="alarm_control_panel")return((o=e.states[t])==null?void 0:o.state)==="disarmed"?Z(e,n,"alarm_arm_home",{entity_id:t}):Z(e,n,"alarm_disarm",{entity_id:t});if(!(n==="climate"||n==="sensor"||n==="binary_sensor"))return Z(e,"homeassistant","toggle",{entity_id:t})}}function px(e,t){var i,a,o;const n=(i=e==null?void 0:e.states)==null?void 0:i[t];if(!n)return 0;if(n.state==="off"){const l=(a=n.attributes)==null?void 0:a.brightness;return typeof l=="number"?Math.round(l/255*100):0}const r=(o=n.attributes)==null?void 0:o.brightness;return typeof r=="number"?Math.round(r/255*100):n.state==="on"?100:0}async function hx(e,t,n){var o;const r=ye(t);if(!r||!((o=e==null?void 0:e.states)!=null&&o[t]))return;const i=Math.min(100,Math.max(0,Math.round(n)));if(i===0)return r==="light"?Z(e,"light","turn_off",{entity_id:t}):Z(e,r,"turn_off",{entity_id:t});const a=Math.max(1,Math.round(i/100*255));return r==="light"?Z(e,"light","turn_on",{entity_id:t,brightness:a}):Z(e,r,"turn_on",{entity_id:t})}async function gx(e,t,n){var r;if(!(!((r=e==null?void 0:e.states)!=null&&r[t])||ye(t)!=="light")&&!(!Array.isArray(n)||n.length<3))return Z(e,"light","turn_on",{entity_id:t,rgb_color:n.slice(0,3).map(i=>Math.min(255,Math.max(0,Math.round(i))))})}async function kg(e,t){const n=ye(t);if(n)return n==="script"?Z(e,"script","turn_on",{entity_id:t}):n==="scene"?Z(e,"scene","turn_on",{entity_id:t}):Z(e,n,"turn_on",{entity_id:t})}async function yx(e,t){var r;return((r=e.states[t])==null?void 0:r.state)==="playing"?Z(e,"media_player","media_pause",{entity_id:t}):Z(e,"media_player","media_play",{entity_id:t})}async function vx(e,t){return Z(e,"media_player","media_next_track",{entity_id:t})}async function bx(e,t){return Z(e,"media_player","media_previous_track",{entity_id:t})}async function wx(e,t){var n,r,i;if(!e||!t)return[];if((n=e.connection)!=null&&n.sendMessagePromise)try{const a=await e.connection.sendMessagePromise({type:"todo/item/list",entity_id:t});if(a!=null&&a.items)return a.items}catch{}try{const a=await Z(e,"todo","get_items",{entity_id:t},!0),o=((i=(r=a==null?void 0:a.response)==null?void 0:r[t])==null?void 0:i.items)||(a==null?void 0:a.items);if(o)return o}catch{}return[]}async function xx(e,t,n){return Z(e,"todo","update_item",{entity_id:t,item:n,status:"completed"})}async function kx(e,t,n){return Z(e,"todo","add_item",{entity_id:t,item:n})}async function Ax(e,t){return Z(e,"vacuum","pause",{entity_id:t})}async function Sx(e,t){return Z(e,"vacuum","return_to_base",{entity_id:t})}async function Mu(e,t){return Z(e,"cover","close_cover",{entity_id:t})}async function Ag(e,t){return Z(e,"cover","open_cover",{entity_id:t})}async function Cx(e,t){return Z(e,"cover","stop_cover",{entity_id:t})}function Lu(e,t){var i,a;const n=(i=e==null?void 0:e.states)==null?void 0:i[t];if(!n)return 0;const r=(a=n.attributes)==null?void 0:a.current_position;return typeof r=="number"?Math.round(r):n.state==="open"?100:(n.state==="closed",0)}async function oc(e,t,n){var a;if(ye(t)!=="cover"||!((a=e==null?void 0:e.states)!=null&&a[t]))return;const i=Math.min(100,Math.max(0,Math.round(n)));return i===0?Z(e,"cover","close_cover",{entity_id:t}):i===100?Z(e,"cover","open_cover",{entity_id:t}):Z(e,"cover","set_cover_position",{entity_id:t,position:i})}const Ex=2;function Nx(e,t){var r,i;const n=(r=e==null?void 0:e.states)==null?void 0:r[t];return n?!!((((i=n.attributes)==null?void 0:i.supported_features)??0)&Ex):!1}function Sg(e,t){var r,i,a;const n=(a=(i=(r=e==null?void 0:e.states)==null?void 0:r[t])==null?void 0:i.attributes)==null?void 0:a.access_token;return n||bg(e)}function jx(e,t){if(!e||!t||ar(e)||!e.states[t])return null;const r=oa(e);if(!r)return null;const i=new URLSearchParams,a=Sg(e,t);a&&i.set("token",a);const o=i.toString();return o?`${r}/api/camera_proxy_stream/${t}?${o}`:`${r}/api/camera_proxy_stream/${t}`}function Lm(e,t,{cacheBust:n=null}={}){var u;if(!e||!t)return null;const r=e.states[t];if(!r)return null;if(ar(e)){const d=$r(e,(u=r.attributes)==null?void 0:u.entity_picture);return d?n==null?d:`${d}${d.includes("?")?"&":"?"}t=${n}`:null}const i=new URLSearchParams;n!=null&&i.set("t",String(n));const a=Sg(e,t);a&&i.set("token",a);const o=oa(e),l=i.toString(),c=l?`/api/camera_proxy/${t}?${l}`:`/api/camera_proxy/${t}`;return o?`${o}${c}`:c}function $(e,t,n={}){return{entity_id:e,state:t,attributes:n,last_changed:new Date().toISOString(),last_updated:new Date().toISOString()}}function Px(){const e=[["partlycloudy",19,11,20],["partlycloudy",18,10,10],["sunny",17,9,5],["rainy",15,8,80],["partlycloudy",16,9,15],["sunny",18,10,0],["cloudy",16,9,40]],t=new Date;return t.setHours(12,0,0,0),e.map(([n,r,i,a],o)=>({datetime:new Date(t.getTime()+o*864e5).toISOString(),condition:n,temperature:r,templow:i,precipitation_probability:a}))}function Ix(){const e=["partlycloudy","sunny","partlycloudy","cloudy","cloudy","partlycloudy","rainy","cloudy"],t=[16,17,18,17,16,15,14,13],n=new Date;return n.setMinutes(0,0,0),e.map((r,i)=>({datetime:new Date(n.getTime()+i*36e5).toISOString(),condition:r,temperature:t[i]}))}const zx={"light.wohnzimmer":$("light.wohnzimmer","on",{friendly_name:"Wohnzimmer Licht",brightness:200}),"light.kueche":$("light.kueche","off",{friendly_name:"Küche Licht"}),"switch.steckdose":$("switch.steckdose","off",{friendly_name:"Steckdose TV"}),"climate.wohnzimmer":$("climate.wohnzimmer","heat",{friendly_name:"Wohnzimmer Heizung",current_temperature:21.5,temperature:22}),"lock.haustuer":$("lock.haustuer","locked",{friendly_name:"Haustür"}),"alarm_control_panel.haus":$("alarm_control_panel.haus","armed_home",{friendly_name:"Alarmanlage"}),"scene.filmabend":$("scene.filmabend","scening",{friendly_name:"Filmabend"}),"scene.essen":$("scene.essen","scening",{friendly_name:"Essen"}),"scene.schlafen":$("scene.schlafen","scening",{friendly_name:"Schlafen"}),"script.verlassen":$("script.verlassen","off",{friendly_name:"Haus verlassen"}),"scene.abendstimmung":$("scene.abendstimmung","scening",{friendly_name:"Abendstimmung",entity_id:["light.wohnzimmer","cover.wohnzimmer","climate.wohnzimmer","media_player.wohnzimmer"]}),"scene.guten_morgen":$("scene.guten_morgen","scening",{friendly_name:"Guten Morgen",entity_id:["cover.schlafzimmer","light.kueche","switch.steckdose"]}),"scene.kino":$("scene.kino","scening",{friendly_name:"Kino",entity_id:["light.wohnzimmer","cover.wohnzimmer","media_player.wohnzimmer"]}),"scene.alles_aus":$("scene.alles_aus","scening",{friendly_name:"Alles aus",entity_id:["light.wohnzimmer","light.kueche","switch.steckdose","cover.wohnzimmer","climate.wohnzimmer"]}),"weather.zuhause":$("weather.zuhause","partlycloudy",{friendly_name:"Saarbrücken",supported_features:3,temperature:16,humidity:68,pressure:1013,wind_speed:12,visibility:10,forecast:Px(),hourly_forecast:Ix()}),"media_player.wohnzimmer":$("media_player.wohnzimmer","playing",{friendly_name:"Bluetooth Speaker",device_manufacturer:"Apple",device_model:"HomePod mini",media_title:"Hurt Feelings",media_artist:"Mac Miller",media_album_name:"Swimming",media_position:161,media_duration:204,entity_picture:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Mac_Miller_-_Swimming.png/220px-Mac_Miller_-_Swimming.png"}),"camera.garten":$("camera.garten","idle",{friendly_name:"Garten",entity_picture:"https://images.unsplash.com/photo-1558036117-15dbaf040517?q=80&w=800"}),"camera.haustuer":$("camera.haustuer","idle",{friendly_name:"Haustür",entity_picture:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"}),"camera.garage":$("camera.garage","idle",{friendly_name:"Garage",entity_picture:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"}),"todo.einkaufsliste":$("todo.einkaufsliste","0",{friendly_name:"Einkaufsliste"}),"person.papa":$("person.papa","home",{friendly_name:"Papa"}),"person.mama":$("person.mama","home",{friendly_name:"Mama"}),"person.max":$("person.max","not_home",{friendly_name:"Max"}),"vacuum.roborock":$("vacuum.roborock","cleaning",{friendly_name:"Roborock",battery_level:78,fan_speed:"Turbo",status:"Reinigt Wohnzimmer …"}),"cover.wohnzimmer":$("cover.wohnzimmer","open",{friendly_name:"Wohnzimmer Rolladen",current_position:100}),"cover.schlafzimmer":$("cover.schlafzimmer","closed",{friendly_name:"Schlafzimmer Rolladen",current_position:0}),"cover.kueche":$("cover.kueche","open",{friendly_name:"Küche Rolladen",current_position:45}),"binary_sensor.kueche_fenster":$("binary_sensor.kueche_fenster","on",{friendly_name:"Küche Fenster"}),"binary_sensor.grandland_charging":$("binary_sensor.grandland_charging","on",{friendly_name:"Grandland lädt",device_class:"battery_charging"}),"sensor.grandland_battery":$("sensor.grandland_battery","67",{friendly_name:"Grandland Akku",unit_of_measurement:"%",device_class:"battery"}),"sensor.grandland_charge_power":$("sensor.grandland_charge_power","11",{friendly_name:"Grandland Ladeleistung",unit_of_measurement:"kW",device_class:"power"}),"sensor.grandland_range":$("sensor.grandland_range","320",{friendly_name:"Grandland Reichweite",unit_of_measurement:"km",device_class:"distance"}),"sensor.grandland_charge_remaining":$("sensor.grandland_charge_remaining","4800",{friendly_name:"Grandland Restladezeit",unit_of_measurement:"s",device_class:"duration"}),"sensor.grandland_last_trip":$("sensor.grandland_last_trip","42",{friendly_name:"Grandland Letzte Fahrt",unit_of_measurement:"km",device_class:"distance"}),"sensor.grandland_cost_today":$("sensor.grandland_cost_today","6.24",{friendly_name:"Grandland Kosten heute",unit_of_measurement:"€",device_class:"monetary"})},Tm=[];function Zs(){const e={...zx},t={states:e,hassUrl:"http://homeassistant.local:8123",callService:async(r,i,a={})=>{Tm.push({domain:r,service:i,data:a,time:Date.now()});const o=a.entity_id;if(r==="homeassistant"&&i==="toggle"&&o){const l=e[o];l&&(l.state=l.state==="on"?"off":"on")}if(r==="light"&&i==="toggle"&&o){const l=e[o];l&&(l.state=l.state==="on"?"off":"on")}if(r==="light"&&i==="turn_on"&&o){const l=e[o];l&&(l.state="on",typeof a.brightness=="number"&&(l.attributes={...l.attributes,brightness:a.brightness}))}if(r==="light"&&i==="turn_off"&&o){const l=e[o];l&&(l.state="off")}if(r==="switch"&&i==="toggle"&&o){const l=e[o];l&&(l.state=l.state==="on"?"off":"on")}if(r==="scene"&&i==="turn_on"&&console.log("[mock] Scene activated:",o),r==="media_player"){const l=e[o];if(!l)return{context:{id:"mock"}};i==="media_pause"&&(l.state="paused"),i==="media_play"&&(l.state="playing"),i==="turn_off"&&(l.state="off"),i==="turn_on"&&(l.state="idle")}if(r==="alarm_control_panel"&&o){const l=e[o];if(!l)return{context:{id:"mock"}};i==="alarm_disarm"&&(l.state="disarmed"),i==="alarm_arm_home"&&(l.state="armed_home"),i==="alarm_arm_away"&&(l.state="armed_away"),i==="alarm_arm_night"&&(l.state="armed_night")}if(r==="vacuum"&&o){const l=e[o];if(!l)return{context:{id:"mock"}};i==="pause"&&(l.state="paused",l.attributes={...l.attributes,status:"Pausiert"}),i==="stop"&&(l.state="idle",l.attributes={...l.attributes,status:"Gestoppt"}),i==="return_to_base"&&(l.state="returning",l.attributes={...l.attributes,status:"Fährt zur Basis …"}),i==="start"&&(l.state="cleaning",l.attributes={...l.attributes,status:"Reinigt Wohnzimmer …"})}if(r==="cover"&&o){const l=e[o];if(!l)return{context:{id:"mock"}};if(i==="open_cover"&&(l.state="open",l.attributes={...l.attributes,current_position:100}),i==="close_cover"&&(l.state="closed",l.attributes={...l.attributes,current_position:0}),i==="set_cover_position"&&typeof a.position=="number"){const c=Math.min(100,Math.max(0,a.position));l.attributes={...l.attributes,current_position:c},c===0?l.state="closed":l.state="open"}}return n.forEach(l=>l(t)),{context:{id:"mock"}}}},n=[];return t.subscribe=r=>(n.push(r),()=>{const i=n.indexOf(r);i>=0&&n.splice(i,1)}),t.getServiceLog=()=>Tm,t.__mock=!0,t}const Mx=[{uid:"1",summary:"Milch",status:"needs_action"},{uid:"2",summary:"Kaffee",status:"needs_action"},{uid:"3",summary:"Bananen",status:"completed"},{uid:"4",summary:"Brot",status:"needs_action"}],Tu={quickActions:[{entity_id:"light.wohnzimmer",label:"Wohnzimmer"},{entity_id:"light.kueche",label:"Küche"},{entity_id:"switch.steckdose",label:"Steckdose TV"}],scenes:[{entity_id:"scene.filmabend",label:"Filmabend"},{entity_id:"scene.essen",label:"Essen"},{entity_id:"scene.schlafen",label:"Schlafen"},{entity_id:"script.verlassen",label:"Verlassen"}],weather:{entity_id:"weather.zuhause"},mediaPlayer:{entity_id:"media_player.wohnzimmer"},camera:{entity_id:"camera.garten"},cameras:["camera.garten","camera.haustuer","camera.garage"],shoppingList:{entity_id:"todo.einkaufsliste"},vacuum:{entity_id:"vacuum.roborock"},ev:{stateEntity:"binary_sensor.grandland_charging",batteryEntity:"sensor.grandland_battery",powerEntity:"sensor.grandland_charge_power",label:"Grandland"},alarm:{entity_id:"alarm_control_panel.haus"},presence:[{entity_id:"person.papa",label:"Papa"},{entity_id:"person.mama",label:"Mama"},{entity_id:"person.max",label:"Max"}]},Lx=1,zo=2,Gs=3,Cg=4,Tx=5,Rx=6;function Dx(e){return{type:"auth",access_token:e}}function Ox(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function Fx(){return{type:"get_states"}}function Bx(e,t,n,r,i){const a={type:"call_service",domain:e,service:t,target:r,return_response:i};return n&&(a.service_data=n),a}function Qx(e){const t={type:"subscribe_events"};return e&&(t.event_type=e),t}function Rm(e){return{type:"unsubscribe_events",subscription:e}}function Wx(){return{type:"ping"}}function Ux(e,t){return{type:"result",success:!1,error:{code:e,message:t}}}function Hx(e){const t={},n=e.split("&");for(let r=0;r<n.length;r++){const i=n[r].split("="),a=decodeURIComponent(i[0]),o=i.length>1?decodeURIComponent(i[1]):void 0;t[a]=o}return t}const Eg=(e,t,n,r)=>{const[i,a,o]=e.split(".",3);return Number(i)>t||Number(i)===t&&(r===void 0?Number(a)>=n:Number(a)>n)||r!==void 0&&Number(i)===t&&Number(a)===n&&Number(o)>=r},Vx="auth_invalid",qx="auth_ok";function Kx(e){if(!e.auth)throw Cg;const t=e.auth;let n=t.expired?t.refreshAccessToken().then(()=>{n=void 0},()=>{n=void 0}):void 0;const r=t.wsUrl;function i(a,o,l){const c=new WebSocket(r);let u=!1;const d=()=>{if(c.removeEventListener("close",d),u){l(zo);return}if(a===0){l(Lx);return}const g=a===-1?-1:a-1;setTimeout(()=>i(g,o,l),1e3)},m=async g=>{try{t.expired&&await(n||t.refreshAccessToken()),c.send(JSON.stringify(Dx(t.accessToken)))}catch(v){u=v===zo,c.close()}},f=async g=>{const v=JSON.parse(g.data);switch(v.type){case Vx:u=!0,c.close();break;case qx:c.removeEventListener("open",m),c.removeEventListener("message",f),c.removeEventListener("close",d),c.removeEventListener("error",d),c.haVersion=v.ha_version,Eg(c.haVersion,2022,9)&&c.send(JSON.stringify(Ox())),o(c);break}};c.addEventListener("open",m),c.addEventListener("message",f),c.addEventListener("close",d),c.addEventListener("error",d)}return new Promise((a,o)=>i(e.setupRetry,a,o))}class Yx{constructor(t,n){this._handleMessage=r=>{let i=JSON.parse(r.data);Array.isArray(i)||(i=[i]),i.forEach(a=>{const o=this.commands.get(a.id);switch(a.type){case"event":o?o.callback(a.event):(console.warn(`Received event for unknown subscription ${a.id}. Unsubscribing.`),this.sendMessagePromise(Rm(a.id)).catch(l=>{}));break;case"result":o&&(a.success?(o.resolve(a.result),"subscribe"in o||this.commands.delete(a.id)):(o.reject(a.error),this.commands.delete(a.id)));break;case"pong":o?(o.resolve(),this.commands.delete(a.id)):console.warn(`Received unknown pong response ${a.id}`);break}})},this._handleClose=async()=>{const r=this.commands;if(this.commandId=1,this.oldSubscriptions=this.commands,this.commands=new Map,this.socket=void 0,r.forEach(o=>{"subscribe"in o||o.reject(Ux(Gs,"Connection lost"))}),this.closeRequested)return;this.fireEvent("disconnected");const i=Object.assign(Object.assign({},this.options),{setupRetry:0}),a=o=>{setTimeout(async()=>{if(!this.closeRequested)try{const l=await i.createSocket(i);this._setSocket(l)}catch(l){if(this._queuedMessages){const c=this._queuedMessages;this._queuedMessages=void 0;for(const u of c)u.reject&&u.reject(Gs)}l===zo?this.fireEvent("reconnect-error",l):a(o+1)}},Math.min(o,5)*1e3)};this.suspendReconnectPromise&&(await this.suspendReconnectPromise,this.suspendReconnectPromise=void 0,this._queuedMessages=[]),a(0)},this.options=n,this.commandId=2,this.commands=new Map,this.eventListeners=new Map,this.closeRequested=!1,this._setSocket(t)}get connected(){return this.socket!==void 0&&this.socket.readyState==this.socket.OPEN}_setSocket(t){this.socket=t,this.haVersion=t.haVersion,t.addEventListener("message",this._handleMessage),t.addEventListener("close",this._handleClose);const n=this.oldSubscriptions;n&&(this.oldSubscriptions=void 0,n.forEach(i=>{"subscribe"in i&&i.subscribe&&i.subscribe().then(a=>{i.unsubscribe=a,i.resolve()})}));const r=this._queuedMessages;if(r){this._queuedMessages=void 0;for(const i of r)i.resolve()}this.fireEvent("ready")}addEventListener(t,n){let r=this.eventListeners.get(t);r||(r=[],this.eventListeners.set(t,r)),r.push(n)}removeEventListener(t,n){const r=this.eventListeners.get(t);if(!r)return;const i=r.indexOf(n);i!==-1&&r.splice(i,1)}fireEvent(t,n){(this.eventListeners.get(t)||[]).forEach(r=>r(this,n))}suspendReconnectUntil(t){this.suspendReconnectPromise=t}suspend(){if(!this.suspendReconnectPromise)throw new Error("Suspend promise not set");this.socket&&this.socket.close()}reconnect(t=!1){if(this.socket){if(!t){this.socket.close();return}this.socket.removeEventListener("message",this._handleMessage),this.socket.removeEventListener("close",this._handleClose),this.socket.close(),this._handleClose()}}close(){this.closeRequested=!0,this.socket&&this.socket.close()}async subscribeEvents(t,n){return this.subscribeMessage(t,Qx(n))}ping(){return this.sendMessagePromise(Wx())}sendMessage(t,n){if(!this.connected)throw Gs;if(this._queuedMessages){if(n)throw new Error("Cannot queue with commandId");this._queuedMessages.push({resolve:()=>this.sendMessage(t)});return}n||(n=this._genCmdId()),t.id=n,this.socket.send(JSON.stringify(t))}sendMessagePromise(t){return new Promise((n,r)=>{if(this._queuedMessages){this._queuedMessages.push({reject:r,resolve:async()=>{try{n(await this.sendMessagePromise(t))}catch(a){r(a)}}});return}const i=this._genCmdId();this.commands.set(i,{resolve:n,reject:r}),this.sendMessage(t,i)})}async subscribeMessage(t,n,r){if(this._queuedMessages&&await new Promise((a,o)=>{this._queuedMessages.push({resolve:a,reject:o})}),r!=null&&r.preCheck&&!await r.preCheck())throw new Error("Pre-check failed");let i;return await new Promise((a,o)=>{const l=this._genCmdId();i={resolve:a,reject:o,callback:t,subscribe:(r==null?void 0:r.resubscribe)!==!1?()=>this.subscribeMessage(t,n,r):void 0,unsubscribe:async()=>{this.connected&&await this.sendMessagePromise(Rm(l)),this.commands.delete(l)}},this.commands.set(l,i);try{this.sendMessage(n,l)}catch{}}),()=>i.unsubscribe()}_genCmdId(){return++this.commandId}}const Jx=()=>`${location.protocol}//${location.host}/`,Zx=e=>e*1e3+Date.now();function Gx(){const{protocol:e,host:t,pathname:n,search:r}=location;return`${e}//${t}${n}${r}`}function Xx(e,t,n,r){let i=`${e}/auth/authorize?response_type=code&redirect_uri=${encodeURIComponent(n)}`;return t!==null&&(i+=`&client_id=${encodeURIComponent(t)}`),r&&(i+=`&state=${encodeURIComponent(r)}`),i}function _x(e,t,n,r){n+=(n.includes("?")?"&":"?")+"auth_callback=1",document.location.href=Xx(e,t,n,r)}async function Ng(e,t,n){const r=typeof location<"u"&&location;if(r&&r.protocol==="https:"){const l=document.createElement("a");if(l.href=e,l.protocol==="http:"&&l.hostname!=="localhost")throw Tx}const i=new FormData;t!==null&&i.append("client_id",t),Object.keys(n).forEach(l=>{i.append(l,n[l])});const a=await fetch(`${e}/auth/token`,{method:"POST",credentials:"same-origin",body:i});if(!a.ok)throw a.status===400||a.status===403?zo:new Error("Unable to fetch tokens");const o=await a.json();return o.hassUrl=e,o.clientId=t,o.expires=Zx(o.expires_in),o}function Dm(e,t,n){return Ng(e,t,{code:n,grant_type:"authorization_code"})}function $x(e){return btoa(JSON.stringify(e))}function e5(e){return JSON.parse(atob(e))}class Ru{constructor(t,n){this.data=t,this._saveTokens=n}get wsUrl(){return`ws${this.data.hassUrl.substr(4)}/api/websocket`}get accessToken(){return this.data.access_token}get expired(){return Date.now()>this.data.expires}async refreshAccessToken(){if(!this.data.refresh_token)throw new Error("No refresh_token");const t=await Ng(this.data.hassUrl,this.data.clientId,{grant_type:"refresh_token",refresh_token:this.data.refresh_token});t.refresh_token=this.data.refresh_token,this.data=t,this._saveTokens&&this._saveTokens(t)}async revoke(){if(!this.data.refresh_token)throw new Error("No refresh_token to revoke");const t=new FormData;t.append("token",this.data.refresh_token),await fetch(`${this.data.hassUrl}/auth/revoke`,{method:"POST",credentials:"same-origin",body:t}),this._saveTokens&&this._saveTokens(null)}}function t5(e,t){return new Ru({hassUrl:e,clientId:null,expires:Date.now()+1e11,refresh_token:"",access_token:t,expires_in:1e11})}async function jg(e={}){let t,n=e.hassUrl;n&&n[n.length-1]==="/"&&(n=n.substr(0,n.length-1));const r=e.clientId!==void 0?e.clientId:Jx(),i=e.limitHassInstance===!0;if(e.authCode&&n&&(t=await Dm(n,r,e.authCode),e.saveTokens&&e.saveTokens(t)),!t){const a=Hx(location.search.substr(1));if("auth_callback"in a){const o=e5(a.state);if(i&&(o.hassUrl!==n||o.clientId!==r))throw Rx;t=await Dm(o.hassUrl,o.clientId,a.code),e.saveTokens&&e.saveTokens(t)}}if(!t&&e.loadTokens&&(t=await e.loadTokens()),t&&(n===void 0||t.hassUrl===n))return new Ru(t,e.saveTokens);if(n===void 0)throw Cg;return _x(n,r,e.redirectUrl||Gx(),$x({hassUrl:n,clientId:r})),new Promise(()=>{})}const n5=e=>{let t=[];function n(i){let a=[];for(let o=0;o<t.length;o++)t[o]===i?i=null:a.push(t[o]);t=a}function r(i,a){e=a?i:Object.assign(Object.assign({},e),i);let o=t;for(let l=0;l<o.length;l++)o[l](e)}return{get state(){return e},action(i){function a(o){r(o,!1)}return function(){let o=[e];for(let c=0;c<arguments.length;c++)o.push(arguments[c]);let l=i.apply(this,o);if(l!=null)return l instanceof Promise?l.then(a):a(l)}},setState:r,clearState(){e=void 0},subscribe(i){return t.push(i),()=>{n(i)}}}},r5=5e3,Om=(e,t,n,r,i={unsubGrace:!0})=>{if(e[t])return e[t];let a=0,o,l,c=n5();const u=()=>{if(!n)throw new Error("Collection does not support refresh");return n(e).then(w=>c.setState(w,!0))},d=()=>u().catch(w=>{if(e.connected)throw w}),m=()=>{if(l!==void 0){clearTimeout(l),l=void 0;return}r&&(o=r(e,c)),n&&(e.addEventListener("ready",d),d()),e.addEventListener("disconnected",v)},f=()=>{l=void 0,o&&o.then(w=>{w()}),c.clearState(),e.removeEventListener("ready",u),e.removeEventListener("disconnected",v)},g=()=>{l=setTimeout(f,r5)},v=()=>{l&&(clearTimeout(l),f())};return e[t]={get state(){return c.state},refresh:u,subscribe(w){a++,a===1&&m();const x=c.subscribe(w);return c.state!==void 0&&setTimeout(()=>w(c.state),0),()=>{x(),a--,a||(i.unsubGrace?g():f())}}},e[t]},i5=e=>e.sendMessagePromise(Fx()),a5=(e,t,n,r,i,a)=>e.sendMessagePromise(Bx(t,n,r,i,a));function o5(e,t){const n=Object.assign({},e.state);if(t.a)for(const r in t.a){const i=t.a[r];let a=new Date(i.lc*1e3).toISOString();n[r]={entity_id:r,state:i.s,attributes:i.a,context:typeof i.c=="string"?{id:i.c,parent_id:null,user_id:null}:i.c,last_changed:a,last_updated:i.lu?new Date(i.lu*1e3).toISOString():a}}if(t.r)for(const r of t.r)delete n[r];if(t.c)for(const r in t.c){let i=n[r];if(!i){console.warn("Received state update for unknown entity",r);continue}i=Object.assign({},i);const{"+":a,"-":o}=t.c[r],l=(a==null?void 0:a.a)||(o==null?void 0:o.a),c=l?Object.assign({},i.attributes):i.attributes;if(a&&(a.s!==void 0&&(i.state=a.s),a.c&&(typeof a.c=="string"?i.context=Object.assign(Object.assign({},i.context),{id:a.c}):i.context=Object.assign(Object.assign({},i.context),a.c)),a.lc?i.last_updated=i.last_changed=new Date(a.lc*1e3).toISOString():a.lu&&(i.last_updated=new Date(a.lu*1e3).toISOString()),a.a&&Object.assign(c,a.a)),o!=null&&o.a)for(const u of o.a)delete c[u];l&&(i.attributes=c),n[r]=i}e.setState(n,!0)}const s5=(e,t)=>e.subscribeMessage(n=>o5(t,n),{type:"subscribe_entities"});function l5(e,t){const n=e.state;if(n===void 0)return;const{entity_id:r,new_state:i}=t.data;if(i)e.setState({[i.entity_id]:i});else{const a=Object.assign({},n);delete a[r],e.setState(a,!0)}}async function c5(e){const t=await i5(e),n={};for(let r=0;r<t.length;r++){const i=t[r];n[i.entity_id]=i}return n}const u5=(e,t)=>e.subscribeEvents(n=>l5(t,n),"state_changed"),d5=e=>Eg(e.haVersion,2022,4,0)?Om(e,"_ent",void 0,s5):Om(e,"_ent",c5,u5),m5=(e,t)=>d5(e).subscribe(t);async function f5(e){const t=Object.assign({setupRetry:0,createSocket:Kx},e),n=await t.createSocket(t);return new Yx(n,t)}const Mo="the-monitor-hass-auth",Pg="the-monitor-hass-url";function Lo(){return localStorage.getItem(Pg)||"http://homeassistant.local:8123"}function Du(e){localStorage.setItem(Pg,e.replace(/\/$/,""))}function ss(e){e?(localStorage.setItem(Mo,JSON.stringify(e)),e.hassUrl&&Du(e.hassUrl)):localStorage.removeItem(Mo)}function Ou(){try{const e=localStorage.getItem(Mo);return e?JSON.parse(e):null}catch{return null}}function p5(){localStorage.removeItem(Mo)}function Fu(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).has("auth_callback")}function h5(){typeof window>"u"||!Fu()||window.history.replaceState({},"",window.location.pathname)}function Ig(){const e=Ou();return e!=null&&e.access_token?new Ru(e,ss):null}async function zg(e){if(!e.expired)return e;if(!e.data.refresh_token)throw new Error("Sitzung abgelaufen — bitte erneut anmelden.");return await e.refreshAccessToken(),e}function g5(e,t,n){const r={},i={states:r,hassUrl:t.data.hassUrl,accessToken:t.accessToken,connection:e,callService:(o,l,c,u,d)=>a5(e,o,l,{...c,...u},void 0,d)},a=m5(e,o=>{Object.keys(r).forEach(l=>{l in o||delete r[l]}),Object.assign(r,o),n==null||n(i)});return i._unsubscribe=a,i}async function Mg(e,t){const n=await f5({auth:e});return{hass:g5(n,e,t),connection:n,auth:e}}async function y5(e,t,n){const r=e.replace(/\/$/,""),i=t5(r,t.trim());return Du(r),ss({hassUrl:r,clientId:null,expires:Date.now()+1e11,refresh_token:"",access_token:t.trim(),expires_in:1e11}),Mg(i,n)}async function v5(){const e=await jg({hassUrl:Lo(),saveTokens:ss,loadTokens:async()=>Ou()});return h5(),e}let Ia=null;async function b5(){const e=Ig();return e&&!Fu()?zg(e):(Ia||(Ia=v5().finally(()=>{Ia=null})),Ia)}async function w5(e){const t=Fu(),n=Ig();if(!t&&!n)return null;const r=t?await b5():await zg(n);return Mg(r,e)}function x5(e){Du(e),jg({hassUrl:e.replace(/\/$/,""),saveTokens:ss,loadTokens:async()=>Ou()})}async function k5(e,t){var n;(n=t==null?void 0:t._unsubscribe)==null||n.call(t),e&&await e.close(),p5()}const Lg=b.createContext(null);function Tg({children:e,initialHass:t=null,onRegisterUpdate:n,enableMock:r=!1}){const[i,a]=b.useState(t),[o,l]=b.useState(0),[c,u]=b.useState(!1),[d,m]=b.useState(!1),[f,g]=b.useState(null),v=b.useRef(null),w=b.useRef(null),x=!!n,y=b.useCallback(()=>l(M=>M+1),[]),p=b.useCallback(M=>{a(M),u(Io(M)),g(null),l(P=>P+1)},[]),h=b.useCallback(async()=>{await k5(v.current,w.current),v.current=null,w.current=null},[]),k=b.useCallback((M,P)=>{v.current=P,w.current=M,a(M),u(!1),g(null),y()},[y]),C=b.useCallback(async(M,P)=>{m(!0),g(null);try{await h();const{hass:F,connection:H}=await y5(M,P,y);k(F,H)}catch(F){throw g((F==null?void 0:F.message)||"Verbindung fehlgeschlagen"),F}finally{m(!1)}},[k,y,h]),j=b.useCallback(M=>{g(null),x5(M)},[]),E=b.useCallback(async()=>{m(!0);try{await h(),a(r?Zs():null),u(!1),g(null),y()}finally{m(!1)}},[y,r,h]);b.useEffect(()=>{t&&(a(t),l(M=>M+1))},[t]),b.useEffect(()=>(n==null||n(p),()=>n==null?void 0:n(null)),[n,p]),b.useEffect(()=>{if(x||t)return;let M=!1;return(async()=>{m(!0);try{const P=await w5(y);!M&&P?k(P.hass,P.connection):!M&&r&&(a(Zs()),y())}catch(P){M||(g((P==null?void 0:P.message)||"Verbindung fehlgeschlagen"),r&&(a(Zs()),y()))}finally{M||m(!1)}})(),()=>{M=!0}},[k,y,r,t,x]);const N=b.useMemo(()=>{const M=Io(i);return{hass:i,revision:o,states:(i==null?void 0:i.states)||{},isConnected:M,isMock:!M&&!!i,isEmbedded:c,isConnecting:d,connectionError:f,hassUrl:Lo(),getEntity:P=>It(i,P),callService:(P,F,H)=>Z(i,P,F,H),connect:C,login:j,disconnect:E}},[i,o,c,d,f,C,j,E]);return s.jsx(Lg.Provider,{value:N,children:e})}function We(){const e=b.useContext(Lg);if(!e)throw new Error("useHass must be used within HassProvider");return e}const A5=[{entity_id:"light.couch_links",label:"Couch links",icon:""},{entity_id:"light.couch_rechts",label:"Couch rechts",icon:""},{entity_id:"switch.shellypstripg4_d885aceaa49c_switch_0",label:"Kaffee Mühle",icon:""},{entity_id:"switch.shellypstripg4_d885aceaa49c_switch_2",label:"Wasserkocher",icon:""}],S5=[{entity_id:"scene.kino",label:"Kino",icon:""},{entity_id:"scene.wohnzimmer_abend",label:"Abend",icon:""},{entity_id:"scene.gute_nacht",label:"Gute Nacht",icon:""},{entity_id:"scene.wohnzimmer_normal",label:"Normal",icon:""}],C5={entity_id:"weather.openweather"},E5={entity_id:"media_player.wohnzimmer"},N5={entity_id:""},j5={entity_id:"todo.einkaufsliste"},P5={entity_id:"vacuum.roborock_qrevo_edge_series"},I5=[],z5="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2940&auto=format&fit=crop",za={quickActions:A5,scenes:S5,weather:C5,mediaPlayer:E5,camera:N5,shoppingList:j5,vacuum:P5,presence:I5,backgroundImage:z5},Bu="Beispieldaten · 18.06.2026",ls="kWh",M5={title:"Energiefluss heute",subtitle:Bu,unit:ls,nodes:[{id:"solar",name:"Photovoltaik",column:0,color:"#f9c802"},{id:"grid_in",name:"Netz (Bezug)",column:0,color:"#488fc2"},{id:"home",name:"Haus",column:1,color:"#4db6ac"},{id:"heating",name:"Heizung",column:2,color:"#e57373"},{id:"ev",name:"E-Auto",column:2,color:"#81c784"},{id:"household",name:"Haushalt",column:2,color:"#9575cd"},{id:"battery",name:"Batterie",column:2,color:"#4dd0e1"},{id:"grid_out",name:"Netz (Einspeisung)",column:2,color:"#64b5f6"}],links:[{source:"solar",target:"home",value:8.2},{source:"solar",target:"grid_out",value:2.1},{source:"solar",target:"battery",value:2.1},{source:"grid_in",target:"home",value:3.8},{source:"home",target:"heating",value:6.5},{source:"home",target:"ev",value:4.2},{source:"home",target:"household",value:1.3}]},L5={title:"Inputs / Outputs",subtitle:Bu,unit:ls,inputs:[{id:"solar",name:"Photovoltaik",value:12.4,color:"#f9c802"},{id:"grid_in",name:"Netz (Bezug)",value:4.6,color:"#488fc2"},{id:"battery_out",name:"Batterie",value:1.2,color:"#4dd0e1"}],outputs:[{id:"consumption",name:"Verbrauch",value:13.2,color:"#4db6ac"},{id:"grid_out",name:"Einspeisung",value:2.1,color:"#64b5f6"},{id:"battery_in",name:"Batterie",value:2.1,color:"#26a69a"}]},T5={title:"E-Auto",subtitle:Bu,unit:ls,items:[{id:"ev",name:"E-Auto",value:4.2,color:"#81c784",demoCharging:!0,sources:[{name:"Netz",value:2.8},{name:"PV",value:1.4}]},{id:"heatpump",name:"Wärmepumpe",value:3.1,color:"#e57373",demoLightOn:!0,sources:[{name:"Netz",value:2.1},{name:"PV",value:1}]}]},To={"inputs-outputs":{label:"Inputs / Outputs",description:"Quellen und Senken"},"ev-heatpump":{label:"E-Auto & Wärmepumpe",description:"Mobilität und Heizung"}};function er(e,t=ls){return`${e>=10?e.toFixed(1):e.toFixed(2)} ${t}`}function R5(e){return e.links.filter(t=>{var n;return((n=e.nodes.find(r=>r.id===t.source))==null?void 0:n.column)===0}).reduce((t,n)=>t+n.value,0)}function D5(e){return e==="ev-heatpump"?T5:L5}function O5(e,t={}){const n=String(e||"").toLowerCase();if(["charging","on","true"].includes(n))return!0;if(["not charging","idle","off","false","disconnected","complete","finished"].includes(n))return!1;const r=Number(t.power??t.power_kw??t.current_power??t.charging_power);return!!(Number.isFinite(r)&&r>50)}function sa(e,t,n=!1){var a,o;const r=((a=e==null?void 0:e.ev)==null?void 0:a.stateEntity)||"";if(r)return r;const i=((o=t==null?void 0:t.ev)==null?void 0:o.stateEntity)||"";return i||(n?"binary_sensor.grandland_charging":"")}function Rg(e,t=!1){var r;const n=((r=e==null?void 0:e.ev)==null?void 0:r.batteryEntity)||"";return n||(t?"sensor.grandland_battery":"")}function F5(e,t,n,r=!1){var a;const i=sa(t,n,r);return i?r?!0:!!((a=e==null?void 0:e.states)!=null&&a[i]):!1}function Qu(e,t,n=!1){var a;if(!t||!((a=e==null?void 0:e.states)!=null&&a[t]))return n;const r=e.states[t],i=ye(t);return i==="binary_sensor"?r.state==="on":i==="switch"||i==="input_boolean"?os(r.state,i):O5(r.state,r.attributes)}const B5=["power","power_kw","current_power","charging_power","charge_power"];function Fm(e,t=""){if(!Number.isFinite(e))return null;const n=String(t).toLowerCase();return n==="kw"?e*1e3:n==="w"||n==="watt"?e:!n&&e>0&&e<=50?e*1e3:e}function Bm(e){var n,r;if(!e)return null;const t=Fm(Number(e.state),(n=e.attributes)==null?void 0:n.unit_of_measurement);if(t!=null&&t>0)return t;for(const i of B5){const a=Fm(Number((r=e.attributes)==null?void 0:r[i]));if(a!=null&&a>0)return a}return null}function Q5(e,t,n=!1){var a,o;const r=((a=t==null?void 0:t.ev)==null?void 0:a.powerEntity)||"";if(r)return r;if(n)return"sensor.grandland_charge_power";const i=(((o=t==null?void 0:t.ev)==null?void 0:o.label)||"").trim().toLowerCase();if(i&&(e!=null&&e.states)){const l=Object.values(e.states).find(c=>{var d;const u=String(((d=c.attributes)==null?void 0:d.friendly_name)||"").toLowerCase();return u.includes(i)&&u.includes("ladeleistung")});if(l)return l.entity_id}return bi(e,t,["charge_power"])}const W5=["charging","connected","enabled","charge_power","vehicle_soc","vehicle_range","charge_remaining_duration","session_price","session_energy","charged_energy"],U5=new RegExp(`^(?:binary_)?sensor\\.evcc_(.+?)_(?:${W5.join("|")})$`);function Wu(e,t){const n=(t==null?void 0:t.ev)||{};for(const i of[n.stateEntity,n.powerEntity,n.batteryEntity,n.rangeEntity]){const a=String(i||"").match(U5);if(a)return a[1]}if(!(e!=null&&e.states))return"";const r=Object.keys(e.states).find(i=>/^binary_sensor\.evcc_.+_charging$/.test(i));return r?r.slice(19,-9):""}function bi(e,t,n){const r=Wu(e,t);if(!r||!(e!=null&&e.states))return"";for(const i of n){const a=`sensor.evcc_${r}_${i}`;if(e.states[a])return a}return""}function fr(e,t){var i;const n=t?(i=e==null?void 0:e.states)==null?void 0:i[t]:null;if(!n)return null;const r=Number(n.state);return Number.isFinite(r)?r:null}function H5(e,t){var l,c;const n=t?(l=e==null?void 0:e.states)==null?void 0:l[t]:null;if(!n)return null;const r=String(n.state??""),i=r.match(/^(\d+):(\d{2})(?::(\d{2}))?$/);if(i)return Number(i[1])*3600+Number(i[2])*60+Number(i[3]||0);const a=Number(r);if(!Number.isFinite(a))return null;const o=String(((c=n.attributes)==null?void 0:c.unit_of_measurement)||"s").toLowerCase();return o==="h"?a*3600:o==="min"?a*60:o==="d"?a*86400:a}function V5(e,t){var i;const n=fr(e,t);return n==null?null:String(((i=e.states[t].attributes)==null?void 0:i.unit_of_measurement)||"kWh").toLowerCase()==="wh"?n/1e3:n}function q5(e,t,n=!1){var y;const r=(t==null?void 0:t.ev)||{},i=p=>n?`sensor.grandland_${p}`:"",a=(p,h,k)=>p||bi(e,t,h)||i(k),o=sa(t,null,n),l=Qu(e,o,n),c=Wu(e,t),u=c?`binary_sensor.evcc_${c}_connected`:"",d=(y=e==null?void 0:e.states)!=null&&y[u]?e.states[u].state==="on":null;let m=Og(e,Rg(t,n),null);if(m==null||m<=0){const p=fr(e,bi(e,t,["vehicle_soc"]));p!=null&&p>0&&(m=Math.min(100,Math.round(p)))}const f=fr(e,a(r.rangeEntity,["vehicle_range"],"range")),g=fr(e,bi(e,t,["effective_limit_soc","limit_soc"])),v=Dg(e,t,n),w=H5(e,a(r.chargeTimeEntity,["charge_remaining_duration"],"charge_remaining")),x=a(r.costEntity,["session_price"],"cost_today");return{label:r.label||"E-Auto",charging:l,connected:d,soc:m,rangeKm:f!=null&&f>0?f:null,limitSoc:g!=null&&g>0?Math.min(100,Math.round(g)):100,powerWatts:l?v:0,remainingSeconds:l&&w>0?w:null,lastTripKm:fr(e,r.lastTripEntity||i("last_trip")),cost:fr(e,x),costIsSession:!r.costEntity&&!n,sessionKwh:V5(e,bi(e,t,["session_energy","charged_energy"]))}}function K5(e){if(e==null||!Number.isFinite(e))return"—";const t=Math.max(1,Math.round(e/60)),n=Math.floor(t/60),r=t%60;return n?r?`${n} h ${r} min`:`${n} h`:`${r} min`}function Dg(e,t,n=!1){var a,o;const r=Q5(e,t,n);if(r&&((a=e==null?void 0:e.states)!=null&&a[r])){const l=Bm(e.states[r]);if(l!=null)return l}const i=sa(t,null,n);if(i&&((o=e==null?void 0:e.states)!=null&&o[i])){const l=Bm(e.states[i]);if(l!=null)return l}return n?11e3:null}function Uu(e){if(e==null||!Number.isFinite(e)||e<=0)return"—";const t=e/1e3;return`${t.toLocaleString("de-DE",{maximumFractionDigits:t>=1?1:2})} kW`}function Og(e,t,n=null){var o,l,c,u;if(!t||!((o=e==null?void 0:e.states)!=null&&o[t]))return n;const r=e.states[t],i=Number(r.state);if(Number.isFinite(i))return Math.min(100,Math.max(0,Math.round(i)));const a=Number(((l=r.attributes)==null?void 0:l.battery_level)??((c=r.attributes)==null?void 0:c.state_of_charge)??((u=r.attributes)==null?void 0:u.soc));return Number.isFinite(a)?Math.min(100,Math.max(0,Math.round(a))):n}function Y5(e,t){var r;return`${((r=e==null?void 0:e.ev)==null?void 0:r.label)||"E-Auto"} lädt`}function J5(e,t,n=null){var o;const i=[`${((o=e==null?void 0:e.ev)==null?void 0:o.label)||"Grandland"} wird geladen`],a=Uu(n);return a!=="—"&&i.push(a),t!=null&&i.push(`Akku ${t}%`),i.join(" · ")}const Qm="/local/grandland.png",Wm={ev:{charging:Qm,idle:Qm,stateEntity:""},heatpump:{lightOn:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",lightOff:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",lightEntity:""}},Um={charging:"Lädt",idle:"Nicht am Laden"},Hm={lightOn:"Mit Licht",lightOff:"Ohne Licht"};function Hu(e={}){return{ev:{...Wm.ev,...e.ev||{}},heatpump:{...Wm.heatpump,...e.heatpump||{}}}}function Xi(e){return Hu(e)}function Z5(e,t,n=!1){var i;if(!t||!((i=e==null?void 0:e.states)!=null&&i[t]))return n;const r=e.states[t];return os(r.state,ye(t))}function G5(e,t,n){const r=Hu(t),i=n?r.ev.charging:r.ev.idle;return Fg(e,i)}function X5(e,t,n){const r=Hu(t),i=n?r.heatpump.lightOn:r.heatpump.lightOff;return Fg(e,i)}function Fg(e,t){return t?$r(e,t)||t:null}/*! js-yaml 5.4.3 https://github.com/nodeca/js-yaml @license MIT */var te=Symbol("NOT_RESOLVED");function Ue(e,t){return{tagName:e,nodeKind:"scalar",implicit:t.implicit??!1,matchByTagPrefix:t.matchByTagPrefix??!1,implicitFirstChars:t.implicitFirstChars??null,resolve:t.resolve,identify:t.identify,represent:t.represent??(n=>String(n)),representTagName:t.representTagName??(()=>e)}}function Vu(e,t){const n=t.finalize===void 0;return{tagName:e,nodeKind:"sequence",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addItem:t.addItem,finalize:t.finalize??(r=>r),carrierIsResult:n,identify:t.identify,represent:t.represent??(r=>r),representTagName:t.representTagName??(()=>e)}}function cs(e,t){const n=t.finalize===void 0;return{tagName:e,nodeKind:"mapping",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addPair:t.addPair,has:t.has,keys:t.keys,get:t.get,finalize:t.finalize??(r=>r),carrierIsResult:n,identify:t.identify,represent:t.represent??(r=>r),representTagName:t.representTagName??(()=>e)}}var _5=Ue("tag:yaml.org,2002:str",{resolve:e=>e,identify:e=>typeof e=="string"}),$5=["","~","null","Null","NULL"],e2=Ue("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>$5.indexOf(e)!==-1?null:te,identify:e=>e===null,represent:()=>"null"}),t2=Ue("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["n"],resolve:(e,t)=>e==="null"||t&&e===""?null:te,identify:e=>e===null,represent:()=>"null"}),n2=["","~","null","Null","NULL"],r2=Ue("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>n2.indexOf(e)!==-1?null:te,identify:e=>e===null,represent:()=>"null"}),i2=["true","True","TRUE"],a2=["false","False","FALSE"],o2=Ue("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","T","f","F"],resolve:e=>i2.indexOf(e)!==-1?!0:a2.indexOf(e)!==-1?!1:te,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),s2=["true"],l2=["false"],c2=Ue("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","f"],resolve:e=>s2.indexOf(e)!==-1?!0:l2.indexOf(e)!==-1?!1:te,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),u2=["true","True","TRUE","y","Y","yes","Yes","YES","on","On","ON"],d2=["false","False","FALSE","n","N","no","No","NO","off","Off","OFF"],m2=Ue("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["y","Y","n","N","t","T","f","F","o","O"],resolve:e=>u2.indexOf(e)!==-1?!0:d2.indexOf(e)!==-1?!1:te,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),f2=new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"),p2=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function h2(e){let t=e,n=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(n=-1),t=t.slice(1)),t.startsWith("0b")?n*parseInt(t.slice(2),2):t.startsWith("0o")?n*parseInt(t.slice(2),8):t.startsWith("0x")?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function g2(e,t){if(t){if(!p2.test(e))return te}else if(!f2.test(e))return te;const n=h2(e);return Number.isFinite(n)?n:te}var Bg=Ue("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:g2,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),y2=new RegExp("^-?(?:0|[1-9][0-9]*)$"),v2=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function b2(e){let t=e,n=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(n=-1),t=t.slice(1)),t.startsWith("0b")?n*parseInt(t.slice(2),2):t.startsWith("0o")?n*parseInt(t.slice(2),8):t.startsWith("0x")?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function w2(e,t){if(t){if(!v2.test(e))return te}else if(!y2.test(e))return te;const n=b2(e);return Number.isFinite(n)?n:te}var x2=Ue("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:w2,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),k2=new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");function A2(e){let t=e.replace(/_/g,""),n=1;if((t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(n=-1),t=t.slice(1)),t.startsWith("0b"))return n*parseInt(t.slice(2),2);if(t.startsWith("0x"))return n*parseInt(t.slice(2),16);if(t.includes(":")){let r=0;for(const i of t.split(":"))r=r*60+Number(i);return n*r}return t!=="0"&&t[0]==="0"?n*parseInt(t,8):n*parseInt(t,10)}function S2(e){if(!k2.test(e))return te;const t=A2(e);return Number.isFinite(t)?t:te}var sc=Ue("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:S2,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),C2=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),E2=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function N2(e){if(!C2.test(e))return te;let t=e.toLowerCase();const n=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;const r=n*parseFloat(t);return Number.isFinite(r)||E2.test(e)?r:te}function j2(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var Qg=Ue("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:N2,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:j2}),P2=new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"),I2=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function z2(e,t){if(t){if(!I2.test(e))return te;let r=e.toLowerCase();const i=r[0]==="-"?-1:1;if("+-".includes(r[0])&&(r=r.slice(1)),r===".inf")return i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(r===".nan")return NaN;const a=i*parseFloat(r);return Number.isFinite(a)?a:te}if(!P2.test(e))return te;const n=Number(e);return Number.isFinite(n)?n:te}function M2(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var L2=Ue("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:z2,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:M2}),T2=new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),R2=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function D2(e){if(!T2.test(e))return te;let t=e.toLowerCase().replace(/_/g,"");const n=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;let r=0;if(t.includes(":")){for(const i of t.split(":"))r=r*60+Number(i);r*=n}else r=n*parseFloat(t);return Number.isFinite(r)||R2.test(e)?r:te}function O2(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var lc=Ue("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:D2,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:O2}),F2=Ue("tag:yaml.org,2002:merge",{implicit:!0,implicitFirstChars:["<"],resolve:(e,t)=>e==="<<"||t&&e===""?"<<":te,identify:()=>!1}),B2=/^[A-Za-z0-9+/]*={0,2}$/;function Q2(e){const t=e.replace(/\s/g,"");if(t.length%4!==0||!B2.test(t))return te;const n=atob(t),r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}function W2(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}var U2=Ue("tag:yaml.org,2002:binary",{resolve:Q2,identify:e=>Object.prototype.toString.call(e)==="[object Uint8Array]",represent:W2}),H2=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),V2=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Vm(e,t,n,r=0,i=0,a=0,o=0){const l=new Date(Date.UTC(e,t,n,r,i,a,o));return l.setUTCFullYear(e,t,n),l}function q2(e){let t=H2.exec(e);if(t===null&&(t=V2.exec(e)),t===null)return te;const n=+t[1],r=+t[2]-1,i=+t[3];if(!t[4]){const d=Vm(n,r,i);return d.getUTCFullYear()!==n||d.getUTCMonth()!==r||d.getUTCDate()!==i?te:d}const a=+t[4],o=+t[5],l=+t[6];let c=0;if(a>23||o>59||l>59)return te;if(t[7]){let d=t[7].slice(0,3);for(;d.length<3;)d+="0";c=+d}const u=Vm(n,r,i,a,o,l,c);if(u.getUTCFullYear()!==n||u.getUTCMonth()!==r||u.getUTCDate()!==i)return te;if(t[9]){const d=+t[10],m=+(t[11]||0);if(d>23||m>59)return te;const f=(d*60+m)*6e4;u.setTime(u.getTime()-(t[9]==="-"?-f:f))}return u}var K2=Ue("tag:yaml.org,2002:timestamp",{implicit:!0,implicitFirstChars:[..."0123456789"],resolve:q2,identify:e=>e instanceof Date,represent:e=>e.toISOString()}),Y2=Vu("tag:yaml.org,2002:seq",{create:()=>[],addItem:(e,t)=>{e.push(t)},identify:Array.isArray});function us(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function cc(e,t){const n={};for(const r of t)e[r]!==void 0&&(n[r]=e[r]);return n}var J2=Vu("tag:yaml.org,2002:omap",{create:()=>({list:[],seen:new Set}),addItem:(e,t)=>{let n;if(t instanceof Map){if(t.size!==1)return"cannot resolve an ordered map item";n=t.keys().next().value}else if(us(t)){const r=Object.keys(t);if(r.length!==1)return"cannot resolve an ordered map item";n=r[0]}else return"cannot resolve an ordered map item";return e.seen.has(n)?"duplicate key in ordered map":(e.seen.add(n),e.list.push(t),"")},finalize:e=>e.list,identify:()=>!1}),Z2=Vu("tag:yaml.org,2002:pairs",{create:()=>[],addItem:(e,t)=>{if(t instanceof Map)return t.size!==1?"cannot resolve a pairs item":(e.push(t.entries().next().value),"");if(Object.prototype.toString.call(t)!=="[object Object]")return"cannot resolve a pairs item";const n=t,r=Object.keys(n);return r.length!==1?"cannot resolve a pairs item":(e.push([r[0],n[r[0]]]),"")},identify:()=>!1}),G2=cs("tag:yaml.org,2002:map",{create:()=>({}),identify:us,represent:e=>{const t=new Map;for(const n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{if(t!==null&&typeof t=="object")return"object-based map does not support complex keys";const r=String(t);return r==="__proto__"?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,""},has:(e,t)=>t!==null&&typeof t=="object"?!1:Object.prototype.hasOwnProperty.call(e,String(t)),keys:e=>Object.keys(e),get:(e,t)=>{const n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}}),X2=cs("tag:yaml.org,2002:set",{create:()=>new Set,identify:e=>e instanceof Set,represent:e=>{const t=new Map;for(const n of e)t.set(n,null);return t},addPair:(e,t,n)=>n!==null?"cannot resolve a set item":(e.add(t),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:()=>null});function _2(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function $2(){return{scalar:[],sequence:[],mapping:[]}}function ek(e){const t=[];for(const n of e){let r=t.length;for(let i=0;i<t.length;i++){const a=t[i];if(a.nodeKind===n.nodeKind&&a.tagName===n.tagName&&a.matchByTagPrefix===n.matchByTagPrefix){r=i;break}}t[r]=n}return t}var ds=class Wg{constructor(t){ft(this,"tags");ft(this,"implicitScalarTags");ft(this,"implicitScalarByFirstChar");ft(this,"implicitScalarAnyFirstChar");ft(this,"defaultScalarTag");ft(this,"defaultSequenceTag");ft(this,"defaultMappingTag");ft(this,"exact");ft(this,"prefix");const n=ek(t),r=[],i=_2(),a=$2();for(const d of n){if(d.nodeKind==="scalar"&&d.implicit){if(d.matchByTagPrefix)throw new Error("Implicit scalar tags cannot match by tag prefix");r.push(d)}switch(d.nodeKind){case"scalar":d.matchByTagPrefix?a.scalar.push(d):i.scalar[d.tagName]=d;break;case"sequence":d.matchByTagPrefix?a.sequence.push(d):i.sequence[d.tagName]=d;break;case"mapping":d.matchByTagPrefix?a.mapping.push(d):i.mapping[d.tagName]=d;break}}const o=r.filter(d=>d.implicitFirstChars===null),l=new Set;for(const d of r)if(d.implicitFirstChars!==null)for(const m of d.implicitFirstChars)l.add(m);const c=new Map;for(const d of l)c.set(d,r.filter(m=>m.implicitFirstChars===null||m.implicitFirstChars.indexOf(d)!==-1));const u=i.scalar["tag:yaml.org,2002:str"];if(!u)throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");this.tags=n,this.implicitScalarTags=r,this.implicitScalarByFirstChar=c,this.implicitScalarAnyFirstChar=o,this.defaultScalarTag=u,this.defaultSequenceTag=i.sequence["tag:yaml.org,2002:seq"],this.defaultMappingTag=i.mapping["tag:yaml.org,2002:map"],this.exact=i,this.prefix=a}lookupScalarTag(t){const n=this.exact.scalar[t];if(n)return n;for(const r of this.prefix.scalar)if(t.startsWith(r.tagName))return r}lookupSequenceTag(t){const n=this.exact.sequence[t];if(n)return n;for(const r of this.prefix.sequence)if(t.startsWith(r.tagName))return r}lookupMappingTag(t){const n=this.exact.mapping[t];if(n)return n;for(const r of this.prefix.mapping)if(t.startsWith(r.tagName))return r}resolveImplicitScalarTag(t){const n=this.implicitScalarByFirstChar.get(t.charAt(0))??this.implicitScalarAnyFirstChar;for(const i of n){const a=i.resolve(t,!1,i.tagName);if(a!==te)return{value:a,tag:i}}const r=this.defaultScalarTag;return{value:r.resolve(t,!1,r.tagName),tag:r}}withTags(...t){let n=[];for(const r of t)n=n.concat(r);return new Wg([...this.tags,...n])}},qu=new ds([_5,Y2,G2]);new ds([...qu.tags,t2,c2,x2,L2]);var tk=new ds([...qu.tags,e2,o2,Bg,Qg]),nk=new ds([...qu.tags,r2,m2,sc,lc,K2,F2,U2,J2,Z2,X2]),rk=nk.withTags({...sc,resolve:(e,t,n)=>{const r=sc.resolve(e,t,n);return r===te?Bg.resolve(e,t,n):r}},{...lc,resolve:(e,t,n)=>{const r=lc.resolve(e,t,n);return r===te?Qg.resolve(e,t,n):r}});cs("tag:yaml.org,2002:map",{create:()=>new Map,addPair:(e,t,n)=>(e.set(t,n),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:(e,t)=>e.get(t),identify:e=>e instanceof Map||us(e),represent:e=>{if(e instanceof Map)return e;const t=new Map,n=e;for(const r of Object.keys(n))t.set(r,n[r]);return t}});function qm(e){if(Array.isArray(e)){const t=Array.prototype.slice.call(e);for(let n=0;n<t.length;n++){if(Array.isArray(t[n]))return null;typeof t[n]=="object"&&Object.prototype.toString.call(t[n])==="[object Object]"&&(t[n]="[object Object]")}return String(t)}return typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"?"[object Object]":String(e)}cs("tag:yaml.org,2002:map",{create:()=>({}),identify:us,represent:e=>{const t=new Map;for(const n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{const r=qm(t);return r===null?"nested arrays are not supported inside keys":(r==="__proto__"?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,"")},has:(e,t)=>{const n=qm(t);return n!==null&&Object.prototype.hasOwnProperty.call(e,n)},keys:e=>Object.keys(e),get:(e,t)=>{const n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}});var ik={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function Xs(e,t,n,r,i){let a="",o="";const l=Math.floor(i/2)-1;return r-t>l&&(a=" ... ",t=r-l+a.length),n-r>l&&(o=" ...",n=r+l-o.length),{str:a+e.slice(t,n).replace(/\t/g,"→")+o,pos:r-t+a.length}}function _s(e,t){return" ".repeat(Math.max(t-e.length,0))+e}function ak(e,t){if(!e.buffer)return null;const n={...ik,...t},r=/\r?\n|\r|\0/g,i=[0],a=[];let o,l=-1;for(;o=r.exec(e.buffer);)a.push(o.index),i.push(o.index+o[0].length),e.position<=o.index&&l<0&&(l=i.length-2);l<0&&(l=i.length-1);let c="";const u=Math.min(e.line+n.linesAfter,a.length).toString().length,d=n.maxLength-(n.indent+u+3);for(let f=1;f<=n.linesBefore&&!(l-f<0);f++){const g=Xs(e.buffer,i[l-f],a[l-f],e.position-(i[l]-i[l-f]),d);c=`${" ".repeat(n.indent)}${_s((e.line-f+1).toString(),u)} | ${g.str}
${c}`}const m=Xs(e.buffer,i[l],a[l],e.position,d);c+=`${" ".repeat(n.indent)}${_s((e.line+1).toString(),u)} | ${m.str}
`,c+=`${"-".repeat(n.indent+u+3+m.pos)}^
`;for(let f=1;f<=n.linesAfter&&!(l+f>=a.length);f++){const g=Xs(e.buffer,i[l+f],a[l+f],e.position-(i[l]-i[l+f]),d);c+=`${" ".repeat(n.indent)}${_s((e.line+f+1).toString(),u)} | ${g.str}
`}return c.replace(/\n$/,"")}function Km(e,t){let n="";return e.mark?(e.mark.name&&(n+=`in "${e.mark.name}" `),n+=`(${e.mark.line+1}:${e.mark.column+1})`,!t&&e.mark.snippet&&(n+=`

${e.mark.snippet}`),`${e.reason} ${n}`):e.reason}var In=class Ug extends Error{constructor(n,r){super();ft(this,"reason");ft(this,"mark");this.name="YAMLException",this.reason=n,this.mark=r,this.message=Km(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(n){return`${this.name}: ${Km(this,n)}`}static throwAt(n,r,i,a=""){let o=0,l=0;for(let u=0;u<r;u++){const d=n.charCodeAt(u);d===10?(o++,l=u+1):d===13&&(o++,n.charCodeAt(u+1)===10&&u++,l=u+1)}const c={name:a,buffer:n,position:r,line:o,column:r-l};throw c.snippet=ak(c),new Ug(i,c)}},Me={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6},q={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5},kt={BLOCK:1,FLOW:2},Ft={CLIP:1,STRIP:2,KEEP:3},ok=-1;function Ym(e){switch(e){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}var Hg=new Array(256),Vg=new Array(256);for(let e=0;e<256;e++)Hg[e]=Ym(e)?1:0,Vg[e]=Ym(e);function sk(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function lk(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function ck(e){return e===120?2:e===117?4:8}function Ro(e,t,n){let r=0;for(;t<n;){const i=e.charCodeAt(t);if(i===10)r++,t++;else if(i===13)r++,t++,e.charCodeAt(t)===10&&t++;else if(i===32||i===9)t++;else break}return{position:t,breaks:r}}function Ku(e){return e===1?" ":`
`.repeat(e-1)}function uk(e,t,n){let r="",i=t,a=t,o=t;for(;i<n;){const l=e.charCodeAt(i);if(l===10||l===13){r+=e.slice(a,o);const c=Ro(e,i,n);r+=Ku(c.breaks),i=a=o=c.position}else i++,l!==32&&l!==9&&(o=i)}return r+e.slice(a,o)}function dk(e,t,n){let r="",i=t,a=t,o=t;for(;i<n;){const l=e.charCodeAt(i);if(l===39)r+=e.slice(a,i)+"'",i+=2,a=o=i;else if(l===10||l===13){r+=e.slice(a,o);const c=Ro(e,i,n);r+=Ku(c.breaks),i=a=o=c.position}else i++,l!==32&&l!==9&&(o=i)}return r+e.slice(a,n)}function mk(e,t,n){let r="",i=t,a=t,o=t;for(;i<n;){const l=e.charCodeAt(i);if(l===92){r+=e.slice(a,i),i++;const c=e.charCodeAt(i);if(c===10||c===13)i=Ro(e,i,n).position;else if(c<256&&Hg[c])r+=Vg[c],i++;else{let u=ck(c),d=0;for(;u>0;u--){i++;const m=lk(e.charCodeAt(i));d=(d<<4)+m}r+=sk(d),i++}a=o=i}else if(l===10||l===13){r+=e.slice(a,o);const c=Ro(e,i,n);r+=Ku(c.breaks),i=a=o=c.position}else i++,l!==32&&l!==9&&(o=i)}return r+e.slice(a,n)}function Jm(e,t,n,r,i,a){const o=r<0?0:r,l=e.slice(t,n).replace(/\r\n?/g,`
`),c=l===""?[]:(l.endsWith(`
`)?l.slice(0,-1):l).split(`
`);let u="",d=!1,m=0,f=!1;for(const g of c){let v=0;for(;v<o&&g.charCodeAt(v)===32;)v++;if(r<0||v>=g.length){m++;continue}const w=g.slice(o),x=w.charCodeAt(0);a?x===32||x===9?(f=!0,u+=`
`.repeat(d?1+m:m)):f?(f=!1,u+=`
`.repeat(m+1)):m===0?d&&(u+=" "):u+=`
`.repeat(m):u+=`
`.repeat(d?1+m:m),u+=w,d=!0,m=0}return i===Ft.KEEP?u+=`
`.repeat(d?1+m:m):i!==Ft.STRIP&&d&&(u+=`
`),u}function fk(e,t){if(t.valueStart===ok)return"";const{valueStart:n,valueEnd:r}=t;if(t.fast)return e.slice(n,r);switch(t.style){case q.SINGLE_QUOTED:return dk(e,n,r);case q.DOUBLE_QUOTED:return mk(e,n,r);case q.LITERAL_BLOCK:return Jm(e,n,r,t.indent,t.chomping,!1);case q.FOLDED_BLOCK:return Jm(e,n,r,t.indent,t.chomping,!0);default:return uk(e,n,r)}}var pk=Object.assign(Object.create(null),{"!":"!","!!":"tag:yaml.org,2002:"});function $s(e){return encodeURI(e).replace(/!/g,"%21")}function qg(e,t){if(e.startsWith("!<")&&e.endsWith(">"))return decodeURIComponent(e.slice(2,-1));const n=e.indexOf("!",1),r=n===-1?"!":e.slice(0,n+1),i=(t==null?void 0:t[r])??pk[r]??r;return decodeURIComponent(i)+decodeURIComponent(e.slice(r.length))}function Kg(e){let t=e;return t.charCodeAt(0)===33?(t=t.slice(1),`!${$s(t)}`):t.slice(0,18)==="tag:yaml.org,2002:"?`!!${$s(t.slice(18))}`:`!<${$s(t)}>`}var Tr=-1,hk="tag:yaml.org,2002:merge",Yu={filename:"",schema:tk,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function gk(e){return"tagStart"in e&&e.tagStart!==Tr?e.tagStart:"anchorStart"in e&&e.anchorStart!==Tr?e.anchorStart:"valueStart"in e&&e.valueStart!==Tr?e.valueStart:"start"in e?e.start:0}function Le(e,t){In.throwAt(e.source,e.position,t,e.filename)}function Yg(e,t,n,r){try{return n.finalize(r)}catch(i){if(i instanceof In)throw i;In.throwAt(e.source,t,i instanceof Error?i.message:String(i),e.filename)}}function yk(e,t){const n=fk(e.source,t),r=t.tagStart===Tr?"":e.source.slice(t.tagStart,t.tagEnd),i=e.schema.defaultScalarTag;if(r!==""){if(r==="!")return{value:n,tag:i};const a=qg(r,e.tagHandlers),o=e.schema.lookupScalarTag(a);if(o){const c=o.resolve(n,!0,a);return c===te&&Le(e,`cannot resolve a node with !<${a}> explicit tag`),{value:c,tag:o}}const l=e.schema.lookupMappingTag(a)??e.schema.lookupSequenceTag(a);if(l){n!==""&&Le(e,`cannot resolve a node with !<${a}> explicit tag`);const c=l.create(a);return{value:l.carrierIsResult?c:Yg(e,e.position,l,c),tag:l}}Le(e,`unknown scalar tag !<${a}>`)}return t.style===q.PLAIN?e.schema.resolveImplicitScalarTag(n):{value:i.resolve(n,!1,i.tagName),tag:i}}function Zm(e,t,n){const r=t.tagStart===Tr?"":e.source.slice(t.tagStart,t.tagEnd);return r===""||r==="!"?n:qg(r,e.tagHandlers)}function Jg(e){return e.nodeKind==="mapping"}function Gm(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&Le(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`)}function Xm(e,t,n,r){Gm(e);for(const i of r.keys(n)){if(Gm(e),t.tag.has(t.value,i))continue;const a=t.tag.addPair(t.value,i,r.get(n,i));a&&Le(e,a),t.overridable??(t.overridable=new Set),t.overridable.add(i)}}function vk(e,t,n,r){if(e.position=t.keyPosition,Jg(r))Xm(e,t,n,r);else if(r.nodeKind==="sequence"&&Array.isArray(n)){n.length>100&&Le(e,"abnormal merge sequence size");for(const i of n){const a=e.nodeTags.get(i);a||Le(e,"cannot merge mappings; the provided source object is unacceptable"),Xm(e,t,i,a)}}else Le(e,"cannot merge mappings; the provided source object is unacceptable")}function bk(e,t,n,r,i){var o,l;if(e.position=t.keyPosition,t.keyIsMerge){vk(e,t,r,i);return}!e.json&&t.tag.has(t.value,n)&&!((o=t.overridable)!=null&&o.has(n))&&Le(e,"duplicated mapping key");const a=t.tag.addPair(t.value,n,r);a&&Le(e,a),(l=t.overridable)==null||l.delete(n)}function el(e,t,n){const r=e.frames[e.frames.length-1];if(r.kind==="document")r.value=t,r.hasValue=!0;else if(r.kind==="sequence"){Jg(n)&&e.nodeTags.set(t,n);const i=r.tag.addItem(r.value,t,r.index++);i&&Le(e,i)}else if(r.hasKey){const i=r.key;r.key=void 0,r.hasKey=!1,bk(e,r,i,t,n)}else r.key=t,r.keyPosition=e.position,r.hasKey=!0,r.keyIsMerge=n.tagName===hk}function tl(e,t,n,r,i){if(t.anchorStart!==Tr){const a={value:n,tag:r,isValueFinal:i};return e.anchors.set(e.source.slice(t.anchorStart,t.anchorEnd),a),a}return null}function wk(e,t){const n={...Yu,...t,events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:new Map,nodeTags:new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0};for(;n.eventIndex<n.events.length;){const r=n.events[n.eventIndex++];switch(n.position=gk(r),r.type){case Me.DOCUMENT:n.anchors=new Map,n.nodeTags=new Map,n.aliasCount=0,n.tagHandlers=Object.create(null);for(const i of r.directives)i.kind==="tag"&&(n.tagHandlers[i.handle]=i.prefix);n.frames.push({kind:"document",position:n.position,value:void 0,hasValue:!1});break;case Me.SCALAR:{const{value:i,tag:a}=yk(n,r);tl(n,r,i,a,!0),el(n,i,a);break}case Me.SEQUENCE:{const i=Zm(n,r,"tag:yaml.org,2002:seq"),a=n.schema.lookupSequenceTag(i);a||Le(n,`unknown sequence tag !<${i}>`);const o=a.create(i),l=tl(n,r,o,a,a.carrierIsResult);n.frames.push({kind:"sequence",position:n.position,value:o,tag:a,anchor:l,index:0});break}case Me.MAPPING:{const i=Zm(n,r,"tag:yaml.org,2002:map"),a=n.schema.lookupMappingTag(i);a||Le(n,`unknown mapping tag !<${i}>`);const o=a.create(i),l=tl(n,r,o,a,a.carrierIsResult);n.frames.push({kind:"mapping",position:n.position,value:o,tag:a,anchor:l,key:void 0,keyPosition:n.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case Me.ALIAS:{n.maxAliases!==-1&&++n.aliasCount>n.maxAliases&&Le(n,`aliases exceeded maxAliases (${n.maxAliases})`);const i=n.source.slice(r.anchorStart,r.anchorEnd),a=n.anchors.get(i);a||Le(n,`unidentified alias "${i}"`),a.isValueFinal||Le(n,`recursive alias "${i}" is not supported for tag ${a.tag.tagName} because it uses finalize()`),el(n,a.value,a.tag);break}case Me.POP:{const i=n.frames.pop();if(i.kind==="mapping"&&i.hasKey&&(n.position=i.keyPosition,Le(n,"incomplete mapping pair in event stream")),i.kind==="document")n.documents.push(i.value);else{const a=i.tag.carrierIsResult?i.value:Yg(n,i.position,i.tag,i.value);i.anchor&&(i.anchor.value=a,i.anchor.isValueFinal=!0),el(n,a,i.tag)}break}}}return n.documents}var ne=-1,Zg=Object.prototype.hasOwnProperty,qr=1,Gg=2,Xg=3,Do=4,xk=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,kk=/[,\[\]{}]/,_g=/^(?:!|!!|![0-9A-Za-z-]+!)$/,uc=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`,$g=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`,Ak=new RegExp(`^(?:${uc})*$`),Sk=new RegExp(`^(?:${$g})+$`),Ck=new RegExp(`^(?:!(?:${uc})*|${$g}(?:${uc})*)$`),Ju={filename:"",maxDepth:100};function Ek(e,t,n){e.events.push({type:Me.DOCUMENT,explicitStart:t,explicitEnd:n,directives:e.directives})}function e0(e,t,n,r,i,a,o){e.events.push({type:Me.SEQUENCE,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:a,style:o})}function t0(e,t,n,r,i,a,o){e.events.push({type:Me.MAPPING,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:a,style:o})}function _m(e,t){e.events.splice(t.eventsLength,0,{type:Me.MAPPING,start:t.position,anchorStart:ne,anchorEnd:ne,tagStart:ne,tagEnd:ne,style:kt.FLOW})}function ei(e,t,n,r,i,a,o,l,c=Ft.CLIP,u=-1,d=!1){e.events.push({type:Me.SCALAR,valueStart:t,valueEnd:n,anchorStart:r,anchorEnd:i,tagStart:a,tagEnd:o,style:l,chomping:c,indent:u,fast:d})}function Nk(e,t,n){e.events.push({type:Me.ALIAS,anchorStart:t,anchorEnd:n})}function Rr(e){e.events.push({type:Me.POP})}function qe(e){ei(e,ne,ne,ne,ne,ne,ne,q.PLAIN)}function $m(){return{anchorStart:ne,anchorEnd:ne,tagStart:ne,tagEnd:ne}}function Dr(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function Or(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.events.length=t.eventsLength}function U(e,t){In.throwAt(e.input.slice(0,e.length),e.position,t,e.filename)}function Ne(e){return e===10||e===13}function ti(e){return e===9||e===32}function zt(e){return ti(e)||Ne(e)}function Zt(e){return e===0||zt(e)}function tr(e){return e===44||e===91||e===93||e===123||e===125}function jk(e){return e>=48&&e<=57?e-48:-1}function Pk(e){if(e>=48&&e<=57)return e-48;const t=e|32;return t>=97&&t<=102?t-97+10:-1}function Ik(e){return e===120?2:e===117?4:e===85?8:0}function zk(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function Oo(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function Be(e,t){let n=0,r=e.input.charCodeAt(e.position),i=e.position===e.lineStart||zt(e.input.charCodeAt(e.position-1));for(;r!==0;){for(;ti(r);)i=!0,r===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&i&&r===35)do r=e.input.charCodeAt(++e.position);while(!Ne(r)&&r!==0);if(!Ne(r))break;for(Oo(e),n++,i=!0,r=e.input.charCodeAt(e.position);r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return n}function Kr(e,t=e.position){const n=e.input.charCodeAt(t);if((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)){const r=e.input.charCodeAt(t+3);return r===0||zt(r)}return!1}function n0(e){e.position===e.lineStart&&e.input.charCodeAt(e.position)===65279&&(e.position++,e.lineStart=e.position)}function Zu(e){if(e.position!==e.lineStart)return!1;if(Kr(e))return!0;if(e.input.charCodeAt(e.position)!==65279)return!1;const t=Dr(e);n0(e),Be(e,!0);const n=e.input.charCodeAt(e.position),r=e.position===e.lineStart&&(n===37||n===45&&Kr(e));return Or(e,t),r}function ef(e){let t=e.input.charCodeAt(e.position);for(;t!==0&&!Ne(t);)t=e.input.charCodeAt(++e.position)}function r0(e,t,n){xk.test(e.input.slice(t,n))&&U(e,"the stream contains non-printable characters")}function Mk(e,t,n){if(e.input.charCodeAt(e.position)!==33)return!1;t.tagStart!==ne&&U(e,"duplication of a tag property");const r=e.position;let i=!1,a=!1,o="!",l=e.input.charCodeAt(++e.position);l===60?(i=!0,l=e.input.charCodeAt(++e.position)):l===33&&(a=!0,o="!!",l=e.input.charCodeAt(++e.position));let c=e.position,u;if(i){for(;l!==0&&l!==62;)l=e.input.charCodeAt(++e.position);l!==62&&U(e,"unexpected end of the stream within a verbatim tag"),u=e.input.slice(c,e.position),e.position++}else{for(;l!==0&&!zt(l)&&!(n&&tr(l));)l===33&&(a?U(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(c-1,e.position+1),_g.test(o)||U(e,"named tag handle cannot contain such characters"),a=!0,c=e.position+1)),l=e.input.charCodeAt(++e.position);u=e.input.slice(c,e.position),kk.test(u)&&U(e,"tag suffix cannot contain flow indicator characters")}return u&&!(i?Ak.test(u):Sk.test(u))&&U(e,`tag name cannot contain such characters: ${u}`),!i&&o!=="!"&&o!=="!!"&&!Zg.call(e.tagHandlers,o)&&U(e,`undeclared tag handle "${o}"`),t.tagStart=r,t.tagEnd=e.position,!0}function Lk(e,t){if(e.input.charCodeAt(e.position)!==38)return!1;t.anchorStart!==ne&&U(e,"duplication of an anchor property"),e.position++;const n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!zt(e.input.charCodeAt(e.position))&&!tr(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&U(e,"name of an anchor node must contain at least one character"),t.anchorStart=n,t.anchorEnd=e.position,!0}function Tk(e,t){if(e.input.charCodeAt(e.position)!==42)return!1;(t.anchorStart!==ne||t.tagStart!==ne)&&U(e,"alias node should not have any properties"),e.position++;const n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!zt(e.input.charCodeAt(e.position))&&!tr(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&U(e,"name of an alias node must contain at least one character"),Nk(e,n,e.position),!0}function dc(e,t){Be(e,!1),e.lineIndent<t&&U(e,"deficient indentation")}function Rk(e,t,n){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;const r=e.position;let i=!0;for(;e.input.charCodeAt(e.position)!==0;){const a=e.input.charCodeAt(e.position);if(a===39){if(e.input.charCodeAt(e.position+1)===39){i=!1,e.position+=2;continue}const o=e.position;return e.position++,ei(e,r,o,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,q.SINGLE_QUOTED,Ft.CLIP,-1,i),!0}Ne(a)?(i=!1,dc(e,t)):e.position===e.lineStart&&Kr(e)?U(e,"unexpected end of the document within a single quoted scalar"):a!==9&&a<32?U(e,"expected valid JSON character"):e.position++}U(e,"unexpected end of the stream within a single quoted scalar")}function Dk(e,t,n){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;const r=e.position;let i=!0;for(;e.input.charCodeAt(e.position)!==0;){const a=e.input.charCodeAt(e.position);if(a===34){const o=e.position;return e.position++,ei(e,r,o,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,q.DOUBLE_QUOTED,Ft.CLIP,-1,i),!0}if(a===92){i=!1;const o=e.input.charCodeAt(++e.position);if(Ne(o))dc(e,t);else if(zk(o))e.position++;else{let l=Ik(o);for(l===0&&U(e,"unknown escape sequence");l-- >0;)e.position++,Pk(e.input.charCodeAt(e.position))<0&&U(e,"expected hexadecimal character");e.position++}}else Ne(a)?(i=!1,dc(e,t)):e.position===e.lineStart&&Kr(e)?U(e,"unexpected end of the document within a double quoted scalar"):a!==9&&a<32?U(e,"expected valid JSON character"):e.position++}U(e,"unexpected end of the stream within a double quoted scalar")}function Ok(e,t,n){const r=e.input.charCodeAt(e.position);let i=Ft.CLIP,a=-1,o=!1;if(r!==124&&r!==62)return!1;const l=r===124?q.LITERAL_BLOCK:q.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){const g=e.input.charCodeAt(e.position),v=jk(g);if(g===43||g===45)i!==Ft.CLIP&&U(e,"repeat of a chomping mode identifier"),i=g===43?Ft.KEEP:Ft.STRIP,e.position++;else if(v>=0)v===0&&U(e,"bad explicit indentation width of a block scalar; it cannot be less than one"),o&&U(e,"repeat of an indentation width identifier"),a=t+v-1,o=!0,e.position++;else break}let c=!1;for(;ti(e.input.charCodeAt(e.position));)c=!0,e.position++;c&&e.input.charCodeAt(e.position)===35&&ef(e),Ne(e.input.charCodeAt(e.position))?Oo(e):e.input.charCodeAt(e.position)!==0&&U(e,"a line break is expected");let u=o?a:-1,d=0;const m=e.position;let f=e.position;for(;e.input.charCodeAt(e.position)!==0;){const g=e.position;let v=0;for(;e.input.charCodeAt(g+v)===32;)v++;const w=e.input.charCodeAt(g+v);if(w===0){u>=0?v>u&&(f=g+v):v>0&&(f=g+v);break}if(Zu(e))break;if(!o&&u===-1&&Ne(w)&&(d=Math.max(d,v)),!o&&u===-1&&!Ne(w)&&(w===9&&v<t&&(e.position=g+v,U(e,"tab characters must not be used in indentation")),v>=t&&v<d&&(e.position=g+v,U(e,"bad indentation of a mapping entry"))),u===-1&&w!==0&&!Ne(w)&&v<t){e.lineIndent=v,e.position=g+v;break}!o&&w!==0&&!Ne(w)&&u===-1&&(u=v);const x=u===-1?t+1:u;if(w!==0&&!Ne(w)&&v<x){e.lineIndent=v,e.position=g+v;break}ef(e),f=e.position,Ne(e.input.charCodeAt(e.position))&&(Oo(e),f=e.position)}return r0(e,m,f),ei(e,m,f,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,l,i,u),!0}function Fk(e,t){const n=e.input.charCodeAt(e.position),r=t===qr;if(n===0||zt(n)||n===35||n===38||n===42||n===33||n===124||n===62||n===39||n===34||n===37||n===64||n===96||r&&tr(n))return!1;if(n===63||n===45){const i=e.input.charCodeAt(e.position+1);if(Zt(i)||r&&tr(i))return!1}return!0}function Bk(e,t,n,r){if(!Fk(e,n))return!1;const i=e.position;let a=e.position,o=e.input.charCodeAt(e.position);const l=n===qr;let c=!1;for(;o!==0&&!Zu(e);){if(o===58){const u=e.input.charCodeAt(e.position+1);if(Zt(u)||l&&tr(u))break}else if(o===35){if(zt(e.input.charCodeAt(e.position-1)))break}else{if(l&&tr(o))break;if(Ne(o)){const u=e.position,d=e.line,m=e.lineStart,f=e.lineIndent;if(Be(e,!1),e.lineIndent>=t){c=!0,o=e.input.charCodeAt(e.position);continue}e.position=u,e.line=d,e.lineStart=m,e.lineIndent=f;break}}ti(o)||(a=e.position+1),o=e.input.charCodeAt(++e.position)}return a===i?!1:(r0(e,i,a),ei(e,i,a,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,q.PLAIN,Ft.CLIP,-1,!c),!0)}function mi(e,t){const n=e.line;Be(e,!0),(e.line>n&&e.lineIndent<t||e.firstTabInLine!==-1&&e.lineIndent<t)&&U(e,"deficient indentation")}function Qk(e,t,n){const r=e.input.charCodeAt(e.position),i=r===123,a=e.position;let o=!0;if(r!==91&&r!==123)return!1;const l=i?125:93;for(i?t0(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,kt.FLOW):e0(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,kt.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){mi(e,t);let c=e.input.charCodeAt(e.position);if(c===l)return e.position++,Rr(e),!0;o?c===44&&U(e,"expected the node content, but found ','"):U(e,"missed comma between flow collection entries");let u=!1,d=!1;c===63&&zt(e.input.charCodeAt(e.position+1))&&(u=d=!0,e.position+=1,mi(e,t));const m=e.line,f=Dr(e),g=Yr(e,t,qr,!1,!0);mi(e,t),c=e.input.charCodeAt(e.position),(i||d||e.line===m)&&c===58?(u=!0,e.position++,mi(e,t),i||_m(e,f),g||qe(e),Yr(e,t,qr,!1,!0)||qe(e),mi(e,t),i||Rr(e)):i&&u?(g||qe(e),qe(e)):i?qe(e):u&&(_m(e,f),g||qe(e),qe(e),Rr(e)),c=e.input.charCodeAt(e.position),c===44?(o=!0,e.position++):o=!1}U(e,"unexpected end of the stream within a flow collection")}function tf(e,t,n){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!Zt(e.input.charCodeAt(e.position+1)))return!1;for(e0(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,kt.BLOCK);e.input.charCodeAt(e.position)===45&&Zt(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,U(e,"tab characters must not be used in indentation"));const r=e.line;e.position++;const i=Be(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&Zt(e.input.charCodeAt(e.position+1))&&U(e,"bad indentation of a sequence entry"),i&&e.lineIndent<=t?qe(e):Yr(e,t,Xg,!1,!0),Be(e,!0),e.lineIndent<t||e.position>=e.length)break;e.lineIndent>t&&U(e,"bad indentation of a sequence entry"),e.line===r&&e.input.charCodeAt(e.position)===45&&Zt(e.input.charCodeAt(e.position+1))&&U(e,"bad indentation of a sequence entry")}return Rr(e),!0}function nl(e,t,n,r){let i=!1,a=!1,o=!1,l=!1;if(e.firstTabInLine!==-1)return!1;let c=e.input.charCodeAt(e.position);for(;c!==0;){!i&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,U(e,"tab characters must not be used in indentation"));const u=e.input.charCodeAt(e.position+1),d=e.line;if((c===63||c===58)&&Zt(u))o||(t0(e,e.position,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,kt.BLOCK),o=!0),c===63?(i&&qe(e),a=!0,i=!0):(i||(qe(e),a=!0),i=!1),e.position+=1,l=!0;else{i&&(qe(e),i=!1);const m=Dr(e);if(!Yr(e,n,Gg,!1,!0))break;if(e.line===d){for(c=e.input.charCodeAt(e.position);ti(c);)c=e.input.charCodeAt(++e.position);if(c===58)c=e.input.charCodeAt(++e.position),Zt(c)||U(e,"a whitespace character is expected after the key-value separator within a block mapping"),o||(e.events.splice(m.eventsLength,0,{type:Me.MAPPING,start:m.position,anchorStart:r.anchorStart,anchorEnd:r.anchorEnd,tagStart:r.tagStart,tagEnd:r.tagEnd,style:kt.BLOCK}),o=!0),a=!0,i=!1,l=!1;else if(a)U(e,"expected ':' after a mapping key");else return r.anchorStart!==ne||r.tagStart!==ne?(Or(e,m),!1):!0}else if(a)U(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return r.anchorStart!==ne||r.tagStart!==ne?(Or(e,m),!1):!0}if(Yr(e,t,Do,!0,l)&&(l=!1),i||l&&(qe(e),l=!1),Be(e,!0),c=e.input.charCodeAt(e.position),(e.line===d||e.lineIndent>t)&&c!==0)U(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return a?(i&&qe(e),o&&Rr(e),!0):!1}function Yr(e,t,n,r,i,a=!0){var v,w;e.depth>=e.maxDepth&&U(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let o=1,l=!1,c=!1,u=null;const d=$m();let m=n===Do||n===Xg,f=m;const g=m;if(r&&Be(e,!0)&&(l=!0,e.lineIndent>t?o=1:e.lineIndent===t?o=0:o=-1),o===1)for(;;){const x=e.input.charCodeAt(e.position),y=Dr(e);if(l&&o!==1&&(x===33||x===38))break;if(l&&g&&(d.tagStart!==ne||d.anchorStart!==ne)&&(x===33||x===38)){const p=Dr(e),h=t+1;if(nl(e,e.position-e.lineStart,h,d)&&((v=e.events[p.eventsLength])==null?void 0:v.type)===Me.MAPPING)return e.depth--,!0;Or(e,p)}if(l&&(x===33&&d.tagStart!==ne||x===38&&d.anchorStart!==ne)||!Mk(e,d,n===qr)&&!Lk(e,d))break;u===null&&(u=y),Be(e,!0)?(l=!0,f=g,e.lineIndent>t?o=1:e.lineIndent===t?o=0:o=-1):f=!1}if(f&&(f=l||i),o===1||n===Do){const x=n===qr||n===Gg?t:t+1,y=e.position-e.lineStart;if(o===1)if(f&&(tf(e,y,d)||nl(e,y,x,d))||Qk(e,x,d))c=!0;else{const p=e.input.charCodeAt(e.position);if(u!==null&&a&&g&&!f&&p!==124&&p!==62){const h=Dr(e),k=u.position-u.lineStart;Or(e,u),nl(e,k,x,$m())&&((w=e.events[h.eventsLength])==null?void 0:w.type)===Me.MAPPING?c=!0:Or(e,h)}!c&&(m&&Ok(e,x,d)||Rk(e,x,d)||Dk(e,x,d)||Tk(e,d)||Bk(e,x,n,d))&&(c=!0)}else o===0&&(c=f&&tf(e,y,d))}return m=m&&!c,!c&&(d.anchorStart!==ne||d.tagStart!==ne||m)&&(ei(e,ne,ne,d.anchorStart,d.anchorEnd,d.tagStart,d.tagEnd,q.PLAIN),c=!0),e.depth--,c||d.anchorStart!==ne||d.tagStart!==ne}function Wk(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;const t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!zt(e.input.charCodeAt(e.position));)e.position++;const n=e.input.slice(t,e.position),r=[];for(n.length===0&&U(e,"directive name must not be less than one character in length");e.input.charCodeAt(e.position)!==0&&!Ne(e.input.charCodeAt(e.position));){for(;ti(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||Ne(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;const i=e.position;for(;e.input.charCodeAt(e.position)!==0&&!zt(e.input.charCodeAt(e.position));)e.position++;r.push(e.input.slice(i,e.position))}if(Ne(e.input.charCodeAt(e.position))&&Oo(e),n==="YAML"){e.directives.some(a=>a.kind==="yaml")&&U(e,"duplication of %YAML directive"),r.length!==1&&U(e,"YAML directive accepts exactly one argument");const i=/^([0-9]+)\.([0-9]+)$/.exec(r[0]);i===null&&U(e,"ill-formed argument of the YAML directive"),parseInt(i[1],10)!==1&&U(e,"unacceptable YAML version of the document"),e.directives.push({kind:"yaml",version:r[0]})}else if(n==="TAG"){r.length!==2&&U(e,"TAG directive accepts exactly two arguments");const[i,a]=r;_g.test(i)||U(e,"ill-formed tag handle (first argument) of the TAG directive"),Zg.call(e.tagHandlers,i)&&U(e,`there is a previously declared suffix for "${i}" tag handle`),Ck.test(a)||U(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagHandlers[i]=a,e.directives.push({kind:"tag",handle:i,prefix:a})}return!0}function Uk(e){e.directives=[],e.tagHandlers=Object.create(null);let t=!1;for(Be(e,!0);Wk(e);)t=!0,Be(e,!0);let n=!1,r=!1,i=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&Zt(e.input.charCodeAt(e.position+3))){n=!0;const l=e.line;e.position+=3,Be(e,!0),i=e.line>l}else t&&U(e,"directives end mark is expected");const a=e.events.length;if(!n&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&Kr(e)){e.position+=3,Be(e,!0);return}if(Ek(e,n,!1),Yr(e,e.lineIndent-1,Do,!1,i,i)||qe(e),Be(e,!0),e.position===e.lineStart&&Kr(e)&&(r=e.input.charCodeAt(e.position)===46,r)){const l=e.line;e.position+=3,Be(e,!0),e.line===l&&e.position<e.length&&U(e,"end of the stream or a document separator is expected")}const o=e.events[a];(o==null?void 0:o.type)===Me.DOCUMENT&&(o.explicitEnd=r),Rr(e),!r&&e.position<e.length&&!Zu(e)&&U(e,"end of the stream or a document separator is expected")}function Hk(e,t){const n=e.length,r={...Ju,...t,input:`${e}\0`,length:n,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]},i=e.indexOf("\0");for(i!==-1&&In.throwAt(e,i,"null byte is not allowed in input",r.filename);r.position<r.length&&(n0(r),Be(r,!0),!(r.position>=r.length));){const a=r.position;Uk(r),r.position===a&&U(r,"can not read a document")}return r.events}var Vk={...Ju,...Yu};function qk(e,t={}){const n={...Vk,...t},r=String(e),i=Object.keys(Ju),a=Object.keys(Yu);return wk(Hk(r,cc(n,i)),{...cc(n,a),source:r})}function Kk(e,t){const n=qk(e,t);if(n.length===0)throw new In("expected a document, but the input is empty");if(n.length===1)return n[0];throw new In("expected a single document in the stream, but found more")}var Hn=Symbol("INVALID");function Yk(e){const t=new Set([e.defaultScalarTag,e.defaultSequenceTag,e.defaultMappingTag].filter(a=>a!==void 0)),n=e.implicitScalarTags,r=e.tags.filter(a=>!(a.nodeKind==="scalar"&&a.implicit)&&!t.has(a)),i=e.tags.filter(a=>t.has(a));return[...n.map(a=>({tag:a,implicitTag:!0})),...r.map(a=>({tag:a,implicitTag:!1})),...i.map(a=>({tag:a,implicitTag:!0}))]}function Jk(e,t){for(let n=0,r=e.representTypes.length;n<r;n+=1){const{tag:i,implicitTag:a}=e.representTypes[n];if(i.identify(t)){let o;return i.matchByTagPrefix?o=i.representTagName(t):o=i.tagName,{tag:i,tagName:o,implicitTag:a}}}return null}function wi(e,t){if(!e.noRefs&&t!==null&&typeof t=="object"){const u=e.refs.get(t);if(u)return u.anchor===void 0&&(u.anchor=`ref_${e.refCounter++}`),{kind:"alias",anchor:u.anchor}}const n=Jk(e,t);if(!n){if(t===void 0||e.skipInvalid)return Hn;throw new In(`unacceptable kind of an object to dump ${Object.prototype.toString.call(t)}`)}const{tag:r,tagName:i,implicitTag:a}=n,o=a?i:Kg(i);if(r.nodeKind==="scalar")return{kind:"scalar",tag:o,tagged:!a,style:q.PLAIN,value:r.represent(t)};if(r.nodeKind==="sequence"){const u=r.represent(t),d={kind:"sequence",tag:o,tagged:!a,style:kt.BLOCK,items:[]};e.noRefs||e.refs.set(t,d);for(let m=0,f=u.length;m<f;m+=1){let g=wi(e,u[m]);g===Hn&&u[m]===void 0&&(g=wi(e,null)),g!==Hn&&d.items.push(g)}return d}const l=r.represent(t),c={kind:"mapping",tag:o,tagged:!a,style:kt.BLOCK,items:[]};e.noRefs||e.refs.set(t,c);for(const[u,d]of l){const m=wi(e,u);if(m===Hn)continue;const f=wi(e,d);f!==Hn&&c.items.push({key:m,value:f})}return c}function Zk(e,t,n={}){const r=wi({representTypes:Yk(t),noRefs:n.noRefs??!1,skipInvalid:n.skipInvalid??!1,refs:new Map,refCounter:0},e);return[{contents:r===Hn?null:r,directives:[]}]}var Gk=Symbol("visit:break"),i0=Symbol("visit:skip");function _a(e,t,n){const r=t(e,n);if(r===Gk)return!0;if(r===i0)return!1;const i=n.depth+1;switch(e.kind){case"sequence":for(const a of e.items)if(_a(a,t,{depth:i,parent:e,isKey:!1}))return!0;break;case"mapping":for(const{key:a,value:o}of e.items)if(_a(a,t,{depth:i,parent:e,isKey:!0})||_a(o,t,{depth:i,parent:e,isKey:!1}))return!0;break}return!1}function nf(e,t){for(const n of e)if(n.contents&&_a(n.contents,t,{depth:0,parent:null,isKey:!1}))return}function ms(e,t){return(e&1<<t)!==0}var rf={applyQuoteFlowKeysOption:Xk,doubleQuoteForInvisibles:_k,doubleQuoteWhitespaceOnly:$k,applyForceQuotesOption:eA,tryLongOrMultilineAsBlock:tA,quoteInvalidPlain:nA,fallbackToDoubleQuoted:rA};function a0(e){return e.presenterOptions.quoteStyle==="single"&&ms(e.allowedStylesMask,q.SINGLE_QUOTED)?q.SINGLE_QUOTED:q.DOUBLE_QUOTED}function Xk(e){e.presenterOptions.quoteFlowKeys&&(!e.isKey||!e.flowOnly||e.style!==q.PLAIN||(e.style=q.DOUBLE_QUOTED))}function _k(e){e.style===q.PLAIN&&/[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value)&&(e.style=q.DOUBLE_QUOTED)}function $k(e){e.style===q.PLAIN&&/^\s+$/.test(e.node.value)&&(e.style=q.DOUBLE_QUOTED)}function eA(e){e.presenterOptions.forceQuotes&&(e.isKey||e.style!==q.PLAIN||e.node.tag===e.presenterOptions.schema.defaultScalarTag.tagName&&(e.style=e.node.value.includes(`
`)?q.DOUBLE_QUOTED:a0(e)))}function tA(e){if(e.style!==q.PLAIN||e.isKey)return;const t=e.node.value,n=t.indexOf(`
`)!==-1;if(!ms(e.allowedStylesMask,q.LITERAL_BLOCK)){n&&(e.style=q.DOUBLE_QUOTED);return}const r=e.presenterOptions.lineWidth;if(r===-1){n&&(e.style=q.LITERAL_BLOCK);return}const i=Math.max(Math.min(r,40),r-e.shiftOfContent);let a=0,o=!1;for(;a<=t.length;){let l=t.length;const c=t.indexOf(`
`,a);c!==-1&&(l=c);const u=t.slice(a,l);if(u.length>i&&u[0]!==" "&&/ [^ \t]/.test(u)&&(o=!0),c===-1)break;a=c+1}o?e.style=q.FOLDED_BLOCK:n&&(e.style=q.LITERAL_BLOCK)}function nA(e){e.style===q.PLAIN&&!ms(e.allowedStylesMask,q.PLAIN)&&(e.style=a0(e))}function rA(e){ms(e.allowedStylesMask,e.style)||(e.style=q.DOUBLE_QUOTED)}function fi(e,t){return e|1<<t}var iA="[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]",aA="[\\n\\r]",oA="\\uFEFF",Gu="[ \\t]",o0=`(?:(?!(?:${aA}|${oA}))${iA})`,fs=`(?:(?!${Gu})${o0})`,s0="[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]",l0="[-?:,\\[\\]{}#&*!|>'\"%@`]",sA="[,\\[\\]{}]",mc=fs,fc=`(?:(?!${sA})${fs})`,lA=`(?:(?:(?!${l0})${fs})|[?:-](?=${mc}))`,cA=`(?:(?:(?!${l0})${fs})|[?:-](?=${fc}))`,c0=`(?:(?:(?![:#])${mc})|:(?=${mc}))#*`,u0=`(?:(?:(?![:#])${fc})|:(?=${fc}))#*`,d0=`(?:${Gu}*${c0})*`,m0=`(?:${Gu}*${u0})*`,f0=`${lA}#*${d0}`,p0=`${cA}#*${m0}`,uA=f0,dA=p0,mA=`\\n+${c0}${d0}`,fA=`\\n+${u0}${m0}`,pA=`${f0}(?:${mA})*`,hA=`${p0}(?:${fA})*`,gA=new RegExp(`^(?:${pA})$`,"u"),yA=new RegExp(`^(?:${hA})$`,"u"),vA=new RegExp(`^(?:${uA})$`,"u"),bA=new RegExp(`^(?:${dA})$`,"u"),wA=new RegExp(`^(?:${s0})*$`,"u"),xA=new RegExp(`^(?:${s0}|\\n)*$`,"u"),kA=new RegExp(`^(?:${o0}|\\n)*$`,"u"),AA=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/,Xu=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/m;function SA(e){const t=e.node.value;if(t!==""){if(!(e.isKey?e.flowOnly?bA:vA:e.flowOnly?yA:gA).test(t)||e.shiftOfFirstLine===0&&AA.test(t))return!1;if(e.shiftOfContent===0){const r=t.indexOf(`
`);if(r!==-1){const i=t.slice(r+1);if(Xu.test(i))return!1}}}const n=e.presenterOptions.schema.resolveImplicitScalarTag(t).tag.tagName;return!(!e.node.tagged&&n!==e.node.tag||!e.node.tagged&&t==="="&&n===e.presenterOptions.schema.defaultScalarTag.tagName)}function CA(e){const t=e.node.value;if(!(e.isKey?wA:xA).test(t)||/[ \t]\n|\n[ \t]/.test(t))return!1;if(!e.isKey&&e.shiftOfContent===0){const n=t.indexOf(`
`);if(n!==-1&&Xu.test(t.slice(n+1)))return!1}return!0}function EA(e){if(e.flowOnly||!kA.test(e.node.value))return!1;const t=e.shiftOfContent-e.shiftOfParent;return!(t<1||t>9&&/^\n* /.test(e.node.value)||e.shiftOfContent===0&&Xu.test(e.node.value))}function NA(e){let t=fi(0,q.DOUBLE_QUOTED);SA(e)&&(t=fi(t,q.PLAIN)),CA(e)&&(t=fi(t,q.SINGLE_QUOTED)),EA(e)&&(t=fi(fi(t,q.LITERAL_BLOCK),q.FOLDED_BLOCK)),e.allowedStylesMask=t}function jA(e){switch(e.style){case q.PLAIN:return PA(e);case q.SINGLE_QUOTED:return IA(e);case q.LITERAL_BLOCK:return zA(e);case q.FOLDED_BLOCK:return MA(e);case q.DOUBLE_QUOTED:return LA(e)}}function PA(e){return h0(e.node.value,e.shiftOfContent)}function IA(e){return`'${h0(e.node.value,e.shiftOfContent).replace(/'/g,"''")}'`}function zA(e){const t=e.node.value;return"|"+y0(t,e.shiftOfParent,e.shiftOfContent)+v0(g0(t,e.shiftOfContent))}function MA(e){const t=e.node.value,n=e.presenterOptions.lineWidth;let r=1/0;return n!==-1&&(r=Math.max(Math.min(n,40),n-e.shiftOfContent)),">"+y0(t,e.shiftOfParent,e.shiftOfContent)+v0(g0(RA(t,r),e.shiftOfContent))}function LA(e){return`"${FA(e.node.value)}"`}function h0(e,t){let n=e.indexOf(`
`);if(n===-1)return e;const r=" ".repeat(t);let i=e.slice(0,n);const a=/(\n+)([^\n]*)/g;a.lastIndex=n;let o;for(;o=a.exec(e);){const l=o[1].length,c=o[2];i+=`
`.repeat(l+1)+r+c}return i}function g0(e,t){const n=" ".repeat(t);let r=0,i="";const a=e.length;for(;r<a;){let o;const l=e.indexOf(`
`,r);l===-1?(o=e.slice(r),r=a):(o=e.slice(r,l+1),r=l+1),o.length&&o!==`
`&&(i+=n),i+=o}return i}function TA(e){return/^\n* /.test(e)}function y0(e,t,n){const r=TA(e)?String(n-t):"",i=e[e.length-1]===`
`;return`${r}${i&&(e[e.length-2]===`
`||e===`
`)?"+":i?"":"-"}
`}function v0(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function pc(e){return e===" "||e==="	"}function af(e,t){if(e===""||pc(e[0]))return e;const n=/ [^ \t]/g;let r,i=0,a,o=0,l=0,c="";for(;r=n.exec(e);)l=r.index,l-i>t&&(a=o>i?o:l,c+=`
${e.slice(i,a)}`,i=a+1),o=l;return c+=`
`,e.length-i>t&&o>i?c+=`${e.slice(i,o)}
${e.slice(o+1)}`:c+=e.slice(i),c.slice(1)}function RA(e,t){const n=/(\n+)([^\n]*)/g;let r=e.indexOf(`
`);r===-1&&(r=e.length),n.lastIndex=r;let i=af(e.slice(0,r),t),a=e[0]===`
`||pc(e[0]),o,l;for(;l=n.exec(e);){const c=l[1],u=l[2];o=u!==""&&pc(u[0]),i+=c+(!a&&!o&&u!==""?`
`:"")+af(u,t),a=o}return i}var DA=/["\\\x00-\x1F\x7F-\xA0\u2028\u2029\uD800-\uDFFF\uFEFF\uFFFE\uFFFF]/gu;function OA(e){switch(e){case"\0":return"\\0";case"\x07":return"\\a";case"\b":return"\\b";case"	":return"\\t";case`
`:return"\\n";case"\v":return"\\v";case"\f":return"\\f";case"\r":return"\\r";case"\x1B":return"\\e";case'"':return'\\"';case"\\":return"\\\\";case"":return"\\N";case" ":return"\\_";case"\u2028":return"\\L";case"\u2029":return"\\P"}const t=e.charCodeAt(0),n=t.toString(16).toUpperCase();return t<=255?`\\x${"0".repeat(2-n.length)}${n}`:`\\u${"0".repeat(4-n.length)}${n}`}function FA(e){return e.replace(DA,OA)}var Fo=10,_u={indent:2,seqNoIndent:!1,seqInlineFirst:!0,lineWidth:80,flowBracketPadding:!1,flowSkipCommaSpace:!1,flowSkipColonSpace:!1,quoteFlowKeys:!1,quoteStyle:"single",forceQuotes:!1,scalarStyleRules:Object.keys(rf).map(e=>Reflect.get(rf,e)),tagBeforeAnchor:!1};function BA(e){return e.tagged?e.tag:Kg(e.tag)}function QA(e){const t={..._u,...e};return t.flowSkipColonSpace&&(t.quoteFlowKeys=!0),{...t,defaultScalarTagName:t.schema.defaultScalarTag.tagName,openEnded:!1}}function hc(e,t){return`
${" ".repeat(e.indent*t)}`}function WA(e,t,n,r,i,a){return{node:t,parent:n,level:r,isKey:i,flowOnly:a,shiftOfParent:r===0?-1:e.indent*(r-1),shiftOfContent:e.indent*Math.max(1,r),shiftOfFirstLine:r===0?0:e.indent*r,presenterOptions:e,allowedStylesMask:0,style:t.style}}function UA(e,t,n){let r="";for(let a=0,o=n.items.length;a<o;a+=1){const l=Xt(e,t,n.items[a],n,{}).text;a>0&&(r+=`,${e.flowSkipCommaSpace?"":" "}`),r+=l}const i=e.flowBracketPadding&&n.items.length>0?" ":"";return`[${i}${r}${i}]`}function of(e,t,n,r){let i="";for(let a=0,o=n.items.length;a<o;a+=1){const l=Xt(e,t+1,n.items[a],n,{block:!0,compact:e.seqInlineFirst,isblockseq:!0}).text;(!r||i!=="")&&(i+=hc(e,t)),l===""||Fo===l.charCodeAt(0)?i+="-":i+="- ",i+=l}return i}function HA(e,t,n){let r="";for(const{key:a,value:o}of n.items){let l="";r!==""&&(l+=`,${e.flowSkipCommaSpace?"":" "}`);const c=Xt(e,t,a,n,{iskey:!0}),u=c.text,d=Xt(e,t,o,n,{}).text,m=e.flowSkipColonSpace||d===""?"":" ",f=a.kind==="scalar"&&c.noBody&&(a.tagged||a.anchor!==void 0),g=a.kind==="alias"||f?" ":"";l+=`${u}${g}:${m}${d}`,r+=l}const i=e.flowBracketPadding&&r!==""?" ":"";return`{${i}${r}${i}}`}function VA(e,t,n,r){let i="";for(let a=0,o=n.items.length;a<o;a+=1){let l="";(!r||i!=="")&&(l+=hc(e,t));const{key:c,value:u}=n.items[a],d=(c.kind==="mapping"||c.kind==="sequence")&&c.style===kt.BLOCK&&c.items.length!==0||c.kind==="scalar"&&(c.style===q.LITERAL_BLOCK||c.style===q.FOLDED_BLOCK),m=d?Xt(e,t+1,c,n,{block:!0,compact:!0,isblockseq:!gc(e,c,t+1)}):Xt(e,t+1,c,n,{block:!0,compact:!0,iskey:!0}),f=m.text,g=c.kind==="scalar"&&c.value.indexOf(`
`)!==-1,v=f.length>1024&&/^[\s\S]{1025}/u.test(f),w=d||g||v;w&&(f&&Fo===f.charCodeAt(0)?l+="?":l+="? "),l+=f,w&&(l+=hc(e,t));const x=Xt(e,t+1,u,n,{block:!0,compact:w,isblockseq:w&&!gc(e,u,t+1)}).text,y=c.kind==="scalar"&&m.noBody&&(c.tagged||c.anchor!==void 0),p=!w&&(c.kind==="alias"||y)?" ":"";x===""||Fo===x.charCodeAt(0)?l+=`${p}:`:l+=`${p}: `,l+=x,i+=l}return i}function gc(e,t,n){return t.kind==="alias"?!0:t.tagged||t.anchor!==void 0||e.indent<2&&n>0}function Xt(e,t,n,r,i){if(n.kind==="alias")return e.openEnded=!1,{text:`*${n.anchor}`,noBody:!1};const{block:a=!1,iskey:o=!1,isblockseq:l=!1}=i;let c=i.compact??!1;const u=n.anchor!==void 0;gc(e,n,t)&&(c=!1);let d,m=n.tagged;const f=a&&(n.kind==="mapping"||n.kind==="sequence")&&n.style===kt.BLOCK&&n.items.length!==0;if(n.kind==="mapping")f?d=VA(e,t,n,c):d=HA(e,t,n);else if(n.kind==="sequence")f?e.seqNoIndent&&!l&&t>0?d=of(e,t-1,n,c):d=of(e,t,n,c):d=UA(e,t,n);else{const w=WA(e,n,r,t,o,!a);NA(w);for(const x of e.scalarStyleRules)x(w);d=jA(w),e.openEnded=(w.style===q.LITERAL_BLOCK||w.style===q.FOLDED_BLOCK)&&(n.value===`
`||n.value.endsWith(`

`)),m=n.tagged||d===""&&w.flowOnly&&(r==null?void 0:r.kind)==="sequence"&&!u||w.style!==q.PLAIN&&n.tag!==e.defaultScalarTagName}(n.kind==="mapping"||n.kind==="sequence")&&!f&&(e.openEnded=!1),f&&c&&t>0&&e.indent>2&&(d=`${" ".repeat(e.indent-2)}${d}`);const g=d==="";let v=d;if(m||u){const w=[],x=m?BA(n):null,y=u?`&${n.anchor}`:null;e.tagBeforeAnchor?(x!==null&&w.push(x),y!==null&&w.push(y)):(y!==null&&w.push(y),x!==null&&w.push(x));const p=d===""||d.charCodeAt(0)===Fo?"":" ";v=`${w.join(" ")}${p}${d}`}return{text:v,noBody:g}}function qA(e){return(e.kind==="sequence"||e.kind==="mapping")&&e.style===kt.BLOCK&&e.items.length!==0&&!e.tagged&&e.anchor===void 0}function KA(e){let t="";for(const n of e.directives){if(n.kind==="yaml"){t+=`%YAML ${n.version}
`;continue}const{handle:r,prefix:i}=n;t+=`%TAG ${r} ${i}
`}return t}function YA(e,t){const n=QA(t);let r="",i=!1;for(let a=0;a<e.length;a+=1){const o=e[a];n.openEnded=!1;const l=KA(o),c=l!=="",u=o.explicitStart||c||a>0&&!i;if(r+=l,o.contents===null)u&&(r+=`---
`);else if(u){const d=Xt(n,0,o.contents,null,{block:!0,compact:!0}).text,m=d===""?"":c||qA(o.contents)?`
`:" ";r+=`---${m}${d}
`}else r+=Xt(n,0,o.contents,null,{block:!0,compact:!0}).text+`
`;i=o.explicitEnd||n.openEnded,i&&(r+=`...
`)}return r}var JA={..._u,schema:rk,skipInvalid:!1,noRefs:!1,flowLevel:-1,sortKeys:!1,transform:()=>{}};function ZA(e,t){const n=String(e),r=String(t);return n<r?-1:n>r?1:0}function GA(e,t={}){const n={...JA,...t},r=Zk(e,n.schema,{noRefs:n.noRefs,skipInvalid:n.skipInvalid});if(n.flowLevel>=0&&nf(r,(i,a)=>{if(!(a.depth<n.flowLevel))return(i.kind==="sequence"||i.kind==="mapping")&&(i.style=kt.FLOW),i0}),n.sortKeys){const i=n.sortKeys===!0?ZA:n.sortKeys;nf(r,a=>{a.kind==="mapping"&&a.items.sort((o,l)=>i(o.key.kind==="scalar"?o.key.value:"",l.key.kind==="scalar"?l.key.value:""))})}return n.transform(r),YA(r,{...cc(n,Object.keys(_u)),schema:n.schema})}const XA="custom:the-monitor-dashboard",rl='[[[ const hour = new Date().getHours(); let greeting = ""; if (hour >= 22 || hour < 5) greeting = "Night"; else if (hour >= 18) greeting = "Evening"; else if (hour >= 12) greeting = "Afternoon"; else greeting = "Morning"; const name = user.name === "Rey" ? "Rey" : "Christina"; return `${greeting}, ${name}!`; ]]]',_A=[{id:"mobile",url_path:"mobile",title:"Mobile",mode:"storage"},{id:"lovelace",url_path:null,title:"Übersicht",mode:"storage"},{id:"energy",url_path:"energie",title:"Energie",mode:"storage"}],$A={mobile:{views:[{title:"Overview",sections:[{title:"Bereich 1",cards:[{type:"vertical-stack",cards:[{type:"horizontal-stack",cards:[{type:"conditional",card:{type:"custom:button-card",entity:"person.christina",name:rl}},{type:"conditional",card:{type:"custom:button-card",entity:"person.rey",name:rl}},{type:"custom:button-card",entity:"person.christina",name:rl},{type:"custom:strip-card",cards:Array.from({length:5},(e,t)=>({type:"tile",entity:`light.spot_${t+1}`,name:`Spot ${t+1}`}))}]},...Array.from({length:18},(e,t)=>({type:"tile",entity:`light.mock_${t+1}`,name:`Licht ${t+1}`}))]}]}]}]},__default__:{views:[{title:"Wohnen",sections:[{title:"Licht",cards:[{type:"tile",entity:"light.wohnzimmer",name:"Wohnzimmer"},{type:"tile",entity:"light.kueche",name:"Küche"}]},{title:"Klima",cards:[{type:"thermostat",entity:"climate.wohnzimmer"},{type:"vertical-stack",cards:[{type:"weather-forecast",entity:"weather.zuhause",forecast_type:"daily"},{type:"entities",title:"Status",entities:["lock.haustuer","alarm_control_panel.haus"]}]}]}]}]},energie:{views:[{title:"Energie",cards:[{type:"statistic",entity:"sensor.grandland_charge_power",name:"Ladeleistung",period:"day"},{type:"gauge",entity:"sensor.grandland_battery",name:"Akku",min:0,max:100,unit:"%"}]}]}};function $u(e){return!e||typeof e!="object"?!1:!Array.isArray(e)&&e.type===XA?!0:(Array.isArray(e)?e:Object.values(e)).some($u)}function ps(e){if(!e||typeof e!="object"||Array.isArray(e))return null;let t;try{t=JSON.parse(JSON.stringify(e))}catch{return null}return typeof t.type!="string"||!t.type.trim()||(t.type=t.type.trim(),$u(t))?null:t}function eS(e){if(typeof e!="string")return"";const t=e.replace(/\s+/g," ").trim();return!t||t.includes("[[[")||t.includes("{{")||t.includes("<%")?"":t.length>72?`${t.slice(0,69)}…`:t}function Jr(e){if(!(e!=null&&e.type))return"Karte";const t=String(e.type).replace(/^custom:/,""),n=[e.name,e.title,e.heading,e.entity,e.entity_id].map(eS).find(Boolean);return n?`${t} · ${n}`:Array.isArray(e.entities)&&e.entities.length?`${t} · ${e.entities.length}`:Array.isArray(e.cards)&&e.cards.length?`${t} · ${e.cards.length}`:t}function tS(e,t){const n=e!=null&&e.card?Jr(e.card):"",r=Jr(t),i=(e==null?void 0:e.label)&&e.label!==n&&e.label!=="HA-Karte";return{card:t,label:i?e.label:r}}function sf(e){return e?GA(e,{lineWidth:88,noRefs:!0}).trim():""}function nS(e){const t=String(e||"").trim();if(!t)return null;let n;try{n=Kk(t)}catch(i){const a=i!=null&&i.message?i.message.split(`
`)[0]:"Syntaxfehler";throw new Error(`Karten-YAML ungültig: ${a}`)}if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Die Konfiguration muss eine einzelne Karte sein.");const r=ps(n);if(!r)throw new Error("Die Karte braucht ein type und darf The Monitor nicht enthalten.");return r}function Wt(){return typeof window<"u"&&typeof window.loadCardHelpers=="function"}function lf(e){var n,r;const t=(n=e==null?void 0:e.getRootNode)==null?void 0:n.call(e);return t instanceof ShadowRoot&&((r=t.host)==null?void 0:r.localName)==="the-monitor-dashboard"?t.host:null}const Bo="custom:";function $a(e,t=new Set){return!e||typeof e!="object"?t:Array.isArray(e)?(e.forEach(n=>$a(n,t)),t):(typeof e.type=="string"&&e.type.startsWith(Bo)&&t.add(e.type.slice(Bo.length)),Array.isArray(e.cards)&&$a(e.cards,t),e.card&&$a(e.card,t),t)}function rS(e){return new Promise(t=>{window.setTimeout(t,e)})}async function iS(e){const t=[...e].filter(n=>n.includes("-")&&!customElements.get(n));t.length&&await Promise.race([Promise.all(t.map(n=>customElements.whenDefined(n))),rS(2e3)])}function aS(e){return{type:"markdown",content:`**Nicht installiert:** \`${e}\`

Diese Lovelace-Karte ist in den Ressourcen nicht geladen.`}}function eo(e){if(!e||typeof e!="object")return e;if(Array.isArray(e))return e.map(eo);if(typeof e.type=="string"&&e.type.startsWith(Bo)){const n=e.type.slice(Bo.length);if(n.includes("-")&&!customElements.get(n))return aS(n)}const t={...e};return Array.isArray(e.cards)&&(t.cards=e.cards.map(eo)),e.card&&typeof e.card=="object"&&(t.card=eo(e.card)),t}function yc(e,t){return typeof e=="string"?e.replace(/\[\[([^\]]+)\]\]/g,(n,r)=>{const i=t==null?void 0:t[r.trim()];return i==null?n:String(i)}):Array.isArray(e)?e.map(n=>yc(n,t)):e&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([n,r])=>[n,yc(r,t)])):e}function vc(e,t){const n={...e};return Object.entries(t||{}).forEach(([r,i])=>{i&&typeof i=="object"&&!Array.isArray(i)&&n[r]&&typeof n[r]=="object"&&!Array.isArray(n[r])?n[r]=vc(n[r],i):n[r]=i}),n}function b0(e,t,n){const r=Array.isArray(e.template)?e.template:[e.template];let i={},a=!1;if(r.forEach(c=>{const u=`b:${c}`;if(!c||n.has(u)||!t[c])return;n.add(u),a=!0;const d=b0({...t[c],type:"custom:button-card"},t,n),{type:m,template:f,...g}=d;i=vc(i,g)}),!a)return e;const{template:o,...l}=e;return vc(i,l)}function xi(e,t,n=new Set){var a,o;if(!e||typeof e!="object")return e;if(Array.isArray(e))return e.map(l=>xi(l,t,n));let r=e;if(r.type==="custom:streamline-card"&&r.template&&((a=t.streamline)!=null&&a[r.template])){const l=`s:${r.template}`;if(!n.has(l)){n.add(l);const c=t.streamline[r.template],u=(o=c==null?void 0:c.card)!=null&&o.type?c.card:c!=null&&c.type?c:null;if(u){const d=c.default&&!Array.isArray(c.default)?c.default:{};r=yc(structuredClone(u),{...d,...r.variables||{}})}}}r.type==="custom:button-card"&&r.template&&t.button&&(r=b0(r,t.button,n));const i={...r};return Array.isArray(r.cards)&&(i.cards=r.cards.map(l=>xi(l,t,n))),r.card&&typeof r.card=="object"&&(i.card=xi(r.card,t,n)),r.custom_fields&&typeof r.custom_fields=="object"&&(i.custom_fields=Object.fromEntries(Object.entries(r.custom_fields).map(([l,c])=>[l,xi(c,t,n)]))),i}let Ma=null;async function oS(e){var t;return(t=e==null?void 0:e.connection)!=null&&t.sendMessagePromise?(Ma||(Ma=(async()=>{const n=await e.connection.sendMessagePromise({type:"lovelace/dashboards/list"}),r=[null,...Array.isArray(n)?n.map(o=>o.url_path):[]],i={},a={};for(const o of r)try{const l=await e.connection.sendMessagePromise({type:"lovelace/config",url_path:o,force:!1});Object.assign(i,(l==null?void 0:l.button_card_templates)||{}),Object.assign(a,(l==null?void 0:l.streamline_templates)||{})}catch{}return{button:i,streamline:a}})().catch(n=>{throw Ma=null,n})),Ma):{button:{},streamline:{}}}function sS(e){return JSON.stringify(e||{}).includes('"template"')}async function lS(e,t){const n=ps(e);if(!n)throw new Error("Ungültige Karten-Konfiguration");Wt()&&await window.loadCardHelpers();let r=n;if(sS(r))try{r=xi(r,await oS(t))}catch(i){console.warn("The Monitor: card templates were not expanded",i)}return await iS($a(r)),eo(r)}async function w0(e,t,n,{preview:r=!1}={}){const i=await lS(t,n);if(customElements.get("hui-card")){const l=document.createElement("hui-card");return e.appendChild(l),n&&(l.hass=n),l.preview=r,l.config=i,l}if(!Wt())throw new Error("Home Assistant stellt hier keine Karten bereit");const o=await(await window.loadCardHelpers()).createCardElement(i);if(!o)throw new Error("Karte konnte nicht erzeugt werden");return e.appendChild(o),n&&(o.hass=n),o}function cS(e){return e??"__default__"}async function uS(e){var i;if(ar(e))return _A.map(a=>({...a}));if(!((i=e==null?void 0:e.connection)!=null&&i.sendMessagePromise))throw new Error("Keine Home-Assistant-Verbindung");const t=await e.connection.sendMessagePromise({type:"lovelace/dashboards/list"}),n=Array.isArray(t)?[...t]:[];return n.some(a=>a.url_path==null||a.url_path==="lovelace")||n.unshift({id:"lovelace",url_path:null,title:"Übersicht",mode:"storage"}),n.sort((a,o)=>{const l=c=>`${c.title||""} ${c.url_path||""}`.toLowerCase().includes("mobile")?0:c.url_path==null||c.url_path==="lovelace"?2:1;return l(a)-l(o)}),n}async function dS(e,t){var n;if(ar(e))return structuredClone($A[cS(t)]||{views:[]});if(!((n=e==null?void 0:e.connection)!=null&&n.sendMessagePromise))throw new Error("Keine Home-Assistant-Verbindung");return e.connection.sendMessagePromise({type:"lovelace/config",url_path:t??null,force:!1})}const mS=new Set(["vertical-stack","horizontal-stack","grid","stack-in-card","layout-card","swipe-card","strip-card"]);function fS(e){const t=String(e||"").replace(/^custom:/,"");return mS.has(t)}function pS(e){return!!(e&&typeof e=="object"&&typeof e.type=="string"&&e.type.trim())}function hS(e){const t=[];return Array.isArray(e==null?void 0:e.cards)&&t.push(...e.cards),e!=null&&e.card&&typeof e.card=="object"&&t.push(e.card),Array.isArray(e==null?void 0:e.elements)&&e.elements.forEach(n=>{n!=null&&n.type&&t.push(n),n!=null&&n.card&&t.push(n.card)}),e!=null&&e.custom_fields&&typeof e.custom_fields=="object"&&Object.values(e.custom_fields).forEach(n=>{n&&typeof n=="object"&&n.type&&t.push(n)}),t}function gS(e){return((e==null?void 0:e.views)||[]).map((t,n)=>({index:n,title:t.title||t.path||`Ansicht ${n+1}`}))}function yS(e,t="Dashboard",n=null){const r=[];let i=0;const a=(o,l,c)=>{(o||[]).forEach((u,d)=>{if(!pS(u)||$u(u))return;const m=hS(u);fS(u.type)&&m.length>0||(i+=1,r.push({id:`${l}:${d}:${i}:${u.type}`,label:Jr(u),path:l,depth:c,config:u})),m.length&&a(m,l,c+1)})};return((e==null?void 0:e.views)||[]).forEach((o,l)=>{if(n!=null&&l!==n)return;const c=o.title||o.path||`Ansicht ${l+1}`,u=n!=null?c:`${t} · ${c}`;Array.isArray(o.cards)&&a(o.cards,u,0),(o.sections||[]).forEach((d,m)=>{const f=d.title||`Bereich ${m+1}`,g=n!=null?f:`${u} · ${f}`;a(d.cards,g,0),Array.isArray(d.sections)&&d.sections.forEach((v,w)=>{const x=v.title||`Bereich ${m+1}.${w+1}`;a(v.cards,n!=null?x:`${g} · ${x}`,0)})})}),r}function vS(e,t){var n;return!!((n=e==null?void 0:e.strategy)!=null&&n.type)&&t.length===0}const ed=[6,24,48,168];function hs(e,t){if(t==="binary_sensor")return e==="on"||e==="open"||e==="detected"?1:e==="off"||e==="closed"||e==="clear"?0:null;const n=Number(e);return Number.isFinite(n)?n:null}function x0(e,t){const n=It(e,t);return n.state==="unavailable"||n.state==="unknown"?!1:hs(n.state,n.domain)!=null}function bS(e){if(e.lu!=null)return e.lu*1e3;if(e.lc!=null)return e.lc*1e3;const t=e.last_changed||e.last_updated;return t?new Date(t).getTime():NaN}function k0(e,t){const n=ye(t),r=[];return(e||[]).forEach(i=>{const a=i.s??i.state,o=hs(a,n);if(o==null)return;const l=bS(i);Number.isFinite(l)&&r.push({t:l,v:o})}),r.sort((i,a)=>i.t-a.t),r}function A0(e,t){return e?Array.isArray(e)?e[0]||[]:e[t]||[]:[]}function cf(e,t,n,r=24){if(e.length>=2)return e;const i=It(t,n),a=ye(n),o=hs(i.state,a);if(o==null)return e;const l=Date.now(),c=r*60*60*1e3;if(e.length===1){const u=e[0];return[{t:Math.min(u.t,l-c),v:u.v},{t:l,v:o}]}return[{t:l-c,v:o},{t:l,v:o}]}function wS(e,t,n){const r=It(e,t),i=ye(t),a=hs(r.state,i)??20,o=[],l=Date.now(),c=n*60*60*1e3,u=36;let d=a;for(let m=0;m<=u;m+=1){const f=l-c+c/u*m;i==="binary_sensor"?d=Math.random()>.85?d===1?0:1:d:d+=(Math.random()-.5)*(Math.abs(a)*.08+.5),o.push({t:f,v:d})}return o}async function xS(e,t,n,r){const i=await e.connection.sendMessagePromise({type:"history/history_during_period",start_time:n.toISOString(),end_time:r.toISOString(),entity_ids:[t],include_start_time_state:!0,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});return k0(A0(i,t),t)}async function kS(e,t,n,r){const i=bg(e),a=oa(e);if(!i||!a)return[];const o=new URLSearchParams({filter_entity_id:t,end_time:r.toISOString(),minimal_response:"true"}),l=await fetch(`${a}/api/history/period/${encodeURIComponent(n.toISOString())}?${o}`,{headers:{Authorization:`Bearer ${i}`}});if(!l.ok)return[];const c=await l.json();return k0(A0(c,t),t)}async function S0(e,t,{hours:n=24}={}){var o;if(!t||!e)return[];const r=ed.includes(n)?n:24;if(ar(e))return wS(e,t,r);const i=new Date,a=new Date(i.getTime()-r*60*60*1e3);try{let l=[];return(o=e.connection)!=null&&o.sendMessagePromise?l=await xS(e,t,a,i):l=await kS(e,t,a,i),cf(l,e,t,r)}catch(l){return console.warn("The Monitor: Sensor-Verlauf konnte nicht geladen werden",l),cf([],e,t,r)}}function AS(e){const t=Number(e);return ed.includes(t)?t:24}const Xe=12,vt=4,ie={presence:6,windows:8,popupEntities:12,coverPopupEntities:6,sceneEntities:4,cameraEntities:3,sensorEntities:4,contactStatusEntities:8,widgetsPerPage:24,pages:6},gs={weather:{label:"Wetter",icon:"mdi:weather-partly-cloudy",domains:["weather"]},media:{label:"Medien",icon:"mdi:play-circle",domains:["media_player"]},camera:{label:"Kamera",icon:"mdi:camera",domains:["camera"]},shopping:{label:"Einkaufsliste",icon:"mdi:cart",domains:["todo"]},quickAction:{label:"Entität",icon:"mdi:flash",domains:["light","switch","fan","input_boolean","cover","lock"]},alarm:{label:"Alarmanlage",icon:"mdi:shield-home",domains:["alarm_control_panel"]},cover:{label:"Rolladen",icon:"mdi:window-shutter",domains:["cover"]},coverPopup:{label:"Rolladen-Gruppe",icon:"mdi:window-shutter-open",domains:["cover"]},popup:{label:"Entitäten",icon:"mdi:layers",domains:["light","switch","fan","input_boolean","cover","lock","climate"]},scene:{label:"Szene",icon:"mdi:palette",domains:["scene","script"]},sensor:{label:"Sensor",icon:"mdi:gauge",domains:["sensor","binary_sensor"]},sensorStatus:{label:"Sensor Status",icon:"mdi:door-open",domains:["binary_sensor","cover"]},sankey:{label:"Energiefluss",icon:"mdi:chart-sankey",domains:[]},energyTile:{label:"Energie-Kachel",icon:"mdi:lightning-bolt",domains:[]},ev:{label:"E-Auto",icon:"mdi:car-electric",domains:[]},haCard:{label:"HA-Karte",icon:"mdi:card-bulleted",domains:[]}},bc={S:{w:2,h:1,label:"S"},M:{w:3,h:2,label:"M"},L:{w:4,h:2,label:"L"},XL:{w:6,h:2,label:"XL"},tall:{w:4,h:3,label:"Hoch"},wide:{w:6,h:1,label:"Breit"},full:{w:Xe,h:vt,label:"Voll"}},SS={weather:"XL",media:"wide",camera:"L",shopping:"full",quickAction:"M",alarm:"M",cover:"M",coverPopup:"XL",popup:"M",scene:"S",sensor:"M",sensorStatus:"M",sankey:"tall",energyTile:"M",ev:"L",haCard:"XL"};let uf=0;function C0(){return uf+=1,`w-${Date.now().toString(36)}-${uf}`}function Ut(e,t={}){const n=SS[e]||"M",r=bc[n]||bc.M;return{id:C0(),type:e,x:0,y:0,w:r.w,h:r.h,entity_id:"",entity_ids:[],label:"",icon:"",mode:e==="quickAction"?"toggle":void 0,...e==="energyTile"?{tileKind:"inputs-outputs"}:{},...e==="haCard"?{card:null}:{},...t}}function pn(e,t=Xe,n=vt){const r=Math.min(t,Math.max(1,e.w)),i=Math.min(n,Math.max(1,e.h)),a=Math.min(t-r,Math.max(0,e.x)),o=Math.min(n-i,Math.max(0,e.y));return{...e,x:a,y:o,w:r,h:i}}function CS(e,t){return e.x<t.x+t.w&&e.x+e.w>t.x&&e.y<t.y+t.h&&e.y+e.h>t.y}function Er(e,t,n=null){return e.filter(r=>r.id!==n&&CS(r,t))}function ES(e,t,n){return e.some(r=>t>=r.x&&t<r.x+r.w&&n>=r.y&&n<r.y+r.h)}function NS(e,t,n=Xe,r=vt){for(let i=0;i<=r-t.h;i+=1)for(let a=0;a<=n-t.w;a+=1){const o={x:a,y:i,w:t.w,h:t.h};if(Er(e,o).length===0)return{x:a,y:i}}return{x:0,y:0}}function td(e){var t;return e.label?e.label:((t=gs[e.type])==null?void 0:t.label)||e.type}function jS(e){var t;return e.type==="popup"||e.type==="coverPopup"?e.entity_ids||[]:e.type==="camera"?E0(e):e.type==="sensor"||e.type==="scene"?(t=e.entity_ids)!=null&&t.length?e.entity_ids:e.entity_id?[e.entity_id]:[]:e.entity_id?[e.entity_id]:[]}function PS(e){const t=e.type==="popup"?e.entity_ids||[]:jS(e),n=new Set(e.disabled_entity_ids||[]);return t.filter(r=>!n.has(r))}function E0(e){const t=((e==null?void 0:e.entity_ids)||[]).filter(Boolean).slice(0,ie.cameraEntities);return t.length?t:e!=null&&e.entity_id?[e.entity_id]:[]}function IS(e,t){if(!e)return`K${t+1}`;const n=e.trim().split(/\s+/)[0];return n.length<=8?n:n.slice(0,7)}function N0(e="Seite",t=[]){return{id:`page-${Date.now().toString(36)}`,name:e,widgets:t.map(n=>pn({...n}))}}function zS(){return{pages:[N0("Home",[])]}}function la(e){var t,n,r,i,a,o;return{weather:((t=e.weather)==null?void 0:t.entity_id)||"",media:((n=e.mediaPlayer)==null?void 0:n.entity_id)||"",camera:((r=e.camera)==null?void 0:r.entity_id)||"",cameras:Array.isArray(e.cameras)?e.cameras.filter(Boolean).slice(0,ie.cameraEntities):(i=e.camera)!=null&&i.entity_id?[e.camera.entity_id]:[],shopping:((a=e.shoppingList)==null?void 0:a.entity_id)||"",alarm:((o=e.alarm)==null?void 0:o.entity_id)||"",quickActions:(e.quickActions||[]).map((l,c)=>{var u;return{entity_id:(l==null?void 0:l.entity_id)||"",entity_ids:(l==null?void 0:l.entity_ids)||(l!=null&&l.entity_id&&c>=2?[l.entity_id]:[]),label:(l==null?void 0:l.label)||"",icon:(l==null?void 0:l.icon)||"",mode:c===1?"brightness":"toggle",isPopup:!!((u=l==null?void 0:l.entity_ids)!=null&&u.length)||c>=2}}),scenes:(e.scenes||[]).map(l=>({entity_id:(l==null?void 0:l.entity_id)||"",label:(l==null?void 0:l.label)||"",icon:(l==null?void 0:l.icon)||""}))}}function MS(e,t){let n=0,r=0;const i=t.quickActions.filter(a=>!a.isPopup);return e.map(a=>{var l,c;const o={...a};if(a.type==="weather"&&t.weather&&(o.entity_id=t.weather),a.type==="media"&&t.media&&(o.entity_id=t.media),a.type==="camera"&&t.camera&&(o.entity_id=t.camera,!((l=o.entity_ids)!=null&&l.length)&&((c=t.cameras)!=null&&c.length)&&(o.entity_ids=[...t.cameras])),a.type==="shopping"&&t.shopping&&(o.entity_id=t.shopping),a.type==="alarm"&&t.alarm&&(o.entity_id=t.alarm),a.type==="quickAction"){const u=i[n];n+=1,u&&(o.entity_id=u.entity_id||"",o.label=u.label||o.label,o.icon=u.icon||o.icon,o.mode=u.mode||o.mode)}if(a.type==="popup"){const u=t.quickActions.filter(f=>f.isPopup||f.entity_ids&&f.entity_ids.length),d=e.slice(0,e.indexOf(a)).filter(f=>f.type==="popup").length,m=u[d];m&&(o.entity_ids=[...m.entity_ids||[]],o.label=m.label||o.label,o.icon=m.icon||o.icon)}if(a.type==="scene"){const u=t.scenes[r];r+=1,u&&(o.entity_id=u.entity_id||"",o.label=u.label||o.label,o.icon=u.icon||o.icon)}return o})}function LS(e){var t;return(t=e==null?void 0:e.pages)==null?void 0:t.some(n=>{var r;return(r=n.widgets)==null?void 0:r.some(i=>{var a;return i.entity_id||((a=i.entity_ids)==null?void 0:a.length)})})}function TS(e,t){let n=0,r=0;const i=t.quickActions.filter(a=>!a.isPopup);return e.map(a=>{var l,c,u,d;const o={...a};if(a.type==="weather"&&!a.entity_id&&t.weather&&(o.entity_id=t.weather),a.type==="media"&&!a.entity_id&&t.media&&(o.entity_id=t.media),a.type==="camera"&&!a.entity_id&&t.camera&&(o.entity_id=t.camera,!((l=a.entity_ids)!=null&&l.length)&&((c=t.cameras)!=null&&c.length)&&(o.entity_ids=[...t.cameras])),a.type==="shopping"&&!a.entity_id&&t.shopping&&(o.entity_id=t.shopping),a.type==="alarm"&&!a.entity_id&&t.alarm&&(o.entity_id=t.alarm),a.type==="quickAction"&&!a.entity_id){const m=i[n];n+=1,m!=null&&m.entity_id&&(o.entity_id=m.entity_id,o.label=m.label||o.label,o.icon=m.icon||o.icon,o.mode=m.mode||o.mode)}else a.type==="quickAction"&&(n+=1);if(a.type==="popup"&&!((u=a.entity_ids)!=null&&u.length)){const m=t.quickActions.filter(v=>v.isPopup||v.entity_ids&&v.entity_ids.length),f=e.slice(0,e.indexOf(a)).filter(v=>v.type==="popup").length,g=m[f];(d=g==null?void 0:g.entity_ids)!=null&&d.length&&(o.entity_ids=[...g.entity_ids],o.label=g.label||o.label,o.icon=g.icon||o.icon)}if(a.type==="scene"&&!a.entity_id){const m=t.scenes[r];r+=1,m!=null&&m.entity_id&&(o.entity_id=m.entity_id,o.label=m.label||o.label,o.icon=m.icon||o.icon)}else a.type==="scene"&&(r+=1);return o})}function nd(e){const t={weather:"",media:"",camera:"",shopping:"",alarm:"",quickActions:[],scenes:[]};return e.pages.forEach(n=>{n.widgets.forEach(r=>{r.type==="weather"&&r.entity_id&&(t.weather=r.entity_id),r.type==="media"&&r.entity_id&&(t.media=r.entity_id),r.type==="camera"&&r.entity_id&&(t.camera=r.entity_id),r.type==="shopping"&&r.entity_id&&(t.shopping=r.entity_id),r.type==="alarm"&&r.entity_id&&(t.alarm=r.entity_id),r.type==="quickAction"&&t.quickActions.push({entity_id:r.entity_id||"",label:r.label||"",icon:r.icon||"",mode:r.mode}),r.type==="popup"&&t.quickActions.push({entity_ids:r.entity_ids||[],label:r.label||"",icon:r.icon||"",isPopup:!0}),r.type==="scene"&&t.scenes.push({entity_id:r.entity_id||"",label:r.label||"",icon:r.icon||""})})}),t}function j0(e,t=null){var r;if(!((r=e==null?void 0:e.pages)!=null&&r.length))return null;const n=e.pages.slice(0,ie.pages).map((i,a)=>({id:i.id||`page-${a}`,name:i.name||`Seite ${a+1}`,widgets:(i.widgets||[]).slice(0,ie.widgetsPerPage).map(o=>{const l={id:o.id||C0(),type:o.type,x:Number(o.x)||0,y:Number(o.y)||0,w:Number(o.w)||2,h:Number(o.h)||1,entity_id:o.entity_id||"",entity_ids:Array.isArray(o.entity_ids)?o.entity_ids.filter(Boolean).slice(0,o.type==="coverPopup"?ie.coverPopupEntities:o.type==="sensor"?ie.sensorEntities:o.type==="sensorStatus"?ie.contactStatusEntities:o.type==="scene"?ie.sceneEntities:ie.popupEntities):[],disabled_entity_ids:o.type==="popup"&&Array.isArray(o.disabled_entity_ids)?o.disabled_entity_ids.filter(Boolean):[],label:o.label||"",icon:o.icon||"",mode:o.mode==="brightness"?"brightness":"toggle"};return o.type==="energyTile"&&(l.tileKind=Object.hasOwn(To,o.tileKind)?o.tileKind:"inputs-outputs",l.tileKind==="ev-heatpump"&&(l.deviceImages=Xi(o.deviceImages))),o.type==="sensor"&&(l.showHistory=!!o.showHistory,l.historyHours=AS(o.historyHours)),o.type==="weather"&&typeof o.location=="string"&&(l.location=o.location),o.type==="haCard"&&(l.card=ps(o.card)),o.type==="scene"&&o.scene_art&&typeof o.scene_art=="object"&&(l.scene_art=Object.fromEntries(Object.entries(o.scene_art).filter(([,c])=>typeof c=="string"&&c))),pn(l)})}));if(t){const i=la(t);n.forEach(a=>{a.widgets=MS(a.widgets,i)})}return{pages:n}}function RS(e,t=Xe,n=vt,r=0){const i=(e.width-r*(t-1))/t,a=(e.height-r*(n-1))/n;return{cellW:i,cellH:a,gap:r,cols:t,rows:n}}function DS(e,t){const{cellW:n,cellH:r,gap:i}=t;return{left:e.x*(n+i),top:e.y*(r+i),width:e.w*n+(e.w-1)*i,height:e.h*r+(e.h-1)*i}}function df(e,t,n){const r=n.cellW+n.gap,i=n.cellH+n.gap;return{dx:Math.round(e/r),dy:Math.round(t/i),offsetX:e-Math.round(e/r)*r,offsetY:t-Math.round(t/i)*i}}function OS(e,t,{dx:n,dy:r}){const{x:i,y:a,w:o,h:l}=t;switch(e){case"n":return{x:i,y:a+r,w:o,h:l-r};case"s":return{x:i,y:a,w:o,h:l+r};case"w":return{x:i+n,y:a,w:o-n,h:l};case"e":return{x:i,y:a,w:o+n,h:l};case"se":return{x:i,y:a,w:o+n,h:l+r};default:return{x:i,y:a,w:o,h:l}}}function FS(e,t){const{dx:n,dy:r,offsetX:i,offsetY:a}=t;switch(e){case"n":case"s":return{dx:0,dy:r,offsetX:0,offsetY:a};case"e":case"w":return{dx:n,dy:0,offsetX:i,offsetY:0};case"se":return{dx:n,dy:r,offsetX:i,offsetY:a};default:return{dx:0,dy:0,offsetX:0,offsetY:0}}}function Y(e,t,n,r,i,a={}){return Ut(e,{x:t,y:n,w:r,h:i,...a})}function BS(e={}){var r,i,a,o,l,c,u,d,m,f,g,v,w,x,y,p,h,k,C,j,E,N,M;const t=e.quickActions||[],n=e.scenes||[];return[Y("weather",0,0,4,2,{entity_id:e.weather||""}),Y("media",0,2,4,1,{entity_id:e.media||""}),Y("camera",0,3,4,1,{entity_id:e.camera||((r=e.cameras)==null?void 0:r[0])||"",entity_ids:(e.cameras||[]).slice(0,ie.cameraEntities)}),Y("quickAction",4,0,2,2,{entity_id:((i=t[0])==null?void 0:i.entity_id)||"",label:((a=t[0])==null?void 0:a.label)||"",icon:((o=t[0])==null?void 0:o.icon)||"",mode:"toggle"}),Y("scene",4,2,2,1,{entity_id:((l=n[0])==null?void 0:l.entity_id)||"",label:((c=n[0])==null?void 0:c.label)||"",icon:((u=n[0])==null?void 0:u.icon)||""}),Y("scene",4,3,2,1,{entity_id:((d=n[1])==null?void 0:d.entity_id)||"",label:((m=n[1])==null?void 0:m.label)||"",icon:((f=n[1])==null?void 0:f.icon)||""}),Y("quickAction",6,0,2,2,{entity_id:((g=t[1])==null?void 0:g.entity_id)||"",label:((v=t[1])==null?void 0:v.label)||"",icon:((w=t[1])==null?void 0:w.icon)||"",mode:"brightness"}),Y("scene",6,2,2,1,{entity_id:((x=n[2])==null?void 0:x.entity_id)||"",label:((y=n[2])==null?void 0:y.label)||"",icon:((p=n[2])==null?void 0:p.icon)||""}),Y("scene",6,3,2,1,{entity_id:((h=n[3])==null?void 0:h.entity_id)||"",label:((k=n[3])==null?void 0:k.label)||"",icon:((C=n[3])==null?void 0:C.icon)||""}),Y("popup",8,0,2,2,{entity_ids:((j=t[2])==null?void 0:j.entity_ids)||((E=t[2])!=null&&E.entity_id?[t[2].entity_id]:[]),label:((N=t[2])==null?void 0:N.label)||"",icon:((M=t[2])==null?void 0:M.icon)||""}),Y("alarm",10,0,2,2,{entity_id:e.alarm||"",label:"Alarmanlage",icon:"mdi:shield-home"})]}function QS(){return[Y("sankey",0,0,8,vt,{label:"Energiefluss heute"}),Y("energyTile",8,0,4,2,{tileKind:"inputs-outputs",label:"Inputs / Outputs"}),Y("energyTile",8,2,4,2,{tileKind:"ev-heatpump",label:"E-Auto"})]}const wc=[{id:"classic",name:"Klassisch",description:"Wetter links, Entitäten & Szenen rechts — wie bisher",preview:[4,2,2,2,2,2],build:e=>({pages:[{id:"page-home",name:"Home",widgets:BS(e)},{id:"page-list",name:"Liste",widgets:[Y("shopping",0,0,Xe,vt,{entity_id:e.shopping||""})]},{id:"page-energy",name:"Energie",widgets:QS()}]})},{id:"weather-top",name:"Wetter oben",description:"Breites Wetter, Steuerung darunter",preview:[12,3,3,3,3],build:e=>{var t,n,r,i,a,o,l,c,u,d;return{pages:[{id:"page-home",name:"Home",widgets:[Y("weather",0,0,Xe,2,{entity_id:e.weather||""}),Y("media",0,2,4,1,{entity_id:e.media||""}),Y("camera",4,2,4,2,{entity_id:e.camera||""}),Y("quickAction",8,2,2,2,{entity_id:((n=(t=e.quickActions)==null?void 0:t[0])==null?void 0:n.entity_id)||"",mode:"toggle"}),Y("quickAction",10,2,2,2,{entity_id:((i=(r=e.quickActions)==null?void 0:r[1])==null?void 0:i.entity_id)||"",mode:"brightness"}),Y("scene",8,0,2,1,{entity_id:((o=(a=e.scenes)==null?void 0:a[0])==null?void 0:o.entity_id)||""}),Y("scene",10,0,2,1,{entity_id:((c=(l=e.scenes)==null?void 0:l[1])==null?void 0:c.entity_id)||""}),Y("popup",0,3,4,1,{entity_ids:((d=(u=e.quickActions)==null?void 0:u[2])==null?void 0:d.entity_ids)||[]})]},{id:"page-list",name:"Liste",widgets:[Y("shopping",0,0,Xe,vt,{entity_id:e.shopping||""})]}]}}},{id:"compact",name:"Kompakt",description:"Kleines Wetter, viele Kacheln",preview:[3,3,3,3],build:e=>{var t,n,r,i,a,o,l,c,u,d,m,f,g,v,w,x;return{pages:[{id:"page-home",name:"Home",widgets:[Y("weather",0,0,3,2,{entity_id:e.weather||""}),Y("media",0,2,3,1,{entity_id:e.media||""}),Y("camera",0,3,3,1,{entity_id:e.camera||""}),Y("quickAction",3,0,3,2,{entity_id:((n=(t=e.quickActions)==null?void 0:t[0])==null?void 0:n.entity_id)||"",mode:"toggle"}),Y("quickAction",6,0,3,2,{entity_id:((i=(r=e.quickActions)==null?void 0:r[1])==null?void 0:i.entity_id)||"",mode:"brightness"}),Y("popup",9,0,3,2,{entity_ids:((o=(a=e.quickActions)==null?void 0:a[2])==null?void 0:o.entity_ids)||[]}),Y("scene",3,2,2,1,{entity_id:((c=(l=e.scenes)==null?void 0:l[0])==null?void 0:c.entity_id)||""}),Y("scene",5,2,2,1,{entity_id:((d=(u=e.scenes)==null?void 0:u[1])==null?void 0:d.entity_id)||""}),Y("scene",7,2,2,1,{entity_id:((f=(m=e.scenes)==null?void 0:m[2])==null?void 0:f.entity_id)||""}),Y("scene",9,2,2,1,{entity_id:((v=(g=e.scenes)==null?void 0:g[3])==null?void 0:v.entity_id)||""}),Y("popup",3,3,3,1,{entity_ids:((x=(w=e.quickActions)==null?void 0:w[3])==null?void 0:x.entity_ids)||[]})]},{id:"page-list",name:"Liste",widgets:[Y("shopping",0,0,Xe,vt,{entity_id:e.shopping||""})]}]}}},{id:"minimal",name:"Minimal",description:"Nur das Wichtigste",preview:[6,3,3],build:e=>{var t,n,r,i;return{pages:[{id:"page-home",name:"Home",widgets:[Y("weather",0,0,6,2,{entity_id:e.weather||""}),Y("media",0,2,6,1,{entity_id:e.media||""}),Y("quickAction",6,0,3,2,{entity_id:((n=(t=e.quickActions)==null?void 0:t[0])==null?void 0:n.entity_id)||"",mode:"toggle"}),Y("quickAction",9,0,3,2,{entity_id:((i=(r=e.quickActions)==null?void 0:r[1])==null?void 0:i.entity_id)||"",mode:"brightness"}),Y("camera",6,2,6,2,{entity_id:e.camera||""})]},{id:"page-list",name:"Liste",widgets:[Y("shopping",0,0,Xe,vt,{entity_id:e.shopping||""})]}]}}}];function WS(e){return wc.find(t=>t.id===e)||wc[0]}function nr(e,t={}){return WS(e).build(t)}const US={dark:{id:"dark",label:"Schwarz"},light:{id:"light",label:"Weiß"},colorful:{id:"colorful",label:"Bunt"},blackColorful:{id:"blackColorful",label:"Schwarz bunt"}},gt=[{bg:"#D0F2E0",fg:"#1a1a1a"},{bg:"#F7BD9D",fg:"#1a1a1a"},{bg:"#F9E892",fg:"#1a1a1a"},{bg:"#BDE0F7",fg:"#1a1a1a"},{bg:"#E0C3FC",fg:"#1a1a1a"},{bg:"#F0EEE8",fg:"#1a1a1a"},{bg:"#F5C6D0",fg:"#1a1a1a"},{bg:"#2C2C2C",fg:"#ffffff"}],Qo=[{id:"indigo",label:"Indigo",accent:"#6366f1",accentRgb:"99, 102, 241",preview:"linear-gradient(135deg, #a5b4fc, #4338ca)"},{id:"ocean",label:"Ozean",accent:"#06b6d4",accentRgb:"6, 182, 212",preview:"linear-gradient(135deg, #67e8f9, #0e7490)"},{id:"forest",label:"Wald",accent:"#10b981",accentRgb:"16, 185, 129",preview:"linear-gradient(135deg, #6ee7b7, #047857)"},{id:"sunset",label:"Sonnenuntergang",accent:"#f59e0b",accentRgb:"245, 158, 11",preview:"linear-gradient(135deg, #fcd34d, #c2410c)"},{id:"rose",label:"Rose",accent:"#ec4899",accentRgb:"236, 72, 153",preview:"linear-gradient(135deg, #f9a8d4, #be185d)"},{id:"violet",label:"Violett",accent:"#8b5cf6",accentRgb:"139, 92, 246",preview:"linear-gradient(135deg, #c4b5fd, #6d28d9)"}],HS=["linear-gradient(135deg, #6366f1, #2563eb)","linear-gradient(135deg, #f59e0b, #ea580c)","linear-gradient(135deg, #10b981, #059669)","linear-gradient(135deg, #ec4899, #be185d)","linear-gradient(135deg, #8b5cf6, #6d28d9)","linear-gradient(135deg, #06b6d4, #0891b2)","linear-gradient(135deg, #ef4444, #b91c1c)","linear-gradient(135deg, #14b8a6, #0d9488)"],VS=["linear-gradient(135deg, #52525b, #18181b)","linear-gradient(135deg, #3f3f46, #09090b)","linear-gradient(135deg, #71717a, #27272a)","linear-gradient(135deg, #27272a, #09090b)","linear-gradient(135deg, #52525b, #27272a)","linear-gradient(135deg, #3f3f46, #18181b)","linear-gradient(135deg, #71717a, #3f3f46)","linear-gradient(135deg, #18181b, #000000)"],Mt={mode:"dark",colorSet:"indigo"};function qS(e){const t=parseInt(e.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]}function Fn([e,t,n]){return`#${[e,t,n].map(r=>r.toString(16).padStart(2,"0")).join("")}`}function Bn(e,t,n){return e.map((r,i)=>Math.round(r+(t[i]-r)*n))}function rd(e){const t=qS(e);return[Fn(Bn(t,[255,255,255],.45)),Fn(Bn(t,[255,255,255],.25)),e,Fn(Bn(t,[0,0,0],.18)),Fn(Bn(t,[0,0,0],.35)),Fn(Bn(t,[0,0,0],.5)),Fn(Bn(t,[0,0,0],.65)),Fn(Bn(t,[0,0,0],.8))]}function KS(e){const t=rd(e);return t.map((n,r)=>{const i=t[Math.min(r+2,t.length-1)];return`linear-gradient(135deg, ${n}, ${i})`})}function YS(e){return e==="light"||e==="colorful"||e==="dark"||e==="blackColorful"?e:e==="monochrome"?"dark":Mt.mode}function P0(e){const t=String(e||"0");let n=0;for(let r=0;r<t.length;r+=1)n=t.charCodeAt(r)+((n<<5)-n);return Math.abs(n)}function JS(e="0"){return gt[P0(e)%gt.length]}const ZS={ev:gt[0],weather:gt[3]};function GS(e="0",t=""){const{bg:n,fg:r}=ZS[t]||JS(e);return{"--tm-surface":n,"--tm-surface-2":n,"--tm-surface-border":"transparent","--tm-tile-fg":r}}const mf=gt.filter(e=>e.fg!=="#ffffff");function XS(e,t){const{bg:n,fg:r}=mf[(P0(e)+t)%mf.length];return{"--tm-surface":n,"--tm-surface-2":n,"--tm-surface-border":"transparent","--tm-tile-fg":r}}function Rn(e={}){const t=YS(e.mode),n=Qo.some(r=>r.id===e.colorSet)?e.colorSet:Mt.colorSet;return{mode:t,colorSet:n}}function id(e=Mt.colorSet){return Qo.find(t=>t.id===e)||Qo[0]}function ad(e=Mt){const t=Rn(e);if(t.mode==="light")return{mode:"light",colorSet:t.colorSet,accent:"#1d1d1f",accentRgb:"29, 29, 31"};if(t.mode==="colorful"){const n=id(t.colorSet);return{mode:"colorful",colorSet:n.id,accent:n.accent,accentRgb:n.accentRgb}}return t.mode==="blackColorful"?{mode:"blackColorful",colorSet:t.colorSet,accent:"#1a1a1a",accentRgb:"26, 26, 26"}:{mode:"dark",colorSet:t.colorSet,accent:"#6366f1",accentRgb:"99, 102, 241"}}function _S(){return{"--tm-bg":"#000000","--tm-fg":"#ffffff","--tm-surface":"rgba(255, 255, 255, 0.10)","--tm-surface-2":"rgba(255, 255, 255, 0.05)","--tm-surface-border":"rgba(255, 255, 255, 0.08)","--tm-tile-fg":"#ffffff","--tm-overlay":"linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.4) 100%)","--tm-screensaver-gradient":"linear-gradient(135deg, rgba(49, 46, 129, 0.3), black, rgba(88, 28, 135, 0.3))","--tm-bg-image-opacity":"0.6","--tm-settings-bg":"rgba(0, 0, 0, 0.85)","--tm-settings-surface":"rgba(255, 255, 255, 0.05)","--tm-settings-surface-border":"rgba(255, 255, 255, 0.08)","--tm-accent":"#6366f1","--tm-accent-rgb":"99, 102, 241","--tm-vi-accent":"#ff6b2b","--tm-vi-track":"#e5e5ea"}}function $S(){return{"--tm-bg":"#f5f5f7","--tm-fg":"#1d1d1f","--tm-surface":"#1d1d1f","--tm-surface-2":"#1d1d1f","--tm-surface-border":"rgba(255, 255, 255, 0.08)","--tm-tile-fg":"#ffffff","--tm-overlay":"none","--tm-screensaver-gradient":"linear-gradient(135deg, rgba(0, 0, 0, 0.08), #f5f5f7, rgba(0, 0, 0, 0.05))","--tm-bg-image-opacity":"0","--tm-settings-bg":"rgba(245, 245, 247, 0.96)","--tm-settings-surface":"rgba(0, 0, 0, 0.04)","--tm-settings-surface-border":"rgba(0, 0, 0, 0.08)","--tm-accent":"#1d1d1f","--tm-accent-rgb":"29, 29, 31","--tm-vi-accent":"#1d1d1f","--tm-vi-track":"#d1d1d6"}}function eC(e,t){const n=rd(e),r=n[n.length-1];return{"--tm-bg":r,"--tm-fg":"#ffffff","--tm-surface":`rgba(${t}, 0.28)`,"--tm-surface-2":`rgba(${t}, 0.16)`,"--tm-surface-border":`rgba(${t}, 0.35)`,"--tm-tile-fg":"#ffffff","--tm-overlay":`linear-gradient(to top, ${r} 0%, rgba(${t}, 0.35) 55%, rgba(${t}, 0.2) 100%)`,"--tm-screensaver-gradient":`linear-gradient(135deg, rgba(${t}, 0.45), ${r}, rgba(${t}, 0.25))`,"--tm-bg-image-opacity":"0.25","--tm-settings-bg":"rgba(0, 0, 0, 0.88)","--tm-settings-surface":"rgba(255, 255, 255, 0.06)","--tm-settings-surface-border":`rgba(${t}, 0.25)`,"--tm-accent":e,"--tm-accent-rgb":t,"--tm-vi-accent":e,"--tm-vi-track":`rgba(${t}, 0.25)`}}function tC(){const e=gt[0];return{"--tm-bg":"#000000","--tm-fg":"#ffffff","--tm-surface":e.bg,"--tm-surface-2":"#F0EEE8","--tm-surface-border":"transparent","--tm-tile-fg":e.fg,"--tm-overlay":"none","--tm-screensaver-gradient":"linear-gradient(135deg, #D0F2E0 0%, #000 40%, #E0C3FC 100%)","--tm-bg-image-opacity":"0","--tm-settings-bg":"rgba(0, 0, 0, 0.92)","--tm-settings-surface":"rgba(255, 255, 255, 0.06)","--tm-settings-surface-border":"rgba(255, 255, 255, 0.08)","--tm-accent":"#1a1a1a","--tm-accent-rgb":"26, 26, 26","--tm-vi-accent":"#1a1a1a","--tm-vi-track":"rgba(0, 0, 0, 0.12)","--tm-radius-xl":"2rem"}}function nC(e=Mt){const t=ad(e);return t.mode==="light"?$S():t.mode==="colorful"?eC(t.accent,t.accentRgb):t.mode==="blackColorful"?tC():_S()}function rC(e=Mt){const{mode:t}=Rn(e);return{"data-tm-theme":t,style:nC(e)}}const iC=gt.map(({bg:e})=>e);function aC(e=Mt){const{mode:t,colorSet:n}=Rn(e);return t==="light"?VS:t==="colorful"?KS(id(n).accent):t==="blackColorful"?iC:HS}function od(e=Mt){return Rn(e).mode==="light"}function sd(e=Mt){return Rn(e).mode==="colorful"}function or(e=Mt){return Rn(e).mode==="blackColorful"}const _i=12,I0="the-monitor-active-room";function z0(){return`room-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`}function Wo(e,{areaId:t="",layout:n=null,layoutPreset:r="classic"}={}){return{id:z0(),name:(e||"Raum").trim()||"Raum",areaId:t||"",layoutPreset:r,layout:n||nr(r)}}function oC(e={}){var r,i;const t=e.layoutPreset||"classic",n=(i=(r=e.layout)==null?void 0:r.pages)!=null&&i.length?j0(e.layout):nr(t);return{id:e.id||z0(),name:(e.name||"Raum").trim()||"Raum",areaId:e.areaId||"",layoutPreset:t,layout:n}}function M0(e){return!Array.isArray(e)||!e.length?[Wo("Zuhause")]:e.slice(0,_i).map(oC)}function sC(e,t={}){var r,i;if(Array.isArray(t.rooms)&&t.rooms.length)return M0(t.rooms);const n=(i=(r=e.layout)==null?void 0:r.pages)!=null&&i.length?e.layout:nr(e.layoutPreset||"classic");return[Wo("Zuhause",{layout:n,layoutPreset:e.layoutPreset||"classic"})]}function lC(e,t){return(e==null?void 0:e.find(n=>n.id===t))||(e==null?void 0:e[0])||null}function ff(e){var t;try{const n=localStorage.getItem(I0);if(n&&(e!=null&&e.some(r=>r.id===n)))return n}catch{}return((t=e==null?void 0:e[0])==null?void 0:t.id)||""}function La(e){try{e&&localStorage.setItem(I0,e)}catch{}}function cC(e){var t;return(t=e.rooms)==null?void 0:t.some(n=>LS(n.layout))}function uC(e){return e==null?void 0:e.some(t=>{var n,r;return(r=(n=t.layout)==null?void 0:n.pages)==null?void 0:r.some(i=>{var a;return(a=i.widgets)==null?void 0:a.some(o=>{var l;return o.entity_id||((l=o.entity_ids)==null?void 0:l.length)})})})}const ld="the-monitor-config",to={rooms:M0([{name:"Zuhause"}]),windows:[],presence:[],vacuum:{entity_id:""},ev:{stateEntity:"",batteryEntity:"",powerEntity:"",rangeEntity:"",chargeTimeEntity:"",lastTripEntity:"",costEntity:"",label:"E-Auto"},backgroundImage:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2940&auto=format&fit=crop",screensaver:{enabled:!0,idleMinutes:1,showDate:!0,showWeather:!0,style:"classic"},appearance:{...Mt},hideHaSidebar:!1,roomSidebar:!1};function dC(e,t=0){var i,a;const n=((a=(i=e.rooms)==null?void 0:i[t])==null?void 0:a.layout)||zS(),r=nd(n);return{...e,weather:{entity_id:r.weather||""},mediaPlayer:{entity_id:r.media||""},camera:{entity_id:r.camera||""},shoppingList:{entity_id:r.shopping||""},alarm:{entity_id:r.alarm||""}}}function mC(e){const t=la(e);return{layout:nr("classic",t),layoutPreset:"classic"}}function je(e={}){var i,a,o,l,c,u,d;const t=structuredClone(to);if(e.backgroundImage&&(t.backgroundImage=e.backgroundImage),(i=e.vacuum)!=null&&i.entity_id&&(t.vacuum={entity_id:e.vacuum.entity_id}),e.ev&&(t.ev={stateEntity:e.ev.stateEntity||e.ev.state_entity||"",batteryEntity:e.ev.batteryEntity||e.ev.battery_entity||"",powerEntity:e.ev.powerEntity||e.ev.power_entity||"",rangeEntity:e.ev.rangeEntity||"",chargeTimeEntity:e.ev.chargeTimeEntity||"",lastTripEntity:e.ev.lastTripEntity||"",costEntity:e.ev.costEntity||"",label:e.ev.label||to.ev.label}),Array.isArray(e.windows)&&(t.windows=e.windows.filter(m=>m==null?void 0:m.entity_id).slice(0,ie.windows).map(m=>({entity_id:m.entity_id,label:m.label||""}))),Array.isArray(e.presence)&&(t.presence=e.presence.filter(m=>m==null?void 0:m.entity_id).map(m=>({entity_id:m.entity_id,label:m.label||""}))),e.screensaver){const m=Number(e.screensaver.idleMinutes);t.screensaver={enabled:e.screensaver.enabled!==!1,idleMinutes:Number.isFinite(m)?Math.min(60,Math.max(1,Math.round(m))):to.screensaver.idleMinutes,showDate:e.screensaver.showDate!==!1,showWeather:e.screensaver.showWeather!==!1,style:e.screensaver.style==="sexy"?"sexy":"classic"}}t.appearance=Rn(e.appearance||t.appearance),typeof e.hideHaSidebar=="boolean"&&(t.hideHaSidebar=e.hideHaSidebar),typeof e.roomSidebar=="boolean"&&(t.roomSidebar=e.roomSidebar);const n=(o=(a=e.layout)==null?void 0:a.pages)==null?void 0:o.length,r=((l=e.quickActions)==null?void 0:l.length)||((c=e.scenes)==null?void 0:c.length)||((u=e.weather)==null?void 0:u.entity_id);if(n)t.layout=j0(e.layout)||nr("classic"),t.layoutPreset=e.layoutPreset||"classic";else if(r){const m=mC(e);t.layout=m.layout,t.layoutPreset=m.layoutPreset}else(d=e.rooms)!=null&&d.length||(t.layout=nr(e.layoutPreset||"classic"),t.layoutPreset=e.layoutPreset||"classic");return t.rooms=sC(t,e),delete t.layout,delete t.layoutPreset,dC(t)}function cd(){try{const e=localStorage.getItem(ld);return e?je(JSON.parse(e)):je()}catch{return je()}}function fC(){var r,i,a,o,l,c,u;const e=cd();if(cC(e))return il(hf(pf(e)));const t=je(Tu);if(!((o=(a=(i=(r=e.rooms)==null?void 0:r[0])==null?void 0:i.layout)==null?void 0:a.pages)!=null&&o.length))return il(t);const n=la(t);return il(hf(pf(je({...e,weather:t.weather,mediaPlayer:t.mediaPlayer,camera:t.camera,shoppingList:t.shoppingList,alarm:t.alarm,cameras:t.cameras,vacuum:(l=e.vacuum)!=null&&l.entity_id?e.vacuum:t.vacuum,ev:(c=e.ev)!=null&&c.stateEntity?e.ev:t.ev,presence:(u=e.presence)!=null&&u.length?e.presence:t.presence,rooms:e.rooms.map((d,m)=>m===0?{...d,layout:{...d.layout,pages:d.layout.pages.map(f=>({...f,widgets:TS(f.widgets,n)}))}}:d)}))))}function pf(e){var u,d,m,f,g,v;const t=((u=e.alarm)==null?void 0:u.entity_id)||la(Tu).alarm||"alarm_control_panel.haus";if((d=e.rooms)==null?void 0:d.some(w=>{var x,y;return(y=(x=w.layout)==null?void 0:x.pages)==null?void 0:y.some(p=>{var h;return(h=p.widgets)==null?void 0:h.some(k=>k.type==="alarm")})}))return e;const r=structuredClone(e),i=(m=r.rooms)==null?void 0:m[0],a=(g=(f=i==null?void 0:i.layout)==null?void 0:f.pages)==null?void 0:g[0];if(!((v=a==null?void 0:a.widgets)!=null&&v.length))return e;const o=a.widgets.filter(w=>w.type==="popup"),l=o[o.length-1];if(!l)return e;const c=a.widgets.findIndex(w=>w.id===l.id);return a.widgets[c]=Ut("alarm",{x:l.x,y:l.y,w:l.w,h:l.h,entity_id:t,label:"Alarmanlage",icon:"mdi:shield-home"}),je(r)}function hf(e){var i;const t=la(Tu).cameras;if(!t.length)return e;const n=structuredClone(e);let r=!1;return(i=n.rooms)==null||i.forEach(a=>{var o,l;(l=(o=a.layout)==null?void 0:o.pages)==null||l.forEach(c=>{c.widgets=c.widgets.map(u=>{var d;return u.type!=="camera"||((d=u.entity_ids)==null?void 0:d.length)>1?u:(r=!0,{...u,entity_id:u.entity_id||t[0],entity_ids:[...t]})})})}),r?je(n):e}function pC(){return[Ut("sankey",{x:0,y:0,w:8,h:4,label:"Energiefluss heute"}),Ut("energyTile",{x:8,y:0,w:4,h:2,tileKind:"inputs-outputs",label:"Inputs / Outputs"}),Ut("energyTile",{x:8,y:2,w:4,h:2,tileKind:"ev-heatpump",label:"E-Auto"})]}function hC(e){var l,c,u,d,m;const t=(l=e==null?void 0:e.pages)==null?void 0:l.find(f=>{var g;return f.id==="page-energy"||((g=f.widgets)==null?void 0:g.some(v=>v.type==="sankey"))});if(!t)return(c=e==null?void 0:e.pages)!=null&&c.length?{...e,pages:[...e.pages,{id:"page-energy",name:"Energie",widgets:pC()}]}:e;const n=(u=t.widgets)==null?void 0:u.some(f=>f.type==="energyTile"&&f.tileKind==="inputs-outputs"),r=(d=t.widgets)==null?void 0:d.some(f=>f.type==="energyTile"&&f.tileKind==="ev-heatpump"),i=(m=t.widgets)==null?void 0:m.find(f=>f.type==="sankey");if(n&&r)return e;const a=structuredClone(e),o=a.pages.find(f=>f.id===t.id)||a.pages.find(f=>{var g;return(g=f.widgets)==null?void 0:g.some(v=>v.type==="sankey")});if(!o)return e;if(i&&i.w>=12){const f=o.widgets.findIndex(g=>g.id===i.id);o.widgets[f]={...o.widgets[f],w:8,h:4,x:0,y:0}}return n||o.widgets.push(Ut("energyTile",{x:8,y:0,w:4,h:2,tileKind:"inputs-outputs",label:"Inputs / Outputs"})),r||o.widgets.push(Ut("energyTile",{x:8,y:2,w:4,h:2,tileKind:"ev-heatpump",label:"E-Auto"})),a}function il(e){let t=!1;const n=e.rooms.map(r=>{const i=hC(r.layout);return i!==r.layout&&(t=!0),{...r,layout:i}});return t?je({...e,rooms:n}):e}function gC(e){localStorage.setItem(ld,JSON.stringify(e))}function yC(e){return JSON.stringify(e,null,2)}function vC(e){const t=JSON.parse(e);return je(t)}function bC(e){var t,n,r,i;return!!(uC(e.rooms)||(t=e.weather)!=null&&t.entity_id||(n=e.mediaPlayer)!=null&&n.entity_id||(r=e.shoppingList)!=null&&r.entity_id||(i=e.vacuum)!=null&&i.entity_id)}function gf(e={},{embedded:t=!1}={}){const n=cd(),r=je(e),i=bC(r),a=!!localStorage.getItem(ld);return je(t?a?{...za,...r,...n}:i?{...za,...n,...r}:{...za,...n,...r}:i?{...za,...n,...r}:{...n,backgroundImage:r.backgroundImage||n.backgroundImage})}const L0=b.createContext(null);function xc(e,t=0){var i,a;const n=(a=(i=e.rooms)==null?void 0:i[t])==null?void 0:a.layout,r=nd(n);return{...e,weather:{entity_id:r.weather||""},mediaPlayer:{entity_id:r.media||""},camera:{entity_id:r.camera||""},shoppingList:{entity_id:r.shopping||""}}}function ki(e,t){return e.findIndex(n=>n.id===t)}function ln(e,t,n,r){var l,c;const i=ki(e.rooms,t);if(i<0)return e;const a=structuredClone(e),o=a.rooms[i];return(c=(l=o.layout)==null?void 0:l.pages)!=null&&c[n]?(o.layout.pages[n]=r(o.layout.pages[n]),xc(a,i)):e}function T0({initialConfig:e,onConfigSaved:t,children:n}){const[r,i]=b.useState(()=>e||je(cd())),[a,o]=b.useState(()=>ff(r.rooms)),l=b.useMemo(()=>lC(r.rooms,a),[r.rooms,a]);b.useEffect(()=>{var A;if(!r.rooms.some(S=>S.id===a)){const S=((A=r.rooms[0])==null?void 0:A.id)||"";o(S),La(S)}},[r.rooms,a]);const c=b.useCallback(A=>{i(S=>{const I=typeof A=="function"?A(S):A,R=je(I);return gC(R),t==null||t(R),R})},[t]),u=b.useCallback(A=>{o(A),La(A)},[]),d=b.useCallback(A=>{c(S=>({...S,ev:{...to.ev,...S.ev,...A}}))},[c]),m=b.useCallback((A,S)=>{c(I=>({...I,[A]:{entity_id:S}}))},[c]),f=b.useCallback((A,S="")=>{c(I=>I.presence.some(R=>R.entity_id===A)?I:{...I,presence:[...I.presence,{entity_id:A,label:S}]})},[c]),g=b.useCallback(A=>{c(S=>({...S,presence:S.presence.filter(I=>I.entity_id!==A)}))},[c]),v=b.useCallback((A,S="")=>{c(I=>I.windows.some(R=>R.entity_id===A)||I.windows.length>=ie.windows?I:{...I,windows:[...I.windows,{entity_id:A,label:S}]})},[c]),w=b.useCallback(A=>{c(S=>({...S,windows:S.windows.filter(I=>I.entity_id!==A)}))},[c]),x=b.useCallback(A=>{c(S=>{if(S.rooms.length>=_i)return S;const I=Wo(A);return{...S,rooms:[...S.rooms,I]}})},[c]),y=b.useCallback(A=>{A!=null&&A.area_id&&c(S=>{if(S.rooms.length>=_i||S.rooms.some(R=>R.areaId===A.area_id))return S;const I=Wo(A.name,{areaId:A.area_id});return{...S,rooms:[...S.rooms,I]}})},[c]),p=b.useCallback(A=>{c(S=>{var R;if(S.rooms.length<=1)return S;const I=S.rooms.filter(Q=>Q.id!==A);if(a===A){const Q=((R=I[0])==null?void 0:R.id)||"";o(Q),La(Q)}return{...S,rooms:I}})},[a,c]),h=b.useCallback((A,S)=>{c(I=>({...I,rooms:I.rooms.map(R=>R.id===A?{...R,name:S.trim()||R.name}:R)}))},[c]),k=b.useCallback((A,S,I)=>{c(R=>ln(R,a,A,Q=>({...Q,widgets:Q.widgets.map(J=>J.id===S?{...J,...I}:J)})))},[a,c]),C=b.useCallback((A,S,I)=>{c(R=>ln(R,a,A,Q=>{const J=Q.widgets.map(K=>{if(K.id!==S)return K;const we=pn({...K,...I});return Er(Q.widgets,we,S).length?K:we});return{...Q,widgets:J}}))},[a,c]),j=b.useCallback((A,S,I)=>{c(R=>ln(R,a,A,Q=>{const J=Q.widgets.map(K=>{if(K.id!==S)return K;const we=pn({...K,...I});return Er(Q.widgets,we,S).length?K:we});return{...Q,widgets:J}}))},[a,c]),E=b.useCallback((A,S,I)=>{c(R=>ln(R,a,A,Q=>{const J=Q.widgets.map(K=>{if(K.id!==S)return K;const we=pn({...K,w:I.w,h:I.h});return Er(Q.widgets,we,S).length?K:we});return{...Q,widgets:J}}))},[a,c]),N=b.useCallback((A,S)=>{c(I=>ln(I,a,A,R=>{const Q=Ut(S),J=NS(R.widgets,{w:Q.w,h:Q.h});return{...R,widgets:[...R.widgets,pn({...Q,...J})]}}))},[a,c]),M=b.useCallback((A,S,I)=>{const R=Ut(S),Q=pn({...R,...I});return c(J=>ln(J,a,A,K=>K.widgets.length>=ie.widgetsPerPage||Er(K.widgets,Q).length?K:{...K,widgets:[...K.widgets,Q]})),Q.id},[a,c]),P=b.useCallback((A,S)=>{c(I=>ln(I,a,A,R=>({...R,widgets:R.widgets.filter(Q=>Q.id!==S)})))},[a,c]),F=b.useCallback(A=>{c(S=>{const I=ki(S.rooms,a);if(I<0)return S;const R=S.rooms[I],Q=nd(R.layout),J=nr(A,Q),K=structuredClone(S);return K.rooms[I]={...R,layout:J,layoutPreset:A},xc(K,I)})},[a,c]),H=b.useCallback(()=>{c(A=>{const S=ki(A.rooms,a);if(S<0)return A;const I=A.rooms[S];if(I.layout.pages.length>=ie.pages)return A;const R=structuredClone(A);return R.rooms[S]={...I,layout:{...I.layout,pages:[...I.layout.pages,N0(`Seite ${I.layout.pages.length+1}`)]}},R})},[a,c]),G=b.useCallback(A=>{c(S=>{const I=ki(S.rooms,a);if(I<0)return S;const R=S.rooms[I];if(R.layout.pages.length<=1)return S;const Q=structuredClone(S);return Q.rooms[I]={...R,layout:{...R.layout,pages:R.layout.pages.filter((J,K)=>K!==A)}},xc(Q,I)})},[a,c]),_=b.useCallback((A,S)=>{c(I=>{const R=ki(I.rooms,a);if(R<0)return I;const Q=I.rooms[R],{pages:J}=Q.layout;if(A===S||A<0||A>=J.length||S<0||S>=J.length)return I;const K=[...J],[we]=K.splice(A,1);K.splice(S,0,we);const nt=structuredClone(I);return nt.rooms[R]={...Q,layout:{...Q.layout,pages:K}},nt})},[a,c]),le=b.useCallback((A,S)=>{c(I=>ln(I,a,A,R=>({...R,name:S.trim()||R.name})))},[a,c]),be=b.useCallback(A=>{c(S=>({...S,screensaver:{...S.screensaver,...A}}))},[c]),W=b.useCallback(A=>{c(S=>({...S,appearance:Rn({...S.appearance,...A})}))},[c]),D=b.useCallback(A=>{c(S=>({...S,...A}))},[c]),z=b.useCallback(()=>yC(r),[r]),T=b.useCallback(A=>{try{const S=vC(A);c(S);const I=ff(S.rooms);return o(I),La(I),!0}catch{return!1}},[c]);return s.jsx(L0.Provider,{value:{config:r,activeRoom:l,activeRoomId:a,setActiveRoomId:u,setConfig:c,setSingleEntity:m,updateEv:d,addPresence:f,removeWindow:w,addWindow:v,removePresence:g,addRoom:x,addRoomFromHaArea:y,removeRoom:p,renameRoom:h,updateWidget:k,moveWidget:C,resizeWidget:j,applyWidgetSize:E,addWidget:N,addWidgetAt:M,removeWidget:P,applyLayoutPreset:F,addLayoutPage:H,removeLayoutPage:G,moveLayoutPage:_,renameLayoutPage:le,updateScreensaver:be,updateAppearance:W,updateDisplay:D,exportToJson:z,importFromJson:T},children:n})}function ke(){const e=b.useContext(L0);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e}const wC={on:"An",off:"Aus",open:"Offen",closed:"Geschlossen",home:"Zuhause",not_home:"Abwesend",detected:"Erkannt",clear:"Frei",wet:"Nass",dry:"Trocken",moving:"Bewegung",plugged_in:"Angeschlossen",unplugged:"Getrennt",locked:"Gesperrt",unlocked:"Offen"};function R0(e,t=1){const n=Number(e);return Number.isFinite(n)?n.toLocaleString("de-DE",{minimumFractionDigits:0,maximumFractionDigits:t}):e}function D0(e,t){return e==="temperature"||t==="°C"||t==="°F"?1:e==="humidity"||t==="%"?0:e==="power"||e==="energy"||e==="voltage"?1:e==="illuminance"?0:1}function kc(e,t){const n=It(e,t),{state:r,attributes:i,domain:a}=n,o=i.unit_of_measurement||"",l=i.device_class||"";if(r==="unavailable"||r==="unknown")return{value:"—",unit:"",stateLabel:"Nicht verfügbar"};if(a==="binary_sensor")return{value:wC[r]||r,unit:"",stateLabel:""};if(a==="sensor"){const c=Number(r);if(Number.isFinite(c)){const u=D0(l,o);return{value:R0(c,u),unit:o,stateLabel:""}}return{value:r,unit:o,stateLabel:""}}return{value:r,unit:o,stateLabel:""}}function xC(e,t){const{domain:n,attributes:r}=t,i=r.unit_of_measurement||"",a=r.device_class||"";if(n==="binary_sensor")return e>=.5?"An":"Aus";const o=Number(e);return Number.isFinite(o)?R0(o,D0(a,i)):String(e)}function kC(e){var t;return(t=e.entity_ids)!=null&&t.length?e.entity_ids.filter(Boolean):e.entity_id?[e.entity_id]:[]}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),O=(e,t)=>{const n=b.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:l="",children:c,...u},d)=>b.createElement("svg",{ref:d,...AC,width:i,height:i,stroke:r,strokeWidth:o?Number(a)*24/Number(i):a,className:["lucide",`lucide-${SC(e)}`,l].join(" "),...u},[...t.map(([m,f])=>b.createElement(m,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=O("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=O("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=O("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=O("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=O("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=O("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=O("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=O("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=O("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=O("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=O("CarFront",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=O("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=O("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=O("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=O("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=O("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=O("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=O("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=O("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=O("CloudFog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=O("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=O("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=O("CloudSnow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=O("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=O("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=O("DoorClosed",[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=O("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=O("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=O("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=O("Euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=O("Fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=O("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=O("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=O("GripHorizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=O("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=O("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=O("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=O("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=O("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=O("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=O("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=O("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=O("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=O("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=O("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=O("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=O("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=O("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=O("PanelTopOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=O("PanelTop",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=O("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=O("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=O("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=O("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=O("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=O("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=O("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=O("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=O("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=O("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=O("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=O("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=O("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=O("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=O("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=O("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=O("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=O("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=O("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=O("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=O("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=O("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=O("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=O("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=O("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),$0={clear:"clear.mp4","clear-night":"clear.mp4",partlycloudy:"partlycloudy.mp4"};function sE(e){const t=new Date().getHours();return e==="clear"&&(t<6||t>=20)?"clear-night":$0[e]?e:null}function lE(e,t){var a;const n=sE(t);if(!n)return null;const r=$0[n],i=`/local/weather/${r}`;if(Io(e)){const o=oa(e);return o?`${o}${i}`:i}return typeof window<"u"&&((a=window.location)!=null&&a.origin)?`${window.location.origin}/weather/${r}`:`/weather/${r}`}const Vt={sunny:{label:"Sonnig",Icon:$i,gradient:"linear-gradient(160deg, #f59e0b 0%, #3b82f6 100%)"},clear:{label:"Klar",Icon:$i,gradient:"linear-gradient(160deg, #38bdf8 0%, #6366f1 100%)"},"clear-night":{label:"Klare Nacht",Icon:K0,gradient:"linear-gradient(160deg, #1e1b4b 0%, #0f172a 100%)"},partlycloudy:{label:"Teilweise bewölkt",Icon:dd,gradient:"linear-gradient(160deg, #94a3b8 0%, #3b82f6 100%)"},cloudy:{label:"Bewölkt",Icon:W0,gradient:"linear-gradient(160deg, #64748b 0%, #334155 100%)"},rainy:{label:"Regen",Icon:Sc,gradient:"linear-gradient(160deg, #475569 0%, #1e40af 100%)"},pouring:{label:"Starkregen",Icon:Sc,gradient:"linear-gradient(160deg, #334155 0%, #1e3a8a 100%)"},snowy:{label:"Schnee",Icon:ol,gradient:"linear-gradient(160deg, #cbd5e1 0%, #64748b 100%)"},fog:{label:"Nebel",Icon:RC,gradient:"linear-gradient(160deg, #9ca3af 0%, #6b7280 100%)"},lightning:{label:"Gewitter",Icon:al,gradient:"linear-gradient(160deg, #4c1d95 0%, #1e3a8a 100%)"},hail:{label:"Hagel",Icon:ol,gradient:"linear-gradient(160deg, #94a3b8 0%, #475569 100%)"},windy:{label:"Windig",Icon:Cc,gradient:"linear-gradient(160deg, #38bdf8 0%, #64748b 100%)"},"windy-variant":{label:"Windig",Icon:Cc,gradient:"linear-gradient(160deg, #38bdf8 0%, #64748b 100%)"},"lightning-rainy":{label:"Gewitter",Icon:al,gradient:"linear-gradient(160deg, #4c1d95 0%, #1e3a8a 100%)"},"snowy-rainy":{label:"Schneeregen",Icon:ol,gradient:"linear-gradient(160deg, #cbd5e1 0%, #64748b 100%)"},exceptional:{label:"Extrem",Icon:al,gradient:"linear-gradient(160deg, #7c2d12 0%, #1e293b 100%)"}},cE="linear-gradient(160deg, #a1a1aa 0%, #3f3f46 100%)",uE="linear-gradient(160deg, #71717a 0%, #27272a 100%)";function dE(e,t,n){const r=rd(id(n==null?void 0:n.colorSet).accent),i=t<6||t>=20;return e==="clear"&&i?`linear-gradient(160deg, ${r[4]} 0%, ${r[7]} 100%)`:`linear-gradient(160deg, ${r[1]} 0%, ${r[4]} 100%)`}function mE(e,t){const n=t<6||t>=20;return e==="clear"&&n?gt[4].bg:e==="sunny"||e==="clear"?gt[2].bg:e==="rainy"||e==="pouring"?gt[3].bg:e==="snowy"||e==="hail"?gt[5].bg:gt[3].bg}function ws(e,t=new Date().getHours(),n){const r=t<6||t>=20;return od(n)?{...Vt[e]||Vt.cloudy,gradient:e==="clear"&&r?uE:cE}:sd(n)?{...Vt[e]||Vt.cloudy,gradient:dE(e,t,n)}:or(n)?{...Vt[e]||Vt.cloudy,gradient:mE(e,t)}:e==="clear"&&r?Vt["clear-night"]:Vt[e]||Vt.cloudy}function gd(e,t={}){const{Icon:n}=ws(e);return s.jsx(n,{...t})}function e1(e){const t=e.temperature??e.temp??e.temp_max,n=e.templow??e.temp_min??(t!=null?t-6:null);return{datetime:e.datetime,condition:e.condition,high:t,low:n,precipitation:e.precipitation??e.precipitation_probability}}const fE=1,pE=2;function hE(e){var t;return!!((((t=e==null?void 0:e.attributes)==null?void 0:t.supported_features)??0)&fE)}const gE=8*60*60*1e3;function yE(e){var n,r;return(((n=e==null?void 0:e.attributes)==null?void 0:n.supported_features)??0)&pE?!0:t1((r=e==null?void 0:e.attributes)==null?void 0:r.forecast)}function t1(e){if(!Array.isArray(e)||e.length<3)return!1;const t=Pn(e[1].datetime),n=Pn(e[2].datetime);return Number.isNaN(t.getTime())||Number.isNaN(n.getTime())?!1:n.getTime()-t.getTime()<gE}function n1(e={}){const t=[e.hourly_forecast,e.forecast_hourly,e.hourly];for(const n of t)if(Array.isArray(n)&&n.length)return n;return t1(e.forecast)?e.forecast:null}function vf(e,t,n,{todayOnly:r=!1}={}){const{state:i,attributes:a}=t,o=a.temperature,l=new Date,c=dg(gg(l),-1);return e.map(u=>({slot:u,dt:u.datetime?Pn(u.datetime):null})).filter(({dt:u})=>!(!u||u<c||r&&!aa(u,l))).slice(0,n).map(({slot:u,dt:d},m)=>{const f=m===0||d&&Math.abs(d.getTime()-l.getTime())<27e5,g=u.temperature??u.temp??o,v=d?d.getHours():m;return{datetime:u.datetime,hour:v,label:f?"Jetzt":d?st(d,"HH:mm"):`${m}`,temp:g!=null?Math.round(g):"—",condition:u.condition??i}})}function r1(e,t,n=null,r=8){const a=gg(new Date),o=(n==null?void 0:n.high)??(typeof e=="number"?e+4:22),l=(n==null?void 0:n.low)??(typeof e=="number"?e-4:14);return Array.from({length:r},(c,u)=>{const d=dg(a,u),m=d.getHours(),f=u===0,g=Math.max(0,Math.min(1,(m-6)/17)),v=Math.sin(g*Math.PI),w=l+(o-l)*v,x=Math.round(f&&typeof e=="number"?e:w);let y=t;return m>=20||m<6?y=t==="sunny"||t==="clear"?"clear-night":t:t==="rainy"&&m<12&&(y="partlycloudy"),{datetime:d.toISOString(),hour:m,label:f?"Jetzt":st(d,"HH:mm"),temp:x,condition:y}})}function vE(e,t=null){const n=t||n1(e.attributes);if(n!=null&&n.length)return{dayPreview:vf(n,e,6,{todayOnly:!0}),hourlyPreview:vf(n,e,8,{todayOnly:!1})};const{state:r,attributes:i}=e,o=(i.forecast||[]).map(e1)[0]||null,l=r1(i.temperature,r,o,8);return{dayPreview:l.filter(c=>!c.datetime||aa(Pn(c.datetime),new Date)).slice(0,6),hourlyPreview:l.slice(0,8)}}function Ec(e){return e!=null&&Number.isFinite(Number(e))?Math.round(Number(e)):null}function bE(e,t,n,r=6){const i=new Date,a=(t||[]).map(o=>({slot:o,dt:o.datetime?Pn(o.datetime):null})).filter(({dt:o})=>o&&!Number.isNaN(o.getTime())&&o>i).slice(0,r).map(({slot:o,dt:l})=>({datetime:o.datetime,hour:l.getHours(),label:`${l.getHours()} Uhr`,temp:Ec(o.temperature??o.temp),condition:o.condition??e.state}));return a.length>=Math.min(r,3)?a:r1(e.attributes.temperature,e.state,n,r+1).slice(1).map(o=>({...o,label:`${o.hour} Uhr`}))}function wE(e,t=6){const n=new Date;return e.map(r=>({day:r,dt:r.datetime?Pn(r.datetime):null})).filter(({dt:r})=>r&&!Number.isNaN(r.getTime())&&r>n&&!aa(r,n)).slice(0,t).map(({day:r,dt:i})=>({...r,label:st(i,"EEEEEE",{locale:En}),high:Ec(r.high),low:Ec(r.low)}))}function xE(e,t=null,n=null){const{state:r,attributes:i,name:a}=e,o=(n||i.forecast||[]).map(e1),l=new Date,c=o.find(m=>m.datetime&&aa(Pn(m.datetime),l))||o[0]||null,u=vE(e,t),d=t||n1(i);return{name:a,condition:r,temp:i.temperature,humidity:i.humidity,pressure:i.pressure,windSpeed:i.wind_speed,windGust:i.wind_gust_speed,visibility:i.visibility,forecast:o,today:c,dayPreview:u.dayPreview,hourlyPreview:u.hourlyPreview,upcomingHours:bE(e,d,c),upcomingDays:wE(o)}}function i1(e){const t=Number(e);return Number.isFinite(t)?t.toLocaleString("de-DE",{maximumFractionDigits:1}):null}function kE(e){var t;return(((t=e==null?void 0:e.layout)==null?void 0:t.pages)||[]).flatMap(n=>n.widgets||[])}function AE(e){const t=[];return e!=null&&e.entity_id&&t.push(e.entity_id),((e==null?void 0:e.entity_ids)||[]).forEach(n=>{n&&t.push(n)}),t}function SE(e){const t=e==null?void 0:e.media_position,n=e==null?void 0:e.media_duration;return typeof t!="number"||typeof n!="number"||n<=0?null:Math.min(100,Math.max(0,t/n*100))}function CE(e,t,n){var i,a,o,l;for(const c of e){if(c.type!=="sensor")continue;const u=(i=c.entity_ids)!=null&&i.length?c.entity_ids:c.entity_id?[c.entity_id]:[];for(const d of u){const m=t(d),f=(a=m.attributes)==null?void 0:a.device_class;if(["temperature","humidity","illuminance"].includes(f)&&!(m.state==="unavailable"||m.state==="unknown"))return{kicker:c.label||m.name,entityId:d}}}for(const c of e)for(const u of AE(c)){if(!u.startsWith("climate."))continue;const d=t(u),m=i1((o=d.attributes)==null?void 0:o.current_temperature);if(m)return{kicker:c.label||d.name,value:m,unit:"°",detail:"Raumklima"}}const r=(l=n.ev)==null?void 0:l.batteryEntity;if(r){const c=t(r);if(c.state!=="unavailable"&&c.state!=="unknown"){const u=n.ev.stateEntity?t(n.ev.stateEntity):null;return{kicker:n.ev.label||c.name,entityId:r,detail:(u==null?void 0:u.state)==="on"?"Lädt":"Akku",powerEntityId:(u==null?void 0:u.state)==="on"?n.ev.powerEntity:""}}}return null}function EE({config:e,room:t,hass:n,getEntity:r}){var d,m,f,g,v;const i=kE(t),a=[];if(e.screensaver.showWeather&&((d=e.weather)!=null&&d.entity_id)){const w=r(e.weather.entity_id);w.state&&w.state!=="unavailable"&&((m=w.attributes)==null?void 0:m.temperature)!=null&&a.push({kind:"weather",entity:w})}const o=i.find(w=>w.type==="media"&&w.entity_id),l=(o==null?void 0:o.entity_id)||((f=e.mediaPlayer)==null?void 0:f.entity_id);if(l){const w=r(l),x=(g=w.attributes)==null?void 0:g.media_title,y=(v=w.attributes)==null?void 0:v.media_artist;(w.state==="playing"||w.state==="paused"||x||y)&&a.push({kind:"media",entity:w,entityId:l})}const c=(e.presence||[]).map(w=>{var y;const x=r(w.entity_id);return!w.entity_id||x.state==="unavailable"?null:{id:w.entity_id,name:w.label||x.name,home:x.state==="home",picture:$r(n,(y=x.attributes)==null?void 0:y.entity_picture)}}).filter(Boolean);c.length&&a.push({kind:"people",people:c});const u=CE(i,r,e);return u&&a.push({kind:"stat",...u}),a.slice(0,4)}function NE({entity:e}){var o,l,c;const t=ws(e.state),n=i1((o=e.attributes)==null?void 0:o.temperature),r=(l=e.attributes)==null?void 0:l.humidity,i=(c=e.attributes)==null?void 0:c.wind_speed,a=[r!=null?`${Math.round(r)} %`:null,i!=null?`${Math.round(i)} km/h`:null].filter(Boolean).join("  ·  ");return s.jsxs("div",{className:"tm-ssx-tile",children:[s.jsx("div",{className:"tm-ssx-icon","aria-hidden":!0,children:gd(e.state,{size:30,strokeWidth:1.6})}),s.jsxs("div",{className:"tm-ssx-copy",children:[s.jsxs("div",{className:"tm-ssx-value",children:[n,s.jsx("span",{children:"°"})]}),s.jsx("div",{className:"tm-ssx-label",children:t.label}),a&&s.jsx("div",{className:"tm-ssx-sub",children:a})]})]})}function jE({entity:e,hass:t}){var l,c,u;const n=$r(t,(l=e.attributes)==null?void 0:l.entity_picture),r=((c=e.attributes)==null?void 0:c.media_title)||e.name||"Wiedergabe",i=((u=e.attributes)==null?void 0:u.media_artist)||"",a=SE(e.attributes),o=e.state==="paused"?"Pause":"Gerade läuft";return s.jsxs("div",{className:"tm-ssx-tile",children:[s.jsx("div",{className:"tm-ssx-art",style:n?{backgroundImage:`url("${n}")`}:void 0,"aria-hidden":!0}),s.jsxs("div",{className:"tm-ssx-copy",children:[s.jsx("div",{className:"tm-ssx-kicker",children:o}),s.jsx("div",{className:"tm-ssx-title",children:r}),i&&s.jsx("div",{className:"tm-ssx-sub",children:i}),a!=null&&s.jsx("div",{className:"tm-ssx-progress","aria-hidden":!0,children:s.jsx("span",{style:{width:`${a}%`}})})]})]})}function PE({people:e}){const t=e.filter(i=>i.home),n=(t.length?t:e).map(i=>i.name).join(", ");let r="Anwesend";return t.length===0?r="Niemand zuhause":t.length===e.length?r="Alle zuhause":r=`${t.length} zuhause`,s.jsxs("div",{className:"tm-ssx-tile tm-ssx-tile--people",children:[s.jsx("div",{className:"tm-ssx-kicker",children:r}),s.jsx("div",{className:"tm-ssx-avatars",children:e.map(i=>{var a;return s.jsx("div",{className:`tm-ssx-avatar${i.home?"":" away"}`,title:i.name,children:i.picture?s.jsx("img",{src:i.picture,alt:""}):s.jsx("span",{children:((a=i.name)==null?void 0:a[0])||"?"})},i.id)})}),s.jsx("div",{className:"tm-ssx-sub",children:n})]})}function IE({tile:e,hass:t}){let n=e.value,r=e.unit||"",i=e.detail||"";if(e.entityId&&n==null){const a=kc(t,e.entityId);n=a.value,r=a.unit||""}if(e.powerEntityId){const a=kc(t,e.powerEntityId);a.value&&a.value!=="—"&&(i=`${a.value}${a.unit?` ${a.unit}`:""}`)}return s.jsx("div",{className:"tm-ssx-tile tm-ssx-tile--stat",children:s.jsxs("div",{className:"tm-ssx-copy",children:[s.jsx("div",{className:"tm-ssx-kicker",children:e.kicker}),s.jsxs("div",{className:"tm-ssx-value",children:[n,r&&s.jsx("span",{children:r})]}),i&&s.jsx("div",{className:"tm-ssx-sub",children:i})]})})}function zE({time:e}){const{config:t,activeRoom:n}=ke(),{hass:r,getEntity:i}=We(),a=EE({config:t,room:n,hass:r,getEntity:i}),o=t.backgroundImage;return s.jsxs("div",{className:"tm-ssx tm-animate-fade",children:[s.jsx("div",{className:"tm-ssx-photo",style:o?{backgroundImage:`url("${o}")`}:void 0}),s.jsx("div",{className:"tm-ssx-shade"}),s.jsxs("div",{className:"tm-ssx-clock",children:[s.jsx("h1",{className:"tm-ssx-time",children:st(e,"HH:mm")}),t.screensaver.showDate&&s.jsx("p",{className:"tm-ssx-date",children:st(e,"EEEE, d. MMMM",{locale:En})})]}),a.length>0&&s.jsx("div",{className:"tm-ssx-dock",children:a.map(l=>l.kind==="weather"?s.jsx(NE,{entity:l.entity},"weather"):l.kind==="media"?s.jsx(jE,{entity:l.entity,hass:r},"media"):l.kind==="people"?s.jsx(PE,{people:l.people},"people"):s.jsx(IE,{tile:l,hass:r},"stat"))})]})}function ME(){var l,c;const[e,t]=b.useState(new Date),{getEntity:n}=We(),{config:r}=ke();b.useEffect(()=>{const u=setInterval(()=>t(new Date),1e3);return()=>clearInterval(u)},[]);const i=(l=r.weather)!=null&&l.entity_id?n(r.weather.entity_id):null,a=(c=i==null?void 0:i.attributes)==null?void 0:c.temperature,o=i==null?void 0:i.state;return r.screensaver.style==="sexy"?s.jsx(zE,{time:e}):s.jsxs("div",{className:"tm-absolute-fill tm-z-50 tm-flex-col tm-flex-center tm-animate-fade",style:{background:"black"},children:[s.jsx("div",{className:"tm-absolute-fill tm-opacity-50",style:{background:"var(--tm-screensaver-gradient)"}}),s.jsxs("div",{style:{position:"relative",zIndex:10,textAlign:"center"},children:[s.jsx("h1",{className:"tm-text-hero",style:{fontVariantNumeric:"tabular-nums"},children:st(e,"HH:mm")}),r.screensaver.showDate&&s.jsx("p",{className:"tm-title-xl",style:{marginTop:"1rem",opacity:.6},children:st(e,"EEEE, d. MMMM",{locale:En})}),r.screensaver.showWeather&&a!=null&&s.jsxs("div",{className:"tm-flex-center tm-gap-4 tm-opacity-50",style:{marginTop:"2rem",fontSize:"1.25rem"},children:[s.jsxs("span",{children:[a,"°C"]}),s.jsx("span",{children:"•"}),s.jsx("span",{children:o})]})]})]})}const LE=3e4;let Nc={},jc=0;function bf(){jc=Date.now()}function a1(e){Nc={...Nc,...e}}function o1(){return!jc||Date.now()-jc>LE?{}:Nc}function TE({children:e,onPageChange:t,activePageIndex:n,editMode:r=!1,pagesMeta:i=[],onOpenPageManage:a}){const o=b.Children.toArray(e),l=b.useRef(null),c=b.useRef(!1),u=b.useRef(!1),d=b.useRef(!1),m=b.useRef(0),f=b.useRef(!1),[g,v]=b.useState(n??0),w=g,x=b.useCallback(()=>{const j=l.current;return!j||j.clientWidth===0?0:Math.max(0,Math.round(j.scrollLeft/j.clientWidth))},[]),y=b.useCallback(()=>{var E;if(window.clearTimeout(m.current),u.current||d.current||!c.current)return;c.current=!1,(E=l.current)==null||E.classList.remove("is-scrolling");const j=x();v(j),j!==n&&(t==null||t(j))},[n,t,x]),p=b.useCallback(()=>{var E;if(d.current)return;c.current=!0,(E=l.current)==null||E.classList.add("is-scrolling");const j=x();v(N=>N===j?N:j),!u.current&&(window.clearTimeout(m.current),m.current=window.setTimeout(y,420))},[x,y]),h=b.useCallback(()=>{u.current=!1,window.clearTimeout(m.current),m.current=window.setTimeout(y,420)},[y]),k=b.useCallback(j=>{var E;c.current=!1,u.current=!1,window.clearTimeout(m.current),(E=l.current)==null||E.classList.remove("is-scrolling"),v(j),t==null||t(j)},[t]);if(b.useEffect(()=>()=>window.clearTimeout(m.current),[]),b.useEffect(()=>{if(n==null||c.current||u.current)return;const j=l.current;if(!j)return;if(j.clientWidth===0){if(!n)return;const M=window.requestAnimationFrame(()=>{const P=l.current;!P||P.clientWidth===0||(P.scrollTo({left:n*P.clientWidth,behavior:"auto"}),f.current=!0)});return()=>window.cancelAnimationFrame(M)}const E=n*j.clientWidth;v(n);const N=f.current?"smooth":"auto";if(f.current=!0,Math.abs(j.scrollLeft-E)>16){d.current=!0,j.scrollTo({left:E,behavior:N});const M=window.setTimeout(()=>{d.current=!1},1500);return()=>window.clearTimeout(M)}d.current=!1},[n]),o.length<=1&&!r)return s.jsx("div",{className:"tm-page-pager-wrap",children:o[0]??null});const C=j=>{var E;return((E=i[j])==null?void 0:E.name)||`Seite ${j+1}`};return s.jsxs("div",{className:"tm-page-pager-wrap",children:[s.jsx("div",{ref:l,className:"tm-page-pager",onPointerDown:()=>{u.current=!0,d.current||(c.current=!0)},onPointerUp:h,onPointerCancel:h,onScroll:p,onScrollEnd:()=>{if(d.current){d.current=!1;return}u.current||y()},children:o.map((j,E)=>{var N;return s.jsx("div",{className:"tm-page",children:j},((N=i[E])==null?void 0:N.id)||E)})}),s.jsxs("div",{className:`tm-page-indicator${r?" tm-page-indicator--edit":""}`,children:[s.jsx("div",{className:"tm-page-indicator-track",role:"tablist","aria-label":"Seiten",children:o.map((j,E)=>{var N;return s.jsx("button",{type:"button",role:"tab","aria-selected":E===w,"aria-label":C(E),className:`${r?"tm-page-bar":"tm-page-dot"}${E===w?" active":""}`,onClick:()=>k(E)},((N=i[E])==null?void 0:N.id)||E)})}),r&&s.jsx("button",{type:"button",className:"tm-page-manage-trigger",onClick:a,"aria-label":"Seiten verwalten",children:s.jsx(WC,{size:20})})]})]})}let yn=null;function RE(e){if(e){yn=e;return}yn=null}function DE(e){(!e||yn===e)&&(yn=null)}function Dn(e){var r,i;const t=(r=e==null?void 0:e.getRootNode)==null?void 0:r.call(e);if(t instanceof ShadowRoot&&((i=t.host)==null||i.localName),yn!=null&&yn.isConnected)return yn;const n=document.querySelector("the-monitor-dashboard");return n!=null&&n.shadowRoot?n.shadowRoot:document.body}function sr(e){b.useEffect(()=>{var o;const t=Dn(),n=((o=t==null?void 0:t.querySelector)==null?void 0:o.call(t,".tm-page-pager"))||document.querySelector(".tm-page-pager"),r=document.body.style.overflow,i=document.body.style.touchAction,a=n==null?void 0:n.style.touchAction;return document.body.style.overflow="hidden",document.body.style.touchAction="none",n&&(n.style.touchAction="none"),()=>{document.body.style.overflow=r,document.body.style.touchAction=i,n&&(n.style.touchAction=a||"")}},[e])}function OE({pages:e,activePageIndex:t,onClose:n,onSelectPage:r,onAddPage:i,onRemovePage:a,onMovePage:o,onRenamePage:l}){sr(!0),b.useEffect(()=>{const d=m=>{m.key==="Escape"&&n()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[n]);const c=e.length<ie.pages,u=e.length>1;return Tn.createPortal(s.jsxs("div",{className:"tm-page-manage-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-page-manage-backdrop",onClick:n,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-page-manage-panel",onClick:d=>d.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Seiten verwalten",children:[s.jsxs("div",{className:"tm-page-manage-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-page-manage-title",children:"Seiten verwalten"}),s.jsx("div",{className:"tm-page-manage-subtitle",children:"Reihenfolge ändern, umbenennen oder löschen"})]}),s.jsx("button",{type:"button",className:"tm-page-manage-close",onClick:n,"aria-label":"Schließen",children:s.jsx(Ye,{size:18})})]}),s.jsx("ul",{className:"tm-page-manage-list",children:e.map((d,m)=>s.jsxs("li",{className:`tm-page-manage-row${m===t?" active":""}`,children:[s.jsxs("button",{type:"button",className:"tm-page-manage-select",onClick:()=>r(m),"aria-current":m===t?"true":void 0,children:[s.jsx("span",{className:"tm-page-manage-index",children:m+1}),s.jsx("input",{type:"text",className:"tm-page-manage-name",value:d.name,onChange:f=>l(m,f.target.value),onClick:f=>f.stopPropagation(),"aria-label":`Name für Seite ${m+1}`})]}),s.jsxs("div",{className:"tm-page-manage-actions",children:[s.jsx("button",{type:"button",className:"tm-page-manage-action",onClick:()=>o(m,m-1),disabled:m===0,"aria-label":`Seite ${m+1} nach oben`,children:s.jsx(Q0,{size:18})}),s.jsx("button",{type:"button",className:"tm-page-manage-action",onClick:()=>o(m,m+1),disabled:m===e.length-1,"aria-label":`Seite ${m+1} nach unten`,children:s.jsx(ys,{size:18})}),s.jsx("button",{type:"button",className:"tm-page-manage-action tm-page-manage-action--danger",onClick:()=>a(m),disabled:!u,"aria-label":`Seite ${m+1} löschen`,children:s.jsx(G0,{size:16})})]})]},d.id))}),s.jsxs("button",{type:"button",className:"tm-page-manage-add",onClick:i,disabled:!c,children:[s.jsx(ct,{size:18}),"Neue Seite"]}),!c&&s.jsxs("p",{className:"tm-page-manage-hint",children:["Maximal ",ie.pages," Seiten."]})]})]}),Dn())}const FE={lightbulb:V0,thermometer:nE,shield:vs,lock:qC,music:ZC,camera:ni,shoppingcart:bs,clapperboard:LC,moon:K0,utensils:oE,dooropen:ca,fan:BC,power:J0,home:UC,sun:$i,cloud:W0,cloudrain:Sc,play:hd,pause:pd,volume2:X0,bell:IC,wifi:_0,settings:ua,user:aE,plus:ct};function wf(e,t={}){const n=(e||"").toLowerCase().replace(/[^a-z]/g,""),r=FE[n]||V0;return s.jsx(r,{...t})}function BE(e){return{light:"lightbulb",switch:"power",climate:"thermometer",lock:"lock",alarm_control_panel:"shield",scene:"clapperboard",script:"clapperboard",media_player:"music",camera:"camera",todo:"shoppingcart",person:"user",cover:"dooropen",fan:"fan",weather:"cloudrain"}[e]||"home"}function QE(e){return typeof e=="string"&&e.includes(":")}function WE(e){return e!=null&&e.id?{entity_id:e.id,state:e.state,attributes:e.attributes||{}}:null}function xf({icon:e,size:t,style:n,className:r}){const i=b.useCallback(a=>{a&&(a.icon=e)},[e]);return s.jsx("ha-icon",{ref:i,className:r,style:{width:t,height:t,display:"inline-flex",alignItems:"center",justifyContent:"center",...n}})}function UE({hass:e,stateObj:t,size:n,style:r,className:i}){const a=b.useCallback(o=>{o&&(o.hass=e,o.stateObj=t)},[e,t]);return s.jsx("state-icon",{ref:a,className:i,style:{width:n,height:n,display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:0,...r}})}function Ht({hass:e,entity:t,overrideIcon:n="",size:r=24,style:i={},className:a=""}){var d,m;const o=b.useMemo(()=>WE(t),[t]),l=typeof customElements<"u"&&customElements.get("state-icon"),c=typeof customElements<"u"&&customElements.get("ha-icon");if(n)return QE(n)&&c?s.jsx(xf,{icon:n,size:r,style:i,className:a}):wf(n,{size:r,style:i,className:a});if(l&&e&&o&&((d=e.states)!=null&&d[o.entity_id]))return s.jsx(UE,{hass:e,stateObj:o,size:r,style:i,className:a});const u=(m=t==null?void 0:t.attributes)==null?void 0:m.icon;return u&&c?s.jsx(xf,{icon:u,size:r,style:i,className:a}):wf(BE(ye(t==null?void 0:t.id)),{size:r,style:i,className:a})}const HE="data:image/webp;base64,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",VE="data:image/webp;base64,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",qE="data:image/webp;base64,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",KE="data:image/webp;base64,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",yd={evening:{label:"Abend",src:HE},morning:{label:"Morgen",src:VE},cinema:{label:"Kino",src:qE},off:{label:"Alles aus",src:KE,ownBackdrop:!0}},YE=[["off",/\b(aus|off)\b|ausschalten|ausmachen|nacht|night|schlaf|sleep|abwesend|away|verlassen/i],["cinema",/kino|film|movie|\btv\b|fernseh|netflix|serie|cinema/i],["morning",/morgen|morning|aufstehen|wecken|wake|früh|frueh/i],["evening",/abend|evening|relax|gemütlich|gemuetlich|chill|lesen|dinner|essen/i]];function JE(e="",t=""){if(t&&yd[t])return t;const n=YE.find(([,r])=>r.test(e));return n?n[0]:"evening"}const ZE={light:"Licht",cover:"Rollläden",media_player:"TV",climate:"Heizung",switch:"Geräte",fan:"Lüfter",lock:"Schloss",input_boolean:"Schalter"};function GE(e){return e.length<=1?e[0]||"":`${e.slice(0,-1).join(", ")} und ${e[e.length-1]}`}function XE(e,t){var i,a,o;const n=(o=(a=(i=e==null?void 0:e.states)==null?void 0:i[t])==null?void 0:a.attributes)==null?void 0:o.entity_id;if(!Array.isArray(n)||n.length===0)return"";const r=[];return n.forEach(l=>{const c=ZE[ye(l)];c&&!r.includes(c)&&r.push(c)}),r.length===0?"Geräte":r.length>3?`${r.slice(0,2).join(", ")} und mehr`:GE(r)}const _E=[{id:"warm",label:"Warmweiß",rgb:[255,166,87]},{id:"neutral",label:"Neutralweiß",rgb:[255,244,229]},{id:"cool",label:"Kaltweiß",rgb:[207,226,255]},{id:"red",label:"Rot",rgb:[239,68,68]},{id:"orange",label:"Orange",rgb:[251,146,60]},{id:"green",label:"Grün",rgb:[74,222,128]},{id:"blue",label:"Blau",rgb:[96,165,250]},{id:"purple",label:"Violett",rgb:[192,132,252]}];function $E(e){return`rgb(${e[0]}, ${e[1]}, ${e[2]})`}function eN(e,t){var a,o;const n=(a=e==null?void 0:e.states)==null?void 0:a[t];if(!n)return null;const{rgb_color:r,color_mode:i}=n.attributes||{};return Array.isArray(r)&&r.length>=3?r.slice(0,3):i==="color_temp"&&((o=n.attributes)!=null&&o.color_temp)?tN(n.attributes.color_temp):null}function tN(e){const t=e/100;let n,r,i;return t<=66?(n=255,r=Math.min(255,Math.max(0,99.4708025861*Math.log(t)-161.1195681661))):(n=Math.min(255,Math.max(0,329.698727446*(t-60)**-.1332047592)),r=Math.min(255,Math.max(0,288.1221695283*(t-60)**-.0755148492))),t>=66?i=255:t<=19?i=0:i=Math.min(255,Math.max(0,138.5177312231*Math.log(t-10)-305.0447927307)),[Math.round(n),Math.round(r),Math.round(i)]}function nN({activeRgb:e,onPick:t,className:n=""}){return s.jsx("div",{className:`tm-light-color-circles${n?` ${n}`:""}`,role:"group","aria-label":"Lichtfarbe wählen",children:_E.map(r=>{const i=e&&Math.abs(e[0]-r.rgb[0])<=18&&Math.abs(e[1]-r.rgb[1])<=18&&Math.abs(e[2]-r.rgb[2])<=18;return s.jsx("button",{type:"button",className:`tm-light-color-circle${i?" active":""}`,style:{"--tm-light-color":$E(r.rgb)},onClick:()=>t(r.rgb),"aria-label":r.label,title:r.label},r.id)})})}const kf={light:{bg:"transparent",icon:"#e4e4e7"},switch:{bg:"transparent",icon:"#e4e4e7"},climate:{bg:"transparent",icon:"#d4d4d8"},lock:{bg:"transparent",icon:"#d4d4d8"},alarm_control_panel:{bg:"transparent",icon:"#d4d4d8"},cover:{bg:"transparent",icon:"#d4d4d8"},default:{bg:"transparent",icon:"#e4e4e7"}},Af={light:{bg:"rgba(234, 179, 8, 0.1)",icon:"#fef08a"},switch:{bg:"rgba(234, 179, 8, 0.1)",icon:"#fef08a"},climate:{bg:"rgba(239, 68, 68, 0.1)",icon:"#fecaca"},lock:{bg:"rgba(59, 130, 246, 0.1)",icon:"#bfdbfe"},alarm_control_panel:{bg:"rgba(16, 185, 129, 0.1)",icon:"#a7f3d0"},cover:{bg:"rgba(59, 130, 246, 0.1)",icon:"#bfdbfe"},default:{bg:"rgba(255,255,255,0.05)",icon:"rgba(255,255,255,0.5)"}};function rN(e,t,n){const r=aC(n),i=t||String(e);let a=0;for(let o=0;o<i.length;o+=1)a=i.charCodeAt(o)+((a<<5)-a);return r[Math.abs(a)%r.length]}function iN(e,t){if(od(t))return kf[e]||kf.default;if(or(t))return{bg:"var(--tm-surface)",icon:"var(--tm-tile-fg)"};if(sd(t)){const{accentRgb:n}=ad(t);return{bg:`rgba(${n}, 0.22)`,icon:"#ffffff"}}return Af[e]||Af.default}function s1(e){return!["climate","sensor","binary_sensor"].includes(e)}function aN(e,t){var o;const n=e.filter(l=>l.active).length,r=e.length,i=t||(r===1?(o=e[0])==null?void 0:o.label:`${r} Geräte`);let a;return r===0?a="":n===0?a="Alle aus":n===r?a="Alle an":a=`${n} von ${r} an`,{label:i,sub:a,active:n>0,activeCount:n,total:r}}function oN({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){const{config:a}=ke();if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-quick-action tm-brightness-action empty",onClick:r,children:[s.jsx($i,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Licht konfigurieren"})]});const o=n(e.entity_id),l=e.label||o.name,u=ye(e.entity_id)==="light",d=px(t,e.entity_id),m=o.state==="on",f=u?eN(t,e.entity_id):null,[g,v]=b.useState(d),[w,x]=b.useState(!1),y=b.useRef(!1),p=b.useRef(null);b.useEffect(()=>{y.current||v(d)},[d]);const h=()=>{y.current=!1,x(!1)},k=N=>{var F;const M=(F=p.current)==null?void 0:F.getBoundingClientRect();if(!M)return;const P=Math.min(100,Math.max(0,Math.round((M.bottom-N)/M.height*100)));v(P),hx(t,e.entity_id,P)},C=N=>{var M;i||((M=p.current)==null||M.setPointerCapture(N.pointerId),y.current=!0,x(!0),k(N.clientY))},j=N=>{y.current&&k(N.clientY)},E=N=>{i||gx(t,e.entity_id,N)};return s.jsxs("div",{ref:p,className:`tm-quick-action tm-brightness-action${m?" active":""}${w?" dragging":""}${u?" tm-brightness-action--light":""}`,style:{"--tm-brightness":`${g}%`},onPointerDown:C,onPointerMove:j,onPointerUp:h,onPointerCancel:h,role:"slider","aria-label":`Helligkeit ${l}`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":g,tabIndex:0,children:[s.jsx("div",{className:"tm-brightness-fill"}),s.jsxs("div",{className:"tm-brightness-header",children:[s.jsx(Ht,{hass:t,entity:o,overrideIcon:e.icon,size:22,style:{opacity:.9,color:or(a.appearance)?"var(--tm-tile-fg)":"#fef08a"}}),s.jsxs("div",{className:"tm-flex-col",style:{minWidth:0,flex:1},children:[s.jsx("div",{className:"tm-font-bold",style:{fontSize:"1rem",lineHeight:1.25,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l}),s.jsxs("div",{className:"tm-text-xs tm-opacity-70",children:[g,"%"]})]})]}),u&&s.jsx("div",{className:"tm-brightness-colors",onPointerDown:N=>N.stopPropagation(),onPointerMove:N=>N.stopPropagation(),children:s.jsx(nN,{activeRgb:f,onPick:E})})]})}function sN({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){const{config:a}=ke(),o=a.appearance;if(e.mode==="brightness")return s.jsx(oN,{widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i});if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-quick-action empty",onClick:r,children:[s.jsx(ct,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Konfigurieren"})]});const l=n(e.entity_id),c=ye(e.entity_id),u=os(l.state,c),d=iN(c,o),m=e.label||l.name,f=Iu(t,e.entity_id),g=s1(c),v=()=>{i||!g||zu(t,e.entity_id)},w=u?od(o)?{background:"rgba(255, 255, 255, 0.15)",color:"#ffffff"}:or(o)?{background:"var(--tm-surface)",color:"var(--tm-tile-fg)",boxShadow:"inset 0 0 0 2.5px var(--tm-tile-fg)"}:sd(o)?{background:`rgba(${ad(o).accentRgb}, 0.45)`,color:"#ffffff"}:{background:"rgba(234, 179, 8, 0.2)",color:"#fef08a"}:{background:d.bg};return s.jsxs("button",{type:"button",className:`tm-quick-action${u?" active":""}`,style:{...w,cursor:g&&!i?"pointer":"default"},onClick:v,children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{width:"100%"},children:[s.jsx(Ht,{hass:t,entity:l,overrideIcon:e.icon,size:24,style:u?{}:{opacity:.7,color:d.icon}}),u&&s.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"currentColor"}})]}),s.jsxs("div",{className:"tm-flex-col",style:{marginTop:"auto"},children:[s.jsx("div",{className:"tm-font-bold",style:{fontSize:"1.125rem",lineHeight:1.25},children:m}),s.jsx("div",{className:"tm-text-xs tm-opacity-70",style:{marginTop:"0.25rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:f})]})]})}function lN(e){return e!=="disarmed"&&e!=="unavailable"}function cN(e){return e==="triggered"||e==="triggering"||e==="pending"}function uN({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-alarm-widget empty",onClick:r,children:[s.jsx(vs,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Alarm konfigurieren"})]});const a=n(e.entity_id),{state:o}=a,l=lN(o),c=cN(o),u=e.label||a.name,d=Iu(t,e.entity_id),m=()=>{i||zu(t,e.entity_id)};return s.jsxs("button",{type:"button",className:`tm-alarm-widget${l?" armed":""}${c?" triggered":""}`,onClick:m,"aria-label":`${u}: ${d}`,children:[s.jsxs("div",{className:"tm-alarm-widget-top",children:[s.jsx(Ht,{hass:t,entity:a,overrideIcon:e.icon||"mdi:shield-home",size:26,className:"tm-alarm-widget-icon"}),l&&s.jsx("span",{className:"tm-alarm-widget-dot","aria-hidden":!0})]}),s.jsxs("div",{className:"tm-alarm-widget-body",children:[s.jsx("div",{className:"tm-alarm-widget-label",children:u}),s.jsx("div",{className:"tm-alarm-widget-state",children:d})]})]})}function dN({entityId:e,label:t,artKey:n,hass:r,getEntity:i,editMode:a,colorVars:o}){const[l,c]=b.useState(!1);b.useEffect(()=>{if(!l)return;const v=setTimeout(()=>c(!1),1600);return()=>clearTimeout(v)},[l]);const u=i(e),d=t||u.name,m=XE(r,e),f=yd[JE(d,n)],g=()=>{a||(kg(r,e),c(!0))};return s.jsx("div",{className:"tm-scene-card",style:o,children:s.jsxs("div",{className:"tm-scene-card-inner",children:[s.jsxs("div",{className:"tm-scene-card-text",children:[s.jsx("div",{className:"tm-scene-card-kicker",children:ye(e)==="script"?"Skript":"Szene"}),s.jsx("div",{className:"tm-scene-card-title",children:d}),m&&s.jsx("div",{className:"tm-scene-card-sub",children:m})]}),s.jsxs("div",{className:"tm-scene-card-art",children:[!f.ownBackdrop&&s.jsx("div",{className:"tm-scene-card-art-disc"}),s.jsx("img",{src:f.src,alt:"",draggable:!1})]}),s.jsxs("button",{type:"button",className:`tm-scene-card-start${l?" started":""}`,onClick:g,disabled:a,"aria-label":`${d} starten`,children:[l?s.jsx(ud,{size:26,strokeWidth:2.75}):s.jsx(hd,{size:26,fill:"currentColor",strokeWidth:0}),s.jsx("span",{className:"tm-scene-card-start-label",children:l?"Gestartet":"Szene starten"})]})]})})}function mN({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){var c;const{config:a}=ke(),o=(c=e.entity_ids)!=null&&c.length?e.entity_ids.slice(0,ie.sceneEntities):e.entity_id?[e.entity_id]:[];if(o.length===0)return s.jsxs("button",{type:"button",className:"tm-scene-btn empty",onClick:r,children:[s.jsx(ct,{size:20}),s.jsx("span",{className:"tm-text-sm",children:"Szene"})]});const l=or(a.appearance);return s.jsx("div",{className:"tm-scenes",children:s.jsx("div",{className:`tm-scenes-grid tm-scenes-grid--${o.length}`,children:o.map((u,d)=>{var m;return s.jsx(dN,{entityId:u,label:o.length===1?e.label:"",artKey:(m=e.scene_art)==null?void 0:m[u],hass:t,getEntity:n,editMode:i,colorVars:l?XS(e.id,d):void 0},u)})})})}function Sf({variant:e,summary:t,gradient:n,active:r,slot:i,primaryEntity:a,entityCount:o,hass:l,onClick:c,appearance:u}){const d=or(u);return s.jsxs("button",{type:"button",className:`tm-scene-btn tm-qa-scene-trigger${r?" active":""}${d&&r?" tm-scene-btn--pastel-active":""}`,onClick:c,"aria-label":`${t.label} ${t.sub}`,children:[s.jsx("div",{className:"tm-scene-gradient",style:{background:r?d?n:"linear-gradient(135deg, rgba(234, 179, 8, 0.55), rgba(180, 130, 0, 0.35))":n,opacity:d||r?1:.55}}),e==="status"?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"tm-scene-icon",children:s.jsx("span",{className:"tm-qa-scene-state",children:t.sub})}),s.jsx("div",{className:"tm-scene-label",children:r?"An":"Aus"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tm-scene-icon tm-qa-scene-icon-wrap",children:[s.jsx(Ht,{hass:l,entity:a,overrideIcon:i.icon||(o>1?"mdi:layers":""),size:18,style:{color:d?"currentColor":"white"}}),o>1&&s.jsx("span",{className:"tm-qa-entity-count",children:o})]}),s.jsx("div",{className:"tm-scene-label",children:t.label})]})]})}function fN({widget:e,widgetIndex:t,hass:n,getEntity:r,onConfigure:i,onOpen:a,editMode:o}){var v;const{config:l}=ke(),c=PS(e);if(c.length===0)return s.jsxs("button",{type:"button",className:"tm-scene-btn empty",onClick:i,children:[s.jsx(ct,{size:20}),s.jsx("span",{className:"tm-text-sm",children:"Entitäten konfigurieren"})]});const u=c.map(w=>{const x=r(w),y=ye(w);return{entityId:w,entity:x,domain:y,active:os(x.state,y),label:x.name,sub:Iu(n,w),actionable:s1(y)}}),d=aN(u,e.label),m=rN(t,c[0],l.appearance),f=(v=u[0])==null?void 0:v.entity,g=()=>{if(o){i==null||i();return}a==null||a({slot:e,entities:u,summary:d,index:t,gradient:m})};return s.jsxs("div",{className:"tm-popup-widget-stack",children:[s.jsx(Sf,{variant:"icon",summary:d,gradient:m,active:d.active,slot:e,primaryEntity:f,entityCount:c.length,hass:n,onClick:g,appearance:l.appearance}),s.jsx(Sf,{variant:"status",summary:d,gradient:m,active:d.active,slot:e,primaryEntity:f,entityCount:c.length,hass:n,onClick:g,appearance:l.appearance})]})}function pN({item:e,hass:t,onToggle:n}){return s.jsxs("div",{className:`tm-qa-popup-entity${e.active?" active":""}${e.disabled?" disabled":""}`,children:[s.jsx(Ht,{hass:t,entity:e.entity,size:18,style:{color:e.active?"#fef08a":"rgba(255,255,255,0.7)"}}),s.jsxs("div",{className:"tm-qa-popup-entity-text",children:[s.jsx("span",{className:"tm-qa-popup-entity-name",children:e.label}),s.jsx("span",{className:"tm-qa-popup-entity-state",children:e.sub})]}),e.actionable?s.jsx("button",{type:"button",className:"tm-qa-popup-entity-toggle",onClick:()=>n(e.entityId),children:e.active?"Aus":"An"}):s.jsx("span",{className:"tm-qa-popup-entity-readonly","aria-hidden":!0})]})}function hN({data:e,hass:t,onClose:n}){var f;const{slot:r,entities:i,summary:a,gradient:o}=e,l=i.filter(g=>g.actionable),c=l.length>0&&l.every(g=>g.active),u=(f=i[0])==null?void 0:f.entity;sr(!0),b.useEffect(()=>{const g=v=>{v.key==="Escape"&&n()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[n]);const d=g=>{zu(t,g)},m=()=>{const g=c?xg:wg;l.forEach(v=>g(t,v.entityId))};return Tn.createPortal(s.jsxs("div",{className:"tm-qa-popup-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-qa-popup-backdrop",onClick:n,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-qa-popup-panel tm-qa-popup-panel--multi",onClick:g=>g.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":a.label,children:[s.jsx("div",{className:"tm-scene-gradient",style:{background:a.active?"linear-gradient(135deg, rgba(234, 179, 8, 0.55), rgba(180, 130, 0, 0.35))":o,opacity:.45}}),s.jsx("button",{type:"button",className:"tm-qa-popup-close",onClick:n,"aria-label":"Schließen",children:s.jsx(Ye,{size:16})}),s.jsxs("div",{className:"tm-qa-popup-header",children:[s.jsx("div",{className:"tm-scene-icon tm-qa-popup-header-icon",children:s.jsx(Ht,{hass:t,entity:u,overrideIcon:r.icon||(i.length>1?"mdi:layers":""),size:22,style:{color:"white"}})}),s.jsxs("div",{className:"tm-qa-popup-header-text",children:[s.jsx("div",{className:"tm-scene-label",children:a.label}),s.jsx("div",{className:"tm-qa-popup-state",children:a.sub})]})]}),s.jsx("div",{className:"tm-qa-popup-entities",children:i.map(g=>s.jsx(pN,{item:g,hass:t,onToggle:d},g.entityId))}),l.length>1&&s.jsx("button",{type:"button",className:"tm-qa-popup-toggle",onClick:m,children:c?"Alle ausschalten":"Alle einschalten"})]})]}),Dn())}function l1({entityId:e,label:t,entity:n,hass:r,overrideIcon:i,editMode:a,variant:o="group"}){const l=Lu(r,e),[c,u]=b.useState(l),[d,m]=b.useState(!1),f=b.useRef(!1),g=b.useRef(null);b.useEffect(()=>{f.current||u(l)},[l]);const v=()=>{f.current=!1,m(!1)},w=p=>{var C;const h=(C=g.current)==null?void 0:C.getBoundingClientRect();if(!h)return;const k=Math.min(100,Math.max(0,Math.round((h.bottom-p)/h.height*100)));u(k),oc(r,e,k)},x=p=>{var h;a||((h=g.current)==null||h.setPointerCapture(p.pointerId),f.current=!0,m(!0),w(p.clientY))},y=p=>{f.current&&w(p.clientY)};return o==="row"?s.jsxs("div",{className:`tm-cover-popup-entity${c>0?" active":""}`,children:[s.jsx(Ht,{hass:r,entity:n,size:18,style:{color:c>0?"#bfdbfe":"rgba(255,255,255,0.7)"}}),s.jsxs("div",{className:"tm-cover-popup-entity-text",children:[s.jsx("span",{className:"tm-cover-popup-entity-name",children:t}),s.jsxs("span",{className:"tm-cover-popup-entity-state",children:[c,"%"]})]}),s.jsx("input",{type:"range",className:"tm-cover-popup-slider",min:0,max:100,value:c,disabled:a,onChange:p=>{const h=Number(p.target.value);u(h),oc(r,e,h)},"aria-label":`Position ${t}`})]}):s.jsxs("div",{ref:g,className:`tm-quick-action tm-cover-action tm-cover-action--group${c>0?" active":""}${d?" dragging":""}`,style:{"--tm-cover-position":`${c}%`},onPointerDown:x,onPointerMove:y,onPointerUp:v,onPointerCancel:v,role:"slider","aria-label":`Position ${t}`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":c,tabIndex:a?-1:0,children:[s.jsx("div",{className:"tm-cover-fill"}),s.jsxs("div",{className:"tm-cover-header",children:[s.jsx(Ht,{hass:r,entity:n,overrideIcon:i,size:20,style:{opacity:.9,color:"#bfdbfe"}}),s.jsxs("div",{className:"tm-flex-col",style:{minWidth:0,flex:1},children:[s.jsx("div",{className:"tm-font-bold tm-cover-group-label",children:t}),s.jsxs("div",{className:"tm-text-xs tm-opacity-70",children:[c,"%"]})]})]})]})}function gN(e,t){return e==="opening"?"Öffnet …":e==="closing"?"Schließt …":e==="unavailable"||e==="unknown"?"Nicht verfügbar":t>0?"Geöffnet":"Geschlossen"}function yN({entityId:e,label:t,entity:n,hass:r,editMode:i}){const a=Lu(r,e),[o,l]=b.useState(a),[c,u]=b.useState(!1),d=b.useRef(!1),m=b.useRef(null),f=_w(r,e);b.useEffect(()=>{d.current||l(a)},[a]);const g=p=>{var C;const h=(C=m.current)==null?void 0:C.getBoundingClientRect();if(!h)return o;const k=(p-h.top)/h.height;return Math.min(100,Math.max(0,Math.round((1-k)*100)))},v=p=>{i||(p.stopPropagation(),p.currentTarget.setPointerCapture(p.pointerId),d.current=!0,u(!0),l(g(p.clientY)))},w=p=>{d.current&&l(g(p.clientY))},x=p=>{if(!d.current)return;d.current=!1,u(!1);const h=g(p.clientY);l(h),oc(r,e,h)},y=gN(n.state,o);return s.jsxs("div",{className:`tm-quick-action tm-cover-card${c?" dragging":""}`,children:[s.jsxs("div",{className:"tm-cover-card-main",children:[s.jsxs("div",{className:"tm-cover-card-info",children:[s.jsx("div",{className:"tm-cover-card-title",children:t}),f&&s.jsx("div",{className:"tm-cover-card-area",children:f}),s.jsxs("div",{className:"tm-cover-card-value",children:[o,s.jsx("span",{className:"tm-cover-card-unit",children:"%"})]}),s.jsx("div",{className:"tm-cover-card-status",children:y})]}),s.jsxs("div",{className:"tm-cover-visual",onPointerDown:v,onPointerMove:w,onPointerUp:x,onPointerCancel:x,role:"slider","aria-label":`Position ${t}`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":o,tabIndex:i?-1:0,children:[s.jsx("div",{className:"tm-cover-visual-box"}),s.jsxs("div",{ref:m,className:"tm-cover-visual-window",children:[s.jsx("div",{className:"tm-cover-visual-view"}),s.jsx("div",{className:"tm-cover-visual-slats",style:{height:`${100-o}%`}})]})]})]}),s.jsxs("div",{className:"tm-cover-card-controls",children:[s.jsx("button",{type:"button",className:"tm-cover-card-btn",disabled:i,onClick:()=>Ag(r,e),"aria-label":`${t} öffnen`,children:s.jsx(Q0,{size:22,strokeWidth:2.25})}),s.jsx("button",{type:"button",className:"tm-cover-card-btn tm-cover-card-btn--stop",disabled:i,onClick:()=>Cx(r,e),"aria-label":`${t} stoppen`,children:s.jsx(pd,{size:22,strokeWidth:2.5})}),s.jsx("button",{type:"button",className:"tm-cover-card-btn",disabled:i,onClick:()=>Mu(r,e),"aria-label":`${t} schließen`,children:s.jsx(ys,{size:22,strokeWidth:2.25})})]})]})}function vN({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-quick-action tm-cover-action empty",onClick:r,children:[s.jsx(Zr,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Rolladen konfigurieren"})]});const a=n(e.entity_id),o=e.label||a.name;return s.jsx(yN,{entityId:e.entity_id,label:o,entity:a,hass:t,editMode:i})}function bN({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){const a=e.entity_ids||[];return a.length===0?s.jsxs("button",{type:"button",className:"tm-quick-action tm-cover-action empty",onClick:r,children:[s.jsx(Zr,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Rolladen-Gruppe"})]}):s.jsx("div",{className:`tm-cover-group${i?" tm-cover-group--edit":""}`,onClick:i?r:void 0,onKeyDown:i?o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),r==null||r())}:void 0,role:i?"button":void 0,tabIndex:i?0:void 0,children:a.map(o=>{const l=n(o),c=l.name;return s.jsx(l1,{entityId:o,label:c,entity:l,hass:t,overrideIcon:e.icon||"mdi:window-shutter",editMode:i,variant:"group"},o)})})}function wN({data:e,hass:t,getEntity:n,onClose:r}){var g;const{slot:i,entityIds:a,summary:o,gradient:l}=e,c=a.map(v=>{const w=n(v);return{entityId:v,entity:w,label:w.name,position:Lu(t,v)}}),u=c.length>0&&c.every(v=>v.position>=100),d=(g=c[0])==null?void 0:g.entity;sr(!0),b.useEffect(()=>{const v=w=>{w.key==="Escape"&&r()};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[r]);const m=()=>{c.forEach(v=>Ag(t,v.entityId))},f=()=>{c.forEach(v=>Mu(t,v.entityId))};return Tn.createPortal(s.jsxs("div",{className:"tm-qa-popup-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-qa-popup-backdrop",onClick:r,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-qa-popup-panel tm-qa-popup-panel--multi tm-cover-popup-panel",onClick:v=>v.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":o.label,children:[s.jsx("div",{className:"tm-scene-gradient",style:{background:o.active?"linear-gradient(135deg, rgba(59, 130, 246, 0.55), rgba(37, 99, 235, 0.35))":l,opacity:.45}}),s.jsx("button",{type:"button",className:"tm-qa-popup-close",onClick:r,"aria-label":"Schließen",children:s.jsx(Ye,{size:16})}),s.jsxs("div",{className:"tm-qa-popup-header",children:[s.jsx("div",{className:"tm-scene-icon tm-qa-popup-header-icon",children:s.jsx(Ht,{hass:t,entity:d,overrideIcon:i.icon||(c.length>1?"mdi:window-shutter-open":"mdi:window-shutter"),size:22,style:{color:"white"}})}),s.jsxs("div",{className:"tm-qa-popup-header-text",children:[s.jsx("div",{className:"tm-scene-label",children:o.label}),s.jsx("div",{className:"tm-qa-popup-state",children:o.sub})]})]}),s.jsx("div",{className:"tm-cover-popup-entities",children:c.map(v=>s.jsx(l1,{entityId:v.entityId,label:v.label,entity:v.entity,hass:t,variant:"row"},v.entityId))}),c.length>1&&s.jsx("button",{type:"button",className:"tm-qa-popup-toggle tm-cover-popup-toggle",onClick:u?f:m,children:u?"Alle schließen":"Alle öffnen"})]})]}),Dn())}function xN(e){var t,n,r;return((t=e==null?void 0:e.attributes)==null?void 0:t.hourly_forecast)||((n=e==null?void 0:e.attributes)==null?void 0:n.forecast_hourly)||((r=e==null?void 0:e.attributes)==null?void 0:r.hourly)||null}function kN(e){var n;const t=(n=e==null?void 0:e.attributes)==null?void 0:n.forecast;return Array.isArray(t)&&t.length?t:null}function c1(e,t,n,r,i,a){var c;const[o,l]=b.useState(()=>i(n));return b.useEffect(()=>{l(i(n))},[n]),b.useEffect(()=>{var m;if(!t||!n||!((m=e==null?void 0:e.connection)!=null&&m.subscribeMessage)||!a(n))return;let u=!0,d=()=>{};return e.connection.subscribeMessage(f=>{var g;!u||!((g=f==null?void 0:f.forecast)!=null&&g.length)||l(f.forecast)},{type:"weather/subscribe_forecast",forecast_type:r,entity_id:t}).then(f=>{if(!u){f();return}d=f}).catch(()=>{}),()=>{u=!1,d()}},[e,t,n==null?void 0:n.id,(c=n==null?void 0:n.attributes)==null?void 0:c.supported_features]),o}function AN(e,t,n){return c1(e,t,n,"hourly",xN,yE)}function SN(e,t,n){return c1(e,t,n,"daily",kN,hE)}const Cf="data:image/webp;base64,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",CN="data:image/webp;base64,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",u1="data:image/webp;base64,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",EN="data:image/webp;base64,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",NN="data:image/webp;base64,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",sl="data:image/webp;base64,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",Ef="data:image/webp;base64,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",jN="data:image/webp;base64,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",Pc="data:image/webp;base64,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",PN="data:image/webp;base64,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",Nf="data:image/webp;base64,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",IN="data:image/webp;base64,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",zN={sunny:Cf,clear:Cf,"clear-night":Pc,partlycloudy:CN,cloudy:u1,fog:jN,rainy:EN,pouring:NN,lightning:sl,"lightning-rainy":sl,exceptional:sl,snowy:Ef,"snowy-rainy":Ef,hail:IN,windy:Nf,"windy-variant":Nf},jf={sunny:Pc,clear:Pc,partlycloudy:PN};function d1(e){return e<6||e>=20}function ll(e,t=new Date().getHours()){return t!=null&&d1(t)&&jf[e]?jf[e]:zN[e]||u1}function MN(e,t=new Date().getHours()){return e==="clear-night"||d1(t)&&["sunny","clear","partlycloudy"].includes(e)?"night":e==="sunny"||e==="clear"?"sunny":["rainy","pouring","lightning","lightning-rainy","exceptional","hail"].includes(e)?"rain":e==="snowy"||e==="snowy-rainy"?"snow":e==="cloudy"||e==="fog"?"cloudy":"mild"}const Pf=1e3,LN=.2,TN=2e3;function RN(e,t){const n=e.currentTime;Number.isFinite(t.duration)&&t.duration>0?t.currentTime=n%t.duration:t.currentTime=n}function DN({condition:e,meta:t,hass:n,flat:r=!1}){const i=r?null:lE(n,e),a=b.useRef(null),o=b.useRef(null),[l,c]=b.useState("fast");return b.useEffect(()=>{c("fast");const u=a.current,d=o.current;if(u&&(u.playbackRate=1,u.play().catch(()=>{})),d&&(d.playbackRate=LN,d.pause(),d.currentTime=0),!i)return;let m=!1;const f=()=>{if(m)return;const w=a.current,x=o.current;!w||!x||(w.pause(),RN(w,x),x.play().catch(()=>{}),c("blending"))},g=window.setTimeout(()=>{const w=o.current;w&&(w.readyState>=1?f():w.addEventListener("loadedmetadata",f,{once:!0}))},Pf),v=window.setTimeout(()=>{m||c("slow")},Pf+TN);return()=>{m=!0,window.clearTimeout(g),window.clearTimeout(v)}},[i]),s.jsxs(s.Fragment,{children:[i&&s.jsxs("div",{className:`tm-weather-bg tm-weather-video-stack${l!=="fast"?` is-${l}`:""}`,children:[s.jsx("video",{ref:o,className:"tm-weather-video tm-weather-video-slow",src:i,loop:!0,muted:!0,playsInline:!0,preload:"metadata","aria-hidden":!0}),s.jsx("video",{ref:a,className:"tm-weather-video tm-weather-video-fast",src:i,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata","aria-hidden":!0})]}),s.jsx("div",{className:"tm-weather-bg",style:{background:t.gradient,opacity:i?.45:1}}),!r&&s.jsx("div",{className:"tm-weather-bg",style:{background:"linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)"}})]})}function ON({onConfigure:e}){return s.jsx("button",{type:"button",className:"tm-card tm-weather-widget empty",onClick:e,style:{cursor:e?"pointer":"default"},children:s.jsx("div",{className:"tm-weather-content",children:s.jsxs("div",{className:"tm-placeholder-widget",children:[s.jsx(ua,{size:32}),s.jsx("span",{className:"tm-text-sm",children:"Wetter konfigurieren"})]})})})}function If({slots:e,compact:t=!1,className:n=""}){return s.jsx("div",{className:`${t?"tm-weather-day-strip":"tm-weather-hourly"}${n?` ${n}`:""}`,children:e.map(r=>s.jsxs("div",{className:`${t?"tm-weather-slot":"tm-weather-hourly-slot"}${r.label==="Jetzt"?" now":""}`,children:[s.jsx("span",{className:"tm-weather-slot-time",children:r.label}),gd(r.condition,{size:t?14:22,strokeWidth:1.75}),s.jsxs("span",{className:"tm-weather-slot-temp",children:[r.temp,"°"]})]},r.datetime||`${r.label}-${r.hour}`))})}function FN({forecast:e}){if(!e.length)return null;const t=e.flatMap(a=>[a.high,a.low]).filter(a=>a!=null),n=Math.min(...t),r=Math.max(...t),i=r-n||1;return s.jsxs("div",{children:[s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{marginBottom:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},children:"10-Tage-Vorschau"}),s.jsx("div",{className:"tm-weather-daily-list",children:e.slice(0,10).map((a,o)=>{const l=a.datetime?Pn(a.datetime):null,c=l?lw(l)?"Heute":st(l,"EEE",{locale:En}):`Tag ${o+1}`,u=((a.low??n)-n)/i*100,d=((a.high??r)-(a.low??n))/i*100;return s.jsxs("div",{className:"tm-weather-daily-row",children:[s.jsx("span",{className:"tm-weather-daily-day",children:c}),s.jsx("div",{className:"tm-weather-daily-bar",children:s.jsx("div",{className:"tm-weather-daily-bar-fill",style:{left:`${u}%`,width:`${Math.max(d,8)}%`}})}),gd(a.condition,{size:20,strokeWidth:1.75}),s.jsx("span",{className:"tm-weather-daily-temp",children:a.low!=null?`${Math.round(a.low)}°`:"—"}),s.jsx("span",{className:"tm-weather-daily-temp high",children:a.high!=null?`${Math.round(a.high)}°`:"—"})]},a.datetime||o)})})]})}function BN({data:e,onClose:t,hass:n,appearance:r}){var a;const i=ws(e.condition,new Date().getHours(),r);return s.jsxs("div",{className:"tm-weather-overlay",onClick:t,children:[s.jsx("div",{className:"tm-weather-overlay-backdrop"}),s.jsxs("div",{className:"tm-weather-expanded",onClick:o=>o.stopPropagation(),role:"dialog","aria-label":"Wetterdetails",children:[s.jsxs("div",{className:"tm-weather-expanded-header",children:[s.jsx(DN,{condition:e.condition,meta:i,hass:n}),s.jsx("button",{type:"button",className:"tm-weather-expanded-close",onClick:t,"aria-label":"Schließen",children:s.jsx(Ye,{size:18})}),s.jsx("div",{className:"tm-weather-location",children:e.name}),s.jsxs("div",{className:"tm-weather-expanded-temp",children:[e.temp!=null?Math.round(e.temp):"—","°"]}),s.jsx("div",{className:"tm-weather-condition",children:i.label}),e.today&&s.jsxs("div",{className:"tm-weather-hilo",children:["H:",e.today.high!=null?Math.round(e.today.high):"—","° · L:",e.today.low!=null?Math.round(e.today.low):"—","°"]})]}),s.jsxs("div",{className:"tm-weather-expanded-body",children:[s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{marginBottom:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},children:"Heute"}),s.jsx(If,{slots:e.dayPreview}),s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{marginTop:"1.5rem",marginBottom:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},children:"Nächste Stunden"}),s.jsx(If,{slots:e.hourlyPreview.slice(0,8)}),s.jsxs("div",{className:"tm-weather-stats",children:[s.jsx(Ta,{label:"Luftfeuchtigkeit",value:e.humidity!=null?`${e.humidity}%`:"—",icon:yf}),s.jsx(Ta,{label:"Wind",value:e.windSpeed!=null?`${e.windSpeed} km/h`:"—",icon:Cc}),s.jsx(Ta,{label:"Luftdruck",value:e.pressure!=null?`${e.pressure} hPa`:"—",icon:md}),s.jsx(Ta,{label:"Niederschlag",value:((a=e.today)==null?void 0:a.precipitation)!=null?`${e.today.precipitation}%`:"—",icon:yf})]}),s.jsx(FN,{forecast:e.forecast})]})]})]})}function Ta({label:e,value:t,icon:n}){return s.jsxs("div",{className:"tm-weather-stat",children:[s.jsx("span",{className:"tm-weather-stat-label",children:e}),s.jsxs("span",{className:"tm-weather-stat-value tm-flex-center tm-gap-2",style:{justifyContent:"flex-start"},children:[s.jsx(n,{size:16,style:{opacity:.6}}),t]})]})}const QN=5.25,zf=.6;function WN(e){const[t,n]=b.useState(4);return b.useEffect(()=>{const r=e.current;if(!r||typeof ResizeObserver>"u")return;const i=new ResizeObserver(([a])=>{const o=parseFloat(getComputedStyle(r).fontSize)||16,l=a.contentRect.width/o,c=Math.floor((l+zf)/(QN+zf));n(Math.min(6,Math.max(3,c)))});return i.observe(r),()=>i.disconnect()},[e]),t}function ur(e){return e!=null?`${Math.round(e)}°`:"—"}function Mf({title:e,items:t,renderItem:n,sectionClass:r}){return t.length?s.jsxs("section",{className:`tm-weather-card-section ${r}`,children:[s.jsxs("div",{className:"tm-weather-card-section-head",children:[s.jsx("span",{children:e}),s.jsx(B0,{className:"tm-weather-card-section-chevron"})]}),s.jsx("div",{className:"tm-weather-card-tiles",style:{"--tm-weather-tiles":t.length},children:t.map(n)})]}):null}function UN({data:e,title:t,location:n,editMode:r,onConfigure:i,onExpand:a}){const o=b.useRef(null),l=WN(o),c=new Date().getHours(),u=e.upcomingHours.slice(0,l),d=e.upcomingDays.slice(0,l),m=ws(e.condition,c).label;return s.jsx("button",{type:"button",className:`tm-card tm-weather-widget tm-weather-card tm-weather-card--${MN(e.condition,c)}`,onClick:()=>{if(r){i==null||i();return}a()},"aria-label":"Wetterdetails öffnen",children:s.jsxs("div",{className:"tm-weather-card-inner",children:[s.jsxs("div",{className:"tm-weather-card-summary",children:[s.jsxs("div",{className:"tm-weather-card-head",children:[s.jsx("div",{className:"tm-weather-card-title",children:t}),n&&s.jsxs("div",{className:"tm-weather-card-location",children:[s.jsx(YC,{className:"tm-weather-card-location-icon"}),s.jsx("span",{children:n})]})]}),s.jsxs("div",{className:"tm-weather-card-now",children:[s.jsx("div",{className:"tm-weather-card-temp",children:ur(e.temp)}),s.jsx("div",{className:"tm-weather-card-condition",children:m}),e.today&&s.jsxs("div",{className:"tm-weather-card-hilo",children:[s.jsxs("span",{className:"tm-weather-card-hilo-item tm-weather-card-hilo-item--high",children:[s.jsx(PC,{}),ur(e.today.high)]}),s.jsxs("span",{className:"tm-weather-card-hilo-item tm-weather-card-hilo-item--low",children:[s.jsx(EC,{}),ur(e.today.low)]})]})]}),s.jsx("div",{className:"tm-weather-card-art","aria-hidden":"true",children:s.jsx("img",{src:ll(e.condition,c),alt:"",draggable:"false"})})]}),s.jsxs("div",{className:"tm-weather-card-forecast",ref:o,children:[s.jsx(Mf,{title:`Nächste ${u.length} Stunden`,sectionClass:"tm-weather-card-section--hours",items:u,renderItem:f=>s.jsxs("div",{className:"tm-weather-card-tile",children:[s.jsx("span",{className:"tm-weather-card-tile-label",children:f.label}),s.jsx("img",{className:"tm-weather-card-tile-icon",src:ll(f.condition,f.hour),alt:"",draggable:"false"}),s.jsx("span",{className:"tm-weather-card-tile-temp",children:ur(f.temp)})]},f.datetime||f.label)}),s.jsx(Mf,{title:`Nächste ${d.length} Tage`,sectionClass:"tm-weather-card-section--days",items:d,renderItem:f=>s.jsxs("div",{className:"tm-weather-card-tile",children:[s.jsx("span",{className:"tm-weather-card-tile-label tm-weather-card-tile-label--day",children:f.label}),s.jsx("img",{className:"tm-weather-card-tile-icon",src:ll(f.condition,12),alt:"",draggable:"false"}),s.jsx("span",{className:"tm-weather-card-tile-temp",children:ur(f.high)}),s.jsx("span",{className:"tm-weather-card-tile-low",children:ur(f.low)})]},f.datetime)})]})]})})}function HN(e,t){var r;return String(t||((r=e==null?void 0:e.attributes)==null?void 0:r.friendly_name)||"").trim().replace(/^(forecast|wettervorhersage)\s+/i,"")}function VN({entityId:e,onConfigure:t,editMode:n=!1,title:r="",location:i=""}){var x;const[a,o]=b.useState(!1),{hass:l,getEntity:c,revision:u}=We(),{config:d}=ke(),m=e||((x=d.weather)==null?void 0:x.entity_id)||"",f=m?c(m):null,g=AN(l,m,f),v=SN(l,m,f),w=b.useMemo(()=>f?xE(f,g,v):null,[f,g,v,u]);return!m||!w?s.jsx(ON,{onConfigure:t}):s.jsxs(s.Fragment,{children:[s.jsx(UN,{data:w,title:r||"Wetter",location:HN(f,i),editMode:n,onConfigure:t,onExpand:()=>o(!0)}),a&&s.jsx(BN,{data:w,onClose:()=>o(!1),hass:l,appearance:d.appearance})]})}const qN="/the-monitor.png";function KN(e,t){const n=e.media_position,r=e.media_duration;return typeof n=="number"&&typeof r=="number"&&r>0?Math.min(100,Math.max(0,n/r*100)):t?78:0}function YN(e){return e.device_manufacturer||e.app_name||e.source||""}function JN({compact:e=!1,entityId:t,onConfigure:n}){var C;const{hass:r,getEntity:i}=We(),{config:a}=ke(),o=t||((C=a.mediaPlayer)==null?void 0:C.entity_id);if(!o)return s.jsx("button",{type:"button",className:`tm-card tm-media-widget empty${e?" tm-media-widget--compact":""}`,onClick:n,children:s.jsxs("div",{className:"tm-placeholder-widget",children:[s.jsx(ua,{size:e?24:32}),s.jsx("span",{className:"tm-text-sm",children:"Medienplayer konfigurieren"})]})});const l=i(o),{attributes:c,state:u}=l,d=u==="playing",m=u!=="off"&&u!=="unavailable",f=c.media_title||c.media_content_id||"Keine Wiedergabe",g=c.media_artist||"",v=$r(r,c.entity_picture),w=KN(c,d),x=YN(c),y=()=>yx(r,o),p=()=>vx(r,o),h=()=>bx(r,o),k=()=>{u==="off"?wg(r,o):xg(r,o)};return s.jsx("div",{className:`tm-media-widget${e?" tm-media-widget--compact":""}`,children:s.jsxs("div",{className:"tm-card tm-media-card",children:[s.jsxs("div",{className:"tm-media-header",children:[s.jsxs("div",{className:"tm-media-header-text",children:[s.jsx("div",{className:"tm-media-device-name",children:l.name}),x&&s.jsx("div",{className:"tm-media-device-brand",children:x})]}),s.jsx("button",{type:"button",className:`tm-media-power-btn${m?" on":""}`,onClick:k,"aria-label":m?"Ausschalten":"Einschalten",children:s.jsx(J0,{size:16,strokeWidth:2})})]}),s.jsxs("div",{className:"tm-media-body",children:[s.jsxs("div",{className:"tm-media-panel",children:[s.jsxs("div",{className:"tm-media-track",children:[s.jsx("div",{className:"tm-media-artwork",style:v?{backgroundImage:`url("${v}")`}:void 0,"aria-hidden":!0}),s.jsxs("div",{className:"tm-media-track-meta",children:[s.jsx("div",{className:"tm-media-track-title",children:f}),g&&s.jsx("div",{className:"tm-media-track-artist",children:g})]})]}),s.jsxs("div",{className:"tm-media-controls",children:[s.jsx("button",{type:"button",onClick:h,className:"tm-media-control-btn","aria-label":"Zurück",children:s.jsx(eE,{size:e?16:18})}),s.jsx("button",{type:"button",onClick:y,className:"tm-media-control-btn tm-media-control-play","aria-label":d?"Pause":"Abspielen",children:d?s.jsxs("div",{className:"tm-media-pause-bars",children:[s.jsx("span",{}),s.jsx("span",{})]}):s.jsx(hd,{size:e?16:18,style:{marginLeft:"2px",fill:"currentColor"}})}),s.jsx("button",{type:"button",onClick:p,className:"tm-media-control-btn","aria-label":"Weiter",children:s.jsx(tE,{size:e?16:18})})]}),s.jsx("div",{className:"tm-media-progress","aria-hidden":!0,children:s.jsxs("div",{className:"tm-media-progress-track",children:[s.jsx("div",{className:"tm-media-progress-fill",style:{width:`${w}%`}}),s.jsx("div",{className:"tm-media-progress-thumb",style:{left:`${w}%`}})]})})]}),s.jsx("div",{className:"tm-media-device-wrap",children:s.jsx("img",{src:qN,alt:"",className:"tm-media-device-img"})})]})]})})}const ZN=15e3;function GN({hass:e,entity:t,className:n,fitMode:r="cover"}){const i=b.useRef(null),a=b.useMemo(()=>({entity_id:t.id,state:t.state,attributes:t.attributes}),[t.id,t.state,t.attributes]);return b.useEffect(()=>{const o=i.current;o&&(o.hass=e,o.stateObj=a,o.fitMode=r,o.muted=!0)},[e,a,r]),s.jsx("ha-camera-stream",{ref:i,className:n,muted:!0})}function XN(e,t,n,{isMock:r,isConnected:i}){var p;const[a,o]=b.useState(0),[l,c]=b.useState(!1),u=typeof customElements<"u"&&customElements.get("ha-camera-stream"),d=!!(t&&Nx(e,t)),m=!!(u&&i&&!r&&t&&((p=e==null?void 0:e.states)!=null&&p[t])),f=d&&i&&!r&&!m?jx(e,t):null,g=!!(f&&!l),v=!!(i&&!r&&t&&!l&&!m&&!g),w=v?Lm(e,t,{cacheBust:a}):r&&t?Lm(e,t,{cacheBust:a}):null,x=m||g,y=!!(m||g||w);return b.useEffect(()=>{c(!1),o(0)},[t]),b.useEffect(()=>{if(!v)return;const h=setInterval(()=>o(k=>k+1),ZN);return()=>clearInterval(h)},[v]),{tick:a,failed:l,setFailed:c,useHaStream:m,useMjpegStream:g,useSnapshotFallback:v,streamUrl:f,snapshotSrc:w,isLive:x,hasFeed:y}}function m1({hass:e,entity:t,entityId:n,isMock:r,isConnected:i,feed:a,fitMode:o="cover",streamClassName:l="tm-camera-stream",imageClassName:c="tm-camera-feed"}){const{tick:u,failed:d,setFailed:m,useHaStream:f,useMjpegStream:g,streamUrl:v,snapshotSrc:w}=a;return f?s.jsx(GN,{hass:e,entity:t,className:l,fitMode:o}):g?s.jsx("img",{src:v,className:c,alt:(t==null?void 0:t.name)||"Kamera",decoding:"async",onError:()=>m(!0)}):w?s.jsx("img",{src:w,className:c,alt:(t==null?void 0:t.name)||"Kamera",loading:"lazy",decoding:"async",onError:()=>m(!0)},`${n}-${u}`):s.jsxs("div",{className:"tm-placeholder-widget",children:[s.jsx(ni,{size:32}),s.jsx("span",{className:"tm-text-sm",children:d?"Kamera nicht erreichbar":"Kamerabild nicht verfügbar"})]})}function f1({cameraName:e,isLive:t}){return s.jsxs("div",{className:"tm-camera-badge",children:[s.jsx(ni,{size:12,className:"tm-camera-badge-icon"}),s.jsx("span",{children:e}),t&&s.jsx("span",{className:"tm-camera-live",children:"LIVE"})]})}function p1({cameraIds:e,activeEntityId:t,getEntity:n,onSelect:r}){return e.length<=1?null:s.jsx("div",{className:"tm-camera-switcher",onClick:i=>i.stopPropagation(),children:e.map((i,a)=>{const o=n(i),l=IS(o.name,a),c=i===t;return s.jsx("button",{type:"button",className:`tm-camera-switch-btn${c?" active":""}`,onClick:u=>{u.stopPropagation(),r(i)},"aria-label":`${o.name} anzeigen`,"aria-pressed":c,children:s.jsx("span",{className:"tm-camera-switch-btn-visual",children:l})},i)})})}function _N({hass:e,entity:t,entityId:n,cameraIds:r,activeEntityId:i,getEntity:a,isMock:o,isConnected:l,feed:c,cameraName:u,onClose:d,onSelectCamera:m}){return b.useEffect(()=>{const f=g=>{g.key==="Escape"&&d()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[d]),s.jsxs("div",{className:"tm-camera-overlay",onClick:d,children:[s.jsx("div",{className:"tm-camera-overlay-backdrop"}),s.jsxs("div",{className:"tm-camera-expanded",onClick:f=>f.stopPropagation(),role:"dialog","aria-label":`${u} Vollbild`,children:[s.jsx("button",{type:"button",className:"tm-camera-expanded-close",onClick:d,"aria-label":"Schließen",children:s.jsx(Ye,{size:18})}),s.jsx(p1,{cameraIds:r,activeEntityId:i,getEntity:a,onSelect:m}),c.hasFeed&&!c.failed&&s.jsx(f1,{cameraName:u,isLive:c.isLive}),s.jsx(m1,{hass:e,entity:t,entityId:n,isMock:o,isConnected:l,feed:c,fitMode:"contain",streamClassName:"tm-camera-stream",imageClassName:"tm-camera-feed"})]})]})}function $N({onSettings:e,entityId:t,entityIds:n,widget:r,onConfigure:i}){var C;const{hass:a,isMock:o,isConnected:l,getEntity:c}=We(),{config:u}=ke(),d=i||e,m=b.useMemo(()=>{var E,N;if(r)return E0(r);const j=(n||[]).filter(Boolean);return j.length?j.slice(0,3):t||(E=u.camera)!=null&&E.entity_id?[t||((N=u.camera)==null?void 0:N.entity_id)]:[]},[r,n,t,(C=u.camera)==null?void 0:C.entity_id]),[f,g]=b.useState(()=>m[0]||""),[v,w]=b.useState(!1);b.useEffect(()=>{if(!m.length){g("");return}m.includes(f)||g(m[0])},[m,f]);const x=f||m[0]||"",y=x?It(a,x):null,p=(y==null?void 0:y.name)||"Kamera",h=XN(a,x,y,{isMock:o,isConnected:l}),k=()=>{h.hasFeed&&!h.failed&&w(!0)};return m.length?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:`tm-card-dark tm-camera-widget${h.hasFeed&&!h.failed?" tm-camera-widget--clickable":""}`,onClick:k,onKeyDown:j=>{(j.key==="Enter"||j.key===" ")&&h.hasFeed&&!h.failed&&(j.preventDefault(),k())},role:h.hasFeed&&!h.failed?"button":void 0,tabIndex:h.hasFeed&&!h.failed?0:void 0,"aria-label":h.hasFeed&&!h.failed?`${p} vergrößern`:void 0,children:[s.jsx(m1,{hass:a,entity:y,entityId:x,isMock:o,isConnected:l,feed:h}),s.jsx(p1,{cameraIds:m,activeEntityId:x,getEntity:c,onSelect:g}),h.hasFeed&&!h.failed&&s.jsx(f1,{cameraName:p,isLive:h.isLive})]}),v&&s.jsx(_N,{hass:a,entity:y,entityId:x,cameraIds:m,activeEntityId:x,getEntity:c,isMock:o,isConnected:l,feed:h,cameraName:p,onClose:()=>w(!1),onSelectCamera:g})]}):s.jsx("div",{className:"tm-card-dark tm-camera-widget",children:s.jsxs("div",{className:"tm-placeholder-widget",onClick:d,role:"button",tabIndex:0,children:[s.jsx(ni,{size:32}),s.jsx("span",{className:"tm-text-sm",children:"Kamera konfigurieren"})]})})}function e3({entityId:e,onConfigure:t}){var k;const{hass:n,isConnected:r,isMock:i,revision:a}=We(),{config:o}=ke(),l=e||((k=o.shoppingList)==null?void 0:k.entity_id),[c,u]=b.useState([]),[d,m]=b.useState(""),[f,g]=b.useState(!1),[v,w]=b.useState(!1),x=b.useCallback(async()=>{if(!l){u([]);return}if(i){u(Mx);return}if(r){w(!0);try{const C=await wx(n,l);u(C)}catch{u([])}finally{w(!1)}}},[n,l,r,i]);if(b.useEffect(()=>{x()},[x,a]),!l)return s.jsx("button",{type:"button",className:"tm-card tm-card-dark empty",style:{height:"100%",padding:"1.25rem"},onClick:t,children:s.jsxs("div",{className:"tm-placeholder-widget",children:[s.jsx(ua,{size:32}),s.jsx("span",{className:"tm-text-sm",children:"Einkaufsliste konfigurieren"})]})});const y=async C=>{C.status!=="completed"&&(r?(await xx(n,l,C.uid),await x()):u(j=>j.map(E=>E.uid===C.uid?{...E,status:"completed"}:E)))},p=async()=>{d.trim()&&(r?(await kx(n,l,d.trim()),await x()):u(C=>[...C,{uid:String(Date.now()),summary:d.trim(),status:"needs_action"}]),m(""),g(!1))},h=c.filter(C=>C.status!=="completed");return s.jsxs("div",{className:"tm-card tm-card-dark",style:{height:"100%",padding:"1.25rem",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{marginBottom:"1rem"},children:[s.jsxs("div",{className:"tm-flex-center tm-gap-2",children:[s.jsx(bs,{size:20,style:{color:"#fb923c"}}),s.jsx("span",{className:"tm-font-bold",style:{fontSize:"1.125rem"},children:"Einkauf"})]}),s.jsx("button",{type:"button",className:"tm-flex-center",style:{background:"rgba(255,255,255,0.1)",padding:"0.5rem",borderRadius:"9999px",border:"none",color:"white",cursor:"pointer",minWidth:40,minHeight:40},onClick:()=>g(!f),children:s.jsx(ct,{size:16})})]}),f&&s.jsxs("div",{className:"tm-flex-row tm-gap-2",style:{marginBottom:"0.75rem"},children:[s.jsx("input",{className:"tm-input",type:"text",placeholder:"Neuer Eintrag…",value:d,onChange:C=>m(C.target.value),onKeyDown:C=>C.key==="Enter"&&p()}),s.jsx("button",{type:"button",className:"tm-btn-primary",style:{padding:"0.5rem 1rem",minHeight:"auto"},onClick:p,children:"OK"})]}),s.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[v&&s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{textAlign:"center",padding:"1rem"},children:"Lädt…"}),!v&&h.length===0&&s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{textAlign:"center",padding:"1rem"},children:"Liste ist leer"}),c.map(C=>s.jsxs("button",{type:"button",onClick:()=>y(C),className:"tm-flex-row tm-items-center tm-gap-3",style:{width:"100%",padding:"0.75rem",borderRadius:"0.75rem",border:"none",cursor:"pointer",textAlign:"left",background:"rgba(255,255,255,0.05)"},children:[s.jsx("div",{style:{width:"1.25rem",height:"1.25rem",borderRadius:"9999px",border:"2px solid",display:"flex",alignItems:"center",justifyContent:"center",borderColor:C.status==="completed"?"#f97316":"rgba(255,255,255,0.3)",background:C.status==="completed"?"#f97316":"transparent"},children:C.status==="completed"&&s.jsx(ud,{size:12,style:{color:"black"}})}),s.jsx("span",{className:"tm-font-bold tm-text-sm",style:{color:C.status==="completed"?"rgba(255,255,255,0.3)":"rgba(255,255,255,0.9)",textDecoration:C.status==="completed"?"line-through":"none"},children:C.summary})]},C.uid))]})]})}function t3(e){const t=new Map;return e.forEach((n,r)=>t.set(n.id,r)),t}function n3(e,t){const n=new Array(e.length).fill(0),r=new Array(e.length).fill(0);return t.forEach(i=>{r[i.source]+=i.value,n[i.target]+=i.value}),e.map((i,a)=>Math.max(n[a],r[a],.001))}function r3(e,t,n,r){const i=[...e];return i.some(o=>t[o].sort!=null)?(i.sort((o,l)=>(t[o].sort??0)-(t[l].sort??0)),i):(i.sort((o,l)=>{const c=n.filter(f=>f.source===o||f.target===o),u=n.filter(f=>f.source===l||f.target===l),d=c.reduce((f,g)=>f+(g.source===o?g.target:g.source),0)/(c.length||1),m=u.reduce((f,g)=>f+(g.source===l?g.target:g.source),0)/(u.length||1);return d-m||r[l]-r[o]}),i)}function i3(e,t,n,r){const i=(e+n)/2;return`M${e},${t}C${i},${t} ${i},${r} ${n},${r}`}function a3(e,t,n,r,i,a){const o=(e+r)/2;return[`M${e},${t}`,`C${o},${t} ${o},${i} ${r},${i}`,`L${r},${a}`,`C${o},${a} ${o},${n} ${e},${n}`,"Z"].join(" ")}function o3(e,t,n,r={}){const{nodeWidth:i=14,nodePadding:a=18,margin:o={top:28,right:110,bottom:20,left:110}}=r,l=e.nodes.map(E=>({...E})),c=t3(l),u=e.links.map(E=>({...E,source:c.get(E.source),target:c.get(E.target)})),d=n3(l,u),m=new Map;l.forEach((E,N)=>{const M=E.column??0;m.has(M)||m.set(M,[]),m.get(M).push(N)});const f=[...m.keys()].sort((E,N)=>E-N),g=Math.max(1,t-o.left-o.right),v=Math.max(1,n-o.top-o.bottom),w=f.length,x=w>1?g/(w-1):0,y=Math.max(...d,1),p=E=>E/y*(v*.72);f.forEach((E,N)=>{const M=r3(m.get(E),l,u,d),P=M.reduce((H,G)=>H+p(d[G]),0)+a*Math.max(0,M.length-1);let F=o.top+(v-P)/2;M.forEach(H=>{const G=p(d[H]);l[H].x=o.left+N*x,l[H].y=F,l[H].height=G,l[H].width=i,l[H].value=d[H],F+=G+a})});const h=new Array(l.length).fill(0),k=new Array(l.length).fill(0),C=u.map(E=>{const N=l[E.source],M=l[E.target],P=p(E.value),F=N.y+h[E.source],H=M.y+k[E.target];h[E.source]+=P,k[E.target]+=P;const G=N.x+N.width,_=M.x;return{...E,path:a3(G,F,F+P,_,H,H+P),centerPath:i3(G,F+P/2,_,H+P/2),value:E.value,color:N.color||"#94a3b8"}}),j=f.length?f[f.length-1]:0;return{nodes:l,links:C,maxValue:y,maxColumn:j}}function s3(e){const[t,n]=b.useState({width:640,height:360});return b.useEffect(()=>{const r=e.current;if(!r)return;const i=()=>{const o=r.getBoundingClientRect();o.width>0&&o.height>0&&n({width:o.width,height:o.height})};i();const a=new ResizeObserver(i);return a.observe(r),()=>a.disconnect()},[e]),t}function Lf(e,t){return e.column===0?e.x-10:(e.column===t,e.x+e.width+10)}function Tf(e,t){return e.column===0?"end":(e.column===t&&t>0,"start")}function l3({widget:e}){const t=b.useRef(null),{width:n,height:r}=s3(t),i=M5,a=(e==null?void 0:e.label)||i.title,o=b.useMemo(()=>o3(i,n,r),[i,n,r]),l=b.useMemo(()=>R5(i),[i]),c=b.useMemo(()=>i.nodes.filter(u=>u.column===0),[i]);return s.jsx("div",{className:"tm-card tm-sankey-widget",children:s.jsxs("div",{className:"tm-sankey-content",children:[s.jsx("div",{className:"tm-sankey-header",children:s.jsxs("div",{className:"tm-sankey-header-main",children:[s.jsx(da,{size:22,style:{opacity:.75,flexShrink:0},"aria-hidden":!0}),s.jsxs("div",{children:[s.jsx("div",{className:"tm-weather-location",children:a}),s.jsx("div",{className:"tm-sankey-total-value",children:er(l,i.unit)}),s.jsx("div",{className:"tm-weather-hilo",children:i.subtitle})]})]})}),s.jsx("div",{ref:t,className:"tm-sankey-canvas",children:s.jsxs("svg",{width:n,height:r,viewBox:`0 0 ${n} ${r}`,role:"img","aria-label":`${a}: Energiefluss-Diagramm`,children:[s.jsx("defs",{children:o.links.map((u,d)=>s.jsxs("linearGradient",{id:`tm-sankey-grad-${d}`,gradientUnits:"userSpaceOnUse",x1:o.nodes[u.source].x,x2:o.nodes[u.target].x,children:[s.jsx("stop",{offset:"0%",stopColor:u.color,stopOpacity:"0.55"}),s.jsx("stop",{offset:"100%",stopColor:o.nodes[u.target].color||u.color,stopOpacity:"0.45"})]},`grad-${d}`))}),o.links.map((u,d)=>s.jsx("path",{d:u.path,fill:`url(#tm-sankey-grad-${d})`,className:"tm-sankey-link"},`link-${d}`)),o.nodes.map(u=>s.jsxs("g",{className:"tm-sankey-node",children:[s.jsx("rect",{x:u.x,y:u.y,width:u.width,height:u.height,fill:u.color,rx:3}),s.jsx("text",{x:Lf(u,o.maxColumn),y:u.y+u.height/2,textAnchor:Tf(u,o.maxColumn),dominantBaseline:"middle",className:"tm-sankey-node-label",children:u.name}),s.jsx("text",{x:Lf(u,o.maxColumn),y:u.y+u.height/2+14,textAnchor:Tf(u,o.maxColumn),dominantBaseline:"middle",className:"tm-sankey-node-value",children:er(u.value,i.unit)})]},u.id))]})}),s.jsx("div",{className:"tm-sankey-legend",children:c.map(u=>s.jsxs("span",{className:"tm-sankey-legend-item",children:[s.jsx("span",{className:"tm-sankey-legend-swatch",style:{background:u.color}}),u.name]},u.id))})]})})}const Rf={opacity:.7,color:"rgba(255,255,255,0.75)"};function Df({name:e,value:t,unit:n,color:r}){return s.jsxs("div",{className:"tm-energy-metric-row",children:[r&&s.jsx("span",{className:"tm-energy-metric-dot",style:{background:r}}),s.jsx("span",{className:"tm-energy-metric-name",children:e}),s.jsx("span",{className:"tm-energy-metric-value",children:er(t,n)})]})}function c3({data:e,title:t}){const n=e.inputs.reduce((i,a)=>i+a.value,0),r=e.outputs.reduce((i,a)=>i+a.value,0);return s.jsxs("div",{className:"tm-quick-action tm-energy-tile",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{width:"100%"},children:[s.jsx(CC,{size:24,style:Rf}),s.jsx(jC,{size:20,style:{...Rf,opacity:.45}})]}),s.jsxs("div",{className:"tm-flex-col",style:{marginTop:"auto",minHeight:0,gap:"0.625rem"},children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-font-bold",style:{fontSize:"1.125rem",lineHeight:1.25},children:t}),s.jsxs("div",{className:"tm-text-xs tm-opacity-70",style:{marginTop:"0.25rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:["In ",er(n,e.unit)," · Out ",er(r,e.unit)]})]}),s.jsxs("div",{className:"tm-energy-metric-cols",children:[s.jsxs("div",{className:"tm-energy-metric-col",children:[s.jsx("div",{className:"tm-text-xs tm-opacity-50",style:{textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.35rem"},children:"Input"}),e.inputs.map(i=>s.jsx(Df,{name:i.name,value:i.value,unit:e.unit,color:i.color},i.id))]}),s.jsxs("div",{className:"tm-energy-metric-col",children:[s.jsx("div",{className:"tm-text-xs tm-opacity-50",style:{textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.35rem"},children:"Output"}),e.outputs.map(i=>s.jsx(Df,{name:i.name,value:i.value,unit:e.unit,color:i.color},i.id))]})]})]})]})}function Of({name:e,value:t,unit:n,imageUrl:r,stateLabel:i,icon:a,sources:o,compact:l=!1}){return s.jsxs("div",{className:`tm-energy-device-card${l?" tm-energy-device-card--mini":""}`,children:[r?s.jsx("img",{src:r,alt:"",className:"tm-energy-device-card-bg"}):s.jsx("div",{className:"tm-energy-device-card-bg tm-energy-device-card-bg--empty"}),s.jsx("div",{className:"tm-energy-device-card-shade","aria-hidden":!0}),s.jsxs("div",{className:"tm-energy-device-card-content",children:[s.jsxs("div",{className:"tm-energy-device-card-top",children:[s.jsx("span",{className:"tm-energy-device-card-icon",children:s.jsx(a,{size:l?15:17,"aria-hidden":!0})}),s.jsx("span",{className:"tm-energy-device-state",children:i})]}),s.jsxs("div",{className:"tm-energy-device-card-body",children:[s.jsx("div",{className:"tm-font-bold",style:{fontSize:l?"0.9375rem":"1.0625rem",lineHeight:1.25},children:e}),s.jsx("div",{className:"tm-text-xs tm-opacity-70",style:{marginTop:"0.2rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:er(t,n)}),(o==null?void 0:o.length)>0&&s.jsx("div",{className:"tm-text-xs tm-opacity-50",style:{marginTop:"0.3rem",lineHeight:1.35},children:o.map(c=>`${c.name} ${er(c.value,n)}`).join(" · ")})]})]})]})}function u3({data:e,title:t,widget:n,hass:r}){const{isMock:i}=We(),{config:a}=ke(),[o,l]=e.items,c=Xi(n==null?void 0:n.deviceImages),u=sa(a,c,i),d=Qu(r,u,o.demoCharging),m=Z5(r,c.heatpump.lightEntity,l.demoLightOn),f=G5(r,c,d),g=X5(r,c,m);return s.jsxs("div",{className:"tm-energy-device-stack",children:[s.jsx(Of,{name:t,value:o.value,unit:e.unit,imageUrl:f,stateLabel:d?Um.charging:Um.idle,icon:zC,sources:o.sources}),l&&s.jsx(Of,{name:l.name,value:l.value,unit:e.unit,imageUrl:g,stateLabel:m?Hm.lightOn:Hm.lightOff,icon:QC,sources:l.sources,compact:!0})]})}function d3({widget:e,hass:t}){const n=(e==null?void 0:e.tileKind)||"inputs-outputs",r=To[n]||To["inputs-outputs"],i=D5(n),a=(e==null?void 0:e.label)||r.label;return n==="ev-heatpump"?s.jsx(u3,{data:i,title:a,widget:e,hass:t}):s.jsx(c3,{data:i,title:a})}const m3="data:image/webp;base64,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",h1=new Intl.NumberFormat("de-DE",{maximumFractionDigits:0}),f3=new Intl.NumberFormat("de-DE",{maximumFractionDigits:1}),p3=new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"});function h3(e){return e.charging?{text:"Wird geladen",tone:"charging"}:e.connected===!0?{text:"Angeschlossen",tone:"idle"}:e.connected===!1?{text:"Nicht angeschlossen",tone:"off"}:{text:"Lädt nicht",tone:"off"}}function g3(e){const t=[{key:"power",icon:da,value:e.charging?Uu(e.powerWatts):"0 kW",label:"Ladeleistung"}];return e.remainingSeconds!=null&&t.push({key:"remaining",icon:TC,value:K5(e.remainingSeconds),label:`bis ${e.limitSoc}%`}),e.lastTripKm!=null?t.push({key:"trip",icon:$C,value:`${h1.format(e.lastTripKm)} km`,label:"Letzte Fahrt"}):e.sessionKwh!=null&&t.push({key:"energy",icon:Ac,value:`${f3.format(e.sessionKwh)} kWh`,label:"Geladen"}),e.cost!=null&&t.push({key:"cost",icon:FC,value:p3.format(e.cost),label:e.costIsSession?"Ladevorgang":"Kosten heute"}),t.slice(0,4)}function y3({widget:e,hass:t}){const{isMock:n}=We(),{config:r}=ke(),i=q5(t,r,n),a=h3(i),o=g3(i),l=(e==null?void 0:e.label)||i.label,c=i.soc;let u="—",d="",m="Keine Fahrzeugdaten";return i.rangeKm!=null?(u=h1.format(i.rangeKm),d="km",m=c!=null?`Reichweite (${c}%)`:"Reichweite"):c!=null&&(u=String(c),d="%",m="Akkustand"),s.jsx("div",{className:`tm-quick-action tm-ev-card tm-ev-card--${a.tone}`,children:s.jsxs("div",{className:"tm-ev-card-inner",children:[s.jsxs("div",{className:"tm-ev-card-head",children:[s.jsx("div",{className:"tm-ev-card-title",children:l}),s.jsxs("div",{className:"tm-ev-card-status",children:[a.tone==="charging"&&s.jsx(da,{className:"tm-ev-card-status-icon",fill:"currentColor",strokeWidth:0}),s.jsx("span",{children:a.text})]})]}),s.jsxs("div",{className:"tm-ev-card-hero",children:[s.jsxs("div",{className:"tm-ev-card-value",children:[u,d&&s.jsx("span",{className:"tm-ev-card-unit",children:d})]}),s.jsx("div",{className:"tm-ev-card-caption",children:m})]}),s.jsx("div",{className:"tm-ev-card-art","aria-hidden":"true",children:s.jsx("img",{src:m3,alt:"",draggable:"false"})}),c!=null&&s.jsxs("div",{className:"tm-ev-card-bar",children:[s.jsx("div",{className:"tm-ev-card-bar-track",children:s.jsx("div",{className:"tm-ev-card-bar-fill",style:{width:`${c}%`}})}),s.jsxs("span",{className:"tm-ev-card-bar-label",children:[c,"%"]})]}),o.length>0&&s.jsx("div",{className:`tm-ev-card-stats tm-ev-card-stats--${o.length}`,children:o.map(({key:f,icon:g,value:v,label:w})=>s.jsxs("div",{className:`tm-ev-card-stat tm-ev-card-stat--${f}`,children:[s.jsx(g,{className:"tm-ev-card-stat-icon"}),s.jsx("div",{className:"tm-ev-card-stat-value",children:v}),s.jsx("div",{className:"tm-ev-card-stat-label",children:w})]},f))})]})})}const dn=[{stroke:"rgb(var(--tm-accent-rgb))",fill:"rgba(var(--tm-accent-rgb), 0.14)"},{stroke:"#fbbf24",fill:"rgba(251, 191, 36, 0.14)"},{stroke:"#34d399",fill:"rgba(52, 211, 153, 0.14)"},{stroke:"#f472b6",fill:"rgba(244, 114, 182, 0.14)"}];function v3(e,t,n){if(!(e!=null&&e.length))return null;if(t<=e[0].t)return{v:e[0].v,t};if(t>=e[e.length-1].t)return{v:e[e.length-1].v,t};for(let r=0;r<e.length-1;r+=1){const i=e[r],a=e[r+1];if(i.t<=t&&a.t>=t){if(n==="binary_sensor")return{v:i.v,t};const o=a.t-i.t||1,l=(t-i.t)/o;return{v:i.v+(a.v-i.v)*l,t}}}return null}function b3(e,t,n,r){if(t)return{min:n,max:r};const i=e.points.map(a=>a.v);return{min:Math.min(...i),max:Math.max(...i)}}function w3(e,t,n,r=3){const i=e.filter(y=>{var p;return((p=y.points)==null?void 0:p.length)>=2});if(!i.length)return null;const a=i.flatMap(y=>y.points),o=Math.min(...a.map(y=>y.t)),l=Math.max(...a.map(y=>y.t)),c=l-o||1,d=[...new Set(i.map(y=>y.unit||""))].length===1,m=a.map(y=>y.v),f=Math.min(...m),g=Math.max(...m),v=t-r*2,w=n-r*2;return{layers:i.map((y,p)=>{const{min:h,max:k}=b3(y,d,f,g),C=k-h||1,j=y.points.map(M=>({x:r+(M.t-o)/c*v,y:r+w-(M.v-h)/C*w,v:M.v,t:M.t})),E=j.map(({x:M,y:P})=>`${M},${P}`).join(" "),N=[`${j[0].x},${n-r}`,...j.map(({x:M,y:P})=>`${M},${P}`),`${j[j.length-1].x},${n-r}`].join(" ");return{id:y.id,domain:y.domain,colorIndex:y.colorIndex??p,coords:j,line:E,area:N,min:h,max:k,yRange:C}}),tMin:o,tMax:l,tSpan:c,width:t,height:n,padding:r,innerW:v,innerH:w,unifiedScale:d,rangeMin:d?f:null,rangeMax:d?g:null}}function x3(e,t,n){if(!e)return null;const r=Math.max(0,Math.min(1,n)),i=e.tMin+r*e.tSpan,a=e.padding+r*e.innerW,o=e.layers.map(l=>{const c=t.find(m=>m.id===l.id);if(!c)return null;const u=v3(c.points,i,c.domain);if(!u)return null;const d=e.padding+e.innerH-(u.v-l.min)/l.yRange*e.innerH;return{entityId:l.id,colorIndex:l.colorIndex,v:u.v,t:u.t,x:a,y:d}}).filter(Boolean);return o.length?{active:!0,time:i,samples:o}:null}const Ff=200,k3=80,A3=32;function Bf(e){const t=Number(e);return Number.isFinite(t)?t.toLocaleString("de-DE",{minimumFractionDigits:0,maximumFractionDigits:1}):String(e)}function g1({points:e,series:t,compact:n=!1,loading:r=!1,showRange:i=!1,domain:a="sensor",onScrubChange:o}){var j,E;const l=b.useRef(null),[c,u]=b.useState(null),d=n?A3:k3,m=b.useMemo(()=>t!=null&&t.length?t:(e==null?void 0:e.length)>=2?[{id:"single",points:e,domain:a,unit:"",colorIndex:0}]:[],[a,e,t]),f=b.useMemo(()=>w3(m,Ff,d),[m,d]),g=m.length>1,v=b.useCallback(N=>{const M=l.current;if(!M||!f)return;const P=M.getBoundingClientRect();if(!P.width)return;const F=(N-P.left)/P.width,H=x3(f,m,F);H&&(u(H),o==null||o(H))},[f,o,m]),w=b.useCallback(()=>{u(null),o==null||o({active:!1,time:null,samples:[]})},[o]),x=b.useCallback(N=>{N.currentTarget.setPointerCapture(N.pointerId),v(N.clientX)},[v]),y=b.useCallback(N=>{N.currentTarget.hasPointerCapture(N.pointerId)&&v(N.clientX)},[v]),p=b.useCallback(N=>{N.currentTarget.hasPointerCapture(N.pointerId)&&N.currentTarget.releasePointerCapture(N.pointerId),w()},[w]),h=b.useCallback(N=>{N.pointerType==="mouse"&&v(N.clientX)},[v]),k=b.useCallback(N=>{N.pointerType!=="mouse"||N.buttons||v(N.clientX)},[v]);if(r&&!m.some(N=>N.points.length>=2))return s.jsx("div",{className:`tm-sensor-sparkline tm-sensor-sparkline--loading${n?" compact":""}`});if(!f)return null;const C=(E=(j=c==null?void 0:c.samples)==null?void 0:j[0])==null?void 0:E.x;return s.jsxs("div",{className:`tm-sensor-sparkline-chart${n?" compact":""}${g?" multi":""}`,children:[s.jsx("div",{ref:l,className:"tm-sensor-sparkline-interactive",onPointerDown:x,onPointerMove:N=>{y(N),k(N)},onPointerUp:p,onPointerCancel:p,onPointerEnter:h,onPointerLeave:w,role:"slider","aria-label":"Verlauf scrubben",tabIndex:-1,children:s.jsxs("svg",{className:"tm-sensor-sparkline",viewBox:`0 0 ${Ff} ${d}`,preserveAspectRatio:"none","aria-hidden":!0,children:[f.layers.map(N=>{const M=dn[N.colorIndex%dn.length];return s.jsxs("g",{children:[!g&&s.jsx("polygon",{className:"tm-sensor-sparkline-area",points:N.area,style:{fill:M.fill}}),s.jsx("polyline",{className:"tm-sensor-sparkline-line",points:N.line,style:{stroke:M.stroke}})]},N.id)}),C!=null&&s.jsxs(s.Fragment,{children:[s.jsx("line",{className:"tm-sensor-sparkline-scrub-line",x1:C,x2:C,y1:0,y2:d}),c.samples.map(N=>{const M=dn[N.colorIndex%dn.length];return s.jsx("circle",{className:"tm-sensor-sparkline-scrub-dot",cx:N.x,cy:N.y,r:n?2.5:3.5,style:{stroke:M.stroke}},N.entityId)})]})]})}),i&&f.rangeMin!=null&&f.rangeMax!=null&&s.jsxs("div",{className:"tm-sensor-sparkline-range",children:[s.jsx("span",{children:Bf(f.rangeMin)}),s.jsx("span",{children:Bf(f.rangeMax)})]}),g&&s.jsx("div",{className:"tm-sensor-sparkline-legend",children:f.layers.map(N=>{const M=dn[N.colorIndex%dn.length],P=m.find(F=>F.id===N.id);return s.jsxs("span",{className:"tm-sensor-sparkline-legend-item",children:[s.jsx("span",{className:"tm-sensor-series-dot",style:{background:M.stroke}}),s.jsx("span",{children:(P==null?void 0:P.label)||N.id})]},N.id)})})]})}function y1(e,t=24){const n=new Date(e);return t>=168?st(n,"EEE dd.MM., HH:mm",{locale:En}):t>=48?st(n,"dd.MM., HH:mm",{locale:En}):st(n,"HH:mm",{locale:En})}const v1=5*60*1e3;function S3(e,t,{enabled:n=!1,hours:r=24,revision:i=0}={}){const[a,o]=b.useState([]),[l,c]=b.useState(!1);return b.useEffect(()=>{if(!n||!t){o([]);return}let u=!1;const d=async()=>{c(!0);try{const f=await S0(e,t,{hours:r});u||o(f)}catch{u||o([])}finally{u||c(!1)}};d();const m=setInterval(d,v1);return()=>{u=!0,clearInterval(m)}},[e,t,n,r,i]),{points:a,loading:l}}function C3(e,t,{enabled:n=!1,hours:r=24,revision:i=0}={}){const[a,o]=b.useState([]),[l,c]=b.useState(!1),u=t.join("|");return b.useEffect(()=>{if(!n||!t.length){o([]);return}let d=!1;const m=async()=>{c(!0);try{const g=await Promise.all(t.map(v=>S0(e,v,{hours:r})));d||o(t.map((v,w)=>({entityId:v,points:g[w]||[]})))}catch{d||o([])}finally{d||c(!1)}};m();const f=setInterval(m,v1);return()=>{d=!0,clearInterval(f)}},[e,u,n,r,i,t]),{series:a,loading:l}}function b1({hass:e,entityId:t,entity:n,label:r,compact:i=!1,history:a=!1,colorIndex:o=0,scrubSample:l=null,scrubbing:c=!1}){const{value:u,unit:d}=kc(e,t),m=dn[o%dn.length],f=c&&l?xC(l.v,n):u,g=c&&n.domain==="binary_sensor"?"":d;return s.jsxs("div",{className:`tm-sensor-reading${i?" tm-sensor-reading--compact":""}${a?" tm-sensor-reading--history":""}${c?" tm-sensor-reading--scrubbing":""}`,children:[s.jsxs("div",{className:"tm-sensor-reading-top",children:[i&&s.jsx("span",{className:"tm-sensor-series-dot",style:{background:m.stroke}}),s.jsx(Ht,{hass:e,entity:n,size:i?18:22,style:{opacity:.75}}),s.jsx("span",{className:"tm-sensor-reading-label",children:r})]}),s.jsxs("div",{className:"tm-sensor-reading-value-row",children:[s.jsx("span",{className:"tm-sensor-reading-value",style:c?{color:m.stroke}:void 0,children:f}),g&&s.jsx("span",{className:"tm-sensor-reading-unit",children:g})]})]})}function Qf({hass:e,getEntity:t,entityId:n,label:r,showHistory:i,historyHours:a}){var w,x;const{revision:o}=We(),[l,c]=b.useState(null),u=t(n),d=i&&x0(e,n),{points:m,loading:f}=S3(e,n,{enabled:d,hours:a,revision:o}),g=!!(l!=null&&l.active&&((w=l.samples)!=null&&w[0])),v=((x=l==null?void 0:l.samples)==null?void 0:x[0])||null;return s.jsxs("div",{className:`tm-sensor-single${d?" tm-sensor-single--history":""}`,children:[s.jsx(b1,{hass:e,entityId:n,entity:u,label:r,history:d,scrubSample:v,scrubbing:g}),d&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`tm-sensor-reading-scrub-time${g?"":" is-idle"}`,"aria-hidden":!g,children:g?y1(l.time,a):" "}),s.jsx("div",{className:"tm-sensor-sparkline-wrap",children:s.jsx(g1,{points:m,loading:f,showRange:!0,domain:u.domain,onScrubChange:c})})]})]})}function E3({hass:e,getEntity:t,entityIds:n,widgetLabel:r,showHistory:i,historyHours:a}){var w;const{revision:o}=We(),[l,c]=b.useState(null),u=i&&n.some(x=>x0(e,x)),{series:d,loading:m}=C3(e,n,{enabled:u,hours:a,revision:o}),f=b.useMemo(()=>n.map((x,y)=>{var k;const p=t(x),h=d.find(C=>C.entityId===x);return{id:x,points:(h==null?void 0:h.points)||[],domain:p.domain,unit:((k=p.attributes)==null?void 0:k.unit_of_measurement)||"",colorIndex:y,label:r&&y===0?r:Ve(e,x)}}),[n,t,e,d,r]),g=!!(l!=null&&l.active&&((w=l.samples)!=null&&w.length)),v=b.useCallback(x=>{c(x)},[]);return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"tm-sensor-multi-readings",children:n.map((x,y)=>{var k;const p=t(x),h=((k=l==null?void 0:l.samples)==null?void 0:k.find(C=>C.entityId===x))||null;return s.jsx(b1,{hass:e,entityId:x,entity:p,label:r&&y===0?r:Ve(e,x),compact:!0,colorIndex:y,scrubSample:h,scrubbing:g},x)})}),u&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`tm-sensor-reading-scrub-time tm-sensor-multi-scrub-time${g?"":" is-idle"}`,"aria-hidden":!g,children:g?y1(l.time,a):" "}),s.jsx("div",{className:"tm-sensor-sparkline-wrap tm-sensor-multi-chart",children:s.jsx(g1,{series:f,loading:m,compact:!1,showRange:f.every(x=>{var y;return x.unit===((y=f[0])==null?void 0:y.unit)}),onScrubChange:v})})]})]})}function N3({widget:e,hass:t,getEntity:n,onConfigure:r}){const i=kC(e),a=!!e.showHistory,o=e.historyHours||24;if(!i.length)return s.jsxs("button",{type:"button",className:"tm-sensor-widget empty",onClick:r,children:[s.jsx(ct,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Sensor wählen"})]});const l=i.length>1,c=l&&a;return s.jsx("div",{className:`tm-sensor-widget${l?" tm-sensor-widget--multi":""}${a?" tm-sensor-widget--history":""}${c?" tm-sensor-widget--combined-chart":""}`,children:c?s.jsx(E3,{hass:t,getEntity:n,entityIds:i,widgetLabel:e.label,showHistory:a,historyHours:o}):l?i.map((u,d)=>s.jsx(Qf,{hass:t,getEntity:n,entityId:u,label:e.label&&d===0?e.label:Ve(t,u),showHistory:a,historyHours:o},u)):s.jsx(Qf,{hass:t,getEntity:n,entityId:i[0],label:e.label||Ve(t,i[0]),showHistory:a,historyHours:o})})}function j3(e){var t;return(t=e.entity_ids)!=null&&t.length?e.entity_ids.filter(Boolean):e.entity_id?[e.entity_id]:[]}function P3(e){var r;const t=((r=e.attributes)==null?void 0:r.device_class)||"",n=(e.name||e.label||"").toLowerCase();return t==="window"||n.includes("fenster")?"window":t==="door"||t==="garage_door"||n.includes("tür")||n.includes("tur")||n.includes("tor")?"door":e.domain==="cover"?"window":"contact"}function xs(e){const{state:t,domain:n}=e;return n==="cover"?["open","opening"].includes(t):n==="binary_sensor"?t==="on":!1}function I3(e){return e.domain==="cover"&&["opening","closing"].includes(e.state)}function w1(e){const{state:t,domain:n}=e;return n==="cover"?{open:"Offen",closed:"Geschlossen",opening:"Öffnet …",closing:"Schließt …"}[t]||t:n==="binary_sensor"?t==="on"?"Offen":"Geschlossen":t}function x1(e,t=[]){return t.filter(Boolean).map(n=>({...It(e,n),id:n}))}function z3(e=[]){return e.filter(xs).length}function M3(e,t){return e==="door"?t?ca:DC:e==="window"?t?GC:XC:MC}function k1({entity:e,size:t=28,strokeWidth:n=2,className:r=""}){const i=P3(e),a=xs(e),o=I3(e),l=M3(i,a);return s.jsx("span",{className:`tm-contact-icon-badge${a?" tm-contact-icon-badge--open":" tm-contact-icon-badge--closed"}${o?" tm-contact-icon-badge--moving":""} tm-contact-icon-badge--${i}${r?` ${r}`:""}`,"aria-hidden":!0,children:s.jsx(l,{size:t,strokeWidth:n})})}function L3({entity:e,label:t,compact:n=!1}){const r=xs(e),i=w1(e);return s.jsxs("div",{className:`tm-contact-row${r?" tm-contact-row--open":""}${n?" tm-contact-row--compact":""}`,children:[s.jsx(k1,{entity:e,size:n?20:32,strokeWidth:n?2.1:2.25}),s.jsxs("div",{className:"tm-contact-row-text",children:[s.jsx("span",{className:"tm-contact-row-label",children:t}),s.jsx("span",{className:"tm-contact-row-state",children:i})]})]})}function T3({hass:e,entityId:t,label:n}){const[r]=x1(e,[t]),i=xs(r),a=w1(r);return s.jsxs("div",{className:`tm-contact-widget tm-contact-widget--single${i?" tm-contact-widget--open":""}`,children:[s.jsx(k1,{entity:r,size:34,strokeWidth:2.25,className:"tm-contact-widget-hero-icon"}),s.jsxs("div",{className:"tm-contact-widget-body",children:[s.jsx("div",{className:"tm-contact-widget-label",children:n}),s.jsx("div",{className:"tm-contact-widget-state",children:a})]})]})}function R3({hass:e,entityIds:t,widgetLabel:n}){const r=x1(e,t),i=z3(r);return s.jsxs("div",{className:`tm-contact-widget tm-contact-widget--multi${i>0?" tm-contact-widget--open":""}`,children:[s.jsxs("div",{className:"tm-contact-widget-summary",children:[s.jsx("span",{className:"tm-contact-widget-summary-title",children:n||"Sensor Status"}),s.jsx("span",{className:`tm-contact-widget-summary-badge${i>0?" tm-contact-widget-summary-badge--alert":""}`,children:i>0?`${i} offen`:"Alles zu"})]}),s.jsx("div",{className:"tm-contact-widget-grid",children:r.map(a=>s.jsx(L3,{entity:a,label:Ve(e,a.id),compact:!0},a.id))})]})}function D3({widget:e,hass:t,onConfigure:n}){const r=j3(e);return r.length?r.length===1?s.jsx(T3,{hass:t,entityId:r[0],label:e.label||Ve(t,r[0])}):s.jsx(R3,{hass:t,entityIds:r,widgetLabel:e.label}):s.jsxs("button",{type:"button",className:"tm-contact-widget tm-contact-widget--empty",onClick:n,children:[s.jsx(ct,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Kontakt wählen"})]})}function O3(e){const t=document.createElement("div");return t.className="tm-ha-card-host-message",t.textContent=e,t}function F3({widget:e,hass:t,editMode:n=!1}){const r=`tm-ha-${e.id}`,i=b.useRef(null),a=b.useRef(null),o=b.useRef(null),l=b.useRef(t),c=b.useRef(n),u=b.useRef(e.card),[d,m]=b.useState(()=>Wt()),f=JSON.stringify(e.card||null),g=!!(t!=null&&t.connection);l.current=t,c.current=n,u.current=e.card,b.useEffect(()=>{m(!!lf(i.current)&&Wt())},[t]),b.useEffect(()=>{const w=i.current,x=lf(w),y=u.current;if(!x||!y||!Wt())return;let p=!1;const h=document.createElement("div");return h.slot=r,h.className=`tm-ha-card-host${c.current?" is-editing":""}`,x.appendChild(h),a.current=h,(async()=>{h.replaceChildren();try{const C=await w0(h,y,l.current,{preview:c.current});if(p){C.remove();return}o.current=C}catch(C){if(p)return;o.current=null,h.appendChild(O3((C==null?void 0:C.message)||"Karte konnte nicht geladen werden"))}})(),()=>{p=!0,o.current=null,a.current=null,h.remove()}},[f,g,r]),b.useEffect(()=>{const w=o.current;w&&t&&(w.hass=t)},[t]),b.useEffect(()=>{var x;(x=a.current)==null||x.classList.toggle("is-editing",!!n);const w=o.current;w&&(w.preview=!!n)},[n]);const v=e.card?Jr(e.card):"Keine Karte gewählt";return s.jsxs("div",{className:`tm-ha-card${d&&e.card?" tm-ha-card--live":""}`,children:[s.jsx("slot",{ref:i,name:r,className:"tm-ha-card-slot"}),!(d&&e.card)&&s.jsxs("div",{className:"tm-card tm-ha-card-fallback",children:[s.jsx("div",{className:"tm-ha-card-fallback-kicker",children:"Home Assistant"}),s.jsx("div",{className:"tm-ha-card-fallback-title",children:v}),s.jsx("p",{children:e.card?"Im Home-Assistant-Dashboard erscheint hier die echte Lovelace-Karte.":"Im Bearbeiten-Modus eine Karte aus einem Dashboard wählen oder YAML einfügen."})]})]})}function B3({widget:e,hass:t,getEntity:n,editMode:r,onEditWidget:i,onOpenPopup:a,onUpdateWidget:o,pageIndex:l=0,widgetIndex:c=0}){const u=()=>i==null?void 0:i(e.id);switch(e.type){case"weather":return s.jsx(VN,{entityId:e.entity_id,title:e.label,location:e.location,editMode:r,onConfigure:r?u:void 0});case"media":return s.jsx(JN,{entityId:e.entity_id,compact:!0,onConfigure:r?u:void 0});case"camera":return s.jsx($N,{widget:e,entityId:e.entity_id,entityIds:e.entity_ids,onConfigure:r?u:void 0});case"shopping":return s.jsx(e3,{entityId:e.entity_id,onConfigure:r?u:void 0});case"quickAction":return s.jsx(sN,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"alarm":return s.jsx(uN,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"cover":return s.jsx(vN,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"coverPopup":return s.jsx(bN,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"popup":return s.jsx(fN,{widget:e,widgetIndex:c,hass:t,getEntity:n,onConfigure:u,onOpen:a,editMode:r});case"scene":return s.jsx(mN,{widget:e,widgetIndex:c,hass:t,getEntity:n,onConfigure:u,editMode:r});case"sensor":return s.jsx(N3,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"sensorStatus":return s.jsx(D3,{widget:e,hass:t,onConfigure:u});case"sankey":return s.jsx(l3,{widget:e});case"energyTile":return s.jsx(d3,{widget:e,hass:t});case"ev":return s.jsx(y3,{widget:e,hass:t});case"haCard":return s.jsx(F3,{widget:e,hass:t,editMode:r});default:return s.jsx("div",{className:"tm-card tm-placeholder-widget",children:s.jsx("span",{children:td(e)})})}}const Q3={weather:dd,media:Y0,camera:ni,shopping:bs,quickAction:da,alarm:vs,cover:Zr,coverPopup:Zr,popup:U0,scene:fd,sensor:md,sensorStatus:ca,sankey:O0,energyTile:Z0,ev:F0,haCard:H0},W3=17.5,U3=22;function H3(e){const t=W3*16,n=Math.min(U3*16,window.innerHeight-32);let r=e.left+e.width/2-t/2,i=e.bottom+8;return r=Math.max(12,Math.min(r,window.innerWidth-t-12)),i+n>window.innerHeight-12&&(i=Math.max(12,e.top-n-8)),{left:`${r}px`,top:`${i}px`,width:`${t}px`,maxHeight:`${n}px`}}function V3({anchorRect:e,slotLabel:t,onClose:n,onPick:r}){sr(!0);const i=b.useMemo(()=>H3(e),[e]);return b.useEffect(()=>{const a=o=>{o.key==="Escape"&&n()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[n]),Tn.createPortal(s.jsxs("div",{className:"tm-slot-picker-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-slot-picker-backdrop",onClick:n,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-slot-picker-panel",style:i,onClick:a=>a.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":`Widget für ${t} wählen`,children:[s.jsxs("div",{className:"tm-slot-picker-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-slot-picker-title",children:"Widget hinzufügen"}),s.jsxs("div",{className:"tm-slot-picker-subtitle",children:[t," · 1×1"]})]}),s.jsx("button",{type:"button",className:"tm-slot-picker-close",onClick:n,"aria-label":"Schließen",children:s.jsx(Ye,{size:16})})]}),s.jsx("div",{className:"tm-slot-picker-grid",children:Object.entries(gs).map(([a,o])=>{const l=Q3[a]||ct;return s.jsxs("button",{type:"button",className:"tm-slot-picker-item",onClick:()=>r(a),children:[s.jsx("span",{className:"tm-slot-picker-icon",children:s.jsx(l,{size:14})}),s.jsx("span",{children:o.label})]},a)})})]})]}),Dn())}const Ra="cubic-bezier(0.22, 1, 0.36, 1)",Da="0.34s",q3=[{edge:"n",className:"tm-dashboard-grid-resize-edge--n",label:"oben"},{edge:"s",className:"tm-dashboard-grid-resize-edge--s",label:"unten"},{edge:"w",className:"tm-dashboard-grid-resize-edge--w",label:"links"},{edge:"e",className:"tm-dashboard-grid-resize-edge--e",label:"rechts"},{edge:"se",className:"tm-dashboard-grid-resize-corner",label:"Ecke"}];function K3(e,t,n,r){const{edge:i,offsetX:a,offsetY:o}=n,l=r.cellW,c=r.cellH;switch(i){case"n":e.top=`${t.top+o}px`,e.height=`${Math.max(c,t.height-o)}px`;break;case"s":e.height=`${Math.max(c,t.height+o)}px`;break;case"w":e.left=`${t.left+a}px`,e.width=`${Math.max(l,t.width-a)}px`;break;case"e":e.width=`${Math.max(l,t.width+a)}px`;break;case"se":e.width=`${Math.max(l,t.width+a)}px`,e.height=`${Math.max(c,t.height+o)}px`;break}}function Y3({page:e,pageIndex:t,editMode:n,selectedWidgetId:r,onSelectWidget:i,onMoveWidget:a,onResizeWidget:o,hass:l,getEntity:c,onOpenPopup:u,onUpdateWidget:d,onAddWidgetAt:m,onSlotPickerOpenChange:f}){const{config:g}=ke(),v=or(g.appearance),w=b.useRef(null),[x,y]=b.useState(null),[p,h]=b.useState(24),[k,C]=b.useState(null),[j,E]=b.useState(null),N=b.useRef(null),M=b.useRef(null);b.useLayoutEffect(()=>{const z=w.current;if(!z)return;const T=()=>{const S=z.getBoundingClientRect();y({width:S.width,height:S.height});const I=getComputedStyle(z),R=parseFloat(I.gap||I.columnGap)||24;h(R)};T();const A=new ResizeObserver(T);return A.observe(z),()=>A.disconnect()},[n]),b.useEffect(()=>{n||E(null)},[n]),b.useEffect(()=>{f==null||f(!!j)},[j,f]);const P=x?RS(x,Xe,vt,p):null,F=b.useCallback(z=>{M.current=z,!N.current&&(N.current=requestAnimationFrame(()=>{C(M.current),N.current=null}))},[]),H=b.useCallback(()=>{N.current&&(cancelAnimationFrame(N.current),N.current=null),M.current=null,C(null)},[]),G=b.useCallback((z,T)=>{if(!n||!w.current)return;z.preventDefault(),z.stopPropagation(),i(T.id);const A=z.clientX,S=z.clientY,I={x:T.x,y:T.y},R={dx:0,dy:0},Q=K=>{const we=K.clientX-A,nt=K.clientY-S;if(!P){F({kind:"drag",widgetId:T.id,offsetX:we,offsetY:nt});return}const Ce=df(we,nt,P);F({kind:"drag",widgetId:T.id,offsetX:Ce.offsetX,offsetY:Ce.offsetY}),(Ce.dx!==R.dx||Ce.dy!==R.dy)&&(R.dx=Ce.dx,R.dy=Ce.dy,a(t,T.id,{x:I.x+Ce.dx,y:I.y+Ce.dy,w:T.w,h:T.h}))},J=()=>{window.removeEventListener("pointermove",Q),window.removeEventListener("pointerup",J),H()};window.addEventListener("pointermove",Q),window.addEventListener("pointerup",J)},[n,P,a,i,t,F,H]),_=b.useCallback((z,T,A)=>{if(!n||!w.current)return;z.preventDefault(),z.stopPropagation(),i(T.id);const S=z.clientX,I=z.clientY,R={x:T.x,y:T.y,w:T.w,h:T.h},Q={dx:0,dy:0},J=we=>{const nt=we.clientX-S,Ce=we.clientY-I;if(!P){F({kind:"resize",edge:A,widgetId:T.id,offsetX:nt,offsetY:Ce});return}const On=df(nt,Ce,P),{dx:re,dy:Ie,offsetX:V,offsetY:he}=FS(A,On);F({kind:"resize",edge:A,widgetId:T.id,offsetX:V,offsetY:he}),(re!==Q.dx||Ie!==Q.dy)&&(Q.dx=re,Q.dy=Ie,o(t,T.id,OS(A,R,{dx:re,dy:Ie})))},K=()=>{window.removeEventListener("pointermove",J),window.removeEventListener("pointerup",K),H()};window.addEventListener("pointermove",J),window.addEventListener("pointerup",K)},[n,P,o,i,t,F,H]),le=b.useCallback((z,T,A)=>{A.stopPropagation(),i(null);const S=A.currentTarget.getBoundingClientRect();E({x:z,y:T,anchorRect:{left:S.left,top:S.top,width:S.width,height:S.height,bottom:S.bottom,right:S.right},label:`Feld ${z+1}×${T+1}`})},[i]),be=b.useCallback(z=>{if(!j||!m)return;const T=Ut(z,{x:j.x,y:j.y}),A=pn(T),S=z==="haCard"&&Er(e.widgets,A).length===0,I=m(t,z,S?{x:A.x,y:A.y,w:A.w,h:A.h}:{x:j.x,y:j.y,w:1,h:1});E(null),I&&i(I)},[m,i,e.widgets,t,j]),W=z=>{const T=v?GS(z.id,z.type):null;if(!n)return{gridColumn:`${z.x+1} / span ${z.w}`,gridRow:`${z.y+1} / span ${z.h}`,...T};if(!P)return{gridColumn:`${z.x+1} / span ${z.w}`,gridRow:`${z.y+1} / span ${z.h}`,visibility:"hidden",...T};const A=DS(z,P),S=(k==null?void 0:k.widgetId)===z.id,I={position:"absolute",left:`${A.left}px`,top:`${A.top}px`,width:`${A.width}px`,height:`${A.height}px`,...T};return S?(I.transition="none",k.kind==="resize"?K3(I,A,k,P):I.transform=`translate3d(${k.offsetX}px, ${k.offsetY}px, 0)`):I.transition=`left ${Da} ${Ra}, top ${Da} ${Ra}, width ${Da} ${Ra}, height ${Da} ${Ra}`,I},D={gridTemplateColumns:`repeat(${Xe}, minmax(0, 1fr))`,gridTemplateRows:`repeat(${vt}, minmax(0, 1fr))`};return s.jsxs("div",{ref:w,className:`tm-dashboard-grid${n?" tm-dashboard-grid--edit":""}`,style:n?void 0:D,onClick:()=>{n&&(i(null),E(null))},children:[n&&s.jsx("div",{className:"tm-dashboard-grid-overlay",style:D,children:Array.from({length:Xe*vt}).map((z,T)=>{const A=T%Xe,S=Math.floor(T/Xe);return ES(e.widgets,A,S)?s.jsx("div",{className:"tm-dashboard-grid-cell tm-dashboard-grid-cell--occupied","aria-hidden":!0},T):s.jsx("button",{type:"button",className:"tm-dashboard-grid-cell tm-dashboard-grid-cell--empty",onClick:R=>le(A,S,R),"aria-label":`Feld ${A+1}×${S+1}: Widget hinzufügen`},T)})}),e.widgets.map((z,T)=>{const A=(k==null?void 0:k.widgetId)===z.id,S=td(z);return s.jsxs("div",{className:`tm-dashboard-grid-item${r===z.id?" selected":""}${n?" editing":""}${A?" is-interacting":""}${z.type==="energyTile"||z.type==="ev"?" tm-dashboard-grid-item--energy-tile":""}${z.type==="sankey"?" tm-dashboard-grid-item--sankey":""}`,style:W(z),onClick:I=>{n&&(I.stopPropagation(),i(z.id))},children:[n&&s.jsxs("div",{className:"tm-dashboard-grid-chrome",children:[s.jsx("button",{type:"button",className:"tm-dashboard-grid-drag","aria-label":`${S} verschieben`,onPointerDown:I=>G(I,z),children:"⋮⋮"}),s.jsxs("span",{className:"tm-dashboard-grid-badge",children:[S," ","·"," ",z.w,"×",z.h]}),q3.map(({edge:I,className:R,label:Q})=>s.jsx("button",{type:"button",className:`tm-dashboard-grid-resize-edge ${R}`,"aria-label":`${S} ${Q} skalieren`,onPointerDown:J=>_(J,z,I)},I))]}),s.jsx("div",{className:"tm-dashboard-grid-content",children:B3({widget:z,hass:l,getEntity:c,editMode:n,onEditWidget:I=>i(I),onOpenPopup:u,onUpdateWidget:d,pageIndex:t,widgetIndex:T})})]},z.id)}),j&&s.jsx(V3,{anchorRect:j.anchorRect,slotLabel:j.label,onClose:()=>E(null),onPick:be})]})}function rt({value:e,onChange:t,domains:n=null,placeholder:r="Entität wählen…"}){const{hass:i}=We(),[a,o]=b.useState(!1),[l,c]=b.useState(""),u=b.useRef(null),d=$w(i,{domains:n,search:l}),m=e?Ve(i,e):null;b.useEffect(()=>{if(!a)return;const v=w=>{const x=typeof w.composedPath=="function"?w.composedPath():[w.target];u.current&&x.includes(u.current)||o(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[a]);const f=v=>{t(v),o(!1),c("")},g=v=>{v.stopPropagation(),t("")};return s.jsxs("div",{className:"tm-entity-picker",ref:u,children:[s.jsxs("button",{type:"button",className:"tm-entity-picker-trigger",onClick:()=>o(!a),children:[s.jsx("span",{style:{opacity:m?1:.5},children:m||r}),s.jsxs("span",{className:"tm-flex-center tm-gap-2",children:[e&&s.jsx("span",{role:"button",tabIndex:0,onClick:g,onKeyDown:v=>v.key==="Enter"&&g(v),style:{opacity:.5,display:"flex"},children:s.jsx(Ye,{size:16})}),s.jsx(ys,{size:18,style:{opacity:.5}})]})]}),a&&s.jsxs("div",{className:"tm-entity-picker-dropdown",onMouseDown:v=>v.stopPropagation(),children:[s.jsx("input",{className:"tm-entity-picker-search",type:"text",placeholder:"Suchen…",value:l,onChange:v=>c(v.target.value),autoFocus:!0}),s.jsxs("div",{className:"tm-entity-picker-list",children:[d.length===0&&s.jsx("div",{style:{padding:"1rem",opacity:.5,textAlign:"center"},children:"Keine Entitäten gefunden"}),d.map(v=>s.jsxs("button",{type:"button",className:`tm-entity-picker-item${v.id===e?" selected":""}`,onClick:()=>f(v.id),children:[s.jsx("span",{className:"tm-font-bold",children:v.name}),s.jsxs("span",{className:"tm-text-xs tm-opacity-50",children:[v.id," · ",v.state]})]},v.id))]})]})]})}const J3=[{type:"tile",name:"Kachel"},{type:"entities",name:"Entitäten"},{type:"entity",name:"Entität"},{type:"button",name:"Schaltfläche"},{type:"light",name:"Licht"},{type:"thermostat",name:"Thermostat"},{type:"climate",name:"Klima"},{type:"media-control",name:"Mediensteuerung"},{type:"weather-forecast",name:"Wetter"},{type:"gauge",name:"Gauge"},{type:"sensor",name:"Sensor"},{type:"statistic",name:"Statistik"},{type:"history-graph",name:"Verlaufsdiagramm"},{type:"statistics-graph",name:"Statistikdiagramm"},{type:"humidifier",name:"Luftbefeuchter"},{type:"humidifier-card",name:"Luftbefeuchter"},{type:"alarm-panel",name:"Alarmanlage"},{type:"lock",name:"Schloss"},{type:"cover",name:"Abdeckung"},{type:"fan",name:"Lüfter"},{type:"vacuum",name:"Staubsauger"},{type:"plant-status",name:"Pflanzenstatus"},{type:"calendar",name:"Kalender"},{type:"map",name:"Karte"},{type:"markdown",name:"Markdown"},{type:"iframe",name:"Webseite"},{type:"picture",name:"Bild"},{type:"picture-entity",name:"Bild-Entität"},{type:"picture-glance",name:"Bild-Glance"},{type:"glance",name:"Glance"},{type:"area",name:"Bereich"},{type:"heading",name:"Überschrift"},{type:"grid",name:"Raster"},{type:"horizontal-stack",name:"Horizontaler Stapel"},{type:"vertical-stack",name:"Vertikaler Stapel"},{type:"conditional",name:"Bedingt"},{type:"entity-filter",name:"Entitätsfilter"},{type:"logbook",name:"Logbuch"},{type:"todo-list",name:"To-do-Liste"},{type:"energy-distribution",name:"Energieverteilung"},{type:"energy-date-selection",name:"Energiedatum"}],Z3={light:"tile",switch:"tile",input_boolean:"tile",fan:"tile",cover:"tile",lock:"tile",binary_sensor:"tile",sensor:"tile",person:"tile",device_tracker:"tile",scene:"tile",script:"tile",button:"tile",input_button:"tile",climate:"thermostat",weather:"weather-forecast",media_player:"media-control",camera:"picture-entity",alarm_control_panel:"alarm-panel",vacuum:"vacuum",humidifier:"humidifier",plant:"plant-status",calendar:"calendar",todo:"todo-list"},G3=new Set(["zone","sun","persistent_notification","tts","conversation","stt","ai_task","update"]);function X3(e){const t=String(e||"").trim();return t?t.startsWith("custom:")?t:`custom:${t}`:""}function _3(){const e=J3.map(r=>({id:`core:${r.type}`,type:r.type,name:r.name,group:"Home Assistant"})),t=new Set(e.map(r=>r.type)),n=(typeof window<"u"&&Array.isArray(window.customCards)?window.customCards:[]).map(r=>{const i=X3(r==null?void 0:r.type);return!i||t.has(i)?null:(t.add(i),{id:`custom:${i}`,type:i,name:r.name||i.replace(/^custom:/,""),description:r.description||"",group:"Community"})}).filter(Boolean).sort((r,i)=>r.name.localeCompare(i.name,"de"));return[...e,...n]}function $3(e){const t=String(e||"").trim();return t?t==="markdown"?{type:"markdown",content:"## Text"}:t==="heading"?{type:"heading",heading:"Überschrift"}:t==="entities"?{type:"entities",entities:[]}:t==="vertical-stack"||t==="horizontal-stack"||t==="grid"?{type:t,cards:[]}:t==="conditional"?{type:"conditional",conditions:[],card:{type:"tile"}}:{type:t}:null}function ej(e,t){var o,l,c;const n=String(e||"").trim();if(!n||!n.includes("."))return null;const r=n.split(".")[0],i=Z3[r]||"tile";if(i==="weather-forecast")return{type:i,entity:n,forecast_type:"daily"};if(i==="entities")return{type:i,entities:[n]};if(i==="picture-entity")return{type:i,entity:n};const a=(c=(l=(o=t==null?void 0:t.states)==null?void 0:o[n])==null?void 0:l.attributes)==null?void 0:c.friendly_name;return a?{type:i,entity:n,name:a}:{type:i,entity:n}}function tj(e,{query:t="",limit:n=120}={}){const r=(e==null?void 0:e.states)||{},i=String(t||"").trim().toLowerCase(),a=[];return Object.keys(r).forEach(o=>{var m;const l=o.split(".")[0];if(G3.has(l))return;const c=r[o],u=((m=c==null?void 0:c.attributes)==null?void 0:m.friendly_name)||o,d=`${u} ${o} ${l}`.toLowerCase();i&&!d.includes(i)||a.push({id:o,entityId:o,name:u,domain:l,label:u===o?o:`${u}`,detail:o})}),a.sort((o,l)=>{if(i){const c=o.name.toLowerCase().startsWith(i)?0:1,u=l.name.toLowerCase().startsWith(i)?0:1;if(c!==u)return c-u}return o.name.localeCompare(l.name,"de")}),{total:a.length,items:a.slice(0,n)}}const nj=[{id:"entities",label:"Entitäten"},{id:"types",label:"Kartenarten"},{id:"dashboard",label:"Dashboard"}],cl=80,rj={colorScheme:"only light",color:"#1d1d1f",WebkitTextFillColor:"#1d1d1f",background:"#f2f2f7"},ij={flexShrink:0,colorScheme:"only light",color:"#111111",WebkitTextFillColor:"#111111",background:"#ffffff",border:"none",width:"100%",textAlign:"left",borderRadius:"0.75rem",padding:"0.7rem 0.85rem",fontSize:"0.875rem",lineHeight:1.35,cursor:"pointer",fontFamily:"system-ui, -apple-system, sans-serif"},aj={display:"block",width:"100%",fontWeight:700,fontSize:"0.875rem",lineHeight:1.35,color:"#111111",WebkitTextFillColor:"#111111",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},oj={display:"block",width:"100%",marginTop:"0.15rem",fontWeight:500,fontSize:"0.7rem",lineHeight:1.3,color:"#5c5c62",WebkitTextFillColor:"#5c5c62",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"};function Wf(e){return e.title||e.url_path||"Übersicht"}function sj(e){return ps(e)}function ul({label:e,meta:t,onClick:n,style:r}){return s.jsxs("div",{role:"button",tabIndex:0,className:"tm-ha-picker-item tm-ha-picker-item-rich",style:{...ij,...r},onClick:n,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),n())},children:[s.jsx("span",{className:"tm-ha-picker-item-title",style:aj,children:e}),t?s.jsx("span",{className:"tm-ha-picker-item-meta",style:oj,children:t}):null]})}function lj({hass:e,onClose:t,onSelect:n}){sr(!0);const[r,i]=b.useState("entities"),[a,o]=b.useState(""),l=b.useDeferredValue(a),[c,u]=b.useState(cl),[d,m]=b.useState([]),[f,g]=b.useState(void 0),[v,w]=b.useState(null),[x,y]=b.useState(-1),[p,h]=b.useState([]),[k,C]=b.useState(!1),[j,E]=b.useState(!0),[N,M]=b.useState(!1),[P,F]=b.useState("");b.useEffect(()=>{const A=S=>{S.key==="Escape"&&t()};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[t]),b.useEffect(()=>{u(cl)},[r,l,f,x]),b.useEffect(()=>{if(r!=="dashboard")return;let A=!1;return(async()=>{try{const S=await uS(e);if(A)return;m(S),g(I=>I===void 0?S[0]?S[0].url_path??null:void 0:I)}catch(S){A||F((S==null?void 0:S.message)||"Dashboards konnten nicht geladen werden")}finally{A||E(!1)}})(),()=>{A=!0}},[e,r]),b.useEffect(()=>{if(r!=="dashboard"||f===void 0)return;let A=!1;return M(!0),F(""),(async()=>{try{const S=await dS(e,f);if(A)return;w(S),y(-1)}catch(S){A||(w(null),h([]),C(!1),F((S==null?void 0:S.message)||"Dashboard konnte nicht geladen werden"))}finally{A||M(!1)}})(),()=>{A=!0}},[f,e,r]);const H=b.useMemo(()=>gS(v),[v]);b.useEffect(()=>{if(r!=="dashboard"||!v){if(r!=="dashboard")return;h([]),C(!1);return}const A=d.find(R=>(R.url_path??null)===f),S=Wf(A||{}),I=x<0?null:x;b.startTransition(()=>{const R=yS(v,S,I);h(R),C(vS(v,R))})},[f,x,v,d,r]);const G=b.useMemo(()=>r!=="entities"?{total:0,items:[]}:tj(e,{query:l,limit:400}),[l,e,r]),_=b.useMemo(()=>{if(r!=="types")return[];const A=l.trim().toLowerCase(),S=_3();return A?S.filter(I=>I.name.toLowerCase().includes(A)||I.type.toLowerCase().includes(A)||(I.description||"").toLowerCase().includes(A)||(I.group||"").toLowerCase().includes(A)):S},[l,r]),le=b.useMemo(()=>{const A=l.trim().toLowerCase();return A?p.filter(S=>S.label.toLowerCase().includes(A)||S.path.toLowerCase().includes(A)):p},[p,l]),be=b.useMemo(()=>{const A=[],S=new Map;return le.slice(0,c).forEach(I=>{if(!S.has(I.path)){const R={path:I.path,cards:[]};S.set(I.path,R),A.push(R)}S.get(I.path).cards.push(I)}),A},[le,c]),W=A=>{const S=sj(A);S&&n(S)},D=G.items.slice(0,c),z=_.slice(0,c),T=r==="entities"?Math.max(0,G.items.length-c):r==="types"?Math.max(0,_.length-c):Math.max(0,le.length-c);return Tn.createPortal(s.jsxs("div",{className:"tm-ha-picker-overlay",role:"presentation",children:[s.jsx("style",{children:`
        .tm-ha-picker-panel,
        .tm-ha-picker-panel input,
        .tm-ha-picker-panel .tm-ha-picker-item,
        .tm-ha-picker-panel .tm-ha-picker-item-title,
        .tm-ha-picker-panel .tm-ha-picker-tab,
        .tm-ha-picker-panel .tm-ha-picker-dash,
        .tm-ha-picker-panel .tm-ha-picker-more,
        .tm-ha-picker-panel .tm-ha-picker-title,
        .tm-ha-picker-panel .tm-ha-picker-search {
          color-scheme: only light !important;
          color: #111111 !important;
          -webkit-text-fill-color: #111111 !important;
        }
        .tm-ha-picker-panel .tm-ha-picker-item-meta,
        .tm-ha-picker-panel .tm-ha-picker-subtitle,
        .tm-ha-picker-panel .tm-ha-picker-empty,
        .tm-ha-picker-panel .tm-ha-picker-group-title {
          color: #5c5c62 !important;
          -webkit-text-fill-color: #5c5c62 !important;
        }
        .tm-ha-picker-panel .tm-ha-picker-dash.active,
        .tm-ha-picker-panel .tm-ha-picker-views .tm-ha-picker-view.active {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
      `}),s.jsx("button",{type:"button",className:"tm-ha-picker-backdrop",onClick:t,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-ha-picker-panel",role:"dialog","aria-modal":"true","aria-label":"Home-Assistant-Karte wählen",style:rj,children:[s.jsxs("div",{className:"tm-ha-picker-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-ha-picker-title",style:{color:"#111111",WebkitTextFillColor:"#111111"},children:"Karte wählen"}),s.jsx("div",{className:"tm-ha-picker-subtitle",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Entität, Kartenart oder vorhandene Dashboard-Karte"})]}),s.jsx("button",{type:"button",className:"tm-ha-picker-close",onClick:t,"aria-label":"Schließen",children:s.jsx(Ye,{size:16,color:"#111111"})})]}),s.jsx("div",{className:"tm-ha-picker-tabs",role:"tablist",children:nj.map(A=>s.jsx("button",{type:"button",role:"tab","aria-selected":r===A.id,className:`tm-ha-picker-tab${r===A.id?" active":""}`,style:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>i(A.id),children:A.label},A.id))}),s.jsx("input",{className:"tm-ha-picker-search",type:"search",value:a,onChange:A=>o(A.target.value),style:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},placeholder:r==="entities"?"Entität suchen…":r==="types"?"Kartenart suchen…":"Dashboard-Karte suchen…"}),r==="dashboard"?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"tm-ha-picker-dashboards",children:d.map(A=>{const S=A.url_path??null,I=S===f;return s.jsx("button",{type:"button",className:`tm-ha-picker-dash${I?" active":""}`,style:I?{color:"#ffffff",WebkitTextFillColor:"#ffffff",colorScheme:"only light"}:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>g(S),children:Wf(A)},A.id||A.url_path||"default")})}),H.length>1?s.jsxs("div",{className:"tm-ha-picker-dashboards tm-ha-picker-views",children:[s.jsx("button",{type:"button",className:`tm-ha-picker-dash tm-ha-picker-view${x<0?" active":""}`,style:x<0?{color:"#ffffff",WebkitTextFillColor:"#ffffff",colorScheme:"only light"}:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>y(-1),children:"Alle"}),H.map(A=>s.jsx("button",{type:"button",className:`tm-ha-picker-dash tm-ha-picker-view${A.index===x?" active":""}`,style:A.index===x?{color:"#ffffff",WebkitTextFillColor:"#ffffff",colorScheme:"only light"}:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>y(A.index),children:A.title},A.index))]}):null]}):null,s.jsxs("div",{className:"tm-ha-picker-list",children:[r==="entities"?s.jsxs(s.Fragment,{children:[D.length===0?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:l.trim()?"Keine Entitäten gefunden.":"Keine Entitäten verfügbar."}):null,D.map(A=>s.jsx(ul,{label:A.label,meta:A.detail,onClick:()=>W(ej(A.entityId,e))},A.id))]}):null,r==="types"?s.jsxs(s.Fragment,{children:[z.length===0?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Keine Kartenarten gefunden."}):null,z.map(A=>s.jsx(ul,{label:A.name,meta:`${A.group} · ${A.type}`,onClick:()=>W($3(A.type))},A.id))]}):null,r==="dashboard"?s.jsxs(s.Fragment,{children:[j||N?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Karten werden geladen…"}):null,!j&&!N&&P?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:P}):null,!j&&!N&&!P&&k?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Dieses Dashboard erzeugt seine Karten automatisch und hat keine feste Kartenliste."}):null,!j&&!N&&!P&&!k&&be.length===0?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Keine Karten in diesem Dashboard gefunden."}):null,!N&&!P&&be.map(A=>s.jsxs("div",{className:"tm-ha-picker-group",children:[s.jsx("div",{className:"tm-ha-picker-group-title",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:A.path}),A.cards.map(S=>s.jsx(ul,{label:S.label,onClick:()=>W(S.config),style:{paddingLeft:`${.75+Math.min(S.depth,4)*.7}rem`}},S.id))]},A.path))]}):null,T>0?s.jsxs("button",{type:"button",className:"tm-ha-picker-more",style:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>u(A=>A+cl),children:[T," ","weitere laden"]}):null]})]})]}),Dn())}const Uf="custom:";function cj(e){return new Promise(t=>{window.setTimeout(t,e)})}async function Ic(e,t=4e3){return customElements.get(e)?customElements.get(e):(await Promise.race([customElements.whenDefined(e),cj(t)]),customElements.get(e)||null)}async function A1(e){const t=String((e==null?void 0:e.type)||"");if(!t)return null;if(t.startsWith(Uf))return Ic(t.slice(Uf.length));const r=await(await window.loadCardHelpers()).createCardElement(e);return r!=null&&r.localName?Ic(r.localName):null}const zc="hui-card-picker";let Oa=null;function uj(){return customElements.get(zc)?Promise.resolve(!0):Wt()?(Oa||(Oa=(async()=>{var e;for(const t of["vertical-stack","grid","horizontal-stack"]){try{const n=await A1({type:t,cards:[]});await((e=n==null?void 0:n.getConfigElement)==null?void 0:e.call(n))}catch{}if(await Ic(zc,1500))return!0}return!1})().then(e=>(e||(Oa=null),e))),Oa):Promise.resolve(!1)}function dj(e,t){const n=document.createElement(zc);return n.hass=e,n.lovelace={views:[]},n.addEventListener("config-changed",r=>{var a;r.stopPropagation();const i=(a=r.detail)==null?void 0:a.config;i&&typeof i=="object"&&t(i)}),n}async function mj(e,t){if(!Wt())return null;const n=await A1(e);if(typeof(n==null?void 0:n.getConfigElement)!="function")return null;const r=await n.getConfigElement();return r?(r.hass=t,await r.setConfig(e),r):null}function fj({hass:e,onClose:t,onSelect:n,onUnavailable:r,onOpenDashboardCopy:i}){sr(!0);const[a,o]=b.useState("loading"),l=b.useRef(null),c=b.useRef(null),u=b.useRef(e),d=b.useRef(n),m=b.useRef(r);return u.current=e,d.current=n,m.current=r,b.useEffect(()=>{const f=g=>{g.key==="Escape"&&t()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t]),b.useEffect(()=>{let f=!1;return(async()=>{var w,x;const g=await uj();if(f)return;if(!g||!l.current){o("failed"),(w=m.current)==null||w.call(m);return}const v=dj(u.current,y=>d.current(y));c.current=v,l.current.replaceChildren(v),o("ready"),(x=v.focus)==null||x.call(v)})(),()=>{var g;f=!0,(g=c.current)==null||g.remove(),c.current=null}},[]),b.useEffect(()=>{c.current&&e&&(c.current.hass=e)},[e]),Tn.createPortal(s.jsxs("div",{className:"tm-ha-picker-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-ha-picker-backdrop",onClick:t,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-ha-editor-panel tm-ha-native-picker-panel",role:"dialog","aria-modal":"true","aria-label":"Karte wählen",children:[s.jsxs("div",{className:"tm-ha-editor-header",children:[s.jsx("div",{className:"tm-ha-editor-heading",children:s.jsx("div",{className:"tm-ha-editor-title",children:"Karte wählen"})}),s.jsx("button",{type:"button",className:"tm-ha-editor-icon-btn",onClick:t,"aria-label":"Schließen",children:s.jsx(Ye,{size:18})})]}),s.jsxs("div",{className:"tm-ha-native-picker-body",children:[a==="loading"?s.jsx("div",{className:"tm-ha-editor-note tm-ha-native-picker-note",children:"Kartenauswahl wird geladen…"}):null,s.jsx("div",{ref:l,className:"tm-ha-native-picker-slot"})]}),s.jsxs("div",{className:"tm-ha-editor-footer",children:[s.jsx("button",{type:"button",className:"tm-ha-editor-text-btn",onClick:i,children:"Aus anderem Dashboard übernehmen"}),s.jsx("button",{type:"button",className:"tm-ha-editor-text-btn",onClick:t,children:"Abbrechen"})]})]})]}),Dn())}const pj=250;function hj({card:e,hass:t,onClose:n,onSave:r,initialMode:i="visual"}){sr(!0);const[a,o]=b.useState(e),[l,c]=b.useState(i),[u,d]=b.useState("loading"),[m,f]=b.useState(()=>sf(e)),[g,v]=b.useState(""),w=b.useRef(null),x=b.useRef(null),y=b.useRef(null),p=b.useRef(t),h=b.useRef(e),k=b.useRef(null);p.current=t,h.current=a,b.useEffect(()=>{const P=F=>{F.key==="Escape"&&n()};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[n]),b.useEffect(()=>{if(l!=="visual")return;const P=w.current;if(!P)return;const F=h.current;if(y.current&&k.current===(F==null?void 0:F.type)){P.replaceChildren(y.current);try{y.current.setConfig(F),d("ready")}catch{d("unsupported")}return}let H=!1;d("loading"),P.replaceChildren();const G=_=>{var be;_.stopPropagation();const le=(be=_.detail)==null?void 0:be.config;if(!(!le||typeof le!="object")){o(le);try{_.currentTarget.setConfig(le)}catch{}}};return(async()=>{try{const _=await mj(F,p.current);if(H)return;if(!_){y.current=null,k.current=null,d("unsupported");return}_.addEventListener("config-changed",G),y.current=_,k.current=F==null?void 0:F.type,P.replaceChildren(_),d("ready")}catch(_){if(H)return;console.warn("The Monitor: card editor failed",_),y.current=null,k.current=null,d("unsupported")}})(),()=>{H=!0}},[l,a==null?void 0:a.type]),b.useEffect(()=>{y.current&&t&&(y.current.hass=t)},[t]);const C=JSON.stringify(a||null);b.useEffect(()=>{const P=x.current;if(!P||!a||!Wt())return;let F=!1;const H=window.setTimeout(async()=>{const G=document.createElement("div");G.className="tm-ha-editor-preview-card";try{if(await w0(G,a,p.current,{preview:!0}),F)return;P.replaceChildren(G)}catch(_){if(F)return;const le=document.createElement("div");le.className="tm-ha-editor-note",le.textContent=(_==null?void 0:_.message)||"Vorschau nicht verfügbar",P.replaceChildren(le)}},pj);return()=>{F=!0,window.clearTimeout(H)}},[C]);const j=()=>{f(sf(h.current)),v(""),c("yaml")},E=()=>{try{const P=nS(m);if(!P)throw new Error("Die Karte braucht mindestens einen type.");return v(""),P}catch(P){return v(P.message),null}},N=()=>{const P=E();P&&(o(P),c("visual"))},M=()=>{if(l==="yaml"){const P=E();if(!P)return;r(P);return}r(h.current)};return Tn.createPortal(s.jsxs("div",{className:"tm-ha-picker-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-ha-picker-backdrop",onClick:n,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-ha-editor-panel",role:"dialog","aria-modal":"true","aria-label":"Karte bearbeiten",children:[s.jsxs("div",{className:"tm-ha-editor-header",children:[s.jsxs("div",{className:"tm-ha-editor-heading",children:[s.jsx("div",{className:"tm-ha-editor-title",children:"Karte bearbeiten"}),s.jsx("div",{className:"tm-ha-editor-subtitle",children:Jr(a)})]}),s.jsx("button",{type:"button",className:"tm-ha-editor-icon-btn",onClick:n,"aria-label":"Schließen",children:s.jsx(Ye,{size:18})})]}),s.jsxs("div",{className:"tm-ha-editor-body",children:[s.jsx("div",{className:"tm-ha-editor-pane tm-ha-editor-pane--form",children:l==="visual"?s.jsxs(s.Fragment,{children:[u==="loading"?s.jsx("div",{className:"tm-ha-editor-note",children:"Editor wird geladen…"}):null,u==="unsupported"?s.jsx("div",{className:"tm-ha-editor-note",children:"Für diese Karte gibt es keinen visuellen Editor. Bearbeite sie im Code-Editor."}):null,s.jsx("div",{ref:w,className:"tm-ha-editor-slot"})]}):s.jsxs(s.Fragment,{children:[s.jsx("textarea",{className:"tm-ha-editor-yaml",value:m,onChange:P=>{f(P.target.value),v("")},spellCheck:!1,"aria-label":"Karten-YAML"}),g?s.jsx("div",{className:"tm-ha-editor-error",children:g}):null]})}),s.jsxs("div",{className:"tm-ha-editor-pane tm-ha-editor-pane--preview",children:[s.jsx("div",{className:"tm-ha-editor-pane-label",children:"Vorschau"}),s.jsx("div",{ref:x,className:"tm-ha-editor-preview",children:Wt()?null:s.jsx("div",{className:"tm-ha-editor-note",children:"Die Vorschau erscheint im Home-Assistant-Dashboard."})})]})]}),s.jsxs("div",{className:"tm-ha-editor-footer",children:[s.jsx("button",{type:"button",className:"tm-ha-editor-text-btn",onClick:l==="visual"?j:N,children:l==="visual"?"Code-Editor anzeigen":"Visuellen Editor anzeigen"}),s.jsxs("div",{className:"tm-ha-editor-actions",children:[s.jsx("button",{type:"button",className:"tm-ha-editor-text-btn",onClick:n,children:"Abbrechen"}),s.jsx("button",{type:"button",className:"tm-ha-editor-primary-btn",onClick:M,children:"Speichern"})]})]})]})]}),Dn())}function gj({widget:e,pageIndex:t,onUpdate:n,hass:r}){const[i,a]=b.useState(null),[o,l]=b.useState(null),c=m=>{n(t,e.id,m?tS(e,m):{card:null})},u=()=>a(Wt()?"native":"dashboard"),d=m=>{a(null);const f=!(m!=null&&m.type);l({card:f?{type:""}:m,mode:f?"yaml":"visual"})};return s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("div",{className:"tm-widget-inspector-label",children:"Home-Assistant-Karte"}),s.jsx("p",{className:"tm-widget-inspector-hint",children:e.card?Jr(e.card):"Karte aus der Home-Assistant-Kartenauswahl hinzufügen."}),e.card?s.jsx("button",{type:"button",className:"tm-btn-primary tm-btn-block",onClick:()=>l({card:e.card,mode:"visual"}),children:"Karte bearbeiten"}):null,s.jsx("button",{type:"button",className:"tm-btn-secondary tm-btn-block",onClick:u,children:e.card?"Andere Karte wählen":"Karte wählen"}),i==="native"&&s.jsx(fj,{hass:r,onClose:()=>a(null),onSelect:d,onUnavailable:()=>a("dashboard"),onOpenDashboardCopy:()=>a("dashboard")}),i==="dashboard"&&s.jsx(lj,{hass:r,onClose:()=>a(null),onSelect:d}),o&&s.jsx(hj,{card:o.card,initialMode:o.mode,hass:r,onClose:()=>l(null),onSave:m=>{c(m),l(null)}})]})}const yj=[{key:"stateEntity",label:"Lade-Status",domains:["binary_sensor","sensor","switch","input_boolean"],evcc:"binary_sensor.evcc_{lp}_charging"},{key:"powerEntity",label:"Ladeleistung",domains:["sensor"],evcc:"sensor.evcc_{lp}_charge_power"},{key:"batteryEntity",label:"Akku (%)",domains:["sensor","binary_sensor"],evcc:"sensor.evcc_{lp}_vehicle_soc"},{key:"rangeEntity",label:"Reichweite (km)",domains:["sensor"],evcc:"sensor.evcc_{lp}_vehicle_range"},{key:"chargeTimeEntity",label:"Restladezeit",domains:["sensor"],evcc:"sensor.evcc_{lp}_charge_remaining_duration"},{key:"lastTripEntity",label:"Letzte Fahrt (km)",domains:["sensor"]},{key:"costEntity",label:"Kosten heute (€)",domains:["sensor"],evcc:"sensor.evcc_{lp}_session_price"}];function S1({showLabel:e=!0}){var a;const{config:t,updateEv:n}=ke(),{hass:r}=We(),i=Wu(r,t);return s.jsxs("div",{className:"tm-ev-fields",children:[e&&s.jsxs("div",{className:"tm-config-slot",children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",children:"Anzeigename"}),s.jsx("input",{className:"tm-input",type:"text",value:((a=t.ev)==null?void 0:a.label)||"",onChange:o=>n({label:o.target.value}),placeholder:"Grandland"})]}),yj.map(o=>{var c;const l=i&&o.evcc?o.evcc.replace("{lp}",i):"";return s.jsxs("div",{className:"tm-config-slot",children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",children:o.label}),s.jsx(rt,{value:((c=t.ev)==null?void 0:c[o.key])||"",onChange:u=>n({[o.key]:u}),domains:o.domains,placeholder:l?`automatisch: ${l}`:"Entität wählen…"})]},o.key)})]})}function dr(e,t,n){const r=Xi(e.deviceImages);return{deviceImages:{...r,[t]:{...r[t],...n}}}}function mr({name:e,onRemove:t,children:n,className:r=""}){return s.jsxs("div",{className:`tm-widget-inspector-entity-row${r?` ${r}`:""}`,children:[n||s.jsx("span",{className:"tm-widget-inspector-entity-name",children:e}),s.jsx("button",{type:"button",className:"tm-widget-inspector-remove",onClick:t,"aria-label":`${e||"Eintrag"} entfernen`,children:s.jsx(Ye,{size:14})})]})}function Fa(e,t,n){var a;if(!t)return null;const r=(a=e.entity_ids)!=null&&a.length?[...e.entity_ids]:e.entity_id?[e.entity_id]:[];if(r.includes(t)||r.length>=n)return null;const i=[...r,t];return{entity_ids:i,entity_id:i[0]}}function pi(e){var t;return(t=e.entity_ids)!=null&&t.length?e.entity_ids:e.entity_id?[e.entity_id]:[]}function vj({widget:e,pageIndex:t,onUpdate:n,onDelete:r,onApplySize:i,hass:a}){if(!e)return s.jsxs("div",{className:"tm-widget-inspector tm-widget-inspector--empty",children:[s.jsx("div",{className:"tm-widget-inspector-empty-icon","aria-hidden":"true",children:s.jsx(JC,{size:22})}),s.jsx("p",{className:"tm-widget-inspector-empty-title",children:"Kein Widget gewählt"}),s.jsx("p",{className:"tm-widget-inspector-empty-text",children:"Tippe ein Widget an, um es zu bearbeiten — oder füge über „Widget“ bzw. eine freie Zelle eines hinzu."})]});const o=gs[e.type]||{},l=e.type==="popup",c=e.type==="coverPopup",u=e.type==="camera",d=e.type==="quickAction",m=e.type==="sankey",f=e.type==="energyTile",g=e.type==="sensor",v=e.type==="sensorStatus",w=e.type==="haCard",x=e.type==="scene",y=e.type==="ev";return s.jsxs("div",{className:"tm-widget-inspector",children:[s.jsxs("div",{className:"tm-widget-inspector-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-widget-inspector-title",children:td(e)}),s.jsx("span",{className:"tm-widget-inspector-type",children:o.label||e.type})]}),s.jsx("button",{type:"button",className:"tm-widget-inspector-delete",onClick:()=>r(t,e.id),"aria-label":"Widget entfernen",children:s.jsx(G0,{size:16})})]}),s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("div",{className:"tm-widget-inspector-label",children:"Größe"}),s.jsx("div",{className:"tm-widget-inspector-sizes",children:Object.entries(bc).map(([p,h])=>s.jsxs("button",{type:"button",className:`tm-widget-inspector-size${e.w===h.w&&e.h===h.h?" active":""}`,onClick:()=>i(t,e.id,h),children:[s.jsx("span",{children:h.label}),s.jsxs("span",{className:"tm-widget-inspector-size-dim",children:[h.w,"×",h.h]})]},p))}),s.jsxs("div",{className:"tm-widget-inspector-meta",children:["Position ",e.x,",",e.y," · aktuell ",e.w,"×",e.h]})]}),e.type!=="shopping"&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Anzeige"}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Label"}),s.jsx("input",{className:"tm-input",type:"text",value:e.label||"",onChange:p=>n(t,e.id,{label:p.target.value}),placeholder:"Anzeigename"})]}),e.type==="weather"&&s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Ort"}),s.jsx("input",{className:"tm-input",type:"text",value:e.location||"",onChange:p=>n(t,e.id,{location:p.target.value}),placeholder:"Name der Wetter-Entität"})]}),!w&&s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Icon"}),s.jsx("input",{className:"tm-input",type:"text",value:e.icon||"",onChange:p=>n(t,e.id,{icon:p.target.value}),placeholder:"mdi:sofa"})]})]}),d&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Modus"}),s.jsxs("div",{className:"tm-widget-inspector-sizes tm-widget-inspector-sizes--segment",children:[s.jsx("button",{type:"button",className:`tm-widget-inspector-size${e.mode!=="brightness"?" active":""}`,onClick:()=>n(t,e.id,{mode:"toggle"}),children:"Schalter"}),s.jsx("button",{type:"button",className:`tm-widget-inspector-size${e.mode==="brightness"?" active":""}`,onClick:()=>n(t,e.id,{mode:"brightness"}),children:"Helligkeit"})]})]}),f&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Kachel-Typ"}),s.jsx("div",{className:"tm-widget-inspector-sizes tm-widget-inspector-sizes--stack",children:Object.entries(To).map(([p,h])=>s.jsxs("button",{type:"button",className:`tm-widget-inspector-size tm-widget-inspector-size--wide${e.tileKind===p?" active":""}`,onClick:()=>n(t,e.id,{tileKind:p,label:h.label,...p==="ev-heatpump"?{deviceImages:Xi(e.deviceImages)}:{}}),children:[s.jsx("span",{children:h.label}),s.jsx("span",{className:"tm-widget-inspector-hint",children:h.description})]},p))})]}),f&&e.tileKind==="ev-heatpump"&&(()=>{const p=Xi(e.deviceImages);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"E-Auto · Bilder"}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Bild je Zustand — optional per Entität steuern."}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Lädt"}),s.jsx("input",{className:"tm-input",type:"url",value:p.ev.charging,onChange:h=>n(t,e.id,dr(e,"ev",{charging:h.target.value})),placeholder:"https://… oder /local/…"})]}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Nicht am Laden"}),s.jsx("input",{className:"tm-input",type:"url",value:p.ev.idle,onChange:h=>n(t,e.id,dr(e,"ev",{idle:h.target.value})),placeholder:"https://… oder /local/…"})]}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Status-Entität (Laden)"}),s.jsx(rt,{value:p.ev.stateEntity,onChange:h=>n(t,e.id,dr(e,"ev",{stateEntity:h})),domains:["binary_sensor","sensor","switch","input_boolean"],placeholder:"Optional — auch unter Einstellungen → E-Auto"})]})]}),s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Wärmepumpe · Bilder"}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Mit Licht"}),s.jsx("input",{className:"tm-input",type:"url",value:p.heatpump.lightOn,onChange:h=>n(t,e.id,dr(e,"heatpump",{lightOn:h.target.value})),placeholder:"https://… oder /local/…"})]}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Ohne Licht"}),s.jsx("input",{className:"tm-input",type:"url",value:p.heatpump.lightOff,onChange:h=>n(t,e.id,dr(e,"heatpump",{lightOff:h.target.value})),placeholder:"https://… oder /local/…"})]}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Licht-Entität"}),s.jsx(rt,{value:p.heatpump.lightEntity,onChange:h=>n(t,e.id,dr(e,"heatpump",{lightEntity:h})),domains:["light","switch","binary_sensor","input_boolean"],placeholder:"Optional — Anzeige / Licht"})]})]})]})})(),w&&s.jsx(gj,{widget:e,pageIndex:t,onUpdate:n,hass:a}),x&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Szenen (max. ",ie.sceneEntities,")"]}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"1, 2 oder 4 Szenen pro Kachel. Das Motiv wird automatisch am Namen erkannt."}),s.jsx(rt,{value:"",onChange:p=>{const h=Fa(e,p,ie.sceneEntities);h&&n(t,e.id,h)},domains:o.domains,placeholder:"Szene hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:pi(e).map(p=>{var h;return s.jsx(mr,{name:Ve(a,p),onRemove:()=>{const k=pi(e).filter(E=>E!==p),{[p]:C,...j}=e.scene_art||{};n(t,e.id,{entity_ids:k,entity_id:k[0]||"",scene_art:j})},children:s.jsxs("div",{className:"tm-widget-inspector-entity-row-main",children:[s.jsx("span",{className:"tm-widget-inspector-entity-name",children:Ve(a,p)}),s.jsxs("select",{className:"tm-input tm-widget-inspector-scene-art",value:((h=e.scene_art)==null?void 0:h[p])||"",onChange:k=>n(t,e.id,{scene_art:{...e.scene_art||{},[p]:k.target.value}}),"aria-label":"Motiv",children:[s.jsx("option",{value:"",children:"Motiv: automatisch"}),Object.entries(yd).map(([k,C])=>s.jsx("option",{value:k,children:`Motiv: ${C.label}`},k))]})]})},p)})})]}),y&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Fahrzeug"}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Gilt für alle E-Auto-Kacheln. Leere Felder werden bei evcc automatisch erkannt."}),s.jsx(S1,{showLabel:!1})]}),!l&&!c&&!u&&!g&&!v&&!w&&!x&&!y&&e.type!=="shopping"&&!m&&!f&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Entität"}),s.jsx(rt,{value:e.entity_id||"",onChange:p=>n(t,e.id,{entity_id:p}),domains:o.domains,placeholder:"Entität wählen…"})]}),v&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Kontakte (max. ",ie.contactStatusEntities,")"]}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Fenster, Türen und Kontaktsensoren — das Icon zeigt offen oder geschlossen."}),s.jsx(rt,{value:"",onChange:p=>{const h=Fa(e,p,ie.contactStatusEntities);h&&n(t,e.id,h)},domains:o.domains,placeholder:"Fenster / Tür hinzufügen …"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:pi(e).map(p=>s.jsx(mr,{name:Ve(a,p),onRemove:()=>{const h=(e.entity_ids||[]).filter(k=>k!==p);n(t,e.id,{entity_ids:h,entity_id:h[0]||""})}},p))})]}),g&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Sensoren (max. ",ie.sensorEntities,")"]}),s.jsx(rt,{value:"",onChange:p=>{const h=Fa(e,p,ie.sensorEntities);h&&n(t,e.id,h)},domains:o.domains,placeholder:"Sensor hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:pi(e).map(p=>s.jsx(mr,{name:Ve(a,p),onRemove:()=>{const h=(e.entity_ids||[]).filter(k=>k!==p);n(t,e.id,{entity_ids:h,entity_id:h[0]||""})}},p))}),s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:!!e.showHistory,onChange:p=>n(t,e.id,{showHistory:p.target.checked})}),s.jsx("span",{children:"Verlauf anzeigen"})]}),e.showHistory&&s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("div",{className:"tm-widget-inspector-label",children:"Zeitraum"}),s.jsx("div",{className:"tm-widget-inspector-sizes tm-widget-inspector-sizes--hours",children:ed.map(p=>s.jsx("button",{type:"button",className:`tm-widget-inspector-size${(e.historyHours||24)===p?" active":""}`,onClick:()=>n(t,e.id,{historyHours:p}),children:p===168?"7 Tage":`${p}h`},p))})]})]}),u&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Kameras (max. ",ie.cameraEntities,")"]}),s.jsx(rt,{value:"",onChange:p=>{const h=Fa(e,p,ie.cameraEntities);h&&n(t,e.id,h)},domains:o.domains,placeholder:"Kamera hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:pi(e).map(p=>s.jsx(mr,{name:Ve(a,p),onRemove:()=>{const h=(e.entity_ids||[]).filter(k=>k!==p);n(t,e.id,{entity_ids:h,entity_id:h[0]||""})}},p))})]}),c&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Rolläden (max. ",ie.coverPopupEntities,")"]}),s.jsx(rt,{value:"",onChange:p=>{!p||(e.entity_ids||[]).includes(p)||(e.entity_ids||[]).length>=ie.coverPopupEntities||n(t,e.id,{entity_ids:[...e.entity_ids||[],p]})},domains:o.domains,placeholder:"Rolladen hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:(e.entity_ids||[]).map(p=>s.jsx(mr,{name:Ve(a,p),onRemove:()=>n(t,e.id,{entity_ids:e.entity_ids.filter(h=>h!==p)})},p))})]}),l&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Entitäten"}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Deaktivierte Entitäten erscheinen nicht im Popup. Lichter mit Helligkeits-Slider zeigen Farbkreise direkt auf der Kachel."}),s.jsx(rt,{value:"",onChange:p=>{!p||(e.entity_ids||[]).includes(p)||(e.entity_ids||[]).length>=ie.popupEntities||n(t,e.id,{entity_ids:[...e.entity_ids||[],p]})},domains:o.domains,placeholder:"Entität hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:(e.entity_ids||[]).map(p=>{const h=(e.disabled_entity_ids||[]).includes(p),k=ye(p)==="light";return s.jsxs(mr,{name:Ve(a,p),className:`tm-widget-inspector-entity-row--popup${h?" disabled":""}`,onRemove:()=>{n(t,e.id,{entity_ids:e.entity_ids.filter(C=>C!==p),disabled_entity_ids:(e.disabled_entity_ids||[]).filter(C=>C!==p)})},children:[s.jsxs("label",{className:"tm-widget-inspector-entity-disable",children:[s.jsx("input",{type:"checkbox",checked:h,onChange:()=>{const C=e.disabled_entity_ids||[];n(t,e.id,{disabled_entity_ids:h?C.filter(j=>j!==p):[...C,p]})}}),s.jsx("span",{className:"tm-widget-inspector-entity-disable-label",children:"Aus"})]}),s.jsxs("div",{className:"tm-widget-inspector-entity-row-main",children:[s.jsx("span",{className:"tm-widget-inspector-entity-name",children:Ve(a,p)}),k&&s.jsx("span",{className:"tm-widget-inspector-entity-hint",children:"Licht · Farben auf Kachel"})]})]},p)})})]})]})}const bj={weather:dd,media:Y0,camera:ni,shopping:bs,quickAction:da,alarm:vs,cover:Zr,coverPopup:Zr,popup:U0,scene:fd,sensor:md,sensorStatus:ca,sankey:O0,energyTile:Z0,ev:F0,haCard:H0};function wj({activePageIndex:e,selectedWidget:t,onDone:n,onApplyPreset:r,onAddWidget:i,onUpdateWidget:a,onDeleteWidget:o,onApplySize:l,hass:c}){const[u,d]=b.useState(!1),[m,f]=b.useState(!1),g=x=>{i(e,x),f(!1)},v=()=>{d(x=>!x),f(!1)},w=()=>{f(x=>!x),d(!1)};return s.jsxs("div",{className:"tm-dashboard-editor",children:[s.jsxs("div",{className:"tm-dashboard-editor-toolbar",children:[s.jsxs("button",{type:"button",className:`tm-dashboard-editor-btn${u?" active":""}`,onClick:v,children:[s.jsx(HC,{size:16}),"Vorlagen"]}),s.jsxs("button",{type:"button",className:`tm-dashboard-editor-btn${m?" active":""}`,onClick:w,children:[s.jsx(ct,{size:16}),"Widget"]}),s.jsxs("button",{type:"button",className:"tm-dashboard-editor-done",onClick:n,children:[s.jsx(ud,{size:16}),"Fertig"]})]}),u&&s.jsxs("div",{className:"tm-dashboard-editor-panel tm-dashboard-editor-presets",children:[s.jsxs("div",{className:"tm-dashboard-editor-panel-header",children:[s.jsx("strong",{children:"Layout-Vorlagen"}),s.jsx("button",{type:"button",className:"tm-dashboard-editor-close",onClick:()=>d(!1),"aria-label":"Schließen",children:s.jsx(Ye,{size:14})})]}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Entitäten bleiben erhalten — nur Anordnung und Größen ändern sich."}),s.jsx("div",{className:"tm-preset-grid",children:wc.map(x=>s.jsxs("button",{type:"button",className:"tm-preset-card",onClick:()=>{r(x.id),d(!1)},children:[s.jsx("div",{className:"tm-preset-preview",children:x.preview.map((y,p)=>s.jsx("span",{className:"tm-preset-block",style:{flex:y}},p))}),s.jsx("div",{className:"tm-preset-name",children:x.name}),s.jsx("div",{className:"tm-preset-desc",children:x.description})]},x.id))})]}),m&&s.jsxs("div",{className:"tm-dashboard-editor-panel tm-dashboard-editor-palette",children:[s.jsxs("div",{className:"tm-dashboard-editor-panel-header",children:[s.jsx("strong",{children:"Widget hinzufügen"}),s.jsx("button",{type:"button",className:"tm-dashboard-editor-close",onClick:()=>f(!1),"aria-label":"Schließen",children:s.jsx(Ye,{size:14})})]}),s.jsx("div",{className:"tm-palette-grid",children:Object.entries(gs).map(([x,y])=>{const p=bj[x]||ct;return s.jsxs("button",{type:"button",className:"tm-palette-item",onClick:()=>g(x),children:[s.jsx("span",{className:"tm-palette-icon",children:s.jsx(p,{size:14})}),s.jsx("span",{children:y.label})]},x)})})]}),s.jsx("div",{className:"tm-dashboard-editor-inspector-wrap",children:s.jsx(vj,{widget:t,pageIndex:e,onUpdate:a,onDelete:o,onApplySize:l,hass:c})})]})}function Hf({rooms:e,activeRoomId:t,onChange:n,disabled:r,className:i,optionClassName:a}){return s.jsx("ul",{className:i,role:"listbox","aria-label":"Räume",children:e.map(o=>s.jsx("li",{role:"option","aria-selected":o.id===t,children:s.jsx("button",{type:"button",className:`${a}${o.id===t?" active":""}`,disabled:r,onClick:()=>n(o.id),children:o.name})},o.id))})}function Vf({rooms:e,activeRoomId:t,onChange:n,disabled:r=!1,variant:i="dropdown"}){const[a,o]=b.useState(!1),l=b.useRef(null),c=e.find(u=>u.id===t)||e[0];return b.useEffect(()=>{if(!a||i!=="dropdown")return;const u=m=>{const f=typeof m.composedPath=="function"?m.composedPath():[m.target];l.current&&f.includes(l.current)||o(!1)},d=m=>{m.key==="Escape"&&o(!1)};return document.addEventListener("mousedown",u),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u),document.removeEventListener("keydown",d)}},[a,i]),!c||e.length<=1?null:i==="sidebar"?s.jsxs("nav",{className:"tm-room-sidebar","aria-label":"Räume",children:[s.jsx("p",{className:"tm-room-sidebar-title",children:"Räume"}),s.jsx(Hf,{rooms:e,activeRoomId:t,onChange:n,disabled:r,className:"tm-room-sidebar-list",optionClassName:"tm-room-sidebar-option"})]}):s.jsxs("div",{className:"tm-room-selector",ref:l,children:[s.jsxs("button",{type:"button",className:"tm-room-selector-trigger",onClick:()=>o(u=>!u),disabled:r,"aria-haspopup":"listbox","aria-expanded":a,"aria-label":"Raum wechseln",children:[s.jsx("span",{className:"tm-room-selector-label",children:c.name}),s.jsx(ys,{size:18,className:`tm-room-selector-chevron${a?" open":""}`})]}),a&&s.jsx(Hf,{rooms:e,activeRoomId:t,onChange:u=>{n(u),o(!1)},disabled:r,className:"tm-room-selector-menu",optionClassName:"tm-room-selector-option"})]})}function xj({user:e,onSettings:t,onScreensaver:n}){var On,re,Ie;const[r,i]=b.useState(new Date),[a,o]=b.useState(null),[l]=b.useState(o1),[c,u]=b.useState(()=>!!l.editMode),[d,m]=b.useState(()=>l.activePageIndex||0),[f,g]=b.useState(()=>l.selectedWidgetId||null),v=b.useRef(null),[w,x]=b.useState(!1),[y,p]=b.useState(!1),{hass:h,getEntity:k}=We(),{config:C,activeRoom:j,activeRoomId:E,setActiveRoomId:N,updateWidget:M,moveWidget:P,resizeWidget:F,applyWidgetSize:H,addWidget:G,addWidgetAt:_,removeWidget:le,applyLayoutPreset:be,addLayoutPage:W,removeLayoutPage:D,moveLayoutPage:z,renameLayoutPage:T}=ke(),A=b.useCallback(()=>o(null),[]),S=((On=j==null?void 0:j.layout)==null?void 0:On.pages)||[];b.useEffect(()=>{v.current!==null&&v.current!==E&&m(0),v.current=E},[E]),b.useEffect(()=>{a1({editMode:c,activePageIndex:d,selectedWidgetId:f})},[c,d,f]),b.useEffect(()=>{const V=setInterval(()=>i(new Date),1e3);return()=>clearInterval(V)},[]),b.useEffect(()=>{c||(g(null),x(!1))},[c]),b.useEffect(()=>{d>=S.length&&m(Math.max(0,S.length-1))},[d,S.length]);const I=b.useCallback(V=>{D(V),m(he=>he>V?he-1:he===V?Math.max(0,V-1):he)},[D]),R=b.useCallback((V,he)=>{z(V,he),m(an=>an===V?he:V<an&&he>=an?an-1:V>an&&he<=an?an+1:an)},[z]),Q=b.useCallback(()=>{const V=S.length;W(),m(V)},[W,S.length]),J=((Ie=(re=S[d])==null?void 0:re.widgets)==null?void 0:Ie.find(V=>V.id===f))||null,K=C.presence.map(V=>{const he=k(V.entity_id);return{...V,entity:he,name:V.label||he.name}}).filter(V=>V.entity.state==="home"),we=()=>u(!1),nt=w||y,Ce=C.roomSidebar&&C.rooms.length>1;return s.jsxs("div",{className:`tm-dashboard${c?" tm-dashboard--edit":""}${Ce?" tm-dashboard--room-sidebar":""}${a||w||y?" tm-dashboard--modal-open":""}`,children:[Ce&&s.jsx(Vf,{variant:"sidebar",rooms:C.rooms,activeRoomId:E,onChange:N,disabled:nt}),s.jsxs("div",{className:"tm-dashboard-main",children:[s.jsxs("header",{className:"tm-dashboard-header",children:[s.jsxs("div",{className:"tm-flex-col",children:[s.jsxs("div",{className:"tm-dashboard-title-row",children:[s.jsx("h1",{className:"tm-title-xl",style:c?void 0:{textShadow:"0 2px 4px rgba(0,0,0,0.5)"},children:c?"Dashboard bearbeiten":s.jsxs(s.Fragment,{children:["Guten Tag, ",s.jsx("span",{className:"tm-font-bold",children:e.name})]})}),!Ce&&s.jsx(Vf,{rooms:C.rooms,activeRoomId:E,onChange:N,disabled:nt})]}),s.jsx("p",{className:"tm-text-sm tm-opacity-70",style:c?void 0:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:c?"Leere Felder antippen oder Widgets ziehen und skalieren":st(r,"EEEE, d. MMMM yyyy",{locale:En})})]}),s.jsxs("div",{className:"tm-dashboard-header-right",children:[!c&&s.jsx("div",{className:"tm-clock-lg",children:st(r,"HH:mm")}),s.jsx("button",{type:"button",onClick:()=>u(V=>!V),className:`tm-btn-round${c?" active":""}`,"aria-label":c?"Bearbeitung beenden":"Dashboard bearbeiten",children:s.jsx(_C,{size:22})}),!c&&s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",onClick:t,className:"tm-btn-round","aria-label":"Einstellungen",children:s.jsx(ua,{size:24})}),s.jsx("button",{type:"button",onClick:n,className:"tm-btn-round","aria-label":"Bildschirmschoner",children:s.jsx(q0,{size:24})})]})]}),!c&&K.length>0&&s.jsx("div",{className:"tm-dashboard-header-presence tm-flex-center tm-gap-3",children:K.map(V=>{var he;return s.jsxs("div",{className:"tm-presence-chip",children:[s.jsx("div",{className:"tm-avatar-sm",children:(he=V.entity.attributes)!=null&&he.entity_picture?s.jsx("img",{src:$r(h,V.entity.attributes.entity_picture),alt:V.name,className:"tm-avatar-img"}):s.jsx("span",{className:"tm-font-bold tm-text-xs",children:V.name[0]})}),s.jsx("span",{className:"tm-font-bold tm-text-sm tm-opacity-90",children:V.name})]},V.entity_id)})})]}),s.jsxs("div",{className:"tm-dashboard-body",children:[s.jsx(TE,{activePageIndex:d,onPageChange:m,editMode:c,pagesMeta:S,onOpenPageManage:()=>x(!0),children:S.map((V,he)=>s.jsx(Y3,{page:V,pageIndex:he,editMode:c,selectedWidgetId:f,onSelectWidget:g,onMoveWidget:P,onResizeWidget:F,hass:h,getEntity:k,onOpenPopup:o,onUpdateWidget:M,onAddWidgetAt:_,onSlotPickerOpenChange:p},V.id))}),c&&s.jsx(wj,{activePageIndex:d,selectedWidget:J,onDone:we,onApplyPreset:be,onAddWidget:G,onUpdateWidget:M,onDeleteWidget:le,onApplySize:H,hass:h})]}),w&&c&&s.jsx(OE,{pages:S,activePageIndex:d,onClose:()=>x(!1),onSelectPage:V=>{m(V),x(!1)},onAddPage:Q,onRemovePage:I,onMovePage:R,onRenamePage:T}),a&&!c&&(a.variant==="cover"?s.jsx(wN,{data:a,hass:h,getEntity:k,onClose:A}):s.jsx(hN,{data:a,hass:h,onClose:A}))]})]})}const kj=[{area_id:"wohnzimmer",name:"Wohnzimmer"},{area_id:"kueche",name:"Küche"},{area_id:"schlafzimmer",name:"Schlafzimmer"},{area_id:"bad",name:"Bad"},{area_id:"buero",name:"Büro"},{area_id:"flur",name:"Flur"}];async function Aj(e){var t;if(ar(e))return[...kj];if(!((t=e==null?void 0:e.connection)!=null&&t.sendMessagePromise))return[];try{return(await e.connection.sendMessagePromise({type:"config/area_registry/list"})||[]).sort((r,i)=>r.name.localeCompare(i.name,"de"))}catch(n){return console.warn("The Monitor: Bereiche konnten nicht geladen werden",n),[]}}function Sj(){const{config:e,addRoom:t,removeRoom:n,renameRoom:r,addRoomFromHaArea:i,updateDisplay:a}=ke(),{hass:o,isConnected:l,revision:c}=We(),[u,d]=b.useState([]),[m,f]=b.useState(""),[g,v]=b.useState(!1);b.useEffect(()=>{let h=!1;return v(!0),Aj(o).then(k=>{h||d(k)}).finally(()=>{h||v(!1)}),()=>{h=!0}},[o,l,c]);const w=new Set(e.rooms.map(h=>h.areaId).filter(Boolean)),x=u.filter(h=>!w.has(h.area_id)),y=e.rooms.length<_i,p=()=>{const h=m.trim();!h||!y||(t(h),f(""))};return s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Räume"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",style:{lineHeight:1.5},children:"Jeder Raum hat ein eigenes Dashboard-Layout. Im Dashboard wechselst du zwischen den Räumen — per Dropdown oben oder als feste Sidebar links."}),e.rooms.length>1&&s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:e.roomSidebar,onChange:h=>a({roomSidebar:h.target.checked})}),s.jsx("span",{children:"Räume als feste Sidebar anzeigen"})]}),s.jsx("div",{className:"tm-room-config-list",children:e.rooms.map(h=>s.jsxs("div",{className:"tm-room-config-row",children:[s.jsx("input",{className:"tm-input tm-room-config-name",type:"text",value:h.name,onChange:k=>r(h.id,k.target.value),"aria-label":`Name für ${h.name}`}),e.rooms.length>1&&s.jsx("button",{type:"button",className:"tm-btn-secondary tm-room-config-remove",onClick:()=>n(h.id),children:"Entfernen"})]},h.id))}),y&&s.jsxs("div",{className:"tm-room-config-add",children:[s.jsx("input",{className:"tm-input",type:"text",value:m,onChange:h=>f(h.target.value),placeholder:"Neuer Raum …",onKeyDown:h=>{h.key==="Enter"&&p()}}),s.jsxs("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:p,disabled:!m.trim(),children:[s.jsx(ct,{size:16}),"Raum hinzufügen"]})]}),!y&&s.jsxs("p",{className:"tm-text-sm tm-opacity-70",children:["Maximal ",_i," Räume."]})]}),l&&s.jsxs("div",{className:"tm-setting-group",style:{marginTop:"1rem"},children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",style:{marginBottom:"0.75rem"},children:g?"Bereiche aus Home Assistant werden geladen …":x.length?"Bereiche aus Home Assistant — antippen zum Hinzufügen:":u.length?"Alle Home-Assistant-Bereiche sind bereits als Raum angelegt.":"Keine Bereiche in Home Assistant gefunden."}),x.length>0&&s.jsx("div",{className:"tm-room-suggestions",children:x.map(h=>s.jsxs("button",{type:"button",className:"tm-room-suggestion-chip",disabled:!y,onClick:()=>i(h),children:[s.jsx(ct,{size:14}),h.name]},h.area_id))})]})]})}const dl={presence:["person"],vacuum:["vacuum"],windows:["cover","binary_sensor"]};function Cj({title:e,entityId:t,section:n,domains:r,onSet:i}){return s.jsxs("div",{className:"tm-config-slot",children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",children:e}),s.jsx(rt,{value:t,onChange:a=>i(n,a),domains:r,placeholder:"Entität wählen…"})]})}function Ej(){var o;const{config:e,setSingleEntity:t,addPresence:n,removePresence:r,addWindow:i,removeWindow:a}=ke();return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[s.jsx(Sj,{}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Dashboard-Layout"}),s.jsx("div",{className:"tm-setting-group",children:s.jsxs("p",{className:"tm-text-sm tm-opacity-70",style:{lineHeight:1.5},children:["Widgets, Größen und Positionen bearbeitest du direkt im Dashboard über den"," ",s.jsx("strong",{children:"Stift-Button"})," ","oben rechts. Dort findest du auch Layout-Vorlagen."]})})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Saugroboter"}),s.jsx(Cj,{title:"Status-Island",entityId:((o=e.vacuum)==null?void 0:o.entity_id)||"",section:"vacuum",domains:dl.vacuum,onSet:t})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"E-Auto"}),s.jsx("p",{style:{fontSize:"0.875rem",opacity:.6,marginBottom:"0.75rem",lineHeight:1.5},children:"Für die E-Auto-Kachel und die grüne Lade-Notification. Leere Felder werden bei evcc automatisch erkannt."}),s.jsx(S1,{})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Fenster (Status-Island)"}),s.jsx("p",{style:{fontSize:"0.875rem",opacity:.6,marginBottom:"0.75rem",lineHeight:1.5},children:"Die weiße Notification erscheint automatisch, wenn ein Fenster offen ist, sich öffnet oder schließt — ohne Automation."}),s.jsx(rt,{value:"",onChange:l=>{l&&e.windows.length<ie.windows&&i(l)},domains:dl.windows,placeholder:"Fenster / Kontakt hinzufügen …"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginTop:"0.75rem"},children:e.windows.map(l=>s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{padding:"0.5rem 0.75rem",background:"rgba(255,255,255,0.05)",borderRadius:"0.5rem"},children:[s.jsx("span",{children:l.label||l.entity_id}),s.jsx("button",{type:"button",className:"tm-btn-secondary",style:{padding:"0.25rem 0.75rem",minHeight:"auto",fontSize:"0.75rem"},onClick:()=>a(l.entity_id),children:"Entfernen"})]},l.entity_id))})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Anwesenheit"}),s.jsx(rt,{value:"",onChange:l=>{l&&e.presence.length<ie.presence&&n(l)},domains:dl.presence,placeholder:"Person hinzufügen…"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginTop:"0.75rem"},children:e.presence.map(l=>s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{padding:"0.5rem 0.75rem",background:"rgba(255,255,255,0.05)",borderRadius:"0.5rem"},children:[s.jsx("span",{children:l.label||l.entity_id}),s.jsx("button",{type:"button",className:"tm-btn-secondary",style:{padding:"0.25rem 0.75rem",minHeight:"auto",fontSize:"0.75rem"},onClick:()=>r(l.entity_id),children:"Entfernen"})]},l.entity_id))})]})]})}function Nj({onBack:e}){const[t,n]=b.useState(80),[r,i]=b.useState(60),[a,o]=b.useState("display"),{exportToJson:l,importFromJson:c,config:u,updateScreensaver:d,updateAppearance:m}=ke(),{isConnected:f,isMock:g,isEmbedded:v,isConnecting:w,connectionError:x,connect:y,login:p,disconnect:h,states:k}=We(),C=b.useRef(null),j=Object.keys(k).length,[E,N]=b.useState(Lo),[M,P]=b.useState(""),[F,H]=b.useState(!1);b.useEffect(()=>{N(Lo())},[f]);const G=()=>{E.trim()&&p(E.trim())},_=async()=>{if(!(!E.trim()||!M.trim()))try{await y(E.trim(),M.trim()),P("")}catch{}},le=()=>{const W=new Blob([l()],{type:"application/json"}),D=URL.createObjectURL(W),z=document.createElement("a");z.href=D,z.download="the-monitor-config.json",z.click(),URL.revokeObjectURL(D)},be=W=>{var T;const D=(T=W.target.files)==null?void 0:T[0];if(!D)return;const z=new FileReader;z.onload=()=>{c(z.result)||alert("Import fehlgeschlagen – ungültige JSON-Datei.")},z.readAsText(D),W.target.value=""};return s.jsxs("div",{className:"tm-settings-panel",style:{height:"100%",display:"flex",flexDirection:"column",backdropFilter:"blur(12px)",padding:"2rem"},children:[s.jsxs("div",{className:"tm-flex-row tm-items-center tm-gap-6",style:{marginBottom:"1.5rem",flexShrink:0},children:[s.jsx("button",{type:"button",onClick:e,className:"tm-btn-round","aria-label":"Zurück",children:s.jsx(NC,{size:32})}),s.jsx("h2",{className:"tm-title-xl",children:"Einstellungen"})]}),s.jsxs("div",{className:"tm-flex-row tm-gap-3",style:{marginBottom:"1.5rem",flexShrink:0},children:[s.jsx("button",{type:"button",className:"tm-btn-secondary",style:{background:a==="display"?"rgba(var(--tm-accent-rgb), 0.4)":void 0},onClick:()=>o("display"),children:"Bildschirm & Ton"}),s.jsx("button",{type:"button",className:"tm-btn-secondary",style:{background:a==="dashboard"?"rgba(var(--tm-accent-rgb), 0.4)":void 0},onClick:()=>o("dashboard"),children:"Dashboard & Insel"})]}),s.jsxs("div",{className:"tm-settings-scroll",children:[a==="display"&&s.jsxs("div",{className:"tm-settings-layout",children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Bildschirm & Ton"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx($i,{size:24}),s.jsx("span",{children:"Helligkeit"})]}),s.jsxs("span",{children:[t,"%"]})]}),s.jsx("input",{type:"range",min:"0",max:"100",value:t,onChange:W=>n(W.target.value),className:"tm-range"})]}),s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(X0,{size:24}),s.jsx("span",{children:"Lautstärke"})]}),s.jsxs("span",{children:[r,"%"]})]}),s.jsx("input",{type:"range",min:"0",max:"100",value:r,onChange:W=>i(W.target.value),className:"tm-range"})]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Farbset"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(fd,{size:24}),s.jsx("span",{children:"Darstellung"})]}),s.jsx("div",{className:"tm-color-mode-row",children:Object.values(US).map(W=>s.jsx("button",{type:"button",className:`tm-color-mode-btn${u.appearance.mode===W.id?" active":""}`,onClick:()=>m({mode:W.id}),children:W.label},W.id))})]}),s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsx("span",{className:"tm-text-sm tm-opacity-70",children:u.appearance.mode==="colorful"?"Wähle eine Farbe – alles wird in abstufenden Tönen dargestellt:":u.appearance.mode==="blackColorful"?"Pastell-Karten auf schwarzem Hintergrund – jede Kachel bekommt eine eigene Farbe.":"Farbwahl gilt nur im Bunt-Modus."}),s.jsx("div",{className:"tm-color-set-grid",children:Qo.map(W=>s.jsxs("button",{type:"button",className:`tm-color-set-btn${u.appearance.colorSet===W.id?" active":""}`,disabled:u.appearance.mode!=="colorful",onClick:()=>m({colorSet:W.id}),children:[s.jsx("span",{className:"tm-color-set-swatch",style:{background:W.preview}}),s.jsx("span",{className:"tm-color-set-label",children:W.label})]},W.id))})]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Bildschirmschoner"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:u.screensaver.enabled,onChange:W=>d({enabled:W.target.checked})}),s.jsx("span",{children:"Automatisch nach Inaktivität"})]}),u.screensaver.enabled&&s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(q0,{size:24}),s.jsx("span",{children:"Wartezeit"})]}),s.jsxs("span",{children:[u.screensaver.idleMinutes," ",u.screensaver.idleMinutes===1?"Minute":"Minuten"]})]}),s.jsx("input",{type:"range",className:"tm-range",min:"1",max:"30",step:"1",value:u.screensaver.idleMinutes,onChange:W=>d({idleMinutes:Number(W.target.value)})})]}),s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsx("span",{children:"Stil"}),s.jsxs("div",{className:"tm-color-mode-row",children:[s.jsx("button",{type:"button",className:`tm-color-mode-btn${u.screensaver.style!=="sexy"?" active":""}`,onClick:()=>d({style:"classic"}),children:"Klassisch"}),s.jsx("button",{type:"button",className:`tm-color-mode-btn${u.screensaver.style==="sexy"?" active":""}`,onClick:()=>d({style:"sexy"}),children:"Sexy"})]})]}),s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:u.screensaver.showDate,onChange:W=>d({showDate:W.target.checked})}),s.jsx("span",{children:"Datum anzeigen"})]}),s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:u.screensaver.showWeather,onChange:W=>d({showWeather:W.target.checked})}),s.jsx("span",{children:"Wetter anzeigen"})]}),s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:u.screensaver.style==="sexy"?"Sexy zeigt ein großes Foto mit Uhrzeit und darunter eine schmale Leiste mit Wetter, Musik und Status.":"Der Bildschirmschoner lässt sich jederzeit manuell über das Monitor-Symbol im Dashboard starten."})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Home Assistant"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(_0,{size:24}),s.jsx("span",{children:"Verbindung"})]}),s.jsx("span",{style:{color:f?"#4ade80":g?"#fbbf24":"#f87171"},children:f?v?`Verbunden (${j} Entitäten)`:`Verbunden (${j} Entitäten)`:g?"Demo-Modus":w?"Verbinde…":"Nicht verbunden"})]}),v?s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:"Änderungen werden automatisch im Home-Assistant-Dashboard gespeichert und gelten auf allen Geräten (iPad, Mac, Wanddisplay)."}),s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:"Die Home-Assistant-Seitenleiste und die obere Leiste bleiben erreichbar."})]}):s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:f?"Verbunden mit deiner Home-Assistant-Instanz. Entitäten kannst du unter „Dashboard konfigurieren“ zuweisen.":"Als Panel in Home Assistant eingebunden bist du automatisch verbunden. Im Browser oder auf dem Tablet: URL eintragen und anmelden."}),!f&&s.jsxs(s.Fragment,{children:[s.jsxs("label",{className:"tm-flex-col tm-gap-2",children:[s.jsx("span",{className:"tm-text-sm tm-opacity-70",children:"Home Assistant URL"}),s.jsx("input",{type:"url",className:"tm-input",value:E,onChange:W=>N(W.target.value),placeholder:"http://homeassistant.local:8123"})]}),s.jsxs("button",{type:"button",className:"tm-btn-primary tm-flex-center tm-gap-2",onClick:G,disabled:w||!E.trim(),children:[w?s.jsx(VC,{size:18,className:"tm-spin"}):s.jsx(KC,{size:18}),"Bei Home Assistant anmelden"]}),s.jsx("button",{type:"button",className:"tm-btn-secondary",onClick:()=>H(W=>!W),children:F?"Token-Login ausblenden":"Alternativ: Mit Zugriffstoken verbinden"}),F&&s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:"Erstelle unter Home Assistant → Profil → Sicherheit → Langzeit-Zugriffstoken einen Token und füge ihn hier ein."}),s.jsxs("label",{className:"tm-flex-col tm-gap-2",children:[s.jsx("span",{className:"tm-text-sm tm-opacity-70",children:"Zugriffstoken"}),s.jsx("input",{type:"password",className:"tm-input",value:M,onChange:W=>P(W.target.value),placeholder:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9…",autoComplete:"off"})]}),s.jsx("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:_,disabled:w||!E.trim()||!M.trim(),children:"Mit Token verbinden"})]})]}),f&&!v&&s.jsxs("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:h,disabled:w,children:[s.jsx(rE,{size:18})," Verbindung trennen"]}),x&&s.jsx("p",{className:"tm-text-sm",style:{color:"#f87171"},children:x})]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Konfiguration sichern"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:"Exportiere die Dashboard-Konfiguration als JSON-Backup oder importiere eine gespeicherte Konfiguration."}),s.jsxs("div",{className:"tm-flex-row tm-gap-3",children:[s.jsxs("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:le,children:[s.jsx(OC,{size:18})," Exportieren"]}),s.jsxs("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:()=>{var W;return(W=C.current)==null?void 0:W.click()},children:[s.jsx(iE,{size:18})," Importieren"]}),s.jsx("input",{ref:C,type:"file",accept:".json",style:{display:"none"},onChange:be})]})]})]})]}),a==="dashboard"&&s.jsx(Ej,{})]}),s.jsx("div",{style:{marginTop:"auto",textAlign:"center",opacity:.2,fontSize:"0.875rem",flexShrink:0,paddingTop:"1rem"},children:"The Monitor v0.1.0"})]})}const Mc="vacuum.roborock",jj=15*60*1e3,Pj={id:Mc,name:"Roborock",state:"cleaning",attributes:{status:"Reinigt Wohnzimmer …",battery_level:78},domain:"vacuum"};function qf({size:e=24}){return s.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"16",cy:"16",r:"14",fill:"#1a1a1a"}),s.jsx("circle",{cx:"16",cy:"16",r:"10",fill:"#2d2d2d"}),s.jsx("circle",{cx:"16",cy:"16",r:"4",fill:"#444"}),s.jsx("circle",{cx:"22",cy:"10",r:"2",fill:"#ff6b2b"})]})}function Ij({progress:e,size:t=36,stroke:n=3,className:r=""}){const i=(t-n)/2,a=2*Math.PI*i,o=a-e/100*a;return s.jsxs("svg",{width:t,height:t,className:`tm-vi-ring ${r}`.trim(),"aria-hidden":"true",children:[s.jsx("circle",{cx:t/2,cy:t/2,r:i,fill:"none",stroke:"var(--tm-vi-track)",strokeWidth:n}),s.jsx("circle",{cx:t/2,cy:t/2,r:i,fill:"none",stroke:"var(--tm-vi-accent)",strokeWidth:n,strokeLinecap:"round",strokeDasharray:a,strokeDashoffset:o,transform:`rotate(-90 ${t/2} ${t/2})`})]})}const Ba=b.memo(Ij);function zj({window:e,onClose:t,overdue:n=!1}){const r=e.domain==="cover"&&["open","opening"].includes(e.state);return s.jsxs("div",{className:`tm-vi-window-row${n?" tm-vi-window-row-overdue":""}`,children:[s.jsxs("div",{className:"tm-vi-window-info",children:[s.jsx("span",{className:"tm-vi-window-name",children:e.label}),s.jsx("span",{className:"tm-vi-window-state",children:vg(e)})]}),r&&s.jsx("button",{type:"button",className:"tm-vi-btn tm-vi-btn-close",onClick:i=>{i.stopPropagation(),t(e.id)},"aria-label":`${e.label} schließen`,children:s.jsx(Ye,{size:16})})]})}function Mj(){var Ce,On;const{hass:e,revision:t,getEntity:n,isMock:r}=We(),{config:i}=ke(),[a,o]=b.useState(!1),[l]=b.useState(()=>Date.now()),[c,u]=b.useState(0),d=b.useRef(new Map),m=ix(e,(Ce=i.vacuum)==null?void 0:Ce.entity_id,r,Mc)||Mc,f=n(m),g=(f.state==="unavailable"||!f.id)&&r?Pj:f,v=nx(g.state,g.attributes),w=sa(i,null,r),x=Rg(i,r),p=F5(e,i,null,r)&&Qu(e,w,r),h=Og(e,x,r?67:null),k=b.useMemo(()=>dx(e,i.windows),[e,i.windows,t]),C=k.length>0,j=v,E=p,N=E?Dg(e,i,r):null,M=Uu(N),P=j||C||E,F=b.useMemo(()=>k.filter(cx),[k]);b.useEffect(()=>{const re=Date.now(),Ie=new Set(F.map(V=>V.id));for(const V of F)d.current.has(V.id)||d.current.set(V.id,V.lastChanged||re);for(const V of[...d.current.keys()])Ie.has(V)||d.current.delete(V)},[F]);const H=b.useMemo(()=>{const re=Date.now(),Ie=new Set;for(const V of F){const he=d.current.get(V.id);he&&re-he>=jj&&Ie.add(V.id)}return Ie},[F,c]),G=H.size>0;b.useEffect(()=>{P||o(!1)},[P]),b.useEffect(()=>{const re=setInterval(()=>u(Ie=>Ie+1),1e3);return()=>clearInterval(re)},[]);const _=l?Math.floor((Date.now()-l)/1e3):0,le=b.useMemo(()=>ox(g,_),[g,_,c,t]),be=ax(g),W=Y5(i),D=mx(k),z=sx(_),T=b.useMemo(()=>{const re=[];E&&re.push(h!=null?`${W} · ${h}%`:W),C&&re.push(D),j&&re.push(be);let Ie=re.join(" · ");return G&&C&&(Ie=`⚠ ${Ie}`),Ie},[E,W,h,C,D,j,be,G]),A=b.useCallback(()=>{o(re=>!re)},[]),S=b.useCallback(()=>{o(!1)},[]),I=b.useCallback(re=>{re.stopPropagation(),Ax(e,m)},[e,m]),R=b.useCallback(re=>{re.stopPropagation(),Sx(e,m)},[e,m]),Q=b.useCallback(re=>{Mu(e,re)},[e]);if(!P)return null;const J=E?J5(i,h,N):G&&C?H.size===1?`${((On=F.find(re=>H.has(re.id)))==null?void 0:On.label)||"Fenster"} seit über 15 Min. offen`:`${H.size} Fenster seit über 15 Min. offen`:C&&j?"Fenster und Sauger sind aktiv":C?k.length===1?`${k[0].label} — ${vg(k[0])}`:`${k.length} Fenster brauchen Aufmerksamkeit`:`${g.name} reinigt dein Zuhause …`,K=E?" tm-vi-ev-alert":G?" tm-vi-window-alert":"",we=E?" tm-vi-thumb-ev-alert":G?" tm-vi-thumb-alert":"",nt=E?" tm-vi-text-ev-alert":G?" tm-vi-text-alert":"";return s.jsxs(s.Fragment,{children:[a&&s.jsx("button",{type:"button",className:"tm-vi-backdrop",onClick:S,"aria-label":"Einklappen"}),s.jsx("div",{className:"tm-vi-wrap",children:s.jsxs("button",{type:"button",className:`tm-vi${a?" tm-vi-expanded":""}${K}`,onClick:A,"aria-expanded":a,"aria-label":T,children:[s.jsxs("div",{className:"tm-vi-bar",children:[s.jsx("span",{className:`tm-vi-thumb${we}`,children:E?s.jsx(Ac,{size:22,strokeWidth:2.25}):C?s.jsx(ca,{size:22,strokeWidth:2.25}):s.jsx(qf,{size:28})}),s.jsx("span",{className:`tm-vi-text${nt}`,children:T}),E?s.jsx("span",{className:"tm-vi-ring-wrap tm-vi-ring-wrap-sm tm-vi-ring-ev",children:s.jsx(Ba,{progress:h??0,size:36,className:"tm-vi-ring-sm"})}):j?s.jsx("span",{className:"tm-vi-ring-wrap tm-vi-ring-wrap-sm",children:s.jsx(Ba,{progress:le,size:36,className:"tm-vi-ring-sm"})}):s.jsx("span",{className:`tm-vi-badge${G?" tm-vi-badge-alert":""}`,children:k.length})]}),s.jsx("div",{className:"tm-vi-detail",children:s.jsxs("div",{className:"tm-vi-detail-inner",children:[s.jsx("p",{className:"tm-vi-subtitle",children:J}),C&&s.jsx("div",{className:"tm-vi-window-list",children:k.map(re=>s.jsx(zj,{window:re,onClose:Q,overdue:H.has(re.id)},re.id))}),E&&s.jsxs("div",{className:"tm-vi-body",children:[s.jsxs("div",{className:"tm-vi-ev-metrics",children:[s.jsxs("div",{className:"tm-vi-timer-block",children:[s.jsx("span",{className:"tm-vi-timer-label",children:"Ladeleistung"}),s.jsx("span",{className:"tm-vi-timer-value tm-vi-timer-value-ev",children:M})]}),s.jsxs("div",{className:"tm-vi-timer-block",children:[s.jsx("span",{className:"tm-vi-timer-label",children:"Akku"}),s.jsx("span",{className:"tm-vi-timer-value tm-vi-timer-value-ev tm-vi-timer-value-secondary",children:h!=null?`${h}%`:"—"})]})]}),s.jsx("div",{className:"tm-vi-progress-block",children:s.jsxs("div",{className:"tm-vi-progress-ring-lg tm-vi-ring-ev",children:[s.jsx(Ba,{progress:h??0,size:88,stroke:5,className:"tm-vi-ring-lg"}),s.jsx("span",{className:"tm-vi-progress-icon",children:s.jsx(Ac,{size:44,strokeWidth:2})})]})})]}),j&&s.jsxs("div",{className:"tm-vi-body",children:[s.jsxs("div",{className:"tm-vi-timer-block",children:[s.jsx("span",{className:"tm-vi-timer-label",children:"Timer"}),s.jsx("span",{className:"tm-vi-timer-value",children:z})]}),s.jsx("div",{className:"tm-vi-progress-block",children:s.jsxs("div",{className:"tm-vi-progress-ring-lg",children:[s.jsx(Ba,{progress:le,size:88,stroke:5,className:"tm-vi-ring-lg"}),s.jsx("span",{className:"tm-vi-progress-icon",children:s.jsx(qf,{size:48})})]})})]}),s.jsxs("div",{className:"tm-vi-footer",children:[j?s.jsxs("div",{className:"tm-vi-actions",children:[s.jsx("button",{type:"button",className:"tm-vi-btn tm-vi-btn-pause",onClick:I,"aria-label":"Pausieren",children:s.jsx(pd,{size:18,fill:"currentColor"})}),s.jsx("button",{type:"button",className:"tm-vi-btn tm-vi-btn-stop",onClick:R,"aria-label":"Zur Basis",children:s.jsx(Ye,{size:18})})]}):s.jsx("span",{}),s.jsxs("span",{className:"tm-vi-open",children:["Dashboard",s.jsx(B0,{size:16})]})]})]})})]})})]})}const Lj={id:0,name:"Zuhause",color:"#6366f1"};function C1(){var u,d;const{config:e}=ke(),t=b.useMemo(()=>rC(e.appearance),[e.appearance]),n=((u=e.appearance)==null?void 0:u.mode)!=="light"&&((d=e.appearance)==null?void 0:d.mode)!=="blackColorful",[r,i]=b.useState(()=>o1().view==="settings"?"settings":"dashboard"),[a]=b.useState(Lj),[o,l]=b.useState(Date.now());b.useEffect(()=>{a1({view:r})},[r]);const c=b.useCallback(()=>{l(Date.now()),r==="screensaver"&&i("dashboard")},[r]);return b.useEffect(()=>{if(!e.screensaver.enabled)return;const m=()=>c(),f=e.screensaver.idleMinutes*60*1e3;window.addEventListener("mousemove",m),window.addEventListener("touchstart",m),window.addEventListener("click",m),window.addEventListener("keydown",m);const g=setInterval(()=>{Date.now()-o>f&&r!=="screensaver"&&r!=="settings"&&i("screensaver")},1e3);return()=>{window.removeEventListener("mousemove",m),window.removeEventListener("touchstart",m),window.removeEventListener("click",m),window.removeEventListener("keydown",m),clearInterval(g)}},[o,r,c,e.screensaver.enabled,e.screensaver.idleMinutes]),s.jsxs("div",{className:"tm-full-screen",...t,children:[n&&s.jsx("div",{className:"tm-absolute-fill tm-z-0 tm-bg-cover",style:{backgroundImage:`url("${e.backgroundImage}")`,opacity:"var(--tm-bg-image-opacity)"}}),s.jsx("div",{className:"tm-absolute-fill tm-z-0 tm-overlay-gradient"}),s.jsxs("div",{className:"tm-absolute-fill tm-z-10",children:[r==="dashboard"&&s.jsx(Mj,{}),r==="screensaver"&&s.jsx(ME,{}),r==="dashboard"&&s.jsx("div",{className:"tm-full-screen tm-animate-fade",children:s.jsx(xj,{user:a,onSettings:()=>i("settings"),onScreensaver:()=>i("screensaver")})}),r==="settings"&&s.jsx("div",{className:"tm-full-screen tm-animate-fade",children:s.jsx(Nj,{onBack:()=>i("dashboard")})})]})]})}const E1=`
:host {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, sans-serif;
  color: white;
  position: relative;
  /* Keep position:fixed children inside the card so they don't cover the HA header. */
  transform: translateZ(0);
}

:host,
:root {
  --tm-font: system-ui, -apple-system, sans-serif;
  --tm-accent: #6366f1;
  --tm-accent-rgb: 99, 102, 241;
  --tm-screensaver-gradient: linear-gradient(135deg, rgba(49, 46, 129, 0.3), black, rgba(88, 28, 135, 0.3));
  --tm-white: #ffffff;
  --tm-white-90: rgba(255, 255, 255, 0.9);
  --tm-white-80: rgba(255, 255, 255, 0.8);
  --tm-white-70: rgba(255, 255, 255, 0.7);
  --tm-white-60: rgba(255, 255, 255, 0.6);
  --tm-white-50: rgba(255, 255, 255, 0.5);
  --tm-white-20: rgba(255, 255, 255, 0.2);
  --tm-white-10: rgba(255, 255, 255, 0.1);
  --tm-white-05: rgba(255, 255, 255, 0.05);
  --tm-radius-lg: 1rem;
  --tm-radius-xl: 1.5rem;
  --tm-radius-full: 9999px;
  --tm-gap: 1.5rem;
}

* { box-sizing: border-box; }

.tm-full-screen {
  width: 100%;
  height: 100%;
  min-height: 0;
  position: relative;
  overflow: hidden;
  background: var(--tm-bg, #000);
  color: var(--tm-fg, white);
}
.tm-absolute-fill { position: absolute; inset: 0; width: 100%; height: 100%; }
.tm-z-0 { z-index: 0; }
.tm-z-10 { z-index: 10; }
.tm-z-50 { z-index: 50; }

.tm-bg-cover { background-size: cover; background-position: center; transition: opacity 1s; }
.tm-overlay-gradient { background: var(--tm-overlay, linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.4) 100%)); }

.tm-flex-center { display: flex; align-items: center; justify-content: center; }
.tm-flex-col { display: flex; flex-direction: column; }
.tm-flex-row { display: flex; flex-direction: row; }
.tm-items-center { align-items: center; }
.tm-justify-between { justify-content: space-between; }
.tm-justify-end { justify-content: flex-end; }
.tm-gap-2 { gap: 0.5rem; }
.tm-gap-3 { gap: 0.75rem; }
.tm-gap-4 { gap: 1rem; }
.tm-gap-6 { gap: 1.5rem; }

.tm-text-right { text-align: right; }
.tm-text-center { text-align: center; }

.tm-dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding: var(--tm-gap);
  gap: var(--tm-gap);
  min-height: 0;
  position: relative;
  isolation: isolate;
}
.tm-dashboard--room-sidebar {
  position: relative;
}
.tm-dashboard-main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: var(--tm-gap);
  min-width: 0;
  min-height: 0;
}
.tm-dashboard--room-sidebar .tm-dashboard-main {
  padding-left: calc(17rem + var(--tm-gap));
}
.tm-dashboard--modal-open .tm-dashboard-header,
.tm-dashboard--modal-open .tm-dashboard-body {
  pointer-events: none;
  user-select: none;
}
.tm-dashboard-header {
  flex-shrink: 0;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  align-items: start;
  column-gap: 1rem;
  padding: 0 1rem;
  overflow: visible;
  z-index: 30;
}
.tm-dashboard-header h1,
.tm-dashboard-header p {
  margin: 0;
}
.tm-dashboard-header-right {
  justify-self: end;
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 1.5rem;
}
.tm-dashboard-header-presence {
  grid-column: 1 / -1;
  justify-content: center;
  padding-top: 0.75rem;
}
.tm-dashboard-title-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1rem;
  overflow: visible;
}
.tm-room-selector {
  position: relative;
  z-index: 20;
}
.tm-room-selector-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.85rem;
  border-radius: var(--tm-radius-full);
  border: 1px solid var(--tm-white-20);
  background: var(--tm-white-10);
  color: inherit;
  font: inherit;
  font-size: 0.95rem;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: background 0.15s, border-color 0.15s;
}
.tm-room-selector-trigger:hover:not(:disabled) {
  background: var(--tm-white-20);
  border-color: var(--tm-white-30, rgba(255,255,255,0.3));
}
.tm-room-selector-trigger:disabled {
  opacity: 0.5;
  cursor: default;
}
.tm-room-selector-label {
  font-weight: 500;
  opacity: 0.9;
}
.tm-room-selector-chevron {
  opacity: 0.7;
  transition: transform 0.15s;
}
.tm-room-selector-chevron.open {
  transform: rotate(180deg);
}
.tm-room-selector-menu {
  position: absolute;
  top: calc(100% + 0.35rem);
  left: 0;
  min-width: 10rem;
  margin: 0;
  padding: 0.35rem;
  list-style: none;
  border-radius: 0.75rem;
  border: 1px solid var(--tm-white-20);
  background: rgba(20, 20, 30, 0.92);
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}
.tm-room-selector-option {
  display: block;
  width: 100%;
  padding: 0.55rem 0.85rem;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.tm-room-selector-option:hover,
.tm-room-selector-option.active {
  background: rgba(var(--tm-accent-rgb), 0.25);
}
.tm-room-sidebar {
  position: absolute;
  left: var(--tm-gap);
  top: var(--tm-gap);
  bottom: var(--tm-gap);
  z-index: 25;
  width: 17rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.35rem 1.15rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-white-20);
  background: rgba(20, 20, 30, 0.82);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.38);
  overflow-y: auto;
}
.tm-room-sidebar-title {
  margin: 0 0 0.35rem;
  padding: 0 0.65rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.45;
}
.tm-room-sidebar-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.tm-room-sidebar-option {
  display: block;
  width: 100%;
  padding: 0.9rem 1rem;
  border: none;
  border-radius: 0.85rem;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 1.05rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
}
.tm-room-sidebar-option:hover:not(:disabled) {
  background: rgba(var(--tm-accent-rgb), 0.18);
  transform: translateX(2px);
}
.tm-room-sidebar-option.active {
  background: rgba(var(--tm-accent-rgb), 0.3);
  box-shadow: inset 0 0 0 1px rgba(var(--tm-accent-rgb), 0.35);
}
.tm-room-sidebar-option:disabled {
  opacity: 0.5;
  cursor: default;
}
.tm-room-config-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.tm-room-config-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.tm-room-config-name {
  flex: 1;
}
.tm-room-config-remove {
  padding: 0.35rem 0.75rem;
  min-height: auto;
  font-size: 0.75rem;
  flex-shrink: 0;
}
.tm-room-config-add {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.75rem;
}
.tm-room-config-add .tm-input {
  flex: 1;
  min-width: 10rem;
}
.tm-room-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tm-room-suggestion-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  border-radius: var(--tm-radius-full);
  border: 1px solid var(--tm-white-20);
  background: var(--tm-white-05);
  color: inherit;
  font: inherit;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.tm-room-suggestion-chip:hover:not(:disabled) {
  background: rgba(var(--tm-accent-rgb), 0.2);
  border-color: rgba(var(--tm-accent-rgb), 0.4);
}
.tm-room-suggestion-chip:disabled {
  opacity: 0.4;
  cursor: default;
}
.tm-page-pager-wrap {
  flex: 1 1 auto;
  width: 100%;
  max-width: 100%;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.tm-page-pager {
  flex: 1 1 auto;
  width: 100%;
  max-width: 100%;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
}
.tm-page-pager::-webkit-scrollbar { display: none; }
.tm-page-pager.is-scrolling,
.tm-page-pager.is-scrolling * {
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.tm-page {
  flex: 0 0 100%;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  scroll-snap-align: start;
  min-height: 0;
  height: 100%;
  overflow: hidden;
}
.tm-page-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 0 0.25rem;
  flex-shrink: 0;
}
.tm-page-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.3);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s;
}
.tm-page-dot.active {
  background: white;
  transform: scale(1.3);
}
.tm-page-indicator--edit {
  gap: 0.75rem;
}
.tm-page-indicator-track {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.tm-page-bar {
  width: 1.75rem;
  height: 0.25rem;
  border-radius: 9999px;
  border: none;
  background: rgba(255, 255, 255, 0.28);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s, width 0.2s;
}
.tm-page-bar.active {
  background: white;
  width: 2.25rem;
  transform: none;
}
.tm-page-manage-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
  flex-shrink: 0;
}
.tm-page-manage-trigger:hover {
  background: rgba(var(--tm-accent-rgb), 0.35);
}
.tm-page-manage-overlay {
  position: fixed;
  inset: 0;
  z-index: 420;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  pointer-events: auto;
  touch-action: none;
  animation: fadeIn 0.2s ease-out;
}
.tm-page-manage-backdrop {
  position: absolute;
  inset: 0;
  border: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  cursor: default;
}
.tm-page-manage-panel {
  position: relative;
  z-index: 1;
  width: min(24rem, calc(100vw - 2rem));
  max-height: min(28rem, calc(100vh - 2rem));
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 1rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-white-10);
  background: rgba(12, 12, 16, 0.94);
  color: white;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
  animation: weatherSlideUp 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-page-manage-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}
.tm-page-manage-title {
  font-size: 1.0625rem;
  font-weight: 700;
}
.tm-page-manage-subtitle {
  margin-top: 0.125rem;
  font-size: 0.75rem;
  opacity: 0.65;
}
.tm-page-manage-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
  flex-shrink: 0;
}
.tm-page-manage-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  min-height: 0;
}
.tm-page-manage-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem;
  border-radius: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
}
.tm-page-manage-row.active {
  border-color: rgba(129, 140, 248, 0.55);
  background: rgba(var(--tm-accent-rgb), 0.14);
}
.tm-page-manage-select {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  text-align: left;
  padding: 0.25rem 0.35rem;
}
.tm-page-manage-index {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 700;
  flex-shrink: 0;
}
.tm-page-manage-name {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0;
}
.tm-page-manage-name:focus {
  outline: none;
}
.tm-page-manage-actions {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  flex-shrink: 0;
}
.tm-page-manage-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
}
.tm-page-manage-action:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.tm-page-manage-action--danger {
  color: #fecaca;
  background: rgba(239, 68, 68, 0.16);
}
.tm-page-manage-add {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  border: 1px dashed rgba(255, 255, 255, 0.18);
  border-radius: 0.875rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}
.tm-page-manage-add:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.tm-page-manage-hint {
  margin: 0;
  font-size: 0.75rem;
  opacity: 0.55;
  text-align: center;
}
.tm-dashboard::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #ffffff;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-dashboard--edit {
  color: #1d1d1f;
}
.tm-dashboard--edit::before {
  opacity: 1;
}
.tm-dashboard--edit .tm-dashboard-header h1,
.tm-dashboard--edit .tm-dashboard-header p {
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-dashboard-header,
.tm-dashboard--edit .tm-dashboard-body {
  animation: tmEditFadeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes tmEditFadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.tm-dashboard--edit .tm-page-pager {
  touch-action: none;
}
.tm-dashboard--edit .tm-btn-round {
  background: rgba(0, 0, 0, 0.06);
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-btn-round:hover {
  background: rgba(0, 0, 0, 0.1);
}
.tm-dashboard--edit .tm-btn-round.active {
  background: rgba(var(--tm-accent-rgb), 0.14);
  border: 1px solid rgba(var(--tm-accent-rgb), 0.35);
  color: #4338ca;
}
.tm-dashboard--edit .tm-page-bar {
  background: rgba(0, 0, 0, 0.14);
  transition: background 0.25s ease, width 0.25s ease;
}
.tm-dashboard--edit .tm-page-bar.active {
  background: #1d1d1f;
}
.tm-dashboard--edit .tm-page-manage-trigger {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.05);
  color: #1d1d1f;
  transition: background 0.2s ease;
}
.tm-dashboard--edit .tm-page-manage-trigger:hover {
  background: rgba(var(--tm-accent-rgb), 0.12);
}
.tm-dashboard--edit .tm-dashboard-grid-cell {
  border-color: rgba(0, 0, 0, 0.08);
  transition: border-color 0.35s ease;
}
.tm-dashboard--edit .tm-dashboard-grid-item.editing {
  outline-color: rgba(0, 0, 0, 0.1);
  transition:
    outline-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.12s var(--tm-layout-ease, cubic-bezier(0.22, 1, 0.36, 1));
}
.tm-dashboard--edit .tm-dashboard-grid-item.editing.is-interacting {
  outline-color: rgba(var(--tm-accent-rgb), 0.55);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.14);
  z-index: 20;
}
.tm-dashboard--edit .tm-dashboard-grid-item.selected {
  outline-color: rgba(var(--tm-accent-rgb), 0.75);
  box-shadow: 0 0 0 1px rgba(var(--tm-accent-rgb), 0.2);
}
.tm-dashboard--edit .tm-dashboard-editor {
  animation: tmEditSlideIn 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes tmEditSlideIn {
  from { opacity: 0; transform: translateX(12px); }
  to { opacity: 1; transform: translateX(0); }
}
.tm-dashboard--edit .tm-dashboard-editor-toolbar {
  background: rgba(0, 0, 0, 0.035);
  border-color: rgba(0, 0, 0, 0.06);
}
.tm-dashboard--edit .tm-dashboard-editor-btn,
.tm-dashboard--edit .tm-dashboard-editor-done {
  border-color: rgba(0, 0, 0, 0.08);
  background: #ffffff;
  color: #1d1d1f;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.tm-dashboard--edit .tm-dashboard-editor-btn.active {
  background: rgba(var(--tm-accent-rgb), 0.12);
  border-color: rgba(var(--tm-accent-rgb), 0.35);
  color: #4338ca;
}
.tm-dashboard--edit .tm-dashboard-editor-done {
  background: #4338ca;
  border-color: #4338ca;
  color: #ffffff;
}
.tm-dashboard--edit .tm-dashboard-editor-done:hover {
  background: #3730a3;
  border-color: #3730a3;
}
.tm-dashboard--edit .tm-dashboard-editor-panel,
.tm-dashboard--edit .tm-widget-inspector {
  background: #f5f5f7;
  border-color: rgba(0, 0, 0, 0.07);
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-dashboard-editor-close {
  color: #1d1d1f;
  background: rgba(0, 0, 0, 0.06);
}
.tm-dashboard--edit .tm-preset-card,
.tm-dashboard--edit .tm-palette-item {
  border-color: rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.85);
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-preset-card:hover,
.tm-dashboard--edit .tm-palette-item:hover {
  background: rgba(var(--tm-accent-rgb), 0.1);
}
.tm-dashboard--edit .tm-preset-block {
  background: rgba(0, 0, 0, 0.15);
}
.tm-dashboard--edit .tm-palette-icon {
  background: rgba(var(--tm-accent-rgb), 0.18);
  color: #4338ca;
}
.tm-dashboard--edit .tm-widget-inspector-size {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-widget-inspector-size.active {
  background: rgba(var(--tm-accent-rgb), 0.14);
  border-color: rgba(var(--tm-accent-rgb), 0.45);
  color: #4338ca;
  box-shadow: inset 0 0 0 1px rgba(var(--tm-accent-rgb), 0.12);
}
.tm-dashboard--edit .tm-widget-inspector-entity-row {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
}
.tm-dashboard--edit .tm-input,
.tm-dashboard--edit .tm-entity-picker-trigger {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.12);
  color: #1d1d1f;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.tm-dashboard--edit .tm-widget-inspector .tm-entity-picker-trigger,
.tm-dashboard--edit .tm-widget-inspector .tm-input {
  min-height: 2.5rem;
  padding: 0.55rem 0.75rem;
  font-size: 0.8125rem;
  border-radius: 0.7rem;
}
.tm-dashboard--edit .tm-widget-inspector .tm-btn-secondary {
  min-height: 2.5rem;
  padding: 0.55rem 0.9rem;
  font-size: 0.8125rem;
  font-weight: 600;
}
.tm-dashboard--edit .tm-widget-inspector .tm-setting-toggle {
  margin-top: 0.35rem;
  padding: 0.55rem 0.65rem;
  border-radius: 0.7rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 0.8125rem;
  font-weight: 600;
}
.tm-dashboard--edit .tm-input::placeholder {
  color: rgba(0, 0, 0, 0.35);
}
.tm-dashboard--edit .tm-input:focus,
.tm-dashboard--edit .tm-entity-picker-trigger:focus {
  border-color: rgba(var(--tm-accent-rgb), 0.55);
  box-shadow: 0 0 0 3px rgba(var(--tm-accent-rgb), 0.12);
}
.tm-dashboard--edit .tm-entity-picker-dropdown {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.14);
}
.tm-dashboard--edit .tm-entity-picker-search {
  color: #1d1d1f;
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.tm-dashboard--edit .tm-entity-picker-search::placeholder {
  color: rgba(0, 0, 0, 0.35);
}
.tm-dashboard--edit .tm-entity-picker-item {
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-entity-picker-item:hover {
  background: rgba(0, 0, 0, 0.04);
}
.tm-dashboard--edit .tm-entity-picker-item.selected {
  background: rgba(var(--tm-accent-rgb), 0.12);
  color: #4338ca;
}
.tm-dashboard--edit .tm-btn-secondary {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.12);
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-btn-secondary:hover {
  background: rgba(var(--tm-accent-rgb), 0.08);
  border-color: rgba(var(--tm-accent-rgb), 0.3);
}
.tm-dashboard--edit .tm-widget-inspector-delete {
  background: rgba(239, 68, 68, 0.1);
  color: #b91c1c;
}
.tm-dashboard--edit .tm-widget-inspector-delete:hover {
  background: rgba(239, 68, 68, 0.18);
}
.tm-dashboard--edit .tm-widget-inspector-remove {
  background: rgba(0, 0, 0, 0.05);
  color: #52525b;
}
.tm-dashboard--edit .tm-widget-inspector-remove:hover {
  background: rgba(239, 68, 68, 0.12);
  color: #b91c1c;
}
.tm-dashboard--edit .tm-setting-toggle {
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-ha-card-error {
  color: #b91c1c;
}
.tm-dashboard--edit .tm-widget-inspector-type {
  background: rgba(var(--tm-accent-rgb), 0.1);
  color: #4338ca;
}
@media (prefers-reduced-motion: reduce) {
  .tm-dashboard::before,
  .tm-dashboard--edit .tm-page-bar,
  .tm-dashboard--edit .tm-dashboard-grid-cell,
  .tm-dashboard--edit .tm-dashboard-grid-item.editing,
  .tm-dashboard-body .tm-page-pager-wrap,
  .tm-dashboard-grid--edit .tm-dashboard-grid-overlay {
    transition: none;
    animation: none;
  }
  .tm-dashboard--edit .tm-dashboard-header,
  .tm-dashboard--edit .tm-dashboard-body,
  .tm-dashboard--edit .tm-dashboard-editor {
    animation: none;
  }
}
.tm-dashboard-body {
  flex: 1 1 auto;
  display: flex;
  gap: 1rem;
  min-height: 0;
  min-width: 0;
  transition: gap 0.38s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-dashboard-body .tm-page-pager-wrap {
  flex: 1 1 auto;
  min-width: 0;
  transition: flex 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-btn-round.active {
  background: rgba(var(--tm-accent-rgb), 0.45);
  border-color: rgba(165, 180, 252, 0.5);
}
.tm-dashboard-grid {
  position: relative;
  display: grid;
  gap: var(--tm-gap);
  width: 100%;
  height: 100%;
  min-height: 0;
  min-width: 0;
}
.tm-dashboard-grid--edit {
  display: block;
}
.tm-dashboard-grid--edit .tm-dashboard-grid-overlay {
  animation: tmGridOverlayIn 0.38s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes tmGridOverlayIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.tm-dashboard-grid-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: inherit;
  grid-template-rows: inherit;
  gap: inherit;
  pointer-events: none;
  z-index: 0;
}
.tm-dashboard-grid-cell {
  border: 1px dashed rgba(255, 255, 255, 0.08);
  border-radius: 0.5rem;
}
.tm-dashboard-grid-cell--occupied {
  pointer-events: none;
}
.tm-dashboard-grid-cell--empty {
  pointer-events: auto;
  padding: 0;
  margin: 0;
  background: transparent;
  cursor: pointer;
  border-color: rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}
.tm-dashboard-grid-cell--empty:hover {
  background: rgba(var(--tm-accent-rgb), 0.1);
  border-color: rgba(var(--tm-accent-rgb), 0.45);
}
.tm-dashboard-grid-cell--empty:active {
  transform: scale(0.98);
}
.tm-dashboard--edit .tm-dashboard-grid-cell--empty {
  border-color: rgba(0, 0, 0, 0.12);
}
.tm-dashboard--edit .tm-dashboard-grid-cell--empty:hover {
  background: rgba(var(--tm-accent-rgb), 0.12);
}
.tm-slot-picker-overlay {
  position: fixed;
  inset: 0;
  z-index: 430;
  pointer-events: auto;
  touch-action: none;
  animation: fadeIn 0.18s ease-out;
}
.tm-slot-picker-backdrop {
  position: absolute;
  inset: 0;
  border: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  cursor: default;
}
.tm-slot-picker-panel {
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.875rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #f2f2f7;
  color: #1d1d1f;
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.22);
  animation: weatherSlideUp 0.26s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;
}
.tm-slot-picker-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  flex-shrink: 0;
}
.tm-slot-picker-title {
  font-size: 0.9375rem;
  font-weight: 700;
}
.tm-slot-picker-subtitle {
  margin-top: 0.125rem;
  font-size: 0.75rem;
  opacity: 0.6;
}
.tm-slot-picker-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.06);
  color: #1d1d1f;
  cursor: pointer;
  flex-shrink: 0;
}
.tm-slot-picker-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  overflow-y: auto;
  min-height: 0;
}
.tm-slot-picker-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0.75rem;
  padding: 0.5rem 0.625rem;
  background: rgba(255, 255, 255, 0.85);
  color: #1d1d1f;
  font-size: 0.75rem;
  cursor: pointer;
  text-align: left;
}
.tm-slot-picker-item:hover {
  background: rgba(var(--tm-accent-rgb), 0.1);
}
.tm-slot-picker-icon {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.4rem;
  background: rgba(var(--tm-accent-rgb), 0.18);
  color: #4338ca;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}
.tm-dashboard-grid-item {
  position: relative;
  z-index: 1;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}
.tm-dashboard-grid-item.editing {
  outline: 1px solid rgba(255, 255, 255, 0.12);
  outline-offset: -1px;
  border-radius: var(--tm-radius-xl);
}
.tm-dashboard-grid-item.selected {
  outline: 2px solid rgba(129, 140, 248, 0.85);
  outline-offset: -2px;
}
.tm-dashboard-grid-chrome {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  border-radius: inherit;
}
.tm-dashboard-grid-resize-edge {
  position: absolute;
  pointer-events: auto;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  z-index: 6;
  touch-action: none;
}
.tm-dashboard-grid-resize-edge--n,
.tm-dashboard-grid-resize-edge--s {
  left: 2rem;
  right: 2rem;
  height: 0.75rem;
  cursor: ns-resize;
}
.tm-dashboard-grid-resize-edge--n {
  top: 0;
  transform: translateY(-40%);
}
.tm-dashboard-grid-resize-edge--s {
  bottom: 0;
  transform: translateY(40%);
}
.tm-dashboard-grid-resize-edge--e,
.tm-dashboard-grid-resize-edge--w {
  top: 2rem;
  bottom: 2rem;
  width: 0.75rem;
  cursor: ew-resize;
}
.tm-dashboard-grid-resize-edge--e {
  right: 0;
  transform: translateX(40%);
}
.tm-dashboard-grid-resize-edge--w {
  left: 0;
  transform: translateX(-40%);
}
.tm-dashboard-grid-resize-corner {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 1.25rem;
  height: 1.25rem;
  border: none;
  padding: 0;
  margin: 0;
  border-radius: 0.35rem;
  background: rgba(0, 0, 0, 0.45);
  cursor: nwse-resize;
  pointer-events: auto;
  z-index: 7;
  touch-action: none;
  transform: translate(25%, 25%);
}
.tm-dashboard-grid-resize-corner::after {
  content: '';
  display: block;
  width: 0.55rem;
  height: 0.55rem;
  margin: 0.2rem;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
}
.tm-dashboard-grid-item.selected .tm-dashboard-grid-resize-edge--n {
  background: linear-gradient(to bottom, rgba(129, 140, 248, 0.35), transparent);
}
.tm-dashboard-grid-item.selected .tm-dashboard-grid-resize-edge--s {
  background: linear-gradient(to top, rgba(129, 140, 248, 0.35), transparent);
}
.tm-dashboard-grid-item.selected .tm-dashboard-grid-resize-edge--e {
  background: linear-gradient(to left, rgba(129, 140, 248, 0.35), transparent);
}
.tm-dashboard-grid-item.selected .tm-dashboard-grid-resize-edge--w {
  background: linear-gradient(to right, rgba(129, 140, 248, 0.35), transparent);
}
.tm-dashboard-grid-drag {
  pointer-events: auto;
  border: none;
  background: rgba(0, 0, 0, 0.45);
  color: white;
  cursor: grab;
  position: absolute;
  top: 0.35rem;
  left: 0.35rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
}
.tm-dashboard-grid-drag:active {
  cursor: grabbing;
}
.tm-dashboard-grid-badge {
  position: absolute;
  top: 0.35rem;
  left: 2.25rem;
  right: 2rem;
  font-size: 0.625rem;
  font-weight: 700;
  opacity: 0.85;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-dashboard-grid-content {
  height: 100%;
  min-height: 0;
  overflow: hidden;
}
.tm-dashboard-grid-content > * {
  width: 100%;
  height: 100%;
}
.tm-dashboard-grid-item--energy-tile .tm-dashboard-grid-content,
.tm-dashboard-grid-item--sankey .tm-dashboard-grid-content {
  padding: 0;
}
.tm-dashboard-grid-item--energy-tile .tm-energy-device-stack,
.tm-dashboard-grid-item--energy-tile .tm-quick-action,
.tm-dashboard-grid-item--energy-tile .tm-energy-device-card {
  height: 100%;
}
.tm-popup-widget-stack {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
  height: 100%;
  min-height: 0;
}
.tm-dashboard-editor {
  width: min(20.5rem, 36vw);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 0;
}
.tm-dashboard-editor-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
}
.tm-dashboard-editor-btn,
.tm-dashboard-editor-done {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.12s ease;
}
.tm-dashboard-editor-btn:hover,
.tm-dashboard-editor-done:hover {
  transform: translateY(-1px);
}
.tm-dashboard-editor-btn.active {
  background: rgba(var(--tm-accent-rgb), 0.16);
  border-color: rgba(var(--tm-accent-rgb), 0.4);
  color: #4338ca;
}
.tm-dashboard-editor-done {
  margin-left: auto;
  background: rgba(var(--tm-accent-rgb), 0.45);
}
.tm-dashboard-editor-panel {
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.125rem;
  padding: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
}
.tm-dashboard-editor-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.tm-dashboard-editor-panel-header strong {
  font-size: 0.875rem;
}
.tm-dashboard-editor-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border: none;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.06);
  color: inherit;
  cursor: pointer;
  opacity: 0.85;
}
.tm-dashboard-editor-close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.1);
}
.tm-preset-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}
.tm-preset-card {
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.875rem;
  padding: 0.625rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.12s ease;
}
.tm-preset-card:hover {
  background: rgba(var(--tm-accent-rgb), 0.2);
  transform: translateY(-1px);
}
.tm-preset-preview {
  display: flex;
  gap: 0.2rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;
}
.tm-preset-block {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 0.25rem;
  min-width: 0.5rem;
}
.tm-preset-name {
  font-size: 0.8125rem;
  font-weight: 700;
}
.tm-preset-desc {
  font-size: 0.6875rem;
  opacity: 0.65;
  line-height: 1.35;
  margin-top: 0.2rem;
}
.tm-palette-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.45rem;
  max-height: 18rem;
  overflow-y: auto;
  padding-right: 0.15rem;
}
.tm-palette-item {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.875rem;
  padding: 0.55rem 0.65rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.12s ease;
}
.tm-palette-item:hover {
  transform: translateY(-1px);
}
.tm-palette-icon {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.5rem;
  background: rgba(var(--tm-accent-rgb), 0.35);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}
.tm-dashboard-editor-inspector-wrap {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  border-radius: 1.125rem;
}
.tm-widget-inspector {
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.125rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
}
.tm-widget-inspector--empty {
  justify-content: center;
  align-items: center;
  min-height: 12rem;
  text-align: center;
  gap: 0.65rem;
  padding: 1.5rem 1.25rem;
}
.tm-widget-inspector-empty-icon {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--tm-accent-rgb), 0.12);
  color: #4338ca;
}
.tm-widget-inspector-empty-title {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 700;
}
.tm-widget-inspector-empty-text {
  margin: 0;
  max-width: 14rem;
  font-size: 0.8125rem;
  line-height: 1.45;
  opacity: 0.65;
}
.tm-widget-inspector-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.65rem;
  padding-bottom: 0.875rem;
  margin-bottom: 0.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.tm-widget-inspector-title {
  font-size: 1.0625rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.01em;
}
.tm-widget-inspector-type {
  display: inline-flex;
  margin-top: 0.35rem;
  padding: 0.15rem 0.45rem;
  border-radius: 9999px;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  background: rgba(255, 255, 255, 0.1);
  opacity: 1;
}
.tm-widget-inspector-delete {
  border: none;
  background: rgba(239, 68, 68, 0.2);
  color: #fecaca;
  border-radius: 0.65rem;
  width: 2.15rem;
  height: 2.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.tm-widget-inspector-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.875rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.tm-widget-inspector-section:last-child {
  border-bottom: none;
  padding-bottom: 0.15rem;
}
.tm-widget-inspector-label {
  font-size: 0.6875rem;
  font-weight: 700;
  opacity: 0.55;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.tm-widget-inspector-hint {
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.45;
  opacity: 0.6;
}
.tm-widget-inspector-meta {
  font-size: 0.6875rem;
  opacity: 0.55;
  font-variant-numeric: tabular-nums;
}
.tm-widget-inspector-field {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.tm-widget-inspector-field-label {
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.7;
}
.tm-widget-inspector-sizes {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.35rem;
}
.tm-widget-inspector-size {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.65rem;
  padding: 0.45rem 0.35rem;
  background: rgba(255, 255, 255, 0.06);
  color: white;
  font-size: 0.6875rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  min-height: 2.6rem;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}
.tm-widget-inspector-size-dim {
  font-size: 0.5625rem;
  font-weight: 600;
  opacity: 0.55;
  font-variant-numeric: tabular-nums;
}
.tm-widget-inspector-size.active {
  background: rgba(var(--tm-accent-rgb), 0.45);
}
.tm-widget-inspector-size.active .tm-widget-inspector-size-dim {
  opacity: 0.8;
}
.tm-widget-inspector-sizes--stack {
  display: flex;
  flex-direction: column;
  grid-template-columns: none;
}
.tm-widget-inspector-sizes--segment {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.tm-widget-inspector-sizes--segment .tm-widget-inspector-size,
.tm-widget-inspector-sizes--hours .tm-widget-inspector-size {
  min-height: 2.25rem;
  flex-direction: row;
  justify-content: center;
  font-size: 0.75rem;
}
.tm-widget-inspector-sizes--hours {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3.25rem, 1fr));
}
.tm-widget-inspector-size--wide {
  width: 100%;
  border-radius: 0.75rem;
  padding: 0.55rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  text-align: left;
  font-weight: 600;
  min-height: auto;
}
.tm-widget-inspector-entity-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.15rem;
}
.tm-widget-inspector-entity-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 0.55rem;
  border-radius: 0.7rem;
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.8125rem;
  font-weight: 500;
}
.tm-widget-inspector-remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border: none;
  border-radius: 0.45rem;
  background: rgba(255, 255, 255, 0.08);
  color: inherit;
  cursor: pointer;
  flex-shrink: 0;
  opacity: 0.7;
  transition: background 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}
.tm-widget-inspector-remove:hover {
  opacity: 1;
}
.tm-weather-compact .tm-weather-content {
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.75rem 0.875rem;
}
.tm-weather-compact .tm-weather-main {
  min-width: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.25rem 0.5rem;
}
.tm-weather-compact .tm-weather-temp-xl {
  grid-column: 2;
  grid-row: 1 / span 2;
  font-size: 2rem;
}
.tm-weather-compact .tm-weather-condition {
  font-size: 0.8125rem;
  margin-top: 0;
}
.tm-weather-compact .tm-weather-hilo,
.tm-weather-compact .tm-weather-day-strip:not(.tm-weather-hourly-preview) {
  display: none;
}
.tm-weather-compact .tm-weather-location {
  font-size: 0.6875rem;
  margin-bottom: 0;
}
.tm-weather-compact .tm-weather-hourly-preview {
  display: flex;
  margin-top: 0;
  padding-top: 0;
  gap: 0.2rem;
  overflow: hidden;
}
.tm-card.empty,
.tm-quick-action.empty,
.tm-alarm-widget.empty,
.tm-scene-btn.empty {
  cursor: pointer;
}
.tm-grid-page-units {
  display: grid;
  grid-template-columns: 2fr repeat(4, minmax(0, 1fr));
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--tm-gap);
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 0;
  min-width: 0;
}
.tm-unit-2-stack {
  grid-column: 1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  gap: var(--tm-gap);
  min-height: 0;
}
.tm-unit-2-stack > * { min-height: 0; overflow: hidden; }
.tm-unit-2-stack .tm-weather-content {
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.75rem 0.875rem;
}
.tm-unit-2-stack .tm-weather-main {
  min-width: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.25rem 0.5rem;
}
.tm-unit-2-stack .tm-weather-temp-xl {
  grid-column: 2;
  grid-row: 1 / span 2;
  font-size: 2rem;
}
.tm-unit-2-stack .tm-weather-condition {
  font-size: 0.8125rem;
  margin-top: 0;
}
.tm-unit-2-stack .tm-weather-hilo,
.tm-unit-2-stack .tm-weather-day-strip:not(.tm-weather-hourly-preview) {
  display: none;
}
.tm-unit-2-stack .tm-weather-location {
  font-size: 0.6875rem;
  margin-bottom: 0;
}
.tm-unit-2-stack .tm-weather-hourly-preview {
  display: flex;
  margin-top: 0;
  padding-top: 0;
  gap: 0.2rem;
  overflow: hidden;
}
.tm-unit-2-stack .tm-weather-hourly-preview .tm-weather-slot {
  min-width: 0;
  flex: 1 1 0;
  padding: 0.3rem 0.0625rem;
  gap: 0.15rem;
  border-radius: 0.45rem;
}
.tm-unit-2-stack .tm-weather-hourly-preview .tm-weather-slot-time {
  font-size: 0.5rem;
  letter-spacing: 0;
}
.tm-unit-2-stack .tm-weather-hourly-preview .tm-weather-slot-temp {
  font-size: 0.6875rem;
}
.tm-unit-2-stack .tm-weather-hourly-preview .tm-weather-slot svg {
  width: 0.875rem;
  height: 0.875rem;
}
.tm-unit-1-grid {
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--tm-gap);
  min-height: 0;
  min-width: 0;
}
.tm-widget-column {
  min-height: 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: var(--tm-gap);
}
.tm-widget-column--qa-popup {
  grid-template-rows: 1fr 1fr;
}
.tm-widget-column--qa-popup .tm-scene-stack {
  grid-row: 1;
  min-height: 0;
}
.tm-qa-column-spacer {
  grid-row: 2;
  min-height: 0;
}
.tm-qa-scene-trigger.active {
  border-color: rgba(254, 240, 138, 0.35);
}
.tm-qa-scene-state {
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
}
.tm-qa-scene-icon-wrap {
  position: relative;
}
.tm-qa-entity-count {
  position: absolute;
  right: -0.2rem;
  bottom: -0.2rem;
  min-width: 1rem;
  height: 1rem;
  padding: 0 0.2rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.55);
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 1rem;
  text-align: center;
}
.tm-qa-popup-overlay {
  position: fixed;
  inset: 0;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  pointer-events: auto;
  touch-action: none;
  animation: fadeIn 0.2s ease-out;
}
.tm-qa-popup-backdrop {
  position: absolute;
  inset: 0;
  border: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  cursor: default;
  pointer-events: auto;
  touch-action: none;
}
.tm-qa-popup-panel {
  position: relative;
  z-index: 1;
  pointer-events: auto;
  touch-action: manipulation;
  width: 11.5rem;
  height: 11.5rem;
  padding: 0.625rem;
  border-radius: var(--tm-radius-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  overflow: hidden;
  border: 1px solid var(--tm-white-10);
  color: white;
  animation: weatherSlideUp 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-qa-popup-panel--multi {
  width: min(20rem, calc(100vw - 2rem));
  max-height: min(28rem, calc(100vh - 2rem));
  height: auto;
  align-items: stretch;
  justify-content: flex-start;
  gap: 0.75rem;
  padding: 0.875rem;
  overflow: hidden;
}
.tm-qa-popup-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.625rem;
}
.tm-qa-popup-header-icon {
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
}
.tm-qa-popup-header-text {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}
.tm-qa-popup-header-text .tm-scene-label {
  text-align: left;
}
.tm-qa-popup-entities {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  min-height: 0;
  max-height: 16rem;
  padding-right: 0.125rem;
}
.tm-qa-popup-entity {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.625rem;
  border-radius: 0.75rem;
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.tm-qa-popup-entity.active {
  border-color: rgba(254, 240, 138, 0.25);
  background: rgba(234, 179, 8, 0.12);
}
.tm-light-color-circles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  align-items: center;
}
.tm-light-color-circle {
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.28);
  background: var(--tm-light-color);
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.tm-light-color-circle:hover {
  transform: scale(1.08);
  border-color: rgba(255, 255, 255, 0.55);
}
.tm-light-color-circle.active {
  border-color: white;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.25);
}
.tm-widget-inspector-entity-row--popup {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
}
.tm-widget-inspector-entity-row--popup.disabled {
  opacity: 0.55;
}
.tm-widget-inspector-entity-disable {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  font-size: 0.6875rem;
  white-space: nowrap;
}
.tm-widget-inspector-entity-disable input {
  width: 0.95rem;
  height: 0.95rem;
  accent-color: var(--tm-accent);
  cursor: pointer;
}
.tm-widget-inspector-entity-disable-label {
  opacity: 0.75;
}
.tm-widget-inspector-entity-row-main {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
.tm-widget-inspector-entity-name {
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-widget-inspector-entity-hint {
  font-size: 0.625rem;
  opacity: 0.55;
}
.tm-qa-popup-entity-text {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}
.tm-qa-popup-entity-name {
  font-size: 0.8125rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-qa-popup-entity-state {
  font-size: 0.6875rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.tm-qa-popup-entity-toggle {
  border: none;
  border-radius: 9999px;
  padding: 0.3rem 0.625rem;
  background: rgba(255, 255, 255, 0.14);
  color: white;
  font-size: 0.6875rem;
  font-weight: 700;
  cursor: pointer;
  flex-shrink: 0;
}
.tm-qa-popup-entity-readonly {
  width: 2.25rem;
  flex-shrink: 0;
}
.tm-qa-popup-panel--multi .tm-qa-popup-toggle {
  align-self: stretch;
  margin-top: auto;
}
.tm-qa-popup-panel .tm-scene-icon {
  width: 2.75rem;
  height: 2.75rem;
}
.tm-qa-popup-panel .tm-scene-label {
  position: relative;
  z-index: 1;
  font-size: 0.9375rem;
}
.tm-qa-popup-state {
  position: relative;
  z-index: 1;
  font-size: 0.75rem;
  opacity: 0.85;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.tm-qa-popup-toggle {
  position: relative;
  z-index: 1;
  margin-top: 0.125rem;
  padding: 0.375rem 0.75rem;
  border: none;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.18);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
}
.tm-qa-popup-close {
  position: absolute;
  top: 0.375rem;
  right: 0.375rem;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border: none;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.35);
  color: white;
  cursor: pointer;
}
.tm-widget-column .tm-quick-action { min-height: 0; height: 100%; }
.tm-widget-column .tm-alarm-widget { min-height: 0; height: 100%; }
.tm-scene-stack {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: var(--tm-gap);
  min-height: 0;
}
.tm-stack-2 {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: var(--tm-gap);
  min-height: 0;
  height: 100%;
}
.tm-stack-2 > * { min-height: 0; overflow: hidden; }
.tm-grid-page {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
  gap: var(--tm-gap);
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-width: 0;
}
.tm-row-full { grid-row: 1 / -1; }
.tm-grid-dashboard {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: var(--tm-gap);
  padding: var(--tm-gap);
  height: 100%;
}
.tm-col-12 { grid-column: span 12; }
.tm-col-8 { grid-column: span 8; }
.tm-col-6 { grid-column: span 6; }
.tm-col-4 { grid-column: span 4; }
.tm-col-3 { grid-column: span 3; }
.tm-row-1 { grid-row: span 1; }
.tm-row-2 { grid-row: span 2; }
.tm-row-3 { grid-row: span 3; }

.tm-card {
  background: var(--tm-surface, rgba(255, 255, 255, 0.10));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-surface-border, rgba(255, 255, 255, 0.05));
  color: var(--tm-tile-fg, var(--tm-fg, white));
  overflow: hidden;
}
.tm-card-dark {
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(12px);
  border: 1px solid var(--tm-white-05);
  border-radius: var(--tm-radius-xl);
}

.tm-btn-round {
  padding: 0.75rem;
  border-radius: 9999px;
  background: var(--tm-surface-2, rgba(255, 255, 255, 0.10));
  border: none;
  color: var(--tm-fg, white);
  cursor: pointer;
  transition: background 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  min-height: 48px;
}
.tm-btn-round:hover { background: var(--tm-surface, rgba(255, 255, 255, 0.20)); }

.tm-presence-chip {
  display: flex; align-items: center; gap: 0.5rem;
  background: var(--tm-white-10);
  backdrop-filter: blur(8px);
  padding: 0.375rem 1rem 0.375rem 0.375rem;
  border-radius: 9999px;
  border: 1px solid var(--tm-white-05);
}
.tm-avatar-sm {
  width: 2rem; height: 2rem;
  border-radius: 50%;
  background: var(--tm-accent);
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  border: 2px solid rgba(255,255,255,0.2);
}
.tm-avatar-img { width: 100%; height: 100%; object-fit: cover; }

.tm-title-lg { font-size: 1.875rem; font-weight: 300; line-height: 1.25; }
.tm-title-xl { font-size: 2.25rem; font-weight: 300; line-height: 1; }
.tm-text-hero { font-size: 6rem; font-weight: 700; line-height: 1; }
.tm-clock-lg { font-size: 2.25rem; font-weight: 700; line-height: 1; }
.tm-font-bold { font-weight: 700; }
.tm-text-sm { font-size: 0.875rem; }
.tm-text-xs { font-size: 0.75rem; }
.tm-opacity-70 { opacity: 0.7; }
.tm-opacity-50 { opacity: 0.5; }

.tm-quick-action {
  padding: 0.875rem 1rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-surface-border, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  transition: transform 0.1s;
  background: var(--tm-surface, rgba(255, 255, 255, 0.10));
  text-align: left;
  height: 100%;
  width: 100%;
  color: var(--tm-tile-fg, white);
  min-height: 0;
}
.tm-quick-action:not(.tm-brightness-action) .tm-flex-col {
  margin-top: 0;
}
.tm-quick-action:active { transform: scale(0.95); }
.tm-quick-action.empty {
  border-style: dashed;
  opacity: 0.5;
  justify-content: center;
  align-items: center;
}

.tm-sensor-widget {
  padding: 0.875rem 1rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-surface-border, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  background: var(--tm-surface, rgba(255, 255, 255, 0.10));
  height: 100%;
  width: 100%;
  color: var(--tm-tile-fg, white);
  min-height: 0;
  overflow: visible;
}
.tm-sensor-widget--multi {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.625rem;
  padding: 0.75rem;
}
.tm-sensor-widget--combined-chart {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 0.75rem;
}
.tm-sensor-multi-readings {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
  flex-shrink: 0;
}
.tm-sensor-multi-chart {
  flex: 1 1 auto;
  min-height: 3rem;
}
.tm-sensor-multi-scrub-time {
  text-align: center;
  margin-top: -0.15rem;
}
.tm-sensor-series-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  flex-shrink: 0;
}
.tm-sensor-sparkline-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.75rem;
  font-size: 0.65rem;
  opacity: 0.72;
  line-height: 1.2;
}
.tm-sensor-sparkline-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
}
.tm-sensor-sparkline-legend-item span:last-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-sensor-reading--compact .tm-sensor-reading-label {
  text-transform: none;
  letter-spacing: 0;
  font-size: 0.72rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  line-height: 1.2;
}
.tm-sensor-widget.empty {
  border-style: dashed;
  opacity: 0.5;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: inherit;
  font: inherit;
}
.tm-sensor-reading {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
  min-height: 0;
}
.tm-sensor-reading--compact {
  padding: 0.5rem 0.625rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  gap: 0.35rem;
}
.tm-sensor-reading-top {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}
.tm-sensor-reading-label {
  font-size: 0.75rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-sensor-reading-value-row {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  min-width: 0;
}
.tm-sensor-reading-value {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.tm-sensor-reading--compact .tm-sensor-reading-value {
  font-size: 1.25rem;
  font-variant-numeric: tabular-nums;
}
.tm-sensor-reading-unit {
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.75;
}
.tm-sensor-reading--compact .tm-sensor-reading-unit {
  font-size: 0.8rem;
}
.tm-sensor-widget--history {
  justify-content: stretch;
  padding: 0.75rem 0.875rem 0.625rem;
  gap: 0;
}
.tm-sensor-widget--history:not(.tm-sensor-widget--multi) .tm-sensor-single--history {
  height: 100%;
  min-height: 0;
}
.tm-sensor-single--history {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-height: 0;
}
.tm-sensor-reading--history {
  flex: 1;
  gap: 0.2rem;
  min-height: 0;
}
.tm-sensor-reading--history .tm-sensor-reading-top {
  flex-shrink: 0;
}
.tm-sensor-reading--history .tm-sensor-reading-label {
  text-transform: none;
  font-size: 0.8125rem;
  letter-spacing: 0;
  font-weight: 500;
  opacity: 0.85;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  line-height: 1.25;
}
.tm-sensor-reading--history .tm-sensor-reading-value-row {
  flex-shrink: 0;
  margin-bottom: 0.15rem;
}
.tm-sensor-reading--history .tm-sensor-reading-value {
  font-size: 1.875rem;
}
.tm-sensor-reading--history .tm-sensor-reading-unit {
  font-size: 0.95rem;
}
.tm-sensor-reading-scrub-time {
  font-size: 0.72rem;
  opacity: 0.7;
  line-height: 1.2;
  min-height: 0.86rem;
  margin-top: -0.1rem;
  flex-shrink: 0;
}
.tm-sensor-reading-scrub-time.is-idle {
  visibility: hidden;
  pointer-events: none;
}
.tm-sensor-sparkline-wrap {
  flex: 1 1 auto;
  min-height: 2.75rem;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.tm-sensor-sparkline-chart {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  gap: 0.2rem;
}
.tm-sensor-sparkline-chart.compact {
  min-height: 1.5rem;
}
.tm-sensor-sparkline-interactive {
  flex: 1 1 auto;
  min-height: 2.5rem;
  touch-action: none;
  cursor: crosshair;
  user-select: none;
  -webkit-user-select: none;
  display: flex;
}
.tm-sensor-sparkline-interactive .tm-sensor-sparkline {
  width: 100%;
  height: 100%;
  min-height: inherit;
  flex: 1;
}
.tm-sensor-sparkline-chart.compact .tm-sensor-sparkline-interactive {
  min-height: 1.35rem;
}
.tm-sensor-sparkline {
  display: block;
  width: 100%;
  flex: 1 1 auto;
  min-height: 2.5rem;
  color: rgba(var(--tm-accent-rgb), 0.95);
}
.tm-sensor-sparkline-chart.compact .tm-sensor-sparkline {
  min-height: 1.35rem;
}
.tm-sensor-sparkline-range {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.65rem;
  opacity: 0.55;
  line-height: 1;
  flex-shrink: 0;
}
.tm-sensor-sparkline.compact {
  min-height: 1.35rem;
  margin-top: 0.25rem;
}
.tm-sensor-sparkline--loading {
  width: 100%;
  height: 100%;
  min-height: 2.5rem;
  border-radius: 0.5rem;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.04) 100%
  );
  background-size: 200% 100%;
  animation: tmSensorSparklineShimmer 1.2s ease-in-out infinite;
}
.tm-sensor-sparkline-area {
  /* fill set per series via inline style */
}
.tm-sensor-sparkline-line {
  fill: none;
  stroke-width: 1.75;
  stroke-linecap: round;
  stroke-linejoin: round;
  /* stroke set per series via inline style */
}
.tm-sensor-sparkline-chart.multi .tm-sensor-sparkline-line {
  stroke-width: 2;
}
.tm-sensor-sparkline-scrub-line {
  stroke: rgba(255, 255, 255, 0.35);
  stroke-width: 1;
  pointer-events: none;
}
.tm-sensor-sparkline-scrub-dot {
  fill: #fff;
  stroke-width: 1.5;
  pointer-events: none;
  /* stroke set per series via inline style */
}
@keyframes tmSensorSparklineShimmer {
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}

.tm-contact-widget {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: 0.875rem 1rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-surface-border, rgba(255, 255, 255, 0.05));
  background: var(--tm-surface, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(12px);
  color: var(--tm-tile-fg, white);
  text-align: left;
}
.tm-contact-widget--empty {
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-style: dashed;
  opacity: 0.55;
  cursor: pointer;
}
.tm-contact-widget--single {
  justify-content: space-between;
}
.tm-contact-widget--open {
  background: rgba(245, 158, 11, 0.12);
  border-color: rgba(251, 191, 36, 0.28);
}
.tm-contact-widget-hero-icon {
  align-self: flex-start;
}
.tm-contact-widget-body {
  margin-top: auto;
}
.tm-contact-widget-label {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.25;
}
.tm-contact-widget-state {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  opacity: 0.75;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.tm-contact-widget--open .tm-contact-widget-state {
  color: #fde68a;
  opacity: 1;
}
.tm-contact-widget-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-shrink: 0;
}
.tm-contact-widget-summary-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.65;
}
.tm-contact-widget-summary-badge {
  font-size: 0.6875rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.18);
  color: #a7f3d0;
}
.tm-contact-widget-summary-badge--alert {
  background: rgba(245, 158, 11, 0.22);
  color: #fde68a;
}
.tm-contact-widget-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
  gap: 0.5rem;
  min-height: 0;
  overflow: auto;
}
.tm-contact-row {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  min-width: 0;
  padding: 0.45rem 0.55rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.tm-contact-row--open {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(251, 191, 36, 0.22);
}
.tm-contact-row-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 0.1rem;
}
.tm-contact-row-label {
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-contact-row-state {
  font-size: 0.625rem;
  opacity: 0.65;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.tm-contact-row--open .tm-contact-row-state {
  color: #fde68a;
  opacity: 1;
}
.tm-contact-icon-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.14);
  color: #6ee7b7;
  box-shadow: inset 0 0 0 1px rgba(110, 231, 183, 0.18);
  transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}
.tm-contact-row--compact .tm-contact-icon-badge {
  width: 2.125rem;
  height: 2.125rem;
}
.tm-contact-icon-badge--open {
  background: rgba(245, 158, 11, 0.18);
  color: #fbbf24;
  box-shadow:
    inset 0 0 0 1px rgba(251, 191, 36, 0.28),
    0 0 0 0 rgba(251, 191, 36, 0.35);
  animation: tmContactOpenPulse 2.4s ease-in-out infinite;
}
.tm-contact-icon-badge--moving {
  animation: tmContactMoving 1.1s ease-in-out infinite;
}
@keyframes tmContactOpenPulse {
  0%, 100% {
    box-shadow:
      inset 0 0 0 1px rgba(251, 191, 36, 0.28),
      0 0 0 0 rgba(251, 191, 36, 0.25);
  }
  50% {
    box-shadow:
      inset 0 0 0 1px rgba(251, 191, 36, 0.42),
      0 0 0 0.35rem rgba(251, 191, 36, 0.12);
  }
}
@keyframes tmContactMoving {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-8deg); }
  75% { transform: rotate(8deg); }
}
.tm-widget-column .tm-contact-widget { min-height: 0; height: 100%; }

.tm-alarm-widget {
  position: relative;
  padding: 0.875rem 1rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-surface-border, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  cursor: pointer;
  transition: transform 0.1s;
  background: var(--tm-surface, rgba(255, 255, 255, 0.05));
  text-align: left;
  height: 100%;
  width: 100%;
  color: var(--tm-tile-fg, white);
  min-height: 0;
  overflow: hidden;
}
.tm-alarm-widget:active { transform: scale(0.95); }
.tm-alarm-widget.empty {
  border-style: dashed;
  opacity: 0.5;
  justify-content: center;
  align-items: center;
}
.tm-alarm-widget-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}
.tm-alarm-widget-icon {
  opacity: 0.65;
  color: rgba(255, 255, 255, 0.75);
}
.tm-alarm-widget-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: #6ee7b7;
  flex-shrink: 0;
  margin-top: 0.125rem;
}
.tm-alarm-widget-body {
  margin-top: auto;
}
.tm-alarm-widget-label {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.25;
}
.tm-alarm-widget-state {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.tm-alarm-widget.armed {
  background: rgba(16, 185, 129, 0.16);
  border-color: rgba(110, 231, 183, 0.35);
  color: #d1fae5;
  animation: tm-alarm-pulse 2.2s ease-in-out infinite;
}
.tm-alarm-widget.armed .tm-alarm-widget-icon {
  opacity: 1;
  color: #a7f3d0;
}
.tm-alarm-widget.triggered {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(248, 113, 113, 0.5);
  color: #fecaca;
  animation: tm-alarm-pulse-urgent 1s ease-in-out infinite;
}
.tm-alarm-widget.triggered .tm-alarm-widget-dot {
  background: #fca5a5;
}
.tm-alarm-widget.triggered .tm-alarm-widget-icon {
  opacity: 1;
  color: #fecaca;
}
@keyframes tm-alarm-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.35);
    background: rgba(16, 185, 129, 0.14);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
    background: rgba(16, 185, 129, 0.24);
  }
}
@keyframes tm-alarm-pulse-urgent {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.45);
    background: rgba(239, 68, 68, 0.18);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(239, 68, 68, 0);
    background: rgba(239, 68, 68, 0.32);
  }
}

.tm-brightness-action {
  position: relative;
  overflow: hidden;
  cursor: ns-resize;
  touch-action: none;
  user-select: none;
  justify-content: flex-start;
}
.tm-brightness-action:active { transform: none; }
.tm-brightness-action.dragging .tm-brightness-fill {
  transition: none;
}
.tm-brightness-fill {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--tm-brightness, 50%);
  background: linear-gradient(to top, rgba(234, 179, 8, 0.55), rgba(254, 240, 138, 0.15));
  pointer-events: none;
  transition: height 0.12s ease;
}
.tm-brightness-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  flex-shrink: 0;
}
.tm-brightness-colors {
  position: relative;
  z-index: 2;
  margin-top: auto;
  padding-top: 0.5rem;
  touch-action: manipulation;
}
.tm-brightness-action--light .tm-light-color-circles {
  justify-content: center;
}
.tm-brightness-action--light .tm-light-color-circle {
  width: 1.25rem;
  height: 1.25rem;
}

.tm-cover-action {
  position: relative;
  overflow: hidden;
  cursor: ns-resize;
  touch-action: none;
  user-select: none;
  justify-content: flex-start;
}
.tm-cover-action:active { transform: none; }
.tm-cover-action.dragging .tm-cover-fill {
  transition: none;
}
.tm-cover-fill {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--tm-cover-position, 50%);
  background: linear-gradient(to top, rgba(59, 130, 246, 0.55), rgba(191, 219, 254, 0.15));
  pointer-events: none;
  transition: height 0.12s ease;
}
.tm-cover-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
}
.tm-cover-group {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  height: 100%;
  width: 100%;
  min-height: 0;
  min-width: 0;
}
.tm-cover-group--edit {
  cursor: pointer;
}
.tm-cover-group--edit .tm-cover-action {
  pointer-events: none;
}
.tm-cover-action--group {
  flex: 1 1 0;
  min-width: 0;
  padding: 0.5rem 0.375rem;
}
.tm-cover-action--group .tm-cover-header {
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.25rem;
}
.tm-cover-action--group .tm-cover-header .tm-flex-col {
  align-items: center;
  width: 100%;
}
.tm-cover-group-label {
  font-size: 0.75rem;
  line-height: 1.2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
.tm-cover-popup-entities {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-height: min(50vh, 20rem);
  overflow-y: auto;
  padding-right: 0.125rem;
}
.tm-cover-popup-entity {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--tm-radius-lg);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.tm-cover-popup-entity.active {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.25);
}
.tm-cover-popup-entity-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
}
.tm-cover-popup-entity-name {
  font-weight: 600;
  font-size: 0.8125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-cover-popup-entity-state {
  font-size: 0.6875rem;
  opacity: 0.65;
}
.tm-cover-popup-slider {
  width: 5.5rem;
  flex-shrink: 0;
  accent-color: #60a5fa;
  cursor: pointer;
}
.tm-cover-popup-toggle {
  background: rgba(59, 130, 246, 0.25) !important;
  border-color: rgba(59, 130, 246, 0.35) !important;
}
.tm-cover-header state-icon,
.tm-cover-header ha-icon {
  flex-shrink: 0;
}

.tm-cover-card {
  container-type: size;
  cursor: default;
  justify-content: space-between;
  gap: clamp(0.5rem, 5cqh, 1.25rem);
  padding: clamp(0.75rem, 6cqmin, 1.5rem);
  overflow: hidden;
}
.tm-cover-card:active { transform: none; }
.tm-cover-card-main {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  gap: clamp(0.5rem, 4cqw, 1.5rem);
}
.tm-cover-card-info {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.tm-cover-card-title {
  font-size: clamp(0.95rem, 7cqmin, 1.75rem);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.01em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-cover-card-area,
.tm-cover-card-status {
  font-size: clamp(0.75rem, 4.2cqmin, 1.125rem);
  line-height: 1.3;
  opacity: 0.45;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-cover-card-area {
  margin-top: 0.2em;
}
.tm-cover-card-value {
  margin-top: auto;
  font-size: clamp(2rem, 22cqmin, 5.5rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
}
.tm-cover-card-unit {
  font-size: 0.9em;
}
.tm-cover-card-status {
  margin-top: 0.35em;
}

.tm-cover-visual {
  --tm-cover-visual-h: calc(68cqh - 12cqmin);
  --tm-cover-visual-w: min(48cqw, calc(var(--tm-cover-visual-h) * 1.1));
  flex: 0 0 auto;
  width: var(--tm-cover-visual-w);
  height: min(var(--tm-cover-visual-h), calc(var(--tm-cover-visual-w) * 1.5));
  max-height: 100%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  cursor: ns-resize;
  touch-action: none;
  user-select: none;
}
.tm-cover-visual-box {
  flex: 0 0 auto;
  height: clamp(0.75rem, 9cqh, 2.25rem);
  border-radius: 0.6rem;
  background: linear-gradient(to bottom, #ffffff 0%, #f1f1ef 70%, #dcdcd8 100%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 1;
}
.tm-cover-visual-window {
  flex: 1 1 auto;
  min-height: 0;
  margin: -0.35rem 6% 0;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 0.85rem 0.85rem;
  border: 0.35rem solid color-mix(in srgb, #ffffff 45%, transparent);
  border-top: none;
}
.tm-cover-visual-view {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 45% 55% at 85% 75%, rgba(96, 140, 64, 0.85), transparent 70%),
    radial-gradient(ellipse 40% 50% at 15% 85%, rgba(120, 160, 80, 0.8), transparent 70%),
    radial-gradient(ellipse 35% 40% at 55% 95%, rgba(150, 180, 110, 0.7), transparent 70%),
    linear-gradient(to bottom, #e6f1f7 0%, #d4e6ef 55%, #b9d0a6 100%);
  filter: blur(3px);
  transform: scale(1.1);
}
.tm-cover-visual-slats {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background:
    repeating-linear-gradient(
      to bottom,
      color-mix(in srgb, #ffffff 70%, var(--tm-surface, #cfe9dc)) 0,
      color-mix(in srgb, #ffffff 55%, var(--tm-surface, #cfe9dc)) calc(var(--tm-cover-slat, 0.9rem) - 1px),
      rgba(0, 0, 0, 0.14) calc(var(--tm-cover-slat, 0.9rem) - 1px),
      rgba(0, 0, 0, 0.14) var(--tm-cover-slat, 0.9rem)
    );
  background-position: bottom;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  transition: height 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-cover-card.dragging .tm-cover-visual-slats {
  transition: none;
}

.tm-cover-card-controls {
  flex: 0 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.35fr 1fr;
  gap: clamp(0.375rem, 2.5cqw, 0.75rem);
  height: clamp(2.25rem, 24cqh, 4.5rem);
}
.tm-cover-card-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: clamp(0.75rem, 4cqmin, 1.25rem);
  background: color-mix(in srgb, currentColor 7%, transparent);
  color: inherit;
  cursor: pointer;
  transition: transform 0.12s ease, background 0.15s ease;
}
.tm-cover-card-btn svg {
  width: clamp(1.1rem, 8cqmin, 1.75rem);
  height: auto;
}
.tm-cover-card-btn:active:not(:disabled) {
  transform: scale(0.95);
}
.tm-cover-card-btn:disabled {
  cursor: default;
}
.tm-cover-card-btn--stop {
  background: var(--tm-tile-fg, #ffffff);
  color: var(--tm-cover-stop-fg, #000000);
}
@container (max-width: 15rem) {
  .tm-cover-visual { display: none; }
}
@container (max-height: 9rem) {
  .tm-cover-card-area,
  .tm-cover-card-status { display: none; }
}

.tm-scene-btn {
  position: relative;
  overflow: hidden;
  padding: 0.5rem;
  border-radius: var(--tm-radius-xl);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 0.25rem;
  border: 1px solid var(--tm-white-10);
  cursor: pointer;
  background: transparent;
  color: white;
  width: 100%;
  height: 100%;
  min-height: 0;
}
.tm-scene-btn .tm-scene-label {
  position: relative;
  z-index: 10;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-scene-btn .tm-scene-icon state-icon,
.tm-scene-btn .tm-scene-icon ha-icon,
.tm-quick-action state-icon,
.tm-quick-action ha-icon,
.tm-brightness-header state-icon,
.tm-brightness-header ha-icon {
  flex-shrink: 0;
}
.tm-scene-btn .tm-scene-icon {
  position: relative;
  z-index: 10;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.tm-scene-btn.empty { border-style: dashed; opacity: 0.5; }

.tm-scenes {
  container: tm-scenes / size;
  width: 100%;
  height: 100%;
  min-height: 0;
}
.tm-scenes-grid {
  display: grid;
  width: 100%;
  height: 100%;
  gap: calc(var(--tm-gap, 1.5rem) * 0.6);
}
.tm-scenes-grid--1 { grid-template: minmax(0, 1fr) / minmax(0, 1fr); }
.tm-scenes-grid--2 { grid-template: repeat(2, minmax(0, 1fr)) / minmax(0, 1fr); }
.tm-scenes-grid--3,
.tm-scenes-grid--4 { grid-template: repeat(2, minmax(0, 1fr)) / repeat(2, minmax(0, 1fr)); }
.tm-scenes-grid--3 > :last-child { grid-column: span 2; }
@container tm-scenes (min-aspect-ratio: 2 / 1) {
  .tm-scenes-grid--2 { grid-template: minmax(0, 1fr) / repeat(2, minmax(0, 1fr)); }
}
@container tm-scenes (min-aspect-ratio: 5 / 2) {
  .tm-scenes-grid--3 { grid-template: minmax(0, 1fr) / repeat(3, minmax(0, 1fr)); }
  .tm-scenes-grid--3 > :last-child { grid-column: auto; }
  .tm-scenes-grid--4 { grid-template: minmax(0, 1fr) / repeat(4, minmax(0, 1fr)); }
}

.tm-scene-card {
  --tm-scene-strong: rgba(var(--tm-accent-rgb, 99, 102, 241), 0.9);
  --tm-scene-muted: color-mix(in srgb, var(--tm-tile-fg, #ffffff) 50%, var(--tm-scene-strong));
  container: tm-scene-card / size;
  min-width: 0;
  min-height: 0;
  border-radius: var(--tm-radius-xl);
  background: var(--tm-surface, rgba(255, 255, 255, 0.1));
  border: 1px solid var(--tm-surface-border, rgba(255, 255, 255, 0.05));
  color: var(--tm-tile-fg, #ffffff);
  overflow: hidden;
}
.tm-scene-card-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-areas: "text" "art" "start";
  gap: clamp(0.4rem, 4cqh, 0.9rem);
  height: 100%;
  padding: clamp(0.75rem, 7cqmin, 1.5rem);
}
.tm-scene-card-text {
  grid-area: text;
  min-width: 0;
}
.tm-scene-card-kicker {
  display: none;
  font-size: clamp(0.8rem, 3.2cqw, 1.2rem);
  color: var(--tm-scene-muted);
  margin-bottom: 0.35em;
}
.tm-scene-card-title {
  font-size: clamp(0.95rem, 9cqw, 1.4rem);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.01em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-scene-card-sub {
  margin-top: 0.3em;
  font-size: clamp(0.7rem, 6cqw, 0.95rem);
  line-height: 1.3;
  color: var(--tm-scene-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-scene-card-art {
  grid-area: art;
  container-type: size;
  position: relative;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.tm-scene-card-art-disc {
  position: absolute;
  width: min(92cqh, 92cqw);
  height: min(92cqh, 92cqw);
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 42%,
    #fbf6ee 0%,
    color-mix(in srgb, var(--tm-scene-strong) 28%, #ece8f2) 75%
  );
}
.tm-scene-card-art img {
  position: relative;
  width: min(100cqh, 100cqw);
  height: min(100cqh, 100cqw);
  object-fit: contain;
  user-select: none;
}
[data-tm-theme="blackColorful"] .tm-scene-card {
  --tm-scene-strong: oklch(from var(--tm-surface) calc(l - 0.14) min(calc(c * 1.5 + 0.03), 0.13) h);
  border: none;
}
[data-tm-theme="blackColorful"] .tm-scene-card-art-disc {
  background: radial-gradient(
    circle at 50% 42%,
    rgba(255, 244, 228, 0.8) 0%,
    color-mix(in srgb, var(--tm-scene-strong) 16%, rgba(255, 255, 255, 0.35)) 72%
  );
}
.tm-scene-card-start {
  grid-area: start;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
  height: clamp(2.25rem, 22cqh, 3.5rem);
  border: none;
  border-radius: clamp(0.75rem, 5cqmin, 1.25rem);
  background: var(--tm-scene-strong);
  color: #ffffff;
  font: inherit;
  font-size: clamp(0.95rem, 4cqw, 1.6rem);
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.12s ease, filter 0.15s ease;
}
.tm-scene-card-start:active:not(:disabled) {
  transform: scale(0.97);
  filter: brightness(0.94);
}
.tm-scene-card-start:disabled {
  cursor: default;
}
.tm-scene-card-start svg {
  width: clamp(1.1rem, 9cqmin, 1.9rem);
  height: auto;
  flex-shrink: 0;
}
.tm-scene-card-start-label {
  display: none;
}
@container tm-scene-card (min-width: 19rem) and (min-aspect-ratio: 13 / 10) {
  .tm-scene-card-inner {
    grid-template-columns: minmax(0, 1fr) minmax(0, 46%);
    grid-template-rows: minmax(0, 1fr) auto;
    grid-template-areas: "text art" "start start";
    column-gap: 0.5rem;
    row-gap: clamp(0.6rem, 5cqh, 1.25rem);
  }
  .tm-scene-card-text {
    align-self: center;
  }
  .tm-scene-card-kicker { display: block; }
  .tm-scene-card-title { font-size: clamp(1.25rem, 6.5cqw, 2.5rem); }
  .tm-scene-card-sub { font-size: clamp(0.85rem, 3.4cqw, 1.35rem); }
  .tm-scene-card-art { justify-content: flex-end; }
  .tm-scene-card-start { height: clamp(2.75rem, 24cqh, 5rem); }
  .tm-scene-card-start-label { display: inline; }
}
@container tm-scene-card (max-height: 8.5rem) {
  .tm-scene-card-inner {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) auto;
    grid-template-areas: "text" "start";
  }
  .tm-scene-card-art,
  .tm-scene-card-sub { display: none; }
}
.tm-scene-gradient {
  position: absolute; inset: 0; opacity: 0.55;
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.tm-animate-fade { animation: fadeIn 0.5s ease-out; }

.tm-profile-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; max-width: 56rem; margin: 0 auto; }
.tm-profile-card { display: flex; flex-direction: column; align-items: center; gap: 1rem; background: none; border: none; cursor: pointer; }
.tm-profile-avatar-lg {
  width: 8rem; height: 8rem; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 2.25rem; font-weight: bold; overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  transition: transform 0.2s;
}
.tm-profile-card:hover .tm-profile-avatar-lg { transform: scale(1.05); }

.tm-weather-widget {
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: white;
  cursor: pointer;
  border: none;
  text-align: left;
  position: relative;
  overflow: hidden;
  transition: transform 0.15s ease;
}
.tm-weather-widget:active { transform: scale(0.98); }
.tm-weather-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  transition: opacity 0.4s ease;
}
.tm-weather-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.tm-weather-video-stack {
  overflow: hidden;
}
.tm-weather-video-stack .tm-weather-video {
  position: absolute;
  inset: 0;
}
.tm-weather-video-fast {
  opacity: 1;
  z-index: 1;
  transition: opacity 2s ease;
}
.tm-weather-video-slow {
  opacity: 0;
  transition: opacity 2s ease;
}
.tm-weather-video-stack.is-blending .tm-weather-video-fast,
.tm-weather-video-stack.is-slow .tm-weather-video-fast {
  opacity: 0;
}
.tm-weather-video-stack.is-blending .tm-weather-video-slow,
.tm-weather-video-stack.is-slow .tm-weather-video-slow {
  opacity: 1;
}
.tm-weather-video-stack.is-slow .tm-weather-video-fast {
  visibility: hidden;
}
.tm-weather-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
}
.tm-weather-location {
  font-size: 0.8125rem;
  font-weight: 600;
  opacity: 0.85;
  letter-spacing: 0.02em;
}
.tm-weather-temp-xl {
  font-size: 3.5rem;
  font-weight: 200;
  line-height: 1;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
}
.tm-weather-condition {
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.9;
  margin-top: 0.125rem;
}
.tm-weather-hilo {
  font-size: 0.875rem;
  opacity: 0.75;
  margin-top: 0.25rem;
  font-variant-numeric: tabular-nums;
}
.tm-weather-day-strip {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
  overflow-x: auto;
  scrollbar-width: none;
}
.tm-weather-day-strip::-webkit-scrollbar { display: none; }
.tm-weather-slot {
  flex: 1;
  min-width: 3.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.25rem;
  border-radius: 0.75rem;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(8px);
}
.tm-weather-slot.now {
  background: rgba(255,255,255,0.22);
}
.tm-weather-slot-time {
  font-size: 0.6875rem;
  font-weight: 600;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.tm-weather-slot-temp {
  font-size: 0.875rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.tm-media-widget {
  position: relative;
  height: 100%;
  overflow: visible;
}
.tm-media-widget.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1.25rem;
  cursor: pointer;
}
.tm-media-widget--compact.empty {
  padding: 0.875rem 1rem;
}
.tm-media-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.125rem;
  background: rgba(18, 18, 20, 0.92) !important;
  overflow: visible;
}
.tm-media-widget--compact .tm-media-card {
  padding: 0.875rem 1rem;
}
.tm-media-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 2;
}
.tm-media-widget--compact .tm-media-header {
  margin-bottom: 0.5rem;
}
.tm-media-header-text {
  min-width: 0;
}
.tm-media-device-name {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
}
.tm-media-widget--compact .tm-media-device-name {
  font-size: 0.9375rem;
}
.tm-media-device-brand {
  margin-top: 0.125rem;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.45);
}
.tm-media-widget--compact .tm-media-device-brand {
  font-size: 0.75rem;
}
.tm-media-power-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.55);
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;
}
.tm-media-power-btn.on {
  background: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.85);
}
.tm-media-body {
  position: relative;
  display: flex;
  align-items: stretch;
  flex: 1 1 auto;
  min-height: 0;
}
.tm-media-panel {
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 0.75rem 0.875rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.tm-media-widget--compact .tm-media-panel {
  gap: 0.5rem;
  padding: 0.625rem 0.75rem;
  border-radius: 0.875rem;
}
.tm-media-track {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  min-width: 0;
}
.tm-media-artwork {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.1) center / cover no-repeat;
}
.tm-media-widget--compact .tm-media-artwork {
  width: 2rem;
  height: 2rem;
}
.tm-media-track-meta {
  min-width: 0;
  flex: 1 1 auto;
}
.tm-media-track-title {
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-media-widget--compact .tm-media-track-title {
  font-size: 0.8125rem;
}
.tm-media-track-artist {
  margin-top: 0.125rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-media-widget--compact .tm-media-track-artist {
  font-size: 0.6875rem;
}
.tm-media-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
}
.tm-media-widget--compact .tm-media-controls {
  gap: 1rem;
}
.tm-media-control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 9999px;
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  padding: 0;
}
.tm-media-control-play {
  width: 2.125rem;
  height: 2.125rem;
}
.tm-media-pause-bars {
  display: flex;
  gap: 0.2rem;
}
.tm-media-pause-bars span {
  width: 0.18rem;
  height: 0.875rem;
  background: currentColor;
  border-radius: 9999px;
}
.tm-media-progress {
  margin-top: auto;
  padding-top: 0.125rem;
}
.tm-media-progress-track {
  position: relative;
  height: 2px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.18);
}
.tm-media-progress-fill {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.75);
}
.tm-media-progress-thumb {
  position: absolute;
  top: 50%;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: white;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
}
.tm-media-device-wrap {
  position: absolute;
  right: -0.35rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
  height: 118%;
  max-height: 7.5rem;
}
.tm-media-widget--compact .tm-media-device-wrap {
  right: -0.5rem;
  height: 125%;
  max-height: 6.25rem;
}
.tm-media-device-img {
  display: block;
  height: 100%;
  width: auto;
  max-width: none;
  object-fit: contain;
  object-position: right center;
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.45));
}

.tm-weather-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: fadeIn 0.25s ease-out;
}
.tm-weather-overlay-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(8px);
}
.tm-weather-expanded {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  border-radius: 1.75rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 80px rgba(0,0,0,0.45);
  animation: weatherSlideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes weatherSlideUp {
  from { opacity: 0; transform: translateY(24px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.tm-weather-expanded-header {
  padding: 2rem 1.75rem 1.5rem;
  position: relative;
  overflow: hidden;
}
.tm-weather-expanded-header > :not(.tm-weather-bg):not(.tm-weather-video) {
  position: relative;
  z-index: 1;
}
.tm-weather-expanded-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tm-weather-expanded-temp {
  font-size: 5rem;
  font-weight: 200;
  line-height: 1;
  letter-spacing: -0.05em;
  font-variant-numeric: tabular-nums;
}
.tm-weather-expanded-body {
  background: rgba(0,0,0,0.25);
  backdrop-filter: blur(20px);
  padding: 1.25rem 1.75rem 1.75rem;
  overflow-y: auto;
  flex: 1;
}
.tm-weather-hourly {
  display: flex;
  gap: 0.625rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  margin-bottom: 1.25rem;
  scrollbar-width: none;
}
.tm-weather-hourly::-webkit-scrollbar { display: none; }
.tm-weather-hourly-slot {
  flex-shrink: 0;
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0.5rem;
  border-radius: 1rem;
  background: rgba(255,255,255,0.08);
}
.tm-weather-hourly-slot.now { background: rgba(255,255,255,0.18); }
.tm-weather-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}
.tm-weather-stat {
  padding: 0.875rem 1rem;
  border-radius: 1rem;
  background: rgba(255,255,255,0.08);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.tm-weather-stat-label {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.55;
  font-weight: 600;
}
.tm-weather-stat-value {
  font-size: 1.125rem;
  font-weight: 600;
}
.tm-weather-daily-list {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}
.tm-weather-daily-row {
  display: grid;
  grid-template-columns: 3.5rem 1fr 2.5rem 2.5rem 3rem;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  font-size: 0.9375rem;
}
.tm-weather-daily-row:last-child { border-bottom: none; }
.tm-weather-daily-day { font-weight: 600; }
.tm-weather-daily-bar {
  height: 4px;
  border-radius: 2px;
  background: rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
}
.tm-weather-daily-bar-fill {
  position: absolute;
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(90deg, #38bdf8, #fbbf24);
}
.tm-weather-daily-temp {
  text-align: right;
  font-variant-numeric: tabular-nums;
  opacity: 0.55;
  font-size: 0.875rem;
}
.tm-weather-daily-temp.high {
  font-weight: 600;
  opacity: 1;
}

.tm-settings-layout { display: grid; grid-template-columns: 1fr; gap: 2rem; max-width: 64rem; margin: 0 auto; width: 100%; }
@media (min-width: 768px) { .tm-settings-layout { grid-template-columns: 1fr 1fr; } }
.tm-settings-panel {
  background: var(--tm-settings-bg, rgba(0, 0, 0, 0.85));
  color: var(--tm-fg, white);
}
.tm-setting-group { background: var(--tm-settings-surface, var(--tm-surface-2, rgba(255, 255, 255, 0.05))); border-radius: var(--tm-radius-xl); padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; border: 1px solid var(--tm-settings-surface-border, var(--tm-surface-border, rgba(255, 255, 255, 0.05))); }
.tm-setting-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
}
.tm-setting-toggle input {
  width: 1.125rem;
  height: 1.125rem;
  accent-color: var(--tm-accent);
  cursor: pointer;
}
.tm-range { width: 100%; height: 0.5rem; background: var(--tm-white-20); border-radius: 0.5rem; appearance: none; -webkit-appearance: none; }
.tm-range::-webkit-slider-thumb { -webkit-appearance: none; width: 1rem; height: 1rem; background: white; border-radius: 50%; cursor: pointer; }

.tm-color-mode-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.tm-color-mode-btn {
  flex: 1 1 8rem;
  min-height: 3rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--tm-white-10);
  background: var(--tm-white-05);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.tm-color-mode-btn:hover {
  background: var(--tm-white-10);
}
.tm-color-mode-btn.active {
  background: rgba(var(--tm-accent-rgb), 0.2);
  border-color: rgba(var(--tm-accent-rgb), 0.55);
  box-shadow: 0 0 0 1px rgba(var(--tm-accent-rgb), 0.15);
}
.tm-color-set-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}
@media (min-width: 640px) {
  .tm-color-set-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
.tm-color-set-btn {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;
  padding: 0.625rem;
  border-radius: 0.75rem;
  border: 1px solid var(--tm-white-10);
  background: var(--tm-white-05);
  color: white;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.tm-color-set-btn:hover {
  border-color: var(--tm-white-20);
}
.tm-color-set-btn.active {
  border-color: rgba(var(--tm-accent-rgb), 0.7);
  box-shadow: 0 0 0 1px rgba(var(--tm-accent-rgb), 0.25);
}
.tm-color-set-swatch {
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.tm-color-set-label {
  font-size: 0.875rem;
  opacity: 0.85;
}
.tm-color-set-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.tm-entity-picker { position: relative; width: 100%; }
.tm-entity-picker-trigger {
  width: 100%; padding: 0.75rem 1rem; border-radius: 0.75rem;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  color: white; cursor: pointer; text-align: left;
  display: flex; justify-content: space-between; align-items: center;
  min-height: 48px;
}
.tm-entity-picker-dropdown {
  position: absolute; top: calc(100% + 0.5rem); left: 0; right: 0; z-index: 1000;
  background: #18181b; border: 1px solid rgba(255,255,255,0.15);
  border-radius: 0.75rem; max-height: 280px; overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}
.tm-entity-picker-search {
  width: 100%; padding: 0.75rem 1rem; border: none; border-bottom: 1px solid rgba(255,255,255,0.1);
  background: transparent; color: white; font-size: 1rem; outline: none;
}
.tm-entity-picker-list { max-height: 220px; overflow-y: auto; }
.tm-entity-picker-item {
  width: 100%; padding: 0.75rem 1rem; border: none; background: transparent;
  color: white; cursor: pointer; text-align: left;
  display: flex; flex-direction: column; gap: 0.125rem;
}
.tm-entity-picker-item:hover { background: rgba(255,255,255,0.08); }
.tm-entity-picker-item.selected { background: rgba(var(--tm-accent-rgb),0.3); }
.tm-config-slot {
  padding: 1rem; border-radius: 0.75rem;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
  display: flex; flex-direction: column; gap: 0.75rem;
}
.tm-input {
  width: 100%; padding: 0.625rem 0.875rem; border-radius: 0.5rem;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  color: white; font-size: 0.875rem; outline: none;
}
.tm-input:focus { border-color: rgba(var(--tm-accent-rgb),0.6); }
.tm-btn-primary {
  padding: 0.75rem 1.5rem; border-radius: 0.75rem; border: none;
  background: var(--tm-accent); color: white; font-weight: 600; cursor: pointer;
  min-height: 48px;
}
.tm-btn-secondary {
  padding: 0.75rem 1.5rem; border-radius: 0.75rem;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
  color: white; cursor: pointer; min-height: 48px;
}
.tm-btn-block {
  width: 100%;
}
.tm-btn-secondary:disabled,
.tm-btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
@keyframes tmSpin { to { transform: rotate(360deg); } }
.tm-spin { animation: tmSpin 1s linear infinite; }
.tm-settings-scroll { flex: 1; overflow-y: auto; padding-bottom: 2rem; }
.tm-placeholder-widget {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  height: 100%; opacity: 0.4; gap: 0.5rem; text-align: center; padding: 1rem;
}
.tm-camera-widget {
  position: relative;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}
.tm-camera-stream {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 0;
}
.tm-camera-feed {
  width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
  background: #111;
}
.tm-camera-badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  max-width: calc(100% - 9rem);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-camera-switcher {
  position: absolute;
  top: 0.375rem;
  right: 0.375rem;
  z-index: 12;
  display: flex;
  align-items: center;
  gap: 0.125rem;
  pointer-events: auto;
}
.tm-camera-expanded .tm-camera-switcher {
  top: 0.75rem;
  right: 3.25rem;
}
.tm-camera-switch-btn {
  position: relative;
  min-width: 2.75rem;
  min-height: 2.75rem;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.tm-camera-switch-btn::before {
  content: '';
  position: absolute;
  inset: 0.125rem;
  border-radius: 9999px;
}
.tm-camera-switch-btn-visual {
  position: relative;
  z-index: 1;
  display: block;
  padding: 0.2rem 0.45rem;
  border-radius: 9999px;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.2;
  background: rgba(0, 0, 0, 0.55);
  color: rgba(255, 255, 255, 0.82);
  max-width: 3.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.12);
  pointer-events: none;
}
.tm-camera-switch-btn.active .tm-camera-switch-btn-visual {
  background: rgba(255, 255, 255, 0.92);
  color: #111;
  border-color: transparent;
}
.tm-camera-switch-btn:not(.active):hover .tm-camera-switch-btn-visual {
  background: rgba(0, 0, 0, 0.72);
  color: white;
}
.tm-camera-badge-icon { color: #ef4444; flex-shrink: 0; }
.tm-camera-live {
  color: #ef4444;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.tm-camera-widget--clickable {
  cursor: pointer;
}
.tm-camera-widget--clickable:active {
  transform: scale(0.995);
}
.tm-camera-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: fadeIn 0.2s ease-out;
}
.tm-camera-overlay-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(6px);
}
.tm-camera-expanded {
  position: relative;
  z-index: 1;
  width: min(96vw, 72rem);
  height: min(88vh, 48rem);
  border-radius: 1rem;
  overflow: hidden;
  background: #111;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55);
  animation: weatherSlideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-camera-expanded .tm-camera-stream,
.tm-camera-expanded .tm-camera-feed {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000;
}
.tm-camera-expanded-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.55);
  color: white;
  cursor: pointer;
}
.tm-camera-expanded .tm-camera-badge {
  top: 0.75rem;
  left: 0.75rem;
}

/* ── Vacuum Island (Dynamic Island, white) ── */
.tm-vi-backdrop {
  position: absolute;
  inset: 0;
  border: none;
  background: transparent;
  cursor: default;
  pointer-events: auto;
  z-index: 249;
}
.tm-vi-wrap {
  --tm-vi-bg: #ffffff;
  --tm-vi-text: #1d1d1f;
  --tm-vi-muted: #86868b;
  --tm-vi-accent: #ff6b2b;
  --tm-vi-track: #e5e5ea;
  --tm-vi-shadow: 0 8px 32px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0, 0, 0, 0.06);
  --tm-vi-ease: cubic-bezier(0.32, 0.72, 0, 1);
  position: absolute;
  top: var(--tm-gap);
  left: 50%;
  transform: translateX(-50%);
  z-index: 250;
  pointer-events: none;
}
.tm-vi {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  width: max-content;
  max-width: min(22rem, calc(100vw - 1.5rem));
  padding: 0.625rem 1rem;
  border-radius: 9999px;
  background: var(--tm-vi-bg);
  color: var(--tm-vi-text);
  border: none;
  cursor: pointer;
  font-family: var(--tm-font);
  box-shadow: var(--tm-vi-shadow);
  pointer-events: auto;
  overflow: hidden;
  transition:
    border-radius 0.4s var(--tm-vi-ease),
    padding 0.4s var(--tm-vi-ease);
  contain: layout style;
}
.tm-vi-expanded {
  width: min(22rem, calc(100vw - 1.5rem));
  padding: 1rem 1.25rem 1.125rem;
  border-radius: 2rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.tm-vi-bar {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  min-height: 2.25rem;
  transition: opacity 0.2s var(--tm-vi-ease), transform 0.28s var(--tm-vi-ease);
  opacity: 1;
  transform: translateZ(0);
}
.tm-vi-expanded .tm-vi-bar {
  opacity: 0;
  transform: translate3d(0, -4px, 0) scale(0.96);
  pointer-events: none;
  position: absolute;
  visibility: hidden;
}
.tm-vi-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #f2f2f7;
  flex-shrink: 0;
}
.tm-vi-text {
  flex: 1;
  font-size: 0.9375rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.tm-vi-ring-wrap {
  flex-shrink: 0;
  display: flex;
}
.tm-vi-ring { display: block; }
.tm-vi-detail {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.42s var(--tm-vi-ease);
}
.tm-vi-expanded .tm-vi-detail {
  grid-template-rows: 1fr;
}
.tm-vi-detail-inner {
  overflow: hidden;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  opacity: 0;
  transform: translate3d(0, -6px, 0);
  transition: opacity 0.22s var(--tm-vi-ease) 0.1s, transform 0.32s var(--tm-vi-ease) 0.08s;
}
.tm-vi-expanded .tm-vi-detail-inner {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.tm-vi-subtitle {
  margin: 0;
  font-size: 0.75rem;
  color: var(--tm-vi-muted);
  text-align: center;
  font-weight: 400;
}
.tm-vi-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.tm-vi-timer-block {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}
.tm-vi-timer-label {
  font-size: 0.75rem;
  color: var(--tm-vi-muted);
  font-weight: 500;
}
.tm-vi-timer-value {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.tm-vi-progress-block { flex-shrink: 0; }
.tm-vi-progress-ring-lg {
  position: relative;
  width: 5.5rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tm-vi-progress-icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tm-vi-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.875rem;
  border-top: 1px solid #e5e5ea;
}
.tm-vi-actions { display: flex; gap: 0.625rem; }
.tm-vi-btn {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  transition: transform 0.15s ease, opacity 0.15s ease;
}
.tm-vi-btn:active { transform: scale(0.94); }
.tm-vi-btn-pause { background: #c67c4e; }
.tm-vi-btn-stop { background: #3a3a3c; }
.tm-vi-open {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--tm-vi-text);
}
.tm-vi-badge {
  min-width: 1.75rem;
  height: 1.75rem;
  padding: 0 0.375rem;
  border-radius: 9999px;
  background: #ff6b2b;
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.tm-vi-window-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.tm-vi-window-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  background: #f2f2f7;
  border-radius: 0.75rem;
}
.tm-vi-window-info {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}
.tm-vi-window-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--tm-vi-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-vi-window-state {
  font-size: 0.75rem;
  color: var(--tm-vi-muted);
}
.tm-vi-btn-close {
  background: #3a3a3c;
  flex-shrink: 0;
}
.tm-vi-window-alert {
  background: #fff5f5;
  box-shadow:
    var(--tm-vi-shadow),
    0 0 0 3px #ef4444,
    0 0 24px rgba(239, 68, 68, 0.55);
  animation: tm-vi-pulse-border 1.1s ease-in-out infinite;
}
.tm-vi-expanded.tm-vi-window-alert {
  background: #fff5f5;
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.18),
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 0 0 3px #ef4444,
    0 0 28px rgba(239, 68, 68, 0.5);
  animation-name: tm-vi-pulse-border-expanded;
}
@keyframes tm-vi-pulse-border {
  0%, 100% {
    background: #fff5f5;
    box-shadow:
      var(--tm-vi-shadow),
      0 0 0 3px #ef4444,
      0 0 18px rgba(239, 68, 68, 0.45);
  }
  50% {
    background: #ffe4e4;
    box-shadow:
      var(--tm-vi-shadow),
      0 0 0 4px #dc2626,
      0 0 36px rgba(220, 38, 38, 0.75),
      0 0 0 14px rgba(239, 68, 68, 0.18);
  }
}
@keyframes tm-vi-pulse-border-expanded {
  0%, 100% {
    background: #fff5f5;
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.18),
      0 4px 12px rgba(0, 0, 0, 0.08),
      0 0 0 3px #ef4444,
      0 0 22px rgba(239, 68, 68, 0.45);
  }
  50% {
    background: #ffe4e4;
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.18),
      0 4px 12px rgba(0, 0, 0, 0.08),
      0 0 0 4px #dc2626,
      0 0 40px rgba(220, 38, 38, 0.75),
      0 0 0 14px rgba(239, 68, 68, 0.18);
  }
}
.tm-vi-thumb-alert {
  background: #fecaca !important;
  color: #b91c1c;
  animation: tm-vi-thumb-pulse 1.1s ease-in-out infinite;
}
.tm-vi-text-alert {
  color: #b91c1c;
  font-weight: 700;
}
.tm-vi-badge-alert {
  background: #dc2626;
  animation: tm-vi-badge-pulse 1.1s ease-in-out infinite;
}
@keyframes tm-vi-thumb-pulse {
  0%, 100% { background: #fecaca !important; }
  50% { background: #f87171 !important; }
}
@keyframes tm-vi-badge-pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.5); }
  50% { transform: scale(1.08); box-shadow: 0 0 0 6px rgba(220, 38, 38, 0.15); }
}

.tm-vi-ev-alert {
  box-shadow:
    0 0 0 1px rgba(34, 197, 94, 0.45),
    var(--tm-vi-shadow),
    0 0 20px rgba(34, 197, 94, 0.25);
  animation: tm-vi-pulse-border-ev 1.4s ease-in-out infinite;
}
.tm-vi-expanded.tm-vi-ev-alert {
  animation-name: tm-vi-pulse-border-ev-expanded;
}
@keyframes tm-vi-pulse-border-ev {
  0%, 100% {
    box-shadow:
      0 0 0 1px rgba(34, 197, 94, 0.35),
      var(--tm-vi-shadow),
      0 0 12px rgba(34, 197, 94, 0.15);
  }
  50% {
    box-shadow:
      0 0 0 2px rgba(34, 197, 94, 0.65),
      var(--tm-vi-shadow),
      0 0 28px rgba(34, 197, 94, 0.35);
  }
}
@keyframes tm-vi-pulse-border-ev-expanded {
  0%, 100% {
    box-shadow:
      0 0 0 1px rgba(34, 197, 94, 0.35),
      var(--tm-vi-shadow),
      0 0 16px rgba(34, 197, 94, 0.12);
  }
  50% {
    box-shadow:
      0 0 0 2px rgba(34, 197, 94, 0.6),
      var(--tm-vi-shadow),
      0 0 32px rgba(34, 197, 94, 0.28);
  }
}
.tm-vi-thumb-ev-alert {
  background: #dcfce7;
  color: #16a34a;
  animation: tm-vi-thumb-pulse-ev 1.4s ease-in-out infinite;
}
.tm-vi-text-ev-alert {
  color: #15803d;
  font-weight: 700;
}
.tm-vi-ring-ev {
  --tm-vi-accent: #22c55e;
  --tm-vi-track: #bbf7d0;
}
.tm-vi-ring-ev .tm-vi-progress-icon {
  color: #16a34a;
}
.tm-vi-timer-value-ev {
  color: #15803d;
}
.tm-vi-ev-metrics {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.tm-vi-timer-value-secondary {
  font-size: 1.5rem;
}
@keyframes tm-vi-thumb-pulse-ev {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.35); }
  50% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
}

.tm-vi-window-row-overdue {
  background: #fecaca;
  border: 1px solid #f87171;
}
.tm-vi-window-row-overdue .tm-vi-window-name {
  color: #991b1b;
}
.tm-vi-window-row-overdue .tm-vi-window-state {
  color: #dc2626;
  font-weight: 700;
}
@media (prefers-reduced-motion: reduce) {
  .tm-vi-window-alert,
  .tm-vi-ev-alert,
  .tm-vi-thumb-alert,
  .tm-vi-thumb-ev-alert,
  .tm-vi-badge-alert,
  .tm-alarm-widget.armed,
  .tm-alarm-widget.triggered {
    animation: none;
  }
  .tm-contact-icon-badge--open,
  .tm-contact-icon-badge--moving {
    animation: none;
  }
  .tm-vi,
  .tm-vi-bar,
  .tm-vi-detail,
  .tm-vi-detail-inner {
    transition: none;
  }
}

.tm-sankey-widget {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
  color: white;
  min-height: 0;
}
.tm-sankey-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  min-height: 0;
}
.tm-sankey-header {
  flex-shrink: 0;
  margin-bottom: 0.75rem;
}
.tm-sankey-header-main {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}
.tm-sankey-total-value {
  font-size: 2rem;
  font-weight: 200;
  line-height: 1;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
  margin-top: 0.125rem;
}
.tm-sankey-canvas {
  flex: 1;
  min-height: 0;
  position: relative;
}
.tm-sankey-canvas svg {
  display: block;
  width: 100%;
  height: 100%;
}
.tm-sankey-link {
  transition: opacity 0.15s ease;
}
.tm-sankey-node-label {
  fill: rgba(255, 255, 255, 0.95);
  font-size: 12px;
  font-weight: 600;
}
.tm-sankey-node-value {
  fill: rgba(255, 255, 255, 0.55);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
}
.tm-sankey-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-top: auto;
  padding-top: 0.75rem;
  flex-shrink: 0;
}
.tm-sankey-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  opacity: 0.75;
}
.tm-sankey-legend-swatch {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  flex-shrink: 0;
}

.tm-energy-tile {
  cursor: default;
  min-height: 0;
}
.tm-energy-device-stack {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
  height: 100%;
  min-height: 0;
}
.tm-energy-tile--mini {
  padding: 0.625rem 0.75rem;
  gap: 0.35rem;
}
.tm-energy-metric-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  min-height: 0;
}
.tm-energy-metric-col {
  min-width: 0;
}
.tm-energy-metric-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.6875rem;
  line-height: 1.35;
  margin-bottom: 0.2rem;
}
.tm-energy-metric-dot {
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 9999px;
  flex-shrink: 0;
}
.tm-energy-metric-name {
  opacity: 0.85;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-energy-metric-value {
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

.tm-energy-device-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-white-05);
  height: 100%;
  min-height: 0;
  color: white;
}
.tm-energy-device-card--mini {
  border-radius: var(--tm-radius-lg);
}
.tm-energy-device-card-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.tm-energy-device-card-bg--empty {
  background: var(--tm-white-05);
}
.tm-energy-device-card-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.2) 55%, rgba(0, 0, 0, 0.35) 100%);
  pointer-events: none;
}
.tm-energy-device-card-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem 0.875rem;
  min-height: 0;
}
.tm-energy-device-card--mini .tm-energy-device-card-content {
  padding: 0.625rem 0.75rem;
}
.tm-energy-device-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.tm-energy-device-card-icon {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.tm-energy-device-card--mini .tm-energy-device-card-icon {
  width: 1.5rem;
  height: 1.5rem;
}
.tm-energy-device-state {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  white-space: nowrap;
}
.tm-energy-device-card-body {
  margin-top: auto;
}
.tm-ha-card {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  position: relative;
}
.tm-ha-card-slot {
  display: none;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
}
.tm-ha-card--live .tm-ha-card-slot {
  display: flex;
  flex-direction: column;
}
.tm-ha-card-slot::slotted(.tm-ha-card-host) {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 0;
}
.tm-ha-card-host {
  display: block;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: auto;
  box-sizing: border-box;
}
.tm-ha-card-host.is-editing {
  pointer-events: none;
}
.tm-ha-card-host-message {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  color: white;
  font: 500 0.875rem/1.4 system-ui, sans-serif;
  background: rgba(0, 0, 0, 0.35);
  border-radius: var(--tm-radius-xl, 1.25rem);
}
.tm-ha-card-fallback {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.35rem;
  padding: 0.9rem 1rem;
}
.tm-ha-card-fallback p {
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.4;
  opacity: 0.7;
}
.tm-ha-card-fallback-kicker {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.55;
}
.tm-ha-card-fallback-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25;
}
.tm-ha-card-yaml {
  min-height: 9rem;
  resize: vertical;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.75rem;
  line-height: 1.45;
  margin-top: 0.35rem;
}
.tm-ha-card-error {
  margin-top: 0.4rem;
  font-size: 0.75rem;
  line-height: 1.4;
  color: #fecaca;
}
.tm-ha-picker-overlay {
  position: fixed;
  inset: 0;
  z-index: 460;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.tm-ha-picker-backdrop {
  position: absolute;
  inset: 0;
  border: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.55);
}
.tm-ha-picker-panel {
  position: relative;
  z-index: 1;
  width: min(36rem, 100%);
  max-height: min(40rem, calc(100dvh - 2rem));
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #f2f2f7;
  color: #111111;
  -webkit-text-fill-color: #111111;
  color-scheme: only light;
  forced-color-adjust: none;
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}
.tm-ha-picker-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}
.tm-ha-picker-title {
  font-size: 1.05rem;
  font-weight: 700;
}
.tm-ha-picker-subtitle {
  margin-top: 0.15rem;
  font-size: 0.75rem;
  opacity: 0.6;
}
.tm-ha-picker-close {
  border: none;
  background: rgba(0, 0, 0, 0.06);
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.tm-ha-picker-tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.3rem;
  flex-shrink: 0;
  padding: 0.2rem;
  border-radius: 0.85rem;
  background: rgba(0, 0, 0, 0.05);
}
.tm-ha-picker-tab {
  border: none;
  background: transparent;
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
  border-radius: 0.7rem;
  padding: 0.55rem 0.4rem;
  font-weight: 650;
  font-size: 0.75rem;
  cursor: pointer;
}
.tm-ha-picker-tab.active {
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}
.tm-ha-picker-search {
  width: 100%;
  padding: 0.7rem 0.85rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: white;
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
  font-size: 0.875rem;
  outline: none;
}
.tm-ha-picker-dashboards {
  display: flex;
  gap: 0.4rem;
  overflow-x: auto;
  flex-shrink: 0;
}
.tm-ha-picker-dash {
  border: none;
  background: rgba(0, 0, 0, 0.06);
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-weight: 600;
  font-size: 0.75rem;
  cursor: pointer;
  white-space: nowrap;
}
.tm-ha-picker-dash.active {
  background: #4338ca;
  color: white;
  -webkit-text-fill-color: #ffffff;
}
.tm-ha-picker-views .tm-ha-picker-view {
  background: rgba(67, 56, 202, 0.08);
}
.tm-ha-picker-views .tm-ha-picker-view.active {
  background: #1d1d1f;
  color: white;
}
.tm-ha-picker-list {
  overflow: auto;
  min-height: 12rem;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  background: #f2f2f7;
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
}
.tm-ha-picker-list > * {
  flex-shrink: 0;
}
.tm-ha-picker-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.tm-ha-picker-group > * {
  flex-shrink: 0;
}
.tm-ha-picker-group-title {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(29, 29, 31, 0.5);
  -webkit-text-fill-color: rgba(29, 29, 31, 0.5);
  margin-bottom: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-ha-picker-item {
  display: block;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  border: none;
  background: #ffffff;
  color: #111111 !important;
  -webkit-text-fill-color: #111111 !important;
  color-scheme: only light;
  forced-color-adjust: none;
  border-radius: 0.75rem;
  padding: 0.7rem 0.85rem;
  font-size: 0.875rem;
  line-height: 1.35;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-ha-picker-item-rich {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  white-space: normal;
}
.tm-ha-picker-item-title {
  display: block;
  width: 100%;
  font-weight: 600;
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-ha-picker-item-meta {
  display: block;
  width: 100%;
  font-size: 0.7rem;
  color: rgba(29, 29, 31, 0.55);
  -webkit-text-fill-color: rgba(29, 29, 31, 0.55);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-ha-picker-item:hover {
  background: #e8e8ff;
}
.tm-ha-picker-more {
  border: none;
  background: rgba(0, 0, 0, 0.06);
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
  border-radius: 0.75rem;
  padding: 0.75rem;
  font-weight: 650;
  font-size: 0.8rem;
  cursor: pointer;
}
.tm-ha-picker-empty {
  font-size: 0.875rem;
  line-height: 1.45;
  color: rgba(29, 29, 31, 0.7);
  -webkit-text-fill-color: rgba(29, 29, 31, 0.7);
  padding: 0.5rem 0.15rem;
}
.tm-ha-picker-dash.active,
.tm-ha-picker-views .tm-ha-picker-view.active {
  -webkit-text-fill-color: #ffffff;
}
.tm-widget-inspector-section .tm-btn-block + .tm-btn-block {
  margin-top: 0.5rem;
}

.tm-ha-editor-panel {
  position: relative;
  z-index: 1;
  width: min(64rem, 100%);
  height: min(46rem, calc(100dvh - 2rem));
  display: flex;
  flex-direction: column;
  border-radius: var(--ha-dialog-border-radius, 1.5rem);
  background: var(--card-background-color, var(--ha-card-background, #ffffff));
  color: var(--primary-text-color, #1d1d1f);
  -webkit-text-fill-color: currentColor;
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, system-ui, -apple-system, sans-serif));
}
.tm-ha-editor-header {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
}
.tm-ha-editor-heading {
  min-width: 0;
}
.tm-ha-editor-title {
  font-size: 1.25rem;
  font-weight: 500;
}
.tm-ha-editor-subtitle {
  margin-top: 0.15rem;
  font-size: 0.8rem;
  color: var(--secondary-text-color, #6b6b70);
  -webkit-text-fill-color: currentColor;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-ha-editor-icon-btn {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.tm-ha-editor-icon-btn:hover {
  background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
}
.tm-ha-editor-body {
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}
.tm-ha-editor-pane {
  min-height: 0;
  overflow: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  padding: 1rem 1.25rem;
}
.tm-ha-editor-pane--form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.tm-ha-editor-pane--form > * {
  flex-shrink: 0;
}
.tm-ha-editor-pane--preview {
  background: var(--primary-background-color, #f2f2f7);
  border-left: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
}
.tm-ha-editor-pane-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--secondary-text-color, #6b6b70);
  -webkit-text-fill-color: currentColor;
  margin-bottom: 0.75rem;
}
.tm-ha-editor-slot {
  display: block;
}
.tm-ha-editor-preview {
  display: block;
}
.tm-ha-editor-preview-card {
  display: block;
  width: 100%;
}
.tm-ha-editor-note {
  font-size: 0.875rem;
  line-height: 1.45;
  color: var(--secondary-text-color, #6b6b70);
  -webkit-text-fill-color: currentColor;
}
.tm-ha-editor-yaml {
  width: 100%;
  min-height: 22rem;
  flex: 1 1 auto;
  resize: vertical;
  padding: 0.85rem;
  border-radius: 0.75rem;
  border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #f7f7f9));
  color: var(--primary-text-color, #1d1d1f);
  -webkit-text-fill-color: currentColor;
  font: 0.8125rem/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
  outline: none;
}
.tm-ha-editor-error {
  font-size: 0.8rem;
  color: var(--error-color, #db4437);
  -webkit-text-fill-color: currentColor;
}
.tm-ha-editor-footer {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
}
.tm-ha-editor-actions {
  display: flex;
  gap: 0.5rem;
}
.tm-ha-editor-text-btn,
.tm-ha-editor-primary-btn {
  min-height: 2.5rem;
  padding: 0 1rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}
.tm-ha-editor-text-btn {
  border: none;
  background: transparent;
  color: var(--primary-color, #03a9f4);
  -webkit-text-fill-color: currentColor;
}
.tm-ha-editor-text-btn:hover {
  background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
}
.tm-ha-editor-primary-btn {
  border: none;
  background: var(--primary-color, #03a9f4);
  color: var(--text-primary-color, #ffffff);
  -webkit-text-fill-color: currentColor;
}
.tm-ha-native-picker-body {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  position: relative;
}
.tm-ha-native-picker-note {
  padding: 1rem 1.25rem;
}
.tm-ha-native-picker-slot {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.tm-ha-native-picker-slot > hui-card-picker {
  flex: 1 1 auto;
  min-height: 0;
}
@media (max-width: 760px) {
  .tm-ha-editor-body {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) auto;
  }
  .tm-ha-editor-pane--preview {
    border-left: none;
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    max-height: 40%;
  }
}

/* —— Schwarz bunt: pastel cards on black —— */
[data-tm-theme="blackColorful"] .tm-card,
[data-tm-theme="blackColorful"] .tm-quick-action,
[data-tm-theme="blackColorful"] .tm-sensor-widget,
[data-tm-theme="blackColorful"] .tm-alarm-widget,
[data-tm-theme="blackColorful"] .tm-contact-widget,
[data-tm-theme="blackColorful"] .tm-brightness-action,
[data-tm-theme="blackColorful"] .tm-cover-action {
  background: var(--tm-surface);
  color: var(--tm-tile-fg);
  border: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  border-radius: var(--tm-radius-xl, 2rem);
}

[data-tm-theme="blackColorful"] .tm-scene-btn {
  color: var(--tm-tile-fg, #1a1a1a);
  border: none;
  border-radius: var(--tm-radius-xl, 2rem);
}

[data-tm-theme="blackColorful"] .tm-scene-btn.empty,
[data-tm-theme="blackColorful"] .tm-quick-action.empty {
  background: transparent;
  color: rgba(255, 255, 255, 0.72);
  border: 1px dashed rgba(255, 255, 255, 0.28);
}

[data-tm-theme="blackColorful"] .tm-scene-gradient {
  opacity: 1;
}

[data-tm-theme="blackColorful"] .tm-scene-btn .tm-scene-icon {
  background: rgba(0, 0, 0, 0.12);
  color: inherit;
}

[data-tm-theme="blackColorful"] .tm-scene-btn--pastel-active {
  box-shadow: inset 0 0 0 2.5px var(--tm-tile-fg, #1a1a1a);
}

.tm-weather-card {
  container: tm-weather / size;
  --tm-wx-fg: #fff;
  --tm-wx-muted: rgba(255, 255, 255, 0.58);
  --tm-wx-chip: rgba(255, 255, 255, 0.06);
  --tm-wx-divider: rgba(255, 255, 255, 0.09);
  --tm-wx-glow: 96, 165, 250;
  --tm-wx-high: #f4906b;
  --tm-wx-low: #64a8f2;
  color: var(--tm-wx-fg);
  background:
    radial-gradient(85% 65% at 85% 8%, rgba(var(--tm-wx-glow), 0.26), transparent 70%),
    var(--tm-surface, #1c1c1e);
}
.tm-weather-card--sunny { --tm-wx-glow: 250, 204, 21; }
.tm-weather-card--cloudy { --tm-wx-glow: 148, 163, 184; }
.tm-weather-card--rain { --tm-wx-glow: 59, 130, 246; }
.tm-weather-card--snow { --tm-wx-glow: 226, 232, 240; }
.tm-weather-card--night { --tm-wx-glow: 139, 92, 246; }
.tm-weather-card-inner {
  --tm-wx-pad: clamp(0.85rem, 5.5cqmin, 2rem);
  height: 100%;
  box-sizing: border-box;
  padding: var(--tm-wx-pad);
  display: flex;
  flex-direction: column;
  gap: clamp(0.6rem, 3cqh, 1.4rem);
  min-height: 0;
}
.tm-weather-card-summary {
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr);
  grid-template-areas: "head art" "now art";
  column-gap: clamp(0.5rem, 3cqw, 1.5rem);
}
.tm-weather-card-head { grid-area: head; min-width: 0; }
.tm-weather-card-title {
  font-size: clamp(1rem, 7cqmin, 2.4rem);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.015em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-weather-card-location {
  display: flex;
  align-items: center;
  gap: 0.3em;
  margin-top: 0.35em;
  font-size: clamp(0.78rem, 3.8cqmin, 1.3rem);
  color: var(--tm-wx-muted);
  min-width: 0;
}
.tm-weather-card-location span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tm-weather-card-location-icon { width: 1em; height: 1em; flex: none; }
.tm-weather-card-now {
  grid-area: now;
  align-self: end;
  min-width: 0;
}
.tm-weather-card-temp {
  font-size: clamp(2.4rem, 22cqmin, 8rem);
  font-weight: 500;
  line-height: 0.95;
  letter-spacing: -0.05em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.tm-weather-card-condition {
  margin-top: 0.35em;
  font-size: clamp(0.8rem, 4.2cqmin, 1.45rem);
  color: var(--tm-wx-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-weather-card-hilo {
  display: flex;
  gap: 1em;
  margin-top: 0.45em;
  font-size: clamp(0.85rem, 4.4cqmin, 1.5rem);
  font-variant-numeric: tabular-nums;
}
.tm-weather-card-hilo-item { display: inline-flex; align-items: center; gap: 0.3em; }
.tm-weather-card-hilo-item svg { width: 1em; height: 1em; }
.tm-weather-card-hilo-item--high svg { color: var(--tm-wx-high); }
.tm-weather-card-hilo-item--low svg { color: var(--tm-wx-low); }
.tm-weather-card-art {
  grid-area: art;
  min-width: 0;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.tm-weather-card-art img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 17rem;
  object-fit: contain;
  filter: drop-shadow(0 0.8rem 1.4rem rgba(var(--tm-wx-glow), 0.25));
  user-select: none;
}
.tm-weather-card-forecast {
  flex: none;
  display: flex;
  flex-direction: column;
  gap: clamp(0.6rem, 3cqh, 1.25rem);
  min-width: 0;
}
.tm-weather-card-section {
  border-top: 1px solid var(--tm-wx-divider);
  padding-top: clamp(0.5rem, 2.6cqh, 1.1rem);
  min-width: 0;
}
.tm-weather-card-section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: clamp(0.4rem, 2.2cqh, 0.9rem);
  font-size: clamp(0.85rem, 3.6cqmin, 1.3rem);
  font-weight: 500;
}
.tm-weather-card-section-chevron {
  width: 1.1em;
  height: 1.1em;
  color: var(--tm-wx-muted);
}
.tm-weather-card-tiles {
  display: grid;
  grid-template-columns: repeat(var(--tm-weather-tiles, 4), minmax(0, 1fr));
  gap: 0.6rem;
}
.tm-weather-card-tile {
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.15rem, 0.8cqh, 0.4rem);
  padding: clamp(0.45rem, 2cqh, 0.95rem) 0.25rem;
  border-radius: clamp(0.7rem, 3cqmin, 1.15rem);
  background: var(--tm-wx-chip);
}
.tm-weather-card-tile-label {
  font-size: clamp(0.72rem, 3cqmin, 1.05rem);
  color: var(--tm-wx-muted);
  white-space: nowrap;
}
.tm-weather-card-tile-label--day { color: inherit; font-weight: 500; }
.tm-weather-card-tile-icon {
  width: clamp(1.8rem, 9cqmin, 3.4rem);
  height: clamp(1.8rem, 9cqmin, 3.4rem);
  object-fit: contain;
  user-select: none;
}
.tm-weather-card-tile-temp {
  font-size: clamp(0.9rem, 4.4cqmin, 1.5rem);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.tm-weather-card-tile-low {
  margin-top: -0.15rem;
  font-size: clamp(0.72rem, 3.2cqmin, 1.1rem);
  color: var(--tm-wx-muted);
  font-variant-numeric: tabular-nums;
}
@container tm-weather (max-aspect-ratio: 6 / 5) and (max-height: 38rem) {
  .tm-weather-card-section--days { display: none; }
}
@container tm-weather (max-aspect-ratio: 6 / 5) and (max-height: 25rem) {
  .tm-weather-card-forecast { display: none; }
}
@container tm-weather (min-aspect-ratio: 6 / 5) {
  .tm-weather-card-inner { flex-direction: row; }
  .tm-weather-card-summary { flex: 0 0 46%; }
  .tm-weather-card-forecast {
    flex: 1 1 auto;
    justify-content: center;
    padding-left: clamp(0.75rem, 3cqw, 1.75rem);
    border-left: 1px solid var(--tm-wx-divider);
  }
  .tm-weather-card-section:first-child { border-top: 0; padding-top: 0; }
}
@container tm-weather (min-aspect-ratio: 6 / 5) and (max-height: 22rem) {
  .tm-weather-card-section--days { display: none; }
}
@container tm-weather (min-aspect-ratio: 6 / 5) and (max-width: 30rem) {
  .tm-weather-card-forecast { display: none; }
  .tm-weather-card-summary { flex: 1 1 auto; }
}
@container tm-weather (max-width: 15rem) {
  .tm-weather-card-summary { grid-template-columns: minmax(0, 1fr); grid-template-areas: "head" "now"; }
  .tm-weather-card-art { display: none; }
}
@container tm-weather (max-height: 9rem) {
  .tm-weather-card-hilo { display: none; }
}
[data-tm-theme="light"] .tm-weather-card.tm-weather-card,
[data-tm-theme="blackColorful"] .tm-weather-card.tm-weather-card {
  --tm-wx-fg: #1a1a1a;
  --tm-wx-muted: rgba(26, 26, 26, 0.55);
  --tm-wx-chip: rgba(255, 255, 255, 0.45);
  --tm-wx-divider: rgba(26, 26, 26, 0.08);
  --tm-wx-high: #ef8354;
  --tm-wx-low: #4f9be8;
  --tm-wx-bg: linear-gradient(165deg, #eaf3fd 0%, #d2e4f8 100%);
  color: var(--tm-wx-fg);
  background:
    radial-gradient(70% 55% at 78% 22%, rgba(255, 255, 255, 0.6), transparent 70%),
    var(--tm-wx-bg);
}
[data-tm-theme="light"] .tm-weather-card--sunny,
[data-tm-theme="blackColorful"] .tm-weather-card--sunny { --tm-wx-bg: linear-gradient(165deg, #fdf2d6 0%, #dbeafb 75%); }
[data-tm-theme="light"] .tm-weather-card--cloudy,
[data-tm-theme="blackColorful"] .tm-weather-card--cloudy { --tm-wx-bg: linear-gradient(165deg, #eef2f7 0%, #d4dde9 100%); }
[data-tm-theme="light"] .tm-weather-card--rain,
[data-tm-theme="blackColorful"] .tm-weather-card--rain { --tm-wx-bg: linear-gradient(165deg, #e0e8f2 0%, #bccee2 100%); }
[data-tm-theme="light"] .tm-weather-card--snow,
[data-tm-theme="blackColorful"] .tm-weather-card--snow { --tm-wx-bg: linear-gradient(165deg, #f6f9fc 0%, #dce5ef 100%); }
[data-tm-theme="light"] .tm-weather-card--night,
[data-tm-theme="blackColorful"] .tm-weather-card--night { --tm-wx-bg: linear-gradient(165deg, #e7e2f8 0%, #c8c2ea 100%); }

.tm-ev-card {
  container: tm-ev / size;
  cursor: default;
  padding: 0;
  overflow: hidden;
  --tm-ev-green: #34c759;
  --tm-ev-green-soft: #8fe3a8;
  --tm-ev-chip: color-mix(in srgb, currentColor 7%, transparent);
  --tm-ev-track: color-mix(in srgb, currentColor 8%, transparent);
  --tm-ev-muted: color-mix(in srgb, currentColor 55%, transparent);
}
.tm-ev-card:active { transform: none; }
.tm-ev-card-inner {
  --tm-ev-pad: clamp(0.85rem, 5.5cqmin, 1.9rem);
  position: relative;
  height: 100%;
  box-sizing: border-box;
  padding: var(--tm-ev-pad);
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  grid-template-rows: auto minmax(0, 1fr) auto auto;
  grid-template-areas:
    "head art"
    "hero art"
    "bar bar"
    "stats stats";
  column-gap: clamp(0.5rem, 3cqw, 1.5rem);
  row-gap: clamp(0.5rem, 3.4cqh, 1.25rem);
}
.tm-ev-card-head { grid-area: head; min-width: 0; position: relative; z-index: 1; }
.tm-ev-card-title {
  font-size: clamp(1rem, 7.5cqmin, 2.4rem);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.015em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-ev-card-status {
  display: flex;
  align-items: center;
  gap: 0.35em;
  margin-top: 0.4em;
  font-size: clamp(0.8rem, 4cqmin, 1.3rem);
  color: var(--tm-ev-muted);
  white-space: nowrap;
}
.tm-ev-card-status-icon {
  width: 1.15em;
  height: 1.15em;
  flex: none;
  color: var(--tm-ev-green);
}
.tm-ev-card-hero {
  grid-area: hero;
  min-width: 0;
  align-self: end;
  position: relative;
  z-index: 1;
}
.tm-ev-card-value {
  font-size: clamp(2rem, 17cqmin, 6rem);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.tm-ev-card-unit {
  margin-left: 0.15em;
  font-size: 0.32em;
  font-weight: 500;
  letter-spacing: 0;
}
.tm-ev-card-caption {
  margin-top: 0.45em;
  font-size: clamp(0.8rem, 4cqmin, 1.3rem);
  color: var(--tm-ev-muted);
  white-space: nowrap;
}
.tm-ev-card-art {
  grid-area: art;
  min-width: 0;
  min-height: 0;
  margin: calc(var(--tm-ev-pad) * -1) calc(var(--tm-ev-pad) * -1) 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  pointer-events: none;
}
.tm-ev-card-art img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: right bottom;
  user-select: none;
}
.tm-ev-card-bar {
  grid-area: bar;
  position: relative;
  height: clamp(1.4rem, 8cqh, 2.6rem);
}
.tm-ev-card-bar-track {
  height: 100%;
  border-radius: 999px;
  background: var(--tm-ev-track);
  overflow: hidden;
}
.tm-ev-card-bar-fill {
  height: 100%;
  min-width: 2.5rem;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--tm-ev-green-soft), var(--tm-ev-green));
  transition: width 600ms ease;
}
.tm-ev-card--off .tm-ev-card-bar-fill,
.tm-ev-card--idle .tm-ev-card-bar-fill {
  filter: saturate(0.55);
}
.tm-ev-card-bar-label {
  position: absolute;
  top: 50%;
  right: 1em;
  transform: translateY(-50%);
  font-size: clamp(0.75rem, 3.4cqmin, 1.15rem);
  color: var(--tm-ev-muted);
  font-variant-numeric: tabular-nums;
}
.tm-ev-card-stats {
  grid-area: stats;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  gap: clamp(0.4rem, 2cqw, 0.9rem);
}
.tm-ev-card-stat {
  min-width: 0;
  padding: min(clamp(0.55rem, 3.2cqmin, 1.15rem), 2.4cqw);
  border-radius: clamp(0.75rem, 3.5cqmin, 1.25rem);
  background: var(--tm-ev-chip);
  display: flex;
  flex-direction: column;
}
.tm-ev-card-stat-icon {
  width: clamp(1rem, 5cqmin, 1.75rem);
  height: clamp(1rem, 5cqmin, 1.75rem);
  color: var(--tm-ev-muted);
  margin-bottom: clamp(0.35rem, 3cqmin, 1rem);
}
.tm-ev-card-stat-value {
  font-size: max(0.8rem, min(clamp(0.85rem, 4.6cqmin, 1.45rem), 3.2cqw));
  font-weight: 600;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-variant-numeric: tabular-nums;
}
.tm-ev-card-stat-label {
  margin-top: 0.2em;
  font-size: max(0.68rem, min(clamp(0.7rem, 3.4cqmin, 1.1rem), 2.5cqw));
  color: var(--tm-ev-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@container tm-ev (max-aspect-ratio: 4 / 5) and (min-height: 28rem) {
  .tm-ev-card-inner {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto auto auto;
    grid-template-areas: "head" "art" "hero" "bar" "stats";
  }
  .tm-ev-card-art {
    margin: 0 calc(var(--tm-ev-pad) * -1);
    justify-content: center;
  }
  .tm-ev-card-art img { object-position: center bottom; }
  .tm-ev-card-value { font-size: clamp(2rem, 20cqw, 6rem); }
  .tm-ev-card-stats { grid-auto-flow: row; grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-columns: auto; }
  .tm-ev-card-stat-value { font-size: clamp(0.9rem, 6cqw, 1.45rem); }
  .tm-ev-card-stat-label { font-size: clamp(0.72rem, 4.4cqw, 1.1rem); }
  .tm-ev-card-stat { padding: clamp(0.6rem, 4cqw, 1.15rem); }
}
@container tm-ev (max-width: 32rem) and (min-aspect-ratio: 4 / 5) {
  .tm-ev-card-stat:nth-child(4) { display: none; }
  .tm-ev-card-stat-value { font-size: max(0.8rem, min(clamp(0.85rem, 4.6cqmin, 1.45rem), 4.2cqw)); }
  .tm-ev-card-stat-label { font-size: max(0.68rem, min(clamp(0.7rem, 3.4cqmin, 1.1rem), 3.2cqw)); }
}
@container tm-ev (max-height: 19rem) {
  .tm-ev-card-stat-icon { display: none; }
}
@container tm-ev (max-height: 15rem) {
  .tm-ev-card-stats { display: none; }
  .tm-ev-card-inner {
    grid-template-rows: auto minmax(0, 1fr) auto;
    grid-template-areas: "head art" "hero art" "bar bar";
  }
}
@container tm-ev (max-height: 9.5rem) {
  .tm-ev-card-bar,
  .tm-ev-card-caption { display: none; }
  .tm-ev-card-inner {
    grid-template-rows: auto minmax(0, 1fr);
    grid-template-areas: "head art" "hero art";
  }
}
@container tm-ev (max-width: 20rem) {
  .tm-ev-card-art { display: none; }
  .tm-ev-card-inner {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "head" "hero" "bar" "stats";
  }
  .tm-ev-card-stat:nth-child(n + 3) { display: none; }
}
@container tm-ev (max-width: 20rem) and (max-height: 15rem) {
  .tm-ev-card-inner { grid-template-areas: "head" "hero" "bar"; }
}
@container tm-ev (max-width: 20rem) and (max-height: 9.5rem) {
  .tm-ev-card-inner { grid-template-areas: "head" "hero"; }
}
[data-tm-theme="light"] .tm-ev-card,
[data-tm-theme="colorful"] .tm-ev-card {
  --tm-ev-green: #23b04b;
}
[data-tm-theme="blackColorful"] .tm-ev-card {
  --tm-ev-green: #2fbf5b;
  --tm-ev-green-soft: #a6ecbc;
  --tm-ev-chip: rgba(255, 255, 255, 0.42);
  --tm-ev-track: rgba(255, 255, 255, 0.55);
  --tm-ev-muted: color-mix(in srgb, var(--tm-tile-fg, #1a1a1a) 55%, transparent);
  background: radial-gradient(120% 90% at 75% 10%, rgba(255, 255, 255, 0.45), transparent 60%), var(--tm-surface);
}

[data-tm-theme="blackColorful"] .tm-weather-widget,
[data-tm-theme="blackColorful"] .tm-weather-widget--pastel {
  color: var(--tm-tile-fg, #1a1a1a);
  background: var(--tm-surface);
}

[data-tm-theme="blackColorful"] .tm-media-card {
  background: var(--tm-surface) !important;
  color: var(--tm-tile-fg, #1a1a1a);
}

[data-tm-theme="blackColorful"] .tm-media-device-brand,
[data-tm-theme="blackColorful"] .tm-media-track-artist {
  color: var(--tm-tile-fg, #1a1a1a);
  opacity: 0.5;
}

[data-tm-theme="blackColorful"] .tm-media-power-btn,
[data-tm-theme="blackColorful"] .tm-media-control-btn {
  color: var(--tm-tile-fg, #1a1a1a);
}

[data-tm-theme="blackColorful"] .tm-media-panel {
  background: color-mix(in srgb, var(--tm-tile-fg, #1a1a1a) 10%, transparent);
  border-color: transparent;
}

[data-tm-theme="blackColorful"] .tm-brightness-fill {
  background: linear-gradient(to top, rgba(26, 26, 26, 0.28), rgba(26, 26, 26, 0.06));
}

[data-tm-theme="blackColorful"] .tm-brightness-header .tm-font-bold,
[data-tm-theme="blackColorful"] .tm-brightness-header .tm-text-xs {
  color: var(--tm-tile-fg, #1a1a1a);
}

[data-tm-theme="blackColorful"] .tm-brightness-action state-icon,
[data-tm-theme="blackColorful"] .tm-brightness-action ha-icon,
[data-tm-theme="blackColorful"] .tm-brightness-header state-icon,
[data-tm-theme="blackColorful"] .tm-brightness-header ha-icon,
[data-tm-theme="blackColorful"] .tm-cover-header state-icon,
[data-tm-theme="blackColorful"] .tm-cover-header ha-icon {
  color: var(--tm-tile-fg, #1a1a1a) !important;
}

[data-tm-theme="blackColorful"] .tm-cover-card {
  --tm-cover-stop-fg: #ffffff;
}

[data-tm-theme="blackColorful"] .tm-cover-fill {
  background: linear-gradient(to top, rgba(26, 26, 26, 0.28), rgba(26, 26, 26, 0.06));
}

[data-tm-theme="blackColorful"] .tm-sankey-widget,
[data-tm-theme="blackColorful"] .tm-energy-device-card {
  background: var(--tm-surface);
  color: var(--tm-tile-fg, #1a1a1a);
  border: none;
  backdrop-filter: none;
}

[data-tm-theme="blackColorful"] .tm-btn-round {
  background: #1a1a1a;
  color: #ffffff;
}

[data-tm-theme="blackColorful"] .tm-btn-round:hover {
  background: #333333;
}

[data-tm-theme="blackColorful"] .tm-overlay-gradient {
  display: none;
}

[data-tm-theme="blackColorful"] .tm-title-xl,
[data-tm-theme="blackColorful"] .tm-title-lg {
  text-shadow: none !important;
}

.tm-ssx {
  position: absolute;
  inset: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #000;
  color: white;
}
.tm-ssx-photo {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
}
.tm-ssx-shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0) 22%, rgba(0, 0, 0, 0) 58%, rgba(0, 0, 0, 0.55) 100%);
  pointer-events: none;
}
.tm-ssx-clock {
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6vh 4vw 2vh;
  text-align: center;
}
.tm-ssx-time {
  margin: 0;
  font-size: clamp(7.5rem, 22vw, 16rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 0.82;
  color: rgba(255, 255, 255, 0.86);
  font-variant-numeric: tabular-nums;
  text-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
}
.tm-ssx-date {
  margin: 1.25rem 0 0;
  font-size: clamp(1.35rem, 2.6vw, 2.15rem);
  font-weight: 500;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.82);
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
}
.tm-ssx-dock {
  position: relative;
  z-index: 2;
  flex: 0 0 auto;
  height: min(26vh, 220px);
  margin: 0 2.25vw 2.4vh;
  padding: 0.7rem;
  display: flex;
  gap: 0.7rem;
  border-radius: 1.85rem;
  background: rgba(12, 12, 16, 0.38);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow:
    0 22px 50px rgba(0, 0, 0, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(28px) saturate(1.45);
  -webkit-backdrop-filter: blur(28px) saturate(1.45);
  overflow: hidden;
}
.tm-ssx-tile {
  flex: 1 1 0;
  min-width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.85rem 1rem;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}
.tm-ssx-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.15rem;
}
.tm-ssx-kicker {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.62);
}
.tm-ssx-label {
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.88);
}
.tm-ssx-value {
  font-size: clamp(2.6rem, 4.2vw, 3.6rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 0.9;
  font-variant-numeric: tabular-nums;
}
.tm-ssx-value span {
  font-size: 0.55em;
  font-weight: 500;
  margin-left: 0.05em;
  opacity: 0.8;
}
.tm-ssx-title {
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-ssx-sub {
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.68);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-ssx-icon {
  flex: 0 0 auto;
  width: 4.25rem;
  height: 4.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.14);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
}
.tm-ssx-art {
  flex: 0 0 auto;
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 1.05rem;
  background: rgba(255, 255, 255, 0.12) center / cover no-repeat;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.28);
}
.tm-ssx-progress {
  margin-top: 0.55rem;
  width: 100%;
  max-width: 9rem;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  overflow: hidden;
}
.tm-ssx-progress > span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.88);
}
.tm-ssx-avatars {
  display: flex;
  align-items: center;
  padding-left: 0.15rem;
}
.tm-ssx-avatar {
  width: 3.15rem;
  height: 3.15rem;
  margin-left: -0.55rem;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.16);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.95rem;
}
.tm-ssx-avatar:first-child { margin-left: 0; }
.tm-ssx-avatar.away {
  opacity: 0.38;
  filter: grayscale(0.8);
}
.tm-ssx-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.tm-ssx-tile--people,
.tm-ssx-tile--stat {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.35rem;
}
.tm-ssx-tile--people .tm-ssx-sub,
.tm-ssx-tile--stat .tm-ssx-sub {
  max-width: 100%;
}
@media (max-height: 760px) {
  .tm-ssx-time { font-size: clamp(5.5rem, 16vw, 9rem); }
  .tm-ssx-dock { height: min(24vh, 168px); }
  .tm-ssx-art { width: 3.4rem; height: 3.4rem; }
  .tm-ssx-value { font-size: 1.7rem; }
}
`,Tj=`
the-monitor-dashboard {
  display: block !important;
  width: 100% !important;
  min-width: 100% !important;
  height: 100% !important;
  min-height: 0 !important;
  box-sizing: border-box !important;
}

ha-card:has(the-monitor-dashboard),
hui-card:has(the-monitor-dashboard) {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  height: 100% !important;
  width: 100% !important;
}
`,Rj=`
.tm-ha-card-host {
  display: block;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: auto;
  box-sizing: border-box;
}
.tm-ha-card-host.is-editing {
  pointer-events: none;
}
.tm-ha-card-host > * {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
}
.tm-ha-card-host-message {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  color: white;
  font: 500 0.875rem/1.4 system-ui, sans-serif;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 1.25rem;
}
`,N1="custom:the-monitor-dashboard";function Dj(){const e=window.location.pathname.match(/^\/([^/]+)\/\d+/);return(e==null?void 0:e[1])??"the-monitor"}function Oj(e){var r;const t=je(e),n=(r=t.rooms)==null?void 0:r[0];return{type:N1,rooms:t.rooms,layout:n==null?void 0:n.layout,layoutPreset:n==null?void 0:n.layoutPreset,vacuum:t.vacuum,ev:t.ev,windows:t.windows,presence:t.presence,backgroundImage:t.backgroundImage,screensaver:t.screensaver,appearance:t.appearance}}function Fj(e,t){var a;if(!((a=e==null?void 0:e.views)!=null&&a.length))return null;const n=e.views.map(o=>{var l;return{...o,cards:((l=o.cards)==null?void 0:l.map(c=>(c==null?void 0:c.type)===N1?{...t}:c))??o.cards}}),{kiosk_mode:r,...i}=e;return{...i,views:n}}async function Bj(e,t){var i;if(!((i=e==null?void 0:e.connection)!=null&&i.sendMessagePromise))return!1;const n=Dj(),r=Oj(t);try{const a=await e.connection.sendMessagePromise({type:"lovelace/config",url_path:n,force:!1}),o=Fj(a,r);return o?(await e.connection.sendMessagePromise({type:"lovelace/config/save",url_path:n,config:o}),!0):(console.warn("The Monitor: refused to persist — dashboard config invalid"),!1)}catch(a){return console.warn("The Monitor: could not persist config to Lovelace",a),!1}}let ml=null,Kf=Promise.resolve();function Qj(e,t,n=1200){e!=null&&e.connection&&(ml&&window.clearTimeout(ml),ml=window.setTimeout(()=>{bf(),Kf=Kf.then(()=>Bj(e,t)).then(()=>bf()).catch(()=>{})},n))}const Yf="the-monitor-kiosk-cleared",Wj=["kiosk","hide_header","hide_sidebar","hide_menubutton","hide_overflow","hide_settings","hide_notifications","hide_account","hide_search","hide_assistant","hide_refresh","hide_unused_entities","hide_reload_resources","hide_edit_dashboard","block_overflow","block_mouse","block_context_menu"];function Uj(){let e=!1;try{const t=[];for(let n=0;n<window.localStorage.length;n+=1){const r=window.localStorage.key(n);r&&t.push(r)}t.forEach(n=>{n.startsWith("km")&&(window.localStorage.removeItem(n),e=!0)})}catch{}return e}function Hj(){const e=new URL(window.location.href);let t=!1;return Wj.forEach(n=>{e.searchParams.has(n)&&(e.searchParams.delete(n),t=!0)}),t&&window.history.replaceState(window.history.state,"",`${e.pathname}${e.search}${e.hash}`),t}function Vj(){if(typeof window>"u"||window.sessionStorage.getItem(Yf)==="1")return;const e=Uj(),t=Hj();window.sessionStorage.setItem(Yf,"1"),(e||t)&&window.location.reload()}const Uo="the-monitor",qj="The Monitor",Jf="the-monitor-sidebar-checked",Kj={views:[{title:"Monitor",type:"panel",cards:[{type:"custom:the-monitor-dashboard"}]}]};function Yj(e){return new Promise(t=>{window.setTimeout(t,e)})}function Mi(e,t){return typeof e.callWS=="function"?e.callWS(t):e.connection.sendMessagePromise(t)}async function Jj(){var t,n;const e=Date.now()+2e4;for(;Date.now()<e;){const r=(t=document.querySelector("home-assistant"))==null?void 0:t.hass;if(r!=null&&r.user&&((n=r.connection)!=null&&n.sendMessagePromise))return r;await Yj(300)}return null}function Zj(e){const t=`${(e==null?void 0:e.message)||e}`;return/config_not_found|No config found/i.test(t)}async function Gj(e){var t;try{const n=await Mi(e,{type:"lovelace/config",url_path:Uo,force:!1});if((t=n==null?void 0:n.views)!=null&&t.length)return}catch(n){if(!Zj(n))throw n}await Mi(e,{type:"lovelace/config/save",url_path:Uo,config:Kj})}async function Xj(){var t;if(typeof window>"u"||typeof sessionStorage>"u"||document.getElementById("root")&&!document.querySelector("home-assistant")||sessionStorage.getItem(Jf)==="1")return;const e=await Jj();if((t=e==null?void 0:e.user)!=null&&t.is_admin)try{const n=await Mi(e,{type:"lovelace/dashboards/list"}),r=(Array.isArray(n)?n:[]).find(i=>i.url_path===Uo);r?r.show_in_sidebar===!1&&r.id&&await Mi(e,{type:"lovelace/dashboards/update",dashboard_id:r.id,show_in_sidebar:!0}):await Mi(e,{type:"lovelace/dashboards/create",url_path:Uo,title:qj,icon:"mdi:monitor-dashboard",require_admin:!1,show_in_sidebar:!0}),await Gj(e),sessionStorage.setItem(Jf,"1")}catch(n){console.warn("The Monitor: sidebar dashboard was not created",n)}}class _j extends Fc.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t){console.error("The Monitor render error:",t)}render(){return this.state.error?s.jsxs("div",{className:"tm-full-screen tm-flex-col tm-flex-center",style:{padding:"2rem",textAlign:"center",gap:"1rem"},children:[s.jsx("h2",{className:"tm-title-xl",children:"The Monitor — Fehler"}),s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:this.state.error.message}),s.jsx("button",{type:"button",className:"tm-btn-secondary",onClick:()=>this.setState({error:null}),children:"Erneut versuchen"})]}):this.props.children}}const Zf="the-monitor-dashboard";function Lc(e,t){let n=document.getElementById(e);n||(n=document.createElement("style"),n.id=e,document.head.appendChild(n)),n.textContent=t}function $j(e){try{return gf(e,{embedded:!0})}catch(t){return console.error("The Monitor: invalid config, using defaults",t),gf({},{embedded:!0})}}function e4({initialConfig:e,onRegisterHassUpdate:t,onConfigSaved:n,enableMock:r=!1}){return s.jsx(Tg,{onRegisterUpdate:t,enableMock:r,children:s.jsx(T0,{initialConfig:e,onConfigSaved:n,children:s.jsx(_j,{children:s.jsx(C1,{})})})})}class t4 extends HTMLElement{static getStubConfig(){return{}}static getGridOptions(){return{columns:48,rows:1}}getCardSize(){return 12}constructor(){super(),this._hass=null,this._config={},this._root=null,this._updateHass=null,this._shadow=null,this._mountPoint=null}setConfig(t){this._config=t||{},this._root&&this._renderApp()}_renderApp(){if(!this._root)return;const t=$j(this._config);try{this._root.render(s.jsx(Fc.StrictMode,{children:s.jsx(e4,{initialConfig:t,onRegisterHassUpdate:n=>{this._updateHass=n,this._hass&&n(this._hass)},onConfigSaved:n=>{this._hass&&Qj(this._hass,n)}})}))}catch(n){console.error("The Monitor: render failed",n)}}set hass(t){var n;this._hass=t,(n=this._updateHass)==null||n.call(this,t)}connectedCallback(){if(Vj(),Lc("the-monitor-ha-shell",Tj),Lc("the-monitor-card-host",Rj),!this._shadow){this._shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=E1,this._shadow.appendChild(t),this._mountPoint=document.createElement("div"),this._mountPoint.style.height="100%",this._mountPoint.style.width="100%",this._mountPoint.style.display="block",this._mountPoint.style.boxSizing="border-box",this._shadow.appendChild(this._mountPoint),RE(this._shadow)}this._root||(this._root=no.createRoot(this._mountPoint)),this._renderApp()}disconnectedCallback(){var t;(t=document.getElementById("the-monitor-ha-shell"))==null||t.remove(),DE(this._shadow),this._updateHass=null,this._root&&(this._root.unmount(),this._root=null)}}try{customElements.get(Zf)||customElements.define(Zf,t4)}catch(e){console.error("Failed to register The Monitor dashboard:",e)}Xj();const Gf=document.getElementById("root");Gf&&(Lc("the-monitor-dev-styles",E1),no.createRoot(Gf).render(s.jsx(Fc.StrictMode,{children:s.jsx(Tg,{enableMock:!0,children:s.jsx(T0,{initialConfig:fC(),children:s.jsx(C1,{})})})})));
