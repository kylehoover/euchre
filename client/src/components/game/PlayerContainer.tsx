import classNames from "classnames";
import { Avatar, Chip, Typography } from "@material-ui/core";
import { Player } from "../../types";
import { useAppSelector } from "../../store";
import "./PlayerContainer.scss";
import { getCurrentRound } from "../../gameHelpers";

interface Props {
  index: number;
}

export function PlayerContainer(props: Props) {
  const { index } = props;
  const game = useAppSelector((state) => state.game);
  const { activePlayerIndex, dealerIndex, players, playerOrder } = game;
  const player = players[playerOrder[index]];
  const round = getCurrentRound(game);
  const isActivePlayer = activePlayerIndex === index;
  const isDealer = dealerIndex === index;

  const numTricks = round.tricks.filter(
    ({ winningPlayerId }) => winningPlayerId === player.id,
  ).length;

  const classes = classNames("PlayerContainer", { "on-side": index % 2 === 1 });

  if (player === undefined) {
    return null;
  }

  return (
    <div className={classes}>
      <Typography variant="subtitle1" className="name">
        {player.name}
      </Typography>
      <Avatar className="num-tricks" variant="rounded">
        {numTricks}
      </Avatar>
      {isDealer && <Chip label="Dealer" color="secondary" />}
      {isActivePlayer && <Chip label="Active" color="primary" />}
    </div>
  );
}
