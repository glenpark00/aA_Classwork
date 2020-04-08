let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = new Array(8).fill(0).map(el => new Array(8));
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");
  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if ((x > 8 || x < 0) || (y > 8 || y < 0)) {
    throw new Error("Not valid pos!");
  }
  return this.grid[x][y];
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  let oppPieces = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (this.grid[i][j] && (this.grid[i][j].oppColor() === color)) { 
        oppPieces.push([i, j]);
      }
    }
  }

  for (let i = 0; i < oppPieces.length; i++) {
    for (let j = 0; j < Board.DIRS.length; j++) {
      let x = oppPieces[i][0] + Board.DIRS[j][0];
      let y = oppPieces[i][1] + Board.DIRS[j][1];
      if ((x < 8 && x >= 0) && (y < 8 && y >= 0)) {
        if (!this.grid[x][y]) {
          return true;
        }
      }
    }
  }

  return false;
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let x = pos[0];
  let y = pos[1];
  let piece = this.grid[x][y];
  if (piece && piece.color === color) {
    return true;
  }
  return false;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if (this.grid[x][y]) {
    return true;
  }
  return false;
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  if (this.hasMove("white") || this.hasMove("black")) {
    return false;
  }
  return true;
  // return (!(this.hasMove("white") || this.hasMove("black")));
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if ((x < 8 && x >= 0) && (y < 8 && y >= 0)) {
    return true;
  }
  return false;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  let x = pos[0] + dir[0];
  let y = pos[1] + dir[1];
  pos = [x, y];
  if (!board.isValidPos(pos)) {
    return [];
  }
  if (!board.isOccupied(pos)) {
    return [];
  }
  if (board.getPiece(pos).color === color) {
    return piecesToFlip;
  }
  piecesToFlip.push(pos);
  return _positionsToFlip(board, pos, color, dir, piecesToFlip);
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.isValidPos(pos) || this.isOccupied(pos) || !this.hasMove(color)) {
    throw new Error("Invalid Move");
  }

  let x = pos[0];
  let y = pos[1];
  this.grid[x][y] = new Piece(color);

  let piecesToFlip = [];
  for (let i = 0; i < Board.DIRS.length; i++) {
    piecesToFlip.concat(_positionsToFlip(this, pos, color, Board.DIRS[i], []));
  }

  piecesToFlip.forEach(pos => this.grid[pos[0]][pos[1]].flip());
};

// Board #placePiece should flip captured pieces:
// actual expected
// blackwhite

// Board #placePiece should not allow moves that isolate pieces:
// AssertionError[ERR_ASSERTION]: Missing expected exception(Error): Invalid Move

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  for(let i = 0; i < this.grid.length; i++) {
    console.log(this.grid[i].join(" | "));
    console.log("\n");
  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (!this.isValidPos(pos) || this.isOccupied(pos)) {
    return false;
  }
  let piecesToFlip = [];
  for (let i = 0; i < Board.DIRS.length; i++) {
    piecesToFlip = piecesToFlip.concat(_positionsToFlip(this, pos, color, Board.DIRS[i], []));
  }
  return piecesToFlip.length > 0;
};

// 1. `_makeGrid` and the Constructor function
// 2. `isValidPos` & `getPiece`
// 3. `isMine` & `isOccupied`
// 4. `_positionsToFlip`
// 5. `validMove`

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

module.exports = Board;


let b = new Board()
b.print()

