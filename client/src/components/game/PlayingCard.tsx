import classNames from "classnames";
import { Paper } from "@material-ui/core";
import { animated, useSpring } from "react-spring";
import { Card, CardSuit } from "../../types";
import { ClubIcon, DiamondIcon, HeartIcon, SpadeIcon } from "../../assets";
import "./PlayingCard.scss";

interface Props {
  card?: Card;
  flipped?: boolean;
  startFlipped?: boolean;
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
  const { card, flipped = false, startFlipped = false, style } = props;
  const classes = classNames("PlayingCard", {
    [card?.suit ?? ""]: card?.suit !== undefined,
    flipped,
  });

  const { deg } = useSpring({
    deg: flipped ? -180 : 0,
    from: { deg: flipped || startFlipped ? -180 : 0 },
    config: { duration: 650 },
  });

  return (
    <div className={classes} style={style}>
      <animated.div
        className="card"
        style={{ transform: deg.interpolate((deg) => `rotateY(${deg}deg)`) }}
      >
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
      </animated.div>
    </div>
  );
}
