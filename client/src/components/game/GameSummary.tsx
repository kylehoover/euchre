import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { getCurrentRound, getNumTricksWonForTeam } from "../../gameHelpers";
import { useAppSelector } from "../../store";
import "./GameSummary.scss";

export function GameSummary() {
  const game = useAppSelector((state) => state.game);
  const round = getCurrentRound(game);
  const callingTeamIndex = game.players[round.callerId]?.teamIndex;

  return (
    <TableContainer className="GameSummary" component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell>Points</TableCell>
            <TableCell>Round {game.rounds.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {game.teams.map((team, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{team.points}</TableCell>
              <TableCell>
                <div className="round-cell">
                  {getNumTricksWonForTeam(round.tricks, index)}
                  {callingTeamIndex === index && <div className="dot" />}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
