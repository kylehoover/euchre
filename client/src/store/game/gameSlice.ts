import { createSlice } from "@reduxjs/toolkit";
import { GameState, Step } from "./types";
import { startGame } from "./reducers";

const initialState: GameState = {
  activePlayerIndex: 0,
  dealerIndex: 0,
  playerOrder: [],
  players: {},
  rounds: [],
  step: Step.WaitingForPlayers,
  teams: {},
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame,
  },
});

export const { actions: gameActions, reducer: gameReducer } = gameSlice;
