import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import Score from './ScoreDisplay';
import { Header } from './Header';
import { reSeedArr } from './ReSeedComps/Seed';
import { Strikes } from './Strikes';
import './index.css'

function App() {

  const [pokeObj, setPokeObj] = useState([]);
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

  }, [])


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


  function boardReset() {
    let copyArr = pokeObj;
    for (let i = 0; i < pokeObj.length; i++) {
      copyArr[i].beenClicked = false;
    }
    setPokeObj(copyArr);
    setStrikes(0);
    setScore(0);
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
            boardReset();
          }
        }
        setPokeObj(copyArr);
        setPokeObj(reArrangeArr());
      }

    }
  }

  return (
    <div>
      <Header />
      <div className='center main-controller'>
        <Strikes strikes={strikes} />
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
        <Score score={score} />
      </div>
    </div>
  );
}

export default App;
