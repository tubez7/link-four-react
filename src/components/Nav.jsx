import { useNavigate } from "react-router-dom";

export default function Nav({
  newGameVisible,
  setNewGameVisible,
  aboutClicked,
  setAboutClicked,
  setShowWinner,
  gameFinish,
  setDraw,
}) {
  const navigate = useNavigate();

  const newGameForm = (e) => {
    e.preventDefault();
    setNewGameVisible(true);
    setShowWinner(false);
    setDraw(false);
  };

  const handleAboutClicked = (e) => {
    e.preventDefault();
    navigate("/info");
    setAboutClicked(true);
  };

  const handleBackClicked = (e) => {
    e.preventDefault();
    navigate(-1);
    setAboutClicked(false);
  };

  return (
    <nav className="nav-bar">
      {!aboutClicked && (
        <>
          <button onClick={newGameForm} disabled={newGameVisible}>
            {gameFinish ? "New Game" : "Config"}
          </button>
          <button onClick={handleAboutClicked}>Info</button>
        </>
      )}
      {aboutClicked && (
        <button onClick={handleBackClicked}>Back to game</button>
      )}
    </nav>
  );
}
