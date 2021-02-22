import { gameActions } from "./store/game";
import { useAppDispatch } from "./store";

export function App() {
  const dispatch = useAppDispatch();
  dispatch(gameActions.startGame());

  return <div className="App">Euchre</div>;
}
