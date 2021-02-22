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
