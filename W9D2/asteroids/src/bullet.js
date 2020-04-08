const Util = require("./util");
const MovingObject = require("./moving_object");

Util.inherits(Bullet, MovingObject);

function Bullet(options) {
  MovingObject.call(this, {
    color: Bullet.COLOR,
    radius: Bullet.RADIUS,
    pos: options.pos,
    vel: options.vel,
    game: options.game 
  });
}

Bullet.COLOR = "#000000";
Bullet.RADIUS = 2;

module.exports = Bullet;