import { useCallback, useEffect } from "react";
import { Button } from "@material-ui/core";
import { GameStep } from "../../types";
import { Hand } from "./Hand";
import { PlayerContainer } from "./PlayerContainer";
import { StartRoundDisplay } from "./StartRoundDisplay";
import { TrumpPicker } from "./TrumpPicker";
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
        name: "You",
        playerId: "1",
        teamIndex: 0,
        isCurrentUser: true,
      }),
    );
    dispatch(gameActions.startGame());
    dispatch(gameActions.dealCards());
  }, [dispatch]);

  return (
    <div className="Game">
      <div className="top">
        <PlayerContainer index={2} />
      </div>
      <div className="middle">
        <div className="left">
          <PlayerContainer index={1} />
        </div>
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

          {(step === GameStep.CallingTrump ||
            step === GameStep.DealerDiscarding) && <TrumpPicker />}
        </div>
        <div className="right">
          <PlayerContainer index={3} />
        </div>
      </div>
      <div className="bottom">
        <PlayerContainer index={0} />
        <Hand />
      </div>
    </div>
  );
}
