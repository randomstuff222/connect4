import GameScreenHeader from "../components/GameScreenHeader";
import YellowScoreCard from "../components/YellowScoreCard";
import PauseMenuModal from "../components/PauseMenuModal";
import RedScoreCard from "../components/RedScoreCard";
import GameBoard from "../components/GameBoard";
import WinnerBg from "../components/WinnerBg";
import RedTimer from "../components/RedTimer";
import YellowTimer from "../components/YellowTimer";
import { useGlobalContext } from "../context";
import WinnerCard from "../components/WinnerCard";
import { useEffect } from "react";

const Game = () => {
  const {
    isWinnerDeclared, 
    displayWinnerName, 
    isRedTurn, 
  } = useGlobalContext();

  useEffect(() => {
    if(isWinnerDeclared){
      let winner = displayWinnerName();
      if(winner === "you" || winner ==="player 1") document.querySelector("body").style.backgroundColor = '#fd6687';
      if(winner ==="player 2") document.querySelector("body").style.backgroundColor = '#ffce67';
      else document.querySelector("body").style.backgroundColor = '#008080';
    }else{
      document.querySelector("body").style.backgroundColor = '#008080';
    }
  }, [isWinnerDeclared]);


  useEffect(() => {
    const handleUnload = (event) => {
      // Display a confirmation message to the user
      event.preventDefault();
      event.returnValue = ''; // This line is needed for some browsers
    };

    // Add event listener when the component mounts
    window.addEventListener('beforeunload', handleUnload);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  return (
      <main>  
        <div className="game-screen-container">
          <GameScreenHeader />
          <div className="score-card-layout">
            <RedScoreCard />
            <YellowScoreCard />
          </div>
          <GameBoard />
          {isRedTurn ? <RedTimer /> : <YellowTimer />}
          {isWinnerDeclared && <WinnerCard />}
          <PauseMenuModal />
        </div>
        <WinnerBg />
      </main>
  );
};

export default Game;
