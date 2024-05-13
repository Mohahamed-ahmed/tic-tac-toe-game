import '../mine.css'
import { useState } from 'react';
function GameOver({winner,onRematch}){
    const [isClicked, SetIsClicked] = useState(false);

    const RematchHandlerButton=()=>{
        onRematch();
        SetIsClicked(true);
    }
    return (
        <div className={!isClicked?'gameover-container':'clicked'}>
            <h2>Game Over!</h2>
            {winner&&<p>{winner} Win</p>}
            {!winner&&<p>it is a draw</p>}
            <button onClick={RematchHandlerButton}>Rematch</button>
        </div>
    )
}

export default GameOver