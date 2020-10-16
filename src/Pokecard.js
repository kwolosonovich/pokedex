import React from "react";

const Pokecard = ({id, name, type, baseExperience}) => {

    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div>
            <h3>{name}</h3>
            <img src={imgUrl} alt=""/>
            <ul>
                <li>Type: {type}</li>
                <li>EXP: {baseExperience}</li>
            </ul>
        </div>
    )
};

export default Pokecard;