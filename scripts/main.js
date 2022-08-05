/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../#inCOS_home/#DevSource/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../#inCOS_home/#DevSource/scripts/main.js":
/*!*************************************************!*\
  !*** ../#inCOS_home/#DevSource/scripts/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar head = document.head;\nvar headerHeight = window.getComputedStyle(document.querySelector('header.header')).height;\nhead.insertAdjacentHTML('beforeend', \"<style> :root{ --header-height: \".concat(headerHeight, \";}</style>\"));\n\nvar Spoiler = /*#__PURE__*/function () {\n  function Spoiler(selector) {\n    _classCallCheck(this, Spoiler);\n\n    this.$elemCollection = this.getElemCollection(selector);\n    this.spoilers;\n    this.mediaQueries = [];\n    this.mediaQueriesWidth = [];\n  }\n\n  _createClass(Spoiler, [{\n    key: \"getElemCollection\",\n    value: function getElemCollection(selector) {\n      if (!selector) return;\n      return _toConsumableArray(document.querySelectorAll(selector));\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.$elemCollection.forEach(function (elem) {\n        if (!_this.mediaQueries.includes(elem.dataset.spoilers)) _this.mediaQueries.push(elem.dataset.spoilers);\n\n        _this.checkSpoilerStatus(elem);\n\n        elem.addEventListener('click', _this.clickHandler);\n      }, {\n        passive: true\n      });\n\n      if (this.mediaQueries.length) {\n        window.addEventListener('resize', function (e) {\n          _this.mediaQueries.forEach(function (media) {\n            var value = media.split(',')[0];\n            var prop = media.split(',')[1];\n\n            if (prop === 'min') {\n              window.innerWidth < value ? _this.changeSpoilerStatus('', media, true) : _this.changeSpoilerStatus('', media, false);\n            }\n\n            if (prop === 'max') {\n              window.innerWidth > value ? _this.changeSpoilerStatus('', media, true) : _this.changeSpoilerStatus('', media, false);\n            }\n          });\n        }, {\n          passive: true\n        });\n      }\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler(e) {\n      if (e.target.dataset.spoilerContent === '') return;\n\n      if (e.target.parentNode.dataset.spoilersOnce) {\n        _toConsumableArray(document.querySelectorAll(\".\".concat(_toConsumableArray(this.classList).join('.')))).forEach(function (elem) {\n          return elem.classList.remove('expanded');\n        });\n      }\n\n      if (e.target.closest('[data-spoiler-button]')) this.classList.toggle('expanded');\n    }\n  }, {\n    key: \"changeSpoilerStatus\",\n    value: function changeSpoilerStatus() {\n      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n      var media = arguments.length > 1 ? arguments[1] : undefined;\n      var enable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n      if (element) {\n        enable ? element.classList.add('spoiler') : element.classList.remove('spoiler');\n        return;\n      }\n\n      this.$elemCollection.forEach(function (elem) {\n        if (elem.dataset.spoilers === media) {\n          enable ? elem.classList.add('spoiler') : elem.classList.remove('spoiler');\n        }\n      });\n    }\n  }, {\n    key: \"checkSpoilerStatus\",\n    value: function checkSpoilerStatus(spoiler) {\n      var value = spoiler.dataset.spoilers.split(',')[0];\n      var prop = spoiler.dataset.spoilers.split(',')[1];\n\n      if (prop === 'min') {\n        window.innerWidth < value ? this.changeSpoilerStatus(spoiler, value, true) : this.changeSpoilerStatus(spoiler, value, false);\n      }\n    }\n  }]);\n\n  return Spoiler;\n}();\n\nVanillaTilt.init(document.querySelectorAll(\"*[data-tilt]\"), {\n  // reverse: true, // reverse the tilt direction\n  max: 10,\n  // max tilt rotation (degrees)\n  perspective: 1000,\n  // Transform perspective, the lower the more extreme the tilt gets.\n  scale: 1,\n  // 2 = 200%, 1.5 = 150%, etc..\n  speed: 300,\n  // Speed of the enter/exit transition\n  transition: true,\n  // Set a transition on enter/exit.\n  axis: null,\n  // What axis should be disabled. Can be X or Y.\n  easing: \"cubic-bezier(.03,.98,.52,.99)\",\n  // Easing on enter/exit.\n  gyroscope: true,\n  // Boolean to enable/disable device orientation detection,\n  gyroscopeMinAngleX: -45,\n  // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;\n  gyroscopeMaxAngleX: 45,\n  // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;\n  gyroscopeMinAngleY: -45,\n  // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;\n  gyroscopeMaxAngleY: 45\n}); // new Swiper('.swiper.portfolio__slider', {\n//     slidesPerView: 1.1,\n//     speed: 1000,\n//     updateOnWindowResize: true,\n//     preventInteractionOnTransition: true,\n//     watchOverflow: true,\n//     centeredSlides: true,\n//     passiveListeners: true,\n//     effect: 'creative',\n//     creativeEffect: {\n//         prev: {\n//             translate: ['-40%', 0, 0],\n//             scale: 0.8,\n//             opacity: 0.1,\n//         },\n//         next: {\n//             translate: ['40%', 0, 0],\n//             scale: 0.8,\n//             opacity: 0.1,\n//         },\n//     },\n//     slideToClickedSlide: true,\n//     loop: true,\n//     autoplay: {\n//         delay: 5000,\n//         disableOnInteraction: false,\n//         pauseOnMouseEnter: true,\n//     },\n//     breakpoints: {\n//         320: {\n//             slidesPerView: 1,\n//             spaceBetween: 0\n//         },\n//         569: {\n//             slidesPerView: 1.1,\n//             spaceBetween: 10\n//         },\n//         1024: {\n//             slidesPerView: 1.2,\n//             spaceBetween: 40\n//         }\n//     },\n//     grabCursor: true,\n//     preloadImages: false,\n//     lazy: true,\n//     longSwipesRatio: 0.15,\n//     passiveListeners: true,\n// })\n\nnew Spoiler('[data-spoilers]').init();\ndocument.addEventListener('DOMContentLoaded', function () {\n  AOS.init();\n  VANTA.WAVES({\n    el: \"body\",\n    color: 0xb1b1b1,\n    mouseControls: true,\n    touchControls: true,\n    gyroControls: false,\n    minHeight: 200.00,\n    minWidth: 200.00,\n    scale: 1.00,\n    scaleMobile: 1.00,\n    waveSpeed: 0.45\n  });\n  var widget = document.createElement('script');\n  widget.dataset.pfId = 'c12750a5-af26-4c4f-b973-b1bca950a5da';\n  widget.src = 'https://widget.profeat.team/script/widget.js?id=c12750a5-af26-4c4f-b973-b1bca950a5da&now=' + Date.now();\n  document.head.appendChild(widget);\n});\n\n//# sourceURL=webpack:///../#inCOS_home/#DevSource/scripts/main.js?");

/***/ })

/******/ });