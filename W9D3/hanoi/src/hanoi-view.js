class View {
  constructor(game, $el) {
    this.game = game;
    this.hanoi = $el;
    this.setupTowers();
    this.render();
    this.clickTower();
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      let ul = $("<ul></ul>");
      ul.addClass("tower");
      ul.data("index", i)
      for (let i = 0; i < 3; i++) {
        let li = $("<li></li>");
        ul.append(li);
      }
      this.hanoi.append(ul);
    }
  }

  render() {
    let uls = $(".tower");
    for (let i = 0; i < 3; i++) {
      let $tower = $(uls[i].children);
      let tower = this.game.towers[i];
      for (let i = 0; i < 3; i++) {
        if (tower[i]) {
          $($tower[i]).text(tower[i]);
        }
      }
    }
  }

//   clickTower() {

//     $(".tower").on("click", e => {
//       this.currTower = $(e.currentTarget).data("index");

//       console.log("first click!")
//       console.log(this.currTower)
//       if (this.currTower) {
//         $(".tower").on("click", e => {
//           this.endTower = $(e.currentTarget).data("index");
//           this.game.move(this.currTower, this.endTower);
//           this.currTower = null;
//           this.endTower = null;
//           console.log("second click!")
//         })
//         this.render();
//       }
//     }
// }
// }

clickTower() {
 $(".tower").on("click", e => {
   this.currTower = $(e.currentTarget).data("index");
   console.log("first click!")
   console.log(this.currTower)
    if (this.currTower) {
      $(".tower").on("click", e => {
        this.endTower = $(e.currentTarget).data("index");
        this.game.move(this.currTower, this.endTower);
        this.currTower = null;
        this.endTower = null;
        console.log("second click!")
      })
      this.render();
    }
 }
}


module.exports = View;