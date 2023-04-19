/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/js/backdrop.js":
/*!*************************************!*\
  !*** ./resources/js/js/backdrop.js ***!
  \*************************************/
/***/ (function() {

var header = {
  menuBtn: document.querySelector(".header__menu-button"),
  element: document.querySelector(".header"),
  navList: document.querySelector(".header__nav-list"),
  navItem: document.querySelectorAll(".header__nav-item"),
  navMenu: document.querySelector(".header__menu"),
  contact: document.querySelector(".header__contact"),
  menuClose: document.querySelector(".header__menu-close"),
  langBtn: document.querySelector(".header__lang-button"),
  logo: document.querySelector(".header__logo-svg"),
  logoFooter: document.querySelector(".header__logo-svg--footer")
};
function openBackdrop() {
  window.addEventListener("resize", watchScreenHeight);
  watchScreenHeight();
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
  header.langBtn.classList.toggle("is-open");
  header.element.classList.toggle("is-open");
  header.logo.classList.toggle("is-open");
  header.logoFooter.classList.toggle("is-open");
  header.navList.classList.toggle("is-open");
  header.contact.classList.toggle("is-open");
  header.navMenu.classList.toggle("is-open");
  header.menuClose.classList.toggle("is-open");
  if (!header.element.classList.contains("is-open")) {
    window.removeEventListener("resize", watchScreenHeight);
    header.element.classList.remove("beckdrop-scroll");
  }
}
function watchScreenHeight() {
  if (window.innerHeight > 698) return;
  header.element.classList.add("beckdrop-scroll");
}
header.menuBtn.addEventListener("click", openBackdrop);
header.navItem.forEach(function (el) {
  return el.addEventListener("click", openBackdrop);
});

/***/ }),

/***/ "./resources/js/js/lang.js":
/*!*********************************!*\
  !*** ./resources/js/js/lang.js ***!
  \*********************************/
/***/ (function() {

var buttonLang = document.querySelector(".header__lang-button");
var enSvg = document.querySelector(".header__lang-svg--en");
var arSvg = document.querySelector(".header__lang-svg--ar");
buttonLang.addEventListener("click", function () {
  enSvg.classList.toggle("enActive");
  arSvg.classList.toggle("arActive");
});

/***/ }),

/***/ "./resources/js/js/partners.js":
/*!*************************************!*\
  !*** ./resources/js/js/partners.js ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./resources/js/js/product.js":
/*!************************************!*\
  !*** ./resources/js/js/product.js ***!
  \************************************/
