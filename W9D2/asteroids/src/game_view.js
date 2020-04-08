const Game = require('./game.js');
const Bullet = require('./bullet');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  let that = this;
  this.bindKeyHandlers();
  const func = function() {
    that.game.step();
    that.game.draw(that.ctx);
  };
  setInterval(func, 20);
};

GameView.prototype.bindKeyHandlers = function(){
  let ship = this.game.ship;
  key('z', function () {
    ship.fireBullet();
  });
  key('up',function() {
    ship.vel = [0, 0];
    ship.power([0, -3]);
  });
  key('down',function() {
    ship.vel = [0, 0];
    ship.power([0, 3]);
  });
  key('left',function() {
    ship.vel = [0, 0];
    ship.power([-3, 0]);
  });
  key('right',function() {
    ship.vel = [0, 0];
    ship.power([3, 0]);
  });
  // key('up',function() {
  //   if (ship.vel[1] > -3) {
  //     ship.power([0, -3]);
  //   }
  // });
  // key('down',function() {
  //   if (ship.vel[1] < 3) {
  //     ship.power([0, 3]);
  //   }
  // });
  // key('left',function() {
  //   if (ship.vel[0] > -3) {
  //     ship.power([-3, 0]);
  //   }
  // });
  // key('right',function() {
  //   if (ship.vel[0] < 3) {
  //     ship.power([3, 0]);
  //   }
  // });
};

module.exports = GameView;