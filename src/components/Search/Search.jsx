import React from 'react';

import classes from './Search.module.scss';

const Search = ({ searchValue, handleSearch }) => {
  return (
    <div className={classes.search}>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        className={classes['search_input']}
        placeholder="Введите номер карты"
      />
    </div>
  );
};

export default Search;
