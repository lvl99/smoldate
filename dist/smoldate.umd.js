!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).smoldate={})}(this,function(t){"use strict";var e=9007199254740991,r=Math.floor;var n=function(t,n){var o="";if(!t||n<1||n>e)return o;do{n%2&&(o+=t),(n=r(n/2))&&(t+=t)}while(n);return o},o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(t,e){return t(e={exports:{}},e.exports),e.exports}var a="object"==typeof o&&o&&o.Object===Object&&o,f="object"==typeof self&&self&&self.Object===Object&&self,c=a||f||Function("return this")(),i=c.Symbol;var l=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},d=Array.isArray,y=Object.prototype,s=y.hasOwnProperty,v=y.toString,b=i?i.toStringTag:void 0;var p=function(t){var e=s.call(t,b),r=t[b];try{t[b]=void 0;var n=!0}catch(t){}var o=v.call(t);return n&&(e?t[b]=r:delete t[b]),o},j=Object.prototype.toString;var g=function(t){return j.call(t)},h="[object Null]",D="[object Undefined]",T=i?i.toStringTag:void 0;var m=function(t){return null==t?void 0===t?D:h:T&&T in Object(t)?p(t):g(t)};var w=function(t){return null!=t&&"object"==typeof t},O="[object Symbol]";var M=function(t){return"symbol"==typeof t||w(t)&&m(t)==O},S=1/0,A=i?i.prototype:void 0,U=A?A.toString:void 0;var x=function t(e){if("string"==typeof e)return e;if(d(e))return l(e,t)+"";if(M(e))return U?U.call(e):"";var r=e+"";return"0"==r&&1/e==-S?"-0":r};var $=function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var u=Array(o);++n<o;)u[n]=t[n+e];return u};var C=function(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:$(t,e,r)},_=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var F=function(t){return _.test(t)};var Y=function(t){return function(e){return null==e?void 0:e[t]}}("length"),E="[\\ud800-\\udfff]",I="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",P="\\ud83c[\\udffb-\\udfff]",N="[^\\ud800-\\udfff]",B="(?:\\ud83c[\\udde6-\\uddff]){2}",R="[\\ud800-\\udbff][\\udc00-\\udfff]",k="(?:"+I+"|"+P+")"+"?",V="[\\ufe0e\\ufe0f]?"+k+("(?:\\u200d(?:"+[N,B,R].join("|")+")[\\ufe0e\\ufe0f]?"+k+")*"),W="(?:"+[N+I+"?",I,B,R,E].join("|")+")",G=RegExp(P+"(?="+P+")|"+W+V,"g");var H=function(t){for(var e=G.lastIndex=0;G.test(t);)++e;return e};var q=function(t){return F(t)?H(t):Y(t)};var L=function(t){return t.split("")},z="[\\ud800-\\udfff]",Z="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",J="\\ud83c[\\udffb-\\udfff]",K="[^\\ud800-\\udfff]",Q="(?:\\ud83c[\\udde6-\\uddff]){2}",X="[\\ud800-\\udbff][\\udc00-\\udfff]",tt="(?:"+Z+"|"+J+")"+"?",et="[\\ufe0e\\ufe0f]?"+tt+("(?:\\u200d(?:"+[K,Q,X].join("|")+")[\\ufe0e\\ufe0f]?"+tt+")*"),rt="(?:"+[K+Z+"?",Z,Q,X,z].join("|")+")",nt=RegExp(J+"(?="+J+")|"+rt+et,"g");var ot=function(t){return t.match(nt)||[]};var ut=function(t){return F(t)?ot(t):L(t)},at=Math.ceil;var ft=function(t,e){var r=(e=void 0===e?" ":x(e)).length;if(r<2)return r?n(e,t):e;var o=n(e,at(t/q(e)));return F(e)?C(ut(o),0,t).join(""):o.slice(0,t)};var ct=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},it=NaN,lt=/^\s+|\s+$/g,dt=/^[-+]0x[0-9a-f]+$/i,yt=/^0b[01]+$/i,st=/^0o[0-7]+$/i,vt=parseInt;var bt=function(t){if("number"==typeof t)return t;if(M(t))return it;if(ct(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=ct(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(lt,"");var r=yt.test(t);return r||st.test(t)?vt(t.slice(2),r?2:8):dt.test(t)?it:+t},pt=1/0,jt=1.7976931348623157e308;var gt=function(t){return t?(t=bt(t))===pt||t===-pt?(t<0?-1:1)*jt:t==t?t:0:0===t?t:0};var ht=function(t){var e=gt(t),r=e%1;return e==e?r?e-r:e:0};var Dt=function(t){return null==t?"":x(t)};var Tt=function(t,e,r){t=Dt(t);var n=(e=ht(e))?q(t):0;return e&&n<e?ft(e-n,r)+t:t},mt="[object String]";var wt=function(t){return"string"==typeof t||!d(t)&&w(t)&&m(t)==mt},Ot="[object Number]";var Mt=function(t){return"number"==typeof t||w(t)&&m(t)==Ot},St=Object.prototype;var At=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||St)};var Ut=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),xt=Object.prototype.hasOwnProperty;var $t=function(t){if(!At(t))return Ut(t);var e=[];for(var r in Object(t))xt.call(t,r)&&"constructor"!=r&&e.push(r);return e},Ct="[object AsyncFunction]",_t="[object Function]",Ft="[object GeneratorFunction]",Yt="[object Proxy]";var Et,It=function(t){if(!ct(t))return!1;var e=m(t);return e==_t||e==Ft||e==Ct||e==Yt},Pt=c["__core-js_shared__"],Nt=(Et=/[^.]+$/.exec(Pt&&Pt.keys&&Pt.keys.IE_PROTO||""))?"Symbol(src)_1."+Et:"";var Bt=function(t){return!!Nt&&Nt in t},Rt=Function.prototype.toString;var kt=function(t){if(null!=t){try{return Rt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Vt=/^\[object .+?Constructor\]$/,Wt=Function.prototype,Gt=Object.prototype,Ht=Wt.toString,qt=Gt.hasOwnProperty,Lt=RegExp("^"+Ht.call(qt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var zt=function(t){return!(!ct(t)||Bt(t))&&(It(t)?Lt:Vt).test(kt(t))};var Zt=function(t,e){return null==t?void 0:t[e]};var Jt=function(t,e){var r=Zt(t,e);return zt(r)?r:void 0},Kt=Jt(c,"DataView"),Qt=Jt(c,"Map"),Xt=Jt(c,"Promise"),te=Jt(c,"Set"),ee=Jt(c,"WeakMap"),re=kt(Kt),ne=kt(Qt),oe=kt(Xt),ue=kt(te),ae=kt(ee),fe=m;(Kt&&"[object DataView]"!=fe(new Kt(new ArrayBuffer(1)))||Qt&&"[object Map]"!=fe(new Qt)||Xt&&"[object Promise]"!=fe(Xt.resolve())||te&&"[object Set]"!=fe(new te)||ee&&"[object WeakMap]"!=fe(new ee))&&(fe=function(t){var e=m(t),r="[object Object]"==e?t.constructor:void 0,n=r?kt(r):"";if(n)switch(n){case re:return"[object DataView]";case ne:return"[object Map]";case oe:return"[object Promise]";case ue:return"[object Set]";case ae:return"[object WeakMap]"}return e});var ce=fe,ie="[object Arguments]";var le=function(t){return w(t)&&m(t)==ie},de=Object.prototype,ye=de.hasOwnProperty,se=de.propertyIsEnumerable,ve=le(function(){return arguments}())?le:function(t){return w(t)&&ye.call(t,"callee")&&!se.call(t,"callee")},be=9007199254740991;var pe=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=be};var je=function(t){return null!=t&&pe(t.length)&&!It(t)};var ge=function(){return!1},he=u(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?c.Buffer:void 0,u=(o?o.isBuffer:void 0)||ge;t.exports=u}),De={};De["[object Float32Array]"]=De["[object Float64Array]"]=De["[object Int8Array]"]=De["[object Int16Array]"]=De["[object Int32Array]"]=De["[object Uint8Array]"]=De["[object Uint8ClampedArray]"]=De["[object Uint16Array]"]=De["[object Uint32Array]"]=!0,De["[object Arguments]"]=De["[object Array]"]=De["[object ArrayBuffer]"]=De["[object Boolean]"]=De["[object DataView]"]=De["[object Date]"]=De["[object Error]"]=De["[object Function]"]=De["[object Map]"]=De["[object Number]"]=De["[object Object]"]=De["[object RegExp]"]=De["[object Set]"]=De["[object String]"]=De["[object WeakMap]"]=!1;var Te=function(t){return w(t)&&pe(t.length)&&!!De[m(t)]};var me=function(t){return function(e){return t(e)}},we=u(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&a.process,u=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=u}),Oe=we&&we.isTypedArray,Me=Oe?me(Oe):Te,Se="[object Map]",Ae="[object Set]",Ue=Object.prototype.hasOwnProperty;var xe=function(t){if(null==t)return!0;if(je(t)&&(d(t)||"string"==typeof t||"function"==typeof t.splice||he(t)||Me(t)||ve(t)))return!t.length;var e=ce(t);if(e==Se||e==Ae)return!t.size;if(At(t))return!$t(t).length;for(var r in t)if(Ue.call(t,r))return!1;return!0};const $e=864e5,Ce=[4,6,9,11],_e=/^(?:\d|\d{4})\-\d{1,2}\-\d{1,2}/;function Fe(t){if(xe(t))return{year:0,month:0,day:0};if(!_e.test(String(t)))throw new Error("Invalid date string given. Must match Y-MM-DD or YYYY-MM-DD format.");const[e,r,n]=String(t).split("-").slice(0,3).map(parseFloat);return{year:e,month:r,day:n}}function Ye({year:t=0,month:e=1,day:r=1}){return new Date(`${Tt(`${t}`,4,"0")}-${Tt(`${e||1}`,2,"0")}-${Tt(`${r||1}`,2,"0")}T00:00:00.000Z`)}function Ee(t){let e={year:0,month:0,day:0};if(t instanceof Date)e.year=t.getUTCFullYear(),e.month=t.getUTCMonth()+1,e.day=t.getUTCDate();else if(wt(t))e=Fe(String(t));else if(Mt(t)){const r=new Date;r.setTime(Number(t)),e.year=r.getUTCFullYear(),e.month=r.getUTCMonth()+1,e.day=r.getUTCDate()}else e={...t};return e}function Ie(t){let e=Ee(t);return e.year||e.month||e.day?[Tt(`${e.year}`,4,"0"),Tt(`${e.month}`,2,"0"),Tt(`${e.day}`,2,"0")].join("-"):""}function Pe(t){return t instanceof Date?t:wt(t)?new Date(String(t)):Mt(t)?new Date(Number(t)):Ye(t)}function Ne(t,e){const r=Pe(t);return new Date(r.getTime()+e*$e)}function Be(t){let e=new Date,r=Pe(t),n=e.getUTCFullYear()-r.getUTCFullYear(),o=e.getUTCMonth()-r.getUTCMonth();return(o<0||0===o&&e.getUTCDate()<r.getUTCDate())&&n--,n}t.LENGTH_OF_DAY=$e,t.MONTHS_WITH_30_DAYS=Ce,t.RE_VALID_DATE_STRING=_e,t.adjustDateByDays=Ne,t.adjustDateByDaysToString=function(t,e){return Ie(Ne(t,e))},t.adjustDateByDaysToYearMonthDay=function(t,e){return Ee(Ne(t,e))},t.convertDateToString=Ie,t.convertDateToYearMonthDay=Ee,t.convertStringToYearMonthDay=Fe,t.convertYearMonthDayToDate=Ye,t.daysInMonth=function(t,e){let r=31;return t?r=new Date(Date.UTC(t,e,0)).getUTCDate():2===e?r=29:Ce.includes(e)&&(r=30),r},t.getAge=Be,t.getDateObject=Pe,t.validateAge=function(t,e=16){let r=Ee(t);return Be(Ye({day:r.day,month:r.month,year:r.year||(new Date).getUTCFullYear()-(e+1)}))>=e},Object.defineProperty(t,"__esModule",{value:!0})});