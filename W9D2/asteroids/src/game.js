const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet");

function Game(){
  this.asteroids = [];
  this.ship = new Ship({ pos: this.randomPosition(), game: this });
  this.bullets = [];
  this.addAsteroids();
}

Game.DIM_X = 800;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 20;

Game.prototype.addAsteroids = function(){
  for (i = 0; i < Game.NUM_ASTEROIDS; i++){
    let randPos = this.randomPosition();
    this.asteroids.push(new Asteroid({pos:randPos, game:this}));
  }
};

Game.prototype.randomPosition = function() {
  let pos = [0,0];
  pos[0] = Math.floor(Math.random() * Game.DIM_X);
  pos[1] = Math.floor(Math.random() * Game.DIM_Y);
  return pos;
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.allObjects().forEach((obj) => obj.draw(ctx));
};
Game.prototype.moveObjects = function(){
  this.allObjects().forEach((obj) => obj.move());
};

Game.prototype.wrap = function(pos) {
  if (pos[0] >= Game.DIM_X) { pos[0] = 0; return pos;}
  if (pos[0] <= 0) { pos[0] = Game.DIM_X; return pos;}
  if (pos[1] >= Game.DIM_Y) { pos[1] = 0; return pos;}
  if (pos[1] <= 0) { pos[1] = Game.DIM_Y; return pos;}
  return pos;
};
Game.prototype.checkCollisions = function() {
  // for (j = 0; j < this.asteroids.length; j++) {
  //   if (this.asteroids[j].isCollidedWith(this.ship)){
  //     this.asteroids[j].collideWith(this.ship);
  //   }
  // }
  for (let i = 0; i < this.asteroids.length; i++) {
    let ast = this.asteroids[i];
    if (ast.isCollidedWith(this.ship)){
      ast.collideWith(this.ship);
    }
    for (let j = 0; j < this.bullets.length; j++) {
      let bullet = this.bullets[j];
      if (ast.isCollidedWith(bullet)) {
        this.remove(ast);
        this.remove(bullet);
      }
    }
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.allObjects = function() {
  let objs = this.asteroids.concat(this.ship, this.bullets);
  return objs;
};

Game.prototype.add = function(obj) {
  if (obj instanceof Asteroid) {
    this.asteroids.push(obj);
  } 
  if (obj instanceof Bullet) {
    this.bullets.push(obj);
  }
};

Game.prototype.remove = function(obj) {
  let objs;
  let res = [];
  if (obj instanceof Asteroid) {
    objs = this.asteroids;
    for (let i = 0; i < objs.length; i++) {
      if (objs[i] !== obj) res.push(objs[i]);
    }
    this.asteroids = res;
  }
  if (obj instanceof Bullet) {
    objs = this.bullets;
    for (let i = 0; i < objs.length; i++) {
      if (objs[i] !== obj) res.push(objs[i]);
    }
    this.bullets = res;
  }
};  

module.exports = Game;