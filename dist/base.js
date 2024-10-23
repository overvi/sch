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

/***/ "./src/assets/ts/main.ts":
/*!*******************************!*\
  !*** ./src/assets/ts/main.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.toggleDarkMode = void 0;\nconst toggleDarkMode = () => {\n    const isDarkMode = localStorage.getItem(\"darkMode\") === \"true\";\n    document.documentElement.classList.toggle(\"dark\", !isDarkMode);\n    localStorage.setItem(\"darkMode\", (!isDarkMode).toString());\n};\nexports.toggleDarkMode = toggleDarkMode;\nconst darkModeToggleButton = document.querySelectorAll(\".darkModeToggle\");\ndarkModeToggleButton === null || darkModeToggleButton === void 0 ? void 0 : darkModeToggleButton.forEach((button) => button.addEventListener(\"click\", exports.toggleDarkMode));\nconst toggleMenu = document.querySelectorAll(\".toggle-menu\");\nconst toggleLogin = document.querySelectorAll(\".toggle-login\");\nconst menu = document.querySelector(\".menu\");\nconst loginOverlay = document.querySelector(\".login-overlay\");\ntoggleMenu === null || toggleMenu === void 0 ? void 0 : toggleMenu.forEach((item) => {\n    item.addEventListener(\"click\", () => {\n        menu === null || menu === void 0 ? void 0 : menu.classList.toggle(\"hidden\");\n        document.documentElement.classList.toggle(\"overflow-hidden\");\n    });\n});\ntoggleLogin.forEach((item) => {\n    item.addEventListener(\"click\", () => {\n        loginOverlay === null || loginOverlay === void 0 ? void 0 : loginOverlay.classList.toggle(\"hidden\");\n    });\n});\nwindow.addEventListener(\"click\", (event) => {\n    if (loginOverlay === null || loginOverlay === void 0 ? void 0 : loginOverlay.classList.contains(\"hidden\"))\n        return;\n    if (!event.target.closest(\".toggle-login\")) {\n        loginOverlay === null || loginOverlay === void 0 ? void 0 : loginOverlay.classList.add(\"hidden\");\n    }\n});\nconst scrollTop = document.getElementById(\"scroll-top\");\nscrollTop === null || scrollTop === void 0 ? void 0 : scrollTop.addEventListener(\"click\", () => {\n    window.scroll({ top: 0, behavior: \"smooth\" });\n});\n\n\n//# sourceURL=webpack:///./src/assets/ts/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/ts/main.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;