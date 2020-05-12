import React from 'react';
import './Level1Card.css';
import GameCards from './components/Cards/index.js';

function Level1Card() {
  return (
    <div className="Level1Card">
        <GameCards label='what was your first impression of me?'></GameCards>
    </div>
  );
}

export default Level1Card;
