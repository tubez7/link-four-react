import startBoard from "../utils/startBoard";

import { useContext } from "react";
import { BoardContext } from "../contexts/Board";
import { CurrentPlayerContext } from "../contexts/CurrentPlayer";
import { PlayerContext } from "../contexts/Player";

export default function NewGameForm({
  setNewGameVisible,
  setWinner,
  setPlayer1Score,
  setPlayer2Score,
  startingPlayer,
  setStartingPlayer,
  gameStart,
  setGameStart,
  setGameCount, setTurnCount
}) {
  const { player1, setPlayer1, player2, setPlayer2 } =
    useContext(PlayerContext);

  const { setBoard } = useContext(BoardContext);
  const { setCurrentPlayer } = useContext(CurrentPlayerContext);

  const handleStartGame = (e) => {
    e.preventDefault();
    setNewGameVisible(false);
    setBoard(startBoard);
    setWinner(false);
    setTurnCount(0);
    setStartingPlayer((currStartingPlayer) => {
      return currStartingPlayer === 1 ? 2 : 1;
    });
    setCurrentPlayer(startingPlayer);
  };

  const handleResetGame = (e) => {
    e.preventDefault();
    const resetStartPlayer = startingPlayer === 2 ? 1 : 2;
    setCurrentPlayer(resetStartPlayer);
    setNewGameVisible(false);
    setBoard(startBoard);
    setWinner(false);
    setGameStart(false);
    setTurnCount(0);
  };

  const handleResetScores = (e) => {
    e.preventDefault();
    setPlayer1Score(0);
    setPlayer2Score(0);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setPlayer1("Player 1");
    setPlayer2("Player 2");
    setBoard(startBoard);
    setWinner(false);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setCurrentPlayer(1);
    setStartingPlayer(1);
    setGameStart(false);
    setGameCount(0);
    setTurnCount(0);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setNewGameVisible(false);
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
        <button onClick={handleStartGame}>Start New Game</button>
        <button onClick={handleResetGame} disabled={!gameStart}>
          Restart Current Game
        </button>
        <button onClick={handleResetScores}>Reset Scores</button>
        <button onClick={handleReset}>Reset All</button>
        <button onClick={handleClose}>Close</button>
      </fieldset>
    </form>
  );
}
