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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clock; });\n// \nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Use console.log to print it.\n    const clock = document.getElementById(\"clock\");\n    clock.innerHTML = timeString;\n  }\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\nconst clock = new Clock();\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! exports provided: dogs, dogLinkCreator, attachDogLinks, handleEnter, handleLeave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dogs\", function() { return dogs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dogLinkCreator\", function() { return dogLinkCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attachDogLinks\", function() { return attachDogLinks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleEnter\", function() { return handleEnter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleLeave\", function() { return handleLeave; });\n\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n\nconst dogLinkCreator = function(){\n  let res = [];\n  for (let breed in dogs) {\n    let a = document.createElement(\"a\");\n    a.innerHTML = breed;\n    a.setAttribute(\"src\", dogs[breed]);\n    let li = document.createElement(\"li\");\n    li.classList.add(\"dog-link\");\n    li.append(a);\n    res.push(li);\n  }\n  return res;\n};\n\nconst attachDogLinks = function() {\n  let links = dogLinkCreator();\n  let ul = document.querySelector(\".drop-down-dog-list\");\n  for (let link of links) ul.appendChild(link);\n};\n\n\n\nfunction handleEnter() {\n  let nav = document.querySelector(\".drop-down-dog-nav\");\n    nav.addEventListener(\"mouseenter\", e => {\n    let links = document.querySelectorAll(\".dog-link\");\n    for (let link of links) {\n      link.classList.toggle(\"dog-link\");\n      // link.classList.add(\"show\");\n    }\n  });\n}\n\nfunction handleLeave() {\n  let nav = document.querySelector(\".drop-down-dog-nav\");\n  nav.addEventListener(\"mouseleave\", e => {\n    let ul = document.querySelector(\".drop-down-dog-list\");\n    for (let child of ul.children) {\n      child.classList.toggle(\"dog-link\");\n      // child.classList.remove(\"show\");\n    }\n  });\n}\n\nattachDogLinks();\nhandleEnter();\nhandleLeave();\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ \"./src/search.js\");\n// We can use a hash to \n\n\n// We can use all of the exported constants namespaced on the alias (i.e. dropDown.dogLinkCreator())\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: pokemonAPI, findMons, getMons, searchMons, filterMons, attachMons, createMon, getInfo, handleKeypress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pokemonAPI\", function() { return pokemonAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findMons\", function() { return findMons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMons\", function() { return getMons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchMons\", function() { return searchMons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterMons\", function() { return filterMons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attachMons\", function() { return attachMons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMon\", function() { return createMon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInfo\", function() { return getInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleKeypress\", function() { return handleKeypress; });\nconst pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500';\n\n\n\nfunction findMons(e){\n    let input = e.currentTarget;\n    name = getMons(input.value);\n    \n}    \n\nconst getMons = (name) => (\n    $.ajax({\n     url: pokemonAPI\n    }).then((res) => searchMons(res,name)));\n\n\nfunction searchMons(arr,name){\n    let mons = filterMons(arr,name);\n    attachMons(mons,10);\n}        \n\nfunction filterMons(arr, name) {\n    let res = [];\n    for (let mon of arr) {\n        if (mon.name.includes(name)) {\n            res.push(getInfo(mon));\n        }    \n    }    \n    return res;\n}    \n\nfunction attachMons (mons,num){\n    ul = document.querySelector(\".suggestions\");\n    ul.innerHTML = \"\";\n    for (let i=0; i<num; i++){\n        let li = document.createElement(\"li\");\n        let mon = createMon(mons[i]);\n        li.appendChild(mon);\n        ul.appendChild(li);\n    }    \n}    \n\nfunction createMon(mon){\n    let span = document.createElement(\"span\");\n    span.innerHTML = mon.name;\n    let sprite = document.createElement(\"img\");\n    sprite.setAttribute(\"src\", mon.sprites.front_default);\n    span.appendChild(sprite);\n    return span;\n}    \n\n//gets info the pokemon of a given name\nconst getInfo = (url) => (\n  $.ajax({\n    url: url,\n    method: \"GET\",\n    dataType: \"json\"\n  })\n);\n\n\n\nfunction handleKeypress() {\n  let input = document.querySelector(\".search\");\n  input.addEventListener(\"keydown\", e => findMons(e));\n}\n\n\n// // with query from initial json object\n// res[\"url\"]\n\n// //with json from search of individual pokemon\n// res[\"sprites\"][\"front_default\"]\n\n\n//# sourceURL=webpack:///./src/search.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst htmlGenerator = (string, htmlElement) => {\n    const p = document.createElement(\"p\");\n    p.innerHTML = string;\n    htmlElement.appendChild(p);\n};\n\n// const partyHeader = document.getElementById('party');\n// htmlGenerator('Party Time.', partyHeader);\n\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });