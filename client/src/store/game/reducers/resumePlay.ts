import { CaseReducer } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { GameStep } from "../../../types";
import { getCurrentRound } from "../../../gameHelpers";

export const resumePlay: CaseReducer<GameState> = (state) => {
  const round = getCurrentRound(state);

  if (round.tricks.length < 6) {
    state.step = GameStep.PlayingCards;
  }
};
