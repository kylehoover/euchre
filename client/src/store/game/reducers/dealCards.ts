import { CaseReducer } from "@reduxjs/toolkit";
import { GameStep } from "../../../types";
import { GameState } from "../types";
import { createDeck, deal, sortCards } from "../../../gameHelpers";
import { shuffle } from "../../../helpers";
import { log, nextIndex } from "../helpers";

export const dealCards: CaseReducer<GameState> = (state) => {
  const deck = shuffle(createDeck());
  const { hands, remaining } = deal(deck);
  let currentIndex = state.activePlayerIndex;

  hands.forEach((hand) => {
    const playerId = state.playerOrder[currentIndex];
    state.players[playerId].hand = sortCards(hand);
    currentIndex = nextIndex(currentIndex);
  });

  state.rounds[state.rounds.length - 1].trumpCardFromDeck = remaining[0];
  state.step = GameStep.CallingTrump;

  log(state, "Deal cards");
  log(state, `Step: ${GameStep.CallingTrump}`);
  log(state, `Active: ${state.activePlayerIndex}`);
};
