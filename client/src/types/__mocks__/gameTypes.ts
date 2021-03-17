import { Card, CardPlayed, CardSuit, Trick } from "../gameTypes";

export function mockCard(card?: Partial<Card>): Card {
  return {
    suit: card?.suit ?? CardSuit.Clubs,
    value: card?.value ?? 9,
  };
}

export function mockCardPlayed(card?: Partial<CardPlayed>): CardPlayed {
  return {
    playerId: card?.playerId ?? "",
    suit: card?.suit ?? CardSuit.Clubs,
    value: card?.value ?? 9,
  };
}

export function mockTrick(trick?: Partial<Trick>): Trick {
  return {
    cards: trick?.cards ?? [],
    winningPlayerId: trick?.winningPlayerId ?? "",
    winningTeamIndex: trick?.winningTeamIndex ?? -1,
  };
}
