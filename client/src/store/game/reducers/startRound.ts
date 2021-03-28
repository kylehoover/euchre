import { CaseReducer } from "@reduxjs/toolkit";
import { GameStep } from "../../../types";
import { GameState } from "../types";
import { log, nextIndex } from "../helpers";
import { randomInt } from "../../../helpers";

export const startRound: CaseReducer<GameState> = (state) => {
  if (state.dealerIndex === -1) {
    // const dealerIndex = randomInt(0, 3);
    state.dealerIndex = 3;
    state.activePlayerIndex = nextIndex(state.dealerIndex);
  } else {
    state.dealerIndex = nextIndex(state.dealerIndex);
    state.activePlayerIndex = nextIndex(state.dealerIndex);
  }

  state.rounds.push({
    callerId: "",
    dealerId: state.playerOrder[state.dealerIndex],
    dealerPassed: false,
    isMisdeal: false,
    tricks: [{ cards: [], winningPlayerId: "", winningTeamIndex: -1 }],
  });

  state.step = GameStep.StartingRound;
  log(state, `Start round: ${state.rounds.length}`);
  log(state, `Step: ${state.step}`);
  log(state, `Dealer: ${state.dealerIndex}`);
};
