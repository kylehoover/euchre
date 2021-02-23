import { Player, Round, Team } from "../../types";

export enum Step {
  WaitingForPlayers = "WaitingForPlayers",
  CallingTrump = "CallingTrump",
}

export interface GameState {
  activePlayerIndex: number;
  players: {
    [id: string]: Player;
  };
  rounds: Round[];
  step: Step;
  teams: {
    [id: string]: Team;
  };
}
