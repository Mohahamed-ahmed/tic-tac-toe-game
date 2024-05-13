import { useState } from "react";
function Player(props){
    const [PlayerName, SetPlayerName] = useState(props.DefaultName);
    const [isEditing, SetisEditing] = useState(false);

    const changeNameHandler=(event)=>{
        SetPlayerName(event.target.value)
    }

    const handleEditclick=()=>{
        SetisEditing((isediting)=>!isediting)
    }

    return (
        <li className={props.turn? 'Mohammed': undefined}>
            {
                isEditing ? 
                <input type="text" onChange={changeNameHandler} value={PlayerName}></input> : 
                <span>{PlayerName}</span>
            }
            <span>{props.symbol}</span>
            <button onClick={handleEditclick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player;