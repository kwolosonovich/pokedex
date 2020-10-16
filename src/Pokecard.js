import React from "react";
import "./Pokecard.css"

const Pokecard = ({id, name, type, baseExperience}) => {

    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="pokecard">
            <h3 className="pokecard-name">{name}</h3>
            <img src={imgUrl} alt="" className="pokecard-image" />
            <ul>
                <li className="pokecard-desc">Type: {type}</li>
                <li className="pokecard-desc">EXP: {baseExperience}</li>
            </ul>
        </div>
    )
};

export default Pokecard;