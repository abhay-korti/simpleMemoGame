import React from "react";
import './index.css'

export function Strikes(props) {

    let strikesArr = [];
    for (let i = 0; i < props.strikes; i++) {
        strikesArr[i] = <img src="https://www.pngkit.com/png/full/205-2056266_player-o-into-tic-tac-toe-img-tic.png" alt={`Strike ${i}`} className="img-container lower-margin" />
    }
    return (
        <div className="align-pos">
            <div className="poke-font lower-margin">
                Strikes
            </div>
            <div className="center score-display">
                {strikesArr}
            </div>
        </div>
    )
} 