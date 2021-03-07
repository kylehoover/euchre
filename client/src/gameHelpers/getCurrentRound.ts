import { GameState } from "../store/game/types";
import { Round } from "../types";

export function getCurrentRound(state: GameState): Round {
  return state.rounds[state.rounds.length - 1];
}
