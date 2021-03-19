import { CardSuit, CardValue, Trick } from "../../types";
import { mockCardPlayed, mockTrick } from "../../types/__mocks__";
import { getWinningPlayerId } from "../getWinningPlayerId";

type CardShorthand = [CardValue, CardSuit];

function createTrick(cards: CardShorthand[]): Trick {
  return mockTrick({
    cards: cards.map(([value, suit], index) => ({
      playerId: index.toString(),
      suit,
      value,
    })),
  });
}

describe("getWinningPlayerId", () => {
  test("right bower beats left bower", () => {
    const trump = CardSuit.Clubs;
    const trick = createTrick([
      ["J", CardSuit.Spades],
      ["J", CardSuit.Clubs],
      [10, CardSuit.Diamonds],
      ["A", CardSuit.Hearts],
    ]);
    const result = getWinningPlayerId(trick, trump);
    expect(result).toBe("1");
  });

  test("left bower beats lower trump", () => {
    const trump = CardSuit.Spades;
    const trick = createTrick([
      ["K", CardSuit.Spades],
      ["A", CardSuit.Spades],
      ["Q", CardSuit.Spades],
      ["J", CardSuit.Clubs],
    ]);
    const result = getWinningPlayerId(trick, trump);
    expect(result).toBe("3");
  });

  test("trump beats off suit", () => {
    const trump = CardSuit.Hearts;
    const trick = createTrick([
      ["A", CardSuit.Spades],
      ["K", CardSuit.Clubs],
      [9, CardSuit.Hearts],
      ["Q", CardSuit.Spades],
    ]);
    const result = getWinningPlayerId(trick, trump);
    expect(result).toBe("2");
  });

  test("lead card wins when all others are off suit", () => {
    const trump = CardSuit.Hearts;
    const trick = createTrick([
      [9, CardSuit.Spades],
      ["K", CardSuit.Clubs],
      ["A", CardSuit.Diamonds],
      ["Q", CardSuit.Clubs],
    ]);
    const result = getWinningPlayerId(trick, trump);
    expect(result).toBe("0");
  });

  test("highest suit that follows lead suit wins", () => {
    const trump = CardSuit.Clubs;
    const trick = createTrick([
      ["Q", CardSuit.Hearts],
      ["K", CardSuit.Spades],
      ["A", CardSuit.Diamonds],
      ["A", CardSuit.Hearts],
    ]);
    const result = getWinningPlayerId(trick, trump);
    expect(result).toBe("3");
  });
});
