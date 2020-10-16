import React from 'react';
import './App.css';
import items from './items';
import Pokedex from './Pokedex'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
      <Pokedex items={items} />
    </div>
  );
}

export default App;
