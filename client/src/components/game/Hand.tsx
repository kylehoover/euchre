import { PlayingCard } from "./PlayingCard";
import { Card } from "../../types";
import { sortCards } from "../../gameHelpers";
import { useAppSelector } from "../../store";
import "./Hand.scss";

function getKey({ suit, value }: Card): string {
  return `${value}-${suit}`;
}

export function Hand() {
  const hand = useAppSelector(
    (state) => state.game.players[state.game.currentUserId]?.hand ?? [],
  );

  const sortedHand = sortCards(hand);

  return (
    <div className="Hand">
      {sortedHand.map((card) => (
        <PlayingCard card={card} key={getKey(card)} />
      ))}
    </div>
  );
}
