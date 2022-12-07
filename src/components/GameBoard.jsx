import Board from "./Board";
import DropColumns from "./DropColumns";
import GameInfoToggle from "./GameInfoToggle";
import InfoList from "./InfoList";

export default function GameBoard({ visible }) {
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
              visible={visible}
            />
          );
        })}
      </div>
      <Board />
      <GameInfoToggle>
        <InfoList />
      </GameInfoToggle>
    </div>
  );
}
