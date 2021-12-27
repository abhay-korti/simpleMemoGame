import './App.css';
import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import './index.css'

function App() {
  /* 
  
     --Header-- 
  --Score    Display-- 

  Comp Comp Comp Comp 
  Comp Comp Comp Comp 
  Comp Comp Comp Comp 
  Comp Comp Comp Comp 
  Comp Comp Comp Comp 

  */
  const [pokeObj, setPokeObj] = useState([]);

  useEffect(() => {
    console.log('Mounting Comps')
    async function setData() {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon`);
      const reqObj = await req.json()
      setPokeObj(
        reqObj.results.map(
          (items, index) => {
            console.log(items);
            return { index: index + 1, name: items.name, url: items.url, beenClicked: false }
          }
        )
      );
    }
    setData();
  }, [])


  function passedOnClick(name) {
    console.log(name);
    let copyArr = pokeObj;
    for (let i = 0; i < copyArr.length; i++) {
      if (name == copyArr[i].name) {
        console.log('test');
      }
    }
  }

  return (
    <div className='center-donny'>
      <div className="App">
        {//Component must be used to handle API Request and assigning them to the Box objs, which contain the sprites, name, beenClicked and event listener
          pokeObj.map((poke) => {
            console.log(poke);
            return (
              <div>
                <Pokemon obj={poke} funcSetBeenClicked={passedOnClick} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
