import { Player } from "../../../types";

export function createPlayer(
  id: string,
  teamIndex: number,
  name: string,
  isCurrentUser: boolean = false,
  isBot: boolean = false,
): Player {
  return {
    id,
    hand: [],
    isBot,
    isCurrentUser,
    name,
    teamIndex,
  };
}
