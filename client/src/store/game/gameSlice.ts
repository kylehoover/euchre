import { createSlice } from "@reduxjs/toolkit";
import { GameState } from "./types";
import { createDeck } from "../../gameHelpers";
import { startGame } from "./reducers";

const initialState: GameState = {
  deck: createDeck(),
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame,
  },
});

export const { actions: gameActions, reducer: gameReducer } = gameSlice;
