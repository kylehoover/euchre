import { GameStep } from "../../../types";
import { log } from "../helpers";
import { GameState } from "../types";

export function startRound(state: GameState): void {
  state.rounds.push({
    callerId: "",
    dealerId: state.playerOrder[state.dealerIndex],
    dealerPassed: false,
    isMisdeal: false,
    tricks: [{ cards: [] }],
  });

  state.step = GameStep.StartingRound;
  log(state, `Start round: ${state.rounds.length}`);
  log(state, `Step: ${state.step}`);
  log(state, `Dealer: ${state.dealerIndex}`);
}
