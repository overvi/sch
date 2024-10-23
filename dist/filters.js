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

/***/ "./src/assets/ts/filters.ts":
/*!**********************************!*\
  !*** ./src/assets/ts/filters.ts ***!
  \**********************************/
/***/ (() => {

eval("\nconst filterCheckbox = document.querySelectorAll(\".filter-checkbox\");\nconst filterRemove = document.querySelectorAll(\".remove-filter-btn\");\nconst closeFilters = document.querySelector(\".close-all-filters\");\nlet hiddenElements = 0;\nfilterCheckbox.forEach((item, index) => {\n    const toggleChecked = () => {\n        filterRemove[index].classList.remove(\"hidden\");\n        filterRemove[index].addEventListener(\"click\", () => {\n            item.checked = false;\n            filterRemove[index].classList.add(\"hidden\");\n            hideElement();\n        });\n    };\n    const hideElement = () => {\n        if (filterRemove[index].classList.contains(\"hide-variant\")) {\n            filterCheckbox[index].parentElement.classList.add(\"hidden\");\n            hiddenElements += 1;\n        }\n        if (hiddenElements == filterCheckbox.length) {\n            closeFilters === null || closeFilters === void 0 ? void 0 : closeFilters.classList.add(\"hidden\");\n        }\n    };\n    if (item.checked)\n        toggleChecked();\n    item.addEventListener(\"change\", () => {\n        toggleChecked();\n        hideElement();\n    });\n});\ncloseFilters === null || closeFilters === void 0 ? void 0 : closeFilters.addEventListener(\"click\", () => {\n    filterCheckbox.forEach((fc) => {\n        var _a;\n        fc.checked = false;\n        (_a = fc.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add(\"hidden\");\n        closeFilters.classList.add(\"hidden\");\n    });\n});\n\n\n//# sourceURL=webpack:///./src/assets/ts/filters.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/ts/filters.ts"]();
/******/ 	
/******/ })()
;