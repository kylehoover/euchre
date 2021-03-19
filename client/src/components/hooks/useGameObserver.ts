import { useCallback, useEffect } from "react";
import { getCurrentTrick } from "../../gameHelpers";
import { delay } from "../../helpers";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import { GameStep } from "../../types";

export function useGameObserver() {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);
  const { step } = game;
  const trick = getCurrentTrick(game);

  const endTrick = useCallback(async () => {
    await delay(2000);
    dispatch(gameActions.endTrick());
  }, [dispatch]);

  useEffect(() => {
    if (step === GameStep.PlayingCards && trick.cards.length === 4) {
      endTrick();
    }
  }, [endTrick, step, trick.cards.length]);
}
