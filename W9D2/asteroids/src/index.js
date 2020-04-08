const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet");
const Game = require("./game.js");
const GameView = require("./game_view.js");
window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;
window.Ship = Ship;
window.Bullet = Bullet;

window.addEventListener('DOMContentLoaded', (event) => { 
  const canvasEl = document.getElementById('game-canvas');
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;
  let ctx = canvasEl.getContext("2d");

  let gv = new GameView(ctx);
  gv.start();
});