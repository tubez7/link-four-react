import { useContext } from "react";
import { CurrentPlayerContext } from "../contexts/CurrentPlayer";
import { PlayerContext } from "../contexts/Player";


export default function InfoList() {
  const { player1, player2 } = useContext(PlayerContext);
  const { currentPlayer } = useContext(CurrentPlayerContext);

  return (
    <ul className="info-list">
      <li>Player 1: {player1} (x)</li>
      <li>Player 2: {player2} (o)</li>
      <li>Current Turn: {currentPlayer === 1 ? player1 : player2}</li>
    </ul>
  );
}
