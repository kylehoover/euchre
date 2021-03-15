import { CaseReducer } from "@reduxjs/toolkit";
import { GameStep } from "../../../types";
import { GameState } from "../types";
import { getCurrentRound, sortCards } from "../../../gameHelpers";
import { log } from "../helpers";

export const pickUpTrump: CaseReducer<GameState> = (state) => {
  const { activePlayerIndex } = state;
  const round = getCurrentRound(state);
  const dealer = state.players[round.dealerId];
  round.callerId = state.playerOrder[activePlayerIndex];
  round.trump = round.trumpCardFromDeck!.suit;
  dealer.hand = sortCards([...dealer.hand, round.trumpCardFromDeck!]);
  state.activePlayerIndex = state.dealerIndex;
  state.step = GameStep.DealerDiscarding;

  log(state, `[${activePlayerIndex}]: pick up`);
  log(state, `Step: ${state.step}`);
  log(state, `Active: ${state.activePlayerIndex}`);
};
