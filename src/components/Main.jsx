import { useState } from "react";

import GameBoard from "./GameBoard";
import GameStatsToggle from "./GameStatsToggle";
import NewGameForm from "./NewGameForm";
import StatsList from "./StatsList";

export default function Main({
  newGameVisible,
  setNewGameVisible,
  gameFinish,
  setGameFinish,
  showWinner,
  setShowWinner,
  draw,
  setDraw,
  player1Score,
  setPlayer1Score,
  player2Score,
  setPlayer2Score,
  startingPlayer,
  setStartingPlayer,
  gameCount,
  setGameCount,
  turnCount,
  setTurnCount,
  gameStart,
  setGameStart,
}) {
  const [infoVisible, setInfoVisible] = useState(false);
  const [columnFull, setColumnFull] = useState(false);

  return (
    <>
      <div className="game-block">
        {newGameVisible && (
          <NewGameForm
            setNewGameVisible={setNewGameVisible}
            setGameFinish={setGameFinish}
            setPlayer1Score={setPlayer1Score}
            setPlayer2Score={setPlayer2Score}
            startingPlayer={startingPlayer}
            setStartingPlayer={setStartingPlayer}
            gameStart={gameStart}
            setGameStart={setGameStart}
            setGameCount={setGameCount}
            setTurnCount={setTurnCount}
            setColumnFull={setColumnFull}
          />
        )}
        <GameBoard
          newGameVisible={newGameVisible}
          gameFinish={gameFinish}
          setGameFinish={setGameFinish}
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
          setColumnFull={setColumnFull}
          columnFull={columnFull}
        />
      </div>
      <GameStatsToggle
        infoVisible={infoVisible}
        setInfoVisible={setInfoVisible}
      >
        <StatsList
          player1Score={player1Score}
          player2Score={player2Score}
          gameCount={gameCount}
          turnCount={turnCount}
          setInfoVisible={setInfoVisible}
        />
      </GameStatsToggle>
    </>
  );
}
