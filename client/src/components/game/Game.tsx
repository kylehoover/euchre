import { useEffect } from "react";
import { GameStep } from "../../types";
import { GameLog } from "./GameLog";
import { Hand } from "./Hand";
import { PlayerContainer } from "./PlayerContainer";
import { StartRoundDisplay } from "./StartRoundDisplay";
import { TrumpPicker } from "./TrumpPicker";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import { useBot } from "../bot";
import "./Game.scss";

export function Game() {
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.game.step);
  useBot();

  useEffect(() => {
    // dispatch(gameActions.dealCards());
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
