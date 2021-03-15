import { Card, CardValue } from "../types";

const cardValueSortOrder: { [Value in CardValue]: number } = {
  A: 0,
  K: 1,
  Q: 2,
  J: 3,
  10: 4,
  9: 5,
};

export function compareCards(card1: Card, card2: Card) {
  const comparison = card1.suit.localeCompare(card2.suit);

  if (comparison !== 0) {
    return comparison;
  }

  return cardValueSortOrder[card1.value] - cardValueSortOrder[card2.value];
}
