import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";

const GameBoard = () => {
  const {
    createBoardCells,
    isRedTurn,
    pieces,
    checkForEndOfGame,
    resetCounter,
    mouseOverColumnIndicator,
    handlePlayerMove,
    isComputerPlaying,
    updateRecentMove,
  } = useGlobalContext();

  const [playerMove, setPlayerMove] = useState(0);
  const [cpuTurn, setCpuTurn] = useState(isComputerPlaying && !isRedTurn);

  useEffect(() => {
    resetCounter();
    // 1= red 2 = yellow
    let player = isRedTurn ? 1 : 2;
    updateRecentMove(playerMove, player);
    checkForEndOfGame(player, pieces);
  }, [pieces]);

  const handleMove = (e, index) => {
    if(!cpuTurn){
      handlePlayerMove(e, index % 7);
      setPlayerMove(index);
      setCpuTurn(false);
    }else{
      return;
    }
    
  };

  useEffect(() => {
    if(isComputerPlaying){
      if(!isRedTurn){
        setCpuTurn(true)
      }else{
        setCpuTurn(false);
      }
    }
  }, [isRedTurn])

  return (
    <div className="gameboard">
      {createBoardCells().map((_, index) => {
        return (
          <div
            key={index}
            className="cell"
            onMouseOver={() => mouseOverColumnIndicator(index % 7)}
            onClick={(e) => handleMove(e, index % 7)}
          ></div>
        );
      })}
    </div>
  );
};

export default GameBoard;
