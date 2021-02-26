import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { Player, Team } from "../../../types";
import { randomInt } from "../../../helpers";
import { startRound } from "./startRound";
import { deal } from "../../../gameHelpers";
import { nextIndex } from "../helpers";

function createPlayer(
  id: string,
  teamId: string,
  isBot: boolean = false
): Player {
  return {
    id,
    hand: [],
    isBot,
    teamId,
  };
}

export const startGame: CaseReducer<GameState, PayloadAction<Team[]>> = (
  state,
  action
) => {
  let botIdNum = 1;

  action.payload.forEach((team) => {
    state.teams[team.id] = team;

    team.playerIds.forEach((id) => {
      state.players[id] = createPlayer(id, team.id);
    });

    const numBots = 2 - team.playerIds.length;

    for (let i = 0; i < numBots; i++) {
      const botId = `bot-${botIdNum++}`;
      state.teams[team.id].playerIds.push(botId);
      state.players[botId] = createPlayer(botId, team.id, true);
    }
  });

  state.teams.one;

  const dealerIndex = randomInt(1, 4);
  state.activePlayerIndex = nextIndex(dealerIndex);
  state.dealerIndex = dealerIndex;

  startRound(state);
};
