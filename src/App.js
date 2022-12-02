import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";

import LinkFour from "./utils/linkFour";

import { useState } from "react";

function App() {
  const [game, setNewGame] = useState(new LinkFour());
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  return (
    <div className="App">
      <Header />
      <Nav
        game={game}
        setNewGame={setNewGame}
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
      />
      <Main game={game} player1={player1} player2={player2} />
    </div>
  );
}

export default App;
