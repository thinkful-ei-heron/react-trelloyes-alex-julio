import React from 'react';
import STORE from './store';
// import Card from './Card';

function List(props) {
  let header = ({props}) => <h2>{props.header}</h2>;  
  console.log(header);
  return (
  <section className="List">
    <header className="List-header">
      <h2>{ header }</h2>
    </header>
    <div className="List-cards">
      {/* {props.cardIds.map(item => Card(item))} */}
    </div>
  </section>
)
}

export default List();