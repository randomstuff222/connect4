import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import PlayVCpuIcon from "../assets/images/pc-monitor-svgrepo-com.svg";
import PlayVCpuIconHover from "../assets/images/pc-monitor-svgrepo-com-active.svg";
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
  let [cpuIcon, setCpuIcon] = useState(PlayVCpuIcon);

  function MouseOverCPU() {
    setCpuIcon(PlayVCpuIconHover);
  }
  function MouseOutCPU(){
    setCpuIcon(PlayVCpuIcon);
  }
  
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
        <Link
            to="/cpuplay"
            className="menu-link dark-purple-bg-clr black-text-clr"
            onClick={computerOpponent}
            onMouseEnter={MouseOverCPU}
            onMouseLeave={MouseOutCPU}
          >
            play vs cpu
            <img
              src={cpuIcon}
              alt="player vs cpu icon"
              className="menu-link-icon"
            />
          </Link>

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
