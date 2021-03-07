import { Button } from "@material-ui/core";
import { animated, useSpring } from "react-spring";
import { useState } from "react";
import { PlayingCard } from "./PlayingCard";
import { useAppSelector } from "../../store";
import "./TrumpPicker.scss";

export function TrumpPicker() {
  const card = useAppSelector((state) => {
    const { rounds } = state.game;
    return rounds[rounds.length - 1].trumpCardFromDeck;
  });

  const spring = useSpring({
    opacity: 1,
    padding: 16,
    width: 100,
    from: { opacity: 0, padding: 0, width: 0 },
    delay: 500,
  });

  return (
    <div className="TrumpPicker">
      <PlayingCard card={card} startFlipped />
      <animated.div className="actions" style={spring}>
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
