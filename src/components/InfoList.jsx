export default function InfoList({ game }) {
  return (
    <ul className="info-list">
      <li>Player 1: {game.player1}</li>
      <li>Player 2: {game.player2}</li>
      <li>Current Turn: {game.getPlayer()}</li>
    </ul>
  );
}
