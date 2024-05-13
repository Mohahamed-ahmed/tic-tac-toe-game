// import EditNames from "./components/Edit-player-names"
import GameBoard from "./components/Game-Board"
import Player from "./components/Player";
import { useState } from "react";
import { winning } from "./components/Winning_Com";
import GameOver from "./components/Game-over";

const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function App() {


  const [gameTurns, SetTurns]=useState([]); //WE ARE DOING NEW SHAPE FOR ARRAY and will pass it down
  const [ActivePlayer, SetActivePlayer] = useState('X');

  const selectsquarehandler=(rowIndex,colIndex)=>{
    SetActivePlayer((currentval)=>currentval==='X'?'O':'X');

    SetTurns((prevturns)=>{
      let currentPlayer = 'X';// we could use activeplayer instead of doing this but this will make us be using the same state for different things and we dont want this
      
      if(prevturns.length > 0 && prevturns[0].player === 'X'){
        currentPlayer='O'
      }

      const updatedTurns= [
        {square:{row:rowIndex, col:colIndex}, player:currentPlayer} // so now we know which player clicked the square 
        ,...prevturns];

        return updatedTurns

    })
  }
  let gameBoard = [...initialGameBoard.map(arr=>[...arr])];//we do this so we can rematch as by this we copying the original array and pass new one with the same values
  //we need to ensure that if our derived array(turns) isnt empty and if its so we not continue so we use for loop

  for(const turn of gameTurns){
      const {square, player} = turn;
      const {row,col}= square;

      gameBoard[row][col]= player;
  }

  let winner;

  for(const combinition of winning){
    const firstSquareSymbol = gameBoard[combinition[0].row][combinition[0].column];
    const secondSquareSymbol = gameBoard[combinition[1].row][combinition[1].column];
    const thirdSquareSymbol = gameBoard[combinition[2].row][combinition[2].column];

    if(
      firstSquareSymbol &&
      firstSquareSymbol===secondSquareSymbol&&
      firstSquareSymbol===thirdSquareSymbol
      ){
        winner= firstSquareSymbol
      }
  }
  console.log(winner);

  const hasDraw = gameTurns.length === 9 && !winner;

  const RematchHandler=()=>{
    SetTurns([])
  }


  return (
    <div id="game-container">
      {/* <EditNames></EditNames> */}
      <ol id="players">
        <Player DefaultName="player1" symbol="X" turn={ActivePlayer==='X'}></Player>
        <Player DefaultName="player2" symbol="O" turn={ActivePlayer==='O'}></Player>
      </ol>
      {(winner||hasDraw)&& <GameOver winner={winner} onRematch={RematchHandler}></GameOver>}
      <GameBoard onSelect={selectsquarehandler} playerSymbol={ActivePlayer} board={gameBoard}></GameBoard>
    </div>
  )
}

export default App
