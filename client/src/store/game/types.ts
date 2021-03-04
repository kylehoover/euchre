import { GameStep, Player, Round, Team } from "../../types";

export interface GameState {
  activePlayerIndex: number;
  currentUserId: string;
  currentUserIndex: number;
  dealerIndex: number;
  playerOrder: string[];
  players: {
    [id: string]: Player;
  };
  rounds: Round[];
  step: GameStep;
  teams: [Team, Team];
}
