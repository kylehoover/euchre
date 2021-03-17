import { Card, CardSuit } from "../types";
import { compareCards } from "./compareCards";

export function sortCards(cards: Card[], trump?: CardSuit): Card[] {
  return [...cards].sort((card1, card2) => compareCards(card1, card2, trump));
}
