import { CaseReducer } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { log, nextIndex } from "../helpers";
import { getCurrentRound } from "../../../gameHelpers";

export const passCallingTrump: CaseReducer<GameState> = (state) => {
  const { activePlayerIndex, dealerIndex } = state;
  const round = getCurrentRound(state);

  if (activePlayerIndex === dealerIndex) {
    if (!round.dealerPassed) {
      round.dealerPassed = true;
    } else {
      // dealer has passed twice, new round
    }
  }

  state.activePlayerIndex = nextIndex(activePlayerIndex);

  log(state, `[${activePlayerIndex}]: pass`);
  log(state, `Active: ${state.activePlayerIndex}`);
};
