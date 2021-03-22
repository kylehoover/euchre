import { Card, CardSuit } from "../types";
import { getSuit } from "./getSuit";

export function isSameSuit(
  card1: Card,
  card2: Card,
  trump?: CardSuit,
): boolean {
  return getSuit(card1, trump) === getSuit(card2, trump);
}
