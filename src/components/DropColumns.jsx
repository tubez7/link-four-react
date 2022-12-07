import cloneDeep from "lodash/cloneDeep";
import { useContext } from "react";
import { BoardContext } from "../contexts/Board";
import { CurrentPlayerContext } from "../contexts/CurrentPlayer";

export default function DropColumns({ col, i, visible }) {
  const { currentPlayer, setCurrentPlayer } = useContext(CurrentPlayerContext);

  const { board, setBoard } = useContext(BoardContext);

  const handleClick = () => {
    if (!board[0][i] && visible) {
      const player = currentPlayer === 1 ? "x" : "o";
      let row = 5;
      let counterInPlay = true;

      while (row >= 0 && counterInPlay) {
        if (!board[row][i] && counterInPlay) {
          const clonedBoard = cloneDeep(board);
          clonedBoard[row][i] = player;
          counterInPlay = false;
          setBoard(clonedBoard);
        }
        row--;
      }
      setCurrentPlayer((currentSetPlayer) => {
        return currentSetPlayer === 1 ? 2 : 1;
      });
    }
  };
  return (
    <div className="drop-column" onClick={handleClick}>
      index {i}, col {`${col}`}
    </div>
  );
}
