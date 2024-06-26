import React from 'react';
import { FilterableGameList } from './components/filterable-game-list';
import { GAMES } from './serverResponse/data';

function App() {
  return (
    <>
      <FilterableGameList games={ GAMES }/>
    </>
  );
}

export default App;
