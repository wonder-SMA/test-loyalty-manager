import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { CARD_ROUTE } from '../utils/consts';
import { getFullDate } from '../utils/functions';
import classes from './Card.module.scss';

const Card = (props) => {
  const { id } = props;

  function getBirthday(birthday) {
    const newBirthday = birthday.split('-');
    return `${newBirthday[2]}-${newBirthday[1]}-${newBirthday[0]}`;
  }

  const cardClass = cn({
    [classes['card-one']]: id,
    [classes['card-many']]: !id,
  });

  return (
    <div className={cardClass}>
      < li>
        < Link
          to={!id && CARD_ROUTE + '/' + props['number']}
          onClick={() => window.scrollTo(0, 0)}
        >
          <p><b>Идентификатор карты:</b> {props['uuid']}</p>
          <p><b>Идентификатор вида карты:</b> {props['type_uuid'] ? props['type_uuid'] : '-'}</p>
          <p><b>Номер карты:</b> {props['number']}</p>
          <p><b>Состояние карты:</b> {props['status']}</p>
          <p><b>Владелец карты:</b> {props['holder'] ? props['holder'] : '-'}</p>
          <p><b>Номер телефона владельца:</b> {props['phone'] ? props['phone'] : '-'}</p>
          <p><b>Дата рождения владельца:</b> {props['birthdate'] ? props[getBirthday('birthdate')] : '-'}</p>
          <p><b>Время создания карты:</b> {props[getFullDate('created_date')]}</p>
          <p><b>Идентификатор ЛК создателя карты:</b> {props['created_user']}</p>
          <p><b>Идентификатор торговой точки:</b> {props['created_store_uuid'] ? props['created_store_uuid'] : '-'}</p>
          <p><b>Идентификатор терминала:</b> {props['created_device_uuid'] ? props['created_device_uuid'] : '-'}</p>
          <p><b>Сумма продаж по карте:</b> {props['sales']} руб.</p>
          <p><b>Текущий баланс:</b> {props['balance']}</p>
        </Link>
      </li>
    </div>
  );
};

export default Card;
