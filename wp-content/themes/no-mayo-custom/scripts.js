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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log("welcome to index.js");

// Welcome to index.js
//
// You can write ES6 here! It will be compiled by webpack using Babel into ES5.
//
// ヽ(´▽`)/

// Stricter checking of small-but-often-problematic JS errors
"use strict";

// Instruct webpack to compile Sass
var sass = __webpack_require__(0);

// Load dependencies
var userAgent = new UserAgent().parse(navigator.userAgent);

// Import component scripts and template scripts
var headerScripts = __webpack_require__(6).headerScripts;

// Store any other constant values for this project
var greeting = "Hola World";

document.addEventListener("DOMContentLoaded", function () {
  console.log(greeting);
  console.log("your document has loaded");

  // Use the userAgent information to add useful classes to the body element,
  // which can be used to finely adjust styling when needed
  applyUserAgentClasses(userAgent);

  headerScripts.run();
});

function applyUserAgentClasses(userAgent) {
  document.body.classList.add(userAgent.browser.toLowerCase());

  if (userAgent.isDesktop) {
    document.body.classList.add("desktop");
  } else if (userAgent.isMobile) {
    document.body.classList.add("mobile");
  }
}

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var headerScripts = {
  run: function run() {
    console.log("running headerScripts");

    // find elements and attach event listeners and whatnot
  }
};

module.exports.headerScripts = headerScripts;

/***/ })
/******/ ]);
//# sourceMappingURL=scripts.js.map