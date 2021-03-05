import classNames from "classnames";
import { Card, CardSuit } from "../../types";
import { ClubIcon, DiamondIcon, HeartIcon, SpadeIcon } from "../../assets";
import "./PlayingCard.scss";
import { Paper } from "@material-ui/core";

interface Props {
  card?: Card;
  style?: React.CSSProperties;
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
  const { card, style } = props;
  const classes = classNames("PlayingCard", {
    [card?.suit ?? ""]: card?.suit !== undefined,
    flipped: card === undefined,
  });

  return (
    <Paper className={classes} elevation={1} style={style}>
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
    </Paper>
  );
}
