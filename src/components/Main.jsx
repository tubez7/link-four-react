import LinkFour from "../utils/linkFour";

import { useState } from "react";

import NewGameForm from "./NewGameForm";
import GameBoard from "./GameBoard";

export default function Main({ visible, setVisible }) {
  const [game, setGame] = useState(new LinkFour());
  
  return (
    <>
      {!visible && <NewGameForm setVisible={setVisible} game={game} setGame={setGame} />}
      {visible && <GameBoard game={game} />}
    </>
  );
}
