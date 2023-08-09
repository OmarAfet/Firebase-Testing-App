function K1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function G1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xy={exports:{}},su={},Yy={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),Q1=Symbol.for("react.portal"),X1=Symbol.for("react.fragment"),Y1=Symbol.for("react.strict_mode"),J1=Symbol.for("react.profiler"),Z1=Symbol.for("react.provider"),eT=Symbol.for("react.context"),tT=Symbol.for("react.forward_ref"),nT=Symbol.for("react.suspense"),rT=Symbol.for("react.memo"),iT=Symbol.for("react.lazy"),sm=Symbol.iterator;function sT(t){return t===null||typeof t!="object"?null:(t=sm&&t[sm]||t["@@iterator"],typeof t=="function"?t:null)}var Jy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zy=Object.assign,e_={};function Ji(t,e,n){this.props=t,this.context=e,this.refs=e_,this.updater=n||Jy}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ji.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function t_(){}t_.prototype=Ji.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=e_,this.updater=n||Jy}var zd=Bd.prototype=new t_;zd.constructor=Bd;Zy(zd,Ji.prototype);zd.isPureReactComponent=!0;var om=Array.isArray,n_=Object.prototype.hasOwnProperty,Hd={current:null},r_={key:!0,ref:!0,__self:!0,__source:!0};function i_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)n_.call(e,r)&&!r_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vo,type:t,key:s,ref:o,props:i,_owner:Hd.current}}function oT(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function aT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var am=/\/+/g;function lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?aT(""+t.key):e.toString(36)}function za(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vo:case Q1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+lc(o,0):r,om(i)?(n="",t!=null&&(n=t.replace(am,"$&/")+"/"),za(i,e,n,"",function(u){return u})):i!=null&&(Wd(i)&&(i=oT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(am,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",om(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+lc(s,a);o+=za(s,e,n,l,i)}else if(l=sT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+lc(s,a++),o+=za(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function da(t,e,n){if(t==null)return t;var r=[],i=0;return za(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},Ha={transition:null},uT={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Ha,ReactCurrentOwner:Hd};K.Children={map:da,forEach:function(t,e,n){da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return da(t,function(){e++}),e},toArray:function(t){return da(t,function(e){return e})||[]},only:function(t){if(!Wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=Ji;K.Fragment=X1;K.Profiler=J1;K.PureComponent=Bd;K.StrictMode=Y1;K.Suspense=nT;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uT;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)n_.call(e,l)&&!r_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vo,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:eT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Z1,_context:t},t.Consumer=t};K.createElement=i_;K.createFactory=function(t){var e=i_.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:tT,render:t}};K.isValidElement=Wd;K.lazy=function(t){return{$$typeof:iT,_payload:{_status:-1,_result:t},_init:lT}};K.memo=function(t,e){return{$$typeof:rT,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Ha.transition;Ha.transition={};try{t()}finally{Ha.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return at.current.useCallback(t,e)};K.useContext=function(t){return at.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return at.current.useDeferredValue(t)};K.useEffect=function(t,e){return at.current.useEffect(t,e)};K.useId=function(){return at.current.useId()};K.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return at.current.useMemo(t,e)};K.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};K.useRef=function(t){return at.current.useRef(t)};K.useState=function(t){return at.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return at.current.useTransition()};K.version="18.2.0";Yy.exports=K;var T=Yy.exports;const ee=G1(T),cT=K1({__proto__:null,default:ee},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hT=T,dT=Symbol.for("react.element"),fT=Symbol.for("react.fragment"),pT=Object.prototype.hasOwnProperty,mT=hT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gT={key:!0,ref:!0,__self:!0,__source:!0};function s_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pT.call(e,r)&&!gT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dT,type:t,key:s,ref:o,props:i,_owner:mT.current}}su.Fragment=fT;su.jsx=s_;su.jsxs=s_;Xy.exports=su;var w=Xy.exports,hh={},o_={exports:{}},St={},a_={exports:{}},l_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,b){var W=x.length;x.push(b);e:for(;0<W;){var ge=W-1>>>1,Pe=x[ge];if(0<i(Pe,b))x[ge]=b,x[W]=Pe,W=ge;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var b=x[0],W=x.pop();if(W!==b){x[0]=W;e:for(var ge=0,Pe=x.length,ca=Pe>>>1;ge<ca;){var vr=2*(ge+1)-1,ac=x[vr],Er=vr+1,ha=x[Er];if(0>i(ac,W))Er<Pe&&0>i(ha,ac)?(x[ge]=ha,x[Er]=W,ge=Er):(x[ge]=ac,x[vr]=W,ge=vr);else if(Er<Pe&&0>i(ha,W))x[ge]=ha,x[Er]=W,ge=Er;else break e}}return b}function i(x,b){var W=x.sortIndex-b.sortIndex;return W!==0?W:x.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(x){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=x)r(u),b.sortIndex=b.expirationTime,e(l,b);else break;b=n(u)}}function E(x){if(_=!1,g(x),!y)if(n(l)!==null)y=!0,Ve(I);else{var b=n(u);b!==null&&yt(E,b.startTime-x)}}function I(x,b){y=!1,_&&(_=!1,p(k),k=-1),m=!0;var W=d;try{for(g(b),h=n(l);h!==null&&(!(h.expirationTime>b)||x&&!Ie());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var Pe=ge(h.expirationTime<=b);b=t.unstable_now(),typeof Pe=="function"?h.callback=Pe:h===n(l)&&r(l),g(b)}else r(l);h=n(l)}if(h!==null)var ca=!0;else{var vr=n(u);vr!==null&&yt(E,vr.startTime-b),ca=!1}return ca}finally{h=null,d=W,m=!1}}var C=!1,P=null,k=-1,H=5,F=-1;function Ie(){return!(t.unstable_now()-F<H)}function ke(){if(P!==null){var x=t.unstable_now();F=x;var b=!0;try{b=P(!0,x)}finally{b?nt():(C=!1,P=null)}}else C=!1}var nt;if(typeof f=="function")nt=function(){f(ke)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,ln=Be.port2;Be.port1.onmessage=ke,nt=function(){ln.postMessage(null)}}else nt=function(){v(ke,0)};function Ve(x){P=x,C||(C=!0,nt())}function yt(x,b){k=v(function(){x(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,Ve(I))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(d){case 1:case 2:case 3:var b=3;break;default:b=d}var W=d;d=b;try{return x()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,b){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var W=d;d=x;try{return b()}finally{d=W}},t.unstable_scheduleCallback=function(x,b,W){var ge=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ge+W:ge):W=ge,x){case 1:var Pe=-1;break;case 2:Pe=250;break;case 5:Pe=1073741823;break;case 4:Pe=1e4;break;default:Pe=5e3}return Pe=W+Pe,x={id:c++,callback:b,priorityLevel:x,startTime:W,expirationTime:Pe,sortIndex:-1},W>ge?(x.sortIndex=W,e(u,x),n(l)===null&&x===n(u)&&(_?(p(k),k=-1):_=!0,yt(E,W-ge))):(x.sortIndex=Pe,e(l,x),y||m||(y=!0,Ve(I))),x},t.unstable_shouldYield=Ie,t.unstable_wrapCallback=function(x){var b=d;return function(){var W=d;d=b;try{return x.apply(this,arguments)}finally{d=W}}}})(l_);a_.exports=l_;var yT=a_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_=T,It=yT;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c_=new Set,Js={};function Yr(t,e){Vi(t,e),Vi(t+"Capture",e)}function Vi(t,e){for(Js[t]=e,t=0;t<e.length;t++)c_.add(e[t])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dh=Object.prototype.hasOwnProperty,_T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lm={},um={};function vT(t){return dh.call(um,t)?!0:dh.call(lm,t)?!1:_T.test(t)?um[t]=!0:(lm[t]=!0,!1)}function ET(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wT(t,e,n,r){if(e===null||typeof e>"u"||ET(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qd,Kd);je[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qd,Kd);je[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qd,Kd);je[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gd(t,e,n,r){var i=je.hasOwnProperty(e)?je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wT(e,n,i,r)&&(n=null),r||i===null?vT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kn=u_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),ui=Symbol.for("react.portal"),ci=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),fh=Symbol.for("react.profiler"),h_=Symbol.for("react.provider"),d_=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),ph=Symbol.for("react.suspense"),mh=Symbol.for("react.suspense_list"),Yd=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),f_=Symbol.for("react.offscreen"),cm=Symbol.iterator;function hs(t){return t===null||typeof t!="object"?null:(t=cm&&t[cm]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,uc;function Ts(t){if(uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uc=e&&e[1]||""}return`
`+uc+t}var cc=!1;function hc(t,e){if(!t||cc)return"";cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ts(t):""}function TT(t){switch(t.tag){case 5:return Ts(t.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function gh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ci:return"Fragment";case ui:return"Portal";case fh:return"Profiler";case Qd:return"StrictMode";case ph:return"Suspense";case mh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case d_:return(t.displayName||"Context")+".Consumer";case h_:return(t._context.displayName||"Context")+".Provider";case Xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yd:return e=t.displayName||null,e!==null?e:gh(t.type)||"Memo";case xn:e=t._payload,t=t._init;try{return gh(t(e))}catch{}}return null}function IT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gh(e);case 8:return e===Qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function p_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RT(t){var e=p_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pa(t){t._valueTracker||(t._valueTracker=RT(t))}function m_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=p_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yh(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g_(t,e){e=e.checked,e!=null&&Gd(t,"checked",e,!1)}function _h(t,e){g_(t,e);var n=sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vh(t,e.type,n):e.hasOwnProperty("defaultValue")&&vh(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vh(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Is=Array.isArray;function Ii(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Eh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Is(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function y_(t,e){var n=sr(e.value),r=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function __(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?__(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ma,v_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ST=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(t){ST.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ls[e]=Ls[t]})});function E_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ls.hasOwnProperty(t)&&Ls[t]?(""+e).trim():e+"px"}function w_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=E_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AT=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Th(t,e){if(e){if(AT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Ih(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rh=null;function Jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sh=null,Ri=null,Si=null;function mm(t){if(t=Fo(t)){if(typeof Sh!="function")throw Error(S(280));var e=t.stateNode;e&&(e=cu(e),Sh(t.stateNode,t.type,e))}}function T_(t){Ri?Si?Si.push(t):Si=[t]:Ri=t}function I_(){if(Ri){var t=Ri,e=Si;if(Si=Ri=null,mm(t),e)for(t=0;t<e.length;t++)mm(e[t])}}function R_(t,e){return t(e)}function S_(){}var dc=!1;function A_(t,e,n){if(dc)return t(e,n);dc=!0;try{return R_(t,e,n)}finally{dc=!1,(Ri!==null||Si!==null)&&(S_(),I_())}}function eo(t,e){var n=t.stateNode;if(n===null)return null;var r=cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Ah=!1;if(_n)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){Ah=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{Ah=!1}function CT(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Vs=!1,hl=null,dl=!1,Ch=null,kT={onError:function(t){Vs=!0,hl=t}};function PT(t,e,n,r,i,s,o,a,l){Vs=!1,hl=null,CT.apply(kT,arguments)}function NT(t,e,n,r,i,s,o,a,l){if(PT.apply(this,arguments),Vs){if(Vs){var u=hl;Vs=!1,hl=null}else throw Error(S(198));dl||(dl=!0,Ch=u)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function C_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gm(t){if(Jr(t)!==t)throw Error(S(188))}function xT(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gm(i),t;if(s===r)return gm(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function k_(t){return t=xT(t),t!==null?P_(t):null}function P_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=P_(t);if(e!==null)return e;t=t.sibling}return null}var N_=It.unstable_scheduleCallback,ym=It.unstable_cancelCallback,DT=It.unstable_shouldYield,OT=It.unstable_requestPaint,ye=It.unstable_now,LT=It.unstable_getCurrentPriorityLevel,Zd=It.unstable_ImmediatePriority,x_=It.unstable_UserBlockingPriority,fl=It.unstable_NormalPriority,VT=It.unstable_LowPriority,D_=It.unstable_IdlePriority,ou=null,Yt=null;function MT(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:bT,UT=Math.log,FT=Math.LN2;function bT(t){return t>>>=0,t===0?32:31-(UT(t)/FT|0)|0}var ga=64,ya=4194304;function Rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Rs(a):(s&=o,s!==0&&(r=Rs(s)))}else o=n&~i,o!==0?r=Rs(o):s!==0&&(r=Rs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bt(e),i=1<<n,r|=t[n],e&=~i;return r}function $T(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=$T(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function kh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function O_(){var t=ga;return ga<<=1,!(ga&4194240)&&(ga=64),t}function fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bt(e),t[e]=n}function BT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function L_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var V_,tf,M_,U_,F_,Ph=!1,_a=[],qn=null,Kn=null,Gn=null,to=new Map,no=new Map,On=[],zT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _m(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":to.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(e.pointerId)}}function fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fo(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HT(t,e,n,r,i){switch(e){case"focusin":return qn=fs(qn,t,e,n,r,i),!0;case"dragenter":return Kn=fs(Kn,t,e,n,r,i),!0;case"mouseover":return Gn=fs(Gn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return to.set(s,fs(to.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,no.set(s,fs(no.get(s)||null,t,e,n,r,i)),!0}return!1}function b_(t){var e=Ar(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=C_(n),e!==null){t.blockedOn=e,F_(t.priority,function(){M_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rh=r,n.target.dispatchEvent(r),Rh=null}else return e=Fo(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function vm(t,e,n){Wa(t)&&n.delete(e)}function WT(){Ph=!1,qn!==null&&Wa(qn)&&(qn=null),Kn!==null&&Wa(Kn)&&(Kn=null),Gn!==null&&Wa(Gn)&&(Gn=null),to.forEach(vm),no.forEach(vm)}function ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Ph||(Ph=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,WT)))}function ro(t){function e(i){return ps(i,t)}if(0<_a.length){ps(_a[0],t);for(var n=1;n<_a.length;n++){var r=_a[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&ps(qn,t),Kn!==null&&ps(Kn,t),Gn!==null&&ps(Gn,t),to.forEach(e),no.forEach(e),n=0;n<On.length;n++)r=On[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)b_(n),n.blockedOn===null&&On.shift()}var Ai=kn.ReactCurrentBatchConfig,ml=!0;function qT(t,e,n,r){var i=J,s=Ai.transition;Ai.transition=null;try{J=1,nf(t,e,n,r)}finally{J=i,Ai.transition=s}}function KT(t,e,n,r){var i=J,s=Ai.transition;Ai.transition=null;try{J=4,nf(t,e,n,r)}finally{J=i,Ai.transition=s}}function nf(t,e,n,r){if(ml){var i=Nh(t,e,n,r);if(i===null)Ic(t,e,r,gl,n),_m(t,r);else if(HT(i,t,e,n,r))r.stopPropagation();else if(_m(t,r),e&4&&-1<zT.indexOf(t)){for(;i!==null;){var s=Fo(i);if(s!==null&&V_(s),s=Nh(t,e,n,r),s===null&&Ic(t,e,r,gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ic(t,e,r,null,n)}}var gl=null;function Nh(t,e,n,r){if(gl=null,t=Jd(r),t=Ar(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=C_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gl=t,null}function $_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LT()){case Zd:return 1;case x_:return 4;case fl:case VT:return 16;case D_:return 536870912;default:return 16}default:return 16}}var $n=null,rf=null,qa=null;function j_(){if(qa)return qa;var t,e=rf,n=e.length,r,i="value"in $n?$n.value:$n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return qa=i.slice(t,1<r?1-r:void 0)}function Ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function va(){return!0}function Em(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?va:Em,this.isPropagationStopped=Em,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),e}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=At(Zi),Uo=ce({},Zi,{view:0,detail:0}),GT=At(Uo),pc,mc,ms,au=ce({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ms&&(ms&&t.type==="mousemove"?(pc=t.screenX-ms.screenX,mc=t.screenY-ms.screenY):mc=pc=0,ms=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:mc}}),wm=At(au),QT=ce({},au,{dataTransfer:0}),XT=At(QT),YT=ce({},Uo,{relatedTarget:0}),gc=At(YT),JT=ce({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),ZT=At(JT),eI=ce({},Zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tI=At(eI),nI=ce({},Zi,{data:0}),Tm=At(nI),rI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sI[t])?!!e[t]:!1}function of(){return oI}var aI=ce({},Uo,{key:function(t){if(t.key){var e=rI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lI=At(aI),uI=ce({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=At(uI),cI=ce({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),hI=At(cI),dI=ce({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),fI=At(dI),pI=ce({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mI=At(pI),gI=[9,13,27,32],af=_n&&"CompositionEvent"in window,Ms=null;_n&&"documentMode"in document&&(Ms=document.documentMode);var yI=_n&&"TextEvent"in window&&!Ms,B_=_n&&(!af||Ms&&8<Ms&&11>=Ms),Rm=String.fromCharCode(32),Sm=!1;function z_(t,e){switch(t){case"keyup":return gI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hi=!1;function _I(t,e){switch(t){case"compositionend":return H_(e);case"keypress":return e.which!==32?null:(Sm=!0,Rm);case"textInput":return t=e.data,t===Rm&&Sm?null:t;default:return null}}function vI(t,e){if(hi)return t==="compositionend"||!af&&z_(t,e)?(t=j_(),qa=rf=$n=null,hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B_&&e.locale!=="ko"?null:e.data;default:return null}}var EI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!EI[t.type]:e==="textarea"}function W_(t,e,n,r){T_(r),e=yl(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Us=null,io=null;function wI(t){nv(t,0)}function lu(t){var e=pi(t);if(m_(e))return t}function TI(t,e){if(t==="change")return e}var q_=!1;if(_n){var yc;if(_n){var _c="oninput"in document;if(!_c){var Cm=document.createElement("div");Cm.setAttribute("oninput","return;"),_c=typeof Cm.oninput=="function"}yc=_c}else yc=!1;q_=yc&&(!document.documentMode||9<document.documentMode)}function km(){Us&&(Us.detachEvent("onpropertychange",K_),io=Us=null)}function K_(t){if(t.propertyName==="value"&&lu(io)){var e=[];W_(e,io,t,Jd(t)),A_(wI,e)}}function II(t,e,n){t==="focusin"?(km(),Us=e,io=n,Us.attachEvent("onpropertychange",K_)):t==="focusout"&&km()}function RI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(io)}function SI(t,e){if(t==="click")return lu(e)}function AI(t,e){if(t==="input"||t==="change")return lu(e)}function CI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:CI;function so(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!dh.call(e,i)||!jt(t[i],e[i]))return!1}return!0}function Pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nm(t,e){var n=Pm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pm(n)}}function G_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q_(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kI(t){var e=Q_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G_(n.ownerDocument.documentElement,n)){if(r!==null&&lf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Nm(n,s);var o=Nm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PI=_n&&"documentMode"in document&&11>=document.documentMode,di=null,xh=null,Fs=null,Dh=!1;function xm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dh||di==null||di!==cl(r)||(r=di,"selectionStart"in r&&lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fs&&so(Fs,r)||(Fs=r,r=yl(xh,"onSelect"),0<r.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=di)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fi={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},vc={},X_={};_n&&(X_=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function uu(t){if(vc[t])return vc[t];if(!fi[t])return t;var e=fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in X_)return vc[t]=e[n];return t}var Y_=uu("animationend"),J_=uu("animationiteration"),Z_=uu("animationstart"),ev=uu("transitionend"),tv=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){tv.set(t,e),Yr(e,[t])}for(var Ec=0;Ec<Dm.length;Ec++){var wc=Dm[Ec],NI=wc.toLowerCase(),xI=wc[0].toUpperCase()+wc.slice(1);hr(NI,"on"+xI)}hr(Y_,"onAnimationEnd");hr(J_,"onAnimationIteration");hr(Z_,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(ev,"onTransitionEnd");Vi("onMouseEnter",["mouseout","mouseover"]);Vi("onMouseLeave",["mouseout","mouseover"]);Vi("onPointerEnter",["pointerout","pointerover"]);Vi("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ss));function Om(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NT(r,e,void 0,t),t.currentTarget=null}function nv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Om(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Om(i,a,u),s=l}}}if(dl)throw t=Ch,dl=!1,Ch=null,t}function ne(t,e){var n=e[Uh];n===void 0&&(n=e[Uh]=new Set);var r=t+"__bubble";n.has(r)||(rv(e,t,2,!1),n.add(r))}function Tc(t,e,n){var r=0;e&&(r|=4),rv(n,t,r,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[wa]){t[wa]=!0,c_.forEach(function(n){n!=="selectionchange"&&(DI.has(n)||Tc(n,!1,t),Tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,Tc("selectionchange",!1,e))}}function rv(t,e,n,r){switch($_(e)){case 1:var i=qT;break;case 4:i=KT;break;default:i=nf}n=i.bind(null,e,n,t),i=void 0,!Ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ic(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ar(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}A_(function(){var u=s,c=Jd(n),h=[];e:{var d=tv.get(t);if(d!==void 0){var m=sf,y=t;switch(t){case"keypress":if(Ka(n)===0)break e;case"keydown":case"keyup":m=lI;break;case"focusin":y="focus",m=gc;break;case"focusout":y="blur",m=gc;break;case"beforeblur":case"afterblur":m=gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=XT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=hI;break;case Y_:case J_:case Z_:m=ZT;break;case ev:m=fI;break;case"scroll":m=GT;break;case"wheel":m=mI;break;case"copy":case"cut":case"paste":m=tI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Im}var _=(e&4)!==0,v=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=eo(f,p),E!=null&&_.push(ao(f,E,g)))),v)break;f=f.return}0<_.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Rh&&(y=n.relatedTarget||n.fromElement)&&(Ar(y)||y[vn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Ar(y):null,y!==null&&(v=Jr(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=wm,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Im,E="onPointerLeave",p="onPointerEnter",f="pointer"),v=m==null?d:pi(m),g=y==null?d:pi(y),d=new _(E,f+"leave",m,n,c),d.target=v,d.relatedTarget=g,E=null,Ar(c)===u&&(_=new _(p,f+"enter",y,n,c),_.target=g,_.relatedTarget=v,E=_),v=E,m&&y)t:{for(_=m,p=y,f=0,g=_;g;g=si(g))f++;for(g=0,E=p;E;E=si(E))g++;for(;0<f-g;)_=si(_),f--;for(;0<g-f;)p=si(p),g--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=si(_),p=si(p)}_=null}else _=null;m!==null&&Lm(h,d,m,_,!1),y!==null&&v!==null&&Lm(h,v,y,_,!0)}}e:{if(d=u?pi(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var I=TI;else if(Am(d))if(q_)I=AI;else{I=RI;var C=II}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=SI);if(I&&(I=I(t,u))){W_(h,I,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&vh(d,"number",d.value)}switch(C=u?pi(u):window,t){case"focusin":(Am(C)||C.contentEditable==="true")&&(di=C,xh=u,Fs=null);break;case"focusout":Fs=xh=di=null;break;case"mousedown":Dh=!0;break;case"contextmenu":case"mouseup":case"dragend":Dh=!1,xm(h,n,c);break;case"selectionchange":if(PI)break;case"keydown":case"keyup":xm(h,n,c)}var P;if(af)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else hi?z_(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(B_&&n.locale!=="ko"&&(hi||k!=="onCompositionStart"?k==="onCompositionEnd"&&hi&&(P=j_()):($n=c,rf="value"in $n?$n.value:$n.textContent,hi=!0)),C=yl(u,k),0<C.length&&(k=new Tm(k,t,null,n,c),h.push({event:k,listeners:C}),P?k.data=P:(P=H_(n),P!==null&&(k.data=P)))),(P=yI?_I(t,n):vI(t,n))&&(u=yl(u,"onBeforeInput"),0<u.length&&(c=new Tm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}nv(h,e)})}function ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=eo(t,n),s!=null&&r.unshift(ao(t,s,i)),s=eo(t,e),s!=null&&r.push(ao(t,s,i))),t=t.return}return r}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=eo(n,s),l!=null&&o.unshift(ao(n,l,a))):i||(l=eo(n,s),l!=null&&o.push(ao(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OI=/\r\n?/g,LI=/\u0000|\uFFFD/g;function Vm(t){return(typeof t=="string"?t:""+t).replace(OI,`
`).replace(LI,"")}function Ta(t,e,n){if(e=Vm(e),Vm(t)!==e&&n)throw Error(S(425))}function _l(){}var Oh=null,Lh=null;function Vh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mh=typeof setTimeout=="function"?setTimeout:void 0,VI=typeof clearTimeout=="function"?clearTimeout:void 0,Mm=typeof Promise=="function"?Promise:void 0,MI=typeof queueMicrotask=="function"?queueMicrotask:typeof Mm<"u"?function(t){return Mm.resolve(null).then(t).catch(UI)}:Mh;function UI(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ro(e)}function Qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var es=Math.random().toString(36).slice(2),qt="__reactFiber$"+es,lo="__reactProps$"+es,vn="__reactContainer$"+es,Uh="__reactEvents$"+es,FI="__reactListeners$"+es,bI="__reactHandles$"+es;function Ar(t){var e=t[qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vn]||n[qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Um(t);t!==null;){if(n=t[qt])return n;t=Um(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[qt]||t[vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function cu(t){return t[lo]||null}var Fh=[],mi=-1;function dr(t){return{current:t}}function ie(t){0>mi||(t.current=Fh[mi],Fh[mi]=null,mi--)}function te(t,e){mi++,Fh[mi]=t.current,t.current=e}var or={},Ze=dr(or),ft=dr(!1),Ur=or;function Mi(t,e){var n=t.type.contextTypes;if(!n)return or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function vl(){ie(ft),ie(Ze)}function Fm(t,e,n){if(Ze.current!==or)throw Error(S(168));te(Ze,e),te(ft,n)}function iv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,IT(t)||"Unknown",i));return ce({},n,r)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Ur=Ze.current,te(Ze,t),te(ft,ft.current),!0}function bm(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=iv(t,e,Ur),r.__reactInternalMemoizedMergedChildContext=t,ie(ft),ie(Ze),te(Ze,t)):ie(ft),te(ft,n)}var cn=null,hu=!1,Sc=!1;function sv(t){cn===null?cn=[t]:cn.push(t)}function $I(t){hu=!0,sv(t)}function fr(){if(!Sc&&cn!==null){Sc=!0;var t=0,e=J;try{var n=cn;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cn=null,hu=!1}catch(i){throw cn!==null&&(cn=cn.slice(t+1)),N_(Zd,fr),i}finally{J=e,Sc=!1}}return null}var gi=[],yi=0,wl=null,Tl=0,kt=[],Pt=0,Fr=null,hn=1,dn="";function wr(t,e){gi[yi++]=Tl,gi[yi++]=wl,wl=t,Tl=e}function ov(t,e,n){kt[Pt++]=hn,kt[Pt++]=dn,kt[Pt++]=Fr,Fr=t;var r=hn;t=dn;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hn=1<<32-bt(e)+i|n<<i|r,dn=s+t}else hn=1<<s|n<<i|r,dn=t}function uf(t){t.return!==null&&(wr(t,1),ov(t,1,0))}function cf(t){for(;t===wl;)wl=gi[--yi],gi[yi]=null,Tl=gi[--yi],gi[yi]=null;for(;t===Fr;)Fr=kt[--Pt],kt[Pt]=null,dn=kt[--Pt],kt[Pt]=null,hn=kt[--Pt],kt[Pt]=null}var Tt=null,vt=null,oe=!1,Ft=null;function av(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $m(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,vt=Qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:hn,overflow:dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,vt=null,!0):!1;default:return!1}}function bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $h(t){if(oe){var e=vt;if(e){var n=e;if(!$m(t,e)){if(bh(t))throw Error(S(418));e=Qn(n.nextSibling);var r=Tt;e&&$m(t,e)?av(r,n):(t.flags=t.flags&-4097|2,oe=!1,Tt=t)}}else{if(bh(t))throw Error(S(418));t.flags=t.flags&-4097|2,oe=!1,Tt=t}}}function jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function Ia(t){if(t!==Tt)return!1;if(!oe)return jm(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vh(t.type,t.memoizedProps)),e&&(e=vt)){if(bh(t))throw lv(),Error(S(418));for(;e;)av(t,e),e=Qn(e.nextSibling)}if(jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=Qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=Tt?Qn(t.stateNode.nextSibling):null;return!0}function lv(){for(var t=vt;t;)t=Qn(t.nextSibling)}function Ui(){vt=Tt=null,oe=!1}function hf(t){Ft===null?Ft=[t]:Ft.push(t)}var jI=kn.ReactCurrentBatchConfig;function Mt(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Il=dr(null),Rl=null,_i=null,df=null;function ff(){df=_i=Rl=null}function pf(t){var e=Il.current;ie(Il),t._currentValue=e}function jh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ci(t,e){Rl=t,df=_i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},_i===null){if(Rl===null)throw Error(S(308));_i=t,Rl.dependencies={lanes:0,firstContext:t}}else _i=_i.next=t;return e}var Cr=null;function mf(t){Cr===null?Cr=[t]:Cr.push(t)}function uv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mf(e)):(n.next=i.next,i.next=n),e.interleaved=n,En(t,r)}function En(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dn=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,En(t,n)}return i=r.interleaved,i===null?(e.next=e,mf(r)):(e.next=i.next,i.next=e),r.interleaved=e,En(t,n)}function Ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}function Bm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sl(t,e,n,r){var i=t.updateQueue;Dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=ce({},h,d);break e;case 2:Dn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=h}}function zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var hv=new u_.Component().refs;function Bh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Jn(t),s=gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&($t(e,t,i,r),Ga(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Jn(t),s=gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&($t(e,t,i,r),Ga(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=Jn(t),i=gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xn(t,i,r),e!==null&&($t(e,t,r,n),Ga(e,t,r))}};function Hm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!so(n,r)||!so(i,s):!0}function dv(t,e,n){var r=!1,i=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=pt(e)?Ur:Ze.current,r=e.contextTypes,s=(r=r!=null)?Mi(t,i):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function zh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=hv,gf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=pt(e)?Ur:Ze.current,i.context=Mi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&du.enqueueReplaceState(i,i.state,null),Sl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===hv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qm(t){var e=t._init;return e(t._payload)}function fv(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Zn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,E){return f===null||f.tag!==6?(f=Dc(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,E){var I=g.type;return I===ci?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===xn&&qm(I)===f.type)?(E=i(f,g.props),E.ref=gs(p,f,g),E.return=p,E):(E=el(g.type,g.key,g.props,null,p.mode,E),E.ref=gs(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Oc(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,I){return f===null||f.tag!==7?(f=Or(g,p.mode,E,I),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Dc(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case fa:return g=el(f.type,f.key,f.props,null,p.mode,g),g.ref=gs(p,null,f),g.return=p,g;case ui:return f=Oc(f,p.mode,g),f.return=p,f;case xn:var E=f._init;return h(p,E(f._payload),g)}if(Is(f)||hs(f))return f=Or(f,p.mode,g,null),f.return=p,f;Ra(p,f)}return null}function d(p,f,g,E){var I=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fa:return g.key===I?l(p,f,g,E):null;case ui:return g.key===I?u(p,f,g,E):null;case xn:return I=g._init,d(p,f,I(g._payload),E)}if(Is(g)||hs(g))return I!==null?null:c(p,f,g,E,null);Ra(p,g)}return null}function m(p,f,g,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,a(f,p,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case fa:return p=p.get(E.key===null?g:E.key)||null,l(f,p,E,I);case ui:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,I);case xn:var C=E._init;return m(p,f,g,C(E._payload),I)}if(Is(E)||hs(E))return p=p.get(g)||null,c(f,p,E,I,null);Ra(f,E)}return null}function y(p,f,g,E){for(var I=null,C=null,P=f,k=f=0,H=null;P!==null&&k<g.length;k++){P.index>k?(H=P,P=null):H=P.sibling;var F=d(p,P,g[k],E);if(F===null){P===null&&(P=H);break}t&&P&&F.alternate===null&&e(p,P),f=s(F,f,k),C===null?I=F:C.sibling=F,C=F,P=H}if(k===g.length)return n(p,P),oe&&wr(p,k),I;if(P===null){for(;k<g.length;k++)P=h(p,g[k],E),P!==null&&(f=s(P,f,k),C===null?I=P:C.sibling=P,C=P);return oe&&wr(p,k),I}for(P=r(p,P);k<g.length;k++)H=m(P,p,k,g[k],E),H!==null&&(t&&H.alternate!==null&&P.delete(H.key===null?k:H.key),f=s(H,f,k),C===null?I=H:C.sibling=H,C=H);return t&&P.forEach(function(Ie){return e(p,Ie)}),oe&&wr(p,k),I}function _(p,f,g,E){var I=hs(g);if(typeof I!="function")throw Error(S(150));if(g=I.call(g),g==null)throw Error(S(151));for(var C=I=null,P=f,k=f=0,H=null,F=g.next();P!==null&&!F.done;k++,F=g.next()){P.index>k?(H=P,P=null):H=P.sibling;var Ie=d(p,P,F.value,E);if(Ie===null){P===null&&(P=H);break}t&&P&&Ie.alternate===null&&e(p,P),f=s(Ie,f,k),C===null?I=Ie:C.sibling=Ie,C=Ie,P=H}if(F.done)return n(p,P),oe&&wr(p,k),I;if(P===null){for(;!F.done;k++,F=g.next())F=h(p,F.value,E),F!==null&&(f=s(F,f,k),C===null?I=F:C.sibling=F,C=F);return oe&&wr(p,k),I}for(P=r(p,P);!F.done;k++,F=g.next())F=m(P,p,k,F.value,E),F!==null&&(t&&F.alternate!==null&&P.delete(F.key===null?k:F.key),f=s(F,f,k),C===null?I=F:C.sibling=F,C=F);return t&&P.forEach(function(ke){return e(p,ke)}),oe&&wr(p,k),I}function v(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===ci&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case fa:e:{for(var I=g.key,C=f;C!==null;){if(C.key===I){if(I=g.type,I===ci){if(C.tag===7){n(p,C.sibling),f=i(C,g.props.children),f.return=p,p=f;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===xn&&qm(I)===C.type){n(p,C.sibling),f=i(C,g.props),f.ref=gs(p,C,g),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}g.type===ci?(f=Or(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=el(g.type,g.key,g.props,null,p.mode,E),E.ref=gs(p,f,g),E.return=p,p=E)}return o(p);case ui:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Oc(g,p.mode,E),f.return=p,p=f}return o(p);case xn:return C=g._init,v(p,f,C(g._payload),E)}if(Is(g))return y(p,f,g,E);if(hs(g))return _(p,f,g,E);Ra(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Dc(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return v}var Fi=fv(!0),pv=fv(!1),bo={},Jt=dr(bo),uo=dr(bo),co=dr(bo);function kr(t){if(t===bo)throw Error(S(174));return t}function yf(t,e){switch(te(co,e),te(uo,t),te(Jt,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wh(e,t)}ie(Jt),te(Jt,e)}function bi(){ie(Jt),ie(uo),ie(co)}function mv(t){kr(co.current);var e=kr(Jt.current),n=wh(e,t.type);e!==n&&(te(uo,t),te(Jt,n))}function _f(t){uo.current===t&&(ie(Jt),ie(uo))}var le=dr(0);function Al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function vf(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var Qa=kn.ReactCurrentDispatcher,Cc=kn.ReactCurrentBatchConfig,br=0,ue=null,Re=null,xe=null,Cl=!1,bs=!1,ho=0,BI=0;function ze(){throw Error(S(321))}function Ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function wf(t,e,n,r,i,s){if(br=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qa.current=t===null||t.memoizedState===null?qI:KI,t=n(r,i),bs){s=0;do{if(bs=!1,ho=0,25<=s)throw Error(S(301));s+=1,xe=Re=null,e.updateQueue=null,Qa.current=GI,t=n(r,i)}while(bs)}if(Qa.current=kl,e=Re!==null&&Re.next!==null,br=0,xe=Re=ue=null,Cl=!1,e)throw Error(S(300));return t}function Tf(){var t=ho!==0;return ho=0,t}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ue.memoizedState=xe=t:xe=xe.next=t,xe}function Lt(){if(Re===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=xe===null?ue.memoizedState:xe.next;if(e!==null)xe=e,Re=t;else{if(t===null)throw Error(S(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},xe===null?ue.memoizedState=xe=t:xe=xe.next=t}return xe}function fo(t,e){return typeof e=="function"?e(t):e}function kc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((br&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ue.lanes|=c,$r|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,jt(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,$r|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jt(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function gv(){}function yv(t,e){var n=ue,r=Lt(),i=e(),s=!jt(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,If(Ev.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,po(9,vv.bind(null,n,r,i,e),void 0,null),De===null)throw Error(S(349));br&30||_v(n,e,i)}return i}function _v(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vv(t,e,n,r){e.value=n,e.getSnapshot=r,wv(e)&&Tv(t)}function Ev(t,e,n){return n(function(){wv(e)&&Tv(t)})}function wv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function Tv(t){var e=En(t,1);e!==null&&$t(e,t,1,-1)}function Km(t){var e=Wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:t},e.queue=t,t=t.dispatch=WI.bind(null,ue,t),[e.memoizedState,t]}function po(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Iv(){return Lt().memoizedState}function Xa(t,e,n,r){var i=Wt();ue.flags|=t,i.memoizedState=po(1|e,n,void 0,r===void 0?null:r)}function fu(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&Ef(r,o.deps)){i.memoizedState=po(e,n,s,r);return}}ue.flags|=t,i.memoizedState=po(1|e,n,s,r)}function Gm(t,e){return Xa(8390656,8,t,e)}function If(t,e){return fu(2048,8,t,e)}function Rv(t,e){return fu(4,2,t,e)}function Sv(t,e){return fu(4,4,t,e)}function Av(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cv(t,e,n){return n=n!=null?n.concat([t]):null,fu(4,4,Av.bind(null,e,t),n)}function Rf(){}function kv(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Pv(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Nv(t,e,n){return br&21?(jt(n,e)||(n=O_(),ue.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function zI(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Cc.transition;Cc.transition={};try{t(!1),e()}finally{J=n,Cc.transition=r}}function xv(){return Lt().memoizedState}function HI(t,e,n){var r=Jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dv(t))Ov(e,n);else if(n=uv(t,e,n,r),n!==null){var i=ot();$t(n,t,r,i),Lv(n,e,r)}}function WI(t,e,n){var r=Jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dv(t))Ov(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,jt(a,o)){var l=e.interleaved;l===null?(i.next=i,mf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=uv(t,e,i,r),n!==null&&(i=ot(),$t(n,t,r,i),Lv(n,e,r))}}function Dv(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function Ov(t,e){bs=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Lv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}var kl={readContext:Ot,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},qI={readContext:Ot,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:Gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xa(4194308,4,Av.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xa(4,2,t,e)},useMemo:function(t,e){var n=Wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=HI.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:Km,useDebugValue:Rf,useDeferredValue:function(t){return Wt().memoizedState=t},useTransition:function(){var t=Km(!1),e=t[0];return t=zI.bind(null,t[1]),Wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=Wt();if(oe){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),De===null)throw Error(S(349));br&30||_v(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gm(Ev.bind(null,r,s,t),[t]),r.flags|=2048,po(9,vv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wt(),e=De.identifierPrefix;if(oe){var n=dn,r=hn;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KI={readContext:Ot,useCallback:kv,useContext:Ot,useEffect:If,useImperativeHandle:Cv,useInsertionEffect:Rv,useLayoutEffect:Sv,useMemo:Pv,useReducer:kc,useRef:Iv,useState:function(){return kc(fo)},useDebugValue:Rf,useDeferredValue:function(t){var e=Lt();return Nv(e,Re.memoizedState,t)},useTransition:function(){var t=kc(fo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:gv,useSyncExternalStore:yv,useId:xv,unstable_isNewReconciler:!1},GI={readContext:Ot,useCallback:kv,useContext:Ot,useEffect:If,useImperativeHandle:Cv,useInsertionEffect:Rv,useLayoutEffect:Sv,useMemo:Pv,useReducer:Pc,useRef:Iv,useState:function(){return Pc(fo)},useDebugValue:Rf,useDeferredValue:function(t){var e=Lt();return Re===null?e.memoizedState=t:Nv(e,Re.memoizedState,t)},useTransition:function(){var t=Pc(fo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:gv,useSyncExternalStore:yv,useId:xv,unstable_isNewReconciler:!1};function $i(t,e){try{var n="",r=e;do n+=TT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QI=typeof WeakMap=="function"?WeakMap:Map;function Vv(t,e,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nl||(Nl=!0,ed=r),Hh(t,e)},n}function Mv(t,e,n){n=gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Hh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hh(t,e),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new QI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uR.bind(null,t,e,n),e.then(t,t))}function Xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ym(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gn(-1,1),e.tag=2,Xn(n,e,1))),n.lanes|=1),t)}var XI=kn.ReactCurrentOwner,ht=!1;function it(t,e,n,r){e.child=t===null?pv(e,null,n,r):Fi(e,t.child,n,r)}function Jm(t,e,n,r,i){n=n.render;var s=e.ref;return Ci(e,i),r=wf(t,e,n,r,s,i),n=Tf(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(oe&&n&&uf(e),e.flags|=1,it(t,e,r,i),e.child)}function Zm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Df(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Uv(t,e,s,r,i)):(t=el(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(o,r)&&t.ref===e.ref)return wn(t,e,i)}return e.flags|=1,t=Zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Uv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(so(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,wn(t,e,i)}return Wh(t,e,n,r,i)}function Fv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Ei,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(Ei,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(Ei,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,te(Ei,_t),_t|=r;return it(t,e,i,n),e.child}function bv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wh(t,e,n,r,i){var s=pt(n)?Ur:Ze.current;return s=Mi(e,s),Ci(e,i),n=wf(t,e,n,r,s,i),r=Tf(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(oe&&r&&uf(e),e.flags|=1,it(t,e,n,i),e.child)}function eg(t,e,n,r,i){if(pt(n)){var s=!0;El(e)}else s=!1;if(Ci(e,i),e.stateNode===null)Ya(t,e),dv(e,n,r),zh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ot(u):(u=pt(n)?Ur:Ze.current,u=Mi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Wm(e,o,r,u),Dn=!1;var d=e.memoizedState;o.state=d,Sl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ft.current||Dn?(typeof c=="function"&&(Bh(e,n,c,r),l=e.memoizedState),(a=Dn||Hm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Mt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ot(l):(l=pt(n)?Ur:Ze.current,l=Mi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Wm(e,o,r,l),Dn=!1,d=e.memoizedState,o.state=d,Sl(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||ft.current||Dn?(typeof m=="function"&&(Bh(e,n,m,r),y=e.memoizedState),(u=Dn||Hm(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return qh(t,e,n,r,s,i)}function qh(t,e,n,r,i,s){bv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&bm(e,n,!1),wn(t,e,s);r=e.stateNode,XI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fi(e,t.child,null,s),e.child=Fi(e,null,a,s)):it(t,e,a,s),e.memoizedState=r.state,i&&bm(e,n,!0),e.child}function $v(t){var e=t.stateNode;e.pendingContext?Fm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fm(t,e.context,!1),yf(t,e.containerInfo)}function tg(t,e,n,r,i){return Ui(),hf(i),e.flags|=256,it(t,e,n,r),e.child}var Kh={dehydrated:null,treeContext:null,retryLane:0};function Gh(t){return{baseLanes:t,cachePool:null,transitions:null}}function jv(t,e,n){var r=e.pendingProps,i=le.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),te(le,i&1),t===null)return $h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gu(o,r,0,null),t=Or(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gh(n),e.memoizedState=Kh,t):Sf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return YI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Zn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Zn(a,s):(s=Or(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kh,r}return s=t.child,t=s.sibling,r=Zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sf(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sa(t,e,n,r){return r!==null&&hf(r),Fi(e,t.child,null,n),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Nc(Error(S(422))),Sa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gu({mode:"visible",children:r.children},i,0,null),s=Or(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fi(e,t.child,null,o),e.child.memoizedState=Gh(o),e.memoizedState=Kh,s);if(!(e.mode&1))return Sa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Nc(s,r,void 0),Sa(t,e,o,r)}if(a=(o&t.childLanes)!==0,ht||a){if(r=De,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,En(t,i),$t(r,t,i,-1))}return xf(),r=Nc(Error(S(421))),Sa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=Qn(i.nextSibling),Tt=e,oe=!0,Ft=null,t!==null&&(kt[Pt++]=hn,kt[Pt++]=dn,kt[Pt++]=Fr,hn=t.id,dn=t.overflow,Fr=e),e=Sf(e,r.children),e.flags|=4096,e)}function ng(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jh(t.return,e,n)}function xc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Bv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ng(t,n,e);else if(t.tag===19)ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(le,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Al(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Al(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xc(e,!0,n,null,s);break;case"together":xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ya(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JI(t,e,n){switch(e.tag){case 3:$v(e),Ui();break;case 5:mv(e);break;case 1:pt(e.type)&&El(e);break;case 4:yf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;te(Il,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?jv(t,e,n):(te(le,le.current&1),t=wn(t,e,n),t!==null?t.sibling:null);te(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Bv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,Fv(t,e,n)}return wn(t,e,n)}var zv,Qh,Hv,Wv;zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qh=function(){};Hv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kr(Jt.current);var s=null;switch(n){case"input":i=yh(t,i),r=yh(t,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=Eh(t,i),r=Eh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_l)}Th(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Js.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Js.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Wv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ys(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ZI(t,e,n){var r=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return pt(e.type)&&vl(),He(e),null;case 3:return r=e.stateNode,bi(),ie(ft),ie(Ze),vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ft!==null&&(rd(Ft),Ft=null))),Qh(t,e),He(e),null;case 5:_f(e);var i=kr(co.current);if(n=e.type,t!==null&&e.stateNode!=null)Hv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return He(e),null}if(t=kr(Jt.current),Ia(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qt]=e,r[lo]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Ss.length;i++)ne(Ss[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":hm(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":fm(r,s),ne("invalid",r)}Th(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ta(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ta(r.textContent,a,t),i=["children",""+a]):Js.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":pa(r),dm(r,s,!0);break;case"textarea":pa(r),pm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=__(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qt]=e,t[lo]=r,zv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ih(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ss.length;i++)ne(Ss[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":hm(t,r),i=yh(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ne("invalid",t);break;case"textarea":fm(t,r),i=Eh(t,r),ne("invalid",t);break;default:i=r}Th(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?w_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zs(t,l):typeof l=="number"&&Zs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Js.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",t):l!=null&&Gd(t,s,l,o))}switch(n){case"input":pa(t),dm(t,r,!1);break;case"textarea":pa(t),pm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ii(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ii(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)Wv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=kr(co.current),kr(Jt.current),Ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[qt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=e,e.stateNode=r}return He(e),null;case 13:if(ie(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&vt!==null&&e.mode&1&&!(e.flags&128))lv(),Ui(),e.flags|=98560,s=!1;else if(s=Ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[qt]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),s=!1}else Ft!==null&&(rd(Ft),Ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?Ae===0&&(Ae=3):xf())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return bi(),Qh(t,e),t===null&&oo(e.stateNode.containerInfo),He(e),null;case 10:return pf(e.type._context),He(e),null;case 17:return pt(e.type)&&vl(),He(e),null;case 19:if(ie(le),s=e.memoizedState,s===null)return He(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ys(s,!1);else{if(Ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Al(t),o!==null){for(e.flags|=128,ys(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(le,le.current&1|2),e.child}t=t.sibling}s.tail!==null&&ye()>ji&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304)}else{if(!r)if(t=Al(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return He(e),null}else 2*ye()-s.renderingStartTime>ji&&n!==1073741824&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ye(),e.sibling=null,n=le.current,te(le,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return Nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function eR(t,e){switch(cf(e),e.tag){case 1:return pt(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bi(),ie(ft),ie(Ze),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(ie(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(le),null;case 4:return bi(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var Aa=!1,Ke=!1,tR=typeof WeakSet=="function"?WeakSet:Set,D=null;function vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(t,e,r)}else n.current=null}function Xh(t,e,n){try{n()}catch(r){de(t,e,r)}}var rg=!1;function nR(t,e){if(Oh=ml,t=Q_(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lh={focusedElem:t,selectionRange:n},ml=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,v=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Mt(e.type,_),v);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){de(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return y=rg,rg=!1,y}function $s(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xh(e,n,s)}i=i.next}while(i!==r)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qv(t){var e=t.alternate;e!==null&&(t.alternate=null,qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qt],delete e[lo],delete e[Uh],delete e[FI],delete e[bI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kv(t){return t.tag===5||t.tag===3||t.tag===4}function ig(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(r!==4&&(t=t.child,t!==null))for(Jh(t,e,n),t=t.sibling;t!==null;)Jh(t,e,n),t=t.sibling}function Zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zh(t,e,n),t=t.sibling;t!==null;)Zh(t,e,n),t=t.sibling}var Me=null,Ut=!1;function Pn(t,e,n){for(n=n.child;n!==null;)Gv(t,e,n),n=n.sibling}function Gv(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 5:Ke||vi(n,e);case 6:var r=Me,i=Ut;Me=null,Pn(t,e,n),Me=r,Ut=i,Me!==null&&(Ut?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Ut?(t=Me,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),ro(t)):Rc(Me,n.stateNode));break;case 4:r=Me,i=Ut,Me=n.stateNode.containerInfo,Ut=!0,Pn(t,e,n),Me=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xh(n,e,o),i=i.next}while(i!==r)}Pn(t,e,n);break;case 1:if(!Ke&&(vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){de(n,e,a)}Pn(t,e,n);break;case 21:Pn(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,Pn(t,e,n),Ke=r):Pn(t,e,n);break;default:Pn(t,e,n)}}function sg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tR),e.forEach(function(r){var i=hR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Me=a.stateNode,Ut=!1;break e;case 3:Me=a.stateNode.containerInfo,Ut=!0;break e;case 4:Me=a.stateNode.containerInfo,Ut=!0;break e}a=a.return}if(Me===null)throw Error(S(160));Gv(s,o,i),Me=null,Ut=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){de(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qv(e,t),e=e.sibling}function Qv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Ht(t),r&4){try{$s(3,t,t.return),pu(3,t)}catch(_){de(t,t.return,_)}try{$s(5,t,t.return)}catch(_){de(t,t.return,_)}}break;case 1:Vt(e,t),Ht(t),r&512&&n!==null&&vi(n,n.return);break;case 5:if(Vt(e,t),Ht(t),r&512&&n!==null&&vi(n,n.return),t.flags&32){var i=t.stateNode;try{Zs(i,"")}catch(_){de(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&g_(i,s),Ih(a,o);var u=Ih(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?w_(i,h):c==="dangerouslySetInnerHTML"?v_(i,h):c==="children"?Zs(i,h):Gd(i,c,h,u)}switch(a){case"input":_h(i,s);break;case"textarea":y_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ii(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ii(i,!!s.multiple,s.defaultValue,!0):Ii(i,!!s.multiple,s.multiple?[]:"",!1))}i[lo]=s}catch(_){de(t,t.return,_)}}break;case 6:if(Vt(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){de(t,t.return,_)}}break;case 3:if(Vt(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(e.containerInfo)}catch(_){de(t,t.return,_)}break;case 4:Vt(e,t),Ht(t);break;case 13:Vt(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kf=ye())),r&4&&sg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(u=Ke)||c,Vt(e,t),Ke=u):Vt(e,t),Ht(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(D=t,c=t.child;c!==null;){for(h=D=c;D!==null;){switch(d=D,m=d.child,d.tag){case 0:case 11:case 14:case 15:$s(4,d,d.return);break;case 1:vi(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){de(r,n,_)}}break;case 5:vi(d,d.return);break;case 22:if(d.memoizedState!==null){ag(h);continue}}m!==null?(m.return=d,D=m):ag(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=E_("display",o))}catch(_){de(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){de(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vt(e,t),Ht(t),r&4&&sg(t);break;case 21:break;default:Vt(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kv(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zs(i,""),r.flags&=-33);var s=ig(t);Zh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ig(t);Jh(t,a,o);break;default:throw Error(S(161))}}catch(l){de(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rR(t,e,n){D=t,Xv(t)}function Xv(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Aa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ke;a=Aa;var u=Ke;if(Aa=o,(Ke=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?lg(i):l!==null?(l.return=o,D=l):lg(i);for(;s!==null;)D=s,Xv(s),s=s.sibling;D=i,Aa=a,Ke=u}og(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):og(t)}}function og(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ke||pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ro(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ke||e.flags&512&&Yh(e)}catch(d){de(e,e.return,d)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function ag(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function lg(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(l){de(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){de(e,i,l)}}var s=e.return;try{Yh(e)}catch(l){de(e,s,l)}break;case 5:var o=e.return;try{Yh(e)}catch(l){de(e,o,l)}}}catch(l){de(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var iR=Math.ceil,Pl=kn.ReactCurrentDispatcher,Af=kn.ReactCurrentOwner,Dt=kn.ReactCurrentBatchConfig,Q=0,De=null,Te=null,be=0,_t=0,Ei=dr(0),Ae=0,mo=null,$r=0,mu=0,Cf=0,js=null,ut=null,kf=0,ji=1/0,un=null,Nl=!1,ed=null,Yn=null,Ca=!1,jn=null,xl=0,Bs=0,td=null,Ja=-1,Za=0;function ot(){return Q&6?ye():Ja!==-1?Ja:Ja=ye()}function Jn(t){return t.mode&1?Q&2&&be!==0?be&-be:jI.transition!==null?(Za===0&&(Za=O_()),Za):(t=J,t!==0||(t=window.event,t=t===void 0?16:$_(t.type)),t):1}function $t(t,e,n,r){if(50<Bs)throw Bs=0,td=null,Error(S(185));Mo(t,n,r),(!(Q&2)||t!==De)&&(t===De&&(!(Q&2)&&(mu|=n),Ae===4&&Ln(t,be)),mt(t,r),n===1&&Q===0&&!(e.mode&1)&&(ji=ye()+500,hu&&fr()))}function mt(t,e){var n=t.callbackNode;jT(t,e);var r=pl(t,t===De?be:0);if(r===0)n!==null&&ym(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ym(n),e===1)t.tag===0?$I(ug.bind(null,t)):sv(ug.bind(null,t)),MI(function(){!(Q&6)&&fr()}),n=null;else{switch(L_(r)){case 1:n=Zd;break;case 4:n=x_;break;case 16:n=fl;break;case 536870912:n=D_;break;default:n=fl}n=i0(n,Yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yv(t,e){if(Ja=-1,Za=0,Q&6)throw Error(S(327));var n=t.callbackNode;if(ki()&&t.callbackNode!==n)return null;var r=pl(t,t===De?be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dl(t,r);else{e=r;var i=Q;Q|=2;var s=Zv();(De!==t||be!==e)&&(un=null,ji=ye()+500,Dr(t,e));do try{aR();break}catch(a){Jv(t,a)}while(1);ff(),Pl.current=s,Q=i,Te!==null?e=0:(De=null,be=0,e=Ae)}if(e!==0){if(e===2&&(i=kh(t),i!==0&&(r=i,e=nd(t,i))),e===1)throw n=mo,Dr(t,0),Ln(t,r),mt(t,ye()),n;if(e===6)Ln(t,r);else{if(i=t.current.alternate,!(r&30)&&!sR(i)&&(e=Dl(t,r),e===2&&(s=kh(t),s!==0&&(r=s,e=nd(t,s))),e===1))throw n=mo,Dr(t,0),Ln(t,r),mt(t,ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Tr(t,ut,un);break;case 3:if(Ln(t,r),(r&130023424)===r&&(e=kf+500-ye(),10<e)){if(pl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Mh(Tr.bind(null,t,ut,un),e);break}Tr(t,ut,un);break;case 4:if(Ln(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iR(r/1960))-r,10<r){t.timeoutHandle=Mh(Tr.bind(null,t,ut,un),r);break}Tr(t,ut,un);break;case 5:Tr(t,ut,un);break;default:throw Error(S(329))}}}return mt(t,ye()),t.callbackNode===n?Yv.bind(null,t):null}function nd(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=ut,ut=n,e!==null&&rd(e)),t}function rd(t){ut===null?ut=t:ut.push.apply(ut,t)}function sR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ln(t,e){for(e&=~Cf,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bt(e),r=1<<n;t[n]=-1,e&=~r}}function ug(t){if(Q&6)throw Error(S(327));ki();var e=pl(t,0);if(!(e&1))return mt(t,ye()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var r=kh(t);r!==0&&(e=r,n=nd(t,r))}if(n===1)throw n=mo,Dr(t,0),Ln(t,e),mt(t,ye()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,ut,un),mt(t,ye()),null}function Pf(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(ji=ye()+500,hu&&fr())}}function jr(t){jn!==null&&jn.tag===0&&!(Q&6)&&ki();var e=Q;Q|=1;var n=Dt.transition,r=J;try{if(Dt.transition=null,J=1,t)return t()}finally{J=r,Dt.transition=n,Q=e,!(Q&6)&&fr()}}function Nf(){_t=Ei.current,ie(Ei)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VI(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vl();break;case 3:bi(),ie(ft),ie(Ze),vf();break;case 5:_f(r);break;case 4:bi();break;case 13:ie(le);break;case 19:ie(le);break;case 10:pf(r.type._context);break;case 22:case 23:Nf()}n=n.return}if(De=t,Te=t=Zn(t.current,null),be=_t=e,Ae=0,mo=null,Cf=mu=$r=0,ut=js=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Cr=null}return t}function Jv(t,e){do{var n=Te;try{if(ff(),Qa.current=kl,Cl){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cl=!1}if(br=0,xe=Re=ue=null,bs=!1,ho=0,Af.current=null,n===null||n.return===null){Ae=1,mo=e,Te=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=be,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Xm(o);if(m!==null){m.flags&=-257,Ym(m,o,a,s,e),m.mode&1&&Qm(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Qm(s,u,e),xf();break e}l=Error(S(426))}}else if(oe&&a.mode&1){var v=Xm(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Ym(v,o,a,s,e),hf($i(l,a));break e}}s=l=$i(l,a),Ae!==4&&(Ae=2),js===null?js=[s]:js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Vv(s,l,e);Bm(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Yn===null||!Yn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Mv(s,a,e);Bm(s,E);break e}}s=s.return}while(s!==null)}t0(n)}catch(I){e=I,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(1)}function Zv(){var t=Pl.current;return Pl.current=kl,t===null?kl:t}function xf(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),De===null||!($r&268435455)&&!(mu&268435455)||Ln(De,be)}function Dl(t,e){var n=Q;Q|=2;var r=Zv();(De!==t||be!==e)&&(un=null,Dr(t,e));do try{oR();break}catch(i){Jv(t,i)}while(1);if(ff(),Q=n,Pl.current=r,Te!==null)throw Error(S(261));return De=null,be=0,Ae}function oR(){for(;Te!==null;)e0(Te)}function aR(){for(;Te!==null&&!DT();)e0(Te)}function e0(t){var e=r0(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?t0(t):Te=e,Af.current=null}function t0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eR(n,e),n!==null){n.flags&=32767,Te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ae=6,Te=null;return}}else if(n=ZI(n,e,_t),n!==null){Te=n;return}if(e=e.sibling,e!==null){Te=e;return}Te=e=t}while(e!==null);Ae===0&&(Ae=5)}function Tr(t,e,n){var r=J,i=Dt.transition;try{Dt.transition=null,J=1,lR(t,e,n,r)}finally{Dt.transition=i,J=r}return null}function lR(t,e,n,r){do ki();while(jn!==null);if(Q&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BT(t,s),t===De&&(Te=De=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,i0(fl,function(){return ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=J;J=1;var a=Q;Q|=4,Af.current=null,nR(t,n),Qv(n,t),kI(Lh),ml=!!Oh,Lh=Oh=null,t.current=n,rR(n),OT(),Q=a,J=o,Dt.transition=s}else t.current=n;if(Ca&&(Ca=!1,jn=t,xl=i),s=t.pendingLanes,s===0&&(Yn=null),MT(n.stateNode),mt(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,t=ed,ed=null,t;return xl&1&&t.tag!==0&&ki(),s=t.pendingLanes,s&1?t===td?Bs++:(Bs=0,td=t):Bs=0,fr(),null}function ki(){if(jn!==null){var t=L_(xl),e=Dt.transition,n=J;try{if(Dt.transition=null,J=16>t?16:t,jn===null)var r=!1;else{if(t=jn,jn=null,xl=0,Q&6)throw Error(S(331));var i=Q;for(Q|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:$s(8,c,s)}var h=c.child;if(h!==null)h.return=c,D=h;else for(;D!==null;){c=D;var d=c.sibling,m=c.return;if(qv(c),c===u){D=null;break}if(d!==null){d.return=m,D=d;break}D=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$s(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,D=p;break e}D=s.return}}var f=t.current;for(D=f;D!==null;){o=D;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,D=g;else e:for(o=f;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pu(9,a)}}catch(I){de(a,a.return,I)}if(a===o){D=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,D=E;break e}D=a.return}}if(Q=i,fr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(ou,t)}catch{}r=!0}return r}finally{J=n,Dt.transition=e}}return!1}function cg(t,e,n){e=$i(n,e),e=Vv(t,e,1),t=Xn(t,e,1),e=ot(),t!==null&&(Mo(t,1,e),mt(t,e))}function de(t,e,n){if(t.tag===3)cg(t,t,n);else for(;e!==null;){if(e.tag===3){cg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=$i(n,t),t=Mv(e,t,1),e=Xn(e,t,1),t=ot(),e!==null&&(Mo(e,1,t),mt(e,t));break}}e=e.return}}function uR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,De===t&&(be&n)===n&&(Ae===4||Ae===3&&(be&130023424)===be&&500>ye()-kf?Dr(t,0):Cf|=n),mt(t,e)}function n0(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=ot();t=En(t,e),t!==null&&(Mo(t,e,n),mt(t,n))}function cR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n0(t,n)}function hR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),n0(t,n)}var r0;r0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,JI(t,e,n);ht=!!(t.flags&131072)}else ht=!1,oe&&e.flags&1048576&&ov(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ya(t,e),t=e.pendingProps;var i=Mi(e,Ze.current);Ci(e,n),i=wf(null,e,r,t,i,n);var s=Tf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(s=!0,El(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gf(e),i.updater=du,e.stateNode=i,i._reactInternals=e,zh(e,r,t,n),e=qh(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&uf(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ya(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fR(r),t=Mt(r,t),i){case 0:e=Wh(null,e,r,t,n);break e;case 1:e=eg(null,e,r,t,n);break e;case 11:e=Jm(null,e,r,t,n);break e;case 14:e=Zm(null,e,r,Mt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Wh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),eg(t,e,r,i,n);case 3:e:{if($v(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cv(t,e),Sl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=$i(Error(S(423)),e),e=tg(t,e,r,n,i);break e}else if(r!==i){i=$i(Error(S(424)),e),e=tg(t,e,r,n,i);break e}else for(vt=Qn(e.stateNode.containerInfo.firstChild),Tt=e,oe=!0,Ft=null,n=pv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ui(),r===i){e=wn(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return mv(e),t===null&&$h(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vh(r,i)?o=null:s!==null&&Vh(r,s)&&(e.flags|=32),bv(t,e),it(t,e,o,n),e.child;case 6:return t===null&&$h(e),null;case 13:return jv(t,e,n);case 4:return yf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fi(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Jm(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,te(Il,r._currentValue),r._currentValue=o,s!==null)if(jt(s.value,o)){if(s.children===i.children&&!ft.current){e=wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=gn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ci(e,n),i=Ot(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),Zm(t,e,r,i,n);case 15:return Uv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Ya(t,e),e.tag=1,pt(r)?(t=!0,El(e)):t=!1,Ci(e,n),dv(e,r,i),zh(e,r,i,n),qh(null,e,r,!0,t,n);case 19:return Bv(t,e,n);case 22:return Fv(t,e,n)}throw Error(S(156,e.tag))};function i0(t,e){return N_(t,e)}function dR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new dR(t,e,n,r)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fR(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xd)return 11;if(t===Yd)return 14}return 2}function Zn(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ci:return Or(n.children,i,s,e);case Qd:o=8,i|=8;break;case fh:return t=xt(12,n,e,i|2),t.elementType=fh,t.lanes=s,t;case ph:return t=xt(13,n,e,i),t.elementType=ph,t.lanes=s,t;case mh:return t=xt(19,n,e,i),t.elementType=mh,t.lanes=s,t;case f_:return gu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case h_:o=10;break e;case d_:o=9;break e;case Xd:o=11;break e;case Yd:o=14;break e;case xn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Or(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function gu(t,e,n,r){return t=xt(22,t,r,e),t.elementType=f_,t.lanes=n,t.stateNode={isHidden:!1},t}function Dc(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function Oc(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Of(t,e,n,r,i,s,o,a,l){return t=new pR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(s),t}function mR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function s0(t){if(!t)return or;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(pt(n))return iv(t,n,e)}return e}function o0(t,e,n,r,i,s,o,a,l){return t=Of(n,r,!0,t,i,s,o,a,l),t.context=s0(null),n=t.current,r=ot(),i=Jn(n),s=gn(r,i),s.callback=e??null,Xn(n,s,i),t.current.lanes=i,Mo(t,i,r),mt(t,r),t}function yu(t,e,n,r){var i=e.current,s=ot(),o=Jn(i);return n=s0(n),e.context===null?e.context=n:e.pendingContext=n,e=gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xn(i,e,o),t!==null&&($t(t,i,o,s),Ga(t,i,o)),o}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lf(t,e){hg(t,e),(t=t.alternate)&&hg(t,e)}function gR(){return null}var a0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}_u.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));yu(t,e,null,null)};_u.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){yu(null,t,null,null)}),e[vn]=null}};function _u(t){this._internalRoot=t}_u.prototype.unstable_scheduleHydration=function(t){if(t){var e=U_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<On.length&&e!==0&&e<On[n].priority;n++);On.splice(n,0,t),n===0&&b_(t)}};function Mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dg(){}function yR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ol(o);s.call(u)}}var o=o0(e,r,t,0,null,!1,!1,"",dg);return t._reactRootContainer=o,t[vn]=o.current,oo(t.nodeType===8?t.parentNode:t),jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ol(l);a.call(u)}}var l=Of(t,0,!1,null,null,!1,!1,"",dg);return t._reactRootContainer=l,t[vn]=l.current,oo(t.nodeType===8?t.parentNode:t),jr(function(){yu(e,l,n,r)}),l}function Eu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ol(o);a.call(l)}}yu(e,o,t,i)}else o=yR(n,e,t,i,r);return Ol(o)}V_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Rs(e.pendingLanes);n!==0&&(ef(e,n|1),mt(e,ye()),!(Q&6)&&(ji=ye()+500,fr()))}break;case 13:jr(function(){var r=En(t,1);if(r!==null){var i=ot();$t(r,t,1,i)}}),Lf(t,1)}};tf=function(t){if(t.tag===13){var e=En(t,134217728);if(e!==null){var n=ot();$t(e,t,134217728,n)}Lf(t,134217728)}};M_=function(t){if(t.tag===13){var e=Jn(t),n=En(t,e);if(n!==null){var r=ot();$t(n,t,e,r)}Lf(t,e)}};U_=function(){return J};F_=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};Sh=function(t,e,n){switch(e){case"input":if(_h(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cu(r);if(!i)throw Error(S(90));m_(r),_h(r,i)}}}break;case"textarea":y_(t,n);break;case"select":e=n.value,e!=null&&Ii(t,!!n.multiple,e,!1)}};R_=Pf;S_=jr;var _R={usingClientEntryPoint:!1,Events:[Fo,pi,cu,T_,I_,Pf]},_s={findFiberByHostInstance:Ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vR={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=k_(t),t===null?null:t.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||gR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{ou=ka.inject(vR),Yt=ka}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_R;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(e))throw Error(S(200));return mR(t,e,null,n)};St.createRoot=function(t,e){if(!Mf(t))throw Error(S(299));var n=!1,r="",i=a0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Of(t,1,!1,null,null,n,!1,r,i),t[vn]=e.current,oo(t.nodeType===8?t.parentNode:t),new Vf(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=k_(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return jr(t)};St.hydrate=function(t,e,n){if(!vu(e))throw Error(S(200));return Eu(null,t,e,!0,n)};St.hydrateRoot=function(t,e,n){if(!Mf(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=a0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=o0(e,null,t,1,n??null,i,!1,s,o),t[vn]=e.current,oo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _u(e)};St.render=function(t,e,n){if(!vu(e))throw Error(S(200));return Eu(null,t,e,!1,n)};St.unmountComponentAtNode=function(t){if(!vu(t))throw Error(S(40));return t._reactRootContainer?(jr(function(){Eu(null,null,t,!1,function(){t._reactRootContainer=null,t[vn]=null})}),!0):!1};St.unstable_batchedUpdates=Pf;St.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vu(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Eu(t,e,n,!1,r)};St.version="18.2.0-next-9e3b772b8-20220608";function l0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l0)}catch(t){console.error(t)}}l0(),o_.exports=St;var ER=o_.exports,fg=ER;hh.createRoot=fg.createRoot,hh.hydrateRoot=fg.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},go.apply(this,arguments)}var Bn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Bn||(Bn={}));const pg="popstate";function wR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return id("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ll(i)}return IR(e,n,null,t)}function _e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Uf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function TR(){return Math.random().toString(36).substr(2,8)}function mg(t,e){return{usr:t.state,key:t.key,idx:e}}function id(t,e,n,r){return n===void 0&&(n=null),go({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ts(e):e,{state:n,key:e&&e.key||r||TR()})}function Ll(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ts(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function IR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Bn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(go({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Bn.Pop;let v=c(),p=v==null?null:v-u;u=v,l&&l({action:a,location:_.location,delta:p})}function d(v,p){a=Bn.Push;let f=id(_.location,v,p);n&&n(f,v),u=c()+1;let g=mg(f,u),E=_.createHref(f);try{o.pushState(g,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function m(v,p){a=Bn.Replace;let f=id(_.location,v,p);n&&n(f,v),u=c();let g=mg(f,u),E=_.createHref(f);o.replaceState(g,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function y(v){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof v=="string"?v:Ll(v);return _e(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let _={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(pg,h),l=v,()=>{i.removeEventListener(pg,h),l=null}},createHref(v){return e(i,v)},createURL:y,encodeLocation(v){let p=y(v);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(v){return o.go(v)}};return _}var gg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gg||(gg={}));function RR(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ts(e):e,i=Ff(r.pathname||"/",n);if(i==null)return null;let s=u0(t);SR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=LR(s[a],UR(i));return o}function u0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=er([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),u0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:DR(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of c0(s.path))i(s,o,l)}),e}function c0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=c0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function SR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:OR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AR=/^:\w+$/,CR=3,kR=2,PR=1,NR=10,xR=-2,yg=t=>t==="*";function DR(t,e){let n=t.split("/"),r=n.length;return n.some(yg)&&(r+=xR),e&&(r+=kR),n.filter(i=>!yg(i)).reduce((i,s)=>i+(AR.test(s)?CR:s===""?PR:NR),r)}function OR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function LR(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=VR({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:er([i,c.pathname]),pathnameBase:jR(er([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=er([i,c.pathnameBase]))}return s}function VR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=MR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=FR(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function MR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Uf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function UR(t){try{return decodeURI(t)}catch(e){return Uf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function FR(t,e){try{return decodeURIComponent(t)}catch(n){return Uf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ff(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function bR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ts(t):t;return{pathname:n?n.startsWith("/")?n:$R(n,e):e,search:BR(r),hash:zR(i)}}function $R(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Lc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bf(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $f(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ts(t):(i=go({},t),_e(!i.pathname||!i.pathname.includes("?"),Lc("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),Lc("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),Lc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=bR(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const er=t=>t.join("/").replace(/\/\/+/g,"/"),jR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function HR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const h0=["post","put","patch","delete"];new Set(h0);const WR=["get",...h0];new Set(WR);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vl(){return Vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vl.apply(this,arguments)}const jf=T.createContext(null),qR=T.createContext(null),ns=T.createContext(null),wu=T.createContext(null),pr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),d0=T.createContext(null);function KR(t,e){let{relative:n}=e===void 0?{}:e;rs()||_e(!1);let{basename:r,navigator:i}=T.useContext(ns),{hash:s,pathname:o,search:a}=p0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:er([r,o])),i.createHref({pathname:l,search:a,hash:s})}function rs(){return T.useContext(wu)!=null}function $o(){return rs()||_e(!1),T.useContext(wu).location}function f0(t){T.useContext(ns).static||T.useLayoutEffect(t)}function jo(){let{isDataRoute:t}=T.useContext(pr);return t?oS():GR()}function GR(){rs()||_e(!1);let t=T.useContext(jf),{basename:e,navigator:n}=T.useContext(ns),{matches:r}=T.useContext(pr),{pathname:i}=$o(),s=JSON.stringify(bf(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return f0(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=$f(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:er([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function p0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=T.useContext(pr),{pathname:i}=$o(),s=JSON.stringify(bf(r).map(o=>o.pathnameBase));return T.useMemo(()=>$f(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function QR(t,e){return XR(t,e)}function XR(t,e,n){rs()||_e(!1);let{navigator:r}=T.useContext(ns),{matches:i}=T.useContext(pr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=$o(),u;if(e){var c;let _=typeof e=="string"?ts(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||_e(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=RR(t,{pathname:d}),y=tS(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:er([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:er([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?T.createElement(wu.Provider,{value:{location:Vl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Bn.Pop}},y):y}function YR(){let t=sS(),e=HR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,s)}const JR=T.createElement(YR,null);class ZR extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?T.createElement(pr.Provider,{value:this.props.routeContext},T.createElement(d0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eS(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(jf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(pr.Provider,{value:e},r)}function tS(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||_e(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||JR);let d=e.concat(s.slice(0,u+1)),m=()=>{let y;return c?y=h:l.route.Component?y=T.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,T.createElement(eS,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(ZR,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var sd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(sd||(sd={}));var yo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(yo||(yo={}));function nS(t){let e=T.useContext(jf);return e||_e(!1),e}function rS(t){let e=T.useContext(qR);return e||_e(!1),e}function iS(t){let e=T.useContext(pr);return e||_e(!1),e}function m0(t){let e=iS(),n=e.matches[e.matches.length-1];return n.route.id||_e(!1),n.route.id}function sS(){var t;let e=T.useContext(d0),n=rS(yo.UseRouteError),r=m0(yo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function oS(){let{router:t}=nS(sd.UseNavigateStable),e=m0(yo.UseNavigateStable),n=T.useRef(!1);return f0(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Vl({fromRouteId:e},s)))},[t,e])}function Vc(t){let{to:e,replace:n,state:r,relative:i}=t;rs()||_e(!1);let{matches:s}=T.useContext(pr),{pathname:o}=$o(),a=jo(),l=$f(e,bf(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return T.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Ir(t){_e(!1)}function aS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Bn.Pop,navigator:s,static:o=!1}=t;rs()&&_e(!1);let a=e.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ts(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=T.useMemo(()=>{let _=Ff(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return y==null?null:T.createElement(ns.Provider,{value:l},T.createElement(wu.Provider,{children:n,value:y}))}function lS(t){let{children:e,location:n}=t;return QR(od(e),n)}var _g;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(_g||(_g={}));new Promise(()=>{});function od(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,od(r.props.children,s));return}r.type!==Ir&&_e(!1),!r.props.index||!r.props.children||_e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=od(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ad(){return ad=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ad.apply(this,arguments)}function uS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function cS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hS(t,e){return t.button===0&&(!e||e==="_self")&&!cS(t)}const dS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],fS="startTransition",vg=cT[fS];function pS(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=wR({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(h=>{u&&vg?vg(()=>l(h)):l(h)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(aS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const mS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mc=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=uS(e,dS),{basename:d}=T.useContext(ns),m,y=!1;if(typeof u=="string"&&gS.test(u)&&(m=u,mS))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=Ff(g.pathname,d);g.origin===f.origin&&E!=null?u=E+g.search+g.hash:y=!0}catch{}let _=KR(u,{relative:i}),v=yS(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||v(f)}return T.createElement("a",ad({},h,{href:m||_,onClick:y||s?r:p,ref:n,target:l}))});var Eg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Eg||(Eg={}));var wg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wg||(wg={}));function yS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=jo(),l=$o(),u=p0(t,{relative:o});return T.useCallback(c=>{if(hS(c,n)){c.preventDefault();let h=r!==void 0?r:Ll(l)===Ll(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function g0(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=g0(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function zn(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=g0(t))&&(r&&(r+=" "),r+=e);return r}const zs=t=>typeof t=="number"&&!isNaN(t),Br=t=>typeof t=="string",dt=t=>typeof t=="function",tl=t=>Br(t)||dt(t)?t:null,Uc=t=>T.isValidElement(t)||Br(t)||dt(t)||zs(t);function _S(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Tu(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:h,isIn:d}=o;const m=r?`${e}--${l}`:e,y=r?`${n}--${l}`:n,_=T.useRef(0);return T.useLayoutEffect(()=>{const v=h.current,p=m.split(" "),f=g=>{g.target===h.current&&(v.dispatchEvent(new Event("d")),v.removeEventListener("animationend",f),v.removeEventListener("animationcancel",f),_.current===0&&g.type!=="animationcancel"&&v.classList.remove(...p))};v.classList.add(...p),v.addEventListener("animationend",f),v.addEventListener("animationcancel",f)},[]),T.useEffect(()=>{const v=h.current,p=()=>{v.removeEventListener("animationend",p),i?_S(v,c,s):c()};d||(u?p():(_.current=1,v.className+=` ${y}`,v.addEventListener("animationend",p)))},[d]),ee.createElement(ee.Fragment,null,a)}}function Tg(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Ct={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},Pa=t=>{let{theme:e,type:n,...r}=t;return ee.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Fc={info:function(t){return ee.createElement(Pa,{...t},ee.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return ee.createElement(Pa,{...t},ee.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return ee.createElement(Pa,{...t},ee.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return ee.createElement(Pa,{...t},ee.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return ee.createElement("div",{className:"Toastify__spinner"})}};function vS(t){const[,e]=T.useReducer(m=>m+1,0),[n,r]=T.useState([]),i=T.useRef(null),s=T.useRef(new Map).current,o=m=>n.indexOf(m)!==-1,a=T.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:m=>s.get(m)}).current;function l(m){let{containerId:y}=m;const{limit:_}=a.props;!_||y&&a.containerId!==y||(a.count-=a.queue.length,a.queue=[])}function u(m){r(y=>m==null?[]:y.filter(_=>_!==m))}function c(){const{toastContent:m,toastProps:y,staleId:_}=a.queue.shift();d(m,y,_)}function h(m,y){let{delay:_,staleId:v,...p}=y;if(!Uc(m)||function(ke){return!i.current||a.props.enableMultiContainer&&ke.containerId!==a.props.containerId||s.has(ke.toastId)&&ke.updateId==null}(p))return;const{toastId:f,updateId:g,data:E}=p,{props:I}=a,C=()=>u(f),P=g==null;P&&a.count++;const k={...I,style:I.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(p).filter(ke=>{let[nt,Be]=ke;return Be!=null})),toastId:f,updateId:g,data:E,closeToast:C,isIn:!1,className:tl(p.className||I.toastClassName),bodyClassName:tl(p.bodyClassName||I.bodyClassName),progressClassName:tl(p.progressClassName||I.progressClassName),autoClose:!p.isLoading&&(H=p.autoClose,F=I.autoClose,H===!1||zs(H)&&H>0?H:F),deleteToast(){const ke=Tg(s.get(f),"removed");s.delete(f),Ct.emit(4,ke);const nt=a.queue.length;if(a.count=f==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),nt>0){const Be=f==null?a.props.limit:1;if(nt===1||Be===1)a.displayedToast++,c();else{const ln=Be>nt?nt:Be;a.displayedToast=ln;for(let Ve=0;Ve<ln;Ve++)c()}}else e()}};var H,F;k.iconOut=function(ke){let{theme:nt,type:Be,isLoading:ln,icon:Ve}=ke,yt=null;const x={theme:nt,type:Be};return Ve===!1||(dt(Ve)?yt=Ve(x):T.isValidElement(Ve)?yt=T.cloneElement(Ve,x):Br(Ve)||zs(Ve)?yt=Ve:ln?yt=Fc.spinner():(b=>b in Fc)(Be)&&(yt=Fc[Be](x))),yt}(k),dt(p.onOpen)&&(k.onOpen=p.onOpen),dt(p.onClose)&&(k.onClose=p.onClose),k.closeButton=I.closeButton,p.closeButton===!1||Uc(p.closeButton)?k.closeButton=p.closeButton:p.closeButton===!0&&(k.closeButton=!Uc(I.closeButton)||I.closeButton);let Ie=m;T.isValidElement(m)&&!Br(m.type)?Ie=T.cloneElement(m,{closeToast:C,toastProps:k,data:E}):dt(m)&&(Ie=m({closeToast:C,toastProps:k,data:E})),I.limit&&I.limit>0&&a.count>I.limit&&P?a.queue.push({toastContent:Ie,toastProps:k,staleId:v}):zs(_)?setTimeout(()=>{d(Ie,k,v)},_):d(Ie,k,v)}function d(m,y,_){const{toastId:v}=y;_&&s.delete(_);const p={content:m,props:y};s.set(v,p),r(f=>[...f,v].filter(g=>g!==_)),Ct.emit(4,Tg(p,p.props.updateId==null?"added":"updated"))}return T.useEffect(()=>(a.containerId=t.containerId,Ct.cancelEmit(3).on(0,h).on(1,m=>i.current&&u(m)).on(5,l).emit(2,a),()=>{s.clear(),Ct.emit(3,a)}),[]),T.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(m){const y=new Map,_=Array.from(s.values());return t.newestOnTop&&_.reverse(),_.forEach(v=>{const{position:p}=v.props;y.has(p)||y.set(p,[]),y.get(p).push(v)}),Array.from(y,v=>m(v[0],v[1]))},containerRef:i,isToastActive:o}}function Ig(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function Rg(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function ES(t){const[e,n]=T.useState(!1),[r,i]=T.useState(!1),s=T.useRef(null),o=T.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=T.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:h,closeOnClick:d}=t;function m(E){if(t.draggable){E.nativeEvent.type==="touchstart"&&E.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",p),document.addEventListener("mouseup",f),document.addEventListener("touchmove",p),document.addEventListener("touchend",f);const I=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=I.getBoundingClientRect(),I.style.transition="",o.x=Ig(E.nativeEvent),o.y=Rg(E.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=I.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=I.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function y(E){if(o.boundingRect){const{top:I,bottom:C,left:P,right:k}=o.boundingRect;E.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=P&&o.x<=k&&o.y>=I&&o.y<=C?v():_()}}function _(){n(!0)}function v(){n(!1)}function p(E){const I=s.current;o.canDrag&&I&&(o.didMove=!0,e&&v(),o.x=Ig(E),o.y=Rg(E),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),I.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,I.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function f(){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",f);const E=s.current;if(o.canDrag&&o.didMove&&E){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();E.style.transition="transform 0.2s, opacity 0.2s",E.style.transform=`translate${t.draggableDirection}(0)`,E.style.opacity="1"}}T.useEffect(()=>{a.current=t}),T.useEffect(()=>(s.current&&s.current.addEventListener("d",_,{once:!0}),dt(t.onOpen)&&t.onOpen(T.isValidElement(t.children)&&t.children.props),()=>{const E=a.current;dt(E.onClose)&&E.onClose(T.isValidElement(E.children)&&E.children.props)}),[]),T.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||v(),window.addEventListener("focus",_),window.addEventListener("blur",v)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",v))}),[t.pauseOnFocusLoss]);const g={onMouseDown:m,onTouchStart:m,onMouseUp:y,onTouchEnd:y};return l&&u&&(g.onMouseEnter=v,g.onMouseLeave=_),d&&(g.onClick=E=>{h&&h(E),o.canCloseOnClick&&c()}),{playToast:_,pauseToast:v,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:g}}function y0(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return ee.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},ee.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ee.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function wS(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:h,theme:d}=t;const m=s||l&&u===0,y={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:m?0:1};l&&(y.transform=`scaleX(${u})`);const _=zn("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),v=dt(o)?o({rtl:c,type:i,defaultClassName:_}):zn(_,o);return ee.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:v,style:y,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}})}const TS=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=ES(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:h,transition:d,position:m,className:y,style:_,bodyClassName:v,bodyStyle:p,progressClassName:f,progressStyle:g,updateId:E,role:I,progress:C,rtl:P,toastId:k,deleteToast:H,isIn:F,isLoading:Ie,iconOut:ke,closeOnClick:nt,theme:Be}=t,ln=zn("Toastify__toast",`Toastify__toast-theme--${Be}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":nt}),Ve=dt(y)?y({rtl:P,position:m,type:u,defaultClassName:ln}):zn(ln,y),yt=!!C||!a,x={closeToast:h,type:u,theme:Be};let b=null;return s===!1||(b=dt(s)?s(x):T.isValidElement(s)?T.cloneElement(s,x):y0(x)),ee.createElement(d,{isIn:F,done:H,position:m,preventExitTransition:n,nodeRef:r},ee.createElement("div",{id:k,onClick:l,className:Ve,...i,style:_,ref:r},ee.createElement("div",{...F&&{role:I},className:dt(v)?v({type:u}):zn("Toastify__toast-body",v),style:p},ke!=null&&ee.createElement("div",{className:zn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Ie})},ke),ee.createElement("div",null,o)),b,ee.createElement(wS,{...E&&!yt?{key:`pb-${E}`}:{},rtl:P,theme:Be,delay:a,isRunning:e,isIn:F,closeToast:h,hide:c,type:u,style:g,className:f,controlledProgress:yt,progress:C||0})))},Iu=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},IS=Tu(Iu("bounce",!0)),RS=Tu(Iu("slide",!0));Tu(Iu("zoom"));Tu(Iu("flip"));const ld=T.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=vS(t),{className:s,style:o,rtl:a,containerId:l}=t;function u(c){const h=zn("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":a});return dt(s)?s({position:c,rtl:a,defaultClassName:h}):zn(h,tl(s))}return T.useEffect(()=>{e&&(e.current=r.current)},[]),ee.createElement("div",{ref:r,className:"Toastify",id:l},n((c,h)=>{const d=h.length?{...o}:{...o,pointerEvents:"none"};return ee.createElement("div",{className:u(c),style:d,key:`container-${c}`},h.map((m,y)=>{let{content:_,props:v}=m;return ee.createElement(TS,{...v,isIn:i(v.toastId),style:{...v.style,"--nth":y+1,"--len":h.length},key:`toast-${v.key}`},_)}))}))});ld.displayName="ToastContainer",ld.defaultProps={position:"top-right",transition:IS,autoClose:5e3,closeButton:y0,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let bc,Rr=new Map,As=[],SS=1;function _0(){return""+SS++}function AS(t){return t&&(Br(t.toastId)||zs(t.toastId))?t.toastId:_0()}function Hs(t,e){return Rr.size>0?Ct.emit(0,t,e):As.push({content:t,options:e}),e.toastId}function Ml(t,e){return{...e,type:e&&e.type||t,toastId:AS(e)}}function Na(t){return(e,n)=>Hs(e,Ml(t,n))}function V(t,e){return Hs(t,Ml("default",e))}V.loading=(t,e)=>Hs(t,Ml("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),V.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Br(i)?V.loading(i,n):V.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,h,d)=>{if(h==null)return void V.dismiss(r);const m={type:c,...a,...n,data:d},y=Br(h)?{render:h}:h;return r?V.update(r,{...m,...y}):V(y.render,{...m,...y}),d},u=dt(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},V.success=Na("success"),V.info=Na("info"),V.error=Na("error"),V.warning=Na("warning"),V.warn=V.warning,V.dark=(t,e)=>Hs(t,Ml("default",{theme:"dark",...e})),V.dismiss=t=>{Rr.size>0?Ct.emit(1,t):As=As.filter(e=>t!=null&&e.options.toastId!==t)},V.clearWaitingQueue=function(t){return t===void 0&&(t={}),Ct.emit(5,t)},V.isActive=t=>{let e=!1;return Rr.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},V.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=Rr.get(s||bc);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:_0()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Hs(o,s)}},0)},V.done=t=>{V.update(t,{progress:1})},V.onChange=t=>(Ct.on(4,t),()=>{Ct.off(4,t)}),V.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},V.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Ct.on(2,t=>{bc=t.containerId||t,Rr.set(bc,t),As.forEach(e=>{Ct.emit(0,e.content,e.options)}),As=[]}).on(3,t=>{Rr.delete(t.containerId||t),Rr.size===0&&Ct.off(0).off(1).off(5)});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},CS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},E0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(v0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new kS;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PS=function(t){const e=v0(t);return E0.encodeByteArray(e,!0)},Ul=function(t){return PS(t).replace(/\./g,"")},w0=function(t){try{return E0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=()=>NS().__FIREBASE_DEFAULTS__,DS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&w0(t[1]);return e&&JSON.parse(e)},Ru=()=>{try{return xS()||DS()||OS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T0=t=>{var e,n;return(n=(e=Ru())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},I0=t=>{const e=T0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},R0=()=>{var t;return(t=Ru())===null||t===void 0?void 0:t.config},S0=t=>{var e;return(e=Ru())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ul(JSON.stringify(n)),Ul(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function MS(){var t;const e=(t=Ru())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function US(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bS(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $S(){try{return typeof indexedDB=="object"}catch{return!1}}function jS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BS,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bo.prototype.create)}}class Bo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new an(i,a,r)}}function zS(t,e){return t.replace(HS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HS=/\{\$([^}]+)}/g;function WS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sg(s)&&Sg(o)){if(!Fl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qS(t,e){const n=new KS(t,e);return n.subscribe.bind(n)}class KS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$c),i.error===void 0&&(i.error=$c),i.complete===void 0&&(i.complete=$c);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $c(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new LS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YS(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XS(t){return t===Sr?void 0:t}function YS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const ZS={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},eA=X.INFO,tA={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},nA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bf{constructor(e){this.name=e,this._logLevel=eA,this._logHandler=nA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const rA=(t,e)=>e.some(n=>t instanceof n);let Ag,Cg;function iA(){return Ag||(Ag=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sA(){return Cg||(Cg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C0=new WeakMap,ud=new WeakMap,k0=new WeakMap,jc=new WeakMap,zf=new WeakMap;function oA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&C0.set(n,t)}).catch(()=>{}),zf.set(e,t),e}function aA(t){if(ud.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ud.set(t,e)}let cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||k0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lA(t){cd=t(cd)}function uA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bc(this),e,...n);return k0.set(r,e.sort?e.sort():[e]),tr(r)}:sA().includes(t)?function(...e){return t.apply(Bc(this),e),tr(C0.get(this))}:function(...e){return tr(t.apply(Bc(this),e))}}function cA(t){return typeof t=="function"?uA(t):(t instanceof IDBTransaction&&aA(t),rA(t,iA())?new Proxy(t,cd):t)}function tr(t){if(t instanceof IDBRequest)return oA(t);if(jc.has(t))return jc.get(t);const e=cA(t);return e!==t&&(jc.set(t,e),zf.set(e,t)),e}const Bc=t=>zf.get(t);function hA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tr(o.result),l.oldVersion,l.newVersion,tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const dA=["get","getKey","getAll","getAllKeys","count"],fA=["put","add","delete","clear"],zc=new Map;function kg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zc.get(e))return zc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return zc.set(e,s),s}lA(t=>({...t,get:(e,n,r)=>kg(e,n)||t.get(e,n,r),has:(e,n)=>!!kg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",Pg="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Bf("@firebase/app"),gA="@firebase/app-compat",yA="@firebase/analytics-compat",_A="@firebase/analytics",vA="@firebase/app-check-compat",EA="@firebase/app-check",wA="@firebase/auth",TA="@firebase/auth-compat",IA="@firebase/database",RA="@firebase/database-compat",SA="@firebase/functions",AA="@firebase/functions-compat",CA="@firebase/installations",kA="@firebase/installations-compat",PA="@firebase/messaging",NA="@firebase/messaging-compat",xA="@firebase/performance",DA="@firebase/performance-compat",OA="@firebase/remote-config",LA="@firebase/remote-config-compat",VA="@firebase/storage",MA="@firebase/storage-compat",UA="@firebase/firestore",FA="@firebase/firestore-compat",bA="firebase",$A="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="[DEFAULT]",jA={[hd]:"fire-core",[gA]:"fire-core-compat",[_A]:"fire-analytics",[yA]:"fire-analytics-compat",[EA]:"fire-app-check",[vA]:"fire-app-check-compat",[wA]:"fire-auth",[TA]:"fire-auth-compat",[IA]:"fire-rtdb",[RA]:"fire-rtdb-compat",[SA]:"fire-fn",[AA]:"fire-fn-compat",[CA]:"fire-iid",[kA]:"fire-iid-compat",[PA]:"fire-fcm",[NA]:"fire-fcm-compat",[xA]:"fire-perf",[DA]:"fire-perf-compat",[OA]:"fire-rc",[LA]:"fire-rc-compat",[VA]:"fire-gcs",[MA]:"fire-gcs-compat",[UA]:"fire-fst",[FA]:"fire-fst-compat","fire-js":"fire-js",[bA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=new Map,fd=new Map;function BA(t,e){try{t.container.addComponent(e)}catch(n){zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hr(t){const e=t.name;if(fd.has(e))return zr.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,t);for(const n of bl.values())BA(n,t);return!0}function Su(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nr=new Bo("app","Firebase",zA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=$A;function P0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw nr.create("bad-app-name",{appName:String(i)});if(n||(n=R0()),!n)throw nr.create("no-options");const s=bl.get(i);if(s){if(Fl(n,s.options)&&Fl(r,s.config))return s;throw nr.create("duplicate-app",{appName:i})}const o=new JS(i);for(const l of fd.values())o.addComponent(l);const a=new HA(n,r,o);return bl.set(i,a),a}function Hf(t=dd){const e=bl.get(t);if(!e&&t===dd&&R0())return P0();if(!e)throw nr.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let i=(r=jA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zr.warn(a.join(" "));return}Hr(new ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="firebase-heartbeat-database",qA=1,_o="firebase-heartbeat-store";let Hc=null;function N0(){return Hc||(Hc=hA(WA,qA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_o)}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),Hc}async function KA(t){try{return await(await N0()).transaction(_o).objectStore(_o).get(x0(t))}catch(e){if(e instanceof an)zr.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zr.warn(n.message)}}}async function Ng(t,e){try{const r=(await N0()).transaction(_o,"readwrite");await r.objectStore(_o).put(e,x0(t)),await r.done}catch(n){if(n instanceof an)zr.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zr.warn(r.message)}}}function x0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=1024,QA=30*24*60*60*1e3;class XA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=QA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xg(),{heartbeatsToSend:n,unsentEntries:r}=YA(this._heartbeatsCache.heartbeats),i=Ul(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xg(){return new Date().toISOString().substring(0,10)}function YA(t,e=GA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $S()?jS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await KA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dg(t){return Ul(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t){Hr(new ar("platform-logger",e=>new pA(e),"PRIVATE")),Hr(new ar("heartbeat",e=>new XA(e),"PRIVATE")),Zt(hd,Pg,t),Zt(hd,Pg,"esm2017"),Zt("fire-js","")}ZA("");var eC="firebase",tC="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(eC,tC,"app");function Wf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function D0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nC=D0,O0=new Bo("auth","Firebase",D0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=new Bf("@firebase/auth");function rC(t,...e){$l.logLevel<=X.WARN&&$l.warn(`Auth (${Zr}): ${t}`,...e)}function nl(t,...e){$l.logLevel<=X.ERROR&&$l.error(`Auth (${Zr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw qf(t,...e)}function en(t,...e){return qf(t,...e)}function iC(t,e,n){const r=Object.assign(Object.assign({},nC()),{[e]:n});return new Bo("auth","Firebase",r).create(e,{appName:t.name})}function qf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return O0.create(t,...e)}function U(t,e,...n){if(!t)throw qf(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nl(e),new Error(e)}function Tn(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sC(){return Og()==="http:"||Og()==="https:"}function Og(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sC()||US()||"connection"in navigator)?navigator.onLine:!0}function aC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=VS()||FS()}get(){return oC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=new Ho(3e4,6e4);function ei(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mr(t,e,n,r,i={}){return V0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),L0.fetch()(M0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function V0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lC),e);try{const i=new cC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw iC(t,c,u);Bt(t,c)}}catch(i){if(i instanceof an)throw i;Bt(t,"network-request-failed",{message:String(i)})}}async function Wo(t,e,n,r,i={}){const s=await mr(t,e,n,r,i);return"mfaPendingCredential"in s&&Bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function M0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Kf(t.config,i):`${t.config.apiScheme}://${i}`}class cC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),uC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e){return mr(t,"POST","/v1/accounts:delete",e)}async function dC(t,e){return mr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fC(t,e=!1){const n=ve(t),r=await n.getIdToken(e),i=Gf(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ws(Wc(i.auth_time)),issuedAtTime:Ws(Wc(i.iat)),expirationTime:Ws(Wc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wc(t){return Number(t)*1e3}function Gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nl("JWT malformed, contained fewer than 3 sections"),null;try{const i=w0(n);return i?JSON.parse(i):(nl("Failed to decode base64 JWT payload"),null)}catch(i){return nl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pC(t){const e=Gf(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&mC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Bi(t,dC(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vC(s.providerUserInfo):[],a=_C(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new U0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function yC(t){const e=ve(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _C(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vC(t){return t.map(e=>{var{providerId:n}=e,r=Wf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e){const n=await V0(t,{},async()=>{const r=zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=M0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",L0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await EC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vo;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new U0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bi(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fC(this,e)}reload(){return yC(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Bi(this,hC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:I,providerData:C,stsTokenManager:P}=n;U(g&&P,e,"internal-error");const k=vo.fromJSON(this.name,P);U(typeof g=="string",e,"internal-error"),Nn(h,e.name),Nn(d,e.name),U(typeof E=="boolean",e,"internal-error"),U(typeof I=="boolean",e,"internal-error"),Nn(m,e.name),Nn(y,e.name),Nn(_,e.name),Nn(v,e.name),Nn(p,e.name),Nn(f,e.name);const H=new Lr({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:I,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:k,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(H.providerData=C.map(F=>Object.assign({},F))),v&&(H._redirectEventId=v),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new vo;i.updateFromServerResponse(n);const s=new Lr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=new Map;function pn(t){Tn(t instanceof Function,"Expected a class definition");let e=Lg.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}F0.type="NONE";const Vg=F0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e,n){return`firebase:${t}:${e}:${n}`}class Pi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=rl(this.userKey,i.apiKey,s),this.fullPersistenceKey=rl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pi(pn(Vg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||pn(Vg);const o=rl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Lr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Pi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Pi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(j0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(b0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z0(e))return"Blackberry";if(H0(e))return"Webos";if(Qf(e))return"Safari";if((e.includes("chrome/")||$0(e))&&!e.includes("edge/"))return"Chrome";if(B0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function b0(t=et()){return/firefox\//i.test(t)}function Qf(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $0(t=et()){return/crios\//i.test(t)}function j0(t=et()){return/iemobile/i.test(t)}function B0(t=et()){return/android/i.test(t)}function z0(t=et()){return/blackberry/i.test(t)}function H0(t=et()){return/webos/i.test(t)}function Au(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wC(t=et()){var e;return Au(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TC(){return bS()&&document.documentMode===10}function W0(t=et()){return Au(t)||B0(t)||H0(t)||z0(t)||/windows phone/i.test(t)||j0(t)}function IC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t,e=[]){let n;switch(t){case"Browser":n=Mg(et());break;case"Worker":n=`${Mg(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${r}`}async function K0(t,e){return mr(t,"GET","/v2/recaptchaConfig",ei(t,e))}function Ug(t){return t!==void 0&&t.enterprise!==void 0}class G0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Q0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",RC().appendChild(r)})}function SC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const AC="https://www.google.com/recaptcha/enterprise.js?render=",CC="recaptcha-enterprise",kC="NO_RECAPTCHA";class X0{constructor(e){this.type=CC,this.auth=ti(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{K0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new G0(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ug(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(kC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ug(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Q0(AC+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function zi(t,e,n,r=!1){const i=new X0(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fg(this),this.idTokenSubscription=new Fg(this),this.beforeStateQueue=new PC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=O0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Pi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ve(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}async initializeRecaptchaConfig(){const e=await K0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new G0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new X0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Pi.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=q0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ti(t){return ve(t)}class Fg{constructor(e){this.auth=e,this.observer=null,this.addObserver=qS(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(t,e){const n=Su(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fl(s,e??{}))return i;Bt(i,"already-initialized")}return n.initialize({options:e})}function DC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OC(t,e,n){const r=ti(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Y0(e),{host:o,port:a}=LC(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||VC()}function Y0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LC(t){const e=Y0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bg(o)}}}function bg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function MC(t,e){return mr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qc(t,e){return Wo(t,"POST","/v1/accounts:signInWithPassword",ei(t,e))}async function UC(t,e){return mr(t,"POST","/v1/accounts:sendOobCode",ei(t,e))}async function Kc(t,e){return UC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",ei(t,e))}async function bC(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",ei(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends Xf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Eo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Eo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await zi(e,r,"signInWithPassword");return qc(e,i)}else return qc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await zi(e,r,"signInWithPassword");return qc(e,s)}else return Promise.reject(i)});case"emailLink":return FC(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return MC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bC(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t,e){return Wo(t,"POST","/v1/accounts:signInWithIdp",ei(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C="http://localhost";class Wr extends Xf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Wr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ni(e,n)}buildRequest(){const e={requestUri:$C,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BC(t){const e=Cs(ks(t)).link,n=e?Cs(ks(e)).deep_link_id:null,r=Cs(ks(t)).deep_link_id;return(r?Cs(ks(r)).link:null)||r||n||e||t}class Yf{constructor(e){var n,r,i,s,o,a;const l=Cs(ks(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=jC((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=BC(e);try{return new Yf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.providerId=is.PROVIDER_ID}static credential(e,n){return Eo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yf.parseLink(n);return U(r,"argument-error"),Eo._fromEmailAndCode(e,r.code,r.tenantId)}}is.PROVIDER_ID="password";is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends J0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends qo{constructor(){super("facebook.com")}static credential(e){return Wr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends qo{constructor(){super("github.com")}static credential(e){return Wr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends qo{constructor(){super("twitter.com")}static credential(e,n){return Wr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(t,e){return Wo(t,"POST","/v1/accounts:signUp",ei(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Lr._fromIdTokenResponse(e,r,i),o=$g(r);return new qr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$g(r);return new qr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $g(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends an{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bl(e,n,r,i)}}function Z0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bl._fromErrorAndOperation(t,s,e,r):s})}async function zC(t,e,n=!1){const r=await Bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Bi(t,Z0(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=Gf(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),qr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(t,e,n=!1){const r="signIn",i=await Z0(t,r,e),s=await qr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function WC(t,e){return eE(ti(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t,e,n){var r;U(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),U(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(U(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(U(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e,n){var r;const i=ti(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await zi(i,s,"getOobCode",!0);n&&Qc(i,o,n),await Kc(i,o)}else n&&Qc(i,s,n),await Kc(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await zi(i,s,"getOobCode",!0);n&&Qc(i,a,n),await Kc(i,a)}else return Promise.reject(o)})}async function KC(t,e,n){var r;const i=ti(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await zi(i,s,"signUpPassword");o=Gc(i,u)}else o=Gc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await zi(i,s,"signUpPassword");return Gc(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await qr._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function GC(t,e,n){return WC(ve(t),is.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e){return mr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ve(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Bi(r,QC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function YC(t,e,n,r){return ve(t).onIdTokenChanged(e,n,r)}function JC(t,e,n){return ve(t).beforeAuthStateChanged(e,n)}function ZC(t,e,n,r){return ve(t).onAuthStateChanged(e,n,r)}const zl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zl,"1"),this.storage.removeItem(zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(){const t=et();return Qf(t)||Au(t)}const tk=1e3,nk=10;class nE extends tE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ek()&&IC(),this.fallbackToPolling=W0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nE.type="LOCAL";const rk=nE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE extends tE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rE.type="SESSION";const iE=rE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ik(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Jf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function ok(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function ak(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uk(){return sE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="firebaseLocalStorageDb",ck=1,Hl="firebaseLocalStorage",aE="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ku(t,e){return t.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function hk(){const t=indexedDB.deleteDatabase(oE);return new Ko(t).toPromise()}function md(){const t=indexedDB.open(oE,ck);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hl,{keyPath:aE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hl)?e(r):(r.close(),await hk(),e(await md()))})})}async function jg(t,e,n){const r=ku(t,!0).put({[aE]:e,value:n});return new Ko(r).toPromise()}async function dk(t,e){const n=ku(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function Bg(t,e){const n=ku(t,!0).delete(e);return new Ko(n).toPromise()}const fk=800,pk=3;class lE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cu._getInstance(uk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ak(),!this.activeServiceWorker)return;this.sender=new sk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await jg(e,zl,"1"),await Bg(e,zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ku(i,!1).getAll();return new Ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lE.type="LOCAL";const mk=lE;new Ho(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t,e){return e?pn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends Xf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yk(t){return eE(t.auth,new Zf(t),t.bypassAuthState)}function _k(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),HC(n,new Zf(t),t.bypassAuthState)}async function vk(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),zC(n,new Zf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yk;case"linkViaPopup":case"linkViaRedirect":return vk;case"reauthViaPopup":case"reauthViaRedirect":return _k;default:Bt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new Ho(2e3,1e4);class wi extends uE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ek.get())};e()}}wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="pendingRedirect",il=new Map;class Tk extends uE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=il.get(this.auth._key());if(!e){try{const r=await Ik(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}il.set(this.auth._key(),e)}return this.bypassAuthState||il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ik(t,e){const n=Ak(e),r=Sk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Rk(t,e){il.set(t._key(),e)}function Sk(t){return pn(t._redirectPersistence)}function Ak(t){return rl(wk,t.config.apiKey,t.name)}async function Ck(t,e,n=!1){const r=ti(t),i=gk(r,e),o=await new Tk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=10*60*1e3;class Pk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kk&&this.cachedEventUids.clear(),this.cachedEventUids.has(zg(e))}saveEventToCache(e){this.cachedEventUids.add(zg(e)),this.lastProcessedEventTime=Date.now()}}function zg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(t,e={}){return mr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ok=/^https?/;async function Lk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xk(t);for(const n of e)try{if(Vk(n))return}catch{}Bt(t,"unauthorized-domain")}function Vk(t){const e=pd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ok.test(n))return!1;if(Dk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new Ho(3e4,6e4);function Hg(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Uk(t){return new Promise((e,n)=>{var r,i,s;function o(){Hg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hg(),n(en(t,"network-request-failed"))},timeout:Mk.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const a=SC("iframefcb");return tn()[a]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},Q0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sl=null,e})}let sl=null;function Fk(t){return sl=sl||Uk(t),sl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=new Ho(5e3,15e3),$k="__/auth/iframe",jk="emulator/auth/iframe",Bk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hk(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kf(e,jk):`https://${t.config.authDomain}/${$k}`,r={apiKey:e.apiKey,appName:t.name,v:Zr},i=zk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zo(r).slice(1)}`}async function Wk(t){const e=await Fk(t),n=tn().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Hk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=tn().setTimeout(()=>{s(o)},bk.get());function l(){tn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kk=500,Gk=600,Qk="_blank",Xk="http://localhost";class Wg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yk(t,e,n,r=Kk,i=Gk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=et().toLowerCase();n&&(a=$0(u)?Qk:n),b0(u)&&(e=e||Xk,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(wC(u)&&a!=="_self")return Jk(e||"",a),new Wg(null);const h=window.open(e||"",a,c);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Wg(h)}function Jk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="__/auth/handler",eP="emulator/auth/handler",tP=encodeURIComponent("fac");async function qg(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zr,eventId:i};if(e instanceof J0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",WS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof qo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${tP}=${encodeURIComponent(l)}`:"";return`${nP(t)}?${zo(a).slice(1)}${u}`}function nP({config:t}){return t.emulator?Kf(t,eP):`https://${t.authDomain}/${Zk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="webStorageSupport";class rP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iE,this._completeRedirectFn=Ck,this._overrideRedirectResult=Rk}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qg(e,n,r,pd(),i);return Yk(e,o,Jf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await qg(e,n,r,pd(),i);return ok(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Wk(e),r=new Pk(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xc,{type:Xc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xc];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return W0()||Qf()||Au()}}const iP=rP;var Kg="@firebase/auth",Gg="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aP(t){Hr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:q0(t)},u=new NC(r,i,s,l);return DC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new ar("auth-internal",e=>{const n=ti(e.getProvider("auth").getImmediate());return(r=>new sP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Kg,Gg,oP(t)),Zt(Kg,Gg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=5*60,uP=S0("authIdTokenMaxAge")||lP;let Qg=null;const cP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uP)return;const i=n==null?void 0:n.token;Qg!==i&&(Qg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hP(t=Hf()){const e=Su(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xC(t,{popupRedirectResolver:iP,persistence:[mk,rk,iE]}),r=S0("authTokenSyncURL");if(r){const s=cP(r);JC(n,s,()=>s(n.currentUser)),YC(n,o=>s(o))}const i=T0("auth");return i&&OC(n,`http://${i}`),n}aP("Browser");var dP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,ep=ep||{},j=dP||self;function Pu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Go(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function fP(t){return Object.prototype.hasOwnProperty.call(t,Yc)&&t[Yc]||(t[Yc]=++pP)}var Yc="closure_uid_"+(1e9*Math.random()>>>0),pP=0;function mP(t,e,n){return t.call.apply(t.bind,arguments)}function gP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xe=mP:Xe=gP,Xe.apply(null,arguments)}function Da(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function gr(){this.s=this.s,this.o=this.o}var yP=0;gr.prototype.s=!1;gr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),yP!=0)&&fP(this)};gr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Xg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Pu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var _P=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",()=>{},e),j.removeEventListener("test",()=>{},e)}catch{}return t}();function wo(t){return/^[\s\xa0]*$/.test(t)}function Nu(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function Kt(t){return Nu().indexOf(t)!=-1}function np(t){return np[" "](t),t}np[" "]=function(){};function vP(t,e){var n=hN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var EP=Kt("Opera"),Hi=Kt("Trident")||Kt("MSIE"),dE=Kt("Edge"),gd=dE||Hi,fE=Kt("Gecko")&&!(Nu().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge"))&&!(Kt("Trident")||Kt("MSIE"))&&!Kt("Edge"),wP=Nu().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge");function pE(){var t=j.document;return t?t.documentMode:void 0}var yd;e:{var Jc="",Zc=function(){var t=Nu();if(fE)return/rv:([^\);]+)(\)|;)/.exec(t);if(dE)return/Edge\/([\d\.]+)/.exec(t);if(Hi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wP)return/WebKit\/(\S+)/.exec(t);if(EP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zc&&(Jc=Zc?Zc[1]:""),Hi){var eh=pE();if(eh!=null&&eh>parseFloat(Jc)){yd=String(eh);break e}}yd=Jc}var _d;if(j.document&&Hi){var Yg=pE();_d=Yg||parseInt(yd,10)||void 0}else _d=void 0;var TP=_d;function To(t,e){if(Ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fE){e:{try{np(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:IP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&To.$.h.call(this)}}Le(To,Ye);var IP={2:"touch",3:"pen",4:"mouse"};To.prototype.h=function(){To.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qo="closure_listenable_"+(1e6*Math.random()|0),RP=0;function SP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++RP,this.fa=this.ia=!1}function xu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function rp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function AP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function mE(t){const e={};for(const n in t)e[n]=t[n];return e}const Jg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Jg.length;s++)n=Jg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Du(t){this.src=t,this.g={},this.h=0}Du.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ed(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new SP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function vd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=hE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(xu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ed(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var ip="closure_lm_"+(1e6*Math.random()|0),th={};function yE(t,e,n,r,i){if(r&&r.once)return vE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)yE(t,e[s],n,r,i);return null}return n=ap(n),t&&t[Qo]?t.O(e,n,Go(r)?!!r.capture:!!r,i):_E(t,e,n,!1,r,i)}function _E(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Go(i)?!!i.capture:!!i,a=op(t);if(a||(t[ip]=a=new Du(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=CP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)_P||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(wE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CP(){function t(n){return e.call(t.src,t.listener,n)}const e=kP;return t}function vE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vE(t,e[s],n,r,i);return null}return n=ap(n),t&&t[Qo]?t.P(e,n,Go(r)?!!r.capture:!!r,i):_E(t,e,n,!0,r,i)}function EE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)EE(t,e[s],n,r,i);else r=Go(r)?!!r.capture:!!r,n=ap(n),t&&t[Qo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ed(s,n,r,i),-1<n&&(xu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=op(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ed(e,n,r,i)),(n=-1<t?e[t]:null)&&sp(n))}function sp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Qo])vd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=op(e))?(vd(n,t),n.h==0&&(n.src=null,e[ip]=null)):xu(t)}}}function wE(t){return t in th?th[t]:th[t]="on"+t}function kP(t,e){if(t.fa)t=!0;else{e=new To(e,this);var n=t.listener,r=t.la||t.src;t.ia&&sp(t),t=n.call(r,e)}return t}function op(t){return t=t[ip],t instanceof Du?t:null}var nh="__closure_events_fn_"+(1e9*Math.random()>>>0);function ap(t){return typeof t=="function"?t:(t[nh]||(t[nh]=function(e){return t.handleEvent(e)}),t[nh])}function Oe(){gr.call(this),this.i=new Du(this),this.S=this,this.J=null}Le(Oe,gr);Oe.prototype[Qo]=!0;Oe.prototype.removeEventListener=function(t,e,n,r){EE(this,t,e,n,r)};function $e(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ye(e,t);else if(e instanceof Ye)e.target=e.target||t;else{var i=e;e=new Ye(r,t),gE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Oa(o,r,!0,e)&&i}if(o=e.g=t,i=Oa(o,r,!0,e)&&i,i=Oa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Oa(o,r,!1,e)&&i}Oe.prototype.N=function(){if(Oe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)xu(n[r]);delete t.g[e],t.h--}}this.J=null};Oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Oe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Oa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&vd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var lp=j.JSON.stringify;class PP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function NP(){var t=up;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xP{constructor(){this.h=this.g=null}add(e,n){const r=TE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var TE=new PP(()=>new DP,t=>t.reset());class DP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function OP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function LP(t){j.setTimeout(()=>{throw t},0)}let Io,Ro=!1,up=new xP,IE=()=>{const t=j.Promise.resolve(void 0);Io=()=>{t.then(VP)}};var VP=()=>{for(var t;t=NP();){try{t.h.call(t.g)}catch(n){LP(n)}var e=TE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ro=!1};function Ou(t,e){Oe.call(this),this.h=t||1,this.g=e||j,this.j=Xe(this.qb,this),this.l=Date.now()}Le(Ou,Oe);N=Ou.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),$e(this,"tick"),this.ga&&(cp(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Ou.$.N.call(this),cp(this),delete this.g};function hp(t,e,n){if(typeof t=="function")n&&(t=Xe(t,n));else if(t&&typeof t.handleEvent=="function")t=Xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function RE(t){t.g=hp(()=>{t.g=null,t.i&&(t.i=!1,RE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class MP extends gr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:RE(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function So(t){gr.call(this),this.h=t,this.g={}}Le(So,gr);var Zg=[];function SE(t,e,n,r){Array.isArray(n)||(n&&(Zg[0]=n.toString()),n=Zg);for(var i=0;i<n.length;i++){var s=yE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function AE(t){rp(t.g,function(e,n){this.g.hasOwnProperty(n)&&sp(e)},t),t.g={}}So.prototype.N=function(){So.$.N.call(this),AE(this)};So.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lu(){this.g=!0}Lu.prototype.Ea=function(){this.g=!1};function UP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function FP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ti(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$P(t,n)+(r?" "+r:"")})}function bP(t,e){t.info(function(){return"TIMEOUT: "+e})}Lu.prototype.info=function(){};function $P(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return lp(n)}catch{return e}}var ni={},ey=null;function Vu(){return ey=ey||new Oe}ni.Ta="serverreachability";function CE(t){Ye.call(this,ni.Ta,t)}Le(CE,Ye);function Ao(t){const e=Vu();$e(e,new CE(e))}ni.STAT_EVENT="statevent";function kE(t,e){Ye.call(this,ni.STAT_EVENT,t),this.stat=e}Le(kE,Ye);function st(t){const e=Vu();$e(e,new kE(e,t))}ni.Ua="timingevent";function PE(t,e){Ye.call(this,ni.Ua,t),this.size=e}Le(PE,Ye);function Xo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var Mu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},NE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function dp(){}dp.prototype.h=null;function ty(t){return t.h||(t.h=t.i())}function xE(){}var Yo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fp(){Ye.call(this,"d")}Le(fp,Ye);function pp(){Ye.call(this,"c")}Le(pp,Ye);var wd;function Uu(){}Le(Uu,dp);Uu.prototype.g=function(){return new XMLHttpRequest};Uu.prototype.i=function(){return{}};wd=new Uu;function Jo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new So(this),this.P=jP,t=gd?125:void 0,this.V=new Ou(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new DE}function DE(){this.i=null,this.g="",this.h=!1}var jP=45e3,Td={},Wl={};N=Jo.prototype;N.setTimeout=function(t){this.P=t};function Id(t,e,n){t.L=1,t.v=bu(In(e)),t.s=n,t.S=!0,OE(t,null)}function OE(t,e){t.G=Date.now(),Zo(t),t.A=In(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),jE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new DE,t.g=lw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new MP(Xe(t.Pa,t,t.g),t.O)),SE(t.U,t.g,"readystatechange",t.nb),e=t.I?mE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ao(),UP(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&Gt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=Gt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||gd||this.g&&(this.h.h||this.g.ja()||sy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ao(3):Ao(2)),Fu(this);var n=this.g.da();this.ca=n;t:if(LE(this)){var r=sy(this.g);t="";var i=r.length,s=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),qs(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,FP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wo(a)){var u=a;break t}}u=null}if(n=u)Ti(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rd(this,n);else{this.i=!1,this.o=3,st(12),Pr(this),qs(this);break e}}this.S?(VE(this,c,o),gd&&this.i&&c==3&&(SE(this.U,this.V,"tick",this.mb),this.V.start())):(Ti(this.j,this.m,o,null),Rd(this,o)),c==4&&Pr(this),this.i&&!this.J&&(c==4?iw(this.l,this):(this.i=!1,Zo(this)))}else lN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Pr(this),qs(this)}}}catch{}finally{}};function LE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function VE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=BP(t,n),i==Wl){e==4&&(t.o=4,st(14),r=!1),Ti(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Td){t.o=4,st(15),Ti(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ti(t.j,t.m,i,null),Rd(t,i);LE(t)&&i!=Wl&&i!=Td&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,st(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ep(e),e.M=!0,st(11))):(Ti(t.j,t.m,n,"[Invalid Chunked Response]"),Pr(t),qs(t))}N.mb=function(){if(this.g){var t=Gt(this.g),e=this.g.ja();this.C<e.length&&(Fu(this),VE(this,t,e),this.i&&t!=4&&Zo(this))}};function BP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Wl:(n=Number(e.substring(n,r)),isNaN(n)?Td:(r+=1,r+n>e.length?Wl:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,Pr(this)};function Zo(t){t.Y=Date.now()+t.P,ME(t,t.P)}function ME(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xo(Xe(t.lb,t),e)}function Fu(t){t.B&&(j.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(bP(this.j,this.A),this.L!=2&&(Ao(),st(17)),Pr(this),this.o=2,qs(this)):ME(this,this.Y-t)};function qs(t){t.l.H==0||t.J||iw(t.l,t)}function Pr(t){Fu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,cp(t.V),AE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Rd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Sd(n.i,t))){if(!t.K&&Sd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Gl(n),Bu(n);else break e;vp(n),st(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xo(Xe(n.ib,n),6e3));if(1>=HE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Nr(n,11)}else if((t.K||n.g==t)&&Gl(n),!wo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(mp(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,re(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=aw(r,r.J?r.pa:null,r.Y),o.K){WE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Fu(a),Zo(a)),r.g=o}else nw(r);0<n.j.length&&zu(n)}else u[0]!="stop"&&u[0]!="close"||Nr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Nr(n,7):_p(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ao(4)}catch{}}function zP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Pu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function HP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Pu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function UE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Pu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=HP(t),r=zP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var FE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vr){this.h=t.h,ql(this,t.j),this.s=t.s,this.g=t.g,Kl(this,t.m),this.l=t.l;var e=t.i,n=new Co;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ny(this,n),this.o=t.o}else t&&(e=String(t).match(FE))?(this.h=!1,ql(this,e[1]||"",!0),this.s=Ps(e[2]||""),this.g=Ps(e[3]||"",!0),Kl(this,e[4]),this.l=Ps(e[5]||"",!0),ny(this,e[6]||"",!0),this.o=Ps(e[7]||"")):(this.h=!1,this.i=new Co(null,this.h))}Vr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,ry,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,ry,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ns(n,n.charAt(0)=="/"?GP:KP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ns(n,XP)),t.join("")};function In(t){return new Vr(t)}function ql(t,e,n){t.j=n?Ps(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Kl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ny(t,e,n){e instanceof Co?(t.i=e,YP(t.i,t.h)):(n||(e=Ns(e,QP)),t.i=new Co(e,t.h))}function re(t,e,n){t.i.set(e,n)}function bu(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ps(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ry=/[#\/\?@]/g,KP=/[#\?:]/g,GP=/[#\?]/g,QP=/[#\?@]/g,XP=/#/g;function Co(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yr(t){t.g||(t.g=new Map,t.h=0,t.i&&WP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Co.prototype;N.add=function(t,e){yr(this),this.i=null,t=ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bE(t,e){yr(t),e=ss(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $E(t,e){return yr(t),e=ss(t,e),t.g.has(e)}N.forEach=function(t,e){yr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.ta=function(){yr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.Z=function(t){yr(this);let e=[];if(typeof t=="string")$E(this,t)&&(e=e.concat(this.g.get(ss(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return yr(this),this.i=null,t=ss(this,t),$E(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function jE(t,e,n){bE(t,e),0<n.length&&(t.i=null,t.g.set(ss(t,e),tp(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function YP(t,e){e&&!t.j&&(yr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(bE(this,r),jE(this,i,n))},t)),t.j=e}var JP=class{constructor(t,e){this.g=t,this.map=e}};function BE(t){this.l=t||ZP,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ZP=10;function zE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function HE(t){return t.h?1:t.g?t.g.size:0}function Sd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mp(t,e){t.g?t.g.add(e):t.h=e}function WE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}BE.prototype.cancel=function(){if(this.i=qE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return tp(t.i)}var eN=class{stringify(t){return j.JSON.stringify(t,void 0)}parse(t){return j.JSON.parse(t,void 0)}};function tN(){this.g=new eN}function nN(t,e,n){const r=n||"";try{UE(t,function(i,s){let o=i;Go(i)&&(o=lp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function rN(t,e){const n=new Lu;if(j.Image){const r=new Image;r.onload=Da(La,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Da(La,n,r,"TestLoadImage: error",!1,e),r.onabort=Da(La,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Da(La,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function La(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ea(t){this.l=t.fc||null,this.j=t.ob||!1}Le(ea,dp);ea.prototype.g=function(){return new $u(this.l,this.j)};ea.prototype.i=function(t){return function(){return t}}({});function $u(t,e){Oe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=gp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le($u,Oe);var gp=0;N=$u.prototype;N.open=function(t,e){if(this.readyState!=gp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ko(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ta(this)),this.readyState=gp};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ko(this)),this.g&&(this.readyState=3,ko(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;KE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function KE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ta(this):ko(this),this.readyState==3&&KE(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,ta(this))};N.Ya=function(t){this.g&&(this.response=t,ta(this))};N.ka=function(){this.g&&ta(this)};function ta(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ko(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ko(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($u.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iN=j.JSON.parse;function fe(t){Oe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=GE,this.L=this.M=!1}Le(fe,Oe);var GE="",sN=/^https?$/i,oN=["POST","PUT"];N=fe.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():wd.g(),this.C=this.u?ty(this.u):ty(wd),this.g.onreadystatechange=Xe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){iy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=j.FormData&&t instanceof j.FormData,!(0<=hE(oN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{YE(this),0<this.B&&((this.L=aN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xe(this.ua,this)):this.A=hp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){iy(this,s)}};function aN(t){return Hi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof ep<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function iy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,QE(t),ju(t)}function QE(t){t.F||(t.F=!0,$e(t,"complete"),$e(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),ju(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ju(this,!0)),fe.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?XE(this):this.kb())};N.kb=function(){XE(this)};function XE(t){if(t.h&&typeof ep<"u"&&(!t.C[1]||Gt(t)!=4||t.da()!=2)){if(t.v&&Gt(t)==4)hp(t.La,0,t);else if($e(t,"readystatechange"),Gt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(FE)[1]||null;!i&&j.self&&j.self.location&&(i=j.self.location.protocol.slice(0,-1)),r=!sN.test(i?i.toLowerCase():"")}n=r}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var s=2<Gt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",QE(t)}}finally{ju(t)}}}}function ju(t,e){if(t.g){YE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=r}catch{}}}function YE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Gt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iN(e)}};function sy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case GE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function lN(t){const e={};t=(t.g&&2<=Gt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(wo(t[r]))continue;var n=OP(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}AP(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function JE(t){let e="";return rp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function yp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=JE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function vs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ZE(t){this.Ga=0,this.j=[],this.l=new Lu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=vs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=vs("baseRetryDelayMs",5e3,t),this.hb=vs("retryDelaySeedMs",1e4,t),this.eb=vs("forwardChannelMaxRetries",2,t),this.xa=vs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new BE(t&&t.concurrentRequestLimit),this.Ja=new tN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=ZE.prototype;N.ra=8;N.H=1;function _p(t){if(ew(t),t.H==3){var e=t.W++,n=In(t.I);if(re(n,"SID",t.K),re(n,"RID",e),re(n,"TYPE","terminate"),na(t,n),e=new Jo(t,t.l,e),e.L=2,e.v=bu(In(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=lw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Zo(e)}ow(t)}function Bu(t){t.g&&(Ep(t),t.g.cancel(),t.g=null)}function ew(t){Bu(t),t.u&&(j.clearTimeout(t.u),t.u=null),Gl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function zu(t){if(!zE(t.i)&&!t.m){t.m=!0;var e=t.Na;Io||IE(),Ro||(Io(),Ro=!0),up.add(e,t),t.C=0}}function uN(t,e){return HE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Xo(Xe(t.Na,t,e),sw(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Jo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=mE(s),gE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tw(this,i,e),n=In(this.I),re(n,"RID",t),re(n,"CVER",22),this.F&&re(n,"X-HTTP-Session-Id",this.F),na(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(JE(s)))+"&"+e:this.o&&yp(n,this.o,s)),mp(this.i,i),this.bb&&re(n,"TYPE","init"),this.P?(re(n,"$req",e),re(n,"SID","null"),i.aa=!0,Id(i,n,null)):Id(i,n,e),this.H=2}}else this.H==3&&(t?oy(this,t):this.j.length==0||zE(this.i)||oy(this))};function oy(t,e){var n;e?n=e.m:n=t.W++;const r=In(t.I);re(r,"SID",t.K),re(r,"RID",n),re(r,"AID",t.V),na(t,r),t.o&&t.s&&yp(r,t.o,t.s),n=new Jo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=tw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mp(t.i,n),Id(n,r,e)}function na(t,e){t.na&&rp(t.na,function(n,r){re(e,r,n)}),t.h&&UE({},function(n,r){re(e,r,n)})}function tw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Xe(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{nN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function nw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Io||IE(),Ro||(Io(),Ro=!0),up.add(e,t),t.A=0}}function vp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Xo(Xe(t.Ma,t),sw(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,rw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Xo(Xe(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),Bu(this),rw(this))};function Ep(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function rw(t){t.g=new Jo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=In(t.wa);re(e,"RID","rpc"),re(e,"SID",t.K),re(e,"AID",t.V),re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&re(e,"TO",t.qa),re(e,"TYPE","xmlhttp"),na(t,e),t.o&&t.s&&yp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=bu(In(e)),n.s=null,n.S=!0,OE(n,t)}N.ib=function(){this.v!=null&&(this.v=null,Bu(this),vp(this),st(19))};function Gl(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function iw(t,e){var n=null;if(t.g==e){Gl(t),Ep(t),t.g=null;var r=2}else if(Sd(t.i,e))n=e.F,WE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Vu(),$e(r,new PE(r,n)),zu(t)}else nw(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&uN(t,e)||r==2&&vp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Nr(t,5);break;case 4:Nr(t,10);break;case 3:Nr(t,6);break;default:Nr(t,2)}}}function sw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Nr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Xe(t.pb,t);n||(n=new Vr("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||ql(n,"https"),bu(n)),rN(n.toString(),r)}else st(2);t.H=0,t.h&&t.h.za(e),ow(t),ew(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))};function ow(t){if(t.H=0,t.ma=[],t.h){const e=qE(t.i);(e.length!=0||t.j.length!=0)&&(Xg(t.ma,e),Xg(t.ma,t.j),t.i.i.length=0,tp(t.j),t.j.length=0),t.h.ya()}}function aw(t,e,n){var r=n instanceof Vr?In(n):new Vr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Kl(r,r.m);else{var i=j.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Vr(null);r&&ql(s,r),e&&(s.g=e),i&&Kl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&re(r,n,e),re(r,"VER",t.ra),na(t,r),r}function lw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new fe(new ea({ob:!0})):new fe(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function uw(){}N=uw.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Ql(){if(Hi&&!(10<=Number(TP)))throw Error("Environmental error: no available transport.")}Ql.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){Oe.call(this),this.g=new ZE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!wo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new os(this)}Le(Rt,Oe);Rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;st(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=aw(t,null,t.Y),zu(t)};Rt.prototype.close=function(){_p(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=lp(t),t=n);e.j.push(new JP(e.fb++,t)),e.H==3&&zu(e)};Rt.prototype.N=function(){this.g.h=null,delete this.j,_p(this.g),delete this.g,Rt.$.N.call(this)};function cw(t){fp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(cw,fp);function hw(){pp.call(this),this.status=1}Le(hw,pp);function os(t){this.g=t}Le(os,uw);os.prototype.Ba=function(){$e(this.g,"a")};os.prototype.Aa=function(t){$e(this.g,new cw(t))};os.prototype.za=function(t){$e(this.g,new hw)};os.prototype.ya=function(){$e(this.g,"b")};function cN(){this.blockSize=-1}function zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Le(zt,cN);zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function rh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)rh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){rh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){rh(this,r),i=0;break}}this.h=i,this.i+=e};zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Z(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var hN={};function wp(t){return-128<=t&&128>t?vP(t,function(e){return new Z([e|0],0>e?-1:0)}):new Z([t|0],0>t?-1:0)}function Qt(t){if(isNaN(t)||!isFinite(t))return xi;if(0>t)return Fe(Qt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ad;return new Z(e,0)}function dw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Fe(dw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Qt(Math.pow(e,8)),r=xi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Qt(Math.pow(e,s)),r=r.R(s).add(Qt(o))):(r=r.R(n),r=r.add(Qt(o)))}return r}var Ad=4294967296,xi=wp(0),Cd=wp(1),ay=wp(16777216);N=Z.prototype;N.ea=function(){if(Nt(this))return-Fe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ad+r)*e,e*=Ad}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(mn(this))return"0";if(Nt(this))return"-"+Fe(this).toString(t);for(var e=Qt(Math.pow(t,6)),n=this,r="";;){var i=Yl(n,e).g;n=Xl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,mn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function mn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Nt(t){return t.h==-1}N.X=function(t){return t=Xl(this,t),Nt(t)?-1:mn(t)?0:1};function Fe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Z(n,~t.h).add(Cd)}N.abs=function(){return Nt(this)?Fe(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Z(n,n[n.length-1]&-2147483648?-1:0)};function Xl(t,e){return t.add(Fe(e))}N.R=function(t){if(mn(this)||mn(t))return xi;if(Nt(this))return Nt(t)?Fe(this).R(Fe(t)):Fe(Fe(this).R(t));if(Nt(t))return Fe(this.R(Fe(t)));if(0>this.X(ay)&&0>t.X(ay))return Qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Va(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Va(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Va(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Va(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Z(n,0)};function Va(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Es(t,e){this.g=t,this.h=e}function Yl(t,e){if(mn(e))throw Error("division by zero");if(mn(t))return new Es(xi,xi);if(Nt(t))return e=Yl(Fe(t),e),new Es(Fe(e.g),Fe(e.h));if(Nt(e))return e=Yl(t,Fe(e)),new Es(Fe(e.g),e.h);if(30<t.g.length){if(Nt(t)||Nt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Cd,r=e;0>=r.X(t);)n=ly(n),r=ly(r);var i=oi(n,1),s=oi(r,1);for(r=oi(r,2),n=oi(n,2);!mn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=oi(r,1),n=oi(n,1)}return e=Xl(t,i.R(e)),new Es(i,e)}for(i=xi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Qt(n),o=s.R(e);Nt(o)||0<o.X(t);)n-=r,s=Qt(n),o=s.R(e);mn(s)&&(s=Cd),i=i.add(s),t=Xl(t,o)}return new Es(i,t)}N.gb=function(t){return Yl(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Z(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Z(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Z(n,this.h^t.h)};function ly(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Z(n,t.h)}function oi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Z(i,t.h)}Ql.prototype.createWebChannel=Ql.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;Mu.NO_ERROR=0;Mu.TIMEOUT=8;Mu.HTTP_ERROR=6;NE.COMPLETE="complete";xE.EventType=Yo;Yo.OPEN="a";Yo.CLOSE="b";Yo.ERROR="c";Yo.MESSAGE="d";Oe.prototype.listen=Oe.prototype.O;fe.prototype.listenOnce=fe.prototype.P;fe.prototype.getLastError=fe.prototype.Sa;fe.prototype.getLastErrorCode=fe.prototype.Ia;fe.prototype.getStatus=fe.prototype.da;fe.prototype.getResponseJson=fe.prototype.Wa;fe.prototype.getResponseText=fe.prototype.ja;fe.prototype.send=fe.prototype.ha;fe.prototype.setWithCredentials=fe.prototype.Oa;zt.prototype.digest=zt.prototype.l;zt.prototype.reset=zt.prototype.reset;zt.prototype.update=zt.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=Qt;Z.fromString=dw;var dN=function(){return new Ql},fN=function(){return Vu()},ih=Mu,pN=NE,mN=ni,uy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},gN=ea,Ma=xE,yN=fe,_N=zt,Di=Z;const cy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Bf("@firebase/firestore");function hy(){return Kr.logLevel}function O(t,...e){if(Kr.logLevel<=X.DEBUG){const n=e.map(Tp);Kr.debug(`Firestore (${as}): ${t}`,...n)}}function Rn(t,...e){if(Kr.logLevel<=X.ERROR){const n=e.map(Tp);Kr.error(`Firestore (${as}): ${t}`,...n)}}function Wi(t,...e){if(Kr.logLevel<=X.WARN){const n=e.map(Tp);Kr.warn(`Firestore (${as}): ${t}`,...n)}}function Tp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: `+t;throw Rn(e),new Error(e)}function se(t,e){t||$()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class EN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wN{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string"),new fw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new qe(e)}}class TN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class IN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new TN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string"),this.R=n.token,new RN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(t,e){return t<e?-1:t>e?1:0}function qi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ce(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new Ce(0,0))}static max(){return new B(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Po.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Po?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends Po{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const CN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Po{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return CN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ae.fromString(e))}static fromName(e){return new M(ae.fromString(e).popFirst(5))}static empty(){return new M(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ae(e.slice()))}}function kN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new lr(i,M.empty(),e)}function PN(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(B.min(),M.empty(),-1)}static max(){return new lr(B.max(),M.empty(),-1)}}function NN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==xN)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ia(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ip.ae=-1;function Hu(t){return t==null}function Jl(t){return t===0&&1/t==-1/0}function ON(t){return typeof t=="number"&&Number.isInteger(t)&&!Jl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ri(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new he(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ua(this.root,e,this.comparator,!0)}}class Ua{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fy(this.data.getIterator())}getIteratorFrom(e){return new fy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class fy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Et([])}unionWith(e){let n=new Je(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new gw("Invalid base64 string: "+s):s}}(e);return new tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const LN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(se(!!t),typeof t=="string"){let e=0;const n=LN.exec(t);if(se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sp(t){const e=t.mapValue.fields.__previous_value__;return Rp(e)?Sp(e):e}function No(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rp(t)?4:MN(t)?9007199254740991:10:$()}function sn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return No(t).isEqual(No(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ur(i.timestampValue),a=ur(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Gr(i.bytesValue).isEqual(Gr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=we(i.doubleValue),a=we(s.doubleValue);return o===a?Jl(o)===Jl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return qi(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(dy(o)!==dy(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!sn(o[l],a[l])))return!1;return!0}(t,e);default:return $()}}function Do(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function Ki(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return Y(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=we(s.integerValue||s.doubleValue),l=we(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return py(t.timestampValue,e.timestampValue);case 4:return py(No(t),No(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Gr(s),l=Gr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Y(a[u],l[u]);if(c!==0)return c}return Y(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Y(we(s.latitude),we(o.latitude));return a!==0?a:Y(we(s.longitude),we(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ki(a[u],l[u]);if(c)return c}return Y(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Fa.mapValue&&o===Fa.mapValue)return 0;if(s===Fa.mapValue)return 1;if(o===Fa.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Y(l[h],c[h]);if(d!==0)return d;const m=Ki(a[l[h]],u[c[h]]);if(m!==0)return m}return Y(l.length,c.length)}(t.mapValue,e.mapValue);default:throw $()}}function py(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=ur(t),r=ur(e),i=Y(n.seconds,r.seconds);return i!==0?i:Y(n.nanos,r.nanos)}function Gi(t){return kd(t)}function kd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return M.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=kd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kd(n.fields[o])}`;return i+"}"}(t.mapValue):$()}function Pd(t){return!!t&&"integerValue"in t}function Ap(t){return!!t&&"arrayValue"in t}function my(t){return!!t&&"nullValue"in t}function gy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ol(t){return!!t&&"mapValue"in t}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ri(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ol(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ks(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ol(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ol(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ri(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Ks(this.value))}}function yw(t){const e=[];return ri(t.fields,(n,r)=>{const i=new Qe([n]);if(ol(r)){const s=yw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,B.min(),B.min(),B.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Ge(e,1,n,B.min(),r,i,0)}static newNoDocument(e,n){return new Ge(e,2,n,B.min(),B.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,B.min(),B.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n){this.position=e,this.inclusive=n}}function yy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=Ki(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _y(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function UN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{}class Se extends _w{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bN(e,n,r):n==="array-contains"?new BN(e,r):n==="in"?new zN(e,r):n==="not-in"?new HN(e,r):n==="array-contains-any"?new WN(e,r):new Se(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $N(e,r):new jN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ki(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class on extends _w{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new on(e,n)}matches(e){return vw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function vw(t){return t.op==="and"}function Ew(t){return FN(t)&&vw(t)}function FN(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function Nd(t){if(t instanceof Se)return t.field.canonicalString()+t.op.toString()+Gi(t.value);if(Ew(t))return t.filters.map(e=>Nd(e)).join(",");{const e=t.filters.map(n=>Nd(n)).join(",");return`${t.op}(${e})`}}function ww(t,e){return t instanceof Se?function(r,i){return i instanceof Se&&r.op===i.op&&r.field.isEqual(i.field)&&sn(r.value,i.value)}(t,e):t instanceof on?function(r,i){return i instanceof on&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ww(o,i.filters[a]),!0):!1}(t,e):void $()}function Tw(t){return t instanceof Se?function(n){return`${n.field.canonicalString()} ${n.op} ${Gi(n.value)}`}(t):t instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(Tw).join(" ,")+"}"}(t):"Filter"}class bN extends Se{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class $N extends Se{constructor(e,n){super(e,"in",n),this.keys=Iw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jN extends Se{constructor(e,n){super(e,"not-in",n),this.keys=Iw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Iw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class BN extends Se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ap(n)&&Do(n.arrayValue,this.value)}}class zN extends Se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Do(this.value.arrayValue,n)}}class HN extends Se{constructor(e,n){super(e,"not-in",n)}matches(e){if(Do(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Do(this.value.arrayValue,n)}}class WN extends Se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ap(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Do(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function vy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new qN(t,e,n,r,i,s,o)}function Cp(t){const e=z(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Hu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gi(r)).join(",")),e.he=n}return e.he}function kp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ww(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_y(t.startAt,e.startAt)&&_y(t.endAt,e.endAt)}function xd(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function KN(t,e,n,r,i,s,o,a){return new Wu(t,e,n,r,i,s,o,a)}function Pp(t){return new Wu(t)}function Ey(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function QN(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function XN(t){return t.collectionGroup!==null}function Oi(t){const e=z(t);if(e.Pe===null){e.Pe=[];const n=QN(e),r=GN(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Gs(n)),e.Pe.push(new Gs(Qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Gs(Qe.keyField(),s))}}}return e.Pe}function Sn(t){const e=z(t);if(!e.Ie)if(e.limitType==="F")e.Ie=vy(e.path,e.collectionGroup,Oi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Oi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Gs(s.field,o))}const r=e.endAt?new Zl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Zl(e.startAt.position,e.startAt.inclusive):null;e.Ie=vy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Dd(t,e,n){return new Wu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qu(t,e){return kp(Sn(t),Sn(e))&&t.limitType===e.limitType}function Rw(t){return`${Cp(Sn(t))}|lt:${t.limitType}`}function Od(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Tw(i)).join(", ")}]`),Hu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Gi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Gi(i)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function Ku(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):M.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Oi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=yy(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Oi(r),i)||r.endAt&&!function(o,a,l){const u=yy(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Oi(r),i))}(t,e)}function YN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sw(t){return(e,n)=>{let r=!1;for(const i of Oi(t)){const s=JN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function JN(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ki(l,u):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ri(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return mw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=new he(M.comparator);function An(){return ZN}const Aw=new he(M.comparator);function xs(...t){let e=Aw;for(const n of t)e=e.insert(n.key,n);return e}function Cw(t){let e=Aw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xr(){return Qs()}function kw(){return Qs()}function Qs(){return new ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const ex=new he(M.comparator),tx=new Je(M.comparator);function q(...t){let e=tx;for(const n of t)e=e.add(n);return e}const nx=new Je(Y);function rx(){return nx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jl(e)?"-0":e}}function Nw(t){return{integerValue:""+t}}function ix(t,e){return ON(e)?Nw(e):Pw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this._=void 0}}function sx(t,e,n){return t instanceof eu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Rp(s)&&(s=Sp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Oo?Dw(t,e):t instanceof Lo?Ow(t,e):function(i,s){const o=xw(i,s),a=wy(o)+wy(i.Te);return Pd(o)&&Pd(i.Te)?Nw(a):Pw(i.serializer,a)}(t,e)}function ox(t,e,n){return t instanceof Oo?Dw(t,e):t instanceof Lo?Ow(t,e):n}function xw(t,e){return t instanceof tu?function(r){return Pd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class eu extends Gu{}class Oo extends Gu{constructor(e){super(),this.elements=e}}function Dw(t,e){const n=Lw(e);for(const r of t.elements)n.some(i=>sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Lo extends Gu{constructor(e){super(),this.elements=e}}function Ow(t,e){let n=Lw(e);for(const r of t.elements)n=n.filter(i=>!sn(i,r));return{arrayValue:{values:n}}}class tu extends Gu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function wy(t){return we(t.integerValue||t.doubleValue)}function Lw(t){return Ap(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ax(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Oo&&i instanceof Oo||r instanceof Lo&&i instanceof Lo?qi(r.elements,i.elements,sn):r instanceof tu&&i instanceof tu?sn(r.Te,i.Te):r instanceof eu&&i instanceof eu}(t.transform,e.transform)}class lx{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function al(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qu{}function Vw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uw(t.key,nn.none()):new sa(t.key,t.data,nn.none());{const n=t.data,r=ct.empty();let i=new Je(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _r(t.key,r,new Et(i.toArray()),nn.none())}}function ux(t,e,n){t instanceof sa?function(i,s,o){const a=i.value.clone(),l=Iy(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof _r?function(i,s,o){if(!al(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Iy(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Mw(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xs(t,e,n,r){return t instanceof sa?function(s,o,a,l){if(!al(s.precondition,o))return a;const u=s.value.clone(),c=Ry(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof _r?function(s,o,a,l){if(!al(s.precondition,o))return a;const u=Ry(s.fieldTransforms,l,o),c=o.data;return c.setAll(Mw(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return al(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function cx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=xw(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function Ty(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qi(r,i,(s,o)=>ax(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends Qu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _r extends Qu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Mw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Iy(t,e,n){const r=new Map;se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ox(o,a,n[i]))}return r}function Ry(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,sx(s,o,e))}return r}class Uw extends Qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hx extends Qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ux(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Vw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&qi(this.mutations,e.mutations,(n,r)=>Ty(n,r))&&qi(this.baseMutations,e.baseMutations,(n,r)=>Ty(n,r))}}class Np{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length);let i=function(){return ex}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Np(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,G;function mx(t){switch(t){default:return $();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Fw(t){if(t===void 0)return Rn("GRPC error has no .code"),R.UNKNOWN;switch(t){case Ee.OK:return R.OK;case Ee.CANCELLED:return R.CANCELLED;case Ee.UNKNOWN:return R.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return R.INTERNAL;case Ee.UNAVAILABLE:return R.UNAVAILABLE;case Ee.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Ee.NOT_FOUND:return R.NOT_FOUND;case Ee.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Ee.ABORTED:return R.ABORTED;case Ee.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Ee.DATA_LOSS:return R.DATA_LOSS;default:return $()}}(G=Ee||(Ee={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ba}static getOrCreateInstance(){return ba===null&&(ba=new xp),ba}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ba=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=new Di([4294967295,4294967295],0);function Sy(t){const e=gx().encode(t),n=new _N;return n.update(e),new Uint8Array(n.digest())}function Ay(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Di([n,r],0),new Di([i,s],0)]}class Dp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ds(`Invalid padding: ${n}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Di.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Di.fromNumber(r)));return i.compare(yx)===1&&(i=new Di([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Sy(e),[r,i]=Ay(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Dp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Sy(e),[r,i]=Ay(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,oa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xu(B.min(),i,new he(Y),An(),q())}}class oa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oa(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class bw{constructor(e,n){this.targetId=e,this.pe=n}}class $w{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Cy{constructor(){this.ye=0,this.we=Py(),this.Se=tt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=q(),n=q(),r=q();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new oa(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=Py()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class _x{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=An(),this.$e=ky(),this.Ue=new he(Y)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(xd(a))if(s===0){const l=new M(a.path);this.ze(i,l,Ge.newNoDocument(l,B.min()))}else se(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=xp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,m,y){var _,v,p,f,g,E;const I={localCacheCount:m,existenceFilterCount:y.count},C=y.unchangedNames;return C&&(I.bloomFilter={applied:h===0,hashCount:(_=C==null?void 0:C.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(f=(p=(v=C==null?void 0:C.bits)===null||v===void 0?void 0:v.bitmap)===null||p===void 0?void 0:p.length)!==null&&f!==void 0?f:0,padding:(E=(g=C==null?void 0:C.bits)===null||g===void 0?void 0:g.padding)!==null&&E!==void 0?E:0},d&&(I.bloomFilter.mightContain=d)),I}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Gr(s).toUint8Array()}catch(h){if(h instanceof gw)return Wi("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Dp(l,o,a)}catch(h){return Wi(h instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&xd(a.target)){const l=new M(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Ge.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=q();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Xu(e,n,this.Ue,this.Ke,r);return this.Ke=An(),this.$e=ky(),this.Ue=new he(Y),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Cy,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Je(Y),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Cy),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function ky(){return new he(M.comparator)}function Py(){return new he(M.comparator)}const vx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ex=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),wx=(()=>({and:"AND",or:"OR"}))();class Tx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ld(t,e){return t.useProto3Json||Hu(e)?e:{value:e}}function nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ix(t,e){return nu(t,e.toTimestamp())}function rn(t){return se(!!t),B.fromTimestamp(function(n){const r=ur(n);return new Ce(r.seconds,r.nanos)}(t))}function Op(t,e){return function(r){return new ae(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Bw(t){const e=ae.fromString(t);return se(qw(e)),e}function Vd(t,e){return Op(t.databaseId,e.path)}function sh(t,e){const n=Bw(e);if(n.get(1)!==t.databaseId.projectId)throw new L(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(zw(n))}function Md(t,e){return Op(t.databaseId,e)}function Rx(t){const e=Bw(t);return e.length===4?ae.emptyPath():zw(e)}function Ud(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zw(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ny(t,e,n){return{name:Vd(t,e),fields:n.value.mapValue.fields}}function Sx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(se(c===void 0||typeof c=="string"),tt.fromBase64String(c||"")):(se(c===void 0||c instanceof Uint8Array),tt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?R.UNKNOWN:Fw(u.code);return new L(c,u.message||"")}(o);n=new $w(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sh(t,r.document.name),s=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):B.min(),a=new ct({mapValue:{fields:r.document.fields}}),l=Ge.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ll(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sh(t,r.document),s=r.readTime?rn(r.readTime):B.min(),o=Ge.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ll([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sh(t,r.document),s=r.removedTargetIds||[];n=new ll([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new px(i,s),a=r.targetId;n=new bw(a,o)}}return n}function Ax(t,e){let n;if(e instanceof sa)n={update:Ny(t,e.key,e.value)};else if(e instanceof Uw)n={delete:Vd(t,e.key)};else if(e instanceof _r)n={update:Ny(t,e.key,e.data),updateMask:Vx(e.fieldMask)};else{if(!(e instanceof hx))return $();n={verify:Vd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof eu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof tu)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ix(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$()}(t,e.precondition)),n}function Cx(t,e){return t&&t.length>0?(se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?rn(i.updateTime):rn(s);return o.isEqual(B.min())&&(o=rn(s)),new lx(o,i.transformResults||[])}(n,e))):[]}function kx(t,e){return{documents:[Md(t,e.path)]}}function Px(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Md(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Md(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Ww(on.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:ai(h.field),direction:Dx(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ld(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Nx(t){let e=Rx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=Hw(h);return d instanceof on&&Ew(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Gs(li(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Hu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new Zl(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new Zl(m,d)}(n.endAt)),KN(e,i,o,s,a,"F",l,u)}function xx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=li(n.unaryFilter.field);return Se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=li(n.unaryFilter.field);return Se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=li(n.unaryFilter.field);return Se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=li(n.unaryFilter.field);return Se.create(o,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(n){return Se.create(li(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>Hw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $()}}(n.compositeFilter.op))}(t):$()}function Dx(t){return vx[t]}function Ox(t){return Ex[t]}function Lx(t){return wx[t]}function ai(t){return{fieldPath:t.canonicalString()}}function li(t){return Qe.fromServerFormat(t.fieldPath)}function Ww(t){return t instanceof Se?function(n){if(n.op==="=="){if(gy(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NAN"}};if(my(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gy(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NAN"}};if(my(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(n.field),op:Ox(n.op),value:n.value}}}(t):t instanceof on?function(n){const r=n.getFilters().map(i=>Ww(i));return r.length===1?r[0]:{compositeFilter:{op:Lx(n.op),filters:r}}}(t):$()}function Vx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r,i,s=B.min(),o=B.min(),a=tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.ct=e}}function Ux(t){const e=Nx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this.sn=new bx}addToCollectionParentIndex(e,n){return this.sn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(lr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class bx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Qi(0)}static On(){return new Qi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(){this.changes=new ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Xs(r.mutation,i,Et.empty(),Ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=xr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=xs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=An();const o=Qs(),a=function(){return Qs()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof _r)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Xs(c.mutation,u,c.mutation.getFieldMask(),Ce.now())):o.set(u.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new jx(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Qs();let i=new he((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Et.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=kw();c.forEach(d=>{if(!s.has(d)){const m=Vw(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return M.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):XN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(xr());let a=-1,l=s;return o.next(u=>A.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?A.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:Cw(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=xs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=xs();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(c,h){return new Wu(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ge.newInvalidDocument(u)))});let o=xs();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Xs(u.mutation,l,Et.empty(),Ce.now()),Ku(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return A.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:rn(i.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:Ux(i.bundledQuery),readTime:rn(i.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(){this.overlays=new he(M.comparator),this.cr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=xr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new he((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=xr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=xr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fx(n,r));let s=this.cr.get(n);s===void 0&&(s=q(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.lr=new Je(Ne.hr),this.Pr=new Je(Ne.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ne(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ne(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new M(new ae([])),r=new Ne(n,e),i=new Ne(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new M(new ae([])),r=new Ne(n,e),i=new Ne(n,e+1);let s=q();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ne(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return M.comparator(e.key,n.key)||Y(e.mr,n.mr)}static Ir(e,n){return Y(e.mr,n.mr)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Je(Ne.hr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dx(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ne(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ne(n,0),i=new Ne(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(Y);return n.forEach(i=>{const s=new Ne(i,0),o=new Ne(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),A.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Ne(new M(s),0);let a=new Je(Y);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),A.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return A.forEach(n.mutations,i=>{const s=new Ne(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ne(n,0),i=this.pr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.Dr=e,this.docs=function(){return new he(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ge.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=An();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||NN(PN(c),r)<=0||(i.has(c.key)||Ku(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}vr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Kx(this)}getSize(e){return A.resolve(this.size)}}class Kx extends $x{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.persistence=e,this.Cr=new ls(n=>Cp(n),kp),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Lp,this.targetCount=0,this.Or=Qi.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),A.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Qi(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Ln(n),A.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Ip(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new Gx(this),this.indexManager=new Fx,this.remoteDocumentCache=function(i){return new qx(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Mx(n),this.Qr=new zx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new Wx(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new Xx(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return A.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class Xx extends DN{constructor(e){super(),this.currentSequenceNumber=e}}class Vp{constructor(e){this.persistence=e,this.Wr=new Lp,this.Gr=null}static zr(e){return new Vp(e)}get jr(){if(this.Gr)return this.Gr;throw $()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),A.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.jr,r=>{const i=M.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return A.or([()=>A.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(Ey(n))return A.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Dd(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,Dd(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return Ey(n)||i.isEqual(B.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(hy()<=X.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Od(n)),this.ji(e,o,n,kN(i,-1)))})}Gi(e,n){let r=new Je(Sw(e));return n.forEach((i,s)=>{Ku(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return hy()<=X.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Od(n)),this.Ki.getDocumentsMatchingQuery(e,n,lr.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new he(Y),this.Yi=new ls(s=>Cp(s),kp),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bx(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Zx(t,e,n,r){return new Jx(t,e,n,r)}async function Kw(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function e2(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let m=A.resolve();return d.forEach(y=>{m=m.next(()=>c.getEntry(l,y)).next(_=>{const v=u.docVersions.get(y);se(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Gw(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function t2(t,e){const n=z(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(tt.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(_,v,p){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,m,c)&&a.push(n.kr.updateTargetData(s,m))});let l=An(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(n2(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(B.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function n2(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function r2(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function i2(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Fd(t,e,n){const r=z(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ia(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function xy(t,e,n){const r=z(t);let i=B.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=z(l),d=h.Yi.get(c);return d!==void 0?A.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,Sn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:q())).next(a=>(s2(r,YN(e),a),{documents:a,ss:s})))}function s2(t,e,n){let r=t.Zi.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class Dy{constructor(){this.activeTargetIds=rx()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o2{constructor(){this.Hs=new Dy,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Dy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a=null;function oh(){return $a===null?$a=function(){return 268435456+Math.round(2147483648*Math.random())}():$a++,"0x"+$a.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class c2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=oh(),l=this.mo(n,r);O("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(O("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Wi("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+as}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=l2[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=oh();return new Promise((o,a)=>{const l=new yN;l.setWithCredentials(!0),l.listenOnce(pN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ih.NO_ERROR:const c=l.getResponseJson();O(We,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case ih.TIMEOUT:O(We,`RPC '${e}' ${s} timed out`),a(new L(R.DEADLINE_EXCEEDED,"Request time out"));break;case ih.HTTP_ERROR:const h=l.getStatus();if(O(We,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const y=function(v){const p=v.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(p)>=0?p:R.UNKNOWN}(m.status);a(new L(y,m.message))}else a(new L(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(R.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{O(We,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O(We,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=oh(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dN(),a=fN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new gN({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(We,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const y=new u2({so:v=>{m?O(We,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(O(We,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),O(We,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},oo:()=>h.close()}),_=(v,p,f)=>{v.listen(p,g=>{try{f(g)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,Ma.EventType.OPEN,()=>{m||O(We,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Ma.EventType.CLOSE,()=>{m||(m=!0,O(We,`RPC '${e}' stream ${i} transport closed`),y.Po())}),_(h,Ma.EventType.ERROR,v=>{m||(m=!0,Wi(We,`RPC '${e}' stream ${i} transport errored:`,v),y.Po(new L(R.UNAVAILABLE,"The operation could not be completed")))}),_(h,Ma.EventType.MESSAGE,v=>{var p;if(!m){const f=v.data[0];se(!!f);const g=f,E=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(E){O(We,`RPC '${e}' stream ${i} received error:`,E);const I=E.status;let C=function(H){const F=Ee[H];if(F!==void 0)return Fw(F)}(I),P=E.message;C===void 0&&(C=R.INTERNAL,P="Unknown error status: "+I+" with message "+E.message),m=!0,y.Po(new L(C,P)),h.close()}else O(We,`RPC '${e}' stream ${i} received:`,f),y.Io(f)}}),_(a,mN.STAT_EVENT,v=>{v.stat===uy.PROXY?O(We,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===uy.NOPROXY&&O(We,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}function ah(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){return new Tx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Qw(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new L(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h2 extends Xw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=Sx(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?rn(o.readTime):B.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=Ud(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=xd(l)?{documents:kx(s,l)}:{query:Px(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=jw(s,o.resumeToken);const u=Ld(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(B.min())>0){a.readTime=nu(s,o.snapshotVersion.toTimestamp());const u=Ld(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=xx(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=Ud(this.serializer),n.removeTarget=e,this.Ho(n)}}class d2 extends Xw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=Cx(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.u_(r,n)}return se(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Ud(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ax(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new L(R.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(R.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(R.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class p2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Rn(n),this.d_=!1):O("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{ii(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=z(l);u.y_.add(4),await aa(u),u.b_.set("Unknown"),u.y_.delete(4),await Ju(u)}(this))})}),this.b_=new p2(r,i)}}async function Ju(t){if(ii(t))for(const e of t.w_)await e(!0)}async function aa(t){for(const e of t.w_)await e(!1)}function Yw(t,e){const n=z(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),bp(n)?Fp(n):us(n).Uo()&&Up(n,e))}function Jw(t,e){const n=z(t),r=us(n);n.p_.delete(e),r.Uo()&&Zw(n,e),n.p_.size===0&&(r.Uo()?r.zo():ii(n)&&n.b_.set("Unknown"))}function Up(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}us(t).i_(e)}function Zw(t,e){t.D_.Be(e),us(t).s_(e)}function Fp(t){t.D_=new _x({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),us(t).start(),t.b_.A_()}function bp(t){return ii(t)&&!us(t).$o()&&t.p_.size>0}function ii(t){return z(t).y_.size===0}function e1(t){t.D_=void 0}async function g2(t){t.p_.forEach((e,n)=>{Up(t,e)})}async function y2(t,e){e1(t),bp(t)?(t.b_.m_(e),Fp(t)):t.b_.set("Unknown")}async function _2(t,e,n){if(t.b_.set("Online"),e instanceof $w&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ru(t,r)}else if(e instanceof ll?t.D_.We(e):e instanceof bw?t.D_.Ze(e):t.D_.je(e),!n.isEqual(B.min()))try{const r=await Gw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(tt.EMPTY_BYTE_STRING,c.snapshotVersion)),Zw(s,l);const h=new Hn(c.target,l,u,c.sequenceNumber);Up(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await ru(t,r)}}async function ru(t,e,n){if(!ia(e))throw e;t.y_.add(1),await aa(t),t.b_.set("Offline"),n||(n=()=>Gw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Ju(t)})}function t1(t,e){return e().catch(n=>ru(t,n,e))}async function Zu(t){const e=z(t),n=cr(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;v2(e);)try{const i=await r2(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,E2(e,i)}catch(i){await ru(e,i)}n1(e)&&r1(e)}function v2(t){return ii(t)&&t.g_.length<10}function E2(t,e){t.g_.push(e);const n=cr(t);n.Uo()&&n.__&&n.a_(e.mutations)}function n1(t){return ii(t)&&!cr(t).$o()&&t.g_.length>0}function r1(t){cr(t).start()}async function w2(t){cr(t).l_()}async function T2(t){const e=cr(t);for(const n of t.g_)e.a_(n.mutations)}async function I2(t,e,n){const r=t.g_.shift(),i=Np.from(r,e,n);await t1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zu(t)}async function R2(t,e){e&&cr(t).__&&await async function(r,i){if(function(o){return mx(o)&&o!==R.ABORTED}(i.code)){const s=r.g_.shift();cr(r).Go(),await t1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Zu(r)}}(t,e),n1(t)&&r1(t)}async function Ly(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=ii(n);n.y_.add(3),await aa(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Ju(n)}async function S2(t,e){const n=z(t);e?(n.y_.delete(2),await Ju(n)):e||(n.y_.add(2),await aa(n),n.b_.set("Unknown"))}function us(t){return t.v_||(t.v_=function(n,r,i){const s=z(n);return s.P_(),new h2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:g2.bind(null,t),uo:y2.bind(null,t),r_:_2.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),bp(t)?Fp(t):t.b_.set("Unknown")):(await t.v_.stop(),e1(t))})),t.v_}function cr(t){return t.C_||(t.C_=function(n,r,i){const s=z(n);return s.P_(),new d2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:w2.bind(null,t),uo:R2.bind(null,t),c_:T2.bind(null,t),u_:I2.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Zu(t)):(await t.C_.stop(),t.g_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new $p(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jp(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),ia(t))return new L(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=xs(),this.sortedSet=new he(this.comparator)}static emptySet(e){return new Li(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Li;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.F_=new he(M.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):$():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xi(e,n,Li.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.x_=void 0,this.listeners=[]}}class C2{constructor(){this.queries=new ls(e=>Rw(e),qu),this.onlineState="Unknown",this.O_=new Set}}async function i1(t,e){const n=z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new A2),i)try{s.x_=await n.onListen(r)}catch(o){const a=jp(o,`Initialization of query '${Od(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&Bp(n)}async function s1(t,e){const n=z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function k2(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Bp(n)}function P2(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Bp(t){t.O_.forEach(e=>{e.next()})}class o1{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.key=e}}class l1{constructor(e){this.key=e}}class N2{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=q(),this.mutatedKeys=q(),this.na=Sw(e),this.ra=new Li(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new Vy,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Ku(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;d&&m?d.data.isEqual(m.data)?y!==_&&(r.track({type:3,doc:m}),v=!0):this._a(d,m)||(r.track({type:2,doc:m}),v=!0,(l&&this.na(m,l)>0||u&&this.na(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),v=!0):d&&!m&&(r.track({type:1,doc:d}),v=!0,(l||u)&&(a=!0)),v&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(d,m){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return y(d)-y(m)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new Xi(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Vy,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=q(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new l1(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new a1(r))}),n}ha(e){this.X_=e.ss,this.ta=q();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Xi.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class x2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class D2{constructor(e){this.key=e,this.Ia=!1}}class O2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new ls(a=>Rw(a),qu),this.da=new Map,this.Aa=new Set,this.Ra=new he(M.comparator),this.Va=new Map,this.ma=new Lp,this.fa={},this.ga=new Map,this.pa=Qi.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function L2(t,e){const n=H2(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await i2(n.localStore,Sn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await V2(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Yw(n.remoteStore,o)}return i}async function V2(t,e,n,r,i){t.wa=(h,d,m)=>async function(_,v,p,f){let g=v.view.sa(p);g.zi&&(g=await xy(_.localStore,v.query,!1).then(({documents:C})=>v.view.sa(C,g)));const E=f&&f.targetChanges.get(v.targetId),I=v.view.applyChanges(g,_.isPrimaryClient,E);return Uy(_,v.targetId,I.ca),I.snapshot}(t,h,d,m);const s=await xy(t.localStore,e,!0),o=new N2(e,s.ss),a=o.sa(s.documents),l=oa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Uy(t,n,u.ca);const c=new x2(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function M2(t,e){const n=z(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!qu(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Jw(n.remoteStore,r.targetId),bd(n,r.targetId)}).catch(ra)):(bd(n,r.targetId),await Fd(n.localStore,r.targetId,!0))}async function U2(t,e,n){const r=W2(t);try{const i=await function(o,a){const l=z(o),u=Ce.now(),c=a.reduce((m,y)=>m.add(y.key),q());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=An(),_=q();return l.Xi.getEntries(m,c).next(v=>{y=v,y.forEach((p,f)=>{f.isValidDocument()||(_=_.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,y)).next(v=>{h=v;const p=[];for(const f of a){const g=cx(f,h.get(f.key).overlayedDocument);g!=null&&p.push(new _r(f.key,g,yw(g.value.mapValue),nn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,p,a)}).next(v=>{d=v;const p=v.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(m,v.batchId,p)})}).then(()=>({batchId:d.batchId,changes:Cw(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new he(Y)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await la(r,i.changes),await Zu(r.remoteStore)}catch(i){const s=jp(i,"Failed to persist write");n.reject(s)}}async function u1(t,e){const n=z(t);try{const r=await t2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?se(o.Ia):i.removedDocuments.size>0&&(se(o.Ia),o.Ia=!1))}),await la(n,r,e)}catch(r){await ra(r)}}function My(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=z(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&Bp(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function F2(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new he(M.comparator);o=o.insert(s,Ge.newNoDocument(s,B.min()));const a=q().add(s),l=new Xu(B.min(),new Map,new he(Y),o,a);await u1(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),zp(r)}else await Fd(r.localStore,e,!1).then(()=>bd(r,e,n)).catch(ra)}async function b2(t,e){const n=z(t),r=e.batch.batchId;try{const i=await e2(n.localStore,e);h1(n,r,null),c1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await la(n,i)}catch(i){await ra(i)}}async function $2(t,e,n){const r=z(t);try{const i=await function(o,a){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(se(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);h1(r,e,n),c1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await la(r,i)}catch(i){await ra(i)}}function c1(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function h1(t,e,n){const r=z(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function bd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||d1(t,r)})}function d1(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(Jw(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),zp(t))}function Uy(t,e,n){for(const r of n)r instanceof a1?(t.ma.addReference(r.key,e),j2(t,r)):r instanceof l1?(O("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||d1(t,r.key)):$()}function j2(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(O("SyncEngine","New document in limbo: "+n),t.Aa.add(r),zp(t))}function zp(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new M(ae.fromString(e)),r=t.pa.next();t.Va.set(r,new D2(n)),t.Ra=t.Ra.insert(n,r),Yw(t.remoteStore,new Hn(Sn(Pp(n.path)),r,"TargetPurposeLimboResolution",Ip.ae))}}async function la(t,e,n){const r=z(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Mp.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=z(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(u,d=>A.forEach(d.Li,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>A.forEach(d.ki,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!ia(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.Ji.get(d),y=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(y);c.Ji=c.Ji.insert(d,_)}}}(r.localStore,s))}async function B2(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await Kw(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new L(R.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await la(n,r.ts)}}function z2(t,e){const n=z(t),r=n.Va.get(e);if(r&&r.Ia)return q().add(r.key);{let i=q();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function H2(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=u1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=z2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=F2.bind(null,e),e.Ta.r_=k2.bind(null,e.eventManager),e.Ta.Sa=P2.bind(null,e.eventManager),e}function W2(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=b2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$2.bind(null,e),e}class Fy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Yu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Zx(this.persistence,new Yx,e.initialUser,this.serializer)}createPersistence(e){return new Qx(Vp.zr,this.serializer)}createSharedClientState(e){return new o2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class q2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>My(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=B2.bind(null,this.syncEngine),await S2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new C2}()}createDatastore(e){const n=Yu(e.databaseInfo.databaseId),r=function(s){return new c2(s)}(e.databaseInfo);return function(s,o,a,l){return new f2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new m2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>My(this.syncEngine,n,0),function(){return Oy.v()?new Oy:new a2}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new O2(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=z(n);O("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await aa(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=pw.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lh(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Kw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function by(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Q2(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Ly(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Ly(e.remoteStore,s)),t._onlineComponents=e}function G2(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Q2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await lh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!G2(n))throw n;Wi("Error using user provided cache. Falling back to memory cache: "+n),await lh(t,new Fy)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await lh(t,new Fy);return t._offlineComponents}async function p1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await by(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await by(t,new q2))),t._onlineComponents}function X2(t){return p1(t).then(e=>e.syncEngine)}async function m1(t){const e=await p1(t),n=e.eventManager;return n.onListen=L2.bind(null,e.syncEngine),n.onUnlisten=M2.bind(null,e.syncEngine),n}function Y2(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new f1({next:d=>{o.enqueueAndForget(()=>s1(s,h));const m=d.docs.has(a);!m&&d.fromCache?u.reject(new L(R.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&l&&l.source==="server"?u.reject(new L(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new o1(Pp(a.path),c,{includeMetadataChanges:!0,W_:!0});return i1(s,h)}(await m1(t),t.asyncQueue,e,n,r)),r.promise}function J2(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new f1({next:d=>{o.enqueueAndForget(()=>s1(s,h)),d.fromCache&&l.source==="server"?u.reject(new L(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new o1(a,c,{includeMetadataChanges:!0,W_:!0});return i1(s,h)}(await m1(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t,e,n){if(!n)throw new L(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Z2(t,e,n,r){if(e===!0&&r===!0)throw new L(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jy(t){if(!M.isDocumentKey(t))throw new L(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function By(t){if(M.isDocumentKey(t))throw new L(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function Cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hp(t);throw new L(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Z2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=g1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ec{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vN;switch(r.type){case"firstParty":return new IN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$y.get(n);r&&(O("ComponentProvider","Removing Datastore"),$y.delete(n),r.terminate())}(this),Promise.resolve()}}function eD(t,e,n,r={}){var i;const s=(t=Cn(t,ec))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=qe.MOCK_USER;else{a=A0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new L(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new qe(u)}t._authCredentials=new EN(new fw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tc(this.firestore,e,this._query)}}class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class rr extends tc{constructor(e,n,r){super(e,n,Pp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new M(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function tD(t,e,...n){if(t=ve(t),y1("collection","path",e),t instanceof ec){const r=ae.fromString(e,...n);return By(r),new rr(t,null,r)}{if(!(t instanceof gt||t instanceof rr))throw new L(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return By(r),new rr(t.firestore,null,r)}}function Wp(t,e,...n){if(t=ve(t),arguments.length===1&&(e=pw.V()),y1("doc","path",e),t instanceof ec){const r=ae.fromString(e,...n);return jy(r),new gt(t,null,new M(r))}{if(!(t instanceof gt||t instanceof rr))throw new L(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return jy(r),new gt(t.firestore,t instanceof rr?t.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Qw(this,"async_queue_retry"),this.Xa=()=>{const n=ah();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=ah();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=ah();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new yn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!ia(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Rn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=$p.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&$()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}class ua extends ec{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new nD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_1(this),this._firestoreClient.terminate()}}function rD(t,e){const n=typeof t=="object"?t:Hf(),r=typeof t=="string"?t:e||"(default)",i=Su(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=I0("firestore");s&&eD(i,...s)}return i}function qp(t){return t._firestoreClient||_1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _1(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new VN(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,g1(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new K2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yi(tt.fromBase64String(e))}catch(n){throw new L(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yi(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=/^__.*__$/;class sD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new sa(e,this.data,n,this.fieldTransforms)}}class v1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function E1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Qp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Qp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return iu(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(E1(this.uu)&&iD.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class oD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Yu(e)}Ru(e,n,r,i=!1){return new Qp({uu:e,methodName:n,Au:r,path:Qe.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function w1(t){const e=t._freezeSettings(),n=Yu(t._databaseId);return new oD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aD(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);Xp("Data must be an object, but it was:",o,r);const a=T1(r,o);let l,u;if(s.merge)l=new Et(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=$d(e,h,n);if(!o.contains(d))throw new L(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);R1(c,d)||c.push(d)}l=new Et(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new sD(new ct(a),l,u)}class rc extends Kp{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rc}}function lD(t,e,n,r){const i=t.Ru(1,e,n);Xp("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();ri(r,(l,u)=>{const c=Yp(e,l,n);u=ve(u);const h=i.Iu(c);if(u instanceof rc)s.push(c);else{const d=ic(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Et(s);return new v1(o,a,i.fieldTransforms)}function uD(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[$d(e,r,n)],l=[i];if(s.length%2!=0)throw new L(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push($d(e,s[d])),l.push(s[d+1]);const u=[],c=ct.empty();for(let d=a.length-1;d>=0;--d)if(!R1(u,a[d])){const m=a[d];let y=l[d];y=ve(y);const _=o.Iu(m);if(y instanceof rc)u.push(m);else{const v=ic(y,_);v!=null&&(u.push(m),c.set(m,v))}}const h=new Et(u);return new v1(c,h,o.fieldTransforms)}function ic(t,e){if(I1(t=ve(t)))return Xp("Unsupported field value:",e,t),T1(t,e);if(t instanceof Kp)return function(r,i){if(!E1(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ic(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ix(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ce.fromDate(r);return{timestampValue:nu(i.serializer,s)}}if(r instanceof Ce){const s=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nu(i.serializer,s)}}if(r instanceof Gp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yi)return{bytesValue:jw(i.serializer,r._byteString)};if(r instanceof gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Op(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Hp(r)}`)}(t,e)}function T1(t,e){const n={};return mw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ri(t,(r,i)=>{const s=ic(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function I1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof Gp||t instanceof Yi||t instanceof gt||t instanceof Kp)}function Xp(t,e,n){if(!I1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Hp(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function $d(t,e,n){if((e=ve(e))instanceof nc)return e._internalPath;if(typeof e=="string")return Yp(t,e);throw iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const cD=new RegExp("[~\\*/\\[\\]]");function Yp(t,e,n){if(e.search(cD)>=0)throw iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function iu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(R.INVALID_ARGUMENT,a+t+l)}function R1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(A1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hD extends S1{data(){return super.data()}}function A1(t,e){return typeof e=="string"?Yp(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fD{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ri(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Gp(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(No(e));default:return null}}convertTimestamp(e){const n=ur(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ae.fromString(e);se(qw(r));const i=new xo(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||Rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class C1 extends S1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(A1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ul extends C1{data(e={}){return super.data(e)}}class mD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Os(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ul(this._firestore,this._userDataWriter,r.key,r,new Os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ul(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Os(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ul(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Os(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:gD(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){t=Cn(t,gt);const e=Cn(t.firestore,ua);return Y2(qp(e),t._key).then(n=>wD(e,t,n))}class k1 extends fD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function _D(t){t=Cn(t,tc);const e=Cn(t.firestore,ua),n=qp(e),r=new k1(e);return dD(t._query),J2(n,t._query).then(i=>new mD(e,r,t,i))}function vD(t,e,n){t=Cn(t,gt);const r=Cn(t.firestore,ua),i=pD(t.converter,e,n);return P1(r,[aD(w1(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,nn.none())])}function ED(t,e,n,...r){t=Cn(t,gt);const i=Cn(t.firestore,ua),s=w1(i);let o;return o=typeof(e=ve(e))=="string"||e instanceof nc?uD(s,"updateDoc",t._key,e,n,r):lD(s,"updateDoc",t._key,e),P1(i,[o.toMutation(t._key,nn.exists(!0))])}function P1(t,e){return function(r,i){const s=new yn;return r.asyncQueue.enqueueAndForget(async()=>U2(await X2(r),i,s)),s.promise}(qp(t),e)}function wD(t,e,n){const r=n.docs.get(e._key),i=new k1(t);return new C1(t,i,e._key,r,new Os(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){as=i})(Zr),Hr(new ar("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ua(new wN(r.getProvider("auth-internal")),new SN(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Zt(cy,"4.1.0",e),Zt(cy,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="firebasestorage.googleapis.com",x1="storageBucket",TD=2*60*1e3,ID=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends an{constructor(e,n,r=0){super(uh(e),`Firebase Storage: ${n} (${uh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function uh(t){return"storage/"+t}function Jp(){const t="An unknown error occurred, please check the error payload for server response.";return new me(pe.UNKNOWN,t)}function RD(t){return new me(pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function SD(t){return new me(pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function AD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new me(pe.UNAUTHENTICATED,t)}function CD(){return new me(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kD(t){return new me(pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function PD(){return new me(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ND(){return new me(pe.CANCELED,"User canceled the upload/download.")}function xD(t){return new me(pe.INVALID_URL,"Invalid URL '"+t+"'.")}function DD(t){return new me(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function OD(){return new me(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+x1+"' property when initializing the app?")}function LD(){return new me(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function VD(){return new me(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function MD(t){return new me(pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function jd(t){return new me(pe.INVALID_ARGUMENT,t)}function D1(){return new me(pe.APP_DELETED,"The Firebase app was deleted.")}function UD(t){return new me(pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ys(t,e){return new me(pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ws(t){throw new me(pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=wt.makeFromUrl(e,n)}catch{return new wt(e,"")}if(r.path==="")return r;throw DD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},_=n===N1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",p=new RegExp(`^https?://${_}/${i}/${v}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:m,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<g.length;E++){const I=g[E],C=I.regex.exec(e);if(C){const P=C[I.indices.bucket];let k=C[I.indices.path];k||(k=""),r=new wt(P,k),I.postModify(r);break}}if(r==null)throw xD(e);return r}}class FD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...v){u||(u=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(m,l())},v)}function d(){s&&clearTimeout(s)}function m(v,...p){if(u){d();return}if(v){d(),c.call(null,v,...p);return}if(l()||o){d(),c.call(null,v,...p);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function _(v){y||(y=!0,d(),!u&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function $D(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t){return t!==void 0}function BD(t){return typeof t=="object"&&!Array.isArray(t)}function Zp(t){return typeof t=="string"||t instanceof String}function Hy(t){return em()&&t instanceof Blob}function em(){return typeof Blob<"u"&&!MS()}function Wy(t,e,n,r){if(r<e)throw jd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw jd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function O1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mr||(Mr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ja(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Mr.NO_ERROR,l=s.getStatus();if(!a||zD(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Mr.ABORT;r(!1,new ja(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ja(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());jD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Jp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?D1():ND();o(l)}else{const l=PD();o(l)}};this.canceled_?n(!1,new ja(!1,null,!0)):this.backoffId_=bD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$D(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ja{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function WD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function qD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function KD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function QD(t,e,n,r,i,s,o=!0){const a=O1(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return KD(u,e),WD(u,n),qD(u,s),GD(u,r),new HD(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function YD(...t){const e=XD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(em())return new Blob(t);throw new me(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function JD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t){if(typeof atob>"u")throw MD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ch{constructor(e,n){this.data=e,this.contentType=n||null}}function eO(t,e){switch(t){case Xt.RAW:return new ch(L1(e));case Xt.BASE64:case Xt.BASE64URL:return new ch(V1(t,e));case Xt.DATA_URL:return new ch(nO(e),rO(e))}throw Jp()}function L1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function tO(t){let e;try{e=decodeURIComponent(t)}catch{throw Ys(Xt.DATA_URL,"Malformed data URL.")}return L1(e)}function V1(t,e){switch(t){case Xt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ys(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Xt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ys(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ZD(e)}catch(i){throw i.message.includes("polyfill")?i:Ys(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class M1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ys(Xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=iO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function nO(t){const e=new M1(t);return e.base64?V1(Xt.BASE64,e.rest):tO(e.rest)}function rO(t){return new M1(t).contentType}function iO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){let r=0,i="";Hy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Hy(this.data_)){const r=this.data_,i=JD(r,e,n);return i===null?null:new bn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new bn(r,!0)}}static getBlob(...e){if(em()){const n=e.map(r=>r instanceof bn?r.data_:r);return new bn(YD.apply(null,n))}else{const n=e.map(o=>Zp(o)?eO(Xt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new bn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t){let e;try{e=JSON.parse(t)}catch{return null}return BD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function F1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(t,e){return e}class rt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||aO}}let Ba=null;function lO(t){return!Zp(t)||t.length<2?t:F1(t)}function b1(){if(Ba)return Ba;const t=[];t.push(new rt("bucket")),t.push(new rt("generation")),t.push(new rt("metageneration")),t.push(new rt("name","fullPath",!0));function e(s,o){return lO(o)}const n=new rt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new rt("size");return i.xform=r,t.push(i),t.push(new rt("timeCreated")),t.push(new rt("updated")),t.push(new rt("md5Hash",null,!0)),t.push(new rt("cacheControl",null,!0)),t.push(new rt("contentDisposition",null,!0)),t.push(new rt("contentEncoding",null,!0)),t.push(new rt("contentLanguage",null,!0)),t.push(new rt("contentType",null,!0)),t.push(new rt("metadata","customMetadata",!0)),Ba=t,Ba}function uO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new wt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function cO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return uO(r,t),r}function $1(t,e,n){const r=U1(e);return r===null?null:cO(t,r,n)}function hO(t,e,n,r){const i=U1(e);if(i===null||!Zp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=tm(d,n,r),y=O1({alt:"media",token:u});return m+y})[0]}function dO(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class j1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t){if(!t)throw Jp()}function fO(t,e){function n(r,i){const s=$1(t,i,e);return B1(s!==null),s}return n}function pO(t,e){function n(r,i){const s=$1(t,i,e);return B1(s!==null),hO(s,i,t.host,t._protocol)}return n}function z1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=CD():i=AD():n.getStatus()===402?i=SD(t.bucket):n.getStatus()===403?i=kD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function mO(t){const e=z1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=RD(t.path)),s.serverResponse=i.serverResponse,s}return n}function gO(t,e,n){const r=e.fullServerUrl(),i=tm(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new j1(i,s,pO(t,n),o);return a.errorHandler=mO(e),a}function yO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _O(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=yO(null,e)),r}function vO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let E=0;E<2;E++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=_O(e,r,i),c=dO(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=bn.getBlob(h,r,d);if(m===null)throw LD();const y={name:u.fullPath},_=tm(s,t.host,t._protocol),v="POST",p=t.maxUploadRetryTime,f=new j1(_,v,fO(t,n),p);return f.urlParams=y,f.headers=o,f.body=m.uploadData(),f.errorHandler=z1(e),f}class EO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ws("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ws("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ws("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ws("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ws("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wO extends EO{initXhr(){this.xhr_.responseType="text"}}function H1(){return new wO}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this._service=e,n instanceof wt?this._location=n:this._location=wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xr(e,n)}get root(){const e=new wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return F1(this._location.path)}get storage(){return this._service}get parent(){const e=sO(this._location.path);if(e===null)return null;const n=new wt(this._location.bucket,e);return new Xr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw UD(e)}}function TO(t,e,n){t._throwIfRoot("uploadBytes");const r=vO(t.storage,t._location,b1(),new bn(e,!0),n);return t.storage.makeRequestWithTokens(r,H1).then(i=>({metadata:i,ref:t}))}function IO(t){t._throwIfRoot("getDownloadURL");const e=gO(t.storage,t._location,b1());return t.storage.makeRequestWithTokens(e,H1).then(n=>{if(n===null)throw VD();return n})}function RO(t,e){const n=oO(t._location.path,e),r=new wt(t._location.bucket,n);return new Xr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t){return/^[A-Za-z]+:\/\//.test(t)}function AO(t,e){return new Xr(t,e)}function W1(t,e){if(t instanceof nm){const n=t;if(n._bucket==null)throw OD();const r=new Xr(n,n._bucket);return e!=null?W1(r,e):r}else return e!==void 0?RO(t,e):t}function CO(t,e){if(e&&SO(e)){if(t instanceof nm)return AO(t,e);throw jd("To use ref(service, url), the first argument must be a Storage instance.")}else return W1(t,e)}function qy(t,e){const n=e==null?void 0:e[x1];return n==null?null:wt.makeFromBucketSpec(n,t)}function kO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:A0(i,t.app.options.projectId))}class nm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=N1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TD,this._maxUploadRetryTime=ID,this._requests=new Set,i!=null?this._bucket=wt.makeFromBucketSpec(i,this._host):this._bucket=qy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,e):this._bucket=qy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new FD(D1());{const o=QD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ky="@firebase/storage",Gy="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="storage";function PO(t,e,n){return t=ve(t),TO(t,e,n)}function NO(t){return t=ve(t),IO(t)}function xO(t,e){return t=ve(t),CO(t,e)}function DO(t=Hf(),e){t=ve(t);const r=Su(t,q1).getImmediate({identifier:e}),i=I0("storage");return i&&OO(r,...i),r}function OO(t,e,n,r={}){kO(t,e,n,r)}function LO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new nm(n,r,i,e,Zr)}function VO(){Hr(new ar(q1,LO,"PUBLIC").setMultipleInstances(!0)),Zt(Ky,Gy,""),Zt(Ky,Gy,"esm2017")}VO();const MO={apiKey:"AIzaSyDVSTUJJvm9aslQhApUJzUhfl8SdkRvgNU",authDomain:"fir-testing-00.firebaseapp.com",projectId:"fir-testing-00",storageBucket:"fir-testing-00.appspot.com",messagingSenderId:"121021807568",appId:"1:121021807568:web:a33762d7c9c6abc3e057d5",measurementId:"G-ZTLHXKZK00"},rm=P0(MO),cs=hP(rm),sc=rD(rm),UO=DO(rm),im=()=>{const[t,e]=T.useState();return T.useEffect(()=>ZC(cs,r=>e(r)),[]),t},FO=async(t,e,n,r)=>{try{if(!t||!e||!n||!r){V.error("Please fill in all fields");return}if(n!==r){V.error("Passwords do not match");return}if(!e.trim()){V.error("Username cannot be empty");return}if(!await oc(e)){V.error("Username is not available. Please choose a different username.");return}const s=await KC(cs,t,n),o=Wp(sc,"users",s.user.uid);return await vD(o,{email:s.user.email.toLowerCase(),username:e.toLowerCase()}),V.success("User Created"),!0}catch(i){switch(i.code){case"auth/email-already-in-use":V.error("Email address is already in use");break;case"auth/invalid-email":V.error("Invalid email address");break;case"auth/operation-not-allowed":V.error("Email/password accounts are not enabled. Contact support.");break;case"auth/weak-password":V.error("Password is not strong enough");break;default:return V.error("An error occurred. Please try again later."),console.error(i),!1}return!1}},bO=async(t,e)=>{if(!t||!e){V.error("Please fill in all fields");return}try{return await GC(cs,t,e),V.success("Logged In"),!0}catch(n){switch(n.code){case"auth/invalid-email":V.error("Invalid email address");break;case"auth/user-disabled":V.error("User is disabled");break;case"auth/user-not-found":V.error("User not found");break;case"auth/wrong-password":V.error("Wrong password");break;default:V.error("An error occurred. Please try again later."),console.error(n)}return!1}},$O=async()=>{try{return await cs.signOut(),V.success("Logged Out"),!0}catch(t){return V.error("An error occurred. Please try again later."),console.error(t),!1}},oc=async t=>{if(t.length>16||t.length<3||!t.match(/^[a-zA-Z0-9_]+$/))return"Invalid";try{const n=(await _D(tD(sc,"users"))).docs;for(const r of n)if(r.data().username.toLowerCase()===t.toLowerCase())return"Taken";return"Available"}catch(e){return console.error("Error checking username availability:",e),!1}},jO=async t=>{try{const e=Wp(sc,"users",t),n=await yD(e);return n.exists()?n.data():(console.log("User document not found for UID:",t),null)}catch(e){return console.error("Error fetching user data:",e),null}},BO=async(t,e)=>{try{if(!e){V.error("Please select an image to upload.");return}if(e.size>1024*1024){V.error("Image size exceeds the maximum allowed size of 1MB");return}const n=xO(UO,`Profile Pictures/${t}.png`);await PO(n,e);const r=await NO(n);return await XC(cs.currentUser,{photoURL:r}),V.success("Profile picture uploaded successfully!"),!0}catch(n){return V.error("Failed to upload the profile picture"),console.error(n),!1}},zO=async(t,e)=>{try{if(await oc(e)==="Available"){const n=Wp(sc,"users",t);return await ED(n,{username:e.toLowerCase()}),V.success("Username updated successfully!"),!0}else return V.error("Username is not available. Please choose a different username."),!1}catch(n){return V.error("Failed to update username"),console.error("Error updating username:",n),!1}},HO=async t=>{try{return await qC(cs,t),V.success("Password reset email sent successfully!"),!0}catch(e){switch(e.code){case"auth/invalid-email":V.error("Invalid email address");break;case"auth/user-not-found":V.error("User not found");break;default:V.error("An error occurred. Please try again later."),console.error(e)}return!1}},ir=({onClick:t,isLoading:e,disabled:n,hidden:r,text:i,className:s})=>r?null:w.jsx("button",{onClick:t,disabled:n,className:`text-gray-100 px-4 py-1 cursor-pointer bg-gray-900 rounded-lg hover:ring focus:ring ring-offset-1 ring-gray-900 flex justify-center items-center ${s}`,children:e?w.jsx("img",{className:"h-6 w-6",src:"/GIF/Loading White.gif",alt:"Loading"}):i}),WO=()=>{const t=jo(),e=im();return w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"flex flex-wrap justify-between mx-[10%] my-2",children:[w.jsx(Mc,{className:"hover:shadow-lg rounded-lg p-2",to:"/Home",children:"Home"}),w.jsx(Mc,{hidden:!e,className:"hover:shadow-lg rounded-lg p-2",to:"/Profile",children:"Profile"}),w.jsx(Mc,{hidden:e,className:"hover:shadow-lg rounded-lg p-2",to:"/Login",children:"Login"}),w.jsx(ir,{onClick:()=>{t("/Signup")},hidden:e,className:"hover:shadow-lg rounded-lg p-2",text:"Signup"}),w.jsx(ir,{onClick:async()=>{await $O()&&t("/Login")},hidden:!e,className:"hover:shadow-lg rounded-lg p-2 pointer",text:"Logout"})]}),w.jsx("hr",{})]})},Qy=()=>w.jsx(w.Fragment,{children:w.jsx("div",{children:"Home"})}),Wn=({name:t,value:e,onBlur:n,onChange:r,type:i,placeholder:s,onKeyDown:o})=>w.jsx(w.Fragment,{children:w.jsxs("div",{className:"flex flex-col justify-center relative",children:[w.jsx("input",{required:!0,title:"",name:t,value:e,onKeyDown:o,onBlur:n,onChange:r,id:s,className:"peer border-2 rounded-lg px-2 py-1 focus:border-OpenColor-gray-9",autoComplete:"off",type:i}),w.jsx("label",{className:`absolute ml-2 my-1 border-2 border-transparent text-OpenColor-gray-5 peer cursor-text bg-white select-none leading-3 ${e?"-top-4":"top-1.5 peer-focus:-top-4"}`,htmlFor:s,children:s})]})}),qO=()=>{const t=jo(),[e,n]=T.useState({email:"",password:"",forgottenEmail:""}),[r,i]=T.useState(!1),[s,o]=T.useState(!1),a=async()=>{o(!0),await bO(e.email,e.password)&&t("/Profile"),o(!1)},l=c=>{const{name:h,value:d}=c.target;n(m=>({...m,[h]:d}))},u=async()=>{o(!0),await HO(e.forgottenEmail),o(!1)};return w.jsx(w.Fragment,{children:w.jsxs("div",{className:"flex flex-col max-w-md mx-auto my-16 gap-6 p-8 rounded-lg shadow-lg",children:[w.jsx("div",{className:"text-center text-5xl font-bold mb-4",children:"Login"}),r&&w.jsxs(w.Fragment,{children:[w.jsx(Wn,{name:"forgottenEmail",value:e.forgottenEmail,onChange:l,type:"email",placeholder:"Forgotten Email"}),w.jsx(ir,{onClick:u,disabled:s,isLoading:s,text:"Send Email"}),w.jsx(ir,{onClick:()=>{i(!1)},text:"Back"})]}),!r&&w.jsxs(w.Fragment,{children:[w.jsx(Wn,{name:"email",value:e.email,onChange:l,type:"email",placeholder:"Email"}),w.jsxs("div",{className:"flex gap-1 flex-col",children:[w.jsx(Wn,{name:"password",value:e.password,onKeyDown:c=>{c.key==="Enter"&&a()},onChange:l,type:"password",placeholder:"Password"}),w.jsx("div",{onClick:()=>{i(!0)},className:"flex gap-2 mx-1 text-sm hover:text-black underline cursor-pointer",children:"Forgot Password?"})]}),w.jsxs("div",{className:"flex gap-2 flex-col",children:[w.jsx(ir,{onClick:a,disabled:s,isLoading:s,text:"Login"}),w.jsxs("div",{className:"flex gap-1 mx-1 text-sm",children:["Don't have an account?",w.jsx("div",{onClick:()=>{t("/Signup")},className:"hover:text-black underline cursor-pointer",children:"SignUp"})]})]})]})]})})},KO=()=>{const t=jo(),[e,n]=T.useState({email:"",username:"",password:"",confirm_password:""}),[r,i]=T.useState(!1),[s,o]=T.useState(!1),[a,l]=T.useState(!1),u=h=>{const{name:d,value:m}=h.target;n(y=>({...y,[d]:m}))},c=async()=>{i(!0),await FO(e.email,e.username,e.password,e.confirm_password)&&t("/Profile"),i(!1)};return w.jsx(w.Fragment,{children:w.jsxs("div",{className:"flex flex-col max-w-md mx-auto my-16 gap-6 p-8 rounded-lg shadow-lg",children:[w.jsx("div",{className:"text-center text-5xl font-bold mb-4",children:"Signup"}),w.jsx(Wn,{name:"email",value:e.email,onChange:u,type:"email",placeholder:"Email"}),w.jsxs("div",{children:[w.jsx(Wn,{name:"username",value:e.username,onChange:u,onBlur:async()=>{if(e.username.trim()){o(!0);const h=await oc(e.username);l(h),o(!1)}},type:"username",placeholder:"Username"}),e.username&&w.jsxs("div",{className:"flex items-center gap-2 ml-1 mt-1",children:[s?w.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}):w.jsx("div",{className:`w-2 h-2 ${a==="Available"?"bg-green-500":a==="Taken"&&"bg-red-500"} bg-blue-500 rounded-full`}),w.jsxs("div",{className:"flex-1",children:[w.jsxs("span",{className:"break-all",children:["@",e.username]})," ",s?"is Checking...":a&&"is "+a]})]})]}),w.jsx(Wn,{name:"password",value:e.password,onChange:u,type:"password",placeholder:"Password"}),w.jsxs("div",{className:"flex flex-col gap-4 break-words",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:`w-2 h-2 ${/^.{8,32}$/.test(e.password)?"bg-green-500":"bg-red-500"} rounded-full`}),w.jsx("div",{className:"flex-1",children:"Password must be between 8 and 32 characters"})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:`w-2 h-2 ${/[!@#$%^&*()-_=+]/.test(e.password)?"bg-green-500":"bg-red-500"} rounded-full`}),w.jsx("div",{className:"flex-1",children:"Password must contain at least one special character"})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:`w-2 h-2 ${/\d/.test(e.password)?"bg-green-500":"bg-red-500"} rounded-full`}),w.jsx("div",{className:"flex-1",children:"Password must contain at least one number"})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:`w-2 h-2 ${/^(?=.*[a-z])(?=.*[A-Z])/.test(e.password)?"bg-green-500":"bg-red-500"} rounded-full`}),w.jsx("div",{className:"flex-1",children:"Password must contain at least one uppercase and one lowercase character"})]})]}),w.jsx(Wn,{name:"confirm_password",value:e.confirm_password,onChange:u,onKeyDown:h=>{h.key==="Enter"&&c()},type:"password",placeholder:"Confirm Password"}),w.jsxs("div",{className:"flex gap-2 flex-col",children:[w.jsx(ir,{onClick:c,disabled:r||!a,isLoading:r,text:"Signup"}),w.jsxs("div",{className:"flex gap-1 mx-1 text-sm",children:["Already have an account?",w.jsx("div",{onClick:()=>{t("/Login")},className:"hover:text-black underline cursor-pointer",children:"Login"})]})]})]})})},GO=()=>{const t=im(),[e,n]=T.useState(),[r,i]=T.useState(),[s,o]=T.useState(),[a,l]=T.useState(!1),[u,c]=T.useState(),[h,d]=T.useState(),[m,y]=T.useState(""),[_,v]=T.useState(),[p,f]=T.useState(!1),[g,E]=T.useState(!1);T.useEffect(()=>{t&&(n(t.photoURL),jO(t.uid).then(P=>{i(P.email),o(P.username)}))},[t]);const I=async()=>{f(!0),u&&(await BO(t.uid,u),c(null)),m&&await zO(t.uid,m),l(!1),f(!1)},C=P=>{const k=P.target.files[0];if(k){c(k);const H=new FileReader;H.onloadend=()=>{d(H.result)},H.readAsDataURL(k)}else d(null)};return w.jsx(w.Fragment,{children:w.jsx("div",{className:"flex justify-center",children:w.jsxs("div",{className:"flex flex-col w-96 my-16 gap-4 p-8 rounded-lg shadow-lg",children:[w.jsx("div",{className:"flex flex-col flex- gap-16",children:w.jsx("div",{className:"flex justify-center",children:w.jsxs("div",{className:"relative",children:[w.jsx("img",{className:`${u&&"ring ring-offset-1 ring-gray-900"} h-32 w-32 rounded-full origin-center object-cover`,src:h||e||"/Images/Default Profile Picture.png",alt:"Profile Picture"}),a&&w.jsxs(w.Fragment,{children:[w.jsx("input",{className:"flex-1",hidden:!0,type:"file",id:"file",onChange:C}),w.jsx("label",{className:"absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black/20 bg-opacity-50 opacity-0 hover:opacity-100 transition cursor-pointer rounded-full",htmlFor:"file",children:"Upload"})]})]})})}),w.jsxs("div",{className:"flex flex-col justify-center text-center",children:[w.jsxs("div",{children:["@",s]}),w.jsx("div",{children:r})]}),!a&&w.jsx(ir,{text:"Edit",onClick:()=>{l(!0)}}),a&&w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"flex flex-col gap-4",children:w.jsxs("div",{className:"flex flex-col justify-between",children:[w.jsx(Wn,{type:"text",placeholder:"Username",value:m,onChange:P=>{y(P.target.value),v(null)},onBlur:async P=>{const k=P.target.value;if(y(k),k.trim()){E(!0);const H=await oc(k);v(H),E(!1)}}}),m&&w.jsx(w.Fragment,{children:w.jsxs("div",{className:"flex items-center gap-1 ml-1 mt-1",children:[w.jsx("div",{className:`w-2 h-2 bg-blue-500 rounded-full ${_==="Available"?"bg-green-500":(_==="Taken"||_==="Invalid")&&"bg-red-500"}`}),w.jsxs("div",{className:"flex-1",children:["@",m," ",g?"is Checking...":_&&"is "+_]})]})})]})}),w.jsx(ir,{text:"Save",disabled:p,isLoading:p,onClick:I})]})]})})})},QO=()=>w.jsx(w.Fragment,{children:w.jsxs("div",{className:"text-center col-span-full mt-[25%] text-6xl font-bold",children:["ERROR ",w.jsx("span",{className:"text-red-500",children:"404"})]})});function XO(){const t=im(),[e,n]=T.useState(!0);return T.useEffect(()=>{t!==void 0&&setTimeout(()=>{n(!1)},100)},[t]),w.jsxs(w.Fragment,{children:[!e&&w.jsxs(w.Fragment,{children:[w.jsx(WO,{}),w.jsxs(lS,{children:[w.jsx(Ir,{path:"/",element:w.jsx(Qy,{})}),w.jsx(Ir,{path:"/Home",element:w.jsx(Qy,{})}),w.jsx(Ir,{path:"/Login",element:t?w.jsx(Vc,{to:"/Profile"}):w.jsx(qO,{})}),w.jsx(Ir,{path:"/Signup",element:t?w.jsx(Vc,{to:"/Profile"}):w.jsx(KO,{})}),w.jsx(Ir,{path:"/Profile",element:t?w.jsx(GO,{}):w.jsx(Vc,{to:"/Login"})}),w.jsx(Ir,{path:"/*",element:w.jsx(QO,{})})]})]}),w.jsx(ld,{position:"bottom-right",draggable:!1,closeOnClick:!1,transition:RS})]})}hh.createRoot(document.getElementById("root")).render(w.jsx(ee.StrictMode,{children:w.jsx(pS,{children:w.jsx(XO,{})})}));
