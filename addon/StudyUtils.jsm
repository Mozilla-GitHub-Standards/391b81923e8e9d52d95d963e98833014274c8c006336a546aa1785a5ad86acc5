(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/* ajv 4.11.8: Another JSON Schema Validator */
!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.Ajv=e()}}(function(){var e;return function e(r,t,a){function s(i,n){if(!t[i]){if(!r[i]){var l="function"==typeof require&&require;if(!n&&l)return require(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var h=t[i]={exports:{}};r[i][0].call(h.exports,function(e){var t=r[i][1][e];return s(t||e)},h,h.exports,e,r,t,a)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<a.length;i++)s(a[i]);return s}({1:[function(e,r,t){"use strict";function a(e,r){!1!==r&&(r=!0);var t,s=e.async,o=e.transpile;switch(typeof o){case"string":var i=m[o];if(!i)throw new Error("bad transpiler: "+o);return e._transpileFunc=i(e,r);case"undefined":case"boolean":if("string"==typeof s){if(!(t=p[s]))throw new Error("bad async mode: "+s);return e.transpile=t(e,r)}for(var n=0;n<v.length;n++){var l=v[n];if(a(l,!1))return d.copy(l,e),e.transpile}throw new Error("generators, nodent and regenerator are not available");case"function":return e._transpileFunc=e.transpile;default:throw new Error("bad transpiler: "+o)}}function s(e,r){try{return new Function("(function*(){})()")(),!0}catch(e){if(r)throw new Error("generators not supported")}}function o(e,r){try{return new Function("(async function(){})()")(),!0}catch(e){if(r)throw new Error("es7 async functions not supported")}}function i(r,t){try{if(!u){u=e("regenerator"),u.runtime()}return r.async&&!0!==r.async||(r.async="es7"),n}catch(e){if(t)throw new Error("regenerator not available")}}function n(e){return u.compile(e).code}function l(r,t){try{if(!f){f=e("nodent")({log:!1,dontInstallRequireHook:!0})}return"es7"!=r.async&&(r.async&&!0!==r.async&&console.warn("nodent transpiles only es7 async functions"),r.async="es7"),c}catch(e){if(t)throw new Error("nodent not available")}}function c(e){return f.compile(e,"",{promises:!0,sourcemap:!1}).code}function h(e,r){function t(e,r,a){function o(e,t){if(!a)return r(e,t);setTimeout(function(){r(e,t)})}var i;try{i=s.compile(e)}catch(a){return void(a.missingSchema?function(a){function o(a,o){if(a)return r(a);if(!s._refs[i]&&!s._schemas[i])try{s.addSchema(o,i)}catch(e){return void r(e)}t(e,r)}var i=a.missingSchema;if(s._refs[i]||s._schemas[i])return r(new Error("Schema "+i+" is loaded but "+a.missingRef+" cannot be resolved"));var n=s._loadingSchemas[i];n?"function"==typeof n?s._loadingSchemas[i]=[n,o]:n[n.length]=o:(s._loadingSchemas[i]=o,s._opts.loadSchema(i,function(e,r){var t=s._loadingSchemas[i];if(delete s._loadingSchemas[i],"function"==typeof t)t(e,r);else for(var a=0;a<t.length;a++)t[a](e,r)}))}(a):o(a))}o(null,i)}var a,s=this;try{a=this._addSchema(e)}catch(e){return void setTimeout(function(){r(e)})}if(a.validate)setTimeout(function(){r(null,a.validate)});else{if("function"!=typeof this._opts.loadSchema)throw new Error("options.loadSchema should be a function");t(e,r,!0)}}r.exports={setup:a,compile:h};var u,f,d=e("./compile/util"),p={"*":s,"co*":s,es7:o},m={nodent:l,regenerator:i},v=[{async:"co*"},{async:"es7",transpile:"nodent"},{async:"co*",transpile:"regenerator"}]},{"./compile/util":11}],2:[function(e,r,t){"use strict";var a=r.exports=function(){this._cache={}};a.prototype.put=function(e,r){this._cache[e]=r},a.prototype.get=function(e){return this._cache[e]},a.prototype.del=function(e){delete this._cache[e]},a.prototype.clear=function(){this._cache={}}},{}],3:[function(e,r,t){"use strict";r.exports={$ref:e("../dotjs/ref"),allOf:e("../dotjs/allOf"),anyOf:e("../dotjs/anyOf"),dependencies:e("../dotjs/dependencies"),enum:e("../dotjs/enum"),format:e("../dotjs/format"),items:e("../dotjs/items"),maximum:e("../dotjs/_limit"),minimum:e("../dotjs/_limit"),maxItems:e("../dotjs/_limitItems"),minItems:e("../dotjs/_limitItems"),maxLength:e("../dotjs/_limitLength"),minLength:e("../dotjs/_limitLength"),maxProperties:e("../dotjs/_limitProperties"),minProperties:e("../dotjs/_limitProperties"),multipleOf:e("../dotjs/multipleOf"),not:e("../dotjs/not"),oneOf:e("../dotjs/oneOf"),pattern:e("../dotjs/pattern"),properties:e("../dotjs/properties"),required:e("../dotjs/required"),uniqueItems:e("../dotjs/uniqueItems"),validate:e("../dotjs/validate")}},{"../dotjs/_limit":14,"../dotjs/_limitItems":15,"../dotjs/_limitLength":16,"../dotjs/_limitProperties":17,"../dotjs/allOf":18,"../dotjs/anyOf":19,"../dotjs/dependencies":22,"../dotjs/enum":23,"../dotjs/format":24,"../dotjs/items":25,"../dotjs/multipleOf":26,"../dotjs/not":27,"../dotjs/oneOf":28,"../dotjs/pattern":29,"../dotjs/properties":31,"../dotjs/ref":32,"../dotjs/required":33,"../dotjs/uniqueItems":35,"../dotjs/validate":36}],4:[function(e,r,t){"use strict";r.exports=function e(r,t){if(r===t)return!0;var a,s=Array.isArray(r),o=Array.isArray(t);if(s&&o){if(r.length!=t.length)return!1;for(a=0;a<r.length;a++)if(!e(r[a],t[a]))return!1;return!0}if(s!=o)return!1;if(r&&t&&"object"==typeof r&&"object"==typeof t){var i=Object.keys(r);if(i.length!==Object.keys(t).length)return!1;var n=r instanceof Date,l=t instanceof Date;if(n&&l)return r.getTime()==t.getTime();if(n!=l)return!1;var c=r instanceof RegExp,h=t instanceof RegExp;if(c&&h)return r.toString()==t.toString();if(c!=h)return!1;for(a=0;a<i.length;a++)if(!Object.prototype.hasOwnProperty.call(t,i[a]))return!1;for(a=0;a<i.length;a++)if(!e(r[i[a]],t[i[a]]))return!1;return!0}return!1}},{}],5:[function(e,r,t){"use strict";function a(e){e="full"==e?"full":"fast";var r=d.copy(a[e]);for(var t in a.compare)r[t]={validate:r[t],compare:a.compare[t]};return r}function s(e){var r=e.match(p);if(!r)return!1;var t=+r[1],a=+r[2];return t>=1&&t<=12&&a>=1&&a<=m[t]}function o(e,r){var t=e.match(v);if(!t)return!1;var a=t[1],s=t[2],o=t[3],i=t[5];return a<=23&&s<=59&&o<=59&&(!r||i)}function i(e){var r=e.split(b);return 2==r.length&&s(r[0])&&o(r[1],!0)}function n(e){return e.length<=255&&y.test(e)}function l(e){return w.test(e)&&g.test(e)}function c(e){try{return new RegExp(e),!0}catch(e){return!1}}function h(e,r){if(e&&r)return e>r?1:e<r?-1:e===r?0:void 0}function u(e,r){if(e&&r&&(e=e.match(v),r=r.match(v),e&&r))return e=e[1]+e[2]+e[3]+(e[4]||""),r=r[1]+r[2]+r[3]+(r[4]||""),e>r?1:e<r?-1:e===r?0:void 0}function f(e,r){if(e&&r){e=e.split(b),r=r.split(b);var t=h(e[0],r[0]);if(void 0!==t)return t||u(e[1],r[1])}}var d=e("./util"),p=/^\d\d\d\d-(\d\d)-(\d\d)$/,m=[0,31,29,31,30,31,30,31,31,30,31,30,31],v=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i,y=/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i,g=/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*)?(?:\#(?:[a-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*)?$/i,P=/^(?:urn\:uuid\:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,E=/^(?:\/(?:[^~\/]|~0|~1)*)*$|^\#(?:\/(?:[a-z0-9_\-\.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;r.exports=a,a.fast={date:/^\d\d\d\d-[0-1]\d-[0-3]\d$/,time:/^[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,"date-time":/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,uri:/^(?:[a-z][a-z0-9+-.]*)?(?:\:|\/)\/?[^\s]*$/i,email:/^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,hostname:y,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:c,uuid:P,"json-pointer":E,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:\#|(?:\/(?:[^~\/]|~0|~1)*)*)$/},a.full={date:s,time:o,"date-time":i,uri:l,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:n,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:c,uuid:P,"json-pointer":E,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:\#|(?:\/(?:[^~\/]|~0|~1)*)*)$/},a.compare={date:h,time:u,"date-time":f};var b=/t|\s/i,w=/\/|\:/},{"./util":11}],6:[function(e,r,t){"use strict";function a(){if(void 0===d){try{d=e("js-beautify").js_beautify}catch(e){d=!1}}}function s(e,r,t,n){function j(){var e=N.validate,r=e.apply(null,arguments);return j.errors=e.errors,r}function S(e,t,o,i){var n=!t||t&&t.schema==e;if(t.schema!=r.schema)return s.call(k,e,t,o,i);var v=!0===e.$async;v&&!q.transpile&&y.setup(q);var j=g({isTop:!0,schema:e,isRoot:n,baseId:i,root:t,schemaPath:"",errSchemaPath:"#",errorPath:'""',RULES:H,validate:g,util:m,resolve:p,resolveRef:$,usePattern:R,useDefault:I,useCustomRule:A,opts:q,formats:F,self:k});j=f(D,h)+f(Q,l)+f(V,c)+f(U,u)+j,q.beautify&&(a(),d?j=d(j,q.beautify):console.error('"npm install js-beautify" to use beautify option'));var S,x,_=q._transpileFunc;try{x=v&&_?_(j):j;S=new Function("self","RULES","formats","root","refVal","defaults","customRules","co","equal","ucs2length","ValidationError",x)(k,H,F,r,D,V,U,P,b,E,w),D[0]=S}catch(e){throw console.error("Error compiling schema, function code:",x),e}return S.schema=e,S.errors=null,S.refs=L,S.refVal=D,S.root=n?S:t,v&&(S.$async=!0),T&&(S.sourceCode=j),!0===q.sourceCode&&(S.source={patterns:Q,defaults:V}),S}function $(e,a,o){a=p.url(e,a);var i,n,l=L[a];if(void 0!==l)return i=D[l],n="refVal["+l+"]",O(i,n);if(!o&&r.refs){var c=r.refs[a];if(void 0!==c)return i=r.refVal[c],n=x(a,i),O(i,n)}n=x(a);var h=p.call(k,S,r,a);if(!h){var u=t&&t[a];u&&(h=p.inlineRef(u,q.inlineRefs)?u:s.call(k,u,r,t,e))}return h?(_(a,h),O(h,n)):void 0}function x(e,r){var t=D.length;return D[t]=r,L[e]=t,"refVal"+t}function _(e,r){D[L[e]]=r}function O(e,r){return"object"==typeof e?{code:r,schema:e,inline:!0}:{code:r,$async:e&&e.$async}}function R(e){var r=C[e];return void 0===r&&(r=C[e]=Q.length,Q[r]=e),"pattern"+r}function I(e){switch(typeof e){case"boolean":case"number":return""+e;case"string":return m.toQuotedString(e);case"object":if(null===e)return"null";var r=v(e),t=z[r];return void 0===t&&(t=z[r]=V.length,V[t]=e),"default"+t}}function A(e,r,t,a){var s=e.definition.validateSchema;if(s&&!1!==k._opts.validateSchema){if(!s(r)){var o="keyword schema is invalid: "+k.errorsText(s.errors);if("log"!=k._opts.validateSchema)throw new Error(o);console.error(o)}}var i,n=e.definition.compile,l=e.definition.inline,c=e.definition.macro;n?i=n.call(k,r,t,a):c?(i=c.call(k,r,t,a),!1!==q.validateSchema&&k.validateSchema(i,!0)):i=l?l.call(k,a,e.keyword,r,t):e.definition.validate;var h=U.length;return U[h]=i,{code:"customRule"+h,validate:i}}var k=this,q=this._opts,D=[void 0],L={},Q=[],C={},V=[],z={},U=[],T=!1!==q.sourceCode;r=r||{schema:e,refVal:D,refs:L};var M=o.call(this,e,r,n),N=this._compilations[M.index];if(M.compiling)return N.callValidate=j;var F=this._formats,H=this.RULES;try{var J=S(e,r,t,n);N.validate=J;var G=N.callValidate;return G&&(G.schema=J.schema,G.errors=null,G.refs=J.refs,G.refVal=J.refVal,G.root=J.root,G.$async=J.$async,T&&(G.sourceCode=J.sourceCode)),J}finally{i.call(this,e,r,n)}}function o(e,r,t){var a=n.call(this,e,r,t);return a>=0?{index:a,compiling:!0}:(a=this._compilations.length,this._compilations[a]={schema:e,root:r,baseId:t},{index:a,compiling:!1})}function i(e,r,t){var a=n.call(this,e,r,t);a>=0&&this._compilations.splice(a,1)}function n(e,r,t){for(var a=0;a<this._compilations.length;a++){var s=this._compilations[a];if(s.schema==e&&s.root==r&&s.baseId==t)return a}return-1}function l(e,r){return"var pattern"+e+" = new RegExp("+m.toQuotedString(r[e])+");"}function c(e){return"var default"+e+" = defaults["+e+"];"}function h(e,r){return r[e]?"var refVal"+e+" = refVal["+e+"];":""}function u(e){return"var customRule"+e+" = customRules["+e+"];"}function f(e,r){if(!e.length)return"";for(var t="",a=0;a<e.length;a++)t+=r(a,e);return t}var d,p=e("./resolve"),m=e("./util"),v=e("json-stable-stringify"),y=e("../async"),g=e("../dotjs/validate"),P=e("co"),E=m.ucs2length,b=e("./equal"),w=e("./validation_error");r.exports=s},{"../async":1,"../dotjs/validate":36,"./equal":4,"./resolve":7,"./util":11,"./validation_error":12,co:41,"json-stable-stringify":42}],7:[function(e,r,t){"use strict";function a(e,r,t){var o=this._refs[t];if("string"==typeof o){if(!this._refs[o])return a.call(this,e,r,o);o=this._refs[o]}if((o=o||this._schemas[t])instanceof g)return n(o.schema,this._opts.inlineRefs)?o.schema:o.validate||this._compile(o);var i,l,c,h=s.call(this,r,t);return h&&(i=h.schema,r=h.root,c=h.baseId),i instanceof g?l=i.validate||e.call(this,i.schema,r,void 0,c):i&&(l=n(i,this._opts.inlineRefs)?i:e.call(this,i,r,void 0,c)),l}function s(e,r){var t=m.parse(r,!1,!0),a=u(t),s=h(e.schema.id);if(a!==s){var n=f(a),l=this._refs[n];if("string"==typeof l)return o.call(this,e,l,t);if(l instanceof g)l.validate||this._compile(l),e=l;else{if(!((l=this._schemas[n])instanceof g))return;if(l.validate||this._compile(l),n==f(r))return{schema:l,root:e,baseId:s};e=l}if(!e.schema)return;s=h(e.schema.id)}return i.call(this,t,s,e.schema,e)}function o(e,r,t){var a=s.call(this,e,r);if(a){var o=a.schema,n=a.baseId;return e=a.root,o.id&&(n=d(n,o.id)),i.call(this,t,n,o,e)}}function i(e,r,t,a){if(e.hash=e.hash||"","#/"==e.hash.slice(0,2)){for(var o=e.hash.split("/"),i=1;i<o.length;i++){var n=o[i];if(n){if(n=y.unescapeFragment(n),!(t=t[n]))break;if(t.id&&!P[n]&&(r=d(r,t.id)),t.$ref){var l=d(r,t.$ref),c=s.call(this,a,l);c&&(t=c.schema,a=c.root,r=c.baseId)}}}return t&&t!=a.schema?{schema:t,root:a,baseId:r}:void 0}}function n(e,r){return!1!==r&&(void 0===r||!0===r?l(e):r?c(e)<=r:void 0)}function l(e){var r;if(Array.isArray(e)){for(var t=0;t<e.length;t++)if("object"==typeof(r=e[t])&&!l(r))return!1}else for(var a in e){if("$ref"==a)return!1;if("object"==typeof(r=e[a])&&!l(r))return!1}return!0}function c(e){var r,t=0;if(Array.isArray(e)){for(var a=0;a<e.length;a++)if(r=e[a],"object"==typeof r&&(t+=c(r)),t==1/0)return 1/0}else for(var s in e){if("$ref"==s)return 1/0;if(E[s])t++;else if(r=e[s],"object"==typeof r&&(t+=c(r)+1),t==1/0)return 1/0}return t}function h(e,r){return!1!==r&&(e=f(e)),u(m.parse(e,!1,!0))}function u(e){var r=e.protocol||"//"==e.href.slice(0,2)?"//":"";return(e.protocol||"")+r+(e.host||"")+(e.path||"")+"#"}function f(e){return e?e.replace(b,""):""}function d(e,r){return r=f(r),m.resolve(e,r)}function p(e){function r(e,t,s){if(Array.isArray(e))for(var o=0;o<e.length;o++)r.call(this,e[o],t+"/"+o,s);else if(e&&"object"==typeof e){if("string"==typeof e.id){var i=s=s?m.resolve(s,e.id):e.id;i=f(i);var n=this._refs[i];if("string"==typeof n&&(n=this._refs[n]),n&&n.schema){if(!v(e,n.schema))throw new Error('id "'+i+'" resolves to more than one schema')}else if(i!=f(t))if("#"==i[0]){if(a[i]&&!v(e,a[i]))throw new Error('id "'+i+'" resolves to more than one schema');a[i]=e}else this._refs[i]=t}for(var l in e)r.call(this,e[l],t+"/"+y.escapeFragment(l),s)}}var t=f(e.id),a={};return r.call(this,e,h(t,!1),t),a}var m=e("url"),v=e("./equal"),y=e("./util"),g=e("./schema_obj");r.exports=a,a.normalizeId=f,a.fullPath=h,a.url=d,a.ids=p,a.inlineRef=n,a.schema=s;var P=y.toHash(["properties","patternProperties","enum","dependencies","definitions"]),E=y.toHash(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum"]),b=/#\/?$/},{"./equal":4,"./schema_obj":9,"./util":11,url:50}],8:[function(e,r,t){"use strict";var a=e("./_rules"),s=e("./util").toHash;r.exports=function(){var e=[{type:"number",rules:["maximum","minimum","multipleOf"]},{type:"string",rules:["maxLength","minLength","pattern","format"]},{type:"array",rules:["maxItems","minItems","uniqueItems","items"]},{type:"object",rules:["maxProperties","minProperties","required","dependencies","properties"]},{rules:["$ref","enum","not","anyOf","oneOf","allOf"]}],r=["type","additionalProperties","patternProperties"],t=["additionalItems","$schema","id","title","description","default"],o=["number","integer","string","array","object","boolean","null"];return e.all=s(r),e.forEach(function(t){t.rules=t.rules.map(function(t){return r.push(t),e.all[t]={keyword:t,code:a[t]}})}),e.keywords=s(r.concat(t)),e.types=s(o),e.custom={},e}},{"./_rules":3,"./util":11}],9:[function(e,r,t){"use strict";function a(e){s.copy(e,this)}var s=e("./util");r.exports=a},{"./util":11}],10:[function(e,r,t){"use strict";r.exports=function(e){for(var r,t=0,a=e.length,s=0;s<a;)t++,(r=e.charCodeAt(s++))>=55296&&r<=56319&&s<a&&56320==(64512&(r=e.charCodeAt(s)))&&s++;return t}},{}],11:[function(e,r,t){"use strict";function a(e,r){r=r||{};for(var t in e)r[t]=e[t];return r}function s(e,r,t){var a=t?" !== ":" === ",s=t?" || ":" && ",o=t?"!":"",i=t?"":"!";switch(e){case"null":return r+a+"null";case"array":return o+"Array.isArray("+r+")";case"object":return"("+o+r+s+"typeof "+r+a+'"object"'+s+i+"Array.isArray("+r+"))";case"integer":return"(typeof "+r+a+'"number"'+s+i+"("+r+" % 1)"+s+r+a+r+")";default:return"typeof "+r+a+'"'+e+'"'}}function o(e,r){switch(e.length){case 1:return s(e[0],r,!0);default:var t="",a=n(e);a.array&&a.object&&(t=a.null?"(":"(!"+r+" || ",t+="typeof "+r+' !== "object")',delete a.null,delete a.array,delete a.object),a.number&&delete a.integer;for(var o in a)t+=(t?" && ":"")+s(o,r,!0);return t}}function i(e,r){if(Array.isArray(r)){for(var t=[],a=0;a<r.length;a++){var s=r[a];$[s]?t[t.length]=s:"array"===e&&"array"===s&&(t[t.length]=s)}if(t.length)return t}else{if($[r])return[r];if("array"===e&&"array"===r)return["array"]}}function n(e){for(var r={},t=0;t<e.length;t++)r[e[t]]=!0;return r}function l(e){return"number"==typeof e?"["+e+"]":x.test(e)?"."+e:"['"+c(e)+"']"}function c(e){return e.replace(_,"\\$&").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\f/g,"\\f").replace(/\t/g,"\\t")}function h(e,r){r+="[^0-9]";var t=e.match(new RegExp(r,"g"));return t?t.length:0}function u(e,r,t){return r+="([^0-9])",t=t.replace(/\$/g,"$$$$"),e.replace(new RegExp(r,"g"),t+"$1")}function f(e){return e.replace(O,"").replace(R,"").replace(I,"if (!($1))")}function d(e,r){var t=e.match(A);return t&&2===t.length?r?e.replace(q,"").replace(Q,C):e.replace(k,"").replace(D,L):e}function p(e,r){for(var t in e)if(r[t])return!0}function m(e,r,t){for(var a in e)if(a!=t&&r[a])return!0}function v(e){return"'"+c(e)+"'"}function y(e,r,t,a){return E(e,t?"'/' + "+r+(a?"":".replace(/~/g, '~0').replace(/\\//g, '~1')"):a?"'[' + "+r+" + ']'":"'[\\'' + "+r+" + '\\']'")}function g(e,r,t){return E(e,v(t?"/"+j(r):l(r)))}function P(e,r,t){var a,s,o,i;if(""===e)return"rootData";if("/"==e[0]){if(!V.test(e))throw new Error("Invalid JSON-pointer: "+e);s=e,o="rootData"}else{if(!(i=e.match(z)))throw new Error("Invalid JSON-pointer: "+e);if(a=+i[1],"#"==(s=i[2])){if(a>=r)throw new Error("Cannot access property/index "+a+" levels up, current level is "+r);return t[r-a]}if(a>r)throw new Error("Cannot access data "+a+" levels up, current level is "+r);if(o="data"+(r-a||""),!s)return o}for(var n=o,c=s.split("/"),h=0;h<c.length;h++){var u=c[h];u&&(o+=l(S(u)),n+=" && "+o)}return n}function E(e,r){return'""'==e?r:(e+" + "+r).replace(/' \+ '/g,"")}function b(e){return S(decodeURIComponent(e))}function w(e){return encodeURIComponent(j(e))}function j(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function S(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}r.exports={copy:a,checkDataType:s,checkDataTypes:o,coerceToTypes:i,toHash:n,getProperty:l,escapeQuotes:c,ucs2length:e("./ucs2length"),varOccurences:h,varReplace:u,cleanUpCode:f,cleanUpVarErrors:d,schemaHasRules:p,schemaHasRulesExcept:m,stableStringify:e("json-stable-stringify"),toQuotedString:v,getPathExpr:y,getPath:g,getData:P,unescapeFragment:b,escapeFragment:w,escapeJsonPointer:j};var $=n(["string","number","integer","boolean","null"]),x=/^[a-z$_][a-z$_0-9]*$/i,_=/'|\\/g,O=/else\s*{\s*}/g,R=/if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,I=/if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g,A=/[^v\.]errors/g,k=/var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,q=/var errors = 0;|var vErrors = null;/g,D="return errors === 0;",L="validate.errors = null; return true;",Q=/if \(errors === 0\) return true;\s*else throw new ValidationError\(vErrors\);/,C="return true;",V=/^\/(?:[^~]|~0|~1)*$/,z=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/},{"./ucs2length":10,"json-stable-stringify":42}],12:[function(e,r,t){"use strict";function a(e){this.message="validation failed",this.errors=e,this.ajv=this.validation=!0}r.exports=a,a.prototype=Object.create(Error.prototype),a.prototype.constructor=a},{}],13:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s;if(a+="var "+u+" = undefined;",!1===e.opts.format)return a+=" "+u+" = true; ";var f=e.schema.format,d=e.opts.v5&&f.$data,p="";if(d){var m=e.util.getData(f.$data,o,e.dataPathArr),v="format"+s,y="compare"+s;a+=" var "+v+" = formats["+m+"] , "+y+" = "+v+" && "+v+".compare;"}else{var v=e.formats[f];if(!v||!v.compare)return a+="  "+u+" = true; ";var y="formats"+e.util.getProperty(f)+".compare"}var g,P="formatMaximum"==r,E="formatExclusive"+(P?"Maximum":"Minimum"),b=e.schema[E],w=e.opts.v5&&b&&b.$data,j=P?"<":">",S="result"+s,$=e.opts.v5&&i&&i.$data;if($?(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",g="schema"+s):g=i,w){var x=e.util.getData(b.$data,o,e.dataPathArr),_="exclusive"+s,O="op"+s,R="' + "+O+" + '";a+=" var schemaExcl"+s+" = "+x+"; ",x="schemaExcl"+s,a+=" if (typeof "+x+" != 'boolean' && "+x+" !== undefined) { "+u+" = false; ";var t=E,I=I||[];I.push(a),a="",!1!==e.createErrors?(a+=" { keyword: '"+(t||"_formatExclusiveLimit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: '"+E+" should be boolean' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var A=a;a=I.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+A+"]); ":" validate.errors = ["+A+"]; return false; ":" var err = "+A+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }  ",c&&(p+="}",a+=" else { "),$&&(a+=" if ("+g+" === undefined) "+u+" = true; else if (typeof "+g+" != 'string') "+u+" = false; else { ",p+="}"),d&&(a+=" if (!"+y+") "+u+" = true; else { ",p+="}"),a+=" var "+S+" = "+y+"("+h+",  ",a+=$?""+g:""+e.util.toQuotedString(i),a+=" ); if ("+S+" === undefined) "+u+" = false; var "+_+" = "+x+" === true; if ("+u+" === undefined) { "+u+" = "+_+" ? "+S+" "+j+" 0 : "+S+" "+j+"= 0; } if (!"+u+") var op"+s+" = "+_+" ? '"+j+"' : '"+j+"=';"}else{var _=!0===b,R=j;_||(R+="=");var O="'"+R+"'";$&&(a+=" if ("+g+" === undefined) "+u+" = true; else if (typeof "+g+" != 'string') "+u+" = false; else { ",p+="}"),d&&(a+=" if (!"+y+") "+u+" = true; else { ",p+="}"),a+=" var "+S+" = "+y+"("+h+",  ",a+=$?""+g:""+e.util.toQuotedString(i),a+=" ); if ("+S+" === undefined) "+u+" = false; if ("+u+" === undefined) "+u+" = "+S+" "+j,_||(a+="="),a+=" 0;"}a+=p+"if (!"+u+") { ";var t=r,I=I||[];I.push(a),a="",!1!==e.createErrors?(a+=" { keyword: '"+(t||"_formatLimit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { comparison: "+O+", limit:  ",a+=$?""+g:""+e.util.toQuotedString(i),a+=" , exclusive: "+_+" } ",!1!==e.opts.messages&&(a+=" , message: 'should be "+R+' "',a+=$?"' + "+g+" + '":""+e.util.escapeQuotes(i),a+="\"' "),e.opts.verbose&&(a+=" , schema:  ",a+=$?"validate.schema"+n:""+e.util.toQuotedString(i),a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var A=a;return a=I.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+A+"]); ":" validate.errors = ["+A+"]; return false; ":" var err = "+A+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="}"}},{}],14:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,u="data"+(i||""),f=e.opts.v5&&n&&n.$data;f?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n;var d="maximum"==r,p=d?"exclusiveMaximum":"exclusiveMinimum",m=e.schema[p],v=e.opts.v5&&m&&m.$data,y=d?"<":">",g=d?">":"<";if(v){var P=e.util.getData(m.$data,i,e.dataPathArr),E="exclusive"+o,b="op"+o,w="' + "+b+" + '";s+=" var schemaExcl"+o+" = "+P+"; ",P="schemaExcl"+o,s+=" var exclusive"+o+"; if (typeof "+P+" != 'boolean' && typeof "+P+" != 'undefined') { ";var t=p,j=j||[];j.push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(t||"_exclusiveLimit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: {} ",!1!==e.opts.messages&&(s+=" , message: '"+p+" should be boolean' "),e.opts.verbose&&(s+=" , schema: validate.schema"+l+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),s+=" } "):s+=" {} ";var S=s;s=j.pop(),s+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+S+"]); ":" validate.errors = ["+S+"]; return false; ":" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } else if( ",f&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" ((exclusive"+o+" = "+P+" === true) ? "+u+" "+g+"= "+a+" : "+u+" "+g+" "+a+") || "+u+" !== "+u+") { var op"+o+" = exclusive"+o+" ? '"+y+"' : '"+y+"=';"}else{var E=!0===m,w=y;E||(w+="=");var b="'"+w+"'";s+=" if ( ",f&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" "+u+" "+g,E&&(s+="="),s+=" "+a+" || "+u+" !== "+u+") {"}var t=r,j=j||[];j.push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(t||"_limit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { comparison: "+b+", limit: "+a+", exclusive: "+E+" } ",!1!==e.opts.messages&&(s+=" , message: 'should be "+w+" ",s+=f?"' + "+a:n+"'"),e.opts.verbose&&(s+=" , schema:  ",s+=f?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),s+=" } "):s+=" {} ";var S=s;return s=j.pop(),s+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+S+"]); ":" validate.errors = ["+S+"]; return false; ":" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } ",h&&(s+=" else { "),s}},{}],15:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,u="data"+(i||""),f=e.opts.v5&&n&&n.$data;f?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n;var d="maxItems"==r?">":"<";s+="if ( ",f&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" "+u+".length "+d+" "+a+") { ";var t=r,p=p||[];p.push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(t||"_limitItems")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT have ",s+="maxItems"==r?"more":"less",s+=" than ",s+=f?"' + "+a+" + '":""+n,s+=" items' "),e.opts.verbose&&(s+=" , schema:  ",s+=f?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),s+=" } "):s+=" {} ";var m=s;return s=p.pop(),s+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",h&&(s+=" else { "),s}},{}],16:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,u="data"+(i||""),f=e.opts.v5&&n&&n.$data;f?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n;var d="maxLength"==r?">":"<";s+="if ( ",f&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=!1===e.opts.unicode?" "+u+".length ":" ucs2length("+u+") ",s+=" "+d+" "+a+") { ";var t=r,p=p||[];p.push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(t||"_limitLength")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT be ",s+="maxLength"==r?"longer":"shorter",s+=" than ",s+=f?"' + "+a+" + '":""+n,s+=" characters' "),e.opts.verbose&&(s+=" , schema:  ",s+=f?"validate.schema"+l:""+n,
s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),s+=" } "):s+=" {} ";var m=s;return s=p.pop(),s+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",h&&(s+=" else { "),s}},{}],17:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,u="data"+(i||""),f=e.opts.v5&&n&&n.$data;f?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n;var d="maxProperties"==r?">":"<";s+="if ( ",f&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" Object.keys("+u+").length "+d+" "+a+") { ";var t=r,p=p||[];p.push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(t||"_limitProperties")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT have ",s+="maxProperties"==r?"more":"less",s+=" than ",s+=f?"' + "+a+" + '":""+n,s+=" properties' "),e.opts.verbose&&(s+=" , schema:  ",s+=f?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),s+=" } "):s+=" {} ";var m=s;return s=p.pop(),s+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",h&&(s+=" else { "),s}},{}],18:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.schema[r],s=e.schemaPath+e.util.getProperty(r),o=e.errSchemaPath+"/"+r,i=!e.opts.allErrors,n=e.util.copy(e),l="";n.level++;var c="valid"+n.level,h=n.baseId,u=!0,f=a;if(f)for(var d,p=-1,m=f.length-1;p<m;)d=f[p+=1],e.util.schemaHasRules(d,e.RULES.all)&&(u=!1,n.schema=d,n.schemaPath=s+"["+p+"]",n.errSchemaPath=o+"/"+p,t+="  "+e.validate(n)+" ",n.baseId=h,i&&(t+=" if ("+c+") { ",l+="}"));return i&&(t+=u?" if (true) { ":" "+l.slice(0,-1)+" "),t=e.util.cleanUpCode(t)}},{}],19:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.level,s=e.dataLevel,o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),n=e.errSchemaPath+"/"+r,l=!e.opts.allErrors,c="data"+(s||""),h="valid"+a,u="errs__"+a,f=e.util.copy(e),d="";f.level++;var p="valid"+f.level;if(o.every(function(r){return e.util.schemaHasRules(r,e.RULES.all)})){var m=f.baseId;t+=" var "+u+" = errors; var "+h+" = false;  ";var v=e.compositeRule;e.compositeRule=f.compositeRule=!0;var y=o;if(y)for(var g,P=-1,E=y.length-1;P<E;)g=y[P+=1],f.schema=g,f.schemaPath=i+"["+P+"]",f.errSchemaPath=n+"/"+P,t+="  "+e.validate(f)+" ",f.baseId=m,t+=" "+h+" = "+h+" || "+p+"; if (!"+h+") { ",d+="}";e.compositeRule=f.compositeRule=v,t+=" "+d+" if (!"+h+") {  var err =   ",!1!==e.createErrors?(t+=" { keyword: 'anyOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: {} ",!1!==e.opts.messages&&(t+=" , message: 'should match some schema in anyOf' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ",t+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else {  errors = "+u+"; if (vErrors !== null) { if ("+u+") vErrors.length = "+u+"; else vErrors = null; } ",e.opts.allErrors&&(t+=" } "),t=e.util.cleanUpCode(t)}else l&&(t+=" if (true) { ");return t}},{}],20:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.level,s=e.dataLevel,o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),n=e.errSchemaPath+"/"+r,l=!e.opts.allErrors,c="data"+(s||""),h="valid"+a,u=e.opts.v5&&o&&o.$data;u&&(t+=" var schema"+a+" = "+e.util.getData(o.$data,s,e.dataPathArr)+"; "),u||(t+=" var schema"+a+" = validate.schema"+i+";"),t+="var "+h+" = equal("+c+", schema"+a+"); if (!"+h+") {   ";var f=f||[];f.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'constant' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: {} ",!1!==e.opts.messages&&(t+=" , message: 'should be equal to constant' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var d=t;return t=f.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+d+"]); ":" validate.errors = ["+d+"]; return false; ":" var err = "+d+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" }"}},{}],21:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,u="data"+(i||""),f="valid"+o,d="errs__"+o,p=e.opts.v5&&n&&n.$data;p?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n;var m,v,y,g,P,E=this,b="definition"+o,w=E.definition;if(p&&w.$data){P="keywordValidate"+o;var j=w.validateSchema;s+=" var "+b+" = RULES.custom['"+r+"'].definition; var "+P+" = "+b+".validate;"}else g=e.useCustomRule(E,n,e.schema,e),a="validate.schema"+l,P=g.code,m=w.compile,v=w.inline,y=w.macro;var S=P+".errors",$="i"+o,x="ruleErr"+o,_=w.async;if(_&&!e.async)throw new Error("async keyword in sync schema");if(v||y||(s+=S+" = null;"),s+="var "+d+" = errors;var "+f+";",j&&(s+=" "+f+" = "+b+".validateSchema("+a+"); if ("+f+") {"),v)s+=w.statements?" "+g.validate+" ":" "+f+" = "+g.validate+"; ";else if(y){var O=e.util.copy(e);O.level++;var R="valid"+O.level;O.schema=g.validate,O.schemaPath="";var I=e.compositeRule;e.compositeRule=O.compositeRule=!0;var A=e.validate(O).replace(/validate\.schema/g,P);e.compositeRule=O.compositeRule=I,s+=" "+A}else{var k=k||[];k.push(s),s="",s+="  "+P+".call( ",s+=e.opts.passContext?"this":"self",s+=m||!1===w.schema?" , "+u+" ":" , "+a+" , "+u+" , validate.schema"+e.schemaPath+" ",s+=" , (dataPath || '')",'""'!=e.errorPath&&(s+=" + "+e.errorPath);var q=i?"data"+(i-1||""):"parentData",D=i?e.dataPathArr[i]:"parentDataProperty";s+=" , "+q+" , "+D+" , rootData )  ";var L=s;s=k.pop(),!1===w.errors?(s+=" "+f+" = ",_&&(s+=""+e.yieldAwait),s+=L+"; "):_?(S="customErrors"+o,s+=" var "+S+" = null; try { "+f+" = "+e.yieldAwait+L+"; } catch (e) { "+f+" = false; if (e instanceof ValidationError) "+S+" = e.errors; else throw e; } "):s+=" "+S+" = null; "+f+" = "+L+"; "}if(w.modifying&&(s+=" "+u+" = "+q+"["+D+"];"),j&&(s+=" }"),w.valid)h&&(s+=" if (true) { ");else{s+=" if ( ",void 0===w.valid?(s+=" !",s+=y?""+R:""+f):s+=" "+!w.valid+" ",s+=") { ",t=E.keyword;var k=k||[];k.push(s),s="";var k=k||[];k.push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(t||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { keyword: '"+E.keyword+"' } ",!1!==e.opts.messages&&(s+=" , message: 'should pass \""+E.keyword+"\" keyword validation' "),e.opts.verbose&&(s+=" , schema: validate.schema"+l+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),s+=" } "):s+=" {} ";var Q=s;s=k.pop(),s+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+Q+"]); ":" validate.errors = ["+Q+"]; return false; ":" var err = "+Q+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";var C=s;s=k.pop(),v?w.errors?"full"!=w.errors&&(s+="  for (var "+$+"="+d+"; "+$+"<errors; "+$+"++) { var "+x+" = vErrors["+$+"]; if ("+x+".dataPath === undefined) "+x+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+x+".schemaPath === undefined) { "+x+'.schemaPath = "'+c+'"; } ',e.opts.verbose&&(s+=" "+x+".schema = "+a+"; "+x+".data = "+u+"; "),s+=" } "):!1===w.errors?s+=" "+C+" ":(s+=" if ("+d+" == errors) { "+C+" } else {  for (var "+$+"="+d+"; "+$+"<errors; "+$+"++) { var "+x+" = vErrors["+$+"]; if ("+x+".dataPath === undefined) "+x+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+x+".schemaPath === undefined) { "+x+'.schemaPath = "'+c+'"; } ',e.opts.verbose&&(s+=" "+x+".schema = "+a+"; "+x+".data = "+u+"; "),s+=" } } "):y?(s+="   var err =   ",!1!==e.createErrors?(s+=" { keyword: '"+(t||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { keyword: '"+E.keyword+"' } ",!1!==e.opts.messages&&(s+=" , message: 'should pass \""+E.keyword+"\" keyword validation' "),e.opts.verbose&&(s+=" , schema: validate.schema"+l+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),s+=" } "):s+=" {} ",s+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&h&&(s+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; ")):!1===w.errors?s+=" "+C+" ":(s+=" if (Array.isArray("+S+")) { if (vErrors === null) vErrors = "+S+"; else vErrors = vErrors.concat("+S+"); errors = vErrors.length;  for (var "+$+"="+d+"; "+$+"<errors; "+$+"++) { var "+x+" = vErrors["+$+"]; if ("+x+".dataPath === undefined) "+x+".dataPath = (dataPath || '') + "+e.errorPath+";  "+x+'.schemaPath = "'+c+'";  ',e.opts.verbose&&(s+=" "+x+".schema = "+a+"; "+x+".data = "+u+"; "),s+=" } } else { "+C+" } "),s+=" } ",h&&(s+=" else { ")}return s}},{}],22:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.level,s=e.dataLevel,o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),n=e.errSchemaPath+"/"+r,l=!e.opts.allErrors,c="data"+(s||""),h="errs__"+a,u=e.util.copy(e),f="";u.level++;var d="valid"+u.level,p={},m={};for(P in o){var v=o[P],y=Array.isArray(v)?m:p;y[P]=v}t+="var "+h+" = errors;";var g=e.errorPath;t+="var missing"+a+";";for(var P in m){if(y=m[P],t+=" if ("+c+e.util.getProperty(P)+" !== undefined ",l){t+=" && ( ";var E=y;if(E)for(var b,w=-1,j=E.length-1;w<j;){b=E[w+=1],w&&(t+=" || ");var S=e.util.getProperty(b);t+=" ( "+c+S+" === undefined && (missing"+a+" = "+e.util.toQuotedString(e.opts.jsonPointers?b:S)+") ) "}t+=")) {  ";var $="missing"+a,x="' + "+$+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(g,$,!0):g+" + "+$);var _=_||[];_.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { property: '"+e.util.escapeQuotes(P)+"', missingProperty: '"+x+"', depsCount: "+y.length+", deps: '"+e.util.escapeQuotes(1==y.length?y[0]:y.join(", "))+"' } ",!1!==e.opts.messages&&(t+=" , message: 'should have ",t+=1==y.length?"property "+e.util.escapeQuotes(y[0]):"properties "+e.util.escapeQuotes(y.join(", ")),t+=" when property "+e.util.escapeQuotes(P)+" is present' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var O=t;t=_.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+O+"]); ":" validate.errors = ["+O+"]; return false; ":" var err = "+O+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}else{t+=" ) { ";var R=y;if(R)for(var I,A=-1,k=R.length-1;A<k;){I=R[A+=1];var S=e.util.getProperty(I),x=e.util.escapeQuotes(I);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(g,I,e.opts.jsonPointers)),t+=" if ("+c+S+" === undefined) {  var err =   ",!1!==e.createErrors?(t+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { property: '"+e.util.escapeQuotes(P)+"', missingProperty: '"+x+"', depsCount: "+y.length+", deps: '"+e.util.escapeQuotes(1==y.length?y[0]:y.join(", "))+"' } ",!1!==e.opts.messages&&(t+=" , message: 'should have ",t+=1==y.length?"property "+e.util.escapeQuotes(y[0]):"properties "+e.util.escapeQuotes(y.join(", ")),t+=" when property "+e.util.escapeQuotes(P)+" is present' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ",t+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "}}t+=" }   ",l&&(f+="}",t+=" else { ")}e.errorPath=g;var q=u.baseId;for(var P in p){var v=p[P];e.util.schemaHasRules(v,e.RULES.all)&&(t+=" "+d+" = true; if ("+c+e.util.getProperty(P)+" !== undefined) { ",u.schema=v,u.schemaPath=i+e.util.getProperty(P),u.errSchemaPath=n+"/"+e.util.escapeFragment(P),t+="  "+e.validate(u)+" ",u.baseId=q,t+=" }  ",l&&(t+=" if ("+d+") { ",f+="}"))}return l&&(t+="   "+f+" if ("+h+" == errors) {"),t=e.util.cleanUpCode(t)}},{}],23:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.level,s=e.dataLevel,o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),n=e.errSchemaPath+"/"+r,l=!e.opts.allErrors,c="data"+(s||""),h="valid"+a,u=e.opts.v5&&o&&o.$data;u&&(t+=" var schema"+a+" = "+e.util.getData(o.$data,s,e.dataPathArr)+"; ");var f="i"+a,d="schema"+a;u||(t+=" var "+d+" = validate.schema"+i+";"),t+="var "+h+";",u&&(t+=" if (schema"+a+" === undefined) "+h+" = true; else if (!Array.isArray(schema"+a+")) "+h+" = false; else {"),t+=h+" = false;for (var "+f+"=0; "+f+"<"+d+".length; "+f+"++) if (equal("+c+", "+d+"["+f+"])) { "+h+" = true; break; }",u&&(t+="  }  "),t+=" if (!"+h+") {   ";var p=p||[];p.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'enum' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { allowedValues: schema"+a+" } ",!1!==e.opts.messages&&(t+=" , message: 'should be equal to one of the allowed values' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var m=t;return t=p.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" }",l&&(t+=" else { "),t}},{}],24:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.level,s=e.dataLevel,o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),n=e.errSchemaPath+"/"+r,l=!e.opts.allErrors,c="data"+(s||"");if(!1===e.opts.format)return l&&(t+=" if (true) { "),t;var h,u=e.opts.v5&&o&&o.$data;u?(t+=" var schema"+a+" = "+e.util.getData(o.$data,s,e.dataPathArr)+"; ",h="schema"+a):h=o;var f=e.opts.unknownFormats,d=Array.isArray(f);if(u){var p="format"+a;t+=" var "+p+" = formats["+h+"]; var isObject"+a+" = typeof "+p+" == 'object' && !("+p+" instanceof RegExp) && "+p+".validate; if (isObject"+a+") { ",e.async&&(t+=" var async"+a+" = "+p+".async; "),t+=" "+p+" = "+p+".validate; } if (  ",u&&(t+=" ("+h+" !== undefined && typeof "+h+" != 'string') || "),t+=" (",(!0===f||d)&&(t+=" ("+h+" && !"+p+" ",d&&(t+=" && self._opts.unknownFormats.indexOf("+h+") == -1 "),t+=") || "),t+=" ("+p+" && !(typeof "+p+" == 'function' ? ",t+=e.async?" (async"+a+" ? "+e.yieldAwait+" "+p+"("+c+") : "+p+"("+c+")) ":" "+p+"("+c+") ",t+=" : "+p+".test("+c+"))))) {"}else{var p=e.formats[o];if(!p){if(!0===f||d&&-1==f.indexOf(o))throw new Error('unknown format "'+o+'" is used in schema at path "'+e.errSchemaPath+'"');return d||(console.warn('unknown format "'+o+'" ignored in schema at path "'+e.errSchemaPath+'"'),"ignore"!==f&&console.warn("In the next major version it will throw exception. See option unknownFormats for more information")),l&&(t+=" if (true) { "),t}var m="object"==typeof p&&!(p instanceof RegExp)&&p.validate;if(m){var v=!0===p.async;p=p.validate}if(v){if(!e.async)throw new Error("async format in sync schema");var y="formats"+e.util.getProperty(o)+".validate";t+=" if (!("+e.yieldAwait+" "+y+"("+c+"))) { "}else{t+=" if (! ";var y="formats"+e.util.getProperty(o);m&&(y+=".validate"),t+="function"==typeof p?" "+y+"("+c+") ":" "+y+".test("+c+") ",t+=") { "}}var g=g||[];g.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'format' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { format:  ",t+=u?""+h:""+e.util.toQuotedString(o),t+="  } ",!1!==e.opts.messages&&(t+=" , message: 'should match format \"",t+=u?"' + "+h+" + '":""+e.util.escapeQuotes(o),t+="\"' "),e.opts.verbose&&(t+=" , schema:  ",t+=u?"validate.schema"+i:""+e.util.toQuotedString(o),t+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var P=t;return t=g.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+P+"]); ":" validate.errors = ["+P+"]; return false; ":" var err = "+P+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" } ",l&&(t+=" else { "),t}},{}],25:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.level,s=e.dataLevel,o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),n=e.errSchemaPath+"/"+r,l=!e.opts.allErrors,c="data"+(s||""),h="valid"+a,u="errs__"+a,f=e.util.copy(e),d="";f.level++;var p="valid"+f.level,m="i"+a,v=f.dataLevel=e.dataLevel+1,y="data"+v,g=e.baseId;if(t+="var "+u+" = errors;var "+h+";",Array.isArray(o)){var P=e.schema.additionalItems;if(!1===P){t+=" "+h+" = "+c+".length <= "+o.length+"; ";var E=n;n=e.errSchemaPath+"/additionalItems",t+="  if (!"+h+") {   ";var b=b||[];b.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'additionalItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { limit: "+o.length+" } ",!1!==e.opts.messages&&(t+=" , message: 'should NOT have more than "+o.length+" items' "),e.opts.verbose&&(t+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var w=t;t=b.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+w+"]); ":" validate.errors = ["+w+"]; return false; ":" var err = "+w+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" } ",n=E,l&&(d+="}",t+=" else { ")}var j=o;if(j)for(var S,$=-1,x=j.length-1;$<x;)if(S=j[$+=1],e.util.schemaHasRules(S,e.RULES.all)){t+=" "+p+" = true; if ("+c+".length > "+$+") { ";var _=c+"["+$+"]";f.schema=S,f.schemaPath=i+"["+$+"]",f.errSchemaPath=n+"/"+$,f.errorPath=e.util.getPathExpr(e.errorPath,$,e.opts.jsonPointers,!0),f.dataPathArr[v]=$;var O=e.validate(f);f.baseId=g,e.util.varOccurences(O,y)<2?t+=" "+e.util.varReplace(O,y,_)+" ":t+=" var "+y+" = "+_+"; "+O+" ",t+=" }  ",l&&(t+=" if ("+p+") { ",d+="}")}if("object"==typeof P&&e.util.schemaHasRules(P,e.RULES.all)){f.schema=P,f.schemaPath=e.schemaPath+".additionalItems",f.errSchemaPath=e.errSchemaPath+"/additionalItems",t+=" "+p+" = true; if ("+c+".length > "+o.length+") {  for (var "+m+" = "+o.length+"; "+m+" < "+c+".length; "+m+"++) { ",f.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers,!0);var _=c+"["+m+"]";f.dataPathArr[v]=m;var O=e.validate(f);f.baseId=g,e.util.varOccurences(O,y)<2?t+=" "+e.util.varReplace(O,y,_)+" ":t+=" var "+y+" = "+_+"; "+O+" ",l&&(t+=" if (!"+p+") break; "),t+=" } }  ",l&&(t+=" if ("+p+") { ",d+="}")}}else if(e.util.schemaHasRules(o,e.RULES.all)){f.schema=o,f.schemaPath=i,f.errSchemaPath=n,t+="  for (var "+m+" = 0; "+m+" < "+c+".length; "+m+"++) { ",f.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers,!0);var _=c+"["+m+"]";f.dataPathArr[v]=m;var O=e.validate(f);f.baseId=g,e.util.varOccurences(O,y)<2?t+=" "+e.util.varReplace(O,y,_)+" ":t+=" var "+y+" = "+_+"; "+O+" ",l&&(t+=" if (!"+p+") break; "),t+=" }  ",l&&(t+=" if ("+p+") { ",d+="}")}return l&&(t+=" "+d+" if ("+u+" == errors) {"),t=e.util.cleanUpCode(t)}},{}],26:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u=e.opts.v5&&i&&i.$data;u?(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",t="schema"+s):t=i,a+="var division"+s+";if (",u&&(a+=" "+t+" !== undefined && ( typeof "+t+" != 'number' || "),a+=" (division"+s+" = "+h+" / "+t+", ",a+=e.opts.multipleOfPrecision?" Math.abs(Math.round(division"+s+") - division"+s+") > 1e-"+e.opts.multipleOfPrecision+" ":" division"+s+" !== parseInt(division"+s+") ",a+=" ) ",u&&(a+="  )  "),a+=" ) {   ";var f=f||[];f.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'multipleOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { multipleOf: "+t+" } ",!1!==e.opts.messages&&(a+=" , message: 'should be multiple of ",a+=u?"' + "+t:i+"'"),e.opts.verbose&&(a+=" , schema:  ",a+=u?"validate.schema"+n:""+i,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var d=a;return a=f.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+d+"]); ":" validate.errors = ["+d+"]; return false; ":" var err = "+d+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} ",c&&(a+=" else { "),a}},{}],27:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.level,s=e.dataLevel,o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),n=e.errSchemaPath+"/"+r,l=!e.opts.allErrors,c="data"+(s||""),h="errs__"+a,u=e.util.copy(e);u.level++;var f="valid"+u.level;if(e.util.schemaHasRules(o,e.RULES.all)){u.schema=o,u.schemaPath=i,u.errSchemaPath=n,t+=" var "+h+" = errors;  ";var d=e.compositeRule;e.compositeRule=u.compositeRule=!0,u.createErrors=!1;var p;u.opts.allErrors&&(p=u.opts.allErrors,u.opts.allErrors=!1),t+=" "+e.validate(u)+" ",u.createErrors=!0,p&&(u.opts.allErrors=p),e.compositeRule=u.compositeRule=d,t+=" if ("+f+") {   ";var m=m||[];m.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: {} ",!1!==e.opts.messages&&(t+=" , message: 'should NOT be valid' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var v=t;t=m.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+v+"]); ":" validate.errors = ["+v+"]; return false; ":" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" } else {  errors = "+h+"; if (vErrors !== null) { if ("+h+") vErrors.length = "+h+"; else vErrors = null; } ",e.opts.allErrors&&(t+=" } ")}else t+="  var err =   ",!1!==e.createErrors?(t+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: {} ",!1!==e.opts.messages&&(t+=" , message: 'should NOT be valid' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ",t+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",l&&(t+=" if (false) { ");return t}},{}],28:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.level,s=e.dataLevel,o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),n=e.errSchemaPath+"/"+r,l=!e.opts.allErrors,c="data"+(s||""),h="valid"+a,u="errs__"+a,f=e.util.copy(e),d="";f.level++;var p="valid"+f.level;t+="var "+u+" = errors;var prevValid"+a+" = false;var "+h+" = false;";var m=f.baseId,v=e.compositeRule;e.compositeRule=f.compositeRule=!0;var y=o;if(y)for(var g,P=-1,E=y.length-1;P<E;)g=y[P+=1],e.util.schemaHasRules(g,e.RULES.all)?(f.schema=g,f.schemaPath=i+"["+P+"]",f.errSchemaPath=n+"/"+P,t+="  "+e.validate(f)+" ",f.baseId=m):t+=" var "+p+" = true; ",P&&(t+=" if ("+p+" && prevValid"+a+") "+h+" = false; else { ",d+="}"),t+=" if ("+p+") "+h+" = prevValid"+a+" = true;";e.compositeRule=f.compositeRule=v,t+=d+"if (!"+h+") {   ";var b=b||[];b.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'oneOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: {} ",!1!==e.opts.messages&&(t+=" , message: 'should match exactly one schema in oneOf' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var w=t;return t=b.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+w+"]); ":" validate.errors = ["+w+"]; return false; ":" var err = "+w+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+="} else {  errors = "+u+"; if (vErrors !== null) { if ("+u+") vErrors.length = "+u+"; else vErrors = null; }",e.opts.allErrors&&(t+=" } "),t}},{}],29:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u=e.opts.v5&&i&&i.$data;u?(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",t="schema"+s):t=i;var f=u?"(new RegExp("+t+"))":e.usePattern(i);a+="if ( ",u&&(a+=" ("+t+" !== undefined && typeof "+t+" != 'string') || "),a+=" !"+f+".test("+h+") ) {   ";var d=d||[];d.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'pattern' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { pattern:  ",a+=u?""+t:""+e.util.toQuotedString(i),a+="  } ",!1!==e.opts.messages&&(a+=" , message: 'should match pattern \"",a+=u?"' + "+t+" + '":""+e.util.escapeQuotes(i),a+="\"' "),e.opts.verbose&&(a+=" , schema:  ",a+=u?"validate.schema"+n:""+e.util.toQuotedString(i),a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var p=a;return a=d.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+p+"]); ":" validate.errors = ["+p+"]; return false; ":" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} ",c&&(a+=" else { "),a}},{}],30:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.level,s=e.dataLevel,o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),n=e.errSchemaPath+"/"+r,l=!e.opts.allErrors,c="data"+(s||""),h="valid"+a,u="key"+a,f="patternMatched"+a,d="",p=e.opts.ownProperties;t+="var "+h+" = true;";var m=o;if(m)for(var v,y=-1,g=m.length-1;y<g;){v=m[y+=1],t+=" var "+f+" = false; for (var "+u+" in "+c+") {  ",p&&(t+=" if (!Object.prototype.hasOwnProperty.call("+c+", "+u+")) continue; "),t+=" "+f+" = "+e.usePattern(v)+".test("+u+"); if ("+f+") break; } ";var P=e.util.escapeQuotes(v);t+=" if (!"+f+") { "+h+" = false;  var err =   ",!1!==e.createErrors?(t+=" { keyword: 'patternRequired' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { missingPattern: '"+P+"' } ",!1!==e.opts.messages&&(t+=" , message: 'should have property matching pattern \\'"+P+"\\'' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ",t+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; }   ",l&&(d+="}",t+=" else { ")}return t+=""+d}},{}],31:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.level,s=e.dataLevel,o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),n=e.errSchemaPath+"/"+r,l=!e.opts.allErrors,c="data"+(s||""),h="valid"+a,u="errs__"+a,f=e.util.copy(e),d="";f.level++;var p="valid"+f.level,m="key"+a,v=f.dataLevel=e.dataLevel+1,y="data"+v,g=Object.keys(o||{}),P=e.schema.patternProperties||{},E=Object.keys(P),b=e.schema.additionalProperties,w=g.length||E.length,j=!1===b,S="object"==typeof b&&Object.keys(b).length,$=e.opts.removeAdditional,x=j||S||$,_=e.opts.ownProperties,O=e.baseId,R=e.schema.required;if(R&&(!e.opts.v5||!R.$data)&&R.length<e.opts.loopRequired)var I=e.util.toHash(R);if(e.opts.v5)var A=e.schema.patternGroups||{},k=Object.keys(A);if(t+="var "+u+" = errors;var "+p+" = true;",x){if(t+=" for (var "+m+" in "+c+") {  ",_&&(t+=" if (!Object.prototype.hasOwnProperty.call("+c+", "+m+")) continue; "),w){if(t+=" var isAdditional"+a+" = !(false ",g.length)if(g.length>5)t+=" || validate.schema"+i+"["+m+"] ";else{var q=g;if(q)for(var D,L=-1,Q=q.length-1;L<Q;)D=q[L+=1],t+=" || "+m+" == "+e.util.toQuotedString(D)+" "}if(E.length){var C=E;if(C)for(var V,z=-1,U=C.length-1;z<U;)V=C[z+=1],t+=" || "+e.usePattern(V)+".test("+m+") "}if(e.opts.v5&&k&&k.length){var T=k;if(T)for(var M,z=-1,N=T.length-1;z<N;)M=T[z+=1],t+=" || "+e.usePattern(M)+".test("+m+") "}t+=" ); if (isAdditional"+a+") { "}if("all"==$)t+=" delete "+c+"["+m+"]; ";else{var F=e.errorPath,H="' + "+m+" + '";if(e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers)),j)if($)t+=" delete "+c+"["+m+"]; ";else{t+=" "+p+" = false; ";var J=n;n=e.errSchemaPath+"/additionalProperties";var G=G||[];G.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'additionalProperties' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { additionalProperty: '"+H+"' } ",!1!==e.opts.messages&&(t+=" , message: 'should NOT have additional properties' "),e.opts.verbose&&(t+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var K=t;t=G.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+K+"]); ":" validate.errors = ["+K+"]; return false; ":" var err = "+K+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",n=J,l&&(t+=" break; ")}else if(S)if("failing"==$){t+=" var "+u+" = errors;  ";var B=e.compositeRule;e.compositeRule=f.compositeRule=!0,f.schema=b,f.schemaPath=e.schemaPath+".additionalProperties",f.errSchemaPath=e.errSchemaPath+"/additionalProperties",f.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);var Z=c+"["+m+"]";f.dataPathArr[v]=m;var Y=e.validate(f);f.baseId=O,e.util.varOccurences(Y,y)<2?t+=" "+e.util.varReplace(Y,y,Z)+" ":t+=" var "+y+" = "+Z+"; "+Y+" ",t+=" if (!"+p+") { errors = "+u+"; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete "+c+"["+m+"]; }  ",e.compositeRule=f.compositeRule=B}else{f.schema=b,f.schemaPath=e.schemaPath+".additionalProperties",f.errSchemaPath=e.errSchemaPath+"/additionalProperties",f.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);var Z=c+"["+m+"]";f.dataPathArr[v]=m;var Y=e.validate(f);f.baseId=O,e.util.varOccurences(Y,y)<2?t+=" "+e.util.varReplace(Y,y,Z)+" ":t+=" var "+y+" = "+Z+"; "+Y+" ",l&&(t+=" if (!"+p+") break; ")}e.errorPath=F}w&&(t+=" } "),t+=" }  ",l&&(t+=" if ("+p+") { ",d+="}")}var W=e.opts.useDefaults&&!e.compositeRule;if(g.length){var X=g;if(X)for(var D,ee=-1,re=X.length-1;ee<re;){D=X[ee+=1];var te=o[D];if(e.util.schemaHasRules(te,e.RULES.all)){var ae=e.util.getProperty(D),Z=c+ae,se=W&&void 0!==te.default;f.schema=te,f.schemaPath=i+ae,f.errSchemaPath=n+"/"+e.util.escapeFragment(D),f.errorPath=e.util.getPath(e.errorPath,D,e.opts.jsonPointers),f.dataPathArr[v]=e.util.toQuotedString(D);var Y=e.validate(f);if(f.baseId=O,e.util.varOccurences(Y,y)<2){Y=e.util.varReplace(Y,y,Z);var oe=Z}else{var oe=y;t+=" var "+y+" = "+Z+"; "}if(se)t+=" "+Y+" ";else{if(I&&I[D]){t+=" if ("+oe+" === undefined) { "+p+" = false; ";var F=e.errorPath,J=n,ie=e.util.escapeQuotes(D);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(F,D,e.opts.jsonPointers)),n=e.errSchemaPath+"/required";var G=G||[];G.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { missingProperty: '"+ie+"' } ",!1!==e.opts.messages&&(t+=" , message: '",t+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+ie+"\\'",t+="' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var K=t;t=G.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+K+"]); ":" validate.errors = ["+K+"]; return false; ":" var err = "+K+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",n=J,e.errorPath=F,t+=" } else { "}else t+=l?" if ("+oe+" === undefined) { "+p+" = true; } else { ":" if ("+oe+" !== undefined) { "
;t+=" "+Y+" } "}}l&&(t+=" if ("+p+") { ",d+="}")}}var ne=E;if(ne)for(var V,le=-1,ce=ne.length-1;le<ce;){V=ne[le+=1];var te=P[V];if(e.util.schemaHasRules(te,e.RULES.all)){f.schema=te,f.schemaPath=e.schemaPath+".patternProperties"+e.util.getProperty(V),f.errSchemaPath=e.errSchemaPath+"/patternProperties/"+e.util.escapeFragment(V),t+=" for (var "+m+" in "+c+") {  ",_&&(t+=" if (!Object.prototype.hasOwnProperty.call("+c+", "+m+")) continue; "),t+=" if ("+e.usePattern(V)+".test("+m+")) { ",f.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);var Z=c+"["+m+"]";f.dataPathArr[v]=m;var Y=e.validate(f);f.baseId=O,e.util.varOccurences(Y,y)<2?t+=" "+e.util.varReplace(Y,y,Z)+" ":t+=" var "+y+" = "+Z+"; "+Y+" ",l&&(t+=" if (!"+p+") break; "),t+=" } ",l&&(t+=" else "+p+" = true; "),t+=" }  ",l&&(t+=" if ("+p+") { ",d+="}")}}if(e.opts.v5){var he=k;if(he)for(var M,ue=-1,fe=he.length-1;ue<fe;){M=he[ue+=1];var de=A[M],te=de.schema;if(e.util.schemaHasRules(te,e.RULES.all)){f.schema=te,f.schemaPath=e.schemaPath+".patternGroups"+e.util.getProperty(M)+".schema",f.errSchemaPath=e.errSchemaPath+"/patternGroups/"+e.util.escapeFragment(M)+"/schema",t+=" var pgPropCount"+a+" = 0; for (var "+m+" in "+c+") {  ",_&&(t+=" if (!Object.prototype.hasOwnProperty.call("+c+", "+m+")) continue; "),t+=" if ("+e.usePattern(M)+".test("+m+")) { pgPropCount"+a+"++; ",f.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);var Z=c+"["+m+"]";f.dataPathArr[v]=m;var Y=e.validate(f);f.baseId=O,e.util.varOccurences(Y,y)<2?t+=" "+e.util.varReplace(Y,y,Z)+" ":t+=" var "+y+" = "+Z+"; "+Y+" ",l&&(t+=" if (!"+p+") break; "),t+=" } ",l&&(t+=" else "+p+" = true; "),t+=" }  ",l&&(t+=" if ("+p+") { ",d+="}");var pe=de.minimum,me=de.maximum;if(void 0!==pe||void 0!==me){t+=" var "+h+" = true; ";var J=n;if(void 0!==pe){var ve=pe,ye="minimum",ge="less";t+=" "+h+" = pgPropCount"+a+" >= "+pe+"; ",n=e.errSchemaPath+"/patternGroups/minimum",t+="  if (!"+h+") {   ";var G=G||[];G.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'patternGroups' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { reason: '"+ye+"', limit: "+ve+", pattern: '"+e.util.escapeQuotes(M)+"' } ",!1!==e.opts.messages&&(t+=" , message: 'should NOT have "+ge+" than "+ve+' properties matching pattern "'+e.util.escapeQuotes(M)+"\"' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var K=t;t=G.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+K+"]); ":" validate.errors = ["+K+"]; return false; ":" var err = "+K+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" } ",void 0!==me&&(t+=" else ")}if(void 0!==me){var ve=me,ye="maximum",ge="more";t+=" "+h+" = pgPropCount"+a+" <= "+me+"; ",n=e.errSchemaPath+"/patternGroups/maximum",t+="  if (!"+h+") {   ";var G=G||[];G.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'patternGroups' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { reason: '"+ye+"', limit: "+ve+", pattern: '"+e.util.escapeQuotes(M)+"' } ",!1!==e.opts.messages&&(t+=" , message: 'should NOT have "+ge+" than "+ve+' properties matching pattern "'+e.util.escapeQuotes(M)+"\"' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var K=t;t=G.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+K+"]); ":" validate.errors = ["+K+"]; return false; ":" var err = "+K+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" } "}n=J,l&&(t+=" if ("+h+") { ",d+="}")}}}}return l&&(t+=" "+d+" if ("+u+" == errors) {"),t=e.util.cleanUpCode(t)}},{}],32:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),u="valid"+o;if("#"==n||"#/"==n)e.isRoot?(t=e.async,a="validate"):(t=!0===e.root.schema.$async,a="root.refVal[0]");else{var f=e.resolveRef(e.baseId,n,e.isRoot);if(void 0===f){var d="can't resolve reference "+n+" from id "+e.baseId;if("fail"==e.opts.missingRefs){console.log(d);var p=p||[];p.push(s),s="",!1!==e.createErrors?(s+=" { keyword: '$ref' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { ref: '"+e.util.escapeQuotes(n)+"' } ",!1!==e.opts.messages&&(s+=" , message: 'can\\'t resolve reference "+e.util.escapeQuotes(n)+"' "),e.opts.verbose&&(s+=" , schema: "+e.util.toQuotedString(n)+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var m=s;s=p.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",c&&(s+=" if (false) { ")}else{if("ignore"!=e.opts.missingRefs){var v=new Error(d);throw v.missingRef=e.resolve.url(e.baseId,n),v.missingSchema=e.resolve.normalizeId(e.resolve.fullPath(v.missingRef)),v}console.log(d),c&&(s+=" if (true) { ")}}else if(f.inline){var y=e.util.copy(e);y.level++;var g="valid"+y.level;y.schema=f.schema,y.schemaPath="",y.errSchemaPath=n;var P=e.validate(y).replace(/validate\.schema/g,f.code);s+=" "+P+" ",c&&(s+=" if ("+g+") { ")}else t=!0===f.$async,a=f.code}if(a){var p=p||[];p.push(s),s="",s+=e.opts.passContext?" "+a+".call(this, ":" "+a+"( ",s+=" "+h+", (dataPath || '')",'""'!=e.errorPath&&(s+=" + "+e.errorPath);s+=" , "+(i?"data"+(i-1||""):"parentData")+" , "+(i?e.dataPathArr[i]:"parentDataProperty")+", rootData)  ";var E=s;if(s=p.pop(),t){if(!e.async)throw new Error("async schema referenced by sync schema");s+=" try { ",c&&(s+="var "+u+" ="),s+=" "+e.yieldAwait+" "+E+"; } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; } ",c&&(s+=" if ("+u+") { ")}else s+=" if (!"+E+") { if (vErrors === null) vErrors = "+a+".errors; else vErrors = vErrors.concat("+a+".errors); errors = vErrors.length; } ",c&&(s+=" else { ")}return s}},{}],33:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.level,s=e.dataLevel,o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),n=e.errSchemaPath+"/"+r,l=!e.opts.allErrors,c="data"+(s||""),h="valid"+a,u=e.opts.v5&&o&&o.$data;u&&(t+=" var schema"+a+" = "+e.util.getData(o.$data,s,e.dataPathArr)+"; ");var f="schema"+a;if(!u)if(o.length<e.opts.loopRequired&&e.schema.properties&&Object.keys(e.schema.properties).length){var d=[],p=o;if(p)for(var m,v=-1,y=p.length-1;v<y;){m=p[v+=1];var g=e.schema.properties[m];g&&e.util.schemaHasRules(g,e.RULES.all)||(d[d.length]=m)}}else var d=o;if(u||d.length){var P=e.errorPath,E=u||d.length>=e.opts.loopRequired;if(l)if(t+=" var missing"+a+"; ",E){u||(t+=" var "+f+" = validate.schema"+i+"; ");var b="i"+a,w="schema"+a+"["+b+"]",j="' + "+w+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(P,w,e.opts.jsonPointers)),t+=" var "+h+" = true; ",u&&(t+=" if (schema"+a+" === undefined) "+h+" = true; else if (!Array.isArray(schema"+a+")) "+h+" = false; else {"),t+=" for (var "+b+" = 0; "+b+" < "+f+".length; "+b+"++) { "+h+" = "+c+"["+f+"["+b+"]] !== undefined; if (!"+h+") break; } ",u&&(t+="  }  "),t+="  if (!"+h+") {   ";var S=S||[];S.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { missingProperty: '"+j+"' } ",!1!==e.opts.messages&&(t+=" , message: '",t+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+j+"\\'",t+="' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var $=t;t=S.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+$+"]); ":" validate.errors = ["+$+"]; return false; ":" var err = "+$+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" } else { "}else{t+=" if ( ";var x=d;if(x)for(var _,b=-1,O=x.length-1;b<O;){_=x[b+=1],b&&(t+=" || ");var R=e.util.getProperty(_);t+=" ( "+c+R+" === undefined && (missing"+a+" = "+e.util.toQuotedString(e.opts.jsonPointers?_:R)+") ) "}t+=") {  ";var w="missing"+a,j="' + "+w+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(P,w,!0):P+" + "+w);var S=S||[];S.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { missingProperty: '"+j+"' } ",!1!==e.opts.messages&&(t+=" , message: '",t+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+j+"\\'",t+="' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var $=t;t=S.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+$+"]); ":" validate.errors = ["+$+"]; return false; ":" var err = "+$+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" } else { "}else if(E){u||(t+=" var "+f+" = validate.schema"+i+"; ");var b="i"+a,w="schema"+a+"["+b+"]",j="' + "+w+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(P,w,e.opts.jsonPointers)),u&&(t+=" if ("+f+" && !Array.isArray("+f+")) {  var err =   ",!1!==e.createErrors?(t+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { missingProperty: '"+j+"' } ",!1!==e.opts.messages&&(t+=" , message: '",t+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+j+"\\'",t+="' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ",t+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if ("+f+" !== undefined) { "),t+=" for (var "+b+" = 0; "+b+" < "+f+".length; "+b+"++) { if ("+c+"["+f+"["+b+"]] === undefined) {  var err =   ",!1!==e.createErrors?(t+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { missingProperty: '"+j+"' } ",!1!==e.opts.messages&&(t+=" , message: '",t+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+j+"\\'",t+="' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ",t+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ",u&&(t+="  }  ")}else{var I=d;if(I)for(var A,k=-1,q=I.length-1;k<q;){A=I[k+=1];var R=e.util.getProperty(A),j=e.util.escapeQuotes(A);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(P,A,e.opts.jsonPointers)),t+=" if ("+c+R+" === undefined) {  var err =   ",!1!==e.createErrors?(t+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { missingProperty: '"+j+"' } ",!1!==e.opts.messages&&(t+=" , message: '",t+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+j+"\\'",t+="' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ",t+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "}}e.errorPath=P}else l&&(t+=" if (true) {");return t}},{}],34:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.level,s=e.dataLevel,o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),n=e.errSchemaPath+"/"+r,l=!e.opts.allErrors,c="data"+(s||""),h="valid"+a,u="errs__"+a,f=e.util.copy(e),d="";f.level++;var p,m="valid"+f.level,v="ifPassed"+e.level,y=f.baseId;t+="var "+v+";";var g=o;if(g)for(var P,E=-1,b=g.length-1;E<b;){if(P=g[E+=1],E&&!p&&(t+=" if (!"+v+") { ",d+="}"),P.if&&e.util.schemaHasRules(P.if,e.RULES.all)){t+=" var "+u+" = errors;   ";var w=e.compositeRule;if(e.compositeRule=f.compositeRule=!0,f.createErrors=!1,f.schema=P.if,f.schemaPath=i+"["+E+"].if",f.errSchemaPath=n+"/"+E+"/if",t+="  "+e.validate(f)+" ",f.baseId=y,f.createErrors=!0,e.compositeRule=f.compositeRule=w,t+=" "+v+" = "+m+"; if ("+v+") {  ","boolean"==typeof P.then){if(!1===P.then){var j=j||[];j.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'switch' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { caseIndex: "+E+" } ",!1!==e.opts.messages&&(t+=" , message: 'should pass \"switch\" keyword validation' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var S=t;t=j.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+S+"]); ":" validate.errors = ["+S+"]; return false; ":" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}t+=" var "+m+" = "+P.then+"; "}else f.schema=P.then,f.schemaPath=i+"["+E+"].then",f.errSchemaPath=n+"/"+E+"/then",t+="  "+e.validate(f)+" ",f.baseId=y;t+="  } else {  errors = "+u+"; if (vErrors !== null) { if ("+u+") vErrors.length = "+u+"; else vErrors = null; } } "}else if(t+=" "+v+" = true;  ","boolean"==typeof P.then){if(!1===P.then){var j=j||[];j.push(t),t="",!1!==e.createErrors?(t+=" { keyword: 'switch' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(n)+" , params: { caseIndex: "+E+" } ",!1!==e.opts.messages&&(t+=" , message: 'should pass \"switch\" keyword validation' "),e.opts.verbose&&(t+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),t+=" } "):t+=" {} ";var S=t;t=j.pop(),t+=!e.compositeRule&&l?e.async?" throw new ValidationError(["+S+"]); ":" validate.errors = ["+S+"]; return false; ":" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}t+=" var "+m+" = "+P.then+"; "}else f.schema=P.then,f.schemaPath=i+"["+E+"].then",f.errSchemaPath=n+"/"+E+"/then",t+="  "+e.validate(f)+" ",f.baseId=y;p=P.continue}return t+=d+"var "+h+" = "+m+"; ",t=e.util.cleanUpCode(t)}},{}],35:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s,f=e.opts.v5&&i&&i.$data;if(f?(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",t="schema"+s):t=i,(i||f)&&!1!==e.opts.uniqueItems){f&&(a+=" var "+u+"; if ("+t+" === false || "+t+" === undefined) "+u+" = true; else if (typeof "+t+" != 'boolean') "+u+" = false; else { "),a+=" var "+u+" = true; if ("+h+".length > 1) { var i = "+h+".length, j; outer: for (;i--;) { for (j = i; j--;) { if (equal("+h+"[i], "+h+"[j])) { "+u+" = false; break outer; } } } } ",f&&(a+="  }  "),a+=" if (!"+u+") {   ";var d=d||[];d.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'uniqueItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { i: i, j: j } ",!1!==e.opts.messages&&(a+=" , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "),e.opts.verbose&&(a+=" , schema:  ",a+=f?"validate.schema"+n:""+i,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var p=a;a=d.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+p+"]); ":" validate.errors = ["+p+"]; return false; ":" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",c&&(a+=" else { ")}else c&&(a+=" if (true) { ");return a}},{}],36:[function(e,r,t){"use strict";r.exports=function(e,r){function t(r){return void 0!==e.schema[r.keyword]||"properties"==r.keyword&&(!1===e.schema.additionalProperties||"object"==typeof e.schema.additionalProperties||e.schema.patternProperties&&Object.keys(e.schema.patternProperties).length||e.opts.v5&&e.schema.patternGroups&&Object.keys(e.schema.patternGroups).length)}var a="",s=!0===e.schema.$async;if(e.isTop){var o=e.isTop,i=e.level=0,n=e.dataLevel=0,l="data";if(e.rootId=e.resolve.fullPath(e.root.schema.id),e.baseId=e.baseId||e.rootId,s){e.async=!0;var c="es7"==e.opts.async;e.yieldAwait=c?"await":"yield"}delete e.isTop,e.dataPathArr=[void 0],a+=" var validate = ",s?c?a+=" (async function ":("co*"==e.opts.async&&(a+="co.wrap"),a+="(function* "):a+=" (function ",a+=" (data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; var vErrors = null; ",a+=" var errors = 0;     ",a+=" if (rootData === undefined) rootData = data;"}else{var i=e.level,n=e.dataLevel,l="data"+(n||"");if(e.schema.id&&(e.baseId=e.resolve.url(e.baseId,e.schema.id)),s&&!e.async)throw new Error("async schema in sync schema");a+=" var errs_"+i+" = errors;"}var h="valid"+i,u=!e.opts.allErrors,f="",d="",p=e.schema.type,m=Array.isArray(p);if(p&&e.opts.coerceTypes){var v=e.util.coerceToTypes(e.opts.coerceTypes,p);if(v){var y=e.schemaPath+".type",g=e.errSchemaPath+"/type",P=m?"checkDataTypes":"checkDataType";a+=" if ("+e.util[P](p,l,!0)+") {  ";var E="dataType"+i,b="coerced"+i;a+=" var "+E+" = typeof "+l+"; ","array"==e.opts.coerceTypes&&(a+=" if ("+E+" == 'object' && Array.isArray("+l+")) "+E+" = 'array'; "),a+=" var "+b+" = undefined; ";var w="",j=v;if(j)for(var S,$=-1,x=j.length-1;$<x;)S=j[$+=1],$&&(a+=" if ("+b+" === undefined) { ",w+="}"),"array"==e.opts.coerceTypes&&"array"!=S&&(a+=" if ("+E+" == 'array' && "+l+".length == 1) { "+b+" = "+l+" = "+l+"[0]; "+E+" = typeof "+l+";  } "),"string"==S?a+=" if ("+E+" == 'number' || "+E+" == 'boolean') "+b+" = '' + "+l+"; else if ("+l+" === null) "+b+" = ''; ":"number"==S||"integer"==S?(a+=" if ("+E+" == 'boolean' || "+l+" === null || ("+E+" == 'string' && "+l+" && "+l+" == +"+l+" ","integer"==S&&(a+=" && !("+l+" % 1)"),a+=")) "+b+" = +"+l+"; "):"boolean"==S?a+=" if ("+l+" === 'false' || "+l+" === 0 || "+l+" === null) "+b+" = false; else if ("+l+" === 'true' || "+l+" === 1) "+b+" = true; ":"null"==S?a+=" if ("+l+" === '' || "+l+" === 0 || "+l+" === false) "+b+" = null; ":"array"==e.opts.coerceTypes&&"array"==S&&(a+=" if ("+E+" == 'string' || "+E+" == 'number' || "+E+" == 'boolean' || "+l+" == null) "+b+" = ["+l+"]; ");a+=" "+w+" if ("+b+" === undefined) {   ";var _=_||[];_.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'type' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(g)+" , params: { type: '",a+=m?""+p.join(","):""+p,a+="' } ",!1!==e.opts.messages&&(a+=" , message: 'should be ",a+=m?""+p.join(","):""+p,a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+y+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+l+" "),a+=" } "):a+=" {} ";var O=a;a=_.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+O+"]); ":" validate.errors = ["+O+"]; return false; ":" var err = "+O+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else {  ";var R=n?"data"+(n-1||""):"parentData",I=n?e.dataPathArr[n]:"parentDataProperty";a+=" "+l+" = "+b+"; ",n||(a+="if ("+R+" !== undefined)"),a+=" "+R+"["+I+"] = "+b+"; } } "}}var A;if(e.schema.$ref&&(A=e.util.schemaHasRulesExcept(e.schema,e.RULES.all,"$ref"))){if("fail"==e.opts.extendRefs)throw new Error('$ref: validation keywords used in schema at path "'+e.errSchemaPath+'"');"ignore"==e.opts.extendRefs?(A=!1,console.log('$ref: keywords ignored in schema at path "'+e.errSchemaPath+'"')):!0!==e.opts.extendRefs&&console.log('$ref: all keywords used in schema at path "'+e.errSchemaPath+'". It will change in the next major version, see issue #260. Use option { extendRefs: true } to keep current behaviour')}if(e.schema.$ref&&!A)a+=" "+e.RULES.all.$ref.code(e,"$ref")+" ",u&&(a+=" } if (errors === ",a+=o?"0":"errs_"+i,a+=") { ",d+="}");else{var k=e.RULES;if(k)for(var q,D=-1,L=k.length-1;D<L;)if(q=k[D+=1],function(e){for(var r=0;r<e.rules.length;r++)if(t(e.rules[r]))return!0}(q)){if(q.type&&(a+=" if ("+e.util.checkDataType(q.type,l)+") { "),e.opts.useDefaults&&!e.compositeRule)if("object"==q.type&&e.schema.properties){var Q=e.schema.properties,C=Object.keys(Q),V=C;if(V)for(var z,U=-1,T=V.length-1;U<T;){z=V[U+=1];var M=Q[z];if(void 0!==M.default){var N=l+e.util.getProperty(z);a+="  if ("+N+" === undefined) "+N+" = ",a+="shared"==e.opts.useDefaults?" "+e.useDefault(M.default)+" ":" "+JSON.stringify(M.default)+" ",a+="; "}}}else if("array"==q.type&&Array.isArray(e.schema.items)){var F=e.schema.items;if(F)for(var M,$=-1,H=F.length-1;$<H;)if(M=F[$+=1],void 0!==M.default){var N=l+"["+$+"]";a+="  if ("+N+" === undefined) "+N+" = ",a+="shared"==e.opts.useDefaults?" "+e.useDefault(M.default)+" ":" "+JSON.stringify(M.default)+" ",a+="; "}}var J=q.rules;if(J)for(var G,K=-1,B=J.length-1;K<B;)G=J[K+=1],t(G)&&(a+=" "+G.code(e,G.keyword)+" ",u&&(f+="}"));if(u&&(a+=" "+f+" ",f=""),q.type&&(a+=" } ",p&&p===q.type&&!v)){var Z=!0;a+=" else { ";var y=e.schemaPath+".type",g=e.errSchemaPath+"/type",_=_||[];_.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'type' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(g)+" , params: { type: '",a+=m?""+p.join(","):""+p,a+="' } ",!1!==e.opts.messages&&(a+=" , message: 'should be ",a+=m?""+p.join(","):""+p,a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+y+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+l+" "),a+=" } "):a+=" {} ";var O=a;a=_.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+O+"]); ":" validate.errors = ["+O+"]; return false; ":" var err = "+O+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } "}u&&(a+=" if (errors === ",a+=o?"0":"errs_"+i,a+=") { ",d+="}")}}if(p&&!Z&&!v){var y=e.schemaPath+".type",g=e.errSchemaPath+"/type",P=m?"checkDataTypes":"checkDataType";a+=" if ("+e.util[P](p,l,!0)+") {   ";var _=_||[];_.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'type' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(g)+" , params: { type: '",a+=m?""+p.join(","):""+p,a+="' } ",!1!==e.opts.messages&&(a+=" , message: 'should be ",a+=m?""+p.join(","):""+p,a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+y+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+l+" "),a+=" } "):a+=" {} ";var O=a;a=_.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+O+"]); ":" validate.errors = ["+O+"]; return false; ":" var err = "+O+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }"}return u&&(a+=" "+d+" "),o?(s?(a+=" if (errors === 0) return true;           ",a+=" else throw new ValidationError(vErrors); "):(a+=" validate.errors = vErrors; ",a+=" return errors === 0;       "),a+=" }); return validate;"):a+=" var "+h+" = errors === errs_"+i+";",a=e.util.cleanUpCode(a),o&&u&&(a=e.util.cleanUpVarErrors(a,s)),a}},{}],37:[function(e,r,t){"use strict";function a(e,r){function t(e,r,t){for(var a,o=0;o<s.length;o++){var i=s[o];if(i.type==r){a=i;break}}a||(a={type:r,rules:[]},s.push(a));var l={keyword:e,definition:t,custom:!0,code:n};a.rules.push(l),s.custom[e]=l}function a(e){if(!s.types[e])throw new Error("Unknown type "+e)}var s=this.RULES;if(s.keywords[e])throw new Error("Keyword "+e+" is already defined");if(!i.test(e))throw new Error("Keyword "+e+" is not a valid identifier");if(r){if(r.macro&&void 0!==r.valid)throw new Error('"valid" option cannot be used with macro keywords');var o=r.type;if(Array.isArray(o)){var l,c=o.length;for(l=0;l<c;l++)a(o[l]);for(l=0;l<c;l++)t(e,o[l],r)}else o&&a(o),t(e,o,r);var h=!0===r.$data&&this._opts.v5;if(h&&!r.validate)throw new Error('$data support: "validate" function is not defined');var u=r.metaSchema;u&&(h&&(u={anyOf:[u,{$ref:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#/definitions/$data"}]}),r.validateSchema=this.compile(u,!0))}s.keywords[e]=s.all[e]=!0}function s(e){var r=this.RULES.custom[e];return r?r.definition:this.RULES.keywords[e]||!1}function o(e){var r=this.RULES;delete r.keywords[e],delete r.all[e],delete r.custom[e];for(var t=0;t<r.length;t++)for(var a=r[t].rules,s=0;s<a.length;s++)if(a[s].keyword==e){a.splice(s,1);break}}var i=/^[a-z_$][a-z0-9_$\-]*$/i,n=e("./dotjs/custom");r.exports={add:a,get:s,remove:o}},{"./dotjs/custom":21}],38:[function(e,r,t){r.exports={id:"http://json-schema.org/draft-04/schema#",$schema:"http://json-schema.org/draft-04/schema#",description:"Core schema meta-schema",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},positiveInteger:{type:"integer",minimum:0},positiveIntegerDefault0:{allOf:[{$ref:"#/definitions/positiveInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},minItems:1,uniqueItems:!0}},type:"object",properties:{id:{type:"string",format:"uri"},$schema:{type:"string",format:"uri"},title:{type:"string"},description:{type:"string"},default:{},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0},maximum:{type:"number"},exclusiveMaximum:{type:"boolean",default:!1},minimum:{type:"number"},exclusiveMinimum:{type:"boolean",default:!1},maxLength:{$ref:"#/definitions/positiveInteger"},minLength:{$ref:"#/definitions/positiveIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{anyOf:[{type:"boolean"},{$ref:"#"}],default:{}},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:{}},maxItems:{$ref:"#/definitions/positiveInteger"},minItems:{$ref:"#/definitions/positiveIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},maxProperties:{$ref:"#/definitions/positiveInteger"},minProperties:{$ref:"#/definitions/positiveIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{anyOf:[{type:"boolean"},{$ref:"#"}],default:{}},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},enum:{type:"array",minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},dependencies:{exclusiveMaximum:["maximum"],exclusiveMinimum:["minimum"]},default:{}}},{}],39:[function(e,r,t){r.exports={id:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#",$schema:"http://json-schema.org/draft-04/schema#",description:"Core schema meta-schema (v5 proposals)",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},positiveInteger:{type:"integer",minimum:0},positiveIntegerDefault0:{allOf:[{$ref:"#/definitions/positiveInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},minItems:1,uniqueItems:!0},$data:{type:"object",required:["$data"],properties:{$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},additionalProperties:!1}},type:"object",properties:{id:{type:"string",format:"uri"},$schema:{type:"string",format:"uri"},title:{type:"string"},description:{type:"string"},default:{},multipleOf:{anyOf:[{type:"number",minimum:0,exclusiveMinimum:!0},{$ref:"#/definitions/$data"}]},maximum:{anyOf:[{type:"number"},{$ref:"#/definitions/$data"}]},exclusiveMaximum:{anyOf:[{type:"boolean",default:!1},{$ref:"#/definitions/$data"}]},minimum:{anyOf:[{type:"number"},{$ref:"#/definitions/$data"}]},exclusiveMinimum:{anyOf:[{type:"boolean",default:!1},{$ref:"#/definitions/$data"}]},maxLength:{anyOf:[{$ref:"#/definitions/positiveInteger"},{$ref:"#/definitions/$data"}]},minLength:{anyOf:[{$ref:"#/definitions/positiveIntegerDefault0"},{$ref:"#/definitions/$data"}]},pattern:{anyOf:[{type:"string",format:"regex"},{$ref:"#/definitions/$data"}]},additionalItems:{anyOf:[{type:"boolean"},{$ref:"#"},{$ref:"#/definitions/$data"}],default:{}},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:{}},maxItems:{anyOf:[{$ref:"#/definitions/positiveInteger"},{$ref:"#/definitions/$data"}]},minItems:{anyOf:[{$ref:"#/definitions/positiveIntegerDefault0"},{$ref:"#/definitions/$data"}]},uniqueItems:{anyOf:[{type:"boolean",default:!1},{$ref:"#/definitions/$data"}]},maxProperties:{anyOf:[{$ref:"#/definitions/positiveInteger"},{$ref:"#/definitions/$data"}]},minProperties:{anyOf:[{$ref:"#/definitions/positiveIntegerDefault0"},{$ref:"#/definitions/$data"}]},required:{anyOf:[{$ref:"#/definitions/stringArray"},{$ref:"#/definitions/$data"}]},additionalProperties:{anyOf:[{type:"boolean"},{$ref:"#"},{$ref:"#/definitions/$data"}],default:{}},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},enum:{anyOf:[{type:"array",minItems:1,uniqueItems:!0},{$ref:"#/definitions/$data"}]},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"},format:{anyOf:[{type:"string"},{$ref:"#/definitions/$data"}]},formatMaximum:{anyOf:[{type:"string"},{$ref:"#/definitions/$data"}]},formatMinimum:{anyOf:[{type:"string"},{$ref:"#/definitions/$data"}]},formatExclusiveMaximum:{anyOf:[{type:"boolean",default:!1},{$ref:"#/definitions/$data"}]},formatExclusiveMinimum:{anyOf:[{type:"boolean",default:!1},{$ref:"#/definitions/$data"}]},constant:{anyOf:[{},{$ref:"#/definitions/$data"}]},contains:{$ref:"#"},patternGroups:{type:"object",additionalProperties:{type:"object",required:["schema"],properties:{maximum:{anyOf:[{$ref:"#/definitions/positiveInteger"},{$ref:"#/definitions/$data"}]},minimum:{anyOf:[{$ref:"#/definitions/positiveIntegerDefault0"},{$ref:"#/definitions/$data"}]},schema:{$ref:"#"}},additionalProperties:!1},default:{}},switch:{type:"array",items:{required:["then"],properties:{if:{$ref:"#"},then:{anyOf:[{type:"boolean"},{$ref:"#"}]},continue:{type:"boolean"}},additionalProperties:!1,dependencies:{continue:["if"]}}}},dependencies:{exclusiveMaximum:["maximum"],exclusiveMinimum:["minimum"],formatMaximum:["format"],formatMinimum:["format"],formatExclusiveMaximum:["formatMaximum"],formatExclusiveMinimum:["formatMinimum"]},default:{}}},{}],40:[function(e,r,t){"use strict";function a(r){function t(e,t,s){var o={inline:s||a[e],statements:!0,errors:"full"};t&&(o.type=t),r.addKeyword(e,o)}var a={switch:e("./dotjs/switch"),constant:e("./dotjs/constant"),_formatLimit:e("./dotjs/_formatLimit"),patternRequired:e("./dotjs/patternRequired")};if(!1!==r._opts.meta){var i=e("./refs/json-schema-v5.json");r.addMetaSchema(i,o)}t("constant"),r.addKeyword("contains",{type:"array",macro:s}),t("formatMaximum","string",a._formatLimit),t("formatMinimum","string",a._formatLimit),r.addKeyword("formatExclusiveMaximum"),r.addKeyword("formatExclusiveMinimum"),r.addKeyword("patternGroups"),t("patternRequired","object"),t("switch")}function s(e){return{not:{items:{not:e}}}}var o="https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json";r.exports={enable:a,META_SCHEMA_ID:o}},{"./dotjs/_formatLimit":13,"./dotjs/constant":20,"./dotjs/patternRequired":30,"./dotjs/switch":34,"./refs/json-schema-v5.json":39}],
41:[function(e,r,t){function a(e){var r=this,t=f.call(arguments,1);return new Promise(function(a,o){function i(r){var t;try{t=e.next(r)}catch(e){return o(e)}c(t)}function n(r){var t;try{t=e.throw(r)}catch(e){return o(e)}c(t)}function c(e){if(e.done)return a(e.value);var t=s.call(r,e.value);return t&&l(t)?t.then(i,n):n(new TypeError('You may only yield a function, promise, generator, array, or object, but the following object was passed: "'+String(e.value)+'"'))}if("function"==typeof e&&(e=e.apply(r,t)),!e||"function"!=typeof e.next)return a(e);i()})}function s(e){return e?l(e)?e:h(e)||c(e)?a.call(this,e):"function"==typeof e?o.call(this,e):Array.isArray(e)?i.call(this,e):u(e)?n.call(this,e):e:e}function o(e){var r=this;return new Promise(function(t,a){e.call(r,function(e,r){if(e)return a(e);arguments.length>2&&(r=f.call(arguments,1)),t(r)})})}function i(e){return Promise.all(e.map(s,this))}function n(e){for(var r=new e.constructor,t=Object.keys(e),a=[],o=0;o<t.length;o++){var i=t[o],n=s.call(this,e[i]);n&&l(n)?function(e,t){r[t]=void 0,a.push(e.then(function(e){r[t]=e}))}(n,i):r[i]=e[i]}return Promise.all(a).then(function(){return r})}function l(e){return"function"==typeof e.then}function c(e){return"function"==typeof e.next&&"function"==typeof e.throw}function h(e){var r=e.constructor;return!!r&&("GeneratorFunction"===r.name||"GeneratorFunction"===r.displayName||c(r.prototype))}function u(e){return Object==e.constructor}var f=Array.prototype.slice;r.exports=a.default=a.co=a,a.wrap=function(e){function r(){return a.call(this,e.apply(this,arguments))}return r.__generatorFunction__=e,r}},{}],42:[function(e,r,t){var a="undefined"!=typeof JSON?JSON:e("jsonify");r.exports=function(e,r){r||(r={}),"function"==typeof r&&(r={cmp:r});var t=r.space||"";"number"==typeof t&&(t=Array(t+1).join(" "));var i="boolean"==typeof r.cycles&&r.cycles,n=r.replacer||function(e,r){return r},l=r.cmp&&function(e){return function(r){return function(t,a){return e({key:t,value:r[t]},{key:a,value:r[a]})}}}(r.cmp),c=[];return function e(r,h,u,f){var d=t?"\n"+new Array(f+1).join(t):"",p=t?": ":":";if(u&&u.toJSON&&"function"==typeof u.toJSON&&(u=u.toJSON()),void 0!==(u=n.call(r,h,u))){if("object"!=typeof u||null===u)return a.stringify(u);if(s(u)){for(var m=[],v=0;v<u.length;v++){var y=e(u,v,u[v],f+1)||a.stringify(null);m.push(d+t+y)}return"["+m.join(",")+d+"]"}if(-1!==c.indexOf(u)){if(i)return a.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}c.push(u);for(var g=o(u).sort(l&&l(u)),m=[],v=0;v<g.length;v++){var h=g[v],P=e(u,h,u[h],f+1);if(P){var E=a.stringify(h)+p+P;m.push(d+t+E)}}return c.splice(c.indexOf(u),1),"{"+m.join(",")+d+"}"}}({"":e},"",e,0)};var s=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},o=Object.keys||function(e){var r=Object.prototype.hasOwnProperty||function(){return!0},t=[];for(var a in e)r.call(e,a)&&t.push(a);return t}},{jsonify:43}],43:[function(e,r,t){t.parse=e("./lib/parse"),t.stringify=e("./lib/stringify")},{"./lib/parse":44,"./lib/stringify":45}],44:[function(e,r,t){var a,s,o,i,n={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},l=function(e){throw{name:"SyntaxError",message:e,at:a,text:o}},c=function(e){return e&&e!==s&&l("Expected '"+e+"' instead of '"+s+"'"),s=o.charAt(a),a+=1,s},h=function(){var e,r="";for("-"===s&&(r="-",c("-"));s>="0"&&s<="9";)r+=s,c();if("."===s)for(r+=".";c()&&s>="0"&&s<="9";)r+=s;if("e"===s||"E"===s)for(r+=s,c(),"-"!==s&&"+"!==s||(r+=s,c());s>="0"&&s<="9";)r+=s,c();if(e=+r,isFinite(e))return e;l("Bad number")},u=function(){var e,r,t,a="";if('"'===s)for(;c();){if('"'===s)return c(),a;if("\\"===s)if(c(),"u"===s){for(t=0,r=0;r<4&&(e=parseInt(c(),16),isFinite(e));r+=1)t=16*t+e;a+=String.fromCharCode(t)}else{if("string"!=typeof n[s])break;a+=n[s]}else a+=s}l("Bad string")},f=function(){for(;s&&s<=" ";)c()},d=function(){switch(s){case"t":return c("t"),c("r"),c("u"),c("e"),!0;case"f":return c("f"),c("a"),c("l"),c("s"),c("e"),!1;case"n":return c("n"),c("u"),c("l"),c("l"),null}l("Unexpected '"+s+"'")},p=function(){var e=[];if("["===s){if(c("["),f(),"]"===s)return c("]"),e;for(;s;){if(e.push(i()),f(),"]"===s)return c("]"),e;c(","),f()}}l("Bad array")},m=function(){var e,r={};if("{"===s){if(c("{"),f(),"}"===s)return c("}"),r;for(;s;){if(e=u(),f(),c(":"),Object.hasOwnProperty.call(r,e)&&l('Duplicate key "'+e+'"'),r[e]=i(),f(),"}"===s)return c("}"),r;c(","),f()}}l("Bad object")};i=function(){switch(f(),s){case"{":return m();case"[":return p();case'"':return u();case"-":return h();default:return s>="0"&&s<="9"?h():d()}},r.exports=function(e,r){var t;return o=e,a=0,s=" ",t=i(),f(),s&&l("Syntax error"),"function"==typeof r?function e(t,a){var s,o,i=t[a];if(i&&"object"==typeof i)for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(o=e(i,s),void 0!==o?i[s]=o:delete i[s]);return r.call(t,a,i)}({"":t},""):t}},{}],45:[function(e,r,t){function a(e){return l.lastIndex=0,l.test(e)?'"'+e.replace(l,function(e){var r=c[e];return"string"==typeof r?r:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function s(e,r){var t,l,c,h,u,f=o,d=r[e];switch(d&&"object"==typeof d&&"function"==typeof d.toJSON&&(d=d.toJSON(e)),"function"==typeof n&&(d=n.call(r,e,d)),typeof d){case"string":return a(d);case"number":return isFinite(d)?String(d):"null";case"boolean":case"null":return String(d);case"object":if(!d)return"null";if(o+=i,u=[],"[object Array]"===Object.prototype.toString.apply(d)){for(h=d.length,t=0;t<h;t+=1)u[t]=s(t,d)||"null";return c=0===u.length?"[]":o?"[\n"+o+u.join(",\n"+o)+"\n"+f+"]":"["+u.join(",")+"]",o=f,c}if(n&&"object"==typeof n)for(h=n.length,t=0;t<h;t+=1)"string"==typeof(l=n[t])&&(c=s(l,d))&&u.push(a(l)+(o?": ":":")+c);else for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(c=s(l,d))&&u.push(a(l)+(o?": ":":")+c);return c=0===u.length?"{}":o?"{\n"+o+u.join(",\n"+o)+"\n"+f+"}":"{"+u.join(",")+"}",o=f,c}}var o,i,n,l=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};r.exports=function(e,r,t){var a;if(o="",i="","number"==typeof t)for(a=0;a<t;a+=1)i+=" ";else"string"==typeof t&&(i=t);if(n=r,r&&"function"!=typeof r&&("object"!=typeof r||"number"!=typeof r.length))throw new Error("JSON.stringify");return s("",{"":e})}},{}],46:[function(r,t,a){(function(r){!function(s){function o(e){throw new RangeError(D[e])}function i(e,r){for(var t=e.length,a=[];t--;)a[t]=r(e[t]);return a}function n(e,r){var t=e.split("@"),a="";return t.length>1&&(a=t[0]+"@",e=t[1]),e=e.replace(q,"."),a+i(e.split("."),r).join(".")}function l(e){for(var r,t,a=[],s=0,o=e.length;s<o;)r=e.charCodeAt(s++),r>=55296&&r<=56319&&s<o?(t=e.charCodeAt(s++),56320==(64512&t)?a.push(((1023&r)<<10)+(1023&t)+65536):(a.push(r),s--)):a.push(r);return a}function c(e){return i(e,function(e){var r="";return e>65535&&(e-=65536,r+=C(e>>>10&1023|55296),e=56320|1023&e),r+=C(e)}).join("")}function h(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:j}function u(e,r){return e+22+75*(e<26)-((0!=r)<<5)}function f(e,r,t){var a=0;for(e=t?Q(e/_):e>>1,e+=Q(e/r);e>L*$>>1;a+=j)e=Q(e/L);return Q(a+(L+1)*e/(e+x))}function d(e){var r,t,a,s,i,n,l,u,d,p,m=[],v=e.length,y=0,g=R,P=O;for(t=e.lastIndexOf(I),t<0&&(t=0),a=0;a<t;++a)e.charCodeAt(a)>=128&&o("not-basic"),m.push(e.charCodeAt(a));for(s=t>0?t+1:0;s<v;){for(i=y,n=1,l=j;s>=v&&o("invalid-input"),u=h(e.charCodeAt(s++)),(u>=j||u>Q((w-y)/n))&&o("overflow"),y+=u*n,d=l<=P?S:l>=P+$?$:l-P,!(u<d);l+=j)p=j-d,n>Q(w/p)&&o("overflow"),n*=p;r=m.length+1,P=f(y-i,r,0==i),Q(y/r)>w-g&&o("overflow"),g+=Q(y/r),y%=r,m.splice(y++,0,g)}return c(m)}function p(e){var r,t,a,s,i,n,c,h,d,p,m,v,y,g,P,E=[];for(e=l(e),v=e.length,r=R,t=0,i=O,n=0;n<v;++n)(m=e[n])<128&&E.push(C(m));for(a=s=E.length,s&&E.push(I);a<v;){for(c=w,n=0;n<v;++n)(m=e[n])>=r&&m<c&&(c=m);for(y=a+1,c-r>Q((w-t)/y)&&o("overflow"),t+=(c-r)*y,r=c,n=0;n<v;++n)if(m=e[n],m<r&&++t>w&&o("overflow"),m==r){for(h=t,d=j;p=d<=i?S:d>=i+$?$:d-i,!(h<p);d+=j)P=h-p,g=j-p,E.push(C(u(p+P%g,0))),h=Q(P/g);E.push(C(u(h,0))),i=f(t,y,a==s),t=0,++a}++t,++r}return E.join("")}function m(e){return n(e,function(e){return A.test(e)?d(e.slice(4).toLowerCase()):e})}function v(e){return n(e,function(e){return k.test(e)?"xn--"+p(e):e})}var y="object"==typeof a&&a&&!a.nodeType&&a,g="object"==typeof t&&t&&!t.nodeType&&t,P="object"==typeof r&&r;P.global!==P&&P.window!==P&&P.self!==P||(s=P);var E,b,w=2147483647,j=36,S=1,$=26,x=38,_=700,O=72,R=128,I="-",A=/^xn--/,k=/[^\x20-\x7E]/,q=/[\x2E\u3002\uFF0E\uFF61]/g,D={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},L=j-S,Q=Math.floor,C=String.fromCharCode;if(E={version:"1.4.1",ucs2:{decode:l,encode:c},decode:d,encode:p,toASCII:v,toUnicode:m},"function"==typeof e&&"object"==typeof e.amd&&e.amd)e("punycode",function(){return E});else if(y&&g)if(t.exports==y)g.exports=E;else for(b in E)E.hasOwnProperty(b)&&(y[b]=E[b]);else s.punycode=E}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],47:[function(e,r,t){"use strict";function a(e,r){return Object.prototype.hasOwnProperty.call(e,r)}r.exports=function(e,r,t,o){r=r||"&",t=t||"=";var i={};if("string"!=typeof e||0===e.length)return i;e=e.split(r);var n=1e3;o&&"number"==typeof o.maxKeys&&(n=o.maxKeys);var l=e.length;n>0&&l>n&&(l=n);for(var c=0;c<l;++c){var h,u,f,d,p=e[c].replace(/\+/g,"%20"),m=p.indexOf(t);m>=0?(h=p.substr(0,m),u=p.substr(m+1)):(h=p,u=""),f=decodeURIComponent(h),d=decodeURIComponent(u),a(i,f)?s(i[f])?i[f].push(d):i[f]=[i[f],d]:i[f]=d}return i};var s=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],48:[function(e,r,t){"use strict";function a(e,r){if(e.map)return e.map(r);for(var t=[],a=0;a<e.length;a++)t.push(r(e[a],a));return t}var s=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};r.exports=function(e,r,t,n){return r=r||"&",t=t||"=",null===e&&(e=void 0),"object"==typeof e?a(i(e),function(i){var n=encodeURIComponent(s(i))+t;return o(e[i])?a(e[i],function(e){return n+encodeURIComponent(s(e))}).join(r):n+encodeURIComponent(s(e[i]))}).join(r):n?encodeURIComponent(s(n))+t+encodeURIComponent(s(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=Object.keys||function(e){var r=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r}},{}],49:[function(e,r,t){"use strict";t.decode=t.parse=e("./decode"),t.encode=t.stringify=e("./encode")},{"./decode":47,"./encode":48}],50:[function(e,r,t){"use strict";function a(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function s(e,r,t){if(e&&c.isObject(e)&&e instanceof a)return e;var s=new a;return s.parse(e,r,t),s}function o(e){return c.isString(e)&&(e=s(e)),e instanceof a?e.format():a.prototype.format.call(e)}function i(e,r){return s(e,!1,!0).resolve(r)}function n(e,r){return e?s(e,!1,!0).resolveObject(r):r}var l=e("punycode"),c=e("./util");t.parse=s,t.resolve=i,t.resolveObject=n,t.format=o,t.Url=a;var h=/^([a-z0-9.+-]+:)/i,u=/:[0-9]*$/,f=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,d=["<",">",'"',"`"," ","\r","\n","\t"],p=["{","}","|","\\","^","`"].concat(d),m=["'"].concat(p),v=["%","/","?",";","#"].concat(m),y=["/","?","#"],g={javascript:!0,"javascript:":!0},P={javascript:!0,"javascript:":!0},E={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},b=e("querystring");a.prototype.parse=function(e,r,t){if(!c.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var a=e.indexOf("?"),s=-1!==a&&a<e.indexOf("#")?"?":"#",o=e.split(s);o[0]=o[0].replace(/\\/g,"/"),e=o.join(s);var i=e;if(i=i.trim(),!t&&1===e.split("#").length){var n=f.exec(i);if(n)return this.path=i,this.href=i,this.pathname=n[1],n[2]?(this.search=n[2],this.query=r?b.parse(this.search.substr(1)):this.search.substr(1)):r&&(this.search="",this.query={}),this}var u=h.exec(i);if(u){u=u[0];var d=u.toLowerCase();this.protocol=d,i=i.substr(u.length)}if(t||u||i.match(/^\/\/[^@\/]+@[^@\/]+/)){var p="//"===i.substr(0,2);!p||u&&P[u]||(i=i.substr(2),this.slashes=!0)}if(!P[u]&&(p||u&&!E[u])){for(var w=-1,j=0;j<y.length;j++){var S=i.indexOf(y[j]);-1!==S&&(-1===w||S<w)&&(w=S)}var $,x;x=-1===w?i.lastIndexOf("@"):i.lastIndexOf("@",w),-1!==x&&($=i.slice(0,x),i=i.slice(x+1),this.auth=decodeURIComponent($)),w=-1;for(var j=0;j<v.length;j++){var S=i.indexOf(v[j]);-1!==S&&(-1===w||S<w)&&(w=S)}-1===w&&(w=i.length),this.host=i.slice(0,w),i=i.slice(w),this.parseHost(),this.hostname=this.hostname||"";var _="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!_)for(var O=this.hostname.split(/\./),j=0,R=O.length;j<R;j++){var I=O[j];if(I&&!I.match(/^[+a-z0-9A-Z_-]{0,63}$/)){for(var A="",k=0,q=I.length;k<q;k++)I.charCodeAt(k)>127?A+="x":A+=I[k];if(!A.match(/^[+a-z0-9A-Z_-]{0,63}$/)){var D=O.slice(0,j),L=O.slice(j+1),Q=I.match(/^([+a-z0-9A-Z_-]{0,63})(.*)$/);Q&&(D.push(Q[1]),L.unshift(Q[2])),L.length&&(i="/"+L.join(".")+i),this.hostname=D.join(".");break}}}this.hostname=this.hostname.length>255?"":this.hostname.toLowerCase(),_||(this.hostname=l.toASCII(this.hostname));var C=this.port?":"+this.port:"";this.host=(this.hostname||"")+C,this.href+=this.host,_&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==i[0]&&(i="/"+i))}if(!g[d])for(var j=0,R=m.length;j<R;j++){var V=m[j];if(-1!==i.indexOf(V)){var z=encodeURIComponent(V);z===V&&(z=escape(V)),i=i.split(V).join(z)}}var U=i.indexOf("#");-1!==U&&(this.hash=i.substr(U),i=i.slice(0,U));var T=i.indexOf("?");if(-1!==T?(this.search=i.substr(T),this.query=i.substr(T+1),r&&(this.query=b.parse(this.query)),i=i.slice(0,T)):r&&(this.search="",this.query={}),i&&(this.pathname=i),E[d]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var C=this.pathname||"";this.path=C+(this.search||"")}return this.href=this.format(),this},a.prototype.format=function(){var e=this.auth||"";e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@");var r=this.protocol||"",t=this.pathname||"",a=this.hash||"",s=!1,o="";this.host?s=e+this.host:this.hostname&&(s=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&c.isObject(this.query)&&Object.keys(this.query).length&&(o=b.stringify(this.query));var i=this.search||o&&"?"+o||"";return r&&":"!==r.substr(-1)&&(r+=":"),this.slashes||(!r||E[r])&&!1!==s?(s="//"+(s||""),t&&"/"!==t.charAt(0)&&(t="/"+t)):s||(s=""),a&&"#"!==a.charAt(0)&&(a="#"+a),i&&"?"!==i.charAt(0)&&(i="?"+i),t=t.replace(/[?#]/g,function(e){return encodeURIComponent(e)}),i=i.replace("#","%23"),r+s+t+i+a},a.prototype.resolve=function(e){return this.resolveObject(s(e,!1,!0)).format()},a.prototype.resolveObject=function(e){if(c.isString(e)){var r=new a;r.parse(e,!1,!0),e=r}for(var t=new a,s=Object.keys(this),o=0;o<s.length;o++){var i=s[o];t[i]=this[i]}if(t.hash=e.hash,""===e.href)return t.href=t.format(),t;if(e.slashes&&!e.protocol){for(var n=Object.keys(e),l=0;l<n.length;l++){var h=n[l];"protocol"!==h&&(t[h]=e[h])}return E[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"),t.href=t.format(),t}if(e.protocol&&e.protocol!==t.protocol){if(!E[e.protocol]){for(var u=Object.keys(e),f=0;f<u.length;f++){var d=u[f];t[d]=e[d]}return t.href=t.format(),t}if(t.protocol=e.protocol,e.host||P[e.protocol])t.pathname=e.pathname;else{for(var p=(e.pathname||"").split("/");p.length&&!(e.host=p.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),t.pathname=p.join("/")}if(t.search=e.search,t.query=e.query,t.host=e.host||"",t.auth=e.auth,t.hostname=e.hostname||e.host,t.port=e.port,t.pathname||t.search){t.path=(t.pathname||"")+(t.search||"")}return t.slashes=t.slashes||e.slashes,t.href=t.format(),t}var m=t.pathname&&"/"===t.pathname.charAt(0),v=e.host||e.pathname&&"/"===e.pathname.charAt(0),y=v||m||t.host&&e.pathname,g=y,b=t.pathname&&t.pathname.split("/")||[],p=e.pathname&&e.pathname.split("/")||[],w=t.protocol&&!E[t.protocol];if(w&&(t.hostname="",t.port=null,t.host&&(""===b[0]?b[0]=t.host:b.unshift(t.host)),t.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===p[0]?p[0]=e.host:p.unshift(e.host)),e.host=null),y=y&&(""===p[0]||""===b[0])),v)t.host=e.host||""===e.host?e.host:t.host,t.hostname=e.hostname||""===e.hostname?e.hostname:t.hostname,t.search=e.search,t.query=e.query,b=p;else if(p.length)b||(b=[]),b.pop(),b=b.concat(p),t.search=e.search,t.query=e.query;else if(!c.isNullOrUndefined(e.search)){if(w){t.hostname=t.host=b.shift();var j=!!(t.host&&t.host.indexOf("@")>0)&&t.host.split("@");j&&(t.auth=j.shift(),t.host=t.hostname=j.shift())}return t.search=e.search,t.query=e.query,c.isNull(t.pathname)&&c.isNull(t.search)||(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!b.length)return t.pathname=null,t.path=t.search?"/"+t.search:null,t.href=t.format(),t;for(var S=b.slice(-1)[0],$=(t.host||e.host||b.length>1)&&("."===S||".."===S)||""===S,x=0,_=b.length;_>=0;_--)S=b[_],"."===S?b.splice(_,1):".."===S?(b.splice(_,1),x++):x&&(b.splice(_,1),x--);if(!y&&!g)for(;x--;x)b.unshift("..");!y||""===b[0]||b[0]&&"/"===b[0].charAt(0)||b.unshift(""),$&&"/"!==b.join("/").substr(-1)&&b.push("");var O=""===b[0]||b[0]&&"/"===b[0].charAt(0);if(w){t.hostname=t.host=O?"":b.length?b.shift():"";var j=!!(t.host&&t.host.indexOf("@")>0)&&t.host.split("@");j&&(t.auth=j.shift(),t.host=t.hostname=j.shift())}return y=y||t.host&&b.length,y&&!O&&b.unshift(""),b.length?t.pathname=b.join("/"):(t.pathname=null,t.path=null),c.isNull(t.pathname)&&c.isNull(t.search)||(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=e.auth||t.auth,t.slashes=t.slashes||e.slashes,t.href=t.format(),t},a.prototype.parseHost=function(){var e=this.host,r=u.exec(e);r&&(r=r[0],":"!==r&&(this.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(this.hostname=e)}},{"./util":51,punycode:46,querystring:49}],51:[function(e,r,t){"use strict";r.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},{}],ajv:[function(e,r,t){"use strict";function a(e){return g.test(e)}function s(r){function t(e,r){var t;if("string"==typeof e){if(!(t=S(e)))throw new Error('no schema with key or ref "'+e+'"')}else{var a=R(e);t=a.validate||I(a)}var s=t(r);return!0===t.$async?"*"==D._opts.async?m(s):s:(D.errors=t.errors,s)}function v(e,r){var t=R(e,void 0,r);return t.validate||I(t)}function E(e,r,t,a){if(Array.isArray(e))for(var s=0;s<e.length;s++)E(e[s],void 0,t,a);else r=i.normalizeId(r||e.id),q(r),D._schemas[r]=R(e,t,a,!0)}function b(e,r,t){E(e,r,t,!0)}function w(e,r){var s=e.$schema||D._opts.defaultMeta||j(),o=D._formats.uri;D._formats.uri="function"==typeof o?a:g;var i;try{i=t(s,e)}finally{D._formats.uri=o}if(!i&&r){var n="schema is invalid: "+A();if("log"!=D._opts.validateSchema)throw new Error(n);console.error(n)}return i}function j(){var e=D._opts.meta;return D._opts.defaultMeta="object"==typeof e?e.id||e:D._opts.v5?f.META_SCHEMA_ID:y}function S(e){var r=x(e);switch(typeof r){case"object":return r.validate||I(r);case"string":return S(r);case"undefined":return $(e)}}function $(e){var r=i.schema.call(D,{schema:{}},e);if(r){var t=r.schema,a=r.root,s=r.baseId,n=o.call(D,t,a,void 0,s);return D._fragments[e]=new l({ref:e,fragment:!0,schema:t,root:a,baseId:s,validate:n}),n}}function x(e){return e=i.normalizeId(e),D._schemas[e]||D._refs[e]||D._fragments[e]}function _(e){if(e instanceof RegExp)return O(D._schemas,e),void O(D._refs,e);switch(typeof e){case"undefined":return O(D._schemas),O(D._refs),void D._cache.clear();case"string":var r=x(e);return r&&D._cache.del(r.jsonStr),delete D._schemas[e],void delete D._refs[e];case"object":var t=c(e);D._cache.del(t);var a=e.id;a&&(a=i.normalizeId(a),delete D._schemas[a],delete D._refs[a])}}function O(e,r){for(var t in e){var a=e[t];a.meta||r&&!r.test(t)||(D._cache.del(a.jsonStr),delete e[t])}}function R(e,r,t,a){if("object"!=typeof e)throw new Error("schema should be object");var s=c(e),o=D._cache.get(s);if(o)return o;a=a||!1!==D._opts.addUsedSchema;var n=i.normalizeId(e.id);n&&a&&q(n);var h,u=!1!==D._opts.validateSchema&&!r;u&&!(h=e.id&&e.id==e.$schema)&&w(e,!0);var f=i.ids.call(D,e),d=new l({id:n,schema:e,localRefs:f,jsonStr:s,meta:t});return"#"!=n[0]&&a&&(D._refs[n]=d),D._cache.put(s,d),u&&h&&w(e,!0),d}function I(e,r){function t(){var r=e.validate,a=r.apply(null,arguments);return t.errors=r.errors,a}if(e.compiling)return e.validate=t,t.schema=e.schema,t.errors=null,t.root=r||t,!0===e.schema.$async&&(t.$async=!0),t;e.compiling=!0;var a;e.meta&&(a=D._opts,D._opts=D._metaOpts);var s;try{s=o.call(D,e.schema,r,e.localRefs)}finally{e.compiling=!1,e.meta&&(D._opts=a)}return e.validate=s,e.refs=s.refs,e.refVal=s.refVal,e.root=s.root,s}function A(e,r){if(!(e=e||D.errors))return"No errors";r=r||{};for(var t=void 0===r.separator?", ":r.separator,a=void 0===r.dataVar?"data":r.dataVar,s="",o=0;o<e.length;o++){var i=e[o];i&&(s+=a+i.dataPath+" "+i.message+t)}return s.slice(0,-t.length)}function k(e,r){"string"==typeof r&&(r=new RegExp(r)),D._formats[e]=r}function q(e){if(D._schemas[e]||D._refs[e])throw new Error('schema with key or id "'+e+'" already exists')}if(!(this instanceof s))return new s(r);var D=this;r=this._opts=d.copy(r)||{},this._schemas={},this._refs={},this._fragments={},this._formats=h(r.format),this._cache=r.cache||new n,this._loadingSchemas={},this._compilations=[],this.RULES=u(),this.validate=t,this.compile=v,this.addSchema=E,this.addMetaSchema=b,this.validateSchema=w,this.getSchema=S,this.removeSchema=_,this.addFormat=k,this.errorsText=A,this._addSchema=R,this._compile=I,r.loopRequired=r.loopRequired||1/0,(r.async||r.transpile)&&p.setup(r),!0===r.beautify&&(r.beautify={indent_size:2}),"property"==r.errorDataPath&&(r._errorDataPathProperty=!0),this._metaOpts=function(){for(var e=d.copy(D._opts),r=0;r<P.length;r++)delete e[P[r]];return e}(),r.formats&&function(){for(var e in D._opts.formats)k(e,D._opts.formats[e])}(),function(){!1!==D._opts.meta&&(b(e("./refs/json-schema-draft-04.json"),y,!0),D._refs["http://json-schema.org/schema"]=y)}(),r.v5&&f.enable(this),"object"==typeof r.meta&&b(r.meta),function(){var e=D._opts.schemas;if(e)if(Array.isArray(e))E(e);else for(var r in e)E(e[r],r)}()}var o=e("./compile"),i=e("./compile/resolve"),n=e("./cache"),l=e("./compile/schema_obj"),c=e("json-stable-stringify"),h=e("./compile/formats"),u=e("./compile/rules"),f=e("./v5"),d=e("./compile/util"),p=e("./async"),m=e("co");r.exports=s,s.prototype.compileAsync=p.compile;var v=e("./keyword");s.prototype.addKeyword=v.add,s.prototype.getKeyword=v.get,s.prototype.removeKeyword=v.remove,s.ValidationError=e("./compile/validation_error");var y="http://json-schema.org/draft-04/schema",g=/^(?:(?:[a-z][a-z0-9+-.]*:)?\/\/)?[^\s]*$/i,P=["removeAdditional","useDefaults","coerceTypes"]},{"./async":1,"./cache":2,"./compile":6,"./compile/formats":5,"./compile/resolve":7,"./compile/rules":8,"./compile/schema_obj":9,"./compile/util":11,"./compile/validation_error":12,"./keyword":37,"./refs/json-schema-draft-04.json":38,"./v5":40,co:41,"json-stable-stringify":42}]},{},[])("ajv")});
//# sourceMappingURL=ajv.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"name": "shield-studies-addon-utils",
	"version": "4.0.0",
	"description": "Utilities for building Shield-Study Mozilla Firefox addons.",
	"main": "lib/index.js",
	"scripts": {
		"build": "./bin/make_xpi.sh",
		"test": "export FIREFOX_BINARY=firefox && npm run build && XPI_NAME=test-addon/test-addon.xpi mocha test",
		"predist": "npm run eslint",
		"dist": "webpack",
		"eslint": "eslint src --ext jsm --ext js --ext json"
	},
	"author": "Gregg Lind <glind@mozilla.com>",
	"license": "MPL-2.0",
	"dependencies": {
		"assert": "^1.4.1",
		"fs-extra": "^4.0.0",
		"fx-runner": "^1.0.7",
		"geckodriver": "^1.8.0",
		"mocha": "^3.4.2",
		"path": "^0.12.7",
		"selenium-webdriver": "^3.4.0"
	},
	"devDependencies": {
		"ajv": "^4.11.2",
		"eslint": "^4.0.0",
		"eslint-plugin-json": "^1.2.0",
		"eslint-plugin-mozilla": "^0.4.0",
		"shield-study-schemas": "^0.8.3",
		"webpack": "^2.6.1"
	},
	"bugs": {
		"url": "https://github.com/mozilla/shield-studies-addon-utils/issues"
	},
	"files": [
		"dist"
	],
	"repository": {
		"type": "git",
		"url": "git+https://github.com/mozilla/shield-studies-addon-utils.git"
	},
	"keywords": [
		"mozilla",
		"addon",
		"shield",
		"shield-study",
		"normandy",
		"jsm"
	],
	"homepage": "https://github.com/mozilla/shield-studies-addon-utils#readme"
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "shield-study": __webpack_require__(5),
  "shield-study-addon":  __webpack_require__(3),
  "shield-study-error":  __webpack_require__(4),
  "studySetup":  __webpack_require__(8),
  "webExtensionMsg": __webpack_require__(9),
  "weightedVariations": __webpack_require__(10),
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"type": "object",
	"title": "shield-study-addon",
	"description": "`shield-study-addon` addon-specific probe data, with `attributes` sent as Map(s,s).",
	"properties": {
		"version": {
			"type": "integer",
			"title": "Version schema.  Will be 3",
			"enum": [
				3
			]
		},
		"study_name": {
			"description": "Name of a particular study.  Usually the addon_id.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"branch": {
			"description": "Which branch (variation) of the study the user has.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"addon_version": {
			"description": "Semantic version of the addon.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"shield_version": {
			"description": "Which version of the shield-studies-addon-utils.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"testing": {
			"type": "boolean",
			"description": "If `true`, this packet is a TESTING packet and can be safely ignored."
		},
		"data": {
			"type": "object",
			"title": "Shield-Study-Addon 'data' field.",
			"description": "`shield-study-addon` addon-specific probe data, with `attributes` sent as Map(s,s).",
			"properties": {
				"attributes": {
					"type": "object",
					"description": "Map(string, string) of attributes.",
					"properties": {},
					"additionalProperties": {
						"type": "string"
					}
				}
			},
			"required": [
				"attributes"
			]
		},
		"type": {
			"type": "string",
			"description": "doc_type, restated",
			"enum": [
				"shield-study-addon"
			]
		}
	},
	"required": [
		"version",
		"study_name",
		"branch",
		"addon_version",
		"shield_version",
		"data",
		"type"
	]
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"type": "object",
	"title": "shield-study-error",
	"description": "`shield-study-error` data used to notify, group and count some kinds of errors from shield studies.",
	"properties": {
		"version": {
			"type": "integer",
			"title": "Version schema.  Will be 3",
			"enum": [
				3
			]
		},
		"study_name": {
			"description": "Name of a particular study.  Usually the addon_id.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"branch": {
			"description": "Which branch (variation) of the study the user has.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"addon_version": {
			"description": "Semantic version of the addon.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"shield_version": {
			"description": "Which version of the shield-studies-addon-utils.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"testing": {
			"type": "boolean",
			"description": "If `true`, this packet is a TESTING packet and can be safely ignored."
		},
		"data": {
			"type": "object",
			"title": "Shield-Study-Error 'data' field",
			"description": "`shield-study-error` data used to notify, group and count some kinds of errors from shield studies.",
			"properties": {
				"error_id": {
					"description": "between 1,100 chars, no spaces, unicode ok.",
					"type": "string",
					"pattern": "^\\S+$",
					"minLength": 1,
					"maxLength": 100
				},
				"error_source": {
					"type": "string",
					"description": "Where did the error originate.",
					"enum": [
						"addon",
						"shield",
						"firefox",
						"unknown"
					]
				},
				"message": {
					"type": "string",
					"minLength": 1,
					"title": "Message schema.",
					"description": "String of an error message."
				},
				"severity": {
					"type": "string",
					"description": "An explanation about the purpose of this instance.",
					"enum": [
						"debug",
						"info",
						"warn",
						"fatal",
						"impossible"
					]
				},
				"attributes": {
					"type": "object",
					"description": "Map(string, string) of attributes.",
					"properties": {},
					"additionalProperties": {
						"type": "string"
					}
				},
				"error": {
					"type": "object",
					"description": "(Future use), things like tracebacks.",
					"properties": {},
					"additionalProperties": {
						"type": "string"
					}
				}
			},
			"required": [
				"error_id",
				"error_source"
			]
		},
		"type": {
			"type": "string",
			"description": "doc_type, restated",
			"enum": [
				"shield-study-error"
			]
		}
	},
	"required": [
		"version",
		"study_name",
		"branch",
		"addon_version",
		"shield_version",
		"data",
		"type"
	]
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"type": "object",
	"title": "shield-study",
	"description": "`shield-study` state and outcome data.",
	"properties": {
		"version": {
			"type": "integer",
			"title": "Version schema.  Will be 3",
			"enum": [
				3
			]
		},
		"study_name": {
			"description": "Name of a particular study.  Usually the addon_id.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"branch": {
			"description": "Which branch (variation) of the study the user has.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"addon_version": {
			"description": "Semantic version of the addon.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"shield_version": {
			"description": "Which version of the shield-studies-addon-utils.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"testing": {
			"type": "boolean",
			"description": "If `true`, this packet is a TESTING packet and can be safely ignored."
		},
		"data": {
			"type": "object",
			"description": "`shield-study` state and outcome data.",
			"properties": {
				"study_state": {
					"type": "string",
					"description": "message about the most recent state of the study.",
					"enum": [
						"enter",
						"exit",
						"installed",
						"ineligible",
						"expired",
						"user-disable",
						"ended-positive",
						"ended-neutral",
						"ended-negative",
						"active"
					]
				},
				"study_state_fullname": {
					"type": "string",
					"description": "Second part of name of state, if any.  Study-specific for study-defined endings."
				},
				"attributes": {
					"type": "object",
					"description": "Map(string, string) of attributes.",
					"properties": {},
					"additionalProperties": {
						"type": "string"
					}
				}
			},
			"required": [
				"study_state"
			]
		},
		"type": {
			"type": "string",
			"description": "doc_type, restated",
			"enum": [
				"shield-study"
			]
		}
	},
	"required": [
		"version",
		"study_name",
		"branch",
		"addon_version",
		"shield_version",
		"data",
		"type"
	]
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
TODO glind survey / urls & query args
TODO glind publish as v4
*/
const EXPORTED_SYMBOLS = ["studyUtils"];

const UTILS_VERSION = __webpack_require__(1).version;
const PACKET_VERSION = 3;

const {utils: Cu} = Components;
Cu.import("resource://gre/modules/AddonManager.jsm");
Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/XPCOMUtils.jsm");
Cu.importGlobalProperties(["URL", "crypto", "URLSearchParams"]);

const log = createLog("shield-study-utils", "Info");

// telemetry utils
const CID = Cu.import("resource://gre/modules/ClientID.jsm", null);
const { TelemetryController } = Cu.import("resource://gre/modules/TelemetryController.jsm", null);
const { TelemetryEnvironment } = Cu.import("resource://gre/modules/TelemetryEnvironment.jsm", null);

async function getTelemetryId() {
  const id = TelemetryController.clientID;
  /* istanbul ignore next */
  if (id === undefined) {
    return await CID.ClientIDImpl._doLoadClientID();
  }
  return id;
}

const schemas = __webpack_require__(2);
const Ajv = __webpack_require__(0);
const ajv = new Ajv();

var jsonschema = {
  validate(data, schema) {
    var valid = ajv.validate(schema, data);
    return {valid, errors:  ajv.errors || []};
  },
  validateOrThrow(data, schema) {
    const valid = ajv.validate(schema, data);
    if (!valid) { throw new Error(JSON.stringify((ajv.errors))); }
    return true;
  },
};

/**
 * Merges all the properties of all arguments into first argument. If two or
 * more argument objects have own properties with the same name, the property
 * is overridden, with precedence from right to left, implying, that properties
 * of the object on the left are overridden by a same named property of the
 * object on the right.
 *
 * Any argument given with "falsy" value - commonly `null` and `undefined` in
 * case of objects - are skipped.
 *
 * @examples
 *    var a = { bar: 0, a: 'a' }
 *    var b = merge(a, { foo: 'foo', bar: 1 }, { foo: 'bar', name: 'b' });
 *    b === a   // true
 *    b.a       // 'a'
 *    b.foo     // 'bar'
 *    b.bar     // 1
 *    b.name    // 'b'
 *
 * from addon-sdk:sdk/util/object.js
 */
function merge(source) {
  // get object's own property Symbols and/or Names, including nonEnumerables by default
  function getOwnPropertyIdentifiers(object, options = { names: true, symbols: true, nonEnumerables: true }) {
    const symbols = !options.symbols ? [] :
      Object.getOwnPropertySymbols(object);

    // eslint-disable-next-line
    const names = !options.names ? [] :
      options.nonEnumerables ? Object.getOwnPropertyNames(object) :
        Object.keys(object);
    return [...names, ...symbols];
  }
  const descriptor = {};

  // `Boolean` converts the first parameter to a boolean value. Any object is
  // converted to `true` where `null` and `undefined` becames `false`. Therefore
  // the `filter` method will keep only objects that are defined and not null.
  Array.slice(arguments, 1).filter(Boolean).forEach(function onEach(properties) {
    getOwnPropertyIdentifiers(properties).forEach(function(name) {
      descriptor[name] = Object.getOwnPropertyDescriptor(properties, name);
    });
  });
  return Object.defineProperties(source, descriptor);
}

function mergeQueryArgs(url, ...args) {
  /* currently left to right*/
  // TODO, glind, decide order of merge here
  const U = new URL(url);
  let q = U.search || "?";
  q = new URLSearchParams(q);

  const merged = merge({}, ...args);

  // get user info.
  Object.keys(merged).forEach((k) => {
    log.debug(q.get(k), k, merged[k]);
    q.set(k, merged[k]);
  });

  U.search = q.toString();
  return U.toString();
}

// sampling utils
async function sha256(message) {
  const msgBuffer = new TextEncoder("utf-8").encode(message); // encode as UTF-8
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert ArrayBuffer to Array
  const hashHex = hashArray.map(b => ("00" + b.toString(16)).slice(-2)).join(""); // convert bytes to hex string
  return hashHex;
}

function cumsum(arr) {
  return arr.reduce(function(r, c, i) { r.push((r[i - 1] || 0) + c); return r; }, [] );
}

function chooseWeighted(weightedVariations, fraction = Math.random()) {
  /*
   weightedVaiations, list of:
   {
    name: string of any length
    weight: float >= 0
   }
  */
  jsonschema.validateOrThrow(weightedVariations, schemas.weightedVariations);

  var weights = weightedVariations.map(x => x.weight || 1);
  const partial = cumsum(weights);
  const total = weights.reduce((a, b) => a + b);
  for (let ii = 0; ii < weightedVariations.length; ii++) {
    if (fraction <= partial[ii] / total) {
      return weightedVariations[ii];
    }
  }
  return null;
}

async function hashFraction(saltedString, bits = 12) {
  const hash = await sha256(saltedString);
  return parseInt(hash.substr(0, bits), 16) / Math.pow(16, bits);
}

class StudyUtils {
  constructor(config) {
    // TODO glind Answer: no.  see if you can merge the construtor and setup and export the class, rather than a singleton
    this.respondToWebExtensionMessage = function({shield, msg, data}, sender, sendResponse) {
      // shield: boolean, if present, request is for shield
      if (!shield) return true;
      const allowedMethods = ["endStudy", "telemetry", "info"];
      if (!allowedMethods.includes(msg)) {
        throw new Error(`respondToWebExtensionMessage: "${msg}" is not in allowed studyUtils methods: ${allowedMethods}`);
      }
      // handle async
      Promise.resolve(this[msg](data)).then(
        function(ans) {
          log.debug("respondingTo", msg, ans);
          sendResponse(ans);
        },
        // function error eventually
      );
      return true;
    }.bind(this);

    // expose the sample utilities
    this.sample = {
      sha256,
      cumsum,
      chooseWeighted,
      hashFraction,
    };
    // expose schemas
    this.schemas = schemas;

    // expose validation methods
    this.jsonschema = jsonschema;
  }
  throwIfNotSetup(name = "unknown") {
    if (!this._isSetup) throw new Error(name + ": this method can't be used until `setup` is called");
  }
  setup(config) {
    log.debug("setting up!");
    jsonschema.validateOrThrow(config, schemas.studySetup);

    this.config = config;
    this._isSetup = true;
    return this;
  }
  reset() {
    this.config = {};
    delete this._variation;
    this._isSetup = false;
  }
  async openTab(url, params = {}) {
    this.throwIfNotSetup("openTab");
    log.debug(url, params);
    log.debug("opening this formatted tab", url, params);
    Services.wm.getMostRecentWindow("navigator:browser").gBrowser.addTab(url, params);
  }
  async getTelemetryId() {
    return await getTelemetryId();
  }
  setVariation(variation) {
    this.throwIfNotSetup("setVariation");
    this._variation = variation;
    return this;
  }
  getVariation() {
    this.throwIfNotSetup("getvariation");
    return this._variation;
  }
  getShieldId() {
    const key = "extensions.shield-recipe-client.user_id";
    return Services.prefs.getCharPref(key, "");
  }
  info() {
    log.debug("getting info");
    this.throwIfNotSetup("info");
    return {
      studyName: this.config.studyName,
      addon: this.config.addon,
      variation: this.getVariation(),
      shieldId: this.getShieldId(),
    };
  }
  // TODO glind, maybe this is getter / setter?
  get telemetryConfig() {
    this.throwIfNotSetup("telemetryConfig");
    return this.config.telemetry;
  }
  firstSeen() {
    log.debug(`firstSeen`);
    this.throwIfNotSetup("firstSeen");
    this._telemetry({study_state: "enter"}, "shield-study");
  }
  setActive() {
    this.throwIfNotSetup("setActive");
    const info = this.info();
    log.debug("marking TelemetryEnvironment", info.studyName, info.variation.name);
    TelemetryEnvironment.setExperimentActive(info.studyName, info.variation.name);
  }
  unsetActive() {
    this.throwIfNotSetup("unsetActive");
    const info = this.info();
    log.debug("unmarking TelemetryEnvironment", info.studyName, info.variation.name);
    TelemetryEnvironment.setExperimentInactive(info.studyName);
  }
  surveyUrl(urlTemplate) {
    // TODO glind, what is this?
    this.throwIfNotSetup("surveyUrl");
    log.debug(`survey: ${urlTemplate} filled with args`);
  }
  uninstall(id) {
    this.throwIfNotSetup("uninstall");
    if (!id) id = this.info().addon.id;
    log.debug(`about to uninstall ${id}`);
    AddonManager.getAddonByID(id, addon => addon.uninstall());
  }
  async startup({reason}) {
    this.throwIfNotSetup("startup");
    log.debug(`startup ${reason}`);
    this.setActive();
    if (reason === REASONS.ADDON_INSTALL) {
      this._telemetry({study_state: "installed"}, "shield-study");
    }
  }
  async endStudy({reason, fullname}) {
    this.throwIfNotSetup("endStudy");
    if (this._isEnding) {
      log.debug("endStudy, already ending!");
      return;
    }
    this._isEnding = true;
    log.debug(`endStudy ${reason}`);
    this.unsetActive();
    // TODO glind, think about reason vs fullname
    // TODO glind, think about race conditions for endings, ensure only one exit
    const ending = this.config.endings[reason];
    if (ending) {
      const {baseUrl, exactUrl} = ending;
      if (exactUrl) {
        this.openTab(exactUrl);
      } else if (baseUrl) {
        const qa = await this.endingQueryArgs();
        qa.reason = reason;
        qa.fullreason = fullname;
        const fullUrl = mergeQueryArgs(baseUrl, qa);
        log.debug(baseUrl, fullUrl);
        this.openTab(fullUrl);
      }
    }
    switch (reason) {
      case "ineligible":
      case "expired":
      case "user-disable":
      case "ended-positive":
      case "ended-neutral":
      case "ended-negative":
        this._telemetry({study_state: reason, fullname}, "shield-study");
        break;
      default:
        this._telemetry({study_state: "ended-neutral", study_state_fullname: reason}, "shield-study");
        // unless we know better TODO grl
    }
    // these are all exits
    this._telemetry({study_state: "exit"}, "shield-study");
    this.uninstall(); // TODO glind. should be controllable by arg?
  }

  async endingQueryArgs() {
    // TODO glind, make this back breaking!
    this.throwIfNotSetup("endingQueryArgs");
    const info = this.info();
    const who = await getTelemetryId();
    const queryArgs = {
      shield: PACKET_VERSION,
      study: info.studyName,
      variation: info.variation.name,
      updateChannel: Services.appinfo.defaultUpdateChannel,
      fxVersion: Services.appinfo.version,
      addon: info.addon.version, // addon version
      who, // telemetry clientId
    };
    queryArgs.testing = Number(!this.telemetryConfig.removeTestingFlag);
    return queryArgs;
  }

  async _telemetry(data, bucket = "shield-study-addon") {
    log.debug(`telemetry in:  ${bucket} ${JSON.stringify(data)}`);
    this.throwIfNotSetup("_telemetry");
    const info = this.info();
    const payload = {
      version:        PACKET_VERSION,
      study_name:     info.studyName,
      branch:         info.variation.name,
      addon_version:  info.addon.version,
      shield_version: UTILS_VERSION,
      type:           bucket,
      data,
      testing:        !this.telemetryConfig.removeTestingFlag,
    };

    let validation;
    /* istanbul ignore next */
    try {
      validation = jsonschema.validate(payload, schemas[bucket]);
    } catch (err) {
      // if validation broke, GIVE UP.
      log.error(err);
      return false;
    }

    if (validation.errors.length) {
      const errorReport = {
        "error_id": "jsonschema-validation",
        "error_source": "addon",
        "severity": "fatal",
        "message": JSON.stringify(validation.errors),
      };
      if (bucket === "shield-study-error") {
        // log: if it's a warn or error, it breaks jpm test
        log.warn("cannot validate shield-study-error", data, bucket);
        return false; // just die, maybe should have a super escape hatch?
      }
      return this.telemetryError(errorReport);
    }
    // emit(TelemetryWatcher, 'telemetry', [bucket, payload]);
    log.debug(`telemetry: ${JSON.stringify(payload)}`);
    // FIXME marcrowo: addClientId makes the ping not appear in test?
    // seems like a problem with Telemetry, not the shield-study-utils library
    const telOptions = {addClientId: false, addEnvironment: false};
    if (!this.telemetryConfig.send) {
      log.debug("NOT sending.  `telemetryConfig.send` is false");
      return false;
    }
    return TelemetryController.submitExternalPing(bucket, payload, telOptions);
  }

  // telemetry from addon, mostly from webExtension message.
  telemetry(data) {
    log.debug(`telemetry ${JSON.stringify(data)}`);
    const toSubmit = {
      attributes: data,
    };
    // lets check early, and respond with something useful?
    this._telemetry(toSubmit, "shield-study-addon");
  }
  telemetryError(errorReport) {
    return this._telemetry(errorReport, "shield-study-error");
  }
  setLoggingLevel(descriptor) {
    log.level = Log.Level[descriptor];
  }
}

function createLog(name, levelWord) {
  Cu.import("resource://gre/modules/Log.jsm");
  var L = Log.repository.getLogger(name);
  L.addAppender(new Log.ConsoleAppender(new Log.BasicFormatter()));
  L.debug("log made", name, levelWord, Log.Level[levelWord]);
  L.level = Log.Level[levelWord] || Log.Level.Debug; // should be a config / pref
  return L;
}
/** addon state change reasons */
const REASONS = {
  APP_STARTUP: 1,      // The application is starting up.
  APP_SHUTDOWN: 2,     // The application is shutting down.
  ADDON_ENABLE: 3,     // The add-on is being enabled.
  ADDON_DISABLE: 4,    // The add-on is being disabled. (Also sent during uninstallation)
  ADDON_INSTALL: 5,    // The add-on is being installed.
  ADDON_UNINSTALL: 6,  // The add-on is being uninstalled.
  ADDON_UPGRADE: 7,    // The add-on is being upgraded.
  ADDON_DOWNGRADE: 8,  // The add-on is being downgraded.
};
for (const r in REASONS) { REASONS[REASONS[r]] = r; }

// Actually create the singleton.
var studyUtils = new StudyUtils();

// to make this work with webpack!
this.EXPORTED_SYMBOLS = EXPORTED_SYMBOLS;
this.studyUtils = studyUtils;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "study setup",
	"type": "object",
	"definitions": {
		"idString": {
			"description": "between 1,100 chars, no spaces, unicode ok.",
			"type": "string",
			"pattern": "^\\S+$",
			"minLength": 1,
			"maxLength": 100
		},
		"ending": {
			"type": "object",
			"properties": {
				"study_state": {
					"type": "string",
					"enum": [
						"installed",
						"ineligible",
						"expired",
						"user-disable",
						"ended-positive",
						"ended-neutral",
						"ended-negative"
					]
				},
				"study_state_fullname": {
					"type": "string",
					"description": "Second part of name of state, if any.  Study-specific for study-defined endings."
				},
				"url": {
					"type": "string"
				}
			}
		}
	},
	"properties": {
		"studyName": {
			"$ref": "#/definitions/idString",
			"description": "Name of a particular study.  Usually the addon_id."
		},
		"addon": {
			"type": "object",
			"properties": {
				"id": {
					"$ref": "#/definitions/idString",
					"description": "id of the addon."
				},
				"version": {
					"$ref": "#/definitions/idString",
					"description": "Semantic version of the addon."
				}
			},
			"required": [
				"id",
				"version"
			]
		},
		"endings": {
			"type": "object",
			"additionalProperties": {
				"$ref": "#/definitions/ending"
			}
		},
		"telemetry": {
			"type": "object",
			"properties": {
				"removeTestingFlag": {
					"type": "boolean"
				},
				"send": {
					"type": "boolean"
				},
				"onInvalid": {
					"type": "string",
					"enum": [
						"throw",
						"log"
					]
				}
			},
			"required": [
				"removeTestingFlag",
				"send"
			]
		}
	},
	"required": [
		"studyName",
		"endings",
		"addon",
		"telemetry"
	]
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "webExtension browserMessage",
	"type": "object",
	"properties": {
		"shield": {
			"type": "boolean"
		},
		"msg": {
			"type": "string",
			"enum": [
				"endStudy",
				"telemetry",
				"info"
			]
		},
		"data": {
			"type": "object"
		}
	},
	"required": [
		"shield",
		"msg"
	]
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"definitions": {
		"variation": {
			"name": {
				"type": "string"
			},
			"weight": {
				"type": "number",
				"minimum": 0
			},
			"required": [
				"name",
				"weight"
			]
		}
	},
	"items": {
		"$ref": "#/definitions/variation"
	},
	"type": "array"
};

/***/ })
/******/ ])));