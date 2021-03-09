import { Card } from "../types";
import { compareCards } from "./compareCards";

export function pickCardToDiscard(cards: Card[], trumpCard: Card): number {
  const availableCards = cards
    .map((card, index) => ({ ...card, index }))
    .filter((card) => compareCards(card, trumpCard) !== 0);

  return availableCards[0].index;
}
