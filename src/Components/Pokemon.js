import React, { useEffect, useState } from 'react'
import './index.css'


export default function Pokemon(props) {

    return (
        <div className="clikcObj" onClick={() => {
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