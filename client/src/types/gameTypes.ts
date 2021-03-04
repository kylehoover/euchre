export enum CardSuit {
  Clubs = "clubs",
  Diamonds = "diamonds",
  Hearts = "hearts",
  Spades = "spades",
}

export type CardValue =
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
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
}

export interface Round {
  callerId: string;
  dealerId: string;
  dealerPassed: boolean;
  isMisdeal: boolean;
  tricks: Trick[];
  trump?: CardSuit;
  trumpCardFromDeck: Card;
}

export interface Player {
  id: string;
  hand: Card[];
  isBot: boolean;
  isCurrentUser: boolean;
  teamIndex: number;
}

export interface Team {
  playerIds: string[];
}

export enum GameStep {
  WaitingForPlayers = "WaitingForPlayers",
  StartingRound = "StartingRound",
  CallingTrump = "CallingTrump",
}
