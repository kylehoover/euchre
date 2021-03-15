import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { getActivePlayer, getCurrentRound } from "../../../gameHelpers";
import { log, nextIndex } from "../helpers";
import { GameState } from "../types";

export const playCard: CaseReducer<GameState, PayloadAction<number>> = (
  state,
  action,
) => {
  const { activePlayerIndex, playerOrder } = state;
  const player = getActivePlayer(state);
  const round = getCurrentRound(state);
  const card = player.hand.splice(action.payload, 1)[0];
  const trick = round.tricks[round.tricks.length - 1];
  trick.cards.push({
    ...card,
    playerId: playerOrder[activePlayerIndex],
  });
  state.activePlayerIndex = nextIndex(activePlayerIndex);

  log(state, `[${activePlayerIndex}]: play ${card.value} ${card.suit}`);
  log(state, `Active: ${state.activePlayerIndex}`);
};
