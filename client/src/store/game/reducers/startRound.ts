import { GameStep } from "../../../types";
import { GameState } from "../types";

export function startRound(state: GameState): void {
  state.rounds.push({
    callerId: "",
    dealerId: state.playerOrder[state.dealerIndex],
    dealerPassed: false,
    isMisdeal: false,
    tricks: [],
  });

  state.step = GameStep.StartingRound;
  state.log.push(`Start round: ${state.rounds.length}`);
  state.log.push(`Step: ${state.step}`);
}
