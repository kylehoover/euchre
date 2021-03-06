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
import { delay } from "../../helpers";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import "./StartRoundDisplay.scss";
import { createAnimationDeck } from "../../gameHelpers/createAnimationDeck";

// const deck = [
//   { i: 0, direction: 0 },
//   { i: 1, direction: 0 },
//   { i: 2, direction: 0 },
//   { i: 3, direction: 1 },
//   { i: 4, direction: 1 },
//   { i: 5, direction: 2 },
//   { i: 6, direction: 2 },
//   { i: 7, direction: 2 },
//   { i: 8, direction: 3 },
//   { i: 9, direction: 3 },
//   { i: 10, direction: 0 },
//   { i: 11, direction: 0 },
//   { i: 12, direction: 1 },
//   { i: 13, direction: 1 },
//   { i: 14, direction: 1 },
//   { i: 15, direction: 2 },
//   { i: 16, direction: 2 },
//   { i: 17, direction: 3 },
//   { i: 18, direction: 3 },
//   { i: 19, direction: 3 },
// ];

// const deck = [
//   { i: 0, direction: 3 },
//   { i: 1, direction: 3 },
//   { i: 2, direction: 3 },
//   { i: 3, direction: 2 },
//   { i: 4, direction: 2 },
//   { i: 5, direction: 1 },
//   { i: 6, direction: 1 },
//   { i: 7, direction: 1 },
//   { i: 8, direction: 0 },
//   { i: 9, direction: 0 },
//   { i: 10, direction: 3 },
//   { i: 11, direction: 3 },
//   { i: 12, direction: 2 },
//   { i: 13, direction: 2 },
//   { i: 14, direction: 2 },
//   { i: 15, direction: 1 },
//   { i: 16, direction: 1 },
//   { i: 17, direction: 0 },
//   { i: 18, direction: 0 },
//   { i: 19, direction: 0 },
// ];

export function StartRoundDisplay() {
  const dispatch = useAppDispatch();

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
      const yDelta = direction === 0 ? 50 : -50;
      const transformX = window.innerWidth / 2 + 100;
      const transformY = window.innerHeight / 2 + 130 + yDelta;
      const x =
        direction % 2 === 0 ? 0 : direction === 1 ? -transformX : transformX;
      const y =
        direction % 2 === 1 ? 0 : direction === 0 ? transformY : -transformY;

      return {
        opacity: 1,
        xy: [x, y],
        from: { opacity: 1, xy: [0, 0] },
        delay: (deck.length - i - 1) * 150, //i * 150,
        ref: springsRef,
        onRest: () => {
          if (i === 0) {
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
