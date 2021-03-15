import { useCallback } from "react";
import { delay } from "../../helpers";
import { getActivePlayer, getCurrentRound } from "../../gameHelpers";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import { pickTrumpToCall } from "../../gameHelpers/pickTrumpToCall";

export function useCallTrump() {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);
  const player = getActivePlayer(game);
  const { activePlayerIndex, dealerIndex } = game;
  const { dealerPassed, trumpCardFromDeck } = getCurrentRound(game);

  return useCallback(async () => {
    await delay(500);

    if (!dealerPassed) {
      // TODO: flesh out logic
      dispatch(gameActions.passCallingTrump());
    } else {
      if (activePlayerIndex === dealerIndex) {
        await delay(500);

        dispatch(
          gameActions.callTrump(
            pickTrumpToCall(player.hand, trumpCardFromDeck!),
          ),
        );
      } else {
        dispatch(gameActions.passCallingTrump());
      }
    }
  }, [
    activePlayerIndex,
    dealerPassed,
    dealerIndex,
    dispatch,
    player.hand,
    trumpCardFromDeck,
  ]);
}
