import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import PlayVPlayIcon from "../assets/images/fight-svgrepo-com.svg";
import OnlineIcon from "../assets/images/network-utilities-svgrepo-com.svg";
import NotAvailable from "../assets/images/unavailable-svgrepo-com.svg";
import LocalHover from "../assets/images/location-pin-svgrepo-com-hover.svg";
import Local from "../assets/images/location-pin-svgrepo-com.svg";
import { useGlobalContext } from "../context";

const GameMode = () => {
  const { computerOpponent, humanOpponent } = useGlobalContext();
  let [fightIcon, setFightIcon] = useState(PlayVPlayIcon);
  function MouseOverFight() {
    setFightIcon(LocalHover);
  }
  function MouseOutFight(){
    setFightIcon(Local);
  }

  return (
    <div className="menu">
      <Link
       to='/'
       className=" menu-header-btn" 
       style={{display: 'flex',
          position: 'absolute',
          left: '5%',
          top: '5%',
          'justify-content': 'center',
          'align-items': 'center'}}>
        back
      </Link>
      <Logo />
      <div>
      {/* <button className="game-screen-btn" >
        Back
      </button> */}
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
            online
            <img
              src={OnlineIcon}
              alt="player vs cpu icon"
              className="menu-link-icon"
            />
          </Link>
        </div>

        <Link
          to="/gamescreen"
          className="menu-link rufeus-bg-clr black-text-clr"
          onClick={humanOpponent}
          onMouseEnter={MouseOverFight}
          onMouseLeave={MouseOutFight}
        >
          Local
          <img
            src={fightIcon}
            alt="player vs player icon"
            className="menu-link-icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default GameMode;
