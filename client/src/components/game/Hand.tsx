import { useTrail } from "react-spring";
import { PlayingCard } from "./PlayingCard";
import { Card } from "../../types";
import { useAppSelector } from "../../store";
import "./Hand.scss";

function getKey({ suit, value }: Card): string {
  return `${value}-${suit}`;
}

export function Hand() {
  const hand = useAppSelector(
    (state) => state.game.players[state.game.currentUserId]?.hand ?? [],
  );

  const trail = useTrail(hand.length, {
    transform: "translateY(0)",
    from: { transform: "translateY(16rem)" },
  });

  return (
    <div className="Hand">
      {trail.map((props, index) => {
        const card = hand[index];

        return <PlayingCard card={card} style={props} key={getKey(card)} />;
      })}
    </div>
  );
}
