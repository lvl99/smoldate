"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var MAX_SAFE_INTEGER=9007199254740991,nativeFloor=Math.floor;function baseRepeat(e,r){var t="";if(!e||r<1||r>MAX_SAFE_INTEGER)return t;do{r%2&&(t+=e),(r=nativeFloor(r/2))&&(e+=e)}while(r);return t}var _baseRepeat=baseRepeat,commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,r){return e(r={exports:{}},r.exports),r.exports}var freeGlobal="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=_freeGlobal||freeSelf||Function("return this")(),_root=root,Symbol=_root.Symbol,_Symbol=Symbol;function arrayMap(e,r){for(var t=-1,a=null==e?0:e.length,o=Array(a);++t<a;)o[t]=r(e[t],t,e);return o}var _arrayMap=arrayMap,isArray=Array.isArray,isArray_1=isArray,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=_Symbol?_Symbol.toStringTag:void 0;function getRawTag(e){var r=hasOwnProperty.call(e,symToStringTag),t=e[symToStringTag];try{e[symToStringTag]=void 0;var a=!0}catch(e){}var o=nativeObjectToString.call(e);return a&&(r?e[symToStringTag]=t:delete e[symToStringTag]),o}var _getRawTag=getRawTag,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString;function objectToString(e){return nativeObjectToString$1.call(e)}var _objectToString=objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag$1=_Symbol?_Symbol.toStringTag:void 0;function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag$1&&symToStringTag$1 in Object(e)?_getRawTag(e):_objectToString(e)}var _baseGetTag=baseGetTag;function isObjectLike(e){return null!=e&&"object"==typeof e}var isObjectLike_1=isObjectLike,symbolTag="[object Symbol]";function isSymbol(e){return"symbol"==typeof e||isObjectLike_1(e)&&_baseGetTag(e)==symbolTag}var isSymbol_1=isSymbol,INFINITY=1/0,symbolProto=_Symbol?_Symbol.prototype:void 0,symbolToString=symbolProto?symbolProto.toString:void 0;function baseToString(e){if("string"==typeof e)return e;if(isArray_1(e))return _arrayMap(e,baseToString)+"";if(isSymbol_1(e))return symbolToString?symbolToString.call(e):"";var r=e+"";return"0"==r&&1/e==-INFINITY?"-0":r}var _baseToString=baseToString;function baseSlice(e,r,t){var a=-1,o=e.length;r<0&&(r=-r>o?0:o+r),(t=t>o?o:t)<0&&(t+=o),o=r>t?0:t-r>>>0,r>>>=0;for(var n=Array(o);++a<o;)n[a]=e[a+r];return n}var _baseSlice=baseSlice;function castSlice(e,r,t){var a=e.length;return t=void 0===t?a:t,!r&&t>=a?e:_baseSlice(e,r,t)}var _castSlice=castSlice,rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsVarRange="\\ufe0e\\ufe0f",rsZWJ="\\u200d",reHasUnicode=RegExp("["+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+"]");function hasUnicode(e){return reHasUnicode.test(e)}var _hasUnicode=hasUnicode;function baseProperty(e){return function(r){return null==r?void 0:r[e]}}var _baseProperty=baseProperty,asciiSize=_baseProperty("length"),_asciiSize=asciiSize,rsAstralRange$1="\\ud800-\\udfff",rsComboMarksRange$1="\\u0300-\\u036f",reComboHalfMarksRange$1="\\ufe20-\\ufe2f",rsComboSymbolsRange$1="\\u20d0-\\u20ff",rsComboRange$1=rsComboMarksRange$1+reComboHalfMarksRange$1+rsComboSymbolsRange$1,rsVarRange$1="\\ufe0e\\ufe0f",rsAstral="["+rsAstralRange$1+"]",rsCombo="["+rsComboRange$1+"]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier="(?:"+rsCombo+"|"+rsFitz+")",rsNonAstral="[^"+rsAstralRange$1+"]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsZWJ$1="\\u200d",reOptMod=rsModifier+"?",rsOptVar="["+rsVarRange$1+"]?",rsOptJoin="(?:"+rsZWJ$1+"(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")"+rsOptVar+reOptMod+")*",rsSeq=rsOptVar+reOptMod+rsOptJoin,rsSymbol="(?:"+[rsNonAstral+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")+")",reUnicode=RegExp(rsFitz+"(?="+rsFitz+")|"+rsSymbol+rsSeq,"g");function unicodeSize(e){for(var r=reUnicode.lastIndex=0;reUnicode.test(e);)++r;return r}var _unicodeSize=unicodeSize;function stringSize(e){return _hasUnicode(e)?_unicodeSize(e):_asciiSize(e)}var _stringSize=stringSize;function asciiToArray(e){return e.split("")}var _asciiToArray=asciiToArray,rsAstralRange$2="\\ud800-\\udfff",rsComboMarksRange$2="\\u0300-\\u036f",reComboHalfMarksRange$2="\\ufe20-\\ufe2f",rsComboSymbolsRange$2="\\u20d0-\\u20ff",rsComboRange$2=rsComboMarksRange$2+reComboHalfMarksRange$2+rsComboSymbolsRange$2,rsVarRange$2="\\ufe0e\\ufe0f",rsAstral$1="["+rsAstralRange$2+"]",rsCombo$1="["+rsComboRange$2+"]",rsFitz$1="\\ud83c[\\udffb-\\udfff]",rsModifier$1="(?:"+rsCombo$1+"|"+rsFitz$1+")",rsNonAstral$1="[^"+rsAstralRange$2+"]",rsRegional$1="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair$1="[\\ud800-\\udbff][\\udc00-\\udfff]",rsZWJ$2="\\u200d",reOptMod$1=rsModifier$1+"?",rsOptVar$1="["+rsVarRange$2+"]?",rsOptJoin$1="(?:"+rsZWJ$2+"(?:"+[rsNonAstral$1,rsRegional$1,rsSurrPair$1].join("|")+")"+rsOptVar$1+reOptMod$1+")*",rsSeq$1=rsOptVar$1+reOptMod$1+rsOptJoin$1,rsSymbol$1="(?:"+[rsNonAstral$1+rsCombo$1+"?",rsCombo$1,rsRegional$1,rsSurrPair$1,rsAstral$1].join("|")+")",reUnicode$1=RegExp(rsFitz$1+"(?="+rsFitz$1+")|"+rsSymbol$1+rsSeq$1,"g");function unicodeToArray(e){return e.match(reUnicode$1)||[]}var _unicodeToArray=unicodeToArray;function stringToArray(e){return _hasUnicode(e)?_unicodeToArray(e):_asciiToArray(e)}var _stringToArray=stringToArray,nativeCeil=Math.ceil;function createPadding(e,r){var t=(r=void 0===r?" ":_baseToString(r)).length;if(t<2)return t?_baseRepeat(r,e):r;var a=_baseRepeat(r,nativeCeil(e/_stringSize(r)));return _hasUnicode(r)?_castSlice(_stringToArray(a),0,e).join(""):a.slice(0,e)}var _createPadding=createPadding;function isObject(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)}var isObject_1=isObject,NAN=NaN,reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;function toNumber(e){if("number"==typeof e)return e;if(isSymbol_1(e))return NAN;if(isObject_1(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=isObject_1(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var t=reIsBinary.test(e);return t||reIsOctal.test(e)?freeParseInt(e.slice(2),t?2:8):reIsBadHex.test(e)?NAN:+e}var toNumber_1=toNumber,INFINITY$1=1/0,MAX_INTEGER=1.7976931348623157e308;function toFinite(e){return e?(e=toNumber_1(e))===INFINITY$1||e===-INFINITY$1?(e<0?-1:1)*MAX_INTEGER:e==e?e:0:0===e?e:0}var toFinite_1=toFinite;function toInteger(e){var r=toFinite_1(e),t=r%1;return r==r?t?r-t:r:0}var toInteger_1=toInteger;function toString(e){return null==e?"":_baseToString(e)}var toString_1=toString;function padStart(e,r,t){e=toString_1(e);var a=(r=toInteger_1(r))?_stringSize(e):0;return r&&a<r?_createPadding(r-a,t)+e:e}var padStart_1=padStart,stringTag="[object String]";function isString(e){return"string"==typeof e||!isArray_1(e)&&isObjectLike_1(e)&&_baseGetTag(e)==stringTag}var isString_1=isString,numberTag="[object Number]";function isNumber(e){return"number"==typeof e||isObjectLike_1(e)&&_baseGetTag(e)==numberTag}var isNumber_1=isNumber,objectProto$2=Object.prototype;function isPrototype(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||objectProto$2)}var _isPrototype=isPrototype;function overArg(e,r){return function(t){return e(r(t))}}var _overArg=overArg,nativeKeys=_overArg(Object.keys,Object),_nativeKeys=nativeKeys,objectProto$3=Object.prototype,hasOwnProperty$1=objectProto$3.hasOwnProperty;function baseKeys(e){if(!_isPrototype(e))return _nativeKeys(e);var r=[];for(var t in Object(e))hasOwnProperty$1.call(e,t)&&"constructor"!=t&&r.push(t);return r}var _baseKeys=baseKeys,asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";function isFunction(e){if(!isObject_1(e))return!1;var r=_baseGetTag(e);return r==funcTag||r==genTag||r==asyncTag||r==proxyTag}var isFunction_1=isFunction,coreJsData=_root["__core-js_shared__"],_coreJsData=coreJsData,maskSrcKey=function(){var e=/[^.]+$/.exec(_coreJsData&&_coreJsData.keys&&_coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}var _isMasked=isMasked,funcProto=Function.prototype,funcToString=funcProto.toString;function toSource(e){if(null!=e){try{return funcToString.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var _toSource=toSource,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto$1=Function.prototype,objectProto$4=Object.prototype,funcToString$1=funcProto$1.toString,hasOwnProperty$2=objectProto$4.hasOwnProperty,reIsNative=RegExp("^"+funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function baseIsNative(e){return!(!isObject_1(e)||_isMasked(e))&&(isFunction_1(e)?reIsNative:reIsHostCtor).test(_toSource(e))}var _baseIsNative=baseIsNative;function getValue(e,r){return null==e?void 0:e[r]}var _getValue=getValue;function getNative(e,r){var t=_getValue(e,r);return _baseIsNative(t)?t:void 0}var _getNative=getNative,DataView=_getNative(_root,"DataView"),_DataView=DataView,Map=_getNative(_root,"Map"),_Map=Map,Promise=_getNative(_root,"Promise"),_Promise=Promise,Set=_getNative(_root,"Set"),_Set=Set,WeakMap=_getNative(_root,"WeakMap"),_WeakMap=WeakMap,mapTag="[object Map]",objectTag="[object Object]",promiseTag="[object Promise]",setTag="[object Set]",weakMapTag="[object WeakMap]",dataViewTag="[object DataView]",dataViewCtorString=_toSource(_DataView),mapCtorString=_toSource(_Map),promiseCtorString=_toSource(_Promise),setCtorString=_toSource(_Set),weakMapCtorString=_toSource(_WeakMap),getTag=_baseGetTag;(_DataView&&getTag(new _DataView(new ArrayBuffer(1)))!=dataViewTag||_Map&&getTag(new _Map)!=mapTag||_Promise&&getTag(_Promise.resolve())!=promiseTag||_Set&&getTag(new _Set)!=setTag||_WeakMap&&getTag(new _WeakMap)!=weakMapTag)&&(getTag=function(e){var r=_baseGetTag(e),t=r==objectTag?e.constructor:void 0,a=t?_toSource(t):"";if(a)switch(a){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}return r});var _getTag=getTag,argsTag="[object Arguments]";function baseIsArguments(e){return isObjectLike_1(e)&&_baseGetTag(e)==argsTag}var _baseIsArguments=baseIsArguments,objectProto$5=Object.prototype,hasOwnProperty$3=objectProto$5.hasOwnProperty,propertyIsEnumerable=objectProto$5.propertyIsEnumerable,isArguments=_baseIsArguments(function(){return arguments}())?_baseIsArguments:function(e){return isObjectLike_1(e)&&hasOwnProperty$3.call(e,"callee")&&!propertyIsEnumerable.call(e,"callee")},isArguments_1=isArguments,MAX_SAFE_INTEGER$1=9007199254740991;function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER$1}var isLength_1=isLength;function isArrayLike(e){return null!=e&&isLength_1(e.length)&&!isFunction_1(e)}var isArrayLike_1=isArrayLike;function stubFalse(){return!1}var stubFalse_1=stubFalse,isBuffer_1=createCommonjsModule(function(e,r){var t=r&&!r.nodeType&&r,a=t&&e&&!e.nodeType&&e,o=a&&a.exports===t?_root.Buffer:void 0,n=(o?o.isBuffer:void 0)||stubFalse_1;e.exports=n}),argsTag$1="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag$1="[object Function]",mapTag$1="[object Map]",numberTag$1="[object Number]",objectTag$1="[object Object]",regexpTag="[object RegExp]",setTag$1="[object Set]",stringTag$1="[object String]",weakMapTag$1="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag$1="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};function baseIsTypedArray(e){return isObjectLike_1(e)&&isLength_1(e.length)&&!!typedArrayTags[_baseGetTag(e)]}typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag$1]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag$1]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag$1]=typedArrayTags[mapTag$1]=typedArrayTags[numberTag$1]=typedArrayTags[objectTag$1]=typedArrayTags[regexpTag]=typedArrayTags[setTag$1]=typedArrayTags[stringTag$1]=typedArrayTags[weakMapTag$1]=!1;var _baseIsTypedArray=baseIsTypedArray;function baseUnary(e){return function(r){return e(r)}}var _baseUnary=baseUnary,_nodeUtil=createCommonjsModule(function(e,r){var t=r&&!r.nodeType&&r,a=t&&e&&!e.nodeType&&e,o=a&&a.exports===t&&_freeGlobal.process,n=function(){try{var e=a&&a.require&&a.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=n}),nodeIsTypedArray=_nodeUtil&&_nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?_baseUnary(nodeIsTypedArray):_baseIsTypedArray,isTypedArray_1=isTypedArray,mapTag$2="[object Map]",setTag$2="[object Set]",objectProto$6=Object.prototype,hasOwnProperty$4=objectProto$6.hasOwnProperty;function isEmpty(e){if(null==e)return!0;if(isArrayLike_1(e)&&(isArray_1(e)||"string"==typeof e||"function"==typeof e.splice||isBuffer_1(e)||isTypedArray_1(e)||isArguments_1(e)))return!e.length;var r=_getTag(e);if(r==mapTag$2||r==setTag$2)return!e.size;if(_isPrototype(e))return!_baseKeys(e).length;for(var t in e)if(hasOwnProperty$4.call(e,t))return!1;return!0}var isEmpty_1=isEmpty;const LENGTH_OF_DAY=864e5,MONTHS_WITH_30_DAYS=[4,6,9,11],RE_VALID_DATE_STRING=/^(?:\d|\d{4})\-\d{1,2}\-\d{1,2}/;function daysInMonth(e,r){let t=31;return e?t=new Date(Date.UTC(e,r,0)).getUTCDate():2===r?t=29:MONTHS_WITH_30_DAYS.includes(r)&&(t=30),t}function convertStringToYearMonthDay(e){if(isEmpty_1(e))return{year:0,month:0,day:0};if(!RE_VALID_DATE_STRING.test(String(e)))throw new Error("Invalid date string given. Must match Y-MM-DD or YYYY-MM-DD format.");const[r,t,a]=String(e).split("-").slice(0,3).map(parseFloat);return{year:r,month:t,day:a}}function convertYearMonthDayToDate({year:e=0,month:r=1,day:t=1}){return new Date(`${padStart_1(`${e}`,4,"0")}-${padStart_1(`${r||1}`,2,"0")}-${padStart_1(`${t||1}`,2,"0")}T00:00:00.000Z`)}function convertDateToYearMonthDay(e){let r={year:0,month:0,day:0};if(e instanceof Date)r.year=e.getUTCFullYear(),r.month=e.getUTCMonth()+1,r.day=e.getUTCDate();else if(isString_1(e))r=convertStringToYearMonthDay(String(e));else if(isNumber_1(e)){const t=new Date;t.setTime(Number(e)),r.year=t.getUTCFullYear(),r.month=t.getUTCMonth()+1,r.day=t.getUTCDate()}else r={...e};return r}function convertDateToString(e){let r=convertDateToYearMonthDay(e);return r.year||r.month||r.day?[padStart_1(`${r.year}`,4,"0"),padStart_1(`${r.month}`,2,"0"),padStart_1(`${r.day}`,2,"0")].join("-"):""}function getDateObject(e){return e instanceof Date?e:isString_1(e)?new Date(String(e)):isNumber_1(e)?new Date(Number(e)):convertYearMonthDayToDate(e)}function adjustDateByDays(e,r){const t=getDateObject(e);return new Date(t.getTime()+r*LENGTH_OF_DAY)}function adjustDateByDaysToString(e,r){return convertDateToString(adjustDateByDays(e,r))}function adjustDateByDaysToYearMonthDay(e,r){return convertDateToYearMonthDay(adjustDateByDays(e,r))}function getAge(e){let r=new Date,t=getDateObject(e),a=r.getUTCFullYear()-t.getUTCFullYear(),o=r.getUTCMonth()-t.getUTCMonth();return(o<0||0===o&&r.getUTCDate()<t.getUTCDate())&&a--,a}function validateAge(e,r=16){let t=convertDateToYearMonthDay(e);return getAge(convertYearMonthDayToDate({day:t.day,month:t.month,year:t.year||(new Date).getUTCFullYear()-(r+1)}))>=r}exports.LENGTH_OF_DAY=LENGTH_OF_DAY,exports.MONTHS_WITH_30_DAYS=MONTHS_WITH_30_DAYS,exports.RE_VALID_DATE_STRING=RE_VALID_DATE_STRING,exports.adjustDateByDays=adjustDateByDays,exports.adjustDateByDaysToString=adjustDateByDaysToString,exports.adjustDateByDaysToYearMonthDay=adjustDateByDaysToYearMonthDay,exports.convertDateToString=convertDateToString,exports.convertDateToYearMonthDay=convertDateToYearMonthDay,exports.convertStringToYearMonthDay=convertStringToYearMonthDay,exports.convertYearMonthDayToDate=convertYearMonthDayToDate,exports.daysInMonth=daysInMonth,exports.getAge=getAge,exports.getDateObject=getDateObject,exports.validateAge=validateAge;