var cx=Object.defineProperty;var ux=(o,e,t)=>e in o?cx(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var Wt=(o,e,t)=>ux(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var yh={exports:{}},ma={},Sh={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function hx(){if(Ym)return mt;Ym=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(U,re,Ne){this.props=U,this.context=re,this.refs=E,this.updater=Ne||x}S.prototype.isReactComponent={},S.prototype.setState=function(U,re){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,re,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(U,re,Ne){this.props=U,this.context=re,this.refs=E,this.updater=Ne||x}var P=D.prototype=new y;P.constructor=D,M(P,S.prototype),P.isPureReactComponent=!0;var R=Array.isArray,X=Object.prototype.hasOwnProperty,O={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function H(U,re,Ne){var J,de={},Ee=null,xe=null;if(re!=null)for(J in re.ref!==void 0&&(xe=re.ref),re.key!==void 0&&(Ee=""+re.key),re)X.call(re,J)&&!I.hasOwnProperty(J)&&(de[J]=re[J]);var Ae=arguments.length-2;if(Ae===1)de.children=Ne;else if(1<Ae){for(var Ie=Array(Ae),Ze=0;Ze<Ae;Ze++)Ie[Ze]=arguments[Ze+2];de.children=Ie}if(U&&U.defaultProps)for(J in Ae=U.defaultProps,Ae)de[J]===void 0&&(de[J]=Ae[J]);return{$$typeof:o,type:U,key:Ee,ref:xe,props:de,_owner:O.current}}function C(U,re){return{$$typeof:o,type:U.type,key:re,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function k(U){var re={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ne){return re[Ne]})}var ie=/\/+/g;function Z(U,re){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):re.toString(36)}function le(U,re,Ne,J,de){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var xe=!1;if(U===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(U.$$typeof){case o:case e:xe=!0}}if(xe)return xe=U,de=de(xe),U=J===""?"."+Z(xe,0):J,R(de)?(Ne="",U!=null&&(Ne=U.replace(ie,"$&/")+"/"),le(de,re,Ne,"",function(Ze){return Ze})):de!=null&&(A(de)&&(de=C(de,Ne+(!de.key||xe&&xe.key===de.key?"":(""+de.key).replace(ie,"$&/")+"/")+U)),re.push(de)),1;if(xe=0,J=J===""?".":J+":",R(U))for(var Ae=0;Ae<U.length;Ae++){Ee=U[Ae];var Ie=J+Z(Ee,Ae);xe+=le(Ee,re,Ne,Ie,de)}else if(Ie=_(U),typeof Ie=="function")for(U=Ie.call(U),Ae=0;!(Ee=U.next()).done;)Ee=Ee.value,Ie=J+Z(Ee,Ae++),xe+=le(Ee,re,Ne,Ie,de);else if(Ee==="object")throw re=String(U),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return xe}function he(U,re,Ne){if(U==null)return U;var J=[],de=0;return le(U,J,"","",function(Ee){return re.call(Ne,Ee,de++)}),J}function ae(U){if(U._status===-1){var re=U._result;re=re(),re.then(function(Ne){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ne)},function(Ne){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ne)}),U._status===-1&&(U._status=0,U._result=re)}if(U._status===1)return U._result.default;throw U._result}var ue={current:null},z={transition:null},ce={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:z,ReactCurrentOwner:O};function oe(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:he,forEach:function(U,re,Ne){he(U,function(){re.apply(this,arguments)},Ne)},count:function(U){var re=0;return he(U,function(){re++}),re},toArray:function(U){return he(U,function(re){return re})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=S,mt.Fragment=t,mt.Profiler=s,mt.PureComponent=D,mt.StrictMode=i,mt.Suspense=d,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,mt.act=oe,mt.cloneElement=function(U,re,Ne){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var J=M({},U.props),de=U.key,Ee=U.ref,xe=U._owner;if(re!=null){if(re.ref!==void 0&&(Ee=re.ref,xe=O.current),re.key!==void 0&&(de=""+re.key),U.type&&U.type.defaultProps)var Ae=U.type.defaultProps;for(Ie in re)X.call(re,Ie)&&!I.hasOwnProperty(Ie)&&(J[Ie]=re[Ie]===void 0&&Ae!==void 0?Ae[Ie]:re[Ie])}var Ie=arguments.length-2;if(Ie===1)J.children=Ne;else if(1<Ie){Ae=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)Ae[Ze]=arguments[Ze+2];J.children=Ae}return{$$typeof:o,type:U.type,key:de,ref:Ee,props:J,_owner:xe}},mt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},mt.createElement=H,mt.createFactory=function(U){var re=H.bind(null,U);return re.type=U,re},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:u,render:U}},mt.isValidElement=A,mt.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:ae}},mt.memo=function(U,re){return{$$typeof:f,type:U,compare:re===void 0?null:re}},mt.startTransition=function(U){var re=z.transition;z.transition={};try{U()}finally{z.transition=re}},mt.unstable_act=oe,mt.useCallback=function(U,re){return ue.current.useCallback(U,re)},mt.useContext=function(U){return ue.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return ue.current.useDeferredValue(U)},mt.useEffect=function(U,re){return ue.current.useEffect(U,re)},mt.useId=function(){return ue.current.useId()},mt.useImperativeHandle=function(U,re,Ne){return ue.current.useImperativeHandle(U,re,Ne)},mt.useInsertionEffect=function(U,re){return ue.current.useInsertionEffect(U,re)},mt.useLayoutEffect=function(U,re){return ue.current.useLayoutEffect(U,re)},mt.useMemo=function(U,re){return ue.current.useMemo(U,re)},mt.useReducer=function(U,re,Ne){return ue.current.useReducer(U,re,Ne)},mt.useRef=function(U){return ue.current.useRef(U)},mt.useState=function(U){return ue.current.useState(U)},mt.useSyncExternalStore=function(U,re,Ne){return ue.current.useSyncExternalStore(U,re,Ne)},mt.useTransition=function(){return ue.current.useTransition()},mt.version="18.3.1",mt}var qm;function tf(){return qm||(qm=1,Sh.exports=hx()),Sh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function dx(){if(Km)return ma;Km=1;var o=tf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,f){var m,g={},_=null,x=null;f!==void 0&&(_=""+f),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)i.call(d,m)&&!a.hasOwnProperty(m)&&(g[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:u,key:_,ref:x,props:g,_owner:s.current}}return ma.Fragment=t,ma.jsx=c,ma.jsxs=c,ma}var $m;function fx(){return $m||($m=1,yh.exports=dx()),yh.exports}var W=fx(),un=tf(),Xl={},Mh={exports:{}},Wn={},Eh={exports:{}},Th={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function px(){return Zm||(Zm=1,(function(o){function e(z,ce){var oe=z.length;z.push(ce);e:for(;0<oe;){var U=oe-1>>>1,re=z[U];if(0<s(re,ce))z[U]=ce,z[oe]=re,oe=U;else break e}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var ce=z[0],oe=z.pop();if(oe!==ce){z[0]=oe;e:for(var U=0,re=z.length,Ne=re>>>1;U<Ne;){var J=2*(U+1)-1,de=z[J],Ee=J+1,xe=z[Ee];if(0>s(de,oe))Ee<re&&0>s(xe,de)?(z[U]=xe,z[Ee]=oe,U=Ee):(z[U]=de,z[J]=oe,U=J);else if(Ee<re&&0>s(xe,oe))z[U]=xe,z[Ee]=oe,U=Ee;else break e}}return ce}function s(z,ce){var oe=z.sortIndex-ce.sortIndex;return oe!==0?oe:z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var d=[],f=[],m=1,g=null,_=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var ce=t(f);ce!==null;){if(ce.callback===null)i(f);else if(ce.startTime<=z)i(f),ce.sortIndex=ce.expirationTime,e(d,ce);else break;ce=t(f)}}function R(z){if(E=!1,P(z),!M)if(t(d)!==null)M=!0,ae(X);else{var ce=t(f);ce!==null&&ue(R,ce.startTime-z)}}function X(z,ce){M=!1,E&&(E=!1,y(H),H=-1),x=!0;var oe=_;try{for(P(ce),g=t(d);g!==null&&(!(g.expirationTime>ce)||z&&!k());){var U=g.callback;if(typeof U=="function"){g.callback=null,_=g.priorityLevel;var re=U(g.expirationTime<=ce);ce=o.unstable_now(),typeof re=="function"?g.callback=re:g===t(d)&&i(d),P(ce)}else i(d);g=t(d)}if(g!==null)var Ne=!0;else{var J=t(f);J!==null&&ue(R,J.startTime-ce),Ne=!1}return Ne}finally{g=null,_=oe,x=!1}}var O=!1,I=null,H=-1,C=5,A=-1;function k(){return!(o.unstable_now()-A<C)}function ie(){if(I!==null){var z=o.unstable_now();A=z;var ce=!0;try{ce=I(!0,z)}finally{ce?Z():(O=!1,I=null)}}else O=!1}var Z;if(typeof D=="function")Z=function(){D(ie)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,he=le.port2;le.port1.onmessage=ie,Z=function(){he.postMessage(null)}}else Z=function(){S(ie,0)};function ae(z){I=z,O||(O=!0,Z())}function ue(z,ce){H=S(function(){z(o.unstable_now())},ce)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){M||x||(M=!0,ae(X))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(z){switch(_){case 1:case 2:case 3:var ce=3;break;default:ce=_}var oe=_;_=ce;try{return z()}finally{_=oe}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,ce){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var oe=_;_=z;try{return ce()}finally{_=oe}},o.unstable_scheduleCallback=function(z,ce,oe){var U=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?U+oe:U):oe=U,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=oe+re,z={id:m++,callback:ce,priorityLevel:z,startTime:oe,expirationTime:re,sortIndex:-1},oe>U?(z.sortIndex=oe,e(f,z),t(d)===null&&z===t(f)&&(E?(y(H),H=-1):E=!0,ue(R,oe-U))):(z.sortIndex=re,e(d,z),M||x||(M=!0,ae(X))),z},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(z){var ce=_;return function(){var oe=_;_=ce;try{return z.apply(this,arguments)}finally{_=oe}}}})(Th)),Th}var Qm;function mx(){return Qm||(Qm=1,Eh.exports=px()),Eh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function gx(){if(Jm)return Wn;Jm=1;var o=tf(),e=mx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return d.call(g,n)?!0:d.call(m,n)?!1:f.test(n)?g[n]=!0:(m[n]=!0,!1)}function x(n,r,l,h){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,h){if(r===null||typeof r>"u"||x(n,r,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,h,p,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,D);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,D);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,D);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,l,h){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,h)&&(l=null),h||p===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,h=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?n.setAttributeNS(h,r,l):n.setAttribute(r,l))))}var R=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),O=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),z=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,U;function re(n){if(U===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);U=r&&r[1]||""}return`
`+U+n}var Ne=!1;function J(n,r){if(!n||Ne)return"";Ne=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ee){var h=ee}Reflect.construct(n,[],r)}else{try{r.call()}catch(ee){h=ee}n.call(r.prototype)}else{try{throw Error()}catch(ee){h=ee}n()}}catch(ee){if(ee&&h&&typeof ee.stack=="string"){for(var p=ee.stack.split(`
`),v=h.stack.split(`
`),T=p.length-1,N=v.length-1;1<=T&&0<=N&&p[T]!==v[N];)N--;for(;1<=T&&0<=N;T--,N--)if(p[T]!==v[N]){if(T!==1||N!==1)do if(T--,N--,0>N||p[T]!==v[N]){var F=`
`+p[T].replace(" at new "," at ");return n.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",n.displayName)),F}while(1<=T&&0<=N);break}}}finally{Ne=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?re(n):""}function de(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case O:return"Portal";case C:return"Profiler";case H:return"StrictMode";case Z:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case ie:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:Ee(n.type)||"Memo";case ae:r=n._payload,n=n._init;try{return Ee(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(r);case 8:return r===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(n){var r=Ie(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),h=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){h=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function It(n){n._valueTracker||(n._valueTracker=Ze(n))}function vt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return n&&(h=Ie(n)?n.checked?"true":"false":n.value),n=h,n!==l?(r.setValue(n),!0):!1}function kt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function q(n,r){var l=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function wn(n,r){var l=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;l=Ae(r.value!=null?r.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function gt(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function ft(n,r){gt(n,r);var l=Ae(r.value),h=r.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Ct(n,r.type,l):r.hasOwnProperty("defaultValue")&&Ct(n,r.type,Ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function qe(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Ct(n,r,l){(r!=="number"||kt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ye=Array.isArray;function L(n,r,l,h){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&h&&(n[l].defaultSelected=!0)}else{for(l=""+Ae(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,h&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function w(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Ye(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Ae(l)}}function me(n,r){var l=Ae(r.value),h=Ae(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function _e(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Re,Ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,h,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,h,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function dt(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){Fe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Se[r]=Se[n]})});function Qe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Se.hasOwnProperty(n)&&Se[n]?(""+r).trim():r+"px"}function et(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Qe(l,r[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,p):n[l]=p}}var ke=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(n,r){if(r){if(ke[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ot(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,se=null,pe=null;function Le(n){if(n=ea(n)){if(typeof be!="function")throw Error(t(280));var r=n.stateNode;r&&(r=al(r),be(n.stateNode,n.type,r))}}function Pe(n){se?pe?pe.push(n):pe=[n]:se=n}function at(){if(se){var n=se,r=pe;if(pe=se=null,Le(n),r)for(n=0;n<r.length;n++)Le(r[n])}}function zt(n,r){return n(r)}function Qt(){}var Mt=!1;function Fn(n,r,l){if(Mt)return n(r,l);Mt=!0;try{return zt(n,r,l)}finally{Mt=!1,(se!==null||pe!==null)&&(Qt(),at())}}function An(n,r){var l=n.stateNode;if(l===null)return null;var h=al(l);if(h===null)return null;l=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Rs=!1;if(u)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Rs=!1}function ji(n,r,l,h,p,v,T,N,F){var ee=Array.prototype.slice.call(arguments,3);try{r.apply(l,ee)}catch(ve){this.onError(ve)}}var Xi=!1,Qr=null,Jr=!1,_r=null,Ha={onError:function(n){Xi=!0,Qr=n}};function bs(n,r,l,h,p,v,T,N,F){Xi=!1,Qr=null,ji.apply(Ha,arguments)}function Va(n,r,l,h,p,v,T,N,F){if(bs.apply(this,arguments),Xi){if(Xi){var ee=Qr;Xi=!1,Qr=null}else throw Error(t(198));Jr||(Jr=!0,_r=ee)}}function Ci(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ga(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Wa(n){if(Ci(n)!==n)throw Error(t(188))}function Vc(n){var r=n.alternate;if(!r){if(r=Ci(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,h=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return Wa(p),n;if(v===h)return Wa(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=v;else{for(var T=!1,N=p.child;N;){if(N===l){T=!0,l=p,h=v;break}if(N===h){T=!0,h=p,l=v;break}N=N.sibling}if(!T){for(N=v.child;N;){if(N===l){T=!0,l=v,h=p;break}if(N===h){T=!0,h=v,l=p;break}N=N.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function b(n){return n=Vc(n),n!==null?j(n):null}function j(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=j(n);if(r!==null)return r;n=n.sibling}return null}var te=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,Y=e.unstable_shouldYield,we=e.unstable_requestPaint,Me=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,nt=e.unstable_UserBlockingPriority,rt=e.unstable_NormalPriority,We=e.unstable_LowPriority,yt=e.unstable_IdlePriority,At=null,xt=null;function _n(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Tt,Xe=Math.log,di=Math.LN2;function Tt(n){return n>>>=0,n===0?32:31-(Xe(n)/di|0)|0}var vn=64,fi=4194304;function Jt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Pi(n,r){var l=n.pendingLanes;if(l===0)return 0;var h=0,p=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var N=T&~p;N!==0?h=Jt(N):(v&=T,v!==0&&(h=Jt(v)))}else T=l&~p,T!==0?h=Jt(T):v!==0&&(h=Jt(v));if(h===0)return 0;if(r!==0&&r!==h&&(r&p)===0&&(p=h&-h,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((h&4)!==0&&(h|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=h;0<r;)l=31-lt(r),p=1<<l,h|=n[l],r&=~p;return h}function Ft(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ti(n,r){for(var l=n.suspendedLanes,h=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-lt(v),N=1<<T,F=p[T];F===-1?((N&l)===0||(N&h)!==0)&&(p[T]=Ft(N,r)):F<=r&&(n.expiredLanes|=N),v&=~N}}function Yi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Rn(){var n=vn;return vn<<=1,(vn&4194240)===0&&(vn=64),n}function ni(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function kn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-lt(r),n[r]=l}function ja(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-lt(l),v=1<<p;r[p]=0,h[p]=-1,n[p]=-1,l&=~v}}function Gc(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var h=31-lt(l),p=1<<h;p&r|n[h]&r&&(n[h]|=r),l&=~p}}var Pt=0;function wf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Af,Wc,Rf,bf,Cf,jc=!1,Xa=[],vr=null,xr=null,yr=null,ko=new Map,Bo=new Map,Sr=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(n,r){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":ko.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(r.pointerId)}}function zo(n,r,l,h,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[p]},r!==null&&(r=ea(r),r!==null&&Wc(r)),n):(n.eventSystemFlags|=h,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function Dv(n,r,l,h,p){switch(r){case"focusin":return vr=zo(vr,n,r,l,h,p),!0;case"dragenter":return xr=zo(xr,n,r,l,h,p),!0;case"mouseover":return yr=zo(yr,n,r,l,h,p),!0;case"pointerover":var v=p.pointerId;return ko.set(v,zo(ko.get(v)||null,n,r,l,h,p)),!0;case"gotpointercapture":return v=p.pointerId,Bo.set(v,zo(Bo.get(v)||null,n,r,l,h,p)),!0}return!1}function Lf(n){var r=es(n.target);if(r!==null){var l=Ci(r);if(l!==null){if(r=l.tag,r===13){if(r=Ga(l),r!==null){n.blockedOn=r,Cf(n.priority,function(){Rf(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ya(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Yc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);bt=h,l.target.dispatchEvent(h),bt=null}else return r=ea(l),r!==null&&Wc(r),n.blockedOn=l,!1;r.shift()}return!0}function Df(n,r,l){Ya(n)&&l.delete(r)}function Nv(){jc=!1,vr!==null&&Ya(vr)&&(vr=null),xr!==null&&Ya(xr)&&(xr=null),yr!==null&&Ya(yr)&&(yr=null),ko.forEach(Df),Bo.forEach(Df)}function Ho(n,r){n.blockedOn===r&&(n.blockedOn=null,jc||(jc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Nv)))}function Vo(n){function r(p){return Ho(p,n)}if(0<Xa.length){Ho(Xa[0],n);for(var l=1;l<Xa.length;l++){var h=Xa[l];h.blockedOn===n&&(h.blockedOn=null)}}for(vr!==null&&Ho(vr,n),xr!==null&&Ho(xr,n),yr!==null&&Ho(yr,n),ko.forEach(r),Bo.forEach(r),l=0;l<Sr.length;l++)h=Sr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<Sr.length&&(l=Sr[0],l.blockedOn===null);)Lf(l),l.blockedOn===null&&Sr.shift()}var Cs=R.ReactCurrentBatchConfig,qa=!0;function Iv(n,r,l,h){var p=Pt,v=Cs.transition;Cs.transition=null;try{Pt=1,Xc(n,r,l,h)}finally{Pt=p,Cs.transition=v}}function Uv(n,r,l,h){var p=Pt,v=Cs.transition;Cs.transition=null;try{Pt=4,Xc(n,r,l,h)}finally{Pt=p,Cs.transition=v}}function Xc(n,r,l,h){if(qa){var p=Yc(n,r,l,h);if(p===null)uu(n,r,h,Ka,l),Pf(n,h);else if(Dv(p,n,r,l,h))h.stopPropagation();else if(Pf(n,h),r&4&&-1<Lv.indexOf(n)){for(;p!==null;){var v=ea(p);if(v!==null&&Af(v),v=Yc(n,r,l,h),v===null&&uu(n,r,h,Ka,l),v===p)break;p=v}p!==null&&h.stopPropagation()}else uu(n,r,h,null,l)}}var Ka=null;function Yc(n,r,l,h){if(Ka=null,n=G(h),n=es(n),n!==null)if(r=Ci(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ga(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ka=n,null}function Nf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case ze:return 1;case nt:return 4;case rt:case We:return 16;case yt:return 536870912;default:return 16}default:return 16}}var Mr=null,qc=null,$a=null;function If(){if($a)return $a;var n,r=qc,l=r.length,h,p="value"in Mr?Mr.value:Mr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(h=1;h<=T&&r[l-h]===p[v-h];h++);return $a=p.slice(n,1<h?1-h:void 0)}function Za(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Qa(){return!0}function Uf(){return!1}function Yn(n){function r(l,h,p,v,T){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(l=n[N],this[N]=l?l(v):v[N]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Qa:Uf,this.isPropagationStopped=Uf,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),r}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kc=Yn(Ps),Go=oe({},Ps,{view:0,detail:0}),Ov=Yn(Go),$c,Zc,Wo,Ja=oe({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wo&&(Wo&&n.type==="mousemove"?($c=n.screenX-Wo.screenX,Zc=n.screenY-Wo.screenY):Zc=$c=0,Wo=n),$c)},movementY:function(n){return"movementY"in n?n.movementY:Zc}}),Of=Yn(Ja),Fv=oe({},Ja,{dataTransfer:0}),kv=Yn(Fv),Bv=oe({},Go,{relatedTarget:0}),Qc=Yn(Bv),zv=oe({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=Yn(zv),Vv=oe({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gv=Yn(Vv),Wv=oe({},Ps,{data:0}),Ff=Yn(Wv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Yv[n])?!!r[n]:!1}function Jc(){return qv}var Kv=oe({},Go,{key:function(n){if(n.key){var r=jv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Za(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Xv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(n){return n.type==="keypress"?Za(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Za(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$v=Yn(Kv),Zv=oe({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=Yn(Zv),Qv=oe({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),Jv=Yn(Qv),e0=oe({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),t0=Yn(e0),n0=oe({},Ja,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),i0=Yn(n0),r0=[9,13,27,32],eu=u&&"CompositionEvent"in window,jo=null;u&&"documentMode"in document&&(jo=document.documentMode);var s0=u&&"TextEvent"in window&&!jo,Bf=u&&(!eu||jo&&8<jo&&11>=jo),zf=" ",Hf=!1;function Vf(n,r){switch(n){case"keyup":return r0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function o0(n,r){switch(n){case"compositionend":return Gf(r);case"keypress":return r.which!==32?null:(Hf=!0,zf);case"textInput":return n=r.data,n===zf&&Hf?null:n;default:return null}}function a0(n,r){if(Ls)return n==="compositionend"||!eu&&Vf(n,r)?(n=If(),$a=qc=Mr=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Bf&&r.locale!=="ko"?null:r.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!l0[n.type]:r==="textarea"}function jf(n,r,l,h){Pe(h),r=rl(r,"onChange"),0<r.length&&(l=new Kc("onChange","change",null,l,h),n.push({event:l,listeners:r}))}var Xo=null,Yo=null;function c0(n){cp(n,0)}function el(n){var r=Os(n);if(vt(r))return n}function u0(n,r){if(n==="change")return r}var Xf=!1;if(u){var tu;if(u){var nu="oninput"in document;if(!nu){var Yf=document.createElement("div");Yf.setAttribute("oninput","return;"),nu=typeof Yf.oninput=="function"}tu=nu}else tu=!1;Xf=tu&&(!document.documentMode||9<document.documentMode)}function qf(){Xo&&(Xo.detachEvent("onpropertychange",Kf),Yo=Xo=null)}function Kf(n){if(n.propertyName==="value"&&el(Yo)){var r=[];jf(r,Yo,n,G(n)),Fn(c0,r)}}function h0(n,r,l){n==="focusin"?(qf(),Xo=r,Yo=l,Xo.attachEvent("onpropertychange",Kf)):n==="focusout"&&qf()}function d0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return el(Yo)}function f0(n,r){if(n==="click")return el(r)}function p0(n,r){if(n==="input"||n==="change")return el(r)}function m0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var pi=typeof Object.is=="function"?Object.is:m0;function qo(n,r){if(pi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!d.call(r,p)||!pi(n[p],r[p]))return!1}return!0}function $f(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zf(n,r){var l=$f(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=r&&h>=r)return{node:l,offset:r-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=$f(l)}}function Qf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Qf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Jf(){for(var n=window,r=kt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=kt(n.document)}return r}function iu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function g0(n){var r=Jf(),l=n.focusedElem,h=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Qf(l.ownerDocument.documentElement,l)){if(h!==null&&iu(l)){if(r=h.start,n=h.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(h.start,p);h=h.end===void 0?v:Math.min(h.end,p),!n.extend&&v>h&&(p=h,h=v,v=p),p=Zf(l,v);var T=Zf(l,h);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>h?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _0=u&&"documentMode"in document&&11>=document.documentMode,Ds=null,ru=null,Ko=null,su=!1;function ep(n,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;su||Ds==null||Ds!==kt(h)||(h=Ds,"selectionStart"in h&&iu(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ko&&qo(Ko,h)||(Ko=h,h=rl(ru,"onSelect"),0<h.length&&(r=new Kc("onSelect","select",null,r,l),n.push({event:r,listeners:h}),r.target=Ds)))}function tl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ns={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},ou={},tp={};u&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function nl(n){if(ou[n])return ou[n];if(!Ns[n])return n;var r=Ns[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in tp)return ou[n]=r[l];return n}var np=nl("animationend"),ip=nl("animationiteration"),rp=nl("animationstart"),sp=nl("transitionend"),op=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(n,r){op.set(n,r),a(r,[n])}for(var au=0;au<ap.length;au++){var lu=ap[au],v0=lu.toLowerCase(),x0=lu[0].toUpperCase()+lu.slice(1);Er(v0,"on"+x0)}Er(np,"onAnimationEnd"),Er(ip,"onAnimationIteration"),Er(rp,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(sp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function lp(n,r,l){var h=n.type||"unknown-event";n.currentTarget=l,Va(h,r,void 0,n),n.currentTarget=null}function cp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],p=h.event;h=h.listeners;e:{var v=void 0;if(r)for(var T=h.length-1;0<=T;T--){var N=h[T],F=N.instance,ee=N.currentTarget;if(N=N.listener,F!==v&&p.isPropagationStopped())break e;lp(p,N,ee),v=F}else for(T=0;T<h.length;T++){if(N=h[T],F=N.instance,ee=N.currentTarget,N=N.listener,F!==v&&p.isPropagationStopped())break e;lp(p,N,ee),v=F}}}if(Jr)throw n=_r,Jr=!1,_r=null,n}function Ht(n,r){var l=r[gu];l===void 0&&(l=r[gu]=new Set);var h=n+"__bubble";l.has(h)||(up(r,n,2,!1),l.add(h))}function cu(n,r,l){var h=0;r&&(h|=4),up(l,n,h,r)}var il="_reactListening"+Math.random().toString(36).slice(2);function Zo(n){if(!n[il]){n[il]=!0,i.forEach(function(l){l!=="selectionchange"&&(y0.has(l)||cu(l,!1,n),cu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[il]||(r[il]=!0,cu("selectionchange",!1,r))}}function up(n,r,l,h){switch(Nf(r)){case 1:var p=Iv;break;case 4:p=Uv;break;default:p=Xc}l=p.bind(null,r,l,n),p=void 0,!Rs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),h?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function uu(n,r,l,h,p){var v=h;if((r&1)===0&&(r&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var N=h.stateNode.containerInfo;if(N===p||N.nodeType===8&&N.parentNode===p)break;if(T===4)for(T=h.return;T!==null;){var F=T.tag;if((F===3||F===4)&&(F=T.stateNode.containerInfo,F===p||F.nodeType===8&&F.parentNode===p))return;T=T.return}for(;N!==null;){if(T=es(N),T===null)return;if(F=T.tag,F===5||F===6){h=v=T;continue e}N=N.parentNode}}h=h.return}Fn(function(){var ee=v,ve=G(l),ye=[];e:{var ge=op.get(n);if(ge!==void 0){var De=Kc,Be=n;switch(n){case"keypress":if(Za(l)===0)break e;case"keydown":case"keyup":De=$v;break;case"focusin":Be="focus",De=Qc;break;case"focusout":Be="blur",De=Qc;break;case"beforeblur":case"afterblur":De=Qc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=Of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Jv;break;case np:case ip:case rp:De=Hv;break;case sp:De=t0;break;case"scroll":De=Ov;break;case"wheel":De=i0;break;case"copy":case"cut":case"paste":De=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=kf}var He=(r&4)!==0,Kt=!He&&n==="scroll",K=He?ge!==null?ge+"Capture":null:ge;He=[];for(var V=ee,$;V!==null;){$=V;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,K!==null&&(Te=An(V,K),Te!=null&&He.push(Qo(V,Te,$)))),Kt)break;V=V.return}0<He.length&&(ge=new De(ge,Be,null,l,ve),ye.push({event:ge,listeners:He}))}}if((r&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",De=n==="mouseout"||n==="pointerout",ge&&l!==bt&&(Be=l.relatedTarget||l.fromElement)&&(es(Be)||Be[qi]))break e;if((De||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,De?(Be=l.relatedTarget||l.toElement,De=ee,Be=Be?es(Be):null,Be!==null&&(Kt=Ci(Be),Be!==Kt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(De=null,Be=ee),De!==Be)){if(He=Of,Te="onMouseLeave",K="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(He=kf,Te="onPointerLeave",K="onPointerEnter",V="pointer"),Kt=De==null?ge:Os(De),$=Be==null?ge:Os(Be),ge=new He(Te,V+"leave",De,l,ve),ge.target=Kt,ge.relatedTarget=$,Te=null,es(ve)===ee&&(He=new He(K,V+"enter",Be,l,ve),He.target=$,He.relatedTarget=Kt,Te=He),Kt=Te,De&&Be)t:{for(He=De,K=Be,V=0,$=He;$;$=Is($))V++;for($=0,Te=K;Te;Te=Is(Te))$++;for(;0<V-$;)He=Is(He),V--;for(;0<$-V;)K=Is(K),$--;for(;V--;){if(He===K||K!==null&&He===K.alternate)break t;He=Is(He),K=Is(K)}He=null}else He=null;De!==null&&hp(ye,ge,De,He,!1),Be!==null&&Kt!==null&&hp(ye,Kt,Be,He,!0)}}e:{if(ge=ee?Os(ee):window,De=ge.nodeName&&ge.nodeName.toLowerCase(),De==="select"||De==="input"&&ge.type==="file")var je=u0;else if(Wf(ge))if(Xf)je=p0;else{je=d0;var Ke=h0}else(De=ge.nodeName)&&De.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=f0);if(je&&(je=je(n,ee))){jf(ye,je,l,ve);break e}Ke&&Ke(n,ge,ee),n==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&Ct(ge,"number",ge.value)}switch(Ke=ee?Os(ee):window,n){case"focusin":(Wf(Ke)||Ke.contentEditable==="true")&&(Ds=Ke,ru=ee,Ko=null);break;case"focusout":Ko=ru=Ds=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,ep(ye,l,ve);break;case"selectionchange":if(_0)break;case"keydown":case"keyup":ep(ye,l,ve)}var $e;if(eu)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else Ls?Vf(n,l)&&(it="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(it="onCompositionStart");it&&(Bf&&l.locale!=="ko"&&(Ls||it!=="onCompositionStart"?it==="onCompositionEnd"&&Ls&&($e=If()):(Mr=ve,qc="value"in Mr?Mr.value:Mr.textContent,Ls=!0)),Ke=rl(ee,it),0<Ke.length&&(it=new Ff(it,n,null,l,ve),ye.push({event:it,listeners:Ke}),$e?it.data=$e:($e=Gf(l),$e!==null&&(it.data=$e)))),($e=s0?o0(n,l):a0(n,l))&&(ee=rl(ee,"onBeforeInput"),0<ee.length&&(ve=new Ff("onBeforeInput","beforeinput",null,l,ve),ye.push({event:ve,listeners:ee}),ve.data=$e))}cp(ye,r)})}function Qo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function rl(n,r){for(var l=r+"Capture",h=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=An(n,l),v!=null&&h.unshift(Qo(n,v,p)),v=An(n,r),v!=null&&h.push(Qo(n,v,p))),n=n.return}return h}function Is(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hp(n,r,l,h,p){for(var v=r._reactName,T=[];l!==null&&l!==h;){var N=l,F=N.alternate,ee=N.stateNode;if(F!==null&&F===h)break;N.tag===5&&ee!==null&&(N=ee,p?(F=An(l,v),F!=null&&T.unshift(Qo(l,F,N))):p||(F=An(l,v),F!=null&&T.push(Qo(l,F,N)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var S0=/\r\n?/g,M0=/\u0000|\uFFFD/g;function dp(n){return(typeof n=="string"?n:""+n).replace(S0,`
`).replace(M0,"")}function sl(n,r,l){if(r=dp(r),dp(n)!==r&&l)throw Error(t(425))}function ol(){}var hu=null,du=null;function fu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,T0=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(n){return fp.resolve(null).then(n).catch(w0)}:pu;function w0(n){setTimeout(function(){throw n})}function mu(n,r){var l=r,h=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){n.removeChild(p),Vo(r);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Vo(r)}function Tr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function pp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Li="__reactFiber$"+Us,Jo="__reactProps$"+Us,qi="__reactContainer$"+Us,gu="__reactEvents$"+Us,A0="__reactListeners$"+Us,R0="__reactHandles$"+Us;function es(n){var r=n[Li];if(r)return r;for(var l=n.parentNode;l;){if(r=l[qi]||l[Li]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=pp(n);n!==null;){if(l=n[Li])return l;n=pp(n)}return r}n=l,l=n.parentNode}return null}function ea(n){return n=n[Li]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function al(n){return n[Jo]||null}var _u=[],Fs=-1;function wr(n){return{current:n}}function Vt(n){0>Fs||(n.current=_u[Fs],_u[Fs]=null,Fs--)}function Bt(n,r){Fs++,_u[Fs]=n.current,n.current=r}var Ar={},xn=wr(Ar),Bn=wr(!1),ts=Ar;function ks(n,r){var l=n.type.contextTypes;if(!l)return Ar;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function zn(n){return n=n.childContextTypes,n!=null}function ll(){Vt(Bn),Vt(xn)}function mp(n,r,l){if(xn.current!==Ar)throw Error(t(168));Bt(xn,r),Bt(Bn,l)}function gp(n,r,l){var h=n.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in r))throw Error(t(108,xe(n)||"Unknown",p));return oe({},l,h)}function cl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ar,ts=xn.current,Bt(xn,n),Bt(Bn,Bn.current),!0}function _p(n,r,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=gp(n,r,ts),h.__reactInternalMemoizedMergedChildContext=n,Vt(Bn),Vt(xn),Bt(xn,n)):Vt(Bn),Bt(Bn,l)}var Ki=null,ul=!1,vu=!1;function vp(n){Ki===null?Ki=[n]:Ki.push(n)}function b0(n){ul=!0,vp(n)}function Rr(){if(!vu&&Ki!==null){vu=!0;var n=0,r=Pt;try{var l=Ki;for(Pt=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}Ki=null,ul=!1}catch(p){throw Ki!==null&&(Ki=Ki.slice(n+1)),te(ze,Rr),p}finally{Pt=r,vu=!1}}return null}var Bs=[],zs=0,hl=null,dl=0,ii=[],ri=0,ns=null,$i=1,Zi="";function is(n,r){Bs[zs++]=dl,Bs[zs++]=hl,hl=n,dl=r}function xp(n,r,l){ii[ri++]=$i,ii[ri++]=Zi,ii[ri++]=ns,ns=n;var h=$i;n=Zi;var p=32-lt(h)-1;h&=~(1<<p),l+=1;var v=32-lt(r)+p;if(30<v){var T=p-p%5;v=(h&(1<<T)-1).toString(32),h>>=T,p-=T,$i=1<<32-lt(r)+p|l<<p|h,Zi=v+n}else $i=1<<v|l<<p|h,Zi=n}function xu(n){n.return!==null&&(is(n,1),xp(n,1,0))}function yu(n){for(;n===hl;)hl=Bs[--zs],Bs[zs]=null,dl=Bs[--zs],Bs[zs]=null;for(;n===ns;)ns=ii[--ri],ii[ri]=null,Zi=ii[--ri],ii[ri]=null,$i=ii[--ri],ii[ri]=null}var qn=null,Kn=null,Gt=!1,mi=null;function yp(n,r){var l=li(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Sp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,qn=n,Kn=Tr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,qn=n,Kn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ns!==null?{id:$i,overflow:Zi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=li(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,qn=n,Kn=null,!0):!1;default:return!1}}function Su(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Mu(n){if(Gt){var r=Kn;if(r){var l=r;if(!Sp(n,r)){if(Su(n))throw Error(t(418));r=Tr(l.nextSibling);var h=qn;r&&Sp(n,r)?yp(h,l):(n.flags=n.flags&-4097|2,Gt=!1,qn=n)}}else{if(Su(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,qn=n}}}function Mp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;qn=n}function fl(n){if(n!==qn)return!1;if(!Gt)return Mp(n),Gt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!fu(n.type,n.memoizedProps)),r&&(r=Kn)){if(Su(n))throw Ep(),Error(t(418));for(;r;)yp(n,r),r=Tr(r.nextSibling)}if(Mp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Kn=Tr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Kn=null}}else Kn=qn?Tr(n.stateNode.nextSibling):null;return!0}function Ep(){for(var n=Kn;n;)n=Tr(n.nextSibling)}function Hs(){Kn=qn=null,Gt=!1}function Eu(n){mi===null?mi=[n]:mi.push(n)}var C0=R.ReactCurrentBatchConfig;function ta(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var p=h,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var N=p.refs;T===null?delete N[v]:N[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function pl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Tp(n){var r=n._init;return r(n._payload)}function wp(n){function r(K,V){if(n){var $=K.deletions;$===null?(K.deletions=[V],K.flags|=16):$.push(V)}}function l(K,V){if(!n)return null;for(;V!==null;)r(K,V),V=V.sibling;return null}function h(K,V){for(K=new Map;V!==null;)V.key!==null?K.set(V.key,V):K.set(V.index,V),V=V.sibling;return K}function p(K,V){return K=Ur(K,V),K.index=0,K.sibling=null,K}function v(K,V,$){return K.index=$,n?($=K.alternate,$!==null?($=$.index,$<V?(K.flags|=2,V):$):(K.flags|=2,V)):(K.flags|=1048576,V)}function T(K){return n&&K.alternate===null&&(K.flags|=2),K}function N(K,V,$,Te){return V===null||V.tag!==6?(V=ph($,K.mode,Te),V.return=K,V):(V=p(V,$),V.return=K,V)}function F(K,V,$,Te){var je=$.type;return je===I?ve(K,V,$.props.children,Te,$.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&Tp(je)===V.type)?(Te=p(V,$.props),Te.ref=ta(K,V,$),Te.return=K,Te):(Te=kl($.type,$.key,$.props,null,K.mode,Te),Te.ref=ta(K,V,$),Te.return=K,Te)}function ee(K,V,$,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=mh($,K.mode,Te),V.return=K,V):(V=p(V,$.children||[]),V.return=K,V)}function ve(K,V,$,Te,je){return V===null||V.tag!==7?(V=hs($,K.mode,Te,je),V.return=K,V):(V=p(V,$),V.return=K,V)}function ye(K,V,$){if(typeof V=="string"&&V!==""||typeof V=="number")return V=ph(""+V,K.mode,$),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case X:return $=kl(V.type,V.key,V.props,null,K.mode,$),$.ref=ta(K,null,V),$.return=K,$;case O:return V=mh(V,K.mode,$),V.return=K,V;case ae:var Te=V._init;return ye(K,Te(V._payload),$)}if(Ye(V)||ce(V))return V=hs(V,K.mode,$,null),V.return=K,V;pl(K,V)}return null}function ge(K,V,$,Te){var je=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return je!==null?null:N(K,V,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case X:return $.key===je?F(K,V,$,Te):null;case O:return $.key===je?ee(K,V,$,Te):null;case ae:return je=$._init,ge(K,V,je($._payload),Te)}if(Ye($)||ce($))return je!==null?null:ve(K,V,$,Te,null);pl(K,$)}return null}function De(K,V,$,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return K=K.get($)||null,N(V,K,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case X:return K=K.get(Te.key===null?$:Te.key)||null,F(V,K,Te,je);case O:return K=K.get(Te.key===null?$:Te.key)||null,ee(V,K,Te,je);case ae:var Ke=Te._init;return De(K,V,$,Ke(Te._payload),je)}if(Ye(Te)||ce(Te))return K=K.get($)||null,ve(V,K,Te,je,null);pl(V,Te)}return null}function Be(K,V,$,Te){for(var je=null,Ke=null,$e=V,it=V=0,ln=null;$e!==null&&it<$.length;it++){$e.index>it?(ln=$e,$e=null):ln=$e.sibling;var wt=ge(K,$e,$[it],Te);if(wt===null){$e===null&&($e=ln);break}n&&$e&&wt.alternate===null&&r(K,$e),V=v(wt,V,it),Ke===null?je=wt:Ke.sibling=wt,Ke=wt,$e=ln}if(it===$.length)return l(K,$e),Gt&&is(K,it),je;if($e===null){for(;it<$.length;it++)$e=ye(K,$[it],Te),$e!==null&&(V=v($e,V,it),Ke===null?je=$e:Ke.sibling=$e,Ke=$e);return Gt&&is(K,it),je}for($e=h(K,$e);it<$.length;it++)ln=De($e,K,it,$[it],Te),ln!==null&&(n&&ln.alternate!==null&&$e.delete(ln.key===null?it:ln.key),V=v(ln,V,it),Ke===null?je=ln:Ke.sibling=ln,Ke=ln);return n&&$e.forEach(function(Or){return r(K,Or)}),Gt&&is(K,it),je}function He(K,V,$,Te){var je=ce($);if(typeof je!="function")throw Error(t(150));if($=je.call($),$==null)throw Error(t(151));for(var Ke=je=null,$e=V,it=V=0,ln=null,wt=$.next();$e!==null&&!wt.done;it++,wt=$.next()){$e.index>it?(ln=$e,$e=null):ln=$e.sibling;var Or=ge(K,$e,wt.value,Te);if(Or===null){$e===null&&($e=ln);break}n&&$e&&Or.alternate===null&&r(K,$e),V=v(Or,V,it),Ke===null?je=Or:Ke.sibling=Or,Ke=Or,$e=ln}if(wt.done)return l(K,$e),Gt&&is(K,it),je;if($e===null){for(;!wt.done;it++,wt=$.next())wt=ye(K,wt.value,Te),wt!==null&&(V=v(wt,V,it),Ke===null?je=wt:Ke.sibling=wt,Ke=wt);return Gt&&is(K,it),je}for($e=h(K,$e);!wt.done;it++,wt=$.next())wt=De($e,K,it,wt.value,Te),wt!==null&&(n&&wt.alternate!==null&&$e.delete(wt.key===null?it:wt.key),V=v(wt,V,it),Ke===null?je=wt:Ke.sibling=wt,Ke=wt);return n&&$e.forEach(function(lx){return r(K,lx)}),Gt&&is(K,it),je}function Kt(K,V,$,Te){if(typeof $=="object"&&$!==null&&$.type===I&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case X:e:{for(var je=$.key,Ke=V;Ke!==null;){if(Ke.key===je){if(je=$.type,je===I){if(Ke.tag===7){l(K,Ke.sibling),V=p(Ke,$.props.children),V.return=K,K=V;break e}}else if(Ke.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&Tp(je)===Ke.type){l(K,Ke.sibling),V=p(Ke,$.props),V.ref=ta(K,Ke,$),V.return=K,K=V;break e}l(K,Ke);break}else r(K,Ke);Ke=Ke.sibling}$.type===I?(V=hs($.props.children,K.mode,Te,$.key),V.return=K,K=V):(Te=kl($.type,$.key,$.props,null,K.mode,Te),Te.ref=ta(K,V,$),Te.return=K,K=Te)}return T(K);case O:e:{for(Ke=$.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){l(K,V.sibling),V=p(V,$.children||[]),V.return=K,K=V;break e}else{l(K,V);break}else r(K,V);V=V.sibling}V=mh($,K.mode,Te),V.return=K,K=V}return T(K);case ae:return Ke=$._init,Kt(K,V,Ke($._payload),Te)}if(Ye($))return Be(K,V,$,Te);if(ce($))return He(K,V,$,Te);pl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,V!==null&&V.tag===6?(l(K,V.sibling),V=p(V,$),V.return=K,K=V):(l(K,V),V=ph($,K.mode,Te),V.return=K,K=V),T(K)):l(K,V)}return Kt}var Vs=wp(!0),Ap=wp(!1),ml=wr(null),gl=null,Gs=null,Tu=null;function wu(){Tu=Gs=gl=null}function Au(n){var r=ml.current;Vt(ml),n._currentValue=r}function Ru(n,r,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),n===l)break;n=n.return}}function Ws(n,r){gl=n,Tu=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Hn=!0),n.firstContext=null)}function si(n){var r=n._currentValue;if(Tu!==n)if(n={context:n,memoizedValue:r,next:null},Gs===null){if(gl===null)throw Error(t(308));Gs=n,gl.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return r}var rs=null;function bu(n){rs===null?rs=[n]:rs.push(n)}function Rp(n,r,l,h){var p=r.interleaved;return p===null?(l.next=l,bu(r)):(l.next=p.next,p.next=l),r.interleaved=l,Qi(n,h)}function Qi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var br=!1;function Cu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ji(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Cr(n,r,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,(Et&2)!==0){var p=h.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),h.pending=r,Qi(n,l)}return p=h.interleaved,p===null?(r.next=r,bu(h)):(r.next=p.next,p.next=r),h.interleaved=r,Qi(n,l)}function _l(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Gc(n,l)}}function Cp(n,r){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function vl(n,r,l,h){var p=n.updateQueue;br=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,N=p.shared.pending;if(N!==null){p.shared.pending=null;var F=N,ee=F.next;F.next=null,T===null?v=ee:T.next=ee,T=F;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,N=ve.lastBaseUpdate,N!==T&&(N===null?ve.firstBaseUpdate=ee:N.next=ee,ve.lastBaseUpdate=F))}if(v!==null){var ye=p.baseState;T=0,ve=ee=F=null,N=v;do{var ge=N.lane,De=N.eventTime;if((h&ge)===ge){ve!==null&&(ve=ve.next={eventTime:De,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Be=n,He=N;switch(ge=r,De=l,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){ye=Be.call(De,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ge=typeof Be=="function"?Be.call(De,ye,ge):Be,ge==null)break e;ye=oe({},ye,ge);break e;case 2:br=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,ge=p.effects,ge===null?p.effects=[N]:ge.push(N))}else De={eventTime:De,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ve===null?(ee=ve=De,F=ye):ve=ve.next=De,T|=ge;if(N=N.next,N===null){if(N=p.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);if(ve===null&&(F=ye),p.baseState=F,p.firstBaseUpdate=ee,p.lastBaseUpdate=ve,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);as|=T,n.lanes=T,n.memoizedState=ye}}function Pp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var h=n[r],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var na={},Di=wr(na),ia=wr(na),ra=wr(na);function ss(n){if(n===na)throw Error(t(174));return n}function Pu(n,r){switch(Bt(ra,r),Bt(ia,n),Bt(Di,na),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ve(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ve(r,n)}Vt(Di),Bt(Di,r)}function js(){Vt(Di),Vt(ia),Vt(ra)}function Lp(n){ss(ra.current);var r=ss(Di.current),l=Ve(r,n.type);r!==l&&(Bt(ia,n),Bt(Di,l))}function Lu(n){ia.current===n&&(Vt(Di),Vt(ia))}var Xt=wr(0);function xl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Du=[];function Nu(){for(var n=0;n<Du.length;n++)Du[n]._workInProgressVersionPrimary=null;Du.length=0}var yl=R.ReactCurrentDispatcher,Iu=R.ReactCurrentBatchConfig,os=0,Yt=null,en=null,on=null,Sl=!1,sa=!1,oa=0,P0=0;function yn(){throw Error(t(321))}function Uu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!pi(n[l],r[l]))return!1;return!0}function Ou(n,r,l,h,p,v){if(os=v,Yt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,yl.current=n===null||n.memoizedState===null?I0:U0,n=l(h,p),sa){v=0;do{if(sa=!1,oa=0,25<=v)throw Error(t(301));v+=1,on=en=null,r.updateQueue=null,yl.current=O0,n=l(h,p)}while(sa)}if(yl.current=Tl,r=en!==null&&en.next!==null,os=0,on=en=Yt=null,Sl=!1,r)throw Error(t(300));return n}function Fu(){var n=oa!==0;return oa=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Yt.memoizedState=on=n:on=on.next=n,on}function oi(){if(en===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var r=on===null?Yt.memoizedState:on.next;if(r!==null)on=r,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},on===null?Yt.memoizedState=on=n:on=on.next=n}return on}function aa(n,r){return typeof r=="function"?r(n):r}function ku(n){var r=oi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=en,p=h.baseQueue,v=l.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}h.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,h=h.baseState;var N=T=null,F=null,ee=v;do{var ve=ee.lane;if((os&ve)===ve)F!==null&&(F=F.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),h=ee.hasEagerState?ee.eagerState:n(h,ee.action);else{var ye={lane:ve,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};F===null?(N=F=ye,T=h):F=F.next=ye,Yt.lanes|=ve,as|=ve}ee=ee.next}while(ee!==null&&ee!==v);F===null?T=h:F.next=N,pi(h,r.memoizedState)||(Hn=!0),r.memoizedState=h,r.baseState=T,r.baseQueue=F,l.lastRenderedState=h}if(n=l.interleaved,n!==null){p=n;do v=p.lane,Yt.lanes|=v,as|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Bu(n){var r=oi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do v=n(v,T.action),T=T.next;while(T!==p);pi(v,r.memoizedState)||(Hn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,h]}function Dp(){}function Np(n,r){var l=Yt,h=oi(),p=r(),v=!pi(h.memoizedState,p);if(v&&(h.memoizedState=p,Hn=!0),h=h.queue,zu(Op.bind(null,l,h,n),[n]),h.getSnapshot!==r||v||on!==null&&on.memoizedState.tag&1){if(l.flags|=2048,la(9,Up.bind(null,l,h,p,r),void 0,null),an===null)throw Error(t(349));(os&30)!==0||Ip(l,r,p)}return p}function Ip(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Up(n,r,l,h){r.value=l,r.getSnapshot=h,Fp(r)&&kp(n)}function Op(n,r,l){return l(function(){Fp(r)&&kp(n)})}function Fp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!pi(n,l)}catch{return!0}}function kp(n){var r=Qi(n,1);r!==null&&xi(r,n,1,-1)}function Bp(n){var r=Ni();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:n},r.queue=n,n=n.dispatch=N0.bind(null,Yt,n),[r.memoizedState,n]}function la(n,r,l,h){return n={tag:n,create:r,destroy:l,deps:h,next:null},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,r.lastEffect=n)),n}function zp(){return oi().memoizedState}function Ml(n,r,l,h){var p=Ni();Yt.flags|=n,p.memoizedState=la(1|r,l,void 0,h===void 0?null:h)}function El(n,r,l,h){var p=oi();h=h===void 0?null:h;var v=void 0;if(en!==null){var T=en.memoizedState;if(v=T.destroy,h!==null&&Uu(h,T.deps)){p.memoizedState=la(r,l,v,h);return}}Yt.flags|=n,p.memoizedState=la(1|r,l,v,h)}function Hp(n,r){return Ml(8390656,8,n,r)}function zu(n,r){return El(2048,8,n,r)}function Vp(n,r){return El(4,2,n,r)}function Gp(n,r){return El(4,4,n,r)}function Wp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function jp(n,r,l){return l=l!=null?l.concat([n]):null,El(4,4,Wp.bind(null,r,n),l)}function Hu(){}function Xp(n,r){var l=oi();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Uu(r,h[1])?h[0]:(l.memoizedState=[n,r],n)}function Yp(n,r){var l=oi();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Uu(r,h[1])?h[0]:(n=n(),l.memoizedState=[n,r],n)}function qp(n,r,l){return(os&21)===0?(n.baseState&&(n.baseState=!1,Hn=!0),n.memoizedState=l):(pi(l,r)||(l=Rn(),Yt.lanes|=l,as|=l,n.baseState=!0),r)}function L0(n,r){var l=Pt;Pt=l!==0&&4>l?l:4,n(!0);var h=Iu.transition;Iu.transition={};try{n(!1),r()}finally{Pt=l,Iu.transition=h}}function Kp(){return oi().memoizedState}function D0(n,r,l){var h=Nr(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},$p(n))Zp(r,l);else if(l=Rp(n,r,l,h),l!==null){var p=Cn();xi(l,n,h,p),Qp(l,r,h)}}function N0(n,r,l){var h=Nr(n),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if($p(n))Zp(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,N=v(T,l);if(p.hasEagerState=!0,p.eagerState=N,pi(N,T)){var F=r.interleaved;F===null?(p.next=p,bu(r)):(p.next=F.next,F.next=p),r.interleaved=p;return}}catch{}finally{}l=Rp(n,r,p,h),l!==null&&(p=Cn(),xi(l,n,h,p),Qp(l,r,h))}}function $p(n){var r=n.alternate;return n===Yt||r!==null&&r===Yt}function Zp(n,r){sa=Sl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Qp(n,r,l){if((l&4194240)!==0){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Gc(n,l)}}var Tl={readContext:si,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},I0={readContext:si,useCallback:function(n,r){return Ni().memoizedState=[n,r===void 0?null:r],n},useContext:si,useEffect:Hp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Ml(4194308,4,Wp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Ml(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ml(4,2,n,r)},useMemo:function(n,r){var l=Ni();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var h=Ni();return r=l!==void 0?l(r):r,h.memoizedState=h.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},h.queue=n,n=n.dispatch=D0.bind(null,Yt,n),[h.memoizedState,n]},useRef:function(n){var r=Ni();return n={current:n},r.memoizedState=n},useState:Bp,useDebugValue:Hu,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=Bp(!1),r=n[0];return n=L0.bind(null,n[1]),Ni().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var h=Yt,p=Ni();if(Gt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),an===null)throw Error(t(349));(os&30)!==0||Ip(h,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,Hp(Op.bind(null,h,v,n),[n]),h.flags|=2048,la(9,Up.bind(null,h,v,l,r),void 0,null),l},useId:function(){var n=Ni(),r=an.identifierPrefix;if(Gt){var l=Zi,h=$i;l=(h&~(1<<32-lt(h)-1)).toString(32)+l,r=":"+r+"R"+l,l=oa++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=P0++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},U0={readContext:si,useCallback:Xp,useContext:si,useEffect:zu,useImperativeHandle:jp,useInsertionEffect:Vp,useLayoutEffect:Gp,useMemo:Yp,useReducer:ku,useRef:zp,useState:function(){return ku(aa)},useDebugValue:Hu,useDeferredValue:function(n){var r=oi();return qp(r,en.memoizedState,n)},useTransition:function(){var n=ku(aa)[0],r=oi().memoizedState;return[n,r]},useMutableSource:Dp,useSyncExternalStore:Np,useId:Kp,unstable_isNewReconciler:!1},O0={readContext:si,useCallback:Xp,useContext:si,useEffect:zu,useImperativeHandle:jp,useInsertionEffect:Vp,useLayoutEffect:Gp,useMemo:Yp,useReducer:Bu,useRef:zp,useState:function(){return Bu(aa)},useDebugValue:Hu,useDeferredValue:function(n){var r=oi();return en===null?r.memoizedState=n:qp(r,en.memoizedState,n)},useTransition:function(){var n=Bu(aa)[0],r=oi().memoizedState;return[n,r]},useMutableSource:Dp,useSyncExternalStore:Np,useId:Kp,unstable_isNewReconciler:!1};function gi(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Vu(n,r,l,h){r=n.memoizedState,l=l(h,r),l=l==null?r:oe({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var wl={isMounted:function(n){return(n=n._reactInternals)?Ci(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var h=Cn(),p=Nr(n),v=Ji(h,p);v.payload=r,l!=null&&(v.callback=l),r=Cr(n,v,p),r!==null&&(xi(r,n,p,h),_l(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var h=Cn(),p=Nr(n),v=Ji(h,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Cr(n,v,p),r!==null&&(xi(r,n,p,h),_l(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Cn(),h=Nr(n),p=Ji(l,h);p.tag=2,r!=null&&(p.callback=r),r=Cr(n,p,h),r!==null&&(xi(r,n,h,l),_l(r,n,h))}};function Jp(n,r,l,h,p,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,v,T):r.prototype&&r.prototype.isPureReactComponent?!qo(l,h)||!qo(p,v):!0}function em(n,r,l){var h=!1,p=Ar,v=r.contextType;return typeof v=="object"&&v!==null?v=si(v):(p=zn(r)?ts:xn.current,h=r.contextTypes,v=(h=h!=null)?ks(n,p):Ar),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=wl,n.stateNode=r,r._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function tm(n,r,l,h){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==n&&wl.enqueueReplaceState(r,r.state,null)}function Gu(n,r,l,h){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Cu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=si(v):(v=zn(r)?ts:xn.current,p.context=ks(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Vu(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&wl.enqueueReplaceState(p,p.state,null),vl(n,l,p,h),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,r){try{var l="",h=r;do l+=de(h),h=h.return;while(h);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function Wu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function ju(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var F0=typeof WeakMap=="function"?WeakMap:Map;function nm(n,r,l){l=Ji(-1,l),l.tag=3,l.payload={element:null};var h=r.value;return l.callback=function(){Dl||(Dl=!0,oh=h),ju(n,r)},l}function im(n,r,l){l=Ji(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var p=r.value;l.payload=function(){return h(p)},l.callback=function(){ju(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){ju(n,r),typeof h!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function rm(n,r,l){var h=n.pingCache;if(h===null){h=n.pingCache=new F0;var p=new Set;h.set(r,p)}else p=h.get(r),p===void 0&&(p=new Set,h.set(r,p));p.has(l)||(p.add(l),n=Z0.bind(null,n,r,l),r.then(n,n))}function sm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function om(n,r,l,h,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Ji(-1,1),r.tag=2,Cr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var k0=R.ReactCurrentOwner,Hn=!1;function bn(n,r,l,h){r.child=n===null?Ap(r,null,l,h):Vs(r,n.child,l,h)}function am(n,r,l,h,p){l=l.render;var v=r.ref;return Ws(r,p),h=Ou(n,r,l,h,v,p),l=Fu(),n!==null&&!Hn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,er(n,r,p)):(Gt&&l&&xu(r),r.flags|=1,bn(n,r,h,p),r.child)}function lm(n,r,l,h,p){if(n===null){var v=l.type;return typeof v=="function"&&!fh(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,cm(n,r,v,h,p)):(n=kl(l.type,null,h,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:qo,l(T,h)&&n.ref===r.ref)return er(n,r,p)}return r.flags|=1,n=Ur(v,h),n.ref=r.ref,n.return=r,r.child=n}function cm(n,r,l,h,p){if(n!==null){var v=n.memoizedProps;if(qo(v,h)&&n.ref===r.ref)if(Hn=!1,r.pendingProps=h=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Hn=!0);else return r.lanes=n.lanes,er(n,r,p)}return Xu(n,r,l,h,p)}function um(n,r,l){var h=r.pendingProps,p=h.children,v=n!==null?n.memoizedState:null;if(h.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(qs,$n),$n|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Bt(qs,$n),$n|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,Bt(qs,$n),$n|=h}else v!==null?(h=v.baseLanes|l,r.memoizedState=null):h=l,Bt(qs,$n),$n|=h;return bn(n,r,p,l),r.child}function hm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Xu(n,r,l,h,p){var v=zn(l)?ts:xn.current;return v=ks(r,v),Ws(r,p),l=Ou(n,r,l,h,v,p),h=Fu(),n!==null&&!Hn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,er(n,r,p)):(Gt&&h&&xu(r),r.flags|=1,bn(n,r,l,p),r.child)}function dm(n,r,l,h,p){if(zn(l)){var v=!0;cl(r)}else v=!1;if(Ws(r,p),r.stateNode===null)Rl(n,r),em(r,l,h),Gu(r,l,h,p),h=!0;else if(n===null){var T=r.stateNode,N=r.memoizedProps;T.props=N;var F=T.context,ee=l.contextType;typeof ee=="object"&&ee!==null?ee=si(ee):(ee=zn(l)?ts:xn.current,ee=ks(r,ee));var ve=l.getDerivedStateFromProps,ye=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==h||F!==ee)&&tm(r,T,h,ee),br=!1;var ge=r.memoizedState;T.state=ge,vl(r,h,T,p),F=r.memoizedState,N!==h||ge!==F||Bn.current||br?(typeof ve=="function"&&(Vu(r,l,ve,h),F=r.memoizedState),(N=br||Jp(r,l,N,h,ge,F,ee))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=F),T.props=h,T.state=F,T.context=ee,h=N):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{T=r.stateNode,bp(n,r),N=r.memoizedProps,ee=r.type===r.elementType?N:gi(r.type,N),T.props=ee,ye=r.pendingProps,ge=T.context,F=l.contextType,typeof F=="object"&&F!==null?F=si(F):(F=zn(l)?ts:xn.current,F=ks(r,F));var De=l.getDerivedStateFromProps;(ve=typeof De=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==ye||ge!==F)&&tm(r,T,h,F),br=!1,ge=r.memoizedState,T.state=ge,vl(r,h,T,p);var Be=r.memoizedState;N!==ye||ge!==Be||Bn.current||br?(typeof De=="function"&&(Vu(r,l,De,h),Be=r.memoizedState),(ee=br||Jp(r,l,ee,h,ge,Be,F)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,Be,F),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,Be,F)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=Be),T.props=h,T.state=Be,T.context=F,h=ee):(typeof T.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),h=!1)}return Yu(n,r,l,h,v,p)}function Yu(n,r,l,h,p,v){hm(n,r);var T=(r.flags&128)!==0;if(!h&&!T)return p&&_p(r,l,!1),er(n,r,v);h=r.stateNode,k0.current=r;var N=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,n!==null&&T?(r.child=Vs(r,n.child,null,v),r.child=Vs(r,null,N,v)):bn(n,r,N,v),r.memoizedState=h.state,p&&_p(r,l,!0),r.child}function fm(n){var r=n.stateNode;r.pendingContext?mp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&mp(n,r.context,!1),Pu(n,r.containerInfo)}function pm(n,r,l,h,p){return Hs(),Eu(p),r.flags|=256,bn(n,r,l,h),r.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Ku(n){return{baseLanes:n,cachePool:null,transitions:null}}function mm(n,r,l){var h=r.pendingProps,p=Xt.current,v=!1,T=(r.flags&128)!==0,N;if((N=T)||(N=n!==null&&n.memoizedState===null?!1:(p&2)!==0),N?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Bt(Xt,p&1),n===null)return Mu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=h.children,n=h.fallback,v?(h=r.mode,v=r.child,T={mode:"hidden",children:T},(h&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=Bl(T,h,0,null),n=hs(n,h,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Ku(l),r.memoizedState=qu,n):$u(r,T));if(p=n.memoizedState,p!==null&&(N=p.dehydrated,N!==null))return B0(n,r,T,h,N,p,l);if(v){v=h.fallback,T=r.mode,p=n.child,N=p.sibling;var F={mode:"hidden",children:h.children};return(T&1)===0&&r.child!==p?(h=r.child,h.childLanes=0,h.pendingProps=F,r.deletions=null):(h=Ur(p,F),h.subtreeFlags=p.subtreeFlags&14680064),N!==null?v=Ur(N,v):(v=hs(v,T,l,null),v.flags|=2),v.return=r,h.return=r,h.sibling=v,r.child=h,h=v,v=r.child,T=n.child.memoizedState,T=T===null?Ku(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=qu,h}return v=n.child,n=v.sibling,h=Ur(v,{mode:"visible",children:h.children}),(r.mode&1)===0&&(h.lanes=l),h.return=r,h.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=h,r.memoizedState=null,h}function $u(n,r){return r=Bl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Al(n,r,l,h){return h!==null&&Eu(h),Vs(r,n.child,null,l),n=$u(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function B0(n,r,l,h,p,v,T){if(l)return r.flags&256?(r.flags&=-257,h=Wu(Error(t(422))),Al(n,r,T,h)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=h.fallback,p=r.mode,h=Bl({mode:"visible",children:h.children},p,0,null),v=hs(v,p,T,null),v.flags|=2,h.return=r,v.return=r,h.sibling=v,r.child=h,(r.mode&1)!==0&&Vs(r,n.child,null,T),r.child.memoizedState=Ku(T),r.memoizedState=qu,v);if((r.mode&1)===0)return Al(n,r,T,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var N=h.dgst;return h=N,v=Error(t(419)),h=Wu(v,h,void 0),Al(n,r,T,h)}if(N=(T&n.childLanes)!==0,Hn||N){if(h=an,h!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Qi(n,p),xi(h,n,p,-1))}return dh(),h=Wu(Error(t(421))),Al(n,r,T,h)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Q0.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Kn=Tr(p.nextSibling),qn=r,Gt=!0,mi=null,n!==null&&(ii[ri++]=$i,ii[ri++]=Zi,ii[ri++]=ns,$i=n.id,Zi=n.overflow,ns=r),r=$u(r,h.children),r.flags|=4096,r)}function gm(n,r,l){n.lanes|=r;var h=n.alternate;h!==null&&(h.lanes|=r),Ru(n.return,r,l)}function Zu(n,r,l,h,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=p)}function _m(n,r,l){var h=r.pendingProps,p=h.revealOrder,v=h.tail;if(bn(n,r,h.children,l),h=Xt.current,(h&2)!==0)h=h&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gm(n,l,r);else if(n.tag===19)gm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(Bt(Xt,h),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&xl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Zu(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&xl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Zu(r,!0,l,null,v);break;case"together":Zu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Rl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function er(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),as|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Ur(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Ur(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function z0(n,r,l){switch(r.tag){case 3:fm(r),Hs();break;case 5:Lp(r);break;case 1:zn(r.type)&&cl(r);break;case 4:Pu(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,p=r.memoizedProps.value;Bt(ml,h._currentValue),h._currentValue=p;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(Bt(Xt,Xt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?mm(n,r,l):(Bt(Xt,Xt.current&1),n=er(n,r,l),n!==null?n.sibling:null);Bt(Xt,Xt.current&1);break;case 19:if(h=(l&r.childLanes)!==0,(n.flags&128)!==0){if(h)return _m(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Bt(Xt,Xt.current),h)break;return null;case 22:case 23:return r.lanes=0,um(n,r,l)}return er(n,r,l)}var vm,Qu,xm,ym;vm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Qu=function(){},xm=function(n,r,l,h){var p=n.memoizedProps;if(p!==h){n=r.stateNode,ss(Di.current);var v=null;switch(l){case"input":p=q(n,p),h=q(n,h),v=[];break;case"select":p=oe({},p,{value:void 0}),h=oe({},h,{value:void 0}),v=[];break;case"textarea":p=w(n,p),h=w(n,h),v=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=ol)}pt(l,h);var T;l=null;for(ee in p)if(!h.hasOwnProperty(ee)&&p.hasOwnProperty(ee)&&p[ee]!=null)if(ee==="style"){var N=p[ee];for(T in N)N.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(s.hasOwnProperty(ee)?v||(v=[]):(v=v||[]).push(ee,null));for(ee in h){var F=h[ee];if(N=p!=null?p[ee]:void 0,h.hasOwnProperty(ee)&&F!==N&&(F!=null||N!=null))if(ee==="style")if(N){for(T in N)!N.hasOwnProperty(T)||F&&F.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in F)F.hasOwnProperty(T)&&N[T]!==F[T]&&(l||(l={}),l[T]=F[T])}else l||(v||(v=[]),v.push(ee,l)),l=F;else ee==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,N=N?N.__html:void 0,F!=null&&N!==F&&(v=v||[]).push(ee,F)):ee==="children"?typeof F!="string"&&typeof F!="number"||(v=v||[]).push(ee,""+F):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(s.hasOwnProperty(ee)?(F!=null&&ee==="onScroll"&&Ht("scroll",n),v||N===F||(v=[])):(v=v||[]).push(ee,F))}l&&(v=v||[]).push("style",l);var ee=v;(r.updateQueue=ee)&&(r.flags|=4)}},ym=function(n,r,l,h){l!==h&&(r.flags|=4)};function ca(n,r){if(!Gt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function Sn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=h,n.childLanes=l,r}function H0(n,r,l){var h=r.pendingProps;switch(yu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(r),null;case 1:return zn(r.type)&&ll(),Sn(r),null;case 3:return h=r.stateNode,js(),Vt(Bn),Vt(xn),Nu(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(fl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,mi!==null&&(ch(mi),mi=null))),Qu(n,r),Sn(r),null;case 5:Lu(r);var p=ss(ra.current);if(l=r.type,n!==null&&r.stateNode!=null)xm(n,r,l,h,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return Sn(r),null}if(n=ss(Di.current),fl(r)){h=r.stateNode,l=r.type;var v=r.memoizedProps;switch(h[Li]=r,h[Jo]=v,n=(r.mode&1)!==0,l){case"dialog":Ht("cancel",h),Ht("close",h);break;case"iframe":case"object":case"embed":Ht("load",h);break;case"video":case"audio":for(p=0;p<$o.length;p++)Ht($o[p],h);break;case"source":Ht("error",h);break;case"img":case"image":case"link":Ht("error",h),Ht("load",h);break;case"details":Ht("toggle",h);break;case"input":wn(h,v),Ht("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},Ht("invalid",h);break;case"textarea":Q(h,v),Ht("invalid",h)}pt(l,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var N=v[T];T==="children"?typeof N=="string"?h.textContent!==N&&(v.suppressHydrationWarning!==!0&&sl(h.textContent,N,n),p=["children",N]):typeof N=="number"&&h.textContent!==""+N&&(v.suppressHydrationWarning!==!0&&sl(h.textContent,N,n),p=["children",""+N]):s.hasOwnProperty(T)&&N!=null&&T==="onScroll"&&Ht("scroll",h)}switch(l){case"input":It(h),qe(h,v,!0);break;case"textarea":It(h),_e(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=ol)}h=p,r.updateQueue=h,h!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=T.createElement(l,{is:h.is}):(n=T.createElement(l),l==="select"&&(T=n,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):n=T.createElementNS(n,l),n[Li]=r,n[Jo]=h,vm(n,r,!1,!1),r.stateNode=n;e:{switch(T=ot(l,h),l){case"dialog":Ht("cancel",n),Ht("close",n),p=h;break;case"iframe":case"object":case"embed":Ht("load",n),p=h;break;case"video":case"audio":for(p=0;p<$o.length;p++)Ht($o[p],n);p=h;break;case"source":Ht("error",n),p=h;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),p=h;break;case"details":Ht("toggle",n),p=h;break;case"input":wn(n,h),p=q(n,h),Ht("invalid",n);break;case"option":p=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},p=oe({},h,{value:void 0}),Ht("invalid",n);break;case"textarea":Q(n,h),p=w(n,h),Ht("invalid",n);break;default:p=h}pt(l,p),N=p;for(v in N)if(N.hasOwnProperty(v)){var F=N[v];v==="style"?et(n,F):v==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ue(n,F)):v==="children"?typeof F=="string"?(l!=="textarea"||F!=="")&&dt(n,F):typeof F=="number"&&dt(n,""+F):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?F!=null&&v==="onScroll"&&Ht("scroll",n):F!=null&&P(n,v,F,T))}switch(l){case"input":It(n),qe(n,h,!1);break;case"textarea":It(n),_e(n);break;case"option":h.value!=null&&n.setAttribute("value",""+Ae(h.value));break;case"select":n.multiple=!!h.multiple,v=h.value,v!=null?L(n,!!h.multiple,v,!1):h.defaultValue!=null&&L(n,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ol)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Sn(r),null;case 6:if(n&&r.stateNode!=null)ym(n,r,n.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(l=ss(ra.current),ss(Di.current),fl(r)){if(h=r.stateNode,l=r.memoizedProps,h[Li]=r,(v=h.nodeValue!==l)&&(n=qn,n!==null))switch(n.tag){case 3:sl(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&sl(h.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Li]=r,r.stateNode=h}return Sn(r),null;case 13:if(Vt(Xt),h=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&Kn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ep(),Hs(),r.flags|=98560,v=!1;else if(v=fl(r),h!==null&&h.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Li]=r}else Hs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Sn(r),v=!1}else mi!==null&&(ch(mi),mi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xt.current&1)!==0?tn===0&&(tn=3):dh())),r.updateQueue!==null&&(r.flags|=4),Sn(r),null);case 4:return js(),Qu(n,r),n===null&&Zo(r.stateNode.containerInfo),Sn(r),null;case 10:return Au(r.type._context),Sn(r),null;case 17:return zn(r.type)&&ll(),Sn(r),null;case 19:if(Vt(Xt),v=r.memoizedState,v===null)return Sn(r),null;if(h=(r.flags&128)!==0,T=v.rendering,T===null)if(h)ca(v,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=xl(n),T!==null){for(r.flags|=128,ca(v,!1),h=T.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=l,l=r.child;l!==null;)v=l,n=h,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Bt(Xt,Xt.current&1|2),r.child}n=n.sibling}v.tail!==null&&Me()>Ks&&(r.flags|=128,h=!0,ca(v,!1),r.lanes=4194304)}else{if(!h)if(n=xl(T),n!==null){if(r.flags|=128,h=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ca(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Gt)return Sn(r),null}else 2*Me()-v.renderingStartTime>Ks&&l!==1073741824&&(r.flags|=128,h=!0,ca(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=Me(),r.sibling=null,l=Xt.current,Bt(Xt,h?l&1|2:l&1),r):(Sn(r),null);case 22:case 23:return hh(),h=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(r.flags|=8192),h&&(r.mode&1)!==0?($n&1073741824)!==0&&(Sn(r),r.subtreeFlags&6&&(r.flags|=8192)):Sn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function V0(n,r){switch(yu(r),r.tag){case 1:return zn(r.type)&&ll(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return js(),Vt(Bn),Vt(xn),Nu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Lu(r),null;case 13:if(Vt(Xt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Hs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Vt(Xt),null;case 4:return js(),null;case 10:return Au(r.type._context),null;case 22:case 23:return hh(),null;case 24:return null;default:return null}}var bl=!1,Mn=!1,G0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ys(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){qt(n,r,h)}else l.current=null}function Ju(n,r,l){try{l()}catch(h){qt(n,r,h)}}var Sm=!1;function W0(n,r){if(hu=qa,n=Jf(),iu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,N=-1,F=-1,ee=0,ve=0,ye=n,ge=null;t:for(;;){for(var De;ye!==l||p!==0&&ye.nodeType!==3||(N=T+p),ye!==v||h!==0&&ye.nodeType!==3||(F=T+h),ye.nodeType===3&&(T+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ge=ye,ye=De;for(;;){if(ye===n)break t;if(ge===l&&++ee===p&&(N=T),ge===v&&++ve===h&&(F=T),(De=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=De}l=N===-1||F===-1?null:{start:N,end:F}}else l=null}l=l||{start:0,end:0}}else l=null;for(du={focusedElem:n,selectionRange:l},qa=!1,Oe=r;Oe!==null;)if(r=Oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Oe=n;else for(;Oe!==null;){r=Oe;try{var Be=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Kt=Be.memoizedState,K=r.stateNode,V=K.getSnapshotBeforeUpdate(r.elementType===r.type?He:gi(r.type,He),Kt);K.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var $=r.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){qt(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,Oe=n;break}Oe=r.return}return Be=Sm,Sm=!1,Be}function ua(n,r,l){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Ju(r,l,v)}p=p.next}while(p!==h)}}function Cl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==r)}}function eh(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Mm(n){var r=n.alternate;r!==null&&(n.alternate=null,Mm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Li],delete r[Jo],delete r[gu],delete r[A0],delete r[R0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Em(n){return n.tag===5||n.tag===3||n.tag===4}function Tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function th(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=ol));else if(h!==4&&(n=n.child,n!==null))for(th(n,r,l),n=n.sibling;n!==null;)th(n,r,l),n=n.sibling}function nh(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(nh(n,r,l),n=n.sibling;n!==null;)nh(n,r,l),n=n.sibling}var dn=null,_i=!1;function Pr(n,r,l){for(l=l.child;l!==null;)wm(n,r,l),l=l.sibling}function wm(n,r,l){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(At,l)}catch{}switch(l.tag){case 5:Mn||Ys(l,r);case 6:var h=dn,p=_i;dn=null,Pr(n,r,l),dn=h,_i=p,dn!==null&&(_i?(n=dn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):dn.removeChild(l.stateNode));break;case 18:dn!==null&&(_i?(n=dn,l=l.stateNode,n.nodeType===8?mu(n.parentNode,l):n.nodeType===1&&mu(n,l),Vo(n)):mu(dn,l.stateNode));break;case 4:h=dn,p=_i,dn=l.stateNode.containerInfo,_i=!0,Pr(n,r,l),dn=h,_i=p;break;case 0:case 11:case 14:case 15:if(!Mn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&Ju(l,r,T),p=p.next}while(p!==h)}Pr(n,r,l);break;case 1:if(!Mn&&(Ys(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(N){qt(l,r,N)}Pr(n,r,l);break;case 21:Pr(n,r,l);break;case 22:l.mode&1?(Mn=(h=Mn)||l.memoizedState!==null,Pr(n,r,l),Mn=h):Pr(n,r,l);break;default:Pr(n,r,l)}}function Am(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new G0),r.forEach(function(h){var p=J0.bind(null,n,h);l.has(h)||(l.add(h),h.then(p,p))})}}function vi(n,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var v=n,T=r,N=T;e:for(;N!==null;){switch(N.tag){case 5:dn=N.stateNode,_i=!1;break e;case 3:dn=N.stateNode.containerInfo,_i=!0;break e;case 4:dn=N.stateNode.containerInfo,_i=!0;break e}N=N.return}if(dn===null)throw Error(t(160));wm(v,T,p),dn=null,_i=!1;var F=p.alternate;F!==null&&(F.return=null),p.return=null}catch(ee){qt(p,r,ee)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Rm(r,n),r=r.sibling}function Rm(n,r){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(r,n),Ii(n),h&4){try{ua(3,n,n.return),Cl(3,n)}catch(He){qt(n,n.return,He)}try{ua(5,n,n.return)}catch(He){qt(n,n.return,He)}}break;case 1:vi(r,n),Ii(n),h&512&&l!==null&&Ys(l,l.return);break;case 5:if(vi(r,n),Ii(n),h&512&&l!==null&&Ys(l,l.return),n.flags&32){var p=n.stateNode;try{dt(p,"")}catch(He){qt(n,n.return,He)}}if(h&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,N=n.type,F=n.updateQueue;if(n.updateQueue=null,F!==null)try{N==="input"&&v.type==="radio"&&v.name!=null&&gt(p,v),ot(N,T);var ee=ot(N,v);for(T=0;T<F.length;T+=2){var ve=F[T],ye=F[T+1];ve==="style"?et(p,ye):ve==="dangerouslySetInnerHTML"?Ue(p,ye):ve==="children"?dt(p,ye):P(p,ve,ye,ee)}switch(N){case"input":ft(p,v);break;case"textarea":me(p,v);break;case"select":var ge=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var De=v.value;De!=null?L(p,!!v.multiple,De,!1):ge!==!!v.multiple&&(v.defaultValue!=null?L(p,!!v.multiple,v.defaultValue,!0):L(p,!!v.multiple,v.multiple?[]:"",!1))}p[Jo]=v}catch(He){qt(n,n.return,He)}}break;case 6:if(vi(r,n),Ii(n),h&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(He){qt(n,n.return,He)}}break;case 3:if(vi(r,n),Ii(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Vo(r.containerInfo)}catch(He){qt(n,n.return,He)}break;case 4:vi(r,n),Ii(n);break;case 13:vi(r,n),Ii(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(sh=Me())),h&4&&Am(n);break;case 22:if(ve=l!==null&&l.memoizedState!==null,n.mode&1?(Mn=(ee=Mn)||ve,vi(r,n),Mn=ee):vi(r,n),Ii(n),h&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!ve&&(n.mode&1)!==0)for(Oe=n,ve=n.child;ve!==null;){for(ye=Oe=ve;Oe!==null;){switch(ge=Oe,De=ge.child,ge.tag){case 0:case 11:case 14:case 15:ua(4,ge,ge.return);break;case 1:Ys(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){h=ge,l=ge.return;try{r=h,Be.props=r.memoizedProps,Be.state=r.memoizedState,Be.componentWillUnmount()}catch(He){qt(h,l,He)}}break;case 5:Ys(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Pm(ye);continue}}De!==null?(De.return=ge,Oe=De):Pm(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{p=ye.stateNode,ee?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(N=ye.stateNode,F=ye.memoizedProps.style,T=F!=null&&F.hasOwnProperty("display")?F.display:null,N.style.display=Qe("display",T))}catch(He){qt(n,n.return,He)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch(He){qt(n,n.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:vi(r,n),Ii(n),h&4&&Am(n);break;case 21:break;default:vi(r,n),Ii(n)}}function Ii(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Em(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(dt(p,""),h.flags&=-33);var v=Tm(n);nh(n,v,p);break;case 3:case 4:var T=h.stateNode.containerInfo,N=Tm(n);th(n,N,T);break;default:throw Error(t(161))}}catch(F){qt(n,n.return,F)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function j0(n,r,l){Oe=n,bm(n)}function bm(n,r,l){for(var h=(n.mode&1)!==0;Oe!==null;){var p=Oe,v=p.child;if(p.tag===22&&h){var T=p.memoizedState!==null||bl;if(!T){var N=p.alternate,F=N!==null&&N.memoizedState!==null||Mn;N=bl;var ee=Mn;if(bl=T,(Mn=F)&&!ee)for(Oe=p;Oe!==null;)T=Oe,F=T.child,T.tag===22&&T.memoizedState!==null?Lm(p):F!==null?(F.return=T,Oe=F):Lm(p);for(;v!==null;)Oe=v,bm(v),v=v.sibling;Oe=p,bl=N,Mn=ee}Cm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Oe=v):Cm(n)}}function Cm(n){for(;Oe!==null;){var r=Oe;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Mn||Cl(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!Mn)if(l===null)h.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:gi(r.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Pp(r,v,h);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Pp(r,T,l)}break;case 5:var N=r.stateNode;if(l===null&&r.flags&4){l=N;var F=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&l.focus();break;case"img":F.src&&(l.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ee=r.alternate;if(ee!==null){var ve=ee.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&Vo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||r.flags&512&&eh(r)}catch(ge){qt(r,r.return,ge)}}if(r===n){Oe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function Pm(n){for(;Oe!==null;){var r=Oe;if(r===n){Oe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function Lm(n){for(;Oe!==null;){var r=Oe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Cl(4,r)}catch(F){qt(r,l,F)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var p=r.return;try{h.componentDidMount()}catch(F){qt(r,p,F)}}var v=r.return;try{eh(r)}catch(F){qt(r,v,F)}break;case 5:var T=r.return;try{eh(r)}catch(F){qt(r,T,F)}}}catch(F){qt(r,r.return,F)}if(r===n){Oe=null;break}var N=r.sibling;if(N!==null){N.return=r.return,Oe=N;break}Oe=r.return}}var X0=Math.ceil,Pl=R.ReactCurrentDispatcher,ih=R.ReactCurrentOwner,ai=R.ReactCurrentBatchConfig,Et=0,an=null,$t=null,fn=0,$n=0,qs=wr(0),tn=0,ha=null,as=0,Ll=0,rh=0,da=null,Vn=null,sh=0,Ks=1/0,tr=null,Dl=!1,oh=null,Lr=null,Nl=!1,Dr=null,Il=0,fa=0,ah=null,Ul=-1,Ol=0;function Cn(){return(Et&6)!==0?Me():Ul!==-1?Ul:Ul=Me()}function Nr(n){return(n.mode&1)===0?1:(Et&2)!==0&&fn!==0?fn&-fn:C0.transition!==null?(Ol===0&&(Ol=Rn()),Ol):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:Nf(n.type)),n)}function xi(n,r,l,h){if(50<fa)throw fa=0,ah=null,Error(t(185));kn(n,l,h),((Et&2)===0||n!==an)&&(n===an&&((Et&2)===0&&(Ll|=l),tn===4&&Ir(n,fn)),Gn(n,h),l===1&&Et===0&&(r.mode&1)===0&&(Ks=Me()+500,ul&&Rr()))}function Gn(n,r){var l=n.callbackNode;ti(n,r);var h=Pi(n,n===an?fn:0);if(h===0)l!==null&&ne(l),n.callbackNode=null,n.callbackPriority=0;else if(r=h&-h,n.callbackPriority!==r){if(l!=null&&ne(l),r===1)n.tag===0?b0(Nm.bind(null,n)):vp(Nm.bind(null,n)),T0(function(){(Et&6)===0&&Rr()}),l=null;else{switch(wf(h)){case 1:l=ze;break;case 4:l=nt;break;case 16:l=rt;break;case 536870912:l=yt;break;default:l=rt}l=Hm(l,Dm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Dm(n,r){if(Ul=-1,Ol=0,(Et&6)!==0)throw Error(t(327));var l=n.callbackNode;if($s()&&n.callbackNode!==l)return null;var h=Pi(n,n===an?fn:0);if(h===0)return null;if((h&30)!==0||(h&n.expiredLanes)!==0||r)r=Fl(n,h);else{r=h;var p=Et;Et|=2;var v=Um();(an!==n||fn!==r)&&(tr=null,Ks=Me()+500,cs(n,r));do try{K0();break}catch(N){Im(n,N)}while(!0);wu(),Pl.current=v,Et=p,$t!==null?r=0:(an=null,fn=0,r=tn)}if(r!==0){if(r===2&&(p=Yi(n),p!==0&&(h=p,r=lh(n,p))),r===1)throw l=ha,cs(n,0),Ir(n,h),Gn(n,Me()),l;if(r===6)Ir(n,h);else{if(p=n.current.alternate,(h&30)===0&&!Y0(p)&&(r=Fl(n,h),r===2&&(v=Yi(n),v!==0&&(h=v,r=lh(n,v))),r===1))throw l=ha,cs(n,0),Ir(n,h),Gn(n,Me()),l;switch(n.finishedWork=p,n.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:us(n,Vn,tr);break;case 3:if(Ir(n,h),(h&130023424)===h&&(r=sh+500-Me(),10<r)){if(Pi(n,0)!==0)break;if(p=n.suspendedLanes,(p&h)!==h){Cn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=pu(us.bind(null,n,Vn,tr),r);break}us(n,Vn,tr);break;case 4:if(Ir(n,h),(h&4194240)===h)break;for(r=n.eventTimes,p=-1;0<h;){var T=31-lt(h);v=1<<T,T=r[T],T>p&&(p=T),h&=~v}if(h=p,h=Me()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*X0(h/1960))-h,10<h){n.timeoutHandle=pu(us.bind(null,n,Vn,tr),h);break}us(n,Vn,tr);break;case 5:us(n,Vn,tr);break;default:throw Error(t(329))}}}return Gn(n,Me()),n.callbackNode===l?Dm.bind(null,n):null}function lh(n,r){var l=da;return n.current.memoizedState.isDehydrated&&(cs(n,r).flags|=256),n=Fl(n,r),n!==2&&(r=Vn,Vn=l,r!==null&&ch(r)),n}function ch(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function Y0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],v=p.getSnapshot;p=p.value;try{if(!pi(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ir(n,r){for(r&=~rh,r&=~Ll,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-lt(r),h=1<<l;n[l]=-1,r&=~h}}function Nm(n){if((Et&6)!==0)throw Error(t(327));$s();var r=Pi(n,0);if((r&1)===0)return Gn(n,Me()),null;var l=Fl(n,r);if(n.tag!==0&&l===2){var h=Yi(n);h!==0&&(r=h,l=lh(n,h))}if(l===1)throw l=ha,cs(n,0),Ir(n,r),Gn(n,Me()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,us(n,Vn,tr),Gn(n,Me()),null}function uh(n,r){var l=Et;Et|=1;try{return n(r)}finally{Et=l,Et===0&&(Ks=Me()+500,ul&&Rr())}}function ls(n){Dr!==null&&Dr.tag===0&&(Et&6)===0&&$s();var r=Et;Et|=1;var l=ai.transition,h=Pt;try{if(ai.transition=null,Pt=1,n)return n()}finally{Pt=h,ai.transition=l,Et=r,(Et&6)===0&&Rr()}}function hh(){$n=qs.current,Vt(qs)}function cs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,E0(l)),$t!==null)for(l=$t.return;l!==null;){var h=l;switch(yu(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&ll();break;case 3:js(),Vt(Bn),Vt(xn),Nu();break;case 5:Lu(h);break;case 4:js();break;case 13:Vt(Xt);break;case 19:Vt(Xt);break;case 10:Au(h.type._context);break;case 22:case 23:hh()}l=l.return}if(an=n,$t=n=Ur(n.current,null),fn=$n=r,tn=0,ha=null,rh=Ll=as=0,Vn=da=null,rs!==null){for(r=0;r<rs.length;r++)if(l=rs[r],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,v=l.pending;if(v!==null){var T=v.next;v.next=p,h.next=T}l.pending=h}rs=null}return n}function Im(n,r){do{var l=$t;try{if(wu(),yl.current=Tl,Sl){for(var h=Yt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Sl=!1}if(os=0,on=en=Yt=null,sa=!1,oa=0,ih.current=null,l===null||l.return===null){tn=1,ha=r,$t=null;break}e:{var v=n,T=l.return,N=l,F=r;if(r=fn,N.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var ee=F,ve=N,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var De=sm(T);if(De!==null){De.flags&=-257,om(De,T,N,v,r),De.mode&1&&rm(v,ee,r),r=De,F=ee;var Be=r.updateQueue;if(Be===null){var He=new Set;He.add(F),r.updateQueue=He}else Be.add(F);break e}else{if((r&1)===0){rm(v,ee,r),dh();break e}F=Error(t(426))}}else if(Gt&&N.mode&1){var Kt=sm(T);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),om(Kt,T,N,v,r),Eu(Xs(F,N));break e}}v=F=Xs(F,N),tn!==4&&(tn=2),da===null?da=[v]:da.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var K=nm(v,F,r);Cp(v,K);break e;case 1:N=F;var V=v.type,$=v.stateNode;if((v.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Lr===null||!Lr.has($)))){v.flags|=65536,r&=-r,v.lanes|=r;var Te=im(v,N,r);Cp(v,Te);break e}}v=v.return}while(v!==null)}Fm(l)}catch(je){r=je,$t===l&&l!==null&&($t=l=l.return);continue}break}while(!0)}function Um(){var n=Pl.current;return Pl.current=Tl,n===null?Tl:n}function dh(){(tn===0||tn===3||tn===2)&&(tn=4),an===null||(as&268435455)===0&&(Ll&268435455)===0||Ir(an,fn)}function Fl(n,r){var l=Et;Et|=2;var h=Um();(an!==n||fn!==r)&&(tr=null,cs(n,r));do try{q0();break}catch(p){Im(n,p)}while(!0);if(wu(),Et=l,Pl.current=h,$t!==null)throw Error(t(261));return an=null,fn=0,tn}function q0(){for(;$t!==null;)Om($t)}function K0(){for(;$t!==null&&!Y();)Om($t)}function Om(n){var r=zm(n.alternate,n,$n);n.memoizedProps=n.pendingProps,r===null?Fm(n):$t=r,ih.current=null}function Fm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=H0(l,r,$n),l!==null){$t=l;return}}else{if(l=V0(l,r),l!==null){l.flags&=32767,$t=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,$t=null;return}}if(r=r.sibling,r!==null){$t=r;return}$t=r=n}while(r!==null);tn===0&&(tn=5)}function us(n,r,l){var h=Pt,p=ai.transition;try{ai.transition=null,Pt=1,$0(n,r,l,h)}finally{ai.transition=p,Pt=h}return null}function $0(n,r,l,h){do $s();while(Dr!==null);if((Et&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(ja(n,v),n===an&&($t=an=null,fn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Nl||(Nl=!0,Hm(rt,function(){return $s(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=ai.transition,ai.transition=null;var T=Pt;Pt=1;var N=Et;Et|=4,ih.current=null,W0(n,l),Rm(l,n),g0(du),qa=!!hu,du=hu=null,n.current=l,j0(l),we(),Et=N,Pt=T,ai.transition=v}else n.current=l;if(Nl&&(Nl=!1,Dr=n,Il=p),v=n.pendingLanes,v===0&&(Lr=null),_n(l.stateNode),Gn(n,Me()),r!==null)for(h=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Dl)throw Dl=!1,n=oh,oh=null,n;return(Il&1)!==0&&n.tag!==0&&$s(),v=n.pendingLanes,(v&1)!==0?n===ah?fa++:(fa=0,ah=n):fa=0,Rr(),null}function $s(){if(Dr!==null){var n=wf(Il),r=ai.transition,l=Pt;try{if(ai.transition=null,Pt=16>n?16:n,Dr===null)var h=!1;else{if(n=Dr,Dr=null,Il=0,(Et&6)!==0)throw Error(t(331));var p=Et;for(Et|=4,Oe=n.current;Oe!==null;){var v=Oe,T=v.child;if((Oe.flags&16)!==0){var N=v.deletions;if(N!==null){for(var F=0;F<N.length;F++){var ee=N[F];for(Oe=ee;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:ua(8,ve,v)}var ye=ve.child;if(ye!==null)ye.return=ve,Oe=ye;else for(;Oe!==null;){ve=Oe;var ge=ve.sibling,De=ve.return;if(Mm(ve),ve===ee){Oe=null;break}if(ge!==null){ge.return=De,Oe=ge;break}Oe=De}}}var Be=v.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Kt=He.sibling;He.sibling=null,He=Kt}while(He!==null)}}Oe=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,Oe=T;else e:for(;Oe!==null;){if(v=Oe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ua(9,v,v.return)}var K=v.sibling;if(K!==null){K.return=v.return,Oe=K;break e}Oe=v.return}}var V=n.current;for(Oe=V;Oe!==null;){T=Oe;var $=T.child;if((T.subtreeFlags&2064)!==0&&$!==null)$.return=T,Oe=$;else e:for(T=V;Oe!==null;){if(N=Oe,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Cl(9,N)}}catch(je){qt(N,N.return,je)}if(N===T){Oe=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,Oe=Te;break e}Oe=N.return}}if(Et=p,Rr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(At,n)}catch{}h=!0}return h}finally{Pt=l,ai.transition=r}}return!1}function km(n,r,l){r=Xs(l,r),r=nm(n,r,1),n=Cr(n,r,1),r=Cn(),n!==null&&(kn(n,1,r),Gn(n,r))}function qt(n,r,l){if(n.tag===3)km(n,n,l);else for(;r!==null;){if(r.tag===3){km(r,n,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Lr===null||!Lr.has(h))){n=Xs(l,n),n=im(r,n,1),r=Cr(r,n,1),n=Cn(),r!==null&&(kn(r,1,n),Gn(r,n));break}}r=r.return}}function Z0(n,r,l){var h=n.pingCache;h!==null&&h.delete(r),r=Cn(),n.pingedLanes|=n.suspendedLanes&l,an===n&&(fn&l)===l&&(tn===4||tn===3&&(fn&130023424)===fn&&500>Me()-sh?cs(n,0):rh|=l),Gn(n,r)}function Bm(n,r){r===0&&((n.mode&1)===0?r=1:(r=fi,fi<<=1,(fi&130023424)===0&&(fi=4194304)));var l=Cn();n=Qi(n,r),n!==null&&(kn(n,r,l),Gn(n,l))}function Q0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Bm(n,l)}function J0(n,r){var l=0;switch(n.tag){case 13:var h=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),Bm(n,l)}var zm;zm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Bn.current)Hn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Hn=!1,z0(n,r,l);Hn=(n.flags&131072)!==0}else Hn=!1,Gt&&(r.flags&1048576)!==0&&xp(r,dl,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;Rl(n,r),n=r.pendingProps;var p=ks(r,xn.current);Ws(r,l),p=Ou(null,r,h,n,p,l);var v=Fu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,zn(h)?(v=!0,cl(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Cu(r),p.updater=wl,r.stateNode=p,p._reactInternals=r,Gu(r,h,n,l),r=Yu(null,r,h,!0,v,l)):(r.tag=0,Gt&&v&&xu(r),bn(null,r,p,l),r=r.child),r;case 16:h=r.elementType;e:{switch(Rl(n,r),n=r.pendingProps,p=h._init,h=p(h._payload),r.type=h,p=r.tag=tx(h),n=gi(h,n),p){case 0:r=Xu(null,r,h,n,l);break e;case 1:r=dm(null,r,h,n,l);break e;case 11:r=am(null,r,h,n,l);break e;case 14:r=lm(null,r,h,gi(h.type,n),l);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:gi(h,p),Xu(n,r,h,p,l);case 1:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:gi(h,p),dm(n,r,h,p,l);case 3:e:{if(fm(r),n===null)throw Error(t(387));h=r.pendingProps,v=r.memoizedState,p=v.element,bp(n,r),vl(r,h,null,l);var T=r.memoizedState;if(h=T.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Xs(Error(t(423)),r),r=pm(n,r,h,l,p);break e}else if(h!==p){p=Xs(Error(t(424)),r),r=pm(n,r,h,l,p);break e}else for(Kn=Tr(r.stateNode.containerInfo.firstChild),qn=r,Gt=!0,mi=null,l=Ap(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Hs(),h===p){r=er(n,r,l);break e}bn(n,r,h,l)}r=r.child}return r;case 5:return Lp(r),n===null&&Mu(r),h=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,T=p.children,fu(h,p)?T=null:v!==null&&fu(h,v)&&(r.flags|=32),hm(n,r),bn(n,r,T,l),r.child;case 6:return n===null&&Mu(r),null;case 13:return mm(n,r,l);case 4:return Pu(r,r.stateNode.containerInfo),h=r.pendingProps,n===null?r.child=Vs(r,null,h,l):bn(n,r,h,l),r.child;case 11:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:gi(h,p),am(n,r,h,p,l);case 7:return bn(n,r,r.pendingProps,l),r.child;case 8:return bn(n,r,r.pendingProps.children,l),r.child;case 12:return bn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(h=r.type._context,p=r.pendingProps,v=r.memoizedProps,T=p.value,Bt(ml,h._currentValue),h._currentValue=T,v!==null)if(pi(v.value,T)){if(v.children===p.children&&!Bn.current){r=er(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var N=v.dependencies;if(N!==null){T=v.child;for(var F=N.firstContext;F!==null;){if(F.context===h){if(v.tag===1){F=Ji(-1,l&-l),F.tag=2;var ee=v.updateQueue;if(ee!==null){ee=ee.shared;var ve=ee.pending;ve===null?F.next=F:(F.next=ve.next,ve.next=F),ee.pending=F}}v.lanes|=l,F=v.alternate,F!==null&&(F.lanes|=l),Ru(v.return,l,r),N.lanes|=l;break}F=F.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,N=T.alternate,N!==null&&(N.lanes|=l),Ru(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}bn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,h=r.pendingProps.children,Ws(r,l),p=si(p),h=h(p),r.flags|=1,bn(n,r,h,l),r.child;case 14:return h=r.type,p=gi(h,r.pendingProps),p=gi(h.type,p),lm(n,r,h,p,l);case 15:return cm(n,r,r.type,r.pendingProps,l);case 17:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:gi(h,p),Rl(n,r),r.tag=1,zn(h)?(n=!0,cl(r)):n=!1,Ws(r,l),em(r,h,p),Gu(r,h,p,l),Yu(null,r,h,!0,n,l);case 19:return _m(n,r,l);case 22:return um(n,r,l)}throw Error(t(156,r.tag))};function Hm(n,r){return te(n,r)}function ex(n,r,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,r,l,h){return new ex(n,r,l,h)}function fh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tx(n){if(typeof n=="function")return fh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===he)return 14}return 2}function Ur(n,r){var l=n.alternate;return l===null?(l=li(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function kl(n,r,l,h,p,v){var T=2;if(h=n,typeof n=="function")fh(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case I:return hs(l.children,p,v,r);case H:T=8,p|=8;break;case C:return n=li(12,l,r,p|2),n.elementType=C,n.lanes=v,n;case Z:return n=li(13,l,r,p),n.elementType=Z,n.lanes=v,n;case le:return n=li(19,l,r,p),n.elementType=le,n.lanes=v,n;case ue:return Bl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:T=10;break e;case k:T=9;break e;case ie:T=11;break e;case he:T=14;break e;case ae:T=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=li(T,l,r,p),r.elementType=n,r.type=h,r.lanes=v,r}function hs(n,r,l,h){return n=li(7,n,h,r),n.lanes=l,n}function Bl(n,r,l,h){return n=li(22,n,h,r),n.elementType=ue,n.lanes=l,n.stateNode={isHidden:!1},n}function ph(n,r,l){return n=li(6,n,null,r),n.lanes=l,n}function mh(n,r,l){return r=li(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function nx(n,r,l,h,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function gh(n,r,l,h,p,v,T,N,F){return n=new nx(n,r,l,N,F),r===1?(r=1,v===!0&&(r|=8)):r=0,v=li(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(v),n}function ix(n,r,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:h==null?null:""+h,children:n,containerInfo:r,implementation:l}}function Vm(n){if(!n)return Ar;n=n._reactInternals;e:{if(Ci(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(zn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(zn(l))return gp(n,l,r)}return r}function Gm(n,r,l,h,p,v,T,N,F){return n=gh(l,h,!0,n,p,v,T,N,F),n.context=Vm(null),l=n.current,h=Cn(),p=Nr(l),v=Ji(h,p),v.callback=r??null,Cr(l,v,p),n.current.lanes=p,kn(n,p,h),Gn(n,h),n}function zl(n,r,l,h){var p=r.current,v=Cn(),T=Nr(p);return l=Vm(l),r.context===null?r.context=l:r.pendingContext=l,r=Ji(v,T),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=Cr(p,r,T),n!==null&&(xi(n,p,T,v),_l(n,p,T)),T}function Hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function _h(n,r){Wm(n,r),(n=n.alternate)&&Wm(n,r)}function rx(){return null}var jm=typeof reportError=="function"?reportError:function(n){console.error(n)};function vh(n){this._internalRoot=n}Vl.prototype.render=vh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));zl(n,r,null,null)},Vl.prototype.unmount=vh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ls(function(){zl(null,n,null,null)}),r[qi]=null}};function Vl(n){this._internalRoot=n}Vl.prototype.unstable_scheduleHydration=function(n){if(n){var r=bf();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Sr.length&&r!==0&&r<Sr[l].priority;l++);Sr.splice(l,0,n),l===0&&Lf(n)}};function xh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Xm(){}function sx(n,r,l,h,p){if(p){if(typeof h=="function"){var v=h;h=function(){var ee=Hl(T);v.call(ee)}}var T=Gm(r,h,n,0,null,!1,!1,"",Xm);return n._reactRootContainer=T,n[qi]=T.current,Zo(n.nodeType===8?n.parentNode:n),ls(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof h=="function"){var N=h;h=function(){var ee=Hl(F);N.call(ee)}}var F=gh(n,0,!1,null,null,!1,!1,"",Xm);return n._reactRootContainer=F,n[qi]=F.current,Zo(n.nodeType===8?n.parentNode:n),ls(function(){zl(r,F,l,h)}),F}function Wl(n,r,l,h,p){var v=l._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var N=p;p=function(){var F=Hl(T);N.call(F)}}zl(r,T,n,p)}else T=sx(l,r,n,p,h);return Hl(T)}Af=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Jt(r.pendingLanes);l!==0&&(Gc(r,l|1),Gn(r,Me()),(Et&6)===0&&(Ks=Me()+500,Rr()))}break;case 13:ls(function(){var h=Qi(n,1);if(h!==null){var p=Cn();xi(h,n,1,p)}}),_h(n,1)}},Wc=function(n){if(n.tag===13){var r=Qi(n,134217728);if(r!==null){var l=Cn();xi(r,n,134217728,l)}_h(n,134217728)}},Rf=function(n){if(n.tag===13){var r=Nr(n),l=Qi(n,r);if(l!==null){var h=Cn();xi(l,n,r,h)}_h(n,r)}},bf=function(){return Pt},Cf=function(n,r){var l=Pt;try{return Pt=n,r()}finally{Pt=l}},be=function(n,r,l){switch(r){case"input":if(ft(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==n&&h.form===n.form){var p=al(h);if(!p)throw Error(t(90));vt(h),ft(h,p)}}}break;case"textarea":me(n,l);break;case"select":r=l.value,r!=null&&L(n,!!l.multiple,r,!1)}},zt=uh,Qt=ls;var ox={usingClientEntryPoint:!1,Events:[ea,Os,al,Pe,at,uh]},pa={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ax={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=b(n),n===null?null:n.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{At=jl.inject(ax),xt=jl}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox,Wn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(r))throw Error(t(200));return ix(n,r,null,l)},Wn.createRoot=function(n,r){if(!xh(n))throw Error(t(299));var l=!1,h="",p=jm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=gh(n,1,!1,null,null,l,!1,h,p),n[qi]=r.current,Zo(n.nodeType===8?n.parentNode:n),new vh(r)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=b(r),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return ls(n)},Wn.hydrate=function(n,r,l){if(!Gl(r))throw Error(t(200));return Wl(null,n,r,!0,l)},Wn.hydrateRoot=function(n,r,l){if(!xh(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,v="",T=jm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=Gm(r,null,n,1,l??null,p,!1,v,T),n[qi]=r.current,Zo(n),h)for(n=0;n<h.length;n++)l=h[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Vl(r)},Wn.render=function(n,r,l){if(!Gl(r))throw Error(t(200));return Wl(null,n,r,!1,l)},Wn.unmountComponentAtNode=function(n){if(!Gl(n))throw Error(t(40));return n._reactRootContainer?(ls(function(){Wl(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1},Wn.unstable_batchedUpdates=uh,Wn.unstable_renderSubtreeIntoContainer=function(n,r,l,h){if(!Gl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Wl(n,r,l,!1,h)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var eg;function _x(){if(eg)return Mh.exports;eg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Mh.exports=gx(),Mh.exports}var tg;function vx(){if(tg)return Xl;tg=1;var o=_x();return Xl.createRoot=o.createRoot,Xl.hydrateRoot=o.hydrateRoot,Xl}var xx=vx();const yx=[{href:"#capabilities",label:"Capabilities"},{href:"#story",label:"Story"},{href:"#use-cases",label:"Use cases"},{href:"#specs",label:"Specs"},{href:"#demo",label:"Demo"}];function Sx(){const[o,e]=un.useState(!1);return un.useEffect(()=>{const t=()=>e(window.scrollY>24);return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),W.jsx("header",{className:`nav ${o?"nav-scrolled":""}`,children:W.jsxs("nav",{className:"nav-inner",children:[W.jsxs("a",{href:"#top",className:"nav-brand",children:["ARC",W.jsx("span",{className:"nav-brand-six",children:"6"}),W.jsx("span",{className:"nav-brand-sub",children:"robotics"})]}),W.jsx("div",{className:"nav-links",children:yx.map(t=>W.jsx("a",{href:t.href,className:"nav-link",children:t.label},t.href))}),W.jsx("a",{href:"#demo",className:"btn btn-primary btn-sm",children:"Try the demo"})]})})}function I_({viewer:o,keyboard:e=!1,className:t=""}){const{containerRef:i,sceneRef:s,ready:a,cinematic:c}=o,u=un.useCallback(d=>{const f=s.current;if(!f||!f.rig)return;const m=3;let g=!0;switch(d.key){case"ArrowLeft":f.jog("j1",m);break;case"ArrowRight":f.jog("j1",-m);break;case"ArrowUp":f.jog("j2",-m);break;case"ArrowDown":f.jog("j2",m);break;case"w":case"W":f.jog("j3",-m);break;case"s":case"S":f.jog("j3",m);break;case" ":f.rig.toggleGripper();break;case"Enter":f.rig.pickAndPlace();break;case"r":case"R":f.rig.goHome(),f.resetCamera();break;default:g=!1}g&&d.preventDefault()},[s]);return W.jsxs("div",{className:`viewer ${t}`,ref:i,tabIndex:e?0:-1,onKeyDown:e?u:void 0,role:e?"application":void 0,"aria-label":"Interactive 3D robot arm viewer",children:[W.jsxs("div",{className:"viewer-fx","aria-hidden":"true",children:[W.jsx("div",{className:"viewer-fx-blur viewer-fx-blur-b"}),W.jsx("div",{className:"viewer-fx-blur viewer-fx-blur-l"}),W.jsx("div",{className:"viewer-fx-blur viewer-fx-blur-r"}),W.jsx("div",{className:"viewer-grain"})]}),!a&&W.jsxs("div",{className:"viewer-loading",children:[W.jsx("span",{className:"viewer-loading-dot"}),"initializing_digital_twin"]}),W.jsxs("div",{className:"viewer-cam-controls",children:[W.jsx("button",{type:"button",className:"chip",onClick:()=>{var d;return(d=s.current)==null?void 0:d.resetCamera()},title:"Reset camera",children:"⟲ camera"}),W.jsx("button",{type:"button",className:`chip ${c?"chip-active":""}`,onClick:()=>{var d;return(d=s.current)==null?void 0:d.toggleCinematic()},title:"Toggle cinematic orbit",children:"✦ cinematic"})]}),W.jsx("div",{className:"viewer-hint",children:"drag to orbit · scroll to zoom"})]})}function U_({viewer:o}){const{status:e,busy:t,ready:i,usingGLB:s}=o,a=i?t?"system_execute":"system_ready":"system_boot",c=e.toLowerCase().replace(/\s*[—–]\s*/g,"_").replace(/[\s…]+/g,"_").replace(/_+$/,"");return W.jsxs("div",{className:"mono","aria-live":"polite",children:["manufr.=concept",W.jsx("br",{}),"rig=",s?"glb_twin":"procedural",W.jsx("br",{}),a,W.jsx("br",{}),W.jsx("strong",{className:"cursor",children:c})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nf="170",vo={ROTATE:0,DOLLY:1,PAN:2},mo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mx=0,ng=1,Ex=2,O_=1,F_=2,cr=3,pr=0,Nn=1,Oi=2,Kr=0,xo=1,ig=2,rg=3,sg=4,Tx=5,Ss=100,wx=101,Ax=102,Rx=103,bx=104,Cx=200,Px=201,Lx=202,Dx=203,cd=204,ud=205,Nx=206,Ix=207,Ux=208,Ox=209,Fx=210,kx=211,Bx=212,zx=213,Hx=214,hd=0,dd=1,fd=2,Eo=3,pd=4,md=5,gd=6,_d=7,k_=0,Vx=1,Gx=2,$r=0,Wx=1,jx=2,Xx=3,B_=4,Yx=5,qx=6,Kx=7,og="attached",$x="detached",z_=300,To=301,wo=302,vd=303,xd=304,Oc=306,Ao=1e3,Xr=1001,Dc=1002,In=1003,H_=1004,Ra=1005,Jn=1006,wc=1007,hr=1008,mr=1009,V_=1010,G_=1011,Na=1012,rf=1013,Es=1014,Ai=1015,Fa=1016,sf=1017,of=1018,Ro=1020,W_=35902,j_=1021,X_=1022,hi=1023,Y_=1024,q_=1025,yo=1026,bo=1027,af=1028,lf=1029,K_=1030,cf=1031,uf=1033,Ac=33776,Rc=33777,bc=33778,Cc=33779,yd=35840,Sd=35841,Md=35842,Ed=35843,Td=36196,wd=37492,Ad=37496,Rd=37808,bd=37809,Cd=37810,Pd=37811,Ld=37812,Dd=37813,Nd=37814,Id=37815,Ud=37816,Od=37817,Fd=37818,kd=37819,Bd=37820,zd=37821,Pc=36492,Hd=36494,Vd=36495,$_=36283,Gd=36284,Wd=36285,jd=36286,Ia=2300,Ua=2301,wh=2302,ag=2400,lg=2401,cg=2402,Zx=2500,Qx=0,Z_=1,Xd=2,Jx=3200,ey=3201,Q_=0,ty=1,jr="",pn="srgb",On="srgb-linear",Fc="linear",Ut="srgb",Zs=7680,ug=519,ny=512,iy=513,ry=514,J_=515,sy=516,oy=517,ay=518,ly=519,Yd=35044,hg="300 es",dr=2e3,Nc=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dg=1234567;const Pa=Math.PI/180,Co=180/Math.PI;function Ri(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function mn(o,e,t){return Math.max(e,Math.min(t,o))}function hf(o,e){return(o%e+e)%e}function cy(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function uy(o,e,t){return o!==e?(t-o)/(e-o):0}function La(o,e,t){return(1-t)*o+t*e}function hy(o,e,t,i){return La(o,e,1-Math.exp(-t*i))}function dy(o,e=1){return e-Math.abs(hf(o,e*2)-e)}function fy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function py(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function my(o,e){return o+Math.floor(Math.random()*(e-o+1))}function gy(o,e){return o+Math.random()*(e-o)}function _y(o){return o*(.5-Math.random())}function vy(o){o!==void 0&&(dg=o);let e=dg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xy(o){return o*Pa}function yy(o){return o*Co}function Sy(o){return(o&o-1)===0&&o!==0}function My(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Ey(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Ty(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),d=c(t/2),f=a((e+i)/2),m=c((e+i)/2),g=a((e-i)/2),_=c((e-i)/2),x=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*m,d*g,d*_,u*f);break;case"YZY":o.set(d*_,u*m,d*g,u*f);break;case"ZXZ":o.set(d*g,d*_,u*m,u*f);break;case"XZX":o.set(u*m,d*M,d*x,u*f);break;case"YXY":o.set(d*x,u*m,d*M,u*f);break;case"ZYZ":o.set(d*M,d*x,u*m,u*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Lt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const go={DEG2RAD:Pa,RAD2DEG:Co,generateUUID:Ri,clamp:mn,euclideanModulo:hf,mapLinear:cy,inverseLerp:uy,lerp:La,damp:hy,pingpong:dy,smoothstep:fy,smootherstep:py,randInt:my,randFloat:gy,randFloatSpread:_y,seededRandom:vy,degToRad:xy,radToDeg:yy,isPowerOfTwo:Sy,ceilPowerOfTwo:My,floorPowerOfTwo:Ey,setQuaternionFromProperEuler:Ty,normalize:Lt,denormalize:Ti};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,i,s,a,c,u,d,f){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,d,f)}set(e,t,i,s,a,c,u,d,f){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=a,m[5]=d,m[6]=i,m[7]=c,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],f=i[1],m=i[4],g=i[7],_=i[2],x=i[5],M=i[8],E=s[0],S=s[3],y=s[6],D=s[1],P=s[4],R=s[7],X=s[2],O=s[5],I=s[8];return a[0]=c*E+u*D+d*X,a[3]=c*S+u*P+d*O,a[6]=c*y+u*R+d*I,a[1]=f*E+m*D+g*X,a[4]=f*S+m*P+g*O,a[7]=f*y+m*R+g*I,a[2]=_*E+x*D+M*X,a[5]=_*S+x*P+M*O,a[8]=_*y+x*R+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],m=e[8];return t*c*m-t*u*f-i*a*m+i*u*d+s*a*f-s*c*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=m*c-u*f,_=u*d-m*a,x=f*a-c*d,M=t*g+i*_+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*f-m*i)*E,e[2]=(u*i-s*c)*E,e[3]=_*E,e[4]=(m*t-s*d)*E,e[5]=(s*a-u*t)*E,e[6]=x*E,e[7]=(i*d-f*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const d=Math.cos(a),f=Math.sin(a);return this.set(i*d,i*f,-i*(d*c+f*u)+c+e,-s*f,s*d,-s*(-f*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new ct;function ev(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Oa(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function wy(){const o=Oa("canvas");return o.style.display="block",o}const fg={};function ba(o){o in fg||(fg[o]=!0,console.warn(o))}function Ay(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function Ry(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function by(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:On,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ut&&(o.r=fr(o.r),o.g=fr(o.g),o.b=fr(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ut&&(o.r=So(o.r),o.g=So(o.g),o.b=So(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===jr?Fc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function fr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function So(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const pg=[.64,.33,.3,.6,.15,.06],mg=[.2126,.7152,.0722],gg=[.3127,.329],_g=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vg=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[On]:{primaries:pg,whitePoint:gg,transfer:Fc,toXYZ:_g,fromXYZ:vg,luminanceCoefficients:mg,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:pg,whitePoint:gg,transfer:Ut,toXYZ:_g,fromXYZ:vg,luminanceCoefficients:mg,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});let Qs;class Cy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=Oa("canvas")),Qs.width=e.width,Qs.height=e.height;const i=Qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=fr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fr(t[i]/255)*255):t[i]=fr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Py=0;class tv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(Rh(s[c].image)):a.push(Rh(s[c]))}else a=Rh(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Rh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Cy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ly=0;class hn extends ws{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=Xr,s=Xr,a=Jn,c=hr,u=hi,d=mr,f=hn.DEFAULT_ANISOTROPY,m=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Ri(),this.name="",this.source=new tv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ao:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case Dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ao:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case Dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=z_;hn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,f=d[0],m=d[4],g=d[8],_=d[1],x=d[5],M=d[9],E=d[2],S=d[6],y=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(f+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,R=(x+1)/2,X=(y+1)/2,O=(m+_)/4,I=(g+E)/4,H=(M+S)/4;return P>R&&P>X?P<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(P),s=O/i,a=I/i):R>X?R<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(R),i=O/s,a=H/s):X<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(X),i=I/a,s=H/a),this.set(i,s,a,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(_-m)*(_-m));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-E)/D,this.z=(_-m)/D,this.w=Math.acos((f+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dy extends ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends Dy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nv extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ny extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let d=i[s+0],f=i[s+1],m=i[s+2],g=i[s+3];const _=a[c+0],x=a[c+1],M=a[c+2],E=a[c+3];if(u===0){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==_||f!==x||m!==M){let S=1-u;const y=d*_+f*x+m*M+g*E,D=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const X=Math.sqrt(P),O=Math.atan2(X,y*D);S=Math.sin(S*O)/X,u=Math.sin(u*O)/X}const R=u*D;if(d=d*S+_*R,f=f*S+x*R,m=m*S+M*R,g=g*S+E*R,S===1-u){const X=1/Math.sqrt(d*d+f*f+m*m+g*g);d*=X,f*=X,m*=X,g*=X}}e[t]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],d=i[s+1],f=i[s+2],m=i[s+3],g=a[c],_=a[c+1],x=a[c+2],M=a[c+3];return e[t]=u*M+m*g+d*x-f*_,e[t+1]=d*M+m*_+f*g-u*x,e[t+2]=f*M+m*x+u*_-d*g,e[t+3]=m*M-u*g-d*_-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,f=u(i/2),m=u(s/2),g=u(a/2),_=d(i/2),x=d(s/2),M=d(a/2);switch(c){case"XYZ":this._x=_*m*g+f*x*M,this._y=f*x*g-_*m*M,this._z=f*m*M+_*x*g,this._w=f*m*g-_*x*M;break;case"YXZ":this._x=_*m*g+f*x*M,this._y=f*x*g-_*m*M,this._z=f*m*M-_*x*g,this._w=f*m*g+_*x*M;break;case"ZXY":this._x=_*m*g-f*x*M,this._y=f*x*g+_*m*M,this._z=f*m*M+_*x*g,this._w=f*m*g-_*x*M;break;case"ZYX":this._x=_*m*g-f*x*M,this._y=f*x*g+_*m*M,this._z=f*m*M-_*x*g,this._w=f*m*g+_*x*M;break;case"YZX":this._x=_*m*g+f*x*M,this._y=f*x*g+_*m*M,this._z=f*m*M-_*x*g,this._w=f*m*g-_*x*M;break;case"XZY":this._x=_*m*g-f*x*M,this._y=f*x*g-_*m*M,this._z=f*m*M+_*x*g,this._w=f*m*g+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],d=t[9],f=t[2],m=t[6],g=t[10],_=i+u+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-d)*x,this._y=(a-f)*x,this._z=(c-s)*x}else if(i>u&&i>g){const x=2*Math.sqrt(1+i-u-g);this._w=(m-d)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+f)/x}else if(u>g){const x=2*Math.sqrt(1+u-i-g);this._w=(a-f)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+g-i-u);this._w=(c-s)/x,this._x=(a+f)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,d=t._y,f=t._z,m=t._w;return this._x=i*m+c*u+s*f-a*d,this._y=s*m+c*d+a*u-i*f,this._z=a*m+c*f+i*d-s*u,this._w=c*m-i*u-s*d-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const f=Math.sqrt(d),m=Math.atan2(f,u),g=Math.sin((1-t)*m)/f,_=Math.sin(t*m)/f;return this._w=c*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,d=e.w,f=2*(c*s-u*i),m=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+d*f+c*g-u*m,this.y=i+d*m+u*f-a*g,this.z=s+d*g+a*m-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=s*d-a*u,this.y=a*c-i*d,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bh.copy(this).projectOnVector(e),this.sub(bh)}reflect(e){return this.sub(bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bh=new B,xg=new Bi;class Hi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,yi):yi.fromBufferAttribute(a,c),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yl.copy(i.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),ql.subVectors(this.max,ga),Js.subVectors(e.a,ga),eo.subVectors(e.b,ga),to.subVectors(e.c,ga),Fr.subVectors(eo,Js),kr.subVectors(to,eo),ds.subVectors(Js,to);let t=[0,-Fr.z,Fr.y,0,-kr.z,kr.y,0,-ds.z,ds.y,Fr.z,0,-Fr.x,kr.z,0,-kr.x,ds.z,0,-ds.x,-Fr.y,Fr.x,0,-kr.y,kr.x,0,-ds.y,ds.x,0];return!Ch(t,Js,eo,to,ql)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,Js,eo,to,ql))?!1:(Kl.crossVectors(Fr,kr),t=[Kl.x,Kl.y,Kl.z],Ch(t,Js,eo,to,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new B,new B,new B,new B,new B,new B,new B,new B],yi=new B,Yl=new Hi,Js=new B,eo=new B,to=new B,Fr=new B,kr=new B,ds=new B,ga=new B,ql=new B,Kl=new B,fs=new B;function Ch(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){fs.fromArray(o,a);const u=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),d=e.dot(fs),f=t.dot(fs),m=i.dot(fs);if(Math.max(-Math.max(d,f,m),Math.min(d,f,m))>u)return!1}return!0}const Iy=new Hi,_a=new B,Ph=new B;class Vi{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Iy.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_a,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Ph)),this.expandByPoint(_a.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ir=new B,Lh=new B,$l=new B,Br=new B,Dh=new B,Zl=new B,Nh=new B;class ka{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Lh.copy(e).add(t).multiplyScalar(.5),$l.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Lh);const a=e.distanceTo(t)*.5,c=-this.direction.dot($l),u=Br.dot(this.direction),d=-Br.dot($l),f=Br.lengthSq(),m=Math.abs(1-c*c);let g,_,x,M;if(m>0)if(g=c*d-u,_=c*u-d,M=a*m,g>=0)if(_>=-M)if(_<=M){const E=1/m;g*=E,_*=E,x=g*(g+c*_+2*u)+_*(c*g+_+2*d)+f}else _=a,g=Math.max(0,-(c*_+u)),x=-g*g+_*(_+2*d)+f;else _=-a,g=Math.max(0,-(c*_+u)),x=-g*g+_*(_+2*d)+f;else _<=-M?(g=Math.max(0,-(-c*a+u)),_=g>0?-a:Math.min(Math.max(-a,-d),a),x=-g*g+_*(_+2*d)+f):_<=M?(g=0,_=Math.min(Math.max(-a,-d),a),x=_*(_+2*d)+f):(g=Math.max(0,-(c*a+u)),_=g>0?a:Math.min(Math.max(-a,-d),a),x=-g*g+_*(_+2*d)+f);else _=c>0?-a:a,g=Math.max(0,-(c*_+u)),x=-g*g+_*(_+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Lh).addScaledVector($l,_),x}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const i=ir.dot(this.direction),s=ir.dot(ir)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,d;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return f>=0?(i=(e.min.x-_.x)*f,s=(e.max.x-_.x)*f):(i=(e.max.x-_.x)*f,s=(e.min.x-_.x)*f),m>=0?(a=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||u>s)||((u>i||i!==i)&&(i=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,i,s,a){Dh.subVectors(t,e),Zl.subVectors(i,e),Nh.crossVectors(Dh,Zl);let c=this.direction.dot(Nh),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Br.subVectors(this.origin,e);const d=u*this.direction.dot(Zl.crossVectors(Br,Zl));if(d<0)return null;const f=u*this.direction.dot(Dh.cross(Br));if(f<0||d+f>c)return null;const m=-u*Br.dot(Nh);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,s,a,c,u,d,f,m,g,_,x,M,E,S){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,d,f,m,g,_,x,M,E,S)}set(e,t,i,s,a,c,u,d,f,m,g,_,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=s,y[1]=a,y[5]=c,y[9]=u,y[13]=d,y[2]=f,y[6]=m,y[10]=g,y[14]=_,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/no.setFromMatrixColumn(e,0).length(),a=1/no.setFromMatrixColumn(e,1).length(),c=1/no.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(s),f=Math.sin(s),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=c*m,x=c*g,M=u*m,E=u*g;t[0]=d*m,t[4]=-d*g,t[8]=f,t[1]=x+M*f,t[5]=_-E*f,t[9]=-u*d,t[2]=E-_*f,t[6]=M+x*f,t[10]=c*d}else if(e.order==="YXZ"){const _=d*m,x=d*g,M=f*m,E=f*g;t[0]=_+E*u,t[4]=M*u-x,t[8]=c*f,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=x*u-M,t[6]=E+_*u,t[10]=c*d}else if(e.order==="ZXY"){const _=d*m,x=d*g,M=f*m,E=f*g;t[0]=_-E*u,t[4]=-c*g,t[8]=M+x*u,t[1]=x+M*u,t[5]=c*m,t[9]=E-_*u,t[2]=-c*f,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const _=c*m,x=c*g,M=u*m,E=u*g;t[0]=d*m,t[4]=M*f-x,t[8]=_*f+E,t[1]=d*g,t[5]=E*f+_,t[9]=x*f-M,t[2]=-f,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,x=c*f,M=u*d,E=u*f;t[0]=d*m,t[4]=E-_*g,t[8]=M*g+x,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-f*m,t[6]=x*g+M,t[10]=_-E*g}else if(e.order==="XZY"){const _=c*d,x=c*f,M=u*d,E=u*f;t[0]=d*m,t[4]=-g,t[8]=f*m,t[1]=_*g+E,t[5]=c*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=u*m,t[10]=E*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uy,e,Oy)}lookAt(e,t,i){const s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),zr.crossVectors(i,Zn),zr.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),zr.crossVectors(i,Zn)),zr.normalize(),Ql.crossVectors(Zn,zr),s[0]=zr.x,s[4]=Ql.x,s[8]=Zn.x,s[1]=zr.y,s[5]=Ql.y,s[9]=Zn.y,s[2]=zr.z,s[6]=Ql.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],f=i[12],m=i[1],g=i[5],_=i[9],x=i[13],M=i[2],E=i[6],S=i[10],y=i[14],D=i[3],P=i[7],R=i[11],X=i[15],O=s[0],I=s[4],H=s[8],C=s[12],A=s[1],k=s[5],ie=s[9],Z=s[13],le=s[2],he=s[6],ae=s[10],ue=s[14],z=s[3],ce=s[7],oe=s[11],U=s[15];return a[0]=c*O+u*A+d*le+f*z,a[4]=c*I+u*k+d*he+f*ce,a[8]=c*H+u*ie+d*ae+f*oe,a[12]=c*C+u*Z+d*ue+f*U,a[1]=m*O+g*A+_*le+x*z,a[5]=m*I+g*k+_*he+x*ce,a[9]=m*H+g*ie+_*ae+x*oe,a[13]=m*C+g*Z+_*ue+x*U,a[2]=M*O+E*A+S*le+y*z,a[6]=M*I+E*k+S*he+y*ce,a[10]=M*H+E*ie+S*ae+y*oe,a[14]=M*C+E*Z+S*ue+y*U,a[3]=D*O+P*A+R*le+X*z,a[7]=D*I+P*k+R*he+X*ce,a[11]=D*H+P*ie+R*ae+X*oe,a[15]=D*C+P*Z+R*ue+X*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],d=e[9],f=e[13],m=e[2],g=e[6],_=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15];return M*(+a*d*g-s*f*g-a*u*_+i*f*_+s*u*x-i*d*x)+E*(+t*d*x-t*f*_+a*c*_-s*c*x+s*f*m-a*d*m)+S*(+t*f*g-t*u*x-a*c*g+i*c*x+a*u*m-i*f*m)+y*(-s*u*m-t*d*g+t*u*_+s*c*g-i*c*_+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=e[9],_=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],D=g*S*f-E*_*f+E*d*x-u*S*x-g*d*y+u*_*y,P=M*_*f-m*S*f-M*d*x+c*S*x+m*d*y-c*_*y,R=m*E*f-M*g*f+M*u*x-c*E*x-m*u*y+c*g*y,X=M*g*d-m*E*d-M*u*_+c*E*_+m*u*S-c*g*S,O=t*D+i*P+s*R+a*X;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return e[0]=D*I,e[1]=(E*_*a-g*S*a-E*s*x+i*S*x+g*s*y-i*_*y)*I,e[2]=(u*S*a-E*d*a+E*s*f-i*S*f-u*s*y+i*d*y)*I,e[3]=(g*d*a-u*_*a-g*s*f+i*_*f+u*s*x-i*d*x)*I,e[4]=P*I,e[5]=(m*S*a-M*_*a+M*s*x-t*S*x-m*s*y+t*_*y)*I,e[6]=(M*d*a-c*S*a-M*s*f+t*S*f+c*s*y-t*d*y)*I,e[7]=(c*_*a-m*d*a+m*s*f-t*_*f-c*s*x+t*d*x)*I,e[8]=R*I,e[9]=(M*g*a-m*E*a-M*i*x+t*E*x+m*i*y-t*g*y)*I,e[10]=(c*E*a-M*u*a+M*i*f-t*E*f-c*i*y+t*u*y)*I,e[11]=(m*u*a-c*g*a-m*i*f+t*g*f+c*i*x-t*u*x)*I,e[12]=X*I,e[13]=(m*E*s-M*g*s+M*i*_-t*E*_-m*i*S+t*g*S)*I,e[14]=(M*u*s-c*E*s-M*i*d+t*E*d+c*i*S-t*u*S)*I,e[15]=(c*g*s-m*u*s+m*i*d-t*g*d-c*i*_+t*u*_)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,f=a*c,m=a*u;return this.set(f*c+i,f*u-s*d,f*d+s*u,0,f*u+s*d,m*u+i,m*d-s*c,0,f*d-s*u,m*d+s*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,f=a+a,m=c+c,g=u+u,_=a*f,x=a*m,M=a*g,E=c*m,S=c*g,y=u*g,D=d*f,P=d*m,R=d*g,X=i.x,O=i.y,I=i.z;return s[0]=(1-(E+y))*X,s[1]=(x+R)*X,s[2]=(M-P)*X,s[3]=0,s[4]=(x-R)*O,s[5]=(1-(_+y))*O,s[6]=(S+D)*O,s[7]=0,s[8]=(M+P)*I,s[9]=(S-D)*I,s[10]=(1-(_+E))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=no.set(s[0],s[1],s[2]).length();const c=no.set(s[4],s[5],s[6]).length(),u=no.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Si.copy(this);const f=1/a,m=1/c,g=1/u;return Si.elements[0]*=f,Si.elements[1]*=f,Si.elements[2]*=f,Si.elements[4]*=m,Si.elements[5]*=m,Si.elements[6]*=m,Si.elements[8]*=g,Si.elements[9]*=g,Si.elements[10]*=g,t.setFromRotationMatrix(Si),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=dr){const d=this.elements,f=2*a/(t-e),m=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let x,M;if(u===dr)x=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Nc)x=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=dr){const d=this.elements,f=1/(t-e),m=1/(i-s),g=1/(c-a),_=(t+e)*f,x=(i+s)*m;let M,E;if(u===dr)M=(c+a)*g,E=-2*g;else if(u===Nc)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const no=new B,Si=new ut,Uy=new B(0,0,0),Oy=new B(1,1,1),zr=new B,Ql=new B,Zn=new B,yg=new ut,Sg=new Bi;class zi{constructor(e=0,t=0,i=0,s=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],d=s[1],f=s[5],m=s[9],g=s[2],_=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(mn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-mn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class iv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fy=0;const Mg=new B,io=new Bi,rr=new ut,Jl=new B,va=new B,ky=new B,By=new Bi,Eg=new B(1,0,0),Tg=new B(0,1,0),wg=new B(0,0,1),Ag={type:"added"},zy={type:"removed"},ro={type:"childadded",child:null},Ih={type:"childremoved",child:null};class jt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new B,t=new zi,i=new Bi,s=new B(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new ct}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(Eg,e)}rotateY(e){return this.rotateOnAxis(Tg,e)}rotateZ(e){return this.rotateOnAxis(wg,e)}translateOnAxis(e,t){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eg,e)}translateY(e){return this.translateOnAxis(Tg,e)}translateZ(e){return this.translateOnAxis(wg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jl.copy(e):Jl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(va,Jl,this.up):rr.lookAt(Jl,va,this.up),this.quaternion.setFromRotationMatrix(rr),s&&(rr.extractRotation(s.matrixWorld),io.setFromRotationMatrix(rr),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ag),ro.child=e,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zy),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ag),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,By,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,m=d.length;f<m;f++){const g=d[f];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(a(e.materials,this.material[d]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),f=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),x=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const d=[];for(const f in u){const m=u[f];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}jt.DEFAULT_UP=new B(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new B,sr=new B,Uh=new B,or=new B,so=new B,oo=new B,Rg=new B,Oh=new B,Fh=new B,kh=new B,Bh=new Rt,zh=new Rt,Hh=new Rt;class wi{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mi.subVectors(e,t),s.cross(Mi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Mi.subVectors(s,t),sr.subVectors(i,t),Uh.subVectors(e,t);const c=Mi.dot(Mi),u=Mi.dot(sr),d=Mi.dot(Uh),f=sr.dot(sr),m=sr.dot(Uh),g=c*f-u*u;if(g===0)return a.set(0,0,0),null;const _=1/g,x=(f*d-u*m)*_,M=(c*m-u*d)*_;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,i,s,a,c,u,d){return this.getBarycoord(e,t,i,s,or)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,or.x),d.addScaledVector(c,or.y),d.addScaledVector(u,or.z),d)}static getInterpolatedAttribute(e,t,i,s,a,c){return Bh.setScalar(0),zh.setScalar(0),Hh.setScalar(0),Bh.fromBufferAttribute(e,t),zh.fromBufferAttribute(e,i),Hh.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Bh,a.x),c.addScaledVector(zh,a.y),c.addScaledVector(Hh,a.z),c}static isFrontFacing(e,t,i,s){return Mi.subVectors(i,t),sr.subVectors(e,t),Mi.cross(sr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Mi.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return wi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;so.subVectors(s,i),oo.subVectors(a,i),Oh.subVectors(e,i);const d=so.dot(Oh),f=oo.dot(Oh);if(d<=0&&f<=0)return t.copy(i);Fh.subVectors(e,s);const m=so.dot(Fh),g=oo.dot(Fh);if(m>=0&&g<=m)return t.copy(s);const _=d*g-m*f;if(_<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(i).addScaledVector(so,c);kh.subVectors(e,a);const x=so.dot(kh),M=oo.dot(kh);if(M>=0&&x<=M)return t.copy(a);const E=x*f-d*M;if(E<=0&&f>=0&&M<=0)return u=f/(f-M),t.copy(i).addScaledVector(oo,u);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return Rg.subVectors(a,s),u=(g-m)/(g-m+(x-M)),t.copy(s).addScaledVector(Rg,u);const y=1/(S+E+_);return c=E*y,u=_*y,t.copy(i).addScaledVector(so,c).addScaledVector(oo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},ec={h:0,s:0,l:0};function Vh(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=St.workingColorSpace){if(e=hf(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Vh(c,a,e+1/3),this.g=Vh(c,a,e),this.b=Vh(c,a,e-1/3)}return St.toWorkingColorSpace(this,s),this}setStyle(e,t=pn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=rv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return St.fromWorkingColorSpace(Tn.copy(this),e),Math.round(mn(Tn.r*255,0,255))*65536+Math.round(mn(Tn.g*255,0,255))*256+Math.round(mn(Tn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,s=Tn.g,a=Tn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let d,f;const m=(u+c)/2;if(u===c)d=0,f=0;else{const g=c-u;switch(f=m<=.5?g/(c+u):g/(2-c-u),c){case i:d=(s-a)/g+(s<a?6:0);break;case s:d=(a-i)/g+2;break;case a:d=(i-s)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=m,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=pn){St.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,s=Tn.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(ec);const i=La(Hr.h,ec.h,t),s=La(Hr.s,ec.s,t),a=La(Hr.l,ec.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new tt;tt.NAMES=rv;let Hy=0;class Fi extends ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Ri(),this.name="",this.blending=xo,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cd&&(i.blendSrc=this.blendSrc),this.blendDst!==ud&&(i.blendDst=this.blendDst),this.blendEquation!==Ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yr extends Fi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=k_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new B,tc=new Je;class Un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yd,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tc.fromBufferAttribute(this,t),tc.applyMatrix3(e),this.setXY(t,tc.x,tc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yd&&(e.usage=this.usage),e}}class sv extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ov extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gn extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Vy=0;const ci=new ut,Gh=new jt,ao=new B,Qn=new Hi,xa=new Hi,cn=new B;class ei extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ev(e)?ov:sv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ct().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return Gh.lookAt(e),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new gn(i,3))}else{for(let i=0,s=t.count;i<s;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];Qn.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];xa.setFromBufferAttribute(u),this.morphTargetsRelative?(cn.addVectors(Qn.min,xa.min),Qn.expandByPoint(cn),cn.addVectors(Qn.max,xa.max),Qn.expandByPoint(cn)):(Qn.expandByPoint(xa.min),Qn.expandByPoint(xa.max))}Qn.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)cn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(cn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let f=0,m=u.count;f<m;f++)cn.fromBufferAttribute(u,f),d&&(ao.fromBufferAttribute(e,f),cn.add(ao)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let H=0;H<i.count;H++)u[H]=new B,d[H]=new B;const f=new B,m=new B,g=new B,_=new Je,x=new Je,M=new Je,E=new B,S=new B;function y(H,C,A){f.fromBufferAttribute(i,H),m.fromBufferAttribute(i,C),g.fromBufferAttribute(i,A),_.fromBufferAttribute(a,H),x.fromBufferAttribute(a,C),M.fromBufferAttribute(a,A),m.sub(f),g.sub(f),x.sub(_),M.sub(_);const k=1/(x.x*M.y-M.x*x.y);isFinite(k)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(k),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(k),u[H].add(E),u[C].add(E),u[A].add(E),d[H].add(S),d[C].add(S),d[A].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let H=0,C=D.length;H<C;++H){const A=D[H],k=A.start,ie=A.count;for(let Z=k,le=k+ie;Z<le;Z+=3)y(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new B,R=new B,X=new B,O=new B;function I(H){X.fromBufferAttribute(s,H),O.copy(X);const C=u[H];P.copy(C),P.sub(X.multiplyScalar(X.dot(C))).normalize(),R.crossVectors(O,C);const k=R.dot(d[H])<0?-1:1;c.setXYZW(H,P.x,P.y,P.z,k)}for(let H=0,C=D.length;H<C;++H){const A=D[H],k=A.start,ie=A.count;for(let Z=k,le=k+ie;Z<le;Z+=3)I(e.getX(Z+0)),I(e.getX(Z+1)),I(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new B,a=new B,c=new B,u=new B,d=new B,f=new B,m=new B,g=new B;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),u.add(m),d.add(m),f.add(m),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(S,f.x,f.y,f.z)}else for(let _=0,x=t.count;_<x;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(u,d){const f=u.array,m=u.itemSize,g=u.normalized,_=new f.constructor(d.length*m);let x=0,M=0;for(let E=0,S=d.length;E<S;E++){u.isInterleavedBufferAttribute?x=d[E]*u.data.stride+u.offset:x=d[E]*m;for(let y=0;y<m;y++)_[M++]=f[x++]}return new Un(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,s=this.attributes;for(const u in s){const d=s[u],f=e(d,i);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const d=[],f=a[u];for(let m=0,g=f.length;m<g;m++){const _=f[m],x=e(_,i);d.push(x)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const f=i[d];e.data.attributes[d]=f.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],m=[];for(let g=0,_=f.length;g<_;g++){const x=f[g];m.push(x.toJSON(e.data))}m.length>0&&(s[d]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const f in s){const m=s[f];this.setAttribute(f,m.clone(t))}const a=e.morphAttributes;for(const f in a){const m=[],g=a[f];for(let _=0,x=g.length;_<x;_++)m.push(g[_].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,m=c.length;f<m;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bg=new ut,ps=new ka,nc=new Vi,Cg=new B,ic=new B,rc=new B,sc=new B,Wh=new B,oc=new B,Pg=new B,ac=new B;class Dt extends jt{constructor(e=new ei,t=new Yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){oc.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const m=u[d],g=a[d];m!==0&&(Wh.fromBufferAttribute(g,e),c?oc.addScaledVector(Wh,m):oc.addScaledVector(Wh.sub(t),m))}t.add(oc)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(a),ps.copy(e.ray).recast(e.near),!(nc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(nc,Cg)===null||ps.origin.distanceToSquared(Cg)>(e.far-e.near)**2))&&(bg.copy(a).invert(),ps.copy(e.ray).applyMatrix4(bg),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=c[S.materialIndex],D=Math.max(S.start,x.start),P=Math.min(u.count,Math.min(S.start+S.count,x.start+x.count));for(let R=D,X=P;R<X;R+=3){const O=u.getX(R),I=u.getX(R+1),H=u.getX(R+2);s=lc(this,y,e,i,f,m,g,O,I,H),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(u.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const D=u.getX(S),P=u.getX(S+1),R=u.getX(S+2);s=lc(this,c,e,i,f,m,g,D,P,R),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=c[S.materialIndex],D=Math.max(S.start,x.start),P=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let R=D,X=P;R<X;R+=3){const O=R,I=R+1,H=R+2;s=lc(this,y,e,i,f,m,g,O,I,H),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const D=S,P=S+1,R=S+2;s=lc(this,c,e,i,f,m,g,D,P,R),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function Gy(o,e,t,i,s,a,c,u){let d;if(e.side===Nn?d=i.intersectTriangle(c,a,s,!0,u):d=i.intersectTriangle(s,a,c,e.side===pr,u),d===null)return null;ac.copy(u),ac.applyMatrix4(o.matrixWorld);const f=t.ray.origin.distanceTo(ac);return f<t.near||f>t.far?null:{distance:f,point:ac.clone(),object:o}}function lc(o,e,t,i,s,a,c,u,d,f){o.getVertexPosition(u,ic),o.getVertexPosition(d,rc),o.getVertexPosition(f,sc);const m=Gy(o,e,t,i,ic,rc,sc,Pg);if(m){const g=new B;wi.getBarycoord(Pg,ic,rc,sc,g),s&&(m.uv=wi.getInterpolatedAttribute(s,u,d,f,g,new Je)),a&&(m.uv1=wi.getInterpolatedAttribute(a,u,d,f,g,new Je)),c&&(m.normal=wi.getInterpolatedAttribute(c,u,d,f,g,new B),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:u,b:d,c:f,normal:new B,materialIndex:0};wi.getNormal(ic,rc,sc,_.normal),m.face=_,m.barycoord=g}return m}class As extends ei{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],f=[],m=[],g=[];let _=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new gn(f,3)),this.setAttribute("normal",new gn(m,3)),this.setAttribute("uv",new gn(g,2));function M(E,S,y,D,P,R,X,O,I,H,C){const A=R/I,k=X/H,ie=R/2,Z=X/2,le=O/2,he=I+1,ae=H+1;let ue=0,z=0;const ce=new B;for(let oe=0;oe<ae;oe++){const U=oe*k-Z;for(let re=0;re<he;re++){const Ne=re*A-ie;ce[E]=Ne*D,ce[S]=U*P,ce[y]=le,f.push(ce.x,ce.y,ce.z),ce[E]=0,ce[S]=0,ce[y]=O>0?1:-1,m.push(ce.x,ce.y,ce.z),g.push(re/I),g.push(1-oe/H),ue+=1}}for(let oe=0;oe<H;oe++)for(let U=0;U<I;U++){const re=_+U+he*oe,Ne=_+U+he*(oe+1),J=_+(U+1)+he*(oe+1),de=_+(U+1)+he*oe;d.push(re,Ne,de),d.push(Ne,J,de),z+=6}u.addGroup(x,z,C),x+=z,_+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Po(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ln(o){const e={};for(let t=0;t<o.length;t++){const i=Po(o[t]);for(const s in i)e[s]=i[s]}return e}function Wy(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function av(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const jy={clone:Po,merge:Ln};var Xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zr extends Fi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xy,this.fragmentShader=Yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=Wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class lv extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=dr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new B,Lg=new Je,Dg=new Je;class Dn extends lv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,Lg,Dg),t.subVectors(Dg,Lg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;a+=c.offsetX*s/d,t-=c.offsetY*i/f,s*=c.width/d,i*=c.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lo=-90,co=1;class qy extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(lo,co,e,t);s.layers=this.layers,this.add(s);const a=new Dn(lo,co,e,t);a.layers=this.layers,this.add(a);const c=new Dn(lo,co,e,t);c.layers=this.layers,this.add(c);const u=new Dn(lo,co,e,t);u.layers=this.layers,this.add(u);const d=new Dn(lo,co,e,t);d.layers=this.layers,this.add(d);const f=new Dn(lo,co,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,d]=t;for(const f of t)this.remove(f);if(e===dr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,f,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,f),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(g,_,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class cv extends hn{constructor(e,t,i,s,a,c,u,d,f,m){e=e!==void 0?e:[],t=t!==void 0?t:To,super(e,t,i,s,a,c,u,d,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ky extends Ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new cv(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new As(5,5,5),a=new Zr({name:"CubemapFromEquirect",uniforms:Po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:Kr});a.uniforms.tEquirect.value=t;const c=new Dt(s,a),u=t.minFilter;return t.minFilter===hr&&(t.minFilter=Jn),new qy(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}const jh=new B,$y=new B,Zy=new ct;class Wr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=jh.subVectors(i,t).cross($y.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(jh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zy.getNormalMatrix(e),s=this.coplanarPoint(jh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Vi,cc=new B;class df{constructor(e=new Wr,t=new Wr,i=new Wr,s=new Wr,a=new Wr,c=new Wr){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=dr){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],d=s[3],f=s[4],m=s[5],g=s[6],_=s[7],x=s[8],M=s[9],E=s[10],S=s[11],y=s[12],D=s[13],P=s[14],R=s[15];if(i[0].setComponents(d-a,_-f,S-x,R-y).normalize(),i[1].setComponents(d+a,_+f,S+x,R+y).normalize(),i[2].setComponents(d+c,_+m,S+M,R+D).normalize(),i[3].setComponents(d-c,_-m,S-M,R-D).normalize(),i[4].setComponents(d-u,_-g,S-E,R-P).normalize(),t===dr)i[5].setComponents(d+u,_+g,S+E,R+P).normalize();else if(t===Nc)i[5].setComponents(u,g,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(cc.x=s.normal.x>0?e.max.x:e.min.x,cc.y=s.normal.y>0?e.max.y:e.min.y,cc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uv(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function Qy(o){const e=new WeakMap;function t(u,d){const f=u.array,m=u.usage,g=f.byteLength,_=o.createBuffer();o.bindBuffer(d,_),o.bufferData(d,f,m),u.onUploadCallback();let x;if(f instanceof Float32Array)x=o.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=o.SHORT;else if(f instanceof Uint32Array)x=o.UNSIGNED_INT;else if(f instanceof Int32Array)x=o.INT;else if(f instanceof Int8Array)x=o.BYTE;else if(f instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,d,f){const m=d.array,g=d.updateRanges;if(o.bindBuffer(f,u),g.length===0)o.bufferSubData(f,0,m);else{g.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<g.length;x++){const M=g[_],E=g[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,g[_]=E)}g.length=_+1;for(let x=0,M=g.length;x<M;x++){const E=g[x];o.bufferSubData(f,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(o.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,d),f.version=u.version}}return{get:s,remove:a,update:c}}class kc extends ei{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(s),f=u+1,m=d+1,g=e/u,_=t/d,x=[],M=[],E=[],S=[];for(let y=0;y<m;y++){const D=y*_-c;for(let P=0;P<f;P++){const R=P*g-a;M.push(R,-D,0),E.push(0,0,1),S.push(P/u),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let D=0;D<u;D++){const P=D+f*y,R=D+f*(y+1),X=D+1+f*(y+1),O=D+1+f*y;x.push(P,R,O),x.push(R,X,O)}this.setIndex(x),this.setAttribute("position",new gn(M,3)),this.setAttribute("normal",new gn(E,3)),this.setAttribute("uv",new gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,MS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ES=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CS="gl_FragColor = linearToOutputTexel( gl_FragColor );",PS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$S=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_M=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_E=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Jy,alphahash_pars_fragment:eS,alphamap_fragment:tS,alphamap_pars_fragment:nS,alphatest_fragment:iS,alphatest_pars_fragment:rS,aomap_fragment:sS,aomap_pars_fragment:oS,batching_pars_vertex:aS,batching_vertex:lS,begin_vertex:cS,beginnormal_vertex:uS,bsdfs:hS,iridescence_fragment:dS,bumpmap_pars_fragment:fS,clipping_planes_fragment:pS,clipping_planes_pars_fragment:mS,clipping_planes_pars_vertex:gS,clipping_planes_vertex:_S,color_fragment:vS,color_pars_fragment:xS,color_pars_vertex:yS,color_vertex:SS,common:MS,cube_uv_reflection_fragment:ES,defaultnormal_vertex:TS,displacementmap_pars_vertex:wS,displacementmap_vertex:AS,emissivemap_fragment:RS,emissivemap_pars_fragment:bS,colorspace_fragment:CS,colorspace_pars_fragment:PS,envmap_fragment:LS,envmap_common_pars_fragment:DS,envmap_pars_fragment:NS,envmap_pars_vertex:IS,envmap_physical_pars_fragment:jS,envmap_vertex:US,fog_vertex:OS,fog_pars_vertex:FS,fog_fragment:kS,fog_pars_fragment:BS,gradientmap_pars_fragment:zS,lightmap_pars_fragment:HS,lights_lambert_fragment:VS,lights_lambert_pars_fragment:GS,lights_pars_begin:WS,lights_toon_fragment:XS,lights_toon_pars_fragment:YS,lights_phong_fragment:qS,lights_phong_pars_fragment:KS,lights_physical_fragment:$S,lights_physical_pars_fragment:ZS,lights_fragment_begin:QS,lights_fragment_maps:JS,lights_fragment_end:eM,logdepthbuf_fragment:tM,logdepthbuf_pars_fragment:nM,logdepthbuf_pars_vertex:iM,logdepthbuf_vertex:rM,map_fragment:sM,map_pars_fragment:oM,map_particle_fragment:aM,map_particle_pars_fragment:lM,metalnessmap_fragment:cM,metalnessmap_pars_fragment:uM,morphinstance_vertex:hM,morphcolor_vertex:dM,morphnormal_vertex:fM,morphtarget_pars_vertex:pM,morphtarget_vertex:mM,normal_fragment_begin:gM,normal_fragment_maps:_M,normal_pars_fragment:vM,normal_pars_vertex:xM,normal_vertex:yM,normalmap_pars_fragment:SM,clearcoat_normal_fragment_begin:MM,clearcoat_normal_fragment_maps:EM,clearcoat_pars_fragment:TM,iridescence_pars_fragment:wM,opaque_fragment:AM,packing:RM,premultiplied_alpha_fragment:bM,project_vertex:CM,dithering_fragment:PM,dithering_pars_fragment:LM,roughnessmap_fragment:DM,roughnessmap_pars_fragment:NM,shadowmap_pars_fragment:IM,shadowmap_pars_vertex:UM,shadowmap_vertex:OM,shadowmask_pars_fragment:FM,skinbase_vertex:kM,skinning_pars_vertex:BM,skinning_vertex:zM,skinnormal_vertex:HM,specularmap_fragment:VM,specularmap_pars_fragment:GM,tonemapping_fragment:WM,tonemapping_pars_fragment:jM,transmission_fragment:XM,transmission_pars_fragment:YM,uv_pars_fragment:qM,uv_pars_vertex:KM,uv_vertex:$M,worldpos_vertex:ZM,background_vert:QM,background_frag:JM,backgroundCube_vert:eE,backgroundCube_frag:tE,cube_vert:nE,cube_frag:iE,depth_vert:rE,depth_frag:sE,distanceRGBA_vert:oE,distanceRGBA_frag:aE,equirect_vert:lE,equirect_frag:cE,linedashed_vert:uE,linedashed_frag:hE,meshbasic_vert:dE,meshbasic_frag:fE,meshlambert_vert:pE,meshlambert_frag:mE,meshmatcap_vert:gE,meshmatcap_frag:_E,meshnormal_vert:vE,meshnormal_frag:xE,meshphong_vert:yE,meshphong_frag:SE,meshphysical_vert:ME,meshphysical_frag:EE,meshtoon_vert:TE,meshtoon_frag:wE,points_vert:AE,points_frag:RE,shadow_vert:bE,shadow_frag:CE,sprite_vert:PE,sprite_frag:LE},Ce={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ui={basic:{uniforms:Ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Ln([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Ln([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Ln([Ce.points,Ce.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Ln([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Ln([Ce.common,Ce.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Ln([Ce.sprite,Ce.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Ln([Ce.common,Ce.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Ln([Ce.lights,Ce.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ui.physical={uniforms:Ln([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const uc={r:0,b:0,g:0},gs=new zi,DE=new ut;function NE(o,e,t,i,s,a,c){const u=new tt(0);let d=a===!0?0:1,f,m,g=null,_=0,x=null;function M(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?t:e).get(P)),P}function E(D){let P=!1;const R=M(D);R===null?y(u,d):R&&R.isColor&&(y(R,1),P=!0);const X=o.xr.getEnvironmentBlendMode();X==="additive"?i.buffers.color.setClear(0,0,0,1,c):X==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(D,P){const R=M(P);R&&(R.isCubeTexture||R.mapping===Oc)?(m===void 0&&(m=new Dt(new As(1,1,1),new Zr({name:"BackgroundCubeMaterial",uniforms:Po(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(X,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),gs.copy(P.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.material.uniforms.envMap.value=R,m.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(DE.makeRotationFromEuler(gs)),m.material.toneMapped=St.getTransfer(R.colorSpace)!==Ut,(g!==R||_!==R.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,g=R,_=R.version,x=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(f===void 0&&(f=new Dt(new kc(2,2),new Zr({name:"BackgroundMaterial",uniforms:Po(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=R,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.toneMapped=St.getTransfer(R.colorSpace)!==Ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),f.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||_!==R.version||x!==o.toneMapping)&&(f.material.needsUpdate=!0,g=R,_=R.version,x=o.toneMapping),f.layers.enableAll(),D.unshift(f,f.geometry,f.material,0,0,null))}function y(D,P){D.getRGB(uc,av(o)),i.buffers.color.setClear(uc.r,uc.g,uc.b,P,c)}return{getClearColor:function(){return u},setClearColor:function(D,P=1){u.set(D),d=P,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,y(u,d)},render:E,addToRenderList:S}}function IE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,c=!1;function u(A,k,ie,Z,le){let he=!1;const ae=g(Z,ie,k);a!==ae&&(a=ae,f(a.object)),he=x(A,Z,ie,le),he&&M(A,Z,ie,le),le!==null&&e.update(le,o.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,R(A,k,ie,Z),le!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function d(){return o.createVertexArray()}function f(A){return o.bindVertexArray(A)}function m(A){return o.deleteVertexArray(A)}function g(A,k,ie){const Z=ie.wireframe===!0;let le=i[A.id];le===void 0&&(le={},i[A.id]=le);let he=le[k.id];he===void 0&&(he={},le[k.id]=he);let ae=he[Z];return ae===void 0&&(ae=_(d()),he[Z]=ae),ae}function _(A){const k=[],ie=[],Z=[];for(let le=0;le<t;le++)k[le]=0,ie[le]=0,Z[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ie,attributeDivisors:Z,object:A,attributes:{},index:null}}function x(A,k,ie,Z){const le=a.attributes,he=k.attributes;let ae=0;const ue=ie.getAttributes();for(const z in ue)if(ue[z].location>=0){const oe=le[z];let U=he[z];if(U===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),oe===void 0||oe.attribute!==U||U&&oe.data!==U.data)return!0;ae++}return a.attributesNum!==ae||a.index!==Z}function M(A,k,ie,Z){const le={},he=k.attributes;let ae=0;const ue=ie.getAttributes();for(const z in ue)if(ue[z].location>=0){let oe=he[z];oe===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor));const U={};U.attribute=oe,oe&&oe.data&&(U.data=oe.data),le[z]=U,ae++}a.attributes=le,a.attributesNum=ae,a.index=Z}function E(){const A=a.newAttributes;for(let k=0,ie=A.length;k<ie;k++)A[k]=0}function S(A){y(A,0)}function y(A,k){const ie=a.newAttributes,Z=a.enabledAttributes,le=a.attributeDivisors;ie[A]=1,Z[A]===0&&(o.enableVertexAttribArray(A),Z[A]=1),le[A]!==k&&(o.vertexAttribDivisor(A,k),le[A]=k)}function D(){const A=a.newAttributes,k=a.enabledAttributes;for(let ie=0,Z=k.length;ie<Z;ie++)k[ie]!==A[ie]&&(o.disableVertexAttribArray(ie),k[ie]=0)}function P(A,k,ie,Z,le,he,ae){ae===!0?o.vertexAttribIPointer(A,k,ie,le,he):o.vertexAttribPointer(A,k,ie,Z,le,he)}function R(A,k,ie,Z){E();const le=Z.attributes,he=ie.getAttributes(),ae=k.defaultAttributeValues;for(const ue in he){const z=he[ue];if(z.location>=0){let ce=le[ue];if(ce===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){const oe=ce.normalized,U=ce.itemSize,re=e.get(ce);if(re===void 0)continue;const Ne=re.buffer,J=re.type,de=re.bytesPerElement,Ee=J===o.INT||J===o.UNSIGNED_INT||ce.gpuType===rf;if(ce.isInterleavedBufferAttribute){const xe=ce.data,Ae=xe.stride,Ie=ce.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<z.locationSize;Ze++)y(z.location+Ze,xe.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<z.locationSize;Ze++)S(z.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let Ze=0;Ze<z.locationSize;Ze++)P(z.location+Ze,U/z.locationSize,J,oe,Ae*de,(Ie+U/z.locationSize*Ze)*de,Ee)}else{if(ce.isInstancedBufferAttribute){for(let xe=0;xe<z.locationSize;xe++)y(z.location+xe,ce.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<z.locationSize;xe++)S(z.location+xe);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let xe=0;xe<z.locationSize;xe++)P(z.location+xe,U/z.locationSize,J,oe,U*de,U/z.locationSize*xe*de,Ee)}}else if(ae!==void 0){const oe=ae[ue];if(oe!==void 0)switch(oe.length){case 2:o.vertexAttrib2fv(z.location,oe);break;case 3:o.vertexAttrib3fv(z.location,oe);break;case 4:o.vertexAttrib4fv(z.location,oe);break;default:o.vertexAttrib1fv(z.location,oe)}}}}D()}function X(){H();for(const A in i){const k=i[A];for(const ie in k){const Z=k[ie];for(const le in Z)m(Z[le].object),delete Z[le];delete k[ie]}delete i[A]}}function O(A){if(i[A.id]===void 0)return;const k=i[A.id];for(const ie in k){const Z=k[ie];for(const le in Z)m(Z[le].object),delete Z[le];delete k[ie]}delete i[A.id]}function I(A){for(const k in i){const ie=i[k];if(ie[A.id]===void 0)continue;const Z=ie[A.id];for(const le in Z)m(Z[le].object),delete Z[le];delete ie[A.id]}}function H(){C(),c=!0,a!==s&&(a=s,f(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:H,resetDefaultState:C,dispose:X,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:S,disableUnusedAttributes:D}}function UE(o,e,t){let i;function s(f){i=f}function a(f,m){o.drawArrays(i,f,m),t.update(m,i,1)}function c(f,m,g){g!==0&&(o.drawArraysInstanced(i,f,m,g),t.update(m,i,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,i,1)}function d(f,m,g,_){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<f.length;M++)c(f[M],m[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(i,f,0,m,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*_[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function OE(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(I){return!(I!==hi&&i.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const H=I===Fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==mr&&i.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ai&&!H)}function d(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=d(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=M>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:X,maxSamples:O}}function FE(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new Wr,u=new ct,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||i!==0||s;return s=_,i=g.length,x},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,x){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,y=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?m(null):f();else{const D=a?0:i,P=D*4;let R=y.clippingState||null;d.value=R,R=m(M,_,P,x);for(let X=0;X!==P;++X)R[X]=t[X];y.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,x,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const y=x+E*4,D=_.matrixWorldInverse;u.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,R=x;P!==E;++P,R+=4)c.copy(g[P]).applyMatrix4(D,u),c.normal.toArray(S,R),S[R+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function kE(o){let e=new WeakMap;function t(c,u){return u===vd?c.mapping=To:u===xd&&(c.mapping=wo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===vd||u===xd)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const f=new Ky(d.height);return f.fromEquirectangularTexture(o,c),e.set(c,f),c.addEventListener("dispose",s),t(f.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class ff extends lv{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _o=4,Ng=[.125,.215,.35,.446,.526,.582],Ms=20,Xh=new ff,Ig=new tt;let Yh=null,qh=0,Kh=0,$h=!1;const ys=(1+Math.sqrt(5))/2,uo=1/ys,Ug=[new B(-ys,uo,0),new B(ys,uo,0),new B(-uo,0,ys),new B(uo,0,ys),new B(0,ys,-uo),new B(0,ys,uo),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class qd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Yh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yh,qh,Kh),this._renderer.xr.enabled=$h,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===To||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Fa,format:hi,colorSpace:On,depthBuffer:!1},s=Og(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Og(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BE(a)),this._blurMaterial=zE(a,e,t)}return s}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Xh)}_sceneToCubeUV(e,t,i,s){const u=new Dn(90,1,t,i),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(Ig),m.toneMapping=$r,m.autoClear=!1;const x=new Yr({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),M=new Dt(new As,x);let E=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,E=!0):(x.color.copy(Ig),E=!0);for(let y=0;y<6;y++){const D=y%3;D===0?(u.up.set(0,d[y],0),u.lookAt(f[y],0,0)):D===1?(u.up.set(0,0,d[y]),u.lookAt(0,f[y],0)):(u.up.set(0,d[y],0),u.lookAt(0,0,f[y]));const P=this._cubeSize;hc(s,D*P,y>2?P:0,P,P),m.setRenderTarget(s),E&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===To||e.mapping===wo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fg());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Dt(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;hc(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Xh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Ug[(s-a-1)%Ug.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Dt(this._lodPlanes[s],f),_=f.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Ms-1),E=a/M,S=isFinite(a)?1+Math.floor(m*E):Ms;S>Ms&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ms}`);const y=[];let D=0;for(let I=0;I<Ms;++I){const H=I/E,C=Math.exp(-H*H/2);y.push(C),I===0?D+=C:I<S&&(D+=2*C)}for(let I=0;I<y.length;I++)y[I]=y[I]/D;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:P}=this;_.dTheta.value=M,_.mipInt.value=P-i;const R=this._sizeLods[s],X=3*R*(s>P-_o?s-P+_o:0),O=4*(this._cubeSize-R);hc(t,X,O,3*R,2*R),d.setRenderTarget(t),d.render(g,Xh)}}function BE(o){const e=[],t=[],i=[];let s=o;const a=o-_o+1+Ng.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let d=1/u;c>o-_o?d=Ng[c-o+_o-1]:c===0&&(d=0),i.push(d);const f=1/(u-2),m=-f,g=1+f,_=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,E=3,S=2,y=1,D=new Float32Array(E*M*x),P=new Float32Array(S*M*x),R=new Float32Array(y*M*x);for(let O=0;O<x;O++){const I=O%3*2/3-1,H=O>2?0:-1,C=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];D.set(C,E*M*O),P.set(_,S*M*O);const A=[O,O,O,O,O,O];R.set(A,y*M*O)}const X=new ei;X.setAttribute("position",new Un(D,E)),X.setAttribute("uv",new Un(P,S)),X.setAttribute("faceIndex",new Un(R,y)),e.push(X),s>_o&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Og(o,e,t){const i=new Ts(o,e,t);return i.texture.mapping=Oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hc(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function zE(o,e,t){const i=new Float32Array(Ms),s=new B(0,1,0);return new Zr({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function Fg(){return new Zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function kg(){return new Zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function pf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HE(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,f=d===vd||d===xd,m=d===To||d===wo;if(f||m){let g=e.get(u);const _=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new qd(o)),g=f?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return f&&x&&x.height>0||m&&x&&s(x)?(t===null&&(t=new qd(o)),g=f?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let d=0;const f=6;for(let m=0;m<f;m++)u[m]!==void 0&&d++;return d===f}function a(u){const d=u.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function VE(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ba("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function GE(o,e,t,i){const s={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const E=_.morphAttributes[M];for(let S=0,y=E.length;S<y;S++)e.remove(E[S])}_.removeEventListener("dispose",c),delete s[_.id];const x=a.get(_);x&&(e.remove(x),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const M in _)e.update(_[M],o.ARRAY_BUFFER);const x=g.morphAttributes;for(const M in x){const E=x[M];for(let S=0,y=E.length;S<y;S++)e.update(E[S],o.ARRAY_BUFFER)}}function f(g){const _=[],x=g.index,M=g.attributes.position;let E=0;if(x!==null){const D=x.array;E=x.version;for(let P=0,R=D.length;P<R;P+=3){const X=D[P+0],O=D[P+1],I=D[P+2];_.push(X,O,O,I,I,X)}}else if(M!==void 0){const D=M.array;E=M.version;for(let P=0,R=D.length/3-1;P<R;P+=3){const X=P+0,O=P+1,I=P+2;_.push(X,O,O,I,I,X)}}else return;const S=new(ev(_)?ov:sv)(_,1);S.version=E;const y=a.get(g);y&&e.remove(y),a.set(g,S)}function m(g){const _=a.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&f(g)}else f(g);return a.get(g)}return{get:u,update:d,getWireframeAttribute:m}}function WE(o,e,t){let i;function s(_){i=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function d(_,x){o.drawElements(i,x,a,_*c),t.update(x,i,1)}function f(_,x,M){M!==0&&(o.drawElementsInstanced(i,x,a,_*c,M),t.update(x,i,M))}function m(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,i,1)}function g(_,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)f(_[y]/c,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,a,_,0,E,0,M);let y=0;for(let D=0;D<M;D++)y+=x[D]*E[D];t.update(y,i,1)}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function jE(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function XE(o,e,t){const i=new WeakMap,s=new Rt;function a(c,u,d){const f=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(u);if(_===void 0||_.count!==g){let A=function(){H.dispose(),i.delete(u),u.removeEventListener("dispose",A)};var x=A;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let R=0;M===!0&&(R=1),E===!0&&(R=2),S===!0&&(R=3);let X=u.attributes.position.count*R,O=1;X>e.maxTextureSize&&(O=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const I=new Float32Array(X*O*4*g),H=new nv(I,X,O,g);H.type=Ai,H.needsUpdate=!0;const C=R*4;for(let k=0;k<g;k++){const ie=y[k],Z=D[k],le=P[k],he=X*O*4*k;for(let ae=0;ae<ie.count;ae++){const ue=ae*C;M===!0&&(s.fromBufferAttribute(ie,ae),I[he+ue+0]=s.x,I[he+ue+1]=s.y,I[he+ue+2]=s.z,I[he+ue+3]=0),E===!0&&(s.fromBufferAttribute(Z,ae),I[he+ue+4]=s.x,I[he+ue+5]=s.y,I[he+ue+6]=s.z,I[he+ue+7]=0),S===!0&&(s.fromBufferAttribute(le,ae),I[he+ue+8]=s.x,I[he+ue+9]=s.y,I[he+ue+10]=s.z,I[he+ue+11]=le.itemSize===4?s.w:1)}}_={count:g,texture:H,size:new Je(X,O)},i.set(u,_),u.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<f.length;S++)M+=f[S];const E=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",f)}d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function YE(o,e,t,i){let s=new WeakMap;function a(d){const f=i.render.frame,m=d.geometry,g=e.get(d,m);if(s.get(g)!==f&&(e.update(g),s.set(g,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),s.get(d)!==f&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,f))),d.isSkinnedMesh){const _=d.skeleton;s.get(_)!==f&&(_.update(),s.set(_,f))}return g}function c(){s=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}class hv extends hn{constructor(e,t,i,s,a,c,u,d,f,m=yo){if(m!==yo&&m!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===yo&&(i=Es),i===void 0&&m===bo&&(i=Ro),super(null,s,a,c,u,d,m,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:In,this.minFilter=d!==void 0?d:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const dv=new hn,Bg=new hv(1,1),fv=new nv,pv=new Ny,mv=new cv,zg=[],Hg=[],Vg=new Float32Array(16),Gg=new Float32Array(9),Wg=new Float32Array(4);function Io(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=zg[s];if(a===void 0&&(a=new Float32Array(s),zg[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function rn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function sn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Bc(o,e){let t=Hg[e];t===void 0&&(t=new Int32Array(e),Hg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function qE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function KE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;o.uniform2fv(this.addr,e),sn(t,e)}}function $E(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;o.uniform3fv(this.addr,e),sn(t,e)}}function ZE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;o.uniform4fv(this.addr,e),sn(t,e)}}function QE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Wg.set(i),o.uniformMatrix2fv(this.addr,!1,Wg),sn(t,i)}}function JE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Gg.set(i),o.uniformMatrix3fv(this.addr,!1,Gg),sn(t,i)}}function eT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Vg.set(i),o.uniformMatrix4fv(this.addr,!1,Vg),sn(t,i)}}function tT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function nT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;o.uniform2iv(this.addr,e),sn(t,e)}}function iT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;o.uniform3iv(this.addr,e),sn(t,e)}}function rT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;o.uniform4iv(this.addr,e),sn(t,e)}}function sT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function oT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;o.uniform2uiv(this.addr,e),sn(t,e)}}function aT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;o.uniform3uiv(this.addr,e),sn(t,e)}}function lT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;o.uniform4uiv(this.addr,e),sn(t,e)}}function cT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Bg.compareFunction=J_,a=Bg):a=dv,t.setTexture2D(e||a,s)}function uT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||pv,s)}function hT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||mv,s)}function dT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||fv,s)}function fT(o){switch(o){case 5126:return qE;case 35664:return KE;case 35665:return $E;case 35666:return ZE;case 35674:return QE;case 35675:return JE;case 35676:return eT;case 5124:case 35670:return tT;case 35667:case 35671:return nT;case 35668:case 35672:return iT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return aT;case 36296:return lT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return uT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return dT}}function pT(o,e){o.uniform1fv(this.addr,e)}function mT(o,e){const t=Io(e,this.size,2);o.uniform2fv(this.addr,t)}function gT(o,e){const t=Io(e,this.size,3);o.uniform3fv(this.addr,t)}function _T(o,e){const t=Io(e,this.size,4);o.uniform4fv(this.addr,t)}function vT(o,e){const t=Io(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function xT(o,e){const t=Io(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function yT(o,e){const t=Io(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function ST(o,e){o.uniform1iv(this.addr,e)}function MT(o,e){o.uniform2iv(this.addr,e)}function ET(o,e){o.uniform3iv(this.addr,e)}function TT(o,e){o.uniform4iv(this.addr,e)}function wT(o,e){o.uniform1uiv(this.addr,e)}function AT(o,e){o.uniform2uiv(this.addr,e)}function RT(o,e){o.uniform3uiv(this.addr,e)}function bT(o,e){o.uniform4uiv(this.addr,e)}function CT(o,e,t){const i=this.cache,s=e.length,a=Bc(t,s);rn(i,a)||(o.uniform1iv(this.addr,a),sn(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||dv,a[c])}function PT(o,e,t){const i=this.cache,s=e.length,a=Bc(t,s);rn(i,a)||(o.uniform1iv(this.addr,a),sn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||pv,a[c])}function LT(o,e,t){const i=this.cache,s=e.length,a=Bc(t,s);rn(i,a)||(o.uniform1iv(this.addr,a),sn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||mv,a[c])}function DT(o,e,t){const i=this.cache,s=e.length,a=Bc(t,s);rn(i,a)||(o.uniform1iv(this.addr,a),sn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||fv,a[c])}function NT(o){switch(o){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return _T;case 35674:return vT;case 35675:return xT;case 35676:return yT;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return wT;case 36294:return AT;case 36295:return RT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return DT}}class IT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fT(t.type)}}class UT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NT(t.type)}}class OT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const Zh=/(\w+)(\])?(\[|\.)?/g;function jg(o,e){o.seq.push(e),o.map[e.id]=e}function FT(o,e,t){const i=o.name,s=i.length;for(Zh.lastIndex=0;;){const a=Zh.exec(i),c=Zh.lastIndex;let u=a[1];const d=a[2]==="]",f=a[3];if(d&&(u=u|0),f===void 0||f==="["&&c+2===s){jg(t,f===void 0?new IT(u,o,e):new UT(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new OT(u),jg(t,g)),t=g}}}class Lc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);FT(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Xg(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const kT=37297;let BT=0;function zT(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Yg=new ct;function HT(o){St._getMatrix(Yg,St.workingColorSpace,o);const e=`mat3( ${Yg.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(o)){case Fc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function qg(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+zT(o.getShaderSource(e),c)}else return s}function VT(o,e){const t=HT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function GT(o,e){let t;switch(e){case Wx:t="Linear";break;case jx:t="Reinhard";break;case Xx:t="Cineon";break;case B_:t="ACESFilmic";break;case qx:t="AgX";break;case Kx:t="Neutral";break;case Yx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dc=new B;function WT(){St.getLuminanceCoefficients(dc);const o=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function XT(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function YT(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function Ca(o){return o!==""}function Kg(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $g(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(o){return o.replace(qT,$T)}const KT=new Map;function $T(o,e){let t=ht[e];if(t===void 0){const i=KT.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kd(t)}const ZT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(o){return o.replace(ZT,QT)}function QT(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Qg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===O_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===F_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function ew(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case To:case wo:e="ENVMAP_TYPE_CUBE";break;case Oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tw(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case wo:e="ENVMAP_MODE_REFRACTION";break}return e}function nw(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case k_:e="ENVMAP_BLENDING_MULTIPLY";break;case Vx:e="ENVMAP_BLENDING_MIX";break;case Gx:e="ENVMAP_BLENDING_ADD";break}return e}function iw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function rw(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=JT(t),f=ew(t),m=tw(t),g=nw(t),_=iw(t),x=jT(t),M=XT(a),E=s.createProgram();let S,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ca).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ca).join(`
`),y.length>0&&(y+=`
`)):(S=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),y=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$r?"#define TONE_MAPPING":"",t.toneMapping!==$r?ht.tonemapping_pars_fragment:"",t.toneMapping!==$r?GT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,VT("linearToOutputTexel",t.outputColorSpace),WT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),c=Kd(c),c=Kg(c,t),c=$g(c,t),u=Kd(u),u=Kg(u,t),u=$g(u,t),c=Zg(c),u=Zg(u),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=D+S+c,R=D+y+u,X=Xg(s,s.VERTEX_SHADER,P),O=Xg(s,s.FRAGMENT_SHADER,R);s.attachShader(E,X),s.attachShader(E,O),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(k){if(o.debug.checkShaderErrors){const ie=s.getProgramInfoLog(E).trim(),Z=s.getShaderInfoLog(X).trim(),le=s.getShaderInfoLog(O).trim();let he=!0,ae=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,X,O);else{const ue=qg(s,X,"vertex"),z=qg(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ie+`
`+ue+`
`+z)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(Z===""||le==="")&&(ae=!1);ae&&(k.diagnostics={runnable:he,programLog:ie,vertexShader:{log:Z,prefix:S},fragmentShader:{log:le,prefix:y}})}s.deleteShader(X),s.deleteShader(O),H=new Lc(s,E),C=YT(s,E)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,kT)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=X,this.fragmentShader=O,this}let sw=0;class ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new aw(e),t.set(e,i)),i}}class aw{constructor(e){this.id=sw++,this.code=e,this.usedTimes=0}}function lw(o,e,t,i,s,a,c){const u=new iv,d=new ow,f=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return f.add(C),C===0?"uv":`uv${C}`}function S(C,A,k,ie,Z){const le=ie.fog,he=Z.geometry,ae=C.isMeshStandardMaterial?ie.environment:null,ue=(C.isMeshStandardMaterial?t:e).get(C.envMap||ae),z=ue&&ue.mapping===Oc?ue.image.height:null,ce=M[C.type];C.precision!==null&&(x=s.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const oe=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=oe!==void 0?oe.length:0;let re=0;he.morphAttributes.position!==void 0&&(re=1),he.morphAttributes.normal!==void 0&&(re=2),he.morphAttributes.color!==void 0&&(re=3);let Ne,J,de,Ee;if(ce){const Mt=Ui[ce];Ne=Mt.vertexShader,J=Mt.fragmentShader}else Ne=C.vertexShader,J=C.fragmentShader,d.update(C),de=d.getVertexShaderID(C),Ee=d.getFragmentShaderID(C);const xe=o.getRenderTarget(),Ae=o.state.buffers.depth.getReversed(),Ie=Z.isInstancedMesh===!0,Ze=Z.isBatchedMesh===!0,It=!!C.map,vt=!!C.matcap,kt=!!ue,q=!!C.aoMap,wn=!!C.lightMap,gt=!!C.bumpMap,ft=!!C.normalMap,qe=!!C.displacementMap,Ct=!!C.emissiveMap,Ye=!!C.metalnessMap,L=!!C.roughnessMap,w=C.anisotropy>0,Q=C.clearcoat>0,me=C.dispersion>0,_e=C.iridescence>0,fe=C.sheen>0,Ve=C.transmission>0,Re=w&&!!C.anisotropyMap,Ue=Q&&!!C.clearcoatMap,dt=Q&&!!C.clearcoatNormalMap,Se=Q&&!!C.clearcoatRoughnessMap,Fe=_e&&!!C.iridescenceMap,Qe=_e&&!!C.iridescenceThicknessMap,et=fe&&!!C.sheenColorMap,ke=fe&&!!C.sheenRoughnessMap,pt=!!C.specularMap,ot=!!C.specularColorMap,bt=!!C.specularIntensityMap,G=Ve&&!!C.transmissionMap,be=Ve&&!!C.thicknessMap,se=!!C.gradientMap,pe=!!C.alphaMap,Le=C.alphaTest>0,Pe=!!C.alphaHash,at=!!C.extensions;let zt=$r;C.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(zt=o.toneMapping);const Qt={shaderID:ce,shaderType:C.type,shaderName:C.name,vertexShader:Ne,fragmentShader:J,defines:C.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:Ze,batchingColor:Ze&&Z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Z.instanceColor!==null,instancingMorph:Ie&&Z.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:xe===null?o.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:On,alphaToCoverage:!!C.alphaToCoverage,map:It,matcap:vt,envMap:kt,envMapMode:kt&&ue.mapping,envMapCubeUVHeight:z,aoMap:q,lightMap:wn,bumpMap:gt,normalMap:ft,displacementMap:_&&qe,emissiveMap:Ct,normalMapObjectSpace:ft&&C.normalMapType===ty,normalMapTangentSpace:ft&&C.normalMapType===Q_,metalnessMap:Ye,roughnessMap:L,anisotropy:w,anisotropyMap:Re,clearcoat:Q,clearcoatMap:Ue,clearcoatNormalMap:dt,clearcoatRoughnessMap:Se,dispersion:me,iridescence:_e,iridescenceMap:Fe,iridescenceThicknessMap:Qe,sheen:fe,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:pt,specularColorMap:ot,specularIntensityMap:bt,transmission:Ve,transmissionMap:G,thicknessMap:be,gradientMap:se,opaque:C.transparent===!1&&C.blending===xo&&C.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:Pe,combine:C.combine,mapUv:It&&E(C.map.channel),aoMapUv:q&&E(C.aoMap.channel),lightMapUv:wn&&E(C.lightMap.channel),bumpMapUv:gt&&E(C.bumpMap.channel),normalMapUv:ft&&E(C.normalMap.channel),displacementMapUv:qe&&E(C.displacementMap.channel),emissiveMapUv:Ct&&E(C.emissiveMap.channel),metalnessMapUv:Ye&&E(C.metalnessMap.channel),roughnessMapUv:L&&E(C.roughnessMap.channel),anisotropyMapUv:Re&&E(C.anisotropyMap.channel),clearcoatMapUv:Ue&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:dt&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:et&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:ke&&E(C.sheenRoughnessMap.channel),specularMapUv:pt&&E(C.specularMap.channel),specularColorMapUv:ot&&E(C.specularColorMap.channel),specularIntensityMapUv:bt&&E(C.specularIntensityMap.channel),transmissionMapUv:G&&E(C.transmissionMap.channel),thicknessMapUv:be&&E(C.thicknessMap.channel),alphaMapUv:pe&&E(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ft||w),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!he.attributes.uv&&(It||pe),fog:!!le,useFog:C.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:Z.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:zt,decodeVideoTexture:It&&C.map.isVideoTexture===!0&&St.getTransfer(C.map.colorSpace)===Ut,decodeVideoTextureEmissive:Ct&&C.emissiveMap.isVideoTexture===!0&&St.getTransfer(C.emissiveMap.colorSpace)===Ut,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Oi,flipSided:C.side===Nn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:at&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&C.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Qt.vertexUv1s=f.has(1),Qt.vertexUv2s=f.has(2),Qt.vertexUv3s=f.has(3),f.clear(),Qt}function y(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)A.push(k),A.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(D(A,C),P(A,C),A.push(o.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function D(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function P(C,A){u.disableAll(),A.supportsVertexTextures&&u.enable(0),A.instancing&&u.enable(1),A.instancingColor&&u.enable(2),A.instancingMorph&&u.enable(3),A.matcap&&u.enable(4),A.envMap&&u.enable(5),A.normalMapObjectSpace&&u.enable(6),A.normalMapTangentSpace&&u.enable(7),A.clearcoat&&u.enable(8),A.iridescence&&u.enable(9),A.alphaTest&&u.enable(10),A.vertexColors&&u.enable(11),A.vertexAlphas&&u.enable(12),A.vertexUv1s&&u.enable(13),A.vertexUv2s&&u.enable(14),A.vertexUv3s&&u.enable(15),A.vertexTangents&&u.enable(16),A.anisotropy&&u.enable(17),A.alphaHash&&u.enable(18),A.batching&&u.enable(19),A.dispersion&&u.enable(20),A.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.reverseDepthBuffer&&u.enable(4),A.skinning&&u.enable(5),A.morphTargets&&u.enable(6),A.morphNormals&&u.enable(7),A.morphColors&&u.enable(8),A.premultipliedAlpha&&u.enable(9),A.shadowMapEnabled&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),A.decodeVideoTexture&&u.enable(19),A.decodeVideoTextureEmissive&&u.enable(20),A.alphaToCoverage&&u.enable(21),C.push(u.mask)}function R(C){const A=M[C.type];let k;if(A){const ie=Ui[A];k=jy.clone(ie.uniforms)}else k=C.uniforms;return k}function X(C,A){let k;for(let ie=0,Z=m.length;ie<Z;ie++){const le=m[ie];if(le.cacheKey===A){k=le,++k.usedTimes;break}}return k===void 0&&(k=new rw(o,A,C,a),m.push(k)),k}function O(C){if(--C.usedTimes===0){const A=m.indexOf(C);m[A]=m[m.length-1],m.pop(),C.destroy()}}function I(C){d.remove(C)}function H(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:R,acquireProgram:X,releaseProgram:O,releaseShaderCache:I,programs:m,dispose:H}}function cw(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,d){o.get(c)[u]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function uw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Jg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function e_(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,_,x,M,E,S){let y=o[e];return y===void 0?(y={id:g.id,object:g,geometry:_,material:x,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},o[e]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=E,y.group=S),e++,y}function u(g,_,x,M,E,S){const y=c(g,_,x,M,E,S);x.transmission>0?i.push(y):x.transparent===!0?s.push(y):t.push(y)}function d(g,_,x,M,E,S){const y=c(g,_,x,M,E,S);x.transmission>0?i.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function f(g,_){t.length>1&&t.sort(g||uw),i.length>1&&i.sort(_||Jg),s.length>1&&s.sort(_||Jg)}function m(){for(let g=e,_=o.length;g<_;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:d,finish:m,sort:f}}function hw(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new e_,o.set(i,[c])):s>=a.length?(c=new e_,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function dw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new tt};break;case"SpotLight":t={position:new B,direction:new B,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new B,halfWidth:new B,halfHeight:new B};break}return o[e.id]=t,t}}}function fw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let pw=0;function mw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function gw(o){const e=new dw,t=fw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new B);const s=new B,a=new ut,c=new ut;function u(f){let m=0,g=0,_=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,D=0,P=0,R=0,X=0,O=0,I=0;f.sort(mw);for(let C=0,A=f.length;C<A;C++){const k=f[C],ie=k.color,Z=k.intensity,le=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=ie.r*Z,g+=ie.g*Z,_+=ie.b*Z;else if(k.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(k.sh.coefficients[ae],Z);I++}else if(k.isDirectionalLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ue=k.shadow,z=t.get(k);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,i.directionalShadow[x]=z,i.directionalShadowMap[x]=he,i.directionalShadowMatrix[x]=k.shadow.matrix,D++}i.directional[x]=ae,x++}else if(k.isSpotLight){const ae=e.get(k);ae.position.setFromMatrixPosition(k.matrixWorld),ae.color.copy(ie).multiplyScalar(Z),ae.distance=le,ae.coneCos=Math.cos(k.angle),ae.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ae.decay=k.decay,i.spot[E]=ae;const ue=k.shadow;if(k.map&&(i.spotLightMap[X]=k.map,X++,ue.updateMatrices(k),k.castShadow&&O++),i.spotLightMatrix[E]=ue.matrix,k.castShadow){const z=t.get(k);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,i.spotShadow[E]=z,i.spotShadowMap[E]=he,R++}E++}else if(k.isRectAreaLight){const ae=e.get(k);ae.color.copy(ie).multiplyScalar(Z),ae.halfWidth.set(k.width*.5,0,0),ae.halfHeight.set(0,k.height*.5,0),i.rectArea[S]=ae,S++}else if(k.isPointLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),ae.distance=k.distance,ae.decay=k.decay,k.castShadow){const ue=k.shadow,z=t.get(k);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,z.shadowCameraNear=ue.camera.near,z.shadowCameraFar=ue.camera.far,i.pointShadow[M]=z,i.pointShadowMap[M]=he,i.pointShadowMatrix[M]=k.shadow.matrix,P++}i.point[M]=ae,M++}else if(k.isHemisphereLight){const ae=e.get(k);ae.skyColor.copy(k.color).multiplyScalar(Z),ae.groundColor.copy(k.groundColor).multiplyScalar(Z),i.hemi[y]=ae,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const H=i.hash;(H.directionalLength!==x||H.pointLength!==M||H.spotLength!==E||H.rectAreaLength!==S||H.hemiLength!==y||H.numDirectionalShadows!==D||H.numPointShadows!==P||H.numSpotShadows!==R||H.numSpotMaps!==X||H.numLightProbes!==I)&&(i.directional.length=x,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=R+X-O,i.spotLightMap.length=X,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=I,H.directionalLength=x,H.pointLength=M,H.spotLength=E,H.rectAreaLength=S,H.hemiLength=y,H.numDirectionalShadows=D,H.numPointShadows=P,H.numSpotShadows=R,H.numSpotMaps=X,H.numLightProbes=I,i.version=pw++)}function d(f,m){let g=0,_=0,x=0,M=0,E=0;const S=m.matrixWorldInverse;for(let y=0,D=f.length;y<D;y++){const P=f[y];if(P.isDirectionalLight){const R=i.directional[g];R.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),g++}else if(P.isSpotLight){const R=i.spot[x];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const R=i.rectArea[M];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),c.identity(),a.copy(P.matrixWorld),a.premultiply(S),c.extractRotation(a),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const R=i.point[_];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),_++}else if(P.isHemisphereLight){const R=i.hemi[E];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(S),E++}}}return{setup:u,setupView:d,state:i}}function t_(o){const e=new gw(o),t=[],i=[];function s(m){f.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function c(m){i.push(m)}function u(){e.setup(t)}function d(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:c}}function _w(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new t_(o),e.set(s,[u])):a>=c.length?(u=new t_(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}class vw extends Fi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xw extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mw(o,e,t){let i=new df;const s=new Je,a=new Je,c=new Rt,u=new vw({depthPacking:ey}),d=new xw,f={},m=t.maxTextureSize,g={[pr]:Nn,[Nn]:pr,[Oi]:Oi},_=new Zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:yw,fragmentShader:Sw}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new ei;M.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Dt(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O_;let y=this.type;this.render=function(O,I,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const C=o.getRenderTarget(),A=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),ie=o.state;ie.setBlending(Kr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const Z=y!==cr&&this.type===cr,le=y===cr&&this.type!==cr;for(let he=0,ae=O.length;he<ae;he++){const ue=O[he],z=ue.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ce=z.getFrameExtents();if(s.multiply(ce),a.copy(z.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/ce.x),s.x=a.x*ce.x,z.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/ce.y),s.y=a.y*ce.y,z.mapSize.y=a.y)),z.map===null||Z===!0||le===!0){const U=this.type!==cr?{minFilter:In,magFilter:In}:{};z.map!==null&&z.map.dispose(),z.map=new Ts(s.x,s.y,U),z.map.texture.name=ue.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const oe=z.getViewportCount();for(let U=0;U<oe;U++){const re=z.getViewport(U);c.set(a.x*re.x,a.y*re.y,a.x*re.z,a.y*re.w),ie.viewport(c),z.updateMatrices(ue,U),i=z.getFrustum(),R(I,H,z.camera,ue,this.type)}z.isPointLightShadow!==!0&&this.type===cr&&D(z,H),z.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(C,A,k)};function D(O,I){const H=e.update(E);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ts(s.x,s.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(I,null,H,_,E,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(I,null,H,x,E,null)}function P(O,I,H,C){let A=null;const k=H.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)A=k;else if(A=H.isPointLight===!0?d:u,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ie=A.uuid,Z=I.uuid;let le=f[ie];le===void 0&&(le={},f[ie]=le);let he=le[Z];he===void 0&&(he=A.clone(),le[Z]=he,I.addEventListener("dispose",X)),A=he}if(A.visible=I.visible,A.wireframe=I.wireframe,C===cr?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:g[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,H.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ie=o.properties.get(A);ie.light=H}return A}function R(O,I,H,C,A){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===cr)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,O.matrixWorld);const Z=e.update(O),le=O.material;if(Array.isArray(le)){const he=Z.groups;for(let ae=0,ue=he.length;ae<ue;ae++){const z=he[ae],ce=le[z.materialIndex];if(ce&&ce.visible){const oe=P(O,ce,C,A);O.onBeforeShadow(o,O,I,H,Z,oe,z),o.renderBufferDirect(H,null,Z,oe,O,z),O.onAfterShadow(o,O,I,H,Z,oe,z)}}}else if(le.visible){const he=P(O,le,C,A);O.onBeforeShadow(o,O,I,H,Z,he,null),o.renderBufferDirect(H,null,Z,he,O,null),O.onAfterShadow(o,O,I,H,Z,he,null)}}const ie=O.children;for(let Z=0,le=ie.length;Z<le;Z++)R(ie[Z],I,H,C,A)}function X(O){O.target.removeEventListener("dispose",X);for(const H in f){const C=f[H],A=O.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const Ew={[hd]:dd,[fd]:gd,[pd]:_d,[Eo]:md,[dd]:hd,[gd]:fd,[_d]:pd,[md]:Eo};function Tw(o,e){function t(){let G=!1;const be=new Rt;let se=null;const pe=new Rt(0,0,0,0);return{setMask:function(Le){se!==Le&&!G&&(o.colorMask(Le,Le,Le,Le),se=Le)},setLocked:function(Le){G=Le},setClear:function(Le,Pe,at,zt,Qt){Qt===!0&&(Le*=zt,Pe*=zt,at*=zt),be.set(Le,Pe,at,zt),pe.equals(be)===!1&&(o.clearColor(Le,Pe,at,zt),pe.copy(be))},reset:function(){G=!1,se=null,pe.set(-1,0,0,0)}}}function i(){let G=!1,be=!1,se=null,pe=null,Le=null;return{setReversed:function(Pe){if(be!==Pe){const at=e.get("EXT_clip_control");be?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const zt=Le;Le=null,this.setClear(zt)}be=Pe},getReversed:function(){return be},setTest:function(Pe){Pe?xe(o.DEPTH_TEST):Ae(o.DEPTH_TEST)},setMask:function(Pe){se!==Pe&&!G&&(o.depthMask(Pe),se=Pe)},setFunc:function(Pe){if(be&&(Pe=Ew[Pe]),pe!==Pe){switch(Pe){case hd:o.depthFunc(o.NEVER);break;case dd:o.depthFunc(o.ALWAYS);break;case fd:o.depthFunc(o.LESS);break;case Eo:o.depthFunc(o.LEQUAL);break;case pd:o.depthFunc(o.EQUAL);break;case md:o.depthFunc(o.GEQUAL);break;case gd:o.depthFunc(o.GREATER);break;case _d:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pe=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Le!==Pe&&(be&&(Pe=1-Pe),o.clearDepth(Pe),Le=Pe)},reset:function(){G=!1,se=null,pe=null,Le=null,be=!1}}}function s(){let G=!1,be=null,se=null,pe=null,Le=null,Pe=null,at=null,zt=null,Qt=null;return{setTest:function(Mt){G||(Mt?xe(o.STENCIL_TEST):Ae(o.STENCIL_TEST))},setMask:function(Mt){be!==Mt&&!G&&(o.stencilMask(Mt),be=Mt)},setFunc:function(Mt,Fn,An){(se!==Mt||pe!==Fn||Le!==An)&&(o.stencilFunc(Mt,Fn,An),se=Mt,pe=Fn,Le=An)},setOp:function(Mt,Fn,An){(Pe!==Mt||at!==Fn||zt!==An)&&(o.stencilOp(Mt,Fn,An),Pe=Mt,at=Fn,zt=An)},setLocked:function(Mt){G=Mt},setClear:function(Mt){Qt!==Mt&&(o.clearStencil(Mt),Qt=Mt)},reset:function(){G=!1,be=null,se=null,pe=null,Le=null,Pe=null,at=null,zt=null,Qt=null}}}const a=new t,c=new i,u=new s,d=new WeakMap,f=new WeakMap;let m={},g={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,D=null,P=null,R=null,X=null,O=null,I=new tt(0,0,0),H=0,C=!1,A=null,k=null,ie=null,Z=null,le=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ue=0;const z=o.getParameter(o.VERSION);z.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(z)[1]),ae=ue>=1):z.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ae=ue>=2);let ce=null,oe={};const U=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),Ne=new Rt().fromArray(U),J=new Rt().fromArray(re);function de(G,be,se,pe){const Le=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(G,Pe),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let at=0;at<se;at++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(be,0,o.RGBA,1,1,pe,0,o.RGBA,o.UNSIGNED_BYTE,Le):o.texImage2D(be+at,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Le);return Pe}const Ee={};Ee[o.TEXTURE_2D]=de(o.TEXTURE_2D,o.TEXTURE_2D,1),Ee[o.TEXTURE_CUBE_MAP]=de(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[o.TEXTURE_2D_ARRAY]=de(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ee[o.TEXTURE_3D]=de(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),xe(o.DEPTH_TEST),c.setFunc(Eo),gt(!1),ft(ng),xe(o.CULL_FACE),q(Kr);function xe(G){m[G]!==!0&&(o.enable(G),m[G]=!0)}function Ae(G){m[G]!==!1&&(o.disable(G),m[G]=!1)}function Ie(G,be){return g[G]!==be?(o.bindFramebuffer(G,be),g[G]=be,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=be),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=be),!0):!1}function Ze(G,be){let se=x,pe=!1;if(G){se=_.get(be),se===void 0&&(se=[],_.set(be,se));const Le=G.textures;if(se.length!==Le.length||se[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,at=Le.length;Pe<at;Pe++)se[Pe]=o.COLOR_ATTACHMENT0+Pe;se.length=Le.length,pe=!0}}else se[0]!==o.BACK&&(se[0]=o.BACK,pe=!0);pe&&o.drawBuffers(se)}function It(G){return M!==G?(o.useProgram(G),M=G,!0):!1}const vt={[Ss]:o.FUNC_ADD,[wx]:o.FUNC_SUBTRACT,[Ax]:o.FUNC_REVERSE_SUBTRACT};vt[Rx]=o.MIN,vt[bx]=o.MAX;const kt={[Cx]:o.ZERO,[Px]:o.ONE,[Lx]:o.SRC_COLOR,[cd]:o.SRC_ALPHA,[Fx]:o.SRC_ALPHA_SATURATE,[Ux]:o.DST_COLOR,[Nx]:o.DST_ALPHA,[Dx]:o.ONE_MINUS_SRC_COLOR,[ud]:o.ONE_MINUS_SRC_ALPHA,[Ox]:o.ONE_MINUS_DST_COLOR,[Ix]:o.ONE_MINUS_DST_ALPHA,[kx]:o.CONSTANT_COLOR,[Bx]:o.ONE_MINUS_CONSTANT_COLOR,[zx]:o.CONSTANT_ALPHA,[Hx]:o.ONE_MINUS_CONSTANT_ALPHA};function q(G,be,se,pe,Le,Pe,at,zt,Qt,Mt){if(G===Kr){E===!0&&(Ae(o.BLEND),E=!1);return}if(E===!1&&(xe(o.BLEND),E=!0),G!==Tx){if(G!==S||Mt!==C){if((y!==Ss||R!==Ss)&&(o.blendEquation(o.FUNC_ADD),y=Ss,R=Ss),Mt)switch(G){case xo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ig:o.blendFunc(o.ONE,o.ONE);break;case rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case sg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case xo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ig:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case sg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,P=null,X=null,O=null,I.set(0,0,0),H=0,S=G,C=Mt}return}Le=Le||be,Pe=Pe||se,at=at||pe,(be!==y||Le!==R)&&(o.blendEquationSeparate(vt[be],vt[Le]),y=be,R=Le),(se!==D||pe!==P||Pe!==X||at!==O)&&(o.blendFuncSeparate(kt[se],kt[pe],kt[Pe],kt[at]),D=se,P=pe,X=Pe,O=at),(zt.equals(I)===!1||Qt!==H)&&(o.blendColor(zt.r,zt.g,zt.b,Qt),I.copy(zt),H=Qt),S=G,C=!1}function wn(G,be){G.side===Oi?Ae(o.CULL_FACE):xe(o.CULL_FACE);let se=G.side===Nn;be&&(se=!se),gt(se),G.blending===xo&&G.transparent===!1?q(Kr):q(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const pe=G.stencilWrite;u.setTest(pe),pe&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ct(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(o.SAMPLE_ALPHA_TO_COVERAGE):Ae(o.SAMPLE_ALPHA_TO_COVERAGE)}function gt(G){A!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),A=G)}function ft(G){G!==Mx?(xe(o.CULL_FACE),G!==k&&(G===ng?o.cullFace(o.BACK):G===Ex?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ae(o.CULL_FACE),k=G}function qe(G){G!==ie&&(ae&&o.lineWidth(G),ie=G)}function Ct(G,be,se){G?(xe(o.POLYGON_OFFSET_FILL),(Z!==be||le!==se)&&(o.polygonOffset(be,se),Z=be,le=se)):Ae(o.POLYGON_OFFSET_FILL)}function Ye(G){G?xe(o.SCISSOR_TEST):Ae(o.SCISSOR_TEST)}function L(G){G===void 0&&(G=o.TEXTURE0+he-1),ce!==G&&(o.activeTexture(G),ce=G)}function w(G,be,se){se===void 0&&(ce===null?se=o.TEXTURE0+he-1:se=ce);let pe=oe[se];pe===void 0&&(pe={type:void 0,texture:void 0},oe[se]=pe),(pe.type!==G||pe.texture!==be)&&(ce!==se&&(o.activeTexture(se),ce=se),o.bindTexture(G,be||Ee[G]),pe.type=G,pe.texture=be)}function Q(){const G=oe[ce];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(G){Ne.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function ke(G){J.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),J.copy(G))}function pt(G,be){let se=f.get(be);se===void 0&&(se=new WeakMap,f.set(be,se));let pe=se.get(G);pe===void 0&&(pe=o.getUniformBlockIndex(be,G.name),se.set(G,pe))}function ot(G,be){const pe=f.get(be).get(G);d.get(be)!==pe&&(o.uniformBlockBinding(be,pe,G.__bindingPointIndex),d.set(be,pe))}function bt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ce=null,oe={},g={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,D=null,P=null,R=null,X=null,O=null,I=new tt(0,0,0),H=0,C=!1,A=null,k=null,ie=null,Z=null,le=null,Ne.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:xe,disable:Ae,bindFramebuffer:Ie,drawBuffers:Ze,useProgram:It,setBlending:q,setMaterial:wn,setFlipSided:gt,setCullFace:ft,setLineWidth:qe,setPolygonOffset:Ct,setScissorTest:Ye,activeTexture:L,bindTexture:w,unbindTexture:Q,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Fe,texImage3D:Qe,updateUBOMapping:pt,uniformBlockBinding:ot,texStorage2D:dt,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:Ve,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ue,scissor:et,viewport:ke,reset:bt}}function n_(o,e,t,i){const s=ww(i);switch(t){case j_:return o*e;case Y_:return o*e;case q_:return o*e*2;case af:return o*e/s.components*s.byteLength;case lf:return o*e/s.components*s.byteLength;case K_:return o*e*2/s.components*s.byteLength;case cf:return o*e*2/s.components*s.byteLength;case X_:return o*e*3/s.components*s.byteLength;case hi:return o*e*4/s.components*s.byteLength;case uf:return o*e*4/s.components*s.byteLength;case Ac:case Rc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sd:case Ed:return Math.max(o,16)*Math.max(e,8)/4;case yd:case Md:return Math.max(o,8)*Math.max(e,8)/2;case Td:case wd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Od:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Hd:case Vd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case $_:case Gd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Wd:case jd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ww(o){switch(o){case mr:case V_:return{byteLength:1,components:1};case Na:case G_:case Fa:return{byteLength:2,components:1};case sf:case of:return{byteLength:2,components:4};case Es:case rf:case Ai:return{byteLength:4,components:1};case W_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function Aw(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Je,m=new WeakMap;let g;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return x?new OffscreenCanvas(L,w):Oa("canvas")}function E(L,w,Q){let me=1;const _e=Ye(L);if((_e.width>Q||_e.height>Q)&&(me=Q/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(me*_e.width),Ve=Math.floor(me*_e.height);g===void 0&&(g=M(fe,Ve));const Re=w?M(fe,Ve):g;return Re.width=fe,Re.height=Ve,Re.getContext("2d").drawImage(L,0,0,fe,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Ve+")."),Re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){o.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(L,w,Q,me,_e=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=w;if(w===o.RED&&(Q===o.FLOAT&&(fe=o.R32F),Q===o.HALF_FLOAT&&(fe=o.R16F),Q===o.UNSIGNED_BYTE&&(fe=o.R8)),w===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(fe=o.R8UI),Q===o.UNSIGNED_SHORT&&(fe=o.R16UI),Q===o.UNSIGNED_INT&&(fe=o.R32UI),Q===o.BYTE&&(fe=o.R8I),Q===o.SHORT&&(fe=o.R16I),Q===o.INT&&(fe=o.R32I)),w===o.RG&&(Q===o.FLOAT&&(fe=o.RG32F),Q===o.HALF_FLOAT&&(fe=o.RG16F),Q===o.UNSIGNED_BYTE&&(fe=o.RG8)),w===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(fe=o.RG8UI),Q===o.UNSIGNED_SHORT&&(fe=o.RG16UI),Q===o.UNSIGNED_INT&&(fe=o.RG32UI),Q===o.BYTE&&(fe=o.RG8I),Q===o.SHORT&&(fe=o.RG16I),Q===o.INT&&(fe=o.RG32I)),w===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),Q===o.UNSIGNED_INT&&(fe=o.RGB32UI),Q===o.BYTE&&(fe=o.RGB8I),Q===o.SHORT&&(fe=o.RGB16I),Q===o.INT&&(fe=o.RGB32I)),w===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),Q===o.UNSIGNED_INT&&(fe=o.RGBA32UI),Q===o.BYTE&&(fe=o.RGBA8I),Q===o.SHORT&&(fe=o.RGBA16I),Q===o.INT&&(fe=o.RGBA32I)),w===o.RGB&&Q===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),w===o.RGBA){const Ve=_e?Fc:St.getTransfer(me);Q===o.FLOAT&&(fe=o.RGBA32F),Q===o.HALF_FLOAT&&(fe=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(fe=Ve===Ut?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(L,w){let Q;return L?w===null||w===Es||w===Ro?Q=o.DEPTH24_STENCIL8:w===Ai?Q=o.DEPTH32F_STENCIL8:w===Na&&(Q=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Es||w===Ro?Q=o.DEPTH_COMPONENT24:w===Ai?Q=o.DEPTH_COMPONENT32F:w===Na&&(Q=o.DEPTH_COMPONENT16),Q}function X(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==In&&L.minFilter!==Jn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function O(L){const w=L.target;w.removeEventListener("dispose",O),H(w),w.isVideoTexture&&m.delete(w)}function I(L){const w=L.target;w.removeEventListener("dispose",I),A(w)}function H(L){const w=i.get(L);if(w.__webglInit===void 0)return;const Q=L.source,me=_.get(Q);if(me){const _e=me[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(L),Object.keys(me).length===0&&_.delete(Q)}i.remove(L)}function C(L){const w=i.get(L);o.deleteTexture(w.__webglTexture);const Q=L.source,me=_.get(Q);delete me[w.__cacheKey],c.memory.textures--}function A(L){const w=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let _e=0;_e<w.__webglFramebuffer[me].length;_e++)o.deleteFramebuffer(w.__webglFramebuffer[me][_e]);else o.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)o.deleteFramebuffer(w.__webglFramebuffer[me]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=L.textures;for(let me=0,_e=Q.length;me<_e;me++){const fe=i.get(Q[me]);fe.__webglTexture&&(o.deleteTexture(fe.__webglTexture),c.memory.textures--),i.remove(Q[me])}i.remove(L)}let k=0;function ie(){k=0}function Z(){const L=k;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),k+=1,L}function le(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function he(L,w){const Q=i.get(L);if(L.isVideoTexture&&qe(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Q,L,w);return}}t.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+w)}function ae(L,w){const Q=i.get(L);if(L.version>0&&Q.__version!==L.version){J(Q,L,w);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+w)}function ue(L,w){const Q=i.get(L);if(L.version>0&&Q.__version!==L.version){J(Q,L,w);return}t.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+w)}function z(L,w){const Q=i.get(L);if(L.version>0&&Q.__version!==L.version){de(Q,L,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+w)}const ce={[Ao]:o.REPEAT,[Xr]:o.CLAMP_TO_EDGE,[Dc]:o.MIRRORED_REPEAT},oe={[In]:o.NEAREST,[H_]:o.NEAREST_MIPMAP_NEAREST,[Ra]:o.NEAREST_MIPMAP_LINEAR,[Jn]:o.LINEAR,[wc]:o.LINEAR_MIPMAP_NEAREST,[hr]:o.LINEAR_MIPMAP_LINEAR},U={[ny]:o.NEVER,[ly]:o.ALWAYS,[iy]:o.LESS,[J_]:o.LEQUAL,[ry]:o.EQUAL,[ay]:o.GEQUAL,[sy]:o.GREATER,[oy]:o.NOTEQUAL};function re(L,w){if(w.type===Ai&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Jn||w.magFilter===wc||w.magFilter===Ra||w.magFilter===hr||w.minFilter===Jn||w.minFilter===wc||w.minFilter===Ra||w.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ce[w.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ce[w.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ce[w.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,oe[w.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,oe[w.minFilter]),w.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===In||w.minFilter!==Ra&&w.minFilter!==hr||w.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(L,w){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",O));const me=w.source;let _e=_.get(me);_e===void 0&&(_e={},_.set(me,_e));const fe=le(w);if(fe!==L.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),_e[fe].usedTimes++;const Ve=_e[L.__cacheKey];Ve!==void 0&&(_e[L.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(w)),L.__cacheKey=fe,L.__webglTexture=_e[fe].texture}return Q}function J(L,w,Q){let me=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=o.TEXTURE_3D);const _e=Ne(L,w),fe=w.source;t.bindTexture(me,L.__webglTexture,o.TEXTURE0+Q);const Ve=i.get(fe);if(fe.version!==Ve.__version||_e===!0){t.activeTexture(o.TEXTURE0+Q);const Re=St.getPrimaries(St.workingColorSpace),Ue=w.colorSpace===jr?null:St.getPrimaries(w.colorSpace),dt=w.colorSpace===jr||Re===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Se=E(w.image,!1,s.maxTextureSize);Se=Ct(w,Se);const Fe=a.convert(w.format,w.colorSpace),Qe=a.convert(w.type);let et=P(w.internalFormat,Fe,Qe,w.colorSpace,w.isVideoTexture);re(me,w);let ke;const pt=w.mipmaps,ot=w.isVideoTexture!==!0,bt=Ve.__version===void 0||_e===!0,G=fe.dataReady,be=X(w,Se);if(w.isDepthTexture)et=R(w.format===bo,w.type),bt&&(ot?t.texStorage2D(o.TEXTURE_2D,1,et,Se.width,Se.height):t.texImage2D(o.TEXTURE_2D,0,et,Se.width,Se.height,0,Fe,Qe,null));else if(w.isDataTexture)if(pt.length>0){ot&&bt&&t.texStorage2D(o.TEXTURE_2D,be,et,pt[0].width,pt[0].height);for(let se=0,pe=pt.length;se<pe;se++)ke=pt[se],ot?G&&t.texSubImage2D(o.TEXTURE_2D,se,0,0,ke.width,ke.height,Fe,Qe,ke.data):t.texImage2D(o.TEXTURE_2D,se,et,ke.width,ke.height,0,Fe,Qe,ke.data);w.generateMipmaps=!1}else ot?(bt&&t.texStorage2D(o.TEXTURE_2D,be,et,Se.width,Se.height),G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Se.width,Se.height,Fe,Qe,Se.data)):t.texImage2D(o.TEXTURE_2D,0,et,Se.width,Se.height,0,Fe,Qe,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ot&&bt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,be,et,pt[0].width,pt[0].height,Se.depth);for(let se=0,pe=pt.length;se<pe;se++)if(ke=pt[se],w.format!==hi)if(Fe!==null)if(ot){if(G)if(w.layerUpdates.size>0){const Le=n_(ke.width,ke.height,w.format,w.type);for(const Pe of w.layerUpdates){const at=ke.data.subarray(Pe*Le/ke.data.BYTES_PER_ELEMENT,(Pe+1)*Le/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,Pe,ke.width,ke.height,1,Fe,at)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,Se.depth,Fe,ke.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,se,et,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?G&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,Se.depth,Fe,Qe,ke.data):t.texImage3D(o.TEXTURE_2D_ARRAY,se,et,ke.width,ke.height,Se.depth,0,Fe,Qe,ke.data)}else{ot&&bt&&t.texStorage2D(o.TEXTURE_2D,be,et,pt[0].width,pt[0].height);for(let se=0,pe=pt.length;se<pe;se++)ke=pt[se],w.format!==hi?Fe!==null?ot?G&&t.compressedTexSubImage2D(o.TEXTURE_2D,se,0,0,ke.width,ke.height,Fe,ke.data):t.compressedTexImage2D(o.TEXTURE_2D,se,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?G&&t.texSubImage2D(o.TEXTURE_2D,se,0,0,ke.width,ke.height,Fe,Qe,ke.data):t.texImage2D(o.TEXTURE_2D,se,et,ke.width,ke.height,0,Fe,Qe,ke.data)}else if(w.isDataArrayTexture)if(ot){if(bt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,be,et,Se.width,Se.height,Se.depth),G)if(w.layerUpdates.size>0){const se=n_(Se.width,Se.height,w.format,w.type);for(const pe of w.layerUpdates){const Le=Se.data.subarray(pe*se/Se.data.BYTES_PER_ELEMENT,(pe+1)*se/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Fe,Qe,Le)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Fe,Qe,Se.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,et,Se.width,Se.height,Se.depth,0,Fe,Qe,Se.data);else if(w.isData3DTexture)ot?(bt&&t.texStorage3D(o.TEXTURE_3D,be,et,Se.width,Se.height,Se.depth),G&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Fe,Qe,Se.data)):t.texImage3D(o.TEXTURE_3D,0,et,Se.width,Se.height,Se.depth,0,Fe,Qe,Se.data);else if(w.isFramebufferTexture){if(bt)if(ot)t.texStorage2D(o.TEXTURE_2D,be,et,Se.width,Se.height);else{let se=Se.width,pe=Se.height;for(let Le=0;Le<be;Le++)t.texImage2D(o.TEXTURE_2D,Le,et,se,pe,0,Fe,Qe,null),se>>=1,pe>>=1}}else if(pt.length>0){if(ot&&bt){const se=Ye(pt[0]);t.texStorage2D(o.TEXTURE_2D,be,et,se.width,se.height)}for(let se=0,pe=pt.length;se<pe;se++)ke=pt[se],ot?G&&t.texSubImage2D(o.TEXTURE_2D,se,0,0,Fe,Qe,ke):t.texImage2D(o.TEXTURE_2D,se,et,Fe,Qe,ke);w.generateMipmaps=!1}else if(ot){if(bt){const se=Ye(Se);t.texStorage2D(o.TEXTURE_2D,be,et,se.width,se.height)}G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Fe,Qe,Se)}else t.texImage2D(o.TEXTURE_2D,0,et,Fe,Qe,Se);S(w)&&y(me),Ve.__version=fe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function de(L,w,Q){if(w.image.length!==6)return;const me=Ne(L,w),_e=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+Q);const fe=i.get(_e);if(_e.version!==fe.__version||me===!0){t.activeTexture(o.TEXTURE0+Q);const Ve=St.getPrimaries(St.workingColorSpace),Re=w.colorSpace===jr?null:St.getPrimaries(w.colorSpace),Ue=w.colorSpace===jr||Ve===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const dt=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!dt&&!Se?Fe[pe]=E(w.image[pe],!0,s.maxCubemapSize):Fe[pe]=Se?w.image[pe].image:w.image[pe],Fe[pe]=Ct(w,Fe[pe]);const Qe=Fe[0],et=a.convert(w.format,w.colorSpace),ke=a.convert(w.type),pt=P(w.internalFormat,et,ke,w.colorSpace),ot=w.isVideoTexture!==!0,bt=fe.__version===void 0||me===!0,G=_e.dataReady;let be=X(w,Qe);re(o.TEXTURE_CUBE_MAP,w);let se;if(dt){ot&&bt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,be,pt,Qe.width,Qe.height);for(let pe=0;pe<6;pe++){se=Fe[pe].mipmaps;for(let Le=0;Le<se.length;Le++){const Pe=se[Le];w.format!==hi?et!==null?ot?G&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,et,Pe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,pt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,et,ke,Pe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,pt,Pe.width,Pe.height,0,et,ke,Pe.data)}}}else{if(se=w.mipmaps,ot&&bt){se.length>0&&be++;const pe=Ye(Fe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,be,pt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){ot?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,et,ke,Fe[pe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,pt,Fe[pe].width,Fe[pe].height,0,et,ke,Fe[pe].data);for(let Le=0;Le<se.length;Le++){const at=se[Le].image[pe].image;ot?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,at.width,at.height,et,ke,at.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,pt,at.width,at.height,0,et,ke,at.data)}}else{ot?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,ke,Fe[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,pt,et,ke,Fe[pe]);for(let Le=0;Le<se.length;Le++){const Pe=se[Le];ot?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,et,ke,Pe.image[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,pt,et,ke,Pe.image[pe])}}}S(w)&&y(o.TEXTURE_CUBE_MAP),fe.__version=_e.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ee(L,w,Q,me,_e,fe){const Ve=a.convert(Q.format,Q.colorSpace),Re=a.convert(Q.type),Ue=P(Q.internalFormat,Ve,Re,Q.colorSpace),dt=i.get(w),Se=i.get(Q);if(Se.__renderTarget=w,!dt.__hasExternalTextures){const Fe=Math.max(1,w.width>>fe),Qe=Math.max(1,w.height>>fe);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?t.texImage3D(_e,fe,Ue,Fe,Qe,w.depth,0,Ve,Re,null):t.texImage2D(_e,fe,Ue,Fe,Qe,0,Ve,Re,null)}t.bindFramebuffer(o.FRAMEBUFFER,L),ft(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,_e,Se.__webglTexture,0,gt(w)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,me,_e,Se.__webglTexture,fe),t.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(L,w,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,L),w.depthBuffer){const me=w.depthTexture,_e=me&&me.isDepthTexture?me.type:null,fe=R(w.stencilBuffer,_e),Ve=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=gt(w);ft(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Re,fe,w.width,w.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,fe,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,fe,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ve,o.RENDERBUFFER,L)}else{const me=w.textures;for(let _e=0;_e<me.length;_e++){const fe=me[_e],Ve=a.convert(fe.format,fe.colorSpace),Re=a.convert(fe.type),Ue=P(fe.internalFormat,Ve,Re,fe.colorSpace),dt=gt(w);Q&&ft(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,dt,Ue,w.width,w.height):ft(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,dt,Ue,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Ue,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ae(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const _e=me.__webglTexture,fe=gt(w);if(w.depthTexture.format===yo)ft(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,fe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(w.depthTexture.format===bo)ft(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,fe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ie(L){const w=i.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=me}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,L)}else if(Q){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=o.createRenderbuffer(),xe(w.__webglDepthbuffer[me],L,!1);else{const _e=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[me];o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),xe(w.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_e),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,_e)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(L,w,Q){const me=i.get(L);w!==void 0&&Ee(me.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Ie(L)}function It(L){const w=L.texture,Q=i.get(L),me=i.get(w);L.addEventListener("dispose",I);const _e=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Ve=_e.length>1;if(Ve||(me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture()),me.__version=w.version,c.memory.textures++),fe){Q.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[Re]=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)Q.__webglFramebuffer[Re][Ue]=o.createFramebuffer()}else Q.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)Q.__webglFramebuffer[Re]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Ve)for(let Re=0,Ue=_e.length;Re<Ue;Re++){const dt=i.get(_e[Re]);dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture(),c.memory.textures++)}if(L.samples>0&&ft(L)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){const Ue=_e[Re];Q.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Re]);const dt=a.convert(Ue.format,Ue.colorSpace),Se=a.convert(Ue.type),Fe=P(Ue.internalFormat,dt,Se,Ue.colorSpace,L.isXRRenderTarget===!0),Qe=gt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qe,Fe,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),xe(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(fe){t.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),re(o.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)Ee(Q.__webglFramebuffer[Re][Ue],L,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ue);else Ee(Q.__webglFramebuffer[Re],L,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(w)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Re=0,Ue=_e.length;Re<Ue;Re++){const dt=_e[Re],Se=i.get(dt);t.bindTexture(o.TEXTURE_2D,Se.__webglTexture),re(o.TEXTURE_2D,dt),Ee(Q.__webglFramebuffer,L,dt,o.COLOR_ATTACHMENT0+Re,o.TEXTURE_2D,0),S(dt)&&y(o.TEXTURE_2D)}t.unbindTexture()}else{let Re=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Re,me.__webglTexture),re(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)Ee(Q.__webglFramebuffer[Ue],L,w,o.COLOR_ATTACHMENT0,Re,Ue);else Ee(Q.__webglFramebuffer,L,w,o.COLOR_ATTACHMENT0,Re,0);S(w)&&y(Re),t.unbindTexture()}L.depthBuffer&&Ie(L)}function vt(L){const w=L.textures;for(let Q=0,me=w.length;Q<me;Q++){const _e=w[Q];if(S(_e)){const fe=D(L),Ve=i.get(_e).__webglTexture;t.bindTexture(fe,Ve),y(fe),t.unbindTexture()}}}const kt=[],q=[];function wn(L){if(L.samples>0){if(ft(L)===!1){const w=L.textures,Q=L.width,me=L.height;let _e=o.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ve=i.get(L),Re=w.length>1;if(Re)for(let Ue=0;Ue<w.length;Ue++)t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<w.length;Ue++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const dt=i.get(w[Ue]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,dt,0)}o.blitFramebuffer(0,0,Q,me,0,0,Q,me,_e,o.NEAREST),d===!0&&(kt.length=0,q.length=0,kt.push(o.COLOR_ATTACHMENT0+Ue),L.depthBuffer&&L.resolveDepthBuffer===!1&&(kt.push(fe),q.push(fe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,q)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let Ue=0;Ue<w.length;Ue++){t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const dt=i.get(w[Ue]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,dt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function gt(L){return Math.min(s.maxSamples,L.samples)}function ft(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(L){const w=c.render.frame;m.get(L)!==w&&(m.set(L,w),L.update())}function Ct(L,w){const Q=L.colorSpace,me=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==On&&Q!==jr&&(St.getTransfer(Q)===Ut?(me!==hi||_e!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(f.width=L.naturalWidth||L.width,f.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(f.width=L.displayWidth,f.height=L.displayHeight):(f.width=L.width,f.height=L.height),f}this.allocateTextureUnit=Z,this.resetTextureUnits=ie,this.setTexture2D=he,this.setTexture2DArray=ae,this.setTexture3D=ue,this.setTextureCube=z,this.rebindTextures=Ze,this.setupRenderTarget=It,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ft}function Rw(o,e){function t(i,s=jr){let a;const c=St.getTransfer(s);if(i===mr)return o.UNSIGNED_BYTE;if(i===sf)return o.UNSIGNED_SHORT_4_4_4_4;if(i===of)return o.UNSIGNED_SHORT_5_5_5_1;if(i===W_)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===V_)return o.BYTE;if(i===G_)return o.SHORT;if(i===Na)return o.UNSIGNED_SHORT;if(i===rf)return o.INT;if(i===Es)return o.UNSIGNED_INT;if(i===Ai)return o.FLOAT;if(i===Fa)return o.HALF_FLOAT;if(i===j_)return o.ALPHA;if(i===X_)return o.RGB;if(i===hi)return o.RGBA;if(i===Y_)return o.LUMINANCE;if(i===q_)return o.LUMINANCE_ALPHA;if(i===yo)return o.DEPTH_COMPONENT;if(i===bo)return o.DEPTH_STENCIL;if(i===af)return o.RED;if(i===lf)return o.RED_INTEGER;if(i===K_)return o.RG;if(i===cf)return o.RG_INTEGER;if(i===uf)return o.RGBA_INTEGER;if(i===Ac||i===Rc||i===bc||i===Cc)if(c===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yd||i===Sd||i===Md||i===Ed)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===yd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ed)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Td||i===wd||i===Ad)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Td||i===wd)return c===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ad)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rd||i===bd||i===Cd||i===Pd||i===Ld||i===Dd||i===Nd||i===Id||i===Ud||i===Od||i===Fd||i===kd||i===Bd||i===zd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Rd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ld)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Id)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ud)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Od)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pc||i===Hd||i===Vd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Pc)return c===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$_||i===Gd||i===Wd||i===jd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Pc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Gd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}class bw extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xn extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cw={type:"move"};class Qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),y=this._getHandJoint(f,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],_=m.position.distanceTo(g.position),x=.02,M=.005;f.inputState.pinching&&_>x+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=x-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Cw)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new hn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Zr({vertexShader:Pw,fragmentShader:Lw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new kc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nw extends ws{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",d=1,f=null,m=null,g=null,_=null,x=null,M=null;const E=new Dw,S=t.getContextAttributes();let y=null,D=null;const P=[],R=[],X=new Je;let O=null;const I=new Dn;I.viewport=new Rt;const H=new Dn;H.viewport=new Rt;const C=[I,H],A=new bw;let k=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=P[J];return de===void 0&&(de=new Qh,P[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=P[J];return de===void 0&&(de=new Qh,P[J]=de),de.getGripSpace()},this.getHand=function(J){let de=P[J];return de===void 0&&(de=new Qh,P[J]=de),de.getHandSpace()};function Z(J){const de=R.indexOf(J.inputSource);if(de===-1)return;const Ee=P[de];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,f||c),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function le(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",he);for(let J=0;J<P.length;J++){const de=R[J];de!==null&&(R[J]=null,P[J].disconnect(de))}k=null,ie=null,E.reset(),e.setRenderTarget(y),x=null,_=null,g=null,s=null,D=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(X.width,X.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){u=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(J){f=J},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",le),s.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(X),s.renderState.layers===void 0){const de={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new Ts(x.framebufferWidth,x.framebufferHeight,{format:hi,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let de=null,Ee=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=S.stencil?bo:yo,Ee=S.stencil?Ro:Es);const Ae={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(Ae),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new Ts(_.textureWidth,_.textureHeight,{format:hi,type:mr,depthTexture:new hv(_.textureWidth,_.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await s.requestReferenceSpace(u),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function he(J){for(let de=0;de<J.removed.length;de++){const Ee=J.removed[de],xe=R.indexOf(Ee);xe>=0&&(R[xe]=null,P[xe].disconnect(Ee))}for(let de=0;de<J.added.length;de++){const Ee=J.added[de];let xe=R.indexOf(Ee);if(xe===-1){for(let Ie=0;Ie<P.length;Ie++)if(Ie>=R.length){R.push(Ee),xe=Ie;break}else if(R[Ie]===null){R[Ie]=Ee,xe=Ie;break}if(xe===-1)break}const Ae=P[xe];Ae&&Ae.connect(Ee)}}const ae=new B,ue=new B;function z(J,de,Ee){ae.setFromMatrixPosition(de.matrixWorld),ue.setFromMatrixPosition(Ee.matrixWorld);const xe=ae.distanceTo(ue),Ae=de.projectionMatrix.elements,Ie=Ee.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),It=Ae[14]/(Ae[10]+1),vt=(Ae[9]+1)/Ae[5],kt=(Ae[9]-1)/Ae[5],q=(Ae[8]-1)/Ae[0],wn=(Ie[8]+1)/Ie[0],gt=Ze*q,ft=Ze*wn,qe=xe/(-q+wn),Ct=qe*-q;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ct),J.translateZ(qe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ye=Ze+qe,L=It+qe,w=gt-Ct,Q=ft+(xe-Ct),me=vt*It/L*Ye,_e=kt*It/L*Ye;J.projectionMatrix.makePerspective(w,Q,me,_e,Ye,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ce(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let de=J.near,Ee=J.far;E.texture!==null&&(E.depthNear>0&&(de=E.depthNear),E.depthFar>0&&(Ee=E.depthFar)),A.near=H.near=I.near=de,A.far=H.far=I.far=Ee,(k!==A.near||ie!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,ie=A.far),I.layers.mask=J.layers.mask|2,H.layers.mask=J.layers.mask|4,A.layers.mask=I.layers.mask|H.layers.mask;const xe=J.parent,Ae=A.cameras;ce(A,xe);for(let Ie=0;Ie<Ae.length;Ie++)ce(Ae[Ie],xe);Ae.length===2?z(A,I,H):A.projectionMatrix.copy(I.projectionMatrix),oe(J,A,xe)};function oe(J,de,Ee){Ee===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Co*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(J){d=J,_!==null&&(_.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let U=null;function re(J,de){if(m=de.getViewerPose(f||c),M=de,m!==null){const Ee=m.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let xe=!1;Ee.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let Ie=0;Ie<Ee.length;Ie++){const Ze=Ee[Ie];let It=null;if(x!==null)It=x.getViewport(Ze);else{const kt=g.getViewSubImage(_,Ze);It=kt.viewport,Ie===0&&(e.setRenderTargetTextures(D,kt.colorTexture,_.ignoreDepthValues?void 0:kt.depthStencilTexture),e.setRenderTarget(D))}let vt=C[Ie];vt===void 0&&(vt=new Dn,vt.layers.enable(Ie),vt.viewport=new Rt,C[Ie]=vt),vt.matrix.fromArray(Ze.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Ze.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(It.x,It.y,It.width,It.height),Ie===0&&(A.matrix.copy(vt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(vt)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=g.getDepthInformation(Ee[0]);Ie&&Ie.isValid&&Ie.texture&&E.init(e,Ie,s.renderState)}}for(let Ee=0;Ee<P.length;Ee++){const xe=R[Ee],Ae=P[Ee];xe!==null&&Ae!==void 0&&Ae.update(xe,de,f||c)}U&&U(J,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ne=new uv;Ne.setAnimationLoop(re),this.setAnimationLoop=function(J){U=J},this.dispose=function(){}}}const _s=new zi,Iw=new ut;function Uw(o,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,av(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,D,P,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(S,y):y.isMeshToonMaterial?(a(S,y),g(S,y)):y.isMeshPhongMaterial?(a(S,y),m(S,y)):y.isMeshStandardMaterial?(a(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,R)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),E(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?d(S,y,D,P):y.isSpriteMaterial?f(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Nn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Nn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),P=D.envMap,R=D.envMapRotation;P&&(S.envMap.value=P,_s.copy(R),_s.x*=-1,_s.y*=-1,_s.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),S.envMapRotation.value.setFromMatrix4(Iw.makeRotationFromEuler(_s)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,D,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Nn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ow(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,P){const R=P.program;i.uniformBlockBinding(D,R)}function f(D,P){let R=s[D.id];R===void 0&&(M(D),R=m(D),s[D.id]=R,D.addEventListener("dispose",S));const X=P.program;i.updateUBOMapping(D,X);const O=e.render.frame;a[D.id]!==O&&(_(D),a[D.id]=O)}function m(D){const P=g();D.__bindingPointIndex=P;const R=o.createBuffer(),X=D.__size,O=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,X,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,R),R}function g(){for(let D=0;D<u;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const P=s[D.id],R=D.uniforms,X=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let O=0,I=R.length;O<I;O++){const H=Array.isArray(R[O])?R[O]:[R[O]];for(let C=0,A=H.length;C<A;C++){const k=H[C];if(x(k,O,C,X)===!0){const ie=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let le=0;for(let he=0;he<Z.length;he++){const ae=Z[he],ue=E(ae);typeof ae=="number"||typeof ae=="boolean"?(k.__data[0]=ae,o.bufferSubData(o.UNIFORM_BUFFER,ie+le,k.__data)):ae.isMatrix3?(k.__data[0]=ae.elements[0],k.__data[1]=ae.elements[1],k.__data[2]=ae.elements[2],k.__data[3]=0,k.__data[4]=ae.elements[3],k.__data[5]=ae.elements[4],k.__data[6]=ae.elements[5],k.__data[7]=0,k.__data[8]=ae.elements[6],k.__data[9]=ae.elements[7],k.__data[10]=ae.elements[8],k.__data[11]=0):(ae.toArray(k.__data,le),le+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ie,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(D,P,R,X){const O=D.value,I=P+"_"+R;if(X[I]===void 0)return typeof O=="number"||typeof O=="boolean"?X[I]=O:X[I]=O.clone(),!0;{const H=X[I];if(typeof O=="number"||typeof O=="boolean"){if(H!==O)return X[I]=O,!0}else if(H.equals(O)===!1)return H.copy(O),!0}return!1}function M(D){const P=D.uniforms;let R=0;const X=16;for(let I=0,H=P.length;I<H;I++){const C=Array.isArray(P[I])?P[I]:[P[I]];for(let A=0,k=C.length;A<k;A++){const ie=C[A],Z=Array.isArray(ie.value)?ie.value:[ie.value];for(let le=0,he=Z.length;le<he;le++){const ae=Z[le],ue=E(ae),z=R%X,ce=z%ue.boundary,oe=z+ce;R+=ce,oe!==0&&X-oe<ue.storage&&(R+=X-oe),ie.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=R,R+=ue.storage}}}const O=R%X;return O>0&&(R+=X-O),D.__size=R,D.__cache={},this}function E(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function S(D){const P=D.target;P.removeEventListener("dispose",S);const R=c.indexOf(P.__bindingPointIndex);c.splice(R,1),o.deleteBuffer(s[P.id]),delete s[P.id],delete a[P.id]}function y(){for(const D in s)o.deleteBuffer(s[D]);c=[],s={},a={}}return{bind:d,update:f,dispose:y}}class Fw{constructor(e={}){const{canvas:t=wy(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const D=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=$r,this.toneMappingExposure=1;const R=this;let X=!1,O=0,I=0,H=null,C=-1,A=null;const k=new Rt,ie=new Rt;let Z=null;const le=new tt(0);let he=0,ae=t.width,ue=t.height,z=1,ce=null,oe=null;const U=new Rt(0,0,ae,ue),re=new Rt(0,0,ae,ue);let Ne=!1;const J=new df;let de=!1,Ee=!1;const xe=new ut,Ae=new ut,Ie=new B,Ze=new Rt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function kt(){return H===null?z:1}let q=i;function wn(b,j){return t.getContext(b,j)}try{const b={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nf}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),q===null){const j="webgl2";if(q=wn(j,b),q===null)throw wn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let gt,ft,qe,Ct,Ye,L,w,Q,me,_e,fe,Ve,Re,Ue,dt,Se,Fe,Qe,et,ke,pt,ot,bt,G;function be(){gt=new VE(q),gt.init(),ot=new Rw(q,gt),ft=new OE(q,gt,e,ot),qe=new Tw(q,gt),ft.reverseDepthBuffer&&_&&qe.buffers.depth.setReversed(!0),Ct=new jE(q),Ye=new cw,L=new Aw(q,gt,qe,Ye,ft,ot,Ct),w=new kE(R),Q=new HE(R),me=new Qy(q),bt=new IE(q,me),_e=new GE(q,me,Ct,bt),fe=new YE(q,_e,me,Ct),et=new XE(q,ft,L),Se=new FE(Ye),Ve=new lw(R,w,Q,gt,ft,bt,Se),Re=new Uw(R,Ye),Ue=new hw,dt=new _w(gt),Qe=new NE(R,w,Q,qe,fe,x,d),Fe=new Mw(R,fe,ft),G=new Ow(q,Ct,ft,qe),ke=new UE(q,gt,Ct),pt=new WE(q,gt,Ct),Ct.programs=Ve.programs,R.capabilities=ft,R.extensions=gt,R.properties=Ye,R.renderLists=Ue,R.shadowMap=Fe,R.state=qe,R.info=Ct}be();const se=new Nw(R,q);this.xr=se,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const b=gt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=gt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(ae,ue,!1))},this.getSize=function(b){return b.set(ae,ue)},this.setSize=function(b,j,te=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=b,ue=j,t.width=Math.floor(b*z),t.height=Math.floor(j*z),te===!0&&(t.style.width=b+"px",t.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(ae*z,ue*z).floor()},this.setDrawingBufferSize=function(b,j,te){ae=b,ue=j,z=te,t.width=Math.floor(b*te),t.height=Math.floor(j*te),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(U)},this.setViewport=function(b,j,te,ne){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,j,te,ne),qe.viewport(k.copy(U).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,j,te,ne){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,j,te,ne),qe.scissor(ie.copy(re).multiplyScalar(z).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(b){qe.setScissorTest(Ne=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){oe=b},this.getClearColor=function(b){return b.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(b=!0,j=!0,te=!0){let ne=0;if(b){let Y=!1;if(H!==null){const we=H.texture.format;Y=we===uf||we===cf||we===lf}if(Y){const we=H.texture.type,Me=we===mr||we===Es||we===Na||we===Ro||we===sf||we===of,Ge=Qe.getClearColor(),ze=Qe.getClearAlpha(),nt=Ge.r,rt=Ge.g,We=Ge.b;Me?(M[0]=nt,M[1]=rt,M[2]=We,M[3]=ze,q.clearBufferuiv(q.COLOR,0,M)):(E[0]=nt,E[1]=rt,E[2]=We,E[3]=ze,q.clearBufferiv(q.COLOR,0,E))}else ne|=q.COLOR_BUFFER_BIT}j&&(ne|=q.DEPTH_BUFFER_BIT),te&&(ne|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ue.dispose(),dt.dispose(),Ye.dispose(),w.dispose(),Q.dispose(),fe.dispose(),bt.dispose(),G.dispose(),Ve.dispose(),se.dispose(),se.removeEventListener("sessionstart",Rs),se.removeEventListener("sessionend",gr),ji.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const b=Ct.autoReset,j=Fe.enabled,te=Fe.autoUpdate,ne=Fe.needsUpdate,Y=Fe.type;be(),Ct.autoReset=b,Fe.enabled=j,Fe.autoUpdate=te,Fe.needsUpdate=ne,Fe.type=Y}function Pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function at(b){const j=b.target;j.removeEventListener("dispose",at),zt(j)}function zt(b){Qt(b),Ye.remove(b)}function Qt(b){const j=Ye.get(b).programs;j!==void 0&&(j.forEach(function(te){Ve.releaseProgram(te)}),b.isShaderMaterial&&Ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,te,ne,Y,we){j===null&&(j=It);const Me=Y.isMesh&&Y.matrixWorld.determinant()<0,Ge=Ga(b,j,te,ne,Y);qe.setMaterial(ne,Me);let ze=te.index,nt=1;if(ne.wireframe===!0){if(ze=_e.getWireframeAttribute(te),ze===void 0)return;nt=2}const rt=te.drawRange,We=te.attributes.position;let yt=rt.start*nt,At=(rt.start+rt.count)*nt;we!==null&&(yt=Math.max(yt,we.start*nt),At=Math.min(At,(we.start+we.count)*nt)),ze!==null?(yt=Math.max(yt,0),At=Math.min(At,ze.count)):We!=null&&(yt=Math.max(yt,0),At=Math.min(At,We.count));const xt=At-yt;if(xt<0||xt===1/0)return;bt.setup(Y,ne,Ge,te,ze);let _n,lt=ke;if(ze!==null&&(_n=me.get(ze),lt=pt,lt.setIndex(_n)),Y.isMesh)ne.wireframe===!0?(qe.setLineWidth(ne.wireframeLinewidth*kt()),lt.setMode(q.LINES)):lt.setMode(q.TRIANGLES);else if(Y.isLine){let Xe=ne.linewidth;Xe===void 0&&(Xe=1),qe.setLineWidth(Xe*kt()),Y.isLineSegments?lt.setMode(q.LINES):Y.isLineLoop?lt.setMode(q.LINE_LOOP):lt.setMode(q.LINE_STRIP)}else Y.isPoints?lt.setMode(q.POINTS):Y.isSprite&&lt.setMode(q.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)lt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Xe=Y._multiDrawStarts,di=Y._multiDrawCounts,Tt=Y._multiDrawCount,vn=ze?me.get(ze).bytesPerElement:1,fi=Ye.get(ne).currentProgram.getUniforms();for(let Jt=0;Jt<Tt;Jt++)fi.setValue(q,"_gl_DrawID",Jt),lt.render(Xe[Jt]/vn,di[Jt])}else if(Y.isInstancedMesh)lt.renderInstances(yt,xt,Y.count);else if(te.isInstancedBufferGeometry){const Xe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,di=Math.min(te.instanceCount,Xe);lt.renderInstances(yt,xt,di)}else lt.render(yt,xt)};function Mt(b,j,te){b.transparent===!0&&b.side===Oi&&b.forceSinglePass===!1?(b.side=Nn,b.needsUpdate=!0,bs(b,j,te),b.side=pr,b.needsUpdate=!0,bs(b,j,te),b.side=Oi):bs(b,j,te)}this.compile=function(b,j,te=null){te===null&&(te=b),y=dt.get(te),y.init(j),P.push(y),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),b!==te&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights();const ne=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let Me=0;Me<we.length;Me++){const Ge=we[Me];Mt(Ge,te,Y),ne.add(Ge)}else Mt(we,te,Y),ne.add(we)}),P.pop(),y=null,ne},this.compileAsync=function(b,j,te=null){const ne=this.compile(b,j,te);return new Promise(Y=>{function we(){if(ne.forEach(function(Me){Ye.get(Me).currentProgram.isReady()&&ne.delete(Me)}),ne.size===0){Y(b);return}setTimeout(we,10)}gt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Fn=null;function An(b){Fn&&Fn(b)}function Rs(){ji.stop()}function gr(){ji.start()}const ji=new uv;ji.setAnimationLoop(An),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(b){Fn=b,se.setAnimationLoop(b),b===null?ji.stop():ji.start()},se.addEventListener("sessionstart",Rs),se.addEventListener("sessionend",gr),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(j),j=se.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,j,H),y=dt.get(b,P.length),y.init(j),P.push(y),Ae.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),J.setFromProjectionMatrix(Ae),Ee=this.localClippingEnabled,de=Se.init(this.clippingPlanes,Ee),S=Ue.get(b,D.length),S.init(),D.push(S),se.enabled===!0&&se.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Xi(we,j,-1/0,R.sortObjects)}Xi(b,j,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(ce,oe),vt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,vt&&Qe.addToRenderList(S,b),this.info.render.frame++,de===!0&&Se.beginShadows();const te=y.state.shadowsArray;Fe.render(te,b,j),de===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,Y=S.transmissive;if(y.setupLights(),j.isArrayCamera){const we=j.cameras;if(Y.length>0)for(let Me=0,Ge=we.length;Me<Ge;Me++){const ze=we[Me];Jr(ne,Y,b,ze)}vt&&Qe.render(b);for(let Me=0,Ge=we.length;Me<Ge;Me++){const ze=we[Me];Qr(S,b,ze,ze.viewport)}}else Y.length>0&&Jr(ne,Y,b,j),vt&&Qe.render(b),Qr(S,b,j);H!==null&&(L.updateMultisampleRenderTarget(H),L.updateRenderTargetMipmap(H)),b.isScene===!0&&b.onAfterRender(R,b,j),bt.resetDefaultState(),C=-1,A=null,P.pop(),P.length>0?(y=P[P.length-1],de===!0&&Se.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function Xi(b,j,te,ne){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)te=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){ne&&Ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);const Me=fe.update(b),Ge=b.material;Ge.visible&&S.push(b,Me,Ge,te,Ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const Me=fe.update(b),Ge=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ze.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ze.copy(Me.boundingSphere.center)),Ze.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const ze=Me.groups;for(let nt=0,rt=ze.length;nt<rt;nt++){const We=ze[nt],yt=Ge[We.materialIndex];yt&&yt.visible&&S.push(b,Me,yt,te,Ze.z,We)}}else Ge.visible&&S.push(b,Me,Ge,te,Ze.z,null)}}const we=b.children;for(let Me=0,Ge=we.length;Me<Ge;Me++)Xi(we[Me],j,te,ne)}function Qr(b,j,te,ne){const Y=b.opaque,we=b.transmissive,Me=b.transparent;y.setupLightsView(te),de===!0&&Se.setGlobalState(R.clippingPlanes,te),ne&&qe.viewport(k.copy(ne)),Y.length>0&&_r(Y,j,te),we.length>0&&_r(we,j,te),Me.length>0&&_r(Me,j,te),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Jr(b,j,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ne.id]===void 0&&(y.state.transmissionRenderTarget[ne.id]=new Ts(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Fa:mr,minFilter:hr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const we=y.state.transmissionRenderTarget[ne.id],Me=ne.viewport||k;we.setSize(Me.z,Me.w);const Ge=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(le),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),vt&&Qe.render(te);const ze=R.toneMapping;R.toneMapping=$r;const nt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),y.setupLightsView(ne),de===!0&&Se.setGlobalState(R.clippingPlanes,ne),_r(b,te,ne),L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we),gt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let We=0,yt=j.length;We<yt;We++){const At=j[We],xt=At.object,_n=At.geometry,lt=At.material,Xe=At.group;if(lt.side===Oi&&xt.layers.test(ne.layers)){const di=lt.side;lt.side=Nn,lt.needsUpdate=!0,Ha(xt,te,ne,_n,lt,Xe),lt.side=di,lt.needsUpdate=!0,rt=!0}}rt===!0&&(L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we))}R.setRenderTarget(Ge),R.setClearColor(le,he),nt!==void 0&&(ne.viewport=nt),R.toneMapping=ze}function _r(b,j,te){const ne=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,we=b.length;Y<we;Y++){const Me=b[Y],Ge=Me.object,ze=Me.geometry,nt=ne===null?Me.material:ne,rt=Me.group;Ge.layers.test(te.layers)&&Ha(Ge,j,te,ze,nt,rt)}}function Ha(b,j,te,ne,Y,we){b.onBeforeRender(R,j,te,ne,Y,we),b.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(R,j,te,ne,b,we),Y.transparent===!0&&Y.side===Oi&&Y.forceSinglePass===!1?(Y.side=Nn,Y.needsUpdate=!0,R.renderBufferDirect(te,j,ne,Y,b,we),Y.side=pr,Y.needsUpdate=!0,R.renderBufferDirect(te,j,ne,Y,b,we),Y.side=Oi):R.renderBufferDirect(te,j,ne,Y,b,we),b.onAfterRender(R,j,te,ne,Y,we)}function bs(b,j,te){j.isScene!==!0&&(j=It);const ne=Ye.get(b),Y=y.state.lights,we=y.state.shadowsArray,Me=Y.state.version,Ge=Ve.getParameters(b,Y.state,we,j,te),ze=Ve.getProgramCacheKey(Ge);let nt=ne.programs;ne.environment=b.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(b.isMeshStandardMaterial?Q:w).get(b.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,nt===void 0&&(b.addEventListener("dispose",at),nt=new Map,ne.programs=nt);let rt=nt.get(ze);if(rt!==void 0){if(ne.currentProgram===rt&&ne.lightsStateVersion===Me)return Ci(b,Ge),rt}else Ge.uniforms=Ve.getUniforms(b),b.onBeforeCompile(Ge,R),rt=Ve.acquireProgram(Ge,ze),nt.set(ze,rt),ne.uniforms=Ge.uniforms;const We=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(We.clippingPlanes=Se.uniform),Ci(b,Ge),ne.needsLights=Vc(b),ne.lightsStateVersion=Me,ne.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMap.value=Y.state.directionalShadowMap,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotShadowMap.value=Y.state.spotShadowMap,We.spotLightMatrix.value=Y.state.spotLightMatrix,We.spotLightMap.value=Y.state.spotLightMap,We.pointShadowMap.value=Y.state.pointShadowMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=rt,ne.uniformsList=null,rt}function Va(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=Lc.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function Ci(b,j){const te=Ye.get(b);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function Ga(b,j,te,ne,Y){j.isScene!==!0&&(j=It),L.resetTextureUnits();const we=j.fog,Me=ne.isMeshStandardMaterial?j.environment:null,Ge=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:On,ze=(ne.isMeshStandardMaterial?Q:w).get(ne.envMap||Me),nt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,rt=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),We=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,At=!!te.morphAttributes.color;let xt=$r;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(xt=R.toneMapping);const _n=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,lt=_n!==void 0?_n.length:0,Xe=Ye.get(ne),di=y.state.lights;if(de===!0&&(Ee===!0||b!==A)){const Rn=b===A&&ne.id===C;Se.setState(ne,b,Rn)}let Tt=!1;ne.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==di.state.version||Xe.outputColorSpace!==Ge||Y.isBatchedMesh&&Xe.batching===!1||!Y.isBatchedMesh&&Xe.batching===!0||Y.isBatchedMesh&&Xe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xe.instancing===!1||!Y.isInstancedMesh&&Xe.instancing===!0||Y.isSkinnedMesh&&Xe.skinning===!1||!Y.isSkinnedMesh&&Xe.skinning===!0||Y.isInstancedMesh&&Xe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xe.instancingMorph===!1&&Y.morphTexture!==null||Xe.envMap!==ze||ne.fog===!0&&Xe.fog!==we||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Se.numPlanes||Xe.numIntersection!==Se.numIntersection)||Xe.vertexAlphas!==nt||Xe.vertexTangents!==rt||Xe.morphTargets!==We||Xe.morphNormals!==yt||Xe.morphColors!==At||Xe.toneMapping!==xt||Xe.morphTargetsCount!==lt)&&(Tt=!0):(Tt=!0,Xe.__version=ne.version);let vn=Xe.currentProgram;Tt===!0&&(vn=bs(ne,j,Y));let fi=!1,Jt=!1,Pi=!1;const Ft=vn.getUniforms(),ti=Xe.uniforms;if(qe.useProgram(vn.program)&&(fi=!0,Jt=!0,Pi=!0),ne.id!==C&&(C=ne.id,Jt=!0),fi||A!==b){qe.buffers.depth.getReversed()?(xe.copy(b.projectionMatrix),Ry(xe),by(xe),Ft.setValue(q,"projectionMatrix",xe)):Ft.setValue(q,"projectionMatrix",b.projectionMatrix),Ft.setValue(q,"viewMatrix",b.matrixWorldInverse);const ni=Ft.map.cameraPosition;ni!==void 0&&ni.setValue(q,Ie.setFromMatrixPosition(b.matrixWorld)),ft.logarithmicDepthBuffer&&Ft.setValue(q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ft.setValue(q,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Jt=!0,Pi=!0)}if(Y.isSkinnedMesh){Ft.setOptional(q,Y,"bindMatrix"),Ft.setOptional(q,Y,"bindMatrixInverse");const Rn=Y.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ft.setValue(q,"boneTexture",Rn.boneTexture,L))}Y.isBatchedMesh&&(Ft.setOptional(q,Y,"batchingTexture"),Ft.setValue(q,"batchingTexture",Y._matricesTexture,L),Ft.setOptional(q,Y,"batchingIdTexture"),Ft.setValue(q,"batchingIdTexture",Y._indirectTexture,L),Ft.setOptional(q,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ft.setValue(q,"batchingColorTexture",Y._colorsTexture,L));const Yi=te.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&et.update(Y,te,vn),(Jt||Xe.receiveShadow!==Y.receiveShadow)&&(Xe.receiveShadow=Y.receiveShadow,Ft.setValue(q,"receiveShadow",Y.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ti.envMap.value=ze,ti.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(ti.envMapIntensity.value=j.environmentIntensity),Jt&&(Ft.setValue(q,"toneMappingExposure",R.toneMappingExposure),Xe.needsLights&&Wa(ti,Pi),we&&ne.fog===!0&&Re.refreshFogUniforms(ti,we),Re.refreshMaterialUniforms(ti,ne,z,ue,y.state.transmissionRenderTarget[b.id]),Lc.upload(q,Va(Xe),ti,L)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Lc.upload(q,Va(Xe),ti,L),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ft.setValue(q,"center",Y.center),Ft.setValue(q,"modelViewMatrix",Y.modelViewMatrix),Ft.setValue(q,"normalMatrix",Y.normalMatrix),Ft.setValue(q,"modelMatrix",Y.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Rn=ne.uniformsGroups;for(let ni=0,kn=Rn.length;ni<kn;ni++){const ja=Rn[ni];G.update(ja,vn),G.bind(ja,vn)}}return vn}function Wa(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function Vc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(b,j,te){Ye.get(b.texture).__webglTexture=j,Ye.get(b.depthTexture).__webglTexture=te;const ne=Ye.get(b);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,j){const te=Ye.get(b);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(b,j=0,te=0){H=b,O=j,I=te;let ne=!0,Y=null,we=!1,Me=!1;if(b){const ze=Ye.get(b);if(ze.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(q.FRAMEBUFFER,null),ne=!1;else if(ze.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(ze.__hasExternalTextures)L.rebindTextures(b,Ye.get(b.texture).__webglTexture,Ye.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const We=b.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&Ye.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const nt=b.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Me=!0);const rt=Ye.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(rt[j])?Y=rt[j][te]:Y=rt[j],we=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?Y=Ye.get(b).__webglMultisampledFramebuffer:Array.isArray(rt)?Y=rt[te]:Y=rt,k.copy(b.viewport),ie.copy(b.scissor),Z=b.scissorTest}else k.copy(U).multiplyScalar(z).floor(),ie.copy(re).multiplyScalar(z).floor(),Z=Ne;if(qe.bindFramebuffer(q.FRAMEBUFFER,Y)&&ne&&qe.drawBuffers(b,Y),qe.viewport(k),qe.scissor(ie),qe.setScissorTest(Z),we){const ze=Ye.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze.__webglTexture,te)}else if(Me){const ze=Ye.get(b.texture),nt=j||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,ze.__webglTexture,te||0,nt)}C=-1},this.readRenderTargetPixels=function(b,j,te,ne,Y,we,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){qe.bindFramebuffer(q.FRAMEBUFFER,Ge);try{const ze=b.texture,nt=ze.format,rt=ze.type;if(!ft.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-ne&&te>=0&&te<=b.height-Y&&q.readPixels(j,te,ne,Y,ot.convert(nt),ot.convert(rt),we)}finally{const ze=H!==null?Ye.get(H).__webglFramebuffer:null;qe.bindFramebuffer(q.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,j,te,ne,Y,we,Me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){const ze=b.texture,nt=ze.format,rt=ze.type;if(!ft.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=b.width-ne&&te>=0&&te<=b.height-Y){qe.bindFramebuffer(q.FRAMEBUFFER,Ge);const We=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,We),q.bufferData(q.PIXEL_PACK_BUFFER,we.byteLength,q.STREAM_READ),q.readPixels(j,te,ne,Y,ot.convert(nt),ot.convert(rt),0);const yt=H!==null?Ye.get(H).__webglFramebuffer:null;qe.bindFramebuffer(q.FRAMEBUFFER,yt);const At=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Ay(q,At,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,We),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,we),q.deleteBuffer(We),q.deleteSync(At),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,j=null,te=0){b.isTexture!==!0&&(ba("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,b=arguments[1]);const ne=Math.pow(2,-te),Y=Math.floor(b.image.width*ne),we=Math.floor(b.image.height*ne),Me=j!==null?j.x:0,Ge=j!==null?j.y:0;L.setTexture2D(b,0),q.copyTexSubImage2D(q.TEXTURE_2D,te,0,0,Me,Ge,Y,we),qe.unbindTexture()},this.copyTextureToTexture=function(b,j,te=null,ne=null,Y=0){b.isTexture!==!0&&(ba("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,b=arguments[1],j=arguments[2],Y=arguments[3]||0,te=null);let we,Me,Ge,ze,nt,rt,We,yt,At;const xt=b.isCompressedTexture?b.mipmaps[Y]:b.image;te!==null?(we=te.max.x-te.min.x,Me=te.max.y-te.min.y,Ge=te.isBox3?te.max.z-te.min.z:1,ze=te.min.x,nt=te.min.y,rt=te.isBox3?te.min.z:0):(we=xt.width,Me=xt.height,Ge=xt.depth||1,ze=0,nt=0,rt=0),ne!==null?(We=ne.x,yt=ne.y,At=ne.z):(We=0,yt=0,At=0);const _n=ot.convert(j.format),lt=ot.convert(j.type);let Xe;j.isData3DTexture?(L.setTexture3D(j,0),Xe=q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),Xe=q.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),Xe=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);const di=q.getParameter(q.UNPACK_ROW_LENGTH),Tt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),vn=q.getParameter(q.UNPACK_SKIP_PIXELS),fi=q.getParameter(q.UNPACK_SKIP_ROWS),Jt=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,xt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,ze),q.pixelStorei(q.UNPACK_SKIP_ROWS,nt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,rt);const Pi=b.isDataArrayTexture||b.isData3DTexture,Ft=j.isDataArrayTexture||j.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const ti=Ye.get(b),Yi=Ye.get(j),Rn=Ye.get(ti.__renderTarget),ni=Ye.get(Yi.__renderTarget);qe.bindFramebuffer(q.READ_FRAMEBUFFER,Rn.__webglFramebuffer),qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let kn=0;kn<Ge;kn++)Pi&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ye.get(b).__webglTexture,Y,rt+kn),b.isDepthTexture?(Ft&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ye.get(j).__webglTexture,Y,At+kn),q.blitFramebuffer(ze,nt,we,Me,We,yt,we,Me,q.DEPTH_BUFFER_BIT,q.NEAREST)):Ft?q.copyTexSubImage3D(Xe,Y,We,yt,At+kn,ze,nt,we,Me):q.copyTexSubImage2D(Xe,Y,We,yt,At+kn,ze,nt,we,Me);qe.bindFramebuffer(q.READ_FRAMEBUFFER,null),qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ft?b.isDataTexture||b.isData3DTexture?q.texSubImage3D(Xe,Y,We,yt,At,we,Me,Ge,_n,lt,xt.data):j.isCompressedArrayTexture?q.compressedTexSubImage3D(Xe,Y,We,yt,At,we,Me,Ge,_n,xt.data):q.texSubImage3D(Xe,Y,We,yt,At,we,Me,Ge,_n,lt,xt):b.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Y,We,yt,we,Me,_n,lt,xt.data):b.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Y,We,yt,xt.width,xt.height,_n,xt.data):q.texSubImage2D(q.TEXTURE_2D,Y,We,yt,we,Me,_n,lt,xt);q.pixelStorei(q.UNPACK_ROW_LENGTH,di),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Tt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,vn),q.pixelStorei(q.UNPACK_SKIP_ROWS,fi),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Jt),Y===0&&j.generateMipmaps&&q.generateMipmap(Xe),qe.unbindTexture()},this.copyTextureToTexture3D=function(b,j,te=null,ne=null,Y=0){return b.isTexture!==!0&&(ba("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,b=arguments[2],j=arguments[3],Y=arguments[4]||0),ba('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,j,te,ne,Y)},this.initRenderTarget=function(b){Ye.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),qe.unbindTexture()},this.resetState=function(){O=0,I=0,H=null,qe.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class mf{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=i}clone(){return new mf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gv extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yd,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new B;class gf{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),a=Lt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const i_=new B,r_=new Rt,s_=new Rt,Bw=new B,o_=new ut,fc=new B,Jh=new Vi,a_=new ut,ed=new ka;class zw extends Dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=og,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fc),this.boundingBox.expandByPoint(fc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fc),this.boundingSphere.expandByPoint(fc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jh.copy(this.boundingSphere),Jh.applyMatrix4(s),e.ray.intersectsSphere(Jh)!==!1&&(a_.copy(s).invert(),ed.copy(e.ray).applyMatrix4(a_),!(this.boundingBox!==null&&ed.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ed)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Rt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===og?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$x?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;r_.fromBufferAttribute(s.attributes.skinIndex,e),s_.fromBufferAttribute(s.attributes.skinWeight,e),i_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=s_.getComponent(a);if(c!==0){const u=r_.getComponent(a);o_.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(Bw.copy(i_).applyMatrix4(o_),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class _v extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vv extends hn{constructor(e=null,t=1,i=1,s,a,c,u,d,f=In,m=In,g,_){super(null,c,u,d,f,m,s,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const l_=new ut,Hw=new ut;class _f{constructor(e=[],t=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ut;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:Hw;l_.multiplyMatrices(u,t[a]),l_.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new _f(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new vv(t,e,e,hi,Ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new _v),this.bones.push(c),this.boneInverses.push(new ut().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class $d extends Un{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ho=new ut,c_=new ut,pc=[],u_=new Hi,Vw=new ut,ya=new Dt,Sa=new Vi;class Gw extends Dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $d(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Vw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ho),u_.copy(e.boundingBox).applyMatrix4(ho),this.boundingBox.union(u_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ho),Sa.copy(e.boundingSphere).applyMatrix4(ho),this.boundingSphere.union(Sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ya.geometry=this.geometry,ya.material=this.material,ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(i),e.ray.intersectsSphere(Sa)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,ho),c_.multiplyMatrices(i,ho),ya.matrixWorld=c_,ya.raycast(e,pc);for(let c=0,u=pc.length;c<u;c++){const d=pc[c];d.instanceId=a,d.object=this,t.push(d)}pc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $d(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new vv(new Float32Array(s*this.count),s,this.count,af,Ai));const a=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const u=this.geometry.morphTargetsRelative?1:1-c,d=s*e;a[d]=u,a.set(i,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class vf extends Fi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ic=new B,Uc=new B,h_=new ut,Ma=new ka,mc=new Vi,td=new B,d_=new B;class xf extends jt{constructor(e=new ei,t=new vf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Ic.fromBufferAttribute(t,s-1),Uc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ic.distanceTo(Uc);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(s),mc.radius+=a,e.ray.intersectsSphere(mc)===!1)return;h_.copy(s).invert(),Ma.copy(e.ray).applyMatrix4(h_);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=x,S=M-1;E<S;E+=f){const y=m.getX(E),D=m.getX(E+1),P=gc(this,e,Ma,d,y,D);P&&t.push(P)}if(this.isLineLoop){const E=m.getX(M-1),S=m.getX(x),y=gc(this,e,Ma,d,E,S);y&&t.push(y)}}else{const x=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let E=x,S=M-1;E<S;E+=f){const y=gc(this,e,Ma,d,E,E+1);y&&t.push(y)}if(this.isLineLoop){const E=gc(this,e,Ma,d,M-1,x);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function gc(o,e,t,i,s,a){const c=o.geometry.attributes.position;if(Ic.fromBufferAttribute(c,s),Uc.fromBufferAttribute(c,a),t.distanceSqToSegment(Ic,Uc,td,d_)>i)return;td.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(td);if(!(d<e.near||d>e.far))return{distance:d,point:d_.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const f_=new B,p_=new B;class xv extends xf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)f_.fromBufferAttribute(t,s),p_.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+f_.distanceTo(p_);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ww extends xf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yv extends Fi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const m_=new ut,Zd=new ka,_c=new Vi,vc=new B;class jw extends jt{constructor(e=new ei,t=new yv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(s),_c.radius+=a,e.ray.intersectsSphere(_c)===!1)return;m_.copy(s).invert(),Zd.copy(e.ray).applyMatrix4(m_);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=i.index,g=i.attributes.position;if(f!==null){const _=Math.max(0,c.start),x=Math.min(f.count,c.start+c.count);for(let M=_,E=x;M<E;M++){const S=f.getX(M);vc.fromBufferAttribute(g,S),g_(vc,S,d,s,e,t,this)}}else{const _=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let M=_,E=x;M<E;M++)vc.fromBufferAttribute(g,M),g_(vc,M,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function g_(o,e,t,i,s,a,c){const u=Zd.distanceSqToPoint(o);if(u<t){const d=new B;Zd.closestPointToPoint(o,d),d.applyMatrix4(i);const f=s.ray.origin.distanceTo(d);if(f<s.near||f>s.far)return;a.push({distance:f,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class yf extends ei{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const a=[],c=[],u=[],d=[],f=new B,m=new Je;c.push(0,0,0),u.push(0,0,1),d.push(.5,.5);for(let g=0,_=3;g<=t;g++,_+=3){const x=i+g/t*s;f.x=e*Math.cos(x),f.y=e*Math.sin(x),c.push(f.x,f.y,f.z),u.push(0,0,1),m.x=(c[_]/e+1)/2,m.y=(c[_+1]/e+1)/2,d.push(m.x,m.y)}for(let g=1;g<=t;g++)a.push(g,g+1,0);this.setIndex(a),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ba extends ei{constructor(e=1,t=1,i=1,s=32,a=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:d};const f=this;s=Math.floor(s),a=Math.floor(a);const m=[],g=[],_=[],x=[];let M=0;const E=[],S=i/2;let y=0;D(),c===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(m),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(x,2));function D(){const R=new B,X=new B;let O=0;const I=(t-e)/i;for(let H=0;H<=a;H++){const C=[],A=H/a,k=A*(t-e)+e;for(let ie=0;ie<=s;ie++){const Z=ie/s,le=Z*d+u,he=Math.sin(le),ae=Math.cos(le);X.x=k*he,X.y=-A*i+S,X.z=k*ae,g.push(X.x,X.y,X.z),R.set(he,I,ae).normalize(),_.push(R.x,R.y,R.z),x.push(Z,1-A),C.push(M++)}E.push(C)}for(let H=0;H<s;H++)for(let C=0;C<a;C++){const A=E[C][H],k=E[C+1][H],ie=E[C+1][H+1],Z=E[C][H+1];(e>0||C!==0)&&(m.push(A,k,Z),O+=3),(t>0||C!==a-1)&&(m.push(k,ie,Z),O+=3)}f.addGroup(y,O,0),y+=O}function P(R){const X=M,O=new Je,I=new B;let H=0;const C=R===!0?e:t,A=R===!0?1:-1;for(let ie=1;ie<=s;ie++)g.push(0,S*A,0),_.push(0,A,0),x.push(.5,.5),M++;const k=M;for(let ie=0;ie<=s;ie++){const le=ie/s*d+u,he=Math.cos(le),ae=Math.sin(le);I.x=C*ae,I.y=S*A,I.z=C*he,g.push(I.x,I.y,I.z),_.push(0,A,0),O.x=he*.5+.5,O.y=ae*.5*A+.5,x.push(O.x,O.y),M++}for(let ie=0;ie<s;ie++){const Z=X+ie,le=k+ie;R===!0?m.push(le,le+1,Z):m.push(le+1,le,Z),H+=3}f.addGroup(y,H,R===!0?1:2),y+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bi extends Fi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q_,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gi extends bi{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function xc(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Xw(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Yw(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function __(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let d=0;d!==e;++d)s[c++]=o[u+d]}return s}function Sv(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class za{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qw extends za{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ag,endingEnd:ag}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],d=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case lg:a=e,u=2*t-i;break;case cg:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(d===void 0)switch(this.getSettings_().endingEnd){case lg:c=e,d=2*i-t;break;case cg:c=1,d=i+s[1]-s[0];break;default:c=e-1,d=t}const f=(i-t)*.5,m=this.valueSize;this._weightPrev=f/(t-u),this._weightNext=f/(d-i),this._offsetPrev=a*m,this._offsetNext=c*m}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,x=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,y=-_*S+2*_*E-_*M,D=(1+_)*S+(-1.5-2*_)*E+(-.5+_)*M+1,P=(-1-x)*S+(1.5+x)*E+.5*M,R=x*S-x*E;for(let X=0;X!==u;++X)a[X]=y*c[m+X]+D*c[f+X]+P*c[d+X]+R*c[g+X];return a}}class Kw extends za{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,m=(i-t)/(s-t),g=1-m;for(let _=0;_!==u;++_)a[_]=c[f+_]*g+c[d+_]*m;return a}}class $w extends za{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xc(t,this.TimeBufferType),this.values=xc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:xc(e.times,Array),values:xc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $w(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ia:t=this.InterpolantFactoryMethodDiscrete;break;case Ua:t=this.InterpolantFactoryMethodLinear;break;case wh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return wh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const d=i[u];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,d),e=!1;break}if(c!==null&&c>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,d,c),e=!1;break}c=d}if(s!==void 0&&Xw(s))for(let u=0,d=s.length;u!==d;++u){const f=s[u];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wh,a=e.length-1;let c=1;for(let u=1;u<a;++u){let d=!1;const f=e[u],m=e[u+1];if(f!==m&&(u!==1||f!==e[0]))if(s)d=!0;else{const g=u*i,_=g-i,x=g+i;for(let M=0;M!==i;++M){const E=t[g+M];if(E!==t[_+M]||E!==t[x+M]){d=!0;break}}}if(d){if(u!==c){e[c]=e[u];const g=u*i,_=c*i;for(let x=0;x!==i;++x)t[_+x]=t[g+x]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,d=c*i,f=0;f!==i;++f)t[d+f]=t[u+f];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Wi.prototype.TimeBufferType=Float32Array;Wi.prototype.ValueBufferType=Float32Array;Wi.prototype.DefaultInterpolation=Ua;class Uo extends Wi{constructor(e,t,i){super(e,t,i)}}Uo.prototype.ValueTypeName="bool";Uo.prototype.ValueBufferType=Array;Uo.prototype.DefaultInterpolation=Ia;Uo.prototype.InterpolantFactoryMethodLinear=void 0;Uo.prototype.InterpolantFactoryMethodSmooth=void 0;class Mv extends Wi{}Mv.prototype.ValueTypeName="color";class Lo extends Wi{}Lo.prototype.ValueTypeName="number";class Zw extends za{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=(i-t)/(s-t);let f=e*u;for(let m=f+u;f!==m;f+=4)Bi.slerpFlat(a,0,c,f-u,c,f,d);return a}}class Do extends Wi{InterpolantFactoryMethodLinear(e){return new Zw(this.times,this.values,this.getValueSize(),e)}}Do.prototype.ValueTypeName="quaternion";Do.prototype.InterpolantFactoryMethodSmooth=void 0;class Oo extends Wi{constructor(e,t,i){super(e,t,i)}}Oo.prototype.ValueTypeName="string";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=Ia;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;class No extends Wi{}No.prototype.ValueTypeName="vector";class Qw{constructor(e="",t=-1,i=[],s=Zx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(eA(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Wi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let d=[],f=[];d.push((u+a-1)%a,u,(u+1)%a),f.push(0,1,0);const m=Yw(d);d=__(d,1,m),f=__(f,1,m),!s&&d[0]===0&&(d.push(a),f.push(f[0])),c.push(new Lo(".morphTargetInfluences["+t[u].name+"]",d,f).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,d=e.length;u<d;u++){const f=e[u],m=f.name.match(a);if(m&&m.length>1){const g=m[1];let _=s[g];_||(s[g]=_=[]),_.push(f)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,x,M,E){if(x.length!==0){const S=[],y=[];Sv(x,S,y,M),S.length!==0&&E.push(new g(_,S,y))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let d=e.length||-1;const f=e.hierarchy||[];for(let g=0;g<f.length;g++){const _=f[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)x[_[M].morphTargets[E]]=-1;for(const E in x){const S=[],y=[];for(let D=0;D!==_[M].morphTargets.length;++D){const P=_[M];S.push(P.time),y.push(P.morphTarget===E?1:0)}s.push(new Lo(".morphTargetInfluence["+E+"]",S,y))}d=x.length*c}else{const x=".bones["+t[g].name+"]";i(No,x+".position",_,"pos",s),i(Do,x+".quaternion",_,"rot",s),i(No,x+".scale",_,"scl",s)}}return s.length===0?null:new this(a,d,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jw(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Lo;case"vector":case"vector2":case"vector3":case"vector4":return No;case"color":return Mv;case"quaternion":return Do;case"bool":case"boolean":return Uo;case"string":return Oo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function eA(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jw(o.type);if(o.times===void 0){const t=[],i=[];Sv(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const qr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class tA{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){u++,a===!1&&s.onStart!==void 0&&s.onStart(m,c,u),a=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return f.push(m,g),this},this.removeHandler=function(m){const g=f.indexOf(m);return g!==-1&&f.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=f.length;g<_;g+=2){const x=f[g],M=f[g+1];if(x.global&&(x.lastIndex=0),x.test(m))return M}return null}}}const nA=new tA;class Fo{constructor(e){this.manager=e!==void 0?e:nA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar={};class iA extends Error{constructor(e,t){super(e),this.response=t}}class Ev extends Fo{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=qr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(ar[e]!==void 0){ar[e].push({onLoad:t,onProgress:i,onError:s});return}ar[e]=[],ar[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,d=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const m=ar[e],g=f.body.getReader(),_=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),x=_?parseInt(_):0,M=x!==0;let E=0;const S=new ReadableStream({start(y){D();function D(){g.read().then(({done:P,value:R})=>{if(P)y.close();else{E+=R.byteLength;const X=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:x});for(let O=0,I=m.length;O<I;O++){const H=m[O];H.onProgress&&H.onProgress(X)}y.enqueue(R),D()}},P=>{y.error(P)})}}});return new Response(S)}else throw new iA(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(d){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return f.json();default:if(u===void 0)return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(_);return f.arrayBuffer().then(M=>x.decode(M))}}}).then(f=>{qr.add(e,f);const m=ar[e];delete ar[e];for(let g=0,_=m.length;g<_;g++){const x=m[g];x.onLoad&&x.onLoad(f)}}).catch(f=>{const m=ar[e];if(m===void 0)throw this.manager.itemError(e),f;delete ar[e];for(let g=0,_=m.length;g<_;g++){const x=m[g];x.onError&&x.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rA extends Fo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=qr.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=Oa("img");function d(){m(),qr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(g){m(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){u.removeEventListener("load",d,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class sA extends Fo{constructor(e){super(e)}load(e,t,i,s){const a=new hn,c=new rA(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class zc extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class oA extends zc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const nd=new ut,v_=new B,x_=new B;class Sf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new df,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;v_.setFromMatrixPosition(e.matrixWorld),t.position.copy(v_),x_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(x_),t.updateMatrixWorld(),nd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class aA extends Sf{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Co*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lA extends zc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new aA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const y_=new ut,Ea=new B,id=new B;class cA extends Sf{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ea.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ea),id.copy(i.position),id.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(id),i.updateMatrixWorld(),s.makeTranslation(-Ea.x,-Ea.y,-Ea.z),y_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(y_)}}class Tv extends zc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new cA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uA extends Sf{constructor(){super(new ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qd extends zc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new uA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Da{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hA extends Fo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=qr.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(f=>{t&&t(f),a.manager.itemEnd(e)}).catch(f=>{s&&s(f)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const d=fetch(e,u).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(f){return qr.add(e,f),t&&t(f),a.manager.itemEnd(e),f}).catch(function(f){s&&s(f),qr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});qr.add(e,d),a.manager.itemStart(e)}}class dA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=S_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=S_();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function S_(){return performance.now()}const Mf="\\[\\]\\.:\\/",fA=new RegExp("["+Mf+"]","g"),Ef="[^"+Mf+"]",pA="[^"+Mf.replace("\\.","")+"]",mA=/((?:WC+[\/:])*)/.source.replace("WC",Ef),gA=/(WCOD+)?/.source.replace("WCOD",pA),_A=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ef),vA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ef),xA=new RegExp("^"+mA+gA+_A+vA+"$"),yA=["material","materials","bones","map"];class SA{constructor(e,t,i){const s=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Nt{constructor(e,t,i){this.path=t,this.parsedPath=i||Nt.parseTrackName(t),this.node=Nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Nt.Composite(e,t,i):new Nt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fA,"")}static parseTrackName(e){const t=xA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);yA.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const d=i(u.children);if(d)return d}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===f){f=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const c=e[s];if(c===void 0){const f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=SA;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class M_{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class MA extends xv{constructor(e=10,t=10,i=4473924,s=8947848){i=new tt(i),s=new tt(s);const a=t/2,c=e/t,u=e/2,d=[],f=[];for(let _=0,x=0,M=-u;_<=t;_++,M+=c){d.push(-u,0,M,u,0,M),d.push(M,0,-u,M,0,u);const E=_===a?i:s;E.toArray(f,x),x+=3,E.toArray(f,x),x+=3,E.toArray(f,x),x+=3,E.toArray(f,x),x+=3}const m=new ei;m.setAttribute("position",new gn(d,3)),m.setAttribute("color",new gn(f,3));const g=new vf({vertexColors:!0,toneMapped:!1});super(m,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class EA extends ws{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);const E_={type:"change"},Tf={type:"start"},wv={type:"end"},yc=new ka,T_=new Wr,TA=Math.cos(70*go.DEG2RAD),nn=new B,jn=2*Math.PI,Ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rd=1e-6;class wA extends EA{constructor(e,t=null){super(e,t),this.state=Ot.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vo.ROTATE,MIDDLE:vo.DOLLY,RIGHT:vo.PAN},this.touches={ONE:mo.ROTATE,TWO:mo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Bi,this._lastTargetPosition=new B,this._quat=new Bi().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new M_,this._sphericalDelta=new M_,this._scale=1,this._panOffset=new B,this._rotateStart=new Je,this._rotateEnd=new Je,this._rotateDelta=new Je,this._panStart=new Je,this._panEnd=new Je,this._panDelta=new Je,this._dollyStart=new Je,this._dollyEnd=new Je,this._dollyDelta=new Je,this._dollyDirection=new B,this._mouse=new Je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RA.bind(this),this._onPointerDown=AA.bind(this),this._onPointerUp=bA.bind(this),this._onContextMenu=UA.bind(this),this._onMouseWheel=LA.bind(this),this._onKeyDown=DA.bind(this),this._onTouchStart=NA.bind(this),this._onTouchMove=IA.bind(this),this._onMouseDown=CA.bind(this),this._onMouseMove=PA.bind(this),this._interceptControlDown=OA.bind(this),this._interceptControlUp=FA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(E_),this.update(),this.state=Ot.NONE}update(e=null){const t=this.object.position;nn.copy(t).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===Ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=jn:i>Math.PI&&(i-=jn),s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),t.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=nn.length();c=this._clampDistance(u*this._scale);const d=u-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const u=new B(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const f=new B(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(u),this.object.updateMatrixWorld(),c=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(yc.origin.copy(this.object.position),yc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yc.direction))<TA?this.object.lookAt(this.target):(T_.setFromNormalAndCoplanarPoint(this.object.up,this.target),yc.intersectPlane(T_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rd||this._lastTargetPosition.distanceToSquared(this.target)>rd?(this.dispatchEvent(E_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jn/60*this.autoRotateSpeed*e:jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){nn.setFromMatrixColumn(t,0),nn.multiplyScalar(-e),this._panOffset.add(nn)}_panUp(e,t){this.screenSpacePanning===!0?nn.setFromMatrixColumn(t,1):(nn.setFromMatrixColumn(t,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(e),this._panOffset.add(nn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;nn.copy(s).sub(this.target);let a=nn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,c=i.width,u=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function AA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function RA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function bA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wv),this.state=Ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function CA(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ot.DOLLY;break;case vo.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ot.ROTATE}break;case vo.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ot.PAN}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(Tf)}function PA(o){switch(this.state){case Ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function LA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ot.NONE||(o.preventDefault(),this.dispatchEvent(Tf),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(wv))}function DA(o){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(o)}function NA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case mo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ot.TOUCH_ROTATE;break;case mo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ot.TOUCH_PAN;break;default:this.state=Ot.NONE}break;case 2:switch(this.touches.TWO){case mo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ot.TOUCH_DOLLY_PAN;break;case mo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ot.TOUCH_DOLLY_ROTATE;break;default:this.state=Ot.NONE}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(Tf)}function IA(o){switch(this._trackPointer(o),this.state){case Ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ot.NONE}}function UA(o){this.enabled!==!1&&o.preventDefault()}function OA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class kA extends gv{constructor(){super();const e=new As;e.deleteAttribute("uv");const t=new bi({side:Nn}),i=new bi,s=new Tv(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const a=new Dt(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const c=new Dt(e,i);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);const u=new Dt(e,i);u.position.set(-5.607,-.754,-.758),u.rotation.set(0,.994,0),u.scale.set(1.97,1.534,3.955),this.add(u);const d=new Dt(e,i);d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),this.add(d);const f=new Dt(e,i);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const m=new Dt(e,i);m.position.set(2.291,-.756,-2.621),m.rotation.set(0,-.286,0),m.scale.set(1.546,1.552,1.496),this.add(m);const g=new Dt(e,i);g.position.set(-2.193,-.369,-5.547),g.rotation.set(0,.516,0),g.scale.set(3.875,3.487,2.986),this.add(g);const _=new Dt(e,fo(50));_.position.set(-16.116,14.37,8.208),_.scale.set(.1,2.428,2.739),this.add(_);const x=new Dt(e,fo(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);const M=new Dt(e,fo(17));M.position.set(14.904,12.198,-1.832),M.scale.set(.15,4.265,6.331),this.add(M);const E=new Dt(e,fo(43));E.position.set(-.462,8.89,14.52),E.scale.set(4.38,5.441,.088),this.add(E);const S=new Dt(e,fo(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,.1),this.add(S);const y=new Dt(e,fo(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function fo(o){const e=new Yr;return e.color.setScalar(o),e}const st={shoulderZ:30,l1:40,l2:55,wristToTcp:15.25,fingerTravel:1.8,fingerGrasp:.7,cubeRest:new B(58.76,0,6.1),pedestalA:new Je(58.8,0),pedestalB:new Je(0,58.8)},Av=["j1","j2","j3","j4","j5","j6"],Rv={j1:[-170,170],j2:[-100,100],j3:[-80,140],j4:[-180,180],j5:[-120,120],j6:[-180,180]},BA={j1:"Base",j2:"Shoulder",j3:"Elbow",j4:"Wrist roll",j5:"Wrist pitch",j6:"Tool roll"},po={j1:0,j2:0,j3:0,j4:0,j5:0,j6:0},lr=Math.PI/180;function zA(o){return o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2}class HA{constructor(e){Wt(this,"parts");Wt(this,"pose",{...po});Wt(this,"grip",.6);Wt(this,"tween",null);Wt(this,"sequenceId",0);Wt(this,"running",!1);Wt(this,"statusCb",()=>{});Wt(this,"poseCb",()=>{});this.parts=e,this.apply()}onStatus(e){this.statusCb=e}onPoseChange(e){this.poseCb=e}get busy(){return this.running}update(e){const t=this.tween;if(!t)return;t.elapsed=Math.min(t.elapsed+e,t.duration);const i=zA(t.elapsed/t.duration);for(const s of Av)this.pose[s]=t.fromPose[s]+(t.toPose[s]-t.fromPose[s])*i;this.grip=t.fromGrip+(t.toGrip-t.fromGrip)*i,this.apply(),t.elapsed>=t.duration&&(this.tween=null,t.resolve())}apply(){const{joints:e,fingerL:t,fingerR:i,fingerRestL:s,fingerRestR:a}=this.parts;e.j1.rotation.z=this.pose.j1*lr,e.j2.rotation.y=this.pose.j2*lr,e.j3.rotation.y=this.pose.j3*lr,e.j4.rotation.x=this.pose.j4*lr,e.j5.rotation.y=this.pose.j5*lr,e.j6.rotation.x=this.pose.j6*lr;const c=this.grip*st.fingerTravel;t.position.copy(s).add(new B(0,-c,0)),i.position.copy(a).add(new B(0,c,0)),this.poseCb(this.pose,this.grip)}setJoint(e,t){if(this.running)return;const[i,s]=Rv[e];this.pose[e]=go.clamp(t,i,s),this.apply()}jogJoint(e,t){this.setJoint(e,this.pose[e]+t)}setGrip(e){this.running||(this.grip=go.clamp(e,0,1),this.apply())}toggleGripper(){this.running||this.animateTo({},this.grip>.5?0:1,.6,"Gripper")}animateTo(e,t,i,s){return s&&this.statusCb(s,this.running),new Promise(a=>{this.tween={fromPose:{...this.pose},toPose:{...this.pose,...e},fromGrip:this.grip,toGrip:t??this.grip,duration:Math.max(i,.01),elapsed:0,resolve:a}})}solveTopDown(e,t,i){const s=Math.atan2(t,e)/lr,c=Math.hypot(e,t),u=i+st.wristToTcp,d=c,f=u-st.shoulderZ,m=Math.hypot(d,f),{l1:g,l2:_}=st;if(m>g+_-.01||m<Math.abs(g-_)+.01)return null;const x=(g*g+_*_-m*m)/(2*g*_),E=Math.acos(go.clamp(x,-1,1))/lr-90,S=Math.atan2(d,f),y=(g*g+m*m-_*_)/(2*g*m),D=Math.acos(go.clamp(y,-1,1)),P=(S-D)/lr,R=90-P-E;return{j1:s,j2:P,j3:E,j4:0,j5:R,j6:0}}async run(e,t){const i=++this.sequenceId;this.running=!0,this.statusCb(e,!0);try{await t(i),i===this.sequenceId&&this.statusCb("Idle — ready",!1)}finally{i===this.sequenceId&&(this.running=!1)}}stop(){var e;this.sequenceId++,(e=this.tween)==null||e.resolve(),this.tween=null,this.running=!1,this.releaseCube(),this.statusCb("Stopped",!1)}goHome(){return this.run("Homing all axes…",async()=>{this.releaseCube(),await this.animateTo({...po},.6,1.6)})}inspect(){return this.run("Inspection sweep…",async e=>{const t=[[{j1:-45,j2:24,j3:18,j5:30,j4:0},.9,1.6],[{j1:35,j2:38,j3:-12,j4:60,j5:52},.2,1.8],[{j1:0,j2:-18,j3:48,j4:-45,j5:-25,j6:90},.9,1.8],[{...po},.6,1.6]];for(const[i,s,a]of t){if(e!==this.sequenceId)return;await this.animateTo(i,s,a)}})}pickAndPlace(){return this.run("Pick & place cycle…",async e=>{var m;const{cube:t}=this.parts;if(!t){await this.inspectArc(e);return}const i=new B;t.getWorldPosition(i),this.parts.root.worldToLocal(i);const s=Math.hypot(i.x-st.pedestalA.x,i.y-st.pedestalA.y)<Math.hypot(i.x-st.pedestalB.x,i.y-st.pedestalB.y),a=s?st.pedestalA:st.pedestalB,c=s?st.pedestalB:st.pedestalA,u=6.3,d=26,f=[{s:"Approaching workpiece…",p:this.solveTopDown(a.x,a.y,d),g:1,d:1.7},{s:"Descending to grasp…",p:this.solveTopDown(a.x,a.y,u),d:1.1},{s:"Closing gripper…",g:st.fingerGrasp/st.fingerTravel,d:.55,act:()=>this.holdCube()},{s:"Lifting workpiece…",p:this.solveTopDown(a.x,a.y,d),d:1},{s:"Transferring to platform…",p:this.solveTopDown(c.x,c.y,d),d:1.9},{s:"Descending to place…",p:this.solveTopDown(c.x,c.y,u+.1),d:1.1},{s:"Releasing…",g:1,d:.55,act:()=>this.releaseCube(c)},{s:"Retracting…",p:this.solveTopDown(c.x,c.y,d),d:.9},{s:"Returning home…",p:{...po},g:.6,d:1.6}];for(const g of f){if(e!==this.sequenceId)return;g.p!==null&&(g.s&&this.statusCb(g.s,!0),await this.animateTo(g.p??{},g.g??null,g.d),(m=g.act)==null||m.call(g))}})}async inspectArc(e){const t=this.solveTopDown(st.pedestalA.x,st.pedestalA.y,26);t&&e===this.sequenceId&&await this.animateTo(t,1,1.6);const i=this.solveTopDown(st.pedestalB.x,st.pedestalB.y,26);i&&e===this.sequenceId&&await this.animateTo(i,0,1.8),e===this.sequenceId&&await this.animateTo({...po},.6,1.6)}holdCube(){const{cube:e,joints:t}=this.parts;e&&e.parent!==t.j6&&t.j6.attach(e)}releaseCube(e){const{cube:t,root:i}=this.parts;t&&(t.parent!==i&&i.attach(t),e&&(t.position.set(e.x,e.y,st.cubeRest.z),t.rotation.set(0,0,0)))}}function w_(o,e){if(e===Qx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Xd||e===Z_){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let d=0;d<u.count;d++)c.push(d);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Xd)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class VA extends Fo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new YA(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new ZA(t)}),this.register(function(t){return new QA(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new e1(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new a1(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const f=Da.extractUrlBase(e);c=Da.resolveURL(f,this.path)}else c=Da.extractUrlBase(e);this.manager.itemStart(e);const u=function(f){s?s(f):console.error(f),a.manager.itemError(e),a.manager.itemEnd(e)},d=new Ev(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(f){try{a.parse(f,c,function(m){t(m),a.manager.itemEnd(e)},u)}catch(m){u(m)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===bv){try{c[_t.KHR_BINARY_GLTF]=new l1(e)}catch(g){s&&s(g);return}a=JSON.parse(c[_t.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new S1(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](f);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const g=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(g){case _t.KHR_MATERIALS_UNLIT:c[g]=new jA;break;case _t.KHR_DRACO_MESH_COMPRESSION:c[g]=new c1(a,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:c[g]=new u1;break;case _t.KHR_MESH_QUANTIZATION:c[g]=new h1;break;default:_.indexOf(g)>=0&&u[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}f.setExtensions(c),f.setPlugins(u),f.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function GA(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class WA{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let f;const m=new tt(16777215);d.color!==void 0&&m.setRGB(d.color[0],d.color[1],d.color[2],On);const g=d.range!==void 0?d.range:0;switch(d.type){case"directional":f=new Qd(m),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new Tv(m),f.distance=g;break;case"spot":f=new lA(m),f.distance=g,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,f.angle=d.spot.outerConeAngle,f.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return f.position.set(0,0,0),f.decay=2,ur(f,d),d.intensity!==void 0&&(f.intensity=d.intensity),f.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(f),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(d){return i._getNodeRef(t.cache,u,d)})}}class jA{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Yr}extendParams(e,t,i){const s=[];e.color=new tt(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],On),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,pn))}return Promise.all(s)}}class XA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class YA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(u,u)}return Promise.all(a)}}class qA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class KA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class $A{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],On)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,pn)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class ZA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class QA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(u[0],u[1],u[2],On),Promise.all(a)}}class JA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class e1{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(u[0],u[1],u[2],On),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,pn)),Promise.all(a)}}class t1{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class n1{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class i1{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class r1{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let d=i.textureLoader;if(u.uri){const f=i.options.manager.getHandler(u.uri);f!==null&&(d=f)}return this.detectSupport().then(function(f){if(f)return i.loadTextureImage(e,c.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class s1{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let d=i.textureLoader;if(u.uri){const f=i.options.manager.getHandler(u.uri);f!==null&&(d=f)}return this.detectSupport().then(function(f){if(f)return i.loadTextureImage(e,c.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class o1{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const d=s.byteOffset||0,f=s.byteLength||0,m=s.count,g=s.byteStride,_=new Uint8Array(u,d,f);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,g,_,s.mode,s.filter).then(function(x){return x.buffer}):c.ready.then(function(){const x=new ArrayBuffer(m*g);return c.decodeGltfBuffer(new Uint8Array(x),m,g,_,s.mode,s.filter),x})})}else return null}}class a1{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const f of s.primitives)if(f.mode!==ui.TRIANGLES&&f.mode!==ui.TRIANGLE_STRIP&&f.mode!==ui.TRIANGLE_FAN&&f.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],d={};for(const f in c)u.push(this.parser.getDependency("accessor",c[f]).then(m=>(d[f]=m,d[f])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(f=>{const m=f.pop(),g=m.isGroup?m.children:[m],_=f[0].count,x=[];for(const M of g){const E=new ut,S=new B,y=new Bi,D=new B(1,1,1),P=new Gw(M.geometry,M.material,_);for(let R=0;R<_;R++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,R),d.ROTATION&&y.fromBufferAttribute(d.ROTATION,R),d.SCALE&&D.fromBufferAttribute(d.SCALE,R),P.setMatrixAt(R,E.compose(S,y,D));for(const R in d)if(R==="_COLOR_0"){const X=d[R];P.instanceColor=new $d(X.array,X.itemSize,X.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&M.geometry.setAttribute(R,d[R]);jt.prototype.copy.call(P,M),this.parser.assignFinalMaterial(P),x.push(P)}return m.isGroup?(m.clear(),m.add(...x),m):x[0]}))}}const bv="glTF",Ta=12,A_={JSON:1313821514,BIN:5130562};class l1{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ta),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ta,a=new DataView(e,Ta);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const d=a.getUint32(c,!0);if(c+=4,d===A_.JSON){const f=new Uint8Array(e,Ta+c,u);this.content=i.decode(f)}else if(d===A_.BIN){const f=Ta+c;this.body=e.slice(f,f+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class c1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},d={},f={};for(const m in c){const g=Jd[m]||m.toLowerCase();u[g]=c[m]}for(const m in e.attributes){const g=Jd[m]||m.toLowerCase();if(c[m]!==void 0){const _=i.accessors[e.attributes[m]],x=Mo[_.componentType];f[g]=x.name,d[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(g,_){s.decodeDracoFile(m,function(x){for(const M in x.attributes){const E=x.attributes[M],S=d[M];S!==void 0&&(E.normalized=S)}g(x)},u,f,On,_)})})}}class u1{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class h1{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class Cv extends za{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=u*2,f=u*3,m=s-t,g=(i-t)/m,_=g*g,x=_*g,M=e*f,E=M-f,S=-2*x+3*_,y=x-_,D=1-S,P=y-_+g;for(let R=0;R!==u;R++){const X=c[E+R+u],O=c[E+R+d]*m,I=c[M+R+u],H=c[M+R]*m;a[R]=D*X+P*O+S*I+y*H}return a}}const d1=new Bi;class f1 extends Cv{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return d1.fromArray(a).normalize().toArray(a),a}}const ui={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Mo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},R_={9728:In,9729:Jn,9984:H_,9985:wc,9986:Ra,9987:hr},b_={33071:Xr,33648:Dc,10497:Ao},sd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},p1={CUBICSPLINE:void 0,LINEAR:Ua,STEP:Ia},od={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function m1(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new bi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pr})),o.DefaultMaterial}function vs(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ur(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function g1(o,e,t){let i=!1,s=!1,a=!1;for(let f=0,m=e.length;f<m;f++){const g=e[f];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],d=[];for(let f=0,m=e.length;f<m;f++){const g=e[f];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;c.push(_)}if(s){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;u.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;d.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d)]).then(function(f){const m=f[0],g=f[1],_=f[2];return i&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function _1(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function v1(o){let e;const t=o.extensions&&o.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ad(t.attributes):e=o.indices+":"+ad(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+ad(o.targets[i]);return e}function ad(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function ef(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function x1(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const y1=new ut;class S1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new GA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const d=u.match(/Version\/(\d+)/);s=i&&d?parseInt(d[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new sA(this.options.manager):this.textureLoader=new hA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ev(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return vs(a,u,s),ur(u,s),Promise.all(i._invokeAll(function(d){return d.afterRoot&&d.afterRoot(u)})).then(function(){for(const d of u.scenes)d.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,d=c.length;u<d;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const d=this.associations.get(c);d!=null&&this.associations.set(u,d);for(const[f,m]of c.children.entries())a(m,u.children[f])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(Da.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=sd[s.type],u=Mo[s.componentType],d=s.normalized===!0,f=new u(s.count*c);return Promise.resolve(new Un(f,c,d))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],d=sd[s.type],f=Mo[s.componentType],m=f.BYTES_PER_ELEMENT,g=m*d,_=s.byteOffset||0,x=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(x&&x!==g){const y=Math.floor(_/x),D="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+y+":"+s.count;let P=t.cache.get(D);P||(E=new f(u,y*x,s.count*x/m),P=new kw(E,x/m),t.cache.add(D,P)),S=new gf(P,d,_%x/m,M)}else u===null?E=new f(s.count*d):E=new f(u,_,s.count*d),S=new Un(E,d,M);if(s.sparse!==void 0){const y=sd.SCALAR,D=Mo[s.sparse.indices.componentType],P=s.sparse.indices.byteOffset||0,R=s.sparse.values.byteOffset||0,X=new D(c[1],P,s.sparse.count*y),O=new f(c[2],R,s.sparse.count*d);u!==null&&(S=new Un(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let I=0,H=X.length;I<H;I++){const C=X[I];if(S.setX(C,O[I*d]),d>=2&&S.setY(C,O[I*d+1]),d>=3&&S.setZ(C,O[I*d+2]),d>=4&&S.setW(C,O[I*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const d=i.manager.getHandler(c.uri);d!==null&&(u=d)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],d=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[d])return this.textureCache[d];const f=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||u.name||"",m.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(m.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return m.magFilter=R_[_.magFilter]||Jn,m.minFilter=R_[_.minFilter]||hr,m.wrapS=b_[_.wrapS]||Ao,m.wrapT=b_[_.wrapT]||Ao,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==In&&m.minFilter!==Jn,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[d]=f,f}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=s.images[e],u=self.URL||self.webkitURL;let d=c.uri||"",f=!1;if(c.bufferView!==void 0)d=i.getDependency("bufferView",c.bufferView).then(function(g){f=!0;const _=new Blob([g],{type:c.mimeType});return d=u.createObjectURL(_),d});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(d).then(function(g){return new Promise(function(_,x){let M=_;t.isImageBitmapLoader===!0&&(M=function(E){const S=new hn(E);S.needsUpdate=!0,_(S)}),t.load(Da.resolveURL(g,a.path),M,void 0,x)})}).then(function(g){return f===!0&&u.revokeObjectURL(d),ur(g,c),g.userData.mimeType=c.mimeType||x1(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),g});return this.sourceCache[e]=m,m}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[_t.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const d=a.associations.get(c);c=a.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,d)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let d=this.cache.get(u);d||(d=new yv,Fi.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,d.sizeAttenuation=!1,this.cache.add(u,d)),i=d}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let d=this.cache.get(u);d||(d=new vf,Fi.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,this.cache.add(u,d)),i=d}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let d=this.cache.get(u);d||(d=i.clone(),a&&(d.vertexColors=!0),c&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(u,d),this.associations.set(d,this.associations.get(i))),i=d}e.material=i}getMaterialType(){return bi}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},d=a.extensions||{},f=[];if(d[_t.KHR_MATERIALS_UNLIT]){const g=s[_t.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),f.push(g.extendParams(u,a,t))}else{const g=a.pbrMetallicRoughness||{};if(u.color=new tt(1,1,1),u.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],On),u.opacity=_[3]}g.baseColorTexture!==void 0&&f.push(t.assignTexture(u,"map",g.baseColorTexture,pn)),u.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,u.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(u,"metalnessMap",g.metallicRoughnessTexture)),f.push(t.assignTexture(u,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=Oi);const m=a.alphaMode||od.OPAQUE;if(m===od.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,m===od.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==Yr&&(f.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new Je(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;u.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==Yr&&(f.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==Yr){const g=a.emissiveFactor;u.emissive=new tt().setRGB(g[0],g[1],g[2],On)}return a.emissiveTexture!==void 0&&c!==Yr&&f.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,pn)),Promise.all(f).then(function(){const g=new c(u);return a.name&&(g.name=a.name),ur(g,a),t.associations.set(g,{materials:e}),a.extensions&&vs(s,g,a),g})}createUniqueName(e){const t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(d){return C_(d,u,t)})}const c=[];for(let u=0,d=e.length;u<d;u++){const f=e[u],m=v1(f),g=s[m];if(g)c.push(g.promise);else{let _;f.extensions&&f.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?_=a(f):_=C_(new ei,f,t),s[m]={primitive:f,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d].material===void 0?m1(this.cache):this.getDependency("material",c[d].material);u.push(m)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(d){const f=d.slice(0,d.length-1),m=d[d.length-1],g=[];for(let x=0,M=m.length;x<M;x++){const E=m[x],S=c[x];let y;const D=f[x];if(S.mode===ui.TRIANGLES||S.mode===ui.TRIANGLE_STRIP||S.mode===ui.TRIANGLE_FAN||S.mode===void 0)y=a.isSkinnedMesh===!0?new zw(E,D):new Dt(E,D),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===ui.TRIANGLE_STRIP?y.geometry=w_(y.geometry,Z_):S.mode===ui.TRIANGLE_FAN&&(y.geometry=w_(y.geometry,Xd));else if(S.mode===ui.LINES)y=new xv(E,D);else if(S.mode===ui.LINE_STRIP)y=new xf(E,D);else if(S.mode===ui.LINE_LOOP)y=new Ww(E,D);else if(S.mode===ui.POINTS)y=new jw(E,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&_1(y,a),y.name=t.createUniqueName(a.name||"mesh_"+e),ur(y,a),S.extensions&&vs(s,y,S),t.assignFinalMaterial(y),g.push(y)}for(let x=0,M=g.length;x<M;x++)t.associations.set(g[x],{meshes:e,primitives:x});if(g.length===1)return a.extensions&&vs(s,g[0],a),g[0];const _=new Xn;a.extensions&&vs(s,_,a),t.associations.set(_,{meshes:e});for(let x=0,M=g.length;x<M;x++)_.add(g[x]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Dn(go.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ff(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ur(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],d=[];for(let f=0,m=c.length;f<m;f++){const g=c[f];if(g){u.push(g);const _=new ut;a!==null&&_.fromArray(a.array,f*16),d.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new _f(u,d)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],d=[],f=[],m=[];for(let g=0,_=s.channels.length;g<_;g++){const x=s.channels[g],M=s.samplers[x.sampler],E=x.target,S=E.node,y=s.parameters!==void 0?s.parameters[M.input]:M.input,D=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",y)),d.push(this.getDependency("accessor",D)),f.push(M),m.push(E))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d),Promise.all(f),Promise.all(m)]).then(function(g){const _=g[0],x=g[1],M=g[2],E=g[3],S=g[4],y=[];for(let D=0,P=_.length;D<P;D++){const R=_[D],X=x[D],O=M[D],I=E[D],H=S[D];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const C=i._createAnimationTracks(R,X,O,I,H);if(C)for(let A=0;A<C.length;A++)y.push(C[A])}return new Qw(a,void 0,y)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let d=0,f=s.weights.length;d<f;d++)u.morphTargetInfluences[d]=s.weights[d]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let f=0,m=u.length;f<m;f++)c.push(i.getDependency("node",u[f]));const d=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),d]).then(function(f){const m=f[0],g=f[1],_=f[2];_!==null&&m.traverse(function(x){x.isSkinnedMesh&&x.bind(_,y1)});for(let x=0,M=g.length;x<M;x++)m.add(g[x]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],d=s._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return d&&u.push(d),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(f){return s._getNodeRef(s.cameraCache,a.camera,f)})),s._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){u.push(f)}),this.nodeCache[e]=Promise.all(u).then(function(f){let m;if(a.isBone===!0?m=new _v:f.length>1?m=new Xn:f.length===1?m=f[0]:m=new jt,m!==f[0])for(let g=0,_=f.length;g<_;g++)m.add(f[g]);if(a.name&&(m.userData.name=a.name,m.name=c),ur(m,a),a.extensions&&vs(i,m,a),a.matrix!==void 0){const g=new ut;g.fromArray(a.matrix),m.applyMatrix4(g)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);return s.associations.has(m)||s.associations.set(m,{}),s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new Xn;i.name&&(a.name=s.createUniqueName(i.name)),ur(a,i),i.extensions&&vs(t,a,i);const c=i.nodes||[],u=[];for(let d=0,f=c.length;d<f;d++)u.push(s.getDependency("node",c[d]));return Promise.all(u).then(function(d){for(let m=0,g=d.length;m<g;m++)a.add(d[m]);const f=m=>{const g=new Map;for(const[_,x]of s.associations)(_ instanceof Fi||_ instanceof hn)&&g.set(_,x);return m.traverse(_=>{const x=s.associations.get(_);x!=null&&g.set(_,x)}),g};return s.associations=f(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,d=[];Gr[a.path]===Gr.weights?e.traverse(function(_){_.morphTargetInfluences&&d.push(_.name?_.name:_.uuid)}):d.push(u);let f;switch(Gr[a.path]){case Gr.weights:f=Lo;break;case Gr.rotation:f=Do;break;case Gr.position:case Gr.scale:f=No;break;default:switch(i.itemSize){case 1:f=Lo;break;case 2:case 3:default:f=No;break}break}const m=s.interpolation!==void 0?p1[s.interpolation]:Ua,g=this._getArrayFromAccessor(i);for(let _=0,x=d.length;_<x;_++){const M=new f(d[_]+"."+Gr[a.path],t.array,g,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ef(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Do?f1:Cv;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function M1(o,e,t){const i=e.attributes,s=new Hi;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],d=u.min,f=u.max;if(d!==void 0&&f!==void 0){if(s.set(new B(d[0],d[1],d[2]),new B(f[0],f[1],f[2])),u.normalized){const m=ef(Mo[u.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new B,d=new B;for(let f=0,m=a.length;f<m;f++){const g=a[f];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],x=_.min,M=_.max;if(x!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),_.normalized){const E=ef(Mo[_.componentType]);d.multiplyScalar(E)}u.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new Vi;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function C_(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(d){o.setAttribute(u,d)})}for(const c in i){const u=Jd[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return St.workingColorSpace!==On&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${St.workingColorSpace}" not supported.`),ur(o,e),M1(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?g1(o,e.targets,t):o})}const Sc={j1:new B(0,0,22),j2:new B(0,0,st.shoulderZ),j3:new B(0,0,st.shoulderZ+st.l1),j4:new B(40,0,st.shoulderZ+st.l1),j5:new B(st.l2,0,st.shoulderZ+st.l1),j6:new B(60,0,st.shoulderZ+st.l1)},P_=["j1","j2","j3","j4","j5","j6"];function Ei(o,e){return o.children.find(t=>t.name.startsWith(e))??null}let L_=null;function E1(o){return L_??(L_=new VA().loadAsync(o).then(e=>e.scene)),L_.then(e=>e.clone(!0))}function T1(o){const e=new Map;o.traverse(t=>{if(!(t instanceof Dt))return;t.castShadow=!0,t.receiveShadow=!0;const i=t.material;let s=e.get(i);if(!s){s=i.clone();const a=s.color,c=.2126*a.r+.7152*a.g+.0722*a.b;a.r>.4&&a.g<.65&&a.b<.2?(s.roughness=.34,s.metalness=.2):c<.05?(s.roughness=.45,s.metalness=.55):c>.6?(s.roughness=.3,s.metalness=.05):(s.roughness=.5,s.metalness=.35),s.envMapIntensity=.9,e.set(i,s)}t.material=s})}async function w1(o){const e=await E1(o);T1(e),e.traverse(x=>{x.position.set(0,0,0),x.quaternion.identity(),x.scale.set(1,1,1)});const t={j1:Ei(e,"01"),j2:Ei(e,"02"),j3:Ei(e,"03"),j4:Ei(e,"04"),j5:Ei(e,"05"),j6:Ei(e,"06")},i=Ei(e,"00"),s=Ei(e,"07"),a=Ei(e,"08"),c=Ei(e,"09"),u=Ei(e,"10");if(!i||!s||!a||P_.some(x=>!t[x]))throw new Error("GLB does not contain the expected articulated part groups");if(u){const x=new Hi().setFromObject(u).getCenter(new B);for(const M of u.children)M.position.sub(x);u.position.copy(x)}const d=new Xn;d.name="arc6-cell",d.add(i),c&&d.add(c),u&&d.add(u);const f={};let m=d,g=new B(0,0,0);for(const x of P_){const M=new Xn;M.name=`joint-${x}`,M.position.copy(Sc[x]).sub(g),m.add(M);const E=t[x];E.position.copy(Sc[x]).negate(),M.add(E),f[x]=M,m=M,g=Sc[x]}const _=Sc.j6.clone().negate();for(const x of[s,a])x.position.copy(_),f.j6.add(x);return{root:d,joints:f,fingerL:s,fingerR:a,fingerRestL:_.clone(),fingerRestR:_.clone(),cube:u,fromGLB:!0}}const wa=new bi({color:15294720,roughness:.34,metalness:.2}),Aa=new bi({color:1447448,roughness:.45,metalness:.55}),ld=new bi({color:15921908,roughness:.3,metalness:.05}),D_=new bi({color:3947586,roughness:.5,metalness:.35}),A1=new bi({color:3841604,roughness:.55,metalness:.05});function Hc(o,e){const t=new Dt(o,e);return t.castShadow=!0,t.receiveShadow=!0,t}function Mc(o,e,t){const i=Hc(new Ba(o,o,e,40),t);return i.rotation.x=Math.PI/2,i}function Ec(o,e,t){return Hc(new Ba(o,o,e,40),t)}function xs(o,e,t,i){return Hc(new As(o,e,t),i)}function R1(){const o=new Xn;o.name="arc6-cell-procedural";const e=new Xn,t=Mc(18,4,Aa);t.position.z=2;const i=Mc(14,14,D_);i.position.z=11;const s=Mc(14.6,2,wa);s.position.z=19,e.add(t,i,s),o.add(e);const a={j1:new B(0,0,22),j2:new B(0,0,st.shoulderZ),j3:new B(0,0,st.shoulderZ+st.l1),j4:new B(40,0,st.shoulderZ+st.l1),j5:new B(st.l2,0,st.shoulderZ+st.l1),j6:new B(60,0,st.shoulderZ+st.l1)},c={};let u=o,d=new B;for(const C of Object.keys(a)){const A=new Xn;A.name=`joint-${C}`,A.position.copy(a[C]).sub(d),u.add(A),c[C]=A,u=A,d=a[C]}const f=Mc(12,14,wa);f.position.z=5;const m=Ec(8,18,Aa);m.position.z=8,c.j1.add(f,m);const g=xs(11,12,st.l1,wa);g.position.z=st.l1/2;const _=Ec(7.5,13,ld);c.j2.add(g,_);const x=Ec(6.5,11,Aa),M=xs(40,9,10,wa);M.position.x=20,c.j3.add(x,M);const E=Hc(new Ba(5,5.8,15,36),ld);E.rotation.z=Math.PI/2,E.position.x=7.5,c.j4.add(E);const S=Ec(4.5,9.5,Aa),y=xs(8,7,7,wa);y.position.x=3,c.j5.add(S,y);const D=xs(7.5,8,8,Aa);D.position.x=3.75,c.j6.add(D);const P=a.j6.clone().negate(),R=C=>{const A=new Xn,k=xs(5.5,2,6,ld);return k.position.set(70.25,C*2.5,70),A.add(k),A.position.copy(P),c.j6.add(A),A},X=R(-1),O=R(1),I=(C,A)=>{const k=xs(8,8,3.9,D_);k.position.set(C,A,1.95),o.add(k)};I(st.pedestalA.x,st.pedestalA.y),I(st.pedestalB.x,st.pedestalB.y);const H=xs(4.4,4.4,4.4,A1);return H.position.copy(st.cubeRest),o.add(H),{root:o,joints:c,fingerL:X,fingerR:O,fingerRestL:P.clone(),fingerRestR:P.clone(),cube:H,fromGLB:!1}}const b1=1/42,Tc={showcase:{pos:new B(2.9,1.5,3.3),target:new B(-.2,.8,0)},lab:{pos:new B(2.5,1.75,3.1),target:new B(.45,.85,0)}};class C1{constructor(e,t){Wt(this,"canvas");Wt(this,"rig",null);Wt(this,"cinematic");Wt(this,"renderer");Wt(this,"scene",new gv);Wt(this,"camera");Wt(this,"controls");Wt(this,"clock",new dA);Wt(this,"frame",0);Wt(this,"cinTime",0);Wt(this,"disposed",!1);Wt(this,"opts");Wt(this,"resizeObserver");Wt(this,"idleTimer",0);Wt(this,"distScale",1);this.opts=t,this.cinematic=t.mode==="showcase",this.renderer=new Fw({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=F_,this.renderer.toneMapping=B_,this.renderer.toneMappingExposure=1.12,this.canvas=this.renderer.domElement,this.canvas.style.display="block",e.appendChild(this.canvas),this.camera=new Dn(38,1,.05,80),this.camera.position.copy(Tc[t.mode].pos),this.controls=new wA(this.camera,this.canvas),this.controls.target.copy(Tc[t.mode].target),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=1.2,this.controls.maxDistance=9,this.controls.maxPolarAngle=Math.PI*.52,this.controls.enablePan=!1,this.controls.addEventListener("start",()=>this.setCinematic(!1)),this.buildEnvironment(),this.loadRobot();const i=window;(i.__ARC6??(i.__ARC6=[])).push(this);const s=()=>this.resize(e);s(),this.resizeObserver=new ResizeObserver(s),this.resizeObserver.observe(e),this.renderer.setAnimationLoop(()=>this.tick())}buildEnvironment(){const e=new qd(this.renderer);this.scene.environment=e.fromScene(new kA,.04).texture;const t=new tt(15264235);this.scene.background=t,this.scene.fog=new mf(t,7,17);const i=new Qd(16777215,1.9);i.position.set(4,7,3),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.camera.left=-3.5,i.shadow.camera.right=3.5,i.shadow.camera.top=3.5,i.shadow.camera.bottom=-3.5,i.shadow.camera.far=20,i.shadow.bias=-4e-4,i.shadow.radius=10,this.scene.add(i);const s=new oA(16777215,14211805,.85);this.scene.add(s);const a=new Qd(15659510,.5);a.position.set(-5,3,-4),this.scene.add(a);const c=new Dt(new yf(30,64),new bi({color:15264235,roughness:.96,metalness:0}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,this.scene.add(c);const u=new MA(28,56,13225169,14277598);u.material.transparent=!0,u.material.opacity=.35,u.position.y=.001,this.scene.add(u)}async loadRobot(){var a,c,u,d;const e="./models/robot-arm.glb";let t=!0,i;try{i=await w1(e)}catch(f){console.warn("ARC-6: falling back to procedural robot —",f),i=R1(),t=!1}if(this.disposed)return;const s=new Xn;if(s.rotation.x=-Math.PI/2,s.scale.setScalar(b1),s.add(i.root),this.scene.add(s),this.rig=new HA(i),this.opts.onStatus&&this.rig.onStatus(this.opts.onStatus),this.opts.onPoseChange&&this.rig.onPoseChange(this.opts.onPoseChange),(c=(a=this.opts).onStatus)==null||c.call(a,"Idle — ready",!1),(d=(u=this.opts).onReady)==null||d.call(u,t),this.opts.mode==="showcase"){window.setTimeout(()=>{var m;return void((m=this.rig)==null?void 0:m.inspect())},900);let f=!1;this.idleTimer=window.setInterval(()=>{!this.rig||this.rig.busy||(f=!f,f?this.rig.pickAndPlace():this.rig.inspect())},16e3)}}tick(){var t;const e=Math.min(this.clock.getDelta(),.05);if(this.frame++,(t=this.rig)==null||t.update(e),this.cinematic){this.cinTime+=e;const i=this.cinTime*.14,s=(3.7+Math.sin(i*.7)*.45)*this.distScale,a=1.7+Math.sin(i*.5)*.5;this.camera.position.set(Math.cos(i)*s,a,Math.sin(i)*s),this.camera.lookAt(Tc[this.opts.mode].target)}else this.controls.update();this.renderer.render(this.scene,this.camera)}resize(e){const t=e.clientWidth||1,i=e.clientHeight||1;this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix();const s=this.distScale;if(this.distScale=Math.min(Math.pow(Math.max(1,1.2/this.camera.aspect),.7),2),Math.abs(this.distScale-s)>.001){const a=this.controls.target;this.camera.position.sub(a).multiplyScalar(this.distScale/s).add(a),this.controls.update()}}resetCamera(){this.setCinematic(!1);const{pos:e,target:t}=Tc[this.opts.mode];this.camera.position.copy(e).sub(t).multiplyScalar(this.distScale).add(t),this.controls.target.copy(t),this.controls.update()}toggleCinematic(){return this.setCinematic(!this.cinematic),this.cinematic}setCinematic(e){var t,i;if(this.cinematic!==e){if(this.cinematic=e,e){const s=this.camera.position;this.cinTime=Math.atan2(s.z,s.x)/.14}(i=(t=this.opts).onCinematicChange)==null||i.call(t,e)}}jog(e,t){var i;(i=this.rig)==null||i.jogJoint(e,t)}dispose(){this.disposed=!0,window.clearInterval(this.idleTimer),this.resizeObserver.disconnect(),this.renderer.setAnimationLoop(null),this.controls.dispose(),this.renderer.dispose(),this.canvas.remove()}}function Pv(o){const e=un.useRef(null),t=un.useRef(null),[i,s]=un.useState("Loading model…"),[a,c]=un.useState(!1),[u,d]=un.useState({...po}),[f,m]=un.useState(.6),[g,_]=un.useState(!1),[x,M]=un.useState(!0),[E,S]=un.useState(o==="showcase");return un.useEffect(()=>{const y=e.current;if(!y)return;let D=0,P=null,R=0;const X=new C1(y,{mode:o,onStatus:(O,I)=>{s(O),c(I)},onPoseChange:(O,I)=>{P={...O},R=I,D||(D=requestAnimationFrame(()=>{D=0,P&&d(P),m(R)}))},onReady:O=>{M(O),_(!0)},onCinematicChange:S});return t.current=X,()=>{cancelAnimationFrame(D),X.dispose(),t.current=null}},[o]),{containerRef:e,sceneRef:t,status:i,busy:a,pose:u,grip:f,ready:g,usingGLB:x,cinematic:E}}const N_=["six-axis platform","digital twin runtime","browser-native demo","simulation-first","modular gripper","pick · sort · assemble","arc-6 / concept cell"];function P1(){const o=Pv("showcase"),e=[...N_,...N_];return W.jsxs("section",{className:"hero",id:"top",children:[W.jsx("div",{className:"hero-viewer",children:W.jsx(I_,{viewer:o})}),W.jsxs("div",{className:"hero-overlay",children:[W.jsxs("div",{className:"hero-session mono",children:["01_xf",W.jsx("br",{}),"live_session"]}),W.jsxs("div",{className:"hero-copy",children:[W.jsx("span",{className:"eyebrow",children:"ARC-6 / six-axis articulated platform"}),W.jsxs("h1",{className:"hero-title",children:["Precision",W.jsx("br",{}),"in motion.",W.jsx("br",{}),W.jsx("span",{className:"hero-title-accent",children:"Designed to be driven."})]}),W.jsx("p",{className:"hero-sub",children:"A compact six-axis robot arm that connects design, simulation and production — live in your browser, right now."}),W.jsxs("div",{className:"hero-ctas",children:[W.jsx("a",{href:"#demo",className:"btn btn-primary",children:"Try the 3D demo"}),W.jsx("a",{href:"#capabilities",className:"btn btn-ghost",children:"Explore capabilities"})]})]}),W.jsx("div",{className:"hero-status",children:W.jsx(U_,{viewer:o})}),W.jsxs("div",{className:"hero-brand",children:["ARC",W.jsx("sup",{children:"6"})]}),W.jsxs("div",{className:"hero-coords mono",children:["axes=6",W.jsx("br",{}),"cell<1m²",W.jsx("br",{}),"fmt=glb"]}),W.jsx("div",{className:"ticker",children:W.jsx("div",{className:"ticker-track",children:e.map((t,i)=>W.jsx("span",{children:t},i))})})]})]})}function ki({children:o,delay:e=0,className:t=""}){const i=un.useRef(null),[s,a]=un.useState(!1);return un.useEffect(()=>{const c=i.current;if(!c)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){a(!0);return}const u=new IntersectionObserver(([d])=>{d.isIntersecting&&(a(!0),u.disconnect())},{threshold:.15});return u.observe(c),()=>u.disconnect()},[]),W.jsx("div",{ref:i,className:`reveal ${s?"reveal-shown":""} ${t}`,style:{transitionDelay:`${e}ms`},children:o})}const L1=[{icon:"cap_01",title:"6-axis motion control",body:"A full articulated chain — base, shoulder, elbow and a three-axis wrist — with smooth, coordinated joint interpolation."},{icon:"cap_02",title:"Digital twin ready",body:"The arm you see is the arm you ship: one GLB asset drives the website, presentations and future simulation targets."},{icon:"cap_03",title:"Visual programming",body:"Compose motion from readable primitives — approach, grasp, transfer, release — instead of opaque scripts."},{icon:"cap_04",title:"Smart gripper workflows",body:"A modular parallel gripper with scripted grasp states, designed around real workpiece geometry."},{icon:"cap_05",title:"Simulation-first deployment",body:"Validate reach, cycle timing and cell layout in the browser before any hardware is committed."},{icon:"cap_06",title:"Compact production cells",body:"A small footprint and integrated pedestals keep complete pick-and-place cells within a single desk-scale envelope."}];function D1(){return W.jsx("section",{className:"section",id:"capabilities",children:W.jsxs("div",{className:"section-inner",children:[W.jsxs(ki,{children:[W.jsx("span",{className:"eyebrow",children:"01_capabilities"}),W.jsx("h2",{className:"section-title",children:"Engineered for the whole workflow"}),W.jsx("p",{className:"section-lead",children:"From the first sketch to the demo in front of a customer, ARC-6 is built to keep design, simulation and motion in the same loop."})]}),W.jsx("div",{className:"card-grid",children:L1.map((o,e)=>W.jsx(ki,{delay:e*70,children:W.jsxs("article",{className:"card",children:[W.jsx("span",{className:"card-icon","aria-hidden":"true",children:o.icon}),W.jsx("h3",{children:o.title}),W.jsx("p",{children:o.body})]})},o.title))})]})})}function N1(){return W.jsx("section",{className:"section section-alt",id:"story",children:W.jsxs("div",{className:"section-inner story-grid",children:[W.jsxs(ki,{children:[W.jsx("span",{className:"eyebrow",children:"02_product story"}),W.jsx("h2",{className:"section-title",children:"One model, from CAD to customer demo"})]}),W.jsx(ki,{delay:120,children:W.jsxs("div",{className:"story-copy",children:[W.jsx("p",{children:"Modern production teams don't fail at automation because the hardware is weak. They fail because design, simulation and deployment live in three different tools that never agree with each other."}),W.jsx("p",{children:"ARC-6 was designed as a bridge. The same assembly that engineers refine in CAD becomes the digital twin in the browser, the rig in the simulator and the motion reference on the floor. When the geometry changes, everything downstream follows — no re-modelling, no drift, no guesswork."}),W.jsx("p",{children:"The result is a robot you can show, test and validate before a single fixture is machined. Your team iterates on screen; the cell on the floor simply catches up."}),W.jsxs("div",{className:"story-points",children:[W.jsxs("div",{children:[W.jsx("strong",{children:"Design"}),W.jsx("span",{children:"Native CAD assembly, exported once as STEP + GLB."})]}),W.jsxs("div",{children:[W.jsx("strong",{children:"Simulate"}),W.jsx("span",{children:"Kinematics validated interactively, in any browser."})]}),W.jsxs("div",{children:[W.jsx("strong",{children:"Automate"}),W.jsx("span",{children:"Proven motion sequences carried to the physical cell."})]})]})]})})]})})}const I1=[{title:"Pick and place",body:"Repeatable transfer of small parts between fixtures, trays and platforms — the cycle you can run in the demo below."},{title:"Sorting and inspection",body:"Present parts to cameras and sensors with consistent orientation for visual checks and routing decisions."},{title:"Assembly assistance",body:"Hold, align and feed components so operators can focus on the joins that still need human judgement."},{title:"Training and simulation",body:"Teach robotics concepts on a safe, browser-based twin before anyone touches a live cell."},{title:"Digital twin demos",body:"Walk customers through a working cell from any laptop — no crate, no rigger, no site visit."},{title:"Research and prototyping",body:"A compact, predictable platform for grippers, end-effectors and motion-planning experiments."}];function U1(){return W.jsx("section",{className:"section",id:"use-cases",children:W.jsxs("div",{className:"section-inner",children:[W.jsxs(ki,{children:[W.jsx("span",{className:"eyebrow",children:"03_use cases"}),W.jsx("h2",{className:"section-title",children:"Where ARC-6 goes to work"})]}),W.jsx("div",{className:"usecase-grid",children:I1.map((o,e)=>W.jsx(ki,{delay:e*60,children:W.jsxs("article",{className:"usecase",children:[W.jsx("span",{className:"usecase-index",children:String(e+1).padStart(2,"0")}),W.jsx("h3",{children:o.title}),W.jsx("p",{children:o.body})]})},o.title))})]})})}const O1=[{value:"6",label:"Controlled axes",note:"base · shoulder · elbow · 3-axis wrist"},{value:"< 1 m²",label:"Cell footprint",note:"robot, pedestals and workpiece included"},{value:"Modular",label:"Gripper interface",note:"parallel gripper, swappable end-effectors"},{value:"60 fps",label:"Real-time 3D visualization",note:"WebGL rendering of the full assembly"},{value:"0 install",label:"Browser demo mode",note:"runs on any modern desktop or laptop"},{value:"GLB · STEP",label:"Export-ready digital twin",note:"URDF/SDF simulation targets planned"}];function F1(){return W.jsx("section",{className:"section section-alt",id:"specs",children:W.jsxs("div",{className:"section-inner",children:[W.jsxs(ki,{children:[W.jsx("span",{className:"eyebrow",children:"04_technical highlights"}),W.jsx("h2",{className:"section-title",children:"Calm numbers, honest scope"}),W.jsx("p",{className:"section-lead",children:"ARC-6 is a concept platform. The figures below describe the demo you can run on this page — not certified industrial performance."})]}),W.jsx("div",{className:"spec-grid",children:O1.map((o,e)=>W.jsx(ki,{delay:e*60,children:W.jsxs("div",{className:"spec",children:[W.jsx("span",{className:"spec-value",children:o.value}),W.jsx("span",{className:"spec-label",children:o.label}),W.jsx("span",{className:"spec-note",children:o.note})]})},o.label))}),W.jsx(ki,{delay:200,children:W.jsx("p",{className:"spec-disclaimer",children:"Concept / demo notice: payload, speed, repeatability and safety compliance are intentionally unspecified. No certification is claimed or implied."})})]})})}function k1({viewer:o}){const{sceneRef:e,status:t,busy:i,pose:s,grip:a,ready:c,usingGLB:u}=o,[d,f]=un.useState(!1),m=()=>{var _;return((_=e.current)==null?void 0:_.rig)??null},g=[{label:"Home",hint:"R",run:()=>{var _;return void((_=m())==null?void 0:_.goHome())}},{label:"Inspect",hint:"",run:()=>{var _;return void((_=m())==null?void 0:_.inspect())}},{label:"Pick & place",hint:"Enter",run:()=>{var _;return void((_=m())==null?void 0:_.pickAndPlace())}},{label:a>.5?"Close gripper":"Open gripper",hint:"Space",run:()=>{var _;return(_=m())==null?void 0:_.toggleGripper()}}];return W.jsxs("div",{className:"panel control-panel",children:[W.jsxs("div",{className:"panel-header",children:[W.jsx("span",{className:`status-dot ${i?"status-dot-busy":"status-dot-idle"}`}),W.jsxs("div",{children:[W.jsx("div",{className:"panel-title",children:"Controller"}),W.jsx("div",{className:"panel-status","aria-live":"polite",children:t})]}),W.jsx("span",{className:"panel-badge",children:u?"GLB digital twin":"Procedural rig"})]}),W.jsx("div",{className:"command-grid",children:g.map(_=>W.jsxs("button",{type:"button",className:"btn btn-command",disabled:!c||i,onClick:_.run,children:[_.label,_.hint&&W.jsx("kbd",{children:_.hint})]},_.label))}),i&&W.jsx("button",{type:"button",className:"btn btn-stop",onClick:()=>{var _;return(_=m())==null?void 0:_.stop()},children:"■ Stop motion"}),W.jsxs("button",{type:"button",className:"advanced-toggle",onClick:()=>f(_=>!_),"aria-expanded":d,children:[W.jsx("span",{className:`advanced-caret ${d?"advanced-caret-open":""}`,children:"▸"}),"Advanced controls"]}),d&&W.jsxs("div",{className:"joint-sliders",children:[Av.map(_=>{const[x,M]=Rv[_];return W.jsxs("label",{className:"joint-slider",children:[W.jsxs("span",{className:"joint-name",children:[_.toUpperCase()," · ",BA[_]]}),W.jsx("input",{type:"range",min:x,max:M,step:.5,value:s[_],disabled:!c||i,onChange:E=>{var S;return(S=m())==null?void 0:S.setJoint(_,Number(E.target.value))}}),W.jsxs("span",{className:"joint-value",children:[s[_].toFixed(0),"°"]})]},_)}),W.jsxs("label",{className:"joint-slider",children:[W.jsx("span",{className:"joint-name",children:"Gripper"}),W.jsx("input",{type:"range",min:0,max:1,step:.01,value:a,disabled:!c||i,onChange:_=>{var x;return(x=m())==null?void 0:x.setGrip(Number(_.target.value))}}),W.jsxs("span",{className:"joint-value",children:[Math.round(a*100),"%"]})]})]}),W.jsxs("div",{className:"keymap",children:[W.jsxs("span",{children:[W.jsx("kbd",{children:"←"}),W.jsx("kbd",{children:"→"})," base"]}),W.jsxs("span",{children:[W.jsx("kbd",{children:"↑"}),W.jsx("kbd",{children:"↓"})," shoulder"]}),W.jsxs("span",{children:[W.jsx("kbd",{children:"W"}),W.jsx("kbd",{children:"S"})," elbow"]}),W.jsxs("span",{children:[W.jsx("kbd",{children:"Space"})," gripper"]}),W.jsxs("span",{children:[W.jsx("kbd",{children:"Enter"})," demo"]}),W.jsxs("span",{children:[W.jsx("kbd",{children:"R"})," reset"]})]})]})}function B1(){const o=Pv("lab");return W.jsxs("section",{className:"demo-section",id:"demo",children:[W.jsx("div",{className:"demo-viewer",children:W.jsx(I_,{viewer:o,keyboard:!0})}),W.jsxs("div",{className:"demo-header",children:[W.jsx("span",{className:"eyebrow",children:"05_live demo"}),W.jsx("h2",{className:"section-title",children:"Try it in the browser"}),W.jsx("p",{children:"The actual ARC-6 digital twin. Orbit the cell, run the pick-and-place cycle, or open advanced controls and drive every joint. Click the scene first for keyboard control."})]}),W.jsx("div",{className:"demo-panel-wrap",children:W.jsx(k1,{viewer:o})}),W.jsx("div",{className:"demo-status",children:W.jsx(U_,{viewer:o})})]})}const z1="https://github.com/dogancanka/robot";function H1(){return W.jsx("section",{className:"section final-cta",children:W.jsx("div",{className:"section-inner",children:W.jsxs(ki,{children:[W.jsx("h2",{className:"final-title",children:"Build, simulate, and present automation concepts faster."}),W.jsxs("div",{className:"hero-ctas final-ctas",children:[W.jsx("a",{href:"#demo",className:"btn btn-primary",children:"Run 3D demo"}),W.jsx("a",{href:z1,className:"btn btn-ghost",target:"_blank",rel:"noreferrer",children:"View on GitHub"})]})]})})})}function V1(){return W.jsx("footer",{className:"footer",children:W.jsxs("div",{className:"footer-inner",children:[W.jsxs("span",{className:"footer-brand",children:["ARC",W.jsx("span",{className:"nav-brand-six",children:"6"})]}),W.jsx("p",{className:"footer-note",children:"ARC-6 is a fictional concept product. All specifications on this page are illustrative placeholders for a design and simulation demo — no real-world performance, payload or safety compliance is claimed."}),W.jsxs("span",{className:"footer-meta",children:["© ",new Date().getFullYear()," ARC Robotics concept demo"]})]})})}function G1(){return W.jsxs(W.Fragment,{children:[W.jsx(Sx,{}),W.jsxs("main",{children:[W.jsx(P1,{}),W.jsx(D1,{}),W.jsx(N1,{}),W.jsx(U1,{}),W.jsx(F1,{}),W.jsx(B1,{}),W.jsx(H1,{})]}),W.jsx(V1,{})]})}xx.createRoot(document.getElementById("root")).render(W.jsx(un.StrictMode,{children:W.jsx(G1,{})}));
