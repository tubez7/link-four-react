export default function GameStatsToggle({
  children,
  infoVisible,
  setInfoVisible,
}) {
  const toggleInfoVisible = (e) => {
    e.preventDefault();
    setInfoVisible((currentStatsVisible) => !currentStatsVisible);
  };

  return (
    <div className="game-stats">
      <button onClick={toggleInfoVisible}>{infoVisible ? "x" : "Stats"}</button>
      {infoVisible && children}
    </div>
  );
}
