import { GameState } from "../store/game/types";
import { Player } from "../types";

export function getActivePlayer(state: GameState): Player {
  return state.players[state.playerOrder[state.activePlayerIndex]];
}
