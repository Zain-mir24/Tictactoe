import React from 'react'
import Square from './square'

function Board({squares,onClick}) {
    return (
        <div>
          {squares.map((square,i)=>{
              <Square key={i} value ={square} onClick={()=>onClick(i) } />
          })}  
        </div>
    )
}

export default Board
