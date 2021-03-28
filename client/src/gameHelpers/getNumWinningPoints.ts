import { GameState } from "../store/game/types";
import { getCurrentRound } from "./getCurrentRound";
import { getNumTricksWonForTeam } from "./getNumTricksWonForTeam";
import { getWinningTeamIndex } from "./getWinningTeamIndex";

export function getNumWinningPoints(game: GameState): number {
  const round = getCurrentRound(game);
  const callingTeamIndex = game.players[round.callerId].teamIndex;
  const winningTeamIndex = getWinningTeamIndex(game);
  const numTricks = game.teams.map((_, index) =>
    getNumTricksWonForTeam(round.tricks, index),
  );

  if (callingTeamIndex === winningTeamIndex) {
    return numTricks[winningTeamIndex] === 5 ? 2 : 1;
  } else {
    return 2;
  }

  // TODO: add logic for going alone
}
