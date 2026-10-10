(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html,body,#root{height:100%;margin:0}#root{padding:0;font-family:system-ui,-apple-system,sans-serif;cursor:default}#root::-webkit-scrollbar{width:0px;background:transparent}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var sy=Object.defineProperty;var ly=(e,t,n)=>t in e?sy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var dt=(e,t,n)=>ly(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function cy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rf={exports:{}},Wo={},Df={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),uy=Symbol.for("react.portal"),dy=Symbol.for("react.fragment"),my=Symbol.for("react.strict_mode"),fy=Symbol.for("react.profiler"),py=Symbol.for("react.provider"),hy=Symbol.for("react.context"),gy=Symbol.for("react.forward_ref"),yy=Symbol.for("react.suspense"),vy=Symbol.for("react.memo"),by=Symbol.for("react.lazy"),ld=Symbol.iterator;function xy(e){return e===null||typeof e!="object"?null:(e=ld&&e[ld]||e["@@iterator"],typeof e=="function"?e:null)}var Ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_f=Object.assign,Wf={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=Wf,this.updater=n||Ff}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bf(){}Bf.prototype=Kr.prototype;function Sc(e,t,n){this.props=e,this.context=t,this.refs=Wf,this.updater=n||Ff}var Nc=Sc.prototype=new Bf;Nc.constructor=Sc;_f(Nc,Kr.prototype);Nc.isPureReactComponent=!0;var cd=Array.isArray,Hf=Object.prototype.hasOwnProperty,Ac={current:null},qf={key:!0,ref:!0,__self:!0,__source:!0};function Uf(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Hf.call(t,r)&&!qf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xi,type:e,key:a,ref:o,props:i,_owner:Ac.current}}function wy(e,t){return{$$typeof:Xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xi}function ky(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ud=/\/+/g;function bs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ky(""+e.key):t.toString(36)}function Da(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xi:case uy:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+bs(o,0):r,cd(i)?(n="",e!=null&&(n=e.replace(ud,"$&/")+"/"),Da(i,t,n,"",function(u){return u})):i!=null&&(jc(i)&&(i=wy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ud,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",cd(e))for(var l=0;l<e.length;l++){a=e[l];var c=r+bs(a,l);o+=Da(a,t,n,c,i)}else if(c=xy(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=r+bs(a,l++),o+=Da(a,t,n,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(e,t,n){if(e==null)return e;var r=[],i=0;return Da(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Sy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Fa={transition:null},Ny={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Fa,ReactCurrentOwner:Ac};function Yf(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:ca,forEach:function(e,t,n){ca(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ca(e,function(){t++}),t},toArray:function(e){return ca(e,function(t){return t})||[]},only:function(e){if(!jc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Kr;X.Fragment=dy;X.Profiler=fy;X.PureComponent=Sc;X.StrictMode=my;X.Suspense=yy;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;X.act=Yf;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_f({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Ac.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Hf.call(t,c)&&!qf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Xi,type:e.type,key:i,ref:a,props:r,_owner:o}};X.createContext=function(e){return e={$$typeof:hy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:py,_context:e},e.Consumer=e};X.createElement=Uf;X.createFactory=function(e){var t=Uf.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:gy,render:e}};X.isValidElement=jc;X.lazy=function(e){return{$$typeof:by,_payload:{_status:-1,_result:e},_init:Sy}};X.memo=function(e,t){return{$$typeof:vy,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Fa.transition;Fa.transition={};try{e()}finally{Fa.transition=t}};X.unstable_act=Yf;X.useCallback=function(e,t){return Ve.current.useCallback(e,t)};X.useContext=function(e){return Ve.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ve.current.useEffect(e,t)};X.useId=function(){return Ve.current.useId()};X.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ve.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};X.useRef=function(e){return Ve.current.useRef(e)};X.useState=function(e){return Ve.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ve.current.useTransition()};X.version="18.3.1";Df.exports=X;var b=Df.exports;const Ec=cy(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay=b,jy=Symbol.for("react.element"),Ey=Symbol.for("react.fragment"),Cy=Object.prototype.hasOwnProperty,Ty=Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Py={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Cy.call(t,r)&&!Py.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:jy,type:e,key:a,ref:o,props:i,_owner:Ty.current}}Wo.Fragment=Ey;Wo.jsx=Kf;Wo.jsxs=Kf;Rf.exports=Wo;var s=Rf.exports,$a={},Vf={exports:{}},lt={},Gf={exports:{}},Qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,M){var L=R.length;R.push(M);e:for(;0<L;){var S=L-1>>>1,A=R[S];if(0<i(A,M))R[S]=M,R[L]=A,L=S;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var M=R[0],L=R.pop();if(L!==M){R[0]=L;e:for(var S=0,A=R.length,P=A>>>1;S<P;){var I=2*(S+1)-1,B=R[I],G=I+1,K=R[G];if(0>i(B,L))G<A&&0>i(K,B)?(R[S]=K,R[G]=L,S=G):(R[S]=B,R[I]=L,S=I);else if(G<A&&0>i(K,L))R[S]=K,R[G]=L,S=G;else break e}}return M}function i(R,M){var L=R.sortIndex-M.sortIndex;return L!==0?L:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,m=null,f=3,g=!1,v=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=R)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function k(R){if(x=!1,h(R),!v)if(n(c)!==null)v=!0,be(N);else{var M=n(u);M!==null&&H(k,M.startTime-R)}}function N(R,M){v=!1,x&&(x=!1,y(j),j=-1),g=!0;var L=f;try{for(h(M),m=n(c);m!==null&&(!(m.expirationTime>M)||R&&!D());){var S=m.callback;if(typeof S=="function"){m.callback=null,f=m.priorityLevel;var A=S(m.expirationTime<=M);M=e.unstable_now(),typeof A=="function"?m.callback=A:m===n(c)&&r(c),h(M)}else r(c);m=n(c)}if(m!==null)var P=!0;else{var I=n(u);I!==null&&H(k,I.startTime-M),P=!1}return P}finally{m=null,f=L,g=!1}}var E=!1,C=null,j=-1,z=5,T=-1;function D(){return!(e.unstable_now()-T<z)}function U(){if(C!==null){var R=e.unstable_now();T=R;var M=!0;try{M=C(!0,R)}finally{M?J():(E=!1,C=null)}}else E=!1}var J;if(typeof p=="function")J=function(){p(U)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,se=Z.port2;Z.port1.onmessage=U,J=function(){se.postMessage(null)}}else J=function(){w(U,0)};function be(R){C=R,E||(E=!0,J())}function H(R,M){j=w(function(){R(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,be(N))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var L=f;f=M;try{return R()}finally{f=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=f;f=R;try{return M()}finally{f=L}},e.unstable_scheduleCallback=function(R,M,L){var S=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?S+L:S):L=S,R){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=L+A,R={id:d++,callback:M,priorityLevel:R,startTime:L,expirationTime:A,sortIndex:-1},L>S?(R.sortIndex=L,t(u,R),n(c)===null&&R===n(u)&&(x?(y(j),j=-1):x=!0,H(k,L-S))):(R.sortIndex=A,t(c,R),v||g||(v=!0,be(N))),R},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(R){var M=f;return function(){var L=f;f=M;try{return R.apply(this,arguments)}finally{f=L}}}})(Qf);Gf.exports=Qf;var My=Gf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=b,ot=My;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jf=new Set,Ti={};function er(e,t){Or(e,t),Or(e+"Capture",t)}function Or(e,t){for(Ti[e]=t,e=0;e<t.length;e++)Jf.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,Ly=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dd={},md={};function Oy(e){return ol.call(md,e)?!0:ol.call(dd,e)?!1:Ly.test(e)?md[e]=!0:(dd[e]=!0,!1)}function Iy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ry(e,t,n,r){if(t===null||typeof t>"u"||Iy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cc=/[\-:]([a-z])/g;function Tc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cc,Tc);Oe[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cc,Tc);Oe[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cc,Tc);Oe[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pc(e,t,n,r){var i=Oe.hasOwnProperty(t)?Oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ry(t,n,i,r)&&(n=null),r||i===null?Oy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),ur=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),Mc=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),Xf=Symbol.for("react.provider"),Zf=Symbol.for("react.context"),zc=Symbol.for("react.forward_ref"),ll=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),Lc=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),$f=Symbol.for("react.offscreen"),fd=Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=fd&&e[fd]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,xs;function di(e){if(xs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xs=t&&t[1]||""}return`
`+xs+e}var ws=!1;function ks(e,t){if(!e||ws)return"";ws=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{ws=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?di(e):""}function Dy(e){switch(e.tag){case 5:return di(e.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return e=ks(e.type,!1),e;case 11:return e=ks(e.type.render,!1),e;case 1:return e=ks(e.type,!0),e;default:return""}}function ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dr:return"Fragment";case ur:return"Portal";case sl:return"Profiler";case Mc:return"StrictMode";case ll:return"Suspense";case cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zf:return(e.displayName||"Context")+".Consumer";case Xf:return(e._context.displayName||"Context")+".Provider";case zc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lc:return t=e.displayName||null,t!==null?t:ul(e.type)||"Memo";case sn:t=e._payload,e=e._init;try{return ul(e(t))}catch{}}return null}function Fy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(t);case 8:return t===Mc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _y(e){var t=ep(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function da(e){e._valueTracker||(e._valueTracker=_y(e))}function tp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ep(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function eo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dl(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function np(e,t){t=t.checked,t!=null&&Pc(e,"checked",t,!1)}function ml(e,t){np(e,t);var n=Nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,Nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||eo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mi=Array.isArray;function Sr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(mi(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nn(n)}}function rp(e,t){var n=Nn(t.value),r=Nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ip(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ip(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ma,ap=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wy=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(e){Wy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bi[t]=bi[e]})});function op(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||bi.hasOwnProperty(e)&&bi[e]?(""+t).trim():t+"px"}function sp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=op(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var By=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gl(e,t){if(t){if(By[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function Oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,Nr=null,Ar=null;function vd(e){if(e=ea(e)){if(typeof bl!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Yo(t),bl(e.stateNode,e.type,t))}}function lp(e){Nr?Ar?Ar.push(e):Ar=[e]:Nr=e}function cp(){if(Nr){var e=Nr,t=Ar;if(Ar=Nr=null,vd(e),t)for(e=0;e<t.length;e++)vd(t[e])}}function up(e,t){return e(t)}function dp(){}var Ss=!1;function mp(e,t,n){if(Ss)return e(t,n);Ss=!0;try{return up(e,t,n)}finally{Ss=!1,(Nr!==null||Ar!==null)&&(dp(),cp())}}function Mi(e,t){var n=e.stateNode;if(n===null)return null;var r=Yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var xl=!1;if(Xt)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){xl=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{xl=!1}function Hy(e,t,n,r,i,a,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var xi=!1,to=null,no=!1,wl=null,qy={onError:function(e){xi=!0,to=e}};function Uy(e,t,n,r,i,a,o,l,c){xi=!1,to=null,Hy.apply(qy,arguments)}function Yy(e,t,n,r,i,a,o,l,c){if(Uy.apply(this,arguments),xi){if(xi){var u=to;xi=!1,to=null}else throw Error(O(198));no||(no=!0,wl=u)}}function tr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bd(e){if(tr(e)!==e)throw Error(O(188))}function Ky(e){var t=e.alternate;if(!t){if(t=tr(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return bd(i),e;if(a===r)return bd(i),t;a=a.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function pp(e){return e=Ky(e),e!==null?hp(e):null}function hp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hp(e);if(t!==null)return t;e=e.sibling}return null}var gp=ot.unstable_scheduleCallback,xd=ot.unstable_cancelCallback,Vy=ot.unstable_shouldYield,Gy=ot.unstable_requestPaint,xe=ot.unstable_now,Qy=ot.unstable_getCurrentPriorityLevel,Ic=ot.unstable_ImmediatePriority,yp=ot.unstable_UserBlockingPriority,ro=ot.unstable_NormalPriority,Jy=ot.unstable_LowPriority,vp=ot.unstable_IdlePriority,Bo=null,Ft=null;function Xy(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Bo,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:e1,Zy=Math.log,$y=Math.LN2;function e1(e){return e>>>=0,e===0?32:31-(Zy(e)/$y|0)|0}var fa=64,pa=4194304;function fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function io(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=fi(l):(a&=o,a!==0&&(r=fi(a)))}else o=n&~i,o!==0?r=fi(o):a!==0&&(r=fi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),i=1<<n,r|=e[n],t&=~i;return r}function t1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-jt(a),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=t1(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bp(){var e=fa;return fa<<=1,!(fa&4194240)&&(fa=64),e}function Ns(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function r1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-jt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Rc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function xp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wp,Dc,kp,Sp,Np,Sl=!1,ha=[],gn=null,yn=null,vn=null,zi=new Map,Li=new Map,un=[],i1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wd(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(t.pointerId)}}function ti(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ea(t),t!==null&&Dc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function a1(e,t,n,r,i){switch(t){case"focusin":return gn=ti(gn,e,t,n,r,i),!0;case"dragenter":return yn=ti(yn,e,t,n,r,i),!0;case"mouseover":return vn=ti(vn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return zi.set(a,ti(zi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Li.set(a,ti(Li.get(a)||null,e,t,n,r,i)),!0}return!1}function Ap(e){var t=Wn(e.target);if(t!==null){var n=tr(t);if(n!==null){if(t=n.tag,t===13){if(t=fp(n),t!==null){e.blockedOn=t,Np(e.priority,function(){kp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=ea(n),t!==null&&Dc(t),e.blockedOn=n,!1;t.shift()}return!0}function kd(e,t,n){_a(e)&&n.delete(t)}function o1(){Sl=!1,gn!==null&&_a(gn)&&(gn=null),yn!==null&&_a(yn)&&(yn=null),vn!==null&&_a(vn)&&(vn=null),zi.forEach(kd),Li.forEach(kd)}function ni(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,o1)))}function Oi(e){function t(i){return ni(i,e)}if(0<ha.length){ni(ha[0],e);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&ni(gn,e),yn!==null&&ni(yn,e),vn!==null&&ni(vn,e),zi.forEach(t),Li.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Ap(n),n.blockedOn===null&&un.shift()}var jr=nn.ReactCurrentBatchConfig,ao=!0;function s1(e,t,n,r){var i=oe,a=jr.transition;jr.transition=null;try{oe=1,Fc(e,t,n,r)}finally{oe=i,jr.transition=a}}function l1(e,t,n,r){var i=oe,a=jr.transition;jr.transition=null;try{oe=4,Fc(e,t,n,r)}finally{oe=i,jr.transition=a}}function Fc(e,t,n,r){if(ao){var i=Nl(e,t,n,r);if(i===null)Os(e,t,r,oo,n),wd(e,r);else if(a1(i,e,t,n,r))r.stopPropagation();else if(wd(e,r),t&4&&-1<i1.indexOf(e)){for(;i!==null;){var a=ea(i);if(a!==null&&wp(a),a=Nl(e,t,n,r),a===null&&Os(e,t,r,oo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Os(e,t,r,null,n)}}var oo=null;function Nl(e,t,n,r){if(oo=null,e=Oc(r),e=Wn(e),e!==null)if(t=tr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oo=e,null}function jp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qy()){case Ic:return 1;case yp:return 4;case ro:case Jy:return 16;case vp:return 536870912;default:return 16}default:return 16}}var fn=null,_c=null,Wa=null;function Ep(){if(Wa)return Wa;var e,t=_c,n=t.length,r,i="value"in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Wa=i.slice(e,1<r?1-r:void 0)}function Ba(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ga(){return!0}function Sd(){return!1}function ct(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ga:Sd,this.isPropagationStopped=Sd,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),t}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=ct(Vr),$i=pe({},Vr,{view:0,detail:0}),c1=ct($i),As,js,ri,Ho=pe({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(As=e.screenX-ri.screenX,js=e.screenY-ri.screenY):js=As=0,ri=e),As)},movementY:function(e){return"movementY"in e?e.movementY:js}}),Nd=ct(Ho),u1=pe({},Ho,{dataTransfer:0}),d1=ct(u1),m1=pe({},$i,{relatedTarget:0}),Es=ct(m1),f1=pe({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),p1=ct(f1),h1=pe({},Vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),g1=ct(h1),y1=pe({},Vr,{data:0}),Ad=ct(y1),v1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=x1[e])?!!t[e]:!1}function Bc(){return w1}var k1=pe({},$i,{key:function(e){if(e.key){var t=v1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?b1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(e){return e.type==="keypress"?Ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),S1=ct(k1),N1=pe({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=ct(N1),A1=pe({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),j1=ct(A1),E1=pe({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),C1=ct(E1),T1=pe({},Ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),P1=ct(T1),M1=[9,13,27,32],Hc=Xt&&"CompositionEvent"in window,wi=null;Xt&&"documentMode"in document&&(wi=document.documentMode);var z1=Xt&&"TextEvent"in window&&!wi,Cp=Xt&&(!Hc||wi&&8<wi&&11>=wi),Ed=" ",Cd=!1;function Tp(e,t){switch(e){case"keyup":return M1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function L1(e,t){switch(e){case"compositionend":return Pp(t);case"keypress":return t.which!==32?null:(Cd=!0,Ed);case"textInput":return e=t.data,e===Ed&&Cd?null:e;default:return null}}function O1(e,t){if(mr)return e==="compositionend"||!Hc&&Tp(e,t)?(e=Ep(),Wa=_c=fn=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cp&&t.locale!=="ko"?null:t.data;default:return null}}var I1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!I1[e.type]:t==="textarea"}function Mp(e,t,n,r){lp(r),t=so(t,"onChange"),0<t.length&&(n=new Wc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ki=null,Ii=null;function R1(e){Hp(e,0)}function qo(e){var t=hr(e);if(tp(t))return e}function D1(e,t){if(e==="change")return t}var zp=!1;if(Xt){var Cs;if(Xt){var Ts="oninput"in document;if(!Ts){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Ts=typeof Pd.oninput=="function"}Cs=Ts}else Cs=!1;zp=Cs&&(!document.documentMode||9<document.documentMode)}function Md(){ki&&(ki.detachEvent("onpropertychange",Lp),Ii=ki=null)}function Lp(e){if(e.propertyName==="value"&&qo(Ii)){var t=[];Mp(t,Ii,e,Oc(e)),mp(R1,t)}}function F1(e,t,n){e==="focusin"?(Md(),ki=t,Ii=n,ki.attachEvent("onpropertychange",Lp)):e==="focusout"&&Md()}function _1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Ii)}function W1(e,t){if(e==="click")return qo(t)}function B1(e,t){if(e==="input"||e==="change")return qo(t)}function H1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:H1;function Ri(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ol.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ld(e,t){var n=zd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zd(n)}}function Op(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Op(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ip(){for(var e=window,t=eo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=eo(e.document)}return t}function qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function q1(e){var t=Ip(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Op(n.ownerDocument.documentElement,n)){if(r!==null&&qc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Ld(n,a);var o=Ld(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var U1=Xt&&"documentMode"in document&&11>=document.documentMode,fr=null,Al=null,Si=null,jl=!1;function Od(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jl||fr==null||fr!==eo(r)||(r=fr,"selectionStart"in r&&qc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Si&&Ri(Si,r)||(Si=r,r=so(Al,"onSelect"),0<r.length&&(t=new Wc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fr)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},Ps={},Rp={};Xt&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Uo(e){if(Ps[e])return Ps[e];if(!pr[e])return e;var t=pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rp)return Ps[e]=t[n];return e}var Dp=Uo("animationend"),Fp=Uo("animationiteration"),_p=Uo("animationstart"),Wp=Uo("transitionend"),Bp=new Map,Id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){Bp.set(e,t),er(t,[e])}for(var Ms=0;Ms<Id.length;Ms++){var zs=Id[Ms],Y1=zs.toLowerCase(),K1=zs[0].toUpperCase()+zs.slice(1);En(Y1,"on"+K1)}En(Dp,"onAnimationEnd");En(Fp,"onAnimationIteration");En(_p,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Wp,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V1=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function Rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yy(r,t,void 0,e),e.currentTarget=null}function Hp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==a&&i.isPropagationStopped())break e;Rd(i,l,u),a=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==a&&i.isPropagationStopped())break e;Rd(i,l,u),a=c}}}if(no)throw e=wl,no=!1,wl=null,e}function ce(e,t){var n=t[Ml];n===void 0&&(n=t[Ml]=new Set);var r=e+"__bubble";n.has(r)||(qp(t,e,2,!1),n.add(r))}function Ls(e,t,n){var r=0;t&&(r|=4),qp(n,e,r,t)}var va="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[va]){e[va]=!0,Jf.forEach(function(n){n!=="selectionchange"&&(V1.has(n)||Ls(n,!1,e),Ls(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[va]||(t[va]=!0,Ls("selectionchange",!1,t))}}function qp(e,t,n,r){switch(jp(t)){case 1:var i=s1;break;case 4:i=l1;break;default:i=Fc}n=i.bind(null,t,n,e),i=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Os(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Wn(l),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue e}l=l.parentNode}}r=r.return}mp(function(){var u=a,d=Oc(n),m=[];e:{var f=Bp.get(e);if(f!==void 0){var g=Wc,v=e;switch(e){case"keypress":if(Ba(n)===0)break e;case"keydown":case"keyup":g=S1;break;case"focusin":v="focus",g=Es;break;case"focusout":v="blur",g=Es;break;case"beforeblur":case"afterblur":g=Es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=d1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=j1;break;case Dp:case Fp:case _p:g=p1;break;case Wp:g=C1;break;case"scroll":g=c1;break;case"wheel":g=P1;break;case"copy":case"cut":case"paste":g=g1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jd}var x=(t&4)!==0,w=!x&&e==="scroll",y=x?f!==null?f+"Capture":null:f;x=[];for(var p=u,h;p!==null;){h=p;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,y!==null&&(k=Mi(p,y),k!=null&&x.push(Fi(p,k,h)))),w)break;p=p.return}0<x.length&&(f=new g(f,v,null,n,d),m.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==vl&&(v=n.relatedTarget||n.fromElement)&&(Wn(v)||v[Zt]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Wn(v):null,v!==null&&(w=tr(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(x=Nd,k="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=jd,k="onPointerLeave",y="onPointerEnter",p="pointer"),w=g==null?f:hr(g),h=v==null?f:hr(v),f=new x(k,p+"leave",g,n,d),f.target=w,f.relatedTarget=h,k=null,Wn(d)===u&&(x=new x(y,p+"enter",v,n,d),x.target=h,x.relatedTarget=w,k=x),w=k,g&&v)t:{for(x=g,y=v,p=0,h=x;h;h=ar(h))p++;for(h=0,k=y;k;k=ar(k))h++;for(;0<p-h;)x=ar(x),p--;for(;0<h-p;)y=ar(y),h--;for(;p--;){if(x===y||y!==null&&x===y.alternate)break t;x=ar(x),y=ar(y)}x=null}else x=null;g!==null&&Dd(m,f,g,x,!1),v!==null&&w!==null&&Dd(m,w,v,x,!0)}}e:{if(f=u?hr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var N=D1;else if(Td(f))if(zp)N=B1;else{N=_1;var E=F1}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=W1);if(N&&(N=N(e,u))){Mp(m,N,n,d);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&fl(f,"number",f.value)}switch(E=u?hr(u):window,e){case"focusin":(Td(E)||E.contentEditable==="true")&&(fr=E,Al=u,Si=null);break;case"focusout":Si=Al=fr=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,Od(m,n,d);break;case"selectionchange":if(U1)break;case"keydown":case"keyup":Od(m,n,d)}var C;if(Hc)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else mr?Tp(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Cp&&n.locale!=="ko"&&(mr||j!=="onCompositionStart"?j==="onCompositionEnd"&&mr&&(C=Ep()):(fn=d,_c="value"in fn?fn.value:fn.textContent,mr=!0)),E=so(u,j),0<E.length&&(j=new Ad(j,e,null,n,d),m.push({event:j,listeners:E}),C?j.data=C:(C=Pp(n),C!==null&&(j.data=C)))),(C=z1?L1(e,n):O1(e,n))&&(u=so(u,"onBeforeInput"),0<u.length&&(d=new Ad("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=C))}Hp(m,t)})}function Fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function so(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Mi(e,n),a!=null&&r.unshift(Fi(e,a,i)),a=Mi(e,t),a!=null&&r.push(Fi(e,a,i))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Mi(n,a),c!=null&&o.unshift(Fi(n,c,l))):i||(c=Mi(n,a),c!=null&&o.push(Fi(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var G1=/\r\n?/g,Q1=/\u0000|\uFFFD/g;function Fd(e){return(typeof e=="string"?e:""+e).replace(G1,`
`).replace(Q1,"")}function ba(e,t,n){if(t=Fd(t),Fd(e)!==t&&n)throw Error(O(425))}function lo(){}var El=null,Cl=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,J1=typeof clearTimeout=="function"?clearTimeout:void 0,_d=typeof Promise=="function"?Promise:void 0,X1=typeof queueMicrotask=="function"?queueMicrotask:typeof _d<"u"?function(e){return _d.resolve(null).then(e).catch(Z1)}:Pl;function Z1(e){setTimeout(function(){throw e})}function Is(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Oi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oi(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Gr,_i="__reactProps$"+Gr,Zt="__reactContainer$"+Gr,Ml="__reactEvents$"+Gr,$1="__reactListeners$"+Gr,ev="__reactHandles$"+Gr;function Wn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wd(e);e!==null;){if(n=e[Ot])return n;e=Wd(e)}return t}e=n,n=e.parentNode}return null}function ea(e){return e=e[Ot]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Yo(e){return e[_i]||null}var zl=[],gr=-1;function Cn(e){return{current:e}}function ue(e){0>gr||(e.current=zl[gr],zl[gr]=null,gr--)}function le(e,t){gr++,zl[gr]=e.current,e.current=t}var An={},_e=Cn(An),Ze=Cn(!1),Kn=An;function Ir(e,t){var n=e.type.contextTypes;if(!n)return An;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function co(){ue(Ze),ue(_e)}function Bd(e,t,n){if(_e.current!==An)throw Error(O(168));le(_e,t),le(Ze,n)}function Up(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,Fy(e)||"Unknown",i));return pe({},n,r)}function uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,Kn=_e.current,le(_e,e),le(Ze,Ze.current),!0}function Hd(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=Up(e,t,Kn),r.__reactInternalMemoizedMergedChildContext=e,ue(Ze),ue(_e),le(_e,e)):ue(Ze),le(Ze,n)}var Yt=null,Ko=!1,Rs=!1;function Yp(e){Yt===null?Yt=[e]:Yt.push(e)}function tv(e){Ko=!0,Yp(e)}function Tn(){if(!Rs&&Yt!==null){Rs=!0;var e=0,t=oe;try{var n=Yt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Yt=null,Ko=!1}catch(i){throw Yt!==null&&(Yt=Yt.slice(e+1)),gp(Ic,Tn),i}finally{oe=t,Rs=!1}}return null}var yr=[],vr=0,mo=null,fo=0,mt=[],ft=0,Vn=null,Kt=1,Vt="";function Rn(e,t){yr[vr++]=fo,yr[vr++]=mo,mo=e,fo=t}function Kp(e,t,n){mt[ft++]=Kt,mt[ft++]=Vt,mt[ft++]=Vn,Vn=e;var r=Kt;e=Vt;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var a=32-jt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kt=1<<32-jt(t)+i|n<<i|r,Vt=a+e}else Kt=1<<a|n<<i|r,Vt=e}function Uc(e){e.return!==null&&(Rn(e,1),Kp(e,1,0))}function Yc(e){for(;e===mo;)mo=yr[--vr],yr[vr]=null,fo=yr[--vr],yr[vr]=null;for(;e===Vn;)Vn=mt[--ft],mt[ft]=null,Vt=mt[--ft],mt[ft]=null,Kt=mt[--ft],mt[ft]=null}var at=null,it=null,de=!1,Nt=null;function Vp(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,it=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:Kt,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,it=null,!0):!1;default:return!1}}function Ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(de){var t=it;if(t){var n=t;if(!qd(e,t)){if(Ll(e))throw Error(O(418));t=bn(n.nextSibling);var r=at;t&&qd(e,t)?Vp(r,n):(e.flags=e.flags&-4097|2,de=!1,at=e)}}else{if(Ll(e))throw Error(O(418));e.flags=e.flags&-4097|2,de=!1,at=e}}}function Ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function xa(e){if(e!==at)return!1;if(!de)return Ud(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=it)){if(Ll(e))throw Gp(),Error(O(418));for(;t;)Vp(e,t),t=bn(t.nextSibling)}if(Ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=at?bn(e.stateNode.nextSibling):null;return!0}function Gp(){for(var e=it;e;)e=bn(e.nextSibling)}function Rr(){it=at=null,de=!1}function Kc(e){Nt===null?Nt=[e]:Nt.push(e)}var nv=nn.ReactCurrentBatchConfig;function ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function wa(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yd(e){var t=e._init;return t(e._payload)}function Qp(e){function t(y,p){if(e){var h=y.deletions;h===null?(y.deletions=[p],y.flags|=16):h.push(p)}}function n(y,p){if(!e)return null;for(;p!==null;)t(y,p),p=p.sibling;return null}function r(y,p){for(y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function i(y,p){return y=Sn(y,p),y.index=0,y.sibling=null,y}function a(y,p,h){return y.index=h,e?(h=y.alternate,h!==null?(h=h.index,h<p?(y.flags|=2,p):h):(y.flags|=2,p)):(y.flags|=1048576,p)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,p,h,k){return p===null||p.tag!==6?(p=qs(h,y.mode,k),p.return=y,p):(p=i(p,h),p.return=y,p)}function c(y,p,h,k){var N=h.type;return N===dr?d(y,p,h.props.children,k,h.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===sn&&Yd(N)===p.type)?(k=i(p,h.props),k.ref=ii(y,p,h),k.return=y,k):(k=Ga(h.type,h.key,h.props,null,y.mode,k),k.ref=ii(y,p,h),k.return=y,k)}function u(y,p,h,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Us(h,y.mode,k),p.return=y,p):(p=i(p,h.children||[]),p.return=y,p)}function d(y,p,h,k,N){return p===null||p.tag!==7?(p=Un(h,y.mode,k,N),p.return=y,p):(p=i(p,h),p.return=y,p)}function m(y,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=qs(""+p,y.mode,h),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ua:return h=Ga(p.type,p.key,p.props,null,y.mode,h),h.ref=ii(y,null,p),h.return=y,h;case ur:return p=Us(p,y.mode,h),p.return=y,p;case sn:var k=p._init;return m(y,k(p._payload),h)}if(mi(p)||$r(p))return p=Un(p,y.mode,h,null),p.return=y,p;wa(y,p)}return null}function f(y,p,h,k){var N=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return N!==null?null:l(y,p,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ua:return h.key===N?c(y,p,h,k):null;case ur:return h.key===N?u(y,p,h,k):null;case sn:return N=h._init,f(y,p,N(h._payload),k)}if(mi(h)||$r(h))return N!==null?null:d(y,p,h,k,null);wa(y,h)}return null}function g(y,p,h,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(h)||null,l(p,y,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ua:return y=y.get(k.key===null?h:k.key)||null,c(p,y,k,N);case ur:return y=y.get(k.key===null?h:k.key)||null,u(p,y,k,N);case sn:var E=k._init;return g(y,p,h,E(k._payload),N)}if(mi(k)||$r(k))return y=y.get(h)||null,d(p,y,k,N,null);wa(p,k)}return null}function v(y,p,h,k){for(var N=null,E=null,C=p,j=p=0,z=null;C!==null&&j<h.length;j++){C.index>j?(z=C,C=null):z=C.sibling;var T=f(y,C,h[j],k);if(T===null){C===null&&(C=z);break}e&&C&&T.alternate===null&&t(y,C),p=a(T,p,j),E===null?N=T:E.sibling=T,E=T,C=z}if(j===h.length)return n(y,C),de&&Rn(y,j),N;if(C===null){for(;j<h.length;j++)C=m(y,h[j],k),C!==null&&(p=a(C,p,j),E===null?N=C:E.sibling=C,E=C);return de&&Rn(y,j),N}for(C=r(y,C);j<h.length;j++)z=g(C,y,j,h[j],k),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?j:z.key),p=a(z,p,j),E===null?N=z:E.sibling=z,E=z);return e&&C.forEach(function(D){return t(y,D)}),de&&Rn(y,j),N}function x(y,p,h,k){var N=$r(h);if(typeof N!="function")throw Error(O(150));if(h=N.call(h),h==null)throw Error(O(151));for(var E=N=null,C=p,j=p=0,z=null,T=h.next();C!==null&&!T.done;j++,T=h.next()){C.index>j?(z=C,C=null):z=C.sibling;var D=f(y,C,T.value,k);if(D===null){C===null&&(C=z);break}e&&C&&D.alternate===null&&t(y,C),p=a(D,p,j),E===null?N=D:E.sibling=D,E=D,C=z}if(T.done)return n(y,C),de&&Rn(y,j),N;if(C===null){for(;!T.done;j++,T=h.next())T=m(y,T.value,k),T!==null&&(p=a(T,p,j),E===null?N=T:E.sibling=T,E=T);return de&&Rn(y,j),N}for(C=r(y,C);!T.done;j++,T=h.next())T=g(C,y,j,T.value,k),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?j:T.key),p=a(T,p,j),E===null?N=T:E.sibling=T,E=T);return e&&C.forEach(function(U){return t(y,U)}),de&&Rn(y,j),N}function w(y,p,h,k){if(typeof h=="object"&&h!==null&&h.type===dr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ua:e:{for(var N=h.key,E=p;E!==null;){if(E.key===N){if(N=h.type,N===dr){if(E.tag===7){n(y,E.sibling),p=i(E,h.props.children),p.return=y,y=p;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===sn&&Yd(N)===E.type){n(y,E.sibling),p=i(E,h.props),p.ref=ii(y,E,h),p.return=y,y=p;break e}n(y,E);break}else t(y,E);E=E.sibling}h.type===dr?(p=Un(h.props.children,y.mode,k,h.key),p.return=y,y=p):(k=Ga(h.type,h.key,h.props,null,y.mode,k),k.ref=ii(y,p,h),k.return=y,y=k)}return o(y);case ur:e:{for(E=h.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(y,p.sibling),p=i(p,h.children||[]),p.return=y,y=p;break e}else{n(y,p);break}else t(y,p);p=p.sibling}p=Us(h,y.mode,k),p.return=y,y=p}return o(y);case sn:return E=h._init,w(y,p,E(h._payload),k)}if(mi(h))return v(y,p,h,k);if($r(h))return x(y,p,h,k);wa(y,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(y,p.sibling),p=i(p,h),p.return=y,y=p):(n(y,p),p=qs(h,y.mode,k),p.return=y,y=p),o(y)):n(y,p)}return w}var Dr=Qp(!0),Jp=Qp(!1),po=Cn(null),ho=null,br=null,Vc=null;function Gc(){Vc=br=ho=null}function Qc(e){var t=po.current;ue(po),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Er(e,t){ho=e,Vc=br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(Vc!==e)if(e={context:e,memoizedValue:t,next:null},br===null){if(ho===null)throw Error(O(308));br=e,ho.dependencies={lanes:0,firstContext:e}}else br=br.next=e;return t}var Bn=null;function Jc(e){Bn===null?Bn=[e]:Bn.push(e)}function Xp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Jc(t)):(n.next=i.next,i.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function Xc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$t(e,n)}return i=r.interleaved,i===null?(t.next=t,Jc(r)):(t.next=i.next,i.next=t),r.interleaved=t,$t(e,n)}function Ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rc(e,n)}}function Kd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function go(e,t,n,r){var i=e.updateQueue;ln=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?a=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(a!==null){var m=i.baseState;o=0,d=u=c=null,l=a;do{var f=l.lane,g=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(f=t,g=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){m=v.call(g,m,f);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(g,m,f):v,f==null)break e;m=pe({},m,f);break e;case 2:ln=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,c=m):d=d.next=g,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Qn|=o,e.lanes=o,e.memoizedState=m}}function Vd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var ta={},_t=Cn(ta),Wi=Cn(ta),Bi=Cn(ta);function Hn(e){if(e===ta)throw Error(O(174));return e}function Zc(e,t){switch(le(Bi,t),le(Wi,e),le(_t,ta),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}ue(_t),le(_t,t)}function Fr(){ue(_t),ue(Wi),ue(Bi)}function $p(e){Hn(Bi.current);var t=Hn(_t.current),n=hl(t,e.type);t!==n&&(le(Wi,e),le(_t,n))}function $c(e){Wi.current===e&&(ue(_t),ue(Wi))}var me=Cn(0);function yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ds=[];function eu(){for(var e=0;e<Ds.length;e++)Ds[e]._workInProgressVersionPrimary=null;Ds.length=0}var qa=nn.ReactCurrentDispatcher,Fs=nn.ReactCurrentBatchConfig,Gn=0,fe=null,Se=null,Ae=null,vo=!1,Ni=!1,Hi=0,rv=0;function Ie(){throw Error(O(321))}function tu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function nu(e,t,n,r,i,a){if(Gn=a,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qa.current=e===null||e.memoizedState===null?sv:lv,e=n(r,i),Ni){a=0;do{if(Ni=!1,Hi=0,25<=a)throw Error(O(301));a+=1,Ae=Se=null,t.updateQueue=null,qa.current=cv,e=n(r,i)}while(Ni)}if(qa.current=bo,t=Se!==null&&Se.next!==null,Gn=0,Ae=Se=fe=null,vo=!1,t)throw Error(O(300));return e}function ru(){var e=Hi!==0;return Hi=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?fe.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function bt(){if(Se===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ae===null?fe.memoizedState:Ae.next;if(t!==null)Ae=t,Se=e;else{if(e===null)throw Error(O(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ae===null?fe.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function qi(e,t){return typeof t=="function"?t(e):t}function _s(e){var t=bt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=Se,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,c=null,u=a;do{var d=u.lane;if((Gn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,fe.lanes|=d,Qn|=d}u=u.next}while(u!==null&&u!==a);c===null?o=r:c.next=l,Ct(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,fe.lanes|=a,Qn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ws(e){var t=bt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ct(a,t.memoizedState)||(Xe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function eh(){}function th(e,t){var n=fe,r=bt(),i=t(),a=!Ct(r.memoizedState,i);if(a&&(r.memoizedState=i,Xe=!0),r=r.queue,iu(ih.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Ui(9,rh.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(O(349));Gn&30||nh(n,t,i)}return i}function nh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rh(e,t,n,r){t.value=n,t.getSnapshot=r,ah(t)&&oh(e)}function ih(e,t,n){return n(function(){ah(t)&&oh(e)})}function ah(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function oh(e){var t=$t(e,1);t!==null&&Et(t,e,1,-1)}function Gd(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},t.queue=e,e=e.dispatch=ov.bind(null,fe,e),[t.memoizedState,e]}function Ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sh(){return bt().memoizedState}function Ua(e,t,n,r){var i=Lt();fe.flags|=e,i.memoizedState=Ui(1|t,n,void 0,r===void 0?null:r)}function Vo(e,t,n,r){var i=bt();r=r===void 0?null:r;var a=void 0;if(Se!==null){var o=Se.memoizedState;if(a=o.destroy,r!==null&&tu(r,o.deps)){i.memoizedState=Ui(t,n,a,r);return}}fe.flags|=e,i.memoizedState=Ui(1|t,n,a,r)}function Qd(e,t){return Ua(8390656,8,e,t)}function iu(e,t){return Vo(2048,8,e,t)}function lh(e,t){return Vo(4,2,e,t)}function ch(e,t){return Vo(4,4,e,t)}function uh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dh(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4,4,uh.bind(null,t,e),n)}function au(){}function mh(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fh(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ph(e,t,n){return Gn&21?(Ct(n,t)||(n=bp(),fe.lanes|=n,Qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function iv(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Fs.transition;Fs.transition={};try{e(!1),t()}finally{oe=n,Fs.transition=r}}function hh(){return bt().memoizedState}function av(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gh(e))yh(t,n);else if(n=Xp(e,t,n,r),n!==null){var i=Ye();Et(n,e,r,i),vh(n,t,r)}}function ov(e,t,n){var r=kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gh(e))yh(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ct(l,o)){var c=t.interleaved;c===null?(i.next=i,Jc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Xp(e,t,i,r),n!==null&&(i=Ye(),Et(n,e,r,i),vh(n,t,r))}}function gh(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function yh(e,t){Ni=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rc(e,n)}}var bo={readContext:vt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},sv={readContext:vt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Qd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ua(4194308,4,uh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ua(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ua(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=av.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Gd,useDebugValue:au,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Gd(!1),t=e[0];return e=iv.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=Lt();if(de){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Ce===null)throw Error(O(349));Gn&30||nh(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Qd(ih.bind(null,r,a,e),[e]),r.flags|=2048,Ui(9,rh.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Ce.identifierPrefix;if(de){var n=Vt,r=Kt;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lv={readContext:vt,useCallback:mh,useContext:vt,useEffect:iu,useImperativeHandle:dh,useInsertionEffect:lh,useLayoutEffect:ch,useMemo:fh,useReducer:_s,useRef:sh,useState:function(){return _s(qi)},useDebugValue:au,useDeferredValue:function(e){var t=bt();return ph(t,Se.memoizedState,e)},useTransition:function(){var e=_s(qi)[0],t=bt().memoizedState;return[e,t]},useMutableSource:eh,useSyncExternalStore:th,useId:hh,unstable_isNewReconciler:!1},cv={readContext:vt,useCallback:mh,useContext:vt,useEffect:iu,useImperativeHandle:dh,useInsertionEffect:lh,useLayoutEffect:ch,useMemo:fh,useReducer:Ws,useRef:sh,useState:function(){return Ws(qi)},useDebugValue:au,useDeferredValue:function(e){var t=bt();return Se===null?t.memoizedState=e:ph(t,Se.memoizedState,e)},useTransition:function(){var e=Ws(qi)[0],t=bt().memoizedState;return[e,t]},useMutableSource:eh,useSyncExternalStore:th,useId:hh,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Go={isMounted:function(e){return(e=e._reactInternals)?tr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ye(),i=kn(e),a=Qt(r,i);a.payload=t,n!=null&&(a.callback=n),t=xn(e,a,i),t!==null&&(Et(t,e,i,r),Ha(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ye(),i=kn(e),a=Qt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=xn(e,a,i),t!==null&&(Et(t,e,i,r),Ha(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),r=kn(e),i=Qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(Et(t,e,r,n),Ha(t,e,r))}};function Jd(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ri(n,r)||!Ri(i,a):!0}function bh(e,t,n){var r=!1,i=An,a=t.contextType;return typeof a=="object"&&a!==null?a=vt(a):(i=$e(t)?Kn:_e.current,r=t.contextTypes,a=(r=r!=null)?Ir(e,i):An),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Xd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Go.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Xc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=vt(a):(a=$e(t)?Kn:_e.current,i.context=Ir(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Rl(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Go.enqueueReplaceState(i,i.state,null),go(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _r(e,t){try{var n="",r=t;do n+=Dy(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Bs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uv=typeof WeakMap=="function"?WeakMap:Map;function xh(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wo||(wo=!0,Gl=r),Fl(e,t)},n}function wh(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Fl(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Zd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Nv.bind(null,e,t,n),t.then(e,e))}function $d(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function em(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var dv=nn.ReactCurrentOwner,Xe=!1;function He(e,t,n,r){t.child=e===null?Jp(t,null,n,r):Dr(t,e.child,n,r)}function tm(e,t,n,r,i){n=n.render;var a=t.ref;return Er(t,i),r=nu(e,t,n,r,a,i),n=ru(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(de&&n&&Uc(t),t.flags|=1,He(e,t,r,i),t.child)}function nm(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!fu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,kh(e,t,a,r,i)):(e=Ga(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ri,n(o,r)&&e.ref===t.ref)return en(e,t,i)}return t.flags|=1,e=Sn(a,r),e.ref=t.ref,e.return=t,t.child=e}function kh(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ri(a,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,en(e,t,i)}return _l(e,t,n,r,i)}function Sh(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(wr,rt),rt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(wr,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,le(wr,rt),rt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,le(wr,rt),rt|=r;return He(e,t,i,n),t.child}function Nh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,n,r,i){var a=$e(n)?Kn:_e.current;return a=Ir(t,a),Er(t,i),n=nu(e,t,n,r,a,i),r=ru(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(de&&r&&Uc(t),t.flags|=1,He(e,t,n,i),t.child)}function rm(e,t,n,r,i){if($e(n)){var a=!0;uo(t)}else a=!1;if(Er(t,i),t.stateNode===null)Ya(e,t),bh(t,n,r),Dl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=$e(n)?Kn:_e.current,u=Ir(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Xd(t,o,r,u),ln=!1;var f=t.memoizedState;o.state=f,go(t,r,o,i),c=t.memoizedState,l!==r||f!==c||Ze.current||ln?(typeof d=="function"&&(Rl(t,n,d,r),c=t.memoizedState),(l=ln||Jd(t,n,l,r,f,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Zp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:kt(t.type,l),o.props=u,m=t.pendingProps,f=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=vt(c):(c=$e(n)?Kn:_e.current,c=Ir(t,c));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||f!==c)&&Xd(t,o,r,c),ln=!1,f=t.memoizedState,o.state=f,go(t,r,o,i);var v=t.memoizedState;l!==m||f!==v||Ze.current||ln?(typeof g=="function"&&(Rl(t,n,g,r),v=t.memoizedState),(u=ln||Jd(t,n,u,r,f,v,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Wl(e,t,n,r,a,i)}function Wl(e,t,n,r,i,a){Nh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Hd(t,n,!1),en(e,t,a);r=t.stateNode,dv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Dr(t,e.child,null,a),t.child=Dr(t,null,l,a)):He(e,t,l,a),t.memoizedState=r.state,i&&Hd(t,n,!0),t.child}function Ah(e){var t=e.stateNode;t.pendingContext?Bd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bd(e,t.context,!1),Zc(e,t.containerInfo)}function im(e,t,n,r,i){return Rr(),Kc(i),t.flags|=256,He(e,t,n,r),t.child}var Bl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function jh(e,t,n){var r=t.pendingProps,i=me.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(me,i&1),e===null)return Ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Xo(o,r,0,null),e=Un(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Hl(n),t.memoizedState=Bl,e):ou(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mv(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Sn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Sn(l,a):(a=Un(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Hl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Bl,r}return a=e.child,e=a.sibling,r=Sn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ou(e,t){return t=Xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ka(e,t,n,r){return r!==null&&Kc(r),Dr(t,e.child,null,n),e=ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mv(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Bs(Error(O(422))),ka(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Xo({mode:"visible",children:r.children},i,0,null),a=Un(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Dr(t,e.child,null,o),t.child.memoizedState=Hl(o),t.memoizedState=Bl,a);if(!(t.mode&1))return ka(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(O(419)),r=Bs(a,r,void 0),ka(e,t,o,r)}if(l=(o&e.childLanes)!==0,Xe||l){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,$t(e,i),Et(r,e,i,-1))}return mu(),r=Bs(Error(O(421))),ka(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Av.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,it=bn(i.nextSibling),at=t,de=!0,Nt=null,e!==null&&(mt[ft++]=Kt,mt[ft++]=Vt,mt[ft++]=Vn,Kt=e.id,Vt=e.overflow,Vn=t),t=ou(t,r.children),t.flags|=4096,t)}function am(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function Hs(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Eh(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(He(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&am(e,n,t);else if(e.tag===19)am(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hs(t,!0,n,null,a);break;case"together":Hs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ya(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fv(e,t,n){switch(t.tag){case 3:Ah(t),Rr();break;case 5:$p(t);break;case 1:$e(t.type)&&uo(t);break;case 4:Zc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(po,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?jh(e,t,n):(le(me,me.current&1),e=en(e,t,n),e!==null?e.sibling:null);le(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Eh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,Sh(e,t,n)}return en(e,t,n)}var Ch,ql,Th,Ph;Ch=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ql=function(){};Th=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Hn(_t.current);var a=null;switch(n){case"input":i=dl(e,i),r=dl(e,r),a=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),a=[];break;case"textarea":i=pl(e,i),r=pl(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lo)}gl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ti.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ti.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ce("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Ph=function(e,t,n,r){n!==r&&(t.flags|=4)};function ai(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pv(e,t,n){var r=t.pendingProps;switch(Yc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return $e(t.type)&&co(),Re(t),null;case 3:return r=t.stateNode,Fr(),ue(Ze),ue(_e),eu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(Xl(Nt),Nt=null))),ql(e,t),Re(t),null;case 5:$c(t);var i=Hn(Bi.current);if(n=t.type,e!==null&&t.stateNode!=null)Th(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Re(t),null}if(e=Hn(_t.current),xa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ot]=t,r[_i]=a,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<pi.length;i++)ce(pi[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":pd(r,a),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ce("invalid",r);break;case"textarea":gd(r,a),ce("invalid",r)}gl(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ba(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ba(r.textContent,l,e),i=["children",""+l]):Ti.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":da(r),hd(r,a,!0);break;case"textarea":da(r),yd(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=lo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ip(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ot]=t,e[_i]=r,Ch(e,t,!1,!1),t.stateNode=e;e:{switch(o=yl(n,r),n){case"dialog":ce("cancel",e),ce("close",e),i=r;break;case"iframe":case"object":case"embed":ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<pi.length;i++)ce(pi[i],e);i=r;break;case"source":ce("error",e),i=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),i=r;break;case"details":ce("toggle",e),i=r;break;case"input":pd(e,r),i=dl(e,r),ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ce("invalid",e);break;case"textarea":gd(e,r),i=pl(e,r),ce("invalid",e);break;default:i=r}gl(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?sp(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ap(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Pi(e,c):typeof c=="number"&&Pi(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ti.hasOwnProperty(a)?c!=null&&a==="onScroll"&&ce("scroll",e):c!=null&&Pc(e,a,c,o))}switch(n){case"input":da(e),hd(e,r,!1);break;case"textarea":da(e),yd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Sr(e,!!r.multiple,a,!1):r.defaultValue!=null&&Sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Ph(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=Hn(Bi.current),Hn(_t.current),xa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(a=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:ba(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Re(t),null;case 13:if(ue(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&it!==null&&t.mode&1&&!(t.flags&128))Gp(),Rr(),t.flags|=98560,a=!1;else if(a=xa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(O(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(O(317));a[Ot]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),a=!1}else Nt!==null&&(Xl(Nt),Nt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Ne===0&&(Ne=3):mu())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return Fr(),ql(e,t),e===null&&Di(t.stateNode.containerInfo),Re(t),null;case 10:return Qc(t.type._context),Re(t),null;case 17:return $e(t.type)&&co(),Re(t),null;case 19:if(ue(me),a=t.memoizedState,a===null)return Re(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ai(a,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=yo(e),o!==null){for(t.flags|=128,ai(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(me,me.current&1|2),t.child}e=e.sibling}a.tail!==null&&xe()>Wr&&(t.flags|=128,r=!0,ai(a,!1),t.lanes=4194304)}else{if(!r)if(e=yo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ai(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!de)return Re(t),null}else 2*xe()-a.renderingStartTime>Wr&&n!==1073741824&&(t.flags|=128,r=!0,ai(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=xe(),t.sibling=null,n=me.current,le(me,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return du(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function hv(e,t){switch(Yc(t),t.tag){case 1:return $e(t.type)&&co(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fr(),ue(Ze),ue(_e),eu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $c(t),null;case 13:if(ue(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(me),null;case 4:return Fr(),null;case 10:return Qc(t.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var Sa=!1,De=!1,gv=typeof WeakSet=="function"?WeakSet:Set,_=null;function xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Ul(e,t,n){try{n()}catch(r){ye(e,t,r)}}var om=!1;function yv(e,t){if(El=ao,e=Ip(),qc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,d=0,m=e,f=null;t:for(;;){for(var g;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==a||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(g=m.firstChild)!==null;)f=m,m=g;for(;;){if(m===e)break t;if(f===n&&++u===i&&(l=o),f===a&&++d===r&&(c=o),(g=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=g}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},ao=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,w=v.memoizedState,y=t.stateNode,p=y.getSnapshotBeforeUpdate(t.elementType===t.type?x:kt(t.type,x),w);y.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(k){ye(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return v=om,om=!1,v}function Ai(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ul(t,n,a)}i=i.next}while(i!==r)}}function Qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mh(e){var t=e.alternate;t!==null&&(e.alternate=null,Mh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[_i],delete t[Ml],delete t[$1],delete t[ev])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zh(e){return e.tag===5||e.tag===3||e.tag===4}function sm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lo));else if(r!==4&&(e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}var Pe=null,St=!1;function rn(e,t,n){for(n=n.child;n!==null;)Lh(e,t,n),n=n.sibling}function Lh(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Bo,n)}catch{}switch(n.tag){case 5:De||xr(n,t);case 6:var r=Pe,i=St;Pe=null,rn(e,t,n),Pe=r,St=i,Pe!==null&&(St?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(St?(e=Pe,n=n.stateNode,e.nodeType===8?Is(e.parentNode,n):e.nodeType===1&&Is(e,n),Oi(e)):Is(Pe,n.stateNode));break;case 4:r=Pe,i=St,Pe=n.stateNode.containerInfo,St=!0,rn(e,t,n),Pe=r,St=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ul(n,t,o),i=i.next}while(i!==r)}rn(e,t,n);break;case 1:if(!De&&(xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,t,l)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,rn(e,t,n),De=r):rn(e,t,n);break;default:rn(e,t,n)}}function lm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gv),t.forEach(function(r){var i=jv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Pe=l.stateNode,St=!1;break e;case 3:Pe=l.stateNode.containerInfo,St=!0;break e;case 4:Pe=l.stateNode.containerInfo,St=!0;break e}l=l.return}if(Pe===null)throw Error(O(160));Lh(a,o,i),Pe=null,St=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ye(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Oh(t,e),t=t.sibling}function Oh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),zt(e),r&4){try{Ai(3,e,e.return),Qo(3,e)}catch(x){ye(e,e.return,x)}try{Ai(5,e,e.return)}catch(x){ye(e,e.return,x)}}break;case 1:wt(t,e),zt(e),r&512&&n!==null&&xr(n,n.return);break;case 5:if(wt(t,e),zt(e),r&512&&n!==null&&xr(n,n.return),e.flags&32){var i=e.stateNode;try{Pi(i,"")}catch(x){ye(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&np(i,a),yl(l,o);var u=yl(l,a);for(o=0;o<c.length;o+=2){var d=c[o],m=c[o+1];d==="style"?sp(i,m):d==="dangerouslySetInnerHTML"?ap(i,m):d==="children"?Pi(i,m):Pc(i,d,m,u)}switch(l){case"input":ml(i,a);break;case"textarea":rp(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Sr(i,!!a.multiple,g,!1):f!==!!a.multiple&&(a.defaultValue!=null?Sr(i,!!a.multiple,a.defaultValue,!0):Sr(i,!!a.multiple,a.multiple?[]:"",!1))}i[_i]=a}catch(x){ye(e,e.return,x)}}break;case 6:if(wt(t,e),zt(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(x){ye(e,e.return,x)}}break;case 3:if(wt(t,e),zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oi(t.containerInfo)}catch(x){ye(e,e.return,x)}break;case 4:wt(t,e),zt(e);break;case 13:wt(t,e),zt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(cu=xe())),r&4&&lm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||d,wt(t,e),De=u):wt(t,e),zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(m=_=d;_!==null;){switch(f=_,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ai(4,f,f.return);break;case 1:xr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ye(r,n,x)}}break;case 5:xr(f,f.return);break;case 22:if(f.memoizedState!==null){um(m);continue}}g!==null?(g.return=f,_=g):um(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=op("display",o))}catch(x){ye(e,e.return,x)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(x){ye(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:wt(t,e),zt(e),r&4&&lm(e);break;case 21:break;default:wt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zh(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pi(i,""),r.flags&=-33);var a=sm(e);Vl(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=sm(e);Kl(e,l,o);break;default:throw Error(O(161))}}catch(c){ye(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vv(e,t,n){_=e,Ih(e)}function Ih(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Sa;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||De;l=Sa;var u=De;if(Sa=o,(De=c)&&!u)for(_=i;_!==null;)o=_,c=o.child,o.tag===22&&o.memoizedState!==null?dm(i):c!==null?(c.return=o,_=c):dm(i);for(;a!==null;)_=a,Ih(a),a=a.sibling;_=i,Sa=l,De=u}cm(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,_=a):cm(e)}}function cm(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Vd(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vd(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Oi(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}De||t.flags&512&&Yl(t)}catch(f){ye(t,t.return,f)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function um(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function dm(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qo(4,t)}catch(c){ye(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ye(t,i,c)}}var a=t.return;try{Yl(t)}catch(c){ye(t,a,c)}break;case 5:var o=t.return;try{Yl(t)}catch(c){ye(t,o,c)}}}catch(c){ye(t,t.return,c)}if(t===e){_=null;break}var l=t.sibling;if(l!==null){l.return=t.return,_=l;break}_=t.return}}var bv=Math.ceil,xo=nn.ReactCurrentDispatcher,su=nn.ReactCurrentOwner,gt=nn.ReactCurrentBatchConfig,ee=0,Ce=null,we=null,Le=0,rt=0,wr=Cn(0),Ne=0,Yi=null,Qn=0,Jo=0,lu=0,ji=null,Qe=null,cu=0,Wr=1/0,Ut=null,wo=!1,Gl=null,wn=null,Na=!1,pn=null,ko=0,Ei=0,Ql=null,Ka=-1,Va=0;function Ye(){return ee&6?xe():Ka!==-1?Ka:Ka=xe()}function kn(e){return e.mode&1?ee&2&&Le!==0?Le&-Le:nv.transition!==null?(Va===0&&(Va=bp()),Va):(e=oe,e!==0||(e=window.event,e=e===void 0?16:jp(e.type)),e):1}function Et(e,t,n,r){if(50<Ei)throw Ei=0,Ql=null,Error(O(185));Zi(e,n,r),(!(ee&2)||e!==Ce)&&(e===Ce&&(!(ee&2)&&(Jo|=n),Ne===4&&dn(e,Le)),et(e,r),n===1&&ee===0&&!(t.mode&1)&&(Wr=xe()+500,Ko&&Tn()))}function et(e,t){var n=e.callbackNode;n1(e,t);var r=io(e,e===Ce?Le:0);if(r===0)n!==null&&xd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xd(n),t===1)e.tag===0?tv(mm.bind(null,e)):Yp(mm.bind(null,e)),X1(function(){!(ee&6)&&Tn()}),n=null;else{switch(xp(r)){case 1:n=Ic;break;case 4:n=yp;break;case 16:n=ro;break;case 536870912:n=vp;break;default:n=ro}n=qh(n,Rh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rh(e,t){if(Ka=-1,Va=0,ee&6)throw Error(O(327));var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var r=io(e,e===Ce?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=So(e,r);else{t=r;var i=ee;ee|=2;var a=Fh();(Ce!==e||Le!==t)&&(Ut=null,Wr=xe()+500,qn(e,t));do try{kv();break}catch(l){Dh(e,l)}while(!0);Gc(),xo.current=a,ee=i,we!==null?t=0:(Ce=null,Le=0,t=Ne)}if(t!==0){if(t===2&&(i=kl(e),i!==0&&(r=i,t=Jl(e,i))),t===1)throw n=Yi,qn(e,0),dn(e,r),et(e,xe()),n;if(t===6)dn(e,r);else{if(i=e.current.alternate,!(r&30)&&!xv(i)&&(t=So(e,r),t===2&&(a=kl(e),a!==0&&(r=a,t=Jl(e,a))),t===1))throw n=Yi,qn(e,0),dn(e,r),et(e,xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Dn(e,Qe,Ut);break;case 3:if(dn(e,r),(r&130023424)===r&&(t=cu+500-xe(),10<t)){if(io(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pl(Dn.bind(null,e,Qe,Ut),t);break}Dn(e,Qe,Ut);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-jt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bv(r/1960))-r,10<r){e.timeoutHandle=Pl(Dn.bind(null,e,Qe,Ut),r);break}Dn(e,Qe,Ut);break;case 5:Dn(e,Qe,Ut);break;default:throw Error(O(329))}}}return et(e,xe()),e.callbackNode===n?Rh.bind(null,e):null}function Jl(e,t){var n=ji;return e.current.memoizedState.isDehydrated&&(qn(e,t).flags|=256),e=So(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Xl(t)),e}function Xl(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function xv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ct(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t){for(t&=~lu,t&=~Jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function mm(e){if(ee&6)throw Error(O(327));Cr();var t=io(e,0);if(!(t&1))return et(e,xe()),null;var n=So(e,t);if(e.tag!==0&&n===2){var r=kl(e);r!==0&&(t=r,n=Jl(e,r))}if(n===1)throw n=Yi,qn(e,0),dn(e,t),et(e,xe()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,Qe,Ut),et(e,xe()),null}function uu(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(Wr=xe()+500,Ko&&Tn())}}function Jn(e){pn!==null&&pn.tag===0&&!(ee&6)&&Cr();var t=ee;ee|=1;var n=gt.transition,r=oe;try{if(gt.transition=null,oe=1,e)return e()}finally{oe=r,gt.transition=n,ee=t,!(ee&6)&&Tn()}}function du(){rt=wr.current,ue(wr)}function qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,J1(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Yc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&co();break;case 3:Fr(),ue(Ze),ue(_e),eu();break;case 5:$c(r);break;case 4:Fr();break;case 13:ue(me);break;case 19:ue(me);break;case 10:Qc(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ce=e,we=e=Sn(e.current,null),Le=rt=t,Ne=0,Yi=null,lu=Jo=Qn=0,Qe=ji=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Bn=null}return e}function Dh(e,t){do{var n=we;try{if(Gc(),qa.current=bo,vo){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vo=!1}if(Gn=0,Ae=Se=fe=null,Ni=!1,Hi=0,su.current=null,n===null||n.return===null){Ne=1,Yi=t,we=null;break}e:{var a=e,o=n.return,l=n,c=t;if(t=Le,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=$d(o);if(g!==null){g.flags&=-257,em(g,o,l,a,t),g.mode&1&&Zd(a,u,t),t=g,c=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(c),t.updateQueue=x}else v.add(c);break e}else{if(!(t&1)){Zd(a,u,t),mu();break e}c=Error(O(426))}}else if(de&&l.mode&1){var w=$d(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),em(w,o,l,a,t),Kc(_r(c,l));break e}}a=c=_r(c,l),Ne!==4&&(Ne=2),ji===null?ji=[a]:ji.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=xh(a,c,t);Kd(a,y);break e;case 1:l=c;var p=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(wn===null||!wn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=wh(a,l,t);Kd(a,k);break e}}a=a.return}while(a!==null)}Wh(n)}catch(N){t=N,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function Fh(){var e=xo.current;return xo.current=bo,e===null?bo:e}function mu(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ce===null||!(Qn&268435455)&&!(Jo&268435455)||dn(Ce,Le)}function So(e,t){var n=ee;ee|=2;var r=Fh();(Ce!==e||Le!==t)&&(Ut=null,qn(e,t));do try{wv();break}catch(i){Dh(e,i)}while(!0);if(Gc(),ee=n,xo.current=r,we!==null)throw Error(O(261));return Ce=null,Le=0,Ne}function wv(){for(;we!==null;)_h(we)}function kv(){for(;we!==null&&!Vy();)_h(we)}function _h(e){var t=Hh(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?Wh(e):we=t,su.current=null}function Wh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hv(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,we=null;return}}else if(n=pv(n,t,rt),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Ne===0&&(Ne=5)}function Dn(e,t,n){var r=oe,i=gt.transition;try{gt.transition=null,oe=1,Sv(e,t,n,r)}finally{gt.transition=i,oe=r}return null}function Sv(e,t,n,r){do Cr();while(pn!==null);if(ee&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(r1(e,a),e===Ce&&(we=Ce=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,qh(ro,function(){return Cr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=gt.transition,gt.transition=null;var o=oe;oe=1;var l=ee;ee|=4,su.current=null,yv(e,n),Oh(n,e),q1(Cl),ao=!!El,Cl=El=null,e.current=n,vv(n),Gy(),ee=l,oe=o,gt.transition=a}else e.current=n;if(Na&&(Na=!1,pn=e,ko=i),a=e.pendingLanes,a===0&&(wn=null),Xy(n.stateNode),et(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wo)throw wo=!1,e=Gl,Gl=null,e;return ko&1&&e.tag!==0&&Cr(),a=e.pendingLanes,a&1?e===Ql?Ei++:(Ei=0,Ql=e):Ei=0,Tn(),null}function Cr(){if(pn!==null){var e=xp(ko),t=gt.transition,n=oe;try{if(gt.transition=null,oe=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,ko=0,ee&6)throw Error(O(331));var i=ee;for(ee|=4,_=e.current;_!==null;){var a=_,o=a.child;if(_.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(_=u;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:Ai(8,d,a)}var m=d.child;if(m!==null)m.return=d,_=m;else for(;_!==null;){d=_;var f=d.sibling,g=d.return;if(Mh(d),d===u){_=null;break}if(f!==null){f.return=g,_=f;break}_=g}}}var v=a.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}_=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,_=o;else e:for(;_!==null;){if(a=_,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ai(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,_=y;break e}_=a.return}}var p=e.current;for(_=p;_!==null;){o=_;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,_=h;else e:for(o=p;_!==null;){if(l=_,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Qo(9,l)}}catch(N){ye(l,l.return,N)}if(l===o){_=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,_=k;break e}_=l.return}}if(ee=i,Tn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Bo,e)}catch{}r=!0}return r}finally{oe=n,gt.transition=t}}return!1}function fm(e,t,n){t=_r(n,t),t=xh(e,t,1),e=xn(e,t,1),t=Ye(),e!==null&&(Zi(e,1,t),et(e,t))}function ye(e,t,n){if(e.tag===3)fm(e,e,n);else for(;t!==null;){if(t.tag===3){fm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=_r(n,e),e=wh(t,e,1),t=xn(t,e,1),e=Ye(),t!==null&&(Zi(t,1,e),et(t,e));break}}t=t.return}}function Nv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Le&n)===n&&(Ne===4||Ne===3&&(Le&130023424)===Le&&500>xe()-cu?qn(e,0):lu|=n),et(e,t)}function Bh(e,t){t===0&&(e.mode&1?(t=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):t=1);var n=Ye();e=$t(e,t),e!==null&&(Zi(e,t,n),et(e,n))}function Av(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bh(e,n)}function jv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),Bh(e,n)}var Hh;Hh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,fv(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,de&&t.flags&1048576&&Kp(t,fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ya(e,t),e=t.pendingProps;var i=Ir(t,_e.current);Er(t,n),i=nu(null,t,r,e,i,n);var a=ru();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(a=!0,uo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xc(t),i.updater=Go,t.stateNode=i,i._reactInternals=t,Dl(t,r,e,n),t=Wl(null,t,r,!0,a,n)):(t.tag=0,de&&a&&Uc(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ya(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Cv(r),e=kt(r,e),i){case 0:t=_l(null,t,r,e,n);break e;case 1:t=rm(null,t,r,e,n);break e;case 11:t=tm(null,t,r,e,n);break e;case 14:t=nm(null,t,r,kt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),_l(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),rm(e,t,r,i,n);case 3:e:{if(Ah(t),e===null)throw Error(O(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Zp(e,t),go(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=_r(Error(O(423)),t),t=im(e,t,r,n,i);break e}else if(r!==i){i=_r(Error(O(424)),t),t=im(e,t,r,n,i);break e}else for(it=bn(t.stateNode.containerInfo.firstChild),at=t,de=!0,Nt=null,n=Jp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===i){t=en(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return $p(t),e===null&&Ol(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Tl(r,i)?o=null:a!==null&&Tl(r,a)&&(t.flags|=32),Nh(e,t),He(e,t,o,n),t.child;case 6:return e===null&&Ol(t),null;case 13:return jh(e,t,n);case 4:return Zc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),tm(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,le(po,r._currentValue),r._currentValue=o,a!==null)if(Ct(a.value,o)){if(a.children===i.children&&!Ze.current){t=en(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Qt(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Il(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(O(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Il(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Er(t,n),i=vt(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=kt(r,t.pendingProps),i=kt(r.type,i),nm(e,t,r,i,n);case 15:return kh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Ya(e,t),t.tag=1,$e(r)?(e=!0,uo(t)):e=!1,Er(t,n),bh(t,r,i),Dl(t,r,i,n),Wl(null,t,r,!0,e,n);case 19:return Eh(e,t,n);case 22:return Sh(e,t,n)}throw Error(O(156,t.tag))};function qh(e,t){return gp(e,t)}function Ev(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new Ev(e,t,n,r)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cv(e){if(typeof e=="function")return fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zc)return 11;if(e===Lc)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ga(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")fu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case dr:return Un(n.children,i,a,t);case Mc:o=8,i|=8;break;case sl:return e=pt(12,n,t,i|2),e.elementType=sl,e.lanes=a,e;case ll:return e=pt(13,n,t,i),e.elementType=ll,e.lanes=a,e;case cl:return e=pt(19,n,t,i),e.elementType=cl,e.lanes=a,e;case $f:return Xo(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xf:o=10;break e;case Zf:o=9;break e;case zc:o=11;break e;case Lc:o=14;break e;case sn:o=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=pt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Un(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function Xo(e,t,n,r){return e=pt(22,e,r,t),e.elementType=$f,e.lanes=n,e.stateNode={isHidden:!1},e}function qs(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function Us(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ns(0),this.expirationTimes=Ns(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ns(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pu(e,t,n,r,i,a,o,l,c){return e=new Tv(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=pt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(a),e}function Pv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uh(e){if(!e)return An;e=e._reactInternals;e:{if(tr(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if($e(n))return Up(e,n,t)}return t}function Yh(e,t,n,r,i,a,o,l,c){return e=pu(n,r,!0,e,i,a,o,l,c),e.context=Uh(null),n=e.current,r=Ye(),i=kn(n),a=Qt(r,i),a.callback=t??null,xn(n,a,i),e.current.lanes=i,Zi(e,i,r),et(e,r),e}function Zo(e,t,n,r){var i=t.current,a=Ye(),o=kn(i);return n=Uh(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,o),e!==null&&(Et(e,i,o,a),Ha(e,i,o)),o}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hu(e,t){pm(e,t),(e=e.alternate)&&pm(e,t)}function Mv(){return null}var Kh=typeof reportError=="function"?reportError:function(e){console.error(e)};function gu(e){this._internalRoot=e}$o.prototype.render=gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));Zo(e,t,null,null)};$o.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){Zo(null,e,null,null)}),t[Zt]=null}};function $o(e){this._internalRoot=e}$o.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&Ap(e)}};function yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hm(){}function zv(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=No(o);a.call(u)}}var o=Yh(t,r,e,0,null,!1,!1,"",hm);return e._reactRootContainer=o,e[Zt]=o.current,Di(e.nodeType===8?e.parentNode:e),Jn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=No(c);l.call(u)}}var c=pu(e,0,!1,null,null,!1,!1,"",hm);return e._reactRootContainer=c,e[Zt]=c.current,Di(e.nodeType===8?e.parentNode:e),Jn(function(){Zo(t,c,n,r)}),c}function ts(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var c=No(o);l.call(c)}}Zo(t,o,e,i)}else o=zv(n,t,e,i,r);return No(o)}wp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fi(t.pendingLanes);n!==0&&(Rc(t,n|1),et(t,xe()),!(ee&6)&&(Wr=xe()+500,Tn()))}break;case 13:Jn(function(){var r=$t(e,1);if(r!==null){var i=Ye();Et(r,e,1,i)}}),hu(e,1)}};Dc=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Ye();Et(t,e,134217728,n)}hu(e,134217728)}};kp=function(e){if(e.tag===13){var t=kn(e),n=$t(e,t);if(n!==null){var r=Ye();Et(n,e,t,r)}hu(e,t)}};Sp=function(){return oe};Np=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};bl=function(e,t,n){switch(t){case"input":if(ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Yo(r);if(!i)throw Error(O(90));tp(r),ml(r,i)}}}break;case"textarea":rp(e,n);break;case"select":t=n.value,t!=null&&Sr(e,!!n.multiple,t,!1)}};up=uu;dp=Jn;var Lv={usingClientEntryPoint:!1,Events:[ea,hr,Yo,lp,cp,uu]},oi={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ov={bundleType:oi.bundleType,version:oi.version,rendererPackageName:oi.rendererPackageName,rendererConfig:oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pp(e),e===null?null:e.stateNode},findFiberByHostInstance:oi.findFiberByHostInstance||Mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{Bo=Aa.inject(Ov),Ft=Aa}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(t))throw Error(O(200));return Pv(e,t,null,n)};lt.createRoot=function(e,t){if(!yu(e))throw Error(O(299));var n=!1,r="",i=Kh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=pu(e,1,!1,null,null,n,!1,r,i),e[Zt]=t.current,Di(e.nodeType===8?e.parentNode:e),new gu(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=pp(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Jn(e)};lt.hydrate=function(e,t,n){if(!es(t))throw Error(O(200));return ts(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!yu(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Kh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Yh(t,null,e,1,n??null,i,!1,a,o),e[Zt]=t.current,Di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $o(t)};lt.render=function(e,t,n){if(!es(t))throw Error(O(200));return ts(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!es(e))throw Error(O(40));return e._reactRootContainer?(Jn(function(){ts(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1};lt.unstable_batchedUpdates=uu;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!es(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return ts(e,t,n,!1,r)};lt.version="18.3.1-next-f1338f8080-20240426";function Vh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vh)}catch(e){console.error(e)}}Vh(),Vf.exports=lt;var Pn=Vf.exports,gm=Pn;$a.createRoot=gm.createRoot,$a.hydrateRoot=gm.hydrateRoot;function ut(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function tn(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Iv(e,t){const n=+ut(e);return tn(e,n+t)}const Gh=6048e5,Rv=864e5,Qh=6e4,vu=36e5;function Jh(e,t){return Iv(e,t*vu)}let Dv={};function ns(){return Dv}function Ki(e,t){var l,c,u,d;const n=ns(),r=(t==null?void 0:t.weekStartsOn)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,i=ut(e),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function Ao(e){return Ki(e,{weekStartsOn:1})}function Xh(e){const t=ut(e),n=t.getFullYear(),r=tn(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=Ao(r),a=tn(e,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const o=Ao(a);return t.getTime()>=i.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function jo(e){const t=ut(e);return t.setHours(0,0,0,0),t}function ym(e){const t=ut(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Fv(e,t){const n=jo(e),r=jo(t),i=+n-ym(n),a=+r-ym(r);return Math.round((i-a)/Rv)}function _v(e){const t=Xh(e),n=tn(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Ao(n)}function Wv(e){return tn(e,Date.now())}function bu(e,t){const n=jo(e),r=jo(t);return+n==+r}function Bv(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Hv(e){if(!Bv(e)&&typeof e!="number")return!1;const t=ut(e);return!isNaN(Number(t))}function qv(e){const t=ut(e),n=tn(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Uv={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Yv=(e,t,n)=>{let r;const i=Uv[e];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Tr(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Kv={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Vv={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Gv={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Qv={date:Tr({formats:Kv,defaultWidth:"full"}),time:Tr({formats:Vv,defaultWidth:"full"}),dateTime:Tr({formats:Gv,defaultWidth:"full"})},Jv={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Xv=(e,t,n,r)=>Jv[e];function It(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):o;i=e.formattingValues[l]||e.formattingValues[o]}else{const o=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;i=e.values[l]||e.values[o]}const a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}const Zv={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$v={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},eb={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},tb={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},nb={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},rb={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ib=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ab={ordinalNumber:ib,era:It({values:Zv,defaultWidth:"wide"}),quarter:It({values:$v,defaultWidth:"wide",argumentCallback:e=>e-1}),month:It({values:eb,defaultWidth:"wide"}),day:It({values:tb,defaultWidth:"wide"}),dayPeriod:It({values:nb,defaultWidth:"wide",formattingValues:rb,defaultFormattingWidth:"wide"})};function Rt(e){return(t,n={})=>{const r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;const o=a[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(l)?sb(l,m=>m.test(o)):ob(l,m=>m.test(o));let u;u=e.valueCallback?e.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;const d=t.slice(o.length);return{value:u,rest:d}}}function ob(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function sb(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Zh(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;const l=t.slice(i.length);return{value:o,rest:l}}}const lb=/^(\d+)(th|st|nd|rd)?/i,cb=/\d+/i,ub={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},db={any:[/^b/i,/^(a|c)/i]},mb={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},fb={any:[/1/i,/2/i,/3/i,/4/i]},pb={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},hb={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},gb={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},yb={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},vb={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},bb={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},xb={ordinalNumber:Zh({matchPattern:lb,parsePattern:cb,valueCallback:e=>parseInt(e,10)}),era:Rt({matchPatterns:ub,defaultMatchWidth:"wide",parsePatterns:db,defaultParseWidth:"any"}),quarter:Rt({matchPatterns:mb,defaultMatchWidth:"wide",parsePatterns:fb,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Rt({matchPatterns:pb,defaultMatchWidth:"wide",parsePatterns:hb,defaultParseWidth:"any"}),day:Rt({matchPatterns:gb,defaultMatchWidth:"wide",parsePatterns:yb,defaultParseWidth:"any"}),dayPeriod:Rt({matchPatterns:vb,defaultMatchWidth:"any",parsePatterns:bb,defaultParseWidth:"any"})},wb={code:"en-US",formatDistance:Yv,formatLong:Qv,formatRelative:Xv,localize:ab,match:xb,options:{weekStartsOn:0,firstWeekContainsDate:1}};function kb(e){const t=ut(e);return Fv(t,qv(t))+1}function Sb(e){const t=ut(e),n=+Ao(t)-+_v(t);return Math.round(n/Gh)+1}function $h(e,t){var d,m,f,g;const n=ut(e),r=n.getFullYear(),i=ns(),a=(t==null?void 0:t.firstWeekContainsDate)??((m=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??i.firstWeekContainsDate??((g=(f=i.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??1,o=tn(e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);const l=Ki(o,t),c=tn(e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);const u=Ki(c,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function Nb(e,t){var l,c,u,d;const n=ns(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,i=$h(e,t),a=tn(e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),Ki(a,t)}function Ab(e,t){const n=ut(e),r=+Ki(n,t)-+Nb(n,t);return Math.round(r/Gh)+1}function ae(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const an={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return ae(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):ae(n+1,2)},d(e,t){return ae(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return ae(e.getHours()%12||12,t.length)},H(e,t){return ae(e.getHours(),t.length)},m(e,t){return ae(e.getMinutes(),t.length)},s(e,t){return ae(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return ae(i,t.length)}},or={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},vm={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return an.y(e,t)},Y:function(e,t,n,r){const i=$h(e,r),a=i>0?i:1-i;if(t==="YY"){const o=a%100;return ae(o,2)}return t==="Yo"?n.ordinalNumber(a,{unit:"year"}):ae(a,t.length)},R:function(e,t){const n=Xh(e);return ae(n,t.length)},u:function(e,t){const n=e.getFullYear();return ae(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return ae(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return ae(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return an.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return ae(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const i=Ab(e,r);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):ae(i,t.length)},I:function(e,t,n){const r=Sb(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):ae(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):an.d(e,t)},D:function(e,t,n){const r=kb(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):ae(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return ae(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return ae(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),i=r===0?7:r;switch(t){case"i":return String(i);case"ii":return ae(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let i;switch(r===12?i=or.noon:r===0?i=or.midnight:i=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let i;switch(r>=17?i=or.evening:r>=12?i=or.afternoon:r>=4?i=or.morning:i=or.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return an.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):an.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):ae(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):ae(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):an.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):an.s(e,t)},S:function(e,t){return an.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return xm(r);case"XXXX":case"XX":return Fn(r);case"XXXXX":case"XXX":default:return Fn(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return xm(r);case"xxxx":case"xx":return Fn(r);case"xxxxx":case"xxx":default:return Fn(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+bm(r,":");case"OOOO":default:return"GMT"+Fn(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+bm(r,":");case"zzzz":default:return"GMT"+Fn(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return ae(r,t.length)},T:function(e,t,n){const r=e.getTime();return ae(r,t.length)}};function bm(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+ae(a,2)}function xm(e,t){return e%60===0?(e>0?"-":"+")+ae(Math.abs(e)/60,2):Fn(e,t)}function Fn(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=ae(Math.trunc(r/60),2),a=ae(r%60,2);return n+i+t+a}const wm=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},eg=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},jb=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return wm(e,t);let a;switch(r){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",wm(r,t)).replace("{{time}}",eg(i,t))},Eb={p:eg,P:jb},Cb=/^D+$/,Tb=/^Y+$/,Pb=["D","DD","YY","YYYY"];function Mb(e){return Cb.test(e)}function zb(e){return Tb.test(e)}function Lb(e,t,n){const r=Ob(e,t,n);if(console.warn(r),Pb.includes(e))throw new RangeError(r)}function Ob(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ib=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Rb=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Db=/^'([^]*?)'?$/,Fb=/''/g,_b=/[a-zA-Z]/;function yt(e,t,n){var d,m,f,g,v,x,w,y;const r=ns(),i=(n==null?void 0:n.locale)??r.locale??wb,a=(n==null?void 0:n.firstWeekContainsDate)??((m=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??r.firstWeekContainsDate??((g=(f=r.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??1,o=(n==null?void 0:n.weekStartsOn)??((x=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:x.weekStartsOn)??r.weekStartsOn??((y=(w=r.locale)==null?void 0:w.options)==null?void 0:y.weekStartsOn)??0,l=ut(e);if(!Hv(l))throw new RangeError("Invalid time value");let c=t.match(Rb).map(p=>{const h=p[0];if(h==="p"||h==="P"){const k=Eb[h];return k(p,i.formatLong)}return p}).join("").match(Ib).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const h=p[0];if(h==="'")return{isToken:!1,value:Wb(p)};if(vm[h])return{isToken:!0,value:p};if(h.match(_b))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:p}});i.localize.preprocessor&&(c=i.localize.preprocessor(l,c));const u={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(p=>{if(!p.isToken)return p.value;const h=p.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&zb(h)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Mb(h))&&Lb(h,t,String(e));const k=vm[h[0]];return k(l,h,i.localize,u)}).join("")}function Wb(e){const t=e.match(Db);return t?t[1].replace(Fb,"'"):e}function tg(e){const t=ut(e);return t.setMinutes(0,0,0),t}function Bb(e){return bu(e,Wv(e))}function Vi(e,t){const r=Yb(e);let i;if(r.date){const c=Kb(r.date,2);i=Vb(c.restDateString,c.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);const a=i.getTime();let o=0,l;if(r.time&&(o=Gb(r.time),isNaN(o)))return new Date(NaN);if(r.timezone){if(l=Qb(r.timezone),isNaN(l))return new Date(NaN)}else{const c=new Date(a+o),u=new Date(0);return u.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),u.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),u}return new Date(a+o+l)}const ja={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Hb=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,qb=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Ub=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Yb(e){const t={},n=e.split(ja.dateTimeDelimiter);let r;if(n.length>2)return t;if(/:/.test(n[0])?r=n[0]:(t.date=n[0],r=n[1],ja.timeZoneDelimiter.test(t.date)&&(t.date=e.split(ja.timeZoneDelimiter)[0],r=e.substr(t.date.length,e.length))),r){const i=ja.timezone.exec(r);i?(t.time=r.replace(i[1],""),t.timezone=i[1]):t.time=r}return t}function Kb(e,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};const i=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:a===null?i:a*100,restDateString:e.slice((r[1]||r[2]).length)}}function Vb(e,t){if(t===null)return new Date(NaN);const n=e.match(Hb);if(!n)return new Date(NaN);const r=!!n[4],i=si(n[1]),a=si(n[2])-1,o=si(n[3]),l=si(n[4]),c=si(n[5])-1;if(r)return ex(t,l,c)?Jb(t,l,c):new Date(NaN);{const u=new Date(0);return!Zb(t,a,o)||!$b(t,i)?new Date(NaN):(u.setUTCFullYear(t,a,Math.max(i,o)),u)}}function si(e){return e?parseInt(e):1}function Gb(e){const t=e.match(qb);if(!t)return NaN;const n=Ys(t[1]),r=Ys(t[2]),i=Ys(t[3]);return tx(n,r,i)?n*vu+r*Qh+i*1e3:NaN}function Ys(e){return e&&parseFloat(e.replace(",","."))||0}function Qb(e){if(e==="Z")return 0;const t=e.match(Ub);if(!t)return 0;const n=t[1]==="+"?-1:1,r=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return nx(r,i)?n*(r*vu+i*Qh):NaN}function Jb(e,t,n){const r=new Date(0);r.setUTCFullYear(e,0,4);const i=r.getUTCDay()||7,a=(t-1)*7+n+1-i;return r.setUTCDate(r.getUTCDate()+a),r}const Xb=[31,null,31,30,31,30,31,31,30,31,30,31];function ng(e){return e%400===0||e%4===0&&e%100!==0}function Zb(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(Xb[t]||(ng(e)?29:28))}function $b(e,t){return t>=1&&t<=(ng(e)?366:365)}function ex(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}function tx(e,t,n){return e===24?t===0&&n===0:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}function nx(e,t){return t>=0&&t<=59}const km={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},rx=(e,t,n)=>{let r;const i=n!=null&&n.addSuffix?km[e].withPreposition:km[e].standalone;return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:"vor "+r:r},ix={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},ax={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ox={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},sx={date:Tr({formats:ix,defaultWidth:"full"}),time:Tr({formats:ax,defaultWidth:"full"}),dateTime:Tr({formats:ox,defaultWidth:"full"})},lx={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},cx=(e,t,n,r)=>lx[e],ux={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},dx={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},Zl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},mx={narrow:Zl.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:Zl.wide},fx={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},px={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},hx={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},gx=e=>Number(e)+".",yx={ordinalNumber:gx,era:It({values:ux,defaultWidth:"wide"}),quarter:It({values:dx,defaultWidth:"wide",argumentCallback:e=>e-1}),month:It({values:Zl,formattingValues:mx,defaultWidth:"wide"}),day:It({values:fx,defaultWidth:"wide"}),dayPeriod:It({values:px,defaultWidth:"wide",formattingValues:hx,defaultFormattingWidth:"wide"})},vx=/^(\d+)(\.)?/i,bx=/\d+/i,xx={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},wx={any:[/^v/i,/^n/i]},kx={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Sx={any:[/1/i,/2/i,/3/i,/4/i]},Nx={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Ax={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},jx={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Ex={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},Cx={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Tx={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},Px={ordinalNumber:Zh({matchPattern:vx,parsePattern:bx,valueCallback:e=>parseInt(e)}),era:Rt({matchPatterns:xx,defaultMatchWidth:"wide",parsePatterns:wx,defaultParseWidth:"any"}),quarter:Rt({matchPatterns:kx,defaultMatchWidth:"wide",parsePatterns:Sx,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Rt({matchPatterns:Nx,defaultMatchWidth:"wide",parsePatterns:Ax,defaultParseWidth:"any"}),day:Rt({matchPatterns:jx,defaultMatchWidth:"wide",parsePatterns:Ex,defaultParseWidth:"any"}),dayPeriod:Rt({matchPatterns:Cx,defaultMatchWidth:"wide",parsePatterns:Tx,defaultParseWidth:"any"})},Yn={code:"de",formatDistance:rx,formatLong:sx,formatRelative:cx,localize:yx,match:Px,options:{weekStartsOn:1,firstWeekContainsDate:4}};function ve(e){return e?e.split(".")[0]:""}function qe(e,t){var r,i;return(r=e==null?void 0:e.states)!=null&&r[t]?((i=e.states[t].attributes)==null?void 0:i.friendly_name)||t:t||""}function Tt(e,t){var r,i;if(!t||!((r=e==null?void 0:e.states)!=null&&r[t]))return{id:t||"",name:t||"",state:"unavailable",attributes:{},domain:ve(t),lastChanged:null};const n=e.states[t];return{id:t,name:((i=n.attributes)==null?void 0:i.friendly_name)||t,state:n.state,attributes:n.attributes||{},domain:ve(t),lastChanged:n.last_changed?new Date(n.last_changed).getTime():null}}function Mx(e,t){var i,a,o,l,c;const n=(i=e==null?void 0:e.entities)==null?void 0:i[t],r=(n==null?void 0:n.area_id)||((o=(a=e==null?void 0:e.devices)==null?void 0:a[n==null?void 0:n.device_id])==null?void 0:o.area_id);return r&&((c=(l=e==null?void 0:e.areas)==null?void 0:l[r])==null?void 0:c.name)||""}function zx(e,{domains:t=null,search:n=""}={}){if(!(e!=null&&e.states))return[];const r=n.toLowerCase().trim();return Object.keys(e.states).filter(i=>{const a=ve(i);return t!=null&&t.length&&!t.includes(a)?!1:r?Tt(e,i).name.toLowerCase().includes(r)||i.toLowerCase().includes(r):!0}).map(i=>Tt(e,i)).sort((i,a)=>i.name.localeCompare(a.name,"de"))}function rs(e,t){return e==="on"||e==="open"||e==="unlocked"||e==="home"?!0:t==="climate"?e!=="off"&&e!=="unavailable":t==="media_player"?e==="playing":t==="alarm_control_panel"?e!=="disarmed"&&e!=="unavailable":!1}const Lx=new Set(["cleaning","paused","returning","on","active","busy","mopping","spot_cleaning"]),Ox=new Set(["docked","idle","off","unavailable","unknown","error","standby","charging"]);function Ix(e,t={}){if(Ox.has(e))return!1;if(Lx.has(e))return!0;const n=String((t==null?void 0:t.status)||(t==null?void 0:t.vacuum_status)||"").toLowerCase();return!!(/clean|rein|mop|wisch|sweep|saug|scrub/i.test(n)||/return|zurück|dock|basis|home/i.test(n)&&e!=="docked"||/paus/i.test(n))}function Rx(e){return e!=null&&e.states&&Object.keys(e.states).find(t=>t.startsWith("vacuum."))||""}function Dx(e,t,n=!1,r=""){var a;if(t&&((a=e==null?void 0:e.states)!=null&&a[t]))return t;const i=Rx(e);return i||(n&&r?r:r||"")}function Fx(e){const{state:t,attributes:n}=e;return n!=null&&n.status?n.status:t==="cleaning"?"Reinigt …":t==="paused"?"Pausiert":t==="returning"?"Fährt zur Basis …":t==="docked"||t==="charging"?"In der Ladestation":t==="idle"||t==="off"?"Bereit":t==="unavailable"||!e.id?"Reinigt Wohnzimmer …":e.name||"Sauger"}function _x(e,t=0){var i;const n=(i=e.attributes)==null?void 0:i.battery_level;if(typeof n=="number"&&n>0)return Math.min(100,Math.max(5,100-n+20));const r=45*60;return Math.min(95,Math.round(t/r*100))}function Wx(e){const t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Bx(e){const{state:t,domain:n}=e;return n==="cover"?["open","opening","closing"].includes(t):n==="binary_sensor"?t==="on":!1}function Hx(e){const{state:t,domain:n}=e;return n==="cover"?t==="open":n==="binary_sensor"?t==="on":!1}function rg(e){const{state:t,domain:n}=e;return n==="cover"?{open:"Offen",closed:"Geschlossen",opening:"Öffnet sich …",closing:"Schließt sich …"}[t]||t:n==="binary_sensor"?t==="on"?"Offen":"Geschlossen":t}function qx(e,t=[]){return Array.isArray(t)?t.filter(n=>n==null?void 0:n.entity_id).map(n=>{const r=Tt(e,n.entity_id);return{...r,label:n.label||r.name}}):[]}function Ux(e,t=[]){return qx(e,t).filter(Bx)}function Yx(e=[]){if(!e.length)return"";const t=e.filter(n=>["opening","closing"].includes(n.state));if(t.length===1){const n=t[0].state==="opening"?"öffnet sich":"schließt sich";return`${t[0].label} ${n} …`}return t.length>1?`${t.length} Fenster bewegen sich`:e.length===1?`${e[0].label} offen`:`${e.length} Fenster offen`}function xu(e,t){const n=Tt(e,t),{state:r,attributes:i,domain:a}=n;return a==="climate"&&i.current_temperature!=null?`${i.current_temperature}°C`:a==="sensor"&&i.unit_of_measurement?`${r}${i.unit_of_measurement}`:a==="cover"?typeof i.current_position=="number"?`${Math.round(i.current_position)}%`:{open:"Offen",closed:"Geschlossen",opening:"Öffnet …",closing:"Schließt …"}[r]||r:a==="lock"?r==="locked"?"Gesperrt":r==="unlocked"?"Offen":r:a==="person"?r==="home"?"Zuhause":"Abwesend":a==="alarm_control_panel"?{disarmed:"Unscharf",armed_home:"Scharf (Zuhause)",armed_away:"Scharf (Abwesend)",armed_night:"Scharf (Nacht)",pending:"Auslösend",triggered:"Alarm!"}[r]||r:r==="on"?"An":r==="off"?"Aus":r}function nr(e){return!!(e!=null&&e.__mock)}function Eo(e){return!!(e!=null&&e.callService&&(e!=null&&e.states)&&!nr(e))}function Kx(e){if(e==null||e==="")return"";if(typeof e=="string")return e.replace(/\/$/,"");if(typeof e=="object"&&typeof e.href=="string")return e.href.replace(/\/$/,"");const t=String(e);return t.startsWith("http")?t.replace(/\/$/,""):""}function na(e){var r,i,a,o;if(typeof window<"u"&&((r=window.location)!=null&&r.origin)&&Eo(e))return window.location.origin;const t=(e==null?void 0:e.hassUrl)??((a=(i=e==null?void 0:e.auth)==null?void 0:i.data)==null?void 0:a.hassUrl),n=Kx(t);return n||(typeof window<"u"&&((o=window.location)!=null&&o.origin)?window.location.origin:"")}function ig(e){var t,n,r;return((n=(t=e==null?void 0:e.auth)==null?void 0:t.data)==null?void 0:n.accessToken)||((r=e==null?void 0:e.auth)==null?void 0:r.accessToken)||(e==null?void 0:e.accessToken)||null}function Qr(e,t){return t?t.startsWith("http://")||t.startsWith("https://")?t:`${na(e)}${t.startsWith("/")?t:`/${t}`}`:null}async function Q(e,t,n,r={},i=!1){return e!=null&&e.callService?e.callService(t,n,r,void 0,i):(console.warn("HA not connected, service call skipped:",t,n,r),null)}async function ag(e,t){var r;const n=ve(t);if(!(!n||!((r=e==null?void 0:e.states)!=null&&r[t])))return n==="light"?Q(e,"light","turn_on",{entity_id:t}):n==="cover"?Q(e,"cover","open_cover",{entity_id:t}):n==="lock"?Q(e,"lock","lock",{entity_id:t}):n==="input_button"||n==="button"?Q(e,n,"press",{entity_id:t}):n==="scene"||n==="script"?sg(e,t):Q(e,n,"turn_on",{entity_id:t})}async function og(e,t){var r;const n=ve(t);if(!(!n||!((r=e==null?void 0:e.states)!=null&&r[t]))){if(n==="cover")return Q(e,"cover","close_cover",{entity_id:t});if(n==="lock")return Q(e,"lock","unlock",{entity_id:t});if(!(n==="input_button"||n==="button"))return n==="light"?Q(e,"light","turn_off",{entity_id:t}):Q(e,n,"turn_off",{entity_id:t})}}async function wu(e,t){var r,i,a,o;const n=ve(t);if(!(!n||!((r=e==null?void 0:e.states)!=null&&r[t]))){if(["light","switch","fan","input_boolean","automation"].includes(n))return Q(e,n,"toggle",{entity_id:t});if(n==="input_button"||n==="button")return Q(e,n,"press",{entity_id:t});if(n==="cover"){const c=((i=e.states[t])==null?void 0:i.state)==="open"?"close_cover":"open_cover";return Q(e,n,c,{entity_id:t})}if(n==="lock"){const c=((a=e.states[t])==null?void 0:a.state)==="locked"?"unlock":"lock";return Q(e,n,c,{entity_id:t})}if(n==="alarm_control_panel")return((o=e.states[t])==null?void 0:o.state)==="disarmed"?Q(e,n,"alarm_arm_home",{entity_id:t}):Q(e,n,"alarm_disarm",{entity_id:t});if(!(n==="climate"||n==="sensor"||n==="binary_sensor"))return Q(e,"homeassistant","toggle",{entity_id:t})}}function Vx(e,t){var i,a,o;const n=(i=e==null?void 0:e.states)==null?void 0:i[t];if(!n)return 0;if(n.state==="off"){const l=(a=n.attributes)==null?void 0:a.brightness;return typeof l=="number"?Math.round(l/255*100):0}const r=(o=n.attributes)==null?void 0:o.brightness;return typeof r=="number"?Math.round(r/255*100):n.state==="on"?100:0}async function Gx(e,t,n){var o;const r=ve(t);if(!r||!((o=e==null?void 0:e.states)!=null&&o[t]))return;const i=Math.min(100,Math.max(0,Math.round(n)));if(i===0)return r==="light"?Q(e,"light","turn_off",{entity_id:t}):Q(e,r,"turn_off",{entity_id:t});const a=Math.max(1,Math.round(i/100*255));return r==="light"?Q(e,"light","turn_on",{entity_id:t,brightness:a}):Q(e,r,"turn_on",{entity_id:t})}async function Qx(e,t,n){var r;if(!(!((r=e==null?void 0:e.states)!=null&&r[t])||ve(t)!=="light")&&!(!Array.isArray(n)||n.length<3))return Q(e,"light","turn_on",{entity_id:t,rgb_color:n.slice(0,3).map(i=>Math.min(255,Math.max(0,Math.round(i))))})}async function sg(e,t){const n=ve(t);if(n)return n==="script"?Q(e,"script","turn_on",{entity_id:t}):n==="scene"?Q(e,"scene","turn_on",{entity_id:t}):Q(e,n,"turn_on",{entity_id:t})}async function Jx(e,t){var r;return((r=e.states[t])==null?void 0:r.state)==="playing"?Q(e,"media_player","media_pause",{entity_id:t}):Q(e,"media_player","media_play",{entity_id:t})}async function Xx(e,t){return Q(e,"media_player","media_next_track",{entity_id:t})}async function Zx(e,t){return Q(e,"media_player","media_previous_track",{entity_id:t})}async function $x(e,t){var n,r,i;if(!e||!t)return[];if((n=e.connection)!=null&&n.sendMessagePromise)try{const a=await e.connection.sendMessagePromise({type:"todo/item/list",entity_id:t});if(a!=null&&a.items)return a.items}catch{}try{const a=await Q(e,"todo","get_items",{entity_id:t},!0),o=((i=(r=a==null?void 0:a.response)==null?void 0:r[t])==null?void 0:i.items)||(a==null?void 0:a.items);if(o)return o}catch{}return[]}async function ew(e,t,n){return Q(e,"todo","update_item",{entity_id:t,item:n,status:"completed"})}async function tw(e,t,n){return Q(e,"todo","add_item",{entity_id:t,item:n})}async function nw(e,t){return Q(e,"vacuum","pause",{entity_id:t})}async function rw(e,t){return Q(e,"vacuum","return_to_base",{entity_id:t})}async function ku(e,t){return Q(e,"cover","close_cover",{entity_id:t})}async function lg(e,t){return Q(e,"cover","open_cover",{entity_id:t})}async function iw(e,t){return Q(e,"cover","stop_cover",{entity_id:t})}function Su(e,t){var i,a;const n=(i=e==null?void 0:e.states)==null?void 0:i[t];if(!n)return 0;const r=(a=n.attributes)==null?void 0:a.current_position;return typeof r=="number"?Math.round(r):n.state==="open"?100:(n.state==="closed",0)}async function $l(e,t,n){var a;if(ve(t)!=="cover"||!((a=e==null?void 0:e.states)!=null&&a[t]))return;const i=Math.min(100,Math.max(0,Math.round(n)));return i===0?Q(e,"cover","close_cover",{entity_id:t}):i===100?Q(e,"cover","open_cover",{entity_id:t}):Q(e,"cover","set_cover_position",{entity_id:t,position:i})}const aw=2;function ow(e,t){var r,i;const n=(r=e==null?void 0:e.states)==null?void 0:r[t];return n?!!((((i=n.attributes)==null?void 0:i.supported_features)??0)&aw):!1}function cg(e,t){var r,i,a;const n=(a=(i=(r=e==null?void 0:e.states)==null?void 0:r[t])==null?void 0:i.attributes)==null?void 0:a.access_token;return n||ig(e)}function sw(e,t){if(!e||!t||nr(e)||!e.states[t])return null;const r=na(e);if(!r)return null;const i=new URLSearchParams,a=cg(e,t);a&&i.set("token",a);const o=i.toString();return o?`${r}/api/camera_proxy_stream/${t}?${o}`:`${r}/api/camera_proxy_stream/${t}`}function Sm(e,t,{cacheBust:n=null}={}){var u;if(!e||!t)return null;const r=e.states[t];if(!r)return null;if(nr(e)){const d=Qr(e,(u=r.attributes)==null?void 0:u.entity_picture);return d?n==null?d:`${d}${d.includes("?")?"&":"?"}t=${n}`:null}const i=new URLSearchParams;n!=null&&i.set("t",String(n));const a=cg(e,t);a&&i.set("token",a);const o=na(e),l=i.toString(),c=l?`/api/camera_proxy/${t}?${l}`:`/api/camera_proxy/${t}`;return o?`${o}${c}`:c}function $(e,t,n={}){return{entity_id:e,state:t,attributes:n,last_changed:new Date().toISOString(),last_updated:new Date().toISOString()}}const lw={"light.wohnzimmer":$("light.wohnzimmer","on",{friendly_name:"Wohnzimmer Licht",brightness:200}),"light.kueche":$("light.kueche","off",{friendly_name:"Küche Licht"}),"switch.steckdose":$("switch.steckdose","off",{friendly_name:"Steckdose TV"}),"climate.wohnzimmer":$("climate.wohnzimmer","heat",{friendly_name:"Wohnzimmer Heizung",current_temperature:21.5,temperature:22}),"lock.haustuer":$("lock.haustuer","locked",{friendly_name:"Haustür"}),"alarm_control_panel.haus":$("alarm_control_panel.haus","armed_home",{friendly_name:"Alarmanlage"}),"scene.filmabend":$("scene.filmabend","scening",{friendly_name:"Filmabend"}),"scene.essen":$("scene.essen","scening",{friendly_name:"Essen"}),"scene.schlafen":$("scene.schlafen","scening",{friendly_name:"Schlafen"}),"script.verlassen":$("script.verlassen","off",{friendly_name:"Haus verlassen"}),"scene.abendstimmung":$("scene.abendstimmung","scening",{friendly_name:"Abendstimmung",entity_id:["light.wohnzimmer","cover.wohnzimmer","climate.wohnzimmer","media_player.wohnzimmer"]}),"scene.guten_morgen":$("scene.guten_morgen","scening",{friendly_name:"Guten Morgen",entity_id:["cover.schlafzimmer","light.kueche","switch.steckdose"]}),"scene.kino":$("scene.kino","scening",{friendly_name:"Kino",entity_id:["light.wohnzimmer","cover.wohnzimmer","media_player.wohnzimmer"]}),"scene.alles_aus":$("scene.alles_aus","scening",{friendly_name:"Alles aus",entity_id:["light.wohnzimmer","light.kueche","switch.steckdose","cover.wohnzimmer","climate.wohnzimmer"]}),"weather.zuhause":$("weather.zuhause","partlycloudy",{friendly_name:"Zuhause",supported_features:3,temperature:18,humidity:68,pressure:1013,wind_speed:12,visibility:10,forecast:[{datetime:"2026-06-17",condition:"partlycloudy",temperature:22,templow:14,precipitation_probability:20},{datetime:"2026-06-18",condition:"sunny",temperature:26,templow:16,precipitation_probability:5},{datetime:"2026-06-19",condition:"cloudy",temperature:20,templow:13,precipitation_probability:30},{datetime:"2026-06-20",condition:"rainy",temperature:17,templow:12,precipitation_probability:80},{datetime:"2026-06-21",condition:"partlycloudy",temperature:21,templow:14,precipitation_probability:15},{datetime:"2026-06-22",condition:"sunny",temperature:24,templow:15,precipitation_probability:0},{datetime:"2026-06-23",condition:"cloudy",temperature:19,templow:12,precipitation_probability:40}],hourly_forecast:[{datetime:"2026-06-17T20:00:00+02:00",condition:"partlycloudy",temperature:21},{datetime:"2026-06-17T21:00:00+02:00",condition:"partlycloudy",temperature:20},{datetime:"2026-06-17T22:00:00+02:00",condition:"cloudy",temperature:19},{datetime:"2026-06-17T23:00:00+02:00",condition:"cloudy",temperature:17},{datetime:"2026-06-18T00:00:00+02:00",condition:"partlycloudy",temperature:15},{datetime:"2026-06-18T01:00:00+02:00",condition:"partlycloudy",temperature:14},{datetime:"2026-06-18T02:00:00+02:00",condition:"clear-night",temperature:13},{datetime:"2026-06-18T03:00:00+02:00",condition:"clear-night",temperature:12},{datetime:"2026-06-18T04:00:00+02:00",condition:"clear-night",temperature:11},{datetime:"2026-06-18T05:00:00+02:00",condition:"partlycloudy",temperature:11}]}),"media_player.wohnzimmer":$("media_player.wohnzimmer","playing",{friendly_name:"Bluetooth Speaker",device_manufacturer:"Apple",device_model:"HomePod mini",media_title:"Hurt Feelings",media_artist:"Mac Miller",media_album_name:"Swimming",media_position:161,media_duration:204,entity_picture:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Mac_Miller_-_Swimming.png/220px-Mac_Miller_-_Swimming.png"}),"camera.garten":$("camera.garten","idle",{friendly_name:"Garten",entity_picture:"https://images.unsplash.com/photo-1558036117-15dbaf040517?q=80&w=800"}),"camera.haustuer":$("camera.haustuer","idle",{friendly_name:"Haustür",entity_picture:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"}),"camera.garage":$("camera.garage","idle",{friendly_name:"Garage",entity_picture:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"}),"todo.einkaufsliste":$("todo.einkaufsliste","0",{friendly_name:"Einkaufsliste"}),"person.papa":$("person.papa","home",{friendly_name:"Papa"}),"person.mama":$("person.mama","home",{friendly_name:"Mama"}),"person.max":$("person.max","not_home",{friendly_name:"Max"}),"vacuum.roborock":$("vacuum.roborock","cleaning",{friendly_name:"Roborock",battery_level:78,fan_speed:"Turbo",status:"Reinigt Wohnzimmer …"}),"cover.wohnzimmer":$("cover.wohnzimmer","open",{friendly_name:"Wohnzimmer Rolladen",current_position:100}),"cover.schlafzimmer":$("cover.schlafzimmer","closed",{friendly_name:"Schlafzimmer Rolladen",current_position:0}),"cover.kueche":$("cover.kueche","open",{friendly_name:"Küche Rolladen",current_position:45}),"binary_sensor.kueche_fenster":$("binary_sensor.kueche_fenster","on",{friendly_name:"Küche Fenster"}),"binary_sensor.grandland_charging":$("binary_sensor.grandland_charging","on",{friendly_name:"Grandland lädt",device_class:"battery_charging"}),"sensor.grandland_battery":$("sensor.grandland_battery","67",{friendly_name:"Grandland Akku",unit_of_measurement:"%",device_class:"battery"}),"sensor.grandland_charge_power":$("sensor.grandland_charge_power","11",{friendly_name:"Grandland Ladeleistung",unit_of_measurement:"kW",device_class:"power"}),"sensor.grandland_range":$("sensor.grandland_range","320",{friendly_name:"Grandland Reichweite",unit_of_measurement:"km",device_class:"distance"}),"sensor.grandland_charge_remaining":$("sensor.grandland_charge_remaining","4800",{friendly_name:"Grandland Restladezeit",unit_of_measurement:"s",device_class:"duration"}),"sensor.grandland_last_trip":$("sensor.grandland_last_trip","42",{friendly_name:"Grandland Letzte Fahrt",unit_of_measurement:"km",device_class:"distance"}),"sensor.grandland_cost_today":$("sensor.grandland_cost_today","6.24",{friendly_name:"Grandland Kosten heute",unit_of_measurement:"€",device_class:"monetary"})},Nm=[];function Ks(){const e={...lw},t={states:e,hassUrl:"http://homeassistant.local:8123",callService:async(r,i,a={})=>{Nm.push({domain:r,service:i,data:a,time:Date.now()});const o=a.entity_id;if(r==="homeassistant"&&i==="toggle"&&o){const l=e[o];l&&(l.state=l.state==="on"?"off":"on")}if(r==="light"&&i==="toggle"&&o){const l=e[o];l&&(l.state=l.state==="on"?"off":"on")}if(r==="light"&&i==="turn_on"&&o){const l=e[o];l&&(l.state="on",typeof a.brightness=="number"&&(l.attributes={...l.attributes,brightness:a.brightness}))}if(r==="light"&&i==="turn_off"&&o){const l=e[o];l&&(l.state="off")}if(r==="switch"&&i==="toggle"&&o){const l=e[o];l&&(l.state=l.state==="on"?"off":"on")}if(r==="scene"&&i==="turn_on"&&console.log("[mock] Scene activated:",o),r==="media_player"){const l=e[o];if(!l)return{context:{id:"mock"}};i==="media_pause"&&(l.state="paused"),i==="media_play"&&(l.state="playing"),i==="turn_off"&&(l.state="off"),i==="turn_on"&&(l.state="idle")}if(r==="alarm_control_panel"&&o){const l=e[o];if(!l)return{context:{id:"mock"}};i==="alarm_disarm"&&(l.state="disarmed"),i==="alarm_arm_home"&&(l.state="armed_home"),i==="alarm_arm_away"&&(l.state="armed_away"),i==="alarm_arm_night"&&(l.state="armed_night")}if(r==="vacuum"&&o){const l=e[o];if(!l)return{context:{id:"mock"}};i==="pause"&&(l.state="paused",l.attributes={...l.attributes,status:"Pausiert"}),i==="stop"&&(l.state="idle",l.attributes={...l.attributes,status:"Gestoppt"}),i==="return_to_base"&&(l.state="returning",l.attributes={...l.attributes,status:"Fährt zur Basis …"}),i==="start"&&(l.state="cleaning",l.attributes={...l.attributes,status:"Reinigt Wohnzimmer …"})}if(r==="cover"&&o){const l=e[o];if(!l)return{context:{id:"mock"}};if(i==="open_cover"&&(l.state="open",l.attributes={...l.attributes,current_position:100}),i==="close_cover"&&(l.state="closed",l.attributes={...l.attributes,current_position:0}),i==="set_cover_position"&&typeof a.position=="number"){const c=Math.min(100,Math.max(0,a.position));l.attributes={...l.attributes,current_position:c},c===0?l.state="closed":l.state="open"}}return n.forEach(l=>l(t)),{context:{id:"mock"}}}},n=[];return t.subscribe=r=>(n.push(r),()=>{const i=n.indexOf(r);i>=0&&n.splice(i,1)}),t.getServiceLog=()=>Nm,t.__mock=!0,t}const cw=[{uid:"1",summary:"Milch",status:"needs_action"},{uid:"2",summary:"Kaffee",status:"needs_action"},{uid:"3",summary:"Bananen",status:"completed"},{uid:"4",summary:"Brot",status:"needs_action"}],Nu={quickActions:[{entity_id:"light.wohnzimmer",label:"Wohnzimmer"},{entity_id:"light.kueche",label:"Küche"},{entity_id:"switch.steckdose",label:"Steckdose TV"}],scenes:[{entity_id:"scene.filmabend",label:"Filmabend"},{entity_id:"scene.essen",label:"Essen"},{entity_id:"scene.schlafen",label:"Schlafen"},{entity_id:"script.verlassen",label:"Verlassen"}],weather:{entity_id:"weather.zuhause"},mediaPlayer:{entity_id:"media_player.wohnzimmer"},camera:{entity_id:"camera.garten"},cameras:["camera.garten","camera.haustuer","camera.garage"],shoppingList:{entity_id:"todo.einkaufsliste"},vacuum:{entity_id:"vacuum.roborock"},ev:{stateEntity:"binary_sensor.grandland_charging",batteryEntity:"sensor.grandland_battery",powerEntity:"sensor.grandland_charge_power",label:"Grandland"},alarm:{entity_id:"alarm_control_panel.haus"},presence:[{entity_id:"person.papa",label:"Papa"},{entity_id:"person.mama",label:"Mama"},{entity_id:"person.max",label:"Max"}]},uw=1,Co=2,Vs=3,ug=4,dw=5,mw=6;function fw(e){return{type:"auth",access_token:e}}function pw(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function hw(){return{type:"get_states"}}function gw(e,t,n,r,i){const a={type:"call_service",domain:e,service:t,target:r,return_response:i};return n&&(a.service_data=n),a}function yw(e){const t={type:"subscribe_events"};return e&&(t.event_type=e),t}function Am(e){return{type:"unsubscribe_events",subscription:e}}function vw(){return{type:"ping"}}function bw(e,t){return{type:"result",success:!1,error:{code:e,message:t}}}function xw(e){const t={},n=e.split("&");for(let r=0;r<n.length;r++){const i=n[r].split("="),a=decodeURIComponent(i[0]),o=i.length>1?decodeURIComponent(i[1]):void 0;t[a]=o}return t}const dg=(e,t,n,r)=>{const[i,a,o]=e.split(".",3);return Number(i)>t||Number(i)===t&&(r===void 0?Number(a)>=n:Number(a)>n)||r!==void 0&&Number(i)===t&&Number(a)===n&&Number(o)>=r},ww="auth_invalid",kw="auth_ok";function Sw(e){if(!e.auth)throw ug;const t=e.auth;let n=t.expired?t.refreshAccessToken().then(()=>{n=void 0},()=>{n=void 0}):void 0;const r=t.wsUrl;function i(a,o,l){const c=new WebSocket(r);let u=!1;const d=()=>{if(c.removeEventListener("close",d),u){l(Co);return}if(a===0){l(uw);return}const g=a===-1?-1:a-1;setTimeout(()=>i(g,o,l),1e3)},m=async g=>{try{t.expired&&await(n||t.refreshAccessToken()),c.send(JSON.stringify(fw(t.accessToken)))}catch(v){u=v===Co,c.close()}},f=async g=>{const v=JSON.parse(g.data);switch(v.type){case ww:u=!0,c.close();break;case kw:c.removeEventListener("open",m),c.removeEventListener("message",f),c.removeEventListener("close",d),c.removeEventListener("error",d),c.haVersion=v.ha_version,dg(c.haVersion,2022,9)&&c.send(JSON.stringify(pw())),o(c);break}};c.addEventListener("open",m),c.addEventListener("message",f),c.addEventListener("close",d),c.addEventListener("error",d)}return new Promise((a,o)=>i(e.setupRetry,a,o))}class Nw{constructor(t,n){this._handleMessage=r=>{let i=JSON.parse(r.data);Array.isArray(i)||(i=[i]),i.forEach(a=>{const o=this.commands.get(a.id);switch(a.type){case"event":o?o.callback(a.event):(console.warn(`Received event for unknown subscription ${a.id}. Unsubscribing.`),this.sendMessagePromise(Am(a.id)).catch(l=>{}));break;case"result":o&&(a.success?(o.resolve(a.result),"subscribe"in o||this.commands.delete(a.id)):(o.reject(a.error),this.commands.delete(a.id)));break;case"pong":o?(o.resolve(),this.commands.delete(a.id)):console.warn(`Received unknown pong response ${a.id}`);break}})},this._handleClose=async()=>{const r=this.commands;if(this.commandId=1,this.oldSubscriptions=this.commands,this.commands=new Map,this.socket=void 0,r.forEach(o=>{"subscribe"in o||o.reject(bw(Vs,"Connection lost"))}),this.closeRequested)return;this.fireEvent("disconnected");const i=Object.assign(Object.assign({},this.options),{setupRetry:0}),a=o=>{setTimeout(async()=>{if(!this.closeRequested)try{const l=await i.createSocket(i);this._setSocket(l)}catch(l){if(this._queuedMessages){const c=this._queuedMessages;this._queuedMessages=void 0;for(const u of c)u.reject&&u.reject(Vs)}l===Co?this.fireEvent("reconnect-error",l):a(o+1)}},Math.min(o,5)*1e3)};this.suspendReconnectPromise&&(await this.suspendReconnectPromise,this.suspendReconnectPromise=void 0,this._queuedMessages=[]),a(0)},this.options=n,this.commandId=2,this.commands=new Map,this.eventListeners=new Map,this.closeRequested=!1,this._setSocket(t)}get connected(){return this.socket!==void 0&&this.socket.readyState==this.socket.OPEN}_setSocket(t){this.socket=t,this.haVersion=t.haVersion,t.addEventListener("message",this._handleMessage),t.addEventListener("close",this._handleClose);const n=this.oldSubscriptions;n&&(this.oldSubscriptions=void 0,n.forEach(i=>{"subscribe"in i&&i.subscribe&&i.subscribe().then(a=>{i.unsubscribe=a,i.resolve()})}));const r=this._queuedMessages;if(r){this._queuedMessages=void 0;for(const i of r)i.resolve()}this.fireEvent("ready")}addEventListener(t,n){let r=this.eventListeners.get(t);r||(r=[],this.eventListeners.set(t,r)),r.push(n)}removeEventListener(t,n){const r=this.eventListeners.get(t);if(!r)return;const i=r.indexOf(n);i!==-1&&r.splice(i,1)}fireEvent(t,n){(this.eventListeners.get(t)||[]).forEach(r=>r(this,n))}suspendReconnectUntil(t){this.suspendReconnectPromise=t}suspend(){if(!this.suspendReconnectPromise)throw new Error("Suspend promise not set");this.socket&&this.socket.close()}reconnect(t=!1){if(this.socket){if(!t){this.socket.close();return}this.socket.removeEventListener("message",this._handleMessage),this.socket.removeEventListener("close",this._handleClose),this.socket.close(),this._handleClose()}}close(){this.closeRequested=!0,this.socket&&this.socket.close()}async subscribeEvents(t,n){return this.subscribeMessage(t,yw(n))}ping(){return this.sendMessagePromise(vw())}sendMessage(t,n){if(!this.connected)throw Vs;if(this._queuedMessages){if(n)throw new Error("Cannot queue with commandId");this._queuedMessages.push({resolve:()=>this.sendMessage(t)});return}n||(n=this._genCmdId()),t.id=n,this.socket.send(JSON.stringify(t))}sendMessagePromise(t){return new Promise((n,r)=>{if(this._queuedMessages){this._queuedMessages.push({reject:r,resolve:async()=>{try{n(await this.sendMessagePromise(t))}catch(a){r(a)}}});return}const i=this._genCmdId();this.commands.set(i,{resolve:n,reject:r}),this.sendMessage(t,i)})}async subscribeMessage(t,n,r){if(this._queuedMessages&&await new Promise((a,o)=>{this._queuedMessages.push({resolve:a,reject:o})}),r!=null&&r.preCheck&&!await r.preCheck())throw new Error("Pre-check failed");let i;return await new Promise((a,o)=>{const l=this._genCmdId();i={resolve:a,reject:o,callback:t,subscribe:(r==null?void 0:r.resubscribe)!==!1?()=>this.subscribeMessage(t,n,r):void 0,unsubscribe:async()=>{this.connected&&await this.sendMessagePromise(Am(l)),this.commands.delete(l)}},this.commands.set(l,i);try{this.sendMessage(n,l)}catch{}}),()=>i.unsubscribe()}_genCmdId(){return++this.commandId}}const Aw=()=>`${location.protocol}//${location.host}/`,jw=e=>e*1e3+Date.now();function Ew(){const{protocol:e,host:t,pathname:n,search:r}=location;return`${e}//${t}${n}${r}`}function Cw(e,t,n,r){let i=`${e}/auth/authorize?response_type=code&redirect_uri=${encodeURIComponent(n)}`;return t!==null&&(i+=`&client_id=${encodeURIComponent(t)}`),r&&(i+=`&state=${encodeURIComponent(r)}`),i}function Tw(e,t,n,r){n+=(n.includes("?")?"&":"?")+"auth_callback=1",document.location.href=Cw(e,t,n,r)}async function mg(e,t,n){const r=typeof location<"u"&&location;if(r&&r.protocol==="https:"){const l=document.createElement("a");if(l.href=e,l.protocol==="http:"&&l.hostname!=="localhost")throw dw}const i=new FormData;t!==null&&i.append("client_id",t),Object.keys(n).forEach(l=>{i.append(l,n[l])});const a=await fetch(`${e}/auth/token`,{method:"POST",credentials:"same-origin",body:i});if(!a.ok)throw a.status===400||a.status===403?Co:new Error("Unable to fetch tokens");const o=await a.json();return o.hassUrl=e,o.clientId=t,o.expires=jw(o.expires_in),o}function jm(e,t,n){return mg(e,t,{code:n,grant_type:"authorization_code"})}function Pw(e){return btoa(JSON.stringify(e))}function Mw(e){return JSON.parse(atob(e))}class Au{constructor(t,n){this.data=t,this._saveTokens=n}get wsUrl(){return`ws${this.data.hassUrl.substr(4)}/api/websocket`}get accessToken(){return this.data.access_token}get expired(){return Date.now()>this.data.expires}async refreshAccessToken(){if(!this.data.refresh_token)throw new Error("No refresh_token");const t=await mg(this.data.hassUrl,this.data.clientId,{grant_type:"refresh_token",refresh_token:this.data.refresh_token});t.refresh_token=this.data.refresh_token,this.data=t,this._saveTokens&&this._saveTokens(t)}async revoke(){if(!this.data.refresh_token)throw new Error("No refresh_token to revoke");const t=new FormData;t.append("token",this.data.refresh_token),await fetch(`${this.data.hassUrl}/auth/revoke`,{method:"POST",credentials:"same-origin",body:t}),this._saveTokens&&this._saveTokens(null)}}function zw(e,t){return new Au({hassUrl:e,clientId:null,expires:Date.now()+1e11,refresh_token:"",access_token:t,expires_in:1e11})}async function fg(e={}){let t,n=e.hassUrl;n&&n[n.length-1]==="/"&&(n=n.substr(0,n.length-1));const r=e.clientId!==void 0?e.clientId:Aw(),i=e.limitHassInstance===!0;if(e.authCode&&n&&(t=await jm(n,r,e.authCode),e.saveTokens&&e.saveTokens(t)),!t){const a=xw(location.search.substr(1));if("auth_callback"in a){const o=Mw(a.state);if(i&&(o.hassUrl!==n||o.clientId!==r))throw mw;t=await jm(o.hassUrl,o.clientId,a.code),e.saveTokens&&e.saveTokens(t)}}if(!t&&e.loadTokens&&(t=await e.loadTokens()),t&&(n===void 0||t.hassUrl===n))return new Au(t,e.saveTokens);if(n===void 0)throw ug;return Tw(n,r,e.redirectUrl||Ew(),Pw({hassUrl:n,clientId:r})),new Promise(()=>{})}const Lw=e=>{let t=[];function n(i){let a=[];for(let o=0;o<t.length;o++)t[o]===i?i=null:a.push(t[o]);t=a}function r(i,a){e=a?i:Object.assign(Object.assign({},e),i);let o=t;for(let l=0;l<o.length;l++)o[l](e)}return{get state(){return e},action(i){function a(o){r(o,!1)}return function(){let o=[e];for(let c=0;c<arguments.length;c++)o.push(arguments[c]);let l=i.apply(this,o);if(l!=null)return l instanceof Promise?l.then(a):a(l)}},setState:r,clearState(){e=void 0},subscribe(i){return t.push(i),()=>{n(i)}}}},Ow=5e3,Em=(e,t,n,r,i={unsubGrace:!0})=>{if(e[t])return e[t];let a=0,o,l,c=Lw();const u=()=>{if(!n)throw new Error("Collection does not support refresh");return n(e).then(x=>c.setState(x,!0))},d=()=>u().catch(x=>{if(e.connected)throw x}),m=()=>{if(l!==void 0){clearTimeout(l),l=void 0;return}r&&(o=r(e,c)),n&&(e.addEventListener("ready",d),d()),e.addEventListener("disconnected",v)},f=()=>{l=void 0,o&&o.then(x=>{x()}),c.clearState(),e.removeEventListener("ready",u),e.removeEventListener("disconnected",v)},g=()=>{l=setTimeout(f,Ow)},v=()=>{l&&(clearTimeout(l),f())};return e[t]={get state(){return c.state},refresh:u,subscribe(x){a++,a===1&&m();const w=c.subscribe(x);return c.state!==void 0&&setTimeout(()=>x(c.state),0),()=>{w(),a--,a||(i.unsubGrace?g():f())}}},e[t]},Iw=e=>e.sendMessagePromise(hw()),Rw=(e,t,n,r,i,a)=>e.sendMessagePromise(gw(t,n,r,i,a));function Dw(e,t){const n=Object.assign({},e.state);if(t.a)for(const r in t.a){const i=t.a[r];let a=new Date(i.lc*1e3).toISOString();n[r]={entity_id:r,state:i.s,attributes:i.a,context:typeof i.c=="string"?{id:i.c,parent_id:null,user_id:null}:i.c,last_changed:a,last_updated:i.lu?new Date(i.lu*1e3).toISOString():a}}if(t.r)for(const r of t.r)delete n[r];if(t.c)for(const r in t.c){let i=n[r];if(!i){console.warn("Received state update for unknown entity",r);continue}i=Object.assign({},i);const{"+":a,"-":o}=t.c[r],l=(a==null?void 0:a.a)||(o==null?void 0:o.a),c=l?Object.assign({},i.attributes):i.attributes;if(a&&(a.s!==void 0&&(i.state=a.s),a.c&&(typeof a.c=="string"?i.context=Object.assign(Object.assign({},i.context),{id:a.c}):i.context=Object.assign(Object.assign({},i.context),a.c)),a.lc?i.last_updated=i.last_changed=new Date(a.lc*1e3).toISOString():a.lu&&(i.last_updated=new Date(a.lu*1e3).toISOString()),a.a&&Object.assign(c,a.a)),o!=null&&o.a)for(const u of o.a)delete c[u];l&&(i.attributes=c),n[r]=i}e.setState(n,!0)}const Fw=(e,t)=>e.subscribeMessage(n=>Dw(t,n),{type:"subscribe_entities"});function _w(e,t){const n=e.state;if(n===void 0)return;const{entity_id:r,new_state:i}=t.data;if(i)e.setState({[i.entity_id]:i});else{const a=Object.assign({},n);delete a[r],e.setState(a,!0)}}async function Ww(e){const t=await Iw(e),n={};for(let r=0;r<t.length;r++){const i=t[r];n[i.entity_id]=i}return n}const Bw=(e,t)=>e.subscribeEvents(n=>_w(t,n),"state_changed"),Hw=e=>dg(e.haVersion,2022,4,0)?Em(e,"_ent",void 0,Fw):Em(e,"_ent",Ww,Bw),qw=(e,t)=>Hw(e).subscribe(t);async function Uw(e){const t=Object.assign({setupRetry:0,createSocket:Sw},e),n=await t.createSocket(t);return new Nw(n,t)}const To="the-monitor-hass-auth",pg="the-monitor-hass-url";function Po(){return localStorage.getItem(pg)||"http://homeassistant.local:8123"}function ju(e){localStorage.setItem(pg,e.replace(/\/$/,""))}function is(e){e?(localStorage.setItem(To,JSON.stringify(e)),e.hassUrl&&ju(e.hassUrl)):localStorage.removeItem(To)}function Eu(){try{const e=localStorage.getItem(To);return e?JSON.parse(e):null}catch{return null}}function Yw(){localStorage.removeItem(To)}function Cu(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).has("auth_callback")}function Kw(){typeof window>"u"||!Cu()||window.history.replaceState({},"",window.location.pathname)}function hg(){const e=Eu();return e!=null&&e.access_token?new Au(e,is):null}async function gg(e){if(!e.expired)return e;if(!e.data.refresh_token)throw new Error("Sitzung abgelaufen — bitte erneut anmelden.");return await e.refreshAccessToken(),e}function Vw(e,t,n){const r={},i={states:r,hassUrl:t.data.hassUrl,accessToken:t.accessToken,connection:e,callService:(o,l,c,u,d)=>Rw(e,o,l,{...c,...u},void 0,d)},a=qw(e,o=>{Object.keys(r).forEach(l=>{l in o||delete r[l]}),Object.assign(r,o),n==null||n(i)});return i._unsubscribe=a,i}async function yg(e,t){const n=await Uw({auth:e});return{hass:Vw(n,e,t),connection:n,auth:e}}async function Gw(e,t,n){const r=e.replace(/\/$/,""),i=zw(r,t.trim());return ju(r),is({hassUrl:r,clientId:null,expires:Date.now()+1e11,refresh_token:"",access_token:t.trim(),expires_in:1e11}),yg(i,n)}async function Qw(){const e=await fg({hassUrl:Po(),saveTokens:is,loadTokens:async()=>Eu()});return Kw(),e}let Ea=null;async function Jw(){const e=hg();return e&&!Cu()?gg(e):(Ea||(Ea=Qw().finally(()=>{Ea=null})),Ea)}async function Xw(e){const t=Cu(),n=hg();if(!t&&!n)return null;const r=t?await Jw():await gg(n);return yg(r,e)}function Zw(e){ju(e),fg({hassUrl:e.replace(/\/$/,""),saveTokens:is,loadTokens:async()=>Eu()})}async function $w(e,t){var n;(n=t==null?void 0:t._unsubscribe)==null||n.call(t),e&&await e.close(),Yw()}const vg=b.createContext(null);function bg({children:e,initialHass:t=null,onRegisterUpdate:n,enableMock:r=!1}){const[i,a]=b.useState(t),[o,l]=b.useState(0),[c,u]=b.useState(!1),[d,m]=b.useState(!1),[f,g]=b.useState(null),v=b.useRef(null),x=b.useRef(null),w=!!n,y=b.useCallback(()=>l(z=>z+1),[]),p=b.useCallback(z=>{a(z),u(Eo(z)),g(null),l(T=>T+1)},[]),h=b.useCallback(async()=>{await $w(v.current,x.current),v.current=null,x.current=null},[]),k=b.useCallback((z,T)=>{v.current=T,x.current=z,a(z),u(!1),g(null),y()},[y]),N=b.useCallback(async(z,T)=>{m(!0),g(null);try{await h();const{hass:D,connection:U}=await Gw(z,T,y);k(D,U)}catch(D){throw g((D==null?void 0:D.message)||"Verbindung fehlgeschlagen"),D}finally{m(!1)}},[k,y,h]),E=b.useCallback(z=>{g(null),Zw(z)},[]),C=b.useCallback(async()=>{m(!0);try{await h(),a(r?Ks():null),u(!1),g(null),y()}finally{m(!1)}},[y,r,h]);b.useEffect(()=>{t&&(a(t),l(z=>z+1))},[t]),b.useEffect(()=>(n==null||n(p),()=>n==null?void 0:n(null)),[n,p]),b.useEffect(()=>{if(w||t)return;let z=!1;return(async()=>{m(!0);try{const T=await Xw(y);!z&&T?k(T.hass,T.connection):!z&&r&&(a(Ks()),y())}catch(T){z||(g((T==null?void 0:T.message)||"Verbindung fehlgeschlagen"),r&&(a(Ks()),y()))}finally{z||m(!1)}})(),()=>{z=!0}},[k,y,r,t,w]);const j=b.useMemo(()=>{const z=Eo(i);return{hass:i,revision:o,states:(i==null?void 0:i.states)||{},isConnected:z,isMock:!z&&!!i,isEmbedded:c,isConnecting:d,connectionError:f,hassUrl:Po(),getEntity:T=>Tt(i,T),callService:(T,D,U)=>Q(i,T,D,U),connect:N,login:E,disconnect:C}},[i,o,c,d,f,N,E,C]);return s.jsx(vg.Provider,{value:j,children:e})}function We(){const e=b.useContext(vg);if(!e)throw new Error("useHass must be used within HassProvider");return e}const e2=[{entity_id:"light.couch_links",label:"Couch links",icon:""},{entity_id:"light.couch_rechts",label:"Couch rechts",icon:""},{entity_id:"switch.shellypstripg4_d885aceaa49c_switch_0",label:"Kaffee Mühle",icon:""},{entity_id:"switch.shellypstripg4_d885aceaa49c_switch_2",label:"Wasserkocher",icon:""}],t2=[{entity_id:"scene.kino",label:"Kino",icon:""},{entity_id:"scene.wohnzimmer_abend",label:"Abend",icon:""},{entity_id:"scene.gute_nacht",label:"Gute Nacht",icon:""},{entity_id:"scene.wohnzimmer_normal",label:"Normal",icon:""}],n2={entity_id:"weather.openweather"},r2={entity_id:"media_player.wohnzimmer"},i2={entity_id:""},a2={entity_id:"todo.einkaufsliste"},o2={entity_id:"vacuum.roborock_qrevo_edge_series"},s2=[],l2="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2940&auto=format&fit=crop",Ca={quickActions:e2,scenes:t2,weather:n2,mediaPlayer:r2,camera:i2,shoppingList:a2,vacuum:o2,presence:s2,backgroundImage:l2},Tu="Beispieldaten · 18.06.2026",as="kWh",c2={title:"Energiefluss heute",subtitle:Tu,unit:as,nodes:[{id:"solar",name:"Photovoltaik",column:0,color:"#f9c802"},{id:"grid_in",name:"Netz (Bezug)",column:0,color:"#488fc2"},{id:"home",name:"Haus",column:1,color:"#4db6ac"},{id:"heating",name:"Heizung",column:2,color:"#e57373"},{id:"ev",name:"E-Auto",column:2,color:"#81c784"},{id:"household",name:"Haushalt",column:2,color:"#9575cd"},{id:"battery",name:"Batterie",column:2,color:"#4dd0e1"},{id:"grid_out",name:"Netz (Einspeisung)",column:2,color:"#64b5f6"}],links:[{source:"solar",target:"home",value:8.2},{source:"solar",target:"grid_out",value:2.1},{source:"solar",target:"battery",value:2.1},{source:"grid_in",target:"home",value:3.8},{source:"home",target:"heating",value:6.5},{source:"home",target:"ev",value:4.2},{source:"home",target:"household",value:1.3}]},u2={title:"Inputs / Outputs",subtitle:Tu,unit:as,inputs:[{id:"solar",name:"Photovoltaik",value:12.4,color:"#f9c802"},{id:"grid_in",name:"Netz (Bezug)",value:4.6,color:"#488fc2"},{id:"battery_out",name:"Batterie",value:1.2,color:"#4dd0e1"}],outputs:[{id:"consumption",name:"Verbrauch",value:13.2,color:"#4db6ac"},{id:"grid_out",name:"Einspeisung",value:2.1,color:"#64b5f6"},{id:"battery_in",name:"Batterie",value:2.1,color:"#26a69a"}]},d2={title:"E-Auto",subtitle:Tu,unit:as,items:[{id:"ev",name:"E-Auto",value:4.2,color:"#81c784",demoCharging:!0,sources:[{name:"Netz",value:2.8},{name:"PV",value:1.4}]},{id:"heatpump",name:"Wärmepumpe",value:3.1,color:"#e57373",demoLightOn:!0,sources:[{name:"Netz",value:2.1},{name:"PV",value:1}]}]},Mo={"inputs-outputs":{label:"Inputs / Outputs",description:"Quellen und Senken"},"ev-heatpump":{label:"E-Auto & Wärmepumpe",description:"Mobilität und Heizung"}};function Xn(e,t=as){return`${e>=10?e.toFixed(1):e.toFixed(2)} ${t}`}function m2(e){return e.links.filter(t=>{var n;return((n=e.nodes.find(r=>r.id===t.source))==null?void 0:n.column)===0}).reduce((t,n)=>t+n.value,0)}function f2(e){return e==="ev-heatpump"?d2:u2}function p2(e,t={}){const n=String(e||"").toLowerCase();if(["charging","on","true"].includes(n))return!0;if(["not charging","idle","off","false","disconnected","complete","finished"].includes(n))return!1;const r=Number(t.power??t.power_kw??t.current_power??t.charging_power);return!!(Number.isFinite(r)&&r>50)}function ra(e,t,n=!1){var a,o;const r=((a=e==null?void 0:e.ev)==null?void 0:a.stateEntity)||"";if(r)return r;const i=((o=t==null?void 0:t.ev)==null?void 0:o.stateEntity)||"";return i||(n?"binary_sensor.grandland_charging":"")}function xg(e,t=!1){var r;const n=((r=e==null?void 0:e.ev)==null?void 0:r.batteryEntity)||"";return n||(t?"sensor.grandland_battery":"")}function h2(e,t,n,r=!1){var a;const i=ra(t,n,r);return i?r?!0:!!((a=e==null?void 0:e.states)!=null&&a[i]):!1}function Pu(e,t,n=!1){var a;if(!t||!((a=e==null?void 0:e.states)!=null&&a[t]))return n;const r=e.states[t],i=ve(t);return i==="binary_sensor"?r.state==="on":i==="switch"||i==="input_boolean"?rs(r.state,i):p2(r.state,r.attributes)}const g2=["power","power_kw","current_power","charging_power","charge_power"];function Cm(e,t=""){if(!Number.isFinite(e))return null;const n=String(t).toLowerCase();return n==="kw"?e*1e3:n==="w"||n==="watt"?e:!n&&e>0&&e<=50?e*1e3:e}function Tm(e){var n,r;if(!e)return null;const t=Cm(Number(e.state),(n=e.attributes)==null?void 0:n.unit_of_measurement);if(t!=null&&t>0)return t;for(const i of g2){const a=Cm(Number((r=e.attributes)==null?void 0:r[i]));if(a!=null&&a>0)return a}return null}function y2(e,t,n=!1){var a,o;const r=((a=t==null?void 0:t.ev)==null?void 0:a.powerEntity)||"";if(r)return r;if(n)return"sensor.grandland_charge_power";const i=(((o=t==null?void 0:t.ev)==null?void 0:o.label)||"").trim().toLowerCase();if(i&&(e!=null&&e.states)){const l=Object.values(e.states).find(c=>{var d;const u=String(((d=c.attributes)==null?void 0:d.friendly_name)||"").toLowerCase();return u.includes(i)&&u.includes("ladeleistung")});if(l)return l.entity_id}return hi(e,t,["charge_power"])}const v2=["charging","connected","enabled","charge_power","vehicle_soc","vehicle_range","charge_remaining_duration","session_price","session_energy","charged_energy"],b2=new RegExp(`^(?:binary_)?sensor\\.evcc_(.+?)_(?:${v2.join("|")})$`);function Mu(e,t){const n=(t==null?void 0:t.ev)||{};for(const i of[n.stateEntity,n.powerEntity,n.batteryEntity,n.rangeEntity]){const a=String(i||"").match(b2);if(a)return a[1]}if(!(e!=null&&e.states))return"";const r=Object.keys(e.states).find(i=>/^binary_sensor\.evcc_.+_charging$/.test(i));return r?r.slice(19,-9):""}function hi(e,t,n){const r=Mu(e,t);if(!r||!(e!=null&&e.states))return"";for(const i of n){const a=`sensor.evcc_${r}_${i}`;if(e.states[a])return a}return""}function cr(e,t){var i;const n=t?(i=e==null?void 0:e.states)==null?void 0:i[t]:null;if(!n)return null;const r=Number(n.state);return Number.isFinite(r)?r:null}function x2(e,t){var l,c;const n=t?(l=e==null?void 0:e.states)==null?void 0:l[t]:null;if(!n)return null;const r=String(n.state??""),i=r.match(/^(\d+):(\d{2})(?::(\d{2}))?$/);if(i)return Number(i[1])*3600+Number(i[2])*60+Number(i[3]||0);const a=Number(r);if(!Number.isFinite(a))return null;const o=String(((c=n.attributes)==null?void 0:c.unit_of_measurement)||"s").toLowerCase();return o==="h"?a*3600:o==="min"?a*60:o==="d"?a*86400:a}function w2(e,t){var i;const n=cr(e,t);return n==null?null:String(((i=e.states[t].attributes)==null?void 0:i.unit_of_measurement)||"kWh").toLowerCase()==="wh"?n/1e3:n}function k2(e,t,n=!1){var y;const r=(t==null?void 0:t.ev)||{},i=p=>n?`sensor.grandland_${p}`:"",a=(p,h,k)=>p||hi(e,t,h)||i(k),o=ra(t,null,n),l=Pu(e,o,n),c=Mu(e,t),u=c?`binary_sensor.evcc_${c}_connected`:"",d=(y=e==null?void 0:e.states)!=null&&y[u]?e.states[u].state==="on":null;let m=kg(e,xg(t,n),null);if(m==null||m<=0){const p=cr(e,hi(e,t,["vehicle_soc"]));p!=null&&p>0&&(m=Math.min(100,Math.round(p)))}const f=cr(e,a(r.rangeEntity,["vehicle_range"],"range")),g=cr(e,hi(e,t,["effective_limit_soc","limit_soc"])),v=wg(e,t,n),x=x2(e,a(r.chargeTimeEntity,["charge_remaining_duration"],"charge_remaining")),w=a(r.costEntity,["session_price"],"cost_today");return{label:r.label||"E-Auto",charging:l,connected:d,soc:m,rangeKm:f!=null&&f>0?f:null,limitSoc:g!=null&&g>0?Math.min(100,Math.round(g)):100,powerWatts:l?v:0,remainingSeconds:l&&x>0?x:null,lastTripKm:cr(e,r.lastTripEntity||i("last_trip")),cost:cr(e,w),costIsSession:!r.costEntity&&!n,sessionKwh:w2(e,hi(e,t,["session_energy","charged_energy"]))}}function S2(e){if(e==null||!Number.isFinite(e))return"—";const t=Math.max(1,Math.round(e/60)),n=Math.floor(t/60),r=t%60;return n?r?`${n} h ${r} min`:`${n} h`:`${r} min`}function wg(e,t,n=!1){var a,o;const r=y2(e,t,n);if(r&&((a=e==null?void 0:e.states)!=null&&a[r])){const l=Tm(e.states[r]);if(l!=null)return l}const i=ra(t,null,n);if(i&&((o=e==null?void 0:e.states)!=null&&o[i])){const l=Tm(e.states[i]);if(l!=null)return l}return n?11e3:null}function zu(e){if(e==null||!Number.isFinite(e)||e<=0)return"—";const t=e/1e3;return`${t.toLocaleString("de-DE",{maximumFractionDigits:t>=1?1:2})} kW`}function kg(e,t,n=null){var o,l,c,u;if(!t||!((o=e==null?void 0:e.states)!=null&&o[t]))return n;const r=e.states[t],i=Number(r.state);if(Number.isFinite(i))return Math.min(100,Math.max(0,Math.round(i)));const a=Number(((l=r.attributes)==null?void 0:l.battery_level)??((c=r.attributes)==null?void 0:c.state_of_charge)??((u=r.attributes)==null?void 0:u.soc));return Number.isFinite(a)?Math.min(100,Math.max(0,Math.round(a))):n}function N2(e,t){var r;return`${((r=e==null?void 0:e.ev)==null?void 0:r.label)||"E-Auto"} lädt`}function A2(e,t,n=null){var o;const i=[`${((o=e==null?void 0:e.ev)==null?void 0:o.label)||"Grandland"} wird geladen`],a=zu(n);return a!=="—"&&i.push(a),t!=null&&i.push(`Akku ${t}%`),i.join(" · ")}const Pm="/local/grandland.png",Mm={ev:{charging:Pm,idle:Pm,stateEntity:""},heatpump:{lightOn:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",lightOff:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",lightEntity:""}},zm={charging:"Lädt",idle:"Nicht am Laden"},Lm={lightOn:"Mit Licht",lightOff:"Ohne Licht"};function Lu(e={}){return{ev:{...Mm.ev,...e.ev||{}},heatpump:{...Mm.heatpump,...e.heatpump||{}}}}function Gi(e){return Lu(e)}function j2(e,t,n=!1){var i;if(!t||!((i=e==null?void 0:e.states)!=null&&i[t]))return n;const r=e.states[t];return rs(r.state,ve(t))}function E2(e,t,n){const r=Lu(t),i=n?r.ev.charging:r.ev.idle;return Sg(e,i)}function C2(e,t,n){const r=Lu(t),i=n?r.heatpump.lightOn:r.heatpump.lightOff;return Sg(e,i)}function Sg(e,t){return t?Qr(e,t)||t:null}/*! js-yaml 5.4.3 https://github.com/nodeca/js-yaml @license MIT */var te=Symbol("NOT_RESOLVED");function Be(e,t){return{tagName:e,nodeKind:"scalar",implicit:t.implicit??!1,matchByTagPrefix:t.matchByTagPrefix??!1,implicitFirstChars:t.implicitFirstChars??null,resolve:t.resolve,identify:t.identify,represent:t.represent??(n=>String(n)),representTagName:t.representTagName??(()=>e)}}function Ou(e,t){const n=t.finalize===void 0;return{tagName:e,nodeKind:"sequence",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addItem:t.addItem,finalize:t.finalize??(r=>r),carrierIsResult:n,identify:t.identify,represent:t.represent??(r=>r),representTagName:t.representTagName??(()=>e)}}function os(e,t){const n=t.finalize===void 0;return{tagName:e,nodeKind:"mapping",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addPair:t.addPair,has:t.has,keys:t.keys,get:t.get,finalize:t.finalize??(r=>r),carrierIsResult:n,identify:t.identify,represent:t.represent??(r=>r),representTagName:t.representTagName??(()=>e)}}var T2=Be("tag:yaml.org,2002:str",{resolve:e=>e,identify:e=>typeof e=="string"}),P2=["","~","null","Null","NULL"],M2=Be("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>P2.indexOf(e)!==-1?null:te,identify:e=>e===null,represent:()=>"null"}),z2=Be("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["n"],resolve:(e,t)=>e==="null"||t&&e===""?null:te,identify:e=>e===null,represent:()=>"null"}),L2=["","~","null","Null","NULL"],O2=Be("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>L2.indexOf(e)!==-1?null:te,identify:e=>e===null,represent:()=>"null"}),I2=["true","True","TRUE"],R2=["false","False","FALSE"],D2=Be("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","T","f","F"],resolve:e=>I2.indexOf(e)!==-1?!0:R2.indexOf(e)!==-1?!1:te,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),F2=["true"],_2=["false"],W2=Be("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","f"],resolve:e=>F2.indexOf(e)!==-1?!0:_2.indexOf(e)!==-1?!1:te,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),B2=["true","True","TRUE","y","Y","yes","Yes","YES","on","On","ON"],H2=["false","False","FALSE","n","N","no","No","NO","off","Off","OFF"],q2=Be("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["y","Y","n","N","t","T","f","F","o","O"],resolve:e=>B2.indexOf(e)!==-1?!0:H2.indexOf(e)!==-1?!1:te,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),U2=new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"),Y2=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function K2(e){let t=e,n=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(n=-1),t=t.slice(1)),t.startsWith("0b")?n*parseInt(t.slice(2),2):t.startsWith("0o")?n*parseInt(t.slice(2),8):t.startsWith("0x")?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function V2(e,t){if(t){if(!Y2.test(e))return te}else if(!U2.test(e))return te;const n=K2(e);return Number.isFinite(n)?n:te}var Ng=Be("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:V2,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),G2=new RegExp("^-?(?:0|[1-9][0-9]*)$"),Q2=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function J2(e){let t=e,n=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(n=-1),t=t.slice(1)),t.startsWith("0b")?n*parseInt(t.slice(2),2):t.startsWith("0o")?n*parseInt(t.slice(2),8):t.startsWith("0x")?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function X2(e,t){if(t){if(!Q2.test(e))return te}else if(!G2.test(e))return te;const n=J2(e);return Number.isFinite(n)?n:te}var Z2=Be("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:X2,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),$2=new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");function e5(e){let t=e.replace(/_/g,""),n=1;if((t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(n=-1),t=t.slice(1)),t.startsWith("0b"))return n*parseInt(t.slice(2),2);if(t.startsWith("0x"))return n*parseInt(t.slice(2),16);if(t.includes(":")){let r=0;for(const i of t.split(":"))r=r*60+Number(i);return n*r}return t!=="0"&&t[0]==="0"?n*parseInt(t,8):n*parseInt(t,10)}function t5(e){if(!$2.test(e))return te;const t=e5(e);return Number.isFinite(t)?t:te}var ec=Be("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:t5,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),n5=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),r5=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function i5(e){if(!n5.test(e))return te;let t=e.toLowerCase();const n=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;const r=n*parseFloat(t);return Number.isFinite(r)||r5.test(e)?r:te}function a5(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var Ag=Be("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:i5,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:a5}),o5=new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"),s5=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function l5(e,t){if(t){if(!s5.test(e))return te;let r=e.toLowerCase();const i=r[0]==="-"?-1:1;if("+-".includes(r[0])&&(r=r.slice(1)),r===".inf")return i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(r===".nan")return NaN;const a=i*parseFloat(r);return Number.isFinite(a)?a:te}if(!o5.test(e))return te;const n=Number(e);return Number.isFinite(n)?n:te}function c5(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var u5=Be("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:l5,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:c5}),d5=new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),m5=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function f5(e){if(!d5.test(e))return te;let t=e.toLowerCase().replace(/_/g,"");const n=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;let r=0;if(t.includes(":")){for(const i of t.split(":"))r=r*60+Number(i);r*=n}else r=n*parseFloat(t);return Number.isFinite(r)||m5.test(e)?r:te}function p5(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var tc=Be("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:f5,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:p5}),h5=Be("tag:yaml.org,2002:merge",{implicit:!0,implicitFirstChars:["<"],resolve:(e,t)=>e==="<<"||t&&e===""?"<<":te,identify:()=>!1}),g5=/^[A-Za-z0-9+/]*={0,2}$/;function y5(e){const t=e.replace(/\s/g,"");if(t.length%4!==0||!g5.test(t))return te;const n=atob(t),r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}function v5(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}var b5=Be("tag:yaml.org,2002:binary",{resolve:y5,identify:e=>Object.prototype.toString.call(e)==="[object Uint8Array]",represent:v5}),x5=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),w5=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Om(e,t,n,r=0,i=0,a=0,o=0){const l=new Date(Date.UTC(e,t,n,r,i,a,o));return l.setUTCFullYear(e,t,n),l}function k5(e){let t=x5.exec(e);if(t===null&&(t=w5.exec(e)),t===null)return te;const n=+t[1],r=+t[2]-1,i=+t[3];if(!t[4]){const d=Om(n,r,i);return d.getUTCFullYear()!==n||d.getUTCMonth()!==r||d.getUTCDate()!==i?te:d}const a=+t[4],o=+t[5],l=+t[6];let c=0;if(a>23||o>59||l>59)return te;if(t[7]){let d=t[7].slice(0,3);for(;d.length<3;)d+="0";c=+d}const u=Om(n,r,i,a,o,l,c);if(u.getUTCFullYear()!==n||u.getUTCMonth()!==r||u.getUTCDate()!==i)return te;if(t[9]){const d=+t[10],m=+(t[11]||0);if(d>23||m>59)return te;const f=(d*60+m)*6e4;u.setTime(u.getTime()-(t[9]==="-"?-f:f))}return u}var S5=Be("tag:yaml.org,2002:timestamp",{implicit:!0,implicitFirstChars:[..."0123456789"],resolve:k5,identify:e=>e instanceof Date,represent:e=>e.toISOString()}),N5=Ou("tag:yaml.org,2002:seq",{create:()=>[],addItem:(e,t)=>{e.push(t)},identify:Array.isArray});function ss(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function nc(e,t){const n={};for(const r of t)e[r]!==void 0&&(n[r]=e[r]);return n}var A5=Ou("tag:yaml.org,2002:omap",{create:()=>({list:[],seen:new Set}),addItem:(e,t)=>{let n;if(t instanceof Map){if(t.size!==1)return"cannot resolve an ordered map item";n=t.keys().next().value}else if(ss(t)){const r=Object.keys(t);if(r.length!==1)return"cannot resolve an ordered map item";n=r[0]}else return"cannot resolve an ordered map item";return e.seen.has(n)?"duplicate key in ordered map":(e.seen.add(n),e.list.push(t),"")},finalize:e=>e.list,identify:()=>!1}),j5=Ou("tag:yaml.org,2002:pairs",{create:()=>[],addItem:(e,t)=>{if(t instanceof Map)return t.size!==1?"cannot resolve a pairs item":(e.push(t.entries().next().value),"");if(Object.prototype.toString.call(t)!=="[object Object]")return"cannot resolve a pairs item";const n=t,r=Object.keys(n);return r.length!==1?"cannot resolve a pairs item":(e.push([r[0],n[r[0]]]),"")},identify:()=>!1}),E5=os("tag:yaml.org,2002:map",{create:()=>({}),identify:ss,represent:e=>{const t=new Map;for(const n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{if(t!==null&&typeof t=="object")return"object-based map does not support complex keys";const r=String(t);return r==="__proto__"?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,""},has:(e,t)=>t!==null&&typeof t=="object"?!1:Object.prototype.hasOwnProperty.call(e,String(t)),keys:e=>Object.keys(e),get:(e,t)=>{const n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}}),C5=os("tag:yaml.org,2002:set",{create:()=>new Set,identify:e=>e instanceof Set,represent:e=>{const t=new Map;for(const n of e)t.set(n,null);return t},addPair:(e,t,n)=>n!==null?"cannot resolve a set item":(e.add(t),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:()=>null});function T5(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function P5(){return{scalar:[],sequence:[],mapping:[]}}function M5(e){const t=[];for(const n of e){let r=t.length;for(let i=0;i<t.length;i++){const a=t[i];if(a.nodeKind===n.nodeKind&&a.tagName===n.tagName&&a.matchByTagPrefix===n.matchByTagPrefix){r=i;break}}t[r]=n}return t}var ls=class jg{constructor(t){dt(this,"tags");dt(this,"implicitScalarTags");dt(this,"implicitScalarByFirstChar");dt(this,"implicitScalarAnyFirstChar");dt(this,"defaultScalarTag");dt(this,"defaultSequenceTag");dt(this,"defaultMappingTag");dt(this,"exact");dt(this,"prefix");const n=M5(t),r=[],i=T5(),a=P5();for(const d of n){if(d.nodeKind==="scalar"&&d.implicit){if(d.matchByTagPrefix)throw new Error("Implicit scalar tags cannot match by tag prefix");r.push(d)}switch(d.nodeKind){case"scalar":d.matchByTagPrefix?a.scalar.push(d):i.scalar[d.tagName]=d;break;case"sequence":d.matchByTagPrefix?a.sequence.push(d):i.sequence[d.tagName]=d;break;case"mapping":d.matchByTagPrefix?a.mapping.push(d):i.mapping[d.tagName]=d;break}}const o=r.filter(d=>d.implicitFirstChars===null),l=new Set;for(const d of r)if(d.implicitFirstChars!==null)for(const m of d.implicitFirstChars)l.add(m);const c=new Map;for(const d of l)c.set(d,r.filter(m=>m.implicitFirstChars===null||m.implicitFirstChars.indexOf(d)!==-1));const u=i.scalar["tag:yaml.org,2002:str"];if(!u)throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");this.tags=n,this.implicitScalarTags=r,this.implicitScalarByFirstChar=c,this.implicitScalarAnyFirstChar=o,this.defaultScalarTag=u,this.defaultSequenceTag=i.sequence["tag:yaml.org,2002:seq"],this.defaultMappingTag=i.mapping["tag:yaml.org,2002:map"],this.exact=i,this.prefix=a}lookupScalarTag(t){const n=this.exact.scalar[t];if(n)return n;for(const r of this.prefix.scalar)if(t.startsWith(r.tagName))return r}lookupSequenceTag(t){const n=this.exact.sequence[t];if(n)return n;for(const r of this.prefix.sequence)if(t.startsWith(r.tagName))return r}lookupMappingTag(t){const n=this.exact.mapping[t];if(n)return n;for(const r of this.prefix.mapping)if(t.startsWith(r.tagName))return r}resolveImplicitScalarTag(t){const n=this.implicitScalarByFirstChar.get(t.charAt(0))??this.implicitScalarAnyFirstChar;for(const i of n){const a=i.resolve(t,!1,i.tagName);if(a!==te)return{value:a,tag:i}}const r=this.defaultScalarTag;return{value:r.resolve(t,!1,r.tagName),tag:r}}withTags(...t){let n=[];for(const r of t)n=n.concat(r);return new jg([...this.tags,...n])}},Iu=new ls([T2,N5,E5]);new ls([...Iu.tags,z2,W2,Z2,u5]);var z5=new ls([...Iu.tags,M2,D2,Ng,Ag]),L5=new ls([...Iu.tags,O2,q2,ec,tc,S5,h5,b5,A5,j5,C5]),O5=L5.withTags({...ec,resolve:(e,t,n)=>{const r=ec.resolve(e,t,n);return r===te?Ng.resolve(e,t,n):r}},{...tc,resolve:(e,t,n)=>{const r=tc.resolve(e,t,n);return r===te?Ag.resolve(e,t,n):r}});os("tag:yaml.org,2002:map",{create:()=>new Map,addPair:(e,t,n)=>(e.set(t,n),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:(e,t)=>e.get(t),identify:e=>e instanceof Map||ss(e),represent:e=>{if(e instanceof Map)return e;const t=new Map,n=e;for(const r of Object.keys(n))t.set(r,n[r]);return t}});function Im(e){if(Array.isArray(e)){const t=Array.prototype.slice.call(e);for(let n=0;n<t.length;n++){if(Array.isArray(t[n]))return null;typeof t[n]=="object"&&Object.prototype.toString.call(t[n])==="[object Object]"&&(t[n]="[object Object]")}return String(t)}return typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"?"[object Object]":String(e)}os("tag:yaml.org,2002:map",{create:()=>({}),identify:ss,represent:e=>{const t=new Map;for(const n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{const r=Im(t);return r===null?"nested arrays are not supported inside keys":(r==="__proto__"?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,"")},has:(e,t)=>{const n=Im(t);return n!==null&&Object.prototype.hasOwnProperty.call(e,n)},keys:e=>Object.keys(e),get:(e,t)=>{const n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}});var I5={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function Gs(e,t,n,r,i){let a="",o="";const l=Math.floor(i/2)-1;return r-t>l&&(a=" ... ",t=r-l+a.length),n-r>l&&(o=" ...",n=r+l-o.length),{str:a+e.slice(t,n).replace(/\t/g,"→")+o,pos:r-t+a.length}}function Qs(e,t){return" ".repeat(Math.max(t-e.length,0))+e}function R5(e,t){if(!e.buffer)return null;const n={...I5,...t},r=/\r?\n|\r|\0/g,i=[0],a=[];let o,l=-1;for(;o=r.exec(e.buffer);)a.push(o.index),i.push(o.index+o[0].length),e.position<=o.index&&l<0&&(l=i.length-2);l<0&&(l=i.length-1);let c="";const u=Math.min(e.line+n.linesAfter,a.length).toString().length,d=n.maxLength-(n.indent+u+3);for(let f=1;f<=n.linesBefore&&!(l-f<0);f++){const g=Gs(e.buffer,i[l-f],a[l-f],e.position-(i[l]-i[l-f]),d);c=`${" ".repeat(n.indent)}${Qs((e.line-f+1).toString(),u)} | ${g.str}
${c}`}const m=Gs(e.buffer,i[l],a[l],e.position,d);c+=`${" ".repeat(n.indent)}${Qs((e.line+1).toString(),u)} | ${m.str}
`,c+=`${"-".repeat(n.indent+u+3+m.pos)}^
`;for(let f=1;f<=n.linesAfter&&!(l+f>=a.length);f++){const g=Gs(e.buffer,i[l+f],a[l+f],e.position-(i[l]-i[l+f]),d);c+=`${" ".repeat(n.indent)}${Qs((e.line+f+1).toString(),u)} | ${g.str}
`}return c.replace(/\n$/,"")}function Rm(e,t){let n="";return e.mark?(e.mark.name&&(n+=`in "${e.mark.name}" `),n+=`(${e.mark.line+1}:${e.mark.column+1})`,!t&&e.mark.snippet&&(n+=`

${e.mark.snippet}`),`${e.reason} ${n}`):e.reason}var jn=class Eg extends Error{constructor(n,r){super();dt(this,"reason");dt(this,"mark");this.name="YAMLException",this.reason=n,this.mark=r,this.message=Rm(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(n){return`${this.name}: ${Rm(this,n)}`}static throwAt(n,r,i,a=""){let o=0,l=0;for(let u=0;u<r;u++){const d=n.charCodeAt(u);d===10?(o++,l=u+1):d===13&&(o++,n.charCodeAt(u+1)===10&&u++,l=u+1)}const c={name:a,buffer:n,position:r,line:o,column:r-l};throw c.snippet=R5(c),new Eg(i,c)}},Me={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6},Y={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5},xt={BLOCK:1,FLOW:2},Dt={CLIP:1,STRIP:2,KEEP:3},D5=-1;function Dm(e){switch(e){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}var Cg=new Array(256),Tg=new Array(256);for(let e=0;e<256;e++)Cg[e]=Dm(e)?1:0,Tg[e]=Dm(e);function F5(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function _5(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function W5(e){return e===120?2:e===117?4:8}function zo(e,t,n){let r=0;for(;t<n;){const i=e.charCodeAt(t);if(i===10)r++,t++;else if(i===13)r++,t++,e.charCodeAt(t)===10&&t++;else if(i===32||i===9)t++;else break}return{position:t,breaks:r}}function Ru(e){return e===1?" ":`
`.repeat(e-1)}function B5(e,t,n){let r="",i=t,a=t,o=t;for(;i<n;){const l=e.charCodeAt(i);if(l===10||l===13){r+=e.slice(a,o);const c=zo(e,i,n);r+=Ru(c.breaks),i=a=o=c.position}else i++,l!==32&&l!==9&&(o=i)}return r+e.slice(a,o)}function H5(e,t,n){let r="",i=t,a=t,o=t;for(;i<n;){const l=e.charCodeAt(i);if(l===39)r+=e.slice(a,i)+"'",i+=2,a=o=i;else if(l===10||l===13){r+=e.slice(a,o);const c=zo(e,i,n);r+=Ru(c.breaks),i=a=o=c.position}else i++,l!==32&&l!==9&&(o=i)}return r+e.slice(a,n)}function q5(e,t,n){let r="",i=t,a=t,o=t;for(;i<n;){const l=e.charCodeAt(i);if(l===92){r+=e.slice(a,i),i++;const c=e.charCodeAt(i);if(c===10||c===13)i=zo(e,i,n).position;else if(c<256&&Cg[c])r+=Tg[c],i++;else{let u=W5(c),d=0;for(;u>0;u--){i++;const m=_5(e.charCodeAt(i));d=(d<<4)+m}r+=F5(d),i++}a=o=i}else if(l===10||l===13){r+=e.slice(a,o);const c=zo(e,i,n);r+=Ru(c.breaks),i=a=o=c.position}else i++,l!==32&&l!==9&&(o=i)}return r+e.slice(a,n)}function Fm(e,t,n,r,i,a){const o=r<0?0:r,l=e.slice(t,n).replace(/\r\n?/g,`
`),c=l===""?[]:(l.endsWith(`
`)?l.slice(0,-1):l).split(`
`);let u="",d=!1,m=0,f=!1;for(const g of c){let v=0;for(;v<o&&g.charCodeAt(v)===32;)v++;if(r<0||v>=g.length){m++;continue}const x=g.slice(o),w=x.charCodeAt(0);a?w===32||w===9?(f=!0,u+=`
`.repeat(d?1+m:m)):f?(f=!1,u+=`
`.repeat(m+1)):m===0?d&&(u+=" "):u+=`
`.repeat(m):u+=`
`.repeat(d?1+m:m),u+=x,d=!0,m=0}return i===Dt.KEEP?u+=`
`.repeat(d?1+m:m):i!==Dt.STRIP&&d&&(u+=`
`),u}function U5(e,t){if(t.valueStart===D5)return"";const{valueStart:n,valueEnd:r}=t;if(t.fast)return e.slice(n,r);switch(t.style){case Y.SINGLE_QUOTED:return H5(e,n,r);case Y.DOUBLE_QUOTED:return q5(e,n,r);case Y.LITERAL_BLOCK:return Fm(e,n,r,t.indent,t.chomping,!1);case Y.FOLDED_BLOCK:return Fm(e,n,r,t.indent,t.chomping,!0);default:return B5(e,n,r)}}var Y5=Object.assign(Object.create(null),{"!":"!","!!":"tag:yaml.org,2002:"});function Js(e){return encodeURI(e).replace(/!/g,"%21")}function Pg(e,t){if(e.startsWith("!<")&&e.endsWith(">"))return decodeURIComponent(e.slice(2,-1));const n=e.indexOf("!",1),r=n===-1?"!":e.slice(0,n+1),i=(t==null?void 0:t[r])??Y5[r]??r;return decodeURIComponent(i)+decodeURIComponent(e.slice(r.length))}function Mg(e){let t=e;return t.charCodeAt(0)===33?(t=t.slice(1),`!${Js(t)}`):t.slice(0,18)==="tag:yaml.org,2002:"?`!!${Js(t.slice(18))}`:`!<${Js(t)}>`}var Pr=-1,K5="tag:yaml.org,2002:merge",Du={filename:"",schema:z5,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function V5(e){return"tagStart"in e&&e.tagStart!==Pr?e.tagStart:"anchorStart"in e&&e.anchorStart!==Pr?e.anchorStart:"valueStart"in e&&e.valueStart!==Pr?e.valueStart:"start"in e?e.start:0}function ze(e,t){jn.throwAt(e.source,e.position,t,e.filename)}function zg(e,t,n,r){try{return n.finalize(r)}catch(i){if(i instanceof jn)throw i;jn.throwAt(e.source,t,i instanceof Error?i.message:String(i),e.filename)}}function G5(e,t){const n=U5(e.source,t),r=t.tagStart===Pr?"":e.source.slice(t.tagStart,t.tagEnd),i=e.schema.defaultScalarTag;if(r!==""){if(r==="!")return{value:n,tag:i};const a=Pg(r,e.tagHandlers),o=e.schema.lookupScalarTag(a);if(o){const c=o.resolve(n,!0,a);return c===te&&ze(e,`cannot resolve a node with !<${a}> explicit tag`),{value:c,tag:o}}const l=e.schema.lookupMappingTag(a)??e.schema.lookupSequenceTag(a);if(l){n!==""&&ze(e,`cannot resolve a node with !<${a}> explicit tag`);const c=l.create(a);return{value:l.carrierIsResult?c:zg(e,e.position,l,c),tag:l}}ze(e,`unknown scalar tag !<${a}>`)}return t.style===Y.PLAIN?e.schema.resolveImplicitScalarTag(n):{value:i.resolve(n,!1,i.tagName),tag:i}}function _m(e,t,n){const r=t.tagStart===Pr?"":e.source.slice(t.tagStart,t.tagEnd);return r===""||r==="!"?n:Pg(r,e.tagHandlers)}function Lg(e){return e.nodeKind==="mapping"}function Wm(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&ze(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`)}function Bm(e,t,n,r){Wm(e);for(const i of r.keys(n)){if(Wm(e),t.tag.has(t.value,i))continue;const a=t.tag.addPair(t.value,i,r.get(n,i));a&&ze(e,a),t.overridable??(t.overridable=new Set),t.overridable.add(i)}}function Q5(e,t,n,r){if(e.position=t.keyPosition,Lg(r))Bm(e,t,n,r);else if(r.nodeKind==="sequence"&&Array.isArray(n)){n.length>100&&ze(e,"abnormal merge sequence size");for(const i of n){const a=e.nodeTags.get(i);a||ze(e,"cannot merge mappings; the provided source object is unacceptable"),Bm(e,t,i,a)}}else ze(e,"cannot merge mappings; the provided source object is unacceptable")}function J5(e,t,n,r,i){var o,l;if(e.position=t.keyPosition,t.keyIsMerge){Q5(e,t,r,i);return}!e.json&&t.tag.has(t.value,n)&&!((o=t.overridable)!=null&&o.has(n))&&ze(e,"duplicated mapping key");const a=t.tag.addPair(t.value,n,r);a&&ze(e,a),(l=t.overridable)==null||l.delete(n)}function Xs(e,t,n){const r=e.frames[e.frames.length-1];if(r.kind==="document")r.value=t,r.hasValue=!0;else if(r.kind==="sequence"){Lg(n)&&e.nodeTags.set(t,n);const i=r.tag.addItem(r.value,t,r.index++);i&&ze(e,i)}else if(r.hasKey){const i=r.key;r.key=void 0,r.hasKey=!1,J5(e,r,i,t,n)}else r.key=t,r.keyPosition=e.position,r.hasKey=!0,r.keyIsMerge=n.tagName===K5}function Zs(e,t,n,r,i){if(t.anchorStart!==Pr){const a={value:n,tag:r,isValueFinal:i};return e.anchors.set(e.source.slice(t.anchorStart,t.anchorEnd),a),a}return null}function X5(e,t){const n={...Du,...t,events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:new Map,nodeTags:new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0};for(;n.eventIndex<n.events.length;){const r=n.events[n.eventIndex++];switch(n.position=V5(r),r.type){case Me.DOCUMENT:n.anchors=new Map,n.nodeTags=new Map,n.aliasCount=0,n.tagHandlers=Object.create(null);for(const i of r.directives)i.kind==="tag"&&(n.tagHandlers[i.handle]=i.prefix);n.frames.push({kind:"document",position:n.position,value:void 0,hasValue:!1});break;case Me.SCALAR:{const{value:i,tag:a}=G5(n,r);Zs(n,r,i,a,!0),Xs(n,i,a);break}case Me.SEQUENCE:{const i=_m(n,r,"tag:yaml.org,2002:seq"),a=n.schema.lookupSequenceTag(i);a||ze(n,`unknown sequence tag !<${i}>`);const o=a.create(i),l=Zs(n,r,o,a,a.carrierIsResult);n.frames.push({kind:"sequence",position:n.position,value:o,tag:a,anchor:l,index:0});break}case Me.MAPPING:{const i=_m(n,r,"tag:yaml.org,2002:map"),a=n.schema.lookupMappingTag(i);a||ze(n,`unknown mapping tag !<${i}>`);const o=a.create(i),l=Zs(n,r,o,a,a.carrierIsResult);n.frames.push({kind:"mapping",position:n.position,value:o,tag:a,anchor:l,key:void 0,keyPosition:n.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case Me.ALIAS:{n.maxAliases!==-1&&++n.aliasCount>n.maxAliases&&ze(n,`aliases exceeded maxAliases (${n.maxAliases})`);const i=n.source.slice(r.anchorStart,r.anchorEnd),a=n.anchors.get(i);a||ze(n,`unidentified alias "${i}"`),a.isValueFinal||ze(n,`recursive alias "${i}" is not supported for tag ${a.tag.tagName} because it uses finalize()`),Xs(n,a.value,a.tag);break}case Me.POP:{const i=n.frames.pop();if(i.kind==="mapping"&&i.hasKey&&(n.position=i.keyPosition,ze(n,"incomplete mapping pair in event stream")),i.kind==="document")n.documents.push(i.value);else{const a=i.tag.carrierIsResult?i.value:zg(n,i.position,i.tag,i.value);i.anchor&&(i.anchor.value=a,i.anchor.isValueFinal=!0),Xs(n,a,i.tag)}break}}}return n.documents}var re=-1,Og=Object.prototype.hasOwnProperty,Br=1,Ig=2,Rg=3,Lo=4,Z5=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,$5=/[,\[\]{}]/,Dg=/^(?:!|!!|![0-9A-Za-z-]+!)$/,rc=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`,Fg=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`,ek=new RegExp(`^(?:${rc})*$`),tk=new RegExp(`^(?:${Fg})+$`),nk=new RegExp(`^(?:!(?:${rc})*|${Fg}(?:${rc})*)$`),Fu={filename:"",maxDepth:100};function rk(e,t,n){e.events.push({type:Me.DOCUMENT,explicitStart:t,explicitEnd:n,directives:e.directives})}function _g(e,t,n,r,i,a,o){e.events.push({type:Me.SEQUENCE,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:a,style:o})}function Wg(e,t,n,r,i,a,o){e.events.push({type:Me.MAPPING,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:a,style:o})}function Hm(e,t){e.events.splice(t.eventsLength,0,{type:Me.MAPPING,start:t.position,anchorStart:re,anchorEnd:re,tagStart:re,tagEnd:re,style:xt.FLOW})}function Jr(e,t,n,r,i,a,o,l,c=Dt.CLIP,u=-1,d=!1){e.events.push({type:Me.SCALAR,valueStart:t,valueEnd:n,anchorStart:r,anchorEnd:i,tagStart:a,tagEnd:o,style:l,chomping:c,indent:u,fast:d})}function ik(e,t,n){e.events.push({type:Me.ALIAS,anchorStart:t,anchorEnd:n})}function Mr(e){e.events.push({type:Me.POP})}function Ue(e){Jr(e,re,re,re,re,re,re,Y.PLAIN)}function qm(){return{anchorStart:re,anchorEnd:re,tagStart:re,tagEnd:re}}function zr(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function Lr(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.events.length=t.eventsLength}function q(e,t){jn.throwAt(e.input.slice(0,e.length),e.position,t,e.filename)}function je(e){return e===10||e===13}function Xr(e){return e===9||e===32}function Pt(e){return Xr(e)||je(e)}function Gt(e){return e===0||Pt(e)}function Zn(e){return e===44||e===91||e===93||e===123||e===125}function ak(e){return e>=48&&e<=57?e-48:-1}function ok(e){if(e>=48&&e<=57)return e-48;const t=e|32;return t>=97&&t<=102?t-97+10:-1}function sk(e){return e===120?2:e===117?4:e===85?8:0}function lk(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function Oo(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function Fe(e,t){let n=0,r=e.input.charCodeAt(e.position),i=e.position===e.lineStart||Pt(e.input.charCodeAt(e.position-1));for(;r!==0;){for(;Xr(r);)i=!0,r===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&i&&r===35)do r=e.input.charCodeAt(++e.position);while(!je(r)&&r!==0);if(!je(r))break;for(Oo(e),n++,i=!0,r=e.input.charCodeAt(e.position);r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return n}function Hr(e,t=e.position){const n=e.input.charCodeAt(t);if((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)){const r=e.input.charCodeAt(t+3);return r===0||Pt(r)}return!1}function Bg(e){e.position===e.lineStart&&e.input.charCodeAt(e.position)===65279&&(e.position++,e.lineStart=e.position)}function _u(e){if(e.position!==e.lineStart)return!1;if(Hr(e))return!0;if(e.input.charCodeAt(e.position)!==65279)return!1;const t=zr(e);Bg(e),Fe(e,!0);const n=e.input.charCodeAt(e.position),r=e.position===e.lineStart&&(n===37||n===45&&Hr(e));return Lr(e,t),r}function Um(e){let t=e.input.charCodeAt(e.position);for(;t!==0&&!je(t);)t=e.input.charCodeAt(++e.position)}function Hg(e,t,n){Z5.test(e.input.slice(t,n))&&q(e,"the stream contains non-printable characters")}function ck(e,t,n){if(e.input.charCodeAt(e.position)!==33)return!1;t.tagStart!==re&&q(e,"duplication of a tag property");const r=e.position;let i=!1,a=!1,o="!",l=e.input.charCodeAt(++e.position);l===60?(i=!0,l=e.input.charCodeAt(++e.position)):l===33&&(a=!0,o="!!",l=e.input.charCodeAt(++e.position));let c=e.position,u;if(i){for(;l!==0&&l!==62;)l=e.input.charCodeAt(++e.position);l!==62&&q(e,"unexpected end of the stream within a verbatim tag"),u=e.input.slice(c,e.position),e.position++}else{for(;l!==0&&!Pt(l)&&!(n&&Zn(l));)l===33&&(a?q(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(c-1,e.position+1),Dg.test(o)||q(e,"named tag handle cannot contain such characters"),a=!0,c=e.position+1)),l=e.input.charCodeAt(++e.position);u=e.input.slice(c,e.position),$5.test(u)&&q(e,"tag suffix cannot contain flow indicator characters")}return u&&!(i?ek.test(u):tk.test(u))&&q(e,`tag name cannot contain such characters: ${u}`),!i&&o!=="!"&&o!=="!!"&&!Og.call(e.tagHandlers,o)&&q(e,`undeclared tag handle "${o}"`),t.tagStart=r,t.tagEnd=e.position,!0}function uk(e,t){if(e.input.charCodeAt(e.position)!==38)return!1;t.anchorStart!==re&&q(e,"duplication of an anchor property"),e.position++;const n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Pt(e.input.charCodeAt(e.position))&&!Zn(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&q(e,"name of an anchor node must contain at least one character"),t.anchorStart=n,t.anchorEnd=e.position,!0}function dk(e,t){if(e.input.charCodeAt(e.position)!==42)return!1;(t.anchorStart!==re||t.tagStart!==re)&&q(e,"alias node should not have any properties"),e.position++;const n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Pt(e.input.charCodeAt(e.position))&&!Zn(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&q(e,"name of an alias node must contain at least one character"),ik(e,n,e.position),!0}function ic(e,t){Fe(e,!1),e.lineIndent<t&&q(e,"deficient indentation")}function mk(e,t,n){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;const r=e.position;let i=!0;for(;e.input.charCodeAt(e.position)!==0;){const a=e.input.charCodeAt(e.position);if(a===39){if(e.input.charCodeAt(e.position+1)===39){i=!1,e.position+=2;continue}const o=e.position;return e.position++,Jr(e,r,o,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,Y.SINGLE_QUOTED,Dt.CLIP,-1,i),!0}je(a)?(i=!1,ic(e,t)):e.position===e.lineStart&&Hr(e)?q(e,"unexpected end of the document within a single quoted scalar"):a!==9&&a<32?q(e,"expected valid JSON character"):e.position++}q(e,"unexpected end of the stream within a single quoted scalar")}function fk(e,t,n){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;const r=e.position;let i=!0;for(;e.input.charCodeAt(e.position)!==0;){const a=e.input.charCodeAt(e.position);if(a===34){const o=e.position;return e.position++,Jr(e,r,o,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,Y.DOUBLE_QUOTED,Dt.CLIP,-1,i),!0}if(a===92){i=!1;const o=e.input.charCodeAt(++e.position);if(je(o))ic(e,t);else if(lk(o))e.position++;else{let l=sk(o);for(l===0&&q(e,"unknown escape sequence");l-- >0;)e.position++,ok(e.input.charCodeAt(e.position))<0&&q(e,"expected hexadecimal character");e.position++}}else je(a)?(i=!1,ic(e,t)):e.position===e.lineStart&&Hr(e)?q(e,"unexpected end of the document within a double quoted scalar"):a!==9&&a<32?q(e,"expected valid JSON character"):e.position++}q(e,"unexpected end of the stream within a double quoted scalar")}function pk(e,t,n){const r=e.input.charCodeAt(e.position);let i=Dt.CLIP,a=-1,o=!1;if(r!==124&&r!==62)return!1;const l=r===124?Y.LITERAL_BLOCK:Y.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){const g=e.input.charCodeAt(e.position),v=ak(g);if(g===43||g===45)i!==Dt.CLIP&&q(e,"repeat of a chomping mode identifier"),i=g===43?Dt.KEEP:Dt.STRIP,e.position++;else if(v>=0)v===0&&q(e,"bad explicit indentation width of a block scalar; it cannot be less than one"),o&&q(e,"repeat of an indentation width identifier"),a=t+v-1,o=!0,e.position++;else break}let c=!1;for(;Xr(e.input.charCodeAt(e.position));)c=!0,e.position++;c&&e.input.charCodeAt(e.position)===35&&Um(e),je(e.input.charCodeAt(e.position))?Oo(e):e.input.charCodeAt(e.position)!==0&&q(e,"a line break is expected");let u=o?a:-1,d=0;const m=e.position;let f=e.position;for(;e.input.charCodeAt(e.position)!==0;){const g=e.position;let v=0;for(;e.input.charCodeAt(g+v)===32;)v++;const x=e.input.charCodeAt(g+v);if(x===0){u>=0?v>u&&(f=g+v):v>0&&(f=g+v);break}if(_u(e))break;if(!o&&u===-1&&je(x)&&(d=Math.max(d,v)),!o&&u===-1&&!je(x)&&(x===9&&v<t&&(e.position=g+v,q(e,"tab characters must not be used in indentation")),v>=t&&v<d&&(e.position=g+v,q(e,"bad indentation of a mapping entry"))),u===-1&&x!==0&&!je(x)&&v<t){e.lineIndent=v,e.position=g+v;break}!o&&x!==0&&!je(x)&&u===-1&&(u=v);const w=u===-1?t+1:u;if(x!==0&&!je(x)&&v<w){e.lineIndent=v,e.position=g+v;break}Um(e),f=e.position,je(e.input.charCodeAt(e.position))&&(Oo(e),f=e.position)}return Hg(e,m,f),Jr(e,m,f,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,l,i,u),!0}function hk(e,t){const n=e.input.charCodeAt(e.position),r=t===Br;if(n===0||Pt(n)||n===35||n===38||n===42||n===33||n===124||n===62||n===39||n===34||n===37||n===64||n===96||r&&Zn(n))return!1;if(n===63||n===45){const i=e.input.charCodeAt(e.position+1);if(Gt(i)||r&&Zn(i))return!1}return!0}function gk(e,t,n,r){if(!hk(e,n))return!1;const i=e.position;let a=e.position,o=e.input.charCodeAt(e.position);const l=n===Br;let c=!1;for(;o!==0&&!_u(e);){if(o===58){const u=e.input.charCodeAt(e.position+1);if(Gt(u)||l&&Zn(u))break}else if(o===35){if(Pt(e.input.charCodeAt(e.position-1)))break}else{if(l&&Zn(o))break;if(je(o)){const u=e.position,d=e.line,m=e.lineStart,f=e.lineIndent;if(Fe(e,!1),e.lineIndent>=t){c=!0,o=e.input.charCodeAt(e.position);continue}e.position=u,e.line=d,e.lineStart=m,e.lineIndent=f;break}}Xr(o)||(a=e.position+1),o=e.input.charCodeAt(++e.position)}return a===i?!1:(Hg(e,i,a),Jr(e,i,a,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,Y.PLAIN,Dt.CLIP,-1,!c),!0)}function li(e,t){const n=e.line;Fe(e,!0),(e.line>n&&e.lineIndent<t||e.firstTabInLine!==-1&&e.lineIndent<t)&&q(e,"deficient indentation")}function yk(e,t,n){const r=e.input.charCodeAt(e.position),i=r===123,a=e.position;let o=!0;if(r!==91&&r!==123)return!1;const l=i?125:93;for(i?Wg(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,xt.FLOW):_g(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,xt.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){li(e,t);let c=e.input.charCodeAt(e.position);if(c===l)return e.position++,Mr(e),!0;o?c===44&&q(e,"expected the node content, but found ','"):q(e,"missed comma between flow collection entries");let u=!1,d=!1;c===63&&Pt(e.input.charCodeAt(e.position+1))&&(u=d=!0,e.position+=1,li(e,t));const m=e.line,f=zr(e),g=qr(e,t,Br,!1,!0);li(e,t),c=e.input.charCodeAt(e.position),(i||d||e.line===m)&&c===58?(u=!0,e.position++,li(e,t),i||Hm(e,f),g||Ue(e),qr(e,t,Br,!1,!0)||Ue(e),li(e,t),i||Mr(e)):i&&u?(g||Ue(e),Ue(e)):i?Ue(e):u&&(Hm(e,f),g||Ue(e),Ue(e),Mr(e)),c=e.input.charCodeAt(e.position),c===44?(o=!0,e.position++):o=!1}q(e,"unexpected end of the stream within a flow collection")}function Ym(e,t,n){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!Gt(e.input.charCodeAt(e.position+1)))return!1;for(_g(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,xt.BLOCK);e.input.charCodeAt(e.position)===45&&Gt(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,q(e,"tab characters must not be used in indentation"));const r=e.line;e.position++;const i=Fe(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&Gt(e.input.charCodeAt(e.position+1))&&q(e,"bad indentation of a sequence entry"),i&&e.lineIndent<=t?Ue(e):qr(e,t,Rg,!1,!0),Fe(e,!0),e.lineIndent<t||e.position>=e.length)break;e.lineIndent>t&&q(e,"bad indentation of a sequence entry"),e.line===r&&e.input.charCodeAt(e.position)===45&&Gt(e.input.charCodeAt(e.position+1))&&q(e,"bad indentation of a sequence entry")}return Mr(e),!0}function $s(e,t,n,r){let i=!1,a=!1,o=!1,l=!1;if(e.firstTabInLine!==-1)return!1;let c=e.input.charCodeAt(e.position);for(;c!==0;){!i&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,q(e,"tab characters must not be used in indentation"));const u=e.input.charCodeAt(e.position+1),d=e.line;if((c===63||c===58)&&Gt(u))o||(Wg(e,e.position,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,xt.BLOCK),o=!0),c===63?(i&&Ue(e),a=!0,i=!0):(i||(Ue(e),a=!0),i=!1),e.position+=1,l=!0;else{i&&(Ue(e),i=!1);const m=zr(e);if(!qr(e,n,Ig,!1,!0))break;if(e.line===d){for(c=e.input.charCodeAt(e.position);Xr(c);)c=e.input.charCodeAt(++e.position);if(c===58)c=e.input.charCodeAt(++e.position),Gt(c)||q(e,"a whitespace character is expected after the key-value separator within a block mapping"),o||(e.events.splice(m.eventsLength,0,{type:Me.MAPPING,start:m.position,anchorStart:r.anchorStart,anchorEnd:r.anchorEnd,tagStart:r.tagStart,tagEnd:r.tagEnd,style:xt.BLOCK}),o=!0),a=!0,i=!1,l=!1;else if(a)q(e,"expected ':' after a mapping key");else return r.anchorStart!==re||r.tagStart!==re?(Lr(e,m),!1):!0}else if(a)q(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return r.anchorStart!==re||r.tagStart!==re?(Lr(e,m),!1):!0}if(qr(e,t,Lo,!0,l)&&(l=!1),i||l&&(Ue(e),l=!1),Fe(e,!0),c=e.input.charCodeAt(e.position),(e.line===d||e.lineIndent>t)&&c!==0)q(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return a?(i&&Ue(e),o&&Mr(e),!0):!1}function qr(e,t,n,r,i,a=!0){var v,x;e.depth>=e.maxDepth&&q(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let o=1,l=!1,c=!1,u=null;const d=qm();let m=n===Lo||n===Rg,f=m;const g=m;if(r&&Fe(e,!0)&&(l=!0,e.lineIndent>t?o=1:e.lineIndent===t?o=0:o=-1),o===1)for(;;){const w=e.input.charCodeAt(e.position),y=zr(e);if(l&&o!==1&&(w===33||w===38))break;if(l&&g&&(d.tagStart!==re||d.anchorStart!==re)&&(w===33||w===38)){const p=zr(e),h=t+1;if($s(e,e.position-e.lineStart,h,d)&&((v=e.events[p.eventsLength])==null?void 0:v.type)===Me.MAPPING)return e.depth--,!0;Lr(e,p)}if(l&&(w===33&&d.tagStart!==re||w===38&&d.anchorStart!==re)||!ck(e,d,n===Br)&&!uk(e,d))break;u===null&&(u=y),Fe(e,!0)?(l=!0,f=g,e.lineIndent>t?o=1:e.lineIndent===t?o=0:o=-1):f=!1}if(f&&(f=l||i),o===1||n===Lo){const w=n===Br||n===Ig?t:t+1,y=e.position-e.lineStart;if(o===1)if(f&&(Ym(e,y,d)||$s(e,y,w,d))||yk(e,w,d))c=!0;else{const p=e.input.charCodeAt(e.position);if(u!==null&&a&&g&&!f&&p!==124&&p!==62){const h=zr(e),k=u.position-u.lineStart;Lr(e,u),$s(e,k,w,qm())&&((x=e.events[h.eventsLength])==null?void 0:x.type)===Me.MAPPING?c=!0:Lr(e,h)}!c&&(m&&pk(e,w,d)||mk(e,w,d)||fk(e,w,d)||dk(e,d)||gk(e,w,n,d))&&(c=!0)}else o===0&&(c=f&&Ym(e,y,d))}return m=m&&!c,!c&&(d.anchorStart!==re||d.tagStart!==re||m)&&(Jr(e,re,re,d.anchorStart,d.anchorEnd,d.tagStart,d.tagEnd,Y.PLAIN),c=!0),e.depth--,c||d.anchorStart!==re||d.tagStart!==re}function vk(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;const t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Pt(e.input.charCodeAt(e.position));)e.position++;const n=e.input.slice(t,e.position),r=[];for(n.length===0&&q(e,"directive name must not be less than one character in length");e.input.charCodeAt(e.position)!==0&&!je(e.input.charCodeAt(e.position));){for(;Xr(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||je(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;const i=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Pt(e.input.charCodeAt(e.position));)e.position++;r.push(e.input.slice(i,e.position))}if(je(e.input.charCodeAt(e.position))&&Oo(e),n==="YAML"){e.directives.some(a=>a.kind==="yaml")&&q(e,"duplication of %YAML directive"),r.length!==1&&q(e,"YAML directive accepts exactly one argument");const i=/^([0-9]+)\.([0-9]+)$/.exec(r[0]);i===null&&q(e,"ill-formed argument of the YAML directive"),parseInt(i[1],10)!==1&&q(e,"unacceptable YAML version of the document"),e.directives.push({kind:"yaml",version:r[0]})}else if(n==="TAG"){r.length!==2&&q(e,"TAG directive accepts exactly two arguments");const[i,a]=r;Dg.test(i)||q(e,"ill-formed tag handle (first argument) of the TAG directive"),Og.call(e.tagHandlers,i)&&q(e,`there is a previously declared suffix for "${i}" tag handle`),nk.test(a)||q(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagHandlers[i]=a,e.directives.push({kind:"tag",handle:i,prefix:a})}return!0}function bk(e){e.directives=[],e.tagHandlers=Object.create(null);let t=!1;for(Fe(e,!0);vk(e);)t=!0,Fe(e,!0);let n=!1,r=!1,i=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&Gt(e.input.charCodeAt(e.position+3))){n=!0;const l=e.line;e.position+=3,Fe(e,!0),i=e.line>l}else t&&q(e,"directives end mark is expected");const a=e.events.length;if(!n&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&Hr(e)){e.position+=3,Fe(e,!0);return}if(rk(e,n,!1),qr(e,e.lineIndent-1,Lo,!1,i,i)||Ue(e),Fe(e,!0),e.position===e.lineStart&&Hr(e)&&(r=e.input.charCodeAt(e.position)===46,r)){const l=e.line;e.position+=3,Fe(e,!0),e.line===l&&e.position<e.length&&q(e,"end of the stream or a document separator is expected")}const o=e.events[a];(o==null?void 0:o.type)===Me.DOCUMENT&&(o.explicitEnd=r),Mr(e),!r&&e.position<e.length&&!_u(e)&&q(e,"end of the stream or a document separator is expected")}function xk(e,t){const n=e.length,r={...Fu,...t,input:`${e}\0`,length:n,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]},i=e.indexOf("\0");for(i!==-1&&jn.throwAt(e,i,"null byte is not allowed in input",r.filename);r.position<r.length&&(Bg(r),Fe(r,!0),!(r.position>=r.length));){const a=r.position;bk(r),r.position===a&&q(r,"can not read a document")}return r.events}var wk={...Fu,...Du};function kk(e,t={}){const n={...wk,...t},r=String(e),i=Object.keys(Fu),a=Object.keys(Du);return X5(xk(r,nc(n,i)),{...nc(n,a),source:r})}function Sk(e,t){const n=kk(e,t);if(n.length===0)throw new jn("expected a document, but the input is empty");if(n.length===1)return n[0];throw new jn("expected a single document in the stream, but found more")}var _n=Symbol("INVALID");function Nk(e){const t=new Set([e.defaultScalarTag,e.defaultSequenceTag,e.defaultMappingTag].filter(a=>a!==void 0)),n=e.implicitScalarTags,r=e.tags.filter(a=>!(a.nodeKind==="scalar"&&a.implicit)&&!t.has(a)),i=e.tags.filter(a=>t.has(a));return[...n.map(a=>({tag:a,implicitTag:!0})),...r.map(a=>({tag:a,implicitTag:!1})),...i.map(a=>({tag:a,implicitTag:!0}))]}function Ak(e,t){for(let n=0,r=e.representTypes.length;n<r;n+=1){const{tag:i,implicitTag:a}=e.representTypes[n];if(i.identify(t)){let o;return i.matchByTagPrefix?o=i.representTagName(t):o=i.tagName,{tag:i,tagName:o,implicitTag:a}}}return null}function gi(e,t){if(!e.noRefs&&t!==null&&typeof t=="object"){const u=e.refs.get(t);if(u)return u.anchor===void 0&&(u.anchor=`ref_${e.refCounter++}`),{kind:"alias",anchor:u.anchor}}const n=Ak(e,t);if(!n){if(t===void 0||e.skipInvalid)return _n;throw new jn(`unacceptable kind of an object to dump ${Object.prototype.toString.call(t)}`)}const{tag:r,tagName:i,implicitTag:a}=n,o=a?i:Mg(i);if(r.nodeKind==="scalar")return{kind:"scalar",tag:o,tagged:!a,style:Y.PLAIN,value:r.represent(t)};if(r.nodeKind==="sequence"){const u=r.represent(t),d={kind:"sequence",tag:o,tagged:!a,style:xt.BLOCK,items:[]};e.noRefs||e.refs.set(t,d);for(let m=0,f=u.length;m<f;m+=1){let g=gi(e,u[m]);g===_n&&u[m]===void 0&&(g=gi(e,null)),g!==_n&&d.items.push(g)}return d}const l=r.represent(t),c={kind:"mapping",tag:o,tagged:!a,style:xt.BLOCK,items:[]};e.noRefs||e.refs.set(t,c);for(const[u,d]of l){const m=gi(e,u);if(m===_n)continue;const f=gi(e,d);f!==_n&&c.items.push({key:m,value:f})}return c}function jk(e,t,n={}){const r=gi({representTypes:Nk(t),noRefs:n.noRefs??!1,skipInvalid:n.skipInvalid??!1,refs:new Map,refCounter:0},e);return[{contents:r===_n?null:r,directives:[]}]}var Ek=Symbol("visit:break"),qg=Symbol("visit:skip");function Qa(e,t,n){const r=t(e,n);if(r===Ek)return!0;if(r===qg)return!1;const i=n.depth+1;switch(e.kind){case"sequence":for(const a of e.items)if(Qa(a,t,{depth:i,parent:e,isKey:!1}))return!0;break;case"mapping":for(const{key:a,value:o}of e.items)if(Qa(a,t,{depth:i,parent:e,isKey:!0})||Qa(o,t,{depth:i,parent:e,isKey:!1}))return!0;break}return!1}function Km(e,t){for(const n of e)if(n.contents&&Qa(n.contents,t,{depth:0,parent:null,isKey:!1}))return}function cs(e,t){return(e&1<<t)!==0}var Vm={applyQuoteFlowKeysOption:Ck,doubleQuoteForInvisibles:Tk,doubleQuoteWhitespaceOnly:Pk,applyForceQuotesOption:Mk,tryLongOrMultilineAsBlock:zk,quoteInvalidPlain:Lk,fallbackToDoubleQuoted:Ok};function Ug(e){return e.presenterOptions.quoteStyle==="single"&&cs(e.allowedStylesMask,Y.SINGLE_QUOTED)?Y.SINGLE_QUOTED:Y.DOUBLE_QUOTED}function Ck(e){e.presenterOptions.quoteFlowKeys&&(!e.isKey||!e.flowOnly||e.style!==Y.PLAIN||(e.style=Y.DOUBLE_QUOTED))}function Tk(e){e.style===Y.PLAIN&&/[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value)&&(e.style=Y.DOUBLE_QUOTED)}function Pk(e){e.style===Y.PLAIN&&/^\s+$/.test(e.node.value)&&(e.style=Y.DOUBLE_QUOTED)}function Mk(e){e.presenterOptions.forceQuotes&&(e.isKey||e.style!==Y.PLAIN||e.node.tag===e.presenterOptions.schema.defaultScalarTag.tagName&&(e.style=e.node.value.includes(`
`)?Y.DOUBLE_QUOTED:Ug(e)))}function zk(e){if(e.style!==Y.PLAIN||e.isKey)return;const t=e.node.value,n=t.indexOf(`
`)!==-1;if(!cs(e.allowedStylesMask,Y.LITERAL_BLOCK)){n&&(e.style=Y.DOUBLE_QUOTED);return}const r=e.presenterOptions.lineWidth;if(r===-1){n&&(e.style=Y.LITERAL_BLOCK);return}const i=Math.max(Math.min(r,40),r-e.shiftOfContent);let a=0,o=!1;for(;a<=t.length;){let l=t.length;const c=t.indexOf(`
`,a);c!==-1&&(l=c);const u=t.slice(a,l);if(u.length>i&&u[0]!==" "&&/ [^ \t]/.test(u)&&(o=!0),c===-1)break;a=c+1}o?e.style=Y.FOLDED_BLOCK:n&&(e.style=Y.LITERAL_BLOCK)}function Lk(e){e.style===Y.PLAIN&&!cs(e.allowedStylesMask,Y.PLAIN)&&(e.style=Ug(e))}function Ok(e){cs(e.allowedStylesMask,e.style)||(e.style=Y.DOUBLE_QUOTED)}function ci(e,t){return e|1<<t}var Ik="[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]",Rk="[\\n\\r]",Dk="\\uFEFF",Wu="[ \\t]",Yg=`(?:(?!(?:${Rk}|${Dk}))${Ik})`,us=`(?:(?!${Wu})${Yg})`,Kg="[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]",Vg="[-?:,\\[\\]{}#&*!|>'\"%@`]",Fk="[,\\[\\]{}]",ac=us,oc=`(?:(?!${Fk})${us})`,_k=`(?:(?:(?!${Vg})${us})|[?:-](?=${ac}))`,Wk=`(?:(?:(?!${Vg})${us})|[?:-](?=${oc}))`,Gg=`(?:(?:(?![:#])${ac})|:(?=${ac}))#*`,Qg=`(?:(?:(?![:#])${oc})|:(?=${oc}))#*`,Jg=`(?:${Wu}*${Gg})*`,Xg=`(?:${Wu}*${Qg})*`,Zg=`${_k}#*${Jg}`,$g=`${Wk}#*${Xg}`,Bk=Zg,Hk=$g,qk=`\\n+${Gg}${Jg}`,Uk=`\\n+${Qg}${Xg}`,Yk=`${Zg}(?:${qk})*`,Kk=`${$g}(?:${Uk})*`,Vk=new RegExp(`^(?:${Yk})$`,"u"),Gk=new RegExp(`^(?:${Kk})$`,"u"),Qk=new RegExp(`^(?:${Bk})$`,"u"),Jk=new RegExp(`^(?:${Hk})$`,"u"),Xk=new RegExp(`^(?:${Kg})*$`,"u"),Zk=new RegExp(`^(?:${Kg}|\\n)*$`,"u"),$k=new RegExp(`^(?:${Yg}|\\n)*$`,"u"),eS=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/,Bu=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/m;function tS(e){const t=e.node.value;if(t!==""){if(!(e.isKey?e.flowOnly?Jk:Qk:e.flowOnly?Gk:Vk).test(t)||e.shiftOfFirstLine===0&&eS.test(t))return!1;if(e.shiftOfContent===0){const r=t.indexOf(`
`);if(r!==-1){const i=t.slice(r+1);if(Bu.test(i))return!1}}}const n=e.presenterOptions.schema.resolveImplicitScalarTag(t).tag.tagName;return!(!e.node.tagged&&n!==e.node.tag||!e.node.tagged&&t==="="&&n===e.presenterOptions.schema.defaultScalarTag.tagName)}function nS(e){const t=e.node.value;if(!(e.isKey?Xk:Zk).test(t)||/[ \t]\n|\n[ \t]/.test(t))return!1;if(!e.isKey&&e.shiftOfContent===0){const n=t.indexOf(`
`);if(n!==-1&&Bu.test(t.slice(n+1)))return!1}return!0}function rS(e){if(e.flowOnly||!$k.test(e.node.value))return!1;const t=e.shiftOfContent-e.shiftOfParent;return!(t<1||t>9&&/^\n* /.test(e.node.value)||e.shiftOfContent===0&&Bu.test(e.node.value))}function iS(e){let t=ci(0,Y.DOUBLE_QUOTED);tS(e)&&(t=ci(t,Y.PLAIN)),nS(e)&&(t=ci(t,Y.SINGLE_QUOTED)),rS(e)&&(t=ci(ci(t,Y.LITERAL_BLOCK),Y.FOLDED_BLOCK)),e.allowedStylesMask=t}function aS(e){switch(e.style){case Y.PLAIN:return oS(e);case Y.SINGLE_QUOTED:return sS(e);case Y.LITERAL_BLOCK:return lS(e);case Y.FOLDED_BLOCK:return cS(e);case Y.DOUBLE_QUOTED:return uS(e)}}function oS(e){return e0(e.node.value,e.shiftOfContent)}function sS(e){return`'${e0(e.node.value,e.shiftOfContent).replace(/'/g,"''")}'`}function lS(e){const t=e.node.value;return"|"+n0(t,e.shiftOfParent,e.shiftOfContent)+r0(t0(t,e.shiftOfContent))}function cS(e){const t=e.node.value,n=e.presenterOptions.lineWidth;let r=1/0;return n!==-1&&(r=Math.max(Math.min(n,40),n-e.shiftOfContent)),">"+n0(t,e.shiftOfParent,e.shiftOfContent)+r0(t0(mS(t,r),e.shiftOfContent))}function uS(e){return`"${hS(e.node.value)}"`}function e0(e,t){let n=e.indexOf(`
`);if(n===-1)return e;const r=" ".repeat(t);let i=e.slice(0,n);const a=/(\n+)([^\n]*)/g;a.lastIndex=n;let o;for(;o=a.exec(e);){const l=o[1].length,c=o[2];i+=`
`.repeat(l+1)+r+c}return i}function t0(e,t){const n=" ".repeat(t);let r=0,i="";const a=e.length;for(;r<a;){let o;const l=e.indexOf(`
`,r);l===-1?(o=e.slice(r),r=a):(o=e.slice(r,l+1),r=l+1),o.length&&o!==`
`&&(i+=n),i+=o}return i}function dS(e){return/^\n* /.test(e)}function n0(e,t,n){const r=dS(e)?String(n-t):"",i=e[e.length-1]===`
`;return`${r}${i&&(e[e.length-2]===`
`||e===`
`)?"+":i?"":"-"}
`}function r0(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function sc(e){return e===" "||e==="	"}function Gm(e,t){if(e===""||sc(e[0]))return e;const n=/ [^ \t]/g;let r,i=0,a,o=0,l=0,c="";for(;r=n.exec(e);)l=r.index,l-i>t&&(a=o>i?o:l,c+=`
${e.slice(i,a)}`,i=a+1),o=l;return c+=`
`,e.length-i>t&&o>i?c+=`${e.slice(i,o)}
${e.slice(o+1)}`:c+=e.slice(i),c.slice(1)}function mS(e,t){const n=/(\n+)([^\n]*)/g;let r=e.indexOf(`
`);r===-1&&(r=e.length),n.lastIndex=r;let i=Gm(e.slice(0,r),t),a=e[0]===`
`||sc(e[0]),o,l;for(;l=n.exec(e);){const c=l[1],u=l[2];o=u!==""&&sc(u[0]),i+=c+(!a&&!o&&u!==""?`
`:"")+Gm(u,t),a=o}return i}var fS=/["\\\x00-\x1F\x7F-\xA0\u2028\u2029\uD800-\uDFFF\uFEFF\uFFFE\uFFFF]/gu;function pS(e){switch(e){case"\0":return"\\0";case"\x07":return"\\a";case"\b":return"\\b";case"	":return"\\t";case`
`:return"\\n";case"\v":return"\\v";case"\f":return"\\f";case"\r":return"\\r";case"\x1B":return"\\e";case'"':return'\\"';case"\\":return"\\\\";case"":return"\\N";case" ":return"\\_";case"\u2028":return"\\L";case"\u2029":return"\\P"}const t=e.charCodeAt(0),n=t.toString(16).toUpperCase();return t<=255?`\\x${"0".repeat(2-n.length)}${n}`:`\\u${"0".repeat(4-n.length)}${n}`}function hS(e){return e.replace(fS,pS)}var Io=10,Hu={indent:2,seqNoIndent:!1,seqInlineFirst:!0,lineWidth:80,flowBracketPadding:!1,flowSkipCommaSpace:!1,flowSkipColonSpace:!1,quoteFlowKeys:!1,quoteStyle:"single",forceQuotes:!1,scalarStyleRules:Object.keys(Vm).map(e=>Reflect.get(Vm,e)),tagBeforeAnchor:!1};function gS(e){return e.tagged?e.tag:Mg(e.tag)}function yS(e){const t={...Hu,...e};return t.flowSkipColonSpace&&(t.quoteFlowKeys=!0),{...t,defaultScalarTagName:t.schema.defaultScalarTag.tagName,openEnded:!1}}function lc(e,t){return`
${" ".repeat(e.indent*t)}`}function vS(e,t,n,r,i,a){return{node:t,parent:n,level:r,isKey:i,flowOnly:a,shiftOfParent:r===0?-1:e.indent*(r-1),shiftOfContent:e.indent*Math.max(1,r),shiftOfFirstLine:r===0?0:e.indent*r,presenterOptions:e,allowedStylesMask:0,style:t.style}}function bS(e,t,n){let r="";for(let a=0,o=n.items.length;a<o;a+=1){const l=Jt(e,t,n.items[a],n,{}).text;a>0&&(r+=`,${e.flowSkipCommaSpace?"":" "}`),r+=l}const i=e.flowBracketPadding&&n.items.length>0?" ":"";return`[${i}${r}${i}]`}function Qm(e,t,n,r){let i="";for(let a=0,o=n.items.length;a<o;a+=1){const l=Jt(e,t+1,n.items[a],n,{block:!0,compact:e.seqInlineFirst,isblockseq:!0}).text;(!r||i!=="")&&(i+=lc(e,t)),l===""||Io===l.charCodeAt(0)?i+="-":i+="- ",i+=l}return i}function xS(e,t,n){let r="";for(const{key:a,value:o}of n.items){let l="";r!==""&&(l+=`,${e.flowSkipCommaSpace?"":" "}`);const c=Jt(e,t,a,n,{iskey:!0}),u=c.text,d=Jt(e,t,o,n,{}).text,m=e.flowSkipColonSpace||d===""?"":" ",f=a.kind==="scalar"&&c.noBody&&(a.tagged||a.anchor!==void 0),g=a.kind==="alias"||f?" ":"";l+=`${u}${g}:${m}${d}`,r+=l}const i=e.flowBracketPadding&&r!==""?" ":"";return`{${i}${r}${i}}`}function wS(e,t,n,r){let i="";for(let a=0,o=n.items.length;a<o;a+=1){let l="";(!r||i!=="")&&(l+=lc(e,t));const{key:c,value:u}=n.items[a],d=(c.kind==="mapping"||c.kind==="sequence")&&c.style===xt.BLOCK&&c.items.length!==0||c.kind==="scalar"&&(c.style===Y.LITERAL_BLOCK||c.style===Y.FOLDED_BLOCK),m=d?Jt(e,t+1,c,n,{block:!0,compact:!0,isblockseq:!cc(e,c,t+1)}):Jt(e,t+1,c,n,{block:!0,compact:!0,iskey:!0}),f=m.text,g=c.kind==="scalar"&&c.value.indexOf(`
`)!==-1,v=f.length>1024&&/^[\s\S]{1025}/u.test(f),x=d||g||v;x&&(f&&Io===f.charCodeAt(0)?l+="?":l+="? "),l+=f,x&&(l+=lc(e,t));const w=Jt(e,t+1,u,n,{block:!0,compact:x,isblockseq:x&&!cc(e,u,t+1)}).text,y=c.kind==="scalar"&&m.noBody&&(c.tagged||c.anchor!==void 0),p=!x&&(c.kind==="alias"||y)?" ":"";w===""||Io===w.charCodeAt(0)?l+=`${p}:`:l+=`${p}: `,l+=w,i+=l}return i}function cc(e,t,n){return t.kind==="alias"?!0:t.tagged||t.anchor!==void 0||e.indent<2&&n>0}function Jt(e,t,n,r,i){if(n.kind==="alias")return e.openEnded=!1,{text:`*${n.anchor}`,noBody:!1};const{block:a=!1,iskey:o=!1,isblockseq:l=!1}=i;let c=i.compact??!1;const u=n.anchor!==void 0;cc(e,n,t)&&(c=!1);let d,m=n.tagged;const f=a&&(n.kind==="mapping"||n.kind==="sequence")&&n.style===xt.BLOCK&&n.items.length!==0;if(n.kind==="mapping")f?d=wS(e,t,n,c):d=xS(e,t,n);else if(n.kind==="sequence")f?e.seqNoIndent&&!l&&t>0?d=Qm(e,t-1,n,c):d=Qm(e,t,n,c):d=bS(e,t,n);else{const x=vS(e,n,r,t,o,!a);iS(x);for(const w of e.scalarStyleRules)w(x);d=aS(x),e.openEnded=(x.style===Y.LITERAL_BLOCK||x.style===Y.FOLDED_BLOCK)&&(n.value===`
`||n.value.endsWith(`

`)),m=n.tagged||d===""&&x.flowOnly&&(r==null?void 0:r.kind)==="sequence"&&!u||x.style!==Y.PLAIN&&n.tag!==e.defaultScalarTagName}(n.kind==="mapping"||n.kind==="sequence")&&!f&&(e.openEnded=!1),f&&c&&t>0&&e.indent>2&&(d=`${" ".repeat(e.indent-2)}${d}`);const g=d==="";let v=d;if(m||u){const x=[],w=m?gS(n):null,y=u?`&${n.anchor}`:null;e.tagBeforeAnchor?(w!==null&&x.push(w),y!==null&&x.push(y)):(y!==null&&x.push(y),w!==null&&x.push(w));const p=d===""||d.charCodeAt(0)===Io?"":" ";v=`${x.join(" ")}${p}${d}`}return{text:v,noBody:g}}function kS(e){return(e.kind==="sequence"||e.kind==="mapping")&&e.style===xt.BLOCK&&e.items.length!==0&&!e.tagged&&e.anchor===void 0}function SS(e){let t="";for(const n of e.directives){if(n.kind==="yaml"){t+=`%YAML ${n.version}
`;continue}const{handle:r,prefix:i}=n;t+=`%TAG ${r} ${i}
`}return t}function NS(e,t){const n=yS(t);let r="",i=!1;for(let a=0;a<e.length;a+=1){const o=e[a];n.openEnded=!1;const l=SS(o),c=l!=="",u=o.explicitStart||c||a>0&&!i;if(r+=l,o.contents===null)u&&(r+=`---
`);else if(u){const d=Jt(n,0,o.contents,null,{block:!0,compact:!0}).text,m=d===""?"":c||kS(o.contents)?`
`:" ";r+=`---${m}${d}
`}else r+=Jt(n,0,o.contents,null,{block:!0,compact:!0}).text+`
`;i=o.explicitEnd||n.openEnded,i&&(r+=`...
`)}return r}var AS={...Hu,schema:O5,skipInvalid:!1,noRefs:!1,flowLevel:-1,sortKeys:!1,transform:()=>{}};function jS(e,t){const n=String(e),r=String(t);return n<r?-1:n>r?1:0}function ES(e,t={}){const n={...AS,...t},r=jk(e,n.schema,{noRefs:n.noRefs,skipInvalid:n.skipInvalid});if(n.flowLevel>=0&&Km(r,(i,a)=>{if(!(a.depth<n.flowLevel))return(i.kind==="sequence"||i.kind==="mapping")&&(i.style=xt.FLOW),qg}),n.sortKeys){const i=n.sortKeys===!0?jS:n.sortKeys;Km(r,a=>{a.kind==="mapping"&&a.items.sort((o,l)=>i(o.key.kind==="scalar"?o.key.value:"",l.key.kind==="scalar"?l.key.value:""))})}return n.transform(r),NS(r,{...nc(n,Object.keys(Hu)),schema:n.schema})}const CS="custom:the-monitor-dashboard",el='[[[ const hour = new Date().getHours(); let greeting = ""; if (hour >= 22 || hour < 5) greeting = "Night"; else if (hour >= 18) greeting = "Evening"; else if (hour >= 12) greeting = "Afternoon"; else greeting = "Morning"; const name = user.name === "Rey" ? "Rey" : "Christina"; return `${greeting}, ${name}!`; ]]]',TS=[{id:"mobile",url_path:"mobile",title:"Mobile",mode:"storage"},{id:"lovelace",url_path:null,title:"Übersicht",mode:"storage"},{id:"energy",url_path:"energie",title:"Energie",mode:"storage"}],PS={mobile:{views:[{title:"Overview",sections:[{title:"Bereich 1",cards:[{type:"vertical-stack",cards:[{type:"horizontal-stack",cards:[{type:"conditional",card:{type:"custom:button-card",entity:"person.christina",name:el}},{type:"conditional",card:{type:"custom:button-card",entity:"person.rey",name:el}},{type:"custom:button-card",entity:"person.christina",name:el},{type:"custom:strip-card",cards:Array.from({length:5},(e,t)=>({type:"tile",entity:`light.spot_${t+1}`,name:`Spot ${t+1}`}))}]},...Array.from({length:18},(e,t)=>({type:"tile",entity:`light.mock_${t+1}`,name:`Licht ${t+1}`}))]}]}]}]},__default__:{views:[{title:"Wohnen",sections:[{title:"Licht",cards:[{type:"tile",entity:"light.wohnzimmer",name:"Wohnzimmer"},{type:"tile",entity:"light.kueche",name:"Küche"}]},{title:"Klima",cards:[{type:"thermostat",entity:"climate.wohnzimmer"},{type:"vertical-stack",cards:[{type:"weather-forecast",entity:"weather.zuhause",forecast_type:"daily"},{type:"entities",title:"Status",entities:["lock.haustuer","alarm_control_panel.haus"]}]}]}]}]},energie:{views:[{title:"Energie",cards:[{type:"statistic",entity:"sensor.grandland_charge_power",name:"Ladeleistung",period:"day"},{type:"gauge",entity:"sensor.grandland_battery",name:"Akku",min:0,max:100,unit:"%"}]}]}};function qu(e){return!e||typeof e!="object"?!1:!Array.isArray(e)&&e.type===CS?!0:(Array.isArray(e)?e:Object.values(e)).some(qu)}function ds(e){if(!e||typeof e!="object"||Array.isArray(e))return null;let t;try{t=JSON.parse(JSON.stringify(e))}catch{return null}return typeof t.type!="string"||!t.type.trim()||(t.type=t.type.trim(),qu(t))?null:t}function MS(e){if(typeof e!="string")return"";const t=e.replace(/\s+/g," ").trim();return!t||t.includes("[[[")||t.includes("{{")||t.includes("<%")?"":t.length>72?`${t.slice(0,69)}…`:t}function Ur(e){if(!(e!=null&&e.type))return"Karte";const t=String(e.type).replace(/^custom:/,""),n=[e.name,e.title,e.heading,e.entity,e.entity_id].map(MS).find(Boolean);return n?`${t} · ${n}`:Array.isArray(e.entities)&&e.entities.length?`${t} · ${e.entities.length}`:Array.isArray(e.cards)&&e.cards.length?`${t} · ${e.cards.length}`:t}function zS(e,t){const n=e!=null&&e.card?Ur(e.card):"",r=Ur(t),i=(e==null?void 0:e.label)&&e.label!==n&&e.label!=="HA-Karte";return{card:t,label:i?e.label:r}}function Jm(e){return e?ES(e,{lineWidth:88,noRefs:!0}).trim():""}function LS(e){const t=String(e||"").trim();if(!t)return null;let n;try{n=Sk(t)}catch(i){const a=i!=null&&i.message?i.message.split(`
`)[0]:"Syntaxfehler";throw new Error(`Karten-YAML ungültig: ${a}`)}if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Die Konfiguration muss eine einzelne Karte sein.");const r=ds(n);if(!r)throw new Error("Die Karte braucht ein type und darf The Monitor nicht enthalten.");return r}function Wt(){return typeof window<"u"&&typeof window.loadCardHelpers=="function"}function Xm(e){var n,r;const t=(n=e==null?void 0:e.getRootNode)==null?void 0:n.call(e);return t instanceof ShadowRoot&&((r=t.host)==null?void 0:r.localName)==="the-monitor-dashboard"?t.host:null}const Ro="custom:";function Ja(e,t=new Set){return!e||typeof e!="object"?t:Array.isArray(e)?(e.forEach(n=>Ja(n,t)),t):(typeof e.type=="string"&&e.type.startsWith(Ro)&&t.add(e.type.slice(Ro.length)),Array.isArray(e.cards)&&Ja(e.cards,t),e.card&&Ja(e.card,t),t)}function OS(e){return new Promise(t=>{window.setTimeout(t,e)})}async function IS(e){const t=[...e].filter(n=>n.includes("-")&&!customElements.get(n));t.length&&await Promise.race([Promise.all(t.map(n=>customElements.whenDefined(n))),OS(2e3)])}function RS(e){return{type:"markdown",content:`**Nicht installiert:** \`${e}\`

Diese Lovelace-Karte ist in den Ressourcen nicht geladen.`}}function Xa(e){if(!e||typeof e!="object")return e;if(Array.isArray(e))return e.map(Xa);if(typeof e.type=="string"&&e.type.startsWith(Ro)){const n=e.type.slice(Ro.length);if(n.includes("-")&&!customElements.get(n))return RS(n)}const t={...e};return Array.isArray(e.cards)&&(t.cards=e.cards.map(Xa)),e.card&&typeof e.card=="object"&&(t.card=Xa(e.card)),t}function uc(e,t){return typeof e=="string"?e.replace(/\[\[([^\]]+)\]\]/g,(n,r)=>{const i=t==null?void 0:t[r.trim()];return i==null?n:String(i)}):Array.isArray(e)?e.map(n=>uc(n,t)):e&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([n,r])=>[n,uc(r,t)])):e}function dc(e,t){const n={...e};return Object.entries(t||{}).forEach(([r,i])=>{i&&typeof i=="object"&&!Array.isArray(i)&&n[r]&&typeof n[r]=="object"&&!Array.isArray(n[r])?n[r]=dc(n[r],i):n[r]=i}),n}function i0(e,t,n){const r=Array.isArray(e.template)?e.template:[e.template];let i={},a=!1;if(r.forEach(c=>{const u=`b:${c}`;if(!c||n.has(u)||!t[c])return;n.add(u),a=!0;const d=i0({...t[c],type:"custom:button-card"},t,n),{type:m,template:f,...g}=d;i=dc(i,g)}),!a)return e;const{template:o,...l}=e;return dc(i,l)}function yi(e,t,n=new Set){var a,o;if(!e||typeof e!="object")return e;if(Array.isArray(e))return e.map(l=>yi(l,t,n));let r=e;if(r.type==="custom:streamline-card"&&r.template&&((a=t.streamline)!=null&&a[r.template])){const l=`s:${r.template}`;if(!n.has(l)){n.add(l);const c=t.streamline[r.template],u=(o=c==null?void 0:c.card)!=null&&o.type?c.card:c!=null&&c.type?c:null;if(u){const d=c.default&&!Array.isArray(c.default)?c.default:{};r=uc(structuredClone(u),{...d,...r.variables||{}})}}}r.type==="custom:button-card"&&r.template&&t.button&&(r=i0(r,t.button,n));const i={...r};return Array.isArray(r.cards)&&(i.cards=r.cards.map(l=>yi(l,t,n))),r.card&&typeof r.card=="object"&&(i.card=yi(r.card,t,n)),r.custom_fields&&typeof r.custom_fields=="object"&&(i.custom_fields=Object.fromEntries(Object.entries(r.custom_fields).map(([l,c])=>[l,yi(c,t,n)]))),i}let Ta=null;async function DS(e){var t;return(t=e==null?void 0:e.connection)!=null&&t.sendMessagePromise?(Ta||(Ta=(async()=>{const n=await e.connection.sendMessagePromise({type:"lovelace/dashboards/list"}),r=[null,...Array.isArray(n)?n.map(o=>o.url_path):[]],i={},a={};for(const o of r)try{const l=await e.connection.sendMessagePromise({type:"lovelace/config",url_path:o,force:!1});Object.assign(i,(l==null?void 0:l.button_card_templates)||{}),Object.assign(a,(l==null?void 0:l.streamline_templates)||{})}catch{}return{button:i,streamline:a}})().catch(n=>{throw Ta=null,n})),Ta):{button:{},streamline:{}}}function FS(e){return JSON.stringify(e||{}).includes('"template"')}async function _S(e,t){const n=ds(e);if(!n)throw new Error("Ungültige Karten-Konfiguration");Wt()&&await window.loadCardHelpers();let r=n;if(FS(r))try{r=yi(r,await DS(t))}catch(i){console.warn("The Monitor: card templates were not expanded",i)}return await IS(Ja(r)),Xa(r)}async function a0(e,t,n,{preview:r=!1}={}){const i=await _S(t,n);if(customElements.get("hui-card")){const l=document.createElement("hui-card");return e.appendChild(l),n&&(l.hass=n),l.preview=r,l.config=i,l}if(!Wt())throw new Error("Home Assistant stellt hier keine Karten bereit");const o=await(await window.loadCardHelpers()).createCardElement(i);if(!o)throw new Error("Karte konnte nicht erzeugt werden");return e.appendChild(o),n&&(o.hass=n),o}function WS(e){return e??"__default__"}async function BS(e){var i;if(nr(e))return TS.map(a=>({...a}));if(!((i=e==null?void 0:e.connection)!=null&&i.sendMessagePromise))throw new Error("Keine Home-Assistant-Verbindung");const t=await e.connection.sendMessagePromise({type:"lovelace/dashboards/list"}),n=Array.isArray(t)?[...t]:[];return n.some(a=>a.url_path==null||a.url_path==="lovelace")||n.unshift({id:"lovelace",url_path:null,title:"Übersicht",mode:"storage"}),n.sort((a,o)=>{const l=c=>`${c.title||""} ${c.url_path||""}`.toLowerCase().includes("mobile")?0:c.url_path==null||c.url_path==="lovelace"?2:1;return l(a)-l(o)}),n}async function HS(e,t){var n;if(nr(e))return structuredClone(PS[WS(t)]||{views:[]});if(!((n=e==null?void 0:e.connection)!=null&&n.sendMessagePromise))throw new Error("Keine Home-Assistant-Verbindung");return e.connection.sendMessagePromise({type:"lovelace/config",url_path:t??null,force:!1})}const qS=new Set(["vertical-stack","horizontal-stack","grid","stack-in-card","layout-card","swipe-card","strip-card"]);function US(e){const t=String(e||"").replace(/^custom:/,"");return qS.has(t)}function YS(e){return!!(e&&typeof e=="object"&&typeof e.type=="string"&&e.type.trim())}function KS(e){const t=[];return Array.isArray(e==null?void 0:e.cards)&&t.push(...e.cards),e!=null&&e.card&&typeof e.card=="object"&&t.push(e.card),Array.isArray(e==null?void 0:e.elements)&&e.elements.forEach(n=>{n!=null&&n.type&&t.push(n),n!=null&&n.card&&t.push(n.card)}),e!=null&&e.custom_fields&&typeof e.custom_fields=="object"&&Object.values(e.custom_fields).forEach(n=>{n&&typeof n=="object"&&n.type&&t.push(n)}),t}function VS(e){return((e==null?void 0:e.views)||[]).map((t,n)=>({index:n,title:t.title||t.path||`Ansicht ${n+1}`}))}function GS(e,t="Dashboard",n=null){const r=[];let i=0;const a=(o,l,c)=>{(o||[]).forEach((u,d)=>{if(!YS(u)||qu(u))return;const m=KS(u);US(u.type)&&m.length>0||(i+=1,r.push({id:`${l}:${d}:${i}:${u.type}`,label:Ur(u),path:l,depth:c,config:u})),m.length&&a(m,l,c+1)})};return((e==null?void 0:e.views)||[]).forEach((o,l)=>{if(n!=null&&l!==n)return;const c=o.title||o.path||`Ansicht ${l+1}`,u=n!=null?c:`${t} · ${c}`;Array.isArray(o.cards)&&a(o.cards,u,0),(o.sections||[]).forEach((d,m)=>{const f=d.title||`Bereich ${m+1}`,g=n!=null?f:`${u} · ${f}`;a(d.cards,g,0),Array.isArray(d.sections)&&d.sections.forEach((v,x)=>{const w=v.title||`Bereich ${m+1}.${x+1}`;a(v.cards,n!=null?w:`${g} · ${w}`,0)})})}),r}function QS(e,t){var n;return!!((n=e==null?void 0:e.strategy)!=null&&n.type)&&t.length===0}const Uu=[6,24,48,168];function ms(e,t){if(t==="binary_sensor")return e==="on"||e==="open"||e==="detected"?1:e==="off"||e==="closed"||e==="clear"?0:null;const n=Number(e);return Number.isFinite(n)?n:null}function o0(e,t){const n=Tt(e,t);return n.state==="unavailable"||n.state==="unknown"?!1:ms(n.state,n.domain)!=null}function JS(e){if(e.lu!=null)return e.lu*1e3;if(e.lc!=null)return e.lc*1e3;const t=e.last_changed||e.last_updated;return t?new Date(t).getTime():NaN}function s0(e,t){const n=ve(t),r=[];return(e||[]).forEach(i=>{const a=i.s??i.state,o=ms(a,n);if(o==null)return;const l=JS(i);Number.isFinite(l)&&r.push({t:l,v:o})}),r.sort((i,a)=>i.t-a.t),r}function l0(e,t){return e?Array.isArray(e)?e[0]||[]:e[t]||[]:[]}function Zm(e,t,n,r=24){if(e.length>=2)return e;const i=Tt(t,n),a=ve(n),o=ms(i.state,a);if(o==null)return e;const l=Date.now(),c=r*60*60*1e3;if(e.length===1){const u=e[0];return[{t:Math.min(u.t,l-c),v:u.v},{t:l,v:o}]}return[{t:l-c,v:o},{t:l,v:o}]}function XS(e,t,n){const r=Tt(e,t),i=ve(t),a=ms(r.state,i)??20,o=[],l=Date.now(),c=n*60*60*1e3,u=36;let d=a;for(let m=0;m<=u;m+=1){const f=l-c+c/u*m;i==="binary_sensor"?d=Math.random()>.85?d===1?0:1:d:d+=(Math.random()-.5)*(Math.abs(a)*.08+.5),o.push({t:f,v:d})}return o}async function ZS(e,t,n,r){const i=await e.connection.sendMessagePromise({type:"history/history_during_period",start_time:n.toISOString(),end_time:r.toISOString(),entity_ids:[t],include_start_time_state:!0,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});return s0(l0(i,t),t)}async function $S(e,t,n,r){const i=ig(e),a=na(e);if(!i||!a)return[];const o=new URLSearchParams({filter_entity_id:t,end_time:r.toISOString(),minimal_response:"true"}),l=await fetch(`${a}/api/history/period/${encodeURIComponent(n.toISOString())}?${o}`,{headers:{Authorization:`Bearer ${i}`}});if(!l.ok)return[];const c=await l.json();return s0(l0(c,t),t)}async function c0(e,t,{hours:n=24}={}){var o;if(!t||!e)return[];const r=Uu.includes(n)?n:24;if(nr(e))return XS(e,t,r);const i=new Date,a=new Date(i.getTime()-r*60*60*1e3);try{let l=[];return(o=e.connection)!=null&&o.sendMessagePromise?l=await ZS(e,t,a,i):l=await $S(e,t,a,i),Zm(l,e,t,r)}catch(l){return console.warn("The Monitor: Sensor-Verlauf konnte nicht geladen werden",l),Zm([],e,t,r)}}function eN(e){const t=Number(e);return Uu.includes(t)?t:24}const Je=12,ht=4,ie={presence:6,windows:8,popupEntities:12,coverPopupEntities:6,sceneEntities:4,cameraEntities:3,sensorEntities:4,contactStatusEntities:8,widgetsPerPage:24,pages:6},fs={weather:{label:"Wetter",icon:"mdi:weather-partly-cloudy",domains:["weather"]},media:{label:"Medien",icon:"mdi:play-circle",domains:["media_player"]},camera:{label:"Kamera",icon:"mdi:camera",domains:["camera"]},shopping:{label:"Einkaufsliste",icon:"mdi:cart",domains:["todo"]},quickAction:{label:"Entität",icon:"mdi:flash",domains:["light","switch","fan","input_boolean","cover","lock"]},alarm:{label:"Alarmanlage",icon:"mdi:shield-home",domains:["alarm_control_panel"]},cover:{label:"Rolladen",icon:"mdi:window-shutter",domains:["cover"]},coverPopup:{label:"Rolladen-Gruppe",icon:"mdi:window-shutter-open",domains:["cover"]},popup:{label:"Entitäten",icon:"mdi:layers",domains:["light","switch","fan","input_boolean","cover","lock","climate"]},scene:{label:"Szene",icon:"mdi:palette",domains:["scene","script"]},sensor:{label:"Sensor",icon:"mdi:gauge",domains:["sensor","binary_sensor"]},sensorStatus:{label:"Sensor Status",icon:"mdi:door-open",domains:["binary_sensor","cover"]},sankey:{label:"Energiefluss",icon:"mdi:chart-sankey",domains:[]},energyTile:{label:"Energie-Kachel",icon:"mdi:lightning-bolt",domains:[]},ev:{label:"E-Auto",icon:"mdi:car-electric",domains:[]},haCard:{label:"HA-Karte",icon:"mdi:card-bulleted",domains:[]}},mc={S:{w:2,h:1,label:"S"},M:{w:3,h:2,label:"M"},L:{w:4,h:2,label:"L"},XL:{w:6,h:2,label:"XL"},tall:{w:4,h:3,label:"Hoch"},wide:{w:6,h:1,label:"Breit"},full:{w:Je,h:ht,label:"Voll"}},tN={weather:"XL",media:"wide",camera:"L",shopping:"full",quickAction:"M",alarm:"M",cover:"M",coverPopup:"XL",popup:"M",scene:"S",sensor:"M",sensorStatus:"M",sankey:"tall",energyTile:"M",ev:"L",haCard:"XL"};let $m=0;function u0(){return $m+=1,`w-${Date.now().toString(36)}-${$m}`}function Bt(e,t={}){const n=tN[e]||"M",r=mc[n]||mc.M;return{id:u0(),type:e,x:0,y:0,w:r.w,h:r.h,entity_id:"",entity_ids:[],label:"",icon:"",mode:e==="quickAction"?"toggle":void 0,...e==="energyTile"?{tileKind:"inputs-outputs"}:{},...e==="haCard"?{card:null}:{},...t}}function mn(e,t=Je,n=ht){const r=Math.min(t,Math.max(1,e.w)),i=Math.min(n,Math.max(1,e.h)),a=Math.min(t-r,Math.max(0,e.x)),o=Math.min(n-i,Math.max(0,e.y));return{...e,x:a,y:o,w:r,h:i}}function nN(e,t){return e.x<t.x+t.w&&e.x+e.w>t.x&&e.y<t.y+t.h&&e.y+e.h>t.y}function kr(e,t,n=null){return e.filter(r=>r.id!==n&&nN(r,t))}function rN(e,t,n){return e.some(r=>t>=r.x&&t<r.x+r.w&&n>=r.y&&n<r.y+r.h)}function iN(e,t,n=Je,r=ht){for(let i=0;i<=r-t.h;i+=1)for(let a=0;a<=n-t.w;a+=1){const o={x:a,y:i,w:t.w,h:t.h};if(kr(e,o).length===0)return{x:a,y:i}}return{x:0,y:0}}function Yu(e){var t;return e.label?e.label:((t=fs[e.type])==null?void 0:t.label)||e.type}function aN(e){var t;return e.type==="popup"||e.type==="coverPopup"?e.entity_ids||[]:e.type==="camera"?d0(e):e.type==="sensor"||e.type==="scene"?(t=e.entity_ids)!=null&&t.length?e.entity_ids:e.entity_id?[e.entity_id]:[]:e.entity_id?[e.entity_id]:[]}function oN(e){const t=e.type==="popup"?e.entity_ids||[]:aN(e),n=new Set(e.disabled_entity_ids||[]);return t.filter(r=>!n.has(r))}function d0(e){const t=((e==null?void 0:e.entity_ids)||[]).filter(Boolean).slice(0,ie.cameraEntities);return t.length?t:e!=null&&e.entity_id?[e.entity_id]:[]}function sN(e,t){if(!e)return`K${t+1}`;const n=e.trim().split(/\s+/)[0];return n.length<=8?n:n.slice(0,7)}function m0(e="Seite",t=[]){return{id:`page-${Date.now().toString(36)}`,name:e,widgets:t.map(n=>mn({...n}))}}function lN(){return{pages:[m0("Home",[])]}}function ia(e){var t,n,r,i,a,o;return{weather:((t=e.weather)==null?void 0:t.entity_id)||"",media:((n=e.mediaPlayer)==null?void 0:n.entity_id)||"",camera:((r=e.camera)==null?void 0:r.entity_id)||"",cameras:Array.isArray(e.cameras)?e.cameras.filter(Boolean).slice(0,ie.cameraEntities):(i=e.camera)!=null&&i.entity_id?[e.camera.entity_id]:[],shopping:((a=e.shoppingList)==null?void 0:a.entity_id)||"",alarm:((o=e.alarm)==null?void 0:o.entity_id)||"",quickActions:(e.quickActions||[]).map((l,c)=>{var u;return{entity_id:(l==null?void 0:l.entity_id)||"",entity_ids:(l==null?void 0:l.entity_ids)||(l!=null&&l.entity_id&&c>=2?[l.entity_id]:[]),label:(l==null?void 0:l.label)||"",icon:(l==null?void 0:l.icon)||"",mode:c===1?"brightness":"toggle",isPopup:!!((u=l==null?void 0:l.entity_ids)!=null&&u.length)||c>=2}}),scenes:(e.scenes||[]).map(l=>({entity_id:(l==null?void 0:l.entity_id)||"",label:(l==null?void 0:l.label)||"",icon:(l==null?void 0:l.icon)||""}))}}function cN(e,t){let n=0,r=0;const i=t.quickActions.filter(a=>!a.isPopup);return e.map(a=>{var l,c;const o={...a};if(a.type==="weather"&&t.weather&&(o.entity_id=t.weather),a.type==="media"&&t.media&&(o.entity_id=t.media),a.type==="camera"&&t.camera&&(o.entity_id=t.camera,!((l=o.entity_ids)!=null&&l.length)&&((c=t.cameras)!=null&&c.length)&&(o.entity_ids=[...t.cameras])),a.type==="shopping"&&t.shopping&&(o.entity_id=t.shopping),a.type==="alarm"&&t.alarm&&(o.entity_id=t.alarm),a.type==="quickAction"){const u=i[n];n+=1,u&&(o.entity_id=u.entity_id||"",o.label=u.label||o.label,o.icon=u.icon||o.icon,o.mode=u.mode||o.mode)}if(a.type==="popup"){const u=t.quickActions.filter(f=>f.isPopup||f.entity_ids&&f.entity_ids.length),d=e.slice(0,e.indexOf(a)).filter(f=>f.type==="popup").length,m=u[d];m&&(o.entity_ids=[...m.entity_ids||[]],o.label=m.label||o.label,o.icon=m.icon||o.icon)}if(a.type==="scene"){const u=t.scenes[r];r+=1,u&&(o.entity_id=u.entity_id||"",o.label=u.label||o.label,o.icon=u.icon||o.icon)}return o})}function uN(e){var t;return(t=e==null?void 0:e.pages)==null?void 0:t.some(n=>{var r;return(r=n.widgets)==null?void 0:r.some(i=>{var a;return i.entity_id||((a=i.entity_ids)==null?void 0:a.length)})})}function dN(e,t){let n=0,r=0;const i=t.quickActions.filter(a=>!a.isPopup);return e.map(a=>{var l,c,u,d;const o={...a};if(a.type==="weather"&&!a.entity_id&&t.weather&&(o.entity_id=t.weather),a.type==="media"&&!a.entity_id&&t.media&&(o.entity_id=t.media),a.type==="camera"&&!a.entity_id&&t.camera&&(o.entity_id=t.camera,!((l=a.entity_ids)!=null&&l.length)&&((c=t.cameras)!=null&&c.length)&&(o.entity_ids=[...t.cameras])),a.type==="shopping"&&!a.entity_id&&t.shopping&&(o.entity_id=t.shopping),a.type==="alarm"&&!a.entity_id&&t.alarm&&(o.entity_id=t.alarm),a.type==="quickAction"&&!a.entity_id){const m=i[n];n+=1,m!=null&&m.entity_id&&(o.entity_id=m.entity_id,o.label=m.label||o.label,o.icon=m.icon||o.icon,o.mode=m.mode||o.mode)}else a.type==="quickAction"&&(n+=1);if(a.type==="popup"&&!((u=a.entity_ids)!=null&&u.length)){const m=t.quickActions.filter(v=>v.isPopup||v.entity_ids&&v.entity_ids.length),f=e.slice(0,e.indexOf(a)).filter(v=>v.type==="popup").length,g=m[f];(d=g==null?void 0:g.entity_ids)!=null&&d.length&&(o.entity_ids=[...g.entity_ids],o.label=g.label||o.label,o.icon=g.icon||o.icon)}if(a.type==="scene"&&!a.entity_id){const m=t.scenes[r];r+=1,m!=null&&m.entity_id&&(o.entity_id=m.entity_id,o.label=m.label||o.label,o.icon=m.icon||o.icon)}else a.type==="scene"&&(r+=1);return o})}function Ku(e){const t={weather:"",media:"",camera:"",shopping:"",alarm:"",quickActions:[],scenes:[]};return e.pages.forEach(n=>{n.widgets.forEach(r=>{r.type==="weather"&&r.entity_id&&(t.weather=r.entity_id),r.type==="media"&&r.entity_id&&(t.media=r.entity_id),r.type==="camera"&&r.entity_id&&(t.camera=r.entity_id),r.type==="shopping"&&r.entity_id&&(t.shopping=r.entity_id),r.type==="alarm"&&r.entity_id&&(t.alarm=r.entity_id),r.type==="quickAction"&&t.quickActions.push({entity_id:r.entity_id||"",label:r.label||"",icon:r.icon||"",mode:r.mode}),r.type==="popup"&&t.quickActions.push({entity_ids:r.entity_ids||[],label:r.label||"",icon:r.icon||"",isPopup:!0}),r.type==="scene"&&t.scenes.push({entity_id:r.entity_id||"",label:r.label||"",icon:r.icon||""})})}),t}function f0(e,t=null){var r;if(!((r=e==null?void 0:e.pages)!=null&&r.length))return null;const n=e.pages.slice(0,ie.pages).map((i,a)=>({id:i.id||`page-${a}`,name:i.name||`Seite ${a+1}`,widgets:(i.widgets||[]).slice(0,ie.widgetsPerPage).map(o=>{const l={id:o.id||u0(),type:o.type,x:Number(o.x)||0,y:Number(o.y)||0,w:Number(o.w)||2,h:Number(o.h)||1,entity_id:o.entity_id||"",entity_ids:Array.isArray(o.entity_ids)?o.entity_ids.filter(Boolean).slice(0,o.type==="coverPopup"?ie.coverPopupEntities:o.type==="sensor"?ie.sensorEntities:o.type==="sensorStatus"?ie.contactStatusEntities:o.type==="scene"?ie.sceneEntities:ie.popupEntities):[],disabled_entity_ids:o.type==="popup"&&Array.isArray(o.disabled_entity_ids)?o.disabled_entity_ids.filter(Boolean):[],label:o.label||"",icon:o.icon||"",mode:o.mode==="brightness"?"brightness":"toggle"};return o.type==="energyTile"&&(l.tileKind=Object.hasOwn(Mo,o.tileKind)?o.tileKind:"inputs-outputs",l.tileKind==="ev-heatpump"&&(l.deviceImages=Gi(o.deviceImages))),o.type==="sensor"&&(l.showHistory=!!o.showHistory,l.historyHours=eN(o.historyHours)),o.type==="haCard"&&(l.card=ds(o.card)),o.type==="scene"&&o.scene_art&&typeof o.scene_art=="object"&&(l.scene_art=Object.fromEntries(Object.entries(o.scene_art).filter(([,c])=>typeof c=="string"&&c))),mn(l)})}));if(t){const i=ia(t);n.forEach(a=>{a.widgets=cN(a.widgets,i)})}return{pages:n}}function mN(e,t=Je,n=ht,r=0){const i=(e.width-r*(t-1))/t,a=(e.height-r*(n-1))/n;return{cellW:i,cellH:a,gap:r,cols:t,rows:n}}function fN(e,t){const{cellW:n,cellH:r,gap:i}=t;return{left:e.x*(n+i),top:e.y*(r+i),width:e.w*n+(e.w-1)*i,height:e.h*r+(e.h-1)*i}}function ef(e,t,n){const r=n.cellW+n.gap,i=n.cellH+n.gap;return{dx:Math.round(e/r),dy:Math.round(t/i),offsetX:e-Math.round(e/r)*r,offsetY:t-Math.round(t/i)*i}}function pN(e,t,{dx:n,dy:r}){const{x:i,y:a,w:o,h:l}=t;switch(e){case"n":return{x:i,y:a+r,w:o,h:l-r};case"s":return{x:i,y:a,w:o,h:l+r};case"w":return{x:i+n,y:a,w:o-n,h:l};case"e":return{x:i,y:a,w:o+n,h:l};case"se":return{x:i,y:a,w:o+n,h:l+r};default:return{x:i,y:a,w:o,h:l}}}function hN(e,t){const{dx:n,dy:r,offsetX:i,offsetY:a}=t;switch(e){case"n":case"s":return{dx:0,dy:r,offsetX:0,offsetY:a};case"e":case"w":return{dx:n,dy:0,offsetX:i,offsetY:0};case"se":return{dx:n,dy:r,offsetX:i,offsetY:a};default:return{dx:0,dy:0,offsetX:0,offsetY:0}}}function V(e,t,n,r,i,a={}){return Bt(e,{x:t,y:n,w:r,h:i,...a})}function gN(e={}){var r,i,a,o,l,c,u,d,m,f,g,v,x,w,y,p,h,k,N,E,C,j,z;const t=e.quickActions||[],n=e.scenes||[];return[V("weather",0,0,4,2,{entity_id:e.weather||""}),V("media",0,2,4,1,{entity_id:e.media||""}),V("camera",0,3,4,1,{entity_id:e.camera||((r=e.cameras)==null?void 0:r[0])||"",entity_ids:(e.cameras||[]).slice(0,ie.cameraEntities)}),V("quickAction",4,0,2,2,{entity_id:((i=t[0])==null?void 0:i.entity_id)||"",label:((a=t[0])==null?void 0:a.label)||"",icon:((o=t[0])==null?void 0:o.icon)||"",mode:"toggle"}),V("scene",4,2,2,1,{entity_id:((l=n[0])==null?void 0:l.entity_id)||"",label:((c=n[0])==null?void 0:c.label)||"",icon:((u=n[0])==null?void 0:u.icon)||""}),V("scene",4,3,2,1,{entity_id:((d=n[1])==null?void 0:d.entity_id)||"",label:((m=n[1])==null?void 0:m.label)||"",icon:((f=n[1])==null?void 0:f.icon)||""}),V("quickAction",6,0,2,2,{entity_id:((g=t[1])==null?void 0:g.entity_id)||"",label:((v=t[1])==null?void 0:v.label)||"",icon:((x=t[1])==null?void 0:x.icon)||"",mode:"brightness"}),V("scene",6,2,2,1,{entity_id:((w=n[2])==null?void 0:w.entity_id)||"",label:((y=n[2])==null?void 0:y.label)||"",icon:((p=n[2])==null?void 0:p.icon)||""}),V("scene",6,3,2,1,{entity_id:((h=n[3])==null?void 0:h.entity_id)||"",label:((k=n[3])==null?void 0:k.label)||"",icon:((N=n[3])==null?void 0:N.icon)||""}),V("popup",8,0,2,2,{entity_ids:((E=t[2])==null?void 0:E.entity_ids)||((C=t[2])!=null&&C.entity_id?[t[2].entity_id]:[]),label:((j=t[2])==null?void 0:j.label)||"",icon:((z=t[2])==null?void 0:z.icon)||""}),V("alarm",10,0,2,2,{entity_id:e.alarm||"",label:"Alarmanlage",icon:"mdi:shield-home"})]}function yN(){return[V("sankey",0,0,8,ht,{label:"Energiefluss heute"}),V("energyTile",8,0,4,2,{tileKind:"inputs-outputs",label:"Inputs / Outputs"}),V("energyTile",8,2,4,2,{tileKind:"ev-heatpump",label:"E-Auto"})]}const fc=[{id:"classic",name:"Klassisch",description:"Wetter links, Entitäten & Szenen rechts — wie bisher",preview:[4,2,2,2,2,2],build:e=>({pages:[{id:"page-home",name:"Home",widgets:gN(e)},{id:"page-list",name:"Liste",widgets:[V("shopping",0,0,Je,ht,{entity_id:e.shopping||""})]},{id:"page-energy",name:"Energie",widgets:yN()}]})},{id:"weather-top",name:"Wetter oben",description:"Breites Wetter, Steuerung darunter",preview:[12,3,3,3,3],build:e=>{var t,n,r,i,a,o,l,c,u,d;return{pages:[{id:"page-home",name:"Home",widgets:[V("weather",0,0,Je,2,{entity_id:e.weather||""}),V("media",0,2,4,1,{entity_id:e.media||""}),V("camera",4,2,4,2,{entity_id:e.camera||""}),V("quickAction",8,2,2,2,{entity_id:((n=(t=e.quickActions)==null?void 0:t[0])==null?void 0:n.entity_id)||"",mode:"toggle"}),V("quickAction",10,2,2,2,{entity_id:((i=(r=e.quickActions)==null?void 0:r[1])==null?void 0:i.entity_id)||"",mode:"brightness"}),V("scene",8,0,2,1,{entity_id:((o=(a=e.scenes)==null?void 0:a[0])==null?void 0:o.entity_id)||""}),V("scene",10,0,2,1,{entity_id:((c=(l=e.scenes)==null?void 0:l[1])==null?void 0:c.entity_id)||""}),V("popup",0,3,4,1,{entity_ids:((d=(u=e.quickActions)==null?void 0:u[2])==null?void 0:d.entity_ids)||[]})]},{id:"page-list",name:"Liste",widgets:[V("shopping",0,0,Je,ht,{entity_id:e.shopping||""})]}]}}},{id:"compact",name:"Kompakt",description:"Kleines Wetter, viele Kacheln",preview:[3,3,3,3],build:e=>{var t,n,r,i,a,o,l,c,u,d,m,f,g,v,x,w;return{pages:[{id:"page-home",name:"Home",widgets:[V("weather",0,0,3,2,{entity_id:e.weather||""}),V("media",0,2,3,1,{entity_id:e.media||""}),V("camera",0,3,3,1,{entity_id:e.camera||""}),V("quickAction",3,0,3,2,{entity_id:((n=(t=e.quickActions)==null?void 0:t[0])==null?void 0:n.entity_id)||"",mode:"toggle"}),V("quickAction",6,0,3,2,{entity_id:((i=(r=e.quickActions)==null?void 0:r[1])==null?void 0:i.entity_id)||"",mode:"brightness"}),V("popup",9,0,3,2,{entity_ids:((o=(a=e.quickActions)==null?void 0:a[2])==null?void 0:o.entity_ids)||[]}),V("scene",3,2,2,1,{entity_id:((c=(l=e.scenes)==null?void 0:l[0])==null?void 0:c.entity_id)||""}),V("scene",5,2,2,1,{entity_id:((d=(u=e.scenes)==null?void 0:u[1])==null?void 0:d.entity_id)||""}),V("scene",7,2,2,1,{entity_id:((f=(m=e.scenes)==null?void 0:m[2])==null?void 0:f.entity_id)||""}),V("scene",9,2,2,1,{entity_id:((v=(g=e.scenes)==null?void 0:g[3])==null?void 0:v.entity_id)||""}),V("popup",3,3,3,1,{entity_ids:((w=(x=e.quickActions)==null?void 0:x[3])==null?void 0:w.entity_ids)||[]})]},{id:"page-list",name:"Liste",widgets:[V("shopping",0,0,Je,ht,{entity_id:e.shopping||""})]}]}}},{id:"minimal",name:"Minimal",description:"Nur das Wichtigste",preview:[6,3,3],build:e=>{var t,n,r,i;return{pages:[{id:"page-home",name:"Home",widgets:[V("weather",0,0,6,2,{entity_id:e.weather||""}),V("media",0,2,6,1,{entity_id:e.media||""}),V("quickAction",6,0,3,2,{entity_id:((n=(t=e.quickActions)==null?void 0:t[0])==null?void 0:n.entity_id)||"",mode:"toggle"}),V("quickAction",9,0,3,2,{entity_id:((i=(r=e.quickActions)==null?void 0:r[1])==null?void 0:i.entity_id)||"",mode:"brightness"}),V("camera",6,2,6,2,{entity_id:e.camera||""})]},{id:"page-list",name:"Liste",widgets:[V("shopping",0,0,Je,ht,{entity_id:e.shopping||""})]}]}}}];function vN(e){return fc.find(t=>t.id===e)||fc[0]}function $n(e,t={}){return vN(e).build(t)}const bN={dark:{id:"dark",label:"Schwarz"},light:{id:"light",label:"Weiß"},colorful:{id:"colorful",label:"Bunt"},blackColorful:{id:"blackColorful",label:"Schwarz bunt"}},At=[{bg:"#D0F2E0",fg:"#1a1a1a"},{bg:"#F7BD9D",fg:"#1a1a1a"},{bg:"#F9E892",fg:"#1a1a1a"},{bg:"#BDE0F7",fg:"#1a1a1a"},{bg:"#E0C3FC",fg:"#1a1a1a"},{bg:"#F0EEE8",fg:"#1a1a1a"},{bg:"#F5C6D0",fg:"#1a1a1a"},{bg:"#2C2C2C",fg:"#ffffff"}],Do=[{id:"indigo",label:"Indigo",accent:"#6366f1",accentRgb:"99, 102, 241",preview:"linear-gradient(135deg, #a5b4fc, #4338ca)"},{id:"ocean",label:"Ozean",accent:"#06b6d4",accentRgb:"6, 182, 212",preview:"linear-gradient(135deg, #67e8f9, #0e7490)"},{id:"forest",label:"Wald",accent:"#10b981",accentRgb:"16, 185, 129",preview:"linear-gradient(135deg, #6ee7b7, #047857)"},{id:"sunset",label:"Sonnenuntergang",accent:"#f59e0b",accentRgb:"245, 158, 11",preview:"linear-gradient(135deg, #fcd34d, #c2410c)"},{id:"rose",label:"Rose",accent:"#ec4899",accentRgb:"236, 72, 153",preview:"linear-gradient(135deg, #f9a8d4, #be185d)"},{id:"violet",label:"Violett",accent:"#8b5cf6",accentRgb:"139, 92, 246",preview:"linear-gradient(135deg, #c4b5fd, #6d28d9)"}],xN=["linear-gradient(135deg, #6366f1, #2563eb)","linear-gradient(135deg, #f59e0b, #ea580c)","linear-gradient(135deg, #10b981, #059669)","linear-gradient(135deg, #ec4899, #be185d)","linear-gradient(135deg, #8b5cf6, #6d28d9)","linear-gradient(135deg, #06b6d4, #0891b2)","linear-gradient(135deg, #ef4444, #b91c1c)","linear-gradient(135deg, #14b8a6, #0d9488)"],wN=["linear-gradient(135deg, #52525b, #18181b)","linear-gradient(135deg, #3f3f46, #09090b)","linear-gradient(135deg, #71717a, #27272a)","linear-gradient(135deg, #27272a, #09090b)","linear-gradient(135deg, #52525b, #27272a)","linear-gradient(135deg, #3f3f46, #18181b)","linear-gradient(135deg, #71717a, #3f3f46)","linear-gradient(135deg, #18181b, #000000)"],Mt={mode:"dark",colorSet:"indigo"};function kN(e){const t=parseInt(e.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]}function On([e,t,n]){return`#${[e,t,n].map(r=>r.toString(16).padStart(2,"0")).join("")}`}function In(e,t,n){return e.map((r,i)=>Math.round(r+(t[i]-r)*n))}function Vu(e){const t=kN(e);return[On(In(t,[255,255,255],.45)),On(In(t,[255,255,255],.25)),e,On(In(t,[0,0,0],.18)),On(In(t,[0,0,0],.35)),On(In(t,[0,0,0],.5)),On(In(t,[0,0,0],.65)),On(In(t,[0,0,0],.8))]}function SN(e){const t=Vu(e);return t.map((n,r)=>{const i=t[Math.min(r+2,t.length-1)];return`linear-gradient(135deg, ${n}, ${i})`})}function NN(e){return e==="light"||e==="colorful"||e==="dark"||e==="blackColorful"?e:e==="monochrome"?"dark":Mt.mode}function p0(e){const t=String(e||"0");let n=0;for(let r=0;r<t.length;r+=1)n=t.charCodeAt(r)+((n<<5)-n);return Math.abs(n)}function AN(e="0"){return At[p0(e)%At.length]}const jN={ev:At[0]};function EN(e="0",t=""){const{bg:n,fg:r}=jN[t]||AN(e);return{"--tm-surface":n,"--tm-surface-2":n,"--tm-surface-border":"transparent","--tm-tile-fg":r}}const tf=At.filter(e=>e.fg!=="#ffffff");function CN(e,t){const{bg:n,fg:r}=tf[(p0(e)+t)%tf.length];return{"--tm-surface":n,"--tm-surface-2":n,"--tm-surface-border":"transparent","--tm-tile-fg":r}}function Mn(e={}){const t=NN(e.mode),n=Do.some(r=>r.id===e.colorSet)?e.colorSet:Mt.colorSet;return{mode:t,colorSet:n}}function Gu(e=Mt.colorSet){return Do.find(t=>t.id===e)||Do[0]}function Qu(e=Mt){const t=Mn(e);if(t.mode==="light")return{mode:"light",colorSet:t.colorSet,accent:"#1d1d1f",accentRgb:"29, 29, 31"};if(t.mode==="colorful"){const n=Gu(t.colorSet);return{mode:"colorful",colorSet:n.id,accent:n.accent,accentRgb:n.accentRgb}}return t.mode==="blackColorful"?{mode:"blackColorful",colorSet:t.colorSet,accent:"#1a1a1a",accentRgb:"26, 26, 26"}:{mode:"dark",colorSet:t.colorSet,accent:"#6366f1",accentRgb:"99, 102, 241"}}function TN(){return{"--tm-bg":"#000000","--tm-fg":"#ffffff","--tm-surface":"rgba(255, 255, 255, 0.10)","--tm-surface-2":"rgba(255, 255, 255, 0.05)","--tm-surface-border":"rgba(255, 255, 255, 0.08)","--tm-tile-fg":"#ffffff","--tm-overlay":"linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.4) 100%)","--tm-screensaver-gradient":"linear-gradient(135deg, rgba(49, 46, 129, 0.3), black, rgba(88, 28, 135, 0.3))","--tm-bg-image-opacity":"0.6","--tm-settings-bg":"rgba(0, 0, 0, 0.85)","--tm-settings-surface":"rgba(255, 255, 255, 0.05)","--tm-settings-surface-border":"rgba(255, 255, 255, 0.08)","--tm-accent":"#6366f1","--tm-accent-rgb":"99, 102, 241","--tm-vi-accent":"#ff6b2b","--tm-vi-track":"#e5e5ea"}}function PN(){return{"--tm-bg":"#f5f5f7","--tm-fg":"#1d1d1f","--tm-surface":"#1d1d1f","--tm-surface-2":"#1d1d1f","--tm-surface-border":"rgba(255, 255, 255, 0.08)","--tm-tile-fg":"#ffffff","--tm-overlay":"none","--tm-screensaver-gradient":"linear-gradient(135deg, rgba(0, 0, 0, 0.08), #f5f5f7, rgba(0, 0, 0, 0.05))","--tm-bg-image-opacity":"0","--tm-settings-bg":"rgba(245, 245, 247, 0.96)","--tm-settings-surface":"rgba(0, 0, 0, 0.04)","--tm-settings-surface-border":"rgba(0, 0, 0, 0.08)","--tm-accent":"#1d1d1f","--tm-accent-rgb":"29, 29, 31","--tm-vi-accent":"#1d1d1f","--tm-vi-track":"#d1d1d6"}}function MN(e,t){const n=Vu(e),r=n[n.length-1];return{"--tm-bg":r,"--tm-fg":"#ffffff","--tm-surface":`rgba(${t}, 0.28)`,"--tm-surface-2":`rgba(${t}, 0.16)`,"--tm-surface-border":`rgba(${t}, 0.35)`,"--tm-tile-fg":"#ffffff","--tm-overlay":`linear-gradient(to top, ${r} 0%, rgba(${t}, 0.35) 55%, rgba(${t}, 0.2) 100%)`,"--tm-screensaver-gradient":`linear-gradient(135deg, rgba(${t}, 0.45), ${r}, rgba(${t}, 0.25))`,"--tm-bg-image-opacity":"0.25","--tm-settings-bg":"rgba(0, 0, 0, 0.88)","--tm-settings-surface":"rgba(255, 255, 255, 0.06)","--tm-settings-surface-border":`rgba(${t}, 0.25)`,"--tm-accent":e,"--tm-accent-rgb":t,"--tm-vi-accent":e,"--tm-vi-track":`rgba(${t}, 0.25)`}}function zN(){const e=At[0];return{"--tm-bg":"#000000","--tm-fg":"#ffffff","--tm-surface":e.bg,"--tm-surface-2":"#F0EEE8","--tm-surface-border":"transparent","--tm-tile-fg":e.fg,"--tm-overlay":"none","--tm-screensaver-gradient":"linear-gradient(135deg, #D0F2E0 0%, #000 40%, #E0C3FC 100%)","--tm-bg-image-opacity":"0","--tm-settings-bg":"rgba(0, 0, 0, 0.92)","--tm-settings-surface":"rgba(255, 255, 255, 0.06)","--tm-settings-surface-border":"rgba(255, 255, 255, 0.08)","--tm-accent":"#1a1a1a","--tm-accent-rgb":"26, 26, 26","--tm-vi-accent":"#1a1a1a","--tm-vi-track":"rgba(0, 0, 0, 0.12)","--tm-radius-xl":"2rem"}}function LN(e=Mt){const t=Qu(e);return t.mode==="light"?PN():t.mode==="colorful"?MN(t.accent,t.accentRgb):t.mode==="blackColorful"?zN():TN()}function ON(e=Mt){const{mode:t}=Mn(e);return{"data-tm-theme":t,style:LN(e)}}const IN=At.map(({bg:e})=>e);function RN(e=Mt){const{mode:t,colorSet:n}=Mn(e);return t==="light"?wN:t==="colorful"?SN(Gu(n).accent):t==="blackColorful"?IN:xN}function Ju(e=Mt){return Mn(e).mode==="light"}function Xu(e=Mt){return Mn(e).mode==="colorful"}function rr(e=Mt){return Mn(e).mode==="blackColorful"}const Qi=12,h0="the-monitor-active-room";function g0(){return`room-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`}function Fo(e,{areaId:t="",layout:n=null,layoutPreset:r="classic"}={}){return{id:g0(),name:(e||"Raum").trim()||"Raum",areaId:t||"",layoutPreset:r,layout:n||$n(r)}}function DN(e={}){var r,i;const t=e.layoutPreset||"classic",n=(i=(r=e.layout)==null?void 0:r.pages)!=null&&i.length?f0(e.layout):$n(t);return{id:e.id||g0(),name:(e.name||"Raum").trim()||"Raum",areaId:e.areaId||"",layoutPreset:t,layout:n}}function y0(e){return!Array.isArray(e)||!e.length?[Fo("Zuhause")]:e.slice(0,Qi).map(DN)}function FN(e,t={}){var r,i;if(Array.isArray(t.rooms)&&t.rooms.length)return y0(t.rooms);const n=(i=(r=e.layout)==null?void 0:r.pages)!=null&&i.length?e.layout:$n(e.layoutPreset||"classic");return[Fo("Zuhause",{layout:n,layoutPreset:e.layoutPreset||"classic"})]}function _N(e,t){return(e==null?void 0:e.find(n=>n.id===t))||(e==null?void 0:e[0])||null}function nf(e){var t;try{const n=localStorage.getItem(h0);if(n&&(e!=null&&e.some(r=>r.id===n)))return n}catch{}return((t=e==null?void 0:e[0])==null?void 0:t.id)||""}function Pa(e){try{e&&localStorage.setItem(h0,e)}catch{}}function WN(e){var t;return(t=e.rooms)==null?void 0:t.some(n=>uN(n.layout))}function BN(e){return e==null?void 0:e.some(t=>{var n,r;return(r=(n=t.layout)==null?void 0:n.pages)==null?void 0:r.some(i=>{var a;return(a=i.widgets)==null?void 0:a.some(o=>{var l;return o.entity_id||((l=o.entity_ids)==null?void 0:l.length)})})})}const Zu="the-monitor-config",Za={rooms:y0([{name:"Zuhause"}]),windows:[],presence:[],vacuum:{entity_id:""},ev:{stateEntity:"",batteryEntity:"",powerEntity:"",rangeEntity:"",chargeTimeEntity:"",lastTripEntity:"",costEntity:"",label:"E-Auto"},backgroundImage:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2940&auto=format&fit=crop",screensaver:{enabled:!0,idleMinutes:1,showDate:!0,showWeather:!0,style:"classic"},appearance:{...Mt},hideHaSidebar:!1,roomSidebar:!1};function HN(e,t=0){var i,a;const n=((a=(i=e.rooms)==null?void 0:i[t])==null?void 0:a.layout)||lN(),r=Ku(n);return{...e,weather:{entity_id:r.weather||""},mediaPlayer:{entity_id:r.media||""},camera:{entity_id:r.camera||""},shoppingList:{entity_id:r.shopping||""},alarm:{entity_id:r.alarm||""}}}function qN(e){const t=ia(e);return{layout:$n("classic",t),layoutPreset:"classic"}}function Ee(e={}){var i,a,o,l,c,u,d;const t=structuredClone(Za);if(e.backgroundImage&&(t.backgroundImage=e.backgroundImage),(i=e.vacuum)!=null&&i.entity_id&&(t.vacuum={entity_id:e.vacuum.entity_id}),e.ev&&(t.ev={stateEntity:e.ev.stateEntity||e.ev.state_entity||"",batteryEntity:e.ev.batteryEntity||e.ev.battery_entity||"",powerEntity:e.ev.powerEntity||e.ev.power_entity||"",rangeEntity:e.ev.rangeEntity||"",chargeTimeEntity:e.ev.chargeTimeEntity||"",lastTripEntity:e.ev.lastTripEntity||"",costEntity:e.ev.costEntity||"",label:e.ev.label||Za.ev.label}),Array.isArray(e.windows)&&(t.windows=e.windows.filter(m=>m==null?void 0:m.entity_id).slice(0,ie.windows).map(m=>({entity_id:m.entity_id,label:m.label||""}))),Array.isArray(e.presence)&&(t.presence=e.presence.filter(m=>m==null?void 0:m.entity_id).map(m=>({entity_id:m.entity_id,label:m.label||""}))),e.screensaver){const m=Number(e.screensaver.idleMinutes);t.screensaver={enabled:e.screensaver.enabled!==!1,idleMinutes:Number.isFinite(m)?Math.min(60,Math.max(1,Math.round(m))):Za.screensaver.idleMinutes,showDate:e.screensaver.showDate!==!1,showWeather:e.screensaver.showWeather!==!1,style:e.screensaver.style==="sexy"?"sexy":"classic"}}t.appearance=Mn(e.appearance||t.appearance),typeof e.hideHaSidebar=="boolean"&&(t.hideHaSidebar=e.hideHaSidebar),typeof e.roomSidebar=="boolean"&&(t.roomSidebar=e.roomSidebar);const n=(o=(a=e.layout)==null?void 0:a.pages)==null?void 0:o.length,r=((l=e.quickActions)==null?void 0:l.length)||((c=e.scenes)==null?void 0:c.length)||((u=e.weather)==null?void 0:u.entity_id);if(n)t.layout=f0(e.layout)||$n("classic"),t.layoutPreset=e.layoutPreset||"classic";else if(r){const m=qN(e);t.layout=m.layout,t.layoutPreset=m.layoutPreset}else(d=e.rooms)!=null&&d.length||(t.layout=$n(e.layoutPreset||"classic"),t.layoutPreset=e.layoutPreset||"classic");return t.rooms=FN(t,e),delete t.layout,delete t.layoutPreset,HN(t)}function $u(){try{const e=localStorage.getItem(Zu);return e?Ee(JSON.parse(e)):Ee()}catch{return Ee()}}function UN(){var r,i,a,o,l,c,u;const e=$u();if(WN(e))return tl(af(rf(e)));const t=Ee(Nu);if(!((o=(a=(i=(r=e.rooms)==null?void 0:r[0])==null?void 0:i.layout)==null?void 0:a.pages)!=null&&o.length))return tl(t);const n=ia(t);return tl(af(rf(Ee({...e,weather:t.weather,mediaPlayer:t.mediaPlayer,camera:t.camera,shoppingList:t.shoppingList,alarm:t.alarm,cameras:t.cameras,vacuum:(l=e.vacuum)!=null&&l.entity_id?e.vacuum:t.vacuum,ev:(c=e.ev)!=null&&c.stateEntity?e.ev:t.ev,presence:(u=e.presence)!=null&&u.length?e.presence:t.presence,rooms:e.rooms.map((d,m)=>m===0?{...d,layout:{...d.layout,pages:d.layout.pages.map(f=>({...f,widgets:dN(f.widgets,n)}))}}:d)}))))}function rf(e){var u,d,m,f,g,v;const t=((u=e.alarm)==null?void 0:u.entity_id)||ia(Nu).alarm||"alarm_control_panel.haus";if((d=e.rooms)==null?void 0:d.some(x=>{var w,y;return(y=(w=x.layout)==null?void 0:w.pages)==null?void 0:y.some(p=>{var h;return(h=p.widgets)==null?void 0:h.some(k=>k.type==="alarm")})}))return e;const r=structuredClone(e),i=(m=r.rooms)==null?void 0:m[0],a=(g=(f=i==null?void 0:i.layout)==null?void 0:f.pages)==null?void 0:g[0];if(!((v=a==null?void 0:a.widgets)!=null&&v.length))return e;const o=a.widgets.filter(x=>x.type==="popup"),l=o[o.length-1];if(!l)return e;const c=a.widgets.findIndex(x=>x.id===l.id);return a.widgets[c]=Bt("alarm",{x:l.x,y:l.y,w:l.w,h:l.h,entity_id:t,label:"Alarmanlage",icon:"mdi:shield-home"}),Ee(r)}function af(e){var i;const t=ia(Nu).cameras;if(!t.length)return e;const n=structuredClone(e);let r=!1;return(i=n.rooms)==null||i.forEach(a=>{var o,l;(l=(o=a.layout)==null?void 0:o.pages)==null||l.forEach(c=>{c.widgets=c.widgets.map(u=>{var d;return u.type!=="camera"||((d=u.entity_ids)==null?void 0:d.length)>1?u:(r=!0,{...u,entity_id:u.entity_id||t[0],entity_ids:[...t]})})})}),r?Ee(n):e}function YN(){return[Bt("sankey",{x:0,y:0,w:8,h:4,label:"Energiefluss heute"}),Bt("energyTile",{x:8,y:0,w:4,h:2,tileKind:"inputs-outputs",label:"Inputs / Outputs"}),Bt("energyTile",{x:8,y:2,w:4,h:2,tileKind:"ev-heatpump",label:"E-Auto"})]}function KN(e){var l,c,u,d,m;const t=(l=e==null?void 0:e.pages)==null?void 0:l.find(f=>{var g;return f.id==="page-energy"||((g=f.widgets)==null?void 0:g.some(v=>v.type==="sankey"))});if(!t)return(c=e==null?void 0:e.pages)!=null&&c.length?{...e,pages:[...e.pages,{id:"page-energy",name:"Energie",widgets:YN()}]}:e;const n=(u=t.widgets)==null?void 0:u.some(f=>f.type==="energyTile"&&f.tileKind==="inputs-outputs"),r=(d=t.widgets)==null?void 0:d.some(f=>f.type==="energyTile"&&f.tileKind==="ev-heatpump"),i=(m=t.widgets)==null?void 0:m.find(f=>f.type==="sankey");if(n&&r)return e;const a=structuredClone(e),o=a.pages.find(f=>f.id===t.id)||a.pages.find(f=>{var g;return(g=f.widgets)==null?void 0:g.some(v=>v.type==="sankey")});if(!o)return e;if(i&&i.w>=12){const f=o.widgets.findIndex(g=>g.id===i.id);o.widgets[f]={...o.widgets[f],w:8,h:4,x:0,y:0}}return n||o.widgets.push(Bt("energyTile",{x:8,y:0,w:4,h:2,tileKind:"inputs-outputs",label:"Inputs / Outputs"})),r||o.widgets.push(Bt("energyTile",{x:8,y:2,w:4,h:2,tileKind:"ev-heatpump",label:"E-Auto"})),a}function tl(e){let t=!1;const n=e.rooms.map(r=>{const i=KN(r.layout);return i!==r.layout&&(t=!0),{...r,layout:i}});return t?Ee({...e,rooms:n}):e}function VN(e){localStorage.setItem(Zu,JSON.stringify(e))}function GN(e){return JSON.stringify(e,null,2)}function QN(e){const t=JSON.parse(e);return Ee(t)}function JN(e){var t,n,r,i;return!!(BN(e.rooms)||(t=e.weather)!=null&&t.entity_id||(n=e.mediaPlayer)!=null&&n.entity_id||(r=e.shoppingList)!=null&&r.entity_id||(i=e.vacuum)!=null&&i.entity_id)}function of(e={},{embedded:t=!1}={}){const n=$u(),r=Ee(e),i=JN(r),a=!!localStorage.getItem(Zu);return Ee(t?a?{...Ca,...r,...n}:i?{...Ca,...n,...r}:{...Ca,...n,...r}:i?{...Ca,...n,...r}:{...n,backgroundImage:r.backgroundImage||n.backgroundImage})}const v0=b.createContext(null);function pc(e,t=0){var i,a;const n=(a=(i=e.rooms)==null?void 0:i[t])==null?void 0:a.layout,r=Ku(n);return{...e,weather:{entity_id:r.weather||""},mediaPlayer:{entity_id:r.media||""},camera:{entity_id:r.camera||""},shoppingList:{entity_id:r.shopping||""}}}function vi(e,t){return e.findIndex(n=>n.id===t)}function on(e,t,n,r){var l,c;const i=vi(e.rooms,t);if(i<0)return e;const a=structuredClone(e),o=a.rooms[i];return(c=(l=o.layout)==null?void 0:l.pages)!=null&&c[n]?(o.layout.pages[n]=r(o.layout.pages[n]),pc(a,i)):e}function b0({initialConfig:e,onConfigSaved:t,children:n}){const[r,i]=b.useState(()=>e||Ee($u())),[a,o]=b.useState(()=>nf(r.rooms)),l=b.useMemo(()=>_N(r.rooms,a),[r.rooms,a]);b.useEffect(()=>{var S;if(!r.rooms.some(A=>A.id===a)){const A=((S=r.rooms[0])==null?void 0:S.id)||"";o(A),Pa(A)}},[r.rooms,a]);const c=b.useCallback(S=>{i(A=>{const P=typeof S=="function"?S(A):S,I=Ee(P);return VN(I),t==null||t(I),I})},[t]),u=b.useCallback(S=>{o(S),Pa(S)},[]),d=b.useCallback(S=>{c(A=>({...A,ev:{...Za.ev,...A.ev,...S}}))},[c]),m=b.useCallback((S,A)=>{c(P=>({...P,[S]:{entity_id:A}}))},[c]),f=b.useCallback((S,A="")=>{c(P=>P.presence.some(I=>I.entity_id===S)?P:{...P,presence:[...P.presence,{entity_id:S,label:A}]})},[c]),g=b.useCallback(S=>{c(A=>({...A,presence:A.presence.filter(P=>P.entity_id!==S)}))},[c]),v=b.useCallback((S,A="")=>{c(P=>P.windows.some(I=>I.entity_id===S)||P.windows.length>=ie.windows?P:{...P,windows:[...P.windows,{entity_id:S,label:A}]})},[c]),x=b.useCallback(S=>{c(A=>({...A,windows:A.windows.filter(P=>P.entity_id!==S)}))},[c]),w=b.useCallback(S=>{c(A=>{if(A.rooms.length>=Qi)return A;const P=Fo(S);return{...A,rooms:[...A.rooms,P]}})},[c]),y=b.useCallback(S=>{S!=null&&S.area_id&&c(A=>{if(A.rooms.length>=Qi||A.rooms.some(I=>I.areaId===S.area_id))return A;const P=Fo(S.name,{areaId:S.area_id});return{...A,rooms:[...A.rooms,P]}})},[c]),p=b.useCallback(S=>{c(A=>{var I;if(A.rooms.length<=1)return A;const P=A.rooms.filter(B=>B.id!==S);if(a===S){const B=((I=P[0])==null?void 0:I.id)||"";o(B),Pa(B)}return{...A,rooms:P}})},[a,c]),h=b.useCallback((S,A)=>{c(P=>({...P,rooms:P.rooms.map(I=>I.id===S?{...I,name:A.trim()||I.name}:I)}))},[c]),k=b.useCallback((S,A,P)=>{c(I=>on(I,a,S,B=>({...B,widgets:B.widgets.map(G=>G.id===A?{...G,...P}:G)})))},[a,c]),N=b.useCallback((S,A,P)=>{c(I=>on(I,a,S,B=>{const G=B.widgets.map(K=>{if(K.id!==A)return K;const he=mn({...K,...P});return kr(B.widgets,he,A).length?K:he});return{...B,widgets:G}}))},[a,c]),E=b.useCallback((S,A,P)=>{c(I=>on(I,a,S,B=>{const G=B.widgets.map(K=>{if(K.id!==A)return K;const he=mn({...K,...P});return kr(B.widgets,he,A).length?K:he});return{...B,widgets:G}}))},[a,c]),C=b.useCallback((S,A,P)=>{c(I=>on(I,a,S,B=>{const G=B.widgets.map(K=>{if(K.id!==A)return K;const he=mn({...K,w:P.w,h:P.h});return kr(B.widgets,he,A).length?K:he});return{...B,widgets:G}}))},[a,c]),j=b.useCallback((S,A)=>{c(P=>on(P,a,S,I=>{const B=Bt(A),G=iN(I.widgets,{w:B.w,h:B.h});return{...I,widgets:[...I.widgets,mn({...B,...G})]}}))},[a,c]),z=b.useCallback((S,A,P)=>{const I=Bt(A),B=mn({...I,...P});return c(G=>on(G,a,S,K=>K.widgets.length>=ie.widgetsPerPage||kr(K.widgets,B).length?K:{...K,widgets:[...K.widgets,B]})),B.id},[a,c]),T=b.useCallback((S,A)=>{c(P=>on(P,a,S,I=>({...I,widgets:I.widgets.filter(B=>B.id!==A)})))},[a,c]),D=b.useCallback(S=>{c(A=>{const P=vi(A.rooms,a);if(P<0)return A;const I=A.rooms[P],B=Ku(I.layout),G=$n(S,B),K=structuredClone(A);return K.rooms[P]={...I,layout:G,layoutPreset:S},pc(K,P)})},[a,c]),U=b.useCallback(()=>{c(S=>{const A=vi(S.rooms,a);if(A<0)return S;const P=S.rooms[A];if(P.layout.pages.length>=ie.pages)return S;const I=structuredClone(S);return I.rooms[A]={...P,layout:{...P.layout,pages:[...P.layout.pages,m0(`Seite ${P.layout.pages.length+1}`)]}},I})},[a,c]),J=b.useCallback(S=>{c(A=>{const P=vi(A.rooms,a);if(P<0)return A;const I=A.rooms[P];if(I.layout.pages.length<=1)return A;const B=structuredClone(A);return B.rooms[P]={...I,layout:{...I.layout,pages:I.layout.pages.filter((G,K)=>K!==S)}},pc(B,P)})},[a,c]),Z=b.useCallback((S,A)=>{c(P=>{const I=vi(P.rooms,a);if(I<0)return P;const B=P.rooms[I],{pages:G}=B.layout;if(S===A||S<0||S>=G.length||A<0||A>=G.length)return P;const K=[...G],[he]=K.splice(S,1);K.splice(A,0,he);const tt=structuredClone(P);return tt.rooms[I]={...B,layout:{...B.layout,pages:K}},tt})},[a,c]),se=b.useCallback((S,A)=>{c(P=>on(P,a,S,I=>({...I,name:A.trim()||I.name})))},[a,c]),be=b.useCallback(S=>{c(A=>({...A,screensaver:{...A.screensaver,...S}}))},[c]),H=b.useCallback(S=>{c(A=>({...A,appearance:Mn({...A.appearance,...S})}))},[c]),R=b.useCallback(S=>{c(A=>({...A,...S}))},[c]),M=b.useCallback(()=>GN(r),[r]),L=b.useCallback(S=>{try{const A=QN(S);c(A);const P=nf(A.rooms);return o(P),Pa(P),!0}catch{return!1}},[c]);return s.jsx(v0.Provider,{value:{config:r,activeRoom:l,activeRoomId:a,setActiveRoomId:u,setConfig:c,setSingleEntity:m,updateEv:d,addPresence:f,removeWindow:x,addWindow:v,removePresence:g,addRoom:w,addRoomFromHaArea:y,removeRoom:p,renameRoom:h,updateWidget:k,moveWidget:N,resizeWidget:E,applyWidgetSize:C,addWidget:j,addWidgetAt:z,removeWidget:T,applyLayoutPreset:D,addLayoutPage:U,removeLayoutPage:J,moveLayoutPage:Z,renameLayoutPage:se,updateScreensaver:be,updateAppearance:H,updateDisplay:R,exportToJson:M,importFromJson:L},children:n})}function ke(){const e=b.useContext(v0);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e}const XN={on:"An",off:"Aus",open:"Offen",closed:"Geschlossen",home:"Zuhause",not_home:"Abwesend",detected:"Erkannt",clear:"Frei",wet:"Nass",dry:"Trocken",moving:"Bewegung",plugged_in:"Angeschlossen",unplugged:"Getrennt",locked:"Gesperrt",unlocked:"Offen"};function x0(e,t=1){const n=Number(e);return Number.isFinite(n)?n.toLocaleString("de-DE",{minimumFractionDigits:0,maximumFractionDigits:t}):e}function w0(e,t){return e==="temperature"||t==="°C"||t==="°F"?1:e==="humidity"||t==="%"?0:e==="power"||e==="energy"||e==="voltage"?1:e==="illuminance"?0:1}function hc(e,t){const n=Tt(e,t),{state:r,attributes:i,domain:a}=n,o=i.unit_of_measurement||"",l=i.device_class||"";if(r==="unavailable"||r==="unknown")return{value:"—",unit:"",stateLabel:"Nicht verfügbar"};if(a==="binary_sensor")return{value:XN[r]||r,unit:"",stateLabel:""};if(a==="sensor"){const c=Number(r);if(Number.isFinite(c)){const u=w0(l,o);return{value:x0(c,u),unit:o,stateLabel:""}}return{value:r,unit:o,stateLabel:""}}return{value:r,unit:o,stateLabel:""}}function ZN(e,t){const{domain:n,attributes:r}=t,i=r.unit_of_measurement||"",a=r.device_class||"";if(n==="binary_sensor")return e>=.5?"An":"Aus";const o=Number(e);return Number.isFinite(o)?x0(o,w0(a,i)):String(e)}function $N(e){var t;return(t=e.entity_ids)!=null&&t.length?e.entity_ids.filter(Boolean):e.entity_id?[e.entity_id]:[]}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var eA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),F=(e,t)=>{const n=b.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:l="",children:c,...u},d)=>b.createElement("svg",{ref:d,...eA,width:i,height:i,stroke:r,strokeWidth:o?Number(a)*24/Number(i):a,className:["lucide",`lucide-${tA(e)}`,l].join(" "),...u},[...t.map(([m,f])=>b.createElement(m,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=F("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=F("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=F("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=F("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=F("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=F("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=F("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=F("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=F("CarFront",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=F("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=F("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=F("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=F("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=F("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=F("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=F("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=F("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=F("CloudFog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=F("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=F("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=F("CloudSnow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=F("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=F("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=F("DoorClosed",[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=F("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=F("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=F("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=F("Euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=F("Fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=F("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=F("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=F("GripHorizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=F("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=F("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=F("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=F("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=F("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=F("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=F("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=F("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=F("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=F("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=F("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=F("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=F("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=F("PanelTopOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=F("PanelTop",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=F("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=F("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=F("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=F("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=F("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=F("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=F("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=F("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=F("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=F("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=F("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=F("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=F("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=F("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=F("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=F("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=F("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=F("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=F("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=F("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=F("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=F("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=F("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=F("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=F("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),F0={clear:"clear.mp4","clear-night":"clear.mp4",partlycloudy:"partlycloudy.mp4"};function RA(e){const t=new Date().getHours();return e==="clear"&&(t<6||t>=20)?"clear-night":F0[e]?e:null}function DA(e,t){var a;const n=RA(t);if(!n)return null;const r=F0[n],i=`/local/weather/${r}`;if(Eo(e)){const o=na(e);return o?`${o}${i}`:i}return typeof window<"u"&&((a=window.location)!=null&&a.origin)?`${window.location.origin}/weather/${r}`:`/weather/${r}`}const qt={sunny:{label:"Sonnig",Icon:Ji,gradient:"linear-gradient(160deg, #f59e0b 0%, #3b82f6 100%)"},clear:{label:"Klar",Icon:Ji,gradient:"linear-gradient(160deg, #38bdf8 0%, #6366f1 100%)"},"clear-night":{label:"Klare Nacht",Icon:P0,gradient:"linear-gradient(160deg, #1e1b4b 0%, #0f172a 100%)"},partlycloudy:{label:"Teilweise bewölkt",Icon:td,gradient:"linear-gradient(160deg, #94a3b8 0%, #3b82f6 100%)"},cloudy:{label:"Bewölkt",Icon:A0,gradient:"linear-gradient(160deg, #64748b 0%, #334155 100%)"},rainy:{label:"Regen",Icon:yc,gradient:"linear-gradient(160deg, #475569 0%, #1e40af 100%)"},pouring:{label:"Starkregen",Icon:yc,gradient:"linear-gradient(160deg, #334155 0%, #1e3a8a 100%)"},snowy:{label:"Schnee",Icon:lf,gradient:"linear-gradient(160deg, #cbd5e1 0%, #64748b 100%)"},fog:{label:"Nebel",Icon:dA,gradient:"linear-gradient(160deg, #9ca3af 0%, #6b7280 100%)"},lightning:{label:"Gewitter",Icon:sf,gradient:"linear-gradient(160deg, #4c1d95 0%, #1e3a8a 100%)"},hail:{label:"Hagel",Icon:lf,gradient:"linear-gradient(160deg, #94a3b8 0%, #475569 100%)"},windy:{label:"Windig",Icon:D0,gradient:"linear-gradient(160deg, #38bdf8 0%, #64748b 100%)"},exceptional:{label:"Extrem",Icon:sf,gradient:"linear-gradient(160deg, #7c2d12 0%, #1e293b 100%)"}},FA="linear-gradient(160deg, #a1a1aa 0%, #3f3f46 100%)",_A="linear-gradient(160deg, #71717a 0%, #27272a 100%)";function WA(e,t,n){const r=Vu(Gu(n==null?void 0:n.colorSet).accent),i=t<6||t>=20;return e==="clear"&&i?`linear-gradient(160deg, ${r[4]} 0%, ${r[7]} 100%)`:`linear-gradient(160deg, ${r[1]} 0%, ${r[4]} 100%)`}function BA(e,t){const n=t<6||t>=20;return e==="clear"&&n?At[4].bg:e==="sunny"||e==="clear"?At[2].bg:e==="rainy"||e==="pouring"?At[3].bg:e==="snowy"||e==="hail"?At[5].bg:At[3].bg}function ys(e,t=new Date().getHours(),n){const r=t<6||t>=20;return Ju(n)?{...qt[e]||qt.cloudy,gradient:e==="clear"&&r?_A:FA}:Xu(n)?{...qt[e]||qt.cloudy,gradient:WA(e,t,n)}:rr(n)?{...qt[e]||qt.cloudy,gradient:BA(e,t)}:e==="clear"&&r?qt["clear-night"]:qt[e]||qt.cloudy}function od(e,t={}){const{Icon:n}=ys(e);return s.jsx(n,{...t})}function _0(e){const t=e.temperature??e.temp??e.temp_max,n=e.templow??e.temp_min??(t!=null?t-6:null);return{datetime:e.datetime,condition:e.condition,high:t,low:n,precipitation:e.precipitation??e.precipitation_probability}}const HA=2,qA=8*60*60*1e3;function UA(e){var n,r;return(((n=e==null?void 0:e.attributes)==null?void 0:n.supported_features)??0)&HA?!0:W0((r=e==null?void 0:e.attributes)==null?void 0:r.forecast)}function W0(e){if(!Array.isArray(e)||e.length<3)return!1;const t=Vi(e[1].datetime),n=Vi(e[2].datetime);return Number.isNaN(t.getTime())||Number.isNaN(n.getTime())?!1:n.getTime()-t.getTime()<qA}function YA(e={}){const t=[e.hourly_forecast,e.forecast_hourly,e.hourly];for(const n of t)if(Array.isArray(n)&&n.length)return n;return W0(e.forecast)?e.forecast:null}function uf(e,t,n,{todayOnly:r=!1}={}){const{state:i,attributes:a}=t,o=a.temperature,l=new Date,c=Jh(tg(l),-1);return e.map(u=>({slot:u,dt:u.datetime?Vi(u.datetime):null})).filter(({dt:u})=>!(!u||u<c||r&&!bu(u,l))).slice(0,n).map(({slot:u,dt:d},m)=>{const f=m===0||d&&Math.abs(d.getTime()-l.getTime())<27e5,g=u.temperature??u.temp??o,v=d?d.getHours():m;return{datetime:u.datetime,hour:v,label:f?"Jetzt":d?yt(d,"HH:mm"):`${m}`,temp:g!=null?Math.round(g):"—",condition:u.condition??i}})}function KA(e,t,n=null,r=8){const a=tg(new Date),o=(n==null?void 0:n.high)??(typeof e=="number"?e+4:22),l=(n==null?void 0:n.low)??(typeof e=="number"?e-4:14);return Array.from({length:r},(c,u)=>{const d=Jh(a,u),m=d.getHours(),f=u===0,g=Math.max(0,Math.min(1,(m-6)/17)),v=Math.sin(g*Math.PI),x=l+(o-l)*v,w=Math.round(f&&typeof e=="number"?e:x);let y=t;return m>=20||m<6?y=t==="sunny"||t==="clear"?"clear-night":t:t==="rainy"&&m<12&&(y="partlycloudy"),{datetime:d.toISOString(),hour:m,label:f?"Jetzt":yt(d,"HH:mm"),temp:w,condition:y}})}function VA(e,t=null){const n=t||YA(e.attributes);if(n!=null&&n.length)return{dayPreview:uf(n,e,6,{todayOnly:!0}),hourlyPreview:uf(n,e,8,{todayOnly:!1})};const{state:r,attributes:i}=e,o=(i.forecast||[]).map(_0)[0]||null,l=KA(i.temperature,r,o,8);return{dayPreview:l.filter(c=>!c.datetime||bu(Vi(c.datetime),new Date)).slice(0,6),hourlyPreview:l.slice(0,8)}}function GA(e,t=null){const{state:n,attributes:r,name:i}=e,a=(r.forecast||[]).map(_0),o=a[0]||null,l=VA(e,t);return{name:i,condition:n,temp:r.temperature,humidity:r.humidity,pressure:r.pressure,windSpeed:r.wind_speed,windGust:r.wind_gust_speed,visibility:r.visibility,forecast:a,today:o,dayPreview:l.dayPreview,hourlyPreview:l.hourlyPreview}}function B0(e){const t=Number(e);return Number.isFinite(t)?t.toLocaleString("de-DE",{maximumFractionDigits:1}):null}function QA(e){var t;return(((t=e==null?void 0:e.layout)==null?void 0:t.pages)||[]).flatMap(n=>n.widgets||[])}function JA(e){const t=[];return e!=null&&e.entity_id&&t.push(e.entity_id),((e==null?void 0:e.entity_ids)||[]).forEach(n=>{n&&t.push(n)}),t}function XA(e){const t=e==null?void 0:e.media_position,n=e==null?void 0:e.media_duration;return typeof t!="number"||typeof n!="number"||n<=0?null:Math.min(100,Math.max(0,t/n*100))}function ZA(e,t,n){var i,a,o,l;for(const c of e){if(c.type!=="sensor")continue;const u=(i=c.entity_ids)!=null&&i.length?c.entity_ids:c.entity_id?[c.entity_id]:[];for(const d of u){const m=t(d),f=(a=m.attributes)==null?void 0:a.device_class;if(["temperature","humidity","illuminance"].includes(f)&&!(m.state==="unavailable"||m.state==="unknown"))return{kicker:c.label||m.name,entityId:d}}}for(const c of e)for(const u of JA(c)){if(!u.startsWith("climate."))continue;const d=t(u),m=B0((o=d.attributes)==null?void 0:o.current_temperature);if(m)return{kicker:c.label||d.name,value:m,unit:"°",detail:"Raumklima"}}const r=(l=n.ev)==null?void 0:l.batteryEntity;if(r){const c=t(r);if(c.state!=="unavailable"&&c.state!=="unknown"){const u=n.ev.stateEntity?t(n.ev.stateEntity):null;return{kicker:n.ev.label||c.name,entityId:r,detail:(u==null?void 0:u.state)==="on"?"Lädt":"Akku",powerEntityId:(u==null?void 0:u.state)==="on"?n.ev.powerEntity:""}}}return null}function $A({config:e,room:t,hass:n,getEntity:r}){var d,m,f,g,v;const i=QA(t),a=[];if(e.screensaver.showWeather&&((d=e.weather)!=null&&d.entity_id)){const x=r(e.weather.entity_id);x.state&&x.state!=="unavailable"&&((m=x.attributes)==null?void 0:m.temperature)!=null&&a.push({kind:"weather",entity:x})}const o=i.find(x=>x.type==="media"&&x.entity_id),l=(o==null?void 0:o.entity_id)||((f=e.mediaPlayer)==null?void 0:f.entity_id);if(l){const x=r(l),w=(g=x.attributes)==null?void 0:g.media_title,y=(v=x.attributes)==null?void 0:v.media_artist;(x.state==="playing"||x.state==="paused"||w||y)&&a.push({kind:"media",entity:x,entityId:l})}const c=(e.presence||[]).map(x=>{var y;const w=r(x.entity_id);return!x.entity_id||w.state==="unavailable"?null:{id:x.entity_id,name:x.label||w.name,home:w.state==="home",picture:Qr(n,(y=w.attributes)==null?void 0:y.entity_picture)}}).filter(Boolean);c.length&&a.push({kind:"people",people:c});const u=ZA(i,r,e);return u&&a.push({kind:"stat",...u}),a.slice(0,4)}function ej({entity:e}){var o,l,c;const t=ys(e.state),n=B0((o=e.attributes)==null?void 0:o.temperature),r=(l=e.attributes)==null?void 0:l.humidity,i=(c=e.attributes)==null?void 0:c.wind_speed,a=[r!=null?`${Math.round(r)} %`:null,i!=null?`${Math.round(i)} km/h`:null].filter(Boolean).join("  ·  ");return s.jsxs("div",{className:"tm-ssx-tile",children:[s.jsx("div",{className:"tm-ssx-icon","aria-hidden":!0,children:od(e.state,{size:30,strokeWidth:1.6})}),s.jsxs("div",{className:"tm-ssx-copy",children:[s.jsxs("div",{className:"tm-ssx-value",children:[n,s.jsx("span",{children:"°"})]}),s.jsx("div",{className:"tm-ssx-label",children:t.label}),a&&s.jsx("div",{className:"tm-ssx-sub",children:a})]})]})}function tj({entity:e,hass:t}){var l,c,u;const n=Qr(t,(l=e.attributes)==null?void 0:l.entity_picture),r=((c=e.attributes)==null?void 0:c.media_title)||e.name||"Wiedergabe",i=((u=e.attributes)==null?void 0:u.media_artist)||"",a=XA(e.attributes),o=e.state==="paused"?"Pause":"Gerade läuft";return s.jsxs("div",{className:"tm-ssx-tile",children:[s.jsx("div",{className:"tm-ssx-art",style:n?{backgroundImage:`url("${n}")`}:void 0,"aria-hidden":!0}),s.jsxs("div",{className:"tm-ssx-copy",children:[s.jsx("div",{className:"tm-ssx-kicker",children:o}),s.jsx("div",{className:"tm-ssx-title",children:r}),i&&s.jsx("div",{className:"tm-ssx-sub",children:i}),a!=null&&s.jsx("div",{className:"tm-ssx-progress","aria-hidden":!0,children:s.jsx("span",{style:{width:`${a}%`}})})]})]})}function nj({people:e}){const t=e.filter(i=>i.home),n=(t.length?t:e).map(i=>i.name).join(", ");let r="Anwesend";return t.length===0?r="Niemand zuhause":t.length===e.length?r="Alle zuhause":r=`${t.length} zuhause`,s.jsxs("div",{className:"tm-ssx-tile tm-ssx-tile--people",children:[s.jsx("div",{className:"tm-ssx-kicker",children:r}),s.jsx("div",{className:"tm-ssx-avatars",children:e.map(i=>{var a;return s.jsx("div",{className:`tm-ssx-avatar${i.home?"":" away"}`,title:i.name,children:i.picture?s.jsx("img",{src:i.picture,alt:""}):s.jsx("span",{children:((a=i.name)==null?void 0:a[0])||"?"})},i.id)})}),s.jsx("div",{className:"tm-ssx-sub",children:n})]})}function rj({tile:e,hass:t}){let n=e.value,r=e.unit||"",i=e.detail||"";if(e.entityId&&n==null){const a=hc(t,e.entityId);n=a.value,r=a.unit||""}if(e.powerEntityId){const a=hc(t,e.powerEntityId);a.value&&a.value!=="—"&&(i=`${a.value}${a.unit?` ${a.unit}`:""}`)}return s.jsx("div",{className:"tm-ssx-tile tm-ssx-tile--stat",children:s.jsxs("div",{className:"tm-ssx-copy",children:[s.jsx("div",{className:"tm-ssx-kicker",children:e.kicker}),s.jsxs("div",{className:"tm-ssx-value",children:[n,r&&s.jsx("span",{children:r})]}),i&&s.jsx("div",{className:"tm-ssx-sub",children:i})]})})}function ij({time:e}){const{config:t,activeRoom:n}=ke(),{hass:r,getEntity:i}=We(),a=$A({config:t,room:n,hass:r,getEntity:i}),o=t.backgroundImage;return s.jsxs("div",{className:"tm-ssx tm-animate-fade",children:[s.jsx("div",{className:"tm-ssx-photo",style:o?{backgroundImage:`url("${o}")`}:void 0}),s.jsx("div",{className:"tm-ssx-shade"}),s.jsxs("div",{className:"tm-ssx-clock",children:[s.jsx("h1",{className:"tm-ssx-time",children:yt(e,"HH:mm")}),t.screensaver.showDate&&s.jsx("p",{className:"tm-ssx-date",children:yt(e,"EEEE, d. MMMM",{locale:Yn})})]}),a.length>0&&s.jsx("div",{className:"tm-ssx-dock",children:a.map(l=>l.kind==="weather"?s.jsx(ej,{entity:l.entity},"weather"):l.kind==="media"?s.jsx(tj,{entity:l.entity,hass:r},"media"):l.kind==="people"?s.jsx(nj,{people:l.people},"people"):s.jsx(rj,{tile:l,hass:r},"stat"))})]})}function aj(){var l,c;const[e,t]=b.useState(new Date),{getEntity:n}=We(),{config:r}=ke();b.useEffect(()=>{const u=setInterval(()=>t(new Date),1e3);return()=>clearInterval(u)},[]);const i=(l=r.weather)!=null&&l.entity_id?n(r.weather.entity_id):null,a=(c=i==null?void 0:i.attributes)==null?void 0:c.temperature,o=i==null?void 0:i.state;return r.screensaver.style==="sexy"?s.jsx(ij,{time:e}):s.jsxs("div",{className:"tm-absolute-fill tm-z-50 tm-flex-col tm-flex-center tm-animate-fade",style:{background:"black"},children:[s.jsx("div",{className:"tm-absolute-fill tm-opacity-50",style:{background:"var(--tm-screensaver-gradient)"}}),s.jsxs("div",{style:{position:"relative",zIndex:10,textAlign:"center"},children:[s.jsx("h1",{className:"tm-text-hero",style:{fontVariantNumeric:"tabular-nums"},children:yt(e,"HH:mm")}),r.screensaver.showDate&&s.jsx("p",{className:"tm-title-xl",style:{marginTop:"1rem",opacity:.6},children:yt(e,"EEEE, d. MMMM",{locale:Yn})}),r.screensaver.showWeather&&a!=null&&s.jsxs("div",{className:"tm-flex-center tm-gap-4 tm-opacity-50",style:{marginTop:"2rem",fontSize:"1.25rem"},children:[s.jsxs("span",{children:[a,"°C"]}),s.jsx("span",{children:"•"}),s.jsx("span",{children:o})]})]})]})}function oj({children:e,onPageChange:t,activePageIndex:n,editMode:r=!1,pagesMeta:i=[],onOpenPageManage:a}){const o=b.Children.toArray(e),l=b.useRef(null),c=b.useRef(!1),u=b.useRef(!1),d=b.useRef(!1),m=b.useRef(0),[f,g]=b.useState(n??0),v=f,x=b.useCallback(()=>{const N=l.current;return!N||N.clientWidth===0?0:Math.max(0,Math.round(N.scrollLeft/N.clientWidth))},[]),w=b.useCallback(()=>{var E;if(window.clearTimeout(m.current),u.current||d.current||!c.current)return;c.current=!1,(E=l.current)==null||E.classList.remove("is-scrolling");const N=x();g(N),N!==n&&(t==null||t(N))},[n,t,x]),y=b.useCallback(()=>{var E;if(d.current)return;c.current=!0,(E=l.current)==null||E.classList.add("is-scrolling");const N=x();g(C=>C===N?C:N),!u.current&&(window.clearTimeout(m.current),m.current=window.setTimeout(w,420))},[x,w]),p=b.useCallback(()=>{u.current=!1,window.clearTimeout(m.current),m.current=window.setTimeout(w,420)},[w]),h=b.useCallback(N=>{var E;c.current=!1,u.current=!1,window.clearTimeout(m.current),(E=l.current)==null||E.classList.remove("is-scrolling"),g(N),t==null||t(N)},[t]);if(b.useEffect(()=>()=>window.clearTimeout(m.current),[]),b.useEffect(()=>{if(n==null||c.current||u.current)return;const N=l.current;if(!N||N.clientWidth===0)return;const E=n*N.clientWidth;if(g(n),Math.abs(N.scrollLeft-E)>16){d.current=!0,N.scrollTo({left:E,behavior:"smooth"});const C=window.setTimeout(()=>{d.current=!1},1500);return()=>window.clearTimeout(C)}d.current=!1},[n]),o.length<=1&&!r)return s.jsx("div",{className:"tm-page-pager-wrap",children:o[0]??null});const k=N=>{var E;return((E=i[N])==null?void 0:E.name)||`Seite ${N+1}`};return s.jsxs("div",{className:"tm-page-pager-wrap",children:[s.jsx("div",{ref:l,className:"tm-page-pager",onPointerDown:()=>{u.current=!0,d.current||(c.current=!0)},onPointerUp:p,onPointerCancel:p,onScroll:y,onScrollEnd:()=>{if(d.current){d.current=!1;return}u.current||w()},children:o.map((N,E)=>{var C;return s.jsx("div",{className:"tm-page",children:N},((C=i[E])==null?void 0:C.id)||E)})}),s.jsxs("div",{className:`tm-page-indicator${r?" tm-page-indicator--edit":""}`,children:[s.jsx("div",{className:"tm-page-indicator-track",role:"tablist","aria-label":"Seiten",children:o.map((N,E)=>{var C;return s.jsx("button",{type:"button",role:"tab","aria-selected":E===v,"aria-label":k(E),className:`${r?"tm-page-bar":"tm-page-dot"}${E===v?" active":""}`,onClick:()=>h(E)},((C=i[E])==null?void 0:C.id)||E)})}),r&&s.jsx("button",{type:"button",className:"tm-page-manage-trigger",onClick:a,"aria-label":"Seiten verwalten",children:s.jsx(yA,{size:20})})]})]})}let hn=null;function sj(e){if(e){hn=e;return}hn=null}function lj(e){(!e||hn===e)&&(hn=null)}function zn(e){var r,i;const t=(r=e==null?void 0:e.getRootNode)==null?void 0:r.call(e);if(t instanceof ShadowRoot&&((i=t.host)==null||i.localName),hn!=null&&hn.isConnected)return hn;const n=document.querySelector("the-monitor-dashboard");return n!=null&&n.shadowRoot?n.shadowRoot:document.body}function ir(e){b.useEffect(()=>{var o;const t=zn(),n=((o=t==null?void 0:t.querySelector)==null?void 0:o.call(t,".tm-page-pager"))||document.querySelector(".tm-page-pager"),r=document.body.style.overflow,i=document.body.style.touchAction,a=n==null?void 0:n.style.touchAction;return document.body.style.overflow="hidden",document.body.style.touchAction="none",n&&(n.style.touchAction="none"),()=>{document.body.style.overflow=r,document.body.style.touchAction=i,n&&(n.style.touchAction=a||"")}},[e])}function cj({pages:e,activePageIndex:t,onClose:n,onSelectPage:r,onAddPage:i,onRemovePage:a,onMovePage:o,onRenamePage:l}){ir(!0),b.useEffect(()=>{const d=m=>{m.key==="Escape"&&n()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[n]);const c=e.length<ie.pages,u=e.length>1;return Pn.createPortal(s.jsxs("div",{className:"tm-page-manage-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-page-manage-backdrop",onClick:n,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-page-manage-panel",onClick:d=>d.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Seiten verwalten",children:[s.jsxs("div",{className:"tm-page-manage-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-page-manage-title",children:"Seiten verwalten"}),s.jsx("div",{className:"tm-page-manage-subtitle",children:"Reihenfolge ändern, umbenennen oder löschen"})]}),s.jsx("button",{type:"button",className:"tm-page-manage-close",onClick:n,"aria-label":"Schließen",children:s.jsx(Ke,{size:18})})]}),s.jsx("ul",{className:"tm-page-manage-list",children:e.map((d,m)=>s.jsxs("li",{className:`tm-page-manage-row${m===t?" active":""}`,children:[s.jsxs("button",{type:"button",className:"tm-page-manage-select",onClick:()=>r(m),"aria-current":m===t?"true":void 0,children:[s.jsx("span",{className:"tm-page-manage-index",children:m+1}),s.jsx("input",{type:"text",className:"tm-page-manage-name",value:d.name,onChange:f=>l(m,f.target.value),onClick:f=>f.stopPropagation(),"aria-label":`Name für Seite ${m+1}`})]}),s.jsxs("div",{className:"tm-page-manage-actions",children:[s.jsx("button",{type:"button",className:"tm-page-manage-action",onClick:()=>o(m,m-1),disabled:m===0,"aria-label":`Seite ${m+1} nach oben`,children:s.jsx(N0,{size:18})}),s.jsx("button",{type:"button",className:"tm-page-manage-action",onClick:()=>o(m,m+1),disabled:m===e.length-1,"aria-label":`Seite ${m+1} nach unten`,children:s.jsx(ps,{size:18})}),s.jsx("button",{type:"button",className:"tm-page-manage-action tm-page-manage-action--danger",onClick:()=>a(m),disabled:!u,"aria-label":`Seite ${m+1} löschen`,children:s.jsx(O0,{size:16})})]})]},d.id))}),s.jsxs("button",{type:"button",className:"tm-page-manage-add",onClick:i,disabled:!c,children:[s.jsx(st,{size:18}),"Neue Seite"]}),!c&&s.jsxs("p",{className:"tm-page-manage-hint",children:["Maximal ",ie.pages," Seiten."]})]})]}),zn())}const uj={lightbulb:C0,thermometer:MA,shield:hs,lock:wA,music:NA,camera:Zr,shoppingcart:gs,clapperboard:cA,moon:P0,utensils:IA,dooropen:aa,fan:hA,power:z0,home:vA,sun:Ji,cloud:A0,cloudrain:yc,play:ad,pause:id,volume2:I0,bell:aA,wifi:R0,settings:oa,user:OA,plus:st};function df(e,t={}){const n=(e||"").toLowerCase().replace(/[^a-z]/g,""),r=uj[n]||C0;return s.jsx(r,{...t})}function dj(e){return{light:"lightbulb",switch:"power",climate:"thermometer",lock:"lock",alarm_control_panel:"shield",scene:"clapperboard",script:"clapperboard",media_player:"music",camera:"camera",todo:"shoppingcart",person:"user",cover:"dooropen",fan:"fan",weather:"cloudrain"}[e]||"home"}function mj(e){return typeof e=="string"&&e.includes(":")}function fj(e){return e!=null&&e.id?{entity_id:e.id,state:e.state,attributes:e.attributes||{}}:null}function mf({icon:e,size:t,style:n,className:r}){const i=b.useCallback(a=>{a&&(a.icon=e)},[e]);return s.jsx("ha-icon",{ref:i,className:r,style:{width:t,height:t,display:"inline-flex",alignItems:"center",justifyContent:"center",...n}})}function pj({hass:e,stateObj:t,size:n,style:r,className:i}){const a=b.useCallback(o=>{o&&(o.hass=e,o.stateObj=t)},[e,t]);return s.jsx("state-icon",{ref:a,className:i,style:{width:n,height:n,display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:0,...r}})}function Ht({hass:e,entity:t,overrideIcon:n="",size:r=24,style:i={},className:a=""}){var d,m;const o=b.useMemo(()=>fj(t),[t]),l=typeof customElements<"u"&&customElements.get("state-icon"),c=typeof customElements<"u"&&customElements.get("ha-icon");if(n)return mj(n)&&c?s.jsx(mf,{icon:n,size:r,style:i,className:a}):df(n,{size:r,style:i,className:a});if(l&&e&&o&&((d=e.states)!=null&&d[o.entity_id]))return s.jsx(pj,{hass:e,stateObj:o,size:r,style:i,className:a});const u=(m=t==null?void 0:t.attributes)==null?void 0:m.icon;return u&&c?s.jsx(mf,{icon:u,size:r,style:i,className:a}):df(dj(ve(t==null?void 0:t.id)),{size:r,style:i,className:a})}const hj="data:image/webp;base64,UklGRgooAABXRUJQVlA4WAoAAAAQAAAA3wEA3wEAQUxQSFYRAAARxlHQto2U8Ke9/w5AREwAP7ZPrAKFtGDIuJ1t44Aetk+GJCnWxtm2bdu2bdvWnG3btm1jnj70nPo8+xjniz+qOjsjEZF5qpiImAB86P8/biPNd0/vvffrvfen9+u91+R67yUbuN68sNfvtl3LU3zHkiVeLiI4ItgmFkZGFkYS8SDjQYyFZggzjBgx40GMht8fkhVHtrX2U9+fiJgArfxf+b/yf+X/yv+V/yv/V/6v/F/5v/J/heteE0090cAcNdsOL/2Mrf555065aKN7kfKk7LP0j0h/dcaZ/1p0db88s+dwdPmx/LLnaHT9sbyyw1j08Yh80v8F9HWaTHI0etyRRdDz/HEget+WOS7EANazBgYyX0z0dSg0W2BA88RsP4dEswQGNj9M2BkazQ4Y4MxwV4juyQovYJCXzghTY6DzQRcGOxuMDtfZmWAjDHgemAKDngW+DtuqGWBqDHwG+CJ0RyS/Ngx+8sPw35X4VoqAJr5GDLZNertgFJPe8DhMk/Iwkglvz+w1LhbbJrutMZrJ7oPshfE8Pntpolspe92bvTCmNye5NaKiSe6K7NURl24pDuO6R/Z6N3tpgls6e52ZvV7LXj9nL4ztgsltsujsndwWis61ye31k9Gzq8vzHzz9hMfM3ODP/OLv6Sl/+Y+8lNedOvPJu8+dLyyvb/VuVu3Y7cz++VZ54cKcfqi7z0nfk24//fq/5OEP+rWRfwD86YP/klfz7g+e/fSsbucr3/zeuXkVNK/zmvshXFgobXj7kh67ffvGvNr6aqWspRJU2LMoFeZnz7zg2Q/nt/SLgPQg/pYX8AH42Ls/+Hlmv3KH5lVYgsVSdbhRqtSrtcrq8nkVN8fj2G1lnHh9ubxeqqzLAWwqpSVqaqmmopYpa/YDz+YfgYcDT+Av/5Z/eimn+djZWd2h8zr3o3kVl6A8cpkSVVl2ReuqLBcLc4Xju9aoeHV5221f7wW+62OD5XeGrfoSiyqrJunS7af42798As+GF7yU1/OBj33+k5+D2a9883bOaV6F4hJlVYeqJSygIRvXsaHdbJWKhdrxXGnIttq9NCCUvAAbHxecju8CtoVt1SSoXHg1p3jpq9828t2c1eeZ/codmpM0r8LlJcqqqVq2wLZguypwaWDTaAItu1k28JVjt/cZ2Ep3FfS2hOtDdyCbBlRttnEBG8u2aqhe/ginePfHpE/y+eHZ25nTuTmpIGmJsiQLaNsujutg4bg+DQKkUIqtem5g5vj98waIdnthH5N57QawTYNtwAYCXGx2tm3c6MLdb+NzMCt983a+9++a12VJBS1KKlfV2AYC3NGOTUU7NAmI1BJunBuYOY7/nBn2Cbiu3Uh+rcKeNu6YgesTLJ/hm7ef09y5OZ2f0/mCdHkJqJbVsGkzHLiyt0fa+ATUVKdSqio3wI9njunP+GZknto0iRTQlovNjtcLQAAuQaTE/+bs3XOSzmvu/H1FFYpLlKtq2BY2bcmFwNY27NhqNBvNtY2KytWOb0Z+/hdnjvN/rW/2jrvlqrUN7PRGBxpmV4ZerXC5UCxIKmqpxFJVlg0uPQWSBPKgHWBTVUfRrtmz9MmZE8HX3xqb8f2O62zTAOw2Oz0ZoHp1sVSulqsNbWMPtxtIkq1tCxzXp48Ze2f18b8wc8L4m0//yo93oqH9drYLuqwlrqqguuVHSs1+xov3nHr6zInnT/3Os1/3yW9eXl5v9sfa3zRyGpd/cvdXPvz2v3vszAnwOM3HzJxIl8Y4PXMyXRzjzAlVbYwPn3jdckK1PMaZE6qVMT584vXu/6ZVGuPDJ1QrJ16VMW75H8pKY3zyv2lpjFv+29eB2euIf2i9ZdCWqT7IaOf9S9mHBpdmr/My1acGl2av8zLVV//4qhlc6tvKD45F1de2zRjX+dSO5g/miku9QZui+60/eMhj/u7Zr3zD23ifPn/rHfqe5nShsD5cp2kDbQl3uOVAc7iiYkH697tnz77yOQ/5vSljbrQrrr980dmvrVRqsmhCy3Paku854AbgAoELoaQoHTb0kSJJXXaVxaNTKQczLPk/+vYjf+HwudaHOdG2nH7mfbMLpUptB89RpaZ1SQ3sTUmAgwc4eI5HlEbDqWRGSjlIihRnQIjSSKkfiZ4cr4sB8uDlTzlcLvUA7QvpbbNrlJeLSBJlu9Yc2ZYvyQsBSQlCQqkUpTI3msNAEph8dCrJkEsKsNsOBrf6KwfuK4OrnEPCfgJ65ocrtWb9siqqSda6tq+1msID/Ha4Z6aEVJIBcsxk5mCATJGfSj1Ic8OXXnSwat5MipQg3tsKzYauXF2zas26BbQVqaWu5xORhCKNcpNjcsyBzXIMkHRjUhlue/VB+sDgVseQEoT7K1+7uFwsNdYAy65JlSY2bhhJSqNBAmluDse+oReAJBnmTh2cNz15DSmHy+Zn5islFikvt/2WpLbtR6A0UyppICnHHKJ5augTqSfDq3/uoLxvcItLZyIpiPZrP7laLKtBzbJpuckgSmNCdYnSHDPIzeHcp6fIT3VQaga3OoS0j0jmHfPXqmtsYIHteG4o5eloc/j3c7P4xYN2lztHE4FgP7e6UFrfKNsd4RFK8a5MPtIclc89YLc6cxfSviuXn1qFak2W3ZEHoRRnOYbcHKVR4WhAYhDrey+WKmvYnbY8CONMyjFH8IOOgF4otLd4jYpq2r4eyiPOZCSOZPtdk/e+wYOOIDVI9fbLDadmdRRwPYozYY7wQ29PoX1ss1ypt9wwDvDJ1IUxf93E1QzudGJCpN5FKN8vluqbdkehlEBm4h6dnbSvHENykOnLmqVK3aYTJMBA5siftO8MbkgW77i05W3KJogHiSRz9P/eYYbkINLf2io52IRKGMhMhff84kF5wIFtRfZb8xt2k7YdZ9MDH5usDoMnHEDyd0VSwm43nVCZBjLTYnZ0gUTf0bYlN0xNFg/M9DhZNZdekdjLKnbHCxPlJhNT5IMOKyRfTyJOs6MkDOKEgZkmb5uodoMXyWajA4G+e2er7cckDDRdpA+fpLrBE2QosKc3mo5PwmB4quC2SWo3eMo7EGil6ROHAyXITJn5MdGTM7fnJwMJmalzkuoGT/jWTyArYewPYabQg/Eg1aFkIM/v7w5kMgZMpZPUbvAE1e9U8wngd/XHD34Cz375G3j7+85qVmtYI1tSmErKgenh4RP0tsFLVEgNHP+VF5z+5rl7FiqqY9kdebRcx0slBWQyuDi4oeiSKtJgpMkhRTV+Lzp61mTWL7/j8xcKO57DKhXVtAFsqklbkkuoXXWVGrSbm6l1doJeM3jRL+D0K29drZZYlLRWs1qS3QnVhV0pkpQqAQbKYjPVLpx95pMn702vNufTX917sVZakJZWubJSqXckeeGupBww02/eqBYLFy8sU7PbJFTL7335JH3oFXD5dRUVLiwsbbC0urHZ9Qivyw3zNBmYaTitlK5tOWysVVVavHDx0n3/gRacYG3xQUdBPyb940rh4nKJSr3aAJuAMMnM1Kzr6sdbWubqldJykUssUr66zKUrlm147q/cjLcN3vQJePzv9y2WpIrWalbLpe3HZGZqTjp2Twq2VGdFRa2t1Kzy1VqljsUOW/Kj596EdoOGR9Bi/2ex+dacePX8ikrU1upNHI+eJDNF52TdSA5sqUF1vbywWNYGXBO1zVanJYdIk/BIYbadtprDvXNNuqFFLrz06r1XVip1CwePMOmbKTtNaMvGql/barDGihrrayvr2pTr4OK4RGn7jv2qGbT4s4XRBNAcbZ/CgVuKpXqpUm86dHfDgZm2s5ictlznutTeYvi6trSz7eJHAbgBBnjQPtVtFfu1MKs9aIqUC0dPW6t1KnLo5ruY6TwPiNIolXqpGVO5op6i1IzU3P7UKFRXNlJrG5YhdeSevFLdsoAwMdN8nmogs4+5GfdX9qVOo+oCFOdA+rjV1prgRddzM9X3zQR6rz8A+rrBz5agiE7G7MMeO2QamPvD+9FBptpM7UARHY3X323vRLs55v7xqX34zgGdiAKKyJ0Xfxzf9SdKOX31gdAmagGKyJ2BOF5FfWNfOaHWoIiungXRvhCFfUC0TFuBIrr5GkR8oh+l9R834dafKbRsbjMoopN7QNSPR3GfvpHvDMYDiZbo1SZQRBd/hsjX5OXcSIdBA5SkW4ku1QRKf3cBoo8Cv5GGwfegSqFl+mABmqKDkP46DTpB9XeK8WU/o+rpTdBBiP+KEnvMDYwyaICqUmgZquq1Ze/TPQgMPFFi994cpXjNYOsyJL8cOPiSxPg5mlUJ1GDOEiQ/Elg4SmSvs9VZohQzN+vnxvHAQxT5PbYaZUqgzaD4CtWhwMPpZRZSqStIfAEwcTmZYfazQb3ZbCHYB7i4YQL404bau8gIaY8ANm6bKNSaOrMi8PGQVKGezQqMbEsK3xqpV8DK85JC3UzJziYAXl6aFD5sYQgV2gdm3pwA0JqqJ8DNO4U20BH1YWtg5wNCm9pSvTV1DxgqtbmdUdeAo48LbWFLnTbUKeCp1FZySKe09khLoyCDjLWjavSIibYCbE0iOsQArAFjn0gKndZUr7Iy3gBYm0pUL7KA5f2BuelEtTBhS8Dg0GVxgF2rqrbZrA93grY6I0NJiQfd0QnQJUnzwRRzJKpqk26gG3LpwdAkbcvx0iiIh6VUOWAObJZ08emlh9HClhpEatQLFFX1JQ7dGYrUbUlpnskoZ6BMcejR9bpECiUlQEyfoVQ5hnwiDnNbnS4s2AKIKA8VY0jUURwm3UgSCV2SLh4t1ycOdvAJBQEeeQoakgwkHFVzW2pQvY6qCt0KM8JXbLrFq5xMMX47Jk93vbDVBFy8bpQqUjq04/kE8RBEkjwSJLLcpDkgJPYr5+Z4B25qS19TaUm/wkKAqnqMaLIwGWQK5QGSYrmiBZIgBGhJkfw9w5GJ9oQszTHkiH077CfxSQvzlQCLr/VmIBdvzFByJfaUhpJuNKYvlEAoUCpFaY4ZzjFHVA9LnzpxVkmv3SQTJpkGtG23tZczJADdYJd0ZKQ0SqVoOFUuMEc+eHI1qmoJIJ8udS5lEAadOAw6yAvbNpJCT0ISIMUjJWBXkoF8ZIrJMbnJMUA+nanBlIVdeHSeYxmDUPKJCYA4aPtIJCEgAAEDQoYzM24OZrr06sjCtQXg8dmOMej15cchI316gr5iBpIRIBAgpl6vTJl0nlupBGSh+j2BEvoY+piMqVtSZzvV39P0MdO+rXa6xzjW5hT0zf1Fb/qbrc2k4x27/2irTqdmwOSTsldb9jrkb399lrjibSSvnTt/rlkMnZ4kgzRaQud5sk9SGNbK6e4dnVlmQw8zy7M+TMaRbZPC2BbQxx85snlaUo5smBSGmc0theWTQsMM/dyCIQslhXoAlCHTy+wtFw4Uw0Qyu8IFFENvme1i68MQbMUPldlCtr4OQS0TTGjr0xBoJgBb9Zy2vyA6JTbKhXZBPCixHaw1TFAQh0gMgrYEPxZOTafwQ1NCPQhv54Bh9hoG3TwangPmsPetwWQe/cmQm+UF9oYbTOORMmRGcZ3pxGSiUHEBwbggDOfIhengT4PeHj3DERVWNzfUo5OS39lAoUFYhiVzigpIhgcBePq7oJan0WkMLhKGymlqUNUhx9yDAefKqWK6WcPPFf1ZShH8li2ajJbii6Yi4Kx4zpSfCgc0DsDcZwRzH6QBVbFAMQrH8EdXF8nMEA9g8a7igOYvRAC43E0Sq4P5maF7jE2qOqQugTcHgdW521x6zjXg9z9+ZXFzYCDeLpz9q4fMXJxOHrDx/dVrg5Mzr3nifbVRrXW9fu7+c0Nzt0CEpakDwn+BO4eDIB/zlu+Nil/jkLkhlq5A1p2Erguy8IxHdlgYdsmMUPm/8n/l/8r/lf8r/1f+r/xf+b/yf+X/yv+V/yv//6/AVlA4II4WAAAwlgCdASrgAeABPlUqk0ajoqqhopNZGVAKiWdu/9W5y4paQMyCbIERMP67+WAZ2TMg/D/3f+I6DAhH8Hpbzof8r1s/qv2EP7j4IHvg8yPnHenz/E+oB/Y+p69Cvy7vanv33rc/kJ0mfcBxbmXG5cQEvU+Bf2T5bbw0fqXqB/yf/CejxoQ+q/YI/k39o6sv7mexB+vooF/gdzqkko3NsvKbOqSSjc2y8ps6pJKNzbLymzqkko3NsvKbOqSSjc2y8ps6pJKNzbLymzqkko3NsvKbOqSSjc2y8ps6pJKNzbLymzqkko3NsvKbOqSSjc2y8ps6oX9UgGpcGNHylhoealr0MeYJRubZeU2dUklG5ovY2YDl1yDXHsqkkIMdMzSSUbm2XlNnVJHbICgjXqY8H9TG2UDypkjj6Sjc2y8ps6pJKH06+/eGSr7a7ciXegWMYEeYYgca5DAmVdPbLymzqkkjvOdYZ8QVck5YEzVuv3jk2gBDMljSN17ufRNQp3l/wZ1iCVYFIcbVJJRubZeUz+WAIyQAiJNPq9rGEntt3k4v8DudUklG5pxtE2OoyB/1Qg3ZXcvKbOK9awEHMTh5iILMPH6iqFyO5znLaEdJR2Mj1YPbOCMNCep8OI4BcQicoWSUfEodZ3Wps6pJI85EVFIbrlLyxIWsRR07Bfa5wlSKFp6FMGsmQwcABn/QFIFuSq0JOf9kLs8GHdAUQliuwoZ6lRURONzmgoacR3NI3NqLs9CzNNYd7leJvVkcRwyyApL0aKLzhHL+NnWURCo4+2Za3BYcIfyE8cVApC8vxhZCkuXfPkY341Qt2YRUaBpaUm6fFG6928ZCRcAuPLpdCSOqnTLf2cUO9X4lOgTQqzU/4gsmfGXBjJYkndPz/9JEjrh/oMMNXRto99rpYHJqQ6NHswM/EF1mpf5Y8qDLOoreOGt/vRiooIcqZMtPya/uHznm2S9sv77oPe9or4LxheXEZAz7fiqq+5x/A0pWmaQVhaWblvtzJwYTleNCoErIIobvVYhDTTOxEjvmPiKog08chwxhxq441rrCBMt2cMRd3PBs1R+djhugnOe5KKIsPXD1nr5rZ+gL5fEN1pmfgq+qno3WhUCeSvkojJ5W4FYWVC+VXLt/Ugn6s/UYcoFJMmsWSRNe7sCnGX83nwko3NIrOk8+ZSx387Kjjwej0W5qR5BZUUflJPTVtyx11Se/qHsOeJBDqazr+1SnPGOSGhPrm6/xSa/oKbH8h8T7ftydDyDg1LNINywmi+iOW4/aigj55ccOLfPOKzRgr5P9AB/jR8V3NAKpXomVygo0SXgyIzgeSnvCfyk1L2p4Z+S/9I9VHFsAp2B/mycXCFlJqE6fIFLbj42l/nVZnxFrgxs1SR6Fku5OYO0tpyw95sSLzWekEfQ1TQoEYVytiiBQ5IJsfZSWAmp6ueUNRBjt7xdXJfqg2vZmDvefL1vyZ9M/RqPpCZNn5KNzbLymzqkko3NtAnD2y8ps6pJKNzbLymzqkko3NsvKbOqSSjc2y8ps6pJKNzbLymzqkko3NsvKbOqSSjc2y8ps6pJKNzbLymzqkko3NsvKbOqSSjc2y8ps6pJKNzbLymzqkjgAAP79wYAAAAAAAAAAAAAAAAC+9Ak//c+57y/UcKmKXIVjgu9+XaQJNQCU4ewLuu1wWAGWazpHTRjbUNHaI7C5r7u4B3nJ0AgKOoto53jyvc81cZjDxh6H5TICDotAQ01oJIZ0e9WNOM+dzT5JlTZsAnUCHC2sb//1BaeCz9A1109ZAAKS7LySvqzZq5kz27m6Q7iCDAGl0ccxCCH9w+Tf65VmcvU7DlORSCTsN/52nCdRTGaIOjnrFZWwVhg+YFnwweVhoh8NLYuQ3AC1gQWttfi+O3WtmuEZPN4w8nhaS8Rz8z4AStUzga9YxyGzHya8iEP8T78T0BFe/Fvuf8RPk3g9xMWHNiecnjI7delu/KVDjjXW6Arm/L45y1RUaGZrrjTsADSacYjQ+/aXMSSpHYMVIy/1h5BZdTS4r4jtOXkREaw1cdAJMcWvFJlAonAu7BPrgwQOw8MCURA9m0M5P7kV8E6oicpV/jn7crr4TKH5iDb0RRmwvds0M8piYINIGPrEyScGZGCHTPoHnNP2IbeWrvBwNyR/r8zaLSAO2Cgwfu5Qyhv3rexa+WwGEZJh7VDBpnK2WYkaRnPezbFXz1n9QzZ44lCXaUYdBF/dHfbHfi3iyubtnBk1CXlLJAz/u/G8K0jEt2UJfRSvcWzodjj0xlmeI4CYudooEf7wrJt2HEZmECtSwBfFmBFSuhOuUDxwnSoaqhSdN6h7bfemZ2LGYJl6nRQWeiXD42tHIrBRfxMbinvWsVvguwWLwFdR/RAlnbxvj6/TzFr/Xo9TPiOkY+nT9xvTlEuScXOXlxT/RnVKhMMN4oCkFtsTd6kgn2jow93Pawzt2k76KV+8WvvLdhiwK/FA3t+4/pXP8NVJVEleZWRAj1hChAP95cURFwgu6JAAAADEC1CKE1cylHxqy7AIoLhjRbUq58MkJWOtguikBpgseFopbk8qqBcYe7G95FKnCgTu0QVAgujXCu9VxTQ3056kdMWvOkhZBoHf/5/g89U1oXB11I0rqntu4CNi6QZx3lcsvj7cmzFw2aL4UHVnyXYSqVZjwMFRPDbq+5LuwkL3ci2Ppzq/XUlprHsXm9pL6peF6xaOidwHs+JTDYu1EZaNIvmvzxHOQxb5zbNOIE/E8YdLdOCJYniooPNA/+44PBGHZRcA2y2PSBMyyFKgdxEGwGy8iAwuDwkL6gG228JTdDloFnNIzihI6Qqjb/gCIgRubZar5QVdWqRZXky96cqn8yQW6+rwMJBIjF2w7QipQd/y9EhZ+A2pC3bZPEDv7ze+vvN3Hej3Od97t03BE3Aw6DfIOixkxPGYigdjUMwbn10QWbNO3PkWIUueo6NuWn3beCAEA4ype3+udOmF+mP2RuweXXn8mPwQKhlJQCQ+aKk6N6BrMc/rXPB+oCQuxc2262dpoSOaTrZuA67hTQC2JyNTjxAASiclKmS+puvSwgAG/DV3E3hh32yosA4W7jXjoKsDMsh0zY699hxTa7cACkix4zz0mj7x7wEWy3ZRZAqcj0nWDq+BwvoDtLNh5mIPoVVvDCm8LdBeA1ryqhzTQMvd7QPtkwxnZ58R9xCEG3qZSdfbbPiT0al6TPIurX3uqMOJC8q5birldPh3AJdQq3uqx2w3LJalGgrZ+1xJTZisr4tWj/fPbtqWtl4SvVb6AbMbuRMc0de48ieQyviJmgkxq8mXv7mdOtSCoC8B8L+mK57X2nvrQB10aZzylrPoTjs3WVl0akYKz3XOszNuVGb4j66Pf1MkOfIG56OlCmXoZ4bGYM1xPGX2pFIKPSXJtkIlyxYj+KRqYeSudKFW+/AHD2ovkV7XhI4BcSTPClLmjSU2/SpSkKa96CSS111Y4AHj4F6EulVwUWqxOZSEtdUUsIVskABaLi7F63vXbmDWO9AaJwC3fdeV/sHYahApsvpcMAuPlFeDx/AuQ5vLjUANptygDxepEP36taysYYD10eqvlSInqMklYhQCVLvmy9E0+YMECjK5gI9xM4IqXyhPeQ/qAeHq52/19qSdSgvQyEyuBlRbzVLFsKfR5QUnj39PeReYtC6Cw+IrCBYwsgA7KK7ulhhSvpLTLU2oKrsj2l0H8iu/qJwDZXIAYZqvAv7aiS471pBz4Cdt+Dog1P6yEcDq+4Y0ruadASKuP7baVBVy8+pzxrJvBPw1/+v4BgEVkNXjx++c9v2RYQ5cKoWFp9wYvyhUzwZA9AWknOU4gvXwKQS9r55haGI7LnIxX2sFT2rWGVJ9hG6sPS28K9v9lzxF16tEwNj6a0iXkwGlNZfR48FrmJXSTChaunX094HHkMVLLjkubeN12VYlQ/hbYJxvlGks+/+x5NV2vL8ADrqlqxvnuh3QrrL0ZgH3T/6OIIqjz6ZACHp9MsY4Og5+YiNFlmn8CxckLP2NurVPLE2OgFoY5iIxHZSosAALZHvWglvXTsWkBY1eHERmVwBLNqjxbIPJa9OZtVWbLsE17oqdlEsbb19uzemKFNSNUmaoX5zbJhJxEj+NZVY+6g7ykqjzm0xZL92bUZRaanytfN4tPSqeXueo9PgIRdvkEl8Ik0HUQtXYVysO/lNsTts0Yan1dBeUUL+bas7+RuP9j6I+k8Hfb5vKz6Z+o2E86w/lH9+PDKbRKTwcANp/i0Hnc/ZspbDF7Wo7Fv2KSiVpB1pGB0vUNfW//XpSRDWxInV4Jsl1D6t9LVy5se7H/SwlqQTI0/CTX5EQ5D01igQ8rQjAJ+xxMlwaJvJwgm+4cQYhnNFrobaLgW7KGxGe8DRnz7uKGMyIV3LK6g0PMFSbLsQzUSamTjSiWG7807gThrVsJzmSOKi/rra2ui1pwd4bigK0yytc3OCW0ZWB4BMXAtsGDyqstqpJ+mPjI2+zOJ8SC/BbLhGk9cSyj7EDzV4YQ9Vo/pE+FQfXiGgDgc0L+tg3RXKaUpVO2/H5t8ghIGcajdh+Ku6cZCkGvmX0W7L+i0Ifd03jU6aXzt/0IMfI8XbXKwAeVpgRELgrHzHWe0nuqgzytBUWfIQ8XCLC4ZXXhz/OW2o6bV0W6JH27yd6lBYrGW8eVt7Gw6qUngAY8btzGkff3fytIPY2ONVI1O2XbLupuyFFfj/iJ2nfWHxut87NB6h7KuGVSjd0vpyAnr0vf+CDvBSZsaDiBnd2JixK9zqVm33mg7nLhkhYo+GxtU16F7/cHcpOH4J2BQrJwLY0wnWxoUYCzRVC+xTDP/TshXk1Xo6tKLCcHQwJhZvAJQRD4VBbi54x7ThPMle3Moiv3pdYx86iQPrTN5KtAf4yYpiif3UqMO2BjuTRoww34TDdEYaHXLAJuqfF431K2jeBIYytNaVd7qaCxhr7fwL4N6+nE0S0MlwdzfEJUnwNKQ0ENpWus6gwtLnC2kt6pocpoklcFb/NluOIuGb79zBGb5wJS/BVJr8Xwujyln2uU4JOmSmi5bZIDJqGWV2e6p8Sw1TtgUQo0VURSCnSKhXt/rXBrelUBOsln1+iijywre/vl1sXPPyM3ImgGjifibmpftGY31YWzTz84V1wbt9o+eklJHGyh2A02YaoivjqTTRr7qTgZl/h7RKnVaLbYqAZ+6dzEBcLOLHD7fwNCUDoqGINIoWHOuAlz/ZPTNtclNKrOaH9SdEXf3D90DbyRB6PvABtY03slxtc2iy17yQ5KenZrUuOvUuLgHmxG43dC2a2LoDnIlQC1MRo9Q85oz5mwPOuT340/Dm53TnjFMtQ9TgbXwafHzOiSJi/yvxPLSpVuUFnrOk6o8QgkmCfdiie2kz5kcZCcjFT8zDO/UWftj6Nia04ULoej/as/n/SH/72APFCmDE4NX+Ea1ipqDMf8welpQ0j00yJle4vPSCD3daNjK4RCpkEZTT42CAo2y/eCIRtdHYlJFbGcqNTldKB13BZhfAXJL9FVHZ9jWuUV3OagQMN6YsXiYZEedcrrLaybu/jZMX2E/sdZjMQwh/L9xn7FFi0fA7NYKl6umadoQCs3+r0zsvJiI1dbcn2zF6eaTxnA6IfZ5JeZYzoPO6K7BHOC6WrkqJ+9YRQW5v/ewd24Lc7spjrus9wAcOCrOZJU+kUgSTuBWHxCxVbThhrglB5Fa1g2HyXjQKXtxjabmYX8Wdwr2fCF9r5+9Oeg92OOMhz1hKrEJdepTEOAFl9Ju/anRluOPdQlTgUbugn/HZengDFkn2QMyvM46p970fVuKelFBHHmQzFSLa/j5SW3r6Tywd2dW0zscZZ/c8tNxKPMXqIkJ8eLExH3fJnxCj7RFketYJIsohaYufe8OgDggfmY9U9RLAC6t5i8/3Dc6FBzPNuN9nsIcA4vkCKWyED5LkgU1cCl/gY6Z+uDVHoR9DW9Va3+8PaDTv7DdpcoK7F/jCzu6vKxEpLXlvl7MbYyCEaGPHeABFBp2aYrRFaVKVBmohm7A3JyjFeYicA7Ki7hbeVKz8ZDjgWz9jyK94R1FTZDB9iE/nUfKMjCIshAlaKfGkVEEX9v7L2r55s2bQ56kSwnO94g9v4rpE62P3HwrmZiM0grYYCwn0EJnnWaOvwqqmvd91yzhDn9yFbVh6Cz4oQtKXnNo+j/ki9WQTY0Lz4kJKxnB2Pj6ZzrQF6oO8bSKtPWJBk5cd17Z4E3jdGZf2pdDDkGKte0GkQNr+jtTSjQODy3ytlzrI7jD8inpSKfhsv8WORI5Wd2zpWPYosGlmyc0P78vzoLNz0g3EbyWvhz8I6dOkpTbCFa9SGzOmD6h31RCpps8iknhtVzI8OpXAWxZZNaykv8K4CXCZP3hV2hiVKbLYbSzd7xo2OXhU2M327+x8c5iawkhy4NyBpA2wRr6IjejWdjGgGAzam2Glpk/4plDA2a/osDz1edq5BxcdLi5CClWk0nGFyDXglX0/oLYx1vQHZMvm2FLn2eTHeO7QY6i9o7ciVj/BLU9KVQcLjrhHF5/Zx12M2cVUOKgVV06rAJkBAfzc3apGo2kQh9csWp5lYHdhvPVbD+OTdt5q/sZPikt6ALWMk5EPPPuLXnFbiCD+VM2dLwe+z7NFT6pxep/tfeBa9GjWbJymX40l+rvEo4vGaAkzMzdWRAJbLYW1412sPiz35z9ZFbLCiOjGjqp5gboC+Lj2Whh1PFbN19SfrZGrrRxPnzu8x78FTVSP2EQ+5zYrLWuWTHmZDcAKLA3fxfbRASOnQdaxF/C6GlcxhoJyxcRmdD/4WM2stTd74NkUp8qdYzWHtVAdfCf6tk6Z9dcUy4PxuIqI5rw+tmtxCnpFQ8dmrMp7lG4dcOW39N85G7E3JcMXPoP8HFoRiFdZBjhe6o5xYVv2SgBd/i28OPMew6/qWiNMmv+Y41eOjhOHoLqvWVsa9Q9bK2HKH2MPTPTu5q346pRFxCOY+/HJcULmdyZI+TPNAqxOsdzxNnhpUyujwTRd/NmzYAKbFWB6WsDdQyDZGZmFFVBZcuf9bV9tGagYmO1bB48j05BOi5+0dXl6RNm8fg2uX4GnyPunzBvRcS48WQovBBfn6qIWxbcepUEAFqz3H6QBHIlsvFx40ACklL5cP7qyVuvZw3OQ+wXOaNRoWZ1t6mEqqbuohaRQMp/VMWiegk8IyBllRULqT4oN/YbJmAc64pn1yxsMEYBvdoQwDPrLdgIAG31k2H/9p3/PDe5ygyJyvtaZjNoEmeQf2fhismoXRxY7XuCoHHCbGj0dvxGIh3f7zvZWLXxO1SoTo+cl0UISCFEJsZwAMjmFrnhAygO4fE9qlUqypVIQUTb60C5GPga7ew+jgdF5qLCVZytmymYYQMYyDer2tbfHQHu6M2c20kRBJV3IM65TzbCXXWQYkabE5QDBB++lv+ONux6xFiJphgjedFvgTEDlgoVAtVRMBTRzu81/9gX2ztMcLHcScpO/X2xlwIf/9se14q4V+9qyKVpWlBwdI2rcrCGp9G0O9yLOmtPPTHXhcCM2uyVPHyptkEWyk9woNLcvvvwglzK38w0B0P5py7tzMucbwcrycXeYx4WBn2bnh8nJY2gGAm2bv/THyxSDu9akgOsoJJPMAAAAAAAAAAAAAAAAAAAAAAAAAAA==",gj="data:image/webp;base64,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",yj="data:image/webp;base64,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",vj="data:image/webp;base64,UklGRkIfAABXRUJQVlA4WAoAAAAQAAAA3wEA3wEAQUxQSF0FAAARCg8AIJm2bdtWX7Zt27Zt27Zt2/bkWJzmsm3bts22vNbec/SMyNXmWi2it4iYAFX+r/xf+b/yf+X/yv+V/yv/D35x6pV3vvzhb4vfffv6M7dZePQMmvfK4v/0ykXTZfViEF00Q2b2oP9NYrg9PSYdZnB7/EoajOH2vAP/zi2aIPPcPIemnJst2951U+bZRm7eZ1LMzZ5dMzuCkxPrtSKKt5KqiCWhHE8yOaZEclxJ5NgSyPElj0N8LXEedJTnIM2ERaQp42jT5W7HmyyOOVEc9vFZ4shTxMEfmR+OPzneNILUMIgP0GJ840gKQ0kJg3kkH4wnGVYzolQwqEQwrFuxwMD+yAFjS4DhjS58mxT4gtdWIAzdN8YYOMMMm4EGzVBDZrABM9xwGXCw3kDMUF1rzIHau0AdppmNO0pGHiNjj5DBPwkfwz8pOgUBwbmaAYZmaHMQGZPwFVxMw/FRMRFBOZ4JxsRcRMTZZTrCsRIfjIYJeSQWpiQUJ3PCSJiUNQ6mJQyn8sIomJgdMSioCcEc3DACzq532eH4mZ6fRs8EzS/Hztl1EEccOZN0xrg9yxLHzTTdM2oman51jFlB1fxqi1hB1vzaJl7PssXxMl3niNZJfHG0nF0jM8axcinh+UiZtPk1Y5wOYo3j5NKCo+TB+DhGLjWsHaGhueMIueSwSXo5Pi49TJ1ejk6P9HIJ4tz0cmxcihgxvd5IL0fmsfRySWKL9HJcpk+vL9PLpYmT0sv/1Nk7vRzSq3dcZfk1tYq0/FKL1pJW0Xq/u+Z6y6tesK5XWfOB5PGPV/Ya0OrWZp97+pk+vtXmK233a7lXl7pb3ffqgSqyx2d10Pl1fVp9eH1qfXHrrPr8ukstXehufTrogo43FzE9lSp+6YKO3drOOvWY+oRTz2ydX9d1l8ulDrrafQZ2PLWIKld814AO5/dqXVZ3UV3rctV1j+vVR23u0XVAkUN298sGXN9d3frcrFvvusEDdbV9U5uvf6HgytqRsS+/+Pyu/VoP1o+0Wq2nWq3WrQPv/7CIbEy+i43tT6/X1Tc9UNd3DdT1+qYIbkxM5fLXuun1QHr53xhmTq+N0uuk9Lo3vX5ML1f+++8LL6fXZem1RXpNm176bxmt9DoqvaZOL4X0h/TaOL30bzoD0kv/0FkhvTT4oBPSS2HtlV4aXNCO6aXA7ppeKkd8nF4K7cPppTJEK70U3LXSS+WHhcPzAn0a8S07nJteinC54fj0UozLDEunl6JcXlCYD0gvsaZLeinS5QSFevb0EmOmD9YjhFG0+fJgeineZQNFvFygmJcJFPXygOJeFlDkOXJ66A6liGLPkFmCNypBFH1+KP759T45hCA3doNA1FB2CcX8mpAWwpEVQjK/ZqCEsGSE0OTD23CIDsLzbjIIUS4sCYmoIFCJIFRvooFwZcHEwIgDdwlaCghcAgjdw+ATvugJYey2gUjIvSSQgRPMsAlo0AQ1ZAIbMMENlwAHS5BDJdCBEuwwCXiQBD1EAh8gwQ+PCAiOKAiNSHg+LCeLh6CMJSZCIjICIjp+gUaDkFNDsYU4CYRoCYOIuSYE3RrcBED0DJ8YGrrJxdHAiadBW1hMDZnYGq7hxdcOsWpwNlDibZBWE3P3DNCXYu/70RGDQyMWh2UuETkky4rM4VhbhA7FRg1Sh2FiEfuZCIjdRzU7UbyJ7S6av9GcRPams5oIP20TuVu037QpPCnyz9XOHdnIwXZrxEYmntzuXNDIyC7txpGNzBz+6kHskUkaKTr0MYPEwcrXea//Pzlr/Eb+zrD3TX/ppVOXHl6V/yv/V/6v/F/5v/J/5f/K/1ViAQBWUDggvhkAALCfAJ0BKuAB4AE+VSqTRqOipqMjsyiY0AqJZ278HblCUs6PUDGPar+j0E5l4Nbn/rD/WHsF89XzH+ch/zfXz/hd+h9HDposhQ9M/2L8Yf1v8q/8V+Tn4vddT7Vftpph/yX8Fea/bl2W/LXUC9pbyna30Au6PnqTRO+PsAfqd6ff2nxEPrf/T9gD+L/uP6k//J/mP8h6pPzT++/+D/RfAT/Hv6d/2/8N7Snrr/Yn2C/1M/6wmvaIrVcdZtXHWbVx1m1cdZtXHWbVx1m1cdZtXHWbVx1m1cdZtXHWbVx1m1cdZtXHWbVx1m1cdZtXHWbVxtt/QhCa39oED3nwfjigY3d0L/KkqZni9caxY9Oe4fngIrVcdZtXHWacp/rM6r677ilP7vApEju1aNTikxfW8DPMPKJ4w+ljr5LaIrVcdZtVhTNkK0eBtVgK2dFr8kkZ5okxst2vNKQvTp0lO4UFBHbH43XooOS22nu3okSZCGEr/YdB+GF8aH7f/b7/ahKuOs2q0UQ+N72JS+4+p7w0xLqjGDhsgURWSYS8Wp0mcqC6TAEPRECgjyggpPEfZkDPSMyMIOAWzFjtyZESSyBZtcm468lyuxDNtAL/1L5ewQxincKCdyK0zeOhkqH2s/D1twFnm3/RZFStnmjOYicfOE3qTVwbuBxO4UD7P0JhEp4AgCTlPTU6PCIeaUWQ0NuqQZdkQZSt8y5V/MdxHSfa9r14If0JHmNXDQrF5ERnGvWVrua/g2r3JqkkKLIr4EsEkbEq46dnR5zjqSr7W4NNRaHXY7BqrrZYzduVWcUJLueJPBVmSm7sFGWnYHD8pQ9vV9X4fPW6BhIDlwbMuAoXGfVS8CRvzGSy0R8MBbpPGtg3ZrIlexgjk7ynOeTv/fWYSdZPDJW0H83ckqxyfb5/2teZnPLtX2OfGQuUDTwWFXTV2vMaJmfiWWxlG6oZo59Y+cerW1lFcH1fez9voT56S5A7x7HebU4h8+Sef+qIDjNNYmnu6Xe3uSVRfYOhEfBzHfIDK7GAZ9ims8PfD3Jh8HNlrR6NYfaxR8MPffBvwGs0Kil2PFdkjFFvqkCkkab+/3+GAw1w0ejkcV9T4K+5GloO8hSmRXUdz5p9f5smcpiH117Ow8IiDj2O+/+zhJSsJLtD1DEIMZZ/Id5qL0YJTPfyLmNrrkhFafQPXj+6kF4aSfj6jfNIuzkfy4MT6DNDzDbIxiQ0jK7h3n2FPTCz+f6yRrkHwrHQ27hAoUHts7wpWNFAbMcifiSCplRO//W6CB5yjkbqMRECgjyfN+DguMEWFTj8yZfBUBlkVcmfE48krY2BDDgEhKEdmkTbMloitVx086V0kewHwgNvcf5MV/OfOJ4nsX2uBOSqhDRHeyS2dYtvO2PtrGgVqt4AOLTRfxzdxNQuW1kWWUZDk5XQbcbsW3Fy2SVtnvyMhOZaB36ixegr0xxQZTVDCPZh6Nx2h7D3Xp/JRSKYjU44TFOECPQ7+y5+LfniEK3CzoN0/MIJA+XKdwoKCPKCE6SC0JTwPWula0Kps4C5ksVdZ+Tj74hKMXjf+QahPT3n2iK1XHWahxILGt4gtMjtr9U6C2PL/81bY0z+uW/SjIvHlj/IZh54HhqQn2iK1XHWbVx1m1cdZtXHWbWJ9k7DLG0GIdRtkBLCQmRxQsnlT3sFBHlBQR5QUEeUFBHlBQR5QUEeUFBHlBQR5QPgAP7/noAAAAAAAAAAAAAAAAAAAAAAg5VqyaPd7dzBn8Dw4uyfIbgmef1S85ECZpYlonkJu8f3EnqRLv3s5vaVCj4c5po0YIOVSIIlWNMc4cpWB149KKoKE/urU8nBlF2+ZZ9QZyzn4U5gzcwsdMzL3+dHJNasD8hAQhKKm5wIDj5JYr/UJc2Kl8NftKuTPWrYT6ulr6LbSwoCC08Db6Y7DpgxRmb1Z2eHmeaTCAvXbDk4Ed3f0MwNRZ7Ofyage23lFx3p9vohSUYedGLPzzgYHReKJhcEHJysRjoySVPlxKKSE9m0esskZ2EeJfjSGNe0wX81QzWCLWhnydKK179+pCCoLv+Cr+zgX6s+/KVaQr6/D19eRWTvWTylbSe7S8IMPk3OR7XuZb4KIx8jv9hEroWIAALam2E+HvhNr1Kmf9uFyM0K4nds8PtVyT+bd28OD33WLdQXJDyR4jEEETuEQns5a2hi262cvXTbcRSXSjy61KLm8Qche6q/E+vixaNfuD2w1n8lA9tFFOsA0+rWgO6ZBt0Wp2TSGOhQHnH2wkmE0YO5YysOkjQfUHBfoCBANz1bgHK6oM1nkTUgxngyQQD2xO7T4UmC9nTff3GhCO3DAewFA6NLoQHCgqeQ3nyxFEZVOgLllgXKn8N70TsMlz9ag5UmqjWJnpE8qVSdflobcK3+JWr1AFVg7vLJ2ROH2hGg1V4X5hKmnp7VRmoji47O9/dquAAA29RibqmOBMOYnWMdcCceVt1RqtQH5+MCPRtZQBwRgEPPpvUIemH4wkEFGqjffL/3Vf1D/A/veBJBHronzSoXpJlxD62EnbcqqQs5Pub7cpGC4pcZ1Co4GIaTLA8LkGrveGvwbvfOv5gXtkTqLtnlaybksAH+Op70ywrkKVxRtKMlCXz2Qyg62NETACwQ8M8mqh6b8LDAOr+LZjrXyZ8QGWMzjwkcdCuoKqQzlYz1Kd4/l+qnyKyyiFikryl32Ei2S7gJHmkiS9vXABJVXGKw+rFqLsd9OUOC2T6g6DNUzO4n4jZyFgjnOwuV+R2Dc+QCH7/OUF4viVteY0GcpsQkCgIbLA8JOfTT5eoDtGXGTXCnISdqe7qPykgpo0+SW0sFK8bwVIRa444F7d3fplORXmtmCBSRhNZvNT6LemfoSx3UjHRR6lZdIylPSwuWpywcYcGGYeVutYMFZ87RI62X7GHrXLyQCIAbiGjSZ2TfAhnwiAy9YSOt/eA9zy6rgKD1gJBeTa3cUWfDb0wYdEpJO0+BF1Av2Z2Eu4lfkeIIMdL7SvOsyfrXlbtT9W6PWmbX6pllIh56LK8LEf3N59iQt92CLScc9dYCzYv+TCkw71R2eJi/oazE0KLNsdFwuSmQFRlk6E7jahzwD3td/Y/09AuwkFpWAoPNRclH30e6uwLCEWMdMPcghc/xLGqvwACjPwJZE6/pR/srS0S21kIv+1Z/XPt179grXuw9asChAFtEuJ6VNdSPyoTFlXzWPKvIUsxbJftDCS1DH4Ax2A2zCfZhU2g1JAb+D8X9oA67uJ9jR+fDoJItiI3ISNUwsSN5gwIdzZhvQEpT6VehBVycxqkNIMGvN2IrbbtasG+M+Sjf0MqdjaWIkHUt2vb9oDY2uyLnrs9iBMiHftvl5Mk8By9ZnsIvfG/3r9iWjfRHzhv0R9Wt+MIlXDtv0uRglfx9xX03YgAi3ETlyUPbsGZUk+R2GBYXu5P77jhQh1gvt1K3OZ5AUkv9IdY9PtJuhC6zJ1JQQMg/IbcMzh7CyYYfKzhpM6Y/OnA+KGVjyBPZczwpFyQhTmwDUrHLPa9AiD9bk0pUQAG3wN6ACK5CdVTMdeqwyWT7mvg0OdjKuhUSU415butu30WE0mnjDxftVwUOtC32xIj2sC/9sj2H9rh6Mg0wNybnylC1kxup3jWUXig0ws0EF6Zz+5kKpQ/OmOeQmLxHRO6l363LTH1LhTTn+q8fAN4+FBw+FG11/lN/2XFRzkc0nZby8fZG16vX5fgO+AB43iKkk4zoBSDiQ39/njtSrnOLiYrFDxARRcQ1oERx06aI/48lqDt4dLTN9Qe1+mbkkhfuzHtfbij+ITWe/h28xSqGRiqVOH92L6uFtcGbIZluAX9A/ff7/85smw0AeoFgrGxbUtCfUibJJrEqVu+rvR8EAj80s6p2G9gdtOo48mzK+YKgz/KRU6Uldvs7F16f5UmSf+AnfH5CidxciiCMdhVFN1Kn4jVG1nahLIulDw6FZBJyPgxNvVtyumorpNIwzge5HzsNKbvUoCgcvE/TXrQNDouxYUG4RzmavaQQwlYQanlPfBj1Gep3kTFaGePd91PjAv6PBhcigP6V67no9lldWAOFz4uTuRgjlesVyWTBNS/r2eXdNatcKMQPvdZg/c93Z3aKRV86aVRwSPw4qwuD/m/0ha7wMru/uaByV+NMEA0uH4Frux6cqUigWv2ZlV9mSkf/ZC2bN4QZG6b9P/mXFcJz85UBNUxND1V2yXH6MAdmCMnNx0AnflgYDcTAWQ5LhlI5zAA/aWYhROPIEnp5cTFTqtlrRHSV9x7VdtyyqUEW9GczHTo9muAfC34Jj3bkecQSUneGljwQXyiV6LR7WUVU/uAmGi83djg9tj+L0a+txWj4dWxfQDowrhoCZsWMXrE2KCQC0Y44qScDv3CVnIwJLJeEwWC/4joTQP8ptQsVVH+aLRBeL9TRr1+fuOLdiV1fg/rkNMu5VT8lDpBeMC/cDUoirUzUxWVvK0rGIR9NUBpBVL0lYREOl+5QUl8uICId5p1ddL+YNhaMstsbV8DDnIiz/8oGGG9bXkVAC05ndn5pswdRDoGV3B93embKB3RzGusn+LGFOlTKene1BBXdg/eZxijcfSEdS8WAJu4RQ711KOUiWl6T+xmNj+39F6F9eCxTois4JbexZgrRd5pZB/SlMuGGDgi02KrdLdXoL8IRbHNxUOuJ/0T7Ioa2V+m7Px71memIMd+Zw2EqpjT03zjGkUxKoZMj6Sn/hfvFwn40baDE0ZPOsycuqEJOw0i7/ijP9wTSV+v41JpaG23fJ2Ed3ETK74SHNLiH35iIm5gxh/DyefOaidaxozxMxZ7XnORsknSfO6VS4eKTY0mLRKkhhqS8hYKQxLvxfZ5Ym/P/uXkd/aXVhBH2IITerAyWVh4MF/Xy9rLO2mYj41EPIfMAtfQ5H2Pdli6Fxq2jdAQUlQf+7MTZy1AU7xD5K49XSNe7siSaXsCMeO3LD5hYJe3KthYZdatfHzCejcyd92ZeKtNmytppthzztBTVYLbECDA18AmpyBPgw9GRQH8cd8cWDXd/2y70ssHaUCGplGEM8ATnoEB5Ul4cYgkxhafoJ6P7w1UWIU5UOXxAx8uV6hSL7z3WevSYyq3RrQudnAYObLNkHVZ1jR7WNiNtuxKzNcQPEWHQYCmhsiJ7mrwzTVG19NO8x2TrlNzY01IQ3bEar4Fr7aJ8+apbux6bc8+HI2noPKbBHXR9Q69huOGtq2SpUf5HNpwF5nCGDSkvD0Ye/OORE9ud3FsMq7VDYwyTQwysEeXXSH7NayTokb5AOAN1+JFQhdsHgEC+A4rzdSD91/kxvjA/iKsKFS0FmQUq6D0k2W5NJwostymb/W12yrL4qPR4NBOB/3N0dQCk0LdNj6xuarSItHB3SD8CP2kWi8h0DAL/UCc1uxyfZvyO5Q9w69nETJRrK2gvV3zeA/e4MIBSEAOI9o0HhENSQugHW191F+mHblzddA6a5KOM1hhafIc4hvdJrXUEW+T2ocOZ/Vf5kwdKFO+8qk+mcpFx9sGEj/y4JsE7lQMy6XdQs5nmBIVP2vXzyAOb53MHkZ04Gv8JeQ7Bck5dlpMpli60OgME6BR7ZLzFJaCpdCofQhy4shCubkf5AureKnMpMHxxb0XhbLi2x1Qwyijd62StnPFuJ79PYUi9D2V0gj00BubWwpOvHJlnpM85xNAlnBO7XfAEllJQqo6SHDZbSzl5gGLOAUszcMkrmZoo+46iDd59a4iajBP5fgYHx5DFLVL2hOCSIEkEEADtUTscDWZ6Y1N4UJWFoNEG5Jph74Sm0BMMR1J5E53hAUOkSziZy5NLmH/gLmBc9V/s/75ZIOJu+04NdSRcjWkCcoqwHWVF7k41RoIbgwIcQOA5pAuMaq0AnVWcA9jk535UmhPinzWS+/sko4mTFWEkAiN1BvDhN6B71RGv8DzRYwwvJo2cM/wA+K5ApyWuky3ZTZVR/1btoodSWOP/Dhmxqq8n7/AUcRZgVruLZjHOUEKepykldtjNcMiTFLtXs913p09Y18VmarldcDHBmMSR10eD8yKSb8p5x/8qCagmMN/m1ylKtBK4K/NznZrIZ7DH7sXWBRN6s+5/P9TQMOQ2oCRIJnGhaHB/Lbjf1K6QTmW5wBL3SlT2NsZWhDEAbRdV9yQDHbEAztnJt1vO/w+6IhELOMg+fsRZJTz7FDuAeb10+YpPuklZ/ScSTcK1ElqgRfwA9TTbVGT5W74JYuCujP2+S2+DPs5OTf8fJl5LcL3wLQT3mYhO+eYzGneMvwYUfoh6ppiwIy/86EVc0CldH9PHVm9vae94zT9kVNvhzyugUDGzY1CXBG/FFB6mVJW5j5w6GR/b38f7le+YwADxOU3zuJmE6Wm6Glj5oslyNoXbkdeMsJd2hW8uMsaOBbgUx6zGGkSnHJQecOckb/bslwR+JZyJvCW7Qut56POY9xe8GAnATwvfVWE3K6AiEsoZ5WABrvjfPFM/1nl9aGK6KLOsk7KMzS36JtqjbfMg+xoaV64OSn4dNvHfjKs5mGcZG7tYIcaix+8EWfu/Wu9yazCnVvUgsCttKOX8kh5O9soiC8lxXKl/eoXozeEPHjgVMPBfJxZiWBTA//sEn6rq2CLtdKXZ+IUR0TWuvAwUEXp09D4br2eQ5IiaWLbQyCGRtH5yyNGrfzMLEqepoJ3SJn5nOU2WcD/TlFxUXpMwphQ1+TqH6i7oTTQHxFEsx1VVRq5lApfcyp0hQk8iSWV7183D3H7baU4EHYNlviENloQkLguOwpmw+nOpU2VE2umtE9GseXvbhbnAfPtrm+tyLoPZ8qhKOyIu0AdEnEnwuuTkXtNCrA0RcuxSRhYsci9QiXxboctIH3hCCIiFy8CuDedlIqEJmZcUtwQmwgr7tPXA0dVui1NRTRpPptCHPhmvGlk1CgfJ16903vz4/nIV+S2Dg1C9QJM4m6IN8cEJvoTO/yUx3is2dgcNN9yW+G+cC4qeAAgADJVuP0jOtY9intRKGfg3e/Gj7zIs2BcIGS2O6qhSGPd4klVYMaJQ6drDD7v7Z/xntdBH/Rihp3A8ROb7C1en330PspqNq6T9xexre3fKW48NpyUFiEh2+tPAQfkFy0jkS5Y4la9uJocORrNqYdTJY1badsMQSIXtBMjDeyc8CVKaogZPuMA4x3aYgEk0DOQNpjij5fGfBAzlSCWpk8djVp/dFK//8MV//km//yOH//kOKHkA+c9WkVoAp7WQQLILJ/ceyh9sHVHb3Ggth89DinVPeor+Qo7rpp6WezcMHzJeOHDg5YeaEJMcv5Pz7/AaYA+XfPDFgzFtXA8yf3/X9cqg2CljZYJeFgFV1QWgsQ27UQSnCCFpSSG7cy5WvsGUrsvtcNA3zxI+Q4LdW3Y/+MyuSeCcljrwooxU1MmZGgnVAcpxGO4L0EVqXziRmNGWT0UygSx2mb56VOG/tnxUUfqIt3IMMEqDas7fzTDal/7DeB3E7+pwRVxiWbGElSp2iAaX7420RnWQ2UoY4uCKQ/Hjx6JcByrvV/R478zIuo2Pg4gwe1wh5k6qHMJsXMkRCOhangI/TZXluct15ARzVipYPoz/tow7DBgL0faykECvqfRwAW8Li4Op6Ibp7jmwLZYu3bz+VTnDsahO45ANWPOSjLftsYaU+6xWWcbtL3+xBYB2glePM3RJJeRafQEQQqwu0LnBEdbQLOoNKJb5Nx2krdwK8VjYcKc67rr9lkKUTkfwu86GJz5forzHtAjsizzqvFlpY6Y2eA8cxnt+ZECNySVAm/lDBZ3AADNEANGC5ByW7XWGL8v+uQH9eI+V6FsIS5BMbQIACbYtiowSij6TkfEUnjkwU8QlQYzB4SbLWS0SMOwulT+1hE2qNehaOGSrpxflex6bArMHxr3Hc2NvPengbWtReeKklhK+rdFbppO/SYLUzhjX7wDtcQ0KDQvaTkqoB1ifYGvP97RKjCd6ZE/mSDuULzvbDjMI/J585z7Fyvt2CrP/sPNcvKlR/JqN13uLnwZxrxPkrGDXRH6iDcSxjbpBYjEJezhbc62WFOAFLT2cveuPBYebrhG0N0seeHCd/wTCZBDFvsFMoAKIPU3aJGS1SDBDqZgRPq1tMDfWeJZlxs2f5oinl6B/hWi3vh4sthlxybO1SL9QFdavTThqcyEVCuGmiorT2vqlCQVBGLwkmJSc61sZtR30PBGiOyUJtef1lQ3M/SAjl8jl27UcUhw/M/rwFb0oZfGu7P6LfD9udInaeVx0W5wKvfNvG/8zrXgkJAlJWXGSeEX5UtRnDVL2UfEdH61QusyljwAkUk2BJF6Vqv12v8rZiApqPf7OAV/TCb9Z/MMprodCANbrLfTgaG51EPPMUP3Cwe2iV4kcn1RW9uU/WajzuKuT4Oru7MIvjym8RnZbV27adubTDndz83Y5BDAnOvajNwxh1ZC7t9MrYtC2+Tb/0Oy1kU8ExEPGfPAs2M9wAAl7Vs7vOsESvPeOKgH+15GUIpqErQDYnarDzVHufg6SzRyTFImJi9fcwg1Fm6xcDpRxg6wHVUNqo4gxce18W4mqBdB06KuqU4qIPWLXOhB9CQB9um+/4Ha0sZLIUXjEBoLr9fOdlEU7vHowUqDg0m3fY5H1roqI2l4wKX0a+QNOSJYgChUE1MDFvPP34b+dTmC+61MU2GPP875D6KTC9DG7OlcJAAABrcei2fJWz5LcG2OkwVBsm9jgsYnujK+yvsr7aKXoAAAAAAAAAAAAAAAAAAAAAAAA",sd={evening:{label:"Abend",src:hj},morning:{label:"Morgen",src:gj},cinema:{label:"Kino",src:yj},off:{label:"Alles aus",src:vj,ownBackdrop:!0}},bj=[["off",/\b(aus|off)\b|ausschalten|ausmachen|nacht|night|schlaf|sleep|abwesend|away|verlassen/i],["cinema",/kino|film|movie|\btv\b|fernseh|netflix|serie|cinema/i],["morning",/morgen|morning|aufstehen|wecken|wake|früh|frueh/i],["evening",/abend|evening|relax|gemütlich|gemuetlich|chill|lesen|dinner|essen/i]];function xj(e="",t=""){if(t&&sd[t])return t;const n=bj.find(([,r])=>r.test(e));return n?n[0]:"evening"}const wj={light:"Licht",cover:"Rollläden",media_player:"TV",climate:"Heizung",switch:"Geräte",fan:"Lüfter",lock:"Schloss",input_boolean:"Schalter"};function kj(e){return e.length<=1?e[0]||"":`${e.slice(0,-1).join(", ")} und ${e[e.length-1]}`}function Sj(e,t){var i,a,o;const n=(o=(a=(i=e==null?void 0:e.states)==null?void 0:i[t])==null?void 0:a.attributes)==null?void 0:o.entity_id;if(!Array.isArray(n)||n.length===0)return"";const r=[];return n.forEach(l=>{const c=wj[ve(l)];c&&!r.includes(c)&&r.push(c)}),r.length===0?"Geräte":r.length>3?`${r.slice(0,2).join(", ")} und mehr`:kj(r)}const Nj=[{id:"warm",label:"Warmweiß",rgb:[255,166,87]},{id:"neutral",label:"Neutralweiß",rgb:[255,244,229]},{id:"cool",label:"Kaltweiß",rgb:[207,226,255]},{id:"red",label:"Rot",rgb:[239,68,68]},{id:"orange",label:"Orange",rgb:[251,146,60]},{id:"green",label:"Grün",rgb:[74,222,128]},{id:"blue",label:"Blau",rgb:[96,165,250]},{id:"purple",label:"Violett",rgb:[192,132,252]}];function Aj(e){return`rgb(${e[0]}, ${e[1]}, ${e[2]})`}function jj(e,t){var a,o;const n=(a=e==null?void 0:e.states)==null?void 0:a[t];if(!n)return null;const{rgb_color:r,color_mode:i}=n.attributes||{};return Array.isArray(r)&&r.length>=3?r.slice(0,3):i==="color_temp"&&((o=n.attributes)!=null&&o.color_temp)?Ej(n.attributes.color_temp):null}function Ej(e){const t=e/100;let n,r,i;return t<=66?(n=255,r=Math.min(255,Math.max(0,99.4708025861*Math.log(t)-161.1195681661))):(n=Math.min(255,Math.max(0,329.698727446*(t-60)**-.1332047592)),r=Math.min(255,Math.max(0,288.1221695283*(t-60)**-.0755148492))),t>=66?i=255:t<=19?i=0:i=Math.min(255,Math.max(0,138.5177312231*Math.log(t-10)-305.0447927307)),[Math.round(n),Math.round(r),Math.round(i)]}function Cj({activeRgb:e,onPick:t,className:n=""}){return s.jsx("div",{className:`tm-light-color-circles${n?` ${n}`:""}`,role:"group","aria-label":"Lichtfarbe wählen",children:Nj.map(r=>{const i=e&&Math.abs(e[0]-r.rgb[0])<=18&&Math.abs(e[1]-r.rgb[1])<=18&&Math.abs(e[2]-r.rgb[2])<=18;return s.jsx("button",{type:"button",className:`tm-light-color-circle${i?" active":""}`,style:{"--tm-light-color":Aj(r.rgb)},onClick:()=>t(r.rgb),"aria-label":r.label,title:r.label},r.id)})})}const ff={light:{bg:"transparent",icon:"#e4e4e7"},switch:{bg:"transparent",icon:"#e4e4e7"},climate:{bg:"transparent",icon:"#d4d4d8"},lock:{bg:"transparent",icon:"#d4d4d8"},alarm_control_panel:{bg:"transparent",icon:"#d4d4d8"},cover:{bg:"transparent",icon:"#d4d4d8"},default:{bg:"transparent",icon:"#e4e4e7"}},pf={light:{bg:"rgba(234, 179, 8, 0.1)",icon:"#fef08a"},switch:{bg:"rgba(234, 179, 8, 0.1)",icon:"#fef08a"},climate:{bg:"rgba(239, 68, 68, 0.1)",icon:"#fecaca"},lock:{bg:"rgba(59, 130, 246, 0.1)",icon:"#bfdbfe"},alarm_control_panel:{bg:"rgba(16, 185, 129, 0.1)",icon:"#a7f3d0"},cover:{bg:"rgba(59, 130, 246, 0.1)",icon:"#bfdbfe"},default:{bg:"rgba(255,255,255,0.05)",icon:"rgba(255,255,255,0.5)"}};function Tj(e,t,n){const r=RN(n),i=t||String(e);let a=0;for(let o=0;o<i.length;o+=1)a=i.charCodeAt(o)+((a<<5)-a);return r[Math.abs(a)%r.length]}function Pj(e,t){if(Ju(t))return ff[e]||ff.default;if(rr(t))return{bg:"var(--tm-surface)",icon:"var(--tm-tile-fg)"};if(Xu(t)){const{accentRgb:n}=Qu(t);return{bg:`rgba(${n}, 0.22)`,icon:"#ffffff"}}return pf[e]||pf.default}function H0(e){return!["climate","sensor","binary_sensor"].includes(e)}function Mj(e,t){var o;const n=e.filter(l=>l.active).length,r=e.length,i=t||(r===1?(o=e[0])==null?void 0:o.label:`${r} Geräte`);let a;return r===0?a="":n===0?a="Alle aus":n===r?a="Alle an":a=`${n} von ${r} an`,{label:i,sub:a,active:n>0,activeCount:n,total:r}}function zj({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){const{config:a}=ke();if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-quick-action tm-brightness-action empty",onClick:r,children:[s.jsx(Ji,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Licht konfigurieren"})]});const o=n(e.entity_id),l=e.label||o.name,u=ve(e.entity_id)==="light",d=Vx(t,e.entity_id),m=o.state==="on",f=u?jj(t,e.entity_id):null,[g,v]=b.useState(d),[x,w]=b.useState(!1),y=b.useRef(!1),p=b.useRef(null);b.useEffect(()=>{y.current||v(d)},[d]);const h=()=>{y.current=!1,w(!1)},k=j=>{var D;const z=(D=p.current)==null?void 0:D.getBoundingClientRect();if(!z)return;const T=Math.min(100,Math.max(0,Math.round((z.bottom-j)/z.height*100)));v(T),Gx(t,e.entity_id,T)},N=j=>{var z;i||((z=p.current)==null||z.setPointerCapture(j.pointerId),y.current=!0,w(!0),k(j.clientY))},E=j=>{y.current&&k(j.clientY)},C=j=>{i||Qx(t,e.entity_id,j)};return s.jsxs("div",{ref:p,className:`tm-quick-action tm-brightness-action${m?" active":""}${x?" dragging":""}${u?" tm-brightness-action--light":""}`,style:{"--tm-brightness":`${g}%`},onPointerDown:N,onPointerMove:E,onPointerUp:h,onPointerCancel:h,role:"slider","aria-label":`Helligkeit ${l}`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":g,tabIndex:0,children:[s.jsx("div",{className:"tm-brightness-fill"}),s.jsxs("div",{className:"tm-brightness-header",children:[s.jsx(Ht,{hass:t,entity:o,overrideIcon:e.icon,size:22,style:{opacity:.9,color:rr(a.appearance)?"var(--tm-tile-fg)":"#fef08a"}}),s.jsxs("div",{className:"tm-flex-col",style:{minWidth:0,flex:1},children:[s.jsx("div",{className:"tm-font-bold",style:{fontSize:"1rem",lineHeight:1.25,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l}),s.jsxs("div",{className:"tm-text-xs tm-opacity-70",children:[g,"%"]})]})]}),u&&s.jsx("div",{className:"tm-brightness-colors",onPointerDown:j=>j.stopPropagation(),onPointerMove:j=>j.stopPropagation(),children:s.jsx(Cj,{activeRgb:f,onPick:C})})]})}function Lj({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){const{config:a}=ke(),o=a.appearance;if(e.mode==="brightness")return s.jsx(zj,{widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i});if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-quick-action empty",onClick:r,children:[s.jsx(st,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Konfigurieren"})]});const l=n(e.entity_id),c=ve(e.entity_id),u=rs(l.state,c),d=Pj(c,o),m=e.label||l.name,f=xu(t,e.entity_id),g=H0(c),v=()=>{i||!g||wu(t,e.entity_id)},x=u?Ju(o)?{background:"rgba(255, 255, 255, 0.15)",color:"#ffffff"}:rr(o)?{background:"var(--tm-surface)",color:"var(--tm-tile-fg)",boxShadow:"inset 0 0 0 2.5px var(--tm-tile-fg)"}:Xu(o)?{background:`rgba(${Qu(o).accentRgb}, 0.45)`,color:"#ffffff"}:{background:"rgba(234, 179, 8, 0.2)",color:"#fef08a"}:{background:d.bg};return s.jsxs("button",{type:"button",className:`tm-quick-action${u?" active":""}`,style:{...x,cursor:g&&!i?"pointer":"default"},onClick:v,children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{width:"100%"},children:[s.jsx(Ht,{hass:t,entity:l,overrideIcon:e.icon,size:24,style:u?{}:{opacity:.7,color:d.icon}}),u&&s.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"currentColor"}})]}),s.jsxs("div",{className:"tm-flex-col",style:{marginTop:"auto"},children:[s.jsx("div",{className:"tm-font-bold",style:{fontSize:"1.125rem",lineHeight:1.25},children:m}),s.jsx("div",{className:"tm-text-xs tm-opacity-70",style:{marginTop:"0.25rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:f})]})]})}function Oj(e){return e!=="disarmed"&&e!=="unavailable"}function Ij(e){return e==="triggered"||e==="triggering"||e==="pending"}function Rj({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-alarm-widget empty",onClick:r,children:[s.jsx(hs,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Alarm konfigurieren"})]});const a=n(e.entity_id),{state:o}=a,l=Oj(o),c=Ij(o),u=e.label||a.name,d=xu(t,e.entity_id),m=()=>{i||wu(t,e.entity_id)};return s.jsxs("button",{type:"button",className:`tm-alarm-widget${l?" armed":""}${c?" triggered":""}`,onClick:m,"aria-label":`${u}: ${d}`,children:[s.jsxs("div",{className:"tm-alarm-widget-top",children:[s.jsx(Ht,{hass:t,entity:a,overrideIcon:e.icon||"mdi:shield-home",size:26,className:"tm-alarm-widget-icon"}),l&&s.jsx("span",{className:"tm-alarm-widget-dot","aria-hidden":!0})]}),s.jsxs("div",{className:"tm-alarm-widget-body",children:[s.jsx("div",{className:"tm-alarm-widget-label",children:u}),s.jsx("div",{className:"tm-alarm-widget-state",children:d})]})]})}function Dj({entityId:e,label:t,artKey:n,hass:r,getEntity:i,editMode:a,colorVars:o}){const[l,c]=b.useState(!1);b.useEffect(()=>{if(!l)return;const v=setTimeout(()=>c(!1),1600);return()=>clearTimeout(v)},[l]);const u=i(e),d=t||u.name,m=Sj(r,e),f=sd[xj(d,n)],g=()=>{a||(sg(r,e),c(!0))};return s.jsx("div",{className:"tm-scene-card",style:o,children:s.jsxs("div",{className:"tm-scene-card-inner",children:[s.jsxs("div",{className:"tm-scene-card-text",children:[s.jsx("div",{className:"tm-scene-card-kicker",children:ve(e)==="script"?"Skript":"Szene"}),s.jsx("div",{className:"tm-scene-card-title",children:d}),m&&s.jsx("div",{className:"tm-scene-card-sub",children:m})]}),s.jsxs("div",{className:"tm-scene-card-art",children:[!f.ownBackdrop&&s.jsx("div",{className:"tm-scene-card-art-disc"}),s.jsx("img",{src:f.src,alt:"",draggable:!1})]}),s.jsxs("button",{type:"button",className:`tm-scene-card-start${l?" started":""}`,onClick:g,disabled:a,"aria-label":`${d} starten`,children:[l?s.jsx(ed,{size:26,strokeWidth:2.75}):s.jsx(ad,{size:26,fill:"currentColor",strokeWidth:0}),s.jsx("span",{className:"tm-scene-card-start-label",children:l?"Gestartet":"Szene starten"})]})]})})}function Fj({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){var c;const{config:a}=ke(),o=(c=e.entity_ids)!=null&&c.length?e.entity_ids.slice(0,ie.sceneEntities):e.entity_id?[e.entity_id]:[];if(o.length===0)return s.jsxs("button",{type:"button",className:"tm-scene-btn empty",onClick:r,children:[s.jsx(st,{size:20}),s.jsx("span",{className:"tm-text-sm",children:"Szene"})]});const l=rr(a.appearance);return s.jsx("div",{className:"tm-scenes",children:s.jsx("div",{className:`tm-scenes-grid tm-scenes-grid--${o.length}`,children:o.map((u,d)=>{var m;return s.jsx(Dj,{entityId:u,label:o.length===1?e.label:"",artKey:(m=e.scene_art)==null?void 0:m[u],hass:t,getEntity:n,editMode:i,colorVars:l?CN(e.id,d):void 0},u)})})})}function hf({variant:e,summary:t,gradient:n,active:r,slot:i,primaryEntity:a,entityCount:o,hass:l,onClick:c,appearance:u}){const d=rr(u);return s.jsxs("button",{type:"button",className:`tm-scene-btn tm-qa-scene-trigger${r?" active":""}${d&&r?" tm-scene-btn--pastel-active":""}`,onClick:c,"aria-label":`${t.label} ${t.sub}`,children:[s.jsx("div",{className:"tm-scene-gradient",style:{background:r?d?n:"linear-gradient(135deg, rgba(234, 179, 8, 0.55), rgba(180, 130, 0, 0.35))":n,opacity:d||r?1:.55}}),e==="status"?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"tm-scene-icon",children:s.jsx("span",{className:"tm-qa-scene-state",children:t.sub})}),s.jsx("div",{className:"tm-scene-label",children:r?"An":"Aus"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tm-scene-icon tm-qa-scene-icon-wrap",children:[s.jsx(Ht,{hass:l,entity:a,overrideIcon:i.icon||(o>1?"mdi:layers":""),size:18,style:{color:d?"currentColor":"white"}}),o>1&&s.jsx("span",{className:"tm-qa-entity-count",children:o})]}),s.jsx("div",{className:"tm-scene-label",children:t.label})]})]})}function _j({widget:e,widgetIndex:t,hass:n,getEntity:r,onConfigure:i,onOpen:a,editMode:o}){var v;const{config:l}=ke(),c=oN(e);if(c.length===0)return s.jsxs("button",{type:"button",className:"tm-scene-btn empty",onClick:i,children:[s.jsx(st,{size:20}),s.jsx("span",{className:"tm-text-sm",children:"Entitäten konfigurieren"})]});const u=c.map(x=>{const w=r(x),y=ve(x);return{entityId:x,entity:w,domain:y,active:rs(w.state,y),label:w.name,sub:xu(n,x),actionable:H0(y)}}),d=Mj(u,e.label),m=Tj(t,c[0],l.appearance),f=(v=u[0])==null?void 0:v.entity,g=()=>{if(o){i==null||i();return}a==null||a({slot:e,entities:u,summary:d,index:t,gradient:m})};return s.jsxs("div",{className:"tm-popup-widget-stack",children:[s.jsx(hf,{variant:"icon",summary:d,gradient:m,active:d.active,slot:e,primaryEntity:f,entityCount:c.length,hass:n,onClick:g,appearance:l.appearance}),s.jsx(hf,{variant:"status",summary:d,gradient:m,active:d.active,slot:e,primaryEntity:f,entityCount:c.length,hass:n,onClick:g,appearance:l.appearance})]})}function Wj({item:e,hass:t,onToggle:n}){return s.jsxs("div",{className:`tm-qa-popup-entity${e.active?" active":""}${e.disabled?" disabled":""}`,children:[s.jsx(Ht,{hass:t,entity:e.entity,size:18,style:{color:e.active?"#fef08a":"rgba(255,255,255,0.7)"}}),s.jsxs("div",{className:"tm-qa-popup-entity-text",children:[s.jsx("span",{className:"tm-qa-popup-entity-name",children:e.label}),s.jsx("span",{className:"tm-qa-popup-entity-state",children:e.sub})]}),e.actionable?s.jsx("button",{type:"button",className:"tm-qa-popup-entity-toggle",onClick:()=>n(e.entityId),children:e.active?"Aus":"An"}):s.jsx("span",{className:"tm-qa-popup-entity-readonly","aria-hidden":!0})]})}function Bj({data:e,hass:t,onClose:n}){var f;const{slot:r,entities:i,summary:a,gradient:o}=e,l=i.filter(g=>g.actionable),c=l.length>0&&l.every(g=>g.active),u=(f=i[0])==null?void 0:f.entity;ir(!0),b.useEffect(()=>{const g=v=>{v.key==="Escape"&&n()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[n]);const d=g=>{wu(t,g)},m=()=>{const g=c?og:ag;l.forEach(v=>g(t,v.entityId))};return Pn.createPortal(s.jsxs("div",{className:"tm-qa-popup-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-qa-popup-backdrop",onClick:n,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-qa-popup-panel tm-qa-popup-panel--multi",onClick:g=>g.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":a.label,children:[s.jsx("div",{className:"tm-scene-gradient",style:{background:a.active?"linear-gradient(135deg, rgba(234, 179, 8, 0.55), rgba(180, 130, 0, 0.35))":o,opacity:.45}}),s.jsx("button",{type:"button",className:"tm-qa-popup-close",onClick:n,"aria-label":"Schließen",children:s.jsx(Ke,{size:16})}),s.jsxs("div",{className:"tm-qa-popup-header",children:[s.jsx("div",{className:"tm-scene-icon tm-qa-popup-header-icon",children:s.jsx(Ht,{hass:t,entity:u,overrideIcon:r.icon||(i.length>1?"mdi:layers":""),size:22,style:{color:"white"}})}),s.jsxs("div",{className:"tm-qa-popup-header-text",children:[s.jsx("div",{className:"tm-scene-label",children:a.label}),s.jsx("div",{className:"tm-qa-popup-state",children:a.sub})]})]}),s.jsx("div",{className:"tm-qa-popup-entities",children:i.map(g=>s.jsx(Wj,{item:g,hass:t,onToggle:d},g.entityId))}),l.length>1&&s.jsx("button",{type:"button",className:"tm-qa-popup-toggle",onClick:m,children:c?"Alle ausschalten":"Alle einschalten"})]})]}),zn())}function q0({entityId:e,label:t,entity:n,hass:r,overrideIcon:i,editMode:a,variant:o="group"}){const l=Su(r,e),[c,u]=b.useState(l),[d,m]=b.useState(!1),f=b.useRef(!1),g=b.useRef(null);b.useEffect(()=>{f.current||u(l)},[l]);const v=()=>{f.current=!1,m(!1)},x=p=>{var N;const h=(N=g.current)==null?void 0:N.getBoundingClientRect();if(!h)return;const k=Math.min(100,Math.max(0,Math.round((h.bottom-p)/h.height*100)));u(k),$l(r,e,k)},w=p=>{var h;a||((h=g.current)==null||h.setPointerCapture(p.pointerId),f.current=!0,m(!0),x(p.clientY))},y=p=>{f.current&&x(p.clientY)};return o==="row"?s.jsxs("div",{className:`tm-cover-popup-entity${c>0?" active":""}`,children:[s.jsx(Ht,{hass:r,entity:n,size:18,style:{color:c>0?"#bfdbfe":"rgba(255,255,255,0.7)"}}),s.jsxs("div",{className:"tm-cover-popup-entity-text",children:[s.jsx("span",{className:"tm-cover-popup-entity-name",children:t}),s.jsxs("span",{className:"tm-cover-popup-entity-state",children:[c,"%"]})]}),s.jsx("input",{type:"range",className:"tm-cover-popup-slider",min:0,max:100,value:c,disabled:a,onChange:p=>{const h=Number(p.target.value);u(h),$l(r,e,h)},"aria-label":`Position ${t}`})]}):s.jsxs("div",{ref:g,className:`tm-quick-action tm-cover-action tm-cover-action--group${c>0?" active":""}${d?" dragging":""}`,style:{"--tm-cover-position":`${c}%`},onPointerDown:w,onPointerMove:y,onPointerUp:v,onPointerCancel:v,role:"slider","aria-label":`Position ${t}`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":c,tabIndex:a?-1:0,children:[s.jsx("div",{className:"tm-cover-fill"}),s.jsxs("div",{className:"tm-cover-header",children:[s.jsx(Ht,{hass:r,entity:n,overrideIcon:i,size:20,style:{opacity:.9,color:"#bfdbfe"}}),s.jsxs("div",{className:"tm-flex-col",style:{minWidth:0,flex:1},children:[s.jsx("div",{className:"tm-font-bold tm-cover-group-label",children:t}),s.jsxs("div",{className:"tm-text-xs tm-opacity-70",children:[c,"%"]})]})]})]})}function Hj(e,t){return e==="opening"?"Öffnet …":e==="closing"?"Schließt …":e==="unavailable"||e==="unknown"?"Nicht verfügbar":t>0?"Geöffnet":"Geschlossen"}function qj({entityId:e,label:t,entity:n,hass:r,editMode:i}){const a=Su(r,e),[o,l]=b.useState(a),[c,u]=b.useState(!1),d=b.useRef(!1),m=b.useRef(null),f=Mx(r,e);b.useEffect(()=>{d.current||l(a)},[a]);const g=p=>{var N;const h=(N=m.current)==null?void 0:N.getBoundingClientRect();if(!h)return o;const k=(p-h.top)/h.height;return Math.min(100,Math.max(0,Math.round((1-k)*100)))},v=p=>{i||(p.stopPropagation(),p.currentTarget.setPointerCapture(p.pointerId),d.current=!0,u(!0),l(g(p.clientY)))},x=p=>{d.current&&l(g(p.clientY))},w=p=>{if(!d.current)return;d.current=!1,u(!1);const h=g(p.clientY);l(h),$l(r,e,h)},y=Hj(n.state,o);return s.jsxs("div",{className:`tm-quick-action tm-cover-card${c?" dragging":""}`,children:[s.jsxs("div",{className:"tm-cover-card-main",children:[s.jsxs("div",{className:"tm-cover-card-info",children:[s.jsx("div",{className:"tm-cover-card-title",children:t}),f&&s.jsx("div",{className:"tm-cover-card-area",children:f}),s.jsxs("div",{className:"tm-cover-card-value",children:[o,s.jsx("span",{className:"tm-cover-card-unit",children:"%"})]}),s.jsx("div",{className:"tm-cover-card-status",children:y})]}),s.jsxs("div",{className:"tm-cover-visual",onPointerDown:v,onPointerMove:x,onPointerUp:w,onPointerCancel:w,role:"slider","aria-label":`Position ${t}`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":o,tabIndex:i?-1:0,children:[s.jsx("div",{className:"tm-cover-visual-box"}),s.jsxs("div",{ref:m,className:"tm-cover-visual-window",children:[s.jsx("div",{className:"tm-cover-visual-view"}),s.jsx("div",{className:"tm-cover-visual-slats",style:{height:`${100-o}%`}})]})]})]}),s.jsxs("div",{className:"tm-cover-card-controls",children:[s.jsx("button",{type:"button",className:"tm-cover-card-btn",disabled:i,onClick:()=>lg(r,e),"aria-label":`${t} öffnen`,children:s.jsx(N0,{size:22,strokeWidth:2.25})}),s.jsx("button",{type:"button",className:"tm-cover-card-btn tm-cover-card-btn--stop",disabled:i,onClick:()=>iw(r,e),"aria-label":`${t} stoppen`,children:s.jsx(id,{size:22,strokeWidth:2.5})}),s.jsx("button",{type:"button",className:"tm-cover-card-btn",disabled:i,onClick:()=>ku(r,e),"aria-label":`${t} schließen`,children:s.jsx(ps,{size:22,strokeWidth:2.25})})]})]})}function Uj({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-quick-action tm-cover-action empty",onClick:r,children:[s.jsx(Yr,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Rolladen konfigurieren"})]});const a=n(e.entity_id),o=e.label||a.name;return s.jsx(qj,{entityId:e.entity_id,label:o,entity:a,hass:t,editMode:i})}function Yj({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){const a=e.entity_ids||[];return a.length===0?s.jsxs("button",{type:"button",className:"tm-quick-action tm-cover-action empty",onClick:r,children:[s.jsx(Yr,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Rolladen-Gruppe"})]}):s.jsx("div",{className:`tm-cover-group${i?" tm-cover-group--edit":""}`,onClick:i?r:void 0,onKeyDown:i?o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),r==null||r())}:void 0,role:i?"button":void 0,tabIndex:i?0:void 0,children:a.map(o=>{const l=n(o),c=l.name;return s.jsx(q0,{entityId:o,label:c,entity:l,hass:t,overrideIcon:e.icon||"mdi:window-shutter",editMode:i,variant:"group"},o)})})}function Kj({data:e,hass:t,getEntity:n,onClose:r}){var g;const{slot:i,entityIds:a,summary:o,gradient:l}=e,c=a.map(v=>{const x=n(v);return{entityId:v,entity:x,label:x.name,position:Su(t,v)}}),u=c.length>0&&c.every(v=>v.position>=100),d=(g=c[0])==null?void 0:g.entity;ir(!0),b.useEffect(()=>{const v=x=>{x.key==="Escape"&&r()};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[r]);const m=()=>{c.forEach(v=>lg(t,v.entityId))},f=()=>{c.forEach(v=>ku(t,v.entityId))};return Pn.createPortal(s.jsxs("div",{className:"tm-qa-popup-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-qa-popup-backdrop",onClick:r,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-qa-popup-panel tm-qa-popup-panel--multi tm-cover-popup-panel",onClick:v=>v.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":o.label,children:[s.jsx("div",{className:"tm-scene-gradient",style:{background:o.active?"linear-gradient(135deg, rgba(59, 130, 246, 0.55), rgba(37, 99, 235, 0.35))":l,opacity:.45}}),s.jsx("button",{type:"button",className:"tm-qa-popup-close",onClick:r,"aria-label":"Schließen",children:s.jsx(Ke,{size:16})}),s.jsxs("div",{className:"tm-qa-popup-header",children:[s.jsx("div",{className:"tm-scene-icon tm-qa-popup-header-icon",children:s.jsx(Ht,{hass:t,entity:d,overrideIcon:i.icon||(c.length>1?"mdi:window-shutter-open":"mdi:window-shutter"),size:22,style:{color:"white"}})}),s.jsxs("div",{className:"tm-qa-popup-header-text",children:[s.jsx("div",{className:"tm-scene-label",children:o.label}),s.jsx("div",{className:"tm-qa-popup-state",children:o.sub})]})]}),s.jsx("div",{className:"tm-cover-popup-entities",children:c.map(v=>s.jsx(q0,{entityId:v.entityId,label:v.label,entity:v.entity,hass:t,variant:"row"},v.entityId))}),c.length>1&&s.jsx("button",{type:"button",className:"tm-qa-popup-toggle tm-cover-popup-toggle",onClick:u?f:m,children:u?"Alle schließen":"Alle öffnen"})]})]}),zn())}function gf(e){var t,n,r;return((t=e==null?void 0:e.attributes)==null?void 0:t.hourly_forecast)||((n=e==null?void 0:e.attributes)==null?void 0:n.forecast_hourly)||((r=e==null?void 0:e.attributes)==null?void 0:r.hourly)||null}function Vj(e,t,n){var a;const[r,i]=b.useState(()=>gf(n));return b.useEffect(()=>{i(gf(n))},[n]),b.useEffect(()=>{var c;if(!t||!n||!((c=e==null?void 0:e.connection)!=null&&c.subscribeMessage)||!UA(n))return;let o=!0,l=()=>{};return e.connection.subscribeMessage(u=>{var d;!o||!((d=u==null?void 0:u.forecast)!=null&&d.length)||i(u.forecast)},{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:t}).then(u=>{if(!o){u();return}l=u}).catch(()=>{}),()=>{o=!1,l()}},[e,t,n==null?void 0:n.id,(a=n==null?void 0:n.attributes)==null?void 0:a.supported_features]),r}const yf=1e3,Gj=.2,Qj=2e3;function Jj(e,t){const n=e.currentTime;Number.isFinite(t.duration)&&t.duration>0?t.currentTime=n%t.duration:t.currentTime=n}function U0({condition:e,meta:t,hass:n,flat:r=!1}){const i=r?null:DA(n,e),a=b.useRef(null),o=b.useRef(null),[l,c]=b.useState("fast");return b.useEffect(()=>{c("fast");const u=a.current,d=o.current;if(u&&(u.playbackRate=1,u.play().catch(()=>{})),d&&(d.playbackRate=Gj,d.pause(),d.currentTime=0),!i)return;let m=!1;const f=()=>{if(m)return;const x=a.current,w=o.current;!x||!w||(x.pause(),Jj(x,w),w.play().catch(()=>{}),c("blending"))},g=window.setTimeout(()=>{const x=o.current;x&&(x.readyState>=1?f():x.addEventListener("loadedmetadata",f,{once:!0}))},yf),v=window.setTimeout(()=>{m||c("slow")},yf+Qj);return()=>{m=!0,window.clearTimeout(g),window.clearTimeout(v)}},[i]),s.jsxs(s.Fragment,{children:[i&&s.jsxs("div",{className:`tm-weather-bg tm-weather-video-stack${l!=="fast"?` is-${l}`:""}`,children:[s.jsx("video",{ref:o,className:"tm-weather-video tm-weather-video-slow",src:i,loop:!0,muted:!0,playsInline:!0,preload:"metadata","aria-hidden":!0}),s.jsx("video",{ref:a,className:"tm-weather-video tm-weather-video-fast",src:i,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata","aria-hidden":!0})]}),s.jsx("div",{className:"tm-weather-bg",style:{background:t.gradient,opacity:i?.45:1}}),!r&&s.jsx("div",{className:"tm-weather-bg",style:{background:"linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)"}})]})}function Xj({onConfigure:e}){return s.jsx("button",{type:"button",className:"tm-card tm-weather-widget empty",onClick:e,style:{cursor:e?"pointer":"default"},children:s.jsx("div",{className:"tm-weather-content",children:s.jsxs("div",{className:"tm-placeholder-widget",children:[s.jsx(oa,{size:32}),s.jsx("span",{className:"tm-text-sm",children:"Wetter konfigurieren"})]})})})}function vc({slots:e,compact:t=!1,className:n=""}){return s.jsx("div",{className:`${t?"tm-weather-day-strip":"tm-weather-hourly"}${n?` ${n}`:""}`,children:e.map(r=>s.jsxs("div",{className:`${t?"tm-weather-slot":"tm-weather-hourly-slot"}${r.label==="Jetzt"?" now":""}`,children:[s.jsx("span",{className:"tm-weather-slot-time",children:r.label}),od(r.condition,{size:t?14:22,strokeWidth:1.75}),s.jsxs("span",{className:"tm-weather-slot-temp",children:[r.temp,"°"]})]},r.datetime||`${r.label}-${r.hour}`))})}function Zj({forecast:e}){if(!e.length)return null;const t=e.flatMap(a=>[a.high,a.low]).filter(a=>a!=null),n=Math.min(...t),r=Math.max(...t),i=r-n||1;return s.jsxs("div",{children:[s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{marginBottom:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},children:"10-Tage-Vorschau"}),s.jsx("div",{className:"tm-weather-daily-list",children:e.slice(0,10).map((a,o)=>{const l=a.datetime?Vi(a.datetime):null,c=l?Bb(l)?"Heute":yt(l,"EEE",{locale:Yn}):`Tag ${o+1}`,u=((a.low??n)-n)/i*100,d=((a.high??r)-(a.low??n))/i*100;return s.jsxs("div",{className:"tm-weather-daily-row",children:[s.jsx("span",{className:"tm-weather-daily-day",children:c}),s.jsx("div",{className:"tm-weather-daily-bar",children:s.jsx("div",{className:"tm-weather-daily-bar-fill",style:{left:`${u}%`,width:`${Math.max(d,8)}%`}})}),od(a.condition,{size:20,strokeWidth:1.75}),s.jsx("span",{className:"tm-weather-daily-temp",children:a.low!=null?`${Math.round(a.low)}°`:"—"}),s.jsx("span",{className:"tm-weather-daily-temp high",children:a.high!=null?`${Math.round(a.high)}°`:"—"})]},a.datetime||o)})})]})}function $j({data:e,onClose:t,hass:n,appearance:r}){var a;const i=ys(e.condition,new Date().getHours(),r);return s.jsxs("div",{className:"tm-weather-overlay",onClick:t,children:[s.jsx("div",{className:"tm-weather-overlay-backdrop"}),s.jsxs("div",{className:"tm-weather-expanded",onClick:o=>o.stopPropagation(),role:"dialog","aria-label":"Wetterdetails",children:[s.jsxs("div",{className:"tm-weather-expanded-header",children:[s.jsx(U0,{condition:e.condition,meta:i,hass:n}),s.jsx("button",{type:"button",className:"tm-weather-expanded-close",onClick:t,"aria-label":"Schließen",children:s.jsx(Ke,{size:18})}),s.jsx("div",{className:"tm-weather-location",children:e.name}),s.jsxs("div",{className:"tm-weather-expanded-temp",children:[e.temp!=null?Math.round(e.temp):"—","°"]}),s.jsx("div",{className:"tm-weather-condition",children:i.label}),e.today&&s.jsxs("div",{className:"tm-weather-hilo",children:["H:",e.today.high!=null?Math.round(e.today.high):"—","° · L:",e.today.low!=null?Math.round(e.today.low):"—","°"]})]}),s.jsxs("div",{className:"tm-weather-expanded-body",children:[s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{marginBottom:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},children:"Heute"}),s.jsx(vc,{slots:e.dayPreview}),s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{marginTop:"1.5rem",marginBottom:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},children:"Nächste Stunden"}),s.jsx(vc,{slots:e.hourlyPreview.slice(0,8)}),s.jsxs("div",{className:"tm-weather-stats",children:[s.jsx(Ma,{label:"Luftfeuchtigkeit",value:e.humidity!=null?`${e.humidity}%`:"—",icon:cf}),s.jsx(Ma,{label:"Wind",value:e.windSpeed!=null?`${e.windSpeed} km/h`:"—",icon:D0}),s.jsx(Ma,{label:"Luftdruck",value:e.pressure!=null?`${e.pressure} hPa`:"—",icon:nd}),s.jsx(Ma,{label:"Niederschlag",value:((a=e.today)==null?void 0:a.precipitation)!=null?`${e.today.precipitation}%`:"—",icon:cf})]}),s.jsx(Zj,{forecast:e.forecast})]})]})]})}function Ma({label:e,value:t,icon:n}){return s.jsxs("div",{className:"tm-weather-stat",children:[s.jsx("span",{className:"tm-weather-stat-label",children:e}),s.jsxs("span",{className:"tm-weather-stat-value tm-flex-center tm-gap-2",style:{justifyContent:"flex-start"},children:[s.jsx(n,{size:16,style:{opacity:.6}}),t]})]})}function eE({entityId:e,compact:t=!1,onConfigure:n,editMode:r=!1}){var w,y;const[i,a]=b.useState(!1),{hass:o,getEntity:l,revision:c}=We(),{config:u}=ke(),d=e||((w=u.weather)==null?void 0:w.entity_id)||"",m=d?l(d):null,f=Vj(o,d,m),g=b.useMemo(()=>m?GA(m,f):null,[m,f,c]);if(!d||!g)return s.jsx(Xj,{onConfigure:n});const v=ys(g.condition,new Date().getHours(),u.appearance),x=((y=u.appearance)==null?void 0:y.mode)==="blackColorful";return s.jsxs(s.Fragment,{children:[s.jsxs("button",{type:"button",className:`tm-card tm-weather-widget${t?" tm-weather-compact":""}${x?" tm-weather-widget--pastel":""}`,onClick:()=>{if(r){n==null||n();return}a(!0)},"aria-label":"Wetterdetails öffnen",children:[s.jsx(U0,{condition:g.condition,meta:v,hass:o,flat:x}),s.jsxs("div",{className:"tm-weather-content",children:[s.jsxs("div",{className:"tm-weather-main",children:[s.jsx("div",{className:"tm-weather-location",children:g.name}),s.jsxs("div",{className:"tm-weather-temp-xl",children:[g.temp!=null?Math.round(g.temp):"—","°"]}),s.jsx("div",{className:"tm-weather-condition",children:v.label}),g.today&&s.jsxs("div",{className:"tm-weather-hilo",children:["H:",g.today.high!=null?Math.round(g.today.high):"—","° · L:",g.today.low!=null?Math.round(g.today.low):"—","°"]})]}),s.jsx(vc,{slots:g.hourlyPreview.slice(0,6),compact:!0,className:"tm-weather-hourly-preview"})]})]}),i&&s.jsx($j,{data:g,onClose:()=>a(!1),hass:o,appearance:u.appearance})]})}const tE="/the-monitor.png";function nE(e,t){const n=e.media_position,r=e.media_duration;return typeof n=="number"&&typeof r=="number"&&r>0?Math.min(100,Math.max(0,n/r*100)):t?78:0}function rE(e){return e.device_manufacturer||e.app_name||e.source||""}function iE({compact:e=!1,entityId:t,onConfigure:n}){var N;const{hass:r,getEntity:i}=We(),{config:a}=ke(),o=t||((N=a.mediaPlayer)==null?void 0:N.entity_id);if(!o)return s.jsx("button",{type:"button",className:`tm-card tm-media-widget empty${e?" tm-media-widget--compact":""}`,onClick:n,children:s.jsxs("div",{className:"tm-placeholder-widget",children:[s.jsx(oa,{size:e?24:32}),s.jsx("span",{className:"tm-text-sm",children:"Medienplayer konfigurieren"})]})});const l=i(o),{attributes:c,state:u}=l,d=u==="playing",m=u!=="off"&&u!=="unavailable",f=c.media_title||c.media_content_id||"Keine Wiedergabe",g=c.media_artist||"",v=Qr(r,c.entity_picture),x=nE(c,d),w=rE(c),y=()=>Jx(r,o),p=()=>Xx(r,o),h=()=>Zx(r,o),k=()=>{u==="off"?ag(r,o):og(r,o)};return s.jsx("div",{className:`tm-media-widget${e?" tm-media-widget--compact":""}`,children:s.jsxs("div",{className:"tm-card tm-media-card",children:[s.jsxs("div",{className:"tm-media-header",children:[s.jsxs("div",{className:"tm-media-header-text",children:[s.jsx("div",{className:"tm-media-device-name",children:l.name}),w&&s.jsx("div",{className:"tm-media-device-brand",children:w})]}),s.jsx("button",{type:"button",className:`tm-media-power-btn${m?" on":""}`,onClick:k,"aria-label":m?"Ausschalten":"Einschalten",children:s.jsx(z0,{size:16,strokeWidth:2})})]}),s.jsxs("div",{className:"tm-media-body",children:[s.jsxs("div",{className:"tm-media-panel",children:[s.jsxs("div",{className:"tm-media-track",children:[s.jsx("div",{className:"tm-media-artwork",style:v?{backgroundImage:`url("${v}")`}:void 0,"aria-hidden":!0}),s.jsxs("div",{className:"tm-media-track-meta",children:[s.jsx("div",{className:"tm-media-track-title",children:f}),g&&s.jsx("div",{className:"tm-media-track-artist",children:g})]})]}),s.jsxs("div",{className:"tm-media-controls",children:[s.jsx("button",{type:"button",onClick:h,className:"tm-media-control-btn","aria-label":"Zurück",children:s.jsx(TA,{size:e?16:18})}),s.jsx("button",{type:"button",onClick:y,className:"tm-media-control-btn tm-media-control-play","aria-label":d?"Pause":"Abspielen",children:d?s.jsxs("div",{className:"tm-media-pause-bars",children:[s.jsx("span",{}),s.jsx("span",{})]}):s.jsx(ad,{size:e?16:18,style:{marginLeft:"2px",fill:"currentColor"}})}),s.jsx("button",{type:"button",onClick:p,className:"tm-media-control-btn","aria-label":"Weiter",children:s.jsx(PA,{size:e?16:18})})]}),s.jsx("div",{className:"tm-media-progress","aria-hidden":!0,children:s.jsxs("div",{className:"tm-media-progress-track",children:[s.jsx("div",{className:"tm-media-progress-fill",style:{width:`${x}%`}}),s.jsx("div",{className:"tm-media-progress-thumb",style:{left:`${x}%`}})]})})]}),s.jsx("div",{className:"tm-media-device-wrap",children:s.jsx("img",{src:tE,alt:"",className:"tm-media-device-img"})})]})]})})}const aE=15e3;function oE({hass:e,entity:t,className:n,fitMode:r="cover"}){const i=b.useRef(null),a=b.useMemo(()=>({entity_id:t.id,state:t.state,attributes:t.attributes}),[t.id,t.state,t.attributes]);return b.useEffect(()=>{const o=i.current;o&&(o.hass=e,o.stateObj=a,o.fitMode=r,o.muted=!0)},[e,a,r]),s.jsx("ha-camera-stream",{ref:i,className:n,muted:!0})}function sE(e,t,n,{isMock:r,isConnected:i}){var p;const[a,o]=b.useState(0),[l,c]=b.useState(!1),u=typeof customElements<"u"&&customElements.get("ha-camera-stream"),d=!!(t&&ow(e,t)),m=!!(u&&i&&!r&&t&&((p=e==null?void 0:e.states)!=null&&p[t])),f=d&&i&&!r&&!m?sw(e,t):null,g=!!(f&&!l),v=!!(i&&!r&&t&&!l&&!m&&!g),x=v?Sm(e,t,{cacheBust:a}):r&&t?Sm(e,t,{cacheBust:a}):null,w=m||g,y=!!(m||g||x);return b.useEffect(()=>{c(!1),o(0)},[t]),b.useEffect(()=>{if(!v)return;const h=setInterval(()=>o(k=>k+1),aE);return()=>clearInterval(h)},[v]),{tick:a,failed:l,setFailed:c,useHaStream:m,useMjpegStream:g,useSnapshotFallback:v,streamUrl:f,snapshotSrc:x,isLive:w,hasFeed:y}}function Y0({hass:e,entity:t,entityId:n,isMock:r,isConnected:i,feed:a,fitMode:o="cover",streamClassName:l="tm-camera-stream",imageClassName:c="tm-camera-feed"}){const{tick:u,failed:d,setFailed:m,useHaStream:f,useMjpegStream:g,streamUrl:v,snapshotSrc:x}=a;return f?s.jsx(oE,{hass:e,entity:t,className:l,fitMode:o}):g?s.jsx("img",{src:v,className:c,alt:(t==null?void 0:t.name)||"Kamera",decoding:"async",onError:()=>m(!0)}):x?s.jsx("img",{src:x,className:c,alt:(t==null?void 0:t.name)||"Kamera",loading:"lazy",decoding:"async",onError:()=>m(!0)},`${n}-${u}`):s.jsxs("div",{className:"tm-placeholder-widget",children:[s.jsx(Zr,{size:32}),s.jsx("span",{className:"tm-text-sm",children:d?"Kamera nicht erreichbar":"Kamerabild nicht verfügbar"})]})}function K0({cameraName:e,isLive:t}){return s.jsxs("div",{className:"tm-camera-badge",children:[s.jsx(Zr,{size:12,className:"tm-camera-badge-icon"}),s.jsx("span",{children:e}),t&&s.jsx("span",{className:"tm-camera-live",children:"LIVE"})]})}function V0({cameraIds:e,activeEntityId:t,getEntity:n,onSelect:r}){return e.length<=1?null:s.jsx("div",{className:"tm-camera-switcher",onClick:i=>i.stopPropagation(),children:e.map((i,a)=>{const o=n(i),l=sN(o.name,a),c=i===t;return s.jsx("button",{type:"button",className:`tm-camera-switch-btn${c?" active":""}`,onClick:u=>{u.stopPropagation(),r(i)},"aria-label":`${o.name} anzeigen`,"aria-pressed":c,children:s.jsx("span",{className:"tm-camera-switch-btn-visual",children:l})},i)})})}function lE({hass:e,entity:t,entityId:n,cameraIds:r,activeEntityId:i,getEntity:a,isMock:o,isConnected:l,feed:c,cameraName:u,onClose:d,onSelectCamera:m}){return b.useEffect(()=>{const f=g=>{g.key==="Escape"&&d()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[d]),s.jsxs("div",{className:"tm-camera-overlay",onClick:d,children:[s.jsx("div",{className:"tm-camera-overlay-backdrop"}),s.jsxs("div",{className:"tm-camera-expanded",onClick:f=>f.stopPropagation(),role:"dialog","aria-label":`${u} Vollbild`,children:[s.jsx("button",{type:"button",className:"tm-camera-expanded-close",onClick:d,"aria-label":"Schließen",children:s.jsx(Ke,{size:18})}),s.jsx(V0,{cameraIds:r,activeEntityId:i,getEntity:a,onSelect:m}),c.hasFeed&&!c.failed&&s.jsx(K0,{cameraName:u,isLive:c.isLive}),s.jsx(Y0,{hass:e,entity:t,entityId:n,isMock:o,isConnected:l,feed:c,fitMode:"contain",streamClassName:"tm-camera-stream",imageClassName:"tm-camera-feed"})]})]})}function cE({onSettings:e,entityId:t,entityIds:n,widget:r,onConfigure:i}){var N;const{hass:a,isMock:o,isConnected:l,getEntity:c}=We(),{config:u}=ke(),d=i||e,m=b.useMemo(()=>{var C,j;if(r)return d0(r);const E=(n||[]).filter(Boolean);return E.length?E.slice(0,3):t||(C=u.camera)!=null&&C.entity_id?[t||((j=u.camera)==null?void 0:j.entity_id)]:[]},[r,n,t,(N=u.camera)==null?void 0:N.entity_id]),[f,g]=b.useState(()=>m[0]||""),[v,x]=b.useState(!1);b.useEffect(()=>{if(!m.length){g("");return}m.includes(f)||g(m[0])},[m,f]);const w=f||m[0]||"",y=w?Tt(a,w):null,p=(y==null?void 0:y.name)||"Kamera",h=sE(a,w,y,{isMock:o,isConnected:l}),k=()=>{h.hasFeed&&!h.failed&&x(!0)};return m.length?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:`tm-card-dark tm-camera-widget${h.hasFeed&&!h.failed?" tm-camera-widget--clickable":""}`,onClick:k,onKeyDown:E=>{(E.key==="Enter"||E.key===" ")&&h.hasFeed&&!h.failed&&(E.preventDefault(),k())},role:h.hasFeed&&!h.failed?"button":void 0,tabIndex:h.hasFeed&&!h.failed?0:void 0,"aria-label":h.hasFeed&&!h.failed?`${p} vergrößern`:void 0,children:[s.jsx(Y0,{hass:a,entity:y,entityId:w,isMock:o,isConnected:l,feed:h}),s.jsx(V0,{cameraIds:m,activeEntityId:w,getEntity:c,onSelect:g}),h.hasFeed&&!h.failed&&s.jsx(K0,{cameraName:p,isLive:h.isLive})]}),v&&s.jsx(lE,{hass:a,entity:y,entityId:w,cameraIds:m,activeEntityId:w,getEntity:c,isMock:o,isConnected:l,feed:h,cameraName:p,onClose:()=>x(!1),onSelectCamera:g})]}):s.jsx("div",{className:"tm-card-dark tm-camera-widget",children:s.jsxs("div",{className:"tm-placeholder-widget",onClick:d,role:"button",tabIndex:0,children:[s.jsx(Zr,{size:32}),s.jsx("span",{className:"tm-text-sm",children:"Kamera konfigurieren"})]})})}function uE({entityId:e,onConfigure:t}){var k;const{hass:n,isConnected:r,isMock:i,revision:a}=We(),{config:o}=ke(),l=e||((k=o.shoppingList)==null?void 0:k.entity_id),[c,u]=b.useState([]),[d,m]=b.useState(""),[f,g]=b.useState(!1),[v,x]=b.useState(!1),w=b.useCallback(async()=>{if(!l){u([]);return}if(i){u(cw);return}if(r){x(!0);try{const N=await $x(n,l);u(N)}catch{u([])}finally{x(!1)}}},[n,l,r,i]);if(b.useEffect(()=>{w()},[w,a]),!l)return s.jsx("button",{type:"button",className:"tm-card tm-card-dark empty",style:{height:"100%",padding:"1.25rem"},onClick:t,children:s.jsxs("div",{className:"tm-placeholder-widget",children:[s.jsx(oa,{size:32}),s.jsx("span",{className:"tm-text-sm",children:"Einkaufsliste konfigurieren"})]})});const y=async N=>{N.status!=="completed"&&(r?(await ew(n,l,N.uid),await w()):u(E=>E.map(C=>C.uid===N.uid?{...C,status:"completed"}:C)))},p=async()=>{d.trim()&&(r?(await tw(n,l,d.trim()),await w()):u(N=>[...N,{uid:String(Date.now()),summary:d.trim(),status:"needs_action"}]),m(""),g(!1))},h=c.filter(N=>N.status!=="completed");return s.jsxs("div",{className:"tm-card tm-card-dark",style:{height:"100%",padding:"1.25rem",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{marginBottom:"1rem"},children:[s.jsxs("div",{className:"tm-flex-center tm-gap-2",children:[s.jsx(gs,{size:20,style:{color:"#fb923c"}}),s.jsx("span",{className:"tm-font-bold",style:{fontSize:"1.125rem"},children:"Einkauf"})]}),s.jsx("button",{type:"button",className:"tm-flex-center",style:{background:"rgba(255,255,255,0.1)",padding:"0.5rem",borderRadius:"9999px",border:"none",color:"white",cursor:"pointer",minWidth:40,minHeight:40},onClick:()=>g(!f),children:s.jsx(st,{size:16})})]}),f&&s.jsxs("div",{className:"tm-flex-row tm-gap-2",style:{marginBottom:"0.75rem"},children:[s.jsx("input",{className:"tm-input",type:"text",placeholder:"Neuer Eintrag…",value:d,onChange:N=>m(N.target.value),onKeyDown:N=>N.key==="Enter"&&p()}),s.jsx("button",{type:"button",className:"tm-btn-primary",style:{padding:"0.5rem 1rem",minHeight:"auto"},onClick:p,children:"OK"})]}),s.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[v&&s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{textAlign:"center",padding:"1rem"},children:"Lädt…"}),!v&&h.length===0&&s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{textAlign:"center",padding:"1rem"},children:"Liste ist leer"}),c.map(N=>s.jsxs("button",{type:"button",onClick:()=>y(N),className:"tm-flex-row tm-items-center tm-gap-3",style:{width:"100%",padding:"0.75rem",borderRadius:"0.75rem",border:"none",cursor:"pointer",textAlign:"left",background:"rgba(255,255,255,0.05)"},children:[s.jsx("div",{style:{width:"1.25rem",height:"1.25rem",borderRadius:"9999px",border:"2px solid",display:"flex",alignItems:"center",justifyContent:"center",borderColor:N.status==="completed"?"#f97316":"rgba(255,255,255,0.3)",background:N.status==="completed"?"#f97316":"transparent"},children:N.status==="completed"&&s.jsx(ed,{size:12,style:{color:"black"}})}),s.jsx("span",{className:"tm-font-bold tm-text-sm",style:{color:N.status==="completed"?"rgba(255,255,255,0.3)":"rgba(255,255,255,0.9)",textDecoration:N.status==="completed"?"line-through":"none"},children:N.summary})]},N.uid))]})]})}function dE(e){const t=new Map;return e.forEach((n,r)=>t.set(n.id,r)),t}function mE(e,t){const n=new Array(e.length).fill(0),r=new Array(e.length).fill(0);return t.forEach(i=>{r[i.source]+=i.value,n[i.target]+=i.value}),e.map((i,a)=>Math.max(n[a],r[a],.001))}function fE(e,t,n,r){const i=[...e];return i.some(o=>t[o].sort!=null)?(i.sort((o,l)=>(t[o].sort??0)-(t[l].sort??0)),i):(i.sort((o,l)=>{const c=n.filter(f=>f.source===o||f.target===o),u=n.filter(f=>f.source===l||f.target===l),d=c.reduce((f,g)=>f+(g.source===o?g.target:g.source),0)/(c.length||1),m=u.reduce((f,g)=>f+(g.source===l?g.target:g.source),0)/(u.length||1);return d-m||r[l]-r[o]}),i)}function pE(e,t,n,r){const i=(e+n)/2;return`M${e},${t}C${i},${t} ${i},${r} ${n},${r}`}function hE(e,t,n,r,i,a){const o=(e+r)/2;return[`M${e},${t}`,`C${o},${t} ${o},${i} ${r},${i}`,`L${r},${a}`,`C${o},${a} ${o},${n} ${e},${n}`,"Z"].join(" ")}function gE(e,t,n,r={}){const{nodeWidth:i=14,nodePadding:a=18,margin:o={top:28,right:110,bottom:20,left:110}}=r,l=e.nodes.map(C=>({...C})),c=dE(l),u=e.links.map(C=>({...C,source:c.get(C.source),target:c.get(C.target)})),d=mE(l,u),m=new Map;l.forEach((C,j)=>{const z=C.column??0;m.has(z)||m.set(z,[]),m.get(z).push(j)});const f=[...m.keys()].sort((C,j)=>C-j),g=Math.max(1,t-o.left-o.right),v=Math.max(1,n-o.top-o.bottom),x=f.length,w=x>1?g/(x-1):0,y=Math.max(...d,1),p=C=>C/y*(v*.72);f.forEach((C,j)=>{const z=fE(m.get(C),l,u,d),T=z.reduce((U,J)=>U+p(d[J]),0)+a*Math.max(0,z.length-1);let D=o.top+(v-T)/2;z.forEach(U=>{const J=p(d[U]);l[U].x=o.left+j*w,l[U].y=D,l[U].height=J,l[U].width=i,l[U].value=d[U],D+=J+a})});const h=new Array(l.length).fill(0),k=new Array(l.length).fill(0),N=u.map(C=>{const j=l[C.source],z=l[C.target],T=p(C.value),D=j.y+h[C.source],U=z.y+k[C.target];h[C.source]+=T,k[C.target]+=T;const J=j.x+j.width,Z=z.x;return{...C,path:hE(J,D,D+T,Z,U,U+T),centerPath:pE(J,D+T/2,Z,U+T/2),value:C.value,color:j.color||"#94a3b8"}}),E=f.length?f[f.length-1]:0;return{nodes:l,links:N,maxValue:y,maxColumn:E}}function yE(e){const[t,n]=b.useState({width:640,height:360});return b.useEffect(()=>{const r=e.current;if(!r)return;const i=()=>{const o=r.getBoundingClientRect();o.width>0&&o.height>0&&n({width:o.width,height:o.height})};i();const a=new ResizeObserver(i);return a.observe(r),()=>a.disconnect()},[e]),t}function vf(e,t){return e.column===0?e.x-10:(e.column===t,e.x+e.width+10)}function bf(e,t){return e.column===0?"end":(e.column===t&&t>0,"start")}function vE({widget:e}){const t=b.useRef(null),{width:n,height:r}=yE(t),i=c2,a=(e==null?void 0:e.label)||i.title,o=b.useMemo(()=>gE(i,n,r),[i,n,r]),l=b.useMemo(()=>m2(i),[i]),c=b.useMemo(()=>i.nodes.filter(u=>u.column===0),[i]);return s.jsx("div",{className:"tm-card tm-sankey-widget",children:s.jsxs("div",{className:"tm-sankey-content",children:[s.jsx("div",{className:"tm-sankey-header",children:s.jsxs("div",{className:"tm-sankey-header-main",children:[s.jsx(sa,{size:22,style:{opacity:.75,flexShrink:0},"aria-hidden":!0}),s.jsxs("div",{children:[s.jsx("div",{className:"tm-weather-location",children:a}),s.jsx("div",{className:"tm-sankey-total-value",children:Xn(l,i.unit)}),s.jsx("div",{className:"tm-weather-hilo",children:i.subtitle})]})]})}),s.jsx("div",{ref:t,className:"tm-sankey-canvas",children:s.jsxs("svg",{width:n,height:r,viewBox:`0 0 ${n} ${r}`,role:"img","aria-label":`${a}: Energiefluss-Diagramm`,children:[s.jsx("defs",{children:o.links.map((u,d)=>s.jsxs("linearGradient",{id:`tm-sankey-grad-${d}`,gradientUnits:"userSpaceOnUse",x1:o.nodes[u.source].x,x2:o.nodes[u.target].x,children:[s.jsx("stop",{offset:"0%",stopColor:u.color,stopOpacity:"0.55"}),s.jsx("stop",{offset:"100%",stopColor:o.nodes[u.target].color||u.color,stopOpacity:"0.45"})]},`grad-${d}`))}),o.links.map((u,d)=>s.jsx("path",{d:u.path,fill:`url(#tm-sankey-grad-${d})`,className:"tm-sankey-link"},`link-${d}`)),o.nodes.map(u=>s.jsxs("g",{className:"tm-sankey-node",children:[s.jsx("rect",{x:u.x,y:u.y,width:u.width,height:u.height,fill:u.color,rx:3}),s.jsx("text",{x:vf(u,o.maxColumn),y:u.y+u.height/2,textAnchor:bf(u,o.maxColumn),dominantBaseline:"middle",className:"tm-sankey-node-label",children:u.name}),s.jsx("text",{x:vf(u,o.maxColumn),y:u.y+u.height/2+14,textAnchor:bf(u,o.maxColumn),dominantBaseline:"middle",className:"tm-sankey-node-value",children:Xn(u.value,i.unit)})]},u.id))]})}),s.jsx("div",{className:"tm-sankey-legend",children:c.map(u=>s.jsxs("span",{className:"tm-sankey-legend-item",children:[s.jsx("span",{className:"tm-sankey-legend-swatch",style:{background:u.color}}),u.name]},u.id))})]})})}const xf={opacity:.7,color:"rgba(255,255,255,0.75)"};function wf({name:e,value:t,unit:n,color:r}){return s.jsxs("div",{className:"tm-energy-metric-row",children:[r&&s.jsx("span",{className:"tm-energy-metric-dot",style:{background:r}}),s.jsx("span",{className:"tm-energy-metric-name",children:e}),s.jsx("span",{className:"tm-energy-metric-value",children:Xn(t,n)})]})}function bE({data:e,title:t}){const n=e.inputs.reduce((i,a)=>i+a.value,0),r=e.outputs.reduce((i,a)=>i+a.value,0);return s.jsxs("div",{className:"tm-quick-action tm-energy-tile",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{width:"100%"},children:[s.jsx(nA,{size:24,style:xf}),s.jsx(iA,{size:20,style:{...xf,opacity:.45}})]}),s.jsxs("div",{className:"tm-flex-col",style:{marginTop:"auto",minHeight:0,gap:"0.625rem"},children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-font-bold",style:{fontSize:"1.125rem",lineHeight:1.25},children:t}),s.jsxs("div",{className:"tm-text-xs tm-opacity-70",style:{marginTop:"0.25rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:["In ",Xn(n,e.unit)," · Out ",Xn(r,e.unit)]})]}),s.jsxs("div",{className:"tm-energy-metric-cols",children:[s.jsxs("div",{className:"tm-energy-metric-col",children:[s.jsx("div",{className:"tm-text-xs tm-opacity-50",style:{textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.35rem"},children:"Input"}),e.inputs.map(i=>s.jsx(wf,{name:i.name,value:i.value,unit:e.unit,color:i.color},i.id))]}),s.jsxs("div",{className:"tm-energy-metric-col",children:[s.jsx("div",{className:"tm-text-xs tm-opacity-50",style:{textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.35rem"},children:"Output"}),e.outputs.map(i=>s.jsx(wf,{name:i.name,value:i.value,unit:e.unit,color:i.color},i.id))]})]})]})]})}function kf({name:e,value:t,unit:n,imageUrl:r,stateLabel:i,icon:a,sources:o,compact:l=!1}){return s.jsxs("div",{className:`tm-energy-device-card${l?" tm-energy-device-card--mini":""}`,children:[r?s.jsx("img",{src:r,alt:"",className:"tm-energy-device-card-bg"}):s.jsx("div",{className:"tm-energy-device-card-bg tm-energy-device-card-bg--empty"}),s.jsx("div",{className:"tm-energy-device-card-shade","aria-hidden":!0}),s.jsxs("div",{className:"tm-energy-device-card-content",children:[s.jsxs("div",{className:"tm-energy-device-card-top",children:[s.jsx("span",{className:"tm-energy-device-card-icon",children:s.jsx(a,{size:l?15:17,"aria-hidden":!0})}),s.jsx("span",{className:"tm-energy-device-state",children:i})]}),s.jsxs("div",{className:"tm-energy-device-card-body",children:[s.jsx("div",{className:"tm-font-bold",style:{fontSize:l?"0.9375rem":"1.0625rem",lineHeight:1.25},children:e}),s.jsx("div",{className:"tm-text-xs tm-opacity-70",style:{marginTop:"0.2rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:Xn(t,n)}),(o==null?void 0:o.length)>0&&s.jsx("div",{className:"tm-text-xs tm-opacity-50",style:{marginTop:"0.3rem",lineHeight:1.35},children:o.map(c=>`${c.name} ${Xn(c.value,n)}`).join(" · ")})]})]})]})}function xE({data:e,title:t,widget:n,hass:r}){const{isMock:i}=We(),{config:a}=ke(),[o,l]=e.items,c=Gi(n==null?void 0:n.deviceImages),u=ra(a,c,i),d=Pu(r,u,o.demoCharging),m=j2(r,c.heatpump.lightEntity,l.demoLightOn),f=E2(r,c,d),g=C2(r,c,m);return s.jsxs("div",{className:"tm-energy-device-stack",children:[s.jsx(kf,{name:t,value:o.value,unit:e.unit,imageUrl:f,stateLabel:d?zm.charging:zm.idle,icon:oA,sources:o.sources}),l&&s.jsx(kf,{name:l.name,value:l.value,unit:e.unit,imageUrl:g,stateLabel:m?Lm.lightOn:Lm.lightOff,icon:gA,sources:l.sources,compact:!0})]})}function wE({widget:e,hass:t}){const n=(e==null?void 0:e.tileKind)||"inputs-outputs",r=Mo[n]||Mo["inputs-outputs"],i=f2(n),a=(e==null?void 0:e.label)||r.label;return n==="ev-heatpump"?s.jsx(xE,{data:i,title:a,widget:e,hass:t}):s.jsx(bE,{data:i,title:a})}const kE="data:image/webp;base64,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",G0=new Intl.NumberFormat("de-DE",{maximumFractionDigits:0}),SE=new Intl.NumberFormat("de-DE",{maximumFractionDigits:1}),NE=new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"});function AE(e){return e.charging?{text:"Wird geladen",tone:"charging"}:e.connected===!0?{text:"Angeschlossen",tone:"idle"}:e.connected===!1?{text:"Nicht angeschlossen",tone:"off"}:{text:"Lädt nicht",tone:"off"}}function jE(e){const t=[{key:"power",icon:sa,value:e.charging?zu(e.powerWatts):"0 kW",label:"Ladeleistung"}];return e.remainingSeconds!=null&&t.push({key:"remaining",icon:uA,value:S2(e.remainingSeconds),label:`bis ${e.limitSoc}%`}),e.lastTripKm!=null?t.push({key:"trip",icon:CA,value:`${G0.format(e.lastTripKm)} km`,label:"Letzte Fahrt"}):e.sessionKwh!=null&&t.push({key:"energy",icon:gc,value:`${SE.format(e.sessionKwh)} kWh`,label:"Geladen"}),e.cost!=null&&t.push({key:"cost",icon:pA,value:NE.format(e.cost),label:e.costIsSession?"Ladevorgang":"Kosten heute"}),t.slice(0,4)}function EE({widget:e,hass:t}){const{isMock:n}=We(),{config:r}=ke(),i=k2(t,r,n),a=AE(i),o=jE(i),l=(e==null?void 0:e.label)||i.label,c=i.soc;let u="—",d="",m="Keine Fahrzeugdaten";return i.rangeKm!=null?(u=G0.format(i.rangeKm),d="km",m=c!=null?`Reichweite (${c}%)`:"Reichweite"):c!=null&&(u=String(c),d="%",m="Akkustand"),s.jsx("div",{className:`tm-quick-action tm-ev-card tm-ev-card--${a.tone}`,children:s.jsxs("div",{className:"tm-ev-card-inner",children:[s.jsxs("div",{className:"tm-ev-card-head",children:[s.jsx("div",{className:"tm-ev-card-title",children:l}),s.jsxs("div",{className:"tm-ev-card-status",children:[a.tone==="charging"&&s.jsx(sa,{className:"tm-ev-card-status-icon",fill:"currentColor",strokeWidth:0}),s.jsx("span",{children:a.text})]})]}),s.jsxs("div",{className:"tm-ev-card-hero",children:[s.jsxs("div",{className:"tm-ev-card-value",children:[u,d&&s.jsx("span",{className:"tm-ev-card-unit",children:d})]}),s.jsx("div",{className:"tm-ev-card-caption",children:m})]}),s.jsx("div",{className:"tm-ev-card-art","aria-hidden":"true",children:s.jsx("img",{src:kE,alt:"",draggable:"false"})}),c!=null&&s.jsxs("div",{className:"tm-ev-card-bar",children:[s.jsx("div",{className:"tm-ev-card-bar-track",children:s.jsx("div",{className:"tm-ev-card-bar-fill",style:{width:`${c}%`}})}),s.jsxs("span",{className:"tm-ev-card-bar-label",children:[c,"%"]})]}),o.length>0&&s.jsx("div",{className:`tm-ev-card-stats tm-ev-card-stats--${o.length}`,children:o.map(({key:f,icon:g,value:v,label:x})=>s.jsxs("div",{className:`tm-ev-card-stat tm-ev-card-stat--${f}`,children:[s.jsx(g,{className:"tm-ev-card-stat-icon"}),s.jsx("div",{className:"tm-ev-card-stat-value",children:v}),s.jsx("div",{className:"tm-ev-card-stat-label",children:x})]},f))})]})})}const cn=[{stroke:"rgb(var(--tm-accent-rgb))",fill:"rgba(var(--tm-accent-rgb), 0.14)"},{stroke:"#fbbf24",fill:"rgba(251, 191, 36, 0.14)"},{stroke:"#34d399",fill:"rgba(52, 211, 153, 0.14)"},{stroke:"#f472b6",fill:"rgba(244, 114, 182, 0.14)"}];function CE(e,t,n){if(!(e!=null&&e.length))return null;if(t<=e[0].t)return{v:e[0].v,t};if(t>=e[e.length-1].t)return{v:e[e.length-1].v,t};for(let r=0;r<e.length-1;r+=1){const i=e[r],a=e[r+1];if(i.t<=t&&a.t>=t){if(n==="binary_sensor")return{v:i.v,t};const o=a.t-i.t||1,l=(t-i.t)/o;return{v:i.v+(a.v-i.v)*l,t}}}return null}function TE(e,t,n,r){if(t)return{min:n,max:r};const i=e.points.map(a=>a.v);return{min:Math.min(...i),max:Math.max(...i)}}function PE(e,t,n,r=3){const i=e.filter(y=>{var p;return((p=y.points)==null?void 0:p.length)>=2});if(!i.length)return null;const a=i.flatMap(y=>y.points),o=Math.min(...a.map(y=>y.t)),l=Math.max(...a.map(y=>y.t)),c=l-o||1,d=[...new Set(i.map(y=>y.unit||""))].length===1,m=a.map(y=>y.v),f=Math.min(...m),g=Math.max(...m),v=t-r*2,x=n-r*2;return{layers:i.map((y,p)=>{const{min:h,max:k}=TE(y,d,f,g),N=k-h||1,E=y.points.map(z=>({x:r+(z.t-o)/c*v,y:r+x-(z.v-h)/N*x,v:z.v,t:z.t})),C=E.map(({x:z,y:T})=>`${z},${T}`).join(" "),j=[`${E[0].x},${n-r}`,...E.map(({x:z,y:T})=>`${z},${T}`),`${E[E.length-1].x},${n-r}`].join(" ");return{id:y.id,domain:y.domain,colorIndex:y.colorIndex??p,coords:E,line:C,area:j,min:h,max:k,yRange:N}}),tMin:o,tMax:l,tSpan:c,width:t,height:n,padding:r,innerW:v,innerH:x,unifiedScale:d,rangeMin:d?f:null,rangeMax:d?g:null}}function ME(e,t,n){if(!e)return null;const r=Math.max(0,Math.min(1,n)),i=e.tMin+r*e.tSpan,a=e.padding+r*e.innerW,o=e.layers.map(l=>{const c=t.find(m=>m.id===l.id);if(!c)return null;const u=CE(c.points,i,c.domain);if(!u)return null;const d=e.padding+e.innerH-(u.v-l.min)/l.yRange*e.innerH;return{entityId:l.id,colorIndex:l.colorIndex,v:u.v,t:u.t,x:a,y:d}}).filter(Boolean);return o.length?{active:!0,time:i,samples:o}:null}const Sf=200,zE=80,LE=32;function Nf(e){const t=Number(e);return Number.isFinite(t)?t.toLocaleString("de-DE",{minimumFractionDigits:0,maximumFractionDigits:1}):String(e)}function Q0({points:e,series:t,compact:n=!1,loading:r=!1,showRange:i=!1,domain:a="sensor",onScrubChange:o}){var E,C;const l=b.useRef(null),[c,u]=b.useState(null),d=n?LE:zE,m=b.useMemo(()=>t!=null&&t.length?t:(e==null?void 0:e.length)>=2?[{id:"single",points:e,domain:a,unit:"",colorIndex:0}]:[],[a,e,t]),f=b.useMemo(()=>PE(m,Sf,d),[m,d]),g=m.length>1,v=b.useCallback(j=>{const z=l.current;if(!z||!f)return;const T=z.getBoundingClientRect();if(!T.width)return;const D=(j-T.left)/T.width,U=ME(f,m,D);U&&(u(U),o==null||o(U))},[f,o,m]),x=b.useCallback(()=>{u(null),o==null||o({active:!1,time:null,samples:[]})},[o]),w=b.useCallback(j=>{j.currentTarget.setPointerCapture(j.pointerId),v(j.clientX)},[v]),y=b.useCallback(j=>{j.currentTarget.hasPointerCapture(j.pointerId)&&v(j.clientX)},[v]),p=b.useCallback(j=>{j.currentTarget.hasPointerCapture(j.pointerId)&&j.currentTarget.releasePointerCapture(j.pointerId),x()},[x]),h=b.useCallback(j=>{j.pointerType==="mouse"&&v(j.clientX)},[v]),k=b.useCallback(j=>{j.pointerType!=="mouse"||j.buttons||v(j.clientX)},[v]);if(r&&!m.some(j=>j.points.length>=2))return s.jsx("div",{className:`tm-sensor-sparkline tm-sensor-sparkline--loading${n?" compact":""}`});if(!f)return null;const N=(C=(E=c==null?void 0:c.samples)==null?void 0:E[0])==null?void 0:C.x;return s.jsxs("div",{className:`tm-sensor-sparkline-chart${n?" compact":""}${g?" multi":""}`,children:[s.jsx("div",{ref:l,className:"tm-sensor-sparkline-interactive",onPointerDown:w,onPointerMove:j=>{y(j),k(j)},onPointerUp:p,onPointerCancel:p,onPointerEnter:h,onPointerLeave:x,role:"slider","aria-label":"Verlauf scrubben",tabIndex:-1,children:s.jsxs("svg",{className:"tm-sensor-sparkline",viewBox:`0 0 ${Sf} ${d}`,preserveAspectRatio:"none","aria-hidden":!0,children:[f.layers.map(j=>{const z=cn[j.colorIndex%cn.length];return s.jsxs("g",{children:[!g&&s.jsx("polygon",{className:"tm-sensor-sparkline-area",points:j.area,style:{fill:z.fill}}),s.jsx("polyline",{className:"tm-sensor-sparkline-line",points:j.line,style:{stroke:z.stroke}})]},j.id)}),N!=null&&s.jsxs(s.Fragment,{children:[s.jsx("line",{className:"tm-sensor-sparkline-scrub-line",x1:N,x2:N,y1:0,y2:d}),c.samples.map(j=>{const z=cn[j.colorIndex%cn.length];return s.jsx("circle",{className:"tm-sensor-sparkline-scrub-dot",cx:j.x,cy:j.y,r:n?2.5:3.5,style:{stroke:z.stroke}},j.entityId)})]})]})}),i&&f.rangeMin!=null&&f.rangeMax!=null&&s.jsxs("div",{className:"tm-sensor-sparkline-range",children:[s.jsx("span",{children:Nf(f.rangeMin)}),s.jsx("span",{children:Nf(f.rangeMax)})]}),g&&s.jsx("div",{className:"tm-sensor-sparkline-legend",children:f.layers.map(j=>{const z=cn[j.colorIndex%cn.length],T=m.find(D=>D.id===j.id);return s.jsxs("span",{className:"tm-sensor-sparkline-legend-item",children:[s.jsx("span",{className:"tm-sensor-series-dot",style:{background:z.stroke}}),s.jsx("span",{children:(T==null?void 0:T.label)||j.id})]},j.id)})})]})}function J0(e,t=24){const n=new Date(e);return t>=168?yt(n,"EEE dd.MM., HH:mm",{locale:Yn}):t>=48?yt(n,"dd.MM., HH:mm",{locale:Yn}):yt(n,"HH:mm",{locale:Yn})}const X0=5*60*1e3;function OE(e,t,{enabled:n=!1,hours:r=24,revision:i=0}={}){const[a,o]=b.useState([]),[l,c]=b.useState(!1);return b.useEffect(()=>{if(!n||!t){o([]);return}let u=!1;const d=async()=>{c(!0);try{const f=await c0(e,t,{hours:r});u||o(f)}catch{u||o([])}finally{u||c(!1)}};d();const m=setInterval(d,X0);return()=>{u=!0,clearInterval(m)}},[e,t,n,r,i]),{points:a,loading:l}}function IE(e,t,{enabled:n=!1,hours:r=24,revision:i=0}={}){const[a,o]=b.useState([]),[l,c]=b.useState(!1),u=t.join("|");return b.useEffect(()=>{if(!n||!t.length){o([]);return}let d=!1;const m=async()=>{c(!0);try{const g=await Promise.all(t.map(v=>c0(e,v,{hours:r})));d||o(t.map((v,x)=>({entityId:v,points:g[x]||[]})))}catch{d||o([])}finally{d||c(!1)}};m();const f=setInterval(m,X0);return()=>{d=!0,clearInterval(f)}},[e,u,n,r,i,t]),{series:a,loading:l}}function Z0({hass:e,entityId:t,entity:n,label:r,compact:i=!1,history:a=!1,colorIndex:o=0,scrubSample:l=null,scrubbing:c=!1}){const{value:u,unit:d}=hc(e,t),m=cn[o%cn.length],f=c&&l?ZN(l.v,n):u,g=c&&n.domain==="binary_sensor"?"":d;return s.jsxs("div",{className:`tm-sensor-reading${i?" tm-sensor-reading--compact":""}${a?" tm-sensor-reading--history":""}${c?" tm-sensor-reading--scrubbing":""}`,children:[s.jsxs("div",{className:"tm-sensor-reading-top",children:[i&&s.jsx("span",{className:"tm-sensor-series-dot",style:{background:m.stroke}}),s.jsx(Ht,{hass:e,entity:n,size:i?18:22,style:{opacity:.75}}),s.jsx("span",{className:"tm-sensor-reading-label",children:r})]}),s.jsxs("div",{className:"tm-sensor-reading-value-row",children:[s.jsx("span",{className:"tm-sensor-reading-value",style:c?{color:m.stroke}:void 0,children:f}),g&&s.jsx("span",{className:"tm-sensor-reading-unit",children:g})]})]})}function Af({hass:e,getEntity:t,entityId:n,label:r,showHistory:i,historyHours:a}){var x,w;const{revision:o}=We(),[l,c]=b.useState(null),u=t(n),d=i&&o0(e,n),{points:m,loading:f}=OE(e,n,{enabled:d,hours:a,revision:o}),g=!!(l!=null&&l.active&&((x=l.samples)!=null&&x[0])),v=((w=l==null?void 0:l.samples)==null?void 0:w[0])||null;return s.jsxs("div",{className:`tm-sensor-single${d?" tm-sensor-single--history":""}`,children:[s.jsx(Z0,{hass:e,entityId:n,entity:u,label:r,history:d,scrubSample:v,scrubbing:g}),d&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`tm-sensor-reading-scrub-time${g?"":" is-idle"}`,"aria-hidden":!g,children:g?J0(l.time,a):" "}),s.jsx("div",{className:"tm-sensor-sparkline-wrap",children:s.jsx(Q0,{points:m,loading:f,showRange:!0,domain:u.domain,onScrubChange:c})})]})]})}function RE({hass:e,getEntity:t,entityIds:n,widgetLabel:r,showHistory:i,historyHours:a}){var x;const{revision:o}=We(),[l,c]=b.useState(null),u=i&&n.some(w=>o0(e,w)),{series:d,loading:m}=IE(e,n,{enabled:u,hours:a,revision:o}),f=b.useMemo(()=>n.map((w,y)=>{var k;const p=t(w),h=d.find(N=>N.entityId===w);return{id:w,points:(h==null?void 0:h.points)||[],domain:p.domain,unit:((k=p.attributes)==null?void 0:k.unit_of_measurement)||"",colorIndex:y,label:r&&y===0?r:qe(e,w)}}),[n,t,e,d,r]),g=!!(l!=null&&l.active&&((x=l.samples)!=null&&x.length)),v=b.useCallback(w=>{c(w)},[]);return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"tm-sensor-multi-readings",children:n.map((w,y)=>{var k;const p=t(w),h=((k=l==null?void 0:l.samples)==null?void 0:k.find(N=>N.entityId===w))||null;return s.jsx(Z0,{hass:e,entityId:w,entity:p,label:r&&y===0?r:qe(e,w),compact:!0,colorIndex:y,scrubSample:h,scrubbing:g},w)})}),u&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`tm-sensor-reading-scrub-time tm-sensor-multi-scrub-time${g?"":" is-idle"}`,"aria-hidden":!g,children:g?J0(l.time,a):" "}),s.jsx("div",{className:"tm-sensor-sparkline-wrap tm-sensor-multi-chart",children:s.jsx(Q0,{series:f,loading:m,compact:!1,showRange:f.every(w=>{var y;return w.unit===((y=f[0])==null?void 0:y.unit)}),onScrubChange:v})})]})]})}function DE({widget:e,hass:t,getEntity:n,onConfigure:r}){const i=$N(e),a=!!e.showHistory,o=e.historyHours||24;if(!i.length)return s.jsxs("button",{type:"button",className:"tm-sensor-widget empty",onClick:r,children:[s.jsx(st,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Sensor wählen"})]});const l=i.length>1,c=l&&a;return s.jsx("div",{className:`tm-sensor-widget${l?" tm-sensor-widget--multi":""}${a?" tm-sensor-widget--history":""}${c?" tm-sensor-widget--combined-chart":""}`,children:c?s.jsx(RE,{hass:t,getEntity:n,entityIds:i,widgetLabel:e.label,showHistory:a,historyHours:o}):l?i.map((u,d)=>s.jsx(Af,{hass:t,getEntity:n,entityId:u,label:e.label&&d===0?e.label:qe(t,u),showHistory:a,historyHours:o},u)):s.jsx(Af,{hass:t,getEntity:n,entityId:i[0],label:e.label||qe(t,i[0]),showHistory:a,historyHours:o})})}function FE(e){var t;return(t=e.entity_ids)!=null&&t.length?e.entity_ids.filter(Boolean):e.entity_id?[e.entity_id]:[]}function _E(e){var r;const t=((r=e.attributes)==null?void 0:r.device_class)||"",n=(e.name||e.label||"").toLowerCase();return t==="window"||n.includes("fenster")?"window":t==="door"||t==="garage_door"||n.includes("tür")||n.includes("tur")||n.includes("tor")?"door":e.domain==="cover"?"window":"contact"}function vs(e){const{state:t,domain:n}=e;return n==="cover"?["open","opening"].includes(t):n==="binary_sensor"?t==="on":!1}function WE(e){return e.domain==="cover"&&["opening","closing"].includes(e.state)}function $0(e){const{state:t,domain:n}=e;return n==="cover"?{open:"Offen",closed:"Geschlossen",opening:"Öffnet …",closing:"Schließt …"}[t]||t:n==="binary_sensor"?t==="on"?"Offen":"Geschlossen":t}function ey(e,t=[]){return t.filter(Boolean).map(n=>({...Tt(e,n),id:n}))}function BE(e=[]){return e.filter(vs).length}function HE(e,t){return e==="door"?t?aa:mA:e==="window"?t?AA:jA:lA}function ty({entity:e,size:t=28,strokeWidth:n=2,className:r=""}){const i=_E(e),a=vs(e),o=WE(e),l=HE(i,a);return s.jsx("span",{className:`tm-contact-icon-badge${a?" tm-contact-icon-badge--open":" tm-contact-icon-badge--closed"}${o?" tm-contact-icon-badge--moving":""} tm-contact-icon-badge--${i}${r?` ${r}`:""}`,"aria-hidden":!0,children:s.jsx(l,{size:t,strokeWidth:n})})}function qE({entity:e,label:t,compact:n=!1}){const r=vs(e),i=$0(e);return s.jsxs("div",{className:`tm-contact-row${r?" tm-contact-row--open":""}${n?" tm-contact-row--compact":""}`,children:[s.jsx(ty,{entity:e,size:n?20:32,strokeWidth:n?2.1:2.25}),s.jsxs("div",{className:"tm-contact-row-text",children:[s.jsx("span",{className:"tm-contact-row-label",children:t}),s.jsx("span",{className:"tm-contact-row-state",children:i})]})]})}function UE({hass:e,entityId:t,label:n}){const[r]=ey(e,[t]),i=vs(r),a=$0(r);return s.jsxs("div",{className:`tm-contact-widget tm-contact-widget--single${i?" tm-contact-widget--open":""}`,children:[s.jsx(ty,{entity:r,size:34,strokeWidth:2.25,className:"tm-contact-widget-hero-icon"}),s.jsxs("div",{className:"tm-contact-widget-body",children:[s.jsx("div",{className:"tm-contact-widget-label",children:n}),s.jsx("div",{className:"tm-contact-widget-state",children:a})]})]})}function YE({hass:e,entityIds:t,widgetLabel:n}){const r=ey(e,t),i=BE(r);return s.jsxs("div",{className:`tm-contact-widget tm-contact-widget--multi${i>0?" tm-contact-widget--open":""}`,children:[s.jsxs("div",{className:"tm-contact-widget-summary",children:[s.jsx("span",{className:"tm-contact-widget-summary-title",children:n||"Sensor Status"}),s.jsx("span",{className:`tm-contact-widget-summary-badge${i>0?" tm-contact-widget-summary-badge--alert":""}`,children:i>0?`${i} offen`:"Alles zu"})]}),s.jsx("div",{className:"tm-contact-widget-grid",children:r.map(a=>s.jsx(qE,{entity:a,label:qe(e,a.id),compact:!0},a.id))})]})}function KE({widget:e,hass:t,onConfigure:n}){const r=FE(e);return r.length?r.length===1?s.jsx(UE,{hass:t,entityId:r[0],label:e.label||qe(t,r[0])}):s.jsx(YE,{hass:t,entityIds:r,widgetLabel:e.label}):s.jsxs("button",{type:"button",className:"tm-contact-widget tm-contact-widget--empty",onClick:n,children:[s.jsx(st,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Kontakt wählen"})]})}function VE(e){const t=document.createElement("div");return t.className="tm-ha-card-host-message",t.textContent=e,t}function GE({widget:e,hass:t,editMode:n=!1}){const r=`tm-ha-${e.id}`,i=b.useRef(null),a=b.useRef(null),o=b.useRef(null),l=b.useRef(t),c=b.useRef(n),u=b.useRef(e.card),[d,m]=b.useState(()=>Wt()),f=JSON.stringify(e.card||null),g=!!(t!=null&&t.connection);l.current=t,c.current=n,u.current=e.card,b.useEffect(()=>{m(!!Xm(i.current)&&Wt())},[t]),b.useEffect(()=>{const x=i.current,w=Xm(x),y=u.current;if(!w||!y||!Wt())return;let p=!1;const h=document.createElement("div");return h.slot=r,h.className=`tm-ha-card-host${c.current?" is-editing":""}`,w.appendChild(h),a.current=h,(async()=>{h.replaceChildren();try{const N=await a0(h,y,l.current,{preview:c.current});if(p){N.remove();return}o.current=N}catch(N){if(p)return;o.current=null,h.appendChild(VE((N==null?void 0:N.message)||"Karte konnte nicht geladen werden"))}})(),()=>{p=!0,o.current=null,a.current=null,h.remove()}},[f,g,r]),b.useEffect(()=>{const x=o.current;x&&t&&(x.hass=t)},[t]),b.useEffect(()=>{var w;(w=a.current)==null||w.classList.toggle("is-editing",!!n);const x=o.current;x&&(x.preview=!!n)},[n]);const v=e.card?Ur(e.card):"Keine Karte gewählt";return s.jsxs("div",{className:`tm-ha-card${d&&e.card?" tm-ha-card--live":""}`,children:[s.jsx("slot",{ref:i,name:r,className:"tm-ha-card-slot"}),!(d&&e.card)&&s.jsxs("div",{className:"tm-card tm-ha-card-fallback",children:[s.jsx("div",{className:"tm-ha-card-fallback-kicker",children:"Home Assistant"}),s.jsx("div",{className:"tm-ha-card-fallback-title",children:v}),s.jsx("p",{children:e.card?"Im Home-Assistant-Dashboard erscheint hier die echte Lovelace-Karte.":"Im Bearbeiten-Modus eine Karte aus einem Dashboard wählen oder YAML einfügen."})]})]})}function QE({widget:e,hass:t,getEntity:n,editMode:r,onEditWidget:i,onOpenPopup:a,onUpdateWidget:o,pageIndex:l=0,widgetIndex:c=0}){const u=()=>i==null?void 0:i(e.id);switch(e.type){case"weather":return s.jsx(eE,{entityId:e.entity_id,compact:!0,editMode:r,onConfigure:r?u:void 0});case"media":return s.jsx(iE,{entityId:e.entity_id,compact:!0,onConfigure:r?u:void 0});case"camera":return s.jsx(cE,{widget:e,entityId:e.entity_id,entityIds:e.entity_ids,onConfigure:r?u:void 0});case"shopping":return s.jsx(uE,{entityId:e.entity_id,onConfigure:r?u:void 0});case"quickAction":return s.jsx(Lj,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"alarm":return s.jsx(Rj,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"cover":return s.jsx(Uj,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"coverPopup":return s.jsx(Yj,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"popup":return s.jsx(_j,{widget:e,widgetIndex:c,hass:t,getEntity:n,onConfigure:u,onOpen:a,editMode:r});case"scene":return s.jsx(Fj,{widget:e,widgetIndex:c,hass:t,getEntity:n,onConfigure:u,editMode:r});case"sensor":return s.jsx(DE,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"sensorStatus":return s.jsx(KE,{widget:e,hass:t,onConfigure:u});case"sankey":return s.jsx(vE,{widget:e});case"energyTile":return s.jsx(wE,{widget:e,hass:t});case"ev":return s.jsx(EE,{widget:e,hass:t});case"haCard":return s.jsx(GE,{widget:e,hass:t,editMode:r});default:return s.jsx("div",{className:"tm-card tm-placeholder-widget",children:s.jsx("span",{children:Yu(e)})})}}const JE={weather:td,media:M0,camera:Zr,shopping:gs,quickAction:sa,alarm:hs,cover:Yr,coverPopup:Yr,popup:j0,scene:rd,sensor:nd,sensorStatus:aa,sankey:k0,energyTile:L0,ev:S0,haCard:E0},XE=17.5,ZE=22;function $E(e){const t=XE*16,n=Math.min(ZE*16,window.innerHeight-32);let r=e.left+e.width/2-t/2,i=e.bottom+8;return r=Math.max(12,Math.min(r,window.innerWidth-t-12)),i+n>window.innerHeight-12&&(i=Math.max(12,e.top-n-8)),{left:`${r}px`,top:`${i}px`,width:`${t}px`,maxHeight:`${n}px`}}function eC({anchorRect:e,slotLabel:t,onClose:n,onPick:r}){ir(!0);const i=b.useMemo(()=>$E(e),[e]);return b.useEffect(()=>{const a=o=>{o.key==="Escape"&&n()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[n]),Pn.createPortal(s.jsxs("div",{className:"tm-slot-picker-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-slot-picker-backdrop",onClick:n,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-slot-picker-panel",style:i,onClick:a=>a.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":`Widget für ${t} wählen`,children:[s.jsxs("div",{className:"tm-slot-picker-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-slot-picker-title",children:"Widget hinzufügen"}),s.jsxs("div",{className:"tm-slot-picker-subtitle",children:[t," · 1×1"]})]}),s.jsx("button",{type:"button",className:"tm-slot-picker-close",onClick:n,"aria-label":"Schließen",children:s.jsx(Ke,{size:16})})]}),s.jsx("div",{className:"tm-slot-picker-grid",children:Object.entries(fs).map(([a,o])=>{const l=JE[a]||st;return s.jsxs("button",{type:"button",className:"tm-slot-picker-item",onClick:()=>r(a),children:[s.jsx("span",{className:"tm-slot-picker-icon",children:s.jsx(l,{size:14})}),s.jsx("span",{children:o.label})]},a)})})]})]}),zn())}const za="cubic-bezier(0.22, 1, 0.36, 1)",La="0.34s",tC=[{edge:"n",className:"tm-dashboard-grid-resize-edge--n",label:"oben"},{edge:"s",className:"tm-dashboard-grid-resize-edge--s",label:"unten"},{edge:"w",className:"tm-dashboard-grid-resize-edge--w",label:"links"},{edge:"e",className:"tm-dashboard-grid-resize-edge--e",label:"rechts"},{edge:"se",className:"tm-dashboard-grid-resize-corner",label:"Ecke"}];function nC(e,t,n,r){const{edge:i,offsetX:a,offsetY:o}=n,l=r.cellW,c=r.cellH;switch(i){case"n":e.top=`${t.top+o}px`,e.height=`${Math.max(c,t.height-o)}px`;break;case"s":e.height=`${Math.max(c,t.height+o)}px`;break;case"w":e.left=`${t.left+a}px`,e.width=`${Math.max(l,t.width-a)}px`;break;case"e":e.width=`${Math.max(l,t.width+a)}px`;break;case"se":e.width=`${Math.max(l,t.width+a)}px`,e.height=`${Math.max(c,t.height+o)}px`;break}}function rC({page:e,pageIndex:t,editMode:n,selectedWidgetId:r,onSelectWidget:i,onMoveWidget:a,onResizeWidget:o,hass:l,getEntity:c,onOpenPopup:u,onUpdateWidget:d,onAddWidgetAt:m,onSlotPickerOpenChange:f}){const{config:g}=ke(),v=rr(g.appearance),x=b.useRef(null),[w,y]=b.useState(null),[p,h]=b.useState(24),[k,N]=b.useState(null),[E,C]=b.useState(null),j=b.useRef(null),z=b.useRef(null);b.useLayoutEffect(()=>{const M=x.current;if(!M)return;const L=()=>{const A=M.getBoundingClientRect();y({width:A.width,height:A.height});const P=getComputedStyle(M),I=parseFloat(P.gap||P.columnGap)||24;h(I)};L();const S=new ResizeObserver(L);return S.observe(M),()=>S.disconnect()},[n]),b.useEffect(()=>{n||C(null)},[n]),b.useEffect(()=>{f==null||f(!!E)},[E,f]);const T=w?mN(w,Je,ht,p):null,D=b.useCallback(M=>{z.current=M,!j.current&&(j.current=requestAnimationFrame(()=>{N(z.current),j.current=null}))},[]),U=b.useCallback(()=>{j.current&&(cancelAnimationFrame(j.current),j.current=null),z.current=null,N(null)},[]),J=b.useCallback((M,L)=>{if(!n||!x.current)return;M.preventDefault(),M.stopPropagation(),i(L.id);const S=M.clientX,A=M.clientY,P={x:L.x,y:L.y},I={dx:0,dy:0},B=K=>{const he=K.clientX-S,tt=K.clientY-A;if(!T){D({kind:"drag",widgetId:L.id,offsetX:he,offsetY:tt});return}const Te=ef(he,tt,T);D({kind:"drag",widgetId:L.id,offsetX:Te.offsetX,offsetY:Te.offsetY}),(Te.dx!==I.dx||Te.dy!==I.dy)&&(I.dx=Te.dx,I.dy=Te.dy,a(t,L.id,{x:P.x+Te.dx,y:P.y+Te.dy,w:L.w,h:L.h}))},G=()=>{window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",G),U()};window.addEventListener("pointermove",B),window.addEventListener("pointerup",G)},[n,T,a,i,t,D,U]),Z=b.useCallback((M,L,S)=>{if(!n||!x.current)return;M.preventDefault(),M.stopPropagation(),i(L.id);const A=M.clientX,P=M.clientY,I={x:L.x,y:L.y,w:L.w,h:L.h},B={dx:0,dy:0},G=he=>{const tt=he.clientX-A,Te=he.clientY-P;if(!T){D({kind:"resize",edge:S,widgetId:L.id,offsetX:tt,offsetY:Te});return}const Ln=ef(tt,Te,T),{dx:W,dy:ne,offsetX:ge,offsetY:la}=hN(S,Ln);D({kind:"resize",edge:S,widgetId:L.id,offsetX:ge,offsetY:la}),(W!==B.dx||ne!==B.dy)&&(B.dx=W,B.dy=ne,o(t,L.id,pN(S,I,{dx:W,dy:ne})))},K=()=>{window.removeEventListener("pointermove",G),window.removeEventListener("pointerup",K),U()};window.addEventListener("pointermove",G),window.addEventListener("pointerup",K)},[n,T,o,i,t,D,U]),se=b.useCallback((M,L,S)=>{S.stopPropagation(),i(null);const A=S.currentTarget.getBoundingClientRect();C({x:M,y:L,anchorRect:{left:A.left,top:A.top,width:A.width,height:A.height,bottom:A.bottom,right:A.right},label:`Feld ${M+1}×${L+1}`})},[i]),be=b.useCallback(M=>{if(!E||!m)return;const L=Bt(M,{x:E.x,y:E.y}),S=mn(L),A=M==="haCard"&&kr(e.widgets,S).length===0,P=m(t,M,A?{x:S.x,y:S.y,w:S.w,h:S.h}:{x:E.x,y:E.y,w:1,h:1});C(null),P&&i(P)},[m,i,e.widgets,t,E]),H=M=>{const L=v?EN(M.id,M.type):null;if(!n)return{gridColumn:`${M.x+1} / span ${M.w}`,gridRow:`${M.y+1} / span ${M.h}`,...L};if(!T)return{gridColumn:`${M.x+1} / span ${M.w}`,gridRow:`${M.y+1} / span ${M.h}`,visibility:"hidden",...L};const S=fN(M,T),A=(k==null?void 0:k.widgetId)===M.id,P={position:"absolute",left:`${S.left}px`,top:`${S.top}px`,width:`${S.width}px`,height:`${S.height}px`,...L};return A?(P.transition="none",k.kind==="resize"?nC(P,S,k,T):P.transform=`translate3d(${k.offsetX}px, ${k.offsetY}px, 0)`):P.transition=`left ${La} ${za}, top ${La} ${za}, width ${La} ${za}, height ${La} ${za}`,P},R={gridTemplateColumns:`repeat(${Je}, minmax(0, 1fr))`,gridTemplateRows:`repeat(${ht}, minmax(0, 1fr))`};return s.jsxs("div",{ref:x,className:`tm-dashboard-grid${n?" tm-dashboard-grid--edit":""}`,style:n?void 0:R,onClick:()=>{n&&(i(null),C(null))},children:[n&&s.jsx("div",{className:"tm-dashboard-grid-overlay",style:R,children:Array.from({length:Je*ht}).map((M,L)=>{const S=L%Je,A=Math.floor(L/Je);return rN(e.widgets,S,A)?s.jsx("div",{className:"tm-dashboard-grid-cell tm-dashboard-grid-cell--occupied","aria-hidden":!0},L):s.jsx("button",{type:"button",className:"tm-dashboard-grid-cell tm-dashboard-grid-cell--empty",onClick:I=>se(S,A,I),"aria-label":`Feld ${S+1}×${A+1}: Widget hinzufügen`},L)})}),e.widgets.map((M,L)=>{const S=(k==null?void 0:k.widgetId)===M.id,A=Yu(M);return s.jsxs("div",{className:`tm-dashboard-grid-item${r===M.id?" selected":""}${n?" editing":""}${S?" is-interacting":""}${M.type==="energyTile"||M.type==="ev"?" tm-dashboard-grid-item--energy-tile":""}${M.type==="sankey"?" tm-dashboard-grid-item--sankey":""}`,style:H(M),onClick:P=>{n&&(P.stopPropagation(),i(M.id))},children:[n&&s.jsxs("div",{className:"tm-dashboard-grid-chrome",children:[s.jsx("button",{type:"button",className:"tm-dashboard-grid-drag","aria-label":`${A} verschieben`,onPointerDown:P=>J(P,M),children:"⋮⋮"}),s.jsxs("span",{className:"tm-dashboard-grid-badge",children:[A," ","·"," ",M.w,"×",M.h]}),tC.map(({edge:P,className:I,label:B})=>s.jsx("button",{type:"button",className:`tm-dashboard-grid-resize-edge ${I}`,"aria-label":`${A} ${B} skalieren`,onPointerDown:G=>Z(G,M,P)},P))]}),s.jsx("div",{className:"tm-dashboard-grid-content",children:QE({widget:M,hass:l,getEntity:c,editMode:n,onEditWidget:P=>i(P),onOpenPopup:u,onUpdateWidget:d,pageIndex:t,widgetIndex:L})})]},M.id)}),E&&s.jsx(eC,{anchorRect:E.anchorRect,slotLabel:E.label,onClose:()=>C(null),onPick:be})]})}function nt({value:e,onChange:t,domains:n=null,placeholder:r="Entität wählen…"}){const{hass:i}=We(),[a,o]=b.useState(!1),[l,c]=b.useState(""),u=b.useRef(null),d=zx(i,{domains:n,search:l}),m=e?qe(i,e):null;b.useEffect(()=>{if(!a)return;const v=x=>{const w=typeof x.composedPath=="function"?x.composedPath():[x.target];u.current&&w.includes(u.current)||o(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[a]);const f=v=>{t(v),o(!1),c("")},g=v=>{v.stopPropagation(),t("")};return s.jsxs("div",{className:"tm-entity-picker",ref:u,children:[s.jsxs("button",{type:"button",className:"tm-entity-picker-trigger",onClick:()=>o(!a),children:[s.jsx("span",{style:{opacity:m?1:.5},children:m||r}),s.jsxs("span",{className:"tm-flex-center tm-gap-2",children:[e&&s.jsx("span",{role:"button",tabIndex:0,onClick:g,onKeyDown:v=>v.key==="Enter"&&g(v),style:{opacity:.5,display:"flex"},children:s.jsx(Ke,{size:16})}),s.jsx(ps,{size:18,style:{opacity:.5}})]})]}),a&&s.jsxs("div",{className:"tm-entity-picker-dropdown",onMouseDown:v=>v.stopPropagation(),children:[s.jsx("input",{className:"tm-entity-picker-search",type:"text",placeholder:"Suchen…",value:l,onChange:v=>c(v.target.value),autoFocus:!0}),s.jsxs("div",{className:"tm-entity-picker-list",children:[d.length===0&&s.jsx("div",{style:{padding:"1rem",opacity:.5,textAlign:"center"},children:"Keine Entitäten gefunden"}),d.map(v=>s.jsxs("button",{type:"button",className:`tm-entity-picker-item${v.id===e?" selected":""}`,onClick:()=>f(v.id),children:[s.jsx("span",{className:"tm-font-bold",children:v.name}),s.jsxs("span",{className:"tm-text-xs tm-opacity-50",children:[v.id," · ",v.state]})]},v.id))]})]})]})}const iC=[{type:"tile",name:"Kachel"},{type:"entities",name:"Entitäten"},{type:"entity",name:"Entität"},{type:"button",name:"Schaltfläche"},{type:"light",name:"Licht"},{type:"thermostat",name:"Thermostat"},{type:"climate",name:"Klima"},{type:"media-control",name:"Mediensteuerung"},{type:"weather-forecast",name:"Wetter"},{type:"gauge",name:"Gauge"},{type:"sensor",name:"Sensor"},{type:"statistic",name:"Statistik"},{type:"history-graph",name:"Verlaufsdiagramm"},{type:"statistics-graph",name:"Statistikdiagramm"},{type:"humidifier",name:"Luftbefeuchter"},{type:"humidifier-card",name:"Luftbefeuchter"},{type:"alarm-panel",name:"Alarmanlage"},{type:"lock",name:"Schloss"},{type:"cover",name:"Abdeckung"},{type:"fan",name:"Lüfter"},{type:"vacuum",name:"Staubsauger"},{type:"plant-status",name:"Pflanzenstatus"},{type:"calendar",name:"Kalender"},{type:"map",name:"Karte"},{type:"markdown",name:"Markdown"},{type:"iframe",name:"Webseite"},{type:"picture",name:"Bild"},{type:"picture-entity",name:"Bild-Entität"},{type:"picture-glance",name:"Bild-Glance"},{type:"glance",name:"Glance"},{type:"area",name:"Bereich"},{type:"heading",name:"Überschrift"},{type:"grid",name:"Raster"},{type:"horizontal-stack",name:"Horizontaler Stapel"},{type:"vertical-stack",name:"Vertikaler Stapel"},{type:"conditional",name:"Bedingt"},{type:"entity-filter",name:"Entitätsfilter"},{type:"logbook",name:"Logbuch"},{type:"todo-list",name:"To-do-Liste"},{type:"energy-distribution",name:"Energieverteilung"},{type:"energy-date-selection",name:"Energiedatum"}],aC={light:"tile",switch:"tile",input_boolean:"tile",fan:"tile",cover:"tile",lock:"tile",binary_sensor:"tile",sensor:"tile",person:"tile",device_tracker:"tile",scene:"tile",script:"tile",button:"tile",input_button:"tile",climate:"thermostat",weather:"weather-forecast",media_player:"media-control",camera:"picture-entity",alarm_control_panel:"alarm-panel",vacuum:"vacuum",humidifier:"humidifier",plant:"plant-status",calendar:"calendar",todo:"todo-list"},oC=new Set(["zone","sun","persistent_notification","tts","conversation","stt","ai_task","update"]);function sC(e){const t=String(e||"").trim();return t?t.startsWith("custom:")?t:`custom:${t}`:""}function lC(){const e=iC.map(r=>({id:`core:${r.type}`,type:r.type,name:r.name,group:"Home Assistant"})),t=new Set(e.map(r=>r.type)),n=(typeof window<"u"&&Array.isArray(window.customCards)?window.customCards:[]).map(r=>{const i=sC(r==null?void 0:r.type);return!i||t.has(i)?null:(t.add(i),{id:`custom:${i}`,type:i,name:r.name||i.replace(/^custom:/,""),description:r.description||"",group:"Community"})}).filter(Boolean).sort((r,i)=>r.name.localeCompare(i.name,"de"));return[...e,...n]}function cC(e){const t=String(e||"").trim();return t?t==="markdown"?{type:"markdown",content:"## Text"}:t==="heading"?{type:"heading",heading:"Überschrift"}:t==="entities"?{type:"entities",entities:[]}:t==="vertical-stack"||t==="horizontal-stack"||t==="grid"?{type:t,cards:[]}:t==="conditional"?{type:"conditional",conditions:[],card:{type:"tile"}}:{type:t}:null}function uC(e,t){var o,l,c;const n=String(e||"").trim();if(!n||!n.includes("."))return null;const r=n.split(".")[0],i=aC[r]||"tile";if(i==="weather-forecast")return{type:i,entity:n,forecast_type:"daily"};if(i==="entities")return{type:i,entities:[n]};if(i==="picture-entity")return{type:i,entity:n};const a=(c=(l=(o=t==null?void 0:t.states)==null?void 0:o[n])==null?void 0:l.attributes)==null?void 0:c.friendly_name;return a?{type:i,entity:n,name:a}:{type:i,entity:n}}function dC(e,{query:t="",limit:n=120}={}){const r=(e==null?void 0:e.states)||{},i=String(t||"").trim().toLowerCase(),a=[];return Object.keys(r).forEach(o=>{var m;const l=o.split(".")[0];if(oC.has(l))return;const c=r[o],u=((m=c==null?void 0:c.attributes)==null?void 0:m.friendly_name)||o,d=`${u} ${o} ${l}`.toLowerCase();i&&!d.includes(i)||a.push({id:o,entityId:o,name:u,domain:l,label:u===o?o:`${u}`,detail:o})}),a.sort((o,l)=>{if(i){const c=o.name.toLowerCase().startsWith(i)?0:1,u=l.name.toLowerCase().startsWith(i)?0:1;if(c!==u)return c-u}return o.name.localeCompare(l.name,"de")}),{total:a.length,items:a.slice(0,n)}}const mC=[{id:"entities",label:"Entitäten"},{id:"types",label:"Kartenarten"},{id:"dashboard",label:"Dashboard"}],nl=80,fC={colorScheme:"only light",color:"#1d1d1f",WebkitTextFillColor:"#1d1d1f",background:"#f2f2f7"},pC={flexShrink:0,colorScheme:"only light",color:"#111111",WebkitTextFillColor:"#111111",background:"#ffffff",border:"none",width:"100%",textAlign:"left",borderRadius:"0.75rem",padding:"0.7rem 0.85rem",fontSize:"0.875rem",lineHeight:1.35,cursor:"pointer",fontFamily:"system-ui, -apple-system, sans-serif"},hC={display:"block",width:"100%",fontWeight:700,fontSize:"0.875rem",lineHeight:1.35,color:"#111111",WebkitTextFillColor:"#111111",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gC={display:"block",width:"100%",marginTop:"0.15rem",fontWeight:500,fontSize:"0.7rem",lineHeight:1.3,color:"#5c5c62",WebkitTextFillColor:"#5c5c62",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"};function jf(e){return e.title||e.url_path||"Übersicht"}function yC(e){return ds(e)}function rl({label:e,meta:t,onClick:n,style:r}){return s.jsxs("div",{role:"button",tabIndex:0,className:"tm-ha-picker-item tm-ha-picker-item-rich",style:{...pC,...r},onClick:n,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),n())},children:[s.jsx("span",{className:"tm-ha-picker-item-title",style:hC,children:e}),t?s.jsx("span",{className:"tm-ha-picker-item-meta",style:gC,children:t}):null]})}function vC({hass:e,onClose:t,onSelect:n}){ir(!0);const[r,i]=b.useState("entities"),[a,o]=b.useState(""),l=b.useDeferredValue(a),[c,u]=b.useState(nl),[d,m]=b.useState([]),[f,g]=b.useState(void 0),[v,x]=b.useState(null),[w,y]=b.useState(-1),[p,h]=b.useState([]),[k,N]=b.useState(!1),[E,C]=b.useState(!0),[j,z]=b.useState(!1),[T,D]=b.useState("");b.useEffect(()=>{const S=A=>{A.key==="Escape"&&t()};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[t]),b.useEffect(()=>{u(nl)},[r,l,f,w]),b.useEffect(()=>{if(r!=="dashboard")return;let S=!1;return(async()=>{try{const A=await BS(e);if(S)return;m(A),g(P=>P===void 0?A[0]?A[0].url_path??null:void 0:P)}catch(A){S||D((A==null?void 0:A.message)||"Dashboards konnten nicht geladen werden")}finally{S||C(!1)}})(),()=>{S=!0}},[e,r]),b.useEffect(()=>{if(r!=="dashboard"||f===void 0)return;let S=!1;return z(!0),D(""),(async()=>{try{const A=await HS(e,f);if(S)return;x(A),y(-1)}catch(A){S||(x(null),h([]),N(!1),D((A==null?void 0:A.message)||"Dashboard konnte nicht geladen werden"))}finally{S||z(!1)}})(),()=>{S=!0}},[f,e,r]);const U=b.useMemo(()=>VS(v),[v]);b.useEffect(()=>{if(r!=="dashboard"||!v){if(r!=="dashboard")return;h([]),N(!1);return}const S=d.find(I=>(I.url_path??null)===f),A=jf(S||{}),P=w<0?null:w;b.startTransition(()=>{const I=GS(v,A,P);h(I),N(QS(v,I))})},[f,w,v,d,r]);const J=b.useMemo(()=>r!=="entities"?{total:0,items:[]}:dC(e,{query:l,limit:400}),[l,e,r]),Z=b.useMemo(()=>{if(r!=="types")return[];const S=l.trim().toLowerCase(),A=lC();return S?A.filter(P=>P.name.toLowerCase().includes(S)||P.type.toLowerCase().includes(S)||(P.description||"").toLowerCase().includes(S)||(P.group||"").toLowerCase().includes(S)):A},[l,r]),se=b.useMemo(()=>{const S=l.trim().toLowerCase();return S?p.filter(A=>A.label.toLowerCase().includes(S)||A.path.toLowerCase().includes(S)):p},[p,l]),be=b.useMemo(()=>{const S=[],A=new Map;return se.slice(0,c).forEach(P=>{if(!A.has(P.path)){const I={path:P.path,cards:[]};A.set(P.path,I),S.push(I)}A.get(P.path).cards.push(P)}),S},[se,c]),H=S=>{const A=yC(S);A&&n(A)},R=J.items.slice(0,c),M=Z.slice(0,c),L=r==="entities"?Math.max(0,J.items.length-c):r==="types"?Math.max(0,Z.length-c):Math.max(0,se.length-c);return Pn.createPortal(s.jsxs("div",{className:"tm-ha-picker-overlay",role:"presentation",children:[s.jsx("style",{children:`
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
      `}),s.jsx("button",{type:"button",className:"tm-ha-picker-backdrop",onClick:t,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-ha-picker-panel",role:"dialog","aria-modal":"true","aria-label":"Home-Assistant-Karte wählen",style:fC,children:[s.jsxs("div",{className:"tm-ha-picker-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-ha-picker-title",style:{color:"#111111",WebkitTextFillColor:"#111111"},children:"Karte wählen"}),s.jsx("div",{className:"tm-ha-picker-subtitle",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Entität, Kartenart oder vorhandene Dashboard-Karte"})]}),s.jsx("button",{type:"button",className:"tm-ha-picker-close",onClick:t,"aria-label":"Schließen",children:s.jsx(Ke,{size:16,color:"#111111"})})]}),s.jsx("div",{className:"tm-ha-picker-tabs",role:"tablist",children:mC.map(S=>s.jsx("button",{type:"button",role:"tab","aria-selected":r===S.id,className:`tm-ha-picker-tab${r===S.id?" active":""}`,style:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>i(S.id),children:S.label},S.id))}),s.jsx("input",{className:"tm-ha-picker-search",type:"search",value:a,onChange:S=>o(S.target.value),style:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},placeholder:r==="entities"?"Entität suchen…":r==="types"?"Kartenart suchen…":"Dashboard-Karte suchen…"}),r==="dashboard"?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"tm-ha-picker-dashboards",children:d.map(S=>{const A=S.url_path??null,P=A===f;return s.jsx("button",{type:"button",className:`tm-ha-picker-dash${P?" active":""}`,style:P?{color:"#ffffff",WebkitTextFillColor:"#ffffff",colorScheme:"only light"}:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>g(A),children:jf(S)},S.id||S.url_path||"default")})}),U.length>1?s.jsxs("div",{className:"tm-ha-picker-dashboards tm-ha-picker-views",children:[s.jsx("button",{type:"button",className:`tm-ha-picker-dash tm-ha-picker-view${w<0?" active":""}`,style:w<0?{color:"#ffffff",WebkitTextFillColor:"#ffffff",colorScheme:"only light"}:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>y(-1),children:"Alle"}),U.map(S=>s.jsx("button",{type:"button",className:`tm-ha-picker-dash tm-ha-picker-view${S.index===w?" active":""}`,style:S.index===w?{color:"#ffffff",WebkitTextFillColor:"#ffffff",colorScheme:"only light"}:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>y(S.index),children:S.title},S.index))]}):null]}):null,s.jsxs("div",{className:"tm-ha-picker-list",children:[r==="entities"?s.jsxs(s.Fragment,{children:[R.length===0?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:l.trim()?"Keine Entitäten gefunden.":"Keine Entitäten verfügbar."}):null,R.map(S=>s.jsx(rl,{label:S.label,meta:S.detail,onClick:()=>H(uC(S.entityId,e))},S.id))]}):null,r==="types"?s.jsxs(s.Fragment,{children:[M.length===0?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Keine Kartenarten gefunden."}):null,M.map(S=>s.jsx(rl,{label:S.name,meta:`${S.group} · ${S.type}`,onClick:()=>H(cC(S.type))},S.id))]}):null,r==="dashboard"?s.jsxs(s.Fragment,{children:[E||j?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Karten werden geladen…"}):null,!E&&!j&&T?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:T}):null,!E&&!j&&!T&&k?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Dieses Dashboard erzeugt seine Karten automatisch und hat keine feste Kartenliste."}):null,!E&&!j&&!T&&!k&&be.length===0?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Keine Karten in diesem Dashboard gefunden."}):null,!j&&!T&&be.map(S=>s.jsxs("div",{className:"tm-ha-picker-group",children:[s.jsx("div",{className:"tm-ha-picker-group-title",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:S.path}),S.cards.map(A=>s.jsx(rl,{label:A.label,onClick:()=>H(A.config),style:{paddingLeft:`${.75+Math.min(A.depth,4)*.7}rem`}},A.id))]},S.path))]}):null,L>0?s.jsxs("button",{type:"button",className:"tm-ha-picker-more",style:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>u(S=>S+nl),children:[L," ","weitere laden"]}):null]})]})]}),zn())}const Ef="custom:";function bC(e){return new Promise(t=>{window.setTimeout(t,e)})}async function bc(e,t=4e3){return customElements.get(e)?customElements.get(e):(await Promise.race([customElements.whenDefined(e),bC(t)]),customElements.get(e)||null)}async function ny(e){const t=String((e==null?void 0:e.type)||"");if(!t)return null;if(t.startsWith(Ef))return bc(t.slice(Ef.length));const r=await(await window.loadCardHelpers()).createCardElement(e);return r!=null&&r.localName?bc(r.localName):null}const xc="hui-card-picker";let Oa=null;function xC(){return customElements.get(xc)?Promise.resolve(!0):Wt()?(Oa||(Oa=(async()=>{var e;for(const t of["vertical-stack","grid","horizontal-stack"]){try{const n=await ny({type:t,cards:[]});await((e=n==null?void 0:n.getConfigElement)==null?void 0:e.call(n))}catch{}if(await bc(xc,1500))return!0}return!1})().then(e=>(e||(Oa=null),e))),Oa):Promise.resolve(!1)}function wC(e,t){const n=document.createElement(xc);return n.hass=e,n.lovelace={views:[]},n.addEventListener("config-changed",r=>{var a;r.stopPropagation();const i=(a=r.detail)==null?void 0:a.config;i&&typeof i=="object"&&t(i)}),n}async function kC(e,t){if(!Wt())return null;const n=await ny(e);if(typeof(n==null?void 0:n.getConfigElement)!="function")return null;const r=await n.getConfigElement();return r?(r.hass=t,await r.setConfig(e),r):null}function SC({hass:e,onClose:t,onSelect:n,onUnavailable:r,onOpenDashboardCopy:i}){ir(!0);const[a,o]=b.useState("loading"),l=b.useRef(null),c=b.useRef(null),u=b.useRef(e),d=b.useRef(n),m=b.useRef(r);return u.current=e,d.current=n,m.current=r,b.useEffect(()=>{const f=g=>{g.key==="Escape"&&t()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t]),b.useEffect(()=>{let f=!1;return(async()=>{var x,w;const g=await xC();if(f)return;if(!g||!l.current){o("failed"),(x=m.current)==null||x.call(m);return}const v=wC(u.current,y=>d.current(y));c.current=v,l.current.replaceChildren(v),o("ready"),(w=v.focus)==null||w.call(v)})(),()=>{var g;f=!0,(g=c.current)==null||g.remove(),c.current=null}},[]),b.useEffect(()=>{c.current&&e&&(c.current.hass=e)},[e]),Pn.createPortal(s.jsxs("div",{className:"tm-ha-picker-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-ha-picker-backdrop",onClick:t,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-ha-editor-panel tm-ha-native-picker-panel",role:"dialog","aria-modal":"true","aria-label":"Karte wählen",children:[s.jsxs("div",{className:"tm-ha-editor-header",children:[s.jsx("div",{className:"tm-ha-editor-heading",children:s.jsx("div",{className:"tm-ha-editor-title",children:"Karte wählen"})}),s.jsx("button",{type:"button",className:"tm-ha-editor-icon-btn",onClick:t,"aria-label":"Schließen",children:s.jsx(Ke,{size:18})})]}),s.jsxs("div",{className:"tm-ha-native-picker-body",children:[a==="loading"?s.jsx("div",{className:"tm-ha-editor-note tm-ha-native-picker-note",children:"Kartenauswahl wird geladen…"}):null,s.jsx("div",{ref:l,className:"tm-ha-native-picker-slot"})]}),s.jsxs("div",{className:"tm-ha-editor-footer",children:[s.jsx("button",{type:"button",className:"tm-ha-editor-text-btn",onClick:i,children:"Aus anderem Dashboard übernehmen"}),s.jsx("button",{type:"button",className:"tm-ha-editor-text-btn",onClick:t,children:"Abbrechen"})]})]})]}),zn())}const NC=250;function AC({card:e,hass:t,onClose:n,onSave:r,initialMode:i="visual"}){ir(!0);const[a,o]=b.useState(e),[l,c]=b.useState(i),[u,d]=b.useState("loading"),[m,f]=b.useState(()=>Jm(e)),[g,v]=b.useState(""),x=b.useRef(null),w=b.useRef(null),y=b.useRef(null),p=b.useRef(t),h=b.useRef(e),k=b.useRef(null);p.current=t,h.current=a,b.useEffect(()=>{const T=D=>{D.key==="Escape"&&n()};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[n]),b.useEffect(()=>{if(l!=="visual")return;const T=x.current;if(!T)return;const D=h.current;if(y.current&&k.current===(D==null?void 0:D.type)){T.replaceChildren(y.current);try{y.current.setConfig(D),d("ready")}catch{d("unsupported")}return}let U=!1;d("loading"),T.replaceChildren();const J=Z=>{var be;Z.stopPropagation();const se=(be=Z.detail)==null?void 0:be.config;if(!(!se||typeof se!="object")){o(se);try{Z.currentTarget.setConfig(se)}catch{}}};return(async()=>{try{const Z=await kC(D,p.current);if(U)return;if(!Z){y.current=null,k.current=null,d("unsupported");return}Z.addEventListener("config-changed",J),y.current=Z,k.current=D==null?void 0:D.type,T.replaceChildren(Z),d("ready")}catch(Z){if(U)return;console.warn("The Monitor: card editor failed",Z),y.current=null,k.current=null,d("unsupported")}})(),()=>{U=!0}},[l,a==null?void 0:a.type]),b.useEffect(()=>{y.current&&t&&(y.current.hass=t)},[t]);const N=JSON.stringify(a||null);b.useEffect(()=>{const T=w.current;if(!T||!a||!Wt())return;let D=!1;const U=window.setTimeout(async()=>{const J=document.createElement("div");J.className="tm-ha-editor-preview-card";try{if(await a0(J,a,p.current,{preview:!0}),D)return;T.replaceChildren(J)}catch(Z){if(D)return;const se=document.createElement("div");se.className="tm-ha-editor-note",se.textContent=(Z==null?void 0:Z.message)||"Vorschau nicht verfügbar",T.replaceChildren(se)}},NC);return()=>{D=!0,window.clearTimeout(U)}},[N]);const E=()=>{f(Jm(h.current)),v(""),c("yaml")},C=()=>{try{const T=LS(m);if(!T)throw new Error("Die Karte braucht mindestens einen type.");return v(""),T}catch(T){return v(T.message),null}},j=()=>{const T=C();T&&(o(T),c("visual"))},z=()=>{if(l==="yaml"){const T=C();if(!T)return;r(T);return}r(h.current)};return Pn.createPortal(s.jsxs("div",{className:"tm-ha-picker-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-ha-picker-backdrop",onClick:n,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-ha-editor-panel",role:"dialog","aria-modal":"true","aria-label":"Karte bearbeiten",children:[s.jsxs("div",{className:"tm-ha-editor-header",children:[s.jsxs("div",{className:"tm-ha-editor-heading",children:[s.jsx("div",{className:"tm-ha-editor-title",children:"Karte bearbeiten"}),s.jsx("div",{className:"tm-ha-editor-subtitle",children:Ur(a)})]}),s.jsx("button",{type:"button",className:"tm-ha-editor-icon-btn",onClick:n,"aria-label":"Schließen",children:s.jsx(Ke,{size:18})})]}),s.jsxs("div",{className:"tm-ha-editor-body",children:[s.jsx("div",{className:"tm-ha-editor-pane tm-ha-editor-pane--form",children:l==="visual"?s.jsxs(s.Fragment,{children:[u==="loading"?s.jsx("div",{className:"tm-ha-editor-note",children:"Editor wird geladen…"}):null,u==="unsupported"?s.jsx("div",{className:"tm-ha-editor-note",children:"Für diese Karte gibt es keinen visuellen Editor. Bearbeite sie im Code-Editor."}):null,s.jsx("div",{ref:x,className:"tm-ha-editor-slot"})]}):s.jsxs(s.Fragment,{children:[s.jsx("textarea",{className:"tm-ha-editor-yaml",value:m,onChange:T=>{f(T.target.value),v("")},spellCheck:!1,"aria-label":"Karten-YAML"}),g?s.jsx("div",{className:"tm-ha-editor-error",children:g}):null]})}),s.jsxs("div",{className:"tm-ha-editor-pane tm-ha-editor-pane--preview",children:[s.jsx("div",{className:"tm-ha-editor-pane-label",children:"Vorschau"}),s.jsx("div",{ref:w,className:"tm-ha-editor-preview",children:Wt()?null:s.jsx("div",{className:"tm-ha-editor-note",children:"Die Vorschau erscheint im Home-Assistant-Dashboard."})})]})]}),s.jsxs("div",{className:"tm-ha-editor-footer",children:[s.jsx("button",{type:"button",className:"tm-ha-editor-text-btn",onClick:l==="visual"?E:j,children:l==="visual"?"Code-Editor anzeigen":"Visuellen Editor anzeigen"}),s.jsxs("div",{className:"tm-ha-editor-actions",children:[s.jsx("button",{type:"button",className:"tm-ha-editor-text-btn",onClick:n,children:"Abbrechen"}),s.jsx("button",{type:"button",className:"tm-ha-editor-primary-btn",onClick:z,children:"Speichern"})]})]})]})]}),zn())}function jC({widget:e,pageIndex:t,onUpdate:n,hass:r}){const[i,a]=b.useState(null),[o,l]=b.useState(null),c=m=>{n(t,e.id,m?zS(e,m):{card:null})},u=()=>a(Wt()?"native":"dashboard"),d=m=>{a(null);const f=!(m!=null&&m.type);l({card:f?{type:""}:m,mode:f?"yaml":"visual"})};return s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("div",{className:"tm-widget-inspector-label",children:"Home-Assistant-Karte"}),s.jsx("p",{className:"tm-widget-inspector-hint",children:e.card?Ur(e.card):"Karte aus der Home-Assistant-Kartenauswahl hinzufügen."}),e.card?s.jsx("button",{type:"button",className:"tm-btn-primary tm-btn-block",onClick:()=>l({card:e.card,mode:"visual"}),children:"Karte bearbeiten"}):null,s.jsx("button",{type:"button",className:"tm-btn-secondary tm-btn-block",onClick:u,children:e.card?"Andere Karte wählen":"Karte wählen"}),i==="native"&&s.jsx(SC,{hass:r,onClose:()=>a(null),onSelect:d,onUnavailable:()=>a("dashboard"),onOpenDashboardCopy:()=>a("dashboard")}),i==="dashboard"&&s.jsx(vC,{hass:r,onClose:()=>a(null),onSelect:d}),o&&s.jsx(AC,{card:o.card,initialMode:o.mode,hass:r,onClose:()=>l(null),onSave:m=>{c(m),l(null)}})]})}const EC=[{key:"stateEntity",label:"Lade-Status",domains:["binary_sensor","sensor","switch","input_boolean"],evcc:"binary_sensor.evcc_{lp}_charging"},{key:"powerEntity",label:"Ladeleistung",domains:["sensor"],evcc:"sensor.evcc_{lp}_charge_power"},{key:"batteryEntity",label:"Akku (%)",domains:["sensor","binary_sensor"],evcc:"sensor.evcc_{lp}_vehicle_soc"},{key:"rangeEntity",label:"Reichweite (km)",domains:["sensor"],evcc:"sensor.evcc_{lp}_vehicle_range"},{key:"chargeTimeEntity",label:"Restladezeit",domains:["sensor"],evcc:"sensor.evcc_{lp}_charge_remaining_duration"},{key:"lastTripEntity",label:"Letzte Fahrt (km)",domains:["sensor"]},{key:"costEntity",label:"Kosten heute (€)",domains:["sensor"],evcc:"sensor.evcc_{lp}_session_price"}];function ry({showLabel:e=!0}){var a;const{config:t,updateEv:n}=ke(),{hass:r}=We(),i=Mu(r,t);return s.jsxs("div",{className:"tm-ev-fields",children:[e&&s.jsxs("div",{className:"tm-config-slot",children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",children:"Anzeigename"}),s.jsx("input",{className:"tm-input",type:"text",value:((a=t.ev)==null?void 0:a.label)||"",onChange:o=>n({label:o.target.value}),placeholder:"Grandland"})]}),EC.map(o=>{var c;const l=i&&o.evcc?o.evcc.replace("{lp}",i):"";return s.jsxs("div",{className:"tm-config-slot",children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",children:o.label}),s.jsx(nt,{value:((c=t.ev)==null?void 0:c[o.key])||"",onChange:u=>n({[o.key]:u}),domains:o.domains,placeholder:l?`automatisch: ${l}`:"Entität wählen…"})]},o.key)})]})}function sr(e,t,n){const r=Gi(e.deviceImages);return{deviceImages:{...r,[t]:{...r[t],...n}}}}function lr({name:e,onRemove:t,children:n,className:r=""}){return s.jsxs("div",{className:`tm-widget-inspector-entity-row${r?` ${r}`:""}`,children:[n||s.jsx("span",{className:"tm-widget-inspector-entity-name",children:e}),s.jsx("button",{type:"button",className:"tm-widget-inspector-remove",onClick:t,"aria-label":`${e||"Eintrag"} entfernen`,children:s.jsx(Ke,{size:14})})]})}function Ia(e,t,n){var a;if(!t)return null;const r=(a=e.entity_ids)!=null&&a.length?[...e.entity_ids]:e.entity_id?[e.entity_id]:[];if(r.includes(t)||r.length>=n)return null;const i=[...r,t];return{entity_ids:i,entity_id:i[0]}}function ui(e){var t;return(t=e.entity_ids)!=null&&t.length?e.entity_ids:e.entity_id?[e.entity_id]:[]}function CC({widget:e,pageIndex:t,onUpdate:n,onDelete:r,onApplySize:i,hass:a}){if(!e)return s.jsxs("div",{className:"tm-widget-inspector tm-widget-inspector--empty",children:[s.jsx("div",{className:"tm-widget-inspector-empty-icon","aria-hidden":"true",children:s.jsx(SA,{size:22})}),s.jsx("p",{className:"tm-widget-inspector-empty-title",children:"Kein Widget gewählt"}),s.jsx("p",{className:"tm-widget-inspector-empty-text",children:"Tippe ein Widget an, um es zu bearbeiten — oder füge über „Widget“ bzw. eine freie Zelle eines hinzu."})]});const o=fs[e.type]||{},l=e.type==="popup",c=e.type==="coverPopup",u=e.type==="camera",d=e.type==="quickAction",m=e.type==="sankey",f=e.type==="energyTile",g=e.type==="sensor",v=e.type==="sensorStatus",x=e.type==="haCard",w=e.type==="scene",y=e.type==="ev";return s.jsxs("div",{className:"tm-widget-inspector",children:[s.jsxs("div",{className:"tm-widget-inspector-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-widget-inspector-title",children:Yu(e)}),s.jsx("span",{className:"tm-widget-inspector-type",children:o.label||e.type})]}),s.jsx("button",{type:"button",className:"tm-widget-inspector-delete",onClick:()=>r(t,e.id),"aria-label":"Widget entfernen",children:s.jsx(O0,{size:16})})]}),s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("div",{className:"tm-widget-inspector-label",children:"Größe"}),s.jsx("div",{className:"tm-widget-inspector-sizes",children:Object.entries(mc).map(([p,h])=>s.jsxs("button",{type:"button",className:`tm-widget-inspector-size${e.w===h.w&&e.h===h.h?" active":""}`,onClick:()=>i(t,e.id,h),children:[s.jsx("span",{children:h.label}),s.jsxs("span",{className:"tm-widget-inspector-size-dim",children:[h.w,"×",h.h]})]},p))}),s.jsxs("div",{className:"tm-widget-inspector-meta",children:["Position ",e.x,",",e.y," · aktuell ",e.w,"×",e.h]})]}),e.type!=="shopping"&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Anzeige"}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Label"}),s.jsx("input",{className:"tm-input",type:"text",value:e.label||"",onChange:p=>n(t,e.id,{label:p.target.value}),placeholder:"Anzeigename"})]}),!x&&s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Icon"}),s.jsx("input",{className:"tm-input",type:"text",value:e.icon||"",onChange:p=>n(t,e.id,{icon:p.target.value}),placeholder:"mdi:sofa"})]})]}),d&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Modus"}),s.jsxs("div",{className:"tm-widget-inspector-sizes tm-widget-inspector-sizes--segment",children:[s.jsx("button",{type:"button",className:`tm-widget-inspector-size${e.mode!=="brightness"?" active":""}`,onClick:()=>n(t,e.id,{mode:"toggle"}),children:"Schalter"}),s.jsx("button",{type:"button",className:`tm-widget-inspector-size${e.mode==="brightness"?" active":""}`,onClick:()=>n(t,e.id,{mode:"brightness"}),children:"Helligkeit"})]})]}),f&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Kachel-Typ"}),s.jsx("div",{className:"tm-widget-inspector-sizes tm-widget-inspector-sizes--stack",children:Object.entries(Mo).map(([p,h])=>s.jsxs("button",{type:"button",className:`tm-widget-inspector-size tm-widget-inspector-size--wide${e.tileKind===p?" active":""}`,onClick:()=>n(t,e.id,{tileKind:p,label:h.label,...p==="ev-heatpump"?{deviceImages:Gi(e.deviceImages)}:{}}),children:[s.jsx("span",{children:h.label}),s.jsx("span",{className:"tm-widget-inspector-hint",children:h.description})]},p))})]}),f&&e.tileKind==="ev-heatpump"&&(()=>{const p=Gi(e.deviceImages);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"E-Auto · Bilder"}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Bild je Zustand — optional per Entität steuern."}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Lädt"}),s.jsx("input",{className:"tm-input",type:"url",value:p.ev.charging,onChange:h=>n(t,e.id,sr(e,"ev",{charging:h.target.value})),placeholder:"https://… oder /local/…"})]}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Nicht am Laden"}),s.jsx("input",{className:"tm-input",type:"url",value:p.ev.idle,onChange:h=>n(t,e.id,sr(e,"ev",{idle:h.target.value})),placeholder:"https://… oder /local/…"})]}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Status-Entität (Laden)"}),s.jsx(nt,{value:p.ev.stateEntity,onChange:h=>n(t,e.id,sr(e,"ev",{stateEntity:h})),domains:["binary_sensor","sensor","switch","input_boolean"],placeholder:"Optional — auch unter Einstellungen → E-Auto"})]})]}),s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Wärmepumpe · Bilder"}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Mit Licht"}),s.jsx("input",{className:"tm-input",type:"url",value:p.heatpump.lightOn,onChange:h=>n(t,e.id,sr(e,"heatpump",{lightOn:h.target.value})),placeholder:"https://… oder /local/…"})]}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Ohne Licht"}),s.jsx("input",{className:"tm-input",type:"url",value:p.heatpump.lightOff,onChange:h=>n(t,e.id,sr(e,"heatpump",{lightOff:h.target.value})),placeholder:"https://… oder /local/…"})]}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Licht-Entität"}),s.jsx(nt,{value:p.heatpump.lightEntity,onChange:h=>n(t,e.id,sr(e,"heatpump",{lightEntity:h})),domains:["light","switch","binary_sensor","input_boolean"],placeholder:"Optional — Anzeige / Licht"})]})]})]})})(),x&&s.jsx(jC,{widget:e,pageIndex:t,onUpdate:n,hass:a}),w&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Szenen (max. ",ie.sceneEntities,")"]}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"1, 2 oder 4 Szenen pro Kachel. Das Motiv wird automatisch am Namen erkannt."}),s.jsx(nt,{value:"",onChange:p=>{const h=Ia(e,p,ie.sceneEntities);h&&n(t,e.id,h)},domains:o.domains,placeholder:"Szene hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:ui(e).map(p=>{var h;return s.jsx(lr,{name:qe(a,p),onRemove:()=>{const k=ui(e).filter(C=>C!==p),{[p]:N,...E}=e.scene_art||{};n(t,e.id,{entity_ids:k,entity_id:k[0]||"",scene_art:E})},children:s.jsxs("div",{className:"tm-widget-inspector-entity-row-main",children:[s.jsx("span",{className:"tm-widget-inspector-entity-name",children:qe(a,p)}),s.jsxs("select",{className:"tm-input tm-widget-inspector-scene-art",value:((h=e.scene_art)==null?void 0:h[p])||"",onChange:k=>n(t,e.id,{scene_art:{...e.scene_art||{},[p]:k.target.value}}),"aria-label":"Motiv",children:[s.jsx("option",{value:"",children:"Motiv: automatisch"}),Object.entries(sd).map(([k,N])=>s.jsx("option",{value:k,children:`Motiv: ${N.label}`},k))]})]})},p)})})]}),y&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Fahrzeug"}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Gilt für alle E-Auto-Kacheln. Leere Felder werden bei evcc automatisch erkannt."}),s.jsx(ry,{showLabel:!1})]}),!l&&!c&&!u&&!g&&!v&&!x&&!w&&!y&&e.type!=="shopping"&&!m&&!f&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Entität"}),s.jsx(nt,{value:e.entity_id||"",onChange:p=>n(t,e.id,{entity_id:p}),domains:o.domains,placeholder:"Entität wählen…"})]}),v&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Kontakte (max. ",ie.contactStatusEntities,")"]}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Fenster, Türen und Kontaktsensoren — das Icon zeigt offen oder geschlossen."}),s.jsx(nt,{value:"",onChange:p=>{const h=Ia(e,p,ie.contactStatusEntities);h&&n(t,e.id,h)},domains:o.domains,placeholder:"Fenster / Tür hinzufügen …"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:ui(e).map(p=>s.jsx(lr,{name:qe(a,p),onRemove:()=>{const h=(e.entity_ids||[]).filter(k=>k!==p);n(t,e.id,{entity_ids:h,entity_id:h[0]||""})}},p))})]}),g&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Sensoren (max. ",ie.sensorEntities,")"]}),s.jsx(nt,{value:"",onChange:p=>{const h=Ia(e,p,ie.sensorEntities);h&&n(t,e.id,h)},domains:o.domains,placeholder:"Sensor hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:ui(e).map(p=>s.jsx(lr,{name:qe(a,p),onRemove:()=>{const h=(e.entity_ids||[]).filter(k=>k!==p);n(t,e.id,{entity_ids:h,entity_id:h[0]||""})}},p))}),s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:!!e.showHistory,onChange:p=>n(t,e.id,{showHistory:p.target.checked})}),s.jsx("span",{children:"Verlauf anzeigen"})]}),e.showHistory&&s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("div",{className:"tm-widget-inspector-label",children:"Zeitraum"}),s.jsx("div",{className:"tm-widget-inspector-sizes tm-widget-inspector-sizes--hours",children:Uu.map(p=>s.jsx("button",{type:"button",className:`tm-widget-inspector-size${(e.historyHours||24)===p?" active":""}`,onClick:()=>n(t,e.id,{historyHours:p}),children:p===168?"7 Tage":`${p}h`},p))})]})]}),u&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Kameras (max. ",ie.cameraEntities,")"]}),s.jsx(nt,{value:"",onChange:p=>{const h=Ia(e,p,ie.cameraEntities);h&&n(t,e.id,h)},domains:o.domains,placeholder:"Kamera hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:ui(e).map(p=>s.jsx(lr,{name:qe(a,p),onRemove:()=>{const h=(e.entity_ids||[]).filter(k=>k!==p);n(t,e.id,{entity_ids:h,entity_id:h[0]||""})}},p))})]}),c&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Rolläden (max. ",ie.coverPopupEntities,")"]}),s.jsx(nt,{value:"",onChange:p=>{!p||(e.entity_ids||[]).includes(p)||(e.entity_ids||[]).length>=ie.coverPopupEntities||n(t,e.id,{entity_ids:[...e.entity_ids||[],p]})},domains:o.domains,placeholder:"Rolladen hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:(e.entity_ids||[]).map(p=>s.jsx(lr,{name:qe(a,p),onRemove:()=>n(t,e.id,{entity_ids:e.entity_ids.filter(h=>h!==p)})},p))})]}),l&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Entitäten"}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Deaktivierte Entitäten erscheinen nicht im Popup. Lichter mit Helligkeits-Slider zeigen Farbkreise direkt auf der Kachel."}),s.jsx(nt,{value:"",onChange:p=>{!p||(e.entity_ids||[]).includes(p)||(e.entity_ids||[]).length>=ie.popupEntities||n(t,e.id,{entity_ids:[...e.entity_ids||[],p]})},domains:o.domains,placeholder:"Entität hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:(e.entity_ids||[]).map(p=>{const h=(e.disabled_entity_ids||[]).includes(p),k=ve(p)==="light";return s.jsxs(lr,{name:qe(a,p),className:`tm-widget-inspector-entity-row--popup${h?" disabled":""}`,onRemove:()=>{n(t,e.id,{entity_ids:e.entity_ids.filter(N=>N!==p),disabled_entity_ids:(e.disabled_entity_ids||[]).filter(N=>N!==p)})},children:[s.jsxs("label",{className:"tm-widget-inspector-entity-disable",children:[s.jsx("input",{type:"checkbox",checked:h,onChange:()=>{const N=e.disabled_entity_ids||[];n(t,e.id,{disabled_entity_ids:h?N.filter(E=>E!==p):[...N,p]})}}),s.jsx("span",{className:"tm-widget-inspector-entity-disable-label",children:"Aus"})]}),s.jsxs("div",{className:"tm-widget-inspector-entity-row-main",children:[s.jsx("span",{className:"tm-widget-inspector-entity-name",children:qe(a,p)}),k&&s.jsx("span",{className:"tm-widget-inspector-entity-hint",children:"Licht · Farben auf Kachel"})]})]},p)})})]})]})}const TC={weather:td,media:M0,camera:Zr,shopping:gs,quickAction:sa,alarm:hs,cover:Yr,coverPopup:Yr,popup:j0,scene:rd,sensor:nd,sensorStatus:aa,sankey:k0,energyTile:L0,ev:S0,haCard:E0};function PC({activePageIndex:e,selectedWidget:t,onDone:n,onApplyPreset:r,onAddWidget:i,onUpdateWidget:a,onDeleteWidget:o,onApplySize:l,hass:c}){const[u,d]=b.useState(!1),[m,f]=b.useState(!1),g=w=>{i(e,w),f(!1)},v=()=>{d(w=>!w),f(!1)},x=()=>{f(w=>!w),d(!1)};return s.jsxs("div",{className:"tm-dashboard-editor",children:[s.jsxs("div",{className:"tm-dashboard-editor-toolbar",children:[s.jsxs("button",{type:"button",className:`tm-dashboard-editor-btn${u?" active":""}`,onClick:v,children:[s.jsx(bA,{size:16}),"Vorlagen"]}),s.jsxs("button",{type:"button",className:`tm-dashboard-editor-btn${m?" active":""}`,onClick:x,children:[s.jsx(st,{size:16}),"Widget"]}),s.jsxs("button",{type:"button",className:"tm-dashboard-editor-done",onClick:n,children:[s.jsx(ed,{size:16}),"Fertig"]})]}),u&&s.jsxs("div",{className:"tm-dashboard-editor-panel tm-dashboard-editor-presets",children:[s.jsxs("div",{className:"tm-dashboard-editor-panel-header",children:[s.jsx("strong",{children:"Layout-Vorlagen"}),s.jsx("button",{type:"button",className:"tm-dashboard-editor-close",onClick:()=>d(!1),"aria-label":"Schließen",children:s.jsx(Ke,{size:14})})]}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Entitäten bleiben erhalten — nur Anordnung und Größen ändern sich."}),s.jsx("div",{className:"tm-preset-grid",children:fc.map(w=>s.jsxs("button",{type:"button",className:"tm-preset-card",onClick:()=>{r(w.id),d(!1)},children:[s.jsx("div",{className:"tm-preset-preview",children:w.preview.map((y,p)=>s.jsx("span",{className:"tm-preset-block",style:{flex:y}},p))}),s.jsx("div",{className:"tm-preset-name",children:w.name}),s.jsx("div",{className:"tm-preset-desc",children:w.description})]},w.id))})]}),m&&s.jsxs("div",{className:"tm-dashboard-editor-panel tm-dashboard-editor-palette",children:[s.jsxs("div",{className:"tm-dashboard-editor-panel-header",children:[s.jsx("strong",{children:"Widget hinzufügen"}),s.jsx("button",{type:"button",className:"tm-dashboard-editor-close",onClick:()=>f(!1),"aria-label":"Schließen",children:s.jsx(Ke,{size:14})})]}),s.jsx("div",{className:"tm-palette-grid",children:Object.entries(fs).map(([w,y])=>{const p=TC[w]||st;return s.jsxs("button",{type:"button",className:"tm-palette-item",onClick:()=>g(w),children:[s.jsx("span",{className:"tm-palette-icon",children:s.jsx(p,{size:14})}),s.jsx("span",{children:y.label})]},w)})})]}),s.jsx("div",{className:"tm-dashboard-editor-inspector-wrap",children:s.jsx(CC,{widget:t,pageIndex:e,onUpdate:a,onDelete:o,onApplySize:l,hass:c})})]})}function Cf({rooms:e,activeRoomId:t,onChange:n,disabled:r,className:i,optionClassName:a}){return s.jsx("ul",{className:i,role:"listbox","aria-label":"Räume",children:e.map(o=>s.jsx("li",{role:"option","aria-selected":o.id===t,children:s.jsx("button",{type:"button",className:`${a}${o.id===t?" active":""}`,disabled:r,onClick:()=>n(o.id),children:o.name})},o.id))})}function Tf({rooms:e,activeRoomId:t,onChange:n,disabled:r=!1,variant:i="dropdown"}){const[a,o]=b.useState(!1),l=b.useRef(null),c=e.find(u=>u.id===t)||e[0];return b.useEffect(()=>{if(!a||i!=="dropdown")return;const u=m=>{const f=typeof m.composedPath=="function"?m.composedPath():[m.target];l.current&&f.includes(l.current)||o(!1)},d=m=>{m.key==="Escape"&&o(!1)};return document.addEventListener("mousedown",u),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u),document.removeEventListener("keydown",d)}},[a,i]),!c||e.length<=1?null:i==="sidebar"?s.jsxs("nav",{className:"tm-room-sidebar","aria-label":"Räume",children:[s.jsx("p",{className:"tm-room-sidebar-title",children:"Räume"}),s.jsx(Cf,{rooms:e,activeRoomId:t,onChange:n,disabled:r,className:"tm-room-sidebar-list",optionClassName:"tm-room-sidebar-option"})]}):s.jsxs("div",{className:"tm-room-selector",ref:l,children:[s.jsxs("button",{type:"button",className:"tm-room-selector-trigger",onClick:()=>o(u=>!u),disabled:r,"aria-haspopup":"listbox","aria-expanded":a,"aria-label":"Raum wechseln",children:[s.jsx("span",{className:"tm-room-selector-label",children:c.name}),s.jsx(ps,{size:18,className:`tm-room-selector-chevron${a?" open":""}`})]}),a&&s.jsx(Cf,{rooms:e,activeRoomId:t,onChange:u=>{n(u),o(!1)},disabled:r,className:"tm-room-selector-menu",optionClassName:"tm-room-selector-option"})]})}function MC({user:e,onSettings:t,onScreensaver:n}){var tt,Te,Ln;const[r,i]=b.useState(new Date),[a,o]=b.useState(null),[l,c]=b.useState(!1),[u,d]=b.useState(0),[m,f]=b.useState(null),[g,v]=b.useState(!1),[x,w]=b.useState(!1),{hass:y,getEntity:p}=We(),{config:h,activeRoom:k,activeRoomId:N,setActiveRoomId:E,updateWidget:C,moveWidget:j,resizeWidget:z,applyWidgetSize:T,addWidget:D,addWidgetAt:U,removeWidget:J,applyLayoutPreset:Z,addLayoutPage:se,removeLayoutPage:be,moveLayoutPage:H,renameLayoutPage:R}=ke(),M=b.useCallback(()=>o(null),[]),L=((tt=k==null?void 0:k.layout)==null?void 0:tt.pages)||[];b.useEffect(()=>{d(0)},[N]),b.useEffect(()=>{const W=setInterval(()=>i(new Date),1e3);return()=>clearInterval(W)},[]),b.useEffect(()=>{l||(f(null),v(!1))},[l]),b.useEffect(()=>{u>=L.length&&d(Math.max(0,L.length-1))},[u,L.length]);const S=b.useCallback(W=>{be(W),d(ne=>ne>W?ne-1:ne===W?Math.max(0,W-1):ne)},[be]),A=b.useCallback((W,ne)=>{H(W,ne),d(ge=>ge===W?ne:W<ge&&ne>=ge?ge-1:W>ge&&ne<=ge?ge+1:ge)},[H]),P=b.useCallback(()=>{const W=L.length;se(),d(W)},[se,L.length]),I=((Ln=(Te=L[u])==null?void 0:Te.widgets)==null?void 0:Ln.find(W=>W.id===m))||null,B=h.presence.map(W=>{const ne=p(W.entity_id);return{...W,entity:ne,name:W.label||ne.name}}).filter(W=>W.entity.state==="home"),G=()=>c(!1),K=g||x,he=h.roomSidebar&&h.rooms.length>1;return s.jsxs("div",{className:`tm-dashboard${l?" tm-dashboard--edit":""}${he?" tm-dashboard--room-sidebar":""}${a||g||x?" tm-dashboard--modal-open":""}`,children:[he&&s.jsx(Tf,{variant:"sidebar",rooms:h.rooms,activeRoomId:N,onChange:E,disabled:K}),s.jsxs("div",{className:"tm-dashboard-main",children:[s.jsxs("header",{className:"tm-dashboard-header",children:[s.jsxs("div",{className:"tm-flex-col",children:[s.jsxs("div",{className:"tm-dashboard-title-row",children:[s.jsx("h1",{className:"tm-title-xl",style:l?void 0:{textShadow:"0 2px 4px rgba(0,0,0,0.5)"},children:l?"Dashboard bearbeiten":s.jsxs(s.Fragment,{children:["Guten Tag, ",s.jsx("span",{className:"tm-font-bold",children:e.name})]})}),!he&&s.jsx(Tf,{rooms:h.rooms,activeRoomId:N,onChange:E,disabled:K})]}),s.jsx("p",{className:"tm-text-sm tm-opacity-70",style:l?void 0:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:l?"Leere Felder antippen oder Widgets ziehen und skalieren":yt(r,"EEEE, d. MMMM yyyy",{locale:Yn})})]}),s.jsxs("div",{className:"tm-dashboard-header-right",children:[!l&&s.jsx("div",{className:"tm-clock-lg",children:yt(r,"HH:mm")}),s.jsx("button",{type:"button",onClick:()=>c(W=>!W),className:`tm-btn-round${l?" active":""}`,"aria-label":l?"Bearbeitung beenden":"Dashboard bearbeiten",children:s.jsx(EA,{size:22})}),!l&&s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",onClick:t,className:"tm-btn-round","aria-label":"Einstellungen",children:s.jsx(oa,{size:24})}),s.jsx("button",{type:"button",onClick:n,className:"tm-btn-round","aria-label":"Bildschirmschoner",children:s.jsx(T0,{size:24})})]})]}),!l&&B.length>0&&s.jsx("div",{className:"tm-dashboard-header-presence tm-flex-center tm-gap-3",children:B.map(W=>{var ne;return s.jsxs("div",{className:"tm-presence-chip",children:[s.jsx("div",{className:"tm-avatar-sm",children:(ne=W.entity.attributes)!=null&&ne.entity_picture?s.jsx("img",{src:Qr(y,W.entity.attributes.entity_picture),alt:W.name,className:"tm-avatar-img"}):s.jsx("span",{className:"tm-font-bold tm-text-xs",children:W.name[0]})}),s.jsx("span",{className:"tm-font-bold tm-text-sm tm-opacity-90",children:W.name})]},W.entity_id)})})]}),s.jsxs("div",{className:"tm-dashboard-body",children:[s.jsx(oj,{activePageIndex:u,onPageChange:d,editMode:l,pagesMeta:L,onOpenPageManage:()=>v(!0),children:L.map((W,ne)=>s.jsx(rC,{page:W,pageIndex:ne,editMode:l,selectedWidgetId:m,onSelectWidget:f,onMoveWidget:j,onResizeWidget:z,hass:y,getEntity:p,onOpenPopup:o,onUpdateWidget:C,onAddWidgetAt:U,onSlotPickerOpenChange:w},W.id))}),l&&s.jsx(PC,{activePageIndex:u,selectedWidget:I,onDone:G,onApplyPreset:Z,onAddWidget:D,onUpdateWidget:C,onDeleteWidget:J,onApplySize:T,hass:y})]}),g&&l&&s.jsx(cj,{pages:L,activePageIndex:u,onClose:()=>v(!1),onSelectPage:W=>{d(W),v(!1)},onAddPage:P,onRemovePage:S,onMovePage:A,onRenamePage:R}),a&&!l&&(a.variant==="cover"?s.jsx(Kj,{data:a,hass:y,getEntity:p,onClose:M}):s.jsx(Bj,{data:a,hass:y,onClose:M}))]})]})}const zC=[{area_id:"wohnzimmer",name:"Wohnzimmer"},{area_id:"kueche",name:"Küche"},{area_id:"schlafzimmer",name:"Schlafzimmer"},{area_id:"bad",name:"Bad"},{area_id:"buero",name:"Büro"},{area_id:"flur",name:"Flur"}];async function LC(e){var t;if(nr(e))return[...zC];if(!((t=e==null?void 0:e.connection)!=null&&t.sendMessagePromise))return[];try{return(await e.connection.sendMessagePromise({type:"config/area_registry/list"})||[]).sort((r,i)=>r.name.localeCompare(i.name,"de"))}catch(n){return console.warn("The Monitor: Bereiche konnten nicht geladen werden",n),[]}}function OC(){const{config:e,addRoom:t,removeRoom:n,renameRoom:r,addRoomFromHaArea:i,updateDisplay:a}=ke(),{hass:o,isConnected:l,revision:c}=We(),[u,d]=b.useState([]),[m,f]=b.useState(""),[g,v]=b.useState(!1);b.useEffect(()=>{let h=!1;return v(!0),LC(o).then(k=>{h||d(k)}).finally(()=>{h||v(!1)}),()=>{h=!0}},[o,l,c]);const x=new Set(e.rooms.map(h=>h.areaId).filter(Boolean)),w=u.filter(h=>!x.has(h.area_id)),y=e.rooms.length<Qi,p=()=>{const h=m.trim();!h||!y||(t(h),f(""))};return s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Räume"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",style:{lineHeight:1.5},children:"Jeder Raum hat ein eigenes Dashboard-Layout. Im Dashboard wechselst du zwischen den Räumen — per Dropdown oben oder als feste Sidebar links."}),e.rooms.length>1&&s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:e.roomSidebar,onChange:h=>a({roomSidebar:h.target.checked})}),s.jsx("span",{children:"Räume als feste Sidebar anzeigen"})]}),s.jsx("div",{className:"tm-room-config-list",children:e.rooms.map(h=>s.jsxs("div",{className:"tm-room-config-row",children:[s.jsx("input",{className:"tm-input tm-room-config-name",type:"text",value:h.name,onChange:k=>r(h.id,k.target.value),"aria-label":`Name für ${h.name}`}),e.rooms.length>1&&s.jsx("button",{type:"button",className:"tm-btn-secondary tm-room-config-remove",onClick:()=>n(h.id),children:"Entfernen"})]},h.id))}),y&&s.jsxs("div",{className:"tm-room-config-add",children:[s.jsx("input",{className:"tm-input",type:"text",value:m,onChange:h=>f(h.target.value),placeholder:"Neuer Raum …",onKeyDown:h=>{h.key==="Enter"&&p()}}),s.jsxs("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:p,disabled:!m.trim(),children:[s.jsx(st,{size:16}),"Raum hinzufügen"]})]}),!y&&s.jsxs("p",{className:"tm-text-sm tm-opacity-70",children:["Maximal ",Qi," Räume."]})]}),l&&s.jsxs("div",{className:"tm-setting-group",style:{marginTop:"1rem"},children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",style:{marginBottom:"0.75rem"},children:g?"Bereiche aus Home Assistant werden geladen …":w.length?"Bereiche aus Home Assistant — antippen zum Hinzufügen:":u.length?"Alle Home-Assistant-Bereiche sind bereits als Raum angelegt.":"Keine Bereiche in Home Assistant gefunden."}),w.length>0&&s.jsx("div",{className:"tm-room-suggestions",children:w.map(h=>s.jsxs("button",{type:"button",className:"tm-room-suggestion-chip",disabled:!y,onClick:()=>i(h),children:[s.jsx(st,{size:14}),h.name]},h.area_id))})]})]})}const il={presence:["person"],vacuum:["vacuum"],windows:["cover","binary_sensor"]};function IC({title:e,entityId:t,section:n,domains:r,onSet:i}){return s.jsxs("div",{className:"tm-config-slot",children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",children:e}),s.jsx(nt,{value:t,onChange:a=>i(n,a),domains:r,placeholder:"Entität wählen…"})]})}function RC(){var o;const{config:e,setSingleEntity:t,addPresence:n,removePresence:r,addWindow:i,removeWindow:a}=ke();return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[s.jsx(OC,{}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Dashboard-Layout"}),s.jsx("div",{className:"tm-setting-group",children:s.jsxs("p",{className:"tm-text-sm tm-opacity-70",style:{lineHeight:1.5},children:["Widgets, Größen und Positionen bearbeitest du direkt im Dashboard über den"," ",s.jsx("strong",{children:"Stift-Button"})," ","oben rechts. Dort findest du auch Layout-Vorlagen."]})})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Saugroboter"}),s.jsx(IC,{title:"Status-Island",entityId:((o=e.vacuum)==null?void 0:o.entity_id)||"",section:"vacuum",domains:il.vacuum,onSet:t})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"E-Auto"}),s.jsx("p",{style:{fontSize:"0.875rem",opacity:.6,marginBottom:"0.75rem",lineHeight:1.5},children:"Für die E-Auto-Kachel und die grüne Lade-Notification. Leere Felder werden bei evcc automatisch erkannt."}),s.jsx(ry,{})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Fenster (Status-Island)"}),s.jsx("p",{style:{fontSize:"0.875rem",opacity:.6,marginBottom:"0.75rem",lineHeight:1.5},children:"Die weiße Notification erscheint automatisch, wenn ein Fenster offen ist, sich öffnet oder schließt — ohne Automation."}),s.jsx(nt,{value:"",onChange:l=>{l&&e.windows.length<ie.windows&&i(l)},domains:il.windows,placeholder:"Fenster / Kontakt hinzufügen …"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginTop:"0.75rem"},children:e.windows.map(l=>s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{padding:"0.5rem 0.75rem",background:"rgba(255,255,255,0.05)",borderRadius:"0.5rem"},children:[s.jsx("span",{children:l.label||l.entity_id}),s.jsx("button",{type:"button",className:"tm-btn-secondary",style:{padding:"0.25rem 0.75rem",minHeight:"auto",fontSize:"0.75rem"},onClick:()=>a(l.entity_id),children:"Entfernen"})]},l.entity_id))})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Anwesenheit"}),s.jsx(nt,{value:"",onChange:l=>{l&&e.presence.length<ie.presence&&n(l)},domains:il.presence,placeholder:"Person hinzufügen…"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginTop:"0.75rem"},children:e.presence.map(l=>s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{padding:"0.5rem 0.75rem",background:"rgba(255,255,255,0.05)",borderRadius:"0.5rem"},children:[s.jsx("span",{children:l.label||l.entity_id}),s.jsx("button",{type:"button",className:"tm-btn-secondary",style:{padding:"0.25rem 0.75rem",minHeight:"auto",fontSize:"0.75rem"},onClick:()=>r(l.entity_id),children:"Entfernen"})]},l.entity_id))})]})]})}function DC({onBack:e}){const[t,n]=b.useState(80),[r,i]=b.useState(60),[a,o]=b.useState("display"),{exportToJson:l,importFromJson:c,config:u,updateScreensaver:d,updateAppearance:m}=ke(),{isConnected:f,isMock:g,isEmbedded:v,isConnecting:x,connectionError:w,connect:y,login:p,disconnect:h,states:k}=We(),N=b.useRef(null),E=Object.keys(k).length,[C,j]=b.useState(Po),[z,T]=b.useState(""),[D,U]=b.useState(!1);b.useEffect(()=>{j(Po())},[f]);const J=()=>{C.trim()&&p(C.trim())},Z=async()=>{if(!(!C.trim()||!z.trim()))try{await y(C.trim(),z.trim()),T("")}catch{}},se=()=>{const H=new Blob([l()],{type:"application/json"}),R=URL.createObjectURL(H),M=document.createElement("a");M.href=R,M.download="the-monitor-config.json",M.click(),URL.revokeObjectURL(R)},be=H=>{var L;const R=(L=H.target.files)==null?void 0:L[0];if(!R)return;const M=new FileReader;M.onload=()=>{c(M.result)||alert("Import fehlgeschlagen – ungültige JSON-Datei.")},M.readAsText(R),H.target.value=""};return s.jsxs("div",{className:"tm-settings-panel",style:{height:"100%",display:"flex",flexDirection:"column",backdropFilter:"blur(12px)",padding:"2rem"},children:[s.jsxs("div",{className:"tm-flex-row tm-items-center tm-gap-6",style:{marginBottom:"1.5rem",flexShrink:0},children:[s.jsx("button",{type:"button",onClick:e,className:"tm-btn-round","aria-label":"Zurück",children:s.jsx(rA,{size:32})}),s.jsx("h2",{className:"tm-title-xl",children:"Einstellungen"})]}),s.jsxs("div",{className:"tm-flex-row tm-gap-3",style:{marginBottom:"1.5rem",flexShrink:0},children:[s.jsx("button",{type:"button",className:"tm-btn-secondary",style:{background:a==="display"?"rgba(var(--tm-accent-rgb), 0.4)":void 0},onClick:()=>o("display"),children:"Bildschirm & Ton"}),s.jsx("button",{type:"button",className:"tm-btn-secondary",style:{background:a==="dashboard"?"rgba(var(--tm-accent-rgb), 0.4)":void 0},onClick:()=>o("dashboard"),children:"Dashboard & Insel"})]}),s.jsxs("div",{className:"tm-settings-scroll",children:[a==="display"&&s.jsxs("div",{className:"tm-settings-layout",children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Bildschirm & Ton"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(Ji,{size:24}),s.jsx("span",{children:"Helligkeit"})]}),s.jsxs("span",{children:[t,"%"]})]}),s.jsx("input",{type:"range",min:"0",max:"100",value:t,onChange:H=>n(H.target.value),className:"tm-range"})]}),s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(I0,{size:24}),s.jsx("span",{children:"Lautstärke"})]}),s.jsxs("span",{children:[r,"%"]})]}),s.jsx("input",{type:"range",min:"0",max:"100",value:r,onChange:H=>i(H.target.value),className:"tm-range"})]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Farbset"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(rd,{size:24}),s.jsx("span",{children:"Darstellung"})]}),s.jsx("div",{className:"tm-color-mode-row",children:Object.values(bN).map(H=>s.jsx("button",{type:"button",className:`tm-color-mode-btn${u.appearance.mode===H.id?" active":""}`,onClick:()=>m({mode:H.id}),children:H.label},H.id))})]}),s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsx("span",{className:"tm-text-sm tm-opacity-70",children:u.appearance.mode==="colorful"?"Wähle eine Farbe – alles wird in abstufenden Tönen dargestellt:":u.appearance.mode==="blackColorful"?"Pastell-Karten auf schwarzem Hintergrund – jede Kachel bekommt eine eigene Farbe.":"Farbwahl gilt nur im Bunt-Modus."}),s.jsx("div",{className:"tm-color-set-grid",children:Do.map(H=>s.jsxs("button",{type:"button",className:`tm-color-set-btn${u.appearance.colorSet===H.id?" active":""}`,disabled:u.appearance.mode!=="colorful",onClick:()=>m({colorSet:H.id}),children:[s.jsx("span",{className:"tm-color-set-swatch",style:{background:H.preview}}),s.jsx("span",{className:"tm-color-set-label",children:H.label})]},H.id))})]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Bildschirmschoner"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:u.screensaver.enabled,onChange:H=>d({enabled:H.target.checked})}),s.jsx("span",{children:"Automatisch nach Inaktivität"})]}),u.screensaver.enabled&&s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(T0,{size:24}),s.jsx("span",{children:"Wartezeit"})]}),s.jsxs("span",{children:[u.screensaver.idleMinutes," ",u.screensaver.idleMinutes===1?"Minute":"Minuten"]})]}),s.jsx("input",{type:"range",className:"tm-range",min:"1",max:"30",step:"1",value:u.screensaver.idleMinutes,onChange:H=>d({idleMinutes:Number(H.target.value)})})]}),s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsx("span",{children:"Stil"}),s.jsxs("div",{className:"tm-color-mode-row",children:[s.jsx("button",{type:"button",className:`tm-color-mode-btn${u.screensaver.style!=="sexy"?" active":""}`,onClick:()=>d({style:"classic"}),children:"Klassisch"}),s.jsx("button",{type:"button",className:`tm-color-mode-btn${u.screensaver.style==="sexy"?" active":""}`,onClick:()=>d({style:"sexy"}),children:"Sexy"})]})]}),s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:u.screensaver.showDate,onChange:H=>d({showDate:H.target.checked})}),s.jsx("span",{children:"Datum anzeigen"})]}),s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:u.screensaver.showWeather,onChange:H=>d({showWeather:H.target.checked})}),s.jsx("span",{children:"Wetter anzeigen"})]}),s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:u.screensaver.style==="sexy"?"Sexy zeigt ein großes Foto mit Uhrzeit und darunter eine schmale Leiste mit Wetter, Musik und Status.":"Der Bildschirmschoner lässt sich jederzeit manuell über das Monitor-Symbol im Dashboard starten."})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Home Assistant"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(R0,{size:24}),s.jsx("span",{children:"Verbindung"})]}),s.jsx("span",{style:{color:f?"#4ade80":g?"#fbbf24":"#f87171"},children:f?v?`Verbunden (${E} Entitäten)`:`Verbunden (${E} Entitäten)`:g?"Demo-Modus":x?"Verbinde…":"Nicht verbunden"})]}),v?s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:"Änderungen werden automatisch im Home-Assistant-Dashboard gespeichert und gelten auf allen Geräten (iPad, Mac, Wanddisplay)."}),s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:"Die Home-Assistant-Seitenleiste und die obere Leiste bleiben erreichbar."})]}):s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:f?"Verbunden mit deiner Home-Assistant-Instanz. Entitäten kannst du unter „Dashboard konfigurieren“ zuweisen.":"Als Panel in Home Assistant eingebunden bist du automatisch verbunden. Im Browser oder auf dem Tablet: URL eintragen und anmelden."}),!f&&s.jsxs(s.Fragment,{children:[s.jsxs("label",{className:"tm-flex-col tm-gap-2",children:[s.jsx("span",{className:"tm-text-sm tm-opacity-70",children:"Home Assistant URL"}),s.jsx("input",{type:"url",className:"tm-input",value:C,onChange:H=>j(H.target.value),placeholder:"http://homeassistant.local:8123"})]}),s.jsxs("button",{type:"button",className:"tm-btn-primary tm-flex-center tm-gap-2",onClick:J,disabled:x||!C.trim(),children:[x?s.jsx(xA,{size:18,className:"tm-spin"}):s.jsx(kA,{size:18}),"Bei Home Assistant anmelden"]}),s.jsx("button",{type:"button",className:"tm-btn-secondary",onClick:()=>U(H=>!H),children:D?"Token-Login ausblenden":"Alternativ: Mit Zugriffstoken verbinden"}),D&&s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:"Erstelle unter Home Assistant → Profil → Sicherheit → Langzeit-Zugriffstoken einen Token und füge ihn hier ein."}),s.jsxs("label",{className:"tm-flex-col tm-gap-2",children:[s.jsx("span",{className:"tm-text-sm tm-opacity-70",children:"Zugriffstoken"}),s.jsx("input",{type:"password",className:"tm-input",value:z,onChange:H=>T(H.target.value),placeholder:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9…",autoComplete:"off"})]}),s.jsx("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:Z,disabled:x||!C.trim()||!z.trim(),children:"Mit Token verbinden"})]})]}),f&&!v&&s.jsxs("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:h,disabled:x,children:[s.jsx(zA,{size:18})," Verbindung trennen"]}),w&&s.jsx("p",{className:"tm-text-sm",style:{color:"#f87171"},children:w})]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Konfiguration sichern"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:"Exportiere die Dashboard-Konfiguration als JSON-Backup oder importiere eine gespeicherte Konfiguration."}),s.jsxs("div",{className:"tm-flex-row tm-gap-3",children:[s.jsxs("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:se,children:[s.jsx(fA,{size:18})," Exportieren"]}),s.jsxs("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:()=>{var H;return(H=N.current)==null?void 0:H.click()},children:[s.jsx(LA,{size:18})," Importieren"]}),s.jsx("input",{ref:N,type:"file",accept:".json",style:{display:"none"},onChange:be})]})]})]})]}),a==="dashboard"&&s.jsx(RC,{})]}),s.jsx("div",{style:{marginTop:"auto",textAlign:"center",opacity:.2,fontSize:"0.875rem",flexShrink:0,paddingTop:"1rem"},children:"The Monitor v0.1.0"})]})}const wc="vacuum.roborock",FC=15*60*1e3,_C={id:wc,name:"Roborock",state:"cleaning",attributes:{status:"Reinigt Wohnzimmer …",battery_level:78},domain:"vacuum"};function Pf({size:e=24}){return s.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"16",cy:"16",r:"14",fill:"#1a1a1a"}),s.jsx("circle",{cx:"16",cy:"16",r:"10",fill:"#2d2d2d"}),s.jsx("circle",{cx:"16",cy:"16",r:"4",fill:"#444"}),s.jsx("circle",{cx:"22",cy:"10",r:"2",fill:"#ff6b2b"})]})}function WC({progress:e,size:t=36,stroke:n=3,className:r=""}){const i=(t-n)/2,a=2*Math.PI*i,o=a-e/100*a;return s.jsxs("svg",{width:t,height:t,className:`tm-vi-ring ${r}`.trim(),"aria-hidden":"true",children:[s.jsx("circle",{cx:t/2,cy:t/2,r:i,fill:"none",stroke:"var(--tm-vi-track)",strokeWidth:n}),s.jsx("circle",{cx:t/2,cy:t/2,r:i,fill:"none",stroke:"var(--tm-vi-accent)",strokeWidth:n,strokeLinecap:"round",strokeDasharray:a,strokeDashoffset:o,transform:`rotate(-90 ${t/2} ${t/2})`})]})}const Ra=b.memo(WC);function BC({window:e,onClose:t,overdue:n=!1}){const r=e.domain==="cover"&&["open","opening"].includes(e.state);return s.jsxs("div",{className:`tm-vi-window-row${n?" tm-vi-window-row-overdue":""}`,children:[s.jsxs("div",{className:"tm-vi-window-info",children:[s.jsx("span",{className:"tm-vi-window-name",children:e.label}),s.jsx("span",{className:"tm-vi-window-state",children:rg(e)})]}),r&&s.jsx("button",{type:"button",className:"tm-vi-btn tm-vi-btn-close",onClick:i=>{i.stopPropagation(),t(e.id)},"aria-label":`${e.label} schließen`,children:s.jsx(Ke,{size:16})})]})}function HC(){var Te,Ln;const{hass:e,revision:t,getEntity:n,isMock:r}=We(),{config:i}=ke(),[a,o]=b.useState(!1),[l]=b.useState(()=>Date.now()),[c,u]=b.useState(0),d=b.useRef(new Map),m=Dx(e,(Te=i.vacuum)==null?void 0:Te.entity_id,r,wc)||wc,f=n(m),g=(f.state==="unavailable"||!f.id)&&r?_C:f,v=Ix(g.state,g.attributes),x=ra(i,null,r),w=xg(i,r),p=h2(e,i,null,r)&&Pu(e,x,r),h=kg(e,w,r?67:null),k=b.useMemo(()=>Ux(e,i.windows),[e,i.windows,t]),N=k.length>0,E=v,C=p,j=C?wg(e,i,r):null,z=zu(j),T=E||N||C,D=b.useMemo(()=>k.filter(Hx),[k]);b.useEffect(()=>{const W=Date.now(),ne=new Set(D.map(ge=>ge.id));for(const ge of D)d.current.has(ge.id)||d.current.set(ge.id,ge.lastChanged||W);for(const ge of[...d.current.keys()])ne.has(ge)||d.current.delete(ge)},[D]);const U=b.useMemo(()=>{const W=Date.now(),ne=new Set;for(const ge of D){const la=d.current.get(ge.id);la&&W-la>=FC&&ne.add(ge.id)}return ne},[D,c]),J=U.size>0;b.useEffect(()=>{T||o(!1)},[T]),b.useEffect(()=>{const W=setInterval(()=>u(ne=>ne+1),1e3);return()=>clearInterval(W)},[]);const Z=l?Math.floor((Date.now()-l)/1e3):0,se=b.useMemo(()=>_x(g,Z),[g,Z,c,t]),be=Fx(g),H=N2(i),R=Yx(k),M=Wx(Z),L=b.useMemo(()=>{const W=[];C&&W.push(h!=null?`${H} · ${h}%`:H),N&&W.push(R),E&&W.push(be);let ne=W.join(" · ");return J&&N&&(ne=`⚠ ${ne}`),ne},[C,H,h,N,R,E,be,J]),S=b.useCallback(()=>{o(W=>!W)},[]),A=b.useCallback(()=>{o(!1)},[]),P=b.useCallback(W=>{W.stopPropagation(),nw(e,m)},[e,m]),I=b.useCallback(W=>{W.stopPropagation(),rw(e,m)},[e,m]),B=b.useCallback(W=>{ku(e,W)},[e]);if(!T)return null;const G=C?A2(i,h,j):J&&N?U.size===1?`${((Ln=D.find(W=>U.has(W.id)))==null?void 0:Ln.label)||"Fenster"} seit über 15 Min. offen`:`${U.size} Fenster seit über 15 Min. offen`:N&&E?"Fenster und Sauger sind aktiv":N?k.length===1?`${k[0].label} — ${rg(k[0])}`:`${k.length} Fenster brauchen Aufmerksamkeit`:`${g.name} reinigt dein Zuhause …`,K=C?" tm-vi-ev-alert":J?" tm-vi-window-alert":"",he=C?" tm-vi-thumb-ev-alert":J?" tm-vi-thumb-alert":"",tt=C?" tm-vi-text-ev-alert":J?" tm-vi-text-alert":"";return s.jsxs(s.Fragment,{children:[a&&s.jsx("button",{type:"button",className:"tm-vi-backdrop",onClick:A,"aria-label":"Einklappen"}),s.jsx("div",{className:"tm-vi-wrap",children:s.jsxs("button",{type:"button",className:`tm-vi${a?" tm-vi-expanded":""}${K}`,onClick:S,"aria-expanded":a,"aria-label":L,children:[s.jsxs("div",{className:"tm-vi-bar",children:[s.jsx("span",{className:`tm-vi-thumb${he}`,children:C?s.jsx(gc,{size:22,strokeWidth:2.25}):N?s.jsx(aa,{size:22,strokeWidth:2.25}):s.jsx(Pf,{size:28})}),s.jsx("span",{className:`tm-vi-text${tt}`,children:L}),C?s.jsx("span",{className:"tm-vi-ring-wrap tm-vi-ring-wrap-sm tm-vi-ring-ev",children:s.jsx(Ra,{progress:h??0,size:36,className:"tm-vi-ring-sm"})}):E?s.jsx("span",{className:"tm-vi-ring-wrap tm-vi-ring-wrap-sm",children:s.jsx(Ra,{progress:se,size:36,className:"tm-vi-ring-sm"})}):s.jsx("span",{className:`tm-vi-badge${J?" tm-vi-badge-alert":""}`,children:k.length})]}),s.jsx("div",{className:"tm-vi-detail",children:s.jsxs("div",{className:"tm-vi-detail-inner",children:[s.jsx("p",{className:"tm-vi-subtitle",children:G}),N&&s.jsx("div",{className:"tm-vi-window-list",children:k.map(W=>s.jsx(BC,{window:W,onClose:B,overdue:U.has(W.id)},W.id))}),C&&s.jsxs("div",{className:"tm-vi-body",children:[s.jsxs("div",{className:"tm-vi-ev-metrics",children:[s.jsxs("div",{className:"tm-vi-timer-block",children:[s.jsx("span",{className:"tm-vi-timer-label",children:"Ladeleistung"}),s.jsx("span",{className:"tm-vi-timer-value tm-vi-timer-value-ev",children:z})]}),s.jsxs("div",{className:"tm-vi-timer-block",children:[s.jsx("span",{className:"tm-vi-timer-label",children:"Akku"}),s.jsx("span",{className:"tm-vi-timer-value tm-vi-timer-value-ev tm-vi-timer-value-secondary",children:h!=null?`${h}%`:"—"})]})]}),s.jsx("div",{className:"tm-vi-progress-block",children:s.jsxs("div",{className:"tm-vi-progress-ring-lg tm-vi-ring-ev",children:[s.jsx(Ra,{progress:h??0,size:88,stroke:5,className:"tm-vi-ring-lg"}),s.jsx("span",{className:"tm-vi-progress-icon",children:s.jsx(gc,{size:44,strokeWidth:2})})]})})]}),E&&s.jsxs("div",{className:"tm-vi-body",children:[s.jsxs("div",{className:"tm-vi-timer-block",children:[s.jsx("span",{className:"tm-vi-timer-label",children:"Timer"}),s.jsx("span",{className:"tm-vi-timer-value",children:M})]}),s.jsx("div",{className:"tm-vi-progress-block",children:s.jsxs("div",{className:"tm-vi-progress-ring-lg",children:[s.jsx(Ra,{progress:se,size:88,stroke:5,className:"tm-vi-ring-lg"}),s.jsx("span",{className:"tm-vi-progress-icon",children:s.jsx(Pf,{size:48})})]})})]}),s.jsxs("div",{className:"tm-vi-footer",children:[E?s.jsxs("div",{className:"tm-vi-actions",children:[s.jsx("button",{type:"button",className:"tm-vi-btn tm-vi-btn-pause",onClick:P,"aria-label":"Pausieren",children:s.jsx(id,{size:18,fill:"currentColor"})}),s.jsx("button",{type:"button",className:"tm-vi-btn tm-vi-btn-stop",onClick:I,"aria-label":"Zur Basis",children:s.jsx(Ke,{size:18})})]}):s.jsx("span",{}),s.jsxs("span",{className:"tm-vi-open",children:["Dashboard",s.jsx(sA,{size:16})]})]})]})})]})})]})}const qC={id:0,name:"Zuhause",color:"#6366f1"};function iy(){var u,d;const{config:e}=ke(),t=b.useMemo(()=>ON(e.appearance),[e.appearance]),n=((u=e.appearance)==null?void 0:u.mode)!=="light"&&((d=e.appearance)==null?void 0:d.mode)!=="blackColorful",[r,i]=b.useState("dashboard"),[a]=b.useState(qC),[o,l]=b.useState(Date.now()),c=b.useCallback(()=>{l(Date.now()),r==="screensaver"&&i("dashboard")},[r]);return b.useEffect(()=>{if(!e.screensaver.enabled)return;const m=()=>c(),f=e.screensaver.idleMinutes*60*1e3;window.addEventListener("mousemove",m),window.addEventListener("touchstart",m),window.addEventListener("click",m),window.addEventListener("keydown",m);const g=setInterval(()=>{Date.now()-o>f&&r!=="screensaver"&&r!=="settings"&&i("screensaver")},1e3);return()=>{window.removeEventListener("mousemove",m),window.removeEventListener("touchstart",m),window.removeEventListener("click",m),window.removeEventListener("keydown",m),clearInterval(g)}},[o,r,c,e.screensaver.enabled,e.screensaver.idleMinutes]),s.jsxs("div",{className:"tm-full-screen",...t,children:[n&&s.jsx("div",{className:"tm-absolute-fill tm-z-0 tm-bg-cover",style:{backgroundImage:`url("${e.backgroundImage}")`,opacity:"var(--tm-bg-image-opacity)"}}),s.jsx("div",{className:"tm-absolute-fill tm-z-0 tm-overlay-gradient"}),s.jsxs("div",{className:"tm-absolute-fill tm-z-10",children:[r==="dashboard"&&s.jsx(HC,{}),r==="screensaver"&&s.jsx(aj,{}),r==="dashboard"&&s.jsx("div",{className:"tm-full-screen tm-animate-fade",children:s.jsx(MC,{user:a,onSettings:()=>i("settings"),onScreensaver:()=>i("screensaver")})}),r==="settings"&&s.jsx("div",{className:"tm-full-screen tm-animate-fade",children:s.jsx(DC,{onBack:()=>i("dashboard")})})]})]})}const ay=`
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
`,UC=`
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
`,YC=`
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
`,oy="custom:the-monitor-dashboard";function KC(){const e=window.location.pathname.match(/^\/([^/]+)\/\d+/);return(e==null?void 0:e[1])??"the-monitor"}function VC(e){var r;const t=Ee(e),n=(r=t.rooms)==null?void 0:r[0];return{type:oy,rooms:t.rooms,layout:n==null?void 0:n.layout,layoutPreset:n==null?void 0:n.layoutPreset,vacuum:t.vacuum,ev:t.ev,windows:t.windows,presence:t.presence,backgroundImage:t.backgroundImage,screensaver:t.screensaver,appearance:t.appearance}}function GC(e,t){var a;if(!((a=e==null?void 0:e.views)!=null&&a.length))return null;const n=e.views.map(o=>{var l;return{...o,cards:((l=o.cards)==null?void 0:l.map(c=>(c==null?void 0:c.type)===oy?{...t}:c))??o.cards}}),{kiosk_mode:r,...i}=e;return{...i,views:n}}async function QC(e,t){var i;if(!((i=e==null?void 0:e.connection)!=null&&i.sendMessagePromise))return!1;const n=KC(),r=VC(t);try{const a=await e.connection.sendMessagePromise({type:"lovelace/config",url_path:n,force:!1}),o=GC(a,r);return o?(await e.connection.sendMessagePromise({type:"lovelace/config/save",url_path:n,config:o}),!0):(console.warn("The Monitor: refused to persist — dashboard config invalid"),!1)}catch(a){return console.warn("The Monitor: could not persist config to Lovelace",a),!1}}let al=null,Mf=Promise.resolve();function JC(e,t,n=1200){e!=null&&e.connection&&(al&&window.clearTimeout(al),al=window.setTimeout(()=>{Mf=Mf.then(()=>QC(e,t)).catch(()=>{})},n))}const zf="the-monitor-kiosk-cleared",XC=["kiosk","hide_header","hide_sidebar","hide_menubutton","hide_overflow","hide_settings","hide_notifications","hide_account","hide_search","hide_assistant","hide_refresh","hide_unused_entities","hide_reload_resources","hide_edit_dashboard","block_overflow","block_mouse","block_context_menu"];function ZC(){let e=!1;try{const t=[];for(let n=0;n<window.localStorage.length;n+=1){const r=window.localStorage.key(n);r&&t.push(r)}t.forEach(n=>{n.startsWith("km")&&(window.localStorage.removeItem(n),e=!0)})}catch{}return e}function $C(){const e=new URL(window.location.href);let t=!1;return XC.forEach(n=>{e.searchParams.has(n)&&(e.searchParams.delete(n),t=!0)}),t&&window.history.replaceState(window.history.state,"",`${e.pathname}${e.search}${e.hash}`),t}function e3(){if(typeof window>"u"||window.sessionStorage.getItem(zf)==="1")return;const e=ZC(),t=$C();window.sessionStorage.setItem(zf,"1"),(e||t)&&window.location.reload()}const _o="the-monitor",t3="The Monitor",Lf="the-monitor-sidebar-checked",n3={views:[{title:"Monitor",type:"panel",cards:[{type:"custom:the-monitor-dashboard"}]}]};function r3(e){return new Promise(t=>{window.setTimeout(t,e)})}function Ci(e,t){return typeof e.callWS=="function"?e.callWS(t):e.connection.sendMessagePromise(t)}async function i3(){var t,n;const e=Date.now()+2e4;for(;Date.now()<e;){const r=(t=document.querySelector("home-assistant"))==null?void 0:t.hass;if(r!=null&&r.user&&((n=r.connection)!=null&&n.sendMessagePromise))return r;await r3(300)}return null}function a3(e){const t=`${(e==null?void 0:e.message)||e}`;return/config_not_found|No config found/i.test(t)}async function o3(e){var t;try{const n=await Ci(e,{type:"lovelace/config",url_path:_o,force:!1});if((t=n==null?void 0:n.views)!=null&&t.length)return}catch(n){if(!a3(n))throw n}await Ci(e,{type:"lovelace/config/save",url_path:_o,config:n3})}async function s3(){var t;if(typeof window>"u"||typeof sessionStorage>"u"||document.getElementById("root")&&!document.querySelector("home-assistant")||sessionStorage.getItem(Lf)==="1")return;const e=await i3();if((t=e==null?void 0:e.user)!=null&&t.is_admin)try{const n=await Ci(e,{type:"lovelace/dashboards/list"}),r=(Array.isArray(n)?n:[]).find(i=>i.url_path===_o);r?r.show_in_sidebar===!1&&r.id&&await Ci(e,{type:"lovelace/dashboards/update",dashboard_id:r.id,show_in_sidebar:!0}):await Ci(e,{type:"lovelace/dashboards/create",url_path:_o,title:t3,icon:"mdi:monitor-dashboard",require_admin:!1,show_in_sidebar:!0}),await o3(e),sessionStorage.setItem(Lf,"1")}catch(n){console.warn("The Monitor: sidebar dashboard was not created",n)}}class l3 extends Ec.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t){console.error("The Monitor render error:",t)}render(){return this.state.error?s.jsxs("div",{className:"tm-full-screen tm-flex-col tm-flex-center",style:{padding:"2rem",textAlign:"center",gap:"1rem"},children:[s.jsx("h2",{className:"tm-title-xl",children:"The Monitor — Fehler"}),s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:this.state.error.message}),s.jsx("button",{type:"button",className:"tm-btn-secondary",onClick:()=>this.setState({error:null}),children:"Erneut versuchen"})]}):this.props.children}}const Of="the-monitor-dashboard";function kc(e,t){let n=document.getElementById(e);n||(n=document.createElement("style"),n.id=e,document.head.appendChild(n)),n.textContent=t}function c3(e){try{return of(e,{embedded:!0})}catch(t){return console.error("The Monitor: invalid config, using defaults",t),of({},{embedded:!0})}}function u3({initialConfig:e,onRegisterHassUpdate:t,onConfigSaved:n,enableMock:r=!1}){return s.jsx(bg,{onRegisterUpdate:t,enableMock:r,children:s.jsx(b0,{initialConfig:e,onConfigSaved:n,children:s.jsx(l3,{children:s.jsx(iy,{})})})})}class d3 extends HTMLElement{static getStubConfig(){return{}}static getGridOptions(){return{columns:48,rows:1}}getCardSize(){return 12}constructor(){super(),this._hass=null,this._config={},this._root=null,this._updateHass=null,this._shadow=null,this._mountPoint=null}setConfig(t){this._config=t||{},this._root&&this._renderApp()}_renderApp(){if(!this._root)return;const t=c3(this._config);try{this._root.render(s.jsx(Ec.StrictMode,{children:s.jsx(u3,{initialConfig:t,onRegisterHassUpdate:n=>{this._updateHass=n,this._hass&&n(this._hass)},onConfigSaved:n=>{this._hass&&JC(this._hass,n)}})}))}catch(n){console.error("The Monitor: render failed",n)}}set hass(t){var n;this._hass=t,(n=this._updateHass)==null||n.call(this,t)}connectedCallback(){if(e3(),kc("the-monitor-ha-shell",UC),kc("the-monitor-card-host",YC),!this._shadow){this._shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=ay,this._shadow.appendChild(t),this._mountPoint=document.createElement("div"),this._mountPoint.style.height="100%",this._mountPoint.style.width="100%",this._mountPoint.style.display="block",this._mountPoint.style.boxSizing="border-box",this._shadow.appendChild(this._mountPoint),sj(this._shadow)}this._root||(this._root=$a.createRoot(this._mountPoint)),this._renderApp()}disconnectedCallback(){var t;(t=document.getElementById("the-monitor-ha-shell"))==null||t.remove(),lj(this._shadow),this._updateHass=null,this._root&&(this._root.unmount(),this._root=null)}}try{customElements.get(Of)||customElements.define(Of,d3)}catch(e){console.error("Failed to register The Monitor dashboard:",e)}s3();const If=document.getElementById("root");If&&(kc("the-monitor-dev-styles",ay),$a.createRoot(If).render(s.jsx(Ec.StrictMode,{children:s.jsx(bg,{enableMock:!0,children:s.jsx(b0,{initialConfig:UN(),children:s.jsx(iy,{})})})})));
