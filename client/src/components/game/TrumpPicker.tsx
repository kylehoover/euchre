import { Button, ButtonGroup } from "@material-ui/core";
import { animated, useSpring } from "react-spring";
import { useCallback, useState } from "react";
import { CardSuit, GameStep } from "../../types";
import { PlayingCard } from "./PlayingCard";
import { SuitIcon } from "./SuitIcon";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import { getOffScreenTranslateValues } from "../../helpers";
import { getCurrentRound } from "../../gameHelpers";
import "./TrumpPicker.scss";

export function TrumpPicker() {
  const dispatch = useAppDispatch();
  const [calledTrump, setCalledTrump] = useState<CardSuit | null>(null);
  const [didPickUp, setDidPickUp] = useState(false);

  const activePlayerIndex = useAppSelector(
    (state) => state.game.activePlayerIndex,
  );
  const dealerIndex = useAppSelector((state) => state.game.dealerIndex);
  const step = useAppSelector((state) => state.game.step);
  const round = useAppSelector((state) => getCurrentRound(state.game));
  const { dealerPassed, trumpCardFromDeck } = round;
  const isDisabled = activePlayerIndex !== 0 || didPickUp;
  const isPassDisabled = dealerPassed && dealerIndex === 0;

  const rootSpring = useSpring({
    opacity: calledTrump ? 0 : 1,
    onRest: () => {
      if (calledTrump) {
        dispatch(gameActions.callTrump(calledTrump));
      }
    },
  });

  const actionsSpring = useSpring({
    opacity: didPickUp ? 0 : 1,
    padding: 16,
    width: 128,
    from: { opacity: 0, padding: 0, width: 0 },
    delay: didPickUp ? 0 : 500,
  });

  const [x, y] = didPickUp
    ? getOffScreenTranslateValues(dealerIndex, [100, 170, 140, 0])
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

  const pickUpButtonSpring = useSpring({
    height: dealerPassed ? 0 : 36,
    marginBottom: dealerPassed ? 0 : 16,
    opacity: dealerPassed ? 0 : 1,
  });

  const suitButtonsSpring = useSpring({
    height: dealerPassed ? 141 : 0,
    marginBottom: dealerPassed ? 16 : 0,
    opacity: dealerPassed ? 1 : 0,
    from: { height: 0, marginBottom: 0, opacity: 0 },
  });

  const handleCallTrump = useCallback((suit: CardSuit) => {
    setCalledTrump(suit);
  }, []);

  const handlePickUp = useCallback(() => {
    setDidPickUp(true);
  }, []);

  const handlePass = useCallback(() => {
    dispatch(gameActions.passCallingTrump());
  }, [dispatch]);

  return (
    <animated.div className="TrumpPicker" style={rootSpring}>
      <PlayingCard
        card={trumpCardFromDeck}
        style={cardSpring}
        flipped={dealerPassed}
        startFlipped
      />
      <animated.div className="actions" style={actionsSpring}>
        <animated.div className="suit-buttons" style={suitButtonsSpring}>
          <ButtonGroup
            orientation="vertical"
            disabled={isDisabled}
            aria-label="vertical outlined primary button group"
          >
            {Object.values(CardSuit).map((suit) => (
              <Button
                className={suit}
                startIcon={<SuitIcon suit={suit} />}
                disabled={trumpCardFromDeck!.suit === suit}
                onClick={() => handleCallTrump(suit)}
                key={suit}
              >
                {suit}
              </Button>
            ))}
          </ButtonGroup>
        </animated.div>

        <animated.div style={pickUpButtonSpring}>
          <Button
            color="primary"
            variant="contained"
            disabled={isDisabled || dealerPassed}
            onClick={handlePickUp}
          >
            Pick up
          </Button>
        </animated.div>
        <Button
          color="secondary"
          variant="contained"
          disabled={isDisabled || isPassDisabled}
          onClick={handlePass}
        >
          Pass
        </Button>
      </animated.div>
    </animated.div>
  );
}
