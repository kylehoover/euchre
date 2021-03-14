import { useCallback } from "react";
import { delay } from "../../helpers";
import { getCurrentRound } from "../../gameHelpers";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";

export function useCallTrump() {
  const dispatch = useAppDispatch();
  const dealerPassed = useAppSelector(
    (state) => getCurrentRound(state.game).dealerPassed,
  );

  return useCallback(async () => {
    await delay(500);

    if (!dealerPassed) {
      // flesh out logic
      dispatch(gameActions.passCallingTrump());
    } else {
      // getTrumpToCall()
      dispatch(gameActions.passCallingTrump());
    }
  }, [dispatch, dealerPassed]);
}
