import { Paper, Typography } from "@material-ui/core";
import { animated } from "react-spring";
import { Team } from "../../types";
import { useAppSelector } from "../../store";

const PaperAnimated = animated(Paper);

function getWinningTeam(teams: Team[]): number {
  let winningTeam = 0;

  teams.forEach((team, index) => {
    if (team.points >= 10) {
      winningTeam = index + 1;
    }
  });

  return winningTeam;
}

export function GameStats() {
  const game = useAppSelector((state) => state.game);
  const winningTeam = getWinningTeam(game.teams);

  return (
    <PaperAnimated className="banner">
      <Typography variant="h4">Team {winningTeam} wins!</Typography>
    </PaperAnimated>
  );
}
