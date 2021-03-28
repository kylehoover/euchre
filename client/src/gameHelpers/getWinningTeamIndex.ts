import { GameState } from "../store/game/types";
import { getCurrentRound } from "./getCurrentRound";
import { getNumTricksWonForTeam } from "./getNumTricksWonForTeam";

export function getWinningTeamIndex(game: GameState): number {
  const { tricks } = getCurrentRound(game);
  let winningIndex = 0;

  game.teams.forEach((_, index) => {
    if (getNumTricksWonForTeam(tricks, index) >= 3) {
      winningIndex = index;
    }
  });

  return winningIndex;
}
