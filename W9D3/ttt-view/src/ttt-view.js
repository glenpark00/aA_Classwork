class View {
  constructor(game, $el) {
    this.game = game; 
    this.grid = $el;
    console.log(this);
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $(".square").on("click", (e) => {
      let $square = $(e.currentTarget)

      try {
        this.game.playMove($square.data("pos"));
      }
      catch(err) {
        alert("Invalid Move");
    }

    this.makeMove($square);
    if (this.game.isOver()) {
      alert("YOU WIN!!!")
    }
    })
  }

  makeMove($square) {
    $square.text(this.game.currentPlayer);
    let mark = this.game.currentPlayer;
    $square.css("background", "white")

    if (mark === 'x') {
      $square.addClass("mark-x")
    } else {
      $square.addClass("mark-o")
    }
   
  }

  setupBoard() {
    let ul = $("<ul></ul>")
    for (let i = 0; i < 9; i++) {
      let li = $("<li></li>");
      li.addClass("square");
      li.data("pos", this._setupBoard(i))
      ul.append(li);
    }
    this.grid.append(ul);
    
  }

  _setupBoard(i) {
    if (i < 3) {
      return [0,i];
    }
    if (i > 2 && i < 6) {
      return [1, (i-3)];
    }
    if (i > 5 && i < 9 ) {
      return [ 2, (i-6)];
    }
    // if i 0-2, 0, i
    // if i 3-5, 1, i-3
    // if i 6-8, 2, i-6
  }
}

module.exports = View;
