import { Button } from "@material-ui/core";
import { animated, useSpring } from "react-spring";
import { useCallback, useState } from "react";
import { GameStep } from "../../types";
import { PlayingCard } from "./PlayingCard";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import { getTransformToPlayerValues } from "../../helpers";
import { getCurrentRound } from "../../gameHelpers";
import "./TrumpPicker.scss";

export function TrumpPicker() {
  const dispatch = useAppDispatch();
  const [didPickUp, setDidPickUp] = useState(false);

  const activePlayerIndex = useAppSelector(
    (state) => state.game.activePlayerIndex,
  );
  const dealerIndex = useAppSelector((state) => state.game.dealerIndex);
  const step = useAppSelector((state) => state.game.step);
  const trumpCard = useAppSelector(
    (state) => getCurrentRound(state.game).trumpCardFromDeck,
  );
  const isDisabled = activePlayerIndex !== 0 || didPickUp;

  const actionsSpring = useSpring({
    opacity: didPickUp ? 0 : 1,
    padding: 16,
    width: 100,
    from: { opacity: 0, padding: 0, width: 0 },
    delay: didPickUp ? 0 : 500,
  });

  const [x, y] = didPickUp
    ? getTransformToPlayerValues(dealerIndex, 50, 50)
    : [0, 0];
  const cardSpring = useSpring({
    transform: `translate(${x}px, ${y}px)`,
    from: { transform: "translate(0px, 0px)" },
    onRest: () => {
      if (step === GameStep.CallingTrump && didPickUp) {
        dispatch(gameActions.pickUpTrump());
      }
    },
  });

  const handlePickUp = useCallback(() => {
    setDidPickUp(true);
  }, []);

  const handlePass = useCallback(() => {
    dispatch(gameActions.passCallingTrump());
  }, [dispatch]);

  return (
    <div className="TrumpPicker">
      <PlayingCard card={trumpCard} style={cardSpring} startFlipped />
      <animated.div className="actions" style={actionsSpring}>
        <Button
          color="primary"
          variant="contained"
          disabled={isDisabled}
          onClick={handlePickUp}
        >
          Pick up
        </Button>
        <Button
          color="secondary"
          variant="contained"
          disabled={isDisabled}
          onClick={handlePass}
        >
          Pass
        </Button>
      </animated.div>
    </div>
  );
}
