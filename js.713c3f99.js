parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OwYt":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,i(o.key),o)}}function r(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(e){var r=o(e,"string");return"symbol"==t(r)?r:r+""}function o(e,r){if("object"!=t(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=exports.default=r(function t(e){n(this,t),this.name=e.name,this.id=e.id,this.history=e.blurb,this.general_information=e.info,this.image=e.image,this.tags=e.tags,this.stats=e.stats,this.partype=e.partype,this.title=e.title});
},{}],"QvaY":[function(require,module,exports) {
"use strict";var t=e(require("./Campeones.js"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(){r=function(){return e};var t,e={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new M(r||[]);return a(i,"_invoke",{value:B(t,n,c)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",m="suspendedYield",y="executing",g="completed",v={};function b(){}function w(){}function E(){}var L={};h(L,u,function(){return this});var x=Object.getPrototypeOf,j=x&&x(x(P([])));j&&j!==o&&i.call(j,u)&&(L=j);var _=E.prototype=b.prototype=Object.create(L);function I(t){["next","throw","return"].forEach(function(e){h(t,e,function(t){return this._invoke(e,t)})})}function k(t,e){function r(o,a,c,u){var s=d(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==n(h)&&i.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,c,u)},function(t){r("throw",t,c,u)}):e.resolve(h).then(function(t){l.value=t,c(l)},function(t){return r("throw",t,c,u)})}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e(function(e,o){r(t,n,e,o)})}return o=o?o.then(i,i):i()}})}function B(e,n,r){var o=p;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var s=d(e,n,r);if("normal"===s.type){if(o=r.done?g:m,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=g,r.method="throw",r.arg=s.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=d(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(i.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return w.prototype=E,a(_,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:w,configurable:!0}),w.displayName=h(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,h(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},I(k.prototype),h(k.prototype,s,function(){return this}),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},I(_),h(_,l,"Generator"),h(_,u,function(){return this}),h(_,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function o(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,u,"next",t)}function u(t){o(a,r,i,c,u,"throw",t)}c(void 0)})}}var a=[],c=0,u=1,s=0;function l(t){return h.apply(this,arguments)}function h(){return(h=i(r().mark(function t(e){var n,o,i;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion/".concat(e,".json"),t.next=3,fetch(n);case 3:return o=t.sent,t.next=6,o.json();case 6:return i=t.sent,t.abrupt("return",i.data[e]);case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}function f(t,e,n,r,o){var i=document.getElementById("card-grid"),c=document.getElementById("championModal"),h=i.innerHTML;document.getElementById("btonIzquierd").style.visibility="hidden",document.getElementById("btonDerech").style.visibility="hidden",i.removeAttribute("id"),i.classList.add("championModal");var d=t.toUpperCase();i.innerHTML='\n        <button id="close">&times;</button>\n        <h2 id="namepop">'.concat(d,'</h2>\n        <button id="prev">&lt;</button>\n        <img id="champion-image" id="champion-image" src="').concat(e,'" alt="').concat(t,'">\n        <button id="next">&gt</button>\n        <p>').concat(r,"</p>\n    "),c.classList.add("show"),document.getElementById("close").addEventListener("click",function(){c.classList.remove("show"),i.innerHTML=h,i.id="card-grid",i.classList.remove("championModal"),document.getElementById("btonIzquierd").style.visibility="visible",document.getElementById("btonDerech").style.visibility="visible",document.querySelectorAll(".card").forEach(function(t,e){var n=!0;t.addEventListener("click",function(){console.log("Esto en el bucle"),n&&(1!=u?(n=!1,e=8*u-8+e,console.log("Entro por el if")):n=!1),console.log(e,u),f(a[e].name,"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(a[e].id,"_0.jpg"),a[e].tags,a[e].history,a[e].id)})})}),l(o).then(function(t){var e=t.skins,n=e.length;document.getElementById("prev").addEventListener("click",function(){var t=e[s=(s-1+n)%n],r="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(o,"_").concat(t.num,".jpg");document.getElementById("champion-image").src=r}),document.getElementById("next").addEventListener("click",function(){var t=e[s=(s+1)%n],r="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(o,"_").concat(t.num,".jpg");document.getElementById("champion-image").src=r})})}function d(){var t=document.getElementById("card-grid");t.innerHTML="";for(var e=8*(u-1),n=Math.min(e+8,a.length),r=function(e){var n=a[e].tags.join("/"),r=a[e].name.toUpperCase(),o="https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/".concat(a[e].image.full),i="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(a[e].id,"_0.jpg"),c=document.createElement("div");c.classList.add("card"),c.innerHTML="\n            <h2>".concat(r,'</h2>\n            <img src="').concat(o,'" alt="').concat(a[e].name,'">\n            <p>TYPE</p>\n            <p>').concat(n,"</p>\n        "),c.addEventListener("click",function(){f(a[e].name,i,a[e].tags,a[e].history,a[e].id)}),t.appendChild(c)},o=e;o<n;o++)r(o)}var p=function(){var e=i(r().mark(function e(){return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json").then(function(t){return t.json()}).then(function(e){var n=e.data;for(var r in n){var o=new t.default(n[r]);a.push(o)}});case 2:c=Math.ceil(a.length/8),d();case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();p(),document.getElementById("btonDerech").addEventListener("click",function(){u<c&&(u++,d())}),document.getElementById("btonIzquierd").addEventListener("click",function(){u>1&&(u--,d())});
},{"./Campeones.js":"OwYt"}]},{},["QvaY"], null)
//# sourceMappingURL=/Lol/js.713c3f99.js.map