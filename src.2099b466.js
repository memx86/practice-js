parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"HX5o":[function(require,module,exports) {
const e={game:document.querySelector(".game"),btnWrap:document.querySelector(".wrapper"),btnYes:document.querySelector(".yes"),btnNo:document.querySelector(".no"),form:document.querySelector(".choice"),input:document.querySelector(".choice input"),msg:document.querySelector(".message"),range:document.querySelector(".range"),attempts:document.querySelector(".attempts"),prize:document.querySelector(".prize"),maxPrize:document.querySelector(".maxPrize")};let t=1,n=0,o=-1,r=1,i=5,a=3,u=100*t/Math.pow(2,r-1);function c(){e.msg.textContent="Let's play!",d(),1===t&&e.form.addEventListener("submit",p),l({range:i,attempts:a,prize:n,maxPrize:u})}function m(){e.msg.textContent=1===t?"You did not become a billionaire, but can.":`Thank you for your participation. Your prize is: ${n}$`,s()}function s(){e.game.classList.add("is-hidden"),e.btnWrap.classList.remove("is-hidden")}function d(){e.game.classList.remove("is-hidden"),e.btnWrap.classList.add("is-hidden")}function p(e){if(e.preventDefault(),r>3)return;const c=Number(e.target.elements.num.value);if(a=3-r,o<0&&(o=Math.round(Math.random()*i)),console.log(o),u=100*t/Math.pow(2,r-1),c===o)return void g(`Congratulation, you won! Your prize is: ${n+=u}$`);if(3===r)return void g(`Thank you for your participation. Your prize is: ${n}$`);const m=100*t/Math.pow(2,r);r+=1,l({range:i,attempts:a,prize:n,maxPrize:m})}function l({range:t,attempts:n,prize:o,maxPrize:r}){e.range.textContent=t,e.attempts.textContent=n,e.prize.textContent=o,e.maxPrize.textContent=r}function g(n){s(),t+=1,r=1,e.msg.textContent=n,e.input.max=5*t,a=3,i=5*t,u=100*t,t>1&&(o=Math.round(Math.random()*i))}e.btnYes.addEventListener("click",c),e.btnNo.addEventListener("click",m);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/practice2"),require("./js/practice10");
},{"./sass/main.scss":"clu1","./js/practice2":"HX5o","./js/practice10":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/practice-js/src.2099b466.js.map