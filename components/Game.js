import React ,{useState} from 'react'
import Board from './Board'
import {findWinner} from "../Helper";

function Game() {
    const [history,sethistory] = useState([Array(9).fill(null)])
    const [stepnumber,setstepnumber]=useState(0)
    const [xIsnext,setxIsnext]=useState(true)
    const winner =  findWinner(history[stepnumber])
    const xO = xIsnext ?"X":"O"

    const handleClick=(i)=>{
        const history = history.slice(0,stepnumber+1)
        const current = historyPoint[stepnumber]
        const squares = [...current]
        if(winner||squares[i] )return;
        //select the square
        squares[i]= xO
        sethistory([...historyPoint,squares])
        setstepnumber(historyPoint.length)
        setxIsnext(!xIsnext)
    }
    return (
        <div>
               <h1>React Tic Tac toe with hooks</h1> 
               <Board squares={history[stepnumber]} onClick={handleClick} />
            </div>
    )
}

export default Game
