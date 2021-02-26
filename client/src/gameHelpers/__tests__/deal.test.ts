import { CardSuit } from "../../types";
import { createDeck } from "../createDeck";
import { deal } from "../deal";

describe("deal", () => {
  it("returns the correct cards in each hand and the correct remaining cards", () => {
    const expectedHands = [
      [
        { suit: CardSuit.Clubs, value: 9 },
        { suit: CardSuit.Clubs, value: 10 },
        { suit: CardSuit.Clubs, value: "J" },
        { suit: CardSuit.Diamonds, value: "K" },
        { suit: CardSuit.Diamonds, value: "A" },
      ],
      [
        { suit: CardSuit.Clubs, value: "Q" },
        { suit: CardSuit.Clubs, value: "K" },
        { suit: CardSuit.Hearts, value: 9 },
        { suit: CardSuit.Hearts, value: 10 },
        { suit: CardSuit.Hearts, value: "J" },
      ],
      [
        { suit: CardSuit.Clubs, value: "A" },
        { suit: CardSuit.Diamonds, value: 9 },
        { suit: CardSuit.Diamonds, value: 10 },
        { suit: CardSuit.Hearts, value: "Q" },
        { suit: CardSuit.Hearts, value: "K" },
      ],
      [
        { suit: CardSuit.Diamonds, value: "J" },
        { suit: CardSuit.Diamonds, value: "Q" },
        { suit: CardSuit.Hearts, value: "A" },
        { suit: CardSuit.Spades, value: 9 },
        { suit: CardSuit.Spades, value: 10 },
      ],
    ];
    const expectedRemaining = [
      { suit: CardSuit.Spades, value: "J" },
      { suit: CardSuit.Spades, value: "Q" },
      { suit: CardSuit.Spades, value: "K" },
      { suit: CardSuit.Spades, value: "A" },
    ];
    const { hands, remaining } = deal(createDeck());
    expect(hands).toStrictEqual(expectedHands);
    expect(remaining).toEqual(expectedRemaining);
  });
});
