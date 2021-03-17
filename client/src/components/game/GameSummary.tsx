import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { getCurrentRound } from "../../gameHelpers";
import { useAppSelector } from "../../store";
import "./GameSummary.scss";

export function GameSummary() {
  const game = useAppSelector((state) => state.game);
  const teams = game.teams;
  const round = getCurrentRound(game);

  return (
    <TableContainer className="GameSummary" component={Paper}>
      <Table size="small">
        <TableHead>
          <TableCell>Team</TableCell>
          <TableCell>Round {game.rounds.length}</TableCell>
          <TableCell>Points</TableCell>
        </TableHead>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                {
                  round.tricks.filter(
                    ({ winningTeamIndex }) => winningTeamIndex === index,
                  ).length
                }
              </TableCell>
              <TableCell>{team.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
