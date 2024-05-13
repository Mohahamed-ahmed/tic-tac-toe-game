import React , { useState } from "react";

// const initialGameBoard = [
//     [null,null,null],
//     [null,null,null],
//     [null,null,null]
//  ]

// const [rowcolomnValue, setRowColomnValue] = useState('')

function GameBoard({onSelect,board}){

    // let gameBoard = initialGameBoard;
    // //we need to ensure that if our derived array(turns) isnt empty and if its so we not continue so we use for loop

    // for(const turn of turns){
    //     const {square, player} = turn;
    //     const {row,col}= square;

    //     gameBoard[row][col]= player;
    // }



    // const [EditBoard,SetEditBoard]=useState(initialGameBoard);
    
    // function symbolclickHandler(rowIndex,colIndex){
    //     SetEditBoard((prevBoard)=>{
    //         const updatedBoard = [...prevBoard.map(innerArray=>[...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = props.playerSymbol;
    //         return updatedBoard;
    //     })

    //     props.onSelect();
    //     // setSymbol(curr=>!curr)
    // }

    return(
        <ol className="gameBoard">
            {board.map((row,rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={()=>onSelect(rowIndex,colIndex)} disabled={playerSymbol!== null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

export default GameBoard;