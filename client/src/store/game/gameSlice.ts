import { createSlice } from "@reduxjs/toolkit";
import { GameState, Step } from "./types";
import { startGame } from "./reducers";
import { randomInt } from "../../helpers";

const initialState: GameState = {
  activePlayerIndex: randomInt(1, 4),
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
