import cloneDeep from "lodash/cloneDeep";

import findWinner from "../utils/findWinner";

import { useContext } from "react";
import { BoardContext } from "../contexts/Board";
import { CurrentPlayerContext } from "../contexts/CurrentPlayer";

import defaultIcon from "../images/56x56.png";
import p1Icon from "../images/56x56cyan.png";
import p2Icon from "../images/56x56yellow.png";

export default function DropColumns({
  i,
  newGameVisible,
  setColumnFull,
  setGameFinish,
  gameFinish,
  setShowWinner,
  setPlayer1Score,
  setPlayer2Score,
  setGameStart,
  setTurnCount,
  turnCount,
  setDraw,
  gameCount,
}) {
  const { currentPlayer, setCurrentPlayer } = useContext(CurrentPlayerContext);

  const { board, setBoard } = useContext(BoardContext);

  const getImage = () => {
    return currentPlayer === 1 ? p1Icon : p2Icon;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (board[0][i] && !gameFinish) {
      setColumnFull(true);
    } else if (!board[0][i] && !newGameVisible && !gameFinish && gameCount > 0) {
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
    <div
      className={`drop-column-${currentPlayer}`}
      id="drop-column"
      onClick={handleClick}
    >
      <div className="column-icon-switch">
        <img src={defaultIcon} alt="default-icon" className="column-icon" />
      </div>
      <div className="column-icon-switch">
        <img src={getImage()} alt="column-icon" className="column-icon" />
      </div>
    </div>
  );
}
