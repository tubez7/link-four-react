import "./App.css";

import startBoard from "./utils/startBoard";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { BoardContext } from "./contexts/Board";
import { CurrentPlayerContext } from "./contexts/CurrentPlayer";
import { PlayerContext } from "./contexts/Player";

import Header from "./components/Header";
import Info from "./components/Info";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  const [newGameVisible, setNewGameVisible] = useState(true);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [board, setBoard] = useState(startBoard);
  const [gameFinish, setGameFinish] = useState(false);
  const [showWinner, setShowWinner] = useState(false);
  const [draw, setDraw] = useState(false);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [startingPlayer, setStartingPlayer] = useState(1);
  const [gameCount, setGameCount] = useState(0);
  const [turnCount, setTurnCount] = useState(0);
  const [gameStart, setGameStart] = useState(false);

  return (
    <PlayerContext.Provider
      value={{ player1, setPlayer1, player2, setPlayer2 }}
    >
      <CurrentPlayerContext.Provider
        value={{ currentPlayer, setCurrentPlayer }}
      >
        <BoardContext.Provider value={{ board, setBoard }}>
          <div className="App">
            <Header />
            <Nav
              newGameVisible={newGameVisible}
              setNewGameVisible={setNewGameVisible}
              aboutClicked={aboutClicked}
              setAboutClicked={setAboutClicked}
              setShowWinner={setShowWinner}
              gameFinish={gameFinish}
              setDraw={setDraw}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    newGameVisible={newGameVisible}
                    setNewGameVisible={setNewGameVisible}
                    gameFinish={gameFinish}
                    setGameFinish={setGameFinish}
                    setShowWinner={setShowWinner}
                    showWinner={showWinner}
                    draw={draw}
                    setDraw={setDraw}
                    player1Score={player1Score}
                    setPlayer1Score={setPlayer1Score}
                    player2Score={player2Score}
                    setPlayer2Score={setPlayer2Score}
                    startingPlayer={startingPlayer}
                    setStartingPlayer={setStartingPlayer}
                    gameCount={gameCount}
                    setGameCount={setGameCount}
                    turnCount={turnCount}
                    setTurnCount={setTurnCount}
                    gameStart={gameStart}
                    setGameStart={setGameStart}
                  />
                }
              />
              <Route path="/info" element={<Info />} />
            </Routes>
            <footer>Designed and created by RJ Black - 2022</footer>
          </div>
        </BoardContext.Provider>
      </CurrentPlayerContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;
