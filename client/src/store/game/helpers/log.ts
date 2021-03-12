import { GameState } from "../types";

export function log(state: GameState, entry: string): void {
  state.log.push(entry);
}
