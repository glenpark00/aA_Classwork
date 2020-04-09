const HanoiGame = require("./game");
const HanoiView = require("./hanoi-view")
console.log("Webpacker is up and running!")

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
