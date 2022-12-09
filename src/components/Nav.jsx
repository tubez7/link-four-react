import { useNavigate } from "react-router-dom";

export default function Nav({
  newGameVisible,
  setNewGameVisible,
  aboutClicked,
  setAboutClicked,
  setShowWinner,
  winner,
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
    navigate("/about");
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
            {winner ? "New Game" : "Game Settings"}
          </button>
          <button onClick={handleAboutClicked}>About/Info</button>
        </>
      )}
      {aboutClicked && (
        <button onClick={handleBackClicked}>Back to game</button>
      )}
    </nav>
  );
}
