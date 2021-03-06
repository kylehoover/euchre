import { animated, useTrail } from "react-spring";
import { PlayingCard } from "./PlayingCard";
import { Card } from "../../types";
import { sortCards } from "../../gameHelpers";
import { useAppSelector } from "../../store";
import "./Hand.scss";

const AnimatedPlayingCard = animated(PlayingCard);

function getKey({ suit, value }: Card): string {
  return `${value}-${suit}`;
}

export function Hand() {
  const hand = useAppSelector(
    (state) => state.game.players[state.game.currentUserId]?.hand ?? [],
  );

  const sortedHand = sortCards(hand);

  const trail = useTrail(sortedHand.length, {
    transform: "translateY(0)",
    from: { transform: "translateY(16rem)" },
  });

  return (
    <div className="Hand">
      {trail.map((props, index) => {
        const card = sortedHand[index];

        return (
          <AnimatedPlayingCard card={card} style={props} key={getKey(card)} />
        );
      })}
    </div>
  );
}
