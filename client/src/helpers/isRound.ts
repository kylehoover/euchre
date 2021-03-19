import { Round } from "../types";

export function isRound(obj: unknown): obj is Round {
  const round = obj as Round;
  return (
    !!round &&
    round.callerId !== undefined &&
    round.dealerId !== undefined &&
    round.dealerPassed !== undefined &&
    round.tricks !== undefined
  );
}
