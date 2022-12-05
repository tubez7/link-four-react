export default function Nav({ visible, setVisible }) {
  const newGameForm = () => {
    setVisible(true);
  };

  return (
    <nav className="Nav-bar">
      <button onClick={newGameForm} disabled={visible}>New Game</button>
      <button>About/Info</button>
    </nav>
  );
}
