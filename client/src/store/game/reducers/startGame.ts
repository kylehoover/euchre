import { CaseReducer } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { createPlayer, nextIndex } from "../helpers";
import { randomInt } from "../../../helpers";
import { startRound } from "./startRound";

export const startGame: CaseReducer<GameState> = (state) => {
  let botIdNum = 1;

  state.teams.forEach((team, index) => {
    const numBots = 2 - team.playerIds.length;

    for (let i = 0; i < numBots; i++) {
      const botId = `bot-${botIdNum++}`;
      state.players[botId] = createPlayer(botId, index, false, true);
      state.teams[index].playerIds.push(botId);
    }
  });

  state.playerOrder = [
    state.teams[0].playerIds[0],
    state.teams[1].playerIds[0],
    state.teams[0].playerIds[1],
    state.teams[1].playerIds[1],
  ];

  state.playerOrder.forEach((playerId, index) => {
    if (state.players[playerId].isCurrentUser) {
      state.currentUserIndex = index;
    }
  });

  const dealerIndex = randomInt(0, 3);
  state.dealerIndex = dealerIndex;
  state.activePlayerIndex = nextIndex(dealerIndex);

  startRound(state);
};