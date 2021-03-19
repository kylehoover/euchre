import { useCallback } from "react";
import { getActivePlayer, getCurrentTrick } from "../../gameHelpers";
import { delay, randomInt } from "../../helpers";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";

export function usePlayCard() {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);
  const player = getActivePlayer(game);
  const trick = getCurrentTrick(game);
  const hasPlayedCard = trick.cards.some((card) => card.playerId === player.id);
  const endIndex = player.hand.length - 1;

  return useCallback(async () => {
    if (!hasPlayedCard) {
      await delay(1000);
      const index = randomInt(0, endIndex);
      dispatch(gameActions.playCard(index));
    }
  }, [endIndex, dispatch, game.step, hasPlayedCard]);
}
