import { CaseReducer } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { createDeck, deal } from "../../../gameHelpers";
import { shuffle } from "../../../helpers";
import { nextIndex } from "../helpers";
import { GameStep } from "../../../types";

export const dealCards: CaseReducer<GameState> = (state) => {
  const deck = shuffle(createDeck());
  const { hands, remaining } = deal(deck);
  let currentIndex = state.activePlayerIndex;

  hands.forEach((hand) => {
    const playerId = state.playerOrder[currentIndex];
    state.players[playerId].hand = hand;
    currentIndex = nextIndex(currentIndex);
  });

  state.rounds[state.rounds.length - 1].trumpCardFromDeck = remaining[0];
  state.step = GameStep.CallingTrump;
};
