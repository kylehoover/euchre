import { Card, CardSuit, CardValue } from "../types";
import { isLeftBower } from "./isLeftBower";

const cardValueSortOrder: { [Value in CardValue]: number } = {
  J: 0,
  A: 1,
  K: 2,
  Q: 3,
  10: 4,
  9: 5,
};

export function compareTrump(
  card1: Card,
  card2: Card,
  trump: CardSuit,
): number {
  const comparison =
    cardValueSortOrder[card1.value] - cardValueSortOrder[card2.value];

  if (comparison === 0) {
    // both cards are a Jack
    return isLeftBower(card1, trump) ? 1 : -1;
  }

  return comparison;
}
