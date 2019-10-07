import React from 'react';
import STORE from './store';
import List from './List';



function App() {
    //const {STORE} = this.props;
    return (
      <div className="App-list">
      {STORE.lists.map(list => (<List key={list.id} header={list.header} card={list.cardIds.map(id => STORE.allCards[id])} />))}
      </div>
      )
}

export default App;
