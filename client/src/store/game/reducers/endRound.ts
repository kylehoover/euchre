import { CaseReducer } from "@reduxjs/toolkit";
import { getNumTricks } from "../../../gameHelpers";
import { GameState } from "../types";

export const endRound: CaseReducer<GameState> = (state) => {
  const { teams } = state;

  teams.forEach((team, index) => {
    if (getNumTricks(state, index) >= 3) {
      team.points++;
    }
  });
};
