import React from 'react';

import { getFullDate } from '../utils/functions';
import classes from './Receipt.module.scss';

const Receipt = (props) => {
  return (
    <div className={classes['receipt']}>
      <li>
        <p><b>Идентификатор чека:</b> {props['uuid']}</p>
        <p><b>Идентификатор ЛК Эвотор:</b> {props['user_uid']}</p>
        <p><b>Идентификатор карты:</b> {props['card_uuid']}</p>
        <p><b>Вид чека:</b> {props['type']}</p>
        <p><b>Номер чека:</b> {props['number']}</p>
        <p><b>Дата чека:</b> {getFullDate(props['period'])}</p>
        <p><b>Сумма чека без учета скидок и оплат бонусами:</b> {props['total']}</p>
        <p><b>Итог чека с учетом скидок и оплат бонусами:</b> {props['totalWithDiscount']}</p>
        <p><b>Сумма начисленных бонусов:</b> {props['bonus']}</p>
        <p><b>Сумма потраченных бонусов:</b> {props['payment']}</p>
      </li>
    </div>
  );
};

export default Receipt;
