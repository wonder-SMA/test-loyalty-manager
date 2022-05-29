import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useDebounce } from '../../../hooks/useDebounce';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { StoreContext } from '../../../index';
import CardList from '../../CardList';
import Search from '../../Search';
import classes from './CardListPage.module.scss';

const CardListPage = observer(() => {
  const { store } = useContext(StoreContext);
  const [searchValue, setSearch] = useLocalStorage('searchValue', '');
  const filterValue = useDebounce(searchValue, 300);

  useEffect(() => {
    store.setFilterForCards(filterValue);
  }, [filterValue]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={classes['card-list-page']}>
      <h1>Бонусные карты: найдено {store.filteredCards.length} шт.</h1>
      <Search searchValue={searchValue} handleSearch={handleSearch} />
      <CardList />
    </div>
  );
});

export default CardListPage;
