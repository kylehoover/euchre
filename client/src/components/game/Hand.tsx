import { animated, useSpring, useTrail } from "react-spring";
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

  const animatedProps = useSpring({
    transform: "translateY(0)",
    from: { transform: "translateY(15rem)" },
  });

  const trail = useTrail(sortedHand.length, {
    transform: "translateY(0)",
    from: { transform: "translateY(16rem)" },
  });

  return (
    <div className="Hand">
      {trail.map((props, index) => {
        const card = sortedHand[index];

        return (
          <animated.div style={props} key={getKey(card)}>
            <PlayingCard card={card} />
          </animated.div>
        );
      })}
      {/* {sortedHand.map((card) => (
        <animated.div style={animatedProps}>
          <PlayingCard card={card} key={getKey(card)} />
        </animated.div>
      ))} */}
    </div>
  );
}
