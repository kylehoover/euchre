import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { getActivePlayer } from "../../../gameHelpers";
import { GameStep } from "../../../types";
import { log, nextIndex } from "../helpers";

export const discard: CaseReducer<GameState, PayloadAction<number>> = (
  state,
  action,
) => {
  const { activePlayerIndex, dealerIndex } = state;
  const player = getActivePlayer(state);
  player.hand.splice(action.payload, 1);
  state.activePlayerIndex = nextIndex(dealerIndex);
  state.step = GameStep.PlayingCards;

  log(state, `[${activePlayerIndex}]: discard`);
  log(state, `Step: ${state.step}`);
  log(state, `Active: ${state.activePlayerIndex}`);
};
