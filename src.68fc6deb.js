parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"E9iK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchEvents=s;const e="9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK",t="https://app.ticketmaster.com/discovery/v2/";function s(s=1){const c=new URLSearchParams({apikey:e,page:s});return fetch(`${t}/events.json?${c}&keyword=beatles`).then(e=>e.ok?e.json():Promise.reject(e.statusText))}
},{}],"bPgr":[function(require,module,exports) {
"use strict";var e=require("./services/eventsAPI");const n={events:document.querySelector(".events"),prevBtn:document.querySelector("[data-btn='prev']"),nextBtn:document.querySelector("[data-btn='next']"),linkList:document.querySelector(".link-list")};let t=null;function i(e){var n,i;const r=null===(n=e._embedded)||void 0===n?void 0:n.events;t=null===(i=e.page)||void 0===i?void 0:i.totalPages,l(r)}function l(e=[]){const t=e.map(r).join("");n.events.insertAdjacentHTML("beforeend",t)}function r({name:e,images:n=[]}){var t;return`\n    <li>\n    <img src="${null===(t=n[0])||void 0===t?void 0:t.url}" alt="${e}" width="300" />\n    <p>Title: ${e}</p>\n    </li>\n    `}function o(e){console.error(e)}function c(){n.nextBtn.disabled=!1;const e=document.querySelectorAll(".link-list .link"),t=Number(e[0].textContent);e.length<5&&u(t),d(-5,e),"1"===e[0].textContent&&(n.prevBtn.disabled=!0)}function s(){n.prevBtn.disabled=!1;const e=document.querySelectorAll(".link-list .link"),i=Number(e[4].textContent);if(t-i<5){n.linkList.innerHTML="";let e="";for(let n=i+1;n<=t;n+=1)e+=a(n);return n.linkList.insertAdjacentHTML("beforeend",e),void(n.nextBtn.disabled=!0)}d(5,e)}function d(e,n){n.forEach(n=>n.textContent=Number(n.textContent)+e)}function u(e){n.linkList.innerHTML="";let t="";for(let n=e-5;n<e;n+=1)t+=a(n);n.linkList.insertAdjacentHTML("beforeend",t)}function a(e){return`\n    <li class="link-list__item">\n      <a class="link" href="">${e}</a>\n    </li>\n    `}(0,e.fetchEvents)().then(i).catch(o),n.prevBtn.addEventListener("click",c),n.nextBtn.addEventListener("click",s);
},{"./services/eventsAPI":"E9iK"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/events");
},{"./sass/main.scss":"clu1","./js/events":"bPgr"}]},{},["Focm"], null)
//# sourceMappingURL=/practice-js/src.68fc6deb.js.map