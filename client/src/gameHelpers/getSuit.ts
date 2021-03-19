import { Card, CardSuit } from "../types";
import { getLeftBowerSuit } from "./getLeftBowerSuit";
import { isLeftBower } from "./isLeftBower";

export function getSuit(card: Card, trump?: CardSuit): CardSuit {
  return trump && isLeftBower(card, trump) ? getLeftBowerSuit(card) : card.suit;
}
