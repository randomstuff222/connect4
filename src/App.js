import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameMode from './components/SelectGameMode';
import CpuGame from "./pages/CpuGame";
import { SocketProvides } from "./socketContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamescreen" element={<Game />} />
        <Route path="/gamemode" element={<GameMode />} />
        <Route path="/cpuplay" element={<CpuGame />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
