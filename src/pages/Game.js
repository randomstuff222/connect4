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
  const { isRedTurn, isWinnerDeclared, displayWinnerName } = useGlobalContext();

  useEffect(() => {
    if(isWinnerDeclared){
      let winner = displayWinnerName();
      winner === "you" || winner ==="player 1" ? document.querySelector("body").style.backgroundColor = '#fd6687'
      : document.querySelector("body").style.backgroundColor = '#ffce67';
    }else{
      document.querySelector("body").style.backgroundColor = '#008080';
    }
  }, [isWinnerDeclared]);

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
