import React from 'react';

import { getFullDate } from '../utils/functions';
import classes from './Transaction.module.scss';

const Transaction = (props) => {
  return (
    <div className={classes['transaction']}>
      <li>
        <p><b>Идентификатор транзакции:</b> {props['uuid']}</p>
        <p><b>Идентификатор карты:</b> {props['card_uuid']}</p>
        <p><b>Сумма транзакции:</b> {props['delta']}</p>
        <p><b>Состояние транзакции:</b> {props['state']}</p>
        <p><b>Дата транзакции:</b> {getFullDate(props['period'])}</p>
        <p><b>Дата активации транзакции:</b> {props['period_activate'] ? props['period_activate'] : '-'}</p>
        <p><b>Идентификатор ЛК Эвотор:</b> {props['user_uid'] ? props['user_uid'] : '-'}</p>
        <p><b>Идентификатор торговой точки:</b> {props['store_uuid'] ? props['store_uuid'] : '-'}</p>
        <p><b>Идентификатор терминала:</b> {props['device_uuid'] ? props['device_uuid'] : '-'}</p>
        <p><b>Идентификатор связанного чека:</b> {props['receipt_uuid'] ? props['receipt_uuid'] : '-'}</p>
        <p><b>Комментарий:</b> {props['comment'] ? props['comment'] : '-'}</p>
      </li>
    </div>
  );
};

export default Transaction;
