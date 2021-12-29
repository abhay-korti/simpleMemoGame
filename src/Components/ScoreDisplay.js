import React from 'react';
import './index.css';

export default function Score(props) {


    return (
        <div className="test-pos">
            <div className='center poke-font'>
                Score
            </div>
            <div className="center poke-font">
                {props.score}
            </div>
        </div>
    )

}