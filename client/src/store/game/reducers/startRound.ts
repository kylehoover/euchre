import { GameState } from "../types";
import { createDeck, deal } from "../../../gameHelpers";
import { shuffle } from "../../../helpers";
import { GameStep } from "../../../types";

export function startRound(state: GameState): void {
  const deck = shuffle(createDeck());
  const { hands, remaining } = deal(deck);

  state.rounds.push({
    callerId: "",
    dealerId: state.playerOrder[state.dealerIndex],
    dealerPassed: false,
    isMisdeal: false,
    tricks: [],
    trumpCardFromDeck: remaining[0], // fix this
  });

  state.step = GameStep.StartingRound;
}
