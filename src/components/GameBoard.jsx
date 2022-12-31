import Board from "./Board";
import ColumnFull from "./ColumnFull";
import DrawPopUp from "./DrawPopUp";
import DropColumns from "./DropColumns";
import WinnerPopUp from "./WinnerPopup";

export default function GameBoard({
  newGameVisible,
  gameFinish,
  setGameFinish,
  showWinner,
  setShowWinner,
  setPlayer1Score,
  setPlayer2Score,
  setGameStart,
  gameCount,
  setTurnCount,
  turnCount,
  draw,
  setDraw,
  columnFull,
  setColumnFull,
}) {
  const dropRow = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="game-board">
      <div className="drop-columns">
        {dropRow.map((col, i) => {
          return (
            <DropColumns
              key={`${col}`}
              className={`column-${col}`}
              col={col}
              i={i}
              newGameVisible={newGameVisible}
              setColumnFull={setColumnFull}
              setGameFinish={setGameFinish}
              gameFinish={gameFinish}
              setShowWinner={setShowWinner}
              setPlayer1Score={setPlayer1Score}
              setPlayer2Score={setPlayer2Score}
              setGameStart={setGameStart}
              setTurnCount={setTurnCount}
              turnCount={turnCount}
              setDraw={setDraw}
              gameCount={gameCount}
            />
          );
        })}
      </div>
      {columnFull && <ColumnFull setColumnFull={setColumnFull} />}
      {showWinner && (
        <WinnerPopUp setShowWinner={setShowWinner} gameCount={gameCount} />
      )}
      {draw && <DrawPopUp gameCount={gameCount} setDraw={setDraw} />}
      <Board setColumnFull={setColumnFull} />
    </div>
  );
}
