import React, { useState } from 'react';

import Button from '../ui/Button';
import classes from './DatePicker.module.scss';

const DatePicker = ({ handleFilter, handleClear }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDate = (value) => {
    setStartDate(value);
  };

  const handleEndDate = (value) => {
    setEndDate(value);
  };

  const handleFilterDate = (event) => {
    event.preventDefault();
    handleFilter([startDate, endDate]);
  };

  const handleClearDate = (event) => {
    event.preventDefault();
    setStartDate('');
    setEndDate('');
    handleClear();
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
          <Button onClick={handleFilterDate}>Показать</Button>
          <Button onClick={handleClearDate}>Очистить</Button>
        </div>
      </form>
    </div>
  );
};

export default DatePicker;
