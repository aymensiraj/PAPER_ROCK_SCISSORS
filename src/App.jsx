import {HashRouter , Routes , Route} from "react-router-dom"
import Game from "./compent/game.jsx"
import Play from "./compent/play.jsx"

function App() {

return(
  

  <HashRouter>
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/play" element={<Play/>} />
    </Routes>
  </HashRouter>
  );
}

export default App
