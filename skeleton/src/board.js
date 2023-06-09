// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  // const _grid = []
  // for(let i = 0; i < 8; i++){
  // _grid.push(new Array(8));
  // };
  const _grid =  new Array(8).fill().map((ele) => new Array(8).fill());
  _grid[3][4] = new Piece('black');
  _grid[4][3] = new Piece('black');
  _grid[3][3] = new Piece('white');
  _grid[4][4] = new Piece('white');

  return _grid;
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
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
   let row = pos[0];
   let col = pos[1];
    return (row > 8 || row < 0 || col > 8 || col < 0) ? false : true;
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let row = pos[0];
  let col = pos[1];
  if(this.isValidPos(pos)){
    return this.grid[row][col];
  }else{
    throw new Error('Not valid pos!');
  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {

  if(this.getPiece(pos) === undefined) {
    return false;
  }else if(this.getPiece(pos).color === color) {
    return true;
  } else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if (!(this.getPiece(pos) === undefined)) {
    return true;
  } else {
    return false;
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  let newPosition = [pos[0]+dir[0], pos[1]+dir[1]]

  if (!piecesToFlip) {
    piecesToFlip = [];
  } else {
    piecesToFlip.push(pos);
  }

  // (!this.isMine(newPosition, color))
  // this line is handling when it goes off the board
  if (!(this.isValidPos(newPosition))) {
    return [];
  // when you hit on empty position
  } else if(!this.isOccupied(newPosition)) {
    return [];
  }
  else if(this.isMine(newPosition, color)) {
    return piecesToFlip;
  } else {
    return this._positionsToFlip(newPosition, color, dir, piecesToFlip);
  }

  // from original pos, move in one dir, check if it's correct, recursively call the same function with another provided dir and keep adding the piecestoFlip until the last dir results in end of the board ([8,8])
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE
