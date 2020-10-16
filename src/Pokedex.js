import React from "react";
import Pokecard from './Pokecard';

const Pokedex = ({items}) => {
    
    return (
      <div className="Pokedex">
        <div className="Pokedex-Card">
          {items.map((i) => (
            <Pokecard key={i.id} id={i.id} name={i.name} type={i.type} baseExperience={i.baseExperience}/>
          ))}
        </div>
      </div>
    );
}

export default Pokedex;