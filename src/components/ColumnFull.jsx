export default function ColumnFull({ setColumnFull }) {
  const handleClose = (e) => {
    e.preventDefault();
    setColumnFull(false);
  };
  return (
    <div className="column-full-popup">
      This column is full! Please choose a different one.{" "}
      <button onClick={handleClose}>Close</button>
    </div>
  );
}
