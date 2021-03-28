import { CaseReducer } from "@reduxjs/toolkit";
import { GameStep } from "../../../types";
import { GameState } from "../types";
import { log } from "../helpers";
import { getWinningTeamIndex } from "../../../gameHelpers/getWinningTeamIndex";
import { getNumWinningPoints } from "../../../gameHelpers/getNumWinningPoints";

export const endRound: CaseReducer<GameState> = (state) => {
  const winningTeamIndex = getWinningTeamIndex(state);
  state.teams[winningTeamIndex].points += getNumWinningPoints(state);
  state.step = GameStep.EndingRound;

  log(state, `Team ${winningTeamIndex + 1} wins round`);
  log(state, `Step: ${state.step}`);
};
