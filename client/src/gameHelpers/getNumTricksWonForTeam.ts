import { Trick } from "../types";

export function getNumTricksWonForTeam(
  tricks: Trick[],
  teamIndex: number,
): number {
  return tricks.filter((trick) => trick.winningTeamIndex === teamIndex).length;
}
