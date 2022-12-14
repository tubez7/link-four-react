import { useState } from "react";

import GameBoard from "./GameBoard";
import GameInfoToggle from "./GameInfoToggle";
import InfoList from "./InfoList";
import NewGameForm from "./NewGameForm";

export default function Main({
  newGameVisible,
  setNewGameVisible,
  gameFinish,
  setGameFinish,
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
  const [infoVisible, setInfoVisible] = useState(false);

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
        />
      </div>
      <GameInfoToggle infoVisible={infoVisible} setInfoVisible={setInfoVisible}>
        <InfoList
          player1Score={player1Score}
          player2Score={player2Score}
          gameCount={gameCount}
          turnCount={turnCount}
          setInfoVisible={setInfoVisible}
        />
      </GameInfoToggle>
      <footer>Designed and created by RJ Black - 2022</footer>
    </>
  );
}
