import classNames from "classnames";
import { Card, CardSuit } from "../../types";
import { ReactComponent as Diamond } from "../../assets/diamond.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import "./PlayingCard.scss";

interface Props {
  card: Card;
}

function getIcon(suit: CardSuit) {
  switch (suit) {
    case CardSuit.Diamonds:
      return <Diamond />;
    case CardSuit.Hearts:
      return <Heart />;
  }
}

export function PlayingCard(props: Props) {
  const { suit, value } = props.card;

  return (
    <div className={classNames("Card", suit)}>
      <div className="signature">
        <div>{value}</div>
        {getIcon(suit)}
      </div>
    </div>
  );
}
