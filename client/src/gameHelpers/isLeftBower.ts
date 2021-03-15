import { Card, CardSuit } from "../types";
import { isSameColor } from "./isSameColor";

export function isLeftBower(card: Card, trump: CardSuit): boolean {
  return card.value === "J" && isSameColor(card, trump);
}
