export default function Nav({ visible, setVisible }) {
  const newGameForm = () => {
    setVisible(false);
  };

  return (
    <nav className="nav-bar">
      <button onClick={newGameForm} disabled={!visible}>New Game</button>
      <button>About/Info</button>
    </nav>
  );
}
