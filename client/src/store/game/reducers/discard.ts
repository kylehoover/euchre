import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { getActivePlayer } from "../../../gameHelpers";
import { GameStep } from "../../../types";
import { nextIndex } from "../helpers";

export const discard: CaseReducer<GameState, PayloadAction<number>> = (
  state,
  action,
) => {
  const player = getActivePlayer(state);
  player.hand.splice(action.payload, 1);
  state.activePlayerIndex = nextIndex(state.dealerIndex);
  state.step = GameStep.PlayingCards;
};
