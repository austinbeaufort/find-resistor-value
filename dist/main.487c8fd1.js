parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Jwxc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.message=exports.form=void 0;var e=document.querySelector("#form");exports.form=e;var r=document.querySelector("#message");exports.message=r;
},{}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./domIds"),t=function(){e.form.addEventListener("submit",r)},r=function(t){t.preventDefault();var r=g(t),o=n(r);e.message.innerHTML=o},n=function(e){var t=o(e),r=t[0],n=t[1],u=t[2];return"<h3>Resistor Value: "+r+"Ω.</h3><h3>Low Tolerance: "+n.toFixed(2)+"Ω.</h3><h3>High Tolerance: "+u.toFixed(2)+"Ω.</h3>"},o=function(e){var t=c(e),r=i(e),n=u(e)*r;return[n,n-n*t,n+n*t]},u=function(e){var t=(5===e.length?e.slice(0,4):e.slice(0,3)).map(function(e){return a(e)}).join("");return parseInt(t)},a=function(e){return"black"===e?"0":"brown"===e?"1":"red"===e?"2":"orange"===e?"3":"yellow"===e?"4":"green"===e?"5":"blue"===e?"6":"violet"===e?"7":"grey"===e?"8":"9"},i=function(e){return 5===e.length?l(e[3]):l(e[2])},l=function(e){return"black"===e?Math.pow(10,0):"brown"===e?Math.pow(10,1):"red"===e?Math.pow(10,2):"orange"===e?Math.pow(10,3):"yellow"===e?Math.pow(10,4):"green"===e?Math.pow(10,5):"blue"===e?Math.pow(10,6):"violet"===e?Math.pow(10,7):"grey"===e?Math.pow(10,8):"white"===e?Math.pow(10,9):"gold"===e?.1:.01},c=function(e){return 4===e.length?h(e[3]):5===e.length?h(e[4]):.2},h=function(e){return"brown"===e?.01:"red"===e?.02:"green"===e?.005:"blue"===e?.0025:"violet"===e?.001:"grey"===e?5e-4:"gold"===e?.05:.1},g=function(e){return[e.target[0],e.target[1],e.target[2],e.target[3],e.target[4]].map(function(e){return e.value}).filter(function(e){return"empty"!==e})};exports.default=t;
},{"./domIds":"Jwxc"}],"ZCfc":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./index"));t.default();
},{"./index":"QCba"}]},{},["ZCfc"], null)
//# sourceMappingURL=/find-resistor-value/main.487c8fd1.js.map