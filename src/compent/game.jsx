
import { useNavigate } from "react-router-dom";
import React , {useEffect, useState} from "react";
import rockImg from "../img/rock.png";
import paperImg from "../img/paper.png";
import scissorImg from "../img/scissor.png";

function Game() {
    const [win, setwin] = useState(0)
    const [loss, setLoss] = useState(0)
    const [draw, setDraw] = useState(0)
    
    useEffect(()=>{
        setwin(localStorage.getItem("win"))
    },[win])
    useEffect(()=>{
        setLoss(localStorage.getItem("loss"))
    },[loss])
    useEffect(()=>{
        setDraw(localStorage.getItem("draw"))
    },[draw])
    const [weapon,setWeapon] = useState("")

    const navigate = useNavigate();
    
    const handlePlay = () => {
        const playerName = weapon; 
        navigate("/play", { state: { player: playerName } });
    }
    useEffect(()=>{
        if(weapon=="paper" || weapon=="rock" || weapon=="scissor" ){
            handlePlay()
        }
    })

    function paper(){
        setWeapon("paper")
        
    }
    function rock(){
        setWeapon("rock")
        
    }
    function scissor(){
        setWeapon("scissor")
        
    }


  return (
    <div>
        <h1 className="text-center mt-5 text-5xl font-mono font-bold">PAPER SCISSORS ROCK</h1>
        <h2 className="text-center text-2xl font-mono font-bold relative top-50">SELECT YOUR WEAPON</h2>
        <div className="relative flex gap-10 justify-center top-64">
            <button className="cursor-pointer border-8 rounded-full px-7 py-2" onClick={paper}><img   width={150} src={paperImg}/></button>
            <br />
            <button className="cursor-pointer border-8 rounded-full px-7 py-2" onClick={rock}><img    width={150} src={rockImg}/></button>
            <br />
            <button className="cursor-pointer border-8 rounded-full px-7 py-2" onClick={scissor}><img width={150} src={scissorImg}/></button>
        </div>
        <div className="flex gap-16 justify-center text-5xl font-mono font-bold relative top-80 ">
            <p>WIN : {win}</p>
            <p>|</p>
            <p>DRAW : {draw}</p>
            <p>|</p>
            <p>LOSS : {loss}</p>
        </div>
    </div>
  );
}

export default Game;