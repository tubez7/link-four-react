import { useContext } from "react";

import { CurrentPlayerContext } from "../contexts/CurrentPlayer";
import { PlayerContext } from "../contexts/Player";

export default function WinnerPopUp({ setShowWinner, gameCount }) {
  const { currentPlayer } = useContext(CurrentPlayerContext);
  const { player1, player2 } = useContext(PlayerContext);

  const handleClick = (e) => {
    e.preventDefault();
    setShowWinner(false);
  };
  return (
    <div className={`player${currentPlayer}-winner-popup`}>
      <p>
        {`Game ${gameCount}: `}
        {currentPlayer === 1 ? `${player1} wins!` : `${player2} wins!`}
      </p>
      <button onClick={handleClick}>x</button>
    </div>
  );
}
