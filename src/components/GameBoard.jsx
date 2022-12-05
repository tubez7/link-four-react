import { useState } from "react";

import Board from "./Board";
import DropColumns from "./DropColumns";

export default function GameBoard({ game }) {
  const [board, setBoard] = useState(game.getBoard());

  const dropRow = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="game-board">
      <div className="Drop-columns">
        {dropRow.map((col, i) => {
          return (
            <DropColumns
              key={`${col}`}
              className={`Column-${col}`}
              col={col}
              i={i}
              setBoard={setBoard}
              game={game}
            />
          );
        })}
      </div>
      <Board board={board} />
    </div>
  );
}
