const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Ship = require("./ship.js");

Util.inherits(Asteroid, MovingObject);

function Asteroid(options) {
  MovingObject.call(this, {
    game: options["game"], color: Asteroid.COLOR, radius: Asteroid.RADIUS,
    pos: options['pos'], vel: Util.randomVec(2)
  });
}
Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
};

Asteroid.COLOR = '#e9967a';
Asteroid.RADIUS = 10; 
module.exports = Asteroid;