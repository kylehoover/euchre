import { createSlice } from "@reduxjs/toolkit";
import { GameStep } from "../../types";
import { GameState } from "./types";
import {
  addPlayer,
  callTrump,
  dealCards,
  discard,
  endRound,
  endTrick,
  passCallingTrump,
  pickUpTrump,
  playCard,
  resumePlay,
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
  teams: [
    { playerIds: [], points: 0 },
    { playerIds: [], points: 0 },
  ],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addPlayer,
    callTrump,
    dealCards,
    discard,
    endRound,
    endTrick,
    passCallingTrump,
    pickUpTrump,
    playCard,
    resumePlay,
    startGame,
  },
});

export const { actions: gameActions, reducer: gameReducer } = gameSlice;
