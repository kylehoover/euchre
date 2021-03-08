import { Player } from "../../../types";
import { RootState } from "../../store";

export function activePlayerSelector(state: RootState): Player {
  return state.game.players[
    state.game.playerOrder[state.game.activePlayerIndex]
  ];
}
