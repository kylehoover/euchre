import classNames from "classnames";
import { CardSuit } from "../../types";
import { ClubIcon, DiamondIcon, HeartIcon, SpadeIcon } from "../../assets";

export function getSuitIcon(suit: CardSuit): JSX.Element {
  const classes = classNames("suit-icon", suit);

  switch (suit) {
    case CardSuit.Clubs:
      return <ClubIcon className={classes} />;
    case CardSuit.Diamonds:
      return <DiamondIcon className={classes} />;
    case CardSuit.Hearts:
      return <HeartIcon className={classes} />;
    case CardSuit.Spades:
      return <SpadeIcon className={classes} />;
  }
}
