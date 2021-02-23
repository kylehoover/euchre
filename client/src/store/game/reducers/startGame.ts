import { CaseReducer } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { Player } from "../../../types";
import { startRound } from "./startRound";

function createPlayer(
  id: string,
  teamId: string,
  isBot: boolean = true
): Player {
  return {
    id,
    hand: [],
    isBot,
    teamId,
  };
}

// TODO: payload takes an array of players, if there are less than 4 then bots are added
export const startGame: CaseReducer<GameState> = (state) => {
  state.players = {
    "1": createPlayer("1", "1", false),
    "2": createPlayer("2", "1", true),
    "3": createPlayer("3", "2", true),
    "4": createPlayer("4", "2", true),
  };

  state.teams = {
    "1": { id: "1", playerIds: ["1", "2"] },
    "2": { id: "2", playerIds: ["3", "4"] },
  };

  startRound(state);
};
