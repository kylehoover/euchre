import { Card, CardIndexed, CardSuit } from "../types";
import { isSameSuit } from "./isSameSuit";

export function getPlayableCards(
  cardsOnTable: Card[],
  hand: Card[],
  trump?: CardSuit,
): [CardIndexed[], boolean[]] {
  let playableCards: CardIndexed[] = [];
  let playableIndices: boolean[] = [];
  const leadCard = cardsOnTable[0];

  const mustFollowSuit =
    leadCard && hand.some((card) => isSameSuit(card, leadCard, trump));

  playableIndices = hand.map((card) =>
    mustFollowSuit ? isSameSuit(card, leadCard, trump) : true,
  );

  playableCards = hand
    .map((card, index) => ({ ...card, index }))
    .filter((_, index) => playableIndices[index]);

  return [playableCards, playableIndices];
}
