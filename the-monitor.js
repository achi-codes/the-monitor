(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html,body,#root{height:100%;margin:0}#root{padding:0;font-family:system-ui,-apple-system,sans-serif;cursor:default}#root::-webkit-scrollbar{width:0px;background:transparent}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Q0=Object.defineProperty;var X0=(e,t,n)=>t in e?Q0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var dt=(e,t,n)=>X0(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function J0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cf={exports:{}},$o={},Ef={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),Z0=Symbol.for("react.portal"),ey=Symbol.for("react.fragment"),ty=Symbol.for("react.strict_mode"),ny=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),iy=Symbol.for("react.context"),ay=Symbol.for("react.forward_ref"),oy=Symbol.for("react.suspense"),sy=Symbol.for("react.memo"),ly=Symbol.for("react.lazy"),Zu=Symbol.iterator;function cy(e){return e===null||typeof e!="object"?null:(e=Zu&&e[Zu]||e["@@iterator"],typeof e=="function"?e:null)}var Tf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pf=Object.assign,Af={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=Af,this.updater=n||Tf}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mf(){}Mf.prototype=Kr.prototype;function bc(e,t,n){this.props=e,this.context=t,this.refs=Af,this.updater=n||Tf}var xc=bc.prototype=new Mf;xc.constructor=bc;Pf(xc,Kr.prototype);xc.isPureReactComponent=!0;var ed=Array.isArray,Lf=Object.prototype.hasOwnProperty,wc={current:null},zf={key:!0,ref:!0,__self:!0,__source:!0};function Of(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Lf.call(t,r)&&!zf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gi,type:e,key:a,ref:o,props:i,_owner:wc.current}}function uy(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function kc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function dy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var td=/\/+/g;function hs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dy(""+e.key):t.toString(36)}function La(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gi:case Z0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+hs(o,0):r,ed(i)?(n="",e!=null&&(n=e.replace(td,"$&/")+"/"),La(i,t,n,"",function(u){return u})):i!=null&&(kc(i)&&(i=uy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(td,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ed(e))for(var l=0;l<e.length;l++){a=e[l];var c=r+hs(a,l);o+=La(a,t,n,c,i)}else if(c=cy(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=r+hs(a,l++),o+=La(a,t,n,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function oa(e,t,n){if(e==null)return e;var r=[],i=0;return La(e,r,"","",function(a){return t.call(n,a,i++)}),r}function my(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},za={transition:null},fy={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:za,ReactCurrentOwner:wc};function $f(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:oa,forEach:function(e,t,n){oa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oa(e,function(){t++}),t},toArray:function(e){return oa(e,function(t){return t})||[]},only:function(e){if(!kc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Kr;X.Fragment=ey;X.Profiler=ny;X.PureComponent=bc;X.StrictMode=ty;X.Suspense=oy;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fy;X.act=$f;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pf({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=wc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Lf.call(t,c)&&!zf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Gi,type:e.type,key:i,ref:a,props:r,_owner:o}};X.createContext=function(e){return e={$$typeof:iy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ry,_context:e},e.Consumer=e};X.createElement=Of;X.createFactory=function(e){var t=Of.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:ay,render:e}};X.isValidElement=kc;X.lazy=function(e){return{$$typeof:ly,_payload:{_status:-1,_result:e},_init:my}};X.memo=function(e,t){return{$$typeof:sy,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=za.transition;za.transition={};try{e()}finally{za.transition=t}};X.unstable_act=$f;X.useCallback=function(e,t){return Ke.current.useCallback(e,t)};X.useContext=function(e){return Ke.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ke.current.useEffect(e,t)};X.useId=function(){return Ke.current.useId()};X.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ke.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};X.useRef=function(e){return Ke.current.useRef(e)};X.useState=function(e){return Ke.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ke.current.useTransition()};X.version="18.3.1";Ef.exports=X;var b=Ef.exports;const _c=J0(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=b,hy=Symbol.for("react.element"),gy=Symbol.for("react.fragment"),yy=Object.prototype.hasOwnProperty,vy=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,by={key:!0,ref:!0,__self:!0,__source:!0};function If(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)yy.call(t,r)&&!by.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hy,type:e,key:a,ref:o,props:i,_owner:vy.current}}$o.Fragment=gy;$o.jsx=If;$o.jsxs=If;Cf.exports=$o;var s=Cf.exports,Ga={},Rf={exports:{}},lt={},Df={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,A){var L=$.length;$.push(A);e:for(;0<L;){var k=L-1>>>1,N=$[k];if(0<i(N,A))$[k]=A,$[L]=N,L=k;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var A=$[0],L=$.pop();if(L!==A){$[0]=L;e:for(var k=0,N=$.length,P=N>>>1;k<P;){var O=2*(k+1)-1,W=$[O],Y=O+1,q=$[Y];if(0>i(W,L))Y<N&&0>i(q,W)?($[k]=q,$[Y]=L,k=Y):($[k]=W,$[O]=L,k=O);else if(Y<N&&0>i(q,L))$[k]=q,$[Y]=L,k=Y;else break e}}return A}function i($,A){var L=$.sortIndex-A.sortIndex;return L!==0?L:$.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,m=null,f=3,h=!1,v=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=$)r(u),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(u)}}function _($){if(w=!1,y($),!v)if(n(c)!==null)v=!0,ve(S);else{var A=n(u);A!==null&&H(_,A.startTime-$)}}function S($,A){v=!1,w&&(w=!1,p(j),j=-1),h=!0;var L=f;try{for(y(A),m=n(c);m!==null&&(!(m.expirationTime>A)||$&&!I());){var k=m.callback;if(typeof k=="function"){m.callback=null,f=m.priorityLevel;var N=k(m.expirationTime<=A);A=e.unstable_now(),typeof N=="function"?m.callback=N:m===n(c)&&r(c),y(A)}else r(c);m=n(c)}if(m!==null)var P=!0;else{var O=n(u);O!==null&&H(_,O.startTime-A),P=!1}return P}finally{m=null,f=L,h=!1}}var E=!1,C=null,j=-1,M=5,T=-1;function I(){return!(e.unstable_now()-T<M)}function U(){if(C!==null){var $=e.unstable_now();T=$;var A=!0;try{A=C(!0,$)}finally{A?Q():(E=!1,C=null)}}else E=!1}var Q;if(typeof g=="function")Q=function(){g(U)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,oe=J.port2;J.port1.onmessage=U,Q=function(){oe.postMessage(null)}}else Q=function(){x(U,0)};function ve($){C=$,E||(E=!0,Q())}function H($,A){j=x(function(){$(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,ve(S))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var L=f;f=A;try{return $()}finally{f=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,A){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var L=f;f=$;try{return A()}finally{f=L}},e.unstable_scheduleCallback=function($,A,L){var k=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?k+L:k):L=k,$){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=L+N,$={id:d++,callback:A,priorityLevel:$,startTime:L,expirationTime:N,sortIndex:-1},L>k?($.sortIndex=L,t(u,$),n(c)===null&&$===n(u)&&(w?(p(j),j=-1):w=!0,H(_,L-k))):($.sortIndex=N,t(c,$),v||h||(v=!0,ve(S))),$},e.unstable_shouldYield=I,e.unstable_wrapCallback=function($){var A=f;return function(){var L=f;f=A;try{return $.apply(this,arguments)}finally{f=L}}}})(Ff);Df.exports=Ff;var xy=Df.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy=b,ot=xy;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wf=new Set,Ci={};function er(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(Ci[e]=t,e=0;e<t.length;e++)Wf.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rl=Object.prototype.hasOwnProperty,ky=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nd={},rd={};function _y(e){return rl.call(rd,e)?!0:rl.call(nd,e)?!1:ky.test(e)?rd[e]=!0:(nd[e]=!0,!1)}function Sy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ny(e,t,n,r){if(t===null||typeof t>"u"||Sy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sc=/[\-:]([a-z])/g;function Nc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sc,Nc);ze[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sc,Nc);ze[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sc,Nc);ze[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function jc(e,t,n,r){var i=ze.hasOwnProperty(t)?ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ny(t,n,i,r)&&(n=null),r||i===null?_y(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=Symbol.for("react.element"),cr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),il=Symbol.for("react.profiler"),Hf=Symbol.for("react.provider"),Bf=Symbol.for("react.context"),Ec=Symbol.for("react.forward_ref"),al=Symbol.for("react.suspense"),ol=Symbol.for("react.suspense_list"),Tc=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),Uf=Symbol.for("react.offscreen"),id=Symbol.iterator;function Jr(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,gs;function ui(e){if(gs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gs=t&&t[1]||""}return`
`+gs+e}var ys=!1;function vs(e,t){if(!e||ys)return"";ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{ys=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ui(e):""}function jy(e){switch(e.tag){case 5:return ui(e.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return e=vs(e.type,!1),e;case 11:return e=vs(e.type.render,!1),e;case 1:return e=vs(e.type,!0),e;default:return""}}function sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case cr:return"Portal";case il:return"Profiler";case Cc:return"StrictMode";case al:return"Suspense";case ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bf:return(e.displayName||"Context")+".Consumer";case Hf:return(e._context.displayName||"Context")+".Provider";case Ec:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tc:return t=e.displayName||null,t!==null?t:sl(e.type)||"Memo";case sn:t=e._payload,e=e._init;try{return sl(e(t))}catch{}}return null}function Cy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sl(t);case 8:return t===Cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ey(e){var t=Kf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function la(e){e._valueTracker||(e._valueTracker=Ey(e))}function qf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Kf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ad(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vf(e,t){t=t.checked,t!=null&&jc(e,"checked",t,!1)}function cl(e,t){Vf(e,t);var n=Sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&ul(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function od(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ul(e,t,n){(t!=="number"||Qa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var di=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(di(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function Yf(e,t){var n=Sn(t.value),r=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ld(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ca,Qf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ca.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ty=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(e){Ty.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yi[t]=yi[e]})});function Xf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yi.hasOwnProperty(e)&&yi[e]?(""+t).trim():t+"px"}function Jf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Py=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fl(e,t){if(t){if(Py[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function Pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gl=null,_r=null,Sr=null;function cd(e){if(e=Ji(e)){if(typeof gl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Wo(t),gl(e.stateNode,e.type,t))}}function Zf(e){_r?Sr?Sr.push(e):Sr=[e]:_r=e}function ep(){if(_r){var e=_r,t=Sr;if(Sr=_r=null,cd(e),t)for(e=0;e<t.length;e++)cd(t[e])}}function tp(e,t){return e(t)}function np(){}var bs=!1;function rp(e,t,n){if(bs)return e(t,n);bs=!0;try{return tp(e,t,n)}finally{bs=!1,(_r!==null||Sr!==null)&&(np(),ep())}}function Ti(e,t){var n=e.stateNode;if(n===null)return null;var r=Wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var yl=!1;if(Xt)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){yl=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{yl=!1}function Ay(e,t,n,r,i,a,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var vi=!1,Xa=null,Ja=!1,vl=null,My={onError:function(e){vi=!0,Xa=e}};function Ly(e,t,n,r,i,a,o,l,c){vi=!1,Xa=null,Ay.apply(My,arguments)}function zy(e,t,n,r,i,a,o,l,c){if(Ly.apply(this,arguments),vi){if(vi){var u=Xa;vi=!1,Xa=null}else throw Error(z(198));Ja||(Ja=!0,vl=u)}}function tr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ip(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ud(e){if(tr(e)!==e)throw Error(z(188))}function Oy(e){var t=e.alternate;if(!t){if(t=tr(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return ud(i),e;if(a===r)return ud(i),t;a=a.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function ap(e){return e=Oy(e),e!==null?op(e):null}function op(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=op(e);if(t!==null)return t;e=e.sibling}return null}var sp=ot.unstable_scheduleCallback,dd=ot.unstable_cancelCallback,$y=ot.unstable_shouldYield,Iy=ot.unstable_requestPaint,be=ot.unstable_now,Ry=ot.unstable_getCurrentPriorityLevel,Ac=ot.unstable_ImmediatePriority,lp=ot.unstable_UserBlockingPriority,Za=ot.unstable_NormalPriority,Dy=ot.unstable_LowPriority,cp=ot.unstable_IdlePriority,Io=null,Rt=null;function Fy(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Io,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:By,Wy=Math.log,Hy=Math.LN2;function By(e){return e>>>=0,e===0?32:31-(Wy(e)/Hy|0)|0}var ua=64,da=4194304;function mi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=mi(l):(a&=o,a!==0&&(r=mi(a)))}else o=n&~i,o!==0?r=mi(o):a!==0&&(r=mi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Uy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ky(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Nt(a),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=Uy(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function up(){var e=ua;return ua<<=1,!(ua&4194240)&&(ua=64),e}function xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function qy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Mc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ie=0;function dp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mp,Lc,fp,pp,hp,xl=!1,ma=[],gn=null,yn=null,vn=null,Pi=new Map,Ai=new Map,un=[],Vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(t.pointerId)}}function ei(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ji(t),t!==null&&Lc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yy(e,t,n,r,i){switch(t){case"focusin":return gn=ei(gn,e,t,n,r,i),!0;case"dragenter":return yn=ei(yn,e,t,n,r,i),!0;case"mouseover":return vn=ei(vn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Pi.set(a,ei(Pi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ai.set(a,ei(Ai.get(a)||null,e,t,n,r,i)),!0}return!1}function gp(e){var t=Fn(e.target);if(t!==null){var n=tr(t);if(n!==null){if(t=n.tag,t===13){if(t=ip(n),t!==null){e.blockedOn=t,hp(e.priority,function(){fp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hl=r,n.target.dispatchEvent(r),hl=null}else return t=Ji(n),t!==null&&Lc(t),e.blockedOn=n,!1;t.shift()}return!0}function fd(e,t,n){Oa(e)&&n.delete(t)}function Gy(){xl=!1,gn!==null&&Oa(gn)&&(gn=null),yn!==null&&Oa(yn)&&(yn=null),vn!==null&&Oa(vn)&&(vn=null),Pi.forEach(fd),Ai.forEach(fd)}function ti(e,t){e.blockedOn===t&&(e.blockedOn=null,xl||(xl=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,Gy)))}function Mi(e){function t(i){return ti(i,e)}if(0<ma.length){ti(ma[0],e);for(var n=1;n<ma.length;n++){var r=ma[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&ti(gn,e),yn!==null&&ti(yn,e),vn!==null&&ti(vn,e),Pi.forEach(t),Ai.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)gp(n),n.blockedOn===null&&un.shift()}var Nr=nn.ReactCurrentBatchConfig,to=!0;function Qy(e,t,n,r){var i=ie,a=Nr.transition;Nr.transition=null;try{ie=1,zc(e,t,n,r)}finally{ie=i,Nr.transition=a}}function Xy(e,t,n,r){var i=ie,a=Nr.transition;Nr.transition=null;try{ie=4,zc(e,t,n,r)}finally{ie=i,Nr.transition=a}}function zc(e,t,n,r){if(to){var i=wl(e,t,n,r);if(i===null)Ps(e,t,r,no,n),md(e,r);else if(Yy(i,e,t,n,r))r.stopPropagation();else if(md(e,r),t&4&&-1<Vy.indexOf(e)){for(;i!==null;){var a=Ji(i);if(a!==null&&mp(a),a=wl(e,t,n,r),a===null&&Ps(e,t,r,no,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ps(e,t,r,null,n)}}var no=null;function wl(e,t,n,r){if(no=null,e=Pc(r),e=Fn(e),e!==null)if(t=tr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ip(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function yp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ry()){case Ac:return 1;case lp:return 4;case Za:case Dy:return 16;case cp:return 536870912;default:return 16}default:return 16}}var fn=null,Oc=null,$a=null;function vp(){if($a)return $a;var e,t=Oc,n=t.length,r,i="value"in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return $a=i.slice(e,1<r?1-r:void 0)}function Ia(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fa(){return!0}function pd(){return!1}function ct(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?fa:pd,this.isPropagationStopped=pd,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$c=ct(qr),Xi=pe({},qr,{view:0,detail:0}),Jy=ct(Xi),ws,ks,ni,Ro=pe({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(ws=e.screenX-ni.screenX,ks=e.screenY-ni.screenY):ks=ws=0,ni=e),ws)},movementY:function(e){return"movementY"in e?e.movementY:ks}}),hd=ct(Ro),Zy=pe({},Ro,{dataTransfer:0}),e1=ct(Zy),t1=pe({},Xi,{relatedTarget:0}),_s=ct(t1),n1=pe({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),r1=ct(n1),i1=pe({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a1=ct(i1),o1=pe({},qr,{data:0}),gd=ct(o1),s1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=c1[e])?!!t[e]:!1}function Ic(){return u1}var d1=pe({},Xi,{key:function(e){if(e.key){var t=s1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ia(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(e){return e.type==="keypress"?Ia(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ia(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m1=ct(d1),f1=pe({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=ct(f1),p1=pe({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),h1=ct(p1),g1=pe({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),y1=ct(g1),v1=pe({},Ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b1=ct(v1),x1=[9,13,27,32],Rc=Xt&&"CompositionEvent"in window,bi=null;Xt&&"documentMode"in document&&(bi=document.documentMode);var w1=Xt&&"TextEvent"in window&&!bi,bp=Xt&&(!Rc||bi&&8<bi&&11>=bi),vd=" ",bd=!1;function xp(e,t){switch(e){case"keyup":return x1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function k1(e,t){switch(e){case"compositionend":return wp(t);case"keypress":return t.which!==32?null:(bd=!0,vd);case"textInput":return e=t.data,e===vd&&bd?null:e;default:return null}}function _1(e,t){if(dr)return e==="compositionend"||!Rc&&xp(e,t)?(e=vp(),$a=Oc=fn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bp&&t.locale!=="ko"?null:t.data;default:return null}}var S1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S1[e.type]:t==="textarea"}function kp(e,t,n,r){Zf(r),t=ro(t,"onChange"),0<t.length&&(n=new $c("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xi=null,Li=null;function N1(e){Lp(e,0)}function Do(e){var t=pr(e);if(qf(t))return e}function j1(e,t){if(e==="change")return t}var _p=!1;if(Xt){var Ss;if(Xt){var Ns="oninput"in document;if(!Ns){var wd=document.createElement("div");wd.setAttribute("oninput","return;"),Ns=typeof wd.oninput=="function"}Ss=Ns}else Ss=!1;_p=Ss&&(!document.documentMode||9<document.documentMode)}function kd(){xi&&(xi.detachEvent("onpropertychange",Sp),Li=xi=null)}function Sp(e){if(e.propertyName==="value"&&Do(Li)){var t=[];kp(t,Li,e,Pc(e)),rp(N1,t)}}function C1(e,t,n){e==="focusin"?(kd(),xi=t,Li=n,xi.attachEvent("onpropertychange",Sp)):e==="focusout"&&kd()}function E1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Do(Li)}function T1(e,t){if(e==="click")return Do(t)}function P1(e,t){if(e==="input"||e==="change")return Do(t)}function A1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:A1;function zi(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rl.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function _d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sd(e,t){var n=_d(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_d(n)}}function Np(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Np(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jp(){for(var e=window,t=Qa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qa(e.document)}return t}function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function M1(e){var t=jp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Np(n.ownerDocument.documentElement,n)){if(r!==null&&Dc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Sd(n,a);var o=Sd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var L1=Xt&&"documentMode"in document&&11>=document.documentMode,mr=null,kl=null,wi=null,_l=!1;function Nd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||mr==null||mr!==Qa(r)||(r=mr,"selectionStart"in r&&Dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wi&&zi(wi,r)||(wi=r,r=ro(kl,"onSelect"),0<r.length&&(t=new $c("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},js={},Cp={};Xt&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Fo(e){if(js[e])return js[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cp)return js[e]=t[n];return e}var Ep=Fo("animationend"),Tp=Fo("animationiteration"),Pp=Fo("animationstart"),Ap=Fo("transitionend"),Mp=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,t){Mp.set(e,t),er(t,[e])}for(var Cs=0;Cs<jd.length;Cs++){var Es=jd[Cs],z1=Es.toLowerCase(),O1=Es[0].toUpperCase()+Es.slice(1);Cn(z1,"on"+O1)}Cn(Ep,"onAnimationEnd");Cn(Tp,"onAnimationIteration");Cn(Pp,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(Ap,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$1=new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));function Cd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zy(r,t,void 0,e),e.currentTarget=null}function Lp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==a&&i.isPropagationStopped())break e;Cd(i,l,u),a=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==a&&i.isPropagationStopped())break e;Cd(i,l,u),a=c}}}if(Ja)throw e=vl,Ja=!1,vl=null,e}function ce(e,t){var n=t[El];n===void 0&&(n=t[El]=new Set);var r=e+"__bubble";n.has(r)||(zp(t,e,2,!1),n.add(r))}function Ts(e,t,n){var r=0;t&&(r|=4),zp(n,e,r,t)}var ha="_reactListening"+Math.random().toString(36).slice(2);function Oi(e){if(!e[ha]){e[ha]=!0,Wf.forEach(function(n){n!=="selectionchange"&&($1.has(n)||Ts(n,!1,e),Ts(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ha]||(t[ha]=!0,Ts("selectionchange",!1,t))}}function zp(e,t,n,r){switch(yp(t)){case 1:var i=Qy;break;case 4:i=Xy;break;default:i=zc}n=i.bind(null,t,n,e),i=void 0,!yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ps(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Fn(l),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue e}l=l.parentNode}}r=r.return}rp(function(){var u=a,d=Pc(n),m=[];e:{var f=Mp.get(e);if(f!==void 0){var h=$c,v=e;switch(e){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":h=m1;break;case"focusin":v="focus",h=_s;break;case"focusout":v="blur",h=_s;break;case"beforeblur":case"afterblur":h=_s;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=e1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=h1;break;case Ep:case Tp:case Pp:h=r1;break;case Ap:h=y1;break;case"scroll":h=Jy;break;case"wheel":h=b1;break;case"copy":case"cut":case"paste":h=a1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=yd}var w=(t&4)!==0,x=!w&&e==="scroll",p=w?f!==null?f+"Capture":null:f;w=[];for(var g=u,y;g!==null;){y=g;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,p!==null&&(_=Ti(g,p),_!=null&&w.push($i(g,_,y)))),x)break;g=g.return}0<w.length&&(f=new h(f,v,null,n,d),m.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==hl&&(v=n.relatedTarget||n.fromElement)&&(Fn(v)||v[Jt]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=u,v=v?Fn(v):null,v!==null&&(x=tr(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=u),h!==v)){if(w=hd,_="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=yd,_="onPointerLeave",p="onPointerEnter",g="pointer"),x=h==null?f:pr(h),y=v==null?f:pr(v),f=new w(_,g+"leave",h,n,d),f.target=x,f.relatedTarget=y,_=null,Fn(d)===u&&(w=new w(p,g+"enter",v,n,d),w.target=y,w.relatedTarget=x,_=w),x=_,h&&v)t:{for(w=h,p=v,g=0,y=w;y;y=ar(y))g++;for(y=0,_=p;_;_=ar(_))y++;for(;0<g-y;)w=ar(w),g--;for(;0<y-g;)p=ar(p),y--;for(;g--;){if(w===p||p!==null&&w===p.alternate)break t;w=ar(w),p=ar(p)}w=null}else w=null;h!==null&&Ed(m,f,h,w,!1),v!==null&&x!==null&&Ed(m,x,v,w,!0)}}e:{if(f=u?pr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var S=j1;else if(xd(f))if(_p)S=P1;else{S=E1;var E=C1}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=T1);if(S&&(S=S(e,u))){kp(m,S,n,d);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&ul(f,"number",f.value)}switch(E=u?pr(u):window,e){case"focusin":(xd(E)||E.contentEditable==="true")&&(mr=E,kl=u,wi=null);break;case"focusout":wi=kl=mr=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Nd(m,n,d);break;case"selectionchange":if(L1)break;case"keydown":case"keyup":Nd(m,n,d)}var C;if(Rc)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else dr?xp(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(bp&&n.locale!=="ko"&&(dr||j!=="onCompositionStart"?j==="onCompositionEnd"&&dr&&(C=vp()):(fn=d,Oc="value"in fn?fn.value:fn.textContent,dr=!0)),E=ro(u,j),0<E.length&&(j=new gd(j,e,null,n,d),m.push({event:j,listeners:E}),C?j.data=C:(C=wp(n),C!==null&&(j.data=C)))),(C=w1?k1(e,n):_1(e,n))&&(u=ro(u,"onBeforeInput"),0<u.length&&(d=new gd("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=C))}Lp(m,t)})}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ti(e,n),a!=null&&r.unshift($i(e,a,i)),a=Ti(e,t),a!=null&&r.push($i(e,a,i))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ed(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Ti(n,a),c!=null&&o.unshift($i(n,c,l))):i||(c=Ti(n,a),c!=null&&o.push($i(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var I1=/\r\n?/g,R1=/\u0000|\uFFFD/g;function Td(e){return(typeof e=="string"?e:""+e).replace(I1,`
`).replace(R1,"")}function ga(e,t,n){if(t=Td(t),Td(e)!==t&&n)throw Error(z(425))}function io(){}var Sl=null,Nl=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cl=typeof setTimeout=="function"?setTimeout:void 0,D1=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,F1=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(e){return Pd.resolve(null).then(e).catch(W1)}:Cl;function W1(e){setTimeout(function(){throw e})}function As(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Mi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mi(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),zt="__reactFiber$"+Vr,Ii="__reactProps$"+Vr,Jt="__reactContainer$"+Vr,El="__reactEvents$"+Vr,H1="__reactListeners$"+Vr,B1="__reactHandles$"+Vr;function Fn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ad(e);e!==null;){if(n=e[zt])return n;e=Ad(e)}return t}e=n,n=e.parentNode}return null}function Ji(e){return e=e[zt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Wo(e){return e[Ii]||null}var Tl=[],hr=-1;function En(e){return{current:e}}function ue(e){0>hr||(e.current=Tl[hr],Tl[hr]=null,hr--)}function le(e,t){hr++,Tl[hr]=e.current,e.current=t}var Nn={},De=En(Nn),Xe=En(!1),qn=Nn;function zr(e,t){var n=e.type.contextTypes;if(!n)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Je(e){return e=e.childContextTypes,e!=null}function ao(){ue(Xe),ue(De)}function Md(e,t,n){if(De.current!==Nn)throw Error(z(168));le(De,t),le(Xe,n)}function Op(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,Cy(e)||"Unknown",i));return pe({},n,r)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,qn=De.current,le(De,e),le(Xe,Xe.current),!0}function Ld(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=Op(e,t,qn),r.__reactInternalMemoizedMergedChildContext=e,ue(Xe),ue(De),le(De,e)):ue(Xe),le(Xe,n)}var Ut=null,Ho=!1,Ms=!1;function $p(e){Ut===null?Ut=[e]:Ut.push(e)}function U1(e){Ho=!0,$p(e)}function Tn(){if(!Ms&&Ut!==null){Ms=!0;var e=0,t=ie;try{var n=Ut;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,Ho=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),sp(Ac,Tn),i}finally{ie=t,Ms=!1}}return null}var gr=[],yr=0,so=null,lo=0,mt=[],ft=0,Vn=null,qt=1,Vt="";function $n(e,t){gr[yr++]=lo,gr[yr++]=so,so=e,lo=t}function Ip(e,t,n){mt[ft++]=qt,mt[ft++]=Vt,mt[ft++]=Vn,Vn=e;var r=qt;e=Vt;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var a=32-Nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qt=1<<32-Nt(t)+i|n<<i|r,Vt=a+e}else qt=1<<a|n<<i|r,Vt=e}function Fc(e){e.return!==null&&($n(e,1),Ip(e,1,0))}function Wc(e){for(;e===so;)so=gr[--yr],gr[yr]=null,lo=gr[--yr],gr[yr]=null;for(;e===Vn;)Vn=mt[--ft],mt[ft]=null,Vt=mt[--ft],mt[ft]=null,qt=mt[--ft],mt[ft]=null}var at=null,it=null,de=!1,St=null;function Rp(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,it=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:qt,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,it=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Al(e){if(de){var t=it;if(t){var n=t;if(!zd(e,t)){if(Pl(e))throw Error(z(418));t=bn(n.nextSibling);var r=at;t&&zd(e,t)?Rp(r,n):(e.flags=e.flags&-4097|2,de=!1,at=e)}}else{if(Pl(e))throw Error(z(418));e.flags=e.flags&-4097|2,de=!1,at=e}}}function Od(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function ya(e){if(e!==at)return!1;if(!de)return Od(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=it)){if(Pl(e))throw Dp(),Error(z(418));for(;t;)Rp(e,t),t=bn(t.nextSibling)}if(Od(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=at?bn(e.stateNode.nextSibling):null;return!0}function Dp(){for(var e=it;e;)e=bn(e.nextSibling)}function Or(){it=at=null,de=!1}function Hc(e){St===null?St=[e]:St.push(e)}var K1=nn.ReactCurrentBatchConfig;function ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $d(e){var t=e._init;return t(e._payload)}function Fp(e){function t(p,g){if(e){var y=p.deletions;y===null?(p.deletions=[g],p.flags|=16):y.push(g)}}function n(p,g){if(!e)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function r(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function i(p,g){return p=_n(p,g),p.index=0,p.sibling=null,p}function a(p,g,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<g?(p.flags|=2,g):y):(p.flags|=2,g)):(p.flags|=1048576,g)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,g,y,_){return g===null||g.tag!==6?(g=Ds(y,p.mode,_),g.return=p,g):(g=i(g,y),g.return=p,g)}function c(p,g,y,_){var S=y.type;return S===ur?d(p,g,y.props.children,_,y.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===sn&&$d(S)===g.type)?(_=i(g,y.props),_.ref=ri(p,g,y),_.return=p,_):(_=Ua(y.type,y.key,y.props,null,p.mode,_),_.ref=ri(p,g,y),_.return=p,_)}function u(p,g,y,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Fs(y,p.mode,_),g.return=p,g):(g=i(g,y.children||[]),g.return=p,g)}function d(p,g,y,_,S){return g===null||g.tag!==7?(g=Un(y,p.mode,_,S),g.return=p,g):(g=i(g,y),g.return=p,g)}function m(p,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ds(""+g,p.mode,y),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sa:return y=Ua(g.type,g.key,g.props,null,p.mode,y),y.ref=ri(p,null,g),y.return=p,y;case cr:return g=Fs(g,p.mode,y),g.return=p,g;case sn:var _=g._init;return m(p,_(g._payload),y)}if(di(g)||Jr(g))return g=Un(g,p.mode,y,null),g.return=p,g;va(p,g)}return null}function f(p,g,y,_){var S=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:l(p,g,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case sa:return y.key===S?c(p,g,y,_):null;case cr:return y.key===S?u(p,g,y,_):null;case sn:return S=y._init,f(p,g,S(y._payload),_)}if(di(y)||Jr(y))return S!==null?null:d(p,g,y,_,null);va(p,y)}return null}function h(p,g,y,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(y)||null,l(g,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case sa:return p=p.get(_.key===null?y:_.key)||null,c(g,p,_,S);case cr:return p=p.get(_.key===null?y:_.key)||null,u(g,p,_,S);case sn:var E=_._init;return h(p,g,y,E(_._payload),S)}if(di(_)||Jr(_))return p=p.get(y)||null,d(g,p,_,S,null);va(g,_)}return null}function v(p,g,y,_){for(var S=null,E=null,C=g,j=g=0,M=null;C!==null&&j<y.length;j++){C.index>j?(M=C,C=null):M=C.sibling;var T=f(p,C,y[j],_);if(T===null){C===null&&(C=M);break}e&&C&&T.alternate===null&&t(p,C),g=a(T,g,j),E===null?S=T:E.sibling=T,E=T,C=M}if(j===y.length)return n(p,C),de&&$n(p,j),S;if(C===null){for(;j<y.length;j++)C=m(p,y[j],_),C!==null&&(g=a(C,g,j),E===null?S=C:E.sibling=C,E=C);return de&&$n(p,j),S}for(C=r(p,C);j<y.length;j++)M=h(C,p,j,y[j],_),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?j:M.key),g=a(M,g,j),E===null?S=M:E.sibling=M,E=M);return e&&C.forEach(function(I){return t(p,I)}),de&&$n(p,j),S}function w(p,g,y,_){var S=Jr(y);if(typeof S!="function")throw Error(z(150));if(y=S.call(y),y==null)throw Error(z(151));for(var E=S=null,C=g,j=g=0,M=null,T=y.next();C!==null&&!T.done;j++,T=y.next()){C.index>j?(M=C,C=null):M=C.sibling;var I=f(p,C,T.value,_);if(I===null){C===null&&(C=M);break}e&&C&&I.alternate===null&&t(p,C),g=a(I,g,j),E===null?S=I:E.sibling=I,E=I,C=M}if(T.done)return n(p,C),de&&$n(p,j),S;if(C===null){for(;!T.done;j++,T=y.next())T=m(p,T.value,_),T!==null&&(g=a(T,g,j),E===null?S=T:E.sibling=T,E=T);return de&&$n(p,j),S}for(C=r(p,C);!T.done;j++,T=y.next())T=h(C,p,j,T.value,_),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?j:T.key),g=a(T,g,j),E===null?S=T:E.sibling=T,E=T);return e&&C.forEach(function(U){return t(p,U)}),de&&$n(p,j),S}function x(p,g,y,_){if(typeof y=="object"&&y!==null&&y.type===ur&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case sa:e:{for(var S=y.key,E=g;E!==null;){if(E.key===S){if(S=y.type,S===ur){if(E.tag===7){n(p,E.sibling),g=i(E,y.props.children),g.return=p,p=g;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===sn&&$d(S)===E.type){n(p,E.sibling),g=i(E,y.props),g.ref=ri(p,E,y),g.return=p,p=g;break e}n(p,E);break}else t(p,E);E=E.sibling}y.type===ur?(g=Un(y.props.children,p.mode,_,y.key),g.return=p,p=g):(_=Ua(y.type,y.key,y.props,null,p.mode,_),_.ref=ri(p,g,y),_.return=p,p=_)}return o(p);case cr:e:{for(E=y.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(p,g.sibling),g=i(g,y.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else t(p,g);g=g.sibling}g=Fs(y,p.mode,_),g.return=p,p=g}return o(p);case sn:return E=y._init,x(p,g,E(y._payload),_)}if(di(y))return v(p,g,y,_);if(Jr(y))return w(p,g,y,_);va(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(p,g.sibling),g=i(g,y),g.return=p,p=g):(n(p,g),g=Ds(y,p.mode,_),g.return=p,p=g),o(p)):n(p,g)}return x}var $r=Fp(!0),Wp=Fp(!1),co=En(null),uo=null,vr=null,Bc=null;function Uc(){Bc=vr=uo=null}function Kc(e){var t=co.current;ue(co),e._currentValue=t}function Ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jr(e,t){uo=e,Bc=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(Bc!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(uo===null)throw Error(z(308));vr=e,uo.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var Wn=null;function qc(e){Wn===null?Wn=[e]:Wn.push(e)}function Hp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,qc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Zt(e,r)}function Zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function Vc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Zt(e,n)}return i=r.interleaved,i===null?(t.next=t,qc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Zt(e,n)}function Ra(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mc(e,n)}}function Id(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mo(e,t,n,r){var i=e.updateQueue;ln=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?a=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(a!==null){var m=i.baseState;o=0,d=u=c=null,l=a;do{var f=l.lane,h=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(f=t,h=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(h,m,f);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(h,m,f):v,f==null)break e;m=pe({},m,f);break e;case 2:ln=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,c=m):d=d.next=h,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Gn|=o,e.lanes=o,e.memoizedState=m}}function Rd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Zi={},Dt=En(Zi),Ri=En(Zi),Di=En(Zi);function Hn(e){if(e===Zi)throw Error(z(174));return e}function Yc(e,t){switch(le(Di,t),le(Ri,e),le(Dt,Zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ml(t,e)}ue(Dt),le(Dt,t)}function Ir(){ue(Dt),ue(Ri),ue(Di)}function Up(e){Hn(Di.current);var t=Hn(Dt.current),n=ml(t,e.type);t!==n&&(le(Ri,e),le(Dt,n))}function Gc(e){Ri.current===e&&(ue(Dt),ue(Ri))}var me=En(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ls=[];function Qc(){for(var e=0;e<Ls.length;e++)Ls[e]._workInProgressVersionPrimary=null;Ls.length=0}var Da=nn.ReactCurrentDispatcher,zs=nn.ReactCurrentBatchConfig,Yn=0,fe=null,ke=null,Se=null,po=!1,ki=!1,Fi=0,q1=0;function Oe(){throw Error(z(321))}function Xc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Jc(e,t,n,r,i,a){if(Yn=a,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Da.current=e===null||e.memoizedState===null?Q1:X1,e=n(r,i),ki){a=0;do{if(ki=!1,Fi=0,25<=a)throw Error(z(301));a+=1,Se=ke=null,t.updateQueue=null,Da.current=J1,e=n(r,i)}while(ki)}if(Da.current=ho,t=ke!==null&&ke.next!==null,Yn=0,Se=ke=fe=null,po=!1,t)throw Error(z(300));return e}function Zc(){var e=Fi!==0;return Fi=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?fe.memoizedState=Se=e:Se=Se.next=e,Se}function bt(){if(ke===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Se===null?fe.memoizedState:Se.next;if(t!==null)Se=t,ke=e;else{if(e===null)throw Error(z(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Se===null?fe.memoizedState=Se=e:Se=Se.next=e}return Se}function Wi(e,t){return typeof t=="function"?t(e):t}function Os(e){var t=bt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,c=null,u=a;do{var d=u.lane;if((Yn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,fe.lanes|=d,Gn|=d}u=u.next}while(u!==null&&u!==a);c===null?o=r:c.next=l,Ct(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,fe.lanes|=a,Gn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $s(e){var t=bt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ct(a,t.memoizedState)||(Qe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Kp(){}function qp(e,t){var n=fe,r=bt(),i=t(),a=!Ct(r.memoizedState,i);if(a&&(r.memoizedState=i,Qe=!0),r=r.queue,eu(Gp.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Hi(9,Yp.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(z(349));Yn&30||Vp(n,t,i)}return i}function Vp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yp(e,t,n,r){t.value=n,t.getSnapshot=r,Qp(t)&&Xp(e)}function Gp(e,t,n){return n(function(){Qp(t)&&Xp(e)})}function Qp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function Xp(e){var t=Zt(e,1);t!==null&&jt(t,e,1,-1)}function Dd(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=G1.bind(null,fe,e),[t.memoizedState,e]}function Hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jp(){return bt().memoizedState}function Fa(e,t,n,r){var i=Lt();fe.flags|=e,i.memoizedState=Hi(1|t,n,void 0,r===void 0?null:r)}function Bo(e,t,n,r){var i=bt();r=r===void 0?null:r;var a=void 0;if(ke!==null){var o=ke.memoizedState;if(a=o.destroy,r!==null&&Xc(r,o.deps)){i.memoizedState=Hi(t,n,a,r);return}}fe.flags|=e,i.memoizedState=Hi(1|t,n,a,r)}function Fd(e,t){return Fa(8390656,8,e,t)}function eu(e,t){return Bo(2048,8,e,t)}function Zp(e,t){return Bo(4,2,e,t)}function eh(e,t){return Bo(4,4,e,t)}function th(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nh(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4,4,th.bind(null,t,e),n)}function tu(){}function rh(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ih(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ah(e,t,n){return Yn&21?(Ct(n,t)||(n=up(),fe.lanes|=n,Gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function V1(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=zs.transition;zs.transition={};try{e(!1),t()}finally{ie=n,zs.transition=r}}function oh(){return bt().memoizedState}function Y1(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sh(e))lh(t,n);else if(n=Hp(e,t,n,r),n!==null){var i=Be();jt(n,e,r,i),ch(n,t,r)}}function G1(e,t,n){var r=kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sh(e))lh(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ct(l,o)){var c=t.interleaved;c===null?(i.next=i,qc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Hp(e,t,i,r),n!==null&&(i=Be(),jt(n,e,r,i),ch(n,t,r))}}function sh(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function lh(e,t){ki=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ch(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mc(e,n)}}var ho={readContext:vt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Q1={readContext:vt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Fd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fa(4194308,4,th.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fa(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Y1.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Dd,useDebugValue:tu,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Dd(!1),t=e[0];return e=V1.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=Lt();if(de){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Ce===null)throw Error(z(349));Yn&30||Vp(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Fd(Gp.bind(null,r,a,e),[e]),r.flags|=2048,Hi(9,Yp.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Ce.identifierPrefix;if(de){var n=Vt,r=qt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=q1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},X1={readContext:vt,useCallback:rh,useContext:vt,useEffect:eu,useImperativeHandle:nh,useInsertionEffect:Zp,useLayoutEffect:eh,useMemo:ih,useReducer:Os,useRef:Jp,useState:function(){return Os(Wi)},useDebugValue:tu,useDeferredValue:function(e){var t=bt();return ah(t,ke.memoizedState,e)},useTransition:function(){var e=Os(Wi)[0],t=bt().memoizedState;return[e,t]},useMutableSource:Kp,useSyncExternalStore:qp,useId:oh,unstable_isNewReconciler:!1},J1={readContext:vt,useCallback:rh,useContext:vt,useEffect:eu,useImperativeHandle:nh,useInsertionEffect:Zp,useLayoutEffect:eh,useMemo:ih,useReducer:$s,useRef:Jp,useState:function(){return $s(Wi)},useDebugValue:tu,useDeferredValue:function(e){var t=bt();return ke===null?t.memoizedState=e:ah(t,ke.memoizedState,e)},useTransition:function(){var e=$s(Wi)[0],t=bt().memoizedState;return[e,t]},useMutableSource:Kp,useSyncExternalStore:qp,useId:oh,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ll(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Uo={isMounted:function(e){return(e=e._reactInternals)?tr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),i=kn(e),a=Gt(r,i);a.payload=t,n!=null&&(a.callback=n),t=xn(e,a,i),t!==null&&(jt(t,e,i,r),Ra(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),i=kn(e),a=Gt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=xn(e,a,i),t!==null&&(jt(t,e,i,r),Ra(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=kn(e),i=Gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(jt(t,e,r,n),Ra(t,e,r))}};function Wd(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!zi(n,r)||!zi(i,a):!0}function uh(e,t,n){var r=!1,i=Nn,a=t.contextType;return typeof a=="object"&&a!==null?a=vt(a):(i=Je(t)?qn:De.current,r=t.contextTypes,a=(r=r!=null)?zr(e,i):Nn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Hd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Uo.enqueueReplaceState(t,t.state,null)}function zl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=vt(a):(a=Je(t)?qn:De.current,i.context=zr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ll(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Uo.enqueueReplaceState(i,i.state,null),mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var n="",r=t;do n+=jy(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z1=typeof WeakMap=="function"?WeakMap:Map;function dh(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,Kl=r),Ol(e,t)},n}function mh(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ol(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Bd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fv.bind(null,e,t,n),t.then(e,e))}function Ud(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var ev=nn.ReactCurrentOwner,Qe=!1;function We(e,t,n,r){t.child=e===null?Wp(t,null,n,r):$r(t,e.child,n,r)}function qd(e,t,n,r,i){n=n.render;var a=t.ref;return jr(t,i),r=Jc(e,t,n,r,a,i),n=Zc(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(de&&n&&Fc(t),t.flags|=1,We(e,t,r,i),t.child)}function Vd(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!cu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,fh(e,t,a,r,i)):(e=Ua(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:zi,n(o,r)&&e.ref===t.ref)return en(e,t,i)}return t.flags|=1,e=_n(a,r),e.ref=t.ref,e.return=t,t.child=e}function fh(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(zi(a,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,en(e,t,i)}return $l(e,t,n,r,i)}function ph(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(xr,nt),nt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(xr,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,le(xr,nt),nt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,le(xr,nt),nt|=r;return We(e,t,i,n),t.child}function hh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $l(e,t,n,r,i){var a=Je(n)?qn:De.current;return a=zr(t,a),jr(t,i),n=Jc(e,t,n,r,a,i),r=Zc(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(de&&r&&Fc(t),t.flags|=1,We(e,t,n,i),t.child)}function Yd(e,t,n,r,i){if(Je(n)){var a=!0;oo(t)}else a=!1;if(jr(t,i),t.stateNode===null)Wa(e,t),uh(t,n,r),zl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=Je(n)?qn:De.current,u=zr(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Hd(t,o,r,u),ln=!1;var f=t.memoizedState;o.state=f,mo(t,r,o,i),c=t.memoizedState,l!==r||f!==c||Xe.current||ln?(typeof d=="function"&&(Ll(t,n,d,r),c=t.memoizedState),(l=ln||Wd(t,n,l,r,f,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Bp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:kt(t.type,l),o.props=u,m=t.pendingProps,f=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=vt(c):(c=Je(n)?qn:De.current,c=zr(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||f!==c)&&Hd(t,o,r,c),ln=!1,f=t.memoizedState,o.state=f,mo(t,r,o,i);var v=t.memoizedState;l!==m||f!==v||Xe.current||ln?(typeof h=="function"&&(Ll(t,n,h,r),v=t.memoizedState),(u=ln||Wd(t,n,u,r,f,v,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,a,i)}function Il(e,t,n,r,i,a){hh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Ld(t,n,!1),en(e,t,a);r=t.stateNode,ev.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=$r(t,e.child,null,a),t.child=$r(t,null,l,a)):We(e,t,l,a),t.memoizedState=r.state,i&&Ld(t,n,!0),t.child}function gh(e){var t=e.stateNode;t.pendingContext?Md(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Md(e,t.context,!1),Yc(e,t.containerInfo)}function Gd(e,t,n,r,i){return Or(),Hc(i),t.flags|=256,We(e,t,n,r),t.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function yh(e,t,n){var r=t.pendingProps,i=me.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(me,i&1),e===null)return Al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Vo(o,r,0,null),e=Un(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Dl(n),t.memoizedState=Rl,e):nu(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return tv(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=_n(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=_n(l,a):(a=Un(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Dl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Rl,r}return a=e.child,e=a.sibling,r=_n(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nu(e,t){return t=Vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ba(e,t,n,r){return r!==null&&Hc(r),$r(t,e.child,null,n),e=nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tv(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Is(Error(z(422))),ba(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Vo({mode:"visible",children:r.children},i,0,null),a=Un(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&$r(t,e.child,null,o),t.child.memoizedState=Dl(o),t.memoizedState=Rl,a);if(!(t.mode&1))return ba(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(z(419)),r=Is(a,r,void 0),ba(e,t,o,r)}if(l=(o&e.childLanes)!==0,Qe||l){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Zt(e,i),jt(r,e,i,-1))}return lu(),r=Is(Error(z(421))),ba(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=pv.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,it=bn(i.nextSibling),at=t,de=!0,St=null,e!==null&&(mt[ft++]=qt,mt[ft++]=Vt,mt[ft++]=Vn,qt=e.id,Vt=e.overflow,Vn=t),t=nu(t,r.children),t.flags|=4096,t)}function Qd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ml(e.return,t,n)}function Rs(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function vh(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(We(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,n,t);else if(e.tag===19)Qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rs(t,!0,n,null,a);break;case"together":Rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nv(e,t,n){switch(t.tag){case 3:gh(t),Or();break;case 5:Up(t);break;case 1:Je(t.type)&&oo(t);break;case 4:Yc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(co,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?yh(e,t,n):(le(me,me.current&1),e=en(e,t,n),e!==null?e.sibling:null);le(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,ph(e,t,n)}return en(e,t,n)}var bh,Fl,xh,wh;bh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fl=function(){};xh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Hn(Dt.current);var a=null;switch(n){case"input":i=ll(e,i),r=ll(e,r),a=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),a=[];break;case"textarea":i=dl(e,i),r=dl(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=io)}fl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ci.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ci.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ce("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};wh=function(e,t,n,r){n!==r&&(t.flags|=4)};function ii(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rv(e,t,n){var r=t.pendingProps;switch(Wc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return Je(t.type)&&ao(),$e(t),null;case 3:return r=t.stateNode,Ir(),ue(Xe),ue(De),Qc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ya(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(Yl(St),St=null))),Fl(e,t),$e(t),null;case 5:Gc(t);var i=Hn(Di.current);if(n=t.type,e!==null&&t.stateNode!=null)xh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return $e(t),null}if(e=Hn(Dt.current),ya(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[zt]=t,r[Ii]=a,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<fi.length;i++)ce(fi[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":ad(r,a),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ce("invalid",r);break;case"textarea":sd(r,a),ce("invalid",r)}fl(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ga(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ga(r.textContent,l,e),i=["children",""+l]):Ci.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":la(r),od(r,a,!0);break;case"textarea":la(r),ld(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=io)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[zt]=t,e[Ii]=r,bh(e,t,!1,!1),t.stateNode=e;e:{switch(o=pl(n,r),n){case"dialog":ce("cancel",e),ce("close",e),i=r;break;case"iframe":case"object":case"embed":ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<fi.length;i++)ce(fi[i],e);i=r;break;case"source":ce("error",e),i=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),i=r;break;case"details":ce("toggle",e),i=r;break;case"input":ad(e,r),i=ll(e,r),ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ce("invalid",e);break;case"textarea":sd(e,r),i=dl(e,r),ce("invalid",e);break;default:i=r}fl(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Jf(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Qf(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ei(e,c):typeof c=="number"&&Ei(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ci.hasOwnProperty(a)?c!=null&&a==="onScroll"&&ce("scroll",e):c!=null&&jc(e,a,c,o))}switch(n){case"input":la(e),od(e,r,!1);break;case"textarea":la(e),ld(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?kr(e,!!r.multiple,a,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)wh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=Hn(Di.current),Hn(Dt.current),ya(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(a=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:ga(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ga(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return $e(t),null;case 13:if(ue(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&it!==null&&t.mode&1&&!(t.flags&128))Dp(),Or(),t.flags|=98560,a=!1;else if(a=ya(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(z(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(z(317));a[zt]=t}else Or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),a=!1}else St!==null&&(Yl(St),St=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?_e===0&&(_e=3):lu())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return Ir(),Fl(e,t),e===null&&Oi(t.stateNode.containerInfo),$e(t),null;case 10:return Kc(t.type._context),$e(t),null;case 17:return Je(t.type)&&ao(),$e(t),null;case 19:if(ue(me),a=t.memoizedState,a===null)return $e(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ii(a,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,ii(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(me,me.current&1|2),t.child}e=e.sibling}a.tail!==null&&be()>Dr&&(t.flags|=128,r=!0,ii(a,!1),t.lanes=4194304)}else{if(!r)if(e=fo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ii(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!de)return $e(t),null}else 2*be()-a.renderingStartTime>Dr&&n!==1073741824&&(t.flags|=128,r=!0,ii(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=be(),t.sibling=null,n=me.current,le(me,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return su(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?nt&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function iv(e,t){switch(Wc(t),t.tag){case 1:return Je(t.type)&&ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),ue(Xe),ue(De),Qc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gc(t),null;case 13:if(ue(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(me),null;case 4:return Ir(),null;case 10:return Kc(t.type._context),null;case 22:case 23:return su(),null;case 24:return null;default:return null}}var xa=!1,Ie=!1,av=typeof WeakSet=="function"?WeakSet:Set,D=null;function br(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Wl(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Xd=!1;function ov(e,t){if(Sl=to,e=jp(),Dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,d=0,m=e,f=null;t:for(;;){for(var h;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==a||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(h=m.firstChild)!==null;)f=m,m=h;for(;;){if(m===e)break t;if(f===n&&++u===i&&(l=o),f===a&&++d===r&&(c=o),(h=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=h}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nl={focusedElem:e,selectionRange:n},to=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,x=v.memoizedState,p=t.stateNode,g=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:kt(t.type,w),x);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(_){ye(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return v=Xd,Xd=!1,v}function _i(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Wl(t,n,a)}i=i.next}while(i!==r)}}function Ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kh(e){var t=e.alternate;t!==null&&(e.alternate=null,kh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Ii],delete t[El],delete t[H1],delete t[B1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _h(e){return e.tag===5||e.tag===3||e.tag===4}function Jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_h(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=io));else if(r!==4&&(e=e.child,e!==null))for(Bl(e,t,n),e=e.sibling;e!==null;)Bl(e,t,n),e=e.sibling}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}var Pe=null,_t=!1;function rn(e,t,n){for(n=n.child;n!==null;)Sh(e,t,n),n=n.sibling}function Sh(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Io,n)}catch{}switch(n.tag){case 5:Ie||br(n,t);case 6:var r=Pe,i=_t;Pe=null,rn(e,t,n),Pe=r,_t=i,Pe!==null&&(_t?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(_t?(e=Pe,n=n.stateNode,e.nodeType===8?As(e.parentNode,n):e.nodeType===1&&As(e,n),Mi(e)):As(Pe,n.stateNode));break;case 4:r=Pe,i=_t,Pe=n.stateNode.containerInfo,_t=!0,rn(e,t,n),Pe=r,_t=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Wl(n,t,o),i=i.next}while(i!==r)}rn(e,t,n);break;case 1:if(!Ie&&(br(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,t,l)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,rn(e,t,n),Ie=r):rn(e,t,n);break;default:rn(e,t,n)}}function Zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new av),t.forEach(function(r){var i=hv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Pe=l.stateNode,_t=!1;break e;case 3:Pe=l.stateNode.containerInfo,_t=!0;break e;case 4:Pe=l.stateNode.containerInfo,_t=!0;break e}l=l.return}if(Pe===null)throw Error(z(160));Sh(a,o,i),Pe=null,_t=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ye(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nh(t,e),t=t.sibling}function Nh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),Mt(e),r&4){try{_i(3,e,e.return),Ko(3,e)}catch(w){ye(e,e.return,w)}try{_i(5,e,e.return)}catch(w){ye(e,e.return,w)}}break;case 1:wt(t,e),Mt(e),r&512&&n!==null&&br(n,n.return);break;case 5:if(wt(t,e),Mt(e),r&512&&n!==null&&br(n,n.return),e.flags&32){var i=e.stateNode;try{Ei(i,"")}catch(w){ye(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Vf(i,a),pl(l,o);var u=pl(l,a);for(o=0;o<c.length;o+=2){var d=c[o],m=c[o+1];d==="style"?Jf(i,m):d==="dangerouslySetInnerHTML"?Qf(i,m):d==="children"?Ei(i,m):jc(i,d,m,u)}switch(l){case"input":cl(i,a);break;case"textarea":Yf(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?kr(i,!!a.multiple,h,!1):f!==!!a.multiple&&(a.defaultValue!=null?kr(i,!!a.multiple,a.defaultValue,!0):kr(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ii]=a}catch(w){ye(e,e.return,w)}}break;case 6:if(wt(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){ye(e,e.return,w)}}break;case 3:if(wt(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mi(t.containerInfo)}catch(w){ye(e,e.return,w)}break;case 4:wt(t,e),Mt(e);break;case 13:wt(t,e),Mt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(au=be())),r&4&&Zd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(u=Ie)||d,wt(t,e),Ie=u):wt(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(m=D=d;D!==null;){switch(f=D,h=f.child,f.tag){case 0:case 11:case 14:case 15:_i(4,f,f.return);break;case 1:br(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ye(r,n,w)}}break;case 5:br(f,f.return);break;case 22:if(f.memoizedState!==null){tm(m);continue}}h!==null?(h.return=f,D=h):tm(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Xf("display",o))}catch(w){ye(e,e.return,w)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){ye(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:wt(t,e),Mt(e),r&4&&Zd(e);break;case 21:break;default:wt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_h(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ei(i,""),r.flags&=-33);var a=Jd(e);Ul(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Jd(e);Bl(e,l,o);break;default:throw Error(z(161))}}catch(c){ye(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sv(e,t,n){D=e,jh(e)}function jh(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xa;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ie;l=xa;var u=Ie;if(xa=o,(Ie=c)&&!u)for(D=i;D!==null;)o=D,c=o.child,o.tag===22&&o.memoizedState!==null?nm(i):c!==null?(c.return=o,D=c):nm(i);for(;a!==null;)D=a,jh(a),a=a.sibling;D=i,xa=l,Ie=u}em(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,D=a):em(e)}}function em(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||Ko(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Rd(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rd(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Mi(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ie||t.flags&512&&Hl(t)}catch(f){ye(t,t.return,f)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function tm(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function nm(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ko(4,t)}catch(c){ye(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ye(t,i,c)}}var a=t.return;try{Hl(t)}catch(c){ye(t,a,c)}break;case 5:var o=t.return;try{Hl(t)}catch(c){ye(t,o,c)}}}catch(c){ye(t,t.return,c)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var lv=Math.ceil,go=nn.ReactCurrentDispatcher,ru=nn.ReactCurrentOwner,gt=nn.ReactCurrentBatchConfig,Z=0,Ce=null,xe=null,Le=0,nt=0,xr=En(0),_e=0,Bi=null,Gn=0,qo=0,iu=0,Si=null,Ye=null,au=0,Dr=1/0,Bt=null,yo=!1,Kl=null,wn=null,wa=!1,pn=null,vo=0,Ni=0,ql=null,Ha=-1,Ba=0;function Be(){return Z&6?be():Ha!==-1?Ha:Ha=be()}function kn(e){return e.mode&1?Z&2&&Le!==0?Le&-Le:K1.transition!==null?(Ba===0&&(Ba=up()),Ba):(e=ie,e!==0||(e=window.event,e=e===void 0?16:yp(e.type)),e):1}function jt(e,t,n,r){if(50<Ni)throw Ni=0,ql=null,Error(z(185));Qi(e,n,r),(!(Z&2)||e!==Ce)&&(e===Ce&&(!(Z&2)&&(qo|=n),_e===4&&dn(e,Le)),Ze(e,r),n===1&&Z===0&&!(t.mode&1)&&(Dr=be()+500,Ho&&Tn()))}function Ze(e,t){var n=e.callbackNode;Ky(e,t);var r=eo(e,e===Ce?Le:0);if(r===0)n!==null&&dd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dd(n),t===1)e.tag===0?U1(rm.bind(null,e)):$p(rm.bind(null,e)),F1(function(){!(Z&6)&&Tn()}),n=null;else{switch(dp(r)){case 1:n=Ac;break;case 4:n=lp;break;case 16:n=Za;break;case 536870912:n=cp;break;default:n=Za}n=zh(n,Ch.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ch(e,t){if(Ha=-1,Ba=0,Z&6)throw Error(z(327));var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var r=eo(e,e===Ce?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bo(e,r);else{t=r;var i=Z;Z|=2;var a=Th();(Ce!==e||Le!==t)&&(Bt=null,Dr=be()+500,Bn(e,t));do try{dv();break}catch(l){Eh(e,l)}while(!0);Uc(),go.current=a,Z=i,xe!==null?t=0:(Ce=null,Le=0,t=_e)}if(t!==0){if(t===2&&(i=bl(e),i!==0&&(r=i,t=Vl(e,i))),t===1)throw n=Bi,Bn(e,0),dn(e,r),Ze(e,be()),n;if(t===6)dn(e,r);else{if(i=e.current.alternate,!(r&30)&&!cv(i)&&(t=bo(e,r),t===2&&(a=bl(e),a!==0&&(r=a,t=Vl(e,a))),t===1))throw n=Bi,Bn(e,0),dn(e,r),Ze(e,be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:In(e,Ye,Bt);break;case 3:if(dn(e,r),(r&130023424)===r&&(t=au+500-be(),10<t)){if(eo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cl(In.bind(null,e,Ye,Bt),t);break}In(e,Ye,Bt);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Nt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lv(r/1960))-r,10<r){e.timeoutHandle=Cl(In.bind(null,e,Ye,Bt),r);break}In(e,Ye,Bt);break;case 5:In(e,Ye,Bt);break;default:throw Error(z(329))}}}return Ze(e,be()),e.callbackNode===n?Ch.bind(null,e):null}function Vl(e,t){var n=Si;return e.current.memoizedState.isDehydrated&&(Bn(e,t).flags|=256),e=bo(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Yl(t)),e}function Yl(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function cv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ct(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t){for(t&=~iu,t&=~qo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function rm(e){if(Z&6)throw Error(z(327));Cr();var t=eo(e,0);if(!(t&1))return Ze(e,be()),null;var n=bo(e,t);if(e.tag!==0&&n===2){var r=bl(e);r!==0&&(t=r,n=Vl(e,r))}if(n===1)throw n=Bi,Bn(e,0),dn(e,t),Ze(e,be()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,In(e,Ye,Bt),Ze(e,be()),null}function ou(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Dr=be()+500,Ho&&Tn())}}function Qn(e){pn!==null&&pn.tag===0&&!(Z&6)&&Cr();var t=Z;Z|=1;var n=gt.transition,r=ie;try{if(gt.transition=null,ie=1,e)return e()}finally{ie=r,gt.transition=n,Z=t,!(Z&6)&&Tn()}}function su(){nt=xr.current,ue(xr)}function Bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,D1(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Wc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:Ir(),ue(Xe),ue(De),Qc();break;case 5:Gc(r);break;case 4:Ir();break;case 13:ue(me);break;case 19:ue(me);break;case 10:Kc(r.type._context);break;case 22:case 23:su()}n=n.return}if(Ce=e,xe=e=_n(e.current,null),Le=nt=t,_e=0,Bi=null,iu=qo=Gn=0,Ye=Si=null,Wn!==null){for(t=0;t<Wn.length;t++)if(n=Wn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Wn=null}return e}function Eh(e,t){do{var n=xe;try{if(Uc(),Da.current=ho,po){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}po=!1}if(Yn=0,Se=ke=fe=null,ki=!1,Fi=0,ru.current=null,n===null||n.return===null){_e=1,Bi=t,xe=null;break}e:{var a=e,o=n.return,l=n,c=t;if(t=Le,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Ud(o);if(h!==null){h.flags&=-257,Kd(h,o,l,a,t),h.mode&1&&Bd(a,u,t),t=h,c=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(c),t.updateQueue=w}else v.add(c);break e}else{if(!(t&1)){Bd(a,u,t),lu();break e}c=Error(z(426))}}else if(de&&l.mode&1){var x=Ud(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Kd(x,o,l,a,t),Hc(Rr(c,l));break e}}a=c=Rr(c,l),_e!==4&&(_e=2),Si===null?Si=[a]:Si.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=dh(a,c,t);Id(a,p);break e;case 1:l=c;var g=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wn===null||!wn.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=mh(a,l,t);Id(a,_);break e}}a=a.return}while(a!==null)}Ah(n)}catch(S){t=S,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function Th(){var e=go.current;return go.current=ho,e===null?ho:e}function lu(){(_e===0||_e===3||_e===2)&&(_e=4),Ce===null||!(Gn&268435455)&&!(qo&268435455)||dn(Ce,Le)}function bo(e,t){var n=Z;Z|=2;var r=Th();(Ce!==e||Le!==t)&&(Bt=null,Bn(e,t));do try{uv();break}catch(i){Eh(e,i)}while(!0);if(Uc(),Z=n,go.current=r,xe!==null)throw Error(z(261));return Ce=null,Le=0,_e}function uv(){for(;xe!==null;)Ph(xe)}function dv(){for(;xe!==null&&!$y();)Ph(xe)}function Ph(e){var t=Lh(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?Ah(e):xe=t,ru.current=null}function Ah(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=iv(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,xe=null;return}}else if(n=rv(n,t,nt),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);_e===0&&(_e=5)}function In(e,t,n){var r=ie,i=gt.transition;try{gt.transition=null,ie=1,mv(e,t,n,r)}finally{gt.transition=i,ie=r}return null}function mv(e,t,n,r){do Cr();while(pn!==null);if(Z&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(qy(e,a),e===Ce&&(xe=Ce=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,zh(Za,function(){return Cr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=gt.transition,gt.transition=null;var o=ie;ie=1;var l=Z;Z|=4,ru.current=null,ov(e,n),Nh(n,e),M1(Nl),to=!!Sl,Nl=Sl=null,e.current=n,sv(n),Iy(),Z=l,ie=o,gt.transition=a}else e.current=n;if(wa&&(wa=!1,pn=e,vo=i),a=e.pendingLanes,a===0&&(wn=null),Fy(n.stateNode),Ze(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yo)throw yo=!1,e=Kl,Kl=null,e;return vo&1&&e.tag!==0&&Cr(),a=e.pendingLanes,a&1?e===ql?Ni++:(Ni=0,ql=e):Ni=0,Tn(),null}function Cr(){if(pn!==null){var e=dp(vo),t=gt.transition,n=ie;try{if(gt.transition=null,ie=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,vo=0,Z&6)throw Error(z(331));var i=Z;for(Z|=4,D=e.current;D!==null;){var a=D,o=a.child;if(D.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:_i(8,d,a)}var m=d.child;if(m!==null)m.return=d,D=m;else for(;D!==null;){d=D;var f=d.sibling,h=d.return;if(kh(d),d===u){D=null;break}if(f!==null){f.return=h,D=f;break}D=h}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}D=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,D=o;else e:for(;D!==null;){if(a=D,a.flags&2048)switch(a.tag){case 0:case 11:case 15:_i(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,D=p;break e}D=a.return}}var g=e.current;for(D=g;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else e:for(o=g;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ko(9,l)}}catch(S){ye(l,l.return,S)}if(l===o){D=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,D=_;break e}D=l.return}}if(Z=i,Tn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Io,e)}catch{}r=!0}return r}finally{ie=n,gt.transition=t}}return!1}function im(e,t,n){t=Rr(n,t),t=dh(e,t,1),e=xn(e,t,1),t=Be(),e!==null&&(Qi(e,1,t),Ze(e,t))}function ye(e,t,n){if(e.tag===3)im(e,e,n);else for(;t!==null;){if(t.tag===3){im(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=Rr(n,e),e=mh(t,e,1),t=xn(t,e,1),e=Be(),t!==null&&(Qi(t,1,e),Ze(t,e));break}}t=t.return}}function fv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Le&n)===n&&(_e===4||_e===3&&(Le&130023424)===Le&&500>be()-au?Bn(e,0):iu|=n),Ze(e,t)}function Mh(e,t){t===0&&(e.mode&1?(t=da,da<<=1,!(da&130023424)&&(da=4194304)):t=1);var n=Be();e=Zt(e,t),e!==null&&(Qi(e,t,n),Ze(e,n))}function pv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mh(e,n)}function hv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Mh(e,n)}var Lh;Lh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,nv(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,de&&t.flags&1048576&&Ip(t,lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wa(e,t),e=t.pendingProps;var i=zr(t,De.current);jr(t,n),i=Jc(null,t,r,e,i,n);var a=Zc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(a=!0,oo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vc(t),i.updater=Uo,t.stateNode=i,i._reactInternals=t,zl(t,r,e,n),t=Il(null,t,r,!0,a,n)):(t.tag=0,de&&a&&Fc(t),We(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=yv(r),e=kt(r,e),i){case 0:t=$l(null,t,r,e,n);break e;case 1:t=Yd(null,t,r,e,n);break e;case 11:t=qd(null,t,r,e,n);break e;case 14:t=Vd(null,t,r,kt(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),$l(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Yd(e,t,r,i,n);case 3:e:{if(gh(t),e===null)throw Error(z(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Bp(e,t),mo(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Rr(Error(z(423)),t),t=Gd(e,t,r,n,i);break e}else if(r!==i){i=Rr(Error(z(424)),t),t=Gd(e,t,r,n,i);break e}else for(it=bn(t.stateNode.containerInfo.firstChild),at=t,de=!0,St=null,n=Wp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===i){t=en(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return Up(t),e===null&&Al(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,jl(r,i)?o=null:a!==null&&jl(r,a)&&(t.flags|=32),hh(e,t),We(e,t,o,n),t.child;case 6:return e===null&&Al(t),null;case 13:return yh(e,t,n);case 4:return Yc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$r(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),qd(e,t,r,i,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,le(co,r._currentValue),r._currentValue=o,a!==null)if(Ct(a.value,o)){if(a.children===i.children&&!Xe.current){t=en(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Gt(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ml(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ml(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}We(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jr(t,n),i=vt(i),r=r(i),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,i=kt(r,t.pendingProps),i=kt(r.type,i),Vd(e,t,r,i,n);case 15:return fh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Wa(e,t),t.tag=1,Je(r)?(e=!0,oo(t)):e=!1,jr(t,n),uh(t,r,i),zl(t,r,i,n),Il(null,t,r,!0,e,n);case 19:return vh(e,t,n);case 22:return ph(e,t,n)}throw Error(z(156,t.tag))};function zh(e,t){return sp(e,t)}function gv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new gv(e,t,n,r)}function cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yv(e){if(typeof e=="function")return cu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ec)return 11;if(e===Tc)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ua(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")cu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ur:return Un(n.children,i,a,t);case Cc:o=8,i|=8;break;case il:return e=pt(12,n,t,i|2),e.elementType=il,e.lanes=a,e;case al:return e=pt(13,n,t,i),e.elementType=al,e.lanes=a,e;case ol:return e=pt(19,n,t,i),e.elementType=ol,e.lanes=a,e;case Uf:return Vo(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hf:o=10;break e;case Bf:o=9;break e;case Ec:o=11;break e;case Tc:o=14;break e;case sn:o=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=pt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Un(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function Vo(e,t,n,r){return e=pt(22,e,r,t),e.elementType=Uf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ds(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function Fs(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uu(e,t,n,r,i,a,o,l,c){return e=new vv(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=pt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(a),e}function bv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Oh(e){if(!e)return Nn;e=e._reactInternals;e:{if(tr(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Je(n))return Op(e,n,t)}return t}function $h(e,t,n,r,i,a,o,l,c){return e=uu(n,r,!0,e,i,a,o,l,c),e.context=Oh(null),n=e.current,r=Be(),i=kn(n),a=Gt(r,i),a.callback=t??null,xn(n,a,i),e.current.lanes=i,Qi(e,i,r),Ze(e,r),e}function Yo(e,t,n,r){var i=t.current,a=Be(),o=kn(i);return n=Oh(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,o),e!==null&&(jt(e,i,o,a),Ra(e,i,o)),o}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function am(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function du(e,t){am(e,t),(e=e.alternate)&&am(e,t)}function xv(){return null}var Ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}Go.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Yo(e,t,null,null)};Go.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){Yo(null,e,null,null)}),t[Jt]=null}};function Go(e){this._internalRoot=e}Go.prototype.unstable_scheduleHydration=function(e){if(e){var t=pp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&gp(e)}};function fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function om(){}function wv(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=xo(o);a.call(u)}}var o=$h(t,r,e,0,null,!1,!1,"",om);return e._reactRootContainer=o,e[Jt]=o.current,Oi(e.nodeType===8?e.parentNode:e),Qn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=xo(c);l.call(u)}}var c=uu(e,0,!1,null,null,!1,!1,"",om);return e._reactRootContainer=c,e[Jt]=c.current,Oi(e.nodeType===8?e.parentNode:e),Qn(function(){Yo(t,c,n,r)}),c}function Xo(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var c=xo(o);l.call(c)}}Yo(t,o,e,i)}else o=wv(n,t,e,i,r);return xo(o)}mp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mi(t.pendingLanes);n!==0&&(Mc(t,n|1),Ze(t,be()),!(Z&6)&&(Dr=be()+500,Tn()))}break;case 13:Qn(function(){var r=Zt(e,1);if(r!==null){var i=Be();jt(r,e,1,i)}}),du(e,1)}};Lc=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var n=Be();jt(t,e,134217728,n)}du(e,134217728)}};fp=function(e){if(e.tag===13){var t=kn(e),n=Zt(e,t);if(n!==null){var r=Be();jt(n,e,t,r)}du(e,t)}};pp=function(){return ie};hp=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};gl=function(e,t,n){switch(t){case"input":if(cl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Wo(r);if(!i)throw Error(z(90));qf(r),cl(r,i)}}}break;case"textarea":Yf(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};tp=ou;np=Qn;var kv={usingClientEntryPoint:!1,Events:[Ji,pr,Wo,Zf,ep,ou]},ai={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_v={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ap(e),e===null?null:e.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||xv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{Io=ka.inject(_v),Rt=ka}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kv;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fu(t))throw Error(z(200));return bv(e,t,null,n)};lt.createRoot=function(e,t){if(!fu(e))throw Error(z(299));var n=!1,r="",i=Ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=uu(e,1,!1,null,null,n,!1,r,i),e[Jt]=t.current,Oi(e.nodeType===8?e.parentNode:e),new mu(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=ap(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Qn(e)};lt.hydrate=function(e,t,n){if(!Qo(t))throw Error(z(200));return Xo(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!fu(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=$h(t,null,e,1,n??null,i,!1,a,o),e[Jt]=t.current,Oi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Go(t)};lt.render=function(e,t,n){if(!Qo(t))throw Error(z(200));return Xo(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!Qo(e))throw Error(z(40));return e._reactRootContainer?(Qn(function(){Xo(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};lt.unstable_batchedUpdates=ou;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qo(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Xo(e,t,n,!1,r)};lt.version="18.3.1-next-f1338f8080-20240426";function Rh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rh)}catch(e){console.error(e)}}Rh(),Rf.exports=lt;var Pn=Rf.exports,sm=Pn;Ga.createRoot=sm.createRoot,Ga.hydrateRoot=sm.hydrateRoot;function ut(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function tn(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Sv(e,t){const n=+ut(e);return tn(e,n+t)}const Dh=6048e5,Nv=864e5,Fh=6e4,pu=36e5;function Wh(e,t){return Sv(e,t*pu)}let jv={};function Jo(){return jv}function Ui(e,t){var l,c,u,d;const n=Jo(),r=(t==null?void 0:t.weekStartsOn)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,i=ut(e),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function wo(e){return Ui(e,{weekStartsOn:1})}function Hh(e){const t=ut(e),n=t.getFullYear(),r=tn(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=wo(r),a=tn(e,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const o=wo(a);return t.getTime()>=i.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function ko(e){const t=ut(e);return t.setHours(0,0,0,0),t}function lm(e){const t=ut(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Cv(e,t){const n=ko(e),r=ko(t),i=+n-lm(n),a=+r-lm(r);return Math.round((i-a)/Nv)}function Ev(e){const t=Hh(e),n=tn(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),wo(n)}function Tv(e){return tn(e,Date.now())}function hu(e,t){const n=ko(e),r=ko(t);return+n==+r}function Pv(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Av(e){if(!Pv(e)&&typeof e!="number")return!1;const t=ut(e);return!isNaN(Number(t))}function Mv(e){const t=ut(e),n=tn(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Lv={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},zv=(e,t,n)=>{let r;const i=Lv[e];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Er(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Ov={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},$v={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Iv={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Rv={date:Er({formats:Ov,defaultWidth:"full"}),time:Er({formats:$v,defaultWidth:"full"}),dateTime:Er({formats:Iv,defaultWidth:"full"})},Dv={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Fv=(e,t,n,r)=>Dv[e];function Ot(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):o;i=e.formattingValues[l]||e.formattingValues[o]}else{const o=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;i=e.values[l]||e.values[o]}const a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}const Wv={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Hv={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Bv={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Uv={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Kv={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qv={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Vv=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Yv={ordinalNumber:Vv,era:Ot({values:Wv,defaultWidth:"wide"}),quarter:Ot({values:Hv,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ot({values:Bv,defaultWidth:"wide"}),day:Ot({values:Uv,defaultWidth:"wide"}),dayPeriod:Ot({values:Kv,defaultWidth:"wide",formattingValues:qv,defaultFormattingWidth:"wide"})};function $t(e){return(t,n={})=>{const r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;const o=a[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(l)?Qv(l,m=>m.test(o)):Gv(l,m=>m.test(o));let u;u=e.valueCallback?e.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;const d=t.slice(o.length);return{value:u,rest:d}}}function Gv(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Qv(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Bh(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;const l=t.slice(i.length);return{value:o,rest:l}}}const Xv=/^(\d+)(th|st|nd|rd)?/i,Jv=/\d+/i,Zv={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},eb={any:[/^b/i,/^(a|c)/i]},tb={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},nb={any:[/1/i,/2/i,/3/i,/4/i]},rb={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ib={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ab={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ob={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},sb={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},lb={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},cb={ordinalNumber:Bh({matchPattern:Xv,parsePattern:Jv,valueCallback:e=>parseInt(e,10)}),era:$t({matchPatterns:Zv,defaultMatchWidth:"wide",parsePatterns:eb,defaultParseWidth:"any"}),quarter:$t({matchPatterns:tb,defaultMatchWidth:"wide",parsePatterns:nb,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$t({matchPatterns:rb,defaultMatchWidth:"wide",parsePatterns:ib,defaultParseWidth:"any"}),day:$t({matchPatterns:ab,defaultMatchWidth:"wide",parsePatterns:ob,defaultParseWidth:"any"}),dayPeriod:$t({matchPatterns:sb,defaultMatchWidth:"any",parsePatterns:lb,defaultParseWidth:"any"})},ub={code:"en-US",formatDistance:zv,formatLong:Rv,formatRelative:Fv,localize:Yv,match:cb,options:{weekStartsOn:0,firstWeekContainsDate:1}};function db(e){const t=ut(e);return Cv(t,Mv(t))+1}function mb(e){const t=ut(e),n=+wo(t)-+Ev(t);return Math.round(n/Dh)+1}function Uh(e,t){var d,m,f,h;const n=ut(e),r=n.getFullYear(),i=Jo(),a=(t==null?void 0:t.firstWeekContainsDate)??((m=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??i.firstWeekContainsDate??((h=(f=i.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??1,o=tn(e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);const l=Ui(o,t),c=tn(e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);const u=Ui(c,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function fb(e,t){var l,c,u,d;const n=Jo(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,i=Uh(e,t),a=tn(e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),Ui(a,t)}function pb(e,t){const n=ut(e),r=+Ui(n,t)-+fb(n,t);return Math.round(r/Dh)+1}function re(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const an={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return re(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):re(n+1,2)},d(e,t){return re(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return re(e.getHours()%12||12,t.length)},H(e,t){return re(e.getHours(),t.length)},m(e,t){return re(e.getMinutes(),t.length)},s(e,t){return re(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return re(i,t.length)}},or={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},cm={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return an.y(e,t)},Y:function(e,t,n,r){const i=Uh(e,r),a=i>0?i:1-i;if(t==="YY"){const o=a%100;return re(o,2)}return t==="Yo"?n.ordinalNumber(a,{unit:"year"}):re(a,t.length)},R:function(e,t){const n=Hh(e);return re(n,t.length)},u:function(e,t){const n=e.getFullYear();return re(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return re(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return re(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return an.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return re(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const i=pb(e,r);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):re(i,t.length)},I:function(e,t,n){const r=mb(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):re(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):an.d(e,t)},D:function(e,t,n){const r=db(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):re(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return re(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return re(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),i=r===0?7:r;switch(t){case"i":return String(i);case"ii":return re(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let i;switch(r===12?i=or.noon:r===0?i=or.midnight:i=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let i;switch(r>=17?i=or.evening:r>=12?i=or.afternoon:r>=4?i=or.morning:i=or.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return an.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):an.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):re(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):re(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):an.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):an.s(e,t)},S:function(e,t){return an.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return dm(r);case"XXXX":case"XX":return Rn(r);case"XXXXX":case"XXX":default:return Rn(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return dm(r);case"xxxx":case"xx":return Rn(r);case"xxxxx":case"xxx":default:return Rn(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+um(r,":");case"OOOO":default:return"GMT"+Rn(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+um(r,":");case"zzzz":default:return"GMT"+Rn(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return re(r,t.length)},T:function(e,t,n){const r=e.getTime();return re(r,t.length)}};function um(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+re(a,2)}function dm(e,t){return e%60===0?(e>0?"-":"+")+re(Math.abs(e)/60,2):Rn(e,t)}function Rn(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=re(Math.trunc(r/60),2),a=re(r%60,2);return n+i+t+a}const mm=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Kh=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},hb=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return mm(e,t);let a;switch(r){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",mm(r,t)).replace("{{time}}",Kh(i,t))},gb={p:Kh,P:hb},yb=/^D+$/,vb=/^Y+$/,bb=["D","DD","YY","YYYY"];function xb(e){return yb.test(e)}function wb(e){return vb.test(e)}function kb(e,t,n){const r=_b(e,t,n);if(console.warn(r),bb.includes(e))throw new RangeError(r)}function _b(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Sb=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Nb=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,jb=/^'([^]*?)'?$/,Cb=/''/g,Eb=/[a-zA-Z]/;function yt(e,t,n){var d,m,f,h,v,w,x,p;const r=Jo(),i=(n==null?void 0:n.locale)??r.locale??ub,a=(n==null?void 0:n.firstWeekContainsDate)??((m=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??r.firstWeekContainsDate??((h=(f=r.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??1,o=(n==null?void 0:n.weekStartsOn)??((w=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:w.weekStartsOn)??r.weekStartsOn??((p=(x=r.locale)==null?void 0:x.options)==null?void 0:p.weekStartsOn)??0,l=ut(e);if(!Av(l))throw new RangeError("Invalid time value");let c=t.match(Nb).map(g=>{const y=g[0];if(y==="p"||y==="P"){const _=gb[y];return _(g,i.formatLong)}return g}).join("").match(Sb).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const y=g[0];if(y==="'")return{isToken:!1,value:Tb(g)};if(cm[y])return{isToken:!0,value:g};if(y.match(Eb))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:g}});i.localize.preprocessor&&(c=i.localize.preprocessor(l,c));const u={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(g=>{if(!g.isToken)return g.value;const y=g.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&wb(y)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&xb(y))&&kb(y,t,String(e));const _=cm[y[0]];return _(l,y,i.localize,u)}).join("")}function Tb(e){const t=e.match(jb);return t?t[1].replace(Cb,"'"):e}function qh(e){const t=ut(e);return t.setMinutes(0,0,0),t}function Pb(e){return hu(e,Tv(e))}function Ki(e,t){const r=zb(e);let i;if(r.date){const c=Ob(r.date,2);i=$b(c.restDateString,c.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);const a=i.getTime();let o=0,l;if(r.time&&(o=Ib(r.time),isNaN(o)))return new Date(NaN);if(r.timezone){if(l=Rb(r.timezone),isNaN(l))return new Date(NaN)}else{const c=new Date(a+o),u=new Date(0);return u.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),u.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),u}return new Date(a+o+l)}const _a={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Ab=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Mb=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Lb=/^([+-])(\d{2})(?::?(\d{2}))?$/;function zb(e){const t={},n=e.split(_a.dateTimeDelimiter);let r;if(n.length>2)return t;if(/:/.test(n[0])?r=n[0]:(t.date=n[0],r=n[1],_a.timeZoneDelimiter.test(t.date)&&(t.date=e.split(_a.timeZoneDelimiter)[0],r=e.substr(t.date.length,e.length))),r){const i=_a.timezone.exec(r);i?(t.time=r.replace(i[1],""),t.timezone=i[1]):t.time=r}return t}function Ob(e,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};const i=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:a===null?i:a*100,restDateString:e.slice((r[1]||r[2]).length)}}function $b(e,t){if(t===null)return new Date(NaN);const n=e.match(Ab);if(!n)return new Date(NaN);const r=!!n[4],i=oi(n[1]),a=oi(n[2])-1,o=oi(n[3]),l=oi(n[4]),c=oi(n[5])-1;if(r)return Bb(t,l,c)?Db(t,l,c):new Date(NaN);{const u=new Date(0);return!Wb(t,a,o)||!Hb(t,i)?new Date(NaN):(u.setUTCFullYear(t,a,Math.max(i,o)),u)}}function oi(e){return e?parseInt(e):1}function Ib(e){const t=e.match(Mb);if(!t)return NaN;const n=Ws(t[1]),r=Ws(t[2]),i=Ws(t[3]);return Ub(n,r,i)?n*pu+r*Fh+i*1e3:NaN}function Ws(e){return e&&parseFloat(e.replace(",","."))||0}function Rb(e){if(e==="Z")return 0;const t=e.match(Lb);if(!t)return 0;const n=t[1]==="+"?-1:1,r=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return Kb(r,i)?n*(r*pu+i*Fh):NaN}function Db(e,t,n){const r=new Date(0);r.setUTCFullYear(e,0,4);const i=r.getUTCDay()||7,a=(t-1)*7+n+1-i;return r.setUTCDate(r.getUTCDate()+a),r}const Fb=[31,null,31,30,31,30,31,31,30,31,30,31];function Vh(e){return e%400===0||e%4===0&&e%100!==0}function Wb(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(Fb[t]||(Vh(e)?29:28))}function Hb(e,t){return t>=1&&t<=(Vh(e)?366:365)}function Bb(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}function Ub(e,t,n){return e===24?t===0&&n===0:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}function Kb(e,t){return t>=0&&t<=59}const fm={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},qb=(e,t,n)=>{let r;const i=n!=null&&n.addSuffix?fm[e].withPreposition:fm[e].standalone;return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:"vor "+r:r},Vb={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Yb={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Gb={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Qb={date:Er({formats:Vb,defaultWidth:"full"}),time:Er({formats:Yb,defaultWidth:"full"}),dateTime:Er({formats:Gb,defaultWidth:"full"})},Xb={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Jb=(e,t,n,r)=>Xb[e],Zb={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},ex={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},Gl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},tx={narrow:Gl.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:Gl.wide},nx={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},rx={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},ix={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},ax=e=>Number(e)+".",ox={ordinalNumber:ax,era:Ot({values:Zb,defaultWidth:"wide"}),quarter:Ot({values:ex,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ot({values:Gl,formattingValues:tx,defaultWidth:"wide"}),day:Ot({values:nx,defaultWidth:"wide"}),dayPeriod:Ot({values:rx,defaultWidth:"wide",formattingValues:ix,defaultFormattingWidth:"wide"})},sx=/^(\d+)(\.)?/i,lx=/\d+/i,cx={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},ux={any:[/^v/i,/^n/i]},dx={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},mx={any:[/1/i,/2/i,/3/i,/4/i]},fx={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},px={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},hx={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},gx={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},yx={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},vx={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},bx={ordinalNumber:Bh({matchPattern:sx,parsePattern:lx,valueCallback:e=>parseInt(e)}),era:$t({matchPatterns:cx,defaultMatchWidth:"wide",parsePatterns:ux,defaultParseWidth:"any"}),quarter:$t({matchPatterns:dx,defaultMatchWidth:"wide",parsePatterns:mx,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$t({matchPatterns:fx,defaultMatchWidth:"wide",parsePatterns:px,defaultParseWidth:"any"}),day:$t({matchPatterns:hx,defaultMatchWidth:"wide",parsePatterns:gx,defaultParseWidth:"any"}),dayPeriod:$t({matchPatterns:yx,defaultMatchWidth:"wide",parsePatterns:vx,defaultParseWidth:"any"})},Kn={code:"de",formatDistance:qb,formatLong:Qb,formatRelative:Jb,localize:ox,match:bx,options:{weekStartsOn:1,firstWeekContainsDate:4}};function we(e){return e?e.split(".")[0]:""}function rt(e,t){var r,i;return(r=e==null?void 0:e.states)!=null&&r[t]?((i=e.states[t].attributes)==null?void 0:i.friendly_name)||t:t||""}function Et(e,t){var r,i;if(!t||!((r=e==null?void 0:e.states)!=null&&r[t]))return{id:t||"",name:t||"",state:"unavailable",attributes:{},domain:we(t),lastChanged:null};const n=e.states[t];return{id:t,name:((i=n.attributes)==null?void 0:i.friendly_name)||t,state:n.state,attributes:n.attributes||{},domain:we(t),lastChanged:n.last_changed?new Date(n.last_changed).getTime():null}}function xx(e,t){var i,a,o,l,c;const n=(i=e==null?void 0:e.entities)==null?void 0:i[t],r=(n==null?void 0:n.area_id)||((o=(a=e==null?void 0:e.devices)==null?void 0:a[n==null?void 0:n.device_id])==null?void 0:o.area_id);return r&&((c=(l=e==null?void 0:e.areas)==null?void 0:l[r])==null?void 0:c.name)||""}function wx(e,{domains:t=null,search:n=""}={}){if(!(e!=null&&e.states))return[];const r=n.toLowerCase().trim();return Object.keys(e.states).filter(i=>{const a=we(i);return t!=null&&t.length&&!t.includes(a)?!1:r?Et(e,i).name.toLowerCase().includes(r)||i.toLowerCase().includes(r):!0}).map(i=>Et(e,i)).sort((i,a)=>i.name.localeCompare(a.name,"de"))}function Zo(e,t){return e==="on"||e==="open"||e==="unlocked"||e==="home"?!0:t==="climate"?e!=="off"&&e!=="unavailable":t==="media_player"?e==="playing":t==="alarm_control_panel"?e!=="disarmed"&&e!=="unavailable":!1}const kx=new Set(["cleaning","paused","returning","on","active","busy","mopping","spot_cleaning"]),_x=new Set(["docked","idle","off","unavailable","unknown","error","standby","charging"]);function Sx(e,t={}){if(_x.has(e))return!1;if(kx.has(e))return!0;const n=String((t==null?void 0:t.status)||(t==null?void 0:t.vacuum_status)||"").toLowerCase();return!!(/clean|rein|mop|wisch|sweep|saug|scrub/i.test(n)||/return|zurück|dock|basis|home/i.test(n)&&e!=="docked"||/paus/i.test(n))}function Nx(e){return e!=null&&e.states&&Object.keys(e.states).find(t=>t.startsWith("vacuum."))||""}function jx(e,t,n=!1,r=""){var a;if(t&&((a=e==null?void 0:e.states)!=null&&a[t]))return t;const i=Nx(e);return i||(n&&r?r:r||"")}function Cx(e){const{state:t,attributes:n}=e;return n!=null&&n.status?n.status:t==="cleaning"?"Reinigt …":t==="paused"?"Pausiert":t==="returning"?"Fährt zur Basis …":t==="docked"||t==="charging"?"In der Ladestation":t==="idle"||t==="off"?"Bereit":t==="unavailable"||!e.id?"Reinigt Wohnzimmer …":e.name||"Sauger"}function Ex(e,t=0){var i;const n=(i=e.attributes)==null?void 0:i.battery_level;if(typeof n=="number"&&n>0)return Math.min(100,Math.max(5,100-n+20));const r=45*60;return Math.min(95,Math.round(t/r*100))}function Tx(e){const t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Px(e){const{state:t,domain:n}=e;return n==="cover"?["open","opening","closing"].includes(t):n==="binary_sensor"?t==="on":!1}function Ax(e){const{state:t,domain:n}=e;return n==="cover"?t==="open":n==="binary_sensor"?t==="on":!1}function Yh(e){const{state:t,domain:n}=e;return n==="cover"?{open:"Offen",closed:"Geschlossen",opening:"Öffnet sich …",closing:"Schließt sich …"}[t]||t:n==="binary_sensor"?t==="on"?"Offen":"Geschlossen":t}function Mx(e,t=[]){return Array.isArray(t)?t.filter(n=>n==null?void 0:n.entity_id).map(n=>{const r=Et(e,n.entity_id);return{...r,label:n.label||r.name}}):[]}function Lx(e,t=[]){return Mx(e,t).filter(Px)}function zx(e=[]){if(!e.length)return"";const t=e.filter(n=>["opening","closing"].includes(n.state));if(t.length===1){const n=t[0].state==="opening"?"öffnet sich":"schließt sich";return`${t[0].label} ${n} …`}return t.length>1?`${t.length} Fenster bewegen sich`:e.length===1?`${e[0].label} offen`:`${e.length} Fenster offen`}function gu(e,t){const n=Et(e,t),{state:r,attributes:i,domain:a}=n;return a==="climate"&&i.current_temperature!=null?`${i.current_temperature}°C`:a==="sensor"&&i.unit_of_measurement?`${r}${i.unit_of_measurement}`:a==="cover"?typeof i.current_position=="number"?`${Math.round(i.current_position)}%`:{open:"Offen",closed:"Geschlossen",opening:"Öffnet …",closing:"Schließt …"}[r]||r:a==="lock"?r==="locked"?"Gesperrt":r==="unlocked"?"Offen":r:a==="person"?r==="home"?"Zuhause":"Abwesend":a==="alarm_control_panel"?{disarmed:"Unscharf",armed_home:"Scharf (Zuhause)",armed_away:"Scharf (Abwesend)",armed_night:"Scharf (Nacht)",pending:"Auslösend",triggered:"Alarm!"}[r]||r:r==="on"?"An":r==="off"?"Aus":r}function nr(e){return!!(e!=null&&e.__mock)}function _o(e){return!!(e!=null&&e.callService&&(e!=null&&e.states)&&!nr(e))}function Ox(e){if(e==null||e==="")return"";if(typeof e=="string")return e.replace(/\/$/,"");if(typeof e=="object"&&typeof e.href=="string")return e.href.replace(/\/$/,"");const t=String(e);return t.startsWith("http")?t.replace(/\/$/,""):""}function ea(e){var r,i,a,o;if(typeof window<"u"&&((r=window.location)!=null&&r.origin)&&_o(e))return window.location.origin;const t=(e==null?void 0:e.hassUrl)??((a=(i=e==null?void 0:e.auth)==null?void 0:i.data)==null?void 0:a.hassUrl),n=Ox(t);return n||(typeof window<"u"&&((o=window.location)!=null&&o.origin)?window.location.origin:"")}function Gh(e){var t,n,r;return((n=(t=e==null?void 0:e.auth)==null?void 0:t.data)==null?void 0:n.accessToken)||((r=e==null?void 0:e.auth)==null?void 0:r.accessToken)||(e==null?void 0:e.accessToken)||null}function Yr(e,t){return t?t.startsWith("http://")||t.startsWith("https://")?t:`${ea(e)}${t.startsWith("/")?t:`/${t}`}`:null}async function G(e,t,n,r={},i=!1){return e!=null&&e.callService?e.callService(t,n,r,void 0,i):(console.warn("HA not connected, service call skipped:",t,n,r),null)}async function Qh(e,t){var r;const n=we(t);if(!(!n||!((r=e==null?void 0:e.states)!=null&&r[t])))return n==="light"?G(e,"light","turn_on",{entity_id:t}):n==="cover"?G(e,"cover","open_cover",{entity_id:t}):n==="lock"?G(e,"lock","lock",{entity_id:t}):n==="input_button"||n==="button"?G(e,n,"press",{entity_id:t}):n==="scene"||n==="script"?Jh(e,t):G(e,n,"turn_on",{entity_id:t})}async function Xh(e,t){var r;const n=we(t);if(!(!n||!((r=e==null?void 0:e.states)!=null&&r[t]))){if(n==="cover")return G(e,"cover","close_cover",{entity_id:t});if(n==="lock")return G(e,"lock","unlock",{entity_id:t});if(!(n==="input_button"||n==="button"))return n==="light"?G(e,"light","turn_off",{entity_id:t}):G(e,n,"turn_off",{entity_id:t})}}async function yu(e,t){var r,i,a,o;const n=we(t);if(!(!n||!((r=e==null?void 0:e.states)!=null&&r[t]))){if(["light","switch","fan","input_boolean","automation"].includes(n))return G(e,n,"toggle",{entity_id:t});if(n==="input_button"||n==="button")return G(e,n,"press",{entity_id:t});if(n==="cover"){const c=((i=e.states[t])==null?void 0:i.state)==="open"?"close_cover":"open_cover";return G(e,n,c,{entity_id:t})}if(n==="lock"){const c=((a=e.states[t])==null?void 0:a.state)==="locked"?"unlock":"lock";return G(e,n,c,{entity_id:t})}if(n==="alarm_control_panel")return((o=e.states[t])==null?void 0:o.state)==="disarmed"?G(e,n,"alarm_arm_home",{entity_id:t}):G(e,n,"alarm_disarm",{entity_id:t});if(!(n==="climate"||n==="sensor"||n==="binary_sensor"))return G(e,"homeassistant","toggle",{entity_id:t})}}function $x(e,t){var i,a,o;const n=(i=e==null?void 0:e.states)==null?void 0:i[t];if(!n)return 0;if(n.state==="off"){const l=(a=n.attributes)==null?void 0:a.brightness;return typeof l=="number"?Math.round(l/255*100):0}const r=(o=n.attributes)==null?void 0:o.brightness;return typeof r=="number"?Math.round(r/255*100):n.state==="on"?100:0}async function Ix(e,t,n){var o;const r=we(t);if(!r||!((o=e==null?void 0:e.states)!=null&&o[t]))return;const i=Math.min(100,Math.max(0,Math.round(n)));if(i===0)return r==="light"?G(e,"light","turn_off",{entity_id:t}):G(e,r,"turn_off",{entity_id:t});const a=Math.max(1,Math.round(i/100*255));return r==="light"?G(e,"light","turn_on",{entity_id:t,brightness:a}):G(e,r,"turn_on",{entity_id:t})}async function Rx(e,t,n){var r;if(!(!((r=e==null?void 0:e.states)!=null&&r[t])||we(t)!=="light")&&!(!Array.isArray(n)||n.length<3))return G(e,"light","turn_on",{entity_id:t,rgb_color:n.slice(0,3).map(i=>Math.min(255,Math.max(0,Math.round(i))))})}async function Jh(e,t){const n=we(t);if(n)return n==="script"?G(e,"script","turn_on",{entity_id:t}):n==="scene"?G(e,"scene","turn_on",{entity_id:t}):G(e,n,"turn_on",{entity_id:t})}async function Dx(e,t){var r;return((r=e.states[t])==null?void 0:r.state)==="playing"?G(e,"media_player","media_pause",{entity_id:t}):G(e,"media_player","media_play",{entity_id:t})}async function Fx(e,t){return G(e,"media_player","media_next_track",{entity_id:t})}async function Wx(e,t){return G(e,"media_player","media_previous_track",{entity_id:t})}async function Hx(e,t){var n,r,i;if(!e||!t)return[];if((n=e.connection)!=null&&n.sendMessagePromise)try{const a=await e.connection.sendMessagePromise({type:"todo/item/list",entity_id:t});if(a!=null&&a.items)return a.items}catch{}try{const a=await G(e,"todo","get_items",{entity_id:t},!0),o=((i=(r=a==null?void 0:a.response)==null?void 0:r[t])==null?void 0:i.items)||(a==null?void 0:a.items);if(o)return o}catch{}return[]}async function Bx(e,t,n){return G(e,"todo","update_item",{entity_id:t,item:n,status:"completed"})}async function Ux(e,t,n){return G(e,"todo","add_item",{entity_id:t,item:n})}async function Kx(e,t){return G(e,"vacuum","pause",{entity_id:t})}async function qx(e,t){return G(e,"vacuum","return_to_base",{entity_id:t})}async function vu(e,t){return G(e,"cover","close_cover",{entity_id:t})}async function Zh(e,t){return G(e,"cover","open_cover",{entity_id:t})}async function Vx(e,t){return G(e,"cover","stop_cover",{entity_id:t})}function bu(e,t){var i,a;const n=(i=e==null?void 0:e.states)==null?void 0:i[t];if(!n)return 0;const r=(a=n.attributes)==null?void 0:a.current_position;return typeof r=="number"?Math.round(r):n.state==="open"?100:(n.state==="closed",0)}async function Ql(e,t,n){var a;if(we(t)!=="cover"||!((a=e==null?void 0:e.states)!=null&&a[t]))return;const i=Math.min(100,Math.max(0,Math.round(n)));return i===0?G(e,"cover","close_cover",{entity_id:t}):i===100?G(e,"cover","open_cover",{entity_id:t}):G(e,"cover","set_cover_position",{entity_id:t,position:i})}const Yx=2;function Gx(e,t){var r,i;const n=(r=e==null?void 0:e.states)==null?void 0:r[t];return n?!!((((i=n.attributes)==null?void 0:i.supported_features)??0)&Yx):!1}function eg(e,t){var r,i,a;const n=(a=(i=(r=e==null?void 0:e.states)==null?void 0:r[t])==null?void 0:i.attributes)==null?void 0:a.access_token;return n||Gh(e)}function Qx(e,t){if(!e||!t||nr(e)||!e.states[t])return null;const r=ea(e);if(!r)return null;const i=new URLSearchParams,a=eg(e,t);a&&i.set("token",a);const o=i.toString();return o?`${r}/api/camera_proxy_stream/${t}?${o}`:`${r}/api/camera_proxy_stream/${t}`}function pm(e,t,{cacheBust:n=null}={}){var u;if(!e||!t)return null;const r=e.states[t];if(!r)return null;if(nr(e)){const d=Yr(e,(u=r.attributes)==null?void 0:u.entity_picture);return d?n==null?d:`${d}${d.includes("?")?"&":"?"}t=${n}`:null}const i=new URLSearchParams;n!=null&&i.set("t",String(n));const a=eg(e,t);a&&i.set("token",a);const o=ea(e),l=i.toString(),c=l?`/api/camera_proxy/${t}?${l}`:`/api/camera_proxy/${t}`;return o?`${o}${c}`:c}function ae(e,t,n={}){return{entity_id:e,state:t,attributes:n,last_changed:new Date().toISOString(),last_updated:new Date().toISOString()}}const Xx={"light.wohnzimmer":ae("light.wohnzimmer","on",{friendly_name:"Wohnzimmer Licht",brightness:200}),"light.kueche":ae("light.kueche","off",{friendly_name:"Küche Licht"}),"switch.steckdose":ae("switch.steckdose","off",{friendly_name:"Steckdose TV"}),"climate.wohnzimmer":ae("climate.wohnzimmer","heat",{friendly_name:"Wohnzimmer Heizung",current_temperature:21.5,temperature:22}),"lock.haustuer":ae("lock.haustuer","locked",{friendly_name:"Haustür"}),"alarm_control_panel.haus":ae("alarm_control_panel.haus","armed_home",{friendly_name:"Alarmanlage"}),"scene.filmabend":ae("scene.filmabend","scening",{friendly_name:"Filmabend"}),"scene.essen":ae("scene.essen","scening",{friendly_name:"Essen"}),"scene.schlafen":ae("scene.schlafen","scening",{friendly_name:"Schlafen"}),"script.verlassen":ae("script.verlassen","off",{friendly_name:"Haus verlassen"}),"weather.zuhause":ae("weather.zuhause","partlycloudy",{friendly_name:"Zuhause",supported_features:3,temperature:18,humidity:68,pressure:1013,wind_speed:12,visibility:10,forecast:[{datetime:"2026-06-17",condition:"partlycloudy",temperature:22,templow:14,precipitation_probability:20},{datetime:"2026-06-18",condition:"sunny",temperature:26,templow:16,precipitation_probability:5},{datetime:"2026-06-19",condition:"cloudy",temperature:20,templow:13,precipitation_probability:30},{datetime:"2026-06-20",condition:"rainy",temperature:17,templow:12,precipitation_probability:80},{datetime:"2026-06-21",condition:"partlycloudy",temperature:21,templow:14,precipitation_probability:15},{datetime:"2026-06-22",condition:"sunny",temperature:24,templow:15,precipitation_probability:0},{datetime:"2026-06-23",condition:"cloudy",temperature:19,templow:12,precipitation_probability:40}],hourly_forecast:[{datetime:"2026-06-17T20:00:00+02:00",condition:"partlycloudy",temperature:21},{datetime:"2026-06-17T21:00:00+02:00",condition:"partlycloudy",temperature:20},{datetime:"2026-06-17T22:00:00+02:00",condition:"cloudy",temperature:19},{datetime:"2026-06-17T23:00:00+02:00",condition:"cloudy",temperature:17},{datetime:"2026-06-18T00:00:00+02:00",condition:"partlycloudy",temperature:15},{datetime:"2026-06-18T01:00:00+02:00",condition:"partlycloudy",temperature:14},{datetime:"2026-06-18T02:00:00+02:00",condition:"clear-night",temperature:13},{datetime:"2026-06-18T03:00:00+02:00",condition:"clear-night",temperature:12},{datetime:"2026-06-18T04:00:00+02:00",condition:"clear-night",temperature:11},{datetime:"2026-06-18T05:00:00+02:00",condition:"partlycloudy",temperature:11}]}),"media_player.wohnzimmer":ae("media_player.wohnzimmer","playing",{friendly_name:"Bluetooth Speaker",device_manufacturer:"Apple",device_model:"HomePod mini",media_title:"Hurt Feelings",media_artist:"Mac Miller",media_album_name:"Swimming",media_position:161,media_duration:204,entity_picture:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Mac_Miller_-_Swimming.png/220px-Mac_Miller_-_Swimming.png"}),"camera.garten":ae("camera.garten","idle",{friendly_name:"Garten",entity_picture:"https://images.unsplash.com/photo-1558036117-15dbaf040517?q=80&w=800"}),"camera.haustuer":ae("camera.haustuer","idle",{friendly_name:"Haustür",entity_picture:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"}),"camera.garage":ae("camera.garage","idle",{friendly_name:"Garage",entity_picture:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"}),"todo.einkaufsliste":ae("todo.einkaufsliste","0",{friendly_name:"Einkaufsliste"}),"person.papa":ae("person.papa","home",{friendly_name:"Papa"}),"person.mama":ae("person.mama","home",{friendly_name:"Mama"}),"person.max":ae("person.max","not_home",{friendly_name:"Max"}),"vacuum.roborock":ae("vacuum.roborock","cleaning",{friendly_name:"Roborock",battery_level:78,fan_speed:"Turbo",status:"Reinigt Wohnzimmer …"}),"cover.wohnzimmer":ae("cover.wohnzimmer","open",{friendly_name:"Wohnzimmer Rolladen",current_position:100}),"cover.schlafzimmer":ae("cover.schlafzimmer","closed",{friendly_name:"Schlafzimmer Rolladen",current_position:0}),"cover.kueche":ae("cover.kueche","open",{friendly_name:"Küche Rolladen",current_position:45}),"binary_sensor.kueche_fenster":ae("binary_sensor.kueche_fenster","on",{friendly_name:"Küche Fenster"}),"binary_sensor.grandland_charging":ae("binary_sensor.grandland_charging","on",{friendly_name:"Grandland lädt",device_class:"battery_charging"}),"sensor.grandland_battery":ae("sensor.grandland_battery","67",{friendly_name:"Grandland Akku",unit_of_measurement:"%",device_class:"battery"}),"sensor.grandland_charge_power":ae("sensor.grandland_charge_power","11",{friendly_name:"Grandland Ladeleistung",unit_of_measurement:"kW",device_class:"power"})},hm=[];function Hs(){const e={...Xx},t={states:e,hassUrl:"http://homeassistant.local:8123",callService:async(r,i,a={})=>{hm.push({domain:r,service:i,data:a,time:Date.now()});const o=a.entity_id;if(r==="homeassistant"&&i==="toggle"&&o){const l=e[o];l&&(l.state=l.state==="on"?"off":"on")}if(r==="light"&&i==="toggle"&&o){const l=e[o];l&&(l.state=l.state==="on"?"off":"on")}if(r==="light"&&i==="turn_on"&&o){const l=e[o];l&&(l.state="on",typeof a.brightness=="number"&&(l.attributes={...l.attributes,brightness:a.brightness}))}if(r==="light"&&i==="turn_off"&&o){const l=e[o];l&&(l.state="off")}if(r==="switch"&&i==="toggle"&&o){const l=e[o];l&&(l.state=l.state==="on"?"off":"on")}if(r==="scene"&&i==="turn_on"&&console.log("[mock] Scene activated:",o),r==="media_player"){const l=e[o];if(!l)return{context:{id:"mock"}};i==="media_pause"&&(l.state="paused"),i==="media_play"&&(l.state="playing"),i==="turn_off"&&(l.state="off"),i==="turn_on"&&(l.state="idle")}if(r==="alarm_control_panel"&&o){const l=e[o];if(!l)return{context:{id:"mock"}};i==="alarm_disarm"&&(l.state="disarmed"),i==="alarm_arm_home"&&(l.state="armed_home"),i==="alarm_arm_away"&&(l.state="armed_away"),i==="alarm_arm_night"&&(l.state="armed_night")}if(r==="vacuum"&&o){const l=e[o];if(!l)return{context:{id:"mock"}};i==="pause"&&(l.state="paused",l.attributes={...l.attributes,status:"Pausiert"}),i==="stop"&&(l.state="idle",l.attributes={...l.attributes,status:"Gestoppt"}),i==="return_to_base"&&(l.state="returning",l.attributes={...l.attributes,status:"Fährt zur Basis …"}),i==="start"&&(l.state="cleaning",l.attributes={...l.attributes,status:"Reinigt Wohnzimmer …"})}if(r==="cover"&&o){const l=e[o];if(!l)return{context:{id:"mock"}};if(i==="open_cover"&&(l.state="open",l.attributes={...l.attributes,current_position:100}),i==="close_cover"&&(l.state="closed",l.attributes={...l.attributes,current_position:0}),i==="set_cover_position"&&typeof a.position=="number"){const c=Math.min(100,Math.max(0,a.position));l.attributes={...l.attributes,current_position:c},c===0?l.state="closed":l.state="open"}}return n.forEach(l=>l(t)),{context:{id:"mock"}}}},n=[];return t.subscribe=r=>(n.push(r),()=>{const i=n.indexOf(r);i>=0&&n.splice(i,1)}),t.getServiceLog=()=>hm,t.__mock=!0,t}const Jx=[{uid:"1",summary:"Milch",status:"needs_action"},{uid:"2",summary:"Kaffee",status:"needs_action"},{uid:"3",summary:"Bananen",status:"completed"},{uid:"4",summary:"Brot",status:"needs_action"}],xu={quickActions:[{entity_id:"light.wohnzimmer",label:"Wohnzimmer"},{entity_id:"light.kueche",label:"Küche"},{entity_id:"switch.steckdose",label:"Steckdose TV"}],scenes:[{entity_id:"scene.filmabend",label:"Filmabend"},{entity_id:"scene.essen",label:"Essen"},{entity_id:"scene.schlafen",label:"Schlafen"},{entity_id:"script.verlassen",label:"Verlassen"}],weather:{entity_id:"weather.zuhause"},mediaPlayer:{entity_id:"media_player.wohnzimmer"},camera:{entity_id:"camera.garten"},cameras:["camera.garten","camera.haustuer","camera.garage"],shoppingList:{entity_id:"todo.einkaufsliste"},vacuum:{entity_id:"vacuum.roborock"},ev:{stateEntity:"binary_sensor.grandland_charging",batteryEntity:"sensor.grandland_battery",powerEntity:"sensor.grandland_charge_power",label:"Grandland"},alarm:{entity_id:"alarm_control_panel.haus"},presence:[{entity_id:"person.papa",label:"Papa"},{entity_id:"person.mama",label:"Mama"},{entity_id:"person.max",label:"Max"}]},Zx=1,So=2,Bs=3,tg=4,ew=5,tw=6;function nw(e){return{type:"auth",access_token:e}}function rw(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function iw(){return{type:"get_states"}}function aw(e,t,n,r,i){const a={type:"call_service",domain:e,service:t,target:r,return_response:i};return n&&(a.service_data=n),a}function ow(e){const t={type:"subscribe_events"};return e&&(t.event_type=e),t}function gm(e){return{type:"unsubscribe_events",subscription:e}}function sw(){return{type:"ping"}}function lw(e,t){return{type:"result",success:!1,error:{code:e,message:t}}}function cw(e){const t={},n=e.split("&");for(let r=0;r<n.length;r++){const i=n[r].split("="),a=decodeURIComponent(i[0]),o=i.length>1?decodeURIComponent(i[1]):void 0;t[a]=o}return t}const ng=(e,t,n,r)=>{const[i,a,o]=e.split(".",3);return Number(i)>t||Number(i)===t&&(r===void 0?Number(a)>=n:Number(a)>n)||r!==void 0&&Number(i)===t&&Number(a)===n&&Number(o)>=r},uw="auth_invalid",dw="auth_ok";function mw(e){if(!e.auth)throw tg;const t=e.auth;let n=t.expired?t.refreshAccessToken().then(()=>{n=void 0},()=>{n=void 0}):void 0;const r=t.wsUrl;function i(a,o,l){const c=new WebSocket(r);let u=!1;const d=()=>{if(c.removeEventListener("close",d),u){l(So);return}if(a===0){l(Zx);return}const h=a===-1?-1:a-1;setTimeout(()=>i(h,o,l),1e3)},m=async h=>{try{t.expired&&await(n||t.refreshAccessToken()),c.send(JSON.stringify(nw(t.accessToken)))}catch(v){u=v===So,c.close()}},f=async h=>{const v=JSON.parse(h.data);switch(v.type){case uw:u=!0,c.close();break;case dw:c.removeEventListener("open",m),c.removeEventListener("message",f),c.removeEventListener("close",d),c.removeEventListener("error",d),c.haVersion=v.ha_version,ng(c.haVersion,2022,9)&&c.send(JSON.stringify(rw())),o(c);break}};c.addEventListener("open",m),c.addEventListener("message",f),c.addEventListener("close",d),c.addEventListener("error",d)}return new Promise((a,o)=>i(e.setupRetry,a,o))}class fw{constructor(t,n){this._handleMessage=r=>{let i=JSON.parse(r.data);Array.isArray(i)||(i=[i]),i.forEach(a=>{const o=this.commands.get(a.id);switch(a.type){case"event":o?o.callback(a.event):(console.warn(`Received event for unknown subscription ${a.id}. Unsubscribing.`),this.sendMessagePromise(gm(a.id)).catch(l=>{}));break;case"result":o&&(a.success?(o.resolve(a.result),"subscribe"in o||this.commands.delete(a.id)):(o.reject(a.error),this.commands.delete(a.id)));break;case"pong":o?(o.resolve(),this.commands.delete(a.id)):console.warn(`Received unknown pong response ${a.id}`);break}})},this._handleClose=async()=>{const r=this.commands;if(this.commandId=1,this.oldSubscriptions=this.commands,this.commands=new Map,this.socket=void 0,r.forEach(o=>{"subscribe"in o||o.reject(lw(Bs,"Connection lost"))}),this.closeRequested)return;this.fireEvent("disconnected");const i=Object.assign(Object.assign({},this.options),{setupRetry:0}),a=o=>{setTimeout(async()=>{if(!this.closeRequested)try{const l=await i.createSocket(i);this._setSocket(l)}catch(l){if(this._queuedMessages){const c=this._queuedMessages;this._queuedMessages=void 0;for(const u of c)u.reject&&u.reject(Bs)}l===So?this.fireEvent("reconnect-error",l):a(o+1)}},Math.min(o,5)*1e3)};this.suspendReconnectPromise&&(await this.suspendReconnectPromise,this.suspendReconnectPromise=void 0,this._queuedMessages=[]),a(0)},this.options=n,this.commandId=2,this.commands=new Map,this.eventListeners=new Map,this.closeRequested=!1,this._setSocket(t)}get connected(){return this.socket!==void 0&&this.socket.readyState==this.socket.OPEN}_setSocket(t){this.socket=t,this.haVersion=t.haVersion,t.addEventListener("message",this._handleMessage),t.addEventListener("close",this._handleClose);const n=this.oldSubscriptions;n&&(this.oldSubscriptions=void 0,n.forEach(i=>{"subscribe"in i&&i.subscribe&&i.subscribe().then(a=>{i.unsubscribe=a,i.resolve()})}));const r=this._queuedMessages;if(r){this._queuedMessages=void 0;for(const i of r)i.resolve()}this.fireEvent("ready")}addEventListener(t,n){let r=this.eventListeners.get(t);r||(r=[],this.eventListeners.set(t,r)),r.push(n)}removeEventListener(t,n){const r=this.eventListeners.get(t);if(!r)return;const i=r.indexOf(n);i!==-1&&r.splice(i,1)}fireEvent(t,n){(this.eventListeners.get(t)||[]).forEach(r=>r(this,n))}suspendReconnectUntil(t){this.suspendReconnectPromise=t}suspend(){if(!this.suspendReconnectPromise)throw new Error("Suspend promise not set");this.socket&&this.socket.close()}reconnect(t=!1){if(this.socket){if(!t){this.socket.close();return}this.socket.removeEventListener("message",this._handleMessage),this.socket.removeEventListener("close",this._handleClose),this.socket.close(),this._handleClose()}}close(){this.closeRequested=!0,this.socket&&this.socket.close()}async subscribeEvents(t,n){return this.subscribeMessage(t,ow(n))}ping(){return this.sendMessagePromise(sw())}sendMessage(t,n){if(!this.connected)throw Bs;if(this._queuedMessages){if(n)throw new Error("Cannot queue with commandId");this._queuedMessages.push({resolve:()=>this.sendMessage(t)});return}n||(n=this._genCmdId()),t.id=n,this.socket.send(JSON.stringify(t))}sendMessagePromise(t){return new Promise((n,r)=>{if(this._queuedMessages){this._queuedMessages.push({reject:r,resolve:async()=>{try{n(await this.sendMessagePromise(t))}catch(a){r(a)}}});return}const i=this._genCmdId();this.commands.set(i,{resolve:n,reject:r}),this.sendMessage(t,i)})}async subscribeMessage(t,n,r){if(this._queuedMessages&&await new Promise((a,o)=>{this._queuedMessages.push({resolve:a,reject:o})}),r!=null&&r.preCheck&&!await r.preCheck())throw new Error("Pre-check failed");let i;return await new Promise((a,o)=>{const l=this._genCmdId();i={resolve:a,reject:o,callback:t,subscribe:(r==null?void 0:r.resubscribe)!==!1?()=>this.subscribeMessage(t,n,r):void 0,unsubscribe:async()=>{this.connected&&await this.sendMessagePromise(gm(l)),this.commands.delete(l)}},this.commands.set(l,i);try{this.sendMessage(n,l)}catch{}}),()=>i.unsubscribe()}_genCmdId(){return++this.commandId}}const pw=()=>`${location.protocol}//${location.host}/`,hw=e=>e*1e3+Date.now();function gw(){const{protocol:e,host:t,pathname:n,search:r}=location;return`${e}//${t}${n}${r}`}function yw(e,t,n,r){let i=`${e}/auth/authorize?response_type=code&redirect_uri=${encodeURIComponent(n)}`;return t!==null&&(i+=`&client_id=${encodeURIComponent(t)}`),r&&(i+=`&state=${encodeURIComponent(r)}`),i}function vw(e,t,n,r){n+=(n.includes("?")?"&":"?")+"auth_callback=1",document.location.href=yw(e,t,n,r)}async function rg(e,t,n){const r=typeof location<"u"&&location;if(r&&r.protocol==="https:"){const l=document.createElement("a");if(l.href=e,l.protocol==="http:"&&l.hostname!=="localhost")throw ew}const i=new FormData;t!==null&&i.append("client_id",t),Object.keys(n).forEach(l=>{i.append(l,n[l])});const a=await fetch(`${e}/auth/token`,{method:"POST",credentials:"same-origin",body:i});if(!a.ok)throw a.status===400||a.status===403?So:new Error("Unable to fetch tokens");const o=await a.json();return o.hassUrl=e,o.clientId=t,o.expires=hw(o.expires_in),o}function ym(e,t,n){return rg(e,t,{code:n,grant_type:"authorization_code"})}function bw(e){return btoa(JSON.stringify(e))}function xw(e){return JSON.parse(atob(e))}class wu{constructor(t,n){this.data=t,this._saveTokens=n}get wsUrl(){return`ws${this.data.hassUrl.substr(4)}/api/websocket`}get accessToken(){return this.data.access_token}get expired(){return Date.now()>this.data.expires}async refreshAccessToken(){if(!this.data.refresh_token)throw new Error("No refresh_token");const t=await rg(this.data.hassUrl,this.data.clientId,{grant_type:"refresh_token",refresh_token:this.data.refresh_token});t.refresh_token=this.data.refresh_token,this.data=t,this._saveTokens&&this._saveTokens(t)}async revoke(){if(!this.data.refresh_token)throw new Error("No refresh_token to revoke");const t=new FormData;t.append("token",this.data.refresh_token),await fetch(`${this.data.hassUrl}/auth/revoke`,{method:"POST",credentials:"same-origin",body:t}),this._saveTokens&&this._saveTokens(null)}}function ww(e,t){return new wu({hassUrl:e,clientId:null,expires:Date.now()+1e11,refresh_token:"",access_token:t,expires_in:1e11})}async function ig(e={}){let t,n=e.hassUrl;n&&n[n.length-1]==="/"&&(n=n.substr(0,n.length-1));const r=e.clientId!==void 0?e.clientId:pw(),i=e.limitHassInstance===!0;if(e.authCode&&n&&(t=await ym(n,r,e.authCode),e.saveTokens&&e.saveTokens(t)),!t){const a=cw(location.search.substr(1));if("auth_callback"in a){const o=xw(a.state);if(i&&(o.hassUrl!==n||o.clientId!==r))throw tw;t=await ym(o.hassUrl,o.clientId,a.code),e.saveTokens&&e.saveTokens(t)}}if(!t&&e.loadTokens&&(t=await e.loadTokens()),t&&(n===void 0||t.hassUrl===n))return new wu(t,e.saveTokens);if(n===void 0)throw tg;return vw(n,r,e.redirectUrl||gw(),bw({hassUrl:n,clientId:r})),new Promise(()=>{})}const kw=e=>{let t=[];function n(i){let a=[];for(let o=0;o<t.length;o++)t[o]===i?i=null:a.push(t[o]);t=a}function r(i,a){e=a?i:Object.assign(Object.assign({},e),i);let o=t;for(let l=0;l<o.length;l++)o[l](e)}return{get state(){return e},action(i){function a(o){r(o,!1)}return function(){let o=[e];for(let c=0;c<arguments.length;c++)o.push(arguments[c]);let l=i.apply(this,o);if(l!=null)return l instanceof Promise?l.then(a):a(l)}},setState:r,clearState(){e=void 0},subscribe(i){return t.push(i),()=>{n(i)}}}},_w=5e3,vm=(e,t,n,r,i={unsubGrace:!0})=>{if(e[t])return e[t];let a=0,o,l,c=kw();const u=()=>{if(!n)throw new Error("Collection does not support refresh");return n(e).then(w=>c.setState(w,!0))},d=()=>u().catch(w=>{if(e.connected)throw w}),m=()=>{if(l!==void 0){clearTimeout(l),l=void 0;return}r&&(o=r(e,c)),n&&(e.addEventListener("ready",d),d()),e.addEventListener("disconnected",v)},f=()=>{l=void 0,o&&o.then(w=>{w()}),c.clearState(),e.removeEventListener("ready",u),e.removeEventListener("disconnected",v)},h=()=>{l=setTimeout(f,_w)},v=()=>{l&&(clearTimeout(l),f())};return e[t]={get state(){return c.state},refresh:u,subscribe(w){a++,a===1&&m();const x=c.subscribe(w);return c.state!==void 0&&setTimeout(()=>w(c.state),0),()=>{x(),a--,a||(i.unsubGrace?h():f())}}},e[t]},Sw=e=>e.sendMessagePromise(iw()),Nw=(e,t,n,r,i,a)=>e.sendMessagePromise(aw(t,n,r,i,a));function jw(e,t){const n=Object.assign({},e.state);if(t.a)for(const r in t.a){const i=t.a[r];let a=new Date(i.lc*1e3).toISOString();n[r]={entity_id:r,state:i.s,attributes:i.a,context:typeof i.c=="string"?{id:i.c,parent_id:null,user_id:null}:i.c,last_changed:a,last_updated:i.lu?new Date(i.lu*1e3).toISOString():a}}if(t.r)for(const r of t.r)delete n[r];if(t.c)for(const r in t.c){let i=n[r];if(!i){console.warn("Received state update for unknown entity",r);continue}i=Object.assign({},i);const{"+":a,"-":o}=t.c[r],l=(a==null?void 0:a.a)||(o==null?void 0:o.a),c=l?Object.assign({},i.attributes):i.attributes;if(a&&(a.s!==void 0&&(i.state=a.s),a.c&&(typeof a.c=="string"?i.context=Object.assign(Object.assign({},i.context),{id:a.c}):i.context=Object.assign(Object.assign({},i.context),a.c)),a.lc?i.last_updated=i.last_changed=new Date(a.lc*1e3).toISOString():a.lu&&(i.last_updated=new Date(a.lu*1e3).toISOString()),a.a&&Object.assign(c,a.a)),o!=null&&o.a)for(const u of o.a)delete c[u];l&&(i.attributes=c),n[r]=i}e.setState(n,!0)}const Cw=(e,t)=>e.subscribeMessage(n=>jw(t,n),{type:"subscribe_entities"});function Ew(e,t){const n=e.state;if(n===void 0)return;const{entity_id:r,new_state:i}=t.data;if(i)e.setState({[i.entity_id]:i});else{const a=Object.assign({},n);delete a[r],e.setState(a,!0)}}async function Tw(e){const t=await Sw(e),n={};for(let r=0;r<t.length;r++){const i=t[r];n[i.entity_id]=i}return n}const Pw=(e,t)=>e.subscribeEvents(n=>Ew(t,n),"state_changed"),Aw=e=>ng(e.haVersion,2022,4,0)?vm(e,"_ent",void 0,Cw):vm(e,"_ent",Tw,Pw),Mw=(e,t)=>Aw(e).subscribe(t);async function Lw(e){const t=Object.assign({setupRetry:0,createSocket:mw},e),n=await t.createSocket(t);return new fw(n,t)}const No="the-monitor-hass-auth",ag="the-monitor-hass-url";function jo(){return localStorage.getItem(ag)||"http://homeassistant.local:8123"}function ku(e){localStorage.setItem(ag,e.replace(/\/$/,""))}function es(e){e?(localStorage.setItem(No,JSON.stringify(e)),e.hassUrl&&ku(e.hassUrl)):localStorage.removeItem(No)}function _u(){try{const e=localStorage.getItem(No);return e?JSON.parse(e):null}catch{return null}}function zw(){localStorage.removeItem(No)}function Su(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).has("auth_callback")}function Ow(){typeof window>"u"||!Su()||window.history.replaceState({},"",window.location.pathname)}function og(){const e=_u();return e!=null&&e.access_token?new wu(e,es):null}async function sg(e){if(!e.expired)return e;if(!e.data.refresh_token)throw new Error("Sitzung abgelaufen — bitte erneut anmelden.");return await e.refreshAccessToken(),e}function $w(e,t,n){const r={},i={states:r,hassUrl:t.data.hassUrl,accessToken:t.accessToken,connection:e,callService:(o,l,c,u,d)=>Nw(e,o,l,{...c,...u},void 0,d)},a=Mw(e,o=>{Object.keys(r).forEach(l=>{l in o||delete r[l]}),Object.assign(r,o),n==null||n(i)});return i._unsubscribe=a,i}async function lg(e,t){const n=await Lw({auth:e});return{hass:$w(n,e,t),connection:n,auth:e}}async function Iw(e,t,n){const r=e.replace(/\/$/,""),i=ww(r,t.trim());return ku(r),es({hassUrl:r,clientId:null,expires:Date.now()+1e11,refresh_token:"",access_token:t.trim(),expires_in:1e11}),lg(i,n)}async function Rw(){const e=await ig({hassUrl:jo(),saveTokens:es,loadTokens:async()=>_u()});return Ow(),e}let Sa=null;async function Dw(){const e=og();return e&&!Su()?sg(e):(Sa||(Sa=Rw().finally(()=>{Sa=null})),Sa)}async function Fw(e){const t=Su(),n=og();if(!t&&!n)return null;const r=t?await Dw():await sg(n);return lg(r,e)}function Ww(e){ku(e),ig({hassUrl:e.replace(/\/$/,""),saveTokens:es,loadTokens:async()=>_u()})}async function Hw(e,t){var n;(n=t==null?void 0:t._unsubscribe)==null||n.call(t),e&&await e.close(),zw()}const cg=b.createContext(null);function ug({children:e,initialHass:t=null,onRegisterUpdate:n,enableMock:r=!1}){const[i,a]=b.useState(t),[o,l]=b.useState(0),[c,u]=b.useState(!1),[d,m]=b.useState(!1),[f,h]=b.useState(null),v=b.useRef(null),w=b.useRef(null),x=!!n,p=b.useCallback(()=>l(M=>M+1),[]),g=b.useCallback(M=>{a(M),u(_o(M)),h(null),l(T=>T+1)},[]),y=b.useCallback(async()=>{await Hw(v.current,w.current),v.current=null,w.current=null},[]),_=b.useCallback((M,T)=>{v.current=T,w.current=M,a(M),u(!1),h(null),p()},[p]),S=b.useCallback(async(M,T)=>{m(!0),h(null);try{await y();const{hass:I,connection:U}=await Iw(M,T,p);_(I,U)}catch(I){throw h((I==null?void 0:I.message)||"Verbindung fehlgeschlagen"),I}finally{m(!1)}},[_,p,y]),E=b.useCallback(M=>{h(null),Ww(M)},[]),C=b.useCallback(async()=>{m(!0);try{await y(),a(r?Hs():null),u(!1),h(null),p()}finally{m(!1)}},[p,r,y]);b.useEffect(()=>{t&&(a(t),l(M=>M+1))},[t]),b.useEffect(()=>(n==null||n(g),()=>n==null?void 0:n(null)),[n,g]),b.useEffect(()=>{if(x||t)return;let M=!1;return(async()=>{m(!0);try{const T=await Fw(p);!M&&T?_(T.hass,T.connection):!M&&r&&(a(Hs()),p())}catch(T){M||(h((T==null?void 0:T.message)||"Verbindung fehlgeschlagen"),r&&(a(Hs()),p()))}finally{M||m(!1)}})(),()=>{M=!0}},[_,p,r,t,x]);const j=b.useMemo(()=>{const M=_o(i);return{hass:i,revision:o,states:(i==null?void 0:i.states)||{},isConnected:M,isMock:!M&&!!i,isEmbedded:c,isConnecting:d,connectionError:f,hassUrl:jo(),getEntity:T=>Et(i,T),callService:(T,I,U)=>G(i,T,I,U),connect:S,login:E,disconnect:C}},[i,o,c,d,f,S,E,C]);return s.jsx(cg.Provider,{value:j,children:e})}function et(){const e=b.useContext(cg);if(!e)throw new Error("useHass must be used within HassProvider");return e}const Bw=[{entity_id:"light.couch_links",label:"Couch links",icon:""},{entity_id:"light.couch_rechts",label:"Couch rechts",icon:""},{entity_id:"switch.shellypstripg4_d885aceaa49c_switch_0",label:"Kaffee Mühle",icon:""},{entity_id:"switch.shellypstripg4_d885aceaa49c_switch_2",label:"Wasserkocher",icon:""}],Uw=[{entity_id:"scene.kino",label:"Kino",icon:""},{entity_id:"scene.wohnzimmer_abend",label:"Abend",icon:""},{entity_id:"scene.gute_nacht",label:"Gute Nacht",icon:""},{entity_id:"scene.wohnzimmer_normal",label:"Normal",icon:""}],Kw={entity_id:"weather.openweather"},qw={entity_id:"media_player.wohnzimmer"},Vw={entity_id:""},Yw={entity_id:"todo.einkaufsliste"},Gw={entity_id:"vacuum.roborock_qrevo_edge_series"},Qw=[],Xw="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2940&auto=format&fit=crop",Na={quickActions:Bw,scenes:Uw,weather:Kw,mediaPlayer:qw,camera:Vw,shoppingList:Yw,vacuum:Gw,presence:Qw,backgroundImage:Xw},Nu="Beispieldaten · 18.06.2026",ts="kWh",Jw={title:"Energiefluss heute",subtitle:Nu,unit:ts,nodes:[{id:"solar",name:"Photovoltaik",column:0,color:"#f9c802"},{id:"grid_in",name:"Netz (Bezug)",column:0,color:"#488fc2"},{id:"home",name:"Haus",column:1,color:"#4db6ac"},{id:"heating",name:"Heizung",column:2,color:"#e57373"},{id:"ev",name:"E-Auto",column:2,color:"#81c784"},{id:"household",name:"Haushalt",column:2,color:"#9575cd"},{id:"battery",name:"Batterie",column:2,color:"#4dd0e1"},{id:"grid_out",name:"Netz (Einspeisung)",column:2,color:"#64b5f6"}],links:[{source:"solar",target:"home",value:8.2},{source:"solar",target:"grid_out",value:2.1},{source:"solar",target:"battery",value:2.1},{source:"grid_in",target:"home",value:3.8},{source:"home",target:"heating",value:6.5},{source:"home",target:"ev",value:4.2},{source:"home",target:"household",value:1.3}]},Zw={title:"Inputs / Outputs",subtitle:Nu,unit:ts,inputs:[{id:"solar",name:"Photovoltaik",value:12.4,color:"#f9c802"},{id:"grid_in",name:"Netz (Bezug)",value:4.6,color:"#488fc2"},{id:"battery_out",name:"Batterie",value:1.2,color:"#4dd0e1"}],outputs:[{id:"consumption",name:"Verbrauch",value:13.2,color:"#4db6ac"},{id:"grid_out",name:"Einspeisung",value:2.1,color:"#64b5f6"},{id:"battery_in",name:"Batterie",value:2.1,color:"#26a69a"}]},e2={title:"E-Auto",subtitle:Nu,unit:ts,items:[{id:"ev",name:"E-Auto",value:4.2,color:"#81c784",demoCharging:!0,sources:[{name:"Netz",value:2.8},{name:"PV",value:1.4}]},{id:"heatpump",name:"Wärmepumpe",value:3.1,color:"#e57373",demoLightOn:!0,sources:[{name:"Netz",value:2.1},{name:"PV",value:1}]}]},Co={"inputs-outputs":{label:"Inputs / Outputs",description:"Quellen und Senken"},"ev-heatpump":{label:"E-Auto & Wärmepumpe",description:"Mobilität und Heizung"}};function Xn(e,t=ts){return`${e>=10?e.toFixed(1):e.toFixed(2)} ${t}`}function t2(e){return e.links.filter(t=>{var n;return((n=e.nodes.find(r=>r.id===t.source))==null?void 0:n.column)===0}).reduce((t,n)=>t+n.value,0)}function n2(e){return e==="ev-heatpump"?e2:Zw}function r2(e,t={}){const n=String(e||"").toLowerCase();if(["charging","on","true"].includes(n))return!0;if(["not charging","idle","off","false","disconnected","complete","finished"].includes(n))return!1;const r=Number(t.power??t.power_kw??t.current_power??t.charging_power);return!!(Number.isFinite(r)&&r>50)}function ta(e,t,n=!1){var a,o;const r=((a=e==null?void 0:e.ev)==null?void 0:a.stateEntity)||"";if(r)return r;const i=((o=t==null?void 0:t.ev)==null?void 0:o.stateEntity)||"";return i||(n?"binary_sensor.grandland_charging":"")}function i2(e,t=!1){var r;const n=((r=e==null?void 0:e.ev)==null?void 0:r.batteryEntity)||"";return n||(t?"sensor.grandland_battery":"")}function a2(e,t,n,r=!1){var a;const i=ta(t,n,r);return i?r?!0:!!((a=e==null?void 0:e.states)!=null&&a[i]):!1}function dg(e,t,n=!1){var a;if(!t||!((a=e==null?void 0:e.states)!=null&&a[t]))return n;const r=e.states[t],i=we(t);return i==="binary_sensor"?r.state==="on":i==="switch"||i==="input_boolean"?Zo(r.state,i):r2(r.state,r.attributes)}const o2=["power","power_kw","current_power","charging_power","charge_power"];function bm(e,t=""){if(!Number.isFinite(e))return null;const n=String(t).toLowerCase();return n==="kw"?e*1e3:n==="w"||n==="watt"?e:!n&&e>0&&e<=50?e*1e3:e}function xm(e){var n,r;if(!e)return null;const t=bm(Number(e.state),(n=e.attributes)==null?void 0:n.unit_of_measurement);if(t!=null&&t>0)return t;for(const i of o2){const a=bm(Number((r=e.attributes)==null?void 0:r[i]));if(a!=null&&a>0)return a}return null}function s2(e,t,n=!1){var l,c,u;const r=((l=t==null?void 0:t.ev)==null?void 0:l.powerEntity)||"";if(r)return r;if(n)return"sensor.grandland_charge_power";const i=(((c=t==null?void 0:t.ev)==null?void 0:c.label)||"").trim().toLowerCase();if(i&&(e!=null&&e.states)){const d=Object.values(e.states).find(m=>{var h;const f=String(((h=m.attributes)==null?void 0:h.friendly_name)||"").toLowerCase();return f.includes(i)&&f.includes("ladeleistung")});if(d)return d.entity_id}const a=ta(t,null,!1),o=a==null?void 0:a.match(/^sensor\.evcc_([^_]+)_/);if(o){const d=`sensor.evcc_${o[1]}_charge_power`;if((u=e==null?void 0:e.states)!=null&&u[d])return d}return""}function l2(e,t,n=!1){var a,o;const r=s2(e,t,n);if(r&&((a=e==null?void 0:e.states)!=null&&a[r])){const l=xm(e.states[r]);if(l!=null)return l}const i=ta(t,null,n);if(i&&((o=e==null?void 0:e.states)!=null&&o[i])){const l=xm(e.states[i]);if(l!=null)return l}return n?11e3:null}function mg(e){if(e==null||!Number.isFinite(e)||e<=0)return"—";const t=e/1e3;return t>=10?`${t.toFixed(1)} kW`:t>=1?`${t.toFixed(1)} kW`:`${t.toFixed(2)} kW`}function c2(e,t,n=null){var o,l,c,u;if(!t||!((o=e==null?void 0:e.states)!=null&&o[t]))return n;const r=e.states[t],i=Number(r.state);if(Number.isFinite(i))return Math.min(100,Math.max(0,Math.round(i)));const a=Number(((l=r.attributes)==null?void 0:l.battery_level)??((c=r.attributes)==null?void 0:c.state_of_charge)??((u=r.attributes)==null?void 0:u.soc));return Number.isFinite(a)?Math.min(100,Math.max(0,Math.round(a))):n}function u2(e,t){var r;return`${((r=e==null?void 0:e.ev)==null?void 0:r.label)||"E-Auto"} lädt`}function d2(e,t,n=null){var o;const i=[`${((o=e==null?void 0:e.ev)==null?void 0:o.label)||"Grandland"} wird geladen`],a=mg(n);return a!=="—"&&i.push(a),t!=null&&i.push(`Akku ${t}%`),i.join(" · ")}const wm="/local/grandland.png",km={ev:{charging:wm,idle:wm,stateEntity:""},heatpump:{lightOn:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",lightOff:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",lightEntity:""}},_m={charging:"Lädt",idle:"Nicht am Laden"},Sm={lightOn:"Mit Licht",lightOff:"Ohne Licht"};function ju(e={}){return{ev:{...km.ev,...e.ev||{}},heatpump:{...km.heatpump,...e.heatpump||{}}}}function qi(e){return ju(e)}function m2(e,t,n=!1){var i;if(!t||!((i=e==null?void 0:e.states)!=null&&i[t]))return n;const r=e.states[t];return Zo(r.state,we(t))}function f2(e,t,n){const r=ju(t),i=n?r.ev.charging:r.ev.idle;return fg(e,i)}function p2(e,t,n){const r=ju(t),i=n?r.heatpump.lightOn:r.heatpump.lightOff;return fg(e,i)}function fg(e,t){return t?Yr(e,t)||t:null}/*! js-yaml 5.4.3 https://github.com/nodeca/js-yaml @license MIT */var ee=Symbol("NOT_RESOLVED");function Fe(e,t){return{tagName:e,nodeKind:"scalar",implicit:t.implicit??!1,matchByTagPrefix:t.matchByTagPrefix??!1,implicitFirstChars:t.implicitFirstChars??null,resolve:t.resolve,identify:t.identify,represent:t.represent??(n=>String(n)),representTagName:t.representTagName??(()=>e)}}function Cu(e,t){const n=t.finalize===void 0;return{tagName:e,nodeKind:"sequence",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addItem:t.addItem,finalize:t.finalize??(r=>r),carrierIsResult:n,identify:t.identify,represent:t.represent??(r=>r),representTagName:t.representTagName??(()=>e)}}function ns(e,t){const n=t.finalize===void 0;return{tagName:e,nodeKind:"mapping",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addPair:t.addPair,has:t.has,keys:t.keys,get:t.get,finalize:t.finalize??(r=>r),carrierIsResult:n,identify:t.identify,represent:t.represent??(r=>r),representTagName:t.representTagName??(()=>e)}}var h2=Fe("tag:yaml.org,2002:str",{resolve:e=>e,identify:e=>typeof e=="string"}),g2=["","~","null","Null","NULL"],y2=Fe("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>g2.indexOf(e)!==-1?null:ee,identify:e=>e===null,represent:()=>"null"}),v2=Fe("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["n"],resolve:(e,t)=>e==="null"||t&&e===""?null:ee,identify:e=>e===null,represent:()=>"null"}),b2=["","~","null","Null","NULL"],x2=Fe("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>b2.indexOf(e)!==-1?null:ee,identify:e=>e===null,represent:()=>"null"}),w2=["true","True","TRUE"],k2=["false","False","FALSE"],_2=Fe("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","T","f","F"],resolve:e=>w2.indexOf(e)!==-1?!0:k2.indexOf(e)!==-1?!1:ee,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),S2=["true"],N2=["false"],j2=Fe("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","f"],resolve:e=>S2.indexOf(e)!==-1?!0:N2.indexOf(e)!==-1?!1:ee,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),C2=["true","True","TRUE","y","Y","yes","Yes","YES","on","On","ON"],E2=["false","False","FALSE","n","N","no","No","NO","off","Off","OFF"],T2=Fe("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["y","Y","n","N","t","T","f","F","o","O"],resolve:e=>C2.indexOf(e)!==-1?!0:E2.indexOf(e)!==-1?!1:ee,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),P2=new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"),A2=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function M2(e){let t=e,n=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(n=-1),t=t.slice(1)),t.startsWith("0b")?n*parseInt(t.slice(2),2):t.startsWith("0o")?n*parseInt(t.slice(2),8):t.startsWith("0x")?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function L2(e,t){if(t){if(!A2.test(e))return ee}else if(!P2.test(e))return ee;const n=M2(e);return Number.isFinite(n)?n:ee}var pg=Fe("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:L2,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),z2=new RegExp("^-?(?:0|[1-9][0-9]*)$"),O2=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function $2(e){let t=e,n=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(n=-1),t=t.slice(1)),t.startsWith("0b")?n*parseInt(t.slice(2),2):t.startsWith("0o")?n*parseInt(t.slice(2),8):t.startsWith("0x")?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function I2(e,t){if(t){if(!O2.test(e))return ee}else if(!z2.test(e))return ee;const n=$2(e);return Number.isFinite(n)?n:ee}var R2=Fe("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:I2,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),D2=new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");function F2(e){let t=e.replace(/_/g,""),n=1;if((t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(n=-1),t=t.slice(1)),t.startsWith("0b"))return n*parseInt(t.slice(2),2);if(t.startsWith("0x"))return n*parseInt(t.slice(2),16);if(t.includes(":")){let r=0;for(const i of t.split(":"))r=r*60+Number(i);return n*r}return t!=="0"&&t[0]==="0"?n*parseInt(t,8):n*parseInt(t,10)}function W2(e){if(!D2.test(e))return ee;const t=F2(e);return Number.isFinite(t)?t:ee}var Xl=Fe("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:W2,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),H2=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),B2=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function U2(e){if(!H2.test(e))return ee;let t=e.toLowerCase();const n=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;const r=n*parseFloat(t);return Number.isFinite(r)||B2.test(e)?r:ee}function K2(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var hg=Fe("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:U2,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:K2}),q2=new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"),V2=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Y2(e,t){if(t){if(!V2.test(e))return ee;let r=e.toLowerCase();const i=r[0]==="-"?-1:1;if("+-".includes(r[0])&&(r=r.slice(1)),r===".inf")return i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(r===".nan")return NaN;const a=i*parseFloat(r);return Number.isFinite(a)?a:ee}if(!q2.test(e))return ee;const n=Number(e);return Number.isFinite(n)?n:ee}function G2(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var Q2=Fe("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:Y2,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:G2}),X2=new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),J2=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Z2(e){if(!X2.test(e))return ee;let t=e.toLowerCase().replace(/_/g,"");const n=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;let r=0;if(t.includes(":")){for(const i of t.split(":"))r=r*60+Number(i);r*=n}else r=n*parseFloat(t);return Number.isFinite(r)||J2.test(e)?r:ee}function e5(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var Jl=Fe("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:Z2,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:e5}),t5=Fe("tag:yaml.org,2002:merge",{implicit:!0,implicitFirstChars:["<"],resolve:(e,t)=>e==="<<"||t&&e===""?"<<":ee,identify:()=>!1}),n5=/^[A-Za-z0-9+/]*={0,2}$/;function r5(e){const t=e.replace(/\s/g,"");if(t.length%4!==0||!n5.test(t))return ee;const n=atob(t),r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}function i5(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}var a5=Fe("tag:yaml.org,2002:binary",{resolve:r5,identify:e=>Object.prototype.toString.call(e)==="[object Uint8Array]",represent:i5}),o5=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),s5=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Nm(e,t,n,r=0,i=0,a=0,o=0){const l=new Date(Date.UTC(e,t,n,r,i,a,o));return l.setUTCFullYear(e,t,n),l}function l5(e){let t=o5.exec(e);if(t===null&&(t=s5.exec(e)),t===null)return ee;const n=+t[1],r=+t[2]-1,i=+t[3];if(!t[4]){const d=Nm(n,r,i);return d.getUTCFullYear()!==n||d.getUTCMonth()!==r||d.getUTCDate()!==i?ee:d}const a=+t[4],o=+t[5],l=+t[6];let c=0;if(a>23||o>59||l>59)return ee;if(t[7]){let d=t[7].slice(0,3);for(;d.length<3;)d+="0";c=+d}const u=Nm(n,r,i,a,o,l,c);if(u.getUTCFullYear()!==n||u.getUTCMonth()!==r||u.getUTCDate()!==i)return ee;if(t[9]){const d=+t[10],m=+(t[11]||0);if(d>23||m>59)return ee;const f=(d*60+m)*6e4;u.setTime(u.getTime()-(t[9]==="-"?-f:f))}return u}var c5=Fe("tag:yaml.org,2002:timestamp",{implicit:!0,implicitFirstChars:[..."0123456789"],resolve:l5,identify:e=>e instanceof Date,represent:e=>e.toISOString()}),u5=Cu("tag:yaml.org,2002:seq",{create:()=>[],addItem:(e,t)=>{e.push(t)},identify:Array.isArray});function rs(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function Zl(e,t){const n={};for(const r of t)e[r]!==void 0&&(n[r]=e[r]);return n}var d5=Cu("tag:yaml.org,2002:omap",{create:()=>({list:[],seen:new Set}),addItem:(e,t)=>{let n;if(t instanceof Map){if(t.size!==1)return"cannot resolve an ordered map item";n=t.keys().next().value}else if(rs(t)){const r=Object.keys(t);if(r.length!==1)return"cannot resolve an ordered map item";n=r[0]}else return"cannot resolve an ordered map item";return e.seen.has(n)?"duplicate key in ordered map":(e.seen.add(n),e.list.push(t),"")},finalize:e=>e.list,identify:()=>!1}),m5=Cu("tag:yaml.org,2002:pairs",{create:()=>[],addItem:(e,t)=>{if(t instanceof Map)return t.size!==1?"cannot resolve a pairs item":(e.push(t.entries().next().value),"");if(Object.prototype.toString.call(t)!=="[object Object]")return"cannot resolve a pairs item";const n=t,r=Object.keys(n);return r.length!==1?"cannot resolve a pairs item":(e.push([r[0],n[r[0]]]),"")},identify:()=>!1}),f5=ns("tag:yaml.org,2002:map",{create:()=>({}),identify:rs,represent:e=>{const t=new Map;for(const n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{if(t!==null&&typeof t=="object")return"object-based map does not support complex keys";const r=String(t);return r==="__proto__"?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,""},has:(e,t)=>t!==null&&typeof t=="object"?!1:Object.prototype.hasOwnProperty.call(e,String(t)),keys:e=>Object.keys(e),get:(e,t)=>{const n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}}),p5=ns("tag:yaml.org,2002:set",{create:()=>new Set,identify:e=>e instanceof Set,represent:e=>{const t=new Map;for(const n of e)t.set(n,null);return t},addPair:(e,t,n)=>n!==null?"cannot resolve a set item":(e.add(t),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:()=>null});function h5(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function g5(){return{scalar:[],sequence:[],mapping:[]}}function y5(e){const t=[];for(const n of e){let r=t.length;for(let i=0;i<t.length;i++){const a=t[i];if(a.nodeKind===n.nodeKind&&a.tagName===n.tagName&&a.matchByTagPrefix===n.matchByTagPrefix){r=i;break}}t[r]=n}return t}var is=class gg{constructor(t){dt(this,"tags");dt(this,"implicitScalarTags");dt(this,"implicitScalarByFirstChar");dt(this,"implicitScalarAnyFirstChar");dt(this,"defaultScalarTag");dt(this,"defaultSequenceTag");dt(this,"defaultMappingTag");dt(this,"exact");dt(this,"prefix");const n=y5(t),r=[],i=h5(),a=g5();for(const d of n){if(d.nodeKind==="scalar"&&d.implicit){if(d.matchByTagPrefix)throw new Error("Implicit scalar tags cannot match by tag prefix");r.push(d)}switch(d.nodeKind){case"scalar":d.matchByTagPrefix?a.scalar.push(d):i.scalar[d.tagName]=d;break;case"sequence":d.matchByTagPrefix?a.sequence.push(d):i.sequence[d.tagName]=d;break;case"mapping":d.matchByTagPrefix?a.mapping.push(d):i.mapping[d.tagName]=d;break}}const o=r.filter(d=>d.implicitFirstChars===null),l=new Set;for(const d of r)if(d.implicitFirstChars!==null)for(const m of d.implicitFirstChars)l.add(m);const c=new Map;for(const d of l)c.set(d,r.filter(m=>m.implicitFirstChars===null||m.implicitFirstChars.indexOf(d)!==-1));const u=i.scalar["tag:yaml.org,2002:str"];if(!u)throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");this.tags=n,this.implicitScalarTags=r,this.implicitScalarByFirstChar=c,this.implicitScalarAnyFirstChar=o,this.defaultScalarTag=u,this.defaultSequenceTag=i.sequence["tag:yaml.org,2002:seq"],this.defaultMappingTag=i.mapping["tag:yaml.org,2002:map"],this.exact=i,this.prefix=a}lookupScalarTag(t){const n=this.exact.scalar[t];if(n)return n;for(const r of this.prefix.scalar)if(t.startsWith(r.tagName))return r}lookupSequenceTag(t){const n=this.exact.sequence[t];if(n)return n;for(const r of this.prefix.sequence)if(t.startsWith(r.tagName))return r}lookupMappingTag(t){const n=this.exact.mapping[t];if(n)return n;for(const r of this.prefix.mapping)if(t.startsWith(r.tagName))return r}resolveImplicitScalarTag(t){const n=this.implicitScalarByFirstChar.get(t.charAt(0))??this.implicitScalarAnyFirstChar;for(const i of n){const a=i.resolve(t,!1,i.tagName);if(a!==ee)return{value:a,tag:i}}const r=this.defaultScalarTag;return{value:r.resolve(t,!1,r.tagName),tag:r}}withTags(...t){let n=[];for(const r of t)n=n.concat(r);return new gg([...this.tags,...n])}},Eu=new is([h2,u5,f5]);new is([...Eu.tags,v2,j2,R2,Q2]);var v5=new is([...Eu.tags,y2,_2,pg,hg]),b5=new is([...Eu.tags,x2,T2,Xl,Jl,c5,t5,a5,d5,m5,p5]),x5=b5.withTags({...Xl,resolve:(e,t,n)=>{const r=Xl.resolve(e,t,n);return r===ee?pg.resolve(e,t,n):r}},{...Jl,resolve:(e,t,n)=>{const r=Jl.resolve(e,t,n);return r===ee?hg.resolve(e,t,n):r}});ns("tag:yaml.org,2002:map",{create:()=>new Map,addPair:(e,t,n)=>(e.set(t,n),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:(e,t)=>e.get(t),identify:e=>e instanceof Map||rs(e),represent:e=>{if(e instanceof Map)return e;const t=new Map,n=e;for(const r of Object.keys(n))t.set(r,n[r]);return t}});function jm(e){if(Array.isArray(e)){const t=Array.prototype.slice.call(e);for(let n=0;n<t.length;n++){if(Array.isArray(t[n]))return null;typeof t[n]=="object"&&Object.prototype.toString.call(t[n])==="[object Object]"&&(t[n]="[object Object]")}return String(t)}return typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"?"[object Object]":String(e)}ns("tag:yaml.org,2002:map",{create:()=>({}),identify:rs,represent:e=>{const t=new Map;for(const n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{const r=jm(t);return r===null?"nested arrays are not supported inside keys":(r==="__proto__"?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,"")},has:(e,t)=>{const n=jm(t);return n!==null&&Object.prototype.hasOwnProperty.call(e,n)},keys:e=>Object.keys(e),get:(e,t)=>{const n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}});var w5={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function Us(e,t,n,r,i){let a="",o="";const l=Math.floor(i/2)-1;return r-t>l&&(a=" ... ",t=r-l+a.length),n-r>l&&(o=" ...",n=r+l-o.length),{str:a+e.slice(t,n).replace(/\t/g,"→")+o,pos:r-t+a.length}}function Ks(e,t){return" ".repeat(Math.max(t-e.length,0))+e}function k5(e,t){if(!e.buffer)return null;const n={...w5,...t},r=/\r?\n|\r|\0/g,i=[0],a=[];let o,l=-1;for(;o=r.exec(e.buffer);)a.push(o.index),i.push(o.index+o[0].length),e.position<=o.index&&l<0&&(l=i.length-2);l<0&&(l=i.length-1);let c="";const u=Math.min(e.line+n.linesAfter,a.length).toString().length,d=n.maxLength-(n.indent+u+3);for(let f=1;f<=n.linesBefore&&!(l-f<0);f++){const h=Us(e.buffer,i[l-f],a[l-f],e.position-(i[l]-i[l-f]),d);c=`${" ".repeat(n.indent)}${Ks((e.line-f+1).toString(),u)} | ${h.str}
${c}`}const m=Us(e.buffer,i[l],a[l],e.position,d);c+=`${" ".repeat(n.indent)}${Ks((e.line+1).toString(),u)} | ${m.str}
`,c+=`${"-".repeat(n.indent+u+3+m.pos)}^
`;for(let f=1;f<=n.linesAfter&&!(l+f>=a.length);f++){const h=Us(e.buffer,i[l+f],a[l+f],e.position-(i[l]-i[l+f]),d);c+=`${" ".repeat(n.indent)}${Ks((e.line+f+1).toString(),u)} | ${h.str}
`}return c.replace(/\n$/,"")}function Cm(e,t){let n="";return e.mark?(e.mark.name&&(n+=`in "${e.mark.name}" `),n+=`(${e.mark.line+1}:${e.mark.column+1})`,!t&&e.mark.snippet&&(n+=`

${e.mark.snippet}`),`${e.reason} ${n}`):e.reason}var jn=class yg extends Error{constructor(n,r){super();dt(this,"reason");dt(this,"mark");this.name="YAMLException",this.reason=n,this.mark=r,this.message=Cm(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(n){return`${this.name}: ${Cm(this,n)}`}static throwAt(n,r,i,a=""){let o=0,l=0;for(let u=0;u<r;u++){const d=n.charCodeAt(u);d===10?(o++,l=u+1):d===13&&(o++,n.charCodeAt(u+1)===10&&u++,l=u+1)}const c={name:a,buffer:n,position:r,line:o,column:r-l};throw c.snippet=k5(c),new yg(i,c)}},Ae={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6},K={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5},xt={BLOCK:1,FLOW:2},It={CLIP:1,STRIP:2,KEEP:3},_5=-1;function Em(e){switch(e){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}var vg=new Array(256),bg=new Array(256);for(let e=0;e<256;e++)vg[e]=Em(e)?1:0,bg[e]=Em(e);function S5(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function N5(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function j5(e){return e===120?2:e===117?4:8}function Eo(e,t,n){let r=0;for(;t<n;){const i=e.charCodeAt(t);if(i===10)r++,t++;else if(i===13)r++,t++,e.charCodeAt(t)===10&&t++;else if(i===32||i===9)t++;else break}return{position:t,breaks:r}}function Tu(e){return e===1?" ":`
`.repeat(e-1)}function C5(e,t,n){let r="",i=t,a=t,o=t;for(;i<n;){const l=e.charCodeAt(i);if(l===10||l===13){r+=e.slice(a,o);const c=Eo(e,i,n);r+=Tu(c.breaks),i=a=o=c.position}else i++,l!==32&&l!==9&&(o=i)}return r+e.slice(a,o)}function E5(e,t,n){let r="",i=t,a=t,o=t;for(;i<n;){const l=e.charCodeAt(i);if(l===39)r+=e.slice(a,i)+"'",i+=2,a=o=i;else if(l===10||l===13){r+=e.slice(a,o);const c=Eo(e,i,n);r+=Tu(c.breaks),i=a=o=c.position}else i++,l!==32&&l!==9&&(o=i)}return r+e.slice(a,n)}function T5(e,t,n){let r="",i=t,a=t,o=t;for(;i<n;){const l=e.charCodeAt(i);if(l===92){r+=e.slice(a,i),i++;const c=e.charCodeAt(i);if(c===10||c===13)i=Eo(e,i,n).position;else if(c<256&&vg[c])r+=bg[c],i++;else{let u=j5(c),d=0;for(;u>0;u--){i++;const m=N5(e.charCodeAt(i));d=(d<<4)+m}r+=S5(d),i++}a=o=i}else if(l===10||l===13){r+=e.slice(a,o);const c=Eo(e,i,n);r+=Tu(c.breaks),i=a=o=c.position}else i++,l!==32&&l!==9&&(o=i)}return r+e.slice(a,n)}function Tm(e,t,n,r,i,a){const o=r<0?0:r,l=e.slice(t,n).replace(/\r\n?/g,`
`),c=l===""?[]:(l.endsWith(`
`)?l.slice(0,-1):l).split(`
`);let u="",d=!1,m=0,f=!1;for(const h of c){let v=0;for(;v<o&&h.charCodeAt(v)===32;)v++;if(r<0||v>=h.length){m++;continue}const w=h.slice(o),x=w.charCodeAt(0);a?x===32||x===9?(f=!0,u+=`
`.repeat(d?1+m:m)):f?(f=!1,u+=`
`.repeat(m+1)):m===0?d&&(u+=" "):u+=`
`.repeat(m):u+=`
`.repeat(d?1+m:m),u+=w,d=!0,m=0}return i===It.KEEP?u+=`
`.repeat(d?1+m:m):i!==It.STRIP&&d&&(u+=`
`),u}function P5(e,t){if(t.valueStart===_5)return"";const{valueStart:n,valueEnd:r}=t;if(t.fast)return e.slice(n,r);switch(t.style){case K.SINGLE_QUOTED:return E5(e,n,r);case K.DOUBLE_QUOTED:return T5(e,n,r);case K.LITERAL_BLOCK:return Tm(e,n,r,t.indent,t.chomping,!1);case K.FOLDED_BLOCK:return Tm(e,n,r,t.indent,t.chomping,!0);default:return C5(e,n,r)}}var A5=Object.assign(Object.create(null),{"!":"!","!!":"tag:yaml.org,2002:"});function qs(e){return encodeURI(e).replace(/!/g,"%21")}function xg(e,t){if(e.startsWith("!<")&&e.endsWith(">"))return decodeURIComponent(e.slice(2,-1));const n=e.indexOf("!",1),r=n===-1?"!":e.slice(0,n+1),i=(t==null?void 0:t[r])??A5[r]??r;return decodeURIComponent(i)+decodeURIComponent(e.slice(r.length))}function wg(e){let t=e;return t.charCodeAt(0)===33?(t=t.slice(1),`!${qs(t)}`):t.slice(0,18)==="tag:yaml.org,2002:"?`!!${qs(t.slice(18))}`:`!<${qs(t)}>`}var Tr=-1,M5="tag:yaml.org,2002:merge",Pu={filename:"",schema:v5,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function L5(e){return"tagStart"in e&&e.tagStart!==Tr?e.tagStart:"anchorStart"in e&&e.anchorStart!==Tr?e.anchorStart:"valueStart"in e&&e.valueStart!==Tr?e.valueStart:"start"in e?e.start:0}function Me(e,t){jn.throwAt(e.source,e.position,t,e.filename)}function kg(e,t,n,r){try{return n.finalize(r)}catch(i){if(i instanceof jn)throw i;jn.throwAt(e.source,t,i instanceof Error?i.message:String(i),e.filename)}}function z5(e,t){const n=P5(e.source,t),r=t.tagStart===Tr?"":e.source.slice(t.tagStart,t.tagEnd),i=e.schema.defaultScalarTag;if(r!==""){if(r==="!")return{value:n,tag:i};const a=xg(r,e.tagHandlers),o=e.schema.lookupScalarTag(a);if(o){const c=o.resolve(n,!0,a);return c===ee&&Me(e,`cannot resolve a node with !<${a}> explicit tag`),{value:c,tag:o}}const l=e.schema.lookupMappingTag(a)??e.schema.lookupSequenceTag(a);if(l){n!==""&&Me(e,`cannot resolve a node with !<${a}> explicit tag`);const c=l.create(a);return{value:l.carrierIsResult?c:kg(e,e.position,l,c),tag:l}}Me(e,`unknown scalar tag !<${a}>`)}return t.style===K.PLAIN?e.schema.resolveImplicitScalarTag(n):{value:i.resolve(n,!1,i.tagName),tag:i}}function Pm(e,t,n){const r=t.tagStart===Tr?"":e.source.slice(t.tagStart,t.tagEnd);return r===""||r==="!"?n:xg(r,e.tagHandlers)}function _g(e){return e.nodeKind==="mapping"}function Am(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&Me(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`)}function Mm(e,t,n,r){Am(e);for(const i of r.keys(n)){if(Am(e),t.tag.has(t.value,i))continue;const a=t.tag.addPair(t.value,i,r.get(n,i));a&&Me(e,a),t.overridable??(t.overridable=new Set),t.overridable.add(i)}}function O5(e,t,n,r){if(e.position=t.keyPosition,_g(r))Mm(e,t,n,r);else if(r.nodeKind==="sequence"&&Array.isArray(n)){n.length>100&&Me(e,"abnormal merge sequence size");for(const i of n){const a=e.nodeTags.get(i);a||Me(e,"cannot merge mappings; the provided source object is unacceptable"),Mm(e,t,i,a)}}else Me(e,"cannot merge mappings; the provided source object is unacceptable")}function $5(e,t,n,r,i){var o,l;if(e.position=t.keyPosition,t.keyIsMerge){O5(e,t,r,i);return}!e.json&&t.tag.has(t.value,n)&&!((o=t.overridable)!=null&&o.has(n))&&Me(e,"duplicated mapping key");const a=t.tag.addPair(t.value,n,r);a&&Me(e,a),(l=t.overridable)==null||l.delete(n)}function Vs(e,t,n){const r=e.frames[e.frames.length-1];if(r.kind==="document")r.value=t,r.hasValue=!0;else if(r.kind==="sequence"){_g(n)&&e.nodeTags.set(t,n);const i=r.tag.addItem(r.value,t,r.index++);i&&Me(e,i)}else if(r.hasKey){const i=r.key;r.key=void 0,r.hasKey=!1,$5(e,r,i,t,n)}else r.key=t,r.keyPosition=e.position,r.hasKey=!0,r.keyIsMerge=n.tagName===M5}function Ys(e,t,n,r,i){if(t.anchorStart!==Tr){const a={value:n,tag:r,isValueFinal:i};return e.anchors.set(e.source.slice(t.anchorStart,t.anchorEnd),a),a}return null}function I5(e,t){const n={...Pu,...t,events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:new Map,nodeTags:new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0};for(;n.eventIndex<n.events.length;){const r=n.events[n.eventIndex++];switch(n.position=L5(r),r.type){case Ae.DOCUMENT:n.anchors=new Map,n.nodeTags=new Map,n.aliasCount=0,n.tagHandlers=Object.create(null);for(const i of r.directives)i.kind==="tag"&&(n.tagHandlers[i.handle]=i.prefix);n.frames.push({kind:"document",position:n.position,value:void 0,hasValue:!1});break;case Ae.SCALAR:{const{value:i,tag:a}=z5(n,r);Ys(n,r,i,a,!0),Vs(n,i,a);break}case Ae.SEQUENCE:{const i=Pm(n,r,"tag:yaml.org,2002:seq"),a=n.schema.lookupSequenceTag(i);a||Me(n,`unknown sequence tag !<${i}>`);const o=a.create(i),l=Ys(n,r,o,a,a.carrierIsResult);n.frames.push({kind:"sequence",position:n.position,value:o,tag:a,anchor:l,index:0});break}case Ae.MAPPING:{const i=Pm(n,r,"tag:yaml.org,2002:map"),a=n.schema.lookupMappingTag(i);a||Me(n,`unknown mapping tag !<${i}>`);const o=a.create(i),l=Ys(n,r,o,a,a.carrierIsResult);n.frames.push({kind:"mapping",position:n.position,value:o,tag:a,anchor:l,key:void 0,keyPosition:n.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case Ae.ALIAS:{n.maxAliases!==-1&&++n.aliasCount>n.maxAliases&&Me(n,`aliases exceeded maxAliases (${n.maxAliases})`);const i=n.source.slice(r.anchorStart,r.anchorEnd),a=n.anchors.get(i);a||Me(n,`unidentified alias "${i}"`),a.isValueFinal||Me(n,`recursive alias "${i}" is not supported for tag ${a.tag.tagName} because it uses finalize()`),Vs(n,a.value,a.tag);break}case Ae.POP:{const i=n.frames.pop();if(i.kind==="mapping"&&i.hasKey&&(n.position=i.keyPosition,Me(n,"incomplete mapping pair in event stream")),i.kind==="document")n.documents.push(i.value);else{const a=i.tag.carrierIsResult?i.value:kg(n,i.position,i.tag,i.value);i.anchor&&(i.anchor.value=a,i.anchor.isValueFinal=!0),Vs(n,a,i.tag)}break}}}return n.documents}var ne=-1,Sg=Object.prototype.hasOwnProperty,Fr=1,Ng=2,jg=3,To=4,R5=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,D5=/[,\[\]{}]/,Cg=/^(?:!|!!|![0-9A-Za-z-]+!)$/,ec=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`,Eg=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`,F5=new RegExp(`^(?:${ec})*$`),W5=new RegExp(`^(?:${Eg})+$`),H5=new RegExp(`^(?:!(?:${ec})*|${Eg}(?:${ec})*)$`),Au={filename:"",maxDepth:100};function B5(e,t,n){e.events.push({type:Ae.DOCUMENT,explicitStart:t,explicitEnd:n,directives:e.directives})}function Tg(e,t,n,r,i,a,o){e.events.push({type:Ae.SEQUENCE,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:a,style:o})}function Pg(e,t,n,r,i,a,o){e.events.push({type:Ae.MAPPING,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:a,style:o})}function Lm(e,t){e.events.splice(t.eventsLength,0,{type:Ae.MAPPING,start:t.position,anchorStart:ne,anchorEnd:ne,tagStart:ne,tagEnd:ne,style:xt.FLOW})}function Gr(e,t,n,r,i,a,o,l,c=It.CLIP,u=-1,d=!1){e.events.push({type:Ae.SCALAR,valueStart:t,valueEnd:n,anchorStart:r,anchorEnd:i,tagStart:a,tagEnd:o,style:l,chomping:c,indent:u,fast:d})}function U5(e,t,n){e.events.push({type:Ae.ALIAS,anchorStart:t,anchorEnd:n})}function Pr(e){e.events.push({type:Ae.POP})}function He(e){Gr(e,ne,ne,ne,ne,ne,ne,K.PLAIN)}function zm(){return{anchorStart:ne,anchorEnd:ne,tagStart:ne,tagEnd:ne}}function Ar(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function Mr(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.events.length=t.eventsLength}function B(e,t){jn.throwAt(e.input.slice(0,e.length),e.position,t,e.filename)}function Ne(e){return e===10||e===13}function Qr(e){return e===9||e===32}function Tt(e){return Qr(e)||Ne(e)}function Yt(e){return e===0||Tt(e)}function Jn(e){return e===44||e===91||e===93||e===123||e===125}function K5(e){return e>=48&&e<=57?e-48:-1}function q5(e){if(e>=48&&e<=57)return e-48;const t=e|32;return t>=97&&t<=102?t-97+10:-1}function V5(e){return e===120?2:e===117?4:e===85?8:0}function Y5(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function Po(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function Re(e,t){let n=0,r=e.input.charCodeAt(e.position),i=e.position===e.lineStart||Tt(e.input.charCodeAt(e.position-1));for(;r!==0;){for(;Qr(r);)i=!0,r===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&i&&r===35)do r=e.input.charCodeAt(++e.position);while(!Ne(r)&&r!==0);if(!Ne(r))break;for(Po(e),n++,i=!0,r=e.input.charCodeAt(e.position);r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return n}function Wr(e,t=e.position){const n=e.input.charCodeAt(t);if((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)){const r=e.input.charCodeAt(t+3);return r===0||Tt(r)}return!1}function Ag(e){e.position===e.lineStart&&e.input.charCodeAt(e.position)===65279&&(e.position++,e.lineStart=e.position)}function Mu(e){if(e.position!==e.lineStart)return!1;if(Wr(e))return!0;if(e.input.charCodeAt(e.position)!==65279)return!1;const t=Ar(e);Ag(e),Re(e,!0);const n=e.input.charCodeAt(e.position),r=e.position===e.lineStart&&(n===37||n===45&&Wr(e));return Mr(e,t),r}function Om(e){let t=e.input.charCodeAt(e.position);for(;t!==0&&!Ne(t);)t=e.input.charCodeAt(++e.position)}function Mg(e,t,n){R5.test(e.input.slice(t,n))&&B(e,"the stream contains non-printable characters")}function G5(e,t,n){if(e.input.charCodeAt(e.position)!==33)return!1;t.tagStart!==ne&&B(e,"duplication of a tag property");const r=e.position;let i=!1,a=!1,o="!",l=e.input.charCodeAt(++e.position);l===60?(i=!0,l=e.input.charCodeAt(++e.position)):l===33&&(a=!0,o="!!",l=e.input.charCodeAt(++e.position));let c=e.position,u;if(i){for(;l!==0&&l!==62;)l=e.input.charCodeAt(++e.position);l!==62&&B(e,"unexpected end of the stream within a verbatim tag"),u=e.input.slice(c,e.position),e.position++}else{for(;l!==0&&!Tt(l)&&!(n&&Jn(l));)l===33&&(a?B(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(c-1,e.position+1),Cg.test(o)||B(e,"named tag handle cannot contain such characters"),a=!0,c=e.position+1)),l=e.input.charCodeAt(++e.position);u=e.input.slice(c,e.position),D5.test(u)&&B(e,"tag suffix cannot contain flow indicator characters")}return u&&!(i?F5.test(u):W5.test(u))&&B(e,`tag name cannot contain such characters: ${u}`),!i&&o!=="!"&&o!=="!!"&&!Sg.call(e.tagHandlers,o)&&B(e,`undeclared tag handle "${o}"`),t.tagStart=r,t.tagEnd=e.position,!0}function Q5(e,t){if(e.input.charCodeAt(e.position)!==38)return!1;t.anchorStart!==ne&&B(e,"duplication of an anchor property"),e.position++;const n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Tt(e.input.charCodeAt(e.position))&&!Jn(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&B(e,"name of an anchor node must contain at least one character"),t.anchorStart=n,t.anchorEnd=e.position,!0}function X5(e,t){if(e.input.charCodeAt(e.position)!==42)return!1;(t.anchorStart!==ne||t.tagStart!==ne)&&B(e,"alias node should not have any properties"),e.position++;const n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Tt(e.input.charCodeAt(e.position))&&!Jn(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&B(e,"name of an alias node must contain at least one character"),U5(e,n,e.position),!0}function tc(e,t){Re(e,!1),e.lineIndent<t&&B(e,"deficient indentation")}function J5(e,t,n){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;const r=e.position;let i=!0;for(;e.input.charCodeAt(e.position)!==0;){const a=e.input.charCodeAt(e.position);if(a===39){if(e.input.charCodeAt(e.position+1)===39){i=!1,e.position+=2;continue}const o=e.position;return e.position++,Gr(e,r,o,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,K.SINGLE_QUOTED,It.CLIP,-1,i),!0}Ne(a)?(i=!1,tc(e,t)):e.position===e.lineStart&&Wr(e)?B(e,"unexpected end of the document within a single quoted scalar"):a!==9&&a<32?B(e,"expected valid JSON character"):e.position++}B(e,"unexpected end of the stream within a single quoted scalar")}function Z5(e,t,n){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;const r=e.position;let i=!0;for(;e.input.charCodeAt(e.position)!==0;){const a=e.input.charCodeAt(e.position);if(a===34){const o=e.position;return e.position++,Gr(e,r,o,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,K.DOUBLE_QUOTED,It.CLIP,-1,i),!0}if(a===92){i=!1;const o=e.input.charCodeAt(++e.position);if(Ne(o))tc(e,t);else if(Y5(o))e.position++;else{let l=V5(o);for(l===0&&B(e,"unknown escape sequence");l-- >0;)e.position++,q5(e.input.charCodeAt(e.position))<0&&B(e,"expected hexadecimal character");e.position++}}else Ne(a)?(i=!1,tc(e,t)):e.position===e.lineStart&&Wr(e)?B(e,"unexpected end of the document within a double quoted scalar"):a!==9&&a<32?B(e,"expected valid JSON character"):e.position++}B(e,"unexpected end of the stream within a double quoted scalar")}function ek(e,t,n){const r=e.input.charCodeAt(e.position);let i=It.CLIP,a=-1,o=!1;if(r!==124&&r!==62)return!1;const l=r===124?K.LITERAL_BLOCK:K.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){const h=e.input.charCodeAt(e.position),v=K5(h);if(h===43||h===45)i!==It.CLIP&&B(e,"repeat of a chomping mode identifier"),i=h===43?It.KEEP:It.STRIP,e.position++;else if(v>=0)v===0&&B(e,"bad explicit indentation width of a block scalar; it cannot be less than one"),o&&B(e,"repeat of an indentation width identifier"),a=t+v-1,o=!0,e.position++;else break}let c=!1;for(;Qr(e.input.charCodeAt(e.position));)c=!0,e.position++;c&&e.input.charCodeAt(e.position)===35&&Om(e),Ne(e.input.charCodeAt(e.position))?Po(e):e.input.charCodeAt(e.position)!==0&&B(e,"a line break is expected");let u=o?a:-1,d=0;const m=e.position;let f=e.position;for(;e.input.charCodeAt(e.position)!==0;){const h=e.position;let v=0;for(;e.input.charCodeAt(h+v)===32;)v++;const w=e.input.charCodeAt(h+v);if(w===0){u>=0?v>u&&(f=h+v):v>0&&(f=h+v);break}if(Mu(e))break;if(!o&&u===-1&&Ne(w)&&(d=Math.max(d,v)),!o&&u===-1&&!Ne(w)&&(w===9&&v<t&&(e.position=h+v,B(e,"tab characters must not be used in indentation")),v>=t&&v<d&&(e.position=h+v,B(e,"bad indentation of a mapping entry"))),u===-1&&w!==0&&!Ne(w)&&v<t){e.lineIndent=v,e.position=h+v;break}!o&&w!==0&&!Ne(w)&&u===-1&&(u=v);const x=u===-1?t+1:u;if(w!==0&&!Ne(w)&&v<x){e.lineIndent=v,e.position=h+v;break}Om(e),f=e.position,Ne(e.input.charCodeAt(e.position))&&(Po(e),f=e.position)}return Mg(e,m,f),Gr(e,m,f,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,l,i,u),!0}function tk(e,t){const n=e.input.charCodeAt(e.position),r=t===Fr;if(n===0||Tt(n)||n===35||n===38||n===42||n===33||n===124||n===62||n===39||n===34||n===37||n===64||n===96||r&&Jn(n))return!1;if(n===63||n===45){const i=e.input.charCodeAt(e.position+1);if(Yt(i)||r&&Jn(i))return!1}return!0}function nk(e,t,n,r){if(!tk(e,n))return!1;const i=e.position;let a=e.position,o=e.input.charCodeAt(e.position);const l=n===Fr;let c=!1;for(;o!==0&&!Mu(e);){if(o===58){const u=e.input.charCodeAt(e.position+1);if(Yt(u)||l&&Jn(u))break}else if(o===35){if(Tt(e.input.charCodeAt(e.position-1)))break}else{if(l&&Jn(o))break;if(Ne(o)){const u=e.position,d=e.line,m=e.lineStart,f=e.lineIndent;if(Re(e,!1),e.lineIndent>=t){c=!0,o=e.input.charCodeAt(e.position);continue}e.position=u,e.line=d,e.lineStart=m,e.lineIndent=f;break}}Qr(o)||(a=e.position+1),o=e.input.charCodeAt(++e.position)}return a===i?!1:(Mg(e,i,a),Gr(e,i,a,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,K.PLAIN,It.CLIP,-1,!c),!0)}function si(e,t){const n=e.line;Re(e,!0),(e.line>n&&e.lineIndent<t||e.firstTabInLine!==-1&&e.lineIndent<t)&&B(e,"deficient indentation")}function rk(e,t,n){const r=e.input.charCodeAt(e.position),i=r===123,a=e.position;let o=!0;if(r!==91&&r!==123)return!1;const l=i?125:93;for(i?Pg(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,xt.FLOW):Tg(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,xt.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){si(e,t);let c=e.input.charCodeAt(e.position);if(c===l)return e.position++,Pr(e),!0;o?c===44&&B(e,"expected the node content, but found ','"):B(e,"missed comma between flow collection entries");let u=!1,d=!1;c===63&&Tt(e.input.charCodeAt(e.position+1))&&(u=d=!0,e.position+=1,si(e,t));const m=e.line,f=Ar(e),h=Hr(e,t,Fr,!1,!0);si(e,t),c=e.input.charCodeAt(e.position),(i||d||e.line===m)&&c===58?(u=!0,e.position++,si(e,t),i||Lm(e,f),h||He(e),Hr(e,t,Fr,!1,!0)||He(e),si(e,t),i||Pr(e)):i&&u?(h||He(e),He(e)):i?He(e):u&&(Lm(e,f),h||He(e),He(e),Pr(e)),c=e.input.charCodeAt(e.position),c===44?(o=!0,e.position++):o=!1}B(e,"unexpected end of the stream within a flow collection")}function $m(e,t,n){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!Yt(e.input.charCodeAt(e.position+1)))return!1;for(Tg(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,xt.BLOCK);e.input.charCodeAt(e.position)===45&&Yt(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,B(e,"tab characters must not be used in indentation"));const r=e.line;e.position++;const i=Re(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&Yt(e.input.charCodeAt(e.position+1))&&B(e,"bad indentation of a sequence entry"),i&&e.lineIndent<=t?He(e):Hr(e,t,jg,!1,!0),Re(e,!0),e.lineIndent<t||e.position>=e.length)break;e.lineIndent>t&&B(e,"bad indentation of a sequence entry"),e.line===r&&e.input.charCodeAt(e.position)===45&&Yt(e.input.charCodeAt(e.position+1))&&B(e,"bad indentation of a sequence entry")}return Pr(e),!0}function Gs(e,t,n,r){let i=!1,a=!1,o=!1,l=!1;if(e.firstTabInLine!==-1)return!1;let c=e.input.charCodeAt(e.position);for(;c!==0;){!i&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,B(e,"tab characters must not be used in indentation"));const u=e.input.charCodeAt(e.position+1),d=e.line;if((c===63||c===58)&&Yt(u))o||(Pg(e,e.position,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,xt.BLOCK),o=!0),c===63?(i&&He(e),a=!0,i=!0):(i||(He(e),a=!0),i=!1),e.position+=1,l=!0;else{i&&(He(e),i=!1);const m=Ar(e);if(!Hr(e,n,Ng,!1,!0))break;if(e.line===d){for(c=e.input.charCodeAt(e.position);Qr(c);)c=e.input.charCodeAt(++e.position);if(c===58)c=e.input.charCodeAt(++e.position),Yt(c)||B(e,"a whitespace character is expected after the key-value separator within a block mapping"),o||(e.events.splice(m.eventsLength,0,{type:Ae.MAPPING,start:m.position,anchorStart:r.anchorStart,anchorEnd:r.anchorEnd,tagStart:r.tagStart,tagEnd:r.tagEnd,style:xt.BLOCK}),o=!0),a=!0,i=!1,l=!1;else if(a)B(e,"expected ':' after a mapping key");else return r.anchorStart!==ne||r.tagStart!==ne?(Mr(e,m),!1):!0}else if(a)B(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return r.anchorStart!==ne||r.tagStart!==ne?(Mr(e,m),!1):!0}if(Hr(e,t,To,!0,l)&&(l=!1),i||l&&(He(e),l=!1),Re(e,!0),c=e.input.charCodeAt(e.position),(e.line===d||e.lineIndent>t)&&c!==0)B(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return a?(i&&He(e),o&&Pr(e),!0):!1}function Hr(e,t,n,r,i,a=!0){var v,w;e.depth>=e.maxDepth&&B(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let o=1,l=!1,c=!1,u=null;const d=zm();let m=n===To||n===jg,f=m;const h=m;if(r&&Re(e,!0)&&(l=!0,e.lineIndent>t?o=1:e.lineIndent===t?o=0:o=-1),o===1)for(;;){const x=e.input.charCodeAt(e.position),p=Ar(e);if(l&&o!==1&&(x===33||x===38))break;if(l&&h&&(d.tagStart!==ne||d.anchorStart!==ne)&&(x===33||x===38)){const g=Ar(e),y=t+1;if(Gs(e,e.position-e.lineStart,y,d)&&((v=e.events[g.eventsLength])==null?void 0:v.type)===Ae.MAPPING)return e.depth--,!0;Mr(e,g)}if(l&&(x===33&&d.tagStart!==ne||x===38&&d.anchorStart!==ne)||!G5(e,d,n===Fr)&&!Q5(e,d))break;u===null&&(u=p),Re(e,!0)?(l=!0,f=h,e.lineIndent>t?o=1:e.lineIndent===t?o=0:o=-1):f=!1}if(f&&(f=l||i),o===1||n===To){const x=n===Fr||n===Ng?t:t+1,p=e.position-e.lineStart;if(o===1)if(f&&($m(e,p,d)||Gs(e,p,x,d))||rk(e,x,d))c=!0;else{const g=e.input.charCodeAt(e.position);if(u!==null&&a&&h&&!f&&g!==124&&g!==62){const y=Ar(e),_=u.position-u.lineStart;Mr(e,u),Gs(e,_,x,zm())&&((w=e.events[y.eventsLength])==null?void 0:w.type)===Ae.MAPPING?c=!0:Mr(e,y)}!c&&(m&&ek(e,x,d)||J5(e,x,d)||Z5(e,x,d)||X5(e,d)||nk(e,x,n,d))&&(c=!0)}else o===0&&(c=f&&$m(e,p,d))}return m=m&&!c,!c&&(d.anchorStart!==ne||d.tagStart!==ne||m)&&(Gr(e,ne,ne,d.anchorStart,d.anchorEnd,d.tagStart,d.tagEnd,K.PLAIN),c=!0),e.depth--,c||d.anchorStart!==ne||d.tagStart!==ne}function ik(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;const t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Tt(e.input.charCodeAt(e.position));)e.position++;const n=e.input.slice(t,e.position),r=[];for(n.length===0&&B(e,"directive name must not be less than one character in length");e.input.charCodeAt(e.position)!==0&&!Ne(e.input.charCodeAt(e.position));){for(;Qr(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||Ne(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;const i=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Tt(e.input.charCodeAt(e.position));)e.position++;r.push(e.input.slice(i,e.position))}if(Ne(e.input.charCodeAt(e.position))&&Po(e),n==="YAML"){e.directives.some(a=>a.kind==="yaml")&&B(e,"duplication of %YAML directive"),r.length!==1&&B(e,"YAML directive accepts exactly one argument");const i=/^([0-9]+)\.([0-9]+)$/.exec(r[0]);i===null&&B(e,"ill-formed argument of the YAML directive"),parseInt(i[1],10)!==1&&B(e,"unacceptable YAML version of the document"),e.directives.push({kind:"yaml",version:r[0]})}else if(n==="TAG"){r.length!==2&&B(e,"TAG directive accepts exactly two arguments");const[i,a]=r;Cg.test(i)||B(e,"ill-formed tag handle (first argument) of the TAG directive"),Sg.call(e.tagHandlers,i)&&B(e,`there is a previously declared suffix for "${i}" tag handle`),H5.test(a)||B(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagHandlers[i]=a,e.directives.push({kind:"tag",handle:i,prefix:a})}return!0}function ak(e){e.directives=[],e.tagHandlers=Object.create(null);let t=!1;for(Re(e,!0);ik(e);)t=!0,Re(e,!0);let n=!1,r=!1,i=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&Yt(e.input.charCodeAt(e.position+3))){n=!0;const l=e.line;e.position+=3,Re(e,!0),i=e.line>l}else t&&B(e,"directives end mark is expected");const a=e.events.length;if(!n&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&Wr(e)){e.position+=3,Re(e,!0);return}if(B5(e,n,!1),Hr(e,e.lineIndent-1,To,!1,i,i)||He(e),Re(e,!0),e.position===e.lineStart&&Wr(e)&&(r=e.input.charCodeAt(e.position)===46,r)){const l=e.line;e.position+=3,Re(e,!0),e.line===l&&e.position<e.length&&B(e,"end of the stream or a document separator is expected")}const o=e.events[a];(o==null?void 0:o.type)===Ae.DOCUMENT&&(o.explicitEnd=r),Pr(e),!r&&e.position<e.length&&!Mu(e)&&B(e,"end of the stream or a document separator is expected")}function ok(e,t){const n=e.length,r={...Au,...t,input:`${e}\0`,length:n,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]},i=e.indexOf("\0");for(i!==-1&&jn.throwAt(e,i,"null byte is not allowed in input",r.filename);r.position<r.length&&(Ag(r),Re(r,!0),!(r.position>=r.length));){const a=r.position;ak(r),r.position===a&&B(r,"can not read a document")}return r.events}var sk={...Au,...Pu};function lk(e,t={}){const n={...sk,...t},r=String(e),i=Object.keys(Au),a=Object.keys(Pu);return I5(ok(r,Zl(n,i)),{...Zl(n,a),source:r})}function ck(e,t){const n=lk(e,t);if(n.length===0)throw new jn("expected a document, but the input is empty");if(n.length===1)return n[0];throw new jn("expected a single document in the stream, but found more")}var Dn=Symbol("INVALID");function uk(e){const t=new Set([e.defaultScalarTag,e.defaultSequenceTag,e.defaultMappingTag].filter(a=>a!==void 0)),n=e.implicitScalarTags,r=e.tags.filter(a=>!(a.nodeKind==="scalar"&&a.implicit)&&!t.has(a)),i=e.tags.filter(a=>t.has(a));return[...n.map(a=>({tag:a,implicitTag:!0})),...r.map(a=>({tag:a,implicitTag:!1})),...i.map(a=>({tag:a,implicitTag:!0}))]}function dk(e,t){for(let n=0,r=e.representTypes.length;n<r;n+=1){const{tag:i,implicitTag:a}=e.representTypes[n];if(i.identify(t)){let o;return i.matchByTagPrefix?o=i.representTagName(t):o=i.tagName,{tag:i,tagName:o,implicitTag:a}}}return null}function pi(e,t){if(!e.noRefs&&t!==null&&typeof t=="object"){const u=e.refs.get(t);if(u)return u.anchor===void 0&&(u.anchor=`ref_${e.refCounter++}`),{kind:"alias",anchor:u.anchor}}const n=dk(e,t);if(!n){if(t===void 0||e.skipInvalid)return Dn;throw new jn(`unacceptable kind of an object to dump ${Object.prototype.toString.call(t)}`)}const{tag:r,tagName:i,implicitTag:a}=n,o=a?i:wg(i);if(r.nodeKind==="scalar")return{kind:"scalar",tag:o,tagged:!a,style:K.PLAIN,value:r.represent(t)};if(r.nodeKind==="sequence"){const u=r.represent(t),d={kind:"sequence",tag:o,tagged:!a,style:xt.BLOCK,items:[]};e.noRefs||e.refs.set(t,d);for(let m=0,f=u.length;m<f;m+=1){let h=pi(e,u[m]);h===Dn&&u[m]===void 0&&(h=pi(e,null)),h!==Dn&&d.items.push(h)}return d}const l=r.represent(t),c={kind:"mapping",tag:o,tagged:!a,style:xt.BLOCK,items:[]};e.noRefs||e.refs.set(t,c);for(const[u,d]of l){const m=pi(e,u);if(m===Dn)continue;const f=pi(e,d);f!==Dn&&c.items.push({key:m,value:f})}return c}function mk(e,t,n={}){const r=pi({representTypes:uk(t),noRefs:n.noRefs??!1,skipInvalid:n.skipInvalid??!1,refs:new Map,refCounter:0},e);return[{contents:r===Dn?null:r,directives:[]}]}var fk=Symbol("visit:break"),Lg=Symbol("visit:skip");function Ka(e,t,n){const r=t(e,n);if(r===fk)return!0;if(r===Lg)return!1;const i=n.depth+1;switch(e.kind){case"sequence":for(const a of e.items)if(Ka(a,t,{depth:i,parent:e,isKey:!1}))return!0;break;case"mapping":for(const{key:a,value:o}of e.items)if(Ka(a,t,{depth:i,parent:e,isKey:!0})||Ka(o,t,{depth:i,parent:e,isKey:!1}))return!0;break}return!1}function Im(e,t){for(const n of e)if(n.contents&&Ka(n.contents,t,{depth:0,parent:null,isKey:!1}))return}function as(e,t){return(e&1<<t)!==0}var Rm={applyQuoteFlowKeysOption:pk,doubleQuoteForInvisibles:hk,doubleQuoteWhitespaceOnly:gk,applyForceQuotesOption:yk,tryLongOrMultilineAsBlock:vk,quoteInvalidPlain:bk,fallbackToDoubleQuoted:xk};function zg(e){return e.presenterOptions.quoteStyle==="single"&&as(e.allowedStylesMask,K.SINGLE_QUOTED)?K.SINGLE_QUOTED:K.DOUBLE_QUOTED}function pk(e){e.presenterOptions.quoteFlowKeys&&(!e.isKey||!e.flowOnly||e.style!==K.PLAIN||(e.style=K.DOUBLE_QUOTED))}function hk(e){e.style===K.PLAIN&&/[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value)&&(e.style=K.DOUBLE_QUOTED)}function gk(e){e.style===K.PLAIN&&/^\s+$/.test(e.node.value)&&(e.style=K.DOUBLE_QUOTED)}function yk(e){e.presenterOptions.forceQuotes&&(e.isKey||e.style!==K.PLAIN||e.node.tag===e.presenterOptions.schema.defaultScalarTag.tagName&&(e.style=e.node.value.includes(`
`)?K.DOUBLE_QUOTED:zg(e)))}function vk(e){if(e.style!==K.PLAIN||e.isKey)return;const t=e.node.value,n=t.indexOf(`
`)!==-1;if(!as(e.allowedStylesMask,K.LITERAL_BLOCK)){n&&(e.style=K.DOUBLE_QUOTED);return}const r=e.presenterOptions.lineWidth;if(r===-1){n&&(e.style=K.LITERAL_BLOCK);return}const i=Math.max(Math.min(r,40),r-e.shiftOfContent);let a=0,o=!1;for(;a<=t.length;){let l=t.length;const c=t.indexOf(`
`,a);c!==-1&&(l=c);const u=t.slice(a,l);if(u.length>i&&u[0]!==" "&&/ [^ \t]/.test(u)&&(o=!0),c===-1)break;a=c+1}o?e.style=K.FOLDED_BLOCK:n&&(e.style=K.LITERAL_BLOCK)}function bk(e){e.style===K.PLAIN&&!as(e.allowedStylesMask,K.PLAIN)&&(e.style=zg(e))}function xk(e){as(e.allowedStylesMask,e.style)||(e.style=K.DOUBLE_QUOTED)}function li(e,t){return e|1<<t}var wk="[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]",kk="[\\n\\r]",_k="\\uFEFF",Lu="[ \\t]",Og=`(?:(?!(?:${kk}|${_k}))${wk})`,os=`(?:(?!${Lu})${Og})`,$g="[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]",Ig="[-?:,\\[\\]{}#&*!|>'\"%@`]",Sk="[,\\[\\]{}]",nc=os,rc=`(?:(?!${Sk})${os})`,Nk=`(?:(?:(?!${Ig})${os})|[?:-](?=${nc}))`,jk=`(?:(?:(?!${Ig})${os})|[?:-](?=${rc}))`,Rg=`(?:(?:(?![:#])${nc})|:(?=${nc}))#*`,Dg=`(?:(?:(?![:#])${rc})|:(?=${rc}))#*`,Fg=`(?:${Lu}*${Rg})*`,Wg=`(?:${Lu}*${Dg})*`,Hg=`${Nk}#*${Fg}`,Bg=`${jk}#*${Wg}`,Ck=Hg,Ek=Bg,Tk=`\\n+${Rg}${Fg}`,Pk=`\\n+${Dg}${Wg}`,Ak=`${Hg}(?:${Tk})*`,Mk=`${Bg}(?:${Pk})*`,Lk=new RegExp(`^(?:${Ak})$`,"u"),zk=new RegExp(`^(?:${Mk})$`,"u"),Ok=new RegExp(`^(?:${Ck})$`,"u"),$k=new RegExp(`^(?:${Ek})$`,"u"),Ik=new RegExp(`^(?:${$g})*$`,"u"),Rk=new RegExp(`^(?:${$g}|\\n)*$`,"u"),Dk=new RegExp(`^(?:${Og}|\\n)*$`,"u"),Fk=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/,zu=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/m;function Wk(e){const t=e.node.value;if(t!==""){if(!(e.isKey?e.flowOnly?$k:Ok:e.flowOnly?zk:Lk).test(t)||e.shiftOfFirstLine===0&&Fk.test(t))return!1;if(e.shiftOfContent===0){const r=t.indexOf(`
`);if(r!==-1){const i=t.slice(r+1);if(zu.test(i))return!1}}}const n=e.presenterOptions.schema.resolveImplicitScalarTag(t).tag.tagName;return!(!e.node.tagged&&n!==e.node.tag||!e.node.tagged&&t==="="&&n===e.presenterOptions.schema.defaultScalarTag.tagName)}function Hk(e){const t=e.node.value;if(!(e.isKey?Ik:Rk).test(t)||/[ \t]\n|\n[ \t]/.test(t))return!1;if(!e.isKey&&e.shiftOfContent===0){const n=t.indexOf(`
`);if(n!==-1&&zu.test(t.slice(n+1)))return!1}return!0}function Bk(e){if(e.flowOnly||!Dk.test(e.node.value))return!1;const t=e.shiftOfContent-e.shiftOfParent;return!(t<1||t>9&&/^\n* /.test(e.node.value)||e.shiftOfContent===0&&zu.test(e.node.value))}function Uk(e){let t=li(0,K.DOUBLE_QUOTED);Wk(e)&&(t=li(t,K.PLAIN)),Hk(e)&&(t=li(t,K.SINGLE_QUOTED)),Bk(e)&&(t=li(li(t,K.LITERAL_BLOCK),K.FOLDED_BLOCK)),e.allowedStylesMask=t}function Kk(e){switch(e.style){case K.PLAIN:return qk(e);case K.SINGLE_QUOTED:return Vk(e);case K.LITERAL_BLOCK:return Yk(e);case K.FOLDED_BLOCK:return Gk(e);case K.DOUBLE_QUOTED:return Qk(e)}}function qk(e){return Ug(e.node.value,e.shiftOfContent)}function Vk(e){return`'${Ug(e.node.value,e.shiftOfContent).replace(/'/g,"''")}'`}function Yk(e){const t=e.node.value;return"|"+qg(t,e.shiftOfParent,e.shiftOfContent)+Vg(Kg(t,e.shiftOfContent))}function Gk(e){const t=e.node.value,n=e.presenterOptions.lineWidth;let r=1/0;return n!==-1&&(r=Math.max(Math.min(n,40),n-e.shiftOfContent)),">"+qg(t,e.shiftOfParent,e.shiftOfContent)+Vg(Kg(Jk(t,r),e.shiftOfContent))}function Qk(e){return`"${t_(e.node.value)}"`}function Ug(e,t){let n=e.indexOf(`
`);if(n===-1)return e;const r=" ".repeat(t);let i=e.slice(0,n);const a=/(\n+)([^\n]*)/g;a.lastIndex=n;let o;for(;o=a.exec(e);){const l=o[1].length,c=o[2];i+=`
`.repeat(l+1)+r+c}return i}function Kg(e,t){const n=" ".repeat(t);let r=0,i="";const a=e.length;for(;r<a;){let o;const l=e.indexOf(`
`,r);l===-1?(o=e.slice(r),r=a):(o=e.slice(r,l+1),r=l+1),o.length&&o!==`
`&&(i+=n),i+=o}return i}function Xk(e){return/^\n* /.test(e)}function qg(e,t,n){const r=Xk(e)?String(n-t):"",i=e[e.length-1]===`
`;return`${r}${i&&(e[e.length-2]===`
`||e===`
`)?"+":i?"":"-"}
`}function Vg(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function ic(e){return e===" "||e==="	"}function Dm(e,t){if(e===""||ic(e[0]))return e;const n=/ [^ \t]/g;let r,i=0,a,o=0,l=0,c="";for(;r=n.exec(e);)l=r.index,l-i>t&&(a=o>i?o:l,c+=`
${e.slice(i,a)}`,i=a+1),o=l;return c+=`
`,e.length-i>t&&o>i?c+=`${e.slice(i,o)}
${e.slice(o+1)}`:c+=e.slice(i),c.slice(1)}function Jk(e,t){const n=/(\n+)([^\n]*)/g;let r=e.indexOf(`
`);r===-1&&(r=e.length),n.lastIndex=r;let i=Dm(e.slice(0,r),t),a=e[0]===`
`||ic(e[0]),o,l;for(;l=n.exec(e);){const c=l[1],u=l[2];o=u!==""&&ic(u[0]),i+=c+(!a&&!o&&u!==""?`
`:"")+Dm(u,t),a=o}return i}var Zk=/["\\\x00-\x1F\x7F-\xA0\u2028\u2029\uD800-\uDFFF\uFEFF\uFFFE\uFFFF]/gu;function e_(e){switch(e){case"\0":return"\\0";case"\x07":return"\\a";case"\b":return"\\b";case"	":return"\\t";case`
`:return"\\n";case"\v":return"\\v";case"\f":return"\\f";case"\r":return"\\r";case"\x1B":return"\\e";case'"':return'\\"';case"\\":return"\\\\";case"":return"\\N";case" ":return"\\_";case"\u2028":return"\\L";case"\u2029":return"\\P"}const t=e.charCodeAt(0),n=t.toString(16).toUpperCase();return t<=255?`\\x${"0".repeat(2-n.length)}${n}`:`\\u${"0".repeat(4-n.length)}${n}`}function t_(e){return e.replace(Zk,e_)}var Ao=10,Ou={indent:2,seqNoIndent:!1,seqInlineFirst:!0,lineWidth:80,flowBracketPadding:!1,flowSkipCommaSpace:!1,flowSkipColonSpace:!1,quoteFlowKeys:!1,quoteStyle:"single",forceQuotes:!1,scalarStyleRules:Object.keys(Rm).map(e=>Reflect.get(Rm,e)),tagBeforeAnchor:!1};function n_(e){return e.tagged?e.tag:wg(e.tag)}function r_(e){const t={...Ou,...e};return t.flowSkipColonSpace&&(t.quoteFlowKeys=!0),{...t,defaultScalarTagName:t.schema.defaultScalarTag.tagName,openEnded:!1}}function ac(e,t){return`
${" ".repeat(e.indent*t)}`}function i_(e,t,n,r,i,a){return{node:t,parent:n,level:r,isKey:i,flowOnly:a,shiftOfParent:r===0?-1:e.indent*(r-1),shiftOfContent:e.indent*Math.max(1,r),shiftOfFirstLine:r===0?0:e.indent*r,presenterOptions:e,allowedStylesMask:0,style:t.style}}function a_(e,t,n){let r="";for(let a=0,o=n.items.length;a<o;a+=1){const l=Qt(e,t,n.items[a],n,{}).text;a>0&&(r+=`,${e.flowSkipCommaSpace?"":" "}`),r+=l}const i=e.flowBracketPadding&&n.items.length>0?" ":"";return`[${i}${r}${i}]`}function Fm(e,t,n,r){let i="";for(let a=0,o=n.items.length;a<o;a+=1){const l=Qt(e,t+1,n.items[a],n,{block:!0,compact:e.seqInlineFirst,isblockseq:!0}).text;(!r||i!=="")&&(i+=ac(e,t)),l===""||Ao===l.charCodeAt(0)?i+="-":i+="- ",i+=l}return i}function o_(e,t,n){let r="";for(const{key:a,value:o}of n.items){let l="";r!==""&&(l+=`,${e.flowSkipCommaSpace?"":" "}`);const c=Qt(e,t,a,n,{iskey:!0}),u=c.text,d=Qt(e,t,o,n,{}).text,m=e.flowSkipColonSpace||d===""?"":" ",f=a.kind==="scalar"&&c.noBody&&(a.tagged||a.anchor!==void 0),h=a.kind==="alias"||f?" ":"";l+=`${u}${h}:${m}${d}`,r+=l}const i=e.flowBracketPadding&&r!==""?" ":"";return`{${i}${r}${i}}`}function s_(e,t,n,r){let i="";for(let a=0,o=n.items.length;a<o;a+=1){let l="";(!r||i!=="")&&(l+=ac(e,t));const{key:c,value:u}=n.items[a],d=(c.kind==="mapping"||c.kind==="sequence")&&c.style===xt.BLOCK&&c.items.length!==0||c.kind==="scalar"&&(c.style===K.LITERAL_BLOCK||c.style===K.FOLDED_BLOCK),m=d?Qt(e,t+1,c,n,{block:!0,compact:!0,isblockseq:!oc(e,c,t+1)}):Qt(e,t+1,c,n,{block:!0,compact:!0,iskey:!0}),f=m.text,h=c.kind==="scalar"&&c.value.indexOf(`
`)!==-1,v=f.length>1024&&/^[\s\S]{1025}/u.test(f),w=d||h||v;w&&(f&&Ao===f.charCodeAt(0)?l+="?":l+="? "),l+=f,w&&(l+=ac(e,t));const x=Qt(e,t+1,u,n,{block:!0,compact:w,isblockseq:w&&!oc(e,u,t+1)}).text,p=c.kind==="scalar"&&m.noBody&&(c.tagged||c.anchor!==void 0),g=!w&&(c.kind==="alias"||p)?" ":"";x===""||Ao===x.charCodeAt(0)?l+=`${g}:`:l+=`${g}: `,l+=x,i+=l}return i}function oc(e,t,n){return t.kind==="alias"?!0:t.tagged||t.anchor!==void 0||e.indent<2&&n>0}function Qt(e,t,n,r,i){if(n.kind==="alias")return e.openEnded=!1,{text:`*${n.anchor}`,noBody:!1};const{block:a=!1,iskey:o=!1,isblockseq:l=!1}=i;let c=i.compact??!1;const u=n.anchor!==void 0;oc(e,n,t)&&(c=!1);let d,m=n.tagged;const f=a&&(n.kind==="mapping"||n.kind==="sequence")&&n.style===xt.BLOCK&&n.items.length!==0;if(n.kind==="mapping")f?d=s_(e,t,n,c):d=o_(e,t,n);else if(n.kind==="sequence")f?e.seqNoIndent&&!l&&t>0?d=Fm(e,t-1,n,c):d=Fm(e,t,n,c):d=a_(e,t,n);else{const w=i_(e,n,r,t,o,!a);Uk(w);for(const x of e.scalarStyleRules)x(w);d=Kk(w),e.openEnded=(w.style===K.LITERAL_BLOCK||w.style===K.FOLDED_BLOCK)&&(n.value===`
`||n.value.endsWith(`

`)),m=n.tagged||d===""&&w.flowOnly&&(r==null?void 0:r.kind)==="sequence"&&!u||w.style!==K.PLAIN&&n.tag!==e.defaultScalarTagName}(n.kind==="mapping"||n.kind==="sequence")&&!f&&(e.openEnded=!1),f&&c&&t>0&&e.indent>2&&(d=`${" ".repeat(e.indent-2)}${d}`);const h=d==="";let v=d;if(m||u){const w=[],x=m?n_(n):null,p=u?`&${n.anchor}`:null;e.tagBeforeAnchor?(x!==null&&w.push(x),p!==null&&w.push(p)):(p!==null&&w.push(p),x!==null&&w.push(x));const g=d===""||d.charCodeAt(0)===Ao?"":" ";v=`${w.join(" ")}${g}${d}`}return{text:v,noBody:h}}function l_(e){return(e.kind==="sequence"||e.kind==="mapping")&&e.style===xt.BLOCK&&e.items.length!==0&&!e.tagged&&e.anchor===void 0}function c_(e){let t="";for(const n of e.directives){if(n.kind==="yaml"){t+=`%YAML ${n.version}
`;continue}const{handle:r,prefix:i}=n;t+=`%TAG ${r} ${i}
`}return t}function u_(e,t){const n=r_(t);let r="",i=!1;for(let a=0;a<e.length;a+=1){const o=e[a];n.openEnded=!1;const l=c_(o),c=l!=="",u=o.explicitStart||c||a>0&&!i;if(r+=l,o.contents===null)u&&(r+=`---
`);else if(u){const d=Qt(n,0,o.contents,null,{block:!0,compact:!0}).text,m=d===""?"":c||l_(o.contents)?`
`:" ";r+=`---${m}${d}
`}else r+=Qt(n,0,o.contents,null,{block:!0,compact:!0}).text+`
`;i=o.explicitEnd||n.openEnded,i&&(r+=`...
`)}return r}var d_={...Ou,schema:x5,skipInvalid:!1,noRefs:!1,flowLevel:-1,sortKeys:!1,transform:()=>{}};function m_(e,t){const n=String(e),r=String(t);return n<r?-1:n>r?1:0}function f_(e,t={}){const n={...d_,...t},r=mk(e,n.schema,{noRefs:n.noRefs,skipInvalid:n.skipInvalid});if(n.flowLevel>=0&&Im(r,(i,a)=>{if(!(a.depth<n.flowLevel))return(i.kind==="sequence"||i.kind==="mapping")&&(i.style=xt.FLOW),Lg}),n.sortKeys){const i=n.sortKeys===!0?m_:n.sortKeys;Im(r,a=>{a.kind==="mapping"&&a.items.sort((o,l)=>i(o.key.kind==="scalar"?o.key.value:"",l.key.kind==="scalar"?l.key.value:""))})}return n.transform(r),u_(r,{...Zl(n,Object.keys(Ou)),schema:n.schema})}const p_="custom:the-monitor-dashboard",Qs='[[[ const hour = new Date().getHours(); let greeting = ""; if (hour >= 22 || hour < 5) greeting = "Night"; else if (hour >= 18) greeting = "Evening"; else if (hour >= 12) greeting = "Afternoon"; else greeting = "Morning"; const name = user.name === "Rey" ? "Rey" : "Christina"; return `${greeting}, ${name}!`; ]]]',h_=[{id:"mobile",url_path:"mobile",title:"Mobile",mode:"storage"},{id:"lovelace",url_path:null,title:"Übersicht",mode:"storage"},{id:"energy",url_path:"energie",title:"Energie",mode:"storage"}],g_={mobile:{views:[{title:"Overview",sections:[{title:"Bereich 1",cards:[{type:"vertical-stack",cards:[{type:"horizontal-stack",cards:[{type:"conditional",card:{type:"custom:button-card",entity:"person.christina",name:Qs}},{type:"conditional",card:{type:"custom:button-card",entity:"person.rey",name:Qs}},{type:"custom:button-card",entity:"person.christina",name:Qs},{type:"custom:strip-card",cards:Array.from({length:5},(e,t)=>({type:"tile",entity:`light.spot_${t+1}`,name:`Spot ${t+1}`}))}]},...Array.from({length:18},(e,t)=>({type:"tile",entity:`light.mock_${t+1}`,name:`Licht ${t+1}`}))]}]}]}]},__default__:{views:[{title:"Wohnen",sections:[{title:"Licht",cards:[{type:"tile",entity:"light.wohnzimmer",name:"Wohnzimmer"},{type:"tile",entity:"light.kueche",name:"Küche"}]},{title:"Klima",cards:[{type:"thermostat",entity:"climate.wohnzimmer"},{type:"vertical-stack",cards:[{type:"weather-forecast",entity:"weather.zuhause",forecast_type:"daily"},{type:"entities",title:"Status",entities:["lock.haustuer","alarm_control_panel.haus"]}]}]}]}]},energie:{views:[{title:"Energie",cards:[{type:"statistic",entity:"sensor.grandland_charge_power",name:"Ladeleistung",period:"day"},{type:"gauge",entity:"sensor.grandland_battery",name:"Akku",min:0,max:100,unit:"%"}]}]}};function $u(e){return!e||typeof e!="object"?!1:!Array.isArray(e)&&e.type===p_?!0:(Array.isArray(e)?e:Object.values(e)).some($u)}function ss(e){if(!e||typeof e!="object"||Array.isArray(e))return null;let t;try{t=JSON.parse(JSON.stringify(e))}catch{return null}return typeof t.type!="string"||!t.type.trim()||(t.type=t.type.trim(),$u(t))?null:t}function y_(e){if(typeof e!="string")return"";const t=e.replace(/\s+/g," ").trim();return!t||t.includes("[[[")||t.includes("{{")||t.includes("<%")?"":t.length>72?`${t.slice(0,69)}…`:t}function Br(e){if(!(e!=null&&e.type))return"Karte";const t=String(e.type).replace(/^custom:/,""),n=[e.name,e.title,e.heading,e.entity,e.entity_id].map(y_).find(Boolean);return n?`${t} · ${n}`:Array.isArray(e.entities)&&e.entities.length?`${t} · ${e.entities.length}`:Array.isArray(e.cards)&&e.cards.length?`${t} · ${e.cards.length}`:t}function v_(e,t){const n=e!=null&&e.card?Br(e.card):"",r=Br(t),i=(e==null?void 0:e.label)&&e.label!==n&&e.label!=="HA-Karte";return{card:t,label:i?e.label:r}}function Wm(e){return e?f_(e,{lineWidth:88,noRefs:!0}).trim():""}function b_(e){const t=String(e||"").trim();if(!t)return null;let n;try{n=ck(t)}catch(i){const a=i!=null&&i.message?i.message.split(`
`)[0]:"Syntaxfehler";throw new Error(`Karten-YAML ungültig: ${a}`)}if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Die Konfiguration muss eine einzelne Karte sein.");const r=ss(n);if(!r)throw new Error("Die Karte braucht ein type und darf The Monitor nicht enthalten.");return r}function Ft(){return typeof window<"u"&&typeof window.loadCardHelpers=="function"}function Hm(e){var n,r;const t=(n=e==null?void 0:e.getRootNode)==null?void 0:n.call(e);return t instanceof ShadowRoot&&((r=t.host)==null?void 0:r.localName)==="the-monitor-dashboard"?t.host:null}const Mo="custom:";function qa(e,t=new Set){return!e||typeof e!="object"?t:Array.isArray(e)?(e.forEach(n=>qa(n,t)),t):(typeof e.type=="string"&&e.type.startsWith(Mo)&&t.add(e.type.slice(Mo.length)),Array.isArray(e.cards)&&qa(e.cards,t),e.card&&qa(e.card,t),t)}function x_(e){return new Promise(t=>{window.setTimeout(t,e)})}async function w_(e){const t=[...e].filter(n=>n.includes("-")&&!customElements.get(n));t.length&&await Promise.race([Promise.all(t.map(n=>customElements.whenDefined(n))),x_(2e3)])}function k_(e){return{type:"markdown",content:`**Nicht installiert:** \`${e}\`

Diese Lovelace-Karte ist in den Ressourcen nicht geladen.`}}function Va(e){if(!e||typeof e!="object")return e;if(Array.isArray(e))return e.map(Va);if(typeof e.type=="string"&&e.type.startsWith(Mo)){const n=e.type.slice(Mo.length);if(n.includes("-")&&!customElements.get(n))return k_(n)}const t={...e};return Array.isArray(e.cards)&&(t.cards=e.cards.map(Va)),e.card&&typeof e.card=="object"&&(t.card=Va(e.card)),t}function sc(e,t){return typeof e=="string"?e.replace(/\[\[([^\]]+)\]\]/g,(n,r)=>{const i=t==null?void 0:t[r.trim()];return i==null?n:String(i)}):Array.isArray(e)?e.map(n=>sc(n,t)):e&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([n,r])=>[n,sc(r,t)])):e}function lc(e,t){const n={...e};return Object.entries(t||{}).forEach(([r,i])=>{i&&typeof i=="object"&&!Array.isArray(i)&&n[r]&&typeof n[r]=="object"&&!Array.isArray(n[r])?n[r]=lc(n[r],i):n[r]=i}),n}function Yg(e,t,n){const r=Array.isArray(e.template)?e.template:[e.template];let i={},a=!1;if(r.forEach(c=>{const u=`b:${c}`;if(!c||n.has(u)||!t[c])return;n.add(u),a=!0;const d=Yg({...t[c],type:"custom:button-card"},t,n),{type:m,template:f,...h}=d;i=lc(i,h)}),!a)return e;const{template:o,...l}=e;return lc(i,l)}function hi(e,t,n=new Set){var a,o;if(!e||typeof e!="object")return e;if(Array.isArray(e))return e.map(l=>hi(l,t,n));let r=e;if(r.type==="custom:streamline-card"&&r.template&&((a=t.streamline)!=null&&a[r.template])){const l=`s:${r.template}`;if(!n.has(l)){n.add(l);const c=t.streamline[r.template],u=(o=c==null?void 0:c.card)!=null&&o.type?c.card:c!=null&&c.type?c:null;if(u){const d=c.default&&!Array.isArray(c.default)?c.default:{};r=sc(structuredClone(u),{...d,...r.variables||{}})}}}r.type==="custom:button-card"&&r.template&&t.button&&(r=Yg(r,t.button,n));const i={...r};return Array.isArray(r.cards)&&(i.cards=r.cards.map(l=>hi(l,t,n))),r.card&&typeof r.card=="object"&&(i.card=hi(r.card,t,n)),r.custom_fields&&typeof r.custom_fields=="object"&&(i.custom_fields=Object.fromEntries(Object.entries(r.custom_fields).map(([l,c])=>[l,hi(c,t,n)]))),i}let ja=null;async function __(e){var t;return(t=e==null?void 0:e.connection)!=null&&t.sendMessagePromise?(ja||(ja=(async()=>{const n=await e.connection.sendMessagePromise({type:"lovelace/dashboards/list"}),r=[null,...Array.isArray(n)?n.map(o=>o.url_path):[]],i={},a={};for(const o of r)try{const l=await e.connection.sendMessagePromise({type:"lovelace/config",url_path:o,force:!1});Object.assign(i,(l==null?void 0:l.button_card_templates)||{}),Object.assign(a,(l==null?void 0:l.streamline_templates)||{})}catch{}return{button:i,streamline:a}})().catch(n=>{throw ja=null,n})),ja):{button:{},streamline:{}}}function S_(e){return JSON.stringify(e||{}).includes('"template"')}async function N_(e,t){const n=ss(e);if(!n)throw new Error("Ungültige Karten-Konfiguration");Ft()&&await window.loadCardHelpers();let r=n;if(S_(r))try{r=hi(r,await __(t))}catch(i){console.warn("The Monitor: card templates were not expanded",i)}return await w_(qa(r)),Va(r)}async function Gg(e,t,n,{preview:r=!1}={}){const i=await N_(t,n);if(customElements.get("hui-card")){const l=document.createElement("hui-card");return e.appendChild(l),n&&(l.hass=n),l.preview=r,l.config=i,l}if(!Ft())throw new Error("Home Assistant stellt hier keine Karten bereit");const o=await(await window.loadCardHelpers()).createCardElement(i);if(!o)throw new Error("Karte konnte nicht erzeugt werden");return e.appendChild(o),n&&(o.hass=n),o}function j_(e){return e??"__default__"}async function C_(e){var i;if(nr(e))return h_.map(a=>({...a}));if(!((i=e==null?void 0:e.connection)!=null&&i.sendMessagePromise))throw new Error("Keine Home-Assistant-Verbindung");const t=await e.connection.sendMessagePromise({type:"lovelace/dashboards/list"}),n=Array.isArray(t)?[...t]:[];return n.some(a=>a.url_path==null||a.url_path==="lovelace")||n.unshift({id:"lovelace",url_path:null,title:"Übersicht",mode:"storage"}),n.sort((a,o)=>{const l=c=>`${c.title||""} ${c.url_path||""}`.toLowerCase().includes("mobile")?0:c.url_path==null||c.url_path==="lovelace"?2:1;return l(a)-l(o)}),n}async function E_(e,t){var n;if(nr(e))return structuredClone(g_[j_(t)]||{views:[]});if(!((n=e==null?void 0:e.connection)!=null&&n.sendMessagePromise))throw new Error("Keine Home-Assistant-Verbindung");return e.connection.sendMessagePromise({type:"lovelace/config",url_path:t??null,force:!1})}const T_=new Set(["vertical-stack","horizontal-stack","grid","stack-in-card","layout-card","swipe-card","strip-card"]);function P_(e){const t=String(e||"").replace(/^custom:/,"");return T_.has(t)}function A_(e){return!!(e&&typeof e=="object"&&typeof e.type=="string"&&e.type.trim())}function M_(e){const t=[];return Array.isArray(e==null?void 0:e.cards)&&t.push(...e.cards),e!=null&&e.card&&typeof e.card=="object"&&t.push(e.card),Array.isArray(e==null?void 0:e.elements)&&e.elements.forEach(n=>{n!=null&&n.type&&t.push(n),n!=null&&n.card&&t.push(n.card)}),e!=null&&e.custom_fields&&typeof e.custom_fields=="object"&&Object.values(e.custom_fields).forEach(n=>{n&&typeof n=="object"&&n.type&&t.push(n)}),t}function L_(e){return((e==null?void 0:e.views)||[]).map((t,n)=>({index:n,title:t.title||t.path||`Ansicht ${n+1}`}))}function z_(e,t="Dashboard",n=null){const r=[];let i=0;const a=(o,l,c)=>{(o||[]).forEach((u,d)=>{if(!A_(u)||$u(u))return;const m=M_(u);P_(u.type)&&m.length>0||(i+=1,r.push({id:`${l}:${d}:${i}:${u.type}`,label:Br(u),path:l,depth:c,config:u})),m.length&&a(m,l,c+1)})};return((e==null?void 0:e.views)||[]).forEach((o,l)=>{if(n!=null&&l!==n)return;const c=o.title||o.path||`Ansicht ${l+1}`,u=n!=null?c:`${t} · ${c}`;Array.isArray(o.cards)&&a(o.cards,u,0),(o.sections||[]).forEach((d,m)=>{const f=d.title||`Bereich ${m+1}`,h=n!=null?f:`${u} · ${f}`;a(d.cards,h,0),Array.isArray(d.sections)&&d.sections.forEach((v,w)=>{const x=v.title||`Bereich ${m+1}.${w+1}`;a(v.cards,n!=null?x:`${h} · ${x}`,0)})})}),r}function O_(e,t){var n;return!!((n=e==null?void 0:e.strategy)!=null&&n.type)&&t.length===0}const Iu=[6,24,48,168];function ls(e,t){if(t==="binary_sensor")return e==="on"||e==="open"||e==="detected"?1:e==="off"||e==="closed"||e==="clear"?0:null;const n=Number(e);return Number.isFinite(n)?n:null}function Qg(e,t){const n=Et(e,t);return n.state==="unavailable"||n.state==="unknown"?!1:ls(n.state,n.domain)!=null}function $_(e){if(e.lu!=null)return e.lu*1e3;if(e.lc!=null)return e.lc*1e3;const t=e.last_changed||e.last_updated;return t?new Date(t).getTime():NaN}function Xg(e,t){const n=we(t),r=[];return(e||[]).forEach(i=>{const a=i.s??i.state,o=ls(a,n);if(o==null)return;const l=$_(i);Number.isFinite(l)&&r.push({t:l,v:o})}),r.sort((i,a)=>i.t-a.t),r}function Jg(e,t){return e?Array.isArray(e)?e[0]||[]:e[t]||[]:[]}function Bm(e,t,n,r=24){if(e.length>=2)return e;const i=Et(t,n),a=we(n),o=ls(i.state,a);if(o==null)return e;const l=Date.now(),c=r*60*60*1e3;if(e.length===1){const u=e[0];return[{t:Math.min(u.t,l-c),v:u.v},{t:l,v:o}]}return[{t:l-c,v:o},{t:l,v:o}]}function I_(e,t,n){const r=Et(e,t),i=we(t),a=ls(r.state,i)??20,o=[],l=Date.now(),c=n*60*60*1e3,u=36;let d=a;for(let m=0;m<=u;m+=1){const f=l-c+c/u*m;i==="binary_sensor"?d=Math.random()>.85?d===1?0:1:d:d+=(Math.random()-.5)*(Math.abs(a)*.08+.5),o.push({t:f,v:d})}return o}async function R_(e,t,n,r){const i=await e.connection.sendMessagePromise({type:"history/history_during_period",start_time:n.toISOString(),end_time:r.toISOString(),entity_ids:[t],include_start_time_state:!0,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});return Xg(Jg(i,t),t)}async function D_(e,t,n,r){const i=Gh(e),a=ea(e);if(!i||!a)return[];const o=new URLSearchParams({filter_entity_id:t,end_time:r.toISOString(),minimal_response:"true"}),l=await fetch(`${a}/api/history/period/${encodeURIComponent(n.toISOString())}?${o}`,{headers:{Authorization:`Bearer ${i}`}});if(!l.ok)return[];const c=await l.json();return Xg(Jg(c,t),t)}async function Zg(e,t,{hours:n=24}={}){var o;if(!t||!e)return[];const r=Iu.includes(n)?n:24;if(nr(e))return I_(e,t,r);const i=new Date,a=new Date(i.getTime()-r*60*60*1e3);try{let l=[];return(o=e.connection)!=null&&o.sendMessagePromise?l=await R_(e,t,a,i):l=await D_(e,t,a,i),Bm(l,e,t,r)}catch(l){return console.warn("The Monitor: Sensor-Verlauf konnte nicht geladen werden",l),Bm([],e,t,r)}}function F_(e){const t=Number(e);return Iu.includes(t)?t:24}const Ge=12,ht=4,se={presence:6,windows:8,popupEntities:12,coverPopupEntities:6,cameraEntities:3,sensorEntities:4,contactStatusEntities:8,widgetsPerPage:24,pages:6},cs={weather:{label:"Wetter",icon:"mdi:weather-partly-cloudy",domains:["weather"]},media:{label:"Medien",icon:"mdi:play-circle",domains:["media_player"]},camera:{label:"Kamera",icon:"mdi:camera",domains:["camera"]},shopping:{label:"Einkaufsliste",icon:"mdi:cart",domains:["todo"]},quickAction:{label:"Entität",icon:"mdi:flash",domains:["light","switch","fan","input_boolean","cover","lock"]},alarm:{label:"Alarmanlage",icon:"mdi:shield-home",domains:["alarm_control_panel"]},cover:{label:"Rolladen",icon:"mdi:window-shutter",domains:["cover"]},coverPopup:{label:"Rolladen-Gruppe",icon:"mdi:window-shutter-open",domains:["cover"]},popup:{label:"Entitäten",icon:"mdi:layers",domains:["light","switch","fan","input_boolean","cover","lock","climate"]},scene:{label:"Szene",icon:"mdi:palette",domains:["scene","script"]},sensor:{label:"Sensor",icon:"mdi:gauge",domains:["sensor","binary_sensor"]},sensorStatus:{label:"Sensor Status",icon:"mdi:door-open",domains:["binary_sensor","cover"]},sankey:{label:"Energiefluss",icon:"mdi:chart-sankey",domains:[]},energyTile:{label:"Energie-Kachel",icon:"mdi:lightning-bolt",domains:[]},haCard:{label:"HA-Karte",icon:"mdi:card-bulleted",domains:[]}},cc={S:{w:2,h:1,label:"S"},M:{w:3,h:2,label:"M"},L:{w:4,h:2,label:"L"},XL:{w:6,h:2,label:"XL"},tall:{w:4,h:3,label:"Hoch"},wide:{w:6,h:1,label:"Breit"},full:{w:Ge,h:ht,label:"Voll"}},W_={weather:"XL",media:"wide",camera:"L",shopping:"full",quickAction:"M",alarm:"M",cover:"M",coverPopup:"XL",popup:"M",scene:"S",sensor:"M",sensorStatus:"M",sankey:"tall",energyTile:"M",haCard:"XL"};let Um=0;function e0(){return Um+=1,`w-${Date.now().toString(36)}-${Um}`}function Wt(e,t={}){const n=W_[e]||"M",r=cc[n]||cc.M;return{id:e0(),type:e,x:0,y:0,w:r.w,h:r.h,entity_id:"",entity_ids:[],label:"",icon:"",mode:e==="quickAction"?"toggle":void 0,...e==="energyTile"?{tileKind:"inputs-outputs"}:{},...e==="haCard"?{card:null}:{},...t}}function mn(e,t=Ge,n=ht){const r=Math.min(t,Math.max(1,e.w)),i=Math.min(n,Math.max(1,e.h)),a=Math.min(t-r,Math.max(0,e.x)),o=Math.min(n-i,Math.max(0,e.y));return{...e,x:a,y:o,w:r,h:i}}function H_(e,t){return e.x<t.x+t.w&&e.x+e.w>t.x&&e.y<t.y+t.h&&e.y+e.h>t.y}function wr(e,t,n=null){return e.filter(r=>r.id!==n&&H_(r,t))}function B_(e,t,n){return e.some(r=>t>=r.x&&t<r.x+r.w&&n>=r.y&&n<r.y+r.h)}function U_(e,t,n=Ge,r=ht){for(let i=0;i<=r-t.h;i+=1)for(let a=0;a<=n-t.w;a+=1){const o={x:a,y:i,w:t.w,h:t.h};if(wr(e,o).length===0)return{x:a,y:i}}return{x:0,y:0}}function Ru(e){var t;return e.label?e.label:((t=cs[e.type])==null?void 0:t.label)||e.type}function K_(e){var t;return e.type==="popup"||e.type==="coverPopup"?e.entity_ids||[]:e.type==="camera"?t0(e):e.type==="sensor"?(t=e.entity_ids)!=null&&t.length?e.entity_ids:e.entity_id?[e.entity_id]:[]:e.entity_id?[e.entity_id]:[]}function q_(e){const t=e.type==="popup"?e.entity_ids||[]:K_(e),n=new Set(e.disabled_entity_ids||[]);return t.filter(r=>!n.has(r))}function t0(e){const t=((e==null?void 0:e.entity_ids)||[]).filter(Boolean).slice(0,se.cameraEntities);return t.length?t:e!=null&&e.entity_id?[e.entity_id]:[]}function V_(e,t){if(!e)return`K${t+1}`;const n=e.trim().split(/\s+/)[0];return n.length<=8?n:n.slice(0,7)}function n0(e="Seite",t=[]){return{id:`page-${Date.now().toString(36)}`,name:e,widgets:t.map(n=>mn({...n}))}}function Y_(){return{pages:[n0("Home",[])]}}function na(e){var t,n,r,i,a,o;return{weather:((t=e.weather)==null?void 0:t.entity_id)||"",media:((n=e.mediaPlayer)==null?void 0:n.entity_id)||"",camera:((r=e.camera)==null?void 0:r.entity_id)||"",cameras:Array.isArray(e.cameras)?e.cameras.filter(Boolean).slice(0,se.cameraEntities):(i=e.camera)!=null&&i.entity_id?[e.camera.entity_id]:[],shopping:((a=e.shoppingList)==null?void 0:a.entity_id)||"",alarm:((o=e.alarm)==null?void 0:o.entity_id)||"",quickActions:(e.quickActions||[]).map((l,c)=>{var u;return{entity_id:(l==null?void 0:l.entity_id)||"",entity_ids:(l==null?void 0:l.entity_ids)||(l!=null&&l.entity_id&&c>=2?[l.entity_id]:[]),label:(l==null?void 0:l.label)||"",icon:(l==null?void 0:l.icon)||"",mode:c===1?"brightness":"toggle",isPopup:!!((u=l==null?void 0:l.entity_ids)!=null&&u.length)||c>=2}}),scenes:(e.scenes||[]).map(l=>({entity_id:(l==null?void 0:l.entity_id)||"",label:(l==null?void 0:l.label)||"",icon:(l==null?void 0:l.icon)||""}))}}function G_(e,t){let n=0,r=0;const i=t.quickActions.filter(a=>!a.isPopup);return e.map(a=>{var l,c;const o={...a};if(a.type==="weather"&&t.weather&&(o.entity_id=t.weather),a.type==="media"&&t.media&&(o.entity_id=t.media),a.type==="camera"&&t.camera&&(o.entity_id=t.camera,!((l=o.entity_ids)!=null&&l.length)&&((c=t.cameras)!=null&&c.length)&&(o.entity_ids=[...t.cameras])),a.type==="shopping"&&t.shopping&&(o.entity_id=t.shopping),a.type==="alarm"&&t.alarm&&(o.entity_id=t.alarm),a.type==="quickAction"){const u=i[n];n+=1,u&&(o.entity_id=u.entity_id||"",o.label=u.label||o.label,o.icon=u.icon||o.icon,o.mode=u.mode||o.mode)}if(a.type==="popup"){const u=t.quickActions.filter(f=>f.isPopup||f.entity_ids&&f.entity_ids.length),d=e.slice(0,e.indexOf(a)).filter(f=>f.type==="popup").length,m=u[d];m&&(o.entity_ids=[...m.entity_ids||[]],o.label=m.label||o.label,o.icon=m.icon||o.icon)}if(a.type==="scene"){const u=t.scenes[r];r+=1,u&&(o.entity_id=u.entity_id||"",o.label=u.label||o.label,o.icon=u.icon||o.icon)}return o})}function Q_(e){var t;return(t=e==null?void 0:e.pages)==null?void 0:t.some(n=>{var r;return(r=n.widgets)==null?void 0:r.some(i=>{var a;return i.entity_id||((a=i.entity_ids)==null?void 0:a.length)})})}function X_(e,t){let n=0,r=0;const i=t.quickActions.filter(a=>!a.isPopup);return e.map(a=>{var l,c,u,d;const o={...a};if(a.type==="weather"&&!a.entity_id&&t.weather&&(o.entity_id=t.weather),a.type==="media"&&!a.entity_id&&t.media&&(o.entity_id=t.media),a.type==="camera"&&!a.entity_id&&t.camera&&(o.entity_id=t.camera,!((l=a.entity_ids)!=null&&l.length)&&((c=t.cameras)!=null&&c.length)&&(o.entity_ids=[...t.cameras])),a.type==="shopping"&&!a.entity_id&&t.shopping&&(o.entity_id=t.shopping),a.type==="alarm"&&!a.entity_id&&t.alarm&&(o.entity_id=t.alarm),a.type==="quickAction"&&!a.entity_id){const m=i[n];n+=1,m!=null&&m.entity_id&&(o.entity_id=m.entity_id,o.label=m.label||o.label,o.icon=m.icon||o.icon,o.mode=m.mode||o.mode)}else a.type==="quickAction"&&(n+=1);if(a.type==="popup"&&!((u=a.entity_ids)!=null&&u.length)){const m=t.quickActions.filter(v=>v.isPopup||v.entity_ids&&v.entity_ids.length),f=e.slice(0,e.indexOf(a)).filter(v=>v.type==="popup").length,h=m[f];(d=h==null?void 0:h.entity_ids)!=null&&d.length&&(o.entity_ids=[...h.entity_ids],o.label=h.label||o.label,o.icon=h.icon||o.icon)}if(a.type==="scene"&&!a.entity_id){const m=t.scenes[r];r+=1,m!=null&&m.entity_id&&(o.entity_id=m.entity_id,o.label=m.label||o.label,o.icon=m.icon||o.icon)}else a.type==="scene"&&(r+=1);return o})}function Du(e){const t={weather:"",media:"",camera:"",shopping:"",alarm:"",quickActions:[],scenes:[]};return e.pages.forEach(n=>{n.widgets.forEach(r=>{r.type==="weather"&&r.entity_id&&(t.weather=r.entity_id),r.type==="media"&&r.entity_id&&(t.media=r.entity_id),r.type==="camera"&&r.entity_id&&(t.camera=r.entity_id),r.type==="shopping"&&r.entity_id&&(t.shopping=r.entity_id),r.type==="alarm"&&r.entity_id&&(t.alarm=r.entity_id),r.type==="quickAction"&&t.quickActions.push({entity_id:r.entity_id||"",label:r.label||"",icon:r.icon||"",mode:r.mode}),r.type==="popup"&&t.quickActions.push({entity_ids:r.entity_ids||[],label:r.label||"",icon:r.icon||"",isPopup:!0}),r.type==="scene"&&t.scenes.push({entity_id:r.entity_id||"",label:r.label||"",icon:r.icon||""})})}),t}function r0(e,t=null){var r;if(!((r=e==null?void 0:e.pages)!=null&&r.length))return null;const n=e.pages.slice(0,se.pages).map((i,a)=>({id:i.id||`page-${a}`,name:i.name||`Seite ${a+1}`,widgets:(i.widgets||[]).slice(0,se.widgetsPerPage).map(o=>{const l={id:o.id||e0(),type:o.type,x:Number(o.x)||0,y:Number(o.y)||0,w:Number(o.w)||2,h:Number(o.h)||1,entity_id:o.entity_id||"",entity_ids:Array.isArray(o.entity_ids)?o.entity_ids.filter(Boolean).slice(0,o.type==="coverPopup"?se.coverPopupEntities:o.type==="sensor"?se.sensorEntities:o.type==="sensorStatus"?se.contactStatusEntities:se.popupEntities):[],disabled_entity_ids:o.type==="popup"&&Array.isArray(o.disabled_entity_ids)?o.disabled_entity_ids.filter(Boolean):[],label:o.label||"",icon:o.icon||"",mode:o.mode==="brightness"?"brightness":"toggle"};return o.type==="energyTile"&&(l.tileKind=Object.hasOwn(Co,o.tileKind)?o.tileKind:"inputs-outputs",l.tileKind==="ev-heatpump"&&(l.deviceImages=qi(o.deviceImages))),o.type==="sensor"&&(l.showHistory=!!o.showHistory,l.historyHours=F_(o.historyHours)),o.type==="haCard"&&(l.card=ss(o.card)),mn(l)})}));if(t){const i=na(t);n.forEach(a=>{a.widgets=G_(a.widgets,i)})}return{pages:n}}function J_(e,t=Ge,n=ht,r=0){const i=(e.width-r*(t-1))/t,a=(e.height-r*(n-1))/n;return{cellW:i,cellH:a,gap:r,cols:t,rows:n}}function Z_(e,t){const{cellW:n,cellH:r,gap:i}=t;return{left:e.x*(n+i),top:e.y*(r+i),width:e.w*n+(e.w-1)*i,height:e.h*r+(e.h-1)*i}}function Km(e,t,n){const r=n.cellW+n.gap,i=n.cellH+n.gap;return{dx:Math.round(e/r),dy:Math.round(t/i),offsetX:e-Math.round(e/r)*r,offsetY:t-Math.round(t/i)*i}}function eS(e,t,{dx:n,dy:r}){const{x:i,y:a,w:o,h:l}=t;switch(e){case"n":return{x:i,y:a+r,w:o,h:l-r};case"s":return{x:i,y:a,w:o,h:l+r};case"w":return{x:i+n,y:a,w:o-n,h:l};case"e":return{x:i,y:a,w:o+n,h:l};case"se":return{x:i,y:a,w:o+n,h:l+r};default:return{x:i,y:a,w:o,h:l}}}function tS(e,t){const{dx:n,dy:r,offsetX:i,offsetY:a}=t;switch(e){case"n":case"s":return{dx:0,dy:r,offsetX:0,offsetY:a};case"e":case"w":return{dx:n,dy:0,offsetX:i,offsetY:0};case"se":return{dx:n,dy:r,offsetX:i,offsetY:a};default:return{dx:0,dy:0,offsetX:0,offsetY:0}}}function V(e,t,n,r,i,a={}){return Wt(e,{x:t,y:n,w:r,h:i,...a})}function nS(e={}){var r,i,a,o,l,c,u,d,m,f,h,v,w,x,p,g,y,_,S,E,C,j,M;const t=e.quickActions||[],n=e.scenes||[];return[V("weather",0,0,4,2,{entity_id:e.weather||""}),V("media",0,2,4,1,{entity_id:e.media||""}),V("camera",0,3,4,1,{entity_id:e.camera||((r=e.cameras)==null?void 0:r[0])||"",entity_ids:(e.cameras||[]).slice(0,se.cameraEntities)}),V("quickAction",4,0,2,2,{entity_id:((i=t[0])==null?void 0:i.entity_id)||"",label:((a=t[0])==null?void 0:a.label)||"",icon:((o=t[0])==null?void 0:o.icon)||"",mode:"toggle"}),V("scene",4,2,2,1,{entity_id:((l=n[0])==null?void 0:l.entity_id)||"",label:((c=n[0])==null?void 0:c.label)||"",icon:((u=n[0])==null?void 0:u.icon)||""}),V("scene",4,3,2,1,{entity_id:((d=n[1])==null?void 0:d.entity_id)||"",label:((m=n[1])==null?void 0:m.label)||"",icon:((f=n[1])==null?void 0:f.icon)||""}),V("quickAction",6,0,2,2,{entity_id:((h=t[1])==null?void 0:h.entity_id)||"",label:((v=t[1])==null?void 0:v.label)||"",icon:((w=t[1])==null?void 0:w.icon)||"",mode:"brightness"}),V("scene",6,2,2,1,{entity_id:((x=n[2])==null?void 0:x.entity_id)||"",label:((p=n[2])==null?void 0:p.label)||"",icon:((g=n[2])==null?void 0:g.icon)||""}),V("scene",6,3,2,1,{entity_id:((y=n[3])==null?void 0:y.entity_id)||"",label:((_=n[3])==null?void 0:_.label)||"",icon:((S=n[3])==null?void 0:S.icon)||""}),V("popup",8,0,2,2,{entity_ids:((E=t[2])==null?void 0:E.entity_ids)||((C=t[2])!=null&&C.entity_id?[t[2].entity_id]:[]),label:((j=t[2])==null?void 0:j.label)||"",icon:((M=t[2])==null?void 0:M.icon)||""}),V("alarm",10,0,2,2,{entity_id:e.alarm||"",label:"Alarmanlage",icon:"mdi:shield-home"})]}function rS(){return[V("sankey",0,0,8,ht,{label:"Energiefluss heute"}),V("energyTile",8,0,4,2,{tileKind:"inputs-outputs",label:"Inputs / Outputs"}),V("energyTile",8,2,4,2,{tileKind:"ev-heatpump",label:"E-Auto"})]}const uc=[{id:"classic",name:"Klassisch",description:"Wetter links, Entitäten & Szenen rechts — wie bisher",preview:[4,2,2,2,2,2],build:e=>({pages:[{id:"page-home",name:"Home",widgets:nS(e)},{id:"page-list",name:"Liste",widgets:[V("shopping",0,0,Ge,ht,{entity_id:e.shopping||""})]},{id:"page-energy",name:"Energie",widgets:rS()}]})},{id:"weather-top",name:"Wetter oben",description:"Breites Wetter, Steuerung darunter",preview:[12,3,3,3,3],build:e=>{var t,n,r,i,a,o,l,c,u,d;return{pages:[{id:"page-home",name:"Home",widgets:[V("weather",0,0,Ge,2,{entity_id:e.weather||""}),V("media",0,2,4,1,{entity_id:e.media||""}),V("camera",4,2,4,2,{entity_id:e.camera||""}),V("quickAction",8,2,2,2,{entity_id:((n=(t=e.quickActions)==null?void 0:t[0])==null?void 0:n.entity_id)||"",mode:"toggle"}),V("quickAction",10,2,2,2,{entity_id:((i=(r=e.quickActions)==null?void 0:r[1])==null?void 0:i.entity_id)||"",mode:"brightness"}),V("scene",8,0,2,1,{entity_id:((o=(a=e.scenes)==null?void 0:a[0])==null?void 0:o.entity_id)||""}),V("scene",10,0,2,1,{entity_id:((c=(l=e.scenes)==null?void 0:l[1])==null?void 0:c.entity_id)||""}),V("popup",0,3,4,1,{entity_ids:((d=(u=e.quickActions)==null?void 0:u[2])==null?void 0:d.entity_ids)||[]})]},{id:"page-list",name:"Liste",widgets:[V("shopping",0,0,Ge,ht,{entity_id:e.shopping||""})]}]}}},{id:"compact",name:"Kompakt",description:"Kleines Wetter, viele Kacheln",preview:[3,3,3,3],build:e=>{var t,n,r,i,a,o,l,c,u,d,m,f,h,v,w,x;return{pages:[{id:"page-home",name:"Home",widgets:[V("weather",0,0,3,2,{entity_id:e.weather||""}),V("media",0,2,3,1,{entity_id:e.media||""}),V("camera",0,3,3,1,{entity_id:e.camera||""}),V("quickAction",3,0,3,2,{entity_id:((n=(t=e.quickActions)==null?void 0:t[0])==null?void 0:n.entity_id)||"",mode:"toggle"}),V("quickAction",6,0,3,2,{entity_id:((i=(r=e.quickActions)==null?void 0:r[1])==null?void 0:i.entity_id)||"",mode:"brightness"}),V("popup",9,0,3,2,{entity_ids:((o=(a=e.quickActions)==null?void 0:a[2])==null?void 0:o.entity_ids)||[]}),V("scene",3,2,2,1,{entity_id:((c=(l=e.scenes)==null?void 0:l[0])==null?void 0:c.entity_id)||""}),V("scene",5,2,2,1,{entity_id:((d=(u=e.scenes)==null?void 0:u[1])==null?void 0:d.entity_id)||""}),V("scene",7,2,2,1,{entity_id:((f=(m=e.scenes)==null?void 0:m[2])==null?void 0:f.entity_id)||""}),V("scene",9,2,2,1,{entity_id:((v=(h=e.scenes)==null?void 0:h[3])==null?void 0:v.entity_id)||""}),V("popup",3,3,3,1,{entity_ids:((x=(w=e.quickActions)==null?void 0:w[3])==null?void 0:x.entity_ids)||[]})]},{id:"page-list",name:"Liste",widgets:[V("shopping",0,0,Ge,ht,{entity_id:e.shopping||""})]}]}}},{id:"minimal",name:"Minimal",description:"Nur das Wichtigste",preview:[6,3,3],build:e=>{var t,n,r,i;return{pages:[{id:"page-home",name:"Home",widgets:[V("weather",0,0,6,2,{entity_id:e.weather||""}),V("media",0,2,6,1,{entity_id:e.media||""}),V("quickAction",6,0,3,2,{entity_id:((n=(t=e.quickActions)==null?void 0:t[0])==null?void 0:n.entity_id)||"",mode:"toggle"}),V("quickAction",9,0,3,2,{entity_id:((i=(r=e.quickActions)==null?void 0:r[1])==null?void 0:i.entity_id)||"",mode:"brightness"}),V("camera",6,2,6,2,{entity_id:e.camera||""})]},{id:"page-list",name:"Liste",widgets:[V("shopping",0,0,Ge,ht,{entity_id:e.shopping||""})]}]}}}];function iS(e){return uc.find(t=>t.id===e)||uc[0]}function Zn(e,t={}){return iS(e).build(t)}const aS={dark:{id:"dark",label:"Schwarz"},light:{id:"light",label:"Weiß"},colorful:{id:"colorful",label:"Bunt"},blackColorful:{id:"blackColorful",label:"Schwarz bunt"}},Kt=[{bg:"#D0F2E0",fg:"#1a1a1a"},{bg:"#F7BD9D",fg:"#1a1a1a"},{bg:"#F9E892",fg:"#1a1a1a"},{bg:"#BDE0F7",fg:"#1a1a1a"},{bg:"#E0C3FC",fg:"#1a1a1a"},{bg:"#F0EEE8",fg:"#1a1a1a"},{bg:"#F5C6D0",fg:"#1a1a1a"},{bg:"#2C2C2C",fg:"#ffffff"}],Lo=[{id:"indigo",label:"Indigo",accent:"#6366f1",accentRgb:"99, 102, 241",preview:"linear-gradient(135deg, #a5b4fc, #4338ca)"},{id:"ocean",label:"Ozean",accent:"#06b6d4",accentRgb:"6, 182, 212",preview:"linear-gradient(135deg, #67e8f9, #0e7490)"},{id:"forest",label:"Wald",accent:"#10b981",accentRgb:"16, 185, 129",preview:"linear-gradient(135deg, #6ee7b7, #047857)"},{id:"sunset",label:"Sonnenuntergang",accent:"#f59e0b",accentRgb:"245, 158, 11",preview:"linear-gradient(135deg, #fcd34d, #c2410c)"},{id:"rose",label:"Rose",accent:"#ec4899",accentRgb:"236, 72, 153",preview:"linear-gradient(135deg, #f9a8d4, #be185d)"},{id:"violet",label:"Violett",accent:"#8b5cf6",accentRgb:"139, 92, 246",preview:"linear-gradient(135deg, #c4b5fd, #6d28d9)"}],oS=["linear-gradient(135deg, #6366f1, #2563eb)","linear-gradient(135deg, #f59e0b, #ea580c)","linear-gradient(135deg, #10b981, #059669)","linear-gradient(135deg, #ec4899, #be185d)","linear-gradient(135deg, #8b5cf6, #6d28d9)","linear-gradient(135deg, #06b6d4, #0891b2)","linear-gradient(135deg, #ef4444, #b91c1c)","linear-gradient(135deg, #14b8a6, #0d9488)"],sS=["linear-gradient(135deg, #52525b, #18181b)","linear-gradient(135deg, #3f3f46, #09090b)","linear-gradient(135deg, #71717a, #27272a)","linear-gradient(135deg, #27272a, #09090b)","linear-gradient(135deg, #52525b, #27272a)","linear-gradient(135deg, #3f3f46, #18181b)","linear-gradient(135deg, #71717a, #3f3f46)","linear-gradient(135deg, #18181b, #000000)"],At={mode:"dark",colorSet:"indigo"};function lS(e){const t=parseInt(e.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]}function zn([e,t,n]){return`#${[e,t,n].map(r=>r.toString(16).padStart(2,"0")).join("")}`}function On(e,t,n){return e.map((r,i)=>Math.round(r+(t[i]-r)*n))}function Fu(e){const t=lS(e);return[zn(On(t,[255,255,255],.45)),zn(On(t,[255,255,255],.25)),e,zn(On(t,[0,0,0],.18)),zn(On(t,[0,0,0],.35)),zn(On(t,[0,0,0],.5)),zn(On(t,[0,0,0],.65)),zn(On(t,[0,0,0],.8))]}function cS(e){const t=Fu(e);return t.map((n,r)=>{const i=t[Math.min(r+2,t.length-1)];return`linear-gradient(135deg, ${n}, ${i})`})}function uS(e){return e==="light"||e==="colorful"||e==="dark"||e==="blackColorful"?e:e==="monochrome"?"dark":At.mode}function dS(e){const t=String(e||"0");let n=0;for(let r=0;r<t.length;r+=1)n=t.charCodeAt(r)+((n<<5)-n);return Math.abs(n)}function mS(e="0"){return Kt[dS(e)%Kt.length]}function fS(e="0"){const{bg:t,fg:n}=mS(e);return{"--tm-surface":t,"--tm-surface-2":t,"--tm-surface-border":"transparent","--tm-tile-fg":n}}function An(e={}){const t=uS(e.mode),n=Lo.some(r=>r.id===e.colorSet)?e.colorSet:At.colorSet;return{mode:t,colorSet:n}}function Wu(e=At.colorSet){return Lo.find(t=>t.id===e)||Lo[0]}function Hu(e=At){const t=An(e);if(t.mode==="light")return{mode:"light",colorSet:t.colorSet,accent:"#1d1d1f",accentRgb:"29, 29, 31"};if(t.mode==="colorful"){const n=Wu(t.colorSet);return{mode:"colorful",colorSet:n.id,accent:n.accent,accentRgb:n.accentRgb}}return t.mode==="blackColorful"?{mode:"blackColorful",colorSet:t.colorSet,accent:"#1a1a1a",accentRgb:"26, 26, 26"}:{mode:"dark",colorSet:t.colorSet,accent:"#6366f1",accentRgb:"99, 102, 241"}}function pS(){return{"--tm-bg":"#000000","--tm-fg":"#ffffff","--tm-surface":"rgba(255, 255, 255, 0.10)","--tm-surface-2":"rgba(255, 255, 255, 0.05)","--tm-surface-border":"rgba(255, 255, 255, 0.08)","--tm-tile-fg":"#ffffff","--tm-overlay":"linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.4) 100%)","--tm-screensaver-gradient":"linear-gradient(135deg, rgba(49, 46, 129, 0.3), black, rgba(88, 28, 135, 0.3))","--tm-bg-image-opacity":"0.6","--tm-settings-bg":"rgba(0, 0, 0, 0.85)","--tm-settings-surface":"rgba(255, 255, 255, 0.05)","--tm-settings-surface-border":"rgba(255, 255, 255, 0.08)","--tm-accent":"#6366f1","--tm-accent-rgb":"99, 102, 241","--tm-vi-accent":"#ff6b2b","--tm-vi-track":"#e5e5ea"}}function hS(){return{"--tm-bg":"#f5f5f7","--tm-fg":"#1d1d1f","--tm-surface":"#1d1d1f","--tm-surface-2":"#1d1d1f","--tm-surface-border":"rgba(255, 255, 255, 0.08)","--tm-tile-fg":"#ffffff","--tm-overlay":"none","--tm-screensaver-gradient":"linear-gradient(135deg, rgba(0, 0, 0, 0.08), #f5f5f7, rgba(0, 0, 0, 0.05))","--tm-bg-image-opacity":"0","--tm-settings-bg":"rgba(245, 245, 247, 0.96)","--tm-settings-surface":"rgba(0, 0, 0, 0.04)","--tm-settings-surface-border":"rgba(0, 0, 0, 0.08)","--tm-accent":"#1d1d1f","--tm-accent-rgb":"29, 29, 31","--tm-vi-accent":"#1d1d1f","--tm-vi-track":"#d1d1d6"}}function gS(e,t){const n=Fu(e),r=n[n.length-1];return{"--tm-bg":r,"--tm-fg":"#ffffff","--tm-surface":`rgba(${t}, 0.28)`,"--tm-surface-2":`rgba(${t}, 0.16)`,"--tm-surface-border":`rgba(${t}, 0.35)`,"--tm-tile-fg":"#ffffff","--tm-overlay":`linear-gradient(to top, ${r} 0%, rgba(${t}, 0.35) 55%, rgba(${t}, 0.2) 100%)`,"--tm-screensaver-gradient":`linear-gradient(135deg, rgba(${t}, 0.45), ${r}, rgba(${t}, 0.25))`,"--tm-bg-image-opacity":"0.25","--tm-settings-bg":"rgba(0, 0, 0, 0.88)","--tm-settings-surface":"rgba(255, 255, 255, 0.06)","--tm-settings-surface-border":`rgba(${t}, 0.25)`,"--tm-accent":e,"--tm-accent-rgb":t,"--tm-vi-accent":e,"--tm-vi-track":`rgba(${t}, 0.25)`}}function yS(){const e=Kt[0];return{"--tm-bg":"#000000","--tm-fg":"#ffffff","--tm-surface":e.bg,"--tm-surface-2":"#F0EEE8","--tm-surface-border":"transparent","--tm-tile-fg":e.fg,"--tm-overlay":"none","--tm-screensaver-gradient":"linear-gradient(135deg, #D0F2E0 0%, #000 40%, #E0C3FC 100%)","--tm-bg-image-opacity":"0","--tm-settings-bg":"rgba(0, 0, 0, 0.92)","--tm-settings-surface":"rgba(255, 255, 255, 0.06)","--tm-settings-surface-border":"rgba(255, 255, 255, 0.08)","--tm-accent":"#1a1a1a","--tm-accent-rgb":"26, 26, 26","--tm-vi-accent":"#1a1a1a","--tm-vi-track":"rgba(0, 0, 0, 0.12)","--tm-radius-xl":"2rem"}}function vS(e=At){const t=Hu(e);return t.mode==="light"?hS():t.mode==="colorful"?gS(t.accent,t.accentRgb):t.mode==="blackColorful"?yS():pS()}function bS(e=At){const{mode:t}=An(e);return{"data-tm-theme":t,style:vS(e)}}const xS=Kt.map(({bg:e})=>e);function wS(e=At){const{mode:t,colorSet:n}=An(e);return t==="light"?sS:t==="colorful"?cS(Wu(n).accent):t==="blackColorful"?xS:oS}function Bu(e=At){return An(e).mode==="light"}function Uu(e=At){return An(e).mode==="colorful"}function rr(e=At){return An(e).mode==="blackColorful"}const Vi=12,i0="the-monitor-active-room";function a0(){return`room-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`}function zo(e,{areaId:t="",layout:n=null,layoutPreset:r="classic"}={}){return{id:a0(),name:(e||"Raum").trim()||"Raum",areaId:t||"",layoutPreset:r,layout:n||Zn(r)}}function kS(e={}){var r,i;const t=e.layoutPreset||"classic",n=(i=(r=e.layout)==null?void 0:r.pages)!=null&&i.length?r0(e.layout):Zn(t);return{id:e.id||a0(),name:(e.name||"Raum").trim()||"Raum",areaId:e.areaId||"",layoutPreset:t,layout:n}}function o0(e){return!Array.isArray(e)||!e.length?[zo("Zuhause")]:e.slice(0,Vi).map(kS)}function _S(e,t={}){var r,i;if(Array.isArray(t.rooms)&&t.rooms.length)return o0(t.rooms);const n=(i=(r=e.layout)==null?void 0:r.pages)!=null&&i.length?e.layout:Zn(e.layoutPreset||"classic");return[zo("Zuhause",{layout:n,layoutPreset:e.layoutPreset||"classic"})]}function SS(e,t){return(e==null?void 0:e.find(n=>n.id===t))||(e==null?void 0:e[0])||null}function qm(e){var t;try{const n=localStorage.getItem(i0);if(n&&(e!=null&&e.some(r=>r.id===n)))return n}catch{}return((t=e==null?void 0:e[0])==null?void 0:t.id)||""}function Ca(e){try{e&&localStorage.setItem(i0,e)}catch{}}function NS(e){var t;return(t=e.rooms)==null?void 0:t.some(n=>Q_(n.layout))}function jS(e){return e==null?void 0:e.some(t=>{var n,r;return(r=(n=t.layout)==null?void 0:n.pages)==null?void 0:r.some(i=>{var a;return(a=i.widgets)==null?void 0:a.some(o=>{var l;return o.entity_id||((l=o.entity_ids)==null?void 0:l.length)})})})}const Ku="the-monitor-config",Ya={rooms:o0([{name:"Zuhause"}]),windows:[],presence:[],vacuum:{entity_id:""},ev:{stateEntity:"",batteryEntity:"",powerEntity:"",label:"E-Auto"},backgroundImage:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2940&auto=format&fit=crop",screensaver:{enabled:!0,idleMinutes:1,showDate:!0,showWeather:!0,style:"classic"},appearance:{...At},hideHaSidebar:!1,roomSidebar:!1};function CS(e,t=0){var i,a;const n=((a=(i=e.rooms)==null?void 0:i[t])==null?void 0:a.layout)||Y_(),r=Du(n);return{...e,weather:{entity_id:r.weather||""},mediaPlayer:{entity_id:r.media||""},camera:{entity_id:r.camera||""},shoppingList:{entity_id:r.shopping||""},alarm:{entity_id:r.alarm||""}}}function ES(e){const t=na(e);return{layout:Zn("classic",t),layoutPreset:"classic"}}function je(e={}){var i,a,o,l,c,u,d;const t=structuredClone(Ya);if(e.backgroundImage&&(t.backgroundImage=e.backgroundImage),(i=e.vacuum)!=null&&i.entity_id&&(t.vacuum={entity_id:e.vacuum.entity_id}),e.ev&&(t.ev={stateEntity:e.ev.stateEntity||e.ev.state_entity||"",batteryEntity:e.ev.batteryEntity||e.ev.battery_entity||"",powerEntity:e.ev.powerEntity||e.ev.power_entity||"",label:e.ev.label||Ya.ev.label}),Array.isArray(e.windows)&&(t.windows=e.windows.filter(m=>m==null?void 0:m.entity_id).slice(0,se.windows).map(m=>({entity_id:m.entity_id,label:m.label||""}))),Array.isArray(e.presence)&&(t.presence=e.presence.filter(m=>m==null?void 0:m.entity_id).map(m=>({entity_id:m.entity_id,label:m.label||""}))),e.screensaver){const m=Number(e.screensaver.idleMinutes);t.screensaver={enabled:e.screensaver.enabled!==!1,idleMinutes:Number.isFinite(m)?Math.min(60,Math.max(1,Math.round(m))):Ya.screensaver.idleMinutes,showDate:e.screensaver.showDate!==!1,showWeather:e.screensaver.showWeather!==!1,style:e.screensaver.style==="sexy"?"sexy":"classic"}}t.appearance=An(e.appearance||t.appearance),typeof e.hideHaSidebar=="boolean"&&(t.hideHaSidebar=e.hideHaSidebar),typeof e.roomSidebar=="boolean"&&(t.roomSidebar=e.roomSidebar);const n=(o=(a=e.layout)==null?void 0:a.pages)==null?void 0:o.length,r=((l=e.quickActions)==null?void 0:l.length)||((c=e.scenes)==null?void 0:c.length)||((u=e.weather)==null?void 0:u.entity_id);if(n)t.layout=r0(e.layout)||Zn("classic"),t.layoutPreset=e.layoutPreset||"classic";else if(r){const m=ES(e);t.layout=m.layout,t.layoutPreset=m.layoutPreset}else(d=e.rooms)!=null&&d.length||(t.layout=Zn(e.layoutPreset||"classic"),t.layoutPreset=e.layoutPreset||"classic");return t.rooms=_S(t,e),delete t.layout,delete t.layoutPreset,CS(t)}function qu(){try{const e=localStorage.getItem(Ku);return e?je(JSON.parse(e)):je()}catch{return je()}}function TS(){var r,i,a,o,l,c,u;const e=qu();if(NS(e))return Xs(Ym(Vm(e)));const t=je(xu);if(!((o=(a=(i=(r=e.rooms)==null?void 0:r[0])==null?void 0:i.layout)==null?void 0:a.pages)!=null&&o.length))return Xs(t);const n=na(t);return Xs(Ym(Vm(je({...e,weather:t.weather,mediaPlayer:t.mediaPlayer,camera:t.camera,shoppingList:t.shoppingList,alarm:t.alarm,cameras:t.cameras,vacuum:(l=e.vacuum)!=null&&l.entity_id?e.vacuum:t.vacuum,ev:(c=e.ev)!=null&&c.stateEntity?e.ev:t.ev,presence:(u=e.presence)!=null&&u.length?e.presence:t.presence,rooms:e.rooms.map((d,m)=>m===0?{...d,layout:{...d.layout,pages:d.layout.pages.map(f=>({...f,widgets:X_(f.widgets,n)}))}}:d)}))))}function Vm(e){var u,d,m,f,h,v;const t=((u=e.alarm)==null?void 0:u.entity_id)||na(xu).alarm||"alarm_control_panel.haus";if((d=e.rooms)==null?void 0:d.some(w=>{var x,p;return(p=(x=w.layout)==null?void 0:x.pages)==null?void 0:p.some(g=>{var y;return(y=g.widgets)==null?void 0:y.some(_=>_.type==="alarm")})}))return e;const r=structuredClone(e),i=(m=r.rooms)==null?void 0:m[0],a=(h=(f=i==null?void 0:i.layout)==null?void 0:f.pages)==null?void 0:h[0];if(!((v=a==null?void 0:a.widgets)!=null&&v.length))return e;const o=a.widgets.filter(w=>w.type==="popup"),l=o[o.length-1];if(!l)return e;const c=a.widgets.findIndex(w=>w.id===l.id);return a.widgets[c]=Wt("alarm",{x:l.x,y:l.y,w:l.w,h:l.h,entity_id:t,label:"Alarmanlage",icon:"mdi:shield-home"}),je(r)}function Ym(e){var i;const t=na(xu).cameras;if(!t.length)return e;const n=structuredClone(e);let r=!1;return(i=n.rooms)==null||i.forEach(a=>{var o,l;(l=(o=a.layout)==null?void 0:o.pages)==null||l.forEach(c=>{c.widgets=c.widgets.map(u=>{var d;return u.type!=="camera"||((d=u.entity_ids)==null?void 0:d.length)>1?u:(r=!0,{...u,entity_id:u.entity_id||t[0],entity_ids:[...t]})})})}),r?je(n):e}function PS(){return[Wt("sankey",{x:0,y:0,w:8,h:4,label:"Energiefluss heute"}),Wt("energyTile",{x:8,y:0,w:4,h:2,tileKind:"inputs-outputs",label:"Inputs / Outputs"}),Wt("energyTile",{x:8,y:2,w:4,h:2,tileKind:"ev-heatpump",label:"E-Auto"})]}function AS(e){var l,c,u,d,m;const t=(l=e==null?void 0:e.pages)==null?void 0:l.find(f=>{var h;return f.id==="page-energy"||((h=f.widgets)==null?void 0:h.some(v=>v.type==="sankey"))});if(!t)return(c=e==null?void 0:e.pages)!=null&&c.length?{...e,pages:[...e.pages,{id:"page-energy",name:"Energie",widgets:PS()}]}:e;const n=(u=t.widgets)==null?void 0:u.some(f=>f.type==="energyTile"&&f.tileKind==="inputs-outputs"),r=(d=t.widgets)==null?void 0:d.some(f=>f.type==="energyTile"&&f.tileKind==="ev-heatpump"),i=(m=t.widgets)==null?void 0:m.find(f=>f.type==="sankey");if(n&&r)return e;const a=structuredClone(e),o=a.pages.find(f=>f.id===t.id)||a.pages.find(f=>{var h;return(h=f.widgets)==null?void 0:h.some(v=>v.type==="sankey")});if(!o)return e;if(i&&i.w>=12){const f=o.widgets.findIndex(h=>h.id===i.id);o.widgets[f]={...o.widgets[f],w:8,h:4,x:0,y:0}}return n||o.widgets.push(Wt("energyTile",{x:8,y:0,w:4,h:2,tileKind:"inputs-outputs",label:"Inputs / Outputs"})),r||o.widgets.push(Wt("energyTile",{x:8,y:2,w:4,h:2,tileKind:"ev-heatpump",label:"E-Auto"})),a}function Xs(e){let t=!1;const n=e.rooms.map(r=>{const i=AS(r.layout);return i!==r.layout&&(t=!0),{...r,layout:i}});return t?je({...e,rooms:n}):e}function MS(e){localStorage.setItem(Ku,JSON.stringify(e))}function LS(e){return JSON.stringify(e,null,2)}function zS(e){const t=JSON.parse(e);return je(t)}function OS(e){var t,n,r,i;return!!(jS(e.rooms)||(t=e.weather)!=null&&t.entity_id||(n=e.mediaPlayer)!=null&&n.entity_id||(r=e.shoppingList)!=null&&r.entity_id||(i=e.vacuum)!=null&&i.entity_id)}function Gm(e={},{embedded:t=!1}={}){const n=qu(),r=je(e),i=OS(r),a=!!localStorage.getItem(Ku);return je(t?a?{...Na,...r,...n}:i?{...Na,...n,...r}:{...Na,...n,...r}:i?{...Na,...n,...r}:{...n,backgroundImage:r.backgroundImage||n.backgroundImage})}const s0=b.createContext(null);function dc(e,t=0){var i,a;const n=(a=(i=e.rooms)==null?void 0:i[t])==null?void 0:a.layout,r=Du(n);return{...e,weather:{entity_id:r.weather||""},mediaPlayer:{entity_id:r.media||""},camera:{entity_id:r.camera||""},shoppingList:{entity_id:r.shopping||""}}}function gi(e,t){return e.findIndex(n=>n.id===t)}function on(e,t,n,r){var l,c;const i=gi(e.rooms,t);if(i<0)return e;const a=structuredClone(e),o=a.rooms[i];return(c=(l=o.layout)==null?void 0:l.pages)!=null&&c[n]?(o.layout.pages[n]=r(o.layout.pages[n]),dc(a,i)):e}function l0({initialConfig:e,onConfigSaved:t,children:n}){const[r,i]=b.useState(()=>e||je(qu())),[a,o]=b.useState(()=>qm(r.rooms)),l=b.useMemo(()=>SS(r.rooms,a),[r.rooms,a]);b.useEffect(()=>{var k;if(!r.rooms.some(N=>N.id===a)){const N=((k=r.rooms[0])==null?void 0:k.id)||"";o(N),Ca(N)}},[r.rooms,a]);const c=b.useCallback(k=>{i(N=>{const P=typeof k=="function"?k(N):k,O=je(P);return MS(O),t==null||t(O),O})},[t]),u=b.useCallback(k=>{o(k),Ca(k)},[]),d=b.useCallback(k=>{c(N=>({...N,ev:{...Ya.ev,...N.ev,...k}}))},[c]),m=b.useCallback((k,N)=>{c(P=>({...P,[k]:{entity_id:N}}))},[c]),f=b.useCallback((k,N="")=>{c(P=>P.presence.some(O=>O.entity_id===k)?P:{...P,presence:[...P.presence,{entity_id:k,label:N}]})},[c]),h=b.useCallback(k=>{c(N=>({...N,presence:N.presence.filter(P=>P.entity_id!==k)}))},[c]),v=b.useCallback((k,N="")=>{c(P=>P.windows.some(O=>O.entity_id===k)||P.windows.length>=se.windows?P:{...P,windows:[...P.windows,{entity_id:k,label:N}]})},[c]),w=b.useCallback(k=>{c(N=>({...N,windows:N.windows.filter(P=>P.entity_id!==k)}))},[c]),x=b.useCallback(k=>{c(N=>{if(N.rooms.length>=Vi)return N;const P=zo(k);return{...N,rooms:[...N.rooms,P]}})},[c]),p=b.useCallback(k=>{k!=null&&k.area_id&&c(N=>{if(N.rooms.length>=Vi||N.rooms.some(O=>O.areaId===k.area_id))return N;const P=zo(k.name,{areaId:k.area_id});return{...N,rooms:[...N.rooms,P]}})},[c]),g=b.useCallback(k=>{c(N=>{var O;if(N.rooms.length<=1)return N;const P=N.rooms.filter(W=>W.id!==k);if(a===k){const W=((O=P[0])==null?void 0:O.id)||"";o(W),Ca(W)}return{...N,rooms:P}})},[a,c]),y=b.useCallback((k,N)=>{c(P=>({...P,rooms:P.rooms.map(O=>O.id===k?{...O,name:N.trim()||O.name}:O)}))},[c]),_=b.useCallback((k,N,P)=>{c(O=>on(O,a,k,W=>({...W,widgets:W.widgets.map(Y=>Y.id===N?{...Y,...P}:Y)})))},[a,c]),S=b.useCallback((k,N,P)=>{c(O=>on(O,a,k,W=>{const Y=W.widgets.map(q=>{if(q.id!==N)return q;const he=mn({...q,...P});return wr(W.widgets,he,N).length?q:he});return{...W,widgets:Y}}))},[a,c]),E=b.useCallback((k,N,P)=>{c(O=>on(O,a,k,W=>{const Y=W.widgets.map(q=>{if(q.id!==N)return q;const he=mn({...q,...P});return wr(W.widgets,he,N).length?q:he});return{...W,widgets:Y}}))},[a,c]),C=b.useCallback((k,N,P)=>{c(O=>on(O,a,k,W=>{const Y=W.widgets.map(q=>{if(q.id!==N)return q;const he=mn({...q,w:P.w,h:P.h});return wr(W.widgets,he,N).length?q:he});return{...W,widgets:Y}}))},[a,c]),j=b.useCallback((k,N)=>{c(P=>on(P,a,k,O=>{const W=Wt(N),Y=U_(O.widgets,{w:W.w,h:W.h});return{...O,widgets:[...O.widgets,mn({...W,...Y})]}}))},[a,c]),M=b.useCallback((k,N,P)=>{const O=Wt(N),W=mn({...O,...P});return c(Y=>on(Y,a,k,q=>q.widgets.length>=se.widgetsPerPage||wr(q.widgets,W).length?q:{...q,widgets:[...q.widgets,W]})),W.id},[a,c]),T=b.useCallback((k,N)=>{c(P=>on(P,a,k,O=>({...O,widgets:O.widgets.filter(W=>W.id!==N)})))},[a,c]),I=b.useCallback(k=>{c(N=>{const P=gi(N.rooms,a);if(P<0)return N;const O=N.rooms[P],W=Du(O.layout),Y=Zn(k,W),q=structuredClone(N);return q.rooms[P]={...O,layout:Y,layoutPreset:k},dc(q,P)})},[a,c]),U=b.useCallback(()=>{c(k=>{const N=gi(k.rooms,a);if(N<0)return k;const P=k.rooms[N];if(P.layout.pages.length>=se.pages)return k;const O=structuredClone(k);return O.rooms[N]={...P,layout:{...P.layout,pages:[...P.layout.pages,n0(`Seite ${P.layout.pages.length+1}`)]}},O})},[a,c]),Q=b.useCallback(k=>{c(N=>{const P=gi(N.rooms,a);if(P<0)return N;const O=N.rooms[P];if(O.layout.pages.length<=1)return N;const W=structuredClone(N);return W.rooms[P]={...O,layout:{...O.layout,pages:O.layout.pages.filter((Y,q)=>q!==k)}},dc(W,P)})},[a,c]),J=b.useCallback((k,N)=>{c(P=>{const O=gi(P.rooms,a);if(O<0)return P;const W=P.rooms[O],{pages:Y}=W.layout;if(k===N||k<0||k>=Y.length||N<0||N>=Y.length)return P;const q=[...Y],[he]=q.splice(k,1);q.splice(N,0,he);const tt=structuredClone(P);return tt.rooms[O]={...W,layout:{...W.layout,pages:q}},tt})},[a,c]),oe=b.useCallback((k,N)=>{c(P=>on(P,a,k,O=>({...O,name:N.trim()||O.name})))},[a,c]),ve=b.useCallback(k=>{c(N=>({...N,screensaver:{...N.screensaver,...k}}))},[c]),H=b.useCallback(k=>{c(N=>({...N,appearance:An({...N.appearance,...k})}))},[c]),$=b.useCallback(k=>{c(N=>({...N,...k}))},[c]),A=b.useCallback(()=>LS(r),[r]),L=b.useCallback(k=>{try{const N=zS(k);c(N);const P=qm(N.rooms);return o(P),Ca(P),!0}catch{return!1}},[c]);return s.jsx(s0.Provider,{value:{config:r,activeRoom:l,activeRoomId:a,setActiveRoomId:u,setConfig:c,setSingleEntity:m,updateEv:d,addPresence:f,removeWindow:w,addWindow:v,removePresence:h,addRoom:x,addRoomFromHaArea:p,removeRoom:g,renameRoom:y,updateWidget:_,moveWidget:S,resizeWidget:E,applyWidgetSize:C,addWidget:j,addWidgetAt:M,removeWidget:T,applyLayoutPreset:I,addLayoutPage:U,removeLayoutPage:Q,moveLayoutPage:J,renameLayoutPage:oe,updateScreensaver:ve,updateAppearance:H,updateDisplay:$,exportToJson:A,importFromJson:L},children:n})}function Ee(){const e=b.useContext(s0);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e}const $S={on:"An",off:"Aus",open:"Offen",closed:"Geschlossen",home:"Zuhause",not_home:"Abwesend",detected:"Erkannt",clear:"Frei",wet:"Nass",dry:"Trocken",moving:"Bewegung",plugged_in:"Angeschlossen",unplugged:"Getrennt",locked:"Gesperrt",unlocked:"Offen"};function c0(e,t=1){const n=Number(e);return Number.isFinite(n)?n.toLocaleString("de-DE",{minimumFractionDigits:0,maximumFractionDigits:t}):e}function u0(e,t){return e==="temperature"||t==="°C"||t==="°F"?1:e==="humidity"||t==="%"?0:e==="power"||e==="energy"||e==="voltage"?1:e==="illuminance"?0:1}function mc(e,t){const n=Et(e,t),{state:r,attributes:i,domain:a}=n,o=i.unit_of_measurement||"",l=i.device_class||"";if(r==="unavailable"||r==="unknown")return{value:"—",unit:"",stateLabel:"Nicht verfügbar"};if(a==="binary_sensor")return{value:$S[r]||r,unit:"",stateLabel:""};if(a==="sensor"){const c=Number(r);if(Number.isFinite(c)){const u=u0(l,o);return{value:c0(c,u),unit:o,stateLabel:""}}return{value:r,unit:o,stateLabel:""}}return{value:r,unit:o,stateLabel:""}}function IS(e,t){const{domain:n,attributes:r}=t,i=r.unit_of_measurement||"",a=r.device_class||"";if(n==="binary_sensor")return e>=.5?"An":"Aus";const o=Number(e);return Number.isFinite(o)?c0(o,u0(a,i)):String(e)}function RS(e){var t;return(t=e.entity_ids)!=null&&t.length?e.entity_ids.filter(Boolean):e.entity_id?[e.entity_id]:[]}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var DS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),R=(e,t)=>{const n=b.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:l="",children:c,...u},d)=>b.createElement("svg",{ref:d,...DS,width:i,height:i,stroke:r,strokeWidth:o?Number(a)*24/Number(i):a,className:["lucide",`lucide-${FS(e)}`,l].join(" "),...u},[...t.map(([m,f])=>b.createElement(m,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=R("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=R("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=R("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=R("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=R("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=R("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=R("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=R("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=R("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=R("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=R("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=R("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=R("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=R("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=R("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=R("CloudFog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=R("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=R("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=R("CloudSnow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=R("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=R("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=R("DoorClosed",[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=R("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=R("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=R("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=R("Fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=R("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=R("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=R("GripHorizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=R("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=R("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=R("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=R("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=R("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=R("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=R("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=R("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=R("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=R("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=R("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=R("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=R("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=R("PanelTopOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=R("PanelTop",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=R("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=R("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=R("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=R("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=R("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=R("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=R("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=R("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=R("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=R("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=R("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=R("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=R("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=R("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=R("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=R("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=R("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=R("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=R("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=R("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=R("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=R("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=R("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=R("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),E0={clear:"clear.mp4","clear-night":"clear.mp4",partlycloudy:"partlycloudy.mp4"};function vN(e){const t=new Date().getHours();return e==="clear"&&(t<6||t>=20)?"clear-night":E0[e]?e:null}function bN(e,t){var a;const n=vN(t);if(!n)return null;const r=E0[n],i=`/local/weather/${r}`;if(_o(e)){const o=ea(e);return o?`${o}${i}`:i}return typeof window<"u"&&((a=window.location)!=null&&a.origin)?`${window.location.origin}/weather/${r}`:`/weather/${r}`}const Ht={sunny:{label:"Sonnig",Icon:Yi,gradient:"linear-gradient(160deg, #f59e0b 0%, #3b82f6 100%)"},clear:{label:"Klar",Icon:Yi,gradient:"linear-gradient(160deg, #38bdf8 0%, #6366f1 100%)"},"clear-night":{label:"Klare Nacht",Icon:b0,gradient:"linear-gradient(160deg, #1e1b4b 0%, #0f172a 100%)"},partlycloudy:{label:"Teilweise bewölkt",Icon:Vu,gradient:"linear-gradient(160deg, #94a3b8 0%, #3b82f6 100%)"},cloudy:{label:"Bewölkt",Icon:p0,gradient:"linear-gradient(160deg, #64748b 0%, #334155 100%)"},rainy:{label:"Regen",Icon:fc,gradient:"linear-gradient(160deg, #475569 0%, #1e40af 100%)"},pouring:{label:"Starkregen",Icon:fc,gradient:"linear-gradient(160deg, #334155 0%, #1e3a8a 100%)"},snowy:{label:"Schnee",Icon:Jm,gradient:"linear-gradient(160deg, #cbd5e1 0%, #64748b 100%)"},fog:{label:"Nebel",Icon:GS,gradient:"linear-gradient(160deg, #9ca3af 0%, #6b7280 100%)"},lightning:{label:"Gewitter",Icon:Xm,gradient:"linear-gradient(160deg, #4c1d95 0%, #1e3a8a 100%)"},hail:{label:"Hagel",Icon:Jm,gradient:"linear-gradient(160deg, #94a3b8 0%, #475569 100%)"},windy:{label:"Windig",Icon:C0,gradient:"linear-gradient(160deg, #38bdf8 0%, #64748b 100%)"},exceptional:{label:"Extrem",Icon:Xm,gradient:"linear-gradient(160deg, #7c2d12 0%, #1e293b 100%)"}},xN="linear-gradient(160deg, #a1a1aa 0%, #3f3f46 100%)",wN="linear-gradient(160deg, #71717a 0%, #27272a 100%)";function kN(e,t,n){const r=Fu(Wu(n==null?void 0:n.colorSet).accent),i=t<6||t>=20;return e==="clear"&&i?`linear-gradient(160deg, ${r[4]} 0%, ${r[7]} 100%)`:`linear-gradient(160deg, ${r[1]} 0%, ${r[4]} 100%)`}function _N(e,t){const n=t<6||t>=20;return e==="clear"&&n?Kt[4].bg:e==="sunny"||e==="clear"?Kt[2].bg:e==="rainy"||e==="pouring"?Kt[3].bg:e==="snowy"||e==="hail"?Kt[5].bg:Kt[3].bg}function fs(e,t=new Date().getHours(),n){const r=t<6||t>=20;return Bu(n)?{...Ht[e]||Ht.cloudy,gradient:e==="clear"&&r?wN:xN}:Uu(n)?{...Ht[e]||Ht.cloudy,gradient:kN(e,t,n)}:rr(n)?{...Ht[e]||Ht.cloudy,gradient:_N(e,t)}:e==="clear"&&r?Ht["clear-night"]:Ht[e]||Ht.cloudy}function Ju(e,t={}){const{Icon:n}=fs(e);return s.jsx(n,{...t})}function T0(e){const t=e.temperature??e.temp??e.temp_max,n=e.templow??e.temp_min??(t!=null?t-6:null);return{datetime:e.datetime,condition:e.condition,high:t,low:n,precipitation:e.precipitation??e.precipitation_probability}}const SN=2,NN=8*60*60*1e3;function jN(e){var n,r;return(((n=e==null?void 0:e.attributes)==null?void 0:n.supported_features)??0)&SN?!0:P0((r=e==null?void 0:e.attributes)==null?void 0:r.forecast)}function P0(e){if(!Array.isArray(e)||e.length<3)return!1;const t=Ki(e[1].datetime),n=Ki(e[2].datetime);return Number.isNaN(t.getTime())||Number.isNaN(n.getTime())?!1:n.getTime()-t.getTime()<NN}function CN(e={}){const t=[e.hourly_forecast,e.forecast_hourly,e.hourly];for(const n of t)if(Array.isArray(n)&&n.length)return n;return P0(e.forecast)?e.forecast:null}function ef(e,t,n,{todayOnly:r=!1}={}){const{state:i,attributes:a}=t,o=a.temperature,l=new Date,c=Wh(qh(l),-1);return e.map(u=>({slot:u,dt:u.datetime?Ki(u.datetime):null})).filter(({dt:u})=>!(!u||u<c||r&&!hu(u,l))).slice(0,n).map(({slot:u,dt:d},m)=>{const f=m===0||d&&Math.abs(d.getTime()-l.getTime())<27e5,h=u.temperature??u.temp??o,v=d?d.getHours():m;return{datetime:u.datetime,hour:v,label:f?"Jetzt":d?yt(d,"HH:mm"):`${m}`,temp:h!=null?Math.round(h):"—",condition:u.condition??i}})}function EN(e,t,n=null,r=8){const a=qh(new Date),o=(n==null?void 0:n.high)??(typeof e=="number"?e+4:22),l=(n==null?void 0:n.low)??(typeof e=="number"?e-4:14);return Array.from({length:r},(c,u)=>{const d=Wh(a,u),m=d.getHours(),f=u===0,h=Math.max(0,Math.min(1,(m-6)/17)),v=Math.sin(h*Math.PI),w=l+(o-l)*v,x=Math.round(f&&typeof e=="number"?e:w);let p=t;return m>=20||m<6?p=t==="sunny"||t==="clear"?"clear-night":t:t==="rainy"&&m<12&&(p="partlycloudy"),{datetime:d.toISOString(),hour:m,label:f?"Jetzt":yt(d,"HH:mm"),temp:x,condition:p}})}function TN(e,t=null){const n=t||CN(e.attributes);if(n!=null&&n.length)return{dayPreview:ef(n,e,6,{todayOnly:!0}),hourlyPreview:ef(n,e,8,{todayOnly:!1})};const{state:r,attributes:i}=e,o=(i.forecast||[]).map(T0)[0]||null,l=EN(i.temperature,r,o,8);return{dayPreview:l.filter(c=>!c.datetime||hu(Ki(c.datetime),new Date)).slice(0,6),hourlyPreview:l.slice(0,8)}}function PN(e,t=null){const{state:n,attributes:r,name:i}=e,a=(r.forecast||[]).map(T0),o=a[0]||null,l=TN(e,t);return{name:i,condition:n,temp:r.temperature,humidity:r.humidity,pressure:r.pressure,windSpeed:r.wind_speed,windGust:r.wind_gust_speed,visibility:r.visibility,forecast:a,today:o,dayPreview:l.dayPreview,hourlyPreview:l.hourlyPreview}}function A0(e){const t=Number(e);return Number.isFinite(t)?t.toLocaleString("de-DE",{maximumFractionDigits:1}):null}function AN(e){var t;return(((t=e==null?void 0:e.layout)==null?void 0:t.pages)||[]).flatMap(n=>n.widgets||[])}function MN(e){const t=[];return e!=null&&e.entity_id&&t.push(e.entity_id),((e==null?void 0:e.entity_ids)||[]).forEach(n=>{n&&t.push(n)}),t}function LN(e){const t=e==null?void 0:e.media_position,n=e==null?void 0:e.media_duration;return typeof t!="number"||typeof n!="number"||n<=0?null:Math.min(100,Math.max(0,t/n*100))}function zN(e,t,n){var i,a,o,l;for(const c of e){if(c.type!=="sensor")continue;const u=(i=c.entity_ids)!=null&&i.length?c.entity_ids:c.entity_id?[c.entity_id]:[];for(const d of u){const m=t(d),f=(a=m.attributes)==null?void 0:a.device_class;if(["temperature","humidity","illuminance"].includes(f)&&!(m.state==="unavailable"||m.state==="unknown"))return{kicker:c.label||m.name,entityId:d}}}for(const c of e)for(const u of MN(c)){if(!u.startsWith("climate."))continue;const d=t(u),m=A0((o=d.attributes)==null?void 0:o.current_temperature);if(m)return{kicker:c.label||d.name,value:m,unit:"°",detail:"Raumklima"}}const r=(l=n.ev)==null?void 0:l.batteryEntity;if(r){const c=t(r);if(c.state!=="unavailable"&&c.state!=="unknown"){const u=n.ev.stateEntity?t(n.ev.stateEntity):null;return{kicker:n.ev.label||c.name,entityId:r,detail:(u==null?void 0:u.state)==="on"?"Lädt":"Akku",powerEntityId:(u==null?void 0:u.state)==="on"?n.ev.powerEntity:""}}}return null}function ON({config:e,room:t,hass:n,getEntity:r}){var d,m,f,h,v;const i=AN(t),a=[];if(e.screensaver.showWeather&&((d=e.weather)!=null&&d.entity_id)){const w=r(e.weather.entity_id);w.state&&w.state!=="unavailable"&&((m=w.attributes)==null?void 0:m.temperature)!=null&&a.push({kind:"weather",entity:w})}const o=i.find(w=>w.type==="media"&&w.entity_id),l=(o==null?void 0:o.entity_id)||((f=e.mediaPlayer)==null?void 0:f.entity_id);if(l){const w=r(l),x=(h=w.attributes)==null?void 0:h.media_title,p=(v=w.attributes)==null?void 0:v.media_artist;(w.state==="playing"||w.state==="paused"||x||p)&&a.push({kind:"media",entity:w,entityId:l})}const c=(e.presence||[]).map(w=>{var p;const x=r(w.entity_id);return!w.entity_id||x.state==="unavailable"?null:{id:w.entity_id,name:w.label||x.name,home:x.state==="home",picture:Yr(n,(p=x.attributes)==null?void 0:p.entity_picture)}}).filter(Boolean);c.length&&a.push({kind:"people",people:c});const u=zN(i,r,e);return u&&a.push({kind:"stat",...u}),a.slice(0,4)}function $N({entity:e}){var o,l,c;const t=fs(e.state),n=A0((o=e.attributes)==null?void 0:o.temperature),r=(l=e.attributes)==null?void 0:l.humidity,i=(c=e.attributes)==null?void 0:c.wind_speed,a=[r!=null?`${Math.round(r)} %`:null,i!=null?`${Math.round(i)} km/h`:null].filter(Boolean).join("  ·  ");return s.jsxs("div",{className:"tm-ssx-tile",children:[s.jsx("div",{className:"tm-ssx-icon","aria-hidden":!0,children:Ju(e.state,{size:30,strokeWidth:1.6})}),s.jsxs("div",{className:"tm-ssx-copy",children:[s.jsxs("div",{className:"tm-ssx-value",children:[n,s.jsx("span",{children:"°"})]}),s.jsx("div",{className:"tm-ssx-label",children:t.label}),a&&s.jsx("div",{className:"tm-ssx-sub",children:a})]})]})}function IN({entity:e,hass:t}){var l,c,u;const n=Yr(t,(l=e.attributes)==null?void 0:l.entity_picture),r=((c=e.attributes)==null?void 0:c.media_title)||e.name||"Wiedergabe",i=((u=e.attributes)==null?void 0:u.media_artist)||"",a=LN(e.attributes),o=e.state==="paused"?"Pause":"Gerade läuft";return s.jsxs("div",{className:"tm-ssx-tile",children:[s.jsx("div",{className:"tm-ssx-art",style:n?{backgroundImage:`url("${n}")`}:void 0,"aria-hidden":!0}),s.jsxs("div",{className:"tm-ssx-copy",children:[s.jsx("div",{className:"tm-ssx-kicker",children:o}),s.jsx("div",{className:"tm-ssx-title",children:r}),i&&s.jsx("div",{className:"tm-ssx-sub",children:i}),a!=null&&s.jsx("div",{className:"tm-ssx-progress","aria-hidden":!0,children:s.jsx("span",{style:{width:`${a}%`}})})]})]})}function RN({people:e}){const t=e.filter(i=>i.home),n=(t.length?t:e).map(i=>i.name).join(", ");let r="Anwesend";return t.length===0?r="Niemand zuhause":t.length===e.length?r="Alle zuhause":r=`${t.length} zuhause`,s.jsxs("div",{className:"tm-ssx-tile tm-ssx-tile--people",children:[s.jsx("div",{className:"tm-ssx-kicker",children:r}),s.jsx("div",{className:"tm-ssx-avatars",children:e.map(i=>{var a;return s.jsx("div",{className:`tm-ssx-avatar${i.home?"":" away"}`,title:i.name,children:i.picture?s.jsx("img",{src:i.picture,alt:""}):s.jsx("span",{children:((a=i.name)==null?void 0:a[0])||"?"})},i.id)})}),s.jsx("div",{className:"tm-ssx-sub",children:n})]})}function DN({tile:e,hass:t}){let n=e.value,r=e.unit||"",i=e.detail||"";if(e.entityId&&n==null){const a=mc(t,e.entityId);n=a.value,r=a.unit||""}if(e.powerEntityId){const a=mc(t,e.powerEntityId);a.value&&a.value!=="—"&&(i=`${a.value}${a.unit?` ${a.unit}`:""}`)}return s.jsx("div",{className:"tm-ssx-tile tm-ssx-tile--stat",children:s.jsxs("div",{className:"tm-ssx-copy",children:[s.jsx("div",{className:"tm-ssx-kicker",children:e.kicker}),s.jsxs("div",{className:"tm-ssx-value",children:[n,r&&s.jsx("span",{children:r})]}),i&&s.jsx("div",{className:"tm-ssx-sub",children:i})]})})}function FN({time:e}){const{config:t,activeRoom:n}=Ee(),{hass:r,getEntity:i}=et(),a=ON({config:t,room:n,hass:r,getEntity:i}),o=t.backgroundImage;return s.jsxs("div",{className:"tm-ssx tm-animate-fade",children:[s.jsx("div",{className:"tm-ssx-photo",style:o?{backgroundImage:`url("${o}")`}:void 0}),s.jsx("div",{className:"tm-ssx-shade"}),s.jsxs("div",{className:"tm-ssx-clock",children:[s.jsx("h1",{className:"tm-ssx-time",children:yt(e,"HH:mm")}),t.screensaver.showDate&&s.jsx("p",{className:"tm-ssx-date",children:yt(e,"EEEE, d. MMMM",{locale:Kn})})]}),a.length>0&&s.jsx("div",{className:"tm-ssx-dock",children:a.map(l=>l.kind==="weather"?s.jsx($N,{entity:l.entity},"weather"):l.kind==="media"?s.jsx(IN,{entity:l.entity,hass:r},"media"):l.kind==="people"?s.jsx(RN,{people:l.people},"people"):s.jsx(DN,{tile:l,hass:r},"stat"))})]})}function WN(){var l,c;const[e,t]=b.useState(new Date),{getEntity:n}=et(),{config:r}=Ee();b.useEffect(()=>{const u=setInterval(()=>t(new Date),1e3);return()=>clearInterval(u)},[]);const i=(l=r.weather)!=null&&l.entity_id?n(r.weather.entity_id):null,a=(c=i==null?void 0:i.attributes)==null?void 0:c.temperature,o=i==null?void 0:i.state;return r.screensaver.style==="sexy"?s.jsx(FN,{time:e}):s.jsxs("div",{className:"tm-absolute-fill tm-z-50 tm-flex-col tm-flex-center tm-animate-fade",style:{background:"black"},children:[s.jsx("div",{className:"tm-absolute-fill tm-opacity-50",style:{background:"var(--tm-screensaver-gradient)"}}),s.jsxs("div",{style:{position:"relative",zIndex:10,textAlign:"center"},children:[s.jsx("h1",{className:"tm-text-hero",style:{fontVariantNumeric:"tabular-nums"},children:yt(e,"HH:mm")}),r.screensaver.showDate&&s.jsx("p",{className:"tm-title-xl",style:{marginTop:"1rem",opacity:.6},children:yt(e,"EEEE, d. MMMM",{locale:Kn})}),r.screensaver.showWeather&&a!=null&&s.jsxs("div",{className:"tm-flex-center tm-gap-4 tm-opacity-50",style:{marginTop:"2rem",fontSize:"1.25rem"},children:[s.jsxs("span",{children:[a,"°C"]}),s.jsx("span",{children:"•"}),s.jsx("span",{children:o})]})]})]})}function HN({children:e,onPageChange:t,activePageIndex:n,editMode:r=!1,pagesMeta:i=[],onOpenPageManage:a}){const o=b.Children.toArray(e),l=b.useRef(null),c=b.useRef(!1),u=b.useRef(!1),d=b.useRef(!1),m=b.useRef(0),[f,h]=b.useState(n??0),v=f,w=b.useCallback(()=>{const S=l.current;return!S||S.clientWidth===0?0:Math.max(0,Math.round(S.scrollLeft/S.clientWidth))},[]),x=b.useCallback(()=>{var E;if(window.clearTimeout(m.current),u.current||d.current||!c.current)return;c.current=!1,(E=l.current)==null||E.classList.remove("is-scrolling");const S=w();h(S),S!==n&&(t==null||t(S))},[n,t,w]),p=b.useCallback(()=>{var E;if(d.current)return;c.current=!0,(E=l.current)==null||E.classList.add("is-scrolling");const S=w();h(C=>C===S?C:S),!u.current&&(window.clearTimeout(m.current),m.current=window.setTimeout(x,420))},[w,x]),g=b.useCallback(()=>{u.current=!1,window.clearTimeout(m.current),m.current=window.setTimeout(x,420)},[x]),y=b.useCallback(S=>{var E;c.current=!1,u.current=!1,window.clearTimeout(m.current),(E=l.current)==null||E.classList.remove("is-scrolling"),h(S),t==null||t(S)},[t]);if(b.useEffect(()=>()=>window.clearTimeout(m.current),[]),b.useEffect(()=>{if(n==null||c.current||u.current)return;const S=l.current;if(!S||S.clientWidth===0)return;const E=n*S.clientWidth;if(h(n),Math.abs(S.scrollLeft-E)>16){d.current=!0,S.scrollTo({left:E,behavior:"smooth"});const C=window.setTimeout(()=>{d.current=!1},1500);return()=>window.clearTimeout(C)}d.current=!1},[n]),o.length<=1&&!r)return s.jsx("div",{className:"tm-page-pager-wrap",children:o[0]??null});const _=S=>{var E;return((E=i[S])==null?void 0:E.name)||`Seite ${S+1}`};return s.jsxs("div",{className:"tm-page-pager-wrap",children:[s.jsx("div",{ref:l,className:"tm-page-pager",onPointerDown:()=>{u.current=!0,d.current||(c.current=!0)},onPointerUp:g,onPointerCancel:g,onScroll:p,onScrollEnd:()=>{if(d.current){d.current=!1;return}u.current||x()},children:o.map((S,E)=>{var C;return s.jsx("div",{className:"tm-page",children:S},((C=i[E])==null?void 0:C.id)||E)})}),s.jsxs("div",{className:`tm-page-indicator${r?" tm-page-indicator--edit":""}`,children:[s.jsx("div",{className:"tm-page-indicator-track",role:"tablist","aria-label":"Seiten",children:o.map((S,E)=>{var C;return s.jsx("button",{type:"button",role:"tab","aria-selected":E===v,"aria-label":_(E),className:`${r?"tm-page-bar":"tm-page-dot"}${E===v?" active":""}`,onClick:()=>y(E)},((C=i[E])==null?void 0:C.id)||E)})}),r&&s.jsx("button",{type:"button",className:"tm-page-manage-trigger",onClick:a,"aria-label":"Seiten verwalten",children:s.jsx(eN,{size:20})})]})]})}let hn=null;function BN(e){if(e){hn=e;return}hn=null}function UN(e){(!e||hn===e)&&(hn=null)}function Mn(e){var r,i;const t=(r=e==null?void 0:e.getRootNode)==null?void 0:r.call(e);if(t instanceof ShadowRoot&&((i=t.host)==null||i.localName),hn!=null&&hn.isConnected)return hn;const n=document.querySelector("the-monitor-dashboard");return n!=null&&n.shadowRoot?n.shadowRoot:document.body}function ir(e){b.useEffect(()=>{var o;const t=Mn(),n=((o=t==null?void 0:t.querySelector)==null?void 0:o.call(t,".tm-page-pager"))||document.querySelector(".tm-page-pager"),r=document.body.style.overflow,i=document.body.style.touchAction,a=n==null?void 0:n.style.touchAction;return document.body.style.overflow="hidden",document.body.style.touchAction="none",n&&(n.style.touchAction="none"),()=>{document.body.style.overflow=r,document.body.style.touchAction=i,n&&(n.style.touchAction=a||"")}},[e])}function KN({pages:e,activePageIndex:t,onClose:n,onSelectPage:r,onAddPage:i,onRemovePage:a,onMovePage:o,onRenamePage:l}){ir(!0),b.useEffect(()=>{const d=m=>{m.key==="Escape"&&n()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[n]);const c=e.length<se.pages,u=e.length>1;return Pn.createPortal(s.jsxs("div",{className:"tm-page-manage-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-page-manage-backdrop",onClick:n,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-page-manage-panel",onClick:d=>d.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Seiten verwalten",children:[s.jsxs("div",{className:"tm-page-manage-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-page-manage-title",children:"Seiten verwalten"}),s.jsx("div",{className:"tm-page-manage-subtitle",children:"Reihenfolge ändern, umbenennen oder löschen"})]}),s.jsx("button",{type:"button",className:"tm-page-manage-close",onClick:n,"aria-label":"Schließen",children:s.jsx(Ue,{size:18})})]}),s.jsx("ul",{className:"tm-page-manage-list",children:e.map((d,m)=>s.jsxs("li",{className:`tm-page-manage-row${m===t?" active":""}`,children:[s.jsxs("button",{type:"button",className:"tm-page-manage-select",onClick:()=>r(m),"aria-current":m===t?"true":void 0,children:[s.jsx("span",{className:"tm-page-manage-index",children:m+1}),s.jsx("input",{type:"text",className:"tm-page-manage-name",value:d.name,onChange:f=>l(m,f.target.value),onClick:f=>f.stopPropagation(),"aria-label":`Name für Seite ${m+1}`})]}),s.jsxs("div",{className:"tm-page-manage-actions",children:[s.jsx("button",{type:"button",className:"tm-page-manage-action",onClick:()=>o(m,m-1),disabled:m===0,"aria-label":`Seite ${m+1} nach oben`,children:s.jsx(f0,{size:18})}),s.jsx("button",{type:"button",className:"tm-page-manage-action",onClick:()=>o(m,m+1),disabled:m===e.length-1,"aria-label":`Seite ${m+1} nach unten`,children:s.jsx(us,{size:18})}),s.jsx("button",{type:"button",className:"tm-page-manage-action tm-page-manage-action--danger",onClick:()=>a(m),disabled:!u,"aria-label":`Seite ${m+1} löschen`,children:s.jsx(S0,{size:16})})]})]},d.id))}),s.jsxs("button",{type:"button",className:"tm-page-manage-add",onClick:i,disabled:!c,children:[s.jsx(st,{size:18}),"Neue Seite"]}),!c&&s.jsxs("p",{className:"tm-page-manage-hint",children:["Maximal ",se.pages," Seiten."]})]})]}),Mn())}const qN={lightbulb:y0,thermometer:fN,shield:ds,lock:iN,music:sN,camera:Xr,shoppingcart:ms,clapperboard:YS,moon:b0,utensils:yN,dooropen:ra,fan:JS,power:k0,home:tN,sun:Yi,cloud:p0,cloudrain:fc,play:w0,pause:Qu,volume2:N0,bell:US,wifi:j0,settings:ia,user:gN,plus:st};function tf(e,t={}){const n=(e||"").toLowerCase().replace(/[^a-z]/g,""),r=qN[n]||y0;return s.jsx(r,{...t})}function VN(e){return{light:"lightbulb",switch:"power",climate:"thermometer",lock:"lock",alarm_control_panel:"shield",scene:"clapperboard",script:"clapperboard",media_player:"music",camera:"camera",todo:"shoppingcart",person:"user",cover:"dooropen",fan:"fan",weather:"cloudrain"}[e]||"home"}function YN(e){return typeof e=="string"&&e.includes(":")}function GN(e){return e!=null&&e.id?{entity_id:e.id,state:e.state,attributes:e.attributes||{}}:null}function nf({icon:e,size:t,style:n,className:r}){const i=b.useCallback(a=>{a&&(a.icon=e)},[e]);return s.jsx("ha-icon",{ref:i,className:r,style:{width:t,height:t,display:"inline-flex",alignItems:"center",justifyContent:"center",...n}})}function QN({hass:e,stateObj:t,size:n,style:r,className:i}){const a=b.useCallback(o=>{o&&(o.hass=e,o.stateObj=t)},[e,t]);return s.jsx("state-icon",{ref:a,className:i,style:{width:n,height:n,display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:0,...r}})}function Pt({hass:e,entity:t,overrideIcon:n="",size:r=24,style:i={},className:a=""}){var d,m;const o=b.useMemo(()=>GN(t),[t]),l=typeof customElements<"u"&&customElements.get("state-icon"),c=typeof customElements<"u"&&customElements.get("ha-icon");if(n)return YN(n)&&c?s.jsx(nf,{icon:n,size:r,style:i,className:a}):tf(n,{size:r,style:i,className:a});if(l&&e&&o&&((d=e.states)!=null&&d[o.entity_id]))return s.jsx(QN,{hass:e,stateObj:o,size:r,style:i,className:a});const u=(m=t==null?void 0:t.attributes)==null?void 0:m.icon;return u&&c?s.jsx(nf,{icon:u,size:r,style:i,className:a}):tf(VN(we(t==null?void 0:t.id)),{size:r,style:i,className:a})}const XN=[{id:"warm",label:"Warmweiß",rgb:[255,166,87]},{id:"neutral",label:"Neutralweiß",rgb:[255,244,229]},{id:"cool",label:"Kaltweiß",rgb:[207,226,255]},{id:"red",label:"Rot",rgb:[239,68,68]},{id:"orange",label:"Orange",rgb:[251,146,60]},{id:"green",label:"Grün",rgb:[74,222,128]},{id:"blue",label:"Blau",rgb:[96,165,250]},{id:"purple",label:"Violett",rgb:[192,132,252]}];function JN(e){return`rgb(${e[0]}, ${e[1]}, ${e[2]})`}function ZN(e,t){var a,o;const n=(a=e==null?void 0:e.states)==null?void 0:a[t];if(!n)return null;const{rgb_color:r,color_mode:i}=n.attributes||{};return Array.isArray(r)&&r.length>=3?r.slice(0,3):i==="color_temp"&&((o=n.attributes)!=null&&o.color_temp)?ej(n.attributes.color_temp):null}function ej(e){const t=e/100;let n,r,i;return t<=66?(n=255,r=Math.min(255,Math.max(0,99.4708025861*Math.log(t)-161.1195681661))):(n=Math.min(255,Math.max(0,329.698727446*(t-60)**-.1332047592)),r=Math.min(255,Math.max(0,288.1221695283*(t-60)**-.0755148492))),t>=66?i=255:t<=19?i=0:i=Math.min(255,Math.max(0,138.5177312231*Math.log(t-10)-305.0447927307)),[Math.round(n),Math.round(r),Math.round(i)]}function tj({activeRgb:e,onPick:t,className:n=""}){return s.jsx("div",{className:`tm-light-color-circles${n?` ${n}`:""}`,role:"group","aria-label":"Lichtfarbe wählen",children:XN.map(r=>{const i=e&&Math.abs(e[0]-r.rgb[0])<=18&&Math.abs(e[1]-r.rgb[1])<=18&&Math.abs(e[2]-r.rgb[2])<=18;return s.jsx("button",{type:"button",className:`tm-light-color-circle${i?" active":""}`,style:{"--tm-light-color":JN(r.rgb)},onClick:()=>t(r.rgb),"aria-label":r.label,title:r.label},r.id)})})}const rf={light:{bg:"transparent",icon:"#e4e4e7"},switch:{bg:"transparent",icon:"#e4e4e7"},climate:{bg:"transparent",icon:"#d4d4d8"},lock:{bg:"transparent",icon:"#d4d4d8"},alarm_control_panel:{bg:"transparent",icon:"#d4d4d8"},cover:{bg:"transparent",icon:"#d4d4d8"},default:{bg:"transparent",icon:"#e4e4e7"}},af={light:{bg:"rgba(234, 179, 8, 0.1)",icon:"#fef08a"},switch:{bg:"rgba(234, 179, 8, 0.1)",icon:"#fef08a"},climate:{bg:"rgba(239, 68, 68, 0.1)",icon:"#fecaca"},lock:{bg:"rgba(59, 130, 246, 0.1)",icon:"#bfdbfe"},alarm_control_panel:{bg:"rgba(16, 185, 129, 0.1)",icon:"#a7f3d0"},cover:{bg:"rgba(59, 130, 246, 0.1)",icon:"#bfdbfe"},default:{bg:"rgba(255,255,255,0.05)",icon:"rgba(255,255,255,0.5)"}};function M0(e,t,n){const r=wS(n),i=t||String(e);let a=0;for(let o=0;o<i.length;o+=1)a=i.charCodeAt(o)+((a<<5)-a);return r[Math.abs(a)%r.length]}function nj(e,t){if(Bu(t))return rf[e]||rf.default;if(rr(t))return{bg:"var(--tm-surface)",icon:"var(--tm-tile-fg)"};if(Uu(t)){const{accentRgb:n}=Hu(t);return{bg:`rgba(${n}, 0.22)`,icon:"#ffffff"}}return af[e]||af.default}function L0(e){return!["climate","sensor","binary_sensor"].includes(e)}function rj(e,t){var o;const n=e.filter(l=>l.active).length,r=e.length,i=t||(r===1?(o=e[0])==null?void 0:o.label:`${r} Geräte`);let a;return r===0?a="":n===0?a="Alle aus":n===r?a="Alle an":a=`${n} von ${r} an`,{label:i,sub:a,active:n>0,activeCount:n,total:r}}function ij({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){const{config:a}=Ee();if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-quick-action tm-brightness-action empty",onClick:r,children:[s.jsx(Yi,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Licht konfigurieren"})]});const o=n(e.entity_id),l=e.label||o.name,u=we(e.entity_id)==="light",d=$x(t,e.entity_id),m=o.state==="on",f=u?ZN(t,e.entity_id):null,[h,v]=b.useState(d),[w,x]=b.useState(!1),p=b.useRef(!1),g=b.useRef(null);b.useEffect(()=>{p.current||v(d)},[d]);const y=()=>{p.current=!1,x(!1)},_=j=>{var I;const M=(I=g.current)==null?void 0:I.getBoundingClientRect();if(!M)return;const T=Math.min(100,Math.max(0,Math.round((M.bottom-j)/M.height*100)));v(T),Ix(t,e.entity_id,T)},S=j=>{var M;i||((M=g.current)==null||M.setPointerCapture(j.pointerId),p.current=!0,x(!0),_(j.clientY))},E=j=>{p.current&&_(j.clientY)},C=j=>{i||Rx(t,e.entity_id,j)};return s.jsxs("div",{ref:g,className:`tm-quick-action tm-brightness-action${m?" active":""}${w?" dragging":""}${u?" tm-brightness-action--light":""}`,style:{"--tm-brightness":`${h}%`},onPointerDown:S,onPointerMove:E,onPointerUp:y,onPointerCancel:y,role:"slider","aria-label":`Helligkeit ${l}`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":h,tabIndex:0,children:[s.jsx("div",{className:"tm-brightness-fill"}),s.jsxs("div",{className:"tm-brightness-header",children:[s.jsx(Pt,{hass:t,entity:o,overrideIcon:e.icon,size:22,style:{opacity:.9,color:rr(a.appearance)?"var(--tm-tile-fg)":"#fef08a"}}),s.jsxs("div",{className:"tm-flex-col",style:{minWidth:0,flex:1},children:[s.jsx("div",{className:"tm-font-bold",style:{fontSize:"1rem",lineHeight:1.25,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l}),s.jsxs("div",{className:"tm-text-xs tm-opacity-70",children:[h,"%"]})]})]}),u&&s.jsx("div",{className:"tm-brightness-colors",onPointerDown:j=>j.stopPropagation(),onPointerMove:j=>j.stopPropagation(),children:s.jsx(tj,{activeRgb:f,onPick:C})})]})}function aj({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){const{config:a}=Ee(),o=a.appearance;if(e.mode==="brightness")return s.jsx(ij,{widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i});if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-quick-action empty",onClick:r,children:[s.jsx(st,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Konfigurieren"})]});const l=n(e.entity_id),c=we(e.entity_id),u=Zo(l.state,c),d=nj(c,o),m=e.label||l.name,f=gu(t,e.entity_id),h=L0(c),v=()=>{i||!h||yu(t,e.entity_id)},w=u?Bu(o)?{background:"rgba(255, 255, 255, 0.15)",color:"#ffffff"}:rr(o)?{background:"var(--tm-surface)",color:"var(--tm-tile-fg)",boxShadow:"inset 0 0 0 2.5px var(--tm-tile-fg)"}:Uu(o)?{background:`rgba(${Hu(o).accentRgb}, 0.45)`,color:"#ffffff"}:{background:"rgba(234, 179, 8, 0.2)",color:"#fef08a"}:{background:d.bg};return s.jsxs("button",{type:"button",className:`tm-quick-action${u?" active":""}`,style:{...w,cursor:h&&!i?"pointer":"default"},onClick:v,children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{width:"100%"},children:[s.jsx(Pt,{hass:t,entity:l,overrideIcon:e.icon,size:24,style:u?{}:{opacity:.7,color:d.icon}}),u&&s.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"currentColor"}})]}),s.jsxs("div",{className:"tm-flex-col",style:{marginTop:"auto"},children:[s.jsx("div",{className:"tm-font-bold",style:{fontSize:"1.125rem",lineHeight:1.25},children:m}),s.jsx("div",{className:"tm-text-xs tm-opacity-70",style:{marginTop:"0.25rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:f})]})]})}function oj(e){return e!=="disarmed"&&e!=="unavailable"}function sj(e){return e==="triggered"||e==="triggering"||e==="pending"}function lj({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-alarm-widget empty",onClick:r,children:[s.jsx(ds,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Alarm konfigurieren"})]});const a=n(e.entity_id),{state:o}=a,l=oj(o),c=sj(o),u=e.label||a.name,d=gu(t,e.entity_id),m=()=>{i||yu(t,e.entity_id)};return s.jsxs("button",{type:"button",className:`tm-alarm-widget${l?" armed":""}${c?" triggered":""}`,onClick:m,"aria-label":`${u}: ${d}`,children:[s.jsxs("div",{className:"tm-alarm-widget-top",children:[s.jsx(Pt,{hass:t,entity:a,overrideIcon:e.icon||"mdi:shield-home",size:26,className:"tm-alarm-widget-icon"}),l&&s.jsx("span",{className:"tm-alarm-widget-dot","aria-hidden":!0})]}),s.jsxs("div",{className:"tm-alarm-widget-body",children:[s.jsx("div",{className:"tm-alarm-widget-label",children:u}),s.jsx("div",{className:"tm-alarm-widget-state",children:d})]})]})}function cj({widget:e,widgetIndex:t,hass:n,getEntity:r,onConfigure:i,editMode:a}){const{config:o}=Ee();if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-scene-btn empty",onClick:i,children:[s.jsx(st,{size:20}),s.jsx("span",{className:"tm-text-sm",children:"Szene"})]});const l=r(e.entity_id),c=e.label||l.name,u=M0(t,e.entity_id,o.appearance),d=()=>{a||Jh(n,e.entity_id)},m=rr(o.appearance);return s.jsxs("button",{type:"button",className:"tm-scene-btn",onClick:d,children:[s.jsx("div",{className:"tm-scene-gradient",style:{background:u,opacity:m?1:void 0}}),s.jsx("div",{className:"tm-scene-icon",children:s.jsx(Pt,{hass:n,entity:l,overrideIcon:e.icon,size:18,style:{color:m?"currentColor":"white"}})}),s.jsx("div",{className:"tm-scene-label",children:c})]})}function of({variant:e,summary:t,gradient:n,active:r,slot:i,primaryEntity:a,entityCount:o,hass:l,onClick:c,appearance:u}){const d=rr(u);return s.jsxs("button",{type:"button",className:`tm-scene-btn tm-qa-scene-trigger${r?" active":""}${d&&r?" tm-scene-btn--pastel-active":""}`,onClick:c,"aria-label":`${t.label} ${t.sub}`,children:[s.jsx("div",{className:"tm-scene-gradient",style:{background:r?d?n:"linear-gradient(135deg, rgba(234, 179, 8, 0.55), rgba(180, 130, 0, 0.35))":n,opacity:d||r?1:.55}}),e==="status"?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"tm-scene-icon",children:s.jsx("span",{className:"tm-qa-scene-state",children:t.sub})}),s.jsx("div",{className:"tm-scene-label",children:r?"An":"Aus"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tm-scene-icon tm-qa-scene-icon-wrap",children:[s.jsx(Pt,{hass:l,entity:a,overrideIcon:i.icon||(o>1?"mdi:layers":""),size:18,style:{color:d?"currentColor":"white"}}),o>1&&s.jsx("span",{className:"tm-qa-entity-count",children:o})]}),s.jsx("div",{className:"tm-scene-label",children:t.label})]})]})}function uj({widget:e,widgetIndex:t,hass:n,getEntity:r,onConfigure:i,onOpen:a,editMode:o}){var v;const{config:l}=Ee(),c=q_(e);if(c.length===0)return s.jsxs("button",{type:"button",className:"tm-scene-btn empty",onClick:i,children:[s.jsx(st,{size:20}),s.jsx("span",{className:"tm-text-sm",children:"Entitäten konfigurieren"})]});const u=c.map(w=>{const x=r(w),p=we(w);return{entityId:w,entity:x,domain:p,active:Zo(x.state,p),label:x.name,sub:gu(n,w),actionable:L0(p)}}),d=rj(u,e.label),m=M0(t,c[0],l.appearance),f=(v=u[0])==null?void 0:v.entity,h=()=>{if(o){i==null||i();return}a==null||a({slot:e,entities:u,summary:d,index:t,gradient:m})};return s.jsxs("div",{className:"tm-popup-widget-stack",children:[s.jsx(of,{variant:"icon",summary:d,gradient:m,active:d.active,slot:e,primaryEntity:f,entityCount:c.length,hass:n,onClick:h,appearance:l.appearance}),s.jsx(of,{variant:"status",summary:d,gradient:m,active:d.active,slot:e,primaryEntity:f,entityCount:c.length,hass:n,onClick:h,appearance:l.appearance})]})}function dj({item:e,hass:t,onToggle:n}){return s.jsxs("div",{className:`tm-qa-popup-entity${e.active?" active":""}${e.disabled?" disabled":""}`,children:[s.jsx(Pt,{hass:t,entity:e.entity,size:18,style:{color:e.active?"#fef08a":"rgba(255,255,255,0.7)"}}),s.jsxs("div",{className:"tm-qa-popup-entity-text",children:[s.jsx("span",{className:"tm-qa-popup-entity-name",children:e.label}),s.jsx("span",{className:"tm-qa-popup-entity-state",children:e.sub})]}),e.actionable?s.jsx("button",{type:"button",className:"tm-qa-popup-entity-toggle",onClick:()=>n(e.entityId),children:e.active?"Aus":"An"}):s.jsx("span",{className:"tm-qa-popup-entity-readonly","aria-hidden":!0})]})}function mj({data:e,hass:t,onClose:n}){var f;const{slot:r,entities:i,summary:a,gradient:o}=e,l=i.filter(h=>h.actionable),c=l.length>0&&l.every(h=>h.active),u=(f=i[0])==null?void 0:f.entity;ir(!0),b.useEffect(()=>{const h=v=>{v.key==="Escape"&&n()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[n]);const d=h=>{yu(t,h)},m=()=>{const h=c?Xh:Qh;l.forEach(v=>h(t,v.entityId))};return Pn.createPortal(s.jsxs("div",{className:"tm-qa-popup-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-qa-popup-backdrop",onClick:n,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-qa-popup-panel tm-qa-popup-panel--multi",onClick:h=>h.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":a.label,children:[s.jsx("div",{className:"tm-scene-gradient",style:{background:a.active?"linear-gradient(135deg, rgba(234, 179, 8, 0.55), rgba(180, 130, 0, 0.35))":o,opacity:.45}}),s.jsx("button",{type:"button",className:"tm-qa-popup-close",onClick:n,"aria-label":"Schließen",children:s.jsx(Ue,{size:16})}),s.jsxs("div",{className:"tm-qa-popup-header",children:[s.jsx("div",{className:"tm-scene-icon tm-qa-popup-header-icon",children:s.jsx(Pt,{hass:t,entity:u,overrideIcon:r.icon||(i.length>1?"mdi:layers":""),size:22,style:{color:"white"}})}),s.jsxs("div",{className:"tm-qa-popup-header-text",children:[s.jsx("div",{className:"tm-scene-label",children:a.label}),s.jsx("div",{className:"tm-qa-popup-state",children:a.sub})]})]}),s.jsx("div",{className:"tm-qa-popup-entities",children:i.map(h=>s.jsx(dj,{item:h,hass:t,onToggle:d},h.entityId))}),l.length>1&&s.jsx("button",{type:"button",className:"tm-qa-popup-toggle",onClick:m,children:c?"Alle ausschalten":"Alle einschalten"})]})]}),Mn())}function z0({entityId:e,label:t,entity:n,hass:r,overrideIcon:i,editMode:a,variant:o="group"}){const l=bu(r,e),[c,u]=b.useState(l),[d,m]=b.useState(!1),f=b.useRef(!1),h=b.useRef(null);b.useEffect(()=>{f.current||u(l)},[l]);const v=()=>{f.current=!1,m(!1)},w=g=>{var S;const y=(S=h.current)==null?void 0:S.getBoundingClientRect();if(!y)return;const _=Math.min(100,Math.max(0,Math.round((y.bottom-g)/y.height*100)));u(_),Ql(r,e,_)},x=g=>{var y;a||((y=h.current)==null||y.setPointerCapture(g.pointerId),f.current=!0,m(!0),w(g.clientY))},p=g=>{f.current&&w(g.clientY)};return o==="row"?s.jsxs("div",{className:`tm-cover-popup-entity${c>0?" active":""}`,children:[s.jsx(Pt,{hass:r,entity:n,size:18,style:{color:c>0?"#bfdbfe":"rgba(255,255,255,0.7)"}}),s.jsxs("div",{className:"tm-cover-popup-entity-text",children:[s.jsx("span",{className:"tm-cover-popup-entity-name",children:t}),s.jsxs("span",{className:"tm-cover-popup-entity-state",children:[c,"%"]})]}),s.jsx("input",{type:"range",className:"tm-cover-popup-slider",min:0,max:100,value:c,disabled:a,onChange:g=>{const y=Number(g.target.value);u(y),Ql(r,e,y)},"aria-label":`Position ${t}`})]}):s.jsxs("div",{ref:h,className:`tm-quick-action tm-cover-action tm-cover-action--group${c>0?" active":""}${d?" dragging":""}`,style:{"--tm-cover-position":`${c}%`},onPointerDown:x,onPointerMove:p,onPointerUp:v,onPointerCancel:v,role:"slider","aria-label":`Position ${t}`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":c,tabIndex:a?-1:0,children:[s.jsx("div",{className:"tm-cover-fill"}),s.jsxs("div",{className:"tm-cover-header",children:[s.jsx(Pt,{hass:r,entity:n,overrideIcon:i,size:20,style:{opacity:.9,color:"#bfdbfe"}}),s.jsxs("div",{className:"tm-flex-col",style:{minWidth:0,flex:1},children:[s.jsx("div",{className:"tm-font-bold tm-cover-group-label",children:t}),s.jsxs("div",{className:"tm-text-xs tm-opacity-70",children:[c,"%"]})]})]})]})}function fj(e,t){return e==="opening"?"Öffnet …":e==="closing"?"Schließt …":e==="unavailable"||e==="unknown"?"Nicht verfügbar":t>0?"Geöffnet":"Geschlossen"}function pj({entityId:e,label:t,entity:n,hass:r,editMode:i}){const a=bu(r,e),[o,l]=b.useState(a),[c,u]=b.useState(!1),d=b.useRef(!1),m=b.useRef(null),f=xx(r,e);b.useEffect(()=>{d.current||l(a)},[a]);const h=g=>{var S;const y=(S=m.current)==null?void 0:S.getBoundingClientRect();if(!y)return o;const _=(g-y.top)/y.height;return Math.min(100,Math.max(0,Math.round((1-_)*100)))},v=g=>{i||(g.stopPropagation(),g.currentTarget.setPointerCapture(g.pointerId),d.current=!0,u(!0),l(h(g.clientY)))},w=g=>{d.current&&l(h(g.clientY))},x=g=>{if(!d.current)return;d.current=!1,u(!1);const y=h(g.clientY);l(y),Ql(r,e,y)},p=fj(n.state,o);return s.jsxs("div",{className:`tm-quick-action tm-cover-card${c?" dragging":""}`,children:[s.jsxs("div",{className:"tm-cover-card-main",children:[s.jsxs("div",{className:"tm-cover-card-info",children:[s.jsx("div",{className:"tm-cover-card-title",children:t}),f&&s.jsx("div",{className:"tm-cover-card-area",children:f}),s.jsxs("div",{className:"tm-cover-card-value",children:[o,s.jsx("span",{className:"tm-cover-card-unit",children:"%"})]}),s.jsx("div",{className:"tm-cover-card-status",children:p})]}),s.jsxs("div",{className:"tm-cover-visual",onPointerDown:v,onPointerMove:w,onPointerUp:x,onPointerCancel:x,role:"slider","aria-label":`Position ${t}`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":o,tabIndex:i?-1:0,children:[s.jsx("div",{className:"tm-cover-visual-box"}),s.jsxs("div",{ref:m,className:"tm-cover-visual-window",children:[s.jsx("div",{className:"tm-cover-visual-view"}),s.jsx("div",{className:"tm-cover-visual-slats",style:{height:`${100-o}%`}})]})]})]}),s.jsxs("div",{className:"tm-cover-card-controls",children:[s.jsx("button",{type:"button",className:"tm-cover-card-btn",disabled:i,onClick:()=>Zh(r,e),"aria-label":`${t} öffnen`,children:s.jsx(f0,{size:22,strokeWidth:2.25})}),s.jsx("button",{type:"button",className:"tm-cover-card-btn tm-cover-card-btn--stop",disabled:i,onClick:()=>Vx(r,e),"aria-label":`${t} stoppen`,children:s.jsx(Qu,{size:22,strokeWidth:2.5})}),s.jsx("button",{type:"button",className:"tm-cover-card-btn",disabled:i,onClick:()=>vu(r,e),"aria-label":`${t} schließen`,children:s.jsx(us,{size:22,strokeWidth:2.25})})]})]})}function hj({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){if(!e.entity_id)return s.jsxs("button",{type:"button",className:"tm-quick-action tm-cover-action empty",onClick:r,children:[s.jsx(Ur,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Rolladen konfigurieren"})]});const a=n(e.entity_id),o=e.label||a.name;return s.jsx(pj,{entityId:e.entity_id,label:o,entity:a,hass:t,editMode:i})}function gj({widget:e,hass:t,getEntity:n,onConfigure:r,editMode:i}){const a=e.entity_ids||[];return a.length===0?s.jsxs("button",{type:"button",className:"tm-quick-action tm-cover-action empty",onClick:r,children:[s.jsx(Ur,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Rolladen-Gruppe"})]}):s.jsx("div",{className:`tm-cover-group${i?" tm-cover-group--edit":""}`,onClick:i?r:void 0,onKeyDown:i?o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),r==null||r())}:void 0,role:i?"button":void 0,tabIndex:i?0:void 0,children:a.map(o=>{const l=n(o),c=l.name;return s.jsx(z0,{entityId:o,label:c,entity:l,hass:t,overrideIcon:e.icon||"mdi:window-shutter",editMode:i,variant:"group"},o)})})}function yj({data:e,hass:t,getEntity:n,onClose:r}){var h;const{slot:i,entityIds:a,summary:o,gradient:l}=e,c=a.map(v=>{const w=n(v);return{entityId:v,entity:w,label:w.name,position:bu(t,v)}}),u=c.length>0&&c.every(v=>v.position>=100),d=(h=c[0])==null?void 0:h.entity;ir(!0),b.useEffect(()=>{const v=w=>{w.key==="Escape"&&r()};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[r]);const m=()=>{c.forEach(v=>Zh(t,v.entityId))},f=()=>{c.forEach(v=>vu(t,v.entityId))};return Pn.createPortal(s.jsxs("div",{className:"tm-qa-popup-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-qa-popup-backdrop",onClick:r,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-qa-popup-panel tm-qa-popup-panel--multi tm-cover-popup-panel",onClick:v=>v.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":o.label,children:[s.jsx("div",{className:"tm-scene-gradient",style:{background:o.active?"linear-gradient(135deg, rgba(59, 130, 246, 0.55), rgba(37, 99, 235, 0.35))":l,opacity:.45}}),s.jsx("button",{type:"button",className:"tm-qa-popup-close",onClick:r,"aria-label":"Schließen",children:s.jsx(Ue,{size:16})}),s.jsxs("div",{className:"tm-qa-popup-header",children:[s.jsx("div",{className:"tm-scene-icon tm-qa-popup-header-icon",children:s.jsx(Pt,{hass:t,entity:d,overrideIcon:i.icon||(c.length>1?"mdi:window-shutter-open":"mdi:window-shutter"),size:22,style:{color:"white"}})}),s.jsxs("div",{className:"tm-qa-popup-header-text",children:[s.jsx("div",{className:"tm-scene-label",children:o.label}),s.jsx("div",{className:"tm-qa-popup-state",children:o.sub})]})]}),s.jsx("div",{className:"tm-cover-popup-entities",children:c.map(v=>s.jsx(z0,{entityId:v.entityId,label:v.label,entity:v.entity,hass:t,variant:"row"},v.entityId))}),c.length>1&&s.jsx("button",{type:"button",className:"tm-qa-popup-toggle tm-cover-popup-toggle",onClick:u?f:m,children:u?"Alle schließen":"Alle öffnen"})]})]}),Mn())}function sf(e){var t,n,r;return((t=e==null?void 0:e.attributes)==null?void 0:t.hourly_forecast)||((n=e==null?void 0:e.attributes)==null?void 0:n.forecast_hourly)||((r=e==null?void 0:e.attributes)==null?void 0:r.hourly)||null}function vj(e,t,n){var a;const[r,i]=b.useState(()=>sf(n));return b.useEffect(()=>{i(sf(n))},[n]),b.useEffect(()=>{var c;if(!t||!n||!((c=e==null?void 0:e.connection)!=null&&c.subscribeMessage)||!jN(n))return;let o=!0,l=()=>{};return e.connection.subscribeMessage(u=>{var d;!o||!((d=u==null?void 0:u.forecast)!=null&&d.length)||i(u.forecast)},{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:t}).then(u=>{if(!o){u();return}l=u}).catch(()=>{}),()=>{o=!1,l()}},[e,t,n==null?void 0:n.id,(a=n==null?void 0:n.attributes)==null?void 0:a.supported_features]),r}const lf=1e3,bj=.2,xj=2e3;function wj(e,t){const n=e.currentTime;Number.isFinite(t.duration)&&t.duration>0?t.currentTime=n%t.duration:t.currentTime=n}function O0({condition:e,meta:t,hass:n,flat:r=!1}){const i=r?null:bN(n,e),a=b.useRef(null),o=b.useRef(null),[l,c]=b.useState("fast");return b.useEffect(()=>{c("fast");const u=a.current,d=o.current;if(u&&(u.playbackRate=1,u.play().catch(()=>{})),d&&(d.playbackRate=bj,d.pause(),d.currentTime=0),!i)return;let m=!1;const f=()=>{if(m)return;const w=a.current,x=o.current;!w||!x||(w.pause(),wj(w,x),x.play().catch(()=>{}),c("blending"))},h=window.setTimeout(()=>{const w=o.current;w&&(w.readyState>=1?f():w.addEventListener("loadedmetadata",f,{once:!0}))},lf),v=window.setTimeout(()=>{m||c("slow")},lf+xj);return()=>{m=!0,window.clearTimeout(h),window.clearTimeout(v)}},[i]),s.jsxs(s.Fragment,{children:[i&&s.jsxs("div",{className:`tm-weather-bg tm-weather-video-stack${l!=="fast"?` is-${l}`:""}`,children:[s.jsx("video",{ref:o,className:"tm-weather-video tm-weather-video-slow",src:i,loop:!0,muted:!0,playsInline:!0,preload:"metadata","aria-hidden":!0}),s.jsx("video",{ref:a,className:"tm-weather-video tm-weather-video-fast",src:i,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata","aria-hidden":!0})]}),s.jsx("div",{className:"tm-weather-bg",style:{background:t.gradient,opacity:i?.45:1}}),!r&&s.jsx("div",{className:"tm-weather-bg",style:{background:"linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)"}})]})}function kj({onConfigure:e}){return s.jsx("button",{type:"button",className:"tm-card tm-weather-widget empty",onClick:e,style:{cursor:e?"pointer":"default"},children:s.jsx("div",{className:"tm-weather-content",children:s.jsxs("div",{className:"tm-placeholder-widget",children:[s.jsx(ia,{size:32}),s.jsx("span",{className:"tm-text-sm",children:"Wetter konfigurieren"})]})})})}function pc({slots:e,compact:t=!1,className:n=""}){return s.jsx("div",{className:`${t?"tm-weather-day-strip":"tm-weather-hourly"}${n?` ${n}`:""}`,children:e.map(r=>s.jsxs("div",{className:`${t?"tm-weather-slot":"tm-weather-hourly-slot"}${r.label==="Jetzt"?" now":""}`,children:[s.jsx("span",{className:"tm-weather-slot-time",children:r.label}),Ju(r.condition,{size:t?14:22,strokeWidth:1.75}),s.jsxs("span",{className:"tm-weather-slot-temp",children:[r.temp,"°"]})]},r.datetime||`${r.label}-${r.hour}`))})}function _j({forecast:e}){if(!e.length)return null;const t=e.flatMap(a=>[a.high,a.low]).filter(a=>a!=null),n=Math.min(...t),r=Math.max(...t),i=r-n||1;return s.jsxs("div",{children:[s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{marginBottom:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},children:"10-Tage-Vorschau"}),s.jsx("div",{className:"tm-weather-daily-list",children:e.slice(0,10).map((a,o)=>{const l=a.datetime?Ki(a.datetime):null,c=l?Pb(l)?"Heute":yt(l,"EEE",{locale:Kn}):`Tag ${o+1}`,u=((a.low??n)-n)/i*100,d=((a.high??r)-(a.low??n))/i*100;return s.jsxs("div",{className:"tm-weather-daily-row",children:[s.jsx("span",{className:"tm-weather-daily-day",children:c}),s.jsx("div",{className:"tm-weather-daily-bar",children:s.jsx("div",{className:"tm-weather-daily-bar-fill",style:{left:`${u}%`,width:`${Math.max(d,8)}%`}})}),Ju(a.condition,{size:20,strokeWidth:1.75}),s.jsx("span",{className:"tm-weather-daily-temp",children:a.low!=null?`${Math.round(a.low)}°`:"—"}),s.jsx("span",{className:"tm-weather-daily-temp high",children:a.high!=null?`${Math.round(a.high)}°`:"—"})]},a.datetime||o)})})]})}function Sj({data:e,onClose:t,hass:n,appearance:r}){var a;const i=fs(e.condition,new Date().getHours(),r);return s.jsxs("div",{className:"tm-weather-overlay",onClick:t,children:[s.jsx("div",{className:"tm-weather-overlay-backdrop"}),s.jsxs("div",{className:"tm-weather-expanded",onClick:o=>o.stopPropagation(),role:"dialog","aria-label":"Wetterdetails",children:[s.jsxs("div",{className:"tm-weather-expanded-header",children:[s.jsx(O0,{condition:e.condition,meta:i,hass:n}),s.jsx("button",{type:"button",className:"tm-weather-expanded-close",onClick:t,"aria-label":"Schließen",children:s.jsx(Ue,{size:18})}),s.jsx("div",{className:"tm-weather-location",children:e.name}),s.jsxs("div",{className:"tm-weather-expanded-temp",children:[e.temp!=null?Math.round(e.temp):"—","°"]}),s.jsx("div",{className:"tm-weather-condition",children:i.label}),e.today&&s.jsxs("div",{className:"tm-weather-hilo",children:["H:",e.today.high!=null?Math.round(e.today.high):"—","° · L:",e.today.low!=null?Math.round(e.today.low):"—","°"]})]}),s.jsxs("div",{className:"tm-weather-expanded-body",children:[s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{marginBottom:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},children:"Heute"}),s.jsx(pc,{slots:e.dayPreview}),s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{marginTop:"1.5rem",marginBottom:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},children:"Nächste Stunden"}),s.jsx(pc,{slots:e.hourlyPreview.slice(0,8)}),s.jsxs("div",{className:"tm-weather-stats",children:[s.jsx(Ea,{label:"Luftfeuchtigkeit",value:e.humidity!=null?`${e.humidity}%`:"—",icon:Zm}),s.jsx(Ea,{label:"Wind",value:e.windSpeed!=null?`${e.windSpeed} km/h`:"—",icon:C0}),s.jsx(Ea,{label:"Luftdruck",value:e.pressure!=null?`${e.pressure} hPa`:"—",icon:Yu}),s.jsx(Ea,{label:"Niederschlag",value:((a=e.today)==null?void 0:a.precipitation)!=null?`${e.today.precipitation}%`:"—",icon:Zm})]}),s.jsx(_j,{forecast:e.forecast})]})]})]})}function Ea({label:e,value:t,icon:n}){return s.jsxs("div",{className:"tm-weather-stat",children:[s.jsx("span",{className:"tm-weather-stat-label",children:e}),s.jsxs("span",{className:"tm-weather-stat-value tm-flex-center tm-gap-2",style:{justifyContent:"flex-start"},children:[s.jsx(n,{size:16,style:{opacity:.6}}),t]})]})}function Nj({entityId:e,compact:t=!1,onConfigure:n,editMode:r=!1}){var x,p;const[i,a]=b.useState(!1),{hass:o,getEntity:l,revision:c}=et(),{config:u}=Ee(),d=e||((x=u.weather)==null?void 0:x.entity_id)||"",m=d?l(d):null,f=vj(o,d,m),h=b.useMemo(()=>m?PN(m,f):null,[m,f,c]);if(!d||!h)return s.jsx(kj,{onConfigure:n});const v=fs(h.condition,new Date().getHours(),u.appearance),w=((p=u.appearance)==null?void 0:p.mode)==="blackColorful";return s.jsxs(s.Fragment,{children:[s.jsxs("button",{type:"button",className:`tm-card tm-weather-widget${t?" tm-weather-compact":""}${w?" tm-weather-widget--pastel":""}`,onClick:()=>{if(r){n==null||n();return}a(!0)},"aria-label":"Wetterdetails öffnen",children:[s.jsx(O0,{condition:h.condition,meta:v,hass:o,flat:w}),s.jsxs("div",{className:"tm-weather-content",children:[s.jsxs("div",{className:"tm-weather-main",children:[s.jsx("div",{className:"tm-weather-location",children:h.name}),s.jsxs("div",{className:"tm-weather-temp-xl",children:[h.temp!=null?Math.round(h.temp):"—","°"]}),s.jsx("div",{className:"tm-weather-condition",children:v.label}),h.today&&s.jsxs("div",{className:"tm-weather-hilo",children:["H:",h.today.high!=null?Math.round(h.today.high):"—","° · L:",h.today.low!=null?Math.round(h.today.low):"—","°"]})]}),s.jsx(pc,{slots:h.hourlyPreview.slice(0,6),compact:!0,className:"tm-weather-hourly-preview"})]})]}),i&&s.jsx(Sj,{data:h,onClose:()=>a(!1),hass:o,appearance:u.appearance})]})}const jj="/the-monitor.png";function Cj(e,t){const n=e.media_position,r=e.media_duration;return typeof n=="number"&&typeof r=="number"&&r>0?Math.min(100,Math.max(0,n/r*100)):t?78:0}function Ej(e){return e.device_manufacturer||e.app_name||e.source||""}function Tj({compact:e=!1,entityId:t,onConfigure:n}){var S;const{hass:r,getEntity:i}=et(),{config:a}=Ee(),o=t||((S=a.mediaPlayer)==null?void 0:S.entity_id);if(!o)return s.jsx("button",{type:"button",className:`tm-card tm-media-widget empty${e?" tm-media-widget--compact":""}`,onClick:n,children:s.jsxs("div",{className:"tm-placeholder-widget",children:[s.jsx(ia,{size:e?24:32}),s.jsx("span",{className:"tm-text-sm",children:"Medienplayer konfigurieren"})]})});const l=i(o),{attributes:c,state:u}=l,d=u==="playing",m=u!=="off"&&u!=="unavailable",f=c.media_title||c.media_content_id||"Keine Wiedergabe",h=c.media_artist||"",v=Yr(r,c.entity_picture),w=Cj(c,d),x=Ej(c),p=()=>Dx(r,o),g=()=>Fx(r,o),y=()=>Wx(r,o),_=()=>{u==="off"?Qh(r,o):Xh(r,o)};return s.jsx("div",{className:`tm-media-widget${e?" tm-media-widget--compact":""}`,children:s.jsxs("div",{className:"tm-card tm-media-card",children:[s.jsxs("div",{className:"tm-media-header",children:[s.jsxs("div",{className:"tm-media-header-text",children:[s.jsx("div",{className:"tm-media-device-name",children:l.name}),x&&s.jsx("div",{className:"tm-media-device-brand",children:x})]}),s.jsx("button",{type:"button",className:`tm-media-power-btn${m?" on":""}`,onClick:_,"aria-label":m?"Ausschalten":"Einschalten",children:s.jsx(k0,{size:16,strokeWidth:2})})]}),s.jsxs("div",{className:"tm-media-body",children:[s.jsxs("div",{className:"tm-media-panel",children:[s.jsxs("div",{className:"tm-media-track",children:[s.jsx("div",{className:"tm-media-artwork",style:v?{backgroundImage:`url("${v}")`}:void 0,"aria-hidden":!0}),s.jsxs("div",{className:"tm-media-track-meta",children:[s.jsx("div",{className:"tm-media-track-title",children:f}),h&&s.jsx("div",{className:"tm-media-track-artist",children:h})]})]}),s.jsxs("div",{className:"tm-media-controls",children:[s.jsx("button",{type:"button",onClick:y,className:"tm-media-control-btn","aria-label":"Zurück",children:s.jsx(dN,{size:e?16:18})}),s.jsx("button",{type:"button",onClick:p,className:"tm-media-control-btn tm-media-control-play","aria-label":d?"Pause":"Abspielen",children:d?s.jsxs("div",{className:"tm-media-pause-bars",children:[s.jsx("span",{}),s.jsx("span",{})]}):s.jsx(w0,{size:e?16:18,style:{marginLeft:"2px",fill:"currentColor"}})}),s.jsx("button",{type:"button",onClick:g,className:"tm-media-control-btn","aria-label":"Weiter",children:s.jsx(mN,{size:e?16:18})})]}),s.jsx("div",{className:"tm-media-progress","aria-hidden":!0,children:s.jsxs("div",{className:"tm-media-progress-track",children:[s.jsx("div",{className:"tm-media-progress-fill",style:{width:`${w}%`}}),s.jsx("div",{className:"tm-media-progress-thumb",style:{left:`${w}%`}})]})})]}),s.jsx("div",{className:"tm-media-device-wrap",children:s.jsx("img",{src:jj,alt:"",className:"tm-media-device-img"})})]})]})})}const Pj=15e3;function Aj({hass:e,entity:t,className:n,fitMode:r="cover"}){const i=b.useRef(null),a=b.useMemo(()=>({entity_id:t.id,state:t.state,attributes:t.attributes}),[t.id,t.state,t.attributes]);return b.useEffect(()=>{const o=i.current;o&&(o.hass=e,o.stateObj=a,o.fitMode=r,o.muted=!0)},[e,a,r]),s.jsx("ha-camera-stream",{ref:i,className:n,muted:!0})}function Mj(e,t,n,{isMock:r,isConnected:i}){var g;const[a,o]=b.useState(0),[l,c]=b.useState(!1),u=typeof customElements<"u"&&customElements.get("ha-camera-stream"),d=!!(t&&Gx(e,t)),m=!!(u&&i&&!r&&t&&((g=e==null?void 0:e.states)!=null&&g[t])),f=d&&i&&!r&&!m?Qx(e,t):null,h=!!(f&&!l),v=!!(i&&!r&&t&&!l&&!m&&!h),w=v?pm(e,t,{cacheBust:a}):r&&t?pm(e,t,{cacheBust:a}):null,x=m||h,p=!!(m||h||w);return b.useEffect(()=>{c(!1),o(0)},[t]),b.useEffect(()=>{if(!v)return;const y=setInterval(()=>o(_=>_+1),Pj);return()=>clearInterval(y)},[v]),{tick:a,failed:l,setFailed:c,useHaStream:m,useMjpegStream:h,useSnapshotFallback:v,streamUrl:f,snapshotSrc:w,isLive:x,hasFeed:p}}function $0({hass:e,entity:t,entityId:n,isMock:r,isConnected:i,feed:a,fitMode:o="cover",streamClassName:l="tm-camera-stream",imageClassName:c="tm-camera-feed"}){const{tick:u,failed:d,setFailed:m,useHaStream:f,useMjpegStream:h,streamUrl:v,snapshotSrc:w}=a;return f?s.jsx(Aj,{hass:e,entity:t,className:l,fitMode:o}):h?s.jsx("img",{src:v,className:c,alt:(t==null?void 0:t.name)||"Kamera",decoding:"async",onError:()=>m(!0)}):w?s.jsx("img",{src:w,className:c,alt:(t==null?void 0:t.name)||"Kamera",loading:"lazy",decoding:"async",onError:()=>m(!0)},`${n}-${u}`):s.jsxs("div",{className:"tm-placeholder-widget",children:[s.jsx(Xr,{size:32}),s.jsx("span",{className:"tm-text-sm",children:d?"Kamera nicht erreichbar":"Kamerabild nicht verfügbar"})]})}function I0({cameraName:e,isLive:t}){return s.jsxs("div",{className:"tm-camera-badge",children:[s.jsx(Xr,{size:12,className:"tm-camera-badge-icon"}),s.jsx("span",{children:e}),t&&s.jsx("span",{className:"tm-camera-live",children:"LIVE"})]})}function R0({cameraIds:e,activeEntityId:t,getEntity:n,onSelect:r}){return e.length<=1?null:s.jsx("div",{className:"tm-camera-switcher",onClick:i=>i.stopPropagation(),children:e.map((i,a)=>{const o=n(i),l=V_(o.name,a),c=i===t;return s.jsx("button",{type:"button",className:`tm-camera-switch-btn${c?" active":""}`,onClick:u=>{u.stopPropagation(),r(i)},"aria-label":`${o.name} anzeigen`,"aria-pressed":c,children:s.jsx("span",{className:"tm-camera-switch-btn-visual",children:l})},i)})})}function Lj({hass:e,entity:t,entityId:n,cameraIds:r,activeEntityId:i,getEntity:a,isMock:o,isConnected:l,feed:c,cameraName:u,onClose:d,onSelectCamera:m}){return b.useEffect(()=>{const f=h=>{h.key==="Escape"&&d()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[d]),s.jsxs("div",{className:"tm-camera-overlay",onClick:d,children:[s.jsx("div",{className:"tm-camera-overlay-backdrop"}),s.jsxs("div",{className:"tm-camera-expanded",onClick:f=>f.stopPropagation(),role:"dialog","aria-label":`${u} Vollbild`,children:[s.jsx("button",{type:"button",className:"tm-camera-expanded-close",onClick:d,"aria-label":"Schließen",children:s.jsx(Ue,{size:18})}),s.jsx(R0,{cameraIds:r,activeEntityId:i,getEntity:a,onSelect:m}),c.hasFeed&&!c.failed&&s.jsx(I0,{cameraName:u,isLive:c.isLive}),s.jsx($0,{hass:e,entity:t,entityId:n,isMock:o,isConnected:l,feed:c,fitMode:"contain",streamClassName:"tm-camera-stream",imageClassName:"tm-camera-feed"})]})]})}function zj({onSettings:e,entityId:t,entityIds:n,widget:r,onConfigure:i}){var S;const{hass:a,isMock:o,isConnected:l,getEntity:c}=et(),{config:u}=Ee(),d=i||e,m=b.useMemo(()=>{var C,j;if(r)return t0(r);const E=(n||[]).filter(Boolean);return E.length?E.slice(0,3):t||(C=u.camera)!=null&&C.entity_id?[t||((j=u.camera)==null?void 0:j.entity_id)]:[]},[r,n,t,(S=u.camera)==null?void 0:S.entity_id]),[f,h]=b.useState(()=>m[0]||""),[v,w]=b.useState(!1);b.useEffect(()=>{if(!m.length){h("");return}m.includes(f)||h(m[0])},[m,f]);const x=f||m[0]||"",p=x?Et(a,x):null,g=(p==null?void 0:p.name)||"Kamera",y=Mj(a,x,p,{isMock:o,isConnected:l}),_=()=>{y.hasFeed&&!y.failed&&w(!0)};return m.length?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:`tm-card-dark tm-camera-widget${y.hasFeed&&!y.failed?" tm-camera-widget--clickable":""}`,onClick:_,onKeyDown:E=>{(E.key==="Enter"||E.key===" ")&&y.hasFeed&&!y.failed&&(E.preventDefault(),_())},role:y.hasFeed&&!y.failed?"button":void 0,tabIndex:y.hasFeed&&!y.failed?0:void 0,"aria-label":y.hasFeed&&!y.failed?`${g} vergrößern`:void 0,children:[s.jsx($0,{hass:a,entity:p,entityId:x,isMock:o,isConnected:l,feed:y}),s.jsx(R0,{cameraIds:m,activeEntityId:x,getEntity:c,onSelect:h}),y.hasFeed&&!y.failed&&s.jsx(I0,{cameraName:g,isLive:y.isLive})]}),v&&s.jsx(Lj,{hass:a,entity:p,entityId:x,cameraIds:m,activeEntityId:x,getEntity:c,isMock:o,isConnected:l,feed:y,cameraName:g,onClose:()=>w(!1),onSelectCamera:h})]}):s.jsx("div",{className:"tm-card-dark tm-camera-widget",children:s.jsxs("div",{className:"tm-placeholder-widget",onClick:d,role:"button",tabIndex:0,children:[s.jsx(Xr,{size:32}),s.jsx("span",{className:"tm-text-sm",children:"Kamera konfigurieren"})]})})}function Oj({entityId:e,onConfigure:t}){var _;const{hass:n,isConnected:r,isMock:i,revision:a}=et(),{config:o}=Ee(),l=e||((_=o.shoppingList)==null?void 0:_.entity_id),[c,u]=b.useState([]),[d,m]=b.useState(""),[f,h]=b.useState(!1),[v,w]=b.useState(!1),x=b.useCallback(async()=>{if(!l){u([]);return}if(i){u(Jx);return}if(r){w(!0);try{const S=await Hx(n,l);u(S)}catch{u([])}finally{w(!1)}}},[n,l,r,i]);if(b.useEffect(()=>{x()},[x,a]),!l)return s.jsx("button",{type:"button",className:"tm-card tm-card-dark empty",style:{height:"100%",padding:"1.25rem"},onClick:t,children:s.jsxs("div",{className:"tm-placeholder-widget",children:[s.jsx(ia,{size:32}),s.jsx("span",{className:"tm-text-sm",children:"Einkaufsliste konfigurieren"})]})});const p=async S=>{S.status!=="completed"&&(r?(await Bx(n,l,S.uid),await x()):u(E=>E.map(C=>C.uid===S.uid?{...C,status:"completed"}:C)))},g=async()=>{d.trim()&&(r?(await Ux(n,l,d.trim()),await x()):u(S=>[...S,{uid:String(Date.now()),summary:d.trim(),status:"needs_action"}]),m(""),h(!1))},y=c.filter(S=>S.status!=="completed");return s.jsxs("div",{className:"tm-card tm-card-dark",style:{height:"100%",padding:"1.25rem",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{marginBottom:"1rem"},children:[s.jsxs("div",{className:"tm-flex-center tm-gap-2",children:[s.jsx(ms,{size:20,style:{color:"#fb923c"}}),s.jsx("span",{className:"tm-font-bold",style:{fontSize:"1.125rem"},children:"Einkauf"})]}),s.jsx("button",{type:"button",className:"tm-flex-center",style:{background:"rgba(255,255,255,0.1)",padding:"0.5rem",borderRadius:"9999px",border:"none",color:"white",cursor:"pointer",minWidth:40,minHeight:40},onClick:()=>h(!f),children:s.jsx(st,{size:16})})]}),f&&s.jsxs("div",{className:"tm-flex-row tm-gap-2",style:{marginBottom:"0.75rem"},children:[s.jsx("input",{className:"tm-input",type:"text",placeholder:"Neuer Eintrag…",value:d,onChange:S=>m(S.target.value),onKeyDown:S=>S.key==="Enter"&&g()}),s.jsx("button",{type:"button",className:"tm-btn-primary",style:{padding:"0.5rem 1rem",minHeight:"auto"},onClick:g,children:"OK"})]}),s.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[v&&s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{textAlign:"center",padding:"1rem"},children:"Lädt…"}),!v&&y.length===0&&s.jsx("div",{className:"tm-text-sm tm-opacity-50",style:{textAlign:"center",padding:"1rem"},children:"Liste ist leer"}),c.map(S=>s.jsxs("button",{type:"button",onClick:()=>p(S),className:"tm-flex-row tm-items-center tm-gap-3",style:{width:"100%",padding:"0.75rem",borderRadius:"0.75rem",border:"none",cursor:"pointer",textAlign:"left",background:"rgba(255,255,255,0.05)"},children:[s.jsx("div",{style:{width:"1.25rem",height:"1.25rem",borderRadius:"9999px",border:"2px solid",display:"flex",alignItems:"center",justifyContent:"center",borderColor:S.status==="completed"?"#f97316":"rgba(255,255,255,0.3)",background:S.status==="completed"?"#f97316":"transparent"},children:S.status==="completed"&&s.jsx(m0,{size:12,style:{color:"black"}})}),s.jsx("span",{className:"tm-font-bold tm-text-sm",style:{color:S.status==="completed"?"rgba(255,255,255,0.3)":"rgba(255,255,255,0.9)",textDecoration:S.status==="completed"?"line-through":"none"},children:S.summary})]},S.uid))]})]})}function $j(e){const t=new Map;return e.forEach((n,r)=>t.set(n.id,r)),t}function Ij(e,t){const n=new Array(e.length).fill(0),r=new Array(e.length).fill(0);return t.forEach(i=>{r[i.source]+=i.value,n[i.target]+=i.value}),e.map((i,a)=>Math.max(n[a],r[a],.001))}function Rj(e,t,n,r){const i=[...e];return i.some(o=>t[o].sort!=null)?(i.sort((o,l)=>(t[o].sort??0)-(t[l].sort??0)),i):(i.sort((o,l)=>{const c=n.filter(f=>f.source===o||f.target===o),u=n.filter(f=>f.source===l||f.target===l),d=c.reduce((f,h)=>f+(h.source===o?h.target:h.source),0)/(c.length||1),m=u.reduce((f,h)=>f+(h.source===l?h.target:h.source),0)/(u.length||1);return d-m||r[l]-r[o]}),i)}function Dj(e,t,n,r){const i=(e+n)/2;return`M${e},${t}C${i},${t} ${i},${r} ${n},${r}`}function Fj(e,t,n,r,i,a){const o=(e+r)/2;return[`M${e},${t}`,`C${o},${t} ${o},${i} ${r},${i}`,`L${r},${a}`,`C${o},${a} ${o},${n} ${e},${n}`,"Z"].join(" ")}function Wj(e,t,n,r={}){const{nodeWidth:i=14,nodePadding:a=18,margin:o={top:28,right:110,bottom:20,left:110}}=r,l=e.nodes.map(C=>({...C})),c=$j(l),u=e.links.map(C=>({...C,source:c.get(C.source),target:c.get(C.target)})),d=Ij(l,u),m=new Map;l.forEach((C,j)=>{const M=C.column??0;m.has(M)||m.set(M,[]),m.get(M).push(j)});const f=[...m.keys()].sort((C,j)=>C-j),h=Math.max(1,t-o.left-o.right),v=Math.max(1,n-o.top-o.bottom),w=f.length,x=w>1?h/(w-1):0,p=Math.max(...d,1),g=C=>C/p*(v*.72);f.forEach((C,j)=>{const M=Rj(m.get(C),l,u,d),T=M.reduce((U,Q)=>U+g(d[Q]),0)+a*Math.max(0,M.length-1);let I=o.top+(v-T)/2;M.forEach(U=>{const Q=g(d[U]);l[U].x=o.left+j*x,l[U].y=I,l[U].height=Q,l[U].width=i,l[U].value=d[U],I+=Q+a})});const y=new Array(l.length).fill(0),_=new Array(l.length).fill(0),S=u.map(C=>{const j=l[C.source],M=l[C.target],T=g(C.value),I=j.y+y[C.source],U=M.y+_[C.target];y[C.source]+=T,_[C.target]+=T;const Q=j.x+j.width,J=M.x;return{...C,path:Fj(Q,I,I+T,J,U,U+T),centerPath:Dj(Q,I+T/2,J,U+T/2),value:C.value,color:j.color||"#94a3b8"}}),E=f.length?f[f.length-1]:0;return{nodes:l,links:S,maxValue:p,maxColumn:E}}function Hj(e){const[t,n]=b.useState({width:640,height:360});return b.useEffect(()=>{const r=e.current;if(!r)return;const i=()=>{const o=r.getBoundingClientRect();o.width>0&&o.height>0&&n({width:o.width,height:o.height})};i();const a=new ResizeObserver(i);return a.observe(r),()=>a.disconnect()},[e]),t}function cf(e,t){return e.column===0?e.x-10:(e.column===t,e.x+e.width+10)}function uf(e,t){return e.column===0?"end":(e.column===t&&t>0,"start")}function Bj({widget:e}){const t=b.useRef(null),{width:n,height:r}=Hj(t),i=Jw,a=(e==null?void 0:e.label)||i.title,o=b.useMemo(()=>Wj(i,n,r),[i,n,r]),l=b.useMemo(()=>t2(i),[i]),c=b.useMemo(()=>i.nodes.filter(u=>u.column===0),[i]);return s.jsx("div",{className:"tm-card tm-sankey-widget",children:s.jsxs("div",{className:"tm-sankey-content",children:[s.jsx("div",{className:"tm-sankey-header",children:s.jsxs("div",{className:"tm-sankey-header-main",children:[s.jsx(Xu,{size:22,style:{opacity:.75,flexShrink:0},"aria-hidden":!0}),s.jsxs("div",{children:[s.jsx("div",{className:"tm-weather-location",children:a}),s.jsx("div",{className:"tm-sankey-total-value",children:Xn(l,i.unit)}),s.jsx("div",{className:"tm-weather-hilo",children:i.subtitle})]})]})}),s.jsx("div",{ref:t,className:"tm-sankey-canvas",children:s.jsxs("svg",{width:n,height:r,viewBox:`0 0 ${n} ${r}`,role:"img","aria-label":`${a}: Energiefluss-Diagramm`,children:[s.jsx("defs",{children:o.links.map((u,d)=>s.jsxs("linearGradient",{id:`tm-sankey-grad-${d}`,gradientUnits:"userSpaceOnUse",x1:o.nodes[u.source].x,x2:o.nodes[u.target].x,children:[s.jsx("stop",{offset:"0%",stopColor:u.color,stopOpacity:"0.55"}),s.jsx("stop",{offset:"100%",stopColor:o.nodes[u.target].color||u.color,stopOpacity:"0.45"})]},`grad-${d}`))}),o.links.map((u,d)=>s.jsx("path",{d:u.path,fill:`url(#tm-sankey-grad-${d})`,className:"tm-sankey-link"},`link-${d}`)),o.nodes.map(u=>s.jsxs("g",{className:"tm-sankey-node",children:[s.jsx("rect",{x:u.x,y:u.y,width:u.width,height:u.height,fill:u.color,rx:3}),s.jsx("text",{x:cf(u,o.maxColumn),y:u.y+u.height/2,textAnchor:uf(u,o.maxColumn),dominantBaseline:"middle",className:"tm-sankey-node-label",children:u.name}),s.jsx("text",{x:cf(u,o.maxColumn),y:u.y+u.height/2+14,textAnchor:uf(u,o.maxColumn),dominantBaseline:"middle",className:"tm-sankey-node-value",children:Xn(u.value,i.unit)})]},u.id))]})}),s.jsx("div",{className:"tm-sankey-legend",children:c.map(u=>s.jsxs("span",{className:"tm-sankey-legend-item",children:[s.jsx("span",{className:"tm-sankey-legend-swatch",style:{background:u.color}}),u.name]},u.id))})]})})}const df={opacity:.7,color:"rgba(255,255,255,0.75)"};function mf({name:e,value:t,unit:n,color:r}){return s.jsxs("div",{className:"tm-energy-metric-row",children:[r&&s.jsx("span",{className:"tm-energy-metric-dot",style:{background:r}}),s.jsx("span",{className:"tm-energy-metric-name",children:e}),s.jsx("span",{className:"tm-energy-metric-value",children:Xn(t,n)})]})}function Uj({data:e,title:t}){const n=e.inputs.reduce((i,a)=>i+a.value,0),r=e.outputs.reduce((i,a)=>i+a.value,0);return s.jsxs("div",{className:"tm-quick-action tm-energy-tile",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{width:"100%"},children:[s.jsx(WS,{size:24,style:df}),s.jsx(BS,{size:20,style:{...df,opacity:.45}})]}),s.jsxs("div",{className:"tm-flex-col",style:{marginTop:"auto",minHeight:0,gap:"0.625rem"},children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-font-bold",style:{fontSize:"1.125rem",lineHeight:1.25},children:t}),s.jsxs("div",{className:"tm-text-xs tm-opacity-70",style:{marginTop:"0.25rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:["In ",Xn(n,e.unit)," · Out ",Xn(r,e.unit)]})]}),s.jsxs("div",{className:"tm-energy-metric-cols",children:[s.jsxs("div",{className:"tm-energy-metric-col",children:[s.jsx("div",{className:"tm-text-xs tm-opacity-50",style:{textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.35rem"},children:"Input"}),e.inputs.map(i=>s.jsx(mf,{name:i.name,value:i.value,unit:e.unit,color:i.color},i.id))]}),s.jsxs("div",{className:"tm-energy-metric-col",children:[s.jsx("div",{className:"tm-text-xs tm-opacity-50",style:{textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.35rem"},children:"Output"}),e.outputs.map(i=>s.jsx(mf,{name:i.name,value:i.value,unit:e.unit,color:i.color},i.id))]})]})]})]})}function ff({name:e,value:t,unit:n,imageUrl:r,stateLabel:i,icon:a,sources:o,compact:l=!1}){return s.jsxs("div",{className:`tm-energy-device-card${l?" tm-energy-device-card--mini":""}`,children:[r?s.jsx("img",{src:r,alt:"",className:"tm-energy-device-card-bg"}):s.jsx("div",{className:"tm-energy-device-card-bg tm-energy-device-card-bg--empty"}),s.jsx("div",{className:"tm-energy-device-card-shade","aria-hidden":!0}),s.jsxs("div",{className:"tm-energy-device-card-content",children:[s.jsxs("div",{className:"tm-energy-device-card-top",children:[s.jsx("span",{className:"tm-energy-device-card-icon",children:s.jsx(a,{size:l?15:17,"aria-hidden":!0})}),s.jsx("span",{className:"tm-energy-device-state",children:i})]}),s.jsxs("div",{className:"tm-energy-device-card-body",children:[s.jsx("div",{className:"tm-font-bold",style:{fontSize:l?"0.9375rem":"1.0625rem",lineHeight:1.25},children:e}),s.jsx("div",{className:"tm-text-xs tm-opacity-70",style:{marginTop:"0.2rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:Xn(t,n)}),(o==null?void 0:o.length)>0&&s.jsx("div",{className:"tm-text-xs tm-opacity-50",style:{marginTop:"0.3rem",lineHeight:1.35},children:o.map(c=>`${c.name} ${Xn(c.value,n)}`).join(" · ")})]})]})]})}function Kj({data:e,title:t,widget:n,hass:r}){const{isMock:i}=et(),{config:a}=Ee(),[o,l]=e.items,c=qi(n==null?void 0:n.deviceImages),u=ta(a,c,i),d=dg(r,u,o.demoCharging),m=m2(r,c.heatpump.lightEntity,l.demoLightOn),f=f2(r,c,d),h=p2(r,c,m);return s.jsxs("div",{className:"tm-energy-device-stack",children:[s.jsx(ff,{name:t,value:o.value,unit:e.unit,imageUrl:f,stateLabel:d?_m.charging:_m.idle,icon:KS,sources:o.sources}),l&&s.jsx(ff,{name:l.name,value:l.value,unit:e.unit,imageUrl:h,stateLabel:m?Sm.lightOn:Sm.lightOff,icon:ZS,sources:l.sources,compact:!0})]})}function qj({widget:e,hass:t}){const n=(e==null?void 0:e.tileKind)||"inputs-outputs",r=Co[n]||Co["inputs-outputs"],i=n2(n),a=(e==null?void 0:e.label)||r.label;return n==="ev-heatpump"?s.jsx(Kj,{data:i,title:a,widget:e,hass:t}):s.jsx(Uj,{data:i,title:a})}const cn=[{stroke:"rgb(var(--tm-accent-rgb))",fill:"rgba(var(--tm-accent-rgb), 0.14)"},{stroke:"#fbbf24",fill:"rgba(251, 191, 36, 0.14)"},{stroke:"#34d399",fill:"rgba(52, 211, 153, 0.14)"},{stroke:"#f472b6",fill:"rgba(244, 114, 182, 0.14)"}];function Vj(e,t,n){if(!(e!=null&&e.length))return null;if(t<=e[0].t)return{v:e[0].v,t};if(t>=e[e.length-1].t)return{v:e[e.length-1].v,t};for(let r=0;r<e.length-1;r+=1){const i=e[r],a=e[r+1];if(i.t<=t&&a.t>=t){if(n==="binary_sensor")return{v:i.v,t};const o=a.t-i.t||1,l=(t-i.t)/o;return{v:i.v+(a.v-i.v)*l,t}}}return null}function Yj(e,t,n,r){if(t)return{min:n,max:r};const i=e.points.map(a=>a.v);return{min:Math.min(...i),max:Math.max(...i)}}function Gj(e,t,n,r=3){const i=e.filter(p=>{var g;return((g=p.points)==null?void 0:g.length)>=2});if(!i.length)return null;const a=i.flatMap(p=>p.points),o=Math.min(...a.map(p=>p.t)),l=Math.max(...a.map(p=>p.t)),c=l-o||1,d=[...new Set(i.map(p=>p.unit||""))].length===1,m=a.map(p=>p.v),f=Math.min(...m),h=Math.max(...m),v=t-r*2,w=n-r*2;return{layers:i.map((p,g)=>{const{min:y,max:_}=Yj(p,d,f,h),S=_-y||1,E=p.points.map(M=>({x:r+(M.t-o)/c*v,y:r+w-(M.v-y)/S*w,v:M.v,t:M.t})),C=E.map(({x:M,y:T})=>`${M},${T}`).join(" "),j=[`${E[0].x},${n-r}`,...E.map(({x:M,y:T})=>`${M},${T}`),`${E[E.length-1].x},${n-r}`].join(" ");return{id:p.id,domain:p.domain,colorIndex:p.colorIndex??g,coords:E,line:C,area:j,min:y,max:_,yRange:S}}),tMin:o,tMax:l,tSpan:c,width:t,height:n,padding:r,innerW:v,innerH:w,unifiedScale:d,rangeMin:d?f:null,rangeMax:d?h:null}}function Qj(e,t,n){if(!e)return null;const r=Math.max(0,Math.min(1,n)),i=e.tMin+r*e.tSpan,a=e.padding+r*e.innerW,o=e.layers.map(l=>{const c=t.find(m=>m.id===l.id);if(!c)return null;const u=Vj(c.points,i,c.domain);if(!u)return null;const d=e.padding+e.innerH-(u.v-l.min)/l.yRange*e.innerH;return{entityId:l.id,colorIndex:l.colorIndex,v:u.v,t:u.t,x:a,y:d}}).filter(Boolean);return o.length?{active:!0,time:i,samples:o}:null}const pf=200,Xj=80,Jj=32;function hf(e){const t=Number(e);return Number.isFinite(t)?t.toLocaleString("de-DE",{minimumFractionDigits:0,maximumFractionDigits:1}):String(e)}function D0({points:e,series:t,compact:n=!1,loading:r=!1,showRange:i=!1,domain:a="sensor",onScrubChange:o}){var E,C;const l=b.useRef(null),[c,u]=b.useState(null),d=n?Jj:Xj,m=b.useMemo(()=>t!=null&&t.length?t:(e==null?void 0:e.length)>=2?[{id:"single",points:e,domain:a,unit:"",colorIndex:0}]:[],[a,e,t]),f=b.useMemo(()=>Gj(m,pf,d),[m,d]),h=m.length>1,v=b.useCallback(j=>{const M=l.current;if(!M||!f)return;const T=M.getBoundingClientRect();if(!T.width)return;const I=(j-T.left)/T.width,U=Qj(f,m,I);U&&(u(U),o==null||o(U))},[f,o,m]),w=b.useCallback(()=>{u(null),o==null||o({active:!1,time:null,samples:[]})},[o]),x=b.useCallback(j=>{j.currentTarget.setPointerCapture(j.pointerId),v(j.clientX)},[v]),p=b.useCallback(j=>{j.currentTarget.hasPointerCapture(j.pointerId)&&v(j.clientX)},[v]),g=b.useCallback(j=>{j.currentTarget.hasPointerCapture(j.pointerId)&&j.currentTarget.releasePointerCapture(j.pointerId),w()},[w]),y=b.useCallback(j=>{j.pointerType==="mouse"&&v(j.clientX)},[v]),_=b.useCallback(j=>{j.pointerType!=="mouse"||j.buttons||v(j.clientX)},[v]);if(r&&!m.some(j=>j.points.length>=2))return s.jsx("div",{className:`tm-sensor-sparkline tm-sensor-sparkline--loading${n?" compact":""}`});if(!f)return null;const S=(C=(E=c==null?void 0:c.samples)==null?void 0:E[0])==null?void 0:C.x;return s.jsxs("div",{className:`tm-sensor-sparkline-chart${n?" compact":""}${h?" multi":""}`,children:[s.jsx("div",{ref:l,className:"tm-sensor-sparkline-interactive",onPointerDown:x,onPointerMove:j=>{p(j),_(j)},onPointerUp:g,onPointerCancel:g,onPointerEnter:y,onPointerLeave:w,role:"slider","aria-label":"Verlauf scrubben",tabIndex:-1,children:s.jsxs("svg",{className:"tm-sensor-sparkline",viewBox:`0 0 ${pf} ${d}`,preserveAspectRatio:"none","aria-hidden":!0,children:[f.layers.map(j=>{const M=cn[j.colorIndex%cn.length];return s.jsxs("g",{children:[!h&&s.jsx("polygon",{className:"tm-sensor-sparkline-area",points:j.area,style:{fill:M.fill}}),s.jsx("polyline",{className:"tm-sensor-sparkline-line",points:j.line,style:{stroke:M.stroke}})]},j.id)}),S!=null&&s.jsxs(s.Fragment,{children:[s.jsx("line",{className:"tm-sensor-sparkline-scrub-line",x1:S,x2:S,y1:0,y2:d}),c.samples.map(j=>{const M=cn[j.colorIndex%cn.length];return s.jsx("circle",{className:"tm-sensor-sparkline-scrub-dot",cx:j.x,cy:j.y,r:n?2.5:3.5,style:{stroke:M.stroke}},j.entityId)})]})]})}),i&&f.rangeMin!=null&&f.rangeMax!=null&&s.jsxs("div",{className:"tm-sensor-sparkline-range",children:[s.jsx("span",{children:hf(f.rangeMin)}),s.jsx("span",{children:hf(f.rangeMax)})]}),h&&s.jsx("div",{className:"tm-sensor-sparkline-legend",children:f.layers.map(j=>{const M=cn[j.colorIndex%cn.length],T=m.find(I=>I.id===j.id);return s.jsxs("span",{className:"tm-sensor-sparkline-legend-item",children:[s.jsx("span",{className:"tm-sensor-series-dot",style:{background:M.stroke}}),s.jsx("span",{children:(T==null?void 0:T.label)||j.id})]},j.id)})})]})}function F0(e,t=24){const n=new Date(e);return t>=168?yt(n,"EEE dd.MM., HH:mm",{locale:Kn}):t>=48?yt(n,"dd.MM., HH:mm",{locale:Kn}):yt(n,"HH:mm",{locale:Kn})}const W0=5*60*1e3;function Zj(e,t,{enabled:n=!1,hours:r=24,revision:i=0}={}){const[a,o]=b.useState([]),[l,c]=b.useState(!1);return b.useEffect(()=>{if(!n||!t){o([]);return}let u=!1;const d=async()=>{c(!0);try{const f=await Zg(e,t,{hours:r});u||o(f)}catch{u||o([])}finally{u||c(!1)}};d();const m=setInterval(d,W0);return()=>{u=!0,clearInterval(m)}},[e,t,n,r,i]),{points:a,loading:l}}function eC(e,t,{enabled:n=!1,hours:r=24,revision:i=0}={}){const[a,o]=b.useState([]),[l,c]=b.useState(!1),u=t.join("|");return b.useEffect(()=>{if(!n||!t.length){o([]);return}let d=!1;const m=async()=>{c(!0);try{const h=await Promise.all(t.map(v=>Zg(e,v,{hours:r})));d||o(t.map((v,w)=>({entityId:v,points:h[w]||[]})))}catch{d||o([])}finally{d||c(!1)}};m();const f=setInterval(m,W0);return()=>{d=!0,clearInterval(f)}},[e,u,n,r,i,t]),{series:a,loading:l}}function H0({hass:e,entityId:t,entity:n,label:r,compact:i=!1,history:a=!1,colorIndex:o=0,scrubSample:l=null,scrubbing:c=!1}){const{value:u,unit:d}=mc(e,t),m=cn[o%cn.length],f=c&&l?IS(l.v,n):u,h=c&&n.domain==="binary_sensor"?"":d;return s.jsxs("div",{className:`tm-sensor-reading${i?" tm-sensor-reading--compact":""}${a?" tm-sensor-reading--history":""}${c?" tm-sensor-reading--scrubbing":""}`,children:[s.jsxs("div",{className:"tm-sensor-reading-top",children:[i&&s.jsx("span",{className:"tm-sensor-series-dot",style:{background:m.stroke}}),s.jsx(Pt,{hass:e,entity:n,size:i?18:22,style:{opacity:.75}}),s.jsx("span",{className:"tm-sensor-reading-label",children:r})]}),s.jsxs("div",{className:"tm-sensor-reading-value-row",children:[s.jsx("span",{className:"tm-sensor-reading-value",style:c?{color:m.stroke}:void 0,children:f}),h&&s.jsx("span",{className:"tm-sensor-reading-unit",children:h})]})]})}function gf({hass:e,getEntity:t,entityId:n,label:r,showHistory:i,historyHours:a}){var w,x;const{revision:o}=et(),[l,c]=b.useState(null),u=t(n),d=i&&Qg(e,n),{points:m,loading:f}=Zj(e,n,{enabled:d,hours:a,revision:o}),h=!!(l!=null&&l.active&&((w=l.samples)!=null&&w[0])),v=((x=l==null?void 0:l.samples)==null?void 0:x[0])||null;return s.jsxs("div",{className:`tm-sensor-single${d?" tm-sensor-single--history":""}`,children:[s.jsx(H0,{hass:e,entityId:n,entity:u,label:r,history:d,scrubSample:v,scrubbing:h}),d&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`tm-sensor-reading-scrub-time${h?"":" is-idle"}`,"aria-hidden":!h,children:h?F0(l.time,a):" "}),s.jsx("div",{className:"tm-sensor-sparkline-wrap",children:s.jsx(D0,{points:m,loading:f,showRange:!0,domain:u.domain,onScrubChange:c})})]})]})}function tC({hass:e,getEntity:t,entityIds:n,widgetLabel:r,showHistory:i,historyHours:a}){var w;const{revision:o}=et(),[l,c]=b.useState(null),u=i&&n.some(x=>Qg(e,x)),{series:d,loading:m}=eC(e,n,{enabled:u,hours:a,revision:o}),f=b.useMemo(()=>n.map((x,p)=>{var _;const g=t(x),y=d.find(S=>S.entityId===x);return{id:x,points:(y==null?void 0:y.points)||[],domain:g.domain,unit:((_=g.attributes)==null?void 0:_.unit_of_measurement)||"",colorIndex:p,label:r&&p===0?r:rt(e,x)}}),[n,t,e,d,r]),h=!!(l!=null&&l.active&&((w=l.samples)!=null&&w.length)),v=b.useCallback(x=>{c(x)},[]);return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"tm-sensor-multi-readings",children:n.map((x,p)=>{var _;const g=t(x),y=((_=l==null?void 0:l.samples)==null?void 0:_.find(S=>S.entityId===x))||null;return s.jsx(H0,{hass:e,entityId:x,entity:g,label:r&&p===0?r:rt(e,x),compact:!0,colorIndex:p,scrubSample:y,scrubbing:h},x)})}),u&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`tm-sensor-reading-scrub-time tm-sensor-multi-scrub-time${h?"":" is-idle"}`,"aria-hidden":!h,children:h?F0(l.time,a):" "}),s.jsx("div",{className:"tm-sensor-sparkline-wrap tm-sensor-multi-chart",children:s.jsx(D0,{series:f,loading:m,compact:!1,showRange:f.every(x=>{var p;return x.unit===((p=f[0])==null?void 0:p.unit)}),onScrubChange:v})})]})]})}function nC({widget:e,hass:t,getEntity:n,onConfigure:r}){const i=RS(e),a=!!e.showHistory,o=e.historyHours||24;if(!i.length)return s.jsxs("button",{type:"button",className:"tm-sensor-widget empty",onClick:r,children:[s.jsx(st,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Sensor wählen"})]});const l=i.length>1,c=l&&a;return s.jsx("div",{className:`tm-sensor-widget${l?" tm-sensor-widget--multi":""}${a?" tm-sensor-widget--history":""}${c?" tm-sensor-widget--combined-chart":""}`,children:c?s.jsx(tC,{hass:t,getEntity:n,entityIds:i,widgetLabel:e.label,showHistory:a,historyHours:o}):l?i.map((u,d)=>s.jsx(gf,{hass:t,getEntity:n,entityId:u,label:e.label&&d===0?e.label:rt(t,u),showHistory:a,historyHours:o},u)):s.jsx(gf,{hass:t,getEntity:n,entityId:i[0],label:e.label||rt(t,i[0]),showHistory:a,historyHours:o})})}function rC(e){var t;return(t=e.entity_ids)!=null&&t.length?e.entity_ids.filter(Boolean):e.entity_id?[e.entity_id]:[]}function iC(e){var r;const t=((r=e.attributes)==null?void 0:r.device_class)||"",n=(e.name||e.label||"").toLowerCase();return t==="window"||n.includes("fenster")?"window":t==="door"||t==="garage_door"||n.includes("tür")||n.includes("tur")||n.includes("tor")?"door":e.domain==="cover"?"window":"contact"}function ps(e){const{state:t,domain:n}=e;return n==="cover"?["open","opening"].includes(t):n==="binary_sensor"?t==="on":!1}function aC(e){return e.domain==="cover"&&["opening","closing"].includes(e.state)}function B0(e){const{state:t,domain:n}=e;return n==="cover"?{open:"Offen",closed:"Geschlossen",opening:"Öffnet …",closing:"Schließt …"}[t]||t:n==="binary_sensor"?t==="on"?"Offen":"Geschlossen":t}function U0(e,t=[]){return t.filter(Boolean).map(n=>({...Et(e,n),id:n}))}function oC(e=[]){return e.filter(ps).length}function sC(e,t){return e==="door"?t?ra:QS:e==="window"?t?lN:cN:VS}function K0({entity:e,size:t=28,strokeWidth:n=2,className:r=""}){const i=iC(e),a=ps(e),o=aC(e),l=sC(i,a);return s.jsx("span",{className:`tm-contact-icon-badge${a?" tm-contact-icon-badge--open":" tm-contact-icon-badge--closed"}${o?" tm-contact-icon-badge--moving":""} tm-contact-icon-badge--${i}${r?` ${r}`:""}`,"aria-hidden":!0,children:s.jsx(l,{size:t,strokeWidth:n})})}function lC({entity:e,label:t,compact:n=!1}){const r=ps(e),i=B0(e);return s.jsxs("div",{className:`tm-contact-row${r?" tm-contact-row--open":""}${n?" tm-contact-row--compact":""}`,children:[s.jsx(K0,{entity:e,size:n?20:32,strokeWidth:n?2.1:2.25}),s.jsxs("div",{className:"tm-contact-row-text",children:[s.jsx("span",{className:"tm-contact-row-label",children:t}),s.jsx("span",{className:"tm-contact-row-state",children:i})]})]})}function cC({hass:e,entityId:t,label:n}){const[r]=U0(e,[t]),i=ps(r),a=B0(r);return s.jsxs("div",{className:`tm-contact-widget tm-contact-widget--single${i?" tm-contact-widget--open":""}`,children:[s.jsx(K0,{entity:r,size:34,strokeWidth:2.25,className:"tm-contact-widget-hero-icon"}),s.jsxs("div",{className:"tm-contact-widget-body",children:[s.jsx("div",{className:"tm-contact-widget-label",children:n}),s.jsx("div",{className:"tm-contact-widget-state",children:a})]})]})}function uC({hass:e,entityIds:t,widgetLabel:n}){const r=U0(e,t),i=oC(r);return s.jsxs("div",{className:`tm-contact-widget tm-contact-widget--multi${i>0?" tm-contact-widget--open":""}`,children:[s.jsxs("div",{className:"tm-contact-widget-summary",children:[s.jsx("span",{className:"tm-contact-widget-summary-title",children:n||"Sensor Status"}),s.jsx("span",{className:`tm-contact-widget-summary-badge${i>0?" tm-contact-widget-summary-badge--alert":""}`,children:i>0?`${i} offen`:"Alles zu"})]}),s.jsx("div",{className:"tm-contact-widget-grid",children:r.map(a=>s.jsx(lC,{entity:a,label:rt(e,a.id),compact:!0},a.id))})]})}function dC({widget:e,hass:t,onConfigure:n}){const r=rC(e);return r.length?r.length===1?s.jsx(cC,{hass:t,entityId:r[0],label:e.label||rt(t,r[0])}):s.jsx(uC,{hass:t,entityIds:r,widgetLabel:e.label}):s.jsxs("button",{type:"button",className:"tm-contact-widget tm-contact-widget--empty",onClick:n,children:[s.jsx(st,{size:24}),s.jsx("span",{className:"tm-text-sm",children:"Kontakt wählen"})]})}function mC(e){const t=document.createElement("div");return t.className="tm-ha-card-host-message",t.textContent=e,t}function fC({widget:e,hass:t,editMode:n=!1}){const r=`tm-ha-${e.id}`,i=b.useRef(null),a=b.useRef(null),o=b.useRef(null),l=b.useRef(t),c=b.useRef(n),u=b.useRef(e.card),[d,m]=b.useState(()=>Ft()),f=JSON.stringify(e.card||null),h=!!(t!=null&&t.connection);l.current=t,c.current=n,u.current=e.card,b.useEffect(()=>{m(!!Hm(i.current)&&Ft())},[t]),b.useEffect(()=>{const w=i.current,x=Hm(w),p=u.current;if(!x||!p||!Ft())return;let g=!1;const y=document.createElement("div");return y.slot=r,y.className=`tm-ha-card-host${c.current?" is-editing":""}`,x.appendChild(y),a.current=y,(async()=>{y.replaceChildren();try{const S=await Gg(y,p,l.current,{preview:c.current});if(g){S.remove();return}o.current=S}catch(S){if(g)return;o.current=null,y.appendChild(mC((S==null?void 0:S.message)||"Karte konnte nicht geladen werden"))}})(),()=>{g=!0,o.current=null,a.current=null,y.remove()}},[f,h,r]),b.useEffect(()=>{const w=o.current;w&&t&&(w.hass=t)},[t]),b.useEffect(()=>{var x;(x=a.current)==null||x.classList.toggle("is-editing",!!n);const w=o.current;w&&(w.preview=!!n)},[n]);const v=e.card?Br(e.card):"Keine Karte gewählt";return s.jsxs("div",{className:`tm-ha-card${d&&e.card?" tm-ha-card--live":""}`,children:[s.jsx("slot",{ref:i,name:r,className:"tm-ha-card-slot"}),!(d&&e.card)&&s.jsxs("div",{className:"tm-card tm-ha-card-fallback",children:[s.jsx("div",{className:"tm-ha-card-fallback-kicker",children:"Home Assistant"}),s.jsx("div",{className:"tm-ha-card-fallback-title",children:v}),s.jsx("p",{children:e.card?"Im Home-Assistant-Dashboard erscheint hier die echte Lovelace-Karte.":"Im Bearbeiten-Modus eine Karte aus einem Dashboard wählen oder YAML einfügen."})]})]})}function pC({widget:e,hass:t,getEntity:n,editMode:r,onEditWidget:i,onOpenPopup:a,onUpdateWidget:o,pageIndex:l=0,widgetIndex:c=0}){const u=()=>i==null?void 0:i(e.id);switch(e.type){case"weather":return s.jsx(Nj,{entityId:e.entity_id,compact:!0,editMode:r,onConfigure:r?u:void 0});case"media":return s.jsx(Tj,{entityId:e.entity_id,compact:!0,onConfigure:r?u:void 0});case"camera":return s.jsx(zj,{widget:e,entityId:e.entity_id,entityIds:e.entity_ids,onConfigure:r?u:void 0});case"shopping":return s.jsx(Oj,{entityId:e.entity_id,onConfigure:r?u:void 0});case"quickAction":return s.jsx(aj,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"alarm":return s.jsx(lj,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"cover":return s.jsx(hj,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"coverPopup":return s.jsx(gj,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"popup":return s.jsx(uj,{widget:e,widgetIndex:c,hass:t,getEntity:n,onConfigure:u,onOpen:a,editMode:r});case"scene":return s.jsx(cj,{widget:e,widgetIndex:c,hass:t,getEntity:n,onConfigure:u,editMode:r});case"sensor":return s.jsx(nC,{widget:e,hass:t,getEntity:n,onConfigure:u,editMode:r});case"sensorStatus":return s.jsx(dC,{widget:e,hass:t,onConfigure:u});case"sankey":return s.jsx(Bj,{widget:e});case"energyTile":return s.jsx(qj,{widget:e,hass:t});case"haCard":return s.jsx(fC,{widget:e,hass:t,editMode:r});default:return s.jsx("div",{className:"tm-card tm-placeholder-widget",children:s.jsx("span",{children:Ru(e)})})}}const hC={weather:Vu,media:x0,camera:Xr,shopping:ms,quickAction:Xu,alarm:ds,cover:Ur,coverPopup:Ur,popup:h0,scene:Gu,sensor:Yu,sensorStatus:ra,sankey:d0,energyTile:_0,haCard:g0},gC=17.5,yC=22;function vC(e){const t=gC*16,n=Math.min(yC*16,window.innerHeight-32);let r=e.left+e.width/2-t/2,i=e.bottom+8;return r=Math.max(12,Math.min(r,window.innerWidth-t-12)),i+n>window.innerHeight-12&&(i=Math.max(12,e.top-n-8)),{left:`${r}px`,top:`${i}px`,width:`${t}px`,maxHeight:`${n}px`}}function bC({anchorRect:e,slotLabel:t,onClose:n,onPick:r}){ir(!0);const i=b.useMemo(()=>vC(e),[e]);return b.useEffect(()=>{const a=o=>{o.key==="Escape"&&n()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[n]),Pn.createPortal(s.jsxs("div",{className:"tm-slot-picker-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-slot-picker-backdrop",onClick:n,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-slot-picker-panel",style:i,onClick:a=>a.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":`Widget für ${t} wählen`,children:[s.jsxs("div",{className:"tm-slot-picker-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-slot-picker-title",children:"Widget hinzufügen"}),s.jsxs("div",{className:"tm-slot-picker-subtitle",children:[t," · 1×1"]})]}),s.jsx("button",{type:"button",className:"tm-slot-picker-close",onClick:n,"aria-label":"Schließen",children:s.jsx(Ue,{size:16})})]}),s.jsx("div",{className:"tm-slot-picker-grid",children:Object.entries(cs).map(([a,o])=>{const l=hC[a]||st;return s.jsxs("button",{type:"button",className:"tm-slot-picker-item",onClick:()=>r(a),children:[s.jsx("span",{className:"tm-slot-picker-icon",children:s.jsx(l,{size:14})}),s.jsx("span",{children:o.label})]},a)})})]})]}),Mn())}const Ta="cubic-bezier(0.22, 1, 0.36, 1)",Pa="0.34s",xC=[{edge:"n",className:"tm-dashboard-grid-resize-edge--n",label:"oben"},{edge:"s",className:"tm-dashboard-grid-resize-edge--s",label:"unten"},{edge:"w",className:"tm-dashboard-grid-resize-edge--w",label:"links"},{edge:"e",className:"tm-dashboard-grid-resize-edge--e",label:"rechts"},{edge:"se",className:"tm-dashboard-grid-resize-corner",label:"Ecke"}];function wC(e,t,n,r){const{edge:i,offsetX:a,offsetY:o}=n,l=r.cellW,c=r.cellH;switch(i){case"n":e.top=`${t.top+o}px`,e.height=`${Math.max(c,t.height-o)}px`;break;case"s":e.height=`${Math.max(c,t.height+o)}px`;break;case"w":e.left=`${t.left+a}px`,e.width=`${Math.max(l,t.width-a)}px`;break;case"e":e.width=`${Math.max(l,t.width+a)}px`;break;case"se":e.width=`${Math.max(l,t.width+a)}px`,e.height=`${Math.max(c,t.height+o)}px`;break}}function kC({page:e,pageIndex:t,editMode:n,selectedWidgetId:r,onSelectWidget:i,onMoveWidget:a,onResizeWidget:o,hass:l,getEntity:c,onOpenPopup:u,onUpdateWidget:d,onAddWidgetAt:m,onSlotPickerOpenChange:f}){const{config:h}=Ee(),v=rr(h.appearance),w=b.useRef(null),[x,p]=b.useState(null),[g,y]=b.useState(24),[_,S]=b.useState(null),[E,C]=b.useState(null),j=b.useRef(null),M=b.useRef(null);b.useLayoutEffect(()=>{const A=w.current;if(!A)return;const L=()=>{const N=A.getBoundingClientRect();p({width:N.width,height:N.height});const P=getComputedStyle(A),O=parseFloat(P.gap||P.columnGap)||24;y(O)};L();const k=new ResizeObserver(L);return k.observe(A),()=>k.disconnect()},[n]),b.useEffect(()=>{n||C(null)},[n]),b.useEffect(()=>{f==null||f(!!E)},[E,f]);const T=x?J_(x,Ge,ht,g):null,I=b.useCallback(A=>{M.current=A,!j.current&&(j.current=requestAnimationFrame(()=>{S(M.current),j.current=null}))},[]),U=b.useCallback(()=>{j.current&&(cancelAnimationFrame(j.current),j.current=null),M.current=null,S(null)},[]),Q=b.useCallback((A,L)=>{if(!n||!w.current)return;A.preventDefault(),A.stopPropagation(),i(L.id);const k=A.clientX,N=A.clientY,P={x:L.x,y:L.y},O={dx:0,dy:0},W=q=>{const he=q.clientX-k,tt=q.clientY-N;if(!T){I({kind:"drag",widgetId:L.id,offsetX:he,offsetY:tt});return}const Te=Km(he,tt,T);I({kind:"drag",widgetId:L.id,offsetX:Te.offsetX,offsetY:Te.offsetY}),(Te.dx!==O.dx||Te.dy!==O.dy)&&(O.dx=Te.dx,O.dy=Te.dy,a(t,L.id,{x:P.x+Te.dx,y:P.y+Te.dy,w:L.w,h:L.h}))},Y=()=>{window.removeEventListener("pointermove",W),window.removeEventListener("pointerup",Y),U()};window.addEventListener("pointermove",W),window.addEventListener("pointerup",Y)},[n,T,a,i,t,I,U]),J=b.useCallback((A,L,k)=>{if(!n||!w.current)return;A.preventDefault(),A.stopPropagation(),i(L.id);const N=A.clientX,P=A.clientY,O={x:L.x,y:L.y,w:L.w,h:L.h},W={dx:0,dy:0},Y=he=>{const tt=he.clientX-N,Te=he.clientY-P;if(!T){I({kind:"resize",edge:k,widgetId:L.id,offsetX:tt,offsetY:Te});return}const Ln=Km(tt,Te,T),{dx:F,dy:te,offsetX:ge,offsetY:aa}=tS(k,Ln);I({kind:"resize",edge:k,widgetId:L.id,offsetX:ge,offsetY:aa}),(F!==W.dx||te!==W.dy)&&(W.dx=F,W.dy=te,o(t,L.id,eS(k,O,{dx:F,dy:te})))},q=()=>{window.removeEventListener("pointermove",Y),window.removeEventListener("pointerup",q),U()};window.addEventListener("pointermove",Y),window.addEventListener("pointerup",q)},[n,T,o,i,t,I,U]),oe=b.useCallback((A,L,k)=>{k.stopPropagation(),i(null);const N=k.currentTarget.getBoundingClientRect();C({x:A,y:L,anchorRect:{left:N.left,top:N.top,width:N.width,height:N.height,bottom:N.bottom,right:N.right},label:`Feld ${A+1}×${L+1}`})},[i]),ve=b.useCallback(A=>{if(!E||!m)return;const L=Wt(A,{x:E.x,y:E.y}),k=mn(L),N=A==="haCard"&&wr(e.widgets,k).length===0,P=m(t,A,N?{x:k.x,y:k.y,w:k.w,h:k.h}:{x:E.x,y:E.y,w:1,h:1});C(null),P&&i(P)},[m,i,e.widgets,t,E]),H=A=>{const L=v?fS(A.id):null;if(!n)return{gridColumn:`${A.x+1} / span ${A.w}`,gridRow:`${A.y+1} / span ${A.h}`,...L};if(!T)return{gridColumn:`${A.x+1} / span ${A.w}`,gridRow:`${A.y+1} / span ${A.h}`,visibility:"hidden",...L};const k=Z_(A,T),N=(_==null?void 0:_.widgetId)===A.id,P={position:"absolute",left:`${k.left}px`,top:`${k.top}px`,width:`${k.width}px`,height:`${k.height}px`,...L};return N?(P.transition="none",_.kind==="resize"?wC(P,k,_,T):P.transform=`translate3d(${_.offsetX}px, ${_.offsetY}px, 0)`):P.transition=`left ${Pa} ${Ta}, top ${Pa} ${Ta}, width ${Pa} ${Ta}, height ${Pa} ${Ta}`,P},$={gridTemplateColumns:`repeat(${Ge}, minmax(0, 1fr))`,gridTemplateRows:`repeat(${ht}, minmax(0, 1fr))`};return s.jsxs("div",{ref:w,className:`tm-dashboard-grid${n?" tm-dashboard-grid--edit":""}`,style:n?void 0:$,onClick:()=>{n&&(i(null),C(null))},children:[n&&s.jsx("div",{className:"tm-dashboard-grid-overlay",style:$,children:Array.from({length:Ge*ht}).map((A,L)=>{const k=L%Ge,N=Math.floor(L/Ge);return B_(e.widgets,k,N)?s.jsx("div",{className:"tm-dashboard-grid-cell tm-dashboard-grid-cell--occupied","aria-hidden":!0},L):s.jsx("button",{type:"button",className:"tm-dashboard-grid-cell tm-dashboard-grid-cell--empty",onClick:O=>oe(k,N,O),"aria-label":`Feld ${k+1}×${N+1}: Widget hinzufügen`},L)})}),e.widgets.map((A,L)=>{const k=(_==null?void 0:_.widgetId)===A.id,N=Ru(A);return s.jsxs("div",{className:`tm-dashboard-grid-item${r===A.id?" selected":""}${n?" editing":""}${k?" is-interacting":""}${A.type==="energyTile"?" tm-dashboard-grid-item--energy-tile":""}${A.type==="sankey"?" tm-dashboard-grid-item--sankey":""}`,style:H(A),onClick:P=>{n&&(P.stopPropagation(),i(A.id))},children:[n&&s.jsxs("div",{className:"tm-dashboard-grid-chrome",children:[s.jsx("button",{type:"button",className:"tm-dashboard-grid-drag","aria-label":`${N} verschieben`,onPointerDown:P=>Q(P,A),children:"⋮⋮"}),s.jsxs("span",{className:"tm-dashboard-grid-badge",children:[N," ","·"," ",A.w,"×",A.h]}),xC.map(({edge:P,className:O,label:W})=>s.jsx("button",{type:"button",className:`tm-dashboard-grid-resize-edge ${O}`,"aria-label":`${N} ${W} skalieren`,onPointerDown:Y=>J(Y,A,P)},P))]}),s.jsx("div",{className:"tm-dashboard-grid-content",children:pC({widget:A,hass:l,getEntity:c,editMode:n,onEditWidget:P=>i(P),onOpenPopup:u,onUpdateWidget:d,pageIndex:t,widgetIndex:L})})]},A.id)}),E&&s.jsx(bC,{anchorRect:E.anchorRect,slotLabel:E.label,onClose:()=>C(null),onPick:ve})]})}function Ve({value:e,onChange:t,domains:n=null,placeholder:r="Entität wählen…"}){const{hass:i}=et(),[a,o]=b.useState(!1),[l,c]=b.useState(""),u=b.useRef(null),d=wx(i,{domains:n,search:l}),m=e?rt(i,e):null;b.useEffect(()=>{if(!a)return;const v=w=>{const x=typeof w.composedPath=="function"?w.composedPath():[w.target];u.current&&x.includes(u.current)||o(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[a]);const f=v=>{t(v),o(!1),c("")},h=v=>{v.stopPropagation(),t("")};return s.jsxs("div",{className:"tm-entity-picker",ref:u,children:[s.jsxs("button",{type:"button",className:"tm-entity-picker-trigger",onClick:()=>o(!a),children:[s.jsx("span",{style:{opacity:m?1:.5},children:m||r}),s.jsxs("span",{className:"tm-flex-center tm-gap-2",children:[e&&s.jsx("span",{role:"button",tabIndex:0,onClick:h,onKeyDown:v=>v.key==="Enter"&&h(v),style:{opacity:.5,display:"flex"},children:s.jsx(Ue,{size:16})}),s.jsx(us,{size:18,style:{opacity:.5}})]})]}),a&&s.jsxs("div",{className:"tm-entity-picker-dropdown",onMouseDown:v=>v.stopPropagation(),children:[s.jsx("input",{className:"tm-entity-picker-search",type:"text",placeholder:"Suchen…",value:l,onChange:v=>c(v.target.value),autoFocus:!0}),s.jsxs("div",{className:"tm-entity-picker-list",children:[d.length===0&&s.jsx("div",{style:{padding:"1rem",opacity:.5,textAlign:"center"},children:"Keine Entitäten gefunden"}),d.map(v=>s.jsxs("button",{type:"button",className:`tm-entity-picker-item${v.id===e?" selected":""}`,onClick:()=>f(v.id),children:[s.jsx("span",{className:"tm-font-bold",children:v.name}),s.jsxs("span",{className:"tm-text-xs tm-opacity-50",children:[v.id," · ",v.state]})]},v.id))]})]})]})}const _C=[{type:"tile",name:"Kachel"},{type:"entities",name:"Entitäten"},{type:"entity",name:"Entität"},{type:"button",name:"Schaltfläche"},{type:"light",name:"Licht"},{type:"thermostat",name:"Thermostat"},{type:"climate",name:"Klima"},{type:"media-control",name:"Mediensteuerung"},{type:"weather-forecast",name:"Wetter"},{type:"gauge",name:"Gauge"},{type:"sensor",name:"Sensor"},{type:"statistic",name:"Statistik"},{type:"history-graph",name:"Verlaufsdiagramm"},{type:"statistics-graph",name:"Statistikdiagramm"},{type:"humidifier",name:"Luftbefeuchter"},{type:"humidifier-card",name:"Luftbefeuchter"},{type:"alarm-panel",name:"Alarmanlage"},{type:"lock",name:"Schloss"},{type:"cover",name:"Abdeckung"},{type:"fan",name:"Lüfter"},{type:"vacuum",name:"Staubsauger"},{type:"plant-status",name:"Pflanzenstatus"},{type:"calendar",name:"Kalender"},{type:"map",name:"Karte"},{type:"markdown",name:"Markdown"},{type:"iframe",name:"Webseite"},{type:"picture",name:"Bild"},{type:"picture-entity",name:"Bild-Entität"},{type:"picture-glance",name:"Bild-Glance"},{type:"glance",name:"Glance"},{type:"area",name:"Bereich"},{type:"heading",name:"Überschrift"},{type:"grid",name:"Raster"},{type:"horizontal-stack",name:"Horizontaler Stapel"},{type:"vertical-stack",name:"Vertikaler Stapel"},{type:"conditional",name:"Bedingt"},{type:"entity-filter",name:"Entitätsfilter"},{type:"logbook",name:"Logbuch"},{type:"todo-list",name:"To-do-Liste"},{type:"energy-distribution",name:"Energieverteilung"},{type:"energy-date-selection",name:"Energiedatum"}],SC={light:"tile",switch:"tile",input_boolean:"tile",fan:"tile",cover:"tile",lock:"tile",binary_sensor:"tile",sensor:"tile",person:"tile",device_tracker:"tile",scene:"tile",script:"tile",button:"tile",input_button:"tile",climate:"thermostat",weather:"weather-forecast",media_player:"media-control",camera:"picture-entity",alarm_control_panel:"alarm-panel",vacuum:"vacuum",humidifier:"humidifier",plant:"plant-status",calendar:"calendar",todo:"todo-list"},NC=new Set(["zone","sun","persistent_notification","tts","conversation","stt","ai_task","update"]);function jC(e){const t=String(e||"").trim();return t?t.startsWith("custom:")?t:`custom:${t}`:""}function CC(){const e=_C.map(r=>({id:`core:${r.type}`,type:r.type,name:r.name,group:"Home Assistant"})),t=new Set(e.map(r=>r.type)),n=(typeof window<"u"&&Array.isArray(window.customCards)?window.customCards:[]).map(r=>{const i=jC(r==null?void 0:r.type);return!i||t.has(i)?null:(t.add(i),{id:`custom:${i}`,type:i,name:r.name||i.replace(/^custom:/,""),description:r.description||"",group:"Community"})}).filter(Boolean).sort((r,i)=>r.name.localeCompare(i.name,"de"));return[...e,...n]}function EC(e){const t=String(e||"").trim();return t?t==="markdown"?{type:"markdown",content:"## Text"}:t==="heading"?{type:"heading",heading:"Überschrift"}:t==="entities"?{type:"entities",entities:[]}:t==="vertical-stack"||t==="horizontal-stack"||t==="grid"?{type:t,cards:[]}:t==="conditional"?{type:"conditional",conditions:[],card:{type:"tile"}}:{type:t}:null}function TC(e,t){var o,l,c;const n=String(e||"").trim();if(!n||!n.includes("."))return null;const r=n.split(".")[0],i=SC[r]||"tile";if(i==="weather-forecast")return{type:i,entity:n,forecast_type:"daily"};if(i==="entities")return{type:i,entities:[n]};if(i==="picture-entity")return{type:i,entity:n};const a=(c=(l=(o=t==null?void 0:t.states)==null?void 0:o[n])==null?void 0:l.attributes)==null?void 0:c.friendly_name;return a?{type:i,entity:n,name:a}:{type:i,entity:n}}function PC(e,{query:t="",limit:n=120}={}){const r=(e==null?void 0:e.states)||{},i=String(t||"").trim().toLowerCase(),a=[];return Object.keys(r).forEach(o=>{var m;const l=o.split(".")[0];if(NC.has(l))return;const c=r[o],u=((m=c==null?void 0:c.attributes)==null?void 0:m.friendly_name)||o,d=`${u} ${o} ${l}`.toLowerCase();i&&!d.includes(i)||a.push({id:o,entityId:o,name:u,domain:l,label:u===o?o:`${u}`,detail:o})}),a.sort((o,l)=>{if(i){const c=o.name.toLowerCase().startsWith(i)?0:1,u=l.name.toLowerCase().startsWith(i)?0:1;if(c!==u)return c-u}return o.name.localeCompare(l.name,"de")}),{total:a.length,items:a.slice(0,n)}}const AC=[{id:"entities",label:"Entitäten"},{id:"types",label:"Kartenarten"},{id:"dashboard",label:"Dashboard"}],Js=80,MC={colorScheme:"only light",color:"#1d1d1f",WebkitTextFillColor:"#1d1d1f",background:"#f2f2f7"},LC={flexShrink:0,colorScheme:"only light",color:"#111111",WebkitTextFillColor:"#111111",background:"#ffffff",border:"none",width:"100%",textAlign:"left",borderRadius:"0.75rem",padding:"0.7rem 0.85rem",fontSize:"0.875rem",lineHeight:1.35,cursor:"pointer",fontFamily:"system-ui, -apple-system, sans-serif"},zC={display:"block",width:"100%",fontWeight:700,fontSize:"0.875rem",lineHeight:1.35,color:"#111111",WebkitTextFillColor:"#111111",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},OC={display:"block",width:"100%",marginTop:"0.15rem",fontWeight:500,fontSize:"0.7rem",lineHeight:1.3,color:"#5c5c62",WebkitTextFillColor:"#5c5c62",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"};function yf(e){return e.title||e.url_path||"Übersicht"}function $C(e){return ss(e)}function Zs({label:e,meta:t,onClick:n,style:r}){return s.jsxs("div",{role:"button",tabIndex:0,className:"tm-ha-picker-item tm-ha-picker-item-rich",style:{...LC,...r},onClick:n,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),n())},children:[s.jsx("span",{className:"tm-ha-picker-item-title",style:zC,children:e}),t?s.jsx("span",{className:"tm-ha-picker-item-meta",style:OC,children:t}):null]})}function IC({hass:e,onClose:t,onSelect:n}){ir(!0);const[r,i]=b.useState("entities"),[a,o]=b.useState(""),l=b.useDeferredValue(a),[c,u]=b.useState(Js),[d,m]=b.useState([]),[f,h]=b.useState(void 0),[v,w]=b.useState(null),[x,p]=b.useState(-1),[g,y]=b.useState([]),[_,S]=b.useState(!1),[E,C]=b.useState(!0),[j,M]=b.useState(!1),[T,I]=b.useState("");b.useEffect(()=>{const k=N=>{N.key==="Escape"&&t()};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[t]),b.useEffect(()=>{u(Js)},[r,l,f,x]),b.useEffect(()=>{if(r!=="dashboard")return;let k=!1;return(async()=>{try{const N=await C_(e);if(k)return;m(N),h(P=>P===void 0?N[0]?N[0].url_path??null:void 0:P)}catch(N){k||I((N==null?void 0:N.message)||"Dashboards konnten nicht geladen werden")}finally{k||C(!1)}})(),()=>{k=!0}},[e,r]),b.useEffect(()=>{if(r!=="dashboard"||f===void 0)return;let k=!1;return M(!0),I(""),(async()=>{try{const N=await E_(e,f);if(k)return;w(N),p(-1)}catch(N){k||(w(null),y([]),S(!1),I((N==null?void 0:N.message)||"Dashboard konnte nicht geladen werden"))}finally{k||M(!1)}})(),()=>{k=!0}},[f,e,r]);const U=b.useMemo(()=>L_(v),[v]);b.useEffect(()=>{if(r!=="dashboard"||!v){if(r!=="dashboard")return;y([]),S(!1);return}const k=d.find(O=>(O.url_path??null)===f),N=yf(k||{}),P=x<0?null:x;b.startTransition(()=>{const O=z_(v,N,P);y(O),S(O_(v,O))})},[f,x,v,d,r]);const Q=b.useMemo(()=>r!=="entities"?{total:0,items:[]}:PC(e,{query:l,limit:400}),[l,e,r]),J=b.useMemo(()=>{if(r!=="types")return[];const k=l.trim().toLowerCase(),N=CC();return k?N.filter(P=>P.name.toLowerCase().includes(k)||P.type.toLowerCase().includes(k)||(P.description||"").toLowerCase().includes(k)||(P.group||"").toLowerCase().includes(k)):N},[l,r]),oe=b.useMemo(()=>{const k=l.trim().toLowerCase();return k?g.filter(N=>N.label.toLowerCase().includes(k)||N.path.toLowerCase().includes(k)):g},[g,l]),ve=b.useMemo(()=>{const k=[],N=new Map;return oe.slice(0,c).forEach(P=>{if(!N.has(P.path)){const O={path:P.path,cards:[]};N.set(P.path,O),k.push(O)}N.get(P.path).cards.push(P)}),k},[oe,c]),H=k=>{const N=$C(k);N&&n(N)},$=Q.items.slice(0,c),A=J.slice(0,c),L=r==="entities"?Math.max(0,Q.items.length-c):r==="types"?Math.max(0,J.length-c):Math.max(0,oe.length-c);return Pn.createPortal(s.jsxs("div",{className:"tm-ha-picker-overlay",role:"presentation",children:[s.jsx("style",{children:`
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
      `}),s.jsx("button",{type:"button",className:"tm-ha-picker-backdrop",onClick:t,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-ha-picker-panel",role:"dialog","aria-modal":"true","aria-label":"Home-Assistant-Karte wählen",style:MC,children:[s.jsxs("div",{className:"tm-ha-picker-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-ha-picker-title",style:{color:"#111111",WebkitTextFillColor:"#111111"},children:"Karte wählen"}),s.jsx("div",{className:"tm-ha-picker-subtitle",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Entität, Kartenart oder vorhandene Dashboard-Karte"})]}),s.jsx("button",{type:"button",className:"tm-ha-picker-close",onClick:t,"aria-label":"Schließen",children:s.jsx(Ue,{size:16,color:"#111111"})})]}),s.jsx("div",{className:"tm-ha-picker-tabs",role:"tablist",children:AC.map(k=>s.jsx("button",{type:"button",role:"tab","aria-selected":r===k.id,className:`tm-ha-picker-tab${r===k.id?" active":""}`,style:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>i(k.id),children:k.label},k.id))}),s.jsx("input",{className:"tm-ha-picker-search",type:"search",value:a,onChange:k=>o(k.target.value),style:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},placeholder:r==="entities"?"Entität suchen…":r==="types"?"Kartenart suchen…":"Dashboard-Karte suchen…"}),r==="dashboard"?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"tm-ha-picker-dashboards",children:d.map(k=>{const N=k.url_path??null,P=N===f;return s.jsx("button",{type:"button",className:`tm-ha-picker-dash${P?" active":""}`,style:P?{color:"#ffffff",WebkitTextFillColor:"#ffffff",colorScheme:"only light"}:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>h(N),children:yf(k)},k.id||k.url_path||"default")})}),U.length>1?s.jsxs("div",{className:"tm-ha-picker-dashboards tm-ha-picker-views",children:[s.jsx("button",{type:"button",className:`tm-ha-picker-dash tm-ha-picker-view${x<0?" active":""}`,style:x<0?{color:"#ffffff",WebkitTextFillColor:"#ffffff",colorScheme:"only light"}:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>p(-1),children:"Alle"}),U.map(k=>s.jsx("button",{type:"button",className:`tm-ha-picker-dash tm-ha-picker-view${k.index===x?" active":""}`,style:k.index===x?{color:"#ffffff",WebkitTextFillColor:"#ffffff",colorScheme:"only light"}:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>p(k.index),children:k.title},k.index))]}):null]}):null,s.jsxs("div",{className:"tm-ha-picker-list",children:[r==="entities"?s.jsxs(s.Fragment,{children:[$.length===0?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:l.trim()?"Keine Entitäten gefunden.":"Keine Entitäten verfügbar."}):null,$.map(k=>s.jsx(Zs,{label:k.label,meta:k.detail,onClick:()=>H(TC(k.entityId,e))},k.id))]}):null,r==="types"?s.jsxs(s.Fragment,{children:[A.length===0?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Keine Kartenarten gefunden."}):null,A.map(k=>s.jsx(Zs,{label:k.name,meta:`${k.group} · ${k.type}`,onClick:()=>H(EC(k.type))},k.id))]}):null,r==="dashboard"?s.jsxs(s.Fragment,{children:[E||j?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Karten werden geladen…"}):null,!E&&!j&&T?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:T}):null,!E&&!j&&!T&&_?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Dieses Dashboard erzeugt seine Karten automatisch und hat keine feste Kartenliste."}):null,!E&&!j&&!T&&!_&&ve.length===0?s.jsx("div",{className:"tm-ha-picker-empty",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:"Keine Karten in diesem Dashboard gefunden."}):null,!j&&!T&&ve.map(k=>s.jsxs("div",{className:"tm-ha-picker-group",children:[s.jsx("div",{className:"tm-ha-picker-group-title",style:{color:"#5c5c62",WebkitTextFillColor:"#5c5c62"},children:k.path}),k.cards.map(N=>s.jsx(Zs,{label:N.label,onClick:()=>H(N.config),style:{paddingLeft:`${.75+Math.min(N.depth,4)*.7}rem`}},N.id))]},k.path))]}):null,L>0?s.jsxs("button",{type:"button",className:"tm-ha-picker-more",style:{color:"#111111",WebkitTextFillColor:"#111111",colorScheme:"only light"},onClick:()=>u(k=>k+Js),children:[L," ","weitere laden"]}):null]})]})]}),Mn())}const vf="custom:";function RC(e){return new Promise(t=>{window.setTimeout(t,e)})}async function hc(e,t=4e3){return customElements.get(e)?customElements.get(e):(await Promise.race([customElements.whenDefined(e),RC(t)]),customElements.get(e)||null)}async function q0(e){const t=String((e==null?void 0:e.type)||"");if(!t)return null;if(t.startsWith(vf))return hc(t.slice(vf.length));const r=await(await window.loadCardHelpers()).createCardElement(e);return r!=null&&r.localName?hc(r.localName):null}const gc="hui-card-picker";let Aa=null;function DC(){return customElements.get(gc)?Promise.resolve(!0):Ft()?(Aa||(Aa=(async()=>{var e;for(const t of["vertical-stack","grid","horizontal-stack"]){try{const n=await q0({type:t,cards:[]});await((e=n==null?void 0:n.getConfigElement)==null?void 0:e.call(n))}catch{}if(await hc(gc,1500))return!0}return!1})().then(e=>(e||(Aa=null),e))),Aa):Promise.resolve(!1)}function FC(e,t){const n=document.createElement(gc);return n.hass=e,n.lovelace={views:[]},n.addEventListener("config-changed",r=>{var a;r.stopPropagation();const i=(a=r.detail)==null?void 0:a.config;i&&typeof i=="object"&&t(i)}),n}async function WC(e,t){if(!Ft())return null;const n=await q0(e);if(typeof(n==null?void 0:n.getConfigElement)!="function")return null;const r=await n.getConfigElement();return r?(r.hass=t,await r.setConfig(e),r):null}function HC({hass:e,onClose:t,onSelect:n,onUnavailable:r,onOpenDashboardCopy:i}){ir(!0);const[a,o]=b.useState("loading"),l=b.useRef(null),c=b.useRef(null),u=b.useRef(e),d=b.useRef(n),m=b.useRef(r);return u.current=e,d.current=n,m.current=r,b.useEffect(()=>{const f=h=>{h.key==="Escape"&&t()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t]),b.useEffect(()=>{let f=!1;return(async()=>{var w,x;const h=await DC();if(f)return;if(!h||!l.current){o("failed"),(w=m.current)==null||w.call(m);return}const v=FC(u.current,p=>d.current(p));c.current=v,l.current.replaceChildren(v),o("ready"),(x=v.focus)==null||x.call(v)})(),()=>{var h;f=!0,(h=c.current)==null||h.remove(),c.current=null}},[]),b.useEffect(()=>{c.current&&e&&(c.current.hass=e)},[e]),Pn.createPortal(s.jsxs("div",{className:"tm-ha-picker-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-ha-picker-backdrop",onClick:t,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-ha-editor-panel tm-ha-native-picker-panel",role:"dialog","aria-modal":"true","aria-label":"Karte wählen",children:[s.jsxs("div",{className:"tm-ha-editor-header",children:[s.jsx("div",{className:"tm-ha-editor-heading",children:s.jsx("div",{className:"tm-ha-editor-title",children:"Karte wählen"})}),s.jsx("button",{type:"button",className:"tm-ha-editor-icon-btn",onClick:t,"aria-label":"Schließen",children:s.jsx(Ue,{size:18})})]}),s.jsxs("div",{className:"tm-ha-native-picker-body",children:[a==="loading"?s.jsx("div",{className:"tm-ha-editor-note tm-ha-native-picker-note",children:"Kartenauswahl wird geladen…"}):null,s.jsx("div",{ref:l,className:"tm-ha-native-picker-slot"})]}),s.jsxs("div",{className:"tm-ha-editor-footer",children:[s.jsx("button",{type:"button",className:"tm-ha-editor-text-btn",onClick:i,children:"Aus anderem Dashboard übernehmen"}),s.jsx("button",{type:"button",className:"tm-ha-editor-text-btn",onClick:t,children:"Abbrechen"})]})]})]}),Mn())}const BC=250;function UC({card:e,hass:t,onClose:n,onSave:r,initialMode:i="visual"}){ir(!0);const[a,o]=b.useState(e),[l,c]=b.useState(i),[u,d]=b.useState("loading"),[m,f]=b.useState(()=>Wm(e)),[h,v]=b.useState(""),w=b.useRef(null),x=b.useRef(null),p=b.useRef(null),g=b.useRef(t),y=b.useRef(e),_=b.useRef(null);g.current=t,y.current=a,b.useEffect(()=>{const T=I=>{I.key==="Escape"&&n()};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[n]),b.useEffect(()=>{if(l!=="visual")return;const T=w.current;if(!T)return;const I=y.current;if(p.current&&_.current===(I==null?void 0:I.type)){T.replaceChildren(p.current);try{p.current.setConfig(I),d("ready")}catch{d("unsupported")}return}let U=!1;d("loading"),T.replaceChildren();const Q=J=>{var ve;J.stopPropagation();const oe=(ve=J.detail)==null?void 0:ve.config;if(!(!oe||typeof oe!="object")){o(oe);try{J.currentTarget.setConfig(oe)}catch{}}};return(async()=>{try{const J=await WC(I,g.current);if(U)return;if(!J){p.current=null,_.current=null,d("unsupported");return}J.addEventListener("config-changed",Q),p.current=J,_.current=I==null?void 0:I.type,T.replaceChildren(J),d("ready")}catch(J){if(U)return;console.warn("The Monitor: card editor failed",J),p.current=null,_.current=null,d("unsupported")}})(),()=>{U=!0}},[l,a==null?void 0:a.type]),b.useEffect(()=>{p.current&&t&&(p.current.hass=t)},[t]);const S=JSON.stringify(a||null);b.useEffect(()=>{const T=x.current;if(!T||!a||!Ft())return;let I=!1;const U=window.setTimeout(async()=>{const Q=document.createElement("div");Q.className="tm-ha-editor-preview-card";try{if(await Gg(Q,a,g.current,{preview:!0}),I)return;T.replaceChildren(Q)}catch(J){if(I)return;const oe=document.createElement("div");oe.className="tm-ha-editor-note",oe.textContent=(J==null?void 0:J.message)||"Vorschau nicht verfügbar",T.replaceChildren(oe)}},BC);return()=>{I=!0,window.clearTimeout(U)}},[S]);const E=()=>{f(Wm(y.current)),v(""),c("yaml")},C=()=>{try{const T=b_(m);if(!T)throw new Error("Die Karte braucht mindestens einen type.");return v(""),T}catch(T){return v(T.message),null}},j=()=>{const T=C();T&&(o(T),c("visual"))},M=()=>{if(l==="yaml"){const T=C();if(!T)return;r(T);return}r(y.current)};return Pn.createPortal(s.jsxs("div",{className:"tm-ha-picker-overlay",role:"presentation",children:[s.jsx("button",{type:"button",className:"tm-ha-picker-backdrop",onClick:n,"aria-label":"Schließen"}),s.jsxs("div",{className:"tm-ha-editor-panel",role:"dialog","aria-modal":"true","aria-label":"Karte bearbeiten",children:[s.jsxs("div",{className:"tm-ha-editor-header",children:[s.jsxs("div",{className:"tm-ha-editor-heading",children:[s.jsx("div",{className:"tm-ha-editor-title",children:"Karte bearbeiten"}),s.jsx("div",{className:"tm-ha-editor-subtitle",children:Br(a)})]}),s.jsx("button",{type:"button",className:"tm-ha-editor-icon-btn",onClick:n,"aria-label":"Schließen",children:s.jsx(Ue,{size:18})})]}),s.jsxs("div",{className:"tm-ha-editor-body",children:[s.jsx("div",{className:"tm-ha-editor-pane tm-ha-editor-pane--form",children:l==="visual"?s.jsxs(s.Fragment,{children:[u==="loading"?s.jsx("div",{className:"tm-ha-editor-note",children:"Editor wird geladen…"}):null,u==="unsupported"?s.jsx("div",{className:"tm-ha-editor-note",children:"Für diese Karte gibt es keinen visuellen Editor. Bearbeite sie im Code-Editor."}):null,s.jsx("div",{ref:w,className:"tm-ha-editor-slot"})]}):s.jsxs(s.Fragment,{children:[s.jsx("textarea",{className:"tm-ha-editor-yaml",value:m,onChange:T=>{f(T.target.value),v("")},spellCheck:!1,"aria-label":"Karten-YAML"}),h?s.jsx("div",{className:"tm-ha-editor-error",children:h}):null]})}),s.jsxs("div",{className:"tm-ha-editor-pane tm-ha-editor-pane--preview",children:[s.jsx("div",{className:"tm-ha-editor-pane-label",children:"Vorschau"}),s.jsx("div",{ref:x,className:"tm-ha-editor-preview",children:Ft()?null:s.jsx("div",{className:"tm-ha-editor-note",children:"Die Vorschau erscheint im Home-Assistant-Dashboard."})})]})]}),s.jsxs("div",{className:"tm-ha-editor-footer",children:[s.jsx("button",{type:"button",className:"tm-ha-editor-text-btn",onClick:l==="visual"?E:j,children:l==="visual"?"Code-Editor anzeigen":"Visuellen Editor anzeigen"}),s.jsxs("div",{className:"tm-ha-editor-actions",children:[s.jsx("button",{type:"button",className:"tm-ha-editor-text-btn",onClick:n,children:"Abbrechen"}),s.jsx("button",{type:"button",className:"tm-ha-editor-primary-btn",onClick:M,children:"Speichern"})]})]})]})]}),Mn())}function KC({widget:e,pageIndex:t,onUpdate:n,hass:r}){const[i,a]=b.useState(null),[o,l]=b.useState(null),c=m=>{n(t,e.id,m?v_(e,m):{card:null})},u=()=>a(Ft()?"native":"dashboard"),d=m=>{a(null);const f=!(m!=null&&m.type);l({card:f?{type:""}:m,mode:f?"yaml":"visual"})};return s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("div",{className:"tm-widget-inspector-label",children:"Home-Assistant-Karte"}),s.jsx("p",{className:"tm-widget-inspector-hint",children:e.card?Br(e.card):"Karte aus der Home-Assistant-Kartenauswahl hinzufügen."}),e.card?s.jsx("button",{type:"button",className:"tm-btn-primary tm-btn-block",onClick:()=>l({card:e.card,mode:"visual"}),children:"Karte bearbeiten"}):null,s.jsx("button",{type:"button",className:"tm-btn-secondary tm-btn-block",onClick:u,children:e.card?"Andere Karte wählen":"Karte wählen"}),i==="native"&&s.jsx(HC,{hass:r,onClose:()=>a(null),onSelect:d,onUnavailable:()=>a("dashboard"),onOpenDashboardCopy:()=>a("dashboard")}),i==="dashboard"&&s.jsx(IC,{hass:r,onClose:()=>a(null),onSelect:d}),o&&s.jsx(UC,{card:o.card,initialMode:o.mode,hass:r,onClose:()=>l(null),onSave:m=>{c(m),l(null)}})]})}function sr(e,t,n){const r=qi(e.deviceImages);return{deviceImages:{...r,[t]:{...r[t],...n}}}}function ci({name:e,onRemove:t,children:n,className:r=""}){return s.jsxs("div",{className:`tm-widget-inspector-entity-row${r?` ${r}`:""}`,children:[n||s.jsx("span",{className:"tm-widget-inspector-entity-name",children:e}),s.jsx("button",{type:"button",className:"tm-widget-inspector-remove",onClick:t,"aria-label":`${e||"Eintrag"} entfernen`,children:s.jsx(Ue,{size:14})})]})}function el(e,t,n){var a;if(!t)return null;const r=(a=e.entity_ids)!=null&&a.length?[...e.entity_ids]:e.entity_id?[e.entity_id]:[];if(r.includes(t)||r.length>=n)return null;const i=[...r,t];return{entity_ids:i,entity_id:i[0]}}function tl(e){var t;return(t=e.entity_ids)!=null&&t.length?e.entity_ids:e.entity_id?[e.entity_id]:[]}function qC({widget:e,pageIndex:t,onUpdate:n,onDelete:r,onApplySize:i,hass:a}){if(!e)return s.jsxs("div",{className:"tm-widget-inspector tm-widget-inspector--empty",children:[s.jsx("div",{className:"tm-widget-inspector-empty-icon","aria-hidden":"true",children:s.jsx(oN,{size:22})}),s.jsx("p",{className:"tm-widget-inspector-empty-title",children:"Kein Widget gewählt"}),s.jsx("p",{className:"tm-widget-inspector-empty-text",children:"Tippe ein Widget an, um es zu bearbeiten — oder füge über „Widget“ bzw. eine freie Zelle eines hinzu."})]});const o=cs[e.type]||{},l=e.type==="popup",c=e.type==="coverPopup",u=e.type==="camera",d=e.type==="quickAction",m=e.type==="sankey",f=e.type==="energyTile",h=e.type==="sensor",v=e.type==="sensorStatus",w=e.type==="haCard";return s.jsxs("div",{className:"tm-widget-inspector",children:[s.jsxs("div",{className:"tm-widget-inspector-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"tm-widget-inspector-title",children:Ru(e)}),s.jsx("span",{className:"tm-widget-inspector-type",children:o.label||e.type})]}),s.jsx("button",{type:"button",className:"tm-widget-inspector-delete",onClick:()=>r(t,e.id),"aria-label":"Widget entfernen",children:s.jsx(S0,{size:16})})]}),s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("div",{className:"tm-widget-inspector-label",children:"Größe"}),s.jsx("div",{className:"tm-widget-inspector-sizes",children:Object.entries(cc).map(([x,p])=>s.jsxs("button",{type:"button",className:`tm-widget-inspector-size${e.w===p.w&&e.h===p.h?" active":""}`,onClick:()=>i(t,e.id,p),children:[s.jsx("span",{children:p.label}),s.jsxs("span",{className:"tm-widget-inspector-size-dim",children:[p.w,"×",p.h]})]},x))}),s.jsxs("div",{className:"tm-widget-inspector-meta",children:["Position ",e.x,",",e.y," · aktuell ",e.w,"×",e.h]})]}),e.type!=="shopping"&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Anzeige"}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Label"}),s.jsx("input",{className:"tm-input",type:"text",value:e.label||"",onChange:x=>n(t,e.id,{label:x.target.value}),placeholder:"Anzeigename"})]}),!w&&s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Icon"}),s.jsx("input",{className:"tm-input",type:"text",value:e.icon||"",onChange:x=>n(t,e.id,{icon:x.target.value}),placeholder:"mdi:sofa"})]})]}),d&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Modus"}),s.jsxs("div",{className:"tm-widget-inspector-sizes tm-widget-inspector-sizes--segment",children:[s.jsx("button",{type:"button",className:`tm-widget-inspector-size${e.mode!=="brightness"?" active":""}`,onClick:()=>n(t,e.id,{mode:"toggle"}),children:"Schalter"}),s.jsx("button",{type:"button",className:`tm-widget-inspector-size${e.mode==="brightness"?" active":""}`,onClick:()=>n(t,e.id,{mode:"brightness"}),children:"Helligkeit"})]})]}),f&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Kachel-Typ"}),s.jsx("div",{className:"tm-widget-inspector-sizes tm-widget-inspector-sizes--stack",children:Object.entries(Co).map(([x,p])=>s.jsxs("button",{type:"button",className:`tm-widget-inspector-size tm-widget-inspector-size--wide${e.tileKind===x?" active":""}`,onClick:()=>n(t,e.id,{tileKind:x,label:p.label,...x==="ev-heatpump"?{deviceImages:qi(e.deviceImages)}:{}}),children:[s.jsx("span",{children:p.label}),s.jsx("span",{className:"tm-widget-inspector-hint",children:p.description})]},x))})]}),f&&e.tileKind==="ev-heatpump"&&(()=>{const x=qi(e.deviceImages);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"E-Auto · Bilder"}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Bild je Zustand — optional per Entität steuern."}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Lädt"}),s.jsx("input",{className:"tm-input",type:"url",value:x.ev.charging,onChange:p=>n(t,e.id,sr(e,"ev",{charging:p.target.value})),placeholder:"https://… oder /local/…"})]}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Nicht am Laden"}),s.jsx("input",{className:"tm-input",type:"url",value:x.ev.idle,onChange:p=>n(t,e.id,sr(e,"ev",{idle:p.target.value})),placeholder:"https://… oder /local/…"})]}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Status-Entität (Laden)"}),s.jsx(Ve,{value:x.ev.stateEntity,onChange:p=>n(t,e.id,sr(e,"ev",{stateEntity:p})),domains:["binary_sensor","sensor","switch","input_boolean"],placeholder:"Optional — auch unter Einstellungen → E-Auto"})]})]}),s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Wärmepumpe · Bilder"}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Mit Licht"}),s.jsx("input",{className:"tm-input",type:"url",value:x.heatpump.lightOn,onChange:p=>n(t,e.id,sr(e,"heatpump",{lightOn:p.target.value})),placeholder:"https://… oder /local/…"})]}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Ohne Licht"}),s.jsx("input",{className:"tm-input",type:"url",value:x.heatpump.lightOff,onChange:p=>n(t,e.id,sr(e,"heatpump",{lightOff:p.target.value})),placeholder:"https://… oder /local/…"})]}),s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("span",{className:"tm-widget-inspector-field-label",children:"Licht-Entität"}),s.jsx(Ve,{value:x.heatpump.lightEntity,onChange:p=>n(t,e.id,sr(e,"heatpump",{lightEntity:p})),domains:["light","switch","binary_sensor","input_boolean"],placeholder:"Optional — Anzeige / Licht"})]})]})]})})(),w&&s.jsx(KC,{widget:e,pageIndex:t,onUpdate:n,hass:a}),!l&&!c&&!u&&!h&&!v&&!w&&e.type!=="shopping"&&!m&&!f&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Entität"}),s.jsx(Ve,{value:e.entity_id||"",onChange:x=>n(t,e.id,{entity_id:x}),domains:o.domains,placeholder:"Entität wählen…"})]}),v&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Kontakte (max. ",se.contactStatusEntities,")"]}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Fenster, Türen und Kontaktsensoren — das Icon zeigt offen oder geschlossen."}),s.jsx(Ve,{value:"",onChange:x=>{const p=el(e,x,se.contactStatusEntities);p&&n(t,e.id,p)},domains:o.domains,placeholder:"Fenster / Tür hinzufügen …"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:tl(e).map(x=>s.jsx(ci,{name:rt(a,x),onRemove:()=>{const p=(e.entity_ids||[]).filter(g=>g!==x);n(t,e.id,{entity_ids:p,entity_id:p[0]||""})}},x))})]}),h&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Sensoren (max. ",se.sensorEntities,")"]}),s.jsx(Ve,{value:"",onChange:x=>{const p=el(e,x,se.sensorEntities);p&&n(t,e.id,p)},domains:o.domains,placeholder:"Sensor hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:tl(e).map(x=>s.jsx(ci,{name:rt(a,x),onRemove:()=>{const p=(e.entity_ids||[]).filter(g=>g!==x);n(t,e.id,{entity_ids:p,entity_id:p[0]||""})}},x))}),s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:!!e.showHistory,onChange:x=>n(t,e.id,{showHistory:x.target.checked})}),s.jsx("span",{children:"Verlauf anzeigen"})]}),e.showHistory&&s.jsxs("div",{className:"tm-widget-inspector-field",children:[s.jsx("div",{className:"tm-widget-inspector-label",children:"Zeitraum"}),s.jsx("div",{className:"tm-widget-inspector-sizes tm-widget-inspector-sizes--hours",children:Iu.map(x=>s.jsx("button",{type:"button",className:`tm-widget-inspector-size${(e.historyHours||24)===x?" active":""}`,onClick:()=>n(t,e.id,{historyHours:x}),children:x===168?"7 Tage":`${x}h`},x))})]})]}),u&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Kameras (max. ",se.cameraEntities,")"]}),s.jsx(Ve,{value:"",onChange:x=>{const p=el(e,x,se.cameraEntities);p&&n(t,e.id,p)},domains:o.domains,placeholder:"Kamera hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:tl(e).map(x=>s.jsx(ci,{name:rt(a,x),onRemove:()=>{const p=(e.entity_ids||[]).filter(g=>g!==x);n(t,e.id,{entity_ids:p,entity_id:p[0]||""})}},x))})]}),c&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsxs("label",{className:"tm-widget-inspector-label",children:["Rolläden (max. ",se.coverPopupEntities,")"]}),s.jsx(Ve,{value:"",onChange:x=>{!x||(e.entity_ids||[]).includes(x)||(e.entity_ids||[]).length>=se.coverPopupEntities||n(t,e.id,{entity_ids:[...e.entity_ids||[],x]})},domains:o.domains,placeholder:"Rolladen hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:(e.entity_ids||[]).map(x=>s.jsx(ci,{name:rt(a,x),onRemove:()=>n(t,e.id,{entity_ids:e.entity_ids.filter(p=>p!==x)})},x))})]}),l&&s.jsxs("div",{className:"tm-widget-inspector-section",children:[s.jsx("label",{className:"tm-widget-inspector-label",children:"Entitäten"}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Deaktivierte Entitäten erscheinen nicht im Popup. Lichter mit Helligkeits-Slider zeigen Farbkreise direkt auf der Kachel."}),s.jsx(Ve,{value:"",onChange:x=>{!x||(e.entity_ids||[]).includes(x)||(e.entity_ids||[]).length>=se.popupEntities||n(t,e.id,{entity_ids:[...e.entity_ids||[],x]})},domains:o.domains,placeholder:"Entität hinzufügen…"}),s.jsx("div",{className:"tm-widget-inspector-entity-list",children:(e.entity_ids||[]).map(x=>{const p=(e.disabled_entity_ids||[]).includes(x),g=we(x)==="light";return s.jsxs(ci,{name:rt(a,x),className:`tm-widget-inspector-entity-row--popup${p?" disabled":""}`,onRemove:()=>{n(t,e.id,{entity_ids:e.entity_ids.filter(y=>y!==x),disabled_entity_ids:(e.disabled_entity_ids||[]).filter(y=>y!==x)})},children:[s.jsxs("label",{className:"tm-widget-inspector-entity-disable",children:[s.jsx("input",{type:"checkbox",checked:p,onChange:()=>{const y=e.disabled_entity_ids||[];n(t,e.id,{disabled_entity_ids:p?y.filter(_=>_!==x):[...y,x]})}}),s.jsx("span",{className:"tm-widget-inspector-entity-disable-label",children:"Aus"})]}),s.jsxs("div",{className:"tm-widget-inspector-entity-row-main",children:[s.jsx("span",{className:"tm-widget-inspector-entity-name",children:rt(a,x)}),g&&s.jsx("span",{className:"tm-widget-inspector-entity-hint",children:"Licht · Farben auf Kachel"})]})]},x)})})]})]})}const VC={weather:Vu,media:x0,camera:Xr,shopping:ms,quickAction:Xu,alarm:ds,cover:Ur,coverPopup:Ur,popup:h0,scene:Gu,sensor:Yu,sensorStatus:ra,sankey:d0,energyTile:_0,haCard:g0};function YC({activePageIndex:e,selectedWidget:t,onDone:n,onApplyPreset:r,onAddWidget:i,onUpdateWidget:a,onDeleteWidget:o,onApplySize:l,hass:c}){const[u,d]=b.useState(!1),[m,f]=b.useState(!1),h=x=>{i(e,x),f(!1)},v=()=>{d(x=>!x),f(!1)},w=()=>{f(x=>!x),d(!1)};return s.jsxs("div",{className:"tm-dashboard-editor",children:[s.jsxs("div",{className:"tm-dashboard-editor-toolbar",children:[s.jsxs("button",{type:"button",className:`tm-dashboard-editor-btn${u?" active":""}`,onClick:v,children:[s.jsx(nN,{size:16}),"Vorlagen"]}),s.jsxs("button",{type:"button",className:`tm-dashboard-editor-btn${m?" active":""}`,onClick:w,children:[s.jsx(st,{size:16}),"Widget"]}),s.jsxs("button",{type:"button",className:"tm-dashboard-editor-done",onClick:n,children:[s.jsx(m0,{size:16}),"Fertig"]})]}),u&&s.jsxs("div",{className:"tm-dashboard-editor-panel tm-dashboard-editor-presets",children:[s.jsxs("div",{className:"tm-dashboard-editor-panel-header",children:[s.jsx("strong",{children:"Layout-Vorlagen"}),s.jsx("button",{type:"button",className:"tm-dashboard-editor-close",onClick:()=>d(!1),"aria-label":"Schließen",children:s.jsx(Ue,{size:14})})]}),s.jsx("p",{className:"tm-widget-inspector-hint",children:"Entitäten bleiben erhalten — nur Anordnung und Größen ändern sich."}),s.jsx("div",{className:"tm-preset-grid",children:uc.map(x=>s.jsxs("button",{type:"button",className:"tm-preset-card",onClick:()=>{r(x.id),d(!1)},children:[s.jsx("div",{className:"tm-preset-preview",children:x.preview.map((p,g)=>s.jsx("span",{className:"tm-preset-block",style:{flex:p}},g))}),s.jsx("div",{className:"tm-preset-name",children:x.name}),s.jsx("div",{className:"tm-preset-desc",children:x.description})]},x.id))})]}),m&&s.jsxs("div",{className:"tm-dashboard-editor-panel tm-dashboard-editor-palette",children:[s.jsxs("div",{className:"tm-dashboard-editor-panel-header",children:[s.jsx("strong",{children:"Widget hinzufügen"}),s.jsx("button",{type:"button",className:"tm-dashboard-editor-close",onClick:()=>f(!1),"aria-label":"Schließen",children:s.jsx(Ue,{size:14})})]}),s.jsx("div",{className:"tm-palette-grid",children:Object.entries(cs).map(([x,p])=>{const g=VC[x]||st;return s.jsxs("button",{type:"button",className:"tm-palette-item",onClick:()=>h(x),children:[s.jsx("span",{className:"tm-palette-icon",children:s.jsx(g,{size:14})}),s.jsx("span",{children:p.label})]},x)})})]}),s.jsx("div",{className:"tm-dashboard-editor-inspector-wrap",children:s.jsx(qC,{widget:t,pageIndex:e,onUpdate:a,onDelete:o,onApplySize:l,hass:c})})]})}function bf({rooms:e,activeRoomId:t,onChange:n,disabled:r,className:i,optionClassName:a}){return s.jsx("ul",{className:i,role:"listbox","aria-label":"Räume",children:e.map(o=>s.jsx("li",{role:"option","aria-selected":o.id===t,children:s.jsx("button",{type:"button",className:`${a}${o.id===t?" active":""}`,disabled:r,onClick:()=>n(o.id),children:o.name})},o.id))})}function xf({rooms:e,activeRoomId:t,onChange:n,disabled:r=!1,variant:i="dropdown"}){const[a,o]=b.useState(!1),l=b.useRef(null),c=e.find(u=>u.id===t)||e[0];return b.useEffect(()=>{if(!a||i!=="dropdown")return;const u=m=>{const f=typeof m.composedPath=="function"?m.composedPath():[m.target];l.current&&f.includes(l.current)||o(!1)},d=m=>{m.key==="Escape"&&o(!1)};return document.addEventListener("mousedown",u),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u),document.removeEventListener("keydown",d)}},[a,i]),!c||e.length<=1?null:i==="sidebar"?s.jsxs("nav",{className:"tm-room-sidebar","aria-label":"Räume",children:[s.jsx("p",{className:"tm-room-sidebar-title",children:"Räume"}),s.jsx(bf,{rooms:e,activeRoomId:t,onChange:n,disabled:r,className:"tm-room-sidebar-list",optionClassName:"tm-room-sidebar-option"})]}):s.jsxs("div",{className:"tm-room-selector",ref:l,children:[s.jsxs("button",{type:"button",className:"tm-room-selector-trigger",onClick:()=>o(u=>!u),disabled:r,"aria-haspopup":"listbox","aria-expanded":a,"aria-label":"Raum wechseln",children:[s.jsx("span",{className:"tm-room-selector-label",children:c.name}),s.jsx(us,{size:18,className:`tm-room-selector-chevron${a?" open":""}`})]}),a&&s.jsx(bf,{rooms:e,activeRoomId:t,onChange:u=>{n(u),o(!1)},disabled:r,className:"tm-room-selector-menu",optionClassName:"tm-room-selector-option"})]})}function GC({user:e,onSettings:t,onScreensaver:n}){var tt,Te,Ln;const[r,i]=b.useState(new Date),[a,o]=b.useState(null),[l,c]=b.useState(!1),[u,d]=b.useState(0),[m,f]=b.useState(null),[h,v]=b.useState(!1),[w,x]=b.useState(!1),{hass:p,getEntity:g}=et(),{config:y,activeRoom:_,activeRoomId:S,setActiveRoomId:E,updateWidget:C,moveWidget:j,resizeWidget:M,applyWidgetSize:T,addWidget:I,addWidgetAt:U,removeWidget:Q,applyLayoutPreset:J,addLayoutPage:oe,removeLayoutPage:ve,moveLayoutPage:H,renameLayoutPage:$}=Ee(),A=b.useCallback(()=>o(null),[]),L=((tt=_==null?void 0:_.layout)==null?void 0:tt.pages)||[];b.useEffect(()=>{d(0)},[S]),b.useEffect(()=>{const F=setInterval(()=>i(new Date),1e3);return()=>clearInterval(F)},[]),b.useEffect(()=>{l||(f(null),v(!1))},[l]),b.useEffect(()=>{u>=L.length&&d(Math.max(0,L.length-1))},[u,L.length]);const k=b.useCallback(F=>{ve(F),d(te=>te>F?te-1:te===F?Math.max(0,F-1):te)},[ve]),N=b.useCallback((F,te)=>{H(F,te),d(ge=>ge===F?te:F<ge&&te>=ge?ge-1:F>ge&&te<=ge?ge+1:ge)},[H]),P=b.useCallback(()=>{const F=L.length;oe(),d(F)},[oe,L.length]),O=((Ln=(Te=L[u])==null?void 0:Te.widgets)==null?void 0:Ln.find(F=>F.id===m))||null,W=y.presence.map(F=>{const te=g(F.entity_id);return{...F,entity:te,name:F.label||te.name}}).filter(F=>F.entity.state==="home"),Y=()=>c(!1),q=h||w,he=y.roomSidebar&&y.rooms.length>1;return s.jsxs("div",{className:`tm-dashboard${l?" tm-dashboard--edit":""}${he?" tm-dashboard--room-sidebar":""}${a||h||w?" tm-dashboard--modal-open":""}`,children:[he&&s.jsx(xf,{variant:"sidebar",rooms:y.rooms,activeRoomId:S,onChange:E,disabled:q}),s.jsxs("div",{className:"tm-dashboard-main",children:[s.jsxs("header",{className:"tm-dashboard-header",children:[s.jsxs("div",{className:"tm-flex-col",children:[s.jsxs("div",{className:"tm-dashboard-title-row",children:[s.jsx("h1",{className:"tm-title-xl",style:l?void 0:{textShadow:"0 2px 4px rgba(0,0,0,0.5)"},children:l?"Dashboard bearbeiten":s.jsxs(s.Fragment,{children:["Guten Tag, ",s.jsx("span",{className:"tm-font-bold",children:e.name})]})}),!he&&s.jsx(xf,{rooms:y.rooms,activeRoomId:S,onChange:E,disabled:q})]}),s.jsx("p",{className:"tm-text-sm tm-opacity-70",style:l?void 0:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:l?"Leere Felder antippen oder Widgets ziehen und skalieren":yt(r,"EEEE, d. MMMM yyyy",{locale:Kn})})]}),s.jsxs("div",{className:"tm-dashboard-header-right",children:[!l&&s.jsx("div",{className:"tm-clock-lg",children:yt(r,"HH:mm")}),s.jsx("button",{type:"button",onClick:()=>c(F=>!F),className:`tm-btn-round${l?" active":""}`,"aria-label":l?"Bearbeitung beenden":"Dashboard bearbeiten",children:s.jsx(uN,{size:22})}),!l&&s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",onClick:t,className:"tm-btn-round","aria-label":"Einstellungen",children:s.jsx(ia,{size:24})}),s.jsx("button",{type:"button",onClick:n,className:"tm-btn-round","aria-label":"Bildschirmschoner",children:s.jsx(v0,{size:24})})]})]}),!l&&W.length>0&&s.jsx("div",{className:"tm-dashboard-header-presence tm-flex-center tm-gap-3",children:W.map(F=>{var te;return s.jsxs("div",{className:"tm-presence-chip",children:[s.jsx("div",{className:"tm-avatar-sm",children:(te=F.entity.attributes)!=null&&te.entity_picture?s.jsx("img",{src:Yr(p,F.entity.attributes.entity_picture),alt:F.name,className:"tm-avatar-img"}):s.jsx("span",{className:"tm-font-bold tm-text-xs",children:F.name[0]})}),s.jsx("span",{className:"tm-font-bold tm-text-sm tm-opacity-90",children:F.name})]},F.entity_id)})})]}),s.jsxs("div",{className:"tm-dashboard-body",children:[s.jsx(HN,{activePageIndex:u,onPageChange:d,editMode:l,pagesMeta:L,onOpenPageManage:()=>v(!0),children:L.map((F,te)=>s.jsx(kC,{page:F,pageIndex:te,editMode:l,selectedWidgetId:m,onSelectWidget:f,onMoveWidget:j,onResizeWidget:M,hass:p,getEntity:g,onOpenPopup:o,onUpdateWidget:C,onAddWidgetAt:U,onSlotPickerOpenChange:x},F.id))}),l&&s.jsx(YC,{activePageIndex:u,selectedWidget:O,onDone:Y,onApplyPreset:J,onAddWidget:I,onUpdateWidget:C,onDeleteWidget:Q,onApplySize:T,hass:p})]}),h&&l&&s.jsx(KN,{pages:L,activePageIndex:u,onClose:()=>v(!1),onSelectPage:F=>{d(F),v(!1)},onAddPage:P,onRemovePage:k,onMovePage:N,onRenamePage:$}),a&&!l&&(a.variant==="cover"?s.jsx(yj,{data:a,hass:p,getEntity:g,onClose:A}):s.jsx(mj,{data:a,hass:p,onClose:A}))]})]})}const QC=[{area_id:"wohnzimmer",name:"Wohnzimmer"},{area_id:"kueche",name:"Küche"},{area_id:"schlafzimmer",name:"Schlafzimmer"},{area_id:"bad",name:"Bad"},{area_id:"buero",name:"Büro"},{area_id:"flur",name:"Flur"}];async function XC(e){var t;if(nr(e))return[...QC];if(!((t=e==null?void 0:e.connection)!=null&&t.sendMessagePromise))return[];try{return(await e.connection.sendMessagePromise({type:"config/area_registry/list"})||[]).sort((r,i)=>r.name.localeCompare(i.name,"de"))}catch(n){return console.warn("The Monitor: Bereiche konnten nicht geladen werden",n),[]}}function JC(){const{config:e,addRoom:t,removeRoom:n,renameRoom:r,addRoomFromHaArea:i,updateDisplay:a}=Ee(),{hass:o,isConnected:l,revision:c}=et(),[u,d]=b.useState([]),[m,f]=b.useState(""),[h,v]=b.useState(!1);b.useEffect(()=>{let y=!1;return v(!0),XC(o).then(_=>{y||d(_)}).finally(()=>{y||v(!1)}),()=>{y=!0}},[o,l,c]);const w=new Set(e.rooms.map(y=>y.areaId).filter(Boolean)),x=u.filter(y=>!w.has(y.area_id)),p=e.rooms.length<Vi,g=()=>{const y=m.trim();!y||!p||(t(y),f(""))};return s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Räume"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",style:{lineHeight:1.5},children:"Jeder Raum hat ein eigenes Dashboard-Layout. Im Dashboard wechselst du zwischen den Räumen — per Dropdown oben oder als feste Sidebar links."}),e.rooms.length>1&&s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:e.roomSidebar,onChange:y=>a({roomSidebar:y.target.checked})}),s.jsx("span",{children:"Räume als feste Sidebar anzeigen"})]}),s.jsx("div",{className:"tm-room-config-list",children:e.rooms.map(y=>s.jsxs("div",{className:"tm-room-config-row",children:[s.jsx("input",{className:"tm-input tm-room-config-name",type:"text",value:y.name,onChange:_=>r(y.id,_.target.value),"aria-label":`Name für ${y.name}`}),e.rooms.length>1&&s.jsx("button",{type:"button",className:"tm-btn-secondary tm-room-config-remove",onClick:()=>n(y.id),children:"Entfernen"})]},y.id))}),p&&s.jsxs("div",{className:"tm-room-config-add",children:[s.jsx("input",{className:"tm-input",type:"text",value:m,onChange:y=>f(y.target.value),placeholder:"Neuer Raum …",onKeyDown:y=>{y.key==="Enter"&&g()}}),s.jsxs("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:g,disabled:!m.trim(),children:[s.jsx(st,{size:16}),"Raum hinzufügen"]})]}),!p&&s.jsxs("p",{className:"tm-text-sm tm-opacity-70",children:["Maximal ",Vi," Räume."]})]}),l&&s.jsxs("div",{className:"tm-setting-group",style:{marginTop:"1rem"},children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",style:{marginBottom:"0.75rem"},children:h?"Bereiche aus Home Assistant werden geladen …":x.length?"Bereiche aus Home Assistant — antippen zum Hinzufügen:":u.length?"Alle Home-Assistant-Bereiche sind bereits als Raum angelegt.":"Keine Bereiche in Home Assistant gefunden."}),x.length>0&&s.jsx("div",{className:"tm-room-suggestions",children:x.map(y=>s.jsxs("button",{type:"button",className:"tm-room-suggestion-chip",disabled:!p,onClick:()=>i(y),children:[s.jsx(st,{size:14}),y.name]},y.area_id))})]})]})}const lr={presence:["person"],vacuum:["vacuum"],windows:["cover","binary_sensor"],evState:["binary_sensor","sensor","switch","input_boolean"],evPower:["sensor"],evBattery:["sensor","binary_sensor"]};function ZC({title:e,entityId:t,section:n,domains:r,onSet:i}){return s.jsxs("div",{className:"tm-config-slot",children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",children:e}),s.jsx(Ve,{value:t,onChange:a=>i(n,a),domains:r,placeholder:"Entität wählen…"})]})}function eE(){var l,c,u,d,m;const{config:e,setSingleEntity:t,updateEv:n,addPresence:r,removePresence:i,addWindow:a,removeWindow:o}=Ee();return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[s.jsx(JC,{}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Dashboard-Layout"}),s.jsx("div",{className:"tm-setting-group",children:s.jsxs("p",{className:"tm-text-sm tm-opacity-70",style:{lineHeight:1.5},children:["Widgets, Größen und Positionen bearbeitest du direkt im Dashboard über den"," ",s.jsx("strong",{children:"Stift-Button"})," ","oben rechts. Dort findest du auch Layout-Vorlagen."]})})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Saugroboter"}),s.jsx(ZC,{title:"Status-Island",entityId:((l=e.vacuum)==null?void 0:l.entity_id)||"",section:"vacuum",domains:lr.vacuum,onSet:t})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"E-Auto (Status-Island)"}),s.jsx("p",{style:{fontSize:"0.875rem",opacity:.6,marginBottom:"0.75rem",lineHeight:1.5},children:"Grüne Notification mit Akku-Ring, wenn das Auto lädt — gleiche Entitäten wie auf der Energie-Kachel."}),s.jsxs("div",{className:"tm-config-slot",children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",children:"Anzeigename"}),s.jsx("input",{className:"tm-input",type:"text",value:((c=e.ev)==null?void 0:c.label)||"",onChange:f=>n({label:f.target.value}),placeholder:"Grandland"})]}),s.jsxs("div",{className:"tm-config-slot",style:{marginTop:"0.75rem"},children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",children:"Lade-Status"}),s.jsx(Ve,{value:((u=e.ev)==null?void 0:u.stateEntity)||"",onChange:f=>n({stateEntity:f}),domains:lr.evState,placeholder:"binary_sensor / sensor …"})]}),s.jsxs("div",{className:"tm-config-slot",style:{marginTop:"0.75rem"},children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",children:"Ladeleistung"}),s.jsx(Ve,{value:((d=e.ev)==null?void 0:d.powerEntity)||"",onChange:f=>n({powerEntity:f}),domains:lr.evPower,placeholder:"sensor.evcc_…_charge_power"})]}),s.jsxs("div",{className:"tm-config-slot",style:{marginTop:"0.75rem"},children:[s.jsx("div",{className:"tm-text-sm tm-opacity-70",children:"Akku (%)"}),s.jsx(Ve,{value:((m=e.ev)==null?void 0:m.batteryEntity)||"",onChange:f=>n({batteryEntity:f}),domains:lr.evBattery,placeholder:"sensor.battery …"})]})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Fenster (Status-Island)"}),s.jsx("p",{style:{fontSize:"0.875rem",opacity:.6,marginBottom:"0.75rem",lineHeight:1.5},children:"Die weiße Notification erscheint automatisch, wenn ein Fenster offen ist, sich öffnet oder schließt — ohne Automation."}),s.jsx(Ve,{value:"",onChange:f=>{f&&e.windows.length<se.windows&&a(f)},domains:lr.windows,placeholder:"Fenster / Kontakt hinzufügen …"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginTop:"0.75rem"},children:e.windows.map(f=>s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{padding:"0.5rem 0.75rem",background:"rgba(255,255,255,0.05)",borderRadius:"0.5rem"},children:[s.jsx("span",{children:f.label||f.entity_id}),s.jsx("button",{type:"button",className:"tm-btn-secondary",style:{padding:"0.25rem 0.75rem",minHeight:"auto",fontSize:"0.75rem"},onClick:()=>o(f.entity_id),children:"Entfernen"})]},f.entity_id))})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"},children:"Anwesenheit"}),s.jsx(Ve,{value:"",onChange:f=>{f&&e.presence.length<se.presence&&r(f)},domains:lr.presence,placeholder:"Person hinzufügen…"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginTop:"0.75rem"},children:e.presence.map(f=>s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",style:{padding:"0.5rem 0.75rem",background:"rgba(255,255,255,0.05)",borderRadius:"0.5rem"},children:[s.jsx("span",{children:f.label||f.entity_id}),s.jsx("button",{type:"button",className:"tm-btn-secondary",style:{padding:"0.25rem 0.75rem",minHeight:"auto",fontSize:"0.75rem"},onClick:()=>i(f.entity_id),children:"Entfernen"})]},f.entity_id))})]})]})}function tE({onBack:e}){const[t,n]=b.useState(80),[r,i]=b.useState(60),[a,o]=b.useState("display"),{exportToJson:l,importFromJson:c,config:u,updateScreensaver:d,updateAppearance:m}=Ee(),{isConnected:f,isMock:h,isEmbedded:v,isConnecting:w,connectionError:x,connect:p,login:g,disconnect:y,states:_}=et(),S=b.useRef(null),E=Object.keys(_).length,[C,j]=b.useState(jo),[M,T]=b.useState(""),[I,U]=b.useState(!1);b.useEffect(()=>{j(jo())},[f]);const Q=()=>{C.trim()&&g(C.trim())},J=async()=>{if(!(!C.trim()||!M.trim()))try{await p(C.trim(),M.trim()),T("")}catch{}},oe=()=>{const H=new Blob([l()],{type:"application/json"}),$=URL.createObjectURL(H),A=document.createElement("a");A.href=$,A.download="the-monitor-config.json",A.click(),URL.revokeObjectURL($)},ve=H=>{var L;const $=(L=H.target.files)==null?void 0:L[0];if(!$)return;const A=new FileReader;A.onload=()=>{c(A.result)||alert("Import fehlgeschlagen – ungültige JSON-Datei.")},A.readAsText($),H.target.value=""};return s.jsxs("div",{className:"tm-settings-panel",style:{height:"100%",display:"flex",flexDirection:"column",backdropFilter:"blur(12px)",padding:"2rem"},children:[s.jsxs("div",{className:"tm-flex-row tm-items-center tm-gap-6",style:{marginBottom:"1.5rem",flexShrink:0},children:[s.jsx("button",{type:"button",onClick:e,className:"tm-btn-round","aria-label":"Zurück",children:s.jsx(HS,{size:32})}),s.jsx("h2",{className:"tm-title-xl",children:"Einstellungen"})]}),s.jsxs("div",{className:"tm-flex-row tm-gap-3",style:{marginBottom:"1.5rem",flexShrink:0},children:[s.jsx("button",{type:"button",className:"tm-btn-secondary",style:{background:a==="display"?"rgba(var(--tm-accent-rgb), 0.4)":void 0},onClick:()=>o("display"),children:"Bildschirm & Ton"}),s.jsx("button",{type:"button",className:"tm-btn-secondary",style:{background:a==="dashboard"?"rgba(var(--tm-accent-rgb), 0.4)":void 0},onClick:()=>o("dashboard"),children:"Dashboard & Insel"})]}),s.jsxs("div",{className:"tm-settings-scroll",children:[a==="display"&&s.jsxs("div",{className:"tm-settings-layout",children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Bildschirm & Ton"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(Yi,{size:24}),s.jsx("span",{children:"Helligkeit"})]}),s.jsxs("span",{children:[t,"%"]})]}),s.jsx("input",{type:"range",min:"0",max:"100",value:t,onChange:H=>n(H.target.value),className:"tm-range"})]}),s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(N0,{size:24}),s.jsx("span",{children:"Lautstärke"})]}),s.jsxs("span",{children:[r,"%"]})]}),s.jsx("input",{type:"range",min:"0",max:"100",value:r,onChange:H=>i(H.target.value),className:"tm-range"})]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Farbset"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(Gu,{size:24}),s.jsx("span",{children:"Darstellung"})]}),s.jsx("div",{className:"tm-color-mode-row",children:Object.values(aS).map(H=>s.jsx("button",{type:"button",className:`tm-color-mode-btn${u.appearance.mode===H.id?" active":""}`,onClick:()=>m({mode:H.id}),children:H.label},H.id))})]}),s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsx("span",{className:"tm-text-sm tm-opacity-70",children:u.appearance.mode==="colorful"?"Wähle eine Farbe – alles wird in abstufenden Tönen dargestellt:":u.appearance.mode==="blackColorful"?"Pastell-Karten auf schwarzem Hintergrund – jede Kachel bekommt eine eigene Farbe.":"Farbwahl gilt nur im Bunt-Modus."}),s.jsx("div",{className:"tm-color-set-grid",children:Lo.map(H=>s.jsxs("button",{type:"button",className:`tm-color-set-btn${u.appearance.colorSet===H.id?" active":""}`,disabled:u.appearance.mode!=="colorful",onClick:()=>m({colorSet:H.id}),children:[s.jsx("span",{className:"tm-color-set-swatch",style:{background:H.preview}}),s.jsx("span",{className:"tm-color-set-label",children:H.label})]},H.id))})]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Bildschirmschoner"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:u.screensaver.enabled,onChange:H=>d({enabled:H.target.checked})}),s.jsx("span",{children:"Automatisch nach Inaktivität"})]}),u.screensaver.enabled&&s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(v0,{size:24}),s.jsx("span",{children:"Wartezeit"})]}),s.jsxs("span",{children:[u.screensaver.idleMinutes," ",u.screensaver.idleMinutes===1?"Minute":"Minuten"]})]}),s.jsx("input",{type:"range",className:"tm-range",min:"1",max:"30",step:"1",value:u.screensaver.idleMinutes,onChange:H=>d({idleMinutes:Number(H.target.value)})})]}),s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsx("span",{children:"Stil"}),s.jsxs("div",{className:"tm-color-mode-row",children:[s.jsx("button",{type:"button",className:`tm-color-mode-btn${u.screensaver.style!=="sexy"?" active":""}`,onClick:()=>d({style:"classic"}),children:"Klassisch"}),s.jsx("button",{type:"button",className:`tm-color-mode-btn${u.screensaver.style==="sexy"?" active":""}`,onClick:()=>d({style:"sexy"}),children:"Sexy"})]})]}),s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:u.screensaver.showDate,onChange:H=>d({showDate:H.target.checked})}),s.jsx("span",{children:"Datum anzeigen"})]}),s.jsxs("label",{className:"tm-setting-toggle",children:[s.jsx("input",{type:"checkbox",checked:u.screensaver.showWeather,onChange:H=>d({showWeather:H.target.checked})}),s.jsx("span",{children:"Wetter anzeigen"})]}),s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:u.screensaver.style==="sexy"?"Sexy zeigt ein großes Foto mit Uhrzeit und darunter eine schmale Leiste mit Wetter, Musik und Status.":"Der Bildschirmschoner lässt sich jederzeit manuell über das Monitor-Symbol im Dashboard starten."})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Home Assistant"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsxs("div",{className:"tm-flex-row tm-justify-between tm-items-center",children:[s.jsxs("div",{className:"tm-flex-center tm-gap-3",children:[s.jsx(j0,{size:24}),s.jsx("span",{children:"Verbindung"})]}),s.jsx("span",{style:{color:f?"#4ade80":h?"#fbbf24":"#f87171"},children:f?v?`Verbunden (${E} Entitäten)`:`Verbunden (${E} Entitäten)`:h?"Demo-Modus":w?"Verbinde…":"Nicht verbunden"})]}),v?s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:"Änderungen werden automatisch im Home-Assistant-Dashboard gespeichert und gelten auf allen Geräten (iPad, Mac, Wanddisplay)."}),s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:"Die Home-Assistant-Seitenleiste und die obere Leiste bleiben erreichbar."})]}):s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:f?"Verbunden mit deiner Home-Assistant-Instanz. Entitäten kannst du unter „Dashboard konfigurieren“ zuweisen.":"Als Panel in Home Assistant eingebunden bist du automatisch verbunden. Im Browser oder auf dem Tablet: URL eintragen und anmelden."}),!f&&s.jsxs(s.Fragment,{children:[s.jsxs("label",{className:"tm-flex-col tm-gap-2",children:[s.jsx("span",{className:"tm-text-sm tm-opacity-70",children:"Home Assistant URL"}),s.jsx("input",{type:"url",className:"tm-input",value:C,onChange:H=>j(H.target.value),placeholder:"http://homeassistant.local:8123"})]}),s.jsxs("button",{type:"button",className:"tm-btn-primary tm-flex-center tm-gap-2",onClick:Q,disabled:w||!C.trim(),children:[w?s.jsx(rN,{size:18,className:"tm-spin"}):s.jsx(aN,{size:18}),"Bei Home Assistant anmelden"]}),s.jsx("button",{type:"button",className:"tm-btn-secondary",onClick:()=>U(H=>!H),children:I?"Token-Login ausblenden":"Alternativ: Mit Zugriffstoken verbinden"}),I&&s.jsxs("div",{className:"tm-flex-col tm-gap-3",children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:"Erstelle unter Home Assistant → Profil → Sicherheit → Langzeit-Zugriffstoken einen Token und füge ihn hier ein."}),s.jsxs("label",{className:"tm-flex-col tm-gap-2",children:[s.jsx("span",{className:"tm-text-sm tm-opacity-70",children:"Zugriffstoken"}),s.jsx("input",{type:"password",className:"tm-input",value:M,onChange:H=>T(H.target.value),placeholder:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9…",autoComplete:"off"})]}),s.jsx("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:J,disabled:w||!C.trim()||!M.trim(),children:"Mit Token verbinden"})]})]}),f&&!v&&s.jsxs("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:y,disabled:w,children:[s.jsx(pN,{size:18})," Verbindung trennen"]}),x&&s.jsx("p",{className:"tm-text-sm",style:{color:"#f87171"},children:x})]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:500,opacity:.5,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Konfiguration sichern"}),s.jsxs("div",{className:"tm-setting-group",children:[s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:"Exportiere die Dashboard-Konfiguration als JSON-Backup oder importiere eine gespeicherte Konfiguration."}),s.jsxs("div",{className:"tm-flex-row tm-gap-3",children:[s.jsxs("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:oe,children:[s.jsx(XS,{size:18})," Exportieren"]}),s.jsxs("button",{type:"button",className:"tm-btn-secondary tm-flex-center tm-gap-2",onClick:()=>{var H;return(H=S.current)==null?void 0:H.click()},children:[s.jsx(hN,{size:18})," Importieren"]}),s.jsx("input",{ref:S,type:"file",accept:".json",style:{display:"none"},onChange:ve})]})]})]})]}),a==="dashboard"&&s.jsx(eE,{})]}),s.jsx("div",{style:{marginTop:"auto",textAlign:"center",opacity:.2,fontSize:"0.875rem",flexShrink:0,paddingTop:"1rem"},children:"The Monitor v0.1.0"})]})}const yc="vacuum.roborock",nE=15*60*1e3,rE={id:yc,name:"Roborock",state:"cleaning",attributes:{status:"Reinigt Wohnzimmer …",battery_level:78},domain:"vacuum"};function wf({size:e=24}){return s.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"16",cy:"16",r:"14",fill:"#1a1a1a"}),s.jsx("circle",{cx:"16",cy:"16",r:"10",fill:"#2d2d2d"}),s.jsx("circle",{cx:"16",cy:"16",r:"4",fill:"#444"}),s.jsx("circle",{cx:"22",cy:"10",r:"2",fill:"#ff6b2b"})]})}function iE({progress:e,size:t=36,stroke:n=3,className:r=""}){const i=(t-n)/2,a=2*Math.PI*i,o=a-e/100*a;return s.jsxs("svg",{width:t,height:t,className:`tm-vi-ring ${r}`.trim(),"aria-hidden":"true",children:[s.jsx("circle",{cx:t/2,cy:t/2,r:i,fill:"none",stroke:"var(--tm-vi-track)",strokeWidth:n}),s.jsx("circle",{cx:t/2,cy:t/2,r:i,fill:"none",stroke:"var(--tm-vi-accent)",strokeWidth:n,strokeLinecap:"round",strokeDasharray:a,strokeDashoffset:o,transform:`rotate(-90 ${t/2} ${t/2})`})]})}const Ma=b.memo(iE);function aE({window:e,onClose:t,overdue:n=!1}){const r=e.domain==="cover"&&["open","opening"].includes(e.state);return s.jsxs("div",{className:`tm-vi-window-row${n?" tm-vi-window-row-overdue":""}`,children:[s.jsxs("div",{className:"tm-vi-window-info",children:[s.jsx("span",{className:"tm-vi-window-name",children:e.label}),s.jsx("span",{className:"tm-vi-window-state",children:Yh(e)})]}),r&&s.jsx("button",{type:"button",className:"tm-vi-btn tm-vi-btn-close",onClick:i=>{i.stopPropagation(),t(e.id)},"aria-label":`${e.label} schließen`,children:s.jsx(Ue,{size:16})})]})}function oE(){var Te,Ln;const{hass:e,revision:t,getEntity:n,isMock:r}=et(),{config:i}=Ee(),[a,o]=b.useState(!1),[l]=b.useState(()=>Date.now()),[c,u]=b.useState(0),d=b.useRef(new Map),m=jx(e,(Te=i.vacuum)==null?void 0:Te.entity_id,r,yc)||yc,f=n(m),h=(f.state==="unavailable"||!f.id)&&r?rE:f,v=Sx(h.state,h.attributes),w=ta(i,null,r),x=i2(i,r),g=a2(e,i,null,r)&&dg(e,w,r),y=c2(e,x,r?67:null),_=b.useMemo(()=>Lx(e,i.windows),[e,i.windows,t]),S=_.length>0,E=v,C=g,j=C?l2(e,i,r):null,M=mg(j),T=E||S||C,I=b.useMemo(()=>_.filter(Ax),[_]);b.useEffect(()=>{const F=Date.now(),te=new Set(I.map(ge=>ge.id));for(const ge of I)d.current.has(ge.id)||d.current.set(ge.id,ge.lastChanged||F);for(const ge of[...d.current.keys()])te.has(ge)||d.current.delete(ge)},[I]);const U=b.useMemo(()=>{const F=Date.now(),te=new Set;for(const ge of I){const aa=d.current.get(ge.id);aa&&F-aa>=nE&&te.add(ge.id)}return te},[I,c]),Q=U.size>0;b.useEffect(()=>{T||o(!1)},[T]),b.useEffect(()=>{const F=setInterval(()=>u(te=>te+1),1e3);return()=>clearInterval(F)},[]);const J=l?Math.floor((Date.now()-l)/1e3):0,oe=b.useMemo(()=>Ex(h,J),[h,J,c,t]),ve=Cx(h),H=u2(i),$=zx(_),A=Tx(J),L=b.useMemo(()=>{const F=[];C&&F.push(y!=null?`${H} · ${y}%`:H),S&&F.push($),E&&F.push(ve);let te=F.join(" · ");return Q&&S&&(te=`⚠ ${te}`),te},[C,H,y,S,$,E,ve,Q]),k=b.useCallback(()=>{o(F=>!F)},[]),N=b.useCallback(()=>{o(!1)},[]),P=b.useCallback(F=>{F.stopPropagation(),Kx(e,m)},[e,m]),O=b.useCallback(F=>{F.stopPropagation(),qx(e,m)},[e,m]),W=b.useCallback(F=>{vu(e,F)},[e]);if(!T)return null;const Y=C?d2(i,y,j):Q&&S?U.size===1?`${((Ln=I.find(F=>U.has(F.id)))==null?void 0:Ln.label)||"Fenster"} seit über 15 Min. offen`:`${U.size} Fenster seit über 15 Min. offen`:S&&E?"Fenster und Sauger sind aktiv":S?_.length===1?`${_[0].label} — ${Yh(_[0])}`:`${_.length} Fenster brauchen Aufmerksamkeit`:`${h.name} reinigt dein Zuhause …`,q=C?" tm-vi-ev-alert":Q?" tm-vi-window-alert":"",he=C?" tm-vi-thumb-ev-alert":Q?" tm-vi-thumb-alert":"",tt=C?" tm-vi-text-ev-alert":Q?" tm-vi-text-alert":"";return s.jsxs(s.Fragment,{children:[a&&s.jsx("button",{type:"button",className:"tm-vi-backdrop",onClick:N,"aria-label":"Einklappen"}),s.jsx("div",{className:"tm-vi-wrap",children:s.jsxs("button",{type:"button",className:`tm-vi${a?" tm-vi-expanded":""}${q}`,onClick:k,"aria-expanded":a,"aria-label":L,children:[s.jsxs("div",{className:"tm-vi-bar",children:[s.jsx("span",{className:`tm-vi-thumb${he}`,children:C?s.jsx(Qm,{size:22,strokeWidth:2.25}):S?s.jsx(ra,{size:22,strokeWidth:2.25}):s.jsx(wf,{size:28})}),s.jsx("span",{className:`tm-vi-text${tt}`,children:L}),C?s.jsx("span",{className:"tm-vi-ring-wrap tm-vi-ring-wrap-sm tm-vi-ring-ev",children:s.jsx(Ma,{progress:y??0,size:36,className:"tm-vi-ring-sm"})}):E?s.jsx("span",{className:"tm-vi-ring-wrap tm-vi-ring-wrap-sm",children:s.jsx(Ma,{progress:oe,size:36,className:"tm-vi-ring-sm"})}):s.jsx("span",{className:`tm-vi-badge${Q?" tm-vi-badge-alert":""}`,children:_.length})]}),s.jsx("div",{className:"tm-vi-detail",children:s.jsxs("div",{className:"tm-vi-detail-inner",children:[s.jsx("p",{className:"tm-vi-subtitle",children:Y}),S&&s.jsx("div",{className:"tm-vi-window-list",children:_.map(F=>s.jsx(aE,{window:F,onClose:W,overdue:U.has(F.id)},F.id))}),C&&s.jsxs("div",{className:"tm-vi-body",children:[s.jsxs("div",{className:"tm-vi-ev-metrics",children:[s.jsxs("div",{className:"tm-vi-timer-block",children:[s.jsx("span",{className:"tm-vi-timer-label",children:"Ladeleistung"}),s.jsx("span",{className:"tm-vi-timer-value tm-vi-timer-value-ev",children:M})]}),s.jsxs("div",{className:"tm-vi-timer-block",children:[s.jsx("span",{className:"tm-vi-timer-label",children:"Akku"}),s.jsx("span",{className:"tm-vi-timer-value tm-vi-timer-value-ev tm-vi-timer-value-secondary",children:y!=null?`${y}%`:"—"})]})]}),s.jsx("div",{className:"tm-vi-progress-block",children:s.jsxs("div",{className:"tm-vi-progress-ring-lg tm-vi-ring-ev",children:[s.jsx(Ma,{progress:y??0,size:88,stroke:5,className:"tm-vi-ring-lg"}),s.jsx("span",{className:"tm-vi-progress-icon",children:s.jsx(Qm,{size:44,strokeWidth:2})})]})})]}),E&&s.jsxs("div",{className:"tm-vi-body",children:[s.jsxs("div",{className:"tm-vi-timer-block",children:[s.jsx("span",{className:"tm-vi-timer-label",children:"Timer"}),s.jsx("span",{className:"tm-vi-timer-value",children:A})]}),s.jsx("div",{className:"tm-vi-progress-block",children:s.jsxs("div",{className:"tm-vi-progress-ring-lg",children:[s.jsx(Ma,{progress:oe,size:88,stroke:5,className:"tm-vi-ring-lg"}),s.jsx("span",{className:"tm-vi-progress-icon",children:s.jsx(wf,{size:48})})]})})]}),s.jsxs("div",{className:"tm-vi-footer",children:[E?s.jsxs("div",{className:"tm-vi-actions",children:[s.jsx("button",{type:"button",className:"tm-vi-btn tm-vi-btn-pause",onClick:P,"aria-label":"Pausieren",children:s.jsx(Qu,{size:18,fill:"currentColor"})}),s.jsx("button",{type:"button",className:"tm-vi-btn tm-vi-btn-stop",onClick:O,"aria-label":"Zur Basis",children:s.jsx(Ue,{size:18})})]}):s.jsx("span",{}),s.jsxs("span",{className:"tm-vi-open",children:["Dashboard",s.jsx(qS,{size:16})]})]})]})})]})})]})}const sE={id:0,name:"Zuhause",color:"#6366f1"};function V0(){var u,d;const{config:e}=Ee(),t=b.useMemo(()=>bS(e.appearance),[e.appearance]),n=((u=e.appearance)==null?void 0:u.mode)!=="light"&&((d=e.appearance)==null?void 0:d.mode)!=="blackColorful",[r,i]=b.useState("dashboard"),[a]=b.useState(sE),[o,l]=b.useState(Date.now()),c=b.useCallback(()=>{l(Date.now()),r==="screensaver"&&i("dashboard")},[r]);return b.useEffect(()=>{if(!e.screensaver.enabled)return;const m=()=>c(),f=e.screensaver.idleMinutes*60*1e3;window.addEventListener("mousemove",m),window.addEventListener("touchstart",m),window.addEventListener("click",m),window.addEventListener("keydown",m);const h=setInterval(()=>{Date.now()-o>f&&r!=="screensaver"&&r!=="settings"&&i("screensaver")},1e3);return()=>{window.removeEventListener("mousemove",m),window.removeEventListener("touchstart",m),window.removeEventListener("click",m),window.removeEventListener("keydown",m),clearInterval(h)}},[o,r,c,e.screensaver.enabled,e.screensaver.idleMinutes]),s.jsxs("div",{className:"tm-full-screen",...t,children:[n&&s.jsx("div",{className:"tm-absolute-fill tm-z-0 tm-bg-cover",style:{backgroundImage:`url("${e.backgroundImage}")`,opacity:"var(--tm-bg-image-opacity)"}}),s.jsx("div",{className:"tm-absolute-fill tm-z-0 tm-overlay-gradient"}),s.jsxs("div",{className:"tm-absolute-fill tm-z-10",children:[r==="dashboard"&&s.jsx(oE,{}),r==="screensaver"&&s.jsx(WN,{}),r==="dashboard"&&s.jsx("div",{className:"tm-full-screen tm-animate-fade",children:s.jsx(GC,{user:a,onSettings:()=>i("settings"),onScreensaver:()=>i("screensaver")})}),r==="settings"&&s.jsx("div",{className:"tm-full-screen tm-animate-fade",children:s.jsx(tE,{onBack:()=>i("dashboard")})})]})]})}const Y0=`
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
`,lE=`
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
`,cE=`
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
`,G0="custom:the-monitor-dashboard";function uE(){const e=window.location.pathname.match(/^\/([^/]+)\/\d+/);return(e==null?void 0:e[1])??"the-monitor"}function dE(e){var r;const t=je(e),n=(r=t.rooms)==null?void 0:r[0];return{type:G0,rooms:t.rooms,layout:n==null?void 0:n.layout,layoutPreset:n==null?void 0:n.layoutPreset,vacuum:t.vacuum,ev:t.ev,windows:t.windows,presence:t.presence,backgroundImage:t.backgroundImage,screensaver:t.screensaver,appearance:t.appearance}}function mE(e,t){var a;if(!((a=e==null?void 0:e.views)!=null&&a.length))return null;const n=e.views.map(o=>{var l;return{...o,cards:((l=o.cards)==null?void 0:l.map(c=>(c==null?void 0:c.type)===G0?{...t}:c))??o.cards}}),{kiosk_mode:r,...i}=e;return{...i,views:n}}async function fE(e,t){var i;if(!((i=e==null?void 0:e.connection)!=null&&i.sendMessagePromise))return!1;const n=uE(),r=dE(t);try{const a=await e.connection.sendMessagePromise({type:"lovelace/config",url_path:n,force:!1}),o=mE(a,r);return o?(await e.connection.sendMessagePromise({type:"lovelace/config/save",url_path:n,config:o}),!0):(console.warn("The Monitor: refused to persist — dashboard config invalid"),!1)}catch(a){return console.warn("The Monitor: could not persist config to Lovelace",a),!1}}let nl=null,kf=Promise.resolve();function pE(e,t,n=1200){e!=null&&e.connection&&(nl&&window.clearTimeout(nl),nl=window.setTimeout(()=>{kf=kf.then(()=>fE(e,t)).catch(()=>{})},n))}const _f="the-monitor-kiosk-cleared",hE=["kiosk","hide_header","hide_sidebar","hide_menubutton","hide_overflow","hide_settings","hide_notifications","hide_account","hide_search","hide_assistant","hide_refresh","hide_unused_entities","hide_reload_resources","hide_edit_dashboard","block_overflow","block_mouse","block_context_menu"];function gE(){let e=!1;try{const t=[];for(let n=0;n<window.localStorage.length;n+=1){const r=window.localStorage.key(n);r&&t.push(r)}t.forEach(n=>{n.startsWith("km")&&(window.localStorage.removeItem(n),e=!0)})}catch{}return e}function yE(){const e=new URL(window.location.href);let t=!1;return hE.forEach(n=>{e.searchParams.has(n)&&(e.searchParams.delete(n),t=!0)}),t&&window.history.replaceState(window.history.state,"",`${e.pathname}${e.search}${e.hash}`),t}function vE(){if(typeof window>"u"||window.sessionStorage.getItem(_f)==="1")return;const e=gE(),t=yE();window.sessionStorage.setItem(_f,"1"),(e||t)&&window.location.reload()}const Oo="the-monitor",bE="The Monitor",Sf="the-monitor-sidebar-checked",xE={views:[{title:"Monitor",type:"panel",cards:[{type:"custom:the-monitor-dashboard"}]}]};function wE(e){return new Promise(t=>{window.setTimeout(t,e)})}function ji(e,t){return typeof e.callWS=="function"?e.callWS(t):e.connection.sendMessagePromise(t)}async function kE(){var t,n;const e=Date.now()+2e4;for(;Date.now()<e;){const r=(t=document.querySelector("home-assistant"))==null?void 0:t.hass;if(r!=null&&r.user&&((n=r.connection)!=null&&n.sendMessagePromise))return r;await wE(300)}return null}function _E(e){const t=`${(e==null?void 0:e.message)||e}`;return/config_not_found|No config found/i.test(t)}async function SE(e){var t;try{const n=await ji(e,{type:"lovelace/config",url_path:Oo,force:!1});if((t=n==null?void 0:n.views)!=null&&t.length)return}catch(n){if(!_E(n))throw n}await ji(e,{type:"lovelace/config/save",url_path:Oo,config:xE})}async function NE(){var t;if(typeof window>"u"||typeof sessionStorage>"u"||document.getElementById("root")&&!document.querySelector("home-assistant")||sessionStorage.getItem(Sf)==="1")return;const e=await kE();if((t=e==null?void 0:e.user)!=null&&t.is_admin)try{const n=await ji(e,{type:"lovelace/dashboards/list"}),r=(Array.isArray(n)?n:[]).find(i=>i.url_path===Oo);r?r.show_in_sidebar===!1&&r.id&&await ji(e,{type:"lovelace/dashboards/update",dashboard_id:r.id,show_in_sidebar:!0}):await ji(e,{type:"lovelace/dashboards/create",url_path:Oo,title:bE,icon:"mdi:monitor-dashboard",require_admin:!1,show_in_sidebar:!0}),await SE(e),sessionStorage.setItem(Sf,"1")}catch(n){console.warn("The Monitor: sidebar dashboard was not created",n)}}class jE extends _c.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t){console.error("The Monitor render error:",t)}render(){return this.state.error?s.jsxs("div",{className:"tm-full-screen tm-flex-col tm-flex-center",style:{padding:"2rem",textAlign:"center",gap:"1rem"},children:[s.jsx("h2",{className:"tm-title-xl",children:"The Monitor — Fehler"}),s.jsx("p",{className:"tm-text-sm tm-opacity-70",children:this.state.error.message}),s.jsx("button",{type:"button",className:"tm-btn-secondary",onClick:()=>this.setState({error:null}),children:"Erneut versuchen"})]}):this.props.children}}const Nf="the-monitor-dashboard";function vc(e,t){let n=document.getElementById(e);n||(n=document.createElement("style"),n.id=e,document.head.appendChild(n)),n.textContent=t}function CE(e){try{return Gm(e,{embedded:!0})}catch(t){return console.error("The Monitor: invalid config, using defaults",t),Gm({},{embedded:!0})}}function EE({initialConfig:e,onRegisterHassUpdate:t,onConfigSaved:n,enableMock:r=!1}){return s.jsx(ug,{onRegisterUpdate:t,enableMock:r,children:s.jsx(l0,{initialConfig:e,onConfigSaved:n,children:s.jsx(jE,{children:s.jsx(V0,{})})})})}class TE extends HTMLElement{static getStubConfig(){return{}}static getGridOptions(){return{columns:48,rows:1}}getCardSize(){return 12}constructor(){super(),this._hass=null,this._config={},this._root=null,this._updateHass=null,this._shadow=null,this._mountPoint=null}setConfig(t){this._config=t||{},this._root&&this._renderApp()}_renderApp(){if(!this._root)return;const t=CE(this._config);try{this._root.render(s.jsx(_c.StrictMode,{children:s.jsx(EE,{initialConfig:t,onRegisterHassUpdate:n=>{this._updateHass=n,this._hass&&n(this._hass)},onConfigSaved:n=>{this._hass&&pE(this._hass,n)}})}))}catch(n){console.error("The Monitor: render failed",n)}}set hass(t){var n;this._hass=t,(n=this._updateHass)==null||n.call(this,t)}connectedCallback(){if(vE(),vc("the-monitor-ha-shell",lE),vc("the-monitor-card-host",cE),!this._shadow){this._shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=Y0,this._shadow.appendChild(t),this._mountPoint=document.createElement("div"),this._mountPoint.style.height="100%",this._mountPoint.style.width="100%",this._mountPoint.style.display="block",this._mountPoint.style.boxSizing="border-box",this._shadow.appendChild(this._mountPoint),BN(this._shadow)}this._root||(this._root=Ga.createRoot(this._mountPoint)),this._renderApp()}disconnectedCallback(){var t;(t=document.getElementById("the-monitor-ha-shell"))==null||t.remove(),UN(this._shadow),this._updateHass=null,this._root&&(this._root.unmount(),this._root=null)}}try{customElements.get(Nf)||customElements.define(Nf,TE)}catch(e){console.error("Failed to register The Monitor dashboard:",e)}NE();const jf=document.getElementById("root");jf&&(vc("the-monitor-dev-styles",Y0),Ga.createRoot(jf).render(s.jsx(_c.StrictMode,{children:s.jsx(ug,{enableMock:!0,children:s.jsx(l0,{initialConfig:TS(),children:s.jsx(V0,{})})})})));
