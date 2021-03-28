import { CaseReducer } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { GameStep } from "../../../types";
import { getCurrentRound } from "../../../gameHelpers";
import { gameActions } from "../gameSlice";
import { log } from "../helpers";
import { endRound } from "./endRound";
import { startRound } from "./startRound";

export const resumePlay: CaseReducer<GameState> = (state) => {
  const round = getCurrentRound(state);

  if (state.step === GameStep.EndingTrick) {
    if (round.tricks.length < 6) {
      state.step = GameStep.PlayingCards;
      log(state, `Step: ${state.step}`);
    } else {
      endRound(state, gameActions.endRound());
    }
  } else if (state.step === GameStep.EndingRound) {
    const isGameOver = state.teams.some((team) => team.points >= 10);

    if (isGameOver) {
      state.step = GameStep.EndingGame;
      log(state, `Step: ${state.step}`);
    } else {
      startRound(state, gameActions.startRound());
    }
  }
};
