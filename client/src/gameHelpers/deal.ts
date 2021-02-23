import { Card } from "../types";

interface Result {
  hands: Card[][];
  remaining: Card[];
}

const numToDeal = [3, 2, 3, 2, 2, 3, 2, 3];

export function deal(deck: Card[]): Result {
  const hands: Card[][] = [[], [], [], []];
  let startIndex = 0;

  numToDeal.forEach((numCards, index) => {
    const endIndex = startIndex + numCards;
    hands[index % 4].push(...deck.slice(startIndex, endIndex));
    startIndex = endIndex;
  });

  const remaining = deck.slice(startIndex);

  return { hands, remaining };
}
