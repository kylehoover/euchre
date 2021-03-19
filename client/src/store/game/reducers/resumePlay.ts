import { CaseReducer } from "@reduxjs/toolkit";
import { GameStep } from "../../../types";
import { GameState } from "../types";

export const resumePlay: CaseReducer<GameState> = (state) => {
  state.step = GameStep.PlayingCards;
};
