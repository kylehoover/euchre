import { isRound } from "../helpers";
import { GameState } from "../store/game/types";
import { Round, Trick } from "../types";
import { getCurrentRound } from "./getCurrentRound";

export function getCurrentTrick(source: GameState | Round): Trick {
  let tricks: Trick[];

  if (isRound(source)) {
    tricks = source.tricks;
  } else {
    tricks = getCurrentRound(source).tricks;
  }

  return tricks[tricks.length - 1];
}
