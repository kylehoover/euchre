import { Card, CardSuit } from "../types";
import { isLeftBower } from "./isLeftBower";

export function isTrump(card: Card, trump: CardSuit): boolean {
  return card.suit === trump || isLeftBower(card, trump);
}
