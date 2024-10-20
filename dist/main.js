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

/***/ "./src/assets/css/input.css":
/*!**********************************!*\
  !*** ./src/assets/css/input.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/assets/css/input.css?");

/***/ }),

/***/ "./src/assets/ts/index.ts":
/*!********************************!*\
  !*** ./src/assets/ts/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.toggleDarkMode = void 0;\n__webpack_require__(/*! ../css/input.css */ \"./src/assets/css/input.css\");\nconst toggleDarkMode = () => {\n    const isDarkMode = localStorage.getItem(\"darkMode\") === \"true\";\n    document.documentElement.classList.toggle(\"dark\", !isDarkMode);\n    localStorage.setItem(\"darkMode\", (!isDarkMode).toString());\n};\nexports.toggleDarkMode = toggleDarkMode;\nconst darkModeToggleButton = document.querySelectorAll(\".darkModeToggle\");\ndarkModeToggleButton === null || darkModeToggleButton === void 0 ? void 0 : darkModeToggleButton.forEach((button) => button.addEventListener(\"click\", exports.toggleDarkMode));\nlet question = document.querySelectorAll(\".question\");\nquestion.forEach((question) => {\n    question.addEventListener(\"click\", () => {\n        const active = document.querySelector(\".question.active\");\n        if (active && active !== question) {\n            active.classList.toggle(\"active\");\n            active.nextElementSibling.style.maxHeight = \" 0\";\n        }\n        question.classList.toggle(\"active\");\n        const answer = question.nextElementSibling;\n        if (question.classList.contains(\"active\")) {\n            answer.style.maxHeight = answer.scrollHeight + \"px\";\n        }\n        else {\n            answer.style.maxHeight = \"0\";\n        }\n    });\n});\n// @ts-ignore\nconst splide = new Splide(\".splide-schools\", {\n    perMove: 1,\n    perPage: 1,\n    arrows: false,\n}).mount();\n// @ts-ignore\nnew Splide(\".splide-title\", {\n    mediaQuery: \"min\",\n    perPage: 2,\n    perMove: 1,\n    gap: \"1rem\",\n    arrows: false,\n    breakpoints: {\n        550: {\n            perPage: 3,\n        },\n        680: {\n            perPage: 4,\n        },\n        840: {\n            destroy: true,\n        },\n    },\n}).mount();\n//@ts-ignore\nvar elms = document.querySelectorAll(\".splide-school-image\");\nfor (var i = 0; i < elms.length; i++) {\n    //@ts-ignore\n    const elm = new Splide(elms[i], {\n        perPage: 1,\n        arrows: false,\n        width: \"30rem\",\n        type: \"loop\",\n        fixedHeight: \"max-content\",\n    }).mount();\n    setInterval(() => {\n        elm.go(\">\");\n    }, 3000);\n}\nconst nextSplide = document.querySelectorAll(\".splide__custom__arrow--next\");\nconst prevSplide = document.querySelectorAll(\".splide__custom__arrow--prev\");\nnextSplide.forEach((item) => {\n    item.addEventListener(\"click\", () => {\n        splide.go(\">\");\n    });\n});\nprevSplide.forEach((item) => {\n    item.addEventListener(\"click\", () => {\n        splide.go(\"-1\");\n    });\n});\nconst toggleMenu = document.querySelectorAll(\".toggle-menu\");\nconst toggleLogin = document.querySelectorAll(\".toggle-login\");\nconst menu = document.querySelector(\".menu\");\nconst loginOverlay = document.querySelector(\".login-overlay\");\ntoggleMenu === null || toggleMenu === void 0 ? void 0 : toggleMenu.forEach((item) => {\n    item.addEventListener(\"click\", () => {\n        menu === null || menu === void 0 ? void 0 : menu.classList.toggle(\"hidden\");\n        document.documentElement.classList.toggle(\"overflow-hidden\");\n    });\n});\ntoggleLogin.forEach((item) => {\n    item.addEventListener(\"click\", () => {\n        loginOverlay === null || loginOverlay === void 0 ? void 0 : loginOverlay.classList.toggle(\"hidden\");\n    });\n});\nwindow.addEventListener(\"click\", (event) => {\n    if (loginOverlay === null || loginOverlay === void 0 ? void 0 : loginOverlay.classList.contains(\"hidden\"))\n        return;\n    if (!event.target.closest(\".toggle-login\")) {\n        loginOverlay === null || loginOverlay === void 0 ? void 0 : loginOverlay.classList.add(\"hidden\");\n    }\n});\n// Change-Text\nclass TextAnimator {\n    constructor(element, texts, options = {}) {\n        this.element = element;\n        this.texts = texts;\n        this.element = element;\n        this.texts = texts;\n        this.currentIndex = 0;\n        this.options = Object.assign({\n            minIterations: 5,\n            maxIterations: 10,\n            iterationInterval: 300,\n            pauseDuration: 2000,\n            changeTextDuration: 150,\n        }, options);\n    }\n    changeText(text) {\n        this.element.style.opacity = \"0\";\n        this.element.style.transform = \"translateY(-20px)\";\n        setTimeout(() => {\n            this.element.textContent = text;\n            this.element.style.opacity = \"1\";\n            this.element.style.transform = \"translateY(0)\";\n        }, this.options.changeTextDuration);\n    }\n    iterateTexts() {\n        let iterationCount = 0;\n        const targetIterations = Math.floor(Math.random() *\n            (this.options.maxIterations - this.options.minIterations + 1)) + this.options.minIterations;\n        const finalTextIndex = Math.floor(Math.random() * this.texts.length);\n        const iterationInterval = setInterval(() => {\n            this.changeText(this.texts[this.currentIndex]);\n            this.currentIndex = (this.currentIndex + 1) % this.texts.length;\n            iterationCount++;\n            if (iterationCount >= targetIterations) {\n                clearInterval(iterationInterval);\n                this.changeText(this.texts[finalTextIndex]);\n                setTimeout(() => this.startAnimation(), this.options.pauseDuration);\n            }\n        }, this.options.iterationInterval);\n    }\n    startAnimation() {\n        this.iterateTexts();\n    }\n}\nlet start = false;\nfunction isFooterInView() {\n    const footer = document.querySelector(\".booking-animation\");\n    if (!footer)\n        return false;\n    const rect = footer.getBoundingClientRect();\n    return rect.y < 70;\n}\nconst animator1 = new TextAnimator(document.getElementById(\"animated-text-1\"), [\"Hello\", \"Welcome\", \"Changing\", \"Text\", \"Animation\"], { minIterations: 5, maxIterations: 10 });\nconst animator2 = new TextAnimator(document.getElementById(\"animated-text-2\"), [\"Reusable\", \"Flexible\", \"Random\", \"Stop\", \"Example\"], { minIterations: 3, maxIterations: 7 });\nconst runAnimation = () => {\n    animator2.startAnimation();\n    animator1.startAnimation();\n};\nconst handleScroll = () => {\n    const footerVisible = isFooterInView();\n    if (footerVisible) {\n        runAnimation();\n        window.removeEventListener(\"scroll\", handleScroll); // use handleScroll here\n    }\n};\nwindow.addEventListener(\"scroll\", handleScroll);\n// Filters\nconst filterCheckbox = document.querySelectorAll(\".filter-checkbox\");\nconst filterRemove = document.querySelectorAll(\".remove-filter-btn\");\nfilterCheckbox.forEach((item, index) => {\n    item.addEventListener(\"change\", () => {\n        filterRemove[index].classList.toggle(\"hidden\");\n        filterRemove[index].addEventListener(\"click\", () => {\n            item.checked = false;\n            filterRemove[index].classList.add(\"hidden\");\n        });\n    });\n});\n\n\n//# sourceURL=webpack:///./src/assets/ts/index.ts?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/ts/index.ts");
/******/ 	
/******/ })()
;