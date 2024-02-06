import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
// import PlayVCpuIcon from "../assets/images/player-vs-cpu.svg";
import PlayVCpuIcon from "../assets/images/pc-monitor-svgrepo-com.svg";
// import PlayVPlayIcon from "../assets/images/player-vs-player.svg";
import PlayVPlayIcon from "../assets/images/fight-svgrepo-com.svg";
import PlayVPlayIconHover from "../assets/images/fight-svgrepo-com-hover.svg";
import GameRulesHelp from "../assets/images/help-svgrepo-com.svg";
import GameRulesHelpHover from "../assets/images/help-svgrepo-com-hover.svg";
import NotAvailable from "../assets/images/unavailable-svgrepo-com.svg";
import { useGlobalContext } from "../context";

const MainMenu = () => {
  const { openGameRules, computerOpponent, humanOpponent } = useGlobalContext();
  let [fightIcon, setFightIcon] = useState(PlayVPlayIcon);
  let [rulesIcon, setRulesIcon] = useState(GameRulesHelp);
  function MouseOverFight() {
    setFightIcon(PlayVPlayIconHover);
  }
  function MouseOutFight(){
    setFightIcon(PlayVPlayIcon);
  }
  
  function MouseOverHelp() {
    setRulesIcon(GameRulesHelpHover);
  }
  function MouseOutHelp(){
    setRulesIcon(GameRulesHelp);
  }
  
  return (
    <div className="menu">
      <Logo />
      <div>
        {/* Player vs Cpu button when this feature is added */}
        <div className="button-unavailable" style={{position: 'relative'}}>
        <img
              src={NotAvailable}
              alt="not available"
              className="menu-link-icon"
              style={{position: 'absolute', left:"40%", top: "20%"}}
            />
          <Link
            to="#"
            className="menu-link-unavailable gray-bg-clr gray-text-clr"
            onClick={computerOpponent}
          >
            play vs cpu
            <img
              src={PlayVCpuIcon}
              alt="player vs cpu icon"
              className="menu-link-icon"
            />
          </Link>
        </div>

        <Link
          //to="/gamescreen"
          to="/gamemode"
          className="menu-link rufeus-bg-clr black-text-clr"
          onClick={humanOpponent}
          onMouseEnter={MouseOverFight}
          onMouseLeave={MouseOutFight}
        >
          play vs player
          <img
            src={fightIcon}
            alt="player vs player icon"
            className="menu-link-icon"
          />
        </Link>

        <Link
          to="#"
          className="menu-link teal-bg-clr black-text-clr"
          onClick={openGameRules}
          onMouseEnter={MouseOverHelp}
          onMouseLeave={MouseOutHelp}
        >
          game rules
          <img
            src={rulesIcon}
            alt="help icon"
            className="menu-link-icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
