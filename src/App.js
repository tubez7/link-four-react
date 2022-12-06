import "./App.css";

import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  const [visible, setVisible] = useState(false);
  const [winner, setWinner] = useState(false);

  return (
    <div className="App">
      <Header />
      <Nav visible={visible} setVisible={setVisible} />
      {!winner && (
        <Main visible={visible} setVisible={setVisible} setWinner={setWinner} />
      )}
    </div>
  );
}

export default App;
