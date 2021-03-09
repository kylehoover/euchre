import { useEffect, useRef } from "react";
import { useAppSelector } from "../../store";
import "./GameLog.scss";

export function GameLog() {
  const ref = useRef<HTMLDivElement>(null);
  const log = useAppSelector((state) => state.game.log);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [log.length]);

  return (
    <div className="GameLog" ref={ref}>
      {log.map((entry) => (
        <div>{entry}</div>
      ))}
    </div>
  );
}
