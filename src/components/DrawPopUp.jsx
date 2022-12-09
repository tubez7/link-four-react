export default function DrawPopUp({ gameCount, setDraw }) {
  const handleClick = (e) => {
    e.preventDefault();
    setDraw(false);
  };
  return (
    <div className="draw-popup">
      <p>{`Game ${gameCount}: Draw!`}</p>
      <button onClick={handleClick}>Close</button>
    </div>
  );
}
