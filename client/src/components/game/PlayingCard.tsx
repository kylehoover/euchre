import classNames from "classnames";
import { Card } from "../../types";
import "./PlayingCard.scss";

interface Props {
  card: Card;
}

export function PlayingCard(props: Props) {
  const { card } = props;

  return (
    <div className={classNames("Card", card.suit)}>
      {card.value} {card.suit}
    </div>
  );
}
