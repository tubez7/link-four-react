import startBoard from "../utils/startBoard";

import { useContext } from "react";
import { BoardContext } from "../contexts/Board";
import { CurrentPlayerContext } from "../contexts/CurrentPlayer";
import { PlayerContext } from "../contexts/Player";

export default function NewGameForm({
  setNewGameVisible,
  setGameFinish,
  setPlayer1Score,
  setPlayer2Score,
  startingPlayer,
  setStartingPlayer,
  gameStart,
  setGameStart,
  setGameCount,
  setTurnCount,
}) {
  const { player1, setPlayer1, player2, setPlayer2 } =
    useContext(PlayerContext);

  const { setBoard } = useContext(BoardContext);
  const { setCurrentPlayer } = useContext(CurrentPlayerContext);

  const handleStartGame = (e) => {
    e.preventDefault();
    setNewGameVisible(false);
    setBoard(startBoard);
    setGameFinish(false);
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
    setGameFinish(false);
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
    setGameFinish(false);
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
    if (e.target.value.length < 1) {
      setPlayer1("Player 1");
    } else {
      setPlayer1(e.target.value);
    }
  };

  const assignPlayer2 = (e) => {
    if (e.target.value.length < 1) {
      setPlayer2("Player 2");
    } else {
      setPlayer2(e.target.value);
    }
  };

  return (
    <form className="new-game-form">
      <fieldset>
        <label htmlFor="player1" id="p1-label">Player 1: </label>
        <input
          type="text"
          id="player1"
          name="player1"
          placeholder={player1}
          onChange={assignPlayer1}
        ></input>
        <label htmlFor="player2" id="p2-label">Player 2: </label>
        <input
          type="text"
          id="player2"
          name="player2"
          placeholder={player2}
          onChange={assignPlayer2}
        ></input>
        <br/>
        <button onClick={handleStartGame}>Start New Game</button>
        <br/>
        <button onClick={handleResetGame} disabled={!gameStart}>
          Restart Game
        </button>
        <br/>
        <button onClick={handleResetScores}>Reset Scores</button>        
        <button onClick={handleReset}>Reset All</button>
        <br/>
        <button onClick={handleClose}>x</button>
      </fieldset>
    </form>
  );
}
