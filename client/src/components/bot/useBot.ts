import { useEffect } from "react";
import { GameStep } from "../../types";
import { useAppSelector } from "../../store";
import { getActivePlayer } from "../../gameHelpers";
import { useCallTrump } from "./useCallTrump";
import { useDiscard } from "./useDiscard";
import { usePlayCard } from "./usePlayCard";

export function useBot() {
  const game = useAppSelector((state) => state.game);
  const activePlayer = getActivePlayer(game);
  const { step } = game;

  const callTrump = useCallTrump();
  const discard = useDiscard();
  const playCard = usePlayCard();

  useEffect(() => {
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
      case GameStep.PlayingCards:
        playCard();
        break;
    }
  }, [activePlayer.id, activePlayer.isBot, callTrump, discard, playCard, step]);
}
