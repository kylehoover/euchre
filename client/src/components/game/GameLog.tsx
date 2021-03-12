import { useEffect, useRef } from "react";
import { animated, useTransition } from "react-spring";
import { useAppSelector } from "../../store";
import "./GameLog.scss";

export function GameLog() {
  const ref = useRef<HTMLDivElement>(null);
  const log = useAppSelector((state) => state.game.log);

  // const transitions = useTransition(log, null, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  // });

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [log.length]);

  return (
    <div className="GameLog" style={{}} ref={ref}>
      {log.map((entry, index) => (
        <div key={index}>{entry}</div>
      ))}

      {/* {transitions.map(({ item, props }, index) => (
        <animated.div style={props} key={index}>
          {item}
        </animated.div>
      ))} */}
    </div>
  );
}
