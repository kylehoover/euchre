import { useEffect, useState } from "react";
import { useTransition } from "react-spring";
import { PlayingCard } from "./PlayingCard";
import { Card, GameStep } from "../../types";
import { isSameCard } from "../../gameHelpers";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import "./Hand.scss";

function getKey({ suit, value }: Card): string {
  return `${value}-${suit}`;
}

export function Hand() {
  const dispatch = useAppDispatch();
  const activePlayerIndex = useAppSelector(
    (state) => state.game.activePlayerIndex,
  );
  const hand = useAppSelector(
    (state) => state.game.players[state.game.currentUserId]?.hand ?? [],
  );
  const step = useAppSelector((state) => state.game.step);
  const trumpCard = useAppSelector(
    (state) =>
      state.game.rounds[state.game.rounds.length - 1].trumpCardFromDeck!,
  );

  const [isDiscarding, setIsDiscarding] = useState(false);

  const transitions = useTransition(hand, getKey, {
    from: {
      marginLeft: hand.length === 6 ? 0 : 8,
      marginRight: hand.length === 6 ? 0 : 8,
      transform: "translateY(256px)",
      width: hand.length === 6 ? 0 : 160,
    },
    enter: {
      marginLeft: 8,
      marginRight: 8,
      transform: "translateY(32px)",
      width: 160,
    },
    update: (card) => {
      const moveUp = isDiscarding && !isSameCard(card, trumpCard);
      return { transform: moveUp ? "translateY(8px)" : "translateY(32px)" };
    },
    leave: {
      marginLeft: 0,
      marginRight: 0,
      transform: "translateY(256px)",
      width: 0,
    },
    trail: step === GameStep.CallingTrump ? 100 : 0,
  });

  useEffect(() => {
    if (activePlayerIndex === 0 && step === GameStep.DealerDiscarding) {
      setTimeout(() => setIsDiscarding(true), 750);
    } else if (isDiscarding) {
      setTimeout(() => setIsDiscarding(false), 750);
    }
  }, [activePlayerIndex, isDiscarding, step]);

  return (
    <div className="Hand">
      {transitions.map(({ item, key, props }, index) => {
        const actionable = isDiscarding && !isSameCard(item, trumpCard);
        return (
          <PlayingCard
            card={item}
            actionable={actionable}
            style={props}
            onClick={() => {
              if (step === GameStep.DealerDiscarding) {
                dispatch(gameActions.discard(index));
              }
            }}
            key={key}
          />
        );
      })}
    </div>
  );
}
