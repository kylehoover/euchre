import { Card, CardSuit, CardValue } from "../types";
import { getLeftBowerSuit } from "./getLeftBowerSuit";
import { isLeftBower } from "./isLeftBower";

const sortOrder: { [Value in CardValue]: number } = {
  A: 0,
  K: 1,
  Q: 2,
  J: 3,
  10: 4,
  9: 5,
};

const trumpSortOrder: { [Value in CardValue]: number } = {
  J: 0,
  A: 1,
  K: 2,
  Q: 3,
  10: 4,
  9: 5,
};

export function compareCards(card1: Card, card2: Card, trump?: CardSuit) {
  const suit1 =
    trump && isLeftBower(card1, trump) ? getLeftBowerSuit(card1) : card1.suit;
  const suit2 =
    trump && isLeftBower(card2, trump) ? getLeftBowerSuit(card2) : card2.suit;

  let comparison = suit1.localeCompare(suit2);

  if (comparison !== 0) {
    return comparison;
  }

  comparison = trump
    ? trumpSortOrder[card1.value] - trumpSortOrder[card2.value]
    : sortOrder[card1.value] - sortOrder[card2.value];

  if (
    comparison === 0 &&
    trump &&
    card1.suit !== card2.suit &&
    card1.value === "J" &&
    card2.value === "J"
  ) {
    return isLeftBower(card1, trump) ? 1 : -1;
  }

  return comparison;
}
