import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameMode from './components/SelectGameMode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamescreen" element={<Game />} />
        <Route path="/gamemode" element={<GameMode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
