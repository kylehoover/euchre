import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { getActivePlayer } from "../../../gameHelpers";

export const discard: CaseReducer<GameState, PayloadAction<number>> = (
  state,
  action,
) => {
  const player = getActivePlayer(state);
  player.hand.splice(action.payload, 1);
};
