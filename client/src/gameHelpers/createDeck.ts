import { Card, CardSuit, CardValue } from "../types";

const euchreValues: CardValue[] = [9, 10, "J", "Q", "K", "A"];

export function createDeck(): Card[] {
  const deck: Card[] = [];

  Object.values(CardSuit).forEach((suit) => {
    euchreValues.forEach((value) => {
      deck.push({ suit, value });
    });
  });

  return deck;
}
