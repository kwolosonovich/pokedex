import React from 'react';
import Pokedex from './Pokedex'
import Randomize from "./Randomize"

const Pokegame = ({ items }) => {

    let randomArr = Randomize(items)

    let hand1 = randomArr.slice(0, 4)
    let hand2 = randomArr.slice(4, 8)

    let exp1 = hand1.reduce(
        (exp, pokemon) => exp + pokemon.baseExperience,
        0
    );

    let exp2 = hand2.reduce(
        (exp, pokemon) => exp + pokemon.baseExperience,
        0
    );

    let status1 = false;
    let status2 = true; 


    if (exp1 > exp2) {
        status1 = "WINNER!";
        status2 = "";
    } else {
        status2 = "WINNER!";
        status1 ="";
    }  

    return (
      <div>
        <Pokedex items={hand1} exp={exp1} status={status1} />
        <Pokedex items={hand2} exp={exp2} status={status2} />
      </div>
    );


}

export default Pokegame