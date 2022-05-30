import React from 'react';

import Card from '../Card';

const CardList = ({ cards }) => {
  return (
    <ul>
      {
        cards.map(card =>
          <Card key={card.number} {...card} />
        )
      }
    </ul>
  );
};

export default CardList;
