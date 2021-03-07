import { CaseReducer } from "@reduxjs/toolkit";
import { GameStep } from "../../../types";
import { GameState } from "../types";
import { getCurrentRound, sortCards } from "../../../gameHelpers";

export const pickUpTrump: CaseReducer<GameState> = (state) => {
  const round = getCurrentRound(state);
  const dealer = state.players[round.dealerId];
  round.callerId = state.playerOrder[state.activePlayerIndex];
  round.trump = round.trumpCardFromDeck!.suit;
  dealer.hand = sortCards([...dealer.hand, round.trumpCardFromDeck!]);
  state.activePlayerIndex = state.dealerIndex;
  state.step = GameStep.DealerDiscarding;
};
