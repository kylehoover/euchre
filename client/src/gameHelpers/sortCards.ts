import { Card, CardValue } from "../types";

const cardValueSortOrder: { [Value in CardValue]: number } = {
  A: 0,
  K: 1,
  Q: 2,
  J: 3,
  10: 4,
  9: 5,
  8: 6,
  7: 7,
  6: 8,
  5: 9,
  4: 10,
  3: 11,
  2: 12,
};

export function sortCards(cards: Card[]): Card[] {
  const sortedCards = [...cards];

  sortedCards.sort((card1, card2) => {
    const comparison = card1.suit.localeCompare(card2.suit);

    if (comparison !== 0) {
      return comparison;
    }

    return cardValueSortOrder[card1.value] - cardValueSortOrder[card2.value];
  });

  return sortedCards;
}
