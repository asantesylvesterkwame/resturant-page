/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_modules_Navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/modules/Navbar.js */ \"./src/modules/Navbar.js\");\n\r\n\r\n(0,_src_modules_Navbar_js__WEBPACK_IMPORTED_MODULE_0__.Navbar)();\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/Navbar.js":
/*!*******************************!*\
  !*** ./src/modules/Navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": () => (/* binding */ Navbar)\n/* harmony export */ });\n// import bgImage from \"../../dist/imageAssets/BgImage.jpg\"\r\n\r\nconst Navbar = () => {\r\n    let backgroundDiv = document.createElement(\"div\");\r\n    let mainContentDiv = document.getElementById(\"content\");\r\n    \r\n    mainContentDiv.append(backgroundDiv);\r\n\r\n    backgroundDiv.style.cssText = \" background-color: #0074D9;  \";\r\n\r\n    // let backgroundImg = document.createElement(\"img\");\r\n    // backgroundDiv.appendChild(backgroundImg);\r\n    // backgroundImg.setAttribute(\"src\", \"../../dist/imageAssets/BgImage.jpg\")\r\n    // backgroundImg.style.cssText = \"background-size: object-fit; z-index:-1;\"\r\n\r\n    let logoDiv = document.createElement(\"div\");\r\n    backgroundDiv.appendChild(logoDiv);\r\n    logoDiv.style.cssText = \": ;\"\r\n\r\n    let logo = document.createElement(\"h1\");\r\n    logoDiv.appendChild(logo);\r\n    logo.innerText = \"The Boat\"\r\n    logo.style.cssText = \"font-family: poppins, sans serif; color: white; text-align: center;\";\r\n\r\n    let tabsDiv = document.createElement(\"div\");\r\n    backgroundDiv.appendChild(tabsDiv);\r\n    tabsDiv.style.cssText = \" display:flex; justify-content: center; align-items: center; gap: 1em; padding:1em;\"\r\n\r\n    let homeTabDiv = document.createElement(\"div\")\r\n    tabsDiv.appendChild(homeTabDiv);\r\n    let homeTabDivText = document.createElement(\"h3\")\r\n    homeTabDiv.appendChild(homeTabDivText)\r\n    homeTabDivText.innerText = \"Home\"\r\n    homeTabDiv.style.cssText = \"\"\r\n\r\n    let menuTabDiv = document.createElement(\"div\");\r\n    tabsDiv.appendChild(menuTabDiv);\r\n    let menuTabText = document.createElement(\"h3\");\r\n    tabsDiv.appendChild(menuTabText);\r\n    menuTabText.innerText = \"Menu\"\r\n    menuTabText.style.cssText = \"\"\r\n\r\n    let contactTabDiv = document.createElement(\"div\");\r\n    tabsDiv.appendChild(contactTabDiv);\r\n    let contactTabText = document.createElement(\"h3\");\r\n    contactTabDiv.appendChild(contactTabText);\r\n    contactTabText.innerText = \"Contact\";\r\n\r\n\r\n\r\n\r\n    \r\n    \r\n\r\n\r\n\r\n} \n\n//# sourceURL=webpack://resturant-page/./src/modules/Navbar.js?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 
