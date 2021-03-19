import { useTransition } from "react-spring";
import { getCurrentRound } from "../../gameHelpers";
import { getOffScreenTranslateValues } from "../../helpers";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import { getIndex } from "../../store/game/helpers";
import { CardPlayed, GameStep } from "../../types";
import { PlayingCard } from "./PlayingCard";
import "./GameTable.scss";

function getOnScreenTranslateValues(direction: number): [number, number] {
  const x = direction % 2 === 0 ? -80 : direction === 1 ? -160 : 0;
  const y = direction % 2 === 1 ? -112 : direction === 0 ? 0 : -224;
  return [x, y];
}

export function GameTable() {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);
  const { playerOrder, step } = game;
  const round = getCurrentRound(game);
  const trick = round.tricks[round.tricks.length - 1];
  const prevTrick = round.tricks[round.tricks.length - 2];

  const transitions = useTransition(trick.cards, (card) => card.playerId, {
    from: (card: CardPlayed) => ({
      xy: getOffScreenTranslateValues(getIndex(playerOrder, card.playerId), [
        200,
        0,
        30,
        160,
      ]),
    }),
    enter: (card: CardPlayed) => ({
      xy: getOnScreenTranslateValues(getIndex(playerOrder, card.playerId)),
    }),
    leave: {
      xy: getOffScreenTranslateValues(
        getIndex(playerOrder, prevTrick?.winningPlayerId ?? 0),
        [210, 10, 30, 170],
      ),
    },
    onRest: () => {
      if (step === GameStep.EndingTrick) {
        dispatch(gameActions.resumePlay());
      }
    },
  } as any);

  return (
    <div className="GameTable">
      {transitions.map(({ item, key, props }) => (
        <PlayingCard
          card={item}
          style={{
            transform: (props as any).xy.interpolate(
              (x: number, y: number) => `translate(${x}px, ${y}px)`,
            ),
          }}
          key={key}
        />
      ))}
    </div>
  );
}
