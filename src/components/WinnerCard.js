import { useGlobalContext } from "../context";
import { useSocket } from "./useSocket";

const WinnerCard = () => {
  const { displayWinnerName, startNewGame, pieces, recentMove, isComputerPlaying } = useGlobalContext();
  const socket = useSocket();

  function newGame(){
    document.querySelector("body").style.backgroundColor = '#008080';
    socket.send(JSON.stringify({
      cpu: isComputerPlaying, 
      data: pieces, 
      player_move: recentMove[0],
      restarting_game: true,
    }));
    startNewGame();
  }

  return (
    <div className="winner-card">
      <div className="winner-card-text">
        <p className="winner-name">
          {displayWinnerName() === "no one" ? "no one" : displayWinnerName()}
        </p>
        <p className="winner-statement">
          {displayWinnerName() === "you" || 'player 1' ? "win" : "wins"}
        </p>
        <button
          className="game-screen-btn play-again-btn"
          onClick={newGame}
        >
          play again
        </button>
      </div>
    </div>
  );
};

export default WinnerCard;
