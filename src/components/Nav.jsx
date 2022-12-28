import { useNavigate } from "react-router-dom";

export default function Nav({
  newGameVisible,
  setNewGameVisible,
  gameNav,
  setGameNav,
  setShowWinner,
  gameFinish,
  setDraw,
  infoNav,
  setInfoNav,
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
    setGameNav(false);
  };

  const handleBackClicked = (e) => {
    e.preventDefault();
    navigate(-1);
    setGameNav(true);
    setInfoNav(false);
  };

  return (
    <nav className="nav-bar">
      {gameNav && (
        <>
          <button onClick={newGameForm} disabled={newGameVisible}>
            {gameFinish ? "New Game" : "Config"}
          </button>
          <button onClick={handleAboutClicked}>Info</button>
        </>
      )}
      {infoNav && (
        <>
          <button onClick={handleBackClicked}>Back to game</button>
          <button>Developer</button>
          <button>Contact</button>
          <button>Links</button>
        </>
      )}
    </nav>
  );
}
