import classNames from "classnames";
import { Card, CardSuit } from "../../types";
import { ClubIcon, DiamondIcon, HeartIcon, SpadeIcon } from "../../assets";
import "./PlayingCard.scss";

interface Props {
  card?: Card;
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
  const { card } = props;
  const classes = classNames("Card", {
    [card?.suit ?? ""]: card?.suit !== undefined,
  });

  return (
    <div className={classes}>
      {card && (
        <>
          <div className="signature">
            <div>{card.value}</div>
            {getIcon(card.suit)}
          </div>
          <div className="pips"></div>
          <div className="signature">
            <div>{card.value}</div>
            {getIcon(card.suit)}
          </div>
        </>
      )}

      {!card && <div className="back" />}
    </div>
  );
}
