import { Player } from "../../../types";

export function createPlayer(
  id: string,
  teamIndex: number,
  isCurrentUser: boolean = false,
  isBot: boolean = false,
): Player {
  return {
    id,
    hand: [],
    isBot,
    isCurrentUser,
    teamIndex,
  };
}
