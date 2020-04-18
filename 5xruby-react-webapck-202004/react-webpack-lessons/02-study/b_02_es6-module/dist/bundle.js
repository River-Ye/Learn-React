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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/es6 */ "./src/utils/es6/index.js");
console.log('---------------------------');
var message = 'hi index';
console.log(message);

// import xxx from './相對路徑'
// import xxx from './utils/es6/index.js'  // 後面.js可以不用打
// import xxx from './utils/es6/index'     // webpack 預設找index
// import xxx from './utils/es6'           // 可縮寫成這樣

// import {multiply} from './utils/es6'    // 就可以用 src/utils/es6/index.js 的 multiply
// console.log(multiply(2,2));

// import MyClass from './utils/es6'

// 上面兩個可以整合成這一行
// import MyClass, {multiply} from './utils/es6'



// TODO: 1 start
// /*
// es6



// 以上兩行可以整合成一行
// import MyClass, { multiply, divide } from './utils/es6';

console.log("multiply(3, 3)", Object(_utils_es6__WEBPACK_IMPORTED_MODULE_0__["multiply"])(3, 3));
console.log("divide(9, 3)", Object(_utils_es6__WEBPACK_IMPORTED_MODULE_0__["divide"])(10, 3));

var my = new _utils_es6__WEBPACK_IMPORTED_MODULE_0__["default"]();
my.foo();
// TODO: 1 end
// */


// TODO: 2 start
/*
console.log('-------- commonjs --------');
// commonjs
var util = require("./util/commonjs");
console.log("add(1, 1)", util.add(1, 1));
console.log("subtract(2, 2)", util.subtract(2, 2));
// */
// TODO: 2 end


/***/ }),

/***/ "./src/utils/es6/index.js":
/*!********************************!*\
  !*** ./src/utils/es6/index.js ***!
  \********************************/
/*! exports provided: multiply, divide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
var message = 'hi es6 module';
console.log(message);


function privateFun(){
  console.log('this is privet function');
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// TODO
// /*
// export 是 webpack 語法，不是原生 JS 語法
function multiply(a, b) {
  return a * b;
} 
// */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// TODO
// /*
function divide(a, b) {
  return a / b;
} 
// */

// TODO
// /*
class MyClass {
  foo(){
    console.log('foo');
  }
} 
// */