/***/ (function() {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var items = document.querySelectorAll(".products__item");
items.forEach(function (item) {
  item.addEventListener("click", function (event) {
    items.forEach(function (el) {
      if (el !== event.currentTarget) {
        el.classList.remove("active");
      }
    });
    event.currentTarget.classList.toggle("active");
    items.forEach(function (item) {
      Array.from(item.children).forEach(function (child) {
        var _child$classList;
        (_child$classList = child.classList) === null || _child$classList === void 0 ? void 0 : _child$classList.remove("active");
      });
    });
    if (event.currentTarget.classList.contains("active")) {
      var _event$currentTarget$ = _slicedToArray(event.currentTarget.children, 3),
        _ = _event$currentTarget$[0],
        productsDescription = _event$currentTarget$[1],
        productsIcon = _event$currentTarget$[2];
      productsDescription.classList.add("active");
      productsIcon.classList.add("active");
    }
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************************!*\
  !*** ./resources/js/home.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_backdrop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/backdrop.js */ "./resources/js/js/backdrop.js");
/* harmony import */ var _js_backdrop_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_backdrop_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/lang.js */ "./resources/js/js/lang.js");
/* harmony import */ var _js_lang_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_lang_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_product_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/product.js */ "./resources/js/js/product.js");
/* harmony import */ var _js_product_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_product_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_partners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/partners.js */ "./resources/js/js/partners.js");
/* harmony import */ var _js_partners_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_partners_js__WEBPACK_IMPORTED_MODULE_3__);




}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUc7RUFDYkMsT0FBTyxFQUFFQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztFQUN2REMsT0FBTyxFQUFFRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDMUNFLE9BQU8sRUFBRUgsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFDcERHLE9BQU8sRUFBRUosUUFBUSxDQUFDSyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztFQUN2REMsT0FBTyxFQUFFTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFDaERNLE9BQU8sRUFBRVAsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFDbkRPLFNBQVMsRUFBRVIsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7RUFDeERRLE9BQU8sRUFBRVQsUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7RUFDdkRTLElBQUksRUFBRVYsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFDakRVLFVBQVUsRUFBRVgsUUFBUSxDQUFDQyxhQUFhLENBQUMsMkJBQTJCO0FBQ2hFLENBQUM7QUFFRCxTQUFTVyxZQUFZQSxDQUFBLEVBQUc7RUFDdEJDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFQyxpQkFBaUIsQ0FBQztFQUVwREEsaUJBQWlCLEVBQUU7RUFFbkIsSUFBSWYsUUFBUSxDQUFDZ0IsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsS0FBSyxRQUFRLEVBQUU7SUFDN0NsQixRQUFRLENBQUNnQixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE1BQU07RUFDdkMsQ0FBQyxNQUFNO0lBQ0xsQixRQUFRLENBQUNnQixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLFFBQVE7RUFDekM7RUFFQXBCLE1BQU0sQ0FBQ1csT0FBTyxDQUFDVSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxTQUFTLENBQUM7RUFDMUN0QixNQUFNLENBQUNJLE9BQU8sQ0FBQ2lCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUMxQ3RCLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDUyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxTQUFTLENBQUM7RUFDdkN0QixNQUFNLENBQUNhLFVBQVUsQ0FBQ1EsU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUyxDQUFDO0VBQzdDdEIsTUFBTSxDQUFDSyxPQUFPLENBQUNnQixTQUFTLENBQUNDLE1BQU0sQ0FBQyxTQUFTLENBQUM7RUFDMUN0QixNQUFNLENBQUNTLE9BQU8sQ0FBQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUyxDQUFDO0VBQzFDdEIsTUFBTSxDQUFDUSxPQUFPLENBQUNhLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUMxQ3RCLE1BQU0sQ0FBQ1UsU0FBUyxDQUFDVyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxTQUFTLENBQUM7RUFFNUMsSUFBSSxDQUFDdEIsTUFBTSxDQUFDSSxPQUFPLENBQUNpQixTQUFTLENBQUNFLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtJQUNqRFIsTUFBTSxDQUFDUyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVQLGlCQUFpQixDQUFDO0lBQ3ZEakIsTUFBTSxDQUFDSSxPQUFPLENBQUNpQixTQUFTLENBQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztFQUNwRDtBQUNGO0FBRUEsU0FBU1IsaUJBQWlCQSxDQUFBLEVBQUc7RUFDM0IsSUFBSUYsTUFBTSxDQUFDVyxXQUFXLEdBQUcsR0FBRyxFQUFFO0VBQzlCMUIsTUFBTSxDQUFDSSxPQUFPLENBQUNpQixTQUFTLENBQUNNLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztBQUNqRDtBQUVBM0IsTUFBTSxDQUFDQyxPQUFPLENBQUNlLGdCQUFnQixDQUFDLE9BQU8sRUFBRUYsWUFBWSxDQUFDO0FBQ3REZCxNQUFNLENBQUNNLE9BQU8sQ0FBQ3NCLE9BQU8sQ0FBQyxVQUFDQyxFQUFFO0VBQUEsT0FBS0EsRUFBRSxDQUFDYixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVGLFlBQVksQ0FBQztBQUFBLEVBQUM7Ozs7Ozs7Ozs7QUM3QzFFLElBQU1nQixVQUFVLEdBQUc1QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztBQUNqRSxJQUFNNEIsS0FBSyxHQUFHN0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7QUFDN0QsSUFBTTZCLEtBQUssR0FBRzlCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBRTdEMkIsVUFBVSxDQUFDZCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUN6Q2UsS0FBSyxDQUFDVixTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7RUFDbENVLEtBQUssQ0FBQ1gsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3BDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRixJQUFNVyxLQUFLLEdBQUcvQixRQUFRLENBQUNLLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0FBRTFEMEIsS0FBSyxDQUFDTCxPQUFPLENBQUMsVUFBQ00sSUFBSSxFQUFLO0VBQ3RCQSxJQUFJLENBQUNsQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ21CLEtBQUssRUFBSztJQUN4Q0YsS0FBSyxDQUFDTCxPQUFPLENBQUMsVUFBQ0MsRUFBRSxFQUFLO01BQ3BCLElBQUlBLEVBQUUsS0FBS00sS0FBSyxDQUFDQyxhQUFhLEVBQUU7UUFDOUJQLEVBQUUsQ0FBQ1IsU0FBUyxDQUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQy9CO0lBQ0YsQ0FBQyxDQUFDO0lBQ0ZVLEtBQUssQ0FBQ0MsYUFBYSxDQUFDZixTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFFOUNXLEtBQUssQ0FBQ0wsT0FBTyxDQUFDLFVBQUNNLElBQUksRUFBSztNQUN0QkcsS0FBSyxDQUFDQyxJQUFJLENBQUNKLElBQUksQ0FBQ0ssUUFBUSxDQUFDLENBQUNYLE9BQU8sQ0FBQyxVQUFDWSxLQUFLLEVBQUs7UUFBQSxJQUFBQyxnQkFBQTtRQUMzQyxDQUFBQSxnQkFBQSxHQUFBRCxLQUFLLENBQUNuQixTQUFTLGNBQUFvQixnQkFBQSx1QkFBZkEsZ0JBQUEsQ0FBaUJoQixNQUFNLENBQUMsUUFBUSxDQUFDO01BQ25DLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLElBQUlVLEtBQUssQ0FBQ0MsYUFBYSxDQUFDZixTQUFTLENBQUNFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUNwRCxJQUFBbUIscUJBQUEsR0FBQUMsY0FBQSxDQUErQ1IsS0FBSyxDQUFDQyxhQUFhLENBQUNHLFFBQVE7UUFBcEVLLENBQUMsR0FBQUYscUJBQUE7UUFBRUcsbUJBQW1CLEdBQUFILHFCQUFBO1FBQUVJLFlBQVksR0FBQUoscUJBQUE7TUFDM0NHLG1CQUFtQixDQUFDeEIsU0FBUyxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFDO01BQzNDbUIsWUFBWSxDQUFDekIsU0FBUyxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3RDO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7VUN2QkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDSjtBQUNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJpYS13ZWJwYWNrLy4vcmVzb3VyY2VzL2pzL2pzL2JhY2tkcm9wLmpzIiwid2VicGFjazovL3ByaWEtd2VicGFjay8uL3Jlc291cmNlcy9qcy9qcy9sYW5nLmpzIiwid2VicGFjazovL3ByaWEtd2VicGFjay8uL3Jlc291cmNlcy9qcy9qcy9wcm9kdWN0LmpzIiwid2VicGFjazovL3ByaWEtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmlhLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJpYS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcmlhLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcmlhLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcmlhLXdlYnBhY2svLi9yZXNvdXJjZXMvanMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkZXIgPSB7XG4gIG1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LWJ1dHRvblwiKSxcbiAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIiksXG4gIG5hdkxpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19uYXYtbGlzdFwiKSxcbiAgbmF2SXRlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX25hdi1pdGVtXCIpLFxuICBuYXZNZW51OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudVwiKSxcbiAgY29udGFjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2NvbnRhY3RcIiksXG4gIG1lbnVDbG9zZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnUtY2xvc2VcIiksXG4gIGxhbmdCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19sYW5nLWJ1dHRvblwiKSxcbiAgbG9nbzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xvZ28tc3ZnXCIpLFxuICBsb2dvRm9vdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbG9nby1zdmctLWZvb3RlclwiKSxcbn07XG5cbmZ1bmN0aW9uIG9wZW5CYWNrZHJvcCgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgd2F0Y2hTY3JlZW5IZWlnaHQpO1xuXG4gIHdhdGNoU2NyZWVuSGVpZ2h0KCk7XG5cbiAgaWYgKGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPT09IFwiaGlkZGVuXCIpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gIH1cblxuICBoZWFkZXIubGFuZ0J0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtb3BlblwiKTtcbiAgaGVhZGVyLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImlzLW9wZW5cIik7XG4gIGhlYWRlci5sb2dvLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1vcGVuXCIpO1xuICBoZWFkZXIubG9nb0Zvb3Rlci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtb3BlblwiKTtcbiAgaGVhZGVyLm5hdkxpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImlzLW9wZW5cIik7XG4gIGhlYWRlci5jb250YWN0LmNsYXNzTGlzdC50b2dnbGUoXCJpcy1vcGVuXCIpO1xuICBoZWFkZXIubmF2TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtb3BlblwiKTtcbiAgaGVhZGVyLm1lbnVDbG9zZS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtb3BlblwiKTtcblxuICBpZiAoIWhlYWRlci5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLW9wZW5cIikpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB3YXRjaFNjcmVlbkhlaWdodCk7XG4gICAgaGVhZGVyLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJlY2tkcm9wLXNjcm9sbFwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3YXRjaFNjcmVlbkhlaWdodCgpIHtcbiAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+IDY5OCkgcmV0dXJuO1xuICBoZWFkZXIuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmVja2Ryb3Atc2Nyb2xsXCIpO1xufVxuXG5oZWFkZXIubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkJhY2tkcm9wKTtcbmhlYWRlci5uYXZJdGVtLmZvckVhY2goKGVsKSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkJhY2tkcm9wKSk7XG4iLCJjb25zdCBidXR0b25MYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xhbmctYnV0dG9uXCIpO1xuY29uc3QgZW5TdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGFuZy1zdmctLWVuXCIpO1xuY29uc3QgYXJTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGFuZy1zdmctLWFyXCIpO1xuXG5idXR0b25MYW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGVuU3ZnLmNsYXNzTGlzdC50b2dnbGUoXCJlbkFjdGl2ZVwiKTtcbiAgYXJTdmcuY2xhc3NMaXN0LnRvZ2dsZShcImFyQWN0aXZlXCIpO1xufSk7XG4iLCJjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdHNfX2l0ZW1cIik7XG5cbml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIEFycmF5LmZyb20oaXRlbS5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0Py5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgY29uc3QgW18sIHByb2R1Y3RzRGVzY3JpcHRpb24sIHByb2R1Y3RzSWNvbl0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuO1xuICAgICAgcHJvZHVjdHNEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgcHJvZHVjdHNJY29uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcbn0pO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9qcy9iYWNrZHJvcC5qc1wiO1xuaW1wb3J0IFwiLi9qcy9sYW5nLmpzXCI7XG5pbXBvcnQgXCIuL2pzL3Byb2R1Y3QuanNcIjtcbmltcG9ydCBcIi4vanMvcGFydG5lcnMuanNcIjtcbiJdLCJuYW1lcyI6WyJoZWFkZXIiLCJtZW51QnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudCIsIm5hdkxpc3QiLCJuYXZJdGVtIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdk1lbnUiLCJjb250YWN0IiwibWVudUNsb3NlIiwibGFuZ0J0biIsImxvZ28iLCJsb2dvRm9vdGVyIiwib3BlbkJhY2tkcm9wIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndhdGNoU2NyZWVuSGVpZ2h0IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJpbm5lckhlaWdodCIsImFkZCIsImZvckVhY2giLCJlbCIsImJ1dHRvbkxhbmciLCJlblN2ZyIsImFyU3ZnIiwiaXRlbXMiLCJpdGVtIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJjaGlsZCIsIl9jaGlsZCRjbGFzc0xpc3QiLCJfZXZlbnQkY3VycmVudFRhcmdldCQiLCJfc2xpY2VkVG9BcnJheSIsIl8iLCJwcm9kdWN0c0Rlc2NyaXB0aW9uIiwicHJvZHVjdHNJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==