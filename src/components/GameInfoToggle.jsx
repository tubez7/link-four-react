import { useState } from "react";

export default function GameInfoToggle({ children }) {
  const [infoVisible, setInfoVisible] = useState(false);

  const toggleInfoVisible = (e) => {
    e.preventDefault();
    setInfoVisible((currentStatsVisible) => !currentStatsVisible);
  };

  return (
    <div className="game-info">
      <button className="info-toggle" onClick={toggleInfoVisible}>
        {infoVisible ? "Close" : "Game info"}
      </button>
      {infoVisible && children}
    </div>
  );
}
