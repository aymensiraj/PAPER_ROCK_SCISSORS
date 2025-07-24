

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
    
        <div>
            <h1 className="text-center mt-5 text-5xl font-mono font-bold">PAPER SCISSORS ROCK</h1>
            <div className="flex gap-10 justify-center relative left-[40%]  w-[20%] ">
                <img id="img1" className="rotate-45" width={300} src={playerIMG} alt="IMG" /><br /><br />
                <img id="img2" className="scale-x-[-1] scale-y-[-1] rotate-[150deg]" width={300} src={computerIMG} alt="IMG" />
            </div>

            <h1 className="w-[50%]  absolute left-[25%] top-[70%] text-5xl font-bold font-mono text-center">{text}</h1>
            <Link className="bg-green-500 hover:bg-green-600 rounded px-4 py-2 absolute top-[80%] left-5/12 ml-13 text-3xl font-bold font-mono" to="/" onClick={handleGame}>Play Again</Link>
            <div className="flex gap-16 justify-center text-5xl font-mono font-bold absolute top-[89%] left-[20%]  ">
                <p>WIN : {win}</p>
                <p>|</p>
                <p>DRAW : {draw}</p>
                <p>|</p>
                <p>LOSS : {loss}</p>
            </div>
        </div>
  
  );
    
}

export default Play;