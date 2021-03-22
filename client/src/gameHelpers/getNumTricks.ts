import { GameState } from "../store/game/types";
import { getCurrentRound } from "./getCurrentRound";

export function getNumTricks(game: GameState, teamIndex: number): number {
  return getCurrentRound(game).tricks.filter(
    ({ winningTeamIndex }) => winningTeamIndex === teamIndex,
  ).length;
}
