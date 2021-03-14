import { useCallback } from "react";
import {
  getActivePlayer,
  getCurrentRound,
  pickCardToDiscard,
} from "../../gameHelpers";
import { delay } from "../../helpers";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";

export function useDiscard() {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);
  const { hand } = getActivePlayer(game);
  const { trumpCardFromDeck } = getCurrentRound(game);

  return useCallback(async () => {
    await delay(1000);
    dispatch(gameActions.discard(pickCardToDiscard(hand, trumpCardFromDeck!)));
  }, [hand, dispatch, trumpCardFromDeck]);
}
