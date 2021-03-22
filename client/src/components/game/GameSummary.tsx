import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { getNumTricks } from "../../gameHelpers";
import { useAppSelector } from "../../store";
import "./GameSummary.scss";

export function GameSummary() {
  const game = useAppSelector((state) => state.game);
  const teams = game.teams;

  return (
    <TableContainer className="GameSummary" component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell>Round {game.rounds.length}</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{getNumTricks(game, index)}</TableCell>
              <TableCell>{team.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
