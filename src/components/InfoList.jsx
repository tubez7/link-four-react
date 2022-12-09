import { useContext } from "react";
import { CurrentPlayerContext } from "../contexts/CurrentPlayer";
import { PlayerContext } from "../contexts/Player";

// import p1Icon from "../images/112x112.png";

export default function InfoList({
  player1Score,
  player2Score,
  gameCount,
  turnCount,
}) {
  const { player1, player2 } = useContext(PlayerContext);
  const { currentPlayer } = useContext(CurrentPlayerContext);

  return (
    <ul className="info-list">
      <li>
        <h4>Players</h4>
        <p className="p1-info">Player 1: {player1} (x)</p>
        <p className="p2-info">Player 2: {player2} (o)</p>
      </li>
      <li className="score-info">
        <h4>Current Score</h4>
        <span className="p1-score">{`${player1}`}</span>
        {` (${player1Score} v ${player2Score}) `}
        <span className="p2-score">{`${player2}`}</span>
      </li>
      <li className="game-count">
        <h4>Games Played</h4>
        <p>{gameCount}</p>
      </li>
      <li className="turn-count">
        <h4>Turns This Game</h4>
        <p>{turnCount}</p>
      </li>
      <li>
        <h4>Current Turn</h4>
        <p className={`p${currentPlayer}-turn`}>
          {currentPlayer === 1 ? player1 : player2}
        </p>
      </li>
    </ul>
  );
}
