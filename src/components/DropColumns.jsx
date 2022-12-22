import cloneDeep from "lodash/cloneDeep";

import findWinner from "../utils/findWinner";

import { useContext } from "react";
import { BoardContext } from "../contexts/Board";
import { CurrentPlayerContext } from "../contexts/CurrentPlayer";

export default function DropColumns({
  col,
  i,
  newGameVisible,
  setColumnFull,
  setGameFinish,
  gameFinish,
  setShowWinner,
  setPlayer1Score,
  setPlayer2Score,
  setGameStart,
  setGameCount,
  setTurnCount,
  turnCount,
  setDraw,
}) {
  const { currentPlayer, setCurrentPlayer } = useContext(CurrentPlayerContext);

  const { board, setBoard } = useContext(BoardContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (board[0][i] && !gameFinish) {
      setColumnFull(true);
    } else if (!board[0][i] && !newGameVisible && !gameFinish) {
      setGameStart(true);
      setColumnFull(false);
      setTurnCount((currTurnCount) => currTurnCount + 1);
      const player = currentPlayer === 1 ? "x" : "o";
      let row = 5;
      let counterInPlay = true;

      while (row >= 0 && counterInPlay) {
        if (!board[row][i] && counterInPlay) {
          const clonedBoard = cloneDeep(board);
          clonedBoard[row][i] = player;
          counterInPlay = false;
          setBoard(clonedBoard);
          const gameWinner = findWinner(clonedBoard);

          if (gameWinner) {
            setGameFinish(true);
            setShowWinner(true);
            currentPlayer === 1
              ? setPlayer1Score((currP1Score) => currP1Score + 1)
              : setPlayer2Score((currP2Score) => currP2Score + 1);
            setGameCount((currGameCount) => currGameCount + 1);
            setGameStart(false);
          } else if (turnCount === 41) {
            setGameFinish(true);
            setDraw(true);
            setGameStart(false);
          } else {
            setCurrentPlayer((currentSetPlayer) => {
              return currentSetPlayer === 1 ? 2 : 1;
            });
          }
        }
        row--;
      }
    }
  };
  return (
    <div className={`drop-column-${currentPlayer}`} id="drop-column" onClick={handleClick}>
      {`${col}`}
    </div>
  );
}
