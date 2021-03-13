import { Card } from "../types";
import { compareCards } from "./compareCards";

export function isSameCard(card1: Card, card2: Card): boolean {
  return compareCards(card1, card2) === 0;
}
