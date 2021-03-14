import { CardSuit } from "../../types";
import { ClubIcon, DiamondIcon, HeartIcon, SpadeIcon } from "../../assets";

export function getSuitIcon(suit: CardSuit): JSX.Element {
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
