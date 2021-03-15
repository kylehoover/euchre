import { Card, CardSuit } from "../types";
import { compareCards } from "./compareCards";
import { compareTrump } from "./compareTrump";
import { isTrump } from "./isTrump";

export function sortCards(cards: Card[], trump?: CardSuit): Card[] {
  return [...cards].sort((card1, card2) => {
    if (trump && isTrump(card1, trump) && isTrump(card2, trump)) {
      return compareTrump(card1, card2, trump);
    }

    return compareCards(card1, card2);
  });
}
