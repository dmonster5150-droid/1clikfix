function bE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function FE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lg={exports:{}},Pl={},Mg={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),UE=Symbol.for("react.portal"),jE=Symbol.for("react.fragment"),BE=Symbol.for("react.strict_mode"),zE=Symbol.for("react.profiler"),$E=Symbol.for("react.provider"),HE=Symbol.for("react.context"),WE=Symbol.for("react.forward_ref"),qE=Symbol.for("react.suspense"),GE=Symbol.for("react.memo"),KE=Symbol.for("react.lazy"),np=Symbol.iterator;function QE(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var bg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fg=Object.assign,Ug={};function bi(t,e,n){this.props=t,this.context=e,this.refs=Ug,this.updater=n||bg}bi.prototype.isReactComponent={};bi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jg(){}jg.prototype=bi.prototype;function Ih(t,e,n){this.props=t,this.context=e,this.refs=Ug,this.updater=n||bg}var Sh=Ih.prototype=new jg;Sh.constructor=Ih;Fg(Sh,bi.prototype);Sh.isPureReactComponent=!0;var rp=Array.isArray,Bg=Object.prototype.hasOwnProperty,Ah={current:null},zg={key:!0,ref:!0,__self:!0,__source:!0};function $g(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Bg.call(e,r)&&!zg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:lo,type:t,key:s,ref:a,props:i,_owner:Ah.current}}function JE(t,e){return{$$typeof:lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===lo}function XE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ip=/\/+/g;function Su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XE(""+t.key):e.toString(36)}function ma(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case lo:case UE:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Su(a,0):r,rp(i)?(n="",t!=null&&(n=t.replace(ip,"$&/")+"/"),ma(i,e,n,"",function(h){return h})):i!=null&&(Ch(i)&&(i=JE(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ip,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",rp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Su(s,l);a+=ma(s,e,n,u,i)}else if(u=QE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Su(s,l++),a+=ma(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Wo(t,e,n){if(t==null)return t;var r=[],i=0;return ma(t,r,"","",function(s){return e.call(n,s,i++)}),r}function YE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},ga={transition:null},ZE={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:ga,ReactCurrentOwner:Ah};function Hg(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Wo,forEach:function(t,e,n){Wo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wo(t,function(){e++}),e},toArray:function(t){return Wo(t,function(e){return e})||[]},only:function(t){if(!Ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=bi;X.Fragment=jE;X.Profiler=zE;X.PureComponent=Ih;X.StrictMode=BE;X.Suspense=qE;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZE;X.act=Hg;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Fg({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Ah.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Bg.call(e,u)&&!zg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:lo,type:t.type,key:i,ref:s,props:r,_owner:a}};X.createContext=function(t){return t={$$typeof:HE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$E,_context:t},t.Consumer=t};X.createElement=$g;X.createFactory=function(t){var e=$g.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:WE,render:t}};X.isValidElement=Ch;X.lazy=function(t){return{$$typeof:KE,_payload:{_status:-1,_result:t},_init:YE}};X.memo=function(t,e){return{$$typeof:GE,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=ga.transition;ga.transition={};try{t()}finally{ga.transition=e}};X.unstable_act=Hg;X.useCallback=function(t,e){return it.current.useCallback(t,e)};X.useContext=function(t){return it.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return it.current.useDeferredValue(t)};X.useEffect=function(t,e){return it.current.useEffect(t,e)};X.useId=function(){return it.current.useId()};X.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return it.current.useMemo(t,e)};X.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};X.useRef=function(t){return it.current.useRef(t)};X.useState=function(t){return it.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return it.current.useTransition()};X.version="18.3.1";Mg.exports=X;var B=Mg.exports;const Wg=FE(B),ew=bE({__proto__:null,default:Wg},[B]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tw=B,nw=Symbol.for("react.element"),rw=Symbol.for("react.fragment"),iw=Object.prototype.hasOwnProperty,sw=tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ow={key:!0,ref:!0,__self:!0,__source:!0};function qg(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)iw.call(e,r)&&!ow.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nw,type:t,key:s,ref:a,props:i,_owner:sw.current}}Pl.Fragment=rw;Pl.jsx=qg;Pl.jsxs=qg;Lg.exports=Pl;var O=Lg.exports,Gg={exports:{}},yt={},Kg={exports:{}},Qg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var K=z.length;z.push(G);e:for(;0<K;){var pe=K-1>>>1,ie=z[pe];if(0<i(ie,G))z[pe]=G,z[K]=ie,K=pe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],K=z.pop();if(K!==G){z[0]=K;e:for(var pe=0,ie=z.length,we=ie>>>1;pe<we;){var Zt=2*(pe+1)-1,en=z[Zt],tn=Zt+1,nn=z[tn];if(0>i(en,K))tn<ie&&0>i(nn,en)?(z[pe]=nn,z[tn]=K,pe=tn):(z[pe]=en,z[Zt]=K,pe=Zt);else if(tn<ie&&0>i(nn,K))z[pe]=nn,z[tn]=K,pe=tn;else break e}}return G}function i(z,G){var K=z.sortIndex-G.sortIndex;return K!==0?K:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],h=[],f=1,p=null,g=3,C=!1,P=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=z)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function V(z){if(N=!1,S(z),!P)if(n(u)!==null)P=!0,qi(F);else{var G=n(h);G!==null&&Yt(V,G.startTime-z)}}function F(z,G){P=!1,N&&(N=!1,I(v),v=-1),C=!0;var K=g;try{for(S(G),p=n(u);p!==null&&(!(p.expirationTime>G)||z&&!A());){var pe=p.callback;if(typeof pe=="function"){p.callback=null,g=p.priorityLevel;var ie=pe(p.expirationTime<=G);G=t.unstable_now(),typeof ie=="function"?p.callback=ie:p===n(u)&&r(u),S(G)}else r(u);p=n(u)}if(p!==null)var we=!0;else{var Zt=n(h);Zt!==null&&Yt(V,Zt.startTime-G),we=!1}return we}finally{p=null,g=K,C=!1}}var j=!1,E=null,v=-1,_=5,w=-1;function A(){return!(t.unstable_now()-w<_)}function R(){if(E!==null){var z=t.unstable_now();w=z;var G=!0;try{G=E(!0,z)}finally{G?T():(j=!1,E=null)}}else j=!1}var T;if(typeof y=="function")T=function(){y(R)};else if(typeof MessageChannel<"u"){var Et=new MessageChannel,cr=Et.port2;Et.port1.onmessage=R,T=function(){cr.postMessage(null)}}else T=function(){D(R,0)};function qi(z){E=z,j||(j=!0,T())}function Yt(z,G){v=D(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){P||C||(P=!0,qi(F))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var K=g;g=G;try{return z()}finally{g=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=g;g=z;try{return G()}finally{g=K}},t.unstable_scheduleCallback=function(z,G,K){var pe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?pe+K:pe):K=pe,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=K+ie,z={id:f++,callback:G,priorityLevel:z,startTime:K,expirationTime:ie,sortIndex:-1},K>pe?(z.sortIndex=K,e(h,z),n(u)===null&&z===n(h)&&(N?(I(v),v=-1):N=!0,Yt(V,K-pe))):(z.sortIndex=ie,e(u,z),P||C||(P=!0,qi(F))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var G=g;return function(){var K=g;g=G;try{return z.apply(this,arguments)}finally{g=K}}}})(Qg);Kg.exports=Qg;var aw=Kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lw=B,vt=aw;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jg=new Set,Ms={};function Ur(t,e){Ti(t,e),Ti(t+"Capture",e)}function Ti(t,e){for(Ms[t]=e,t=0;t<e.length;t++)Jg.add(e[t])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=Object.prototype.hasOwnProperty,uw=/^[:A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�][:A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�\-.0-9·̀-ͯ‿-⁀]*$/,sp={},op={};function cw(t){return ac.call(op,t)?!0:ac.call(sp,t)?!1:uw.test(t)?op[t]=!0:(sp[t]=!0,!1)}function hw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dw(t,e,n,r){if(e===null||typeof e>"u"||hw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ph=/[\-:]([a-z])/g;function kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ph,kh);Be[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ph,kh);Be[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ph,kh);Be[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rh(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dw(e,n,i,r)&&(n=null),r||i===null?cw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sn=lw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),lc=Symbol.for("react.profiler"),Xg=Symbol.for("react.provider"),Yg=Symbol.for("react.context"),xh=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),cc=Symbol.for("react.suspense_list"),Oh=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),ap=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=ap&&t[ap]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Au;function ms(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||""}return`
`+Au+t}var Cu=!1;function Pu(t,e){if(!t||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ms(t):""}function fw(t){switch(t.tag){case 5:return ms(t.type);case 16:return ms("Lazy");case 13:return ms("Suspense");case 19:return ms("SuspenseList");case 0:case 2:case 15:return t=Pu(t.type,!1),t;case 11:return t=Pu(t.type.render,!1),t;case 1:return t=Pu(t.type,!0),t;default:return""}}function hc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zr:return"Fragment";case Yr:return"Portal";case lc:return"Profiler";case Nh:return"StrictMode";case uc:return"Suspense";case cc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yg:return(t.displayName||"Context")+".Consumer";case Xg:return(t._context.displayName||"Context")+".Provider";case xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oh:return e=t.displayName||null,e!==null?e:hc(t.type)||"Memo";case xn:e=t._payload,t=t._init;try{return hc(t(e))}catch{}}return null}function pw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hc(e);case 8:return e===Nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ev(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mw(t){var e=ev(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Go(t){t._valueTracker||(t._valueTracker=mw(t))}function tv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ev(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nv(t,e){e=e.checked,e!=null&&Rh(t,"checked",e,!1)}function fc(t,e){nv(t,e);var n=tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pc(t,e.type,n):e.hasOwnProperty("defaultValue")&&pc(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pc(t,e,n){(e!=="number"||Ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var gs=Array.isArray;function hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function mc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(gs(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function rv(t,e){var n=tr(e.value),r=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function iv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?iv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ko,sv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gw=["Webkit","ms","Moz","O"];Object.keys(Es).forEach(function(t){gw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Es[e]=Es[t]})});function ov(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Es.hasOwnProperty(t)&&Es[t]?(""+e).trim():e+"px"}function av(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ov(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var vw=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(t,e){if(e){if(vw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _c=null;function Dh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ec=null,di=null,fi=null;function dp(t){if(t=ho(t)){if(typeof Ec!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Ol(e),Ec(t.stateNode,t.type,e))}}function lv(t){di?fi?fi.push(t):fi=[t]:di=t}function uv(){if(di){var t=di,e=fi;if(fi=di=null,dp(t),e)for(t=0;t<e.length;t++)dp(e[t])}}function cv(t,e){return t(e)}function hv(){}var ku=!1;function dv(t,e,n){if(ku)return t(e,n);ku=!0;try{return cv(t,e,n)}finally{ku=!1,(di!==null||fi!==null)&&(hv(),uv())}}function Fs(t,e){var n=t.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var wc=!1;if(vn)try{var as={};Object.defineProperty(as,"passive",{get:function(){wc=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{wc=!1}function yw(t,e,n,r,i,s,a,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var ws=!1,ba=null,Fa=!1,Tc=null,_w={onError:function(t){ws=!0,ba=t}};function Ew(t,e,n,r,i,s,a,l,u){ws=!1,ba=null,yw.apply(_w,arguments)}function ww(t,e,n,r,i,s,a,l,u){if(Ew.apply(this,arguments),ws){if(ws){var h=ba;ws=!1,ba=null}else throw Error(b(198));Fa||(Fa=!0,Tc=h)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fp(t){if(jr(t)!==t)throw Error(b(188))}function Tw(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fp(i),t;if(s===r)return fp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function pv(t){return t=Tw(t),t!==null?mv(t):null}function mv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mv(t);if(e!==null)return e;t=t.sibling}return null}var gv=vt.unstable_scheduleCallback,pp=vt.unstable_cancelCallback,Iw=vt.unstable_shouldYield,Sw=vt.unstable_requestPaint,Te=vt.unstable_now,Aw=vt.unstable_getCurrentPriorityLevel,Vh=vt.unstable_ImmediatePriority,vv=vt.unstable_UserBlockingPriority,Ua=vt.unstable_NormalPriority,Cw=vt.unstable_LowPriority,yv=vt.unstable_IdlePriority,kl=null,Wt=null;function Pw(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Nw,kw=Math.log,Rw=Math.LN2;function Nw(t){return t>>>=0,t===0?32:31-(kw(t)/Rw|0)|0}var Qo=64,Jo=4194304;function vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=vs(l):(s&=a,s!==0&&(r=vs(s)))}else a=n&~i,a!==0?r=vs(a):s!==0&&(r=vs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bt(e),i=1<<n,r|=t[n],e&=~i;return r}function xw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ow(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-bt(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=xw(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ic(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _v(){var t=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),t}function Ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bt(e),t[e]=n}function Dw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function Ev(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wv,Mh,Tv,Iv,Sv,Sc=!1,Xo=[],$n=null,Hn=null,Wn=null,Us=new Map,js=new Map,Dn=[],Vw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mp(t,e){switch(t){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Us.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(e.pointerId)}}function ls(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ho(e),e!==null&&Mh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Lw(t,e,n,r,i){switch(e){case"focusin":return $n=ls($n,t,e,n,r,i),!0;case"dragenter":return Hn=ls(Hn,t,e,n,r,i),!0;case"mouseover":return Wn=ls(Wn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Us.set(s,ls(Us.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,js.set(s,ls(js.get(s)||null,t,e,n,r,i)),!0}return!1}function Av(t){var e=yr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=fv(n),e!==null){t.blockedOn=e,Sv(t.priority,function(){Tv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ac(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_c=r,n.target.dispatchEvent(r),_c=null}else return e=ho(n),e!==null&&Mh(e),t.blockedOn=n,!1;e.shift()}return!0}function gp(t,e,n){va(t)&&n.delete(e)}function Mw(){Sc=!1,$n!==null&&va($n)&&($n=null),Hn!==null&&va(Hn)&&(Hn=null),Wn!==null&&va(Wn)&&(Wn=null),Us.forEach(gp),js.forEach(gp)}function us(t,e){t.blockedOn===e&&(t.blockedOn=null,Sc||(Sc=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,Mw)))}function Bs(t){function e(i){return us(i,t)}if(0<Xo.length){us(Xo[0],t);for(var n=1;n<Xo.length;n++){var r=Xo[n];r.blockedOn===t&&(r.blockedOn=null)}}for($n!==null&&us($n,t),Hn!==null&&us(Hn,t),Wn!==null&&us(Wn,t),Us.forEach(e),js.forEach(e),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)Av(n),n.blockedOn===null&&Dn.shift()}var pi=Sn.ReactCurrentBatchConfig,Ba=!0;function bw(t,e,n,r){var i=re,s=pi.transition;pi.transition=null;try{re=1,bh(t,e,n,r)}finally{re=i,pi.transition=s}}function Fw(t,e,n,r){var i=re,s=pi.transition;pi.transition=null;try{re=4,bh(t,e,n,r)}finally{re=i,pi.transition=s}}function bh(t,e,n,r){if(Ba){var i=Ac(t,e,n,r);if(i===null)Uu(t,e,r,za,n),mp(t,r);else if(Lw(i,t,e,n,r))r.stopPropagation();else if(mp(t,r),e&4&&-1<Vw.indexOf(t)){for(;i!==null;){var s=ho(i);if(s!==null&&wv(s),s=Ac(t,e,n,r),s===null&&Uu(t,e,r,za,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uu(t,e,r,null,n)}}var za=null;function Ac(t,e,n,r){if(za=null,t=Dh(r),t=yr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return za=t,null}function Cv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Aw()){case Vh:return 1;case vv:return 4;case Ua:case Cw:return 16;case yv:return 536870912;default:return 16}default:return 16}}var Un=null,Fh=null,ya=null;function Pv(){if(ya)return ya;var t,e=Fh,n=e.length,r,i="value"in Un?Un.value:Un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return ya=i.slice(t,1<r?1-r:void 0)}function _a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function vp(){return!1}function _t(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yo:vp,this.isPropagationStopped=vp,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),e}var Fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=_t(Fi),co=ve({},Fi,{view:0,detail:0}),Uw=_t(co),Nu,xu,cs,Rl=ve({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(Nu=t.screenX-cs.screenX,xu=t.screenY-cs.screenY):xu=Nu=0,cs=t),Nu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),yp=_t(Rl),jw=ve({},Rl,{dataTransfer:0}),Bw=_t(jw),zw=ve({},co,{relatedTarget:0}),Ou=_t(zw),$w=ve({},Fi,{animationName:0,elapsedTime:0,pseudoElement:0}),Hw=_t($w),Ww=ve({},Fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qw=_t(Ww),Gw=ve({},Fi,{data:0}),_p=_t(Gw),Kw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jw[t])?!!e[t]:!1}function jh(){return Xw}var Yw=ve({},co,{key:function(t){if(t.key){var e=Kw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(t){return t.type==="keypress"?_a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zw=_t(Yw),eT=ve({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=_t(eT),tT=ve({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),nT=_t(tT),rT=ve({},Fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),iT=_t(rT),sT=ve({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oT=_t(sT),aT=[9,13,27,32],Bh=vn&&"CompositionEvent"in window,Ts=null;vn&&"documentMode"in document&&(Ts=document.documentMode);var lT=vn&&"TextEvent"in window&&!Ts,kv=vn&&(!Bh||Ts&&8<Ts&&11>=Ts),wp=" ",Tp=!1;function Rv(t,e){switch(t){case"keyup":return aT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ei=!1;function uT(t,e){switch(t){case"compositionend":return Nv(e);case"keypress":return e.which!==32?null:(Tp=!0,wp);case"textInput":return t=e.data,t===wp&&Tp?null:t;default:return null}}function cT(t,e){if(ei)return t==="compositionend"||!Bh&&Rv(t,e)?(t=Pv(),ya=Fh=Un=null,ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kv&&e.locale!=="ko"?null:e.data;default:return null}}var hT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hT[t.type]:e==="textarea"}function xv(t,e,n,r){lv(r),e=$a(e,"onChange"),0<e.length&&(n=new Uh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Is=null,zs=null;function dT(t){zv(t,0)}function Nl(t){var e=ri(t);if(tv(e))return t}function fT(t,e){if(t==="change")return e}var Ov=!1;if(vn){var Du;if(vn){var Vu="oninput"in document;if(!Vu){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),Vu=typeof Sp.oninput=="function"}Du=Vu}else Du=!1;Ov=Du&&(!document.documentMode||9<document.documentMode)}function Ap(){Is&&(Is.detachEvent("onpropertychange",Dv),zs=Is=null)}function Dv(t){if(t.propertyName==="value"&&Nl(zs)){var e=[];xv(e,zs,t,Dh(t)),dv(dT,e)}}function pT(t,e,n){t==="focusin"?(Ap(),Is=e,zs=n,Is.attachEvent("onpropertychange",Dv)):t==="focusout"&&Ap()}function mT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(zs)}function gT(t,e){if(t==="click")return Nl(e)}function vT(t,e){if(t==="input"||t==="change")return Nl(e)}function yT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ut=typeof Object.is=="function"?Object.is:yT;function $s(t,e){if(Ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ac.call(e,i)||!Ut(t[i],e[i]))return!1}return!0}function Cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,e){var n=Cp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cp(n)}}function Vv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lv(){for(var t=window,e=Ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ma(t.document)}return e}function zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _T(t){var e=Lv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vv(n.ownerDocument.documentElement,n)){if(r!==null&&zh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pp(n,s);var a=Pp(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ET=vn&&"documentMode"in document&&11>=document.documentMode,ti=null,Cc=null,Ss=null,Pc=!1;function kp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pc||ti==null||ti!==Ma(r)||(r=ti,"selectionStart"in r&&zh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ss&&$s(Ss,r)||(Ss=r,r=$a(Cc,"onSelect"),0<r.length&&(e=new Uh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ti)))}function Zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ni={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},Lu={},Mv={};vn&&(Mv=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function xl(t){if(Lu[t])return Lu[t];if(!ni[t])return t;var e=ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mv)return Lu[t]=e[n];return t}var bv=xl("animationend"),Fv=xl("animationiteration"),Uv=xl("animationstart"),jv=xl("transitionend"),Bv=new Map,Rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){Bv.set(t,e),Ur(e,[t])}for(var Mu=0;Mu<Rp.length;Mu++){var bu=Rp[Mu],wT=bu.toLowerCase(),TT=bu[0].toUpperCase()+bu.slice(1);ar(wT,"on"+TT)}ar(bv,"onAnimationEnd");ar(Fv,"onAnimationIteration");ar(Uv,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(jv,"onTransitionEnd");Ti("onMouseEnter",["mouseout","mouseover"]);Ti("onMouseLeave",["mouseout","mouseover"]);Ti("onPointerEnter",["pointerout","pointerover"]);Ti("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));function Np(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ww(r,e,void 0,t),t.currentTarget=null}function zv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Np(i,l,h),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Np(i,l,h),s=u}}}if(Fa)throw t=Tc,Fa=!1,Tc=null,t}function ue(t,e){var n=e[Oc];n===void 0&&(n=e[Oc]=new Set);var r=t+"__bubble";n.has(r)||($v(e,t,2,!1),n.add(r))}function Fu(t,e,n){var r=0;e&&(r|=4),$v(n,t,r,e)}var ea="_reactListening"+Math.random().toString(36).slice(2);function Hs(t){if(!t[ea]){t[ea]=!0,Jg.forEach(function(n){n!=="selectionchange"&&(IT.has(n)||Fu(n,!1,t),Fu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ea]||(e[ea]=!0,Fu("selectionchange",!1,e))}}function $v(t,e,n,r){switch(Cv(e)){case 1:var i=bw;break;case 4:i=Fw;break;default:i=bh}n=i.bind(null,e,n,t),i=void 0,!wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=yr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}dv(function(){var h=s,f=Dh(n),p=[];e:{var g=Bv.get(t);if(g!==void 0){var C=Uh,P=t;switch(t){case"keypress":if(_a(n)===0)break e;case"keydown":case"keyup":C=Zw;break;case"focusin":P="focus",C=Ou;break;case"focusout":P="blur",C=Ou;break;case"beforeblur":case"afterblur":C=Ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Bw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=nT;break;case bv:case Fv:case Uv:C=Hw;break;case jv:C=iT;break;case"scroll":C=Uw;break;case"wheel":C=oT;break;case"copy":case"cut":case"paste":C=qw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ep}var N=(e&4)!==0,D=!N&&t==="scroll",I=N?g!==null?g+"Capture":null:g;N=[];for(var y=h,S;y!==null;){S=y;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,I!==null&&(V=Fs(y,I),V!=null&&N.push(Ws(y,V,S)))),D)break;y=y.return}0<N.length&&(g=new C(g,P,null,n,f),p.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",g&&n!==_c&&(P=n.relatedTarget||n.fromElement)&&(yr(P)||P[yn]))break e;if((C||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,C?(P=n.relatedTarget||n.toElement,C=h,P=P?yr(P):null,P!==null&&(D=jr(P),P!==D||P.tag!==5&&P.tag!==6)&&(P=null)):(C=null,P=h),C!==P)){if(N=yp,V="onMouseLeave",I="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(N=Ep,V="onPointerLeave",I="onPointerEnter",y="pointer"),D=C==null?g:ri(C),S=P==null?g:ri(P),g=new N(V,y+"leave",C,n,f),g.target=D,g.relatedTarget=S,V=null,yr(f)===h&&(N=new N(I,y+"enter",P,n,f),N.target=S,N.relatedTarget=D,V=N),D=V,C&&P)t:{for(N=C,I=P,y=0,S=N;S;S=Qr(S))y++;for(S=0,V=I;V;V=Qr(V))S++;for(;0<y-S;)N=Qr(N),y--;for(;0<S-y;)I=Qr(I),S--;for(;y--;){if(N===I||I!==null&&N===I.alternate)break t;N=Qr(N),I=Qr(I)}N=null}else N=null;C!==null&&xp(p,g,C,N,!1),P!==null&&D!==null&&xp(p,D,P,N,!0)}}e:{if(g=h?ri(h):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var F=fT;else if(Ip(g))if(Ov)F=vT;else{F=mT;var j=pT}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=gT);if(F&&(F=F(t,h))){xv(p,F,n,f);break e}j&&j(t,g,h),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&pc(g,"number",g.value)}switch(j=h?ri(h):window,t){case"focusin":(Ip(j)||j.contentEditable==="true")&&(ti=j,Cc=h,Ss=null);break;case"focusout":Ss=Cc=ti=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,kp(p,n,f);break;case"selectionchange":if(ET)break;case"keydown":case"keyup":kp(p,n,f)}var E;if(Bh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ei?Rv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(kv&&n.locale!=="ko"&&(ei||v!=="onCompositionStart"?v==="onCompositionEnd"&&ei&&(E=Pv()):(Un=f,Fh="value"in Un?Un.value:Un.textContent,ei=!0)),j=$a(h,v),0<j.length&&(v=new _p(v,t,null,n,f),p.push({event:v,listeners:j}),E?v.data=E:(E=Nv(n),E!==null&&(v.data=E)))),(E=lT?uT(t,n):cT(t,n))&&(h=$a(h,"onBeforeInput"),0<h.length&&(f=new _p("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=E))}zv(p,e)})}function Ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $a(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fs(t,n),s!=null&&r.unshift(Ws(t,s,i)),s=Fs(t,e),s!=null&&r.push(Ws(t,s,i))),t=t.return}return r}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xp(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Fs(n,s),u!=null&&a.unshift(Ws(n,u,l))):i||(u=Fs(n,s),u!=null&&a.push(Ws(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ST=/\r\n?/g,AT=/ |�/g;function Op(t){return(typeof t=="string"?t:""+t).replace(ST,`
`).replace(AT,"")}function ta(t,e,n){if(e=Op(e),Op(t)!==e&&n)throw Error(b(425))}function Ha(){}var kc=null,Rc=null;function Nc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xc=typeof setTimeout=="function"?setTimeout:void 0,CT=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,PT=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(t){return Dp.resolve(null).then(t).catch(kT)}:xc;function kT(t){setTimeout(function(){throw t})}function ju(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bs(e)}function qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ui=Math.random().toString(36).slice(2),$t="__reactFiber$"+Ui,qs="__reactProps$"+Ui,yn="__reactContainer$"+Ui,Oc="__reactEvents$"+Ui,RT="__reactListeners$"+Ui,NT="__reactHandles$"+Ui;function yr(t){var e=t[$t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yn]||n[$t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vp(t);t!==null;){if(n=t[$t])return n;t=Vp(t)}return e}t=n,n=t.parentNode}return null}function ho(t){return t=t[$t]||t[yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Ol(t){return t[qs]||null}var Dc=[],ii=-1;function lr(t){return{current:t}}function ce(t){0>ii||(t.current=Dc[ii],Dc[ii]=null,ii--)}function oe(t,e){ii++,Dc[ii]=t.current,t.current=e}var nr={},Ye=lr(nr),ut=lr(!1),Pr=nr;function Ii(t,e){var n=t.type.contextTypes;if(!n)return nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ct(t){return t=t.childContextTypes,t!=null}function Wa(){ce(ut),ce(Ye)}function Lp(t,e,n){if(Ye.current!==nr)throw Error(b(168));oe(Ye,e),oe(ut,n)}function Hv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,pw(t)||"Unknown",i));return ve({},n,r)}function qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Pr=Ye.current,oe(Ye,t),oe(ut,ut.current),!0}function Mp(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=Hv(t,e,Pr),r.__reactInternalMemoizedMergedChildContext=t,ce(ut),ce(Ye),oe(Ye,t)):ce(ut),oe(ut,n)}var ln=null,Dl=!1,Bu=!1;function Wv(t){ln===null?ln=[t]:ln.push(t)}function xT(t){Dl=!0,Wv(t)}function ur(){if(!Bu&&ln!==null){Bu=!0;var t=0,e=re;try{var n=ln;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ln=null,Dl=!1}catch(i){throw ln!==null&&(ln=ln.slice(t+1)),gv(Vh,ur),i}finally{re=e,Bu=!1}}return null}var si=[],oi=0,Ga=null,Ka=0,wt=[],Tt=0,kr=null,un=1,cn="";function mr(t,e){si[oi++]=Ka,si[oi++]=Ga,Ga=t,Ka=e}function qv(t,e,n){wt[Tt++]=un,wt[Tt++]=cn,wt[Tt++]=kr,kr=t;var r=un;t=cn;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,un=1<<32-bt(e)+i|n<<i|r,cn=s+t}else un=1<<s|n<<i|r,cn=t}function $h(t){t.return!==null&&(mr(t,1),qv(t,1,0))}function Hh(t){for(;t===Ga;)Ga=si[--oi],si[oi]=null,Ka=si[--oi],si[oi]=null;for(;t===kr;)kr=wt[--Tt],wt[Tt]=null,cn=wt[--Tt],wt[Tt]=null,un=wt[--Tt],wt[Tt]=null}var gt=null,mt=null,de=!1,xt=null;function Gv(t,e){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gt=t,mt=qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gt=t,mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gt=t,mt=null,!0):!1;default:return!1}}function Vc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lc(t){if(de){var e=mt;if(e){var n=e;if(!bp(t,e)){if(Vc(t))throw Error(b(418));e=qn(n.nextSibling);var r=gt;e&&bp(t,e)?Gv(r,n):(t.flags=t.flags&-4097|2,de=!1,gt=t)}}else{if(Vc(t))throw Error(b(418));t.flags=t.flags&-4097|2,de=!1,gt=t}}}function Fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function na(t){if(t!==gt)return!1;if(!de)return Fp(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nc(t.type,t.memoizedProps)),e&&(e=mt)){if(Vc(t))throw Kv(),Error(b(418));for(;e;)Gv(t,e),e=qn(e.nextSibling)}if(Fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mt=qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mt=null}}else mt=gt?qn(t.stateNode.nextSibling):null;return!0}function Kv(){for(var t=mt;t;)t=qn(t.nextSibling)}function Si(){mt=gt=null,de=!1}function Wh(t){xt===null?xt=[t]:xt.push(t)}var OT=Sn.ReactCurrentBatchConfig;function hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ra(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Up(t){var e=t._init;return e(t._payload)}function Qv(t){function e(I,y){if(t){var S=I.deletions;S===null?(I.deletions=[y],I.flags|=16):S.push(y)}}function n(I,y){if(!t)return null;for(;y!==null;)e(I,y),y=y.sibling;return null}function r(I,y){for(I=new Map;y!==null;)y.key!==null?I.set(y.key,y):I.set(y.index,y),y=y.sibling;return I}function i(I,y){return I=Jn(I,y),I.index=0,I.sibling=null,I}function s(I,y,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<y?(I.flags|=2,y):S):(I.flags|=2,y)):(I.flags|=1048576,y)}function a(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,y,S,V){return y===null||y.tag!==6?(y=Ku(S,I.mode,V),y.return=I,y):(y=i(y,S),y.return=I,y)}function u(I,y,S,V){var F=S.type;return F===Zr?f(I,y,S.props.children,V,S.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===xn&&Up(F)===y.type)?(V=i(y,S.props),V.ref=hs(I,y,S),V.return=I,V):(V=Ca(S.type,S.key,S.props,null,I.mode,V),V.ref=hs(I,y,S),V.return=I,V)}function h(I,y,S,V){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=Qu(S,I.mode,V),y.return=I,y):(y=i(y,S.children||[]),y.return=I,y)}function f(I,y,S,V,F){return y===null||y.tag!==7?(y=Ir(S,I.mode,V,F),y.return=I,y):(y=i(y,S),y.return=I,y)}function p(I,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Ku(""+y,I.mode,S),y.return=I,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qo:return S=Ca(y.type,y.key,y.props,null,I.mode,S),S.ref=hs(I,null,y),S.return=I,S;case Yr:return y=Qu(y,I.mode,S),y.return=I,y;case xn:var V=y._init;return p(I,V(y._payload),S)}if(gs(y)||os(y))return y=Ir(y,I.mode,S,null),y.return=I,y;ra(I,y)}return null}function g(I,y,S,V){var F=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:l(I,y,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qo:return S.key===F?u(I,y,S,V):null;case Yr:return S.key===F?h(I,y,S,V):null;case xn:return F=S._init,g(I,y,F(S._payload),V)}if(gs(S)||os(S))return F!==null?null:f(I,y,S,V,null);ra(I,S)}return null}function C(I,y,S,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(S)||null,l(y,I,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case qo:return I=I.get(V.key===null?S:V.key)||null,u(y,I,V,F);case Yr:return I=I.get(V.key===null?S:V.key)||null,h(y,I,V,F);case xn:var j=V._init;return C(I,y,S,j(V._payload),F)}if(gs(V)||os(V))return I=I.get(S)||null,f(y,I,V,F,null);ra(y,V)}return null}function P(I,y,S,V){for(var F=null,j=null,E=y,v=y=0,_=null;E!==null&&v<S.length;v++){E.index>v?(_=E,E=null):_=E.sibling;var w=g(I,E,S[v],V);if(w===null){E===null&&(E=_);break}t&&E&&w.alternate===null&&e(I,E),y=s(w,y,v),j===null?F=w:j.sibling=w,j=w,E=_}if(v===S.length)return n(I,E),de&&mr(I,v),F;if(E===null){for(;v<S.length;v++)E=p(I,S[v],V),E!==null&&(y=s(E,y,v),j===null?F=E:j.sibling=E,j=E);return de&&mr(I,v),F}for(E=r(I,E);v<S.length;v++)_=C(E,I,v,S[v],V),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?v:_.key),y=s(_,y,v),j===null?F=_:j.sibling=_,j=_);return t&&E.forEach(function(A){return e(I,A)}),de&&mr(I,v),F}function N(I,y,S,V){var F=os(S);if(typeof F!="function")throw Error(b(150));if(S=F.call(S),S==null)throw Error(b(151));for(var j=F=null,E=y,v=y=0,_=null,w=S.next();E!==null&&!w.done;v++,w=S.next()){E.index>v?(_=E,E=null):_=E.sibling;var A=g(I,E,w.value,V);if(A===null){E===null&&(E=_);break}t&&E&&A.alternate===null&&e(I,E),y=s(A,y,v),j===null?F=A:j.sibling=A,j=A,E=_}if(w.done)return n(I,E),de&&mr(I,v),F;if(E===null){for(;!w.done;v++,w=S.next())w=p(I,w.value,V),w!==null&&(y=s(w,y,v),j===null?F=w:j.sibling=w,j=w);return de&&mr(I,v),F}for(E=r(I,E);!w.done;v++,w=S.next())w=C(E,I,v,w.value,V),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?v:w.key),y=s(w,y,v),j===null?F=w:j.sibling=w,j=w);return t&&E.forEach(function(R){return e(I,R)}),de&&mr(I,v),F}function D(I,y,S,V){if(typeof S=="object"&&S!==null&&S.type===Zr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case qo:e:{for(var F=S.key,j=y;j!==null;){if(j.key===F){if(F=S.type,F===Zr){if(j.tag===7){n(I,j.sibling),y=i(j,S.props.children),y.return=I,I=y;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===xn&&Up(F)===j.type){n(I,j.sibling),y=i(j,S.props),y.ref=hs(I,j,S),y.return=I,I=y;break e}n(I,j);break}else e(I,j);j=j.sibling}S.type===Zr?(y=Ir(S.props.children,I.mode,V,S.key),y.return=I,I=y):(V=Ca(S.type,S.key,S.props,null,I.mode,V),V.ref=hs(I,y,S),V.return=I,I=V)}return a(I);case Yr:e:{for(j=S.key;y!==null;){if(y.key===j)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(I,y.sibling),y=i(y,S.children||[]),y.return=I,I=y;break e}else{n(I,y);break}else e(I,y);y=y.sibling}y=Qu(S,I.mode,V),y.return=I,I=y}return a(I);case xn:return j=S._init,D(I,y,j(S._payload),V)}if(gs(S))return P(I,y,S,V);if(os(S))return N(I,y,S,V);ra(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(I,y.sibling),y=i(y,S),y.return=I,I=y):(n(I,y),y=Ku(S,I.mode,V),y.return=I,I=y),a(I)):n(I,y)}return D}var Ai=Qv(!0),Jv=Qv(!1),Qa=lr(null),Ja=null,ai=null,qh=null;function Gh(){qh=ai=Ja=null}function Kh(t){var e=Qa.current;ce(Qa),t._currentValue=e}function Mc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mi(t,e){Ja=t,qh=ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(lt=!0),t.firstContext=null)}function At(t){var e=t._currentValue;if(qh!==t)if(t={context:t,memoizedValue:e,next:null},ai===null){if(Ja===null)throw Error(b(308));ai=t,Ja.dependencies={lanes:0,firstContext:t}}else ai=ai.next=t;return e}var _r=null;function Qh(t){_r===null?_r=[t]:_r.push(t)}function Xv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qh(e)):(n.next=i.next,i.next=n),e.interleaved=n,_n(t,r)}function _n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var On=!1;function Jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_n(t,n)}return i=r.interleaved,i===null?(e.next=e,Qh(r)):(e.next=i.next,i.next=e),r.interleaved=e,_n(t,n)}function Ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lh(t,n)}}function jp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xa(t,e,n,r){var i=t.updateQueue;On=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?s=h:a.next=h,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;a=0,f=h=u=null,l=s;do{var g=l.lane,C=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(g=e,C=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){p=P.call(C,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,g=typeof P=="function"?P.call(C,p,g):P,g==null)break e;p=ve({},p,g);break e;case 2:On=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else C={eventTime:C,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=C,u=p):f=f.next=C,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Nr|=a,t.lanes=a,t.memoizedState=p}}function Bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var fo={},qt=lr(fo),Gs=lr(fo),Ks=lr(fo);function Er(t){if(t===fo)throw Error(b(174));return t}function Xh(t,e){switch(oe(Ks,e),oe(Gs,t),oe(qt,fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gc(e,t)}ce(qt),oe(qt,e)}function Ci(){ce(qt),ce(Gs),ce(Ks)}function Zv(t){Er(Ks.current);var e=Er(qt.current),n=gc(e,t.type);e!==n&&(oe(Gs,t),oe(qt,n))}function Yh(t){Gs.current===t&&(ce(qt),ce(Gs))}var me=lr(0);function Ya(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zu=[];function Zh(){for(var t=0;t<zu.length;t++)zu[t]._workInProgressVersionPrimary=null;zu.length=0}var wa=Sn.ReactCurrentDispatcher,$u=Sn.ReactCurrentBatchConfig,Rr=0,ge=null,ke=null,xe=null,Za=!1,As=!1,Qs=0,DT=0;function We(){throw Error(b(321))}function ed(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ut(t[n],e[n]))return!1;return!0}function td(t,e,n,r,i,s){if(Rr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wa.current=t===null||t.memoizedState===null?bT:FT,t=n(r,i),As){s=0;do{if(As=!1,Qs=0,25<=s)throw Error(b(301));s+=1,xe=ke=null,e.updateQueue=null,wa.current=UT,t=n(r,i)}while(As)}if(wa.current=el,e=ke!==null&&ke.next!==null,Rr=0,xe=ke=ge=null,Za=!1,e)throw Error(b(300));return t}function nd(){var t=Qs!==0;return Qs=0,t}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ge.memoizedState=xe=t:xe=xe.next=t,xe}function Ct(){if(ke===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=xe===null?ge.memoizedState:xe.next;if(e!==null)xe=e,ke=t;else{if(t===null)throw Error(b(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},xe===null?ge.memoizedState=xe=t:xe=xe.next=t}return xe}function Js(t,e){return typeof e=="function"?e(t):e}function Hu(t){var e=Ct(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,h=s;do{var f=h.lane;if((Rr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,a=r):u=u.next=p,ge.lanes|=f,Nr|=f}h=h.next}while(h!==null&&h!==s);u===null?a=r:u.next=l,Ut(r,e.memoizedState)||(lt=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Nr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wu(t){var e=Ct(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Ut(s,e.memoizedState)||(lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ey(){}function ty(t,e){var n=ge,r=Ct(),i=e(),s=!Ut(r.memoizedState,i);if(s&&(r.memoizedState=i,lt=!0),r=r.queue,rd(iy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Xs(9,ry.bind(null,n,r,i,e),void 0,null),De===null)throw Error(b(349));Rr&30||ny(n,e,i)}return i}function ny(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ry(t,e,n,r){e.value=n,e.getSnapshot=r,sy(e)&&oy(t)}function iy(t,e,n){return n(function(){sy(e)&&oy(t)})}function sy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ut(t,n)}catch{return!0}}function oy(t){var e=_n(t,1);e!==null&&Ft(e,t,1,-1)}function zp(t){var e=Bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Js,lastRenderedState:t},e.queue=t,t=t.dispatch=MT.bind(null,ge,t),[e.memoizedState,t]}function Xs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ay(){return Ct().memoizedState}function Ta(t,e,n,r){var i=Bt();ge.flags|=t,i.memoizedState=Xs(1|e,n,void 0,r===void 0?null:r)}function Vl(t,e,n,r){var i=Ct();r=r===void 0?null:r;var s=void 0;if(ke!==null){var a=ke.memoizedState;if(s=a.destroy,r!==null&&ed(r,a.deps)){i.memoizedState=Xs(e,n,s,r);return}}ge.flags|=t,i.memoizedState=Xs(1|e,n,s,r)}function $p(t,e){return Ta(8390656,8,t,e)}function rd(t,e){return Vl(2048,8,t,e)}function ly(t,e){return Vl(4,2,t,e)}function uy(t,e){return Vl(4,4,t,e)}function cy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hy(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4,4,cy.bind(null,e,t),n)}function id(){}function dy(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ed(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fy(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ed(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function py(t,e,n){return Rr&21?(Ut(n,e)||(n=_v(),ge.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,lt=!0),t.memoizedState=n)}function VT(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=$u.transition;$u.transition={};try{t(!1),e()}finally{re=n,$u.transition=r}}function my(){return Ct().memoizedState}function LT(t,e,n){var r=Qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gy(t))vy(e,n);else if(n=Xv(t,e,n,r),n!==null){var i=rt();Ft(n,t,r,i),yy(n,e,r)}}function MT(t,e,n){var r=Qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gy(t))vy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ut(l,a)){var u=e.interleaved;u===null?(i.next=i,Qh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Xv(t,e,i,r),n!==null&&(i=rt(),Ft(n,t,r,i),yy(n,e,r))}}function gy(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function vy(t,e){As=Za=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lh(t,n)}}var el={readContext:At,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},bT={readContext:At,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:At,useEffect:$p,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ta(4194308,4,cy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ta(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ta(4,2,t,e)},useMemo:function(t,e){var n=Bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=LT.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:zp,useDebugValue:id,useDeferredValue:function(t){return Bt().memoizedState=t},useTransition:function(){var t=zp(!1),e=t[0];return t=VT.bind(null,t[1]),Bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=Bt();if(de){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),De===null)throw Error(b(349));Rr&30||ny(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$p(iy.bind(null,r,s,t),[t]),r.flags|=2048,Xs(9,ry.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bt(),e=De.identifierPrefix;if(de){var n=cn,r=un;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},FT={readContext:At,useCallback:dy,useContext:At,useEffect:rd,useImperativeHandle:hy,useInsertionEffect:ly,useLayoutEffect:uy,useMemo:fy,useReducer:Hu,useRef:ay,useState:function(){return Hu(Js)},useDebugValue:id,useDeferredValue:function(t){var e=Ct();return py(e,ke.memoizedState,t)},useTransition:function(){var t=Hu(Js)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:ey,useSyncExternalStore:ty,useId:my,unstable_isNewReconciler:!1},UT={readContext:At,useCallback:dy,useContext:At,useEffect:rd,useImperativeHandle:hy,useInsertionEffect:ly,useLayoutEffect:uy,useMemo:fy,useReducer:Wu,useRef:ay,useState:function(){return Wu(Js)},useDebugValue:id,useDeferredValue:function(t){var e=Ct();return ke===null?e.memoizedState=t:py(e,ke.memoizedState,t)},useTransition:function(){var t=Wu(Js)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:ey,useSyncExternalStore:ty,useId:my,unstable_isNewReconciler:!1};function Rt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Qn(t),s=fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Gn(t,s,i),e!==null&&(Ft(e,t,i,r),Ea(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Qn(t),s=fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gn(t,s,i),e!==null&&(Ft(e,t,i,r),Ea(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=Qn(t),i=fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Gn(t,i,r),e!==null&&(Ft(e,t,r,n),Ea(e,t,r))}};function Hp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!$s(n,r)||!$s(i,s):!0}function _y(t,e,n){var r=!1,i=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=At(s):(i=ct(e)?Pr:Ye.current,r=e.contextTypes,s=(r=r!=null)?Ii(t,i):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function Fc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Jh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=At(s):(s=ct(e)?Pr:Ye.current,i.context=Ii(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ll.enqueueReplaceState(i,i.state,null),Xa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Pi(t,e){try{var n="",r=e;do n+=fw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jT=typeof WeakMap=="function"?WeakMap:Map;function Ey(t,e,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nl||(nl=!0,Qc=r),Uc(t,e)},n}function wy(t,e,n){n=fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uc(t,e),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function qp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=eI.bind(null,t,e,n),e.then(t,t))}function Gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fn(-1,1),e.tag=2,Gn(n,e,1))),n.lanes|=1),t)}var BT=Sn.ReactCurrentOwner,lt=!1;function nt(t,e,n,r){e.child=t===null?Jv(e,null,n,r):Ai(e,t.child,n,r)}function Qp(t,e,n,r,i){n=n.render;var s=e.ref;return mi(e,i),r=td(t,e,n,r,s,i),n=nd(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(de&&n&&$h(e),e.flags|=1,nt(t,e,r,i),e.child)}function Jp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ty(t,e,s,r,i)):(t=Ca(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:$s,n(a,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=Jn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ty(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($s(s,r)&&t.ref===e.ref)if(lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(lt=!0);else return e.lanes=t.lanes,En(t,e,i)}return jc(t,e,n,r,i)}function Iy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(ui,pt),pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(ui,pt),pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(ui,pt),pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe(ui,pt),pt|=r;return nt(t,e,i,n),e.child}function Sy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jc(t,e,n,r,i){var s=ct(n)?Pr:Ye.current;return s=Ii(e,s),mi(e,i),n=td(t,e,n,r,s,i),r=nd(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(de&&r&&$h(e),e.flags|=1,nt(t,e,n,i),e.child)}function Xp(t,e,n,r,i){if(ct(n)){var s=!0;qa(e)}else s=!1;if(mi(e,i),e.stateNode===null)Ia(t,e),_y(e,n,r),Fc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=At(h):(h=ct(n)?Pr:Ye.current,h=Ii(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Wp(e,a,r,h),On=!1;var g=e.memoizedState;a.state=g,Xa(e,r,a,i),u=e.memoizedState,l!==r||g!==u||ut.current||On?(typeof f=="function"&&(bc(e,n,f,r),u=e.memoizedState),(l=On||Hp(e,n,l,r,g,u,h))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=h,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Yv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Rt(e.type,l),a.props=h,p=e.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=At(u):(u=ct(n)?Pr:Ye.current,u=Ii(e,u));var C=n.getDerivedStateFromProps;(f=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Wp(e,a,r,u),On=!1,g=e.memoizedState,a.state=g,Xa(e,r,a,i);var P=e.memoizedState;l!==p||g!==P||ut.current||On?(typeof C=="function"&&(bc(e,n,C,r),P=e.memoizedState),(h=On||Hp(e,n,h,r,g,P,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,P,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,P,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),a.props=r,a.state=P,a.context=u,r=h):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Bc(t,e,n,r,s,i)}function Bc(t,e,n,r,i,s){Sy(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Mp(e,n,!1),En(t,e,s);r=e.stateNode,BT.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=Ai(e,t.child,null,s),e.child=Ai(e,null,l,s)):nt(t,e,l,s),e.memoizedState=r.state,i&&Mp(e,n,!0),e.child}function Ay(t){var e=t.stateNode;e.pendingContext?Lp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lp(t,e.context,!1),Xh(t,e.containerInfo)}function Yp(t,e,n,r,i){return Si(),Wh(i),e.flags|=256,nt(t,e,n,r),e.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function $c(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cy(t,e,n){var r=e.pendingProps,i=me.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(me,i&1),t===null)return Lc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Fl(a,r,0,null),t=Ir(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$c(n),e.memoizedState=zc,t):sd(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return zT(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Jn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Jn(l,s):(s=Ir(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?$c(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=zc,r}return s=t.child,t=s.sibling,r=Jn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sd(t,e){return e=Fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ia(t,e,n,r){return r!==null&&Wh(r),Ai(e,t.child,null,n),t=sd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zT(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=qu(Error(b(422))),ia(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fl({mode:"visible",children:r.children},i,0,null),s=Ir(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ai(e,t.child,null,a),e.child.memoizedState=$c(a),e.memoizedState=zc,s);if(!(e.mode&1))return ia(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=qu(s,r,void 0),ia(t,e,a,r)}if(l=(a&t.childLanes)!==0,lt||l){if(r=De,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_n(t,i),Ft(r,t,i,-1))}return hd(),r=qu(Error(b(421))),ia(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,mt=qn(i.nextSibling),gt=e,de=!0,xt=null,t!==null&&(wt[Tt++]=un,wt[Tt++]=cn,wt[Tt++]=kr,un=t.id,cn=t.overflow,kr=e),e=sd(e,r.children),e.flags|=4096,e)}function Zp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mc(t.return,e,n)}function Gu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Py(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zp(t,n,e);else if(t.tag===19)Zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ya(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ya(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gu(e,!0,n,null,s);break;case"together":Gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $T(t,e,n){switch(e.tag){case 3:Ay(e),Si();break;case 5:Zv(e);break;case 1:ct(e.type)&&qa(e);break;case 4:Xh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(Qa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?Cy(t,e,n):(oe(me,me.current&1),t=En(t,e,n),t!==null?t.sibling:null);oe(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Py(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,Iy(t,e,n)}return En(t,e,n)}var ky,Hc,Ry,Ny;ky=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hc=function(){};Ry=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Er(qt.current);var s=null;switch(n){case"input":i=dc(t,i),r=dc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=mc(t,i),r=mc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ha)}vc(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ms.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ue("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Ny=function(t,e,n,r){n!==r&&(e.flags|=4)};function ds(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function HT(t,e,n){var r=e.pendingProps;switch(Hh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(e),null;case 1:return ct(e.type)&&Wa(),qe(e),null;case 3:return r=e.stateNode,Ci(),ce(ut),ce(Ye),Zh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xt!==null&&(Yc(xt),xt=null))),Hc(t,e),qe(e),null;case 5:Yh(e);var i=Er(Ks.current);if(n=e.type,t!==null&&e.stateNode!=null)Ry(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return qe(e),null}if(t=Er(qt.current),na(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$t]=e,r[qs]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<ys.length;i++)ue(ys[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":lp(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":cp(r,s),ue("invalid",r)}vc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ta(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ta(r.textContent,l,t),i=["children",""+l]):Ms.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":Go(r),up(r,s,!0);break;case"textarea":Go(r),hp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ha)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=iv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[$t]=e,t[qs]=r,ky(t,e,!1,!1),e.stateNode=t;e:{switch(a=yc(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ys.length;i++)ue(ys[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":lp(t,r),i=dc(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ue("invalid",t);break;case"textarea":cp(t,r),i=mc(t,r),ue("invalid",t);break;default:i=r}vc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?av(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&sv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bs(t,u):typeof u=="number"&&bs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ms.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ue("scroll",t):u!=null&&Rh(t,s,u,a))}switch(n){case"input":Go(t),up(t,r,!1);break;case"textarea":Go(t),hp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qe(e),null;case 6:if(t&&e.stateNode!=null)Ny(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Er(Ks.current),Er(qt.current),na(e)){if(r=e.stateNode,n=e.memoizedProps,r[$t]=e,(s=r.nodeValue!==n)&&(t=gt,t!==null))switch(t.tag){case 3:ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ta(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=e,e.stateNode=r}return qe(e),null;case 13:if(ce(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&mt!==null&&e.mode&1&&!(e.flags&128))Kv(),Si(),e.flags|=98560,s=!1;else if(s=na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[$t]=e}else Si(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qe(e),s=!1}else xt!==null&&(Yc(xt),xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Re===0&&(Re=3):hd())),e.updateQueue!==null&&(e.flags|=4),qe(e),null);case 4:return Ci(),Hc(t,e),t===null&&Hs(e.stateNode.containerInfo),qe(e),null;case 10:return Kh(e.type._context),qe(e),null;case 17:return ct(e.type)&&Wa(),qe(e),null;case 19:if(ce(me),s=e.memoizedState,s===null)return qe(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)ds(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ya(t),a!==null){for(e.flags|=128,ds(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>ki&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ya(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!de)return qe(e),null}else 2*Te()-s.renderingStartTime>ki&&n!==1073741824&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=me.current,oe(me,r?n&1|2:n&1),e):(qe(e),null);case 22:case 23:return cd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pt&1073741824&&(qe(e),e.subtreeFlags&6&&(e.flags|=8192)):qe(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function WT(t,e){switch(Hh(e),e.tag){case 1:return ct(e.type)&&Wa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ci(),ce(ut),ce(Ye),Zh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yh(e),null;case 13:if(ce(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Si()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(me),null;case 4:return Ci(),null;case 10:return Kh(e.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var sa=!1,Qe=!1,qT=typeof WeakSet=="function"?WeakSet:Set,$=null;function li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function Wc(t,e,n){try{n()}catch(r){_e(t,e,r)}}var em=!1;function GT(t,e){if(kc=Ba,t=Lv(),zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var C;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(C=p.firstChild)!==null;)g=p,p=C;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=a),g===s&&++f===r&&(u=a),(C=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rc={focusedElem:t,selectionRange:n},Ba=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,D=P.memoizedState,I=e.stateNode,y=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:Rt(e.type,N),D);I.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(V){_e(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=em,em=!1,P}function Cs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wc(e,n,s)}i=i.next}while(i!==r)}}function Ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xy(t){var e=t.alternate;e!==null&&(t.alternate=null,xy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$t],delete e[qs],delete e[Oc],delete e[RT],delete e[NT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Oy(t){return t.tag===5||t.tag===3||t.tag===4}function tm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Oy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ha));else if(r!==4&&(t=t.child,t!==null))for(Gc(t,e,n),t=t.sibling;t!==null;)Gc(t,e,n),t=t.sibling}function Kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kc(t,e,n),t=t.sibling;t!==null;)Kc(t,e,n),t=t.sibling}var Le=null,Nt=!1;function Rn(t,e,n){for(n=n.child;n!==null;)Dy(t,e,n),n=n.sibling}function Dy(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Qe||li(n,e);case 6:var r=Le,i=Nt;Le=null,Rn(t,e,n),Le=r,Nt=i,Le!==null&&(Nt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Nt?(t=Le,n=n.stateNode,t.nodeType===8?ju(t.parentNode,n):t.nodeType===1&&ju(t,n),Bs(t)):ju(Le,n.stateNode));break;case 4:r=Le,i=Nt,Le=n.stateNode.containerInfo,Nt=!0,Rn(t,e,n),Le=r,Nt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Wc(n,e,a),i=i.next}while(i!==r)}Rn(t,e,n);break;case 1:if(!Qe&&(li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}Rn(t,e,n);break;case 21:Rn(t,e,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,Rn(t,e,n),Qe=r):Rn(t,e,n);break;default:Rn(t,e,n)}}function nm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qT),e.forEach(function(r){var i=nI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,Nt=!1;break e;case 3:Le=l.stateNode.containerInfo,Nt=!0;break e;case 4:Le=l.stateNode.containerInfo,Nt=!0;break e}l=l.return}if(Le===null)throw Error(b(160));Dy(s,a,i),Le=null,Nt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){_e(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vy(e,t),e=e.sibling}function Vy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kt(e,t),jt(t),r&4){try{Cs(3,t,t.return),Ml(3,t)}catch(N){_e(t,t.return,N)}try{Cs(5,t,t.return)}catch(N){_e(t,t.return,N)}}break;case 1:kt(e,t),jt(t),r&512&&n!==null&&li(n,n.return);break;case 5:if(kt(e,t),jt(t),r&512&&n!==null&&li(n,n.return),t.flags&32){var i=t.stateNode;try{bs(i,"")}catch(N){_e(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&nv(i,s),yc(l,a);var h=yc(l,s);for(a=0;a<u.length;a+=2){var f=u[a],p=u[a+1];f==="style"?av(i,p):f==="dangerouslySetInnerHTML"?sv(i,p):f==="children"?bs(i,p):Rh(i,f,p,h)}switch(l){case"input":fc(i,s);break;case"textarea":rv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?hi(i,!!s.multiple,C,!1):g!==!!s.multiple&&(s.defaultValue!=null?hi(i,!!s.multiple,s.defaultValue,!0):hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[qs]=s}catch(N){_e(t,t.return,N)}}break;case 6:if(kt(e,t),jt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){_e(t,t.return,N)}}break;case 3:if(kt(e,t),jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bs(e.containerInfo)}catch(N){_e(t,t.return,N)}break;case 4:kt(e,t),jt(t);break;case 13:kt(e,t),jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ld=Te())),r&4&&nm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Qe=(h=Qe)||f,kt(e,t),Qe=h):kt(e,t),jt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(g=$,C=g.child,g.tag){case 0:case 11:case 14:case 15:Cs(4,g,g.return);break;case 1:li(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){_e(r,n,N)}}break;case 5:li(g,g.return);break;case 22:if(g.memoizedState!==null){im(p);continue}}C!==null?(C.return=g,$=C):im(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ov("display",a))}catch(N){_e(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(N){_e(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:kt(e,t),jt(t),r&4&&nm(t);break;case 21:break;default:kt(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Oy(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bs(i,""),r.flags&=-33);var s=tm(t);Kc(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=tm(t);Gc(t,l,a);break;default:throw Error(b(161))}}catch(u){_e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KT(t,e,n){$=t,Ly(t)}function Ly(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||sa;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Qe;l=sa;var h=Qe;if(sa=a,(Qe=u)&&!h)for($=i;$!==null;)a=$,u=a.child,a.tag===22&&a.memoizedState!==null?sm(i):u!==null?(u.return=a,$=u):sm(i);for(;s!==null;)$=s,Ly(s),s=s.sibling;$=i,sa=l,Qe=h}rm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):rm(t)}}function rm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qe||Ml(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bp(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Bs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Qe||e.flags&512&&qc(e)}catch(g){_e(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function im(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function sm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ml(4,e)}catch(u){_e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){_e(e,i,u)}}var s=e.return;try{qc(e)}catch(u){_e(e,s,u)}break;case 5:var a=e.return;try{qc(e)}catch(u){_e(e,a,u)}}}catch(u){_e(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var QT=Math.ceil,tl=Sn.ReactCurrentDispatcher,od=Sn.ReactCurrentOwner,St=Sn.ReactCurrentBatchConfig,te=0,De=null,Ae=null,Ue=0,pt=0,ui=lr(0),Re=0,Ys=null,Nr=0,bl=0,ad=0,Ps=null,at=null,ld=0,ki=1/0,an=null,nl=!1,Qc=null,Kn=null,oa=!1,jn=null,rl=0,ks=0,Jc=null,Sa=-1,Aa=0;function rt(){return te&6?Te():Sa!==-1?Sa:Sa=Te()}function Qn(t){return t.mode&1?te&2&&Ue!==0?Ue&-Ue:OT.transition!==null?(Aa===0&&(Aa=_v()),Aa):(t=re,t!==0||(t=window.event,t=t===void 0?16:Cv(t.type)),t):1}function Ft(t,e,n,r){if(50<ks)throw ks=0,Jc=null,Error(b(185));uo(t,n,r),(!(te&2)||t!==De)&&(t===De&&(!(te&2)&&(bl|=n),Re===4&&Vn(t,Ue)),ht(t,r),n===1&&te===0&&!(e.mode&1)&&(ki=Te()+500,Dl&&ur()))}function ht(t,e){var n=t.callbackNode;Ow(t,e);var r=ja(t,t===De?Ue:0);if(r===0)n!==null&&pp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pp(n),e===1)t.tag===0?xT(om.bind(null,t)):Wv(om.bind(null,t)),PT(function(){!(te&6)&&ur()}),n=null;else{switch(Ev(r)){case 1:n=Vh;break;case 4:n=vv;break;case 16:n=Ua;break;case 536870912:n=yv;break;default:n=Ua}n=$y(n,My.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function My(t,e){if(Sa=-1,Aa=0,te&6)throw Error(b(327));var n=t.callbackNode;if(gi()&&t.callbackNode!==n)return null;var r=ja(t,t===De?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=il(t,r);else{e=r;var i=te;te|=2;var s=Fy();(De!==t||Ue!==e)&&(an=null,ki=Te()+500,Tr(t,e));do try{YT();break}catch(l){by(t,l)}while(!0);Gh(),tl.current=s,te=i,Ae!==null?e=0:(De=null,Ue=0,e=Re)}if(e!==0){if(e===2&&(i=Ic(t),i!==0&&(r=i,e=Xc(t,i))),e===1)throw n=Ys,Tr(t,0),Vn(t,r),ht(t,Te()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!JT(i)&&(e=il(t,r),e===2&&(s=Ic(t),s!==0&&(r=s,e=Xc(t,s))),e===1))throw n=Ys,Tr(t,0),Vn(t,r),ht(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:gr(t,at,an);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=ld+500-Te(),10<e)){if(ja(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xc(gr.bind(null,t,at,an),e);break}gr(t,at,an);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-bt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*QT(r/1960))-r,10<r){t.timeoutHandle=xc(gr.bind(null,t,at,an),r);break}gr(t,at,an);break;case 5:gr(t,at,an);break;default:throw Error(b(329))}}}return ht(t,Te()),t.callbackNode===n?My.bind(null,t):null}function Xc(t,e){var n=Ps;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=il(t,e),t!==2&&(e=at,at=n,e!==null&&Yc(e)),t}function Yc(t){at===null?at=t:at.push.apply(at,t)}function JT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~ad,e&=~bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bt(e),r=1<<n;t[n]=-1,e&=~r}}function om(t){if(te&6)throw Error(b(327));gi();var e=ja(t,0);if(!(e&1))return ht(t,Te()),null;var n=il(t,e);if(t.tag!==0&&n===2){var r=Ic(t);r!==0&&(e=r,n=Xc(t,r))}if(n===1)throw n=Ys,Tr(t,0),Vn(t,e),ht(t,Te()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,at,an),ht(t,Te()),null}function ud(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(ki=Te()+500,Dl&&ur())}}function xr(t){jn!==null&&jn.tag===0&&!(te&6)&&gi();var e=te;te|=1;var n=St.transition,r=re;try{if(St.transition=null,re=1,t)return t()}finally{re=r,St.transition=n,te=e,!(te&6)&&ur()}}function cd(){pt=ui.current,ce(ui)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,CT(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Hh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wa();break;case 3:Ci(),ce(ut),ce(Ye),Zh();break;case 5:Yh(r);break;case 4:Ci();break;case 13:ce(me);break;case 19:ce(me);break;case 10:Kh(r.type._context);break;case 22:case 23:cd()}n=n.return}if(De=t,Ae=t=Jn(t.current,null),Ue=pt=e,Re=0,Ys=null,ad=bl=Nr=0,at=Ps=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}_r=null}return t}function by(t,e){do{var n=Ae;try{if(Gh(),wa.current=el,Za){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Za=!1}if(Rr=0,xe=ke=ge=null,As=!1,Qs=0,od.current=null,n===null||n.return===null){Re=1,Ys=e,Ae=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=Ue,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var C=Gp(a);if(C!==null){C.flags&=-257,Kp(C,a,l,s,e),C.mode&1&&qp(s,h,e),e=C,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){qp(s,h,e),hd();break e}u=Error(b(426))}}else if(de&&l.mode&1){var D=Gp(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Kp(D,a,l,s,e),Wh(Pi(u,l));break e}}s=u=Pi(u,l),Re!==4&&(Re=2),Ps===null?Ps=[s]:Ps.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Ey(s,u,e);jp(s,I);break e;case 1:l=u;var y=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Kn===null||!Kn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=wy(s,l,e);jp(s,V);break e}}s=s.return}while(s!==null)}jy(n)}catch(F){e=F,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function Fy(){var t=tl.current;return tl.current=el,t===null?el:t}function hd(){(Re===0||Re===3||Re===2)&&(Re=4),De===null||!(Nr&268435455)&&!(bl&268435455)||Vn(De,Ue)}function il(t,e){var n=te;te|=2;var r=Fy();(De!==t||Ue!==e)&&(an=null,Tr(t,e));do try{XT();break}catch(i){by(t,i)}while(!0);if(Gh(),te=n,tl.current=r,Ae!==null)throw Error(b(261));return De=null,Ue=0,Re}function XT(){for(;Ae!==null;)Uy(Ae)}function YT(){for(;Ae!==null&&!Iw();)Uy(Ae)}function Uy(t){var e=zy(t.alternate,t,pt);t.memoizedProps=t.pendingProps,e===null?jy(t):Ae=e,od.current=null}function jy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WT(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,Ae=null;return}}else if(n=HT(n,e,pt),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Re===0&&(Re=5)}function gr(t,e,n){var r=re,i=St.transition;try{St.transition=null,re=1,ZT(t,e,n,r)}finally{St.transition=i,re=r}return null}function ZT(t,e,n,r){do gi();while(jn!==null);if(te&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Dw(t,s),t===De&&(Ae=De=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oa||(oa=!0,$y(Ua,function(){return gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=St.transition,St.transition=null;var a=re;re=1;var l=te;te|=4,od.current=null,GT(t,n),Vy(n,t),_T(Rc),Ba=!!kc,Rc=kc=null,t.current=n,KT(n),Sw(),te=l,re=a,St.transition=s}else t.current=n;if(oa&&(oa=!1,jn=t,rl=i),s=t.pendingLanes,s===0&&(Kn=null),Pw(n.stateNode),ht(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,t=Qc,Qc=null,t;return rl&1&&t.tag!==0&&gi(),s=t.pendingLanes,s&1?t===Jc?ks++:(ks=0,Jc=t):ks=0,ur(),null}function gi(){if(jn!==null){var t=Ev(rl),e=St.transition,n=re;try{if(St.transition=null,re=16>t?16:t,jn===null)var r=!1;else{if(t=jn,jn=null,rl=0,te&6)throw Error(b(331));var i=te;for(te|=4,$=t.current;$!==null;){var s=$,a=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Cs(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var g=f.sibling,C=f.return;if(xy(f),f===h){$=null;break}if(g!==null){g.return=C,$=g;break}$=C}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}$=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,$=a;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Cs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var y=t.current;for($=y;$!==null;){a=$;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,$=S;else e:for(a=y;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ml(9,l)}}catch(F){_e(l,l.return,F)}if(l===a){$=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,$=V;break e}$=l.return}}if(te=i,ur(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(kl,t)}catch{}r=!0}return r}finally{re=n,St.transition=e}}return!1}function am(t,e,n){e=Pi(n,e),e=Ey(t,e,1),t=Gn(t,e,1),e=rt(),t!==null&&(uo(t,1,e),ht(t,e))}function _e(t,e,n){if(t.tag===3)am(t,t,n);else for(;e!==null;){if(e.tag===3){am(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){t=Pi(n,t),t=wy(e,t,1),e=Gn(e,t,1),t=rt(),e!==null&&(uo(e,1,t),ht(e,t));break}}e=e.return}}function eI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,De===t&&(Ue&n)===n&&(Re===4||Re===3&&(Ue&130023424)===Ue&&500>Te()-ld?Tr(t,0):ad|=n),ht(t,e)}function By(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=rt();t=_n(t,e),t!==null&&(uo(t,e,n),ht(t,n))}function tI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),By(t,n)}function nI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),By(t,n)}var zy;zy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ut.current)lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return lt=!1,$T(t,e,n);lt=!!(t.flags&131072)}else lt=!1,de&&e.flags&1048576&&qv(e,Ka,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ia(t,e),t=e.pendingProps;var i=Ii(e,Ye.current);mi(e,n),i=td(null,e,r,t,i,n);var s=nd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(r)?(s=!0,qa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jh(e),i.updater=Ll,e.stateNode=i,i._reactInternals=e,Fc(e,r,t,n),e=Bc(null,e,r,!0,s,n)):(e.tag=0,de&&s&&$h(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ia(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=iI(r),t=Rt(r,t),i){case 0:e=jc(null,e,r,t,n);break e;case 1:e=Xp(null,e,r,t,n);break e;case 11:e=Qp(null,e,r,t,n);break e;case 14:e=Jp(null,e,r,Rt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),jc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),Xp(t,e,r,i,n);case 3:e:{if(Ay(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Yv(t,e),Xa(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Pi(Error(b(423)),e),e=Yp(t,e,r,n,i);break e}else if(r!==i){i=Pi(Error(b(424)),e),e=Yp(t,e,r,n,i);break e}else for(mt=qn(e.stateNode.containerInfo.firstChild),gt=e,de=!0,xt=null,n=Jv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Si(),r===i){e=En(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return Zv(e),t===null&&Lc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,Nc(r,i)?a=null:s!==null&&Nc(r,s)&&(e.flags|=32),Sy(t,e),nt(t,e,a,n),e.child;case 6:return t===null&&Lc(e),null;case 13:return Cy(t,e,n);case 4:return Xh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ai(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),Qp(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,oe(Qa,r._currentValue),r._currentValue=a,s!==null)if(Ut(s.value,a)){if(s.children===i.children&&!ut.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=fn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Mc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(b(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Mc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,mi(e,n),i=At(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=Rt(r,e.pendingProps),i=Rt(r.type,i),Jp(t,e,r,i,n);case 15:return Ty(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),Ia(t,e),e.tag=1,ct(r)?(t=!0,qa(e)):t=!1,mi(e,n),_y(e,r,i),Fc(e,r,i,n),Bc(null,e,r,!0,t,n);case 19:return Py(t,e,n);case 22:return Iy(t,e,n)}throw Error(b(156,e.tag))};function $y(t,e){return gv(t,e)}function rI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,e,n,r){return new rI(t,e,n,r)}function dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iI(t){if(typeof t=="function")return dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xh)return 11;if(t===Oh)return 14}return 2}function Jn(t,e){var n=t.alternate;return n===null?(n=It(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ca(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")dd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Zr:return Ir(n.children,i,s,e);case Nh:a=8,i|=8;break;case lc:return t=It(12,n,e,i|2),t.elementType=lc,t.lanes=s,t;case uc:return t=It(13,n,e,i),t.elementType=uc,t.lanes=s,t;case cc:return t=It(19,n,e,i),t.elementType=cc,t.lanes=s,t;case Zg:return Fl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xg:a=10;break e;case Yg:a=9;break e;case xh:a=11;break e;case Oh:a=14;break e;case xn:a=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=It(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ir(t,e,n,r){return t=It(7,t,r,e),t.lanes=n,t}function Fl(t,e,n,r){return t=It(22,t,r,e),t.elementType=Zg,t.lanes=n,t.stateNode={isHidden:!1},t}function Ku(t,e,n){return t=It(6,t,null,e),t.lanes=n,t}function Qu(t,e,n){return e=It(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ru(0),this.expirationTimes=Ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ru(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fd(t,e,n,r,i,s,a,l,u){return t=new sI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=It(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jh(s),t}function oI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Hy(t){if(!t)return nr;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(ct(n))return Hv(t,n,e)}return e}function Wy(t,e,n,r,i,s,a,l,u){return t=fd(n,r,!0,t,i,s,a,l,u),t.context=Hy(null),n=t.current,r=rt(),i=Qn(n),s=fn(r,i),s.callback=e??null,Gn(n,s,i),t.current.lanes=i,uo(t,i,r),ht(t,r),t}function Ul(t,e,n,r){var i=e.current,s=rt(),a=Qn(i);return n=Hy(n),e.context===null?e.context=n:e.pendingContext=n,e=fn(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Gn(i,e,a),t!==null&&(Ft(t,i,a,s),Ea(t,i,a)),a}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pd(t,e){lm(t,e),(t=t.alternate)&&lm(t,e)}function aI(){return null}var qy=typeof reportError=="function"?reportError:function(t){console.error(t)};function md(t){this._internalRoot=t}jl.prototype.render=md.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Ul(t,e,null,null)};jl.prototype.unmount=md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){Ul(null,t,null,null)}),e[yn]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Iv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dn.length&&e!==0&&e<Dn[n].priority;n++);Dn.splice(n,0,t),n===0&&Av(t)}};function gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function um(){}function lI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=sl(a);s.call(h)}}var a=Wy(e,r,t,0,null,!1,!1,"",um);return t._reactRootContainer=a,t[yn]=a.current,Hs(t.nodeType===8?t.parentNode:t),xr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=sl(u);l.call(h)}}var u=fd(t,0,!1,null,null,!1,!1,"",um);return t._reactRootContainer=u,t[yn]=u.current,Hs(t.nodeType===8?t.parentNode:t),xr(function(){Ul(e,u,n,r)}),u}function zl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=sl(a);l.call(u)}}Ul(e,a,t,i)}else a=lI(n,e,t,i,r);return sl(a)}wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vs(e.pendingLanes);n!==0&&(Lh(e,n|1),ht(e,Te()),!(te&6)&&(ki=Te()+500,ur()))}break;case 13:xr(function(){var r=_n(t,1);if(r!==null){var i=rt();Ft(r,t,1,i)}}),pd(t,1)}};Mh=function(t){if(t.tag===13){var e=_n(t,134217728);if(e!==null){var n=rt();Ft(e,t,134217728,n)}pd(t,134217728)}};Tv=function(t){if(t.tag===13){var e=Qn(t),n=_n(t,e);if(n!==null){var r=rt();Ft(n,t,e,r)}pd(t,e)}};Iv=function(){return re};Sv=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};Ec=function(t,e,n){switch(e){case"input":if(fc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ol(r);if(!i)throw Error(b(90));tv(r),fc(r,i)}}}break;case"textarea":rv(t,n);break;case"select":e=n.value,e!=null&&hi(t,!!n.multiple,e,!1)}};cv=ud;hv=xr;var uI={usingClientEntryPoint:!1,Events:[ho,ri,Ol,lv,uv,ud]},fs={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cI={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pv(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||aI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!aa.isDisabled&&aa.supportsFiber)try{kl=aa.inject(cI),Wt=aa}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uI;yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gd(e))throw Error(b(200));return oI(t,e,null,n)};yt.createRoot=function(t,e){if(!gd(t))throw Error(b(299));var n=!1,r="",i=qy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fd(t,1,!1,null,null,n,!1,r,i),t[yn]=e.current,Hs(t.nodeType===8?t.parentNode:t),new md(e)};yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=pv(e),t=t===null?null:t.stateNode,t};yt.flushSync=function(t){return xr(t)};yt.hydrate=function(t,e,n){if(!Bl(e))throw Error(b(200));return zl(null,t,e,!0,n)};yt.hydrateRoot=function(t,e,n){if(!gd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=qy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Wy(e,null,t,1,n??null,i,!1,s,a),t[yn]=e.current,Hs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jl(e)};yt.render=function(t,e,n){if(!Bl(e))throw Error(b(200));return zl(null,t,e,!1,n)};yt.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(b(40));return t._reactRootContainer?(xr(function(){zl(null,null,t,!1,function(){t._reactRootContainer=null,t[yn]=null})}),!0):!1};yt.unstable_batchedUpdates=ud;yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bl(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return zl(t,e,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function Gy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gy)}catch(t){console.error(t)}}Gy(),Gg.exports=yt;var hI=Gg.exports,Ky,cm=hI;Ky=cm.createRoot,cm.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zs(){return Zs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zs.apply(this,arguments)}var Bn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Bn||(Bn={}));const hm="popstate";function dI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:a,hash:l}=r.location;return Zc("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ol(i)}return pI(e,n,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Qy(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fI(){return Math.random().toString(36).substr(2,8)}function dm(t,e){return{usr:t.state,key:t.key,idx:e}}function Zc(t,e,n,r){return n===void 0&&(n=null),Zs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ji(e):e,{state:n,key:e&&e.key||r||fI()})}function ol(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ji(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function pI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Bn.Pop,u=null,h=f();h==null&&(h=0,a.replaceState(Zs({},a.state,{idx:h}),""));function f(){return(a.state||{idx:null}).idx}function p(){l=Bn.Pop;let D=f(),I=D==null?null:D-h;h=D,u&&u({action:l,location:N.location,delta:I})}function g(D,I){l=Bn.Push;let y=Zc(N.location,D,I);h=f()+1;let S=dm(y,h),V=N.createHref(y);try{a.pushState(S,"",V)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(V)}s&&u&&u({action:l,location:N.location,delta:1})}function C(D,I){l=Bn.Replace;let y=Zc(N.location,D,I);h=f();let S=dm(y,h),V=N.createHref(y);a.replaceState(S,"",V),s&&u&&u({action:l,location:N.location,delta:0})}function P(D){let I=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof D=="string"?D:ol(D);return y=y.replace(/ $/,"%20"),Pe(I,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,I)}let N={get action(){return l},get location(){return t(i,a)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(hm,p),u=D,()=>{i.removeEventListener(hm,p),u=null}},createHref(D){return e(i,D)},createURL:P,encodeLocation(D){let I=P(D);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:g,replace:C,go(D){return a.go(D)}};return N}var fm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fm||(fm={}));function mI(t,e,n){return n===void 0&&(n="/"),gI(t,e,n)}function gI(t,e,n,r){let i=typeof e=="string"?ji(e):e,s=vd(i.pathname||"/",n);if(s==null)return null;let a=Jy(t);vI(a);let l=null;for(let u=0;l==null&&u<a.length;++u){let h=RI(s);l=CI(a[u],h)}return l}function Jy(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};u.relativePath.startsWith("/")&&(Pe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Xn([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Jy(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:SI(h,s.index),routesMeta:f})};return t.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let u of Xy(s.path))i(s,a,u)}),e}function Xy(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Xy(r.join("/")),l=[];return l.push(...a.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...a),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function vI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:AI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yI=/^:[\w-]+$/,_I=3,EI=2,wI=1,TI=10,II=-2,pm=t=>t==="*";function SI(t,e){let n=t.split("/"),r=n.length;return n.some(pm)&&(r+=II),e&&(r+=EI),n.filter(i=>!pm(i)).reduce((i,s)=>i+(yI.test(s)?_I:s===""?wI:TI),r)}function AI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function CI(t,e,n){let{routesMeta:r}=t,i={},s="/",a=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=PI({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),g=u.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Xn([s,p.pathname]),pathnameBase:DI(Xn([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Xn([s,p.pathnameBase]))}return a}function PI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=kI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,p)=>{let{paramName:g,isOptional:C}=f;if(g==="*"){let N=l[p]||"";a=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const P=l[p];return C&&!P?h[g]=void 0:h[g]=(P||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:a,pattern:t}}function kI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Qy(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function RI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qy(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function vd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function NI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ji(t):t;return{pathname:n?n.startsWith("/")?n:xI(n,e):e,search:VI(r),hash:LI(i)}}function xI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ju(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function OI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Yy(t,e){let n=OI(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ji(t):(i=Zs({},t),Pe(!i.pathname||!i.pathname.includes("?"),Ju("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),Ju("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),Ju("#","search","hash",i)));let s=t===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let p=e.length-1;if(!r&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=NI(i,l),h=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const Xn=t=>t.join("/").replace(/\/\/+/g,"/"),DI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),VI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,LI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function MI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const e_=["post","put","patch","delete"];new Set(e_);const bI=["get",...e_];new Set(bI);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eo(){return eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eo.apply(this,arguments)}const yd=B.createContext(null),FI=B.createContext(null),Br=B.createContext(null),$l=B.createContext(null),zr=B.createContext({outlet:null,matches:[],isDataRoute:!1}),t_=B.createContext(null);function UI(t,e){let{relative:n}=e===void 0?{}:e;po()||Pe(!1);let{basename:r,navigator:i}=B.useContext(Br),{hash:s,pathname:a,search:l}=r_(t,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:Xn([r,a])),i.createHref({pathname:u,search:l,hash:s})}function po(){return B.useContext($l)!=null}function Hl(){return po()||Pe(!1),B.useContext($l).location}function n_(t){B.useContext(Br).static||B.useLayoutEffect(t)}function mo(){let{isDataRoute:t}=B.useContext(zr);return t?YI():jI()}function jI(){po()||Pe(!1);let t=B.useContext(yd),{basename:e,future:n,navigator:r}=B.useContext(Br),{matches:i}=B.useContext(zr),{pathname:s}=Hl(),a=JSON.stringify(Yy(i,n.v7_relativeSplatPath)),l=B.useRef(!1);return n_(()=>{l.current=!0}),B.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=Zy(h,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Xn([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,a,s,t])}function r_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=B.useContext(Br),{matches:i}=B.useContext(zr),{pathname:s}=Hl(),a=JSON.stringify(Yy(i,r.v7_relativeSplatPath));return B.useMemo(()=>Zy(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function BI(t,e){return zI(t,e)}function zI(t,e,n,r){po()||Pe(!1);let{navigator:i}=B.useContext(Br),{matches:s}=B.useContext(zr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let h=Hl(),f;if(e){var p;let D=typeof e=="string"?ji(e):e;u==="/"||(p=D.pathname)!=null&&p.startsWith(u)||Pe(!1),f=D}else f=h;let g=f.pathname||"/",C=g;if(u!=="/"){let D=u.replace(/^\//,"").split("/");C="/"+g.replace(/^\//,"").split("/").slice(D.length).join("/")}let P=mI(t,{pathname:C}),N=GI(P&&P.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:Xn([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:Xn([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return e&&N?B.createElement($l.Provider,{value:{location:eo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Bn.Pop}},N):N}function $I(){let t=XI(),e=MI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),n?B.createElement("pre",{style:i},n):null,null)}const HI=B.createElement($I,null);class WI extends B.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?B.createElement(zr.Provider,{value:this.props.routeContext},B.createElement(t_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qI(t){let{routeContext:e,match:n,children:r}=t,i=B.useContext(yd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),B.createElement(zr.Provider,{value:e},r)}function GI(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Pe(!1),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let p=a[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:g,errors:C}=n,P=p.route.loader&&g[p.route.id]===void 0&&(!C||C[p.route.id]===void 0);if(p.route.lazy||P){u=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,p,g)=>{let C,P=!1,N=null,D=null;n&&(C=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||HI,u&&(h<0&&g===0?(ZI("route-fallback"),P=!0,D=null):h===g&&(P=!0,D=p.route.hydrateFallbackElement||null)));let I=e.concat(a.slice(0,g+1)),y=()=>{let S;return C?S=N:P?S=D:p.route.Component?S=B.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=f,B.createElement(qI,{match:p,routeContext:{outlet:f,matches:I,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?B.createElement(WI,{location:n.location,revalidation:n.revalidation,component:N,error:C,children:y(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):y()},null)}var i_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(i_||{}),s_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(s_||{});function KI(t){let e=B.useContext(yd);return e||Pe(!1),e}function QI(t){let e=B.useContext(FI);return e||Pe(!1),e}function JI(t){let e=B.useContext(zr);return e||Pe(!1),e}function o_(t){let e=JI(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function XI(){var t;let e=B.useContext(t_),n=QI(),r=o_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function YI(){let{router:t}=KI(i_.UseNavigateStable),e=o_(s_.UseNavigateStable),n=B.useRef(!1);return n_(()=>{n.current=!0}),B.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,eo({fromRouteId:e},s)))},[t,e])}const mm={};function ZI(t,e,n){mm[t]||(mm[t]=!0)}function e1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function on(t){Pe(!1)}function t1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Bn.Pop,navigator:s,static:a=!1,future:l}=t;po()&&Pe(!1);let u=e.replace(/^\/*/,"/"),h=B.useMemo(()=>({basename:u,navigator:s,static:a,future:eo({v7_relativeSplatPath:!1},l)}),[u,l,s,a]);typeof r=="string"&&(r=ji(r));let{pathname:f="/",search:p="",hash:g="",state:C=null,key:P="default"}=r,N=B.useMemo(()=>{let D=vd(f,u);return D==null?null:{location:{pathname:D,search:p,hash:g,state:C,key:P},navigationType:i}},[u,f,p,g,C,P,i]);return N==null?null:B.createElement(Br.Provider,{value:h},B.createElement($l.Provider,{children:n,value:N}))}function n1(t){let{children:e,location:n}=t;return BI(eh(e),n)}new Promise(()=>{});function eh(t,e){e===void 0&&(e=[]);let n=[];return B.Children.forEach(t,(r,i)=>{if(!B.isValidElement(r))return;let s=[...e,i];if(r.type===B.Fragment){n.push.apply(n,eh(r.props.children,s));return}r.type!==on&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=eh(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function th(){return th=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},th.apply(this,arguments)}function r1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function i1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function s1(t,e){return t.button===0&&(!e||e==="_self")&&!i1(t)}const o1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],a1="6";try{window.__reactRouterVersion=a1}catch{}const l1="startTransition",gm=ew[l1];function u1(t){let{basename:e,children:n,future:r,window:i}=t,s=B.useRef();s.current==null&&(s.current=dI({window:i,v5Compat:!0}));let a=s.current,[l,u]=B.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},f=B.useCallback(p=>{h&&gm?gm(()=>u(p)):u(p)},[u,h]);return B.useLayoutEffect(()=>a.listen(f),[a,f]),B.useEffect(()=>e1(r),[r]),B.createElement(t1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const c1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",h1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zn=B.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:l,target:u,to:h,preventScrollReset:f,viewTransition:p}=e,g=r1(e,o1),{basename:C}=B.useContext(Br),P,N=!1;if(typeof h=="string"&&h1.test(h)&&(P=h,c1))try{let S=new URL(window.location.href),V=h.startsWith("//")?new URL(S.protocol+h):new URL(h),F=vd(V.pathname,C);V.origin===S.origin&&F!=null?h=F+V.search+V.hash:N=!0}catch{}let D=UI(h,{relative:i}),I=d1(h,{replace:a,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function y(S){r&&r(S),S.defaultPrevented||I(S)}return B.createElement("a",th({},g,{href:P||D,onClick:N||s?r:y,ref:n,target:u}))});var vm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(vm||(vm={}));var ym;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ym||(ym={}));function d1(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:l}=e===void 0?{}:e,u=mo(),h=Hl(),f=r_(t,{relative:a});return B.useCallback(p=>{if(s1(p,n)){p.preventDefault();let g=r!==void 0?r:ol(h)===ol(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:a,viewTransition:l})}},[h,u,f,r,i,n,t,s,a,l])}function f1(){return O.jsxs("div",{children:[O.jsxs("div",{className:"card",children:[O.jsx("h1",{children:"Welcome to 1clikfixx"}),O.jsx("p",{className:"small",children:"Choose an option to continue"}),O.jsxs("div",{style:{marginTop:12},children:[O.jsx(zn,{className:"button",to:"/client",children:"I need a service"}),O.jsx(zn,{className:"button ghost",style:{marginLeft:12},to:"/provider-subscribe",children:"I am a provider"}),O.jsx(zn,{className:"button ghost",style:{marginLeft:12},to:"/client/book",children:"Sign In"})]})]}),O.jsxs("div",{className:"card",children:[O.jsx("h2",{children:"How it works"}),O.jsxs("ul",{children:[O.jsx("li",{children:"Clients post jobs → pick a date and price"}),O.jsx("li",{children:"Providers subscribe, view calendar of jobs, accept work"}),O.jsx("li",{children:"Providers must subscribe before calendar access"})]})]})]})}const p1=[{id:"j1",title:"Fix leaky faucet",price:50},{id:"j2",title:"Replace outlet",price:80},{id:"j3",title:"Patch drywall",price:120}];function m1(){return O.jsx("div",{children:O.jsxs("div",{className:"card",children:[O.jsx("h1",{children:"Clients — Book a handyman"}),O.jsx("p",{className:"small",children:"Select a job from the list then create a profile to continue."}),O.jsx("div",{className:"grid",style:{marginTop:12},children:p1.map(t=>O.jsxs("div",{className:"card",children:[O.jsx("h3",{children:t.title}),O.jsxs("p",{className:"small",children:["Estimated price: $",t.price]}),O.jsx(zn,{to:"/client/book",className:"button",children:"Select"})]},t.id))})]})})}function g1(){const[t,e]=B.useState({name:"",phone:"",email:"",address:"",jobDesc:"",date:""}),n=mo();function r(i){i.preventDefault();const s=JSON.parse(localStorage.getItem("clientJobs")||"[]");s.push({...t,id:Date.now()}),localStorage.setItem("clientJobs",JSON.stringify(s)),alert("Job saved. Providers will see this when they sign in (after subscription)."),n("/")}return O.jsxs("div",{className:"card",children:[O.jsx("h1",{children:"Describe the job"}),O.jsxs("form",{onSubmit:r,children:[O.jsx("div",{className:"form-row",children:O.jsx("input",{className:"input",placeholder:"Full name",value:t.name,onChange:i=>e({...t,name:i.target.value}),required:!0})}),O.jsx("div",{className:"form-row",children:O.jsx("input",{className:"input",placeholder:"Phone",value:t.phone,onChange:i=>e({...t,phone:i.target.value}),required:!0})}),O.jsx("div",{className:"form-row",children:O.jsx("input",{className:"input",placeholder:"Email",value:t.email,onChange:i=>e({...t,email:i.target.value}),required:!0})}),O.jsx("div",{className:"form-row",children:O.jsx("input",{className:"input",placeholder:"Address",value:t.address,onChange:i=>e({...t,address:i.target.value}),required:!0})}),O.jsx("div",{className:"form-row",children:O.jsx("textarea",{rows:"4",className:"input",placeholder:"Job details",value:t.jobDesc,onChange:i=>e({...t,jobDesc:i.target.value}),required:!0})}),O.jsx("div",{className:"form-row",children:O.jsx("input",{type:"date",className:"input",value:t.date,onChange:i=>e({...t,date:i.target.value}),required:!0})}),O.jsx("button",{className:"button",type:"submit",children:"Save & Submit"})]})]})}function v1(){const t=mo(),e="https://square.link/u/LYi1osGx?src=embed";B.useEffect(()=>{localStorage.getItem("subscriptionPaid")==="true"&&t("/provider-dashboard")},[]);function n(r){r.preventDefault();const i=document.getElementById("embedded-checkout-modal-checkout-button").getAttribute("data-url"),s="Square Payment Links",a=window.top?window.top:window,l=a.screenLeft!==void 0?a.screenLeft:a.screenX,u=a.screenTop!==void 0?a.screenTop:a.screenY,h=a.innerWidth||document.documentElement.clientWidth||screen.width,f=a.innerHeight||document.documentElement.clientHeight||screen.height,p=f*.75,g=500,C=h/a.screen.availWidth,P=(h-g)/2/C+l,N=(f-p)/2/C+u,D=window.open(i,s,`scrollbars=yes, width=${g/C}, height=${p/C}, top=${N}, left=${P}`);window.focus&&D.focus()}return B.useEffect(()=>{const r=document.getElementById("embedded-checkout-modal-checkout-button");if(r)return r.addEventListener("click",n),()=>r.removeEventListener("click",n)},[]),O.jsxs("div",{className:"card",children:[O.jsx("h1",{children:"Provider subscription — $20.99"}),O.jsx("p",{className:"small",children:"Subscribe to get access to available jobs and the provider calendar."}),O.jsx("div",{style:{maxWidth:320,marginTop:12},children:O.jsxs("div",{style:{overflow:"auto",display:"flex",flexDirection:"column",alignItems:"center",background:"#fff",borderRadius:10,padding:8},children:[O.jsx("div",{style:{padding:12},children:O.jsx("a",{id:"embedded-checkout-modal-checkout-button",className:"button",target:"_blank","data-url":e,href:e,rel:"noreferrer",children:"Subscribe $20.99"})}),O.jsx("div",{className:"small",children:"After payment you'll be redirected to onboarding."})]})}),O.jsxs("div",{style:{marginTop:16},className:"small",children:[O.jsx("strong",{children:"Important:"})," Square redirect must target: ",O.jsx("code",{children:"https://1clikfixx.netlify.app/provider-onboarding?paid=true"})]})]})}const y1=()=>{};var _m={};/**
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
 */const a_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},l_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,C=h&63;u||(C=64,a||(g=64)),r.push(n[f],n[p],n[g],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new E1;const g=s<<2|l>>4;if(r.push(g),h!==64){const C=l<<4&240|h>>2;if(r.push(C),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class E1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w1=function(t){const e=a_(t);return l_.encodeByteArray(e,!0)},al=function(t){return w1(t).replace(/\./g,"")},u_=function(t){try{return l_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function T1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const I1=()=>T1().__FIREBASE_DEFAULTS__,S1=()=>{if(typeof process>"u"||typeof _m>"u")return;const t=_m.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},A1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&u_(t[1]);return e&&JSON.parse(e)},Wl=()=>{try{return y1()||I1()||S1()||A1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},c_=t=>{var e,n;return(n=(e=Wl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},C1=t=>{const e=c_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},h_=()=>{var t;return(t=Wl())===null||t===void 0?void 0:t.config},d_=t=>{var e;return(e=Wl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class P1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Bi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function f_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function k1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[al(JSON.stringify(n)),al(JSON.stringify(a)),""].join(".")}const Rs={};function R1(){const t={prod:[],emulator:[]};for(const e of Object.keys(Rs))Rs[e]?t.emulator.push(e):t.prod.push(e);return t}function N1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Em=!1;function p_(t,e){if(typeof window>"u"||typeof document>"u"||!Bi(window.location.host)||Rs[t]===e||Rs[t]||Em)return;Rs[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=R1().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,C){g.setAttribute("width","24"),g.setAttribute("id",C),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Em=!0,a()},g}function f(g,C){g.setAttribute("id",C),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=N1(r),C=n("text"),P=document.getElementById(C)||document.createElement("span"),N=n("learnmore"),D=document.getElementById(N)||document.createElement("a"),I=n("preprendIcon"),y=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const S=g.element;l(S),f(D,N);const V=h();u(y,I),S.append(y,P,D,V),document.body.appendChild(S)}s?(P.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function x1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function O1(){var t;const e=(t=Wl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function D1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function V1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function L1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function M1(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b1(){return!O1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function F1(){try{return typeof indexedDB=="object"}catch{return!1}}function U1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const j1="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=j1,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,go.prototype.create)}}class go{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?B1(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new An(i,l,r)}}function B1(t,e){return t.replace(z1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const z1=/\{\$([^}]+)}/g;function $1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Or(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(wm(s)&&wm(a)){if(!Or(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wm(t){return t!==null&&typeof t=="object"}/**
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
 */function vo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function H1(t,e){const n=new W1(t,e);return n.subscribe.bind(n)}class W1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");q1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xu),i.error===void 0&&(i.error=Xu),i.complete===void 0&&(i.complete=Xu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xu(){}/**
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
 */function Qt(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vr="[DEFAULT]";/**
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
 */class G1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new P1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Q1(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:K1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K1(t){return t===vr?void 0:t}function Q1(t){return t.instantiationMode==="EAGER"}/**
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
 */class J1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new G1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const X1={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Y1=Y.INFO,Z1={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},eS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Z1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _d{constructor(e){this.name=e,this._logLevel=Y1,this._logHandler=eS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?X1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const tS=(t,e)=>e.some(n=>t instanceof n);let Tm,Im;function nS(){return Tm||(Tm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rS(){return Im||(Im=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m_=new WeakMap,nh=new WeakMap,g_=new WeakMap,Yu=new WeakMap,Ed=new WeakMap;function iS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Yn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&m_.set(n,t)}).catch(()=>{}),Ed.set(e,t),e}function sS(t){if(nh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});nh.set(t,e)}let rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||g_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oS(t){rh=t(rh)}function aS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zu(this),e,...n);return g_.set(r,e.sort?e.sort():[e]),Yn(r)}:rS().includes(t)?function(...e){return t.apply(Zu(this),e),Yn(m_.get(this))}:function(...e){return Yn(t.apply(Zu(this),e))}}function lS(t){return typeof t=="function"?aS(t):(t instanceof IDBTransaction&&sS(t),tS(t,nS())?new Proxy(t,rh):t)}function Yn(t){if(t instanceof IDBRequest)return iS(t);if(Yu.has(t))return Yu.get(t);const e=lS(t);return e!==t&&(Yu.set(t,e),Ed.set(e,t)),e}const Zu=t=>Ed.get(t);function uS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Yn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Yn(a.result),u.oldVersion,u.newVersion,Yn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const cS=["get","getKey","getAll","getAllKeys","count"],hS=["put","add","delete","clear"],ec=new Map;function Sm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ec.get(e))return ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cS.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return ec.set(e,s),s}oS(t=>({...t,get:(e,n,r)=>Sm(e,n)||t.get(e,n,r),has:(e,n)=>!!Sm(e,n)||t.has(e,n)}));/**
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
 */class dS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ih="@firebase/app",Am="0.13.2";/**
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
 */const wn=new _d("@firebase/app"),pS="@firebase/app-compat",mS="@firebase/analytics-compat",gS="@firebase/analytics",vS="@firebase/app-check-compat",yS="@firebase/app-check",_S="@firebase/auth",ES="@firebase/auth-compat",wS="@firebase/database",TS="@firebase/data-connect",IS="@firebase/database-compat",SS="@firebase/functions",AS="@firebase/functions-compat",CS="@firebase/installations",PS="@firebase/installations-compat",kS="@firebase/messaging",RS="@firebase/messaging-compat",NS="@firebase/performance",xS="@firebase/performance-compat",OS="@firebase/remote-config",DS="@firebase/remote-config-compat",VS="@firebase/storage",LS="@firebase/storage-compat",MS="@firebase/firestore",bS="@firebase/ai",FS="@firebase/firestore-compat",US="firebase",jS="11.10.0";/**
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
 */const sh="[DEFAULT]",BS={[ih]:"fire-core",[pS]:"fire-core-compat",[gS]:"fire-analytics",[mS]:"fire-analytics-compat",[yS]:"fire-app-check",[vS]:"fire-app-check-compat",[_S]:"fire-auth",[ES]:"fire-auth-compat",[wS]:"fire-rtdb",[TS]:"fire-data-connect",[IS]:"fire-rtdb-compat",[SS]:"fire-fn",[AS]:"fire-fn-compat",[CS]:"fire-iid",[PS]:"fire-iid-compat",[kS]:"fire-fcm",[RS]:"fire-fcm-compat",[NS]:"fire-perf",[xS]:"fire-perf-compat",[OS]:"fire-rc",[DS]:"fire-rc-compat",[VS]:"fire-gcs",[LS]:"fire-gcs-compat",[MS]:"fire-fst",[FS]:"fire-fst-compat",[bS]:"fire-vertex","fire-js":"fire-js",[US]:"fire-js-all"};/**
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
 */const ll=new Map,zS=new Map,oh=new Map;function Cm(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(oh.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;oh.set(e,t);for(const n of ll.values())Cm(n,t);for(const n of zS.values())Cm(n,t);return!0}function wd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ht(t){return t==null?!1:t.settings!==void 0}/**
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
 */const $S={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new go("app","Firebase",$S);/**
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
 */class HS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
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
 */const zi=jS;function v_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sh,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(n||(n=h_()),!n)throw Zn.create("no-options");const s=ll.get(i);if(s){if(Or(n,s.options)&&Or(r,s.config))return s;throw Zn.create("duplicate-app",{appName:i})}const a=new J1(i);for(const u of oh.values())a.addComponent(u);const l=new HS(n,r,a);return ll.set(i,l),l}function y_(t=sh){const e=ll.get(t);if(!e&&t===sh&&h_())return v_();if(!e)throw Zn.create("no-app",{appName:t});return e}function er(t,e,n){var r;let i=(r=BS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(l.join(" "));return}Ri(new Dr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const WS="firebase-heartbeat-database",qS=1,to="firebase-heartbeat-store";let tc=null;function __(){return tc||(tc=uS(WS,qS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(to)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),tc}async function GS(t){try{const n=(await __()).transaction(to),r=await n.objectStore(to).get(E_(t));return await n.done,r}catch(e){if(e instanceof An)wn.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function Pm(t,e){try{const r=(await __()).transaction(to,"readwrite");await r.objectStore(to).put(e,E_(t)),await r.done}catch(n){if(n instanceof An)wn.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function E_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KS=1024,QS=30;class JS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=km();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>QS){const a=ZS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=km(),{heartbeatsToSend:r,unsentEntries:i}=XS(this._heartbeatsCache.heartbeats),s=al(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return wn.warn(n),""}}}function km(){return new Date().toISOString().substring(0,10)}function XS(t,e=KS){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Rm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return F1()?U1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rm(t){return al(JSON.stringify({version:2,heartbeats:t})).length}function ZS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function eA(t){Ri(new Dr("platform-logger",e=>new dS(e),"PRIVATE")),Ri(new Dr("heartbeat",e=>new JS(e),"PRIVATE")),er(ih,Am,t),er(ih,Am,"esm2017"),er("fire-js","")}eA("");var tA="firebase",nA="11.10.0";/**
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
 */er(tA,nA,"app");function Td(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function w_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rA=w_,T_=new go("auth","Firebase",w_());/**
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
 */const ul=new _d("@firebase/auth");function iA(t,...e){ul.logLevel<=Y.WARN&&ul.warn(`Auth (${zi}): ${t}`,...e)}function Pa(t,...e){ul.logLevel<=Y.ERROR&&ul.error(`Auth (${zi}): ${t}`,...e)}/**
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
 */function Tn(t,...e){throw Id(t,...e)}function Gt(t,...e){return Id(t,...e)}function I_(t,e,n){const r=Object.assign(Object.assign({},rA()),{[e]:n});return new go("auth","Firebase",r).create(e,{appName:t.name})}function Sr(t){return I_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Id(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return T_.create(t,...e)}function q(t,e,...n){if(!t)throw Id(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pa(e),new Error(e)}function In(t,e){t||hn(e)}/**
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
 */function ah(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sA(){return Nm()==="http:"||Nm()==="https:"}function Nm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function oA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sA()||V1()||"connection"in navigator)?navigator.onLine:!0}function aA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=x1()||L1()}get(){return oA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sd(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class S_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cA=new yo(3e4,6e4);function Ad(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $i(t,e,n,r,i={}){return A_(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=vo(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return D1()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Bi(t.emulatorConfig.host)&&(h.credentials="include"),S_.fetch()(await C_(t,t.config.apiHost,n,l),h)})}async function A_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lA),e);try{const i=new dA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw la(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw la(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw la(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw la(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw I_(t,f,h);Tn(t,f)}}catch(i){if(i instanceof An)throw i;Tn(t,"network-request-failed",{message:String(i)})}}async function hA(t,e,n,r,i={}){const s=await $i(t,e,n,r,i);return"mfaPendingCredential"in s&&Tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function C_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,a=s.config.emulator?Sd(t.config,i):`${t.config.apiScheme}://${i}`;return uA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class dA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),cA.get())})}}function la(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function fA(t,e){return $i(t,"POST","/v1/accounts:delete",e)}async function cl(t,e){return $i(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pA(t,e=!1){const n=Qt(t),r=await n.getIdToken(e),i=Cd(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ns(nc(i.auth_time)),issuedAtTime:Ns(nc(i.iat)),expirationTime:Ns(nc(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nc(t){return Number(t)*1e3}function Cd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pa("JWT malformed, contained fewer than 3 sections"),null;try{const i=u_(n);return i?JSON.parse(i):(Pa("Failed to decode base64 JWT payload"),null)}catch(i){return Pa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xm(t){const e=Cd(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function no(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&mA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await no(t,cl(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?P_(s.providerUserInfo):[],l=yA(t.providerData,a),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new lh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function vA(t){const e=Qt(t);await hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function P_(t){return t.map(e=>{var{providerId:n}=e,r=Td(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _A(t,e){const n=await A_(t,{},async()=>{const r=vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=await C_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Bi(t.emulatorConfig.host)&&(u.credentials="include"),S_.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function EA(t,e){return $i(t,"POST","/v2/accounts:revokeToken",Ad(t,e))}/**
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
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=xm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _A(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new vi;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
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
 */function Nn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await no(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pA(this,e)}reload(){return vA(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await no(this,fA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,C=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(a=n.photoURL)!==null&&a!==void 0?a:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:V,isAnonymous:F,providerData:j,stsTokenManager:E}=n;q(S&&E,e,"internal-error");const v=vi.fromJSON(this.name,E);q(typeof S=="string",e,"internal-error"),Nn(p,e.name),Nn(g,e.name),q(typeof V=="boolean",e,"internal-error"),q(typeof F=="boolean",e,"internal-error"),Nn(C,e.name),Nn(P,e.name),Nn(N,e.name),Nn(D,e.name),Nn(I,e.name),Nn(y,e.name);const _=new Lt({uid:S,auth:e,email:g,emailVerified:V,displayName:p,isAnonymous:F,photoURL:P,phoneNumber:C,tenantId:N,stsTokenManager:v,createdAt:I,lastLoginAt:y});return j&&Array.isArray(j)&&(_.providerData=j.map(w=>Object.assign({},w))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new vi;i.updateFromServerResponse(n);const s=new Lt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?P_(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new vi;l.updateFromIdToken(r);const u=new Lt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new lh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Om=new Map;function dn(t){In(t instanceof Function,"Expected a class definition");let e=Om.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Om.set(t,e),e)}/**
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
 */class k_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}k_.type="NONE";const Dm=k_;/**
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
 */function ka(t,e,n){return`firebase:${t}:${e}:${n}`}class yi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ka(this.userKey,i.apiKey,s),this.fullPersistenceKey=ka("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await cl(this.auth,{idToken:e}).catch(()=>{});return n?Lt._fromGetAccountInfoResponse(this.auth,n,e):null}return Lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yi(dn(Dm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||dn(Dm);const a=ka(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const g=await cl(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Lt._fromGetAccountInfoResponse(e,g,f)}else p=Lt._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new yi(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new yi(s,e,r))}}/**
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
 */function Vm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(O_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(V_(e))return"Blackberry";if(L_(e))return"Webos";if(N_(e))return"Safari";if((e.includes("chrome/")||x_(e))&&!e.includes("edge/"))return"Chrome";if(D_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function R_(t=Ze()){return/firefox\//i.test(t)}function N_(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x_(t=Ze()){return/crios\//i.test(t)}function O_(t=Ze()){return/iemobile/i.test(t)}function D_(t=Ze()){return/android/i.test(t)}function V_(t=Ze()){return/blackberry/i.test(t)}function L_(t=Ze()){return/webos/i.test(t)}function Pd(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wA(t=Ze()){var e;return Pd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TA(){return M1()&&document.documentMode===10}function M_(t=Ze()){return Pd(t)||D_(t)||L_(t)||V_(t)||/windows phone/i.test(t)||O_(t)}/**
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
 */function b_(t,e=[]){let n;switch(t){case"Browser":n=Vm(Ze());break;case"Worker":n=`${Vm(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zi}/${r}`}/**
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
 */class IA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SA(t,e={}){return $i(t,"GET","/v2/passwordPolicy",Ad(t,e))}/**
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
 */const AA=6;class CA{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:AA,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class PA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lm(this),this.idTokenSubscription=new Lm(this),this.beforeStateQueue=new IA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await yi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cl(this,{idToken:e}),r=await Lt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ht(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(Sr(this));const n=e?Qt(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SA(this),n=new CA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new go("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await EA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await yi.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=b_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kd(t){return Qt(t)}class Lm{constructor(e){this.auth=e,this.observer=null,this.addObserver=H1(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Rd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kA(t){Rd=t}function RA(t){return Rd.loadJS(t)}function NA(){return Rd.gapiScript}function xA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function OA(t,e){const n=wd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Or(s,e??{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function DA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VA(t,e,n){const r=kd(t);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=F_(e),{host:a,port:l}=LA(e),u=l===null?"":`:${l}`,h={url:`${s}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(Or(h,r.config.emulator)&&Or(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Bi(a)?(f_(`${s}//${a}${u}`),p_("Auth",!0)):MA()}function F_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LA(t){const e=F_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mm(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Mm(a)}}}function Mm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class U_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}/**
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
 */async function _i(t,e){return hA(t,"POST","/v1/accounts:signInWithIdp",Ad(t,e))}/**
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
 */const bA="http://localhost";class Vr extends U_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Td(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Vr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:bA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vo(n)}return e}}/**
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
 */class j_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _o extends j_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ln extends _o{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
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
 */class Mn extends _o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
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
 */class bn extends _o{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class Fn extends _o{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
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
 */class Ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Lt._fromIdTokenResponse(e,r,i),a=bm(r);return new Ni({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=bm(r);return new Ni({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function bm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class dl extends An{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dl(e,n,r,i)}}function B_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dl._fromErrorAndOperation(t,s,e,r):s})}async function FA(t,e,n=!1){const r=await no(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ni._forOperation(t,"link",r)}/**
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
 */async function UA(t,e,n=!1){const{auth:r}=t;if(Ht(r.app))return Promise.reject(Sr(r));const i="reauthenticate";try{const s=await no(t,B_(r,i,e,t),n);q(s.idToken,r,"internal-error");const a=Cd(s.idToken);q(a,r,"internal-error");const{sub:l}=a;return q(t.uid===l,r,"user-mismatch"),Ni._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),s}}/**
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
 */async function jA(t,e,n=!1){if(Ht(t.app))return Promise.reject(Sr(t));const r="signIn",i=await B_(t,r,e),s=await Ni._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function BA(t,e,n,r){return Qt(t).onIdTokenChanged(e,n,r)}function zA(t,e,n){return Qt(t).beforeAuthStateChanged(e,n)}const fl="__sak";/**
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
 */class z_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fl,"1"),this.storage.removeItem(fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $A=1e3,HA=10;class $_ extends z_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=M_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);TA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,HA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$_.type="LOCAL";const WA=$_;/**
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
 */class H_ extends z_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}H_.type="SESSION";const W_=H_;/**
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
 */function qA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(n.origin,s)),u=await qA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ql.receivers=[];/**
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
 */function Nd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class GA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=Nd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Kt(){return window}function KA(t){Kt().location.href=t}/**
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
 */function q_(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function QA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XA(){return q_()?self:null}/**
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
 */const G_="firebaseLocalStorageDb",YA=1,pl="firebaseLocalStorage",K_="fbase_key";class Eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gl(t,e){return t.transaction([pl],e?"readwrite":"readonly").objectStore(pl)}function ZA(){const t=indexedDB.deleteDatabase(G_);return new Eo(t).toPromise()}function uh(){const t=indexedDB.open(G_,YA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pl,{keyPath:K_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pl)?e(r):(r.close(),await ZA(),e(await uh()))})})}async function Fm(t,e,n){const r=Gl(t,!0).put({[K_]:e,value:n});return new Eo(r).toPromise()}async function eC(t,e){const n=Gl(t,!1).get(e),r=await new Eo(n).toPromise();return r===void 0?null:r.value}function Um(t,e){const n=Gl(t,!0).delete(e);return new Eo(n).toPromise()}const tC=800,nC=3;class Q_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return q_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ql._getInstance(XA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QA(),!this.activeServiceWorker)return;this.sender=new GA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uh();return await Fm(e,fl,"1"),await Um(e,fl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Um(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gl(i,!1).getAll();return new Eo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Q_.type="LOCAL";const rC=Q_;new yo(3e4,6e4);/**
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
 */function iC(t,e){return e?dn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xd extends U_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sC(t){return jA(t.auth,new xd(t),t.bypassAuthState)}function oC(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),UA(n,new xd(t),t.bypassAuthState)}async function aC(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),FA(n,new xd(t),t.bypassAuthState)}/**
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
 */class J_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sC;case"linkViaPopup":case"linkViaRedirect":return aC;case"reauthViaPopup":case"reauthViaRedirect":return oC;default:Tn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lC=new yo(2e3,1e4);class ci extends J_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Nd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lC.get())};e()}}ci.currentPopupAction=null;/**
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
 */const uC="pendingRedirect",Ra=new Map;class cC extends J_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const r=await hC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hC(t,e){const n=pC(e),r=fC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function dC(t,e){Ra.set(t._key(),e)}function fC(t){return dn(t._redirectPersistence)}function pC(t){return ka(uC,t.config.apiKey,t.name)}async function mC(t,e,n=!1){if(Ht(t.app))return Promise.reject(Sr(t));const r=kd(t),i=iC(r,e),a=await new cC(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const gC=10*60*1e3;class vC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!X_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gC&&this.cachedEventUids.clear(),this.cachedEventUids.has(jm(e))}saveEventToCache(e){this.cachedEventUids.add(jm(e)),this.lastProcessedEventTime=Date.now()}}function jm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function X_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return X_(t);default:return!1}}/**
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
 */async function _C(t,e={}){return $i(t,"GET","/v1/projects",e)}/**
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
 */const EC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wC=/^https?/;async function TC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _C(t);for(const n of e)try{if(IC(n))return}catch{}Tn(t,"unauthorized-domain")}function IC(t){const e=ah(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!wC.test(n))return!1;if(EC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const SC=new yo(3e4,6e4);function Bm(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AC(t){return new Promise((e,n)=>{var r,i,s;function a(){Bm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bm(),n(Gt(t,"network-request-failed"))},timeout:SC.get()})}if(!((i=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Kt().gapi)===null||s===void 0)&&s.load)a();else{const l=xA("iframefcb");return Kt()[l]=()=>{gapi.load?a():n(Gt(t,"network-request-failed"))},RA(`${NA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Na=null,e})}let Na=null;function CC(t){return Na=Na||AC(t),Na}/**
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
 */const PC=new yo(5e3,15e3),kC="__/auth/iframe",RC="emulator/auth/iframe",NC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OC(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sd(e,RC):`https://${t.config.authDomain}/${kC}`,r={apiKey:e.apiKey,appName:t.name,v:zi},i=xC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vo(r).slice(1)}`}async function DC(t){const e=await CC(t),n=Kt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:OC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Gt(t,"network-request-failed"),l=Kt().setTimeout(()=>{s(a)},PC.get());function u(){Kt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const VC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LC=500,MC=600,bC="_blank",FC="http://localhost";class zm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UC(t,e,n,r=LC,i=MC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},VC),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Ze().toLowerCase();n&&(l=x_(h)?bC:n),R_(h)&&(e=e||FC,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[C,P])=>`${g}${C}=${P},`,"");if(wA(h)&&l!=="_self")return jC(e||"",l),new zm(null);const p=window.open(e||"",l,f);q(p,t,"popup-blocked");try{p.focus()}catch{}return new zm(p)}function jC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BC="__/auth/handler",zC="emulator/auth/handler",$C=encodeURIComponent("fac");async function $m(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zi,eventId:i};if(e instanceof j_){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",$1(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof _o){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${$C}=${encodeURIComponent(u)}`:"";return`${HC(t)}?${vo(l).slice(1)}${h}`}function HC({config:t}){return t.emulator?Sd(t,zC):`https://${t.authDomain}/${BC}`}/**
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
 */const rc="webStorageSupport";class WC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=W_,this._completeRedirectFn=mC,this._overrideRedirectResult=dC}async _openPopup(e,n,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await $m(e,n,r,ah(),i);return UC(e,a,Nd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await $m(e,n,r,ah(),i);return KA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DC(e),r=new vC(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rc,{type:rc},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rc];a!==void 0&&n(!!a),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return M_()||N_()||Pd()}}const qC=WC;var Hm="@firebase/auth",Wm="1.10.8";/**
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
 */class GC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QC(t){Ri(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:b_(t)},h=new PA(r,i,s,u);return DA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new Dr("auth-internal",e=>{const n=kd(e.getProvider("auth").getImmediate());return(r=>new GC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(Hm,Wm,KC(t)),er(Hm,Wm,"esm2017")}/**
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
 */const JC=5*60,XC=d_("authIdTokenMaxAge")||JC;let qm=null;const YC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XC)return;const i=n==null?void 0:n.token;qm!==i&&(qm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ZC(t=y_()){const e=wd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OA(t,{popupRedirectResolver:qC,persistence:[rC,WA,W_]}),r=d_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=YC(s.toString());zA(n,a,()=>a(n.currentUser)),BA(n,l=>a(l))}}const i=c_("auth");return i&&VA(n,`http://${i}`),n}function eP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",eP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QC("Browser");var Gm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Od;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function _(){}_.prototype=v.prototype,E.D=v.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(w,A,R){for(var T=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)T[Et-2]=arguments[Et];return v.prototype[A].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,_){_||(_=0);var w=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)w[A]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(A=0;16>A;++A)w[A]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=E.g[0],_=E.g[1],A=E.g[2];var R=E.g[3],T=v+(R^_&(A^R))+w[0]+3614090360&4294967295;v=_+(T<<7&4294967295|T>>>25),T=R+(A^v&(_^A))+w[1]+3905402710&4294967295,R=v+(T<<12&4294967295|T>>>20),T=A+(_^R&(v^_))+w[2]+606105819&4294967295,A=R+(T<<17&4294967295|T>>>15),T=_+(v^A&(R^v))+w[3]+3250441966&4294967295,_=A+(T<<22&4294967295|T>>>10),T=v+(R^_&(A^R))+w[4]+4118548399&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(A^v&(_^A))+w[5]+1200080426&4294967295,R=v+(T<<12&4294967295|T>>>20),T=A+(_^R&(v^_))+w[6]+2821735955&4294967295,A=R+(T<<17&4294967295|T>>>15),T=_+(v^A&(R^v))+w[7]+4249261313&4294967295,_=A+(T<<22&4294967295|T>>>10),T=v+(R^_&(A^R))+w[8]+1770035416&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(A^v&(_^A))+w[9]+2336552879&4294967295,R=v+(T<<12&4294967295|T>>>20),T=A+(_^R&(v^_))+w[10]+4294925233&4294967295,A=R+(T<<17&4294967295|T>>>15),T=_+(v^A&(R^v))+w[11]+2304563134&4294967295,_=A+(T<<22&4294967295|T>>>10),T=v+(R^_&(A^R))+w[12]+1804603682&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(A^v&(_^A))+w[13]+4254626195&4294967295,R=v+(T<<12&4294967295|T>>>20),T=A+(_^R&(v^_))+w[14]+2792965006&4294967295,A=R+(T<<17&4294967295|T>>>15),T=_+(v^A&(R^v))+w[15]+1236535329&4294967295,_=A+(T<<22&4294967295|T>>>10),T=v+(A^R&(_^A))+w[1]+4129170786&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^A&(v^_))+w[6]+3225465664&4294967295,R=v+(T<<9&4294967295|T>>>23),T=A+(v^_&(R^v))+w[11]+643717713&4294967295,A=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(A^R))+w[0]+3921069994&4294967295,_=A+(T<<20&4294967295|T>>>12),T=v+(A^R&(_^A))+w[5]+3593408605&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^A&(v^_))+w[10]+38016083&4294967295,R=v+(T<<9&4294967295|T>>>23),T=A+(v^_&(R^v))+w[15]+3634488961&4294967295,A=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(A^R))+w[4]+3889429448&4294967295,_=A+(T<<20&4294967295|T>>>12),T=v+(A^R&(_^A))+w[9]+568446438&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^A&(v^_))+w[14]+3275163606&4294967295,R=v+(T<<9&4294967295|T>>>23),T=A+(v^_&(R^v))+w[3]+4107603335&4294967295,A=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(A^R))+w[8]+1163531501&4294967295,_=A+(T<<20&4294967295|T>>>12),T=v+(A^R&(_^A))+w[13]+2850285829&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^A&(v^_))+w[2]+4243563512&4294967295,R=v+(T<<9&4294967295|T>>>23),T=A+(v^_&(R^v))+w[7]+1735328473&4294967295,A=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(A^R))+w[12]+2368359562&4294967295,_=A+(T<<20&4294967295|T>>>12),T=v+(_^A^R)+w[5]+4294588738&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^A)+w[8]+2272392833&4294967295,R=v+(T<<11&4294967295|T>>>21),T=A+(R^v^_)+w[11]+1839030562&4294967295,A=R+(T<<16&4294967295|T>>>16),T=_+(A^R^v)+w[14]+4259657740&4294967295,_=A+(T<<23&4294967295|T>>>9),T=v+(_^A^R)+w[1]+2763975236&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^A)+w[4]+1272893353&4294967295,R=v+(T<<11&4294967295|T>>>21),T=A+(R^v^_)+w[7]+4139469664&4294967295,A=R+(T<<16&4294967295|T>>>16),T=_+(A^R^v)+w[10]+3200236656&4294967295,_=A+(T<<23&4294967295|T>>>9),T=v+(_^A^R)+w[13]+681279174&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^A)+w[0]+3936430074&4294967295,R=v+(T<<11&4294967295|T>>>21),T=A+(R^v^_)+w[3]+3572445317&4294967295,A=R+(T<<16&4294967295|T>>>16),T=_+(A^R^v)+w[6]+76029189&4294967295,_=A+(T<<23&4294967295|T>>>9),T=v+(_^A^R)+w[9]+3654602809&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^A)+w[12]+3873151461&4294967295,R=v+(T<<11&4294967295|T>>>21),T=A+(R^v^_)+w[15]+530742520&4294967295,A=R+(T<<16&4294967295|T>>>16),T=_+(A^R^v)+w[2]+3299628645&4294967295,_=A+(T<<23&4294967295|T>>>9),T=v+(A^(_|~R))+w[0]+4096336452&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~A))+w[7]+1126891415&4294967295,R=v+(T<<10&4294967295|T>>>22),T=A+(v^(R|~_))+w[14]+2878612391&4294967295,A=R+(T<<15&4294967295|T>>>17),T=_+(R^(A|~v))+w[5]+4237533241&4294967295,_=A+(T<<21&4294967295|T>>>11),T=v+(A^(_|~R))+w[12]+1700485571&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~A))+w[3]+2399980690&4294967295,R=v+(T<<10&4294967295|T>>>22),T=A+(v^(R|~_))+w[10]+4293915773&4294967295,A=R+(T<<15&4294967295|T>>>17),T=_+(R^(A|~v))+w[1]+2240044497&4294967295,_=A+(T<<21&4294967295|T>>>11),T=v+(A^(_|~R))+w[8]+1873313359&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~A))+w[15]+4264355552&4294967295,R=v+(T<<10&4294967295|T>>>22),T=A+(v^(R|~_))+w[6]+2734768916&4294967295,A=R+(T<<15&4294967295|T>>>17),T=_+(R^(A|~v))+w[13]+1309151649&4294967295,_=A+(T<<21&4294967295|T>>>11),T=v+(A^(_|~R))+w[4]+4149444226&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~A))+w[11]+3174756917&4294967295,R=v+(T<<10&4294967295|T>>>22),T=A+(v^(R|~_))+w[2]+718787259&4294967295,A=R+(T<<15&4294967295|T>>>17),T=_+(R^(A|~v))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var _=v-this.blockSize,w=this.B,A=this.h,R=0;R<v;){if(A==0)for(;R<=_;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<v;)if(w[A++]=E.charCodeAt(R++),A==this.blockSize){i(this,w),A=0;break}}else for(;R<v;)if(w[A++]=E[R++],A==this.blockSize){i(this,w),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var _=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=_&255,_/=256;for(this.u(E),E=Array(16),v=_=0;4>v;++v)for(var w=0;32>w;w+=8)E[_++]=this.g[v]>>>w&255;return E};function s(E,v){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=v(E)}function a(E,v){this.h=v;for(var _=[],w=!0,A=E.length-1;0<=A;A--){var R=E[A]|0;w&&R==v||(_[A]=R,w=!1)}this.g=_}var l={};function u(E){return-128<=E&&128>E?s(E,function(v){return new a([v|0],0>v?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return D(h(-E));for(var v=[],_=1,w=0;E>=_;w++)v[w]=E/_|0,_*=4294967296;return new a(v,0)}function f(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return D(f(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(v,8)),w=p,A=0;A<E.length;A+=8){var R=Math.min(8,E.length-A),T=parseInt(E.substring(A,A+R),v);8>R?(R=h(Math.pow(v,R)),w=w.j(R).add(h(T))):(w=w.j(_),w=w.add(h(T)))}return w}var p=u(0),g=u(1),C=u(16777216);t=a.prototype,t.m=function(){if(N(this))return-D(this).m();for(var E=0,v=1,_=0;_<this.g.length;_++){var w=this.i(_);E+=(0<=w?w:4294967296+w)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+D(this).toString(E);for(var v=h(Math.pow(E,6)),_=this,w="";;){var A=V(_,v).g;_=I(_,A.j(v));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=A,P(_))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=I(this,E),N(E)?-1:P(E)?0:1};function D(E){for(var v=E.g.length,_=[],w=0;w<v;w++)_[w]=~E.g[w];return new a(_,~E.h).add(g)}t.abs=function(){return N(this)?D(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],w=0,A=0;A<=v;A++){var R=w+(this.i(A)&65535)+(E.i(A)&65535),T=(R>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);w=T>>>16,R&=65535,T&=65535,_[A]=T<<16|R}return new a(_,_[_.length-1]&-2147483648?-1:0)};function I(E,v){return E.add(D(v))}t.j=function(E){if(P(this)||P(E))return p;if(N(this))return N(E)?D(this).j(D(E)):D(D(this).j(E));if(N(E))return D(this.j(D(E)));if(0>this.l(C)&&0>E.l(C))return h(this.m()*E.m());for(var v=this.g.length+E.g.length,_=[],w=0;w<2*v;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<E.g.length;A++){var R=this.i(w)>>>16,T=this.i(w)&65535,Et=E.i(A)>>>16,cr=E.i(A)&65535;_[2*w+2*A]+=T*cr,y(_,2*w+2*A),_[2*w+2*A+1]+=R*cr,y(_,2*w+2*A+1),_[2*w+2*A+1]+=T*Et,y(_,2*w+2*A+1),_[2*w+2*A+2]+=R*Et,y(_,2*w+2*A+2)}for(w=0;w<v;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=v;w<2*v;w++)_[w]=0;return new a(_,0)};function y(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function S(E,v){this.g=E,this.h=v}function V(E,v){if(P(v))throw Error("division by zero");if(P(E))return new S(p,p);if(N(E))return v=V(D(E),v),new S(D(v.g),D(v.h));if(N(v))return v=V(E,D(v)),new S(D(v.g),v.h);if(30<E.g.length){if(N(E)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var _=g,w=v;0>=w.l(E);)_=F(_),w=F(w);var A=j(_,1),R=j(w,1);for(w=j(w,2),_=j(_,2);!P(w);){var T=R.add(w);0>=T.l(E)&&(A=A.add(_),R=T),w=j(w,1),_=j(_,1)}return v=I(E,A.j(v)),new S(A,v)}for(A=p;0<=E.l(v);){for(_=Math.max(1,Math.floor(E.m()/v.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=h(_),T=R.j(v);N(T)||0<T.l(E);)_-=w,R=h(_),T=R.j(v);P(R)&&(R=g),A=A.add(R),E=I(E,T)}return new S(A,E)}t.A=function(E){return V(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],w=0;w<v;w++)_[w]=this.i(w)&E.i(w);return new a(_,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],w=0;w<v;w++)_[w]=this.i(w)|E.i(w);return new a(_,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],w=0;w<v;w++)_[w]=this.i(w)^E.i(w);return new a(_,this.h^E.h)};function F(E){for(var v=E.g.length+1,_=[],w=0;w<v;w++)_[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(_,E.h)}function j(E,v){var _=v>>5;v%=32;for(var w=E.g.length-_,A=[],R=0;R<w;R++)A[R]=0<v?E.i(R+_)>>>v|E.i(R+_+1)<<32-v:E.i(R+_);return new a(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Od=a}).apply(typeof Gm<"u"?Gm:typeof self<"u"?self:typeof window<"u"?window:{});var ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Y_,_s,Z_,xa,ch,e0,t0,n0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ua=="object"&&ua];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var k=o[m];if(!(k in d))break e;d=d[k]}o=o[o.length-1],m=d[o],c=c(m),c!=m&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,m=!1,k={next:function(){if(!m&&d<o.length){var x=d++;return{value:c(x,o[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function p(o,c,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,m),o.apply(c,k)}}return function(){return o.apply(c,arguments)}}function g(o,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function C(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function P(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,k,x){for(var U=Array(arguments.length-2),se=2;se<arguments.length;se++)U[se-2]=arguments[se];return c.prototype[k].apply(m,U)}}function N(o){const c=o.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=o[m];return d}return[]}function D(o,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const k=o.length||0,x=m.length||0;o.length=k+x;for(let U=0;U<x;U++)o[k+U]=m[U]}else o.push(m)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function y(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function V(o){return V[" "](o),o}V[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function j(o,c,d){for(const m in o)c.call(d,o[m],m,o)}function E(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function v(o){const c={};for(const d in o)c[d]=o[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,c){let d,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(d in m)o[d]=m[d];for(let x=0;x<_.length;x++)d=_[x],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function A(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function R(o){l.setTimeout(()=>{throw o},0)}function T(){var o=G;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Et{constructor(){this.h=this.g=null}add(c,d){const m=cr.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var cr=new I(()=>new qi,o=>o.reset());class qi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Yt,z=!1,G=new Et,K=()=>{const o=l.Promise.resolve(void 0);Yt=()=>{o.then(pe)}};var pe=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){R(d)}var c=cr;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}z=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Zt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function en(o,c){if(we.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(F){e:{try{V(c.nodeName);var k=!0;break e}catch{}k=!1}k||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:tn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&en.aa.h.call(this)}}P(en,we);var tn={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),oE=0;function aE(o,c,d,m,k){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=k,this.key=++oE,this.da=this.fa=!1}function Po(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ko(o){this.src=o,this.g={},this.h=0}ko.prototype.add=function(o,c,d,m,k){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var U=nu(o,c,m,k);return-1<U?(c=o[U],d||(c.fa=!1)):(c=new aE(c,this.src,x,!!m,k),c.fa=d,o.push(c)),c};function tu(o,c){var d=c.type;if(d in o.g){var m=o.g[d],k=Array.prototype.indexOf.call(m,c,void 0),x;(x=0<=k)&&Array.prototype.splice.call(m,k,1),x&&(Po(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function nu(o,c,d,m){for(var k=0;k<o.length;++k){var x=o[k];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==m)return k}return-1}var ru="closure_lm_"+(1e6*Math.random()|0),iu={};function nf(o,c,d,m,k){if(Array.isArray(c)){for(var x=0;x<c.length;x++)nf(o,c[x],d,m,k);return null}return d=of(d),o&&o[nn]?o.K(c,d,h(m)?!!m.capture:!1,k):lE(o,c,d,!1,m,k)}function lE(o,c,d,m,k,x){if(!c)throw Error("Invalid event type");var U=h(k)?!!k.capture:!!k,se=ou(o);if(se||(o[ru]=se=new ko(o)),d=se.add(c,d,m,U,x),d.proxy)return d;if(m=uE(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Zt||(k=U),k===void 0&&(k=!1),o.addEventListener(c.toString(),m,k);else if(o.attachEvent)o.attachEvent(sf(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function uE(){function o(d){return c.call(o.src,o.listener,d)}const c=cE;return o}function rf(o,c,d,m,k){if(Array.isArray(c))for(var x=0;x<c.length;x++)rf(o,c[x],d,m,k);else m=h(m)?!!m.capture:!!m,d=of(d),o&&o[nn]?(o=o.i,c=String(c).toString(),c in o.g&&(x=o.g[c],d=nu(x,d,m,k),-1<d&&(Po(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete o.g[c],o.h--)))):o&&(o=ou(o))&&(c=o.g[c.toString()],o=-1,c&&(o=nu(c,d,m,k)),(d=-1<o?c[o]:null)&&su(d))}function su(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[nn])tu(c.i,o);else{var d=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(d,m,o.capture):c.detachEvent?c.detachEvent(sf(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=ou(c))?(tu(d,o),d.h==0&&(d.src=null,c[ru]=null)):Po(o)}}}function sf(o){return o in iu?iu[o]:iu[o]="on"+o}function cE(o,c){if(o.da)o=!0;else{c=new en(c,this);var d=o.listener,m=o.ha||o.src;o.fa&&su(o),o=d.call(m,c)}return o}function ou(o){return o=o[ru],o instanceof ko?o:null}var au="__closure_events_fn_"+(1e9*Math.random()>>>0);function of(o){return typeof o=="function"?o:(o[au]||(o[au]=function(c){return o.handleEvent(c)}),o[au])}function ze(){ie.call(this),this.i=new ko(this),this.M=this,this.F=null}P(ze,ie),ze.prototype[nn]=!0,ze.prototype.removeEventListener=function(o,c,d,m){rf(this,o,c,d,m)};function et(o,c){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new we(c,o);else if(c instanceof we)c.target=c.target||o;else{var k=c;c=new we(m,o),w(c,k)}if(k=!0,d)for(var x=d.length-1;0<=x;x--){var U=c.g=d[x];k=Ro(U,m,!0,c)&&k}if(U=c.g=o,k=Ro(U,m,!0,c)&&k,k=Ro(U,m,!1,c)&&k,d)for(x=0;x<d.length;x++)U=c.g=d[x],k=Ro(U,m,!1,c)&&k}ze.prototype.N=function(){if(ze.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],m=0;m<d.length;m++)Po(d[m]);delete o.g[c],o.h--}}this.F=null},ze.prototype.K=function(o,c,d,m){return this.i.add(String(o),c,!1,d,m)},ze.prototype.L=function(o,c,d,m){return this.i.add(String(o),c,!0,d,m)};function Ro(o,c,d,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var k=!0,x=0;x<c.length;++x){var U=c[x];if(U&&!U.da&&U.capture==d){var se=U.listener,Ve=U.ha||U.src;U.fa&&tu(o.i,U),k=se.call(Ve,m)!==!1&&k}}return k&&!m.defaultPrevented}function af(o,c,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function lf(o){o.g=af(()=>{o.g=null,o.i&&(o.i=!1,lf(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class hE extends ie{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:lf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gi(o){ie.call(this),this.h=o,this.g={}}P(Gi,ie);var uf=[];function cf(o){j(o.g,function(c,d){this.g.hasOwnProperty(d)&&su(c)},o),o.g={}}Gi.prototype.N=function(){Gi.aa.N.call(this),cf(this)},Gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lu=l.JSON.stringify,dE=l.JSON.parse,fE=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function uu(){}uu.prototype.h=null;function hf(o){return o.h||(o.h=o.i())}function df(){}var Ki={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cu(){we.call(this,"d")}P(cu,we);function hu(){we.call(this,"c")}P(hu,we);var hr={},ff=null;function No(){return ff=ff||new ze}hr.La="serverreachability";function pf(o){we.call(this,hr.La,o)}P(pf,we);function Qi(o){const c=No();et(c,new pf(c))}hr.STAT_EVENT="statevent";function mf(o,c){we.call(this,hr.STAT_EVENT,o),this.stat=c}P(mf,we);function tt(o){const c=No();et(c,new mf(c,o))}hr.Ma="timingevent";function gf(o,c){we.call(this,hr.Ma,o),this.size=c}P(gf,we);function Ji(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Xi(){this.g=!0}Xi.prototype.xa=function(){this.g=!1};function pE(o,c,d,m,k,x){o.info(function(){if(o.g)if(x)for(var U="",se=x.split("&"),Ve=0;Ve<se.length;Ve++){var ne=se[Ve].split("=");if(1<ne.length){var $e=ne[0];ne=ne[1];var He=$e.split("_");U=2<=He.length&&He[1]=="type"?U+($e+"="+ne+"&"):U+($e+"=redacted&")}}else U=null;else U=x;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+c+`
`+d+`
`+U})}function mE(o,c,d,m,k,x,U){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+c+`
`+d+`
`+x+" "+U})}function Wr(o,c,d,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+vE(o,d)+(m?" "+m:"")})}function gE(o,c){o.info(function(){return"TIMEOUT: "+c})}Xi.prototype.info=function(){};function vE(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var k=m[1];if(Array.isArray(k)&&!(1>k.length)){var x=k[0];if(x!="noop"&&x!="stop"&&x!="close")for(var U=1;U<k.length;U++)k[U]=""}}}}return lu(d)}catch{return c}}var xo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},du;function Oo(){}P(Oo,uu),Oo.prototype.g=function(){return new XMLHttpRequest},Oo.prototype.i=function(){return{}},du=new Oo;function Cn(o,c,d,m){this.j=o,this.i=c,this.l=d,this.R=m||1,this.U=new Gi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yf}function yf(){this.i=null,this.g="",this.h=!1}var _f={},fu={};function pu(o,c,d){o.L=1,o.v=Mo(rn(c)),o.m=d,o.P=!0,Ef(o,null)}function Ef(o,c){o.F=Date.now(),Do(o),o.A=rn(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Vf(d.i,"t",m),o.C=0,d=o.j.J,o.h=new yf,o.g=Yf(o.j,d?c:null,!o.m),0<o.O&&(o.M=new hE(g(o.Y,o,o.g),o.O)),c=o.U,d=o.g,m=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(uf[0]=k.toString()),k=uf);for(var x=0;x<k.length;x++){var U=nf(d,k[x],m||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Qi(),pE(o.i,o.u,o.A,o.l,o.R,o.m)}Cn.prototype.ca=function(o){o=o.target;const c=this.M;c&&sn(o)==3?c.j():this.Y(o)},Cn.prototype.Y=function(o){try{if(o==this.g)e:{const He=sn(this.g);var c=this.g.Ba();const Kr=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||Bf(this.g)))){this.J||He!=4||c==7||(c==8||0>=Kr?Qi(3):Qi(2)),mu(this);var d=this.g.Z();this.X=d;t:if(wf(this)){var m=Bf(this.g);o="";var k=m.length,x=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dr(this),Yi(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<k;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(x&&c==k-1)});m.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,mE(this.i,this.u,this.A,this.l,this.R,He,d),this.o){if(this.T&&!this.K){t:{if(this.g){var se,Ve=this.g;if((se=Ve.g?Ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(se)){var ne=se;break t}}ne=null}if(d=ne)Wr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gu(this,d);else{this.o=!1,this.s=3,tt(12),dr(this),Yi(this);break e}}if(this.P){d=!0;let Pt;for(;!this.J&&this.C<U.length;)if(Pt=yE(this,U),Pt==fu){He==4&&(this.s=4,tt(14),d=!1),Wr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==_f){this.s=4,tt(15),Wr(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else Wr(this.i,this.l,Pt,null),gu(this,Pt);if(wf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||U.length!=0||this.h.h||(this.s=1,tt(16),d=!1),this.o=this.o&&d,!d)Wr(this.i,this.l,U,"[Invalid Chunked Response]"),dr(this),Yi(this);else if(0<U.length&&!this.W){this.W=!0;var $e=this.j;$e.g==this&&$e.ba&&!$e.M&&($e.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Tu($e),$e.M=!0,tt(11))}}else Wr(this.i,this.l,U,null),gu(this,U);He==4&&dr(this),this.o&&!this.J&&(He==4?Kf(this.j,this):(this.o=!1,Do(this)))}else LE(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),dr(this),Yi(this)}}}catch{}finally{}};function wf(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function yE(o,c){var d=o.C,m=c.indexOf(`
`,d);return m==-1?fu:(d=Number(c.substring(d,m)),isNaN(d)?_f:(m+=1,m+d>c.length?fu:(c=c.slice(m,m+d),o.C=m+d,c)))}Cn.prototype.cancel=function(){this.J=!0,dr(this)};function Do(o){o.S=Date.now()+o.I,Tf(o,o.I)}function Tf(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ji(g(o.ba,o),c)}function mu(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Cn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(gE(this.i,this.A),this.L!=2&&(Qi(),tt(17)),dr(this),this.s=2,Yi(this)):Tf(this,this.S-o)};function Yi(o){o.j.G==0||o.J||Kf(o.j,o)}function dr(o){mu(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,cf(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function gu(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||vu(d.h,o))){if(!o.K&&vu(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)zo(d),jo(d);else break e;wu(d),tt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ji(g(d.Za,d),6e3));if(1>=Af(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else pr(d,11)}else if((o.K||d.g==o)&&zo(d),!y(c))for(k=d.Da.g.parse(c),c=0;c<k.length;c++){let ne=k[c];if(d.T=ne[0],ne=ne[1],d.G==2)if(ne[0]=="c"){d.K=ne[1],d.ia=ne[2];const $e=ne[3];$e!=null&&(d.la=$e,d.j.info("VER="+d.la));const He=ne[4];He!=null&&(d.Aa=He,d.j.info("SVER="+d.Aa));const Kr=ne[5];Kr!=null&&typeof Kr=="number"&&0<Kr&&(m=1.5*Kr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Pt=o.g;if(Pt){const Ho=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ho){var x=m.h;x.g||Ho.indexOf("spdy")==-1&&Ho.indexOf("quic")==-1&&Ho.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(yu(x,x.h),x.h=null))}if(m.D){const Iu=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Iu&&(m.ya=Iu,le(m.I,m.D,Iu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var U=o;if(m.qa=Xf(m,m.J?m.ia:null,m.W),U.K){Cf(m.h,U);var se=U,Ve=m.L;Ve&&(se.I=Ve),se.B&&(mu(se),Do(se)),m.g=U}else qf(m);0<d.i.length&&Bo(d)}else ne[0]!="stop"&&ne[0]!="close"||pr(d,7);else d.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?pr(d,7):Eu(d):ne[0]!="noop"&&d.l&&d.l.ta(ne),d.v=0)}}Qi(4)}catch{}}var _E=class{constructor(o,c){this.g=o,this.map=c}};function If(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sf(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Af(o){return o.h?1:o.g?o.g.size:0}function vu(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function yu(o,c){o.g?o.g.add(c):o.h=c}function Cf(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}If.prototype.cancel=function(){if(this.i=Pf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Pf(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return N(o.i)}function EE(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,m=0;m<d;m++)c.push(o[m]);return c}c=[],d=0;for(m in o)c[d++]=o[m];return c}function wE(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const m in o)c[d++]=m;return c}}}function kf(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=wE(o),m=EE(o),k=m.length,x=0;x<k;x++)c.call(void 0,m[x],d&&d[x],o)}var Rf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TE(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),k=null;if(0<=m){var x=o[d].substring(0,m);k=o[d].substring(m+1)}else x=o[d];c(x,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function fr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof fr){this.h=o.h,Vo(this,o.j),this.o=o.o,this.g=o.g,Lo(this,o.s),this.l=o.l;var c=o.i,d=new ts;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Nf(this,d),this.m=o.m}else o&&(c=String(o).match(Rf))?(this.h=!1,Vo(this,c[1]||"",!0),this.o=Zi(c[2]||""),this.g=Zi(c[3]||"",!0),Lo(this,c[4]),this.l=Zi(c[5]||"",!0),Nf(this,c[6]||"",!0),this.m=Zi(c[7]||"")):(this.h=!1,this.i=new ts(null,this.h))}fr.prototype.toString=function(){var o=[],c=this.j;c&&o.push(es(c,xf,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(es(c,xf,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(es(d,d.charAt(0)=="/"?AE:SE,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",es(d,PE)),o.join("")};function rn(o){return new fr(o)}function Vo(o,c,d){o.j=d?Zi(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Lo(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Nf(o,c,d){c instanceof ts?(o.i=c,kE(o.i,o.h)):(d||(c=es(c,CE)),o.i=new ts(c,o.h))}function le(o,c,d){o.i.set(c,d)}function Mo(o){return le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Zi(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function es(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,IE),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function IE(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var xf=/[#\/\?@]/g,SE=/[#\?:]/g,AE=/[#\?]/g,CE=/[#\?@]/g,PE=/#/g;function ts(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Pn(o){o.g||(o.g=new Map,o.h=0,o.i&&TE(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ts.prototype,t.add=function(o,c){Pn(this),this.i=null,o=qr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Of(o,c){Pn(o),c=qr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Df(o,c){return Pn(o),c=qr(o,c),o.g.has(c)}t.forEach=function(o,c){Pn(this),this.g.forEach(function(d,m){d.forEach(function(k){o.call(c,k,m,this)},this)},this)},t.na=function(){Pn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const k=o[m];for(let x=0;x<k.length;x++)d.push(c[m])}return d},t.V=function(o){Pn(this);let c=[];if(typeof o=="string")Df(this,o)&&(c=c.concat(this.g.get(qr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},t.set=function(o,c){return Pn(this),this.i=null,o=qr(this,o),Df(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Vf(o,c,d){Of(o,c),0<d.length&&(o.i=null,o.g.set(qr(o,c),N(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const x=encodeURIComponent(String(m)),U=this.V(m);for(m=0;m<U.length;m++){var k=x;U[m]!==""&&(k+="="+encodeURIComponent(String(U[m]))),o.push(k)}}return this.i=o.join("&")};function qr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function kE(o,c){c&&!o.j&&(Pn(o),o.i=null,o.g.forEach(function(d,m){var k=m.toLowerCase();m!=k&&(Of(this,m),Vf(this,k,d))},o)),o.j=c}function RE(o,c){const d=new Xi;if(l.Image){const m=new Image;m.onload=C(kn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=C(kn,d,"TestLoadImage: error",!1,c,m),m.onabort=C(kn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=C(kn,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function NE(o,c){const d=new Xi,m=new AbortController,k=setTimeout(()=>{m.abort(),kn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(x=>{clearTimeout(k),x.ok?kn(d,"TestPingServer: ok",!0,c):kn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(k),kn(d,"TestPingServer: error",!1,c)})}function kn(o,c,d,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(d)}catch{}}function xE(){this.g=new fE}function OE(o,c,d){const m=d||"";try{kf(o,function(k,x){let U=k;h(k)&&(U=lu(k)),c.push(m+x+"="+encodeURIComponent(U))})}catch(k){throw c.push(m+"type="+encodeURIComponent("_badmap")),k}}function bo(o){this.l=o.Ub||null,this.j=o.eb||!1}P(bo,uu),bo.prototype.g=function(){return new Fo(this.l,this.j)},bo.prototype.i=function(o){return function(){return o}}({});function Fo(o,c){ze.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Fo,ze),t=Fo.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,rs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ns(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,rs(this)),this.g&&(this.readyState=3,rs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lf(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lf(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ns(this):rs(this),this.readyState==3&&Lf(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ns(this))},t.Qa=function(o){this.g&&(this.response=o,ns(this))},t.ga=function(){this.g&&ns(this)};function ns(o){o.readyState=4,o.l=null,o.j=null,o.v=null,rs(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function rs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Mf(o){let c="";return j(o,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function _u(o,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Mf(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):le(o,c,d))}function ye(o){ze.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ye,ze);var DE=/^https?$/i,VE=["POST","PUT"];t=ye.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():du.g(),this.v=this.o?hf(this.o):hf(du),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(x){bf(this,x);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)d.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())d.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),k=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(VE,c,void 0))||m||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,U]of d)this.g.setRequestHeader(x,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jf(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){bf(this,x)}};function bf(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Ff(o),Uo(o)}function Ff(o){o.A||(o.A=!0,et(o,"complete"),et(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,et(this,"complete"),et(this,"abort"),Uo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Uo(this,!0)),ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Uf(this):this.bb())},t.bb=function(){Uf(this)};function Uf(o){if(o.h&&typeof a<"u"&&(!o.v[1]||sn(o)!=4||o.Z()!=2)){if(o.u&&sn(o)==4)af(o.Ea,0,o);else if(et(o,"readystatechange"),sn(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=U===0){var k=String(o.D).match(Rf)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),m=!DE.test(k?k.toLowerCase():"")}d=m}if(d)et(o,"complete"),et(o,"success");else{o.m=6;try{var x=2<sn(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",Ff(o)}}finally{Uo(o)}}}}function Uo(o,c){if(o.g){jf(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||et(o,"ready");try{d.onreadystatechange=m}catch{}}}function jf(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function sn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),dE(c)}};function Bf(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function LE(o){const c={};o=(o.g&&2<=sn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(y(o[m]))continue;var d=A(o[m]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[k]||[];c[k]=x,x.push(d)}E(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function is(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function zf(o){this.Aa=0,this.i=[],this.j=new Xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=is("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=is("baseRetryDelayMs",5e3,o),this.cb=is("retryDelaySeedMs",1e4,o),this.Wa=is("forwardChannelMaxRetries",2,o),this.wa=is("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new If(o&&o.concurrentRequestLimit),this.Da=new xE,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zf.prototype,t.la=8,t.G=1,t.connect=function(o,c,d,m){tt(0),this.W=o,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Xf(this,null,this.W),Bo(this)};function Eu(o){if($f(o),o.G==3){var c=o.U++,d=rn(o.I);if(le(d,"SID",o.K),le(d,"RID",c),le(d,"TYPE","terminate"),ss(o,d),c=new Cn(o,o.j,c),c.L=2,c.v=Mo(rn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Yf(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Do(c)}Jf(o)}function jo(o){o.g&&(Tu(o),o.g.cancel(),o.g=null)}function $f(o){jo(o),o.u&&(l.clearTimeout(o.u),o.u=null),zo(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Bo(o){if(!Sf(o.h)&&!o.s){o.s=!0;var c=o.Ga;Yt||K(),z||(Yt(),z=!0),G.add(c,o),o.B=0}}function ME(o,c){return Af(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ji(g(o.Ga,o,c),Qf(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new Cn(this,this.j,o);let x=this.o;if(this.S&&(x?(x=v(x),w(x,this.S)):x=this.S),this.m!==null||this.O||(k.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Wf(this,k,c),d=rn(this.I),le(d,"RID",o),le(d,"CVER",22),this.D&&le(d,"X-HTTP-Session-Id",this.D),ss(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(Mf(x)))+"&"+c:this.m&&_u(d,this.m,x)),yu(this.h,k),this.Ua&&le(d,"TYPE","init"),this.P?(le(d,"$req",c),le(d,"SID","null"),k.T=!0,pu(k,d,null)):pu(k,d,c),this.G=2}}else this.G==3&&(o?Hf(this,o):this.i.length==0||Sf(this.h)||Hf(this))};function Hf(o,c){var d;c?d=c.l:d=o.U++;const m=rn(o.I);le(m,"SID",o.K),le(m,"RID",d),le(m,"AID",o.T),ss(o,m),o.m&&o.o&&_u(m,o.m,o.o),d=new Cn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Wf(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),yu(o.h,d),pu(d,m,c)}function ss(o,c){o.H&&j(o.H,function(d,m){le(c,m,d)}),o.l&&kf({},function(d,m){le(c,m,d)})}function Wf(o,c,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var k=o.i;let x=-1;for(;;){const U=["count="+d];x==-1?0<d?(x=k[0].g,U.push("ofs="+x)):x=0:U.push("ofs="+x);let se=!0;for(let Ve=0;Ve<d;Ve++){let ne=k[Ve].g;const $e=k[Ve].map;if(ne-=x,0>ne)x=Math.max(0,k[Ve].g-100),se=!1;else try{OE($e,U,"req"+ne+"_")}catch{m&&m($e)}}if(se){m=U.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,m}function qf(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Yt||K(),z||(Yt(),z=!0),G.add(c,o),o.v=0}}function wu(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ji(g(o.Fa,o),Qf(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Gf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ji(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),jo(this),Gf(this))};function Tu(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Gf(o){o.g=new Cn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=rn(o.qa);le(c,"RID","rpc"),le(c,"SID",o.K),le(c,"AID",o.T),le(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&le(c,"TO",o.ja),le(c,"TYPE","xmlhttp"),ss(o,c),o.m&&o.o&&_u(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Mo(rn(c)),d.m=null,d.P=!0,Ef(d,o)}t.Za=function(){this.C!=null&&(this.C=null,jo(this),wu(this),tt(19))};function zo(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Kf(o,c){var d=null;if(o.g==c){zo(o),Tu(o),o.g=null;var m=2}else if(vu(o.h,c))d=c.D,Cf(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var k=o.B;m=No(),et(m,new gf(m,d)),Bo(o)}else qf(o);else if(k=c.s,k==3||k==0&&0<c.X||!(m==1&&ME(o,c)||m==2&&wu(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),k){case 1:pr(o,5);break;case 4:pr(o,10);break;case 3:pr(o,6);break;default:pr(o,2)}}}function Qf(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function pr(o,c){if(o.j.info("Error code "+c),c==2){var d=g(o.fb,o),m=o.Xa;const k=!m;m=new fr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Vo(m,"https"),Mo(m),k?RE(m.toString(),d):NE(m.toString(),d)}else tt(2);o.G=0,o.l&&o.l.sa(c),Jf(o),$f(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Jf(o){if(o.G=0,o.ka=[],o.l){const c=Pf(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Xf(o,c,d){var m=d instanceof fr?rn(d):new fr(d);if(m.g!="")c&&(m.g=c+"."+m.g),Lo(m,m.s);else{var k=l.location;m=k.protocol,c=c?c+"."+k.hostname:k.hostname,k=+k.port;var x=new fr(null);m&&Vo(x,m),c&&(x.g=c),k&&Lo(x,k),d&&(x.l=d),m=x}return d=o.D,c=o.ya,d&&c&&le(m,d,c),le(m,"VER",o.la),ss(o,m),m}function Yf(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ye(new bo({eb:d})):new ye(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zf(){}t=Zf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $o(){}$o.prototype.g=function(o,c){return new ft(o,c)};function ft(o,c){ze.call(this),this.g=new zf(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!y(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Gr(this)}P(ft,ze),ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){Eu(this.g)},ft.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=lu(o),o=d);c.i.push(new _E(c.Ya++,o)),c.G==3&&Bo(c)},ft.prototype.N=function(){this.g.l=null,delete this.j,Eu(this.g),delete this.g,ft.aa.N.call(this)};function ep(o){cu.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(ep,cu);function tp(){hu.call(this),this.status=1}P(tp,hu);function Gr(o){this.g=o}P(Gr,Zf),Gr.prototype.ua=function(){et(this.g,"a")},Gr.prototype.ta=function(o){et(this.g,new ep(o))},Gr.prototype.sa=function(o){et(this.g,new tp)},Gr.prototype.ra=function(){et(this.g,"b")},$o.prototype.createWebChannel=$o.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,n0=function(){return new $o},t0=function(){return No()},e0=hr,ch={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xo.NO_ERROR=0,xo.TIMEOUT=8,xo.HTTP_ERROR=6,xa=xo,vf.COMPLETE="complete",Z_=vf,df.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",ze.prototype.listen=ze.prototype.K,_s=df,ye.prototype.listenOnce=ye.prototype.L,ye.prototype.getLastError=ye.prototype.Ka,ye.prototype.getLastErrorCode=ye.prototype.Ba,ye.prototype.getStatus=ye.prototype.Z,ye.prototype.getResponseJson=ye.prototype.Oa,ye.prototype.getResponseText=ye.prototype.oa,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Ha,Y_=ye}).apply(typeof ua<"u"?ua:typeof self<"u"?self:typeof window<"u"?window:{});const Km="@firebase/firestore",Qm="4.8.0";/**
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
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
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
 */let Hi="11.10.0";/**
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
 */const Lr=new _d("@firebase/firestore");function Jr(){return Lr.logLevel}function H(t,...e){if(Lr.logLevel<=Y.DEBUG){const n=e.map(Dd);Lr.debug(`Firestore (${Hi}): ${t}`,...n)}}function Mr(t,...e){if(Lr.logLevel<=Y.ERROR){const n=e.map(Dd);Lr.error(`Firestore (${Hi}): ${t}`,...n)}}function xi(t,...e){if(Lr.logLevel<=Y.WARN){const n=e.map(Dd);Lr.warn(`Firestore (${Hi}): ${t}`,...n)}}function Dd(t){if(typeof t=="string")return t;try{/**
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
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,r0(t,r,n)}function r0(t,e,n){let r=`FIRESTORE (${Hi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Mr(r),new Error(r)}function Ee(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||r0(e,i,r)}function ae(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class i0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class nP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rP{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ar,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ar)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string",31837,{l:r}),new i0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string",2055,{h:e}),new Ke(e)}}class iP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class sP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new iP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ht(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ee(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Jm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Jm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function aP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function lP(){return new TextEncoder}/**
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
 */class Vd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=aP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function hh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return ee(r,i);{const s=lP(),a=uP(s.encode(Xm(t,n)),s.encode(Xm(e,n)));return a!==0?a:ee(r,i)}}n+=r>65535?2:1}return ee(t.length,e.length)}function Xm(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function uP(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ee(t[n],e[n]);return ee(t.length,e.length)}function Oi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Ym="__name__";class zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=zt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ee(e.length,n.length)}static compareSegments(e,n){const r=zt.isNumericId(e),i=zt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?zt.extractNumericId(e).compare(zt.extractNumericId(n)):hh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Od.fromString(e.substring(4,e.length-2))}}class Ie extends zt{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const cP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends zt{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return cP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ym}static keyField(){return new Fe([Ym])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ie.fromString(e))}static fromName(e){return new Q(Ie.fromString(e).popFirst(5))}static empty(){return new Q(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ie(e.slice()))}}/**
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
 */function hP(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dP(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zm(t){if(!Q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function s0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ld(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function dh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ld(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ce(t,e){const n={typeString:t};return e&&(n.value=e),n}function wo(t,e){if(!s0(t))throw new W(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const eg=-62135596800,tg=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*tg);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<eg)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tg}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wo(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-eg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Ce("string",fe._jsonSchemaVersion),seconds:Ce("number"),nanoseconds:Ce("number")};/**
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
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new fe(0,0))}static max(){return new he(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ro=-1;function fP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new rr(i,Q.empty(),e)}function pP(t){return new rr(t.readTime,t.key,ro)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(he.min(),Q.empty(),ro)}static max(){return new rr(he.max(),Q.empty(),ro)}}function mP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const gP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Md(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==gP)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function yP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function To(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}bd.ue=-1;/**
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
 */const Fd=-1;function Ud(t){return t==null}function ml(t){return t===0&&1/t==-1/0}function _P(t){return typeof t=="number"&&Number.isInteger(t)&&!ml(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const o0="";function EP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ng(e)),e=wP(t.get(n),e);return ng(e)}function wP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case o0:n+="";break;default:n+=s}}return n}function ng(t){return t+o0+""}/**
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
 */function rg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function a0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class dt{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ca(this.root,e,this.comparator,!0)}}class ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Me.RED,this.left=i??Me.EMPTY,this.right=s??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Me(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ig(this.data.getIterator())}getIteratorFrom(e){return new ig(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class ig{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new je(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Oi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class TP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new TP("Invalid base64 string: "+s):s}}(e);return new Jt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const IP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(Ee(!!t,39018),typeof t=="string"){let e=0;const n=IP.exec(t);if(Ee(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Di(t){return typeof t=="string"?Jt.fromBase64String(t):Jt.fromUint8Array(t)}/**
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
 */const l0="server_timestamp",u0="__type__",c0="__previous_value__",h0="__local_write_time__";function jd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[u0])===null||n===void 0?void 0:n.stringValue)===l0}function Bd(t){const e=t.mapValue.fields[c0];return jd(e)?Bd(e):e}function gl(t){const e=br(t.mapValue.fields[h0].timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class SP{constructor(e,n,r,i,s,a,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const vl="(default)";class yl{constructor(e,n){this.projectId=e,this.database=n||vl}static empty(){return new yl("","")}get isDefaultDatabase(){return this.database===vl}isEqual(e){return e instanceof yl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const d0="__type__",AP="__max__",ha={mapValue:{}},f0="__vector__",fh="value";function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jd(t)?4:PP(t)?9007199254740991:CP(t)?10:11:J(28295,{value:t})}function Xt(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gl(t).isEqual(gl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=br(i.timestampValue),l=br(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Di(i.bytesValue).isEqual(Di(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=be(i.doubleValue),l=be(s.doubleValue);return a===l?ml(a)===ml(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Oi(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(rg(a)!==rg(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Xt(a[u],l[u])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function io(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Vi(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=be(s.integerValue||s.doubleValue),u=be(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return sg(t.timestampValue,e.timestampValue);case 4:return sg(gl(t),gl(e));case 5:return hh(t.stringValue,e.stringValue);case 6:return function(s,a){const l=Di(s),u=Di(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ee(l[h],u[h]);if(f!==0)return f}return ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ee(be(s.latitude),be(a.latitude));return l!==0?l:ee(be(s.longitude),be(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return og(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const p=s.fields||{},g=a.fields||{},C=(l=p[fh])===null||l===void 0?void 0:l.arrayValue,P=(u=g[fh])===null||u===void 0?void 0:u.arrayValue,N=ee(((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:og(C,P)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===ha.mapValue&&a===ha.mapValue)return 0;if(s===ha.mapValue)return 1;if(a===ha.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=hh(u[p],f[p]);if(g!==0)return g;const C=Vi(l[u[p]],h[f[p]]);if(C!==0)return C}return ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J(23264,{le:n})}}function sg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=br(t),r=br(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function og(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Vi(n[i],r[i]);if(s)return s}return ee(n.length,r.length)}function Li(t){return ph(t)}function ph(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Di(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ph(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${ph(n.fields[a])}`;return i+"}"}(t.mapValue):J(61005,{value:t})}function Oa(t){switch(Fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bd(t);return e?16+Oa(e):16;case 5:return 2*t.stringValue.length;case 6:return Di(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Oa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Wi(r.fields,(s,a)=>{i+=s.length+Oa(a)}),i}(t.mapValue);default:throw J(13486,{value:t})}}function mh(t){return!!t&&"integerValue"in t}function zd(t){return!!t&&"arrayValue"in t}function Da(t){return!!t&&"mapValue"in t}function CP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[d0])===null||n===void 0?void 0:n.stringValue)===f0}function xs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===AP}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Da(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xs(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=xs(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Da(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Da(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(xs(this.value))}}function p0(t){const e=[];return Wi(t.fields,(n,r)=>{const i=new Fe([n]);if(Da(r)){const s=p0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Mt(e)}/**
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
 */class Ot{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ot(e,0,he.min(),he.min(),he.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ot(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new Ot(e,2,n,he.min(),he.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,he.min(),he.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _l{constructor(e,n){this.position=e,this.inclusive=n}}function ag(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),n.key):r=Vi(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function lg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class El{constructor(e,n="asc"){this.field=e,this.dir=n}}function kP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class m0{}class Oe extends m0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NP(e,n,r):n==="array-contains"?new DP(e,r):n==="in"?new VP(e,r):n==="not-in"?new LP(e,r):n==="array-contains-any"?new MP(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xP(e,r):new OP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Vi(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(Vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ir extends m0{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new ir(e,n)}matches(e){return g0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function g0(t){return t.op==="and"}function v0(t){return RP(t)&&g0(t)}function RP(t){for(const e of t.filters)if(e instanceof ir)return!1;return!0}function gh(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+Li(t.value);if(v0(t))return t.filters.map(e=>gh(e)).join(",");{const e=t.filters.map(n=>gh(n)).join(",");return`${t.op}(${e})`}}function y0(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&Xt(r.value,i.value)}(t,e):t instanceof ir?function(r,i){return i instanceof ir&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&y0(a,i.filters[l]),!0):!1}(t,e):void J(19439)}function _0(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${Li(n.value)}`}(t):t instanceof ir?function(n){return n.op.toString()+" {"+n.getFilters().map(_0).join(" ,")+"}"}(t):"Filter"}class NP extends Oe{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class xP extends Oe{constructor(e,n){super(e,"in",n),this.keys=E0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OP extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=E0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function E0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class DP extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zd(n)&&io(n.arrayValue,this.value)}}class VP extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&io(this.value.arrayValue,n)}}class LP extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!io(this.value.arrayValue,n)}}class MP extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>io(this.value.arrayValue,r))}}/**
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
 */class bP{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Pe=null}}function ug(t,e=null,n=[],r=[],i=null,s=null,a=null){return new bP(t,e,n,r,i,s,a)}function $d(t){const e=ae(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ud(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Li(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Li(r)).join(",")),e.Pe=n}return e.Pe}function Hd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!y0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lg(t.startAt,e.startAt)&&lg(t.endAt,e.endAt)}/**
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
 */class Kl{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function FP(t,e,n,r,i,s,a,l){return new Kl(t,e,n,r,i,s,a,l)}function UP(t){return new Kl(t)}function cg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jP(t){return t.collectionGroup!==null}function Os(t){const e=ae(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new je(Fe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new El(s,r))}),n.has(Fe.keyField().canonicalString())||e.Te.push(new El(Fe.keyField(),r))}return e.Te}function Cr(t){const e=ae(t);return e.Ie||(e.Ie=BP(e,Os(t))),e.Ie}function BP(t,e){if(t.limitType==="F")return ug(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new El(i.field,s)});const n=t.endAt?new _l(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _l(t.startAt.position,t.startAt.inclusive):null;return ug(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vh(t,e,n){return new Kl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function w0(t,e){return Hd(Cr(t),Cr(e))&&t.limitType===e.limitType}function T0(t){return`${$d(Cr(t))}|lt:${t.limitType}`}function ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>_0(i)).join(", ")}]`),Ud(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Li(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Li(i)).join(",")),`Target(${r})`}(Cr(t))}; limitType=${t.limitType})`}function Wd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Os(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=ag(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,Os(r),i)||r.endAt&&!function(a,l,u){const h=ag(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,Os(r),i))}(t,e)}function zP(t){return(e,n)=>{let r=!1;for(const i of Os(t)){const s=$P(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $P(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Vi(u,h):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
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
 */class $r{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return a0(this.inner)}size(){return this.innerSize}}/**
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
 */const HP=new dt(Q.comparator);function wl(){return HP}const I0=new dt(Q.comparator);function da(...t){let e=I0;for(const n of t)e=e.insert(n.key,n);return e}function S0(t){let e=I0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wr(){return Ds()}function A0(){return Ds()}function Ds(){return new $r(t=>t.toString(),(t,e)=>t.isEqual(e))}const WP=new dt(Q.comparator),qP=new je(Q.comparator);function Je(...t){let e=qP;for(const n of t)e=e.add(n);return e}const GP=new je(ee);function KP(){return GP}/**
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
 */function qd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ml(e)?"-0":e}}function C0(t){return{integerValue:""+t}}function QP(t,e){return _P(e)?C0(e):qd(t,e)}/**
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
 */class Ql{constructor(){this._=void 0}}function JP(t,e,n){return t instanceof Tl?function(i,s){const a={fields:{[u0]:{stringValue:l0},[h0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&jd(s)&&(s=Bd(s)),s&&(a.fields[c0]=s),{mapValue:a}}(n,e):t instanceof so?k0(t,e):t instanceof oo?R0(t,e):function(i,s){const a=P0(i,s),l=hg(a)+hg(i.Ee);return mh(a)&&mh(i.Ee)?C0(l):qd(i.serializer,l)}(t,e)}function XP(t,e,n){return t instanceof so?k0(t,e):t instanceof oo?R0(t,e):n}function P0(t,e){return t instanceof Il?function(r){return mh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Tl extends Ql{}class so extends Ql{constructor(e){super(),this.elements=e}}function k0(t,e){const n=N0(e);for(const r of t.elements)n.some(i=>Xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class oo extends Ql{constructor(e){super(),this.elements=e}}function R0(t,e){let n=N0(e);for(const r of t.elements)n=n.filter(i=>!Xt(i,r));return{arrayValue:{values:n}}}class Il extends Ql{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function hg(t){return be(t.integerValue||t.doubleValue)}function N0(t){return zd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function YP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof so&&i instanceof so||r instanceof oo&&i instanceof oo?Oi(r.elements,i.elements,Xt):r instanceof Il&&i instanceof Il?Xt(r.Ee,i.Ee):r instanceof Tl&&i instanceof Tl}(t.transform,e.transform)}class ZP{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Va(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jl{}function x0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new D0(t.key,pn.none()):new Io(t.key,t.data,pn.none());{const n=t.data,r=Dt.empty();let i=new je(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Hr(t.key,r,new Mt(i.toArray()),pn.none())}}function ek(t,e,n){t instanceof Io?function(i,s,a){const l=i.value.clone(),u=fg(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Hr?function(i,s,a){if(!Va(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=fg(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(O0(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Vs(t,e,n,r){return t instanceof Io?function(s,a,l,u){if(!Va(s.precondition,a))return l;const h=s.value.clone(),f=pg(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hr?function(s,a,l,u){if(!Va(s.precondition,a))return l;const h=pg(s.fieldTransforms,u,a),f=a.data;return f.setAll(O0(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,a,l){return Va(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function tk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=P0(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function dg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Oi(r,i,(s,a)=>YP(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Io extends Jl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hr extends Jl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function O0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fg(t,e,n){const r=new Map;Ee(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,XP(a,l,n[i]))}return r}function pg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,JP(s,a,e))}return r}class D0 extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nk extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ek(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=A0();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=x0(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Je())}isEqual(e){return this.batchId===e.batchId&&Oi(this.mutations,e.mutations,(n,r)=>dg(n,r))&&Oi(this.baseMutations,e.baseMutations,(n,r)=>dg(n,r))}}class Gd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ee(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return WP}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Gd(e,n,r,i)}}/**
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
 */class ik{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Se,Z;function sk(t){switch(t){case M.OK:return J(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function ok(t){if(t===void 0)return Mr("GRPC error has no .code"),M.UNKNOWN;switch(t){case Se.OK:return M.OK;case Se.CANCELLED:return M.CANCELLED;case Se.UNKNOWN:return M.UNKNOWN;case Se.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Se.INTERNAL:return M.INTERNAL;case Se.UNAVAILABLE:return M.UNAVAILABLE;case Se.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Se.NOT_FOUND:return M.NOT_FOUND;case Se.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Se.ABORTED:return M.ABORTED;case Se.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Se.DATA_LOSS:return M.DATA_LOSS;default:return J(39323,{code:t})}}(Z=Se||(Se={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Od([4294967295,4294967295],0);class ak{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uk(t,e){return yh(t,e.toTimestamp())}function Ei(t){return Ee(!!t,49232),he.fromTimestamp(function(n){const r=br(n);return new fe(r.seconds,r.nanos)}(t))}function V0(t,e){return _h(t,e).canonicalString()}function _h(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ck(t){const e=Ie.fromString(t);return Ee(yk(e),10190,{key:e.toString()}),e}function Eh(t,e){return V0(t.databaseId,e.path)}function hk(t){const e=ck(t);return e.length===4?Ie.emptyPath():fk(e)}function dk(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fk(t){return Ee(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function mg(t,e,n){return{name:Eh(t,e),fields:n.value.mapValue.fields}}function pk(t,e){let n;if(e instanceof Io)n={update:mg(t,e.key,e.value)};else if(e instanceof D0)n={delete:Eh(t,e.key)};else if(e instanceof Hr)n={update:mg(t,e.key,e.data),updateMask:vk(e.fieldMask)};else{if(!(e instanceof nk))return J(16599,{Rt:e.type});n={verify:Eh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Tl)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof so)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oo)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Il)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw J(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:uk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J(27497)}(t,e.precondition)),n}function mk(t,e){return t&&t.length>0?(Ee(e!==void 0,14353),t.map(n=>function(i,s){let a=i.updateTime?Ei(i.updateTime):Ei(s);return a.isEqual(he.min())&&(a=Ei(s)),new ZP(a,i.transformResults||[])}(n,e))):[]}function gk(t){let e=hk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=L0(p);return g instanceof ir&&v0(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(P){return new El(Xr(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Ud(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,C=p.values||[];return new _l(C,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,C=p.values||[];return new _l(C,g)}(n.endAt)),FP(e,i,a,s,l,"F",u,h)}function L0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xr(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xr(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xr(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xr(n.unaryFilter.field);return Oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Xr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ir.create(n.compositeFilter.filters.map(r=>L0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function Xr(t){return Fe.fromServerFormat(t.fieldPath)}function vk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _k{constructor(e){this.gt=e}}function Ek(t){const e=gk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vh(e,e.limit,"L"):e}/**
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
 */class wk{constructor(){this.Dn=new Tk}addToCollectionParentIndex(e,n){return this.Dn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(rr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Tk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(Ie.comparator)).toArray()}}/**
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
 */const gg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},M0=41943040;class ot{static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(M0,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);/**
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
 */class Mi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Mi(0)}static ur(){return new Mi(-1)}}/**
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
 */const vg="LruGarbageCollector",Ik=1048576;function yg([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class Sk{constructor(e){this.Tr=e,this.buffer=new je(yg),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();yg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Ak{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){H(vg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){To(n)?H(vg,"Ignoring IndexedDB error during garbage collection: ",n):await Md(n)}await this.Rr(3e5)})}}class Ck{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(bd.ue);const r=new Sk(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(gg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gg):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Jr()<=Y.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function Pk(t,e){return new Ck(t,e)}/**
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
 */class kk{constructor(){this.changes=new $r(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Rk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Nk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Vs(r.mutation,i,Mt.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Je()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Je()){const i=wr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=da();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Je()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=wl();const a=Ds(),l=function(){return Ds()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Hr)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Vs(f.mutation,h,f.mutation.getFieldMask(),fe.now())):a.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new Rk(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ds();let i=new dt((a,l)=>a-l),s=Je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Mt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||Je()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=A0();f.forEach(g=>{if(!s.has(g)){const C=x0(n.get(g),r.get(g));C!==null&&p.set(g,C),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return Q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(wr());let l=ro,u=s;return a.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Je())).next(f=>({batchId:l,changes:S0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=da();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=da();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(p,g){return new Kl(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ot.newInvalidDocument(f)))});let l=da();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Vs(f.mutation,h,Mt.empty(),fe.now()),Wd(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class xk{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return L.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ei(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:Ek(i.bundledQuery),readTime:Ei(i.readTime)}}(n)),L.resolve()}}/**
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
 */class Ok{constructor(){this.overlays=new dt(Q.comparator),this.kr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=wr(),s=n.length+1,a=new Q(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new dt((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=wr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=wr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ik(n,r));let s=this.kr.get(n);s===void 0&&(s=Je(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Dk{constructor(){this.sessionToken=Jt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class Kd{constructor(){this.qr=new je(Ne.Qr),this.$r=new je(Ne.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ne(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ne(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new Q(new Ie([])),r=new Ne(n,e),i=new Ne(n,e+1),s=[];return this.$r.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new Q(new Ie([])),r=new Ne(n,e),i=new Ne(n,e+1);let s=Je();return this.$r.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Ne(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return Q.comparator(e.key,n.key)||ee(e.Hr,n.Hr)}static Ur(e,n){return ee(e.Hr,n.Hr)||Q.comparator(e.key,n.key)}}/**
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
 */class Vk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new je(Ne.Qr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new rk(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new Ne(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Fd:this.er-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ne(n,0),i=new Ne(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],a=>{const l=this.Zr(a.Hr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(ee);return n.forEach(i=>{const s=new Ne(i,0),a=new Ne(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],l=>{r=r.add(l.Hr)})}),L.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const a=new Ne(new Q(s),0);let l=new je(ee);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},a),L.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return L.forEach(n.mutations,i=>{const s=new Ne(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Ne(n,0),i=this.Yr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Lk{constructor(e){this.ni=e,this.docs=function(){return new dt(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let r=wl();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ot.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=wl();const a=n.path,l=new Q(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||mP(pP(f),r)<=0||(i.has(f.key)||Wd(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J(9500)}ri(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Mk(this)}getSize(e){return L.resolve(this.size)}}class Mk extends kk{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class bk{constructor(e){this.persistence=e,this.ii=new $r(n=>$d(n),Hd),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.si=0,this.oi=new Kd,this.targetCount=0,this._i=Mi.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),L.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Mi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.hr(n),L.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.oi.containsKey(n))}}/**
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
 */class b0{constructor(e,n){this.ai={},this.overlays={},this.ui=new bd(0),this.ci=!1,this.ci=!0,this.li=new Dk,this.referenceDelegate=e(this),this.hi=new bk(this),this.indexManager=new wk,this.remoteDocumentCache=function(i){return new Lk(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new _k(n),this.Ti=new xk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ok,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new Vk(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new Fk(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return L.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class Fk extends vP{constructor(e){super(),this.currentSequenceNumber=e}}class Qd{constructor(e){this.persistence=e,this.Ai=new Kd,this.Ri=null}static Vi(e){return new Qd(e)}get mi(){if(this.Ri)return this.Ri;throw J(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.mi,r=>{const i=Q.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return L.or([()=>L.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Sl{constructor(e,n){this.persistence=e,this.gi=new $r(r=>EP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Pk(this,n)}static Vi(e,n){return new Sl(e,n)}Ii(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return L.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,a=>this.Sr(e,a,n).next(l=>{l||(r++,s.removeEntry(a,he.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),L.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Oa(e.data.value)),n}Sr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Jd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=Je(),i=Je();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jd(e,n.fromCache,r,i)}}/**
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
 */class Uk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jk{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return b1()?8:yP(Ze())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Uk;return this.ws(e,n,a).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,a,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(Jr()<=Y.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Jr()<=Y.DEBUG&&H("QueryEngine","Query:",ps(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Jr()<=Y.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cr(n))):L.resolve())}ps(e,n){if(cg(n))return L.resolve(null);let r=Cr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vh(n,null,"F"),r=Cr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Je(...s);return this.gs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ds(n,h,a,u.readTime)?this.ps(e,vh(n,null,"F")):this.vs(e,h,n,u)}))})))}ys(e,n,r,i){return cg(n)||i.isEqual(he.min())?L.resolve(null):this.gs.getDocuments(e,r).next(s=>{const a=this.bs(n,s);return this.Ds(n,a,r,i)?L.resolve(null):(Jr()<=Y.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ps(n)),this.vs(e,a,n,fP(i,ro)).next(l=>l))})}bs(e,n){let r=new je(zP(e));return n.forEach((i,s)=>{Wd(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return Jr()<=Y.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ps(n)),this.gs.getDocumentsMatchingQuery(e,n,rr.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */const Bk="LocalStore";class zk{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new dt(ee),this.Ms=new $r(s=>$d(s),Hd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Nk(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function $k(t,e,n,r){return new zk(t,e,n,r)}async function F0(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=Je();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:l}))})})}function Hk(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let C=L.resolve();return g.forEach(P=>{C=C.next(()=>f.getEntry(u,P)).next(N=>{const D=h.docVersions.get(P);Ee(D!==null,48541),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Je();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Wk(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function qk(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Fd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class _g{constructor(){this.activeTargetIds=KP()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gk{constructor(){this.Fo=new _g,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new _g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Kk{xo(e){}shutdown(){}}/**
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
 */const Eg="ConnectivityMonitor";class wg{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){H(Eg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){H(Eg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fa=null;function wh(){return fa===null?fa=function(){return 268435456+Math.round(2147483648*Math.random())}():fa++,"0x"+fa.toString(16)}/**
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
 */const ic="RestConnection",Qk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Jk{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===vl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const a=wh(),l=this.Go(e,n.toUriEncodedString());H(ic,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(l),f=Bi(h);return this.jo(e,l,u,r,f).then(p=>(H(ic,`Received RPC '${e}' ${a}: `,p),p),p=>{throw xi(ic,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,n,r,i,s,a){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=Qk[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Xk{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ge="WebChannelConnection";class Yk extends Jk{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const a=wh();return new Promise((l,u)=>{const h=new Y_;h.setWithCredentials(!0),h.listenOnce(Z_.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case xa.NO_ERROR:const p=h.getResponseJson();H(Ge,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case xa.TIMEOUT:H(Ge,`RPC '${e}' ${a} timed out`),u(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case xa.HTTP_ERROR:const g=h.getStatus();if(H(Ge,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C==null?void 0:C.error;if(P&&P.status&&P.message){const N=function(I){const y=I.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(y)>=0?y:M.UNKNOWN}(P.status);u(new W(N,P.message))}else u(new W(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new W(M.UNAVAILABLE,"Connection failed."));break;default:J(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{H(Ge,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(i);H(Ge,`RPC '${e}' ${a} sending request:`,i),h.send(n,"POST",f,r,15)})}P_(e,n,r){const i=wh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=n0(),l=t0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(Ge,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=a.createWebChannel(f,u);this.T_(p);let g=!1,C=!1;const P=new Xk({Ho:D=>{C?H(Ge,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(H(Ge,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),H(Ge,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},Yo:()=>p.close()}),N=(D,I,y)=>{D.listen(I,S=>{try{y(S)}catch(V){setTimeout(()=>{throw V},0)}})};return N(p,_s.EventType.OPEN,()=>{C||(H(Ge,`RPC '${e}' stream ${i} transport opened.`),P.s_())}),N(p,_s.EventType.CLOSE,()=>{C||(C=!0,H(Ge,`RPC '${e}' stream ${i} transport closed`),P.__(),this.I_(p))}),N(p,_s.EventType.ERROR,D=>{C||(C=!0,xi(Ge,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),P.__(new W(M.UNAVAILABLE,"The operation could not be completed")))}),N(p,_s.EventType.MESSAGE,D=>{var I;if(!C){const y=D.data[0];Ee(!!y,16349);const S=y,V=(S==null?void 0:S.error)||((I=S[0])===null||I===void 0?void 0:I.error);if(V){H(Ge,`RPC '${e}' stream ${i} received error:`,V);const F=V.status;let j=function(_){const w=Se[_];if(w!==void 0)return ok(w)}(F),E=V.message;j===void 0&&(j=M.INTERNAL,E="Unknown error status: "+F+" with message "+V.message),C=!0,P.__(new W(j,E)),p.close()}else H(Ge,`RPC '${e}' stream ${i} received:`,y),P.a_(y)}}),N(l,e0.STAT_EVENT,D=>{D.stat===ch.PROXY?H(Ge,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===ch.NOPROXY&&H(Ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function sc(){return typeof document<"u"?document:null}/**
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
 */function Xl(t){return new ak(t,!0)}/**
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
 */class U0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Tg="PersistentStream";class Zk{constructor(e,n,r,i,s,a,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new U0(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Mr(n.toString()),Mr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return H(Tg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(H(Tg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eR extends Zk{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=mk(e.writeResults,e.commitTime),r=Ei(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=dk(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pk(this.serializer,r))};this.k_(n)}}/**
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
 */class tR{}class nR extends tR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,_h(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Jo(e,_h(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(M.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class rR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Mr(n),this._a=!1):H("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const So="RemoteStore";class iR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Co(this)&&(H(So,"Restarting streams for network reachability change."),await async function(u){const h=ae(u);h.Ia.add(4),await Ao(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Yl(h)}(this))})}),this.Aa=new rR(r,i)}}async function Yl(t){if(Co(t))for(const e of t.da)await e(!0)}async function Ao(t){for(const e of t.da)await e(!1)}function Co(t){return ae(t).Ia.size===0}async function j0(t,e,n){if(!To(e))throw e;t.Ia.add(1),await Ao(t),t.Aa.set("Offline"),n||(n=()=>Wk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(So,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Yl(t)})}function B0(t,e){return e().catch(n=>j0(t,n,e))}async function Zl(t){const e=ae(t),n=sr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Fd;for(;sR(e);)try{const i=await qk(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,oR(e,i)}catch(i){await j0(e,i)}z0(e)&&$0(e)}function sR(t){return Co(t)&&t.Pa.length<10}function oR(t,e){t.Pa.push(e);const n=sr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function z0(t){return Co(t)&&!sr(t).M_()&&t.Pa.length>0}function $0(t){sr(t).start()}async function aR(t){sr(t).na()}async function lR(t){const e=sr(t);for(const n of t.Pa)e.X_(n.mutations)}async function uR(t,e,n){const r=t.Pa.shift(),i=Gd.from(r,e,n);await B0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zl(t)}async function cR(t,e){e&&sr(t).Z_&&await async function(r,i){if(function(a){return sk(a)&&a!==M.ABORTED}(i.code)){const s=r.Pa.shift();sr(r).N_(),await B0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Zl(r)}}(t,e),z0(t)&&$0(t)}async function Ig(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),H(So,"RemoteStore received new credentials");const r=Co(n);n.Ia.add(3),await Ao(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Yl(n)}async function hR(t,e){const n=ae(t);e?(n.Ia.delete(2),await Yl(n)):e||(n.Ia.add(2),await Ao(n),n.Aa.set("Unknown"))}function sr(t){return t.ma||(t.ma=function(n,r,i){const s=ae(n);return s.ia(),new eR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:aR.bind(null,t),n_:cR.bind(null,t),ea:lR.bind(null,t),ta:uR.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await Zl(t)):(await t.ma.stop(),t.Pa.length>0&&(H(So,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class Xd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Xd(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function H0(t,e){if(Mr("AsyncQueue",`${e}: ${t}`),To(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}class dR{constructor(){this.queries=Sg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=ae(n),s=i.queries;i.queries=Sg(),s.forEach((a,l)=>{for(const u of l.wa)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function Sg(){return new $r(t=>T0(t),w0)}function fR(t){t.Da.forEach(e=>{e.next()})}var Ag,Cg;(Cg=Ag||(Ag={})).Fa="default",Cg.Cache="cache";const pR="SyncEngine";class mR{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new $r(l=>T0(l),w0),this.Tu=new Map,this.Iu=new Set,this.du=new dt(Q.comparator),this.Eu=new Map,this.Au=new Kd,this.Ru={},this.Vu=new Map,this.mu=Mi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function gR(t,e,n){const r=ER(t);try{const i=await function(a,l){const u=ae(a),h=fe.now(),f=l.reduce((C,P)=>C.add(P.key),Je());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=wl(),N=Je();return u.Os.getEntries(C,f).next(D=>{P=D,P.forEach((I,y)=>{y.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,P)).next(D=>{p=D;const I=[];for(const y of l){const S=tk(y,p.get(y.key).overlayedDocument);S!=null&&I.push(new Hr(y.key,S,p0(S.value.mapValue),pn.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,I,l)}).next(D=>{g=D;const I=D.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(C,D.batchId,I)})}).then(()=>({batchId:g.batchId,changes:S0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ru[a.currentUser.toKey()];h||(h=new dt(ee)),h=h.insert(l,u),a.Ru[a.currentUser.toKey()]=h}(r,i.batchId,n),await eu(r,i.changes),await Zl(r.remoteStore)}catch(i){const s=H0(i,"Failed to persist write");n.reject(s)}}function Pg(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=ae(a);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.wa)g.va(l)&&(h=!0)}),h&&fR(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vR(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await Hk(n.localStore,e);q0(n,r,null),W0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await eu(n,i)}catch(i){await Md(i)}}async function yR(t,e,n){const r=ae(t);try{const i=await function(a,l){const u=ae(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ee(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);q0(r,e,n),W0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await eu(r,i)}catch(i){await Md(i)}}function W0(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function q0(t,e,n){const r=ae(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}async function eu(t,e,n){const r=ae(t),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{a.push(r.gu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Jd.Es(u.targetId,h);s.push(p)}}))}),await Promise.all(a),r.hu.J_(i),await async function(u,h){const f=ae(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.Is,C=>f.persistence.referenceDelegate.addReference(p,g.targetId,C)).next(()=>L.forEach(g.ds,C=>f.persistence.referenceDelegate.removeReference(p,g.targetId,C)))))}catch(p){if(!To(p))throw p;H(Bk,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const C=f.Fs.get(g),P=C.snapshotVersion,N=C.withLastLimboFreeSnapshotVersion(P);f.Fs=f.Fs.insert(g,N)}}}(r.localStore,s))}async function _R(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){H(pR,"User change. New user:",e.toKey());const r=await F0(n.localStore,e);n.currentUser=e,function(s,a){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,a))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await eu(n,r.Bs)}}function ER(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yR.bind(null,e),e}class Al{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return $k(this.persistence,new jk,e.initialUser,this.serializer)}Du(e){return new b0(Qd.Vi,this.serializer)}bu(e){return new Gk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Al.provider={build:()=>new Al};class wR extends Al{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Ee(this.persistence.referenceDelegate instanceof Sl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ak(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new b0(r=>Sl.Vi(r,n),this.serializer)}}class Th{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_R.bind(null,this.syncEngine),await hR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dR}()}createDatastore(e){const n=Xl(e.databaseInfo.databaseId),r=function(s){return new Yk(s)}(e.databaseInfo);return function(s,a,l,u){return new nR(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new iR(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Pg(this.syncEngine,n,0),function(){return wg.C()?new wg:new Kk}())}createSyncEngine(e,n){return function(i,s,a,l,u,h,f){const p=new mR(i,s,a,l,u,h);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ae(i);H(So,"RemoteStore shutting down."),s.Ia.add(5),await Ao(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Th.provider={build:()=>new Th};/**
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
 */const or="FirestoreClient";class TR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ke.UNAUTHENTICATED,this.clientId=Vd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{H(or,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H(or,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=H0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oc(t,e){t.asyncQueue.verifyOperationInProgress(),H(or,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await F0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{xi("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{H("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{xi("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function kg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IR(t);H(or,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ig(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ig(e.remoteStore,i)),t._onlineComponents=e}async function IR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(or,"Using user provided OfflineComponentProvider");try{await oc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;xi("Error using user provided cache. Falling back to memory cache: "+n),await oc(t,new Al)}}else H(or,"Using default OfflineComponentProvider"),await oc(t,new wR(void 0));return t._offlineComponents}async function SR(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(or,"Using user provided OnlineComponentProvider"),await kg(t,t._uninitializedComponentsProvider._online)):(H(or,"Using default OnlineComponentProvider"),await kg(t,new Th))),t._onlineComponents}function AR(t){return SR(t).then(e=>e.syncEngine)}/**
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
 */function G0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Rg=new Map;/**
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
 */const K0="firestore.googleapis.com",Ng=!0;class xg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=K0,this.ssl=Ng}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ng;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=M0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ik)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=G0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tP;switch(r.type){case"firstParty":return new sP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Rg.get(n);r&&(H("ComponentProvider","Removing Datastore"),Rg.delete(n),r.terminate())}(this),Promise.resolve()}}function CR(t,e,n,r={}){var i;t=dh(t,Yd);const s=Bi(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(f_(`https://${u}`),p_("Firestore",!0)),a.host!==K0&&a.host!==u&&xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:u,ssl:s,emulatorOptions:r});if(!Or(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ke.MOCK_USER;else{f=k1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ke(g)}t._authCredentials=new nP(new i0(f,p))}}/**
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
 */class Zd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zd(this.firestore,e,this._query)}}class Xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ao(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}toJSON(){return{type:Xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(wo(n,Xe._jsonSchema))return new Xe(e,r||null,new Q(Ie.fromString(n.referencePath)))}}Xe._jsonSchemaVersion="firestore/documentReference/1.0",Xe._jsonSchema={type:Ce("string",Xe._jsonSchemaVersion),referencePath:Ce("string")};class ao extends Zd{constructor(e,n,r){super(e,n,UP(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new Q(e))}withConverter(e){return new ao(this.firestore,e,this._path)}}function PR(t,e,...n){if(t=Qt(t),arguments.length===1&&(e=Vd.newId()),hP("doc","path",e),t instanceof Yd){const r=Ie.fromString(e,...n);return Zm(r),new Xe(t,null,new Q(r))}{if(!(t instanceof Xe||t instanceof ao))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Zm(r),new Xe(t.firestore,t instanceof ao?t.converter:null,new Q(r))}}/**
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
 */const Og="AsyncQueue";class Dg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new U0(this,"async_queue_retry"),this.oc=()=>{const r=sc();r&&H(Og,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=sc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Ar;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!To(e))throw e;H(Og,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Mr("INTERNAL UNHANDLED ERROR: ",Vg(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Xd.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&J(47125,{hc:Vg(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Vg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Q0 extends Yd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Dg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dg(e),this._firestoreClient=void 0,await e}}}function kR(t,e){const n=typeof t=="object"?t:y_(),r=typeof t=="string"?t:vl,i=wd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=C1("firestore");s&&CR(i,...s)}return i}function RR(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||NR(t),t._firestoreClient}function NR(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new SP(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,G0(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new TR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(Jt.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vt(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wo(e,Vt._jsonSchema))return Vt.fromBase64String(e.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:Ce("string",Vt._jsonSchemaVersion),bytes:Ce("string")};/**
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
 */class ef{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class J0{constructor(e){this._methodName=e}}/**
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
 */class mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mn._jsonSchemaVersion}}static fromJSON(e){if(wo(e,mn._jsonSchema))return new mn(e.latitude,e.longitude)}}mn._jsonSchemaVersion="firestore/geoPoint/1.0",mn._jsonSchema={type:Ce("string",mn._jsonSchemaVersion),latitude:Ce("number"),longitude:Ce("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class gn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wo(e,gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new gn(e.vectorValues);throw new W(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gn._jsonSchemaVersion="firestore/vectorValue/1.0",gn._jsonSchema={type:Ce("string",gn._jsonSchemaVersion),vectorValues:Ce("object")};/**
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
 */const xR=/^__.*__$/;class OR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Io(e,this.data,n,this.fieldTransforms)}}function X0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{Ec:t})}}class tf{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Cl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(X0(this.Ec)&&xR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class DR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xl(e)}Dc(e,n,r,i=!1){return new tf({Ec:e,methodName:n,bc:r,path:Fe.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VR(t){const e=t._freezeSettings(),n=Xl(t._databaseId);return new DR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LR(t,e,n,r,i,s={}){const a=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);tE("Data must be an object, but it was:",a,r);const l=Z0(r,a);let u,h;if(s.merge)u=new Mt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=MR(e,p,n);if(!a.contains(g))throw new W(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);FR(f,g)||f.push(g)}u=new Mt(f),h=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=a.fieldTransforms;return new OR(new Dt(l),u,h)}function Y0(t,e){if(eE(t=Qt(t)))return tE("Unsupported field value:",e,t),Z0(t,e);if(t instanceof J0)return function(r,i){if(!X0(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Y0(l,i.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:yh(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yh(i.serializer,s)}}if(r instanceof mn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:lk(i.serializer,r._byteString)};if(r instanceof Xe){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:V0(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof gn)return function(a,l){return{mapValue:{fields:{[d0]:{stringValue:f0},[fh]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return qd(l.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${Ld(r)}`)}(t,e)}function Z0(t,e){const n={};return a0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wi(t,(r,i)=>{const s=Y0(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function eE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof mn||t instanceof Vt||t instanceof Xe||t instanceof J0||t instanceof gn)}function tE(t,e,n){if(!eE(n)||!s0(n)){const r=Ld(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function MR(t,e,n){if((e=Qt(e))instanceof ef)return e._internalPath;if(typeof e=="string")return nE(t,e);throw Cl("Field path arguments must be of type string or ",t,!1,void 0,n)}const bR=new RegExp("[~\\*/\\[\\]]");function nE(t,e,n){if(e.search(bR)>=0)throw Cl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ef(...e.split("."))._internalPath}catch{throw Cl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cl(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function FR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class rE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(iE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UR extends rE{data(){return super.data()}}function iE(t,e){return typeof e=="string"?nE(t,e):e instanceof ef?e._internalPath:e._delegate._internalPath}/**
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
 */function jR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class pa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wi extends rE{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new La(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(iE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=wi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}wi._jsonSchemaVersion="firestore/documentSnapshot/1.0",wi._jsonSchema={type:Ce("string",wi._jsonSchemaVersion),bundleSource:Ce("string","DocumentSnapshot"),bundleName:Ce("string"),bundle:Ce("string")};class La extends wi{data(e={}){return super.data(e)}}class Ls{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new pa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new La(this._firestore,this._userDataWriter,r.key,r,new pa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new La(i._firestore,i._userDataWriter,l.doc.key,l.doc,new pa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new La(i._firestore,i._userDataWriter,l.doc.key,l.doc,new pa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:BR(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ls._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Vd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function BR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}Ls._jsonSchemaVersion="firestore/querySnapshot/1.0",Ls._jsonSchema={type:Ce("string",Ls._jsonSchemaVersion),bundleSource:Ce("string","QuerySnapshot"),bundleName:Ce("string"),bundle:Ce("string")};function zR(t,e,n){t=dh(t,Xe);const r=dh(t.firestore,Q0),i=jR(t.converter,e);return $R(r,[LR(VR(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,pn.none())])}function $R(t,e){return function(r,i){const s=new Ar;return r.asyncQueue.enqueueAndForget(async()=>gR(await AR(r),i,s)),s.promise}(RR(t),e)}(function(e,n=!0){(function(i){Hi=i})(zi),Ri(new Dr("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Q0(new rP(r.getProvider("auth-internal")),new oP(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yl(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),er(Km,Qm,e),er(Km,Qm,"esm2017")})();const HR={apiKey:"AIzaSyCGOXQlkgFked5raj_4zeulIgH1nmg_EJo",authDomain:"clikfix-418b4.firebaseapp.com",projectId:"clikfix-418b4",storageBucket:"clikfix-418b4.firebasestorage.app",messagingSenderId:'557392194925",',appId:"1:557392194925:web:a99893be3ba48e3a1d7e64"},sE=v_(HR),WR=ZC(sE),qR=kR(sE);function GR(){const[t,e]=B.useState(""),[n,r]=B.useState(!1),[i,s]=B.useState(!1),[a,l]=B.useState(!1),u=mo(),h=WR.currentUser;B.useEffect(()=>{h||u("/login")},[h]);async function f(){if(!t||!n||!i)return alert("All fields required");l(!0),await zR(PR(qR,"providers",h.uid),{uid:h.uid,email:h.email,skillLevel:t,approved:!1,createdAt:Date.now()}),u("/provider-dashboard")}return O.jsxs("div",{style:{padding:"30px",fontFamily:"Arial"},children:[O.jsx("h1",{children:"Provider Setup"}),O.jsx("p",{children:"Payment confirmed. Complete your onboarding below:"}),O.jsx("label",{children:"Skill Level"}),O.jsxs("select",{value:t,onChange:p=>e(p.target.value),children:[O.jsx("option",{value:"",children:"Choose..."}),O.jsx("option",{value:"Beginner",children:"Beginner"}),O.jsx("option",{value:"Intermediate",children:"Intermediate"}),O.jsx("option",{value:"Professional",children:"Professional"})]}),O.jsx("br",{}),O.jsx("br",{}),O.jsxs("label",{children:[O.jsx("input",{type:"checkbox",checked:n,onChange:()=>r(!n)})," I confirm I am 18+"]}),O.jsx("br",{}),O.jsxs("label",{children:[O.jsx("input",{type:"checkbox",checked:i,onChange:()=>s(!i)})," I agree to the provider terms of service"]}),O.jsx("br",{}),O.jsx("br",{}),O.jsx("button",{disabled:a,onClick:f,children:a?"Saving...":"Finish Setup"})]})}function KR(){const[t,e]=B.useState(()=>JSON.parse(localStorage.getItem("providerProfile")||"{}"));function n(){localStorage.setItem("providerProfile",JSON.stringify(t)),alert("Saved")}return localStorage.getItem("subscriptionPaid")?O.jsxs("div",{className:"card",children:[O.jsx("h1",{children:"Your Profile"}),O.jsx("div",{className:"form-row",children:O.jsx("input",{className:"input",value:t.name||"",onChange:r=>e({...t,name:r.target.value}),placeholder:"Name"})}),O.jsx("div",{className:"form-row",children:O.jsx("input",{className:"input",value:t.email||"",onChange:r=>e({...t,email:r.target.value}),placeholder:"Email"})}),O.jsx("div",{style:{marginTop:12},children:O.jsx("button",{onClick:n,className:"button",children:"Save"})})]}):O.jsx("div",{className:"card",children:O.jsx("p",{children:"Please subscribe first."})})}function QR(){const t=mo(),[e,n]=B.useState([]);B.useEffect(()=>{if(localStorage.getItem("subscriptionPaid")!=="true"){t("/provider-subscribe");return}const i=JSON.parse(localStorage.getItem("clientJobs")||"[]");n(i)},[]);function r(i){if(!confirm("Do you accept this job and its listed payment and agree to the provider terms?"))return;const s={...i,acceptedBy:JSON.parse(localStorage.getItem("providerProfile")||"{}").name||"Provider",acceptedAt:new Date().toISOString()},a=JSON.parse(localStorage.getItem("acceptedJobs")||"[]");a.push(s),localStorage.setItem("acceptedJobs",JSON.stringify(a));const l=JSON.parse(localStorage.getItem("clientJobs")||"[]").filter(u=>u.id!==i.id);localStorage.setItem("clientJobs",JSON.stringify(l)),n(l),alert("Job accepted. Client contact is visible in accepted jobs list.")}return O.jsxs("div",{children:[O.jsxs("div",{className:"card",children:[O.jsx("h1",{children:"Provider Dashboard — Available Jobs"}),O.jsx("p",{className:"small",children:"Only visible to subscribed & onboarded providers."})]}),O.jsxs("div",{className:"grid",children:[e.length===0&&O.jsx("div",{className:"card",children:"No jobs available currently."}),e.map(i=>O.jsxs("div",{className:"card",children:[O.jsx("h3",{children:i.jobDesc||"Job"}),O.jsxs("p",{className:"small",children:["Date: ",i.date||"N/A"]}),O.jsxs("p",{className:"small",children:["Offered by: ",i.name," — ",i.phone]}),O.jsx("button",{className:"button",onClick:()=>r(i),children:"Accept job"})]},i.id))]}),O.jsxs("div",{className:"card",style:{marginTop:18},children:[O.jsx("h2",{children:"Accepted Jobs"}),O.jsx("div",{children:JSON.parse(localStorage.getItem("acceptedJobs")||"[]").map(i=>O.jsxs("div",{style:{borderTop:"1px solid #eee",paddingTop:8,marginTop:8},children:[O.jsx("strong",{children:i.jobDesc}),O.jsxs("div",{className:"small",children:["Client: ",i.name," ",i.phone," — Address: ",i.address]})]},i.id))})]})]})}function JR(){return O.jsxs(O.Fragment,{children:[O.jsx("header",{className:"topbar",children:O.jsxs("div",{className:"container",children:[O.jsx(zn,{to:"/",className:"logo",children:"🧰 1clikfix.com"}),O.jsxs("nav",{children:[O.jsx(zn,{to:"/client",children:"Clients"}),O.jsx(zn,{to:"/provider-subscribe",children:"Providers"}),O.jsx(zn,{to:"/about",children:"About"})]})]})}),O.jsx("main",{className:"container",children:O.jsxs(n1,{children:[O.jsx(on,{path:"/",element:O.jsx(f1,{})}),O.jsx(on,{path:"/client",element:O.jsx(m1,{})}),O.jsx(on,{path:"/client/book",element:O.jsx(g1,{})}),O.jsx(on,{path:"/provider-subscribe",element:O.jsx(v1,{})}),O.jsx(on,{path:"/provider-onboarding",element:O.jsx(GR,{})}),O.jsx(on,{path:"/provider-profile",element:O.jsx(KR,{})}),O.jsx(on,{path:"/provider-dashboard",element:O.jsx(QR,{})}),O.jsx(on,{path:"*",element:O.jsx("div",{children:"404 — Not found"})})]})}),O.jsx("footer",{className:"footer",children:O.jsx("div",{className:"container",children:"© 1clikfixx"})})]})}Ky(document.getElementById("root")).render(O.jsx(Wg.StrictMode,{children:O.jsx(u1,{children:O.jsx(JR,{})})}));
