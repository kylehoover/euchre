import { useCallback } from "react";
import {
  getActivePlayer,
  getCurrentRound,
  getCurrentTrick,
  pickCardToPlay,
} from "../../gameHelpers";
import { delay } from "../../helpers";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";

export function usePlayCard() {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);
  const player = getActivePlayer(game);
  const round = getCurrentRound(game);
  const trick = getCurrentTrick(game);
  const indexToPlay = pickCardToPlay(trick.cards, player.hand, round.trump!);
  const hasPlayedCard = trick.cards.some((card) => card.playerId === player.id);

  return useCallback(async () => {
    if (!hasPlayedCard && indexToPlay !== -1) {
      await delay(1000);
      dispatch(gameActions.playCard(indexToPlay));
    }
  }, [dispatch, game.step, hasPlayedCard, indexToPlay]);
}
