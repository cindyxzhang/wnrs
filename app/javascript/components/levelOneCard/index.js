import React from 'react';
import './styles.css';
import Cards from 'components/Cards/index.js';

function Level1Card() {
  return (
    <div className="Level1Card">
      <Cards label='what was your first impression of me?' />
    </div>
  );
}

export default Level1Card;
