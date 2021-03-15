import { Card, CardSuit } from "../types";

/**
 * Check if card is same color as trump and is not trump
 */
export function isSameColor(card: Card, trump: CardSuit): boolean {
  switch (trump) {
    case CardSuit.Clubs:
      return card.suit === CardSuit.Spades;
    case CardSuit.Diamonds:
      return card.suit === CardSuit.Hearts;
    case CardSuit.Hearts:
      return card.suit === CardSuit.Diamonds;
    case CardSuit.Spades:
      return card.suit === CardSuit.Clubs;
  }
}
