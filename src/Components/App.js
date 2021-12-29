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
  const [clickedPoke, setClickedPoke] = useState([]);
  const [strikes, setStrikes] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log('Mounting Comps');
    // function setData() {
    //   for (let i = 0; i < 20; i++) {
    //     const test = fetch(`https://pokeapi.co/api/v2/pokemon`)
    //       .then(response => {
    //         return response.json()
    //       }).then(reqJSON => {
    //         let reqObj = {};
    //         reqObj = (reqJSON.results[i]);
    //         setPokeObj(pokeObj.push({ index: i + 1, name: reqObj.names, url: reqObj.url, beenClicked: false }))
    //         console.log(pokeObj);
    //         return fetch(reqObj.url)
    //       }).then(resp => {
    //         return resp.json()
    //       }).then(
    //         (r) => {
    //           console.log(r)
    //         }
    //       )
    //   }
    // }
    async function setData() {
      let tempArr = [];
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon`);
      console.log('Fetching 1')
      const reqObj = await req.json();
      // setPokeObj(
      //   reqObj.results.map(
      //     (items, index) => {
      //       return { index: index + 1, name: items.name, url: items.url, beenClicked: false }
      //     }
      //   ));
      for (let i = 0; i < reqObj.results.length; i++) {
        const newReq = await fetch(reqObj.results[i].url);
        console.log('Fetching 2')
        const newReqJSOn = await newReq.json();
        tempArr.push({ index: i + 1, name: reqObj.results[i].name, url: newReqJSOn.sprites.front_default, beenClicked: false })
      }
      setPokeObj(tempArr);

    }
    setData();

    // async function fetchPokeData() {
    //   console.log('Comp Mounting');
    //   let linkArr = [];
    //   let copyArr = pokeObj;
    //   for (let i = 0; i < pokeObj.length; i++) {
    //     const pokeP = await fetch(`${pokeObj[i].url}`);
    //     const pokeJSON = await pokeP.json();
    //     console.log('Requesting Data')
    //     linkArr.push(await pokeJSON.sprites.front_default);
    //   }
    //   for (let j = 0; j < linkArr.length; j++) {
    //     copyArr[j].url = await linkArr[j];
    //     console.log(await copyArr[j]);
    //   }
    //   console.log(copyArr);
    //   setPokeObj(copyArr);
    //   console.log(pokeObj);
    // }
    // fetchPokeData();
  }, [])

  function reSeedArr(len = 5) {
    const arr = [];
    while (arr.length < len) {
      const randomNumber = parseInt(Math.random() * 20);
      if (!arr.includes(randomNumber)) {
        arr.push(randomNumber)
      }
    }
    return arr;
  }

  function reArrangeArr() {
    const seedArr = reSeedArr(pokeObj.length);
    console.log(seedArr)
    let localCopyArr = [];
    for (let i = 0; i < seedArr.length; i++) {
      let seedNum = seedArr[i];
      localCopyArr.push(pokeObj[seedNum]);
    }
    console.log(localCopyArr);
    return localCopyArr
  }


  function passedOnClick(name) {
    console.log(name);
    let copyArr = pokeObj;
    for (let i = 0; i < copyArr.length; i++) {
      if (name == copyArr[i].name) {
        if (copyArr[i].beenClicked == false) {
          setScore(score + 1);
          copyArr[i].beenClicked = true;
        }
        else {
          if (strikes < 3) {
            setStrikes(strikes + 1);
            alert('Been Clicked already!');
          }
          else {
            alert('Game Over!');
          }
        }
        setPokeObj(copyArr);
        setPokeObj(reArrangeArr());
      }

    }
  }

  return (
    <div className='center-donny'>
      <div className="App">
        {//Component must be used to handle API Request and assigning them to the Box objs, which contain the sprites, name, beenClicked and event listener
          pokeObj.map((poke) => {
            return (
              <div>
                <Pokemon obj={poke} funcSetBeenClicked={passedOnClick} />
              </div>
            )
          })
        }
      </div>
      <div>
        Scores = {score}
      </div>
    </div>
  );
}

export default App;
