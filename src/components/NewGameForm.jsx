import { useState } from "react";
import LinkFour from "../utils/linkFour";

export default function NewGameForm({ setVisible, game, setGame }) {
  const [player1, setPlayer1] = useState(game.player1);
  const [player2, setPlayer2] = useState(game.player2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGame(new LinkFour(player1, player2));
    setVisible(false);
  };

  const closeForm = (e) => {
    e.preventDefault();
    setVisible(false);
  };

  const assignPlayer1 = (e) => {
    setPlayer1(e.target.value);
  };

  const assignPlayer2 = (e) => {
    setPlayer2(e.target.value);
  };

  return (
    <form className="new-game-form">
      <fieldset>
        <label for="player1">Player 1: </label>
        <input
          type="text"
          id="player1"
          placeholder={game.player1}
          onChange={assignPlayer1}
        ></input>
        <label for="player2">Player 2: </label>
        <input
          type="text"
          id="player2"
          placeholder={game.player2}
          onChange={assignPlayer2}
        ></input>
        <button onClick={handleSubmit}>Start New Game</button>
        <button onClick={closeForm}>Close</button>
      </fieldset>
    </form>
  );
}
