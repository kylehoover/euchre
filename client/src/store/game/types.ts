import { Player, Round, Team } from "../../types";

export enum Step {
  WaitingForPlayers = "WaitingForPlayers",
  CallingTrump = "CallingTrump",
}

export interface GameState {
  activePlayerIndex: number;
  currentUserIndex: number;
  dealerIndex: number;
  playerOrder: string[];
  players: {
    [id: string]: Player;
  };
  rounds: Round[];
  step: Step;
  teams: [Team, Team];
}
