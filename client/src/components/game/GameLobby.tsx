import { Button } from "@material-ui/core";
import { useCallback, useEffect } from "react";
import { gameActions, useAppDispatch } from "../../store";
import "./GameLobby.scss";

export function GameLobby() {
  const dispatch = useAppDispatch();

  const handleStartGame = useCallback(() => {
    dispatch(gameActions.startGame());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      gameActions.addPlayer({
        name: "You",
        playerId: "1",
        teamIndex: 0,
        isCurrentUser: true,
      }),
    );
    // dispatch(gameActions.startGame());
  }, [dispatch]);

  return (
    <div className="GameLobby">
      <Button color="primary" variant="contained" onClick={handleStartGame}>
        Start Game
      </Button>
    </div>
  );
}
