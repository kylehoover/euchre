import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { getCurrentRound } from "../../../gameHelpers";
import { CardSuit, GameStep } from "../../../types";
import { GameState } from "../types";
import { log, nextIndex } from "../helpers";

export const callTrump: CaseReducer<GameState, PayloadAction<CardSuit>> = (
  state,
  action,
) => {
  const { activePlayerIndex, dealerIndex } = state;
  const round = getCurrentRound(state);
  round.callerId = state.playerOrder[activePlayerIndex];
  round.trump = action.payload;
  state.activePlayerIndex = nextIndex(dealerIndex);
  state.step = GameStep.PlayingCards;

  log(state, `[${activePlayerIndex}]: call ${round.trump}`);
  log(state, `Active: ${state.activePlayerIndex}`);
  log(state, `Step: ${state.step}`);
};
