import { useState } from "react";

import GameBoard from "./GameBoard";
import NewGameForm from "./NewGameForm";

export default function Main({
  newGameVisible,
  setNewGameVisible,
  winner,
  setWinner,
  showWinner,
  setShowWinner,
  draw,
  setDraw,
}) {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [startingPlayer, setStartingPlayer] = useState(1);
  const [gameStart, setGameStart] = useState(false);
  const [gameCount, setGameCount] = useState(0);
  const [turnCount, setTurnCount] = useState(0);

  return (
    <>
      {newGameVisible && (
        <NewGameForm
          setNewGameVisible={setNewGameVisible}
          setWinner={setWinner}
          setPlayer1Score={setPlayer1Score}
          setPlayer2Score={setPlayer2Score}
          startingPlayer={startingPlayer}
          setStartingPlayer={setStartingPlayer}
          gameStart={gameStart}
          setGameStart={setGameStart}
          setGameCount={setGameCount}
          setTurnCount={setTurnCount}
        />
      )}
      <GameBoard
        newGameVisible={newGameVisible}
        winner={winner}
        setWinner={setWinner}
        showWinner={showWinner}
        setShowWinner={setShowWinner}
        setPlayer1Score={setPlayer1Score}
        player1Score={player1Score}
        setPlayer2Score={setPlayer2Score}
        player2Score={player2Score}
        setGameStart={setGameStart}
        setGameCount={setGameCount}
        gameCount={gameCount}
        setTurnCount={setTurnCount}
        turnCount={turnCount}
        draw={draw}
        setDraw={setDraw}
      />
    </>
  );
}
