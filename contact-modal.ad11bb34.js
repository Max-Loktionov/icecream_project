parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SKWM":[function(require,module,exports) {
"use strict";function o(){document.querySelector(".js-contact-modal__title").textContent="Franchise!"}(()=>{const t={openLocationModalBtn:document.querySelector("[data-contact-locations-modal-open]"),openFranchiseModalBtn:document.querySelector("[data-contact-franchise-modal-open]"),closeModalBtn:document.querySelector("[data-contact-modal-close]"),contactModal:document.querySelector("[data-contact-modal]"),ModalFranchiseBtn:document.querySelector(".contact-franchise-modal")};function c(){document.body.classList.toggle("contact-modal-open"),t.contactModal.classList.toggle("contact_modal__backdrop--hidden"),document.querySelector(".js-contact-modal__title").textContent="Our Location"}console.log("contactModal",t.contactModal),console.log("openLocationModalBtn",t.openLocationModalBtn),console.log("openFranchiseModalBtn",t.openFranchiseModalBtn),console.log("closeModalBtn",t.closeModalBtn),t.openLocationModalBtn.addEventListener("click",c),t.openFranchiseModalBtn.addEventListener("click",function(){t.contactModal.classList.toggle("contact_modal__backdrop--hidden"),document.body.classList.toggle("contact-modal-open"),document.querySelector(".js-contact-modal__title").textContent="Franchise!"}),t.ModalFranchiseBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",c)})();
},{}]},{},["SKWM"], null)
//# sourceMappingURL=/icecream_project/contact-modal.ad11bb34.js.map