import { CardSuit } from "../../types";
import { mockCard } from "../../types/__mocks__";
import { compareCards } from "../compareCards";

describe("compareCards", () => {
  it("sorts the right bower before the left bower", () => {
    const trump = CardSuit.Diamonds;
    const rightBower = mockCard({ suit: CardSuit.Diamonds, value: "J" });
    const leftBower = mockCard({ suit: CardSuit.Hearts, value: "J" });
    const result = compareCards(rightBower, leftBower, trump);
    expect(result).toBeLessThan(0);
  });

  it("sorts the left bower after the right bower", () => {
    const trump = CardSuit.Diamonds;
    const rightBower = mockCard({ suit: CardSuit.Diamonds, value: "J" });
    const leftBower = mockCard({ suit: CardSuit.Hearts, value: "J" });
    const result = compareCards(leftBower, rightBower, trump);
    expect(result).toBeGreaterThan(0);
  });

  it("sorts non-trump cards in their natural ordering", () => {
    const trump = CardSuit.Clubs;
    const c1 = mockCard({ suit: CardSuit.Hearts, value: "K" });
    const c2 = mockCard({ suit: CardSuit.Hearts, value: "J" });
    const result = compareCards(c1, c2, trump);
    expect(result).toBeLessThan(0);
  });
});
