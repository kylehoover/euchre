import { CaseReducer } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { GameStep } from "../../../types";
import { getCurrentRound } from "../../../gameHelpers";
import { endRound } from "./endRound";
import { gameActions } from "../gameSlice";

export const resumePlay: CaseReducer<GameState> = (state) => {
  const round = getCurrentRound(state);

  if (round.tricks.length < 6) {
    state.step = GameStep.PlayingCards;
  } else {
    endRound(state, gameActions.endRound());
  }
};
