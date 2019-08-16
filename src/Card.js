import React from 'react';
import STORE from './Store.js';

function Card(STORE) {
    for (i=0; i > STORE.List.length; i++) {
  return (
    <div class="Card">
    <button type="button">delete</button>
    <h3>{STORE.List.title}</h3>
    <p>{STORE.List.content}</p>
  </div>
  );
}
};

export default Card;
