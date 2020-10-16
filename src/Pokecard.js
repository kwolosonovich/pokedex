import React from "react";

const Pokecard = ({id, name, type, baseExperience}) => {

    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div>
            <h3 key>{name}</h3>
            <img src={imgSrc} alt="Pokemon"/> 
            <ul>
                <li>Type: {type}</li>
                <li>EXP: {baseExperience}</li>
            </ul>
        </div>
    )
};

export default Pokecard;