import React from 'react';
import './index.css';

export default function Score(props) {


    return (
        <div className="align-pos center score-display">
            <div className='poke-font'>
                Score
            </div>
            <div className="poke-font">
                {props.score}
            </div>
        </div>
    )

}