import { useContext } from "react";
import { PlayerContext } from "../contexts/Player";

export default function NewGameForm({ setVisible }) {
  const { player1, setPlayer1, player2, setPlayer2 } =
    useContext(PlayerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  const closeForm = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  const assignPlayer1 = (e) => {
    setPlayer1(e.target.value);
  };

  const assignPlayer2 = (e) => {
    setPlayer2(e.target.value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setPlayer1("Player 1");
    setPlayer2("Player 2");
  }

  return (
    <form className="new-game-form">
      <fieldset>
        <label htmlFor="player1">Player 1: </label>
        <input
          type="text"
          id="player1"
          placeholder={player1}
          onChange={assignPlayer1}
        ></input>
        <label htmlFor="player2">Player 2: </label>
        <input
          type="text"
          id="player2"
          placeholder={player2}
          onChange={assignPlayer2}
        ></input>
        <button onClick={handleSubmit}>Start New Game</button>
        <button onClick={{handleReset}}>Reset</button>
        <button onClick={closeForm}>Close</button>
      </fieldset>
    </form>
  );
}
