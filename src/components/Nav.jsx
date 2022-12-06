import { useNavigate } from "react-router-dom";

export default function Nav({
  visible,
  setVisible,
  aboutClicked,
  setAboutClicked,
}) {
  const newGameForm = () => {
    setVisible(false);
  };

  const navigate = useNavigate();

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
          <button onClick={newGameForm} disabled={!visible}>
            New Game
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
