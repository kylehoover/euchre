import { Button, Paper, Typography } from "@material-ui/core";
import { animated, useSpring } from "react-spring";
import { useCallback, useState } from "react";
import { getWinningTeamIndex } from "../../gameHelpers/getWinningTeamIndex";
import { gameActions, useAppDispatch, useAppSelector } from "../../store";
import "./RoundSummary.scss";

const PaperAnimated = animated(Paper);

export function RoundSummary() {
  const [clickedContinue, setClickedContinue] = useState(false);
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);
  const numRounds = game.rounds.length;
  const winningTeam = getWinningTeamIndex(game) + 1;

  const spring = useSpring({
    opacity: clickedContinue ? 0 : 1,
    transform: clickedContinue ? "translateY(100px)" : "translateY(0)",
    from: { opacity: 0, transform: "translateY(-100px)" },
    onRest: () => {
      if (clickedContinue) {
        dispatch(gameActions.resumePlay());
      }
    },
  });

  const handleContinue = useCallback(() => {
    setClickedContinue(true);
  }, []);

  return (
    <PaperAnimated className="RoundSummary banner" style={spring}>
      <Typography variant="h4">
        Team {winningTeam} wins round {numRounds}
      </Typography>

      <div className="button-container">
        <Button color="primary" variant="contained" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </PaperAnimated>
  );
}
