import { CardSuit } from "../../types";
import { mockCard } from "../../types/__mocks__";
import { compareCards } from "../compareCards";

describe("compareCards", () => {
  it("sorts the right bower before the left bower", () => {
    const rightBower = mockCard({ suit: CardSuit.Diamonds, value: "J" });
    const leftBower = mockCard({ suit: CardSuit.Hearts, value: "J" });
    const trump = CardSuit.Diamonds;
    const result = compareCards(rightBower, leftBower, trump);
    expect(result).toBeLessThan(0);
  });

  it("sorts the left bower after the right bower", () => {
    const rightBower = mockCard({ suit: CardSuit.Diamonds, value: "J" });
    const leftBower = mockCard({ suit: CardSuit.Hearts, value: "J" });
    const trump = CardSuit.Diamonds;
    const result = compareCards(leftBower, rightBower, trump);
    expect(result).toBeGreaterThan(0);
  });
});
