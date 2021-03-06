import { Button } from "@material-ui/core";
import { animated, useSpring } from "react-spring";
import { useState } from "react";
import { PlayingCard } from "./PlayingCard";
import { delay } from "../../helpers";
import { useAppSelector } from "../../store";
import "./TrumpPicker.scss";

export function TrumpPicker() {
  const [isFlipped, setIsFlipped] = useState(true);

  const card = useAppSelector((state) => {
    const { rounds } = state.game;
    return rounds[rounds.length - 1].trumpCardFromDeck;
  });

  const actionsProps = useSpring({
    to: async (next: any) => {
      await delay(100);
      setIsFlipped(false);
      await delay(500);
      await next({ opacity: 1, padding: 16, width: 100 });
    },
    from: { opacity: 0, padding: 0, width: 0 },
  });

  return (
    <div className="TrumpPicker">
      <PlayingCard card={card} flipped={isFlipped} />
      <animated.div className="actions" style={actionsProps}>
        <Button color="primary" variant="contained">
          Pick up
        </Button>
        <Button color="secondary" variant="contained">
          Pass
        </Button>
      </animated.div>
    </div>
  );
}
