import { CardSuit, Trick } from "../types";
import { compareCards } from "./compareCards";
import { isTrump } from "./isTrump";

export function getWinningPlayerId(trick: Trick, trump: CardSuit): string {
  const leadCard = trick.cards[0];
  let winningCard = leadCard;

  trick.cards.forEach((card) => {
    if (
      (winningCard.suit === card.suit &&
        compareCards(winningCard, card, trump) > 0) ||
      (!isTrump(winningCard, trump) && isTrump(card, trump))
    ) {
      winningCard = card;
    }
  });

  return winningCard.playerId;
}
