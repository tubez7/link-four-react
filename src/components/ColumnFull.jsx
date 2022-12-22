export default function ColumnFull({ setColumnFull }) {
  const handleClose = (e) => {
    e.preventDefault();
    setColumnFull(false);
  };
  return (
    <div className="column-full-popup">
      <p>This column is full! Please choose a different one.</p>
      <button onClick={handleClose}>x</button>
    </div>
  );
}
