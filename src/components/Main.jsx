import NewGameForm from "./NewGameForm";
import GameBoard from "./GameBoard";

export default function Main({ visible, setVisible }) {
  
  return (
    <>
      {!visible && <NewGameForm setVisible={setVisible} />}
      <GameBoard visible={visible} />
    </>
  );
}
