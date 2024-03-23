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
import { useSocket } from "../components/useSocket";
import { useEffect, useState } from "react";

const CpuGame = () => {
  const {
    pieces, 
    isWinnerDeclared, 
    isRedTurn, 
    updateBoardAfterPlay,
    isComputerPlaying,
    recentMove,
  } = useGlobalContext();

  const [cpuMove, setCpuMove] = useState(null);
  const [newMess, setNewMess] = useState(false);
  const socket = useSocket();

  useEffect(() => {
    socket.addEventListener("message", (e) => {
      e.preventDefault();
      setCpuMove(e.data);
      setNewMess(true);
      
    });
    return () => {
      socket.removeEventListener("message", (e) => {
      });
    }
  },[socket]);

  const cpuPlay = async (cpuMove) => {
    updateBoardAfterPlay(cpuMove - 1, 2);
    setNewMess(false);
  };

  useEffect(() => {
    if(newMess){
      cpuPlay(cpuMove);
    }
    }, [newMess]
  );

  useEffect(() => {
    if(!isRedTurn && !isWinnerDeclared) {
      let data = {
        cpu: isComputerPlaying, 
        data: pieces, 
        player_move: recentMove[0],
        restarting_game: false,
      };
 
      socket.send(JSON.stringify(data));
    }
  }, [isRedTurn, isWinnerDeclared]);

  useEffect(() => {
    const handleUnload = (event) => {
      // Display a confirmation message to the user
      event.preventDefault();
      event.returnValue = ''; // This line is needed for some browsers
      socket.send(JSON.stringify({
        cpu: isComputerPlaying, 
        data: pieces, 
        player_move: recentMove[0],
        restarting_game: true,
      }));
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

export default CpuGame;
