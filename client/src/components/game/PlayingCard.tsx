import classNames from "classnames";
import { Card, CardSuit } from "../../types";
import { ClubIcon, DiamondIcon, HeartIcon, SpadeIcon } from "../../assets";
import "./PlayingCard.scss";

interface Props {
  card: Card;
}

function getIcon(suit: CardSuit) {
  switch (suit) {
    case CardSuit.Clubs:
      return <ClubIcon />;
    case CardSuit.Diamonds:
      return <DiamondIcon />;
    case CardSuit.Hearts:
      return <HeartIcon />;
    case CardSuit.Spades:
      return <SpadeIcon />;
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
      <div className="pips"></div>
      <div className="signature">
        <div>{value}</div>
        {getIcon(suit)}
      </div>
    </div>
  );
}
