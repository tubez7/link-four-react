export default function Board({ board, game }) {
  return (
    <div className="board-rows">
      {board.map((row, rowIndex) => {
        return row.map((elem, i) => {
          return (
            <div key={`${i}-${rowIndex}`} className="board-space">
              col: {i + 1}, row: {rowIndex + 1}, val: {elem}, id:{" "}
              {`${rowIndex}-${i}`}
            </div>
          );
        });
      })}
      
    </div>
  );
}
