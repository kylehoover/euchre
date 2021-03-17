import { Card } from "../types";

export function isSameCard(card1: Card, card2: Card): boolean {
  return card1.suit === card2.suit && card1.value === card2.value;
}
