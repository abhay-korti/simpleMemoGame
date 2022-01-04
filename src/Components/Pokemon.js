import React, { useEffect, useState } from 'react'
import './index.css'
import './styles.scss'


export default function Pokemon(props) {

    return (
        <div className="clikcObj" onClick={(event) => {
            // const elementArray = event.target.parentElement.parentElement.parentElement.parentElement.children;
            // let newElementArray = Array.from(elementArray);
            // newElementArray.forEach((element) => {
            //     element.className = 'clikcObj-animation';
            // })
            props.funcSetBeenClicked(props.obj.name);
        }}>
            <div>
                <img src={`${props.obj.url}`} alt={props.obj.name} />
            </div>
            <div className='text-change'>
                {props.obj.name.toUpperCase()}
            </div>
        </div>
    )
}