// TODO
// 一支 JS 檔，只能有一個 export default，但可以有很多 export
// 優先權通常先使用 export default
// 有其他小功能要給別人使用，才會用 export (不相干的會用這個)
/* harmony default export */ __webpack_exports__["default"] = (MyClass);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9lczYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsU0FBUztBQUNwQjs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQixTQUFTOzs7O0FBSTdCO0FBQ0E7QUFDQTtBQUMrQztBQUNiOztBQUVsQztBQUNBLG9CQUFvQixtQkFBbUI7O0FBRXZDLDhCQUE4QiwyREFBUTtBQUN0Qyw0QkFBNEIseURBQU07O0FBRWxDLGFBQWEsa0RBQU87QUFDcEI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsQztBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxzRUFBTyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xudmFyIG1lc3NhZ2UgPSAnaGkgaW5kZXgnO1xuY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbi8vIGltcG9ydCB4eHggZnJvbSAnLi/nm7jlsI3ot6/lvpEnXG4vLyBpbXBvcnQgeHh4IGZyb20gJy4vdXRpbHMvZXM2L2luZGV4LmpzJyAgLy8g5b6M6Z2iLmpz5Y+v5Lul5LiN55So5omTXG4vLyBpbXBvcnQgeHh4IGZyb20gJy4vdXRpbHMvZXM2L2luZGV4JyAgICAgLy8gd2VicGFjayDpoJDoqK3mib5pbmRleFxuLy8gaW1wb3J0IHh4eCBmcm9tICcuL3V0aWxzL2VzNicgICAgICAgICAgIC8vIOWPr+e4ruWvq+aIkOmAmeaoo1xuXG4vLyBpbXBvcnQge211bHRpcGx5fSBmcm9tICcuL3V0aWxzL2VzNicgICAgLy8g5bCx5Y+v5Lul55SoIHNyYy91dGlscy9lczYvaW5kZXguanMg55qEIG11bHRpcGx5XG4vLyBjb25zb2xlLmxvZyhtdWx0aXBseSgyLDIpKTtcblxuLy8gaW1wb3J0IE15Q2xhc3MgZnJvbSAnLi91dGlscy9lczYnXG5cbi8vIOS4iumdouWFqeWAi+WPr+S7peaVtOWQiOaIkOmAmeS4gOihjFxuLy8gaW1wb3J0IE15Q2xhc3MsIHttdWx0aXBseX0gZnJvbSAnLi91dGlscy9lczYnXG5cblxuXG4vLyBUT0RPOiAxIHN0YXJ0XG4vLyAvKlxuLy8gZXM2XG5pbXBvcnQgeyBtdWx0aXBseSwgZGl2aWRlIH0gZnJvbSBcIi4vdXRpbHMvZXM2XCI7XG5pbXBvcnQgTXlDbGFzcyBmcm9tICcuL3V0aWxzL2VzNic7XG5cbi8vIOS7peS4iuWFqeihjOWPr+S7peaVtOWQiOaIkOS4gOihjFxuLy8gaW1wb3J0IE15Q2xhc3MsIHsgbXVsdGlwbHksIGRpdmlkZSB9IGZyb20gJy4vdXRpbHMvZXM2JztcblxuY29uc29sZS5sb2coXCJtdWx0aXBseSgzLCAzKVwiLCBtdWx0aXBseSgzLCAzKSk7XG5jb25zb2xlLmxvZyhcImRpdmlkZSg5LCAzKVwiLCBkaXZpZGUoMTAsIDMpKTtcblxudmFyIG15ID0gbmV3IE15Q2xhc3MoKTtcbm15LmZvbygpO1xuLy8gVE9ETzogMSBlbmRcbi8vICovXG5cblxuLy8gVE9ETzogMiBzdGFydFxuLypcbmNvbnNvbGUubG9nKCctLS0tLS0tLSBjb21tb25qcyAtLS0tLS0tLScpO1xuLy8gY29tbW9uanNcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC9jb21tb25qc1wiKTtcbmNvbnNvbGUubG9nKFwiYWRkKDEsIDEpXCIsIHV0aWwuYWRkKDEsIDEpKTtcbmNvbnNvbGUubG9nKFwic3VidHJhY3QoMiwgMilcIiwgdXRpbC5zdWJ0cmFjdCgyLCAyKSk7XG4vLyAqL1xuLy8gVE9ETzogMiBlbmRcbiIsInZhciBtZXNzYWdlID0gJ2hpIGVzNiBtb2R1bGUnO1xuY29uc29sZS5sb2cobWVzc2FnZSk7XG5cblxuZnVuY3Rpb24gcHJpdmF0ZUZ1bigpe1xuICBjb25zb2xlLmxvZygndGhpcyBpcyBwcml2ZXQgZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IGJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuLy8gVE9ET1xuLy8gLypcbi8vIGV4cG9ydCDmmK8gd2VicGFjayDoqp7ms5XvvIzkuI3mmK/ljp/nlJ8gSlMg6Kqe5rOVXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkoYSwgYikge1xuICByZXR1cm4gYSAqIGI7XG59IFxuLy8gKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IGJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuLy8gVE9ET1xuLy8gLypcbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUoYSwgYikge1xuICByZXR1cm4gYSAvIGI7XG59IFxuLy8gKi9cblxuLy8gVE9ET1xuLy8gLypcbmNsYXNzIE15Q2xhc3Mge1xuICBmb28oKXtcbiAgICBjb25zb2xlLmxvZygnZm9vJyk7XG4gIH1cbn0gXG4vLyAqL1xuXG4vLyBUT0RPXG4vLyDkuIDmlK8gSlMg5qqU77yM5Y+q6IO95pyJ5LiA5YCLIGV4cG9ydCBkZWZhdWx077yM5L2G5Y+v5Lul5pyJ5b6I5aSaIGV4cG9ydFxuLy8g5YSq5YWI5qyK6YCa5bi45YWI5L2/55SoIGV4cG9ydCBkZWZhdWx0XG4vLyDmnInlhbbku5blsI/lip/og73opoHntabliKXkurrkvb/nlKjvvIzmiY3mnIPnlKggZXhwb3J0ICjkuI3nm7jlubLnmoTmnIPnlKjpgJnlgIspXG5leHBvcnQgZGVmYXVsdCBNeUNsYXNzOyJdLCJzb3VyY2VSb290IjoiIn0=