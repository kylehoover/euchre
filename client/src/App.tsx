import { Game } from "./components";
import { GameLobby } from "./components/game/GameLobby";
import { GameStep } from "./types";
import { useAppSelector } from "./store";
import "./styles.scss";

export function App() {
  const gameStep = useAppSelector((state) => state.game.step);

  return (
    <div className="App">
      {gameStep === GameStep.WaitingForPlayers ? <GameLobby /> : <Game />}
    </div>
  );
}
