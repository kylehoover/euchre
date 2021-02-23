import { GameState } from "../types";
import { createDeck, deal } from "../../../gameHelpers";
import { shuffle } from "../../../helpers";

export function startRound(state: GameState): void {
  const deck = shuffle(createDeck());
  const result = deal(deck);
  console.log(result);
}
