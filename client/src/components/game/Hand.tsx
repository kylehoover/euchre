import { useTransition } from "react-spring";
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

  const transitions = useTransition(hand, getKey, {
    from: { transform: "translateY(16rem)" },
    enter: { transform: "translateY(0)" },
    leave: { transform: "translateY(16rem)" },
    trail: 100,
  });

  return (
    <div className="Hand">
      {transitions.map(({ item, key, props }) => (
        <PlayingCard card={item} style={props} key={key} />
      ))}
    </div>
  );
}
