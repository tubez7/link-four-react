import "./App.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About";

function App() {
  const [visible, setVisible] = useState(false);
  const [winner, setWinner] = useState(false);
  const [aboutClicked, setAboutClicked] = useState(false);

  return (
    <div className="App">
      <Header />
      <Nav visible={visible} setVisible={setVisible} aboutClicked={aboutClicked} setAboutClicked={setAboutClicked} />
      <Routes>
      <Route path="/" element={!winner && (
        <Main visible={visible} setVisible={setVisible} setWinner={setWinner} />
      )} />
      <Route path="/about" element={<About visible={visible} />} />
    </Routes>
    </div>
  );
}

export default App;
