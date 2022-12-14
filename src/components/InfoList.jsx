import { useContext } from "react";
import { CurrentPlayerContext } from "../contexts/CurrentPlayer";
import { PlayerContext } from "../contexts/Player";

export default function InfoList({
  player1Score,
  player2Score,
  gameCount,
  turnCount,
  setInfoVisible,
}) {
  const { player1, player2 } = useContext(PlayerContext);
  const { currentPlayer } = useContext(CurrentPlayerContext);

  const closeVisible = (e) => {
    e.preventDefault();
    setInfoVisible(false);
  };

  return (
    <div className="info-list">
      <ul className="list-items">
        <li>
          <h4>Players</h4>
          <p className="p1-info">P1: {player1} (x)</p>
          <p className="p2-info">P2: {player2} (o)</p>
        </li>
        <li className="score-info">
          <h4>Current Score</h4>
          <p className="p1-score">{`${player1Score}`}</p>
          <p className="p2-score">{`${player2Score}`}</p>
        </li>
        <li className="game-count">
          <h4>Game No.</h4>
          <p>{gameCount}</p>
        </li>
        <li className="turn-count">
          <h4>Turns Made</h4>
          <p>{turnCount}</p>
        </li>
        <li>
          <h4>Current Turn</h4>
          <p className={`p${currentPlayer}-turn`}>
            {currentPlayer === 1 ? player1 : player2}
          </p>
        </li>
      </ul>
      <button onClick={closeVisible}>x</button>
    </div>
  );
}
