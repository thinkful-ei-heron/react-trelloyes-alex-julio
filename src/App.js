import React from 'react';
import STORE from './store';
import List from './List';

function App() {
  let mapVals = STORE.lists.forEach(item => List(item));
  return (
    <main className='App'>
      { mapVals };
    </main>
  );
}

export default App;
