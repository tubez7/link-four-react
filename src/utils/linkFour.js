import findWinner from "./findWinner";

class LinkFour {
  constructor(player1 = "Player 1", player2 = "Player 2") {
    this.player1 = player1;
    this.player2 = player2;
    this.player = true;
    this.winner = false;
    this.board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
  }

  getBoard() {
    return this.board;
  }

  getPlayer() {
    if (this.player) {
      if (this.player1.slice(-1) === "s") {
        return `It is ${this.player1}' (x) turn`;
      } else {
        return `It is ${this.player1}'s (x) turn`;
      }
    } else {
      if (this.player2.slice(-1) === "s") {
        return `It is ${this.player2}' (o) turn`;
      } else {
        return `It is ${this.player2}'s (x) turn`;
      }
    }
  }

  updateBoard(board) {
    this.board = board;
  }

  play(column) {
    if (this.winner) {
      if (this.player) {
        return `GAME OVER - ${this.player1} won. Please start a new game`;
      } else {
        return `GAME OVER - ${this.player2} won. Please start a new game`;
      }
    }

    if (this.board[0][column]) return "This column is full";

    if (column < 0 || column > 6)
      return "OUT OF RANGE - Please choose a number between 0 and 6";

    const player = this.player ? "x" : "o";
    let row = 5;
    let counterInPlay = true;

    while (row >= 0 && counterInPlay) {
      if (!this.board[row][column] && counterInPlay) {
        this.board[row][column] = player;
        counterInPlay = false;
      }
      row--;
    }

    const winner = findWinner(this.board);

    if (winner) {
      this.winner = true;
      if (this.player) {
        return `${this.player1} (${player}) wins!`;
      } else {
        return `${this.player2} (${player}) wins!`;
      }
    }
    this.player = !this.player;
  }

  checkWinner() {
    return findWinner(this.board);
  }
}

export default LinkFour;
