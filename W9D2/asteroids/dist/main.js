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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(options) {\n  MovingObject.call(this, {\n    game: options[\"game\"], color: Asteroid.COLOR, radius: Asteroid.RADIUS,\n    pos: options['pos'], vel: Util.randomVec(2)\n  });\n}\nAsteroid.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  }\n};\n\nAsteroid.COLOR = '#e9967a';\nAsteroid.RADIUS = 10; \nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nUtil.inherits(Bullet, MovingObject);\n\nfunction Bullet(options) {\n  MovingObject.call(this, {\n    color: Bullet.COLOR,\n    radius: Bullet.RADIUS,\n    pos: options.pos,\n    vel: options.vel,\n    game: options.game \n  });\n}\n\nBullet.COLOR = \"#000000\";\nBullet.RADIUS = 2;\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction Game(){\n  this.asteroids = [];\n  this.ship = new Ship({ pos: this.randomPosition(), game: this });\n  this.bullets = [];\n  this.addAsteroids();\n}\n\nGame.DIM_X = 800;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 20;\n\nGame.prototype.addAsteroids = function(){\n  for (i = 0; i < Game.NUM_ASTEROIDS; i++){\n    let randPos = this.randomPosition();\n    this.asteroids.push(new Asteroid({pos:randPos, game:this}));\n  }\n};\n\nGame.prototype.randomPosition = function() {\n  let pos = [0,0];\n  pos[0] = Math.floor(Math.random() * Game.DIM_X);\n  pos[1] = Math.floor(Math.random() * Game.DIM_Y);\n  return pos;\n};\n\nGame.prototype.draw = function(ctx){\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  this.allObjects().forEach((obj) => obj.draw(ctx));\n};\nGame.prototype.moveObjects = function(){\n  this.allObjects().forEach((obj) => obj.move());\n};\n\nGame.prototype.wrap = function(pos) {\n  if (pos[0] >= Game.DIM_X) { pos[0] = 0; return pos;}\n  if (pos[0] <= 0) { pos[0] = Game.DIM_X; return pos;}\n  if (pos[1] >= Game.DIM_Y) { pos[1] = 0; return pos;}\n  if (pos[1] <= 0) { pos[1] = Game.DIM_Y; return pos;}\n  return pos;\n};\nGame.prototype.checkCollisions = function() {\n  // for (j = 0; j < this.asteroids.length; j++) {\n  //   if (this.asteroids[j].isCollidedWith(this.ship)){\n  //     this.asteroids[j].collideWith(this.ship);\n  //   }\n  // }\n  for (let i = 0; i < this.asteroids.length; i++) {\n    let ast = this.asteroids[i];\n    if (ast.isCollidedWith(this.ship)){\n      ast.collideWith(this.ship);\n    }\n    for (let j = 0; j < this.bullets.length; j++) {\n      let bullet = this.bullets[j];\n      if (ast.isCollidedWith(bullet)) {\n        this.remove(ast);\n        this.remove(bullet);\n      }\n    }\n  }\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.allObjects = function() {\n  let objs = this.asteroids.concat(this.ship, this.bullets);\n  return objs;\n};\n\nGame.prototype.add = function(obj) {\n  if (obj instanceof Asteroid) {\n    this.asteroids.push(obj);\n  } \n  if (obj instanceof Bullet) {\n    this.bullets.push(obj);\n  }\n};\n\nGame.prototype.remove = function(obj) {\n  let objs;\n  let res = [];\n  if (obj instanceof Asteroid) {\n    objs = this.asteroids;\n    for (let i = 0; i < objs.length; i++) {\n      if (objs[i] !== obj) res.push(objs[i]);\n    }\n    this.asteroids = res;\n  }\n  if (obj instanceof Bullet) {\n    objs = this.bullets;\n    for (let i = 0; i < objs.length; i++) {\n      if (objs[i] !== obj) res.push(objs[i]);\n    }\n    this.bullets = res;\n  }\n};  \n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  let that = this;\n  this.bindKeyHandlers();\n  const func = function() {\n    that.game.step();\n    that.game.draw(that.ctx);\n  };\n  setInterval(func, 20);\n};\n\nGameView.prototype.bindKeyHandlers = function(){\n  let ship = this.game.ship;\n  key('z', function () {\n    ship.fireBullet();\n  });\n  key('up',function() {\n    ship.vel = [0, 0];\n    ship.power([0, -3]);\n  });\n  key('down',function() {\n    ship.vel = [0, 0];\n    ship.power([0, 3]);\n  });\n  key('left',function() {\n    ship.vel = [0, 0];\n    ship.power([-3, 0]);\n  });\n  key('right',function() {\n    ship.vel = [0, 0];\n    ship.power([3, 0]);\n  });\n  // key('up',function() {\n  //   if (ship.vel[1] > -3) {\n  //     ship.power([0, -3]);\n  //   }\n  // });\n  // key('down',function() {\n  //   if (ship.vel[1] < 3) {\n  //     ship.power([0, 3]);\n  //   }\n  // });\n  // key('left',function() {\n  //   if (ship.vel[0] > -3) {\n  //     ship.power([-3, 0]);\n  //   }\n  // });\n  // key('right',function() {\n  //   if (ship.vel[0] < 3) {\n  //     ship.power([3, 0]);\n  //   }\n  // });\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.MovingObject = MovingObject;\nwindow.Util = Util;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\nwindow.Ship = Ship;\nwindow.Bullet = Bullet;\n\nwindow.addEventListener('DOMContentLoaded', (event) => { \n  const canvasEl = document.getElementById('game-canvas');\n  canvasEl.width = Game.DIM_X;\n  canvasEl.height = Game.DIM_Y;\n  let ctx = canvasEl.getContext(\"2d\");\n\n  let gv = new GameView(ctx);\n  gv.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n  this.radius = options.radius;\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.color = options.color;\n  this.game = options.game;\n}\nMovingObject.prototype.draw = function(ctx){\n\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.pos = this.game.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n  let pos1 = this.pos;\n  let pos2 = otherObject.pos;\n  let difx = pos1[0] - pos2[0];\n  let dify = pos1[1] - pos2[1];\n  let dist = Math.sqrt((difx * difx) + (dify * dify));\n  if (dist<= this.radius + otherObject.radius) {\n      return true;\n  } else {\n      return false;\n  }\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  // this.game.remove(this);\n  // this.game.remove(otherObject);\n};\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nUtil.inherits(Ship, MovingObject);\n\nfunction Ship(options) {\n  MovingObject.call(this, {\n    color: Ship.COLOR,\n    radius: Ship.RADIUS,\n    vel: [0, 0],\n    pos: options.pos,\n    game: options.game\n  });\n}\n\nShip.RADIUS = 5;\nShip.COLOR = \"#37FDFC\";\nmodule.exports = Ship;\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n};\n\nShip.prototype.power = function(impulse){\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n};\n\nShip.prototype.fireBullet = function() {\n  if (this.vel[0] === 0 && this.vel[1] === 0) {\n    return;\n  }\n  let bullet = new Bullet({\n    pos: [this.pos[0], this.pos[1]],\n    vel: [this.vel[0] * 1.5, this.vel[1] * 1.5],\n    game: this.game\n  });\n  this.game.bullets.push(bullet);\n};\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });