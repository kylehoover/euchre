import { Card, CardSuit } from "../types";
import { getLeftBowerSuit } from "./getLeftBowerSuit";

export function isLeftBower(card: Card, trump: CardSuit): boolean {
  return card.value === "J" && getLeftBowerSuit(card) === trump;
}
