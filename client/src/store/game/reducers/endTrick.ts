import { getCurrentRound, getWinningPlayerId } from "../../../gameHelpers";
import { GameStep } from "../../../types";
import { getIndex, log } from "../helpers";
import { GameState } from "../types";

export function endTrick(state: GameState): void {
  const round = getCurrentRound(state);
  const trick = round.tricks[round.tricks.length - 1];
  const winningPlayerId = getWinningPlayerId(trick, round.trump!);
  trick.winningPlayerId = winningPlayerId;
  trick.winningTeamIndex = state.players[winningPlayerId].teamIndex;
  state.step = GameStep.EndingTrick;

  const winningPlayerIndex = getIndex(state.playerOrder, winningPlayerId);
  log(state, `Winning player: ${winningPlayerIndex}`);
  log(state, `Winning team: ${trick.winningTeamIndex}`);
  log(state, `Step: ${state.step}`);
}
