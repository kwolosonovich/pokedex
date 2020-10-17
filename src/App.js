import React from 'react';
import './App.css';
import items from './items';
import Pokedex from './Pokedex'
import Pokegame from './Pokegame'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
      <Pokegame items={items} />
    </div>
  );
}

export default App;
