export default function GameInfoToggle({
  children,
  infoVisible,
  setInfoVisible,
}) {
  const toggleInfoVisible = (e) => {
    e.preventDefault();
    setInfoVisible((currentStatsVisible) => !currentStatsVisible);
  };

  return (
    <div className="game-info">
      <button className="info-toggle" onClick={toggleInfoVisible}>
        {infoVisible ? "x" : "Stats"}
      </button>
      {infoVisible && children}
    </div>
  );
}
