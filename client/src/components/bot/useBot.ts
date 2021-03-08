import { useEffect } from "react";
import { GameStep, Player } from "../../types";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import { getActivePlayer } from "../../gameHelpers";

export function useBot() {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);
  const { step } = game;
  const activePlayer = getActivePlayer(game);

  useEffect(() => {
    console.log("bot effect", step);
    if (!activePlayer.isBot) {
      return;
    }

    switch (step) {
      case GameStep.DealerDiscarding:
        dispatch(gameActions.discard(0));
    }
  }, [activePlayer.id, dispatch, step]);
}
