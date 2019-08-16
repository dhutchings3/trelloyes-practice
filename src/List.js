import React from 'react';
import STORE from './store.js';
import Card from './Card.js';

function List(Card) {
  return (
    <section clasName = "List">
        <header className = "List-header">
            <h2>{header}</h2>
        </header>
        <div class="List-cards">{cardIds}</div>
    </section>
  );
}

export default List;
ReactDOM.render(<h2>{}</h2>, document.getElementById('app'));