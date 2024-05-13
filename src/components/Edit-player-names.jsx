import React, {useState} from "react"
import GameBoard from "./Game-Board";
function EditNames(){

    const [player1State,SetPlayer1Name] = useState('Player1');
    const [player2State,SetPlayer2Name] = useState('Player2');

    const [isEditing, SetisEditing] = useState(false)
    const [isEditing2, SetisEditing2] = useState(false)

    const Editplayer1NmaeHandler=(event)=>{
        SetPlayer1Name(event.target.value)
    }
    const Editplayer2NmaeHandler=(event)=>{
        SetPlayer2Name(event.target.value)
    }
    const ButtonHandler=()=>{
        SetisEditing((editing)=>!editing); // using this instead of using !isEditing means that you will always work with the latest state value
    }
    const Button2Handler=()=>{
        SetisEditing2((editing)=>!editing);
    }

    const submithandler=(event)=>{
        event.preventDefault();
    }

    return(
        <form onSubmit={submithandler}>
            <ol id="players">
                <li>
                    {isEditing ?
                    <input type="text" onChange={Editplayer1NmaeHandler} value={player1State} style={{backgroundColor:"black", color:'white', border:"none"}}></input> 
                    :
                    <span>{player1State}</span>
                    }
                    <span>
                        <span>X</span>
                        <button type="submit" onClick={ButtonHandler}>{isEditing ? 'Save' : 'Edit'}</button>
                    </span>
                </li>
                <li>
                    {isEditing2 ?
                    <input type="text" onChange={Editplayer2NmaeHandler} value={player2State}></input> : 
                    <span>{player2State}</span>
                    }
                    <span>
                        <span>O</span>
                        <button type="submit" onClick={Button2Handler}>{isEditing2 ? 'Save' : 'Edit'}</button>
                    </span>
                </li>
            </ol>
            <GameBoard></GameBoard>
        </form>
    )
}

export default EditNames