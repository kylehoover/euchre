import { useEffect } from "react";
import { Hand } from "./Hand";
import { gameActions, useAppDispatch } from "../../store";
import "./Game.scss";

export function Game() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(
    //   gameActions.addPlayer({
    //     playerId: "1",
    //     teamIndex: 0,
    //     isCurrentUser: true,
    //   }),
    // );
    // dispatch(gameActions.startGame());
  }, [dispatch]);

  return (
    <div className="Game">
      <div className="top"></div>
      <div className="middle">
        <div className="left"></div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
      <div className="bottom">
        <Hand />
      </div>
    </div>
  );
}
