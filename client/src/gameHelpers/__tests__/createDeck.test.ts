import { Card, CardSuit } from "../../types";
import { createDeck } from "../createDeck";

describe("createDeck", () => {
  it("creates the correct deck of values for euchre", () => {
    const expected: Card[] = [
      { suit: CardSuit.Clubs, value: 9 },
      { suit: CardSuit.Clubs, value: 10 },
      { suit: CardSuit.Clubs, value: "J" },
      { suit: CardSuit.Clubs, value: "Q" },
      { suit: CardSuit.Clubs, value: "K" },
      { suit: CardSuit.Clubs, value: "A" },
      { suit: CardSuit.Diamonds, value: 9 },
      { suit: CardSuit.Diamonds, value: 10 },
      { suit: CardSuit.Diamonds, value: "J" },
      { suit: CardSuit.Diamonds, value: "Q" },
      { suit: CardSuit.Diamonds, value: "K" },
      { suit: CardSuit.Diamonds, value: "A" },
      { suit: CardSuit.Hearts, value: 9 },
      { suit: CardSuit.Hearts, value: 10 },
      { suit: CardSuit.Hearts, value: "J" },
      { suit: CardSuit.Hearts, value: "Q" },
      { suit: CardSuit.Hearts, value: "K" },
      { suit: CardSuit.Hearts, value: "A" },
      { suit: CardSuit.Spades, value: 9 },
      { suit: CardSuit.Spades, value: 10 },
      { suit: CardSuit.Spades, value: "J" },
      { suit: CardSuit.Spades, value: "Q" },
      { suit: CardSuit.Spades, value: "K" },
      { suit: CardSuit.Spades, value: "A" },
    ];
    const result = createDeck();
    expect(result).toStrictEqual(expected);
  });
});
