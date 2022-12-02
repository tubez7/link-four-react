export default function Board({ board }) {
  return (
    <>
      <div className="Board-rows">
        {board.map((row, rowIndex) => {
          return row.map((elem, i) => {
            return (
              <div className="Board-space">
                col: {i + 1}, row: {rowIndex + 1}, val: {elem}
              </div>
            );
          });
        })}
      </div>
    </>
  );
}
