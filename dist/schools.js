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

/***/ "./src/assets/ts/schools.ts":
/*!**********************************!*\
  !*** ./src/assets/ts/schools.ts ***!
  \**********************************/
/***/ (() => {

eval("\nconst sortBtns = document.querySelectorAll(\".sort-button\");\nconst sortContents = document.querySelectorAll(\".sort-content\");\nsortBtns.forEach((button, index) => {\n    button.addEventListener(\"click\", () => {\n        button.classList.toggle(\"hidden\");\n    });\n});\nsortContents.forEach((content, index) => {\n    content.addEventListener(\"dblclick\", () => {\n        sortBtns[index].classList.remove(\"hidden\");\n    });\n});\n\n\n//# sourceURL=webpack:///./src/assets/ts/schools.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/ts/schools.ts"]();
/******/ 	
/******/ })()
;