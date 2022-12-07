import "./App.css";

import startBoard from "./utils/linkFour";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { BoardContext } from "./contexts/Board";
import { CurrentPlayerContext } from "./contexts/CurrentPlayer";
import { PlayerContext } from "./contexts/Player";

import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";


function App() {
  const [visible, setVisible] = useState(false);
  const [winner, setWinner] = useState(false);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [board, setBoard] = useState(startBoard);

  return (
    <PlayerContext.Provider
      value={{ player1, setPlayer1, player2, setPlayer2 }}
    >
      <CurrentPlayerContext.Provider
        value={{ currentPlayer, setCurrentPlayer }}
      >
        {" "}
        <BoardContext.Provider value={{ board, setBoard }}>
          <div className="App">
            <Header />
            <Nav
              visible={visible}
              setVisible={setVisible}
              aboutClicked={aboutClicked}
              setAboutClicked={setAboutClicked}
            />
            <Routes>
              <Route
                path="/"
                element={
                  !winner && (
                    <Main
                      visible={visible}
                      setVisible={setVisible}
                      setWinner={setWinner}
                    />
                  )
                }
              />
              <Route path="/about" element={<About visible={visible} />} />
            </Routes>
          </div>
        </BoardContext.Provider>
      </CurrentPlayerContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;
