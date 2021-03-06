import { useEffect, useState } from "react";
import { PlayingCard } from "./PlayingCard";
import { delay } from "../../helpers";
import { useAppSelector } from "../../store";
import "./TrumpPicker.scss";

export function TrumpPicker() {
  const [isFlipped, setIsFlipped] = useState(true);

  const card = useAppSelector((state) => {
    const { rounds } = state.game;
    return rounds[rounds.length - 1].trumpCardFromDeck;
  });

  useEffect(() => {
    async function run() {
      await delay(100);
      setIsFlipped(false);
    }

    run();
  }, []);

  return (
    <div className="TrumpPicker">
      <PlayingCard card={card} flipped={isFlipped} />
    </div>
  );
}
