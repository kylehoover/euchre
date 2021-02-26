import { useAppSelector } from "../../store";
import "./Hand.scss";

export function Hand() {
  const hand = useAppSelector(
    (state) => state.game.players[state.game.currentUserId]?.hand ?? [],
  );

  return (
    <div className="Hand">
      {hand.map((card) => (
        <div className="card" key={`${card.value}-${card.suit}`}>
          {card.value} {card.suit}
        </div>
      ))}
    </div>
  );
}
