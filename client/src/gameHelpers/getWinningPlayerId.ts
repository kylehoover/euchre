import { CardSuit, Trick } from "../types";
import { compareCards } from "./compareCards";
import { isTrump } from "./isTrump";

export function getWinningPlayerId(trick: Trick, trump: CardSuit): string {
  const leadCard = trick.cards[0];
  let winningCard = leadCard;

  trick.cards.forEach((card) => {
    if (isTrump(winningCard, trump)) {
      if (isTrump(card, trump) && compareCards(winningCard, card, trump) > 0) {
        winningCard = card;
      }
    } else if (isTrump(card, trump) || compareCards(winningCard, card) > 0) {
      winningCard = card;
    }
  });

  return winningCard.playerId;
}
