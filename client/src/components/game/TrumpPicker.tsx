import { animated, useSpring } from "react-spring";
import { useAppSelector } from "../../store";
import { PlayingCard } from "./PlayingCard";
import "./TrumpPicker.scss";

const AnimatedPlayingCard = animated(PlayingCard);

export function TrumpPicker() {
  const card = useAppSelector((state) => {
    const { rounds } = state.game;
    return rounds[rounds.length - 1].trumpCardFromDeck;
  });

  const backProps = useSpring({
    opacity: 0,
    transform: "perspective(600px) translate(-50%, -50%) rotateY(180deg)",
    from: {
      opacity: 1,
      transform: "perspective(600px) translate(-50%, -50%) rotateY(0deg)",
    },
  });
  const frontProps = useSpring({
    opacity: 1,
    transform:
      "perspective(600px) translate(-50%, -50%) rotateY(180deg) rotateY(180deg)",
    from: {
      opacity: 0,
      transform:
        "perspective(600px) translate(-50%, -50%) rotateY(0deg) rotateY(180deg)",
    },
  });

  return (
    <div className="TrumpPicker">
      <AnimatedPlayingCard style={backProps} />
      <AnimatedPlayingCard card={card} style={frontProps} />
    </div>
  );
}
