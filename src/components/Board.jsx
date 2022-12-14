import { useContext } from "react";
import { BoardContext } from "../contexts/Board";

import gridIcon from "../images/112x112.png";
import p1Icon from "../images/112x112cyan.png";
import p2Icon from "../images/112x112yellow.png";

export default function Board() {
  const { board } = useContext(BoardContext);

  const getImage = (element) => {
    if (element === "x") {
      return p1Icon;
    } else if (element === "o") {
      return p2Icon;
    } else {
      return gridIcon;
    }
  }

  return (
    <div className="board-rows">
      {board.map((row, rowIndex) => {
        return row.map((elem, i) => {
          return (
            <div key={`${i}-${rowIndex}`} className="board-space">
              <img alt="game-grid-space" className="grid-image" src={getImage(elem)}/>
            </div>
          );
        });
      })}
    </div>
  );
}
