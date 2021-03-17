import { CardSuit } from "../../types";
import { mockCardPlayed, mockTrick } from "../../types/__mocks__";
import { getWinningPlayerId } from "../getWinningPlayerId";

describe("getWinningPlayerId", () => {
  it("picks the player with the right bower", () => {
    const trick = mockTrick({
      cards: [
        mockCardPlayed({ playerId: "1", suit: CardSuit.Spades, value: "J" }),
        mockCardPlayed({ playerId: "2", suit: CardSuit.Clubs, value: "J" }),
        mockCardPlayed({ playerId: "3", suit: CardSuit.Diamonds, value: 9 }),
        mockCardPlayed({ playerId: "4", suit: CardSuit.Clubs, value: "J" }),
      ],
    });
    const trump = CardSuit.Clubs;
    const result = getWinningPlayerId(trick, trump);
    expect(result).toBe("2");
  });
});
