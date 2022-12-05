import "./App.css";

import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <Header />
      <Nav visible={visible} setVisible={setVisible} />
      <Main visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default App;
