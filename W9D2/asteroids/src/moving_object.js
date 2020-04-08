function MovingObject(options) {
  this.radius = options.radius;
  this.pos = options.pos;
  this.vel = options.vel;
  this.color = options.color;
  this.game = options.game;
}
MovingObject.prototype.draw = function(ctx){

  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function(otherObject){
  let pos1 = this.pos;
  let pos2 = otherObject.pos;
  let difx = pos1[0] - pos2[0];
  let dify = pos1[1] - pos2[1];
  let dist = Math.sqrt((difx * difx) + (dify * dify));
  if (dist<= this.radius + otherObject.radius) {
      return true;
  } else {
      return false;
  }
};

MovingObject.prototype.collideWith = function(otherObject) {
  // this.game.remove(this);
  // this.game.remove(otherObject);
};

module.exports = MovingObject;

