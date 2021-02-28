import { GameState, Step } from "../types";
import { createDeck, deal } from "../../../gameHelpers";
import { shuffle } from "../../../helpers";
import { nextIndex } from "../helpers";

export function startRound(state: GameState): void {
  const deck = shuffle(createDeck());
  const { hands, remaining } = deal(deck);
  let currentIndex = state.activePlayerIndex;

  hands.forEach((hand) => {
    const playerId = state.playerOrder[currentIndex];
    state.players[playerId].hand = hand;
    currentIndex = nextIndex(currentIndex);
  });

  state.rounds.push({
    callerId: "",
    dealerId: state.playerOrder[state.dealerIndex],
    dealerPassed: false,
    isMisdeal: false,
    tricks: [],
    trumpCardFromDeck: remaining[0],
  });

  state.step = Step.CallingTrump;
}
