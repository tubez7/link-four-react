import { useState } from "react";

export default function GameInfoToggle({ children }) {
  const [statsVisible, setStatsVisible] = useState(false);

  const toggleStatsVisible = (e) => {
    e.preventDefault();
    setStatsVisible((currentStatsVisible) => !currentStatsVisible);
  };

  return (
    <div className="game-info">
      <button className="info-toggle" onClick={toggleStatsVisible}>
        {statsVisible ? "Close" : "Show current game info"}
      </button>
      {statsVisible && children}
    </div>
  );
}
