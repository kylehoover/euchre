import { Card, CardSuit } from "../types";

export function getLeftBowerSuit(card: Card): CardSuit {
  switch (card.suit) {
    case CardSuit.Clubs:
      return CardSuit.Spades;
    case CardSuit.Diamonds:
      return CardSuit.Hearts;
    case CardSuit.Hearts:
      return CardSuit.Diamonds;
    case CardSuit.Spades:
      return CardSuit.Clubs;
  }
}
