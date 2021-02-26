import { Game } from "./components";
import { gameActions } from "./store/game";
import { useAppDispatch } from "./store";
import "./styles.scss";

export function App() {
  const dispatch = useAppDispatch();
  dispatch(
    gameActions.startGame([
      { id: "1", playerIds: [] },
      { id: "2", playerIds: [] },
    ])
  );

  return (
    <div className="App">
      <Game />
    </div>
  );
}
