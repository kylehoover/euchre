import { useCallback, useEffect } from "react";
import { GameStep, Player } from "../../types";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import { delay } from "../../helpers";
import {
  getActivePlayer,
  getCurrentRound,
  pickCardToDiscard,
} from "../../gameHelpers";

export function useBot() {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);
  const { step } = game;
  const activePlayer = getActivePlayer(game);
  const round = getCurrentRound(game);

  const callTrump = useCallback(async () => {
    await delay(500);

    if (!round.dealerPassed) {
      dispatch(gameActions.passCallingTrump());
    } else {
      // getTrumpToCall()
      dispatch(gameActions.passCallingTrump());
    }
  }, [dispatch, round.dealerPassed]);

  const discard = useCallback(async () => {
    await delay(1500);

    dispatch(
      gameActions.discard(
        pickCardToDiscard(activePlayer.hand, round.trumpCardFromDeck!),
      ),
    );
  }, [activePlayer.hand, dispatch, round.trumpCardFromDeck]);

  useEffect(() => {
    console.log("bot effect", step);
    if (!activePlayer.isBot) {
      return;
    }

    switch (step) {
      case GameStep.CallingTrump:
        callTrump();
        break;
      case GameStep.DealerDiscarding:
        discard();
        break;
    }
  }, [activePlayer.id, callTrump, discard, dispatch, step]);
}
