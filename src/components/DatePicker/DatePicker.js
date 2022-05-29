import React, { useState } from 'react';

import Button from '../ui/Button';
import { getTimestamp } from '../utils/functions';
import classes from './DatePicker.module.scss';

const DatePicker = ({ uuid, setIsFiltered, setForPeriod }) => {
  const [startDate, setStartDate] = useState('');
  const [prevStartDate, setPrevStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [prevEndDate, setPrevEndDate] = useState('');

  const handleStartDate = (value) => {
    setStartDate(value);
  };

  const handleEndDate = (value) => {
    setEndDate(value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if ((!startDate || !endDate) || (startDate === prevStartDate && endDate === prevEndDate)) {
      return;
    }
    setPrevStartDate(startDate);
    setPrevEndDate(endDate);
    setForPeriod(getTimestamp(startDate), getTimestamp(endDate), uuid);
    setIsFiltered(true);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setStartDate('');
    setEndDate('');
    setIsFiltered(false);
  };

  return (
    <div className={classes['form-wrapper']}>
      <label htmlFor="dataForm">Укажите период отбора в формате дд.мм.гггг</label>
      <form id="dataForm">
        <div className={classes['input-wrapper']}>
          <input
            type="text"
            placeholder="начало"
            value={startDate}
            onChange={event => handleStartDate(event.target.value)}
          />
          <input
            type="text"
            placeholder="конец"
            value={endDate}
            onChange={event => handleEndDate(event.target.value)}
          />
        </div>
        <div className={classes['form-buttons']}>
          <Button onClick={handleSearch}>Поиск</Button>
          <Button onClick={handleClear}>Очистить</Button>
        </div>
      </form>
    </div>
  );
};

export default DatePicker;
