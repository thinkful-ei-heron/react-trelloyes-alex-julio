import React from 'react';

import Card from './Card';

function List(props) { 
  return (
  
  <section className="List">
    <header className="App-header">
      <h1>{props.header}</h1>
    </header>
    <div className="List-cards">
      {props.card.map((card) => Card(card))}
    </div>
  </section>
)
}

export default List;