import MainMenu from "../components/MainMenu";
import GameRulesModal from "../components/GameRulesModal";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#212121";
  }, []);
  return (
    <main>
      <MainMenu />
      <GameRulesModal />
    </main>
  );
};

export default Home;
