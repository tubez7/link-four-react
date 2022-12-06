export default function DropColumns({ col, i, setBoard, game }) {
  return (
    <div className="drop-column">
      index {i}, col {`${col}`}
    </div>
  );
}
