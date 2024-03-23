import React from "react";
import Logo from "./Logo";
import { useGlobalContext } from "../context";
import { useSocket } from "./useSocket";

const GameScreenHeader = () => {
  const socket = useSocket();
  const { openPauseMenu, restartGame, isComputerPlaying, pieces, recentMove } = useGlobalContext();
  function restarting(){
    document.querySelector("body").style.backgroundColor = '#008080';
    let data = {
      cpu: isComputerPlaying, 
      data: pieces, 
      player_move: recentMove[0],
      restarting_game: true,
    };
    socket.send(JSON.stringify(data));
    restartGame();
  }
  return (
    <div className="game-screen-header">
      <button
        className="game-screen-btn game-screen-menu-btn"
        onClick={openPauseMenu}
      >
        Menu
      </button>
      <Logo />
      <button className="game-screen-btn" onClick={restarting}>
        Restart
      </button>
    </div>
  );
};

export default GameScreenHeader;
