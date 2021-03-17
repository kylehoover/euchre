import classNames from "classnames";
import { CardSuit } from "../../types";
import { getSuitIcon } from "../helpers";
import "./SuitIcon.scss";

interface Props {
  suit?: CardSuit;
}

export function SuitIcon(props: Props) {
  const { suit } = props;

  if (suit === undefined) {
    return null;
  }

  return getSuitIcon(suit);
}
