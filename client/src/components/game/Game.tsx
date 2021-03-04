import { useCallback, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Hand } from "./Hand";
import { GameStep } from "../../types";
import { StartRoundDisplay } from "./StartRoundDisplay";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import "./Game.scss";

export function Game() {
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.game.step);

  const handleStartGame = useCallback(() => {
    dispatch(gameActions.startGame());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      gameActions.addPlayer({
        playerId: "1",
        teamIndex: 0,
        isCurrentUser: true,
      }),
    );
  }, [dispatch]);

  return (
    <div className="Game">
      <div className="top"></div>
      <div className="middle">
        <div className="left"></div>
        <div className="center">
          {step === GameStep.WaitingForPlayers && (
            <Button
              color="primary"
              variant="contained"
              onClick={handleStartGame}
            >
              Start Game
            </Button>
          )}

          {step === GameStep.StartingRound && <StartRoundDisplay />}
        </div>
        <div className="right"></div>
      </div>
      <div className="bottom">
        <Hand />
      </div>
    </div>
  );
}
