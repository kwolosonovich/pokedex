import React from "react";
import Pokecard from './Pokecard';
import './Pokedex.css'


const Pokedex = ({items, exp, status}) => {
    
    return (
      <div className="pokedex">  
        <h1 className="pokedex-winner">{status}</h1>
        <h3>Total Experience: {exp} </h3>
          <div className="pokedex-card">
            {items.map((i) => (
              <Pokecard key={i.id} id={i.id} name={i.name} type={i.type} baseExperience={i.baseExperience}/>
            ))}
          </div>
      </div>
    );
}

export default Pokedex;