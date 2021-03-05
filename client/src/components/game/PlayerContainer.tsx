import classNames from "classnames";
import { Chip, Typography } from "@material-ui/core";
import { Player } from "../../types";
import { useAppSelector } from "../../store";
import "./PlayerContainer.scss";

interface Props {
  index: number;
}

export function PlayerContainer(props: Props) {
  const { index } = props;
  const player: Player | undefined = useAppSelector(
    (state) => state.game.players[state.game.playerOrder[index]],
  );
  const isActivePlayer = useAppSelector(
    (state) => state.game.activePlayerIndex === index,
  );
  const isDealer = useAppSelector((state) => state.game.dealerIndex === index);
  const classes = classNames("PlayerContainer", { "on-side": index % 2 === 1 });

  if (player === undefined) {
    return null;
  }

  return (
    <div className={classes}>
      <Typography variant="subtitle1" className="name">
        {player.name}
      </Typography>
      {isDealer && <Chip label="Dealer" color="secondary" />}
      {isActivePlayer && <Chip label="Active" color="primary" />}
    </div>
  );
}
