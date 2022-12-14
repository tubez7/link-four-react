import { useState } from "react";

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
  player1Score,
  setPlayer2Score,
  player2Score,
  setGameStart,
  setGameCount,
  gameCount,
  setTurnCount,
  turnCount,
  draw,
  setDraw,
}) {
  const [columnFull, setColumnFull] = useState(false);

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
              setGameCount={setGameCount}
              setTurnCount={setTurnCount}
              turnCount={turnCount}
              setDraw={setDraw}
            />
          );
        })}
      </div>
      {columnFull && <ColumnFull setColumnFull={setColumnFull} />}
      {showWinner && (
        <WinnerPopUp setShowWinner={setShowWinner} gameCount={gameCount} />
      )}
      {draw && <DrawPopUp gameCount={gameCount} setDraw={setDraw} />}
      <Board />
    </div>
  );
}
