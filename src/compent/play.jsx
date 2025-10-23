

import { useLocation,Link ,Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import rockImg from "../img/rock.png";
import paperImg from "../img/paper.png";
import scissorImg from "../img/scissor.png";
import { useEffect ,useState} from "react";

function Play() {
  const computerList = ["paper","rock","scissor"]
  const randomIndex = Math.floor(Math.random() * computerList.length)
    
    const navigate = useNavigate()

    
    const computer = computerList[randomIndex]
    
    const location = useLocation();
    const { player } = location.state || {}; 
    const [text,setText]=useState("")  
    const [win, setWin] = useState(() => Number(localStorage.getItem("win")) || 0);
    const [loss, setLoss] = useState(() => Number(localStorage.getItem("loss")) || 0);
    const [draw, setDraw] = useState(() => Number(localStorage.getItem("draw")) || 0);
    useEffect(() => {
        localStorage.setItem("win", win);
        
    }, [win]);

    useEffect(() => {
        localStorage.setItem("loss", loss);
    }, [loss]);

    useEffect(() => {
        localStorage.setItem("draw", draw);
    }, [draw]);
    
    let [playerIMG,setIMGpl] = useState(null)
    let [computerIMG,setIMGcop] = useState(null)
    const handleGame = () => {
        const winPlay = win; 
        const drawPlay = draw; 
        const lossPlay = loss; 
        navigate("/", { state: { winner: winPlay}});
        navigate("/", { state: {drawer:drawPlay} });
        navigate("/", { state: {loser:lossPlay} });
       
    }
useEffect(() => {
    if (!player || !computer) return;


  if (player === "paper" && computer === "rock") {
    setText("player1 win");
    setWin(w => w + 1);
    

  } else if (player === "rock" && computer === "paper") {
    setText("player2 win");
    setLoss(l => l + 1);
    

  } else if (player === "paper" && computer === "scissor") {
    setText("player2 win");
    setLoss(l => l + 1);
    

  } else if (player === "scissor" && computer === "paper") {
    setText("player1 win");
    setWin(w => w + 1);
    

  } else if (player === "scissor" && computer === "rock") {
    setText("player2 win");
    setLoss(l => l + 1);
    

  } else if (player === "rock" && computer === "scissor") {
    setText("player1 win");
    setWin(w => w + 1);
    

  } else {
    setText("game over");
    setDraw(d => d + 1);
    

  }

  
  const mapImg = {
    rock: rockImg,
    paper: paperImg,
    scissor: scissorImg,
  };

  setIMGcop(mapImg[computer]);
  setIMGpl(mapImg[player]);

}, [player, computer]);
    
return (
  <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-center mt-6 text-4xl sm:text-4xl md:text-6xl font-extrabold font-mono tracking-widest">
        PAPER · SCISSORS · ROCK
      </h1>
  <div/>

  <div className="flex flex-col sm:flex-row gap-10 justify-center items-center w-full sm:w-[80%] md:w-[60%]">
    <div className="flex flex-col items-center">
      <img
        id="img1"
        className="rotate-45 w-[180px] sm:w-[220px] md:w-[300px] drop-shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-transform duration-500 "
        src={playerIMG}
        alt="Player"
      />
      <p className="mt-4 text-lg sm:text-xl text-green-400 font-semibold">You</p>
    </div>

    <div className="flex flex-col items-center">
      <img
        id="img2"
        className="scale-x-[-1] scale-y-[-1] rotate-[150deg] w-[180px] sm:w-[220px] md:w-[300px] drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]  transition-transform duration-500"
        src={computerIMG}
        alt="Computer"
      />
      <p className="mt-4 text-lg sm:text-xl text-red-400 font-semibold">Computer</p>
    </div>

  </div>

  <h2 className="mt-12 text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-center tracking-wide">
    {text}
  </h2>

  
  <Link
    to="/"
    onClick={handleGame}
    className="mt-10 bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-xl px-6 py-3 text-2xl font-bold font-mono shadow-lg shadow-green-600/30">Play Again
  </Link>

  
  <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10 text-2xl sm:text-3xl font-mono font-bold">

    <div className="flex items-center gap-2">
      <span className="text-green-400">WIN</span> : <span>{win}</span>
    </div>

    <div>|</div>

    <div className="flex items-center gap-2">
      <span className="text-yellow-400">DRAW</span> : <span>{draw}</span>
    </div>

    <div>|</div>
    
    <div className="flex items-center gap-2">
      <span className="text-red-400">LOSS</span> : <span>{loss}</span>
    </div>

  </div>
</div>


  
  );
    
}

export default Play;
