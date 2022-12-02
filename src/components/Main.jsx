import Board from "./Board";
import DropColumn from "./DropColumns";

import { useState } from "react";

export default function Main({ game }) {
  const [board, setBoard] = useState(game.getBoard());

  const dropRow = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <div className="Drop-columns">
        {dropRow.map((col, i) => {
          return (
            <DropColumn
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
    </>
  );
}
