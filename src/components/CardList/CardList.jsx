import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import Card from '../Card';
import { StoreContext } from '../../index';

const CardList = observer(() => {
  const { store } = useContext(StoreContext);

  return (
    <ul>
      {
        store.filteredCards.map(card =>
          <Card key={card.number} {...card} />
        )
      }
    </ul>
  );
});

export default CardList;
