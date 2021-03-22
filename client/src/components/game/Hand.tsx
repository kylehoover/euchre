import { useCallback, useEffect, useState } from "react";
import { useTransition } from "react-spring";
import { PlayingCard } from "./PlayingCard";
import { Card, CardIndexed, GameStep } from "../../types";
import {
  getCurrentRound,
  getCurrentTrick,
  getPlayableCards,
  isSameCard,
} from "../../gameHelpers";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import "./Hand.scss";

function getHand(cards: Card[]): CardIndexed[] {
  return cards.map((card, index) => ({ ...card, index }));
}

function getKey({ suit, value }: Card): string {
  return `${value}-${suit}`;
}

export function Hand() {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);
  const { activePlayerIndex, currentUserId, players, step } = game;
  const { trump, trumpCardFromDeck } = getCurrentRound(game);
  const hand = getHand(players[currentUserId].hand);
  const trick = getCurrentTrick(game);
  const [_, playableIndices] = getPlayableCards(trick.cards, hand, trump);

  const [isDiscarding, setIsDiscarding] = useState(false);

  const isActionable = (card: CardIndexed) =>
    (isDiscarding && !isSameCard(card, trumpCardFromDeck!)) ||
    (step === GameStep.PlayingCards &&
      activePlayerIndex === 0 &&
      playableIndices[card.index]);

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
      return {
        transform: isActionable(card) ? "translateY(8px)" : "translateY(32px)",
      };
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
        return (
          <PlayingCard
            card={item}
            actionable={isActionable(item)}
            style={props}
            onClick={() => {
              switch (step) {
                case GameStep.DealerDiscarding:
                  dispatch(gameActions.discard(index));
                  break;

                case GameStep.PlayingCards:
                  dispatch(gameActions.playCard(index));
                  break;
              }
            }}
            key={key}
          />
        );
      })}
    </div>
  );
}
