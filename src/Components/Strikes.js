import React from "react";
import './index.css'

export function Strikes(props) {

    let strikesArr = [];
    for (let i = 0; i < props.strikes; i++) {
        strikesArr[i] = <div><img src="https://icon2.cleanpng.com/20180401/jqe/kisspng-x-mark-symbol-cross-clip-art-x-mark-5ac194c6d3a763.5699497915226359748669.jpg" alt={`Strike ${i}`} /> </div>
    }
    return (
        <div className="test-pos">
            <div className="poke-font">
                Strikes
            </div>
            <div className="center score-display">
                {strikesArr}
            </div>
        </div>
    )
} 