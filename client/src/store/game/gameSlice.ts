import { createSlice } from "@reduxjs/toolkit";
import { GameState, Step } from "./types";
import { addPlayer, startGame } from "./reducers";

const initialState: GameState = {
  activePlayerIndex: 0,
  currentUserId: "",
  currentUserIndex: 0,
  dealerIndex: 0,
  playerOrder: [],
  players: {},
  rounds: [],
  step: Step.WaitingForPlayers,
  teams: [{ playerIds: [] }, { playerIds: [] }],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addPlayer,
    startGame,
  },
});

export const { actions: gameActions, reducer: gameReducer } = gameSlice;
