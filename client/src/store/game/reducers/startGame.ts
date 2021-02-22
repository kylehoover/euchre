import { CaseReducer } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { shuffle } from "../../../helpers";

export const startGame: CaseReducer<GameState> = (state) => {
  state.deck = shuffle(state.deck);
};
