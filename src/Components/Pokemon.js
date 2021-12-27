import React, { useEffect, useState } from 'react'
import './index.css'


export default function Pokemon(props) {

    console.log(props)

    const [pokeURL, setPokeURL] = useState('');

    useEffect(() => {

        async function fetchPokeData() {
            const pokeP = await fetch(`${props.obj.url}`);
            const pokeJSON = await pokeP.json();
            console.log(pokeJSON);
            setPokeURL(pokeJSON.sprites.front_default)
        }
        fetchPokeData();
    }, [])

    return (
        <div className="clikcObj" onClick={() => {
            props.funcSetBeenClicked(props.obj.name);
            console.log(props);
        }}>
            <div>
                <img src={`${pokeURL}`} alt={props.obj.name} />
            </div>
            <div>
                {props.obj.index}
            </div>
            <div>
                {props.obj.name.toUpperCase()}
            </div>
        </div>
    )
}