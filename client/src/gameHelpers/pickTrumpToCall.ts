import { randomInt } from "../helpers";
import { Card, CardSuit } from "../types";

export function pickTrumpToCall(cards: Card[], trumpCard: Card): CardSuit {
  const suits = Object.values(CardSuit).filter(
    (suit) => suit !== trumpCard.suit,
  );

  return suits[randomInt(0, 2)];
}
