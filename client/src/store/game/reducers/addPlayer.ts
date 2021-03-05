import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { createPlayer } from "../helpers";

interface Payload {
  isCurrentUser: boolean;
  name: string;
  playerId: string;
  teamIndex: number;
}

export const addPlayer: CaseReducer<GameState, PayloadAction<Payload>> = (
  state,
  action,
) => {
  const { isCurrentUser, name, playerId, teamIndex } = action.payload;
  state.players[playerId] = createPlayer(
    playerId,
    teamIndex,
    name,
    isCurrentUser,
  );
  state.teams[teamIndex].playerIds.push(playerId);

  if (isCurrentUser) {
    state.currentUserId = playerId;
  }
};
