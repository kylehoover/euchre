import { createSlice } from "@reduxjs/toolkit";
import { GameStep } from "../../types";
import { GameState } from "./types";
import {
  addPlayer,
  dealCards,
  discard,
  passCallingTrump,
  pickUpTrump,
  startGame,
} from "./reducers";

const initialState: GameState = {
  activePlayerIndex: 0,
  currentUserId: "",
  currentUserIndex: 0,
  dealerIndex: 0,
  log: [`Step: ${GameStep.WaitingForPlayers}`],
  playerOrder: [],
  players: {},
  rounds: [],
  step: GameStep.WaitingForPlayers,
  teams: [{ playerIds: [] }, { playerIds: [] }],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addPlayer,
    dealCards,
    discard,
    passCallingTrump,
    pickUpTrump,
    startGame,
  },
});

export const { actions: gameActions, reducer: gameReducer } = gameSlice;
