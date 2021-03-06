import classNames from "classnames";
import { Paper } from "@material-ui/core";
import { Card, CardSuit } from "../../types";
import { ClubIcon, DiamondIcon, HeartIcon, SpadeIcon } from "../../assets";
import "./PlayingCard.scss";

interface Props {
  card?: Card;
  flipped?: boolean;
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
  const { card, flipped = false, style } = props;
  const classes = classNames("PlayingCard", {
    [card?.suit ?? ""]: card?.suit !== undefined,
    flipped,
  });

  return (
    <div className={classes} style={style}>
      <div className="card">
        <Paper className="face">
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
        </Paper>
        <Paper className="back">
          <div className="border" />
        </Paper>
      </div>
    </div>
  );
}
