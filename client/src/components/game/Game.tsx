import { Paper } from "@material-ui/core";
import { useEffect } from "react";
import { GameStep } from "../../types";
import { GameSummary } from "./GameSummary";
import { GameTable } from "./GameTable";
import { Hand } from "./Hand";
import { PlayerContainer } from "./PlayerContainer";
import { StartRoundDisplay } from "./StartRoundDisplay";
import { SuitIcon } from "./SuitIcon";
import { TrumpPicker } from "./TrumpPicker";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import { getCurrentRound } from "../../gameHelpers";
import { useBot } from "../bot";
import { useGameObserver } from "../hooks";
import "./Game.scss";

export function Game() {
  useBot();
  useGameObserver();

  const dispatch = useAppDispatch();
  const trump = useAppSelector((state) => getCurrentRound(state.game).trump);
  const step = useAppSelector((state) => state.game.step);

  useEffect(() => {
    dispatch(gameActions.dealCards());
  }, [dispatch]);

  return (
    <div className="Game">
      <div className="top">
        <div className="left">
          <GameSummary />
          {trump && (
            <Paper className="trump-container">
              <SuitIcon suit={trump} />
            </Paper>
          )}
        </div>
        <div className="center">
          <PlayerContainer index={2} />
        </div>
        <div className="right" />
      </div>
      <div className="middle">
        <div className="left">
          <PlayerContainer index={1} />
        </div>
        <div className="center">
          {step === GameStep.StartingRound && <StartRoundDisplay />}

          {(step === GameStep.CallingTrump ||
            step === GameStep.DealerDiscarding) && <TrumpPicker />}

          {(step === GameStep.PlayingCards ||
            step === GameStep.EndingTrick) && <GameTable />}
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
