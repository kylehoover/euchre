import classNames from "classnames";
import { Paper } from "@material-ui/core";
import { animated, useSpring } from "react-spring";
import { Card } from "../../types";
import { getSuitIcon } from "../helpers";
import "./PlayingCard.scss";

interface Props {
  actionable?: boolean;
  card?: Card;
  flipped?: boolean;
  startFlipped?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function PlayingCard(props: Props) {
  const {
    actionable = false,
    card,
    flipped = false,
    onClick,
    startFlipped = false,
    style,
  } = props;
  const classes = classNames("PlayingCard", {
    [card?.suit ?? ""]: card?.suit !== undefined,
    flipped,
    actionable,
  });

  const rotateSpring = useSpring({
    deg: flipped ? -180 : 0,
    from: { deg: flipped || startFlipped ? -180 : 0 },
    config: { duration: 650 },
  });

  const [scaleSpring, setScaleSpring] = useSpring(() => ({
    scale: 1,
  }));

  return (
    <animated.div
      className={classes}
      style={style}
      onClick={() => {
        if (actionable) {
          onClick?.();
        }
      }}
      onMouseEnter={() => {
        if (actionable) {
          setScaleSpring({ scale: 1.1 });
        }
      }}
      onMouseDown={() => {
        if (actionable) {
          setScaleSpring({ scale: 1.05 });
        }
      }}
      onMouseLeave={() => {
        setScaleSpring({ scale: 1 });
      }}
    >
      <animated.div
        className="scale-container"
        style={{
          transform: scaleSpring.scale.interpolate((s) => `scale(${s})`),
        }}
      >
        <animated.div
          className="card"
          style={{
            transform: rotateSpring.deg.interpolate((d) => `rotateY(${d}deg)`),
          }}
        >
          <Paper className="face" elevation={actionable ? 2 : 1}>
            {card && (
              <>
                <div className="signature">
                  <div>{card.value}</div>
                  {getSuitIcon(card.suit)}
                </div>
                <div className="pips"></div>
                <div className="signature">
                  <div>{card.value}</div>
                  {getSuitIcon(card.suit)}
                </div>
              </>
            )}
          </Paper>
          <Paper className="back">
            <div className="border" />
          </Paper>
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
