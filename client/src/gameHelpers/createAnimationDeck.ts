import { prevIndex } from "./prevIndex";

const numToDeal = [3, 2, 3, 2, 2, 3, 2, 3];

export function createAnimationDeck(dealerIndex: number): number[] {
  const deck: number[] = [];
  let currentIndex = dealerIndex;

  numToDeal.forEach((numCards) => {
    for (let i = 0; i < numCards; i++) {
      deck.push(currentIndex);
    }

    currentIndex = prevIndex(currentIndex);
  });

  return deck;
}
