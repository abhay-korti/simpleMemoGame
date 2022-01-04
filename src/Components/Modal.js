//Rules for the Modal
import React from "react";
import './styles.scss'
import './index.css'

export default function RulesModal() {

    function removingModal(event) {
        console.log(event.target.parentElement.parentElement.style.display = 'none');
    }


    return (
        <div className="open-modal-container">
            <div className="open-modal">
                <h2 className="poke-font">Rules</h2>
                <hr></hr>
                <div className="modal-text">
                    Get points for choosing a card, but don't click on the same card more than once!</div>
                <div className="modal-text">Cards Shuffle around so try your best to get all of the unique cards available to you!</div>

                <button onClick={removingModal}>Got it!</button>
            </div>
        </div>
    )
}
