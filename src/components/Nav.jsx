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
  setSeeDev,
  setSeePortfolio,
  setSeeContact,
  setSeeLinks,
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
    navigate("/");
    setInfoNav(false);
  };

  const showDev = (e) => {
    e.preventDefault();
    setSeeDev(true);
    setSeePortfolio(false);
    setSeeContact(false);
    setSeeLinks(false);
  };

  const showPortfolio = (e) => {
    e.preventDefault();
    setSeeDev(false);
    setSeePortfolio(true);
    setSeeContact(false);
    setSeeLinks(false);
  };

  const showContact = (e) => {
    e.preventDefault();
    setSeeDev(false);
    setSeePortfolio(false);
    setSeeContact(true);
    setSeeLinks(false);
  };

  const showLinks = (e) => {
    e.preventDefault();
    setSeeDev(false);
    setSeePortfolio(false);
    setSeeContact(false);
    setSeeLinks(true);
  };

  return (
    <>
      {gameNav && (
        <nav className="nav-bar">
          <button onClick={newGameForm} disabled={newGameVisible}>
            {gameFinish ? "New Game" : "Config"}
          </button>
          <button onClick={handleAboutClicked}>Info</button>
        </nav>
      )}
      {infoNav && (
        <nav className="info-nav">
          <button onClick={showDev}>Developer</button>
          <button onClick={showPortfolio}>Portfolio</button>
          <button onClick={showContact}>Contact</button>
          <button onClick={showLinks}>Links</button>
          <button onClick={handleBackClicked}>Back to game</button>
        </nav>
      )}
    </>
  );
}
