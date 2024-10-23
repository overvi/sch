/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/ts/darkMode.ts":
/*!***********************************!*\
  !*** ./src/assets/ts/darkMode.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initDarkMode = void 0;\nconst initDarkMode = () => {\n    const isDarkMode = localStorage.getItem(\"darkMode\") === \"true\";\n    document.documentElement.classList.toggle(\"dark\", isDarkMode);\n};\nexports.initDarkMode = initDarkMode;\n(0, exports.initDarkMode)();\n\n\n//# sourceURL=webpack:///./src/assets/ts/darkMode.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/ts/darkMode.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;