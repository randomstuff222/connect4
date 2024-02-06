import React from "react";
import Logo from "./Logo";
import { useGlobalContext } from "../context";

const GameScreenHeader = () => {
  const { openPauseMenu, restartGame } = useGlobalContext();
  function restarting(){
    document.querySelector("body").style.backgroundColor = '#008080';
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
