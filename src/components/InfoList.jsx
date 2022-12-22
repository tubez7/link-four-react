import { useContext } from "react";
import { CurrentPlayerContext } from "../contexts/CurrentPlayer";
import { PlayerContext } from "../contexts/Player";

import p1Icon from "../images/28x28cyan.png";
import p2Icon from "../images/28x28yellow.png";

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
          <h4>Players<br className="line-break"/><br className="turn-break"/></h4>
          <p className="p1-info">{player1}</p>
          <img alt="p1-icon" src={p1Icon} />
          <p className="p2-info">{player2}</p>
          <img alt="p2-icon" src={p2Icon} />
        </li>
        <li className="score-info">
          <h4>Current Score</h4>
          <span className="p1-score">{`${player1Score} `}</span>v
          <span className="p2-score">{` ${player2Score}`}</span>
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
          <h4>
            Current
            <br className="line-break" /> Turn
          </h4>
          <p className={`p${currentPlayer}-turn`}>
            {currentPlayer === 1 ? player1 : player2}
          </p>
        </li>
      </ul>
      <button onClick={closeVisible}>x</button>
    </div>
  );
}
