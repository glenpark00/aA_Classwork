const View = require("./ttt-view");
const Game = require("./game");

window.View = View;
window.Game = Game;

  $(() => {
    // Your code here
    let game = new Game();
    let view = new View(game, $("figure.ttt"));
  });
