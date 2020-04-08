const MovingObject = require('./moving_object.js');
const Bullet = require("./bullet");
const Util = require("./util.js");

Util.inherits(Ship, MovingObject);

function Ship(options) {
  MovingObject.call(this, {
    color: Ship.COLOR,
    radius: Ship.RADIUS,
    vel: [0, 0],
    pos: options.pos,
    game: options.game
  });
}

Ship.RADIUS = 5;
Ship.COLOR = "#37FDFC";
module.exports = Ship;

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

Ship.prototype.power = function(impulse){
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Ship.prototype.fireBullet = function() {
  if (this.vel[0] === 0 && this.vel[1] === 0) {
    return;
  }
  let bullet = new Bullet({
    pos: [this.pos[0], this.pos[1]],
    vel: [this.vel[0] * 1.5, this.vel[1] * 1.5],
    game: this.game
  });
  this.game.bullets.push(bullet);
};
