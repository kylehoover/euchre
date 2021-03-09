import { Card } from "../types";
import { compareCards } from "./compareCards";

export function sortCards(cards: Card[]): Card[] {
  return [...cards].sort(compareCards);
}
