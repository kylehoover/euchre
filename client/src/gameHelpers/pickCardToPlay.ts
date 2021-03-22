import { randomInt } from "../helpers";
import { Card, CardSuit } from "../types";
import { getPlayableCards } from "./getPlayableCards";

export function pickCardToPlay(
  cardsOnTable: Card[],
  hand: Card[],
  trump: CardSuit,
): number {
  const [playableCards] = getPlayableCards(cardsOnTable, hand, trump);

  if (playableCards.length === 0) {
    return -1;
  }

  const index = randomInt(0, playableCards.length - 1);
  return playableCards[index].index;
}
