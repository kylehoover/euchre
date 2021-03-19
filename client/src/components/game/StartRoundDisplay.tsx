import { Paper, Typography } from "@material-ui/core";
import {
  animated,
  ReactSpringHook,
  useChain,
  useSpring,
  useSprings,
} from "react-spring";
import { useRef } from "react";
import { PlayingCard } from "./PlayingCard";
import { createAnimationDeck } from "../../gameHelpers";
import { delay, getOffScreenTranslateValues } from "../../helpers";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import { useMounted } from "../hooks";
import "./StartRoundDisplay.scss";

export function StartRoundDisplay() {
  const dispatch = useAppDispatch();
  const isMounted = useMounted();

  const dealerIndex = useAppSelector((state) => state.game.dealerIndex);
  const roundNumber = useAppSelector((state) => state.game.rounds.length);
  const deck = createAnimationDeck(dealerIndex);

  const roundBannerRef = useRef<ReactSpringHook>(null);
  const roundBannerProps = useSpring({
    to: async (next: any) => {
      await next({ opacity: 1, transform: "translate(-50%, -50%)" });
      await delay(500);
      await next({ opacity: 0, transform: "translate(-50%, 50%)" });
    },
    from: { opacity: 0, transform: "translate(-50%, -100%)" },
    ref: roundBannerRef,
  });

  const deckRef = useRef<ReactSpringHook>(null);
  const deckProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    ref: deckRef,
  });
  const springsRef = useRef<ReactSpringHook>(null);
  const springs = useSprings(
    deck.length,
    deck.map((direction, i) => {
      const [x, y] = getOffScreenTranslateValues(direction, [100, 90, 140, 90]);

      return {
        opacity: 1,
        xy: [x, y],
        from: { opacity: 1, xy: [0, 0] },
        delay: (deck.length - i - 1) * 150,
        ref: springsRef,
        onRest: () => {
          if (isMounted() && i === 0) {
            dispatch(gameActions.dealCards());
          }
        },
      };
    }),
  );

  useChain([/*roundBannerRef,*/ deckRef, springsRef]);

  return (
    <div className="StartRoundDisplay">
      <animated.div style={roundBannerProps}>
        <Paper className="round-banner" elevation={4}>
          <Typography variant="h4">Round {roundNumber}</Typography>
        </Paper>
      </animated.div>

      <animated.div className="deck" style={deckProps}>
        <PlayingCard flipped />

        {springs.map((props, index) => (
          <animated.div
            style={{
              transform: (props as any).xy.interpolate(
                (x: number, y: number) => `translate(${x}px, ${y}px)`,
              ),
            }}
            key={index}
          >
            <PlayingCard flipped />
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
}
