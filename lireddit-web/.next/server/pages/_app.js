module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./src/theme.tsx\");\nvar _jsxFileName = \"/home/marcel/Public/Projects/LiReddit/lireddit-web/src/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CSSReset\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }), __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUE4QztBQUM1QyxTQUNFLE1BQUMsNkRBQUQ7QUFBZSxTQUFLLEVBQUVDLDhDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLFNBQUQsZUFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkYsQ0FERjtBQU1EOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENTU1Jlc2V0LCBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Q1NTUmVzZXQgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/marcel/Public/Projects/LiReddit/lireddit-web/src/theme.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst fonts = _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"theme\"].fonts), {}, {\n  mono: `'Menlo', monospace`\n});\n\nconst breakpoints = [\"40em\", \"52em\", \"64em\"];\n\nconst theme = _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"theme\"]), {}, {\n  colors: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"theme\"].colors), {}, {\n    black: \"#16161D\"\n  }),\n  fonts,\n  breakpoints,\n  icons: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"theme\"].icons), {}, {\n    logo: {\n      path: __jsx(\"svg\", {\n        width: \"3000\",\n        height: \"3163\",\n        viewBox: \"0 0 3000 3163\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 9\n        }\n      }, __jsx(\"rect\", {\n        width: \"3000\",\n        height: \"3162.95\",\n        fill: \"none\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }\n      }), __jsx(\"path\", {\n        d: \"M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z\",\n        fill: \"currentColor\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }\n      })),\n      viewBox: \"0 0 3000 3163\"\n    }\n  })\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUudHN4P2NhNzYiXSwibmFtZXMiOlsiZm9udHMiLCJjaGFrcmFUaGVtZSIsIm1vbm8iLCJicmVha3BvaW50cyIsInRoZW1lIiwiY29sb3JzIiwiYmxhY2siLCJpY29ucyIsImxvZ28iLCJwYXRoIiwidmlld0JveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBSyxtQ0FBUUMscURBQVcsQ0FBQ0QsS0FBcEI7QUFBMkJFLE1BQUksRUFBRztBQUFsQyxFQUFYOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLENBQXBCOztBQUVBLE1BQU1DLEtBQUssbUNBQ05ILHFEQURNO0FBRVRJLFFBQU0sa0NBQ0RKLHFEQUFXLENBQUNJLE1BRFg7QUFFSkMsU0FBSyxFQUFFO0FBRkgsSUFGRztBQU1UTixPQU5TO0FBT1RHLGFBUFM7QUFRVEksT0FBSyxrQ0FDQU4scURBQVcsQ0FBQ00sS0FEWjtBQUVIQyxRQUFJLEVBQUU7QUFDSkMsVUFBSSxFQUNGO0FBQ0UsYUFBSyxFQUFDLE1BRFI7QUFFRSxjQUFNLEVBQUMsTUFGVDtBQUdFLGVBQU8sRUFBQyxlQUhWO0FBSUUsWUFBSSxFQUFDLE1BSlA7QUFLRSxhQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9FO0FBQU0sYUFBSyxFQUFDLE1BQVo7QUFBbUIsY0FBTSxFQUFDLFNBQTFCO0FBQW9DLFlBQUksRUFBQyxNQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEYsRUFRRTtBQUNFLFNBQUMsRUFBQyxpSUFESjtBQUVFLFlBQUksRUFBQyxjQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSRixDQUZFO0FBZ0JKQyxhQUFPLEVBQUU7QUFoQkw7QUFGSDtBQVJJLEVBQVg7O0FBK0JlTixvRUFBZiIsImZpbGUiOiIuL3NyYy90aGVtZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aGVtZSBhcyBjaGFrcmFUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcblxuY29uc3QgZm9udHMgPSB7IC4uLmNoYWtyYVRoZW1lLmZvbnRzLCBtb25vOiBgJ01lbmxvJywgbW9ub3NwYWNlYCB9O1xuXG5jb25zdCBicmVha3BvaW50cyA9IFtcIjQwZW1cIiwgXCI1MmVtXCIsIFwiNjRlbVwiXTtcblxuY29uc3QgdGhlbWUgPSB7XG4gIC4uLmNoYWtyYVRoZW1lLFxuICBjb2xvcnM6IHtcbiAgICAuLi5jaGFrcmFUaGVtZS5jb2xvcnMsXG4gICAgYmxhY2s6IFwiIzE2MTYxRFwiLFxuICB9LFxuICBmb250cyxcbiAgYnJlYWtwb2ludHMsXG4gIGljb25zOiB7XG4gICAgLi4uY2hha3JhVGhlbWUuaWNvbnMsXG4gICAgbG9nbzoge1xuICAgICAgcGF0aDogKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9XCIzMDAwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIzMTYzXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMwMDAgMzE2M1wiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIzMDAwXCIgaGVpZ2h0PVwiMzE2Mi45NVwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk0xNDcwLjg5IDE0NDguODFMMjE3MCAyNDg4LjE5SDgyMFY3MDYuMzkySDIxNzBMMTQ3MC44OSAxNDQ4LjgxWk0xNDA4LjIxIDE1MTUuMzdMOTA5LjE5NiAyMDQ1LjNWMjM5My40NkgxOTk4Ljg0TDE0MDguMjEgMTUxNS4zN1pcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICApLFxuICAgICAgdmlld0JveDogXCIwIDAgMzAwMCAzMTYzXCIsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2NvcmVcIj9lZTg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBjaGFrcmEtdWkvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/core\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });