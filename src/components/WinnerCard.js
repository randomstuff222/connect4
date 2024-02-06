import { useGlobalContext } from "../context";

const WinnerCard = () => {
  const { displayWinnerName, startNewGame } = useGlobalContext();


  // displayWinnerName() === "you" || "player 1" ? document.querySelector("body").style.backgroundColor = '#fd6687'
  // : document.querySelector("body").style.backgroundColor = '#ffce67';

  function newGame(){
    document.querySelector("body").style.backgroundColor = '#008080';
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
