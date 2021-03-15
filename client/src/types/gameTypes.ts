export enum CardSuit {
  Clubs = "clubs",
  Diamonds = "diamonds",
  Hearts = "hearts",
  Spades = "spades",
}

export type CardValue =
  | 9
  | 10
  | "J" // Jack
  | "Q" // Queen
  | "K" // King
  | "A"; // Ace

export interface Card {
  suit: CardSuit;
  value: CardValue;
}

export interface CardPlayed extends Card {
  playerId: string;
}

export interface Trick {
  cards: CardPlayed[];
  winningPlayerId: string;
  winningTeamIndex: number;
}

export interface Round {
  callerId: string;
  dealerId: string;
  dealerPassed: boolean;
  isMisdeal: boolean;
  tricks: Trick[];
  trump?: CardSuit;
  trumpCardFromDeck?: Card;
}

export interface Player {
  id: string;
  hand: Card[];
  isBot: boolean;
  isCurrentUser: boolean;
  name: string;
  teamIndex: number;
}

export interface Team {
  playerIds: string[];
  points: number;
}

export enum GameStep {
  WaitingForPlayers = "WaitingForPlayers",
  StartingRound = "StartingRound",
  CallingTrump = "CallingTrump",
  DealerDiscarding = "DealerDiscarding",
  PlayingCards = "PlayingCards",
  EndingTrick = "EndingTrick",
}
